"""French summaries generated on the runner, with no paid API or credentials."""
import datetime as dt
import html
import json
import os
from pathlib import Path
import re
import subprocess
import sys
import time
import urllib.request
from html.parser import HTMLParser
from local_model import MODEL, MODEL_PATH

class ArticleParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.meta, self.nodes, self.capture, self.text = {}, [], False, ''
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'meta':
            self.meta[a.get('property', a.get('name', ''))] = a.get('content', '')
        if tag == 'script' and a.get('type') == 'application/ld+json':
            self.capture, self.text = True, ''
    def handle_data(self, s):
        if self.capture:
            self.text += s
    def handle_endtag(self, tag):
        if tag == 'script' and self.capture:
            self.capture = False
            try:
                self.nodes.append(json.loads(self.text))
            except ValueError:
                pass

def clean(s):
    return re.sub(r'\s+', ' ', html.unescape(re.sub('<[^>]+>', '', str(s or '')))).strip()

def walk(o):
    if isinstance(o, dict):
        yield o
        for value in o.values():
            yield from walk(value)
    elif isinstance(o, list):
        for value in o:
            yield from walk(value)

def source_text(article):
    req = urllib.request.Request(article['url'], headers={'User-Agent': 'F1Constant/29 news reader'})
    with urllib.request.urlopen(req, timeout=18) as response:
        raw = response.read(3_000_001)
    if len(raw) > 3_000_000:
        raise ValueError('source_too_large')
    parser = ArticleParser()
    parser.feed(raw.decode('utf-8', errors='replace'))
    nodes = list(walk(parser.nodes))
    def is_article(n):
        types = n.get('@type', [])
        return bool(set(types if isinstance(types, list) else [types]) &
                    {'NewsArticle', 'Article', 'ReportageNewsArticle'})
    n = next((n for n in nodes if is_article(n)), {})
    intro = clean(n.get('description') or parser.meta.get('description') or parser.meta.get('og:description'))
    # Never use body text when structured data identifies a paid section.
    paid = any(n.get('isAccessibleForFree') in (False, 'False', 'false') for n in nodes)
    body = '' if paid else clean(n.get('articleBody'))
    if len(body) > len(intro) + 200:
        return body[:8000], 'article' if len(body) <= 8000 else 'excerpt'
    if len(intro) >= 60:
        return intro[:4000], 'introduction'
    raise ValueError('source_unavailable')

def validate(result, article, text):
    if not isinstance(result, dict):
        raise ValueError('invalid_json')
    summary, title = clean(result.get('summaryFr')), clean(result.get('titleFr'))
    # Normalize common English technical terms sometimes retained by the model.
    def vocabulary(s):
        for term, translation in [('front wing','aileron avant'), ('rear wing','aileron arrière'),
                ('power unit','groupe propulseur'), ('wind tunnel','soufflerie'),
                ('pit stop','arrêt aux stands'), ('downforce','appui aérodynamique')]:
            s = re.sub(r'\b'+term+r'\b', translation, s, flags=re.I)
        return s.replace('nouveau aileron', 'nouvel aileron')
    summary, title = vocabulary(summary), vocabulary(title)
    if not 15 <= len(summary.split()) <= 85 or not title or len(title) > 220:
        raise ValueError('invalid_length')
    import langid
    if langid.classify(summary)[0] != 'fr':
        raise ValueError('not_french')
    combined = clean(article['title'] + ' ' + text).lower()
    translated = (title + ' ' + summary).lower()
    if 'pare-brise' in translated and 'windshield' not in combined and 'windscreen' not in combined and 'pare-brise' not in combined:
        raise ValueError('technical_translation')
    for term, french in [('front wing', 'aileron avant'), ('rear wing', 'aileron arrière')]:
        if term in article['title'].lower() and french not in translated:
            raise ValueError('technical_translation')
    words = summary.lower().split()
    if any(' '.join(words[i:i+12]) in combined for i in range(max(0, len(words)-11))):
        raise ValueError('copied_passage')
    # Conservative check: a new numeric value cannot be introduced by the model.
    numbers = lambda s: set(re.findall(r'\d+(?:[.,]\d+)?', s))
    if not numbers(title + ' ' + summary).issubset(numbers(combined)):
        raise ValueError('unsupported_number')
    topics = result.get('topics')
    if not isinstance(topics, list):
        raise ValueError('invalid_topics')
    topics = list(dict.fromkeys(t for t in topics if t in ('pilotes','ecuries','voitures','competition')))
    return {'titleFr': title, 'summaryFr': summary,
            'topics': topics or article.get('topics', ['competition'])}

