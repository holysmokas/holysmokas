import"./modulepreload-polyfill-B5Qt9EMX.js";import"./modulepreload-polyfill-B5Qt9EMX-ulV_1b7r-BGxEsOWE-glEpLKVF-Cjp4O21E.js";/* empty css                                                  */const ma=()=>{};var jr={};/**
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
*/const Mi=function(s){const e=[];let t=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(s.charCodeAt(++r)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},ya=function(s){const e=[];let t=0,r=0;for(;t<s.length;){const o=s[t++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=s[t++];e[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=s[t++],l=s[t++],_=s[t++],v=((o&7)<<18|(c&63)<<12|(l&63)<<6|_&63)-65536;e[r++]=String.fromCharCode(55296+(v>>10)),e[r++]=String.fromCharCode(56320+(v&1023))}else{const c=s[t++],l=s[t++];e[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|l&63)}}return e.join("")},Ui={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<s.length;o+=3){const c=s[o],l=o+1<s.length,_=l?s[o+1]:0,v=o+2<s.length,I=v?s[o+2]:0,S=c>>2,T=(c&3)<<4|_>>4;let C=(_&15)<<2|I>>6,U=I&63;v||(U=64,l||(C=64)),r.push(t[S],t[T],t[C],t[U])}return r.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(Mi(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):ya(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<s.length;){const c=t[s.charAt(o++)],l=o<s.length?t[s.charAt(o)]:0;++o;const _=o<s.length?t[s.charAt(o)]:64;++o;const v=o<s.length?t[s.charAt(o)]:64;if(++o,c==null||l==null||_==null||v==null)throw new wa;const I=c<<2|l>>4;if(r.push(I),_!==64){const S=l<<4&240|_>>2;if(r.push(S),v!==64){const T=_<<6&192|v;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class wa extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const va=function(s){const e=Mi(s);return Ui.encodeByteArray(e,!0)},fn=function(s){return va(s).replace(/\./g,"")},xi=function(s){try{return Ui.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
*/function ba(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
*/const _a=()=>ba().__FIREBASE_DEFAULTS__,Ia=()=>{if(typeof process>"u"||typeof jr>"u")return;const s=jr.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Ta=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&xi(s[1]);return e&&JSON.parse(e)},ys=()=>{try{return ma()||_a()||Ia()||Ta()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},ji=s=>ys()?.emulatorHosts?.[s],Fi=s=>{const e=ji(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Vi=()=>ys()?.config,Bi=s=>ys()?.[`_${s}`];/**
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
*/class Ea{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
* @license
* Copyright 2025 Google LLC
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
*/function ft(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ws(s){return(await fetch(s,{credentials:"include"})).ok}/**
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
*/function $i(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",o=s.iat||0,c=s.sub||s.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...s};return[fn(JSON.stringify(t)),fn(JSON.stringify(l)),""].join(".")}const Nt={};function Sa(){const s={prod:[],emulator:[]};for(const e of Object.keys(Nt))Nt[e]?s.emulator.push(e):s.prod.push(e);return s}function ka(s){let e=document.getElementById(s),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),t=!0),{created:t,element:e}}let Fr=!1;function vs(s,e){if(typeof window>"u"||typeof document>"u"||!ft(window.location.host)||Nt[s]===e||Nt[s]||Fr)return;Nt[s]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",o=Sa().prod.length>0;function c(){const T=document.getElementById(r);T&&T.remove()}function l(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function _(T,C){T.setAttribute("width","24"),T.setAttribute("id",C),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function v(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{Fr=!0,c()},T}function I(T,C){T.setAttribute("id",C),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function S(){const T=ka(r),C=t("text"),U=document.getElementById(C)||document.createElement("span"),D=t("learnmore"),L=document.getElementById(D)||document.createElement("a"),A=t("preprendIcon"),B=document.getElementById(A)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const x=T.element;l(x),I(L,D);const V=v();_(B,A),x.append(B,U,L,V),document.body.appendChild(x)}o?(U.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,U.innerText="Preview backend running in this workspace."),U.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
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
*/function X(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Aa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(X())}function Ca(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ra(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Na(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pa(){const s=X();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function Oa(){try{return typeof indexedDB=="object"}catch{return!1}}function Da(){return new Promise((s,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(r),s(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}/**
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
*/const La="FirebaseError";class me extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=La,Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jt.prototype.create)}}class jt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},o=`${this.service}/${e}`,c=this.errors[e],l=c?Ma(c,r):"Error",_=`${this.serviceName}: ${l} (${o}).`;return new me(o,_,r)}}function Ma(s,e){return s.replace(Ua,(t,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const Ua=/\{\$([^}]+)}/g;function xa(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function Je(s,e){if(s===e)return!0;const t=Object.keys(s),r=Object.keys(e);for(const o of t){if(!r.includes(o))return!1;const c=s[o],l=e[o];if(Vr(c)&&Vr(l)){if(!Je(c,l))return!1}else if(c!==l)return!1}for(const o of r)if(!t.includes(o))return!1;return!0}function Vr(s){return s!==null&&typeof s=="object"}/**
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
*/function Ft(s){const e=[];for(const[t,r]of Object.entries(s))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ja(s,e){const t=new Fa(s,e);return t.subscribe.bind(t)}class Fa{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let o;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Va(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:r},o.next===void 0&&(o.next=Zn),o.error===void 0&&(o.error=Zn),o.complete===void 0&&(o.complete=Zn);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Va(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function Zn(){}/**
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
*/function Qe(s){return s&&s._delegate?s._delegate:s}class xe{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
*/const He="[DEFAULT]";/**
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
*/class Ba{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ea;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ha(e))try{this.getOrInitializeService({instanceIdentifier:He})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(e=He){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=He){return this.instances.has(e)}getOptions(e=He){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[c,l]of this.instancesDeferred.entries()){const _=this.normalizeInstanceIdentifier(c);r===_&&l.resolve(o)}return o}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(r)??new Set;o.add(e),this.onInitCallbacks.set(r,o);const c=this.instances.get(r);return c&&e(c,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const o of r)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$a(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=He){return this.component?this.component.multipleInstances?e:He:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $a(s){return s===He?void 0:s}function Ha(s){return s.instantiationMode==="EAGER"}/**
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
*/class za{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ba(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
*/var M;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(M||(M={}));const Wa={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},qa=M.INFO,Ga={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},Ka=(s,e,...t)=>{if(e<s.logLevel)return;const r=new Date().toISOString(),o=Ga[e];if(o)console[o](`[${r}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bs{constructor(e){this.name=e,this._logLevel=qa,this._logHandler=Ka,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}const Ja=(s,e)=>e.some(t=>s instanceof t);let Br,$r;function Xa(){return Br||(Br=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ya(){return $r||($r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hi=new WeakMap,cs=new WeakMap,zi=new WeakMap,Qn=new WeakMap,_s=new WeakMap;function Za(s){const e=new Promise((t,r)=>{const o=()=>{s.removeEventListener("success",c),s.removeEventListener("error",l)},c=()=>{t(Me(s.result)),o()},l=()=>{r(s.error),o()};s.addEventListener("success",c),s.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&Hi.set(t,s)}).catch(()=>{}),_s.set(e,s),e}function Qa(s){if(cs.has(s))return;const e=new Promise((t,r)=>{const o=()=>{s.removeEventListener("complete",c),s.removeEventListener("error",l),s.removeEventListener("abort",l)},c=()=>{t(),o()},l=()=>{r(s.error||new DOMException("AbortError","AbortError")),o()};s.addEventListener("complete",c),s.addEventListener("error",l),s.addEventListener("abort",l)});cs.set(s,e)}let hs={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return cs.get(s);if(e==="objectStoreNames")return s.objectStoreNames||zi.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Me(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function ec(s){hs=s(hs)}function tc(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=s.call(es(this),e,...t);return zi.set(r,e.sort?e.sort():[e]),Me(r)}:Ya().includes(s)?function(...e){return s.apply(es(this),e),Me(Hi.get(this))}:function(...e){return Me(s.apply(es(this),e))}}function nc(s){return typeof s=="function"?tc(s):(s instanceof IDBTransaction&&Qa(s),Ja(s,Xa())?new Proxy(s,hs):s)}function Me(s){if(s instanceof IDBRequest)return Za(s);if(Qn.has(s))return Qn.get(s);const e=nc(s);return e!==s&&(Qn.set(s,e),_s.set(e,s)),e}const es=s=>_s.get(s);function sc(s,e,{blocked:t,upgrade:r,blocking:o,terminated:c}={}){const l=indexedDB.open(s,e),_=Me(l);return r&&l.addEventListener("upgradeneeded",v=>{r(Me(l.result),v.oldVersion,v.newVersion,Me(l.transaction),v)}),t&&l.addEventListener("blocked",v=>t(v.oldVersion,v.newVersion,v)),_.then(v=>{c&&v.addEventListener("close",()=>c()),o&&v.addEventListener("versionchange",I=>o(I.oldVersion,I.newVersion,I))}).catch(()=>{}),_}const rc=["get","getKey","getAll","getAllKeys","count"],ic=["put","add","delete","clear"],ts=new Map;function Hr(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(ts.get(e))return ts.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,o=ic.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(o||rc.includes(t)))return;const c=async function(l,..._){const v=this.transaction(l,o?"readwrite":"readonly");let I=v.store;return r&&(I=I.index(_.shift())),(await Promise.all([I[t](..._),o&&v.done]))[0]};return ts.set(e,c),c}ec(s=>({...s,get:(e,t,r)=>Hr(e,t)||s.get(e,t,r),has:(e,t)=>!!Hr(e,t)||s.has(e,t)}));/**
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
*/class oc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ac(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(e=>e).join(" ")}}function ac(s){return s.getComponent()?.type==="VERSION"}const ls="@firebase/app",zr="0.14.4";/**
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
*/const _e=new bs("@firebase/app"),cc="@firebase/app-compat",hc="@firebase/analytics-compat",lc="@firebase/analytics",uc="@firebase/app-check-compat",dc="@firebase/app-check",fc="@firebase/auth",pc="@firebase/auth-compat",gc="@firebase/database",mc="@firebase/data-connect",yc="@firebase/database-compat",wc="@firebase/functions",vc="@firebase/functions-compat",bc="@firebase/installations",_c="@firebase/installations-compat",Ic="@firebase/messaging",Tc="@firebase/messaging-compat",Ec="@firebase/performance",Sc="@firebase/performance-compat",kc="@firebase/remote-config",Ac="@firebase/remote-config-compat",Cc="@firebase/storage",Rc="@firebase/storage-compat",Nc="@firebase/firestore",Pc="@firebase/ai",Oc="@firebase/firestore-compat",Dc="firebase",Lc="12.4.0";/**
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
*/const us="[DEFAULT]",Mc={[ls]:"fire-core",[cc]:"fire-core-compat",[lc]:"fire-analytics",[hc]:"fire-analytics-compat",[dc]:"fire-app-check",[uc]:"fire-app-check-compat",[fc]:"fire-auth",[pc]:"fire-auth-compat",[gc]:"fire-rtdb",[mc]:"fire-data-connect",[yc]:"fire-rtdb-compat",[wc]:"fire-fn",[vc]:"fire-fn-compat",[bc]:"fire-iid",[_c]:"fire-iid-compat",[Ic]:"fire-fcm",[Tc]:"fire-fcm-compat",[Ec]:"fire-perf",[Sc]:"fire-perf-compat",[kc]:"fire-rc",[Ac]:"fire-rc-compat",[Cc]:"fire-gcs",[Rc]:"fire-gcs-compat",[Nc]:"fire-fst",[Oc]:"fire-fst-compat",[Pc]:"fire-vertex","fire-js":"fire-js",[Dc]:"fire-js-all"};/**
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
*/const pn=new Map,Uc=new Map,ds=new Map;function Wr(s,e){try{s.container.addComponent(e)}catch(t){_e.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function Xe(s){const e=s.name;if(ds.has(e))return _e.debug(`There were multiple attempts to register component ${e}.`),!1;ds.set(e,s);for(const t of pn.values())Wr(t,s);for(const t of Uc.values())Wr(t,s);return!0}function En(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function se(s){return s==null?!1:s.settings!==void 0}/**
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
*/const xc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ue=new jt("app","Firebase",xc);/**
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
*/class jc{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}}/**
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
*/const et=Lc;function Wi(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const r={name:us,automaticDataCollectionEnabled:!0,...e},o=r.name;if(typeof o!="string"||!o)throw Ue.create("bad-app-name",{appName:String(o)});if(t||(t=Vi()),!t)throw Ue.create("no-options");const c=pn.get(o);if(c){if(Je(t,c.options)&&Je(r,c.config))return c;throw Ue.create("duplicate-app",{appName:o})}const l=new za(o);for(const v of ds.values())l.addComponent(v);const _=new jc(t,r,l);return pn.set(o,_),_}function Is(s=us){const e=pn.get(s);if(!e&&s===us&&Vi())return Wi();if(!e)throw Ue.create("no-app",{appName:s});return e}function de(s,e,t){let r=Mc[s]??s;t&&(r+=`-${t}`);const o=r.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const l=[`Unable to register library "${r}" with version "${e}":`];o&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&c&&l.push("and"),c&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_e.warn(l.join(" "));return}Xe(new xe(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
*/const Fc="firebase-heartbeat-database",Vc=1,Mt="firebase-heartbeat-store";let ns=null;function qi(){return ns||(ns=sc(Fc,Vc,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Mt)}catch(t){console.warn(t)}}}}).catch(s=>{throw Ue.create("idb-open",{originalErrorMessage:s.message})})),ns}async function Bc(s){try{const e=(await qi()).transaction(Mt),t=await e.objectStore(Mt).get(Gi(s));return await e.done,t}catch(e){if(e instanceof me)_e.warn(e.message);else{const t=Ue.create("idb-get",{originalErrorMessage:e?.message});_e.warn(t.message)}}}async function qr(s,e){try{const t=(await qi()).transaction(Mt,"readwrite");await t.objectStore(Mt).put(e,Gi(s)),await t.done}catch(t){if(t instanceof me)_e.warn(t.message);else{const r=Ue.create("idb-set",{originalErrorMessage:t?.message});_e.warn(r.message)}}}function Gi(s){return`${s.name}!${s.options.appId}`}/**
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
*/const $c=1024,Hc=30;class zc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qc(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Gr();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(r=>r.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>Hc){const r=Gc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){_e.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gr(),{heartbeatsToSend:t,unsentEntries:r}=Wc(this._heartbeatsCache.heartbeats),o=fn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return _e.warn(e),""}}}function Gr(){return new Date().toISOString().substring(0,10)}function Wc(s,e=$c){const t=[];let r=s.slice();for(const o of s){const c=t.find(l=>l.agent===o.agent);if(c){if(c.dates.push(o.date),Kr(t)>e){c.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Kr(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class qc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oa()?Da().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Bc(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return qr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return qr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}else return}}function Kr(s){return fn(JSON.stringify({version:2,heartbeats:s})).length}function Gc(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let r=1;r<s.length;r++)s[r].date<t&&(t=s[r].date,e=r);return e}/**
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
*/function Kc(s){Xe(new xe("platform-logger",e=>new oc(e),"PRIVATE")),Xe(new xe("heartbeat",e=>new zc(e),"PRIVATE")),de(ls,zr,s),de(ls,zr,"esm2020"),de("fire-js","")}Kc("");var Jc="firebase",Xc="12.4.0";/**
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
*/de(Jc,Xc,"app");var Jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ts;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,u){function f(){}f.prototype=u.prototype,g.F=u.prototype,g.prototype=new f,g.prototype.constructor=g,g.D=function(m,p,w){for(var d=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)d[Z-2]=arguments[Z];return u.prototype[p].apply(m,d)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(g,u,f){f||(f=0);const m=Array(16);if(typeof u=="string")for(var p=0;p<16;++p)m[p]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(p=0;p<16;++p)m[p]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=g.g[0],f=g.g[1],p=g.g[2];let w=g.g[3],d;d=u+(w^f&(p^w))+m[0]+3614090360&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+m[1]+3905402710&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+m[2]+606105819&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+m[3]+3250441966&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(w^f&(p^w))+m[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+m[5]+1200080426&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+m[6]+2821735955&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+m[7]+4249261313&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(w^f&(p^w))+m[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+m[9]+2336552879&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+m[10]+4294925233&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+m[11]+2304563134&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(w^f&(p^w))+m[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+m[13]+4254626195&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+m[14]+2792965006&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+m[15]+1236535329&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(p^w&(f^p))+m[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+m[6]+3225465664&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+m[11]+643717713&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+m[0]+3921069994&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^w&(f^p))+m[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+m[10]+38016083&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+m[15]+3634488961&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+m[4]+3889429448&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^w&(f^p))+m[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+m[14]+3275163606&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+m[3]+4107603335&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+m[8]+1163531501&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^w&(f^p))+m[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+m[2]+4243563512&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+m[7]+1735328473&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+m[12]+2368359562&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(f^p^w)+m[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+m[8]+2272392833&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+m[11]+1839030562&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+m[14]+4259657740&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^w)+m[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+m[4]+1272893353&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+m[7]+4139469664&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+m[10]+3200236656&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^w)+m[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+m[0]+3936430074&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+m[3]+3572445317&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+m[6]+76029189&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^w)+m[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+m[12]+3873151461&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+m[15]+530742520&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+m[2]+3299628645&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(p^(f|~w))+m[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+m[7]+1126891415&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+m[14]+2878612391&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+m[5]+4237533241&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~w))+m[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+m[3]+2399980690&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+m[10]+4293915773&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+m[1]+2240044497&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~w))+m[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+m[15]+4264355552&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+m[6]+2734768916&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+m[13]+1309151649&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~w))+m[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+m[11]+3174756917&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+m[2]+718787259&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+m[9]+3951481745&4294967295,g.g[0]=g.g[0]+u&4294967295,g.g[1]=g.g[1]+(p+(d<<21&4294967295|d>>>11))&4294967295,g.g[2]=g.g[2]+p&4294967295,g.g[3]=g.g[3]+w&4294967295}r.prototype.v=function(g,u){u===void 0&&(u=g.length);const f=u-this.blockSize,m=this.C;let p=this.h,w=0;for(;w<u;){if(p==0)for(;w<=f;)o(this,g,w),w+=this.blockSize;if(typeof g=="string"){for(;w<u;)if(m[p++]=g.charCodeAt(w++),p==this.blockSize){o(this,m),p=0;break}}else for(;w<u;)if(m[p++]=g[w++],p==this.blockSize){o(this,m),p=0;break}}this.h=p,this.o+=u},r.prototype.A=function(){var g=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);g[0]=128;for(var u=1;u<g.length-8;++u)g[u]=0;u=this.o*8;for(var f=g.length-8;f<g.length;++f)g[f]=u&255,u/=256;for(this.v(g),g=Array(16),u=0,f=0;f<4;++f)for(let m=0;m<32;m+=8)g[u++]=this.g[f]>>>m&255;return g};function c(g,u){var f=_;return Object.prototype.hasOwnProperty.call(f,g)?f[g]:f[g]=u(g)}function l(g,u){this.h=u;const f=[];let m=!0;for(let p=g.length-1;p>=0;p--){const w=g[p]|0;m&&w==u||(f[p]=w,m=!1)}this.g=f}var _={};function v(g){return-128<=g&&g<128?c(g,function(u){return new l([u|0],u<0?-1:0)}):new l([g|0],g<0?-1:0)}function I(g){if(isNaN(g)||!isFinite(g))return T;if(g<0)return A(I(-g));const u=[];let f=1;for(let m=0;g>=f;m++)u[m]=g/f|0,f*=4294967296;return new l(u,0)}function S(g,u){if(g.length==0)throw Error("number format error: empty string");if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(g.charAt(0)=="-")return A(S(g.substring(1),u));if(g.indexOf("-")>=0)throw Error('number format error: interior "-" character');const f=I(Math.pow(u,8));let m=T;for(let w=0;w<g.length;w+=8){var p=Math.min(8,g.length-w);const d=parseInt(g.substring(w,w+p),u);p<8?(p=I(Math.pow(u,p)),m=m.j(p).add(I(d))):(m=m.j(f),m=m.add(I(d)))}return m}var T=v(0),C=v(1),U=v(16777216);s=l.prototype,s.m=function(){if(L(this))return-A(this).m();let g=0,u=1;for(let f=0;f<this.g.length;f++){const m=this.i(f);g+=(m>=0?m:4294967296+m)*u,u*=4294967296}return g},s.toString=function(g){if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(D(this))return"0";if(L(this))return"-"+A(this).toString(g);const u=I(Math.pow(g,6));var f=this;let m="";for(;;){const p=te(f,u).g;f=B(f,p.j(u));let w=((f.g.length>0?f.g[0]:f.h)>>>0).toString(g);if(f=p,D(f))return w+m;for(;w.length<6;)w="0"+w;m=w+m}},s.i=function(g){return g<0?0:g<this.g.length?this.g[g]:this.h};function D(g){if(g.h!=0)return!1;for(let u=0;u<g.g.length;u++)if(g.g[u]!=0)return!1;return!0}function L(g){return g.h==-1}s.l=function(g){return g=B(this,g),L(g)?-1:D(g)?0:1};function A(g){const u=g.g.length,f=[];for(let m=0;m<u;m++)f[m]=~g.g[m];return new l(f,~g.h).add(C)}s.abs=function(){return L(this)?A(this):this},s.add=function(g){const u=Math.max(this.g.length,g.g.length),f=[];let m=0;for(let p=0;p<=u;p++){let w=m+(this.i(p)&65535)+(g.i(p)&65535),d=(w>>>16)+(this.i(p)>>>16)+(g.i(p)>>>16);m=d>>>16,w&=65535,d&=65535,f[p]=d<<16|w}return new l(f,f[f.length-1]&-2147483648?-1:0)};function B(g,u){return g.add(A(u))}s.j=function(g){if(D(this)||D(g))return T;if(L(this))return L(g)?A(this).j(A(g)):A(A(this).j(g));if(L(g))return A(this.j(A(g)));if(this.l(U)<0&&g.l(U)<0)return I(this.m()*g.m());const u=this.g.length+g.g.length,f=[];for(var m=0;m<2*u;m++)f[m]=0;for(m=0;m<this.g.length;m++)for(let p=0;p<g.g.length;p++){const w=this.i(m)>>>16,d=this.i(m)&65535,Z=g.i(p)>>>16,Fe=g.i(p)&65535;f[2*m+2*p]+=d*Fe,x(f,2*m+2*p),f[2*m+2*p+1]+=w*Fe,x(f,2*m+2*p+1),f[2*m+2*p+1]+=d*Z,x(f,2*m+2*p+1),f[2*m+2*p+2]+=w*Z,x(f,2*m+2*p+2)}for(g=0;g<u;g++)f[g]=f[2*g+1]<<16|f[2*g];for(g=u;g<2*u;g++)f[g]=0;return new l(f,0)};function x(g,u){for(;(g[u]&65535)!=g[u];)g[u+1]+=g[u]>>>16,g[u]&=65535,u++}function V(g,u){this.g=g,this.h=u}function te(g,u){if(D(u))throw Error("division by zero");if(D(g))return new V(T,T);if(L(g))return u=te(A(g),u),new V(A(u.g),A(u.h));if(L(u))return u=te(g,A(u)),new V(A(u.g),u.h);if(g.g.length>30){if(L(g)||L(u))throw Error("slowDivide_ only works with positive integers.");for(var f=C,m=u;m.l(g)<=0;)f=Q(f),m=Q(m);var p=Y(f,1),w=Y(m,1);for(m=Y(m,2),f=Y(f,2);!D(m);){var d=w.add(m);d.l(g)<=0&&(p=p.add(f),w=d),m=Y(m,1),f=Y(f,1)}return u=B(g,p.j(u)),new V(p,u)}for(p=T;g.l(u)>=0;){for(f=Math.max(1,Math.floor(g.m()/u.m())),m=Math.ceil(Math.log(f)/Math.LN2),m=m<=48?1:Math.pow(2,m-48),w=I(f),d=w.j(u);L(d)||d.l(g)>0;)f-=m,w=I(f),d=w.j(u);D(w)&&(w=C),p=p.add(w),g=B(g,d)}return new V(p,g)}s.B=function(g){return te(this,g).h},s.and=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let m=0;m<u;m++)f[m]=this.i(m)&g.i(m);return new l(f,this.h&g.h)},s.or=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let m=0;m<u;m++)f[m]=this.i(m)|g.i(m);return new l(f,this.h|g.h)},s.xor=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let m=0;m<u;m++)f[m]=this.i(m)^g.i(m);return new l(f,this.h^g.h)};function Q(g){const u=g.g.length+1,f=[];for(let m=0;m<u;m++)f[m]=g.i(m)<<1|g.i(m-1)>>>31;return new l(f,g.h)}function Y(g,u){const f=u>>5;u%=32;const m=g.g.length-f,p=[];for(let w=0;w<m;w++)p[w]=u>0?g.i(w+f)>>>u|g.i(w+f+1)<<32-u:g.i(w+f);return new l(p,g.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=I,l.fromString=S,Ts=l}).apply(typeof Jr<"u"?Jr:typeof self<"u"?self:typeof window<"u"?window:{});var sn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var s,e=Object.defineProperty;function t(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof sn=="object"&&sn];for(var i=0;i<n.length;++i){var a=n[i];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=t(this);function o(n,i){if(i)e:{var a=r;n=n.split(".");for(var h=0;h<n.length-1;h++){var y=n[h];if(!(y in a))break e;a=a[y]}n=n[n.length-1],h=a[n],i=i(h),i!=h&&i!=null&&e(a,n,{configurable:!0,writable:!0,value:i})}}o("Symbol.dispose",function(n){return n||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(n){return n||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(n){return n||function(i){var a=[],h;for(h in i)Object.prototype.hasOwnProperty.call(i,h)&&a.push([h,i[h]]);return a}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},l=this||self;function _(n){var i=typeof n;return i=="object"&&n!=null||i=="function"}function v(n,i,a){return n.call.apply(n.bind,arguments)}function I(n,i,a){return I=v,I.apply(null,arguments)}function S(n,i){var a=Array.prototype.slice.call(arguments,1);return function(){var h=a.slice();return h.push.apply(h,arguments),n.apply(this,h)}}function T(n,i){function a(){}a.prototype=i.prototype,n.Z=i.prototype,n.prototype=new a,n.prototype.constructor=n,n.Ob=function(h,y,b){for(var E=Array(arguments.length-2),R=2;R<arguments.length;R++)E[R-2]=arguments[R];return i.prototype[y].apply(h,E)}}var C=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?n=>n&&AsyncContext.Snapshot.wrap(n):n=>n;function U(n){const i=n.length;if(i>0){const a=Array(i);for(let h=0;h<i;h++)a[h]=n[h];return a}return[]}function D(n,i){for(let h=1;h<arguments.length;h++){const y=arguments[h];var a=typeof y;if(a=a!="object"?a:y?Array.isArray(y)?"array":a:"null",a=="array"||a=="object"&&typeof y.length=="number"){a=n.length||0;const b=y.length||0;n.length=a+b;for(let E=0;E<b;E++)n[a+E]=y[E]}else n.push(y)}}class L{constructor(i,a){this.i=i,this.j=a,this.h=0,this.g=null}get(){let i;return this.h>0?(this.h--,i=this.g,this.g=i.next,i.next=null):i=this.i(),i}}function A(n){l.setTimeout(()=>{throw n},0)}function B(){var n=g;let i=null;return n.g&&(i=n.g,n.g=n.g.next,n.g||(n.h=null),i.next=null),i}class x{constructor(){this.h=this.g=null}add(i,a){const h=V.get();h.set(i,a),this.h?this.h.next=h:this.g=h,this.h=h}}var V=new L(()=>new te,n=>n.reset());class te{constructor(){this.next=this.g=this.h=null}set(i,a){this.h=i,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,Y=!1,g=new x,u=()=>{const n=Promise.resolve(void 0);Q=()=>{n.then(f)}};function f(){for(var n;n=B();){try{n.h.call(n.g)}catch(a){A(a)}var i=V;i.j(n),i.h<100&&(i.h++,n.next=i.g,i.g=n)}Y=!1}function m(){this.u=this.u,this.C=this.C}m.prototype.u=!1,m.prototype.dispose=function(){this.u||(this.u=!0,this.N())},m.prototype[Symbol.dispose]=function(){this.dispose()},m.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function p(n,i){this.type=n,this.g=this.target=i,this.defaultPrevented=!1}p.prototype.h=function(){this.defaultPrevented=!0};var w=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var n=!1,i=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const a=()=>{};l.addEventListener("test",a,i),l.removeEventListener("test",a,i)}catch{}return n})();function d(n){return/^[\s\xa0]*$/.test(n)}function Z(n,i){p.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n&&this.init(n,i)}T(Z,p),Z.prototype.init=function(n,i){const a=this.type=n.type,h=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;this.target=n.target||n.srcElement,this.g=i,i=n.relatedTarget,i||(a=="mouseover"?i=n.fromElement:a=="mouseout"&&(i=n.toElement)),this.relatedTarget=i,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=n.pointerType,this.state=n.state,this.i=n,n.defaultPrevented&&Z.Z.h.call(this)},Z.prototype.h=function(){Z.Z.h.call(this);const n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Fe="closure_listenable_"+(Math.random()*1e6|0),jo=0;function Fo(n,i,a,h,y){this.listener=n,this.proxy=null,this.src=i,this.type=a,this.capture=!!h,this.ha=y,this.key=++jo,this.da=this.fa=!1}function Wt(n){n.da=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function qt(n,i,a){for(const h in n)i.call(a,n[h],h,n)}function Vo(n,i){for(const a in n)i.call(void 0,n[a],a,n)}function Fs(n){const i={};for(const a in n)i[a]=n[a];return i}const Vs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Bs(n,i){let a,h;for(let y=1;y<arguments.length;y++){h=arguments[y];for(a in h)n[a]=h[a];for(let b=0;b<Vs.length;b++)a=Vs[b],Object.prototype.hasOwnProperty.call(h,a)&&(n[a]=h[a])}}function Gt(n){this.src=n,this.g={},this.h=0}Gt.prototype.add=function(n,i,a,h,y){const b=n.toString();n=this.g[b],n||(n=this.g[b]=[],this.h++);const E=Cn(n,i,h,y);return E>-1?(i=n[E],a||(i.fa=!1)):(i=new Fo(i,this.src,b,!!h,y),i.fa=a,n.push(i)),i};function An(n,i){const a=i.type;if(a in n.g){var h=n.g[a],y=Array.prototype.indexOf.call(h,i,void 0),b;(b=y>=0)&&Array.prototype.splice.call(h,y,1),b&&(Wt(i),n.g[a].length==0&&(delete n.g[a],n.h--))}}function Cn(n,i,a,h){for(let y=0;y<n.length;++y){const b=n[y];if(!b.da&&b.listener==i&&b.capture==!!a&&b.ha==h)return y}return-1}var Rn="closure_lm_"+(Math.random()*1e6|0),Nn={};function $s(n,i,a,h,y){if(Array.isArray(i)){for(let b=0;b<i.length;b++)$s(n,i[b],a,h,y);return null}return a=Ws(a),n&&n[Fe]?n.J(i,a,_(h)?!!h.capture:!1,y):Bo(n,i,a,!1,h,y)}function Bo(n,i,a,h,y,b){if(!i)throw Error("Invalid event type");const E=_(y)?!!y.capture:!!y;let R=On(n);if(R||(n[Rn]=R=new Gt(n)),a=R.add(i,a,h,E,b),a.proxy)return a;if(h=$o(),a.proxy=h,h.src=n,h.listener=a,n.addEventListener)w||(y=E),y===void 0&&(y=!1),n.addEventListener(i.toString(),h,y);else if(n.attachEvent)n.attachEvent(zs(i.toString()),h);else if(n.addListener&&n.removeListener)n.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return a}function $o(){function n(a){return i.call(n.src,n.listener,a)}const i=Ho;return n}function Hs(n,i,a,h,y){if(Array.isArray(i))for(var b=0;b<i.length;b++)Hs(n,i[b],a,h,y);else h=_(h)?!!h.capture:!!h,a=Ws(a),n&&n[Fe]?(n=n.i,b=String(i).toString(),b in n.g&&(i=n.g[b],a=Cn(i,a,h,y),a>-1&&(Wt(i[a]),Array.prototype.splice.call(i,a,1),i.length==0&&(delete n.g[b],n.h--)))):n&&(n=On(n))&&(i=n.g[i.toString()],n=-1,i&&(n=Cn(i,a,h,y)),(a=n>-1?i[n]:null)&&Pn(a))}function Pn(n){if(typeof n!="number"&&n&&!n.da){var i=n.src;if(i&&i[Fe])An(i.i,n);else{var a=n.type,h=n.proxy;i.removeEventListener?i.removeEventListener(a,h,n.capture):i.detachEvent?i.detachEvent(zs(a),h):i.addListener&&i.removeListener&&i.removeListener(h),(a=On(i))?(An(a,n),a.h==0&&(a.src=null,i[Rn]=null)):Wt(n)}}}function zs(n){return n in Nn?Nn[n]:Nn[n]="on"+n}function Ho(n,i){if(n.da)n=!0;else{i=new Z(i,this);const a=n.listener,h=n.ha||n.src;n.fa&&Pn(n),n=a.call(h,i)}return n}function On(n){return n=n[Rn],n instanceof Gt?n:null}var Dn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ws(n){return typeof n=="function"?n:(n[Dn]||(n[Dn]=function(i){return n.handleEvent(i)}),n[Dn])}function q(){m.call(this),this.i=new Gt(this),this.M=this,this.G=null}T(q,m),q.prototype[Fe]=!0,q.prototype.removeEventListener=function(n,i,a,h){Hs(this,n,i,a,h)};function G(n,i){var a,h=n.G;if(h)for(a=[];h;h=h.G)a.push(h);if(n=n.M,h=i.type||i,typeof i=="string")i=new p(i,n);else if(i instanceof p)i.target=i.target||n;else{var y=i;i=new p(h,n),Bs(i,y)}y=!0;let b,E;if(a)for(E=a.length-1;E>=0;E--)b=i.g=a[E],y=Kt(b,h,!0,i)&&y;if(b=i.g=n,y=Kt(b,h,!0,i)&&y,y=Kt(b,h,!1,i)&&y,a)for(E=0;E<a.length;E++)b=i.g=a[E],y=Kt(b,h,!1,i)&&y}q.prototype.N=function(){if(q.Z.N.call(this),this.i){var n=this.i;for(const i in n.g){const a=n.g[i];for(let h=0;h<a.length;h++)Wt(a[h]);delete n.g[i],n.h--}}this.G=null},q.prototype.J=function(n,i,a,h){return this.i.add(String(n),i,!1,a,h)},q.prototype.K=function(n,i,a,h){return this.i.add(String(n),i,!0,a,h)};function Kt(n,i,a,h){if(i=n.i.g[String(i)],!i)return!0;i=i.concat();let y=!0;for(let b=0;b<i.length;++b){const E=i[b];if(E&&!E.da&&E.capture==a){const R=E.listener,z=E.ha||E.src;E.fa&&An(n.i,E),y=R.call(z,h)!==!1&&y}}return y&&!h.defaultPrevented}function zo(n,i){if(typeof n!="function")if(n&&typeof n.handleEvent=="function")n=I(n.handleEvent,n);else throw Error("Invalid listener argument");return Number(i)>2147483647?-1:l.setTimeout(n,i||0)}function qs(n){n.g=zo(()=>{n.g=null,n.i&&(n.i=!1,qs(n))},n.l);const i=n.h;n.h=null,n.m.apply(null,i)}class Wo extends m{constructor(i,a){super(),this.m=i,this.l=a,this.h=null,this.i=!1,this.g=null}j(i){this.h=arguments,this.g?this.i=!0:qs(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gt(n){m.call(this),this.h=n,this.g={}}T(gt,m);var Gs=[];function Ks(n){qt(n.g,function(i,a){this.g.hasOwnProperty(a)&&Pn(i)},n),n.g={}}gt.prototype.N=function(){gt.Z.N.call(this),Ks(this)},gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ln=l.JSON.stringify,qo=l.JSON.parse,Go=class{stringify(n){return l.JSON.stringify(n,void 0)}parse(n){return l.JSON.parse(n,void 0)}};function Js(){}function Mn(){p.call(this,"d")}T(Mn,p);function Un(){p.call(this,"c")}T(Un,p);var tt={},Xs=null;function xn(){return Xs=Xs||new q}tt.Ia="serverreachability";function Ys(n){p.call(this,tt.Ia,n)}T(Ys,p);function mt(n){const i=xn();G(i,new Ys(i))}tt.STAT_EVENT="statevent";function Zs(n,i){p.call(this,tt.STAT_EVENT,n),this.stat=i}T(Zs,p);function K(n){const i=xn();G(i,new Zs(i,n))}tt.Ja="timingevent";function Qs(n,i){p.call(this,tt.Ja,n),this.size=i}T(Qs,p);function yt(n,i){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){n()},i)}function wt(){this.g=!0}wt.prototype.ua=function(){this.g=!1};function Ko(n,i,a,h,y,b){n.info(function(){if(n.g)if(b){var E="",R=b.split("&");for(let F=0;F<R.length;F++){var z=R[F].split("=");if(z.length>1){const W=z[0];z=z[1];const ce=W.split("_");E=ce.length>=2&&ce[1]=="type"?E+(W+"="+z+"&"):E+(W+"=redacted&")}}}else E=null;else E=b;return"XMLHTTP REQ ("+h+") [attempt "+y+"]: "+i+`
`+a+`
`+E})}function Jo(n,i,a,h,y,b,E){n.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+y+"]: "+i+`
`+a+`
`+b+" "+E})}function nt(n,i,a,h){n.info(function(){return"XMLHTTP TEXT ("+i+"): "+Yo(n,a)+(h?" "+h:"")})}function Xo(n,i){n.info(function(){return"TIMEOUT: "+i})}wt.prototype.info=function(){};function Yo(n,i){if(!n.g)return i;if(!i)return null;try{const b=JSON.parse(i);if(b){for(n=0;n<b.length;n++)if(Array.isArray(b[n])){var a=b[n];if(!(a.length<2)){var h=a[1];if(Array.isArray(h)&&!(h.length<1)){var y=h[0];if(y!="noop"&&y!="stop"&&y!="close")for(let E=1;E<h.length;E++)h[E]=""}}}}return Ln(b)}catch{return i}}var er;function jn(){}T(jn,Js),jn.prototype.g=function(){return new XMLHttpRequest},er=new jn;function vt(n){return encodeURIComponent(String(n))}function Zo(n){var i=1;n=n.split(":");const a=[];for(;i>0&&n.length;)a.push(n.shift()),i--;return n.length&&a.push(n.join(":")),a}function Ee(n,i,a,h){this.j=n,this.i=i,this.l=a,this.S=h||1,this.V=new gt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new tr}function tr(){this.i=null,this.g="",this.h=!1}var nr={},Fn={};function Vn(n,i,a){n.M=1,n.A=Xt(ae(i)),n.u=a,n.R=!0,sr(n,null)}function sr(n,i){n.F=Date.now(),Jt(n),n.B=ae(n.A);var a=n.B,h=n.S;Array.isArray(h)||(h=[String(h)]),mr(a.i,"t",h),n.C=0,a=n.j.L,n.h=new tr,n.g=Lr(n.j,a?i:null,!n.u),n.P>0&&(n.O=new Wo(I(n.Y,n,n.g),n.P)),i=n.V,a=n.g,h=n.ba;var y="readystatechange";Array.isArray(y)||(y&&(Gs[0]=y.toString()),y=Gs);for(let b=0;b<y.length;b++){const E=$s(a,y[b],h||i.handleEvent,!1,i.h||i);if(!E)break;i.g[E.key]=E}i=n.J?Fs(n.J):{},n.u?(n.v||(n.v="POST"),i["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.B,n.v,n.u,i)):(n.v="GET",n.g.ea(n.B,n.v,null,i)),mt(),Ko(n.i,n.v,n.B,n.l,n.S,n.u)}Ee.prototype.ba=function(n){n=n.target;const i=this.O;i&&Ae(n)==3?i.j():this.Y(n)},Ee.prototype.Y=function(n){try{if(n==this.g)e:{const R=Ae(this.g),z=this.g.ya(),F=this.g.ca();if(!(R<3)&&(R!=3||this.g&&(this.h.h||this.g.la()||Tr(this.g)))){this.K||R!=4||z==7||(z==8||F<=0?mt(3):mt(2)),Bn(this);var i=this.g.ca();this.X=i;var a=Qo(this);if(this.o=i==200,Jo(this.i,this.v,this.B,this.l,this.S,R,i),this.o){if(this.U&&!this.L){t:{if(this.g){var h,y=this.g;if((h=y.g?y.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!d(h)){var b=h;break t}}b=null}if(n=b)nt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,$n(this,n);else{this.o=!1,this.m=3,K(12),Ve(this),bt(this);break e}}if(this.R){n=!0;let W;for(;!this.K&&this.C<a.length;)if(W=ea(this,a),W==Fn){R==4&&(this.m=4,K(14),n=!1),nt(this.i,this.l,null,"[Incomplete Response]");break}else if(W==nr){this.m=4,K(15),nt(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}else nt(this.i,this.l,W,null),$n(this,W);if(rr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),R!=4||a.length!=0||this.h.h||(this.m=1,K(16),n=!1),this.o=this.o&&n,!n)nt(this.i,this.l,a,"[Invalid Chunked Response]"),Ve(this),bt(this);else if(a.length>0&&!this.W){this.W=!0;var E=this.j;E.g==this&&E.aa&&!E.P&&(E.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),Xn(E),E.P=!0,K(11))}}else nt(this.i,this.l,a,null),$n(this,a);R==4&&Ve(this),this.o&&!this.K&&(R==4?Nr(this.j,this):(this.o=!1,Jt(this)))}else pa(this.g),i==400&&a.indexOf("Unknown SID")>0?(this.m=3,K(12)):(this.m=0,K(13)),Ve(this),bt(this)}}}catch{}finally{}};function Qo(n){if(!rr(n))return n.g.la();const i=Tr(n.g);if(i==="")return"";let a="";const h=i.length,y=Ae(n.g)==4;if(!n.h.i){if(typeof TextDecoder>"u")return Ve(n),bt(n),"";n.h.i=new l.TextDecoder}for(let b=0;b<h;b++)n.h.h=!0,a+=n.h.i.decode(i[b],{stream:!(y&&b==h-1)});return i.length=0,n.h.g+=a,n.C=0,n.h.g}function rr(n){return n.g?n.v=="GET"&&n.M!=2&&n.j.Aa:!1}function ea(n,i){var a=n.C,h=i.indexOf(`
`,a);return h==-1?Fn:(a=Number(i.substring(a,h)),isNaN(a)?nr:(h+=1,h+a>i.length?Fn:(i=i.slice(h,h+a),n.C=h+a,i)))}Ee.prototype.cancel=function(){this.K=!0,Ve(this)};function Jt(n){n.T=Date.now()+n.H,ir(n,n.H)}function ir(n,i){if(n.D!=null)throw Error("WatchDog timer not null");n.D=yt(I(n.aa,n),i)}function Bn(n){n.D&&(l.clearTimeout(n.D),n.D=null)}Ee.prototype.aa=function(){this.D=null;const n=Date.now();n-this.T>=0?(Xo(this.i,this.B),this.M!=2&&(mt(),K(17)),Ve(this),this.m=2,bt(this)):ir(this,this.T-n)};function bt(n){n.j.I==0||n.K||Nr(n.j,n)}function Ve(n){Bn(n);var i=n.O;i&&typeof i.dispose=="function"&&i.dispose(),n.O=null,Ks(n.V),n.g&&(i=n.g,n.g=null,i.abort(),i.dispose())}function $n(n,i){try{var a=n.j;if(a.I!=0&&(a.g==n||Hn(a.h,n))){if(!n.L&&Hn(a.h,n)&&a.I==3){try{var h=a.Ba.g.parse(i)}catch{h=null}if(Array.isArray(h)&&h.length==3){var y=h;if(y[0]==0){e:if(!a.v){if(a.g)if(a.g.F+3e3<n.F)tn(a),Qt(a);else break e;Jn(a),K(18)}}else a.xa=y[1],0<a.xa-a.K&&y[2]<37500&&a.F&&a.A==0&&!a.C&&(a.C=yt(I(a.Va,a),6e3));cr(a.h)<=1&&a.ta&&(a.ta=void 0)}else $e(a,11)}else if((n.L||a.g==n)&&tn(a),!d(i))for(y=a.Ba.g.parse(i),i=0;i<y.length;i++){let F=y[i];const W=F[0];if(!(W<=a.K))if(a.K=W,F=F[1],a.I==2)if(F[0]=="c"){a.M=F[1],a.ba=F[2];const ce=F[3];ce!=null&&(a.ka=ce,a.j.info("VER="+a.ka));const it=F[4];it!=null&&(a.za=it,a.j.info("SVER="+a.za));const Ce=F[5];Ce!=null&&typeof Ce=="number"&&Ce>0&&(h=1.5*Ce,a.O=h,a.j.info("backChannelRequestTimeoutMs_="+h)),h=a;const Re=n.g;if(Re){const nn=Re.g?Re.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(nn){var b=h.h;b.g||nn.indexOf("spdy")==-1&&nn.indexOf("quic")==-1&&nn.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(zn(b,b.h),b.h=null))}if(h.G){const Yn=Re.g?Re.g.getResponseHeader("X-HTTP-Session-Id"):null;Yn&&(h.wa=Yn,j(h.J,h.G,Yn))}}a.I=3,a.l&&a.l.ra(),a.aa&&(a.T=Date.now()-n.F,a.j.info("Handshake RTT: "+a.T+"ms")),h=a;var E=n;if(h.na=Dr(h,h.L?h.ba:null,h.W),E.L){hr(h.h,E);var R=E,z=h.O;z&&(R.H=z),R.D&&(Bn(R),Jt(R)),h.g=E}else Cr(h);a.i.length>0&&en(a)}else F[0]!="stop"&&F[0]!="close"||$e(a,7);else a.I==3&&(F[0]=="stop"||F[0]=="close"?F[0]=="stop"?$e(a,7):Kn(a):F[0]!="noop"&&a.l&&a.l.qa(F),a.A=0)}}mt(4)}catch{}}var ta=class{constructor(n,i){this.g=n,this.map=i}};function or(n){this.l=n||10,l.PerformanceNavigationTiming?(n=l.performance.getEntriesByType("navigation"),n=n.length>0&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=n?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ar(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function cr(n){return n.h?1:n.g?n.g.size:0}function Hn(n,i){return n.h?n.h==i:n.g?n.g.has(i):!1}function zn(n,i){n.g?n.g.add(i):n.h=i}function hr(n,i){n.h&&n.h==i?n.h=null:n.g&&n.g.has(i)&&n.g.delete(i)}or.prototype.cancel=function(){if(this.i=lr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function lr(n){if(n.h!=null)return n.i.concat(n.h.G);if(n.g!=null&&n.g.size!==0){let i=n.i;for(const a of n.g.values())i=i.concat(a.G);return i}return U(n.i)}var ur=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function na(n,i){if(n){n=n.split("&");for(let a=0;a<n.length;a++){const h=n[a].indexOf("=");let y,b=null;h>=0?(y=n[a].substring(0,h),b=n[a].substring(h+1)):y=n[a],i(y,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Se(n){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let i;n instanceof Se?(this.l=n.l,_t(this,n.j),this.o=n.o,this.g=n.g,It(this,n.u),this.h=n.h,Wn(this,yr(n.i)),this.m=n.m):n&&(i=String(n).match(ur))?(this.l=!1,_t(this,i[1]||"",!0),this.o=Tt(i[2]||""),this.g=Tt(i[3]||"",!0),It(this,i[4]),this.h=Tt(i[5]||"",!0),Wn(this,i[6]||"",!0),this.m=Tt(i[7]||"")):(this.l=!1,this.i=new St(null,this.l))}Se.prototype.toString=function(){const n=[];var i=this.j;i&&n.push(Et(i,dr,!0),":");var a=this.g;return(a||i=="file")&&(n.push("//"),(i=this.o)&&n.push(Et(i,dr,!0),"@"),n.push(vt(a).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.u,a!=null&&n.push(":",String(a))),(a=this.h)&&(this.g&&a.charAt(0)!="/"&&n.push("/"),n.push(Et(a,a.charAt(0)=="/"?ia:ra,!0))),(a=this.i.toString())&&n.push("?",a),(a=this.m)&&n.push("#",Et(a,aa)),n.join("")},Se.prototype.resolve=function(n){const i=ae(this);let a=!!n.j;a?_t(i,n.j):a=!!n.o,a?i.o=n.o:a=!!n.g,a?i.g=n.g:a=n.u!=null;var h=n.h;if(a)It(i,n.u);else if(a=!!n.h){if(h.charAt(0)!="/")if(this.g&&!this.h)h="/"+h;else{var y=i.h.lastIndexOf("/");y!=-1&&(h=i.h.slice(0,y+1)+h)}if(y=h,y==".."||y==".")h="";else if(y.indexOf("./")!=-1||y.indexOf("/.")!=-1){h=y.lastIndexOf("/",0)==0,y=y.split("/");const b=[];for(let E=0;E<y.length;){const R=y[E++];R=="."?h&&E==y.length&&b.push(""):R==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),h&&E==y.length&&b.push("")):(b.push(R),h=!0)}h=b.join("/")}else h=y}return a?i.h=h:a=n.i.toString()!=="",a?Wn(i,yr(n.i)):a=!!n.m,a&&(i.m=n.m),i};function ae(n){return new Se(n)}function _t(n,i,a){n.j=a?Tt(i,!0):i,n.j&&(n.j=n.j.replace(/:$/,""))}function It(n,i){if(i){if(i=Number(i),isNaN(i)||i<0)throw Error("Bad port number "+i);n.u=i}else n.u=null}function Wn(n,i,a){i instanceof St?(n.i=i,ca(n.i,n.l)):(a||(i=Et(i,oa)),n.i=new St(i,n.l))}function j(n,i,a){n.i.set(i,a)}function Xt(n){return j(n,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),n}function Tt(n,i){return n?i?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Et(n,i,a){return typeof n=="string"?(n=encodeURI(n).replace(i,sa),a&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function sa(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var dr=/[#\/\?@]/g,ra=/[#\?:]/g,ia=/[#\?]/g,oa=/[#\?@]/g,aa=/#/g;function St(n,i){this.h=this.g=null,this.i=n||null,this.j=!!i}function Be(n){n.g||(n.g=new Map,n.h=0,n.i&&na(n.i,function(i,a){n.add(decodeURIComponent(i.replace(/\+/g," ")),a)}))}s=St.prototype,s.add=function(n,i){Be(this),this.i=null,n=st(this,n);let a=this.g.get(n);return a||this.g.set(n,a=[]),a.push(i),this.h+=1,this};function fr(n,i){Be(n),i=st(n,i),n.g.has(i)&&(n.i=null,n.h-=n.g.get(i).length,n.g.delete(i))}function pr(n,i){return Be(n),i=st(n,i),n.g.has(i)}s.forEach=function(n,i){Be(this),this.g.forEach(function(a,h){a.forEach(function(y){n.call(i,y,h,this)},this)},this)};function gr(n,i){Be(n);let a=[];if(typeof i=="string")pr(n,i)&&(a=a.concat(n.g.get(st(n,i))));else for(n=Array.from(n.g.values()),i=0;i<n.length;i++)a=a.concat(n[i]);return a}s.set=function(n,i){return Be(this),this.i=null,n=st(this,n),pr(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[i]),this.h+=1,this},s.get=function(n,i){return n?(n=gr(this,n),n.length>0?String(n[0]):i):i};function mr(n,i,a){fr(n,i),a.length>0&&(n.i=null,n.g.set(st(n,i),U(a)),n.h+=a.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],i=Array.from(this.g.keys());for(let h=0;h<i.length;h++){var a=i[h];const y=vt(a);a=gr(this,a);for(let b=0;b<a.length;b++){let E=y;a[b]!==""&&(E+="="+vt(a[b])),n.push(E)}}return this.i=n.join("&")};function yr(n){const i=new St;return i.i=n.i,n.g&&(i.g=new Map(n.g),i.h=n.h),i}function st(n,i){return i=String(i),n.j&&(i=i.toLowerCase()),i}function ca(n,i){i&&!n.j&&(Be(n),n.i=null,n.g.forEach(function(a,h){const y=h.toLowerCase();h!=y&&(fr(this,h),mr(this,y,a))},n)),n.j=i}function ha(n,i){const a=new wt;if(l.Image){const h=new Image;h.onload=S(ke,a,"TestLoadImage: loaded",!0,i,h),h.onerror=S(ke,a,"TestLoadImage: error",!1,i,h),h.onabort=S(ke,a,"TestLoadImage: abort",!1,i,h),h.ontimeout=S(ke,a,"TestLoadImage: timeout",!1,i,h),l.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=n}else i(!1)}function la(n,i){const a=new wt,h=new AbortController,y=setTimeout(()=>{h.abort(),ke(a,"TestPingServer: timeout",!1,i)},1e4);fetch(n,{signal:h.signal}).then(b=>{clearTimeout(y),b.ok?ke(a,"TestPingServer: ok",!0,i):ke(a,"TestPingServer: server error",!1,i)}).catch(()=>{clearTimeout(y),ke(a,"TestPingServer: error",!1,i)})}function ke(n,i,a,h,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),h(a)}catch{}}function ua(){this.g=new Go}function qn(n){this.i=n.Sb||null,this.h=n.ab||!1}T(qn,Js),qn.prototype.g=function(){return new Yt(this.i,this.h)};function Yt(n,i){q.call(this),this.H=n,this.o=i,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(Yt,q),s=Yt.prototype,s.open=function(n,i){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=n,this.D=i,this.readyState=1,At(this)},s.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const i={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};n&&(i.body=n),(this.H||l).fetch(new Request(this.D,i)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,kt(this)),this.readyState=0},s.Pa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,At(this)),this.g&&(this.readyState=3,At(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;wr(this)}else n.text().then(this.Oa.bind(this),this.ga.bind(this))};function wr(n){n.j.read().then(n.Ma.bind(n)).catch(n.ga.bind(n))}s.Ma=function(n){if(this.g){if(this.o&&n.value)this.response.push(n.value);else if(!this.o){var i=n.value?n.value:new Uint8Array(0);(i=this.B.decode(i,{stream:!n.done}))&&(this.response=this.responseText+=i)}n.done?kt(this):At(this),this.readyState==3&&wr(this)}},s.Oa=function(n){this.g&&(this.response=this.responseText=n,kt(this))},s.Na=function(n){this.g&&(this.response=n,kt(this))},s.ga=function(){this.g&&kt(this)};function kt(n){n.readyState=4,n.l=null,n.j=null,n.B=null,At(n)}s.setRequestHeader=function(n,i){this.A.append(n,i)},s.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],i=this.h.entries();for(var a=i.next();!a.done;)a=a.value,n.push(a[0]+": "+a[1]),a=i.next();return n.join(`\r
`)};function At(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Yt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});function vr(n){let i="";return qt(n,function(a,h){i+=h,i+=":",i+=a,i+=`\r
`}),i}function Gn(n,i,a){e:{for(h in a){var h=!1;break e}h=!0}h||(a=vr(a),typeof n=="string"?a!=null&&vt(a):j(n,i,a))}function $(n){q.call(this),this.headers=new Map,this.L=n||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T($,q);var da=/^https?$/i,fa=["POST","PUT"];s=$.prototype,s.Fa=function(n){this.H=n},s.ea=function(n,i,a,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+n);i=i?i.toUpperCase():"GET",this.D=n,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():er.g(),this.g.onreadystatechange=C(I(this.Ca,this));try{this.B=!0,this.g.open(i,String(n),!0),this.B=!1}catch(b){br(this,b);return}if(n=a||"",a=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var y in h)a.set(y,h[y]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const b of h.keys())a.set(b,h.get(b));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(a.keys()).find(b=>b.toLowerCase()=="content-type"),y=l.FormData&&n instanceof l.FormData,!(Array.prototype.indexOf.call(fa,i,void 0)>=0)||h||y||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,E]of a)this.g.setRequestHeader(b,E);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(n),this.v=!1}catch(b){br(this,b)}};function br(n,i){n.h=!1,n.g&&(n.j=!0,n.g.abort(),n.j=!1),n.l=i,n.o=5,_r(n),Zt(n)}function _r(n){n.A||(n.A=!0,G(n,"complete"),G(n,"error"))}s.abort=function(n){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=n||7,G(this,"complete"),G(this,"abort"),Zt(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zt(this,!0)),$.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?Ir(this):this.Xa())},s.Xa=function(){Ir(this)};function Ir(n){if(n.h&&typeof c<"u"){if(n.v&&Ae(n)==4)setTimeout(n.Ca.bind(n),0);else if(G(n,"readystatechange"),Ae(n)==4){n.h=!1;try{const b=n.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i=!0;break e;default:i=!1}var a;if(!(a=i)){var h;if(h=b===0){let E=String(n.D).match(ur)[1]||null;!E&&l.self&&l.self.location&&(E=l.self.location.protocol.slice(0,-1)),h=!da.test(E?E.toLowerCase():"")}a=h}if(a)G(n,"complete"),G(n,"success");else{n.o=6;try{var y=Ae(n)>2?n.g.statusText:""}catch{y=""}n.l=y+" ["+n.ca()+"]",_r(n)}}finally{Zt(n)}}}}function Zt(n,i){if(n.g){n.m&&(clearTimeout(n.m),n.m=null);const a=n.g;n.g=null,i||G(n,"ready");try{a.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function Ae(n){return n.g?n.g.readyState:0}s.ca=function(){try{return Ae(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(n){if(this.g){var i=this.g.responseText;return n&&i.indexOf(n)==0&&(i=i.substring(n.length)),qo(i)}};function Tr(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.F){case"":case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function pa(n){const i={};n=(n.g&&Ae(n)>=2&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<n.length;h++){if(d(n[h]))continue;var a=Zo(n[h]);const y=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const b=i[y]||[];i[y]=b,b.push(a)}Vo(i,function(h){return h.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ct(n,i,a){return a&&a.internalChannelParams&&a.internalChannelParams[n]||i}function Er(n){this.za=0,this.i=[],this.j=new wt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ct("failFast",!1,n),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ct("baseRetryDelayMs",5e3,n),this.Za=Ct("retryDelaySeedMs",1e4,n),this.Ta=Ct("forwardChannelMaxRetries",2,n),this.va=Ct("forwardChannelRequestTimeoutMs",2e4,n),this.ma=n&&n.xmlHttpFactory||void 0,this.Ua=n&&n.Rb||void 0,this.Aa=n&&n.useFetchStreams||!1,this.O=void 0,this.L=n&&n.supportsCrossDomainXhr||!1,this.M="",this.h=new or(n&&n.concurrentRequestLimit),this.Ba=new ua,this.S=n&&n.fastHandshake||!1,this.R=n&&n.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=n&&n.Pb||!1,n&&n.ua&&this.j.ua(),n&&n.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&n&&n.detectBufferingProxy||!1,this.ia=void 0,n&&n.longPollingTimeout&&n.longPollingTimeout>0&&(this.ia=n.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=Er.prototype,s.ka=8,s.I=1,s.connect=function(n,i,a,h){K(0),this.W=n,this.H=i||{},a&&h!==void 0&&(this.H.OSID=a,this.H.OAID=h),this.F=this.X,this.J=Dr(this,null,this.W),en(this)};function Kn(n){if(Sr(n),n.I==3){var i=n.V++,a=ae(n.J);if(j(a,"SID",n.M),j(a,"RID",i),j(a,"TYPE","terminate"),Rt(n,a),i=new Ee(n,n.j,i),i.M=2,i.A=Xt(ae(a)),a=!1,l.navigator&&l.navigator.sendBeacon)try{a=l.navigator.sendBeacon(i.A.toString(),"")}catch{}!a&&l.Image&&(new Image().src=i.A,a=!0),a||(i.g=Lr(i.j,null),i.g.ea(i.A)),i.F=Date.now(),Jt(i)}Or(n)}function Qt(n){n.g&&(Xn(n),n.g.cancel(),n.g=null)}function Sr(n){Qt(n),n.v&&(l.clearTimeout(n.v),n.v=null),tn(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&l.clearTimeout(n.m),n.m=null)}function en(n){if(!ar(n.h)&&!n.m){n.m=!0;var i=n.Ea;Q||u(),Y||(Q(),Y=!0),g.add(i,n),n.D=0}}function ga(n,i){return cr(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=i.G.concat(n.i),!0):n.I==1||n.I==2||n.D>=(n.Sa?0:n.Ta)?!1:(n.m=yt(I(n.Ea,n,i),Pr(n,n.D)),n.D++,!0)}s.Ea=function(n){if(this.m)if(this.m=null,this.I==1){if(!n){this.V=Math.floor(Math.random()*1e5),n=this.V++;const y=new Ee(this,this.j,n);let b=this.o;if(this.U&&(b?(b=Fs(b),Bs(b,this.U)):b=this.U),this.u!==null||this.R||(y.J=b,b=null),this.S)e:{for(var i=0,a=0;a<this.i.length;a++){t:{var h=this.i[a];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break t}h=void 0}if(h===void 0)break;if(i+=h,i>4096){i=a;break e}if(i===4096||a===this.i.length-1){i=a+1;break e}}i=1e3}else i=1e3;i=Ar(this,y,i),a=ae(this.J),j(a,"RID",n),j(a,"CVER",22),this.G&&j(a,"X-HTTP-Session-Id",this.G),Rt(this,a),b&&(this.R?i="headers="+vt(vr(b))+"&"+i:this.u&&Gn(a,this.u,b)),zn(this.h,y),this.Ra&&j(a,"TYPE","init"),this.S?(j(a,"$req",i),j(a,"SID","null"),y.U=!0,Vn(y,a,null)):Vn(y,a,i),this.I=2}}else this.I==3&&(n?kr(this,n):this.i.length==0||ar(this.h)||kr(this))};function kr(n,i){var a;i?a=i.l:a=n.V++;const h=ae(n.J);j(h,"SID",n.M),j(h,"RID",a),j(h,"AID",n.K),Rt(n,h),n.u&&n.o&&Gn(h,n.u,n.o),a=new Ee(n,n.j,a,n.D+1),n.u===null&&(a.J=n.o),i&&(n.i=i.G.concat(n.i)),i=Ar(n,a,1e3),a.H=Math.round(n.va*.5)+Math.round(n.va*.5*Math.random()),zn(n.h,a),Vn(a,h,i)}function Rt(n,i){n.H&&qt(n.H,function(a,h){j(i,h,a)}),n.l&&qt({},function(a,h){j(i,h,a)})}function Ar(n,i,a){a=Math.min(n.i.length,a);const h=n.l?I(n.l.Ka,n.l,n):null;e:{var y=n.i;let R=-1;for(;;){const z=["count="+a];R==-1?a>0?(R=y[0].g,z.push("ofs="+R)):R=0:z.push("ofs="+R);let F=!0;for(let W=0;W<a;W++){var b=y[W].g;const ce=y[W].map;if(b-=R,b<0)R=Math.max(0,y[W].g-100),F=!1;else try{b="req"+b+"_"||"";try{var E=ce instanceof Map?ce:Object.entries(ce);for(const[it,Ce]of E){let Re=Ce;_(Ce)&&(Re=Ln(Ce)),z.push(b+it+"="+encodeURIComponent(Re))}}catch(it){throw z.push(b+"type="+encodeURIComponent("_badmap")),it}}catch{h&&h(ce)}}if(F){E=z.join("&");break e}}E=void 0}return n=n.i.splice(0,a),i.G=n,E}function Cr(n){if(!n.g&&!n.v){n.Y=1;var i=n.Da;Q||u(),Y||(Q(),Y=!0),g.add(i,n),n.A=0}}function Jn(n){return n.g||n.v||n.A>=3?!1:(n.Y++,n.v=yt(I(n.Da,n),Pr(n,n.A)),n.A++,!0)}s.Da=function(){if(this.v=null,Rr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var n=4*this.T;this.j.info("BP detection timer enabled: "+n),this.B=yt(I(this.Wa,this),n)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,K(10),Qt(this),Rr(this))};function Xn(n){n.B!=null&&(l.clearTimeout(n.B),n.B=null)}function Rr(n){n.g=new Ee(n,n.j,"rpc",n.Y),n.u===null&&(n.g.J=n.o),n.g.P=0;var i=ae(n.na);j(i,"RID","rpc"),j(i,"SID",n.M),j(i,"AID",n.K),j(i,"CI",n.F?"0":"1"),!n.F&&n.ia&&j(i,"TO",n.ia),j(i,"TYPE","xmlhttp"),Rt(n,i),n.u&&n.o&&Gn(i,n.u,n.o),n.O&&(n.g.H=n.O);var a=n.g;n=n.ba,a.M=1,a.A=Xt(ae(i)),a.u=null,a.R=!0,sr(a,n)}s.Va=function(){this.C!=null&&(this.C=null,Qt(this),Jn(this),K(19))};function tn(n){n.C!=null&&(l.clearTimeout(n.C),n.C=null)}function Nr(n,i){var a=null;if(n.g==i){tn(n),Xn(n),n.g=null;var h=2}else if(Hn(n.h,i))a=i.G,hr(n.h,i),h=1;else return;if(n.I!=0){if(i.o)if(h==1){a=i.u?i.u.length:0,i=Date.now()-i.F;var y=n.D;h=xn(),G(h,new Qs(h,a)),en(n)}else Cr(n);else if(y=i.m,y==3||y==0&&i.X>0||!(h==1&&ga(n,i)||h==2&&Jn(n)))switch(a&&a.length>0&&(i=n.h,i.i=i.i.concat(a)),y){case 1:$e(n,5);break;case 4:$e(n,10);break;case 3:$e(n,6);break;default:$e(n,2)}}}function Pr(n,i){let a=n.Qa+Math.floor(Math.random()*n.Za);return n.isActive()||(a*=2),a*i}function $e(n,i){if(n.j.info("Error code "+i),i==2){var a=I(n.bb,n),h=n.Ua;const y=!h;h=new Se(h||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||_t(h,"https"),Xt(h),y?ha(h.toString(),a):la(h.toString(),a)}else K(2);n.I=0,n.l&&n.l.pa(i),Or(n),Sr(n)}s.bb=function(n){n?(this.j.info("Successfully pinged google.com"),K(2)):(this.j.info("Failed to ping google.com"),K(1))};function Or(n){if(n.I=0,n.ja=[],n.l){const i=lr(n.h);(i.length!=0||n.i.length!=0)&&(D(n.ja,i),D(n.ja,n.i),n.h.i.length=0,U(n.i),n.i.length=0),n.l.oa()}}function Dr(n,i,a){var h=a instanceof Se?ae(a):new Se(a);if(h.g!="")i&&(h.g=i+"."+h.g),It(h,h.u);else{var y=l.location;h=y.protocol,i=i?i+"."+y.hostname:y.hostname,y=+y.port;const b=new Se(null);h&&_t(b,h),i&&(b.g=i),y&&It(b,y),a&&(b.h=a),h=b}return a=n.G,i=n.wa,a&&i&&j(h,a,i),j(h,"VER",n.ka),Rt(n,h),h}function Lr(n,i,a){if(i&&!n.L)throw Error("Can't create secondary domain capable XhrIo object.");return i=n.Aa&&!n.ma?new $(new qn({ab:a})):new $(n.ma),i.Fa(n.L),i}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mr(){}s=Mr.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function ee(n,i){q.call(this),this.g=new Er(i),this.l=n,this.h=i&&i.messageUrlParams||null,n=i&&i.messageHeaders||null,i&&i.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.o=n,n=i&&i.initMessageHeaders||null,i&&i.messageContentType&&(n?n["X-WebChannel-Content-Type"]=i.messageContentType:n={"X-WebChannel-Content-Type":i.messageContentType}),i&&i.sa&&(n?n["X-WebChannel-Client-Profile"]=i.sa:n={"X-WebChannel-Client-Profile":i.sa}),this.g.U=n,(n=i&&i.Qb)&&!d(n)&&(this.g.u=n),this.A=i&&i.supportsCrossDomainXhr||!1,this.v=i&&i.sendRawJson||!1,(i=i&&i.httpSessionIdParam)&&!d(i)&&(this.g.G=i,n=this.h,n!==null&&i in n&&(n=this.h,i in n&&delete n[i])),this.j=new rt(this)}T(ee,q),ee.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ee.prototype.close=function(){Kn(this.g)},ee.prototype.o=function(n){var i=this.g;if(typeof n=="string"){var a={};a.__data__=n,n=a}else this.v&&(a={},a.__data__=Ln(n),n=a);i.i.push(new ta(i.Ya++,n)),i.I==3&&en(i)},ee.prototype.N=function(){this.g.l=null,delete this.j,Kn(this.g),delete this.g,ee.Z.N.call(this)};function Ur(n){Mn.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var i=n.__sm__;if(i){e:{for(const a in i){n=a;break e}n=void 0}(this.i=n)&&(n=this.i,i=i!==null&&n in i?i[n]:void 0),this.data=i}else this.data=n}T(Ur,Mn);function xr(){Un.call(this),this.status=1}T(xr,Un);function rt(n){this.g=n}T(rt,Mr),rt.prototype.ra=function(){G(this.g,"a")},rt.prototype.qa=function(n){G(this.g,new Ur(n))},rt.prototype.pa=function(n){G(this.g,new xr)},rt.prototype.oa=function(){G(this.g,"b")},ee.prototype.send=ee.prototype.o,ee.prototype.open=ee.prototype.m,ee.prototype.close=ee.prototype.close,q.prototype.listen=q.prototype.J,$.prototype.listenOnce=$.prototype.K,$.prototype.getLastError=$.prototype.Ha,$.prototype.getLastErrorCode=$.prototype.ya,$.prototype.getStatus=$.prototype.ca,$.prototype.getResponseJson=$.prototype.La,$.prototype.getResponseText=$.prototype.la,$.prototype.send=$.prototype.ea,$.prototype.setWithCredentials=$.prototype.Fa}).apply(typeof sn<"u"?sn:typeof self<"u"?self:typeof window<"u"?window:{});const Xr="@firebase/firestore",Yr="4.9.2";/**
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
*/class J{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}J.UNAUTHENTICATED=new J(null),J.GOOGLE_CREDENTIALS=new J("google-credentials-uid"),J.FIRST_PARTY=new J("first-party-uid"),J.MOCK_USER=new J("mock-user");/**
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
*/let Vt="12.3.0";/**
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
*/const ut=new bs("@firebase/firestore");function re(s,...e){if(ut.logLevel<=M.DEBUG){const t=e.map(Es);ut.debug(`Firestore (${Vt}): ${s}`,...t)}}function Ki(s,...e){if(ut.logLevel<=M.ERROR){const t=e.map(Es);ut.error(`Firestore (${Vt}): ${s}`,...t)}}function Yc(s,...e){if(ut.logLevel<=M.WARN){const t=e.map(Es);ut.warn(`Firestore (${Vt}): ${s}`,...t)}}function Es(s){if(typeof s=="string")return s;try{/**
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
*/return(function(e){return JSON.stringify(e)})(s)}catch{return s}}/**
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
*/function Ut(s,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Ji(s,r,t)}function Ji(s,e,t){let r=`FIRESTORE (${Vt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ki(r),new Error(r)}function Pt(s,e,t,r){let o="Unexpected state";typeof t=="string"?o=t:r=t,s||Ji(e,o,r)}/**
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
*/const P={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class O extends me{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
*/class Ot{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
*/class Xi{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Zc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(J.UNAUTHENTICATED)))}shutdown(){}}class Qc{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class eh{constructor(e){this.t=e,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Pt(this.o===void 0,42304);let r=this.i;const o=v=>this.i!==r?(r=this.i,t(v)):Promise.resolve();let c=new Ot;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Ot,e.enqueueRetryable((()=>o(this.currentUser)))};const l=()=>{const v=c;e.enqueueRetryable((async()=>{await v.promise,await o(this.currentUser)}))},_=v=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=v,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit((v=>_(v))),setTimeout((()=>{if(!this.auth){const v=this.t.getImmediate({optional:!0});v?_(v):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Ot)}}),0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pt(typeof r.accessToken=="string",31837,{l:r}),new Xi(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pt(e===null||typeof e=="string",2055,{h:e}),new J(e)}}class th{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=J.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nh{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new th(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(J.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Zr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sh{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,se(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Pt(this.o===void 0,3512);const r=c=>{c.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const l=c.token!==this.m;return this.m=c.token,re("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>r(c)))};const o=c=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>o(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Zr(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Pt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Zr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
*/function rh(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<s;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
*/class ih{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=rh(40);for(let c=0;c<o.length;++c)r.length<20&&o[c]<t&&(r+=e.charAt(o[c]%62))}return r}}function je(s,e){return s<e?-1:s>e?1:0}function oh(s,e){const t=Math.min(s.length,e.length);for(let r=0;r<t;r++){const o=s.charAt(r),c=e.charAt(r);if(o!==c)return ss(o)===ss(c)?je(o,c):ss(o)?1:-1}return je(s.length,e.length)}const ah=55296,ch=57343;function ss(s){const e=s.charCodeAt(0);return e>=ah&&e<=ch}/**
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
*/const Qr="__name__";class he{constructor(e,t,r){t===void 0?t=0:t>e.length&&Ut(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Ut(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return he.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof he?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let o=0;o<r;o++){const c=he.compareSegments(e.get(o),t.get(o));if(c!==0)return c}return je(e.length,t.length)}static compareSegments(e,t){const r=he.isNumericId(e),o=he.isNumericId(t);return r&&!o?-1:!r&&o?1:r&&o?he.extractNumericId(e).compare(he.extractNumericId(t)):oh(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ts.fromString(e.substring(4,e.length-2))}}class ne extends he{construct(e,t,r){return new ne(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((o=>o.length>0)))}return new ne(t)}static emptyPath(){return new ne([])}}const hh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends he{construct(e,t,r){return new ze(e,t,r)}static isValidIdentifier(e){return hh.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qr}static keyField(){return new ze([Qr])}static fromServerFormat(e){const t=[];let r="",o=0;const c=()=>{if(r.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let l=!1;for(;o<e.length;){const _=e[o];if(_==="\\"){if(o+1===e.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const v=e[o+1];if(v!=="\\"&&v!=="."&&v!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=v,o+=2}else _==="`"?(l=!l,o++):_!=="."||l?(r+=_,o++):(c(),o++)}if(c(),l)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(t)}static emptyPath(){return new ze([])}}/**
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
*/class We{constructor(e){this.path=e}static fromPath(e){return new We(ne.fromString(e))}static fromName(e){return new We(ne.fromString(e).popFirst(5))}static empty(){return new We(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new We(new ne(e.slice()))}}function lh(s,e,t,r){if(e===!0&&r===!0)throw new O(P.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function uh(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function dh(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(t){return t.constructor?t.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":Ut(12329,{type:typeof s})}function fh(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=dh(s);throw new O(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
* @license
* Copyright 2025 Google LLC
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
*/function H(s,e){const t={typeString:s};return e&&(t.value=e),t}function Bt(s,e){if(!uh(s))throw new O(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const o=e[r].typeString,c="value"in e[r]?{value:e[r].value}:void 0;if(!(r in s)){t=`JSON missing required field: '${r}'`;break}const l=s[r];if(o&&typeof l!==o){t=`JSON field '${r}' must be a ${o}.`;break}if(c!==void 0&&l!==c.value){t=`Expected '${r}' field to equal '${c.value}'`;break}}if(t)throw new O(P.INVALID_ARGUMENT,t);return!0}/**
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
*/const ei=-62135596800,ti=1e6;class le{static now(){return le.fromMillis(Date.now())}static fromDate(e){return le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*ti);return new le(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ei)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ti}_compareTo(e){return this.seconds===e.seconds?je(this.nanoseconds,e.nanoseconds):je(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Bt(e,le._jsonSchema))return new le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ei;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}le._jsonSchemaVersion="firestore/timestamp/1.0",le._jsonSchema={type:H("string",le._jsonSchemaVersion),seconds:H("number"),nanoseconds:H("number")};function ph(s){return s.name==="IndexedDbTransactionError"}/**
* @license
* Copyright 2023 Google LLC
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
*/class gh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
*/class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new gh("Invalid base64 string: "+o):o}})(e);return new Ye(t)}static fromUint8Array(e){const t=(function(r){let o="";for(let c=0;c<r.length;++c)o+=String.fromCharCode(r[c]);return o})(e);return new Ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return je(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const fs="(default)";class gn{constructor(e,t){this.projectId=e,this.database=t||fs}static empty(){return new gn("","")}get isDefaultDatabase(){return this.database===fs}isEqual(e){return e instanceof gn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
*/class mh{constructor(e,t=null,r=[],o=[],c=null,l="F",_=null,v=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=o,this.limit=c,this.limitType=l,this.startAt=_,this.endAt=v,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function yh(s){return new mh(s)}/**
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
*/var ni,N;(N=ni||(ni={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
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
*/new Ts([4294967295,4294967295],0);/**
* @license
* Copyright 2018 Google LLC
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
*/const wh=41943040;/**
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
*/const vh=1048576;function rs(){return typeof document<"u"?document:null}/**
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
*/class bh{constructor(e,t,r=1e3,o=1.5,c=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=o,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-r);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
*/class Ss{constructor(e,t,r,o,c){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=o,this.removalCallback=c,this.deferred=new Ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,o,c){const l=Date.now()+r,_=new Ss(e,t,l,o,c);return _.start(r),_}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var si,ri;(ri=si||(si={})).Ma="default",ri.Cache="cache";/**
* @license
* Copyright 2023 Google LLC
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
*/function _h(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
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
*/const ii=new Map;/**
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
*/const Yi="firestore.googleapis.com",oi=!0;class ai{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Yi,this.ssl=oi}else this.host=e.host,this.ssl=e.ssl??oi;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=wh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<vh)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_h(e.experimentalLongPollingOptions??{}),(function(t){if(t.timeoutSeconds!==void 0){if(isNaN(t.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(t,r){return t.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zi{constructor(e,t,r,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ai({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ai(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(t){if(!t)return new Zc;switch(t.type){case"firstParty":return new nh(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const t=ii.get(e);t&&(re("ComponentProvider","Removing Datastore"),ii.delete(e),t.terminate())})(this),Promise.resolve()}}function Ih(s,e,t,r={}){s=fh(s,Zi);const o=ft(e),c=s._getSettings(),l={...c,emulatorOptions:s._getEmulatorOptions()},_=`${e}:${t}`;o&&(ws(`https://${_}`),vs("Firestore",!0)),c.host!==Yi&&c.host!==_&&Yc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v={...c,host:_,ssl:o,emulatorOptions:r};if(!Je(v,l)&&(s._setSettings(v),r.mockUserToken)){let I,S;if(typeof r.mockUserToken=="string")I=r.mockUserToken,S=J.MOCK_USER;else{I=$i(r.mockUserToken,s._app?.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new O(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new J(T)}s._authCredentials=new Qc(new Xi(I,S))}}/**
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
*/class ks{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ks(this.firestore,e,this._query)}}class ue{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new As(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ue(this.firestore,e,this._key)}toJSON(){return{type:ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Bt(t,ue._jsonSchema))return new ue(e,r||null,new We(ne.fromString(t.referencePath)))}}ue._jsonSchemaVersion="firestore/documentReference/1.0",ue._jsonSchema={type:H("string",ue._jsonSchemaVersion),referencePath:H("string")};class As extends ks{constructor(e,t,r){super(e,t,yh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ue(this.firestore,null,new We(e))}withConverter(e){return new As(this.firestore,e,this._path)}}/**
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
*/const ci="AsyncQueue";class hi{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new bh(this,"async_queue_retry"),this._c=()=>{const r=rs();r&&re(ci,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=rs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=rs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ot;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ph(e))throw e;re(ci,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Ki("INTERNAL UNHANDLED ERROR: ",li(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Ss.createAndSchedule(this,e,t,r,(c=>this.hc(c)));return this.tc.push(o),o}uc(){this.nc&&Ut(47125,{Pc:li(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function li(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class Th extends Zi{constructor(e,t,r,o){super(e,t,r,o),this.type="firestore",this._queue=new hi,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hi(e),this._firestoreClient=void 0,await e}}}function Eh(s,e){const t=typeof s=="object"?s:Is(),r=typeof s=="string"?s:fs,o=En(t,"firestore").getImmediate({identifier:r});if(!o._initialized){const c=Fi("firestore");c&&Ih(o,...c)}return o}/**
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
*/class we{constructor(e){this._byteString=e}static fromBase64String(e){try{return new we(Ye.fromBase64String(e))}catch(t){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new we(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:we._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Bt(e,we._jsonSchema))return we.fromBase64String(e.bytes)}}we._jsonSchemaVersion="firestore/bytes/1.0",we._jsonSchema={type:H("string",we._jsonSchemaVersion),bytes:H("string")};/**
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
*/class Qi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
*/class qe{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return je(this._lat,e._lat)||je(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:qe._jsonSchemaVersion}}static fromJSON(e){if(Bt(e,qe._jsonSchema))return new qe(e.latitude,e.longitude)}}qe._jsonSchemaVersion="firestore/geoPoint/1.0",qe._jsonSchema={type:H("string",qe._jsonSchemaVersion),latitude:H("number"),longitude:H("number")};/**
* @license
* Copyright 2024 Google LLC
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
*/class Ge{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(t,r){if(t.length!==r.length)return!1;for(let o=0;o<t.length;++o)if(t[o]!==r[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ge._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Bt(e,Ge._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ge(e.vectorValues);throw new O(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ge._jsonSchemaVersion="firestore/vectorValue/1.0",Ge._jsonSchema={type:H("string",Ge._jsonSchemaVersion),vectorValues:H("object")};const Sh=new RegExp("[~\\*/\\[\\]]");function kh(s,e,t){if(e.search(Sh)>=0)throw ui(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s);try{return new Qi(...e.split("."))._internalPath}catch{throw ui(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s)}}function ui(s,e,t,r,o){let c=`Function ${e}() called with invalid data`;c+=". ";let l="";return new O(P.INVALID_ARGUMENT,c+s+l)}/**
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
*/class eo{constructor(e,t,r,o,c){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ah(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(to("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ah extends eo{data(){return super.data()}}function to(s,e){return typeof e=="string"?kh(s,e):e instanceof Qi?e._internalPath:e._delegate._internalPath}class rn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class at extends eo{constructor(e,t,r,o,c,l){super(e,t,r,o,l),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new cn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(to("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=at._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()||(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED")),t}}at._jsonSchemaVersion="firestore/documentSnapshot/1.0",at._jsonSchema={type:H("string",at._jsonSchemaVersion),bundleSource:H("string","DocumentSnapshot"),bundleName:H("string"),bundle:H("string")};class cn extends at{data(e={}){return super.data(e)}}class Dt{constructor(e,t,r,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new rn(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new cn(this._firestore,this._userDataWriter,r.key,r,new rn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,o){if(r._snapshot.oldDocs.isEmpty()){let c=0;return r._snapshot.docChanges.map((l=>{const _=new cn(r._firestore,r._userDataWriter,l.doc.key,l.doc,new rn(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:_,oldIndex:-1,newIndex:c++}}))}{let c=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const _=new cn(r._firestore,r._userDataWriter,l.doc.key,l.doc,new rn(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let v=-1,I=-1;return l.type!==0&&(v=c.indexOf(l.doc.key),c=c.delete(l.doc.key)),l.type!==1&&(c=c.add(l.doc),I=c.indexOf(l.doc.key)),{type:Ch(l.type),doc:_,oldIndex:v,newIndex:I}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Dt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ih.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],o=[];return this.docs.forEach((c=>{c._document!==null&&(t.push(c._document),r.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ch(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ut(61501,{type:s})}}Dt._jsonSchemaVersion="firestore/querySnapshot/1.0",Dt._jsonSchema={type:H("string",Dt._jsonSchemaVersion),bundleSource:H("string","QuerySnapshot"),bundleName:H("string"),bundle:H("string")};(function(s,e=!0){(function(t){Vt=t})(et),Xe(new xe("firestore",((t,{instanceIdentifier:r,options:o})=>{const c=t.getProvider("app").getImmediate(),l=new Th(new eh(t.getProvider("auth-internal")),new sh(c,t.getProvider("app-check-internal")),(function(_,v){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gn(_.options.projectId,v)})(c,r),c);return o={useFetchStreams:e,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),de(Xr,Yr,s),de(Xr,Yr,"esm2020")})();function no(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rh=no,so=new jt("auth","Firebase",no());/**
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
*/const mn=new bs("@firebase/auth");function Nh(s,...e){mn.logLevel<=M.WARN&&mn.warn(`Auth (${et}): ${s}`,...e)}function hn(s,...e){mn.logLevel<=M.ERROR&&mn.error(`Auth (${et}): ${s}`,...e)}/**
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
*/function Ie(s,...e){throw Cs(s,...e)}function fe(s,...e){return Cs(s,...e)}function ro(s,e,t){const r={...Rh(),[e]:t};return new jt("auth","Firebase",r).create(e,{appName:s.name})}function Ke(s){return ro(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cs(s,...e){if(typeof s!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=s.name),s._errorFactory.create(t,...r)}return so.create(s,...e)}function k(s,e,...t){if(!s)throw Cs(e,...t)}function ve(s){const e="INTERNAL ASSERTION FAILED: "+s;throw hn(e),new Error(e)}function Te(s,e){s||ve(e)}/**
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
*/function ps(){return typeof self<"u"&&self.location?.href||""}function Ph(){return di()==="http:"||di()==="https:"}function di(){return typeof self<"u"&&self.location?.protocol||null}/**
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
*/function Oh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ph()||Ra()||"connection"in navigator)?navigator.onLine:!0}function Dh(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
*/class $t{constructor(e,t){this.shortDelay=e,this.longDelay=t,Te(t>e,"Short delay should be less than long delay!"),this.isMobile=Aa()||Na()}get(){return Oh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
*/function Rs(s,e){Te(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
*/class io{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
*/const Lh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
*/const Mh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Uh=new $t(3e4,6e4);function Ns(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function pt(s,e,t,r,o={}){return oo(s,o,async()=>{let c={},l={};r&&(e==="GET"?l=r:c={body:JSON.stringify(r)});const _=Ft({key:s.config.apiKey,...l}).slice(1),v=await s._getAdditionalHeaders();v["Content-Type"]="application/json",s.languageCode&&(v["X-Firebase-Locale"]=s.languageCode);const I={method:e,headers:v,...c};return Ca()||(I.referrerPolicy="no-referrer"),s.emulatorConfig&&ft(s.emulatorConfig.host)&&(I.credentials="include"),io.fetch()(await ao(s,s.config.apiHost,t,_),I)})}async function oo(s,e,t){s._canInitEmulator=!1;const r={...Lh,...e};try{const o=new jh(s),c=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const l=await c.json();if("needConfirmation"in l)throw on(s,"account-exists-with-different-credential",l);if(c.ok&&!("errorMessage"in l))return l;{const _=c.ok?l.errorMessage:l.error.message,[v,I]=_.split(" : ");if(v==="FEDERATED_USER_ID_ALREADY_LINKED")throw on(s,"credential-already-in-use",l);if(v==="EMAIL_EXISTS")throw on(s,"email-already-in-use",l);if(v==="USER_DISABLED")throw on(s,"user-disabled",l);const S=r[v]||v.toLowerCase().replace(/[_\s]+/g,"-");if(I)throw ro(s,S,I);Ie(s,S)}}catch(o){if(o instanceof me)throw o;Ie(s,"network-request-failed",{message:String(o)})}}async function xh(s,e,t,r,o={}){const c=await pt(s,e,t,r,o);return"mfaPendingCredential"in c&&Ie(s,"multi-factor-auth-required",{_serverResponse:c}),c}async function ao(s,e,t,r){const o=`${e}${t}?${r}`,c=s,l=c.config.emulator?Rs(s.config,o):`${s.config.apiScheme}://${o}`;return Mh.includes(t)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(l).toString():l}class jh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(fe(this.auth,"network-request-failed")),Uh.get())})}}function on(s,e,t){const r={appName:s.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const o=fe(s,e,r);return o.customData._tokenResponse=t,o}/**
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
*/async function Fh(s,e){return pt(s,"POST","/v1/accounts:delete",e)}async function yn(s,e){return pt(s,"POST","/v1/accounts:lookup",e)}/**
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
*/function Lt(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vh(s,e=!1){const t=Qe(s),r=await t.getIdToken(e),o=Ps(r);k(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,l=c?.sign_in_provider;return{claims:o,token:r,authTime:Lt(is(o.auth_time)),issuedAtTime:Lt(is(o.iat)),expirationTime:Lt(is(o.exp)),signInProvider:l||null,signInSecondFactor:c?.sign_in_second_factor||null}}function is(s){return Number(s)*1e3}function Ps(s){const[e,t,r]=s.split(".");if(e===void 0||t===void 0||r===void 0)return hn("JWT malformed, contained fewer than 3 sections"),null;try{const o=xi(t);return o?JSON.parse(o):(hn("Failed to decode base64 JWT payload"),null)}catch(o){return hn("Caught error parsing JWT payload as JSON",o?.toString()),null}}function fi(s){const e=Ps(s);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
*/async function xt(s,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof me&&Bh(r)&&s.auth.currentUser===s&&await s.auth.signOut(),r}}function Bh({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
*/class $h{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const t=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,t)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
*/class gs{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lt(this.lastLoginAt),this.creationTime=Lt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
*/async function wn(s){const e=s.auth,t=await s.getIdToken(),r=await xt(s,yn(e,{idToken:t}));k(r?.users.length,e,"internal-error");const o=r.users[0];s._notifyReloadListener(o);const c=o.providerUserInfo?.length?co(o.providerUserInfo):[],l=zh(s.providerData,c),_=s.isAnonymous,v=!(s.email&&o.passwordHash)&&!l?.length,I=_?v:!1,S={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new gs(o.createdAt,o.lastLoginAt),isAnonymous:I};Object.assign(s,S)}async function Hh(s){const e=Qe(s);await wn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zh(s,e){return[...s.filter(t=>!e.some(r=>r.providerId===t.providerId)),...e]}function co(s){return s.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
*/async function Wh(s,e){const t=await oo(s,{},async()=>{const r=Ft({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=s.config,l=await ao(s,o,"/v1/token",`key=${c}`),_=await s._getAdditionalHeaders();_["Content-Type"]="application/x-www-form-urlencoded";const v={method:"POST",headers:_,body:r};return s.emulatorConfig&&ft(s.emulatorConfig.host)&&(v.credentials="include"),io.fetch()(l,v)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function qh(s,e){return pt(s,"POST","/v2/accounts:revokeToken",Ns(s,e))}/**
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
*/class ct{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fi(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){k(e.length!==0,"internal-error");const t=fi(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(k(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:o,expiresIn:c}=await Wh(e,t);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:o,expirationTime:c}=t,l=new ct;return r&&(k(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),o&&(k(typeof o=="string","internal-error",{appName:e}),l.accessToken=o),c&&(k(typeof c=="number","internal-error",{appName:e}),l.expirationTime=c),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ct,this.toJSON())}_performRefresh(){return ve("not implemented")}}/**
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
*/function Ne(s,e){k(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class ie{constructor({uid:e,auth:t,stsTokenManager:r,...o}){this.providerId="firebase",this.proactiveRefresh=new $h(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new gs(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await xt(this,this.stsTokenManager.getToken(this.auth,e));return k(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Vh(this,e)}reload(){return Hh(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ie({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await wn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(se(this.auth.app))return Promise.reject(Ke(this.auth));const e=await this.getIdToken();return await xt(this,Fh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,o=t.email??void 0,c=t.phoneNumber??void 0,l=t.photoURL??void 0,_=t.tenantId??void 0,v=t._redirectEventId??void 0,I=t.createdAt??void 0,S=t.lastLoginAt??void 0,{uid:T,emailVerified:C,isAnonymous:U,providerData:D,stsTokenManager:L}=t;k(T&&L,e,"internal-error");const A=ct.fromJSON(this.name,L);k(typeof T=="string",e,"internal-error"),Ne(r,e.name),Ne(o,e.name),k(typeof C=="boolean",e,"internal-error"),k(typeof U=="boolean",e,"internal-error"),Ne(c,e.name),Ne(l,e.name),Ne(_,e.name),Ne(v,e.name),Ne(I,e.name),Ne(S,e.name);const B=new ie({uid:T,auth:e,email:o,emailVerified:C,displayName:r,isAnonymous:U,photoURL:l,phoneNumber:c,tenantId:_,stsTokenManager:A,createdAt:I,lastLoginAt:S});return D&&Array.isArray(D)&&(B.providerData=D.map(x=>({...x}))),v&&(B._redirectEventId=v),B}static async _fromIdTokenResponse(e,t,r=!1){const o=new ct;o.updateFromServerResponse(t);const c=new ie({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await wn(c),c}static async _fromGetAccountInfoResponse(e,t,r){const o=t.users[0];k(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?co(o.providerUserInfo):[],l=!(o.email&&o.passwordHash)&&!c?.length,_=new ct;_.updateFromIdToken(r);const v=new ie({uid:o.localId,auth:e,stsTokenManager:_,isAnonymous:l}),I={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new gs(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!c?.length};return Object.assign(v,I),v}}/**
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
*/const pi=new Map;function be(s){Te(s instanceof Function,"Expected a class definition");let e=pi.get(s);return e?(Te(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,pi.set(s,e),e)}/**
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
*/class ho{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ho.type="NONE";const gi=ho;/**
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
*/function ln(s,e,t){return`firebase:${s}:${e}:${t}`}class ht{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=ln(this.userKey,o.apiKey,c),this.fullPersistenceKey=ln("persistence",o.apiKey,c),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await yn(this.auth,{idToken:e}).catch(()=>{});return t?ie._fromGetAccountInfoResponse(this.auth,t,e):null}return ie._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ht(be(gi),e,r);const o=(await Promise.all(t.map(async I=>{if(await I._isAvailable())return I}))).filter(I=>I);let c=o[0]||be(gi);const l=ln(r,e.config.apiKey,e.name);let _=null;for(const I of t)try{const S=await I._get(l);if(S){let T;if(typeof S=="string"){const C=await yn(e,{idToken:S}).catch(()=>{});if(!C)break;T=await ie._fromGetAccountInfoResponse(e,C,S)}else T=ie._fromJSON(e,S);I!==c&&(_=T),c=I;break}}catch{}const v=o.filter(I=>I._shouldAllowMigration);return!c._shouldAllowMigration||!v.length?new ht(c,e,r):(c=v[0],_&&await c._set(l,_.toJSON()),await Promise.all(t.map(async I=>{if(I!==c)try{await I._remove(l)}catch{}})),new ht(c,e,r))}}/**
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
*/function mi(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(po(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lo(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mo(e))return"Blackberry";if(yo(e))return"Webos";if(uo(e))return"Safari";if((e.includes("chrome/")||fo(e))&&!e.includes("edge/"))return"Chrome";if(go(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=s.match(t);if(r?.length===2)return r[1]}return"Other"}function lo(s=X()){return/firefox\//i.test(s)}function uo(s=X()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fo(s=X()){return/crios\//i.test(s)}function po(s=X()){return/iemobile/i.test(s)}function go(s=X()){return/android/i.test(s)}function mo(s=X()){return/blackberry/i.test(s)}function yo(s=X()){return/webos/i.test(s)}function Os(s=X()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function Gh(s=X()){return Os(s)&&!!window.navigator?.standalone}function Kh(){return Pa()&&document.documentMode===10}function wo(s=X()){return Os(s)||go(s)||yo(s)||mo(s)||/windows phone/i.test(s)||po(s)}/**
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
*/function vo(s,e=[]){let t;switch(s){case"Browser":t=mi(X());break;case"Worker":t=`${mi(X())}-${s}`;break;default:t=s}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${et}/${r}`}/**
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
*/class Jh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=c=>new Promise((l,_)=>{try{const v=e(c);l(v)}catch(v){_(v)}});r.onAbort=t,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
* @license
* Copyright 2023 Google LLC
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
*/async function Xh(s,e={}){return pt(s,"GET","/v2/passwordPolicy",Ns(s,e))}/**
* @license
* Copyright 2023 Google LLC
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
*/const Yh=6;class Zh{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Yh,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
*/class Qh{constructor(e,t,r,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yi(this),this.idTokenSubscription=new yi(this),this.beforeStateQueue=new Jh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=so,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=be(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ht.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await yn(this,{idToken:e}),r=await ie._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(se(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,l=r?._redirectEventId,_=await this.tryRedirectSignIn(e);(!c||c===l)&&_?.user&&(r=_.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(c){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wn(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(se(this.app))return Promise.reject(Ke(this));const t=e?Qe(e):null;return t&&k(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return se(this.app)?Promise.reject(Ke(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return se(this.app)?Promise.reject(Ke(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(be(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Xh(this),t=new Zh(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new jt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await qh(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&be(e)||this._popupRedirectResolver;k(t,this,"argument-error"),this.redirectPersistenceManager=await ht.create(this,[be(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,o){if(this._deleted)return()=>{};const c=typeof t=="function"?t:t.next.bind(t);let l=!1;const _=this._isInitialized?Promise.resolve():this._initializationPromise;if(k(_,this,"internal-error"),_.then(()=>{l||c(this.currentUser)}),typeof t=="function"){const v=e.addObserver(t,r,o);return()=>{l=!0,v()}}else{const v=e.addObserver(t);return()=>{l=!0,v()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(se(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Nh(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ds(s){return Qe(s)}class yi{constructor(e){this.auth=e,this.observer=null,this.addObserver=ja(t=>this.observer=t)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
*/let Ls={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function el(s){Ls=s}function tl(s){return Ls.loadJS(s)}function nl(){return Ls.gapiScript}function sl(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
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
*/function rl(s,e){const t=En(s,"auth");if(t.isInitialized()){const r=t.getImmediate(),o=t.getOptions();if(Je(o,e??{}))return r;Ie(r,"already-initialized")}return t.initialize({options:e})}function il(s,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(be);e?.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(r,e?.popupRedirectResolver)}function ol(s,e,t){const r=Ds(s);k(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,c=bo(e),{host:l,port:_}=al(e),v=_===null?"":`:${_}`,I={url:`${c}//${l}${v}/`},S=Object.freeze({host:l,port:_,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){k(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),k(Je(I,r.config.emulator)&&Je(S,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=I,r.emulatorConfig=S,r.settings.appVerificationDisabledForTesting=!0,ft(l)?(ws(`${c}//${l}${v}`),vs("Auth",!0)):cl()}function bo(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function al(s){const e=bo(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:wi(r.substr(c.length+1))}}else{const[c,l]=r.split(":");return{host:c,port:wi(l)}}}function wi(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function cl(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
*/class _o{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ve("not implemented")}_getIdTokenResponse(e){return ve("not implemented")}_linkToIdToken(e,t){return ve("not implemented")}_getReauthenticationResolver(e){return ve("not implemented")}}/**
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
*/async function lt(s,e){return xh(s,"POST","/v1/accounts:signInWithIdp",Ns(s,e))}/**
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
*/const hl="http://localhost";class Ze extends _o{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ie("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o,...c}=t;if(!r||!o)return null;const l=new Ze(r,o);return l.idToken=c.idToken||void 0,l.accessToken=c.accessToken||void 0,l.secret=c.secret,l.nonce=c.nonce,l.pendingToken=c.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return lt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,lt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,lt(e,t)}buildRequest(){const e={requestUri:hl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ft(t)}return e}}/**
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
*/class Io{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
*/class Ht extends Io{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
*/class Pe extends Ht{constructor(){super("facebook.com")}static credential(e){return Ze._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pe.credential(e.oauthAccessToken)}catch{return null}}}Pe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pe.PROVIDER_ID="facebook.com";/**
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
*/class Oe extends Ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ze._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Oe.credential(t,r)}catch{return null}}}Oe.GOOGLE_SIGN_IN_METHOD="google.com";Oe.PROVIDER_ID="google.com";/**
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
*/class De extends Ht{constructor(){super("github.com")}static credential(e){return Ze._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch{return null}}}De.GITHUB_SIGN_IN_METHOD="github.com";De.PROVIDER_ID="github.com";/**
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
*/class Le extends Ht{constructor(){super("twitter.com")}static credential(e,t){return Ze._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Le.credential(t,r)}catch{return null}}}Le.TWITTER_SIGN_IN_METHOD="twitter.com";Le.PROVIDER_ID="twitter.com";/**
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
*/class dt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,o=!1){const c=await ie._fromIdTokenResponse(e,r,o),l=vi(r);return new dt({user:c,providerId:l,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const o=vi(r);return new dt({user:e,providerId:o,_tokenResponse:r,operationType:t})}}function vi(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
*/class vn extends me{constructor(e,t,r,o){super(t.code,t.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,vn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,o){return new vn(e,t,r,o)}}function To(s,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?vn._fromErrorAndOperation(s,o,e,r):o})}async function ll(s,e,t=!1){const r=await xt(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return dt._forOperation(s,"link",r)}/**
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
*/async function ul(s,e,t=!1){const{auth:r}=s;if(se(r.app))return Promise.reject(Ke(r));const o="reauthenticate";try{const c=await xt(s,To(r,o,e,s),t);k(c.idToken,r,"internal-error");const l=Ps(c.idToken);k(l,r,"internal-error");const{sub:_}=l;return k(s.uid===_,r,"user-mismatch"),dt._forOperation(s,o,c)}catch(c){throw c?.code==="auth/user-not-found"&&Ie(r,"user-mismatch"),c}}/**
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
*/async function dl(s,e,t=!1){if(se(s.app))return Promise.reject(Ke(s));const r="signIn",o=await To(s,r,e),c=await dt._fromIdTokenResponse(s,r,o);return t||await s._updateCurrentUser(c.user),c}function fl(s,e,t,r){return Qe(s).onIdTokenChanged(e,t,r)}function pl(s,e,t){return Qe(s).beforeAuthStateChanged(e,t)}const bn="__sak";/**
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
*/class Eo{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bn,"1"),this.storage.removeItem(bn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
*/const gl=1e3,ml=10;class So extends Eo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),o=this.localCache[t];r!==o&&e(t,o,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,_,v)=>{this.notifyListeners(l,v)});return}const r=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const l=this.storage.getItem(r);!t&&this.localCache[r]===l||this.notifyListeners(r,l)},c=this.storage.getItem(r);Kh()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,ml):o()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},gl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}So.type="LOCAL";const yl=So;/**
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
*/class ko extends Eo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ko.type="SESSION";const Ao=ko;/**
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
*/function wl(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
*/class Sn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const r=new Sn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:o,data:c}=t.data,l=this.handlersMap[o];if(!l?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const _=Array.from(l).map(async I=>I(t.origin,c)),v=await wl(_);t.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:v})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sn.receivers=[];/**
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
*/function Ms(s="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return s+t}/**
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
*/class vl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,l;return new Promise((_,v)=>{const I=Ms("",20);o.port1.start();const S=setTimeout(()=>{v(new Error("unsupported_event"))},r);l={messageChannel:o,onMessage(T){const C=T;if(C.data.eventId===I)switch(C.data.status){case"ack":clearTimeout(S),c=setTimeout(()=>{v(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),_(C.data.response);break;default:clearTimeout(S),clearTimeout(c),v(new Error("invalid_response"));break}}},this.handlers.add(l),o.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:I,data:t},[o.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
*/function pe(){return window}function bl(s){pe().location.href=s}/**
* @license
* Copyright 2020 Google LLC.
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
*/function Co(){return typeof pe().WorkerGlobalScope<"u"&&typeof pe().importScripts=="function"}async function _l(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Il(){return navigator?.serviceWorker?.controller||null}function Tl(){return Co()?self:null}/**
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
*/const Ro="firebaseLocalStorageDb",El=1,_n="firebaseLocalStorage",No="fbase_key";class zt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function kn(s,e){return s.transaction([_n],e?"readwrite":"readonly").objectStore(_n)}function Sl(){const s=indexedDB.deleteDatabase(Ro);return new zt(s).toPromise()}function ms(){const s=indexedDB.open(Ro,El);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const r=s.result;try{r.createObjectStore(_n,{keyPath:No})}catch(o){t(o)}}),s.addEventListener("success",async()=>{const r=s.result;r.objectStoreNames.contains(_n)?e(r):(r.close(),await Sl(),e(await ms()))})})}async function bi(s,e,t){const r=kn(s,!0).put({[No]:e,value:t});return new zt(r).toPromise()}async function kl(s,e){const t=kn(s,!1).get(e),r=await new zt(t).toPromise();return r===void 0?null:r.value}function _i(s,e){const t=kn(s,!0).delete(e);return new zt(t).toPromise()}const Al=800,Cl=3;class Po{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ms(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Cl)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Co()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sn._getInstance(Tl()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await _l(),!this.activeServiceWorker)return;this.sender=new vl(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Il()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ms();return await bi(e,bn,"1"),await _i(e,bn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>bi(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>kl(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_i(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=kn(o,!1).getAll();return new zt(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Al)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Po.type="LOCAL";const Rl=Po;new $t(3e4,6e4);/**
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
*/function Nl(s,e){return e?be(e):(k(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
*/class Us extends _o{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return lt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return lt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pl(s){return dl(s.auth,new Us(s),s.bypassAuthState)}function Ol(s){const{auth:e,user:t}=s;return k(t,e,"internal-error"),ul(t,new Us(s),s.bypassAuthState)}async function Dl(s){const{auth:e,user:t}=s;return k(t,e,"internal-error"),ll(t,new Us(s),s.bypassAuthState)}/**
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
*/class Oo{constructor(e,t,r,o,c=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:o,tenantId:c,error:l,type:_}=e;if(l){this.reject(l);return}const v={auth:this.auth,requestUri:t,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(_)(v))}catch(I){this.reject(I)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pl;case"linkViaPopup":case"linkViaRedirect":return Dl;case"reauthViaPopup":case"reauthViaRedirect":return Ol;default:Ie(this.auth,"internal-error")}}resolve(e){Te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
*/const Ll=new $t(2e3,1e4);class ot extends Oo{constructor(e,t,r,o,c){super(e,t,o,c),this.provider=r,this.authWindow=null,this.pollId=null,ot.currentPopupAction&&ot.currentPopupAction.cancel(),ot.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){Te(this.filter.length===1,"Popup operations only handle one event");const e=Ms();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ot.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ll.get())};e()}}ot.currentPopupAction=null;/**
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
*/const Ml="pendingRedirect",un=new Map;class Ul extends Oo{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=un.get(this.auth._key());if(!e){try{const t=await xl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}un.set(this.auth._key(),e)}return this.bypassAuthState||un.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xl(s,e){const t=Vl(e),r=Fl(s);if(!await r._isAvailable())return!1;const o=await r._get(t)==="true";return await r._remove(t),o}function jl(s,e){un.set(s._key(),e)}function Fl(s){return be(s._redirectPersistence)}function Vl(s){return ln(Ml,s.config.apiKey,s.name)}async function Bl(s,e,t=!1){if(se(s.app))return Promise.reject(Ke(s));const r=Ds(s),o=Nl(r,e),c=await new Ul(r,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
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
*/const $l=600*1e3;class Hl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zl(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Do(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(fe(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$l&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ii(e))}saveEventToCache(e){this.cachedEventUids.add(Ii(e)),this.lastProcessedEventTime=Date.now()}}function Ii(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function Do({type:s,error:e}){return s==="unknown"&&e?.code==="auth/no-auth-event"}function zl(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Do(s);default:return!1}}/**
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
*/async function Wl(s,e={}){return pt(s,"GET","/v1/projects",e)}/**
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
*/const ql=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gl=/^https?/;async function Kl(s){if(s.config.emulator)return;const{authorizedDomains:e}=await Wl(s);for(const t of e)try{if(Jl(t))return}catch{}Ie(s,"unauthorized-domain")}function Jl(s){const e=ps(),{protocol:t,hostname:r}=new URL(e);if(s.startsWith("chrome-extension://")){const c=new URL(s);return c.hostname===""&&r===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!Gl.test(t))return!1;if(ql.test(s))return r===s;const o=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
* @license
* Copyright 2020 Google LLC.
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
*/const Xl=new $t(3e4,6e4);function Ti(){const s=pe().___jsl;if(s?.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function Yl(s){return new Promise((e,t)=>{function r(){Ti(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ti(),t(fe(s,"network-request-failed"))},timeout:Xl.get()})}if(pe().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(pe().gapi?.load)r();else{const o=sl("iframefcb");return pe()[o]=()=>{gapi.load?r():t(fe(s,"network-request-failed"))},tl(`${nl()}?onload=${o}`).catch(c=>t(c))}}).catch(e=>{throw dn=null,e})}let dn=null;function Zl(s){return dn=dn||Yl(s),dn}/**
* @license
* Copyright 2020 Google LLC.
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
*/const Ql=new $t(5e3,15e3),eu="__/auth/iframe",tu="emulator/auth/iframe",nu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},su=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ru(s){const e=s.config;k(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?Rs(e,tu):`https://${s.config.authDomain}/${eu}`,r={apiKey:e.apiKey,appName:s.name,v:et},o=su.get(s.config.apiHost);o&&(r.eid=o);const c=s._getFrameworks();return c.length&&(r.fw=c.join(",")),`${t}?${Ft(r).slice(1)}`}async function iu(s){const e=await Zl(s),t=pe().gapi;return k(t,s,"internal-error"),e.open({where:document.body,url:ru(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nu,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const l=fe(s,"network-request-failed"),_=pe().setTimeout(()=>{c(l)},Ql.get());function v(){pe().clearTimeout(_),o(r)}r.ping(v).then(v,()=>{c(l)})}))}/**
* @license
* Copyright 2020 Google LLC.
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
*/const ou={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},au=500,cu=600,hu="_blank",lu="http://localhost";class Ei{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uu(s,e,t,r=au,o=cu){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let _="";const v={...ou,width:r.toString(),height:o.toString(),top:c,left:l},I=X().toLowerCase();t&&(_=fo(I)?hu:t),lo(I)&&(e=e||lu,v.scrollbars="yes");const S=Object.entries(v).reduce((C,[U,D])=>`${C}${U}=${D},`,"");if(Gh(I)&&_!=="_self")return du(e||"",_),new Ei(null);const T=window.open(e||"",_,S);k(T,s,"popup-blocked");try{T.focus()}catch{}return new Ei(T)}function du(s,e){const t=document.createElement("a");t.href=s,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
*/const fu="__/auth/handler",pu="emulator/auth/handler",gu=encodeURIComponent("fac");async function Si(s,e,t,r,o,c){k(s.config.authDomain,s,"auth-domain-config-required"),k(s.config.apiKey,s,"invalid-api-key");const l={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:r,v:et,eventId:o};if(e instanceof Io){e.setDefaultLanguage(s.languageCode),l.providerId=e.providerId||"",xa(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[S,T]of Object.entries({}))l[S]=T}if(e instanceof Ht){const S=e.getScopes().filter(T=>T!=="");S.length>0&&(l.scopes=S.join(","))}s.tenantId&&(l.tid=s.tenantId);const _=l;for(const S of Object.keys(_))_[S]===void 0&&delete _[S];const v=await s._getAppCheckToken(),I=v?`#${gu}=${encodeURIComponent(v)}`:"";return`${mu(s)}?${Ft(_).slice(1)}${I}`}function mu({config:s}){return s.emulator?Rs(s,pu):`https://${s.authDomain}/${fu}`}/**
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
*/const os="webStorageSupport";class yu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ao,this._completeRedirectFn=Bl,this._overrideRedirectResult=jl}async _openPopup(e,t,r,o){Te(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await Si(e,t,r,ps(),o);return uu(e,c,Ms())}async _openRedirect(e,t,r,o){await this._originValidation(e);const c=await Si(e,t,r,ps(),o);return bl(c),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:c}=this.eventManagers[t];return o?Promise.resolve(o):(Te(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await iu(e),r=new Hl(e);return t.register("authEvent",o=>(k(o?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(os,{type:os},r=>{const o=r?.[0]?.[os];o!==void 0&&t(!!o),Ie(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Kl(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wo()||uo()||Os()}}const wu=yu;var ki="@firebase/auth",Ai="1.11.0";/**
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
*/class vu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
*/function bu(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _u(s){Xe(new xe("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:l,authDomain:_}=r.options;k(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const v={apiKey:l,authDomain:_,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vo(s)},I=new Qh(r,o,c,v);return il(I,t),I},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Xe(new xe("auth-internal",e=>{const t=Ds(e.getProvider("auth").getImmediate());return(r=>new vu(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),de(ki,Ai,bu(s)),de(ki,Ai,"esm2020")}/**
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
*/const Iu=300,Tu=Bi("authIdTokenMaxAge")||Iu;let Ci=null;const Eu=s=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Tu)return;const o=t?.token;Ci!==o&&(Ci=o,await fetch(s,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Su(s=Is()){const e=En(s,"auth");if(e.isInitialized())return e.getImmediate();const t=rl(s,{popupRedirectResolver:wu,persistence:[Rl,yl,Ao]}),r=Bi("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const l=Eu(c.toString());pl(t,l,()=>l(t.currentUser)),fl(t,_=>l(_))}}const o=ji("auth");return o&&ol(t,`http://${o}`),t}function ku(){return document.getElementsByTagName("head")?.[0]??document}el({loadJS(s){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",s),r.onload=e,r.onerror=o=>{const c=fe("internal-error");c.customData=o,t(c)},r.type="text/javascript",r.charset="UTF-8",ku().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_u("Browser");/**
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
*/const Lo="firebasestorage.googleapis.com",Au="storageBucket",Cu=120*1e3,Ru=600*1e3;/**
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
*/class ye extends me{constructor(e,t,r=0){super(as(e),`Firebase Storage: ${t} (${as(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return as(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ge;(function(s){s.UNKNOWN="unknown",s.OBJECT_NOT_FOUND="object-not-found",s.BUCKET_NOT_FOUND="bucket-not-found",s.PROJECT_NOT_FOUND="project-not-found",s.QUOTA_EXCEEDED="quota-exceeded",s.UNAUTHENTICATED="unauthenticated",s.UNAUTHORIZED="unauthorized",s.UNAUTHORIZED_APP="unauthorized-app",s.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",s.INVALID_CHECKSUM="invalid-checksum",s.CANCELED="canceled",s.INVALID_EVENT_NAME="invalid-event-name",s.INVALID_URL="invalid-url",s.INVALID_DEFAULT_BUCKET="invalid-default-bucket",s.NO_DEFAULT_BUCKET="no-default-bucket",s.CANNOT_SLICE_BLOB="cannot-slice-blob",s.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",s.NO_DOWNLOAD_URL="no-download-url",s.INVALID_ARGUMENT="invalid-argument",s.INVALID_ARGUMENT_COUNT="invalid-argument-count",s.APP_DELETED="app-deleted",s.INVALID_ROOT_OPERATION="invalid-root-operation",s.INVALID_FORMAT="invalid-format",s.INTERNAL_ERROR="internal-error",s.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ge||(ge={}));function as(s){return"storage/"+s}function Nu(){const s="An unknown error occurred, please check the error payload for server response.";return new ye(ge.UNKNOWN,s)}function Pu(){return new ye(ge.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ou(){return new ye(ge.CANCELED,"User canceled the upload/download.")}function Du(s){return new ye(ge.INVALID_URL,"Invalid URL '"+s+"'.")}function Lu(s){return new ye(ge.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+s+"'.")}function Ri(s){return new ye(ge.INVALID_ARGUMENT,s)}function Mo(){return new ye(ge.APP_DELETED,"The Firebase app was deleted.")}function Mu(s){return new ye(ge.INVALID_ROOT_OPERATION,"The operation '"+s+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
*/class oe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=oe.makeFromUrl(e,t)}catch{return new oe(e,"")}if(r.path==="")return r;throw Lu(e)}static makeFromUrl(e,t){let r=null;const o="([A-Za-z0-9.\\-_]+)";function c(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const l="(/(.*))?$",_=new RegExp("^gs://"+o+l,"i"),v={bucket:1,path:3};function I(V){V.path_=decodeURIComponent(V.path)}const S="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),C="(/([^?#]*).*)?$",U=new RegExp(`^https?://${T}/${S}/b/${o}/o${C}`,"i"),D={bucket:1,path:3},L=t===Lo?"(?:storage.googleapis.com|storage.cloud.google.com)":t,A="([^?#]*)",B=new RegExp(`^https?://${L}/${o}/${A}`,"i"),x=[{regex:_,indices:v,postModify:c},{regex:U,indices:D,postModify:I},{regex:B,indices:{bucket:1,path:2},postModify:I}];for(let V=0;V<x.length;V++){const te=x[V],Q=te.regex.exec(e);if(Q){const Y=Q[te.indices.bucket];let g=Q[te.indices.path];g||(g=""),r=new oe(Y,g),te.postModify(r);break}}if(r==null)throw Du(e);return r}}class Uu{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
*/function xu(s,e,t){let r=1,o=null,c=null,l=!1,_=0;function v(){return _===2}let I=!1;function S(...A){I||(I=!0,e.apply(null,A))}function T(A){o=setTimeout(()=>{o=null,s(U,v())},A)}function C(){c&&clearTimeout(c)}function U(A,...B){if(I){C();return}if(A){C(),S.call(null,A,...B);return}if(v()||l){C(),S.call(null,A,...B);return}r<64&&(r*=2);let x;_===1?(_=2,x=0):x=(r+Math.random())*1e3,T(x)}let D=!1;function L(A){D||(D=!0,C(),!I&&(o!==null?(A||(_=2),clearTimeout(o),T(0)):A||(_=1)))}return T(0),c=setTimeout(()=>{l=!0,L(!0)},t),L}function ju(s){s(!1)}/**
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
*/function Fu(s){return s!==void 0}function Ni(s,e,t,r){if(r<e)throw Ri(`Invalid value for '${s}'. Expected ${e} or greater.`);if(r>t)throw Ri(`Invalid value for '${s}'. Expected ${t} or less.`)}function Vu(s){const e=encodeURIComponent;let t="?";for(const r in s)if(s.hasOwnProperty(r)){const o=e(r)+"="+e(s[r]);t=t+o+"&"}return t=t.slice(0,-1),t}var In;(function(s){s[s.NO_ERROR=0]="NO_ERROR",s[s.NETWORK_ERROR=1]="NETWORK_ERROR",s[s.ABORT=2]="ABORT"})(In||(In={}));/**
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
*/function Bu(s,e){const t=s>=500&&s<600,r=[408,429].indexOf(s)!==-1,o=e.indexOf(s)!==-1;return t||r||o}/**
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
*/class $u{constructor(e,t,r,o,c,l,_,v,I,S,T,C=!0,U=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=o,this.successCodes_=c,this.additionalRetryCodes_=l,this.callback_=_,this.errorCallback_=v,this.timeout_=I,this.progressCallback_=S,this.connectionFactory_=T,this.retry=C,this.isUsingEmulator=U,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,L)=>{this.resolve_=D,this.reject_=L,this.start_()})}start_(){const e=(r,o)=>{if(o){r(!1,new an(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const l=_=>{const v=_.loaded,I=_.lengthComputable?_.total:-1;this.progressCallback_!==null&&this.progressCallback_(v,I)};this.progressCallback_!==null&&c.addUploadProgressListener(l),c.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(l),this.pendingConnection_=null;const _=c.getErrorCode()===In.NO_ERROR,v=c.getStatus();if(!_||Bu(v,this.additionalRetryCodes_)&&this.retry){const S=c.getErrorCode()===In.ABORT;r(!1,new an(!1,null,S));return}const I=this.successCodes_.indexOf(v)!==-1;r(!0,new an(I,c))})},t=(r,o)=>{const c=this.resolve_,l=this.reject_,_=o.connection;if(o.wasSuccessCode)try{const v=this.callback_(_,_.getResponse());Fu(v)?c(v):c()}catch(v){l(v)}else if(_!==null){const v=Nu();v.serverResponse=_.getErrorText(),this.errorCallback_?l(this.errorCallback_(_,v)):l(v)}else if(o.canceled){const v=this.appDelete_?Mo():Ou();l(v)}else{const v=Pu();l(v)}};this.canceled_?t(!1,new an(!1,null,!0)):this.backoffId_=xu(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ju(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class an{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Hu(s,e){e!==null&&e.length>0&&(s.Authorization="Firebase "+e)}function zu(s,e){s["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Wu(s,e){e&&(s["X-Firebase-GMPID"]=e)}function qu(s,e){e!==null&&(s["X-Firebase-AppCheck"]=e)}function Gu(s,e,t,r,o,c,l=!0,_=!1){const v=Vu(s.urlParams),I=s.url+v,S=Object.assign({},s.headers);return Wu(S,e),Hu(S,t),zu(S,c),qu(S,r),new $u(I,s.method,S,s.body,s.successCodes,s.additionalRetryCodes,s.handler,s.errorHandler,s.timeout,s.progressCallback,o,l,_)}/**
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
*/function Ku(s){if(s.length===0)return null;const e=s.lastIndexOf("/");return e===-1?"":s.slice(0,e)}function Ju(s){const e=s.lastIndexOf("/",s.length-2);return e===-1?s:s.slice(e+1)}/**
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
*/class Tn{constructor(e,t){this._service=e,t instanceof oe?this._location=t:this._location=oe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Tn(e,t)}get root(){const e=new oe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ju(this._location.path)}get storage(){return this._service}get parent(){const e=Ku(this._location.path);if(e===null)return null;const t=new oe(this._location.bucket,e);return new Tn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Mu(e)}}function Pi(s,e){const t=e?.[Au];return t==null?null:oe.makeFromBucketSpec(t,s)}function Xu(s,e,t,r={}){s.host=`${e}:${t}`;const o=ft(e);o&&(ws(`https://${s.host}/b`),vs("Storage",!0)),s._isUsingEmulator=!0,s._protocol=o?"https":"http";const{mockUserToken:c}=r;c&&(s._overrideAuthToken=typeof c=="string"?c:$i(c,s.app.options.projectId))}class Yu{constructor(e,t,r,o,c,l=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=o,this._firebaseVersion=c,this._isUsingEmulator=l,this._bucket=null,this._host=Lo,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Cu,this._maxUploadRetryTime=Ru,this._requests=new Set,o!=null?this._bucket=oe.makeFromBucketSpec(o,this._host):this._bucket=Pi(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=oe.makeFromBucketSpec(this._url,e):this._bucket=Pi(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ni("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ni("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(se(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Tn(this,e)}_makeRequest(e,t,r,o,c=!0){if(this._deleted)return new Uu(Mo());{const l=Gu(e,this._appId,r,o,t,this._firebaseVersion,c,this._isUsingEmulator);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(e,t){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,o).getPromise()}}const Oi="@firebase/storage",Di="0.14.0";/**
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
*/const Uo="storage";function Zu(s=Is(),e){s=Qe(s);const t=En(s,Uo).getImmediate({identifier:e}),r=Fi("storage");return r&&Qu(t,...r),t}function Qu(s,e,t,r={}){Xu(s,e,t,r)}function ed(s,{instanceIdentifier:e}){const t=s.getProvider("app").getImmediate(),r=s.getProvider("auth-internal"),o=s.getProvider("app-check-internal");return new Yu(t,r,o,e,et)}function td(){Xe(new xe(Uo,ed,"PUBLIC").setMultipleInstances(!0)),de(Oi,Di,""),de(Oi,Di,"esm2020")}td();const nd={apiKey:"AIzaSyC0qVQm59S1_OFJcYLr2ILyGB9m-SoxHro",authDomain:"holysmokas-4ef36.firebaseapp.com",projectId:"holysmokas-4ef36",storageBucket:"holysmokas-4ef36.firebasestorage.app",messagingSenderId:"236391401471",appId:"1:236391401471:web:16780dc40257205caf09ca",measurementId:"G-LRKVZGKNLD"},xs=Wi(nd);Eh(xs);Su(xs);Zu(xs);const sd="https://script.google.com/macros/s/AKfycbzJOYtbHJRuIgQTT7BVhmzGvRaJ1TMBd-VDoe_DUk_Rbnyr9EBiB5W9Xutir8r8LcgUTg/exec";function Li(s,e,t=!0){const r=document.getElementById("formModal"),o=document.getElementById("modalTitle"),c=document.getElementById("modalMessage"),l=document.getElementById("modalIcon");o.textContent=s,c.textContent=e,l.textContent=t?"✔":"✕",l.style.background=t?"var(--secondary)":"#ef4444",r.classList.add("show")}window.closeModal=function(){document.getElementById("formModal").classList.remove("show")};async function rd(s){try{const e=await fetch(sd,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});return console.log("Data sent to Google Apps Script"),!0}catch(e){return console.error("Error sending to Google Script:",e),!1}}function id(s){let e=s.replace(/^https?:\/\//,"");return e=e.replace(/^www\./,""),e=e.split("/")[0],e=e.trim(),e}window.checkDomain=async function(){const s=document.getElementById("domainInput"),e=document.getElementById("domainResult"),t=s.value.trim();if(!t){e.innerHTML="⚠️ Please enter a domain name.",e.style.color="#f59e0b";return}e.innerHTML="🔍 Checking availability...",e.style.color="#6b7280";try{const r=await(await fetch("http://localhost:8080/check-domain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({domain:t})})).json();if(r.available===!0){const o=r.cleanedDomain||id(t),c=r.pricing?.initialCost||r.price||12.99,l=r.pricing?.renewalCost||r.renewalPrice||12.99;e.innerHTML=`
                <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                        <span style="font-size: 1.5rem;">✅</span>
                        <strong style="color: #065f46; font-size: 1.1rem;">${o} is available!</strong>
                    </div>
                    
                    <div style="background: white; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.75rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span style="color: #6b7280;">Initial Registration:</span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${c.toFixed(2)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: #6b7280;">Annual Renewal:</span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${l.toFixed(2)}/year</strong>
                        </div>
                    </div>
                    
                    <button 
                        type="button" 
                        class="btn btn-primary" 
                        onclick="addDomainToForm('${o}', ${c}, ${l})" 
                        style="width: 100%; margin-top: 0.5rem;">
                        Add to Form
                    </button>
                    
                    <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.75rem; margin-bottom: 0;">
                        💡 Domain will be registered after you complete your website order
                    </p>
                </div>
            `,e.style.color="#10b981",window.selectedDomain=o,window.domainPricing={initialCost:c,renewalCost:l}}else{const o=r.domain||t;e.innerHTML=`
                <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 1.5rem;">❌</span>
                        <strong style="color: #991b1b;">${o} is already taken</strong>
                    </div>
                    <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem; margin-bottom: 0;">
                        Try a different domain name or extension (.net, .org, .co)
                    </p>
                </div>
            `,e.style.color="#ef4444",window.selectedDomain=null,window.domainPricing=null}}catch(r){console.error("Domain check error:",r),e.innerHTML=`
            <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span style="font-size: 1.5rem;">⚠️</span>
                    <strong style="color: #991b1b;">Error checking domain</strong>
                </div>
                <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem; margin-bottom: 0;">
                    Please try again or contact support
                </p>
            </div>
        `,e.style.color="#ef4444"}};window.addDomainToForm=function(s,e=0,t=0){const r=document.getElementById("currentUrl");r&&(r.value=`https://${s}`,r.style.border="2px solid #10b981",setTimeout(()=>{r.style.border=""},2e3)),window.selectedDomain=s,window.domainPricing={initialCost:e,renewalCost:t};const o=document.getElementById("domainResult");o.innerHTML=`
        <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                <span style="font-size: 1.5rem;">✅</span>
                <strong style="color: #065f46;">${s} has been added to your form!</strong>
            </div>
            
            <div style="background: white; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.75rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span style="color: #6b7280;">Initial Registration:</span>
                    <strong style="color: #059669;">$${e.toFixed(2)}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span style="color: #6b7280;">Annual Renewal:</span>
                    <strong style="color: #059669;">$${t.toFixed(2)}/year</strong>
                </div>
            </div>
            
            <button 
                type="button" 
                class="btn btn-secondary" 
                onclick="removeDomainFromForm()" 
                style="width: 100%; font-size: 0.875rem;">
                Remove Domain
            </button>
        </div>
    `,o.style.color="#10b981",js(),document.getElementById("contactForm").scrollIntoView({behavior:"smooth",block:"start"}),setTimeout(()=>{const c=document.getElementById("businessName");c&&!c.value&&c.focus()},500)};function xo(s){return{"Starter - $599 (New Website)":599,"Business - $1,199 (New Website)":1199,"Small Shop - $1,699 (New Website)":1699,"E-Commerce/Enterprise - Custom Quote":0,"Website Redesign/Updates":0,"Not Sure Yet":0}[s]||0}function js(){const s=document.getElementById("package"),e=s?s.value:"",t=xo(e),r=window.domainPricing?window.domainPricing.initialCost:0;let o=document.getElementById("pricingBreakdown");if(!o){o=document.createElement("div"),o.id="pricingBreakdown",o.style.cssText="margin-top: 2rem; padding: 1.5rem; background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px;";const c=document.getElementById("submitBtn");c&&c.parentNode.insertBefore(o,c)}if(t>0){const c=t+r;o.innerHTML=`
            <h3 style="color: #065f46; font-size: 1.3rem; margin-bottom: 1rem; text-align: center;">
                💰 Your Project Estimate
            </h3>
            
            <div style="background: white; padding: 1rem; border-radius: 6px; margin-bottom: 1rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem; padding-bottom: 0.75rem; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 1rem;">
                        <strong>Website Package:</strong><br>
                        <span style="font-size: 0.875rem;">${e}</span>
                    </span>
                    <strong style="color: #059669; font-size: 1.1rem;">$${t.toFixed(2)}</strong>
                </div>
                
                ${r>0?`
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem; padding-bottom: 0.75rem; border-bottom: 1px solid #e5e7eb;">
                        <span style="color: #6b7280; font-size: 1rem;">
                            <strong>Domain Registration:</strong><br>
                            <span style="font-size: 0.875rem;">${window.selectedDomain}</span>
                        </span>
                        <strong style="color: #059669; font-size: 1.1rem;">$${r.toFixed(2)}</strong>
                    </div>
                `:""}
                
                <div style="display: flex; justify-content: space-between; padding-top: 0.75rem;">
                    <strong style="color: #065f46; font-size: 1.2rem;">Total First Year:</strong>
                    <strong style="color: #065f46; font-size: 1.4rem;">$${c.toFixed(2)}</strong>
                </div>
            </div>
            
            ${r>0?`
                <p style="color: #6b7280; font-size: 0.875rem; text-align: center; margin-top: 1rem; margin-bottom: 0;">
                    📅 Domain renewal of $${window.domainPricing.renewalCost.toFixed(2)} will be due annually
                </p>
            `:""}
            
            <p style="color: #6b7280; font-size: 0.875rem; text-align: center; margin-top: 0.75rem; margin-bottom: 0;">
                ✨ This is an estimate. Final quote will be provided after reviewing your requirements.
            </p>
        `,o.style.display="block"}else e.includes("Custom Quote")?(o.innerHTML=`
            <h3 style="color: #6366f1; font-size: 1.3rem; margin-bottom: 1rem; text-align: center;">
                💼 Custom Enterprise Quote
            </h3>
            
            <div style="background: white; padding: 1.5rem; border-radius: 6px; text-align: center;">
                <p style="color: #6b7280; margin-bottom: 1rem;">
                    We'll provide a detailed custom quote based on your specific requirements and features.
                </p>
                ${r>0?`
                    <div style="padding-top: 1rem; border-top: 1px solid #e5e7eb;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="color: #6b7280;">
                                <strong>Domain Registration:</strong><br>
                                <span style="font-size: 0.875rem;">${window.selectedDomain}</span>
                            </span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${r.toFixed(2)}</strong>
                        </div>
                    </div>
                `:""}
            </div>
        `,o.style.display="block"):o.style.display="none"}window.removeDomainFromForm=function(){const s=document.getElementById("currentUrl");s&&(s.value=""),window.selectedDomain=null,window.domainPricing=null;const e=document.getElementById("domainInput");e&&(e.value="");const t=document.getElementById("domainResult");t&&(t.innerHTML=""),js()};window.handleContactSubmit=async function(s){s.preventDefault();const e=s.target,t=e.querySelector("#name")?.value.trim()||"",r=e.querySelector("#email")?.value.trim()||"",o=e.querySelector("#businessName")?.value.trim()||"",c=e.querySelector("#phone")?.value.trim()||"",l=e.querySelector("#package")?.value.trim()||"",_=e.querySelector("#timeline")?.value.trim()||"",v=e.querySelector("#currentUrl")?.value.trim()||"",I=e.querySelector("#referenceWebsite")?.value.trim()||"",S=e.querySelector("#mainGoal")?.value.trim()||"",T=e.querySelector("#mustHaveFeatures")?.value.trim()||"",C=xo(l),U=window.domainPricing?window.domainPricing.initialCost:0,D=C+U;if(C===0){Li("Please Select a Package","Please select a website package (Starter, Business, or Small Shop) before submitting.",!1);return}const L={name:t,email:r,businessName:o,phone:c,package:l,packagePrice:C,timeline:_,currentUrl:v,referenceWebsite:I,mainGoal:S,mustHaveFeatures:T,selectedDomain:window.selectedDomain||"N/A",domainPricing:window.domainPricing?{initialCost:window.domainPricing.initialCost,renewalCost:window.domainPricing.renewalCost}:null,totalCost:D,timestamp:new Date().toISOString(),status:"pending_payment"},A=document.getElementById("submitBtn"),B=A.textContent;A.textContent="Creating Payment Session...",A.disabled=!0;try{const x=await(await fetch("http://localhost:8080/create-payment-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(L)})).json();if(x.success&&x.sessionUrl)rd(L).catch(V=>{console.warn("⚠️ Google Script submission failed, but proceeding to payment:",V)}),window.location.href=x.sessionUrl;else throw new Error(x.error||"Failed to create payment session")}catch(x){console.error("Error creating payment session:",x),Li("Error","There was an error processing your request. Please try again or contact us at (415) 691-7085.",!1),A.textContent=B,A.disabled=!1}};document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("package");s&&s.addEventListener("change",js)});
