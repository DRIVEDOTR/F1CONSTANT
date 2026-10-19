/* F1 Constant V41 — garage, qualification et course à commandes manuelles. */
(()=>{'use strict';
const $=id=>document.getElementById(id),root=$('view-game'),shell=$('arcadeGame'),canvas=$('arCanvas');
const C=F1ArcadeCore,renderer=new F1ArcadeRenderer(canvas),audio=new F1ArcadeAudio();
const keyboard=new Set(),pointers=new Map(),cache=new Map();
let race=null,level='discovery',frame=0,last=0,hudAt=0,finishedShown=false,resolvingFinish=false,qualifiedGrid=null,boostLatched=false,championship=null,preparedGP=null,frameError='',loopErrors=0,pendingRaceTyre=null;
const active=()=>root.classList.contains('active');
const clock=n=>Number.isFinite(n)?`${Math.floor(n/60)}:${(n%60).toFixed(3).padStart(6,'0')}`:'—';
const teamFor=id=>TEAMS_2026.find(t=>t.drivers.includes(id))||TEAMS_2026[0];
// Simplified helmet identities, shared by the selectors, preview and track renderer.
const HELMETS={
 leclerc:['#ed2435','#ffffff'],hamilton:['#f4fa24','#7c35d4'],norris:['#dcf22b','#171d25'],piastri:['#ff6944','#273e9d'],
 russell:['#4ba9eb','#ffffff'],antonelli:['#2a64cf','#d7ff55'],verstappen:['#edf2f6','#e32534'],hadjar:['#ebd72c','#174bb3'],
 lawson:['#ff95b8','#ffffff'],lindblad:['#2c9fe2','#f2ee31'],gasly:['#58a7ea','#f27dbc'],colapinto:['#6dcfff','#f8dd26'],
 albon:['#f6a2c6','#4faff0'],sainz:['#ed3e37','#f5d944'],ocon:['#e93243','#183c8e'],bearman:['#e8ee4b','#17372a'],
 hulkenberg:['#e8ff32','#131c2a'],bortoleto:['#e4ed38','#239759'],alonso:['#3e9bf0','#ffe041'],stroll:['#4385e3','#e894c3'],
 bottas:['#e8f0f2','#3c7bd5'],perez:['#ecf035','#1741a1']
};
function helmetFor(id){const [base,accent]=HELMETS[id]||['#e6e9ec','#355a89'];return{base,accent};}
function paletteFor(team){
 const row=document.querySelector('#constructorStandingsBody tr[data-team-id="'+team.id+'"]');
 const d=DRIVERS_2026.find(d=>team.drivers.includes(d.id));
 return {a:row?.style.getPropertyValue('--team-a').trim()||d?.teamA||team.teamA,b:row?.style.getPropertyValue('--team-b').trim()||d?.teamB||team.teamB};
}
function driverData(id){const d=DRIVERS_2026.find(d=>d.id===id),t=teamFor(id),palette=paletteFor(t);return{name:d.first+' '+d.last,driverId:d.id,driverNumber:d.number,teamId:t.id,teamName:t.name,color:palette.a,colorB:palette.b,helmet:helmetFor(id)};}
function paintTeam(el,a,b){el.style.setProperty('--team-a',a);el.style.setProperty('--team-b',b);}
function choiceContent(node,text,team,helmet,number){
 const icon=document.createElement('i');icon.className='ar-helmet-mark';icon.setAttribute('aria-hidden','true');icon.style.setProperty('--helmet',helmet.base);icon.style.setProperty('--helmet-accent',helmet.accent);
 const span=document.createElement('span');span.className='ar-choice-name';span.append(document.createTextNode(text));const small=document.createElement('small');small.textContent=team;span.append(small);
 const badge=document.createElement('b');badge.textContent=number||'';node.replaceChildren(icon,span,badge);
}
function refreshPicker(select,kind='driver'){
 if(!select._picker){
  const old=select.parentElement,field=document.createElement('div');field.className=old.className+' ar-choice-field';field.append(...old.childNodes);old.replaceWith(field);
  const details=document.createElement('details');details.className='ar-driver-picker';const summary=document.createElement('summary');details.append(summary);
  const list=document.createElement('div');list.className='ar-choice-list';list.setAttribute('role','group');list.setAttribute('aria-label',kind==='team'?'Écuries':'Pilotes');details.append(list);
  select.hidden=true;select.tabIndex=-1;field.append(details);select._picker={details,summary,list};
  details.addEventListener('toggle',()=>{if(details.open){root.querySelectorAll('.ar-driver-picker[open]').forEach(other=>{if(other!==details)other.open=false;});}});
  details.addEventListener('keydown',e=>{if(e.key==='Escape'){details.open=false;summary.focus();}if(['ArrowDown','ArrowUp'].includes(e.key)){e.preventDefault();const buttons=[...list.querySelectorAll('button:not(:disabled)')],n=buttons.indexOf(document.activeElement),next=e.key==='ArrowDown'?(n+1)%buttons.length:(n-1+buttons.length)%buttons.length;details.open=true;buttons[next]?.focus();}});
 }
 const {details,summary,list}=select._picker;list.replaceChildren();
 for(const option of select.options){
  const data=kind==='team'?TEAMS_2026.find(t=>t.id===option.value):DRIVERS_2026.find(d=>d.id===option.value),t=kind==='team'?data:teamFor(data.id),p=paletteFor(t),helmet=helmetFor(kind==='team'?t.drivers[0]:data.id);
  const button=document.createElement('button');button.type='button';button.className='ar-choice-option';button.dataset.choice=option.value;button.disabled=option.disabled;button.setAttribute('aria-pressed',String(option.value===select.value));paintTeam(button,p.a,p.b);
  choiceContent(button,kind==='team'?t.name:data.first+' '+data.last,kind==='team'?t.chassis:t.name,helmet,kind==='team'?'':data.number);
  button.onclick=()=>{select.value=option.value;details.open=false;select.dispatchEvent(new Event('change',{bubbles:true}));select._picker.summary.focus({preventScroll:true});};list.append(button);
  if(option.value===select.value){paintTeam(summary,p.a,p.b);choiceContent(summary,kind==='team'?t.name:data.first+' '+data.last,kind==='team'?t.chassis:t.name,helmet,kind==='team'?'':data.number);summary.setAttribute('aria-label',(kind==='team'?'Écurie : ':'Pilote : ')+(kind==='team'?t.name:data.first+' '+data.last));}
 }
}
function refreshPickers(){refreshPicker($('arTeam'),'team');refreshPicker($('arDriver'));for(const select of opponentSelects())refreshPicker(select);}
const opponentSelects=()=>[...$('arOpponentGrid').querySelectorAll('select')];
function field(){return [driverData($('arDriver').value),...opponentSelects().map(s=>driverData(s.value))];}
function getSettings(session=($('arSession').value==='qualifying'||$('arSession').value==='championship'&&$('arChampQual').checked)?'qualifying':'race',grid=null){return{level,laps:Number($('arLaps').value),tyre:$('arTyre').value,color:teamFor($('arDriver').value).teamA,drivers:field(),session,grid,weather:$('arWeather').value,temperature:$('arTemperature').value,seed:C.freshSeed()};}
const recordKey=()=>`f1-arcade-v50:${race.track.id}:${race.options.session}:${race.options.level}:${race.options.laps}:${race.options.tyre}`;
function readTrack(id){
 if(cache.has(id))return cache.get(id);
 const c=CIRCUITS_2026.find(c=>c.id===id),doc=new DOMParser().parseFromString(CIRCUIT_SVGS[id],'image/svg+xml');
 const points=e=>e.getAttribute('points').trim().split(/\s+/).map(p=>p.split(',').map(Number));
 const raw=[...doc.querySelectorAll('.map-layer-sectors polyline')].flatMap(points);
 const pits=[...doc.querySelectorAll('.map-layer-pits polyline')].filter(p=>p.getAttribute('stroke')==='#171c25').flatMap(points);
 const track=C.makeTrack({id:c.id,city:c.city,country:c.country,name:c.name,lengthKm:c.stats.lengthKm,fastestLap:c.stats.fastestLap},raw,pits);cache.set(id,track);return track;
}
function clear(){keyboard.clear();pointers.clear();root.querySelectorAll('.pressed').forEach(b=>b.classList.remove('pressed'));boostLatched=false;if(race)race.input={axis:0,throttle:false,brake:false,boost:false};}
function preview(){const t=teamFor($('arDriver').value),d=driverData($('arDriver').value),img=$('arTeamPhoto');
 if(img.dataset.team!==t.id){img.hidden=false;img.dataset.team=t.id;img.alt=t.name+' '+t.chassis+' · visuel de la rubrique Écuries';img.onerror=()=>{img.hidden=true;};img.src=t.carImage;}
 renderer.preview($('arCarPreview'),t.teamA,{...t,driverNumber:d.driverNumber,helmet:d.helmet});
 const text=$('arTeamLivery');text.replaceChildren();const badge=document.createElement('i');badge.className='ar-helmet-mark';badge.style.setProperty('--helmet',d.helmet.base);badge.style.setProperty('--helmet-accent',d.helmet.accent);text.append(badge,document.createTextNode(d.name+' · '+t.name));
}
const tyreComparisons=new Map();
function compareTyres(id,weather,selected,choose){
 let ui=tyreComparisons.get(id);
 if(!ui){
  const host=$(id),context=document.createElement('p'),label=document.createElement('label'),range=document.createElement('input'),value=document.createElement('b'),rows=document.createElement('div'),note=document.createElement('p');
  context.className='ar-compare-context';label.className='ar-compare-life';range.type='range';range.min='0';range.max='100';range.value='100';range.id=id+'Life';range.setAttribute('aria-label','Simuler le pourcentage de pneus restants');
  label.htmlFor=range.id;label.append(document.createTextNode('Comparer à '),value,document.createTextNode(' de pneus restants'),range);
  rows.className='ar-compare-rows';note.className='ar-compare-note';note.textContent='Plafonds en ligne droite, sans boost (+8,6 % avec boost). Le freinage et les virages limitent la vitesse réelle. Déplacez le curseur pour anticiper l’usure.';
  const entries=Object.entries(C.TYRES).map(([key,t])=>{
   const row=document.createElement('button');row.type='button';row.className='ar-compare-row';row.style.setProperty('--compound',t.color);
   const name=document.createElement('strong'),fresh=document.createElement('span'),worn=document.createElement('span'),description=document.createElement('small');name.textContent=t.name;row.append(name,fresh,worn,description);rows.append(row);row.onclick=()=>choose(key);
   return{key,row,fresh,worn,description};
  });
  host.append(context,label,rows,note);ui={context,range,value,entries};tyreComparisons.set(id,ui);
  range.oninput=()=>{if(id==='arRaceCompare')preRaceAdvice();else if(race)renderTyreComparisons();};
 }
 const remaining=Number(ui.range.value),recommended=C.recommendedTyre(weather),key=[remaining,selected,Math.round(weather.wet*1000),Math.round(weather.trackTemp*10),weather.phase].join(':');
 if(ui.key===key)return;ui.key=key;
 ui.value.textContent=remaining+' %';ui.context.textContent=weather.phase+' · piste '+Math.round(weather.trackTemp)+' °C · humidité '+Math.round(weather.wet*100)+' %. Choisissez une gomme ci-dessous.';
 for(const {key,row,fresh,worn,description} of ui.entries){
  const p=C.tyrePerformance(key,0,weather.wet,weather.trackTemp,weather.rain),q=C.tyrePerformance(key,1-remaining/100,weather.wet,weather.trackTemp,weather.rain);
  row.setAttribute('aria-pressed',String(key===selected));row.setAttribute('aria-label','Choisir '+C.TYRES[key].name+' · neuf '+Math.round(350*p.top)+' kilomètres par heure');
  fresh.textContent='Neufs : '+Math.round(350*p.top)+' km/h';worn.textContent='À '+remaining+' % : '+Math.round(350*q.top)+' km/h';
  const grip=q.grip>=.95?'très bonne':q.grip>=.75?'bonne':q.grip>=.50?'réduite':'faible',wear='≈ '+Math.round(p.wear*100)+' % / tour';
  description.textContent=(key===recommended?'Conseillés · ':'')+(key===selected?'Choisis · ':'')+'Adhérence '+grip+' · usure '+wear+' · température : '+Math.round(p.temperatureFactor*100)+' % du potentiel';
 }
}
function labelTyreOptions(select,weather){
 for(const option of select.options){const p=C.tyrePerformance(option.value,0,weather.wet,weather.trackTemp,weather.rain);const text=C.TYRES[option.value].name+' · '+Math.round(350*p.top)+' km/h neufs';if(option.textContent!==text)option.textContent=text;}
}
function renderTyreComparisons(){
 if(!race)return;
 const weather=race.weather;
 if(shell.dataset.playing!=='true'){
  compareTyres('arGarageCompare',weather,$('arTyre').value,key=>{$('arTyre').value=key;$('arTyre').dispatchEvent(new Event('change'));});labelTyreOptions($('arTyre'),weather);
 }
 if($('arPitComparison').open)compareTyres('arPitCompare',weather,race.nextTyre,key=>{setTyre(key);canvas.focus({preventScroll:true});renderTyreComparisons();});
 labelTyreOptions($('arPitTyre'),weather);
 const p=race.player,perf=C.tyrePerformance(p.tyre,p.wear,weather.wet,weather.trackTemp,weather.rain);
 const current='Actuellement : '+C.TYRES[p.tyre].name+' · '+Math.round((1-p.wear)*100)+' % restants · plafond '+Math.round(350*perf.top)+' km/h sans boost. Aux stands, les pneus seront neufs.';if($('arCurrentTyrePotential').textContent!==current)$('arCurrentTyrePotential').textContent=current;
}
function setTyre(tyre){if(race)race.nextTyre=tyre;$('arPitTyre').value=tyre;$('arPitTyre').style.setProperty('--pit-tyre',C.TYRES[tyre].color);root.querySelectorAll('[data-ar-tyre]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.arTyre===tyre)));}
function load(){
 resetLoop();if(frameError)renderer.recover?.();frameError='';try{audio.pause();}catch(_){}clear();qualifiedGrid=null;preparedGP=null;pendingRaceTyre=null;const settings=getSettings(),trackId=$('arCircuit').value;
 if(race?.state==='ready'&&race.track.id===trackId&&race.options.weather===settings.weather&&race.options.temperature===settings.temperature)settings.weatherSeed=race.weather.seed;
 race=new C.Race(readTrack(trackId),settings);setTyre($('arTyre').value);
 shell.dataset.playing='false';$('arResult').hidden=true;finishedShown=false;resolvingFinish=false;renderer.key=null;
 $('arLevelName').textContent=level==='challenge'?'SPORT':'CLUB';$('arRaceName').textContent=race.track.city+' · '+(race.options.session==='qualifying'?'qualifications en solo · 2 tours':race.options.laps+' tours');
 renderRecords();
 $('arStart').firstChild.textContent=race.options.session==='qualifying'?'QUALIFICATIONS ':'SUR LA GRILLE ';
 renderTyreGuide();preview();last=0;hudAt=0;schedule();
}
async function start(session,grid){
 let requested=typeof session==='string'?session:undefined,trackId=$('arCircuit').value,settings=getSettings(requested,grid);
 const inChamp=$('arSession').value==='championship';
 if(inChamp){
  if(!championship||championship.complete){const selected=[...$('arChampTracks').querySelectorAll('input:checked')].map(e=>e.value);if(!selected.length){$('arChampStatus').textContent='Cochez au moins un circuit pour démarrer.';return;}championship=new C.Championship(selected,field(),{level,laps:Number($('arLaps').value),tyre:$('arTyre').value,qualifying:$('arChampQual').checked,weather:$('arWeather').value,temperature:$('arTemperature').value});}
  trackId=championship.circuits[championship.rounds.length];settings={...getSettings(),...championship.settings,drivers:championship.drivers,session:requested||(championship.settings.qualifying?'qualifying':'race'),grid,seed:C.freshSeed()};saveChamp(false);
 }
 if(race?.track.id===trackId&&race.options.weather===settings.weather&&race.options.temperature===settings.temperature)settings.weatherSeed=race.weather.seed;
 if(requested==='race'&&qualifiedGrid&&preparedGP){settings.tyre=$('arRaceTyre').value;settings.weatherSeed=preparedGP.seed;}
 resetLoop();if(frameError)renderer.recover?.();frameError='';pendingRaceTyre=null;race=new C.Race(readTrack(trackId),settings);race.championshipRound=inChamp;race.start();savedSession=inChamp?null:savedSession;lastAutoSave=0;setTyre(race.nextTyre);clear();if(inChamp)saveChamp();
 finishedShown=false;resolvingFinish=false;$('arResult').hidden=true;shell.dataset.playing='true';renderer.key=null;
 $('arRaceName').textContent=race.track.city+' · '+(race.options.session==='qualifying'?'qualifications en solo · 2 tours':race.options.laps+' tours');
 canvas.focus({preventScroll:true});shell.scrollIntoView({block:'start',behavior:'instant'});last=0;hudAt=0;schedule();
 await audio.start();$('arAudioStatus').textContent=audio.message||'Grid to Victory · moteur et ambiance musicale réglables.';
}
function resetLoop(){if(frame)cancelAnimationFrame(frame);frame=0;last=0;hudAt=0;}
function resume(){
 if(!race||race.state==='finished'||document.hidden)return;
 clear();resetLoop();if(race.state==='paused')race.pause();
 if(frameError){renderer.recover?.();frameError='';}
 $('arOverlay').hidden=true;canvas.focus({preventScroll:true});void audio.start();schedule();
}
function pause(){
 if(!race||!['racing','countdown','paused'].includes(race.state))return;
 if(race.state==='paused'){resume();return;}
 race.pause();clear();resetLoop();try{audio.pause();}catch(_){}if(race.championshipRound&&championship)saveChamp();schedule();
}
function garage(){if(race&&['racing','countdown'].includes(race.state))pause();shell.dataset.playing='false';setFullscreen(false);preview();$('arGarage').scrollIntoView({block:'center',behavior:'smooth'});}
function setFullscreen(on){shell.classList.toggle('ar-fullscreen',on);document.body.classList.toggle('ar-immersed',on);$('arFullscreen').textContent=on?'Réduire':'Agrandir';$('arFullscreen').setAttribute('aria-pressed',String(on));renderer.key=null;schedule();}
function pit(){if(race?.state!=='racing')return;race.requestPit();canvas.focus({preventScroll:true});hudAt=0;schedule();}
function updateInput(){const all=new Set([...keyboard,...pointers.values()]);race.input={axis:(all.has('right')?1:0)-(all.has('left')?1:0),throttle:all.has('throttle')||all.has('touchBoost'),brake:all.has('brake'),boost:boostLatched||all.has('boost')||all.has('touchBoost')};root.querySelectorAll('[data-ar-input]').forEach(b=>b.classList.toggle('pressed',all.has(b.dataset.arInput)));}
function frameTick(now){
 frame=0;if(!active()||!race||document.hidden)return;
 try{
  const delta=Math.min(.065,last?(now-last)/1000:0);last=now;updateInput();
  if(resolvingFinish&&race.state==='racing'){
   const deadline=performance.now()+5;for(let i=0;i<120&&performance.now()<deadline&&race.state==='racing';i++)race.step(1/60);
  }else{const n=Math.max(1,Math.ceil(delta/.01));for(let i=0;i<n;i++)race.step(delta/n);}
  const following=race.followFinish();if(following?.ready&&race.state==='racing')resolvingFinish=true;
  try{for(const e of race.drainEvents())if(!resolvingFinish&&e.type!=='message'&&(e.type!=='spin'||!e.id))audio.cue(e.type,e.up);audio.update(race.followFinish()?.car||race.player,race.state==='racing'&&!resolvingFinish,race.track.kphPerUnit);}catch(_){audio.message='Son interrompu · la course continue.';}
  rememberLap();if(race.championshipRound&&race.time-lastAutoSave>=10&&race.state!=='finished'){lastAutoSave=race.time;saveChamp();}
  if(!resolvingFinish)renderer.render(race);
  if(race.player.boost<1||race.player.finished)boostLatched=false;
  if(now-hudAt>100||!hudAt){hudAt=now;renderHUD();}
  if(race.state==='finished'&&!finishedShown)showResult();
 }catch(error){
  loopErrors++;frameError=String(error?.message||error);if(['racing','countdown'].includes(race.state))race.pause();clear();resetLoop();try{audio.pause();}catch(_){}
  try{renderHUD();}catch(_){}
  $('arOverlay').hidden=false;$('arResume').hidden=false;$('arOverlayTitle').textContent='COURSE CONSERVÉE';$('arOverlayText').textContent='L’affichage a été interrompu. Touchez Reprendre pour le rétablir.';
 }
 if(!frameError&&['racing','countdown'].includes(race.state))schedule();
}
function schedule(){if(!frame&&active()&&!document.hidden)frame=requestAnimationFrame(frameTick);}
function renderHUD(){
 renderBannerRecord();$('arRaceSaveStatus').hidden=!race.championshipRound;const p=race.player,t=race.track,qual=race.options.session==='qualifying';const following=race.followFinish(),after=!!following&&race.state!=='finished';shell.dataset.finishedPlayer=String(p.finished&&!qual);$('arFinishFollow').hidden=!after;$('arFinishAdvance').disabled=resolvingFinish;$('arFinishAdvance').textContent=resolvingFinish?'Calcul du classement…':'Classement et podium →';$('arFinishFollowText').textContent=resolvingFinish?'Simulation des arrivées restantes · '+race.cars.filter(c=>c.finished).length+' / '+race.cars.length+' arrivées calculées':following?.car?'Caméra : '+following.car.name+' · '+following.arrived+' / '+following.total+' arrivées proches':'Dernières arrivées proches terminées.';shell.dataset.qualifying=String(qual);shell.dataset.pit=String(p.phase==='service'||p.lastPitAt!==undefined&&race.time-p.lastPitAt<1.1);
 const blocked=p.phase==='service'?p.pit.wheels.map((w,i)=>({...C.wheelState(p.pit,i),i})).find(w=>w.blocked):null;
 $('arPosition').innerHTML=race.rank()+' <small>/ '+race.cars.length+'</small>';$('arPosition').previousElementSibling.textContent='POSITION';$('arPosition').parentElement.hidden=qual;$('arGear').textContent=p.gear;
 $('arLap').innerHTML=Math.min(race.options.laps,Math.max(1,Math.floor(p.s/t.length)+1))+' <small>/ '+race.options.laps+'</small>';
 $('arSpeed').innerHTML=Math.round(Math.abs(p.speed)*t.kphPerUnit)+' <small>'+(p.gear==='R'?'R · ':'')+'km/h</small>';
 $('arWear').innerHTML=Math.round((1-p.wear)*100)+' <small>%</small>';$('arWear').style.color='';resourceTone($('arWear').parentElement,(1-p.wear)*100);resourceTone($('arBoost').parentElement,p.boost);resourceTone($('arSpeed').parentElement,100-Math.min(100,Math.abs(p.speed)*t.kphPerUnit/3.8)); 
 $('arBoostToggle').setAttribute('aria-pressed',String(boostLatched||[...pointers.values()].includes('touchBoost')));$('arBoostToggle').textContent=(boostLatched||[...pointers.values()].includes('touchBoost'))?'BOOST ON':matchMedia('(pointer:coarse)').matches?'BOOST':'BOOST · B';
 renderTyreComparisons();
 const tyreAdvice=C.tyreAdvice(p.tyre,p.wear,race.weather),nextAdvice=C.tyreAdvice(race.nextTyre,0,race.weather);
 $('arTyreAdvice').textContent='Piste '+Math.round(race.weather.trackTemp)+' °C · '+C.TYRES[tyreAdvice.recommended].name+' conseillés. '+(tyreAdvice.warning||'Votre choix convient aux conditions.')+(tyreAdvice.penalty>=10?' Vitesse maxi : −'+tyreAdvice.penalty+' %.':'');
 $('arTrackTemp').textContent='Piste '+Math.round(race.weather.trackTemp)+'°C';
 $('arRainRisk').innerHTML=Math.round(race.weather.risk)+' <small>%</small>';$('arWeatherPhase').textContent=race.weather.phase.replace(' · piste humide','');$('arWeatherGrip').textContent='Piste '+Math.round(race.weather.wet*100)+' % humide · '+C.TYRES[p.tyre].name+' · prochain arrêt : '+C.TYRES[race.nextTyre].name+(nextAdvice.warning?' ⚠ '+nextAdvice.warning:'');$('arWeatherRiskTile').style.setProperty('--instrument-color',race.weather.risk>65?'#76b5ef':race.weather.risk>30?'#d1c78c':'#83d8b3');
 $('arBoost').innerHTML=Math.round(p.boost)+' <small>%</small>';$('arClock').textContent=clock(race.time);
 $('arTyreBar').style.transform='scaleX('+(1-p.wear)+')';$('arTyreBar').style.background='var(--instrument-color)';$('arBoostBar').style.transform='scaleX('+(p.boost/100)+')';
 $('arLapTime').textContent=(t.referenceEstimated?'Objectif estimé : ':'Record fiche : ')+clock(t.referenceSeconds||t.targetLap)+' · Objectif sec : '+clock(t.targetLap)+' · Votre meilleur : '+clock(p.bestLap)+(p.lapStart!==null&&!p.finished?' · en cours '+clock(race.time-p.lapStart):'');
 $('arStopStatus').textContent=race.requiredStops?'Arrêt obligatoire : '+p.pitStops+' / '+race.requiredStops+(p.pitStops>=race.requiredStops?' · validé':' · à effectuer'):'Arrêt facultatif';
 $('arStopRule').textContent='Grand Prix de 3 tours ou plus : un changement de pneus obligatoire pour être classé. La règle vaut pour toutes les F1.';
 $('arPause').disabled=!['racing','countdown','paused'].includes(race.state);$('arPause').textContent=race.state==='paused'?'▶ Reprendre':'Ⅱ Pause';
 $('arPit').disabled=qual||race.state!=='racing'||p.phase!=='track'||p.finished||!!p.spin;$('arPit').setAttribute('aria-pressed',String(p.pitRequested));
 $('arPit').textContent=p.phase==='service'?'Changement en cours':p.phase==='pit'?'Dans les stands':p.pitRequested?'✓ Stands réservés':'Box Box !';
 $('arPitHelp').textContent=qual?'Les arrêts sont disponibles pendant le Grand Prix.':p.pitRequested?'Entrée et limiteur guidés au prochain passage.':p.phase!=='track'?'Le départ attend la dernière roue : suivez les mécaniciens et le chrono.':'Choisissez votre prochaine gomme avant l’immobilisation, puis demandez l’arrêt.';
 const msg=race.state==='ready'?'Maintenez GAZ pour démarrer, puis anticipez le premier virage.':race.state==='paused'?'Session en pause.':race.state==='finished'?'Session terminée.':p.finished&&p.disqualified?'Arrivée non validée · arrêt obligatoire manquant. Le classement final reste disponible.':p.finished?(resolvingFinish?'Calcul des arrivées restantes, des temps et du podium…':'Drapeau à damier · suivez les trois F1 derrière vous ou affichez le classement.'):race.messageUntil>race.time?race.message:p.spin?'Perte d’adhérence · freinez puis corrigez la direction.':p.phase==='service'?(p.pit.waitingForTraffic?'Roues prêtes · attente d’une voie libre avant de repartir.':blocked?['Arrière gauche','Arrière droite','Avant gauche','Avant droite'][blocked.i]+' · '+(blocked.phase==='loosen'?'desserrage difficile':'serrage difficile'):'Quatre équipes changent vos roues · le départ attend la dernière validation'):p.phase==='pit'?'Limiteur activé · stands guidés':tyreAdvice.warning&&p.phase==='track'?tyreAdvice.warning+(tyreAdvice.penalty>=10?' Vitesse maxi −'+tyreAdvice.penalty+' %.':'')+(qual?" Adaptez votre choix au garage avant le Grand Prix.":" Choisissez vos pneus puis Box Box !"):p.pitQueue?'File aux stands · attendez votre tour, entrée guidée.':p.speed<-.1?'MARCHE ARRIÈRE · tournez pour vous dégager, puis GAZ pour repartir.':p.speed<1?'GAZ pour avancer · maintenez FREIN à l’arrêt pour reculer.':p.kerbPenalty>.01?'Vibreurs · '+p.kerbWheels+' roue(s) en contact · ralentissement '+Math.round(p.kerbPenalty*100)+' %.':race.weather.wet>.25&&!['intermediate','wet'].includes(p.tyre)?'Piste mouillée · slicks en difficulté, envisagez les intermédiaires ou pluie.':p.braking?'FREIN MANUEL · préparez votre sortie de virage':p.throttle>0?'GAZ MANUELS · anticipez le prochain freinage':'LEVER DE PIED · la F1 ralentit ; FREIN pour ralentir davantage.';
 if($('arMessage').textContent!==msg)$('arMessage').textContent=msg;
 $('arOverlay').hidden=!['ready','paused','countdown'].includes(race.state);$('arResume').hidden=race.state!=='paused';
 $('arOverlayTitle').textContent=race.state==='paused'?'PAUSE':race.state==='countdown'?String(Math.max(1,Math.ceil(race.countdown))):qual?'OBJECTIF : LA POLE':'LA GRILLE VOUS ATTEND';
 $('arOverlayText').textContent=race.state==='paused'?'La session reprendra exactement ici.':race.state==='countdown'?'Gaz manuels · préparez le premier virage.':qual?'Deux tours seul en piste. Les chronos adverses sont simulés séparément pour la grille du GP.':'Choisissez votre F1 et vos adversaires, puis lancez la course.';
 root.querySelectorAll('.ar-lights i').forEach((l,i)=>l.classList.toggle('on',race.state==='countdown'&&i<=Math.floor((3-race.countdown)*2)));
 race.standings().forEach((c,i)=>{
  const row=$('arTiming').children[i];row.className=c.id?'':'you';row.style.setProperty('--driver',c.color);paintTeam(row,c.color,c.colorB||c.color);row.querySelector('span').style.setProperty('--helmet',c.helmet.base);row.querySelector('span').style.setProperty('--helmet-accent',c.helmet.accent);
  row.querySelector('b').textContent=i+1;row.querySelector('span').textContent=(c.id?'':'★ ')+c.name;
  row.querySelector('small').textContent=qual?(c.bestLap!==null?(c.simulatedQualifying?'Réf. ':'')+clock(c.bestLap):c.finished?'Sans chrono':'Tour lancé…'):c.spin?'TÊTE-À-QUEUE':c.phase==='service'?'ARRÊT '+c.pit.service.toFixed(2)+' s':(c.finished?'Arrivé':C.TYRES[c.tyre].letter+' · '+Math.round((1-c.wear)*100)+' %')+(c.lastPitTime!==null?' · arrêt '+c.lastPitTime.toFixed(3)+' s':'');
 });
 const signature=race.pitHistory.length+':'+race.options.seed;
 if($('arPitTimes').dataset.entries!==signature){
  $('arPitTimes').dataset.entries=signature;$('arPitTimes').replaceChildren();$('arPitEmpty').hidden=!!race.pitHistory.length;
  for(const stop of [...race.pitHistory].reverse()){const li=document.createElement('li');li.textContent=stop.name+' · '+stop.time.toFixed(3)+' s · '+C.TYRES[stop.compound].name+(stop.problems?.length?' · écrou difficile':'')+(stop.trafficWait>.01?' · attente voie '+stop.trafficWait.toFixed(2)+' s':'');li.className=stop.id?'':'you';$('arPitTimes').append(li);}
 }
}
function rankingRow(d,index,metric,detail=''){
 const li=document.createElement('li');li.className='ar-rank-row'+(d.driverId===race?.player.driverId?' you':'');li.dataset.rank=index+1;li.style.setProperty('--rank-team',d.color||'#91b5bd');const rank=document.createElement('b');rank.className='ar-rank-position';rank.textContent=d.disqualified?'NC':index+1;
 const icon=document.createElement('span');icon.className='ar-rank-helmet';icon.innerHTML=F1Ceremony.helmet(d);
 const name=document.createElement('span');name.className='ar-rank-name';const strong=document.createElement('strong');strong.textContent=d.name;const team=document.createElement('small');team.textContent=d.teamName||teamFor(d.driverId)?.name||d.teamId||'';name.append(strong,team);
 const result=document.createElement('span');result.className='ar-rank-metric';const value=document.createElement('b');value.textContent=metric;const sub=document.createElement('small');sub.textContent=detail;result.append(value,sub);li.append(rank,icon,name,result);return li;
}
function resourceTone(node,percentage){const value=Math.round(C.clamp(percentage,0,100)),critical=value<=15,color=value>=70?'#73dfa9':value>=30?'#f4ad55':'#f06d72';node.dataset.critical=String(critical);node.style.setProperty('--instrument-color',color);node.style.setProperty('--instrument-tint',color+'20');node.style.setProperty('--instrument-level',(value/100).toFixed(3));}
const TYRE_GUIDE={cool:{wet:0,trackTemp:24},mild:{wet:0,trackTemp:34},hot:{wet:0,trackTemp:46},veryhot:{wet:0,trackTemp:54},drizzle:{wet:.30,trackTemp:24,rain:.16},humid:{wet:.55,trackTemp:26,rain:.40},rain:{wet:.95,trackTemp:20,rain:.65},deluge:{wet:1,trackTemp:20,rain:1}};
function renderTyreGuide(){
 const condition=TYRE_GUIDE[$('arTyreGuideCondition').value],table=document.createElement('table');
 table.innerHTML='<thead><tr><th>Gomme</th><th>V. maxi</th><th>Adhérence</th><th>Usure / tour</th></tr></thead>';
 const body=document.createElement('tbody');for(const [key,t]of Object.entries(C.TYRES)){
  const p=C.tyrePerformance(key,0,condition.wet,condition.trackTemp,condition.rain),row=document.createElement('tr');
  for(const value of [t.name,Math.round(350*p.top)+' km/h',Math.round(p.grip*100)+' %','≈ '+Math.round(p.wear*100)+' %']){const cell=document.createElement('td');cell.textContent=value;row.append(cell);}body.append(row);
 }table.append(body);$('arTyreGuideTable').replaceChildren(table);
}
function preRaceAdvice(){
 if(!preparedGP)return;
 const compound=$('arRaceTyre').value,advice=C.tyreAdvice(compound,0,preparedGP);
 compareTyres('arRaceCompare',preparedGP,compound,key=>{$('arRaceTyre').value=key;preRaceAdvice();});labelTyreOptions($('arRaceTyre'),preparedGP);
 $('arRaceTyreAdvice').textContent=(advice.warning||'Ce choix convient aux conditions prévues.')+' Vitesse maxi de départ : '+Math.round(350*advice.performance.top)+' km/h hors boost · pneus neufs.';if(race?.championshipRound&&race.state==='finished')writeProgress();
}
function prepareGrandPrix(){
 preparedGP=new C.Weather(race.options.weather,race.weather.seed,race.track.targetLap*Number($('arLaps').value),race.options.temperature);
 const rainLater=preparedGP.plan.some(p=>p.rain>.06&&p.at>0),recommended=C.recommendedTyre(preparedGP);
 $('arRaceForecast').textContent='Départ prévu : '+preparedGP.phase+' · piste '+Math.round(preparedGP.trackTemp)+' °C · humidité '+Math.round(preparedGP.wet*100)+' %.'+(rainLater?' Précipitations prévues pendant le Grand Prix.':' Pas de changement pluvieux annoncé.');
 $('arRaceTyre').value=C.TYRES[pendingRaceTyre]?pendingRaceTyre:recommended;pendingRaceTyre=null;preRaceAdvice();
}
function showResult(){
 finishedShown=true;if(race.championshipRound&&race.options.session!=='qualifying'){championship.award(race);savedSession=null;saveChamp(false);}try{audio.update(race.player,false);}catch(_){}const qual=race.options.session==='qualifying',pos=race.rank();
 $('arResultTitle').textContent=race.player.disqualified?'NON CLASSÉ · ARRÊT MANQUANT':qual?(pos===1?'POLE POSITION !':'P'+pos+' SUR LA GRILLE'):pos===1?'VICTOIRE !':pos<=3?'SUR LE PODIUM !':pos+'e · LA REVANCHE ?';
 $('arResultText').textContent=race.player.disqualified?'Un changement de pneus est obligatoire dans ce Grand Prix. Le résultat ne rapporte aucun point.':qual?'Votre meilleur tour en solo : '+clock(race.player.bestLap)+' · la grille compare ce temps aux tours en solo des 21 adversaires, simulés avec les mêmes règles de vitesse, météo et usure.':clock(race.player.finishTime)+' · '+race.passes+' dépassements · '+race.player.pitStops+' arrêt(s).';
 root.querySelector('.ar-classification-title').textContent=qual?'Classement des qualifications':'Classement de la course';$('arResultList').replaceChildren();for(const [i,c] of race.standings().entries())$('arResultList').append(rankingRow(c,i,qual?clock(c.bestLap):clock(c.finishTime),qual?'MEILLEUR TOUR':c.disqualified?'ARRÊT OBLIGATOIRE NON EFFECTUÉ':(race.championshipRound?(C.POINTS[i]||0)+' pts · ':'')+(c.id===0?'VOUS':i===0?'VAINQUEUR':'+'+(c.finishTime-race.standings()[0].finishTime).toFixed(3)+' s')));
 const ceremonies=$('arCeremonies');ceremonies.replaceChildren();if(!qual){if(race.standings().some(c=>!c.disqualified))ceremonies.append(F1Ceremony.create(race.standings().filter(c=>!c.disqualified).slice(0,3),{title:!race.player.disqualified&&pos===1?'VICTOIRE AU GRAND PRIX':!race.player.disqualified&&pos<=3?'VOUS ÊTES SUR LE PODIUM':'LE PODIUM DU GRAND PRIX',playerId:race.player.driverId}));if(race.championshipRound&&championship.complete)ceremonies.append(F1Ceremony.create(championship.standings().slice(0,3),{title:'LE PODIUM DU CHAMPIONNAT',championship:true,playerId:race.player.driverId}));}
 $('arPreRace').hidden=!qual;if(qual){qualifiedGrid=race.standings().map(c=>c.id);prepareGrandPrix();$('arGrandPrix').hidden=false;}else $('arGrandPrix').hidden=true;
 const value=qual?race.player.bestLap:race.player.finishTime;
 try{const prev=JSON.parse(localStorage.getItem(recordKey()));if(!race.player.disqualified&&value!==null&&(!prev||value<prev.time))localStorage.setItem(recordKey(),JSON.stringify({time:value,position:pos}));}catch(_){}
 $('arChampResult').hidden=!race.championshipRound||qual;$('arChampResultList').replaceChildren();if(race.championshipRound&&!qual){const standings=championship.standings();for(const [i,d] of standings.entries()){$('arChampResultList').append(rankingRow(d,i,d.points+' pts',(d.places[0]||0)+' victoire(s)'));}const own=standings.findIndex(d=>d.driverId===race.player.driverId);$('arResultText').textContent+=' · Championnat : P'+(own+1)+' / '+standings[own].points+' pts';}
 $('arNextRound').hidden=!race.championshipRound||qual||championship.complete;if(race.championshipRound&&!qual){$('arResultText').textContent+=' · Manche '+championship.rounds.length+' / '+championship.circuits.length;renderChamp();if(championship.complete){const [first,second]=championship.standings(),tied=first.points===second.points&&first.places.every((p,i)=>p===second.places[i]);$('arResultTitle').textContent=tied?'CHAMPIONNAT · ÉGALITÉ EN TÊTE':'CHAMPION : '+first.name;}}
 $('arResult').hidden=false;renderHUD();clear();if(race.championshipRound&&qual)saveChamp();
}
function normaliseOpponents(randomise=false){
 const used=new Set([$('arDriver').value]),all=DRIVERS_2026.map(d=>d.id);
 let available=all.filter(id=>!used.has(id));if(randomise)for(let i=available.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[available[i],available[j]]=[available[j],available[i]];}
 for(const select of opponentSelects()){
  let id=!randomise&&!used.has(select.value)?select.value:null;if(!id)id=available.find(x=>!used.has(x));select.value=id;used.add(id);
 }
 for(const select of opponentSelects())for(const option of select.options)option.disabled=option.value!==select.value&&used.has(option.value);
 refreshPickers();
}
function updateDrivers(){
 const t=TEAMS_2026.find(t=>t.id===$('arTeam').value),prev=$('arDriver').value;$('arDriver').replaceChildren();
 for(const id of t.drivers){const d=DRIVERS_2026.find(d=>d.id===id);if(d)$('arDriver').add(new Option(d.first+' '+d.last,id));}
 if(t.drivers.includes(prev))$('arDriver').value=prev;normaliseOpponents();load();
}
const CHAMP_KEY='f1-constant-world-v40';
const PROGRESS_KEY='f1-constant-progress-v1';
let lapRecords={},savedSession=null,progressSavedAt=null,lastAutoSave=0,storageError='',recordCelebration=null,recordTimer=0;
function validRecord(record){
 if(!record||!CIRCUITS_2026.some(t=>t.id===record.circuit)||!['discovery','challenge'].includes(record.level)||!Number.isFinite(record.time)||record.time<=0||record.time>86400||!['qualifying','race'].includes(record.session)||!C.TYRES[record.tyre])throw Error('Record de tour invalide');
 return{circuit:record.circuit,level:record.level,time:record.time,session:record.session,tyre:record.tyre,driverId:DRIVERS_2026.some(d=>d.id===record.driverId)?record.driverId:null,weather:['variable','dry','rain'].includes(record.weather)?record.weather:null,wet:Number.isFinite(record.wet)?C.clamp(record.wet,0,1):null,temperature:Number.isFinite(record.temperature)?C.clamp(record.temperature,0,80):null,date:typeof record.date==='string'&&Number.isFinite(Date.parse(record.date))?record.date:null,legacy:!!record.legacy};
}
function validChamp(value){
 if(!value)return null;const champ=C.Championship.restore(value);
 if(champ.drivers.length!==DRIVERS_2026.length||new Set(champ.drivers.map(d=>d.driverId)).size!==DRIVERS_2026.length||champ.drivers.some(d=>!DRIVERS_2026.some(x=>x.id===d.driverId))||champ.circuits.some(id=>!CIRCUITS_2026.some(c=>c.id===id)))throw Error('Championnat incompatible');
 const s=champ.settings;if(!['discovery','challenge'].includes(s.level)||![2,3,5].includes(s.laps)||!C.TYRES[s.tyre])throw Error('Réglages du championnat invalides');
 champ.drivers=champ.drivers.map(d=>driverData(d.driverId));champ.settings={level:s.level,laps:s.laps,tyre:s.tyre,qualifying:!!s.qualifying,weather:['variable','dry','rain'].includes(s.weather)?s.weather:'variable',temperature:['auto','cool','mild','hot','veryhot'].includes(s.temperature)?s.temperature:'auto'};
 for(const round of champ.rounds)round.result=round.result.map(r=>({...r,...driverData(r.driverId)}));return champ;
}
function validSession(value,champ){
 if(!value)return null;
 if(!champ||champ.complete||value.round!==champ.rounds.length||value.race?.trackId!==champ.circuits[champ.rounds.length])throw Error('Session incompatible avec le calendrier');
 const restored=C.Race.restore(readTrack(value.race.trackId),value.race,champ.drivers);
 if(restored.state==='finished'&&restored.options.session!=='qualifying')throw Error('Cette manche est déjà terminée');
 const expected=champ.settings;if(restored.options.level!==expected.level||restored.options.session==='race'&&restored.options.laps!==expected.laps||restored.options.session==='qualifying'&&!expected.qualifying)throw Error('Session incompatible avec le championnat');
 const grid=value.qualifiedGrid;if(grid!==null&&grid!==undefined&&(!Array.isArray(grid)||grid.length!==champ.drivers.length||new Set(grid).size!==grid.length||grid.some(i=>!Number.isInteger(i)||i<0||i>=grid.length)))throw Error('Grille sauvegardée invalide');
 return{round:value.round,race:value.race,qualifiedGrid:grid||null,raceTyre:C.TYRES[value.raceTyre]?value.raceTyre:null};
}
function captureSession(){
 if(!championship||championship.complete)return null;
 if(race?.championshipRound&&race.track.id===championship.circuits[championship.rounds.length]&&(race.state!=='finished'||race.options.session==='qualifying'))return{round:championship.rounds.length,race:race.snapshot(),qualifiedGrid:qualifiedGrid? [...qualifiedGrid]:null,raceTyre:preparedGP?$('arRaceTyre').value:null};
 return savedSession;
}
function progressValue(){return{format:'f1-constant-progress',version:1,savedAt:progressSavedAt,records:Object.values(lapRecords),championship:championship?JSON.parse(JSON.stringify(championship)):null,session:savedSession};}
function writeProgress(capture=true){
 if(capture)savedSession=captureSession();const previousSavedAt=progressSavedAt;progressSavedAt=new Date().toISOString();
 try{localStorage.setItem(PROGRESS_KEY,JSON.stringify(progressValue()));if(championship)localStorage.setItem(CHAMP_KEY,JSON.stringify(championship));else localStorage.removeItem(CHAMP_KEY);storageError='';}catch(_){progressSavedAt=previousSavedAt;storageError='Mémoire du navigateur indisponible : exportez une copie de votre sauvegarde.';}
 $('arSaveStatus').textContent=storageError||'Enregistré sur cet appareil à '+new Date(progressSavedAt).toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});$('arRaceSaveStatus').hidden=!race?.championshipRound;$('arRaceSaveStatus').textContent=storageError||'Championnat enregistré à '+new Date(progressSavedAt).toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit',second:'2-digit'});renderChamp();
}
function rememberLap(){
 if(!race||!Number.isFinite(race.player.bestLap)||race.player.bestLap<=0)return;
 const key=race.track.id+':'+race.options.level,prev=lapRecords[key];if(prev&&prev.time<=race.player.bestLap)return;
 lapRecords[key]=validRecord({circuit:race.track.id,level:race.options.level,time:race.player.bestLap,session:race.options.session,tyre:race.player.tyre,driverId:race.player.driverId,weather:race.options.weather,wet:race.weather.wet,temperature:race.weather.trackTemp,date:new Date().toISOString()});
 celebrateRecord(key);writeProgress();renderRecords();
}
function renderRecords(){
 const list=$('arLapRecords');list.replaceChildren();
 for(const track of CIRCUITS_2026){const available=['discovery','challenge'].map(level=>lapRecords[track.id+':'+level]);if(!available.some(Boolean))continue;const row=document.createElement('li'),name=document.createElement('strong');name.textContent=track.city;row.append(name);
  available.forEach((record,i)=>{const cell=document.createElement('span'),label=document.createElement('small'),value=document.createElement('b');label.textContent=i?'Sport':'Club';value.textContent=record?clock(record.time):'—';cell.append(label,value);if(record){const detail=document.createElement('small');detail.textContent=C.TYRES[record.tyre].name+(record.temperature!==null?' · '+Math.round(record.temperature)+' °C':'')+(record.legacy?' · ancien record':record.wet>.16?' · humide':' · sec');cell.append(detail);}row.append(cell);});list.append(row);
 }
 $('arRecordsEmpty').hidden=Object.keys(lapRecords).length>0;
 if(race){const record=lapRecords[race.track.id+':'+race.options.level];$('arRecord').textContent=record?'Votre record du tour · '+(race.options.level==='challenge'?'Sport':'Club')+' : '+clock(record.time):'Votre premier tour chronométré sera conservé ici.';}renderBannerRecord();
}
function renderBannerRecord(){
 const key=race?race.track.id+':'+race.options.level:null,record=key?lapRecords[key]:null,celebrating=!!(record&&recordCelebration?.key===key&&performance.now()<recordCelebration.until);
 const label=celebrating?'RECORD DU TOUR !':'record:',time=record?clock(record.time):'—';
 if($('arBannerRecordLabel').textContent!==label)$('arBannerRecordLabel').textContent=label;if($('arBannerRecordTime').textContent!==time)$('arBannerRecordTime').textContent=time;
 $('arBannerRecord').classList.toggle('is-new',celebrating);$('arBannerRecord').title=record?'Votre meilleur tour à '+race.track.city+' · '+(race.options.level==='challenge'?'Sport':'Club'):'Aucun tour enregistré sur ce circuit dans ce mode';
}
function celebrateRecord(key){
 clearTimeout(recordTimer);recordCelebration={key,until:performance.now()+6000};recordTimer=setTimeout(()=>{recordCelebration=null;renderBannerRecord();},6050);
}
function openChamp(){
 if(race&&['racing','countdown'].includes(race.state))pause();clear();renderChamp();const dialog=$('arChampDialog');if(!dialog.open)dialog.showModal();$('arChampClose').focus({preventScroll:true});
}
function closeChamp(){if($('arChampDialog').open)$('arChampDialog').close();}
function saveChamp(capture=true){writeProgress(capture);}
function renderChamp(){
 const box=$('arChampStandings');box.replaceChildren();$('arChampResume').hidden=!championship||championship.complete;$('arSaveRace').disabled=$('arChampSave').disabled=!championship;
 if(!championship){$('arChampStatus').textContent='Aucun championnat sauvegardé. Choisissez vos circuits pour commencer.';return;}
 let status=(championship.complete?'Championnat terminé':'Manche '+(championship.rounds.length+1)+' / '+championship.circuits.length)+' · '+championship.rounds.length+' Grand Prix disputé(s)';
 if(savedSession){const s=savedSession.race.state,track=CIRCUITS_2026.find(t=>t.id===savedSession.race.trackId);status+=' · '+track.city+' · '+(s.options.session==='qualifying'?'qualifications':'Grand Prix')+(s.state==='finished'?' terminées':' à reprendre à '+clock(s.time));}
 if(progressSavedAt)status+=' · sauvegardé le '+new Date(progressSavedAt).toLocaleString('fr-FR');$('arChampStatus').textContent=status;
 for(const [i,d]of championship.standings().entries())box.append(rankingRow(d,i,d.points+' pts',(d.places[0]||0)+' victoire(s)'));
}
function saveNow(){
 if(!championship)return;if(race?.championshipRound&&['racing','countdown'].includes(race.state))pause();rememberLap();writeProgress();
 if(race?.championshipRound){race.notify(storageError||'Championnat enregistré · vous pourrez le reprendre ici.',4);hudAt=0;schedule();}
}
function syncChampSettings(){
 const own=championship.drivers[0].driverId,team=teamFor(own);$('arTeam').value=team.id;$('arDriver').replaceChildren();for(const id of team.drivers){const d=DRIVERS_2026.find(d=>d.id===id);$('arDriver').add(new Option(d.first+' '+d.last,id));}$('arDriver').value=own;opponentSelects().forEach((select,i)=>{select.value=championship.drivers[i+1].driverId;});normaliseOpponents();
 const s=championship.settings;$('arSession').value='championship';$('arChampSetup').hidden=false;level=s.level;$('arLaps').value=s.laps;$('arWeather').value=s.weather;$('arTemperature').value=s.temperature;$('arTyre').value=s.tyre;$('arChampQual').checked=s.qualifying;
 $('arCircuit').value=championship.circuits[championship.rounds.length]||championship.circuits[0];root.querySelectorAll('[data-ar-level]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.arLevel===level)));
 for(const input of $('arChampTracks').querySelectorAll('input'))input.checked=championship.circuits.includes(input.value);
}
function resumeChamp(){
 if(!championship||championship.complete)return;syncChampSettings();
 if(!savedSession){void start();return;}
 try{
  const session=validSession(savedSession,championship);resetLoop();clear();try{audio.pause();}catch(_){}frameError='';
  race=C.Race.restore(readTrack(session.race.trackId),session.race,championship.drivers);race.championshipRound=true;qualifiedGrid=session.qualifiedGrid;preparedGP=null;pendingRaceTyre=race.options.session==='qualifying'&&race.state==='finished'?session.raceTyre:null;finishedShown=false;resolvingFinish=false;lastAutoSave=race.time;
  shell.dataset.playing='true';$('arResult').hidden=true;$('arLevelName').textContent=level==='challenge'?'SPORT':'CLUB';$('arRaceName').textContent=race.track.city+' · '+(race.options.session==='qualifying'?'qualifications en solo · 2 tours':race.options.laps+' tours');setTyre(race.nextTyre);renderer.key=null;hudAt=0;canvas.focus({preventScroll:true});shell.scrollIntoView({block:'start',behavior:'instant'});renderHUD();schedule();
 }catch(error){$('arSaveStatus').textContent='Cette session ne peut pas être reprise. Le classement du championnat reste conservé.';}
}
function restoreProgress(){
 let restored=false;
 try{const raw=localStorage.getItem(PROGRESS_KEY);if(raw){const value=JSON.parse(raw);if(value.format!=='f1-constant-progress'||value.version!==1||!Array.isArray(value.records)||value.records.length>1000)throw Error('Sauvegarde invalide');const records={};for(const entry of value.records){const record=validRecord(entry),key=record.circuit+':'+record.level;if(!records[key]||record.time<records[key].time)records[key]=record;}const champ=validChamp(value.championship);lapRecords=records;championship=champ;progressSavedAt=typeof value.savedAt==='string'&&Number.isFinite(Date.parse(value.savedAt))?value.savedAt:null;try{savedSession=validSession(value.session,champ);}catch(_){savedSession=null;$('arSaveStatus').textContent='Session interrompue illisible ; le classement et vos records sont conservés.';}restored=true;}}
 catch(_){$('arSaveStatus').textContent='La dernière sauvegarde est illisible. Recherche des résultats déjà mémorisés.';}
 if(!restored)try{championship=validChamp(JSON.parse(localStorage.getItem(CHAMP_KEY)));}catch(_){}
 // Old race records are total Grand Prix times; only qualifying times are lap records.
 let migrated=false;try{for(let i=0;i<localStorage.length;i++){const key=localStorage.key(i),match=/^f1-arcade-v[\d.]+:([^:]+):qualifying:(discovery|challenge):\d+:([^:]+)$/.exec(key||'');if(!match)continue;try{const old=JSON.parse(localStorage.getItem(key)),record=validRecord({circuit:match[1],level:match[2],time:old.time,session:'qualifying',tyre:match[3],legacy:true}),id=record.circuit+':'+record.level;if(!lapRecords[id]||record.time<lapRecords[id].time){lapRecords[id]=record;migrated=true;}}catch(_){}}}catch(_){}
 if(migrated)writeProgress(false);renderRecords();renderChamp();
}
function backupFile(){
 rememberLap();writeProgress();return new File([JSON.stringify(progressValue(),null,2)],'F1-CONSTANT-sauvegarde-'+new Date().toISOString().slice(0,19).replace(/:/g,'-')+'.json',{type:'application/json'});
}
function downloadBackup(file){
 const url=URL.createObjectURL(file),link=document.createElement('a');link.href=url;link.download=file.name;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);
}
function exportProgress(){
 try{downloadBackup(backupFile());$('arSaveStatus').textContent='Fichier de sauvegarde préparé. Conservez-le dans Fichiers ou Téléchargements.';}catch(_){$('arSaveStatus').textContent='Export impossible pour le moment. Vos données restent conservées sur cet appareil.';}
}
async function shareProgress(){
 const button=$('arShareSave');if(button.disabled)return;
 try{
  const file=backupFile();
  if(!navigator.share||!navigator.canShare||!navigator.canShare({files:[file]})){downloadBackup(file);$('arSaveStatus').textContent='Le partage direct est indisponible dans ce navigateur. Le fichier est téléchargé : partagez-le ensuite depuis Fichiers.';return;}
  button.disabled=true;await navigator.share({files:[file],title:'Sauvegarde F1-CONSTANT'});$('arSaveStatus').textContent='Sauvegarde transmise au menu de partage.';
 }catch(error){$('arSaveStatus').textContent=error.name==='AbortError'?'Partage annulé. Vos données restent conservées.':'Le partage n’a pas abouti. Utilisez « Exporter la sauvegarde », puis partagez le fichier depuis Fichiers.';}finally{button.disabled=false;}
}
async function importProgress(file){
 if(!file)return;try{
  if(file.size>2*1024*1024)throw Error('Fichier trop volumineux');const value=JSON.parse(await file.text());if(value.format!=='f1-constant-progress'||value.version!==1||!Array.isArray(value.records)||value.records.length>1000)throw Error('Ce fichier n’est pas une sauvegarde F1-CONSTANT');
  const records={...lapRecords};for(const entry of value.records){const record=validRecord(entry),key=record.circuit+':'+record.level;if(!records[key]||record.time<records[key].time)records[key]=record;}
  const champ=validChamp(value.championship),session=validSession(value.session,champ);
  if(race&&['racing','countdown'].includes(race.state))pause();if(race)race.championshipRound=false;championship=champ;savedSession=session;lapRecords=records;writeProgress(false);renderRecords();$('arSaveStatus').textContent=storageError||'Sauvegarde importée. Vos meilleurs records ont été conservés.';
 }catch(error){$('arSaveStatus').textContent='Import impossible : '+error.message+'. Vos données actuelles sont conservées.';}finally{$('arImportFile').value='';}
}

function toggleBoost(){if(race?.state!=='racing'||race.player.finished)return;boostLatched=!boostLatched;canvas.focus({preventScroll:true});hudAt=0;schedule();}
for(const c of CIRCUITS_2026){const label=document.createElement('label'),input=document.createElement('input');input.type='checkbox';input.value=c.id;input.checked=true;label.append(input,document.createTextNode(c.city));$('arChampTracks').append(label);}
$('arChampAll').onclick=()=>{$('arChampTracks').querySelectorAll('input').forEach(e=>e.checked=true);};$('arChampNone').onclick=()=>{$('arChampTracks').querySelectorAll('input').forEach(e=>e.checked=false);};
$('arChampReset').onclick=()=>{if(championship&&(championship.rounds.length||savedSession)&&!confirm('Effacer le championnat sauvegardé ? Vos records du tour seront conservés.'))return;if(race)race.championshipRound=false;championship=null;savedSession=null;qualifiedGrid=null;writeProgress(false);renderChamp();closeChamp();garage();$('arSession').value='championship';$('arChampSetup').hidden=false;};
$('arFinishAdvance').onclick=()=>{if(!race?.player.finished||race.options.session==='qualifying'||race.state==='finished')return;resolvingFinish=true;clear();hudAt=0;schedule();};$('arChampOpen').onclick=openChamp;$('arChampClose').onclick=closeChamp;$('arChampDialog').addEventListener('cancel',()=>clear());$('arChampResume').onclick=()=>{closeChamp();resumeChamp();};$('arSaveRace').onclick=$('arChampSave').onclick=saveNow;$('arExportSave').onclick=exportProgress;$('arShareSave').onclick=shareProgress;$('arImportFile').onchange=e=>void importProgress(e.target.files[0]);
$('arNextRound').onclick=()=>void start();const boostButton=$('arBoostToggle');boostButton.onclick=e=>{if(e.detail===0)toggleBoost();};
boostButton.addEventListener('pointerdown',e=>{if(race?.state!=='racing')return;e.preventDefault();if(e.pointerType==='touch'||e.pointerType==='pen'){boostLatched=false;pointers.set(e.pointerId,'touchBoost');try{boostButton.setPointerCapture(e.pointerId);}catch(_){}}else toggleBoost();hudAt=0;schedule();});
for(const type of ['pointerup','pointercancel','lostpointercapture'])boostButton.addEventListener(type,e=>{if(pointers.get(e.pointerId)==='touchBoost'){pointers.delete(e.pointerId);for(const [id,input] of pointers)if(input==='throttle')pointers.delete(id);boostLatched=false;hudAt=0;schedule();}});
restoreProgress();
$('arSession').addEventListener('change',()=>{$('arChampSetup').hidden=$('arSession').value!=='championship';});
for(const c of CIRCUITS_2026)$('arCircuit').add(new Option(c.city+' — '+c.country,c.id));$('arCircuit').value='monza';
for(const t of TEAMS_2026)$('arTeam').add(new Option(t.name,t.id));$('arTeam').value='ferrari';
for(let i=0;i<DRIVERS_2026.length-1;i++){
 const label=document.createElement('label');label.textContent='Adversaire '+(i+1);const select=document.createElement('select');select.setAttribute('aria-label','Adversaire '+(i+1));
 for(const d of DRIVERS_2026)select.add(new Option(d.first+' '+d.last+' · '+teamFor(d.id).name,d.id));label.append(select);$('arOpponentGrid').append(label);
 select.onchange=()=>{normaliseOpponents();load();};
}
for(let i=0;i<DRIVERS_2026.length;i++){const li=document.createElement('li');li.innerHTML='<b></b><span></span><small></small>';$('arTiming').append(li);}
const gp=document.createElement('button');gp.id='arGrandPrix';gp.className='ar-start';gp.textContent='GRAND PRIX →';gp.hidden=true;gp.onclick=()=>void start('race',qualifiedGrid);$('arAgain').before(gp);
$('arTeam').onchange=updateDrivers;$('arDriver').onchange=()=>{normaliseOpponents();load();};$('arRandom').onclick=()=>{normaliseOpponents(true);load();};
for(const id of ['arCircuit','arLaps','arTyre','arSession','arWeather','arTemperature'])$(id).addEventListener('change',load);
root.querySelectorAll('[data-ar-level]').forEach(b=>b.onclick=()=>{level=b.dataset.arLevel;root.querySelectorAll('[data-ar-level]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));$('arModeHelp').textContent=level==='challenge'?'Direction réactive, adversaires très rapides. Gaz, freins et direction manuels.':'Direction manuelle proche du Sport, avec un filtrage un peu plus doux. Gaz et freins manuels. Maintenez FREIN à l’arrêt pour reculer.';load();});
root.querySelectorAll('[data-ar-tyre]').forEach(b=>b.onclick=()=>setTyre(b.dataset.arTyre));
$('arStart').onclick=()=>{$('arSession').value==='championship'&&savedSession?resumeChamp():void start();};$('arAgain').onclick=()=>void start();$('arPause').onclick=pause;$('arResume').onclick=resume;$('arGarageButton').onclick=$('arChoose').onclick=garage;$('arPit').onclick=pit;$('arFullscreen').onclick=()=>setFullscreen(!shell.classList.contains('ar-fullscreen'));
$('arRaceTyre').onchange=()=>{preRaceAdvice();if(race?.championshipRound&&race.state==='finished')saveChamp();};$('arTyreGuideCondition').onchange=renderTyreGuide;
$('arPitComparison').addEventListener('toggle',renderTyreComparisons);
$('arPitTyre').onchange=()=>{setTyre($('arPitTyre').value);canvas.focus({preventScroll:true});};
$('arZoom').oninput=()=>{renderer.zoom=Number($('arZoom').value)/100;schedule();};
root.querySelectorAll('[data-ar-input]').forEach(b=>{
 b.addEventListener('pointerdown',e=>{if(race?.state!=='racing')return;e.preventDefault();pointers.set(e.pointerId,b.dataset.arInput);b.classList.add('pressed');try{b.setPointerCapture(e.pointerId);}catch(_){}});
 for(const type of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(type,e=>{pointers.delete(e.pointerId);if(![...pointers.values()].includes(b.dataset.arInput))b.classList.remove('pressed');});
});
for(const type of ['pointerup','pointercancel'])window.addEventListener(type,e=>{const input=pointers.get(e.pointerId);pointers.delete(e.pointerId);if(input==='touchBoost'){for(const [id,value]of pointers)if(value==='throttle')pointers.delete(id);boostLatched=false;}if(race)updateInput();});
const codes={ArrowLeft:'left',KeyQ:'left',KeyA:'left',ArrowRight:'right',KeyD:'right',ArrowUp:'throttle',KeyZ:'throttle',KeyW:'throttle',ArrowDown:'brake',KeyS:'brake',ShiftLeft:'boost',ShiftRight:'boost'};
document.addEventListener('keydown',e=>{if($('arChampDialog').open)return;if(!active()||/INPUT|SELECT|TEXTAREA|BUTTON/.test(e.target.tagName))return;if(codes[e.code]){e.preventDefault();keyboard.add(codes[e.code]);}else if(e.code==='Escape'&&!e.repeat){e.preventDefault();if(shell.classList.contains('ar-fullscreen'))setFullscreen(false);else pause();}else if(e.code==='KeyB'&&!e.repeat){e.preventDefault();toggleBoost();}else if((e.code==='KeyP'||e.code==='Space')&&!e.repeat){e.preventDefault();pit();}});
document.addEventListener('keyup',e=>{if(codes[e.code])keyboard.delete(codes[e.code]);});
function settings(){renderer.kerbFeedbackOn=$('arKerbVisual').checked;audio.settings({kerbOn:$('arKerbSound').checked,engineOn:$('arEngineOn').checked,musicOn:$('arMusicOn').checked,engineVolume:Number($('arEngineVolume').value)/100,musicVolume:Number($('arMusicVolume').value)/100});if(race&&['racing','countdown'].includes(race.state)&&!audio.active)void audio.start();}
for(const id of ['arEngineOn','arMusicOn','arEngineVolume','arMusicVolume','arKerbSound','arKerbVisual'])$(id).addEventListener(id.includes('Volume')?'input':'change',settings);
function leave(){resetLoop();if(race&&['racing','countdown'].includes(race.state))race.pause();rememberLap();if(race?.championshipRound&&championship)saveChamp();try{audio.pause();}catch(_){}clear();last=0;if(!active())setFullscreen(false);}
const previousShow=window.showView;window.showView=function(name,...args){if(name!=='game'){closeChamp();leave();}const result=previousShow.call(this,name,...args);if(name==='game'){window.F1Audio?.stop('loupe');if(!race)load();last=0;hudAt=0;preview();schedule();}return result;};
new MutationObserver(()=>{if(!active())leave();else{if(!race)load();last=0;schedule();}}).observe(root,{attributes:true,attributeFilter:['class']});
window.addEventListener('blur',()=>{clear();if(document.hidden||!matchMedia('(pointer:coarse)').matches)leave();});
document.addEventListener('visibilitychange',()=>{if(document.hidden)leave();else if(active()){resetLoop();schedule();}});
window.addEventListener('pagehide',leave);window.addEventListener('pageshow',()=>{if(active()){resetLoop();schedule();}});
canvas.addEventListener('contextlost',e=>{e.preventDefault();frameError='Canvas interrompu';leave();$('arOverlay').hidden=false;$('arResume').hidden=false;});
canvas.addEventListener('contextrestored',()=>{renderer.recover?.();if(active()){resetLoop();schedule();}});
new ResizeObserver(()=>{if(active()){preview();schedule();}}).observe(canvas);
window.F1Arcade=Object.freeze({state:()=>race?{version:57,progress:{savedAt:progressSavedAt,records:Object.values(lapRecords),sessionSaved:!!savedSession,storageError},recovery:{errors:loopErrors,message:frameError},circuit:race.track.id,totalCircuits:CIRCUITS_2026.length,state:race.state,session:race.options.session,level:race.options.level,laps:race.options.laps,time:race.time,position:race.rank(),player:{...race.player,pit:race.player.pit?{...race.player.pit}:null},cars:race.cars.map(c=>({...c})),pitHistory:[...race.pitHistory],camera:renderer.v?{...renderer.v}:null,championship:championship?JSON.parse(JSON.stringify(championship)):null,boostLatched,weather:{rain:race.weather.rain,wet:race.weather.wet,risk:race.weather.risk,phase:race.weather.phase,trackTemp:race.weather.trackTemp,plan:race.weather.plan},calibration:{lengthKm:race.track.lengthKm,kphPerUnit:race.track.kphPerUnit,referenceSeconds:race.track.referenceSeconds,targetLap:race.track.targetLap,profileLap:race.track.profileLap},audio:audio.state()}:null});
updateDrivers();normaliseOpponents(true);load();
})();
