/* F1 Constant V39 — garage, qualification et course à commandes manuelles. */
(()=>{'use strict';
const $=id=>document.getElementById(id),root=$('view-game'),shell=$('arcadeGame'),canvas=$('arCanvas');
const C=F1ArcadeCore,renderer=new F1ArcadeRenderer(canvas),audio=new F1ArcadeAudio();
const keyboard=new Set(),pointers=new Map(),cache=new Map();
let race=null,level='discovery',frame=0,last=0,hudAt=0,runNumber=0,finishedShown=false,qualifiedGrid=null;
const active=()=>root.classList.contains('active');
const clock=n=>Number.isFinite(n)?`${Math.floor(n/60)}:${(n%60).toFixed(3).padStart(6,'0')}`:'—';
const teamFor=id=>TEAMS_2026.find(t=>t.drivers.includes(id))||TEAMS_2026[0];
function driverData(id){const d=DRIVERS_2026.find(d=>d.id===id),t=teamFor(id);return{name:d.first+' '+d.last,driverId:d.id,driverNumber:d.number,teamId:t.id,teamName:t.name,color:t.teamA};}
const opponentSelects=()=>[...$('arOpponentGrid').querySelectorAll('select')];
function field(){return [driverData($('arDriver').value),...opponentSelects().map(s=>driverData(s.value))];}
function getSettings(session=$('arSession').value==='qualifying'?'qualifying':'race',grid=null){return{level,laps:Number($('arLaps').value),tyre:$('arTyre').value,color:teamFor($('arDriver').value).teamA,drivers:field(),session,grid,seed:++runNumber};}
const recordKey=()=>`f1-arcade-v39:${race.track.id}:${race.options.session}:${race.options.level}:${race.options.laps}:${race.options.tyre}`;
function readTrack(id){
 if(cache.has(id))return cache.get(id);
 const c=CIRCUITS_2026.find(c=>c.id===id),doc=new DOMParser().parseFromString(CIRCUIT_SVGS[id],'image/svg+xml');
 const points=e=>e.getAttribute('points').trim().split(/\s+/).map(p=>p.split(',').map(Number));
 const raw=[...doc.querySelectorAll('.map-layer-sectors polyline')].flatMap(points);
 const pits=[...doc.querySelectorAll('.map-layer-pits polyline')].filter(p=>p.getAttribute('stroke')==='#171c25').flatMap(points);
 const track=C.makeTrack({id:c.id,city:c.city,country:c.country,name:c.name,lengthKm:c.stats.lengthKm},raw,pits);cache.set(id,track);return track;
}
function clear(){keyboard.clear();pointers.clear();root.querySelectorAll('.pressed').forEach(b=>b.classList.remove('pressed'));if(race)race.input={axis:0,throttle:false,brake:false,boost:false};}
function preview(){const t=teamFor($('arDriver').value);if($('arTeamPhoto').dataset.team!==t.id){const img=$('arTeamPhoto');img.hidden=false;img.dataset.team=t.id;img.alt=t.name+' '+t.chassis+' · visuel de la rubrique Écuries';img.onerror=()=>{img.hidden=true;};img.src=t.carImage;}renderer.preview($('arCarPreview'),t.teamA,t);$('arTeamLivery').textContent=t.name+' · '+DRIVERS_2026.find(d=>d.id===$('arDriver').value).last+' · livrée adaptée à la vue du dessus';}
function setTyre(tyre){if(race)race.nextTyre=tyre;root.querySelectorAll('[data-ar-tyre]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.arTyre===tyre)));}
function load(){
 audio.pause();clear();qualifiedGrid=null;race=new C.Race(readTrack($('arCircuit').value),getSettings());setTyre($('arTyre').value);
 shell.dataset.playing='false';$('arResult').hidden=true;finishedShown=false;renderer.key=null;
 $('arLevelName').textContent=level==='challenge'?'SPORT':'CLUB';$('arRaceName').textContent=race.track.city+' · '+(race.options.session==='qualifying'?'qualifications · 2 tours chronométrés':race.options.laps+' tours');
 let record;try{record=JSON.parse(localStorage.getItem(recordKey()));}catch(_){}
 $('arRecord').textContent=record?'Votre record : '+clock(record.time):'Huit F1 · gaz, frein et direction à vous de jouer.';
 $('arStart').firstChild.textContent=race.options.session==='qualifying'?'QUALIFICATIONS ':'SUR LA GRILLE ';
 preview();last=0;hudAt=0;schedule();
}
async function start(session,grid){
 const requested=typeof session==='string'?session:undefined;
 race=new C.Race(readTrack($('arCircuit').value),getSettings(requested,grid));race.start();setTyre($('arTyre').value);clear();
 finishedShown=false;$('arResult').hidden=true;shell.dataset.playing='true';renderer.key=null;
 $('arRaceName').textContent=race.track.city+' · '+(race.options.session==='qualifying'?'qualifications · 2 tours':race.options.laps+' tours');
 canvas.focus({preventScroll:true});shell.scrollIntoView({block:'start',behavior:'instant'});last=0;hudAt=0;schedule();
 await audio.start();$('arAudioStatus').textContent=audio.message||'Grid to Victory · moteur et ambiance musicale réglables.';
}
function pause(){if(!race||!['racing','countdown','paused'].includes(race.state))return;race.pause();clear();last=0;hudAt=0;if(race.state==='paused')audio.pause();else{canvas.focus({preventScroll:true});void audio.start();}schedule();}
function garage(){if(race&&['racing','countdown'].includes(race.state))pause();shell.dataset.playing='false';setFullscreen(false);preview();$('arGarage').scrollIntoView({block:'center',behavior:'smooth'});}
function setFullscreen(on){shell.classList.toggle('ar-fullscreen',on);document.body.classList.toggle('ar-immersed',on);$('arFullscreen').textContent=on?'Réduire':'Agrandir';$('arFullscreen').setAttribute('aria-pressed',String(on));renderer.key=null;schedule();}
function pit(){if(race?.state!=='racing')return;race.requestPit();canvas.focus({preventScroll:true});hudAt=0;schedule();}
function updateInput(){const all=new Set([...keyboard,...pointers.values()]);race.input={axis:(all.has('right')?1:0)-(all.has('left')?1:0),throttle:all.has('throttle'),brake:all.has('brake'),boost:all.has('boost')};}
function frameTick(now){
 frame=0;if(!active()||!race)return;const delta=Math.min(.09,last?(now-last)/1000:0);last=now;updateInput();
 const n=Math.max(1,Math.ceil(delta/.012));for(let i=0;i<n;i++)race.step(delta/n);
 for(const e of race.drainEvents())if(e.type!=='message')audio.cue(e.type,e.up);
 audio.update(race.player,race.state==='racing');renderer.render(race);
 if(now-hudAt>100||!hudAt){hudAt=now;renderHUD();}
 if(race.state==='finished'&&!finishedShown)showResult();
 if(['racing','countdown'].includes(race.state))schedule();
}
function schedule(){if(!frame&&active())frame=requestAnimationFrame(frameTick);}
function renderHUD(){
 const p=race.player,t=race.track,qual=race.options.session==='qualifying';
 $('arPosition').innerHTML=race.rank()+' <small>/ 8</small>';
 $('arLap').innerHTML=Math.min(race.options.laps,Math.max(1,Math.floor(p.s/t.length)+1))+' <small>/ '+race.options.laps+'</small>';
 $('arSpeed').innerHTML=Math.round(p.speed*2.65)+' <small>km/h</small>';
 $('arWear').innerHTML=Math.round((1-p.wear)*100)+' <small>%</small>';$('arWear').style.color=p.wear>.67?'#ffbd85':'#fff2be';
 $('arBoost').innerHTML=Math.round(p.boost)+' <small>%</small>';$('arClock').textContent=clock(race.time);
 $('arTyreBar').style.transform='scaleX('+(1-p.wear)+')';$('arTyreBar').style.background=C.TYRES[p.tyre].color;$('arBoostBar').style.transform='scaleX('+(p.boost/100)+')';
 $('arLapTime').textContent='Meilleur tour : '+clock(p.bestLap)+(p.lapStart!==null&&!p.finished?' · en cours '+clock(race.time-p.lapStart):'');
 $('arPause').disabled=!['racing','countdown','paused'].includes(race.state);$('arPause').textContent=race.state==='paused'?'▶ Reprendre':'Ⅱ Pause';
 $('arPit').disabled=qual||race.state!=='racing'||p.phase!=='track'||p.finished;$('arPit').setAttribute('aria-pressed',String(p.pitRequested));
 $('arPit').textContent=p.phase==='service'?'Changement en cours':p.phase==='pit'?'Dans les stands':p.pitRequested?'✓ Stands réservés':'Demander les stands';
 $('arPitHelp').textContent=qual?'Les arrêts sont disponibles pendant le Grand Prix.':p.pitRequested?'Entrée et limiteur guidés au prochain passage.':p.phase!=='track'?'Le départ attend la dernière roue : suivez les mécaniciens et le chrono.':'Choisissez votre prochaine gomme avant l’immobilisation, puis demandez l’arrêt.';
 const msg=race.state==='ready'?'Maintenez GAZ pour démarrer, puis anticipez le premier virage.':race.state==='paused'?'Course en pause.':race.state==='finished'?'Session terminée.':p.finished?'Votre chrono est enregistré · les autres pilotes terminent leurs tours.':race.messageUntil>race.time?race.message:p.phase==='service'?'Écrous → anciennes roues → pneus neufs → serrage':p.phase==='pit'?'Limiteur activé · stands guidés':p.speed<1?'Maintenez ↑ ou GAZ pour accélérer.':p.slip>.15?'Vous êtes hors de la piste · ralentissez et corrigez la direction.':p.braking?'Freinage · préparez votre sortie de virage':'Pilotez : gaz, frein, direction · la minicarte annonce les virages.';
 if($('arMessage').textContent!==msg)$('arMessage').textContent=msg;
 $('arOverlay').hidden=!['ready','paused','countdown'].includes(race.state);$('arResume').hidden=race.state!=='paused';
 $('arOverlayTitle').textContent=race.state==='paused'?'PAUSE':race.state==='countdown'?String(Math.max(1,Math.ceil(race.countdown))):qual?'OBJECTIF : LA POLE':'LA GRILLE VOUS ATTEND';
 $('arOverlayText').textContent=race.state==='paused'?'La session reprendra exactement ici.':race.state==='countdown'?'Gaz manuels · préparez le premier virage.':qual?'Deux tours chronométrés avec huit F1 en piste.':'Choisissez votre F1 et vos adversaires, puis lancez la course.';
 root.querySelectorAll('.ar-lights i').forEach((l,i)=>l.classList.toggle('on',race.state==='countdown'&&i<=Math.floor((3-race.countdown)*2)));
 race.standings().forEach((c,i)=>{
  const row=$('arTiming').children[i];row.className=c.id?'':'you';row.style.setProperty('--driver',c.color);
  row.querySelector('b').textContent=i+1;row.querySelector('span').textContent=(c.id?'':'★ ')+c.name;
  row.querySelector('small').textContent=qual?(c.bestLap!==null?clock(c.bestLap):c.finished?'Sans chrono':'Tour lancé…'):c.phase==='service'?'ARRÊT '+c.pit.service.toFixed(2)+' s':(c.finished?'Arrivé':C.TYRES[c.tyre].letter+' · '+Math.round((1-c.wear)*100)+' %')+(c.lastPitTime!==null?' · arrêt '+c.lastPitTime.toFixed(3)+' s':'');
 });
 const signature=race.pitHistory.length+':'+race.options.seed;
 if($('arPitTimes').dataset.entries!==signature){
  $('arPitTimes').dataset.entries=signature;$('arPitTimes').replaceChildren();$('arPitEmpty').hidden=!!race.pitHistory.length;
  for(const stop of [...race.pitHistory].reverse()){const li=document.createElement('li');li.textContent=stop.name+' · '+stop.time.toFixed(3)+' s · '+C.TYRES[stop.compound].name;li.className=stop.id?'':'you';$('arPitTimes').append(li);}
 }
}
function showResult(){
 finishedShown=true;audio.update(race.player,false);const qual=race.options.session==='qualifying',pos=race.rank();
 $('arResultTitle').textContent=qual?(pos===1?'POLE POSITION !':'P'+pos+' SUR LA GRILLE'):pos===1?'VICTOIRE !':pos<=3?'SUR LE PODIUM !':pos+'e · LA REVANCHE ?';
 $('arResultText').textContent=qual?'Meilleur tour : '+clock(race.player.bestLap)+' · les huit voitures sont classées selon leur meilleur chrono.':clock(race.player.finishTime)+' · '+race.passes+' dépassements · '+race.player.pitStops+' arrêt(s).';
 $('arResultList').replaceChildren();for(const [i,c] of race.standings().entries()){const li=document.createElement('li');li.className=c.id?'':'you';li.textContent=(i+1)+'. '+c.name+(qual?' · '+clock(c.bestLap):!c.finished?' · en piste':'');$('arResultList').append(li);}
 if(qual){qualifiedGrid=race.standings().map(c=>c.id);$('arGrandPrix').hidden=false;}else $('arGrandPrix').hidden=true;
 const value=qual?race.player.bestLap:race.player.finishTime;
 try{const prev=JSON.parse(localStorage.getItem(recordKey()));if(value!==null&&(!prev||value<prev.time))localStorage.setItem(recordKey(),JSON.stringify({time:value,position:pos}));}catch(_){}
 $('arResult').hidden=false;renderHUD();clear();
}
function normaliseOpponents(randomise=false){
 const used=new Set([$('arDriver').value]),all=DRIVERS_2026.map(d=>d.id);
 let available=all.filter(id=>!used.has(id));if(randomise)for(let i=available.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[available[i],available[j]]=[available[j],available[i]];}
 for(const select of opponentSelects()){
  let id=!randomise&&!used.has(select.value)?select.value:null;if(!id)id=available.find(x=>!used.has(x));select.value=id;used.add(id);
 }
 for(const select of opponentSelects())for(const option of select.options)option.disabled=option.value!==select.value&&used.has(option.value);
}
function updateDrivers(){
 const t=TEAMS_2026.find(t=>t.id===$('arTeam').value),prev=$('arDriver').value;$('arDriver').replaceChildren();
 for(const id of t.drivers){const d=DRIVERS_2026.find(d=>d.id===id);if(d)$('arDriver').add(new Option(d.first+' '+d.last,id));}
 if(t.drivers.includes(prev))$('arDriver').value=prev;normaliseOpponents();load();
}
for(const c of CIRCUITS_2026)$('arCircuit').add(new Option(c.city+' — '+c.country,c.id));$('arCircuit').value='monza';
for(const t of TEAMS_2026)$('arTeam').add(new Option(t.name,t.id));$('arTeam').value='ferrari';
for(let i=0;i<7;i++){
 const label=document.createElement('label');label.textContent='Adversaire '+(i+1);const select=document.createElement('select');select.setAttribute('aria-label','Adversaire '+(i+1));
 for(const d of DRIVERS_2026)select.add(new Option(d.first+' '+d.last+' · '+teamFor(d.id).name,d.id));label.append(select);$('arOpponentGrid').append(label);
 select.onchange=()=>{normaliseOpponents();load();};
}
for(let i=0;i<8;i++){const li=document.createElement('li');li.innerHTML='<b></b><span></span><small></small>';$('arTiming').append(li);}
const gp=document.createElement('button');gp.id='arGrandPrix';gp.className='ar-start';gp.textContent='GRAND PRIX →';gp.hidden=true;gp.onclick=()=>void start('race',qualifiedGrid);$('arAgain').before(gp);
$('arTeam').onchange=updateDrivers;$('arDriver').onchange=()=>{normaliseOpponents();load();};$('arRandom').onclick=()=>{normaliseOpponents(true);load();};
for(const id of ['arCircuit','arLaps','arTyre','arSession'])$(id).addEventListener('change',load);
root.querySelectorAll('[data-ar-level]').forEach(b=>b.onclick=()=>{level=b.dataset.arLevel;root.querySelectorAll('[data-ar-level]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));$('arModeHelp').textContent=level==='challenge'?'Direction plus vive et adversaires plus rapides. À vous de freiner avant les virages.':'Direction stabilisée. Gaz, freins et virages restent entre vos mains.';load();});
root.querySelectorAll('[data-ar-tyre]').forEach(b=>b.onclick=()=>setTyre(b.dataset.arTyre));
$('arStart').onclick=$('arAgain').onclick=()=>void start();$('arPause').onclick=$('arResume').onclick=pause;$('arGarageButton').onclick=$('arChoose').onclick=garage;$('arPit').onclick=pit;$('arFullscreen').onclick=()=>setFullscreen(!shell.classList.contains('ar-fullscreen'));
$('arZoom').oninput=()=>{renderer.zoom=Number($('arZoom').value)/100;schedule();};
root.querySelectorAll('[data-ar-input]').forEach(b=>{
 b.addEventListener('pointerdown',e=>{if(race?.state!=='racing')return;e.preventDefault();pointers.set(e.pointerId,b.dataset.arInput);b.classList.add('pressed');b.setPointerCapture(e.pointerId);});
 for(const type of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(type,e=>{pointers.delete(e.pointerId);if(![...pointers.values()].includes(b.dataset.arInput))b.classList.remove('pressed');});
});
const codes={ArrowLeft:'left',KeyQ:'left',KeyA:'left',ArrowRight:'right',KeyD:'right',ArrowUp:'throttle',KeyZ:'throttle',KeyW:'throttle',ArrowDown:'brake',KeyS:'brake',Space:'brake',ShiftLeft:'boost',ShiftRight:'boost'};
document.addEventListener('keydown',e=>{if(!active()||/INPUT|SELECT|TEXTAREA|BUTTON/.test(e.target.tagName))return;if(codes[e.code]){e.preventDefault();keyboard.add(codes[e.code]);}else if(e.code==='Escape'&&!e.repeat){e.preventDefault();if(shell.classList.contains('ar-fullscreen'))setFullscreen(false);else pause();}else if(e.code==='KeyP'&&!e.repeat){e.preventDefault();pit();}});
document.addEventListener('keyup',e=>{if(codes[e.code])keyboard.delete(codes[e.code]);});
function settings(){audio.settings({engineOn:$('arEngineOn').checked,musicOn:$('arMusicOn').checked,engineVolume:Number($('arEngineVolume').value)/100,musicVolume:Number($('arMusicVolume').value)/100});if(race&&['racing','countdown'].includes(race.state)&&!audio.active)void audio.start();}
for(const id of ['arEngineOn','arMusicOn','arEngineVolume','arMusicVolume'])$(id).addEventListener(id.includes('Volume')?'input':'change',settings);
function leave(){if(race&&['racing','countdown'].includes(race.state))race.pause();audio.pause();clear();last=0;if(!active())setFullscreen(false);}
const previousShow=window.showView;window.showView=function(name,...args){if(name!=='game')leave();const result=previousShow.call(this,name,...args);if(name==='game'){window.F1Audio?.stop('loupe');if(!race)load();last=0;hudAt=0;preview();schedule();}return result;};
new MutationObserver(()=>{if(!active())leave();else{if(!race)load();last=0;schedule();}}).observe(root,{attributes:true,attributeFilter:['class']});
window.addEventListener('blur',leave);document.addEventListener('visibilitychange',()=>{if(document.hidden)leave();else if(active()){hudAt=0;schedule();}});
new ResizeObserver(()=>{if(active()){preview();schedule();}}).observe(canvas);
window.F1Arcade=Object.freeze({state:()=>race?{version:39,circuit:race.track.id,totalCircuits:CIRCUITS_2026.length,state:race.state,session:race.options.session,level:race.options.level,laps:race.options.laps,time:race.time,position:race.rank(),player:{...race.player,pit:race.player.pit?{...race.player.pit}:null},cars:race.cars.map(c=>({...c})),pitHistory:[...race.pitHistory],camera:renderer.v?{...renderer.v}:null,audio:audio.state()}:null});
updateDrivers();normaliseOpponents(true);load();
})();
