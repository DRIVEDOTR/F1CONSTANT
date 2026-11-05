/* F1 Constant V58 — provenance and season results share the published snapshot. */
(()=>{'use strict';
 const meta=F1_UPDATE_META,A=F1_ARCHIVE,esc=escapeHtml;
 const date=value=>new Date(value+'T12:00:00Z').toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'});
 const number=value=>Number(value||0).toLocaleString('fr-FR',{maximumFractionDigits:3});
 for(const el of document.querySelectorAll('[data-f1-update]'))el.textContent=el.dataset.f1Update==='short'?'Données au '+date(meta.asOf):`Résultats publiés au ${date(meta.asOf)}, après la manche ${meta.round}. Vérification automatique toutes les ${meta.intervalHours} heures ; la disponibilité dépend de la publication par la source.`;
 for(const el of document.querySelectorAll('[data-f1-source]')){el.href=meta.source;el.textContent=`Source : F1DB ${meta.release} ↗`;}
 function profile(kind,item){
  const root=document.getElementById(kind+'SeasonResults');if(!root)return;
  const season=A.seasons[meta.season],isDriver=kind==='driver',standings=isDriver?season.drivers:season.constructors;
  const standing=standings.find(row=>row[1]===item.dbId),matches=[];
  for(const race of [...season.races].reverse()){
   if(!race.finished)continue;
   for(const session of ['Grand Prix','Sprint'])for(const row of (session==='Sprint'?A.sprints?.[race.id]:A.results[race.id])||[])if(row[isDriver?2:3]===item.dbId)matches.push({race,row,session});
  }
  const wins=new Set(matches.filter(x=>x.session==='Grand Prix'&&x.row[1]===1).map(x=>x.race.id)).size;
  const podiums=matches.filter(x=>x.session==='Grand Prix'&&[1,2,3].includes(x.row[1])).length;
  root.innerHTML=`<div class="profile-results-head"><div><p class="eyebrow">SAISON ${meta.season}</p><h3>Les résultats, Grand Prix par Grand Prix</h3></div><span>Données au ${date(meta.asOf)}</span></div><div class="profile-season-stats"><div><span>Championnat</span><strong>${esc(standing?.[0]||'NC')}</strong></div><div><span>Points · sprints inclus</span><strong>${number(standing?.[2])}</strong></div><div><span>Victoires GP</span><strong>${wins}</strong></div><div><span>Podiums GP</span><strong>${podiums}</strong></div></div><details class="profile-results-detail"><summary>Voir les ${new Set(matches.map(x=>x.race.id)).size} Grands Prix disputés</summary><p class="profile-result-help">Grands Prix et sprints sont indiqués séparément. Le total du championnat tient aussi compte des éventuelles décisions sportives.</p><div class="profile-results-scroll"><table><thead><tr><th>Grand Prix / date</th>${isDriver?'':'<th>Pilote</th>'}<th>Résultat</th><th>Points</th></tr></thead><tbody>${matches.map(({race,row,session})=>`<tr class="${row[1]===1?'result-win':row[1]&&row[1]<=3?'result-podium':''}"><td><strong>${esc(CAREER_DATA.events[race.id]?.raceName||A.gps[race.gp]||race.gp)}</strong><small>${session}</small><small>${date(session==='Sprint'?A.sprintDates[race.id]:race.date)}</small>${isDriver?`<small>${esc(A.teams[row[3]]?.name||row[3])}</small>`:''}</td>${isDriver?'':`<td>${esc(A.drivers[row[2]]?.name||row[2])}</td>`}<td><span class="profile-result-position">${esc(row[0])}</span>${row[6]?`<small>${esc(row[6])}</small>`:''}</td><td>${number(row[4])}</td></tr>`).join('')||`<tr><td colspan="${isDriver?3:4}">Aucun résultat publié pour cette identité.</td></tr>`}</tbody></table></div></details><p class="profile-result-help">Palmarès de carrière plus bas · résultats GP et sprints distingués · <a href="${meta.source}" target="_blank" rel="noopener">source et publication ↗</a></p>`;
 }
 window.F1DataUpdates=Object.freeze({profile,metadata:()=>JSON.parse(JSON.stringify(meta))});
})();
