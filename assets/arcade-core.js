/* F1 Constant V40.1. Moteur arcade original, indépendant du DOM et du rendu. */
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
function makeTrack(info,raw,pitRaw=[]){const xs=raw.map(p=>+(p.x??p[0])),ys=raw.map(p=>+(p.y??p[1])),minX=Math.min(...xs),minY=Math.min(...ys),size=Math.max(Math.max(...xs)-minX,Math.max(...ys)-minY),scale=1000/size;const convert=p=>({x:(+(p.x??p[0])-minX)*scale,y:(+(p.y??p[1])-minY)*scale});const t={...resample(raw.map(convert),true),...info,sourceScale:scale,sourceOrigin:{x:minX,y:minY}};
// Filter tiny SVG kinks before deriving tangents and gameplay curvature.
let smooth=t.points;for(let pass=0;pass<6;pass++)smooth=smooth.map((p,i)=>{let x=0,y=0,total=0;for(let k=-3;k<=3;k++){const weight=4-Math.abs(k),q=smooth[mod(i+k,smooth.length)];x+=q.x*weight;y+=q.y*weight;total+=weight;}return{x:x/total,y:y/total};});Object.assign(t,resample(smooth,true));
// Largeur constante dans le monde du jeu ; le centre du tracé vient des cartes.
let close=[];for(let i=0;i<t.points.length;i+=14){let nearest=Infinity;for(let j=0;j<t.points.length;j+=8){const separation=Math.min(mod(i-j,t.points.length),mod(j-i,t.points.length))*t.step;if(separation<100)continue;nearest=Math.min(nearest,dist(t.points[i],t.points[j]));}close.push(nearest);}close.sort((a,b)=>a-b);t.width=clamp(close[Math.floor(close.length*.1)]*.55,24,38);t.carLength=t.width*.306;t.carWidth=t.carLength*.43;
t.bends=t.points.map((p,i)=>Math.abs(angle(at(t,i*t.step+6).a-at(t,i*t.step-6).a))/12);
t.speedCaps=t.points.map((p,i)=>{let bend=0;for(let k=0;k<6;k++)bend=Math.max(bend,t.bends[(i+k*3)%t.points.length]);let lo=0,hi=84;for(let n=0;n<12;n++){const v=(lo+hi)/2,steeringCurvature=Math.tan(.82/(1+v/55))/(t.carLength*.54);if(bend*v*v<=100&&bend<=steeringCurvature)lo=v;else hi=v;}return clamp(lo,8,84);});
let entry=t.length*.92,exit=t.length*.045,side=1;if(pitRaw.length>2){const pr=pitRaw.map(convert),a=near(t,pr[0].x,pr[0].y),b=near(t,pr.at(-1).x,pr.at(-1).y),span=mod(b.s-a.s,t.length);if(span>t.length*.02&&span<t.length*.38){entry=a.s;exit=b.s;}const m=pr[Math.floor(pr.length/2)],q=near(t,m.x,m.y);side=(-Math.sin(q.a)*(m.x-q.x)+Math.cos(q.a)*(m.y-q.y))>=0?1:-1;}
const span=mod(exit-entry,t.length),route=[];for(let i=0;i<=100;i++){const u=i/100,p=pose(t,entry+span*u,side*t.width*1.12*(u<.25?(u/.25)**3*(10-15*(u/.25)+6*(u/.25)**2):u>.75?((1-u)/.25)**3*(10-15*((1-u)/.25)+6*((1-u)/.25)**2):1));route.push(p);}t.pit={...resample(route,false,2),entry,exit,span,side};t.bridge=findBridge(t);
const count=t.points.length,widths=Array(count).fill(t.width/2);for(let i=0;i<count;i++){const p=t.points[i];let nearest=Infinity;for(let j=0;j<count;j+=2){const separation=Math.min(mod(i-j,count),mod(j-i,count))*t.step;if(separation<t.width*.8)continue;if(separation<t.width*2.2&&Math.cos(angle(at(t,i*t.step).a-at(t,j*t.step).a))>-.2)continue;if(t.bridge){const a=i*t.step,b=j*t.step,near=(s,q)=>Math.abs(mod(s-q+t.length/2,t.length)-t.length/2)<t.width*2;if(near(a,t.bridge.lower)&&near(b,t.bridge.upper)||near(a,t.bridge.upper)&&near(b,t.bridge.lower))continue;}nearest=Math.min(nearest,dist(p,t.points[j]));}const radius=1/Math.max(.00001,t.bends[i]);widths[i]=Math.max(t.carWidth*1.27,Math.min(t.width/2,radius*.74,nearest*.42-.5));}
// A minimum filter starts narrowing before the corner; relaxation only reduces widths.
for(let pass=0;pass<2;pass++)for(let i=0;i<count;i++)widths[i]=Math.min(widths[i],widths[mod(i-1,count)]+t.step*.085,widths[(i+1)%count]+t.step*.085);t.halfWidths=widths;

const all=[...t.points,...t.pit.points];t.bounds={minX:Math.min(...all.map(p=>p.x))-65,minY:Math.min(...all.map(p=>p.y))-65,maxX:Math.max(...all.map(p=>p.x))+65,maxY:Math.max(...all.map(p=>p.y))+65};return t;}
const TYRES={soft:{name:'Tendres',letter:'T',color:'#ed5464',grip:1.055,wear:.48},medium:{name:'Médiums',letter:'M',color:'#f6d45b',grip:1,wear:.365},hard:{name:'Durs',letter:'D',color:'#e6edf0',grip:.97,wear:.275}};
// V40.1 : conduite manuelle, rythme commun, incidents de roue et contacts gradués.
class Race {
 constructor(track, options={}) {
  this.track=track;
  this.options={level:'discovery',laps:3,color:'#ec3448',tyre:'medium',session:'race',...options};
  if(this.options.session==='qualifying')this.options.laps=2;
  this.random=random(seedOf(track.id)+(Number.isInteger(options.seed)?options.seed:freshSeed()));
  this.pitRandom=random(Number.isInteger(options.pitSeed)?options.pitSeed:freshSeed());
  this.contactRandom=random(Number.isInteger(options.contactSeed)?options.contactSeed:freshSeed());
  this.state='ready';this.time=0;this.countdown=3;this.events=[];this.pitHistory=[];
  this.nextTyre=this.options.tyre;this.input={axis:0,throttle:false,brake:false,boost:false};
  this.contacts=0;this.passes=0;this.rankBefore=8;
  const fallback=['Constant','Verstappen','Norris','Leclerc','Hamilton','Piastri','Russell','Alonso'];
  const drivers=options.drivers?.length>=2?options.drivers:fallback.map((name,i)=>({name,color:['#ec3448','#183353','#ff8b24','#d41426','#d41426','#ff8b24','#1cc8b1','#087858'][i]}));
  const grid=options.grid||[...drivers.keys()].slice(1).concat(0);this.rankBefore=drivers.length;this.grid=grid;
  this.cars=drivers.map((d,id)=>{
   const slot=Math.max(0,grid.indexOf(id)),s=-(1+slot*.75)*track.carLength,lane=(slot%2?1:-1)*track.width*.22;
   return {id,name:d.name,color:d.color||this.options.color,teamId:d.teamId,teamName:d.teamName,driverId:d.driverId,driverNumber:d.driverNumber||id+1,colorB:d.colorB||d.color,helmet:d.helmet||{base:'#f6cc3f',accent:'#ffffff'},onTrack:this.options.session!=='qualifying'||id===0,
    s,speed:0,lane,targetLane:lane,laneV:0,headingError:0,steerInput:0,yawRate:0,reverseHold:0,impactV:0,impactYaw:0,bump:0,highestLine:-1,spin:null,spinImmunity:5,spins:0,throttle:0,rpm:3200,gear:1,wear:0,
    tyre:id?['medium','soft','hard'][id%3]:this.options.tyre,boost:100,phase:'track',pitRequested:false,pit:null,
    pitStops:0,lastPitTime:null,cooldown:0,flash:0,finished:false,finishTime:null,slip:0,lapStart:null,bestLap:null,lapTimes:[],...pose(track,s,lane)};
  });
  this.player=this.cars[0];
  if(this.options.session==='qualifying'){
   // The selected driver runs alone. Rivals' flying laps are modelled separately.
   this.player.s=-track.carLength*1.3;this.player.lane=this.player.targetLane=0;Object.assign(this.player,pose(track,this.player.s,0));
   for(const c of this.cars.slice(1)){
    const pace=this.aiPace(c);
    const reference=track.speedCaps.reduce((sum,cap)=>sum+track.step/(cap*pace),0);
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
  const t=this.track;c.followCap=null;
  const shouldStop=c.wear>.60||(!c.pitStops&&this.options.laps>=3&&c.s>t.length*(1.1+c.id*.09));
  if(shouldStop&&!c.pitRequested&&c.phase==='track'&&c.s<t.length*(this.options.laps-.42))this.requestPit(c);
  const available=roadHalfWidth(t,c.s);let target=Math.sin(c.s/t.length*TAU+c.id)*available*.34;
  const ahead=this.cars.filter(o=>o!==c&&o.phase==='track'&&!o.finished).map(o=>({o,g:mod(o.s-c.s,t.length)})).filter(q=>q.g<t.carLength*4).sort((a,b)=>a.g-b.g)[0];
  if(ahead){
   const choices=c.id%2?[-available*.58,0,available*.58]:[available*.58,0,-available*.58];
   const score=lane=>this.cars.reduce((sum,o)=>sum+(o!==c&&Math.abs(o.s-c.s)<t.carLength*3?Math.max(0,t.carWidth*1.6-Math.abs(o.lane-lane)):0),0);
   choices.sort((a,b)=>score(a)-score(b));target=choices[0];
   if(ahead.g<t.carLength*1.25&&Math.abs(ahead.o.lane-c.lane)<t.carWidth)c.followCap=Math.max(14,ahead.o.speed-8);
  }
  c.targetLane+=(target-c.targetLane)*Math.min(1,dt*2.8);
 }
 step(raw){
  if(!['racing','countdown'].includes(this.state))return;
  const dt=clamp(raw,0,.05);
  if(this.state==='countdown'){this.countdown-=dt;if(this.countdown<=0){this.state='racing';this.events.push({type:'go'});this.notify('À vous de piloter · accélérez !',2);}return;}
  this.time+=dt;const t=this.track;
  for(const c of this.cars){
   c.cooldown=Math.max(0,c.cooldown-dt);c.spinImmunity=Math.max(0,c.spinImmunity-dt);c.flash=Math.max(0,c.flash-dt);if(c.finished)continue;
   if(c.onTrack===false)continue;
   if(c.id&&!c.spin)this.updateAI(c,dt);
   if(c.phase!=='track'){this.pitStep(c,dt);continue;}
   if(c.spin){this.spinStep(c,dt);continue;}
   const before=c.s,tyre=TYRES[c.tyre],grip=tyre.grip*(1-Math.max(0,c.wear-.45)*.45);
   const brake=!c.id&&!!this.input.brake,gas=c.id?1:brake?0:clamp(Number(this.input.throttle)||0,0,1);
   const boosting=!c.id&&gas>0&&this.input.boost&&!brake&&c.boost>1;c.throttle=gas;
   const half=roadHalfWidth(t,c.s),off=Math.max(0,Math.abs(c.lane)-half*.80)/(t.width*.18);
   if(c.id){
    const pace=this.aiPace(c);
    let cap=this.curveCap(c.s)*grip*pace;if(c.followCap!==null)cap=Math.min(cap,c.followCap);
    c.speed=clamp(c.speed+clamp(cap-c.speed,-125*dt,50*dt),0,94);
    c.impactV=(c.impactV||0)*Math.exp(-dt*3.5);c.impactYaw=(c.impactYaw||0)*Math.exp(-dt*2.4);c.bump=(c.bump||0)*Math.exp(-dt*9);c.laneV+=(c.targetLane-c.lane)*28*dt-c.laneV*8.8*dt;c.laneV+=c.impactV*dt*4;c.lane=clamp(c.lane+c.laneV*dt,-Math.max(t.carWidth*.55,half-t.carWidth*.55),Math.max(t.carWidth*.55,half-t.carWidth*.55));
    c.s+=c.speed*dt;c.headingError=Math.atan2(c.laneV,Math.max(20,c.speed));c.steer=Math.atan(angle(at(t,c.s+6).a-at(t,c.s-6).a)/12*t.carLength*.54)/.24;
   }else{
    // Stable directional control: short digital presses do not accumulate yaw.
    const club=this.options.level==='discovery',terrain=clamp(off,0,1.6);
    c.reverseHold=brake&&c.speed<=.1?c.reverseHold+dt:0;
    if(brake){
     if(c.speed>0)c.speed=Math.max(0,c.speed-110*dt);
     else if(c.reverseHold>.38)c.speed=Math.max(-10,c.speed-14*dt);
    }else if(gas){
     if(c.speed<0)c.speed=Math.min(0,c.speed+70*dt);
     else{const top=club?94:98,traction=(boosting?51:43)*gas*Math.max(.04,1-(c.speed/(boosting?top+8:top))**2)*(1-c.wear*.10);c.speed=clamp(c.speed+(traction-(2+.0016*c.speed*c.speed+terrain*(.6+.006*c.speed*c.speed)))*dt,0,100);}
    }else c.speed=Math.sign(c.speed)*Math.max(0,Math.abs(c.speed)-(2+.002*c.speed*c.speed)*dt);
    const axis=clamp(this.input.axis||0,-1,1),curvature=angle(at(t,c.s+6).a-at(t,c.s-6).a)/12;
    c.steerInput+=(axis-c.steerInput)*(1-Math.exp(-dt*(axis?10:18)));
    const moving=clamp(Math.abs(c.speed)/7,0,1),direction=c.speed<0?-1:1;
    const tight=clamp(Math.abs(curvature)*t.carLength*4,0,1),lowSpeed=clamp(1-Math.abs(c.speed)/65,0,1);
    const targetHeading=direction*c.steerInput*((club?.50:.62)+tight*lowSpeed*.65)-curvature*Math.max(0,c.speed)*(club?.24:.33);
    c.impactYaw=(c.impactYaw||0)*Math.exp(-dt*2.4);c.impactV=(c.impactV||0)*Math.exp(-dt*3.5);c.bump=(c.bump||0)*Math.exp(-dt*9);
    const response=1-Math.exp(-dt*(club?7:8)*moving);
    c.headingError=angle(c.headingError+angle(targetHeading+c.impactYaw-c.headingError)*response);
    c.yawRate=0;c.steerAngle=c.steerInput*.42;c.steer=c.steerAngle/.24;
    c.laneV=Math.sin(c.headingError)*c.speed+c.impactV;
    c.lane+=c.laneV*dt;c.s+=c.speed*Math.cos(c.headingError)*dt;
    const limit=half+t.width*.68;
    if(Math.abs(c.lane)>limit){
     c.lane=Math.sign(c.lane)*limit;
     // A barrier blocks forward progress; holding gas alone cannot drive a lap along it.
     if(Math.sign(c.lane)*c.laneV>0){c.speed*=Math.exp(-dt*8);c.impactV=-Math.sign(c.lane)*2;}
     if(!c.cooldown){this.contacts++;c.cooldown=1.2;c.flash=.15;this.events.push({type:'contact'});this.notify('Large débordement · tournez vers la piste ; FREIN maintenu pour reculer',2);}
    }
    c.targetLane=c.lane;c.steer=c.steerAngle/.24;
   }
   // Gentle proximity braking; lateral overlap is checked in world-sized car units.
   if(c.speed>6){const neighbour=this.cars.filter(o=>o!==c&&!o.finished&&o.onTrack!==false&&o.phase==='track').map(o=>({o,ds:mod(o.s-c.s+t.length/2,t.length)-t.length/2,dl:Math.abs(o.lane-c.lane)})).find(q=>q.ds>-t.carLength*.45&&q.ds<t.carLength*1.8&&q.dl<t.carWidth*1.4);
    if(neighbour){const q=neighbour,front=q.ds>t.carLength*.35,cap=front?Math.max(7,q.o.speed-2):Math.max(12,c.speed-4);c.speed-=Math.max(0,c.speed-cap)*(1-Math.exp(-dt*(front?5:1.8)));}
   }
   c.boost=clamp(c.boost+(boosting?-24:brake?15:4)*dt,0,100);c.boosting=boosting;c.braking=brake||!!c.id&&c.speed>this.curveCap(c.s);
   c.wear=clamp(c.wear+Math.max(0,c.s-before)/t.length*tyre.wear*(boosting?1.2:1),0,1);c.slip=off;
   Object.assign(c,pose(t,c.s,c.lane));c.a+=c.headingError;this.driveTrain(c);
   if(c.pitRequested&&c.s>=c.pitEntry){
    c.phase='pit';c.pit={base:c.pitEntry,distance:0,entryLane:c.lane,service:0,done:false,stopAt:t.pit.length*(.35+c.id*.012),duration:null};
    c.pitRequested=false;c.speed=24;c.boosting=false;
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
 driveTrain(c){const old=c.gear;c.gear=c.speed<-.1?'R':clamp(Math.floor(c.speed/15)+1,1,8);const ratios=[3.45,2.6,2.1,1.76,1.51,1.34,1.18,1.06];c.rpm=clamp(2800+Math.abs(c.speed)*(c.gear==='R'?3.45:ratios[c.gear-1])*59,2800,12000);if(c.gear!==old&&!c.id)this.events.push({type:'shift',up:c.gear>old});}
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
  p.duration=Math.max(...p.wheels.map(w=>w.duration));p.oldTyre=c.tyre;p.newTyre=c.id?c.tyre==='hard'?'medium':'hard':this.nextTyre;
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
   c.speed=Math.min(32,c.speed+60*dt);p.distance+=c.speed*dt;
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
   a.lane=clamp(a.lane-side*push*.22,-t.width*.72,t.width*.72);b.lane=clamp(b.lane+side*push*.22,-t.width*.72,t.width*.72);
   for(const [car,sign] of [[a,-side],[b,side]]){car.impactV=sign*Math.min(8,1+impact*.10);car.impactYaw=sign*Math.min(.30,impact*.004);car.bump=Math.min(1,impact/40);}
   a.targetLane=a.lane;b.targetLane=b.lane;a.cooldown=b.cooldown=.9;a.flash=b.flash=.12;
   if(impact>27&&maxSpeed>35){
    const probability=clamp((impact-25)/90,.08,this.options.level==='challenge'?.48:.35);
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
const API={Championship,POINTS,roadHalfWidth,Race,makeTrack,freshSeed,wheelState,at,pose,near,random,seedOf,TYRES,clamp,mod,angle};if(typeof module==='object'&&module.exports)module.exports=API;else scope.F1ArcadeCore=API;
})(typeof window==='object'?window:globalThis);
