/*! Three.js MIT License
The MIT License

Copyright © 2010-2025 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(()=>{/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/var yr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sh=0,fl=1,oh=2,ml=1,lh=2,Mi=3,Bi=0,Ot=1,Vt=2,zi=0,Mr=1,gl=2,vl=3,xl=4,uh=5,$i=100,ch=101,hh=102,dh=103,ph=104,fh=200,mh=201,gh=202,vh=203,is=204,rs=205,xh=206,_h=207,Eh=208,yh=209,bh=210,Mh=211,Sh=212,Th=213,wh=214,as=0,ns=1,ss=2,Sr=3,os=4,ls=5,us=6,cs=7,hs=0,Ah=1,Rh=2,ki=0,Ch=1,Lh=2,Ph=3,ds=4,Uh=5,Ih=6,Dh=7,_l=300,Tr=301,wr=302,ps=303,fs=304,Ka=306,Ar=1e3,Qi=1001,ms=1002,Xt=1003,Nh=1004,Ja=1005,ui=1006,gs=1007,er=1008,ci=1009,El=1010,yl=1011,ha=1012,vs=1013,tr=1014,hi=1015,da=1016,xs=1017,_s=1018,pa=1020,bl=35902,Ml=35899,Sl=1021,Tl=1022,ti=1023,fa=1026,ma=1027,Es=1028,ys=1029,wl=1030,bs=1031,Ms=1033,$a=33776,Qa=33777,en=33778,tn=33779,Ss=35840,Ts=35841,ws=35842,As=35843,Rs=36196,Cs=37492,Ls=37496,Ps=37808,Us=37809,Is=37810,Ds=37811,Ns=37812,Os=37813,Fs=37814,Bs=37815,zs=37816,ks=37817,Vs=37818,Hs=37819,Gs=37820,Ws=37821,qs=36492,Xs=36494,js=36495,Ys=36283,Zs=36284,Ks=36285,Js=36286,rn=2300,$s=2301,Qs=2302,Al=2400,Rl=2401,Cl=2402,Oh=3200,Fh=3201,eo=0,Bh=1,Vi="",bt="srgb",Rr="srgb-linear",an="linear",rt="srgb",Cr=7680,Ll=519,zh=512,kh=513,Vh=514,Pl=515,Hh=516,Gh=517,Wh=518,qh=519,Ul=35044,Il="300 es",di=2e3,nn=2001,ir=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dl=1234567,ga=Math.PI/180,va=180/Math.PI;function rr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(It[e&255]+It[e>>8&255]+It[e>>16&255]+It[e>>24&255]+"-"+It[t&255]+It[t>>8&255]+"-"+It[t>>16&15|64]+It[t>>24&255]+"-"+It[i&63|128]+It[i>>8&255]+"-"+It[i>>16&255]+It[i>>24&255]+It[r&255]+It[r>>8&255]+It[r>>16&255]+It[r>>24&255]).toLowerCase()}function We(e,t,i){return Math.max(t,Math.min(i,e))}function to(e,t){return(e%t+t)%t}function Xh(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function jh(e,t,i){return e!==t?(i-e)/(t-e):0}function xa(e,t,i){return(1-i)*e+i*t}function Yh(e,t,i,r){return xa(e,t,1-Math.exp(-i*r))}function Zh(e,t=1){return t-Math.abs(to(e,t*2)-t)}function Kh(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function Jh(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function $h(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Qh(e,t){return e+Math.random()*(t-e)}function ed(e){return e*(.5-Math.random())}function td(e){e!==void 0&&(Dl=e);let t=Dl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function id(e){return e*ga}function rd(e){return e*va}function ad(e){return(e&e-1)===0&&e!==0}function nd(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function sd(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function od(e,t,i,r,a){let n=Math.cos,s=Math.sin,o=n(i/2),l=s(i/2),u=n((t+r)/2),c=s((t+r)/2),d=n((t-r)/2),p=s((t-r)/2),m=n((r-t)/2),v=s((r-t)/2);switch(a){case"XYX":e.set(o*c,l*d,l*p,o*u);break;case"YZY":e.set(l*p,o*c,l*d,o*u);break;case"ZXZ":e.set(l*d,l*p,o*c,o*u);break;case"XZX":e.set(o*c,l*v,l*m,o*u);break;case"YXY":e.set(l*m,o*c,l*v,o*u);break;case"ZYZ":e.set(l*v,l*m,o*c,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Lr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Ft(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var ld={DEG2RAD:ga,RAD2DEG:va,generateUUID:rr,clamp:We,euclideanModulo:to,mapLinear:Xh,inverseLerp:jh,lerp:xa,damp:Yh,pingpong:Zh,smoothstep:Kh,smootherstep:Jh,randInt:$h,randFloat:Qh,randFloatSpread:ed,seededRandom:td,degToRad:id,radToDeg:rd,isPowerOfTwo:ad,ceilPowerOfTwo:nd,floorPowerOfTwo:sd,setQuaternionFromProperEuler:od,normalize:Ft,denormalize:Lr},se=class Xc{constructor(t=0,i=0){Xc.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=We(this.x,t.x,i.x),this.y=We(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=We(this.x,t,i),this.y=We(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(We(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(We(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Hi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],u=i[r+2],c=i[r+3],d=a[n+0],p=a[n+1],m=a[n+2],v=a[n+3];if(s===0){e[t+0]=o,e[t+1]=l,e[t+2]=u,e[t+3]=c;return}if(s===1){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(c!==v||o!==d||l!==p||u!==m){let g=1-s,f=o*d+l*p+u*m+c*v,h=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){let S=Math.sqrt(w),I=Math.atan2(S,f*h);g=Math.sin(g*I)/S,s=Math.sin(s*I)/S}let x=s*h;if(o=o*g+d*x,l=l*g+p*x,u=u*g+m*x,c=c*g+v*x,g===1-s){let S=1/Math.sqrt(o*o+l*l+u*u+c*c);o*=S,l*=S,u*=S,c*=S}}e[t]=o,e[t+1]=l,e[t+2]=u,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],u=i[r+3],c=a[n],d=a[n+1],p=a[n+2],m=a[n+3];return e[t]=s*m+u*c+o*p-l*d,e[t+1]=o*m+u*d+l*c-s*p,e[t+2]=l*m+u*p+s*d-o*c,e[t+3]=u*m-s*c-o*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),u=s(r/2),c=s(a/2),d=o(i/2),p=o(r/2),m=o(a/2);switch(n){case"XYZ":this._x=d*u*c+l*p*m,this._y=l*p*c-d*u*m,this._z=l*u*m+d*p*c,this._w=l*u*c-d*p*m;break;case"YXZ":this._x=d*u*c+l*p*m,this._y=l*p*c-d*u*m,this._z=l*u*m-d*p*c,this._w=l*u*c+d*p*m;break;case"ZXY":this._x=d*u*c-l*p*m,this._y=l*p*c+d*u*m,this._z=l*u*m+d*p*c,this._w=l*u*c-d*p*m;break;case"ZYX":this._x=d*u*c-l*p*m,this._y=l*p*c+d*u*m,this._z=l*u*m-d*p*c,this._w=l*u*c+d*p*m;break;case"YZX":this._x=d*u*c+l*p*m,this._y=l*p*c+d*u*m,this._z=l*u*m-d*p*c,this._w=l*u*c-d*p*m;break;case"XZY":this._x=d*u*c-l*p*m,this._y=l*p*c-d*u*m,this._z=l*u*m+d*p*c,this._w=l*u*c+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],u=t[6],c=t[10],d=i+s+c;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-o)*p,this._y=(a-l)*p,this._z=(n-r)*p}else if(i>s&&i>c){let p=2*Math.sqrt(1+i-s-c);this._w=(u-o)/p,this._x=.25*p,this._y=(r+n)/p,this._z=(a+l)/p}else if(s>c){let p=2*Math.sqrt(1+s-i-c);this._w=(a-l)/p,this._x=(r+n)/p,this._y=.25*p,this._z=(o+u)/p}else{let p=2*Math.sqrt(1+c-i-s);this._w=(n-r)/p,this._x=(a+l)/p,this._y=(o+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,u=t._w;return this._x=i*u+n*s+r*l-a*o,this._y=r*u+n*o+a*s-i*l,this._z=a*u+n*l+i*o-r*s,this._w=n*u-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,a=this._z,n=this._w,s=n*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=n,this._x=i,this._y=r,this._z=a,this;let o=1-s*s;if(o<=Number.EPSILON){let p=1-t;return this._w=p*n+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}let l=Math.sqrt(o),u=Math.atan2(l,s),c=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=n*c+this._w*d,this._x=i*c+this._x*d,this._y=r*c+this._y*d,this._z=a*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class jc{constructor(t=0,i=0,r=0){jc.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Nl.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Nl.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,u=2*(s*a-o*r),c=2*(o*i-n*a),d=2*(n*r-s*i);return this.x=i+l*u+s*d-o*c,this.y=r+l*c+o*u-n*d,this.z=a+l*d+n*c-s*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=We(this.x,t.x,i.x),this.y=We(this.y,t.y,i.y),this.z=We(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=We(this.x,t,i),this.y=We(this.y,t,i),this.z=We(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(We(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(We(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},io=new L,Nl=new Hi,Xe=class Yc{constructor(t,i,r,a,n,s,o,l,u){Yc.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,u)}set(t,i,r,a,n,s,o,l,u){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=i,c[4]=n,c[5]=l,c[6]=r,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],u=r[1],c=r[4],d=r[7],p=r[2],m=r[5],v=r[8],g=a[0],f=a[3],h=a[6],w=a[1],x=a[4],S=a[7],I=a[2],E=a[5],T=a[8];return n[0]=s*g+o*w+l*I,n[3]=s*f+o*x+l*E,n[6]=s*h+o*S+l*T,n[1]=u*g+c*w+d*I,n[4]=u*f+c*x+d*E,n[7]=u*h+c*S+d*T,n[2]=p*g+m*w+v*I,n[5]=p*f+m*x+v*E,n[8]=p*h+m*S+v*T,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8];return i*s*c-i*o*u-r*n*c+r*o*l+a*n*u-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8],d=c*s-o*u,p=o*l-c*n,m=u*n-s*l,v=i*d+r*p+a*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/v;return t[0]=d*g,t[1]=(a*u-c*r)*g,t[2]=(o*r-a*s)*g,t[3]=p*g,t[4]=(c*i-a*l)*g,t[5]=(a*n-o*i)*g,t[6]=m*g,t[7]=(r*l-u*i)*g,t[8]=(s*i-r*n)*g,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),u=Math.sin(n);return this.set(r*l,r*u,-r*(l*s+u*o)+s+t,-a*u,a*l,-a*(-u*s+l*o)+o+i,0,0,1),this}scale(t,i){return this.premultiply(ro.makeScale(t,i)),this}rotate(t){return this.premultiply(ro.makeRotation(-t)),this}translate(t,i){return this.premultiply(ro.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ro=new Xe;function Ol(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function sn(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function ud(){let e=sn("canvas");return e.style.display="block",e}var Fl={};function _a(e){e in Fl||(Fl[e]=!0,console.warn(e))}function cd(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var Bl=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zl=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hd(){let e={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===rt&&(a.r=Si(a.r),a.g=Si(a.g),a.b=Si(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===rt&&(a.r=Pr(a.r),a.g=Pr(a.g),a.b=Pr(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Vi?an:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return _a("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return _a("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Rr]:{primaries:t,whitePoint:r,transfer:an,toXYZ:Bl,fromXYZ:zl,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:t,whitePoint:r,transfer:rt,toXYZ:Bl,fromXYZ:zl,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}}),e}var et=hd();function Si(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Pr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Ur,dd=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ur===void 0&&(Ur=sn("canvas")),Ur.width=e.width,Ur.height=e.height;let r=Ur.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ur}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=sn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Si(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Si(t[i]/255)*255):t[i]=Si(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},pd=0,ao=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=rr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(no(r[n].image)):a.push(no(r[n]))}else a=no(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function no(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?dd.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var fd=0,so=new L,Kt=class es extends ir{constructor(t=es.DEFAULT_IMAGE,i=es.DEFAULT_MAPPING,r=Qi,a=Qi,n=ui,s=er,o=ti,l=ci,u=es.DEFAULT_ANISOTROPY,c=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=rr(),this.name="",this.source=new ao(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(so).x}get height(){return this.source.getSize(so).y}get depth(){return this.source.getSize(so).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_l)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ar:t.x=t.x-Math.floor(t.x);break;case Qi:t.x=t.x<0?0:1;break;case ms:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ar:t.y=t.y-Math.floor(t.y);break;case Qi:t.y=t.y<0?0:1;break;case ms:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null,Kt.DEFAULT_MAPPING=_l,Kt.DEFAULT_ANISOTROPY=1;var st=class Zc{constructor(t=0,i=0,r=0,a=1){Zc.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],u=s[8],c=s[1],d=s[5],p=s[9],m=s[2],v=s[6],g=s[10];if(Math.abs(l-c)<.01&&Math.abs(u-m)<.01&&Math.abs(p-v)<.01){if(Math.abs(l+c)<.1&&Math.abs(u+m)<.1&&Math.abs(p+v)<.1&&Math.abs(o+d+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let h=(o+1)/2,w=(d+1)/2,x=(g+1)/2,S=(l+c)/4,I=(u+m)/4,E=(p+v)/4;return h>w&&h>x?h<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(h),a=S/r,n=I/r):w>x?w<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(w),r=S/a,n=E/a):x<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(x),r=I/n,a=E/n),this.set(r,a,n,i),this}let f=Math.sqrt((v-p)*(v-p)+(u-m)*(u-m)+(c-l)*(c-l));return Math.abs(f)<.001&&(f=1),this.x=(v-p)/f,this.y=(u-m)/f,this.z=(c-l)/f,this.w=Math.acos((o+d+g-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=We(this.x,t.x,i.x),this.y=We(this.y,t.y,i.y),this.z=We(this.z,t.z,i.z),this.w=We(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=We(this.x,t,i),this.y=We(this.y,t,i),this.z=We(this.z,t,i),this.w=We(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(We(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},md=class extends ir{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);let r={width:e,height:t,depth:i.depth},a=new Kt(r);this.textures=[];let n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:ui,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ao(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ar=class extends md{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},kl=class extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},gd=class extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gi=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,ii):ii.fromBufferAttribute(a,n),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),on.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),on.copy(i.boundingBox)),on.applyMatrix4(e.matrixWorld),this.union(on)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),ln.subVectors(this.max,Ea),Ir.subVectors(e.a,Ea),Dr.subVectors(e.b,Ea),Nr.subVectors(e.c,Ea),Wi.subVectors(Dr,Ir),qi.subVectors(Nr,Dr),nr.subVectors(Ir,Nr);let t=[0,-Wi.z,Wi.y,0,-qi.z,qi.y,0,-nr.z,nr.y,Wi.z,0,-Wi.x,qi.z,0,-qi.x,nr.z,0,-nr.x,-Wi.y,Wi.x,0,-qi.y,qi.x,0,-nr.y,nr.x,0];return!oo(t,Ir,Dr,Nr,ln)||(t=[1,0,0,0,1,0,0,0,1],!oo(t,Ir,Dr,Nr,ln))?!1:(un.crossVectors(Wi,qi),t=[un.x,un.y,un.z],oo(t,Ir,Dr,Nr,ln))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ti=[new L,new L,new L,new L,new L,new L,new L,new L],ii=new L,on=new Gi,Ir=new L,Dr=new L,Nr=new L,Wi=new L,qi=new L,nr=new L,Ea=new L,ln=new L,un=new L,sr=new L;function oo(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){sr.fromArray(e,n);let o=a.x*Math.abs(sr.x)+a.y*Math.abs(sr.y)+a.z*Math.abs(sr.z),l=t.dot(sr),u=i.dot(sr),c=r.dot(sr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}var vd=new Gi,ya=new L,lo=new L,Or=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):vd.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);let t=ya.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ya,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(lo)),this.expandByPoint(ya.copy(e.center).sub(lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wi=new L,uo=new L,cn=new L,Xi=new L,co=new L,hn=new L,ho=new L,dn=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){uo.copy(e).add(t).multiplyScalar(.5),cn.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(uo);let a=e.distanceTo(t)*.5,n=-this.direction.dot(cn),s=Xi.dot(this.direction),o=-Xi.dot(cn),l=Xi.lengthSq(),u=Math.abs(1-n*n),c,d,p,m;if(u>0)if(c=n*o-s,d=n*s-o,m=a*u,c>=0)if(d>=-m)if(d<=m){let v=1/u;c*=v,d*=v,p=c*(c+n*d+2*s)+d*(n*c+d+2*o)+l}else d=a,c=Math.max(0,-(n*d+s)),p=-c*c+d*(d+2*o)+l;else d=-a,c=Math.max(0,-(n*d+s)),p=-c*c+d*(d+2*o)+l;else d<=-m?(c=Math.max(0,-(-n*a+s)),d=c>0?-a:Math.min(Math.max(-a,-o),a),p=-c*c+d*(d+2*o)+l):d<=m?(c=0,d=Math.min(Math.max(-a,-o),a),p=d*(d+2*o)+l):(c=Math.max(0,-(n*a+s)),d=c>0?a:Math.min(Math.max(-a,-o),a),p=-c*c+d*(d+2*o)+l);else d=n>0?-a:a,c=Math.max(0,-(n*d+s)),p=-c*c+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(uo).addScaledVector(cn,d),p}intersectSphere(e,t){wi.subVectors(e.center,this.origin);let i=wi.dot(this.direction),r=wi.dot(wi)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(a=(e.min.y-d.y)*u,n=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,n=(e.min.y-d.y)*u),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),c>=0?(s=(e.min.z-d.z)*c,o=(e.max.z-d.z)*c):(s=(e.max.z-d.z)*c,o=(e.min.z-d.z)*c),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,r,a){co.subVectors(t,e),hn.subVectors(i,e),ho.crossVectors(co,hn);let n=this.direction.dot(ho),s;if(n>0){if(r)return null;s=1}else if(n<0)s=-1,n=-n;else return null;Xi.subVectors(this.origin,e);let o=s*this.direction.dot(hn.crossVectors(Xi,hn));if(o<0)return null;let l=s*this.direction.dot(co.cross(Xi));if(l<0||o+l>n)return null;let u=-s*Xi.dot(ho);return u<0?null:this.at(u/n,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class pl{constructor(t,i,r,a,n,s,o,l,u,c,d,p,m,v,g,f){pl.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,u,c,d,p,m,v,g,f)}set(t,i,r,a,n,s,o,l,u,c,d,p,m,v,g,f){let h=this.elements;return h[0]=t,h[4]=i,h[8]=r,h[12]=a,h[1]=n,h[5]=s,h[9]=o,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=p,h[3]=m,h[7]=v,h[11]=g,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pl().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){let i=this.elements,r=t.elements,a=1/Fr.setFromMatrixColumn(t,0).length(),n=1/Fr.setFromMatrixColumn(t,1).length(),s=1/Fr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),u=Math.sin(a),c=Math.cos(n),d=Math.sin(n);if(t.order==="XYZ"){let p=s*c,m=s*d,v=o*c,g=o*d;i[0]=l*c,i[4]=-l*d,i[8]=u,i[1]=m+v*u,i[5]=p-g*u,i[9]=-o*l,i[2]=g-p*u,i[6]=v+m*u,i[10]=s*l}else if(t.order==="YXZ"){let p=l*c,m=l*d,v=u*c,g=u*d;i[0]=p+g*o,i[4]=v*o-m,i[8]=s*u,i[1]=s*d,i[5]=s*c,i[9]=-o,i[2]=m*o-v,i[6]=g+p*o,i[10]=s*l}else if(t.order==="ZXY"){let p=l*c,m=l*d,v=u*c,g=u*d;i[0]=p-g*o,i[4]=-s*d,i[8]=v+m*o,i[1]=m+v*o,i[5]=s*c,i[9]=g-p*o,i[2]=-s*u,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let p=s*c,m=s*d,v=o*c,g=o*d;i[0]=l*c,i[4]=v*u-m,i[8]=p*u+g,i[1]=l*d,i[5]=g*u+p,i[9]=m*u-v,i[2]=-u,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let p=s*l,m=s*u,v=o*l,g=o*u;i[0]=l*c,i[4]=g-p*d,i[8]=v*d+m,i[1]=d,i[5]=s*c,i[9]=-o*c,i[2]=-u*c,i[6]=m*d+v,i[10]=p-g*d}else if(t.order==="XZY"){let p=s*l,m=s*u,v=o*l,g=o*u;i[0]=l*c,i[4]=-d,i[8]=u*c,i[1]=p*d+g,i[5]=s*c,i[9]=m*d-v,i[2]=v*d-m,i[6]=o*c,i[10]=g*d+p}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xd,t,_d)}lookAt(t,i,r){let a=this.elements;return jt.subVectors(t,i),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ji.crossVectors(r,jt),ji.lengthSq()===0&&(Math.abs(r.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ji.crossVectors(r,jt)),ji.normalize(),pn.crossVectors(jt,ji),a[0]=ji.x,a[4]=pn.x,a[8]=jt.x,a[1]=ji.y,a[5]=pn.y,a[9]=jt.y,a[2]=ji.z,a[6]=pn.z,a[10]=jt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],u=r[12],c=r[1],d=r[5],p=r[9],m=r[13],v=r[2],g=r[6],f=r[10],h=r[14],w=r[3],x=r[7],S=r[11],I=r[15],E=a[0],T=a[4],C=a[8],b=a[12],y=a[1],R=a[5],N=a[9],z=a[13],D=a[2],V=a[6],k=a[10],q=a[14],H=a[3],ee=a[7],pe=a[11],Pe=a[15];return n[0]=s*E+o*y+l*D+u*H,n[4]=s*T+o*R+l*V+u*ee,n[8]=s*C+o*N+l*k+u*pe,n[12]=s*b+o*z+l*q+u*Pe,n[1]=c*E+d*y+p*D+m*H,n[5]=c*T+d*R+p*V+m*ee,n[9]=c*C+d*N+p*k+m*pe,n[13]=c*b+d*z+p*q+m*Pe,n[2]=v*E+g*y+f*D+h*H,n[6]=v*T+g*R+f*V+h*ee,n[10]=v*C+g*N+f*k+h*pe,n[14]=v*b+g*z+f*q+h*Pe,n[3]=w*E+x*y+S*D+I*H,n[7]=w*T+x*R+S*V+I*ee,n[11]=w*C+x*N+S*k+I*pe,n[15]=w*b+x*z+S*q+I*Pe,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],u=t[13],c=t[2],d=t[6],p=t[10],m=t[14],v=t[3],g=t[7],f=t[11],h=t[15];return v*(+n*l*d-a*u*d-n*o*p+r*u*p+a*o*m-r*l*m)+g*(+i*l*m-i*u*p+n*s*p-a*s*m+a*u*c-n*l*c)+f*(+i*u*d-i*o*m-n*s*d+r*s*m+n*o*c-r*u*c)+h*(-a*o*c-i*l*d+i*o*p+a*s*d-r*s*p+r*l*c)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8],d=t[9],p=t[10],m=t[11],v=t[12],g=t[13],f=t[14],h=t[15],w=d*f*u-g*p*u+g*l*m-o*f*m-d*l*h+o*p*h,x=v*p*u-c*f*u-v*l*m+s*f*m+c*l*h-s*p*h,S=c*g*u-v*d*u+v*o*m-s*g*m-c*o*h+s*d*h,I=v*d*l-c*g*l-v*o*p+s*g*p+c*o*f-s*d*f,E=i*w+r*x+a*S+n*I;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=w*T,t[1]=(g*p*n-d*f*n-g*a*m+r*f*m+d*a*h-r*p*h)*T,t[2]=(o*f*n-g*l*n+g*a*u-r*f*u-o*a*h+r*l*h)*T,t[3]=(d*l*n-o*p*n-d*a*u+r*p*u+o*a*m-r*l*m)*T,t[4]=x*T,t[5]=(c*f*n-v*p*n+v*a*m-i*f*m-c*a*h+i*p*h)*T,t[6]=(v*l*n-s*f*n-v*a*u+i*f*u+s*a*h-i*l*h)*T,t[7]=(s*p*n-c*l*n+c*a*u-i*p*u-s*a*m+i*l*m)*T,t[8]=S*T,t[9]=(v*d*n-c*g*n-v*r*m+i*g*m+c*r*h-i*d*h)*T,t[10]=(s*g*n-v*o*n+v*r*u-i*g*u-s*r*h+i*o*h)*T,t[11]=(c*o*n-s*d*n-c*r*u+i*d*u+s*r*m-i*o*m)*T,t[12]=I*T,t[13]=(c*g*a-v*d*a+v*r*p-i*g*p-c*r*f+i*d*f)*T,t[14]=(v*o*a-s*g*a-v*r*l+i*g*l+s*r*f-i*o*f)*T,t[15]=(s*d*a-c*o*a+c*r*l-i*d*l-s*r*p+i*o*p)*T,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,u=n*s,c=n*o;return this.set(u*s+r,u*o-a*l,u*l+a*o,0,u*o+a*l,c*o+r,c*l-a*s,0,u*l-a*o,c*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,u=n+n,c=s+s,d=o+o,p=n*u,m=n*c,v=n*d,g=s*c,f=s*d,h=o*d,w=l*u,x=l*c,S=l*d,I=r.x,E=r.y,T=r.z;return a[0]=(1-(g+h))*I,a[1]=(m+S)*I,a[2]=(v-x)*I,a[3]=0,a[4]=(m-S)*E,a[5]=(1-(p+h))*E,a[6]=(f+w)*E,a[7]=0,a[8]=(v+x)*T,a[9]=(f-w)*T,a[10]=(1-(p+g))*T,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements,n=Fr.set(a[0],a[1],a[2]).length(),s=Fr.set(a[4],a[5],a[6]).length(),o=Fr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),t.x=a[12],t.y=a[13],t.z=a[14],ri.copy(this);let l=1/n,u=1/s,c=1/o;return ri.elements[0]*=l,ri.elements[1]*=l,ri.elements[2]*=l,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=c,ri.elements[9]*=c,ri.elements[10]*=c,i.setFromRotationMatrix(ri),r.x=n,r.y=s,r.z=o,this}makePerspective(t,i,r,a,n,s,o=di,l=!1){let u=this.elements,c=2*n/(i-t),d=2*n/(r-a),p=(i+t)/(i-t),m=(r+a)/(r-a),v,g;if(l)v=n/(s-n),g=s*n/(s-n);else if(o===di)v=-(s+n)/(s-n),g=-2*s*n/(s-n);else if(o===nn)v=-s/(s-n),g=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=d,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=g,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=di,l=!1){let u=this.elements,c=2/(i-t),d=2/(r-a),p=-(i+t)/(i-t),m=-(r+a)/(r-a),v,g;if(l)v=1/(s-n),g=s/(s-n);else if(o===di)v=-2/(s-n),g=-(s+n)/(s-n);else if(o===nn)v=-1/(s-n),g=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=p,u[1]=0,u[5]=d,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=v,u[14]=g,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},Fr=new L,ri=new ct,xd=new L(0,0,0),_d=new L(1,1,1),ji=new L,pn=new L,jt=new L,Vl=new ct,Hl=new Hi,Ai=class Kc{constructor(t=0,i=0,r=0,a=Kc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],u=a[5],c=a[9],d=a[2],p=a[6],m=a[10];switch(i){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-We(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(We(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-We(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vl,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Hl.setFromEuler(this),this.setFromQuaternion(Hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ai.DEFAULT_ORDER="XYZ";var po=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ed=0,Gl=new L,Br=new Hi,Ri=new ct,fn=new L,ba=new L,yd=new L,bd=new Hi,Wl=new L(1,0,0),ql=new L(0,1,0),Xl=new L(0,0,1),jl={type:"added"},Md={type:"removed"},zr={type:"childadded",child:null},fo={type:"childremoved",child:null},Bt=class ts extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ts.DEFAULT_UP.clone();let t=new L,i=new Ai,r=new Hi,a=new L(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ct},normalMatrix:{value:new Xe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=ts.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ts.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Br.setFromAxisAngle(t,i),this.quaternion.multiply(Br),this}rotateOnWorldAxis(t,i){return Br.setFromAxisAngle(t,i),this.quaternion.premultiply(Br),this}rotateX(t){return this.rotateOnAxis(Wl,t)}rotateY(t){return this.rotateOnAxis(ql,t)}rotateZ(t){return this.rotateOnAxis(Xl,t)}translateOnAxis(t,i){return Gl.copy(t).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Wl,t)}translateY(t){return this.translateOnAxis(ql,t)}translateZ(t){return this.translateOnAxis(Xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?fn.copy(t):fn.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(ba,fn,this.up):Ri.lookAt(fn,ba,this.up),this.quaternion.setFromRotationMatrix(Ri),a&&(Ri.extractRotation(a.matrixWorld),Br.setFromRotationMatrix(Ri),this.quaternion.premultiply(Br.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jl),zr.child=t,this.dispatchEvent(zr),zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Md),fo.child=t,this.dispatchEvent(fo),fo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jl),zr.child=t,this.dispatchEvent(zr),zr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,t,yd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){let d=l[u];n(t.shapes,d)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),u=s(t.textures),c=s(t.images),d=s(t.shapes),p=s(t.skeletons),m=s(t.animations),v=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),c.length>0&&(r.images=c),d.length>0&&(r.shapes=d),p.length>0&&(r.skeletons=p),m.length>0&&(r.animations=m),v.length>0&&(r.nodes=v)}return r.object=a,r;function s(o){let l=[];for(let u in o){let c=o[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}};Bt.DEFAULT_UP=new L(0,1,0),Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ai=new L,Ci=new L,mo=new L,Li=new L,kr=new L,Vr=new L,Yl=new L,go=new L,vo=new L,xo=new L,_o=new st,Eo=new st,yo=new st,Ma=class ua{constructor(t=new L,i=new L,r=new L){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),ai.subVectors(t,i),a.cross(ai);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){ai.subVectors(a,i),Ci.subVectors(r,i),mo.subVectors(t,i);let s=ai.dot(ai),o=ai.dot(Ci),l=ai.dot(mo),u=Ci.dot(Ci),c=Ci.dot(mo),d=s*u-o*o;if(d===0)return n.set(0,0,0),null;let p=1/d,m=(u*l-o*c)*p,v=(s*c-o*l)*p;return n.set(1-m-v,v,m)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Li.x),l.addScaledVector(s,Li.y),l.addScaledVector(o,Li.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return _o.setScalar(0),Eo.setScalar(0),yo.setScalar(0),_o.fromBufferAttribute(t,i),Eo.fromBufferAttribute(t,r),yo.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(_o,n.x),s.addScaledVector(Eo,n.y),s.addScaledVector(yo,n.z),s}static isFrontFacing(t,i,r,a){return ai.subVectors(r,i),Ci.subVectors(t,i),ai.cross(Ci).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ai.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ua.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ua.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return ua.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return ua.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ua.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;kr.subVectors(a,r),Vr.subVectors(n,r),go.subVectors(t,r);let l=kr.dot(go),u=Vr.dot(go);if(l<=0&&u<=0)return i.copy(r);vo.subVectors(t,a);let c=kr.dot(vo),d=Vr.dot(vo);if(c>=0&&d<=c)return i.copy(a);let p=l*d-c*u;if(p<=0&&l>=0&&c<=0)return s=l/(l-c),i.copy(r).addScaledVector(kr,s);xo.subVectors(t,n);let m=kr.dot(xo),v=Vr.dot(xo);if(v>=0&&m<=v)return i.copy(n);let g=m*u-l*v;if(g<=0&&u>=0&&v<=0)return o=u/(u-v),i.copy(r).addScaledVector(Vr,o);let f=c*v-m*d;if(f<=0&&d-c>=0&&m-v>=0)return Yl.subVectors(n,a),o=(d-c)/(d-c+(m-v)),i.copy(a).addScaledVector(Yl,o);let h=1/(f+g+p);return s=g*h,o=p*h,i.copy(r).addScaledVector(kr,s).addScaledVector(Vr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},mn={h:0,s:0,l:0};function bo(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=to(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=bo(n,a,e+1/3),this.g=bo(n,a,e),this.b=bo(n,a,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=bt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let i=Zl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return et.workingToColorSpace(Dt.copy(this),e),Math.round(We(Dt.r*255,0,255))*65536+Math.round(We(Dt.g*255,0,255))*256+Math.round(We(Dt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Dt.copy(this),t);let i=Dt.r,r=Dt.g,a=Dt.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,u=(s+n)/2;if(s===n)o=0,l=0;else{let c=n-s;switch(l=u<=.5?c/(n+s):c/(2-n-s),n){case i:o=(r-a)/c+(r<a?6:0);break;case r:o=(a-i)/c+2;break;case a:o=(i-r)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=bt){et.workingToColorSpace(Dt.copy(this),e);let t=Dt.r,i=Dt.g,r=Dt.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(mn);let i=xa(Yi.h,mn.h,t),r=xa(Yi.s,mn.s,t),a=xa(Yi.l,mn.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dt=new Ye;Ye.NAMES=Zl;var Sd=0,or=class extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Mr,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=is,this.blendDst=rs,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==is&&(i.blendSrc=this.blendSrc),this.blendDst!==rs&&(i.blendDst=this.blendDst),this.blendEquation!==$i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Sa=class extends or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=hs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Mt=new L,gn=new se,Td=0,ni=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Td++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ul,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix3(e),this.setXY(t,gn.x,gn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Lr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),a=Ft(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ul&&(e.usage=this.usage),e}},Kl=class extends ni{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Jl=class extends ni{constructor(e,t,i){super(new Uint32Array(e),t,i)}},tt=class extends ni{constructor(e,t,i){super(new Float32Array(e),t,i)}},wd=0,Jt=new ct,Mo=new Bt,Hr=new L,Yt=new Gi,Ta=new Gi,Rt=new L,Lt=class Jc extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ol(t)?Jl:Kl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new Xe().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Jt.makeRotationFromQuaternion(t),this.applyMatrix4(Jt),this}rotateX(t){return Jt.makeRotationX(t),this.applyMatrix4(Jt),this}rotateY(t){return Jt.makeRotationY(t),this.applyMatrix4(Jt),this}rotateZ(t){return Jt.makeRotationZ(t),this.applyMatrix4(Jt),this}translate(t,i,r){return Jt.makeTranslation(t,i,r),this.applyMatrix4(Jt),this}scale(t,i,r){return Jt.makeScale(t,i,r),this.applyMatrix4(Jt),this}lookAt(t){return Mo.lookAt(t),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new tt(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];Yt.setFromBufferAttribute(n),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Or);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let r=this.boundingSphere.center;if(Yt.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];Ta.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(Yt.min,Ta.min),Yt.expandByPoint(Rt),Rt.addVectors(Yt.max,Ta.max),Yt.expandByPoint(Rt)):(Yt.expandByPoint(Ta.min),Yt.expandByPoint(Ta.max))}Yt.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)Rt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(Rt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Rt.fromBufferAttribute(o,u),l&&(Hr.fromBufferAttribute(t,u),Rt.add(Hr)),a=Math.max(a,r.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*r.count),4));let s=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<r.count;C++)o[C]=new L,l[C]=new L;let u=new L,c=new L,d=new L,p=new se,m=new se,v=new se,g=new L,f=new L;function h(C,b,y){u.fromBufferAttribute(r,C),c.fromBufferAttribute(r,b),d.fromBufferAttribute(r,y),p.fromBufferAttribute(n,C),m.fromBufferAttribute(n,b),v.fromBufferAttribute(n,y),c.sub(u),d.sub(u),m.sub(p),v.sub(p);let R=1/(m.x*v.y-v.x*m.y);isFinite(R)&&(g.copy(c).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(R),f.copy(d).multiplyScalar(m.x).addScaledVector(c,-v.x).multiplyScalar(R),o[C].add(g),o[b].add(g),o[y].add(g),l[C].add(f),l[b].add(f),l[y].add(f))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let C=0,b=w.length;C<b;++C){let y=w[C],R=y.start,N=y.count;for(let z=R,D=R+N;z<D;z+=3)h(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let x=new L,S=new L,I=new L,E=new L;function T(C){I.fromBufferAttribute(a,C),E.copy(I);let b=o[C];x.copy(b),x.sub(I.multiplyScalar(I.dot(b))).normalize(),S.crossVectors(E,b);let y=S.dot(l[C])<0?-1:1;s.setXYZW(C,x.x,x.y,x.z,y)}for(let C=0,b=w.length;C<b;++C){let y=w[C],R=y.start,N=y.count;for(let z=R,D=R+N;z<D;z+=3)T(t.getX(z+0)),T(t.getX(z+1)),T(t.getX(z+2))}}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ni(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let p=0,m=r.count;p<m;p++)r.setXYZ(p,0,0,0);let a=new L,n=new L,s=new L,o=new L,l=new L,u=new L,c=new L,d=new L;if(t)for(let p=0,m=t.count;p<m;p+=3){let v=t.getX(p+0),g=t.getX(p+1),f=t.getX(p+2);a.fromBufferAttribute(i,v),n.fromBufferAttribute(i,g),s.fromBufferAttribute(i,f),c.subVectors(s,n),d.subVectors(a,n),c.cross(d),o.fromBufferAttribute(r,v),l.fromBufferAttribute(r,g),u.fromBufferAttribute(r,f),o.add(c),l.add(c),u.add(c),r.setXYZ(v,o.x,o.y,o.z),r.setXYZ(g,l.x,l.y,l.z),r.setXYZ(f,u.x,u.y,u.z)}else for(let p=0,m=i.count;p<m;p+=3)a.fromBufferAttribute(i,p+0),n.fromBufferAttribute(i,p+1),s.fromBufferAttribute(i,p+2),c.subVectors(s,n),d.subVectors(a,n),c.cross(d),r.setXYZ(p+0,c.x,c.y,c.z),r.setXYZ(p+1,c.x,c.y,c.z),r.setXYZ(p+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Rt.fromBufferAttribute(t,i),Rt.normalize(),t.setXYZ(i,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function t(o,l){let u=o.array,c=o.itemSize,d=o.normalized,p=new u.constructor(l.length*c),m=0,v=0;for(let g=0,f=l.length;g<f;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*c;for(let h=0;h<c;h++)p[v++]=u[m++]}return new ni(p,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Jc,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],u=t(l,r);i.setAttribute(o,u)}let n=this.morphAttributes;for(let o in n){let l=[],u=n[o];for(let c=0,d=u.length;c<d;c++){let p=u[c],m=t(p,r);l.push(m)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let u=s[o];i.addGroup(u.start,u.count,u.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let u=r[l];t.data.attributes[l]=u.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],c=[];for(let d=0,p=u.length;d<p;d++){let m=u[d];c.push(m.toJSON(t.data))}c.length>0&&(a[l]=c,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let u in a){let c=a[u];this.setAttribute(u,c.clone(i))}let n=t.morphAttributes;for(let u in n){let c=[],d=n[u];for(let p=0,m=d.length;p<m;p++)c.push(d[p].clone(i));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let u=0,c=s.length;u<c;u++){let d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$l=new ct,lr=new dn,vn=new Or,Ql=new L,xn=new L,_n=new L,En=new L,So=new L,yn=new L,eu=new L,bn=new L,xt=class extends Bt{constructor(e=new Lt,t=new Sa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){yn.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let u=s[o],c=a[o];u!==0&&(So.fromBufferAttribute(c,e),n?yn.addScaledVector(So,u):yn.addScaledVector(So.sub(t),u))}t.add(yn)}return t}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vn.copy(i.boundingSphere),vn.applyMatrix4(a),lr.copy(e.ray).recast(e.near),!(vn.containsPoint(lr.origin)===!1&&(lr.intersectSphere(vn,Ql)===null||lr.origin.distanceToSquared(Ql)>(e.far-e.near)**2))&&($l.copy(a).invert(),lr.copy(e.ray).applyMatrix4($l),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,lr)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,c=a.attributes.normal,d=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(n))for(let m=0,v=d.length;m<v;m++){let g=d[m],f=n[g.materialIndex],h=Math.max(g.start,p.start),w=Math.min(s.count,Math.min(g.start+g.count,p.start+p.count));for(let x=h,S=w;x<S;x+=3){let I=s.getX(x),E=s.getX(x+1),T=s.getX(x+2);r=Mn(this,f,e,i,l,u,c,I,E,T),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,p.start),v=Math.min(s.count,p.start+p.count);for(let g=m,f=v;g<f;g+=3){let h=s.getX(g),w=s.getX(g+1),x=s.getX(g+2);r=Mn(this,n,e,i,l,u,c,h,w,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let m=0,v=d.length;m<v;m++){let g=d[m],f=n[g.materialIndex],h=Math.max(g.start,p.start),w=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let x=h,S=w;x<S;x+=3){let I=x,E=x+1,T=x+2;r=Mn(this,f,e,i,l,u,c,I,E,T),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let g=m,f=v;g<f;g+=3){let h=g,w=g+1,x=g+2;r=Mn(this,n,e,i,l,u,c,h,w,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function Ad(e,t,i,r,a,n,s,o){let l;if(t.side===Ot?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===Bi,o),l===null)return null;bn.copy(o),bn.applyMatrix4(e.matrixWorld);let u=i.ray.origin.distanceTo(bn);return u<i.near||u>i.far?null:{distance:u,point:bn.clone(),object:e}}function Mn(e,t,i,r,a,n,s,o,l,u){e.getVertexPosition(o,xn),e.getVertexPosition(l,_n),e.getVertexPosition(u,En);let c=Ad(e,t,i,r,xn,_n,En,eu);if(c){let d=new L;Ma.getBarycoord(eu,xn,_n,En,d),a&&(c.uv=Ma.getInterpolatedAttribute(a,o,l,u,d,new se)),n&&(c.uv1=Ma.getInterpolatedAttribute(n,o,l,u,d,new se)),s&&(c.normal=Ma.getInterpolatedAttribute(s,o,l,u,d,new L),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let p={a:o,b:l,c:u,normal:new L,materialIndex:0};Ma.getNormal(xn,_n,En,p.normal),c.face=p,c.barycoord=d}return c}var ur=class $c extends Lt{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],u=[],c=[],d=[],p=0,m=0;v("z","y","x",-1,-1,r,i,t,s,n,0),v("z","y","x",1,-1,r,i,-t,s,n,1),v("x","z","y",1,1,t,r,i,a,s,2),v("x","z","y",1,-1,t,r,-i,a,s,3),v("x","y","z",1,-1,t,i,r,a,n,4),v("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(d,2));function v(g,f,h,w,x,S,I,E,T,C,b){let y=S/T,R=I/C,N=S/2,z=I/2,D=E/2,V=T+1,k=C+1,q=0,H=0,ee=new L;for(let pe=0;pe<k;pe++){let Pe=pe*R-z;for(let Oe=0;Oe<V;Oe++){let it=Oe*y-N;ee[g]=it*w,ee[f]=Pe*x,ee[h]=D,u.push(ee.x,ee.y,ee.z),ee[g]=0,ee[f]=0,ee[h]=E>0?1:-1,c.push(ee.x,ee.y,ee.z),d.push(Oe/T),d.push(1-pe/C),q+=1}}for(let pe=0;pe<C;pe++)for(let Pe=0;Pe<T;Pe++){let Oe=p+Pe+V*pe,it=p+Pe+V*(pe+1),$e=p+(Pe+1)+V*(pe+1),Y=p+(Pe+1)+V*pe;l.push(Oe,it,Y),l.push(it,$e,Y),H+=6}o.addGroup(m,H,b),m+=H,p+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Gr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone():Array.isArray(a)?t[i][r]=a.slice():t[i][r]=a}}return t}function zt(e){let t={};for(let i=0;i<e.length;i++){let r=Gr(e[i]);for(let a in r)t[a]=r[a]}return t}function Rd(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function tu(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:et.workingColorSpace}var Cd={clone:Gr,merge:zt},Ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zi=class extends or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ld,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=Rd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},iu=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ki=new L,ru=new se,au=new se,Ht=class extends iu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,ru,au),t.subVectors(au,ru)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ga*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Wr=-90,qr=1,Ud=class extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ht(Wr,qr,e,t);r.layers=this.layers,this.add(r);let a=new Ht(Wr,qr,e,t);a.layers=this.layers,this.add(a);let n=new Ht(Wr,qr,e,t);n.layers=this.layers,this.add(n);let s=new Ht(Wr,qr,e,t);s.layers=this.layers,this.add(s);let o=new Ht(Wr,qr,e,t);o.layers=this.layers,this.add(o);let l=new Ht(Wr,qr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===nn)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,u]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,n),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,o),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(c,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},nu=class extends Kt{constructor(e=[],t=Tr,i,r,a,n,s,o,l,u){super(e,t,i,r,a,n,s,o,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Id=class extends ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new nu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ur(5,5,5),a=new Zi({name:"CubemapFromEquirect",uniforms:Gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:zi});a.uniforms.tEquirect.value=t;let n=new xt(r,a),s=t.minFilter;return t.minFilter===er&&(t.minFilter=ui),new Ud(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}},pi=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dd={type:"move"},To=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,i),f=this._getHandJoint(l,v);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let u=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],d=u.position.distanceTo(c.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Dd)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new pi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},wo=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Nd=class extends Kt{constructor(e=null,t=1,i=1,r,a,n,s,o,l=Xt,u=Xt,c,d){super(null,n,s,o,l,u,r,a,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},su=class extends ni{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xr=new ct,ou=new ct,Sn=[],lu=new Gi,Od=new ct,wa=new xt,Aa=new Or,Fd=class extends xt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new su(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Od)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xr),lu.copy(e.boundingBox).applyMatrix4(Xr),this.boundingBox.union(lu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Or),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xr),Aa.copy(e.boundingSphere).applyMatrix4(Xr),this.boundingSphere.union(Aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,n=e*a+1;for(let s=0;s<i.length;s++)i[s]=r[n+s]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(wa.geometry=this.geometry,wa.material=this.material,wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Aa.copy(this.boundingSphere),Aa.applyMatrix4(i),e.ray.intersectsSphere(Aa)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Xr),ou.multiplyMatrices(i,Xr),wa.matrixWorld=ou,wa.raycast(e,Sn);for(let n=0,s=Sn.length;n<s;n++){let o=Sn[n];o.instanceId=a,o.object=this,t.push(o)}Sn.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new su(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Nd(new Float32Array(r*this.count),r,this.count,Es,hi));let a=this.morphTexture.source.data.data,n=0;for(let l=0;l<i.length;l++)n+=i[l];let s=this.geometry.morphTargetsRelative?1:1-n,o=r*e;a[o]=s,a.set(i,o+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ao=new L,Bd=new L,zd=new Xe,Pi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Ao.subVectors(i,t).cross(Bd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ao),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||zd.getNormalMatrix(e),r=this.coplanarPoint(Ao).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},cr=new Or,kd=new se(.5,.5),Tn=new L,Ro=class{constructor(e=new Pi,t=new Pi,i=new Pi,r=new Pi,a=new Pi,n=new Pi){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=di,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],u=a[4],c=a[5],d=a[6],p=a[7],m=a[8],v=a[9],g=a[10],f=a[11],h=a[12],w=a[13],x=a[14],S=a[15];if(r[0].setComponents(l-n,p-u,f-m,S-h).normalize(),r[1].setComponents(l+n,p+u,f+m,S+h).normalize(),r[2].setComponents(l+s,p+c,f+v,S+w).normalize(),r[3].setComponents(l-s,p-c,f-v,S-w).normalize(),i)r[4].setComponents(o,d,g,x).normalize(),r[5].setComponents(l-o,p-d,f-g,S-x).normalize();else if(r[4].setComponents(l-o,p-d,f-g,S-x).normalize(),t===di)r[5].setComponents(l+o,p+d,f+g,S+x).normalize();else if(t===nn)r[5].setComponents(o,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){cr.center.set(0,0,0);let t=kd.distanceTo(e.center);return cr.radius=.7071067811865476+t,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Tn.x=r.normal.x>0?e.max.x:e.min.x,Tn.y=r.normal.y>0?e.max.y:e.min.y,Tn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tn)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},uu=class extends or{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wn=new L,An=new L,cu=new ct,Ra=new dn,Rn=new Or,Co=new L,hu=new L,Vd=class extends Bt{constructor(e=new Lt,t=new uu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)wn.fromBufferAttribute(t,r-1),An.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=wn.distanceTo(An);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rn.copy(i.boundingSphere),Rn.applyMatrix4(r),Rn.radius+=a,e.ray.intersectsSphere(Rn)===!1)return;cu.copy(r).invert(),Ra.copy(e.ray).applyMatrix4(cu);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=this.isLineSegments?2:1,u=i.index,c=i.attributes.position;if(u!==null){let d=Math.max(0,n.start),p=Math.min(u.count,n.start+n.count);for(let m=d,v=p-1;m<v;m+=l){let g=u.getX(m),f=u.getX(m+1),h=Cn(this,e,Ra,o,g,f,m);h&&t.push(h)}if(this.isLineLoop){let m=u.getX(p-1),v=u.getX(d),g=Cn(this,e,Ra,o,m,v,p-1);g&&t.push(g)}}else{let d=Math.max(0,n.start),p=Math.min(c.count,n.start+n.count);for(let m=d,v=p-1;m<v;m+=l){let g=Cn(this,e,Ra,o,m,m+1,m);g&&t.push(g)}if(this.isLineLoop){let m=Cn(this,e,Ra,o,p-1,d,p-1);m&&t.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function Cn(e,t,i,r,a,n,s){let o=e.geometry.attributes.position;if(wn.fromBufferAttribute(o,a),An.fromBufferAttribute(o,n),i.distanceSqToSegment(wn,An,Co,hu)>r)return;Co.applyMatrix4(e.matrixWorld);let l=t.ray.origin.distanceTo(Co);if(!(l<t.near||l>t.far))return{distance:l,point:hu.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}var du=new L,pu=new L,Hd=class extends Vd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)du.fromBufferAttribute(t,r),pu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+du.distanceTo(pu);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ca=class extends Kt{constructor(e,t,i,r,a,n,s,o,l){super(e,t,i,r,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},fu=class extends Kt{constructor(e,t,i=tr,r,a,n,s=Xt,o=Xt,l,u=fa,c=1){if(u!==fa&&u!==ma)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:c};super(d,r,a,n,s,o,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ao(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},mu=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},La=class Qc extends Lt{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let u=this;a=Math.floor(a),n=Math.floor(n);let c=[],d=[],p=[],m=[],v=0,g=[],f=r/2,h=0;w(),s===!1&&(t>0&&x(!0),i>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(p,3)),this.setAttribute("uv",new tt(m,2));function w(){let S=new L,I=new L,E=0,T=(i-t)/r;for(let C=0;C<=n;C++){let b=[],y=C/n,R=y*(i-t)+t;for(let N=0;N<=a;N++){let z=N/a,D=z*l+o,V=Math.sin(D),k=Math.cos(D);I.x=R*V,I.y=-y*r+f,I.z=R*k,d.push(I.x,I.y,I.z),S.set(V,T,k).normalize(),p.push(S.x,S.y,S.z),m.push(z,1-y),b.push(v++)}g.push(b)}for(let C=0;C<a;C++)for(let b=0;b<n;b++){let y=g[b][C],R=g[b+1][C],N=g[b+1][C+1],z=g[b][C+1];(t>0||b!==0)&&(c.push(y,R,z),E+=3),(i>0||b!==n-1)&&(c.push(R,N,z),E+=3)}u.addGroup(h,E,0),h+=E}function x(S){let I=v,E=new se,T=new L,C=0,b=S===!0?t:i,y=S===!0?1:-1;for(let N=1;N<=a;N++)d.push(0,f*y,0),p.push(0,y,0),m.push(.5,.5),v++;let R=v;for(let N=0;N<=a;N++){let z=N/a*l+o,D=Math.cos(z),V=Math.sin(z);T.x=b*V,T.y=f*y,T.z=b*D,d.push(T.x,T.y,T.z),p.push(0,y,0),E.x=D*.5+.5,E.y=V*.5*y+.5,m.push(E.x,E.y),v++}for(let N=0;N<a;N++){let z=I+N,D=R+N;S===!0?c.push(D,D+1,z):c.push(D+1,D,z),C+=3}u.addGroup(h,C,S===!0?1:2),h+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let u=i[r],c=i[r+1]-u,d=(n-u)/c;return(r+d)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new se:new L);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new L,r=[],a=[],n=[],s=new L,o=new ct;for(let p=0;p<=e;p++){let m=p/e;r[p]=this.getTangentAt(m,new L)}a[0]=new L,n[0]=new L;let l=Number.MAX_VALUE,u=Math.abs(r[0].x),c=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),d<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let p=1;p<=e;p++){if(a[p]=a[p-1].clone(),n[p]=n[p-1].clone(),s.crossVectors(r[p-1],r[p]),s.length()>Number.EPSILON){s.normalize();let m=Math.acos(We(r[p-1].dot(r[p]),-1,1));a[p].applyMatrix4(o.makeRotationAxis(s,m))}n[p].crossVectors(r[p],a[p])}if(t===!0){let p=Math.acos(We(a[0].dot(a[e]),-1,1));p/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(p=-p);for(let m=1;m<=e;m++)a[m].applyMatrix4(o.makeRotationAxis(r[m],p*m)),n[m].crossVectors(r[m],a[m])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Lo=class extends fi{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new se){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let u=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=o-this.aX,p=l-this.aY;o=d*u-p*c+this.aX,l=d*c+p*u+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Gd=class extends Lo{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function Po(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,u){a(s,o,u*(o-n),u*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,u,c,d){let p=(s-n)/u-(o-n)/(u+c)+(o-s)/c,m=(o-s)/c-(l-s)/(c+d)+(l-o)/d;p*=c,m*=c,a(s,o,p,m)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}var Ln=new L,Uo=new Po,Io=new Po,Do=new Po,Pn=class extends fi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new L){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,u;this.closed||s>0?l=r[(s-1)%a]:(Ln.subVectors(r[0],r[1]).add(r[0]),l=Ln);let c=r[s%a],d=r[(s+1)%a];if(this.closed||s+2<a?u=r[(s+2)%a]:(Ln.subVectors(r[a-1],r[a-2]).add(r[a-1]),u=Ln),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(c),p),v=Math.pow(c.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Uo.initNonuniformCatmullRom(l.x,c.x,d.x,u.x,m,v,g),Io.initNonuniformCatmullRom(l.y,c.y,d.y,u.y,m,v,g),Do.initNonuniformCatmullRom(l.z,c.z,d.z,u.z,m,v,g)}else this.curveType==="catmullrom"&&(Uo.initCatmullRom(l.x,c.x,d.x,u.x,this.tension),Io.initCatmullRom(l.y,c.y,d.y,u.y,this.tension),Do.initCatmullRom(l.z,c.z,d.z,u.z,this.tension));return i.set(Uo.calc(o),Io.calc(o),Do.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function gu(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function Wd(e,t){let i=1-e;return i*i*t}function qd(e,t){return 2*(1-e)*e*t}function Xd(e,t){return e*e*t}function Pa(e,t,i,r){return Wd(e,t)+qd(e,i)+Xd(e,r)}function jd(e,t){let i=1-e;return i*i*i*t}function Yd(e,t){let i=1-e;return 3*i*i*e*t}function Zd(e,t){return 3*(1-e)*e*e*t}function Kd(e,t){return e*e*e*t}function Ua(e,t,i,r,a){return jd(e,t)+Yd(e,i)+Zd(e,r)+Kd(e,a)}var vu=class extends fi{constructor(e=new se,t=new se,i=new se,r=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new se){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Ua(e,r.x,a.x,n.x,s.x),Ua(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jd=class extends fi{constructor(e=new L,t=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new L){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Ua(e,r.x,a.x,n.x,s.x),Ua(e,r.y,a.y,n.y,s.y),Ua(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xu=class extends fi{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$d=class extends fi{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_u=class extends fi{constructor(e=new se,t=new se,i=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new se){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Pa(e,r.x,a.x,n.x),Pa(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eu=class extends fi{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Pa(e,r.x,a.x,n.x),Pa(e,r.y,a.y,n.y),Pa(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yu=class extends fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],u=r[n>r.length-2?r.length-1:n+1],c=r[n>r.length-3?r.length-1:n+2];return i.set(gu(s,o.x,l.x,u.x,c.x),gu(s,o.y,l.y,u.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new se().fromArray(r))}return this}},Un=Object.freeze({__proto__:null,ArcCurve:Gd,CatmullRomCurve3:Pn,CubicBezierCurve:vu,CubicBezierCurve3:Jd,EllipseCurve:Lo,LineCurve:xu,LineCurve3:$d,QuadraticBezierCurve:_u,QuadraticBezierCurve3:Eu,SplineCurve:yu}),Qd=class extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Un[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let n=r[a]-i,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let n=a[r],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let u=o[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Un[r.type]().fromJSON(r))}return this}},bu=class extends Qd{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new xu(this.currentPoint.clone(),new se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new _u(this.currentPoint.clone(),new se(e,t),new se(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,n){let s=new vu(this.currentPoint.clone(),new se(e,t),new se(i,r),new se(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new yu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,i,r,a,n),this}absarc(e,t,i,r,a,n){return this.absellipse(e,t,i,i,r,a,n),this}ellipse(e,t,i,r,a,n,s,o){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,a,n,s,o),this}absellipse(e,t,i,r,a,n,s,o){let l=new Lo(e,t,i,r,a,n,s,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},In=class extends bu{constructor(e){super(e),this.uuid=rr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new bu().fromJSON(r))}return this}};function ep(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,n=Mu(e,0,a,i,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,u;if(r&&(n=np(e,t,n,i)),e.length>80*i){o=1/0,l=1/0;let c=-1/0,d=-1/0;for(let p=i;p<a;p+=i){let m=e[p],v=e[p+1];m<o&&(o=m),v<l&&(l=v),m>c&&(c=m),v>d&&(d=v)}u=Math.max(c-o,d-l),u=u!==0?32767/u:0}return Ia(n,s,i,o,l,u,0),s}function Mu(e,t,i,r,a){let n;if(a===gp(e,t,i,r)>0)for(let s=t;s<i;s+=r)n=Au(s/r|0,e[s],e[s+1],n);else for(let s=i-r;s>=t;s-=r)n=Au(s/r|0,e[s],e[s+1],n);return n&&jr(n,n.next)&&(Oa(n),n=n.next),n}function hr(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(jr(i,i.next)||pt(i.prev,i,i.next)===0)){if(Oa(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Ia(e,t,i,r,a,n,s){if(!e)return;!s&&n&&cp(e,r,a,n);let o=e;for(;e.prev!==e.next;){let l=e.prev,u=e.next;if(n?ip(e,r,a,n):tp(e)){t.push(l.i,e.i,u.i),Oa(e),e=u.next,o=u.next;continue}if(e=u,e===o){s?s===1?(e=rp(hr(e),t),Ia(e,t,i,r,a,n,2)):s===2&&ap(e,t,i,r,a,n):Ia(hr(e),t,i,r,a,n,1);break}}}function tp(e){let t=e.prev,i=e,r=e.next;if(pt(t,i,r)>=0)return!1;let a=t.x,n=i.x,s=r.x,o=t.y,l=i.y,u=r.y,c=Math.min(a,n,s),d=Math.min(o,l,u),p=Math.max(a,n,s),m=Math.max(o,l,u),v=r.next;for(;v!==t;){if(v.x>=c&&v.x<=p&&v.y>=d&&v.y<=m&&Da(a,o,n,l,s,u,v.x,v.y)&&pt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function ip(e,t,i,r){let a=e.prev,n=e,s=e.next;if(pt(a,n,s)>=0)return!1;let o=a.x,l=n.x,u=s.x,c=a.y,d=n.y,p=s.y,m=Math.min(o,l,u),v=Math.min(c,d,p),g=Math.max(o,l,u),f=Math.max(c,d,p),h=No(m,v,t,i,r),w=No(g,f,t,i,r),x=e.prevZ,S=e.nextZ;for(;x&&x.z>=h&&S&&S.z<=w;){if(x.x>=m&&x.x<=g&&x.y>=v&&x.y<=f&&x!==a&&x!==s&&Da(o,c,l,d,u,p,x.x,x.y)&&pt(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=m&&S.x<=g&&S.y>=v&&S.y<=f&&S!==a&&S!==s&&Da(o,c,l,d,u,p,S.x,S.y)&&pt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=h;){if(x.x>=m&&x.x<=g&&x.y>=v&&x.y<=f&&x!==a&&x!==s&&Da(o,c,l,d,u,p,x.x,x.y)&&pt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=w;){if(S.x>=m&&S.x<=g&&S.y>=v&&S.y<=f&&S!==a&&S!==s&&Da(o,c,l,d,u,p,S.x,S.y)&&pt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function rp(e,t){let i=e;do{let r=i.prev,a=i.next.next;!jr(r,a)&&Tu(r,i,i.next,a)&&Na(r,a)&&Na(a,r)&&(t.push(r.i,i.i,a.i),Oa(i),Oa(i.next),i=e=a),i=i.next}while(i!==e);return hr(i)}function ap(e,t,i,r,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&pp(s,o)){let l=wu(s,o);s=hr(s,s.next),l=hr(l,l.next),Ia(s,t,i,r,a,n,0),Ia(l,t,i,r,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function np(e,t,i,r){let a=[];for(let n=0,s=t.length;n<s;n++){let o=t[n]*r,l=n<s-1?t[n+1]*r:e.length,u=Mu(e,o,l,r,!1);u===u.next&&(u.steiner=!0),a.push(dp(u))}a.sort(sp);for(let n=0;n<a.length;n++)i=op(a[n],i);return i}function sp(e,t){let i=e.x-t.x;if(i===0&&(i=e.y-t.y,i===0)){let r=(e.next.y-e.y)/(e.next.x-e.x),a=(t.next.y-t.y)/(t.next.x-t.x);i=r-a}return i}function op(e,t){let i=lp(e,t);if(!i)return t;let r=wu(i,e);return hr(r,r.next),hr(i,i.next)}function lp(e,t){let i=t,r=e.x,a=e.y,n=-1/0,s;if(jr(e,i))return i;do{if(jr(e,i.next))return i.next;if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){let d=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=r&&d>n&&(n=d,s=i.x<i.next.x?i:i.next,d===r))return s}i=i.next}while(i!==t);if(!s)return null;let o=s,l=s.x,u=s.y,c=1/0;i=s;do{if(r>=i.x&&i.x>=l&&r!==i.x&&Su(a<u?r:n,a,l,u,a<u?n:r,a,i.x,i.y)){let d=Math.abs(a-i.y)/(r-i.x);Na(i,e)&&(d<c||d===c&&(i.x>s.x||i.x===s.x&&up(s,i)))&&(s=i,c=d)}i=i.next}while(i!==o);return s}function up(e,t){return pt(e.prev,e,t.prev)<0&&pt(t.next,e,e.next)<0}function cp(e,t,i,r){let a=e;do a.z===0&&(a.z=No(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,hp(a)}function hp(e){let t,i=1;do{let r=e,a;e=null;let n=null;for(t=0;r;){t++;let s=r,o=0;for(let u=0;u<i&&(o++,s=s.nextZ,!!s);u++);let l=i;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||r.z<=s.z)?(a=r,r=r.nextZ,o--):(a=s,s=s.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;r=s}n.nextZ=null,i*=2}while(t>1);return e}function No(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function dp(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function Su(e,t,i,r,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(r-o)>=(i-s)*(t-o)&&(i-s)*(n-o)>=(a-s)*(r-o)}function Da(e,t,i,r,a,n,s,o){return!(e===s&&t===o)&&Su(e,t,i,r,a,n,s,o)}function pp(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!fp(e,t)&&(Na(e,t)&&Na(t,e)&&mp(e,t)&&(pt(e.prev,e,t.prev)||pt(e,t.prev,t))||jr(e,t)&&pt(e.prev,e,e.next)>0&&pt(t.prev,t,t.next)>0)}function pt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function jr(e,t){return e.x===t.x&&e.y===t.y}function Tu(e,t,i,r){let a=Nn(pt(e,t,i)),n=Nn(pt(e,t,r)),s=Nn(pt(i,r,e)),o=Nn(pt(i,r,t));return!!(a!==n&&s!==o||a===0&&Dn(e,i,t)||n===0&&Dn(e,r,t)||s===0&&Dn(i,e,r)||o===0&&Dn(i,t,r))}function Dn(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Nn(e){return e>0?1:e<0?-1:0}function fp(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Tu(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Na(e,t){return pt(e.prev,e,e.next)<0?pt(e,t,e.next)>=0&&pt(e,e.prev,t)>=0:pt(e,t,e.prev)<0||pt(e,e.next,t)<0}function mp(e,t){let i=e,r=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&a<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function wu(e,t){let i=Oo(e.i,e.x,e.y),r=Oo(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function Au(e,t,i,r){let a=Oo(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function Oa(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Oo(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function gp(e,t,i,r){let a=0;for(let n=t,s=i-r;n<i;n+=r)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}var vp=class{static triangulate(e,t,i=2){return ep(e,t,i)}},On=class eh{static area(t){let i=t.length,r=0;for(let a=i-1,n=0;n<i;a=n++)r+=t[a].x*t[n].y-t[n].x*t[a].y;return r*.5}static isClockWise(t){return eh.area(t)<0}static triangulateShape(t,i){let r=[],a=[],n=[];Ru(t),Cu(r,t);let s=t.length;i.forEach(Ru);for(let l=0;l<i.length;l++)a.push(s),s+=i[l].length,Cu(r,i[l]);let o=vp.triangulate(r,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function Ru(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Cu(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var Fo=class th extends Lt{constructor(t=new In([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let u=t[o];s(u)}this.setAttribute("position",new tt(a,3)),this.setAttribute("uv",new tt(n,2)),this.computeVertexNormals();function s(o){let l=[],u=i.curveSegments!==void 0?i.curveSegments:12,c=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1,p=i.bevelEnabled!==void 0?i.bevelEnabled:!0,m=i.bevelThickness!==void 0?i.bevelThickness:.2,v=i.bevelSize!==void 0?i.bevelSize:m-.1,g=i.bevelOffset!==void 0?i.bevelOffset:0,f=i.bevelSegments!==void 0?i.bevelSegments:3,h=i.extrudePath,w=i.UVGenerator!==void 0?i.UVGenerator:xp,x,S=!1,I,E,T,C;h&&(x=h.getSpacedPoints(c),S=!0,p=!1,I=h.computeFrenetFrames(c,!1),E=new L,T=new L,C=new L),p||(f=0,m=0,v=0,g=0);let b=o.extractPoints(u),y=b.shape,R=b.holes;if(!On.isClockWise(y)){y=y.reverse();for(let Z=0,Q=R.length;Z<Q;Z++){let te=R[Z];On.isClockWise(te)&&(R[Z]=te.reverse())}}function N(Z){let Q=10000000000000001e-36,te=Z[0];for(let K=1;K<=Z.length;K++){let de=K%Z.length,ae=Z[de],oe=ae.x-te.x,ke=ae.y-te.y,Ge=oe*oe+ke*ke,Ve=Math.max(Math.abs(ae.x),Math.abs(ae.y),Math.abs(te.x),Math.abs(te.y)),A=Q*Ve*Ve;if(Ge<=A){Z.splice(de,1),K--;continue}te=ae}}N(y),R.forEach(N);let z=R.length,D=y;for(let Z=0;Z<z;Z++){let Q=R[Z];y=y.concat(Q)}function V(Z,Q,te){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(Q,te)}let k=y.length;function q(Z,Q,te){let K,de,ae,oe=Z.x-Q.x,ke=Z.y-Q.y,Ge=te.x-Z.x,Ve=te.y-Z.y,A=oe*oe+ke*ke,_=oe*Ve-ke*Ge;if(Math.abs(_)>Number.EPSILON){let F=Math.sqrt(A),j=Math.sqrt(Ge*Ge+Ve*Ve),J=Q.x-ke/F,X=Q.y+oe/F,Ee=te.x-Ve/j,le=te.y+Ge/j,Se=((Ee-J)*Ve-(le-X)*Ge)/(oe*Ve-ke*Ge);K=J+oe*Se-Z.x,de=X+ke*Se-Z.y;let Ae=K*K+de*de;if(Ae<=2)return new se(K,de);ae=Math.sqrt(Ae/2)}else{let F=!1;oe>Number.EPSILON?Ge>Number.EPSILON&&(F=!0):oe<-Number.EPSILON?Ge<-Number.EPSILON&&(F=!0):Math.sign(ke)===Math.sign(Ve)&&(F=!0),F?(K=-ke,de=oe,ae=Math.sqrt(A)):(K=oe,de=ke,ae=Math.sqrt(A/2))}return new se(K/ae,de/ae)}let H=[];for(let Z=0,Q=D.length,te=Q-1,K=Z+1;Z<Q;Z++,te++,K++)te===Q&&(te=0),K===Q&&(K=0),H[Z]=q(D[Z],D[te],D[K]);let ee=[],pe,Pe=H.concat();for(let Z=0,Q=z;Z<Q;Z++){let te=R[Z];pe=[];for(let K=0,de=te.length,ae=de-1,oe=K+1;K<de;K++,ae++,oe++)ae===de&&(ae=0),oe===de&&(oe=0),pe[K]=q(te[K],te[ae],te[oe]);ee.push(pe),Pe=Pe.concat(pe)}let Oe;if(f===0)Oe=On.triangulateShape(D,R);else{let Z=[],Q=[];for(let te=0;te<f;te++){let K=te/f,de=m*Math.cos(K*Math.PI/2),ae=v*Math.sin(K*Math.PI/2)+g;for(let oe=0,ke=D.length;oe<ke;oe++){let Ge=V(D[oe],H[oe],ae);_e(Ge.x,Ge.y,-de),K===0&&Z.push(Ge)}for(let oe=0,ke=z;oe<ke;oe++){let Ge=R[oe];pe=ee[oe];let Ve=[];for(let A=0,_=Ge.length;A<_;A++){let F=V(Ge[A],pe[A],ae);_e(F.x,F.y,-de),K===0&&Ve.push(F)}K===0&&Q.push(Ve)}}Oe=On.triangulateShape(Z,Q)}let it=Oe.length,$e=v+g;for(let Z=0;Z<k;Z++){let Q=p?V(y[Z],Pe[Z],$e):y[Z];S?(T.copy(I.normals[0]).multiplyScalar(Q.x),E.copy(I.binormals[0]).multiplyScalar(Q.y),C.copy(x[0]).add(T).add(E),_e(C.x,C.y,C.z)):_e(Q.x,Q.y,0)}for(let Z=1;Z<=c;Z++)for(let Q=0;Q<k;Q++){let te=p?V(y[Q],Pe[Q],$e):y[Q];S?(T.copy(I.normals[Z]).multiplyScalar(te.x),E.copy(I.binormals[Z]).multiplyScalar(te.y),C.copy(x[Z]).add(T).add(E),_e(C.x,C.y,C.z)):_e(te.x,te.y,d/c*Z)}for(let Z=f-1;Z>=0;Z--){let Q=Z/f,te=m*Math.cos(Q*Math.PI/2),K=v*Math.sin(Q*Math.PI/2)+g;for(let de=0,ae=D.length;de<ae;de++){let oe=V(D[de],H[de],K);_e(oe.x,oe.y,d+te)}for(let de=0,ae=R.length;de<ae;de++){let oe=R[de];pe=ee[de];for(let ke=0,Ge=oe.length;ke<Ge;ke++){let Ve=V(oe[ke],pe[ke],K);S?_e(Ve.x,Ve.y+x[c-1].y,x[c-1].x+te):_e(Ve.x,Ve.y,d+te)}}}Y(),ue();function Y(){let Z=a.length/3;if(p){let Q=0,te=k*Q;for(let K=0;K<it;K++){let de=Oe[K];Ie(de[2]+te,de[1]+te,de[0]+te)}Q=c+f*2,te=k*Q;for(let K=0;K<it;K++){let de=Oe[K];Ie(de[0]+te,de[1]+te,de[2]+te)}}else{for(let Q=0;Q<it;Q++){let te=Oe[Q];Ie(te[2],te[1],te[0])}for(let Q=0;Q<it;Q++){let te=Oe[Q];Ie(te[0]+k*c,te[1]+k*c,te[2]+k*c)}}r.addGroup(Z,a.length/3-Z,0)}function ue(){let Z=a.length/3,Q=0;he(D,Q),Q+=D.length;for(let te=0,K=R.length;te<K;te++){let de=R[te];he(de,Q),Q+=de.length}r.addGroup(Z,a.length/3-Z,1)}function he(Z,Q){let te=Z.length;for(;--te>=0;){let K=te,de=te-1;de<0&&(de=Z.length-1);for(let ae=0,oe=c+f*2;ae<oe;ae++){let ke=k*ae,Ge=k*(ae+1),Ve=Q+K+ke,A=Q+de+ke,_=Q+de+Ge,F=Q+K+Ge;Me(Ve,A,_,F)}}}function _e(Z,Q,te){l.push(Z),l.push(Q),l.push(te)}function Ie(Z,Q,te){Ze(Z),Ze(Q),Ze(te);let K=a.length/3,de=w.generateTopUV(r,a,K-3,K-2,K-1);P(de[0]),P(de[1]),P(de[2])}function Me(Z,Q,te,K){Ze(Z),Ze(Q),Ze(K),Ze(Q),Ze(te),Ze(K);let de=a.length/3,ae=w.generateSideWallUV(r,a,de-6,de-3,de-2,de-1);P(ae[0]),P(ae[1]),P(ae[3]),P(ae[1]),P(ae[2]),P(ae[3])}function Ze(Z){a.push(l[Z*3+0]),a.push(l[Z*3+1]),a.push(l[Z*3+2])}function P(Z){n.push(Z.x),n.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return _p(i,r,t)}static fromJSON(t,i){let r=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=i[t.shapes[n]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new Un[a.type]().fromJSON(a)),new th(r,t.options)}},xp={generateTopUV:function(e,t,i,r,a){let n=t[i*3],s=t[i*3+1],o=t[r*3],l=t[r*3+1],u=t[a*3],c=t[a*3+1];return[new se(n,s),new se(o,l),new se(u,c)]},generateSideWallUV:function(e,t,i,r,a,n){let s=t[i*3],o=t[i*3+1],l=t[i*3+2],u=t[r*3],c=t[r*3+1],d=t[r*3+2],p=t[a*3],m=t[a*3+1],v=t[a*3+2],g=t[n*3],f=t[n*3+1],h=t[n*3+2];return Math.abs(o-c)<Math.abs(s-u)?[new se(s,1-l),new se(u,1-d),new se(p,1-v),new se(g,1-h)]:[new se(o,1-l),new se(c,1-d),new se(m,1-v),new se(f,1-h)]}};function _p(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let n=e[r];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var Fa=class ih extends Lt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),u=o+1,c=l+1,d=t/o,p=i/l,m=[],v=[],g=[],f=[];for(let h=0;h<c;h++){let w=h*p-s;for(let x=0;x<u;x++){let S=x*d-n;v.push(S,-w,0),g.push(0,0,1),f.push(x/o),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<o;w++){let x=w+u*h,S=w+u*(h+1),I=w+1+u*(h+1),E=w+1+u*h;m.push(x,S,E),m.push(S,I,E)}this.setIndex(m),this.setAttribute("position",new tt(v,3)),this.setAttribute("normal",new tt(g,3)),this.setAttribute("uv",new tt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ih(t.width,t.height,t.widthSegments,t.heightSegments)}},Lu=class rh extends Lt{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),u=0,c=[],d=new L,p=new L,m=[],v=[],g=[],f=[];for(let h=0;h<=r;h++){let w=[],x=h/r,S=0;h===0&&s===0?S=.5/i:h===r&&l===Math.PI&&(S=-.5/i);for(let I=0;I<=i;I++){let E=I/i;d.x=-t*Math.cos(a+E*n)*Math.sin(s+x*o),d.y=t*Math.cos(s+x*o),d.z=t*Math.sin(a+E*n)*Math.sin(s+x*o),v.push(d.x,d.y,d.z),p.copy(d).normalize(),g.push(p.x,p.y,p.z),f.push(E+S,1-x),w.push(u++)}c.push(w)}for(let h=0;h<r;h++)for(let w=0;w<i;w++){let x=c[h][w+1],S=c[h][w],I=c[h+1][w],E=c[h+1][w+1];(h!==0||s>0)&&m.push(x,S,E),(h!==r-1||l<Math.PI)&&m.push(S,I,E)}this.setIndex(m),this.setAttribute("position",new tt(v,3)),this.setAttribute("normal",new tt(g,3)),this.setAttribute("uv",new tt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Yr=class ah extends Lt{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n},r=Math.floor(r),a=Math.floor(a);let s=[],o=[],l=[],u=[],c=new L,d=new L,p=new L;for(let m=0;m<=r;m++)for(let v=0;v<=a;v++){let g=v/a*n,f=m/r*Math.PI*2;d.x=(t+i*Math.cos(f))*Math.cos(g),d.y=(t+i*Math.cos(f))*Math.sin(g),d.z=i*Math.sin(f),o.push(d.x,d.y,d.z),c.x=t*Math.cos(g),c.y=t*Math.sin(g),p.subVectors(d,c).normalize(),l.push(p.x,p.y,p.z),u.push(v/a),u.push(m/r)}for(let m=1;m<=r;m++)for(let v=1;v<=a;v++){let g=(a+1)*m+v-1,f=(a+1)*(m-1)+v-1,h=(a+1)*(m-1)+v,w=(a+1)*m+v;s.push(g,f,w),s.push(f,h,w)}this.setIndex(s),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ah(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Bo=class nh extends Lt{constructor(t=new Eu(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),i=64,r=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:n};let s=t.computeFrenetFrames(i,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new L,l=new L,u=new se,c=new L,d=[],p=[],m=[],v=[];g(),this.setIndex(v),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(p,3)),this.setAttribute("uv",new tt(m,2));function g(){for(let x=0;x<i;x++)f(x);f(n===!1?i:0),w(),h()}function f(x){c=t.getPointAt(x/i,c);let S=s.normals[x],I=s.binormals[x];for(let E=0;E<=a;E++){let T=E/a*Math.PI*2,C=Math.sin(T),b=-Math.cos(T);l.x=b*S.x+C*I.x,l.y=b*S.y+C*I.y,l.z=b*S.z+C*I.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=c.x+r*l.x,o.y=c.y+r*l.y,o.z=c.z+r*l.z,d.push(o.x,o.y,o.z)}}function h(){for(let x=1;x<=i;x++)for(let S=1;S<=a;S++){let I=(a+1)*(x-1)+(S-1),E=(a+1)*x+(S-1),T=(a+1)*x+S,C=(a+1)*(x-1)+S;v.push(I,E,C),v.push(E,T,C)}}function w(){for(let x=0;x<=i;x++)for(let S=0;S<=a;S++)u.x=x/i,u.y=S/a,m.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new nh(new Un[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Ba=class extends or{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ep=class extends or{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=hs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yp=class extends or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bp=class extends or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fn(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Mp(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Bn=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sp=class extends Bn{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Al,endingEnd:Al}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case Rl:a=e,s=2*t-i;break;case Cl:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Rl:n=e,o=2*i-t;break;case Cl:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*u,this._offsetNext=n*u}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,u=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(i-t)/(r-t),v=m*m,g=v*m,f=-d*g+2*d*v-d*m,h=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,w=(-1-p)*g+(1.5+p)*v+.5*m,x=p*g-p*v;for(let S=0;S!==s;++S)a[S]=f*n[u+S]+h*n[l+S]+w*n[o+S]+x*n[c+S];return a}},Tp=class extends Bn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,u=(i-t)/(r-t),c=1-u;for(let d=0;d!==s;++d)a[d]=n[l+d]*c+n[o+d]*u;return a}},wp=class extends Bn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},mi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fn(t,this.TimeBufferType),this.values=Fn(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Fn(e.times,Array),values:Fn(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new wp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case rn:t=this.InterpolantFactoryMethodDiscrete;break;case $s:t=this.InterpolantFactoryMethodLinear;break;case Qs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rn;case this.InterpolantFactoryMethodLinear:return $s;case this.InterpolantFactoryMethodSmooth:return Qs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&Mp(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Qs,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],u=e[s+1];if(l!==u&&(s!==1||l!==e[0]))if(r)o=!0;else{let c=s*i,d=c-i,p=c+i;for(let m=0;m!==i;++m){let v=t[c+m];if(v!==t[d+m]||v!==t[p+m]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let c=s*i,d=n*i;for(let p=0;p!==i;++p)t[d+p]=t[c+p]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};mi.prototype.ValueTypeName="",mi.prototype.TimeBufferType=Float32Array,mi.prototype.ValueBufferType=Float32Array,mi.prototype.DefaultInterpolation=$s;var za=class extends mi{constructor(e,t,i){super(e,t,i)}};za.prototype.ValueTypeName="bool",za.prototype.ValueBufferType=Array,za.prototype.DefaultInterpolation=rn,za.prototype.InterpolantFactoryMethodLinear=void 0,za.prototype.InterpolantFactoryMethodSmooth=void 0;var Ap=class extends mi{constructor(e,t,i,r){super(e,t,i,r)}};Ap.prototype.ValueTypeName="color";var Rp=class extends mi{constructor(e,t,i,r){super(e,t,i,r)}};Rp.prototype.ValueTypeName="number";var Cp=class extends Bn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let u=l+s;l!==u;l+=4)Hi.slerpFlat(a,0,n,l-s,n,l,o);return a}},Pu=class extends mi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Cp(this.times,this.values,this.getValueSize(),e)}};Pu.prototype.ValueTypeName="quaternion",Pu.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends mi{constructor(e,t,i){super(e,t,i)}};ka.prototype.ValueTypeName="string",ka.prototype.ValueBufferType=Array,ka.prototype.DefaultInterpolation=rn,ka.prototype.InterpolantFactoryMethodLinear=void 0,ka.prototype.InterpolantFactoryMethodSmooth=void 0;var Lp=class extends mi{constructor(e,t,i,r){super(e,t,i,r)}};Lp.prototype.ValueTypeName="vector";var Pp=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){s++,a===!1&&r.onStart!==void 0&&r.onStart(u,n,s),a=!0},this.itemEnd=function(u){n++,r.onProgress!==void 0&&r.onProgress(u,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return o?o(u):u},this.setURLModifier=function(u){return o=u,this},this.addHandler=function(u,c){return l.push(u,c),this},this.removeHandler=function(u){let c=l.indexOf(u);return c!==-1&&l.splice(c,2),this},this.getHandler=function(u){for(let c=0,d=l.length;c<d;c+=2){let p=l[c],m=l[c+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Up=new Pp,Ip=class{constructor(e){this.manager=e!==void 0?e:Up,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ip.DEFAULT_MATERIAL_NAME="__DEFAULT";var zo=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Uu=class extends zo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ko=new ct,Iu=new L,Du=new L,Nu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ro,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Iu),Du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Du),t.updateMatrixWorld(),ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ou=new ct,Va=new L,Vo=new L,Dp=class extends Nu{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Va.setFromMatrixPosition(e.matrixWorld),i.position.copy(Va),Vo.copy(i.position),Vo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Vo),i.updateMatrixWorld(),r.makeTranslation(-Va.x,-Va.y,-Va.z),Ou.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou,i.coordinateSystem,i.reversedDepth)}},Np=class extends zo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Dp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Fu=class extends iu{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=u*this.view.offsetY,o=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Op=class extends Nu{constructor(){super(new Fu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ho=class extends zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new Op}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Fp=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Go="\\[\\]\\.:\\/",Bp=new RegExp("["+Go+"]","g"),Wo="[^"+Go+"]",zp="[^"+Go.replace("\\.","")+"]",kp=/((?:WC+[\/:])*)/.source.replace("WC",Wo),Vp=/(WCOD+)?/.source.replace("WCOD",zp),Hp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wo),Gp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wo),Wp=new RegExp("^"+kp+Vp+Hp+Gp+"$"),qp=["material","materials","bones","map"],Xp=class{constructor(e,t,i){let r=i||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},_t=class ca{constructor(t,i,r){this.path=i,this.parsedPath=r||ca.parseTrackName(i),this.node=ca.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new ca.Composite(t,i,r):new ca(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bp,"")}static parseTrackName(t){let i=Wp.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);qp.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=ca.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===u){u=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let s=t[a];if(s===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=Xp,_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray],_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gx=new Float32Array(1),Bu=new ct,zu=class{constructor(e,t,i=0,r=1/0){this.ray=new dn(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bu),this}intersectObject(e,t=!0,i=[]){return qo(e,this,i,t),i.sort(ku),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)qo(e[r],this,i,t);return i.sort(ku),i}};function ku(e,t){return e.distance-t.distance}function qo(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)qo(n[s],t,i,!0)}}var Vu=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},jp=class extends Hd{constructor(e=10,t=10,i=4473924,r=8947848){i=new Ye(i),r=new Ye(r);let a=t/2,n=e/t,s=e/2,o=[],l=[];for(let d=0,p=0,m=-s;d<=t;d++,m+=n){o.push(-s,0,m,s,0,m),o.push(m,0,-s,m,0,s);let v=d===a?i:r;v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3}let u=new Lt;u.setAttribute("position",new tt(o,3)),u.setAttribute("color",new tt(l,3));let c=new uu({vertexColors:!0,toneMapped:!1});super(u,c),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},Yp=class extends ir{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Hu(e,t,i,r){let a=Zp(r);switch(i){case Sl:return e*t;case Es:return e*t/a.components*a.byteLength;case ys:return e*t/a.components*a.byteLength;case wl:return e*t*2/a.components*a.byteLength;case bs:return e*t*2/a.components*a.byteLength;case Tl:return e*t*3/a.components*a.byteLength;case ti:return e*t*4/a.components*a.byteLength;case Ms:return e*t*4/a.components*a.byteLength;case $a:case Qa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case en:case tn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ts:case As:return Math.max(e,16)*Math.max(t,8)/4;case Ss:case ws:return Math.max(e,8)*Math.max(t,8)/2;case Rs:case Cs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ls:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ps:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Us:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Is:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ds:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ns:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Os:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Fs:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Bs:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case zs:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ks:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Vs:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Hs:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Gs:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ws:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case qs:case Xs:case js:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ys:case Zs:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ks:case Js:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Zp(e){switch(e){case ci:case El:return{byteLength:1,components:1};case ha:case yl:case da:return{byteLength:2,components:1};case xs:case _s:return{byteLength:2,components:4};case tr:case vs:case hi:return{byteLength:4,components:1};case bl:case Ml:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/function Gu(){let e=null,t=!1,i=null,r=null;function a(n,s){i(n,s),r=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&i!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function Kp(e){let t=new WeakMap;function i(o,l){let u=o.array,c=o.usage,d=u.byteLength,p=e.createBuffer();e.bindBuffer(l,p),e.bufferData(l,u,c),o.onUploadCallback();let m;if(u instanceof Float32Array)m=e.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=e.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=e.HALF_FLOAT:m=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=e.SHORT;else if(u instanceof Uint32Array)m=e.UNSIGNED_INT;else if(u instanceof Int32Array)m=e.INT;else if(u instanceof Int8Array)m=e.BYTE;else if(u instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,u){let c=l.array,d=l.updateRanges;if(e.bindBuffer(u,o),d.length===0)e.bufferSubData(u,0,c);else{d.sort((m,v)=>m.start-v.start);let p=0;for(let m=1;m<d.length;m++){let v=d[p],g=d[m];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++p,d[p]=g)}d.length=p+1;for(let m=0,v=d.length;m<v;m++){let g=d[m];e.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=t.get(o);if(u===void 0)t.set(o,i(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,o,l),u.version=o.version}}return{get:a,remove:n,update:s}}var Jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$p=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,af=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,df=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,om=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Em=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Om=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,km=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$m=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ag=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ng=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_g=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ag=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:Jp,alphahash_pars_fragment:$p,alphamap_fragment:Qp,alphamap_pars_fragment:ef,alphatest_fragment:tf,alphatest_pars_fragment:rf,aomap_fragment:af,aomap_pars_fragment:nf,batching_pars_vertex:sf,batching_vertex:of,begin_vertex:lf,beginnormal_vertex:uf,bsdfs:cf,iridescence_fragment:hf,bumpmap_pars_fragment:df,clipping_planes_fragment:pf,clipping_planes_pars_fragment:ff,clipping_planes_pars_vertex:mf,clipping_planes_vertex:gf,color_fragment:vf,color_pars_fragment:xf,color_pars_vertex:_f,color_vertex:Ef,common:yf,cube_uv_reflection_fragment:bf,defaultnormal_vertex:Mf,displacementmap_pars_vertex:Sf,displacementmap_vertex:Tf,emissivemap_fragment:wf,emissivemap_pars_fragment:Af,colorspace_fragment:Rf,colorspace_pars_fragment:Cf,envmap_fragment:Lf,envmap_common_pars_fragment:Pf,envmap_pars_fragment:Uf,envmap_pars_vertex:If,envmap_physical_pars_fragment:Wf,envmap_vertex:Df,fog_vertex:Nf,fog_pars_vertex:Of,fog_fragment:Ff,fog_pars_fragment:Bf,gradientmap_pars_fragment:zf,lightmap_pars_fragment:kf,lights_lambert_fragment:Vf,lights_lambert_pars_fragment:Hf,lights_pars_begin:Gf,lights_toon_fragment:qf,lights_toon_pars_fragment:Xf,lights_phong_fragment:jf,lights_phong_pars_fragment:Yf,lights_physical_fragment:Zf,lights_physical_pars_fragment:Kf,lights_fragment_begin:Jf,lights_fragment_maps:$f,lights_fragment_end:Qf,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:im,logdepthbuf_vertex:rm,map_fragment:am,map_pars_fragment:nm,map_particle_fragment:sm,map_particle_pars_fragment:om,metalnessmap_fragment:lm,metalnessmap_pars_fragment:um,morphinstance_vertex:cm,morphcolor_vertex:hm,morphnormal_vertex:dm,morphtarget_pars_vertex:pm,morphtarget_vertex:fm,normal_fragment_begin:mm,normal_fragment_maps:gm,normal_pars_fragment:vm,normal_pars_vertex:xm,normal_vertex:_m,normalmap_pars_fragment:Em,clearcoat_normal_fragment_begin:ym,clearcoat_normal_fragment_maps:bm,clearcoat_pars_fragment:Mm,iridescence_pars_fragment:Sm,opaque_fragment:Tm,packing:wm,premultiplied_alpha_fragment:Am,project_vertex:Rm,dithering_fragment:Cm,dithering_pars_fragment:Lm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Um,shadowmap_pars_fragment:Im,shadowmap_pars_vertex:Dm,shadowmap_vertex:Nm,shadowmask_pars_fragment:Om,skinbase_vertex:Fm,skinning_pars_vertex:Bm,skinning_vertex:zm,skinnormal_vertex:km,specularmap_fragment:Vm,specularmap_pars_fragment:Hm,tonemapping_fragment:Gm,tonemapping_pars_fragment:Wm,transmission_fragment:qm,transmission_pars_fragment:Xm,uv_pars_fragment:jm,uv_pars_vertex:Ym,uv_vertex:Zm,worldpos_vertex:Km,background_vert:Jm,background_frag:$m,backgroundCube_vert:Qm,backgroundCube_frag:eg,cube_vert:tg,cube_frag:ig,depth_vert:rg,depth_frag:ag,distanceRGBA_vert:ng,distanceRGBA_frag:sg,equirect_vert:og,equirect_frag:lg,linedashed_vert:ug,linedashed_frag:cg,meshbasic_vert:hg,meshbasic_frag:dg,meshlambert_vert:pg,meshlambert_frag:fg,meshmatcap_vert:mg,meshmatcap_frag:gg,meshnormal_vert:vg,meshnormal_frag:xg,meshphong_vert:_g,meshphong_frag:Eg,meshphysical_vert:yg,meshphysical_frag:bg,meshtoon_vert:Mg,meshtoon_frag:Sg,points_vert:Tg,points_frag:wg,shadow_vert:Ag,shadow_frag:Rg,sprite_vert:Cg,sprite_frag:Lg},fe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},gi={basic:{uniforms:zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:zt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:zt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:zt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:zt([fe.points,fe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:zt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:zt([fe.common,fe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:zt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:zt([fe.sprite,fe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:zt([fe.common,fe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:zt([fe.lights,fe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};gi.physical={uniforms:zt([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var zn={r:0,b:0,g:0},dr=new Ai,Pg=new ct;function Ug(e,t,i,r,a,n,s){let o=new Ye(0),l=n===!0?0:1,u,c,d=null,p=0,m=null;function v(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?i:t).get(S)),S}function g(x){let S=!1,I=v(x);I===null?h(o,l):I&&I.isColor&&(h(I,1),S=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?r.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(e.autoClear||S)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function f(x,S){let I=v(S);I&&(I.isCubeTexture||I.mapping===Ka)?(c===void 0&&(c=new xt(new ur(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Gr(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),dr.copy(S.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),c.material.uniforms.envMap.value=I,c.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(dr)),c.material.toneMapped=et.getTransfer(I.colorSpace)!==rt,(d!==I||p!==I.version||m!==e.toneMapping)&&(c.material.needsUpdate=!0,d=I,p=I.version,m=e.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):I&&I.isTexture&&(u===void 0&&(u=new xt(new Fa(2,2),new Zi({name:"BackgroundMaterial",uniforms:Gr(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(u)),u.material.uniforms.t2D.value=I,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.toneMapped=et.getTransfer(I.colorSpace)!==rt,I.matrixAutoUpdate===!0&&I.updateMatrix(),u.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||p!==I.version||m!==e.toneMapping)&&(u.material.needsUpdate=!0,d=I,p=I.version,m=e.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function h(x,S){x.getRGB(zn,tu(e)),r.buffers.color.setClear(zn.r,zn.g,zn.b,S,s)}function w(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),l=S,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(o,l)},render:g,addToRenderList:f,dispose:w}}function Ig(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=p(null),n=a,s=!1;function o(y,R,N,z,D){let V=!1,k=d(z,N,R);n!==k&&(n=k,u(n.object)),V=m(y,z,N,D),V&&v(y,z,N,D),D!==null&&t.update(D,e.ELEMENT_ARRAY_BUFFER),(V||s)&&(s=!1,S(y,R,N,z),D!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return e.createVertexArray()}function u(y){return e.bindVertexArray(y)}function c(y){return e.deleteVertexArray(y)}function d(y,R,N){let z=N.wireframe===!0,D=r[y.id];D===void 0&&(D={},r[y.id]=D);let V=D[R.id];V===void 0&&(V={},D[R.id]=V);let k=V[z];return k===void 0&&(k=p(l()),V[z]=k),k}function p(y){let R=[],N=[],z=[];for(let D=0;D<i;D++)R[D]=0,N[D]=0,z[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:z,object:y,attributes:{},index:null}}function m(y,R,N,z){let D=n.attributes,V=R.attributes,k=0,q=N.getAttributes();for(let H in q)if(q[H].location>=0){let ee=D[H],pe=V[H];if(pe===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor)),ee===void 0||ee.attribute!==pe||pe&&ee.data!==pe.data)return!0;k++}return n.attributesNum!==k||n.index!==z}function v(y,R,N,z){let D={},V=R.attributes,k=0,q=N.getAttributes();for(let H in q)if(q[H].location>=0){let ee=V[H];ee===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor));let pe={};pe.attribute=ee,ee&&ee.data&&(pe.data=ee.data),D[H]=pe,k++}n.attributes=D,n.attributesNum=k,n.index=z}function g(){let y=n.newAttributes;for(let R=0,N=y.length;R<N;R++)y[R]=0}function f(y){h(y,0)}function h(y,R){let N=n.newAttributes,z=n.enabledAttributes,D=n.attributeDivisors;N[y]=1,z[y]===0&&(e.enableVertexAttribArray(y),z[y]=1),D[y]!==R&&(e.vertexAttribDivisor(y,R),D[y]=R)}function w(){let y=n.newAttributes,R=n.enabledAttributes;for(let N=0,z=R.length;N<z;N++)R[N]!==y[N]&&(e.disableVertexAttribArray(N),R[N]=0)}function x(y,R,N,z,D,V,k){k===!0?e.vertexAttribIPointer(y,R,N,D,V):e.vertexAttribPointer(y,R,N,z,D,V)}function S(y,R,N,z){g();let D=z.attributes,V=N.getAttributes(),k=R.defaultAttributeValues;for(let q in V){let H=V[q];if(H.location>=0){let ee=D[q];if(ee===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor)),ee!==void 0){let pe=ee.normalized,Pe=ee.itemSize,Oe=t.get(ee);if(Oe===void 0)continue;let it=Oe.buffer,$e=Oe.type,Y=Oe.bytesPerElement,ue=$e===e.INT||$e===e.UNSIGNED_INT||ee.gpuType===vs;if(ee.isInterleavedBufferAttribute){let he=ee.data,_e=he.stride,Ie=ee.offset;if(he.isInstancedInterleavedBuffer){for(let Me=0;Me<H.locationSize;Me++)h(H.location+Me,he.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Me=0;Me<H.locationSize;Me++)f(H.location+Me);e.bindBuffer(e.ARRAY_BUFFER,it);for(let Me=0;Me<H.locationSize;Me++)x(H.location+Me,Pe/H.locationSize,$e,pe,_e*Y,(Ie+Pe/H.locationSize*Me)*Y,ue)}else{if(ee.isInstancedBufferAttribute){for(let he=0;he<H.locationSize;he++)h(H.location+he,ee.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let he=0;he<H.locationSize;he++)f(H.location+he);e.bindBuffer(e.ARRAY_BUFFER,it);for(let he=0;he<H.locationSize;he++)x(H.location+he,Pe/H.locationSize,$e,pe,Pe*Y,Pe/H.locationSize*he*Y,ue)}}else if(k!==void 0){let pe=k[q];if(pe!==void 0)switch(pe.length){case 2:e.vertexAttrib2fv(H.location,pe);break;case 3:e.vertexAttrib3fv(H.location,pe);break;case 4:e.vertexAttrib4fv(H.location,pe);break;default:e.vertexAttrib1fv(H.location,pe)}}}}w()}function I(){C();for(let y in r){let R=r[y];for(let N in R){let z=R[N];for(let D in z)c(z[D].object),delete z[D];delete R[N]}delete r[y]}}function E(y){if(r[y.id]===void 0)return;let R=r[y.id];for(let N in R){let z=R[N];for(let D in z)c(z[D].object),delete z[D];delete R[N]}delete r[y.id]}function T(y){for(let R in r){let N=r[R];if(N[y.id]===void 0)continue;let z=N[y.id];for(let D in z)c(z[D].object),delete z[D];delete N[y.id]}}function C(){b(),s=!0,n!==a&&(n=a,u(n.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:f,disableUnusedAttributes:w}}function Dg(e,t,i){let r;function a(u){r=u}function n(u,c){e.drawArrays(r,u,c),i.update(c,r,1)}function s(u,c,d){d!==0&&(e.drawArraysInstanced(r,u,c,d),i.update(c,r,d))}function o(u,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,u,0,c,0,d);let p=0;for(let m=0;m<d;m++)p+=c[m];i.update(p,r,1)}function l(u,c,d,p){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<u.length;v++)s(u[v],c[v],p[v]);else{m.multiDrawArraysInstancedWEBGL(r,u,0,c,0,p,0,d);let v=0;for(let g=0;g<d;g++)v+=c[g]*p[g];i.update(v,r,1)}}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ng(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(T){return!(T!==ti&&r.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let C=T===da&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ci&&r.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==hi&&!C)}function l(T){if(T==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=i.precision!==void 0?i.precision:"highp",c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);let d=i.logarithmicDepthBuffer===!0,p=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),w=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,E=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:w,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:I,maxSamples:E}}function Og(e){let t=this,i=null,r=0,a=!1,n=!1,s=new Pi,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let m=d.length!==0||p||r!==0||a;return a=p,r=d.length,m},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,p){i=c(d,p,0)},this.setState=function(d,p,m){let v=d.clippingPlanes,g=d.clipIntersection,f=d.clipShadows,h=e.get(d);if(!a||v===null||v.length===0||n&&!f)n?c(null):u();else{let w=n?0:r,x=w*4,S=h.clippingState||null;l.value=S,S=c(v,p,x,m);for(let I=0;I!==x;++I)S[I]=i[I];h.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function u(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(d,p,m,v){let g=d!==null?d.length:0,f=null;if(g!==0){if(f=l.value,v!==!0||f===null){let h=m+g*4,w=p.matrixWorldInverse;o.getNormalMatrix(w),(f===null||f.length<h)&&(f=new Float32Array(h));for(let x=0,S=m;x!==g;++x,S+=4)s.copy(d[x]).applyMatrix4(w,o),s.normal.toArray(f,S),f[S+3]=s.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,f}}function Fg(e){let t=new WeakMap;function i(s,o){return o===ps?s.mapping=Tr:o===fs&&(s.mapping=wr),s}function r(s){if(s&&s.isTexture){let o=s.mapping;if(o===ps||o===fs)if(t.has(s)){let l=t.get(s).texture;return i(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let u=new Id(l.height);return u.fromEquirectangularTexture(e,s),t.set(s,u),s.addEventListener("dispose",a),i(u.texture,s.mapping)}else return null}}return s}function a(s){let o=s.target;o.removeEventListener("dispose",a);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function n(){t=new WeakMap}return{get:r,dispose:n}}var Zr=4,Wu=[.125,.215,.35,.446,.526,.582],pr=20,Xo=new Fu,qu=new Ye,jo=null,Yo=0,Zo=0,Ko=!1,fr=(1+Math.sqrt(5))/2,Kr=1/fr,Xu=[new L(-fr,Kr,0),new L(fr,Kr,0),new L(-Kr,0,fr),new L(Kr,0,fr),new L(0,fr,-Kr),new L(0,fr,Kr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Bg=new L,kn=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=Bg}=a;jo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jo,Yo,Zo),this._renderer.xr.enabled=Ko,e.scissorTest=!1,Vn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tr||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:da,format:ti,colorSpace:Rr,depthBuffer:!1},r=ju(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ju(e,t,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zg(a)),this._blurMaterial=kg(a,e,t)}return r}_compileMaterial(e){let t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,Xo)}_sceneToCubeUV(e,t,i,r,a){let n=new Ht(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,c=l.toneMapping;l.getClearColor(qu),l.toneMapping=ki,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null));let d=new Sa({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),p=new xt(new ur,d),m=!1,v=e.background;v?v.isColor&&(d.color.copy(v),e.background=null,m=!0):(d.color.copy(qu),m=!0);for(let g=0;g<6;g++){let f=g%3;f===0?(n.up.set(0,s[g],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[g],a.y,a.z)):f===1?(n.up.set(0,0,s[g]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[g],a.z)):(n.up.set(0,s[g],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[g]));let h=this._cubeSize;Vn(r,f*h,g>2?h:0,h,h),l.setRenderTarget(r),m&&l.render(p,n),l.render(e,n)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=c,l.autoClear=u,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Tr||e.mapping===wr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yu());let a=r?this._cubemapMaterial:this._equirectMaterial,n=new xt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;Vn(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,Xo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let a=1;a<r;a++){let n=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=Xu[(r-a-1)%Xu.length];this._blur(e,a-1,a,n,s)}t.autoClear=i}_blur(e,t,i,r,a){let n=this._pingPongRenderTarget;this._halfBlur(e,n,t,i,r,"latitudinal",a),this._halfBlur(n,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,n,s){let o=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,c=new xt(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[i]-1,m=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*pr-1),v=a/m,g=isFinite(a)?1+Math.floor(u*v):pr;g>pr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${pr}`);let f=[],h=0;for(let E=0;E<pr;++E){let T=E/v,C=Math.exp(-T*T/2);f.push(C),E===0?h+=C:E<g&&(h+=2*C)}for(let E=0;E<f.length;E++)f[E]=f[E]/h;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=n==="latitudinal",s&&(d.poleAxis.value=s);let{_lodMax:w}=this;d.dTheta.value=m,d.mipInt.value=w-i;let x=this._sizeLods[r],S=3*x*(r>w-Zr?r-w+Zr:0),I=4*(this._cubeSize-x);Vn(t,S,I,3*x,2*x),o.setRenderTarget(t),o.render(c,Xo)}};function zg(e){let t=[],i=[],r=[],a=e,n=e-Zr+1+Wu.length;for(let s=0;s<n;s++){let o=Math.pow(2,a);i.push(o);let l=1/o;s>e-Zr?l=Wu[s-e+Zr-1]:s===0&&(l=0),r.push(l);let u=1/(o-2),c=-u,d=1+u,p=[c,c,d,c,d,d,c,c,d,d,c,d],m=6,v=6,g=3,f=2,h=1,w=new Float32Array(g*v*m),x=new Float32Array(f*v*m),S=new Float32Array(h*v*m);for(let E=0;E<m;E++){let T=E%3*2/3-1,C=E>2?0:-1,b=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];w.set(b,g*v*E),x.set(p,f*v*E);let y=[E,E,E,E,E,E];S.set(y,h*v*E)}let I=new Lt;I.setAttribute("position",new ni(w,g)),I.setAttribute("uv",new ni(x,f)),I.setAttribute("faceIndex",new ni(S,h)),t.push(I),a>Zr&&a--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function ju(e,t,i){let r=new ar(e,t,i);return r.texture.mapping=Ka,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Vn(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function kg(e,t,i){let r=new Float32Array(pr),a=new L(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Yu(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Zu(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Jo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vg(e){let t=new WeakMap,i=null;function r(o){if(o&&o.isTexture){let l=o.mapping,u=l===ps||l===fs,c=l===Tr||l===wr;if(u||c){let d=t.get(o),p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return i===null&&(i=new kn(e)),d=u?i.fromEquirectangular(o,d):i.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let m=o.image;return u&&m&&m.height>0||c&&m&&a(m)?(i===null&&(i=new kn(e)),d=u?i.fromEquirectangular(o):i.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",n),d.texture):null}}}return o}function a(o){let l=0,u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function n(o){let l=o.target;l.removeEventListener("dispose",n);let u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function s(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:s}}function Hg(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a;switch(r){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(r)}return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&_a("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function Gg(e,t,i,r){let a={},n=new WeakMap;function s(d){let p=d.target;p.index!==null&&t.remove(p.index);for(let v in p.attributes)t.remove(p.attributes[v]);p.removeEventListener("dispose",s),delete a[p.id];let m=n.get(p);m&&(t.remove(m),n.delete(p)),r.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,i.memory.geometries--}function o(d,p){return a[p.id]===!0||(p.addEventListener("dispose",s),a[p.id]=!0,i.memory.geometries++),p}function l(d){let p=d.attributes;for(let m in p)t.update(p[m],e.ARRAY_BUFFER)}function u(d){let p=[],m=d.index,v=d.attributes.position,g=0;if(m!==null){let w=m.array;g=m.version;for(let x=0,S=w.length;x<S;x+=3){let I=w[x+0],E=w[x+1],T=w[x+2];p.push(I,E,E,T,T,I)}}else if(v!==void 0){let w=v.array;g=v.version;for(let x=0,S=w.length/3-1;x<S;x+=3){let I=x+0,E=x+1,T=x+2;p.push(I,E,E,T,T,I)}}else return;let f=new(Ol(p)?Jl:Kl)(p,1);f.version=g;let h=n.get(d);h&&t.remove(h),n.set(d,f)}function c(d){let p=n.get(d);if(p){let m=d.index;m!==null&&p.version<m.version&&u(d)}else u(d);return n.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function Wg(e,t,i){let r;function a(p){r=p}let n,s;function o(p){n=p.type,s=p.bytesPerElement}function l(p,m){e.drawElements(r,m,n,p*s),i.update(m,r,1)}function u(p,m,v){v!==0&&(e.drawElementsInstanced(r,m,n,p*s,v),i.update(m,r,v))}function c(p,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,n,p,0,v);let g=0;for(let f=0;f<v;f++)g+=m[f];i.update(g,r,1)}function d(p,m,v,g){if(v===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<p.length;h++)u(p[h]/s,m[h],g[h]);else{f.multiDrawElementsInstancedWEBGL(r,m,0,n,p,0,g,0,v);let h=0;for(let w=0;w<v;w++)h+=m[w]*g[w];i.update(h,r,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function qg(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function Xg(e,t,i){let r=new WeakMap,a=new st;function n(s,o,l){let u=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0,p=r.get(o);if(p===void 0||p.count!==d){let m=function(){C.dispose(),r.delete(o),o.removeEventListener("dispose",m)};p!==void 0&&p.texture.dispose();let v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],S=0;v===!0&&(S=1),g===!0&&(S=2),f===!0&&(S=3);let I=o.attributes.position.count*S,E=1;I>t.maxTextureSize&&(E=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);let T=new Float32Array(I*E*4*d),C=new kl(T,I,E,d);C.type=hi,C.needsUpdate=!0;let b=S*4;for(let y=0;y<d;y++){let R=h[y],N=w[y],z=x[y],D=I*E*4*y;for(let V=0;V<R.count;V++){let k=V*b;v===!0&&(a.fromBufferAttribute(R,V),T[D+k+0]=a.x,T[D+k+1]=a.y,T[D+k+2]=a.z,T[D+k+3]=0),g===!0&&(a.fromBufferAttribute(N,V),T[D+k+4]=a.x,T[D+k+5]=a.y,T[D+k+6]=a.z,T[D+k+7]=0),f===!0&&(a.fromBufferAttribute(z,V),T[D+k+8]=a.x,T[D+k+9]=a.y,T[D+k+10]=a.z,T[D+k+11]=z.itemSize===4?a.w:1)}}p={count:d,texture:C,size:new se(I,E)},r.set(o,p),o.addEventListener("dispose",m)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let m=0;for(let g=0;g<u.length;g++)m+=u[g];let v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",u)}l.getUniforms().setValue(e,"morphTargetsTexture",p.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",p.size)}return{update:n}}function jg(e,t,i,r){let a=new WeakMap;function n(l){let u=r.render.frame,c=l.geometry,d=t.get(l,c);if(a.get(d)!==u&&(t.update(d),a.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==u&&(i.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,u))),l.isSkinnedMesh){let p=l.skeleton;a.get(p)!==u&&(p.update(),a.set(p,u))}return d}function s(){a=new WeakMap}function o(l){let u=l.target;u.removeEventListener("dispose",o),i.remove(u.instanceMatrix),u.instanceColor!==null&&i.remove(u.instanceColor)}return{update:n,dispose:s}}var Ku=new Kt,Ju=new fu(1,1),$u=new kl,Qu=new gd,ec=new nu,tc=[],ic=[],rc=new Float32Array(16),ac=new Float32Array(9),nc=new Float32Array(4);function Jr(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=tc[a];if(n===void 0&&(n=new Float32Array(a),tc[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function Tt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function wt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Hn(e,t){let i=ic[t];i===void 0&&(i=new Int32Array(t),ic[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function Yg(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Zg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tt(i,t))return;e.uniform2fv(this.addr,t),wt(i,t)}}function Kg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Tt(i,t))return;e.uniform3fv(this.addr,t),wt(i,t)}}function Jg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tt(i,t))return;e.uniform4fv(this.addr,t),wt(i,t)}}function $g(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Tt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),wt(i,t)}else{if(Tt(i,r))return;nc.set(r),e.uniformMatrix2fv(this.addr,!1,nc),wt(i,r)}}function Qg(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Tt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),wt(i,t)}else{if(Tt(i,r))return;ac.set(r),e.uniformMatrix3fv(this.addr,!1,ac),wt(i,r)}}function e0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Tt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),wt(i,t)}else{if(Tt(i,r))return;rc.set(r),e.uniformMatrix4fv(this.addr,!1,rc),wt(i,r)}}function t0(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function i0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tt(i,t))return;e.uniform2iv(this.addr,t),wt(i,t)}}function r0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tt(i,t))return;e.uniform3iv(this.addr,t),wt(i,t)}}function a0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tt(i,t))return;e.uniform4iv(this.addr,t),wt(i,t)}}function n0(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function s0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tt(i,t))return;e.uniform2uiv(this.addr,t),wt(i,t)}}function o0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tt(i,t))return;e.uniform3uiv(this.addr,t),wt(i,t)}}function l0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tt(i,t))return;e.uniform4uiv(this.addr,t),wt(i,t)}}function u0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(Ju.compareFunction=Pl,n=Ju):n=Ku,i.setTexture2D(t||n,a)}function c0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Qu,a)}function h0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||ec,a)}function d0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||$u,a)}function p0(e){switch(e){case 5126:return Yg;case 35664:return Zg;case 35665:return Kg;case 35666:return Jg;case 35674:return $g;case 35675:return Qg;case 35676:return e0;case 5124:case 35670:return t0;case 35667:case 35671:return i0;case 35668:case 35672:return r0;case 35669:case 35673:return a0;case 5125:return n0;case 36294:return s0;case 36295:return o0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return d0}}function f0(e,t){e.uniform1fv(this.addr,t)}function m0(e,t){let i=Jr(t,this.size,2);e.uniform2fv(this.addr,i)}function g0(e,t){let i=Jr(t,this.size,3);e.uniform3fv(this.addr,i)}function v0(e,t){let i=Jr(t,this.size,4);e.uniform4fv(this.addr,i)}function x0(e,t){let i=Jr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function _0(e,t){let i=Jr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function E0(e,t){let i=Jr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function y0(e,t){e.uniform1iv(this.addr,t)}function b0(e,t){e.uniform2iv(this.addr,t)}function M0(e,t){e.uniform3iv(this.addr,t)}function S0(e,t){e.uniform4iv(this.addr,t)}function T0(e,t){e.uniform1uiv(this.addr,t)}function w0(e,t){e.uniform2uiv(this.addr,t)}function A0(e,t){e.uniform3uiv(this.addr,t)}function R0(e,t){e.uniform4uiv(this.addr,t)}function C0(e,t,i){let r=this.cache,a=t.length,n=Hn(i,a);Tt(r,n)||(e.uniform1iv(this.addr,n),wt(r,n));for(let s=0;s!==a;++s)i.setTexture2D(t[s]||Ku,n[s])}function L0(e,t,i){let r=this.cache,a=t.length,n=Hn(i,a);Tt(r,n)||(e.uniform1iv(this.addr,n),wt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||Qu,n[s])}function P0(e,t,i){let r=this.cache,a=t.length,n=Hn(i,a);Tt(r,n)||(e.uniform1iv(this.addr,n),wt(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||ec,n[s])}function U0(e,t,i){let r=this.cache,a=t.length,n=Hn(i,a);Tt(r,n)||(e.uniform1iv(this.addr,n),wt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||$u,n[s])}function I0(e){switch(e){case 5126:return f0;case 35664:return m0;case 35665:return g0;case 35666:return v0;case 35674:return x0;case 35675:return _0;case 35676:return E0;case 5124:case 35670:return y0;case 35667:case 35671:return b0;case 35668:case 35672:return M0;case 35669:case 35673:return S0;case 5125:return T0;case 36294:return w0;case 36295:return A0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return U0}}var D0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=p0(t.type)}},N0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=I0(t.type)}},O0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},$o=/(\w+)(\])?(\[|\.)?/g;function sc(e,t){e.seq.push(t),e.map[t.id]=t}function F0(e,t,i){let r=e.name,a=r.length;for($o.lastIndex=0;;){let n=$o.exec(r),s=$o.lastIndex,o=n[1],l=n[2]==="]",u=n[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===a){sc(i,u===void 0?new D0(o,e,t):new N0(o,e,t));break}else{let c=i.map[o];c===void 0&&(c=new O0(o),sc(i,c)),i=c}}}var Gn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let a=e.getActiveUniform(t,r),n=e.getUniformLocation(t,a.name);F0(a,n,this)}}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function oc(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var B0=37297,z0=0;function k0(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var lc=new Xe;function V0(e){et._getMatrix(lc,et.workingColorSpace,e);let t=`mat3( ${lc.elements.map(i=>i.toFixed(4))} )`;switch(et.getTransfer(e)){case an:return[t,"LinearTransferOETF"];case rt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function uc(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+k0(e.getShaderSource(t),s)}else return a}function H0(e,t){let i=V0(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function G0(e,t){let i;switch(t){case Ch:i="Linear";break;case Lh:i="Reinhard";break;case Ph:i="Cineon";break;case ds:i="ACESFilmic";break;case Ih:i="AgX";break;case Dh:i="Neutral";break;case Uh:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Wn=new L;function W0(){et.getLuminanceCoefficients(Wn);let e=Wn.x.toFixed(4),t=Wn.y.toFixed(4),i=Wn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q0(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function X0(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function j0(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function Ha(e){return e!==""}function cc(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(e){return e.replace(Y0,K0)}var Z0=new Map;function K0(e,t){let i=qe[t];if(i===void 0){let r=Z0.get(t);if(r!==void 0)i=qe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Qo(i)}var J0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(e){return e.replace(J0,$0)}function $0(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function pc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Q0(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===ml?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===lh?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Mi&&(t="SHADOWMAP_TYPE_VSM"),t}function ev(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Tr:case wr:t="ENVMAP_TYPE_CUBE";break;case Ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tv(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case wr:t="ENVMAP_MODE_REFRACTION";break}return t}function iv(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case hs:t="ENVMAP_BLENDING_MULTIPLY";break;case Ah:t="ENVMAP_BLENDING_MIX";break;case Rh:t="ENVMAP_BLENDING_ADD";break}return t}function rv(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function av(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=Q0(i),u=ev(i),c=tv(i),d=iv(i),p=rv(i),m=q0(i),v=X0(n),g=a.createProgram(),f,h,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v].filter(Ha).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v].filter(Ha).join(`
`),h.length>0&&(h+=`
`)):(f=[pc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),h=[pc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.envMap?"#define "+c:"",i.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ki?"#define TONE_MAPPING":"",i.toneMapping!==ki?qe.tonemapping_pars_fragment:"",i.toneMapping!==ki?G0("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,H0("linearToOutputTexel",i.outputColorSpace),W0(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ha).join(`
`)),s=Qo(s),s=cc(s,i),s=hc(s,i),o=Qo(o),o=cc(o,i),o=hc(o,i),s=dc(s),o=dc(o),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",i.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let x=w+f+s,S=w+h+o,I=oc(a,a.VERTEX_SHADER,x),E=oc(a,a.FRAGMENT_SHADER,S);a.attachShader(g,I),a.attachShader(g,E),i.index0AttributeName!==void 0?a.bindAttribLocation(g,0,i.index0AttributeName):i.morphTargets===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g);function T(R){if(e.debug.checkShaderErrors){let N=a.getProgramInfoLog(g)||"",z=a.getShaderInfoLog(I)||"",D=a.getShaderInfoLog(E)||"",V=N.trim(),k=z.trim(),q=D.trim(),H=!0,ee=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,g,I,E);else{let pe=uc(a,I,"vertex"),Pe=uc(a,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+pe+`
`+Pe)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(k===""||q==="")&&(ee=!1);ee&&(R.diagnostics={runnable:H,programLog:V,vertexShader:{log:k,prefix:f},fragmentShader:{log:q,prefix:h}})}a.deleteShader(I),a.deleteShader(E),C=new Gn(a,g),b=j0(a,g)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=a.getProgramParameter(g,B0)),y},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=z0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=E,this}var nv=0,sv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),n=this._getShaderCacheForMaterial(e);return n.has(r)===!1&&(n.add(r),r.usedTimes++),n.has(a)===!1&&(n.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ov(e),t.set(e,i)),i}},ov=class{constructor(e){this.id=nv++,this.code=e,this.usedTimes=0}};function lv(e,t,i,r,a,n,s){let o=new po,l=new sv,u=new Set,c=[],d=a.logarithmicDepthBuffer,p=a.vertexTextures,m=a.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return u.add(b),b===0?"uv":`uv${b}`}function f(b,y,R,N,z){let D=N.fog,V=z.geometry,k=b.isMeshStandardMaterial?N.environment:null,q=(b.isMeshStandardMaterial?i:t).get(b.envMap||k),H=q&&q.mapping===Ka?q.image.height:null,ee=v[b.type];b.precision!==null&&(m=a.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let pe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Pe=pe!==void 0?pe.length:0,Oe=0;V.morphAttributes.position!==void 0&&(Oe=1),V.morphAttributes.normal!==void 0&&(Oe=2),V.morphAttributes.color!==void 0&&(Oe=3);let it,$e,Y,ue;if(ee){let nt=gi[ee];it=nt.vertexShader,$e=nt.fragmentShader}else it=b.vertexShader,$e=b.fragmentShader,l.update(b),Y=l.getVertexShaderID(b),ue=l.getFragmentShaderID(b);let he=e.getRenderTarget(),_e=e.state.buffers.depth.getReversed(),Ie=z.isInstancedMesh===!0,Me=z.isBatchedMesh===!0,Ze=!!b.map,P=!!b.matcap,Z=!!q,Q=!!b.aoMap,te=!!b.lightMap,K=!!b.bumpMap,de=!!b.normalMap,ae=!!b.displacementMap,oe=!!b.emissiveMap,ke=!!b.metalnessMap,Ge=!!b.roughnessMap,Ve=b.anisotropy>0,A=b.clearcoat>0,_=b.dispersion>0,F=b.iridescence>0,j=b.sheen>0,J=b.transmission>0,X=Ve&&!!b.anisotropyMap,Ee=A&&!!b.clearcoatMap,le=A&&!!b.clearcoatNormalMap,Se=A&&!!b.clearcoatRoughnessMap,Ae=F&&!!b.iridescenceMap,ne=F&&!!b.iridescenceThicknessMap,me=j&&!!b.sheenColorMap,De=j&&!!b.sheenRoughnessMap,Le=!!b.specularMap,ge=!!b.specularColorMap,Ke=!!b.specularIntensityMap,U=J&&!!b.transmissionMap,ve=J&&!!b.thicknessMap,ce=!!b.gradientMap,we=!!b.alphaMap,re=b.alphaTest>0,$=!!b.alphaHash,Te=!!b.extensions,Ue=ki;b.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ue=e.toneMapping);let St={shaderID:ee,shaderType:b.type,shaderName:b.name,vertexShader:it,fragmentShader:$e,defines:b.defines,customVertexShaderID:Y,customFragmentShaderID:ue,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Me,batchingColor:Me&&z._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&z.instanceColor!==null,instancingMorph:Ie&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:he===null?e.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Rr,alphaToCoverage:!!b.alphaToCoverage,map:Ze,matcap:P,envMap:Z,envMapMode:Z&&q.mapping,envMapCubeUVHeight:H,aoMap:Q,lightMap:te,bumpMap:K,normalMap:de,displacementMap:p&&ae,emissiveMap:oe,normalMapObjectSpace:de&&b.normalMapType===Bh,normalMapTangentSpace:de&&b.normalMapType===eo,metalnessMap:ke,roughnessMap:Ge,anisotropy:Ve,anisotropyMap:X,clearcoat:A,clearcoatMap:Ee,clearcoatNormalMap:le,clearcoatRoughnessMap:Se,dispersion:_,iridescence:F,iridescenceMap:Ae,iridescenceThicknessMap:ne,sheen:j,sheenColorMap:me,sheenRoughnessMap:De,specularMap:Le,specularColorMap:ge,specularIntensityMap:Ke,transmission:J,transmissionMap:U,thicknessMap:ve,gradientMap:ce,opaque:b.transparent===!1&&b.blending===Mr&&b.alphaToCoverage===!1,alphaMap:we,alphaTest:re,alphaHash:$,combine:b.combine,mapUv:Ze&&g(b.map.channel),aoMapUv:Q&&g(b.aoMap.channel),lightMapUv:te&&g(b.lightMap.channel),bumpMapUv:K&&g(b.bumpMap.channel),normalMapUv:de&&g(b.normalMap.channel),displacementMapUv:ae&&g(b.displacementMap.channel),emissiveMapUv:oe&&g(b.emissiveMap.channel),metalnessMapUv:ke&&g(b.metalnessMap.channel),roughnessMapUv:Ge&&g(b.roughnessMap.channel),anisotropyMapUv:X&&g(b.anisotropyMap.channel),clearcoatMapUv:Ee&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:me&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:De&&g(b.sheenRoughnessMap.channel),specularMapUv:Le&&g(b.specularMap.channel),specularColorMapUv:ge&&g(b.specularColorMap.channel),specularIntensityMapUv:Ke&&g(b.specularIntensityMap.channel),transmissionMapUv:U&&g(b.transmissionMap.channel),thicknessMapUv:ve&&g(b.thicknessMap.channel),alphaMapUv:we&&g(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(de||Ve),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(Ze||we),fog:!!D,useFog:b.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:z.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Oe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ze&&b.map.isVideoTexture===!0&&et.getTransfer(b.map.colorSpace)===rt,decodeVideoTextureEmissive:oe&&b.emissiveMap.isVideoTexture===!0&&et.getTransfer(b.emissiveMap.colorSpace)===rt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Vt,flipSided:b.side===Ot,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Te&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&b.extensions.multiDraw===!0||Me)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return St.vertexUv1s=u.has(1),St.vertexUv2s=u.has(2),St.vertexUv3s=u.has(3),u.clear(),St}function h(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)y.push(R),y.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(w(y,b),x(y,b),y.push(e.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function w(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function x(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function S(b){let y=v[b.type],R;if(y){let N=gi[y];R=Cd.clone(N.uniforms)}else R=b.uniforms;return R}function I(b,y){let R;for(let N=0,z=c.length;N<z;N++){let D=c[N];if(D.cacheKey===y){R=D,++R.usedTimes;break}}return R===void 0&&(R=new av(e,y,b,n),c.push(R)),R}function E(b){if(--b.usedTimes===0){let y=c.indexOf(b);c[y]=c[c.length-1],c.pop(),b.destroy()}}function T(b){l.remove(b)}function C(){l.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:S,acquireProgram:I,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:C}}function uv(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function cv(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function fc(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function mc(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(d,p,m,v,g,f){let h=e[t];return h===void 0?(h={id:d.id,object:d,geometry:p,material:m,groupOrder:v,renderOrder:d.renderOrder,z:g,group:f},e[t]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=m,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=g,h.group=f),t++,h}function o(d,p,m,v,g,f){let h=s(d,p,m,v,g,f);m.transmission>0?r.push(h):m.transparent===!0?a.push(h):i.push(h)}function l(d,p,m,v,g,f){let h=s(d,p,m,v,g,f);m.transmission>0?r.unshift(h):m.transparent===!0?a.unshift(h):i.unshift(h)}function u(d,p){i.length>1&&i.sort(d||cv),r.length>1&&r.sort(p||fc),a.length>1&&a.sort(p||fc)}function c(){for(let d=t,p=e.length;d<p;d++){let m=e[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:o,unshift:l,finish:c,sort:u}}function hv(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new mc,e.set(r,[s])):a>=n.length?(s=new mc,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function dv(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new L,color:new Ye};break;case"SpotLight":i={position:new L,direction:new L,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new L,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new L,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":i={color:new Ye,position:new L,halfWidth:new L,halfHeight:new L};break}return e[t.id]=i,i}}}function pv(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var fv=0;function mv(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function gv(e){let t=new dv,i=pv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new L);let a=new L,n=new ct,s=new ct;function o(u){let c=0,d=0,p=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let m=0,v=0,g=0,f=0,h=0,w=0,x=0,S=0,I=0,E=0,T=0;u.sort(mv);for(let b=0,y=u.length;b<y;b++){let R=u[b],N=R.color,z=R.intensity,D=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=N.r*z,d+=N.g*z,p+=N.b*z;else if(R.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(R.sh.coefficients[k],z);T++}else if(R.isDirectionalLight){let k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let q=R.shadow,H=i.get(R);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,r.directionalShadow[m]=H,r.directionalShadowMap[m]=V,r.directionalShadowMatrix[m]=R.shadow.matrix,w++}r.directional[m]=k,m++}else if(R.isSpotLight){let k=t.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(N).multiplyScalar(z),k.distance=D,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,r.spot[g]=k;let q=R.shadow;if(R.map&&(r.spotLightMap[I]=R.map,I++,q.updateMatrices(R),R.castShadow&&E++),r.spotLightMatrix[g]=q.matrix,R.castShadow){let H=i.get(R);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,r.spotShadow[g]=H,r.spotShadowMap[g]=V,S++}g++}else if(R.isRectAreaLight){let k=t.get(R);k.color.copy(N).multiplyScalar(z),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),r.rectArea[f]=k,f++}else if(R.isPointLight){let k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){let q=R.shadow,H=i.get(R);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,H.shadowCameraNear=q.camera.near,H.shadowCameraFar=q.camera.far,r.pointShadow[v]=H,r.pointShadowMap[v]=V,r.pointShadowMatrix[v]=R.shadow.matrix,x++}r.point[v]=k,v++}else if(R.isHemisphereLight){let k=t.get(R);k.skyColor.copy(R.color).multiplyScalar(z),k.groundColor.copy(R.groundColor).multiplyScalar(z),r.hemi[h]=k,h++}}f>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2)),r.ambient[0]=c,r.ambient[1]=d,r.ambient[2]=p;let C=r.hash;(C.directionalLength!==m||C.pointLength!==v||C.spotLength!==g||C.rectAreaLength!==f||C.hemiLength!==h||C.numDirectionalShadows!==w||C.numPointShadows!==x||C.numSpotShadows!==S||C.numSpotMaps!==I||C.numLightProbes!==T)&&(r.directional.length=m,r.spot.length=g,r.rectArea.length=f,r.point.length=v,r.hemi.length=h,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=S+I-E,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=E,r.numLightProbes=T,C.directionalLength=m,C.pointLength=v,C.spotLength=g,C.rectAreaLength=f,C.hemiLength=h,C.numDirectionalShadows=w,C.numPointShadows=x,C.numSpotShadows=S,C.numSpotMaps=I,C.numLightProbes=T,r.version=fv++)}function l(u,c){let d=0,p=0,m=0,v=0,g=0,f=c.matrixWorldInverse;for(let h=0,w=u.length;h<w;h++){let x=u[h];if(x.isDirectionalLight){let S=r.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(f),d++}else if(x.isSpotLight){let S=r.spot[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(f),m++}else if(x.isRectAreaLight){let S=r.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),s.identity(),n.copy(x.matrixWorld),n.premultiply(f),s.extractRotation(n),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),v++}else if(x.isPointLight){let S=r.point[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){let S=r.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:r}}function gc(e){let t=new gv(e),i=[],r=[];function a(c){u.camera=c,i.length=0,r.length=0}function n(c){i.push(c)}function s(c){r.push(c)}function o(){t.setup(i)}function l(c){t.setupView(i,c)}let u={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:u,setupLights:o,setupLightsView:l,pushLight:n,pushShadow:s}}function vv(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new gc(e),t.set(a,[o])):n>=s.length?(o=new gc(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_v=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ev(e,t,i){let r=new Ro,a=new se,n=new se,s=new st,o=new yp({depthPacking:Fh}),l=new bp,u={},c=i.maxTextureSize,d={[Bi]:Ot,[Ot]:Bi,[Vt]:Vt},p=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:xv,fragmentShader:_v}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let v=new Lt;v.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new xt(v,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml;let h=this.type;this.render=function(E,T,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;let b=e.getRenderTarget(),y=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),N=e.state;N.setBlending(zi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let z=h!==Mi&&this.type===Mi,D=h===Mi&&this.type!==Mi;for(let V=0,k=E.length;V<k;V++){let q=E[V],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);let ee=H.getFrameExtents();if(a.multiply(ee),n.copy(H.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(n.x=Math.floor(c/ee.x),a.x=n.x*ee.x,H.mapSize.x=n.x),a.y>c&&(n.y=Math.floor(c/ee.y),a.y=n.y*ee.y,H.mapSize.y=n.y)),H.map===null||z===!0||D===!0){let Pe=this.type!==Mi?{minFilter:Xt,magFilter:Xt}:{};H.map!==null&&H.map.dispose(),H.map=new ar(a.x,a.y,Pe),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}e.setRenderTarget(H.map),e.clear();let pe=H.getViewportCount();for(let Pe=0;Pe<pe;Pe++){let Oe=H.getViewport(Pe);s.set(n.x*Oe.x,n.y*Oe.y,n.x*Oe.z,n.y*Oe.w),N.viewport(s),H.updateMatrices(q,Pe),r=H.getFrustum(),S(T,C,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===Mi&&w(H,C),H.needsUpdate=!1}h=this.type,f.needsUpdate=!1,e.setRenderTarget(b,y,R)};function w(E,T){let C=t.update(g);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ar(a.x,a.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(T,null,C,p,g,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(T,null,C,m,g,null)}function x(E,T,C,b){let y=null,R=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)y=R;else if(y=C.isPointLight===!0?l:o,e.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let N=y.uuid,z=T.uuid,D=u[N];D===void 0&&(D={},u[N]=D);let V=D[z];V===void 0&&(V=y.clone(),D[z]=V,T.addEventListener("dispose",I)),y=V}if(y.visible=T.visible,y.wireframe=T.wireframe,b===Mi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let N=e.properties.get(y);N.light=C}return y}function S(E,T,C,b,y){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Mi)&&(!E.frustumCulled||r.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let N=t.update(E),z=E.material;if(Array.isArray(z)){let D=N.groups;for(let V=0,k=D.length;V<k;V++){let q=D[V],H=z[q.materialIndex];if(H&&H.visible){let ee=x(E,H,b,y);E.onBeforeShadow(e,E,T,C,N,ee,q),e.renderBufferDirect(C,null,N,ee,E,q),E.onAfterShadow(e,E,T,C,N,ee,q)}}}else if(z.visible){let D=x(E,z,b,y);E.onBeforeShadow(e,E,T,C,N,D,null),e.renderBufferDirect(C,null,N,D,E,null),E.onAfterShadow(e,E,T,C,N,D,null)}}let R=E.children;for(let N=0,z=R.length;N<z;N++)S(R[N],T,C,b,y)}function I(E){E.target.removeEventListener("dispose",I);for(let T in u){let C=u[T],b=E.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}var yv={[as]:ns,[ss]:us,[os]:cs,[Sr]:ls,[ns]:as,[us]:ss,[cs]:os,[ls]:Sr};function bv(e,t){function i(){let U=!1,ve=new st,ce=null,we=new st(0,0,0,0);return{setMask:function(re){ce!==re&&!U&&(e.colorMask(re,re,re,re),ce=re)},setLocked:function(re){U=re},setClear:function(re,$,Te,Ue,St){St===!0&&(re*=Ue,$*=Ue,Te*=Ue),ve.set(re,$,Te,Ue),we.equals(ve)===!1&&(e.clearColor(re,$,Te,Ue),we.copy(ve))},reset:function(){U=!1,ce=null,we.set(-1,0,0,0)}}}function r(){let U=!1,ve=!1,ce=null,we=null,re=null;return{setReversed:function($){if(ve!==$){let Te=t.get("EXT_clip_control");$?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ve=$;let Ue=re;re=null,this.setClear(Ue)}},getReversed:function(){return ve},setTest:function($){$?he(e.DEPTH_TEST):_e(e.DEPTH_TEST)},setMask:function($){ce!==$&&!U&&(e.depthMask($),ce=$)},setFunc:function($){if(ve&&($=yv[$]),we!==$){switch($){case as:e.depthFunc(e.NEVER);break;case ns:e.depthFunc(e.ALWAYS);break;case ss:e.depthFunc(e.LESS);break;case Sr:e.depthFunc(e.LEQUAL);break;case os:e.depthFunc(e.EQUAL);break;case ls:e.depthFunc(e.GEQUAL);break;case us:e.depthFunc(e.GREATER);break;case cs:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}we=$}},setLocked:function($){U=$},setClear:function($){re!==$&&(ve&&($=1-$),e.clearDepth($),re=$)},reset:function(){U=!1,ce=null,we=null,re=null,ve=!1}}}function a(){let U=!1,ve=null,ce=null,we=null,re=null,$=null,Te=null,Ue=null,St=null;return{setTest:function(nt){U||(nt?he(e.STENCIL_TEST):_e(e.STENCIL_TEST))},setMask:function(nt){ve!==nt&&!U&&(e.stencilMask(nt),ve=nt)},setFunc:function(nt,yi,bi){(ce!==nt||we!==yi||re!==bi)&&(e.stencilFunc(nt,yi,bi),ce=nt,we=yi,re=bi)},setOp:function(nt,yi,bi){($!==nt||Te!==yi||Ue!==bi)&&(e.stencilOp(nt,yi,bi),$=nt,Te=yi,Ue=bi)},setLocked:function(nt){U=nt},setClear:function(nt){St!==nt&&(e.clearStencil(nt),St=nt)},reset:function(){U=!1,ve=null,ce=null,we=null,re=null,$=null,Te=null,Ue=null,St=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,u=new WeakMap,c={},d={},p=new WeakMap,m=[],v=null,g=!1,f=null,h=null,w=null,x=null,S=null,I=null,E=null,T=new Ye(0,0,0),C=0,b=!1,y=null,R=null,N=null,z=null,D=null,V=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,q=0,H=e.getParameter(e.VERSION);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=q>=2);let ee=null,pe={},Pe=e.getParameter(e.SCISSOR_BOX),Oe=e.getParameter(e.VIEWPORT),it=new st().fromArray(Pe),$e=new st().fromArray(Oe);function Y(U,ve,ce,we){let re=new Uint8Array(4),$=e.createTexture();e.bindTexture(U,$),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Te=0;Te<ce;Te++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(ve,0,e.RGBA,1,1,we,0,e.RGBA,e.UNSIGNED_BYTE,re):e.texImage2D(ve+Te,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,re);return $}let ue={};ue[e.TEXTURE_2D]=Y(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=Y(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=Y(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=Y(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(e.DEPTH_TEST),s.setFunc(Sr),K(!1),de(fl),he(e.CULL_FACE),Q(zi);function he(U){c[U]!==!0&&(e.enable(U),c[U]=!0)}function _e(U){c[U]!==!1&&(e.disable(U),c[U]=!1)}function Ie(U,ve){return d[U]!==ve?(e.bindFramebuffer(U,ve),d[U]=ve,U===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=ve),U===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=ve),!0):!1}function Me(U,ve){let ce=m,we=!1;if(U){ce=p.get(ve),ce===void 0&&(ce=[],p.set(ve,ce));let re=U.textures;if(ce.length!==re.length||ce[0]!==e.COLOR_ATTACHMENT0){for(let $=0,Te=re.length;$<Te;$++)ce[$]=e.COLOR_ATTACHMENT0+$;ce.length=re.length,we=!0}}else ce[0]!==e.BACK&&(ce[0]=e.BACK,we=!0);we&&e.drawBuffers(ce)}function Ze(U){return v!==U?(e.useProgram(U),v=U,!0):!1}let P={[$i]:e.FUNC_ADD,[ch]:e.FUNC_SUBTRACT,[hh]:e.FUNC_REVERSE_SUBTRACT};P[dh]=e.MIN,P[ph]=e.MAX;let Z={[fh]:e.ZERO,[mh]:e.ONE,[gh]:e.SRC_COLOR,[is]:e.SRC_ALPHA,[bh]:e.SRC_ALPHA_SATURATE,[Eh]:e.DST_COLOR,[xh]:e.DST_ALPHA,[vh]:e.ONE_MINUS_SRC_COLOR,[rs]:e.ONE_MINUS_SRC_ALPHA,[yh]:e.ONE_MINUS_DST_COLOR,[_h]:e.ONE_MINUS_DST_ALPHA,[Mh]:e.CONSTANT_COLOR,[Sh]:e.ONE_MINUS_CONSTANT_COLOR,[Th]:e.CONSTANT_ALPHA,[wh]:e.ONE_MINUS_CONSTANT_ALPHA};function Q(U,ve,ce,we,re,$,Te,Ue,St,nt){if(U===zi){g===!0&&(_e(e.BLEND),g=!1);return}if(g===!1&&(he(e.BLEND),g=!0),U!==uh){if(U!==f||nt!==b){if((h!==$i||S!==$i)&&(e.blendEquation(e.FUNC_ADD),h=$i,S=$i),nt)switch(U){case Mr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case gl:e.blendFunc(e.ONE,e.ONE);break;case vl:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case xl:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Mr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case gl:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case vl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,x=null,I=null,E=null,T.set(0,0,0),C=0,f=U,b=nt}return}re=re||ve,$=$||ce,Te=Te||we,(ve!==h||re!==S)&&(e.blendEquationSeparate(P[ve],P[re]),h=ve,S=re),(ce!==w||we!==x||$!==I||Te!==E)&&(e.blendFuncSeparate(Z[ce],Z[we],Z[$],Z[Te]),w=ce,x=we,I=$,E=Te),(Ue.equals(T)===!1||St!==C)&&(e.blendColor(Ue.r,Ue.g,Ue.b,St),T.copy(Ue),C=St),f=U,b=!1}function te(U,ve){U.side===Vt?_e(e.CULL_FACE):he(e.CULL_FACE);let ce=U.side===Ot;ve&&(ce=!ce),K(ce),U.blending===Mr&&U.transparent===!1?Q(zi):Q(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),n.setMask(U.colorWrite);let we=U.stencilWrite;o.setTest(we),we&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),oe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?he(e.SAMPLE_ALPHA_TO_COVERAGE):_e(e.SAMPLE_ALPHA_TO_COVERAGE)}function K(U){y!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),y=U)}function de(U){U!==sh?(he(e.CULL_FACE),U!==R&&(U===fl?e.cullFace(e.BACK):U===oh?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):_e(e.CULL_FACE),R=U}function ae(U){U!==N&&(k&&e.lineWidth(U),N=U)}function oe(U,ve,ce){U?(he(e.POLYGON_OFFSET_FILL),(z!==ve||D!==ce)&&(e.polygonOffset(ve,ce),z=ve,D=ce)):_e(e.POLYGON_OFFSET_FILL)}function ke(U){U?he(e.SCISSOR_TEST):_e(e.SCISSOR_TEST)}function Ge(U){U===void 0&&(U=e.TEXTURE0+V-1),ee!==U&&(e.activeTexture(U),ee=U)}function Ve(U,ve,ce){ce===void 0&&(ee===null?ce=e.TEXTURE0+V-1:ce=ee);let we=pe[ce];we===void 0&&(we={type:void 0,texture:void 0},pe[ce]=we),(we.type!==U||we.texture!==ve)&&(ee!==ce&&(e.activeTexture(ce),ee=ce),e.bindTexture(U,ve||ue[U]),we.type=U,we.texture=ve)}function A(){let U=pe[ee];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{e.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function F(){try{e.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{e.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{e.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{e.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{e.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{e.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{e.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{e.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{e.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(U){it.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),it.copy(U))}function De(U){$e.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),$e.copy(U))}function Le(U,ve){let ce=u.get(ve);ce===void 0&&(ce=new WeakMap,u.set(ve,ce));let we=ce.get(U);we===void 0&&(we=e.getUniformBlockIndex(ve,U.name),ce.set(U,we))}function ge(U,ve){let ce=u.get(ve).get(U);l.get(ve)!==ce&&(e.uniformBlockBinding(ve,ce,U.__bindingPointIndex),l.set(ve,ce))}function Ke(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},ee=null,pe={},d={},p=new WeakMap,m=[],v=null,g=!1,f=null,h=null,w=null,x=null,S=null,I=null,E=null,T=new Ye(0,0,0),C=0,b=!1,y=null,R=null,N=null,z=null,D=null,it.set(0,0,e.canvas.width,e.canvas.height),$e.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:he,disable:_e,bindFramebuffer:Ie,drawBuffers:Me,useProgram:Ze,setBlending:Q,setMaterial:te,setFlipSided:K,setCullFace:de,setLineWidth:ae,setPolygonOffset:oe,setScissorTest:ke,activeTexture:Ge,bindTexture:Ve,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:Ae,texImage3D:ne,updateUBOMapping:Le,uniformBlockBinding:ge,texStorage2D:le,texStorage3D:Se,texSubImage2D:j,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:Ee,scissor:me,viewport:De,reset:Ke}}function Mv(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new se,c=new WeakMap,d,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,_){return m?new OffscreenCanvas(A,_):sn("canvas")}function g(A,_,F){let j=1,J=Ve(A);if((J.width>F||J.height>F)&&(j=F/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let X=Math.floor(j*J.width),Ee=Math.floor(j*J.height);d===void 0&&(d=v(X,Ee));let le=_?v(X,Ee):d;return le.width=X,le.height=Ee,le.getContext("2d").drawImage(A,0,0,X,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Ee+")."),le}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function f(A){return A.generateMipmaps}function h(A){e.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(A,_,F,j,J=!1){if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=_;if(_===e.RED&&(F===e.FLOAT&&(X=e.R32F),F===e.HALF_FLOAT&&(X=e.R16F),F===e.UNSIGNED_BYTE&&(X=e.R8)),_===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(X=e.R8UI),F===e.UNSIGNED_SHORT&&(X=e.R16UI),F===e.UNSIGNED_INT&&(X=e.R32UI),F===e.BYTE&&(X=e.R8I),F===e.SHORT&&(X=e.R16I),F===e.INT&&(X=e.R32I)),_===e.RG&&(F===e.FLOAT&&(X=e.RG32F),F===e.HALF_FLOAT&&(X=e.RG16F),F===e.UNSIGNED_BYTE&&(X=e.RG8)),_===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(X=e.RG8UI),F===e.UNSIGNED_SHORT&&(X=e.RG16UI),F===e.UNSIGNED_INT&&(X=e.RG32UI),F===e.BYTE&&(X=e.RG8I),F===e.SHORT&&(X=e.RG16I),F===e.INT&&(X=e.RG32I)),_===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(X=e.RGB8UI),F===e.UNSIGNED_SHORT&&(X=e.RGB16UI),F===e.UNSIGNED_INT&&(X=e.RGB32UI),F===e.BYTE&&(X=e.RGB8I),F===e.SHORT&&(X=e.RGB16I),F===e.INT&&(X=e.RGB32I)),_===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(X=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(X=e.RGBA16UI),F===e.UNSIGNED_INT&&(X=e.RGBA32UI),F===e.BYTE&&(X=e.RGBA8I),F===e.SHORT&&(X=e.RGBA16I),F===e.INT&&(X=e.RGBA32I)),_===e.RGB&&(F===e.UNSIGNED_INT_5_9_9_9_REV&&(X=e.RGB9_E5),F===e.UNSIGNED_INT_10F_11F_11F_REV&&(X=e.R11F_G11F_B10F)),_===e.RGBA){let Ee=J?an:et.getTransfer(j);F===e.FLOAT&&(X=e.RGBA32F),F===e.HALF_FLOAT&&(X=e.RGBA16F),F===e.UNSIGNED_BYTE&&(X=Ee===rt?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT_4_4_4_4&&(X=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(X=e.RGB5_A1)}return(X===e.R16F||X===e.R32F||X===e.RG16F||X===e.RG32F||X===e.RGBA16F||X===e.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function S(A,_){let F;return A?_===null||_===tr||_===pa?F=e.DEPTH24_STENCIL8:_===hi?F=e.DEPTH32F_STENCIL8:_===ha&&(F=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===tr||_===pa?F=e.DEPTH_COMPONENT24:_===hi?F=e.DEPTH_COMPONENT32F:_===ha&&(F=e.DEPTH_COMPONENT16),F}function I(A,_){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xt&&A.minFilter!==ui?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function E(A){let _=A.target;_.removeEventListener("dispose",E),C(_),_.isVideoTexture&&c.delete(_)}function T(A){let _=A.target;_.removeEventListener("dispose",T),y(_)}function C(A){let _=r.get(A);if(_.__webglInit===void 0)return;let F=A.source,j=p.get(F);if(j){let J=j[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(A),Object.keys(j).length===0&&p.delete(F)}r.remove(A)}function b(A){let _=r.get(A);e.deleteTexture(_.__webglTexture);let F=A.source,j=p.get(F);delete j[_.__cacheKey],s.memory.textures--}function y(A){let _=r.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),r.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let J=0;J<_.__webglFramebuffer[j].length;J++)e.deleteFramebuffer(_.__webglFramebuffer[j][J]);else e.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)e.deleteFramebuffer(_.__webglFramebuffer[j]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=A.textures;for(let j=0,J=F.length;j<J;j++){let X=r.get(F[j]);X.__webglTexture&&(e.deleteTexture(X.__webglTexture),s.memory.textures--),r.remove(F[j])}r.remove(A)}let R=0;function N(){R=0}function z(){let A=R;return A>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),R+=1,A}function D(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function V(A,_){let F=r.get(A);if(A.isVideoTexture&&ke(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){let j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(F,A,_);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+_)}function k(A,_){let F=r.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){ue(F,A,_);return}i.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+_)}function q(A,_){let F=r.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){ue(F,A,_);return}i.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+_)}function H(A,_){let F=r.get(A);if(A.version>0&&F.__version!==A.version){he(F,A,_);return}i.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+_)}let ee={[Ar]:e.REPEAT,[Qi]:e.CLAMP_TO_EDGE,[ms]:e.MIRRORED_REPEAT},pe={[Xt]:e.NEAREST,[Nh]:e.NEAREST_MIPMAP_NEAREST,[Ja]:e.NEAREST_MIPMAP_LINEAR,[ui]:e.LINEAR,[gs]:e.LINEAR_MIPMAP_NEAREST,[er]:e.LINEAR_MIPMAP_LINEAR},Pe={[zh]:e.NEVER,[qh]:e.ALWAYS,[kh]:e.LESS,[Pl]:e.LEQUAL,[Vh]:e.EQUAL,[Wh]:e.GEQUAL,[Hh]:e.GREATER,[Gh]:e.NOTEQUAL};function Oe(A,_){if(_.type===hi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===ui||_.magFilter===gs||_.magFilter===Ja||_.magFilter===er||_.minFilter===ui||_.minFilter===gs||_.minFilter===Ja||_.minFilter===er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,ee[_.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,ee[_.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,ee[_.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,pe[_.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,pe[_.minFilter]),_.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,Pe[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Xt||_.minFilter!==Ja&&_.minFilter!==er||_.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function it(A,_){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",E));let j=_.source,J=p.get(j);J===void 0&&(J={},p.set(j,J));let X=D(_);if(X!==A.__cacheKey){J[X]===void 0&&(J[X]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,F=!0),J[X].usedTimes++;let Ee=J[A.__cacheKey];Ee!==void 0&&(J[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&b(_)),A.__cacheKey=X,A.__webglTexture=J[X].texture}return F}function $e(A,_,F){return Math.floor(Math.floor(A/F)/_)}function Y(A,_,F,j){let J=A.updateRanges;if(J.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,F,j,_.data);else{J.sort((Ae,ne)=>Ae.start-ne.start);let X=0;for(let Ae=1;Ae<J.length;Ae++){let ne=J[X],me=J[Ae],De=ne.start+ne.count,Le=$e(me.start,_.width,4),ge=$e(ne.start,_.width,4);me.start<=De+1&&Le===ge&&$e(me.start+me.count-1,_.width,4)===Le?ne.count=Math.max(ne.count,me.start+me.count-ne.start):(++X,J[X]=me)}J.length=X+1;let Ee=e.getParameter(e.UNPACK_ROW_LENGTH),le=e.getParameter(e.UNPACK_SKIP_PIXELS),Se=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let Ae=0,ne=J.length;Ae<ne;Ae++){let me=J[Ae],De=Math.floor(me.start/4),Le=Math.ceil(me.count/4),ge=De%_.width,Ke=Math.floor(De/_.width),U=Le;e.pixelStorei(e.UNPACK_SKIP_PIXELS,ge),e.pixelStorei(e.UNPACK_SKIP_ROWS,Ke),i.texSubImage2D(e.TEXTURE_2D,0,ge,Ke,U,1,F,j,_.data)}A.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,Ee),e.pixelStorei(e.UNPACK_SKIP_PIXELS,le),e.pixelStorei(e.UNPACK_SKIP_ROWS,Se)}}function ue(A,_,F){let j=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=e.TEXTURE_3D);let J=it(A,_),X=_.source;i.bindTexture(j,A.__webglTexture,e.TEXTURE0+F);let Ee=r.get(X);if(X.version!==Ee.__version||J===!0){i.activeTexture(e.TEXTURE0+F);let le=et.getPrimaries(et.workingColorSpace),Se=_.colorSpace===Vi?null:et.getPrimaries(_.colorSpace),Ae=_.colorSpace===Vi||le===Se?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ne=g(_.image,!1,a.maxTextureSize);ne=Ge(_,ne);let me=n.convert(_.format,_.colorSpace),De=n.convert(_.type),Le=x(_.internalFormat,me,De,_.colorSpace,_.isVideoTexture);Oe(j,_);let ge,Ke=_.mipmaps,U=_.isVideoTexture!==!0,ve=Ee.__version===void 0||J===!0,ce=X.dataReady,we=I(_,ne);if(_.isDepthTexture)Le=S(_.format===ma,_.type),ve&&(U?i.texStorage2D(e.TEXTURE_2D,1,Le,ne.width,ne.height):i.texImage2D(e.TEXTURE_2D,0,Le,ne.width,ne.height,0,me,De,null));else if(_.isDataTexture)if(Ke.length>0){U&&ve&&i.texStorage2D(e.TEXTURE_2D,we,Le,Ke[0].width,Ke[0].height);for(let re=0,$=Ke.length;re<$;re++)ge=Ke[re],U?ce&&i.texSubImage2D(e.TEXTURE_2D,re,0,0,ge.width,ge.height,me,De,ge.data):i.texImage2D(e.TEXTURE_2D,re,Le,ge.width,ge.height,0,me,De,ge.data);_.generateMipmaps=!1}else U?(ve&&i.texStorage2D(e.TEXTURE_2D,we,Le,ne.width,ne.height),ce&&Y(_,ne,me,De)):i.texImage2D(e.TEXTURE_2D,0,Le,ne.width,ne.height,0,me,De,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&ve&&i.texStorage3D(e.TEXTURE_2D_ARRAY,we,Le,Ke[0].width,Ke[0].height,ne.depth);for(let re=0,$=Ke.length;re<$;re++)if(ge=Ke[re],_.format!==ti)if(me!==null)if(U){if(ce)if(_.layerUpdates.size>0){let Te=Hu(ge.width,ge.height,_.format,_.type);for(let Ue of _.layerUpdates){let St=ge.data.subarray(Ue*Te/ge.data.BYTES_PER_ELEMENT,(Ue+1)*Te/ge.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,re,0,0,Ue,ge.width,ge.height,1,me,St)}_.clearLayerUpdates()}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,ne.depth,me,ge.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,re,Le,ge.width,ge.height,ne.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ce&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,ne.depth,me,De,ge.data):i.texImage3D(e.TEXTURE_2D_ARRAY,re,Le,ge.width,ge.height,ne.depth,0,me,De,ge.data)}else{U&&ve&&i.texStorage2D(e.TEXTURE_2D,we,Le,Ke[0].width,Ke[0].height);for(let re=0,$=Ke.length;re<$;re++)ge=Ke[re],_.format!==ti?me!==null?U?ce&&i.compressedTexSubImage2D(e.TEXTURE_2D,re,0,0,ge.width,ge.height,me,ge.data):i.compressedTexImage2D(e.TEXTURE_2D,re,Le,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ce&&i.texSubImage2D(e.TEXTURE_2D,re,0,0,ge.width,ge.height,me,De,ge.data):i.texImage2D(e.TEXTURE_2D,re,Le,ge.width,ge.height,0,me,De,ge.data)}else if(_.isDataArrayTexture)if(U){if(ve&&i.texStorage3D(e.TEXTURE_2D_ARRAY,we,Le,ne.width,ne.height,ne.depth),ce)if(_.layerUpdates.size>0){let re=Hu(ne.width,ne.height,_.format,_.type);for(let $ of _.layerUpdates){let Te=ne.data.subarray($*re/ne.data.BYTES_PER_ELEMENT,($+1)*re/ne.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,$,ne.width,ne.height,1,me,De,Te)}_.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,De,ne.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Le,ne.width,ne.height,ne.depth,0,me,De,ne.data);else if(_.isData3DTexture)U?(ve&&i.texStorage3D(e.TEXTURE_3D,we,Le,ne.width,ne.height,ne.depth),ce&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,De,ne.data)):i.texImage3D(e.TEXTURE_3D,0,Le,ne.width,ne.height,ne.depth,0,me,De,ne.data);else if(_.isFramebufferTexture){if(ve)if(U)i.texStorage2D(e.TEXTURE_2D,we,Le,ne.width,ne.height);else{let re=ne.width,$=ne.height;for(let Te=0;Te<we;Te++)i.texImage2D(e.TEXTURE_2D,Te,Le,re,$,0,me,De,null),re>>=1,$>>=1}}else if(Ke.length>0){if(U&&ve){let re=Ve(Ke[0]);i.texStorage2D(e.TEXTURE_2D,we,Le,re.width,re.height)}for(let re=0,$=Ke.length;re<$;re++)ge=Ke[re],U?ce&&i.texSubImage2D(e.TEXTURE_2D,re,0,0,me,De,ge):i.texImage2D(e.TEXTURE_2D,re,Le,me,De,ge);_.generateMipmaps=!1}else if(U){if(ve){let re=Ve(ne);i.texStorage2D(e.TEXTURE_2D,we,Le,re.width,re.height)}ce&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,me,De,ne)}else i.texImage2D(e.TEXTURE_2D,0,Le,me,De,ne);f(_)&&h(j),Ee.__version=X.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function he(A,_,F){if(_.image.length!==6)return;let j=it(A,_),J=_.source;i.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+F);let X=r.get(J);if(J.version!==X.__version||j===!0){i.activeTexture(e.TEXTURE0+F);let Ee=et.getPrimaries(et.workingColorSpace),le=_.colorSpace===Vi?null:et.getPrimaries(_.colorSpace),Se=_.colorSpace===Vi||Ee===le?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Ae=_.isCompressedTexture||_.image[0].isCompressedTexture,ne=_.image[0]&&_.image[0].isDataTexture,me=[];for(let $=0;$<6;$++)!Ae&&!ne?me[$]=g(_.image[$],!0,a.maxCubemapSize):me[$]=ne?_.image[$].image:_.image[$],me[$]=Ge(_,me[$]);let De=me[0],Le=n.convert(_.format,_.colorSpace),ge=n.convert(_.type),Ke=x(_.internalFormat,Le,ge,_.colorSpace),U=_.isVideoTexture!==!0,ve=X.__version===void 0||j===!0,ce=J.dataReady,we=I(_,De);Oe(e.TEXTURE_CUBE_MAP,_);let re;if(Ae){U&&ve&&i.texStorage2D(e.TEXTURE_CUBE_MAP,we,Ke,De.width,De.height);for(let $=0;$<6;$++){re=me[$].mipmaps;for(let Te=0;Te<re.length;Te++){let Ue=re[Te];_.format!==ti?Le!==null?U?ce&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Te,0,0,Ue.width,Ue.height,Le,Ue.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Te,Ke,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ce&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Te,0,0,Ue.width,Ue.height,Le,ge,Ue.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Te,Ke,Ue.width,Ue.height,0,Le,ge,Ue.data)}}}else{if(re=_.mipmaps,U&&ve){re.length>0&&we++;let $=Ve(me[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,we,Ke,$.width,$.height)}for(let $=0;$<6;$++)if(ne){U?ce&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,me[$].width,me[$].height,Le,ge,me[$].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ke,me[$].width,me[$].height,0,Le,ge,me[$].data);for(let Te=0;Te<re.length;Te++){let Ue=re[Te].image[$].image;U?ce&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Te+1,0,0,Ue.width,Ue.height,Le,ge,Ue.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Te+1,Ke,Ue.width,Ue.height,0,Le,ge,Ue.data)}}else{U?ce&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Le,ge,me[$]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ke,Le,ge,me[$]);for(let Te=0;Te<re.length;Te++){let Ue=re[Te];U?ce&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Te+1,0,0,Le,ge,Ue.image[$]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Te+1,Ke,Le,ge,Ue.image[$])}}}f(_)&&h(e.TEXTURE_CUBE_MAP),X.__version=J.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function _e(A,_,F,j,J,X){let Ee=n.convert(F.format,F.colorSpace),le=n.convert(F.type),Se=x(F.internalFormat,Ee,le,F.colorSpace),Ae=r.get(_),ne=r.get(F);if(ne.__renderTarget=_,!Ae.__hasExternalTextures){let me=Math.max(1,_.width>>X),De=Math.max(1,_.height>>X);J===e.TEXTURE_3D||J===e.TEXTURE_2D_ARRAY?i.texImage3D(J,X,Se,me,De,_.depth,0,Ee,le,null):i.texImage2D(J,X,Se,me,De,0,Ee,le,null)}i.bindFramebuffer(e.FRAMEBUFFER,A),oe(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,j,J,ne.__webglTexture,0,ae(_)):(J===e.TEXTURE_2D||J>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,j,J,ne.__webglTexture,X),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Ie(A,_,F){if(e.bindRenderbuffer(e.RENDERBUFFER,A),_.depthBuffer){let j=_.depthTexture,J=j&&j.isDepthTexture?j.type:null,X=S(_.stencilBuffer,J),Ee=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,le=ae(_);oe(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,le,X,_.width,_.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,le,X,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,X,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Ee,e.RENDERBUFFER,A)}else{let j=_.textures;for(let J=0;J<j.length;J++){let X=j[J],Ee=n.convert(X.format,X.colorSpace),le=n.convert(X.type),Se=x(X.internalFormat,Ee,le,X.colorSpace),Ae=ae(_);F&&oe(_)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae,Se,_.width,_.height):oe(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae,Se,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,Se,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Me(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(e.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let F=r.get(_.depthTexture);F.__renderTarget=_,(!F.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V(_.depthTexture,0);let j=F.__webglTexture,J=ae(_);if(_.depthTexture.format===fa)oe(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,j,0,J):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,j,0);else if(_.depthTexture.format===ma)oe(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,j,0,J):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ze(A){let _=r.get(A),F=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let j=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){let J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=j}if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let j=A.texture.mipmaps;j&&j.length>0?Me(_.__webglFramebuffer[0],A):Me(_.__webglFramebuffer,A)}else if(F){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=e.createRenderbuffer(),Ie(_.__webglDepthbuffer[j],A,!1);else{let J=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[j];e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,X)}}else{let j=A.texture.mipmaps;if(j&&j.length>0?i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Ie(_.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,X)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function P(A,_,F){let j=r.get(A);_!==void 0&&_e(j.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&Ze(A)}function Z(A){let _=A.texture,F=r.get(A),j=r.get(_);A.addEventListener("dispose",T);let J=A.textures,X=A.isWebGLCubeRenderTarget===!0,Ee=J.length>1;if(Ee||(j.__webglTexture===void 0&&(j.__webglTexture=e.createTexture()),j.__version=_.version,s.memory.textures++),X){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let Se=0;Se<_.mipmaps.length;Se++)F.__webglFramebuffer[le][Se]=e.createFramebuffer()}else F.__webglFramebuffer[le]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)F.__webglFramebuffer[le]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(Ee)for(let le=0,Se=J.length;le<Se;le++){let Ae=r.get(J[le]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=e.createTexture(),s.memory.textures++)}if(A.samples>0&&oe(A)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){let Se=J[le];F.__webglColorRenderbuffer[le]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[le]);let Ae=n.convert(Se.format,Se.colorSpace),ne=n.convert(Se.type),me=x(Se.internalFormat,Ae,ne,Se.colorSpace,A.isXRRenderTarget===!0),De=ae(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,De,me,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.RENDERBUFFER,F.__webglColorRenderbuffer[le])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),Ie(F.__webglDepthRenderbuffer,A,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(X){i.bindTexture(e.TEXTURE_CUBE_MAP,j.__webglTexture),Oe(e.TEXTURE_CUBE_MAP,_);for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0)for(let Se=0;Se<_.mipmaps.length;Se++)_e(F.__webglFramebuffer[le][Se],A,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se);else _e(F.__webglFramebuffer[le],A,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);f(_)&&h(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ee){for(let le=0,Se=J.length;le<Se;le++){let Ae=J[le],ne=r.get(Ae),me=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(me=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(me,ne.__webglTexture),Oe(me,Ae),_e(F.__webglFramebuffer,A,Ae,e.COLOR_ATTACHMENT0+le,me,0),f(Ae)&&h(me)}i.unbindTexture()}else{let le=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(le,j.__webglTexture),Oe(le,_),_.mipmaps&&_.mipmaps.length>0)for(let Se=0;Se<_.mipmaps.length;Se++)_e(F.__webglFramebuffer[Se],A,_,e.COLOR_ATTACHMENT0,le,Se);else _e(F.__webglFramebuffer,A,_,e.COLOR_ATTACHMENT0,le,0);f(_)&&h(le),i.unbindTexture()}A.depthBuffer&&Ze(A)}function Q(A){let _=A.textures;for(let F=0,j=_.length;F<j;F++){let J=_[F];if(f(J)){let X=w(A),Ee=r.get(J).__webglTexture;i.bindTexture(X,Ee),h(X),i.unbindTexture()}}}let te=[],K=[];function de(A){if(A.samples>0){if(oe(A)===!1){let _=A.textures,F=A.width,j=A.height,J=e.COLOR_BUFFER_BIT,X=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ee=r.get(A),le=_.length>1;if(le)for(let Ae=0;Ae<_.length;Ae++)i.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ae,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ae,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);let Se=A.texture.mipmaps;Se&&Se.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ae=0;Ae<_.length;Ae++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=e.STENCIL_BUFFER_BIT)),le){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ae]);let ne=r.get(_[Ae]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ne,0)}e.blitFramebuffer(0,0,F,j,0,0,F,j,J,e.NEAREST),l===!0&&(te.length=0,K.length=0,te.push(e.COLOR_ATTACHMENT0+Ae),A.depthBuffer&&A.resolveDepthBuffer===!1&&(te.push(X),K.push(X),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,K)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,te))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),le)for(let Ae=0;Ae<_.length;Ae++){i.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ae,e.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ae]);let ne=r.get(_[Ae]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ae,e.TEXTURE_2D,ne,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let _=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function ae(A){return Math.min(a.maxSamples,A.samples)}function oe(A){let _=r.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ke(A){let _=s.render.frame;c.get(A)!==_&&(c.set(A,_),A.update())}function Ge(A,_){let F=A.colorSpace,j=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Rr&&F!==Vi&&(et.getTransfer(F)===rt?(j!==ti||J!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function Ve(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=q,this.setTextureCube=H,this.rebindTextures=P,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=oe}function Sv(e,t){function i(r,a=Vi){let n,s=et.getTransfer(a);if(r===ci)return e.UNSIGNED_BYTE;if(r===xs)return e.UNSIGNED_SHORT_4_4_4_4;if(r===_s)return e.UNSIGNED_SHORT_5_5_5_1;if(r===bl)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Ml)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===El)return e.BYTE;if(r===yl)return e.SHORT;if(r===ha)return e.UNSIGNED_SHORT;if(r===vs)return e.INT;if(r===tr)return e.UNSIGNED_INT;if(r===hi)return e.FLOAT;if(r===da)return e.HALF_FLOAT;if(r===Sl)return e.ALPHA;if(r===Tl)return e.RGB;if(r===ti)return e.RGBA;if(r===fa)return e.DEPTH_COMPONENT;if(r===ma)return e.DEPTH_STENCIL;if(r===Es)return e.RED;if(r===ys)return e.RED_INTEGER;if(r===wl)return e.RG;if(r===bs)return e.RG_INTEGER;if(r===Ms)return e.RGBA_INTEGER;if(r===$a||r===Qa||r===en||r===tn)if(s===rt)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===$a)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Qa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===en)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===tn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===$a)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Qa)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===en)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===tn)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ss||r===Ts||r===ws||r===As)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Ss)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ts)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ws)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===As)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rs||r===Cs||r===Ls)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===Rs||r===Cs)return s===rt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===Ls)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ps||r===Us||r===Is||r===Ds||r===Ns||r===Os||r===Fs||r===Bs||r===zs||r===ks||r===Vs||r===Hs||r===Gs||r===Ws)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===Ps)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Us)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Is)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ds)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ns)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Os)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fs)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bs)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zs)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ks)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Vs)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hs)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gs)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ws)return s===rt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qs||r===Xs||r===js)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===qs)return s===rt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xs)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===js)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ys||r===Zs||r===Ks||r===Js)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===Ys)return n.COMPRESSED_RED_RGTC1_EXT;if(r===Zs)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ks)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Js)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===pa?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var Tv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Av=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new mu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Zi({vertexShader:Tv,fragmentShader:wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Fa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rv=class extends ir{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,u=null,c=null,d=null,p=null,m=null,v=typeof XRWebGLBinding<"u",g=new Av,f={},h=t.getContextAttributes(),w=null,x=null,S=[],I=[],E=new se,T=null,C=new Ht;C.viewport=new st;let b=new Ht;b.viewport=new st;let y=[C,b],R=new Fp,N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ue=S[Y];return ue===void 0&&(ue=new To,S[Y]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Y){let ue=S[Y];return ue===void 0&&(ue=new To,S[Y]=ue),ue.getGripSpace()},this.getHand=function(Y){let ue=S[Y];return ue===void 0&&(ue=new To,S[Y]=ue),ue.getHandSpace()};function D(Y){let ue=I.indexOf(Y.inputSource);if(ue===-1)return;let he=S[ue];he!==void 0&&(he.update(Y.inputSource,Y.frame,l||n),he.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",k);for(let Y=0;Y<S.length;Y++){let ue=I[Y];ue!==null&&(I[Y]=null,S[Y].disconnect(ue))}N=null,z=null,g.reset();for(let Y in f)delete f[Y];e.setRenderTarget(w),p=null,d=null,c=null,r=null,x=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return c===null&&v&&(c=new XRWebGLBinding(r,t)),c},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",V),r.addEventListener("inputsourceschange",k),h.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,he=null,_e=null;h.depth&&(_e=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=h.stencil?ma:fa,he=h.stencil?pa:tr);let Ie={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:a};c=this.getBinding(),d=c.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new ar(d.textureWidth,d.textureHeight,{format:ti,type:ci,depthTexture:new fu(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ue={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ar(p.framebufferWidth,p.framebufferHeight,{format:ti,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(Y){for(let ue=0;ue<Y.removed.length;ue++){let he=Y.removed[ue],_e=I.indexOf(he);_e>=0&&(I[_e]=null,S[_e].disconnect(he))}for(let ue=0;ue<Y.added.length;ue++){let he=Y.added[ue],_e=I.indexOf(he);if(_e===-1){for(let Me=0;Me<S.length;Me++)if(Me>=I.length){I.push(he),_e=Me;break}else if(I[Me]===null){I[Me]=he,_e=Me;break}if(_e===-1)break}let Ie=S[_e];Ie&&Ie.connect(he)}}let q=new L,H=new L;function ee(Y,ue,he){q.setFromMatrixPosition(ue.matrixWorld),H.setFromMatrixPosition(he.matrixWorld);let _e=q.distanceTo(H),Ie=ue.projectionMatrix.elements,Me=he.projectionMatrix.elements,Ze=Ie[14]/(Ie[10]-1),P=Ie[14]/(Ie[10]+1),Z=(Ie[9]+1)/Ie[5],Q=(Ie[9]-1)/Ie[5],te=(Ie[8]-1)/Ie[0],K=(Me[8]+1)/Me[0],de=Ze*te,ae=Ze*K,oe=_e/(-te+K),ke=oe*-te;if(ue.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ke),Y.translateZ(oe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ie[10]===-1)Y.projectionMatrix.copy(ue.projectionMatrix),Y.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{let Ge=Ze+oe,Ve=P+oe,A=de-ke,_=ae+(_e-ke),F=Z*P/Ve*Ge,j=Q*P/Ve*Ge;Y.projectionMatrix.makePerspective(A,_,F,j,Ge,Ve),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function pe(Y,ue){ue===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ue.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ue=Y.near,he=Y.far;g.texture!==null&&(g.depthNear>0&&(ue=g.depthNear),g.depthFar>0&&(he=g.depthFar)),R.near=b.near=C.near=ue,R.far=b.far=C.far=he,(N!==R.near||z!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),N=R.near,z=R.far),R.layers.mask=Y.layers.mask|6,C.layers.mask=R.layers.mask&3,b.layers.mask=R.layers.mask&5;let _e=Y.parent,Ie=R.cameras;pe(R,_e);for(let Me=0;Me<Ie.length;Me++)pe(Ie[Me],_e);Ie.length===2?ee(R,C,b):R.projectionMatrix.copy(C.projectionMatrix),Pe(Y,R,_e)};function Pe(Y,ue,he){he===null?Y.matrix.copy(ue.matrixWorld):(Y.matrix.copy(he.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ue.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ue.projectionMatrix),Y.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=va*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&p===null))return o},this.setFoveation=function(Y){o=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(R)},this.getCameraTexture=function(Y){return f[Y]};let Oe=null;function it(Y,ue){if(u=ue.getViewerPose(l||n),m=ue,u!==null){let he=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let _e=!1;he.length!==R.cameras.length&&(R.cameras.length=0,_e=!0);for(let Me=0;Me<he.length;Me++){let Ze=he[Me],P=null;if(p!==null)P=p.getViewport(Ze);else{let Q=c.getViewSubImage(d,Ze);P=Q.viewport,Me===0&&(e.setRenderTargetTextures(x,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(x))}let Z=y[Me];Z===void 0&&(Z=new Ht,Z.layers.enable(Me),Z.viewport=new st,y[Me]=Z),Z.matrix.fromArray(Ze.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Ze.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(P.x,P.y,P.width,P.height),Me===0&&(R.matrix.copy(Z.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),_e===!0&&R.cameras.push(Z)}let Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){c=i.getBinding();let Me=c.getDepthInformation(he[0]);Me&&Me.isValid&&Me.texture&&g.init(Me,r.renderState)}if(Ie&&Ie.includes("camera-access")&&v){e.state.unbindTexture(),c=i.getBinding();for(let Me=0;Me<he.length;Me++){let Ze=he[Me].camera;if(Ze){let P=f[Ze];P||(P=new mu,f[Ze]=P);let Z=c.getCameraImage(Ze);P.sourceTexture=Z}}}}for(let he=0;he<S.length;he++){let _e=I[he],Ie=S[he];_e!==null&&Ie!==void 0&&Ie.update(_e,ue,l||n)}Oe&&Oe(Y,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),m=null}let $e=new Gu;$e.setAnimationLoop(it),this.setAnimationLoop=function(Y){Oe=Y},this.dispose=function(){}}},mr=new Ai,Cv=new ct;function Lv(e,t){function i(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function r(f,h){h.color.getRGB(f.fogColor.value,tu(e)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function a(f,h,w,x,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?n(f,h):h.isMeshToonMaterial?(n(f,h),d(f,h)):h.isMeshPhongMaterial?(n(f,h),c(f,h)):h.isMeshStandardMaterial?(n(f,h),p(f,h),h.isMeshPhysicalMaterial&&m(f,h,S)):h.isMeshMatcapMaterial?(n(f,h),v(f,h)):h.isMeshDepthMaterial?n(f,h):h.isMeshDistanceMaterial?(n(f,h),g(f,h)):h.isMeshNormalMaterial?n(f,h):h.isLineBasicMaterial?(s(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?l(f,h,w,x):h.isSpriteMaterial?u(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function n(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,i(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,i(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,i(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===Ot&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,i(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===Ot&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,i(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,i(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,i(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);let w=t.get(h),x=w.envMap,S=w.envMapRotation;x&&(f.envMap.value=x,mr.copy(S),mr.x*=-1,mr.y*=-1,mr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),f.envMapRotation.value.setFromMatrix4(Cv.makeRotationFromEuler(mr)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,i(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,i(h.aoMap,f.aoMapTransform))}function s(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,i(h.map,f.mapTransform))}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,w,x){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*w,f.scale.value=x*.5,h.map&&(f.map.value=h.map,i(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,i(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,i(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,i(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function d(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function p(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,i(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,i(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,w){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,i(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,i(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,i(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,i(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,i(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ot&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,i(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,i(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,i(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,i(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,i(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,i(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,i(h.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,h){h.matcap&&(f.matcap.value=h.matcap)}function g(f,h){let w=t.get(h).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Pv(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,x){let S=x.program;r.uniformBlockBinding(w,S)}function u(w,x){let S=a[w.id];S===void 0&&(v(w),S=c(w),a[w.id]=S,w.addEventListener("dispose",f));let I=x.program;r.updateUBOMapping(w,I);let E=t.render.frame;n[w.id]!==E&&(p(w),n[w.id]=E)}function c(w){let x=d();w.__bindingPointIndex=x;let S=e.createBuffer(),I=w.__size,E=w.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,I,E),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,x,S),S}function d(){for(let w=0;w<o;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){let x=a[w.id],S=w.uniforms,I=w.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let E=0,T=S.length;E<T;E++){let C=Array.isArray(S[E])?S[E]:[S[E]];for(let b=0,y=C.length;b<y;b++){let R=C[b];if(m(R,E,b,I)===!0){let N=R.__offset,z=Array.isArray(R.value)?R.value:[R.value],D=0;for(let V=0;V<z.length;V++){let k=z[V],q=g(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,e.bufferSubData(e.UNIFORM_BUFFER,N+D,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,D),D+=q.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,N,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(w,x,S,I){let E=w.value,T=x+"_"+S;if(I[T]===void 0)return typeof E=="number"||typeof E=="boolean"?I[T]=E:I[T]=E.clone(),!0;{let C=I[T];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return I[T]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function v(w){let x=w.uniforms,S=0,I=16;for(let T=0,C=x.length;T<C;T++){let b=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,R=b.length;y<R;y++){let N=b[y],z=Array.isArray(N.value)?N.value:[N.value];for(let D=0,V=z.length;D<V;D++){let k=z[D],q=g(k),H=S%I,ee=H%q.boundary,pe=H+ee;S+=ee,pe!==0&&I-pe<q.storage&&(S+=I-pe),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=q.storage}}}let E=S%I;return E>0&&(S+=I-E),w.__size=S,w.__cache={},this}function g(w){let x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function f(w){let x=w.target;x.removeEventListener("dispose",f);let S=s.indexOf(x.__bindingPointIndex);s.splice(S,1),e.deleteBuffer(a[x.id]),delete a[x.id],delete n[x.id]}function h(){for(let w in a)e.deleteBuffer(a[w]);s=[],a={},n={}}return{bind:l,update:u,dispose:h}}var vc=class{constructor(e={}){let{canvas:t=ud(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=n;let m=new Uint32Array(4),v=new Int32Array(4),g=null,f=null,h=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,S=!1;this._outputColorSpace=bt;let I=0,E=0,T=null,C=-1,b=null,y=new st,R=new st,N=null,z=new Ye(0),D=0,V=t.width,k=t.height,q=1,H=null,ee=null,pe=new st(0,0,V,k),Pe=new st(0,0,V,k),Oe=!1,it=new Ro,$e=!1,Y=!1,ue=new ct,he=new L,_e=new st,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ze(){return T===null?q:1}let P=i;function Z(M,B){return t.getContext(M,B)}try{let M={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r180"),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",we,!1),P===null){let B="webgl2";if(P=Z(B,M),P===null)throw Z(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Q,te,K,de,ae,oe,ke,Ge,Ve,A,_,F,j,J,X,Ee,le,Se,Ae,ne,me,De,Le,ge;function Ke(){Q=new Hg(P),Q.init(),De=new Sv(P,Q),te=new Ng(P,Q,e,De),K=new bv(P,Q),te.reversedDepthBuffer&&d&&K.buffers.depth.setReversed(!0),de=new qg(P),ae=new uv,oe=new Mv(P,Q,K,ae,te,De,de),ke=new Fg(x),Ge=new Vg(x),Ve=new Kp(P),Le=new Ig(P,Ve),A=new Gg(P,Ve,de,Le),_=new jg(P,A,Ve,de),Ae=new Xg(P,te,oe),Ee=new Og(ae),F=new lv(x,ke,Ge,Q,te,Le,Ee),j=new Lv(x,ae),J=new hv,X=new vv(Q),Se=new Ug(x,ke,Ge,K,_,p,o),le=new Ev(x,_,te),ge=new Pv(P,de,te,K),ne=new Dg(P,Q,de),me=new Wg(P,Q,de),de.programs=F.programs,x.capabilities=te,x.extensions=Q,x.properties=ae,x.renderLists=J,x.shadowMap=le,x.state=K,x.info=de}Ke();let U=new Rv(x,P);this.xr=U,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let M=Q.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Q.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(V,k,!1))},this.getSize=function(M){return M.set(V,k)},this.setSize=function(M,B,G=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=M,k=B,t.width=Math.floor(M*q),t.height=Math.floor(B*q),G===!0&&(t.style.width=M+"px",t.style.height=B+"px"),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(V*q,k*q).floor()},this.setDrawingBufferSize=function(M,B,G){V=M,k=B,q=G,t.width=Math.floor(M*G),t.height=Math.floor(B*G),this.setViewport(0,0,M,B)},this.getCurrentViewport=function(M){return M.copy(y)},this.getViewport=function(M){return M.copy(pe)},this.setViewport=function(M,B,G,W){M.isVector4?pe.set(M.x,M.y,M.z,M.w):pe.set(M,B,G,W),K.viewport(y.copy(pe).multiplyScalar(q).round())},this.getScissor=function(M){return M.copy(Pe)},this.setScissor=function(M,B,G,W){M.isVector4?Pe.set(M.x,M.y,M.z,M.w):Pe.set(M,B,G,W),K.scissor(R.copy(Pe).multiplyScalar(q).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(M){K.setScissorTest(Oe=M)},this.setOpaqueSort=function(M){H=M},this.setTransparentSort=function(M){ee=M},this.getClearColor=function(M){return M.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,G=!0){let W=0;if(M){let O=!1;if(T!==null){let ie=T.texture.format;O=ie===Ms||ie===bs||ie===ys}if(O){let ie=T.texture.type,xe=ie===ci||ie===tr||ie===ha||ie===pa||ie===xs||ie===_s,ye=Se.getClearColor(),be=Se.getClearAlpha(),Fe=ye.r,ze=ye.g,Be=ye.b;xe?(m[0]=Fe,m[1]=ze,m[2]=Be,m[3]=be,P.clearBufferuiv(P.COLOR,0,m)):(v[0]=Fe,v[1]=ze,v[2]=Be,v[3]=be,P.clearBufferiv(P.COLOR,0,v))}else W|=P.COLOR_BUFFER_BIT}B&&(W|=P.DEPTH_BUFFER_BIT),G&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Se.dispose(),J.dispose(),X.dispose(),ae.dispose(),ke.dispose(),Ge.dispose(),_.dispose(),Le.dispose(),ge.dispose(),F.dispose(),U.dispose(),U.removeEventListener("sessionstart",yi),U.removeEventListener("sessionend",bi),_r.stop()};function ve(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let M=de.autoReset,B=le.enabled,G=le.autoUpdate,W=le.needsUpdate,O=le.type;Ke(),de.autoReset=M,le.enabled=B,le.autoUpdate=G,le.needsUpdate=W,le.type=O}function we(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function re(M){let B=M.target;B.removeEventListener("dispose",re),$(B)}function $(M){Te(M),ae.remove(M)}function Te(M){let B=ae.get(M).programs;B!==void 0&&(B.forEach(function(G){F.releaseProgram(G)}),M.isShaderMaterial&&F.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,G,W,O,ie){B===null&&(B=Ie);let xe=O.isMesh&&O.matrixWorld.determinant()<0,ye=cx(M,B,G,W,O);K.setMaterial(W,xe);let be=G.index,Fe=1;if(W.wireframe===!0){if(be=A.getWireframeAttribute(G),be===void 0)return;Fe=2}let ze=G.drawRange,Be=G.attributes.position,Qe=ze.start*Fe,lt=(ze.start+ze.count)*Fe;ie!==null&&(Qe=Math.max(Qe,ie.start*Fe),lt=Math.min(lt,(ie.start+ie.count)*Fe)),be!==null?(Qe=Math.max(Qe,0),lt=Math.min(lt,be.count)):Be!=null&&(Qe=Math.max(Qe,0),lt=Math.min(lt,Be.count));let dt=lt-Qe;if(dt<0||dt===1/0)return;Le.setup(O,W,ye,G,be);let gt,ut=ne;if(be!==null&&(gt=Ve.get(be),ut=me,ut.setIndex(gt)),O.isMesh)W.wireframe===!0?(K.setLineWidth(W.wireframeLinewidth*Ze()),ut.setMode(P.LINES)):ut.setMode(P.TRIANGLES);else if(O.isLine){let Re=W.linewidth;Re===void 0&&(Re=1),K.setLineWidth(Re*Ze()),O.isLineSegments?ut.setMode(P.LINES):O.isLineLoop?ut.setMode(P.LINE_LOOP):ut.setMode(P.LINE_STRIP)}else O.isPoints?ut.setMode(P.POINTS):O.isSprite&&ut.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)_a("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ut.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Re=O._multiDrawStarts,Pt=O._multiDrawCounts,Fi=O._multiDrawCount,oi=be?Ve.get(be).bytesPerElement:1,la=ae.get(W).currentProgram.getUniforms();for(let Zt=0;Zt<Fi;Zt++)la.setValue(P,"_gl_DrawID",Zt),ut.render(Re[Zt]/oi,Pt[Zt])}else if(O.isInstancedMesh)ut.renderInstances(Qe,dt,O.count);else if(G.isInstancedBufferGeometry){let Re=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Pt=Math.min(G.instanceCount,Re);ut.renderInstances(Qe,dt,Pt)}else ut.render(Qe,dt)};function Ue(M,B,G){M.transparent===!0&&M.side===Vt&&M.forceSinglePass===!1?(M.side=Ot,M.needsUpdate=!0,Qn(M,B,G),M.side=Bi,M.needsUpdate=!0,Qn(M,B,G),M.side=Vt):Qn(M,B,G)}this.compile=function(M,B,G=null){G===null&&(G=M),f=X.get(G),f.init(B),w.push(f),G.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),M!==G&&M.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();let W=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ie=O.material;if(ie)if(Array.isArray(ie))for(let xe=0;xe<ie.length;xe++){let ye=ie[xe];Ue(ye,G,O),W.add(ye)}else Ue(ie,G,O),W.add(ie)}),f=w.pop(),W},this.compileAsync=function(M,B,G=null){let W=this.compile(M,B,G);return new Promise(O=>{function ie(){if(W.forEach(function(xe){ae.get(xe).currentProgram.isReady()&&W.delete(xe)}),W.size===0){O(M);return}setTimeout(ie,10)}Q.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let St=null;function nt(M){St&&St(M)}function yi(){_r.stop()}function bi(){_r.start()}let _r=new Gu;_r.setAnimationLoop(nt),typeof self<"u"&&_r.setContext(self),this.setAnimationLoop=function(M){St=M,U.setAnimationLoop(M),M===null?_r.stop():_r.start()},U.addEventListener("sessionstart",yi),U.addEventListener("sessionend",bi),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(B),B=U.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,B,T),f=X.get(M,w.length),f.init(B),w.push(f),ue.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),it.setFromProjectionMatrix(ue,di,B.reversedDepth),Y=this.localClippingEnabled,$e=Ee.init(this.clippingPlanes,Y),g=J.get(M,h.length),g.init(),h.push(g),U.enabled===!0&&U.isPresenting===!0){let ie=x.xr.getDepthSensingMesh();ie!==null&&hl(ie,B,-1/0,x.sortObjects)}hl(M,B,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(H,ee),Me=U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1,Me&&Se.addToRenderList(g,M),this.info.render.frame++,$e===!0&&Ee.beginShadows();let G=f.state.shadowsArray;le.render(G,M,B),$e===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=g.opaque,O=g.transmissive;if(f.setupLights(),B.isArrayCamera){let ie=B.cameras;if(O.length>0)for(let xe=0,ye=ie.length;xe<ye;xe++){let be=ie[xe];Hc(W,O,M,be)}Me&&Se.render(M);for(let xe=0,ye=ie.length;xe<ye;xe++){let be=ie[xe];Vc(g,M,be,be.viewport)}}else O.length>0&&Hc(W,O,M,B),Me&&Se.render(M),Vc(g,M,B);T!==null&&E===0&&(oe.updateMultisampleRenderTarget(T),oe.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(x,M,B),Le.resetDefaultState(),C=-1,b=null,w.pop(),w.length>0?(f=w[w.length-1],$e===!0&&Ee.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function hl(M,B,G,W){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||it.intersectsSprite(M)){W&&_e.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ue);let ie=_.update(M),xe=M.material;xe.visible&&g.push(M,ie,xe,G,_e.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||it.intersectsObject(M))){let ie=_.update(M),xe=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),_e.copy(M.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),_e.copy(ie.boundingSphere.center)),_e.applyMatrix4(M.matrixWorld).applyMatrix4(ue)),Array.isArray(xe)){let ye=ie.groups;for(let be=0,Fe=ye.length;be<Fe;be++){let ze=ye[be],Be=xe[ze.materialIndex];Be&&Be.visible&&g.push(M,ie,Be,G,_e.z,ze)}}else xe.visible&&g.push(M,ie,xe,G,_e.z,null)}}let O=M.children;for(let ie=0,xe=O.length;ie<xe;ie++)hl(O[ie],B,G,W)}function Vc(M,B,G,W){let O=M.opaque,ie=M.transmissive,xe=M.transparent;f.setupLightsView(G),$e===!0&&Ee.setGlobalState(x.clippingPlanes,G),W&&K.viewport(y.copy(W)),O.length>0&&$n(O,B,G),ie.length>0&&$n(ie,B,G),xe.length>0&&$n(xe,B,G),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Hc(M,B,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new ar(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?da:ci,minFilter:er,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let O=f.state.transmissionRenderTarget[W.id],ie=W.viewport||y;O.setSize(ie.z*x.transmissionResolutionScale,ie.w*x.transmissionResolutionScale);let xe=x.getRenderTarget(),ye=x.getActiveCubeFace(),be=x.getActiveMipmapLevel();x.setRenderTarget(O),x.getClearColor(z),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear(),Me&&Se.render(G);let Fe=x.toneMapping;x.toneMapping=ki;let ze=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),$e===!0&&Ee.setGlobalState(x.clippingPlanes,W),$n(M,G,W),oe.updateMultisampleRenderTarget(O),oe.updateRenderTargetMipmap(O),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Qe=0,lt=B.length;Qe<lt;Qe++){let dt=B[Qe],gt=dt.object,ut=dt.geometry,Re=dt.material,Pt=dt.group;if(Re.side===Vt&&gt.layers.test(W.layers)){let Fi=Re.side;Re.side=Ot,Re.needsUpdate=!0,Gc(gt,G,W,ut,Re,Pt),Re.side=Fi,Re.needsUpdate=!0,Be=!0}}Be===!0&&(oe.updateMultisampleRenderTarget(O),oe.updateRenderTargetMipmap(O))}x.setRenderTarget(xe,ye,be),x.setClearColor(z,D),ze!==void 0&&(W.viewport=ze),x.toneMapping=Fe}function $n(M,B,G){let W=B.isScene===!0?B.overrideMaterial:null;for(let O=0,ie=M.length;O<ie;O++){let xe=M[O],ye=xe.object,be=xe.geometry,Fe=xe.group,ze=xe.material;ze.allowOverride===!0&&W!==null&&(ze=W),ye.layers.test(G.layers)&&Gc(ye,B,G,be,ze,Fe)}}function Gc(M,B,G,W,O,ie){M.onBeforeRender(x,B,G,W,O,ie),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(x,B,G,W,M,ie),O.transparent===!0&&O.side===Vt&&O.forceSinglePass===!1?(O.side=Ot,O.needsUpdate=!0,x.renderBufferDirect(G,B,W,O,M,ie),O.side=Bi,O.needsUpdate=!0,x.renderBufferDirect(G,B,W,O,M,ie),O.side=Vt):x.renderBufferDirect(G,B,W,O,M,ie),M.onAfterRender(x,B,G,W,O,ie)}function Qn(M,B,G){B.isScene!==!0&&(B=Ie);let W=ae.get(M),O=f.state.lights,ie=f.state.shadowsArray,xe=O.state.version,ye=F.getParameters(M,O.state,ie,B,G),be=F.getProgramCacheKey(ye),Fe=W.programs;W.environment=M.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(M.isMeshStandardMaterial?Ge:ke).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Fe===void 0&&(M.addEventListener("dispose",re),Fe=new Map,W.programs=Fe);let ze=Fe.get(be);if(ze!==void 0){if(W.currentProgram===ze&&W.lightsStateVersion===xe)return qc(M,ye),ze}else ye.uniforms=F.getUniforms(M),M.onBeforeCompile(ye,x),ze=F.acquireProgram(ye,be),Fe.set(be,ze),W.uniforms=ye.uniforms;let Be=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Be.clippingPlanes=Ee.uniform),qc(M,ye),W.needsLights=dx(M),W.lightsStateVersion=xe,W.needsLights&&(Be.ambientLightColor.value=O.state.ambient,Be.lightProbe.value=O.state.probe,Be.directionalLights.value=O.state.directional,Be.directionalLightShadows.value=O.state.directionalShadow,Be.spotLights.value=O.state.spot,Be.spotLightShadows.value=O.state.spotShadow,Be.rectAreaLights.value=O.state.rectArea,Be.ltc_1.value=O.state.rectAreaLTC1,Be.ltc_2.value=O.state.rectAreaLTC2,Be.pointLights.value=O.state.point,Be.pointLightShadows.value=O.state.pointShadow,Be.hemisphereLights.value=O.state.hemi,Be.directionalShadowMap.value=O.state.directionalShadowMap,Be.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Be.spotShadowMap.value=O.state.spotShadowMap,Be.spotLightMatrix.value=O.state.spotLightMatrix,Be.spotLightMap.value=O.state.spotLightMap,Be.pointShadowMap.value=O.state.pointShadowMap,Be.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=ze,W.uniformsList=null,ze}function Wc(M){if(M.uniformsList===null){let B=M.currentProgram.getUniforms();M.uniformsList=Gn.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function qc(M,B){let G=ae.get(M);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.batchingColor=B.batchingColor,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.instancingMorph=B.instancingMorph,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function cx(M,B,G,W,O){B.isScene!==!0&&(B=Ie),oe.resetTextureUnits();let ie=B.fog,xe=W.isMeshStandardMaterial?B.environment:null,ye=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Rr,be=(W.isMeshStandardMaterial?Ge:ke).get(W.envMap||xe),Fe=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Be=!!G.morphAttributes.position,Qe=!!G.morphAttributes.normal,lt=!!G.morphAttributes.color,dt=ki;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(dt=x.toneMapping);let gt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ut=gt!==void 0?gt.length:0,Re=ae.get(W),Pt=f.state.lights;if($e===!0&&(Y===!0||M!==b)){let Ut=M===b&&W.id===C;Ee.setState(W,M,Ut)}let Fi=!1;W.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Pt.state.version||Re.outputColorSpace!==ye||O.isBatchedMesh&&Re.batching===!1||!O.isBatchedMesh&&Re.batching===!0||O.isBatchedMesh&&Re.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Re.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Re.instancing===!1||!O.isInstancedMesh&&Re.instancing===!0||O.isSkinnedMesh&&Re.skinning===!1||!O.isSkinnedMesh&&Re.skinning===!0||O.isInstancedMesh&&Re.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Re.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Re.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Re.instancingMorph===!1&&O.morphTexture!==null||Re.envMap!==be||W.fog===!0&&Re.fog!==ie||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Ee.numPlanes||Re.numIntersection!==Ee.numIntersection)||Re.vertexAlphas!==Fe||Re.vertexTangents!==ze||Re.morphTargets!==Be||Re.morphNormals!==Qe||Re.morphColors!==lt||Re.toneMapping!==dt||Re.morphTargetsCount!==ut)&&(Fi=!0):(Fi=!0,Re.__version=W.version);let oi=Re.currentProgram;Fi===!0&&(oi=Qn(W,B,O));let la=!1,Zt=!1,Za=!1,vt=oi.getUniforms(),Qt=Re.uniforms;if(K.useProgram(oi.program)&&(la=!0,Zt=!0,Za=!0),W.id!==C&&(C=W.id,Zt=!0),la||b!==M){K.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),vt.setValue(P,"projectionMatrix",M.projectionMatrix),vt.setValue(P,"viewMatrix",M.matrixWorldInverse);let Ut=vt.map.cameraPosition;Ut!==void 0&&Ut.setValue(P,he.setFromMatrixPosition(M.matrixWorld)),te.logarithmicDepthBuffer&&vt.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&vt.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Zt=!0,Za=!0)}if(O.isSkinnedMesh){vt.setOptional(P,O,"bindMatrix"),vt.setOptional(P,O,"bindMatrixInverse");let Ut=O.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),vt.setValue(P,"boneTexture",Ut.boneTexture,oe))}O.isBatchedMesh&&(vt.setOptional(P,O,"batchingTexture"),vt.setValue(P,"batchingTexture",O._matricesTexture,oe),vt.setOptional(P,O,"batchingIdTexture"),vt.setValue(P,"batchingIdTexture",O._indirectTexture,oe),vt.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&vt.setValue(P,"batchingColorTexture",O._colorsTexture,oe));let ei=G.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&Ae.update(O,G,oi),(Zt||Re.receiveShadow!==O.receiveShadow)&&(Re.receiveShadow=O.receiveShadow,vt.setValue(P,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Qt.envMap.value=be,Qt.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Qt.envMapIntensity.value=B.environmentIntensity),Zt&&(vt.setValue(P,"toneMappingExposure",x.toneMappingExposure),Re.needsLights&&hx(Qt,Za),ie&&W.fog===!0&&j.refreshFogUniforms(Qt,ie),j.refreshMaterialUniforms(Qt,W,q,k,f.state.transmissionRenderTarget[M.id]),Gn.upload(P,Wc(Re),Qt,oe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Gn.upload(P,Wc(Re),Qt,oe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&vt.setValue(P,"center",O.center),vt.setValue(P,"modelViewMatrix",O.modelViewMatrix),vt.setValue(P,"normalMatrix",O.normalMatrix),vt.setValue(P,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Ut=W.uniformsGroups;for(let li=0,dl=Ut.length;li<dl;li++){let Er=Ut[li];ge.update(Er,oi),ge.bind(Er,oi)}}return oi}function hx(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function dx(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,B,G){let W=ae.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),ae.get(M.texture).__webglTexture=B,ae.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){let G=ae.get(M);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0};let px=P.createFramebuffer();this.setRenderTarget=function(M,B=0,G=0){T=M,I=B,E=G;let W=!0,O=null,ie=!1,xe=!1;if(M){let ye=ae.get(M);if(ye.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(P.FRAMEBUFFER,null),W=!1;else if(ye.__webglFramebuffer===void 0)oe.setupRenderTarget(M);else if(ye.__hasExternalTextures)oe.rebindTextures(M,ae.get(M.texture).__webglTexture,ae.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ze=M.depthTexture;if(ye.__boundDepthTexture!==ze){if(ze!==null&&ae.has(ze)&&(M.width!==ze.image.width||M.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(M)}}let be=M.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(xe=!0);let Fe=ae.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Fe[B])?O=Fe[B][G]:O=Fe[B],ie=!0):M.samples>0&&oe.useMultisampledRTT(M)===!1?O=ae.get(M).__webglMultisampledFramebuffer:Array.isArray(Fe)?O=Fe[G]:O=Fe,y.copy(M.viewport),R.copy(M.scissor),N=M.scissorTest}else y.copy(pe).multiplyScalar(q).floor(),R.copy(Pe).multiplyScalar(q).floor(),N=Oe;if(G!==0&&(O=px),K.bindFramebuffer(P.FRAMEBUFFER,O)&&W&&K.drawBuffers(M,O),K.viewport(y),K.scissor(R),K.setScissorTest(N),ie){let ye=ae.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,ye.__webglTexture,G)}else if(xe){let ye=B;for(let be=0;be<M.textures.length;be++){let Fe=ae.get(M.textures[be]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+be,Fe.__webglTexture,G,ye)}}else if(M!==null&&G!==0){let ye=ae.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ye.__webglTexture,G)}C=-1},this.readRenderTargetPixels=function(M,B,G,W,O,ie,xe,ye=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ae.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){K.bindFramebuffer(P.FRAMEBUFFER,be);try{let Fe=M.textures[ye],ze=Fe.format,Be=Fe.type;if(!te.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-W&&G>=0&&G<=M.height-O&&(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ye),P.readPixels(B,G,W,O,De.convert(ze),De.convert(Be),ie))}finally{let Fe=T!==null?ae.get(T).__webglFramebuffer:null;K.bindFramebuffer(P.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(M,B,G,W,O,ie,xe,ye=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=ae.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be)if(B>=0&&B<=M.width-W&&G>=0&&G<=M.height-O){K.bindFramebuffer(P.FRAMEBUFFER,be);let Fe=M.textures[ye],ze=Fe.format,Be=Fe.type;if(!te.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Qe),P.bufferData(P.PIXEL_PACK_BUFFER,ie.byteLength,P.STREAM_READ),M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ye),P.readPixels(B,G,W,O,De.convert(ze),De.convert(Be),0);let lt=T!==null?ae.get(T).__webglFramebuffer:null;K.bindFramebuffer(P.FRAMEBUFFER,lt);let dt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await cd(P,dt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Qe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ie),P.deleteBuffer(Qe),P.deleteSync(dt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,G=0){let W=Math.pow(2,-G),O=Math.floor(M.image.width*W),ie=Math.floor(M.image.height*W),xe=B!==null?B.x:0,ye=B!==null?B.y:0;oe.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,xe,ye,O,ie),K.unbindTexture()};let fx=P.createFramebuffer(),mx=P.createFramebuffer();this.copyTextureToTexture=function(M,B,G=null,W=null,O=0,ie=null){ie===null&&(O!==0?(_a("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=O,O=0):ie=0);let xe,ye,be,Fe,ze,Be,Qe,lt,dt,gt=M.isCompressedTexture?M.mipmaps[ie]:M.image;if(G!==null)xe=G.max.x-G.min.x,ye=G.max.y-G.min.y,be=G.isBox3?G.max.z-G.min.z:1,Fe=G.min.x,ze=G.min.y,Be=G.isBox3?G.min.z:0;else{let ei=Math.pow(2,-O);xe=Math.floor(gt.width*ei),ye=Math.floor(gt.height*ei),M.isDataArrayTexture?be=gt.depth:M.isData3DTexture?be=Math.floor(gt.depth*ei):be=1,Fe=0,ze=0,Be=0}W!==null?(Qe=W.x,lt=W.y,dt=W.z):(Qe=0,lt=0,dt=0);let ut=De.convert(B.format),Re=De.convert(B.type),Pt;B.isData3DTexture?(oe.setTexture3D(B,0),Pt=P.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(oe.setTexture2DArray(B,0),Pt=P.TEXTURE_2D_ARRAY):(oe.setTexture2D(B,0),Pt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);let Fi=P.getParameter(P.UNPACK_ROW_LENGTH),oi=P.getParameter(P.UNPACK_IMAGE_HEIGHT),la=P.getParameter(P.UNPACK_SKIP_PIXELS),Zt=P.getParameter(P.UNPACK_SKIP_ROWS),Za=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,gt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,gt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Fe),P.pixelStorei(P.UNPACK_SKIP_ROWS,ze),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Be);let vt=M.isDataArrayTexture||M.isData3DTexture,Qt=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){let ei=ae.get(M),Ut=ae.get(B),li=ae.get(ei.__renderTarget),dl=ae.get(Ut.__renderTarget);K.bindFramebuffer(P.READ_FRAMEBUFFER,li.__webglFramebuffer),K.bindFramebuffer(P.DRAW_FRAMEBUFFER,dl.__webglFramebuffer);for(let Er=0;Er<be;Er++)vt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ae.get(M).__webglTexture,O,Be+Er),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ae.get(B).__webglTexture,ie,dt+Er)),P.blitFramebuffer(Fe,ze,xe,ye,Qe,lt,xe,ye,P.DEPTH_BUFFER_BIT,P.NEAREST);K.bindFramebuffer(P.READ_FRAMEBUFFER,null),K.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||ae.has(M)){let ei=ae.get(M),Ut=ae.get(B);K.bindFramebuffer(P.READ_FRAMEBUFFER,fx),K.bindFramebuffer(P.DRAW_FRAMEBUFFER,mx);for(let li=0;li<be;li++)vt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ei.__webglTexture,O,Be+li):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ei.__webglTexture,O),Qt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ut.__webglTexture,ie,dt+li):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ut.__webglTexture,ie),O!==0?P.blitFramebuffer(Fe,ze,xe,ye,Qe,lt,xe,ye,P.COLOR_BUFFER_BIT,P.NEAREST):Qt?P.copyTexSubImage3D(Pt,ie,Qe,lt,dt+li,Fe,ze,xe,ye):P.copyTexSubImage2D(Pt,ie,Qe,lt,Fe,ze,xe,ye);K.bindFramebuffer(P.READ_FRAMEBUFFER,null),K.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Qt?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Pt,ie,Qe,lt,dt,xe,ye,be,ut,Re,gt.data):B.isCompressedArrayTexture?P.compressedTexSubImage3D(Pt,ie,Qe,lt,dt,xe,ye,be,ut,gt.data):P.texSubImage3D(Pt,ie,Qe,lt,dt,xe,ye,be,ut,Re,gt):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ie,Qe,lt,xe,ye,ut,Re,gt.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ie,Qe,lt,gt.width,gt.height,ut,gt.data):P.texSubImage2D(P.TEXTURE_2D,ie,Qe,lt,xe,ye,ut,Re,gt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Fi),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,oi),P.pixelStorei(P.UNPACK_SKIP_PIXELS,la),P.pixelStorei(P.UNPACK_SKIP_ROWS,Zt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Za),ie===0&&B.generateMipmaps&&P.generateMipmap(Pt),K.unbindTexture()},this.initRenderTarget=function(M){ae.get(M).__webglFramebuffer===void 0&&oe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?oe.setTextureCube(M,0):M.isData3DTexture?oe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?oe.setTexture2DArray(M,0):oe.setTexture2D(M,0),K.unbindTexture()},this.resetState=function(){I=0,E=0,T=null,K.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}},xc={type:"change"},el={type:"start"},_c={type:"end"},qn=new dn,Ec=new Pi,Uv=Math.cos(70*ld.DEG2RAD),At=new L,Gt=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},tl=1e-6,yc=class extends Yp{constructor(e,t=null){super(e,t),this.state=at.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yr.ROTATE,MIDDLE:yr.DOLLY,RIGHT:yr.PAN},this.touches={ONE:br.ROTATE,TWO:br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Hi,this._lastTargetPosition=new L,this._quat=new Hi().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vu,this._sphericalDelta=new Vu,this._scale=1,this._panOffset=new L,this._rotateStart=new se,this._rotateEnd=new se,this._rotateDelta=new se,this._panStart=new se,this._panEnd=new se,this._panDelta=new se,this._dollyStart=new se,this._dollyEnd=new se,this._dollyDelta=new se,this._dollyDirection=new L,this._mouse=new se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Dv.bind(this),this._onPointerDown=Iv.bind(this),this._onPointerUp=Nv.bind(this),this._onContextMenu=Hv.bind(this),this._onMouseWheel=Bv.bind(this),this._onKeyDown=zv.bind(this),this._onTouchStart=kv.bind(this),this._onTouchMove=Vv.bind(this),this._onMouseDown=Ov.bind(this),this._onMouseMove=Fv.bind(this),this._interceptControlDown=Gv.bind(this),this._interceptControlUp=Wv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xc),this.update(),this.state=at.NONE}update(e=null){let t=this.object.position;At.copy(t).sub(this.target),At.applyQuaternion(this._quat),this._spherical.setFromVector3(At),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Gt:i>Math.PI&&(i-=Gt),r<-Math.PI?r+=Gt:r>Math.PI&&(r-=Gt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=n!=this._spherical.radius}if(At.setFromSpherical(this._spherical),At.applyQuaternion(this._quatInverse),t.copy(this.target).add(At),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){let s=At.length();n=this._clampDistance(s*this._scale);let o=s-n;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),a=!!o}else if(this.object.isOrthographicCamera){let s=new L(this._mouse.x,this._mouse.y,0);s.unproject(this.object);let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=o!==this.object.zoom;let l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(s),this.object.updateMatrixWorld(),n=At.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(qn.origin.copy(this.object.position),qn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qn.direction))<Uv?this.object.lookAt(this.target):(Ec.setFromNormalAndCoplanarPoint(this.object.up,this.target),qn.intersectPlane(Ec,this.target))))}else if(this.object.isOrthographicCamera){let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>tl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>tl||this._lastTargetPosition.distanceToSquared(this.target)>tl?(this.dispatchEvent(xc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gt/60*this.autoRotateSpeed*e:Gt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){At.setFromMatrixColumn(t,0),At.multiplyScalar(-e),this._panOffset.add(At)}_panUp(e,t){this.screenSpacePanning===!0?At.setFromMatrixColumn(t,1):(At.setFromMatrixColumn(t,0),At.crossVectors(this.object.up,At)),At.multiplyScalar(e),this._panOffset.add(At)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;At.copy(r).sub(this.target);let a=At.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,a=t-i.top,n=i.width,s=i.height;this._mouse.x=r/n*2-1,this._mouse.y=-(a/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let n=(e.pageX+t.x)*.5,s=(e.pageY+t.y)*.5;this._updateZoomParameters(n,s)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new se,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Iv(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function Dv(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function Nv(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_c),this.state=at.NONE;break;case 1:let t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function Ov(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case yr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=at.DOLLY;break;case yr.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=at.ROTATE}break;case yr.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(el)}function Fv(e){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Bv(e){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(e.preventDefault(),this.dispatchEvent(el),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(_c))}function zv(e){this.enabled!==!1&&this._handleKeyDown(e)}function kv(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=at.TOUCH_ROTATE;break;case br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=at.TOUCH_DOLLY_PAN;break;case br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(el)}function Vv(e){switch(this._trackPointer(e),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=at.NONE}}function Hv(e){this.enabled!==!1&&e.preventDefault()}function Gv(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Wv(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var bc=class extends wo{constructor(){super();let e=new ur;e.deleteAttribute("uv");let t=new Ba({side:Ot}),i=new Ba,r=new Np(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let a=new xt(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let n=new Fd(e,i,6),s=new Bt;s.position.set(-10.906,2.009,1.846),s.rotation.set(0,-.195,0),s.scale.set(2.328,7.905,4.651),s.updateMatrix(),n.setMatrixAt(0,s.matrix),s.position.set(-5.607,-.754,-.758),s.rotation.set(0,.994,0),s.scale.set(1.97,1.534,3.955),s.updateMatrix(),n.setMatrixAt(1,s.matrix),s.position.set(6.167,.857,7.803),s.rotation.set(0,.561,0),s.scale.set(3.927,6.285,3.687),s.updateMatrix(),n.setMatrixAt(2,s.matrix),s.position.set(-2.017,.018,6.124),s.rotation.set(0,.333,0),s.scale.set(2.002,4.566,2.064),s.updateMatrix(),n.setMatrixAt(3,s.matrix),s.position.set(2.291,-.756,-2.621),s.rotation.set(0,-.286,0),s.scale.set(1.546,1.552,1.496),s.updateMatrix(),n.setMatrixAt(4,s.matrix),s.position.set(-2.193,-.369,-5.547),s.rotation.set(0,.516,0),s.scale.set(3.875,3.487,2.986),s.updateMatrix(),n.setMatrixAt(5,s.matrix),this.add(n);let o=new xt(e,$r(50));o.position.set(-16.116,14.37,8.208),o.scale.set(.1,2.428,2.739),this.add(o);let l=new xt(e,$r(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new xt(e,$r(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let c=new xt(e,$r(43));c.position.set(-.462,8.89,14.52),c.scale.set(4.38,5.441,.088),this.add(c);let d=new xt(e,$r(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let p=new xt(e,$r(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function $r(e){return new Ep({color:0,emissive:16777215,emissiveIntensity:e})}function qv(){let e=new pi,t=new pi,i={},r={},a={paint:13375801,carbon:2569282,metal:10793919,rubber:1514273,gold:11703381,blue:2391212,orange:15830066},n=document.createElement("canvas");n.width=n.height=64;let s=n.getContext("2d");s.fillStyle="#172029",s.fillRect(0,0,64,64);for(let E=0;E<8;E++)for(let T=0;T<8;T++)s.fillStyle=(E+T)%2?"#303b45":"#222c35",s.fillRect(E*8,T*8,7,7);let o=new Ca(n);o.wrapS=o.wrapT=Ar,o.repeat.set(5,5),o.colorSpace=bt;function l(E,T,C=e){let b=new pi;return b.userData={id:E,layer:T},C.add(b),(r[E]??(r[E]=[])).push(b),(i[T]??(i[T]=[])).push(b),b}function u(E,T,C,b=0,y=0,R=0){let N=new xt(T,new Ba({color:C==="carbon"?16777215:a[C]??C,map:C==="carbon"?o:null,metalness:C==="metal"?.75:.15,roughness:C==="rubber"?.85:.4,side:Vt}));return N.position.set(b,y,R),E.add(N),N}function c(E,T,C,b,y,R,N,z){return u(E,new ur(y,R,N),z,T,C,b)}function d(E,T,C,b,y,R,N=0){let z=[],D=[];for(let k=0;k<=16;k++){let q=(k/16-.5)*b,H=.08*Math.pow(q/(b/2),2);for(let ee=0;ee<32;ee++){let pe=ee/32*Math.PI*2,Pe=(1+Math.cos(pe))/2,Oe=Math.sin(pe)*.035*Math.sin(Math.PI*Pe)+.035*Math.sin(Math.PI*Pe);z.push(T+(Pe-.5)*y+H,C+Oe+N*(Pe-.5)*y,q)}}for(let k=0;k<16;k++)for(let q=0;q<32;q++){let H=k*32+q,ee=k*32+(q+1)%32;D.push(H,H+32,ee,ee,H+32,ee+32)}let V=new Lt;return V.setAttribute("position",new tt(z,3)),V.setIndex(D),V.computeVertexNormals(),u(E,V,R)}function p(E,T,C,b,y,R,N,z="z"){let D=u(E,new La(y,y,R,48),N,T,C,b);return z==="z"&&(D.rotation.x=Math.PI/2),z==="x"&&(D.rotation.z=Math.PI/2),D}function m(E,T,C,b,y){let R=new L(...C).sub(new L(...T)),N=u(E,new La(b,b,R.length(),12),y);return N.position.copy(new L(...T).addScaledVector(R,.5)),N.quaternion.setFromUnitVectors(new L(0,1,0),R.normalize()),N}function v(E,T,C,b){return u(E,new Bo(new Pn(T.map(y=>new L(...y))),48,C,10,!1),b)}function g(E,T,C){let b=[],y=[];for(let[N,z,D,V]of T)for(let k=0;k<40;k++){let q=k/40*Math.PI*2;b.push(N,z+Math.sin(q)*V,Math.cos(q)*D)}for(let N=0;N<T.length-1;N++)for(let z=0;z<40;z++){let D=N*40+z,V=N*40+(z+1)%40;y.push(D,V,D+40,V,V+40,D+40)}let R=new Lt;return R.setAttribute("position",new tt(b,3)),R.setIndex(y),R.computeVertexNormals(),u(E,R,C)}function f(E,T,C,b,y,R=.2,N=.06){let z=document.createElement("canvas");z.width=512,z.height=128;let D=z.getContext("2d");D.clearRect(0,0,512,128),D.fillStyle="white",D.font="bold 56px Arial",D.textAlign="center",D.fillText(T,256,82);let V=new Ca(z);V.colorSpace=bt;let k=new xt(new Fa(R,N),new Sa({map:V,transparent:!0,side:Vt}));return k.position.set(C,b,y),E.add(k),k}let h=l("floor","structure");c(h,.1,.09,0,3.45,.045,1.46,"carbon");for(let E of[-1,1]){c(h,.25,.13,E*.73,2.6,.1,.025,"carbon");let T=c(h,1.62,.19,E*.36,.65,.03,.59,"carbon");T.rotation.z=.22;for(let C of[.12,.35,.58])c(h,1.64,.16,E*C,.65,.18,.012,"carbon")}h=l("nose","body"),g(h,[[-2.64,.23,.065,.025],[-2.35,.29,.12,.08],[-1.8,.39,.19,.14],[-1.2,.44,.28,.21],[-.72,.4,.31,.22]],"paint"),h=l("cockpit","structure");for(let E of[-1,1])g(h,[[-1.15,.3,.13,.15],[-.7,.34,.085,.21],[.12,.37,.09,.22],[.5,.3,.12,.18]],"carbon").position.z=E*.25;c(h,-.23,.2,0,1.6,.15,.48,"carbon"),h=l("seat","cockpit");let w=c(h,-.05,.36,0,.12,.47,.32,"carbon");w.rotation.z=-.35,c(h,-.35,.2,0,.55,.06,.3,"carbon");for(let E of[-1,1]){let T=c(h,-.105,.39,E*.09,.025,.36,.046,"paint");T.rotation.z=-.35,c(h,-.32,.24,E*.08,.4,.025,.04,"paint")}h=l("halo","body"),v(h,[[-.88,.63,0],[-.64,.79,.28],[.03,.82,.29],[.13,.67,.27]],.031,"carbon"),v(h,[[-.88,.63,0],[-.64,.79,-.28],[.03,.82,-.29],[.13,.67,-.27]],.031,"carbon"),m(h,[-.88,.48,0],[-.88,.68,0],.028,"carbon"),h=l("airbox","body"),g(h,[[.09,.85,.14,.12],[.25,.85,.16,.14],[.75,.69,.12,.12]],"paint"),p(h,.085,.86,0,.098,.01,"rubber","x"),h=l("cover","body"),g(h,[[.3,.51,.26,.22],[.65,.54,.3,.3],[1.05,.46,.26,.25],[1.6,.32,.12,.15],[1.95,.24,.05,.07]],"paint"),c(h,.99,.79,0,1.23,.22,.016,"paint");for(let E of[-1,1]){h=l("sidepod","body"),g(h,[[-.24,.39,.22,.18],[.02,.43,.26,.21],[.55,.38,.23,.18],[1.13,.24,.12,.1],[1.4,.19,.045,.04]],"paint").position.z=E*.46,c(h,-.25,.42,E*.46,.012,.23,.34,"rubber"),h=l("radiator","cooling");let T=c(h,.4,.37,E*.43,.73,.055,.34,"metal");T.rotation.z=-.2;for(let C=0;C<20;C++)c(h,.08+C*.033,.405,E*.43,.01,.022,.32,"carbon");v(h,[[.05,.4,E*.44],[.42,.22,E*.29],[.77,.3,E*.23]],.023,"blue")}h=l("front","aero");for(let E=0;E<3;E++)d(h,-2.44+E*.145,.13+E*.04,1.78,.24,"carbon",.15);for(let E of[-1,1])c(h,-2.3,.21,E*.9,.48,.25,.024,"paint");h=l("rear","aero");for(let E=0;E<2;E++)d(h,2.12+E*.2,.91+E*.055,1.06,.32,"carbon",.24);for(let E of[-1,1])c(h,2.23,.83,E*.55,.52,.39,.025,"paint"),m(h,[1.6,.29,E*.14],[2.12,.94,E*.14],.025,"carbon");h=l("fuel","internals"),c(h,.23,.37,0,.32,.39,.42,"gold"),h=l("battery","electrical"),c(h,-.04,.155,0,.61,.12,.35,"blue");for(let E=0;E<6;E++)c(h,-.29+E*.1,.223,0,.008,.006,.3,"metal");h=l("electronics","electrical"),c(h,.34,.18,.29,.28,.11,.19,"metal"),v(h,[[.05,.2,.2],[.3,.24,.32],[.8,.26,.3]],.015,"orange"),h=l("engine","mechanical"),c(h,.78,.29,0,.58,.19,.35,"metal");for(let E of[-1,1]){let T=c(h,.8,.48,E*.15,.62,.18,.2,"metal");T.rotation.x=E*.65;for(let C=0;C<3;C++)p(h,.58+C*.21,.52,E*.17,.045,.12,"gold","y"),c(h,.58+C*.21,.6,E*.19,.075,.025,.1,"carbon")}h=l("turbo","mechanical");for(let E of[1.16,1.35])p(h,E,.43,0,.105,.1,"metal","x");m(h,[1.13,.43,0],[1.38,.43,0],.028,"metal"),h=l("exhaust","mechanical");for(let E of[-1,1])for(let T=0;T<3;T++)v(h,[[.55+T*.2,.39,E*.23],[.69+T*.16,.27,E*.33],[1.22,.37,E*.07]],.025,"gold");v(h,[[1.36,.43,0],[1.64,.43,0],[2.02,.39,0]],.045,"metal"),h=l("mguk","electrical"),p(h,.79,.23,.29,.08,.28,"blue","x"),h=l("gearbox","mechanical"),g(h,[[1.17,.25,.16,.16],[1.5,.26,.14,.14],[1.83,.28,.1,.12]],"metal");for(let E=0;E<7;E++)c(h,1.25+E*.065,.27,0,.015,.3,.28,"carbon");for(let E of[-1.7,1.7])for(let T of[-1,1]){let C=T*.79,b=.35,y=E<0?.28:.34;h=l("tyre","wheels");let R=u(h,new Yr(.267,.083,20,64),"rubber",E,.36,C);R.scale.z=y/.166;for(let N of[-1,1])u(h,new Yr(.272,.0035,8,64),15322953,E,.36,C+N*y*.49).scale.set(1,1,1);p(h,E,.36,C,.223,y*.78,"carbon");for(let N of[-1,1]){p(h,E,.36,C+N*y*.41,.065,.014,"metal");for(let z=0;z<10;z++){let D=z*Math.PI/5;m(h,[E+Math.sin(D)*.06,.36+Math.cos(D)*.06,C+N*y*.4],[E+Math.sin(D+.12)*.21,.36+Math.cos(D+.12)*.21,C+N*y*.4],.012,"metal")}}h=l("brake","brakes"),p(h,E,.36,C,.16,.028,"carbon"),p(h,E,.36,C,.066,.035,"metal");for(let N=0;N<40;N++){let z=N*Math.PI/20;p(h,E+Math.sin(z)*.137,.36+Math.cos(z)*.137,C+.018,.004,.005,"metal")}c(h,E+.12,.36,C,.09,.19,.08,"gold"),h=l("suspension","suspension");for(let N of[.24,.45])for(let z of[-.34,.32])m(h,[E+z,N,.25*T],[E,N-.04,C],.016,"carbon");m(h,[E-.26,.5,T*.22],[E,.22,C],.018,"metal"),m(h,[E+.03,.27,0],[E,.36,C],.025,"metal")}h=l("steering","cockpit"),c(h,-.7,.47,0,.035,.16,.3,"carbon"),m(h,[-.72,.45,0],[-1.2,.3,0],.017,"metal"),h=l("pedals","cockpit");for(let E of[-1,1])m(h,[-1.25,.2,E*.08],[-1.33,.31,E*.08],.014,"metal"),c(h,-1.34,.32,E*.08,.03,.12,.07,"metal");h=l("pistons","mechanical"),m(h,[.46,.3,0],[1.13,.3,0],.032,"metal");for(let E of[-1,1])for(let T=0;T<3;T++){let C=.58+T*.21;m(h,[C,.3,0],[C,.41,E*.11],.015,"gold");let b=p(h,C,.45,E*.15,.047,.062,"metal","y");b.rotation.x=E*Math.PI/4;for(let y of[-.015,0,.015]){let R=u(h,new Yr(.047,.002,6,24),"carbon",C,.45+y,E*(.15+y));R.rotation.x=Math.PI/4*E}}h=l("dampers","suspension");for(let E of[-1,1]){m(h,[-1.49,.46,E*.16],[-1.1,.48,E*.16],.025,"gold");for(let T=0;T<13;T++){let C=u(h,new Yr(.036,.005,6,16),"metal",-1.46+T*.025,.47,E*.16);C.rotation.y=Math.PI/2}}h=l("light","mechanical"),c(h,2.07,.29,0,.04,.08,.1,16716591),h=l("steering","wheel",t);let x=new In;x.moveTo(-.43,.22),x.lineTo(.43,.22),x.quadraticCurveTo(.54,.12,.48,-.21),x.lineTo(.25,-.29),x.lineTo(-.25,-.29),x.lineTo(-.48,-.21),x.quadraticCurveTo(-.54,.12,-.43,.22),u(h,new Fo(x,{depth:.038,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:3,steps:1}),"carbon");for(let E of[-1,1])v(h,[[E*.42,.24,.035],[E*.52,.18,.025],[E*.54,-.06,.025],[E*.47,-.24,.035]],.052,"rubber");let S=l("screen","wheel",t);c(S,0,.075,.055,.4,.21,.022,"rubber"),f(S,"8  |  298",0,.105,.068,.32,.07),f(S,"DEMO \u2022 BB 56.0",0,.015,.07,.32,.038);for(let E=0;E<15;E++)u(S,new Lu(.009,10,8),E<5?4911001:E<10?16732730:8936959,-.18+E*.026,.225,.065);let I=[["radio","RAD",-.34,.15,7523071],["pit","PIT",.34,.15,16768085],["neutral","N",-.36,0,5625242],["drink","DRINK",.36,0,15658734],["boost","BOOST",-.32,-.16,16737086],["overtake","OT",.32,-.16,16492255],["aero","AERO",0,-.22,8447982]];for(let[E,T,C,b,y]of I){let R=l(E,"wheel",t);p(R,C,b,.07,.033,.02,"metal"),p(R,C,b,.085,.026,.012,y),f(R,T,C,E==="aero"?b-.045:b+.048,.085,.14,.027)}for(let[E,T,C]of[["enginebrake","EB",-.32],["migration","BMIG",.32]]){let b=l(E,"wheel",t);p(b,C,.075,.08,.02,.018,"gold"),f(b,T,C,.105,.089,.11,.022)}for(let[E,T,C]of[["balance","BB",-.19],["strategy","STRAT",0],["differential","DIFF",.19]]){let b=l(E,"wheel",t);p(b,C,-.105,.07,.043,.025,"gold"),c(b,C,-.105,.096,.012,.061,.008,"carbon"),f(b,T,C,-.172,.08,.15,.03);for(let y=0;y<12;y++){let R=y*Math.PI/6;c(b,C+Math.sin(R)*.052,-.105+Math.cos(R)*.052,.07,.004,.008,.005,"metal")}}for(let E of[-1,1])h=l("shift","wheel",t),c(h,E*.37,.07,-.075,.16,.24,.022,"metal"),f(h,E>0?"+":"\u2212",E*.37,.08,-.091,.1,.1).rotation.y=Math.PI,h=l("clutch","wheel",t),c(h,E*.24,-.17,-.1,.21,.1,.02,"carbon");return h=l("quick","wheel",t),p(h,0,0,-.1,.082,.17,"gold"),p(h,0,0,-.2,.05,.04,"metal"),{car:e,wheel:t,groups:i,items:r}}var Wt={rules:["FIA \xB7 r\xE8glement technique 2026, \xE9dition 20 du 5 ao\xFBt 2026","https://www.fia.com/system/files/documents/fia_2026_f1_regulations_-_section_c_technical_-_iss_20_-_2026-08-05.pdf"],honda:["Honda \xB7 pr\xE9sentation technique 2026, 26 janvier 2026","https://global.honda/en/F1/features/2026_Commentary/regulations/"],f1:["Formula 1 \xB7 guide de la r\xE9glementation 2026","https://www.formula1.com/en/latest/article/the-beginners-guide-to-the-2026-regulations.6j0tS0hrHG2T01tpmK6XYz"],wheel:["Mercedes \xB7 principes du volant (exemple historique de 2019)","https://www.mercedesamgf1.com/news/how-does-an-f1-steering-wheel-work"]},si={front:["Aileron avant","A\xC9RODYNAMIQUE","Il contribue \xE0 l\u2019appui sur l\u2019avant et oriente l\u2019air autour de la voiture. En 2026, ses volets participent \xE0 l\u2019a\xE9rodynamique active.","Il aide les pneus avant \xE0 garder leur adh\xE9rence.","f1"],nose:["Nez et structure de choc","S\xC9CURIT\xC9","Le nez porte l\u2019aileron avant et int\xE8gre une structure absorbant de l\u2019\xE9nergie lors d\u2019un choc. La g\xE9n\xE9ration 2026 renforce la protection lors d\u2019impacts successifs.","Une pi\xE8ce con\xE7ue aussi pour se d\xE9former et prot\xE9ger.","f1"],tyre:["Pneus et roues","CONTACT AU SOL","Les pneus transmettent les efforts de freinage, de virage et d\u2019acc\xE9l\xE9ration. Leurs pressions, temp\xE9ratures et leur usure influencent l\u2019adh\xE9rence. Les roues sont ici repr\xE9sent\xE9es avec des pneus lisses.","Toute la voiture agit sur la piste \xE0 travers les pneus.","rules"],suspension:["Suspensions","CH\xC2SSIS","Les triangles guident les roues. Ressorts et amortisseurs contr\xF4lent leurs mouvements et ceux de la voiture. Leur implantation varie selon l\u2019\xE9curie : le dessin ne reproduit pas un montage pr\xE9cis.","Maintenir le pneu en contact avec le sol, sans laisser la voiture rebondir librement.","rules"],halo:["Halo","S\xC9CURIT\xC9","Cette structure entoure le haut du cockpit et contribue \xE0 prot\xE9ger la t\xEAte du pilote contre les impacts. Elle compl\xE8te les autres dispositifs de s\xE9curit\xE9 ; elle ne remplace ni le casque ni la cellule de survie.","Une protection suppl\xE9mentaire autour de la t\xEAte.","rules"],cockpit:["Cockpit et cellule de survie","S\xC9CURIT\xC9","Le pilote prend place dans une cellule r\xE9sistante, avec son si\xE8ge, ses harnais et ses commandes. Les jambes s\u2019\xE9tendent vers l\u2019avant. La cellule doit satisfaire aux essais de s\xE9curit\xE9 impos\xE9s par la FIA.","Le c\u0153ur protecteur de la monoplace.","rules"],sidepod:["Pontons et entr\xE9es d\u2019air","REFROIDISSEMENT","Les entr\xE9es lat\xE9rales acheminent de l\u2019air vers les \xE9changeurs de refroidissement. Les formes ext\xE9rieures guident aussi l\u2019\xE9coulement autour de la carrosserie. Les volumes diff\xE8rent beaucoup entre \xE9curies.","Faire respirer la m\xE9canique tout en guidant l\u2019air.","rules"],floor:["Plancher et diffuseur","A\xC9RODYNAMIQUE","L\u2019air circulant sous la voiture contribue \xE0 l\u2019appui. Le diffuseur est la partie arri\xE8re o\xF9 le passage d\u2019air s\u2019\xE9largit. Le concept de plancher change en 2026.","L\u2019a\xE9rodynamique travaille aussi sous la voiture.","honda"],rear:["Aileron arri\xE8re","A\xC9RODYNAMIQUE","Il contribue \xE0 l\u2019appui arri\xE8re. Ses \xE9l\xE9ments mobiles participent aux modes ligne droite et virage de 2026, avec l\u2019aileron avant.","Plus d\u2019appui en virage ; moins de tra\xEEn\xE9e en ligne droite.","f1"],airbox:["Prise d\u2019air sup\xE9rieure","ADMISSION","L\u2019ouverture au-dessus du pilote alimente l\u2019admission et, selon le dessin de la voiture, certains circuits de refroidissement. L\u2019arceau principal de s\xE9curit\xE9 se trouve dans cette zone.","De l\u2019air entre au-dessus du casque.","rules"],cover:["Capot moteur","CARROSSERIE","La carrosserie recouvre le groupe propulseur et contribue \xE0 guider l\u2019air. Ouvrir la vue \xE9clat\xE9e permet de rep\xE9rer les organes habituellement cach\xE9s.","Sous cette enveloppe : moteur, conduites et \xE9lectronique.","rules"],brake:["Disque, plaquettes et \xE9trier","FREINAGE","L\u2019\xE9trier presse les plaquettes contre le disque tournant avec la roue. Le frottement transforme une partie de l\u2019\xE9nergie du mouvement en chaleur. Les conduits apportent de l\u2019air pour refroidir l\u2019ensemble.","Le disque ralentit la roue ; les pneus ralentissent la voiture.","rules"],engine:["Moteur V6 turbo","PROPULSION","Le moteur thermique 2026 est un V6 turbocompress\xE9 de 1,6 litre. Il fonctionne avec le syst\xE8me \xE9lectrique pour entra\xEEner les roues arri\xE8re.","Deux formes d\u2019\xE9nergie participent \xE0 la propulsion.","honda"],turbo:["Turbocompresseur","PROPULSION","Les gaz d\u2019\xE9chappement entra\xEEnent une turbine reli\xE9e \xE0 un compresseur qui comprime l\u2019air d\u2019admission. Le MGU-H n\u2019est plus pr\xE9sent en 2026.","Les gaz qui sortent aident \xE0 comprimer l\u2019air qui entre.","honda"],battery:["Batterie haute tension","\xC9NERGIE","Elle stocke de l\u2019\xE9nergie \xE9lectrique, ensuite utilis\xE9e par le syst\xE8me hybride. Elle est repr\xE9sent\xE9e s\xE9par\xE9ment pour la lecture ; son enveloppe et son implantation exactes ne sont pas reproduites.","Une r\xE9serve d\u2019\xE9nergie, pas une source infinie.","honda"],mguk:["MGU-K","\xC9NERGIE","Cette machine \xE9lectrique peut participer \xE0 la propulsion et r\xE9cup\xE9rer de l\u2019\xE9nergie m\xE9canique. La g\xE9n\xE9ration 2026 lui donne un r\xF4le accru, sans MGU-H.","Un moteur \xE9lectrique capable aussi de fonctionner en g\xE9n\xE9rateur.","honda"],electronics:["\xC9lectronique de puissance","\xC9NERGIE","Elle pilote les \xE9changes \xE9lectriques entre la batterie et la machine \xE9lectrique, en coordination avec les commandes du groupe propulseur.","Organiser et contr\xF4ler l\u2019\xE9nergie \xE9lectrique.","honda"],gearbox:["Bo\xEEte de vitesses et diff\xE9rentiel","TRANSMISSION","La bo\xEEte adapte le rapport entre r\xE9gime moteur et vitesse des roues. Le diff\xE9rentiel permet aux roues arri\xE8re de tourner \xE0 des vitesses diff\xE9rentes dans les virages.","Transmettre l\u2019effort du moteur aux roues arri\xE8re.","rules"],radiator:["Radiateurs et \xE9changeurs","REFROIDISSEMENT","Les \xE9changeurs \xE9vacuent de la chaleur dans l\u2019air ext\xE9rieur. Des circuits de refroidissement servent notamment au moteur et aux composants \xE9lectriques. Les circuits sont simplifi\xE9s sur le dessin.","\xC9viter que la m\xE9canique surchauffe.","rules"],seat:["Baquet et harnais","COCKPIT","Le baquet \xE9pouse la morphologie du pilote. Celui-ci est install\xE9 en position inclin\xE9e, maintenu par un harnais. Le dessin montre le dossier, l\u2019assise et les passages de sangles.","\xCAtre maintenu avec pr\xE9cision, pas simplement assis.","rules"],fuel:["R\xE9servoir de carburant","PROPULSION","Le carburant est contenu dans un r\xE9servoir souple de s\xE9curit\xE9 situ\xE9 dans la cellule, derri\xE8re le pilote. Sa repr\xE9sentation est simplifi\xE9e et s\xE9par\xE9e des autres pi\xE8ces dans la vue \xE9clat\xE9e.","Le carburant est prot\xE9g\xE9 au centre de la voiture.","rules"],light:["Feu arri\xE8re","SIGNALISATION","Ce feu fait partie des dispositifs de signalisation de la voiture. Il ne faut pas l\u2019interpr\xE9ter comme un simple feu stop de voiture de route.","Un signal pour les pilotes qui suivent.","rules"],exhaust:["\xC9chappement","PROPULSION","Les gaz issus de la combustion sont \xE9vacu\xE9s vers l\u2019arri\xE8re, apr\xE8s leur passage dans la turbine du turbo. La sortie repr\xE9sent\xE9e est sch\xE9matique.","Le chemin de sortie des gaz du moteur.","honda"],steering:["Volant","COMMANDES","Il dirige les roues avant et regroupe \xE9cran, boutons, molettes et palettes. Ouvre la vue Volant pour d\xE9couvrir les principales familles de commandes.","Le poste de commande du pilote.","wheel"],screen:["\xC9cran et voyants","VOLANT","Ils affichent les informations utiles au pilote, avec des voyants aidant au changement de rapport. L\u2019affichage pr\xE9sent\xE9 ici est illustratif, sans donn\xE9es en direct.","Lire la voiture en un coup d\u2019\u0153il.","wheel"],radio:["RAD \xB7 Radio","VOLANT","Le bouton permet au pilote de parler \xE0 son ing\xE9nieur.","Communiquer avec le stand.","wheel"],drink:["DRINK \xB7 Boisson","VOLANT","Une commande peut actionner le dispositif de boisson du pilote. Sa pr\xE9sence et son fonctionnement d\xE9pendent de la voiture.","Boire sans retirer les mains des commandes.","rules"],enginebrake:["EB \xB7 Frein moteur","VOLANT","Ce r\xE9glage ajuste la contribution du frein moteur \xE0 la d\xE9c\xE9l\xE9ration.","Adapter le comportement au lever de pied.","wheel"],pit:["PIT \xB7 Limiteur des stands","VOLANT","Il active le dispositif limitant la vitesse dans la voie des stands.","Respecter la limitation des stands.","wheel"],neutral:["N \xB7 Point mort","VOLANT","Cette commande permet de demander le point mort, selon les s\xE9curit\xE9s pr\xE9vues.","D\xE9sengager le rapport.","rules"],balance:["BB \xB7 R\xE9partition de freinage","VOLANT","Le pilote ajuste la r\xE9partition de freinage entre l\u2019avant et l\u2019arri\xE8re.","Adapter le freinage au virage.","wheel"],differential:["DIFF \xB7 Diff\xE9rentiel","VOLANT","Ces r\xE9glages modifient le comportement du diff\xE9rentiel selon la phase du virage.","Ajuster la motricit\xE9 et la rotation.","wheel"],strategy:["STRAT \xB7 Strat\xE9gie","VOLANT","La commande s\xE9lectionne des r\xE9glages autoris\xE9s du groupe propulseur. Les options d\xE9pendent de l\u2019\xE9curie.","Choisir un ensemble de r\xE9glages.","wheel"],aero:["AERO \xB7 A\xE9rodynamique active","VOLANT 2026","En 2026, les ailes mobiles changent de configuration dans les conditions autoris\xE9es. Le bouton dessin\xE9 n\u2019est pas celui d\u2019une \xE9curie pr\xE9cise.","Ligne droite ou virage : deux besoins diff\xE9rents.","f1"],boost:["BOOST \xB7 D\xE9ploiement","VOLANT 2026","Cette commande permet au pilote d\u2019agir sur le d\xE9ploiement de puissance, selon l\u2019\xE9nergie disponible et les r\xE9glages.","Utiliser l\u2019\xE9nergie au moment choisi.","f1"],overtake:["OT \xB7 Overtake","VOLANT 2026","Ce mode d\u2019assistance \xE9lectrique au d\xE9passement est soumis \xE0 des conditions d\u2019\xE9ligibilit\xE9. Il ne s\u2019agit pas de l\u2019ancien DRS.","Une aide \xE9lectrique conditionnelle.","f1"],shift:["Palettes de vitesses","DOS DU VOLANT","Le pilote demande la mont\xE9e ou la descente d\u2019un rapport avec les palettes.","Changer de vitesse sans l\xE2cher le volant.","wheel"],clutch:["Palettes d\u2019embrayage","DOS DU VOLANT","Elles commandent l\u2019embrayage, notamment pour lancer la voiture au d\xE9part.","Contr\xF4ler la mise en mouvement.","rules"],quick:["Fixation rapide","DOS DU VOLANT","Elle permet de retirer le volant pour entrer dans le cockpit ou en sortir.","Lib\xE9rer le passage du pilote.","wheel"]};Object.assign(si,{pedals:["P\xE9dalier","COCKPIT","Le pilote commande l\u2019acc\xE9l\xE9rateur et le frein avec les pieds. Le freinage et la demande de couple ne sont pas une seule fonction.","Les jambes sont orient\xE9es vers l\u2019avant dans la cellule ; position et r\xE9glages sont adapt\xE9s au pilote.","rules"],pistons:["Pistons, bielles et vilebrequin","MOTEUR INTERNE","Les gaz de combustion exercent une force sur les pistons. Les bielles relient les pistons au vilebrequin, qui transforme ce mouvement alternatif en rotation.","Retirez le moteur ext\xE9rieur pour voir ce m\xE9canisme simplifi\xE9. Les jeux, soupapes, lubrification et circuits internes ne sont pas mod\xE9lis\xE9s.","rules"],dampers:["Ressorts et amortisseurs","CH\xC2SSIS","Les ressorts fournissent une force de rappel ; les amortisseurs dissipent de l\u2019\xE9nergie et contr\xF4lent la vitesse des mouvements de suspension.","Leur r\xE9glage influence le contact des pneus et la stabilit\xE9 de la plateforme a\xE9rodynamique. Le m\xE9canisme de renvoi est simplifi\xE9.","rules"],migration:["BMIG \xB7 Migration du freinage","VOLANT","La migration fait \xE9voluer la r\xE9partition de freinage pendant la phase de freinage selon les strat\xE9gies autoris\xE9es.","Elle se distingue du r\xE9glage statique de r\xE9partition. Les valeurs et logiques exactes sont propres aux \xE9quipes.","wheel"]});var vi=document.getElementById("f1Loupe");typeof titles<"u"&&(titles.loupe="F1 \xE0 la loupe");var xi=e=>String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Xv={front:["L\u2019appui augmente la capacit\xE9 des pneus avant \xE0 transmettre un effort lat\xE9ral. Le r\xE9glage modifie l\u2019\xE9quilibre avant/arri\xE8re.","Un gain d\u2019appui peut co\xFBter de la tra\xEEn\xE9e ; il ne garantit pas un meilleur temps au tour."],rear:["La charge sur le train arri\xE8re favorise la stabilit\xE9 et la motricit\xE9. Les configurations actives font varier le compromis appui/tra\xEEn\xE9e.","La vitesse de pointe, l\u2019\xE9quilibre et les conditions d\u2019activation doivent \xEAtre consid\xE9r\xE9s ensemble."],floor:["La g\xE9om\xE9trie du soubassement influence la distribution de pression et l\u2019appui. La garde au sol et l\u2019assiette modifient son fonctionnement.","Un mod\xE8le visuel ne permet pas de quantifier un gain a\xE9rodynamique : il faudrait des mesures ou une simulation valid\xE9e."],tyre:["Temp\xE9rature, charge verticale et glissement d\xE9terminent la capacit\xE9 \xE0 transmettre les efforts. Une roue trop sollicit\xE9e peut perdre de l\u2019adh\xE9rence.","Freiner, acc\xE9l\xE9rer et tourner sollicitent une m\xEAme r\xE9serve d\u2019adh\xE9rence : ces efforts ne sont pas ind\xE9pendants."],suspension:["Elle contr\xF4le le mouvement des roues et la plateforme a\xE9rodynamique. Les triangles guident le porte-moyeu ; les \xE9l\xE9ments \xE9lastiques et amortisseurs contr\xF4lent les mouvements.","Un r\xE9glage tr\xE8s rigide peut stabiliser la hauteur de caisse mais r\xE9duire la capacit\xE9 \xE0 absorber les irr\xE9gularit\xE9s. Implantation illustrative."],brake:["Le disque tourne avec la roue ; l\u2019\xE9trier est fix\xE9 au porte-moyeu. Les plaquettes serrent les deux faces du disque. Le freinage arri\xE8re est coordonn\xE9 avec la r\xE9cup\xE9ration \xE9lectrique.","Le refroidissement doit \xE9viter les temp\xE9ratures excessives sans sortir le mat\xE9riau de sa plage de fonctionnement. La vue simplifie les conduits internes."],radiator:["La chaleur passe du fluide aux parois puis \xE0 l\u2019air. Les ailettes augmentent la surface d\u2019\xE9change.","Une ouverture plus grande peut faciliter le refroidissement mais modifier la tra\xEEn\xE9e et les \xE9coulements."],engine:["La combustion pousse les pistons ; les bielles transmettent l\u2019effort au vilebrequin. Deux bancs de trois cylindres constituent le V6.","Cette repr\xE9sentation montre les ensembles, pas la distribution, les lubrifiants ni toutes les pi\xE8ces internes d\u2019un moteur r\xE9el."],turbo:["La turbine extrait de l\u2019\xE9nergie des gaz d\u2019\xE9chappement ; son arbre entra\xEEne le compresseur d\u2019admission.","La pression, la temp\xE9rature d\u2019air et la r\xE9ponse transitoire sont li\xE9es. Le montage exact d\xE9pend du motoriste."],battery:["La r\xE9serve d\u2019\xE9nergie alimente la propulsion \xE9lectrique et re\xE7oit l\u2019\xE9nergie r\xE9cup\xE9r\xE9e.","Capacit\xE9, temp\xE9rature, puissance et \xE9nergie disponible sont distinctes. Son emplacement pr\xE9cis est ici simplifi\xE9."],mguk:["En propulsion, l\u2019\xE9nergie \xE9lectrique devient un couple m\xE9canique ; en r\xE9cup\xE9ration, le flux est invers\xE9.","La puissance utilisable d\xE9pend aussi de l\u2019\xE9nergie disponible, des temp\xE9ratures et des limites r\xE9glementaires."],gearbox:["Les rapports adaptent le r\xE9gime moteur \xE0 la vitesse. Le diff\xE9rentiel permet des vitesses de rotation diff\xE9rentes entre les roues arri\xE8re.","Le r\xE9glage du diff\xE9rentiel influence la rotation et la motricit\xE9 : plus de verrouillage n\u2019est pas toujours pr\xE9f\xE9rable."],seat:["Le maintien limite les d\xE9placements du corps ; la position doit permettre l\u2019acc\xE8s aux commandes et respecter les exigences de s\xE9curit\xE9.","La coque, le si\xE8ge, le harnais et les protections fonctionnent ensemble. Le si\xE8ge seul ne constitue pas la cellule de survie."],balance:["Une r\xE9partition davantage vers l\u2019avant augmente la part de freinage demand\xE9e au train avant.","Trop de sollicitation peut bloquer un train ; le r\xE9glage d\xE9pend du transfert de charge et de l\u2019adh\xE9rence."],differential:["Les r\xE9glages peuvent distinguer l\u2019entr\xE9e, le milieu et la sortie du virage. Ils influencent l\u2019\xE9cart de vitesse entre les roues motrices.","Les libell\xE9s et valeurs ne sont pas universels. La molette pr\xE9sent\xE9e regroupe ces fonctions \xE0 titre p\xE9dagogique."],enginebrake:["Le couple r\xE9sistant du moteur participe \xE0 la d\xE9c\xE9l\xE9ration du train arri\xE8re.","Un exc\xE8s peut d\xE9stabiliser l\u2019arri\xE8re au lever de pied ; ce r\xE9glage est distinct de la r\xE9partition des freins."],strategy:["Une s\xE9lection de strat\xE9gie regroupe des param\xE8tres autoris\xE9s de fonctionnement du groupe propulseur.","Ce n\u2019est pas une commande donnant une puissance illimit\xE9e ; les options d\xE9pendent de l\u2019\xE9curie et du r\xE8glement."],shift:["Les palettes transmettent une demande de changement de rapport aux syst\xE8mes de commande.","Une demande reste soumise aux s\xE9curit\xE9s ; elle n\u2019est pas une liaison m\xE9canique directe avec les pignons."],clutch:["Au d\xE9part, le pilote module l\u2019engagement de l\u2019embrayage pour transmettre progressivement le couple.","L\u2019adh\xE9rence disponible et la pr\xE9cision de l\u2019engagement conditionnent le patinage des roues."]},jv={body:"Carrosserie & halo",aero:"Ailerons",wheels:"Roues",structure:"Cellule & plancher",cockpit:"Si\xE8ge & commandes",cooling:"Refroidissement",mechanical:"Moteur & transmission",electrical:"\xC9lectricit\xE9",internals:"R\xE9servoir",brakes:"Freins",suspension:"Suspensions"};vi.innerHTML=`<div class="lab"><header class="lab-head"><div><span class="lab-eyebrow">F1 CONSTANT / ATELIER TECHNIQUE</span><h2>F1 \xE0 la loupe<span>Explorer. Retirer. Comprendre.</span></h2></div><span class="lab-chip">ARCHITECTURE 2026 \xB7 3D</span></header><p class="lab-intro">Une monoplace g\xE9n\xE9rique manipulable : touchez une pi\xE8ce pour lire sa fonction, retirez les enveloppes, puis explorez les organes cach\xE9s.</p><div class="lab-views" aria-label="Angles de vue">${[["perspective","3D libre"],["top","Dessus"],["side","Profil"],["front","Face"],["rear","Arri\xE8re"],["wheel","Volant"]].map(([e,t])=>`<button data-view="${e}">${t}</button>`).join("")}</div><div class="lab-layout"><section class="lab-viewer"><div class="lab-stage" id="labStage"><div class="lab-overlay"><span id="labMode">MONOPLACE / VUE 3D</span><span>Mod\xE8le p\xE9dagogique \xB7 pas un plan d\u2019\xE9curie</span></div><div class="lab-loading">Pr\xE9paration de la sc\xE8ne 3D\u2026</div><div class="lab-nav"><button data-action="zoom-in" aria-label="Zoomer">+</button><button data-action="zoom-out" aria-label="D\xE9zoomer">\u2212</button><button data-action="reset">Recentrer</button></div><span class="lab-hint">Glisser : tourner \xB7 molette / pincer : zoomer \xB7 deux doigts : d\xE9placer</span></div><div class="lab-toolbar"><button data-action="assemble">Tout remonter</button><button data-action="peel">Retirer l\u2019enveloppe</button><button data-action="xray" aria-pressed="false">Transparence</button><button data-action="undo" disabled>Annuler le retrait</button></div><div class="lab-scan"><label><input type="checkbox" id="labScan"> Coupe scanner</label><label>Axe <select id="labAxis"><option value="y">Horizontal</option><option value="z">Lat\xE9ral</option><option value="x">Longitudinal</option></select></label><input id="labDepth" type="range" min="0" max="100" value="100" aria-label="Profondeur de coupe"><output id="labDepthLabel">100 %</output></div><p class="lab-small">La coupe retire une portion g\xE9om\xE9trique de la maquette ; elle ne simule ni une radiographie ni un examen r\xE9el. Les surfaces coup\xE9es sont ouvertes.</p></section><aside class="lab-detail" id="labDetail" aria-live="polite"></aside></div><section class="lab-controls"><div><h3>01 / Retirer les couches</h3><p>D\xE9cochez une couche ou activez le retrait au clic. Les \xE9l\xE9ments situ\xE9s dessous restent \xE0 leur place.</p><label class="lab-remove"><input type="checkbox" id="labRemove"> Retirer la pi\xE8ce touch\xE9e</label><div class="lab-layers">${Object.entries(jv).map(([e,t])=>`<label><input type="checkbox" data-layer="${e}" checked>${t}</label>`).join("")}</div></div><div><h3>02 / Explorer les composants</h3><label class="lab-search">Chercher une pi\xE8ce ou une commande<input id="labSearch" type="search" placeholder="Frein, moteur, embrayage\u2026"></label><div class="lab-parts" id="labParts"></div></div></section><details class="lab-sources"><summary>Pr\xE9cision du mod\xE8le, limites et sources techniques</summary><p>Maquette 3D originale, g\xE9n\xE9rique et simplifi\xE9e, non issue d\u2019un scan ou de plans confidentiels. Les composants sont dispos\xE9s pour comprendre leur r\xF4le ; formes, canalisations, fixations et implantations propres aux \xE9curies ne sont pas reproduites. Ce mod\xE8le ne repr\xE9sente pas toutes les pi\xE8ces d\u2019une F1 et ne pr\xE9dit aucun gain chiffr\xE9 de performance. Le volant rassemble des fonctions repr\xE9sentatives : disposition et intitul\xE9s varient selon les \xE9quipes.</p><p>R\xE9f\xE9rences consult\xE9es le 20 septembre 2026. La source Mercedes d\xE9crit un volant de 2019 : seuls les principes communs sont repris ; les fonctions a\xE9rodynamiques et \xE9lectriques 2026 sont distingu\xE9es.</p>${Object.values(Wt).map(([e,t])=>`<p><a href="${t}" target="_blank" rel="noopener">${e}</a></p>`).join("")}</details></div>`;var ft=e=>vi.querySelector(e),Qr="front",Ne,Et,yt,Ct,Ui,$t="perspective",gr=!1,Xn=[],il=!1;function qt(e){Qr=e;let t=si[e];if(!t)return;let i=Xv[e];if(ft("#labDetail").innerHTML=`<span class="lab-eyebrow">${xi(t[1])}</span><h3>${xi(t[0])}</h3><h4>Fonction</h4><p>${xi(t[2])}</p><h4>Comprendre son effet</h4><p>${xi(i?.[0]||t[3])}</p>${i?`<h4>Compromis & limites</h4><p>${xi(i[1])}</p>`:""}<div class="lab-detail-actions"><button data-action="focus">Voir de pr\xE8s</button><button data-action="hide">Retirer cette pi\xE8ce</button></div><a class="lab-source" href="${Wt[t[4]][1]}" target="_blank" rel="noopener">Source : ${xi(Wt[t[4]][0])} \u2197</a><p class="lab-small">Pi\xE8ce s\xE9lectionn\xE9e : surlign\xE9e dans la sc\xE8ne lorsqu\u2019elle est visible.</p>`,vi.querySelectorAll("[data-part]").forEach(r=>r.setAttribute("aria-pressed",r.dataset.part===e)),Ne){for(let[r,a]of Object.entries(Ne.items))for(let n of a)n.traverse(s=>{s.material?.emissive&&s.material.emissive.setHex(r===e?266776:0)});Nt()}}const Yv=qt;qt=function(e){Yv(e),tx(e)};function Ga(){let e=ft("#labSearch").value.toLocaleLowerCase("fr");ft("#labParts").innerHTML=Object.entries(si).filter(([t,i])=>i.join(" ").toLocaleLowerCase("fr").includes(e)).map(([t,i])=>`<button data-part="${t}" aria-pressed="${t===Qr}">${xi(i[0])}</button>`).join("")}qt("front"),Ga(),ft("#labSearch").oninput=Ga;function Nt(){!Et||il||(il=!0,requestAnimationFrame(()=>{il=!1,Et.render(Ui,Ct)}))}function Mc(){if(!Et)return;let{width:e,height:t}=ft("#labStage").getBoundingClientRect();if(e<1||t<1)return;Et.setSize(e,t,!1);let i=Math.max(1,1.3/Ct.aspect);Ct.aspect=e/t;let r=Math.max(1,1.3/Ct.aspect);Ct.position.sub(yt.target).multiplyScalar(r/i).add(yt.target),Ct.updateProjectionMatrix(),Nt()}function Ii(){vi.querySelectorAll("[data-layer]").forEach(e=>e.checked=Ne.groups[e.dataset.layer].every(t=>t.visible)),ft('[data-action="undo"]').disabled=!Xn.length,Nt()}function ea(e){let t=e.filter(i=>i.visible);t.length&&(Xn.push(t),t.forEach(i=>i.visible=!1),Ii())}function rl(e){let t=Ne.items[e];if(!t)return;let i=["VOLANT","VOLANT 2026","DOS DU VOLANT"].includes(si[e][1]);i&&$t!=="wheel"?_i("wheel"):!i&&$t==="wheel"&&_i("perspective"),e==="pistons"&&Ne.items.engine.forEach(o=>o.visible=!1),["brake","caliper","pads"].includes(e)&&Ne.items.tyre.forEach(o=>o.visible=!1),["seat","fuel","battery","engine","turbo","mguk","electronics","gearbox","radiator","pedals","dampers"].includes(e)&&Ne.groups.body.forEach(o=>o.visible=!1),["seat","fuel","battery","pedals"].includes(e)&&Ne.groups.structure.forEach(o=>o.visible=!1);let r=new Gi;if(t.filter(o=>o.parent===($t==="wheel"?Ne.wheel:Ne.car)).slice(0,1).forEach(o=>{o.visible=!0,r.expandByObject(o)}),r.isEmpty())return;let a=r.getCenter(new L),n=r.getSize(new L).length();yt.target.copy(a);let s=$t==="wheel"?new L(.15,.1,1):new L(-1,.7,1);Ct.position.copy(a).addScaledVector(s.normalize(),Math.max(n*1.5,.45)),yt.update(),Ii()}function _i(e){$t=e,Ne.car.visible=e!=="wheel",Ne.wheel.visible=e==="wheel",Ui.children.filter(i=>i.type==="GridHelper").forEach(i=>i.visible=e!=="wheel");let t={perspective:[-5,3.2,4.8],top:[0,7,.001],side:[0,1.5,7],front:[-7,1,0],rear:[7,1,0],wheel:[0,.05,1.65]};Ct.position.set(...t[e]).multiplyScalar(Math.max(1,1.3/Ct.aspect)),Ct.up.set(0,1,0),yt.target.set(0,e==="wheel"?0:.35,0),yt.minDistance=e==="wheel"?.2:.18,yt.maxDistance=e==="wheel"?5:15,yt.update(),ft("#labMode").textContent=e==="wheel"?"VOLANT / COMMANDES & PALETTES":"MONOPLACE / ARCHITECTURE 2026",vi.querySelectorAll("[data-view]").forEach(i=>i.setAttribute("aria-pressed",i.dataset.view===e)),ft("#labScan").checked=!1,al(),Nt()}var Wa=new Pi(new L(0,-1,0),2);function al(){if(!Et)return;let e=ft("#labAxis").value,t=Number(ft("#labDepth").value)/100,i=$t==="wheel"?{x:[-.6,.6],y:[-.35,.3],z:[-.25,.16]}:{x:[-2.7,2.6],y:[0,1.2],z:[-1.1,1.1]};Wa.normal.set(0,0,0),Wa.normal[e]=-1,Wa.constant=i[e][0]+t*(i[e][1]-i[e][0]),Et.clippingPlanes=ft("#labScan").checked?[Wa]:[],ft("#labDepthLabel").textContent=Math.round(t*100)+" %",Nt()}async function Zv(){if(!Et)try{Et=new vc({antialias:!0,alpha:!1}),Et.setPixelRatio(Math.min(devicePixelRatio,1.8)),Et.outputColorSpace=bt,Et.toneMapping=ds,Et.toneMappingExposure=.85,Et.setClearColor(1055528),Ui=new wo,Ct=new Ht(36,1,.01,100),yt=new yc(Ct,Et.domElement),yt.enableDamping=!1,yt.addEventListener("change",Nt),Et.domElement.setAttribute("aria-label","Maquette 3D interactive. Les composants sont aussi accessibles dans la liste sous la sc\xE8ne."),ft("#labStage").prepend(Et.domElement);let e=new kn(Et),t=new bc;Ui.environment=e.fromScene(t,.04).texture,Ui.environmentIntensity=.55,t.dispose(),e.dispose(),Ui.add(new Uu(14478079,3228505,.9));let i=new Ho(16777215,2);i.position.set(-3,5,4),Ui.add(i),Ne=qv(),$v(Ne),ax(Ne),Ui.add(Ne.car,Ne.wheel);let r=new jp(12,48,3690854,2110022);r.position.y=-.025,Ui.add(r),Ne.wheel.position.y=0,ft(".lab-loading").remove(),new ResizeObserver(Mc).observe(ft("#labStage")),_i("perspective"),Mc(),qt(Qr);let a,n=new zu,s=new se;Et.domElement.addEventListener("pointerdown",o=>{a=[o.clientX,o.clientY]}),Et.domElement.addEventListener("pointerup",o=>{if(!a||Math.hypot(o.clientX-a[0],o.clientY-a[1])>7)return;let l=Et.domElement.getBoundingClientRect();s.set((o.clientX-l.left)/l.width*2-1,-(o.clientY-l.top)/l.height*2+1),n.setFromCamera(s,Ct);let u=n.intersectObject($t==="wheel"?Ne.wheel:Ne.car,!0);for(let c of u){let d=c.object,p=!0;for(let m=d;m;m=m.parent)m.visible||(p=!1);if(!(!p||ft("#labScan").checked&&Wa.distanceToPoint(c.point)<0)){for(;d&&!d.userData.id;)d=d.parent;if(!(!d||gr&&d.userData.layer==="body")){qt(d.userData.id),ft("#labRemove").checked&&ea([d]);break}}}}),Et.domElement.addEventListener("webglcontextlost",o=>{o.preventDefault(),ft("#labMode").textContent="Affichage 3D interrompu : rechargez la page. Les fiches restent disponibles."})}catch(e){Et=null,ft(".lab-loading").textContent="La 3D n\xE9cessite WebGL. Essayez un navigateur r\xE9cent avec l\u2019acc\xE9l\xE9ration graphique activ\xE9e. Les fiches restent accessibles ci-dessous.",console.error("F1 atelier",e)}}var Sc=new IntersectionObserver(e=>{e.some(t=>t.isIntersecting)&&(Zv(),Sc.disconnect())},{rootMargin:"100px"});Sc.observe(vi),vi.addEventListener("click",e=>{let t=e.target.closest("button");if(t){if(t.dataset.part){qt(t.dataset.part);return}if(Ne){if(t.dataset.view){_i(t.dataset.view),$t==="wheel"&&qt("screen");return}switch(t.dataset.action){case"focus":rl(Qr);break;case"hide":ea((Ne.items[Qr]||[]).filter(i=>i.parent===($t==="wheel"?Ne.wheel:Ne.car)));break;case"zoom-in":case"zoom-out":Ct.position.sub(yt.target).multiplyScalar(t.dataset.action==="zoom-in"?.8:1.25).add(yt.target),yt.update(),Nt();break;case"reset":_i($t);break;case"assemble":Object.values(Ne.items).flat().forEach(i=>i.visible=!0),Xn=[],Ii();break;case"peel":$t==="wheel"&&_i("perspective"),ea([...Ne.groups.body,...Ne.groups.wheels,...Ne.groups.structure]);break;case"undo":(Xn.pop()||[]).forEach(i=>i.visible=!0),Ii();break;case"xray":gr=!gr,t.setAttribute("aria-pressed",gr);for(let i of Ne.groups.body)i.traverse(r=>{r.material&&(r.material.transparent=gr,r.material.opacity=gr?.15:1,r.material.depthWrite=!gr)});Nt();break}}}}),vi.addEventListener("change",e=>{if(e.target.dataset.layer&&Ne){let t=Ne.groups[e.target.dataset.layer];e.target.checked?t.forEach(i=>i.visible=!0):ea(t),Ii()}["labScan","labAxis"].includes(e.target.id)&&al()}),ft("#labDepth").oninput=al;const Ce={Group:pi,Mesh:xt,Material:Ba,Basic:Sa,Box:ur,Cylinder:La,Torus:Yr,Sphere:Lu,Buffer:Lt,Attribute:tt,Vector:L,Texture:Ca,Plane:Fa,Tube:Bo,Curve:Pn,Shape:In,Extrude:Fo},Ji={soft:{name:"Tendre \xB7 Soft",mark:"SOFT",color:"#f35260",use:"Piste s\xE8che",text:"Le plus tendre des trois m\xE9langes retenus pour ce Grand Prix. Il privil\xE9gie g\xE9n\xE9ralement la performance imm\xE9diate, au prix d\u2019une d\xE9gradation potentiellement plus rapide."},medium:{name:"M\xE9dium \xB7 Medium",mark:"MEDIUM",color:"#f5ca40",use:"Piste s\xE8che",text:"Le m\xE9lange interm\xE9diaire de la s\xE9lection du week-end. Il offre souvent un compromis entre rythme et dur\xE9e du relais, selon le circuit et les conditions."},hard:{name:"Dur \xB7 Hard",mark:"HARD",color:"#f1f3f5",use:"Piste s\xE8che",text:"Le plus dur de la s\xE9lection du week-end. Il est g\xE9n\xE9ralement choisi pour sa r\xE9sistance, mais sa mise en temp\xE9rature peut \xEAtre moins facile."},inter:{name:"Interm\xE9diaire",mark:"INTER",color:"#56c883",use:"Piste humide / s\xE9chante",text:"Ses rainures \xE9vacuent l\u2019eau sur une piste humide. Quand la piste s\xE8che, sa temp\xE9rature et son usure peuvent augmenter : le passage aux slicks devient une d\xE9cision strat\xE9gique."},wet:{name:"Pluie \xB7 Full wet",mark:"WET",color:"#429bf6",use:"Piste tr\xE8s mouill\xE9e",text:"Ses rainures plus marqu\xE9es aident \xE0 \xE9vacuer davantage d\u2019eau. Il ne supprime ni l\u2019aquaplanage ni les probl\xE8mes de visibilit\xE9 : les conditions peuvent rester impropres \xE0 la course."}};let ta="medium",qa=[],Tc=[],Kv=[];function Jv(){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");let i=2441;for(let a=0;a<256;a++)for(let n=0;n<256;n++){i=i*1664525+1013904223>>>0;const s=64+(i>>>27);t.fillStyle=`rgb(${s},${s+2},${s+3})`,t.fillRect(n,a,1,1)}t.strokeStyle="rgba(160,169,173,.16)",t.lineWidth=.7;for(let a=0;a<256;a+=8)t.beginPath(),t.moveTo(0,a),t.lineTo(256,a),t.stroke();const r=new Ca(e);return r.wrapS=r.wrapT=Ar,r.repeat.set(6,1),r.colorSpace=bt,r}function je(e,t,i=10398385,r=.4,a=.65){const n=new xt(t,new Ba({color:i,roughness:r,metalness:a,side:Vt}));return e.add(n),n}function Xa(e,t,i,r,a,n,s,o){const l=je(e,new ur(a,n,s),o);return l.position.set(t,i,r),l}function ht(e,t,i,r,a,n,s){const o=je(e,new La(a,a,n,48),s);return o.rotation.x=Math.PI/2,o.position.set(t,i,r),o}function wc(e,t,i,r,a,n,s,o){const l=new In;l.absarc(0,0,a,-.65,.65,!1),l.absarc(0,0,n,.65,-.65,!0),l.closePath();const u=je(e,new Fo(l,{depth:s,bevelEnabled:!0,bevelThickness:.0015,bevelSize:.0015,bevelSegments:2,steps:1}),o,.55,.25);return u.position.set(t,i,r-s/2),u}function Di(e,t,i,r,a){const n=new L(...i).sub(new L(...t)),s=je(e,new La(r,r,n.length(),12),a);return s.position.copy(new L(...t).addScaledVector(n,.5)),s.quaternion.setFromUnitVectors(new L(0,1,0),n.normalize()),s}function ia(e,t=96,i=""){const r=[],a=[],n=[];for(let o=0;o<e.length;o++){let[l,u]=e[o];for(let c=0;c<=t;c++){let d=c/t*2*Math.PI,p=u;i&&Math.abs(l)<.12&&u>.33&&(Math.abs(Math.sin(d*(i==="wet"?38:27)+l*95))<.24&&(p-=.009),i==="wet"&&Math.abs(Math.sin(l*90))<.2&&(p-=.007)),r.push(p*Math.cos(d),p*Math.sin(d),l),a.push(c/t,o/(e.length-1))}}for(let o=0;o<e.length-1;o++)for(let l=0;l<t;l++){let u=o*(t+1)+l,c=u+t+1;n.push(u,c,u+1,u+1,c,c+1)}const s=new Lt;return s.setAttribute("position",new tt(r,3)),s.setAttribute("uv",new tt(a,2)),s.setIndex(n),s.computeVertexNormals(),s}function nl(e,t){const i=[[-e*.36,.224],[-e*.47,.25],[-e*.5,.295],[-e*.47,.33]];for(let r=0;r<=32;r++)i.push([-e*.4+r/32*e*.8,.352-.005*Math.pow((r-16)/16,4)]);return i.push([e*.47,.33],[e*.5,.295],[e*.47,.25],[e*.36,.224]),ia(i,192,["wet","inter"].includes(t)?t:"")}function Ac(e){let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d");i.fillStyle=Ji[e].color,i.textAlign="center",i.font="bold 43px Arial";for(let a=0;a<Ji[e].mark.length;a++){let n=(a-(Ji[e].mark.length-1)/2)*.135;i.save(),i.translate(256,256),i.rotate(n),i.fillText(Ji[e].mark[a],0,-191),i.restore()}i.font="24px Arial",i.fillText("18\u2033 \u2022 2026",256,461);let r=new Ca(t);return r.colorSpace=bt,r}function $v(e){var t,i;for(const r of e.items.tyre){const a=r.children[0].position.x,n=r.children[0].position.z,s=a<0?.28:.34;r.clear();const o=je(r,nl(s,ta),1382428,.87,.02);o.position.set(a,.36,n),qa.push({mesh:o,width:s}),je(r,ia([[-s*.37,.225],[-s*.37,.206],[s*.37,.206],[s*.37,.225]]),5265766,.28).position.set(a,.36,n);for(let l of[-1,1]){const u=je(r,new Fa(.71,.71),16777215);u.material=new Sa({map:Ac(ta),transparent:!0,depthWrite:!1,side:Vt}),u.position.set(a,.36,n+l*s*.505),l<0&&(u.rotation.y=Math.PI),Tc.push(u),je(r,new Yr(.222,.005,8,80),9147294).position.set(a,.36,n+l*s*.38),ht(r,a,.36,n+l*s*.39,.038,.02,12034942);for(let c=0;c<10;c++){let d=c*Math.PI/5;Di(r,[a+Math.cos(d)*.04,.36+Math.sin(d)*.04,n+l*s*.38],[a+Math.cos(d+.12)*.215,.36+Math.sin(d+.12)*.215,n+l*s*.36],.007,7569036)}}}for(const r of e.items.brake){const a=r.children[0].position.x,n=r.children[0].position.z;r.clear();const s=a<0?.167:.135,o=.03;let l=je(r,ia([[-o/2,.065],[-o/2,s],[o/2,s],[o/2,.065],[-o/2,.065]],128),16777215,.77,.05);l.material.map=Jv(),l.material.bumpMap=l.material.map,l.material.bumpScale=35e-5,l.position.set(a,.36,n),je(r,ia([[-.012,.024],[-.012,.068],[.012,.068],[.012,.024]],64),9343894).position.set(a,.36,n);for(let v of[-1,1])for(let g=0;g<12;g++){const f=g*Math.PI/6;ht(r,a+Math.cos(f)*.062,.36+Math.sin(f)*.062,n+v*.017,.004,.008,11576460)}const u=[],c=[];for(let v=0;v<3;v++)for(let g=0;g<96;g++){let f=(g+v%2*.5)/96*Math.PI*2,h=Math.cos(f),w=Math.sin(f),x=(v-1)*.009,S=a+h*(s+2e-4),I=.36+w*(s+2e-4),E=u.length/3;u.push(S,I,n+x);for(let T=0;T<=8;T++){let C=T/8*Math.PI*2;u.push(S-w*Math.cos(C)*.0018,I+h*Math.cos(C)*.0018,n+x+Math.sin(C)*.0018),T<8&&c.push(E,E+T+1,E+T+2)}}let d=new Lt;d.setAttribute("position",new tt(u,3)),d.setIndex(c),d.computeVertexNormals(),je(r,d,526861,.95,0);const p=new pi;p.userData={id:"caliper",layer:"brakes"},e.car.add(p),((t=e.items).caliper??(t.caliper=[])).push(p),e.groups.brakes.push(p);const m=new pi;m.userData={id:"pads",layer:"brakes"},e.car.add(m),((i=e.items).pads??(i.pads=[])).push(m),e.groups.brakes.push(m);for(let v of[-1,1]){let g=[];for(let w=0;w<=24;w++){let x=-.62+w/24*1.24;g.push([a+Math.cos(x)*(s-.014),.36+Math.sin(x)*(s-.014),n+v*.038])}const f=je(p,new Bo(new Pn(g.map(w=>new L(...w))),32,.021,12,!1),10854808,.35);for(let w=0;w<3;w++){let x=-.4+w*.4,S=a+Math.cos(x)*(s-.02),I=.36+Math.sin(x)*(s-.02);ht(p,S,I,n+v*.047,.018,.014,7831170),ht(p,S,I,n+v*.056,.009,.004,13683648)}const h=wc(m,a,.36,n+v*.022,s-.003,s-.055,.012,3356219);wc(p,a,.36,n+v*.045,s+.008,s-.04,.017,9344665)}for(let v of[-.52,0,.52])Di(p,[a+Math.cos(v)*(s-.006),.36+Math.sin(v)*(s-.006),n-.04],[a+Math.cos(v)*(s-.006),.36+Math.sin(v)*(s-.006),n+.04],.011,9212308);ht(p,a+s,.42,n+.06,.005,.02,14540253),Kv.push({rotor:r,cal:p,pads:m})}for(const r of Object.values(e.items))for(const a of r)a.traverse(n=>{n.material?.map?.wrapS===Ar&&n.material.map.repeat.set(20,20)});for(const r of["engine","gearbox","electronics"])for(const a of e.items[r]||[])for(let n=0;n<8;n++){const s=r==="engine"?.52+n*.073:r==="gearbox"?1.23+n*.07:.23+n*.03;ht(a,s,r==="engine"?.595:r==="gearbox"?.415:.245,r==="engine"?.19:0,.005,.008,10923188)}Qv(),Ga(),Nt()}function Rc(e){ta=e;for(const{mesh:i,width:r}of qa)i.geometry.dispose(),i.geometry=nl(r,e);for(const i of Tc)i.material.map.dispose(),i.material.map=Ac(e);document.querySelectorAll("[data-compound]").forEach(i=>i.setAttribute("aria-pressed",i.dataset.compound===e));const t=document.getElementById("v24TyreText");t&&(t.innerHTML=`<strong>${Ji[e].name} \u2014 ${Ji[e].use}</strong><p>${Ji[e].text}</p>`),Nt()}function Qv(){const e=document.createElement("div");e.className="v24-workshops",e.innerHTML=`<div><span class="lab-eyebrow">ATELIERS D\xC9TAILL\xC9S</span><div class="v24-shortcuts"><button data-closeup="tyre">Pneus</button><button data-closeup="brake">Frein complet</button><button data-engine-open>Cycle du moteur \u2193</button></div></div><div><span class="lab-eyebrow">CHAUSSER LA MONOPLACE</span><div class="v24-compounds">${Object.entries(Ji).map(([t,i])=>`<button data-compound="${t}" style="--compound:${i.color}" aria-pressed="${t===ta}">${i.mark}</button>`).join("")}</div><div id="v24TyreText" class="v24-tyre-text"></div><p class="lab-small">Rainures illustratives. Soft / Medium / Hard sont relatifs aux trois m\xE9langes choisis pour le Grand Prix ; ils ne d\xE9signent pas toujours le m\xEAme C1\u2013C5.</p></div>`,document.querySelector(".lab-toolbar").after(e),e.addEventListener("click",t=>{let i=t.target.closest("button");if(i){if(i.dataset.compound&&Rc(i.dataset.compound),i.dataset.closeup){_i("perspective"),Object.values(Ne.items).flat().forEach(a=>a.visible=!0);const r=i.dataset.closeup==="brake"?[Ne.items.brake[0],Ne.items.caliper[0],Ne.items.pads[0]]:[Ne.items.tyre[0],Ne.items.brake[0],Ne.items.caliper[0],Ne.items.pads[0]];if(ea(Object.values(Ne.items).flat().filter(a=>a.parent===Ne.car&&!r.includes(a))),qt(i.dataset.closeup),rl(i.dataset.closeup),i.dataset.closeup==="brake"){Ne.items.caliper[0].visible=!0,Ne.items.pads[0].visible=!0;const a=Ne.items.brake[0].children[0].position;yt.target.copy(a),Ct.position.copy(a).add(new L(.35,.19,-.67)),yt.update(),Nt()}}if(i.dataset.closeup==="tyre"){const r=Ne.items.tyre[0].children[0].position;yt.target.copy(r),Ct.position.copy(r).add(new L(-.5,.33,-1.35)),yt.update(),Nt()}i.hasAttribute("data-engine-open")&&document.getElementById("v25Engine").scrollIntoView({behavior:"smooth"})}}),Rc(ta)}var Cc=!1;Wt.tyres=["Pirelli \xB7 gamme F1 2026, consult\xE9e le 20 septembre 2026","https://www.pirelli.com/tyres/en-ww/motorsport/car/formula-1"],Wt.tyredesign=["Pirelli \xB7 pr\xE9sentation des pneus 2026, 9 d\xE9cembre 2025","https://press.pirelli.com/pirelli-reveals-2026-f1-tyres-a-fresh-logo-design-and-new-compounds/"],Wt.brakes=["Brembo \xB7 technologie de freinage 2026, 2 mars 2026","https://www.brembogroup.com/en/media/news/formula-1-2026-brembo-accelerates-innovation-for-a-new-era"],Wt.vents=["Brembo \xB7 ventilation des disques, consult\xE9 le 20 septembre 2026","https://www.brembo.com/en/motorsport/formula1/ventilation-holes"],Wt.cycle=["U.S. Department of Energy \xB7 fonctionnement du moteur, 22 novembre 2013","https://www.energy.gov/cmei/vehicles/articles/internal-combustion-engine-basics"],Object.assign(si,{caliper:["\xC9trier et pistons hydrauliques","FREINAGE","La pression hydraulique pousse les pistons de l\u2019\xE9trier. Ils appliquent les plaquettes de part et d\u2019autre du disque. L\u2019\xE9trier reste solidaire du porte-moyeu pendant que le disque tourne.","Le mod\xE8le montre un exemple \xE0 six pistons ; ce nombre n\u2019est pas universel en 2026.","brakes"],pads:["Plaquettes de frein","FREINAGE","Les garnitures frottent contre les pistes du disque et transforment une partie de l\u2019\xE9nergie cin\xE9tique en chaleur. Elles constituent des \xE9l\xE9ments distincts de l\u2019\xE9trier et du rotor.","Leur forme, la r\xE9partition de pression et le refroidissement contribuent \xE0 la constance du freinage.","brakes"]}),si.tyre[2]="Les pneumatiques assurent la liaison avec la piste : acc\xE9l\xE9ration, freinage et forces lat\xE9rales passent par leurs zones de contact. Le s\xE9lecteur montre cinq familles de pneus, avec marquages et sculptures illustratifs.",si.tyre[4]="tyres",si.brake[0]="Disque carbone et bol de fixation",si.brake[2]="La piste annulaire en carbone-carbone tourne avec la roue. Le bol central assure sa liaison m\xE9canique au moyeu. Des canaux radiaux \xE9vacuent de la chaleur \xE0 travers l\u2019\xE9paisseur du disque.",si.brake[4]="vents";const ex={tyre:[["Choisir la gomme","Le tendre rouge, le m\xE9dium jaune et le dur blanc sont les trois choix slicks du week-end. Interm\xE9diaires verts et pluie bleus ont des sculptures pour \xE9vacuer l\u2019eau. Les noms ne constituent pas un classement absolu des performances : temp\xE9rature, charge, surface et conduite comptent aussi.","tyres"],["C1 \xE0 C5 \u2260 Soft \xE0 Hard","La gamme s\xE8che 2026 comporte cinq m\xE9langes C1 \xE0 C5. Trois sont s\xE9lectionn\xE9s pour chaque Grand Prix. Un m\xEAme m\xE9lange peut donc changer de nom relatif d\u2019un week-end \xE0 l\u2019autre.","tyres"],["Lire ce que montre la maquette","Le pneu est d\xE9sormais distinct de la jante, avec une bande de roulement, des \xE9paules arrondies et un flanc. Le marquage 2026 conserve les couleurs de reconnaissance. Les sculptures montr\xE9es ici ne reproduisent pas un moule Pirelli.","tyredesign"]],brake:[["Des canaux dans l\u2019\xE9paisseur","Les orifices visibles sur le bord ext\xE9rieur repr\xE9sentent les sorties de ventilation radiale. Ils ne sont pas des perforations d\xE9coratives traversant les deux faces de friction. La g\xE9om\xE9trie des conduits r\xE9els d\xE9pend du fournisseur.","vents"],["\xC9nergie et temp\xE9rature","Le frottement chauffe disque et plaquettes. L\u2019air de refroidissement doit \xE9vacuer cette \xE9nergie tout en conservant une plage de fonctionnement adapt\xE9e. L\u2019animation et la maquette ne calculent pas de temp\xE9rature r\xE9elle.","brakes"]],caliper:[["Rigidit\xE9 et pression","Un corps rigide limite sa d\xE9formation sous pression et aide \xE0 conserver une r\xE9ponse r\xE9guli\xE8re \xE0 la p\xE9dale. Masse, rigidit\xE9 et refroidissement constituent un compromis de conception.","brakes"],["Ce qui change en 2026","La r\xE9glementation ouvre notamment la possibilit\xE9 de huit pistons et quatre plaquettes. Six pistons dans cette maquette repr\xE9sentent une architecture explicative, pas l\u2019\xE9quipement impos\xE9 \xE0 toutes les \xE9curies.","brakes"]],pads:[["Deux surfaces en contact","La plaquette int\xE9rieure et la plaquette ext\xE9rieure serrent les deux faces du rotor. Retirer les plaquettes dans la sc\xE8ne permet de distinguer ces trois \xE9l\xE9ments.","brakes"]],engine:[["Le moteur n\u2019entra\xEEne pas directement les pneus","La combustion agit sur les pistons ; bielles et vilebrequin transmettent le mouvement \xE0 la transmission. Les roues arri\xE8re re\xE7oivent le couple par la bo\xEEte puis le diff\xE9rentiel.","cycle"],["Thermique et \xE9lectrique","Le V6 turbo 1,6 litre est associ\xE9 au syst\xE8me hybride. Le MGU-K peut contribuer \xE0 la propulsion et r\xE9cup\xE9rer de l\u2019\xE9nergie ; le MGU-H n\u2019est plus pr\xE9sent en 2026. L\u2019atelier ci-dessous isole un cylindre pour expliquer le cycle.","honda"]],pistons:[["Mouvement alternatif \u2192 rotation","Le piston est guid\xE9 par le cylindre ; sa bielle oscille et entra\xEEne un maneton d\xE9cal\xE9 par rapport \xE0 l\u2019axe du vilebrequin. Ce d\xE9calage transforme la pouss\xE9e en couple.","cycle"],["Quatre courses, deux tours","Un cycle \xE0 quatre temps demande 720\xB0 de vilebrequin. Seule la d\xE9tente est le temps moteur ; les autres courses sont entra\xEEn\xE9es par l\u2019ensemble tournant et les autres cylindres.","cycle"]],fuel:[["Du r\xE9servoir \xE0 l\u2019injecteur","Le carburant est achemin\xE9 par le circuit d\u2019alimentation, mis sous pression puis dos\xE9 par les injecteurs. Dans la F1, l\u2019injection se fait dans la chambre. Le dessin du module illustre le trajet sans reproduire les conduites d\u2019une \xE9curie.","rules"]],turbo:[["Deux c\xF4t\xE9s, un m\xEAme arbre","La turbine est entra\xEEn\xE9e par les gaz sortant du moteur. Le compresseur augmente la pression de l\u2019air admis ; ce sont deux flux s\xE9par\xE9s, reli\xE9s m\xE9caniquement par l\u2019arbre.","honda"],["La temp\xE9rature compte aussi","L\u2019air comprim\xE9 chauffe. Le refroidissement de l\u2019air de suralimentation et la r\xE9ponse du turbo font partie de la conception globale, avec des implantations propres \xE0 chaque motoriste.","rules"]],mguk:[["Deux sens de conversion","En moteur : batterie \u2192 \xE9lectronique \u2192 machine \xE9lectrique \u2192 transmission. En g\xE9n\xE9rateur : une partie de l\u2019\xE9nergie m\xE9canique suit le chemin inverse. La r\xE9cup\xE9ration ne remplace pas tout le freinage.","honda"]],battery:[["Puissance et \xE9nergie","La puissance d\xE9crit le rythme auquel l\u2019\xE9nergie est \xE9chang\xE9e. L\u2019\xE9nergie d\xE9crit la r\xE9serve disponible. Une forte puissance autoris\xE9e ne signifie donc pas que l\u2019assistance peut \xEAtre maintenue ind\xE9finiment.","honda"]],electronics:[["Faire circuler et piloter l\u2019\xE9nergie","L\u2019\xE9lectronique de puissance coordonne les \xE9changes entre batterie et MGU-K. Les temp\xE9ratures, les limites \xE9lectriques et la strat\xE9gie de d\xE9ploiement conditionnent le fonctionnement.","honda"]],gearbox:[["Rapport et diff\xE9rentiel","La bo\xEEte change le rapport entre r\xE9gime moteur et vitesse des roues. Le diff\xE9rentiel permet aux deux roues arri\xE8re de parcourir des distances diff\xE9rentes en virage, tout en transmettant le couple.","rules"]],suspension:[["Guider et contr\xF4ler","Les triangles guident le porte-moyeu. Les poussoirs ou tirants transmettent le mouvement aux ressorts et amortisseurs. La g\xE9om\xE9trie illustr\xE9e est g\xE9n\xE9rique : les montages r\xE9els diff\xE8rent.","rules"]],dampers:[["Ressort \u2260 amortisseur","Le ressort emmagasine et restitue de l\u2019\xE9nergie avec sa d\xE9formation. L\u2019amortisseur dissipe de l\u2019\xE9nergie et contr\xF4le la vitesse du mouvement. Ils doivent travailler ensemble.","rules"]],front:[["\xC9quilibre a\xE9rodynamique","Le train avant doit disposer d\u2019une charge compatible avec celle de l\u2019arri\xE8re. Modifier l\u2019aileron peut changer la r\xE9ponse en entr\xE9e de virage et les \xE9coulements autour des roues.","f1"]],rear:[["Appui et r\xE9sistance \xE0 l\u2019air","La configuration virage favorise l\u2019appui ; la configuration ligne droite r\xE9duit la tra\xEEn\xE9e dans les conditions autoris\xE9es. Les deux ailerons participent au syst\xE8me actif 2026.","f1"]],floor:[["Le dessous est une surface de travail","La forme du soubassement, sa distance \xE0 la piste et l\u2019assiette influencent les pressions. Le diffuseur organise l\u2019\xE9coulement en sortie. La maquette ne simule pas ces pressions.","rules"]],radiator:[["\xC9changer la chaleur","Le liquide circule dans des passages et transmet sa chaleur aux surfaces balay\xE9es par l\u2019air. Les ailettes augmentent la surface d\u2019\xE9change. Diff\xE9rents circuits peuvent servir au thermique et \xE0 l\u2019\xE9lectrique.","rules"]],sidepod:[["Emballer et refroidir","Les pontons doivent laisser passer l\u2019air vers les \xE9changeurs tout en guidant l\u2019\xE9coulement ext\xE9rieur. Une ouverture n\u2019est donc pas seulement une question de style.","rules"]],cockpit:[["Une cellule, plusieurs protections","La cellule de survie, le si\xE8ge, les harnais, les protections et le halo ont des fonctions compl\xE9mentaires. Les ouvertures et volumes doivent \xE9galement permettre l\u2019\xE9vacuation du pilote.","rules"]],seat:[["Position inclin\xE9e et maintien","Le baquet et ses appuis sont adapt\xE9s au pilote. Le harnais limite ses d\xE9placements ; la position des pieds et des mains doit permettre l\u2019action pr\xE9cise sur les commandes.","rules"]],balance:[["Ajuster, pas simplement freiner plus","Le pilote r\xE9partit la demande entre les deux essieux. Le r\xE9glage influence le risque de blocage et la stabilit\xE9 au freinage. Il d\xE9pend notamment de l\u2019adh\xE9rence et du transfert de charge.","wheel"]],migration:[["Une r\xE9partition qui \xE9volue","La migration correspond \xE0 une \xE9volution de la r\xE9partition au cours du freinage. Elle compl\xE8te la consigne de base ; ce n\u2019est pas un troisi\xE8me frein ind\xE9pendant.","wheel"]],differential:[["Entr\xE9e, milieu, sortie","Des r\xE9glages distincts peuvent adapter le comportement du diff\xE9rentiel aux phases du virage. La commande de cette maquette les repr\xE9sente de fa\xE7on regroup\xE9e.","wheel"]],clutch:[["Le d\xE9part","L\u2019embrayage permet une mise en charge progressive de la transmission. Il est distinct de la s\xE9lection des rapports et de la commande d\u2019acc\xE9l\xE9rateur.","wheel"]]};function tx(e){if(!Cc)return;const t=document.getElementById("labDetail");let i=t.querySelector(".v24-deeper");i&&i.remove();const r=ex[e];if(!r)return;const a=document.createElement("div");a.className="v24-deeper",a.innerHTML=`<h4>Aller plus loin</h4>${r.map(([n,s,o])=>`<details><summary>${xi(n)}</summary><p>${xi(s)}</p><a href="${Wt[o][1]}" target="_blank" rel="noopener">${xi(Wt[o][0])} \u2197</a></details>`).join("")}${["engine","pistons","fuel","turbo"].includes(e)?"<button data-engine-open>Comprendre le cycle du moteur \u2193</button>":""}`,t.append(a)}document.getElementById("f1Loupe").addEventListener("click",e=>{e.target.closest("[data-engine-open]")&&document.getElementById("v24Engine")?.scrollIntoView({behavior:"smooth"})}),Cc=!0,qt(Qr),Ga();const ra=[{name:"Admission",range:"0\u2013180\xB0",color:"#4ec6e4",text:"Le piston descend. La soupape d\u2019admission ouverte laisse entrer l\u2019air. Le carburant est dos\xE9 s\xE9par\xE9ment par l\u2019injecteur dans la chambre.",valves:"Admission ouverte \xB7 \xE9chappement ferm\xE9"},{name:"Compression",range:"180\u2013360\xB0",color:"#bc97fb",text:"Le piston remonte, soupapes ferm\xE9es. L\u2019air et le carburant sont comprim\xE9s. L\u2019injection montr\xE9e en fin de compression est un choix illustratif ; le calage r\xE9el d\xE9pend du moteur.",valves:"Les deux soupapes sont ferm\xE9es"},{name:"Combustion & d\xE9tente",range:"360\u2013540\xB0",color:"#ff9256",text:"Pr\xE8s du point mort haut, l\u2019\xE9tincelle d\xE9clenche la combustion. La pression des gaz pousse le piston vers le bas : c\u2019est le temps moteur.",valves:"Les deux soupapes sont ferm\xE9es"},{name:"\xC9chappement",range:"540\u2013720\xB0",color:"#b6c2cc",text:"Le piston remonte. La soupape d\u2019\xE9chappement ouverte permet d\u2019\xE9vacuer les gaz br\xFBl\xE9s. Le cycle suivant recommence apr\xE8s deux tours du vilebrequin.",valves:"Admission ferm\xE9e \xB7 \xE9chappement ouvert"}],kt=document.createElement("section");kt.id="v24Engine",kt.className="v24-engine",kt.innerHTML=`<header><div><span class="lab-eyebrow">ATELIER MOTEUR / COUPE ANIM\xC9E</span><h3>Du carburant au mouvement.</h3><p>Un cylindre au ralenti p\xE9dagogique, pour suivre les quatre temps et la transmission de l\u2019effort.</p></div><span class="lab-chip">4 TEMPS \xB7 2 TOURS \xB7 720\xB0</span></header><div class="v24-engine-layout"><div class="v24-engine-screen"><svg viewBox="0 0 600 610" role="img" aria-label="Coupe anim\xE9e d\u2019un cylindre, avec admission, injection directe, piston, bielle et vilebrequin"><defs><linearGradient id="v24Metal"><stop stop-color="#607487"/><stop offset=".4" stop-color="#dae1e4"/><stop offset=".6" stop-color="#8796a3"/><stop offset="1" stop-color="#46586c"/></linearGradient><linearGradient id="v24Gas" x2="0" y2="1"><stop stop-color="#4ec6e4" stop-opacity=".6"/><stop offset="1" stop-color="#4ec6e4" stop-opacity=".12"/></linearGradient><pattern id="v24Hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><rect width="8" height="8" fill="#293c4e"/><path d="M0 0V8" stroke="#567286" stroke-width="2"/></pattern><marker id="v24Arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0L6 3L0 6" fill="none" stroke="#a8bdcb"/></marker></defs>
<text x="24" y="30" class="v24-svg-small">INJECTION DIRECTE \xB7 ARCHITECTURE SIMPLIFI\xC9E</text>
<g class="v24-svg-part" data-engine-part="fuel" tabindex="0" role="button" aria-label="Circuit de carburant"><rect x="28" y="63" width="72" height="39" rx="9" fill="#6e583b" stroke="#efc581"/><text x="64" y="88" text-anchor="middle">R\xE9servoir</text><path d="M100 82H133M177 82H321V145" fill="none" stroke="#e9bc72" stroke-width="5"/><rect x="133" y="66" width="44" height="32" rx="7" fill="#45525c" stroke="#e9bc72"/><text x="155" y="55" text-anchor="middle">Pompe</text><text x="250" y="68" text-anchor="middle">Rampe</text><circle id="v24FuelDot" cx="195" cy="82" r="4" fill="#fff2bc"/></g>
<path d="M32 161H151L246 189" fill="none" stroke="#235268" stroke-width="32"/><path d="M352 189L446 161H568" fill="none" stroke="#49444b" stroke-width="32"/>
<text x="38" y="133" fill="#7bd3e9">Air d\u2019admission</text><text x="431" y="133">Gaz \xE9vacu\xE9s</text><g id="v24AirParticles" fill="#7ae3ff">${[0,1,2,3,4].map(e=>`<circle data-air="${e}" r="4"/>`).join("")}</g><g id="v24ExhaustParticles" fill="#d2c2b3">${[0,1,2,3,4].map(e=>`<circle data-exhaust="${e}" r="4"/>`).join("")}</g>
<rect x="207" y="183" width="13" height="253" fill="url(#v24Hatch)"/><rect x="380" y="183" width="13" height="253" fill="url(#v24Hatch)"/><path d="M210 151H390V183H210Z" fill="url(#v24Metal)"/><rect id="v24Chamber" x="221" y="185" width="158" height="62" fill="url(#v24Gas)"/>
<g id="v24IntakeValve" class="v24-svg-part" data-engine-part="valves" tabindex="0" role="button" aria-label="Soupape admission"><path d="M251 149V188" stroke="#9ed1e0" stroke-width="7"/><path d="M237 188H265" stroke="#ced9dd" stroke-width="8"/></g><g id="v24ExhaustValve" class="v24-svg-part" data-engine-part="valves" tabindex="0" role="button" aria-label="Soupape \xE9chappement"><path d="M349 149V188" stroke="#adadb4" stroke-width="7"/><path d="M335 188H363" stroke="#ced9dd" stroke-width="8"/></g>
<g class="v24-svg-part" data-engine-part="spark" tabindex="0" role="button" aria-label="Bougie"><rect x="283" y="135" width="14" height="41" rx="3" fill="#d4e4e7"/><path d="M290 176V194" stroke="#ecd685" stroke-width="4"/></g><g class="v24-svg-part" data-engine-part="injector" tabindex="0" role="button" aria-label="Injecteur"><path d="M321 145L314 191" stroke="#c69a56" stroke-width="10"/><path id="v24Spray" d="M313 193L292 227M313 193L314 229M313 193L329 224" stroke="#f2d090" stroke-width="3" stroke-dasharray="3 4" opacity="0"/></g><path id="v24Spark" d="M290 190L285 203L296 199L287 216L310 202L301 199L307 186" fill="#fff1ae" stroke="#ffb93d" stroke-width="2" opacity="0"/>
<g id="v24Crank" class="v24-svg-part" data-engine-part="crank" tabindex="0" role="button" aria-label="Vilebrequin"><circle cx="300" cy="500" r="79" fill="#172837" stroke="#5e7487" stroke-width="2"/><path d="M271 480Q233 546 294 565Q354 562 328 478Z" fill="url(#v24Metal)"/><path d="M300 500V442" stroke="url(#v24Metal)" stroke-width="25" stroke-linecap="round"/><circle cx="300" cy="442" r="14" fill="#c0c6c7" stroke="#4e6272" stroke-width="6"/></g><circle cx="300" cy="500" r="17" fill="#b9bec3" stroke="#657682" stroke-width="6"/>
<line id="v24Rod" x1="300" y1="442" x2="300" y2="272" stroke="url(#v24Metal)" stroke-width="17" stroke-linecap="round"/>
<g id="v24Piston" class="v24-svg-part" data-engine-part="piston" tabindex="0" role="button" aria-label="Piston et segments"><path d="M228 0H372V46H354V59H246V46H228Z" fill="url(#v24Metal)" stroke="#c7d0d4"/><path d="M228 8H372M228 15H372M228 23H372" stroke="#263440" stroke-width="3"/><circle cx="300" cy="35" r="9" fill="#61798b" stroke="#c6cfd2" stroke-width="4"/></g>
<path d="M480 380H396" stroke="#627f90" marker-end="url(#v24Arrow)"/><text x="416" y="361">Piston</text><path d="M488 470H405" stroke="#627f90" marker-end="url(#v24Arrow)"/><text x="438" y="455">Bielle</text><text x="300" y="602" text-anchor="middle">Vilebrequin \xB7 <tspan id="v24AngleSvg">0\xB0</tspan></text>
</svg><div class="v24-engine-controls"><button id="v24Play">\u25B6 Animer</button><button id="v24Step">Temps suivant</button><label>Vitesse<select id="v24Speed"><option value=".5">\xD70,5</option><option value="1" selected>\xD71</option><option value="2">\xD72</option></select></label><label class="v24-scrub">Cycle<input id="v24Angle" type="range" min="0" max="720" step="1" value="0" aria-label="Angle du vilebrequin de 0 \xE0 720 degr\xE9s"></label></div></div><aside class="v24-engine-info"><div class="v24-phase-buttons">${ra.map((e,t)=>`<button data-phase="${t}" style="--phase:${e.color}" aria-pressed="${t===0}">${t+1}. ${e.name}</button>`).join("")}</div><div id="v24PhaseText" aria-live="polite"></div><div class="v24-component-info" id="v24ComponentInfo"><h4>Touchez un \xE9l\xE9ment</h4><p>Le piston, les soupapes, l\u2019injecteur, la bougie et le vilebrequin ouvrent leur explication.</p></div></aside></div><div class="v24-energy-path"><span>Carburant + air</span><b>\u2192</b><span>Combustion</span><b>\u2192</b><span>Piston & bielle</span><b>\u2192</b><span>Vilebrequin</span><b>\u2192</b><span>Bo\xEEte & diff\xE9rentiel</span><b>\u2192</b><span>Roues arri\xE8re</span></div><p class="lab-small">Coupe de principe, non \xE0 l\u2019\xE9chelle. Un seul cylindre est montr\xE9 ; une F1 poss\xE8de un V6. Distribution et injection sont simplifi\xE9es, sans reproduire le calage d\u2019un motoriste. Il s\u2019agit d\u2019une combustion contr\xF4l\xE9e : une d\xE9tonation anormale n\u2019est pas le fonctionnement recherch\xE9. L\u2019animation ralentit fortement le cycle et ne simule ni pression, ni r\xE9gime r\xE9el, ni puissance.</p><p class="lab-small">Principes : <a href="${Wt.cycle[1]}" target="_blank" rel="noopener">U.S. Department of Energy, 22/11/2013</a> \xB7 Sp\xE9cifications F1 : <a href="${Wt.rules[1]}" target="_blank" rel="noopener">FIA, section C, 05/08/2026</a>.</p>`,document.querySelector(".lab-sources").before(kt);let Ei=0,aa=!1,jn=0,Yn=0,sl=!1,Lc=-1;const ot=e=>kt.querySelector(e);function vr(){const e=Ei%720,t=e*Math.PI/180,i=Math.floor(e/180),r=500-58*Math.cos(t)-Math.sqrt(28900-Math.pow(58*Math.sin(t),2)),a=r-35;ot("#v24Piston").setAttribute("transform",`translate(0 ${a})`),ot("#v24Crank").setAttribute("transform",`rotate(${e} 300 500)`);let n=ot("#v24Rod");n.setAttribute("x1",300+58*Math.sin(t)),n.setAttribute("y1",500-58*Math.cos(t)),n.setAttribute("x2",300),n.setAttribute("y2",r),ot("#v24Chamber").setAttribute("height",a-185),ot("#v24Chamber").setAttribute("fill",ra[i].color),ot("#v24Chamber").setAttribute("opacity",i===2?.6:.27);let s=12*Math.sin(e%180/180*Math.PI);ot("#v24IntakeValve").setAttribute("transform",`translate(0 ${i===0?s:0})`),ot("#v24ExhaustValve").setAttribute("transform",`translate(0 ${i===3?s:0})`),ot("#v24Spark").setAttribute("opacity",e>350&&e<376?1:0),ot("#v24Spray").setAttribute("opacity",e>265&&e<335?1:0),ot("#v24AngleSvg").textContent=Math.round(Ei)+"\xB0",ot("#v24Angle").value=Math.round(Ei),ot("#v24FuelDot").setAttribute("cx",185+e%180/180*130);for(const o of kt.querySelectorAll("[data-air]")){let l=(e/180+Number(o.dataset.air)/5)%1,u=32+l*212;o.setAttribute("cx",u),o.setAttribute("cy",u<151?161:161+(u-151)/95*28),o.style.opacity=i===0?"1":"0"}for(const o of kt.querySelectorAll("[data-exhaust]")){let l=(e/180+Number(o.dataset.exhaust)/5)%1,u=352+l*212;o.setAttribute("cx",u),o.setAttribute("cy",u>446?161:189-(u-352)/94*28),o.style.opacity=i===3?"1":"0"}if(i!==Lc){Lc=i;let o=ra[i];ot("#v24PhaseText").innerHTML=`<span class="lab-eyebrow">TEMPS ${i+1} / ${o.range}</span><h4>${o.name}</h4><p>${o.text}</p><strong class="v24-valves">${o.valves}</strong>`,kt.querySelectorAll("[data-phase]").forEach(l=>l.setAttribute("aria-pressed",Number(l.dataset.phase)===i))}}function Pc(e){jn=0,!(!aa||!sl||document.hidden)&&(Yn&&(Ei=(Ei+Math.min(e-Yn,80)*.045*Number(ot("#v24Speed").value))%720),Yn=e,vr(),jn=requestAnimationFrame(Pc))}function Zn(){cancelAnimationFrame(jn),Yn=0,aa&&sl&&!document.hidden&&(jn=requestAnimationFrame(Pc))}function ol(){aa=!1,ot("#v24Play").textContent="\u25B6 Animer",Zn()}ot("#v24Play").onclick=()=>{aa=!aa,ot("#v24Play").textContent=aa?"\u2161 Pause":"\u25B6 Animer",Zn()},ot("#v24Step").onclick=()=>{ol(),Ei=(Math.floor(Ei/180)+1)%4*180+90,vr()},ot("#v24Angle").oninput=e=>{ol(),Ei=Number(e.target.value),vr()},kt.querySelectorAll("[data-phase]").forEach(e=>e.onclick=()=>{ol(),Ei=Number(e.dataset.phase)*180+90,vr()});const ix={fuel:["Alimentation","Le carburant quitte le r\xE9servoir, traverse le circuit de pompage et alimente la rampe. L\u2019injecteur dose ensuite sa quantit\xE9 dans la chambre. La pompe ne cr\xE9e pas la propulsion."],injector:["Injecteur","Il pulv\xE9rise et dose le carburant. Il ne produit pas l\u2019\xE9tincelle : c\u2019est la fonction de la bougie. Le moment d\u2019injection montr\xE9 est illustratif."],spark:["Bougie","L\u2019\xE9tincelle amorce la combustion autour du point mort haut. La hausse de pression des gaz produit la pouss\xE9e sur le piston."],valves:["Soupapes","L\u2019admission laisse entrer l\u2019air ; l\u2019\xE9chappement \xE9vacue les gaz br\xFBl\xE9s. Elles ferment la chambre pendant compression et d\xE9tente. Leur mouvement est ici id\xE9alis\xE9."],piston:["Piston et segments","Le piston re\xE7oit la force des gaz. Les segments contribuent \xE0 l\u2019\xE9tanch\xE9it\xE9 entre piston et cylindre. L\u2019axe relie le piston \xE0 sa bielle."],crank:["Vilebrequin","Le maneton est d\xE9cal\xE9 de l\u2019axe de rotation. La bielle relie ce maneton au piston : le mouvement alternatif devient rotation. La transmission conduit ensuite le couple aux roues."]};function Uc(e){let t=ix[e];ot("#v24ComponentInfo").innerHTML=`<h4>${t[0]}</h4><p>${t[1]}</p>`,kt.querySelectorAll("[data-engine-part]").forEach(i=>i.classList.toggle("selected",i.dataset.enginePart===e))}kt.querySelectorAll("[data-engine-part]").forEach(e=>{e.onclick=()=>Uc(e.dataset.enginePart),e.onkeydown=t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),Uc(e.dataset.enginePart))}}),new IntersectionObserver(e=>{sl=e[0].isIntersecting,Zn()}).observe(kt),document.addEventListener("visibilitychange",Zn),vr();const He={flow:"none",aero:0,target:0,overtake:!1,particles:[],flaps:[],rotors:[],wheels:[],susp:[],raf:0,last:0,visible:!1,travel:0};function Ni(e,t,i=.012,r=8688541){const a=new Ce.Curve(t.map(s=>new Ce.Vector(...s))),n=je(e,new Ce.Tube(a,56,i,10,!1),r,.35,.65);return{curve:a,mesh:n}}function rx(e,t,i,r,a,n=.15,s=.035,o="#dcecf5"){const l=document.createElement("canvas");l.width=768,l.height=160;const u=l.getContext("2d");u.fillStyle=o,u.font="bold 64px Arial",u.textAlign="center",u.fillText(t,384,103);const c=new Ce.Texture(l);c.colorSpace=bt;const d=new Ce.Mesh(new Ce.Plane(n,s),new Ce.Basic({map:c,transparent:!0,depthWrite:!1,side:Vt}));return d.position.set(i,r,a),e.add(d),d}function ja(e,t,i){var a,n;const r=new Ce.Group;return r.userData={id:t,layer:i},e.car.add(r),((a=e.items)[t]??(a[t]=[])).push(r),((n=e.groups)[i]??(n[i]=[])).push(r),r}function xr(e,t,i,r){const a=Ni(e,t,.009,i);for(let n=0;n<5;n++){const s=new Ce.Mesh(new Ce.Sphere(.016,10,8),new Ce.Basic({color:i}));e.add(s),s.visible=!1,He.particles.push({dot:s,curve:a.curve,type:r,offset:n/5})}return a}function ax(e){const t=(v,g,f,h,w,x="honda")=>si[v]=[g,f,h,w,x];t("fuel_feed","Pompes, rampe et injecteurs","ALIMENTATION","Le carburant part du r\xE9servoir souple derri\xE8re le pilote. Des pompes alimentent une rampe ; chaque injecteur dose et pulv\xE9rise le carburant dans son cylindre. La bougie d\xE9clenche ensuite la combustion.","Un dosage pr\xE9cis favorise une combustion efficace. Ajouter du carburant seul ne suffit pas : il faut aussi de l\u2019air."),t("chargeair","Compresseur, \xE9changeur et admission","AIR DU MOTEUR","La turbine re\xE7oit les gaz br\xFBl\xE9s et fait tourner le compresseur par un arbre commun. L\u2019air comprim\xE9 chauffe : un \xE9changeur le refroidit avant le pl\xE9num et les conduits d\u2019admission.","Un air plus dense permet d\u2019apporter davantage d\u2019oxyg\xE8ne. Pression, temp\xE9rature et fiabilit\xE9 doivent rester ma\xEEtris\xE9es."),t("coolant","Circuit de refroidissement","GESTION THERMIQUE","Le liquide circule entre moteur, pompe et radiateur. L\u2019air ext\xE9rieur traverse les ailettes du radiateur et emporte la chaleur ; cet air ne se m\xE9lange pas au liquide.","Bien refroidir prot\xE8ge les pi\xE8ces, mais des ouvertures plus grandes peuvent augmenter la tra\xEEn\xE9e."),t("electric_path","\xC9nergie \xE9lectrique : propulsion / r\xE9cup\xE9ration","HYBRIDE 2026","La batterie \xE9change de l\u2019\xE9nergie avec le MGU-K \xE0 travers l\u2019\xE9lectronique de puissance. En propulsion, le MGU-K ajoute du couple au groupe moteur. En r\xE9cup\xE9ration, il convertit une partie de l\u2019\xE9nergie m\xE9canique en \xE9nergie \xE9lectrique.","La puissance \xE9lectrique maximale r\xE9glementaire atteint 350 kW en 2026 ; ce n\u2019est pas une puissance disponible en permanence. Il n\u2019y a plus de MGU-H."),t("rocker","Basculeurs, ressorts et amortisseurs","SUSPENSIONS","Les triangles guident la roue. Une tige transmet son d\xE9placement \xE0 un basculeur qui actionne ressort et amortisseur dans la voiture. Le ressort emmagasine de l\u2019\xE9nergie ; l\u2019amortisseur freine le mouvement.","Le r\xE9glage aide \xE0 garder le pneu au sol et la plateforme a\xE9rodynamique stable. Le montage montr\xE9 est un exemple p\xE9dagogique, pas celui d\u2019une \xE9curie.","rules"),e.items.tyre.forEach((v,g)=>{const f=qa[g].mesh,h=f.position.x>0,w=h?.375:.28,x=qa[g].width;v.children.forEach(E=>{E!==f&&(E.position.z=f.position.z+(E.position.z-f.position.z)*w/x)}),f.geometry.dispose(),f.geometry=nl(w,ta),qa[g].width=w;const S="wheel_"+g,I=(h?"Arri\xE8re":"Avant")+" "+(f.position.z>0?"gauche":"droite");t(S,"Roue "+I.toLowerCase(),"CONTACT AU SOL","Les pneus arri\xE8re sont plus larges que les pneus avant. Les jantes conservent un diam\xE8tre de 18 pouces en 2026. La largeur du pneu et le diam\xE8tre de la jante sont deux mesures diff\xE9rentes.","Les roues arri\xE8re transmettent la propulsion. Chaque pneu travaille aussi en freinage et en virage.","rules"),v.userData.id=S,e.items[S]=[v],He.wheels.push({g:v,id:S,name:I,baseY:v.position.y});for(const E of[-1,1]){const T=f.position.z+E*w*.39;ht(v,f.position.x,.36,T,.035,.034,12228465);for(let C=0;C<12;C++){const b=C*Math.PI/6;ht(v,f.position.x+.029*Math.cos(b),.36+.029*Math.sin(b),T+E*.023,.003,.005,2502971)}Di(v,[f.position.x+.15,.49,T],[f.position.x+.173,.512,T],.004,11450559)}});for(const v of["front","rear"]){const g=e.items[v][0],f=g.children.filter(h=>h.isMesh&&h.geometry.type==="BufferGeometry").slice(1,v==="front"?3:2);for(const h of f){h.geometry.computeBoundingBox();const w=h.geometry.boundingBox,x=w.getCenter(new Ce.Vector),S=new Ce.Group;S.position.copy(x),h.geometry.translate(-x.x,-x.y,-x.z),g.remove(h),S.add(h),g.add(S),He.flaps.push({pivot:S,id:v})}}const i=ja(e,"fuel_feed","mechanical");ht(i,.38,.3,.12,.045,.09,9608614),xr(i,[[.23,.35,0],[.35,.28,.12],[.43,.43,.12],[.62,.6,.24],[1.03,.6,.24]],14923869,"fuel");for(const v of[-1,1]){Di(i,[.55,.6,v*.24],[1.03,.6,v*.24],.017,11439701);for(let g=0;g<3;g++){const f=.6+g*.18;Di(i,[f,.6,v*.24],[f,.52,v*.2],.012,13153420),ht(i,f,.57,v*.24,.023,.028,4410969)}}const r=ja(e,"chargeair","mechanical");e.items.turbo.forEach(v=>v.visible=!1);const a=e.items.turbo[0];a.clear(),a.visible=!0;for(const[v,g]of[[-.14,8754077],[.14,10253919]]){const f=[];for(let w=0;w<=60;w++){const x=w/60*Math.PI*1.85,S=.07+w/60*.04;f.push([1.2+Math.cos(x)*S,.47+Math.sin(x)*S,v])}Ni(a,f,.025,g);const h=new Ce.Group;h.position.set(1.2,.47,v),a.add(h),ht(h,0,0,0,.027,.075,12699337);for(let w=0;w<12;w++){const x=Xa(h,0,0,0,.065,.018,.012,g),S=w*Math.PI/6;x.position.set(Math.cos(S)*.043,Math.sin(S)*.043,0),x.rotation.z=S+.55}He.rotors.push(h)}Di(a,[1.2,.47,-.18],[1.2,.47,.18],.012,10858424),xr(r,[[0,.98,0],[.3,.84,-.12],[.95,.65,-.19],[1.2,.47,-.18]],6606826,"air"),xr(r,[[1.27,.49,-.14],[1.12,.37,-.4],[.62,.32,-.52],[.48,.48,-.3],[.65,.7,0],[.94,.7,0]],6606826,"air");const n=je(r,new Ce.Sphere(.13,32,20),3490899,.3,.45);n.scale.set(2,.65,1),n.position.set(.78,.68,0);for(const v of[-1,1])for(let g=0;g<3;g++)Ni(r,[[.6+g*.18,.68,v*.04],[.6+g*.18,.65,v*.18],[.6+g*.18,.51,v*.24]],.029,10003886);const s=ja(e,"coolant","cooling");xr(s,[[.7,.38,.26],[.9,.42,.42],[.62,.32,.56],[.35,.25,.48],[.45,.28,.25],[.7,.38,.26]],6149809,"coolant");for(const v of[-1,1])xr(s,[[-.42,.48,v*.5],[0,.4,v*.52],[.65,.43,v*.55],[1.1,.48,v*.4]],8636892,"coolingair");const o=ja(e,"electric_path","electrical");xr(o,[[.02,.18,0],[.28,.2,.2],[.46,.25,.29],[.62,.25,.13]],16753225,"electric");const l=e.items.exhaust[0];for(const v of[-1,1])for(let g=0;g<3;g++)Ni(l,[[.59+g*.18,.48,v*.26],[.67+g*.16,.35,v*.37],[1.12,.36,v*.26],[1.2,.47,.14]],.019,10057828);xr(l,[[1.2,.47,.14],[1.43,.47,.09],[1.85,.43,.02],[2.15,.43,0]],16095601,"exhaust");const u=ja(e,"rocker","suspension");for(const v of[-1.55,1.55])for(const g of[-1,1]){const f=[];for(let w=0;w<=150;w++){let x=w/150;f.push([v-.13+x*.25,.49+.035*Math.cos(x*16*Math.PI),g*.17+.035*Math.sin(x*16*Math.PI)])}Ni(u,f,.0065,13876345),Di(u,[v-.16,.49,g*.17],[v+.15,.49,g*.17],.014,10332853),je(u,new Ce.Sphere(.025,16,12),10464439).position.set(v,.51,g*.26);for(const w of[[v-.1,.46,g*.3],[v+.08,.48,g*.31]])Di(u,[v,.51,g*.26],w,.012,12568524);Di(u,[v,.51,g*.26],[v<0?-1.7:1.7,.36,g*.7],.009,11385286)}const c=e.wheel,d=new Ce.Group;d.userData={id:"steering",layer:"wheel"},c.add(d),e.items.steering.push(d),e.groups.wheel.push(d);for(const v of[-1,1]){for(let f=0;f<11;f++){const h=je(d,new Ce.Torus(.055,.0025,6,24,Math.PI*1.2),1186082,.85,.1);h.position.set(v*.43,-.17+f*.025,0),h.rotation.y=Math.PI/2}for(const f of[-.16,.18])ht(d,v*.26,f,.064,.013,.008,12173768),Xa(d,v*.26,f,.07,.015,.003,.002,2107953);const g=ht(d,v*.32,.08,.071,.03,.045,5334388);for(let f=0;f<16;f++){const h=f*Math.PI/8;ht(d,v*.32+.03*Math.cos(h),.08+.03*Math.sin(h),.097,.002,.008,13687263)}}for(const[v,g]of[[-.19,-.105],[0,-.105],[.19,-.105]]){for(let f=0;f<12;f++){let h=f*Math.PI/6;rx(d,String(f+1),v+Math.sin(h)*.066,g+Math.cos(h)*.066,.085,.019,.013,"#b0c6d5")}ht(d,v,g,.061,.045,.018,2504515);for(let f=0;f<28;f++){let h=f*Math.PI/14;ht(d,v+Math.sin(h)*.044,g+Math.cos(h)*.044,.077,.002,.009,7307663)}}const p=e.items.screen.find(v=>v.parent===c);if(p){p.clear(),Xa(p,0,.075,.035,.36,.18,.032,659994);const v=document.createElement("canvas");v.width=1024,v.height=512;const g=v.getContext("2d");g.fillStyle="#06111a",g.fillRect(0,0,1024,512),g.strokeStyle="#496875",g.lineWidth=3,g.strokeRect(7,7,1010,498),g.fillStyle="#a0d7dd",g.font="28px Arial",g.fillText("D\xC9MONSTRATION \xB7 T\xC9L\xC9M\xC9TRIE",36,47),g.fillStyle="#f3fbff",g.font="bold 230px Arial",g.fillText("6",430,300),g.font="bold 61px Arial",g.fillText("268",45,163),g.fillText("11 200",685,163),g.fillStyle="#79afbf",g.font="28px Arial",g.fillText("km/h",45,208),g.fillText("tr/min",728,208),g.fillText("\xC9NERGIE",40,362),g.fillText("BAL. FREIN",687,362),g.fillStyle="#74e0b3",g.fillRect(40,390,470,22),g.fillStyle="#fff",g.font="bold 50px Arial",g.fillText("58 %",710,430);const f=new Ce.Texture(v);f.colorSpace=bt;const h=new Ce.Mesh(new Ce.Plane(.346,.172),new Ce.Basic({map:f}));h.position.set(0,.075,.055),p.add(h);for(let w=0;w<15;w++)ht(p,-.16+w*.023,.183,.048,.006,.009,w<5?5098116:w<10?15517014:15624571)}const m=e.items.quick.find(v=>v.parent===c);if(m)for(let v=0;v<12;v++){const g=v*Math.PI/6;ht(m,.065*Math.cos(g),.065*Math.sin(g),-.16,.004,.012,12823147)}nx(),Ga(),Dc()}function nx(){const e=document.createElement("section");e.className="v25-mechanics",e.innerHTML=`<div class="v25-control-grid"><div><h4>Les quatre roues</h4><p>D\xE9cochez une roue pour d\xE9couvrir son frein et son porte-moyeu.</p><div class="v25-wheel-grid">${He.wheels.map((t,i)=>`<label><input type="checkbox" checked data-v25-wheel="${i}">${t.name}</label>`).join("")}</div><p class="lab-small">Arri\xE8re plus large \xB7 jantes de 18 pouces \xE0 l\u2019avant comme \xE0 l\u2019arri\xE8re.</p></div><div><h4>A\xE9rodynamique active</h4><div class="v25-buttons"><button data-v25-aero="0" aria-pressed="true">Virage \xB7 appui</button><button data-v25-aero="1" aria-pressed="false">Ligne droite \xB7 tra\xEEn\xE9e r\xE9duite</button><button id="v25Overtake" aria-pressed="false">Overtake \xE9lectrique</button></div><p id="v25AeroText">Les volets avant et arri\xE8re adoptent une position favorisant l\u2019appui.</p></div></div><h4>Suivre les flux dans la voiture</h4><div class="v25-buttons">${[["none","Masquer les flux"],["air","Air comprim\xE9"],["fuel","Carburant"],["coolant","Liquide de refroidissement"],["coolingair","Air des radiateurs"],["electric","Propulsion \xE9lectrique"],["recovery","R\xE9cup\xE9ration"],["exhaust","\xC9chappement"]].map(([t,i])=>`<button data-v25-flow="${t}" aria-pressed="${t==="none"}">${i}</button>`).join("")}</div><p id="v25FlowText">Choisissez un circuit pour r\xE9v\xE9ler la m\xE9canique et suivre le sens de circulation. Les points lumineux rendent le trajet visible ; ils ne repr\xE9sentent pas une vitesse mesur\xE9e.</p><div class="v25-buttons"><button id="v25PowerView">Voir tout le groupe propulseur</button><button id="v25SuspView">D\xE9tailler les suspensions</button><button id="v25WheelBack">Dos du volant</button><button id="v25WheelFront">Face du volant</button></div><p class="lab-small">Maquette p\xE9dagogique originale. Implantations, angles de volets et conduites illustratifs ; les solutions r\xE9elles diff\xE8rent entre motoristes et \xE9curies.</p>`,ft(".v24-workshops").after(e),e.querySelectorAll("[data-v25-wheel]").forEach(t=>t.onchange=()=>{const i=He.wheels[+t.dataset.v25Wheel];t.checked?(i.g.visible=!0,Ii()):ea([i.g])}),e.querySelectorAll("[data-v25-aero]").forEach(t=>t.onclick=()=>{He.target=+t.dataset.v25Aero,e.querySelectorAll("[data-v25-aero]").forEach(i=>i.setAttribute("aria-pressed",i===t)),e.querySelector("#v25AeroText").textContent=He.target?"Les deux ailerons r\xE9duisent leur incidence en mode ligne droite. L\u2019Overtake concerne s\xE9par\xE9ment l\u2019\xE9nergie \xE9lectrique.":"En virage, les volets reviennent vers une position produisant davantage d\u2019appui.",Kn()}),e.querySelector("#v25Overtake").onclick=()=>{He.overtake=!He.overtake,e.querySelector("#v25Overtake").setAttribute("aria-pressed",He.overtake),Ic(He.overtake?"electric":"none"),e.querySelector("#v25AeroText").textContent=He.overtake?"Overtake : possibilit\xE9 r\xE9glement\xE9e d\u2019utiliser davantage d\u2019\xE9nergie \xE9lectrique pour attaquer. Son \xE9ligibilit\xE9 est conditionnelle ; ce bouton illustre le principe, il ne commande pas les volets.":"Overtake \xE9lectrique d\xE9sactiv\xE9 dans la d\xE9monstration."},e.querySelectorAll("[data-v25-flow]").forEach(t=>t.onclick=()=>Ic(t.dataset.v25Flow)),e.querySelector("#v25PowerView").onclick=()=>{ll(),qt("engine"),yt.target.set(.6,.4,0),Ct.position.set(2.7,2.3,2.5),yt.update(),Nt()},e.querySelector("#v25SuspView").onclick=()=>{ll(),qt("rocker"),rl("rocker")},e.querySelector("#v25WheelBack").onclick=()=>{_i("wheel"),Ct.position.set(0,.08,-1.65),yt.update(),qt("shift"),Nt()},e.querySelector("#v25WheelFront").onclick=()=>{_i("wheel"),qt("steering")},new IntersectionObserver(t=>{He.visible=t[0].isIntersecting,Kn()}).observe(ft("#labStage")),document.addEventListener("visibilitychange",Kn)}function ll(){$t==="wheel"&&_i("perspective");for(const e of["mechanical","cooling","electrical","internals","suspension","brakes"])Ne.groups[e]?.forEach(t=>t.visible=!0);Ne.groups.body.forEach(e=>e.visible=!1),Ii()}function Ic(e){He.flow=e;const t={none:["","Flux masqu\xE9s."],air:["chargeair","Bleu : prise d\u2019air \u2192 compresseur \u2192 \xE9changeur \u2192 pl\xE9num \u2192 cylindres. L\u2019air comprim\xE9 est refroidi avant d\u2019entrer dans le moteur."],fuel:["fuel_feed","Or : r\xE9servoir \u2192 pompes \u2192 rampe \u2192 injecteurs. Le carburant rejoint l\u2019air dans la chambre de combustion."],coolant:["coolant","Vert : boucle de liquide entre moteur et radiateur. La chaleur traverse le m\xE9tal du radiateur, sans m\xE9lange avec l\u2019air ext\xE9rieur."],coolingair:["coolant","Bleu clair : air ext\xE9rieur \u2192 radiateurs \u2192 sortie chaude. Ce flux est distinct de l\u2019air admis dans les cylindres."],electric:["electric_path","Orange : batterie \u2192 \xE9lectronique de puissance \u2192 MGU-K \u2192 entra\xEEnement m\xE9canique. L\u2019\xE9nergie stock\xE9e diminue en propulsion."],recovery:["electric_path","Orange, sens inverse : \xE9nergie m\xE9canique \u2192 MGU-K g\xE9n\xE9rateur \u2192 \xE9lectronique \u2192 batterie. La r\xE9cup\xE9ration n\u2019est ni gratuite ni illimit\xE9e."],exhaust:["exhaust","Cuivre : collecteurs \u2192 turbine \u2192 sortie d\u2019\xE9chappement. La turbine entra\xEEne le compresseur par son arbre."]};e!=="none"&&(ll(),qt(t[e][0])),ft("#v25FlowText").textContent=t[e][1],vi.querySelectorAll("[data-v25-flow]").forEach(i=>i.setAttribute("aria-pressed",i.dataset.v25Flow===e)),Kn(),Nt()}function Dc(){vi.querySelectorAll("[data-v25-wheel]").forEach(e=>e.checked=He.wheels[+e.dataset.v25Wheel]?.g.visible??!1)}const sx=Ii;Ii=function(){sx(),Dc()};function Kn(){cancelAnimationFrame(He.raf),He.last=0,He.visible&&!document.hidden&&(He.raf=requestAnimationFrame(Nc))}function Nc(e){if(He.raf=0,!He.visible||document.hidden)return;const t=Math.min(250,He.last?e-He.last:16);He.last=e,He.aero+=(He.target-He.aero)*(1-Math.exp(-t/170));for(const{pivot:i,id:r}of He.flaps)i.rotation.z=-He.aero*(r==="front"?.24:.43);for(const i of He.particles)if(i.dot.visible=i.type===He.flow||i.type==="electric"&&He.flow==="recovery",i.dot.visible){let r=(e*15e-5+i.offset)%1;He.flow==="recovery"&&(r=1-r),i.dot.position.copy(i.curve.getPointAt(r))}if(He.flow==="air"||He.flow==="exhaust")for(const i of He.rotors)i.rotation.z+=t*.004;Nt(),(He.flow!=="none"||Math.abs(He.aero-He.target)>.001)&&(He.raf=requestAnimationFrame(Nc))}const ox=vr;vr=function(){ox();const e=Ei%720,t=Math.max(0,Math.sin(Math.min(1,Math.max(0,(e-350)/180))*Math.PI));ot("#v24Spark").setAttribute("opacity",Math.max(0,1-Math.abs(e-360)/12)),ot("#v24Spray").setAttribute("opacity",e>255&&e<340?Math.sin((e-255)/85*Math.PI):0),ot("#v24Chamber").setAttribute("opacity",.23+t*.48);const i=12*Math.sin(e%180/180*Math.PI)**2;ot("#v24IntakeValve").setAttribute("transform",`translate(0 ${e<180?i:0})`),ot("#v24ExhaustValve").setAttribute("transform",`translate(0 ${e>=540?i:0})`)};const Oi=document.createElement("section");Oi.className="v25-engine",Oi.id="v25Engine",Oi.innerHTML=`<header><span class="lab-eyebrow">LABORATOIRE M\xC9CANIQUE / MOTEURS EN MOUVEMENT</span><h3>\xC0 l\u2019int\xE9rieur du moteur.</h3><p>Tournez la m\xE9canique, ouvrez les cylindres et suivez le piston. Comparez ensuite le cycle de fonctionnement et le nombre de cylindres : ce sont deux choses diff\xE9rentes.</p></header><div class="v25-engine-tabs" role="group" aria-label="Choisir le moteur">${[["four","4 temps \xB7 un cylindre"],["two","2 temps \xB7 comparaison"],["three","Et les \xAB 3 temps \xBB ?"],["v6","V6 \xB7 F1 2026"],["v8","V8"],["v10","V10"],["v12","V12"]].map(([e,t])=>`<button data-v25-engine="${e}" aria-pressed="${e==="four"}">${t}</button>`).join("")}</div><div class="v25-engine-layout"><div><div id="v25EngineStage" class="v25-engine-stage"><span class="v25-engine-caption">COUPE M\xC9CANIQUE \xB7 GLISSER POUR TOURNER \xB7 PINCER POUR ZOOMER</span><div class="v25-engine-loading">Chargement de l\u2019atelier\u2026</div></div><div class="v25-engine-controls"><button id="v25EnginePlay" aria-pressed="false">\u25B6 Animer</button><button id="v25EngineStep">Phase suivante</button><button id="v25EngineReset">Recentrer</button><label>Vitesse <select id="v25EngineSpeed"><option value=".5">\xD7 0,5</option><option value="1" selected>\xD7 1</option><option value="2">\xD7 2</option></select></label><label><input id="v25Sleeves" type="checkbox" checked>Cylindres ouverts</label><label class="v25-engine-scrub">Vilebrequin <input id="v25EngineAngle" type="range" min="0" max="719" value="0"><output id="v25EngineAngleLabel">0\xB0 / 720\xB0</output></label></div></div><aside class="v25-engine-explanation"><span id="v25EngineTag" class="lab-eyebrow"></span><h4 id="v25EngineTitle"></h4><p id="v25EngineIntro"></p><div id="v25EnginePhase" aria-live="off"></div><div class="v25-buttons" id="v25EngineParts">${[["piston","Piston & segments"],["rod","Bielle"],["crank","Vilebrequin"],["valve","Soupapes"],["spark","Bougie & injection"]].map(([e,t])=>`<button data-v25-component="${e}">${t}</button>`).join("")}</div><div id="v25EnginePartInfo"></div><details><summary>Aller plus loin</summary><p id="v25EngineExpert"></p></details><a id="v25EngineSource" target="_blank" rel="noopener"></a></aside></div><p class="lab-small">Mod\xE8les p\xE9dagogiques originaux, au ralenti. Les coupes, d\xE9calages de manetons et r\xE9partitions de phases rendent les mouvements lisibles : ce ne sont pas des plans de fabrication ni les ordres d\u2019allumage des moteurs historiques cit\xE9s. La forme des chambres, la distribution et les accessoires varient selon le moteur.</p></section>`,kt.before(Oi);const Je=e=>Oi.querySelector(e),mt={key:"four",angle:0,playing:!1,visible:!1,last:0,raf:0,renderer:null,scene:null,camera:null,controls:null,root:null,cylinders:[],shells:[],streams:[],crank:null,initialized:!1},na={four:{n:1,angle:0,cycle:720,title:"Quatre temps, deux tours.",tag:"CYCLE / 1 CYLINDRE OBSERV\xC9",intro:"Le piston descend pour admettre l\u2019air, remonte pour le comprimer, descend sous la pouss\xE9e des gaz puis remonte pour les \xE9vacuer. La combustion arrive apr\xE8s la compression.",expert:"Le vilebrequin fait deux tours par cycle. Sur un moteur \xE0 soupapes classique, l\u2019arbre \xE0 cames tourne deux fois moins vite. Le cycle id\xE9al est montr\xE9 ici ; en r\xE9alit\xE9, ouvertures des soupapes, injection et allumage ne co\xEFncident pas exactement avec les points morts. Le r\xE8glement F1 2026 impose quatre temps et quatre soupapes par cylindre.",url:"https://www.grc.nasa.gov/www/k-12/airplane/engopt.html",source:"NASA \xB7 cycle du moteur \xE0 quatre temps"},two:{n:1,angle:0,cycle:360,title:"Deux temps, un seul tour.",tag:"COMPARAISON / HORS MOTEUR F1 ACTUEL",intro:"Le piston fait un aller-retour par cycle. Pr\xE8s du bas, les lumi\xE8res de transfert et d\u2019\xE9chappement s\u2019ouvrent : les gaz frais entrent tandis que les gaz br\xFBl\xE9s sortent. En remontant, le piston referme les passages et comprime le m\xE9lange.",expert:"Exemple d\u2019un deux-temps \xE0 balayage par le carter : le m\xE9lange est pr\xE9comprim\xE9 sous le piston avant de passer par les transferts. Les \xE9changes se chevauchent ; une partie du m\xE9lange peut s\u2019\xE9chapper. Il n\u2019y a pas les quatre soupapes du quatre-temps repr\xE9sent\xE9 \xE0 c\xF4t\xE9. D\u2019autres architectures deux-temps existent. Ce mod\xE8le comparatif n\u2019est pas pr\xE9sent\xE9 comme un moteur de F1.",url:"https://global.yamaha-motor.com/business/outboards/products/2st/",source:"Yamaha \xB7 exemples de moteurs deux-temps"},three:{n:0,angle:0,cycle:720,title:"\xAB Trois temps \xBB ou trois cylindres ?",tag:"DEUX NOTIONS \xC0 NE PAS CONFONDRE",intro:"Le nombre de temps d\xE9crit le cycle. Le nombre de cylindres d\xE9crit combien de pistons travaillent dans le moteur. Un moteur \xE0 trois cylindres peut parfaitement fonctionner \xE0 quatre temps.",expert:"Il n\u2019existe pas de cat\xE9gorie standard \xAB moteur F1 trois-temps \xBB \xE0 ajouter entre les deux et quatre temps. Aucun exemple historique v\xE9rifi\xE9 n\u2019est pr\xE9sent\xE9 ici. Les F1 actuelles utilisent six cylindres en V et un cycle \xE0 quatre temps.",url:Wt.rules[1],source:"FIA \xB7 r\xE8glement technique 2026, C5.1"},v6:{n:6,angle:90,cycle:720,title:"V6 : deux rang\xE9es de trois.",tag:"F1 2026 / 1,6 L TURBO HYBRIDE",intro:"Six pistons entra\xEEnent un m\xEAme vilebrequin. En 2026, les deux rang\xE9es forment un V \xE0 90\xB0. Le turbo comprime l\u2019air et le MGU-K apporte ou r\xE9cup\xE8re de l\u2019\xE9nergie \xE9lectrique.",expert:"Le nombre de cylindres ne dit pas le nombre de temps : chaque cylindre r\xE9alise ici un cycle de quatre temps. Le V6 Honda RA168E de 1988 \xE9tait aussi un V6 turbo, mais avec un V \xE0 80\xB0 et sans le syst\xE8me hybride actuel. Le V6 actuel n\u2019est donc pas une simple copie de ce moteur historique.",url:Wt.honda[1],source:"Honda \xB7 groupe propulseur 2026"},v8:{n:8,angle:90,cycle:720,title:"V8 : deux rang\xE9es de quatre.",tag:"HISTOIRE / EXEMPLE : HONDA RA106, 2006",intro:"Huit cylindres peuvent r\xE9partir davantage de temps moteurs sur deux tours. La Honda RA106 de 2006 utilisait un V8 atmosph\xE9rique de 2,4 litres : l\u2019air y entrait sans turbo.",expert:"Le nombre de cylindres influence l\u2019encombrement, les frottements, la masse et les vibrations. Davantage de cylindres ne garantit pas \xE0 lui seul davantage de puissance. Les contrepoids et les d\xE9calages de manetons d\xE9pendent du vilebrequin choisi ; cette animation comparative ne reproduit pas un calage Honda.",url:"https://global.honda/jp/F1/machine/2006_HondaRA106/",source:"Honda \xB7 fiche historique RA106 (2006)"},v10:{n:10,angle:72,cycle:720,title:"V10 : deux rang\xE9es de cinq.",tag:"HISTOIRE / EXEMPLE : McLAREN HONDA MP4/5, 1989",intro:"Dix cylindres, soit cinq dans chaque rang\xE9e. La MP4/5 de 1989 utilisait un V10 atmosph\xE9rique Honda RA109E de 3,5 litres, \xE0 une \xE9poque o\xF9 le turbo avait \xE9t\xE9 interdit.",expert:"Les V10 ont connu diff\xE9rents angles entre rang\xE9es. Le V \xE0 72\xB0 de cette comparaison rend les dix cylindres lisibles ; ce n\u2019est pas une reconstruction du RA109E. La sonorit\xE9 d\xE9pend notamment du r\xE9gime, des impulsions d\u2019\xE9chappement et de la g\xE9om\xE9trie des collecteurs.",url:"https://global.honda/jp/F1/machine/1989_McLarenHondaMP45/",source:"Honda \xB7 fiche historique MP4/5 (1989)"},v12:{n:12,angle:60,cycle:720,title:"V12 : deux rang\xE9es de six.",tag:"HISTOIRE / EXEMPLE : HONDA RA271, 1964",intro:"Douze cylindres travaillent sur le m\xEAme vilebrequin. La Honda RA271 de 1964 poss\xE9dait un V12 de 1,5 litre \xE0 60\xB0, install\xE9 transversalement dans la voiture.",expert:"Un V12 peut r\xE9partir finement les impulsions motrices, mais poss\xE8de aussi davantage de pi\xE8ces mobiles qu\u2019un V6. Masse, longueur, refroidissement et frottements font partie du compromis. La puissance ne se d\xE9duit jamais seulement du nombre de cylindres.",url:"https://global.honda/jp/F1/machine/1964_HondaRA271/",source:"Honda \xB7 fiche historique RA271 (1964)"}},lx={piston:["Piston, axe et segments","La pression des gaz pousse la calotte du piston. Les segments noirs autour de sa partie sup\xE9rieure limitent les fuites de gaz et participent \xE0 la gestion de l\u2019huile. L\u2019axe traverse le piston et l\u2019articule \xE0 la bielle."],rod:["Bielle et coussinets","Cette pi\xE8ce relie l\u2019axe du piston au maneton du vilebrequin. Elle oscille en transmettant l\u2019effort. Le film d\u2019huile dans les paliers limite les frottements ; le manque de lubrification peut d\xE9truire le moteur."],crank:["Vilebrequin et manetons","L\u2019axe principal tourne dans les paliers. Les manetons d\xE9cal\xE9s d\xE9crivent des cercles : la bielle transforme ainsi les allers-retours du piston en rotation. Les contrepoids contribuent \xE0 ma\xEEtriser les efforts et vibrations."],valve:["Soupapes et distribution","L\u2019admission laisse entrer l\u2019air et l\u2019\xE9chappement laisse sortir les gaz br\xFBl\xE9s. Le mod\xE8le quatre-temps montre deux soupapes d\u2019admission et deux d\u2019\xE9chappement. Elles restent ferm\xE9es pendant compression et d\xE9tente dans ce cycle id\xE9al."],spark:["Injecteur et bougie","L\u2019injecteur dose le carburant ; la bougie produit l\u2019\xE9tincelle. La combustion se propage dans le m\xE9lange comprim\xE9 et augmente la pression. Ce n\u2019est pas une d\xE9tonation souhait\xE9e : le cliquetis est au contraire dangereux pour le moteur."]};function Oc(e){const t=lx[e];Je("#v25EnginePartInfo").innerHTML=`<h5>${t[0]}</h5><p>${mt.key==="two"&&e==="spark"?"Dans ce deux-temps, le m\xE9lange air-carburant passe par le carter et les transferts. Une bougie amorce sa combustion dans la chambre pr\xE8s du point mort haut.":mt.key==="two"&&e==="valve"?"Sur le deux-temps illustr\xE9, le piston ouvre et ferme des lumi\xE8res dans la paroi. Il n\u2019y a pas de soupapes dans la culasse.":t[1]}</p>`,Je("#v25EngineParts").querySelectorAll("button").forEach(i=>i.setAttribute("aria-pressed",i.dataset.v25Component===e)),mt.root&&(mt.root.traverse(i=>{i.material?.emissive&&i.material.emissive.setHex(i.userData.part===e?1592424:0)}),sa())}function ux(){const e=mt;if(!e.initialized){e.initialized=!0;try{const t=e.renderer=new vc({antialias:!0});t.setPixelRatio(Math.min(devicePixelRatio,1.6)),t.outputColorSpace=bt,t.toneMapping=ds,t.toneMappingExposure=1.05,t.setClearColor(858405);const i=Je("#v25EngineStage");i.prepend(t.domElement),t.domElement.setAttribute("aria-label","Moteur 3D anim\xE9 : rotation, zoom et pi\xE8ces s\xE9lectionnables. Commandes textuelles sous la vue."),e.scene=new wo,e.camera=new Ht(38,1,.01,60),e.controls=new yc(e.camera,t.domElement),e.controls.minDistance=.8,e.controls.maxDistance=15,e.controls.addEventListener("change",sa);const r=new kn(t),a=new bc;e.scene.environment=r.fromScene(a,.05).texture,a.dispose(),r.dispose(),e.scene.environmentIntensity=.8,e.scene.add(new Uu(13232895,2568263,2));const n=new Ho(16777215,3);n.position.set(2,4,3),e.scene.add(n);const s=new Ho(9025023,2);s.position.set(-4,2,-3),e.scene.add(s),new ResizeObserver(cl).observe(i);let o;const l=new zu,u=new se;t.domElement.addEventListener("pointerdown",c=>o=[c.clientX,c.clientY]),t.domElement.addEventListener("pointerup",c=>{if(!o||Math.hypot(c.clientX-o[0],c.clientY-o[1])>6||!e.root)return;const d=t.domElement.getBoundingClientRect();u.set((c.clientX-d.left)/d.width*2-1,-(c.clientY-d.top)/d.height*2+1),l.setFromCamera(u,e.camera);const p=l.intersectObject(e.root,!0).find(m=>m.object.userData.part);p&&Oc(p.object.userData.part)}),i.querySelector(".v25-engine-loading").remove(),Fc(),cl()}catch(t){Je(".v25-engine-loading").textContent="Affichage 3D indisponible sur ce navigateur. Les explications et la coupe anim\xE9e ci-dessous restent accessibles.",console.error(t)}}}function Fc(){const e=mt,t=na[e.key];if(!e.renderer)return;e.root&&(e.scene.remove(e.root),e.root.traverse(u=>{u.geometry?.dispose(),u.material&&u.material.dispose()})),e.root=new Ce.Group,e.scene.add(e.root),e.cylinders=[],e.shells=[],e.streams=[];const i=t.n,r=i>1?i/2:1,a=.49,n=(r-1)*a+.5;if(!i){ul(),sa();return}const s=(u,c)=>(u.userData.part=c,u),o=e.crank=new Ce.Group;e.root.add(o),s(ht(o,0,0,0,.072,n+.35,11450303),"crank");for(let u=0;u<r;u++){const c=(u-(r-1)/2)*a,d=u*360/r,p=new Ce.Group;p.rotation.z=-d*Math.PI/180,o.add(p);for(const m of[c-.085,c+.085]){s(ht(p,0,0,m,.125,.055,6714756),"crank");const v=Xa(p,0,.1,m,.15,.26,.045,8819614);s(v,"crank"),s(ht(p,0,-.095,m,.14,.07,5859190),"crank")}s(ht(p,0,.24,c,.068,.18,12765904),"crank");for(const m of i===1?[0]:[-1,1]){let y=function(D,V,k){const q=Ni(g,D,.024,V);for(let H=0;H<4;H++){const ee=new Ce.Mesh(new Ce.Sphere(.018,10,8),new Ce.Basic({color:V}));g.add(ee),e.streams.push({dot:ee,curve:q.curve,type:k,index:e.cylinders.length,offset:H/4})}};var l=y;const v=m*t.angle/2*Math.PI/180,g=new Ce.Group;g.rotation.z=v,g.position.z=c+m*.045,e.root.add(g);const f=s(je(g,new Ce.Cylinder(.193,.193,.65,64,1,!0,0,Math.PI*1.25),6978700,.27,.7),"piston");f.position.y=.85,f.rotation.y=Math.PI*.38,e.shells.push(f);const h=je(g,new Ce.Cylinder(.205,.205,.67,48,1,!0,0,Math.PI*1.25),3425874,.5,.5);h.position.y=.85,h.rotation.y=Math.PI*.38,e.shells.push(h);for(const D of[.54,1.135]){const V=s(je(g,new Ce.Torus(.195,.014,10,48,Math.PI*1.25),11910853),"piston");V.rotation.x=Math.PI/2,V.rotation.z=Math.PI*.38,V.position.y=D}const w=new Ce.Group;g.add(w),s(je(w,new Ce.Cylinder(.178,.172,.18,64),12568526,.27,.85),"piston").position.y=.065;for(const D of[.09,.125,.145]){const V=s(je(w,new Ce.Torus(.176,.003,8,64),3161931),"piston");V.rotation.x=Math.PI/2,V.position.y=D}s(ht(w,0,0,0,.036,.36,9017767),"piston");const x=new Ce.Shape;x.moveTo(-.065,-.5),x.lineTo(.065,-.5),x.lineTo(.037,-.33),x.lineTo(.021,.32),x.lineTo(.044,.5),x.lineTo(-.044,.5),x.lineTo(-.021,.32),x.lineTo(-.037,-.33),x.closePath();const S=new Ce.Extrude(x,{depth:.037,bevelEnabled:!0,bevelSize:.007,bevelThickness:.005,bevelSegments:3,steps:1});S.translate(0,0,-.0185);const I=s(je(g,S,11911372,.24,.85),"rod"),E=Xa(I,0,0,.025,.011,.63,.01,6913679);E.userData.part="rod";const T=s(je(g,ia([[-.04,.032],[-.04,.053],[.04,.053],[.04,.032],[-.04,.032]],48),11188162),"rod"),C=s(je(g,ia([[-.055,.065],[-.055,.097],[.055,.097],[.055,.065],[-.055,.065]],64),11188162),"rod");for(const D of[-.078,.078]){const V=je(C,new Ce.Cylinder(.014,.014,.056,6),6649991);V.position.set(D,-.024,.012),V.userData.part="rod"}const b=[],R=je(g,new Ce.Cylinder(.169,.169,1,40),6803434,.5,0);R.material.transparent=!0,R.material.opacity=.18,R.material.depthWrite=!1;const N=s(je(g,new Ce.Sphere(.018,16,12),16771773,.4,0),"spark");N.position.y=1.175;const z=[];if(e.key!=="two"){y([[-.48,1.185,0],[-.3,1.195,0],[-.16,1.165,0],[-.09,1.115,0]],6343652,"intake"),y([[.09,1.115,0],[.2,1.185,0],[.36,1.185,0],[.51,1.145,0]],13080695,"exhaust");for(const k of[-.09,.09]){const q=new Ce.Group;q.position.set(k,1.465,0),g.add(q);const H=je(q,new Ce.Sphere(.044,24,16),10202556,.2,.9);H.scale.set(.75,1.5,.6),H.position.y=-.016,H.userData.part="valve",b.push({g:q,intake:k<0})}for(const k of[-.087,.087])for(const q of[-.07,.07]){const H=new Ce.Group;g.add(H),H.position.set(k,1.155,q),s(je(H,new Ce.Cylinder(.045,.048,.015,24),k<0?8960462:12163972),"valve"),s(je(H,new Ce.Cylinder(.009,.009,.2,12),13095127),"valve").position.y=.1,z.push({g:H,intake:k<0})}const D=je(g,new Ce.Box(.43,.085,.4),8688799,.35,.75);D.position.y=1.355;for(const k of[-.17,.17])for(const q of[-.15,.15])je(g,new Ce.Cylinder(.017,.017,.024,6),12897232).position.set(k,1.405,q);s(je(g,new Ce.Cylinder(.014,.02,.13,12),14802900),"spark").position.set(.02,1.225,.015)}else{for(let k=0;k<5;k++){const q=je(g,new Ce.Cylinder(.224,.224,.016,48),9084332);q.position.y=1.22+k*.024}const D=s(je(g,new Ce.Cylinder(.017,.021,.12,12),14670533),"spark");D.position.y=1.35,y([[-.12,-.09,0],[-.32,.12,0],[-.32,.46,0],[-.18,.72,0],[0,.76,0]],6410211,"transfer"),y([[.1,.79,0],[.28,.66,0],[.48,.6,0]],13213312,"out"),Ni(g,[[-.18,.72,0],[-.32,.46,0],[-.32,.12,0],[-.12,-.09,0]],.048,6138821).mesh.userData.part="valve",Ni(g,[[.18,.79,0],[.31,.66,0],[.48,.6,0]],.052,10715237).mesh.userData.part="valve",Ni(g,[[-.48,-.1,0],[-.3,-.12,0],[-.12,-.09,0]],.038,6138821);const V=je(g,new Ce.Sphere(.33,40,24,0,Math.PI*1.3),5992833,.4,.6);V.position.y=-.02,V.material.transparent=!0,V.material.opacity=.2,V.material.depthWrite=!1}if(e.key!=="two"){const D=s(je(g,new Ce.Cylinder(.012,.021,.1,12),12561017),"spark");D.position.set(.1,1.215,.09),D.rotation.z=.25}e.cylinders.push({bank:g,beta:v,shift:d,piston:w,rod:I,small:T,big:C,gas:R,spark:N,valves:z,cams:b})}}if(e.key!=="two")for(const u of i===1?[0]:[-1,1]){const c=new Ce.Group;c.rotation.z=u*t.angle/2*Math.PI/180,e.root.add(c);for(const d of[-.09,.09]){s(ht(c,d,1.475,0,.023,n,11319490),"valve");for(let p=0;p<r;p++){const m=(p-(r-1)/2)*a;s(ht(c,d,1.475,m,.04,.055,9281711),"valve")}}}for(const u of[-n/2-.09,n/2+.09]){const c=s(je(e.root,new Ce.Torus(.087,.025,12,40),12043469),"crank");c.position.z=u}Bc(),ul(),Ya()}function ul(){const e=mt;if(!e.camera)return;const t=na[e.key].n,i=t>=10?1.25:t>=6?1.1:1;e.controls.target.set(0,.7,0),e.camera.position.set(2.25*i,1.475*i,3.7*i),e.controls.update(),cl()}function Bc(){const e=Je("#v25Sleeves").checked;for(const t of mt.shells)t.material.transparent=e,t.material.opacity=e?.16:1,t.material.depthWrite=!e;sa()}function cl(){const e=mt;if(!e.renderer)return;const t=Je("#v25EngineStage").getBoundingClientRect();t.width<1||(e.renderer.setSize(t.width,t.height,!1),e.camera.aspect=t.width/t.height,e.camera.updateProjectionMatrix(),sa())}function sa(){const e=mt;e.renderer&&e.scene&&e.camera&&e.renderer.render(e.scene,e.camera)}function Ya(){const e=mt,t=na[e.key],i=e.angle;e.crank&&(e.crank.rotation.z=-i*Math.PI/180);for(const s of e.cylinders){const o=(i+s.shift+s.beta*180/Math.PI+720)%720,l=o*Math.PI/180,u=.24*Math.sin(l),c=.24*Math.cos(l),d=c+Math.sqrt(.72**2-u**2);s.piston.position.y=d,s.small.position.set(0,d,0),s.big.position.set(u,c,0);const p=new Ce.Vector(-u,d-c,0);s.rod.position.set(u/2,(d+c)/2,0),s.rod.scale.y=p.length(),s.rod.quaternion.setFromUnitVectors(new Ce.Vector(0,1,0),p.normalize()),s.degree=o;for(const w of s.cams)w.g.rotation.z=-(o-(w.intake?90:630))*Math.PI/360;const m=e.key!=="two",v=m?Math.floor(o/180):o%360<145?2:o%360<220?0:1,g=Math.max(.012,1.15-(d+.155));s.gas.scale.y=g,s.gas.position.y=1.15-g/2;const f=[6474725,15253094,15895368,10203072][v];s.gas.material.color.setHex(f),s.gas.material.opacity=v===2?.2+.38*Math.sin((m?o-360:o%360)/180*Math.PI):.18;const h=m?Math.max(0,1-Math.abs(o-360)/13):Math.max(0,1-Math.min(o%360,360-o%360)/13);s.spark.visible=h>.01,s.spark.scale.setScalar(1+h*2);for(const w of s.valves){const x=w.intake?o<180:o>=540;w.g.position.y=1.155-(x?.07*Math.sin(o%180/180*Math.PI)**2:0)}}for(const s of e.streams){const o=e.cylinders[s.index];if(!o)continue;const l=o.degree,u=l%360;s.dot.visible=s.type==="intake"?l<180:s.type==="exhaust"?l>=540:s.type==="transfer"?u>155&&u<205:u>140&&u<220,s.dot.position.copy(s.curve.getPointAt((e.angle/110+s.offset)%1))}Je("#v25EngineAngle").value=String(Math.round(i)),Je("#v25EngineAngleLabel").textContent=`${Math.round(i)}\xB0 / ${t.cycle}\xB0`;let r="",a="",n="#64cfea";if(e.key==="two"){const s=i<145?0:i<220?1:2;r=["D\xE9tente : les gaz poussent","Balayage : les passages s\u2019ouvrent","Compression : le piston remonte"][s],a=["Apr\xE8s l\u2019allumage pr\xE8s du sommet, les gaz en expansion entra\xEEnent le piston vers le bas. Le m\xE9lange sous le piston est pr\xE9comprim\xE9.","La lumi\xE8re d\u2019\xE9chappement puis les transferts sont d\xE9gag\xE9s. Les gaz frais entrent et chassent les gaz br\xFBl\xE9s : les deux \xE9changes se chevauchent.","Les lumi\xE8res sont referm\xE9es. Le m\xE9lange au-dessus du piston est comprim\xE9 ; le carter aspire une nouvelle charge."][s],n=["#f5a25e","#64d4de","#e8c06c"][s]}else if(t.n){const s=Math.floor((e.cylinders[0]?.degree??i)/180);r=ra[s].name,a=ra[s].text,n=ra[s].color}Je("#v25EnginePhase").innerHTML=t.n?`<span style="background:${n}"></span><div><strong>${r}</strong><p>${a}</p>${t.n>1?"<small>Rep\xE8re de cycle : un cylindre de r\xE9f\xE9rence. Les autres sont d\xE9cal\xE9s.</small>":""}</div>`:"",sa()}function zc(e){const t=mt,i=na[e];t.key=e,t.angle=0,t.playing=!1,Je("#v25EnginePlay").textContent="\u25B6 Animer",Je("#v25EnginePlay").setAttribute("aria-pressed","false"),Je("#v25EngineTag").textContent=i.tag,Je("#v25EngineTitle").textContent=i.title,Je("#v25EngineIntro").textContent=i.intro,Je("#v25EngineExpert").textContent=i.expert,Je("#v25EngineSource").href=i.url,Je("#v25EngineSource").textContent=i.source+" \u2197",Je("#v25EngineAngle").max=i.cycle-1,Oi.querySelectorAll("[data-v25-engine]").forEach(r=>r.setAttribute("aria-pressed",r.dataset.v25Engine===e)),Oi.classList.toggle("v25-three-explainer",e==="three"),Je('[data-v25-component="spark"]').textContent=e==="two"?"Bougie & m\xE9lange":"Bougie & injection",Je("#v25EngineParts").hidden=!i.n,Je("#v25EnginePartInfo").innerHTML="",Fc(),Ya(),oa()}function oa(){const e=mt;cancelAnimationFrame(e.raf),e.last=0,e.visible&&!document.hidden&&e.playing&&(e.raf=requestAnimationFrame(kc))}function kc(e){const t=mt;if(!t.visible||document.hidden||!t.playing)return;const i=Math.min(50,t.last?e-t.last:0);t.last=e,t.angle=(t.angle+i*.08*Number(Je("#v25EngineSpeed").value))%na[t.key].cycle,Ya(),t.raf=requestAnimationFrame(kc)}Oi.querySelectorAll("[data-v25-engine]").forEach(e=>e.onclick=()=>zc(e.dataset.v25Engine)),Oi.querySelectorAll("[data-v25-component]").forEach(e=>e.onclick=()=>Oc(e.dataset.v25Component)),Je("#v25EnginePlay").onclick=()=>{const e=mt;e.playing=!e.playing,Je("#v25EnginePlay").textContent=e.playing?"\u2161 Pause":"\u25B6 Animer",Je("#v25EnginePlay").setAttribute("aria-pressed",e.playing),oa()},Je("#v25EngineAngle").oninput=e=>{mt.playing=!1,Je("#v25EnginePlay").textContent="\u25B6 Animer",Je("#v25EnginePlay").setAttribute("aria-pressed","false"),mt.angle=Number(e.target.value),Ya(),oa()},Je("#v25EngineStep").onclick=()=>{mt.playing=!1,Je("#v25EnginePlay").textContent="\u25B6 Animer",Je("#v25EnginePlay").setAttribute("aria-pressed","false");const e=na[mt.key].cycle,t=e===360?120:180;mt.angle=(Math.floor(mt.angle/t)*t+t)%e,Ya(),oa()},Je("#v25Sleeves").onchange=Bc,Je("#v25EngineReset").onclick=ul,new IntersectionObserver(e=>{mt.visible=e[0].isIntersecting,mt.visible&&ux(),oa()},{rootMargin:"100px"}).observe(Je("#v25EngineStage")),document.addEventListener("visibilitychange",oa),zc("four");const Jn=document.createElement("details");Jn.className="v25-timing",Jn.innerHTML="<summary>Ouvrir la coupe de r\xE9f\xE9rence : soupapes, injection et cycle \xE0 quatre temps</summary>",kt.before(Jn),Jn.append(kt)})();
