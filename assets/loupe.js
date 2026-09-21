/*
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
*/var ci={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rc=0,Go=1,Cc=2,Wo=1,Lc=2,fr=3,Ar=0,Ct=1,Dt=2,Rr=0,di=1,Xo=2,qo=3,jo=4,Pc=5,Hr=100,Ic=101,Uc=102,Dc=103,Nc=104,Oc=200,Fc=201,zc=202,Bc=203,Fn=204,zn=205,kc=206,Vc=207,Hc=208,Gc=209,Wc=210,Xc=211,qc=212,jc=213,Yc=214,Bn=0,kn=1,Vn=2,pi=3,Hn=4,Gn=5,Wn=6,Xn=7,qn=0,Zc=1,Jc=2,Cr=0,Kc=1,$c=2,Qc=3,Yo=4,eh=5,th=6,rh=7,Zo=300,fi=301,mi=302,jn=303,Yn=304,Ia=306,gi=1e3,Gr=1001,Zn=1002,Nt=1003,ih=1004,Ua=1005,rr=1006,Jn=1007,Wr=1008,ir=1009,Jo=1010,Ko=1011,Yi=1012,Kn=1013,Xr=1014,ar=1015,Zi=1016,$n=1017,Qn=1018,Ji=1020,$o=35902,Qo=35899,el=1021,tl=1022,Yt=1023,Ki=1026,$i=1027,es=1028,ts=1029,rl=1030,rs=1031,is=1033,Da=33776,Na=33777,Oa=33778,Fa=33779,as=35840,ns=35841,ss=35842,os=35843,ls=36196,us=37492,cs=37496,hs=37808,ds=37809,ps=37810,fs=37811,ms=37812,gs=37813,vs=37814,_s=37815,xs=37816,ys=37817,Es=37818,Ss=37819,Ms=37820,bs=37821,Ts=36492,ws=36494,As=36495,Rs=36283,Cs=36284,Ls=36285,Ps=36286,za=2300,Is=2301,Us=2302,il=2400,al=2401,nl=2402,ah=3200,nh=3201,Ds=0,sh=1,Lr="",St="srgb",vi="srgb-linear",Ba="linear",Qe="srgb",_i=7680,sl=519,oh=512,lh=513,uh=514,ol=515,ch=516,hh=517,dh=518,ph=519,ll=35044,ul="300 es",nr=2e3,ka=2001,qr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){let r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){let r=this._listeners;if(r===void 0)return;let i=r[e];if(i!==void 0){let a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let r=t[e.type];if(r!==void 0){e.target=this;let i=r.slice(0);for(let a=0,n=i.length;a<n;a++)i[a].call(this,e);e.target=null}}},wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cl=1234567,Qi=Math.PI/180,ea=180/Math.PI;function jr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[e&255]+wt[e>>8&255]+wt[e>>16&255]+wt[e>>24&255]+"-"+wt[t&255]+wt[t>>8&255]+"-"+wt[t>>16&15|64]+wt[t>>24&255]+"-"+wt[r&63|128]+wt[r>>8&255]+"-"+wt[r>>16&255]+wt[r>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function He(e,t,r){return Math.max(t,Math.min(r,e))}function Ns(e,t){return(e%t+t)%t}function fh(e,t,r,i,a){return i+(e-t)*(a-i)/(r-t)}function mh(e,t,r){return e!==t?(r-e)/(t-e):0}function ta(e,t,r){return(1-r)*e+r*t}function gh(e,t,r,i){return ta(e,t,1-Math.exp(-r*i))}function vh(e,t=1){return t-Math.abs(Ns(e,t*2)-t)}function _h(e,t,r){return e<=t?0:e>=r?1:(e=(e-t)/(r-t),e*e*(3-2*e))}function xh(e,t,r){return e<=t?0:e>=r?1:(e=(e-t)/(r-t),e*e*e*(e*(e*6-15)+10))}function yh(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Eh(e,t){return e+Math.random()*(t-e)}function Sh(e){return e*(.5-Math.random())}function Mh(e){e!==void 0&&(cl=e);let t=cl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bh(e){return e*Qi}function Th(e){return e*ea}function wh(e){return(e&e-1)===0&&e!==0}function Ah(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Rh(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Ch(e,t,r,i,a){let n=Math.cos,s=Math.sin,o=n(r/2),l=s(r/2),u=n((t+i)/2),c=s((t+i)/2),d=n((t-i)/2),p=s((t-i)/2),f=n((i-t)/2),v=s((i-t)/2);switch(a){case"XYX":e.set(o*c,l*d,l*p,o*u);break;case"YZY":e.set(l*p,o*c,l*d,o*u);break;case"ZXZ":e.set(l*d,l*p,o*c,o*u);break;case"XZX":e.set(o*c,l*v,l*f,o*u);break;case"YXY":e.set(l*f,o*c,l*v,o*u);break;case"ZYZ":e.set(l*v,l*f,o*c,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function xi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Lt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Lh={DEG2RAD:Qi,RAD2DEG:ea,generateUUID:jr,clamp:He,euclideanModulo:Ns,mapLinear:fh,inverseLerp:mh,lerp:ta,damp:gh,pingpong:vh,smoothstep:_h,smootherstep:xh,randInt:yh,randFloat:Eh,randFloatSpread:Sh,seededRandom:Mh,degToRad:bh,radToDeg:Th,isPowerOfTwo:wh,ceilPowerOfTwo:Ah,floorPowerOfTwo:Rh,setQuaternionFromProperEuler:Ch,normalize:Lt,denormalize:xi},oe=class fc{constructor(t=0,r=0){fc.prototype.isVector2=!0,this.x=t,this.y=r}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,r){return this.x=t,this.y=r,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let r=this.x,i=this.y,a=t.elements;return this.x=a[0]*r+a[3]*i+a[6],this.y=a[1]*r+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,r){return this.x=He(this.x,t.x,r.x),this.y=He(this.y,t.y,r.y),this}clampScalar(t,r){return this.x=He(this.x,t,r),this.y=He(this.y,t,r),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,t,r))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let i=this.dot(t)/r;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,i=this.y-t.y;return r*r+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this}rotateAround(t,r){let i=Math.cos(r),a=Math.sin(r),n=this.x-t.x,s=this.y-t.y;return this.x=n*i-s*a+t.x,this.y=n*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pr=class{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,a,n,s){let o=r[i+0],l=r[i+1],u=r[i+2],c=r[i+3],d=a[n+0],p=a[n+1],f=a[n+2],v=a[n+3];if(s===0){e[t+0]=o,e[t+1]=l,e[t+2]=u,e[t+3]=c;return}if(s===1){e[t+0]=d,e[t+1]=p,e[t+2]=f,e[t+3]=v;return}if(c!==v||o!==d||l!==p||u!==f){let g=1-s,m=o*d+l*p+u*f+c*v,h=m>=0?1:-1,P=1-m*m;if(P>Number.EPSILON){let b=Math.sqrt(P),U=Math.atan2(b,m*h);g=Math.sin(g*U)/b,s=Math.sin(s*U)/b}let y=s*h;if(o=o*g+d*y,l=l*g+p*y,u=u*g+f*y,c=c*g+v*y,g===1-s){let b=1/Math.sqrt(o*o+l*l+u*u+c*c);o*=b,l*=b,u*=b,c*=b}}e[t]=o,e[t+1]=l,e[t+2]=u,e[t+3]=c}static multiplyQuaternionsFlat(e,t,r,i,a,n){let s=r[i],o=r[i+1],l=r[i+2],u=r[i+3],c=a[n],d=a[n+1],p=a[n+2],f=a[n+3];return e[t]=s*f+u*c+o*p-l*d,e[t+1]=o*f+u*d+l*c-s*p,e[t+2]=l*f+u*p+s*d-o*c,e[t+3]=u*f-s*c-o*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let r=e._x,i=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(r/2),u=s(i/2),c=s(a/2),d=o(r/2),p=o(i/2),f=o(a/2);switch(n){case"XYZ":this._x=d*u*c+l*p*f,this._y=l*p*c-d*u*f,this._z=l*u*f+d*p*c,this._w=l*u*c-d*p*f;break;case"YXZ":this._x=d*u*c+l*p*f,this._y=l*p*c-d*u*f,this._z=l*u*f-d*p*c,this._w=l*u*c+d*p*f;break;case"ZXY":this._x=d*u*c-l*p*f,this._y=l*p*c+d*u*f,this._z=l*u*f+d*p*c,this._w=l*u*c-d*p*f;break;case"ZYX":this._x=d*u*c-l*p*f,this._y=l*p*c+d*u*f,this._z=l*u*f-d*p*c,this._w=l*u*c+d*p*f;break;case"YZX":this._x=d*u*c+l*p*f,this._y=l*p*c+d*u*f,this._z=l*u*f-d*p*c,this._w=l*u*c-d*p*f;break;case"XZY":this._x=d*u*c-l*p*f,this._y=l*p*c-d*u*f,this._z=l*u*f+d*p*c,this._w=l*u*c+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,r=t[0],i=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],u=t[6],c=t[10],d=r+s+c;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-o)*p,this._y=(a-l)*p,this._z=(n-i)*p}else if(r>s&&r>c){let p=2*Math.sqrt(1+r-s-c);this._w=(u-o)/p,this._x=.25*p,this._y=(i+n)/p,this._z=(a+l)/p}else if(s>c){let p=2*Math.sqrt(1+s-r-c);this._w=(a-l)/p,this._x=(i+n)/p,this._y=.25*p,this._z=(o+u)/p}else{let p=2*Math.sqrt(1+c-r-s);this._w=(n-i)/p,this._x=(a+l)/p,this._y=(o+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){let r=this.angleTo(e);if(r===0)return this;let i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let r=e._x,i=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,u=t._w;return this._x=r*u+n*s+i*l-a*o,this._y=i*u+n*o+a*s-r*l,this._z=a*u+n*l+r*o-i*s,this._w=n*u-r*s-i*o-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let r=this._x,i=this._y,a=this._z,n=this._w,s=n*e._w+r*e._x+i*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=n,this._x=r,this._y=i,this._z=a,this;let o=1-s*s;if(o<=Number.EPSILON){let p=1-t;return this._w=p*n+t*this._w,this._x=p*r+t*this._x,this._y=p*i+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}let l=Math.sqrt(o),u=Math.atan2(l,s),c=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=n*c+this._w*d,this._x=r*c+this._x*d,this._y=i*c+this._y*d,this._z=a*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class mc{constructor(t=0,r=0,i=0){mc.prototype.isVector3=!0,this.x=t,this.y=r,this.z=i}set(t,r,i){return i===void 0&&(i=this.z),this.x=t,this.y=r,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,r){return this.x=t.x*r.x,this.y=t.y*r.y,this.z=t.z*r.z,this}applyEuler(t){return this.applyQuaternion(hl.setFromEuler(t))}applyAxisAngle(t,r){return this.applyQuaternion(hl.setFromAxisAngle(t,r))}applyMatrix3(t){let r=this.x,i=this.y,a=this.z,n=t.elements;return this.x=n[0]*r+n[3]*i+n[6]*a,this.y=n[1]*r+n[4]*i+n[7]*a,this.z=n[2]*r+n[5]*i+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let r=this.x,i=this.y,a=this.z,n=t.elements,s=1/(n[3]*r+n[7]*i+n[11]*a+n[15]);return this.x=(n[0]*r+n[4]*i+n[8]*a+n[12])*s,this.y=(n[1]*r+n[5]*i+n[9]*a+n[13])*s,this.z=(n[2]*r+n[6]*i+n[10]*a+n[14])*s,this}applyQuaternion(t){let r=this.x,i=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,u=2*(s*a-o*i),c=2*(o*r-n*a),d=2*(n*i-s*r);return this.x=r+l*u+s*d-o*c,this.y=i+l*c+o*u-n*d,this.z=a+l*d+n*c-s*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let r=this.x,i=this.y,a=this.z,n=t.elements;return this.x=n[0]*r+n[4]*i+n[8]*a,this.y=n[1]*r+n[5]*i+n[9]*a,this.z=n[2]*r+n[6]*i+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,r){return this.x=He(this.x,t.x,r.x),this.y=He(this.y,t.y,r.y),this.z=He(this.z,t.z,r.z),this}clampScalar(t,r){return this.x=He(this.x,t,r),this.y=He(this.y,t,r),this.z=He(this.z,t,r),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,t,r))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this.z=t.z+(r.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,r){let i=t.x,a=t.y,n=t.z,s=r.x,o=r.y,l=r.z;return this.x=a*l-n*o,this.y=n*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){let r=t.lengthSq();if(r===0)return this.set(0,0,0);let i=t.dot(this)/r;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Os.copy(this).projectOnVector(t),this.sub(Os)}reflect(t){return this.sub(Os.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let i=this.dot(t)/r;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return r*r+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,r,i){let a=Math.sin(r)*t;return this.x=a*Math.sin(i),this.y=Math.cos(r)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,r,i){return this.x=t*Math.sin(r),this.y=i,this.z=t*Math.cos(r),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(t){let r=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=r,this.y=i,this.z=a,this}setFromMatrixColumn(t,r){return this.fromArray(t.elements,r*4)}setFromMatrix3Column(t,r){return this.fromArray(t.elements,r*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,r=Math.random()*2-1,i=Math.sqrt(1-r*r);return this.x=i*Math.cos(t),this.y=r,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Os=new C,hl=new Pr,We=class gc{constructor(t,r,i,a,n,s,o,l,u){gc.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,r,i,a,n,s,o,l,u)}set(t,r,i,a,n,s,o,l,u){let c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=r,c[4]=n,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let r=this.elements,i=t.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],this}extractBasis(t,r,i){return t.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let r=t.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let i=t.elements,a=r.elements,n=this.elements,s=i[0],o=i[3],l=i[6],u=i[1],c=i[4],d=i[7],p=i[2],f=i[5],v=i[8],g=a[0],m=a[3],h=a[6],P=a[1],y=a[4],b=a[7],U=a[2],x=a[5],T=a[8];return n[0]=s*g+o*P+l*U,n[3]=s*m+o*y+l*x,n[6]=s*h+o*b+l*T,n[1]=u*g+c*P+d*U,n[4]=u*m+c*y+d*x,n[7]=u*h+c*b+d*T,n[2]=p*g+f*P+v*U,n[5]=p*m+f*y+v*x,n[8]=p*h+f*b+v*T,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[3]*=t,r[6]*=t,r[1]*=t,r[4]*=t,r[7]*=t,r[2]*=t,r[5]*=t,r[8]*=t,this}determinant(){let t=this.elements,r=t[0],i=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8];return r*s*c-r*o*u-i*n*c+i*o*l+a*n*u-a*s*l}invert(){let t=this.elements,r=t[0],i=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8],d=c*s-o*u,p=o*l-c*n,f=u*n-s*l,v=r*d+i*p+a*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/v;return t[0]=d*g,t[1]=(a*u-c*i)*g,t[2]=(o*i-a*s)*g,t[3]=p*g,t[4]=(c*r-a*l)*g,t[5]=(a*n-o*r)*g,t[6]=f*g,t[7]=(i*l-u*r)*g,t[8]=(s*r-i*n)*g,this}transpose(){let t,r=this.elements;return t=r[1],r[1]=r[3],r[3]=t,t=r[2],r[2]=r[6],r[6]=t,t=r[5],r[5]=r[7],r[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let r=this.elements;return t[0]=r[0],t[1]=r[3],t[2]=r[6],t[3]=r[1],t[4]=r[4],t[5]=r[7],t[6]=r[2],t[7]=r[5],t[8]=r[8],this}setUvTransform(t,r,i,a,n,s,o){let l=Math.cos(n),u=Math.sin(n);return this.set(i*l,i*u,-i*(l*s+u*o)+s+t,-a*u,a*l,-a*(-u*s+l*o)+o+r,0,0,1),this}scale(t,r){return this.premultiply(Fs.makeScale(t,r)),this}rotate(t){return this.premultiply(Fs.makeRotation(-t)),this}translate(t,r){return this.premultiply(Fs.makeTranslation(t,r)),this}makeTranslation(t,r){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,r,0,0,1),this}makeRotation(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,-i,0,i,r,0,0,0,1),this}makeScale(t,r){return this.set(t,0,0,0,r,0,0,0,1),this}equals(t){let r=this.elements,i=t.elements;for(let a=0;a<9;a++)if(r[a]!==i[a])return!1;return!0}fromArray(t,r=0){for(let i=0;i<9;i++)this.elements[i]=t[i+r];return this}toArray(t=[],r=0){let i=this.elements;return t[r]=i[0],t[r+1]=i[1],t[r+2]=i[2],t[r+3]=i[3],t[r+4]=i[4],t[r+5]=i[5],t[r+6]=i[6],t[r+7]=i[7],t[r+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Fs=new We;function dl(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Va(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Ph(){let e=Va("canvas");return e.style.display="block",e}var pl={};function ra(e){e in pl||(pl[e]=!0,console.warn(e))}function Ih(e,t,r){return new Promise(function(i,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,r);break;default:i()}}setTimeout(n,r)})}var fl=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ml=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uh(){let e={enabled:!0,workingColorSpace:vi,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===Qe&&(a.r=mr(a.r),a.g=mr(a.g),a.b=mr(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Qe&&(a.r=yi(a.r),a.g=yi(a.g),a.b=yi(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Lr?Ba:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return ra("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return ra("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],r=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[vi]:{primaries:t,whitePoint:i,transfer:Ba,toXYZ:fl,fromXYZ:ml,luminanceCoefficients:r,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:t,whitePoint:i,transfer:Qe,toXYZ:fl,fromXYZ:ml,luminanceCoefficients:r,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),e}var Je=Uh();function mr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function yi(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Ei,Dh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ei===void 0&&(Ei=Va("canvas")),Ei.width=e.width,Ei.height=e.height;let i=Ei.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),r=Ei}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Va("canvas");t.width=e.width,t.height=e.height;let r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);let i=r.getImageData(0,0,e.width,e.height),a=i.data;for(let n=0;n<a.length;n++)a[n]=mr(a[n]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(mr(t[r]/255)*255):t[r]=mr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Nh=0,zs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=jr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let n=0,s=i.length;n<s;n++)i[n].isDataTexture?a.push(Bs(i[n].image)):a.push(Bs(i[n]))}else a=Bs(i);r.url=a}return t||(e.images[this.uuid]=r),r}};function Bs(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Dh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Oh=0,ks=new C,kt=class Nn extends qr{constructor(t=Nn.DEFAULT_IMAGE,r=Nn.DEFAULT_MAPPING,i=Gr,a=Gr,n=rr,s=Wr,o=Yt,l=ir,u=Nn.DEFAULT_ANISOTROPY,c=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=jr(),this.name="",this.source=new zs(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ks).x}get height(){return this.source.getSize(ks).y}get depth(){return this.source.getSize(ks).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,r){this.updateRanges.push({start:t,count:r})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let r in t){let i=t[r];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${r}' has value of undefined.`);continue}let a=this[r];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${r}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[r]=i}}toJSON(t){let r=t===void 0||typeof t=="string";if(!r&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),r||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gi:t.x=t.x-Math.floor(t.x);break;case Gr:t.x=t.x<0?0:1;break;case Zn:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gi:t.y=t.y-Math.floor(t.y);break;case Gr:t.y=t.y<0?0:1;break;case Zn:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null,kt.DEFAULT_MAPPING=Zo,kt.DEFAULT_ANISOTROPY=1;var rt=class vc{constructor(t=0,r=0,i=0,a=1){vc.prototype.isVector4=!0,this.x=t,this.y=r,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,r,i,a){return this.x=t,this.y=r,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this.w=t.w+r.w,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this.w+=t.w*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this.w=t.w-r.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let r=this.x,i=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*r+s[4]*i+s[8]*a+s[12]*n,this.y=s[1]*r+s[5]*i+s[9]*a+s[13]*n,this.z=s[2]*r+s[6]*i+s[10]*a+s[14]*n,this.w=s[3]*r+s[7]*i+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let r=Math.sqrt(1-t.w*t.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/r,this.y=t.y/r,this.z=t.z/r),this}setAxisAngleFromRotationMatrix(t){let r,i,a,n,s=t.elements,o=s[0],l=s[4],u=s[8],c=s[1],d=s[5],p=s[9],f=s[2],v=s[6],g=s[10];if(Math.abs(l-c)<.01&&Math.abs(u-f)<.01&&Math.abs(p-v)<.01){if(Math.abs(l+c)<.1&&Math.abs(u+f)<.1&&Math.abs(p+v)<.1&&Math.abs(o+d+g-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;let h=(o+1)/2,P=(d+1)/2,y=(g+1)/2,b=(l+c)/4,U=(u+f)/4,x=(p+v)/4;return h>P&&h>y?h<.01?(i=0,a=.707106781,n=.707106781):(i=Math.sqrt(h),a=b/i,n=U/i):P>y?P<.01?(i=.707106781,a=0,n=.707106781):(a=Math.sqrt(P),i=b/a,n=x/a):y<.01?(i=.707106781,a=.707106781,n=0):(n=Math.sqrt(y),i=U/n,a=x/n),this.set(i,a,n,r),this}let m=Math.sqrt((v-p)*(v-p)+(u-f)*(u-f)+(c-l)*(c-l));return Math.abs(m)<.001&&(m=1),this.x=(v-p)/m,this.y=(u-f)/m,this.z=(c-l)/m,this.w=Math.acos((o+d+g-1)/2),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,r){return this.x=He(this.x,t.x,r.x),this.y=He(this.y,t.y,r.y),this.z=He(this.z,t.z,r.z),this.w=He(this.w,t.w,r.w),this}clampScalar(t,r){return this.x=He(this.x,t,r),this.y=He(this.y,t,r),this.z=He(this.z,t,r),this.w=He(this.w,t,r),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,t,r))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this.w+=(t.w-this.w)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this.z=t.z+(r.z-t.z)*i,this.w=t.w+(r.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this.w=t[r+3],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t[r+3]=this.w,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this.w=t.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fh=class extends qr{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);let i={width:e,height:t,depth:r.depth},a=new kt(i);this.textures=[];let n=r.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){let t={minFilter:rr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=r,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new zs(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yr=class extends Fh{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}},gl=class extends kt{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},zh=class extends kt{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ir=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let r=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let r=e.geometry;if(r!==void 0){let a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,Zt):Zt.fromBufferAttribute(a,n),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ha.copy(r.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}let i=e.children;for(let a=0,n=i.length;a<n;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),Ga.subVectors(this.max,ia),Si.subVectors(e.a,ia),Mi.subVectors(e.b,ia),bi.subVectors(e.c,ia),Ur.subVectors(Mi,Si),Dr.subVectors(bi,Mi),Zr.subVectors(Si,bi);let t=[0,-Ur.z,Ur.y,0,-Dr.z,Dr.y,0,-Zr.z,Zr.y,Ur.z,0,-Ur.x,Dr.z,0,-Dr.x,Zr.z,0,-Zr.x,-Ur.y,Ur.x,0,-Dr.y,Dr.x,0,-Zr.y,Zr.x,0];return!Vs(t,Si,Mi,bi,Ga)||(t=[1,0,0,0,1,0,0,0,1],!Vs(t,Si,Mi,bi,Ga))?!1:(Wa.crossVectors(Ur,Dr),t=[Wa.x,Wa.y,Wa.z],Vs(t,Si,Mi,bi,Ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gr=[new C,new C,new C,new C,new C,new C,new C,new C],Zt=new C,Ha=new Ir,Si=new C,Mi=new C,bi=new C,Ur=new C,Dr=new C,Zr=new C,ia=new C,Ga=new C,Wa=new C,Jr=new C;function Vs(e,t,r,i,a){for(let n=0,s=e.length-3;n<=s;n+=3){Jr.fromArray(e,n);let o=a.x*Math.abs(Jr.x)+a.y*Math.abs(Jr.y)+a.z*Math.abs(Jr.z),l=t.dot(Jr),u=r.dot(Jr),c=i.dot(Jr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}var Bh=new Ir,aa=new C,Hs=new C,Ti=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let r=this.center;t!==void 0?r.copy(t):Bh.setFromPoints(e).getCenter(r);let i=0;for(let a=0,n=e.length;a<n;a++)i=Math.max(i,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);let t=aa.lengthSq();if(t>this.radius*this.radius){let r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(aa,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(Hs)),this.expandByPoint(aa.copy(e.center).sub(Hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},vr=new C,Gs=new C,Xa=new C,Nr=new C,Ws=new C,qa=new C,Xs=new C,ja=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){Gs.copy(e).add(t).multiplyScalar(.5),Xa.copy(t).sub(e).normalize(),Nr.copy(this.origin).sub(Gs);let a=e.distanceTo(t)*.5,n=-this.direction.dot(Xa),s=Nr.dot(this.direction),o=-Nr.dot(Xa),l=Nr.lengthSq(),u=Math.abs(1-n*n),c,d,p,f;if(u>0)if(c=n*o-s,d=n*s-o,f=a*u,c>=0)if(d>=-f)if(d<=f){let v=1/u;c*=v,d*=v,p=c*(c+n*d+2*s)+d*(n*c+d+2*o)+l}else d=a,c=Math.max(0,-(n*d+s)),p=-c*c+d*(d+2*o)+l;else d=-a,c=Math.max(0,-(n*d+s)),p=-c*c+d*(d+2*o)+l;else d<=-f?(c=Math.max(0,-(-n*a+s)),d=c>0?-a:Math.min(Math.max(-a,-o),a),p=-c*c+d*(d+2*o)+l):d<=f?(c=0,d=Math.min(Math.max(-a,-o),a),p=d*(d+2*o)+l):(c=Math.max(0,-(n*a+s)),d=c>0?a:Math.min(Math.max(-a,-o),a),p=-c*c+d*(d+2*o)+l);else d=n>0?-a:a,c=Math.max(0,-(n*d+s)),p=-c*c+d*(d+2*o)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(Gs).addScaledVector(Xa,d),p}intersectSphere(e,t){vr.subVectors(e.center,this.origin);let r=vr.dot(this.direction),i=vr.dot(vr)-r*r,a=e.radius*e.radius;if(i>a)return null;let n=Math.sqrt(a-i),s=r-n,o=r+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){let r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,a,n,s,o,l=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,d=this.origin;return l>=0?(r=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(r=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(a=(e.min.y-d.y)*u,n=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,n=(e.min.y-d.y)*u),r>n||a>i||((a>r||isNaN(r))&&(r=a),(n<i||isNaN(i))&&(i=n),c>=0?(s=(e.min.z-d.z)*c,o=(e.max.z-d.z)*c):(s=(e.max.z-d.z)*c,o=(e.min.z-d.z)*c),r>o||s>i)||((s>r||r!==r)&&(r=s),(o<i||i!==i)&&(i=o),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,r,i,a){Ws.subVectors(t,e),qa.subVectors(r,e),Xs.crossVectors(Ws,qa);let n=this.direction.dot(Xs),s;if(n>0){if(i)return null;s=1}else if(n<0)s=-1,n=-n;else return null;Nr.subVectors(this.origin,e);let o=s*this.direction.dot(qa.crossVectors(Nr,qa));if(o<0)return null;let l=s*this.direction.dot(Ws.cross(Nr));if(l<0||o+l>n)return null;let u=-s*Nr.dot(Xs);return u<0?null:this.at(u/n,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class Ho{constructor(t,r,i,a,n,s,o,l,u,c,d,p,f,v,g,m){Ho.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,r,i,a,n,s,o,l,u,c,d,p,f,v,g,m)}set(t,r,i,a,n,s,o,l,u,c,d,p,f,v,g,m){let h=this.elements;return h[0]=t,h[4]=r,h[8]=i,h[12]=a,h[1]=n,h[5]=s,h[9]=o,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=p,h[3]=f,h[7]=v,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ho().fromArray(this.elements)}copy(t){let r=this.elements,i=t.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],r[9]=i[9],r[10]=i[10],r[11]=i[11],r[12]=i[12],r[13]=i[13],r[14]=i[14],r[15]=i[15],this}copyPosition(t){let r=this.elements,i=t.elements;return r[12]=i[12],r[13]=i[13],r[14]=i[14],this}setFromMatrix3(t){let r=t.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(t,r,i){return t.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,r,i){return this.set(t.x,r.x,i.x,0,t.y,r.y,i.y,0,t.z,r.z,i.z,0,0,0,0,1),this}extractRotation(t){let r=this.elements,i=t.elements,a=1/wi.setFromMatrixColumn(t,0).length(),n=1/wi.setFromMatrixColumn(t,1).length(),s=1/wi.setFromMatrixColumn(t,2).length();return r[0]=i[0]*a,r[1]=i[1]*a,r[2]=i[2]*a,r[3]=0,r[4]=i[4]*n,r[5]=i[5]*n,r[6]=i[6]*n,r[7]=0,r[8]=i[8]*s,r[9]=i[9]*s,r[10]=i[10]*s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(t){let r=this.elements,i=t.x,a=t.y,n=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),u=Math.sin(a),c=Math.cos(n),d=Math.sin(n);if(t.order==="XYZ"){let p=s*c,f=s*d,v=o*c,g=o*d;r[0]=l*c,r[4]=-l*d,r[8]=u,r[1]=f+v*u,r[5]=p-g*u,r[9]=-o*l,r[2]=g-p*u,r[6]=v+f*u,r[10]=s*l}else if(t.order==="YXZ"){let p=l*c,f=l*d,v=u*c,g=u*d;r[0]=p+g*o,r[4]=v*o-f,r[8]=s*u,r[1]=s*d,r[5]=s*c,r[9]=-o,r[2]=f*o-v,r[6]=g+p*o,r[10]=s*l}else if(t.order==="ZXY"){let p=l*c,f=l*d,v=u*c,g=u*d;r[0]=p-g*o,r[4]=-s*d,r[8]=v+f*o,r[1]=f+v*o,r[5]=s*c,r[9]=g-p*o,r[2]=-s*u,r[6]=o,r[10]=s*l}else if(t.order==="ZYX"){let p=s*c,f=s*d,v=o*c,g=o*d;r[0]=l*c,r[4]=v*u-f,r[8]=p*u+g,r[1]=l*d,r[5]=g*u+p,r[9]=f*u-v,r[2]=-u,r[6]=o*l,r[10]=s*l}else if(t.order==="YZX"){let p=s*l,f=s*u,v=o*l,g=o*u;r[0]=l*c,r[4]=g-p*d,r[8]=v*d+f,r[1]=d,r[5]=s*c,r[9]=-o*c,r[2]=-u*c,r[6]=f*d+v,r[10]=p-g*d}else if(t.order==="XZY"){let p=s*l,f=s*u,v=o*l,g=o*u;r[0]=l*c,r[4]=-d,r[8]=u*c,r[1]=p*d+g,r[5]=s*c,r[9]=f*d-v,r[2]=v*d-f,r[6]=o*c,r[10]=g*d+p}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kh,t,Vh)}lookAt(t,r,i){let a=this.elements;return Ot.subVectors(t,r),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Or.crossVectors(i,Ot),Or.lengthSq()===0&&(Math.abs(i.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Or.crossVectors(i,Ot)),Or.normalize(),Ya.crossVectors(Ot,Or),a[0]=Or.x,a[4]=Ya.x,a[8]=Ot.x,a[1]=Or.y,a[5]=Ya.y,a[9]=Ot.y,a[2]=Or.z,a[6]=Ya.z,a[10]=Ot.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let i=t.elements,a=r.elements,n=this.elements,s=i[0],o=i[4],l=i[8],u=i[12],c=i[1],d=i[5],p=i[9],f=i[13],v=i[2],g=i[6],m=i[10],h=i[14],P=i[3],y=i[7],b=i[11],U=i[15],x=a[0],T=a[4],R=a[8],S=a[12],E=a[1],A=a[5],O=a[9],B=a[13],z=a[2],W=a[6],k=a[10],$=a[14],G=a[3],re=a[7],pe=a[11],Le=a[15];return n[0]=s*x+o*E+l*z+u*G,n[4]=s*T+o*A+l*W+u*re,n[8]=s*R+o*O+l*k+u*pe,n[12]=s*S+o*B+l*$+u*Le,n[1]=c*x+d*E+p*z+f*G,n[5]=c*T+d*A+p*W+f*re,n[9]=c*R+d*O+p*k+f*pe,n[13]=c*S+d*B+p*$+f*Le,n[2]=v*x+g*E+m*z+h*G,n[6]=v*T+g*A+m*W+h*re,n[10]=v*R+g*O+m*k+h*pe,n[14]=v*S+g*B+m*$+h*Le,n[3]=P*x+y*E+b*z+U*G,n[7]=P*T+y*A+b*W+U*re,n[11]=P*R+y*O+b*k+U*pe,n[15]=P*S+y*B+b*$+U*Le,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[4]*=t,r[8]*=t,r[12]*=t,r[1]*=t,r[5]*=t,r[9]*=t,r[13]*=t,r[2]*=t,r[6]*=t,r[10]*=t,r[14]*=t,r[3]*=t,r[7]*=t,r[11]*=t,r[15]*=t,this}determinant(){let t=this.elements,r=t[0],i=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],u=t[13],c=t[2],d=t[6],p=t[10],f=t[14],v=t[3],g=t[7],m=t[11],h=t[15];return v*(+n*l*d-a*u*d-n*o*p+i*u*p+a*o*f-i*l*f)+g*(+r*l*f-r*u*p+n*s*p-a*s*f+a*u*c-n*l*c)+m*(+r*u*d-r*o*f-n*s*d+i*s*f+n*o*c-i*u*c)+h*(-a*o*c-r*l*d+r*o*p+a*s*d-i*s*p+i*l*c)}transpose(){let t=this.elements,r;return r=t[1],t[1]=t[4],t[4]=r,r=t[2],t[2]=t[8],t[8]=r,r=t[6],t[6]=t[9],t[9]=r,r=t[3],t[3]=t[12],t[12]=r,r=t[7],t[7]=t[13],t[13]=r,r=t[11],t[11]=t[14],t[14]=r,this}setPosition(t,r,i){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=r,a[14]=i),this}invert(){let t=this.elements,r=t[0],i=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8],d=t[9],p=t[10],f=t[11],v=t[12],g=t[13],m=t[14],h=t[15],P=d*m*u-g*p*u+g*l*f-o*m*f-d*l*h+o*p*h,y=v*p*u-c*m*u-v*l*f+s*m*f+c*l*h-s*p*h,b=c*g*u-v*d*u+v*o*f-s*g*f-c*o*h+s*d*h,U=v*d*l-c*g*l-v*o*p+s*g*p+c*o*m-s*d*m,x=r*P+i*y+a*b+n*U;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/x;return t[0]=P*T,t[1]=(g*p*n-d*m*n-g*a*f+i*m*f+d*a*h-i*p*h)*T,t[2]=(o*m*n-g*l*n+g*a*u-i*m*u-o*a*h+i*l*h)*T,t[3]=(d*l*n-o*p*n-d*a*u+i*p*u+o*a*f-i*l*f)*T,t[4]=y*T,t[5]=(c*m*n-v*p*n+v*a*f-r*m*f-c*a*h+r*p*h)*T,t[6]=(v*l*n-s*m*n-v*a*u+r*m*u+s*a*h-r*l*h)*T,t[7]=(s*p*n-c*l*n+c*a*u-r*p*u-s*a*f+r*l*f)*T,t[8]=b*T,t[9]=(v*d*n-c*g*n-v*i*f+r*g*f+c*i*h-r*d*h)*T,t[10]=(s*g*n-v*o*n+v*i*u-r*g*u-s*i*h+r*o*h)*T,t[11]=(c*o*n-s*d*n-c*i*u+r*d*u+s*i*f-r*o*f)*T,t[12]=U*T,t[13]=(c*g*a-v*d*a+v*i*p-r*g*p-c*i*m+r*d*m)*T,t[14]=(v*o*a-s*g*a-v*i*l+r*g*l+s*i*m-r*o*m)*T,t[15]=(s*d*a-c*o*a+c*i*l-r*d*l-s*i*p+r*o*p)*T,this}scale(t){let r=this.elements,i=t.x,a=t.y,n=t.z;return r[0]*=i,r[4]*=a,r[8]*=n,r[1]*=i,r[5]*=a,r[9]*=n,r[2]*=i,r[6]*=a,r[10]*=n,r[3]*=i,r[7]*=a,r[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(r,i,a))}makeTranslation(t,r,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,r,0,0,1,i,0,0,0,1),this}makeRotationX(t){let r=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,r,-i,0,0,i,r,0,0,0,0,1),this}makeRotationY(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,0,i,0,0,1,0,0,-i,0,r,0,0,0,0,1),this}makeRotationZ(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,r){let i=Math.cos(r),a=Math.sin(r),n=1-i,s=t.x,o=t.y,l=t.z,u=n*s,c=n*o;return this.set(u*s+i,u*o-a*l,u*l+a*o,0,u*o+a*l,c*o+i,c*l-a*s,0,u*l-a*o,c*l+a*s,n*l*l+i,0,0,0,0,1),this}makeScale(t,r,i){return this.set(t,0,0,0,0,r,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,r,i,a,n,s){return this.set(1,i,n,0,t,1,s,0,r,a,1,0,0,0,0,1),this}compose(t,r,i){let a=this.elements,n=r._x,s=r._y,o=r._z,l=r._w,u=n+n,c=s+s,d=o+o,p=n*u,f=n*c,v=n*d,g=s*c,m=s*d,h=o*d,P=l*u,y=l*c,b=l*d,U=i.x,x=i.y,T=i.z;return a[0]=(1-(g+h))*U,a[1]=(f+b)*U,a[2]=(v-y)*U,a[3]=0,a[4]=(f-b)*x,a[5]=(1-(p+h))*x,a[6]=(m+P)*x,a[7]=0,a[8]=(v+y)*T,a[9]=(m-P)*T,a[10]=(1-(p+g))*T,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,r,i){let a=this.elements,n=wi.set(a[0],a[1],a[2]).length(),s=wi.set(a[4],a[5],a[6]).length(),o=wi.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),t.x=a[12],t.y=a[13],t.z=a[14],Jt.copy(this);let l=1/n,u=1/s,c=1/o;return Jt.elements[0]*=l,Jt.elements[1]*=l,Jt.elements[2]*=l,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=c,Jt.elements[9]*=c,Jt.elements[10]*=c,r.setFromRotationMatrix(Jt),i.x=n,i.y=s,i.z=o,this}makePerspective(t,r,i,a,n,s,o=nr,l=!1){let u=this.elements,c=2*n/(r-t),d=2*n/(i-a),p=(r+t)/(r-t),f=(i+a)/(i-a),v,g;if(l)v=n/(s-n),g=s*n/(s-n);else if(o===nr)v=-(s+n)/(s-n),g=-2*s*n/(s-n);else if(o===ka)v=-s/(s-n),g=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=d,u[9]=f,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=g,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,r,i,a,n,s,o=nr,l=!1){let u=this.elements,c=2/(r-t),d=2/(i-a),p=-(r+t)/(r-t),f=-(i+a)/(i-a),v,g;if(l)v=1/(s-n),g=s/(s-n);else if(o===nr)v=-2/(s-n),g=-(s+n)/(s-n);else if(o===ka)v=-1/(s-n),g=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=p,u[1]=0,u[5]=d,u[9]=0,u[13]=f,u[2]=0,u[6]=0,u[10]=v,u[14]=g,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let r=this.elements,i=t.elements;for(let a=0;a<16;a++)if(r[a]!==i[a])return!1;return!0}fromArray(t,r=0){for(let i=0;i<16;i++)this.elements[i]=t[i+r];return this}toArray(t=[],r=0){let i=this.elements;return t[r]=i[0],t[r+1]=i[1],t[r+2]=i[2],t[r+3]=i[3],t[r+4]=i[4],t[r+5]=i[5],t[r+6]=i[6],t[r+7]=i[7],t[r+8]=i[8],t[r+9]=i[9],t[r+10]=i[10],t[r+11]=i[11],t[r+12]=i[12],t[r+13]=i[13],t[r+14]=i[14],t[r+15]=i[15],t}},wi=new C,Jt=new nt,kh=new C(0,0,0),Vh=new C(1,1,1),Or=new C,Ya=new C,Ot=new C,vl=new nt,_l=new Pr,_r=class _c{constructor(t=0,r=0,i=0,a=_c.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=r,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,r,i,a=this._order){return this._x=t,this._y=r,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,r=this._order,i=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],u=a[5],c=a[9],d=a[2],p=a[6],f=a[10];switch(r){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-He(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(He(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-He(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,r,i){return vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vl,r,i)}setFromVector3(t,r=this._order){return this.set(t.x,t.y,t.z,r)}reorder(t){return _l.setFromEuler(this),this.setFromQuaternion(_l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],r=0){return t[r]=this._x,t[r+1]=this._y,t[r+2]=this._z,t[r+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_r.DEFAULT_ORDER="XYZ";var qs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hh=0,xl=new C,Ai=new Pr,xr=new nt,Za=new C,na=new C,Gh=new C,Wh=new Pr,yl=new C(1,0,0),El=new C(0,1,0),Sl=new C(0,0,1),Ml={type:"added"},Xh={type:"removed"},Ri={type:"childadded",child:null},js={type:"childremoved",child:null},Pt=class On extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();let t=new C,r=new _r,i=new Pr,a=new C(1,1,1);function n(){i.setFromEuler(r,!1)}function s(){r.setFromQuaternion(i,void 0,!1)}r._onChange(n),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new nt},normalMatrix:{value:new We}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,r){this.quaternion.setFromAxisAngle(t,r)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,r){return Ai.setFromAxisAngle(t,r),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,r){return Ai.setFromAxisAngle(t,r),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(yl,t)}rotateY(t){return this.rotateOnAxis(El,t)}rotateZ(t){return this.rotateOnAxis(Sl,t)}translateOnAxis(t,r){return xl.copy(t).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(r)),this}translateX(t){return this.translateOnAxis(yl,t)}translateY(t){return this.translateOnAxis(El,t)}translateZ(t){return this.translateOnAxis(Sl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xr.copy(this.matrixWorld).invert())}lookAt(t,r,i){t.isVector3?Za.copy(t):Za.set(t,r,i);let a=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xr.lookAt(na,Za,this.up):xr.lookAt(Za,na,this.up),this.quaternion.setFromRotationMatrix(xr),a&&(xr.extractRotation(a.matrixWorld),Ai.setFromRotationMatrix(xr),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ml),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let r=this.children.indexOf(t);return r!==-1&&(t.parent=null,this.children.splice(r,1),t.dispatchEvent(Xh),js.child=t,this.dispatchEvent(js),js.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xr.multiply(t.parent.matrixWorld)),t.applyMatrix4(xr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ml),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,r){if(this[t]===r)return this;for(let i=0,a=this.children.length;i<a;i++){let n=this.children[i].getObjectByProperty(t,r);if(n!==void 0)return n}}getObjectsByProperty(t,r,i=[]){this[t]===r&&i.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,r,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,t,Gh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,Wh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let r=this.matrixWorld.elements;return t.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(t){t(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].traverseVisible(t)}traverseAncestors(t){let r=this.parent;r!==null&&(t(r),r.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].updateMatrixWorld(t)}updateWorldMatrix(t,r){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].updateWorldMatrix(!1,!0)}}toJSON(t){let r=t===void 0||typeof t=="string",i={};r&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){let d=l[u];n(t.shapes,d)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(r){let o=s(t.geometries),l=s(t.materials),u=s(t.textures),c=s(t.images),d=s(t.shapes),p=s(t.skeletons),f=s(t.animations),v=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=a,i;function s(o){let l=[];for(let u in o){let c=o[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,r=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),r===!0)for(let i=0;i<t.children.length;i++){let a=t.children[i];this.add(a.clone())}return this}};Pt.DEFAULT_UP=new C(0,1,0),Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kt=new C,yr=new C,Ys=new C,Er=new C,Ci=new C,Li=new C,bl=new C,Zs=new C,Js=new C,Ks=new C,$s=new rt,Qs=new rt,eo=new rt,sa=class qi{constructor(t=new C,r=new C,i=new C){this.a=t,this.b=r,this.c=i}static getNormal(t,r,i,a){a.subVectors(i,r),Kt.subVectors(t,r),a.cross(Kt);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,r,i,a,n){Kt.subVectors(a,r),yr.subVectors(i,r),Ys.subVectors(t,r);let s=Kt.dot(Kt),o=Kt.dot(yr),l=Kt.dot(Ys),u=yr.dot(yr),c=yr.dot(Ys),d=s*u-o*o;if(d===0)return n.set(0,0,0),null;let p=1/d,f=(u*l-o*c)*p,v=(s*c-o*l)*p;return n.set(1-f-v,v,f)}static containsPoint(t,r,i,a){return this.getBarycoord(t,r,i,a,Er)===null?!1:Er.x>=0&&Er.y>=0&&Er.x+Er.y<=1}static getInterpolation(t,r,i,a,n,s,o,l){return this.getBarycoord(t,r,i,a,Er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Er.x),l.addScaledVector(s,Er.y),l.addScaledVector(o,Er.z),l)}static getInterpolatedAttribute(t,r,i,a,n,s){return $s.setScalar(0),Qs.setScalar(0),eo.setScalar(0),$s.fromBufferAttribute(t,r),Qs.fromBufferAttribute(t,i),eo.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector($s,n.x),s.addScaledVector(Qs,n.y),s.addScaledVector(eo,n.z),s}static isFrontFacing(t,r,i,a){return Kt.subVectors(i,r),yr.subVectors(t,r),Kt.cross(yr).dot(a)<0}set(t,r,i){return this.a.copy(t),this.b.copy(r),this.c.copy(i),this}setFromPointsAndIndices(t,r,i,a){return this.a.copy(t[r]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,r,i,a){return this.a.fromBufferAttribute(t,r),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kt.subVectors(this.c,this.b),yr.subVectors(this.a,this.b),Kt.cross(yr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,r){return qi.getBarycoord(t,this.a,this.b,this.c,r)}getInterpolation(t,r,i,a,n){return qi.getInterpolation(t,this.a,this.b,this.c,r,i,a,n)}containsPoint(t){return qi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,r){let i=this.a,a=this.b,n=this.c,s,o;Ci.subVectors(a,i),Li.subVectors(n,i),Zs.subVectors(t,i);let l=Ci.dot(Zs),u=Li.dot(Zs);if(l<=0&&u<=0)return r.copy(i);Js.subVectors(t,a);let c=Ci.dot(Js),d=Li.dot(Js);if(c>=0&&d<=c)return r.copy(a);let p=l*d-c*u;if(p<=0&&l>=0&&c<=0)return s=l/(l-c),r.copy(i).addScaledVector(Ci,s);Ks.subVectors(t,n);let f=Ci.dot(Ks),v=Li.dot(Ks);if(v>=0&&f<=v)return r.copy(n);let g=f*u-l*v;if(g<=0&&u>=0&&v<=0)return o=u/(u-v),r.copy(i).addScaledVector(Li,o);let m=c*v-f*d;if(m<=0&&d-c>=0&&f-v>=0)return bl.subVectors(n,a),o=(d-c)/(d-c+(f-v)),r.copy(a).addScaledVector(bl,o);let h=1/(m+g+p);return s=g*h,o=p*h,r.copy(i).addScaledVector(Ci,s).addScaledVector(Li,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function to(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*6*(2/3-r):e}var Xe=class{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,r,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=r,Je.colorSpaceToWorking(this,i),this}setHSL(e,t,r,i=Je.workingColorSpace){if(e=Ns(e,1),t=He(t,0,1),r=He(r,0,1),t===0)this.r=this.g=this.b=r;else{let a=r<=.5?r*(1+t):r+t-r*t,n=2*r-a;this.r=to(n,a,e+1/3),this.g=to(n,a,e),this.b=to(n,a,e-1/3)}return Je.colorSpaceToWorking(this,i),this}setStyle(e,t=St){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=i[1],s=i[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=i[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let r=Tl[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return Je.workingToColorSpace(At.copy(this),e),Math.round(He(At.r*255,0,255))*65536+Math.round(He(At.g*255,0,255))*256+Math.round(He(At.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(At.copy(this),t);let r=At.r,i=At.g,a=At.b,n=Math.max(r,i,a),s=Math.min(r,i,a),o,l,u=(s+n)/2;if(s===n)o=0,l=0;else{let c=n-s;switch(l=u<=.5?c/(n+s):c/(2-n-s),n){case r:o=(i-a)/c+(i<a?6:0);break;case i:o=(a-r)/c+2;break;case a:o=(r-i)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=St){Je.workingToColorSpace(At.copy(this),e);let t=At.r,r=At.g,i=At.b;return e!==St?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(Fr),this.setHSL(Fr.h+e,Fr.s+t,Fr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Fr),e.getHSL(Ja);let r=ta(Fr.h,Ja.h,t),i=ta(Fr.s,Ja.s,t),a=ta(Fr.l,Ja.l,t);return this.setHSL(r,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,r=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*i,this.g=a[1]*t+a[4]*r+a[7]*i,this.b=a[2]*t+a[5]*r+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},At=new Xe;Xe.NAMES=Tl;var qh=0,Kr=class extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=di,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fn,this.blendDst=zn,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(r.blending=this.blending),this.side!==Ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Fn&&(r.blendSrc=this.blendSrc),this.blendDst!==zn&&(r.blendDst=this.blendDst),this.blendEquation!==Hr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==pi&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sl&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(r.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=i(e.textures),n=i(e.images);a.length>0&&(r.textures=a),n.length>0&&(r.images=n)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,r=null;if(t!==null){let i=t.length;r=new Array(i);for(let a=0;a!==i;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},oa=class extends Kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.combine=qn,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ft=new C,Ka=new oe,jh=0,$t=class{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=ll,this.updateRanges=[],this.gpuType=ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=xi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Lt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,a){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),i=Lt(i,this.array),a=Lt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ll&&(e.usage=this.usage),e}},wl=class extends $t{constructor(e,t,r){super(new Uint16Array(e),t,r)}},Al=class extends $t{constructor(e,t,r){super(new Uint32Array(e),t,r)}},Ke=class extends $t{constructor(e,t,r){super(new Float32Array(e),t,r)}},Yh=0,Vt=new nt,ro=new Pt,Pi=new C,Ft=new Ir,la=new Ir,yt=new C,Mt=class xc extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dl(t)?Al:wl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,r){return this.attributes[t]=r,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,r,i=0){this.groups.push({start:t,count:r,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,r){this.drawRange.start=t,this.drawRange.count=r}applyMatrix4(t){let r=this.attributes.position;r!==void 0&&(r.applyMatrix4(t),r.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let n=new We().getNormalMatrix(t);i.applyNormalMatrix(n),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vt.makeRotationFromQuaternion(t),this.applyMatrix4(Vt),this}rotateX(t){return Vt.makeRotationX(t),this.applyMatrix4(Vt),this}rotateY(t){return Vt.makeRotationY(t),this.applyMatrix4(Vt),this}rotateZ(t){return Vt.makeRotationZ(t),this.applyMatrix4(Vt),this}translate(t,r,i){return Vt.makeTranslation(t,r,i),this.applyMatrix4(Vt),this}scale(t,r,i){return Vt.makeScale(t,r,i),this.applyMatrix4(Vt),this}lookAt(t){return ro.lookAt(t),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){let r=this.getAttribute("position");if(r===void 0){let i=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ke(i,3))}else{let i=Math.min(t.length,r.count);for(let a=0;a<i;a++){let n=t[a];r.setXYZ(a,n.x,n.y,n.z||0)}t.length>r.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),r.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ir);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),r)for(let i=0,a=r.length;i<a;i++){let n=r[i];Ft.setFromBufferAttribute(n),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(Ft.setFromBufferAttribute(t),r)for(let n=0,s=r.length;n<s;n++){let o=r[n];la.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Ft.min,la.min),Ft.expandByPoint(yt),yt.addVectors(Ft.max,la.max),Ft.expandByPoint(yt)):(Ft.expandByPoint(la.min),Ft.expandByPoint(la.max))}Ft.getCenter(i);let a=0;for(let n=0,s=t.count;n<s;n++)yt.fromBufferAttribute(t,n),a=Math.max(a,i.distanceToSquared(yt));if(r)for(let n=0,s=r.length;n<s;n++){let o=r[n],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)yt.fromBufferAttribute(o,u),l&&(Pi.fromBufferAttribute(t,u),yt.add(Pi)),a=Math.max(a,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,r=this.attributes;if(t===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=r.position,a=r.normal,n=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*i.count),4));let s=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new C,l[R]=new C;let u=new C,c=new C,d=new C,p=new oe,f=new oe,v=new oe,g=new C,m=new C;function h(R,S,E){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,S),d.fromBufferAttribute(i,E),p.fromBufferAttribute(n,R),f.fromBufferAttribute(n,S),v.fromBufferAttribute(n,E),c.sub(u),d.sub(u),f.sub(p),v.sub(p);let A=1/(f.x*v.y-v.x*f.y);isFinite(A)&&(g.copy(c).multiplyScalar(v.y).addScaledVector(d,-f.y).multiplyScalar(A),m.copy(d).multiplyScalar(f.x).addScaledVector(c,-v.x).multiplyScalar(A),o[R].add(g),o[S].add(g),o[E].add(g),l[R].add(m),l[S].add(m),l[E].add(m))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let R=0,S=P.length;R<S;++R){let E=P[R],A=E.start,O=E.count;for(let B=A,z=A+O;B<z;B+=3)h(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let y=new C,b=new C,U=new C,x=new C;function T(R){U.fromBufferAttribute(a,R),x.copy(U);let S=o[R];y.copy(S),y.sub(U.multiplyScalar(U.dot(S))).normalize(),b.crossVectors(x,S);let E=b.dot(l[R])<0?-1:1;s.setXYZW(R,y.x,y.y,y.z,E)}for(let R=0,S=P.length;R<S;++R){let E=P[R],A=E.start,O=E.count;for(let B=A,z=A+O;B<z;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}}computeVertexNormals(){let t=this.index,r=this.getAttribute("position");if(r!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $t(new Float32Array(r.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);let a=new C,n=new C,s=new C,o=new C,l=new C,u=new C,c=new C,d=new C;if(t)for(let p=0,f=t.count;p<f;p+=3){let v=t.getX(p+0),g=t.getX(p+1),m=t.getX(p+2);a.fromBufferAttribute(r,v),n.fromBufferAttribute(r,g),s.fromBufferAttribute(r,m),c.subVectors(s,n),d.subVectors(a,n),c.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let p=0,f=r.count;p<f;p+=3)a.fromBufferAttribute(r,p+0),n.fromBufferAttribute(r,p+1),s.fromBufferAttribute(r,p+2),c.subVectors(s,n),d.subVectors(a,n),c.cross(d),i.setXYZ(p+0,c.x,c.y,c.z),i.setXYZ(p+1,c.x,c.y,c.z),i.setXYZ(p+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let r=0,i=t.count;r<i;r++)yt.fromBufferAttribute(t,r),yt.normalize(),t.setXYZ(r,yt.x,yt.y,yt.z)}toNonIndexed(){function t(o,l){let u=o.array,c=o.itemSize,d=o.normalized,p=new u.constructor(l.length*c),f=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*c;for(let h=0;h<c;h++)p[v++]=u[f++]}return new $t(p,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let r=new xc,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],u=t(l,i);r.setAttribute(o,u)}let n=this.morphAttributes;for(let o in n){let l=[],u=n[o];for(let c=0,d=u.length;c<d;c++){let p=u[c],f=t(p,i);l.push(f)}r.morphAttributes[o]=l}r.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let u=s[o];r.addGroup(u.start,u.count,u.materialIndex)}return r}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};let r=this.index;r!==null&&(t.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});let i=this.attributes;for(let l in i){let u=i[l];t.data.attributes[l]=u.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],c=[];for(let d=0,p=u.length;d<p;d++){let f=u[d];c.push(f.toJSON(t.data))}c.length>0&&(a[l]=c,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let r={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let a=t.attributes;for(let u in a){let c=a[u];this.setAttribute(u,c.clone(r))}let n=t.morphAttributes;for(let u in n){let c=[],d=n[u];for(let p=0,f=d.length;p<f;p++)c.push(d[p].clone(r));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let u=0,c=s.length;u<c;u++){let d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rl=new nt,$r=new ja,$a=new Ti,Cl=new C,Qa=new C,en=new C,tn=new C,io=new C,rn=new C,Ll=new C,an=new C,ct=class extends Pt{constructor(e=new Mt,t=new oa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=r.length;i<a;i++){let n=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=i}}}}getVertexPosition(e,t){let r=this.geometry,i=r.attributes.position,a=r.morphAttributes.position,n=r.morphTargetsRelative;t.fromBufferAttribute(i,e);let s=this.morphTargetInfluences;if(a&&s){rn.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let u=s[o],c=a[o];u!==0&&(io.fromBufferAttribute(c,e),n?rn.addScaledVector(io,u):rn.addScaledVector(io.sub(t),u))}t.add(rn)}return t}raycast(e,t){let r=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),$a.copy(r.boundingSphere),$a.applyMatrix4(a),$r.copy(e.ray).recast(e.near),!($a.containsPoint($r.origin)===!1&&($r.intersectSphere($a,Cl)===null||$r.origin.distanceToSquared(Cl)>(e.far-e.near)**2))&&(Rl.copy(a).invert(),$r.copy(e.ray).applyMatrix4(Rl),!(r.boundingBox!==null&&$r.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,$r)))}_computeIntersections(e,t,r){let i,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,c=a.attributes.normal,d=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(n))for(let f=0,v=d.length;f<v;f++){let g=d[f],m=n[g.materialIndex],h=Math.max(g.start,p.start),P=Math.min(s.count,Math.min(g.start+g.count,p.start+p.count));for(let y=h,b=P;y<b;y+=3){let U=s.getX(y),x=s.getX(y+1),T=s.getX(y+2);i=nn(this,m,e,r,l,u,c,U,x,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let f=Math.max(0,p.start),v=Math.min(s.count,p.start+p.count);for(let g=f,m=v;g<m;g+=3){let h=s.getX(g),P=s.getX(g+1),y=s.getX(g+2);i=nn(this,n,e,r,l,u,c,h,P,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(n))for(let f=0,v=d.length;f<v;f++){let g=d[f],m=n[g.materialIndex],h=Math.max(g.start,p.start),P=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=h,b=P;y<b;y+=3){let U=y,x=y+1,T=y+2;i=nn(this,m,e,r,l,u,c,U,x,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let f=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let g=f,m=v;g<m;g+=3){let h=g,P=g+1,y=g+2;i=nn(this,n,e,r,l,u,c,h,P,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Zh(e,t,r,i,a,n,s,o){let l;if(t.side===Ct?l=i.intersectTriangle(s,n,a,!0,o):l=i.intersectTriangle(a,n,s,t.side===Ar,o),l===null)return null;an.copy(o),an.applyMatrix4(e.matrixWorld);let u=r.ray.origin.distanceTo(an);return u<r.near||u>r.far?null:{distance:u,point:an.clone(),object:e}}function nn(e,t,r,i,a,n,s,o,l,u){e.getVertexPosition(o,Qa),e.getVertexPosition(l,en),e.getVertexPosition(u,tn);let c=Zh(e,t,r,i,Qa,en,tn,Ll);if(c){let d=new C;sa.getBarycoord(Ll,Qa,en,tn,d),a&&(c.uv=sa.getInterpolatedAttribute(a,o,l,u,d,new oe)),n&&(c.uv1=sa.getInterpolatedAttribute(n,o,l,u,d,new oe)),s&&(c.normal=sa.getInterpolatedAttribute(s,o,l,u,d,new C),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let p={a:o,b:l,c:u,normal:new C,materialIndex:0};sa.getNormal(Qa,en,tn,p.normal),c.face=p,c.barycoord=d}return c}var Qr=class yc extends Mt{constructor(t=1,r=1,i=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:r,depth:i,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],u=[],c=[],d=[],p=0,f=0;v("z","y","x",-1,-1,i,r,t,s,n,0),v("z","y","x",1,-1,i,r,-t,s,n,1),v("x","z","y",1,1,t,i,r,a,s,2),v("x","z","y",1,-1,t,i,-r,a,s,3),v("x","y","z",1,-1,t,r,i,a,n,4),v("x","y","z",-1,-1,t,r,-i,a,n,5),this.setIndex(l),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(d,2));function v(g,m,h,P,y,b,U,x,T,R,S){let E=b/T,A=U/R,O=b/2,B=U/2,z=x/2,W=T+1,k=R+1,$=0,G=0,re=new C;for(let pe=0;pe<k;pe++){let Le=pe*A-B;for(let De=0;De<W;De++){let $e=De*E-O;re[g]=$e*P,re[m]=Le*y,re[h]=z,u.push(re.x,re.y,re.z),re[g]=0,re[m]=0,re[h]=x>0?1:-1,c.push(re.x,re.y,re.z),d.push(De/T),d.push(1-pe/R),$+=1}}for(let pe=0;pe<R;pe++)for(let Le=0;Le<T;Le++){let De=p+Le+W*pe,$e=p+Le+W*(pe+1),Ye=p+(Le+1)+W*(pe+1),j=p+(Le+1)+W*pe;l.push(De,$e,j),l.push($e,Ye,j),G+=6}o.addGroup(f,G,S),f+=G,p+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ii(e){let t={};for(let r in e){t[r]={};for(let i in e[r]){let a=e[r][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[r][i]=null):t[r][i]=a.clone():Array.isArray(a)?t[r][i]=a.slice():t[r][i]=a}}return t}function It(e){let t={};for(let r=0;r<e.length;r++){let i=Ii(e[r]);for(let a in i)t[a]=i[a]}return t}function Jh(e){let t=[];for(let r=0;r<e.length;r++)t.push(e[r].clone());return t}function Pl(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Je.workingColorSpace}var Kh={clone:Ii,merge:It},$h=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zr=class extends Kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$h,this.fragmentShader=Qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=Jh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let r={};for(let i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}},Il=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Br=new C,Ul=new oe,Dl=new oe,zt=class extends Il{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(Qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Br.x,Br.y).multiplyScalar(-e/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Br.x,Br.y).multiplyScalar(-e/Br.z)}getViewSize(e,t){return this.getViewBounds(e,Ul,Dl),t.subVectors(Dl,Ul)}setViewOffset(e,t,r,i,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qi*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,a=-.5*i,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*i/o,t-=n.offsetY*r/l,i*=n.width/o,r*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ui=-90,Di=1,ed=class extends Pt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new zt(Ui,Di,e,t);i.layers=this.layers,this.add(i);let a=new zt(Ui,Di,e,t);a.layers=this.layers,this.add(a);let n=new zt(Ui,Di,e,t);n.layers=this.layers,this.add(n);let s=new zt(Ui,Di,e,t);s.layers=this.layers,this.add(s);let o=new zt(Ui,Di,e,t);o.layers=this.layers,this.add(o);let l=new zt(Ui,Di,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[r,i,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===nr)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===ka)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,u]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(t,a),e.setRenderTarget(r,1,i),e.render(t,n),e.setRenderTarget(r,2,i),e.render(t,s),e.setRenderTarget(r,3,i),e.render(t,o),e.setRenderTarget(r,4,i),e.render(t,l),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,i),e.render(t,u),e.setRenderTarget(c,d,p),e.xr.enabled=f,r.texture.needsPMREMUpdate=!0}},Nl=class extends kt{constructor(e=[],t=fi,r,i,a,n,s,o,l,u){super(e,t,r,i,a,n,s,o,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},td=class extends Yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new Nl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qr(5,5,5),a=new zr({name:"CubemapFromEquirect",uniforms:Ii(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ct,blending:Rr});a.uniforms.tEquirect.value=t;let n=new ct(i,a),s=t.minFilter;return t.minFilter===Wr&&(t.minFilter=rr),new ed(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,r=!0,i=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,r,i);e.setRenderTarget(a)}},sr=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},rd={type:"move"},ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,r),m=this._getHandJoint(l,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],d=u.position.distanceTo(c.position),p=.02,f=.005;l.inputState.pinching&&d>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&a!==null&&(i=a),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(rd)))}return s!==null&&(s.visible=i!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let r=new sr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}},Ol=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _r,this.environmentIntensity=1,this.environmentRotation=new _r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},id=class extends kt{constructor(e=null,t=1,r=1,i,a,n,s,o,l=Nt,u=Nt,c,d){super(null,n,s,o,l,u,i,a,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Fl=class extends $t{constructor(e,t,r,i=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ni=new nt,zl=new nt,sn=[],Bl=new Ir,ad=new nt,ua=new ct,ca=new Ti,nd=class extends ct{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fl(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<r;i++)this.setMatrixAt(i,ad)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ir),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Ni),Bl.copy(e.boundingBox).applyMatrix4(Ni),this.boundingBox.union(Bl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Ni),ca.copy(e.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let r=t.morphTargetInfluences,i=this.morphTexture.source.data.data,a=r.length+1,n=e*a+1;for(let s=0;s<r.length;s++)r[s]=i[n+s]}raycast(e,t){let r=this.matrixWorld,i=this.count;if(ua.geometry=this.geometry,ua.material=this.material,ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(r),e.ray.intersectsSphere(ca)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,Ni),zl.multiplyMatrices(r,Ni),ua.matrixWorld=zl,ua.raycast(e,sn);for(let n=0,s=sn.length;n<s;n++){let o=sn[n];o.instanceId=a,o.object=this,t.push(o)}sn.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let r=t.morphTargetInfluences,i=r.length+1;this.morphTexture===null&&(this.morphTexture=new id(new Float32Array(i*this.count),i,this.count,es,ar));let a=this.morphTexture.source.data.data,n=0;for(let l=0;l<r.length;l++)n+=r[l];let s=this.geometry.morphTargetsRelative?1:1-n,o=i*e;a[o]=s,a.set(r,o+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},no=new C,sd=new C,od=new We,Sr=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){let i=no.subVectors(r,t).cross(sd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let r=e.delta(no),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let r=t||od.getNormalMatrix(e),i=this.coplanarPoint(no).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ei=new Ti,ld=new oe(.5,.5),on=new C,so=class{constructor(e=new Sr,t=new Sr,r=new Sr,i=new Sr,a=new Sr,n=new Sr){this.planes=[e,t,r,i,a,n]}set(e,t,r,i,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(i),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=nr,r=!1){let i=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],u=a[4],c=a[5],d=a[6],p=a[7],f=a[8],v=a[9],g=a[10],m=a[11],h=a[12],P=a[13],y=a[14],b=a[15];if(i[0].setComponents(l-n,p-u,m-f,b-h).normalize(),i[1].setComponents(l+n,p+u,m+f,b+h).normalize(),i[2].setComponents(l+s,p+c,m+v,b+P).normalize(),i[3].setComponents(l-s,p-c,m-v,b-P).normalize(),r)i[4].setComponents(o,d,g,y).normalize(),i[5].setComponents(l-o,p-d,m-g,b-y).normalize();else if(i[4].setComponents(l-o,p-d,m-g,b-y).normalize(),t===nr)i[5].setComponents(l+o,p+d,m+g,b+y).normalize();else if(t===ka)i[5].setComponents(o,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){ei.center.set(0,0,0);let t=ld.distanceTo(e.center);return ei.radius=.7071067811865476+t,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){let t=this.planes,r=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let r=0;r<6;r++){let i=t[r];if(on.x=i.normal.x>0?e.max.x:e.min.x,on.y=i.normal.y>0?e.max.y:e.min.y,on.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(on)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},kl=class extends Kr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ln=new C,un=new C,Vl=new nt,ha=new ja,cn=new Ti,oo=new C,Hl=new C,ud=class extends Pt{constructor(e=new Mt,t=new kl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,r=[0];for(let i=1,a=t.count;i<a;i++)ln.fromBufferAttribute(t,i-1),un.fromBufferAttribute(t,i),r[i]=r[i-1],r[i]+=ln.distanceTo(un);e.setAttribute("lineDistance",new Ke(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let r=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,n=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),cn.copy(r.boundingSphere),cn.applyMatrix4(i),cn.radius+=a,e.ray.intersectsSphere(cn)===!1)return;Vl.copy(i).invert(),ha.copy(e.ray).applyMatrix4(Vl);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=this.isLineSegments?2:1,u=r.index,c=r.attributes.position;if(u!==null){let d=Math.max(0,n.start),p=Math.min(u.count,n.start+n.count);for(let f=d,v=p-1;f<v;f+=l){let g=u.getX(f),m=u.getX(f+1),h=hn(this,e,ha,o,g,m,f);h&&t.push(h)}if(this.isLineLoop){let f=u.getX(p-1),v=u.getX(d),g=hn(this,e,ha,o,f,v,p-1);g&&t.push(g)}}else{let d=Math.max(0,n.start),p=Math.min(c.count,n.start+n.count);for(let f=d,v=p-1;f<v;f+=l){let g=hn(this,e,ha,o,f,f+1,f);g&&t.push(g)}if(this.isLineLoop){let f=hn(this,e,ha,o,p-1,d,p-1);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=r.length;i<a;i++){let n=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=i}}}}};function hn(e,t,r,i,a,n,s){let o=e.geometry.attributes.position;if(ln.fromBufferAttribute(o,a),un.fromBufferAttribute(o,n),r.distanceSqToSegment(ln,un,oo,Hl)>i)return;oo.applyMatrix4(e.matrixWorld);let l=t.ray.origin.distanceTo(oo);if(!(l<t.near||l>t.far))return{distance:l,point:Hl.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}var Gl=new C,Wl=new C,cd=class extends ud{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,r=[];for(let i=0,a=t.count;i<a;i+=2)Gl.fromBufferAttribute(t,i),Wl.fromBufferAttribute(t,i+1),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+Gl.distanceTo(Wl);e.setAttribute("lineDistance",new Ke(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},da=class extends kt{constructor(e,t,r,i,a,n,s,o,l){super(e,t,r,i,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xl=class extends kt{constructor(e,t,r=Xr,i,a,n,s=Nt,o=Nt,l,u=Ki,c=1){if(u!==Ki&&u!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:c};super(d,i,a,n,s,o,u,r,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ql=class extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},pa=class Ec extends Mt{constructor(t=1,r=1,i=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:r,height:i,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let u=this;a=Math.floor(a),n=Math.floor(n);let c=[],d=[],p=[],f=[],v=0,g=[],m=i/2,h=0;P(),s===!1&&(t>0&&y(!0),r>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new Ke(d,3)),this.setAttribute("normal",new Ke(p,3)),this.setAttribute("uv",new Ke(f,2));function P(){let b=new C,U=new C,x=0,T=(r-t)/i;for(let R=0;R<=n;R++){let S=[],E=R/n,A=E*(r-t)+t;for(let O=0;O<=a;O++){let B=O/a,z=B*l+o,W=Math.sin(z),k=Math.cos(z);U.x=A*W,U.y=-E*i+m,U.z=A*k,d.push(U.x,U.y,U.z),b.set(W,T,k).normalize(),p.push(b.x,b.y,b.z),f.push(B,1-E),S.push(v++)}g.push(S)}for(let R=0;R<a;R++)for(let S=0;S<n;S++){let E=g[S][R],A=g[S+1][R],O=g[S+1][R+1],B=g[S][R+1];(t>0||S!==0)&&(c.push(E,A,B),x+=3),(r>0||S!==n-1)&&(c.push(A,O,B),x+=3)}u.addGroup(h,x,0),h+=x}function y(b){let U=v,x=new oe,T=new C,R=0,S=b===!0?t:r,E=b===!0?1:-1;for(let O=1;O<=a;O++)d.push(0,m*E,0),p.push(0,E,0),f.push(.5,.5),v++;let A=v;for(let O=0;O<=a;O++){let B=O/a*l+o,z=Math.cos(B),W=Math.sin(B);T.x=S*W,T.y=m*E,T.z=S*z,d.push(T.x,T.y,T.z),p.push(0,E,0),x.x=z*.5+.5,x.y=W*.5*E+.5,f.push(x.x,x.y),v++}for(let O=0;O<a;O++){let B=U+O,z=A+O;b===!0?c.push(z,z+1,B):c.push(z+1,z,B),R+=3}u.addGroup(h,R,b===!0?1:2),h+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ec(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},or=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],r,i=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)r=this.getPoint(n/e),a+=r.distanceTo(i),t.push(a),i=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let r=this.getLengths(),i=0,a=r.length,n;t?n=t:n=e*r[a-1];let s=0,o=a-1,l;for(;s<=o;)if(i=Math.floor(s+(o-s)/2),l=r[i]-n,l<0)s=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,r[i]===n)return i/(a-1);let u=r[i],c=r[i+1]-u,d=(n-u)/c;return(i+d)/(a-1)}getTangent(e,t){let r=e-1e-4,i=e+1e-4;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),n=this.getPoint(i),s=t||(a.isVector2?new oe:new C);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){let r=new C,i=[],a=[],n=[],s=new C,o=new nt;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new C)}a[0]=new C,n[0]=new C;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),c=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=l&&(l=u,r.set(1,0,0)),c<=l&&(l=c,r.set(0,1,0)),d<=l&&r.set(0,0,1),s.crossVectors(i[0],r).normalize(),a[0].crossVectors(i[0],s),n[0].crossVectors(i[0],a[0]);for(let p=1;p<=e;p++){if(a[p]=a[p-1].clone(),n[p]=n[p-1].clone(),s.crossVectors(i[p-1],i[p]),s.length()>Number.EPSILON){s.normalize();let f=Math.acos(He(i[p-1].dot(i[p]),-1,1));a[p].applyMatrix4(o.makeRotationAxis(s,f))}n[p].crossVectors(i[p],a[p])}if(t===!0){let p=Math.acos(He(a[0].dot(a[e]),-1,1));p/=e,i[0].dot(s.crossVectors(a[0],a[e]))>0&&(p=-p);for(let f=1;f<=e;f++)a[f].applyMatrix4(o.makeRotationAxis(i[f],p*f)),n[f].crossVectors(i[f],a[f])}return{tangents:i,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},lo=class extends or{constructor(e=0,t=0,r=1,i=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new oe){let r=t,i=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(n?a=0:a=i),this.aClockwise===!0&&!n&&(a===i?a=-i:a=a-i);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let u=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=o-this.aX,p=l-this.aY;o=d*u-p*c+this.aX,l=d*c+p*u+this.aY}return r.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},hd=class extends lo{constructor(e,t,r,i,a,n){super(e,t,r,r,i,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function uo(){let e=0,t=0,r=0,i=0;function a(n,s,o,l){e=n,t=o,r=-3*n+3*s-2*o-l,i=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,u){a(s,o,u*(o-n),u*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,u,c,d){let p=(s-n)/u-(o-n)/(u+c)+(o-s)/c,f=(o-s)/c-(l-s)/(c+d)+(l-o)/d;p*=c,f*=c,a(s,o,p,f)},calc:function(n){let s=n*n,o=s*n;return e+t*n+r*s+i*o}}}var dn=new C,co=new uo,ho=new uo,po=new uo,pn=class extends or{constructor(e=[],t=!1,r="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=i}getPoint(e,t=new C){let r=t,i=this.points,a=i.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,u;this.closed||s>0?l=i[(s-1)%a]:(dn.subVectors(i[0],i[1]).add(i[0]),l=dn);let c=i[s%a],d=i[(s+1)%a];if(this.closed||s+2<a?u=i[(s+2)%a]:(dn.subVectors(i[a-1],i[a-2]).add(i[a-1]),u=dn),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(c),p),v=Math.pow(c.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),f<1e-4&&(f=v),g<1e-4&&(g=v),co.initNonuniformCatmullRom(l.x,c.x,d.x,u.x,f,v,g),ho.initNonuniformCatmullRom(l.y,c.y,d.y,u.y,f,v,g),po.initNonuniformCatmullRom(l.z,c.z,d.z,u.z,f,v,g)}else this.curveType==="catmullrom"&&(co.initCatmullRom(l.x,c.x,d.x,u.x,this.tension),ho.initCatmullRom(l.y,c.y,d.y,u.y,this.tension),po.initCatmullRom(l.z,c.z,d.z,u.z,this.tension));return r.set(co.calc(o),ho.calc(o),po.calc(o)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function jl(e,t,r,i,a){let n=(i-t)*.5,s=(a-r)*.5,o=e*e,l=e*o;return(2*r-2*i+n+s)*l+(-3*r+3*i-2*n-s)*o+n*e+r}function dd(e,t){let r=1-e;return r*r*t}function pd(e,t){return 2*(1-e)*e*t}function fd(e,t){return e*e*t}function fa(e,t,r,i){return dd(e,t)+pd(e,r)+fd(e,i)}function md(e,t){let r=1-e;return r*r*r*t}function gd(e,t){let r=1-e;return 3*r*r*e*t}function vd(e,t){return 3*(1-e)*e*e*t}function _d(e,t){return e*e*e*t}function ma(e,t,r,i,a){return md(e,t)+gd(e,r)+vd(e,i)+_d(e,a)}var Yl=class extends or{constructor(e=new oe,t=new oe,r=new oe,i=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new oe){let r=t,i=this.v0,a=this.v1,n=this.v2,s=this.v3;return r.set(ma(e,i.x,a.x,n.x,s.x),ma(e,i.y,a.y,n.y,s.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xd=class extends or{constructor(e=new C,t=new C,r=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new C){let r=t,i=this.v0,a=this.v1,n=this.v2,s=this.v3;return r.set(ma(e,i.x,a.x,n.x,s.x),ma(e,i.y,a.y,n.y,s.y),ma(e,i.z,a.z,n.z,s.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zl=class extends or{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yd=class extends or{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jl=class extends or{constructor(e=new oe,t=new oe,r=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new oe){let r=t,i=this.v0,a=this.v1,n=this.v2;return r.set(fa(e,i.x,a.x,n.x),fa(e,i.y,a.y,n.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kl=class extends or{constructor(e=new C,t=new C,r=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new C){let r=t,i=this.v0,a=this.v1,n=this.v2;return r.set(fa(e,i.x,a.x,n.x),fa(e,i.y,a.y,n.y),fa(e,i.z,a.z,n.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$l=class extends or{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let r=t,i=this.points,a=(i.length-1)*e,n=Math.floor(a),s=a-n,o=i[n===0?n:n-1],l=i[n],u=i[n>i.length-2?i.length-1:n+1],c=i[n>i.length-3?i.length-1:n+2];return r.set(jl(s,o.x,l.x,u.x,c.x),jl(s,o.y,l.y,u.y,c.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(new oe().fromArray(i))}return this}},fn=Object.freeze({__proto__:null,ArcCurve:hd,CatmullRomCurve3:pn,CubicBezierCurve:Yl,CubicBezierCurve3:xd,EllipseCurve:lo,LineCurve:Zl,LineCurve3:yd,QuadraticBezierCurve:Jl,QuadraticBezierCurve3:Kl,SplineCurve:$l}),Ed=class extends or{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fn[r](t,e))}return this}getPoint(e,t){let r=e*this.getLength(),i=this.getCurveLengths(),a=0;for(;a<i.length;){if(i[a]>=r){let n=i[a]-r,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let r=0,i=this.curves.length;r<i;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],r;for(let i=0,a=this.curves;i<a.length;i++){let n=a[i],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let u=o[l];r&&r.equals(u)||(t.push(u),r=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let i=e.curves[t];this.curves.push(new fn[i.type]().fromJSON(i))}return this}},Ql=class extends Ed{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let r=new Zl(this.currentPoint.clone(),new oe(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,i){let a=new Jl(this.currentPoint.clone(),new oe(e,t),new oe(r,i));return this.curves.push(a),this.currentPoint.set(r,i),this}bezierCurveTo(e,t,r,i,a,n){let s=new Yl(this.currentPoint.clone(),new oe(e,t),new oe(r,i),new oe(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),r=new $l(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,i,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,r,i,a,n),this}absarc(e,t,r,i,a,n){return this.absellipse(e,t,r,r,i,a,n),this}ellipse(e,t,r,i,a,n,s,o){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,r,i,a,n,s,o),this}absellipse(e,t,r,i,a,n,s,o){let l=new lo(e,t,r,i,a,n,s,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},mn=class extends Ql{constructor(e){super(e),this.uuid=jr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let r=0,i=this.holes.length;r<i;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let i=e.holes[t];this.holes.push(new Ql().fromJSON(i))}return this}};function Sd(e,t,r=2){let i=t&&t.length,a=i?t[0]*r:e.length,n=eu(e,0,a,r,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,u;if(i&&(n=Ad(e,t,n,r)),e.length>80*r){o=1/0,l=1/0;let c=-1/0,d=-1/0;for(let p=r;p<a;p+=r){let f=e[p],v=e[p+1];f<o&&(o=f),v<l&&(l=v),f>c&&(c=f),v>d&&(d=v)}u=Math.max(c-o,d-l),u=u!==0?32767/u:0}return ga(n,s,r,o,l,u,0),s}function eu(e,t,r,i,a){let n;if(a===zd(e,t,r,i)>0)for(let s=t;s<r;s+=i)n=au(s/i|0,e[s],e[s+1],n);else for(let s=r-i;s>=t;s-=i)n=au(s/i|0,e[s],e[s+1],n);return n&&Oi(n,n.next)&&(xa(n),n=n.next),n}function ti(e,t){if(!e)return e;t||(t=e);let r=e,i;do if(i=!1,!r.steiner&&(Oi(r,r.next)||ot(r.prev,r,r.next)===0)){if(xa(r),r=t=r.prev,r===r.next)break;i=!0}else r=r.next;while(i||r!==t);return t}function ga(e,t,r,i,a,n,s){if(!e)return;!s&&n&&Id(e,i,a,n);let o=e;for(;e.prev!==e.next;){let l=e.prev,u=e.next;if(n?bd(e,i,a,n):Md(e)){t.push(l.i,e.i,u.i),xa(e),e=u.next,o=u.next;continue}if(e=u,e===o){s?s===1?(e=Td(ti(e),t),ga(e,t,r,i,a,n,2)):s===2&&wd(e,t,r,i,a,n):ga(ti(e),t,r,i,a,n,1);break}}}function Md(e){let t=e.prev,r=e,i=e.next;if(ot(t,r,i)>=0)return!1;let a=t.x,n=r.x,s=i.x,o=t.y,l=r.y,u=i.y,c=Math.min(a,n,s),d=Math.min(o,l,u),p=Math.max(a,n,s),f=Math.max(o,l,u),v=i.next;for(;v!==t;){if(v.x>=c&&v.x<=p&&v.y>=d&&v.y<=f&&va(a,o,n,l,s,u,v.x,v.y)&&ot(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function bd(e,t,r,i){let a=e.prev,n=e,s=e.next;if(ot(a,n,s)>=0)return!1;let o=a.x,l=n.x,u=s.x,c=a.y,d=n.y,p=s.y,f=Math.min(o,l,u),v=Math.min(c,d,p),g=Math.max(o,l,u),m=Math.max(c,d,p),h=fo(f,v,t,r,i),P=fo(g,m,t,r,i),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=h&&b&&b.z<=P;){if(y.x>=f&&y.x<=g&&y.y>=v&&y.y<=m&&y!==a&&y!==s&&va(o,c,l,d,u,p,y.x,y.y)&&ot(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=f&&b.x<=g&&b.y>=v&&b.y<=m&&b!==a&&b!==s&&va(o,c,l,d,u,p,b.x,b.y)&&ot(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=h;){if(y.x>=f&&y.x<=g&&y.y>=v&&y.y<=m&&y!==a&&y!==s&&va(o,c,l,d,u,p,y.x,y.y)&&ot(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=P;){if(b.x>=f&&b.x<=g&&b.y>=v&&b.y<=m&&b!==a&&b!==s&&va(o,c,l,d,u,p,b.x,b.y)&&ot(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Td(e,t){let r=e;do{let i=r.prev,a=r.next.next;!Oi(i,a)&&ru(i,r,r.next,a)&&_a(i,a)&&_a(a,i)&&(t.push(i.i,r.i,a.i),xa(r),xa(r.next),r=e=a),r=r.next}while(r!==e);return ti(r)}function wd(e,t,r,i,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&Nd(s,o)){let l=iu(s,o);s=ti(s,s.next),l=ti(l,l.next),ga(s,t,r,i,a,n,0),ga(l,t,r,i,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function Ad(e,t,r,i){let a=[];for(let n=0,s=t.length;n<s;n++){let o=t[n]*i,l=n<s-1?t[n+1]*i:e.length,u=eu(e,o,l,i,!1);u===u.next&&(u.steiner=!0),a.push(Dd(u))}a.sort(Rd);for(let n=0;n<a.length;n++)r=Cd(a[n],r);return r}function Rd(e,t){let r=e.x-t.x;if(r===0&&(r=e.y-t.y,r===0)){let i=(e.next.y-e.y)/(e.next.x-e.x),a=(t.next.y-t.y)/(t.next.x-t.x);r=i-a}return r}function Cd(e,t){let r=Ld(e,t);if(!r)return t;let i=iu(r,e);return ti(i,i.next),ti(r,r.next)}function Ld(e,t){let r=t,i=e.x,a=e.y,n=-1/0,s;if(Oi(e,r))return r;do{if(Oi(e,r.next))return r.next;if(a<=r.y&&a>=r.next.y&&r.next.y!==r.y){let d=r.x+(a-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(d<=i&&d>n&&(n=d,s=r.x<r.next.x?r:r.next,d===i))return s}r=r.next}while(r!==t);if(!s)return null;let o=s,l=s.x,u=s.y,c=1/0;r=s;do{if(i>=r.x&&r.x>=l&&i!==r.x&&tu(a<u?i:n,a,l,u,a<u?n:i,a,r.x,r.y)){let d=Math.abs(a-r.y)/(i-r.x);_a(r,e)&&(d<c||d===c&&(r.x>s.x||r.x===s.x&&Pd(s,r)))&&(s=r,c=d)}r=r.next}while(r!==o);return s}function Pd(e,t){return ot(e.prev,e,t.prev)<0&&ot(t.next,e,e.next)<0}function Id(e,t,r,i){let a=e;do a.z===0&&(a.z=fo(a.x,a.y,t,r,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,Ud(a)}function Ud(e){let t,r=1;do{let i=e,a;e=null;let n=null;for(t=0;i;){t++;let s=i,o=0;for(let u=0;u<r&&(o++,s=s.nextZ,!!s);u++);let l=r;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||i.z<=s.z)?(a=i,i=i.nextZ,o--):(a=s,s=s.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;i=s}n.nextZ=null,r*=2}while(t>1);return e}function fo(e,t,r,i,a){return e=(e-r)*a|0,t=(t-i)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Dd(e){let t=e,r=e;do(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next;while(t!==e);return r}function tu(e,t,r,i,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(i-o)>=(r-s)*(t-o)&&(r-s)*(n-o)>=(a-s)*(i-o)}function va(e,t,r,i,a,n,s,o){return!(e===s&&t===o)&&tu(e,t,r,i,a,n,s,o)}function Nd(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Od(e,t)&&(_a(e,t)&&_a(t,e)&&Fd(e,t)&&(ot(e.prev,e,t.prev)||ot(e,t.prev,t))||Oi(e,t)&&ot(e.prev,e,e.next)>0&&ot(t.prev,t,t.next)>0)}function ot(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function Oi(e,t){return e.x===t.x&&e.y===t.y}function ru(e,t,r,i){let a=vn(ot(e,t,r)),n=vn(ot(e,t,i)),s=vn(ot(r,i,e)),o=vn(ot(r,i,t));return!!(a!==n&&s!==o||a===0&&gn(e,r,t)||n===0&&gn(e,i,t)||s===0&&gn(r,e,i)||o===0&&gn(r,t,i))}function gn(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function vn(e){return e>0?1:e<0?-1:0}function Od(e,t){let r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&ru(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function _a(e,t){return ot(e.prev,e,e.next)<0?ot(e,t,e.next)>=0&&ot(e,e.prev,t)>=0:ot(e,t,e.prev)<0||ot(e,e.next,t)<0}function Fd(e,t){let r=e,i=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do r.y>n!=r.next.y>n&&r.next.y!==r.y&&a<(r.next.x-r.x)*(n-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==e);return i}function iu(e,t){let r=mo(e.i,e.x,e.y),i=mo(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,r.next=a,a.prev=r,i.next=r,r.prev=i,n.next=i,i.prev=n,i}function au(e,t,r,i){let a=mo(e,t,r);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function xa(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function mo(e,t,r){return{i:e,x:t,y:r,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function zd(e,t,r,i){let a=0;for(let n=t,s=r-i;n<r;n+=i)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}var Bd=class{static triangulate(e,t,r=2){return Sd(e,t,r)}},_n=class Sc{static area(t){let r=t.length,i=0;for(let a=r-1,n=0;n<r;a=n++)i+=t[a].x*t[n].y-t[n].x*t[a].y;return i*.5}static isClockWise(t){return Sc.area(t)<0}static triangulateShape(t,r){let i=[],a=[],n=[];nu(t),su(i,t);let s=t.length;r.forEach(nu);for(let l=0;l<r.length;l++)a.push(s),s+=r[l].length,su(i,r[l]);let o=Bd.triangulate(i,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function nu(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function su(e,t){for(let r=0;r<t.length;r++)e.push(t[r].x),e.push(t[r].y)}var go=class Mc extends Mt{constructor(t=new mn([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),r={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:r},t=Array.isArray(t)?t:[t];let i=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let u=t[o];s(u)}this.setAttribute("position",new Ke(a,3)),this.setAttribute("uv",new Ke(n,2)),this.computeVertexNormals();function s(o){let l=[],u=r.curveSegments!==void 0?r.curveSegments:12,c=r.steps!==void 0?r.steps:1,d=r.depth!==void 0?r.depth:1,p=r.bevelEnabled!==void 0?r.bevelEnabled:!0,f=r.bevelThickness!==void 0?r.bevelThickness:.2,v=r.bevelSize!==void 0?r.bevelSize:f-.1,g=r.bevelOffset!==void 0?r.bevelOffset:0,m=r.bevelSegments!==void 0?r.bevelSegments:3,h=r.extrudePath,P=r.UVGenerator!==void 0?r.UVGenerator:kd,y,b=!1,U,x,T,R;h&&(y=h.getSpacedPoints(c),b=!0,p=!1,U=h.computeFrenetFrames(c,!1),x=new C,T=new C,R=new C),p||(m=0,f=0,v=0,g=0);let S=o.extractPoints(u),E=S.shape,A=S.holes;if(!_n.isClockWise(E)){E=E.reverse();for(let Y=0,Q=A.length;Y<Q;Y++){let ee=A[Y];_n.isClockWise(ee)&&(A[Y]=ee.reverse())}}function O(Y){let Q=10000000000000001e-36,ee=Y[0];for(let Z=1;Z<=Y.length;Z++){let de=Z%Y.length,ae=Y[de],se=ae.x-ee.x,Be=ae.y-ee.y,Ve=se*se+Be*Be,ke=Math.max(Math.abs(ae.x),Math.abs(ae.y),Math.abs(ee.x),Math.abs(ee.y)),w=Q*ke*ke;if(Ve<=w){Y.splice(de,1),Z--;continue}ee=ae}}O(E),A.forEach(O);let B=A.length,z=E;for(let Y=0;Y<B;Y++){let Q=A[Y];E=E.concat(Q)}function W(Y,Q,ee){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(Q,ee)}let k=E.length;function $(Y,Q,ee){let Z,de,ae,se=Y.x-Q.x,Be=Y.y-Q.y,Ve=ee.x-Y.x,ke=ee.y-Y.y,w=se*se+Be*Be,_=se*ke-Be*Ve;if(Math.abs(_)>Number.EPSILON){let N=Math.sqrt(w),q=Math.sqrt(Ve*Ve+ke*ke),J=Q.x-Be/N,X=Q.y+se/N,ye=ee.x-ke/q,le=ee.y+Ve/q,be=((ye-J)*ke-(le-X)*Ve)/(se*ke-Be*Ve);Z=J+se*be-Y.x,de=X+Be*be-Y.y;let Ae=Z*Z+de*de;if(Ae<=2)return new oe(Z,de);ae=Math.sqrt(Ae/2)}else{let N=!1;se>Number.EPSILON?Ve>Number.EPSILON&&(N=!0):se<-Number.EPSILON?Ve<-Number.EPSILON&&(N=!0):Math.sign(Be)===Math.sign(ke)&&(N=!0),N?(Z=-Be,de=se,ae=Math.sqrt(w)):(Z=se,de=Be,ae=Math.sqrt(w/2))}return new oe(Z/ae,de/ae)}let G=[];for(let Y=0,Q=z.length,ee=Q-1,Z=Y+1;Y<Q;Y++,ee++,Z++)ee===Q&&(ee=0),Z===Q&&(Z=0),G[Y]=$(z[Y],z[ee],z[Z]);let re=[],pe,Le=G.concat();for(let Y=0,Q=B;Y<Q;Y++){let ee=A[Y];pe=[];for(let Z=0,de=ee.length,ae=de-1,se=Z+1;Z<de;Z++,ae++,se++)ae===de&&(ae=0),se===de&&(se=0),pe[Z]=$(ee[Z],ee[ae],ee[se]);re.push(pe),Le=Le.concat(pe)}let De;if(m===0)De=_n.triangulateShape(z,A);else{let Y=[],Q=[];for(let ee=0;ee<m;ee++){let Z=ee/m,de=f*Math.cos(Z*Math.PI/2),ae=v*Math.sin(Z*Math.PI/2)+g;for(let se=0,Be=z.length;se<Be;se++){let Ve=W(z[se],G[se],ae);xe(Ve.x,Ve.y,-de),Z===0&&Y.push(Ve)}for(let se=0,Be=B;se<Be;se++){let Ve=A[se];pe=re[se];let ke=[];for(let w=0,_=Ve.length;w<_;w++){let N=W(Ve[w],pe[w],ae);xe(N.x,N.y,-de),Z===0&&ke.push(N)}Z===0&&Q.push(ke)}}De=_n.triangulateShape(Y,Q)}let $e=De.length,Ye=v+g;for(let Y=0;Y<k;Y++){let Q=p?W(E[Y],Le[Y],Ye):E[Y];b?(T.copy(U.normals[0]).multiplyScalar(Q.x),x.copy(U.binormals[0]).multiplyScalar(Q.y),R.copy(y[0]).add(T).add(x),xe(R.x,R.y,R.z)):xe(Q.x,Q.y,0)}for(let Y=1;Y<=c;Y++)for(let Q=0;Q<k;Q++){let ee=p?W(E[Q],Le[Q],Ye):E[Q];b?(T.copy(U.normals[Y]).multiplyScalar(ee.x),x.copy(U.binormals[Y]).multiplyScalar(ee.y),R.copy(y[Y]).add(T).add(x),xe(R.x,R.y,R.z)):xe(ee.x,ee.y,d/c*Y)}for(let Y=m-1;Y>=0;Y--){let Q=Y/m,ee=f*Math.cos(Q*Math.PI/2),Z=v*Math.sin(Q*Math.PI/2)+g;for(let de=0,ae=z.length;de<ae;de++){let se=W(z[de],G[de],Z);xe(se.x,se.y,d+ee)}for(let de=0,ae=A.length;de<ae;de++){let se=A[de];pe=re[de];for(let Be=0,Ve=se.length;Be<Ve;Be++){let ke=W(se[Be],pe[Be],Z);b?xe(ke.x,ke.y+y[c-1].y,y[c-1].x+ee):xe(ke.x,ke.y,d+ee)}}}j(),ue();function j(){let Y=a.length/3;if(p){let Q=0,ee=k*Q;for(let Z=0;Z<$e;Z++){let de=De[Z];Ie(de[2]+ee,de[1]+ee,de[0]+ee)}Q=c+m*2,ee=k*Q;for(let Z=0;Z<$e;Z++){let de=De[Z];Ie(de[0]+ee,de[1]+ee,de[2]+ee)}}else{for(let Q=0;Q<$e;Q++){let ee=De[Q];Ie(ee[2],ee[1],ee[0])}for(let Q=0;Q<$e;Q++){let ee=De[Q];Ie(ee[0]+k*c,ee[1]+k*c,ee[2]+k*c)}}i.addGroup(Y,a.length/3-Y,0)}function ue(){let Y=a.length/3,Q=0;he(z,Q),Q+=z.length;for(let ee=0,Z=A.length;ee<Z;ee++){let de=A[ee];he(de,Q),Q+=de.length}i.addGroup(Y,a.length/3-Y,1)}function he(Y,Q){let ee=Y.length;for(;--ee>=0;){let Z=ee,de=ee-1;de<0&&(de=Y.length-1);for(let ae=0,se=c+m*2;ae<se;ae++){let Be=k*ae,Ve=k*(ae+1),ke=Q+Z+Be,w=Q+de+Be,_=Q+de+Ve,N=Q+Z+Ve;Me(ke,w,_,N)}}}function xe(Y,Q,ee){l.push(Y),l.push(Q),l.push(ee)}function Ie(Y,Q,ee){qe(Y),qe(Q),qe(ee);let Z=a.length/3,de=P.generateTopUV(i,a,Z-3,Z-2,Z-1);L(de[0]),L(de[1]),L(de[2])}function Me(Y,Q,ee,Z){qe(Y),qe(Q),qe(Z),qe(Q),qe(ee),qe(Z);let de=a.length/3,ae=P.generateSideWallUV(i,a,de-6,de-3,de-2,de-1);L(ae[0]),L(ae[1]),L(ae[3]),L(ae[1]),L(ae[2]),L(ae[3])}function qe(Y){a.push(l[Y*3+0]),a.push(l[Y*3+1]),a.push(l[Y*3+2])}function L(Y){n.push(Y.x),n.push(Y.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),r=this.parameters.shapes,i=this.parameters.options;return Vd(r,i,t)}static fromJSON(t,r){let i=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=r[t.shapes[n]];i.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new fn[a.type]().fromJSON(a)),new Mc(i,t.options)}},kd={generateTopUV:function(e,t,r,i,a){let n=t[r*3],s=t[r*3+1],o=t[i*3],l=t[i*3+1],u=t[a*3],c=t[a*3+1];return[new oe(n,s),new oe(o,l),new oe(u,c)]},generateSideWallUV:function(e,t,r,i,a,n){let s=t[r*3],o=t[r*3+1],l=t[r*3+2],u=t[i*3],c=t[i*3+1],d=t[i*3+2],p=t[a*3],f=t[a*3+1],v=t[a*3+2],g=t[n*3],m=t[n*3+1],h=t[n*3+2];return Math.abs(o-c)<Math.abs(s-u)?[new oe(s,1-l),new oe(u,1-d),new oe(p,1-v),new oe(g,1-h)]:[new oe(o,1-l),new oe(c,1-d),new oe(f,1-v),new oe(m,1-h)]}};function Vd(e,t,r){if(r.shapes=[],Array.isArray(e))for(let i=0,a=e.length;i<a;i++){let n=e[i];r.shapes.push(n.uuid)}else r.shapes.push(e.uuid);return r.options=Object.assign({},t),t.extrudePath!==void 0&&(r.options.extrudePath=t.extrudePath.toJSON()),r}var ya=class bc extends Mt{constructor(t=1,r=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:r,widthSegments:i,heightSegments:a};let n=t/2,s=r/2,o=Math.floor(i),l=Math.floor(a),u=o+1,c=l+1,d=t/o,p=r/l,f=[],v=[],g=[],m=[];for(let h=0;h<c;h++){let P=h*p-s;for(let y=0;y<u;y++){let b=y*d-n;v.push(b,-P,0),g.push(0,0,1),m.push(y/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let P=0;P<o;P++){let y=P+u*h,b=P+u*(h+1),U=P+1+u*(h+1),x=P+1+u*h;f.push(y,b,x),f.push(b,U,x)}this.setIndex(f),this.setAttribute("position",new Ke(v,3)),this.setAttribute("normal",new Ke(g,3)),this.setAttribute("uv",new Ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bc(t.width,t.height,t.widthSegments,t.heightSegments)}},ou=class Tc extends Mt{constructor(t=1,r=32,i=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:r,heightSegments:i,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},r=Math.max(3,Math.floor(r)),i=Math.max(2,Math.floor(i));let l=Math.min(s+o,Math.PI),u=0,c=[],d=new C,p=new C,f=[],v=[],g=[],m=[];for(let h=0;h<=i;h++){let P=[],y=h/i,b=0;h===0&&s===0?b=.5/r:h===i&&l===Math.PI&&(b=-.5/r);for(let U=0;U<=r;U++){let x=U/r;d.x=-t*Math.cos(a+x*n)*Math.sin(s+y*o),d.y=t*Math.cos(s+y*o),d.z=t*Math.sin(a+x*n)*Math.sin(s+y*o),v.push(d.x,d.y,d.z),p.copy(d).normalize(),g.push(p.x,p.y,p.z),m.push(x+b,1-y),P.push(u++)}c.push(P)}for(let h=0;h<i;h++)for(let P=0;P<r;P++){let y=c[h][P+1],b=c[h][P],U=c[h+1][P],x=c[h+1][P+1];(h!==0||s>0)&&f.push(y,b,x),(h!==i-1||l<Math.PI)&&f.push(b,U,x)}this.setIndex(f),this.setAttribute("position",new Ke(v,3)),this.setAttribute("normal",new Ke(g,3)),this.setAttribute("uv",new Ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Fi=class wc extends Mt{constructor(t=1,r=.4,i=12,a=48,n=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:r,radialSegments:i,tubularSegments:a,arc:n},i=Math.floor(i),a=Math.floor(a);let s=[],o=[],l=[],u=[],c=new C,d=new C,p=new C;for(let f=0;f<=i;f++)for(let v=0;v<=a;v++){let g=v/a*n,m=f/i*Math.PI*2;d.x=(t+r*Math.cos(m))*Math.cos(g),d.y=(t+r*Math.cos(m))*Math.sin(g),d.z=r*Math.sin(m),o.push(d.x,d.y,d.z),c.x=t*Math.cos(g),c.y=t*Math.sin(g),p.subVectors(d,c).normalize(),l.push(p.x,p.y,p.z),u.push(v/a),u.push(f/i)}for(let f=1;f<=i;f++)for(let v=1;v<=a;v++){let g=(a+1)*f+v-1,m=(a+1)*(f-1)+v-1,h=(a+1)*(f-1)+v,P=(a+1)*f+v;s.push(g,m,P),s.push(m,h,P)}this.setIndex(s),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},vo=class Ac extends Mt{constructor(t=new Kl(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),r=64,i=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:r,radius:i,radialSegments:a,closed:n};let s=t.computeFrenetFrames(r,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new C,l=new C,u=new oe,c=new C,d=[],p=[],f=[],v=[];g(),this.setIndex(v),this.setAttribute("position",new Ke(d,3)),this.setAttribute("normal",new Ke(p,3)),this.setAttribute("uv",new Ke(f,2));function g(){for(let y=0;y<r;y++)m(y);m(n===!1?r:0),P(),h()}function m(y){c=t.getPointAt(y/r,c);let b=s.normals[y],U=s.binormals[y];for(let x=0;x<=a;x++){let T=x/a*Math.PI*2,R=Math.sin(T),S=-Math.cos(T);l.x=S*b.x+R*U.x,l.y=S*b.y+R*U.y,l.z=S*b.z+R*U.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=c.x+i*l.x,o.y=c.y+i*l.y,o.z=c.z+i*l.z,d.push(o.x,o.y,o.z)}}function h(){for(let y=1;y<=r;y++)for(let b=1;b<=a;b++){let U=(a+1)*(y-1)+(b-1),x=(a+1)*y+(b-1),T=(a+1)*y+b,R=(a+1)*(y-1)+b;v.push(U,x,R),v.push(x,T,R)}}function P(){for(let y=0;y<=r;y++)for(let b=0;b<=a;b++)u.x=y/r,u.y=b/a,f.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ac(new fn[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Ea=class extends Kr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ds,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Hd=class extends Kr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ds,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.combine=qn,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gd=class extends Kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wd=class extends Kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function xn(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Xd(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var yn=class{constructor(e,t,r,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,r=this._cachedIndex,i=t[r],a=t[r-1];r:{e:{let n;t:{i:if(!(e<i)){for(let s=r+2;;){if(i===void 0){if(e<a)break i;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===s)break;if(a=i,i=t[++r],e<i)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(r=2,a=s);for(let o=r-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===o)break;if(i=a,a=t[--r-1],e>=a)break e}n=r,r=0;break t}break r}for(;r<n;){let s=r+n>>>1;e<t[s]?n=s:r=s+1}if(i=t[r],a=t[r-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,a,i)}return this.interpolate_(r,a,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,r=this.sampleValues,i=this.valueSize,a=e*i;for(let n=0;n!==i;++n)t[n]=r[a+n];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qd=class extends yn{constructor(e,t,r,i){super(e,t,r,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:il,endingEnd:il}}intervalChanged_(e,t,r){let i=this.parameterPositions,a=e-2,n=e+1,s=i[a],o=i[n];if(s===void 0)switch(this.getSettings_().endingStart){case al:a=e,s=2*t-r;break;case nl:a=i.length-2,s=t+i[a]-i[a+1];break;default:a=e,s=r}if(o===void 0)switch(this.getSettings_().endingEnd){case al:n=e,o=2*r-t;break;case nl:n=1,o=r+i[1]-i[0];break;default:n=e-1,o=t}let l=(r-t)*.5,u=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-r),this._offsetPrev=a*u,this._offsetNext=n*u}interpolate_(e,t,r,i){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,u=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(r-t)/(i-t),v=f*f,g=v*f,m=-d*g+2*d*v-d*f,h=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*f+1,P=(-1-p)*g+(1.5+p)*v+.5*f,y=p*g-p*v;for(let b=0;b!==s;++b)a[b]=m*n[u+b]+h*n[l+b]+P*n[o+b]+y*n[c+b];return a}},jd=class extends yn{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,u=(r-t)/(i-t),c=1-u;for(let d=0;d!==s;++d)a[d]=n[l+d]*c+n[o+d]*u;return a}},Yd=class extends yn{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e){return this.copySampleValue_(e-1)}},lr=class{constructor(e,t,r,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xn(t,this.TimeBufferType),this.values=xn(r,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:xn(e.times,Array),values:xn(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(r.interpolation=i)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new Yd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case za:t=this.InterpolantFactoryMethodDiscrete;break;case Is:t=this.InterpolantFactoryMethodLinear;break;case Us:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return za;case this.InterpolantFactoryMethodLinear:return Is;case this.InterpolantFactoryMethodSmooth:return Us}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]*=e}return this}trim(e,t){let r=this.times,i=r.length,a=0,n=i-1;for(;a!==i&&r[a]<e;)++a;for(;n!==-1&&r[n]>t;)--n;if(++n,a!==0||n!==i){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=r.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let r=this.times,i=this.values,a=r.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=r[s];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(i!==void 0&&Xd(i))for(let s=0,o=i.length;s!==o;++s){let l=i[s];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),i=this.getInterpolation()===Us,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],u=e[s+1];if(l!==u&&(s!==1||l!==e[0]))if(i)o=!0;else{let c=s*r,d=c-r,p=c+r;for(let f=0;f!==r;++f){let v=t[c+f];if(v!==t[d+f]||v!==t[p+f]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let c=s*r,d=n*r;for(let p=0;p!==r;++p)t[d+p]=t[c+p]}++n}}if(a>0){e[n]=e[a];for(let s=a*r,o=n*r,l=0;l!==r;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*r)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),r=this.constructor,i=new r(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};lr.prototype.ValueTypeName="",lr.prototype.TimeBufferType=Float32Array,lr.prototype.ValueBufferType=Float32Array,lr.prototype.DefaultInterpolation=Is;var Sa=class extends lr{constructor(e,t,r){super(e,t,r)}};Sa.prototype.ValueTypeName="bool",Sa.prototype.ValueBufferType=Array,Sa.prototype.DefaultInterpolation=za,Sa.prototype.InterpolantFactoryMethodLinear=void 0,Sa.prototype.InterpolantFactoryMethodSmooth=void 0;var Zd=class extends lr{constructor(e,t,r,i){super(e,t,r,i)}};Zd.prototype.ValueTypeName="color";var Jd=class extends lr{constructor(e,t,r,i){super(e,t,r,i)}};Jd.prototype.ValueTypeName="number";var Kd=class extends yn{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(r-t)/(i-t),l=e*s;for(let u=l+s;l!==u;l+=4)Pr.slerpFlat(a,0,n,l-s,n,l,o);return a}},lu=class extends lr{constructor(e,t,r,i){super(e,t,r,i)}InterpolantFactoryMethodLinear(e){return new Kd(this.times,this.values,this.getValueSize(),e)}};lu.prototype.ValueTypeName="quaternion",lu.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends lr{constructor(e,t,r){super(e,t,r)}};Ma.prototype.ValueTypeName="string",Ma.prototype.ValueBufferType=Array,Ma.prototype.DefaultInterpolation=za,Ma.prototype.InterpolantFactoryMethodLinear=void 0,Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var $d=class extends lr{constructor(e,t,r,i){super(e,t,r,i)}};$d.prototype.ValueTypeName="vector";var Qd=class{constructor(e,t,r){let i=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.abortController=new AbortController,this.itemStart=function(u){s++,a===!1&&i.onStart!==void 0&&i.onStart(u,n,s),a=!0},this.itemEnd=function(u){n++,i.onProgress!==void 0&&i.onProgress(u,n,s),n===s&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return o?o(u):u},this.setURLModifier=function(u){return o=u,this},this.addHandler=function(u,c){return l.push(u,c),this},this.removeHandler=function(u){let c=l.indexOf(u);return c!==-1&&l.splice(c,2),this},this.getHandler=function(u){for(let c=0,d=l.length;c<d;c+=2){let p=l[c],f=l[c+1];if(p.global&&(p.lastIndex=0),p.test(u))return f}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ep=new Qd,tp=class{constructor(e){this.manager=e!==void 0?e:ep,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let r=this;return new Promise(function(i,a){r.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};tp.DEFAULT_MATERIAL_NAME="__DEFAULT";var _o=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},rp=class extends _o{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},xo=new nt,uu=new C,cu=new C,hu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=ir,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,r=this.matrix;uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(uu),cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cu),t.updateMatrixWorld(),xo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},du=new nt,ba=new C,yo=new C,ip=class extends hu{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let r=this.camera,i=this.matrix,a=e.distance||r.far;a!==r.far&&(r.far=a,r.updateProjectionMatrix()),ba.setFromMatrixPosition(e.matrixWorld),r.position.copy(ba),yo.copy(r.position),yo.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(yo),r.updateMatrixWorld(),i.makeTranslation(-ba.x,-ba.y,-ba.z),du.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(du,r.coordinateSystem,r.reversedDepth)}},ap=class extends _o{constructor(e,t,r=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=i,this.shadow=new ip}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},pu=class extends Il{constructor(e=-1,t=1,r=1,i=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2,a=r-e,n=r+e,s=i+t,o=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=u*this.view.offsetY,o=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},np=class extends hu{constructor(){super(new pu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sp=class extends _o{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new np}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},op=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Eo="\\[\\]\\.:\\/",lp=new RegExp("["+Eo+"]","g"),So="[^"+Eo+"]",up="[^"+Eo.replace("\\.","")+"]",cp=/((?:WC+[\/:])*)/.source.replace("WC",So),hp=/(WCOD+)?/.source.replace("WCOD",up),dp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",So),pp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",So),fp=new RegExp("^"+cp+hp+dp+pp+"$"),mp=["material","materials","bones","map"],gp=class{constructor(e,t,r){let i=r||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let r=this._targetGroup.nCachedObjects_,i=this._bindings[r];i!==void 0&&i.getValue(e,t)}setValue(e,t){let r=this._bindings;for(let i=this._targetGroup.nCachedObjects_,a=r.length;i!==a;++i)r[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}},ht=class ji{constructor(t,r,i){this.path=r,this.parsedPath=i||ji.parseTrackName(r),this.node=ji.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,r,i){return t&&t.isAnimationObjectGroup?new ji.Composite(t,r,i):new ji(t,r,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lp,"")}static parseTrackName(t){let r=fp.exec(t);if(r===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:r[2],objectName:r[3],objectIndex:r[4],propertyName:r[5],propertyIndex:r[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=i.nodeName.substring(a+1);mp.indexOf(n)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=n)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,r){if(r===void 0||r===""||r==="."||r===-1||r===t.name||r===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(r);if(i!==void 0)return i}if(t.children){let i=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===r||o.uuid===r)return o;let l=i(o.children);if(l)return l}return null},a=i(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,r){t[r]=this.targetObject[this.propertyName]}_getValue_array(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)t[r++]=i[a]}_getValue_arrayElement(t,r){t[r]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,r){this.resolvedProperty.toArray(t,r)}_setValue_direct(t,r){this.targetObject[this.propertyName]=t[r]}_setValue_direct_setNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)i[a]=t[r++]}_setValue_array_setNeedsUpdate(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)i[a]=t[r++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,r){let i=this.resolvedProperty;for(let a=0,n=i.length;a!==n;++a)i[a]=t[r++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,r){this.resolvedProperty[this.propertyIndex]=t[r]}_setValue_arrayElement_setNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,r){this.resolvedProperty.fromArray(t,r)}_setValue_fromArray_setNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,r){this.bind(),this.getValue(t,r)}_setValue_unbound(t,r){this.bind(),this.setValue(t,r)}bind(){let t=this.node,r=this.parsedPath,i=r.objectName,a=r.propertyName,n=r.propertyIndex;if(t||(t=ji.findNode(this.rootNode,r.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=r.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===u){u=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let s=t[a];if(s===void 0){let u=r.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=gp,ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray],ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fv=new Float32Array(1),fu=new nt,vp=class{constructor(e,t,r=0,i=1/0){this.ray=new ja(e,t),this.near=r,this.far=i,this.camera=null,this.layers=new qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fu),this}intersectObject(e,t=!0,r=[]){return Mo(e,this,r,t),r.sort(mu),r}intersectObjects(e,t=!0,r=[]){for(let i=0,a=e.length;i<a;i++)Mo(e[i],this,r,t);return r.sort(mu),r}};function mu(e,t){return e.distance-t.distance}function Mo(e,t,r,i){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,r)===!1&&(a=!1),a===!0&&i===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)Mo(n[s],t,r,!0)}}var gu=class{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=He(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(He(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},_p=class extends cd{constructor(e=10,t=10,r=4473924,i=8947848){r=new Xe(r),i=new Xe(i);let a=t/2,n=e/t,s=e/2,o=[],l=[];for(let d=0,p=0,f=-s;d<=t;d++,f+=n){o.push(-s,0,f,s,0,f),o.push(f,0,-s,f,0,s);let v=d===a?r:i;v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3}let u=new Mt;u.setAttribute("position",new Ke(o,3)),u.setAttribute("color",new Ke(l,3));let c=new kl({vertexColors:!0,toneMapped:!1});super(u,c),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},xp=class extends qr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function vu(e,t,r,i){let a=yp(i);switch(r){case el:return e*t;case es:return e*t/a.components*a.byteLength;case ts:return e*t/a.components*a.byteLength;case rl:return e*t*2/a.components*a.byteLength;case rs:return e*t*2/a.components*a.byteLength;case tl:return e*t*3/a.components*a.byteLength;case Yt:return e*t*4/a.components*a.byteLength;case is:return e*t*4/a.components*a.byteLength;case Da:case Na:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Oa:case Fa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ns:case os:return Math.max(e,16)*Math.max(t,8)/4;case as:case ss:return Math.max(e,8)*Math.max(t,8)/2;case ls:case us:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case cs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case hs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ds:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ps:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case fs:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ms:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case gs:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case vs:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case _s:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case xs:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ys:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Es:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ss:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ms:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case bs:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ts:case ws:case As:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Rs:case Cs:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ls:case Ps:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function yp(e){switch(e){case ir:case Jo:return{byteLength:1,components:1};case Yi:case Ko:case Zi:return{byteLength:2,components:1};case $n:case Qn:return{byteLength:2,components:4};case Xr:case Kn:case ar:return{byteLength:4,components:1};case $o:case Qo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/function _u(){let e=null,t=!1,r=null,i=null;function a(n,s){r(n,s),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&r!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(n){r=n},setContext:function(n){e=n}}}function Ep(e){let t=new WeakMap;function r(o,l){let u=o.array,c=o.usage,d=u.byteLength,p=e.createBuffer();e.bindBuffer(l,p),e.bufferData(l,u,c),o.onUploadCallback();let f;if(u instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)f=e.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=e.SHORT;else if(u instanceof Uint32Array)f=e.UNSIGNED_INT;else if(u instanceof Int32Array)f=e.INT;else if(u instanceof Int8Array)f=e.BYTE;else if(u instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,u){let c=l.array,d=l.updateRanges;if(e.bindBuffer(u,o),d.length===0)e.bufferSubData(u,0,c);else{d.sort((f,v)=>f.start-v.start);let p=0;for(let f=1;f<d.length;f++){let v=d[p],g=d[f];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++p,d[p]=g)}d.length=p+1;for(let f=0,v=d.length;f<v;f++){let g=d[f];e.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=t.get(o);if(u===void 0)t.set(o,r(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:a,remove:n,update:s}}var Sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mp=`#ifdef USE_ALPHAHASH
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
#endif`,bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
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
#endif`,Cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lp=`#ifdef USE_BATCHING
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
#endif`,Pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Np=`#ifdef USE_IRIDESCENCE
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
#endif`,Op=`#ifdef USE_BUMPMAP
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
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xp=`#define PI 3.141592653589793
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
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jp=`vec3 transformedNormal = objectNormal;
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
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$p="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ef=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rf=`#ifdef USE_ENVMAP
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
#endif`,af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
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
#endif`,sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cf=`#ifdef USE_GRADIENTMAP
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
}`,hf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ff=`uniform bool receiveShadow;
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
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yf=`PhysicalMaterial material;
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
#endif`,Ef=`struct PhysicalMaterial {
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
}`,Sf=`
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
#endif`,Mf=`#if defined( RE_IndirectDiffuse )
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
#endif`,bf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,If=`#if defined( USE_POINTS_UV )
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
#endif`,Uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Of=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ff=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zf=`#ifdef USE_MORPHTARGETS
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
#endif`,Bf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xf=`#ifdef USE_NORMALMAP
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
#endif`,qf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$f=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,om=`float getShadowMask() {
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
}`,lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,um=`#ifdef USE_SKINNING
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
#endif`,cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gm=`#ifdef USE_TRANSMISSION
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
#endif`,vm=`#ifdef USE_TRANSMISSION
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mm=`uniform sampler2D t2D;
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`#include <common>
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
}`,Cm=`#if DEPTH_PACKING == 3200
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
}`,Lm=`#define DISTANCE
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
}`,Pm=`#define DISTANCE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`uniform float scale;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
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
}`,Fm=`uniform vec3 diffuse;
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
}`,zm=`#define LAMBERT
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
}`,Bm=`#define LAMBERT
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
}`,km=`#define MATCAP
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
}`,Vm=`#define MATCAP
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
}`,Hm=`#define NORMAL
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
}`,Gm=`#define NORMAL
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
}`,Wm=`#define PHONG
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
}`,Xm=`#define PHONG
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
}`,qm=`#define STANDARD
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
}`,jm=`#define STANDARD
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
}`,Ym=`#define TOON
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
}`,Zm=`#define TOON
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
}`,Jm=`uniform float size;
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
}`,Km=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,Qm=`uniform vec3 color;
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
}`,eg=`uniform float rotation;
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
}`,tg=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Sp,alphahash_pars_fragment:Mp,alphamap_fragment:bp,alphamap_pars_fragment:Tp,alphatest_fragment:wp,alphatest_pars_fragment:Ap,aomap_fragment:Rp,aomap_pars_fragment:Cp,batching_pars_vertex:Lp,batching_vertex:Pp,begin_vertex:Ip,beginnormal_vertex:Up,bsdfs:Dp,iridescence_fragment:Np,bumpmap_pars_fragment:Op,clipping_planes_fragment:Fp,clipping_planes_pars_fragment:zp,clipping_planes_pars_vertex:Bp,clipping_planes_vertex:kp,color_fragment:Vp,color_pars_fragment:Hp,color_pars_vertex:Gp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:jp,displacementmap_pars_vertex:Yp,displacementmap_vertex:Zp,emissivemap_fragment:Jp,emissivemap_pars_fragment:Kp,colorspace_fragment:$p,colorspace_pars_fragment:Qp,envmap_fragment:ef,envmap_common_pars_fragment:tf,envmap_pars_fragment:rf,envmap_pars_vertex:af,envmap_physical_pars_fragment:mf,envmap_vertex:nf,fog_vertex:sf,fog_pars_vertex:of,fog_fragment:lf,fog_pars_fragment:uf,gradientmap_pars_fragment:cf,lightmap_pars_fragment:hf,lights_lambert_fragment:df,lights_lambert_pars_fragment:pf,lights_pars_begin:ff,lights_toon_fragment:gf,lights_toon_pars_fragment:vf,lights_phong_fragment:_f,lights_phong_pars_fragment:xf,lights_physical_fragment:yf,lights_physical_pars_fragment:Ef,lights_fragment_begin:Sf,lights_fragment_maps:Mf,lights_fragment_end:bf,logdepthbuf_fragment:Tf,logdepthbuf_pars_fragment:wf,logdepthbuf_pars_vertex:Af,logdepthbuf_vertex:Rf,map_fragment:Cf,map_pars_fragment:Lf,map_particle_fragment:Pf,map_particle_pars_fragment:If,metalnessmap_fragment:Uf,metalnessmap_pars_fragment:Df,morphinstance_vertex:Nf,morphcolor_vertex:Of,morphnormal_vertex:Ff,morphtarget_pars_vertex:zf,morphtarget_vertex:Bf,normal_fragment_begin:kf,normal_fragment_maps:Vf,normal_pars_fragment:Hf,normal_pars_vertex:Gf,normal_vertex:Wf,normalmap_pars_fragment:Xf,clearcoat_normal_fragment_begin:qf,clearcoat_normal_fragment_maps:jf,clearcoat_pars_fragment:Yf,iridescence_pars_fragment:Zf,opaque_fragment:Jf,packing:Kf,premultiplied_alpha_fragment:$f,project_vertex:Qf,dithering_fragment:em,dithering_pars_fragment:tm,roughnessmap_fragment:rm,roughnessmap_pars_fragment:im,shadowmap_pars_fragment:am,shadowmap_pars_vertex:nm,shadowmap_vertex:sm,shadowmask_pars_fragment:om,skinbase_vertex:lm,skinning_pars_vertex:um,skinning_vertex:cm,skinnormal_vertex:hm,specularmap_fragment:dm,specularmap_pars_fragment:pm,tonemapping_fragment:fm,tonemapping_pars_fragment:mm,transmission_fragment:gm,transmission_pars_fragment:vm,uv_pars_fragment:_m,uv_pars_vertex:xm,uv_vertex:ym,worldpos_vertex:Em,background_vert:Sm,background_frag:Mm,backgroundCube_vert:bm,backgroundCube_frag:Tm,cube_vert:wm,cube_frag:Am,depth_vert:Rm,depth_frag:Cm,distanceRGBA_vert:Lm,distanceRGBA_frag:Pm,equirect_vert:Im,equirect_frag:Um,linedashed_vert:Dm,linedashed_frag:Nm,meshbasic_vert:Om,meshbasic_frag:Fm,meshlambert_vert:zm,meshlambert_frag:Bm,meshmatcap_vert:km,meshmatcap_frag:Vm,meshnormal_vert:Hm,meshnormal_frag:Gm,meshphong_vert:Wm,meshphong_frag:Xm,meshphysical_vert:qm,meshphysical_frag:jm,meshtoon_vert:Ym,meshtoon_frag:Zm,points_vert:Jm,points_frag:Km,shadow_vert:$m,shadow_frag:Qm,sprite_vert:eg,sprite_frag:tg},fe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ur={basic:{uniforms:It([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:It([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:It([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:It([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:It([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:It([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:It([fe.points,fe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:It([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:It([fe.common,fe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:It([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:It([fe.sprite,fe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:It([fe.common,fe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:It([fe.lights,fe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ur.physical={uniforms:It([ur.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var En={r:0,b:0,g:0},ri=new _r,rg=new nt;function ig(e,t,r,i,a,n,s){let o=new Xe(0),l=n===!0?0:1,u,c,d=null,p=0,f=null;function v(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?r:t).get(b)),b}function g(y){let b=!1,U=v(y);U===null?h(o,l):U&&U.isColor&&(h(U,1),b=!0);let x=e.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,s):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(y,b){let U=v(b);U&&(U.isCubeTexture||U.mapping===Ia)?(c===void 0&&(c=new ct(new Qr(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:Ii(ur.backgroundCube.uniforms),vertexShader:ur.backgroundCube.vertexShader,fragmentShader:ur.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),ri.copy(b.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),c.material.uniforms.envMap.value=U,c.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler(ri)),c.material.toneMapped=Je.getTransfer(U.colorSpace)!==Qe,(d!==U||p!==U.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,d=U,p=U.version,f=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):U&&U.isTexture&&(u===void 0&&(u=new ct(new ya(2,2),new zr({name:"BackgroundMaterial",uniforms:Ii(ur.background.uniforms),vertexShader:ur.background.vertexShader,fragmentShader:ur.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(u)),u.material.uniforms.t2D.value=U,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.toneMapped=Je.getTransfer(U.colorSpace)!==Qe,U.matrixAutoUpdate===!0&&U.updateMatrix(),u.material.uniforms.uvTransform.value.copy(U.matrix),(d!==U||p!==U.version||f!==e.toneMapping)&&(u.material.needsUpdate=!0,d=U,p=U.version,f=e.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function h(y,b){y.getRGB(En,Pl(e)),i.buffers.color.setClear(En.r,En.g,En.b,b,s)}function P(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),l=b,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(o,l)},render:g,addToRenderList:m,dispose:P}}function ag(e,t){let r=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=p(null),n=a,s=!1;function o(E,A,O,B,z){let W=!1,k=d(B,O,A);n!==k&&(n=k,u(n.object)),W=f(E,B,O,z),W&&v(E,B,O,z),z!==null&&t.update(z,e.ELEMENT_ARRAY_BUFFER),(W||s)&&(s=!1,b(E,A,O,B),z!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return e.createVertexArray()}function u(E){return e.bindVertexArray(E)}function c(E){return e.deleteVertexArray(E)}function d(E,A,O){let B=O.wireframe===!0,z=i[E.id];z===void 0&&(z={},i[E.id]=z);let W=z[A.id];W===void 0&&(W={},z[A.id]=W);let k=W[B];return k===void 0&&(k=p(l()),W[B]=k),k}function p(E){let A=[],O=[],B=[];for(let z=0;z<r;z++)A[z]=0,O[z]=0,B[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:O,attributeDivisors:B,object:E,attributes:{},index:null}}function f(E,A,O,B){let z=n.attributes,W=A.attributes,k=0,$=O.getAttributes();for(let G in $)if($[G].location>=0){let re=z[G],pe=W[G];if(pe===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(pe=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(pe=E.instanceColor)),re===void 0||re.attribute!==pe||pe&&re.data!==pe.data)return!0;k++}return n.attributesNum!==k||n.index!==B}function v(E,A,O,B){let z={},W=A.attributes,k=0,$=O.getAttributes();for(let G in $)if($[G].location>=0){let re=W[G];re===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(re=E.instanceColor));let pe={};pe.attribute=re,re&&re.data&&(pe.data=re.data),z[G]=pe,k++}n.attributes=z,n.attributesNum=k,n.index=B}function g(){let E=n.newAttributes;for(let A=0,O=E.length;A<O;A++)E[A]=0}function m(E){h(E,0)}function h(E,A){let O=n.newAttributes,B=n.enabledAttributes,z=n.attributeDivisors;O[E]=1,B[E]===0&&(e.enableVertexAttribArray(E),B[E]=1),z[E]!==A&&(e.vertexAttribDivisor(E,A),z[E]=A)}function P(){let E=n.newAttributes,A=n.enabledAttributes;for(let O=0,B=A.length;O<B;O++)A[O]!==E[O]&&(e.disableVertexAttribArray(O),A[O]=0)}function y(E,A,O,B,z,W,k){k===!0?e.vertexAttribIPointer(E,A,O,z,W):e.vertexAttribPointer(E,A,O,B,z,W)}function b(E,A,O,B){g();let z=B.attributes,W=O.getAttributes(),k=A.defaultAttributeValues;for(let $ in W){let G=W[$];if(G.location>=0){let re=z[$];if(re===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(re=E.instanceColor)),re!==void 0){let pe=re.normalized,Le=re.itemSize,De=t.get(re);if(De===void 0)continue;let $e=De.buffer,Ye=De.type,j=De.bytesPerElement,ue=Ye===e.INT||Ye===e.UNSIGNED_INT||re.gpuType===Kn;if(re.isInterleavedBufferAttribute){let he=re.data,xe=he.stride,Ie=re.offset;if(he.isInstancedInterleavedBuffer){for(let Me=0;Me<G.locationSize;Me++)h(G.location+Me,he.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Me=0;Me<G.locationSize;Me++)m(G.location+Me);e.bindBuffer(e.ARRAY_BUFFER,$e);for(let Me=0;Me<G.locationSize;Me++)y(G.location+Me,Le/G.locationSize,Ye,pe,xe*j,(Ie+Le/G.locationSize*Me)*j,ue)}else{if(re.isInstancedBufferAttribute){for(let he=0;he<G.locationSize;he++)h(G.location+he,re.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let he=0;he<G.locationSize;he++)m(G.location+he);e.bindBuffer(e.ARRAY_BUFFER,$e);for(let he=0;he<G.locationSize;he++)y(G.location+he,Le/G.locationSize,Ye,pe,Le*j,Le/G.locationSize*he*j,ue)}}else if(k!==void 0){let pe=k[$];if(pe!==void 0)switch(pe.length){case 2:e.vertexAttrib2fv(G.location,pe);break;case 3:e.vertexAttrib3fv(G.location,pe);break;case 4:e.vertexAttrib4fv(G.location,pe);break;default:e.vertexAttrib1fv(G.location,pe)}}}}P()}function U(){R();for(let E in i){let A=i[E];for(let O in A){let B=A[O];for(let z in B)c(B[z].object),delete B[z];delete A[O]}delete i[E]}}function x(E){if(i[E.id]===void 0)return;let A=i[E.id];for(let O in A){let B=A[O];for(let z in B)c(B[z].object),delete B[z];delete A[O]}delete i[E.id]}function T(E){for(let A in i){let O=i[A];if(O[E.id]===void 0)continue;let B=O[E.id];for(let z in B)c(B[z].object),delete B[z];delete O[E.id]}}function R(){S(),s=!0,n!==a&&(n=a,u(n.object))}function S(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:U,releaseStatesOfGeometry:x,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:P}}function ng(e,t,r){let i;function a(u){i=u}function n(u,c){e.drawArrays(i,u,c),r.update(c,i,1)}function s(u,c,d){d!==0&&(e.drawArraysInstanced(i,u,c,d),r.update(c,i,d))}function o(u,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let p=0;for(let f=0;f<d;f++)p+=c[f];r.update(p,i,1)}function l(u,c,d,p){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<u.length;v++)s(u[v],c[v],p[v]);else{f.multiDrawArraysInstancedWEBGL(i,u,0,c,0,p,0,d);let v=0;for(let g=0;g<d;g++)v+=c[g]*p[g];r.update(v,i,1)}}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function sg(e,t,r,i){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(T){return!(T!==Yt&&i.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let R=T===Zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ir&&i.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ar&&!R)}function l(T){if(T==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=r.precision!==void 0?r.precision:"highp",c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);let d=r.logarithmicDepthBuffer===!0,p=r.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),P=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),U=v>0,x=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:P,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:U,maxSamples:x}}function og(e){let t=this,r=null,i=0,a=!1,n=!1,s=new Sr,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let f=d.length!==0||p||i!==0||a;return a=p,i=d.length,f},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,p){r=c(d,p,0)},this.setState=function(d,p,f){let v=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,h=e.get(d);if(!a||v===null||v.length===0||n&&!m)n?c(null):u();else{let P=n?0:i,y=P*4,b=h.clippingState||null;l.value=b,b=c(v,p,y,f);for(let U=0;U!==y;++U)b[U]=r[U];h.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=P}};function u(){l.value!==r&&(l.value=r,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(d,p,f,v){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=l.value,v!==!0||m===null){let h=f+g*4,P=p.matrixWorldInverse;o.getNormalMatrix(P),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,b=f;y!==g;++y,b+=4)s.copy(d[y]).applyMatrix4(P,o),s.normal.toArray(m,b),m[b+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function lg(e){let t=new WeakMap;function r(s,o){return o===jn?s.mapping=fi:o===Yn&&(s.mapping=mi),s}function i(s){if(s&&s.isTexture){let o=s.mapping;if(o===jn||o===Yn)if(t.has(s)){let l=t.get(s).texture;return r(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let u=new td(l.height);return u.fromEquirectangularTexture(e,s),t.set(s,u),s.addEventListener("dispose",a),r(u.texture,s.mapping)}else return null}}return s}function a(s){let o=s.target;o.removeEventListener("dispose",a);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function n(){t=new WeakMap}return{get:i,dispose:n}}var zi=4,xu=[.125,.215,.35,.446,.526,.582],ii=20,bo=new pu,yu=new Xe,To=null,wo=0,Ao=0,Ro=!1,ai=(1+Math.sqrt(5))/2,Bi=1/ai,Eu=[new C(-ai,Bi,0),new C(ai,Bi,0),new C(-Bi,0,ai),new C(Bi,0,ai),new C(0,ai,-Bi),new C(0,ai,Bi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],ug=new C,Co=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100,a={}){let{size:n=256,position:s=ug}=a;To=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,r,i,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(To,wo,Ao),this._renderer.xr.enabled=Ro,e.scissorTest=!1,Sn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),To=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:rr,minFilter:rr,generateMipmaps:!1,type:Zi,format:Yt,colorSpace:vi,depthBuffer:!1},i=Su(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Su(e,t,r);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cg(a)),this._blurMaterial=hg(a,e,t)}return i}_compileMaterial(e){let t=new ct(this._lodPlanes[0],e);this._renderer.compile(t,bo)}_sceneToCubeUV(e,t,r,i,a){let n=new zt(90,1,t,r),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,c=l.toneMapping;l.getClearColor(yu),l.toneMapping=Cr,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null));let d=new oa({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),p=new ct(new Qr,d),f=!1,v=e.background;v?v.isColor&&(d.color.copy(v),e.background=null,f=!0):(d.color.copy(yu),f=!0);for(let g=0;g<6;g++){let m=g%3;m===0?(n.up.set(0,s[g],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[g],a.y,a.z)):m===1?(n.up.set(0,0,s[g]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[g],a.z)):(n.up.set(0,s[g],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[g]));let h=this._cubeSize;Sn(i,m*h,g>2?h:0,h,h),l.setRenderTarget(i),f&&l.render(p,n),l.render(e,n)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=c,l.autoClear=u,e.background=v}_textureToCubeUV(e,t){let r=this._renderer,i=e.mapping===fi||e.mapping===mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());let a=i?this._cubemapMaterial:this._equirectMaterial,n=new ct(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;Sn(t,0,0,3*o,2*o),r.setRenderTarget(t),r.render(n,bo)}_applyPMREM(e){let t=this._renderer,r=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let a=1;a<i;a++){let n=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=Eu[(i-a-1)%Eu.length];this._blur(e,a-1,a,n,s)}t.autoClear=r}_blur(e,t,r,i,a){let n=this._pingPongRenderTarget;this._halfBlur(e,n,t,r,i,"latitudinal",a),this._halfBlur(n,e,r,r,i,"longitudinal",a)}_halfBlur(e,t,r,i,a,n,s){let o=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,c=new ct(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[r]-1,f=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*ii-1),v=a/f,g=isFinite(a)?1+Math.floor(u*v):ii;g>ii&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ii}`);let m=[],h=0;for(let x=0;x<ii;++x){let T=x/v,R=Math.exp(-T*T/2);m.push(R),x===0?h+=R:x<g&&(h+=2*R)}for(let x=0;x<m.length;x++)m[x]=m[x]/h;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=n==="latitudinal",s&&(d.poleAxis.value=s);let{_lodMax:P}=this;d.dTheta.value=f,d.mipInt.value=P-r;let y=this._sizeLods[i],b=3*y*(i>P-zi?i-P+zi:0),U=4*(this._cubeSize-y);Sn(t,b,U,3*y,2*y),o.setRenderTarget(t),o.render(c,bo)}};function cg(e){let t=[],r=[],i=[],a=e,n=e-zi+1+xu.length;for(let s=0;s<n;s++){let o=Math.pow(2,a);r.push(o);let l=1/o;s>e-zi?l=xu[s-e+zi-1]:s===0&&(l=0),i.push(l);let u=1/(o-2),c=-u,d=1+u,p=[c,c,d,c,d,d,c,c,d,d,c,d],f=6,v=6,g=3,m=2,h=1,P=new Float32Array(g*v*f),y=new Float32Array(m*v*f),b=new Float32Array(h*v*f);for(let x=0;x<f;x++){let T=x%3*2/3-1,R=x>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];P.set(S,g*v*x),y.set(p,m*v*x);let E=[x,x,x,x,x,x];b.set(E,h*v*x)}let U=new Mt;U.setAttribute("position",new $t(P,g)),U.setAttribute("uv",new $t(y,m)),U.setAttribute("faceIndex",new $t(b,h)),t.push(U),a>zi&&a--}return{lodPlanes:t,sizeLods:r,sigmas:i}}function Su(e,t,r){let i=new Yr(e,t,r);return i.texture.mapping=Ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sn(e,t,r,i,a){e.viewport.set(t,r,i,a),e.scissor.set(t,r,i,a)}function hg(e,t,r){let i=new Float32Array(ii),a=new C(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Lo(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Mu(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lo(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function bu(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Lo(){return`

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
	`}function dg(e){let t=new WeakMap,r=null;function i(o){if(o&&o.isTexture){let l=o.mapping,u=l===jn||l===Yn,c=l===fi||l===mi;if(u||c){let d=t.get(o),p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return r===null&&(r=new Co(e)),d=u?r.fromEquirectangular(o,d):r.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return u&&f&&f.height>0||c&&f&&a(f)?(r===null&&(r=new Co(e)),d=u?r.fromEquirectangular(o):r.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",n),d.texture):null}}}return o}function a(o){let l=0,u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function n(o){let l=o.target;l.removeEventListener("dispose",n);let u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function s(){t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:s}}function pg(e){let t={};function r(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return r(i)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(i){let a=r(i);return a===null&&ra("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function fg(e,t,r,i){let a={},n=new WeakMap;function s(d){let p=d.target;p.index!==null&&t.remove(p.index);for(let v in p.attributes)t.remove(p.attributes[v]);p.removeEventListener("dispose",s),delete a[p.id];let f=n.get(p);f&&(t.remove(f),n.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,r.memory.geometries--}function o(d,p){return a[p.id]===!0||(p.addEventListener("dispose",s),a[p.id]=!0,r.memory.geometries++),p}function l(d){let p=d.attributes;for(let f in p)t.update(p[f],e.ARRAY_BUFFER)}function u(d){let p=[],f=d.index,v=d.attributes.position,g=0;if(f!==null){let P=f.array;g=f.version;for(let y=0,b=P.length;y<b;y+=3){let U=P[y+0],x=P[y+1],T=P[y+2];p.push(U,x,x,T,T,U)}}else if(v!==void 0){let P=v.array;g=v.version;for(let y=0,b=P.length/3-1;y<b;y+=3){let U=y+0,x=y+1,T=y+2;p.push(U,x,x,T,T,U)}}else return;let m=new(dl(p)?Al:wl)(p,1);m.version=g;let h=n.get(d);h&&t.remove(h),n.set(d,m)}function c(d){let p=n.get(d);if(p){let f=d.index;f!==null&&p.version<f.version&&u(d)}else u(d);return n.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function mg(e,t,r){let i;function a(p){i=p}let n,s;function o(p){n=p.type,s=p.bytesPerElement}function l(p,f){e.drawElements(i,f,n,p*s),r.update(f,i,1)}function u(p,f,v){v!==0&&(e.drawElementsInstanced(i,f,n,p*s,v),r.update(f,i,v))}function c(p,f,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,n,p,0,v);let g=0;for(let m=0;m<v;m++)g+=f[m];r.update(g,i,1)}function d(p,f,v,g){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<p.length;h++)u(p[h]/s,f[h],g[h]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,n,p,0,g,0,v);let h=0;for(let P=0;P<v;P++)h+=f[P]*g[P];r.update(h,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function gg(e){let t={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,s,o){switch(r.calls++,s){case e.TRIANGLES:r.triangles+=o*(n/3);break;case e.LINES:r.lines+=o*(n/2);break;case e.LINE_STRIP:r.lines+=o*(n-1);break;case e.LINE_LOOP:r.lines+=o*n;break;case e.POINTS:r.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:t,render:r,programs:null,autoReset:!0,reset:a,update:i}}function vg(e,t,r){let i=new WeakMap,a=new rt;function n(s,o,l){let u=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0,p=i.get(o);if(p===void 0||p.count!==d){let f=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",f)};p!==void 0&&p.texture.dispose();let v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],P=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],b=0;v===!0&&(b=1),g===!0&&(b=2),m===!0&&(b=3);let U=o.attributes.position.count*b,x=1;U>t.maxTextureSize&&(x=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);let T=new Float32Array(U*x*4*d),R=new gl(T,U,x,d);R.type=ar,R.needsUpdate=!0;let S=b*4;for(let E=0;E<d;E++){let A=h[E],O=P[E],B=y[E],z=U*x*4*E;for(let W=0;W<A.count;W++){let k=W*S;v===!0&&(a.fromBufferAttribute(A,W),T[z+k+0]=a.x,T[z+k+1]=a.y,T[z+k+2]=a.z,T[z+k+3]=0),g===!0&&(a.fromBufferAttribute(O,W),T[z+k+4]=a.x,T[z+k+5]=a.y,T[z+k+6]=a.z,T[z+k+7]=0),m===!0&&(a.fromBufferAttribute(B,W),T[z+k+8]=a.x,T[z+k+9]=a.y,T[z+k+10]=a.z,T[z+k+11]=B.itemSize===4?a.w:1)}}p={count:d,texture:R,size:new oe(U,x)},i.set(o,p),o.addEventListener("dispose",f)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,r);else{let f=0;for(let g=0;g<u.length;g++)f+=u[g];let v=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",u)}l.getUniforms().setValue(e,"morphTargetsTexture",p.texture,r),l.getUniforms().setValue(e,"morphTargetsTextureSize",p.size)}return{update:n}}function _g(e,t,r,i){let a=new WeakMap;function n(l){let u=i.render.frame,c=l.geometry,d=t.get(l,c);if(a.get(d)!==u&&(t.update(d),a.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==u&&(r.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&r.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,u))),l.isSkinnedMesh){let p=l.skeleton;a.get(p)!==u&&(p.update(),a.set(p,u))}return d}function s(){a=new WeakMap}function o(l){let u=l.target;u.removeEventListener("dispose",o),r.remove(u.instanceMatrix),u.instanceColor!==null&&r.remove(u.instanceColor)}return{update:n,dispose:s}}var Tu=new kt,wu=new Xl(1,1),Au=new gl,Ru=new zh,Cu=new Nl,Lu=[],Pu=[],Iu=new Float32Array(16),Uu=new Float32Array(9),Du=new Float32Array(4);function ki(e,t,r){let i=e[0];if(i<=0||i>0)return e;let a=t*r,n=Lu[a];if(n===void 0&&(n=new Float32Array(a),Lu[a]=n),t!==0){i.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=r,e[s].toArray(n,o)}return n}function vt(e,t){if(e.length!==t.length)return!1;for(let r=0,i=e.length;r<i;r++)if(e[r]!==t[r])return!1;return!0}function _t(e,t){for(let r=0,i=t.length;r<i;r++)e[r]=t[r]}function Mn(e,t){let r=Pu[t];r===void 0&&(r=new Int32Array(t),Pu[t]=r);for(let i=0;i!==t;++i)r[i]=e.allocateTextureUnit();return r}function xg(e,t){let r=this.cache;r[0]!==t&&(e.uniform1f(this.addr,t),r[0]=t)}function yg(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(vt(r,t))return;e.uniform2fv(this.addr,t),_t(r,t)}}function Eg(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else if(t.r!==void 0)(r[0]!==t.r||r[1]!==t.g||r[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),r[0]=t.r,r[1]=t.g,r[2]=t.b);else{if(vt(r,t))return;e.uniform3fv(this.addr,t),_t(r,t)}}function Sg(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(vt(r,t))return;e.uniform4fv(this.addr,t),_t(r,t)}}function Mg(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(vt(r,t))return;e.uniformMatrix2fv(this.addr,!1,t),_t(r,t)}else{if(vt(r,i))return;Du.set(i),e.uniformMatrix2fv(this.addr,!1,Du),_t(r,i)}}function bg(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(vt(r,t))return;e.uniformMatrix3fv(this.addr,!1,t),_t(r,t)}else{if(vt(r,i))return;Uu.set(i),e.uniformMatrix3fv(this.addr,!1,Uu),_t(r,i)}}function Tg(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(vt(r,t))return;e.uniformMatrix4fv(this.addr,!1,t),_t(r,t)}else{if(vt(r,i))return;Iu.set(i),e.uniformMatrix4fv(this.addr,!1,Iu),_t(r,i)}}function wg(e,t){let r=this.cache;r[0]!==t&&(e.uniform1i(this.addr,t),r[0]=t)}function Ag(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(vt(r,t))return;e.uniform2iv(this.addr,t),_t(r,t)}}function Rg(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if(vt(r,t))return;e.uniform3iv(this.addr,t),_t(r,t)}}function Cg(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(vt(r,t))return;e.uniform4iv(this.addr,t),_t(r,t)}}function Lg(e,t){let r=this.cache;r[0]!==t&&(e.uniform1ui(this.addr,t),r[0]=t)}function Pg(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(vt(r,t))return;e.uniform2uiv(this.addr,t),_t(r,t)}}function Ig(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if(vt(r,t))return;e.uniform3uiv(this.addr,t),_t(r,t)}}function Ug(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(vt(r,t))return;e.uniform4uiv(this.addr,t),_t(r,t)}}function Dg(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(wu.compareFunction=ol,n=wu):n=Tu,r.setTexture2D(t||n,a)}function Ng(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),r.setTexture3D(t||Ru,a)}function Og(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),r.setTextureCube(t||Cu,a)}function Fg(e,t,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),r.setTexture2DArray(t||Au,a)}function zg(e){switch(e){case 5126:return xg;case 35664:return yg;case 35665:return Eg;case 35666:return Sg;case 35674:return Mg;case 35675:return bg;case 35676:return Tg;case 5124:case 35670:return wg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Lg;case 36294:return Pg;case 36295:return Ig;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Fg}}function Bg(e,t){e.uniform1fv(this.addr,t)}function kg(e,t){let r=ki(t,this.size,2);e.uniform2fv(this.addr,r)}function Vg(e,t){let r=ki(t,this.size,3);e.uniform3fv(this.addr,r)}function Hg(e,t){let r=ki(t,this.size,4);e.uniform4fv(this.addr,r)}function Gg(e,t){let r=ki(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,r)}function Wg(e,t){let r=ki(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,r)}function Xg(e,t){let r=ki(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,r)}function qg(e,t){e.uniform1iv(this.addr,t)}function jg(e,t){e.uniform2iv(this.addr,t)}function Yg(e,t){e.uniform3iv(this.addr,t)}function Zg(e,t){e.uniform4iv(this.addr,t)}function Jg(e,t){e.uniform1uiv(this.addr,t)}function Kg(e,t){e.uniform2uiv(this.addr,t)}function $g(e,t){e.uniform3uiv(this.addr,t)}function Qg(e,t){e.uniform4uiv(this.addr,t)}function e0(e,t,r){let i=this.cache,a=t.length,n=Mn(r,a);vt(i,n)||(e.uniform1iv(this.addr,n),_t(i,n));for(let s=0;s!==a;++s)r.setTexture2D(t[s]||Tu,n[s])}function t0(e,t,r){let i=this.cache,a=t.length,n=Mn(r,a);vt(i,n)||(e.uniform1iv(this.addr,n),_t(i,n));for(let s=0;s!==a;++s)r.setTexture3D(t[s]||Ru,n[s])}function r0(e,t,r){let i=this.cache,a=t.length,n=Mn(r,a);vt(i,n)||(e.uniform1iv(this.addr,n),_t(i,n));for(let s=0;s!==a;++s)r.setTextureCube(t[s]||Cu,n[s])}function i0(e,t,r){let i=this.cache,a=t.length,n=Mn(r,a);vt(i,n)||(e.uniform1iv(this.addr,n),_t(i,n));for(let s=0;s!==a;++s)r.setTexture2DArray(t[s]||Au,n[s])}function a0(e){switch(e){case 5126:return Bg;case 35664:return kg;case 35665:return Vg;case 35666:return Hg;case 35674:return Gg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return qg;case 35667:case 35671:return jg;case 35668:case 35672:return Yg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return Kg;case 36295:return $g;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return r0;case 36289:case 36303:case 36311:case 36292:return i0}}var n0=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=zg(t.type)}},s0=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a0(t.type)}},o0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){let i=this.seq;for(let a=0,n=i.length;a!==n;++a){let s=i[a];s.setValue(e,t[s.id],r)}}},Po=/(\w+)(\])?(\[|\.)?/g;function Nu(e,t){e.seq.push(t),e.map[t.id]=t}function l0(e,t,r){let i=e.name,a=i.length;for(Po.lastIndex=0;;){let n=Po.exec(i),s=Po.lastIndex,o=n[1],l=n[2]==="]",u=n[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===a){Nu(r,u===void 0?new n0(o,e,t):new s0(o,e,t));break}else{let c=r.map[o];c===void 0&&(c=new o0(o),Nu(r,c)),r=c}}}var bn=class{constructor(e,t){this.seq=[],this.map={};let r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){let a=e.getActiveUniform(t,i),n=e.getUniformLocation(t,a.name);l0(a,n,this)}}setValue(e,t,r,i){let a=this.map[t];a!==void 0&&a.setValue(e,r,i)}setOptional(e,t,r){let i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=r[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,i)}}static seqWithValue(e,t){let r=[];for(let i=0,a=e.length;i!==a;++i){let n=e[i];n.id in t&&r.push(n)}return r}};function Ou(e,t,r){let i=e.createShader(t);return e.shaderSource(i,r),e.compileShader(i),i}var u0=37297,c0=0;function h0(e,t){let r=e.split(`
`),i=[],a=Math.max(t-6,0),n=Math.min(t+6,r.length);for(let s=a;s<n;s++){let o=s+1;i.push(`${o===t?">":" "} ${o}: ${r[s]}`)}return i.join(`
`)}var Fu=new We;function d0(e){Je._getMatrix(Fu,Je.workingColorSpace,e);let t=`mat3( ${Fu.elements.map(r=>r.toFixed(4))} )`;switch(Je.getTransfer(e)){case Ba:return[t,"LinearTransferOETF"];case Qe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function zu(e,t,r){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return r.toUpperCase()+`

`+a+`

`+h0(e.getShaderSource(t),s)}else return a}function p0(e,t){let r=d0(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${r[1]}( vec4( value.rgb * ${r[0]}, value.a ) );`,"}"].join(`
`)}function f0(e,t){let r;switch(t){case Kc:r="Linear";break;case $c:r="Reinhard";break;case Qc:r="Cineon";break;case Yo:r="ACESFilmic";break;case th:r="AgX";break;case rh:r="Neutral";break;case eh:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),r="Linear"}return"vec3 "+e+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}var Tn=new C;function m0(){Je.getLuminanceCoefficients(Tn);let e=Tn.x.toFixed(4),t=Tn.y.toFixed(4),r=Tn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g0(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function v0(e){let t=[];for(let r in e){let i=e[r];i!==!1&&t.push("#define "+r+" "+i)}return t.join(`
`)}function _0(e,t){let r={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),r[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return r}function Ta(e){return e!==""}function Bu(e,t){let r=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ku(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var x0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Io(e){return e.replace(x0,E0)}var y0=new Map;function E0(e,t){let r=Ge[t];if(r===void 0){let i=y0.get(t);if(i!==void 0)r=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Io(r)}var S0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(e){return e.replace(S0,M0)}function M0(e,t,r,i){let a="";for(let n=parseInt(t);n<parseInt(r);n++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Hu(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function b0(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Wo?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Lc?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===fr&&(t="SHADOWMAP_TYPE_VSM"),t}function T0(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case fi:case mi:t="ENVMAP_TYPE_CUBE";break;case Ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function w0(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case mi:t="ENVMAP_MODE_REFRACTION";break}return t}function A0(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case qn:t="ENVMAP_BLENDING_MULTIPLY";break;case Zc:t="ENVMAP_BLENDING_MIX";break;case Jc:t="ENVMAP_BLENDING_ADD";break}return t}function R0(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let r=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,r),112)),texelHeight:i,maxMip:r}}function C0(e,t,r,i){let a=e.getContext(),n=r.defines,s=r.vertexShader,o=r.fragmentShader,l=b0(r),u=T0(r),c=w0(r),d=A0(r),p=R0(r),f=g0(r),v=v0(n),g=a.createProgram(),m,h,P=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(m=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,v].filter(Ta).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,v].filter(Ta).join(`
`),h.length>0&&(h+=`
`)):(m=[Hu(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,v,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+c:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",r.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),h=[Hu(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,v,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+u:"",r.envMap?"#define "+c:"",r.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",r.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",r.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==Cr?"#define TONE_MAPPING":"",r.toneMapping!==Cr?Ge.tonemapping_pars_fragment:"",r.toneMapping!==Cr?f0("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,p0("linearToOutputTexel",r.outputColorSpace),m0(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(Ta).join(`
`)),s=Io(s),s=Bu(s,r),s=ku(s,r),o=Io(o),o=Bu(o,r),o=ku(o,r),s=Vu(s),o=Vu(o),r.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",r.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let y=P+m+s,b=P+h+o,U=Ou(a,a.VERTEX_SHADER,y),x=Ou(a,a.FRAGMENT_SHADER,b);a.attachShader(g,U),a.attachShader(g,x),r.index0AttributeName!==void 0?a.bindAttribLocation(g,0,r.index0AttributeName):r.morphTargets===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g);function T(A){if(e.debug.checkShaderErrors){let O=a.getProgramInfoLog(g)||"",B=a.getShaderInfoLog(U)||"",z=a.getShaderInfoLog(x)||"",W=O.trim(),k=B.trim(),$=z.trim(),G=!0,re=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(G=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,g,U,x);else{let pe=zu(a,U,"vertex"),Le=zu(a,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+W+`
`+pe+`
`+Le)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(k===""||$==="")&&(re=!1);re&&(A.diagnostics={runnable:G,programLog:W,vertexShader:{log:k,prefix:m},fragmentShader:{log:$,prefix:h}})}a.deleteShader(U),a.deleteShader(x),R=new bn(a,g),S=_0(a,g)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let E=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(g,u0)),E},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=c0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=U,this.fragmentShader=x,this}var L0=0,P0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(r),n=this._getShaderCacheForMaterial(e);return n.has(i)===!1&&(n.add(i),i.usedTimes++),n.has(a)===!1&&(n.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){let t=this.shaderCache,r=t.get(e);return r===void 0&&(r=new I0(e),t.set(e,r)),r}},I0=class{constructor(e){this.id=L0++,this.code=e,this.usedTimes=0}};function U0(e,t,r,i,a,n,s){let o=new qs,l=new P0,u=new Set,c=[],d=a.logarithmicDepthBuffer,p=a.vertexTextures,f=a.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return u.add(S),S===0?"uv":`uv${S}`}function m(S,E,A,O,B){let z=O.fog,W=B.geometry,k=S.isMeshStandardMaterial?O.environment:null,$=(S.isMeshStandardMaterial?r:t).get(S.envMap||k),G=$&&$.mapping===Ia?$.image.height:null,re=v[S.type];S.precision!==null&&(f=a.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let pe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Le=pe!==void 0?pe.length:0,De=0;W.morphAttributes.position!==void 0&&(De=1),W.morphAttributes.normal!==void 0&&(De=2),W.morphAttributes.color!==void 0&&(De=3);let $e,Ye,j,ue;if(re){let tt=ur[re];$e=tt.vertexShader,Ye=tt.fragmentShader}else $e=S.vertexShader,Ye=S.fragmentShader,l.update(S),j=l.getVertexShaderID(S),ue=l.getFragmentShaderID(S);let he=e.getRenderTarget(),xe=e.state.buffers.depth.getReversed(),Ie=B.isInstancedMesh===!0,Me=B.isBatchedMesh===!0,qe=!!S.map,L=!!S.matcap,Y=!!$,Q=!!S.aoMap,ee=!!S.lightMap,Z=!!S.bumpMap,de=!!S.normalMap,ae=!!S.displacementMap,se=!!S.emissiveMap,Be=!!S.metalnessMap,Ve=!!S.roughnessMap,ke=S.anisotropy>0,w=S.clearcoat>0,_=S.dispersion>0,N=S.iridescence>0,q=S.sheen>0,J=S.transmission>0,X=ke&&!!S.anisotropyMap,ye=w&&!!S.clearcoatMap,le=w&&!!S.clearcoatNormalMap,be=w&&!!S.clearcoatRoughnessMap,Ae=N&&!!S.iridescenceMap,ne=N&&!!S.iridescenceThicknessMap,me=q&&!!S.sheenColorMap,Ue=q&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,ve=!!S.specularColorMap,je=!!S.specularIntensityMap,I=J&&!!S.transmissionMap,ge=J&&!!S.thicknessMap,ce=!!S.gradientMap,we=!!S.alphaMap,ie=S.alphaTest>0,K=!!S.alphaHash,Te=!!S.extensions,Pe=Cr;S.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let gt={shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:$e,fragmentShader:Ye,defines:S.defines,customVertexShaderID:j,customFragmentShaderID:ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Me,batchingColor:Me&&B._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&B.instanceColor!==null,instancingMorph:Ie&&B.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:he===null?e.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:vi,alphaToCoverage:!!S.alphaToCoverage,map:qe,matcap:L,envMap:Y,envMapMode:Y&&$.mapping,envMapCubeUVHeight:G,aoMap:Q,lightMap:ee,bumpMap:Z,normalMap:de,displacementMap:p&&ae,emissiveMap:se,normalMapObjectSpace:de&&S.normalMapType===sh,normalMapTangentSpace:de&&S.normalMapType===Ds,metalnessMap:Be,roughnessMap:Ve,anisotropy:ke,anisotropyMap:X,clearcoat:w,clearcoatMap:ye,clearcoatNormalMap:le,clearcoatRoughnessMap:be,dispersion:_,iridescence:N,iridescenceMap:Ae,iridescenceThicknessMap:ne,sheen:q,sheenColorMap:me,sheenRoughnessMap:Ue,specularMap:Ce,specularColorMap:ve,specularIntensityMap:je,transmission:J,transmissionMap:I,thicknessMap:ge,gradientMap:ce,opaque:S.transparent===!1&&S.blending===di&&S.alphaToCoverage===!1,alphaMap:we,alphaTest:ie,alphaHash:K,combine:S.combine,mapUv:qe&&g(S.map.channel),aoMapUv:Q&&g(S.aoMap.channel),lightMapUv:ee&&g(S.lightMap.channel),bumpMapUv:Z&&g(S.bumpMap.channel),normalMapUv:de&&g(S.normalMap.channel),displacementMapUv:ae&&g(S.displacementMap.channel),emissiveMapUv:se&&g(S.emissiveMap.channel),metalnessMapUv:Be&&g(S.metalnessMap.channel),roughnessMapUv:Ve&&g(S.roughnessMap.channel),anisotropyMapUv:X&&g(S.anisotropyMap.channel),clearcoatMapUv:ye&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:me&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&g(S.sheenRoughnessMap.channel),specularMapUv:Ce&&g(S.specularMap.channel),specularColorMapUv:ve&&g(S.specularColorMap.channel),specularIntensityMapUv:je&&g(S.specularIntensityMap.channel),transmissionMapUv:I&&g(S.transmissionMap.channel),thicknessMapUv:ge&&g(S.thicknessMap.channel),alphaMapUv:we&&g(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(de||ke),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(qe||we),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:De,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:e.shadowMap.enabled&&A.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:qe&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===Qe,decodeVideoTextureEmissive:se&&S.emissiveMap.isVideoTexture===!0&&Je.getTransfer(S.emissiveMap.colorSpace)===Qe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Dt,flipSided:S.side===Ct,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Te&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&S.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return gt.vertexUv1s=u.has(1),gt.vertexUv2s=u.has(2),gt.vertexUv3s=u.has(3),u.clear(),gt}function h(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let A in S.defines)E.push(A),E.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(P(E,S),y(E,S),E.push(e.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function P(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function y(S,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),S.push(o.mask)}function b(S){let E=v[S.type],A;if(E){let O=ur[E];A=Kh.clone(O.uniforms)}else A=S.uniforms;return A}function U(S,E){let A;for(let O=0,B=c.length;O<B;O++){let z=c[O];if(z.cacheKey===E){A=z,++A.usedTimes;break}}return A===void 0&&(A=new C0(e,E,S,n),c.push(A)),A}function x(S){if(--S.usedTimes===0){let E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),S.destroy()}}function T(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:b,acquireProgram:U,releaseProgram:x,releaseShaderCache:T,programs:c,dispose:R}}function D0(){let e=new WeakMap;function t(s){return e.has(s)}function r(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:r,remove:i,update:a,dispose:n}}function N0(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Gu(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Wu(){let e=[],t=0,r=[],i=[],a=[];function n(){t=0,r.length=0,i.length=0,a.length=0}function s(d,p,f,v,g,m){let h=e[t];return h===void 0?(h={id:d.id,object:d,geometry:p,material:f,groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},e[t]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=f,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=g,h.group=m),t++,h}function o(d,p,f,v,g,m){let h=s(d,p,f,v,g,m);f.transmission>0?i.push(h):f.transparent===!0?a.push(h):r.push(h)}function l(d,p,f,v,g,m){let h=s(d,p,f,v,g,m);f.transmission>0?i.unshift(h):f.transparent===!0?a.unshift(h):r.unshift(h)}function u(d,p){r.length>1&&r.sort(d||N0),i.length>1&&i.sort(p||Gu),a.length>1&&a.sort(p||Gu)}function c(){for(let d=t,p=e.length;d<p;d++){let f=e[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:r,transmissive:i,transparent:a,init:n,push:o,unshift:l,finish:c,sort:u}}function O0(){let e=new WeakMap;function t(i,a){let n=e.get(i),s;return n===void 0?(s=new Wu,e.set(i,[s])):a>=n.length?(s=new Wu,n.push(s)):s=n[a],s}function r(){e=new WeakMap}return{get:t,dispose:r}}function F0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={direction:new C,color:new Xe};break;case"SpotLight":r={position:new C,direction:new C,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new C,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":r={direction:new C,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":r={color:new Xe,position:new C,halfWidth:new C,halfHeight:new C};break}return e[t.id]=r,r}}}function z0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=r,r}}}var B0=0;function k0(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function V0(e){let t=new F0,r=z0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new C);let a=new C,n=new nt,s=new nt;function o(u){let c=0,d=0,p=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,v=0,g=0,m=0,h=0,P=0,y=0,b=0,U=0,x=0,T=0;u.sort(k0);for(let S=0,E=u.length;S<E;S++){let A=u[S],O=A.color,B=A.intensity,z=A.distance,W=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)c+=O.r*B,d+=O.g*B,p+=O.b*B;else if(A.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(A.sh.coefficients[k],B);T++}else if(A.isDirectionalLight){let k=t.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let $=A.shadow,G=r.get(A);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=W,i.directionalShadowMatrix[f]=A.shadow.matrix,P++}i.directional[f]=k,f++}else if(A.isSpotLight){let k=t.get(A);k.position.setFromMatrixPosition(A.matrixWorld),k.color.copy(O).multiplyScalar(B),k.distance=z,k.coneCos=Math.cos(A.angle),k.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),k.decay=A.decay,i.spot[g]=k;let $=A.shadow;if(A.map&&(i.spotLightMap[U]=A.map,U++,$.updateMatrices(A),A.castShadow&&x++),i.spotLightMatrix[g]=$.matrix,A.castShadow){let G=r.get(A);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.spotShadow[g]=G,i.spotShadowMap[g]=W,b++}g++}else if(A.isRectAreaLight){let k=t.get(A);k.color.copy(O).multiplyScalar(B),k.halfWidth.set(A.width*.5,0,0),k.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=k,m++}else if(A.isPointLight){let k=t.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),k.distance=A.distance,k.decay=A.decay,A.castShadow){let $=A.shadow,G=r.get(A);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,i.pointShadow[v]=G,i.pointShadowMap[v]=W,i.pointShadowMatrix[v]=A.shadow.matrix,y++}i.point[v]=k,v++}else if(A.isHemisphereLight){let k=t.get(A);k.skyColor.copy(A.color).multiplyScalar(B),k.groundColor.copy(A.groundColor).multiplyScalar(B),i.hemi[h]=k,h++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=p;let R=i.hash;(R.directionalLength!==f||R.pointLength!==v||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==h||R.numDirectionalShadows!==P||R.numPointShadows!==y||R.numSpotShadows!==b||R.numSpotMaps!==U||R.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=P,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+U-x,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=x,i.numLightProbes=T,R.directionalLength=f,R.pointLength=v,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=h,R.numDirectionalShadows=P,R.numPointShadows=y,R.numSpotShadows=b,R.numSpotMaps=U,R.numLightProbes=T,i.version=B0++)}function l(u,c){let d=0,p=0,f=0,v=0,g=0,m=c.matrixWorldInverse;for(let h=0,P=u.length;h<P;h++){let y=u[h];if(y.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(m),d++}else if(y.isSpotLight){let b=i.spot[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let b=i.rectArea[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),s.identity(),n.copy(y.matrixWorld),n.premultiply(m),s.extractRotation(n),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),v++}else if(y.isPointLight){let b=i.point[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){let b=i.hemi[g];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Xu(e){let t=new V0(e),r=[],i=[];function a(c){u.camera=c,r.length=0,i.length=0}function n(c){r.push(c)}function s(c){i.push(c)}function o(){t.setup(r)}function l(c){t.setupView(r,c)}let u={lightsArray:r,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:u,setupLights:o,setupLightsView:l,pushLight:n,pushShadow:s}}function H0(e){let t=new WeakMap;function r(a,n=0){let s=t.get(a),o;return s===void 0?(o=new Xu(e),t.set(a,[o])):n>=s.length?(o=new Xu(e),s.push(o)):o=s[n],o}function i(){t=new WeakMap}return{get:r,dispose:i}}var G0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W0=`uniform sampler2D shadow_pass;
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
}`;function X0(e,t,r){let i=new so,a=new oe,n=new oe,s=new rt,o=new Gd({depthPacking:nh}),l=new Wd,u={},c=r.maxTextureSize,d={[Ar]:Ct,[Ct]:Ar,[Dt]:Dt},p=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:G0,fragmentShader:W0}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let v=new Mt;v.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new ct(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wo;let h=this.type;this.render=function(x,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;let S=e.getRenderTarget(),E=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),O=e.state;O.setBlending(Rr),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let B=h!==fr&&this.type===fr,z=h===fr&&this.type!==fr;for(let W=0,k=x.length;W<k;W++){let $=x[W],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);let re=G.getFrameExtents();if(a.multiply(re),n.copy(G.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(n.x=Math.floor(c/re.x),a.x=n.x*re.x,G.mapSize.x=n.x),a.y>c&&(n.y=Math.floor(c/re.y),a.y=n.y*re.y,G.mapSize.y=n.y)),G.map===null||B===!0||z===!0){let Le=this.type!==fr?{minFilter:Nt,magFilter:Nt}:{};G.map!==null&&G.map.dispose(),G.map=new Yr(a.x,a.y,Le),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}e.setRenderTarget(G.map),e.clear();let pe=G.getViewportCount();for(let Le=0;Le<pe;Le++){let De=G.getViewport(Le);s.set(n.x*De.x,n.y*De.y,n.x*De.z,n.y*De.w),O.viewport(s),G.updateMatrices($,Le),i=G.getFrustum(),b(T,R,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===fr&&P(G,R),G.needsUpdate=!1}h=this.type,m.needsUpdate=!1,e.setRenderTarget(S,E,A)};function P(x,T){let R=t.update(g);p.defines.VSM_SAMPLES!==x.blurSamples&&(p.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Yr(a.x,a.y)),p.uniforms.shadow_pass.value=x.map.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,e.setRenderTarget(x.mapPass),e.clear(),e.renderBufferDirect(T,null,R,p,g,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,e.setRenderTarget(x.map),e.clear(),e.renderBufferDirect(T,null,R,f,g,null)}function y(x,T,R,S){let E=null,A=R.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(A!==void 0)E=A;else if(E=R.isPointLight===!0?l:o,e.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let O=E.uuid,B=T.uuid,z=u[O];z===void 0&&(z={},u[O]=z);let W=z[B];W===void 0&&(W=E.clone(),z[B]=W,T.addEventListener("dispose",U)),E=W}if(E.visible=T.visible,E.wireframe=T.wireframe,S===fr?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:d[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let O=e.properties.get(E);O.light=R}return E}function b(x,T,R,S,E){if(x.visible===!1)return;if(x.layers.test(T.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&E===fr)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,x.matrixWorld);let O=t.update(x),B=x.material;if(Array.isArray(B)){let z=O.groups;for(let W=0,k=z.length;W<k;W++){let $=z[W],G=B[$.materialIndex];if(G&&G.visible){let re=y(x,G,S,E);x.onBeforeShadow(e,x,T,R,O,re,$),e.renderBufferDirect(R,null,O,re,x,$),x.onAfterShadow(e,x,T,R,O,re,$)}}}else if(B.visible){let z=y(x,B,S,E);x.onBeforeShadow(e,x,T,R,O,z,null),e.renderBufferDirect(R,null,O,z,x,null),x.onAfterShadow(e,x,T,R,O,z,null)}}let A=x.children;for(let O=0,B=A.length;O<B;O++)b(A[O],T,R,S,E)}function U(x){x.target.removeEventListener("dispose",U);for(let T in u){let R=u[T],S=x.target.uuid;S in R&&(R[S].dispose(),delete R[S])}}}var q0={[Bn]:kn,[Vn]:Wn,[Hn]:Xn,[pi]:Gn,[kn]:Bn,[Wn]:Vn,[Xn]:Hn,[Gn]:pi};function j0(e,t){function r(){let I=!1,ge=new rt,ce=null,we=new rt(0,0,0,0);return{setMask:function(ie){ce!==ie&&!I&&(e.colorMask(ie,ie,ie,ie),ce=ie)},setLocked:function(ie){I=ie},setClear:function(ie,K,Te,Pe,gt){gt===!0&&(ie*=Pe,K*=Pe,Te*=Pe),ge.set(ie,K,Te,Pe),we.equals(ge)===!1&&(e.clearColor(ie,K,Te,Pe),we.copy(ge))},reset:function(){I=!1,ce=null,we.set(-1,0,0,0)}}}function i(){let I=!1,ge=!1,ce=null,we=null,ie=null;return{setReversed:function(K){if(ge!==K){let Te=t.get("EXT_clip_control");K?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ge=K;let Pe=ie;ie=null,this.setClear(Pe)}},getReversed:function(){return ge},setTest:function(K){K?he(e.DEPTH_TEST):xe(e.DEPTH_TEST)},setMask:function(K){ce!==K&&!I&&(e.depthMask(K),ce=K)},setFunc:function(K){if(ge&&(K=q0[K]),we!==K){switch(K){case Bn:e.depthFunc(e.NEVER);break;case kn:e.depthFunc(e.ALWAYS);break;case Vn:e.depthFunc(e.LESS);break;case pi:e.depthFunc(e.LEQUAL);break;case Hn:e.depthFunc(e.EQUAL);break;case Gn:e.depthFunc(e.GEQUAL);break;case Wn:e.depthFunc(e.GREATER);break;case Xn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}we=K}},setLocked:function(K){I=K},setClear:function(K){ie!==K&&(ge&&(K=1-K),e.clearDepth(K),ie=K)},reset:function(){I=!1,ce=null,we=null,ie=null,ge=!1}}}function a(){let I=!1,ge=null,ce=null,we=null,ie=null,K=null,Te=null,Pe=null,gt=null;return{setTest:function(tt){I||(tt?he(e.STENCIL_TEST):xe(e.STENCIL_TEST))},setMask:function(tt){ge!==tt&&!I&&(e.stencilMask(tt),ge=tt)},setFunc:function(tt,dr,pr){(ce!==tt||we!==dr||ie!==pr)&&(e.stencilFunc(tt,dr,pr),ce=tt,we=dr,ie=pr)},setOp:function(tt,dr,pr){(K!==tt||Te!==dr||Pe!==pr)&&(e.stencilOp(tt,dr,pr),K=tt,Te=dr,Pe=pr)},setLocked:function(tt){I=tt},setClear:function(tt){gt!==tt&&(e.clearStencil(tt),gt=tt)},reset:function(){I=!1,ge=null,ce=null,we=null,ie=null,K=null,Te=null,Pe=null,gt=null}}}let n=new r,s=new i,o=new a,l=new WeakMap,u=new WeakMap,c={},d={},p=new WeakMap,f=[],v=null,g=!1,m=null,h=null,P=null,y=null,b=null,U=null,x=null,T=new Xe(0,0,0),R=0,S=!1,E=null,A=null,O=null,B=null,z=null,W=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,$=0,G=e.getParameter(e.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=$>=2);let re=null,pe={},Le=e.getParameter(e.SCISSOR_BOX),De=e.getParameter(e.VIEWPORT),$e=new rt().fromArray(Le),Ye=new rt().fromArray(De);function j(I,ge,ce,we){let ie=new Uint8Array(4),K=e.createTexture();e.bindTexture(I,K),e.texParameteri(I,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(I,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Te=0;Te<ce;Te++)I===e.TEXTURE_3D||I===e.TEXTURE_2D_ARRAY?e.texImage3D(ge,0,e.RGBA,1,1,we,0,e.RGBA,e.UNSIGNED_BYTE,ie):e.texImage2D(ge+Te,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ie);return K}let ue={};ue[e.TEXTURE_2D]=j(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=j(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=j(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=j(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(e.DEPTH_TEST),s.setFunc(pi),Z(!1),de(Go),he(e.CULL_FACE),Q(Rr);function he(I){c[I]!==!0&&(e.enable(I),c[I]=!0)}function xe(I){c[I]!==!1&&(e.disable(I),c[I]=!1)}function Ie(I,ge){return d[I]!==ge?(e.bindFramebuffer(I,ge),d[I]=ge,I===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=ge),I===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=ge),!0):!1}function Me(I,ge){let ce=f,we=!1;if(I){ce=p.get(ge),ce===void 0&&(ce=[],p.set(ge,ce));let ie=I.textures;if(ce.length!==ie.length||ce[0]!==e.COLOR_ATTACHMENT0){for(let K=0,Te=ie.length;K<Te;K++)ce[K]=e.COLOR_ATTACHMENT0+K;ce.length=ie.length,we=!0}}else ce[0]!==e.BACK&&(ce[0]=e.BACK,we=!0);we&&e.drawBuffers(ce)}function qe(I){return v!==I?(e.useProgram(I),v=I,!0):!1}let L={[Hr]:e.FUNC_ADD,[Ic]:e.FUNC_SUBTRACT,[Uc]:e.FUNC_REVERSE_SUBTRACT};L[Dc]=e.MIN,L[Nc]=e.MAX;let Y={[Oc]:e.ZERO,[Fc]:e.ONE,[zc]:e.SRC_COLOR,[Fn]:e.SRC_ALPHA,[Wc]:e.SRC_ALPHA_SATURATE,[Hc]:e.DST_COLOR,[kc]:e.DST_ALPHA,[Bc]:e.ONE_MINUS_SRC_COLOR,[zn]:e.ONE_MINUS_SRC_ALPHA,[Gc]:e.ONE_MINUS_DST_COLOR,[Vc]:e.ONE_MINUS_DST_ALPHA,[Xc]:e.CONSTANT_COLOR,[qc]:e.ONE_MINUS_CONSTANT_COLOR,[jc]:e.CONSTANT_ALPHA,[Yc]:e.ONE_MINUS_CONSTANT_ALPHA};function Q(I,ge,ce,we,ie,K,Te,Pe,gt,tt){if(I===Rr){g===!0&&(xe(e.BLEND),g=!1);return}if(g===!1&&(he(e.BLEND),g=!0),I!==Pc){if(I!==m||tt!==S){if((h!==Hr||b!==Hr)&&(e.blendEquation(e.FUNC_ADD),h=Hr,b=Hr),tt)switch(I){case di:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Xo:e.blendFunc(e.ONE,e.ONE);break;case qo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case jo:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case di:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Xo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case qo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}P=null,y=null,U=null,x=null,T.set(0,0,0),R=0,m=I,S=tt}return}ie=ie||ge,K=K||ce,Te=Te||we,(ge!==h||ie!==b)&&(e.blendEquationSeparate(L[ge],L[ie]),h=ge,b=ie),(ce!==P||we!==y||K!==U||Te!==x)&&(e.blendFuncSeparate(Y[ce],Y[we],Y[K],Y[Te]),P=ce,y=we,U=K,x=Te),(Pe.equals(T)===!1||gt!==R)&&(e.blendColor(Pe.r,Pe.g,Pe.b,gt),T.copy(Pe),R=gt),m=I,S=!1}function ee(I,ge){I.side===Dt?xe(e.CULL_FACE):he(e.CULL_FACE);let ce=I.side===Ct;ge&&(ce=!ce),Z(ce),I.blending===di&&I.transparent===!1?Q(Rr):Q(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),n.setMask(I.colorWrite);let we=I.stencilWrite;o.setTest(we),we&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),se(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?he(e.SAMPLE_ALPHA_TO_COVERAGE):xe(e.SAMPLE_ALPHA_TO_COVERAGE)}function Z(I){E!==I&&(I?e.frontFace(e.CW):e.frontFace(e.CCW),E=I)}function de(I){I!==Rc?(he(e.CULL_FACE),I!==A&&(I===Go?e.cullFace(e.BACK):I===Cc?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):xe(e.CULL_FACE),A=I}function ae(I){I!==O&&(k&&e.lineWidth(I),O=I)}function se(I,ge,ce){I?(he(e.POLYGON_OFFSET_FILL),(B!==ge||z!==ce)&&(e.polygonOffset(ge,ce),B=ge,z=ce)):xe(e.POLYGON_OFFSET_FILL)}function Be(I){I?he(e.SCISSOR_TEST):xe(e.SCISSOR_TEST)}function Ve(I){I===void 0&&(I=e.TEXTURE0+W-1),re!==I&&(e.activeTexture(I),re=I)}function ke(I,ge,ce){ce===void 0&&(re===null?ce=e.TEXTURE0+W-1:ce=re);let we=pe[ce];we===void 0&&(we={type:void 0,texture:void 0},pe[ce]=we),(we.type!==I||we.texture!==ge)&&(re!==ce&&(e.activeTexture(ce),re=ce),e.bindTexture(I,ge||ue[I]),we.type=I,we.texture=ge)}function w(){let I=pe[re];I!==void 0&&I.type!==void 0&&(e.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{e.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function N(){try{e.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{e.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{e.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{e.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{e.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{e.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{e.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{e.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{e.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(I){$e.equals(I)===!1&&(e.scissor(I.x,I.y,I.z,I.w),$e.copy(I))}function Ue(I){Ye.equals(I)===!1&&(e.viewport(I.x,I.y,I.z,I.w),Ye.copy(I))}function Ce(I,ge){let ce=u.get(ge);ce===void 0&&(ce=new WeakMap,u.set(ge,ce));let we=ce.get(I);we===void 0&&(we=e.getUniformBlockIndex(ge,I.name),ce.set(I,we))}function ve(I,ge){let ce=u.get(ge).get(I);l.get(ge)!==ce&&(e.uniformBlockBinding(ge,ce,I.__bindingPointIndex),l.set(ge,ce))}function je(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},re=null,pe={},d={},p=new WeakMap,f=[],v=null,g=!1,m=null,h=null,P=null,y=null,b=null,U=null,x=null,T=new Xe(0,0,0),R=0,S=!1,E=null,A=null,O=null,B=null,z=null,$e.set(0,0,e.canvas.width,e.canvas.height),Ye.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:he,disable:xe,bindFramebuffer:Ie,drawBuffers:Me,useProgram:qe,setBlending:Q,setMaterial:ee,setFlipSided:Z,setCullFace:de,setLineWidth:ae,setPolygonOffset:se,setScissorTest:Be,activeTexture:Ve,bindTexture:ke,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:Ae,texImage3D:ne,updateUBOMapping:Ce,uniformBlockBinding:ve,texStorage2D:le,texStorage3D:be,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:ye,scissor:me,viewport:Ue,reset:je}}function Y0(e,t,r,i,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new oe,c=new WeakMap,d,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,_){return f?new OffscreenCanvas(w,_):Va("canvas")}function g(w,_,N){let q=1,J=ke(w);if((J.width>N||J.height>N)&&(q=N/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let X=Math.floor(q*J.width),ye=Math.floor(q*J.height);d===void 0&&(d=v(X,ye));let le=_?v(X,ye):d;return le.width=X,le.height=ye,le.getContext("2d").drawImage(w,0,0,X,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+ye+")."),le}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function h(w){e.generateMipmap(w)}function P(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(w,_,N,q,J=!1){if(w!==null){if(e[w]!==void 0)return e[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=_;if(_===e.RED&&(N===e.FLOAT&&(X=e.R32F),N===e.HALF_FLOAT&&(X=e.R16F),N===e.UNSIGNED_BYTE&&(X=e.R8)),_===e.RED_INTEGER&&(N===e.UNSIGNED_BYTE&&(X=e.R8UI),N===e.UNSIGNED_SHORT&&(X=e.R16UI),N===e.UNSIGNED_INT&&(X=e.R32UI),N===e.BYTE&&(X=e.R8I),N===e.SHORT&&(X=e.R16I),N===e.INT&&(X=e.R32I)),_===e.RG&&(N===e.FLOAT&&(X=e.RG32F),N===e.HALF_FLOAT&&(X=e.RG16F),N===e.UNSIGNED_BYTE&&(X=e.RG8)),_===e.RG_INTEGER&&(N===e.UNSIGNED_BYTE&&(X=e.RG8UI),N===e.UNSIGNED_SHORT&&(X=e.RG16UI),N===e.UNSIGNED_INT&&(X=e.RG32UI),N===e.BYTE&&(X=e.RG8I),N===e.SHORT&&(X=e.RG16I),N===e.INT&&(X=e.RG32I)),_===e.RGB_INTEGER&&(N===e.UNSIGNED_BYTE&&(X=e.RGB8UI),N===e.UNSIGNED_SHORT&&(X=e.RGB16UI),N===e.UNSIGNED_INT&&(X=e.RGB32UI),N===e.BYTE&&(X=e.RGB8I),N===e.SHORT&&(X=e.RGB16I),N===e.INT&&(X=e.RGB32I)),_===e.RGBA_INTEGER&&(N===e.UNSIGNED_BYTE&&(X=e.RGBA8UI),N===e.UNSIGNED_SHORT&&(X=e.RGBA16UI),N===e.UNSIGNED_INT&&(X=e.RGBA32UI),N===e.BYTE&&(X=e.RGBA8I),N===e.SHORT&&(X=e.RGBA16I),N===e.INT&&(X=e.RGBA32I)),_===e.RGB&&(N===e.UNSIGNED_INT_5_9_9_9_REV&&(X=e.RGB9_E5),N===e.UNSIGNED_INT_10F_11F_11F_REV&&(X=e.R11F_G11F_B10F)),_===e.RGBA){let ye=J?Ba:Je.getTransfer(q);N===e.FLOAT&&(X=e.RGBA32F),N===e.HALF_FLOAT&&(X=e.RGBA16F),N===e.UNSIGNED_BYTE&&(X=ye===Qe?e.SRGB8_ALPHA8:e.RGBA8),N===e.UNSIGNED_SHORT_4_4_4_4&&(X=e.RGBA4),N===e.UNSIGNED_SHORT_5_5_5_1&&(X=e.RGB5_A1)}return(X===e.R16F||X===e.R32F||X===e.RG16F||X===e.RG32F||X===e.RGBA16F||X===e.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function b(w,_){let N;return w?_===null||_===Xr||_===Ji?N=e.DEPTH24_STENCIL8:_===ar?N=e.DEPTH32F_STENCIL8:_===Yi&&(N=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Xr||_===Ji?N=e.DEPTH_COMPONENT24:_===ar?N=e.DEPTH_COMPONENT32F:_===Yi&&(N=e.DEPTH_COMPONENT16),N}function U(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Nt&&w.minFilter!==rr?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function x(w){let _=w.target;_.removeEventListener("dispose",x),R(_),_.isVideoTexture&&c.delete(_)}function T(w){let _=w.target;_.removeEventListener("dispose",T),E(_)}function R(w){let _=i.get(w);if(_.__webglInit===void 0)return;let N=w.source,q=p.get(N);if(q){let J=q[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(w),Object.keys(q).length===0&&p.delete(N)}i.remove(w)}function S(w){let _=i.get(w);e.deleteTexture(_.__webglTexture);let N=w.source,q=p.get(N);delete q[_.__cacheKey],s.memory.textures--}function E(w){let _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let J=0;J<_.__webglFramebuffer[q].length;J++)e.deleteFramebuffer(_.__webglFramebuffer[q][J]);else e.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)e.deleteFramebuffer(_.__webglFramebuffer[q]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let N=w.textures;for(let q=0,J=N.length;q<J;q++){let X=i.get(N[q]);X.__webglTexture&&(e.deleteTexture(X.__webglTexture),s.memory.textures--),i.remove(N[q])}i.remove(w)}let A=0;function O(){A=0}function B(){let w=A;return w>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+a.maxTextures),A+=1,w}function z(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function W(w,_){let N=i.get(w);if(w.isVideoTexture&&Be(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&N.__version!==w.version){let q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(N,w,_);return}}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);r.bindTexture(e.TEXTURE_2D,N.__webglTexture,e.TEXTURE0+_)}function k(w,_){let N=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){ue(N,w,_);return}r.bindTexture(e.TEXTURE_2D_ARRAY,N.__webglTexture,e.TEXTURE0+_)}function $(w,_){let N=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){ue(N,w,_);return}r.bindTexture(e.TEXTURE_3D,N.__webglTexture,e.TEXTURE0+_)}function G(w,_){let N=i.get(w);if(w.version>0&&N.__version!==w.version){he(N,w,_);return}r.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture,e.TEXTURE0+_)}let re={[gi]:e.REPEAT,[Gr]:e.CLAMP_TO_EDGE,[Zn]:e.MIRRORED_REPEAT},pe={[Nt]:e.NEAREST,[ih]:e.NEAREST_MIPMAP_NEAREST,[Ua]:e.NEAREST_MIPMAP_LINEAR,[rr]:e.LINEAR,[Jn]:e.LINEAR_MIPMAP_NEAREST,[Wr]:e.LINEAR_MIPMAP_LINEAR},Le={[oh]:e.NEVER,[ph]:e.ALWAYS,[lh]:e.LESS,[ol]:e.LEQUAL,[uh]:e.EQUAL,[dh]:e.GEQUAL,[ch]:e.GREATER,[hh]:e.NOTEQUAL};function De(w,_){if(_.type===ar&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===rr||_.magFilter===Jn||_.magFilter===Ua||_.magFilter===Wr||_.minFilter===rr||_.minFilter===Jn||_.minFilter===Ua||_.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,re[_.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,re[_.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,re[_.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,pe[_.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,pe[_.minFilter]),_.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,Le[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Nt||_.minFilter!==Ua&&_.minFilter!==Wr||_.type===ar&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function $e(w,_){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",x));let q=_.source,J=p.get(q);J===void 0&&(J={},p.set(q,J));let X=z(_);if(X!==w.__cacheKey){J[X]===void 0&&(J[X]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,N=!0),J[X].usedTimes++;let ye=J[w.__cacheKey];ye!==void 0&&(J[w.__cacheKey].usedTimes--,ye.usedTimes===0&&S(_)),w.__cacheKey=X,w.__webglTexture=J[X].texture}return N}function Ye(w,_,N){return Math.floor(Math.floor(w/N)/_)}function j(w,_,N,q){let J=w.updateRanges;if(J.length===0)r.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,N,q,_.data);else{J.sort((Ae,ne)=>Ae.start-ne.start);let X=0;for(let Ae=1;Ae<J.length;Ae++){let ne=J[X],me=J[Ae],Ue=ne.start+ne.count,Ce=Ye(me.start,_.width,4),ve=Ye(ne.start,_.width,4);me.start<=Ue+1&&Ce===ve&&Ye(me.start+me.count-1,_.width,4)===Ce?ne.count=Math.max(ne.count,me.start+me.count-ne.start):(++X,J[X]=me)}J.length=X+1;let ye=e.getParameter(e.UNPACK_ROW_LENGTH),le=e.getParameter(e.UNPACK_SKIP_PIXELS),be=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let Ae=0,ne=J.length;Ae<ne;Ae++){let me=J[Ae],Ue=Math.floor(me.start/4),Ce=Math.ceil(me.count/4),ve=Ue%_.width,je=Math.floor(Ue/_.width),I=Ce;e.pixelStorei(e.UNPACK_SKIP_PIXELS,ve),e.pixelStorei(e.UNPACK_SKIP_ROWS,je),r.texSubImage2D(e.TEXTURE_2D,0,ve,je,I,1,N,q,_.data)}w.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ye),e.pixelStorei(e.UNPACK_SKIP_PIXELS,le),e.pixelStorei(e.UNPACK_SKIP_ROWS,be)}}function ue(w,_,N){let q=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=e.TEXTURE_3D);let J=$e(w,_),X=_.source;r.bindTexture(q,w.__webglTexture,e.TEXTURE0+N);let ye=i.get(X);if(X.version!==ye.__version||J===!0){r.activeTexture(e.TEXTURE0+N);let le=Je.getPrimaries(Je.workingColorSpace),be=_.colorSpace===Lr?null:Je.getPrimaries(_.colorSpace),Ae=_.colorSpace===Lr||le===be?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ne=g(_.image,!1,a.maxTextureSize);ne=Ve(_,ne);let me=n.convert(_.format,_.colorSpace),Ue=n.convert(_.type),Ce=y(_.internalFormat,me,Ue,_.colorSpace,_.isVideoTexture);De(q,_);let ve,je=_.mipmaps,I=_.isVideoTexture!==!0,ge=ye.__version===void 0||J===!0,ce=X.dataReady,we=U(_,ne);if(_.isDepthTexture)Ce=b(_.format===$i,_.type),ge&&(I?r.texStorage2D(e.TEXTURE_2D,1,Ce,ne.width,ne.height):r.texImage2D(e.TEXTURE_2D,0,Ce,ne.width,ne.height,0,me,Ue,null));else if(_.isDataTexture)if(je.length>0){I&&ge&&r.texStorage2D(e.TEXTURE_2D,we,Ce,je[0].width,je[0].height);for(let ie=0,K=je.length;ie<K;ie++)ve=je[ie],I?ce&&r.texSubImage2D(e.TEXTURE_2D,ie,0,0,ve.width,ve.height,me,Ue,ve.data):r.texImage2D(e.TEXTURE_2D,ie,Ce,ve.width,ve.height,0,me,Ue,ve.data);_.generateMipmaps=!1}else I?(ge&&r.texStorage2D(e.TEXTURE_2D,we,Ce,ne.width,ne.height),ce&&j(_,ne,me,Ue)):r.texImage2D(e.TEXTURE_2D,0,Ce,ne.width,ne.height,0,me,Ue,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&ge&&r.texStorage3D(e.TEXTURE_2D_ARRAY,we,Ce,je[0].width,je[0].height,ne.depth);for(let ie=0,K=je.length;ie<K;ie++)if(ve=je[ie],_.format!==Yt)if(me!==null)if(I){if(ce)if(_.layerUpdates.size>0){let Te=vu(ve.width,ve.height,_.format,_.type);for(let Pe of _.layerUpdates){let gt=ve.data.subarray(Pe*Te/ve.data.BYTES_PER_ELEMENT,(Pe+1)*Te/ve.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ie,0,0,Pe,ve.width,ve.height,1,me,gt)}_.clearLayerUpdates()}else r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,ne.depth,me,ve.data)}else r.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ie,Ce,ve.width,ve.height,ne.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ce&&r.texSubImage3D(e.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,ne.depth,me,Ue,ve.data):r.texImage3D(e.TEXTURE_2D_ARRAY,ie,Ce,ve.width,ve.height,ne.depth,0,me,Ue,ve.data)}else{I&&ge&&r.texStorage2D(e.TEXTURE_2D,we,Ce,je[0].width,je[0].height);for(let ie=0,K=je.length;ie<K;ie++)ve=je[ie],_.format!==Yt?me!==null?I?ce&&r.compressedTexSubImage2D(e.TEXTURE_2D,ie,0,0,ve.width,ve.height,me,ve.data):r.compressedTexImage2D(e.TEXTURE_2D,ie,Ce,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ce&&r.texSubImage2D(e.TEXTURE_2D,ie,0,0,ve.width,ve.height,me,Ue,ve.data):r.texImage2D(e.TEXTURE_2D,ie,Ce,ve.width,ve.height,0,me,Ue,ve.data)}else if(_.isDataArrayTexture)if(I){if(ge&&r.texStorage3D(e.TEXTURE_2D_ARRAY,we,Ce,ne.width,ne.height,ne.depth),ce)if(_.layerUpdates.size>0){let ie=vu(ne.width,ne.height,_.format,_.type);for(let K of _.layerUpdates){let Te=ne.data.subarray(K*ie/ne.data.BYTES_PER_ELEMENT,(K+1)*ie/ne.data.BYTES_PER_ELEMENT);r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,K,ne.width,ne.height,1,me,Ue,Te)}_.clearLayerUpdates()}else r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,Ue,ne.data)}else r.texImage3D(e.TEXTURE_2D_ARRAY,0,Ce,ne.width,ne.height,ne.depth,0,me,Ue,ne.data);else if(_.isData3DTexture)I?(ge&&r.texStorage3D(e.TEXTURE_3D,we,Ce,ne.width,ne.height,ne.depth),ce&&r.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,Ue,ne.data)):r.texImage3D(e.TEXTURE_3D,0,Ce,ne.width,ne.height,ne.depth,0,me,Ue,ne.data);else if(_.isFramebufferTexture){if(ge)if(I)r.texStorage2D(e.TEXTURE_2D,we,Ce,ne.width,ne.height);else{let ie=ne.width,K=ne.height;for(let Te=0;Te<we;Te++)r.texImage2D(e.TEXTURE_2D,Te,Ce,ie,K,0,me,Ue,null),ie>>=1,K>>=1}}else if(je.length>0){if(I&&ge){let ie=ke(je[0]);r.texStorage2D(e.TEXTURE_2D,we,Ce,ie.width,ie.height)}for(let ie=0,K=je.length;ie<K;ie++)ve=je[ie],I?ce&&r.texSubImage2D(e.TEXTURE_2D,ie,0,0,me,Ue,ve):r.texImage2D(e.TEXTURE_2D,ie,Ce,me,Ue,ve);_.generateMipmaps=!1}else if(I){if(ge){let ie=ke(ne);r.texStorage2D(e.TEXTURE_2D,we,Ce,ie.width,ie.height)}ce&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,me,Ue,ne)}else r.texImage2D(e.TEXTURE_2D,0,Ce,me,Ue,ne);m(_)&&h(q),ye.__version=X.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function he(w,_,N){if(_.image.length!==6)return;let q=$e(w,_),J=_.source;r.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+N);let X=i.get(J);if(J.version!==X.__version||q===!0){r.activeTexture(e.TEXTURE0+N);let ye=Je.getPrimaries(Je.workingColorSpace),le=_.colorSpace===Lr?null:Je.getPrimaries(_.colorSpace),be=_.colorSpace===Lr||ye===le?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Ae=_.isCompressedTexture||_.image[0].isCompressedTexture,ne=_.image[0]&&_.image[0].isDataTexture,me=[];for(let K=0;K<6;K++)!Ae&&!ne?me[K]=g(_.image[K],!0,a.maxCubemapSize):me[K]=ne?_.image[K].image:_.image[K],me[K]=Ve(_,me[K]);let Ue=me[0],Ce=n.convert(_.format,_.colorSpace),ve=n.convert(_.type),je=y(_.internalFormat,Ce,ve,_.colorSpace),I=_.isVideoTexture!==!0,ge=X.__version===void 0||q===!0,ce=J.dataReady,we=U(_,Ue);De(e.TEXTURE_CUBE_MAP,_);let ie;if(Ae){I&&ge&&r.texStorage2D(e.TEXTURE_CUBE_MAP,we,je,Ue.width,Ue.height);for(let K=0;K<6;K++){ie=me[K].mipmaps;for(let Te=0;Te<ie.length;Te++){let Pe=ie[Te];_.format!==Yt?Ce!==null?I?ce&&r.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te,0,0,Pe.width,Pe.height,Ce,Pe.data):r.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te,je,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ce&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te,0,0,Pe.width,Pe.height,Ce,ve,Pe.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te,je,Pe.width,Pe.height,0,Ce,ve,Pe.data)}}}else{if(ie=_.mipmaps,I&&ge){ie.length>0&&we++;let K=ke(me[0]);r.texStorage2D(e.TEXTURE_CUBE_MAP,we,je,K.width,K.height)}for(let K=0;K<6;K++)if(ne){I?ce&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,me[K].width,me[K].height,Ce,ve,me[K].data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,je,me[K].width,me[K].height,0,Ce,ve,me[K].data);for(let Te=0;Te<ie.length;Te++){let Pe=ie[Te].image[K].image;I?ce&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te+1,0,0,Pe.width,Pe.height,Ce,ve,Pe.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te+1,je,Pe.width,Pe.height,0,Ce,ve,Pe.data)}}else{I?ce&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ce,ve,me[K]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,je,Ce,ve,me[K]);for(let Te=0;Te<ie.length;Te++){let Pe=ie[Te];I?ce&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te+1,0,0,Ce,ve,Pe.image[K]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te+1,je,Ce,ve,Pe.image[K])}}}m(_)&&h(e.TEXTURE_CUBE_MAP),X.__version=J.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function xe(w,_,N,q,J,X){let ye=n.convert(N.format,N.colorSpace),le=n.convert(N.type),be=y(N.internalFormat,ye,le,N.colorSpace),Ae=i.get(_),ne=i.get(N);if(ne.__renderTarget=_,!Ae.__hasExternalTextures){let me=Math.max(1,_.width>>X),Ue=Math.max(1,_.height>>X);J===e.TEXTURE_3D||J===e.TEXTURE_2D_ARRAY?r.texImage3D(J,X,be,me,Ue,_.depth,0,ye,le,null):r.texImage2D(J,X,be,me,Ue,0,ye,le,null)}r.bindFramebuffer(e.FRAMEBUFFER,w),se(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,J,ne.__webglTexture,0,ae(_)):(J===e.TEXTURE_2D||J>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,J,ne.__webglTexture,X),r.bindFramebuffer(e.FRAMEBUFFER,null)}function Ie(w,_,N){if(e.bindRenderbuffer(e.RENDERBUFFER,w),_.depthBuffer){let q=_.depthTexture,J=q&&q.isDepthTexture?q.type:null,X=b(_.stencilBuffer,J),ye=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,le=ae(_);se(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,le,X,_.width,_.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,le,X,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,X,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ye,e.RENDERBUFFER,w)}else{let q=_.textures;for(let J=0;J<q.length;J++){let X=q[J],ye=n.convert(X.format,X.colorSpace),le=n.convert(X.type),be=y(X.internalFormat,ye,le,X.colorSpace),Ae=ae(_);N&&se(_)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae,be,_.width,_.height):se(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae,be,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,be,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Me(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(e.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let N=i.get(_.depthTexture);N.__renderTarget=_,(!N.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W(_.depthTexture,0);let q=N.__webglTexture,J=ae(_);if(_.depthTexture.format===Ki)se(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,q,0,J):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,q,0);else if(_.depthTexture.format===$i)se(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,q,0,J):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function qe(w){let _=i.get(w),N=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let q=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){let J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=q}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");let q=w.texture.mipmaps;q&&q.length>0?Me(_.__webglFramebuffer[0],w):Me(_.__webglFramebuffer,w)}else if(N){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(r.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=e.createRenderbuffer(),Ie(_.__webglDepthbuffer[q],w,!1);else{let J=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,X)}}else{let q=w.texture.mipmaps;if(q&&q.length>0?r.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):r.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Ie(_.__webglDepthbuffer,w,!1);else{let J=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,X)}}r.bindFramebuffer(e.FRAMEBUFFER,null)}function L(w,_,N){let q=i.get(w);_!==void 0&&xe(q.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),N!==void 0&&qe(w)}function Y(w){let _=w.texture,N=i.get(w),q=i.get(_);w.addEventListener("dispose",T);let J=w.textures,X=w.isWebGLCubeRenderTarget===!0,ye=J.length>1;if(ye||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=_.version,s.memory.textures++),X){N.__webglFramebuffer=[];for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[le]=[];for(let be=0;be<_.mipmaps.length;be++)N.__webglFramebuffer[le][be]=e.createFramebuffer()}else N.__webglFramebuffer[le]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)N.__webglFramebuffer[le]=e.createFramebuffer()}else N.__webglFramebuffer=e.createFramebuffer();if(ye)for(let le=0,be=J.length;le<be;le++){let Ae=i.get(J[le]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=e.createTexture(),s.memory.textures++)}if(w.samples>0&&se(w)===!1){N.__webglMultisampledFramebuffer=e.createFramebuffer(),N.__webglColorRenderbuffer=[],r.bindFramebuffer(e.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){let be=J[le];N.__webglColorRenderbuffer[le]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,N.__webglColorRenderbuffer[le]);let Ae=n.convert(be.format,be.colorSpace),ne=n.convert(be.type),me=y(be.internalFormat,Ae,ne,be.colorSpace,w.isXRRenderTarget===!0),Ue=ae(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ue,me,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.RENDERBUFFER,N.__webglColorRenderbuffer[le])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=e.createRenderbuffer(),Ie(N.__webglDepthRenderbuffer,w,!0)),r.bindFramebuffer(e.FRAMEBUFFER,null)}}if(X){r.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),De(e.TEXTURE_CUBE_MAP,_);for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0)for(let be=0;be<_.mipmaps.length;be++)xe(N.__webglFramebuffer[le][be],w,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+le,be);else xe(N.__webglFramebuffer[le],w,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(_)&&h(e.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(ye){for(let le=0,be=J.length;le<be;le++){let Ae=J[le],ne=i.get(Ae),me=e.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(me=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(me,ne.__webglTexture),De(me,Ae),xe(N.__webglFramebuffer,w,Ae,e.COLOR_ATTACHMENT0+le,me,0),m(Ae)&&h(me)}r.unbindTexture()}else{let le=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(le,q.__webglTexture),De(le,_),_.mipmaps&&_.mipmaps.length>0)for(let be=0;be<_.mipmaps.length;be++)xe(N.__webglFramebuffer[be],w,_,e.COLOR_ATTACHMENT0,le,be);else xe(N.__webglFramebuffer,w,_,e.COLOR_ATTACHMENT0,le,0);m(_)&&h(le),r.unbindTexture()}w.depthBuffer&&qe(w)}function Q(w){let _=w.textures;for(let N=0,q=_.length;N<q;N++){let J=_[N];if(m(J)){let X=P(w),ye=i.get(J).__webglTexture;r.bindTexture(X,ye),h(X),r.unbindTexture()}}}let ee=[],Z=[];function de(w){if(w.samples>0){if(se(w)===!1){let _=w.textures,N=w.width,q=w.height,J=e.COLOR_BUFFER_BIT,X=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ye=i.get(w),le=_.length>1;if(le)for(let Ae=0;Ae<_.length;Ae++)r.bindFramebuffer(e.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ae,e.RENDERBUFFER,null),r.bindFramebuffer(e.FRAMEBUFFER,ye.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ae,e.TEXTURE_2D,null,0);r.bindFramebuffer(e.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);let be=w.texture.mipmaps;be&&be.length>0?r.bindFramebuffer(e.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):r.bindFramebuffer(e.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ae=0;Ae<_.length;Ae++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=e.STENCIL_BUFFER_BIT)),le){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ye.__webglColorRenderbuffer[Ae]);let ne=i.get(_[Ae]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ne,0)}e.blitFramebuffer(0,0,N,q,0,0,N,q,J,e.NEAREST),l===!0&&(ee.length=0,Z.length=0,ee.push(e.COLOR_ATTACHMENT0+Ae),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ee.push(X),Z.push(X),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Z)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ee))}if(r.bindFramebuffer(e.READ_FRAMEBUFFER,null),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),le)for(let Ae=0;Ae<_.length;Ae++){r.bindFramebuffer(e.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ae,e.RENDERBUFFER,ye.__webglColorRenderbuffer[Ae]);let ne=i.get(_[Ae]).__webglTexture;r.bindFramebuffer(e.FRAMEBUFFER,ye.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ae,e.TEXTURE_2D,ne,0)}r.bindFramebuffer(e.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let _=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function ae(w){return Math.min(a.maxSamples,w.samples)}function se(w){let _=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Be(w){let _=s.render.frame;c.get(w)!==_&&(c.set(w,_),w.update())}function Ve(w,_){let N=w.colorSpace,q=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==vi&&N!==Lr&&(Je.getTransfer(N)===Qe?(q!==Yt||J!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function ke(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=k,this.setTexture3D=$,this.setTextureCube=G,this.rebindTextures=L,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=se}function Z0(e,t){function r(i,a=Lr){let n,s=Je.getTransfer(a);if(i===ir)return e.UNSIGNED_BYTE;if(i===$n)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Qn)return e.UNSIGNED_SHORT_5_5_5_1;if(i===$o)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Qo)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jo)return e.BYTE;if(i===Ko)return e.SHORT;if(i===Yi)return e.UNSIGNED_SHORT;if(i===Kn)return e.INT;if(i===Xr)return e.UNSIGNED_INT;if(i===ar)return e.FLOAT;if(i===Zi)return e.HALF_FLOAT;if(i===el)return e.ALPHA;if(i===tl)return e.RGB;if(i===Yt)return e.RGBA;if(i===Ki)return e.DEPTH_COMPONENT;if(i===$i)return e.DEPTH_STENCIL;if(i===es)return e.RED;if(i===ts)return e.RED_INTEGER;if(i===rl)return e.RG;if(i===rs)return e.RG_INTEGER;if(i===is)return e.RGBA_INTEGER;if(i===Da||i===Na||i===Oa||i===Fa)if(s===Qe)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(i===Da)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Na)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(i===Da)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Na)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oa)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fa)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===as||i===ns||i===ss||i===os)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(i===as)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ns)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ss)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===os)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ls||i===us||i===cs)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(i===ls||i===us)return s===Qe?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(i===cs)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hs||i===ds||i===ps||i===fs||i===ms||i===gs||i===vs||i===_s||i===xs||i===ys||i===Es||i===Ss||i===Ms||i===bs)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(i===hs)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ds)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ps)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fs)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ms)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gs)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vs)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_s)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xs)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ys)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Es)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ss)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ms)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bs)return s===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ts||i===ws||i===As)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(i===Ts)return s===Qe?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ws)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===As)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rs||i===Cs||i===Ls||i===Ps)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(i===Rs)return n.COMPRESSED_RED_RGTC1_EXT;if(i===Cs)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ls)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ps)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ji?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:r}}var J0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K0=`
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

}`,$0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let r=new ql(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,r=new zr({vertexShader:J0,fragmentShader:K0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new ya(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Q0=class extends qr{constructor(e,t){super();let r=this,i=null,a=1,n=null,s="local-floor",o=1,l=null,u=null,c=null,d=null,p=null,f=null,v=typeof XRWebGLBinding<"u",g=new $0,m={},h=t.getContextAttributes(),P=null,y=null,b=[],U=[],x=new oe,T=null,R=new zt;R.viewport=new rt;let S=new zt;S.viewport=new rt;let E=[R,S],A=new op,O=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ue=b[j];return ue===void 0&&(ue=new ao,b[j]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(j){let ue=b[j];return ue===void 0&&(ue=new ao,b[j]=ue),ue.getGripSpace()},this.getHand=function(j){let ue=b[j];return ue===void 0&&(ue=new ao,b[j]=ue),ue.getHandSpace()};function z(j){let ue=U.indexOf(j.inputSource);if(ue===-1)return;let he=b[ue];he!==void 0&&(he.update(j.inputSource,j.frame,l||n),he.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",k);for(let j=0;j<b.length;j++){let ue=U[j];ue!==null&&(U[j]=null,b[j].disconnect(ue))}O=null,B=null,g.reset();for(let j in m)delete m[j];e.setRenderTarget(P),p=null,d=null,c=null,i=null,y=null,Ye.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(x.width,x.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){s=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return c===null&&v&&(c=new XRWebGLBinding(i,t)),c},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(P=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",W),i.addEventListener("inputsourceschange",k),h.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,he=null,xe=null;h.depth&&(xe=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=h.stencil?$i:Ki,he=h.stencil?Ji:Xr);let Ie={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:a};c=this.getBinding(),d=c.createProjectionLayer(Ie),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Yr(d.textureWidth,d.textureHeight,{format:Yt,type:ir,depthTexture:new Xl(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ue={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Yr(p.framebufferWidth,p.framebufferHeight,{format:Yt,type:ir,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await i.requestReferenceSpace(s),Ye.setContext(i),Ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(j){for(let ue=0;ue<j.removed.length;ue++){let he=j.removed[ue],xe=U.indexOf(he);xe>=0&&(U[xe]=null,b[xe].disconnect(he))}for(let ue=0;ue<j.added.length;ue++){let he=j.added[ue],xe=U.indexOf(he);if(xe===-1){for(let Me=0;Me<b.length;Me++)if(Me>=U.length){U.push(he),xe=Me;break}else if(U[Me]===null){U[Me]=he,xe=Me;break}if(xe===-1)break}let Ie=b[xe];Ie&&Ie.connect(he)}}let $=new C,G=new C;function re(j,ue,he){$.setFromMatrixPosition(ue.matrixWorld),G.setFromMatrixPosition(he.matrixWorld);let xe=$.distanceTo(G),Ie=ue.projectionMatrix.elements,Me=he.projectionMatrix.elements,qe=Ie[14]/(Ie[10]-1),L=Ie[14]/(Ie[10]+1),Y=(Ie[9]+1)/Ie[5],Q=(Ie[9]-1)/Ie[5],ee=(Ie[8]-1)/Ie[0],Z=(Me[8]+1)/Me[0],de=qe*ee,ae=qe*Z,se=xe/(-ee+Z),Be=se*-ee;if(ue.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Be),j.translateZ(se),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ie[10]===-1)j.projectionMatrix.copy(ue.projectionMatrix),j.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{let Ve=qe+se,ke=L+se,w=de-Be,_=ae+(xe-Be),N=Y*L/ke*Ve,q=Q*L/ke*Ve;j.projectionMatrix.makePerspective(w,_,N,q,Ve,ke),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function pe(j,ue){ue===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ue.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ue=j.near,he=j.far;g.texture!==null&&(g.depthNear>0&&(ue=g.depthNear),g.depthFar>0&&(he=g.depthFar)),A.near=S.near=R.near=ue,A.far=S.far=R.far=he,(O!==A.near||B!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),O=A.near,B=A.far),A.layers.mask=j.layers.mask|6,R.layers.mask=A.layers.mask&3,S.layers.mask=A.layers.mask&5;let xe=j.parent,Ie=A.cameras;pe(A,xe);for(let Me=0;Me<Ie.length;Me++)pe(Ie[Me],xe);Ie.length===2?re(A,R,S):A.projectionMatrix.copy(R.projectionMatrix),Le(j,A,xe)};function Le(j,ue,he){he===null?j.matrix.copy(ue.matrixWorld):(j.matrix.copy(he.matrixWorld),j.matrix.invert(),j.matrix.multiply(ue.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ue.projectionMatrix),j.projectionMatrixInverse.copy(ue.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ea*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&p===null))return o},this.setFoveation=function(j){o=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(A)},this.getCameraTexture=function(j){return m[j]};let De=null;function $e(j,ue){if(u=ue.getViewerPose(l||n),f=ue,u!==null){let he=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let xe=!1;he.length!==A.cameras.length&&(A.cameras.length=0,xe=!0);for(let Me=0;Me<he.length;Me++){let qe=he[Me],L=null;if(p!==null)L=p.getViewport(qe);else{let Q=c.getViewSubImage(d,qe);L=Q.viewport,Me===0&&(e.setRenderTargetTextures(y,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(y))}let Y=E[Me];Y===void 0&&(Y=new zt,Y.layers.enable(Me),Y.viewport=new rt,E[Me]=Y),Y.matrix.fromArray(qe.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(qe.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(L.x,L.y,L.width,L.height),Me===0&&(A.matrix.copy(Y.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),xe===!0&&A.cameras.push(Y)}let Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){c=r.getBinding();let Me=c.getDepthInformation(he[0]);Me&&Me.isValid&&Me.texture&&g.init(Me,i.renderState)}if(Ie&&Ie.includes("camera-access")&&v){e.state.unbindTexture(),c=r.getBinding();for(let Me=0;Me<he.length;Me++){let qe=he[Me].camera;if(qe){let L=m[qe];L||(L=new ql,m[qe]=L);let Y=c.getCameraImage(qe);L.sourceTexture=Y}}}}for(let he=0;he<b.length;he++){let xe=U[he],Ie=b[he];xe!==null&&Ie!==void 0&&Ie.update(xe,ue,l||n)}De&&De(j,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),f=null}let Ye=new _u;Ye.setAnimationLoop($e),this.setAnimationLoop=function(j){De=j},this.dispose=function(){}}},ni=new _r,ev=new nt;function tv(e,t){function r(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Pl(e)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function a(m,h,P,y,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?n(m,h):h.isMeshToonMaterial?(n(m,h),d(m,h)):h.isMeshPhongMaterial?(n(m,h),c(m,h)):h.isMeshStandardMaterial?(n(m,h),p(m,h),h.isMeshPhysicalMaterial&&f(m,h,b)):h.isMeshMatcapMaterial?(n(m,h),v(m,h)):h.isMeshDepthMaterial?n(m,h):h.isMeshDistanceMaterial?(n(m,h),g(m,h)):h.isMeshNormalMaterial?n(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,P,y):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function n(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,r(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,r(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,r(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ct&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,r(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ct&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,r(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,r(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,r(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let P=t.get(h),y=P.envMap,b=P.envMapRotation;y&&(m.envMap.value=y,ni.copy(b),ni.x*=-1,ni.y*=-1,ni.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),m.envMapRotation.value.setFromMatrix4(ev.makeRotationFromEuler(ni)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,r(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,r(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,r(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,P,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*P,m.scale.value=y*.5,h.map&&(m.map.value=h.map,r(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,r(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,r(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,r(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,r(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,r(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,P){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,r(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,r(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,r(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,r(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,r(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ct&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,r(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,r(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=P.texture,m.transmissionSamplerSize.value.set(P.width,P.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,r(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,r(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,r(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,r(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,r(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){let P=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(P.matrixWorld),m.nearDistance.value=P.shadow.camera.near,m.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function rv(e,t,r,i){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(P,y){let b=y.program;i.uniformBlockBinding(P,b)}function u(P,y){let b=a[P.id];b===void 0&&(v(P),b=c(P),a[P.id]=b,P.addEventListener("dispose",m));let U=y.program;i.updateUBOMapping(P,U);let x=t.render.frame;n[P.id]!==x&&(p(P),n[P.id]=x)}function c(P){let y=d();P.__bindingPointIndex=y;let b=e.createBuffer(),U=P.__size,x=P.usage;return e.bindBuffer(e.UNIFORM_BUFFER,b),e.bufferData(e.UNIFORM_BUFFER,U,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,y,b),b}function d(){for(let P=0;P<o;P++)if(s.indexOf(P)===-1)return s.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(P){let y=a[P.id],b=P.uniforms,U=P.__cache;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let x=0,T=b.length;x<T;x++){let R=Array.isArray(b[x])?b[x]:[b[x]];for(let S=0,E=R.length;S<E;S++){let A=R[S];if(f(A,x,S,U)===!0){let O=A.__offset,B=Array.isArray(A.value)?A.value:[A.value],z=0;for(let W=0;W<B.length;W++){let k=B[W],$=g(k);typeof k=="number"||typeof k=="boolean"?(A.__data[0]=k,e.bufferSubData(e.UNIFORM_BUFFER,O+z,A.__data)):k.isMatrix3?(A.__data[0]=k.elements[0],A.__data[1]=k.elements[1],A.__data[2]=k.elements[2],A.__data[3]=0,A.__data[4]=k.elements[3],A.__data[5]=k.elements[4],A.__data[6]=k.elements[5],A.__data[7]=0,A.__data[8]=k.elements[6],A.__data[9]=k.elements[7],A.__data[10]=k.elements[8],A.__data[11]=0):(k.toArray(A.__data,z),z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,O,A.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(P,y,b,U){let x=P.value,T=y+"_"+b;if(U[T]===void 0)return typeof x=="number"||typeof x=="boolean"?U[T]=x:U[T]=x.clone(),!0;{let R=U[T];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return U[T]=x,!0}else if(R.equals(x)===!1)return R.copy(x),!0}return!1}function v(P){let y=P.uniforms,b=0,U=16;for(let T=0,R=y.length;T<R;T++){let S=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,A=S.length;E<A;E++){let O=S[E],B=Array.isArray(O.value)?O.value:[O.value];for(let z=0,W=B.length;z<W;z++){let k=B[z],$=g(k),G=b%U,re=G%$.boundary,pe=G+re;b+=re,pe!==0&&U-pe<$.storage&&(b+=U-pe),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=$.storage}}}let x=b%U;return x>0&&(b+=U-x),P.__size=b,P.__cache={},this}function g(P){let y={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(y.boundary=4,y.storage=4):P.isVector2?(y.boundary=8,y.storage=8):P.isVector3||P.isColor?(y.boundary=16,y.storage=12):P.isVector4?(y.boundary=16,y.storage=16):P.isMatrix3?(y.boundary=48,y.storage=48):P.isMatrix4?(y.boundary=64,y.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),y}function m(P){let y=P.target;y.removeEventListener("dispose",m);let b=s.indexOf(y.__bindingPointIndex);s.splice(b,1),e.deleteBuffer(a[y.id]),delete a[y.id],delete n[y.id]}function h(){for(let P in a)e.deleteBuffer(a[P]);s=[],a={},n={}}return{bind:l,update:u,dispose:h}}var iv=class{constructor(e={}){let{canvas:t=Ph(),context:r=null,depth:i=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=r.getContextAttributes().alpha}else p=n;let f=new Uint32Array(4),v=new Int32Array(4),g=null,m=null,h=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,b=!1;this._outputColorSpace=St;let U=0,x=0,T=null,R=-1,S=null,E=new rt,A=new rt,O=null,B=new Xe(0),z=0,W=t.width,k=t.height,$=1,G=null,re=null,pe=new rt(0,0,W,k),Le=new rt(0,0,W,k),De=!1,$e=new so,Ye=!1,j=!1,ue=new nt,he=new C,xe=new rt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function qe(){return T===null?$:1}let L=r;function Y(M,F){return t.getContext(M,F)}try{let M={alpha:!0,depth:i,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r180"),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",we,!1),L===null){let F="webgl2";if(L=Y(F,M),L===null)throw Y(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Q,ee,Z,de,ae,se,Be,Ve,ke,w,_,N,q,J,X,ye,le,be,Ae,ne,me,Ue,Ce,ve;function je(){Q=new pg(L),Q.init(),Ue=new Z0(L,Q),ee=new sg(L,Q,e,Ue),Z=new j0(L,Q),ee.reversedDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),de=new gg(L),ae=new D0,se=new Y0(L,Q,Z,ae,ee,Ue,de),Be=new lg(y),Ve=new dg(y),ke=new Ep(L),Ce=new ag(L,ke),w=new fg(L,ke,de,Ce),_=new _g(L,w,ke,de),Ae=new vg(L,ee,se),ye=new og(ae),N=new U0(y,Be,Ve,Q,ee,Ce,ye),q=new tv(y,ae),J=new O0,X=new H0(Q),be=new ig(y,Be,Ve,Z,_,p,o),le=new X0(y,_,ee),ve=new rv(L,de,ee,Z),ne=new ng(L,Q,de),me=new mg(L,Q,de),de.programs=N.programs,y.capabilities=ee,y.extensions=Q,y.properties=ae,y.renderLists=J,y.shadowMap=le,y.state=Z,y.info=de}je();let I=new Q0(y,L);this.xr=I,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let M=Q.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Q.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(W,k,!1))},this.getSize=function(M){return M.set(W,k)},this.setSize=function(M,F,V=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,k=F,t.width=Math.floor(M*$),t.height=Math.floor(F*$),V===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(W*$,k*$).floor()},this.setDrawingBufferSize=function(M,F,V){W=M,k=F,$=V,t.width=Math.floor(M*V),t.height=Math.floor(F*V),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(E)},this.getViewport=function(M){return M.copy(pe)},this.setViewport=function(M,F,V,H){M.isVector4?pe.set(M.x,M.y,M.z,M.w):pe.set(M,F,V,H),Z.viewport(E.copy(pe).multiplyScalar($).round())},this.getScissor=function(M){return M.copy(Le)},this.setScissor=function(M,F,V,H){M.isVector4?Le.set(M.x,M.y,M.z,M.w):Le.set(M,F,V,H),Z.scissor(A.copy(Le).multiplyScalar($).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(M){Z.setScissorTest(De=M)},this.setOpaqueSort=function(M){G=M},this.setTransparentSort=function(M){re=M},this.getClearColor=function(M){return M.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,V=!0){let H=0;if(M){let D=!1;if(T!==null){let te=T.texture.format;D=te===is||te===rs||te===ts}if(D){let te=T.texture.type,_e=te===ir||te===Xr||te===Yi||te===Ji||te===$n||te===Qn,Ee=be.getClearColor(),Se=be.getClearAlpha(),Ne=Ee.r,Fe=Ee.g,Oe=Ee.b;_e?(f[0]=Ne,f[1]=Fe,f[2]=Oe,f[3]=Se,L.clearBufferuiv(L.COLOR,0,f)):(v[0]=Ne,v[1]=Fe,v[2]=Oe,v[3]=Se,L.clearBufferiv(L.COLOR,0,v))}else H|=L.COLOR_BUFFER_BIT}F&&(H|=L.DEPTH_BUFFER_BIT),V&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",we,!1),be.dispose(),J.dispose(),X.dispose(),ae.dispose(),Be.dispose(),Ve.dispose(),_.dispose(),Ce.dispose(),ve.dispose(),N.dispose(),I.dispose(),I.removeEventListener("sessionstart",dr),I.removeEventListener("sessionend",pr),li.stop()};function ge(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let M=de.autoReset,F=le.enabled,V=le.autoUpdate,H=le.needsUpdate,D=le.type;je(),de.autoReset=M,le.enabled=F,le.autoUpdate=V,le.needsUpdate=H,le.type=D}function we(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ie(M){let F=M.target;F.removeEventListener("dispose",ie),K(F)}function K(M){Te(M),ae.remove(M)}function Te(M){let F=ae.get(M).programs;F!==void 0&&(F.forEach(function(V){N.releaseProgram(V)}),M.isShaderMaterial&&N.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,V,H,D,te){F===null&&(F=Ie);let _e=D.isMesh&&D.matrixWorld.determinant()<0,Ee=Pv(M,F,V,H,D);Z.setMaterial(H,_e);let Se=V.index,Ne=1;if(H.wireframe===!0){if(Se=w.getWireframeAttribute(V),Se===void 0)return;Ne=2}let Fe=V.drawRange,Oe=V.attributes.position,Ze=Fe.start*Ne,it=(Fe.start+Fe.count)*Ne;te!==null&&(Ze=Math.max(Ze,te.start*Ne),it=Math.min(it,(te.start+te.count)*Ne)),Se!==null?(Ze=Math.max(Ze,0),it=Math.min(it,Se.count)):Oe!=null&&(Ze=Math.max(Ze,0),it=Math.min(it,Oe.count));let st=it-Ze;if(st<0||st===1/0)return;Ce.setup(D,H,Ee,V,Se);let lt,at=ne;if(Se!==null&&(lt=ke.get(Se),at=me,at.setIndex(lt)),D.isMesh)H.wireframe===!0?(Z.setLineWidth(H.wireframeLinewidth*qe()),at.setMode(L.LINES)):at.setMode(L.TRIANGLES);else if(D.isLine){let Re=H.linewidth;Re===void 0&&(Re=1),Z.setLineWidth(Re*qe()),D.isLineSegments?at.setMode(L.LINES):D.isLineLoop?at.setMode(L.LINE_LOOP):at.setMode(L.LINE_STRIP)}else D.isPoints?at.setMode(L.POINTS):D.isSprite&&at.setMode(L.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)ra("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))at.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let Re=D._multiDrawStarts,bt=D._multiDrawCounts,wr=D._multiDrawCount,er=Se?ke.get(Se).bytesPerElement:1,Xi=ae.get(H).currentProgram.getUniforms();for(let Bt=0;Bt<wr;Bt++)Xi.setValue(L,"_gl_DrawID",Bt),at.render(Re[Bt]/er,bt[Bt])}else if(D.isInstancedMesh)at.renderInstances(Ze,st,D.count);else if(V.isInstancedBufferGeometry){let Re=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,bt=Math.min(V.instanceCount,Re);at.renderInstances(Ze,st,bt)}else at.render(Ze,st)};function Pe(M,F,V){M.transparent===!0&&M.side===Dt&&M.forceSinglePass===!1?(M.side=Ct,M.needsUpdate=!0,Dn(M,F,V),M.side=Ar,M.needsUpdate=!0,Dn(M,F,V),M.side=Dt):Dn(M,F,V)}this.compile=function(M,F,V=null){V===null&&(V=M),m=X.get(V),m.init(F),P.push(m),V.traverseVisible(function(D){D.isLight&&D.layers.test(F.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),M!==V&&M.traverseVisible(function(D){D.isLight&&D.layers.test(F.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),m.setupLights();let H=new Set;return M.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let te=D.material;if(te)if(Array.isArray(te))for(let _e=0;_e<te.length;_e++){let Ee=te[_e];Pe(Ee,V,D),H.add(Ee)}else Pe(te,V,D),H.add(te)}),m=P.pop(),H},this.compileAsync=function(M,F,V=null){let H=this.compile(M,F,V);return new Promise(D=>{function te(){if(H.forEach(function(_e){ae.get(_e).currentProgram.isReady()&&H.delete(_e)}),H.size===0){D(M);return}setTimeout(te,10)}Q.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let gt=null;function tt(M){gt&&gt(M)}function dr(){li.stop()}function pr(){li.start()}let li=new _u;li.setAnimationLoop(tt),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(M){gt=M,I.setAnimationLoop(M),M===null?li.stop():li.start()},I.addEventListener("sessionstart",dr),I.addEventListener("sessionend",pr),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(F),F=I.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,F,T),m=X.get(M,P.length),m.init(F),P.push(m),ue.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$e.setFromProjectionMatrix(ue,nr,F.reversedDepth),j=this.localClippingEnabled,Ye=ye.init(this.clippingPlanes,j),g=J.get(M,h.length),g.init(),h.push(g),I.enabled===!0&&I.isPresenting===!0){let te=y.xr.getDepthSensingMesh();te!==null&&ko(te,F,-1/0,y.sortObjects)}ko(M,F,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(G,re),Me=I.enabled===!1||I.isPresenting===!1||I.hasDepthSensing()===!1,Me&&be.addToRenderList(g,M),this.info.render.frame++,Ye===!0&&ye.beginShadows();let V=m.state.shadowsArray;le.render(V,M,F),Ye===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=g.opaque,D=g.transmissive;if(m.setupLights(),F.isArrayCamera){let te=F.cameras;if(D.length>0)for(let _e=0,Ee=te.length;_e<Ee;_e++){let Se=te[_e];cc(H,D,M,Se)}Me&&be.render(M);for(let _e=0,Ee=te.length;_e<Ee;_e++){let Se=te[_e];uc(g,M,Se,Se.viewport)}}else D.length>0&&cc(H,D,M,F),Me&&be.render(M),uc(g,M,F);T!==null&&x===0&&(se.updateMultisampleRenderTarget(T),se.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(y,M,F),Ce.resetDefaultState(),R=-1,S=null,P.pop(),P.length>0?(m=P[P.length-1],Ye===!0&&ye.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function ko(M,F,V,H){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$e.intersectsSprite(M)){H&&xe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ue);let te=_.update(M),_e=M.material;_e.visible&&g.push(M,te,_e,V,xe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$e.intersectsObject(M))){let te=_.update(M),_e=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),xe.copy(M.boundingSphere.center)):(te.boundingSphere===null&&te.computeBoundingSphere(),xe.copy(te.boundingSphere.center)),xe.applyMatrix4(M.matrixWorld).applyMatrix4(ue)),Array.isArray(_e)){let Ee=te.groups;for(let Se=0,Ne=Ee.length;Se<Ne;Se++){let Fe=Ee[Se],Oe=_e[Fe.materialIndex];Oe&&Oe.visible&&g.push(M,te,Oe,V,xe.z,Fe)}}else _e.visible&&g.push(M,te,_e,V,xe.z,null)}}let D=M.children;for(let te=0,_e=D.length;te<_e;te++)ko(D[te],F,V,H)}function uc(M,F,V,H){let D=M.opaque,te=M.transmissive,_e=M.transparent;m.setupLightsView(V),Ye===!0&&ye.setGlobalState(y.clippingPlanes,V),H&&Z.viewport(E.copy(H)),D.length>0&&Un(D,F,V),te.length>0&&Un(te,F,V),_e.length>0&&Un(_e,F,V),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function cc(M,F,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Yr(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Zi:ir,minFilter:Wr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let D=m.state.transmissionRenderTarget[H.id],te=H.viewport||E;D.setSize(te.z*y.transmissionResolutionScale,te.w*y.transmissionResolutionScale);let _e=y.getRenderTarget(),Ee=y.getActiveCubeFace(),Se=y.getActiveMipmapLevel();y.setRenderTarget(D),y.getClearColor(B),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),Me&&be.render(V);let Ne=y.toneMapping;y.toneMapping=Cr;let Fe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),Ye===!0&&ye.setGlobalState(y.clippingPlanes,H),Un(M,V,H),se.updateMultisampleRenderTarget(D),se.updateRenderTargetMipmap(D),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Ze=0,it=F.length;Ze<it;Ze++){let st=F[Ze],lt=st.object,at=st.geometry,Re=st.material,bt=st.group;if(Re.side===Dt&&lt.layers.test(H.layers)){let wr=Re.side;Re.side=Ct,Re.needsUpdate=!0,hc(lt,V,H,at,Re,bt),Re.side=wr,Re.needsUpdate=!0,Oe=!0}}Oe===!0&&(se.updateMultisampleRenderTarget(D),se.updateRenderTargetMipmap(D))}y.setRenderTarget(_e,Ee,Se),y.setClearColor(B,z),Fe!==void 0&&(H.viewport=Fe),y.toneMapping=Ne}function Un(M,F,V){let H=F.isScene===!0?F.overrideMaterial:null;for(let D=0,te=M.length;D<te;D++){let _e=M[D],Ee=_e.object,Se=_e.geometry,Ne=_e.group,Fe=_e.material;Fe.allowOverride===!0&&H!==null&&(Fe=H),Ee.layers.test(V.layers)&&hc(Ee,F,V,Se,Fe,Ne)}}function hc(M,F,V,H,D,te){M.onBeforeRender(y,F,V,H,D,te),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),D.onBeforeRender(y,F,V,H,M,te),D.transparent===!0&&D.side===Dt&&D.forceSinglePass===!1?(D.side=Ct,D.needsUpdate=!0,y.renderBufferDirect(V,F,H,D,M,te),D.side=Ar,D.needsUpdate=!0,y.renderBufferDirect(V,F,H,D,M,te),D.side=Dt):y.renderBufferDirect(V,F,H,D,M,te),M.onAfterRender(y,F,V,H,D,te)}function Dn(M,F,V){F.isScene!==!0&&(F=Ie);let H=ae.get(M),D=m.state.lights,te=m.state.shadowsArray,_e=D.state.version,Ee=N.getParameters(M,D.state,te,F,V),Se=N.getProgramCacheKey(Ee),Ne=H.programs;H.environment=M.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(M.isMeshStandardMaterial?Ve:Be).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",ie),Ne=new Map,H.programs=Ne);let Fe=Ne.get(Se);if(Fe!==void 0){if(H.currentProgram===Fe&&H.lightsStateVersion===_e)return pc(M,Ee),Fe}else Ee.uniforms=N.getUniforms(M),M.onBeforeCompile(Ee,y),Fe=N.acquireProgram(Ee,Se),Ne.set(Se,Fe),H.uniforms=Ee.uniforms;let Oe=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Oe.clippingPlanes=ye.uniform),pc(M,Ee),H.needsLights=Uv(M),H.lightsStateVersion=_e,H.needsLights&&(Oe.ambientLightColor.value=D.state.ambient,Oe.lightProbe.value=D.state.probe,Oe.directionalLights.value=D.state.directional,Oe.directionalLightShadows.value=D.state.directionalShadow,Oe.spotLights.value=D.state.spot,Oe.spotLightShadows.value=D.state.spotShadow,Oe.rectAreaLights.value=D.state.rectArea,Oe.ltc_1.value=D.state.rectAreaLTC1,Oe.ltc_2.value=D.state.rectAreaLTC2,Oe.pointLights.value=D.state.point,Oe.pointLightShadows.value=D.state.pointShadow,Oe.hemisphereLights.value=D.state.hemi,Oe.directionalShadowMap.value=D.state.directionalShadowMap,Oe.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Oe.spotShadowMap.value=D.state.spotShadowMap,Oe.spotLightMatrix.value=D.state.spotLightMatrix,Oe.spotLightMap.value=D.state.spotLightMap,Oe.pointShadowMap.value=D.state.pointShadowMap,Oe.pointShadowMatrix.value=D.state.pointShadowMatrix),H.currentProgram=Fe,H.uniformsList=null,Fe}function dc(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=bn.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function pc(M,F){let V=ae.get(M);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Pv(M,F,V,H,D){F.isScene!==!0&&(F=Ie),se.resetTextureUnits();let te=F.fog,_e=H.isMeshStandardMaterial?F.environment:null,Ee=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:vi,Se=(H.isMeshStandardMaterial?Ve:Be).get(H.envMap||_e),Ne=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Fe=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Oe=!!V.morphAttributes.position,Ze=!!V.morphAttributes.normal,it=!!V.morphAttributes.color,st=Cr;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(st=y.toneMapping);let lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,at=lt!==void 0?lt.length:0,Re=ae.get(H),bt=m.state.lights;if(Ye===!0&&(j===!0||M!==S)){let Tt=M===S&&H.id===R;ye.setState(H,M,Tt)}let wr=!1;H.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==bt.state.version||Re.outputColorSpace!==Ee||D.isBatchedMesh&&Re.batching===!1||!D.isBatchedMesh&&Re.batching===!0||D.isBatchedMesh&&Re.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Re.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Re.instancing===!1||!D.isInstancedMesh&&Re.instancing===!0||D.isSkinnedMesh&&Re.skinning===!1||!D.isSkinnedMesh&&Re.skinning===!0||D.isInstancedMesh&&Re.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Re.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Re.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Re.instancingMorph===!1&&D.morphTexture!==null||Re.envMap!==Se||H.fog===!0&&Re.fog!==te||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ye.numPlanes||Re.numIntersection!==ye.numIntersection)||Re.vertexAlphas!==Ne||Re.vertexTangents!==Fe||Re.morphTargets!==Oe||Re.morphNormals!==Ze||Re.morphColors!==it||Re.toneMapping!==st||Re.morphTargetsCount!==at)&&(wr=!0):(wr=!0,Re.__version=H.version);let er=Re.currentProgram;wr===!0&&(er=Dn(H,F,D));let Xi=!1,Bt=!1,Pa=!1,ut=er.getUniforms(),qt=Re.uniforms;if(Z.useProgram(er.program)&&(Xi=!0,Bt=!0,Pa=!0),H.id!==R&&(R=H.id,Bt=!0),Xi||S!==M){Z.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ut.setValue(L,"projectionMatrix",M.projectionMatrix),ut.setValue(L,"viewMatrix",M.matrixWorldInverse);let Tt=ut.map.cameraPosition;Tt!==void 0&&Tt.setValue(L,he.setFromMatrixPosition(M.matrixWorld)),ee.logarithmicDepthBuffer&&ut.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ut.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Bt=!0,Pa=!0)}if(D.isSkinnedMesh){ut.setOptional(L,D,"bindMatrix"),ut.setOptional(L,D,"bindMatrixInverse");let Tt=D.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),ut.setValue(L,"boneTexture",Tt.boneTexture,se))}D.isBatchedMesh&&(ut.setOptional(L,D,"batchingTexture"),ut.setValue(L,"batchingTexture",D._matricesTexture,se),ut.setOptional(L,D,"batchingIdTexture"),ut.setValue(L,"batchingIdTexture",D._indirectTexture,se),ut.setOptional(L,D,"batchingColorTexture"),D._colorsTexture!==null&&ut.setValue(L,"batchingColorTexture",D._colorsTexture,se));let jt=V.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&Ae.update(D,V,er),(Bt||Re.receiveShadow!==D.receiveShadow)&&(Re.receiveShadow=D.receiveShadow,ut.setValue(L,"receiveShadow",D.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(qt.envMap.value=Se,qt.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(qt.envMapIntensity.value=F.environmentIntensity),Bt&&(ut.setValue(L,"toneMappingExposure",y.toneMappingExposure),Re.needsLights&&Iv(qt,Pa),te&&H.fog===!0&&q.refreshFogUniforms(qt,te),q.refreshMaterialUniforms(qt,H,$,k,m.state.transmissionRenderTarget[M.id]),bn.upload(L,dc(Re),qt,se)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(bn.upload(L,dc(Re),qt,se),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ut.setValue(L,"center",D.center),ut.setValue(L,"modelViewMatrix",D.modelViewMatrix),ut.setValue(L,"normalMatrix",D.normalMatrix),ut.setValue(L,"modelMatrix",D.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Tt=H.uniformsGroups;for(let tr=0,Vo=Tt.length;tr<Vo;tr++){let ui=Tt[tr];ve.update(ui,er),ve.bind(ui,er)}}return er}function Iv(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Uv(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,F,V){let H=ae.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ae.get(M.texture).__webglTexture=F,ae.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:V,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let V=ae.get(M);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0};let Dv=L.createFramebuffer();this.setRenderTarget=function(M,F=0,V=0){T=M,U=F,x=V;let H=!0,D=null,te=!1,_e=!1;if(M){let Ee=ae.get(M);if(Ee.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(Ee.__webglFramebuffer===void 0)se.setupRenderTarget(M);else if(Ee.__hasExternalTextures)se.rebindTextures(M,ae.get(M.texture).__webglTexture,ae.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Fe=M.depthTexture;if(Ee.__boundDepthTexture!==Fe){if(Fe!==null&&ae.has(Fe)&&(M.width!==Fe.image.width||M.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(M)}}let Se=M.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(_e=!0);let Ne=ae.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?D=Ne[F][V]:D=Ne[F],te=!0):M.samples>0&&se.useMultisampledRTT(M)===!1?D=ae.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?D=Ne[V]:D=Ne,E.copy(M.viewport),A.copy(M.scissor),O=M.scissorTest}else E.copy(pe).multiplyScalar($).floor(),A.copy(Le).multiplyScalar($).floor(),O=De;if(V!==0&&(D=Dv),Z.bindFramebuffer(L.FRAMEBUFFER,D)&&H&&Z.drawBuffers(M,D),Z.viewport(E),Z.scissor(A),Z.setScissorTest(O),te){let Ee=ae.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee.__webglTexture,V)}else if(_e){let Ee=F;for(let Se=0;Se<M.textures.length;Se++){let Ne=ae.get(M.textures[Se]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Se,Ne.__webglTexture,V,Ee)}}else if(M!==null&&V!==0){let Ee=ae.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ee.__webglTexture,V)}R=-1},this.readRenderTargetPixels=function(M,F,V,H,D,te,_e,Ee=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ae.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){Z.bindFramebuffer(L.FRAMEBUFFER,Se);try{let Ne=M.textures[Ee],Fe=Ne.format,Oe=Ne.type;if(!ee.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-H&&V>=0&&V<=M.height-D&&(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ee),L.readPixels(F,V,H,D,Ue.convert(Fe),Ue.convert(Oe),te))}finally{let Ne=T!==null?ae.get(T).__webglFramebuffer:null;Z.bindFramebuffer(L.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(M,F,V,H,D,te,_e,Ee=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=ae.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se)if(F>=0&&F<=M.width-H&&V>=0&&V<=M.height-D){Z.bindFramebuffer(L.FRAMEBUFFER,Se);let Ne=M.textures[Ee],Fe=Ne.format,Oe=Ne.type;if(!ee.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ze),L.bufferData(L.PIXEL_PACK_BUFFER,te.byteLength,L.STREAM_READ),M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ee),L.readPixels(F,V,H,D,Ue.convert(Fe),Ue.convert(Oe),0);let it=T!==null?ae.get(T).__webglFramebuffer:null;Z.bindFramebuffer(L.FRAMEBUFFER,it);let st=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ih(L,st,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ze),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,te),L.deleteBuffer(Ze),L.deleteSync(st),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,V=0){let H=Math.pow(2,-V),D=Math.floor(M.image.width*H),te=Math.floor(M.image.height*H),_e=F!==null?F.x:0,Ee=F!==null?F.y:0;se.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,_e,Ee,D,te),Z.unbindTexture()};let Nv=L.createFramebuffer(),Ov=L.createFramebuffer();this.copyTextureToTexture=function(M,F,V=null,H=null,D=0,te=null){te===null&&(D!==0?(ra("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=D,D=0):te=0);let _e,Ee,Se,Ne,Fe,Oe,Ze,it,st,lt=M.isCompressedTexture?M.mipmaps[te]:M.image;if(V!==null)_e=V.max.x-V.min.x,Ee=V.max.y-V.min.y,Se=V.isBox3?V.max.z-V.min.z:1,Ne=V.min.x,Fe=V.min.y,Oe=V.isBox3?V.min.z:0;else{let jt=Math.pow(2,-D);_e=Math.floor(lt.width*jt),Ee=Math.floor(lt.height*jt),M.isDataArrayTexture?Se=lt.depth:M.isData3DTexture?Se=Math.floor(lt.depth*jt):Se=1,Ne=0,Fe=0,Oe=0}H!==null?(Ze=H.x,it=H.y,st=H.z):(Ze=0,it=0,st=0);let at=Ue.convert(F.format),Re=Ue.convert(F.type),bt;F.isData3DTexture?(se.setTexture3D(F,0),bt=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(se.setTexture2DArray(F,0),bt=L.TEXTURE_2D_ARRAY):(se.setTexture2D(F,0),bt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);let wr=L.getParameter(L.UNPACK_ROW_LENGTH),er=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Xi=L.getParameter(L.UNPACK_SKIP_PIXELS),Bt=L.getParameter(L.UNPACK_SKIP_ROWS),Pa=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,lt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,lt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ne),L.pixelStorei(L.UNPACK_SKIP_ROWS,Fe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Oe);let ut=M.isDataArrayTexture||M.isData3DTexture,qt=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let jt=ae.get(M),Tt=ae.get(F),tr=ae.get(jt.__renderTarget),Vo=ae.get(Tt.__renderTarget);Z.bindFramebuffer(L.READ_FRAMEBUFFER,tr.__webglFramebuffer),Z.bindFramebuffer(L.DRAW_FRAMEBUFFER,Vo.__webglFramebuffer);for(let ui=0;ui<Se;ui++)ut&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ae.get(M).__webglTexture,D,Oe+ui),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ae.get(F).__webglTexture,te,st+ui)),L.blitFramebuffer(Ne,Fe,_e,Ee,Ze,it,_e,Ee,L.DEPTH_BUFFER_BIT,L.NEAREST);Z.bindFramebuffer(L.READ_FRAMEBUFFER,null),Z.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(D!==0||M.isRenderTargetTexture||ae.has(M)){let jt=ae.get(M),Tt=ae.get(F);Z.bindFramebuffer(L.READ_FRAMEBUFFER,Nv),Z.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ov);for(let tr=0;tr<Se;tr++)ut?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,jt.__webglTexture,D,Oe+tr):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,jt.__webglTexture,D),qt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Tt.__webglTexture,te,st+tr):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Tt.__webglTexture,te),D!==0?L.blitFramebuffer(Ne,Fe,_e,Ee,Ze,it,_e,Ee,L.COLOR_BUFFER_BIT,L.NEAREST):qt?L.copyTexSubImage3D(bt,te,Ze,it,st+tr,Ne,Fe,_e,Ee):L.copyTexSubImage2D(bt,te,Ze,it,Ne,Fe,_e,Ee);Z.bindFramebuffer(L.READ_FRAMEBUFFER,null),Z.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else qt?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(bt,te,Ze,it,st,_e,Ee,Se,at,Re,lt.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(bt,te,Ze,it,st,_e,Ee,Se,at,lt.data):L.texSubImage3D(bt,te,Ze,it,st,_e,Ee,Se,at,Re,lt):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,te,Ze,it,_e,Ee,at,Re,lt.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,te,Ze,it,lt.width,lt.height,at,lt.data):L.texSubImage2D(L.TEXTURE_2D,te,Ze,it,_e,Ee,at,Re,lt);L.pixelStorei(L.UNPACK_ROW_LENGTH,wr),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,er),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Xi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Bt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pa),te===0&&F.generateMipmaps&&L.generateMipmap(bt),Z.unbindTexture()},this.initRenderTarget=function(M){ae.get(M).__webglFramebuffer===void 0&&se.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?se.setTextureCube(M,0):M.isData3DTexture?se.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?se.setTexture2DArray(M,0):se.setTexture2D(M,0),Z.unbindTexture()},this.resetState=function(){U=0,x=0,T=null,Z.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}},qu={type:"change"},Uo={type:"start"},ju={type:"end"},wn=new ja,Yu=new Sr,av=Math.cos(70*Lh.DEG2RAD),xt=new C,Ut=2*Math.PI,et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Do=1e-6,nv=class extends xp{constructor(e,t=null){super(e,t),this.state=et.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ci.ROTATE,MIDDLE:ci.DOLLY,RIGHT:ci.PAN},this.touches={ONE:hi.ROTATE,TWO:hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Pr,this._lastTargetPosition=new C,this._quat=new Pr().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gu,this._sphericalDelta=new gu,this._scale=1,this._panOffset=new C,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new C,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ov.bind(this),this._onPointerDown=sv.bind(this),this._onPointerUp=lv.bind(this),this._onContextMenu=mv.bind(this),this._onMouseWheel=hv.bind(this),this._onKeyDown=dv.bind(this),this._onTouchStart=pv.bind(this),this._onTouchMove=fv.bind(this),this._onMouseDown=uv.bind(this),this._onMouseMove=cv.bind(this),this._interceptControlDown=gv.bind(this),this._interceptControlUp=vv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qu),this.update(),this.state=et.NONE}update(e=null){let t=this.object.position;xt.copy(t).sub(this.target),xt.applyQuaternion(this._quat),this._spherical.setFromVector3(xt),this.autoRotate&&this.state===et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(r)&&isFinite(i)&&(r<-Math.PI?r+=Ut:r>Math.PI&&(r-=Ut),i<-Math.PI?i+=Ut:i>Math.PI&&(i-=Ut),r<=i?this._spherical.theta=Math.max(r,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+i)/2?Math.max(r,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=n!=this._spherical.radius}if(xt.setFromSpherical(this._spherical),xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){let s=xt.length();n=this._clampDistance(s*this._scale);let o=s-n;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),a=!!o}else if(this.object.isOrthographicCamera){let s=new C(this._mouse.x,this._mouse.y,0);s.unproject(this.object);let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=o!==this.object.zoom;let l=new C(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(s),this.object.updateMatrixWorld(),n=xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(wn.origin.copy(this.object.position),wn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wn.direction))<av?this.object.lookAt(this.target):(Yu.setFromNormalAndCoplanarPoint(this.object.up,this.target),wn.intersectPlane(Yu,this.target))))}else if(this.object.isOrthographicCamera){let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Do||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Do||this._lastTargetPosition.distanceToSquared(this.target)>Do?(this.dispatchEvent(qu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ut/60*this.autoRotateSpeed*e:Ut/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){xt.setFromMatrixColumn(t,0),xt.multiplyScalar(-e),this._panOffset.add(xt)}_panUp(e,t){this.screenSpacePanning===!0?xt.setFromMatrixColumn(t,1):(xt.setFromMatrixColumn(t,0),xt.crossVectors(this.object.up,xt)),xt.multiplyScalar(e),this._panOffset.add(xt)}_pan(e,t){let r=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;xt.copy(i).sub(this.target);let a=xt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/r.clientHeight,this.object.matrix),this._panUp(2*t*a/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let r=this.domElement.getBoundingClientRect(),i=e-r.left,a=t-r.top,n=r.width,s=r.height;this._mouse.x=i/n*2-1,this._mouse.y=-(a/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ut*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ut*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(r,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(r,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),r=e.pageX-t.x,i=e.pageY-t.y,a=Math.sqrt(r*r+i*i);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let r=this._getSecondPointerPosition(e),i=.5*(e.pageX+r.x),a=.5*(e.pageY+r.y);this._rotateEnd.set(i,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ut*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ut*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(r,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),r=e.pageX-t.x,i=e.pageY-t.y,a=Math.sqrt(r*r+i*i);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let n=(e.pageX+t.x)*.5,s=(e.pageY+t.y)*.5;this._updateZoomParameters(n,s)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}};function sv(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function ov(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function lv(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ju),this.state=et.NONE;break;case 1:let t=this._pointers[0],r=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:r.x,pageY:r.y});break}}function uv(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ci.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=et.DOLLY;break;case ci.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=et.ROTATE}break;case ci.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=et.PAN}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(Uo)}function cv(e){switch(this.state){case et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function hv(e){this.enabled===!1||this.enableZoom===!1||this.state!==et.NONE||(e.preventDefault(),this.dispatchEvent(Uo),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(ju))}function dv(e){this.enabled!==!1&&this._handleKeyDown(e)}function pv(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case hi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=et.TOUCH_ROTATE;break;case hi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=et.TOUCH_PAN;break;default:this.state=et.NONE}break;case 2:switch(this.touches.TWO){case hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=et.TOUCH_DOLLY_PAN;break;case hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=et.TOUCH_DOLLY_ROTATE;break;default:this.state=et.NONE}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(Uo)}function fv(e){switch(this._trackPointer(e),this.state){case et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=et.NONE}}function mv(e){this.enabled!==!1&&e.preventDefault()}function gv(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vv(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var _v=class extends Ol{constructor(){super();let e=new Qr;e.deleteAttribute("uv");let t=new Ea({side:Ct}),r=new Ea,i=new ap(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let a=new ct(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let n=new nd(e,r,6),s=new Pt;s.position.set(-10.906,2.009,1.846),s.rotation.set(0,-.195,0),s.scale.set(2.328,7.905,4.651),s.updateMatrix(),n.setMatrixAt(0,s.matrix),s.position.set(-5.607,-.754,-.758),s.rotation.set(0,.994,0),s.scale.set(1.97,1.534,3.955),s.updateMatrix(),n.setMatrixAt(1,s.matrix),s.position.set(6.167,.857,7.803),s.rotation.set(0,.561,0),s.scale.set(3.927,6.285,3.687),s.updateMatrix(),n.setMatrixAt(2,s.matrix),s.position.set(-2.017,.018,6.124),s.rotation.set(0,.333,0),s.scale.set(2.002,4.566,2.064),s.updateMatrix(),n.setMatrixAt(3,s.matrix),s.position.set(2.291,-.756,-2.621),s.rotation.set(0,-.286,0),s.scale.set(1.546,1.552,1.496),s.updateMatrix(),n.setMatrixAt(4,s.matrix),s.position.set(-2.193,-.369,-5.547),s.rotation.set(0,.516,0),s.scale.set(3.875,3.487,2.986),s.updateMatrix(),n.setMatrixAt(5,s.matrix),this.add(n);let o=new ct(e,Vi(50));o.position.set(-16.116,14.37,8.208),o.scale.set(.1,2.428,2.739),this.add(o);let l=new ct(e,Vi(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new ct(e,Vi(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let c=new ct(e,Vi(43));c.position.set(-.462,8.89,14.52),c.scale.set(4.38,5.441,.088),this.add(c);let d=new ct(e,Vi(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let p=new ct(e,Vi(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Vi(e){return new Hd({color:0,emissive:16777215,emissiveIntensity:e})}function xv(){let e=new sr,t=new sr,r={},i={},a={paint:13375801,carbon:2569282,metal:10793919,rubber:1514273,gold:11703381,blue:2391212,orange:15830066},n=document.createElement("canvas");n.width=n.height=64;let s=n.getContext("2d");s.fillStyle="#172029",s.fillRect(0,0,64,64);for(let x=0;x<8;x++)for(let T=0;T<8;T++)s.fillStyle=(x+T)%2?"#303b45":"#222c35",s.fillRect(x*8,T*8,7,7);let o=new da(n);o.wrapS=o.wrapT=gi,o.repeat.set(5,5),o.colorSpace=St;function l(x,T,R=e){let S=new sr;return S.userData={id:x,layer:T},R.add(S),(i[x]??=[]).push(S),(r[T]??=[]).push(S),S}function u(x,T,R,S=0,E=0,A=0){let O=new ct(T,new Ea({color:R==="carbon"?16777215:a[R]??R,map:R==="carbon"?o:null,metalness:R==="metal"?.75:.15,roughness:R==="rubber"?.85:.4,side:Dt}));return O.position.set(S,E,A),x.add(O),O}function c(x,T,R,S,E,A,O,B){return u(x,new Qr(E,A,O),B,T,R,S)}function d(x,T,R,S,E,A,O=0){let B=[],z=[];for(let k=0;k<=16;k++){let $=(k/16-.5)*S,G=.08*Math.pow($/(S/2),2);for(let re=0;re<32;re++){let pe=re/32*Math.PI*2,Le=(1+Math.cos(pe))/2,De=Math.sin(pe)*.035*Math.sin(Math.PI*Le)+.035*Math.sin(Math.PI*Le);B.push(T+(Le-.5)*E+G,R+De+O*(Le-.5)*E,$)}}for(let k=0;k<16;k++)for(let $=0;$<32;$++){let G=k*32+$,re=k*32+($+1)%32;z.push(G,G+32,re,re,G+32,re+32)}let W=new Mt;return W.setAttribute("position",new Ke(B,3)),W.setIndex(z),W.computeVertexNormals(),u(x,W,A)}function p(x,T,R,S,E,A,O,B="z"){let z=u(x,new pa(E,E,A,48),O,T,R,S);return B==="z"&&(z.rotation.x=Math.PI/2),B==="x"&&(z.rotation.z=Math.PI/2),z}function f(x,T,R,S,E){let A=new C(...R).sub(new C(...T)),O=u(x,new pa(S,S,A.length(),12),E);return O.position.copy(new C(...T).addScaledVector(A,.5)),O.quaternion.setFromUnitVectors(new C(0,1,0),A.normalize()),O}function v(x,T,R,S){return u(x,new vo(new pn(T.map(E=>new C(...E))),48,R,10,!1),S)}function g(x,T,R){let S=[],E=[];for(let[O,B,z,W]of T)for(let k=0;k<40;k++){let $=k/40*Math.PI*2;S.push(O,B+Math.sin($)*W,Math.cos($)*z)}for(let O=0;O<T.length-1;O++)for(let B=0;B<40;B++){let z=O*40+B,W=O*40+(B+1)%40;E.push(z,W,z+40,W,W+40,z+40)}let A=new Mt;return A.setAttribute("position",new Ke(S,3)),A.setIndex(E),A.computeVertexNormals(),u(x,A,R)}function m(x,T,R,S,E,A=.2,O=.06){let B=document.createElement("canvas");B.width=512,B.height=128;let z=B.getContext("2d");z.clearRect(0,0,512,128),z.fillStyle="white",z.font="bold 56px Arial",z.textAlign="center",z.fillText(T,256,82);let W=new da(B);W.colorSpace=St;let k=new ct(new ya(A,O),new oa({map:W,transparent:!0,side:Dt}));return k.position.set(R,S,E),x.add(k),k}let h=l("floor","structure");c(h,.1,.09,0,3.45,.045,1.46,"carbon");for(let x of[-1,1]){c(h,.25,.13,x*.73,2.6,.1,.025,"carbon");let T=c(h,1.62,.19,x*.36,.65,.03,.59,"carbon");T.rotation.z=.22;for(let R of[.12,.35,.58])c(h,1.64,.16,x*R,.65,.18,.012,"carbon")}h=l("nose","body"),g(h,[[-2.64,.23,.065,.025],[-2.35,.29,.12,.08],[-1.8,.39,.19,.14],[-1.2,.44,.28,.21],[-.72,.4,.31,.22]],"paint"),h=l("cockpit","structure");for(let x of[-1,1])g(h,[[-1.15,.3,.13,.15],[-.7,.34,.085,.21],[.12,.37,.09,.22],[.5,.3,.12,.18]],"carbon").position.z=x*.25;c(h,-.23,.2,0,1.6,.15,.48,"carbon"),h=l("seat","cockpit");let P=c(h,-.05,.36,0,.12,.47,.32,"carbon");P.rotation.z=-.35,c(h,-.35,.2,0,.55,.06,.3,"carbon");for(let x of[-1,1]){let T=c(h,-.105,.39,x*.09,.025,.36,.046,"paint");T.rotation.z=-.35,c(h,-.32,.24,x*.08,.4,.025,.04,"paint")}h=l("halo","body"),v(h,[[-.88,.63,0],[-.64,.79,.28],[.03,.82,.29],[.13,.67,.27]],.031,"carbon"),v(h,[[-.88,.63,0],[-.64,.79,-.28],[.03,.82,-.29],[.13,.67,-.27]],.031,"carbon"),f(h,[-.88,.48,0],[-.88,.68,0],.028,"carbon"),h=l("airbox","body"),g(h,[[.09,.85,.14,.12],[.25,.85,.16,.14],[.75,.69,.12,.12]],"paint"),p(h,.085,.86,0,.098,.01,"rubber","x"),h=l("cover","body"),g(h,[[.3,.51,.26,.22],[.65,.54,.3,.3],[1.05,.46,.26,.25],[1.6,.32,.12,.15],[1.95,.24,.05,.07]],"paint"),c(h,.99,.79,0,1.23,.22,.016,"paint");for(let x of[-1,1]){h=l("sidepod","body"),g(h,[[-.24,.39,.22,.18],[.02,.43,.26,.21],[.55,.38,.23,.18],[1.13,.24,.12,.1],[1.4,.19,.045,.04]],"paint").position.z=x*.46,c(h,-.25,.42,x*.46,.012,.23,.34,"rubber"),h=l("radiator","cooling");let T=c(h,.4,.37,x*.43,.73,.055,.34,"metal");T.rotation.z=-.2;for(let R=0;R<20;R++)c(h,.08+R*.033,.405,x*.43,.01,.022,.32,"carbon");v(h,[[.05,.4,x*.44],[.42,.22,x*.29],[.77,.3,x*.23]],.023,"blue")}h=l("front","aero");for(let x=0;x<3;x++)d(h,-2.44+x*.145,.13+x*.04,1.78,.24,"carbon",.15);for(let x of[-1,1])c(h,-2.3,.21,x*.9,.48,.25,.024,"paint");h=l("rear","aero");for(let x=0;x<2;x++)d(h,2.12+x*.2,.91+x*.055,1.06,.32,"carbon",.24);for(let x of[-1,1])c(h,2.23,.83,x*.55,.52,.39,.025,"paint"),f(h,[1.6,.29,x*.14],[2.12,.94,x*.14],.025,"carbon");h=l("fuel","internals"),c(h,.23,.37,0,.32,.39,.42,"gold"),h=l("battery","electrical"),c(h,-.04,.155,0,.61,.12,.35,"blue");for(let x=0;x<6;x++)c(h,-.29+x*.1,.223,0,.008,.006,.3,"metal");h=l("electronics","electrical"),c(h,.34,.18,.29,.28,.11,.19,"metal"),v(h,[[.05,.2,.2],[.3,.24,.32],[.8,.26,.3]],.015,"orange"),h=l("engine","mechanical"),c(h,.78,.29,0,.58,.19,.35,"metal");for(let x of[-1,1]){let T=c(h,.8,.48,x*.15,.62,.18,.2,"metal");T.rotation.x=x*.65;for(let R=0;R<3;R++)p(h,.58+R*.21,.52,x*.17,.045,.12,"gold","y"),c(h,.58+R*.21,.6,x*.19,.075,.025,.1,"carbon")}h=l("turbo","mechanical");for(let x of[1.16,1.35])p(h,x,.43,0,.105,.1,"metal","x");f(h,[1.13,.43,0],[1.38,.43,0],.028,"metal"),h=l("exhaust","mechanical");for(let x of[-1,1])for(let T=0;T<3;T++)v(h,[[.55+T*.2,.39,x*.23],[.69+T*.16,.27,x*.33],[1.22,.37,x*.07]],.025,"gold");v(h,[[1.36,.43,0],[1.64,.43,0],[2.02,.39,0]],.045,"metal"),h=l("mguk","electrical"),p(h,.79,.23,.29,.08,.28,"blue","x"),h=l("gearbox","mechanical"),g(h,[[1.17,.25,.16,.16],[1.5,.26,.14,.14],[1.83,.28,.1,.12]],"metal");for(let x=0;x<7;x++)c(h,1.25+x*.065,.27,0,.015,.3,.28,"carbon");for(let x of[-1.7,1.7])for(let T of[-1,1]){let R=T*.79,S=.35,E=x<0?.28:.34;h=l("tyre","wheels");let A=u(h,new Fi(.267,.083,20,64),"rubber",x,.36,R);A.scale.z=E/.166;for(let O of[-1,1])u(h,new Fi(.272,.0035,8,64),15322953,x,.36,R+O*E*.49).scale.set(1,1,1);p(h,x,.36,R,.223,E*.78,"carbon");for(let O of[-1,1]){p(h,x,.36,R+O*E*.41,.065,.014,"metal");for(let B=0;B<10;B++){let z=B*Math.PI/5;f(h,[x+Math.sin(z)*.06,.36+Math.cos(z)*.06,R+O*E*.4],[x+Math.sin(z+.12)*.21,.36+Math.cos(z+.12)*.21,R+O*E*.4],.012,"metal")}}h=l("brake","brakes"),p(h,x,.36,R,.16,.028,"carbon"),p(h,x,.36,R,.066,.035,"metal");for(let O=0;O<40;O++){let B=O*Math.PI/20;p(h,x+Math.sin(B)*.137,.36+Math.cos(B)*.137,R+.018,.004,.005,"metal")}c(h,x+.12,.36,R,.09,.19,.08,"gold"),h=l("suspension","suspension");for(let O of[.24,.45])for(let B of[-.34,.32])f(h,[x+B,O,.25*T],[x,O-.04,R],.016,"carbon");f(h,[x-.26,.5,T*.22],[x,.22,R],.018,"metal"),f(h,[x+.03,.27,0],[x,.36,R],.025,"metal")}h=l("steering","cockpit"),c(h,-.7,.47,0,.035,.16,.3,"carbon"),f(h,[-.72,.45,0],[-1.2,.3,0],.017,"metal"),h=l("pedals","cockpit");for(let x of[-1,1])f(h,[-1.25,.2,x*.08],[-1.33,.31,x*.08],.014,"metal"),c(h,-1.34,.32,x*.08,.03,.12,.07,"metal");h=l("pistons","mechanical"),f(h,[.46,.3,0],[1.13,.3,0],.032,"metal");for(let x of[-1,1])for(let T=0;T<3;T++){let R=.58+T*.21;f(h,[R,.3,0],[R,.41,x*.11],.015,"gold");let S=p(h,R,.45,x*.15,.047,.062,"metal","y");S.rotation.x=x*Math.PI/4;for(let E of[-.015,0,.015]){let A=u(h,new Fi(.047,.002,6,24),"carbon",R,.45+E,x*(.15+E));A.rotation.x=Math.PI/4*x}}h=l("dampers","suspension");for(let x of[-1,1]){f(h,[-1.49,.46,x*.16],[-1.1,.48,x*.16],.025,"gold");for(let T=0;T<13;T++){let R=u(h,new Fi(.036,.005,6,16),"metal",-1.46+T*.025,.47,x*.16);R.rotation.y=Math.PI/2}}h=l("light","mechanical"),c(h,2.07,.29,0,.04,.08,.1,16716591),h=l("steering","wheel",t);let y=new mn;y.moveTo(-.43,.22),y.lineTo(.43,.22),y.quadraticCurveTo(.54,.12,.48,-.21),y.lineTo(.25,-.29),y.lineTo(-.25,-.29),y.lineTo(-.48,-.21),y.quadraticCurveTo(-.54,.12,-.43,.22),u(h,new go(y,{depth:.038,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:3,steps:1}),"carbon");for(let x of[-1,1])v(h,[[x*.42,.24,.035],[x*.52,.18,.025],[x*.54,-.06,.025],[x*.47,-.24,.035]],.052,"rubber");let b=l("screen","wheel",t);c(b,0,.075,.055,.4,.21,.022,"rubber"),m(b,"8  |  298",0,.105,.068,.32,.07),m(b,"DEMO \u2022 BB 56.0",0,.015,.07,.32,.038);for(let x=0;x<15;x++)u(b,new ou(.009,10,8),x<5?4911001:x<10?16732730:8936959,-.18+x*.026,.225,.065);let U=[["radio","RAD",-.34,.15,7523071],["pit","PIT",.34,.15,16768085],["neutral","N",-.36,0,5625242],["drink","DRINK",.36,0,15658734],["boost","BOOST",-.32,-.16,16737086],["overtake","OT",.32,-.16,16492255],["aero","AERO",0,-.22,8447982]];for(let[x,T,R,S,E]of U){let A=l(x,"wheel",t);p(A,R,S,.07,.033,.02,"metal"),p(A,R,S,.085,.026,.012,E),m(A,T,R,x==="aero"?S-.045:S+.048,.085,.14,.027)}for(let[x,T,R]of[["enginebrake","EB",-.32],["migration","BMIG",.32]]){let S=l(x,"wheel",t);p(S,R,.075,.08,.02,.018,"gold"),m(S,T,R,.105,.089,.11,.022)}for(let[x,T,R]of[["balance","BB",-.19],["strategy","STRAT",0],["differential","DIFF",.19]]){let S=l(x,"wheel",t);p(S,R,-.105,.07,.043,.025,"gold"),c(S,R,-.105,.096,.012,.061,.008,"carbon"),m(S,T,R,-.172,.08,.15,.03);for(let E=0;E<12;E++){let A=E*Math.PI/6;c(S,R+Math.sin(A)*.052,-.105+Math.cos(A)*.052,.07,.004,.008,.005,"metal")}}for(let x of[-1,1])h=l("shift","wheel",t),c(h,x*.37,.07,-.075,.16,.24,.022,"metal"),m(h,x>0?"+":"\u2212",x*.37,.08,-.091,.1,.1).rotation.y=Math.PI,h=l("clutch","wheel",t),c(h,x*.24,-.17,-.1,.21,.1,.02,"carbon");return h=l("quick","wheel",t),p(h,0,0,-.1,.082,.17,"gold"),p(h,0,0,-.2,.05,.04,"metal"),{car:e,wheel:t,groups:r,items:i}}var Ht={rules:["FIA \xB7 r\xE8glement technique 2026, \xE9dition 20 du 5 ao\xFBt 2026","https://www.fia.com/system/files/documents/fia_2026_f1_regulations_-_section_c_technical_-_iss_20_-_2026-08-05.pdf"],honda:["Honda \xB7 pr\xE9sentation technique 2026, 26 janvier 2026","https://global.honda/en/F1/features/2026_Commentary/regulations/"],f1:["Formula 1 \xB7 guide de la r\xE9glementation 2026","https://www.formula1.com/en/latest/article/the-beginners-guide-to-the-2026-regulations.6j0tS0hrHG2T01tpmK6XYz"],wheel:["Mercedes \xB7 principes du volant (exemple historique de 2019)","https://www.mercedesamgf1.com/news/how-does-an-f1-steering-wheel-work"]},cr={front:["Aileron avant","A\xC9RODYNAMIQUE","Il contribue \xE0 l\u2019appui sur l\u2019avant et oriente l\u2019air autour de la voiture. En 2026, ses volets participent \xE0 l\u2019a\xE9rodynamique active.","Il aide les pneus avant \xE0 garder leur adh\xE9rence.","f1"],nose:["Nez et structure de choc","S\xC9CURIT\xC9","Le nez porte l\u2019aileron avant et int\xE8gre une structure absorbant de l\u2019\xE9nergie lors d\u2019un choc. La g\xE9n\xE9ration 2026 renforce la protection lors d\u2019impacts successifs.","Une pi\xE8ce con\xE7ue aussi pour se d\xE9former et prot\xE9ger.","f1"],tyre:["Pneus et roues","CONTACT AU SOL","Les pneus transmettent les efforts de freinage, de virage et d\u2019acc\xE9l\xE9ration. Leurs pressions, temp\xE9ratures et leur usure influencent l\u2019adh\xE9rence. Les roues sont ici repr\xE9sent\xE9es avec des pneus lisses.","Toute la voiture agit sur la piste \xE0 travers les pneus.","rules"],suspension:["Suspensions","CH\xC2SSIS","Les triangles guident les roues. Ressorts et amortisseurs contr\xF4lent leurs mouvements et ceux de la voiture. Leur implantation varie selon l\u2019\xE9curie : le dessin ne reproduit pas un montage pr\xE9cis.","Maintenir le pneu en contact avec le sol, sans laisser la voiture rebondir librement.","rules"],halo:["Halo","S\xC9CURIT\xC9","Cette structure entoure le haut du cockpit et contribue \xE0 prot\xE9ger la t\xEAte du pilote contre les impacts. Elle compl\xE8te les autres dispositifs de s\xE9curit\xE9 ; elle ne remplace ni le casque ni la cellule de survie.","Une protection suppl\xE9mentaire autour de la t\xEAte.","rules"],cockpit:["Cockpit et cellule de survie","S\xC9CURIT\xC9","Le pilote prend place dans une cellule r\xE9sistante, avec son si\xE8ge, ses harnais et ses commandes. Les jambes s\u2019\xE9tendent vers l\u2019avant. La cellule doit satisfaire aux essais de s\xE9curit\xE9 impos\xE9s par la FIA.","Le c\u0153ur protecteur de la monoplace.","rules"],sidepod:["Pontons et entr\xE9es d\u2019air","REFROIDISSEMENT","Les entr\xE9es lat\xE9rales acheminent de l\u2019air vers les \xE9changeurs de refroidissement. Les formes ext\xE9rieures guident aussi l\u2019\xE9coulement autour de la carrosserie. Les volumes diff\xE8rent beaucoup entre \xE9curies.","Faire respirer la m\xE9canique tout en guidant l\u2019air.","rules"],floor:["Plancher et diffuseur","A\xC9RODYNAMIQUE","L\u2019air circulant sous la voiture contribue \xE0 l\u2019appui. Le diffuseur est la partie arri\xE8re o\xF9 le passage d\u2019air s\u2019\xE9largit. Le concept de plancher change en 2026.","L\u2019a\xE9rodynamique travaille aussi sous la voiture.","honda"],rear:["Aileron arri\xE8re","A\xC9RODYNAMIQUE","Il contribue \xE0 l\u2019appui arri\xE8re. Ses \xE9l\xE9ments mobiles participent aux modes ligne droite et virage de 2026, avec l\u2019aileron avant.","Plus d\u2019appui en virage ; moins de tra\xEEn\xE9e en ligne droite.","f1"],airbox:["Prise d\u2019air sup\xE9rieure","ADMISSION","L\u2019ouverture au-dessus du pilote alimente l\u2019admission et, selon le dessin de la voiture, certains circuits de refroidissement. L\u2019arceau principal de s\xE9curit\xE9 se trouve dans cette zone.","De l\u2019air entre au-dessus du casque.","rules"],cover:["Capot moteur","CARROSSERIE","La carrosserie recouvre le groupe propulseur et contribue \xE0 guider l\u2019air. Ouvrir la vue \xE9clat\xE9e permet de rep\xE9rer les organes habituellement cach\xE9s.","Sous cette enveloppe : moteur, conduites et \xE9lectronique.","rules"],brake:["Disque, plaquettes et \xE9trier","FREINAGE","L\u2019\xE9trier presse les plaquettes contre le disque tournant avec la roue. Le frottement transforme une partie de l\u2019\xE9nergie du mouvement en chaleur. Les conduits apportent de l\u2019air pour refroidir l\u2019ensemble.","Le disque ralentit la roue ; les pneus ralentissent la voiture.","rules"],engine:["Moteur V6 turbo","PROPULSION","Le moteur thermique 2026 est un V6 turbocompress\xE9 de 1,6 litre. Il fonctionne avec le syst\xE8me \xE9lectrique pour entra\xEEner les roues arri\xE8re.","Deux formes d\u2019\xE9nergie participent \xE0 la propulsion.","honda"],turbo:["Turbocompresseur","PROPULSION","Les gaz d\u2019\xE9chappement entra\xEEnent une turbine reli\xE9e \xE0 un compresseur qui comprime l\u2019air d\u2019admission. Le MGU-H n\u2019est plus pr\xE9sent en 2026.","Les gaz qui sortent aident \xE0 comprimer l\u2019air qui entre.","honda"],battery:["Batterie haute tension","\xC9NERGIE","Elle stocke de l\u2019\xE9nergie \xE9lectrique, ensuite utilis\xE9e par le syst\xE8me hybride. Elle est repr\xE9sent\xE9e s\xE9par\xE9ment pour la lecture ; son enveloppe et son implantation exactes ne sont pas reproduites.","Une r\xE9serve d\u2019\xE9nergie, pas une source infinie.","honda"],mguk:["MGU-K","\xC9NERGIE","Cette machine \xE9lectrique peut participer \xE0 la propulsion et r\xE9cup\xE9rer de l\u2019\xE9nergie m\xE9canique. La g\xE9n\xE9ration 2026 lui donne un r\xF4le accru, sans MGU-H.","Un moteur \xE9lectrique capable aussi de fonctionner en g\xE9n\xE9rateur.","honda"],electronics:["\xC9lectronique de puissance","\xC9NERGIE","Elle pilote les \xE9changes \xE9lectriques entre la batterie et la machine \xE9lectrique, en coordination avec les commandes du groupe propulseur.","Organiser et contr\xF4ler l\u2019\xE9nergie \xE9lectrique.","honda"],gearbox:["Bo\xEEte de vitesses et diff\xE9rentiel","TRANSMISSION","La bo\xEEte adapte le rapport entre r\xE9gime moteur et vitesse des roues. Le diff\xE9rentiel permet aux roues arri\xE8re de tourner \xE0 des vitesses diff\xE9rentes dans les virages.","Transmettre l\u2019effort du moteur aux roues arri\xE8re.","rules"],radiator:["Radiateurs et \xE9changeurs","REFROIDISSEMENT","Les \xE9changeurs \xE9vacuent de la chaleur dans l\u2019air ext\xE9rieur. Des circuits de refroidissement servent notamment au moteur et aux composants \xE9lectriques. Les circuits sont simplifi\xE9s sur le dessin.","\xC9viter que la m\xE9canique surchauffe.","rules"],seat:["Baquet et harnais","COCKPIT","Le baquet \xE9pouse la morphologie du pilote. Celui-ci est install\xE9 en position inclin\xE9e, maintenu par un harnais. Le dessin montre le dossier, l\u2019assise et les passages de sangles.","\xCAtre maintenu avec pr\xE9cision, pas simplement assis.","rules"],fuel:["R\xE9servoir de carburant","PROPULSION","Le carburant est contenu dans un r\xE9servoir souple de s\xE9curit\xE9 situ\xE9 dans la cellule, derri\xE8re le pilote. Sa repr\xE9sentation est simplifi\xE9e et s\xE9par\xE9e des autres pi\xE8ces dans la vue \xE9clat\xE9e.","Le carburant est prot\xE9g\xE9 au centre de la voiture.","rules"],light:["Feu arri\xE8re","SIGNALISATION","Ce feu fait partie des dispositifs de signalisation de la voiture. Il ne faut pas l\u2019interpr\xE9ter comme un simple feu stop de voiture de route.","Un signal pour les pilotes qui suivent.","rules"],exhaust:["\xC9chappement","PROPULSION","Les gaz issus de la combustion sont \xE9vacu\xE9s vers l\u2019arri\xE8re, apr\xE8s leur passage dans la turbine du turbo. La sortie repr\xE9sent\xE9e est sch\xE9matique.","Le chemin de sortie des gaz du moteur.","honda"],steering:["Volant","COMMANDES","Il dirige les roues avant et regroupe \xE9cran, boutons, molettes et palettes. Ouvre la vue Volant pour d\xE9couvrir les principales familles de commandes.","Le poste de commande du pilote.","wheel"],screen:["\xC9cran et voyants","VOLANT","Ils affichent les informations utiles au pilote, avec des voyants aidant au changement de rapport. L\u2019affichage pr\xE9sent\xE9 ici est illustratif, sans donn\xE9es en direct.","Lire la voiture en un coup d\u2019\u0153il.","wheel"],radio:["RAD \xB7 Radio","VOLANT","Le bouton permet au pilote de parler \xE0 son ing\xE9nieur.","Communiquer avec le stand.","wheel"],drink:["DRINK \xB7 Boisson","VOLANT","Une commande peut actionner le dispositif de boisson du pilote. Sa pr\xE9sence et son fonctionnement d\xE9pendent de la voiture.","Boire sans retirer les mains des commandes.","rules"],enginebrake:["EB \xB7 Frein moteur","VOLANT","Ce r\xE9glage ajuste la contribution du frein moteur \xE0 la d\xE9c\xE9l\xE9ration.","Adapter le comportement au lever de pied.","wheel"],pit:["PIT \xB7 Limiteur des stands","VOLANT","Il active le dispositif limitant la vitesse dans la voie des stands.","Respecter la limitation des stands.","wheel"],neutral:["N \xB7 Point mort","VOLANT","Cette commande permet de demander le point mort, selon les s\xE9curit\xE9s pr\xE9vues.","D\xE9sengager le rapport.","rules"],balance:["BB \xB7 R\xE9partition de freinage","VOLANT","Le pilote ajuste la r\xE9partition de freinage entre l\u2019avant et l\u2019arri\xE8re.","Adapter le freinage au virage.","wheel"],differential:["DIFF \xB7 Diff\xE9rentiel","VOLANT","Ces r\xE9glages modifient le comportement du diff\xE9rentiel selon la phase du virage.","Ajuster la motricit\xE9 et la rotation.","wheel"],strategy:["STRAT \xB7 Strat\xE9gie","VOLANT","La commande s\xE9lectionne des r\xE9glages autoris\xE9s du groupe propulseur. Les options d\xE9pendent de l\u2019\xE9curie.","Choisir un ensemble de r\xE9glages.","wheel"],aero:["AERO \xB7 A\xE9rodynamique active","VOLANT 2026","En 2026, les ailes mobiles changent de configuration dans les conditions autoris\xE9es. Le bouton dessin\xE9 n\u2019est pas celui d\u2019une \xE9curie pr\xE9cise.","Ligne droite ou virage : deux besoins diff\xE9rents.","f1"],boost:["BOOST \xB7 D\xE9ploiement","VOLANT 2026","Cette commande permet au pilote d\u2019agir sur le d\xE9ploiement de puissance, selon l\u2019\xE9nergie disponible et les r\xE9glages.","Utiliser l\u2019\xE9nergie au moment choisi.","f1"],overtake:["OT \xB7 Overtake","VOLANT 2026","Ce mode d\u2019assistance \xE9lectrique au d\xE9passement est soumis \xE0 des conditions d\u2019\xE9ligibilit\xE9. Il ne s\u2019agit pas de l\u2019ancien DRS.","Une aide \xE9lectrique conditionnelle.","f1"],shift:["Palettes de vitesses","DOS DU VOLANT","Le pilote demande la mont\xE9e ou la descente d\u2019un rapport avec les palettes.","Changer de vitesse sans l\xE2cher le volant.","wheel"],clutch:["Palettes d\u2019embrayage","DOS DU VOLANT","Elles commandent l\u2019embrayage, notamment pour lancer la voiture au d\xE9part.","Contr\xF4ler la mise en mouvement.","rules"],quick:["Fixation rapide","DOS DU VOLANT","Elle permet de retirer le volant pour entrer dans le cockpit ou en sortir.","Lib\xE9rer le passage du pilote.","wheel"]};Object.assign(cr,{pedals:["P\xE9dalier","COCKPIT","Le pilote commande l\u2019acc\xE9l\xE9rateur et le frein avec les pieds. Le freinage et la demande de couple ne sont pas une seule fonction.","Les jambes sont orient\xE9es vers l\u2019avant dans la cellule ; position et r\xE9glages sont adapt\xE9s au pilote.","rules"],pistons:["Pistons, bielles et vilebrequin","MOTEUR INTERNE","Les gaz de combustion exercent une force sur les pistons. Les bielles relient les pistons au vilebrequin, qui transforme ce mouvement alternatif en rotation.","Retirez le moteur ext\xE9rieur pour voir ce m\xE9canisme simplifi\xE9. Les jeux, soupapes, lubrification et circuits internes ne sont pas mod\xE9lis\xE9s.","rules"],dampers:["Ressorts et amortisseurs","CH\xC2SSIS","Les ressorts fournissent une force de rappel ; les amortisseurs dissipent de l\u2019\xE9nergie et contr\xF4lent la vitesse des mouvements de suspension.","Leur r\xE9glage influence le contact des pneus et la stabilit\xE9 de la plateforme a\xE9rodynamique. Le m\xE9canisme de renvoi est simplifi\xE9.","rules"],migration:["BMIG \xB7 Migration du freinage","VOLANT","La migration fait \xE9voluer la r\xE9partition de freinage pendant la phase de freinage selon les strat\xE9gies autoris\xE9es.","Elle se distingue du r\xE9glage statique de r\xE9partition. Les valeurs et logiques exactes sont propres aux \xE9quipes.","wheel"]});var kr=document.getElementById("f1Loupe");typeof titles<"u"&&(titles.loupe="F1 \xE0 la loupe");var hr=e=>String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),yv={front:["L\u2019appui augmente la capacit\xE9 des pneus avant \xE0 transmettre un effort lat\xE9ral. Le r\xE9glage modifie l\u2019\xE9quilibre avant/arri\xE8re.","Un gain d\u2019appui peut co\xFBter de la tra\xEEn\xE9e ; il ne garantit pas un meilleur temps au tour."],rear:["La charge sur le train arri\xE8re favorise la stabilit\xE9 et la motricit\xE9. Les configurations actives font varier le compromis appui/tra\xEEn\xE9e.","La vitesse de pointe, l\u2019\xE9quilibre et les conditions d\u2019activation doivent \xEAtre consid\xE9r\xE9s ensemble."],floor:["La g\xE9om\xE9trie du soubassement influence la distribution de pression et l\u2019appui. La garde au sol et l\u2019assiette modifient son fonctionnement.","Un mod\xE8le visuel ne permet pas de quantifier un gain a\xE9rodynamique : il faudrait des mesures ou une simulation valid\xE9e."],tyre:["Temp\xE9rature, charge verticale et glissement d\xE9terminent la capacit\xE9 \xE0 transmettre les efforts. Une roue trop sollicit\xE9e peut perdre de l\u2019adh\xE9rence.","Freiner, acc\xE9l\xE9rer et tourner sollicitent une m\xEAme r\xE9serve d\u2019adh\xE9rence : ces efforts ne sont pas ind\xE9pendants."],suspension:["Elle contr\xF4le le mouvement des roues et la plateforme a\xE9rodynamique. Les triangles guident le porte-moyeu ; les \xE9l\xE9ments \xE9lastiques et amortisseurs contr\xF4lent les mouvements.","Un r\xE9glage tr\xE8s rigide peut stabiliser la hauteur de caisse mais r\xE9duire la capacit\xE9 \xE0 absorber les irr\xE9gularit\xE9s. Implantation illustrative."],brake:["Le disque tourne avec la roue ; l\u2019\xE9trier est fix\xE9 au porte-moyeu. Les plaquettes serrent les deux faces du disque. Le freinage arri\xE8re est coordonn\xE9 avec la r\xE9cup\xE9ration \xE9lectrique.","Le refroidissement doit \xE9viter les temp\xE9ratures excessives sans sortir le mat\xE9riau de sa plage de fonctionnement. La vue simplifie les conduits internes."],radiator:["La chaleur passe du fluide aux parois puis \xE0 l\u2019air. Les ailettes augmentent la surface d\u2019\xE9change.","Une ouverture plus grande peut faciliter le refroidissement mais modifier la tra\xEEn\xE9e et les \xE9coulements."],engine:["La combustion pousse les pistons ; les bielles transmettent l\u2019effort au vilebrequin. Deux bancs de trois cylindres constituent le V6.","Cette repr\xE9sentation montre les ensembles, pas la distribution, les lubrifiants ni toutes les pi\xE8ces internes d\u2019un moteur r\xE9el."],turbo:["La turbine extrait de l\u2019\xE9nergie des gaz d\u2019\xE9chappement ; son arbre entra\xEEne le compresseur d\u2019admission.","La pression, la temp\xE9rature d\u2019air et la r\xE9ponse transitoire sont li\xE9es. Le montage exact d\xE9pend du motoriste."],battery:["La r\xE9serve d\u2019\xE9nergie alimente la propulsion \xE9lectrique et re\xE7oit l\u2019\xE9nergie r\xE9cup\xE9r\xE9e.","Capacit\xE9, temp\xE9rature, puissance et \xE9nergie disponible sont distinctes. Son emplacement pr\xE9cis est ici simplifi\xE9."],mguk:["En propulsion, l\u2019\xE9nergie \xE9lectrique devient un couple m\xE9canique ; en r\xE9cup\xE9ration, le flux est invers\xE9.","La puissance utilisable d\xE9pend aussi de l\u2019\xE9nergie disponible, des temp\xE9ratures et des limites r\xE9glementaires."],gearbox:["Les rapports adaptent le r\xE9gime moteur \xE0 la vitesse. Le diff\xE9rentiel permet des vitesses de rotation diff\xE9rentes entre les roues arri\xE8re.","Le r\xE9glage du diff\xE9rentiel influence la rotation et la motricit\xE9 : plus de verrouillage n\u2019est pas toujours pr\xE9f\xE9rable."],seat:["Le maintien limite les d\xE9placements du corps ; la position doit permettre l\u2019acc\xE8s aux commandes et respecter les exigences de s\xE9curit\xE9.","La coque, le si\xE8ge, le harnais et les protections fonctionnent ensemble. Le si\xE8ge seul ne constitue pas la cellule de survie."],balance:["Une r\xE9partition davantage vers l\u2019avant augmente la part de freinage demand\xE9e au train avant.","Trop de sollicitation peut bloquer un train ; le r\xE9glage d\xE9pend du transfert de charge et de l\u2019adh\xE9rence."],differential:["Les r\xE9glages peuvent distinguer l\u2019entr\xE9e, le milieu et la sortie du virage. Ils influencent l\u2019\xE9cart de vitesse entre les roues motrices.","Les libell\xE9s et valeurs ne sont pas universels. La molette pr\xE9sent\xE9e regroupe ces fonctions \xE0 titre p\xE9dagogique."],enginebrake:["Le couple r\xE9sistant du moteur participe \xE0 la d\xE9c\xE9l\xE9ration du train arri\xE8re.","Un exc\xE8s peut d\xE9stabiliser l\u2019arri\xE8re au lever de pied ; ce r\xE9glage est distinct de la r\xE9partition des freins."],strategy:["Une s\xE9lection de strat\xE9gie regroupe des param\xE8tres autoris\xE9s de fonctionnement du groupe propulseur.","Ce n\u2019est pas une commande donnant une puissance illimit\xE9e ; les options d\xE9pendent de l\u2019\xE9curie et du r\xE8glement."],shift:["Les palettes transmettent une demande de changement de rapport aux syst\xE8mes de commande.","Une demande reste soumise aux s\xE9curit\xE9s ; elle n\u2019est pas une liaison m\xE9canique directe avec les pignons."],clutch:["Au d\xE9part, le pilote module l\u2019engagement de l\u2019embrayage pour transmettre progressivement le couple.","L\u2019adh\xE9rence disponible et la pr\xE9cision de l\u2019engagement conditionnent le patinage des roues."]},Ev={body:"Carrosserie & halo",aero:"Ailerons",wheels:"Roues",structure:"Cellule & plancher",cockpit:"Si\xE8ge & commandes",cooling:"Refroidissement",mechanical:"Moteur & transmission",electrical:"\xC9lectricit\xE9",internals:"R\xE9servoir",brakes:"Freins",suspension:"Suspensions"};kr.innerHTML=`<div class="lab"><header class="lab-head"><div><span class="lab-eyebrow">F1 CONSTANT / ATELIER TECHNIQUE</span><h2>F1 \xE0 la loupe<span>Explorer. Retirer. Comprendre.</span></h2></div><span class="lab-chip">ARCHITECTURE 2026 \xB7 3D</span></header><p class="lab-intro">Une monoplace g\xE9n\xE9rique manipulable : touchez une pi\xE8ce pour lire sa fonction, retirez les enveloppes, puis explorez les organes cach\xE9s.</p><div class="lab-views" aria-label="Angles de vue">${[["perspective","3D libre"],["top","Dessus"],["side","Profil"],["front","Face"],["rear","Arri\xE8re"],["wheel","Volant"]].map(([e,t])=>`<button data-view="${e}">${t}</button>`).join("")}</div><div class="lab-layout"><section class="lab-viewer"><div class="lab-stage" id="labStage"><div class="lab-overlay"><span id="labMode">MONOPLACE / VUE 3D</span><span>Mod\xE8le p\xE9dagogique \xB7 pas un plan d\u2019\xE9curie</span></div><div class="lab-loading">Pr\xE9paration de la sc\xE8ne 3D\u2026</div><div class="lab-nav"><button data-action="zoom-in" aria-label="Zoomer">+</button><button data-action="zoom-out" aria-label="D\xE9zoomer">\u2212</button><button data-action="reset">Recentrer</button></div><span class="lab-hint">Glisser : tourner \xB7 molette / pincer : zoomer \xB7 deux doigts : d\xE9placer</span></div><div class="lab-toolbar"><button data-action="assemble">Tout remonter</button><button data-action="peel">Retirer l\u2019enveloppe</button><button data-action="xray" aria-pressed="false">Transparence</button><button data-action="undo" disabled>Annuler le retrait</button></div><div class="lab-scan"><label><input type="checkbox" id="labScan"> Coupe scanner</label><label>Axe <select id="labAxis"><option value="y">Horizontal</option><option value="z">Lat\xE9ral</option><option value="x">Longitudinal</option></select></label><input id="labDepth" type="range" min="0" max="100" value="100" aria-label="Profondeur de coupe"><output id="labDepthLabel">100 %</output></div><p class="lab-small">La coupe retire une portion g\xE9om\xE9trique de la maquette ; elle ne simule ni une radiographie ni un examen r\xE9el. Les surfaces coup\xE9es sont ouvertes.</p></section><aside class="lab-detail" id="labDetail" aria-live="polite"></aside></div><section class="lab-controls"><div><h3>01 / Retirer les couches</h3><p>D\xE9cochez une couche ou activez le retrait au clic. Les \xE9l\xE9ments situ\xE9s dessous restent \xE0 leur place.</p><label class="lab-remove"><input type="checkbox" id="labRemove"> Retirer la pi\xE8ce touch\xE9e</label><div class="lab-layers">${Object.entries(Ev).map(([e,t])=>`<label><input type="checkbox" data-layer="${e}" checked>${t}</label>`).join("")}</div></div><div><h3>02 / Explorer les composants</h3><label class="lab-search">Chercher une pi\xE8ce ou une commande<input id="labSearch" type="search" placeholder="Frein, moteur, embrayage\u2026"></label><div class="lab-parts" id="labParts"></div></div></section><details class="lab-sources"><summary>Pr\xE9cision du mod\xE8le, limites et sources techniques</summary><p>Maquette 3D originale, g\xE9n\xE9rique et simplifi\xE9e, non issue d\u2019un scan ou de plans confidentiels. Les composants sont dispos\xE9s pour comprendre leur r\xF4le ; formes, canalisations, fixations et implantations propres aux \xE9curies ne sont pas reproduites. Ce mod\xE8le ne repr\xE9sente pas toutes les pi\xE8ces d\u2019une F1 et ne pr\xE9dit aucun gain chiffr\xE9 de performance. Le volant rassemble des fonctions repr\xE9sentatives : disposition et intitul\xE9s varient selon les \xE9quipes.</p><p>R\xE9f\xE9rences consult\xE9es le 20 septembre 2026. La source Mercedes d\xE9crit un volant de 2019 : seuls les principes communs sont repris ; les fonctions a\xE9rodynamiques et \xE9lectriques 2026 sont distingu\xE9es.</p>${Object.values(Ht).map(([e,t])=>`<p><a href="${t}" target="_blank" rel="noopener">${e}</a></p>`).join("")}</details></div>`;var mt=e=>kr.querySelector(e),Hi="front",ze,dt,Et,Rt,Mr,Qt="perspective",si=!1,An=[],No=!1;function br(e){Hi=e;let t=cr[e];if(!t)return;let r=yv[e];if(mt("#labDetail").innerHTML=`<span class="lab-eyebrow">${hr(t[1])}</span><h3>${hr(t[0])}</h3><h4>Fonction</h4><p>${hr(t[2])}</p><h4>Comprendre son effet</h4><p>${hr(r?.[0]||t[3])}</p>${r?`<h4>Compromis & limites</h4><p>${hr(r[1])}</p>`:""}<div class="lab-detail-actions"><button data-action="focus">Voir de pr\xE8s</button><button data-action="hide">Retirer cette pi\xE8ce</button></div><a class="lab-source" href="${Ht[t[4]][1]}" target="_blank" rel="noopener">Source : ${hr(Ht[t[4]][0])} \u2197</a><p class="lab-small">Pi\xE8ce s\xE9lectionn\xE9e : surlign\xE9e dans la sc\xE8ne lorsqu\u2019elle est visible.</p>`,kr.querySelectorAll("[data-part]").forEach(i=>i.setAttribute("aria-pressed",i.dataset.part===e)),ze){for(let[i,a]of Object.entries(ze.items))for(let n of a)n.traverse(s=>{s.material?.emissive&&s.material.emissive.setHex(i===e?266776:0)});Gt()}}const Sv=br;br=function(e){Sv(e),Cv(e)};function Rn(){let e=mt("#labSearch").value.toLocaleLowerCase("fr");mt("#labParts").innerHTML=Object.entries(cr).filter(([t,r])=>r.join(" ").toLocaleLowerCase("fr").includes(e)).map(([t,r])=>`<button data-part="${t}" aria-pressed="${t===Hi}">${hr(r[0])}</button>`).join("")}br("front"),Rn(),mt("#labSearch").oninput=Rn;function Gt(){!dt||No||(No=!0,requestAnimationFrame(()=>{No=!1,dt.render(Mr,Rt)}))}function Zu(){if(!dt)return;let{width:e,height:t}=mt("#labStage").getBoundingClientRect();if(e<1||t<1)return;dt.setSize(e,t,!1);let r=Math.max(1,1.3/Rt.aspect);Rt.aspect=e/t;let i=Math.max(1,1.3/Rt.aspect);Rt.position.sub(Et.target).multiplyScalar(i/r).add(Et.target),Rt.updateProjectionMatrix(),Gt()}function wa(){kr.querySelectorAll("[data-layer]").forEach(e=>e.checked=ze.groups[e.dataset.layer].every(t=>t.visible)),mt('[data-action="undo"]').disabled=!An.length,Gt()}function Aa(e){let t=e.filter(r=>r.visible);t.length&&(An.push(t),t.forEach(r=>r.visible=!1),wa())}function Ju(e){let t=ze.items[e];if(!t)return;let r=["VOLANT","VOLANT 2026","DOS DU VOLANT"].includes(cr[e][1]);r&&Qt!=="wheel"?oi("wheel"):!r&&Qt==="wheel"&&oi("perspective"),e==="pistons"&&ze.items.engine.forEach(o=>o.visible=!1),["brake","caliper","pads"].includes(e)&&ze.items.tyre.forEach(o=>o.visible=!1),["seat","fuel","battery","engine","turbo","mguk","electronics","gearbox","radiator","pedals","dampers"].includes(e)&&ze.groups.body.forEach(o=>o.visible=!1),["seat","fuel","battery","pedals"].includes(e)&&ze.groups.structure.forEach(o=>o.visible=!1);let i=new Ir;if(t.filter(o=>o.parent===(Qt==="wheel"?ze.wheel:ze.car)).slice(0,1).forEach(o=>{o.visible=!0,i.expandByObject(o)}),i.isEmpty())return;let a=i.getCenter(new C),n=i.getSize(new C).length();Et.target.copy(a);let s=Qt==="wheel"?new C(.15,.1,1):new C(-1,.7,1);Rt.position.copy(a).addScaledVector(s.normalize(),Math.max(n*1.5,.45)),Et.update(),wa()}function oi(e){Qt=e,ze.car.visible=e!=="wheel",ze.wheel.visible=e==="wheel",Mr.children.filter(r=>r.type==="GridHelper").forEach(r=>r.visible=e!=="wheel");let t={perspective:[-5,3.2,4.8],top:[0,7,.001],side:[0,1.5,7],front:[-7,1,0],rear:[7,1,0],wheel:[0,.05,1.65]};Rt.position.set(...t[e]).multiplyScalar(Math.max(1,1.3/Rt.aspect)),Rt.up.set(0,1,0),Et.target.set(0,e==="wheel"?0:.35,0),Et.minDistance=e==="wheel"?.2:.18,Et.maxDistance=e==="wheel"?5:15,Et.update(),mt("#labMode").textContent=e==="wheel"?"VOLANT / COMMANDES & PALETTES":"MONOPLACE / ARCHITECTURE 2026",kr.querySelectorAll("[data-view]").forEach(r=>r.setAttribute("aria-pressed",r.dataset.view===e)),mt("#labScan").checked=!1,Oo(),Gt()}var Ra=new Sr(new C(0,-1,0),2);function Oo(){if(!dt)return;let e=mt("#labAxis").value,t=Number(mt("#labDepth").value)/100,r=Qt==="wheel"?{x:[-.6,.6],y:[-.35,.3],z:[-.25,.16]}:{x:[-2.7,2.6],y:[0,1.2],z:[-1.1,1.1]};Ra.normal.set(0,0,0),Ra.normal[e]=-1,Ra.constant=r[e][0]+t*(r[e][1]-r[e][0]),dt.clippingPlanes=mt("#labScan").checked?[Ra]:[],mt("#labDepthLabel").textContent=Math.round(t*100)+" %",Gt()}async function Mv(){if(!dt)try{dt=new iv({antialias:!0,alpha:!1}),dt.setPixelRatio(Math.min(devicePixelRatio,1.8)),dt.outputColorSpace=St,dt.toneMapping=Yo,dt.toneMappingExposure=.85,dt.setClearColor(1055528),Mr=new Ol,Rt=new zt(36,1,.01,100),Et=new nv(Rt,dt.domElement),Et.enableDamping=!1,Et.addEventListener("change",Gt),dt.domElement.setAttribute("aria-label","Maquette 3D interactive. Les composants sont aussi accessibles dans la liste sous la sc\xE8ne."),mt("#labStage").prepend(dt.domElement);let e=new Co(dt),t=new _v;Mr.environment=e.fromScene(t,.04).texture,Mr.environmentIntensity=.55,t.dispose(),e.dispose(),Mr.add(new rp(14478079,3228505,.9));let r=new sp(16777215,2);r.position.set(-3,5,4),Mr.add(r),ze=xv(),wv(ze),Mr.add(ze.car,ze.wheel);let i=new _p(12,48,3690854,2110022);i.position.y=-.025,Mr.add(i),ze.wheel.position.y=0,mt(".lab-loading").remove(),new ResizeObserver(Zu).observe(mt("#labStage")),oi("perspective"),Zu(),br(Hi);let a,n=new vp,s=new oe;dt.domElement.addEventListener("pointerdown",o=>{a=[o.clientX,o.clientY]}),dt.domElement.addEventListener("pointerup",o=>{if(!a||Math.hypot(o.clientX-a[0],o.clientY-a[1])>7)return;let l=dt.domElement.getBoundingClientRect();s.set((o.clientX-l.left)/l.width*2-1,-(o.clientY-l.top)/l.height*2+1),n.setFromCamera(s,Rt);let u=n.intersectObject(Qt==="wheel"?ze.wheel:ze.car,!0);for(let c of u){let d=c.object,p=!0;for(let f=d;f;f=f.parent)f.visible||(p=!1);if(!(!p||mt("#labScan").checked&&Ra.distanceToPoint(c.point)<0)){for(;d&&!d.userData.id;)d=d.parent;if(!(!d||si&&d.userData.layer==="body")){br(d.userData.id),mt("#labRemove").checked&&Aa([d]);break}}}}),dt.domElement.addEventListener("webglcontextlost",o=>{o.preventDefault(),mt("#labMode").textContent="Affichage 3D interrompu : rechargez la page. Les fiches restent disponibles."})}catch(e){dt=null,mt(".lab-loading").textContent="La 3D n\xE9cessite WebGL. Essayez un navigateur r\xE9cent avec l\u2019acc\xE9l\xE9ration graphique activ\xE9e. Les fiches restent accessibles ci-dessous.",console.error("F1 atelier",e)}}var Ku=new IntersectionObserver(e=>{e.some(t=>t.isIntersecting)&&(Mv(),Ku.disconnect())},{rootMargin:"100px"});Ku.observe(kr),kr.addEventListener("click",e=>{let t=e.target.closest("button");if(t){if(t.dataset.part){br(t.dataset.part);return}if(ze){if(t.dataset.view){oi(t.dataset.view),Qt==="wheel"&&br("screen");return}switch(t.dataset.action){case"focus":Ju(Hi);break;case"hide":Aa((ze.items[Hi]||[]).filter(r=>r.parent===(Qt==="wheel"?ze.wheel:ze.car)));break;case"zoom-in":case"zoom-out":Rt.position.sub(Et.target).multiplyScalar(t.dataset.action==="zoom-in"?.8:1.25).add(Et.target),Et.update(),Gt();break;case"reset":oi(Qt);break;case"assemble":Object.values(ze.items).flat().forEach(r=>r.visible=!0),An=[],wa();break;case"peel":Qt==="wheel"&&oi("perspective"),Aa([...ze.groups.body,...ze.groups.wheels,...ze.groups.structure]);break;case"undo":(An.pop()||[]).forEach(r=>r.visible=!0),wa();break;case"xray":si=!si,t.setAttribute("aria-pressed",si);for(let r of ze.groups.body)r.traverse(i=>{i.material&&(i.material.transparent=si,i.material.opacity=si?.15:1,i.material.depthWrite=!si)});Gt();break}}}}),kr.addEventListener("change",e=>{if(e.target.dataset.layer&&ze){let t=ze.groups[e.target.dataset.layer];e.target.checked?t.forEach(r=>r.visible=!0):Aa(t),wa()}["labScan","labAxis"].includes(e.target.id)&&Oo()}),mt("#labDepth").oninput=Oo;const zv={Group:sr,Mesh:ct,Material:Ea,Basic:oa,Box:Qr,Cylinder:pa,Torus:Fi,Sphere:ou,Buffer:Mt,Attribute:Ke,Vector:C,Texture:da,Plane:ya,Tube:vo,Curve:pn,Shape:mn,Extrude:go},Vr={soft:{name:"Tendre \xB7 Soft",mark:"SOFT",color:"#f35260",use:"Piste s\xE8che",text:"Le plus tendre des trois m\xE9langes retenus pour ce Grand Prix. Il privil\xE9gie g\xE9n\xE9ralement la performance imm\xE9diate, au prix d\u2019une d\xE9gradation potentiellement plus rapide."},medium:{name:"M\xE9dium \xB7 Medium",mark:"MEDIUM",color:"#f5ca40",use:"Piste s\xE8che",text:"Le m\xE9lange interm\xE9diaire de la s\xE9lection du week-end. Il offre souvent un compromis entre rythme et dur\xE9e du relais, selon le circuit et les conditions."},hard:{name:"Dur \xB7 Hard",mark:"HARD",color:"#f1f3f5",use:"Piste s\xE8che",text:"Le plus dur de la s\xE9lection du week-end. Il est g\xE9n\xE9ralement choisi pour sa r\xE9sistance, mais sa mise en temp\xE9rature peut \xEAtre moins facile."},inter:{name:"Interm\xE9diaire",mark:"INTER",color:"#56c883",use:"Piste humide / s\xE9chante",text:"Ses rainures \xE9vacuent l\u2019eau sur une piste humide. Quand la piste s\xE8che, sa temp\xE9rature et son usure peuvent augmenter : le passage aux slicks devient une d\xE9cision strat\xE9gique."},wet:{name:"Pluie \xB7 Full wet",mark:"WET",color:"#429bf6",use:"Piste tr\xE8s mouill\xE9e",text:"Ses rainures plus marqu\xE9es aident \xE0 \xE9vacuer davantage d\u2019eau. Il ne supprime ni l\u2019aquaplanage ni les probl\xE8mes de visibilit\xE9 : les conditions peuvent rester impropres \xE0 la course."}};let Ca="medium",$u=[],Qu=[],bv=[];function Tv(){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");let r=2441;for(let a=0;a<256;a++)for(let n=0;n<256;n++){r=r*1664525+1013904223>>>0;const s=64+(r>>>27);t.fillStyle=`rgb(${s},${s+2},${s+3})`,t.fillRect(n,a,1,1)}t.strokeStyle="rgba(160,169,173,.16)",t.lineWidth=.7;for(let a=0;a<256;a+=8)t.beginPath(),t.moveTo(0,a),t.lineTo(256,a),t.stroke();const i=new da(e);return i.wrapS=i.wrapT=gi,i.repeat.set(6,1),i.colorSpace=St,i}function Wt(e,t,r=10398385,i=.4,a=.65){const n=new ct(t,new Ea({color:r,roughness:i,metalness:a,side:Dt}));return e.add(n),n}function Bv(e,t,r,i,a,n,s,o){const l=Wt(e,new Qr(a,n,s),o);return l.position.set(t,r,i),l}function Gi(e,t,r,i,a,n,s){const o=Wt(e,new pa(a,a,n,48),s);return o.rotation.x=Math.PI/2,o.position.set(t,r,i),o}function ec(e,t,r,i,a,n,s,o){const l=new mn;l.absarc(0,0,a,-.65,.65,!1),l.absarc(0,0,n,.65,-.65,!0),l.closePath();const u=Wt(e,new go(l,{depth:s,bevelEnabled:!0,bevelThickness:.0015,bevelSize:.0015,bevelSegments:2,steps:1}),o,.55,.25);return u.position.set(t,r,i-s/2),u}function tc(e,t,r,i,a){const n=new C(...r).sub(new C(...t)),s=Wt(e,new pa(i,i,n.length(),12),a);return s.position.copy(new C(...t).addScaledVector(n,.5)),s.quaternion.setFromUnitVectors(new C(0,1,0),n.normalize()),s}function Cn(e,t=96,r=""){const i=[],a=[],n=[];for(let o=0;o<e.length;o++){let[l,u]=e[o];for(let c=0;c<=t;c++){let d=c/t*2*Math.PI,p=u;r&&Math.abs(l)<.12&&u>.33&&(Math.abs(Math.sin(d*(r==="wet"?38:27)+l*95))<.24&&(p-=.009),r==="wet"&&Math.abs(Math.sin(l*90))<.2&&(p-=.007)),i.push(p*Math.cos(d),p*Math.sin(d),l),a.push(c/t,o/(e.length-1))}}for(let o=0;o<e.length-1;o++)for(let l=0;l<t;l++){let u=o*(t+1)+l,c=u+t+1;n.push(u,c,u+1,u+1,c,c+1)}const s=new Mt;return s.setAttribute("position",new Ke(i,3)),s.setAttribute("uv",new Ke(a,2)),s.setIndex(n),s.computeVertexNormals(),s}function rc(e,t){const r=[[-e*.36,.224],[-e*.47,.25],[-e*.5,.295],[-e*.47,.33]];for(let i=0;i<=32;i++)r.push([-e*.4+i/32*e*.8,.352-.005*Math.pow((i-16)/16,4)]);return r.push([e*.47,.33],[e*.5,.295],[e*.47,.25],[e*.36,.224]),Cn(r,192,["wet","inter"].includes(t)?t:"")}function ic(e){let t=document.createElement("canvas");t.width=t.height=512;let r=t.getContext("2d");r.fillStyle=Vr[e].color,r.textAlign="center",r.font="bold 43px Arial";for(let a=0;a<Vr[e].mark.length;a++){let n=(a-(Vr[e].mark.length-1)/2)*.135;r.save(),r.translate(256,256),r.rotate(n),r.fillText(Vr[e].mark[a],0,-191),r.restore()}r.font="24px Arial",r.fillText("18\u2033 \u2022 2026",256,461);let i=new da(t);return i.colorSpace=St,i}function wv(e){for(const t of e.items.tyre){const r=t.children[0].position.x,i=t.children[0].position.z,a=r<0?.28:.34;t.clear();const n=Wt(t,rc(a,Ca),1382428,.87,.02);n.position.set(r,.36,i),$u.push({mesh:n,width:a}),Wt(t,Cn([[-a*.37,.225],[-a*.37,.206],[a*.37,.206],[a*.37,.225]]),5265766,.28).position.set(r,.36,i);for(let o of[-1,1]){const l=Wt(t,new ya(.71,.71),16777215);l.material=new oa({map:ic(Ca),transparent:!0,depthWrite:!1,side:Dt}),l.position.set(r,.36,i+o*a*.505),o<0&&(l.rotation.y=Math.PI),Qu.push(l),Wt(t,new Fi(.222,.005,8,80),9147294).position.set(r,.36,i+o*a*.38),Gi(t,r,.36,i+o*a*.39,.038,.02,12034942);for(let c=0;c<10;c++){let d=c*Math.PI/5;tc(t,[r+Math.cos(d)*.04,.36+Math.sin(d)*.04,i+o*a*.38],[r+Math.cos(d+.12)*.215,.36+Math.sin(d+.12)*.215,i+o*a*.36],.007,7569036)}}}for(const t of e.items.brake){const r=t.children[0].position.x,i=t.children[0].position.z;t.clear();const a=r<0?.167:.135,n=.03;let s=Wt(t,Cn([[-n/2,.065],[-n/2,a],[n/2,a],[n/2,.065],[-n/2,.065]],128),16777215,.77,.05);s.material.map=Tv(),s.material.bumpMap=s.material.map,s.material.bumpScale=35e-5,s.position.set(r,.36,i),Wt(t,Cn([[-.012,.024],[-.012,.068],[.012,.068],[.012,.024]],64),9343894).position.set(r,.36,i);for(let f of[-1,1])for(let v=0;v<12;v++){const g=v*Math.PI/6;Gi(t,r+Math.cos(g)*.062,.36+Math.sin(g)*.062,i+f*.017,.004,.008,11576460)}const l=[],u=[];for(let f=0;f<3;f++)for(let v=0;v<96;v++){let g=(v+f%2*.5)/96*Math.PI*2,m=Math.cos(g),h=Math.sin(g),P=(f-1)*.009,y=r+m*(a+2e-4),b=.36+h*(a+2e-4),U=l.length/3;l.push(y,b,i+P);for(let x=0;x<=8;x++){let T=x/8*Math.PI*2;l.push(y-h*Math.cos(T)*.0018,b+m*Math.cos(T)*.0018,i+P+Math.sin(T)*.0018),x<8&&u.push(U,U+x+1,U+x+2)}}let c=new Mt;c.setAttribute("position",new Ke(l,3)),c.setIndex(u),c.computeVertexNormals(),Wt(t,c,526861,.95,0);const d=new sr;d.userData={id:"caliper",layer:"brakes"},e.car.add(d),(e.items.caliper??=[]).push(d),e.groups.brakes.push(d);const p=new sr;p.userData={id:"pads",layer:"brakes"},e.car.add(p),(e.items.pads??=[]).push(p),e.groups.brakes.push(p);for(let f of[-1,1]){let v=[];for(let h=0;h<=24;h++){let P=-.62+h/24*1.24;v.push([r+Math.cos(P)*(a-.014),.36+Math.sin(P)*(a-.014),i+f*.038])}const g=Wt(d,new vo(new pn(v.map(h=>new C(...h))),32,.021,12,!1),10854808,.35);for(let h=0;h<3;h++){let P=-.4+h*.4,y=r+Math.cos(P)*(a-.02),b=.36+Math.sin(P)*(a-.02);Gi(d,y,b,i+f*.047,.018,.014,7831170),Gi(d,y,b,i+f*.056,.009,.004,13683648)}const m=ec(p,r,.36,i+f*.022,a-.003,a-.055,.012,3356219);ec(d,r,.36,i+f*.045,a+.008,a-.04,.017,9344665)}for(let f of[-.52,0,.52])tc(d,[r+Math.cos(f)*(a-.006),.36+Math.sin(f)*(a-.006),i-.04],[r+Math.cos(f)*(a-.006),.36+Math.sin(f)*(a-.006),i+.04],.011,9212308);Gi(d,r+a,.42,i+.06,.005,.02,14540253),bv.push({rotor:t,cal:d,pads:p})}for(const t of Object.values(e.items))for(const r of t)r.traverse(i=>{i.material?.map?.wrapS===gi&&i.material.map.repeat.set(20,20)});for(const t of["engine","gearbox","electronics"])for(const r of e.items[t]||[])for(let i=0;i<8;i++){const a=t==="engine"?.52+i*.073:t==="gearbox"?1.23+i*.07:.23+i*.03;Gi(r,a,t==="engine"?.595:t==="gearbox"?.415:.245,t==="engine"?.19:0,.005,.008,10923188)}Av(),Rn(),Gt()}function ac(e){Ca=e;for(const{mesh:r,width:i}of $u)r.geometry.dispose(),r.geometry=rc(i,e);for(const r of Qu)r.material.map.dispose(),r.material.map=ic(e);document.querySelectorAll("[data-compound]").forEach(r=>r.setAttribute("aria-pressed",r.dataset.compound===e));const t=document.getElementById("v24TyreText");t&&(t.innerHTML=`<strong>${Vr[e].name} \u2014 ${Vr[e].use}</strong><p>${Vr[e].text}</p>`),Gt()}function Av(){const e=document.createElement("div");e.className="v24-workshops",e.innerHTML=`<div><span class="lab-eyebrow">ATELIERS D\xC9TAILL\xC9S</span><div class="v24-shortcuts"><button data-closeup="tyre">Pneus</button><button data-closeup="brake">Frein complet</button><button data-engine-open>Cycle du moteur \u2193</button></div></div><div><span class="lab-eyebrow">CHAUSSER LA MONOPLACE</span><div class="v24-compounds">${Object.entries(Vr).map(([t,r])=>`<button data-compound="${t}" style="--compound:${r.color}" aria-pressed="${t===Ca}">${r.mark}</button>`).join("")}</div><div id="v24TyreText" class="v24-tyre-text"></div><p class="lab-small">Rainures illustratives. Soft / Medium / Hard sont relatifs aux trois m\xE9langes choisis pour le Grand Prix ; ils ne d\xE9signent pas toujours le m\xEAme C1\u2013C5.</p></div>`,document.querySelector(".lab-toolbar").after(e),e.addEventListener("click",t=>{let r=t.target.closest("button");if(r){if(r.dataset.compound&&ac(r.dataset.compound),r.dataset.closeup){oi("perspective"),Object.values(ze.items).flat().forEach(a=>a.visible=!0);const i=r.dataset.closeup==="brake"?[ze.items.brake[0],ze.items.caliper[0],ze.items.pads[0]]:[ze.items.tyre[0],ze.items.brake[0],ze.items.caliper[0],ze.items.pads[0]];if(Aa(Object.values(ze.items).flat().filter(a=>a.parent===ze.car&&!i.includes(a))),br(r.dataset.closeup),Ju(r.dataset.closeup),r.dataset.closeup==="brake"){ze.items.caliper[0].visible=!0,ze.items.pads[0].visible=!0;const n=ze.items.brake[0].children[0].position;Et.target.copy(n),Rt.position.copy(n).add(new C(.35,.19,-.67)),Et.update(),Gt()}}if(r.dataset.closeup==="tyre"){const i=ze.items.tyre[0].children[0].position;Et.target.copy(i),Rt.position.copy(i).add(new C(-.5,.33,-1.35)),Et.update(),Gt()}r.hasAttribute("data-engine-open")&&document.getElementById("v24Engine").scrollIntoView({behavior:"smooth"})}}),ac(Ca)}var nc=!1;Ht.tyres=["Pirelli \xB7 gamme F1 2026, consult\xE9e le 20 septembre 2026","https://www.pirelli.com/tyres/en-ww/motorsport/car/formula-1"],Ht.tyredesign=["Pirelli \xB7 pr\xE9sentation des pneus 2026, 9 d\xE9cembre 2025","https://press.pirelli.com/pirelli-reveals-2026-f1-tyres-a-fresh-logo-design-and-new-compounds/"],Ht.brakes=["Brembo \xB7 technologie de freinage 2026, 2 mars 2026","https://www.brembogroup.com/en/media/news/formula-1-2026-brembo-accelerates-innovation-for-a-new-era"],Ht.vents=["Brembo \xB7 ventilation des disques, consult\xE9 le 20 septembre 2026","https://www.brembo.com/en/motorsport/formula1/ventilation-holes"],Ht.cycle=["U.S. Department of Energy \xB7 fonctionnement du moteur, 22 novembre 2013","https://www.energy.gov/cmei/vehicles/articles/internal-combustion-engine-basics"],Object.assign(cr,{caliper:["\xC9trier et pistons hydrauliques","FREINAGE","La pression hydraulique pousse les pistons de l\u2019\xE9trier. Ils appliquent les plaquettes de part et d\u2019autre du disque. L\u2019\xE9trier reste solidaire du porte-moyeu pendant que le disque tourne.","Le mod\xE8le montre un exemple \xE0 six pistons ; ce nombre n\u2019est pas universel en 2026.","brakes"],pads:["Plaquettes de frein","FREINAGE","Les garnitures frottent contre les pistes du disque et transforment une partie de l\u2019\xE9nergie cin\xE9tique en chaleur. Elles constituent des \xE9l\xE9ments distincts de l\u2019\xE9trier et du rotor.","Leur forme, la r\xE9partition de pression et le refroidissement contribuent \xE0 la constance du freinage.","brakes"]}),cr.tyre[2]="Les pneumatiques assurent la liaison avec la piste : acc\xE9l\xE9ration, freinage et forces lat\xE9rales passent par leurs zones de contact. Le s\xE9lecteur montre cinq familles de pneus, avec marquages et sculptures illustratifs.",cr.tyre[4]="tyres",cr.brake[0]="Disque carbone et bol de fixation",cr.brake[2]="La piste annulaire en carbone-carbone tourne avec la roue. Le bol central assure sa liaison m\xE9canique au moyeu. Des canaux radiaux \xE9vacuent de la chaleur \xE0 travers l\u2019\xE9paisseur du disque.",cr.brake[4]="vents";const Rv={tyre:[["Choisir la gomme","Le tendre rouge, le m\xE9dium jaune et le dur blanc sont les trois choix slicks du week-end. Interm\xE9diaires verts et pluie bleus ont des sculptures pour \xE9vacuer l\u2019eau. Les noms ne constituent pas un classement absolu des performances : temp\xE9rature, charge, surface et conduite comptent aussi.","tyres"],["C1 \xE0 C5 \u2260 Soft \xE0 Hard","La gamme s\xE8che 2026 comporte cinq m\xE9langes C1 \xE0 C5. Trois sont s\xE9lectionn\xE9s pour chaque Grand Prix. Un m\xEAme m\xE9lange peut donc changer de nom relatif d\u2019un week-end \xE0 l\u2019autre.","tyres"],["Lire ce que montre la maquette","Le pneu est d\xE9sormais distinct de la jante, avec une bande de roulement, des \xE9paules arrondies et un flanc. Le marquage 2026 conserve les couleurs de reconnaissance. Les sculptures montr\xE9es ici ne reproduisent pas un moule Pirelli.","tyredesign"]],brake:[["Des canaux dans l\u2019\xE9paisseur","Les orifices visibles sur le bord ext\xE9rieur repr\xE9sentent les sorties de ventilation radiale. Ils ne sont pas des perforations d\xE9coratives traversant les deux faces de friction. La g\xE9om\xE9trie des conduits r\xE9els d\xE9pend du fournisseur.","vents"],["\xC9nergie et temp\xE9rature","Le frottement chauffe disque et plaquettes. L\u2019air de refroidissement doit \xE9vacuer cette \xE9nergie tout en conservant une plage de fonctionnement adapt\xE9e. L\u2019animation et la maquette ne calculent pas de temp\xE9rature r\xE9elle.","brakes"]],caliper:[["Rigidit\xE9 et pression","Un corps rigide limite sa d\xE9formation sous pression et aide \xE0 conserver une r\xE9ponse r\xE9guli\xE8re \xE0 la p\xE9dale. Masse, rigidit\xE9 et refroidissement constituent un compromis de conception.","brakes"],["Ce qui change en 2026","La r\xE9glementation ouvre notamment la possibilit\xE9 de huit pistons et quatre plaquettes. Six pistons dans cette maquette repr\xE9sentent une architecture explicative, pas l\u2019\xE9quipement impos\xE9 \xE0 toutes les \xE9curies.","brakes"]],pads:[["Deux surfaces en contact","La plaquette int\xE9rieure et la plaquette ext\xE9rieure serrent les deux faces du rotor. Retirer les plaquettes dans la sc\xE8ne permet de distinguer ces trois \xE9l\xE9ments.","brakes"]],engine:[["Le moteur n\u2019entra\xEEne pas directement les pneus","La combustion agit sur les pistons ; bielles et vilebrequin transmettent le mouvement \xE0 la transmission. Les roues arri\xE8re re\xE7oivent le couple par la bo\xEEte puis le diff\xE9rentiel.","cycle"],["Thermique et \xE9lectrique","Le V6 turbo 1,6 litre est associ\xE9 au syst\xE8me hybride. Le MGU-K peut contribuer \xE0 la propulsion et r\xE9cup\xE9rer de l\u2019\xE9nergie ; le MGU-H n\u2019est plus pr\xE9sent en 2026. L\u2019atelier ci-dessous isole un cylindre pour expliquer le cycle.","honda"]],pistons:[["Mouvement alternatif \u2192 rotation","Le piston est guid\xE9 par le cylindre ; sa bielle oscille et entra\xEEne un maneton d\xE9cal\xE9 par rapport \xE0 l\u2019axe du vilebrequin. Ce d\xE9calage transforme la pouss\xE9e en couple.","cycle"],["Quatre courses, deux tours","Un cycle \xE0 quatre temps demande 720\xB0 de vilebrequin. Seule la d\xE9tente est le temps moteur ; les autres courses sont entra\xEEn\xE9es par l\u2019ensemble tournant et les autres cylindres.","cycle"]],fuel:[["Du r\xE9servoir \xE0 l\u2019injecteur","Le carburant est achemin\xE9 par le circuit d\u2019alimentation, mis sous pression puis dos\xE9 par les injecteurs. Dans la F1, l\u2019injection se fait dans la chambre. Le dessin du module illustre le trajet sans reproduire les conduites d\u2019une \xE9curie.","rules"]],turbo:[["Deux c\xF4t\xE9s, un m\xEAme arbre","La turbine est entra\xEEn\xE9e par les gaz sortant du moteur. Le compresseur augmente la pression de l\u2019air admis ; ce sont deux flux s\xE9par\xE9s, reli\xE9s m\xE9caniquement par l\u2019arbre.","honda"],["La temp\xE9rature compte aussi","L\u2019air comprim\xE9 chauffe. Le refroidissement de l\u2019air de suralimentation et la r\xE9ponse du turbo font partie de la conception globale, avec des implantations propres \xE0 chaque motoriste.","rules"]],mguk:[["Deux sens de conversion","En moteur : batterie \u2192 \xE9lectronique \u2192 machine \xE9lectrique \u2192 transmission. En g\xE9n\xE9rateur : une partie de l\u2019\xE9nergie m\xE9canique suit le chemin inverse. La r\xE9cup\xE9ration ne remplace pas tout le freinage.","honda"]],battery:[["Puissance et \xE9nergie","La puissance d\xE9crit le rythme auquel l\u2019\xE9nergie est \xE9chang\xE9e. L\u2019\xE9nergie d\xE9crit la r\xE9serve disponible. Une forte puissance autoris\xE9e ne signifie donc pas que l\u2019assistance peut \xEAtre maintenue ind\xE9finiment.","honda"]],electronics:[["Faire circuler et piloter l\u2019\xE9nergie","L\u2019\xE9lectronique de puissance coordonne les \xE9changes entre batterie et MGU-K. Les temp\xE9ratures, les limites \xE9lectriques et la strat\xE9gie de d\xE9ploiement conditionnent le fonctionnement.","honda"]],gearbox:[["Rapport et diff\xE9rentiel","La bo\xEEte change le rapport entre r\xE9gime moteur et vitesse des roues. Le diff\xE9rentiel permet aux deux roues arri\xE8re de parcourir des distances diff\xE9rentes en virage, tout en transmettant le couple.","rules"]],suspension:[["Guider et contr\xF4ler","Les triangles guident le porte-moyeu. Les poussoirs ou tirants transmettent le mouvement aux ressorts et amortisseurs. La g\xE9om\xE9trie illustr\xE9e est g\xE9n\xE9rique : les montages r\xE9els diff\xE8rent.","rules"]],dampers:[["Ressort \u2260 amortisseur","Le ressort emmagasine et restitue de l\u2019\xE9nergie avec sa d\xE9formation. L\u2019amortisseur dissipe de l\u2019\xE9nergie et contr\xF4le la vitesse du mouvement. Ils doivent travailler ensemble.","rules"]],front:[["\xC9quilibre a\xE9rodynamique","Le train avant doit disposer d\u2019une charge compatible avec celle de l\u2019arri\xE8re. Modifier l\u2019aileron peut changer la r\xE9ponse en entr\xE9e de virage et les \xE9coulements autour des roues.","f1"]],rear:[["Appui et r\xE9sistance \xE0 l\u2019air","La configuration virage favorise l\u2019appui ; la configuration ligne droite r\xE9duit la tra\xEEn\xE9e dans les conditions autoris\xE9es. Les deux ailerons participent au syst\xE8me actif 2026.","f1"]],floor:[["Le dessous est une surface de travail","La forme du soubassement, sa distance \xE0 la piste et l\u2019assiette influencent les pressions. Le diffuseur organise l\u2019\xE9coulement en sortie. La maquette ne simule pas ces pressions.","rules"]],radiator:[["\xC9changer la chaleur","Le liquide circule dans des passages et transmet sa chaleur aux surfaces balay\xE9es par l\u2019air. Les ailettes augmentent la surface d\u2019\xE9change. Diff\xE9rents circuits peuvent servir au thermique et \xE0 l\u2019\xE9lectrique.","rules"]],sidepod:[["Emballer et refroidir","Les pontons doivent laisser passer l\u2019air vers les \xE9changeurs tout en guidant l\u2019\xE9coulement ext\xE9rieur. Une ouverture n\u2019est donc pas seulement une question de style.","rules"]],cockpit:[["Une cellule, plusieurs protections","La cellule de survie, le si\xE8ge, les harnais, les protections et le halo ont des fonctions compl\xE9mentaires. Les ouvertures et volumes doivent \xE9galement permettre l\u2019\xE9vacuation du pilote.","rules"]],seat:[["Position inclin\xE9e et maintien","Le baquet et ses appuis sont adapt\xE9s au pilote. Le harnais limite ses d\xE9placements ; la position des pieds et des mains doit permettre l\u2019action pr\xE9cise sur les commandes.","rules"]],balance:[["Ajuster, pas simplement freiner plus","Le pilote r\xE9partit la demande entre les deux essieux. Le r\xE9glage influence le risque de blocage et la stabilit\xE9 au freinage. Il d\xE9pend notamment de l\u2019adh\xE9rence et du transfert de charge.","wheel"]],migration:[["Une r\xE9partition qui \xE9volue","La migration correspond \xE0 une \xE9volution de la r\xE9partition au cours du freinage. Elle compl\xE8te la consigne de base ; ce n\u2019est pas un troisi\xE8me frein ind\xE9pendant.","wheel"]],differential:[["Entr\xE9e, milieu, sortie","Des r\xE9glages distincts peuvent adapter le comportement du diff\xE9rentiel aux phases du virage. La commande de cette maquette les repr\xE9sente de fa\xE7on regroup\xE9e.","wheel"]],clutch:[["Le d\xE9part","L\u2019embrayage permet une mise en charge progressive de la transmission. Il est distinct de la s\xE9lection des rapports et de la commande d\u2019acc\xE9l\xE9rateur.","wheel"]]};function Cv(e){if(!nc)return;const t=document.getElementById("labDetail");let r=t.querySelector(".v24-deeper");r&&r.remove();const i=Rv[e];if(!i)return;const a=document.createElement("div");a.className="v24-deeper",a.innerHTML=`<h4>Aller plus loin</h4>${i.map(([n,s,o])=>`<details><summary>${hr(n)}</summary><p>${hr(s)}</p><a href="${Ht[o][1]}" target="_blank" rel="noopener">${hr(Ht[o][0])} \u2197</a></details>`).join("")}${["engine","pistons","fuel","turbo"].includes(e)?"<button data-engine-open>Comprendre le cycle du moteur \u2193</button>":""}`,t.append(a)}document.getElementById("f1Loupe").addEventListener("click",e=>{e.target.closest("[data-engine-open]")&&document.getElementById("v24Engine")?.scrollIntoView({behavior:"smooth"})}),nc=!0,br(Hi),Rn();const Fo=[{name:"Admission",range:"0\u2013180\xB0",color:"#4ec6e4",text:"Le piston descend. La soupape d\u2019admission ouverte laisse entrer l\u2019air. Le carburant est dos\xE9 s\xE9par\xE9ment par l\u2019injecteur dans la chambre.",valves:"Admission ouverte \xB7 \xE9chappement ferm\xE9"},{name:"Compression",range:"180\u2013360\xB0",color:"#bc97fb",text:"Le piston remonte, soupapes ferm\xE9es. L\u2019air et le carburant sont comprim\xE9s. L\u2019injection montr\xE9e en fin de compression est un choix illustratif ; le calage r\xE9el d\xE9pend du moteur.",valves:"Les deux soupapes sont ferm\xE9es"},{name:"Combustion & d\xE9tente",range:"360\u2013540\xB0",color:"#ff9256",text:"Pr\xE8s du point mort haut, l\u2019\xE9tincelle d\xE9clenche la combustion. La pression des gaz pousse le piston vers le bas : c\u2019est le temps moteur.",valves:"Les deux soupapes sont ferm\xE9es"},{name:"\xC9chappement",range:"540\u2013720\xB0",color:"#b6c2cc",text:"Le piston remonte. La soupape d\u2019\xE9chappement ouverte permet d\u2019\xE9vacuer les gaz br\xFBl\xE9s. Le cycle suivant recommence apr\xE8s deux tours du vilebrequin.",valves:"Admission ferm\xE9e \xB7 \xE9chappement ouvert"}],Xt=document.createElement("section");Xt.id="v24Engine",Xt.className="v24-engine",Xt.innerHTML=`<header><div><span class="lab-eyebrow">ATELIER MOTEUR / COUPE ANIM\xC9E</span><h3>Du carburant au mouvement.</h3><p>Un cylindre au ralenti p\xE9dagogique, pour suivre les quatre temps et la transmission de l\u2019effort.</p></div><span class="lab-chip">4 TEMPS \xB7 2 TOURS \xB7 720\xB0</span></header><div class="v24-engine-layout"><div class="v24-engine-screen"><svg viewBox="0 0 600 610" role="img" aria-label="Coupe anim\xE9e d\u2019un cylindre, avec admission, injection directe, piston, bielle et vilebrequin"><defs><linearGradient id="v24Metal"><stop stop-color="#607487"/><stop offset=".4" stop-color="#dae1e4"/><stop offset=".6" stop-color="#8796a3"/><stop offset="1" stop-color="#46586c"/></linearGradient><linearGradient id="v24Gas" x2="0" y2="1"><stop stop-color="#4ec6e4" stop-opacity=".6"/><stop offset="1" stop-color="#4ec6e4" stop-opacity=".12"/></linearGradient><pattern id="v24Hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><rect width="8" height="8" fill="#293c4e"/><path d="M0 0V8" stroke="#567286" stroke-width="2"/></pattern><marker id="v24Arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0L6 3L0 6" fill="none" stroke="#a8bdcb"/></marker></defs>
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
</svg><div class="v24-engine-controls"><button id="v24Play">\u25B6 Animer</button><button id="v24Step">Temps suivant</button><label>Vitesse<select id="v24Speed"><option value=".5">\xD70,5</option><option value="1" selected>\xD71</option><option value="2">\xD72</option></select></label><label class="v24-scrub">Cycle<input id="v24Angle" type="range" min="0" max="720" step="1" value="0" aria-label="Angle du vilebrequin de 0 \xE0 720 degr\xE9s"></label></div></div><aside class="v24-engine-info"><div class="v24-phase-buttons">${Fo.map((e,t)=>`<button data-phase="${t}" style="--phase:${e.color}" aria-pressed="${t===0}">${t+1}. ${e.name}</button>`).join("")}</div><div id="v24PhaseText" aria-live="polite"></div><div class="v24-component-info" id="v24ComponentInfo"><h4>Touchez un \xE9l\xE9ment</h4><p>Le piston, les soupapes, l\u2019injecteur, la bougie et le vilebrequin ouvrent leur explication.</p></div></aside></div><div class="v24-energy-path"><span>Carburant + air</span><b>\u2192</b><span>Combustion</span><b>\u2192</b><span>Piston & bielle</span><b>\u2192</b><span>Vilebrequin</span><b>\u2192</b><span>Bo\xEEte & diff\xE9rentiel</span><b>\u2192</b><span>Roues arri\xE8re</span></div><p class="lab-small">Coupe de principe, non \xE0 l\u2019\xE9chelle. Un seul cylindre est montr\xE9 ; une F1 poss\xE8de un V6. Distribution et injection sont simplifi\xE9es, sans reproduire le calage d\u2019un motoriste. Il s\u2019agit d\u2019une combustion contr\xF4l\xE9e : une d\xE9tonation anormale n\u2019est pas le fonctionnement recherch\xE9. L\u2019animation ralentit fortement le cycle et ne simule ni pression, ni r\xE9gime r\xE9el, ni puissance.</p><p class="lab-small">Principes : <a href="${Ht.cycle[1]}" target="_blank" rel="noopener">U.S. Department of Energy, 22/11/2013</a> \xB7 Sp\xE9cifications F1 : <a href="${Ht.rules[1]}" target="_blank" rel="noopener">FIA, section C, 05/08/2026</a>.</p>`,document.querySelector(".lab-sources").before(Xt);let Tr=0,Wi=!1,Ln=0,Pn=0,zo=!1,sc=-1;const pt=e=>Xt.querySelector(e);function La(){const e=Tr%720,t=e*Math.PI/180,r=Math.floor(e/180),i=500-58*Math.cos(t)-Math.sqrt(28900-Math.pow(58*Math.sin(t),2)),a=i-35;pt("#v24Piston").setAttribute("transform",`translate(0 ${a})`),pt("#v24Crank").setAttribute("transform",`rotate(${e} 300 500)`);let n=pt("#v24Rod");n.setAttribute("x1",300+58*Math.sin(t)),n.setAttribute("y1",500-58*Math.cos(t)),n.setAttribute("x2",300),n.setAttribute("y2",i),pt("#v24Chamber").setAttribute("height",a-185),pt("#v24Chamber").setAttribute("fill",Fo[r].color),pt("#v24Chamber").setAttribute("opacity",r===2?.6:.27);let s=12*Math.sin(e%180/180*Math.PI);pt("#v24IntakeValve").setAttribute("transform",`translate(0 ${r===0?s:0})`),pt("#v24ExhaustValve").setAttribute("transform",`translate(0 ${r===3?s:0})`),pt("#v24Spark").setAttribute("opacity",e>350&&e<376?1:0),pt("#v24Spray").setAttribute("opacity",e>265&&e<335?1:0),pt("#v24AngleSvg").textContent=Math.round(Tr)+"\xB0",pt("#v24Angle").value=Math.round(Tr),pt("#v24FuelDot").setAttribute("cx",185+e%180/180*130);for(const o of Xt.querySelectorAll("[data-air]")){let l=(e/180+Number(o.dataset.air)/5)%1,u=32+l*212;o.setAttribute("cx",u),o.setAttribute("cy",u<151?161:161+(u-151)/95*28),o.style.opacity=r===0?"1":"0"}for(const o of Xt.querySelectorAll("[data-exhaust]")){let l=(e/180+Number(o.dataset.exhaust)/5)%1,u=352+l*212;o.setAttribute("cx",u),o.setAttribute("cy",u>446?161:189-(u-352)/94*28),o.style.opacity=r===3?"1":"0"}if(r!==sc){sc=r;let o=Fo[r];pt("#v24PhaseText").innerHTML=`<span class="lab-eyebrow">TEMPS ${r+1} / ${o.range}</span><h4>${o.name}</h4><p>${o.text}</p><strong class="v24-valves">${o.valves}</strong>`,Xt.querySelectorAll("[data-phase]").forEach(l=>l.setAttribute("aria-pressed",Number(l.dataset.phase)===r))}}function oc(e){Ln=0,!(!Wi||!zo||document.hidden)&&(Pn&&(Tr=(Tr+Math.min(e-Pn,80)*.045*Number(pt("#v24Speed").value))%720),Pn=e,La(),Ln=requestAnimationFrame(oc))}function In(){cancelAnimationFrame(Ln),Pn=0,Wi&&zo&&!document.hidden&&(Ln=requestAnimationFrame(oc))}function Bo(){Wi=!1,pt("#v24Play").textContent="\u25B6 Animer",In()}pt("#v24Play").onclick=()=>{Wi=!Wi,pt("#v24Play").textContent=Wi?"\u2161 Pause":"\u25B6 Animer",In()},pt("#v24Step").onclick=()=>{Bo(),Tr=(Math.floor(Tr/180)+1)%4*180+90,La()},pt("#v24Angle").oninput=e=>{Bo(),Tr=Number(e.target.value),La()},Xt.querySelectorAll("[data-phase]").forEach(e=>e.onclick=()=>{Bo(),Tr=Number(e.dataset.phase)*180+90,La()});const Lv={fuel:["Alimentation","Le carburant quitte le r\xE9servoir, traverse le circuit de pompage et alimente la rampe. L\u2019injecteur dose ensuite sa quantit\xE9 dans la chambre. La pompe ne cr\xE9e pas la propulsion."],injector:["Injecteur","Il pulv\xE9rise et dose le carburant. Il ne produit pas l\u2019\xE9tincelle : c\u2019est la fonction de la bougie. Le moment d\u2019injection montr\xE9 est illustratif."],spark:["Bougie","L\u2019\xE9tincelle amorce la combustion autour du point mort haut. La hausse de pression des gaz produit la pouss\xE9e sur le piston."],valves:["Soupapes","L\u2019admission laisse entrer l\u2019air ; l\u2019\xE9chappement \xE9vacue les gaz br\xFBl\xE9s. Elles ferment la chambre pendant compression et d\xE9tente. Leur mouvement est ici id\xE9alis\xE9."],piston:["Piston et segments","Le piston re\xE7oit la force des gaz. Les segments contribuent \xE0 l\u2019\xE9tanch\xE9it\xE9 entre piston et cylindre. L\u2019axe relie le piston \xE0 sa bielle."],crank:["Vilebrequin","Le maneton est d\xE9cal\xE9 de l\u2019axe de rotation. La bielle relie ce maneton au piston : le mouvement alternatif devient rotation. La transmission conduit ensuite le couple aux roues."]};function lc(e){let t=Lv[e];pt("#v24ComponentInfo").innerHTML=`<h4>${t[0]}</h4><p>${t[1]}</p>`,Xt.querySelectorAll("[data-engine-part]").forEach(r=>r.classList.toggle("selected",r.dataset.enginePart===e))}Xt.querySelectorAll("[data-engine-part]").forEach(e=>{e.onclick=()=>lc(e.dataset.enginePart),e.onkeydown=t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),lc(e.dataset.enginePart))}}),new IntersectionObserver(e=>{zo=e[0].isIntersecting,In()}).observe(Xt),document.addEventListener("visibilitychange",In),La()})();
