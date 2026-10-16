/* F1 Constant V41. Moteur arcade original, indépendant du DOM et du rendu. */
(function(scope){'use strict';
const TAU=Math.PI*2,clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),mod=(v,n)=>(v%n+n)%n,angle=a=>Math.atan2(Math.sin(a),Math.cos(a)),dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
function seedOf(s){let n=2166136261;for(const c of String(s))n=Math.imul(n^c.charCodeAt(0),16777619);return n>>>0;}
function random(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function freshSeed(){const b=new Uint32Array(1);if(globalThis.crypto?.getRandomValues){globalThis.crypto.getRandomValues(b);return b[0];}return (Date.now()^Math.floor(Math.random()*4294967296))>>>0;}
// Each wheel has explicit phases. A delay freezes only its loosening or tightening.
function wheelState(pit,index){
 const w=pit?.wheels?.[index];if(!w?.timeline){return{u:1,offset:0,new:true,ready:true,stage:'PRÊTE',phase:'ready',progress:1,blocked:false};}
 const time=pit.service||0,phase=w.timeline.find(p=>time<p.end-1e-8),ready=!phase;
 if(ready)return{u:1,offset:0,new:true,ready:true,stage:'PRÊTE',phase:'ready',progress:1,blocked:false};
 const problem=w.problem,blocked=!!problem&&time>=problem.start&&time<problem.start+problem.delay;
 const elapsed=time-phase.start,delayElapsed=problem&&phase.id===problem.phase?clamp(time-problem.start,0,problem.delay):0;
 const linear=clamp((elapsed-delayElapsed)/phase.normalDuration,0,1),progress=linear*linear*(3-2*linear),id=phase.id;
 const labels={loosen:'DESSERRAGE',remove:'RETRAIT',fit:'PNEU NEUF',tighten:'SERRAGE',check:'CONTRÔLE'};
 return{u:clamp(time/w.duration,0,1),ready:false,offset:id==='remove'?progress*25:id==='fit'?(1-progress)*25:0,new:['fit','tighten','check'].includes(id),phase:id,stage:labels[id],progress,blocked,problem:problem?.phase,turning:['loosen','tighten'].includes(id),nutAngle:blocked?Math.sin(time*29)*.42:time*(id==='loosen'?-38:38)};
}
function resample(raw,closed,spacing=2.5){const clean=[];for(const q of raw){const p={x:+(q.x??q[0]),y:+(q.y??q[1])};if(!Number.isFinite(p.x+p.y))throw Error('Point de circuit invalide');if(!clean.length||dist(p,clean.at(-1))>.001)clean.push(p);}if(clean.length<3)throw Error('Circuit incomplet');if(closed&&dist(clean[0],clean.at(-1))>.001)clean.push({...clean[0]});const cumulative=[0];for(let i=1;i<clean.length;i++)cumulative.push(cumulative[i-1]+dist(clean[i],clean[i-1]));const length=cumulative.at(-1),n=Math.ceil(length/spacing),step=length/n,points=[];let j=1;for(let i=0;i<(closed?n:n+1);i++){const d=i*step;while(j<cumulative.length-1&&cumulative[j]<d)j++;const u=(d-cumulative[j-1])/(cumulative[j]-cumulative[j-1]);points.push({x:clean[j-1].x+(clean[j].x-clean[j-1].x)*u,y:clean[j-1].y+(clean[j].y-clean[j-1].y)*u});}return{points,length,step,closed};}
function at(path,s){const p=path.points,n=p.length,f=(path.closed?mod(s,path.length):clamp(s,0,path.length))/path.step,i=Math.min(Math.floor(f),n-1),u=f-i,a=p[i],b=p[path.closed?(i+1)%n:Math.min(i+1,n-1)];const before=p[path.closed?mod(i-2,n):Math.max(0,i-2)],after=p[path.closed?(i+3)%n:Math.min(n-1,i+3)];const nextBefore=p[path.closed?mod(i-1,n):Math.max(0,i-1)],nextAfter=p[path.closed?mod(i+4,n):Math.min(n-1,i+4)],heading=Math.atan2(after.y-before.y,after.x-before.x),nextHeading=Math.atan2(nextAfter.y-nextBefore.y,nextAfter.x-nextBefore.x);return{x:a.x+(b.x-a.x)*u,y:a.y+(b.y-a.y)*u,a:heading+angle(nextHeading-heading)*u};}
function near(path,x,y){let best=Infinity,index=0;for(let i=0;i<path.points.length;i++){const p=path.points[i],d=(p.x-x)**2+(p.y-y)**2;if(d<best){best=d;index=i;}}return{s:index*path.step,d:Math.sqrt(best),...at(path,index*path.step)};}
function pose(track,s,lane=0){const p=at(track,s);return{x:p.x-Math.sin(p.a)*lane,y:p.y+Math.cos(p.a)*lane,a:p.a};}
function roadHalfWidth(t,s){const f=mod(s,t.length)/t.step,i=Math.floor(f)%t.points.length,u=f-i;return t.halfWidths?t.halfWidths[i]*(1-u)+t.halfWidths[(i+1)%t.points.length]*u:t.width/2;}
function findBridge(t){if(t.id!=='suzuka')return null;const p=t.points;for(let i=0;i<p.length-5;i+=4)for(let j=i+35;j<p.length-5;j+=4){if(j-i>p.length-35)continue;const a=p[i],b=p[i+4],c=p[j],d=p[j+4],vx=b.x-a.x,vy=b.y-a.y,wx=d.x-c.x,wy=d.y-c.y,den=vx*wy-vy*wx;if(Math.abs(den)<.0001)continue;const u=((c.x-a.x)*wy-(c.y-a.y)*wx)/den,v=((c.x-a.x)*vy-(c.y-a.y)*vx)/den;if(u>0&&u<1&&v>0&&v<1)return{lower:(i+u*4)*t.step,upper:(j+v*4)*t.step,x:a.x+u*vx,y:a.y+u*vy,half:t.width*1.6};}return null;}
function openCorners(track){
 const base=resample(track.points,true,4),p=base.points.map(q=>({...q})),n=p.length,spacing=base.step,clearance=track.width+5,minRadius=track.width*.85;
 // Keep the over/under crossing in Suzuka, while separating all other close branches.
 const bridge=findBridge({...base,id:track.id,width:track.width});
 for(let iteration=0;iteration<260;iteration++){
  const force=p.map(()=>({x:0,y:0})),grid=new Map(),head=p.map((q,i)=>Math.atan2(p[(i+1)%n].y-p[mod(i-1,n)].y,p[(i+1)%n].x-p[mod(i-1,n)].x));
  for(let i=0;i<n;i++){const q=p[i],cx=Math.floor(q.x/clearance),cy=Math.floor(q.y/clearance);for(let ox=-1;ox<=1;ox++)for(let oy=-1;oy<=1;oy++){const bucket=grid.get((cx+ox)+':'+(cy+oy))||[];for(const j of bucket){const sep=Math.min(mod(i-j,n),mod(j-i,n))*spacing;if(sep<track.width*.8||sep<track.width*2.2&&Math.cos(angle(head[i]-head[j]))>-.2)continue;
   if(bridge){const near=(k,s)=>Math.abs(mod(k*spacing-s+base.length/2,base.length)-base.length/2)<track.width*2;if(near(i,bridge.lower)&&near(j,bridge.upper)||near(j,bridge.lower)&&near(i,bridge.upper))continue;}
   const dx=q.x-p[j].x,dy=q.y-p[j].y,d=Math.hypot(dx,dy);if(d<clearance&&d>.01){const push=(clearance-d)*.16;force[i].x+=dx/d*push;force[i].y+=dy/d*push;force[j].x-=dx/d*push;force[j].y-=dy/d*push;}
  }}const key=cx+':'+cy;if(!grid.has(key))grid.set(key,[]);grid.get(key).push(i);}
  for(let i=0;i<n;i++){const prev=p[mod(i-1,n)],q=p[i],next=p[(i+1)%n],turn=Math.abs(angle(Math.atan2(next.y-q.y,next.x-q.x)-Math.atan2(q.y-prev.y,q.x-prev.x))),local=(dist(prev,q)+dist(q,next))/2,bend=turn/Math.max(.1,local),smooth=bend>1/minRadius?.32:.025;force[i].x+=((prev.x+next.x)/2-q.x)*smooth;force[i].y+=((prev.y+next.y)/2-q.y)*smooth;}
  for(let i=0;i<n;i++){p[i].x+=clamp(force[i].x,-1,1);p[i].y+=clamp(force[i].y,-1,1);}
 }
 return resample(p,true,2);
}
function parseLap(value){const m=/^(\d+):(\d{2}(?:\.\d+)?)$/.exec(String(value||''));return m?Number(m[1])*60+Number(m[2]):null;}
function calibrateTrack(t){
 t.lengthKm=Number(t.lengthKm)||5;t.metersPerUnit=t.lengthKm*1000/t.length;t.kphPerUnit=t.metersPerUnit*3.6;t.referenceSeconds=parseLap(t.fastestLap);t.targetLap=t.referenceSeconds?t.referenceSeconds*1.07:t.lengthKm/210*3600;t.referenceEstimated=!t.referenceSeconds;
 const top=350/t.kphPerUnit,accel=27/t.metersPerUnit,brake=52/t.metersPerUnit;
 const profile=lateral=>{const caps=t.bends.map(b=>Math.min(top,Math.sqrt(lateral/t.metersPerUnit/Math.max(.000001,b))));for(let pass=0;pass<3;pass++){for(let i=0;i<caps.length;i++){const prev=caps[mod(i-1,caps.length)];caps[i]=Math.min(caps[i],Math.sqrt(prev*prev+2*accel*t.step));}for(let i=caps.length-1;i>=0;i--){const next=caps[(i+1)%caps.length];caps[i]=Math.min(caps[i],Math.sqrt(next*next+2*brake*t.step));}}return caps;};
 let lo=2,hi=300;for(let i=0;i<28;i++){const mid=(lo+hi)/2,p=profile(mid),time=p.reduce((sum,v,i)=>sum+2*t.step/(v+p[(i+1)%p.length]),0);if(time>t.targetLap)lo=mid;else hi=mid;}t.lateralAcceleration=(lo+hi)/2;t.speedCaps=profile(t.lateralAcceleration);t.profileLap=t.speedCaps.reduce((sum,v,i)=>sum+2*t.step/(v+t.speedCaps[(i+1)%t.speedCaps.length]),0);t.topKph=350;
}
function makeTrack(info,raw,pitRaw=[]){const xs=raw.map(p=>+(p.x??p[0])),ys=raw.map(p=>+(p.y??p[1])),minX=Math.min(...xs),minY=Math.min(...ys),size=Math.max(Math.max(...xs)-minX,Math.max(...ys)-minY),scale=1000/size;const convert=p=>({x:(+(p.x??p[0])-minX)*scale,y:(+(p.y??p[1])-minY)*scale});const t={...resample(raw.map(convert),true),...info,sourceScale:scale,sourceOrigin:{x:minX,y:minY}};
// Filter tiny SVG kinks before deriving tangents and gameplay curvature.
let smooth=t.points;for(let pass=0;pass<6;pass++)smooth=smooth.map((p,i)=>{let x=0,y=0,total=0;for(let k=-3;k<=3;k++){const weight=4-Math.abs(k),q=smooth[mod(i+k,smooth.length)];x+=q.x*weight;y+=q.y*weight;total+=weight;}return{x:x/total,y:y/total};});Object.assign(t,resample(smooth,true));
// Shared width on every circuit; the centreline, never the road width, is relaxed.
t.width=24;t.carLength=t.width*.306;t.carWidth=t.carLength*.43;
Object.assign(t,openCorners(t));
t.bends=t.points.map((p,i)=>Math.abs(angle(at(t,i*t.step+6).a-at(t,i*t.step-6).a))/12);
calibrateTrack(t);
let entry=t.length*.92,exit=t.length*.045,side=1;if(pitRaw.length>2){const pr=pitRaw.map(convert),a=near(t,pr[0].x,pr[0].y),b=near(t,pr.at(-1).x,pr.at(-1).y),span=mod(b.s-a.s,t.length);if(span>t.length*.02&&span<t.length*.38){entry=a.s;exit=b.s;}const m=pr[Math.floor(pr.length/2)],q=near(t,m.x,m.y);side=(-Math.sin(q.a)*(m.x-q.x)+Math.cos(q.a)*(m.y-q.y))>=0?1:-1;}
let span=mod(exit-entry,t.length);const candidate=side=>{const route=[];let score=0;for(let i=0;i<=100;i++){const u=i/100,offset=side*t.width*1.12*(u<.25?(u/.25)**3*(10-15*(u/.25)+6*(u/.25)**2):u>.75?((1-u)/.25)**3*(10-15*((1-u)/.25)+6*((1-u)/.25)**2):1),p=pose(t,entry+span*u,offset);route.push(p);if(u>.25&&u<.75){let nearest=Infinity;for(let j=0;j<t.points.length;j+=4)nearest=Math.min(nearest,dist(p,t.points[j]));score+=Math.max(0,t.width*.71+2-nearest)**2;const bend=angle(at(t,entry+span*u+3).a-at(t,entry+span*u-3).a)/6;if(bend*offset>.70)score+=100*(bend*offset-.70);}const localBend=angle(at(t,entry+span*u+3).a-at(t,entry+span*u-3).a)/6;if(localBend*offset>.65)score+=300*(localBend*offset-.65);}return{route,score};};const bendAt=s=>Math.abs(angle(at(t,s+3).a-at(t,s-3).a)/6);if(bendAt(entry)>.012||bendAt(exit)>.012){const initial=entry;let best=Infinity,bestStart=entry;span=clamp(span,t.carLength*12,t.length*.15);for(let k=0;k<150;k++){const start=k*t.length/150;let bend=0;for(let j=0;j<=20;j++)bend=Math.max(bend,bendAt(start+span*j/20));const distance=Math.min(mod(start-initial,t.length),mod(initial-start,t.length))/t.length,score=bend*2000+distance*2;if(score<best){best=score;bestStart=start;}}entry=bestStart;exit=mod(entry+span,t.length);}
const original=candidate(side),opposite=candidate(-side);const flip=opposite.score+1<original.score;if(flip)side=-side;const route=flip?opposite.route:original.route;
t.pit={...resample(route,false,2),entry,exit,span,side};t.bridge=findBridge(t);
t.halfWidths=Array(t.points.length).fill(t.width/2);
const all=[...t.points,...t.pit.points];t.bounds={minX:Math.min(...all.map(p=>p.x))-65,minY:Math.min(...all.map(p=>p.y))-65,maxX:Math.max(...all.map(p=>p.x))+65,maxY:Math.max(...all.map(p=>p.y))+65};return t;}
const TYRES={soft:{name:'Tendres',letter:'T',color:'#ed5464',grip:1.04,top:1.005,wear:.27},medium:{name:'Médiums',letter:'M',color:'#f6d45b',grip:1,top:1,wear:.19},hard:{name:'Durs',letter:'D',color:'#e6edf0',grip:.97,top:.985,wear:.13},intermediate:{name:'Intermédiaires',letter:'I',color:'#58d194',grip:.88,top:.95,wear:.24},wet:{name:'Pluie',letter:'P',color:'#58a9f5',grip:.74,top:.90,wear:.22}};
function tyrePerformance(compound,wear,wetness){const t=TYRES[compound]||TYRES.medium,w=clamp(wetness||0,0,1);let grip=t.grip,rate=t.wear;
 if(compound==='intermediate'){grip=.88+.20*Math.exp(-(((w-.4)/.28)**2))-.25*Math.max(0,w-.60)/.4;rate*=w<.12?2.5:w>.75?1.15:.85;}
 else if(compound==='wet'){grip=.74+.28*Math.min(1,w/.65);rate*=w<.25?3.5:.8;}
 else{grip*=1-.78*Math.pow(w,.75);rate*=1-w*.25;}
 const loss=wear*.10+Math.max(0,wear-.55)*.40;return{grip:Math.max(.15,grip*(1-loss)),top:t.top*(1-w*.13)*(1-wear*.035-Math.max(0,wear-.72)*.18),traction:Math.max(.32,grip)*(1-wear*.12),wear:rate};
}
class Weather{
 constructor(mode,seed,duration){this.mode=mode||'variable';this.random=random(seed);this.rain=0;this.wet=0;this.risk=12;this.plan=[];const r=this.random;if(this.mode==='rain'){this.rain=.7;this.wet=.6;this.plan=[{at:0,rain:.7},{at:duration*.5,rain:.95},{at:duration*.85,rain:.45}];}else if(this.mode!=='dry'&&r()>.74){const at=duration*(.18+r()*.22),rain=r()<.35?.24:.65+r()*.3;this.plan=[{at:0,rain:0},{at:Math.max(0,at-18),rain:0},{at:at+12,rain},{at:duration*.78,rain},{at:duration*.95,rain:0}];}this.risk=this.rain?100:12;this.phase=this.rain?'Pluie':'Sec';}
 step(dt,time){let target=0;if(this.plan.length){let a=this.plan[0],b=a;for(let i=1;i<this.plan.length;i++){b=this.plan[i];if(time<b.at)break;a=b;}const u=clamp((time-a.at)/Math.max(1,b.at-a.at),0,1);target=a.rain+(b.rain-a.rain)*u;}this.rain+=(target-this.rain)*(1-Math.exp(-dt*.7));this.wet=clamp(this.wet+(this.rain*.030-(1-this.rain)*.0035)*dt,0,1);const future=this.plan.filter(p=>p.at>time&&p.at<time+40).reduce((max,p)=>Math.max(max,p.rain),target);const risk=this.mode==='dry'?0:Math.max(this.rain*100,8+9*(1+Math.sin(time/31)),future*95);if(this.rain>.06)this.risk=100;else this.risk+=(risk-this.risk)*(1-Math.exp(-dt*.12));this.phase=this.rain>.45?'Pluie':this.rain>.06?'Bruine':this.wet>.15?'Éclaircie · piste humide':'Sec';}
}
// V41 : conduite manuelle, rythme commun, incidents de roue et contacts gradués.
class Race {
 constructor(track, options={}) {
  this.track=track;
  this.options={level:'discovery',laps:3,color:'#ec3448',tyre:'medium',session:'race',...options};
  if(this.options.session==='qualifying')this.options.laps=2;
  this.random=random(seedOf(track.id)+(Number.isInteger(options.seed)?options.seed:freshSeed()));
  this.pitRandom=random(Number.isInteger(options.pitSeed)?options.pitSeed:freshSeed());
  this.contactRandom=random(Number.isInteger(options.contactSeed)?options.contactSeed:freshSeed());
  this.weather=new Weather(options.weather,Number.isInteger(options.weatherSeed)?options.weatherSeed:freshSeed(),track.targetLap*this.options.laps);this.state='ready';this.time=0;this.countdown=3;this.events=[];this.pitHistory=[];
  this.nextTyre=this.options.tyre;this.input={axis:0,throttle:false,brake:false,boost:false};
  this.contacts=0;this.passes=0;this.rankBefore=8;
  const fallback=['Constant','Verstappen','Norris','Leclerc','Hamilton','Piastri','Russell','Alonso'];
  const drivers=options.drivers?.length>=2?options.drivers:fallback.map((name,i)=>({name,color:['#ec3448','#183353','#ff8b24','#d41426','#d41426','#ff8b24','#1cc8b1','#087858'][i]}));
  const grid=options.grid||[...drivers.keys()].slice(1).concat(0);this.rankBefore=drivers.length;this.grid=grid;
  this.cars=drivers.map((d,id)=>{
   const slot=Math.max(0,grid.indexOf(id)),s=-(1+slot*.75)*track.carLength,lane=(slot%2?1:-1)*track.width*.22;
   return {id,name:d.name,color:d.color||this.options.color,teamId:d.teamId,teamName:d.teamName,driverId:d.driverId,driverNumber:d.driverNumber||id+1,colorB:d.colorB||d.color,helmet:d.helmet||{base:'#f6cc3f',accent:'#ffffff'},onTrack:this.options.session!=='qualifying'||id===0,
    s,speed:0,lane,targetLane:lane,laneV:0,headingError:0,steerInput:0,yawRate:0,reverseHold:0,impactV:0,impactYaw:0,bump:0,highestLine:-1,spin:null,spinImmunity:5,spins:0,throttle:0,rpm:3200,gear:1,wear:0,
    tyre:id?(this.weather.wet>.68?'wet':this.weather.wet>.18?'intermediate':['medium','soft','hard'][id%3]):this.options.tyre,boost:100,phase:'track',pitRequested:false,pit:null,
    pitStops:0,lastPitTime:null,cooldown:0,flash:0,finished:false,finishTime:null,slip:0,lapStart:null,bestLap:null,lapTimes:[],...pose(track,s,lane)};
  });
  this.player=this.cars[0];
  if(this.options.session==='qualifying'){
   // The selected driver runs alone. Rivals' flying laps are modelled separately.
   this.player.s=-track.carLength*1.3;this.player.lane=this.player.targetLane=0;Object.assign(this.player,pose(track,this.player.s,0));
   for(const c of this.cars.slice(1)){
    const pace=this.aiPace(c);
    const condition=tyrePerformance(c.tyre,0,this.weather.wet),reference=track.speedCaps.reduce((sum,cap)=>sum+track.step/Math.min(cap*Math.sqrt(condition.grip)*pace,track.topKph/track.kphPerUnit*condition.top),0);
    c.lapTimes=[reference*(.99+this.random()*.025),reference*(.99+this.random()*.025)];
    c.bestLap=Math.min(...c.lapTimes);c.phase='garage';c.finished=true;c.simulatedQualifying=true;c.finishTime=0;
   }
  }
 }
 start(){this.state='countdown';this.countdown=3;this.notify(this.options.session==='qualifying'?'Deux tours pour signer votre meilleur chrono':'Préparez-vous : les gaz sont manuels',3);}
 notify(text,duration=2){this.message=text;this.messageUntil=this.time+duration;this.events.push({type:'message',text});}
 pause(){if(['racing','countdown'].includes(this.state)){this.beforePause=this.state;this.state='paused';this.input={axis:0,throttle:false,brake:false,boost:false};}else if(this.state==='paused')this.state=this.beforePause;}
 requestPit(car=this.player){
  if(car.finished||car.phase!=='track'||this.options.session==='qualifying')return false;
  car.pitRequested=!car.pitRequested;
  if(car.pitRequested){car.pitEntry=Math.floor(car.s/this.track.length)*this.track.length+this.track.pit.entry;if(car.pitEntry<=car.s+2)car.pitEntry+=this.track.length;}
  if(!car.id)this.notify(car.pitRequested?'Arrêt demandé · entrée des stands guidée au prochain passage':'Arrêt annulé',3);
  return car.pitRequested;
 }
 standings(){
  if(this.options.session==='qualifying')return [...this.cars].sort((a,b)=>(a.bestLap??Infinity)-(b.bestLap??Infinity)||b.s-a.s);
  return [...this.cars].sort((a,b)=>a.finished&&b.finished?a.finishTime-b.finishTime:a.finished?-1:b.finished?1:b.s-a.s);
 }
 rank(){return this.standings().findIndex(c=>!c.id)+1;}
 curveCap(s){const t=this.track;return t.speedCaps[Math.floor(mod(s,t.length)/t.step)%t.points.length];}
 aiPace(c){return this.options.level==='challenge'?.985+(c.id%7)*.003:.95+(c.id%7)*.003;}
 updateAI(c,dt){
  const t=this.track;c.followCap=null;const wet=this.weather.wet,preferred=wet>.68?'wet':wet>.18?'intermediate':'medium';c.strategyTyre=preferred;const mismatch=wet>.28&&!['intermediate','wet'].includes(c.tyre)||wet<.10&&['intermediate','wet'].includes(c.tyre)||wet>.8&&c.tyre==='intermediate';if(mismatch&&!c.pitRequested&&c.phase==='track'&&c.s<t.length*(this.options.laps-.2))this.requestPit(c);
  const shouldStop=c.wear>.60||(!c.pitStops&&this.options.laps>=3&&c.s>t.length*(1.1+c.id*.09));
  if(shouldStop&&!c.pitRequested&&c.phase==='track'&&c.s<t.length*(this.options.laps-.42))this.requestPit(c);
  const available=roadHalfWidth(t,c.s);let target=Math.sin(c.s/t.length*TAU+c.id)*available*.34;
  const ahead=this.cars.filter(o=>o!==c&&o.phase==='track'&&!o.finished).map(o=>({o,g:mod(o.s-c.s,t.length)})).filter(q=>q.g<t.carLength*4).sort((a,b)=>a.g-b.g)[0];
  if(ahead){
   const choices=c.id%2?[-available*.58,0,available*.58]:[available*.58,0,-available*.58];
   const score=lane=>this.cars.reduce((sum,o)=>sum+(o!==c&&Math.abs(o.s-c.s)<t.carLength*3?Math.max(0,t.carWidth*1.6-Math.abs(o.lane-lane)):0),0);
   choices.sort((a,b)=>score(a)-score(b));target=choices[0];
   if(ahead.g<t.carLength*1.25&&Math.abs(ahead.o.lane-c.lane)<t.carWidth)c.followCap=Math.max(2/this.track.kphPerUnit,ahead.o.speed-8/this.track.kphPerUnit);
  }
  c.targetLane+=(target-c.targetLane)*Math.min(1,dt*2.8);
 }
 step(raw){
  if(!['racing','countdown'].includes(this.state))return;
  const dt=clamp(raw,0,.05);
  if(this.state==='countdown'){this.countdown-=dt;if(this.countdown<=0){this.state='racing';this.events.push({type:'go'});this.notify('À vous de piloter · accélérez !',2);}return;}
  this.time+=dt;this.weather.step(dt,this.time);const t=this.track;
  for(const c of this.cars){
   c.cooldown=Math.max(0,c.cooldown-dt);c.spinImmunity=Math.max(0,c.spinImmunity-dt);c.flash=Math.max(0,c.flash-dt);if(c.finished)continue;
   if(c.onTrack===false)continue;
   if(c.id&&!c.spin)this.updateAI(c,dt);
   if(c.phase!=='track'){this.pitStep(c,dt);continue;}
   if(c.spin){this.spinStep(c,dt);continue;}
   const before=c.s,tyre=TYRES[c.tyre],performance=tyrePerformance(c.tyre,c.wear,this.weather.wet),grip=performance.grip,kph=t.kphPerUnit,meters=t.metersPerUnit;
   const brake=!c.id&&!!this.input.brake,gas=c.id?1:brake?0:clamp(Number(this.input.throttle)||0,0,1);
   const boosting=!c.id&&gas>0&&this.input.boost&&!brake&&c.boost>1;c.throttle=gas;
   const half=roadHalfWidth(t,c.s),off=Math.max(0,Math.abs(c.lane)-half*.80)/(t.width*.18);
   if(c.id){
    const pace=this.aiPace(c);
    let cap=Math.min(this.curveCap(c.s)*Math.sqrt(grip)*pace,t.topKph/kph*performance.top);if(c.followCap!==null)cap=Math.min(cap,c.followCap);c.targetSpeed=cap;
    c.speed=clamp(c.speed+clamp(cap-c.speed,-52/meters*dt,27/meters*performance.traction*dt),0,380/kph);
    c.impactV=(c.impactV||0)*Math.exp(-dt*3.5);c.impactYaw=(c.impactYaw||0)*Math.exp(-dt*2.4);c.bump=(c.bump||0)*Math.exp(-dt*9);c.laneV+=(c.targetLane-c.lane)*28*dt-c.laneV*8.8*dt;c.laneV+=c.impactV*dt*4;c.lane=clamp(c.lane+c.laneV*dt,-Math.max(t.carWidth*.55,half-t.carWidth*.55),Math.max(t.carWidth*.55,half-t.carWidth*.55));
    c.s+=c.speed*dt;c.headingError=Math.atan2(c.laneV,Math.max(20,c.speed));c.steer=Math.atan(angle(at(t,c.s+6).a-at(t,c.s-6).a)/12*t.carLength*.54)/.24;
   }else{
    // Stable directional control: short digital presses do not accumulate yaw.
    const club=this.options.level==='discovery',terrain=clamp(off,0,1.6);
    c.reverseHold=brake&&c.speed<=.1?c.reverseHold+dt:0;
    if(brake){
     if(c.speed>0)c.speed=Math.max(0,c.speed-52/meters*dt);
     else if(c.reverseHold>.38)c.speed=Math.max(-20/kph,c.speed-8/meters*dt);
    }else if(gas){
     if(c.speed<0)c.speed=Math.min(0,c.speed+20/meters*dt);
     else{const top=(boosting?380:350)/kph*performance.top,v=Math.abs(c.speed)*meters,drive=(boosting?38:27)/meters*gas*performance.traction*(1-.72*(c.speed/top)**4),drag=(.6+.00016*v*v)/meters+terrain*(.3+.004*v*v)/meters;c.speed=clamp(c.speed+(drive-drag)*dt,0,top);}
    }else c.speed=Math.sign(c.speed)*Math.max(0,Math.abs(c.speed)-(1+.0002*(c.speed*meters)**2)/meters*dt);
    const axis=clamp(this.input.axis||0,-1,1),curvature=angle(at(t,c.s+6).a-at(t,c.s-6).a)/12;
    c.steerInput+=(axis-c.steerInput)*(1-Math.exp(-dt*(axis?10:18)));
    const moving=clamp(Math.abs(c.speed)*kph/15,0,1),direction=c.speed<0?-1:1;
    const vKph=Math.abs(c.speed)*kph,maxHeading=.28+1.12/(1+(vKph/95)**2),safe=this.curveCap(c.s)*Math.sqrt(grip),excess=Math.max(0,c.speed/Math.max(1,safe)-1);
    const targetHeading=direction*c.steerInput*maxHeading*Math.max(.60,Math.sqrt(grip))-curvature*Math.max(0,c.speed)*.45-Math.sign(curvature)*Math.min(.35,excess*.22);
    c.impactYaw=(c.impactYaw||0)*Math.exp(-dt*2.4);c.impactV=(c.impactV||0)*Math.exp(-dt*3.5);c.bump=(c.bump||0)*Math.exp(-dt*9);
    const response=1-Math.exp(-dt*(club?7:8)*moving);
    c.headingError=angle(c.headingError+angle(targetHeading+c.impactYaw-c.headingError)*response);
    c.yawRate=0;c.steerAngle=c.steerInput*.42;c.steer=c.steerAngle/.24;
    c.laneV=Math.sin(c.headingError)*c.speed+c.impactV;
    c.lane+=c.laneV*dt;c.s+=c.speed*Math.cos(c.headingError)*dt;
    const limit=half+1.2;
    if(Math.abs(c.lane)>limit){
     c.lane=Math.sign(c.lane)*limit;
     // A barrier blocks forward progress; holding gas alone cannot drive a lap along it.
     if(Math.sign(c.lane)*c.laneV>0){c.speed*=Math.exp(-dt*5);c.impactV=-Math.sign(c.lane)*.7;}
     if(!c.cooldown){this.contacts++;c.cooldown=1.2;c.flash=.15;this.events.push({type:'contact'});this.notify('Large débordement · tournez vers la piste ; FREIN maintenu pour reculer',2);}
    }
    c.targetLane=c.lane;c.steer=c.steerAngle/.24;
   }
   if(off>.12&&c.speed>35/kph)c.speed-=Math.max(0,c.speed-35/kph)*(1-Math.exp(-dt*3));
   // Gentle proximity braking; lateral overlap is checked in world-sized car units.
   if(c.speed>12/kph){const neighbour=this.cars.filter(o=>o!==c&&!o.finished&&o.onTrack!==false&&o.phase==='track').map(o=>({o,ds:mod(o.s-c.s+t.length/2,t.length)-t.length/2,dl:Math.abs(o.lane-c.lane)})).find(q=>q.ds>-t.carLength*.45&&q.ds<t.carLength*1.8&&q.dl<t.carWidth*1.4);
    if(neighbour){const q=neighbour,front=q.ds>t.carLength*.35,cap=front?Math.max(2/kph,q.o.speed-5/kph):Math.max(8/kph,c.speed-4/kph);c.speed-=Math.max(0,c.speed-cap)*(1-Math.exp(-dt*(front?5:1.8)));}
   }
   c.boost=clamp(c.boost+(boosting?-24:brake?15:4)*dt,0,100);c.boosting=boosting;c.braking=brake||!!c.id&&c.speed>(c.targetSpeed??this.curveCap(c.s))+.1;
   c.wear=clamp(c.wear+Math.max(0,c.s-before)/t.length*performance.wear*(boosting?1.25:1),0,1);c.slip=off;
   Object.assign(c,pose(t,c.s,c.lane));c.a+=c.headingError;this.driveTrain(c);
   if(c.pitRequested&&c.s>=c.pitEntry){
    c.phase='pit';c.pit={base:c.pitEntry,distance:0,entryLane:c.lane,service:0,done:false,stopAt:t.pit.length*(.35+c.id*.012),duration:null};
    c.pitRequested=false;c.speed=70/kph;c.boosting=false;
    if(!c.id)this.notify('Limiteur activé · votre équipe vous attend',3);
   }
   this.crossLine(c,before,dt);
  }
  this.collisions();
  const rank=this.rank();if(rank<this.rankBefore&&this.options.session!=='qualifying'){this.passes+=this.rankBefore-rank;this.events.push({type:'pass'});}this.rankBefore=rank;
  if(this.player.wear>.67&&!this.player.pitRequested&&!this.warned){this.notify('Pneus usés · pensez aux stands',4);this.warned=true;}
  if(this.cars.every(c=>c.finished)){
   this.state='finished';this.position=this.rank();this.events.push({type:'finish',position:this.position});
  }
 }
 crossLine(c,before,dt){
  const t=this.track;
  const oldLap=Math.floor(before/t.length),newLap=Math.floor(c.s/t.length);
  if(newLap>oldLap&&newLap>(c.highestLine??-1)){
   c.highestLine=newLap;
   const crossing=this.time-Math.max(0,c.s-newLap*t.length)/Math.max(1,c.speed);
   if(c.lapStart!==null){const time=crossing-c.lapStart;c.lapTimes.push(time);c.bestLap=Math.min(c.bestLap??Infinity,time);}
   c.lapStart=crossing;
   if(!c.id&&newLap>0&&newLap<this.options.laps){this.events.push({type:'lap'});this.notify(this.options.session==='qualifying'?'Tour : '+c.lapTimes.at(-1).toFixed(3)+' s':newLap===this.options.laps-1?'Dernier tour !':'Tour '+(newLap+1),2);}
  }
  if(c.s>=t.length*this.options.laps)this.finishCar(c,dt);
 }
 driveTrain(c){const old=c.gear;c.gear=c.speed<-.1?'R':clamp(Math.floor(c.speed*this.track.kphPerUnit/45)+1,1,8);const ratios=[3.45,2.6,2.1,1.76,1.51,1.34,1.18,1.06];c.rpm=clamp(2800+Math.abs(c.speed)*this.track.kphPerUnit*(c.gear==='R'?3.45:ratios[c.gear-1])*29,2800,12000);if(c.gear!==old&&!c.id)this.events.push({type:'shift',up:c.gear>old});}
 beginService(c){
  const p=c.pit,rnd=this.pitRandom,base=1.9+Math.pow(rnd(),1.7)*1.45;
  const trouble=rnd()<.34?Math.floor(rnd()*4):-1,second=trouble>=0&&rnd()<.06?(trouble+1+Math.floor(rnd()*3))%4:-1;
  p.wheels=Array.from({length:4},(_,i)=>{
   const normal=Math.max(1.9,base-.16+rnd()*.23),phase=(i===trouble||i===second)?(rnd()<.5?'loosen':'tighten'):null;
   const delay=phase?1+Math.pow(rnd(),.7)*Math.max(0,10-normal-1):0;
   let start=0;const timeline=[['loosen',.19],['remove',.23],['fit',.25],['tighten',.25],['check',.08]].map(([id,fraction])=>{
    const normalDuration=normal*fraction,duration=normalDuration+(id===phase?delay:0),part={id,start,end:start+duration,normalDuration};start+=duration;return part;
   });
   const blockedPhase=timeline.find(p=>p.id===phase);
   return{duration:Math.min(10,start),timeline,problem:phase?{phase,delay,start:blockedPhase.start+blockedPhase.normalDuration*.35}:null};
  });
  p.duration=Math.max(...p.wheels.map(w=>w.duration));p.oldTyre=c.tyre;p.newTyre=c.id?(c.strategyTyre||'medium'):this.nextTyre;
  p.startedAt=this.time;p.service=0;c.phase='service';c.speed=0;c.throttle=0;c.braking=true;
 }
 spinCar(c,direction){
  if(c.spin||c.spinImmunity>0)return false;
  c.spin={elapsed:0,duration:1.1,direction,angle:0,omega:direction*(1.8+this.contactRandom()*.9),vx:c.speed*.66,vy:direction*Math.min(13,c.speed*.2)};
  c.spins++;c.boosting=false;c.throttle=0;c.cooldown=2;c.spinImmunity=12;
  this.events.push({type:'spin',id:c.id});if(!c.id)this.notify('Perte d’adhérence · freinez puis reprenez la direction',2);return true;
 }
 spinStep(c,dt){
  const spin=c.spin,before=c.s,t=this.track;spin.elapsed+=dt;
  spin.angle+=spin.omega*dt;spin.omega*=Math.exp(-dt*2.1);
  spin.vx*=Math.exp(-dt*(this.input.brake&&!c.id?4:2.6));spin.vy*=Math.exp(-dt*3);
  c.s+=spin.vx*dt;c.lane=clamp(c.lane+spin.vy*dt,-t.width*.76,t.width*.76);
  c.speed=spin.vx;Object.assign(c,pose(t,c.s,c.lane));c.a+=c.headingError;
  c.throttle=0;c.braking=true;c.boosting=false;c.slip=.8;c.steer=-spin.direction*.3;this.driveTrain(c);this.crossLine(c,before,dt);
  if(spin.elapsed>=spin.duration){c.impactYaw=clamp(spin.angle,-1.3,1.3);c.headingError=angle(c.headingError+spin.angle);c.spin=null;c.cooldown=1.2;if(!c.id)this.notify('Reprenez les gaz et corrigez la direction · FREIN maintenu pour reculer',2);}
 }
 pitStep(c,dt){
  const t=this.track,p=c.pit,before=c.s;
  if(c.phase==='service'){
   const consumed=Math.min(dt,p.duration-p.service);p.service=Math.min(p.duration,p.service+consumed);
   c.speed=0;
   if(p.service>=p.duration-1e-9){
    p.done=true;c.tyre=p.newTyre;c.wear=0;c.pitStops++;c.lastPitTime=p.duration;c.lastPitAt=p.startedAt+p.duration;
    this.pitHistory.push({name:c.name,id:c.id,time:p.duration,compound:p.newTyre,at:c.lastPitAt,problems:p.wheels.map((w,i)=>w.problem?{wheel:i,phase:w.problem.phase,delay:w.problem.delay}:null).filter(Boolean)});
    c.phase='pit';c.speed=1; // Stopwatch ends on the same simulation instant as departure.
    const remaining=Math.max(0,dt-consumed);p.distance+=c.speed*remaining;
    if(!c.id){this.warned=false;this.events.push({type:'tyres'});this.notify('Arrêt : '+p.duration.toFixed(3)+' s · feu vert !',4);}
   }
  }else{
   c.speed=Math.min(80/t.kphPerUnit,c.speed+15/t.metersPerUnit*dt);p.distance+=c.speed*dt;
   if(!p.done&&p.distance>=p.stopAt){p.distance=p.stopAt;this.beginService(c);}
  }
  const q=at(t.pit,Math.min(t.pit.length,p.distance)),blend=Math.max(0,1-p.distance/t.pit.length*10);
  q.x-=Math.sin(q.a)*(p.entryLane||0)*blend;q.y+=Math.cos(q.a)*(p.entryLane||0)*blend;Object.assign(c,q);
  c.s=p.base+t.pit.span*(p.distance/t.pit.length);c.steer=0;c.gear=1;c.rpm=c.speed?4500:2800;c.braking=c.phase==='service';
  this.crossLine(c,before,dt);
  if(p.distance>=t.pit.length){c.s=p.base+t.pit.span;c.phase='track';c.pit=null;c.lane=0;c.targetLane=0;c.laneV=0;c.headingError=c.yawRate=c.steerInput=0;c.cooldown=1;Object.assign(c,pose(t,c.s,0));}
 }
 finishCar(c,dt){if(c.finished)return;c.finished=true;c.finishTime=this.time-Math.min(dt,Math.max(0,c.s-this.track.length*this.options.laps)/Math.max(1,c.speed));c.speed=0;c.boosting=false;}
 collisions(){
  const t=this.track;
  for(let i=0;i<this.cars.length;i++)for(let j=i+1;j<this.cars.length;j++){
   const a=this.cars[i],b=this.cars[j];if(a.onTrack===false||b.onTrack===false||a.phase!=='track'||b.phase!=='track'||a.finished||b.finished||a.spin||b.spin)continue;
   const ds=mod(b.s-a.s+t.length/2,t.length)-t.length/2,dl=b.lane-a.lane;
   if(Math.abs(ds)>t.carLength*.86||Math.abs(dl)>t.carWidth*.92||a.cooldown||b.cooldown)continue;
   const impact=Math.abs(a.speed-b.speed)+Math.abs(a.laneV-b.laneV)*.55,maxSpeed=Math.max(a.speed,b.speed);
   const rear=ds>0?a:b,front=ds>0?b:a;rear.speed=Math.min(rear.speed,front.speed*.91);front.speed*=.98;
   const side=dl>=0?1:-1,push=Math.max(0,t.carWidth-Math.abs(dl))*.51;
   a.lane=clamp(a.lane-side*push*.22,-(t.width/2+1.2),t.width/2+1.2);b.lane=clamp(b.lane+side*push*.22,-(t.width/2+1.2),t.width/2+1.2);
   for(const [car,sign] of [[a,-side],[b,side]]){car.impactV=sign*Math.min(8,1+impact*.10);car.impactYaw=sign*Math.min(.30,impact*.004);car.bump=Math.min(1,impact/40);}
   a.targetLane=a.lane;b.targetLane=b.lane;a.cooldown=b.cooldown=.9;a.flash=b.flash=.12;
   if(impact*t.kphPerUnit>70&&maxSpeed*t.kphPerUnit>90){
    const probability=clamp((impact*t.kphPerUnit-65)/240,.08,this.options.level==='challenge'?.48:.35);
    if(this.contactRandom()<probability){const victim=front.spinImmunity<=0?front:rear;this.spinCar(victim,side*(victim===a?-1:1));}
   }
   for(const car of [a,b]){Object.assign(car,pose(t,car.s,car.lane));car.a+=car.headingError;}
   if(!a.id||!b.id){this.contacts++;this.events.push({type:'contact'});}
  }
 }
 drainEvents(){return this.events.splice(0);}
}
const POINTS=[25,18,15,12,10,8,6,4,2,1];
class Championship{
 constructor(circuits,drivers,settings={}){if(!circuits.length||new Set(circuits).size!==circuits.length)throw Error('Choisissez au moins un circuit distinct');this.circuits=[...circuits];this.drivers=drivers.map(d=>({...d}));this.settings={...settings};this.rounds=[];}
 get complete(){return this.rounds.length===this.circuits.length;}
 award(race){if(this.complete||race.state!=='finished'||race.options.session==='qualifying'||race.cars.some(c=>!c.finished))throw Error('Course incomplète');if(race.track.id!==this.circuits[this.rounds.length])throw Error('Manche incorrecte');const result=race.standings().map((c,i)=>({driverId:c.driverId,name:c.name,teamId:c.teamId,color:c.color,colorB:c.colorB,position:i+1,time:c.finishTime,points:POINTS[i]||0}));if(result.length!==this.drivers.length||new Set(result.map(c=>c.driverId)).size!==this.drivers.length)throw Error('Plateau incorrect');this.rounds.push({circuit:race.track.id,result});return result;}
 standings(){const rows=this.drivers.map(d=>({...d,points:0,places:Array(this.drivers.length).fill(0)}));for(const round of this.rounds)for(const r of round.result){const d=rows.find(d=>d.driverId===r.driverId);if(d){d.points+=r.points;d.places[r.position-1]++;}}return rows.sort((a,b)=>{if(a.points!==b.points)return b.points-a.points;for(let i=0;i<a.places.length;i++)if(a.places[i]!==b.places[i])return b.places[i]-a.places[i];return a.name.localeCompare(b.name);});}
 static restore(value){if(!value||!Array.isArray(value.circuits)||!Array.isArray(value.drivers)||!Array.isArray(value.rounds))throw Error('Sauvegarde invalide');const c=new Championship(value.circuits,value.drivers,value.settings);if(value.rounds.length>c.circuits.length)throw Error('Sauvegarde invalide');for(const [i,round] of value.rounds.entries()){if(round.circuit!==c.circuits[i]||!Array.isArray(round.result)||round.result.length!==c.drivers.length||new Set(round.result.map(r=>r.driverId)).size!==c.drivers.length||round.result.some((r,j)=>r.position!==j+1||r.points!==(POINTS[j]||0)||!c.drivers.some(d=>d.driverId===r.driverId)||!Number.isFinite(r.time)))throw Error('Résultats sauvegardés invalides');}c.rounds=value.rounds;return c;}
}
const API={Championship,POINTS,Weather,tyrePerformance,parseLap,roadHalfWidth,Race,makeTrack,freshSeed,wheelState,at,pose,near,random,seedOf,TYRES,clamp,mod,angle};if(typeof module==='object'&&module.exports)module.exports=API;else scope.F1ArcadeCore=API;
})(typeof window==='object'?window:globalThis);
