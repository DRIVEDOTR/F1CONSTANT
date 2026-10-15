/* F1 Constant V39.2 — caméra embarquée aérienne, décor mis en cache et stands animés.
 * Les livrées sont des interprétations Canvas des palettes de la rubrique Écuries.
 * Le décor situe les grands milieux réels ; il ne constitue pas une cartographie.
 */
(()=>{'use strict';
const C=F1ArcadeCore,TAU=Math.PI*2,clamp=C.clamp;
const mix=(hex,amount)=>{hex=/^#[\da-f]{6}$/i.test(hex||'')?hex:'#ec3448';const n=parseInt(hex.slice(1),16),to=amount>0?255:0,a=Math.abs(amount);return '#'+[n>>16,(n>>8)&255,n&255].map(v=>Math.round(v+(to-v)*a).toString(16).padStart(2,'0')).join('');};
function path(points,close=false){const p=new Path2D();points.forEach((q,i)=>i?p.lineTo(q.x,q.y):p.moveTo(q.x,q.y));if(close)p.closePath();return p;}
function round(c,x,y,w,h,r,fill,stroke){c.beginPath();c.roundRect(x,y,w,h,r);if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.lineWidth=1;c.stroke();}}
function line(c,x1,y1,x2,y2,w,color){c.strokeStyle=color;c.lineWidth=w;c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke();}
const TEAM_STYLES={
 ferrari:{body:'#db1737',accent:'#ffda35',secondary:'#f5f1e9',pattern:'ferrari'},
 mclaren:{body:'#ff8700',accent:'#101a23',secondary:'#d8edf0',pattern:'mclaren'},
 mercedes:{body:'#aebcbe',accent:'#00dbbd',secondary:'#152d31',pattern:'mercedes'},
 redbull:{body:'#152550',accent:'#f7d42c',secondary:'#e3243d',pattern:'redbull'},
 racingbulls:{body:'#f3f3ed',accent:'#2d56cf',secondary:'#e63343',pattern:'racingbulls'},
 williams:{body:'#2872e2',accent:'#f3f4e8',secondary:'#113579',pattern:'williams'},
 astonmartin:{body:'#007665',accent:'#c5f34b',secondary:'#123a3c',pattern:'astonmartin'},
 haas:{body:'#e3e6e5',accent:'#eb343c',secondary:'#293138',pattern:'haas'},
 audi:{body:'#bfc5c8',accent:'#f32940',secondary:'#262b30',pattern:'audi'},
 alpine:{body:'#1688cf',accent:'#f485c2',secondary:'#172b40',pattern:'alpine'},
 cadillac:{body:'#343d47',accent:'#d9d5cf',secondary:'#111c26',pattern:'cadillac'}
};
function teamStyle(team,color){const raw=typeof team==='string'?team:team?.id||team?.teamId||team?.name||'',id=String(raw).toLowerCase().replace(/[^a-z]/g,'').replace('redbullracing','redbull').replace('haasfteam','haas');const known=TEAM_STYLES[id];return known||{body:color||'#ec3448',accent:'#e8edef',secondary:mix(color||'#ec3448',-.5),pattern:'custom'};}
function bodyPath(c){c.beginPath();c.moveTo(96,-3);c.bezierCurveTo(58,-6,30,-11,19,-13);c.bezierCurveTo(10,-17,9,-30,-11,-30);c.bezierCurveTo(-35,-31,-43,-13,-76,-9);c.lineTo(-87,-5);c.lineTo(-87,5);c.lineTo(-76,9);c.bezierCurveTo(-43,13,-35,31,-11,30);c.bezierCurveTo(9,30,10,17,19,13);c.bezierCurveTo(30,11,58,6,96,3);c.closePath();}
function livery(c,s){c.save();bodyPath(c);c.clip();c.fillStyle=s.accent;
 switch(s.pattern){
 case'mercedes':for(const side of [-1,1]){c.beginPath();c.moveTo(-74,side*10);c.lineTo(-24,side*29);c.lineTo(14,side*19);c.lineTo(-10,side*17);c.closePath();c.fill();}line(c,18,0,88,0,2,s.secondary);break;
 case'mclaren':for(const side of [-1,1]){c.beginPath();c.moveTo(-85,side*2);c.lineTo(-13,side*24);c.lineTo(10,side*26);c.lineTo(-26,side*29);c.lineTo(-85,side*8);c.closePath();c.fill();}c.fillRect(-34,-4,26,8);break;
 case'redbull':c.fillRect(33,-10,67,20);c.fillStyle=s.secondary;c.fillRect(-80,-6,56,12);for(const side of [-1,1])line(c,-32,side*23,13,side*13,4,s.secondary);break;
 case'racingbulls':c.fillRect(-85,-9,165,18);for(const side of [-1,1])line(c,-60,side*12,5,side*29,8,s.accent);line(c,37,0,80,0,2,s.secondary);break;
 case'astonmartin':for(const side of [-1,1])line(c,-61,side*11,21,side*17,2.5,s.accent);c.fillRect(45,-1,43,2);break;
 case'haas':c.fillRect(-82,-8,95,16);for(const side of [-1,1])line(c,-43,side*23,12,side*16,10,s.secondary);c.fillRect(30,-3,60,6);break;
 case'alpine':for(const side of [-1,1]){c.beginPath();c.moveTo(-67,side*9);c.lineTo(-25,side*30);c.lineTo(11,side*26);c.lineTo(-9,side*10);c.closePath();c.fill();}line(c,30,0,80,0,2,s.accent);break;
 case'audi':c.fillRect(-84,-7,65,14);c.fillRect(24,-12,20,24);for(const side of [-1,1])line(c,-57,side*18,12,side*24,9,s.secondary);break;
 case'williams':line(c,-80,-3,88,-3,2.7,s.accent);line(c,-80,3,88,3,2.7,s.accent);for(const side of [-1,1])line(c,-43,side*25,13,side*18,8,s.secondary);break;
 case'cadillac':c.fillRect(-80,-5,168,10);for(const side of [-1,1])line(c,-54,side*18,12,side*22,5,s.accent);break;
 default:for(const side of [-1,1])line(c,-56,side*15,24,side*12,2,s.secondary);c.fillRect(33,-1.4,55,2.8);
 }c.restore();}
function wheel(c,x,side,tyre,steer=0,offset=0,spin=0,braking=false){const y=side*(38+offset),rear=x<0,w=rear?33:29,h=rear?17:15;c.save();c.translate(x,y);if(!rear)c.rotate(steer*.24);const g=c.createLinearGradient(0,-h/2,0,h/2);g.addColorStop(0,'#070c11');g.addColorStop(.32,'#454c52');g.addColorStop(.55,'#20262d');g.addColorStop(1,'#050a0f');round(c,-w/2,-h/2,w,h,3,g,'#03090e');for(const yy of [-h*.3,h*.3])line(c,-w*.33,yy,w*.33,yy,1,'#626b72');line(c,-6,-h*.46,6,-h*.46,1.5,tyre);line(c,-6,h*.46,6,h*.46,1.5,tyre);c.save();c.beginPath();c.roundRect(-w/2,-h/2,w,h,3);c.clip();for(let i=-2;i<3;i++){const xx=(i*9+spin%9);line(c,xx-2,-h*.24,xx+2,h*.24,1,'#b8c5cc52');}c.restore();if(braking){c.fillStyle='#ff7830';c.beginPath();c.ellipse(0,-side*h*.34,5,1.8,0,0,TAU);c.fill();}c.restore();}
const wheelState=(pit,i)=>C.wheelState(pit,i);
function carArt(c,color,number=1,tyre='#f6d45b',o={}){
 const s=teamStyle(o.team,color);color=s.body;c.save();c.lineJoin='round';c.lineCap='round';c.shadowColor='#06101590';c.shadowBlur=6;c.shadowOffsetX=2;c.shadowOffsetY=4;round(c,-78,-27,156,54,16,'#111a23');c.shadowBlur=0;c.shadowOffsetX=c.shadowOffsetY=0;
 // Les triangles rejoignent les porte-moyeux ; les roues restent distinctes de la coque.
 let i=0;for(const ax of [-58,57])for(const side of [-1,1]){line(c,ax-15,side*13,ax,side*35,2.2,'#9dacb6');line(c,ax+16,side*12,ax,side*35,2.2,'#394b57');line(c,ax+6,side*8,ax+2,side*35,1.3,'#cfdae0');if(!o.noWheels){const ws=o.pit?wheelState(o.pit,i):null;wheel(c,ax+(ws?.phase==='remove'?-29*ws.progress:ws?.phase==='fit'?29*(1-ws.progress):0),side,ws?(ws.new?o.newTyre:o.oldTyre):tyre,o.steer,ws?.offset||0,o.spin||0,o.braking);}i++;}
 c.fillStyle='#1c2931';c.beginPath();c.moveTo(-85,-22);c.lineTo(-36,-33);c.quadraticCurveTo(14,-30,29,-14);c.lineTo(67,-8);c.lineTo(67,8);c.lineTo(29,14);c.quadraticCurveTo(14,30,-36,33);c.lineTo(-85,22);c.closePath();c.fill();for(let y=-20;y<=20;y+=7)line(c,-96,y,-75,y,1.8,'#75838b');
 line(c,-78,-11,-88,-23,3,'#303e4a');line(c,-78,11,-88,23,3,'#303e4a');for(let k=0;k<3;k++)round(c,-100+k*5,-35,5,70,1,k===1?s.accent:'#15212d');round(c,-101,-37,17,3,1,color);round(c,-101,34,17,3,1,color);
 for(let k=0;k<3;k++){c.beginPath();c.moveTo(97-k*5,-42+k*2);c.bezierCurveTo(78-k*3,-24,86-k*3,-8,86-k*3,0);c.bezierCurveTo(86-k*3,8,78-k*3,24,97-k*5,42-k*2);c.lineTo(102-k*5,42-k*2);c.bezierCurveTo(94-k*3,11,94-k*3,-11,102-k*5,-42+k*2);c.closePath();c.fillStyle=k===1?s.accent:k===0?'#111c28':'#66747e';c.fill();}round(c,79,-44,25,3,1,color);round(c,79,41,25,3,1,color);
 const paint=c.createLinearGradient(0,-28,0,28);paint.addColorStop(0,mix(color,-.5));paint.addColorStop(.25,color);paint.addColorStop(.43,mix(color,.32));paint.addColorStop(.52,color);paint.addColorStop(1,mix(color,-.42));bodyPath(c);c.fillStyle=paint;c.fill();c.strokeStyle=mix(color,.4);c.lineWidth=.8;c.stroke();livery(c,s);
 for(const side of [-1,1]){c.fillStyle='#091820';c.beginPath();c.moveTo(4,side*17);c.quadraticCurveTo(-9,side*27,-25,side*22);c.lineTo(-28,side*17);c.closePath();c.fill();line(c,-48,side*12,-30,side*18,1,mix(color,.62));for(let k=0;k<5;k++)line(c,-30-k*3,side*16,-29-k*3,side*23,1.4,'#16252e');}
 c.fillStyle='#030c12';c.beginPath();c.ellipse(0,0,22,11,0,0,TAU);c.fill();c.strokeStyle='#a1adb6';c.lineWidth=1;c.stroke();const helmetColor=o.helmet?.base||'#efc739',helmetAccent=o.helmet?.accent||'#ffffff',helmet=c.createRadialGradient(-6,-3,1,-5,0,10);helmet.addColorStop(0,mix(helmetColor,.55));helmet.addColorStop(.55,helmetColor);helmet.addColorStop(1,mix(helmetColor,-.5));c.fillStyle=helmet;c.beginPath();c.ellipse(-4,0,10,8.5,0,0,TAU);c.fill();c.save();c.beginPath();c.ellipse(-4,0,10,8.5,0,0,TAU);c.clip();line(c,-13,-3,3,-3,2,helmetAccent);line(c,-13,3,3,3,1.5,helmetAccent);c.restore();line(c,2,-6,2,6,3.4,'#10202d');
 // Halo : deux branches courbes fixées derrière le pilote et un montant central avant.
 c.strokeStyle='#182a34';c.lineWidth=3.4;c.beginPath();c.moveTo(-15,-10);c.bezierCurveTo(-9,-17,14,-15,15,0);c.bezierCurveTo(14,15,-9,17,-15,10);c.stroke();line(c,15,0,27,0,3.4,'#182a34');c.strokeStyle='#7b8a92';c.lineWidth=.7;c.beginPath();c.moveTo(-13,-11);c.bezierCurveTo(-5,-15,12,-11,14,-2);c.stroke();line(c,-23,-7,-23,7,3,'#1c2932');round(c,-30,-4,7,8,1,s.accent);c.fillStyle=['racingbulls','haas','audi','mercedes'].includes(s.pattern)?'#15212c':'#fff8ec';c.font='900 9px system-ui';c.textAlign='center';c.save();c.translate(44,0);c.rotate(Math.PI/2);c.fillText(String(number).padStart(2,'0'),0,3);c.restore();c.fillStyle=o.braking?'#ff4356':'#a82c39';c.fillRect(-105,-3,3,6);c.restore();
}
function sprite(color,number,tyre,team,helmet){const b=document.createElement('canvas');b.width=480;b.height=240;const c=b.getContext('2d');c.translate(240,120);c.scale(2,2);carArt(c,color,number,tyre,{team,helmet,noWheels:true});return b;}
function theme(id){const desert=['bahrain','jeddah','lusail','yas-marina','las-vegas'].includes(id),city=['monaco','baku','singapore','madrid','miami','las-vegas'].includes(id),forest=['monza','spa','spielberg','suzuka','montreal','melbourne','hungaroring','interlagos'].includes(id);return{desert,city,forest,ground:desert?'#c6b793':city?'#929d98':'#749663',light:desert?'#ded1ae':'#99b47b',dark:desert?'#ad9c75':'#527851',night:['singapore','las-vegas','jeddah','lusail','bahrain'].includes(id)};}
class Renderer{
 constructor(canvas){this.canvas=canvas;this.ctx=canvas.getContext('2d');this.spriteCache=new Map();this.v=null;this.scene=null;this.trails=[];this.frame=0;this.zoom=1.1;this.smoke=[];this.effectAt=0;this.effectEmission=0;this.visualRandom=C.random(392);this.camera=null;this.track=null;this.lastTime=null;}
 resize(track){const b=this.canvas.getBoundingClientRect(),d=Math.min(window.devicePixelRatio||1,2);if(!b.width||!b.height)return false;const key=[track.id,b.width,b.height,d].join(':');if(this.key===key&&this.track===track)return true;this.key=key;this.canvas.width=Math.round(b.width*d);this.canvas.height=Math.round(b.height*d);this.v={w:b.width,h:b.height,d,s:1,a:0,co:1,si:0,x:0,y:0};if(this.track!==track||!this.scene){this.track=track;this.buildScene(track);this.trails=[];this.camera=null;this.lastTime=null;}return true;}
 updateCamera(race){const p=race.player,t=race.track,v=this.v,dt=this.lastTime===null?1/60:clamp(race.time-this.lastTime,0,.05);this.lastTime=race.time;const advance=p.phase==='service'?0:clamp(p.speed*.13,0,t.carLength*1.1),tx=p.x+Math.cos(p.a)*advance,ty=p.y+Math.sin(p.a)*advance,targetA=-Math.PI/2-(p.phase==='track'?C.at(t,p.s+Math.max(0,p.speed)*.18).a:p.a),px=v.w<500?52:clamp(v.w*.10,88,100),targetScale=px/t.carLength*clamp(Number(this.zoom)||1,.6,1.8)*(p.phase==='service'?1.12:1);if(!this.camera||this.camera.race!==race){this.camera={x:tx,y:ty,a:targetA,s:targetScale,race};this.pitWasActive=false;this.pitEndAt=-Infinity;this.trails=[];this.smoke=[];this.effectAt=race.time;this.effectEmission=0;}const cam=this.camera,k=1-Math.exp(-Math.max(dt,1/180)*9);cam.x+=(tx-cam.x)*k;cam.y+=(ty-cam.y)*k;cam.a+=C.angle(targetA-cam.a)*k*.8;cam.s+=(targetScale-cam.s)*k;v.s=cam.s;v.a=cam.a;v.co=Math.cos(cam.a);v.si=Math.sin(cam.a);v.x=v.w*.5-(cam.x*v.co-cam.y*v.si)*v.s;v.y=v.h*.57-(cam.x*v.si+cam.y*v.co)*v.s;}
 worldTransform(c){const v=this.v;c.setTransform(v.d*v.s*v.co,v.d*v.s*v.si,-v.d*v.s*v.si,v.d*v.s*v.co,v.x*v.d,v.y*v.d);}
 screen(p){const v=this.v;return{x:v.x+(p.x*v.co-p.y*v.si)*v.s,y:v.y+(p.x*v.si+p.y*v.co)*v.s};}
 world(x,y){if(!this.v)return{x:0,y:0};const b=this.canvas.getBoundingClientRect(),v=this.v,px=(x-b.left-v.x)/v.s,py=(y-b.top-v.y)/v.s;return{x:px*v.co+py*v.si,y:-px*v.si+py*v.co};}
 buildScene(t){const margin=400,b=t.bounds,T=theme(t.id),scale=Math.min(3,4096/Math.max(b.maxX-b.minX+margin*2,b.maxY-b.minY+margin*2));this.sceneBounds={x:b.minX-margin,y:b.minY-margin,w:b.maxX-b.minX+margin*2,h:b.maxY-b.minY+margin*2,scale};const B=this.sceneBounds;this.scene=document.createElement('canvas');this.scene.width=Math.ceil(B.w*scale);this.scene.height=Math.ceil(B.h*scale);const c=this.scene.getContext('2d');c.setTransform(scale,0,0,scale,-B.x*scale,-B.y*scale);c.fillStyle=T.ground;c.fillRect(B.x,B.y,B.w,B.h);this.road=path(t.points,true);this.pitRoad=path(t.pit.points);const rnd=C.random(C.seedOf(t.id));const near=(x,y)=>{let d=Infinity;for(let i=0;i<t.points.length;i+=7)d=Math.min(d,Math.hypot(t.points[i].x-x,t.points[i].y-y));for(let i=0;i<t.pit.points.length;i+=10)d=Math.min(d,Math.hypot(t.pit.points[i].x-x,t.pit.points[i].y-y));return d;};
 for(let i=0;i<95;i++){const x=B.x+rnd()*B.w,y=B.y+rnd()*B.h,r=30+rnd()*110;c.fillStyle=i%2?T.light+'48':T.dark+'38';c.beginPath();c.ellipse(x,y,r,r*.7,rnd()*3,0,TAU);c.fill();}
 this.waterPaths=[];this.paintGeography(c,t,rnd);
 const hit=document.createElement('canvas').getContext('2d'),inWater=(x,y)=>this.waterPaths.some(p=>hit.isPointInPath(p,x,y));
 // Le mobilier est peint une fois : aucune recherche d'arbre ou de bâtiment par image.
 for(let i=0;i<1450;i++){const x=B.x+rnd()*B.w,y=B.y+rnd()*B.h;if(near(x,y)<t.width*1.32||inWater(x,y))continue;const urban=T.city;c.save();c.translate(x,y);if(urban&&i%3!==0){c.rotate(Math.floor(rnd()*4)*Math.PI/2);this.building(c,rnd,T);}else if(T.desert){if(i%12===0)this.tree(c,rnd,true);else if(i%4===0){c.fillStyle='#867a5860';c.beginPath();c.ellipse(0,0,3+rnd()*7,2+rnd()*4,rnd()*TAU,0,TAU);c.fill();}}else if(!T.city||i%3===0)this.tree(c,rnd,['melbourne','miami'].includes(t.id));c.restore();}
 if(T.city){for(let s=8;s<t.length;s+=25){for(const side of [-1,1]){const q=C.pose(t,s,side*(t.width*1.6+12+rnd()*14));if(near(q.x,q.y)<t.width*1.4||inWater(q.x,q.y))continue;c.save();c.translate(q.x,q.y);c.rotate(q.a);this.building(c,rnd,T);c.restore();}}}
 const road=this.road,pit=this.pitRoad;c.lineJoin=c.lineCap='round';for(const [color,width]of [[T.city?'#c3c4b4':'#a7ab8e',t.width+20],['#dedfce',t.width+6]]){c.strokeStyle=color;c.lineWidth=width;c.stroke(road);}c.lineCap='butt';c.strokeStyle='#cb514b';c.lineWidth=t.width+5;c.setLineDash([7,7]);c.stroke(road);c.setLineDash([]);c.lineCap='round';c.strokeStyle='#f4f2e5';c.lineWidth=t.width+1;c.stroke(road);c.strokeStyle=T.night?'#303d49':'#424b50';c.lineWidth=t.width-1.6;c.stroke(road);
 // Trait blanc de rive, gomme et texture légère, sans modifier le tracé.
 for(const side of [-1,1]){c.strokeStyle='#f5f1dc';c.lineWidth=.65;c.stroke(path(t.points.map((_,i)=>C.pose(t,i*t.step,side*(t.width/2-1.3))),true));}c.strokeStyle='#88969a35';c.lineWidth=.45;for(let s=0;s<t.length;s+=5){const q=C.pose(t,s,(rnd()-.5)*t.width*.8);line(c,q.x,q.y,q.x+Math.cos(q.a)*2,q.y+Math.sin(q.a)*2,.45,'#a2a8a528');}for(let s=0;s<t.length;s+=18){if(t.bends[Math.floor(s/t.step)%t.points.length]<.008)continue;c.strokeStyle='#10192348';c.lineWidth=1.7;c.stroke(path([0,5,10,15].map(z=>C.pose(t,s+z,-t.width*.10))));}
 c.strokeStyle='#e6e6cc';c.lineWidth=t.width*.42+3;c.stroke(pit);c.strokeStyle='#58666d';c.lineWidth=t.width*.42;c.stroke(pit);c.strokeStyle='#f4db7890';c.lineWidth=.8;c.setLineDash([3,4]);c.stroke(pit);c.setLineDash([]);this.drawGarage(c,t);
 for(let n=0;n<8;n++){const q=C.pose(t,-(Math.floor(n/2)+1)*t.carLength*1.32,(n%2?1:-1)*t.width*.23);c.save();c.translate(q.x,q.y);c.rotate(q.a);c.strokeStyle='#d5e1df8a';c.lineWidth=.9;c.strokeRect(-t.carLength*.50,-t.carWidth*.51,t.carLength,t.carWidth*1.02);c.restore();}
 const q=C.at(t,0);c.save();c.translate(q.x,q.y);c.rotate(q.a);const cell=t.width/10;for(let x=0;x<2;x++)for(let y=0;y<10;y++){c.fillStyle=(x+y)%2?'#eef0e6':'#14212a';c.fillRect(x*cell,-t.width/2+y*cell,cell,cell);}c.restore();
 for(let s=t.length*.10;s<t.length;s+=t.length*.20){const q=C.pose(t,s,t.width*2);if(near(q.x,q.y)<t.width*1.25||inWater(q.x,q.y))continue;c.save();c.translate(q.x,q.y);c.rotate(q.a);round(c,-32,-15,65,30,1,'#243b3255');round(c,-32,-15,61,25,1,'#dce3db');for(let i=0;i<5;i++){c.fillStyle=i%2?'#7b9292':'#b9c7c2';c.fillRect(-29,-12+i*4,55,3);for(let j=0;j<22;j++){c.fillStyle=['#e8b257','#e4e4d8','#ad6262','#40566f'][Math.floor(rnd()*4)];c.fillRect(-28+j*2.5,-11+i*4,1.2,1.4);}}c.restore();}
 if(T.city||T.night){for(let s=0;s<t.length;s+=38){const q=C.pose(t,s,t.width*.75);c.save();c.translate(q.x,q.y);if(T.night){c.fillStyle='#f0e9ab20';c.beginPath();c.arc(0,0,18,0,TAU);c.fill();c.fillStyle='#e5eacb';c.fillRect(-1,-1,2,2);}else{c.fillStyle='#bcc7c9';c.fillRect(-.7,-.7,1.4,1.4);}c.restore();}}
 this.paintLandmarks(c,t);this.buildMinimap(t);this.prepareRoad(t,rnd);
 }
 prepareRoad(t,rnd){
  this.edgePaths=[-1,1].map(side=>path(t.points.map((_,i)=>C.pose(t,i*t.step,side*(t.width/2-1.3))),true));
  this.roadGrain=new Path2D();for(let d=0;d<t.length;d+=5){const q=C.pose(t,d,(rnd()-.5)*t.width*.8);this.roadGrain.moveTo(q.x,q.y);this.roadGrain.lineTo(q.x+Math.cos(q.a)*2,q.y+Math.sin(q.a)*2);}
  this.rubber=new Path2D();for(let d=0;d<t.length;d+=18){if(t.bends[Math.floor(d/t.step)%t.points.length]<.008)continue;[0,5,10,15].forEach((z,i)=>{const q=C.pose(t,d+z,-t.width*.10);if(!i)this.rubber.moveTo(q.x,q.y);else this.rubber.lineTo(q.x,q.y);});}
 }
 drawRoad(t){
  // Vector asphalt, kerbs and markings remain crisp at every camera zoom.
  const c=this.ctx,T=theme(t.id);c.save();c.lineJoin=c.lineCap='round';
  c.strokeStyle='#dedfce';c.lineWidth=t.width+6;c.stroke(this.road);
  c.lineCap='butt';c.strokeStyle='#cb514b';c.lineWidth=t.width+5;c.setLineDash([7,7]);c.stroke(this.road);c.setLineDash([]);
  c.strokeStyle='#f4f2e5';c.lineWidth=t.width+1;c.stroke(this.road);c.strokeStyle=T.night?'#303d49':'#424b50';c.lineWidth=t.width-1.6;c.stroke(this.road);
  c.strokeStyle='#f5f1dc';c.lineWidth=.65;for(const p of this.edgePaths)c.stroke(p);
  c.strokeStyle='#a2a8a528';c.lineWidth=.45;c.stroke(this.roadGrain);c.strokeStyle='#10192348';c.lineWidth=1.4;c.stroke(this.rubber);
  c.strokeStyle='#e6e6cc';c.lineWidth=t.width*.42+3;c.stroke(this.pitRoad);c.strokeStyle='#58666d';c.lineWidth=t.width*.42;c.stroke(this.pitRoad);c.strokeStyle='#f4db7890';c.lineWidth=.8;c.setLineDash([3,4]);c.stroke(this.pitRoad);c.setLineDash([]);
  for(let n=0;n<8;n++){const q=C.pose(t,-(Math.floor(n/2)+1)*t.carLength*1.45,(n%2?1:-1)*t.width*.22);c.save();c.translate(q.x,q.y);c.rotate(q.a);c.strokeStyle='#d5e1df8a';c.lineWidth=.5;c.strokeRect(-t.carLength*.50,-t.carWidth*.51,t.carLength,t.carWidth*1.02);c.restore();}
  const q=C.at(t,0),cell=t.width/10;c.save();c.translate(q.x,q.y);c.rotate(q.a);for(let x=0;x<2;x++)for(let y=0;y<10;y++){c.fillStyle=(x+y)%2?'#eef0e6':'#14212a';c.fillRect(x*cell,-t.width/2+y*cell,cell,cell);}c.restore();this.paintLandmarks(c,t);c.restore();
 }
 effects(race){
  const c=this.ctx,t=race.track,dt=clamp(race.time-this.effectAt,0,.05);this.effectAt=race.time;this.effectEmission+=dt;
  if(this.effectEmission>.045&&race.state==='racing'){
   this.effectEmission=0;
   for(const car of race.cars.filter(c=>c.onTrack!==false&&!c.finished&&(c.spin||(c.id===0&&c.slip>.25)))){
    const a=car.a+(car.spin?.angle||0);for(const side of [-1,1]){
     const x=car.x-Math.sin(a)*side*t.carWidth*.32,y=car.y+Math.cos(a)*side*t.carWidth*.32;
     this.trails.push({x,y,a,age:race.time});if(car.spin&&car.speed>12)this.smoke.push({x:x+(this.visualRandom()-.5)*t.carWidth*.2,y,age:race.time,r:t.carLength*(.10+this.visualRandom()*.05)});
    }
   }
   if(this.trails.length>220)this.trails.splice(0,this.trails.length-220);if(this.smoke.length>96)this.smoke.splice(0,this.smoke.length-96);
  }
  for(const tr of this.trails){const age=race.time-tr.age;if(age<0||age>9)continue;line(c,tr.x,tr.y,tr.x-Math.cos(tr.a)*t.carLength*.32,tr.y-Math.sin(tr.a)*t.carLength*.32,.5,'#10171f55');}
  this.smoke=this.smoke.filter(p=>race.time-p.age<1.25&&race.time>=p.age);
  for(const p of this.smoke){const age=race.time-p.age,r=p.r+age*t.carLength*.35,g=c.createRadialGradient(p.x,p.y,0,p.x,p.y,r);g.addColorStop(0,`rgba(226,235,233,${.36*(1-age/1.25)})`);g.addColorStop(1,'rgba(226,235,233,0)');c.fillStyle=g;c.beginPath();c.arc(p.x,p.y,r,0,TAU);c.fill();}
 }
 paintWater(c,points,color='#478eaa'){const p=path(points,true);this.waterPaths.push(p);c.fillStyle=color;c.fill(p);c.strokeStyle='#b9d4c0';c.lineWidth=4;c.stroke(p);return p;}
 paintGeography(c,t,rnd){const b=t.bounds,w=b.maxX-b.minX,h=b.maxY-b.minY,cx=(b.minX+b.maxX)/2,cy=(b.minY+b.maxY)/2;const oval=(x,y,rx,ry,a=0)=>{const p=new Path2D();p.ellipse(x,y,rx,ry,a,0,TAU);this.waterPaths.push(p);c.fillStyle=t.id==='singapore'?'#254c66':'#4a91a6';c.fill(p);c.strokeStyle='#c6cfb2';c.lineWidth=4;c.stroke(p);};
 if(t.id==='monaco'){
 // Coordonnées du fond local : le Port Hercule longe Tabac / Piscine / Rascasse.
 const p=([x,y])=>({x:(x-t.sourceOrigin.x)*t.sourceScale,y:(y-t.sourceOrigin.y)*t.sourceScale});const harbor=[[357,384],[439,373],[545,312],[805,302],[950,500],[950,950],[385,950],[385,625],[396,551],[372,500],[363,443]].map(p);this.paintWater(c,harbor,'#458fa8');
 c.save();c.clip(this.waterPaths.at(-1));for(let j=0;j<25;j++){const a=p([418+rnd()*220,405+rnd()*225]);line(c,a.x,a.y,a.x+40+rnd()*30,a.y-3,1.2,'#cce9e53b');}for(let k=0;k<3;k++){const q=p([420+k*55,470]);line(c,q.x,q.y,q.x+20,q.y+175,5,'#cec6ad');for(let n=0;n<5;n++){const x=q.x+(n%2?17:-10),y=q.y+n*32;c.save();c.translate(x,y);c.rotate(-.1);c.fillStyle='#173e5280';c.beginPath();c.ellipse(2,3,9,19,0,0,TAU);c.fill();c.fillStyle='#f1eee2';c.beginPath();c.moveTo(0,-19);c.quadraticCurveTo(11,-4,9,16);c.lineTo(-9,16);c.quadraticCurveTo(-11,-4,0,-19);c.fill();round(c,-5,-6,10,14,2,'#adc6d0');c.restore();}}c.restore();
 }else if(t.id==='montreal'){
 // Le circuit occupe une île-parc. Fleuve à l'extérieur, bassin olympique allongé.
 this.paintWater(c,[{x:b.minX-400,y:b.minY-400},{x:b.minX-30,y:b.minY-400},{x:b.minX-32,y:b.maxY+400},{x:b.minX-400,y:b.maxY+400}]);this.paintWater(c,[{x:b.maxX+28,y:b.minY-400},{x:b.maxX+400,y:b.minY-400},{x:b.maxX+400,y:b.maxY+400},{x:b.maxX+28,y:b.maxY+400}]);oval(b.maxX+60,cy,29,h*.44,-.045);
 }else if(t.id==='melbourne')oval(cx-30,cy+10,w*.24,h*.24,-.35);
 else if(t.id==='singapore'){oval(cx,cy+h*.44,w*.25,h*.18,.08);oval(b.maxX+95,cy+70,110,h*.5,-.1);}
 else if(t.id==='yas-marina')oval(cx+5,cy+h*.13,w*.21,h*.16,.15);
 else if(t.id==='jeddah')this.paintWater(c,[{x:b.minX-400,y:b.minY-400},{x:b.minX-35,y:b.minY-400},{x:b.minX-45,y:b.maxY+400},{x:b.minX-400,y:b.maxY+400}]);
 else if(t.id==='miami'){
 // Miami court autour du stade ; sa marina est un décor artificiel, pas l'océan.
 c.save();c.translate(cx,cy-20);round(c,-91,-60,182,120,28,'#d2d1bd');round(c,-72,-43,144,86,18,'#3e7071');round(c,-58,-32,116,64,11,'#5c8b4e');line(c,-2,-30,-2,30,1.5,'#dce9d4');c.restore();oval(b.minX+90,b.maxY+10,48,25,.1);
 }
 }
 paintLandmarks(c,t){if(t.id!=='monaco')return;const p=([x,y])=>({x:(x-t.sourceOrigin.x)*t.sourceScale,y:(y-t.sourceOrigin.y)*t.sourceScale});const q=p([465,500]);c.fillStyle='#def0dfb3';c.textAlign='center';c.font='700 7px system-ui';c.fillText('PORT HERCULE',q.x,q.y);const tube=[];for(let s=t.length*.505;s<t.length*.565;s+=3)tube.push(C.at(t,s));c.lineCap='butt';c.strokeStyle='#172630';c.lineWidth=t.width+8;c.stroke(path(tube));c.strokeStyle='#3b4146';c.lineWidth=t.width-2;c.stroke(path(tube));for(let i=0;i<tube.length;i+=3){const p=tube[i],a=C.at(t,t.length*.505+i*3).a;for(const side of [-1,1]){const x=p.x-Math.sin(a)*side*t.width*.38,y=p.y+Math.cos(a)*side*t.width*.38;line(c,x,y,x+Math.cos(a)*2,y+Math.sin(a)*2,1,'#f8e3aa');}}c.lineCap='round';}
 building(c,rnd,T){const w=13+rnd()*31,h=11+rnd()*25;c.fillStyle='#15253545';c.fillRect(-w/2+5,-h/2+6,w,h);const color=T.night?'#566674':['#d3d1bd','#bdc4bf','#d8c4af'][Math.floor(rnd()*3)];round(c,-w/2,-h/2,w,h,1,color);line(c,-w/2,-h/2,w/2,-h/2,2,T.night?'#a9c2d0':'#f0ebd9');for(let k=-w/2+3;k<w/2-4;k+=7)for(let j=-h/2+4;j<h/2-3;j+=7)round(c,k,j,4,3,0,T.night?(rnd()>.4?'#f2d78b':'#233741'):'#8c9c9c');round(c,-3,-3,8,6,0,T.night?'#40515c':'#a9b5ae');}
 tree(c,rnd,palm){c.fillStyle='#223d3260';c.beginPath();c.ellipse(3,5,10,7,0,0,TAU);c.fill();if(palm){for(let n=0;n<7;n++){c.save();c.rotate(n*TAU/7);c.fillStyle=n%2?'#5c8754':'#355e43';c.beginPath();c.ellipse(4,0,7,2,.3,0,TAU);c.fill();c.restore();}return;}for(let n=0;n<5;n++){const a=n*TAU/5;c.fillStyle=n%2?'#4c754e':'#3c6547';c.beginPath();c.arc(Math.cos(a)*4,Math.sin(a)*4,5+rnd()*2,0,TAU);c.fill();}c.fillStyle='#78915b';c.beginPath();c.arc(-2,-3,3,0,TAU);c.fill();}
 drawGarage(c,t){const q=C.at(t.pit,t.pit.length*.54),side=t.pit.side;c.save();c.translate(q.x-Math.sin(q.a)*side*t.width*.45,q.y+Math.cos(q.a)*side*t.width*.45);c.rotate(q.a);c.fillStyle='#162f3760';c.fillRect(-45,-12,95,31);round(c,-47,-15,94,28,2,'#dce3d9');c.fillStyle='#c94643';c.fillRect(-47,-15,94,5);for(let i=0;i<6;i++){c.fillStyle='#344952';c.fillRect(-44+i*15,-7,12,14);c.fillStyle='#e4c85b';c.fillRect(-43+i*15,8,10,2);}c.fillStyle='#f9e8ad';c.font='900 7px system-ui';c.textAlign='center';c.fillText('PIT LANE',0,-20);c.restore();}
 buildMinimap(t){const map=document.createElement('canvas');map.width=340;map.height=260;const c=map.getContext('2d'),b=t.bounds,s=Math.min(300/(b.maxX-b.minX),210/(b.maxY-b.minY)),x=170-(b.minX+b.maxX)*s/2,y=130-(b.minY+b.maxY)*s/2;this.map={canvas:map,s,x,y};c.setTransform(s,0,0,s,x,y);c.lineJoin='round';c.lineCap='round';c.strokeStyle='#698e9540';c.lineWidth=14/s;c.stroke(this.road);c.strokeStyle='#a9c1bd';c.lineWidth=3/s;c.stroke(this.road);c.strokeStyle='#82d9c590';c.lineWidth=1.5/s;c.stroke(this.pitRoad);}
 bridge(t){if(!t.bridge)return;const c=this.ctx,b=t.bridge,pts=[];for(let s=b.upper-b.half;s<=b.upper+b.half;s+=2)pts.push(C.at(t,s));const p=path(pts);c.lineCap='butt';c.lineJoin='round';c.strokeStyle='#10202480';c.lineWidth=t.width+12;c.stroke(p);c.strokeStyle='#c6cfc5';c.lineWidth=t.width+5;c.stroke(p);c.strokeStyle='#35424a';c.lineWidth=t.width;c.stroke(p);c.lineCap='round';}
 car(t,car,time){const c=this.ctx,v=this.v,length=t.carLength,tyre=(C.TYRES[car.tyre]||C.TYRES.medium).color,team=car.teamId||car.teamName,key=[car.color,team,car.driverNumber||car.id+1,tyre,car.helmet?.base,car.helmet?.accent].join('|');if(!this.spriteCache.has(key))this.spriteCache.set(key,sprite(car.color,car.driverNumber||car.id+1,tyre,team,car.helmet));c.save();c.translate(car.x,car.y);c.rotate(car.a+(car.spin?.angle||0)+(car.bump||0)*Math.sin(time*38)*.015);if(car.boosting){const g=c.createLinearGradient(-length,0,-length*.4,0);g.addColorStop(0,'#76eed500');g.addColorStop(1,'#99ffeb99');c.fillStyle=g;c.fillRect(-length,-length*.18,length*.58,length*.36);}c.scale(length/216,length/216);let i=0;for(const x of [-58,57])for(const side of [-1,1]){const ws=car.phase==='service'?wheelState(car.pit,i):null,old=(C.TYRES[car.pit?.oldTyre]||C.TYRES[car.tyre]).color,fresh=(C.TYRES[car.pit?.newTyre]||C.TYRES[car.tyre]).color;wheel(c,x,side,ws?(ws.new?fresh:old):tyre,car.steer||0,ws?.offset||0,time*car.speed*2.5,car.braking);i++;}c.drawImage(this.spriteCache.get(key),-120,-60,240,120);c.restore();if(car.phase==='service')this.crew(car,t,false);}
 crew(car,t,large=false){const c=this.ctx,s=teamStyle(car.teamId||car.teamName,car.color),pit=car.pit,scale=large?1:t.carLength/216;c.save();if(!large){c.translate(car.x,car.y);c.rotate(car.a);c.scale(scale,scale);}
 const person=(x,y,side,reachX,reachY,working)=>{
  c.save();c.translate(x,y);c.fillStyle='#00000040';c.beginPath();c.ellipse(3,5,11,8,0,0,TAU);c.fill();
  line(c,-5,side*5,-9,side*15,5,'#182630');line(c,5,side*5,10,side*13,5,'#182630');
  round(c,-9,-6,18,17,6,s.body,'#dbe6e522');line(c,-7,-1,reachX-x-4,(reachY-y)*.65,5,s.body);line(c,7,-1,reachX-x+4,(reachY-y)*.65,5,s.body);
  line(c,reachX-x-4,(reachY-y)*.65,reachX-x-2,reachY-y,3,'#bbc6cd');line(c,reachX-x+4,(reachY-y)*.65,reachX-x+2,reachY-y,3,'#bbc6cd');
  c.fillStyle='#e8edf0';c.beginPath();c.ellipse(0,-side*5,6.5,7,0,0,TAU);c.fill();round(c,-5,-side*5-2,10,4,2,'#17242d');c.restore();
 };
 let i=0;for(const x of [-58,57])for(const side of [-1,1]){
  const ws=wheelState(pit,i),busy=ws.turning&&!ws.ready,withdraw=ws.ready?10:busy?0:5,toolY=side*(47+(busy?0:12)),jitter=ws.blocked?Math.sin(pit.service*24)*.7:0;
  person(x-17,side*(77+withdraw),side,x+jitter,toolY,true);
  // The pneumatic gun stays coaxial with the hub; a small recoil marks each retry.
  if(busy){line(c,x+jitter,side*40,x+jitter,side*57,4,'#89969e');round(c,x-4+jitter,side*52-4,8,8,2,'#303e48');line(c,x-5,side*60,x-18,side*86,1.3,'#10161d');c.fillStyle=ws.blocked?'#efad62':'#b4c6ce';c.beginPath();c.arc(x,side*40,2,ws.nutAngle,ws.nutAngle+Math.PI*1.5);c.fill();}
  if(large){
   const moving=ws.phase==='remove'||ws.phase==='fit',wheelY=side*(38+ws.offset),helperX=x+(ws.phase==='remove'?-25:25);
   person(helperX,side*(moving?72+ws.offset*.45:91),side,x,moving?wheelY+side*7:side*76,moving);
   // Used and fresh tyres wait on separate sides of the mechanic, never pop into the hub.
   if(ws.phase==='loosen'||ws.phase==='remove')wheel(c,x+29,side,(C.TYRES[pit.newTyre]||C.TYRES.medium).color,0,25,0);
   if(['fit','tighten','check','ready'].includes(ws.phase))wheel(c,x-29,side,(C.TYRES[pit.oldTyre]||C.TYRES.medium).color,0,25,0);
   c.fillStyle=ws.ready?'#79bfa7':ws.blocked?'#e6b174':'#9aadb5';c.font='600 8px system-ui';c.textAlign='center';c.fillText(ws.ready?'VALIDÉE':ws.stage,x,side>0?116:-110);
  }i++;
 }
 for(const x of [-115,115]){line(c,x,0,x+(x<0?-16:16),0,3,'#a4afb6');round(c,x-4,-7,8,14,2,'#65717b');person(x+(x<0?-28:28),0,1,x,0,true);}c.restore();}
 drawMap(race){const c=this.ctx,v=this.v,m=this.map,w=v.w<500?111:153,h=w*260/340,x=v.w-w-12,y=12;round(c,x,y,w,h+21,10,'#10252be8','#77938b55');c.drawImage(m.canvas,x,y+15,w,h);for(const car of race.cars.filter(c=>c.onTrack!==false)){const qx=x+(car.x*m.s+m.x)/340*w,qy=y+15+(car.y*m.s+m.y)/260*h;c.fillStyle=car.id?car.color:'#ffe593';c.strokeStyle='#081820';c.lineWidth=1;c.beginPath();c.arc(qx,qy,car.id?2.3:3.3,0,TAU);c.fill();c.stroke();}c.font='800 8px system-ui';c.textAlign='left';c.fillStyle='#e2ece2';c.fillText('CIRCUIT COMPLET',x+10,y+13);}
 pitOverlay(race){const p=race.player;if(p.spin){this.pitWasActive=false;this.pitEndAt=-Infinity;this.pitSnapshot=null;return;}const active=p.phase==='service';if(active){this.pitWasActive=true;this.pitEndAt=race.time;this.pitSnapshot=p.pit;}else if(this.pitWasActive){this.pitWasActive=false;this.pitEndAt=race.time;this.pitFinalTime=p.lastPitTime||this.pitSnapshot?.duration||this.pitSnapshot?.service;}
 if(!active&&race.time-this.pitEndAt>1.1)return;if(!this.pitSnapshot)return;const c=this.ctx,v=this.v,mobile=v.w<500,w=Math.min(v.w-24,mobile?370:600),h=Math.min(v.h-44,mobile?300:380),x=(v.w-w)/2,y=v.h-h-14,pit=active?p.pit:{...this.pitSnapshot,service:this.pitFinalTime};round(c,x,y,w,h,13,'#0b2029f2','#88adad70');c.fillStyle=active?'#ffebac':'#78efbd';c.textAlign='left';c.font='800 11px system-ui';c.fillText(active?'ARRÊT AUX STANDS':'FEU VERT · DÉPART',x+14,y+22);c.font='900 27px ui-monospace,monospace';c.textAlign='right';c.fillText((active?pit.service:this.pitFinalTime||0).toFixed(2)+' s',x+w-14,y+32);const artScale=Math.min((w-34)/330,(h-100)/245);c.save();c.translate(v.w/2,y+h*.54);c.scale(artScale,artScale);c.strokeStyle='#e1dca044';c.lineWidth=2;c.strokeRect(-110,-54,220,108);line(c,0,-75,0,75,1,'#c9d8d71c');const old=(C.TYRES[pit.oldTyre]||C.TYRES[p.tyre]).color,fresh=(C.TYRES[pit.newTyre]||C.TYRES[race.nextTyre]||C.TYRES[p.tyre]).color;carArt(c,p.color,p.driverNumber||1,fresh,{team:p.teamId||p.teamName,helmet:p.helmet,pit,oldTyre:old,newTyre:fresh});this.crew({...p,pit},race.track,true);c.restore();c.font='600 9px system-ui';c.fillStyle='#adccc8';c.textAlign='center';const blocked=pit.wheels?.map((_,i)=>({...wheelState(pit,i),i})).find(w=>w.blocked);
 c.fillStyle=blocked?'#ffad92':'#adccc8';c.font='700 10px system-ui';
 c.fillText(active?(blocked?['ARRIÈRE GAUCHE','ARRIÈRE DROITE','AVANT GAUCHE','AVANT DROITE'][blocked.i]+' · '+(blocked.phase==='loosen'?'DESSERRAGE DIFFICILE':'SERRAGE DIFFICILE'):'Le départ attend la validation des quatre roues'):'Chrono arrêté au redémarrage de la monoplace',v.w/2,y+h-12,w-20);}
 render(race){const t=race.track;if(!this.resize(t))return;this.updateCamera(race);const c=this.ctx,v=this.v,p=race.player,B=this.sceneBounds;c.setTransform(v.d,0,0,v.d,0,0);c.fillStyle=theme(t.id).ground;c.fillRect(0,0,v.w,v.h);this.worldTransform(c);c.drawImage(this.scene,B.x,B.y,B.w,B.h);this.drawRoad(t);
 if(p.pitRequested||p.phase!=='track'){c.strokeStyle='#8de5d4';c.lineWidth=1.3/v.s;c.setLineDash([5/v.s,5/v.s]);c.lineDashOffset=-race.time*12/v.s;c.stroke(this.pitRoad);c.setLineDash([]);}
 this.effects(race);
 const below=car=>t.bridge&&Math.abs(C.mod(car.s-t.bridge.lower+t.length/2,t.length)-t.length/2)<t.bridge.half;for(const car of race.cars.filter(c=>c.onTrack!==false))if(below(car)&&!car.finished)this.car(t,car,race.time);this.bridge(t);for(const car of [...race.cars.filter(car=>car.id&&car.onTrack!==false),p])if(!below(car)&&(!car.finished||!car.id))this.car(t,car,race.time);
 c.setTransform(v.d,0,0,v.d,0,0);const q=this.screen(p);c.strokeStyle='#ffeca0cc';c.lineWidth=1.2;c.beginPath();c.arc(q.x,q.y,t.carLength*v.s*.58,0,TAU);c.stroke();round(c,q.x-19,q.y+t.carLength*v.s*.6,38,14,5,'#132d2ee8');c.fillStyle='#fff3b2';c.font='800 8px system-ui';c.textAlign='center';c.fillText('VOUS',q.x,q.y+t.carLength*v.s*.6+10);
 // Les lignes de vitesse restent à l'écran, loin du nez et de la trajectoire.
 if(p.speed>65&&p.phase==='track'){const alpha=clamp((p.speed-65)/100,0,.5);c.strokeStyle=`rgba(224,246,242,${alpha})`;c.lineWidth=1;for(let i=0;i<7;i++){const x=i%2?18+(i*23)%Math.max(25,v.w*.13):v.w-18-(i*21)%Math.max(25,v.w*.13),y=(race.time*p.speed*1.8+i*83)%(v.h+120)-60;line(c,x,y,x,y+15+p.speed*.2,1,c.strokeStyle);}}
 round(c,12,12,Math.min(v.w<500?145:260,v.w-145),29,8,'#102a2be8');c.font='800 10px system-ui';c.fillStyle='#f3f3df';c.textAlign='left';c.fillText((t.city||t.name).toUpperCase(),23,30,Math.min(v.w<500?124:235,v.w-166));this.drawMap(race);
 c.fillStyle='#edf3de9c';c.font='700 8px ui-monospace,monospace';c.textAlign='right';c.fillText('CAMÉRA SUIVIE · '+Math.round(clamp(Number(this.zoom)||1,.6,1.8)*100)+' %',v.w-13,v.h-11);this.pitOverlay(race);
 }
 preview(canvas,color,team){const d=2,w=canvas.clientWidth||320,h=canvas.clientHeight||160;canvas.width=w*d;canvas.height=h*d;const c=canvas.getContext('2d');c.scale(d,d);const g=c.createRadialGradient(w*.48,h*.48,8,w*.5,h*.5,w*.5);g.addColorStop(0,'#2e4b55');g.addColorStop(1,'#10202c');c.fillStyle=g;c.fillRect(0,0,w,h);for(let x=0;x<w;x+=18)line(c,x,0,x,h,1,'#92b4af10');for(let y=0;y<h;y+=18)line(c,0,y,w,y,1,'#92b4af10');c.translate(w/2,h/2);c.rotate(-.20);const scale=Math.min(w/265,h/120);c.scale(scale,scale);carArt(c,color,team?.driverNumber||1,'#f6d45b',{team,helmet:team?.helmet});}
}
window.F1ArcadeRenderer=Renderer;
})();
