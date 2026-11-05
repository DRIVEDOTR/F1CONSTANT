#!/usr/bin/env python3
"""Offline checks for the published snapshot and updater safeguards."""
import datetime as dt
import importlib.util
import functools
import json
from pathlib import Path
import unittest
from unittest.mock import patch

ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('statistics_updater',ROOT/'scripts/update-statistics.py')
U=importlib.util.module_from_spec(spec);spec.loader.exec_module(U)
TEXT=(ROOT/'assets/site.js').read_text()
@functools.lru_cache(None)
def G(name):return U.get(TEXT,name)

class StatisticsTests(unittest.TestCase):
    def test_one_published_cutoff(self):
        m=G('F1_UPDATE_META');c=G('CAREER_DATA');a=G('F1_ARCHIVE');s=G('STANDINGS_SNAPSHOT')
        self.assertEqual(m['asOf'],c['asOf']);self.assertEqual(m['asOf'],a['updated']);self.assertEqual(m['asOf'],s['raceDate'])
        self.assertEqual(m['round'],s['round']);self.assertEqual(m['round'],a['seasons']['2026']['round'])
        self.assertLessEqual(dt.date.fromisoformat(m['asOf']),dt.datetime.now(dt.timezone.utc).date())
        self.assertEqual(json.loads((ROOT/'data/f1-data-status.json').read_text()),m)
    def test_profile_totals_equal_histories(self):
        c=G('CAREER_DATA')
        for d in G('DRIVERS_2026')+G('LEGENDS_F1'):
            h=c['drivers'][d['jolpicaId']]
            for count,events in [('wins','wins'),('poles','poles'),('podiums','podiums'),('titles','titles')]:self.assertEqual(d[count],len(h[events]),(d['id'],count))
            for event in h['wins']+h['poles']+[p['raceId'] for p in h['podiums']]:self.assertIn(str(event),c['events'])
            self.assertEqual(len(h['podiums']),len({p['raceId'] for p in h['podiums']}),'One historical driver can share more than one podium car in a race')
    def test_constructor_scope_and_season_points(self):
        c=G('CAREER_DATA');s=G('F1_ARCHIVE')['seasons']['2026']
        for t in G('TEAMS_2026'):
            self.assertEqual(t['historyConstructorIds'],[t['dbId']])
            h=c['teams'][t['dbId']]
            self.assertEqual(t['careerWins'],len(h['wins']));self.assertEqual(t['careerPoles'],len(h['poles']));self.assertEqual(t['constructorsTitles'],len(h['titles']))
            self.assertEqual(t['seasonPoints'],next(r[2] for r in s['constructors'] if r[1]==t['dbId']))
        for t in G('TEAMS_2026'):
            for rid in c['teams'][t['dbId']]['wins']:
                self.assertTrue(any(row[1]==1 and row[3]==t['dbId'] for row in G('F1_ARCHIVE')['results'][str(rid)]))
    def test_classifications_complete_and_distinct_from_sprints(self):
        a=G('F1_ARCHIVE');s=a['seasons']['2026'];finished=[r for r in s['races'] if r['finished']]
        self.assertEqual(len(finished),s['round'])
        for r in finished:
            rows=a['results'][str(r['id'])]
            self.assertGreaterEqual(len(rows),20)
            self.assertEqual(sum(x[1]==1 for x in rows),1)
            self.assertTrue(all(x[2] in a['drivers'] and x[3] in a['teams'] for x in rows))
        self.assertIn('sprints',a)
        for rid,rows in a['sprints'].items():
            if rows:
                self.assertEqual(sum(x[1]==1 for x in rows),1)
                self.assertIn(rid,a['sprintDates'])
                race=next(r for r in s['races'] if str(r['id'])==rid)
                self.assertLessEqual(a['sprintDates'][rid],race['date'])
    def test_circuit_records_only_current_layout(self):
        for c in G('CIRCUITS_2026'):
            s=c['stats'];self.assertEqual(s['recordKind'],'race');self.assertEqual(s['recordLayout'],Path(c['svg']).stem)
            self.assertIn(str(s['recordRaceId']),G('CAREER_DATA')['events'])
    def test_planned_distance_not_shortened_race(self):
        c=next(c for c in G('CIRCUITS_2026') if c['id']=='montreal')
        self.assertEqual(c['stats']['laps'],'70')
        self.assertEqual(float(c['stats']['raceDistanceKm']),305.27)
    def test_qualifying_cutoff_and_cache_version(self):
        q=G('QUALIFYING_SNAPSHOT');m=G('F1_UPDATE_META')
        self.assertEqual(int(q['latest']['round']),m['round']);self.assertEqual(q['updated'],m['releasePublishedAt'])
        self.assertGreaterEqual(len(q['latest']['QualifyingResults']),20)
        self.assertIn('cached.savedAt>=Date.parse(current.publishedAt',TEXT)
    def test_quiz_only_final_seasons(self):
        a=G('F1_ARCHIVE')
        for q in G('MODERN_ERA_QUIZ'):
            season=a['seasons'][str(q['year'])]
            self.assertTrue(season['complete'])
            winner=next(r for r in season['drivers'] if r[0]=='1')
            self.assertEqual(q['driverPoints'],winner[2])
    def test_unpublished_or_other_season_never_downloaded(self):
        for release in [{'tag_name':'v2026.20.0-dev-1','prerelease':True},{'tag_name':'v2027.1.0'},{'tag_name':'v2026.19.0','draft':True}]:
            with patch.object(U,'fetch',side_effect=AssertionError('No network allowed')):
                with self.assertRaises(ValueError):U.download(release)
    def test_invalid_source_never_replaces_snapshot(self):
        before=(ROOT/'assets/site.js').read_bytes()
        with self.assertRaises(ValueError):U.build(TEXT,{}, {'tag_name':'v2026.19.0','published_at':'2999-01-01T00:00:00Z'},dt.date(2026,11,5))
        self.assertEqual((ROOT/'assets/site.js').read_bytes(),before)
    def test_lap_chrono_units(self):
        self.assertEqual(U.lap_millis('1:05.619'),65619)
        self.assertEqual(U.lap_millis('1:05.6'),65600)
        with self.assertRaises(ValueError):U.lap_millis('1:99.123')
    def test_unsafe_json_rejected_or_escaped(self):
        self.assertIn('\\u003c',U.encoded({'name':'</script>'}))
        with self.assertRaises(ValueError):U.encoded({'points':float('nan')})

if __name__=='__main__':unittest.main(verbosity=2)
