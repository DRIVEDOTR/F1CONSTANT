/* F1 Constant V38. Moteur arcade original, indépendant du DOM et du rendu. */
(function(scope){'use strict';
const TAU=Math.PI*2,clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),mod=(v,n)=>(v%n+n)%n,angle=a=>Math.atan2(Math.sin(a),Math.cos(a)),dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
function seedOf(s){let n=2166136261;for(const c of String(s))n=Math.imul(n^c.charCodeAt(0),16777619);return n>>>0;}
function random(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function resample(raw,closed,spacing=2.5){const clean=[];for(const q of raw){const p={x:+(q.x??q[0]),y:+(q.y??q[1])};if(!Number.isFinite(p.x+p.y))throw Error('Point de circuit invalide');if(!clean.length||dist(p,clean.at(-1))>.001)clean.push(p);}if(clean.length<3)throw Error('Circuit incomplet');if(closed&&dist(clean[0],clean.at(-1))>.001)clean.push({...clean[0]});const cumulative=[0];for(let i=1;i<clean.length;i++)cumulative.push(cumulative[i-1]+dist(clean[i],clean[i-1]));const length=cumulative.at(-1),n=Math.ceil(length/spacing),step=length/n,points=[];let j=1;for(let i=0;i<(closed?n:n+1);i++){const d=i*step;while(j<cumulative.length-1&&cumulative[j]<d)j++;const u=(d-cumulative[j-1])/(cumulative[j]-cumulative[j-1]);points.push({x:clean[j-1].x+(clean[j].x-clean[j-1].x)*u,y:clean[j-1].y+(clean[j].y-clean[j-1].y)*u});}return{points,length,step,closed};}
function at(path,s){const p=path.points,n=p.length,f=(path.closed?mod(s,path.length):clamp(s,0,path.length))/path.step,i=Math.min(Math.floor(f),n-1),u=f-i,a=p[i],b=p[path.closed?(i+1)%n:Math.min(i+1,n-1)];const before=p[path.closed?mod(i-2,n):Math.max(0,i-2)],after=p[path.closed?(i+3)%n:Math.min(n-1,i+3)];return{x:a.x+(b.x-a.x)*u,y:a.y+(b.y-a.y)*u,a:Math.atan2(after.y-before.y,after.x-before.x)};}
function near(path,x,y){let best=Infinity,index=0;for(let i=0;i<path.points.length;i++){const p=path.points[i],d=(p.x-x)**2+(p.y-y)**2;if(d<best){best=d;index=i;}}return{s:index*path.step,d:Math.sqrt(best),...at(path,index*path.step)};}
function pose(track,s,lane=0){const p=at(track,s);return{x:p.x-Math.sin(p.a)*lane,y:p.y+Math.cos(p.a)*lane,a:p.a};}
function findBridge(t){if(t.id!=='suzuka')return null;const p=t.points;for(let i=0;i<p.length-5;i+=4)for(let j=i+35;j<p.length-5;j+=4){if(j-i>p.length-35)continue;const a=p[i],b=p[i+4],c=p[j],d=p[j+4],vx=b.x-a.x,vy=b.y-a.y,wx=d.x-c.x,wy=d.y-c.y,den=vx*wy-vy*wx;if(Math.abs(den)<.0001)continue;const u=((c.x-a.x)*wy-(c.y-a.y)*wx)/den,v=((c.x-a.x)*vy-(c.y-a.y)*vx)/den;if(u>0&&u<1&&v>0&&v<1)return{lower:(i+u*4)*t.step,upper:(j+v*4)*t.step,x:a.x+u*vx,y:a.y+u*vy,half:t.width*1.6};}return null;}
function makeTrack(info,raw,pitRaw=[]){const xs=raw.map(p=>+(p.x??p[0])),ys=raw.map(p=>+(p.y??p[1])),minX=Math.min(...xs),minY=Math.min(...ys),size=Math.max(Math.max(...xs)-minX,Math.max(...ys)-minY),scale=1000/size;const convert=p=>({x:(+(p.x??p[0])-minX)*scale,y:(+(p.y??p[1])-minY)*scale});const t={...resample(raw.map(convert),true),...info,sourceScale:scale,sourceOrigin:{x:minX,y:minY}};
// Largeur constante dans le monde du jeu ; le centre du tracé vient des cartes.
let close=[];for(let i=0;i<t.points.length;i+=14){let nearest=Infinity;for(let j=0;j<t.points.length;j+=8){const separation=Math.min(mod(i-j,t.points.length),mod(j-i,t.points.length))*t.step;if(separation<100)continue;nearest=Math.min(nearest,dist(t.points[i],t.points[j]));}close.push(nearest);}close.sort((a,b)=>a-b);t.width=clamp(close[Math.floor(close.length*.1)]*.50,18,30);t.carLength=t.width*.93;t.carWidth=t.carLength*.42;
t.bends=t.points.map((p,i)=>Math.abs(angle(at(t,i*t.step+10).a-at(t,i*t.step-10).a))/20);t.speedCaps=t.points.map((p,i)=>{let bend=0;for(let k=0;k<9;k++)bend=Math.max(bend,t.bends[(i+k*3)%t.points.length]);return clamp(Math.sqrt(155/Math.max(.004,bend)),43,116);});
let entry=t.length*.92,exit=t.length*.045,side=1;if(pitRaw.length>2){const pr=pitRaw.map(convert),a=near(t,pr[0].x,pr[0].y),b=near(t,pr.at(-1).x,pr.at(-1).y),span=mod(b.s-a.s,t.length);if(span>t.length*.02&&span<t.length*.38){entry=a.s;exit=b.s;}const m=pr[Math.floor(pr.length/2)],q=near(t,m.x,m.y);side=(-Math.sin(q.a)*(m.x-q.x)+Math.cos(q.a)*(m.y-q.y))>=0?1:-1;}
const span=mod(exit-entry,t.length),route=[];for(let i=0;i<=100;i++){const u=i/100,p=pose(t,entry+span*u,side*t.width*1.18*Math.sin(Math.PI*u)**.58);route.push(p);}t.pit={...resample(route,false,2),entry,exit,span,side};t.bridge=findBridge(t);
const all=[...t.points,...t.pit.points];t.bounds={minX:Math.min(...all.map(p=>p.x))-65,minY:Math.min(...all.map(p=>p.y))-65,maxX:Math.max(...all.map(p=>p.x))+65,maxY:Math.max(...all.map(p=>p.y))+65};return t;}
const TYRES={soft:{name:'Tendres',letter:'T',color:'#ed5464',grip:1.055,wear:.48},medium:{name:'Médiums',letter:'M',color:'#f6d45b',grip:1,wear:.365},hard:{name:'Durs',letter:'D',color:'#e6edf0',grip:.97,wear:.275}};
// V39 : conduite manuelle dans le repère du ruban, huit pilotes, qualification et stands.
class Race {
 constructor(track, options={}) {
  this.track=track;
  this.options={level:'discovery',laps:3,color:'#ec3448',tyre:'medium',session:'race',...options};
  if(this.options.session==='qualifying')this.options.laps=2;
  this.random=random(seedOf(track.id)+(options.seed||39));
  this.state='ready';this.time=0;this.countdown=3;this.events=[];this.pitHistory=[];
  this.nextTyre=this.options.tyre;this.input={axis:0,throttle:false,brake:false,boost:false};
  this.contacts=0;this.passes=0;this.rankBefore=8;
  const fallback=['Constant','Verstappen','Norris','Leclerc','Hamilton','Piastri','Russell','Alonso'];
  const drivers=options.drivers?.length===8?options.drivers:fallback.map((name,i)=>({name,color:['#ec3448','#183353','#ff8b24','#d41426','#d41426','#ff8b24','#1cc8b1','#087858'][i]}));
  const grid=options.grid||[1,2,3,4,5,6,7,0];
  this.cars=drivers.map((d,id)=>{
   const slot=Math.max(0,grid.indexOf(id)),s=-(Math.floor(slot/2)+1)*track.carLength*1.45,lane=(slot%2?1:-1)*track.width*.22;
   return {id,name:d.name,color:d.color||this.options.color,teamId:d.teamId,teamName:d.teamName,driverNumber:d.driverNumber||id+1,
    s,speed:0,lane,targetLane:lane,laneV:0,headingError:0,rpm:3200,gear:1,wear:0,
    tyre:id?['medium','soft','hard'][id%3]:this.options.tyre,boost:100,phase:'track',pitRequested:false,pit:null,
    pitStops:0,lastPitTime:null,cooldown:0,flash:0,finished:false,finishTime:null,slip:0,lapStart:null,bestLap:null,lapTimes:[],...pose(track,s,lane)};
  });
  this.player=this.cars[0];
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
 updateAI(c,dt){
  const t=this.track;c.followCap=null;
  const shouldStop=c.wear>.60||(!c.pitStops&&this.options.laps>=3&&c.s>t.length*(1.1+c.id*.09));
  if(shouldStop&&!c.pitRequested&&c.phase==='track'&&c.s<t.length*(this.options.laps-.42))this.requestPit(c);
  let target=Math.sin(c.s/t.length*TAU+c.id)*t.width*.17;
  const ahead=this.cars.filter(o=>o!==c&&o.phase==='track'&&!o.finished).map(o=>({o,g:mod(o.s-c.s,t.length)})).filter(q=>q.g<t.carLength*4).sort((a,b)=>a.g-b.g)[0];
  if(ahead){
   const choices=c.id%2?[-t.width*.26,t.width*.26]:[t.width*.26,-t.width*.26];
   const score=lane=>this.cars.reduce((sum,o)=>sum+(o!==c&&Math.abs(o.s-c.s)<t.carLength*3?Math.max(0,t.carWidth*1.6-Math.abs(o.lane-lane)):0),0);
   choices.sort((a,b)=>score(a)-score(b));target=choices[0];
   if(ahead.g<t.carLength*1.8&&Math.abs(ahead.o.lane-c.lane)<t.carWidth)c.followCap=Math.max(14,ahead.o.speed-8);
  }
  c.targetLane+=(target-c.targetLane)*Math.min(1,dt*2.8);
 }
 step(raw){
  if(!['racing','countdown'].includes(this.state))return;
  const dt=clamp(raw,0,.05);
  if(this.state==='countdown'){this.countdown-=dt;if(this.countdown<=0){this.state='racing';this.events.push({type:'go'});this.notify('À vous de piloter · accélérez !',2);}return;}
  this.time+=dt;const t=this.track;
  for(const c of this.cars){
   c.cooldown=Math.max(0,c.cooldown-dt);c.flash=Math.max(0,c.flash-dt);if(c.finished)continue;
   if(c.id)this.updateAI(c,dt);
   if(c.phase!=='track'){this.pitStep(c,dt);continue;}
   const before=c.s,tyre=TYRES[c.tyre],grip=tyre.grip*(1-Math.max(0,c.wear-.45)*.45);
   const brake=!c.id&&!!this.input.brake,gas=c.id?1:brake?0:clamp(Number(this.input.throttle)||0,0,1);
   const boosting=!c.id&&gas>0&&this.input.boost&&!brake&&c.boost>1;
   const off=Math.max(0,Math.abs(c.lane)-t.width*.40)/(t.width*.18);
   if(c.id){
    const pace=(this.options.level==='challenge'?.94:.78)+c.id*.009;
    let cap=this.curveCap(c.s)*grip*pace;if(c.followCap!==null)cap=Math.min(cap,c.followCap);
    c.speed=clamp(c.speed+clamp(cap-c.speed,-145*dt,72*dt),0,130);
    c.laneV+=(c.targetLane-c.lane)*28*dt-c.laneV*8.8*dt;c.lane=clamp(c.lane+c.laneV*dt,-t.width*.56,t.width*.56);
    c.s+=c.speed*dt;c.headingError=Math.atan2(c.laneV,Math.max(20,c.speed));
   }else{
    // No pedal means coasting. There is no automatic corner braking.
    const drag=3.5+.00155*c.speed*c.speed+off*24;
    c.speed=clamp(c.speed+((boosting?83:66)*gas*(1-Math.min(.65,off*.4))-drag-(brake?185:0))*dt,0,132);
    const axis=clamp(this.input.axis||0,-1,1),curvature=angle(at(t,c.s+6).a-at(t,c.s-6).a)/12;
    const safe=this.curveCap(c.s)*grip,excess=Math.max(0,c.speed/safe-1);
    const steeringRate=axis*(1.15+Math.min(1.8,c.speed/60))*Math.min(1,c.speed/18)*grip/(1+excess*.55);
    // Discovery damps oscillations, but both modes require steering through bends.
    c.headingError=clamp(c.headingError+(steeringRate-curvature*c.speed*Math.cos(c.headingError)-c.headingError*(this.options.level==='discovery'?1.0:.55))*dt,-1.12,1.12);
    c.laneV=Math.sin(c.headingError)*c.speed;
    c.lane+=c.laneV*dt;
    c.lane-=Math.sign(curvature)*excess*excess*c.speed*.14*dt;
    c.s+=c.speed*Math.max(.25,Math.cos(c.headingError))*dt;
    const limit=t.width*.66;
    if(Math.abs(c.lane)>limit){
     c.lane=Math.sign(c.lane)*limit;c.headingError*=.86;c.speed*=Math.pow(.15,dt);
     if(!c.cooldown&&c.speed>9){this.contacts++;c.cooldown=1;c.flash=.3;this.events.push({type:'contact'});this.notify('Bord de piste · relâchez les gaz et revenez vers la piste',2);}
    }
    c.targetLane=c.lane;c.steer=axis;
   }
   c.boost=clamp(c.boost+(boosting?-24:brake?15:4)*dt,0,100);c.boosting=boosting;c.braking=brake||!!c.id&&c.speed>this.curveCap(c.s);
   c.wear=clamp(c.wear+Math.max(0,c.s-before)/t.length*tyre.wear*(boosting?1.2:1),0,1);c.slip=off;
   Object.assign(c,pose(t,c.s,c.lane));c.a+=c.headingError;this.driveTrain(c);
   if(c.pitRequested&&before<c.pitEntry&&c.s>=c.pitEntry){
    c.phase='pit';c.pit={base:c.pitEntry,distance:0,entryLane:c.lane,service:0,done:false,stopAt:t.pit.length*(.43+c.id*.021),duration:null};
    c.pitRequested=false;c.speed=24;c.boosting=false;
    if(!c.id)this.notify('Limiteur activé · votre équipe vous attend',3);
   }
   this.crossLine(c,before,dt);
  }
  this.collisions();
  const rank=this.rank();if(rank<this.rankBefore&&this.options.session!=='qualifying'){this.passes+=this.rankBefore-rank;this.events.push({type:'pass'});}this.rankBefore=rank;
  if(this.player.wear>.67&&!this.player.pitRequested&&!this.warned){this.notify('Pneus usés · pensez aux stands',4);this.warned=true;}
  if(this.player.finished&& (this.options.session!=='qualifying'||this.cars.every(c=>c.finished)||this.time>this.player.finishTime+30)){
   this.state='finished';this.position=this.rank();this.events.push({type:'finish',position:this.position});
  }
 }
 crossLine(c,before,dt){
  const t=this.track;
  const oldLap=Math.floor(before/t.length),newLap=Math.floor(c.s/t.length);
  if(newLap>oldLap){
   const crossing=this.time-Math.max(0,c.s-newLap*t.length)/Math.max(1,c.speed);
   if(c.lapStart!==null){const time=crossing-c.lapStart;c.lapTimes.push(time);c.bestLap=Math.min(c.bestLap??Infinity,time);}
   c.lapStart=crossing;
   if(!c.id&&newLap>0&&newLap<this.options.laps){this.events.push({type:'lap'});this.notify(this.options.session==='qualifying'?'Tour : '+c.lapTimes.at(-1).toFixed(3)+' s':newLap===this.options.laps-1?'Dernier tour !':'Tour '+(newLap+1),2);}
  }
  if(c.s>=t.length*this.options.laps)this.finishCar(c,dt);
 }
 driveTrain(c){const old=c.gear;c.gear=clamp(Math.floor(c.speed/15)+1,1,8);const ratios=[3.45,2.6,2.1,1.76,1.51,1.34,1.18,1.06];c.rpm=clamp(2800+c.speed*ratios[c.gear-1]*59,2800,12000);if(c.gear!==old&&!c.id)this.events.push({type:'shift',up:c.gear>old});}
 beginService(c){
  const p=c.pit;
  // Four independent wheel crews: mostly quick stops, occasional difficult nut.
  p.wheels=Array.from({length:4},()=>{const delay=this.random()<.15?.35+this.random()*3.25:0;return{duration:Math.min(6,1.9+this.random()*.95+delay),delay};});
  p.duration=Math.max(...p.wheels.map(w=>w.duration));p.oldTyre=c.tyre;p.newTyre=c.id?c.tyre==='hard'?'medium':'hard':this.nextTyre;
  p.startedAt=this.time;p.service=0;c.phase='service';c.speed=0;c.braking=true;
 }
 pitStep(c,dt){
  const t=this.track,p=c.pit,before=c.s;
  if(c.phase==='service'){
   const consumed=Math.min(dt,p.duration-p.service);p.service=Math.min(p.duration,p.service+consumed);
   c.speed=0;
   if(p.service>=p.duration-1e-9){
    p.done=true;c.tyre=p.newTyre;c.wear=0;c.pitStops++;c.lastPitTime=p.duration;c.lastPitAt=p.startedAt+p.duration;
    this.pitHistory.push({name:c.name,id:c.id,time:p.duration,compound:p.newTyre,at:c.lastPitAt});
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
  if(p.distance>=t.pit.length){c.s=p.base+t.pit.span;c.phase='track';c.pit=null;c.lane=0;c.targetLane=0;c.laneV=0;c.headingError=0;c.cooldown=1;Object.assign(c,pose(t,c.s,0));}
 }
 finishCar(c,dt){if(c.finished)return;c.finished=true;c.finishTime=this.time-Math.min(dt,Math.max(0,c.s-this.track.length*this.options.laps)/Math.max(1,c.speed));c.speed=0;c.boosting=false;}
 collisions(){
  const t=this.track;
  for(let i=0;i<this.cars.length;i++)for(let j=i+1;j<this.cars.length;j++){
   const a=this.cars[i],b=this.cars[j];if(a.phase!=='track'||b.phase!=='track'||a.finished||b.finished)continue;
   const ds=mod(b.s-a.s+t.length/2,t.length)-t.length/2,dl=b.lane-a.lane;
   if(Math.abs(ds)>t.carLength*.86||Math.abs(dl)>t.carWidth*.92||a.cooldown||b.cooldown)continue;
   const rear=ds>0?a:b,front=ds>0?b:a;rear.speed=Math.min(rear.speed,front.speed*.91);front.speed*=.98;
   const side=dl>=0?1:-1,push=Math.max(0,t.carWidth-Math.abs(dl))*.51;
   a.lane=clamp(a.lane-side*push,-t.width*.62,t.width*.62);b.lane=clamp(b.lane+side*push,-t.width*.62,t.width*.62);
   a.targetLane=a.lane;b.targetLane=b.lane;a.cooldown=b.cooldown=.9;a.flash=b.flash=.3;
   for(const car of [a,b]){Object.assign(car,pose(t,car.s,car.lane));car.a+=car.headingError;}
   if(!a.id||!b.id){this.contacts++;this.events.push({type:'contact'});}
  }
 }
 drainEvents(){return this.events.splice(0);}
}
const API={Race,makeTrack,at,pose,near,random,seedOf,TYRES,clamp,mod,angle};if(typeof module==='object'&&module.exports)module.exports=API;else scope.F1ArcadeCore=API;
})(typeof window==='object'?window:globalThis);
