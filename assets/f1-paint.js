/* Original canvas racing-car artwork. No manufacturer livery or CAD is reproduced. */
(()=>{'use strict';
function car(c,x,y,a,size,color='#e63444',o={}){c.save();c.translate(x,y);c.rotate(a);c.scale(size/5.8,size/5.8);c.globalAlpha=o.alpha??1;
const shape=(path,fill,stroke)=>{c.beginPath();path();c.fillStyle=fill;c.fill();if(stroke){c.strokeStyle=stroke;c.lineWidth=.018;c.stroke();}};
const line=(x1,y1,x2,y2,w,col)=>{c.strokeStyle=col;c.lineWidth=w;c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke();};
c.shadowColor='#0009';c.shadowBlur=.28;c.shadowOffsetY=.13;
shape(()=>{c.moveTo(-2.6,-.8);c.quadraticCurveTo(-.6,-1.04,.6,-.55);c.lineTo(2.5,-.18);c.lineTo(2.5,.18);c.quadraticCurveTo(-.4,1.05,-2.6,.8);c.closePath();},'#15202b');c.shadowBlur=0;c.shadowOffsetY=0;
// Double wishbones, pushrods and exposed tyres.
for(const xx of [-1.67,1.6])for(const s of [-1,1]){line(xx-.28,s*.28,xx,s*.94,.045,'#88949d');line(xx+.28,s*.28,xx,s*.94,.045,'#25343e');line(xx-.03,s*.2,xx,s*.97,.024,'#c4cdd4');c.save();c.translate(xx,s*1.03);if(xx>0)c.rotate((o.steer||0)*.13);const w=xx<0?.73:.64,h=xx<0?.44:.37;const grad=c.createLinearGradient(0,-h,0,h);grad.addColorStop(0,'#101217');grad.addColorStop(.36,'#353a40');grad.addColorStop(.55,'#14191e');grad.addColorStop(1,'#080c12');c.fillStyle=grad;c.beginPath();c.roundRect(-w/2,-h/2,w,h,.07);c.fill();for(const yy of [-h*.34,h*.34])line(-w*.36,yy,w*.36,yy,.018,'#50575c');line(-.13,-h*.47,.13,-h*.47,.027,o.tyre||'#ffe079');line(-.13,h*.47,.13,h*.47,.027,o.tyre||'#ffe079');if(o.brake){c.fillStyle='#ff5020';c.globalAlpha*=.6;c.fillRect(-.08,-.06,.16,.12);}c.restore();}
// Front and rear multi-element wings and their endplates.
for(let i=0;i<3;i++){c.fillStyle=i===0?'#131c25':i===1?color:'#353f48';c.beginPath();c.moveTo(2.52-i*.13,-1.12+i*.05);c.quadraticCurveTo(2.26-i*.12,-.55,2.34-i*.12,0);c.quadraticCurveTo(2.26-i*.12,.55,2.52-i*.13,1.12-i*.05);c.lineTo(2.63-i*.13,1.12-i*.05);c.quadraticCurveTo(2.48-i*.12,0,2.63-i*.13,-1.12+i*.05);c.closePath();c.fill();}for(const s of [-1,1])line(2.17,s*1.15,2.69,s*1.15,.05,color);
for(let i=0;i<3;i++){c.fillStyle=i===1?color:'#151e28';c.fillRect(-2.51+i*.14,-.96,.12,1.92);}for(const s of [-1,1])line(-2.57,s*.97,-2.13,s*.97,.047,color);line(-2.47,-.65,-2.47,.65,.025,'#a3afba');
const body=c.createLinearGradient(0,-.7,0,.7);body.addColorStop(0,'#541018');body.addColorStop(.3,color);body.addColorStop(.52,'#ffadad');body.addColorStop(.6,color);body.addColorStop(1,'#681a25');if(color!=='#e63444'){body.addColorStop(.52,'#e3f5ff');}
shape(()=>{c.moveTo(2.45,-.07);c.bezierCurveTo(1.9,-.14,1.1,-.22,.6,-.27);c.bezierCurveTo(.28,-.31,.18,-.70,-.15,-.73);c.bezierCurveTo(-.74,-.81,-1.07,-.37,-1.92,-.27);c.lineTo(-2.27,-.16);c.lineTo(-2.27,.16);c.bezierCurveTo(-1.25,.35,-.84,.78,-.15,.73);c.bezierCurveTo(.18,.70,.28,.31,.6,.27);c.bezierCurveTo(1.1,.22,1.9,.14,2.45,.07);c.closePath();},body,'#ffffff44');
for(const s of [-1,1]){shape(()=>{c.moveTo(.16,s*.44);c.quadraticCurveTo(-.13,s*.63,-.47,s*.58);c.lineTo(-.57,s*.45);c.closePath();},'#0b1520');for(let i=0;i<6;i++)line(-.62-i*.09,s*.39,-.68-i*.09,s*.56,.022,'#14222a');line(.7,s*.16,1.92,s*.08,.035,'#f2efe8');}
shape(()=>{c.ellipse(.02,0,.53,.25,0,0,Math.PI*2);},'#070e19','#a2aab1');
// Helmet, visor, carbon halo and camera.
c.fillStyle=o.helmet||'#ffcf48';c.beginPath();c.ellipse(-.06,0,.19,.16,0,0,7);c.fill();line(.02,-.14,.02,.14,.06,'#111e2c');c.strokeStyle='#172833';c.lineWidth=.065;c.beginPath();c.moveTo(.58,0);c.lineTo(.34,0);c.moveTo(.34,0);c.bezierCurveTo(.34,-.35,-.25,-.35,-.35,-.23);c.moveTo(.34,0);c.bezierCurveTo(.34,.35,-.25,.35,-.35,.23);c.stroke();line(-.61,-.22,-.61,.22,.055,'#182736');c.fillStyle='#ffffe4';c.fillRect(-.69,-.10,.14,.20);
c.fillStyle='#fff';c.font='bold .22px sans-serif';c.textAlign='center';c.save();c.translate(1.16,0);c.rotate(Math.PI/2);c.fillText('01',0,.075);c.restore();
// Diffuser strakes and a restrained electrical glow.
for(let i=-2;i<=2;i++)line(-2.55,i*.16,-2.05,i*.15,.035,'#4f5b66');c.fillStyle=o.brake?'#ff303d':'#8b1f2b';c.fillRect(-2.66,-.09,.07,.18);
if(o.boost){const g=c.createLinearGradient(-3.3,0,-2.6,0);g.addColorStop(0,'#54d9ff00');g.addColorStop(1,'#54d9ff99');c.fillStyle=g;c.fillRect(-3.3,-.43,.64,.86);}c.restore();}
window.F1Paint={car};
})();
