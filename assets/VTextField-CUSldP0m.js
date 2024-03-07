import{p as fe,m as Ye,d as Wo,g as ye,t as Uo,a3 as Pe,o as O,C as E,aB as Ho,aC as ri,h as oi,a as zo,G as vt,a4 as ai,a8 as zs,am as Ve,l as js,B as jo,V as Go,aD as Gs,u as li,I as yt,aE as qo,j as Yo,q as Ko,aF as Qo,y as Xo,ad as qs,aG as ci,H as We,W as Jo,A as Zo,z as Ys,Z as mt,a7 as ea,aH as ta,a6 as Gt,aI as na,aJ as ia,aK as qt,aL as sa,Y as qi,ay as ra,$ as oa,a2 as aa,az as la,aM as Yi,a1 as $n,b as ca,s as ua,a0 as ha,aN as da,a5 as fa,aO as _a,aP as pa}from"./index-BtV9nOkn.js";class In{constructor(e){let{x:t,y:i,width:s,height:r}=e;this.x=t,this.y=i,this.width=s,this.height=r}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function ga(n){const e=n.getBoundingClientRect(),t=getComputedStyle(n),i=t.transform;if(i){let s,r,o,a,l;if(i.startsWith("matrix3d("))s=i.slice(9,-1).split(/, /),r=+s[0],o=+s[5],a=+s[12],l=+s[13];else if(i.startsWith("matrix("))s=i.slice(7,-1).split(/, /),r=+s[0],o=+s[3],a=+s[4],l=+s[5];else return new In(e);const c=t.transformOrigin,h=e.x-a-(1-r)*parseFloat(c),u=e.y-l-(1-o)*parseFloat(c.slice(c.indexOf(" ")+1)),d=r?e.width/r:n.offsetWidth+1,f=o?e.height/o:n.offsetHeight+1;return new In({x:h,y:u,width:d,height:f})}else return new In(e)}function ma(n,e,t){if(typeof n.animate>"u")return{finished:Promise.resolve()};let i;try{i=n.animate(e,t)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(s=>{i.onfinish=()=>{s(i)}})),i}const va="cubic-bezier(0.4, 0, 0.2, 1)";var ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ca(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ki={};/**
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
 */const Ks={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const _=function(n,e){if(!n)throw at(e)},at=function(n){return new Error("Firebase Database ("+Ks.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Qs=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ea=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ui={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(t[h],t[u],t[d],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Qs(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ea(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const u=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw new ba;const d=r<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),u!==64){const v=c<<6&192|u;i.push(v)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ba extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xs=function(n){const e=Qs(n);return ui.encodeByteArray(e,!0)},Yt=function(n){return Xs(n).replace(/\./g,"")},Bn=function(n){try{return ui.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function wa(n){return Js(void 0,n)}function Js(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ia(t)||(n[t]=Js(n[t],e[t]));return n}function Ia(n){return n!=="__proto__"}/**
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
 */function Sa(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ta=()=>Sa().__FIREBASE_DEFAULTS__,Na=()=>{if(typeof process>"u"||typeof Ki>"u")return;const n=Ki.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ra=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Bn(n[1]);return e&&JSON.parse(e)},Zs=()=>{try{return Ta()||Na()||Ra()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xa=n=>{var e,t;return(t=(e=Zs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Da=n=>{const e=xa(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},er=()=>{var n;return(n=Zs())===null||n===void 0?void 0:n.config};/**
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
 */class dn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Aa(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Yt(JSON.stringify(t)),Yt(JSON.stringify(o)),""].join(".")}/**
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
 */function ka(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ka())}function Pa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nr(){return Ks.NODE_ADMIN===!0}function Ma(){try{return typeof indexedDB=="object"}catch{return!1}}function Oa(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const La="FirebaseError";class Mt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=La,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ir.prototype.create)}}class ir{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Fa(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Mt(s,a,i)}}function Fa(n,e){return n.replace($a,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const $a=/\{\$([^}]+)}/g;/**
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
 */function It(n){return JSON.parse(n)}function ee(n){return JSON.stringify(n)}/**
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
 */const sr=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=It(Bn(r[0])||""),t=It(Bn(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Ba=function(n){const e=sr(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Va=function(n){const e=sr(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ie(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function it(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Qi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Kt(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Vn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Xi(r)&&Xi(o)){if(!Vn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Xi(n){return n!==null&&typeof n=="object"}/**
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
 */function Wa(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class Ua{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(s<<5|s>>>27)+c+l+h+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function hi(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Ha=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,_(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},fn=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Ot(n){return n&&n._delegate?n._delegate:n}class St{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Le="[DEFAULT]";/**
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
 */class za{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new dn;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ga(e))try{this.getOrInitializeService({instanceIdentifier:Le})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Le){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Le){return this.instances.has(e)}getOptions(e=Le){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ja(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Le){return this.component?this.component.multipleInstances?e:Le:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ja(n){return n===Le?void 0:n}function Ga(n){return n.instantiationMode==="EAGER"}/**
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
 */class qa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new za(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(V||(V={}));const Ya={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},Ka=V.INFO,Qa={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},Xa=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Qa[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rr{constructor(e){this.name=e,this._logLevel=Ka,this._logHandler=Xa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ya[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const Ja=(n,e)=>e.some(t=>n instanceof t);let Ji,Zi;function Za(){return Ji||(Ji=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function el(){return Zi||(Zi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const or=new WeakMap,Wn=new WeakMap,ar=new WeakMap,Sn=new WeakMap,di=new WeakMap;function tl(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Re(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&or.set(t,n)}).catch(()=>{}),di.set(e,n),e}function nl(n){if(Wn.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Wn.set(n,e)}let Un={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Wn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ar.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Re(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function il(n){Un=n(Un)}function sl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Tn(this),e,...t);return ar.set(i,e.sort?e.sort():[e]),Re(i)}:el().includes(n)?function(...e){return n.apply(Tn(this),e),Re(or.get(this))}:function(...e){return Re(n.apply(Tn(this),e))}}function rl(n){return typeof n=="function"?sl(n):(n instanceof IDBTransaction&&nl(n),Ja(n,Za())?new Proxy(n,Un):n)}function Re(n){if(n instanceof IDBRequest)return tl(n);if(Sn.has(n))return Sn.get(n);const e=rl(n);return e!==n&&(Sn.set(n,e),di.set(e,n)),e}const Tn=n=>di.get(n);function ol(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=Re(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Re(o.result),l.oldVersion,l.newVersion,Re(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const al=["get","getKey","getAll","getAllKeys","count"],ll=["put","add","delete","clear"],Nn=new Map;function es(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Nn.get(e))return Nn.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=ll.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||al.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Nn.set(e,r),r}il(n=>({...n,get:(e,t,i)=>es(e,t)||n.get(e,t,i),has:(e,t)=>!!es(e,t)||n.has(e,t)}));/**
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
 */class cl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ul(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function ul(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hn="@firebase/app",ts="0.9.28";/**
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
 */const He=new rr("@firebase/app"),hl="@firebase/app-compat",dl="@firebase/analytics-compat",fl="@firebase/analytics",_l="@firebase/app-check-compat",pl="@firebase/app-check",gl="@firebase/auth",ml="@firebase/auth-compat",vl="@firebase/database",yl="@firebase/database-compat",Cl="@firebase/functions",El="@firebase/functions-compat",bl="@firebase/installations",wl="@firebase/installations-compat",Il="@firebase/messaging",Sl="@firebase/messaging-compat",Tl="@firebase/performance",Nl="@firebase/performance-compat",Rl="@firebase/remote-config",xl="@firebase/remote-config-compat",Dl="@firebase/storage",Al="@firebase/storage-compat",kl="@firebase/firestore",Pl="@firebase/firestore-compat",Ml="firebase",Ol="10.8.1";/**
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
 */const zn="[DEFAULT]",Ll={[Hn]:"fire-core",[hl]:"fire-core-compat",[fl]:"fire-analytics",[dl]:"fire-analytics-compat",[pl]:"fire-app-check",[_l]:"fire-app-check-compat",[gl]:"fire-auth",[ml]:"fire-auth-compat",[vl]:"fire-rtdb",[yl]:"fire-rtdb-compat",[Cl]:"fire-fn",[El]:"fire-fn-compat",[bl]:"fire-iid",[wl]:"fire-iid-compat",[Il]:"fire-fcm",[Sl]:"fire-fcm-compat",[Tl]:"fire-perf",[Nl]:"fire-perf-compat",[Rl]:"fire-rc",[xl]:"fire-rc-compat",[Dl]:"fire-gcs",[Al]:"fire-gcs-compat",[kl]:"fire-fst",[Pl]:"fire-fst-compat","fire-js":"fire-js",[Ml]:"fire-js-all"};/**
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
 */const Qt=new Map,jn=new Map;function Fl(n,e){try{n.container.addComponent(e)}catch(t){He.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Xt(n){const e=n.name;if(jn.has(e))return He.debug(`There were multiple attempts to register component ${e}.`),!1;jn.set(e,n);for(const t of Qt.values())Fl(t,n);return!0}function $l(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Bl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xe=new ir("app","Firebase",Bl);/**
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
 */class Vl{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new St("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xe.create("app-deleted",{appName:this._name})}}/**
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
 */const Wl=Ol;function lr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:zn,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw xe.create("bad-app-name",{appName:String(s)});if(t||(t=er()),!t)throw xe.create("no-options");const r=Qt.get(s);if(r){if(Vn(t,r.options)&&Vn(i,r.config))return r;throw xe.create("duplicate-app",{appName:s})}const o=new qa(s);for(const l of jn.values())o.addComponent(l);const a=new Vl(t,i,o);return Qt.set(s,a),a}function Ul(n=zn){const e=Qt.get(n);if(!e&&n===zn&&er())return lr();if(!e)throw xe.create("no-app",{appName:n});return e}function Je(n,e,t){var i;let s=(i=Ll[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),He.warn(a.join(" "));return}Xt(new St(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Hl="firebase-heartbeat-database",zl=1,Tt="firebase-heartbeat-store";let Rn=null;function cr(){return Rn||(Rn=ol(Hl,zl,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Tt)}catch(t){console.warn(t)}}}}).catch(n=>{throw xe.create("idb-open",{originalErrorMessage:n.message})})),Rn}async function jl(n){try{const t=(await cr()).transaction(Tt),i=await t.objectStore(Tt).get(ur(n));return await t.done,i}catch(e){if(e instanceof Mt)He.warn(e.message);else{const t=xe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});He.warn(t.message)}}}async function ns(n,e){try{const i=(await cr()).transaction(Tt,"readwrite");await i.objectStore(Tt).put(e,ur(n)),await i.done}catch(t){if(t instanceof Mt)He.warn(t.message);else{const i=xe.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});He.warn(i.message)}}}function ur(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Gl=1024,ql=30*24*60*60*1e3;class Yl{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ql(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=is();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ql}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=is(),{heartbeatsToSend:i,unsentEntries:s}=Kl(this._heartbeatsCache.heartbeats),r=Yt(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function is(){return new Date().toISOString().substring(0,10)}function Kl(n,e=Gl){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),ss(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ss(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Ql{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ma()?Oa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await jl(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ns(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ns(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ss(n){return Yt(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Xl(n){Xt(new St("platform-logger",e=>new cl(e),"PRIVATE")),Xt(new St("heartbeat",e=>new Yl(e),"PRIVATE")),Je(Hn,ts,n),Je(Hn,ts,"esm2017"),Je("fire-js","")}Xl("");var Jl="firebase",Zl="10.8.1";/**
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
 */Je(Jl,Zl,"app");var rs={};const os="@firebase/database",as="1.0.3";/**
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
 */let hr="";function ec(n){hr=n}/**
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
 */class tc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ee(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:It(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class nc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ie(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const dr=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new tc(e)}}catch{}return new nc},$e=dr("localStorage"),Gn=dr("sessionStorage");/**
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
 */const Ze=new rr("@firebase/database"),ic=function(){let n=1;return function(){return n++}}(),fr=function(n){const e=Ha(n),t=new Ua;t.update(e);const i=t.digest();return ui.encodeByteArray(i)},Lt=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Lt.apply(null,i):typeof i=="object"?e+=ee(i):e+=i,e+=" "}return e};let Ue=null,ls=!0;const sc=function(n,e){_(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Ze.logLevel=V.VERBOSE,Ue=Ze.log.bind(Ze),e&&Gn.set("logging_enabled",!0)):typeof n=="function"?Ue=n:(Ue=null,Gn.remove("logging_enabled"))},re=function(...n){if(ls===!0&&(ls=!1,Ue===null&&Gn.get("logging_enabled")===!0&&sc(!0)),Ue){const e=Lt.apply(null,n);Ue(e)}},Ft=function(n){return function(...e){re(n,...e)}},qn=function(...n){const e="FIREBASE INTERNAL ERROR: "+Lt(...n);Ze.error(e)},be=function(...n){const e=`FIREBASE FATAL ERROR: ${Lt(...n)}`;throw Ze.error(e),new Error(e)},ue=function(...n){const e="FIREBASE WARNING: "+Lt(...n);Ze.warn(e)},rc=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},_r=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},oc=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},st="[MIN_NAME]",ze="[MAX_NAME]",lt=function(n,e){if(n===e)return 0;if(n===st||e===ze)return-1;if(e===st||n===ze)return 1;{const t=cs(n),i=cs(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},ac=function(n,e){return n===e?0:n<e?-1:1},ft=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ee(e))},fi=function(n){if(typeof n!="object"||n===null)return ee(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=ee(e[i]),t+=":",t+=fi(n[e[i]]);return t+="}",t},pr=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function he(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const gr=function(n){_(!_r(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},lc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},cc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function uc(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const hc=new RegExp("^-?(0*)\\d{1,10}$"),dc=-2147483648,fc=2147483647,cs=function(n){if(hc.test(n)){const e=Number(n);if(e>=dc&&e<=fc)return e}return null},ct=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ue("Exception was thrown by user callback.",t),e},Math.floor(0))}},_c=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ct=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class pc{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ue(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class gc{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(re("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ue(e)}}class et{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}et.OWNER="owner";/**
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
 */const _i="5",mr="v",vr="s",yr="r",Cr="f",Er=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,br="ls",wr="p",Yn="ac",Ir="websocket",Sr="long_polling";/**
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
 */class Tr{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$e.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$e.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function mc(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Nr(n,e,t){_(typeof e=="string","typeof type must == string"),_(typeof t=="object","typeof params must == object");let i;if(e===Ir)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Sr)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);mc(n)&&(t.ns=n.namespace);const s=[];return he(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class vc{constructor(){this.counters_={}}incrementCounter(e,t=1){Ie(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return wa(this.counters_)}}/**
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
 */const xn={},Dn={};function pi(n){const e=n.toString();return xn[e]||(xn[e]=new vc),xn[e]}function yc(n,e){const t=n.toString();return Dn[t]||(Dn[t]=e()),Dn[t]}/**
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
 */class Cc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&ct(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const us="start",Ec="close",bc="pLPCommand",wc="pRTLPCB",Rr="id",xr="pw",Dr="ser",Ic="cb",Sc="seg",Tc="ts",Nc="d",Rc="dframe",Ar=1870,kr=30,xc=Ar-kr,Dc=25e3,Ac=3e4;class Xe{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ft(e),this.stats_=pi(t),this.urlFn=l=>(this.appCheckToken&&(l[Yn]=this.appCheckToken),Nr(t,Sr,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Cc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ac)),oc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gi((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===us)this.id=a,this.password=l;else if(o===Ec)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[us]="t",i[Dr]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Ic]=this.scriptTagHolder.uniqueCallbackIdentifier),i[mr]=_i,this.transportSessionId&&(i[vr]=this.transportSessionId),this.lastSessionId&&(i[br]=this.lastSessionId),this.applicationId&&(i[wr]=this.applicationId),this.appCheckToken&&(i[Yn]=this.appCheckToken),typeof location<"u"&&location.hostname&&Er.test(location.hostname)&&(i[yr]=Cr);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Xe.forceAllow_=!0}static forceDisallow(){Xe.forceDisallow_=!0}static isAvailable(){return Xe.forceAllow_?!0:!Xe.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lc()&&!cc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ee(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Xs(t),s=pr(i,xc);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Rc]="t",i[Rr]=e,i[xr]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ee(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class gi{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ic(),window[bc+this.uniqueCallbackIdentifier]=e,window[wc+this.uniqueCallbackIdentifier]=t,this.myIFrame=gi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){re("frame writing exception"),a.stack&&re(a.stack),re(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||re("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Rr]=this.myID,e[xr]=this.myPW,e[Dr]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+kr+i.length<=Ar;){const o=this.pendingSegs.shift();i=i+"&"+Sc+s+"="+o.seg+"&"+Tc+s+"="+o.ts+"&"+Nc+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Dc)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{re("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const kc=16384,Pc=45e3;let Jt=null;typeof MozWebSocket<"u"?Jt=MozWebSocket:typeof WebSocket<"u"&&(Jt=WebSocket);class pe{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ft(this.connId),this.stats_=pi(t),this.connURL=pe.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[mr]=_i,typeof location<"u"&&location.hostname&&Er.test(location.hostname)&&(o[yr]=Cr),t&&(o[vr]=t),i&&(o[br]=i),s&&(o[Yn]=s),r&&(o[wr]=r),Nr(e,Ir,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$e.set("previous_websocket_failure",!0);try{let i;nr(),this.mySock=new Jt(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){pe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Jt!==null&&!pe.forceDisallow_}static previouslyFailed(){return $e.isInMemoryStorage||$e.get("previous_websocket_failure")===!0}markConnectionHealthy(){$e.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=It(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=ee(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=pr(t,kc);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Pc))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pe.responsesRequiredToBeHealthy=2;pe.healthyTimeout=3e4;/**
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
 */class Nt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Xe,pe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=pe&&pe.isAvailable();let i=t&&!pe.previouslyFailed();if(e.webSocketOnly&&(t||ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[pe];else{const s=this.transports_=[];for(const r of Nt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Nt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Nt.globalTransportInitialized_=!1;/**
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
 */const Mc=6e4,Oc=5e3,Lc=10*1024,Fc=100*1024,An="t",hs="d",$c="s",ds="r",Bc="e",fs="o",_s="a",ps="n",gs="p",Vc="h";class Wc{constructor(e,t,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ft("c:"+this.id+":"),this.transportManager_=new Nt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ct(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Fc?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Lc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(An in e){const t=e[An];t===_s?this.upgradeIfSecondaryHealthy_():t===ds?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===fs&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ft("t",e),i=ft("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gs,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_s,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ps,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ft("t",e),i=ft("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ft(An,e);if(hs in e){const i=e[hs];if(t===Vc){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===ps){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===$c?this.onConnectionShutdown_(i):t===ds?this.onReset_(i):t===Bc?qn("Server Error: "+i):t===fs?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):qn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),_i!==i&&ue("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Ct(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Mc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ct(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Oc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gs,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($e.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Pr{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Mr{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){_(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Zt extends Mr{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!tr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Zt}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ms=32,vs=768;class L{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function P(){return new L("")}function N(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ae(n){return n.pieces_.length-n.pieceNum_}function W(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new L(n.pieces_,e)}function Or(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Uc(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Lr(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Fr(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new L(e,0)}function Y(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof L)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new L(t,0)}function D(n){return n.pieceNum_>=n.pieces_.length}function le(n,e){const t=N(n),i=N(e);if(t===null)return e;if(t===i)return le(W(n),W(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function mi(n,e){if(Ae(n)!==Ae(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ge(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ae(n)>Ae(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Hc{constructor(e,t){this.errorPrefix_=t,this.parts_=Lr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=fn(this.parts_[i]);$r(this)}}function zc(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=fn(e),$r(n)}function jc(n){const e=n.parts_.pop();n.byteLength_-=fn(e),n.parts_.length>0&&(n.byteLength_-=1)}function $r(n){if(n.byteLength_>vs)throw new Error(n.errorPrefix_+"has a key path longer than "+vs+" bytes ("+n.byteLength_+").");if(n.parts_.length>ms)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ms+") or object contains a cycle "+Fe(n))}function Fe(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class vi extends Mr{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new vi}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const _t=1e3,Gc=60*5*1e3,ys=30*1e3,qc=1.3,Yc=3e4,Kc="server_kill",Cs=3;class Ee extends Pr{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ee.nextPersistentConnectionId_++,this.log_=Ft("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_t,this.maxReconnectDelay_=Gc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!nr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vi.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(ee(r)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new dn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ee.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ie(e,"w")){const i=it(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Va(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ys)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ba(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ee(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):qn("Unrecognized action received from server: "+ee(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_t,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_t,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Yc&&(this.reconnectDelay_=_t),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*qc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ee.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(u){_(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?re("getToken() completed but was canceled"):(re("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new Wc(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{ue(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Kc)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ue(u),l())}}}interrupt(e){re("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){re("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Qi(this.interruptReasons_)&&(this.reconnectDelay_=_t,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>fi(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new L(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){re("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Cs&&(this.reconnectDelay_=ys,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){re("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Cs&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+hr.replace(/\./g,"-")]=1,tr()?e["framework.cordova"]=1:Pa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zt.getInstance().currentlyOnline();return Qi(this.interruptReasons_)&&e}}Ee.nextPersistentConnectionId_=0;Ee.nextConnectionId_=0;/**
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
 */class R{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new R(e,t)}}/**
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
 */class _n{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new R(st,e),s=new R(st,t);return this.compare(i,s)!==0}minPost(){return R.MIN}}/**
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
 */let Ut;class Br extends _n{static get __EMPTY_NODE(){return Ut}static set __EMPTY_NODE(e){Ut=e}compare(e,t){return lt(e.name,t.name)}isDefinedOn(e){throw at("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return R.MIN}maxPost(){return new R(ze,Ut)}makePost(e,t){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new R(e,Ut)}toString(){return".key"}}const tt=new Br;/**
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
 */class Ht{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Z{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Z.RED,this.left=s??ce.EMPTY_NODE,this.right=r??ce.EMPTY_NODE}copy(e,t,i,s,r){return new Z(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ce.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return ce.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Z.RED=!0;Z.BLACK=!1;class Qc{copy(e,t,i,s,r){return this}insert(e,t,i){return new Z(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ce{constructor(e,t=ce.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ce(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Z.BLACK,null,null))}remove(e){return new ce(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Z.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ht(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ht(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ht(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ht(this.root_,null,this.comparator_,!0,e)}}ce.EMPTY_NODE=new Qc;/**
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
 */function Xc(n,e){return lt(n.name,e.name)}function yi(n,e){return lt(n,e)}/**
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
 */let Kn;function Jc(n){Kn=n}const Vr=function(n){return typeof n=="number"?"number:"+gr(n):"string:"+n},Wr=function(n){if(n.isLeafNode()){const e=n.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ie(e,".sv"),"Priority must be a string or number.")}else _(n===Kn||n.isEmpty(),"priority of unexpected type.");_(n===Kn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Es;class J{constructor(e,t=J.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Wr(this.priorityNode_)}static set __childrenNodeConstructor(e){Es=e}static get __childrenNodeConstructor(){return Es}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new J(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:J.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return D(e)?this:N(e)===".priority"?this.priorityNode_:J.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:J.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=N(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(_(i!==".priority"||Ae(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,J.__childrenNodeConstructor.EMPTY_NODE.updateChild(W(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Vr(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=gr(this.value_):e+=this.value_,this.lazyHash_=fr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===J.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof J.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=J.VALUE_TYPE_ORDER.indexOf(t),r=J.VALUE_TYPE_ORDER.indexOf(i);return _(s>=0,"Unknown leaf type: "+t),_(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}J.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ur,Hr;function Zc(n){Ur=n}function eu(n){Hr=n}class tu extends _n{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?lt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return R.MIN}maxPost(){return new R(ze,new J("[PRIORITY-POST]",Hr))}makePost(e,t){const i=Ur(e);return new R(t,new J("[PRIORITY-POST]",i))}toString(){return".priority"}}const G=new tu;/**
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
 */const nu=Math.log(2);class iu{constructor(e){const t=r=>parseInt(Math.log(r)/nu,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const en=function(n,e,t,i){n.sort(e);const s=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=n[l],d=t?t(u):u,new Z(d,u.node,Z.BLACK,null,null);{const f=parseInt(h/2,10)+l,v=s(l,f),S=s(f+1,c);return u=n[f],d=t?t(u):u,new Z(d,u.node,Z.BLACK,v,S)}},r=function(l){let c=null,h=null,u=n.length;const d=function(v,S){const M=u-v,F=u;u-=v;const te=s(M+1,F),j=n[M],k=t?t(j):j;f(new Z(k,j.node,S,null,te))},f=function(v){c?(c.left=v,c=v):(h=v,c=v)};for(let v=0;v<l.count;++v){const S=l.nextBitIsOne(),M=Math.pow(2,l.count-(v+1));S?d(M,Z.BLACK):(d(M,Z.BLACK),d(M,Z.RED))}return h},o=new iu(n.length),a=r(o);return new ce(i||e,a)};/**
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
 */let kn;const Qe={};class Ce{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return _(Qe&&G,"ChildrenNode.ts has not been loaded"),kn=kn||new Ce({".priority":Qe},{".priority":G}),kn}get(e){const t=it(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ce?t:null}hasIndex(e){return Ie(this.indexSet_,e.toString())}addIndex(e,t){_(e!==tt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(R.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=en(i,e.getCompare()):a=Qe;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Ce(h,c)}addToIndexes(e,t){const i=Kt(this.indexes_,(s,r)=>{const o=it(this.indexSet_,r);if(_(o,"Missing index implementation for "+r),s===Qe)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(R.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),en(a,o.getCompare())}else return Qe;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new R(e.name,a))),l.insert(e,e.node)}});return new Ce(i,this.indexSet_)}removeFromIndexes(e,t){const i=Kt(this.indexes_,s=>{if(s===Qe)return s;{const r=t.get(e.name);return r?s.remove(new R(e.name,r)):s}});return new Ce(i,this.indexSet_)}}/**
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
 */let pt;class I{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Wr(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pt||(pt=new I(new ce(yi),null,Ce.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pt}updatePriority(e){return this.children_.isEmpty()?this:new I(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?pt:t}}getChild(e){const t=N(e);return t===null?this:this.getImmediateChild(t).getChild(W(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(_(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new R(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?pt:this.priorityNode_;return new I(s,o,r)}}updateChild(e,t){const i=N(e);if(i===null)return t;{_(N(e)!==".priority"||Ae(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(W(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(G,(o,a)=>{t[o]=a.val(e),i++,r&&I.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Vr(this.getPriority().val())+":"),this.forEachChild(G,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":fr(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new R(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new R(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new R(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,R.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,R.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$t?-1:0}withIndex(e){if(e===tt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new I(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===tt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(G),s=t.getIterator(G);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===tt?null:this.indexMap_.get(e.toString())}}I.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class su extends I{constructor(){super(new ce(yi),I.EMPTY_NODE,Ce.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return I.EMPTY_NODE}isEmpty(){return!1}}const $t=new su;Object.defineProperties(R,{MIN:{value:new R(st,I.EMPTY_NODE)},MAX:{value:new R(ze,$t)}});Br.__EMPTY_NODE=I.EMPTY_NODE;J.__childrenNodeConstructor=I;Jc($t);eu($t);/**
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
 */const ru=!0;function se(n,e=null){if(n===null)return I.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new J(t,se(e))}if(!(n instanceof Array)&&ru){const t=[];let i=!1;if(he(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=se(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new R(o,l)))}}),t.length===0)return I.EMPTY_NODE;const r=en(t,Xc,o=>o.name,yi);if(i){const o=en(t,G.getCompare());return new I(r,se(e),new Ce({".priority":o},{".priority":G}))}else return new I(r,se(e),Ce.Default)}else{let t=I.EMPTY_NODE;return he(n,(i,s)=>{if(Ie(n,i)&&i.substring(0,1)!=="."){const r=se(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(se(e))}}Zc(se);/**
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
 */class ou extends _n{constructor(e){super(),this.indexPath_=e,_(!D(e)&&N(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?lt(e.name,t.name):r}makePost(e,t){const i=se(e),s=I.EMPTY_NODE.updateChild(this.indexPath_,i);return new R(t,s)}maxPost(){const e=I.EMPTY_NODE.updateChild(this.indexPath_,$t);return new R(ze,e)}toString(){return Lr(this.indexPath_,0).join("/")}}/**
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
 */class au extends _n{compare(e,t){const i=e.node.compareTo(t.node);return i===0?lt(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return R.MIN}maxPost(){return R.MAX}makePost(e,t){const i=se(e);return new R(t,i)}toString(){return".value"}}const lu=new au;/**
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
 */function zr(n){return{type:"value",snapshotNode:n}}function rt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Rt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function xt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function cu(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Ci{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){_(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Rt(t,a)):_(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(rt(t,i)):o.trackChildChange(xt(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(G,(s,r)=>{t.hasChild(s)||i.trackChildChange(Rt(s,r))}),t.isLeafNode()||t.forEachChild(G,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(xt(s,r,o))}else i.trackChildChange(rt(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?I.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Dt{constructor(e){this.indexedFilter_=new Ci(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Dt.getStartPost_(e),this.endPost_=Dt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new R(t,i))||(i=I.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=I.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(I.EMPTY_NODE);const r=this;return t.forEachChild(G,(o,a)=>{r.matches(new R(o,a))||(s=s.updateImmediateChild(o,I.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class uu{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Dt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new R(t,i))||(i=I.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=I.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=I.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(I.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,I.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,f)=>u(f,d)}else o=this.index_.getCompare();const a=e;_(a.numChildren()===this.limit_,"");const l=new R(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(h&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(xt(t,i,u)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(Rt(t,u));const S=a.updateImmediateChild(t,I.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(rt(d.name,d.node)),S.updateImmediateChild(d.name,d.node)):S}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Rt(c.name,c.node)),r.trackChildChange(rt(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,I.EMPTY_NODE)):e}}/**
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
 */class Ei{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=G}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:st}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ze}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===G}copy(){const e=new Ei;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function hu(n){return n.loadsAllData()?new Ci(n.getIndex()):n.hasLimit()?new uu(n):new Dt(n)}function bs(n){const e={};if(n.isDefault())return e;let t;if(n.index_===G?t="$priority":n.index_===lu?t="$value":n.index_===tt?t="$key":(_(n.index_ instanceof ou,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ee(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=ee(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+ee(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=ee(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+ee(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function ws(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==G&&(e.i=n.index_.toString()),e}/**
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
 */class tn extends Pr{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Ft("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=tn.getListenId_(e,i),a={};this.listens_[o]=a;const l=bs(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),it(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,t){const i=tn.getListenId_(e,t);delete this.listens_[i]}get(e){const t=bs(e._queryParams),i=e._path.toString(),s=new dn;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Wa(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=It(a.responseText)}catch{ue("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&ue("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class du{constructor(){this.rootNode_=I.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function nn(){return{value:null,children:new Map}}function jr(n,e,t){if(D(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=N(e);n.children.has(i)||n.children.set(i,nn());const s=n.children.get(i);e=W(e),jr(s,e,t)}}function Qn(n,e,t){n.value!==null?t(e,n.value):fu(n,(i,s)=>{const r=new L(e.toString()+"/"+i);Qn(s,r,t)})}function fu(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class _u{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&he(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const Is=10*1e3,pu=30*1e3,gu=5*60*1e3;class mu{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new _u(e);const i=Is+(pu-Is)*Math.random();Ct(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;he(e,(s,r)=>{r>0&&Ie(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Ct(this.reportStats_.bind(this),Math.floor(Math.random()*2*gu))}}/**
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
 */var me;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(me||(me={}));function Gr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wi(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class sn{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=me.ACK_USER_WRITE,this.source=Gr()}operationForChild(e){if(D(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new L(e));return new sn(P(),t,this.revert)}}else return _(N(this.path)===e,"operationForChild called for unrelated child."),new sn(W(this.path),this.affectedTree,this.revert)}}/**
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
 */class At{constructor(e,t){this.source=e,this.path=t,this.type=me.LISTEN_COMPLETE}operationForChild(e){return D(this.path)?new At(this.source,P()):new At(this.source,W(this.path))}}/**
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
 */class je{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=me.OVERWRITE}operationForChild(e){return D(this.path)?new je(this.source,P(),this.snap.getImmediateChild(e)):new je(this.source,W(this.path),this.snap)}}/**
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
 */class kt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=me.MERGE}operationForChild(e){if(D(this.path)){const t=this.children.subtree(new L(e));return t.isEmpty()?null:t.value?new je(this.source,P(),t.value):new kt(this.source,P(),t)}else return _(N(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new kt(this.source,W(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ge{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(D(e))return this.isFullyInitialized()&&!this.filtered_;const t=N(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class vu{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yu(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(cu(o.childName,o.snapshotNode))}),gt(n,s,"child_removed",e,i,t),gt(n,s,"child_added",e,i,t),gt(n,s,"child_moved",r,i,t),gt(n,s,"child_changed",e,i,t),gt(n,s,"value",e,i,t),s}function gt(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>Eu(n,a,l)),o.forEach(a=>{const l=Cu(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Cu(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Eu(n,e,t){if(e.childName==null||t.childName==null)throw at("Should only compare child_ events.");const i=new R(e.childName,e.snapshotNode),s=new R(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function pn(n,e){return{eventCache:n,serverCache:e}}function Et(n,e,t,i){return pn(new Ge(e,t,i),n.serverCache)}function qr(n,e,t,i){return pn(n.eventCache,new Ge(e,t,i))}function Xn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function qe(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Pn;const bu=()=>(Pn||(Pn=new ce(ac)),Pn);class H{constructor(e,t=bu()){this.value=e,this.children=t}static fromObject(e){let t=new H(null);return he(e,(i,s)=>{t=t.set(new L(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:P(),value:this.value};if(D(e))return null;{const i=N(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(W(e),t);return r!=null?{path:Y(new L(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(D(e))return this;{const t=N(e),i=this.children.get(t);return i!==null?i.subtree(W(e)):new H(null)}}set(e,t){if(D(e))return new H(t,this.children);{const i=N(e),r=(this.children.get(i)||new H(null)).set(W(e),t),o=this.children.insert(i,r);return new H(this.value,o)}}remove(e){if(D(e))return this.children.isEmpty()?new H(null):new H(null,this.children);{const t=N(e),i=this.children.get(t);if(i){const s=i.remove(W(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new H(null):new H(this.value,r)}else return this}}get(e){if(D(e))return this.value;{const t=N(e),i=this.children.get(t);return i?i.get(W(e)):null}}setTree(e,t){if(D(e))return t;{const i=N(e),r=(this.children.get(i)||new H(null)).setTree(W(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new H(this.value,o)}}fold(e){return this.fold_(P(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Y(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,P(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(D(e))return null;{const r=N(e),o=this.children.get(r);return o?o.findOnPath_(W(e),Y(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,P(),t)}foreachOnPath_(e,t,i){if(D(e))return this;{this.value&&i(t,this.value);const s=N(e),r=this.children.get(s);return r?r.foreachOnPath_(W(e),Y(t,s),i):new H(null)}}foreach(e){this.foreach_(P(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Y(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class ve{constructor(e){this.writeTree_=e}static empty(){return new ve(new H(null))}}function bt(n,e,t){if(D(e))return new ve(new H(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=le(s,e);return r=r.updateChild(o,t),new ve(n.writeTree_.set(s,r))}else{const s=new H(t),r=n.writeTree_.setTree(e,s);return new ve(r)}}}function Ss(n,e,t){let i=n;return he(t,(s,r)=>{i=bt(i,Y(e,s),r)}),i}function Ts(n,e){if(D(e))return ve.empty();{const t=n.writeTree_.setTree(e,new H(null));return new ve(t)}}function Jn(n,e){return Ke(n,e)!=null}function Ke(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(le(t.path,e)):null}function Ns(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(G,(i,s)=>{e.push(new R(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new R(i,s.value))}),e}function De(n,e){if(D(e))return n;{const t=Ke(n,e);return t!=null?new ve(new H(t)):new ve(n.writeTree_.subtree(e))}}function Zn(n){return n.writeTree_.isEmpty()}function ot(n,e){return Yr(P(),n.writeTree_,e)}function Yr(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(_(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Yr(Y(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Y(n,".priority"),i)),t}}/**
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
 */function Ii(n,e){return Jr(e,n)}function wu(n,e,t,i,s){_(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=bt(n.visibleWrites,e,t)),n.lastWriteId=i}function Iu(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Su(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);_(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Tu(a,i.path)?s=!1:ge(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Nu(n),!0;if(i.snap)n.visibleWrites=Ts(n.visibleWrites,i.path);else{const a=i.children;he(a,l=>{n.visibleWrites=Ts(n.visibleWrites,Y(i.path,l))})}return!0}else return!1}function Tu(n,e){if(n.snap)return ge(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ge(Y(n.path,t),e))return!0;return!1}function Nu(n){n.visibleWrites=Kr(n.allWrites,Ru,P()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Ru(n){return n.visible}function Kr(n,e,t){let i=ve.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)ge(t,o)?(a=le(t,o),i=bt(i,a,r.snap)):ge(o,t)&&(a=le(o,t),i=bt(i,P(),r.snap.getChild(a)));else if(r.children){if(ge(t,o))a=le(t,o),i=Ss(i,a,r.children);else if(ge(o,t))if(a=le(o,t),D(a))i=Ss(i,P(),r.children);else{const l=it(r.children,N(a));if(l){const c=l.getChild(W(a));i=bt(i,P(),c)}}}else throw at("WriteRecord should have .snap or .children")}}return i}function Qr(n,e,t,i,s){if(!i&&!s){const r=Ke(n.visibleWrites,e);if(r!=null)return r;{const o=De(n.visibleWrites,e);if(Zn(o))return t;if(t==null&&!Jn(o,P()))return null;{const a=t||I.EMPTY_NODE;return ot(o,a)}}}else{const r=De(n.visibleWrites,e);if(!s&&Zn(r))return t;if(!s&&t==null&&!Jn(r,P()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(ge(c.path,e)||ge(e,c.path))},a=Kr(n.allWrites,o,e),l=t||I.EMPTY_NODE;return ot(a,l)}}}function xu(n,e,t){let i=I.EMPTY_NODE;const s=Ke(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(G,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=De(n.visibleWrites,e);return t.forEachChild(G,(o,a)=>{const l=ot(De(r,new L(o)),a);i=i.updateImmediateChild(o,l)}),Ns(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=De(n.visibleWrites,e);return Ns(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Du(n,e,t,i,s){_(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Y(e,t);if(Jn(n.visibleWrites,r))return null;{const o=De(n.visibleWrites,r);return Zn(o)?s.getChild(t):ot(o,s.getChild(t))}}function Au(n,e,t,i){const s=Y(e,t),r=Ke(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=De(n.visibleWrites,s);return ot(o,i.getNode().getImmediateChild(t))}else return null}function ku(n,e){return Ke(n.visibleWrites,e)}function Pu(n,e,t,i,s,r,o){let a;const l=De(n.visibleWrites,e),c=Ke(l,P());if(c!=null)a=c;else if(t!=null)a=ot(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&h.length<s;)u(f,i)!==0&&h.push(f),f=d.getNext();return h}else return[]}function Mu(){return{visibleWrites:ve.empty(),allWrites:[],lastWriteId:-1}}function rn(n,e,t,i){return Qr(n.writeTree,n.treePath,e,t,i)}function Si(n,e){return xu(n.writeTree,n.treePath,e)}function Rs(n,e,t,i){return Du(n.writeTree,n.treePath,e,t,i)}function on(n,e){return ku(n.writeTree,Y(n.treePath,e))}function Ou(n,e,t,i,s,r){return Pu(n.writeTree,n.treePath,e,t,i,s,r)}function Ti(n,e,t){return Au(n.writeTree,n.treePath,e,t)}function Xr(n,e){return Jr(Y(n.treePath,e),n.writeTree)}function Jr(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Lu{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;_(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),_(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,xt(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Rt(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,rt(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,xt(i,e.snapshotNode,s.oldSnap));else throw at("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Fu{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Zr=new Fu;class Ni{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ge(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ti(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qe(this.viewCache_),r=Ou(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function $u(n){return{filter:n}}function Bu(n,e){_(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Vu(n,e,t,i,s){const r=new Lu;let o,a;if(t.type===me.OVERWRITE){const c=t;c.source.fromUser?o=ei(n,e,c.path,c.snap,i,s,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!D(c.path),o=an(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===me.MERGE){const c=t;c.source.fromUser?o=Uu(n,e,c.path,c.children,i,s,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ti(n,e,c.path,c.children,i,s,a,r))}else if(t.type===me.ACK_USER_WRITE){const c=t;c.revert?o=ju(n,e,c.path,i,s,r):o=Hu(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===me.LISTEN_COMPLETE)o=zu(n,e,t.path,i,r);else throw at("Unknown operation type: "+t.type);const l=r.getChanges();return Wu(e,o,l),{viewCache:o,changes:l}}function Wu(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Xn(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(zr(Xn(e)))}}function eo(n,e,t,i,s,r){const o=e.eventCache;if(on(i,t)!=null)return e;{let a,l;if(D(t))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=qe(e),h=c instanceof I?c:I.EMPTY_NODE,u=Si(i,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=rn(i,qe(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=N(t);if(c===".priority"){_(Ae(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=Rs(i,t,h,l);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{const h=W(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Rs(i,t,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=Ti(i,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,h,s,r):a=o.getNode()}}return Et(e,a,o.isFullyInitialized()||D(t),n.filter.filtersNodes())}}function an(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(D(t))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,i);c=h.updateFullNode(l.getNode(),f,null)}else{const f=N(t);if(!l.isCompleteForPath(t)&&Ae(t)>1)return e;const v=W(t),M=l.getNode().getImmediateChild(f).updateChild(v,i);f===".priority"?c=h.updatePriority(l.getNode(),M):c=h.updateChild(l.getNode(),f,M,v,Zr,null)}const u=qr(e,c,l.isFullyInitialized()||D(t),h.filtersNodes()),d=new Ni(s,u,r);return eo(n,u,t,s,d,a)}function ei(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const h=new Ni(s,e,r);if(D(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Et(e,c,!0,n.filter.filtersNodes());else{const u=N(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=Et(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=W(t),f=a.getNode().getImmediateChild(u);let v;if(D(d))v=i;else{const S=h.getCompleteChild(u);S!=null?Or(d)===".priority"&&S.getChild(Fr(d)).isEmpty()?v=S:v=S.updateChild(d,i):v=I.EMPTY_NODE}if(f.equals(v))l=e;else{const S=n.filter.updateChild(a.getNode(),u,v,d,h,o);l=Et(e,S,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function xs(n,e){return n.eventCache.isCompleteForChild(e)}function Uu(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const h=Y(t,l);xs(e,N(h))&&(a=ei(n,a,h,c,s,r,o))}),i.foreach((l,c)=>{const h=Y(t,l);xs(e,N(h))||(a=ei(n,a,h,c,s,r,o))}),a}function Ds(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ti(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;D(t)?c=i:c=new H(null).setTree(t,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),v=Ds(n,f,d);l=an(n,l,new L(u),v,s,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const f=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!f){const v=e.serverCache.getNode().getImmediateChild(u),S=Ds(n,v,d);l=an(n,l,new L(u),S,s,r,o,a)}}),l}function Hu(n,e,t,i,s,r,o){if(on(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(D(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return an(n,e,t,l.getNode().getChild(t),s,r,a,o);if(D(t)){let c=new H(null);return l.getNode().forEachChild(tt,(h,u)=>{c=c.set(new L(h),u)}),ti(n,e,t,c,s,r,a,o)}else return e}else{let c=new H(null);return i.foreach((h,u)=>{const d=Y(t,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),ti(n,e,t,c,s,r,a,o)}}function zu(n,e,t,i,s){const r=e.serverCache,o=qr(e,r.getNode(),r.isFullyInitialized()||D(t),r.isFiltered());return eo(n,o,t,i,Zr,s)}function ju(n,e,t,i,s,r){let o;if(on(i,t)!=null)return e;{const a=new Ni(i,e,s),l=e.eventCache.getNode();let c;if(D(t)||N(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=rn(i,qe(e));else{const u=e.serverCache.getNode();_(u instanceof I,"serverChildren would be complete if leaf node"),h=Si(i,u)}h=h,c=n.filter.updateFullNode(l,h,r)}else{const h=N(t);let u=Ti(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=n.filter.updateChild(l,h,u,W(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,I.EMPTY_NODE,W(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=rn(i,qe(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||on(i,P())!=null,Et(e,c,o,n.filter.filtersNodes())}}/**
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
 */class Gu{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Ci(i.getIndex()),r=hu(i);this.processor_=$u(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(I.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(I.EMPTY_NODE,a.getNode(),null),h=new Ge(l,o.isFullyInitialized(),s.filtersNodes()),u=new Ge(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=pn(u,h),this.eventGenerator_=new vu(this.query_)}get query(){return this.query_}}function qu(n){return n.viewCache_.serverCache.getNode()}function Yu(n,e){const t=qe(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!D(e)&&!t.getImmediateChild(N(e)).isEmpty())?t.getChild(e):null}function As(n){return n.eventRegistrations_.length===0}function Ku(n,e){n.eventRegistrations_.push(e)}function ks(n,e,t){const i=[];if(t){_(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Ps(n,e,t,i){e.type===me.MERGE&&e.source.queryId!==null&&(_(qe(n.viewCache_),"We should always have a full cache before handling merges"),_(Xn(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Vu(n.processor_,s,e,t,i);return Bu(n.processor_,r.viewCache),_(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,to(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Qu(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(G,(r,o)=>{i.push(rt(r,o))}),t.isFullyInitialized()&&i.push(zr(t.getNode())),to(n,i,t.getNode(),e)}function to(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return yu(n.eventGenerator_,e,t,s)}/**
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
 */let ln;class Xu{constructor(){this.views=new Map}}function Ju(n){_(!ln,"__referenceConstructor has already been defined"),ln=n}function Zu(){return _(ln,"Reference.ts has not been loaded"),ln}function eh(n){return n.views.size===0}function Ri(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return _(r!=null,"SyncTree gave us an op for an invalid query."),Ps(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Ps(o,e,t,i));return r}}function th(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=rn(t,s?i:null),l=!1;a?l=!0:i instanceof I?(a=Si(t,i),l=!1):(a=I.EMPTY_NODE,l=!1);const c=pn(new Ge(a,l,!1),new Ge(i,s,!1));return new Gu(e,c)}return o}function nh(n,e,t,i,s,r){const o=th(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Ku(o,t),Qu(o,t)}function ih(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=ke(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(ks(c,t,i)),As(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(ks(l,t,i)),As(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ke(n)&&r.push(new(Zu())(e._repo,e._path)),{removed:r,events:o}}function no(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function nt(n,e){let t=null;for(const i of n.views.values())t=t||Yu(i,e);return t}function io(n,e){if(e._queryParams.loadsAllData())return gn(n);{const i=e._queryIdentifier;return n.views.get(i)}}function so(n,e){return io(n,e)!=null}function ke(n){return gn(n)!=null}function gn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let cn;function sh(n){_(!cn,"__referenceConstructor has already been defined"),cn=n}function rh(){return _(cn,"Reference.ts has not been loaded"),cn}let oh=1;class Ms{constructor(e){this.listenProvider_=e,this.syncPointTree_=new H(null),this.pendingWriteTree_=Mu(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ro(n,e,t,i,s){return wu(n.pendingWriteTree_,e,t,i,s),s?Bt(n,new je(Gr(),e,t)):[]}function Be(n,e,t=!1){const i=Iu(n.pendingWriteTree_,e);if(Su(n.pendingWriteTree_,e)){let r=new H(null);return i.snap!=null?r=r.set(P(),!0):he(i.children,o=>{r=r.set(new L(o),!0)}),Bt(n,new sn(i.path,r,t))}else return[]}function mn(n,e,t){return Bt(n,new je(bi(),e,t))}function ah(n,e,t){const i=H.fromObject(t);return Bt(n,new kt(bi(),e,i))}function lh(n,e){return Bt(n,new At(bi(),e))}function ch(n,e,t){const i=Di(n,t);if(i){const s=Ai(i),r=s.path,o=s.queryId,a=le(r,e),l=new At(wi(o),a);return ki(n,r,l)}else return[]}function ni(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||so(o,e))){const l=ih(o,e,t,i);eh(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(d,f)=>ke(f));if(h&&!u){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=dh(d);for(let v=0;v<f.length;++v){const S=f[v],M=S.query,F=lo(n,S);n.listenProvider_.startListening(wt(M),un(n,M),F.hashFn,F.onComplete)}}}!u&&c.length>0&&!i&&(h?n.listenProvider_.stopListening(wt(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(vn(d));n.listenProvider_.stopListening(wt(d),f)}))}fh(n,c)}return a}function uh(n,e,t,i){const s=Di(n,i);if(s!=null){const r=Ai(s),o=r.path,a=r.queryId,l=le(o,e),c=new je(wi(a),l,t);return ki(n,o,c)}else return[]}function hh(n,e,t,i){const s=Di(n,i);if(s){const r=Ai(s),o=r.path,a=r.queryId,l=le(o,e),c=H.fromObject(t),h=new kt(wi(a),l,c);return ki(n,o,h)}else return[]}function Os(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(d,f)=>{const v=le(d,s);r=r||nt(f,v),o=o||ke(f)});let a=n.syncPointTree_.get(s);a?(o=o||ke(a),r=r||nt(a,P())):(a=new Xu,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=I.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,v)=>{const S=nt(v,P());S&&(r=r.updateImmediateChild(f,S))}));const c=so(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=vn(e);_(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=_h();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const h=Ii(n.pendingWriteTree_,s);let u=nh(a,e,t,h,r,l);if(!c&&!o&&!i){const d=io(a,e);u=u.concat(ph(n,e,d))}return u}function xi(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=le(o,e),c=nt(a,l);if(c)return c});return Qr(s,e,r,t,!0)}function Bt(n,e){return oo(e,n.syncPointTree_,null,Ii(n.pendingWriteTree_,P()))}function oo(n,e,t,i){if(D(n.path))return ao(n,e,t,i);{const s=e.get(P());t==null&&s!=null&&(t=nt(s,P()));let r=[];const o=N(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=Xr(i,o);r=r.concat(oo(a,l,c,h))}return s&&(r=r.concat(Ri(s,n,i,t))),r}}function ao(n,e,t,i){const s=e.get(P());t==null&&s!=null&&(t=nt(s,P()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Xr(i,o),h=n.operationForChild(o);h&&(r=r.concat(ao(h,a,l,c)))}),s&&(r=r.concat(Ri(s,n,i,t))),r}function lo(n,e){const t=e.query,i=un(n,t);return{hashFn:()=>(qu(e)||I.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?ch(n,t._path,i):lh(n,t._path);{const r=uc(s,t);return ni(n,t,null,r)}}}}function un(n,e){const t=vn(e);return n.queryToTagMap.get(t)}function vn(n){return n._path.toString()+"$"+n._queryIdentifier}function Di(n,e){return n.tagToQueryMap.get(e)}function Ai(n){const e=n.indexOf("$");return _(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new L(n.substr(0,e))}}function ki(n,e,t){const i=n.syncPointTree_.get(e);_(i,"Missing sync point for query tag that we're tracking");const s=Ii(n.pendingWriteTree_,e);return Ri(i,t,s,null)}function dh(n){return n.fold((e,t,i)=>{if(t&&ke(t))return[gn(t)];{let s=[];return t&&(s=no(t)),he(i,(r,o)=>{s=s.concat(o)}),s}})}function wt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(rh())(n._repo,n._path):n}function fh(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=vn(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function _h(){return oh++}function ph(n,e,t){const i=e._path,s=un(n,e),r=lo(n,t),o=n.listenProvider_.startListening(wt(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)_(!ke(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!D(c)&&h&&ke(h))return[gn(h).query];{let d=[];return h&&(d=d.concat(no(h).map(f=>f.query))),he(u,(f,v)=>{d=d.concat(v)}),d}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(wt(h),un(n,h))}}return o}/**
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
 */class Pi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Pi(t)}node(){return this.node_}}class Mi{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Y(this.path_,e);return new Mi(this.syncTree_,t)}node(){return xi(this.syncTree_,this.path_)}}const gh=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ls=function(n,e,t){if(!n||typeof n!="object")return n;if(_(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return mh(n[".sv"],e,t);if(typeof n[".sv"]=="object")return vh(n[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},mh=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:_(!1,"Unexpected server value: "+n)}},vh=function(n,e,t){n.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&_(!1,"Unexpected increment value: "+i);const s=e.node();if(_(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},yh=function(n,e,t,i){return Oi(e,new Mi(t,n),i)},co=function(n,e,t){return Oi(n,new Pi(e),t)};function Oi(n,e,t){const i=n.getPriority().val(),s=Ls(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Ls(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new J(a,se(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new J(s))),o.forEachChild(G,(a,l)=>{const c=Oi(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Li{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Fi(n,e){let t=e instanceof L?e:new L(e),i=n,s=N(t);for(;s!==null;){const r=it(i.node.children,s)||{children:{},childCount:0};i=new Li(s,i,r),t=W(t),s=N(t)}return i}function ut(n){return n.node.value}function uo(n,e){n.node.value=e,ii(n)}function ho(n){return n.node.childCount>0}function Ch(n){return ut(n)===void 0&&!ho(n)}function yn(n,e){he(n.node.children,(t,i)=>{e(new Li(t,n,i))})}function fo(n,e,t,i){t&&!i&&e(n),yn(n,s=>{fo(s,e,!0,i)}),t&&i&&e(n)}function Eh(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Vt(n){return new L(n.parent===null?n.name:Vt(n.parent)+"/"+n.name)}function ii(n){n.parent!==null&&bh(n.parent,n.name,n)}function bh(n,e,t){const i=Ch(t),s=Ie(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,ii(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ii(n))}/**
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
 */const wh=/[\[\].#$\/\u0000-\u001F\u007F]/,Ih=/[\[\].#$\u0000-\u001F\u007F]/,Mn=10*1024*1024,_o=function(n){return typeof n=="string"&&n.length!==0&&!wh.test(n)},po=function(n){return typeof n=="string"&&n.length!==0&&!Ih.test(n)},Sh=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),po(n)},Th=function(n,e,t,i){i&&e===void 0||$i(hi(n,"value"),e,t)},$i=function(n,e,t){const i=t instanceof L?new Hc(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Fe(i));if(typeof e=="function")throw new Error(n+"contains a function "+Fe(i)+" with contents = "+e.toString());if(_r(e))throw new Error(n+"contains "+e.toString()+" "+Fe(i));if(typeof e=="string"&&e.length>Mn/3&&fn(e)>Mn)throw new Error(n+"contains a string greater than "+Mn+" utf8 bytes "+Fe(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(he(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!_o(o)))throw new Error(n+" contains an invalid key ("+o+") "+Fe(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);zc(i,o),$i(n,a,i),jc(i)}),s&&r)throw new Error(n+' contains ".value" child '+Fe(i)+" in addition to actual children.")}},go=function(n,e,t,i){if(!(i&&t===void 0)&&!po(t))throw new Error(hi(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Nh=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),go(n,e,t,i)},Rh=function(n,e){if(N(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},xh=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!_o(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Sh(t))throw new Error(hi(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Dh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Bi(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!mi(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function mo(n,e,t){Bi(n,t),vo(n,i=>mi(i,e))}function we(n,e,t){Bi(n,t),vo(n,i=>ge(i,e)||ge(e,i))}function vo(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Ah(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Ah(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Ue&&re("event: "+t.toString()),ct(i)}}}/**
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
 */const kh="repo_interrupt",Ph=25;class Mh{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Dh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=nn(),this.transactionQueueTree_=new Li,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Oh(n,e,t){if(n.stats_=pi(n.repoInfo_),n.forceRestClient_||_c())n.server_=new tn(n.repoInfo_,(i,s,r,o)=>{Fs(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>$s(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ee(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Ee(n.repoInfo_,e,(i,s,r,o)=>{Fs(n,i,s,r,o)},i=>{$s(n,i)},i=>{Fh(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=yc(n.repoInfo_,()=>new mu(n.stats_,n.server_)),n.infoData_=new du,n.infoSyncTree_=new Ms({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=mn(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Wi(n,"connected",!1),n.serverSyncTree_=new Ms({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);we(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Lh(n){const t=n.infoData_.getNode(new L(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Vi(n){return gh({timestamp:Lh(n)})}function Fs(n,e,t,i,s){n.dataUpdateCount++;const r=new L(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Kt(t,c=>se(c));o=hh(n.serverSyncTree_,r,l,s)}else{const l=se(t);o=uh(n.serverSyncTree_,r,l,s)}else if(i){const l=Kt(t,c=>se(c));o=ah(n.serverSyncTree_,r,l)}else{const l=se(t);o=mn(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Cn(n,r)),we(n.eventQueue_,a,o)}function $s(n,e){Wi(n,"connected",e),e===!1&&Bh(n)}function Fh(n,e){he(e,(t,i)=>{Wi(n,t,i)})}function Wi(n,e,t){const i=new L("/.info/"+e),s=se(t);n.infoData_.updateSnapshot(i,s);const r=mn(n.infoSyncTree_,i,s);we(n.eventQueue_,i,r)}function yo(n){return n.nextWriteId_++}function $h(n,e,t,i,s){Ui(n,"set",{path:e.toString(),value:t,priority:i});const r=Vi(n),o=se(t,i),a=xi(n.serverSyncTree_,e),l=co(o,a,r),c=yo(n),h=ro(n.serverSyncTree_,e,l,c,!0);Bi(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const v=d==="ok";v||ue("set at "+e+" failed: "+d);const S=Be(n.serverSyncTree_,c,!v);we(n.eventQueue_,e,S),Uh(n,s,d,f)});const u=Io(n,e);Cn(n,u),we(n.eventQueue_,u,[])}function Bh(n){Ui(n,"onDisconnectEvents");const e=Vi(n),t=nn();Qn(n.onDisconnect_,P(),(s,r)=>{const o=yh(s,r,n.serverSyncTree_,e);jr(t,s,o)});let i=[];Qn(t,P(),(s,r)=>{i=i.concat(mn(n.serverSyncTree_,s,r));const o=Io(n,s);Cn(n,o)}),n.onDisconnect_=nn(),we(n.eventQueue_,P(),i)}function Vh(n,e,t){let i;N(e._path)===".info"?i=Os(n.infoSyncTree_,e,t):i=Os(n.serverSyncTree_,e,t),mo(n.eventQueue_,e._path,i)}function Bs(n,e,t){let i;N(e._path)===".info"?i=ni(n.infoSyncTree_,e,t):i=ni(n.serverSyncTree_,e,t),mo(n.eventQueue_,e._path,i)}function Wh(n){n.persistentConnection_&&n.persistentConnection_.interrupt(kh)}function Ui(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),re(t,...e)}function Uh(n,e,t,i){e&&ct(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Co(n,e,t){return xi(n.serverSyncTree_,e,t)||I.EMPTY_NODE}function Hi(n,e=n.transactionQueueTree_){if(e||En(n,e),ut(e)){const t=bo(n,e);_(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Hh(n,Vt(e),t)}else ho(e)&&yn(e,t=>{Hi(n,t)})}function Hh(n,e,t){const i=t.map(c=>c.currentWriteId),s=Co(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const h=t[c];_(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=le(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Ui(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(Be(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();En(n,Fi(n.transactionQueueTree_,e)),Hi(n,n.transactionQueueTree_),we(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)ct(u[d])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{ue("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}Cn(n,e)}},o)}function Cn(n,e){const t=Eo(n,e),i=Vt(t),s=bo(n,t);return zh(n,s,i),i}function zh(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=le(t,l.path);let h=!1,u;if(_(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,s=s.concat(Be(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Ph)h=!0,u="maxretry",s=s.concat(Be(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Co(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){$i("transaction failed: Data returned ",f,l.path);let v=se(f);typeof f=="object"&&f!=null&&Ie(f,".priority")||(v=v.updatePriority(d.getPriority()));const M=l.currentWriteId,F=Vi(n),te=co(v,d,F);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=te,l.currentWriteId=yo(n),o.splice(o.indexOf(M),1),s=s.concat(ro(n.serverSyncTree_,l.path,te,l.currentWriteId,l.applyLocally)),s=s.concat(Be(n.serverSyncTree_,M,!0))}else h=!0,u="nodata",s=s.concat(Be(n.serverSyncTree_,l.currentWriteId,!0))}we(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}En(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)ct(i[a]);Hi(n,n.transactionQueueTree_)}function Eo(n,e){let t,i=n.transactionQueueTree_;for(t=N(e);t!==null&&ut(i)===void 0;)i=Fi(i,t),e=W(e),t=N(e);return i}function bo(n,e){const t=[];return wo(n,e,t),t.sort((i,s)=>i.order-s.order),t}function wo(n,e,t){const i=ut(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);yn(e,s=>{wo(n,s,t)})}function En(n,e){const t=ut(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,uo(e,t.length>0?t:void 0)}yn(e,i=>{En(n,i)})}function Io(n,e){const t=Vt(Eo(n,e)),i=Fi(n.transactionQueueTree_,e);return Eh(i,s=>{On(n,s)}),On(n,i),fo(i,s=>{On(n,s)}),t}function On(n,e){const t=ut(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(_(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(_(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Be(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?uo(e,void 0):t.length=r+1,we(n.eventQueue_,Vt(e),s);for(let o=0;o<i.length;o++)ct(i[o])}}/**
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
 */function jh(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Gh(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ue(`Invalid query segment '${t}' in query '${n}'`)}return e}const Vs=function(n,e){const t=qh(n),i=t.namespace;t.domain==="firebase.com"&&be(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&be("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||rc();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Tr(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new L(t.pathString)}},qh=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(s=jh(n.substring(h,u)));const d=Gh(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const v=e.indexOf(".");i=e.substring(0,v).toLowerCase(),t=e.substring(v+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class So{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ee(this.snapshot.exportVal())}}class To{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Yh{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return _(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class zi{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return D(this._path)?null:Or(this._path)}get ref(){return new Se(this._repo,this._path)}get _queryIdentifier(){const e=ws(this._queryParams),t=fi(e);return t==="{}"?"default":t}get _queryObject(){return ws(this._queryParams)}isEqual(e){if(e=Ot(e),!(e instanceof zi))return!1;const t=this._repo===e._repo,i=mi(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Uc(this._path)}}class Se extends zi{constructor(e,t){super(e,t,new Ei,!1)}get parent(){const e=Fr(this._path);return e===null?null:new Se(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Pt{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new L(e),i=hn(this.ref,e);return new Pt(this._node.getChild(t),i,G)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Pt(s,hn(this.ref,i),G)))}hasChild(e){const t=new L(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function bn(n,e){return n=Ot(n),n._checkNotDeleted("ref"),e!==void 0?hn(n._root,e):n._root}function hn(n,e){return n=Ot(n),N(n._path)===null?Nh("child","path",e,!1):go("child","path",e,!1),new Se(n._repo,Y(n._path,e))}function No(n,e){n=Ot(n),Rh("set",n._path),Th("set",e,n._path,!1);const t=new dn;return $h(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class ji{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new So("value",this,new Pt(e.snapshotNode,new Se(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new To(this,e,t):null}matches(e){return e instanceof ji?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Gi{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new To(this,e,t):null}createEvent(e,t){_(e.childName!=null,"Child events should have a childName.");const i=hn(new Se(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new So(e.type,this,new Pt(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Gi?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Kh(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(h,u)=>{Bs(n._repo,n,a),l(h,u)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new Yh(t,r||void 0),a=e==="value"?new ji(o):new Gi(e,o);return Vh(n._repo,n,a),()=>Bs(n._repo,n,a)}function $d(n,e,t,i){return Kh(n,"value",e,t,i)}Ju(Se);sh(Se);/**
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
 */const Qh="FIREBASE_DATABASE_EMULATOR_HOST",si={};let Xh=!1;function Jh(n,e,t,i){n.repoInfo_=new Tr(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function Zh(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||be("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),re("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Vs(r,s),a=o.repoInfo,l,c;typeof process<"u"&&rs&&(c=rs[Qh]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Vs(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const h=s&&l?new et(et.OWNER):new gc(n.name,n.options,e);xh("Invalid Firebase Database URL",o),D(o.path)||be("Database URL must point to the root of a Firebase Database (not including a child path).");const u=td(a,n,h,new pc(n.name,t));return new nd(u,n)}function ed(n,e){const t=si[e];(!t||t[n.key]!==n)&&be(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Wh(n),delete t[n.key]}function td(n,e,t,i){let s=si[e.name];s||(s={},si[e.name]=s);let r=s[n.toURLString()];return r&&be("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Mh(n,Xh,t,i),s[n.toURLString()]=r,r}class nd{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Oh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Se(this._repo,P())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ed(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&be("Cannot call "+e+" on a deleted database.")}}function id(n=Ul(),e){const t=$l(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Da("database");i&&sd(t,...i)}return t}function sd(n,e,t,i={}){n=Ot(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&be("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&be('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new et(et.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Aa(i.mockUserToken,n.app.options.projectId);r=new et(o)}Jh(s,e,t,r)}/**
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
 */function rd(n){ec(Wl),Xt(new St("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Zh(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Je(os,as,n),Je(os,as,"esm2017")}Ee.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ee.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};rd();let zt;const od=new Uint8Array(16);function ad(){if(!zt&&(zt=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!zt))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return zt(od)}const ie=[];for(let n=0;n<256;++n)ie.push((n+256).toString(16).slice(1));function ld(n,e=0){return ie[n[e+0]]+ie[n[e+1]]+ie[n[e+2]]+ie[n[e+3]]+"-"+ie[n[e+4]]+ie[n[e+5]]+"-"+ie[n[e+6]]+ie[n[e+7]]+"-"+ie[n[e+8]]+ie[n[e+9]]+"-"+ie[n[e+10]]+ie[n[e+11]]+ie[n[e+12]]+ie[n[e+13]]+ie[n[e+14]]+ie[n[e+15]]}const cd=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ws={randomUUID:cd};function ud(n,e,t){if(Ws.randomUUID&&!e&&!n)return Ws.randomUUID();n=n||{};const i=n.random||(n.rng||ad)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){t=t||0;for(let s=0;s<16;++s)e[t+s]=i[s];return e}return ld(i)}var Ro={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(ya,function(){var t=1e3,i=6e4,s=36e5,r="millisecond",o="second",a="minute",l="hour",c="day",h="week",u="month",d="quarter",f="year",v="date",S="Invalid Date",M=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,F=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,te={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(C){var g=["th","st","nd","rd"],p=C%100;return"["+C+(g[(p-20)%10]||g[p]||g[0])+"]"}},j=function(C,g,p){var y=String(C);return!y||y.length>=g?C:""+Array(g+1-y.length).join(p)+C},k={s:j,z:function(C){var g=-C.utcOffset(),p=Math.abs(g),y=Math.floor(p/60),m=p%60;return(g<=0?"+":"-")+j(y,2,"0")+":"+j(m,2,"0")},m:function C(g,p){if(g.date()<p.date())return-C(p,g);var y=12*(p.year()-g.year())+(p.month()-g.month()),m=g.clone().add(y,u),w=p-m<0,b=g.clone().add(y+(w?-1:1),u);return+(-(y+(p-m)/(w?m-b:b-m))||0)},a:function(C){return C<0?Math.ceil(C)||0:Math.floor(C)},p:function(C){return{M:u,y:f,w:h,d:c,D:v,h:l,m:a,s:o,ms:r,Q:d}[C]||String(C||"").toLowerCase().replace(/s$/,"")},u:function(C){return C===void 0}},z="en",T={};T[z]=te;var K="$isDayjsObject",$=function(C){return C instanceof _e||!(!C||!C[K])},ne=function C(g,p,y){var m;if(!g)return z;if(typeof g=="string"){var w=g.toLowerCase();T[w]&&(m=w),p&&(T[w]=p,m=w);var b=g.split("-");if(!m&&b.length>1)return C(b[0])}else{var A=g.name;T[A]=g,m=A}return!y&&m&&(z=m),m||!y&&z},U=function(C,g){if($(C))return C.clone();var p=typeof g=="object"?g:{};return p.date=C,p.args=arguments,new _e(p)},x=k;x.l=ne,x.i=$,x.w=function(C,g){return U(C,{locale:g.$L,utc:g.$u,x:g.$x,$offset:g.$offset})};var _e=function(){function C(p){this.$L=ne(p.locale,null,!0),this.parse(p),this.$x=this.$x||p.x||{},this[K]=!0}var g=C.prototype;return g.parse=function(p){this.$d=function(y){var m=y.date,w=y.utc;if(m===null)return new Date(NaN);if(x.u(m))return new Date;if(m instanceof Date)return new Date(m);if(typeof m=="string"&&!/Z$/i.test(m)){var b=m.match(M);if(b){var A=b[2]-1||0,B=(b[7]||"0").substring(0,3);return w?new Date(Date.UTC(b[1],A,b[3]||1,b[4]||0,b[5]||0,b[6]||0,B)):new Date(b[1],A,b[3]||1,b[4]||0,b[5]||0,b[6]||0,B)}}return new Date(m)}(p),this.init()},g.init=function(){var p=this.$d;this.$y=p.getFullYear(),this.$M=p.getMonth(),this.$D=p.getDate(),this.$W=p.getDay(),this.$H=p.getHours(),this.$m=p.getMinutes(),this.$s=p.getSeconds(),this.$ms=p.getMilliseconds()},g.$utils=function(){return x},g.isValid=function(){return this.$d.toString()!==S},g.isSame=function(p,y){var m=U(p);return this.startOf(y)<=m&&m<=this.endOf(y)},g.isAfter=function(p,y){return U(p)<this.startOf(y)},g.isBefore=function(p,y){return this.endOf(y)<U(p)},g.$g=function(p,y,m){return x.u(p)?this[y]:this.set(m,p)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(p,y){var m=this,w=!!x.u(y)||y,b=x.p(p),A=function(Oe,ae){var Ne=x.w(m.$u?Date.UTC(m.$y,ae,Oe):new Date(m.$y,ae,Oe),m);return w?Ne:Ne.endOf(c)},B=function(Oe,ae){return x.w(m.toDate()[Oe].apply(m.toDate("s"),(w?[0,0,0,0]:[23,59,59,999]).slice(ae)),m)},q=this.$W,X=this.$M,oe=this.$D,Te="set"+(this.$u?"UTC":"");switch(b){case f:return w?A(1,0):A(31,11);case u:return w?A(1,X):A(0,X+1);case h:var Me=this.$locale().weekStart||0,ht=(q<Me?q+7:q)-Me;return A(w?oe-ht:oe+(6-ht),X);case c:case v:return B(Te+"Hours",0);case l:return B(Te+"Minutes",1);case a:return B(Te+"Seconds",2);case o:return B(Te+"Milliseconds",3);default:return this.clone()}},g.endOf=function(p){return this.startOf(p,!1)},g.$set=function(p,y){var m,w=x.p(p),b="set"+(this.$u?"UTC":""),A=(m={},m[c]=b+"Date",m[v]=b+"Date",m[u]=b+"Month",m[f]=b+"FullYear",m[l]=b+"Hours",m[a]=b+"Minutes",m[o]=b+"Seconds",m[r]=b+"Milliseconds",m)[w],B=w===c?this.$D+(y-this.$W):y;if(w===u||w===f){var q=this.clone().set(v,1);q.$d[A](B),q.init(),this.$d=q.set(v,Math.min(this.$D,q.daysInMonth())).$d}else A&&this.$d[A](B);return this.init(),this},g.set=function(p,y){return this.clone().$set(p,y)},g.get=function(p){return this[x.p(p)]()},g.add=function(p,y){var m,w=this;p=Number(p);var b=x.p(y),A=function(X){var oe=U(w);return x.w(oe.date(oe.date()+Math.round(X*p)),w)};if(b===u)return this.set(u,this.$M+p);if(b===f)return this.set(f,this.$y+p);if(b===c)return A(1);if(b===h)return A(7);var B=(m={},m[a]=i,m[l]=s,m[o]=t,m)[b]||1,q=this.$d.getTime()+p*B;return x.w(q,this)},g.subtract=function(p,y){return this.add(-1*p,y)},g.format=function(p){var y=this,m=this.$locale();if(!this.isValid())return m.invalidDate||S;var w=p||"YYYY-MM-DDTHH:mm:ssZ",b=x.z(this),A=this.$H,B=this.$m,q=this.$M,X=m.weekdays,oe=m.months,Te=m.meridiem,Me=function(ae,Ne,dt,Wt){return ae&&(ae[Ne]||ae(y,w))||dt[Ne].slice(0,Wt)},ht=function(ae){return x.s(A%12||12,ae,"0")},Oe=Te||function(ae,Ne,dt){var Wt=ae<12?"AM":"PM";return dt?Wt.toLowerCase():Wt};return w.replace(F,function(ae,Ne){return Ne||function(dt){switch(dt){case"YY":return String(y.$y).slice(-2);case"YYYY":return x.s(y.$y,4,"0");case"M":return q+1;case"MM":return x.s(q+1,2,"0");case"MMM":return Me(m.monthsShort,q,oe,3);case"MMMM":return Me(oe,q);case"D":return y.$D;case"DD":return x.s(y.$D,2,"0");case"d":return String(y.$W);case"dd":return Me(m.weekdaysMin,y.$W,X,2);case"ddd":return Me(m.weekdaysShort,y.$W,X,3);case"dddd":return X[y.$W];case"H":return String(A);case"HH":return x.s(A,2,"0");case"h":return ht(1);case"hh":return ht(2);case"a":return Oe(A,B,!0);case"A":return Oe(A,B,!1);case"m":return String(B);case"mm":return x.s(B,2,"0");case"s":return String(y.$s);case"ss":return x.s(y.$s,2,"0");case"SSS":return x.s(y.$ms,3,"0");case"Z":return b}return null}(ae)||b.replace(":","")})},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(p,y,m){var w,b=this,A=x.p(y),B=U(p),q=(B.utcOffset()-this.utcOffset())*i,X=this-B,oe=function(){return x.m(b,B)};switch(A){case f:w=oe()/12;break;case u:w=oe();break;case d:w=oe()/3;break;case h:w=(X-q)/6048e5;break;case c:w=(X-q)/864e5;break;case l:w=X/s;break;case a:w=X/i;break;case o:w=X/t;break;default:w=X}return m?w:x.a(w)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return T[this.$L]},g.locale=function(p,y){if(!p)return this.$L;var m=this.clone(),w=ne(p,y,!0);return w&&(m.$L=w),m},g.clone=function(){return x.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},C}(),Q=_e.prototype;return U.prototype=Q,[["$ms",r],["$s",o],["$m",a],["$H",l],["$W",c],["$M",u],["$y",f],["$D",v]].forEach(function(C){Q[C[1]]=function(g){return this.$g(g,C[0],C[1])}}),U.extend=function(C,g){return C.$i||(C(g,_e,U),C.$i=!0),U},U.locale=ne,U.isDayjs=$,U.unix=function(C){return U(1e3*C)},U.en=T[z],U.Ls=T,U.p={},U})})(Ro);var hd=Ro.exports;const Us=Ca(hd),dd={apiKey:"AIzaSyBsrh8MhMPE7stGQf7wt7m7MQ7rstMNt8M",authDomain:"sample-project-9e4c2.firebaseapp.com",databaseURL:"https://sample-project-9e4c2-default-rtdb.firebaseio.com",projectId:"sample-project-9e4c2",storageBucket:"sample-project-9e4c2.appspot.com",messagingSenderId:"199794781922",appId:"1:199794781922:web:44e0854712ce3ab58278bb"},fd=lr(dd),wn=id(fd),Bd=bn(wn,"chatroom"),Vd=bn(wn,"username"),Wd=n=>{No(bn(wn,"username"),n)},Ud=(n,e)=>{No(bn(wn,`chatroom/${Us().unix()}`),{key:ud(),username:n,message:e,time:Us().unix()})};function _d(n){return{aspectStyles:O(()=>{const e=Number(n.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const pd=fe({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...Ye(),...Wo()},"VResponsive"),Hd=ye()({name:"VResponsive",props:pd(),setup(n,e){let{slots:t}=e;const{aspectStyles:i}=_d(n),{dimensionStyles:s}=Uo(n);return Pe(()=>{var r;return E("div",{class:["v-responsive",{"v-responsive--inline":n.inline},n.class],style:[s.value,n.style]},[E("div",{class:"v-responsive__sizer",style:i.value},null),(r=t.additional)==null?void 0:r.call(t),t.default&&E("div",{class:["v-responsive__content",n.contentClass]},[t.default()])])}),{}}}),gd=fe({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function de(n,e,t){return ye()({name:n,props:gd({mode:t,origin:e}),setup(i,s){let{slots:r}=s;const o={onBeforeEnter(a){i.origin&&(a.style.transformOrigin=i.origin)},onLeave(a){if(i.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:h,offsetHeight:u}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${l}px`,a.style.left=`${c}px`,a.style.width=`${h}px`,a.style.height=`${u}px`}i.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(i.leaveAbsolute&&(a!=null&&a._transitionInitialStyles)){const{position:l,top:c,left:h,width:u,height:d}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=l||"",a.style.top=c||"",a.style.left=h||"",a.style.width=u||"",a.style.height=d||""}}};return()=>{const a=i.group?Ho:ri;return oi(a,{name:i.disabled?"":n,css:!i.disabled,...i.group?void 0:{mode:i.mode},...i.disabled?{}:o},r.default)}}})}function xo(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return ye()({name:n,props:{mode:{type:String,default:t},disabled:Boolean},setup(i,s){let{slots:r}=s;return()=>oi(ri,{name:i.disabled?"":n,css:!i.disabled,...i.disabled?{}:e},r.default)}})}function Do(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",i=zo(`offset-${t}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[t]:o.style[t]}},onEnter(o){const a=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const l=`${o[i]}px`;o.style[t]="0",o.offsetHeight,o.style.transition=a.transition,n&&o._parent&&o._parent.classList.add(n),requestAnimationFrame(()=>{o.style[t]=l})},onAfterEnter:r,onEnterCancelled:r,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[t]:o.style[t]},o.style.overflow="hidden",o.style[t]=`${o[i]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[t]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(o){n&&o._parent&&o._parent.classList.remove(n),r(o)}function r(o){const a=o._initialStyle[t];o.style.overflow=o._initialStyle.overflow,a!=null&&(o.style[t]=a),delete o._initialStyle}}de("fab-transition","center center","out-in");de("dialog-bottom-transition");de("dialog-top-transition");const zd=de("fade-transition");de("scale-transition");de("scroll-x-transition");de("scroll-x-reverse-transition");de("scroll-y-transition");de("scroll-y-reverse-transition");de("slide-x-transition");de("slide-x-reverse-transition");const Ao=de("slide-y-transition");de("slide-y-reverse-transition");xo("expand-transition",Do());const md=xo("expand-x-transition",Do("",!0)),ko=fe({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:n=>n!==!0}},"transition"),Po=(n,e)=>{let{slots:t}=e;const{transition:i,disabled:s,...r}=n,{component:o=ri,...a}=typeof i=="object"?i:{};return oi(o,vt(typeof i=="string"?{name:s?"":i}:a,r,{disabled:s}),t)},vd=fe({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Ye(),...ko({transition:{component:Ao}})},"VCounter"),yd=ye()({name:"VCounter",functional:!0,props:vd(),setup(n,e){let{slots:t}=e;const i=O(()=>n.max?`${n.value} / ${n.max}`:String(n.value));return Pe(()=>E(Po,{transition:n.transition},{default:()=>[ai(E("div",{class:["v-counter",n.class],style:n.style},[t.default?t.default({counter:i.value,max:n.max,value:n.value}):i.value]),[[zs,n.active]])]})),{}}}),Cd=fe({text:String,onClick:Ve(),...Ye(),...js()},"VLabel"),Ed=ye()({name:"VLabel",props:Cd(),setup(n,e){let{slots:t}=e;return Pe(()=>{var i;return E("label",{class:["v-label",{"v-label--clickable":!!n.onClick},n.class],style:n.style,onClick:n.onClick},[n.text,(i=t.default)==null?void 0:i.call(t)])}),{}}}),bd=fe({floating:Boolean,...Ye()},"VFieldLabel"),jt=ye()({name:"VFieldLabel",props:bd(),setup(n,e){let{slots:t}=e;return Pe(()=>E(Ed,{class:["v-field-label",{"v-field-label--floating":n.floating},n.class],style:n.style,"aria-hidden":n.floating||void 0},t)),{}}});function Mo(n){const{t:e}=jo();function t(i){let{name:s}=i;const r={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[s],o=n[`onClick:${s}`],a=o&&r?e(`$vuetify.input.${r}`,n.label??""):void 0;return E(Go,{icon:n[`${s}Icon`],"aria-label":a,onClick:o},null)}return{InputIcon:t}}const Oo=fe({focused:Boolean,"onUpdate:focused":Ve()},"focus");function Lo(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Gs();const t=li(n,"focused"),i=O(()=>({[`${e}--focused`]:t.value}));function s(){t.value=!0}function r(){t.value=!1}return{focusClasses:i,isFocused:t,focus:s,blur:r}}const wd=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Fo=fe({appendInnerIcon:yt,bgColor:String,clearable:Boolean,clearIcon:{type:yt,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:yt,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:n=>wd.includes(n)},"onClick:clear":Ve(),"onClick:appendInner":Ve(),"onClick:prependInner":Ve(),...Ye(),...qo(),...Yo(),...js()},"VField"),$o=ye()({name:"VField",inheritAttrs:!1,props:{id:String,...Oo(),...Fo()},emits:{"update:focused":n=>!0,"update:modelValue":n=>!0},setup(n,e){let{attrs:t,emit:i,slots:s}=e;const{themeClasses:r}=Ko(n),{loaderClasses:o}=Qo(n),{focusClasses:a,isFocused:l,focus:c,blur:h}=Lo(n),{InputIcon:u}=Mo(n),{roundedClasses:d}=Xo(n),{rtlClasses:f}=qs(),v=O(()=>n.dirty||n.active),S=O(()=>!n.singleLine&&!!(n.label||s.label)),M=ci(),F=O(()=>n.id||`input-${M}`),te=O(()=>`${F.value}-messages`),j=We(),k=We(),z=We(),T=O(()=>["plain","underlined"].includes(n.variant)),{backgroundColorClasses:K,backgroundColorStyles:$}=Jo(Zo(n,"bgColor")),{textColorClasses:ne,textColorStyles:U}=Ys(O(()=>n.error||n.disabled?void 0:v.value&&l.value?n.color:n.baseColor));mt(v,Q=>{if(S.value){const C=j.value.$el,g=k.value.$el;requestAnimationFrame(()=>{const p=ga(C),y=g.getBoundingClientRect(),m=y.x-p.x,w=y.y-p.y-(p.height/2-y.height/2),b=y.width/.75,A=Math.abs(b-p.width)>1?{maxWidth:ea(b)}:void 0,B=getComputedStyle(C),q=getComputedStyle(g),X=parseFloat(B.transitionDuration)*1e3||150,oe=parseFloat(q.getPropertyValue("--v-field-label-scale")),Te=q.getPropertyValue("color");C.style.visibility="visible",g.style.visibility="hidden",ma(C,{transform:`translate(${m}px, ${w}px) scale(${oe})`,color:Te,...A},{duration:X,easing:va,direction:Q?"normal":"reverse"}).finished.then(()=>{C.style.removeProperty("visibility"),g.style.removeProperty("visibility")})})}},{flush:"post"});const x=O(()=>({isActive:v,isFocused:l,controlRef:z,blur:h,focus:c}));function _e(Q){Q.target!==document.activeElement&&Q.preventDefault()}return Pe(()=>{var m,w,b;const Q=n.variant==="outlined",C=s["prepend-inner"]||n.prependInnerIcon,g=!!(n.clearable||s.clear),p=!!(s["append-inner"]||n.appendInnerIcon||g),y=()=>s.label?s.label({...x.value,label:n.label,props:{for:F.value}}):n.label;return E("div",vt({class:["v-field",{"v-field--active":v.value,"v-field--appended":p,"v-field--center-affix":n.centerAffix??!T.value,"v-field--disabled":n.disabled,"v-field--dirty":n.dirty,"v-field--error":n.error,"v-field--flat":n.flat,"v-field--has-background":!!n.bgColor,"v-field--persistent-clear":n.persistentClear,"v-field--prepended":C,"v-field--reverse":n.reverse,"v-field--single-line":n.singleLine,"v-field--no-label":!y(),[`v-field--variant-${n.variant}`]:!0},r.value,K.value,a.value,o.value,d.value,f.value,n.class],style:[$.value,n.style],onClick:_e},t),[E("div",{class:"v-field__overlay"},null),E(ta,{name:"v-field",active:!!n.loading,color:n.error?"error":typeof n.loading=="string"?n.loading:n.color},{default:s.loader}),C&&E("div",{key:"prepend",class:"v-field__prepend-inner"},[n.prependInnerIcon&&E(u,{key:"prepend-icon",name:"prependInner"},null),(m=s["prepend-inner"])==null?void 0:m.call(s,x.value)]),E("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(n.variant)&&S.value&&E(jt,{key:"floating-label",ref:k,class:[ne.value],floating:!0,for:F.value,style:U.value},{default:()=>[y()]}),E(jt,{ref:j,for:F.value},{default:()=>[y()]}),(w=s.default)==null?void 0:w.call(s,{...x.value,props:{id:F.value,class:"v-field__input","aria-describedby":te.value},focus:c,blur:h})]),g&&E(md,{key:"clear"},{default:()=>[ai(E("div",{class:"v-field__clearable",onMousedown:A=>{A.preventDefault(),A.stopPropagation()}},[s.clear?s.clear():E(u,{name:"clear"},null)]),[[zs,n.dirty]])]}),p&&E("div",{key:"append",class:"v-field__append-inner"},[(b=s["append-inner"])==null?void 0:b.call(s,x.value),n.appendInnerIcon&&E(u,{key:"append-icon",name:"appendInner"},null)]),E("div",{class:["v-field__outline",ne.value],style:U.value},[Q&&E(Gt,null,[E("div",{class:"v-field__outline__start"},null),S.value&&E("div",{class:"v-field__outline__notch"},[E(jt,{ref:k,floating:!0,for:F.value},{default:()=>[y()]})]),E("div",{class:"v-field__outline__end"},null)]),T.value&&S.value&&E(jt,{ref:k,floating:!0,for:F.value},{default:()=>[y()]})])])}),{controlRef:z}}});function Id(n){const e=Object.keys($o.props).filter(t=>!na(t)&&t!=="class"&&t!=="style");return ia(n,e)}const Sd=fe({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...Ye(),...ko({transition:{component:Ao,leaveAbsolute:!0,group:!0}})},"VMessages"),Td=ye()({name:"VMessages",props:Sd(),setup(n,e){let{slots:t}=e;const i=O(()=>qt(n.messages)),{textColorClasses:s,textColorStyles:r}=Ys(O(()=>n.color));return Pe(()=>E(Po,{transition:n.transition,tag:"div",class:["v-messages",s.value,n.class],style:[r.value,n.style],role:"alert","aria-live":"polite"},{default:()=>[n.active&&i.value.map((o,a)=>E("div",{class:"v-messages__message",key:`${a}-${i.value}`},[t.message?t.message({message:o}):o]))]})),{}}}),Nd=Symbol.for("vuetify:form");function Rd(){return sa(Nd,null)}const xd=fe({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Oo()},"validation");function Dd(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Gs(),t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ci();const i=li(n,"modelValue"),s=O(()=>n.validationValue===void 0?i.value:n.validationValue),r=Rd(),o=We([]),a=qi(!0),l=O(()=>!!(qt(i.value===""?null:i.value).length||qt(s.value===""?null:s.value).length)),c=O(()=>!!(n.disabled??(r==null?void 0:r.isDisabled.value))),h=O(()=>!!(n.readonly??(r==null?void 0:r.isReadonly.value))),u=O(()=>{var k;return(k=n.errorMessages)!=null&&k.length?qt(n.errorMessages).concat(o.value).slice(0,Math.max(0,+n.maxErrors)):o.value}),d=O(()=>{let k=(n.validateOn??(r==null?void 0:r.validateOn.value))||"input";k==="lazy"&&(k="input lazy");const z=new Set((k==null?void 0:k.split(" "))??[]);return{blur:z.has("blur")||z.has("input"),input:z.has("input"),submit:z.has("submit"),lazy:z.has("lazy")}}),f=O(()=>{var k;return n.error||(k=n.errorMessages)!=null&&k.length?!1:n.rules.length?a.value?o.value.length||d.value.lazy?null:!0:!o.value.length:!0}),v=qi(!1),S=O(()=>({[`${e}--error`]:f.value===!1,[`${e}--dirty`]:l.value,[`${e}--disabled`]:c.value,[`${e}--readonly`]:h.value})),M=O(()=>n.name??ra(t));oa(()=>{r==null||r.register({id:M.value,validate:j,reset:F,resetValidation:te})}),aa(()=>{r==null||r.unregister(M.value)}),la(async()=>{d.value.lazy||await j(!0),r==null||r.update(M.value,f.value,u.value)}),Yi(()=>d.value.input,()=>{mt(s,()=>{if(s.value!=null)j();else if(n.focused){const k=mt(()=>n.focused,z=>{z||j(),k()})}})}),Yi(()=>d.value.blur,()=>{mt(()=>n.focused,k=>{k||j()})}),mt([f,u],()=>{r==null||r.update(M.value,f.value,u.value)});function F(){i.value=null,$n(te)}function te(){a.value=!0,d.value.lazy?o.value=[]:j(!0)}async function j(){let k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const z=[];v.value=!0;for(const T of n.rules){if(z.length>=+(n.maxErrors??1))break;const $=await(typeof T=="function"?T:()=>T)(s.value);if($!==!0){if($!==!1&&typeof $!="string"){console.warn(`${$} is not a valid value. Rule functions must return boolean true or a string.`);continue}z.push($||"")}}return o.value=z,v.value=!1,a.value=k,o.value}return{errorMessages:u,isDirty:l,isDisabled:c,isReadonly:h,isPristine:a,isValid:f,isValidating:v,reset:F,resetValidation:te,validate:j,validationClasses:S}}const Bo=fe({id:String,appendIcon:yt,centerAffix:{type:Boolean,default:!0},prependIcon:yt,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:n=>["horizontal","vertical"].includes(n)},"onClick:prepend":Ve(),"onClick:append":Ve(),...Ye(),...ca(),...xd()},"VInput"),Hs=ye()({name:"VInput",props:{...Bo()},emits:{"update:modelValue":n=>!0},setup(n,e){let{attrs:t,slots:i,emit:s}=e;const{densityClasses:r}=ua(n),{rtlClasses:o}=qs(),{InputIcon:a}=Mo(n),l=ci(),c=O(()=>n.id||`input-${l}`),h=O(()=>`${c.value}-messages`),{errorMessages:u,isDirty:d,isDisabled:f,isReadonly:v,isPristine:S,isValid:M,isValidating:F,reset:te,resetValidation:j,validate:k,validationClasses:z}=Dd(n,"v-input",c),T=O(()=>({id:c,messagesId:h,isDirty:d,isDisabled:f,isReadonly:v,isPristine:S,isValid:M,isValidating:F,reset:te,resetValidation:j,validate:k})),K=O(()=>{var $;return($=n.errorMessages)!=null&&$.length||!S.value&&u.value.length?u.value:n.hint&&(n.persistentHint||n.focused)?n.hint:n.messages});return Pe(()=>{var _e,Q,C,g;const $=!!(i.prepend||n.prependIcon),ne=!!(i.append||n.appendIcon),U=K.value.length>0,x=!n.hideDetails||n.hideDetails==="auto"&&(U||!!i.details);return E("div",{class:["v-input",`v-input--${n.direction}`,{"v-input--center-affix":n.centerAffix,"v-input--hide-spin-buttons":n.hideSpinButtons},r.value,o.value,z.value,n.class],style:n.style},[$&&E("div",{key:"prepend",class:"v-input__prepend"},[(_e=i.prepend)==null?void 0:_e.call(i,T.value),n.prependIcon&&E(a,{key:"prepend-icon",name:"prepend"},null)]),i.default&&E("div",{class:"v-input__control"},[(Q=i.default)==null?void 0:Q.call(i,T.value)]),ne&&E("div",{key:"append",class:"v-input__append"},[n.appendIcon&&E(a,{key:"append-icon",name:"append"},null),(C=i.append)==null?void 0:C.call(i,T.value)]),x&&E("div",{class:"v-input__details"},[E(Td,{id:h.value,active:U,messages:K.value},{message:i.message}),(g=i.details)==null?void 0:g.call(i,T.value)])])}),{reset:te,resetValidation:j,validate:k,isValid:M,errorMessages:u}}}),Ln=Symbol("Forwarded refs");function Fn(n,e){let t=n;for(;t;){const i=Reflect.getOwnPropertyDescriptor(t,e);if(i)return i;t=Object.getPrototypeOf(t)}}function Ad(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];return n[Ln]=t,new Proxy(n,{get(s,r){if(Reflect.has(s,r))return Reflect.get(s,r);if(!(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))){for(const o of t)if(o.value&&Reflect.has(o.value,r)){const a=Reflect.get(o.value,r);return typeof a=="function"?a.bind(o.value):a}}},has(s,r){if(Reflect.has(s,r))return!0;if(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))return!1;for(const o of t)if(o.value&&Reflect.has(o.value,r))return!0;return!1},set(s,r,o){if(Reflect.has(s,r))return Reflect.set(s,r,o);if(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))return!1;for(const a of t)if(a.value&&Reflect.has(a.value,r))return Reflect.set(a.value,r,o);return!1},getOwnPropertyDescriptor(s,r){var a;const o=Reflect.getOwnPropertyDescriptor(s,r);if(o)return o;if(!(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))){for(const l of t){if(!l.value)continue;const c=Fn(l.value,r)??("_"in l.value?Fn((a=l.value._)==null?void 0:a.setupState,r):void 0);if(c)return c}for(const l of t){const c=l.value&&l.value[Ln];if(!c)continue;const h=c.slice();for(;h.length;){const u=h.shift(),d=Fn(u.value,r);if(d)return d;const f=u.value&&u.value[Ln];f&&h.push(...f)}}}}})}function kd(n,e){if(!ha)return;const t=e.modifiers||{},i=e.value,{handler:s,options:r}=typeof i=="object"?i:{handler:i,options:{}},o=new IntersectionObserver(function(){var u;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(u=n._observe)==null?void 0:u[e.instance.$.uid];if(!c)return;const h=a.some(d=>d.isIntersecting);s&&(!t.quiet||c.init)&&(!t.once||h||c.init)&&s(h,a,l),h&&t.once?Vo(n,e):c.init=!0},r);n._observe=Object(n._observe),n._observe[e.instance.$.uid]={init:!1,observer:o},o.observe(n)}function Vo(n,e){var i;const t=(i=n._observe)==null?void 0:i[e.instance.$.uid];t&&(t.observer.unobserve(n),delete n._observe[e.instance.$.uid])}const Pd={mounted:kd,unmounted:Vo},Md=Pd,Od=["color","file","time","date","datetime-local","week","month"],Ld=fe({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Bo(),...Fo()},"VTextField"),jd=ye()({name:"VTextField",directives:{Intersect:Md},inheritAttrs:!1,props:Ld(),emits:{"click:control":n=>!0,"mousedown:control":n=>!0,"update:focused":n=>!0,"update:modelValue":n=>!0},setup(n,e){let{attrs:t,emit:i,slots:s}=e;const r=li(n,"modelValue"),{isFocused:o,focus:a,blur:l}=Lo(n),c=O(()=>typeof n.counterValue=="function"?n.counterValue(r.value):typeof n.counterValue=="number"?n.counterValue:(r.value??"").toString().length),h=O(()=>{if(t.maxlength)return t.maxlength;if(!(!n.counter||typeof n.counter!="number"&&typeof n.counter!="string"))return n.counter}),u=O(()=>["plain","underlined"].includes(n.variant));function d(T,K){var $,ne;!n.autofocus||!T||(ne=($=K[0].target)==null?void 0:$.focus)==null||ne.call($)}const f=We(),v=We(),S=We(),M=O(()=>Od.includes(n.type)||n.persistentPlaceholder||o.value||n.active);function F(){var T;S.value!==document.activeElement&&((T=S.value)==null||T.focus()),o.value||a()}function te(T){i("mousedown:control",T),T.target!==S.value&&(F(),T.preventDefault())}function j(T){F(),i("click:control",T)}function k(T){T.stopPropagation(),F(),$n(()=>{r.value=null,pa(n["onClick:clear"],T)})}function z(T){var $;const K=T.target;if(r.value=K.value,($=n.modelModifiers)!=null&&$.trim&&["text","search","password","tel","url"].includes(n.type)){const ne=[K.selectionStart,K.selectionEnd];$n(()=>{K.selectionStart=ne[0],K.selectionEnd=ne[1]})}}return Pe(()=>{const T=!!(s.counter||n.counter!==!1&&n.counter!=null),K=!!(T||s.details),[$,ne]=da(t),{modelValue:U,...x}=Hs.filterProps(n),_e=Id(n);return E(Hs,vt({ref:f,modelValue:r.value,"onUpdate:modelValue":Q=>r.value=Q,class:["v-text-field",{"v-text-field--prefixed":n.prefix,"v-text-field--suffixed":n.suffix,"v-input--plain-underlined":u.value},n.class],style:n.style},$,x,{centerAffix:!u.value,focused:o.value}),{...s,default:Q=>{let{id:C,isDisabled:g,isDirty:p,isReadonly:y,isValid:m}=Q;return E($o,vt({ref:v,onMousedown:te,onClick:j,"onClick:clear":k,"onClick:prependInner":n["onClick:prependInner"],"onClick:appendInner":n["onClick:appendInner"],role:n.role},_e,{id:C.value,active:M.value||p.value,dirty:p.value||n.dirty,disabled:g.value,focused:o.value,error:m.value===!1}),{...s,default:w=>{let{props:{class:b,...A}}=w;const B=ai(E("input",vt({ref:S,value:r.value,onInput:z,autofocus:n.autofocus,readonly:y.value,disabled:g.value,name:n.name,placeholder:n.placeholder,size:1,type:n.type,onFocus:F,onBlur:l},A,ne),null),[[fa("intersect"),{handler:d},null,{once:!0}]]);return E(Gt,null,[n.prefix&&E("span",{class:"v-text-field__prefix"},[E("span",{class:"v-text-field__prefix__text"},[n.prefix])]),s.default?E("div",{class:b,"data-no-activator":""},[s.default(),B]):_a(B,{class:b}),n.suffix&&E("span",{class:"v-text-field__suffix"},[E("span",{class:"v-text-field__suffix__text"},[n.suffix])])])}})},details:K?Q=>{var C;return E(Gt,null,[(C=s.details)==null?void 0:C.call(s,Q),T&&E(Gt,null,[E("span",null,null),E(yd,{active:n.persistentCounter||o.value,value:c.value,max:h.value},s.counter)])])}:void 0})}),Ad({},f,v,S)}});export{Po as M,Hd as V,jd as a,ko as b,zd as c,md as d,Ud as e,Us as f,Md as i,pd as m,$d as o,Bd as r,Vd as u,Wd as w};
