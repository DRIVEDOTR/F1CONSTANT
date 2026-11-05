#!/usr/bin/env python3
"""Refresh published F1DB statistics atomically; never scrape or guess results.

No third-party dependencies. --source-dir and --release-json allow offline tests.
The curated biographies, pictures, team identities and track drawings stay local.
"""
import argparse
import collections
import datetime as dt
import io
import hashlib
import json
import math
from pathlib import Path
import re
import tempfile
import urllib.request
import zipfile

SEASON = 2026
ROOT = Path(__file__).resolve().parents[1]
RELEASE_API = 'https://api.github.com/repos/f1db/f1db/releases/latest'
TABLES = ['drivers', 'constructors', 'countries', 'circuits', 'circuits-layouts',
          'grands-prix', 'races', 'races-race-results', 'races-fastest-laps',
          'races-qualifying-results', 'races-sprint-race-results', 'seasons-driver-standings',
          'seasons-constructor-standings', 'seasons-drivers', 'seasons-constructors']
MONTHS = ['', 'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet',
          'août', 'septembre', 'octobre', 'novembre', 'décembre']

GP_LABELS = {'australia':'Grand Prix d’Australie','china':'Grand Prix de Chine','japan':'Grand Prix du Japon',
    'miami':'Grand Prix de Miami','canada':'Grand Prix du Canada','monaco':'Grand Prix de Monaco',
    'barcelona-catalunya':'Grand Prix de Barcelone-Catalogne','austria':'Grand Prix d’Autriche',
    'great-britain':'Grand Prix de Grande-Bretagne','belgium':'Grand Prix de Belgique','hungary':'Grand Prix de Hongrie',
    'netherlands':'Grand Prix des Pays-Bas','italy':'Grand Prix d’Italie','spain':'Grand Prix d’Espagne',
    'azerbaijan':'Grand Prix d’Azerbaïdjan','bahrain':'Grand Prix de Bahreïn','singapore':'Grand Prix de Singapour',
    'united-states':'Grand Prix des États-Unis','usa':'Grand Prix des États-Unis','mexico':'Grand Prix du Mexique',
    'sao-paulo':'Grand Prix de São Paulo','las-vegas':'Grand Prix de Las Vegas','qatar':'Grand Prix du Qatar',
    'abu-dhabi':'Grand Prix d’Abu Dhabi'}

def fr_date(value):
    d = dt.date.fromisoformat(value)
    return f'{d.day} {MONTHS[d.month]} {d.year}'

def lap_millis(value):
    match = re.fullmatch(r'(\d+):([0-5]\d)\.(\d{1,3})',str(value))
    if not match:
        raise ValueError('Chrono de record invalide')
    minutes, seconds, fraction = match.groups()
    return (int(minutes)*60+int(seconds))*1000+int(fraction.ljust(3,'0'))

def encoded(value):
    return json.dumps(value, ensure_ascii=False, separators=(',', ':'), allow_nan=False).replace('<', '\\u003c')

def declaration(text, name):
    match = re.search(r'\bconst\s+' + re.escape(name) + r'\s*=\s*', text)
    if not match:
        raise ValueError('Déclaration absente : ' + name)
    start = match.end()
    obj, length = json.JSONDecoder().raw_decode(text[start:])
    return obj, start, start + length

def get(text, name):
    return declaration(text, name)[0]

def fetch(url, limit):
    req = urllib.request.Request(url, headers={'User-Agent': 'F1Constant-statistics/58', 'Accept': 'application/json'})
    with urllib.request.urlopen(req, timeout=60) as response:
        content = response.read(limit + 1)
    if len(content) > limit:
        raise ValueError('Réponse trop volumineuse')
    return content

def download(release):
    if release.get('draft') or release.get('prerelease') or not re.fullmatch(rf'v{SEASON}\.\d+\.\d+', release.get('tag_name', '')):
        raise ValueError('Publication non stable ou nouvelle saison : contrôle éditorial requis')
    asset = next(a for a in release['assets'] if a['name'] == 'f1db-json-splitted.zip')
    url = asset['browser_download_url']
    if url != f"https://github.com/f1db/f1db/releases/download/{release['tag_name']}/f1db-json-splitted.zip":
        raise ValueError('Adresse de publication inattendue')
    content = fetch(url,25_000_000)
    digest = asset.get('digest')
    if digest and digest != 'sha256:'+hashlib.sha256(content).hexdigest():
        raise ValueError('Empreinte de publication incorrecte')
    archive = zipfile.ZipFile(io.BytesIO(content))
    result = {}
    for name in TABLES:
        filename = 'f1db-' + name + '.json'
        member = next(n for n in archive.namelist() if Path(n).name == filename)
        if archive.getinfo(member).file_size > 40_000_000:
            raise ValueError('Table trop volumineuse : ' + name)
        result[name] = json.loads(archive.read(member))
    return result

