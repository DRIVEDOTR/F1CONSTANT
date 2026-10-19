/* F1 Constant V57. Moteur arcade original, indépendant du DOM et du rendu. */
(function(scope){'use strict';
const RACE_PACE=1.232;
const TAU=Math.PI*2,clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),mod=(v,n)=>(v%n+n)%n,angle=a=>Math.atan2(Math.sin(a),Math.cos(a)),dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
function seedOf(s){let n=2166136261;for(const c of String(s))n=Math.imul(n^c.charCodeAt(0),16777619);return n>>>0;}
function random(seed){const next=()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};next.getState=()=>seed>>>0;next.setState=value=>{seed=value|0;};return next;}
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
 const top=350/t.kphPerUnit,accel=27/t.metersPerUnit,brake=32/t.metersPerUnit;
 const profile=lateral=>{const caps=t.bends.map(b=>Math.min(top,Math.max(82/t.kphPerUnit,Math.sqrt(lateral/t.metersPerUnit/Math.max(.000001,b)))));for(let pass=0;pass<3;pass++){for(let i=0;i<caps.length;i++){const prev=caps[mod(i-1,caps.length)];caps[i]=Math.min(caps[i],Math.sqrt(prev*prev+2*accel*t.step));}for(let i=caps.length-1;i>=0;i--){const next=caps[(i+1)%caps.length];caps[i]=Math.min(caps[i],Math.sqrt(next*next+2*brake*t.step));}}return caps;};
 let lo=2,hi=300;for(let i=0;i<28;i++){const mid=(lo+hi)/2,p=profile(mid),time=p.reduce((sum,v,i)=>sum+2*t.step/(v+p[(i+1)%p.length]),0);if(time>t.targetLap)lo=mid;else hi=mid;}t.lateralAcceleration=(lo+hi)/2;t.speedCaps=profile(t.lateralAcceleration);t.profileLap=t.speedCaps.reduce((sum,v,i)=>sum+2*t.step/(v+t.speedCaps[(i+1)%t.speedCaps.length]),0);t.topKph=350;t.baseProfileLap=t.profileLap;
 const paced=t.speedCaps.map(v=>v>=top*.995?top:Math.min(top,v*1.1536));t.profileLap=paced.reduce((sum,v,i)=>sum+2*t.step/(v+paced[(i+1)%paced.length]),0);t.profileLap/=RACE_PACE;t.targetLap=t.profileLap;
}
// Read the former geometry only when migrating a pre-V55 checkpoint.
function legacyPit(t,entry,exit,side){let span=mod(exit-entry,t.length);const candidate=side=>{const route=[];let score=0;for(let i=0;i<=100;i++){const u=i/100,offset=side*t.width*1.12*(u<.25?(u/.25)**3*(10-15*(u/.25)+6*(u/.25)**2):u>.75?((1-u)/.25)**3*(10-15*((1-u)/.25)+6*((1-u)/.25)**2):1),p=pose(t,entry+span*u,offset);route.push(p);if(u>.25&&u<.75){let nearest=Infinity;for(let j=0;j<t.points.length;j+=4)nearest=Math.min(nearest,dist(p,t.points[j]));score+=Math.max(0,t.width*.71+2-nearest)**2;const bend=angle(at(t,entry+span*u+3).a-at(t,entry+span*u-3).a)/6;if(bend*offset>.70)score+=100*(bend*offset-.70);}const localBend=angle(at(t,entry+span*u+3).a-at(t,entry+span*u-3).a)/6;if(localBend*offset>.65)score+=300*(localBend*offset-.65);}return{route,score};};const bendAt=s=>Math.abs(angle(at(t,s+3).a-at(t,s-3).a)/6);if(bendAt(entry)>.012||bendAt(exit)>.012){const initial=entry;let best=Infinity,bestStart=entry;span=clamp(span,t.carLength*12,t.length*.15);for(let k=0;k<150;k++){const start=k*t.length/150;let bend=0;for(let j=0;j<=20;j++)bend=Math.max(bend,bendAt(start+span*j/20));const distance=Math.min(mod(start-initial,t.length),mod(initial-start,t.length))/t.length,score=bend*2000+distance*2;if(score<best){best=score;bestStart=start;}}entry=bestStart;exit=mod(entry+span,t.length);}
const original=candidate(side),opposite=candidate(-side);const flip=opposite.score+1<original.score;if(flip)side=-side;const route=flip?opposite.route:original.route;
return{...resample(route,false,2),entry,exit,span,side};
}
// Silverstone: the F1 pit lane cuts inside Vale / Club, to the driver's right
// of Hamilton Straight, and rejoins beyond Abbey. Never let the generic
// clearance optimizer flip it to the outside of the circuit.
function silverstonePit(t){
 const origin=at(t,0),co=Math.cos(origin.a),si=Math.sin(origin.a),local=(x,y)=>({x:origin.x+co*x-si*y,y:origin.y+si*x+co*y});
 const entry=t.pit.sourceEntry,exit=330,span=mod(exit-entry,t.length),first=local(-50,55),last=local(-50+t.carLength*40.5,55),inlet=at(t,entry),outlet=at(t,exit),route=[];
 const curve=(a,aa,b,ba,handleA,handleB)=>{
  const c={x:a.x+Math.cos(aa)*handleA,y:a.y+Math.sin(aa)*handleA},d={x:b.x-Math.cos(ba)*handleB,y:b.y-Math.sin(ba)*handleB},steps=Math.ceil((dist(a,c)+dist(c,d)+dist(d,b))*2);
  for(let i=0;i<=steps;i++){const u=i/steps,v=1-u;route.push({x:v*v*v*a.x+3*v*v*u*c.x+3*v*u*u*d.x+u*u*u*b.x,y:v*v*v*a.y+3*v*v*u*c.y+3*v*u*u*d.y+u*u*u*b.y});}
 };
 curve(inlet,inlet.a,first,origin.a,38,30);
 const serviceFrom=route.reduce((sum,p,i)=>sum+(i?dist(route[i-1],p):0),0);
 for(let i=1;i<=200;i++)route.push({x:first.x+(last.x-first.x)*i/200,y:first.y+(last.y-first.y)*i/200});
 const serviceTo=serviceFrom+t.carLength*40.5;
 curve(last,origin.a,outlet,outlet.a,24,26);
 return{...resample(route,false,1),entry,exit,span,side:1,serviceFrom,serviceTo,timingAt:serviceFrom+50,sourceEntry:t.pit.sourceEntry,sourceExit:t.pit.sourceExit,sourceSide:t.pit.sourceSide,layoutVersion:3};
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
// Anchor the working lane to the source start/finish straight. Curved access
// roads may bend, but garages and the teammate waiting slots share a straight
// corridor with enough room for two cars per team, outside the through lane.
const sourceEntry=entry,sourceExit=exit,sourceSide=side,start=at(t,0),co=Math.cos(start.a),si=Math.sin(start.a),half=t.carLength*25;
const signedEntry=entry-t.length,signedExit=exit,shift=clamp((signedEntry+signedExit)/2,-t.carLength*8,t.carLength*8);
entry=mod(Math.min(signedEntry,shift-half-t.carLength*6),t.length);exit=Math.max(signedExit,shift+half+t.carLength*6);
const span=mod(exit-entry,t.length),local=(along,lateral)=>({x:start.x+co*along-si*lateral,y:start.y+si*along+co*lateral});
const corridor=which=>{
 let best=null;
 for(const distance of [1.12,1.5,1.9,2.3,3,4,5,6]){
  const offset=which*t.width*distance;let score=(distance-1.12)*12;
  for(let along=shift-half;along<=shift+half;along+=4)for(const lane of [0,which*t.carWidth*2.6]){const q=local(along,offset+lane);let nearest=Infinity;for(let j=0;j<t.points.length;j+=3)nearest=Math.min(nearest,dist(q,t.points[j]));score+=Math.max(0,t.width-nearest)**2;}
  if(!best||score<best.score)best={which,offset,score};
 }
 return best;
};
const original=corridor(side),opposite=corridor(-side),chosen=opposite.score+2<original.score?opposite:original;side=chosen.which;
const first=local(shift-half,chosen.offset),last=local(shift+half,chosen.offset),inlet=at(t,entry),outlet=at(t,exit),route=[];
const curve=(a,aa,b,ba)=>{
 // Forward circular tangents keep a minimum turning radius even on access roads.
 const radius=t.carLength*3,paths=[];
 for(const left of [-1,1])for(const right of [-1,1]){
  const ca={x:a.x-Math.sin(aa)*radius*left,y:a.y+Math.cos(aa)*radius*left},cb={x:b.x-Math.sin(ba)*radius*right,y:b.y+Math.cos(ba)*radius*right},dx=cb.x-ca.x,dy=cb.y-ca.y,d=Math.hypot(dx,dy),ratio=(left-right)*radius/Math.max(.00001,d);
  if(Math.abs(ratio)>1)continue;
  const heading=Math.atan2(dy,dx)+Math.asin(ratio),firstTurn=mod(left*(heading-aa),TAU),lastTurn=mod(right*(ba-heading),TAU),straight=Math.sqrt(Math.max(0,d*d-(left-right)**2*radius**2));
  paths.push({left,right,firstTurn,lastTurn,straight,score:(firstTurn+lastTurn)*radius+straight});
 }
 const alternatives=paths.map(path=>{
  let x=a.x,y=a.y,heading=aa;const points=[{x,y}];
  for(const [turn,length]of [[path.left,path.firstTurn*radius],[0,path.straight],[path.right,path.lastTurn*radius]]){
   const count=Math.max(1,Math.ceil(length)),step=length/count;
   for(let i=0;i<count;i++){if(turn){const next=heading+turn*step/radius;x+=radius/turn*(Math.sin(next)-Math.sin(heading));y+=radius/turn*(Math.cos(heading)-Math.cos(next));heading=next;}else{x+=Math.cos(heading)*step;y+=Math.sin(heading)*step;}points.push({x,y});}
  }
  points[points.length-1]={x:b.x,y:b.y};let penalty=0;
  for(let i=0;i<points.length;i+=3){
   const p=points[i],dx=p.x-start.x,dy=p.y-start.y,along=dx*co+dy*si,lateral=-dx*si+dy*co;
   if(along>shift-half+t.carLength*2&&along<shift+half-t.carLength*2)penalty+=Math.max(0,t.carWidth*4-Math.abs(lateral-chosen.offset-side*t.carWidth*1.3))**2*15;
   // The access roads may join the circuit only at their designated ends.
   if(i>t.carLength*3&&i<points.length-t.carLength*3){let nearest=Infinity;for(let j=0;j<t.points.length;j+=5)nearest=Math.min(nearest,dist(p,t.points[j]));penalty+=Math.max(0,t.width*.75-nearest)**2*3;}
   // Keep the exit separate from the previously built entrance and garage lane.
   for(let j=0;j<route.length-t.carLength*4;j+=4)penalty+=Math.max(0,t.carWidth*2.4-dist(p,route[j]))**2*4;
  }
  return{points,score:path.score+penalty};
 });
 route.push(...alternatives.sort((a,b)=>a.score-b.score)[0].points);
};
curve(inlet,inlet.a,first,start.a);
const serviceFrom=route.reduce((sum,p,i)=>sum+(i?dist(route[i-1],p):0),0);
for(let i=1;i<=100;i++)route.push({x:first.x+(last.x-first.x)*i/100,y:first.y+(last.y-first.y)*i/100});
const serviceTo=serviceFrom+half*2;
curve(last,start.a,outlet,outlet.a);
t.pit={...resample(route,false,1),entry,exit,span,side,serviceFrom,serviceTo,timingAt:serviceFrom+half-shift,sourceEntry,sourceExit,sourceSide,layoutVersion:2};if(t.id==='silverstone'){t.pitV2=t.pit;t.pit=silverstonePit(t);}t.bridge=findBridge(t);
t.halfWidths=Array(t.points.length).fill(t.width/2);
const all=[...t.points,...t.pit.points];t.bounds={minX:Math.min(...all.map(p=>p.x))-65,minY:Math.min(...all.map(p=>p.y))-65,maxX:Math.max(...all.map(p=>p.x))+65,maxY:Math.max(...all.map(p=>p.y))+65};return t;}
const TYRES={soft:{name:'Tendres',letter:'T',color:'#ed5464',grip:1.04,top:1,wear:.34},medium:{name:'Médiums',letter:'M',color:'#f6d45b',grip:1,top:.98,wear:.26},hard:{name:'Durs',letter:'D',color:'#e6edf0',grip:.97,top:.955,wear:.20},intermediate:{name:'Intermédiaires',letter:'I',color:'#58d194',grip:.88,top:.95,wear:.27},wet:{name:'Pluie',letter:'P',color:'#58a9f5',grip:.74,top:.90,wear:.24}};
// Measure the four tyre contact patches against the local asphalt edge.
function kerbContact(t,c){
 const p=pose(t,c.s,c.lane),heading=c.headingError||0,a=p.a+heading,co=Math.cos(a),si=Math.sin(a),halfTyre=t.carWidth*.10;
 let load=0,wheels=0;const patches=[];
 for(const axle of [-1,1])for(const side of [-1,1]){
  const x=axle*t.carLength*.27,y=side*t.carWidth*.43,wx=p.x+co*x-si*y,wy=p.y+si*x+co*y;
  const s=c.s+x*Math.cos(heading)-y*Math.sin(heading),q=at(t,s),lateral=-(wx-q.x)*Math.sin(q.a)+(wy-q.y)*Math.cos(q.a),edge=roadHalfWidth(t,s)-.15;
  const u=clamp((Math.abs(lateral)-edge+halfTyre)/(2*halfTyre),0,1),coverage=u*u*(3-2*u);
  load+=coverage;if(coverage>.05)wheels++;patches.push(coverage);
 }
 const u=clamp(load-2,0,1),penalty=load<=2?.10*load/2:.10+.40*u*u*(3-2*u);
 return{wheels,load,penalty,patches};
}
// Gameplay balance: the same weather, temperature and wear model applies to every car.
function tyrePerformance(compound,wear,wetness,temperature=34,rain=0){
 const t=TYRES[compound]||TYRES.medium,w=clamp(wetness||0,0,1),used=clamp(wear||0,0,1),temp=clamp(temperature,10,65);
 let grip=t.grip,top=t.top,rate=t.wear;
 if(compound==='wet'){
  const water=clamp(w/.65,0,1);grip=.60+.42*water;top=.70+.20*water;
  rate*=w<.15?4.2:w<.4?2.1:.80;
 }else if(compound==='intermediate'){
  grip=.76+.32*Math.exp(-(((w-.38)/.30)**2))-.34*clamp((w-.60)/.4,0,1);
  top=.85+.10*Math.min(1,w/.30)-.22*clamp((w-.55)/.45,0,1);
  rate*=w<.12?2.5:w>.75?1.7:.85;
 }else{
  grip*=1-.78*Math.pow(w,.75);top*=1-(1-.60/.955)*Math.pow(w,.85);
  rate*=1-w*.20;
 }
 const thermal={soft:[26,.003,.0045],medium:[35,.0025,.0035],hard:[44,.0035,.0025],intermediate:[24,.002,.005],wet:[20,.002,.006]}[compound]||[35,.0025,.0035];
 const cold=Math.max(0,thermal[0]-temp),hot=Math.max(0,temp-thermal[0]);
 const temperatureFactor=clamp(1-cold*thermal[1]-hot*thermal[2],.75,1);
 top*=temperatureFactor;grip*=clamp(1-cold*.005-hot*.006,.60,1);
 rate*=1+(temp-15)*.025+hot*.025;
 const anchors=[[0,1],[.30,1],[.50,.88],[.75,.72],[1,.50]];
 let speedHealth=1;
 for(let i=1;i<anchors.length;i++)if(used<=anchors[i][0]){const a=anchors[i-1],b=anchors[i],u=clamp((used-a[0])/(b[0]-a[0]),0,1);speedHealth=a[1]+(b[1]-a[1])*u*u*(3-2*u);break;}
 const deluge=clamp((rain-.76)/.24,0,1)*clamp((w-.55)/.35,0,1),stormTop=1-deluge*.22,stormGrip=1-deluge*.14;
 const loss=(1-speedHealth)*.85;
 return{grip:Math.max(.15,grip*(1-loss)*stormGrip),top:top*speedHealth*stormTop,traction:Math.max(.25,grip)*Math.sqrt(speedHealth*stormTop),wear:rate,temperatureFactor,speedHealth,stormTop};
}
function recommendedTyre(weather,bias=.5,remaining=2){
 const w=weather.wet,temp=weather.trackTemp??34;
 if(w>.68||weather.rain>.45&&w>.40)return 'wet';
 if(w>.16||weather.rain>.06&&w>.06)return 'intermediate';
 if(temp<28)return bias>.78&&remaining>2?'medium':'soft';
 if(temp>=40)return bias<.30?'medium':'hard';
 return bias<.22&&remaining<2?'soft':bias>.8&&remaining>2?'hard':'medium';
}
function tyreAdvice(compound,wear,weather){
 const recommended=recommendedTyre(weather),perf=tyrePerformance(compound,wear,weather.wet,weather.trackTemp,weather.rain);
 let reason='';
 if(weather.wet>.68||weather.rain>.45&&weather.wet>.40){if(compound!=='wet')reason='Piste détrempée : pneus pluie conseillés.';}
 else if(weather.wet>.16||weather.rain>.06&&weather.wet>.06){if(compound!=='intermediate')reason='Piste humide / bruine : intermédiaires conseillés.';}
 else if(['wet','intermediate'].includes(compound))reason='Piste sèche : revenez aux slicks, ces pneus surchauffent.';
 else if(wear>.67)reason='Pneus usés : préparez un arrêt.';
 else if(compound!==recommended&&Math.abs(weather.trackTemp-({soft:26,medium:35,hard:44}[compound]||35))>12)reason='Piste à '+Math.round(weather.trackTemp)+' °C : '+TYRES[recommended].name.toLowerCase()+' conseillés pour ce relais.';
 return{recommended,warning:reason,penalty:Math.max(0,Math.round((1-perf.top)*100)),performance:perf};
}
class Weather{
 constructor(mode,seed,duration,temperature='auto'){
  this.mode=mode||'variable';this.seed=seed;this.random=random(seed);this.rain=0;this.wet=0;this.risk=12;this.plan=[];const r=this.random;
  this.dryTemp=({cool:24,mild:34,hot:46,veryhot:54})[temperature]??(24+r()*22);
  const peak=()=>r()<.28?.86+r()*.14:r()<.40?.12+r()*.20:.40+r()*.34;
  if(this.mode==='rain'){
   this.rain=.45+r()*.24;this.wet=.50+r()*.17;
   const high=peak();this.plan=[{at:0,rain:this.rain},{at:duration*.26,rain:high},{at:duration*.50,rain:Math.max(.18,high*.75)},{at:duration*.74,rain:r()<.4?.12:peak()},{at:duration,rain:.12+r()*.32}];
  }else if(this.mode!=='dry'&&r()>(this.dryTemp>48?.80:.65)){
   const at=duration*(.12+r()*.16),high=peak();this.plan=[{at:0,rain:0},{at,rain:0},{at:at+Math.max(35,duration*.12),rain:.16},{at:duration*.58,rain:high},{at:duration*.76,rain:high*.75},{at:duration,rain:r()<.65?0:.20}];
   this.plan.sort((a,b)=>a.at-b.at);
  }
  this.trackTemp=this.dryTemp-this.rain*7-this.wet*2;this.risk=this.mode==='dry'?0:this.rain?100:12;this.phase=this.rain>.78?'Déluge':this.rain>.32?'Pluie':this.rain>.04?'Bruine':'Sec';
 }
 step(dt,time){
  let target=0;if(this.plan.length){let a=this.plan[0],b=a;for(let i=1;i<this.plan.length;i++){b=this.plan[i];if(time<b.at)break;a=b;}const u=clamp((time-a.at)/Math.max(1,b.at-a.at),0,1);target=a.rain+(b.rain-a.rain)*u;}
  this.rain=clamp(this.rain+(target-this.rain)*(1-Math.exp(-dt/7)),0,1);
  this.wet=clamp(this.wet+(this.rain*.012-(1-this.rain)*(.0025+(this.dryTemp-20)*.00005))*dt,0,1);
  const future=this.plan.filter(p=>p.at>time&&p.at<time+50).reduce((max,p)=>Math.max(max,p.rain),target),risk=this.mode==='dry'?0:Math.max(this.rain*100,8+9*(1+Math.sin(time/31)),future*95);
  if(this.rain>.04)this.risk=100;else this.risk+=(risk-this.risk)*(1-Math.exp(-dt*.10));
  const temperature=clamp(this.dryTemp+Math.sin(time/90)*1.5-this.rain*9-this.wet*4,Math.max(15,this.dryTemp-14),58),change=(temperature-this.trackTemp)*(1-Math.exp(-dt/55));
  this.trackTemp+=clamp(change,-dt*.10,dt*.07);
  this.phase=this.rain>.78?'Déluge':this.rain>.32?'Pluie':this.rain>.04?'Bruine':this.wet>.15?'Éclaircie · piste humide':'Sec';
 }
}

