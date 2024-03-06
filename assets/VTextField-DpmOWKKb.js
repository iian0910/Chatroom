import{c as Xa,g as Ja}from"./_commonjsHelpers-Cpj98o6Y.js";import{a5 as ls,p as W,a6 as ke,e as b,a7 as dt,a8 as Nr,a9 as wi,aa as Za,ab as el,ac as tl,j as g,L as xt,a2 as ln,m as ye,b as jt,d as tt,g as le,f as gt,X as xr,t as Se,H as pe,B as Ps,ad as xn,ae as Rr,af as kr,G as Rn,D as Me,ag as nl,u as qt,a3 as Ar,W as Dr,ah as Rt,ai as sl,k as rt,aj as il,M as X,I as Le,r as Ie,ak as rl,al as ol,am as al,C as cs,S as Pr,R as ll,an as cl,P as kn,ao as An,ap as ul,aq as Si,F as cn,ar as dl,as as Ii,J as Dn,K as Or,at as hl,h as Os,a as fl,N as Mr,Y as Ye,i as _l,au as ml,av as pl,E as gl,aw as Ti,ax as vl,ay as yl,az as Cl}from"./index-CmT_3dTZ.js";const bl=["top","bottom"],El=["start","end","left","right"];function wl(t,e){let[n,s]=t.split(" ");return s||(s=ls(bl,n)?"start":ls(El,n)?"top":"center"),{side:Ni(n,e),align:Ni(s,e)}}function Ni(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}class qn{constructor(e){let{x:n,y:s,width:i,height:r}=e;this.x=n,this.y=s,this.width=i,this.height=r}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Sl(t){const e=t.getBoundingClientRect(),n=getComputedStyle(t),s=n.transform;if(s){let i,r,o,a,l;if(s.startsWith("matrix3d("))i=s.slice(9,-1).split(/, /),r=+i[0],o=+i[5],a=+i[12],l=+i[13];else if(s.startsWith("matrix("))i=s.slice(7,-1).split(/, /),r=+i[0],o=+i[3],a=+i[4],l=+i[5];else return new qn(e);const c=n.transformOrigin,h=e.x-a-(1-r)*parseFloat(c),u=e.y-l-(1-o)*parseFloat(c.slice(c.indexOf(" ")+1)),d=r?e.width/r:t.offsetWidth+1,f=o?e.height/o:t.offsetHeight+1;return new qn({x:h,y:u,width:d,height:f})}else return new qn(e)}function Il(t,e,n){if(typeof t.animate>"u")return{finished:Promise.resolve()};let s;try{s=t.animate(e,n)}catch{return{finished:Promise.resolve()}}return typeof s.finished>"u"&&(s.finished=new Promise(i=>{s.onfinish=()=>{i(s)}})),s}const Tl="cubic-bezier(0.4, 0, 0.2, 1)";var xi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(t,e){if(!t)throw vt(e)},vt=function(t){return new Error("Firebase Database ("+Lr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nl=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ms={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[h],n[u],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Nl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||u==null)throw new xl;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),u!==64){const _=c<<6&192|u;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $r=function(t){const e=Fr(t);return Ms.encodeByteArray(e,!0)},un=function(t){return $r(t).replace(/\./g,"")},us=function(t){try{return Ms.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t){return Br(void 0,t)}function Br(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!kl(n)||(t[n]=Br(t[n],e[n]));return t}function kl(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=()=>Al().__FIREBASE_DEFAULTS__,Pl=()=>{if(typeof process>"u"||typeof xi>"u")return;const t=xi.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ol=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&us(t[1]);return e&&JSON.parse(e)},Vr=()=>{try{return Dl()||Pl()||Ol()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ml=t=>{var e,n;return(n=(e=Vr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ll=t=>{const e=Ml(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Wr=()=>{var t;return(t=Vr())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[un(JSON.stringify(n)),un(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ur(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($l())}function Bl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hr(){return Lr.NODE_ADMIN===!0}function Vl(){try{return typeof indexedDB=="object"}catch{return!1}}function Wl(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="FirebaseError";class Yt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ul,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zr.prototype.create)}}class zr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Hl(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Yt(i,a,s)}}function Hl(t,e){return t.replace(zl,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const zl=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){return JSON.parse(t)}function re(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Ot(us(r[0])||""),n=Ot(us(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Gl=function(t){const e=Gr(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},jl=function(t){const e=Gr(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ht(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ri(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dn(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ds(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ki(r)&&ki(o)){if(!ds(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ki(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)s[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(i<<5|i>>>27)+c+l+h+s[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Ls(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,p(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},On=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t){return t&&t._delegate?t._delegate:t}class Mt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Pn;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jl(e))try{this.getOrInitializeService({instanceIdentifier:ze})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ze){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ze){return this.instances.has(e)}getOptions(e=ze){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Xl(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ze){return this.component?this.component.multipleInstances?e:ze:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xl(t){return t===ze?void 0:t}function Jl(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ql(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(j||(j={}));const ec={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},tc=j.INFO,nc={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},sc=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=nc[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jr{constructor(e){this.name=e,this._logLevel=tc,this._logHandler=sc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ec[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const ic=(t,e)=>e.some(n=>t instanceof n);let Ai,Di;function rc(){return Ai||(Ai=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oc(){return Di||(Di=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qr=new WeakMap,hs=new WeakMap,Yr=new WeakMap,Yn=new WeakMap,Fs=new WeakMap;function ac(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Fe(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qr.set(n,t)}).catch(()=>{}),Fs.set(e,t),e}function lc(t){if(hs.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});hs.set(t,e)}let fs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yr.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cc(t){fs=t(fs)}function uc(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Kn(this),e,...n);return Yr.set(s,e.sort?e.sort():[e]),Fe(s)}:oc().includes(t)?function(...e){return t.apply(Kn(this),e),Fe(qr.get(this))}:function(...e){return Fe(t.apply(Kn(this),e))}}function dc(t){return typeof t=="function"?uc(t):(t instanceof IDBTransaction&&lc(t),ic(t,rc())?new Proxy(t,fs):t)}function Fe(t){if(t instanceof IDBRequest)return ac(t);if(Yn.has(t))return Yn.get(t);const e=dc(t);return e!==t&&(Yn.set(t,e),Fs.set(e,t)),e}const Kn=t=>Fs.get(t);function hc(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Fe(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Fe(o.result),l.oldVersion,l.newVersion,Fe(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const fc=["get","getKey","getAll","getAllKeys","count"],_c=["put","add","delete","clear"],Qn=new Map;function Pi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qn.get(e))return Qn.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=_c.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||fc.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Qn.set(e,r),r}cc(t=>({...t,get:(e,n,s)=>Pi(e,n)||t.get(e,n,s),has:(e,n)=>!!Pi(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pc(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function pc(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _s="@firebase/app",Oi="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe=new jr("@firebase/app"),gc="@firebase/app-compat",vc="@firebase/analytics-compat",yc="@firebase/analytics",Cc="@firebase/app-check-compat",bc="@firebase/app-check",Ec="@firebase/auth",wc="@firebase/auth-compat",Sc="@firebase/database",Ic="@firebase/database-compat",Tc="@firebase/functions",Nc="@firebase/functions-compat",xc="@firebase/installations",Rc="@firebase/installations-compat",kc="@firebase/messaging",Ac="@firebase/messaging-compat",Dc="@firebase/performance",Pc="@firebase/performance-compat",Oc="@firebase/remote-config",Mc="@firebase/remote-config-compat",Lc="@firebase/storage",Fc="@firebase/storage-compat",$c="@firebase/firestore",Bc="@firebase/firestore-compat",Vc="firebase",Wc="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="[DEFAULT]",Uc={[_s]:"fire-core",[gc]:"fire-core-compat",[yc]:"fire-analytics",[vc]:"fire-analytics-compat",[bc]:"fire-app-check",[Cc]:"fire-app-check-compat",[Ec]:"fire-auth",[wc]:"fire-auth-compat",[Sc]:"fire-rtdb",[Ic]:"fire-rtdb-compat",[Tc]:"fire-fn",[Nc]:"fire-fn-compat",[xc]:"fire-iid",[Rc]:"fire-iid-compat",[kc]:"fire-fcm",[Ac]:"fire-fcm-compat",[Dc]:"fire-perf",[Pc]:"fire-perf-compat",[Oc]:"fire-rc",[Mc]:"fire-rc-compat",[Lc]:"fire-gcs",[Fc]:"fire-gcs-compat",[$c]:"fire-fst",[Bc]:"fire-fst-compat","fire-js":"fire-js",[Vc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new Map,ps=new Map;function Hc(t,e){try{t.container.addComponent(e)}catch(n){Qe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fn(t){const e=t.name;if(ps.has(e))return Qe.debug(`There were multiple attempts to register component ${e}.`),!1;ps.set(e,t);for(const n of hn.values())Hc(n,t);return!0}function zc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$e=new zr("app","Firebase",Gc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $e.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=Wc;function Kr(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ms,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw $e.create("bad-app-name",{appName:String(i)});if(n||(n=Wr()),!n)throw $e.create("no-options");const r=hn.get(i);if(r){if(ds(n,r.options)&&ds(s,r.config))return r;throw $e.create("duplicate-app",{appName:i})}const o=new Zl(i);for(const l of ps.values())o.addComponent(l);const a=new jc(n,s,o);return hn.set(i,a),a}function Yc(t=ms){const e=hn.get(t);if(!e&&t===ms&&Wr())return Kr();if(!e)throw $e.create("no-app",{appName:t});return e}function ot(t,e,n){var s;let i=(s=Uc[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qe.warn(a.join(" "));return}fn(new Mt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="firebase-heartbeat-database",Qc=1,Lt="firebase-heartbeat-store";let Xn=null;function Qr(){return Xn||(Xn=hc(Kc,Qc,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Lt)}catch(n){console.warn(n)}}}}).catch(t=>{throw $e.create("idb-open",{originalErrorMessage:t.message})})),Xn}async function Xc(t){try{const n=(await Qr()).transaction(Lt),s=await n.objectStore(Lt).get(Xr(t));return await n.done,s}catch(e){if(e instanceof Yt)Qe.warn(e.message);else{const n=$e.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qe.warn(n.message)}}}async function Mi(t,e){try{const s=(await Qr()).transaction(Lt,"readwrite");await s.objectStore(Lt).put(e,Xr(t)),await s.done}catch(n){if(n instanceof Yt)Qe.warn(n.message);else{const s=$e.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qe.warn(s.message)}}}function Xr(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=1024,Zc=30*24*60*60*1e3;class eu{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nu(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Li();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Zc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Li(),{heartbeatsToSend:s,unsentEntries:i}=tu(this._heartbeatsCache.heartbeats),r=un(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Li(){return new Date().toISOString().substring(0,10)}function tu(t,e=Jc){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Fi(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fi(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class nu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vl()?Wl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Xc(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fi(t){return un(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t){fn(new Mt("platform-logger",e=>new mc(e),"PRIVATE")),fn(new Mt("heartbeat",e=>new eu(e),"PRIVATE")),ot(_s,Oi,t),ot(_s,Oi,"esm2017"),ot("fire-js","")}su("");var iu="firebase",ru="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ot(iu,ru,"app");var $i={};const Bi="@firebase/database",Vi="1.0.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jr="";function ou(t){Jr=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),re(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ot(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ae(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new au(e)}}catch{}return new lu},je=Zr("localStorage"),gs=Zr("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new jr("@firebase/database"),cu=function(){let t=1;return function(){return t++}}(),eo=function(t){const e=Kl(t),n=new Yl;n.update(e);const s=n.digest();return Ms.encodeByteArray(s)},Qt=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Qt.apply(null,s):typeof s=="object"?e+=re(s):e+=s,e+=" "}return e};let Ke=null,Wi=!0;const uu=function(t,e){p(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(at.logLevel=j.VERBOSE,Ke=at.log.bind(at),e&&gs.set("logging_enabled",!0)):typeof t=="function"?Ke=t:(Ke=null,gs.remove("logging_enabled"))},ce=function(...t){if(Wi===!0&&(Wi=!1,Ke===null&&gs.get("logging_enabled")===!0&&uu(!0)),Ke){const e=Qt.apply(null,t);Ke(e)}},Xt=function(t){return function(...e){ce(t,...e)}},vs=function(...t){const e="FIREBASE INTERNAL ERROR: "+Qt(...t);at.error(e)},xe=function(...t){const e=`FIREBASE FATAL ERROR: ${Qt(...t)}`;throw at.error(e),new Error(e)},_e=function(...t){const e="FIREBASE WARNING: "+Qt(...t);at.warn(e)},du=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&_e("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},to=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},hu=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ft="[MIN_NAME]",Xe="[MAX_NAME]",yt=function(t,e){if(t===e)return 0;if(t===ft||e===Xe)return-1;if(e===ft||t===Xe)return 1;{const n=Ui(t),s=Ui(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},fu=function(t,e){return t===e?0:t<e?-1:1},St=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+re(e))},$s=function(t){if(typeof t!="object"||t===null)return re(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=re(e[s]),n+=":",n+=$s(t[e[s]]);return n+="}",n},no=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function me(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const so=function(t){p(!to(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},_u=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},mu=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function pu(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const gu=new RegExp("^-?(0*)\\d{1,10}$"),vu=-2147483648,yu=2147483647,Ui=function(t){if(gu.test(t)){const e=Number(t);if(e>=vu&&e<=yu)return e}return null},Ct=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw _e("Exception was thrown by user callback.",n),e},Math.floor(0))}},Cu=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},kt=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){_e(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',_e(e)}}class lt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}lt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="5",io="v",ro="s",oo="r",ao="f",lo=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,co="ls",uo="p",ys="ac",ho="websocket",fo="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=je.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&je.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function wu(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function mo(t,e,n){p(typeof e=="string","typeof type must == string"),p(typeof n=="object","typeof params must == object");let s;if(e===ho)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===fo)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);wu(t)&&(n.ns=t.namespace);const i=[];return me(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.counters_={}}incrementCounter(e,n=1){Ae(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Rl(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn={},Zn={};function Vs(t){const e=t.toString();return Jn[e]||(Jn[e]=new Su),Jn[e]}function Iu(t,e){const n=t.toString();return Zn[n]||(Zn[n]=e()),Zn[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ct(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi="start",Nu="close",xu="pLPCommand",Ru="pRTLPCB",po="id",go="pw",vo="ser",ku="cb",Au="seg",Du="ts",Pu="d",Ou="dframe",yo=1870,Co=30,Mu=yo-Co,Lu=25e3,Fu=3e4;class it{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xt(e),this.stats_=Vs(n),this.urlFn=l=>(this.appCheckToken&&(l[ys]=this.appCheckToken),mo(n,fo,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Tu(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Fu)),hu(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ws((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Hi)this.id=a,this.password=l;else if(o===Nu)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Hi]="t",s[vo]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ku]=this.scriptTagHolder.uniqueCallbackIdentifier),s[io]=Bs,this.transportSessionId&&(s[ro]=this.transportSessionId),this.lastSessionId&&(s[co]=this.lastSessionId),this.applicationId&&(s[uo]=this.applicationId),this.appCheckToken&&(s[ys]=this.appCheckToken),typeof location<"u"&&location.hostname&&lo.test(location.hostname)&&(s[oo]=ao);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){it.forceAllow_=!0}static forceDisallow(){it.forceDisallow_=!0}static isAvailable(){return it.forceAllow_?!0:!it.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_u()&&!mu()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=$r(n),i=no(s,Mu);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ou]="t",s[po]=e,s[go]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=re(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ws{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=cu(),window[xu+this.uniqueCallbackIdentifier]=e,window[Ru+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ws.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ce("frame writing exception"),a.stack&&ce(a.stack),ce(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ce("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[po]=this.myID,e[go]=this.myPW,e[vo]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Co+s.length<=yo;){const o=this.pendingSegs.shift();s=s+"&"+Au+i+"="+o.seg+"&"+Du+i+"="+o.ts+"&"+Pu+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Lu)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=16384,Bu=45e3;let _n=null;typeof MozWebSocket<"u"?_n=MozWebSocket:typeof WebSocket<"u"&&(_n=WebSocket);class Ce{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xt(this.connId),this.stats_=Vs(n),this.connURL=Ce.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[io]=Bs,typeof location<"u"&&location.hostname&&lo.test(location.hostname)&&(o[oo]=ao),n&&(o[ro]=n),s&&(o[co]=s),i&&(o[ys]=i),r&&(o[uo]=r),mo(e,ho,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,je.set("previous_websocket_failure",!0);try{let s;Hr(),this.mySock=new _n(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ce.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&_n!==null&&!Ce.forceDisallow_}static previouslyFailed(){return je.isInMemoryStorage||je.get("previous_websocket_failure")===!0}markConnectionHealthy(){je.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ot(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=no(n,$u);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Bu))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ce.responsesRequiredToBeHealthy=2;Ce.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[it,Ce]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ce&&Ce.isAvailable();let s=n&&!Ce.previouslyFailed();if(e.webSocketOnly&&(n||_e("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ce];else{const i=this.transports_=[];for(const r of Ft.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ft.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ft.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=6e4,Wu=5e3,Uu=10*1024,Hu=100*1024,es="t",zi="d",zu="s",Gi="r",Gu="e",ji="o",qi="a",Yi="n",Ki="p",ju="h";class qu{constructor(e,n,s,i,r,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xt("c:"+this.id+":"),this.transportManager_=new Ft(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=kt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Hu?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Uu?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(es in e){const n=e[es];n===qi?this.upgradeIfSecondaryHealthy_():n===Gi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ji&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=St("t",e),s=St("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ki,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:qi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yi,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=St("t",e),s=St("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=St(es,e);if(zi in e){const s=e[zi];if(n===ju){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Yi){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===zu?this.onConnectionShutdown_(s):n===Gi?this.onReset_(s):n===Gu?vs("Server Error: "+s):n===ji?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vs("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Bs!==s&&_e("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),kt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Vu))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):kt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Wu))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ki,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(je.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){p(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Eo{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ur()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new mn}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=32,Xi=768;class z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function U(){return new z("")}function O(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ve(t){return t.pieces_.length-t.pieceNum_}function q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new z(t.pieces_,e)}function wo(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Yu(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function So(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Io(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new z(e,0)}function ee(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new z(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function he(t,e){const n=O(t),s=O(e);if(n===null)return e;if(n===s)return he(q(t),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Us(t,e){if(Ve(t)!==Ve(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function be(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ve(t)>Ve(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Ku{constructor(e,n){this.errorPrefix_=n,this.parts_=So(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=On(this.parts_[s]);To(this)}}function Qu(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=On(e),To(t)}function Xu(t){const e=t.parts_.pop();t.byteLength_-=On(e),t.parts_.length>0&&(t.byteLength_-=1)}function To(t){if(t.byteLength_>Xi)throw new Error(t.errorPrefix_+"has a key path longer than "+Xi+" bytes ("+t.byteLength_+").");if(t.parts_.length>Qi)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Qi+") or object contains a cycle "+Ge(t))}function Ge(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends Eo{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Hs}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=1e3,Ju=60*5*1e3,Ji=30*1e3,Zu=1.3,ed=3e4,td="server_kill",Zi=3;class Ne extends bo{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ne.nextPersistentConnectionId_++,this.log_=Xt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=It,this.maxReconnectDelay_=Ju,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Hr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&mn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(re(r)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Pn,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ne.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ae(e,"w")){const s=ht(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();_e(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||jl(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ji)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Gl(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+re(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):vs("Unrecognized action received from server: "+re(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=It,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=It,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ed&&(this.reconnectDelay_=It),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Zu)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ne.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(u){p(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ce("getToken() completed but was canceled"):(ce("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new qu(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{_e(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(td)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&_e(u),l())}}}interrupt(e){ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ri(this.interruptReasons_)&&(this.reconnectDelay_=It,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>$s(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zi&&(this.reconnectDelay_=Ji,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zi&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Jr.replace(/\./g,"-")]=1,Ur()?e["framework.cordova"]=1:Bl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=mn.getInstance().currentlyOnline();return Ri(this.interruptReasons_)&&e}}Ne.nextPersistentConnectionId_=0;Ne.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new M(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new M(ft,e),i=new M(ft,n);return this.compare(s,i)!==0}minPost(){return M.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nn;class No extends Mn{static get __EMPTY_NODE(){return nn}static set __EMPTY_NODE(e){nn=e}compare(e,n){return yt(e.name,n.name)}isDefinedOn(e){throw vt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return M.MIN}maxPost(){return new M(Xe,nn)}makePost(e,n){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new M(e,nn)}toString(){return".key"}}const ct=new No;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ie{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ie.RED,this.left=i??fe.EMPTY_NODE,this.right=r??fe.EMPTY_NODE}copy(e,n,s,i,r){return new ie(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return fe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return fe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ie.RED=!0;ie.BLACK=!1;class nd{copy(e,n,s,i,r){return this}insert(e,n,s){return new ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class fe{constructor(e,n=fe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new fe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ie.BLACK,null,null))}remove(e){return new fe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ie.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new sn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new sn(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new sn(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new sn(this.root_,null,this.comparator_,!0,e)}}fe.EMPTY_NODE=new nd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(t,e){return yt(t.name,e.name)}function zs(t,e){return yt(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs;function id(t){Cs=t}const xo=function(t){return typeof t=="number"?"number:"+so(t):"string:"+t},Ro=function(t){if(t.isLeafNode()){const e=t.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ae(e,".sv"),"Priority must be a string or number.")}else p(t===Cs||t.isEmpty(),"priority of unexpected type.");p(t===Cs||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let er;class se{constructor(e,n=se.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ro(this.priorityNode_)}static set __childrenNodeConstructor(e){er=e}static get __childrenNodeConstructor(){return er}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new se(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:se.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:O(e)===".priority"?this.priorityNode_:se.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:se.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=O(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(p(s!==".priority"||Ve(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,se.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+xo(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=so(this.value_):e+=this.value_,this.lazyHash_=eo(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===se.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof se.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=se.VALUE_TYPE_ORDER.indexOf(n),r=se.VALUE_TYPE_ORDER.indexOf(s);return p(i>=0,"Unknown leaf type: "+n),p(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}se.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko,Ao;function rd(t){ko=t}function od(t){Ao=t}class ad extends Mn{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?yt(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return M.MIN}maxPost(){return new M(Xe,new se("[PRIORITY-POST]",Ao))}makePost(e,n){const s=ko(e);return new M(n,new se("[PRIORITY-POST]",s))}toString(){return".priority"}}const J=new ad;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=Math.log(2);class cd{constructor(e){const n=r=>parseInt(Math.log(r)/ld,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pn=function(t,e,n,s){t.sort(e);const i=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=t[l],d=n?n(u):u,new ie(d,u.node,ie.BLACK,null,null);{const f=parseInt(h/2,10)+l,_=i(l,f),y=i(f+1,c);return u=t[f],d=n?n(u):u,new ie(d,u.node,ie.BLACK,_,y)}},r=function(l){let c=null,h=null,u=t.length;const d=function(_,y){const x=u-_,R=u;u-=_;const S=i(x+1,R),A=t[x],D=n?n(A):A;f(new ie(D,A.node,y,null,S))},f=function(_){c?(c.left=_,c=_):(h=_,c=_)};for(let _=0;_<l.count;++_){const y=l.nextBitIsOne(),x=Math.pow(2,l.count-(_+1));y?d(x,ie.BLACK):(d(x,ie.BLACK),d(x,ie.RED))}return h},o=new cd(t.length),a=r(o);return new fe(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts;const st={};class Te{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return p(st&&J,"ChildrenNode.ts has not been loaded"),ts=ts||new Te({".priority":st},{".priority":J}),ts}get(e){const n=ht(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof fe?n:null}hasIndex(e){return Ae(this.indexSet_,e.toString())}addIndex(e,n){p(e!==ct,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(M.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=pn(s,e.getCompare()):a=st;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Te(h,c)}addToIndexes(e,n){const s=dn(this.indexes_,(i,r)=>{const o=ht(this.indexSet_,r);if(p(o,"Missing index implementation for "+r),i===st)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(M.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),pn(a,o.getCompare())}else return st;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new M(e.name,a))),l.insert(e,e.node)}});return new Te(s,this.indexSet_)}removeFromIndexes(e,n){const s=dn(this.indexes_,i=>{if(i===st)return i;{const r=n.get(e.name);return r?i.remove(new M(e.name,r)):i}});return new Te(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tt;class N{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ro(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Tt||(Tt=new N(new fe(zs),null,Te.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Tt}updatePriority(e){return this.children_.isEmpty()?this:new N(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Tt:n}}getChild(e){const n=O(e);return n===null?this:this.getImmediateChild(n).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(p(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new M(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Tt:this.priorityNode_;return new N(i,o,r)}}updateChild(e,n){const s=O(e);if(s===null)return n;{p(O(e)!==".priority"||Ve(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(q(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(J,(o,a)=>{n[o]=a.val(e),s++,r&&N.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+xo(this.getPriority().val())+":"),this.forEachChild(J,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":eo(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new M(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new M(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new M(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,M.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,M.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Jt?-1:0}withIndex(e){if(e===ct||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new N(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ct||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(J),i=n.getIterator(J);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ct?null:this.indexMap_.get(e.toString())}}N.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ud extends N{constructor(){super(new fe(zs),N.EMPTY_NODE,Te.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return N.EMPTY_NODE}isEmpty(){return!1}}const Jt=new ud;Object.defineProperties(M,{MIN:{value:new M(ft,N.EMPTY_NODE)},MAX:{value:new M(Xe,Jt)}});No.__EMPTY_NODE=N.EMPTY_NODE;se.__childrenNodeConstructor=N;id(Jt);od(Jt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=!0;function ae(t,e=null){if(t===null)return N.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new se(n,ae(e))}if(!(t instanceof Array)&&dd){const n=[];let s=!1;if(me(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ae(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new M(o,l)))}}),n.length===0)return N.EMPTY_NODE;const r=pn(n,sd,o=>o.name,zs);if(s){const o=pn(n,J.getCompare());return new N(r,ae(e),new Te({".priority":o},{".priority":J}))}else return new N(r,ae(e),Te.Default)}else{let n=N.EMPTY_NODE;return me(t,(s,i)=>{if(Ae(t,s)&&s.substring(0,1)!=="."){const r=ae(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ae(e))}}rd(ae);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd extends Mn{constructor(e){super(),this.indexPath_=e,p(!F(e)&&O(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?yt(e.name,n.name):r}makePost(e,n){const s=ae(e),i=N.EMPTY_NODE.updateChild(this.indexPath_,s);return new M(n,i)}maxPost(){const e=N.EMPTY_NODE.updateChild(this.indexPath_,Jt);return new M(Xe,e)}toString(){return So(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd extends Mn{compare(e,n){const s=e.node.compareTo(n.node);return s===0?yt(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(e,n){const s=ae(e);return new M(n,s)}toString(){return".value"}}const _d=new fd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t){return{type:"value",snapshotNode:t}}function _t(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function $t(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Bt(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function md(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange($t(n,a)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(_t(n,s)):o.trackChildChange(Bt(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(J,(i,r)=>{n.hasChild(i)||s.trackChildChange($t(i,r))}),n.isLeafNode()||n.forEachChild(J,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Bt(i,r,o))}else s.trackChildChange(_t(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?N.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.indexedFilter_=new Gs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Vt.getStartPost_(e),this.endPost_=Vt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new M(n,s))||(s=N.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=N.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(N.EMPTY_NODE);const r=this;return n.forEachChild(J,(o,a)=>{r.matches(new M(o,a))||(i=i.updateImmediateChild(o,N.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Vt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new M(n,s))||(s=N.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=N.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=N.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(N.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,N.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,f)=>u(f,d)}else o=this.index_.getCompare();const a=e;p(a.numChildren()===this.limit_,"");const l=new M(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(h&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Bt(n,s,u)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange($t(n,u));const y=a.updateImmediateChild(n,N.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(_t(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return s.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange($t(c.name,c.node)),r.trackChildChange(_t(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,N.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=J}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ft}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===J}copy(){const e=new js;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function gd(t){return t.loadsAllData()?new Gs(t.getIndex()):t.hasLimit()?new pd(t):new Vt(t)}function tr(t){const e={};if(t.isDefault())return e;let n;if(t.index_===J?n="$priority":t.index_===_d?n="$value":t.index_===ct?n="$key":(p(t.index_ instanceof hd,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=re(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=re(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+re(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=re(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+re(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function nr(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==J&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends bo{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Xt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=gn.getListenId_(e,s),a={};this.listens_[o]=a;const l=tr(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),ht(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=gn.getListenId_(e,n);delete this.listens_[s]}get(e){const n=tr(e._queryParams),s=e._path.toString(),i=new Pn;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ql(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ot(a.responseText)}catch{_e("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&_e("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(){this.rootNode_=N.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return{value:null,children:new Map}}function Po(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=O(e);t.children.has(s)||t.children.set(s,vn());const i=t.children.get(s);e=q(e),Po(i,e,n)}}function bs(t,e,n){t.value!==null?n(e,t.value):yd(t,(s,i)=>{const r=new z(e.toString()+"/"+s);bs(i,r,n)})}function yd(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&me(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=10*1e3,bd=30*1e3,Ed=5*60*1e3;class wd{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Cd(e);const s=sr+(bd-sr)*Math.random();kt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;me(e,(i,r)=>{r>0&&Ae(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),kt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ed))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ee||(Ee={}));function Oo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ys(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ee.ACK_USER_WRITE,this.source=Oo()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new z(e));return new yn(U(),n,this.revert)}}else return p(O(this.path)===e,"operationForChild called for unrelated child."),new yn(q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n){this.source=e,this.path=n,this.type=Ee.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new Wt(this.source,U()):new Wt(this.source,q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ee.OVERWRITE}operationForChild(e){return F(this.path)?new Je(this.source,U(),this.snap.getImmediateChild(e)):new Je(this.source,q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ee.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new z(e));return n.isEmpty()?null:n.value?new Je(this.source,U(),n.value):new Ut(this.source,U(),n)}else return p(O(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ut(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=O(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Id(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(md(o.childName,o.snapshotNode))}),Nt(t,i,"child_removed",e,s,n),Nt(t,i,"child_added",e,s,n),Nt(t,i,"child_moved",r,s,n),Nt(t,i,"child_changed",e,s,n),Nt(t,i,"value",e,s,n),i}function Nt(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Nd(t,a,l)),o.forEach(a=>{const l=Td(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Td(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Nd(t,e,n){if(e.childName==null||n.childName==null)throw vt("Should only compare child_ events.");const s=new M(e.childName,e.snapshotNode),i=new M(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){return{eventCache:t,serverCache:e}}function At(t,e,n,s){return Ln(new Ze(e,n,s),t.serverCache)}function Mo(t,e,n,s){return Ln(t.eventCache,new Ze(e,n,s))}function Es(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function et(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns;const xd=()=>(ns||(ns=new fe(fu)),ns);class Y{constructor(e,n=xd()){this.value=e,this.children=n}static fromObject(e){let n=new Y(null);return me(e,(s,i)=>{n=n.set(new z(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:U(),value:this.value};if(F(e))return null;{const s=O(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(q(e),n);return r!=null?{path:ee(new z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=O(e),s=this.children.get(n);return s!==null?s.subtree(q(e)):new Y(null)}}set(e,n){if(F(e))return new Y(n,this.children);{const s=O(e),r=(this.children.get(s)||new Y(null)).set(q(e),n),o=this.children.insert(s,r);return new Y(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const n=O(e),s=this.children.get(n);if(s){const i=s.remove(q(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Y(null):new Y(this.value,r)}else return this}}get(e){if(F(e))return this.value;{const n=O(e),s=this.children.get(n);return s?s.get(q(e)):null}}setTree(e,n){if(F(e))return n;{const s=O(e),r=(this.children.get(s)||new Y(null)).setTree(q(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Y(this.value,o)}}fold(e){return this.fold_(U(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ee(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,U(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(F(e))return null;{const r=O(e),o=this.children.get(r);return o?o.findOnPath_(q(e),ee(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,U(),n)}foreachOnPath_(e,n,s){if(F(e))return this;{this.value&&s(n,this.value);const i=O(e),r=this.children.get(i);return r?r.foreachOnPath_(q(e),ee(n,i),s):new Y(null)}}foreach(e){this.foreach_(U(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ee(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.writeTree_=e}static empty(){return new we(new Y(null))}}function Dt(t,e,n){if(F(e))return new we(new Y(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=he(i,e);return r=r.updateChild(o,n),new we(t.writeTree_.set(i,r))}else{const i=new Y(n),r=t.writeTree_.setTree(e,i);return new we(r)}}}function ir(t,e,n){let s=t;return me(n,(i,r)=>{s=Dt(s,ee(e,i),r)}),s}function rr(t,e){if(F(e))return we.empty();{const n=t.writeTree_.setTree(e,new Y(null));return new we(n)}}function ws(t,e){return nt(t,e)!=null}function nt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(he(n.path,e)):null}function or(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(J,(s,i)=>{e.push(new M(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new M(s,i.value))}),e}function Be(t,e){if(F(e))return t;{const n=nt(t,e);return n!=null?new we(new Y(n)):new we(t.writeTree_.subtree(e))}}function Ss(t){return t.writeTree_.isEmpty()}function mt(t,e){return Lo(U(),t.writeTree_,e)}function Lo(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(p(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Lo(ee(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ee(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t,e){return Vo(e,t)}function Rd(t,e,n,s,i){p(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Dt(t.visibleWrites,e,n)),t.lastWriteId=s}function kd(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Ad(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);p(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Dd(a,s.path)?i=!1:be(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Pd(t),!0;if(s.snap)t.visibleWrites=rr(t.visibleWrites,s.path);else{const a=s.children;me(a,l=>{t.visibleWrites=rr(t.visibleWrites,ee(s.path,l))})}return!0}else return!1}function Dd(t,e){if(t.snap)return be(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&be(ee(t.path,n),e))return!0;return!1}function Pd(t){t.visibleWrites=Fo(t.allWrites,Od,U()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Od(t){return t.visible}function Fo(t,e,n){let s=we.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)be(n,o)?(a=he(n,o),s=Dt(s,a,r.snap)):be(o,n)&&(a=he(o,n),s=Dt(s,U(),r.snap.getChild(a)));else if(r.children){if(be(n,o))a=he(n,o),s=ir(s,a,r.children);else if(be(o,n))if(a=he(o,n),F(a))s=ir(s,U(),r.children);else{const l=ht(r.children,O(a));if(l){const c=l.getChild(q(a));s=Dt(s,U(),c)}}}else throw vt("WriteRecord should have .snap or .children")}}return s}function $o(t,e,n,s,i){if(!s&&!i){const r=nt(t.visibleWrites,e);if(r!=null)return r;{const o=Be(t.visibleWrites,e);if(Ss(o))return n;if(n==null&&!ws(o,U()))return null;{const a=n||N.EMPTY_NODE;return mt(o,a)}}}else{const r=Be(t.visibleWrites,e);if(!i&&Ss(r))return n;if(!i&&n==null&&!ws(r,U()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(be(c.path,e)||be(e,c.path))},a=Fo(t.allWrites,o,e),l=n||N.EMPTY_NODE;return mt(a,l)}}}function Md(t,e,n){let s=N.EMPTY_NODE;const i=nt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(J,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Be(t.visibleWrites,e);return n.forEachChild(J,(o,a)=>{const l=mt(Be(r,new z(o)),a);s=s.updateImmediateChild(o,l)}),or(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Be(t.visibleWrites,e);return or(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Ld(t,e,n,s,i){p(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ee(e,n);if(ws(t.visibleWrites,r))return null;{const o=Be(t.visibleWrites,r);return Ss(o)?i.getChild(n):mt(o,i.getChild(n))}}function Fd(t,e,n,s){const i=ee(e,n),r=nt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Be(t.visibleWrites,i);return mt(o,s.getNode().getImmediateChild(n))}else return null}function $d(t,e){return nt(t.visibleWrites,e)}function Bd(t,e,n,s,i,r,o){let a;const l=Be(t.visibleWrites,e),c=nt(l,U());if(c!=null)a=c;else if(n!=null)a=mt(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&h.length<i;)u(f,s)!==0&&h.push(f),f=d.getNext();return h}else return[]}function Vd(){return{visibleWrites:we.empty(),allWrites:[],lastWriteId:-1}}function Cn(t,e,n,s){return $o(t.writeTree,t.treePath,e,n,s)}function Qs(t,e){return Md(t.writeTree,t.treePath,e)}function ar(t,e,n,s){return Ld(t.writeTree,t.treePath,e,n,s)}function bn(t,e){return $d(t.writeTree,ee(t.treePath,e))}function Wd(t,e,n,s,i,r){return Bd(t.writeTree,t.treePath,e,n,s,i,r)}function Xs(t,e,n){return Fd(t.writeTree,t.treePath,e,n)}function Bo(t,e){return Vo(ee(t.treePath,e),t.writeTree)}function Vo(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;p(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),p(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Bt(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,$t(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,_t(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Bt(s,e.snapshotNode,i.oldSnap));else throw vt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Wo=new Hd;class Js{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ze(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xs(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:et(this.viewCache_),r=Wd(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t){return{filter:t}}function Gd(t,e){p(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function jd(t,e,n,s,i){const r=new Ud;let o,a;if(n.type===Ee.OVERWRITE){const c=n;c.source.fromUser?o=Is(t,e,c.path,c.snap,s,i,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!F(c.path),o=En(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Ee.MERGE){const c=n;c.source.fromUser?o=Yd(t,e,c.path,c.children,s,i,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ts(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Ee.ACK_USER_WRITE){const c=n;c.revert?o=Xd(t,e,c.path,s,i,r):o=Kd(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ee.LISTEN_COMPLETE)o=Qd(t,e,n.path,s,r);else throw vt("Unknown operation type: "+n.type);const l=r.getChanges();return qd(e,o,l),{viewCache:o,changes:l}}function qd(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Es(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Do(Es(e)))}}function Uo(t,e,n,s,i,r){const o=e.eventCache;if(bn(s,n)!=null)return e;{let a,l;if(F(n))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=et(e),h=c instanceof N?c:N.EMPTY_NODE,u=Qs(s,h);a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=Cn(s,et(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=O(n);if(c===".priority"){p(Ve(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=ar(s,n,h,l);u!=null?a=t.filter.updatePriority(h,u):a=o.getNode()}else{const h=q(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=ar(s,n,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=Xs(s,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,h,i,r):a=o.getNode()}}return At(e,a,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function En(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(F(n))c=h.updateFullNode(l.getNode(),s,null);else if(h.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=h.updateFullNode(l.getNode(),f,null)}else{const f=O(n);if(!l.isCompleteForPath(n)&&Ve(n)>1)return e;const _=q(n),x=l.getNode().getImmediateChild(f).updateChild(_,s);f===".priority"?c=h.updatePriority(l.getNode(),x):c=h.updateChild(l.getNode(),f,x,_,Wo,null)}const u=Mo(e,c,l.isFullyInitialized()||F(n),h.filtersNodes()),d=new Js(i,u,r);return Uo(t,u,n,i,d,a)}function Is(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const h=new Js(i,e,r);if(F(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=At(e,c,!0,t.filter.filtersNodes());else{const u=O(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=At(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=q(n),f=a.getNode().getImmediateChild(u);let _;if(F(d))_=s;else{const y=h.getCompleteChild(u);y!=null?wo(d)===".priority"&&y.getChild(Io(d)).isEmpty()?_=y:_=y.updateChild(d,s):_=N.EMPTY_NODE}if(f.equals(_))l=e;else{const y=t.filter.updateChild(a.getNode(),u,_,d,h,o);l=At(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function lr(t,e){return t.eventCache.isCompleteForChild(e)}function Yd(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const h=ee(n,l);lr(e,O(h))&&(a=Is(t,a,h,c,i,r,o))}),s.foreach((l,c)=>{const h=ee(n,l);lr(e,O(h))||(a=Is(t,a,h,c,i,r,o))}),a}function cr(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ts(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;F(n)?c=s:c=new Y(null).setTree(n,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),_=cr(t,f,d);l=En(t,l,new z(u),_,i,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const f=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!f){const _=e.serverCache.getNode().getImmediateChild(u),y=cr(t,_,d);l=En(t,l,new z(u),y,i,r,o,a)}}),l}function Kd(t,e,n,s,i,r,o){if(bn(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(F(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return En(t,e,n,l.getNode().getChild(n),i,r,a,o);if(F(n)){let c=new Y(null);return l.getNode().forEachChild(ct,(h,u)=>{c=c.set(new z(h),u)}),Ts(t,e,n,c,i,r,a,o)}else return e}else{let c=new Y(null);return s.foreach((h,u)=>{const d=ee(n,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),Ts(t,e,n,c,i,r,a,o)}}function Qd(t,e,n,s,i){const r=e.serverCache,o=Mo(e,r.getNode(),r.isFullyInitialized()||F(n),r.isFiltered());return Uo(t,o,n,s,Wo,i)}function Xd(t,e,n,s,i,r){let o;if(bn(s,n)!=null)return e;{const a=new Js(s,e,i),l=e.eventCache.getNode();let c;if(F(n)||O(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Cn(s,et(e));else{const u=e.serverCache.getNode();p(u instanceof N,"serverChildren would be complete if leaf node"),h=Qs(s,u)}h=h,c=t.filter.updateFullNode(l,h,r)}else{const h=O(n);let u=Xs(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=t.filter.updateChild(l,h,u,q(n),a,r):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,N.EMPTY_NODE,q(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Cn(s,et(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||bn(s,U())!=null,At(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Gs(s.getIndex()),r=gd(s);this.processor_=zd(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(N.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(N.EMPTY_NODE,a.getNode(),null),h=new Ze(l,o.isFullyInitialized(),i.filtersNodes()),u=new Ze(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ln(u,h),this.eventGenerator_=new Sd(this.query_)}get query(){return this.query_}}function Zd(t){return t.viewCache_.serverCache.getNode()}function eh(t,e){const n=et(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(O(e)).isEmpty())?n.getChild(e):null}function ur(t){return t.eventRegistrations_.length===0}function th(t,e){t.eventRegistrations_.push(e)}function dr(t,e,n){const s=[];if(n){p(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function hr(t,e,n,s){e.type===Ee.MERGE&&e.source.queryId!==null&&(p(et(t.viewCache_),"We should always have a full cache before handling merges"),p(Es(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=jd(t.processor_,i,e,n,s);return Gd(t.processor_,r.viewCache),p(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Ho(t,r.changes,r.viewCache.eventCache.getNode(),null)}function nh(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(J,(r,o)=>{s.push(_t(r,o))}),n.isFullyInitialized()&&s.push(Do(n.getNode())),Ho(t,s,n.getNode(),e)}function Ho(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Id(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wn;class sh{constructor(){this.views=new Map}}function ih(t){p(!wn,"__referenceConstructor has already been defined"),wn=t}function rh(){return p(wn,"Reference.ts has not been loaded"),wn}function oh(t){return t.views.size===0}function Zs(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return p(r!=null,"SyncTree gave us an op for an invalid query."),hr(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(hr(o,e,n,s));return r}}function ah(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Cn(n,i?s:null),l=!1;a?l=!0:s instanceof N?(a=Qs(n,s),l=!1):(a=N.EMPTY_NODE,l=!1);const c=Ln(new Ze(a,l,!1),new Ze(s,i,!1));return new Jd(e,c)}return o}function lh(t,e,n,s,i,r){const o=ah(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),th(o,n),nh(o,n)}function ch(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=We(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(dr(c,n,s)),ur(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(dr(l,n,s)),ur(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!We(t)&&r.push(new(rh())(e._repo,e._path)),{removed:r,events:o}}function zo(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ut(t,e){let n=null;for(const s of t.views.values())n=n||eh(s,e);return n}function Go(t,e){if(e._queryParams.loadsAllData())return Fn(t);{const s=e._queryIdentifier;return t.views.get(s)}}function jo(t,e){return Go(t,e)!=null}function We(t){return Fn(t)!=null}function Fn(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sn;function uh(t){p(!Sn,"__referenceConstructor has already been defined"),Sn=t}function dh(){return p(Sn,"Reference.ts has not been loaded"),Sn}let hh=1;class fr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Y(null),this.pendingWriteTree_=Vd(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qo(t,e,n,s,i){return Rd(t.pendingWriteTree_,e,n,s,i),i?Zt(t,new Je(Oo(),e,n)):[]}function qe(t,e,n=!1){const s=kd(t.pendingWriteTree_,e);if(Ad(t.pendingWriteTree_,e)){let r=new Y(null);return s.snap!=null?r=r.set(U(),!0):me(s.children,o=>{r=r.set(new z(o),!0)}),Zt(t,new yn(s.path,r,n))}else return[]}function $n(t,e,n){return Zt(t,new Je(qs(),e,n))}function fh(t,e,n){const s=Y.fromObject(n);return Zt(t,new Ut(qs(),e,s))}function _h(t,e){return Zt(t,new Wt(qs(),e))}function mh(t,e,n){const s=ti(t,n);if(s){const i=ni(s),r=i.path,o=i.queryId,a=he(r,e),l=new Wt(Ys(o),a);return si(t,r,l)}else return[]}function Ns(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||jo(o,e))){const l=ch(o,e,n,s);oh(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(d,f)=>We(f));if(h&&!u){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=vh(d);for(let _=0;_<f.length;++_){const y=f[_],x=y.query,R=Qo(t,y);t.listenProvider_.startListening(Pt(x),In(t,x),R.hashFn,R.onComplete)}}}!u&&c.length>0&&!s&&(h?t.listenProvider_.stopListening(Pt(e),null):c.forEach(d=>{const f=t.queryToTagMap.get(Bn(d));t.listenProvider_.stopListening(Pt(d),f)}))}yh(t,c)}return a}function ph(t,e,n,s){const i=ti(t,s);if(i!=null){const r=ni(i),o=r.path,a=r.queryId,l=he(o,e),c=new Je(Ys(a),l,n);return si(t,o,c)}else return[]}function gh(t,e,n,s){const i=ti(t,s);if(i){const r=ni(i),o=r.path,a=r.queryId,l=he(o,e),c=Y.fromObject(n),h=new Ut(Ys(a),l,c);return si(t,o,h)}else return[]}function _r(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,f)=>{const _=he(d,i);r=r||ut(f,_),o=o||We(f)});let a=t.syncPointTree_.get(i);a?(o=o||We(a),r=r||ut(a,U())):(a=new sh,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=N.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,_)=>{const y=ut(_,U());y&&(r=r.updateImmediateChild(f,y))}));const c=jo(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Bn(e);p(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=Ch();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const h=Ks(t.pendingWriteTree_,i);let u=lh(a,e,n,h,r,l);if(!c&&!o&&!s){const d=Go(a,e);u=u.concat(bh(t,e,d))}return u}function ei(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=he(o,e),c=ut(a,l);if(c)return c});return $o(i,e,r,n,!0)}function Zt(t,e){return Yo(e,t.syncPointTree_,null,Ks(t.pendingWriteTree_,U()))}function Yo(t,e,n,s){if(F(t.path))return Ko(t,e,n,s);{const i=e.get(U());n==null&&i!=null&&(n=ut(i,U()));let r=[];const o=O(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=Bo(s,o);r=r.concat(Yo(a,l,c,h))}return i&&(r=r.concat(Zs(i,t,s,n))),r}}function Ko(t,e,n,s){const i=e.get(U());n==null&&i!=null&&(n=ut(i,U()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Bo(s,o),h=t.operationForChild(o);h&&(r=r.concat(Ko(h,a,l,c)))}),i&&(r=r.concat(Zs(i,t,s,n))),r}function Qo(t,e){const n=e.query,s=In(t,n);return{hashFn:()=>(Zd(e)||N.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?mh(t,n._path,s):_h(t,n._path);{const r=pu(i,n);return Ns(t,n,null,r)}}}}function In(t,e){const n=Bn(e);return t.queryToTagMap.get(n)}function Bn(t){return t._path.toString()+"$"+t._queryIdentifier}function ti(t,e){return t.tagToQueryMap.get(e)}function ni(t){const e=t.indexOf("$");return p(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new z(t.substr(0,e))}}function si(t,e,n){const s=t.syncPointTree_.get(e);p(s,"Missing sync point for query tag that we're tracking");const i=Ks(t.pendingWriteTree_,e);return Zs(s,n,i,null)}function vh(t){return t.fold((e,n,s)=>{if(n&&We(n))return[Fn(n)];{let i=[];return n&&(i=zo(n)),me(s,(r,o)=>{i=i.concat(o)}),i}})}function Pt(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(dh())(t._repo,t._path):t}function yh(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Bn(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Ch(){return hh++}function bh(t,e,n){const s=e._path,i=In(t,e),r=Qo(t,n),o=t.listenProvider_.startListening(Pt(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)p(!We(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!F(c)&&h&&We(h))return[Fn(h).query];{let d=[];return h&&(d=d.concat(zo(h).map(f=>f.query))),me(u,(f,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening(Pt(h),In(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ii(n)}node(){return this.node_}}class ri{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ee(this.path_,e);return new ri(this.syncTree_,n)}node(){return ei(this.syncTree_,this.path_)}}const Eh=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},mr=function(t,e,n){if(!t||typeof t!="object")return t;if(p(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return wh(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Sh(t[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},wh=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:p(!1,"Unexpected server value: "+t)}},Sh=function(t,e,n){t.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&p(!1,"Unexpected increment value: "+s);const i=e.node();if(p(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Ih=function(t,e,n,s){return oi(e,new ri(n,t),s)},Xo=function(t,e,n){return oi(t,new ii(e),n)};function oi(t,e,n){const s=t.getPriority().val(),i=mr(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=mr(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new se(a,ae(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new se(i))),o.forEachChild(J,(a,l)=>{const c=oi(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function li(t,e){let n=e instanceof z?e:new z(e),s=t,i=O(n);for(;i!==null;){const r=ht(s.node.children,i)||{children:{},childCount:0};s=new ai(i,s,r),n=q(n),i=O(n)}return s}function bt(t){return t.node.value}function Jo(t,e){t.node.value=e,xs(t)}function Zo(t){return t.node.childCount>0}function Th(t){return bt(t)===void 0&&!Zo(t)}function Vn(t,e){me(t.node.children,(n,s)=>{e(new ai(n,t,s))})}function ea(t,e,n,s){n&&!s&&e(t),Vn(t,i=>{ea(i,e,!0,s)}),n&&s&&e(t)}function Nh(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function en(t){return new z(t.parent===null?t.name:en(t.parent)+"/"+t.name)}function xs(t){t.parent!==null&&xh(t.parent,t.name,t)}function xh(t,e,n){const s=Th(n),i=Ae(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,xs(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,xs(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=/[\[\].#$\/\u0000-\u001F\u007F]/,kh=/[\[\].#$\u0000-\u001F\u007F]/,ss=10*1024*1024,ta=function(t){return typeof t=="string"&&t.length!==0&&!Rh.test(t)},na=function(t){return typeof t=="string"&&t.length!==0&&!kh.test(t)},Ah=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),na(t)},Dh=function(t,e,n,s){s&&e===void 0||ci(Ls(t,"value"),e,n)},ci=function(t,e,n){const s=n instanceof z?new Ku(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ge(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ge(s)+" with contents = "+e.toString());if(to(e))throw new Error(t+"contains "+e.toString()+" "+Ge(s));if(typeof e=="string"&&e.length>ss/3&&On(e)>ss)throw new Error(t+"contains a string greater than "+ss+" utf8 bytes "+Ge(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(me(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ta(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ge(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Qu(s,o),ci(t,a,s),Xu(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ge(s)+" in addition to actual children.")}},sa=function(t,e,n,s){if(!(s&&n===void 0)&&!na(n))throw new Error(Ls(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ph=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),sa(t,e,n,s)},Oh=function(t,e){if(O(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Mh=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ta(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ah(n))throw new Error(Ls(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ui(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Us(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function ia(t,e,n){ui(t,n),ra(t,s=>Us(s,e))}function Re(t,e,n){ui(t,n),ra(t,s=>be(s,e)||be(e,s))}function ra(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Fh(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Fh(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ke&&ce("event: "+n.toString()),Ct(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="repo_interrupt",Bh=25;class Vh{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Lh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vn(),this.transactionQueueTree_=new ai,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Wh(t,e,n){if(t.stats_=Vs(t.repoInfo_),t.forceRestClient_||Cu())t.server_=new gn(t.repoInfo_,(s,i,r,o)=>{pr(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>gr(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{re(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ne(t.repoInfo_,e,(s,i,r,o)=>{pr(t,s,i,r,o)},s=>{gr(t,s)},s=>{Hh(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Iu(t.repoInfo_,()=>new wd(t.stats_,t.server_)),t.infoData_=new vd,t.infoSyncTree_=new fr({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=$n(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),hi(t,"connected",!1),t.serverSyncTree_=new fr({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Re(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Uh(t){const n=t.infoData_.getNode(new z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function di(t){return Eh({timestamp:Uh(t)})}function pr(t,e,n,s,i){t.dataUpdateCount++;const r=new z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=dn(n,c=>ae(c));o=gh(t.serverSyncTree_,r,l,i)}else{const l=ae(n);o=ph(t.serverSyncTree_,r,l,i)}else if(s){const l=dn(n,c=>ae(c));o=fh(t.serverSyncTree_,r,l)}else{const l=ae(n);o=$n(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Wn(t,r)),Re(t.eventQueue_,a,o)}function gr(t,e){hi(t,"connected",e),e===!1&&Gh(t)}function Hh(t,e){me(e,(n,s)=>{hi(t,n,s)})}function hi(t,e,n){const s=new z("/.info/"+e),i=ae(n);t.infoData_.updateSnapshot(s,i);const r=$n(t.infoSyncTree_,s,i);Re(t.eventQueue_,s,r)}function oa(t){return t.nextWriteId_++}function zh(t,e,n,s,i){fi(t,"set",{path:e.toString(),value:n,priority:s});const r=di(t),o=ae(n,s),a=ei(t.serverSyncTree_,e),l=Xo(o,a,r),c=oa(t),h=qo(t.serverSyncTree_,e,l,c,!0);ui(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(d,f)=>{const _=d==="ok";_||_e("set at "+e+" failed: "+d);const y=qe(t.serverSyncTree_,c,!_);Re(t.eventQueue_,e,y),Yh(t,i,d,f)});const u=da(t,e);Wn(t,u),Re(t.eventQueue_,u,[])}function Gh(t){fi(t,"onDisconnectEvents");const e=di(t),n=vn();bs(t.onDisconnect_,U(),(i,r)=>{const o=Ih(i,r,t.serverSyncTree_,e);Po(n,i,o)});let s=[];bs(n,U(),(i,r)=>{s=s.concat($n(t.serverSyncTree_,i,r));const o=da(t,i);Wn(t,o)}),t.onDisconnect_=vn(),Re(t.eventQueue_,U(),s)}function jh(t,e,n){let s;O(e._path)===".info"?s=_r(t.infoSyncTree_,e,n):s=_r(t.serverSyncTree_,e,n),ia(t.eventQueue_,e._path,s)}function vr(t,e,n){let s;O(e._path)===".info"?s=Ns(t.infoSyncTree_,e,n):s=Ns(t.serverSyncTree_,e,n),ia(t.eventQueue_,e._path,s)}function qh(t){t.persistentConnection_&&t.persistentConnection_.interrupt($h)}function fi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ce(n,...e)}function Yh(t,e,n,s){e&&Ct(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function aa(t,e,n){return ei(t.serverSyncTree_,e,n)||N.EMPTY_NODE}function _i(t,e=t.transactionQueueTree_){if(e||Un(t,e),bt(e)){const n=ca(t,e);p(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Kh(t,en(e),n)}else Zo(e)&&Vn(e,n=>{_i(t,n)})}function Kh(t,e,n){const s=n.map(c=>c.currentWriteId),i=aa(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];p(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=he(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{fi(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(qe(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Un(t,li(t.transactionQueueTree_,e)),_i(t,t.transactionQueueTree_),Re(t.eventQueue_,e,h);for(let d=0;d<u.length;d++)Ct(u[d])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{_e("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Wn(t,e)}},o)}function Wn(t,e){const n=la(t,e),s=en(n),i=ca(t,n);return Qh(t,i,s),s}function Qh(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=he(n,l.path);let h=!1,u;if(p(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,i=i.concat(qe(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Bh)h=!0,u="maxretry",i=i.concat(qe(t.serverSyncTree_,l.currentWriteId,!0));else{const d=aa(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){ci("transaction failed: Data returned ",f,l.path);let _=ae(f);typeof f=="object"&&f!=null&&Ae(f,".priority")||(_=_.updatePriority(d.getPriority()));const x=l.currentWriteId,R=di(t),S=Xo(_,d,R);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=S,l.currentWriteId=oa(t),o.splice(o.indexOf(x),1),i=i.concat(qo(t.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),i=i.concat(qe(t.serverSyncTree_,x,!0))}else h=!0,u="nodata",i=i.concat(qe(t.serverSyncTree_,l.currentWriteId,!0))}Re(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}Un(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ct(s[a]);_i(t,t.transactionQueueTree_)}function la(t,e){let n,s=t.transactionQueueTree_;for(n=O(e);n!==null&&bt(s)===void 0;)s=li(s,n),e=q(e),n=O(e);return s}function ca(t,e){const n=[];return ua(t,e,n),n.sort((s,i)=>s.order-i.order),n}function ua(t,e,n){const s=bt(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Vn(e,i=>{ua(t,i,n)})}function Un(t,e){const n=bt(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Jo(e,n.length>0?n:void 0)}Vn(e,s=>{Un(t,s)})}function da(t,e){const n=en(la(t,e)),s=li(t.transactionQueueTree_,e);return Nh(s,i=>{is(t,i)}),is(t,s),ea(s,i=>{is(t,i)}),n}function is(t,e){const n=bt(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(p(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(p(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(qe(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Jo(e,void 0):n.length=r+1,Re(t.eventQueue_,en(e),i);for(let o=0;o<s.length;o++)Ct(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Jh(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):_e(`Invalid query segment '${n}' in query '${t}'`)}return e}const yr=function(t,e){const n=Zh(t),s=n.namespace;n.domain==="firebase.com"&&xe(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&xe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||du();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new _o(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new z(n.pathString)}},Zh=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(i=Xh(t.substring(h,u)));const d=Jh(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+re(this.snapshot.exportVal())}}class fa{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return F(this._path)?null:wo(this._path)}get ref(){return new De(this._repo,this._path)}get _queryIdentifier(){const e=nr(this._queryParams),n=$s(e);return n==="{}"?"default":n}get _queryObject(){return nr(this._queryParams)}isEqual(e){if(e=Kt(e),!(e instanceof mi))return!1;const n=this._repo===e._repo,s=Us(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Yu(this._path)}}class De extends mi{constructor(e,n){super(e,n,new js,!1)}get parent(){const e=Io(this._path);return e===null?null:new De(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ht{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new z(e),s=Tn(this.ref,e);return new Ht(this._node.getChild(n),s,J)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ht(i,Tn(this.ref,s),J)))}hasChild(e){const n=new z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Hn(t,e){return t=Kt(t),t._checkNotDeleted("ref"),e!==void 0?Tn(t._root,e):t._root}function Tn(t,e){return t=Kt(t),O(t._path)===null?Ph("child","path",e,!1):sa("child","path",e,!1),new De(t._repo,ee(t._path,e))}function _a(t,e){t=Kt(t),Oh("set",t._path),Dh("set",e,t._path,!1);const n=new Pn;return zh(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class pi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new ha("value",this,new Ht(e.snapshotNode,new De(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new fa(this,e,n):null}matches(e){return e instanceof pi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class gi{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new fa(this,e,n):null}createEvent(e,n){p(e.childName!=null,"Child events should have a childName.");const s=Tn(new De(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new ha(e.type,this,new Ht(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof gi?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function tf(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(h,u)=>{vr(t._repo,t,a),l(h,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new ef(n,r||void 0),a=e==="value"?new pi(o):new gi(e,o);return jh(t._repo,t,a),()=>vr(t._repo,t,a)}function I_(t,e,n,s){return tf(t,"value",e,n,s)}ih(De);uh(De);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="FIREBASE_DATABASE_EMULATOR_HOST",Rs={};let sf=!1;function rf(t,e,n,s){t.repoInfo_=new _o(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function of(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||xe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ce("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=yr(r,i),a=o.repoInfo,l,c;typeof process<"u"&&$i&&(c=$i[nf]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=yr(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const h=i&&l?new lt(lt.OWNER):new Eu(t.name,t.options,e);Mh("Invalid Firebase Database URL",o),F(o.path)||xe("Database URL must point to the root of a Firebase Database (not including a child path).");const u=lf(a,t,h,new bu(t.name,n));return new cf(u,t)}function af(t,e){const n=Rs[e];(!n||n[t.key]!==t)&&xe(`Database ${e}(${t.repoInfo_}) has already been deleted.`),qh(t),delete n[t.key]}function lf(t,e,n,s){let i=Rs[e.name];i||(i={},Rs[e.name]=i);let r=i[t.toURLString()];return r&&xe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Vh(t,sf,n,s),i[t.toURLString()]=r,r}class cf{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Wh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new De(this._repo,U())),this._rootInternal}_delete(){return this._rootInternal!==null&&(af(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xe("Cannot call "+e+" on a deleted database.")}}function uf(t=Yc(),e){const n=zc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Ll("database");s&&df(n,...s)}return n}function df(t,e,n,s={}){t=Kt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&xe("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&xe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new lt(lt.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Fl(s.mockUserToken,t.app.options.projectId);r=new lt(o)}rf(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t){ou(qc),fn(new Mt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return of(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),ot(Bi,Vi,t),ot(Bi,Vi,"esm2017")}Ne.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ne.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};hf();let rn;const ff=new Uint8Array(16);function _f(){if(!rn&&(rn=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!rn))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return rn(ff)}const oe=[];for(let t=0;t<256;++t)oe.push((t+256).toString(16).slice(1));function mf(t,e=0){return oe[t[e+0]]+oe[t[e+1]]+oe[t[e+2]]+oe[t[e+3]]+"-"+oe[t[e+4]]+oe[t[e+5]]+"-"+oe[t[e+6]]+oe[t[e+7]]+"-"+oe[t[e+8]]+oe[t[e+9]]+"-"+oe[t[e+10]]+oe[t[e+11]]+oe[t[e+12]]+oe[t[e+13]]+oe[t[e+14]]+oe[t[e+15]]}const pf=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Cr={randomUUID:pf};function gf(t,e,n){if(Cr.randomUUID&&!e&&!t)return Cr.randomUUID();t=t||{};const s=t.random||(t.rng||_f)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=s[i];return e}return mf(s)}var ma={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(Xa,function(){var n=1e3,s=6e4,i=36e5,r="millisecond",o="second",a="minute",l="hour",c="day",h="week",u="month",d="quarter",f="year",_="date",y="Invalid Date",x=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,R=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,S={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(w){var v=["th","st","nd","rd"],m=w%100;return"["+w+(v[(m-20)%10]||v[m]||v[0])+"]"}},A=function(w,v,m){var E=String(w);return!E||E.length>=v?w:""+Array(v+1-E.length).join(m)+w},D={s:A,z:function(w){var v=-w.utcOffset(),m=Math.abs(v),E=Math.floor(m/60),C=m%60;return(v<=0?"+":"-")+A(E,2,"0")+":"+A(C,2,"0")},m:function w(v,m){if(v.date()<m.date())return-w(m,v);var E=12*(m.year()-v.year())+(m.month()-v.month()),C=v.clone().add(E,u),T=m-C<0,I=v.clone().add(E+(T?-1:1),u);return+(-(E+(m-C)/(T?C-I:I-C))||0)},a:function(w){return w<0?Math.ceil(w)||0:Math.floor(w)},p:function(w){return{M:u,y:f,w:h,d:c,D:_,h:l,m:a,s:o,ms:r,Q:d}[w]||String(w||"").toLowerCase().replace(/s$/,"")},u:function(w){return w===void 0}},L="en",k={};k[L]=S;var K="$isDayjsObject",H=function(w){return w instanceof te||!(!w||!w[K])},$=function w(v,m,E){var C;if(!v)return L;if(typeof v=="string"){var T=v.toLowerCase();k[T]&&(C=T),m&&(k[T]=m,C=T);var I=v.split("-");if(!C&&I.length>1)return w(I[0])}else{var B=v.name;k[B]=v,C=B}return!E&&C&&(L=C),C||!E&&L},V=function(w,v){if(H(w))return w.clone();var m=typeof v=="object"?v:{};return m.date=w,m.args=arguments,new te(m)},P=D;P.l=$,P.i=H,P.w=function(w,v){return V(w,{locale:v.$L,utc:v.$u,x:v.$x,$offset:v.$offset})};var te=function(){function w(m){this.$L=$(m.locale,null,!0),this.parse(m),this.$x=this.$x||m.x||{},this[K]=!0}var v=w.prototype;return v.parse=function(m){this.$d=function(E){var C=E.date,T=E.utc;if(C===null)return new Date(NaN);if(P.u(C))return new Date;if(C instanceof Date)return new Date(C);if(typeof C=="string"&&!/Z$/i.test(C)){var I=C.match(x);if(I){var B=I[2]-1||0,G=(I[7]||"0").substring(0,3);return T?new Date(Date.UTC(I[1],B,I[3]||1,I[4]||0,I[5]||0,I[6]||0,G)):new Date(I[1],B,I[3]||1,I[4]||0,I[5]||0,I[6]||0,G)}}return new Date(C)}(m),this.init()},v.init=function(){var m=this.$d;this.$y=m.getFullYear(),this.$M=m.getMonth(),this.$D=m.getDate(),this.$W=m.getDay(),this.$H=m.getHours(),this.$m=m.getMinutes(),this.$s=m.getSeconds(),this.$ms=m.getMilliseconds()},v.$utils=function(){return P},v.isValid=function(){return this.$d.toString()!==y},v.isSame=function(m,E){var C=V(m);return this.startOf(E)<=C&&C<=this.endOf(E)},v.isAfter=function(m,E){return V(m)<this.startOf(E)},v.isBefore=function(m,E){return this.endOf(E)<V(m)},v.$g=function(m,E,C){return P.u(m)?this[E]:this.set(C,m)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(m,E){var C=this,T=!!P.u(E)||E,I=P.p(m),B=function(He,de){var Oe=P.w(C.$u?Date.UTC(C.$y,de,He):new Date(C.$y,de,He),C);return T?Oe:Oe.endOf(c)},G=function(He,de){return P.w(C.toDate()[He].apply(C.toDate("s"),(T?[0,0,0,0]:[23,59,59,999]).slice(de)),C)},Z=this.$W,ne=this.$M,ue=this.$D,Pe="set"+(this.$u?"UTC":"");switch(I){case f:return T?B(1,0):B(31,11);case u:return T?B(1,ne):B(0,ne+1);case h:var Ue=this.$locale().weekStart||0,Et=(Z<Ue?Z+7:Z)-Ue;return B(T?ue-Et:ue+(6-Et),ne);case c:case _:return G(Pe+"Hours",0);case l:return G(Pe+"Minutes",1);case a:return G(Pe+"Seconds",2);case o:return G(Pe+"Milliseconds",3);default:return this.clone()}},v.endOf=function(m){return this.startOf(m,!1)},v.$set=function(m,E){var C,T=P.p(m),I="set"+(this.$u?"UTC":""),B=(C={},C[c]=I+"Date",C[_]=I+"Date",C[u]=I+"Month",C[f]=I+"FullYear",C[l]=I+"Hours",C[a]=I+"Minutes",C[o]=I+"Seconds",C[r]=I+"Milliseconds",C)[T],G=T===c?this.$D+(E-this.$W):E;if(T===u||T===f){var Z=this.clone().set(_,1);Z.$d[B](G),Z.init(),this.$d=Z.set(_,Math.min(this.$D,Z.daysInMonth())).$d}else B&&this.$d[B](G);return this.init(),this},v.set=function(m,E){return this.clone().$set(m,E)},v.get=function(m){return this[P.p(m)]()},v.add=function(m,E){var C,T=this;m=Number(m);var I=P.p(E),B=function(ne){var ue=V(T);return P.w(ue.date(ue.date()+Math.round(ne*m)),T)};if(I===u)return this.set(u,this.$M+m);if(I===f)return this.set(f,this.$y+m);if(I===c)return B(1);if(I===h)return B(7);var G=(C={},C[a]=s,C[l]=i,C[o]=n,C)[I]||1,Z=this.$d.getTime()+m*G;return P.w(Z,this)},v.subtract=function(m,E){return this.add(-1*m,E)},v.format=function(m){var E=this,C=this.$locale();if(!this.isValid())return C.invalidDate||y;var T=m||"YYYY-MM-DDTHH:mm:ssZ",I=P.z(this),B=this.$H,G=this.$m,Z=this.$M,ne=C.weekdays,ue=C.months,Pe=C.meridiem,Ue=function(de,Oe,wt,tn){return de&&(de[Oe]||de(E,T))||wt[Oe].slice(0,tn)},Et=function(de){return P.s(B%12||12,de,"0")},He=Pe||function(de,Oe,wt){var tn=de<12?"AM":"PM";return wt?tn.toLowerCase():tn};return T.replace(R,function(de,Oe){return Oe||function(wt){switch(wt){case"YY":return String(E.$y).slice(-2);case"YYYY":return P.s(E.$y,4,"0");case"M":return Z+1;case"MM":return P.s(Z+1,2,"0");case"MMM":return Ue(C.monthsShort,Z,ue,3);case"MMMM":return Ue(ue,Z);case"D":return E.$D;case"DD":return P.s(E.$D,2,"0");case"d":return String(E.$W);case"dd":return Ue(C.weekdaysMin,E.$W,ne,2);case"ddd":return Ue(C.weekdaysShort,E.$W,ne,3);case"dddd":return ne[E.$W];case"H":return String(B);case"HH":return P.s(B,2,"0");case"h":return Et(1);case"hh":return Et(2);case"a":return He(B,G,!0);case"A":return He(B,G,!1);case"m":return String(G);case"mm":return P.s(G,2,"0");case"s":return String(E.$s);case"ss":return P.s(E.$s,2,"0");case"SSS":return P.s(E.$ms,3,"0");case"Z":return I}return null}(de)||I.replace(":","")})},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(m,E,C){var T,I=this,B=P.p(E),G=V(m),Z=(G.utcOffset()-this.utcOffset())*s,ne=this-G,ue=function(){return P.m(I,G)};switch(B){case f:T=ue()/12;break;case u:T=ue();break;case d:T=ue()/3;break;case h:T=(ne-Z)/6048e5;break;case c:T=(ne-Z)/864e5;break;case l:T=ne/i;break;case a:T=ne/s;break;case o:T=ne/n;break;default:T=ne}return C?T:P.a(T)},v.daysInMonth=function(){return this.endOf(u).$D},v.$locale=function(){return k[this.$L]},v.locale=function(m,E){if(!m)return this.$L;var C=this.clone(),T=$(m,E,!0);return T&&(C.$L=T),C},v.clone=function(){return P.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},w}(),Q=te.prototype;return V.prototype=Q,[["$ms",r],["$s",o],["$m",a],["$H",l],["$W",c],["$M",u],["$y",f],["$D",_]].forEach(function(w){Q[w[1]]=function(v){return this.$g(v,w[0],w[1])}}),V.extend=function(w,v){return w.$i||(w(v,te,V),w.$i=!0),V},V.locale=$,V.isDayjs=H,V.unix=function(w){return V(1e3*w)},V.en=k[L],V.Ls=k,V.p={},V})})(ma);var vf=ma.exports;const br=Ja(vf),yf={apiKey:"AIzaSyBsrh8MhMPE7stGQf7wt7m7MQ7rstMNt8M",authDomain:"sample-project-9e4c2.firebaseapp.com",databaseURL:"https://sample-project-9e4c2-default-rtdb.firebaseio.com",projectId:"sample-project-9e4c2",storageBucket:"sample-project-9e4c2.appspot.com",messagingSenderId:"199794781922",appId:"1:199794781922:web:44e0854712ce3ab58278bb"},Cf=Kr(yf),zn=uf(Cf),T_=Hn(zn,"chatroom"),N_=Hn(zn,"username"),x_=t=>{_a(Hn(zn,"username"),t)},R_=(t,e)=>{_a(Hn(zn,`chatroom/${br().unix()}`),{key:gf(),username:t,message:e,time:br().unix()})},pa=W({border:[Boolean,Number,String]},"border");function ga(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ke();return{borderClasses:b(()=>{const s=dt(t)?t.value:t.border,i=[];if(s===!0||s==="")i.push(`${e}--border`);else if(typeof s=="string"||s===0)for(const r of String(s).split(" "))i.push(`border-${r}`);return i})}}const bf=[null,"default","comfortable","compact"],vi=W({density:{type:String,default:"default",validator:t=>bf.includes(t)}},"density");function yi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ke();return{densityClasses:b(()=>`${e}--density-${t.density}`)}}const va=W({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function ya(t){return{elevationClasses:b(()=>{const n=dt(t)?t.value:t.elevation,s=[];return n==null||s.push(`elevation-${n}`),s})}}const Gn=W({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function jn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ke();return{roundedClasses:b(()=>{const s=dt(t)?t.value:t.rounded,i=dt(t)?t.value:t.tile,r=[];if(s===!0||s==="")r.push(`${e}--rounded`);else if(typeof s=="string"||s===0)for(const o of String(s).split(" "))r.push(`rounded-${o}`);else i&&r.push("rounded-0");return r})}}function Ci(t){return Nr(()=>{const e=[],n={};if(t.value.background)if(wi(t.value.background)){if(n.backgroundColor=t.value.background,!t.value.text&&Za(t.value.background)){const s=el(t.value.background);if(s.a==null||s.a===1){const i=tl(s);n.color=i,n.caretColor=i}}}else e.push(`bg-${t.value.background}`);return t.value.text&&(wi(t.value.text)?(n.color=t.value.text,n.caretColor=t.value.text):e.push(`text-${t.value.text}`)),{colorClasses:e,colorStyles:n}})}function pt(t,e){const n=b(()=>({text:dt(t)?t.value:e?t[e]:null})),{colorClasses:s,colorStyles:i}=Ci(n);return{textColorClasses:s,textColorStyles:i}}function ks(t,e){const n=b(()=>({background:dt(t)?t.value:e?t[e]:null})),{colorClasses:s,colorStyles:i}=Ci(n);return{backgroundColorClasses:s,backgroundColorStyles:i}}const Ef=["elevated","flat","tonal","outlined","text","plain"];function wf(t,e){return g(xt,null,[t&&g("span",{key:"overlay",class:`${e}__overlay`},null),g("span",{key:"underlay",class:`${e}__underlay`},null)])}const Ca=W({color:String,variant:{type:String,default:"elevated",validator:t=>Ef.includes(t)}},"variant");function Sf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ke();const n=b(()=>{const{variant:r}=ln(t);return`${e}--variant-${r}`}),{colorClasses:s,colorStyles:i}=Ci(b(()=>{const{variant:r,color:o}=ln(t);return{[["elevated","flat"].includes(r)?"background":"text"]:o}}));return{colorClasses:s,colorStyles:i,variantClasses:n}}const ba=W({divided:Boolean,...pa(),...ye(),...vi(),...va(),...Gn(),...jt(),...tt(),...Ca()},"VBtnGroup"),Er=le()({name:"VBtnGroup",props:ba(),setup(t,e){let{slots:n}=e;const{themeClasses:s}=gt(t),{densityClasses:i}=yi(t),{borderClasses:r}=ga(t),{elevationClasses:o}=ya(t),{roundedClasses:a}=jn(t);xr({VBtn:{height:"auto",color:Se(t,"color"),density:Se(t,"density"),flat:!0,variant:Se(t,"variant")}}),pe(()=>g(t.tag,{class:["v-btn-group",{"v-btn-group--divided":t.divided},s.value,r.value,i.value,o.value,a.value,t.class],style:t.style},n))}}),If=W({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Tf=W({value:null,disabled:Boolean,selectedClass:String},"group-item");function Nf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const s=Ps("useGroupItem");if(!s)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=xn();Rr(Symbol.for(`${e.description}:id`),i);const r=kr(e,null);if(!r){if(!n)return r;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const o=Se(t,"value"),a=b(()=>!!(r.disabled.value||t.disabled));r.register({id:i,value:o,disabled:a},s),Rn(()=>{r.unregister(i)});const l=b(()=>r.isSelected(i)),c=b(()=>l.value&&[r.selectedClass.value,t.selectedClass]);return Me(l,h=>{s.emit("group:selected",{value:h})},{flush:"sync"}),{id:i,isSelected:l,toggle:()=>r.select(i,!l.value),select:h=>r.select(i,h),selectedClass:c,value:o,disabled:a,group:r}}function xf(t,e){let n=!1;const s=nl([]),i=qt(t,"modelValue",[],d=>d==null?[]:Ea(s,Rt(d)),d=>{const f=kf(s,d);return t.multiple?f:f[0]}),r=Ps("useGroup");function o(d,f){const _=d,y=Symbol.for(`${e.description}:id`),R=sl(y,r==null?void 0:r.vnode).indexOf(f);ln(_.value)==null&&(_.value=R),R>-1?s.splice(R,0,_):s.push(_)}function a(d){if(n)return;l();const f=s.findIndex(_=>_.id===d);s.splice(f,1)}function l(){const d=s.find(f=>!f.disabled);d&&t.mandatory==="force"&&!i.value.length&&(i.value=[d.id])}Ar(()=>{l()}),Rn(()=>{n=!0});function c(d,f){const _=s.find(y=>y.id===d);if(!(f&&(_!=null&&_.disabled)))if(t.multiple){const y=i.value.slice(),x=y.findIndex(S=>S===d),R=~x;if(f=f??!R,R&&t.mandatory&&y.length<=1||!R&&t.max!=null&&y.length+1>t.max)return;x<0&&f?y.push(d):x>=0&&!f&&y.splice(x,1),i.value=y}else{const y=i.value.includes(d);if(t.mandatory&&y)return;i.value=f??!y?[d]:[]}}function h(d){if(t.multiple,i.value.length){const f=i.value[0],_=s.findIndex(R=>R.id===f);let y=(_+d)%s.length,x=s[y];for(;x.disabled&&y!==_;)y=(y+d)%s.length,x=s[y];if(x.disabled)return;i.value=[s[y].id]}else{const f=s.find(_=>!_.disabled);f&&(i.value=[f.id])}}const u={register:o,unregister:a,selected:i,select:c,disabled:Se(t,"disabled"),prev:()=>h(s.length-1),next:()=>h(1),isSelected:d=>i.value.includes(d),selectedClass:b(()=>t.selectedClass),items:b(()=>s),getItemIndex:d=>Rf(s,d)};return Rr(e,u),u}function Rf(t,e){const n=Ea(t,[e]);return n.length?t.findIndex(s=>s.id===n[0]):-1}function Ea(t,e){const n=[];return e.forEach(s=>{const i=t.find(o=>Dr(s,o.value)),r=t[s];(i==null?void 0:i.value)!=null?n.push(i.id):r!=null&&n.push(r.id)}),n}function kf(t,e){const n=[];return e.forEach(s=>{const i=t.findIndex(r=>r.id===s);if(~i){const r=t[i];n.push(r.value!=null?r.value:i)}}),n}const wa=Symbol.for("vuetify:v-btn-toggle"),Af=W({...ba(),...If()},"VBtnToggle");le()({name:"VBtnToggle",props:Af(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isSelected:s,next:i,prev:r,select:o,selected:a}=xf(t,wa);return pe(()=>{const l=Er.filterProps(t);return g(Er,rt({class:["v-btn-toggle",t.class]},l,{style:t.style}),{default:()=>{var c;return[(c=n.default)==null?void 0:c.call(n,{isSelected:s,next:i,prev:r,select:o,selected:a})]}})}),{next:i,prev:r,select:o}}});const Df=W({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),rs=le(!1)({name:"VDefaultsProvider",props:Df(),setup(t,e){let{slots:n}=e;const{defaults:s,disabled:i,reset:r,root:o,scoped:a}=il(t);return xr(s,{reset:r,root:o,scoped:a,disabled:i}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}}),Pf=["x-small","small","default","large","x-large"],bi=W({size:{type:[String,Number],default:"default"}},"size");function Ei(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ke();return Nr(()=>{let n,s;return ls(Pf,t.size)?n=`${e}--size-${t.size}`:t.size&&(s={width:X(t.size),height:X(t.size)}),{sizeClasses:n,sizeStyles:s}})}const Of=W({color:String,start:Boolean,end:Boolean,icon:Le,...ye(),...bi(),...jt({tag:"i"}),...tt()},"VIcon"),an=le()({name:"VIcon",props:Of(),setup(t,e){let{attrs:n,slots:s}=e;const i=Ie(),{themeClasses:r}=gt(t),{iconData:o}=rl(b(()=>i.value||t.icon)),{sizeClasses:a}=Ei(t),{textColorClasses:l,textColorStyles:c}=pt(Se(t,"color"));return pe(()=>{var u,d;const h=(u=s.default)==null?void 0:u.call(s);return h&&(i.value=(d=ol(h).filter(f=>f.type===al&&f.children&&typeof f.children=="string")[0])==null?void 0:d.children),g(o.value.component,{tag:t.tag,icon:o.value.icon,class:["v-icon","notranslate",r.value,a.value,l.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":t.start,"v-icon--end":t.end},t.class],style:[a.value?void 0:{fontSize:X(t.size),height:X(t.size),width:X(t.size)},c.value,t.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[h]})}),{}}});function Sa(t,e){const n=Ie(),s=cs(!1);if(Pr){const i=new IntersectionObserver(r=>{t==null||t(r,i),s.value=!!r.find(o=>o.isIntersecting)},e);Rn(()=>{i.disconnect()}),Me(n,(r,o)=>{o&&(i.unobserve(o),s.value=!1),r&&i.observe(r)},{flush:"post"})}return{intersectionRef:n,isIntersecting:s}}const Mf=W({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...ye(),...bi(),...jt({tag:"div"}),...tt()},"VProgressCircular"),Lf=le()({name:"VProgressCircular",props:Mf(),setup(t,e){let{slots:n}=e;const s=20,i=2*Math.PI*s,r=Ie(),{themeClasses:o}=gt(t),{sizeClasses:a,sizeStyles:l}=Ei(t),{textColorClasses:c,textColorStyles:h}=pt(Se(t,"color")),{textColorClasses:u,textColorStyles:d}=pt(Se(t,"bgColor")),{intersectionRef:f,isIntersecting:_}=Sa(),{resizeRef:y,contentRect:x}=ll(),R=b(()=>Math.max(0,Math.min(100,parseFloat(t.modelValue)))),S=b(()=>Number(t.width)),A=b(()=>l.value?Number(t.size):x.value?x.value.width:Math.max(S.value,32)),D=b(()=>s/(1-S.value/A.value)*2),L=b(()=>S.value/A.value*D.value),k=b(()=>X((100-R.value)/100*i));return cl(()=>{f.value=r.value,y.value=r.value}),pe(()=>g(t.tag,{ref:r,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!t.indeterminate,"v-progress-circular--visible":_.value,"v-progress-circular--disable-shrink":t.indeterminate==="disable-shrink"},o.value,a.value,c.value,t.class],style:[l.value,h.value,t.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t.indeterminate?void 0:R.value},{default:()=>[g("svg",{style:{transform:`rotate(calc(-90deg + ${Number(t.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${D.value} ${D.value}`},[g("circle",{class:["v-progress-circular__underlay",u.value],style:d.value,fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":L.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),g("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":L.value,"stroke-dasharray":i,"stroke-dashoffset":k.value},null)]),n.default&&g("div",{class:"v-progress-circular__content"},[n.default({value:R.value})])]})),{}}}),Ia=W({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ta(t){return{dimensionStyles:b(()=>({height:X(t.height),maxHeight:X(t.maxHeight),maxWidth:X(t.maxWidth),minHeight:X(t.minHeight),minWidth:X(t.minWidth),width:X(t.width)}))}}const wr={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Na=W({location:String},"location");function xa(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:s}=kn();return{locationStyles:b(()=>{if(!t.location)return{};const{side:r,align:o}=wl(t.location.split(" ").length>1?t.location:`${t.location} center`,s.value);function a(c){return n?n(c):0}const l={};return r!=="center"&&(e?l[wr[r]]=`calc(100% - ${a(r)}px)`:l[r]=0),o!=="center"?e?l[wr[o]]=`calc(100% - ${a(o)}px)`:l[o]=0:(r==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),l})}}const Ff=W({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...ye(),...Na({location:"top"}),...Gn(),...jt(),...tt()},"VProgressLinear"),$f=le()({name:"VProgressLinear",props:Ff(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const s=qt(t,"modelValue"),{isRtl:i,rtlClasses:r}=kn(),{themeClasses:o}=gt(t),{locationStyles:a}=xa(t),{textColorClasses:l,textColorStyles:c}=pt(t,"color"),{backgroundColorClasses:h,backgroundColorStyles:u}=ks(b(()=>t.bgColor||t.color)),{backgroundColorClasses:d,backgroundColorStyles:f}=ks(t,"color"),{roundedClasses:_}=jn(t),{intersectionRef:y,isIntersecting:x}=Sa(),R=b(()=>parseInt(t.max,10)),S=b(()=>parseInt(t.height,10)),A=b(()=>parseFloat(t.bufferValue)/R.value*100),D=b(()=>parseFloat(s.value)/R.value*100),L=b(()=>i.value!==t.reverse),k=b(()=>t.indeterminate?"fade-transition":"slide-x-transition"),K=b(()=>t.bgOpacity==null?t.bgOpacity:parseFloat(t.bgOpacity));function H($){if(!y.value)return;const{left:V,right:P,width:te}=y.value.getBoundingClientRect(),Q=L.value?te-$.clientX+(P-te):$.clientX-V;s.value=Math.round(Q/te*R.value)}return pe(()=>g(t.tag,{ref:y,class:["v-progress-linear",{"v-progress-linear--absolute":t.absolute,"v-progress-linear--active":t.active&&x.value,"v-progress-linear--reverse":L.value,"v-progress-linear--rounded":t.rounded,"v-progress-linear--rounded-bar":t.roundedBar,"v-progress-linear--striped":t.striped},_.value,o.value,r.value,t.class],style:[{bottom:t.location==="bottom"?0:void 0,top:t.location==="top"?0:void 0,height:t.active?X(S.value):0,"--v-progress-linear-height":X(S.value),...a.value},t.style],role:"progressbar","aria-hidden":t.active?"false":"true","aria-valuemin":"0","aria-valuemax":t.max,"aria-valuenow":t.indeterminate?void 0:D.value,onClick:t.clickable&&H},{default:()=>[t.stream&&g("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...c.value,[L.value?"left":"right"]:X(-S.value),borderTop:`${X(S.value/2)} dotted`,opacity:K.value,top:`calc(50% - ${X(S.value/4)})`,width:X(100-A.value,"%"),"--v-progress-linear-stream-to":X(S.value*(L.value?1:-1))}},null),g("div",{class:["v-progress-linear__background",h.value],style:[u.value,{opacity:K.value,width:X(t.stream?A.value:100,"%")}]},null),g(An,{name:k.value},{default:()=>[t.indeterminate?g("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map($=>g("div",{key:$,class:["v-progress-linear__indeterminate",$,d.value],style:f.value},null))]):g("div",{class:["v-progress-linear__determinate",d.value],style:[f.value,{width:X(D.value,"%")}]},null)]}),n.default&&g("div",{class:"v-progress-linear__content"},[n.default({value:D.value,buffer:A.value})])]})),{}}}),Ra=W({loading:[Boolean,String]},"loader");function ka(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ke();return{loaderClasses:b(()=>({[`${e}--loading`]:t.loading}))}}function Bf(t,e){var s;let{slots:n}=e;return g("div",{class:`${t.name}__loader`},[((s=n.default)==null?void 0:s.call(n,{color:t.color,isActive:t.active}))||g($f,{absolute:t.absolute,active:t.active,color:t.color,height:"2",indeterminate:!0},null)])}const Vf=["static","relative","fixed","absolute","sticky"],Wf=W({position:{type:String,validator:t=>Vf.includes(t)}},"position");function Uf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ke();return{positionClasses:b(()=>t.position?`${e}--${t.position}`:void 0)}}function Hf(){const t=Ps("useRoute");return b(()=>{var e;return(e=t==null?void 0:t.proxy)==null?void 0:e.$route})}function zf(t,e){const n=ul("RouterLink"),s=b(()=>!!(t.href||t.to)),i=b(()=>(s==null?void 0:s.value)||Si(e,"click")||Si(t,"click"));if(typeof n=="string")return{isLink:s,isClickable:i,href:Se(t,"href")};const r=t.to?n.useLink(t):void 0,o=Hf();return{isLink:s,isClickable:i,route:r==null?void 0:r.route,navigate:r==null?void 0:r.navigate,isActive:r&&b(()=>{var a,l,c;return t.exact?o.value?((c=r.isExactActive)==null?void 0:c.value)&&Dr(r.route.value.query,o.value.query):(l=r.isExactActive)==null?void 0:l.value:(a=r.isActive)==null?void 0:a.value}),href:b(()=>t.to?r==null?void 0:r.route.value.href:t.href)}}const Gf=W({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function jf(t,e){Me(()=>{var n;return(n=t.isActive)==null?void 0:n.value},n=>{t.isLink.value&&n&&e&&cn(()=>{e(!0)})},{immediate:!0})}const As=Symbol("rippleStop"),qf=80;function Sr(t,e){t.style.transform=e,t.style.webkitTransform=e}function Ds(t){return t.constructor.name==="TouchEvent"}function Aa(t){return t.constructor.name==="KeyboardEvent"}const Yf=function(t,e){var u;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,i=0;if(!Aa(t)){const d=e.getBoundingClientRect(),f=Ds(t)?t.touches[t.touches.length-1]:t;s=f.clientX-d.left,i=f.clientY-d.top}let r=0,o=.3;(u=e._ripple)!=null&&u.circle?(o=.15,r=e.clientWidth/2,r=n.center?r:r+Math.sqrt((s-r)**2+(i-r)**2)/4):r=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const a=`${(e.clientWidth-r*2)/2}px`,l=`${(e.clientHeight-r*2)/2}px`,c=n.center?a:`${s-r}px`,h=n.center?l:`${i-r}px`;return{radius:r,scale:o,x:c,y:h,centerX:a,centerY:l}},Nn={show(t,e){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=e==null?void 0:e._ripple)!=null&&f.enabled))return;const s=document.createElement("span"),i=document.createElement("span");s.appendChild(i),s.className="v-ripple__container",n.class&&(s.className+=` ${n.class}`);const{radius:r,scale:o,x:a,y:l,centerX:c,centerY:h}=Yf(t,e,n),u=`${r*2}px`;i.className="v-ripple__animation",i.style.width=u,i.style.height=u,e.appendChild(s);const d=window.getComputedStyle(e);d&&d.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),Sr(i,`translate(${a}, ${l}) scale3d(${o},${o},${o})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),Sr(i,`translate(${c}, ${h}) scale3d(1,1,1)`)},0)},hide(t){var r;if(!((r=t==null?void 0:t._ripple)!=null&&r.enabled))return;const e=t.getElementsByClassName("v-ripple__animation");if(e.length===0)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const s=performance.now()-Number(n.dataset.activated),i=Math.max(250-s,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var a;t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),((a=n.parentNode)==null?void 0:a.parentNode)===t&&t.removeChild(n.parentNode)},300)},i)}};function Da(t){return typeof t>"u"||!!t}function zt(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[As])){if(t[As]=!0,Ds(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||Aa(t),n._ripple.class&&(e.class=n._ripple.class),Ds(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{Nn.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var s;(s=n==null?void 0:n._ripple)!=null&&s.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},qf)}else Nn.show(t,n,e)}}function Ir(t){t[As]=!0}function ge(t){const e=t.currentTarget;if(e!=null&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{ge(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),Nn.hide(e)}}function Pa(t){const e=t.currentTarget;e!=null&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let Gt=!1;function Oa(t){!Gt&&(t.keyCode===Ii.enter||t.keyCode===Ii.space)&&(Gt=!0,zt(t))}function Ma(t){Gt=!1,ge(t)}function La(t){Gt&&(Gt=!1,ge(t))}function Fa(t,e,n){const{value:s,modifiers:i}=e,r=Da(s);if(r||Nn.hide(t),t._ripple=t._ripple??{},t._ripple.enabled=r,t._ripple.centered=i.center,t._ripple.circle=i.circle,dl(s)&&s.class&&(t._ripple.class=s.class),r&&!n){if(i.stop){t.addEventListener("touchstart",Ir,{passive:!0}),t.addEventListener("mousedown",Ir);return}t.addEventListener("touchstart",zt,{passive:!0}),t.addEventListener("touchend",ge,{passive:!0}),t.addEventListener("touchmove",Pa,{passive:!0}),t.addEventListener("touchcancel",ge),t.addEventListener("mousedown",zt),t.addEventListener("mouseup",ge),t.addEventListener("mouseleave",ge),t.addEventListener("keydown",Oa),t.addEventListener("keyup",Ma),t.addEventListener("blur",La),t.addEventListener("dragstart",ge,{passive:!0})}else!r&&n&&$a(t)}function $a(t){t.removeEventListener("mousedown",zt),t.removeEventListener("touchstart",zt),t.removeEventListener("touchend",ge),t.removeEventListener("touchmove",Pa),t.removeEventListener("touchcancel",ge),t.removeEventListener("mouseup",ge),t.removeEventListener("mouseleave",ge),t.removeEventListener("keydown",Oa),t.removeEventListener("keyup",Ma),t.removeEventListener("dragstart",ge),t.removeEventListener("blur",La)}function Kf(t,e){Fa(t,e,!1)}function Qf(t){delete t._ripple,$a(t)}function Xf(t,e){if(e.value===e.oldValue)return;const n=Da(e.oldValue);Fa(t,e,n)}const Jf={mounted:Kf,unmounted:Qf,updated:Xf},Zf=W({active:{type:Boolean,default:void 0},symbol:{type:null,default:wa},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Le,appendIcon:Le,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...pa(),...ye(),...vi(),...Ia(),...va(),...Tf(),...Ra(),...Na(),...Wf(),...Gn(),...Gf(),...bi(),...jt({tag:"button"}),...tt(),...Ca({variant:"elevated"})},"VBtn"),k_=le()({name:"VBtn",directives:{Ripple:Jf},props:Zf(),emits:{"group:selected":t=>!0},setup(t,e){let{attrs:n,slots:s}=e;const{themeClasses:i}=gt(t),{borderClasses:r}=ga(t),{colorClasses:o,colorStyles:a,variantClasses:l}=Sf(t),{densityClasses:c}=yi(t),{dimensionStyles:h}=Ta(t),{elevationClasses:u}=ya(t),{loaderClasses:d}=ka(t),{locationStyles:f}=xa(t),{positionClasses:_}=Uf(t),{roundedClasses:y}=jn(t),{sizeClasses:x,sizeStyles:R}=Ei(t),S=Nf(t,t.symbol,!1),A=zf(t,n),D=b(()=>{var $;return t.active!==void 0?t.active:A.isLink.value?($=A.isActive)==null?void 0:$.value:S==null?void 0:S.isSelected.value}),L=b(()=>(S==null?void 0:S.disabled.value)||t.disabled),k=b(()=>t.variant==="elevated"&&!(t.disabled||t.flat||t.border)),K=b(()=>{if(!(t.value===void 0||typeof t.value=="symbol"))return Object(t.value)===t.value?JSON.stringify(t.value,null,0):t.value});function H($){var V;L.value||A.isLink.value&&($.metaKey||$.ctrlKey||$.shiftKey||$.button!==0||n.target==="_blank")||((V=A.navigate)==null||V.call(A,$),S==null||S.toggle())}return jf(A,S==null?void 0:S.select),pe(()=>{var w,v;const $=A.isLink.value?"a":t.tag,V=!!(t.prependIcon||s.prepend),P=!!(t.appendIcon||s.append),te=!!(t.icon&&t.icon!==!0),Q=(S==null?void 0:S.isSelected.value)&&(!A.isLink.value||((w=A.isActive)==null?void 0:w.value))||!S||((v=A.isActive)==null?void 0:v.value);return Dn(g($,{type:$==="a"?void 0:"button",class:["v-btn",S==null?void 0:S.selectedClass.value,{"v-btn--active":D.value,"v-btn--block":t.block,"v-btn--disabled":L.value,"v-btn--elevated":k.value,"v-btn--flat":t.flat,"v-btn--icon":!!t.icon,"v-btn--loading":t.loading,"v-btn--slim":t.slim,"v-btn--stacked":t.stacked},i.value,r.value,Q?o.value:void 0,c.value,u.value,d.value,_.value,y.value,x.value,l.value,t.class],style:[Q?a.value:void 0,h.value,f.value,R.value,t.style],disabled:L.value||void 0,href:A.href.value,onClick:H,value:K.value},{default:()=>{var m;return[wf(!0,"v-btn"),!t.icon&&V&&g("span",{key:"prepend",class:"v-btn__prepend"},[s.prepend?g(rs,{key:"prepend-defaults",disabled:!t.prependIcon,defaults:{VIcon:{icon:t.prependIcon}}},s.prepend):g(an,{key:"prepend-icon",icon:t.prependIcon},null)]),g("span",{class:"v-btn__content","data-no-activator":""},[!s.default&&te?g(an,{key:"content-icon",icon:t.icon},null):g(rs,{key:"content-defaults",disabled:!te,defaults:{VIcon:{icon:t.icon}}},{default:()=>{var E;return[((E=s.default)==null?void 0:E.call(s))??t.text]}})]),!t.icon&&P&&g("span",{key:"append",class:"v-btn__append"},[s.append?g(rs,{key:"append-defaults",disabled:!t.appendIcon,defaults:{VIcon:{icon:t.appendIcon}}},s.append):g(an,{key:"append-icon",icon:t.appendIcon},null)]),!!t.loading&&g("span",{key:"loader",class:"v-btn__loader"},[((m=s.loader)==null?void 0:m.call(s))??g(Lf,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Or("ripple"),!L.value&&t.ripple,null]])}),{group:S}}});function e_(t){return{aspectStyles:b(()=>{const e=Number(t.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const t_=W({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...ye(),...Ia()},"VResponsive"),A_=le()({name:"VResponsive",props:t_(),setup(t,e){let{slots:n}=e;const{aspectStyles:s}=e_(t),{dimensionStyles:i}=Ta(t);return pe(()=>{var r;return g("div",{class:["v-responsive",{"v-responsive--inline":t.inline},t.class],style:[i.value,t.style]},[g("div",{class:"v-responsive__sizer",style:s.value},null),(r=n.additional)==null?void 0:r.call(n),n.default&&g("div",{class:["v-responsive__content",t.contentClass]},[n.default()])])}),{}}}),n_=W({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function ve(t,e,n){return le()({name:t,props:n_({mode:n,origin:e}),setup(s,i){let{slots:r}=i;const o={onBeforeEnter(a){s.origin&&(a.style.transformOrigin=s.origin)},onLeave(a){if(s.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:h,offsetHeight:u}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${l}px`,a.style.left=`${c}px`,a.style.width=`${h}px`,a.style.height=`${u}px`}s.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(s.leaveAbsolute&&(a!=null&&a._transitionInitialStyles)){const{position:l,top:c,left:h,width:u,height:d}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=l||"",a.style.top=c||"",a.style.left=h||"",a.style.width=u||"",a.style.height=d||""}}};return()=>{const a=s.group?hl:An;return Os(a,{name:s.disabled?"":t,css:!s.disabled,...s.group?void 0:{mode:s.mode},...s.disabled?{}:o},r.default)}}})}function Ba(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return le()({name:t,props:{mode:{type:String,default:n},disabled:Boolean},setup(s,i){let{slots:r}=i;return()=>Os(An,{name:s.disabled?"":t,css:!s.disabled,...s.disabled?{}:e},r.default)}})}function Va(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",s=fl(`offset-${n}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[n]:o.style[n]}},onEnter(o){const a=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const l=`${o[s]}px`;o.style[n]="0",o.offsetHeight,o.style.transition=a.transition,t&&o._parent&&o._parent.classList.add(t),requestAnimationFrame(()=>{o.style[n]=l})},onAfterEnter:r,onEnterCancelled:r,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[n]:o.style[n]},o.style.overflow="hidden",o.style[n]=`${o[s]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[n]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(o){t&&o._parent&&o._parent.classList.remove(t),r(o)}function r(o){const a=o._initialStyle[n];o.style.overflow=o._initialStyle.overflow,a!=null&&(o.style[n]=a),delete o._initialStyle}}ve("fab-transition","center center","out-in");ve("dialog-bottom-transition");ve("dialog-top-transition");const D_=ve("fade-transition");ve("scale-transition");ve("scroll-x-transition");ve("scroll-x-reverse-transition");ve("scroll-y-transition");ve("scroll-y-reverse-transition");ve("slide-x-transition");ve("slide-x-reverse-transition");const Wa=ve("slide-y-transition");ve("slide-y-reverse-transition");Ba("expand-transition",Va());const s_=Ba("expand-x-transition",Va("",!0)),Ua=W({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:t=>t!==!0}},"transition"),Ha=(t,e)=>{let{slots:n}=e;const{transition:s,disabled:i,...r}=t,{component:o=An,...a}=typeof s=="object"?s:{};return Os(o,rt(typeof s=="string"?{name:i?"":s}:a,r,{disabled:i}),n)},i_=W({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...ye(),...Ua({transition:{component:Wa}})},"VCounter"),r_=le()({name:"VCounter",functional:!0,props:i_(),setup(t,e){let{slots:n}=e;const s=b(()=>t.max?`${t.value} / ${t.max}`:String(t.value));return pe(()=>g(Ha,{transition:t.transition},{default:()=>[Dn(g("div",{class:["v-counter",t.class],style:t.style},[n.default?n.default({counter:s.value,max:t.max,value:t.value}):s.value]),[[Mr,t.active]])]})),{}}}),o_=W({text:String,onClick:Ye(),...ye(),...tt()},"VLabel"),a_=le()({name:"VLabel",props:o_(),setup(t,e){let{slots:n}=e;return pe(()=>{var s;return g("label",{class:["v-label",{"v-label--clickable":!!t.onClick},t.class],style:t.style,onClick:t.onClick},[t.text,(s=n.default)==null?void 0:s.call(n)])}),{}}}),l_=W({floating:Boolean,...ye()},"VFieldLabel"),on=le()({name:"VFieldLabel",props:l_(),setup(t,e){let{slots:n}=e;return pe(()=>g(a_,{class:["v-field-label",{"v-field-label--floating":t.floating},t.class],style:t.style,"aria-hidden":t.floating||void 0},n)),{}}});function za(t){const{t:e}=_l();function n(s){let{name:i}=s;const r={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[i],o=t[`onClick:${i}`],a=o&&r?e(`$vuetify.input.${r}`,t.label??""):void 0;return g(an,{icon:t[`${i}Icon`],"aria-label":a,onClick:o},null)}return{InputIcon:n}}const Ga=W({focused:Boolean,"onUpdate:focused":Ye()},"focus");function ja(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ke();const n=qt(t,"focused"),s=b(()=>({[`${e}--focused`]:n.value}));function i(){n.value=!0}function r(){n.value=!1}return{focusClasses:s,isFocused:n,focus:i,blur:r}}const c_=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],qa=W({appendInnerIcon:Le,bgColor:String,clearable:Boolean,clearIcon:{type:Le,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:Le,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:t=>c_.includes(t)},"onClick:clear":Ye(),"onClick:appendInner":Ye(),"onClick:prependInner":Ye(),...ye(),...Ra(),...Gn(),...tt()},"VField"),Ya=le()({name:"VField",inheritAttrs:!1,props:{id:String,...Ga(),...qa()},emits:{"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,e){let{attrs:n,emit:s,slots:i}=e;const{themeClasses:r}=gt(t),{loaderClasses:o}=ka(t),{focusClasses:a,isFocused:l,focus:c,blur:h}=ja(t),{InputIcon:u}=za(t),{roundedClasses:d}=jn(t),{rtlClasses:f}=kn(),_=b(()=>t.dirty||t.active),y=b(()=>!t.singleLine&&!!(t.label||i.label)),x=xn(),R=b(()=>t.id||`input-${x}`),S=b(()=>`${R.value}-messages`),A=Ie(),D=Ie(),L=Ie(),k=b(()=>["plain","underlined"].includes(t.variant)),{backgroundColorClasses:K,backgroundColorStyles:H}=ks(Se(t,"bgColor")),{textColorClasses:$,textColorStyles:V}=pt(b(()=>t.error||t.disabled?void 0:_.value&&l.value?t.color:t.baseColor));Me(_,Q=>{if(y.value){const w=A.value.$el,v=D.value.$el;requestAnimationFrame(()=>{const m=Sl(w),E=v.getBoundingClientRect(),C=E.x-m.x,T=E.y-m.y-(m.height/2-E.height/2),I=E.width/.75,B=Math.abs(I-m.width)>1?{maxWidth:X(I)}:void 0,G=getComputedStyle(w),Z=getComputedStyle(v),ne=parseFloat(G.transitionDuration)*1e3||150,ue=parseFloat(Z.getPropertyValue("--v-field-label-scale")),Pe=Z.getPropertyValue("color");w.style.visibility="visible",v.style.visibility="hidden",Il(w,{transform:`translate(${C}px, ${T}px) scale(${ue})`,color:Pe,...B},{duration:ne,easing:Tl,direction:Q?"normal":"reverse"}).finished.then(()=>{w.style.removeProperty("visibility"),v.style.removeProperty("visibility")})})}},{flush:"post"});const P=b(()=>({isActive:_,isFocused:l,controlRef:L,blur:h,focus:c}));function te(Q){Q.target!==document.activeElement&&Q.preventDefault()}return pe(()=>{var C,T,I;const Q=t.variant==="outlined",w=i["prepend-inner"]||t.prependInnerIcon,v=!!(t.clearable||i.clear),m=!!(i["append-inner"]||t.appendInnerIcon||v),E=()=>i.label?i.label({...P.value,label:t.label,props:{for:R.value}}):t.label;return g("div",rt({class:["v-field",{"v-field--active":_.value,"v-field--appended":m,"v-field--center-affix":t.centerAffix??!k.value,"v-field--disabled":t.disabled,"v-field--dirty":t.dirty,"v-field--error":t.error,"v-field--flat":t.flat,"v-field--has-background":!!t.bgColor,"v-field--persistent-clear":t.persistentClear,"v-field--prepended":w,"v-field--reverse":t.reverse,"v-field--single-line":t.singleLine,"v-field--no-label":!E(),[`v-field--variant-${t.variant}`]:!0},r.value,K.value,a.value,o.value,d.value,f.value,t.class],style:[H.value,t.style],onClick:te},n),[g("div",{class:"v-field__overlay"},null),g(Bf,{name:"v-field",active:!!t.loading,color:t.error?"error":typeof t.loading=="string"?t.loading:t.color},{default:i.loader}),w&&g("div",{key:"prepend",class:"v-field__prepend-inner"},[t.prependInnerIcon&&g(u,{key:"prepend-icon",name:"prependInner"},null),(C=i["prepend-inner"])==null?void 0:C.call(i,P.value)]),g("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(t.variant)&&y.value&&g(on,{key:"floating-label",ref:D,class:[$.value],floating:!0,for:R.value,style:V.value},{default:()=>[E()]}),g(on,{ref:A,for:R.value},{default:()=>[E()]}),(T=i.default)==null?void 0:T.call(i,{...P.value,props:{id:R.value,class:"v-field__input","aria-describedby":S.value},focus:c,blur:h})]),v&&g(s_,{key:"clear"},{default:()=>[Dn(g("div",{class:"v-field__clearable",onMousedown:B=>{B.preventDefault(),B.stopPropagation()}},[i.clear?i.clear():g(u,{name:"clear"},null)]),[[Mr,t.dirty]])]}),m&&g("div",{key:"append",class:"v-field__append-inner"},[(I=i["append-inner"])==null?void 0:I.call(i,P.value),t.appendInnerIcon&&g(u,{key:"append-icon",name:"appendInner"},null)]),g("div",{class:["v-field__outline",$.value],style:V.value},[Q&&g(xt,null,[g("div",{class:"v-field__outline__start"},null),y.value&&g("div",{class:"v-field__outline__notch"},[g(on,{ref:D,floating:!0,for:R.value},{default:()=>[E()]})]),g("div",{class:"v-field__outline__end"},null)]),k.value&&y.value&&g(on,{ref:D,floating:!0,for:R.value},{default:()=>[E()]})])])}),{controlRef:L}}});function u_(t){const e=Object.keys(Ya.props).filter(n=>!ml(n)&&n!=="class"&&n!=="style");return pl(t,e)}const d_=W({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...ye(),...Ua({transition:{component:Wa,leaveAbsolute:!0,group:!0}})},"VMessages"),h_=le()({name:"VMessages",props:d_(),setup(t,e){let{slots:n}=e;const s=b(()=>Rt(t.messages)),{textColorClasses:i,textColorStyles:r}=pt(b(()=>t.color));return pe(()=>g(Ha,{transition:t.transition,tag:"div",class:["v-messages",i.value,t.class],style:[r.value,t.style],role:"alert","aria-live":"polite"},{default:()=>[t.active&&s.value.map((o,a)=>g("div",{class:"v-messages__message",key:`${a}-${s.value}`},[n.message?n.message({message:o}):o]))]})),{}}}),f_=Symbol.for("vuetify:form");function __(){return kr(f_,null)}const m_=W({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Ga()},"validation");function p_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ke(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:xn();const s=qt(t,"modelValue"),i=b(()=>t.validationValue===void 0?s.value:t.validationValue),r=__(),o=Ie([]),a=cs(!0),l=b(()=>!!(Rt(s.value===""?null:s.value).length||Rt(i.value===""?null:i.value).length)),c=b(()=>!!(t.disabled??(r==null?void 0:r.isDisabled.value))),h=b(()=>!!(t.readonly??(r==null?void 0:r.isReadonly.value))),u=b(()=>{var D;return(D=t.errorMessages)!=null&&D.length?Rt(t.errorMessages).concat(o.value).slice(0,Math.max(0,+t.maxErrors)):o.value}),d=b(()=>{let D=(t.validateOn??(r==null?void 0:r.validateOn.value))||"input";D==="lazy"&&(D="input lazy");const L=new Set((D==null?void 0:D.split(" "))??[]);return{blur:L.has("blur")||L.has("input"),input:L.has("input"),submit:L.has("submit"),lazy:L.has("lazy")}}),f=b(()=>{var D;return t.error||(D=t.errorMessages)!=null&&D.length?!1:t.rules.length?a.value?o.value.length||d.value.lazy?null:!0:!o.value.length:!0}),_=cs(!1),y=b(()=>({[`${e}--error`]:f.value===!1,[`${e}--dirty`]:l.value,[`${e}--disabled`]:c.value,[`${e}--readonly`]:h.value})),x=b(()=>t.name??ln(n));gl(()=>{r==null||r.register({id:x.value,validate:A,reset:R,resetValidation:S})}),Rn(()=>{r==null||r.unregister(x.value)}),Ar(async()=>{d.value.lazy||await A(!0),r==null||r.update(x.value,f.value,u.value)}),Ti(()=>d.value.input,()=>{Me(i,()=>{if(i.value!=null)A();else if(t.focused){const D=Me(()=>t.focused,L=>{L||A(),D()})}})}),Ti(()=>d.value.blur,()=>{Me(()=>t.focused,D=>{D||A()})}),Me([f,u],()=>{r==null||r.update(x.value,f.value,u.value)});function R(){s.value=null,cn(S)}function S(){a.value=!0,d.value.lazy?o.value=[]:A(!0)}async function A(){let D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const L=[];_.value=!0;for(const k of t.rules){if(L.length>=+(t.maxErrors??1))break;const H=await(typeof k=="function"?k:()=>k)(i.value);if(H!==!0){if(H!==!1&&typeof H!="string"){console.warn(`${H} is not a valid value. Rule functions must return boolean true or a string.`);continue}L.push(H||"")}}return o.value=L,_.value=!1,a.value=D,o.value}return{errorMessages:u,isDirty:l,isDisabled:c,isReadonly:h,isPristine:a,isValid:f,isValidating:_,reset:R,resetValidation:S,validate:A,validationClasses:y}}const Ka=W({id:String,appendIcon:Le,centerAffix:{type:Boolean,default:!0},prependIcon:Le,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)},"onClick:prepend":Ye(),"onClick:append":Ye(),...ye(),...vi(),...m_()},"VInput"),Tr=le()({name:"VInput",props:{...Ka()},emits:{"update:modelValue":t=>!0},setup(t,e){let{attrs:n,slots:s,emit:i}=e;const{densityClasses:r}=yi(t),{rtlClasses:o}=kn(),{InputIcon:a}=za(t),l=xn(),c=b(()=>t.id||`input-${l}`),h=b(()=>`${c.value}-messages`),{errorMessages:u,isDirty:d,isDisabled:f,isReadonly:_,isPristine:y,isValid:x,isValidating:R,reset:S,resetValidation:A,validate:D,validationClasses:L}=p_(t,"v-input",c),k=b(()=>({id:c,messagesId:h,isDirty:d,isDisabled:f,isReadonly:_,isPristine:y,isValid:x,isValidating:R,reset:S,resetValidation:A,validate:D})),K=b(()=>{var H;return(H=t.errorMessages)!=null&&H.length||!y.value&&u.value.length?u.value:t.hint&&(t.persistentHint||t.focused)?t.hint:t.messages});return pe(()=>{var te,Q,w,v;const H=!!(s.prepend||t.prependIcon),$=!!(s.append||t.appendIcon),V=K.value.length>0,P=!t.hideDetails||t.hideDetails==="auto"&&(V||!!s.details);return g("div",{class:["v-input",`v-input--${t.direction}`,{"v-input--center-affix":t.centerAffix,"v-input--hide-spin-buttons":t.hideSpinButtons},r.value,o.value,L.value,t.class],style:t.style},[H&&g("div",{key:"prepend",class:"v-input__prepend"},[(te=s.prepend)==null?void 0:te.call(s,k.value),t.prependIcon&&g(a,{key:"prepend-icon",name:"prepend"},null)]),s.default&&g("div",{class:"v-input__control"},[(Q=s.default)==null?void 0:Q.call(s,k.value)]),$&&g("div",{key:"append",class:"v-input__append"},[t.appendIcon&&g(a,{key:"append-icon",name:"append"},null),(w=s.append)==null?void 0:w.call(s,k.value)]),P&&g("div",{class:"v-input__details"},[g(h_,{id:h.value,active:V,messages:K.value},{message:s.message}),(v=s.details)==null?void 0:v.call(s,k.value)])])}),{reset:S,resetValidation:A,validate:D,isValid:x,errorMessages:u}}}),os=Symbol("Forwarded refs");function as(t,e){let n=t;for(;n;){const s=Reflect.getOwnPropertyDescriptor(n,e);if(s)return s;n=Object.getPrototypeOf(n)}}function g_(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];return t[os]=n,new Proxy(t,{get(i,r){if(Reflect.has(i,r))return Reflect.get(i,r);if(!(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))){for(const o of n)if(o.value&&Reflect.has(o.value,r)){const a=Reflect.get(o.value,r);return typeof a=="function"?a.bind(o.value):a}}},has(i,r){if(Reflect.has(i,r))return!0;if(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))return!1;for(const o of n)if(o.value&&Reflect.has(o.value,r))return!0;return!1},set(i,r,o){if(Reflect.has(i,r))return Reflect.set(i,r,o);if(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))return!1;for(const a of n)if(a.value&&Reflect.has(a.value,r))return Reflect.set(a.value,r,o);return!1},getOwnPropertyDescriptor(i,r){var a;const o=Reflect.getOwnPropertyDescriptor(i,r);if(o)return o;if(!(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))){for(const l of n){if(!l.value)continue;const c=as(l.value,r)??("_"in l.value?as((a=l.value._)==null?void 0:a.setupState,r):void 0);if(c)return c}for(const l of n){const c=l.value&&l.value[os];if(!c)continue;const h=c.slice();for(;h.length;){const u=h.shift(),d=as(u.value,r);if(d)return d;const f=u.value&&u.value[os];f&&h.push(...f)}}}}})}function v_(t,e){if(!Pr)return;const n=e.modifiers||{},s=e.value,{handler:i,options:r}=typeof s=="object"?s:{handler:s,options:{}},o=new IntersectionObserver(function(){var u;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(u=t._observe)==null?void 0:u[e.instance.$.uid];if(!c)return;const h=a.some(d=>d.isIntersecting);i&&(!n.quiet||c.init)&&(!n.once||h||c.init)&&i(h,a,l),h&&n.once?Qa(t,e):c.init=!0},r);t._observe=Object(t._observe),t._observe[e.instance.$.uid]={init:!1,observer:o},o.observe(t)}function Qa(t,e){var s;const n=(s=t._observe)==null?void 0:s[e.instance.$.uid];n&&(n.observer.unobserve(t),delete t._observe[e.instance.$.uid])}const y_={mounted:v_,unmounted:Qa},C_=y_,b_=["color","file","time","date","datetime-local","week","month"],E_=W({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Ka(),...qa()},"VTextField"),P_=le()({name:"VTextField",directives:{Intersect:C_},inheritAttrs:!1,props:E_(),emits:{"click:control":t=>!0,"mousedown:control":t=>!0,"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,e){let{attrs:n,emit:s,slots:i}=e;const r=qt(t,"modelValue"),{isFocused:o,focus:a,blur:l}=ja(t),c=b(()=>typeof t.counterValue=="function"?t.counterValue(r.value):typeof t.counterValue=="number"?t.counterValue:(r.value??"").toString().length),h=b(()=>{if(n.maxlength)return n.maxlength;if(!(!t.counter||typeof t.counter!="number"&&typeof t.counter!="string"))return t.counter}),u=b(()=>["plain","underlined"].includes(t.variant));function d(k,K){var H,$;!t.autofocus||!k||($=(H=K[0].target)==null?void 0:H.focus)==null||$.call(H)}const f=Ie(),_=Ie(),y=Ie(),x=b(()=>b_.includes(t.type)||t.persistentPlaceholder||o.value||t.active);function R(){var k;y.value!==document.activeElement&&((k=y.value)==null||k.focus()),o.value||a()}function S(k){s("mousedown:control",k),k.target!==y.value&&(R(),k.preventDefault())}function A(k){R(),s("click:control",k)}function D(k){k.stopPropagation(),R(),cn(()=>{r.value=null,Cl(t["onClick:clear"],k)})}function L(k){var H;const K=k.target;if(r.value=K.value,(H=t.modelModifiers)!=null&&H.trim&&["text","search","password","tel","url"].includes(t.type)){const $=[K.selectionStart,K.selectionEnd];cn(()=>{K.selectionStart=$[0],K.selectionEnd=$[1]})}}return pe(()=>{const k=!!(i.counter||t.counter!==!1&&t.counter!=null),K=!!(k||i.details),[H,$]=vl(n),{modelValue:V,...P}=Tr.filterProps(t),te=u_(t);return g(Tr,rt({ref:f,modelValue:r.value,"onUpdate:modelValue":Q=>r.value=Q,class:["v-text-field",{"v-text-field--prefixed":t.prefix,"v-text-field--suffixed":t.suffix,"v-input--plain-underlined":u.value},t.class],style:t.style},H,P,{centerAffix:!u.value,focused:o.value}),{...i,default:Q=>{let{id:w,isDisabled:v,isDirty:m,isReadonly:E,isValid:C}=Q;return g(Ya,rt({ref:_,onMousedown:S,onClick:A,"onClick:clear":D,"onClick:prependInner":t["onClick:prependInner"],"onClick:appendInner":t["onClick:appendInner"],role:t.role},te,{id:w.value,active:x.value||m.value,dirty:m.value||t.dirty,disabled:v.value,focused:o.value,error:C.value===!1}),{...i,default:T=>{let{props:{class:I,...B}}=T;const G=Dn(g("input",rt({ref:y,value:r.value,onInput:L,autofocus:t.autofocus,readonly:E.value,disabled:v.value,name:t.name,placeholder:t.placeholder,size:1,type:t.type,onFocus:R,onBlur:l},B,$),null),[[Or("intersect"),{handler:d},null,{once:!0}]]);return g(xt,null,[t.prefix&&g("span",{class:"v-text-field__prefix"},[g("span",{class:"v-text-field__prefix__text"},[t.prefix])]),i.default?g("div",{class:I,"data-no-activator":""},[i.default(),G]):yl(G,{class:I}),t.suffix&&g("span",{class:"v-text-field__suffix"},[g("span",{class:"v-text-field__suffix__text"},[t.suffix])])])}})},details:K?Q=>{var w;return g(xt,null,[(w=i.details)==null?void 0:w.call(i,Q),k&&g(xt,null,[g("span",null,null),g(r_,{active:t.persistentCounter||o.value,value:c.value,max:h.value},i.counter)])])}:void 0})}),g_({},f,_,y)}});export{ks as A,bi as B,Ei as C,If as D,xf as E,D_ as F,pa as G,Tf as H,Gf as I,ga as J,Nf as K,zf as L,Ha as M,s_ as N,R_ as O,br as P,T_ as Q,Jf as R,an as V,Ia as a,va as b,Na as c,Wf as d,Gn as e,Ca as f,yi as g,Ta as h,ya as i,xa as j,Uf as k,jn as l,vi as m,pt as n,wf as o,rs as p,k_ as q,A_ as r,P_ as s,I_ as t,Sf as u,N_ as v,x_ as w,t_ as x,Ua as y,C_ as z};