def build(text, db, release, today):
    """Return a complete new bundle and provenance report, without writing."""
    tag = release['tag_name']
    if release.get('draft') or release.get('prerelease') or not re.fullmatch(rf'v{SEASON}\.\d+\.\d+', tag):
        raise ValueError('Publication F1DB non stable ou autre saison')
    release_date = release['published_at'][:10]
    if release_date > today.isoformat():
        raise ValueError('Publication future')
    url = f'https://github.com/f1db/f1db/releases/tag/{tag}'
    for name in TABLES:
        if not isinstance(db.get(name), list) or not db[name]:
            raise ValueError('Table absente / vide : ' + name)
    drivers = {d['id']: d for d in db['drivers']}
    constructors = {t['id']: t for t in db['constructors']}
    circuits = {c['id']: c for c in db['circuits']}
    countries = {c['id']: c for c in db['countries']}
    races = {r['id']: r for r in db['races']}
    rows = collections.defaultdict(list)
    for row in db['races-race-results']:
        race = races.get(row['raceId'])
        if race is None or row['driverId'] not in drivers or row['constructorId'] not in constructors:
            raise ValueError('Référence de résultat inconnue')
        if race['date'] > today.isoformat():
            raise ValueError('Résultat de course future')
        points = row.get('points')
        if points is not None and (not isinstance(points,(int,float)) or not math.isfinite(points)):
            raise ValueError('Points de course invalides')
        rows[row['raceId']].append(row)
    completed = [r for r in races.values() if r['year'] == SEASON and rows[r['id']]]
    if not completed:
        raise ValueError('Aucun Grand Prix publié pour la saison')
    for race in completed:
        rr = rows[race['id']]
        if len(rr)<20 or sum(r['positionNumber']==1 for r in rr)!=1:
            raise ValueError('Classement de course incomplet')
    last = max(completed, key=lambda r: r['round'])
    as_of = last['date']
    if 'const F1_UPDATE_META=' in text:
        previous_tag = get(text,'F1_UPDATE_META')['release']
        if tuple(map(int,tag[1:].split('.'))) < tuple(map(int,previous_tag[1:].split('.'))):
            raise ValueError('Publication plus ancienne que la copie conservée')
    old_career = get(text, 'CAREER_DATA')
    if as_of < old_career['asOf']:
        raise ValueError('Refus de remplacer les données par une publication plus ancienne')
    scheduled = sorted((r for r in races.values() if r['year'] == SEASON), key=lambda r:r['round'])
    if len(scheduled) < 15 or len({r['round'] for r in scheduled}) != len(scheduled):
        raise ValueError('Calendrier incomplet ou dupliqué')
    source = f'F1DB {tag}'
    catalogue = get(text, 'CIRCUITS_2026')
    profiles = get(text, 'DRIVERS_2026')
    legends = get(text, 'LEGENDS_F1')
    teams = get(text, 'TEAMS_2026')
    historic = get(text, 'HISTORIC_TEAMS')
    archive = get(text, 'F1_ARCHIVE')
    snapshot = get(text, 'QUALIFYING_SNAPSHOT')
    by_driver = collections.defaultdict(list)
    by_team = collections.defaultdict(list)
    for rr in rows.values():
        for r in rr:
            by_driver[r['driverId']].append(r)
            by_team[r['constructorId']].append(r)
    def titles(kind, key):
        table = db['seasons-' + kind + '-standings']
        field = 'driverId' if kind == 'driver' else 'constructorId'
        return sorted({r['year'] for r in table if r[field] == key and r.get('championshipWon')})
    def history(key, kind):
        rr = (by_driver if kind == 'driver' else by_team)[key]
        return {'wins': sorted({r['raceId'] for r in rr if r['positionNumber'] == 1}, reverse=True),
                'poles': sorted({r['raceId'] for r in rr if r.get('polePosition')}, reverse=True),
                **({'podiums': [{'raceId':rid,'position':pos} for rid,pos in sorted({rid:min(r['positionNumber'] for r in rr if r['raceId']==rid and r['positionNumber'] in [1,2,3]) for rid in {r['raceId'] for r in rr if r['positionNumber'] in [1,2,3]}}.items(), reverse=True)]} if kind == 'driver' else {}),
                'titles': titles(kind, key)}
    career = {**old_career, 'asOf':as_of, 'release':tag, 'source':url, 'drivers':{}, 'teams':{}, 'events':{}}
    for rid, r in races.items():
        if not rows[rid]:
            continue
        circuit = circuits[r['circuitId']]
        old = old_career['events'].get(str(rid), {})
        country = next((e['country'] for e in old_career['events'].values() if e.get('locality') == circuit['placeName']), countries[circuit['countryId']]['name'])
        career['events'][str(rid)] = {**old,'raceId':rid,'season':r['year'],'date':r['date'],
            'poleDate':r.get('qualifyingDate'),'raceName':GP_LABELS.get(r['grandPrixId'],old.get('raceName',archive['gps'].get(r['grandPrixId'],r['officialName']))),
            'circuit':old.get('circuit',circuit['fullName']),'locality':circuit['placeName'],'country':country}
    for p in profiles + legends:
        raw = drivers[p['dbId']]
        for target, field in [('starts','totalRaceStarts'),('points','totalPoints'),('wins','totalRaceWins'),('podiums','totalPodiums'),('poles','totalPolePositions'),('titles','totalChampionshipWins')]:
            value = raw[field]
            if not isinstance(value,(int,float)) or not math.isfinite(value) or value < 0:
                raise ValueError('Statistique invalide pour ' + p['dbId'])
            p[target] = value
        h = history(p['dbId'], 'driver')
        if len(h['wins']) != p['wins'] or len(h['poles']) != p['poles'] or len(h['podiums']) != p['podiums'] or len(h['titles']) != p['titles']:
            raise ValueError('Total / historique incohérent : ' + p['dbId'])
        career['drivers'][p['jolpicaId']] = h
        p.update(titleYears=h['titles'],statsUpdated=as_of,statsSource=source)
        if p in profiles:
            base = re.split(r' Au \d{1,2} [^.]+, son parcours en championnat du monde comprend ',p.get('bio',''),maxsplit=1)[0]
            p['bio'] = base + f" Au {fr_date(as_of)}, son parcours en championnat du monde comprend {p['starts']} départs. Son palmarès compte {p['podiums']} podium(s), dont {p['wins']} victoire(s), et {p['poles']} pole position(s)."
    for t in teams:
        raw = constructors[t['dbId']]
        if t['historyConstructorIds'] != [t['dbId']]:
            raise ValueError('Périmètre constructeur à contrôler : ' + t['id'])
        h = history(t['dbId'], 'constructor')
        t.update(careerWins=raw['totalRaceWins'],careerPoles=raw['totalPolePositions'],constructorsTitles=raw['totalChampionshipWins'],worldChampionships=raw['totalChampionshipWins'],titleYears=h['titles'],statsUpdated=as_of,statsSource=source)
        if len(h['wins']) != t['careerWins'] or len(h['poles']) != t['careerPoles'] or len(h['titles']) != t['constructorsTitles']:
            raise ValueError('Palmarès constructeur incohérent : ' + t['id'])
        career['teams'][t['historyConstructorIds'][0]] = h
    for t in historic['teams']:
        raw = constructors[t['id']]
        for target, field in [('entries','totalRaceEntries'),('starts','totalRaceStarts'),('wins','totalRaceWins'),('podiums','totalPodiums'),('poles','totalPolePositions'),('titles','totalChampionshipWins'),('bestChampionship','bestChampionshipPosition'),('bestRaceResult','bestRaceResult')]:
            t[target] = raw[field]
    historic.update(source=source,sourceUrl=url,updated=as_of)
    dstand = [r for r in db['seasons-driver-standings'] if r['year'] == SEASON]
    cstand = [r for r in db['seasons-constructor-standings'] if r['year'] == SEASON]
    if len(dstand)<20 or len(cstand)!=11:
        raise ValueError('Classements incomplets')
    for t in teams:
        row = next(r for r in cstand if r['constructorId'] == t['dbId'])
        t.update(seasonPosition=row['positionText'],seasonPoints=row['points'])
    latest_team = {did:max(rr,key=lambda r:(r['year'],r['round']))['constructorId'] for did,rr in by_driver.items()}
    styles = {t['dbId']:t for t in teams}
    def standing(row, kind):
        did = row.get('driverId')
        tid = latest_team.get(did) if did else row['constructorId']
        t = styles.get(tid,{})
        return {'position':row['positionNumber'],'name':drivers[did]['name'] if did else constructors[tid]['name'],
                'points':row['points'],'teamId':t.get('id',tid),'teamA':t.get('teamA','#34445b'),'teamB':t.get('teamB','#758799')}
    standings = {'season':SEASON,'round':last['round'],'raceDate':as_of,'savedAt':0,'publishedAt':release['published_at'],'source':url,'sourceName':source,
                 'drivers':[standing(r,'driver') for r in dstand if r['positionNumber']],
                 'constructors':[standing(r,'constructor') for r in cstand if r['positionNumber']]}
    archive.update(source=source,sourceUrl=url,updated=as_of)
    for year in sorted({r['year'] for r in races.values()}):
        year_races = sorted((r for r in races.values() if r['year']==year),key=lambda r:r['round'])
        finished = [r for r in year_races if rows[r['id']]]
        ds = [r for r in db['seasons-driver-standings'] if r['year']==year]
        cs = [r for r in db['seasons-constructor-standings'] if r['year']==year]
        archive['seasons'][str(year)] = {'complete':bool(finished) and len(finished)==len(year_races), 'round':max((r['round'] for r in finished),default=0),
            'drivers':[[r['positionText'],r['driverId'],r['points'],sorted({x['constructorId'] for x in by_driver[r['driverId']] if x['year']==year}),bool(r['championshipWon'])] for r in ds],
            'constructors':[[r['positionText'],r['constructorId'],r['points'],r['engineManufacturerId'],bool(r['championshipWon'])] for r in cs],
            'races':[{'id':r['id'],'round':r['round'],'date':r['date'],'time':r['time'],'gp':r['grandPrixId'],'circuit':r['circuitId'],'finished':bool(rows[r['id']])} for r in year_races]}
        for r in year_races:
            archive['results'][str(r['id'])] = [[x['positionText'],x['positionNumber'],x['driverId'],x['constructorId'],x['points'],bool(x['sharedCar']),x['reasonRetired'],x['laps']] for x in sorted(rows[r['id']],key=lambda x:x['positionDisplayOrder'])]
    archive['sprints'] = {str(r['id']):[[x['positionText'],x['positionNumber'],x['driverId'],x['constructorId'],x['points'],False,x['reasonRetired'],x['laps']] for x in sorted(db['races-sprint-race-results'],key=lambda x:x['positionDisplayOrder']) if x['raceId']==r['id']] for r in scheduled}
    archive['sprintDates'] = {str(r['id']):r['sprintRaceDate'] for r in scheduled if r.get('sprintRaceDate')}
    for rid, results in archive['sprints'].items():
        if results and rid not in archive['sprintDates']:
            raise ValueError('Date de sprint absente')
    for did, raw in drivers.items():
        if did not in archive['drivers']:
            archive['drivers'][did] = {'name':raw['name'],'flag':countries[raw['nationalityCountryId']]['alpha2Code'].lower()}
    # Exact layout identity is required: a shorter former layout is never compared.
    lap_candidates = collections.defaultdict(list)
    for lap in db['races-fastest-laps']:
        r = races.get(lap['raceId'])
        if r and rows[r['id']] and isinstance(lap.get('timeMillis'),int) and lap['timeMillis']>0:
            lap_candidates[r['circuitLayoutId']].append(lap)
    record_changes = []
    circuit_changes = []
    layout_warnings = []
    for c in catalogue:
        layout = Path(c['svg']).stem
        candidates = lap_candidates[layout]
        s = c['stats']
        event = next((r for r in scheduled if r['circuitLayoutId']==layout),None)
        if event:
            updated = {'lengthKm':f"{event['courseLength']:.3f}",
                       'laps':str(event.get('scheduledLaps') or event['laps']),
                       'raceDistanceKm':f"{(event.get('scheduledDistance') or event['distance']):.3f}"}
            changed = {key:{'before':s.get(key),'after':value} for key,value in updated.items() if float(s.get(key) or 0)!=float(value)}
            if changed:circuit_changes.append({'circuit':c['id'],'fields':changed})
            if abs(float(s['lengthKm'])-event['courseLength'])>.02:
                raise ValueError('Modification de longueur nécessitant un contrôle du tracé : '+c['id'])
            s.update(updated)
        else:
            known = next((r for r in db['circuits-layouts'] if r['id']==layout),None)
            if known and any(r['circuitId']==known['circuitId'] for r in scheduled):
                layout_warnings.append({'kind':'circuit-layout','circuit':c['id'],'note':'Tracé de la saison différent du dessin : validation FIA requise'})
        if not candidates:
            continue
        record = min(candidates,key=lambda l:l['timeMillis'])
        race = races[record['raceId']]
        if lap_millis(record['time']) != record['timeMillis'] or not 20_000<record['timeMillis']<600_000:
            raise ValueError('Chrono de record incohérent : '+c['id'])
        if abs(float(s['lengthKm'])-race['courseLength'])>.02:
            raise ValueError('Longueur / tracé incompatible : ' + c['id'])
        previous = [s['fastestLap'],s.get('fastestLapHolder'),str(s.get('fastestLapYear'))]
        current = [record['time'],drivers[record['driverId']]['name'],str(race['year'])]
        s.update(fastestLap=current[0],fastestLapHolder=current[1],fastestLapYear=current[2],recordKind='race',recordLayout=layout,recordRaceId=race['id'],statsSource=source,statsUpdated=as_of,recordSource=url)
        if previous != current:
            record_changes.append({'circuit':c['id'],'before':previous,'after':current})
    # Refresh the offline calendar and latest qualifying session; the live Jolpica
    # reader remains available. No sprint win is counted as a Grand Prix win.
    old_calendar = {r['Circuit']['circuitId']:r for r in snapshot['calendar']}
    calendar_aliases = {'melbourne':'albert_park','montreal':'villeneuve','spielberg':'red_bull_ring',
        'spa-francorchamps':'spa','marina-bay':'marina_bay','mexico-city':'rodriguez','austin':'americas',
        'las-vegas':'vegas','lusail':'losail','yas-marina':'yas_marina'}
    calendar = []
    for r in scheduled:
        old = old_calendar.get(calendar_aliases.get(r['circuitId'],r['circuitId']))
        if not old or old['Circuit']['circuitId'] == '':
            raise ValueError('Nouveau circuit : validation du calendrier requise')
        old = json.loads(json.dumps(old))
        old.update(season=str(SEASON),round=str(r['round']),date=r['date'],time=(r['time']+':00Z') if r['time'] else None)
        for field, stem in [('FirstPractice','freePractice1'),('SecondPractice','freePractice2'),('ThirdPractice','freePractice3'),('Qualifying','qualifying'),('Sprint','sprintRace'),('SprintQualifying','sprintQualifying')]:
            if r.get(stem+'Date'):
                old[field] = {'date':r[stem+'Date'],'time':r[stem+'Time']+':00Z' if r[stem+'Time'] else None}
            else:
                old.pop(field,None)
        calendar.append(old)
    qualifying_rows = [q for q in db['races-qualifying-results'] if q['raceId']==last['id']]
    if len(qualifying_rows)<20:
        raise ValueError('Qualifications incomplètes')
    jdrivers = {d['dbId']:d['jolpicaId'] for d in profiles+legends}
    aliases = {'red-bull':'red_bull','racing-bulls':'racing_bulls','aston-martin':'aston_martin'}
    quali = json.loads(json.dumps(next(r for r in calendar if int(r['round'])==last['round'])))
    quali['QualifyingResults'] = []
    for q in sorted(qualifying_rows,key=lambda x:x['positionDisplayOrder']):
        d = drivers[q['driverId']];t = constructors[q['constructorId']]
        quali['QualifyingResults'].append({'number':q['driverNumber'],'position':q['positionText'],
            'Driver':{'driverId':jdrivers.get(d['id'],d['id']),'givenName':d['firstName'],'familyName':d['lastName']},
            'Constructor':{'constructorId':aliases.get(t['id'],t['id']),'name':t['name']},'Q1':q.get('q1') or q.get('time') or '', 'Q2':q.get('q2') or '', 'Q3':q.get('q3') or ''})
    snapshot.update(calendar=calendar,latest=quali,updated=release['published_at'],source=url)
    modern = []
    for year, season in sorted(archive['seasons'].items()):
        if int(year)<2016 or not season['complete']:
            continue
        winner = next((r for r in season['drivers'] if r[4] or r[0]=='1'),None)
        constructor = next((r for r in season['constructors'] if r[4] or r[0]=='1'),None)
        if winner and constructor:
            modern.append({'year':int(year),'driver':drivers[winner[1]]['name'],'driverPoints':winner[2],'constructor':constructors[constructor[1]]['name']})
    changes = {'MODERN_ERA_QUIZ':modern,'CIRCUITS_2026':catalogue,'DRIVERS_2026':profiles,'TEAMS_2026':teams,'LEGENDS_F1':legends,
               'HISTORIC_TEAMS':historic,'CAREER_DATA':career,'STANDINGS_SNAPSHOT':standings,
               'F1_ARCHIVE':archive,'QUALIFYING_SNAPSHOT':snapshot}
    warnings = list(layout_warnings)
    for d in profiles:
        team = next(t for t in teams if d['id'] in t['drivers'])
        if latest_team.get(d['dbId']) != team['dbId']:
            warnings.append({'kind':'driver-team','driver':d['dbId'],'editorialTeam':team['dbId'],'lastRaceTeam':latest_team.get(d['dbId'])})
    known = {d['dbId'] for d in profiles}
    for driver_id in sorted({r['driverId'] for r in rows[last['id']]}-known):
        warnings.append({'kind':'roster','driver':driver_id,'note':'Pilote présent dans le dernier GP, fiche éditoriale à vérifier'})
    previous = get(text,'F1_UPDATE_META') if 'const F1_UPDATE_META=' in text else {}
    meta = {'schema':1,'season':SEASON,'release':tag,'releasePublishedAt':release['published_at'],'asOf':as_of,
            'round':last['round'],'source':url,'intervalHours':6,'profiles':len(profiles),'teams':len(teams),
            'circuitRecords':sum(c['stats'].get('recordKind')=='race' for c in catalogue),'warnings':warnings,
            'recordChanges':record_changes if record_changes or tag!=previous.get('release') else previous.get('recordChanges',record_changes),
            'circuitChanges':circuit_changes if circuit_changes or tag!=previous.get('release') else previous.get('circuitChanges',[])}
    changes['F1_UPDATE_META'] = meta
    for name, value in changes.items():
        if name == 'F1_UPDATE_META' and 'const F1_UPDATE_META=' not in text:
            text = '/* update-status.js */\nconst F1_UPDATE_META='+encoded(value)+';\n\n'+text
        else:
            _, start, end = declaration(text,name)
            text = text[:start]+encoded(value)+text[end:]
    return text, meta

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root',type=Path,default=ROOT)
    parser.add_argument('--source-dir',type=Path)
    parser.add_argument('--release-json',type=Path)
    parser.add_argument('--check',action='store_true',help='Validate and report without writing')
    args = parser.parse_args()
    release = json.loads(args.release_json.read_text()) if args.release_json else json.loads(fetch(RELEASE_API,2_000_000))
    db = {n:json.loads((args.source_dir/('f1db-'+n+'.json')).read_text()) for n in TABLES} if args.source_dir else download(release)
    path = args.root/'assets/site.js'
    text, meta = build(path.read_text(),db,release,dt.datetime.now(dt.timezone.utc).date())
    status = args.root/'data/f1-data-status.json'
    outputs = {path:text,status:json.dumps(meta,ensure_ascii=False,indent=2)+'\n'}
    # Everything is built and validated before replacing either output. In case
    # of a source/network error, the published snapshot is left intact.
    if not args.check:
        for target,content in outputs.items():
            if target.exists() and target.read_text()==content:
                continue
            target.parent.mkdir(parents=True,exist_ok=True)
            with tempfile.NamedTemporaryFile('w',dir=target.parent,encoding='utf-8',delete=False) as temp:
                temp.write(content);temporary=Path(temp.name)
            temporary.replace(target)
    for warning in meta['warnings']:
        print('::warning title=Fiche à contrôler::'+json.dumps(warning,ensure_ascii=False))
    print(json.dumps({'release':meta['release'],'asOf':meta['asOf'],'round':meta['round'],'recordChanges':meta['recordChanges'],'circuitChanges':meta['circuitChanges'],'warnings':meta['warnings'],'checkOnly':args.check},ensure_ascii=False,indent=2))

if __name__ == '__main__':
    main()