def summarize(article, text, timeout=240):
    payload = {'title': article['title'], 'publishedAt': article['publishedAt'], 'sourceText': text}
    # Each call has a hard deadline, including native inference. A hung model
    # cannot prevent the collection from being saved.
    result = subprocess.run(
        [sys.executable, str(Path(__file__).with_name('local_model.py'))],
        input=json.dumps(payload, ensure_ascii=False), text=True,
        stdout=subprocess.PIPE, stderr=subprocess.PIPE, timeout=timeout, check=True)
    output = json.loads(result.stdout)
    return validate(output['result'], article, text), bool(output.get('truncated'))

def due(article, now):
    if article.get('summaryFr'):
        return False
    last = article.get('summaryAttemptAt')
    if not last:
        return True
    try:
        wait = min(48, 6 * 2 ** min(3, max(0, int(article.get('summaryAttempts', 1))-1)))
        return now - dt.datetime.fromisoformat(last) >= dt.timedelta(hours=wait)
    except (TypeError, ValueError):
        return True

def enrich(articles, maximum=None):
    now = dt.datetime.now(dt.timezone.utc)
    pending = [a for a in articles if not a.get('summaryFr')]
    def report(mode, created=0, failed=0):
        status = {'mode': mode, 'model': MODEL, 'created': created, 'failed': failed,
                  'pending': sum(not bool(a.get('summaryFr')) for a in articles),
                  'checkedAt': dt.datetime.now(dt.timezone.utc).isoformat()}
        summary_file = os.environ.get('GITHUB_STEP_SUMMARY')
        if summary_file:
            with open(summary_file, 'a') as f:
                f.write('\n### Résumés français locaux\n'
                        f'- État : {mode}\n- Créés : {created}\n- Échecs : {failed}\n'
                        f'- Restants : {status["pending"]}\n')
        if mode in ('unavailable', 'partial'):
            print('::warning::Certains résumés français ne sont pas disponibles ; consulter le bilan.')
        return status
    if not pending:
        return report('ready')
    if not MODEL_PATH.is_file():
        return report('unavailable')
    try:
        import langid
        import llama_cpp
    except (ImportError, OSError):
        return report('unavailable')
    maximum = maximum if maximum is not None else int(os.environ.get('F1_SUMMARY_LIMIT', '12'))
    maximum = max(1, min(40, maximum))
    budget = max(60, min(1800, int(os.environ.get('F1_SUMMARY_SECONDS', '1500'))))
    deadline, success, failed = time.monotonic() + budget, 0, 0
    queue = sorted((a for a in pending if due(a, now)),
                   key=lambda a: (a.get('summaryAttemptAt', ''), -dt.datetime.fromisoformat(a['publishedAt']).timestamp()))
    for article in queue:
        remaining = deadline - time.monotonic()
        if success + failed >= maximum or remaining < 30:
            break
        article['summaryAttemptAt'] = dt.datetime.now(dt.timezone.utc).isoformat()
        article['summaryAttempts'] = int(article.get('summaryAttempts', 0)) + 1
        try:
            try:
                text, scope = source_text(article)
            except Exception:
                text, scope = clean(article.get('_sourceIntro')), 'introduction'
                if len(text) < 60:
                    raise ValueError('source_unavailable')
            remaining = deadline - time.monotonic()
            if remaining < 10:
                raise TimeoutError('budget_exhausted')
            values, truncated = summarize(article, text, timeout=min(240, max(1, int(remaining))))
            article.update(values)
            article.update(summaryMethod='automatic-local', summaryModel=MODEL,
                           summaryScope='excerpt' if truncated and scope == 'article' else scope,
                           summaryAt=dt.datetime.now(dt.timezone.utc).isoformat())
            article.pop('summaryError', None)
            success += 1
        except Exception as error:
            failed += 1
            code = str(error) if isinstance(error, ValueError) else type(error).__name__
            article['summaryError'] = code if re.fullmatch(r'[A-Za-z_]{1,60}', code) else 'generation_failed'
            print('Résumé indisponible :', article.get('id'), article['summaryError'], flush=True)
    return report('partial' if failed else 'ready' if all(a.get('summaryFr') for a in articles) else 'queued',
                  success, failed)