class Race {
 constructor(track, options={}) {
  this.track=track;
  this.options={level:'discovery',laps:3,color:'#ec3448',tyre:'medium',session:'race',...options};
  if(this.options.session==='qualifying')this.options.laps=2;
  this.requiredStops=this.options.session==='qualifying'||this.options.laps<3?0:1;
  this.random=random(seedOf(track.id)+(Number.isInteger(options.seed)?options.seed:freshSeed()));
  this.pitRandom=random(Number.isInteger(options.pitSeed)?options.pitSeed:freshSeed());
  this.contactRandom=random(Number.isInteger(options.contactSeed)?options.contactSeed:freshSeed());
  this.weather=new Weather(options.weather,Number.isInteger(options.weatherSeed)?options.weatherSeed:freshSeed(),track.targetLap*this.options.laps,options.temperature);this.state='ready';this.time=0;this.countdown=3;this.events=[];this.pitHistory=[];this.finishSequence=null;
  this.nextTyre=this.options.tyre;this.input={axis:0,throttle:false,brake:false,boost:false};
  this.contacts=0;this.passes=0;this.rankBefore=8;
  const fallback=['Constant','Verstappen','Norris','Leclerc','Hamilton','Piastri','Russell','Alonso'];
  const drivers=options.drivers?.length>=2?options.drivers:fallback.map((name,i)=>({name,color:['#ec3448','#183353','#ff8b24','#d41426','#d41426','#ff8b24','#1cc8b1','#087858'][i]}));
  const grid=options.grid||[...drivers.keys()].slice(1).concat(0);this.rankBefore=drivers.length;this.grid=grid;
  this.cars=drivers.map((d,id)=>{
   const slot=Math.max(0,grid.indexOf(id)),s=-(1+slot*.75)*track.carLength,lane=(slot%2?1:-1)*track.width*.22;
   return {id,name:d.name,color:d.color||this.options.color,teamId:d.teamId,teamName:d.teamName,driverId:d.driverId,driverNumber:d.driverNumber||id+1,colorB:d.colorB||d.color,helmet:d.helmet||{base:'#f6cc3f',accent:'#ffffff'},onTrack:this.options.session!=='qualifying'||id===0,
    s,speed:0,lane,targetLane:lane,laneV:0,headingError:0,steerInput:0,yawRate:0,reverseHold:0,impactV:0,impactYaw:0,bump:0,highestLine:-1,spin:null,spinImmunity:5,spins:0,throttle:0,rpm:3200,gear:1,wear:0,
    strategyBias:this.random(),strategyReaction:2+this.random()*9,strategyAt:0,strategyCandidate:null,strategySince:0,lastStrategyStop:-100,
    tyre:id?recommendedTyre(this.weather,this.random(),this.options.laps):this.options.tyre,boost:100,phase:'track',pitRequested:false,pit:null,
    pitStops:0,lastPitTime:null,cooldown:0,flash:0,finished:false,finishTime:null,slip:0,lapStart:null,bestLap:null,lapTimes:[],...pose(track,s,lane)};
  });
  this.player=this.cars[0];
  const teams=[...new Map(this.cars.map(c=>[c.teamId||c.teamName||'team-'+Math.floor(c.id/2),c])).entries()];
  this.pitBoxes=teams.map(([key,c],i)=>({key,name:c.teamName||key,color:c.color,stopAt:track.pit.serviceFrom+track.carLength*6+(track.pit.serviceTo-track.pit.serviceFrom-track.carLength*10)*i/Math.max(1,teams.length-1)}));
  for(const c of this.cars)c.pitBox=this.pitBoxes.find(b=>b.key===(c.teamId||c.teamName||'team-'+Math.floor(c.id/2)));
  if(this.options.session==='qualifying'&&!this.options._reference){
   this.player.s=-track.carLength*1.3;this.player.lane=this.player.targetLane=0;Object.assign(this.player,pose(track,this.player.s,0));
   // Rivals run independent solo laps with the race engine, including wear and changing weather.
   const ref=new Race(track,{...this.options,_reference:true,weatherSeed:this.weather.seed,seed:options.seed});
   ref.state='racing';ref.player.finished=true;ref.player.finishTime=0;
   for(const c of ref.cars.slice(1)){c.tyre=this.cars[c.id].tyre;c.onTrack=true;c.s=-track.carLength*1.3;c.lane=c.targetLane=0;}
   for(let i=0;i<Math.ceil(track.targetLap*12*30)&&ref.state!=='finished';i++)ref.step(1/30);
   for(const c of this.cars.slice(1)){
    const result=ref.cars[c.id];c.lapTimes=[...result.lapTimes];c.bestLap=result.bestLap;
    c.phase='garage';c.finished=true;c.simulatedQualifying=true;c.finishTime=0;
   }
  }
 }
 snapshot(){
  const state={};for(const key of ['options','time','countdown','nextTyre','contacts','passes','rankBefore','state','beforePause','message','messageUntil','warned','pitReminder','position','championshipRound','pitHistory','finishSequence'])if(this[key]!==undefined)state[key]=this[key];
  state.cars=this.cars.map(car=>{const out={};for(const key of Object.keys(car))if(key!=='pitBox')out[key]=car[key];return out;});
  const weather={};for(const key of Object.keys(this.weather))if(key!=='random')weather[key]=this.weather[key];
  return JSON.parse(JSON.stringify({schema:1,pitLayout:this.track.pit.layoutVersion,trackId:this.track.id,state,weather,rng:[this.random.getState(),this.pitRandom.getState(),this.contactRandom.getState(),this.weather.random.getState()]}));
 }
 static restore(track,value,drivers){
  const fail=()=>{throw Error('Session sauvegardée invalide');},finite=n=>typeof n==='number'&&Number.isFinite(n),safe=key=>!['__proto__','prototype','constructor'].includes(key);
  if(!value||value.schema!==1||value.trackId!==track.id||!value.state||!value.weather||!Array.isArray(value.rng)||value.rng.length!==4||value.rng.some(n=>!Number.isInteger(n)||n<0||n>4294967295))fail();
  if(value.pitLayout!==undefined&&value.pitLayout!==2&&!(value.pitLayout===3&&track.pit.layoutVersion===3))fail();
  const migrate=value.pitLayout===undefined||value.pitLayout===2&&!!track.pitV2,incomingPit=value.pitLayout===undefined?legacyPit(track,track.pit.sourceEntry,track.pit.sourceExit,track.pit.sourceSide):value.pitLayout===2?(track.pitV2||track.pit):track.pit;
  const s=value.state,o=s.options,w=value.weather;
  if(!o||!['qualifying','race'].includes(o.session)||!['discovery','challenge'].includes(o.level)||![2,3,5].includes(o.laps)||!TYRES[o.tyre]||!TYRES[s.nextTyre]||!['racing','countdown','paused','finished'].includes(s.state)||!finite(s.time)||s.time<0||s.time>86400||!finite(s.countdown))fail();
  const field=drivers||o.drivers;
  if(!Array.isArray(field)||field.length<2||field.length>22||!Array.isArray(s.cars)||s.cars.length!==field.length)fail();
  if(o.grid&&(!Array.isArray(o.grid)||o.grid.length!==field.length||new Set(o.grid).size!==field.length||o.grid.some(i=>!Number.isInteger(i)||i<0||i>=field.length)))fail();
  if(!['variable','dry','rain'].includes(w.mode)||!Array.isArray(w.plan)||w.plan.length>20||w.plan.some(p=>!p||!finite(p.at)||!finite(p.rain)||p.at<0||p.rain<0||p.rain>1))fail();
  for(const key of ['seed','rain','wet','risk','dryTemp','trackTemp'])if(!finite(w[key]))fail();
  if(w.rain<0||w.rain>1||w.wet<0||w.wet>1||w.trackTemp<0||w.trackTemp>80||!Array.isArray(s.pitHistory)||s.pitHistory.length>1000||s.pitHistory.some(p=>!p||typeof p.name!=='string'||!finite(p.time)||p.time<0||!TYRES[p.compound]||p.trafficWait!==undefined&&!finite(p.trafficWait)))fail();
  const settings={level:o.level,laps:o.laps,tyre:o.tyre,session:o.session,grid:o.grid,weather:w.mode,temperature:o.temperature,drivers:field,seed:0,pitSeed:0,contactSeed:0,weatherSeed:w.seed,_reference:true};
  const r=new Race(track,settings);delete r.options._reference;for(const key of ['seed','pitSeed','contactSeed','weatherSeed'])if(Number.isInteger(o[key]))r.options[key]=o[key];if(/^#[a-f0-9]{6}$/i.test(o.color||''))r.options.color=o.color;
  for(const key of ['time','countdown','contacts','passes','rankBefore','messageUntil'])if(s[key]!==undefined&&!finite(s[key]))fail();
  for(const key of ['time','countdown','nextTyre','contacts','passes','rankBefore','state','beforePause','message','messageUntil','warned','pitReminder','position','championshipRound','pitHistory','finishSequence'])if(s[key]!==undefined)r[key]=s[key];
  for(const [i,data]of s.cars.entries()){
   if(!data||data.id!==i||data.driverId!==field[i].driverId||!['track','pit','service','garage'].includes(data.phase)||!TYRES[data.tyre]||!Array.isArray(data.lapTimes)||data.lapTimes.length>100||data.lapTimes.some(n=>!finite(n)||n<=0))fail();
   for(const key of ['s','speed','lane','laneV','headingError','wear','boost','x','y','a','strategyBias','strategyAt','strategyReaction','lastStrategyStop','pitStops'])if(!finite(data[key]))fail();
   for(const key of Object.keys(data))if(typeof data[key]==='number'&&!finite(data[key]))fail();
   for(const [key,initial]of Object.entries(r.cars[i]))if(typeof initial==='number'&&!['driverNumber'].includes(key)&&!finite(data[key]))fail();
   for(const key of ['finished','onTrack','pitRequested'])if(typeof data[key]!=='boolean')fail();
   if(data.finished&&!finite(data.finishTime)||data.bestLap!==null&&!finite(data.bestLap)||Math.abs(data.speed)*track.kphPerUnit>500||Math.abs(data.s)>track.length*(o.laps+2))fail();
   if(data.wear<0||data.wear>1||data.boost<0||data.boost>100||Math.abs(data.lane)>track.width||!Number.isInteger(data.pitStops)||data.pitStops<0||data.pitStops>100||data.bestLap!==null&&(!finite(data.bestLap)||data.bestLap<=0))fail();
   if(data.pit){const p=data.pit;if(!finite(p.base)||!finite(p.distance)||p.distance<0||p.distance>incomingPit.length+.01||!finite(p.service)||p.service<0||p.service>86400||typeof p.done!=='boolean'||!finite(p.entryLane)||Math.abs(p.entryLane)>track.width||!finite(p.stopAt)||!finite(p.lateral)||Math.abs(p.stopAt-(value.pitLayout===undefined?incomingPit.length*(.22+.56*r.pitBoxes.indexOf(r.cars[i].pitBox)/Math.max(1,r.pitBoxes.length-1)):incomingPit.serviceFrom+track.carLength*6+(incomingPit.serviceTo-incomingPit.serviceFrom-track.carLength*10)*r.pitBoxes.indexOf(r.cars[i].pitBox)/Math.max(1,r.pitBoxes.length-1)))>.01||p.boxKey!==r.cars[i].pitBox.key)fail();if(data.phase==='service'&&(!finite(p.duration)||!TYRES[p.newTyre]||!Array.isArray(p.wheels)||p.wheels.length!==4))fail();if(p.wheels&&p.wheels.some(w=>!w||!finite(w.duration)||!Array.isArray(w.timeline)||w.timeline.length!==5||w.timeline.some((t,j)=>t.id!==['loosen','remove','fit','tighten','check'][j]||!finite(t.start)||!finite(t.end)||!finite(t.normalDuration)||t.start<0||t.end<=t.start||t.end>10.01||t.normalDuration<=0)||w.problem&&(!['loosen','tighten'].includes(w.problem.phase)||!finite(w.problem.start)||!finite(w.problem.delay)||w.problem.delay<0||w.problem.delay>10)))fail();}
   if(['pit','service'].includes(data.phase)&&!data.pit)fail();
   if(data.spin&&['elapsed','duration','angle','omega','vx','vy','direction'].some(k=>!finite(data.spin[k])))fail();
   const car=r.cars[i];for(const key of Object.keys(data))if(safe(key)&&!['pitBox','id','name','color','colorB','teamId','teamName','driverId','driverNumber','helmet'].includes(key))car[key]=data[key];
  }
  if(migrate)for(const car of r.cars){
   if(car.pit){
    const old=car.pit,p={...old},stop=car.pitBox.stopAt,completed=Math.floor(car.s/track.length);
    p.distance=car.phase==='service'?stop:old.distance<=old.stopAt?old.distance/old.stopAt*stop:stop+(old.distance-old.stopAt)/Math.max(.01,incomingPit.length-old.stopAt)*(track.pit.length-stop);
    p.distance=clamp(p.distance,0,track.pit.length);p.stopAt=stop;p.base=Math.floor(old.base/track.length)*track.length+track.pit.entry;p.holdLateral=false;delete p.exitCommitted;
    p.lateral=r.pitLateral(p,p.distance);car.pit=p;
    const progress=r.pitProgress(p.distance);p.base-=(Math.floor((p.base+progress)/track.length)-completed)*track.length;car.s=p.base+progress;
    Object.assign(car,r.pitPosition(p,p.distance,p.lateral));
   }else if(car.pitRequested){car.pitEntry=Math.floor(car.s/track.length)*track.length+track.pit.entry;if(car.pitEntry<=car.s+2)car.pitEntry+=track.length;}
  }

  if(value.pitLayout===2&&track.pitV2){
   // A shorter corrected access road must not compress a saved convoy into
   // overlapping cars. Keep occupied boxes fixed, then reserve free positions
   // for cars in transit, staying on the appropriate side of their own box.
   const reserved=r.cars.filter(c=>c.pit&&c.phase==='service');
   const moving=r.cars.filter(c=>c.pit&&c.phase!=='service').sort((a,b)=>a.pit.stopAt-b.pit.stopAt||b.pit.distance-a.pit.distance);
   for(const car of moving){
    const p=car.pit,low=p.done?p.stopAt:0,high=p.done?track.pit.length:p.stopAt,desired=clamp(p.distance,low,high);
    const candidate=d=>{const lateral=r.pitLateral(p,d),q=r.pitPosition(p,d,lateral),next=r.pitPosition(p,Math.min(track.pit.length,d+.05),r.pitLateral(p,d+.05));return{...q,a:d<track.pit.length-.05?Math.atan2(next.y-q.y,next.x-q.x):q.a,lateral,distance:d};};
    let free=null;
    for(let delta=0;delta<=track.pit.length&&!free;delta+=.5)for(const d of delta?[desired-delta,desired+delta]:[desired]){
     if(d<low||d>high)continue;const q=candidate(d);
     if(reserved.every(o=>!r.contactEnvelope(q,o)&&(o.phase==='service'||Math.abs(d-o.pit.distance)>track.carLength*1.5))){free=q;break;}
    }
    if(!free)fail();
    p.distance=free.distance;p.lateral=free.lateral;car.speed=0;car.s=p.base+r.pitProgress(p.distance);Object.assign(car,{x:free.x,y:free.y,a:free.a});reserved.push(car);
   }
  }

  if(s.finishSequence!==undefined&&s.finishSequence!==null){const f=s.finishSequence;if(!Array.isArray(f.following)||f.following.length>3||new Set(f.following).size!==f.following.length||f.following.some(id=>!Number.isInteger(id)||id<1||id>=field.length)||!finite(f.startedAt)||f.startedAt<0)fail();}
  r.player=r.cars[0];for(const key of Object.keys(r.weather))if(key!=='random'&&w[key]!==undefined)r.weather[key]=w[key];
  [r.random,r.pitRandom,r.contactRandom,r.weather.random].forEach((rng,i)=>rng.setState(value.rng[i]));r.events=[];r.input={axis:0,throttle:false,brake:false,boost:false};
  if(r.state!=='finished'){r.beforePause=['racing','countdown'].includes(s.state)?s.state:['racing','countdown'].includes(s.beforePause)?s.beforePause:'racing';r.state='paused';}
  return r;
 }
 start(){this.state='countdown';this.countdown=3;this.notify(this.options.session==='qualifying'?'Deux tours pour signer votre meilleur chrono':'Préparez-vous : les gaz sont manuels',3);}
 notify(text,duration=2){this.message=text;this.messageUntil=this.time+duration;this.events.push({type:'message',text});}
 pause(){if(['racing','countdown'].includes(this.state)){this.beforePause=this.state;this.state='paused';this.input={axis:0,throttle:false,brake:false,boost:false};}else if(this.state==='paused')this.state=['racing','countdown'].includes(this.beforePause)?this.beforePause:'racing';}
 requestPit(car=this.player){
  if(car.finished||car.phase!=='track'||this.options.session==='qualifying')return false;
  car.pitRequested=!car.pitRequested;
  if(car.pitRequested){car.pitEntry=Math.floor(car.s/this.track.length)*this.track.length+this.track.pit.entry;if(car.pitEntry<=car.s+2)car.pitEntry+=this.track.length;}
  if(!car.id)this.notify(car.pitRequested?'Arrêt demandé · entrée des stands guidée au prochain passage':'Arrêt annulé',3);
  return car.pitRequested;
 }
 standings(){
  if(this.options.session==='qualifying')return [...this.cars].sort((a,b)=>(a.bestLap??Infinity)-(b.bestLap??Infinity)||b.s-a.s);
  return [...this.cars].sort((a,b)=>(!!a.disqualified-!!b.disqualified)||(a.finished&&b.finished?a.finishTime-b.finishTime:a.finished?-1:b.finished?1:b.s-a.s));
 }
 rank(){return this.standings().findIndex(c=>!c.id)+1;}
 curveCap(s){const t=this.track;return t.speedCaps[Math.floor(mod(s,t.length)/t.step)%t.points.length];}
 gripCap(s,grip){const cap=this.curveCap(s),top=350/this.track.kphPerUnit;return cap>=top*.995?top:Math.min(top,cap*Math.sqrt(grip)*1.1536);}
 // Give the field a little breathing room; the leaders remain competitive.
 aiPace(c){const skill=((c.id*7)%23)/22;return this.options.level==='challenge'?.940+skill*.050:.925+skill*.060;}
 updateAI(c,dt){
  const t=this.track;c.followCap=null;
  if(this.time>=c.strategyAt){
   c.strategyAt=this.time+3+c.strategyBias*4;
   const remaining=Math.max(0,this.options.laps-c.s/t.length),preferred=recommendedTyre(this.weather,c.strategyBias,remaining);
   c.strategyTyre=preferred;
   if(c.strategyCandidate!==preferred){c.strategyCandidate=preferred;c.strategySince=this.time;}
   const current=tyrePerformance(c.tyre,c.wear,this.weather.wet,this.weather.trackTemp,this.weather.rain),fresh=tyrePerformance(preferred,0,this.weather.wet,this.weather.trackTemp,this.weather.rain);
   const mismatch=preferred!==c.tyre&&(current.top<fresh.top*.92||current.grip<fresh.grip*.82);
   const reacted=this.time-c.strategySince>=c.strategyReaction;
   const worn=c.wear>(.55+c.strategyBias*.15);
   const planned=!c.pitStops&&this.requiredStops&&c.s>t.length*(.45+c.strategyBias*.95);
   if((mismatch&&reacted||worn||planned)&&!c.pitRequested&&c.phase==='track'&&remaining>.24&&this.time-c.lastStrategyStop>20){this.requestPit(c);c.lastStrategyStop=this.time;}
  }
  if(this.options._reference){c.targetLane=0;return;}
  const available=roadHalfWidth(t,c.s);let target=Math.sin(c.s/t.length*TAU+c.id)*available*.34;
  const ahead=this.cars.filter(o=>o!==c&&o.phase==='track'&&!o.finished).map(o=>({o,g:mod(o.s-c.s,t.length)})).filter(q=>q.g<t.carLength*4).sort((a,b)=>a.g-b.g)[0];
  if(ahead){
   const choices=c.id%2?[-available*.58,0,available*.58]:[available*.58,0,-available*.58];
   const score=lane=>this.cars.reduce((sum,o)=>sum+(o!==c&&Math.abs(o.s-c.s)<t.carLength*3?Math.max(0,t.carWidth*1.6-Math.abs(o.lane-lane)):0),0);
   choices.sort((a,b)=>score(a)-score(b));target=choices[0];
   if(ahead.g<t.carLength*1.08&&Math.abs(ahead.o.lane-c.lane)<t.carWidth)c.followCap=Math.max(0,ahead.o.speed);
  }
  c.targetLane+=(target-c.targetLane)*Math.min(1,dt*2.8);
 }
 followFinish(){
  if(this.options.session==='qualifying'||this.options._reference||!this.player.finished)return null;
  if(!this.finishSequence)this.finishSequence={following:this.cars.filter(c=>c!==this.player&&!c.finished&&c.onTrack!==false).sort((a,b)=>b.s-a.s).slice(0,3).map(c=>c.id),startedAt:this.time};
  const cars=this.finishSequence.following.map(id=>this.cars.find(c=>c.id===id)).filter(Boolean);
  return{car:cars.find(c=>!c.finished)||null,arrived:cars.filter(c=>c.finished).length,total:cars.length,ready:cars.every(c=>c.finished)};
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
   if(!this.options._reference)this.prepareTraffic(c,dt);
   const before=c.s,tyre=TYRES[c.tyre],performance=tyrePerformance(c.tyre,c.wear,this.weather.wet,this.weather.trackTemp,this.weather.rain),grip=performance.grip,kph=t.kphPerUnit,meters=t.metersPerUnit;
   const brake=!c.id&&!!this.input.brake,gas=c.id?1:brake?0:clamp(Number(this.input.throttle)||0,0,1);
   const straight=this.curveCap(c.s)>=350/kph*.995;
   const boosting=gas>0&&!brake&&c.boost>1&&(c.id?straight&&(c.boosting||c.boost>65):this.input.boost);c.throttle=gas;
   if(Number.isFinite(c.trafficCap))c.speed=Math.min(c.speed,c.trafficCap);
   const half=roadHalfWidth(t,c.s),contact=kerbContact(t,c),previous=c.kerbFactor??1;
   const kerbFactor=previous+(1-contact.penalty-previous)*(1-Math.exp(-dt*9));
   if(kerbFactor<previous)c.speed*=kerbFactor/previous;
   c.kerbFactor=kerbFactor;c.kerbPenalty=1-kerbFactor;c.kerbWheels=contact.wheels;c.kerbLoad=contact.load;
   if(c.id){
    const pace=this.aiPace(c);
    let cap=Math.min(straight?(boosting?380:350)/kph:this.gripCap(c.s,grip),(boosting?380:350)/kph*performance.top)*pace;cap*=kerbFactor;if(c.followCap!==null)cap=Math.min(cap,c.followCap);c.targetSpeed=cap;
    c.speed=clamp(c.speed+clamp(cap-c.speed,-32/meters*dt,(boosting?38:27)/meters*performance.traction*dt),0,380/kph);
    c.impactV=(c.impactV||0)*Math.exp(-dt*3.5);c.impactYaw=(c.impactYaw||0)*Math.exp(-dt*2.4);c.bump=(c.bump||0)*Math.exp(-dt*9);c.laneV+=(c.targetLane-c.lane)*28*dt-c.laneV*8.8*dt;c.laneV+=c.impactV*dt*4;c.lane=clamp(c.lane+c.laneV*dt*RACE_PACE,-Math.max(t.carWidth*.55,half-t.carWidth*.55),Math.max(t.carWidth*.55,half-t.carWidth*.55));
    c.s+=c.speed*dt*RACE_PACE;c.headingError=Math.atan2(c.laneV,Math.max(20,c.speed));c.steer=Math.atan(angle(at(t,c.s+6).a-at(t,c.s-6).a)/12*t.carLength*.54)/.24;
   }else{
    // Stable directional control: short digital presses do not accumulate yaw.
    const club=this.options.level==='discovery';
    c.reverseHold=brake&&c.speed<=.1?c.reverseHold+dt:0;
    if(brake){
     if(c.speed>0)c.speed=Math.max(0,c.speed-52/meters*dt);
     else if(c.reverseHold>.38)c.speed=Math.max(-20/kph,c.speed-8/meters*dt);
    }else if(gas){
     if(c.speed<0)c.speed=Math.min(0,c.speed+20/meters*dt);
     else{const top=(boosting?380:350)/kph*performance.top*kerbFactor,v=Math.abs(c.speed)*meters,drive=(straight?1:clamp((this.gripCap(c.s,grip)*(club?1.01:1)*kerbFactor+4/kph-c.speed)/(8/kph),0,1))*(boosting?38:27)/meters*gas*performance.traction*(1-.72*(c.speed/top)**4),drag=(.6+.00016*v*v)/meters;c.speed=clamp(c.speed+(drive-drag)*dt,0,top);}
    }else c.speed=Math.sign(c.speed)*Math.max(0,Math.abs(c.speed)-((club?9:8)+.001*(c.speed*meters)**2)/meters*dt);
    const axis=clamp(this.input.axis||0,-1,1),curvature=angle(at(t,c.s+6).a-at(t,c.s-6).a)/12;
    c.steerInput+=(axis-c.steerInput)*(1-Math.exp(-dt*(axis?(club?8:9):30)));
    const moving=clamp(Math.abs(c.speed)*kph/15,0,1),direction=c.speed<0?-1:1;
    const vKph=Math.abs(c.speed)*kph,maxHeading=.28+1.12/(1+(vKph/95)**2),safe=this.gripCap(c.s,grip)*kerbFactor,excess=Math.max(0,c.speed/Math.max(1,safe)-1);
    // A shared grip envelope prevents the player carrying unrestricted speed through corners.
    const cornerLimit=straight?Infinity:safe*(club?1.01:1);
    if(c.speed>cornerLimit)c.speed-=Math.min(32/meters*dt,(c.speed-cornerLimit)*(1-Math.exp(-dt*6)));
    const progressiveSteer=c.steerInput*(.55+.45*c.steerInput*c.steerInput);
    const targetHeading=direction*progressiveSteer*maxHeading*Math.max(.60,Math.sqrt(grip))-curvature*Math.max(0,c.speed)*.32-Math.sign(curvature)*Math.min(.16,excess*.08);
    c.impactYaw=(c.impactYaw||0)*Math.exp(-dt*2.4);c.impactV=(c.impactV||0)*Math.exp(-dt*3.5);c.bump=(c.bump||0)*Math.exp(-dt*9);
    const response=1-Math.exp(-dt*(club?8:9)*moving);
    c.headingError=angle(c.headingError+angle(targetHeading+c.impactYaw-c.headingError)*response);
    c.yawRate=0;c.steerAngle=c.steerInput*.42;c.steer=c.steerAngle/.24;
    c.laneV=Math.sin(c.headingError)*c.speed+c.impactV;
    c.lane+=c.laneV*dt*RACE_PACE;c.s+=c.speed*Math.cos(c.headingError)*dt*RACE_PACE;
    const limit=half+1.2;
    if(Math.abs(c.lane)>limit){
     c.lane=Math.sign(c.lane)*limit;
     // A barrier blocks forward progress; holding gas alone cannot drive a lap along it.
     if(Math.sign(c.lane)*c.laneV>0){c.speed*=Math.exp(-dt*5);c.impactV=-Math.sign(c.lane)*.7;}
     if(!c.cooldown){this.contacts++;c.cooldown=1.2;c.flash=.15;this.events.push({type:'contact'});this.notify('Large débordement · tournez vers la piste ; FREIN maintenu pour reculer',2);}
    }
    c.targetLane=c.lane;c.steer=c.steerAngle/.24;
   }
   c.boost=clamp(c.boost+(boosting?-24:brake?15:4)*dt,0,100);c.boosting=boosting;c.braking=brake||c.trafficBraking||!!c.id&&c.speed>(c.targetSpeed??this.curveCap(c.s))+.1;
   c.wear=clamp(c.wear+Math.max(0,c.s-before)/t.length*performance.wear*(boosting?1.25:1),0,1);c.slip=contact.penalty/.5;
   Object.assign(c,pose(t,c.s,c.lane));c.a+=c.headingError;this.driveTrain(c);
   if(c.pitRequested&&c.s>=c.pitEntry){
    if(this.enterPit(c)){c.pitRequested=false;c.speed=70/kph;c.boosting=false;if(!c.id)this.notify('Limiteur activé · votre équipe vous attend',3);}
    else{c.s=c.pitEntry-.02;c.speed=0;Object.assign(c,pose(t,c.s,c.lane));}
   }
   this.crossLine(c,before,dt);
  }
  if(!this.options._reference)this.collisions();
  const rank=this.rank();if(rank<this.rankBefore&&this.options.session!=='qualifying'){this.passes+=this.rankBefore-rank;this.events.push({type:'pass'});}this.rankBefore=rank;
  if(this.requiredStops&&!this.player.pitStops&&!this.player.pitRequested&&!this.pitReminder&&this.player.s>t.length*.85){this.notify('Arrêt obligatoire · choisissez vos pneus puis Box Box !',5);this.pitReminder=true;}
  if(this.player.wear>.67&&!this.player.pitRequested&&!this.warned){this.notify('Pneus usés · pensez aux stands',4);this.warned=true;}
  this.followFinish();
  if(this.cars.every(c=>c.finished)){
   this.state='finished';this.position=this.rank();this.events.push({type:'finish',position:this.position});
  }
 }
 crossLine(c,before,dt){
  const t=this.track;
  const oldLap=Math.floor(before/t.length),newLap=Math.floor(c.s/t.length);
  if(newLap>oldLap&&newLap>(c.highestLine??-1)){
   c.highestLine=newLap;
   const crossing=this.time-Math.max(0,c.s-newLap*t.length)/Math.max(1,c.speed*(c.phase==='track'?RACE_PACE:1));
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
  c.s+=spin.vx*dt*RACE_PACE;c.lane=clamp(c.lane+spin.vy*dt*RACE_PACE,-t.width*.76,t.width*.76);
  c.speed=spin.vx;Object.assign(c,pose(t,c.s,c.lane));c.a+=c.headingError;
  c.throttle=0;c.braking=true;c.boosting=false;c.slip=.8;c.steer=-spin.direction*.3;this.driveTrain(c);this.crossLine(c,before,dt);
  if(spin.elapsed>=spin.duration){c.impactYaw=clamp(spin.angle,-1.3,1.3);c.headingError=angle(c.headingError+spin.angle);c.spin=null;c.cooldown=1.2;if(!c.id)this.notify('Reprenez les gaz et corrigez la direction · FREIN maintenu pour reculer',2);}
 }
 enterPit(c){
  if(this.cars.some(o=>o!==c&&!o.finished&&o.pit&&o.pit.distance<this.track.carLength*2))return false;
  const entry=this.pitPosition({entryLane:c.lane},0,0);if(this.cars.some(o=>o!==c&&!o.finished&&o.pit&&this.contactEnvelope(entry,o)))return false;
  const box=c.pitBox;c.phase='pit';c.pit={base:c.pitEntry,distance:0,entryLane:c.lane,service:0,done:false,stopAt:box.stopAt,boxKey:box.key,lateral:0,duration:null,waitingForTraffic:false};Object.assign(c,entry);c.headingError=c.yawRate=c.steerInput=0;return true;
 }
 pitLateral(p,distance){
  const t=this.track,span=t.carLength*2.3,smooth=u=>{u=clamp(u,0,1);return u*u*(3-2*u);};
  const bay=t.pit.side*t.carWidth*2.6;
  return p.done?bay*(1-smooth((distance-p.stopAt)/(t.carLength*1.5))):bay*smooth((distance-p.stopAt+t.carLength*4.3)/span);
 }
 pitPosition(p,distance,lateral){
  const t=this.track,q=at(t.pit,distance),u=clamp(distance/(t.carLength*4),0,1),offset=lateral+(p.entryLane||0)*(1-u*u*(3-2*u));
  return{x:q.x-Math.sin(q.a)*offset,y:q.y+Math.cos(q.a)*offset,a:q.a};
 }
 pitProgress(distance){
  const t=this.track,p=t.pit,before=t.length-p.entry;
  return distance<=p.timingAt?before*distance/p.timingAt:before+(p.span-before)*(distance-p.timingAt)/(p.length-p.timingAt);
 }
 pitMergeClear(c){
  const p=c.pit,t=this.track;
  return !this.cars.some(o=>o!==c&&!o.finished&&o.pit&&Math.abs(o.pit.lateral||0)<t.carWidth*1.3&&!(o.pit.boxKey===p.boxKey&&o.pit.distance<=p.stopAt-t.carLength*1.8+.01)&&o.speed>=.1&&o.pit.distance>p.stopAt-t.carLength*1.8&&o.pit.distance<p.stopAt+t.carLength*2.7);
 }
 pitStep(c,dt){
  const t=this.track,p=c.pit,before=c.s,gap=t.carLength*1.4;
  if(c.phase==='service'){
   const consumed=p.service<p.duration?Math.min(dt,p.duration-p.service):dt;p.service+=consumed;c.speed=0;
   if(p.service>=p.duration-1e-9){
    p.waitingForTraffic=!this.pitMergeClear(c);
    if(p.waitingForTraffic)p.service+=Math.max(0,dt-consumed);
    else{
     p.done=true;c.tyre=p.newTyre;c.wear=0;c.pitStops++;c.lastPitTime=p.service;c.lastPitAt=p.startedAt+p.service;
     this.pitHistory.push({name:c.name,id:c.id,time:p.service,wheelTime:p.duration,trafficWait:Math.max(0,p.service-p.duration),compound:p.newTyre,at:c.lastPitAt,problems:p.wheels.map((w,i)=>w.problem?{wheel:i,phase:w.problem.phase,delay:w.problem.delay}:null).filter(Boolean)});
     c.phase='pit';c.speed=1;p.distance+=c.speed*Math.max(0,dt-consumed);
     if(!c.id){this.warned=false;this.events.push({type:'tyres'});this.notify('Arrêt : '+c.lastPitTime.toFixed(3)+' s · voie libre !',4);}
    }
   }
  }else{
   // A second team car waits fully in the working lane, behind its own box.
   // Other teams retain the through lane, even during a double stack.
   const bayBusy=!p.done&&this.cars.some(o=>o!==c&&!o.finished&&o.pit&&o.pit.boxKey===p.boxKey&&o.pit.distance>p.stopAt-gap*.5&&o.pit.distance<p.stopAt+t.carLength*2.6);
   const gate=p.stopAt-t.carLength*2;
   c.speed=Math.min(80/t.kphPerUnit,c.speed+15/t.metersPerUnit*dt);
   let next=Math.min(t.pit.length,p.distance+c.speed*dt),holdLateral=false;
   if(bayBusy&&p.distance<=gate)next=Math.min(next,gate);
   if(!p.done)next=Math.min(next,p.stopAt);
   // Yield while still beside the track, then complete the merge. Waiting at
   // the very end would put a stopped car on the racing line and deadlock it.
   if(p.done&&!p.exitCommitted&&next>t.pit.length*.84){
    const exit=p.base+t.pit.span,blocked=this.cars.some(o=>o!==c&&!o.finished&&o.phase==='track'&&(()=>{const ds=mod(o.s-exit+t.length/2,t.length)-t.length/2;return ds>-gap*6&&ds<gap*1.5;})());
    if(blocked)next=Math.min(next,t.pit.length*.84);else p.exitCommitted=true;
   }
   // Open a short insertion gap for a ready car instead of making it wait
   // for the entire pit-lane convoy. Cars already alongside keep priority.
   if(Math.abs(p.lateral||0)<t.carWidth*.7)for(const o of this.cars){
    if(o===c||o.finished||!o.pit||!(o.phase==='service'&&o.pit.service>=o.pit.duration||o.pit.done&&Math.abs(o.pit.lateral)>t.carWidth*.5&&o.pit.distance<o.pit.stopAt+t.carLength*3))continue;
    const release=o.pit.stopAt-t.carLength*1.8;
    if(p.distance<=release&&release-p.distance<t.carLength*6)next=Math.min(next,release);
   }
   // Reserve space against the predicted merge path as well as the current lane.
   for(const o of this.cars){
    if(o===c||o.finished||!o.pit)continue;
    const ahead=o.pit.distance-p.distance,lat=p.done?Math.max(Math.abs(this.pitLateral(p,next)),Math.abs(p.lateral||0)-(next-p.distance)*.9)*t.pit.side:this.pitLateral(p,next);
    if(Math.abs((o.pit.lateral||0)-lat)<t.carWidth*1.9){
     if(ahead>0&&ahead<gap+c.speed*dt)next=Math.min(next,Math.max(p.distance,o.pit.distance-gap));
     else if(ahead<=0&&next-o.pit.distance<gap&&Math.abs((o.pit.lateral||0)-(p.lateral||0))>=t.carWidth*1.9){holdLateral=true;}
    }
   }
   const point=(distance,lateral)=>this.pitPosition(p,distance,lateral);
   const predicted=distance=>{
    const lateral=p.done?Math.max(Math.abs(this.pitLateral(p,distance)),Math.abs(p.lateral||0)-(distance-p.distance)*.9)*t.pit.side:this.pitLateral(p,distance),q=point(distance,holdLateral?p.lateral:lateral),future=point(distance+.05,holdLateral?p.lateral:p.done?Math.max(Math.abs(this.pitLateral(p,distance+.05)),Math.abs(p.lateral||0)-(distance+.05-p.distance)*.9)*t.pit.side:this.pitLateral(p,distance+.05));
    return{...q,a:Math.atan2(future.y-q.y,future.x-q.x)};
   };
   const clear=distance=>{const q=predicted(distance);return this.cars.every(o=>o===c||o.finished||!o.pit||!this.contactEnvelope(q,o));};
   if(next>p.distance&&!clear(next)){let lo=p.distance,hi=next;for(let n=0;n<10;n++){const mid=(lo+hi)/2;if(clear(mid))lo=mid;else hi=mid;}next=lo;}
   const moved=next-p.distance;c.speed=Math.max(0,moved)/dt;p.distance=next;p.lateral=holdLateral?p.lateral:(p.done?Math.max(Math.abs(this.pitLateral(p,next)),Math.abs(p.lateral||0)-moved*.9)*t.pit.side:this.pitLateral(p,next));p.holdLateral=holdLateral;
   if(!p.done&&p.distance>=p.stopAt-1e-9&&!holdLateral)this.beginService(c);
  }
  if(c.phase==='service')p.lateral=this.pitLateral(p,p.distance);
  const position=(distance,lateral)=>this.pitPosition(p,distance,lateral);
  const q=position(p.distance,p.lateral);Object.assign(c,q);
  const look=Math.min(.05,t.pit.length-p.distance),future=p.done?(p.holdLateral?p.lateral:Math.max(Math.abs(this.pitLateral(p,p.distance+look)),Math.abs(p.lateral)-look*.9)*t.pit.side):this.pitLateral(p,p.distance+look),ahead=position(p.distance+look,future);
  if(c.phase==='service')c.a=q.a;
  else if(look>.001)c.a=Math.atan2(ahead.y-q.y,ahead.x-q.x);
  c.s=p.base+this.pitProgress(p.distance);c.steer=0;c.gear=1;c.rpm=c.speed?4500:2800;c.braking=c.phase==='service'||c.speed<.1;
  this.crossLine(c,before,dt);
  if(p.distance>=t.pit.length){
   const exit=p.base+t.pit.span,blocked=this.cars.some(o=>o!==c&&!o.finished&&o.phase==='track'&&Math.abs(mod(o.s-exit+t.length/2,t.length)-t.length/2)<gap*1.5&&Math.abs(o.lane)<t.carWidth*1.3);
   if(blocked&&!p.exitCommitted){p.distance=t.pit.length-.05;c.speed=0;return;}
   c.s=exit;c.phase='track';c.pit=null;c.lane=0;c.targetLane=0;c.laneV=0;c.headingError=c.yawRate=c.steerInput=0;c.cooldown=1;Object.assign(c,pose(t,c.s,0));
  }
 }
 finishCar(c,dt){if(c.finished)return;c.finished=true;c.disqualified=c.pitStops<this.requiredStops;c.finishTime=this.time-Math.min(dt,Math.max(0,c.s-this.track.length*this.options.laps)/Math.max(1,c.speed*(c.phase==='track'?RACE_PACE:1)));c.speed=0;c.boosting=false;}
 prepareTraffic(c,dt){
  const t=this.track,kph=t.kphPerUnit,half=roadHalfWidth(t,c.s);c.trafficBraking=false;c.pitQueue=false;
  if(c.pitRequested){
   const distance=c.pitEntry-c.s,zone=t.carLength*12;
   if(distance>=0&&distance<zone){
    const occupied=this.cars.some(o=>o!==c&&!o.finished&&o.pit&&o.pit.distance<t.carLength*2);
    const target=(occupied?0:70)/kph,cap=Math.sqrt(target*target+2*32/t.metersPerUnit*Math.max(0,distance-t.carLength*1.4)/RACE_PACE);
    if(c.speed>cap){c.speed=Math.max(cap,c.speed-52/t.metersPerUnit*dt);c.trafficBraking=true;}
    const lane=t.pit.side*half*.42,change=(lane-c.lane)*(1-Math.exp(-dt*1.8));
    if(!this.cars.some(o=>o!==c&&!o.finished&&o.phase==='track'&&Math.abs(o.s-c.s)<t.carLength*1.1&&Math.abs(o.lane-c.lane-change)<t.carWidth*1.12))c.lane+=change;
    c.pitQueue=occupied;
   }
  }
  const tangent=at(t,c.s).a,co=Math.cos(tangent),si=Math.sin(tangent),p=pose(t,c.s,c.lane);
  let cap=Infinity;
  for(const o of this.cars){
   if(o===c||o.finished||o.onTrack===false)continue;
   if(o.phase!=='track'&&!o.pit)continue;
   const ds=o.phase==='track'?mod(o.s-c.s+t.length/2,t.length)-t.length/2:(o.x-p.x)*co+(o.y-p.y)*si;
   const lateral=o.phase==='track'?Math.abs(o.lane-c.lane):Math.abs(-(o.x-p.x)*si+(o.y-p.y)*co);
   if(ds<=0||ds>t.carLength*4||lateral>t.carWidth*1.06)continue;
   const free=Math.max(0,ds-t.carLength*1.03-.12),safe=Math.max(0,o.speed)+free*2.5/RACE_PACE;
   cap=Math.min(cap,safe);
   if(free<.35)cap=Math.min(cap,Math.max(0,o.speed));
  }
  if(c.speed>cap){c.speed=Math.max(cap,c.speed-65/t.metersPerUnit*dt);c.trafficBraking=true;}
  c.trafficCap=cap;
 }
 contactEnvelope(a,b){
  const t=this.track,dx=b.x-a.x,dy=b.y-a.y,L=t.carLength*.50,W=t.carWidth*.56,aa=a.a+(a.spin?.angle||0),ba=b.a+(b.spin?.angle||0);
  if(Math.hypot(dx,dy)>t.carLength*1.5)return null;
  let smallest=Infinity,normal=null;
  for(const v of [aa,aa+Math.PI/2,ba,ba+Math.PI/2]){
   let x=Math.cos(v),y=Math.sin(v);const ra=L*Math.abs(Math.cos(aa)*x+Math.sin(aa)*y)+W*Math.abs(-Math.sin(aa)*x+Math.cos(aa)*y),rb=L*Math.abs(Math.cos(ba)*x+Math.sin(ba)*y)+W*Math.abs(-Math.sin(ba)*x+Math.cos(ba)*y),overlap=ra+rb-Math.abs(dx*x+dy*y);
   if(overlap<=0)return null;if(overlap<smallest){smallest=overlap;if(dx*x+dy*y<0){x=-x;y=-y;}normal={x,y};}
  }
  return{...normal,overlap:smallest};
 }
 shiftCar(c,x,y){
  if(c.phase!=='track')return;const a=at(this.track,c.s).a;
  c.s+=x*Math.cos(a)+y*Math.sin(a);c.lane=clamp(c.lane-x*Math.sin(a)+y*Math.cos(a),-roadHalfWidth(this.track,c.s)-1.2,roadHalfWidth(this.track,c.s)+1.2);
  Object.assign(c,pose(this.track,c.s,c.lane));c.a+=c.headingError;
 }
 collisions(){
  const t=this.track,eligible=c=>c.onTrack!==false&&!c.finished&&(c.phase==='track'||c.pit);
  for(let pass=0;pass<12;pass++){let hadContact=false;for(let i=0;i<this.cars.length;i++)for(let j=i+1;j<this.cars.length;j++){
   const a=this.cars[i],b=this.cars[j];if(!eligible(a)||!eligible(b)||a.phase!=='track'&&b.phase!=='track')continue;
   // Cars on Suzuka’s bridge occupy different heights.
   if(t.bridge&&a.phase==='track'&&b.phase==='track'&&Math.abs(mod(b.s-a.s+t.length/2,t.length)-t.length/2)>t.carLength*4)continue;
   const hit=this.contactEnvelope(a,b);if(!hit)continue;hadContact=true;
   const ds=mod(b.s-a.s+t.length/2,t.length)-t.length/2,dl=b.lane-a.lane,rear=ds>=0?a:b,front=ds>=0?b:a;
   const impact=Math.abs(a.speed-b.speed)+Math.abs((a.laneV||0)-(b.laneV||0))*.55,impactKph=impact*t.kphPerUnit,side=dl>=0?1:-1;
   if(!pass&&!a.cooldown&&!b.cooldown){
    const loss=clamp(impactKph/450,.015,.22);a.speed*=1-loss;b.speed*=1-loss;
    for(const [car,sign]of [[a,-side],[b,side]])if(car.phase==='track'){
     car.impactV=sign*Math.min(3.5,impactKph*.018);car.impactYaw=sign*Math.min(.15,impactKph*.0009);car.bump=Math.min(1,impactKph/100);car.flash=.12;car.cooldown=.65;
    }
    if(impactKph>105&&Math.max(a.speed,b.speed)*t.kphPerUnit>100&&a.phase==='track'&&b.phase==='track'&&!a.pitRequested&&!b.pitRequested&&a.spinImmunity<=0&&b.spinImmunity<=0){this.spinCar(a,-side);this.spinCar(b,side);}
    if(!a.id||!b.id){this.contacts++;this.events.push({type:'contact'});}
   }
   if(a.phase==='track'&&b.phase==='track'&&Math.abs(dl)<t.carWidth*.82&&Math.abs(angle((a.headingError||0)-(b.headingError||0)))<.45&&!a.spin&&!b.spin){
    const needed=Math.max(.025,t.carLength*1.04-Math.abs(ds),hit.overlap*1.8+.025);rear.s-=needed;rear.speed=Math.min(rear.speed,Math.max(0,front.speed));Object.assign(rear,pose(t,rear.s,rear.lane));rear.a+=rear.headingError;
   }else{
    const moving=a.phase==='track'&&b.phase==='track',amount=hit.overlap+.025;
    this.shiftCar(a,-hit.x*amount*(moving?.5:a.phase==='track'?1:0),-hit.y*amount*(moving?.5:a.phase==='track'?1:0));
    this.shiftCar(b,hit.x*amount*(moving?.5:b.phase==='track'?1:0),hit.y*amount*(moving?.5:b.phase==='track'?1:0));
    // At a wall the minimum sideways correction may be blocked. Find the
    // nearest free pose along the track instead of oscillating into the barrier.
    if(this.contactEnvelope(a,b))for(const [car,other]of [[a,b],[b,a]])if(car.phase==='track'&&Math.abs(car.lane)>roadHalfWidth(t,car.s)+1.15){
     let free=null;
     for(let d=.25;d<=t.carLength*3&&!free;d+=.25)for(const [ds,dl]of [[-d,0],[d,0],[0,-d],[0,d],[-d*.7,-d*.7],[-d*.7,d*.7],[d*.7,-d*.7],[d*.7,d*.7]]){
      const s=car.s+ds,lane=car.lane+dl;if(Math.abs(lane)>roadHalfWidth(t,s)+1.2)continue;
      const q={...car,s,lane,...pose(t,s,lane)};q.a+=car.headingError;
      if(this.cars.every(o=>o===car||!eligible(o)||t.bridge&&o.phase==='track'&&Math.abs(mod(o.s-s+t.length/2,t.length)-t.length/2)>t.carLength*4||!this.contactEnvelope(q,o))){free=q;break;}
     }
     if(free){car.s=free.s;car.lane=free.lane;car.x=free.x;car.y=free.y;car.a=free.a;car.laneV=0;car.speed=Math.min(car.speed,Math.max(0,other.speed));}
    }
   }
   a.targetLane=a.lane;b.targetLane=b.lane;
  }if(!hadContact)break;}
 }
 drainEvents(){return this.events.splice(0);}
}
const POINTS=[25,18,15,12,10,8,6,4,2,1];
class Championship{
 constructor(circuits,drivers,settings={}){if(!circuits.length||new Set(circuits).size!==circuits.length)throw Error('Choisissez au moins un circuit distinct');this.circuits=[...circuits];this.drivers=drivers.map(d=>({...d}));this.settings={...settings};this.rounds=[];}
 get complete(){return this.rounds.length===this.circuits.length;}
 award(race){if(this.complete||race.state!=='finished'||race.options.session==='qualifying'||race.cars.some(c=>!c.finished))throw Error('Course incomplète');if(race.track.id!==this.circuits[this.rounds.length])throw Error('Manche incorrecte');const result=race.standings().map((c,i)=>({driverId:c.driverId,name:c.name,teamId:c.teamId,color:c.color,colorB:c.colorB,position:i+1,time:c.finishTime,points:c.disqualified?0:POINTS[i]||0,disqualified:!!c.disqualified}));if(result.length!==this.drivers.length||new Set(result.map(c=>c.driverId)).size!==this.drivers.length)throw Error('Plateau incorrect');this.rounds.push({circuit:race.track.id,result});return result;}
 standings(){const rows=this.drivers.map(d=>({...d,points:0,places:Array(this.drivers.length).fill(0)}));for(const round of this.rounds)for(const r of round.result){const d=rows.find(d=>d.driverId===r.driverId);if(d){d.points+=r.points;if(!r.disqualified)d.places[r.position-1]++;}}return rows.sort((a,b)=>{if(a.points!==b.points)return b.points-a.points;for(let i=0;i<a.places.length;i++)if(a.places[i]!==b.places[i])return b.places[i]-a.places[i];return a.name.localeCompare(b.name);});}
 static restore(value){if(!value||!Array.isArray(value.circuits)||!Array.isArray(value.drivers)||!Array.isArray(value.rounds))throw Error('Sauvegarde invalide');const c=new Championship(value.circuits,value.drivers,value.settings);if(value.rounds.length>c.circuits.length)throw Error('Sauvegarde invalide');for(const [i,round] of value.rounds.entries()){if(round.circuit!==c.circuits[i]||!Array.isArray(round.result)||round.result.length!==c.drivers.length||new Set(round.result.map(r=>r.driverId)).size!==c.drivers.length||round.result.some((r,j)=>r.position!==j+1||r.points!==(r.disqualified?0:POINTS[j]||0)||!c.drivers.some(d=>d.driverId===r.driverId)||!Number.isFinite(r.time)))throw Error('Résultats sauvegardés invalides');}c.rounds=value.rounds;return c;}
}
const API={RACE_PACE,Championship,POINTS,Weather,kerbContact,tyrePerformance,recommendedTyre,tyreAdvice,parseLap,roadHalfWidth,Race,makeTrack,freshSeed,wheelState,at,pose,near,random,seedOf,TYRES,clamp,mod,angle};if(typeof module==='object'&&module.exports)module.exports=API;else scope.F1ArcadeCore=API;
})(typeof window==='object'?window:globalThis);
