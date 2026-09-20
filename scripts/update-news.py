"""Collect public F1 RSS headlines. Standard library only; no full articles or images.
Existing entries survive feed expiry and outages. No artificial publication dates.
"""
import concurrent.futures, datetime as dt, email.utils, hashlib, html, json, re
import pathlib, unicodedata, urllib.parse, urllib.request, xml.etree.ElementTree as ET

ROOT = pathlib.Path(__file__).resolve().parents[1]
DEST = ROOT / 'data/f1-news.json'
FEEDS = [
    ('Motorsport.com France', 'https://fr.motorsport.com/rss/f1/news/', 'fr'),
    ('BBC Sport', 'https://feeds.bbci.co.uk/sport/formula1/rss.xml', 'en'),
]

def plain(s):
    return re.sub(r'\s+', ' ', html.unescape(re.sub('<[^>]*>', '', s or ''))).strip()

def categories(title):
    s = ''.join(c for c in unicodedata.normalize('NFD', title.lower()) if unicodedata.category(c) != 'Mn')
    tags = []
    if re.search(r'pilote|driver|tsunoda|vettel|ricciardo|hamilton|leclerc|verstappen|norris|piastri|russell|antonelli|alonso|sainz|gasly|ocon|albon|hadjar|lawson|bearman|hulkenberg|bortoleto|stroll|perez|bottas|colapinto|lindblad', s): tags.append('pilotes')
    if re.search(r'ecurie|team|ferrari|mercedes|mclaren|red bull|alpine|williams|aston martin|haas|audi|cadillac|racing bulls|sauber', s): tags.append('ecuries')
    if re.search(r'halo|techni|voiture|car\b|moteur|engine|aero|aileron|wing|chassis|pneu|tyre|tire\b|upgrade|evolution|reglement|regulat|monoplace|batter|hybrid', s): tags.append('voitures')
    return tags or ['competition']

def collect(feed, now):
    name, url, lang = feed
    req = urllib.request.Request(url, headers={'User-Agent':'F1Constant/21 RSS reader (+https://drivedotr.github.io/F1CONSTANT/)'})
    with urllib.request.urlopen(req, timeout=25) as res:
        raw = res.read(3_000_001)
    if len(raw) > 3_000_000: raise ValueError('Feed too large')
    root = ET.fromstring(raw)
    items = []
    for item in root.findall('.//item'):
        title = plain(item.findtext('title'))[:500]
        link = (item.findtext('link') or '').strip()
        host = urllib.parse.urlsplit(link).hostname or ''
        allowed = ['motorsport.com'] if 'Motorsport' in name else ['bbc.com', 'bbc.co.uk']
        if not title or not any(host == d or host.endswith('.'+d) for d in allowed): continue
        if urllib.parse.urlsplit(link).scheme not in ['https','http']: continue
        if any(part in urllib.parse.urlsplit(link).path for part in ['/sounds/', '/iplayer/', '/motogp/', '/fia-f3/']): continue
        try:
            published = email.utils.parsedate_to_datetime(item.findtext('pubDate') or '')
            if published.tzinfo is None: continue
            published = published.astimezone(dt.timezone.utc)
        except (ValueError, TypeError, OverflowError): continue
        if published > now + dt.timedelta(minutes=15): continue
        # Keep news headlines, excluding commercial and audio-only roundups.
        if re.search(r'\b(podcast|betting|odds|tickets|billetterie|shopping)\b', title, re.I): continue
        split = urllib.parse.urlsplit(link)
        canonical = urllib.parse.urlunsplit((split.scheme, split.netloc, split.path, '', ''))
        items.append({'id':hashlib.sha256(canonical.encode()).hexdigest()[:20], 'title':title,
                      'url':canonical, 'source':name, 'language':lang,
                      'publishedAt':published.isoformat(), 'topics':categories(title)})
    if not items: raise ValueError('No dated, valid news entries returned')
    return items

def main():
    now = dt.datetime.now(dt.timezone.utc)
    old = json.loads(DEST.read_text()) if DEST.exists() else {'articles':[], 'sources':[]}
    articles = {a['id']:a for a in old['articles']}
    statuses, successes = [], 0
    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
        jobs = [(f, pool.submit(collect, f, now)) for f in FEEDS]
        for feed, job in jobs:
            try:
                items = job.result()
                for a in items:
                    a['firstSeenAt'] = articles.get(a['id'],{}).get('firstSeenAt',now.isoformat())
                    articles[a['id']] = a
                statuses.append({'name':feed[0], 'url':feed[1], 'ok':True, 'count':len(items), 'checkedAt':now.isoformat()})
                successes += 1
            except Exception as e:
                statuses.append({'name':feed[0], 'url':feed[1], 'ok':False, 'checkedAt':now.isoformat()})
                print('Feed unavailable:',feed[0],type(e).__name__)
    # Fail the workflow without overwriting the last valid collection on total failure.
    if not successes: raise RuntimeError('All sources failed; previous archive preserved')
    result = {'version':1, 'startedAt':old.get('startedAt',now.isoformat()),
              'collectedAt':now.isoformat(), 'sources':statuses,
              'articles':sorted(articles.values(),key=lambda a:a['publishedAt'],reverse=True)}
    DEST.parent.mkdir(parents=True,exist_ok=True)
    temp = DEST.with_suffix('.tmp')
    temp.write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
    temp.replace(DEST)
    print('Collected',len(result['articles']),'archived headlines;',successes,'working sources')

if __name__ == '__main__': main()
