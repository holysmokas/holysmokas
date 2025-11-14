const Ca=()=>{};var Gr={};/**
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
*/const Wi=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?t[e++]=o:o<2048?(t[e++]=o>>6|192,t[e++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=o>>18|240,t[e++]=o>>12&63|128,t[e++]=o>>6&63|128,t[e++]=o&63|128):(t[e++]=o>>12|224,t[e++]=o>>6&63|128,t[e++]=o&63|128)}return t},Ra=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const o=n[e++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=n[e++];t[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=n[e++],h=n[e++],y=n[e++],v=((o&7)<<18|(c&63)<<12|(h&63)<<6|y&63)-65536;t[r++]=String.fromCharCode(55296+(v>>10)),t[r++]=String.fromCharCode(56320+(v&1023))}else{const c=n[e++],h=n[e++];t[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return t.join("")},zi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const c=n[o],h=o+1<n.length,y=h?n[o+1]:0,v=o+2<n.length,I=v?n[o+2]:0,S=c>>2,E=(c&3)<<4|y>>4;let R=(y&15)<<2|I>>6,U=I&63;v||(U=64,h||(R=64)),r.push(e[S],e[E],e[R],e[U])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Wi(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ra(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const c=e[n.charAt(o++)],h=o<n.length?e[n.charAt(o)]:0;++o;const y=o<n.length?e[n.charAt(o)]:64;++o;const v=o<n.length?e[n.charAt(o)]:64;if(++o,c==null||h==null||y==null||v==null)throw new Na;const I=c<<2|h>>4;if(r.push(I),y!==64){const S=h<<4&240|y>>2;if(r.push(S),v!==64){const E=y<<6&192|v;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Na extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pa=function(n){const t=Wi(n);return zi.encodeByteArray(t,!0)},ws=function(n){return Pa(n).replace(/\./g,"")},Gi=function(n){try{return zi.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
*/function Oa(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
*/const Da=()=>Oa().__FIREBASE_DEFAULTS__,La=()=>{if(typeof process>"u"||typeof Gr>"u")return;const n=Gr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ma=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Gi(n[1]);return t&&JSON.parse(t)},kn=()=>{try{return Ca()||Da()||La()||Ma()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},qi=n=>kn()?.emulatorHosts?.[n],Ki=n=>{const t=qi(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ji=()=>kn()?.config,Xi=n=>kn()?.[`_${n}`];/**
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
*/class Ua{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
*/function ye(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Cn(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
*/function Yi(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",o=n.iat||0,c=n.sub||n.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ws(JSON.stringify(e)),ws(JSON.stringify(h)),""].join(".")}const Ue={};function xa(){const n={prod:[],emulator:[]};for(const t of Object.keys(Ue))Ue[t]?n.emulator.push(t):n.prod.push(t);return n}function ja(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let qr=!1;function Rn(n,t){if(typeof window>"u"||typeof document>"u"||!ye(window.location.host)||Ue[n]===t||Ue[n]||qr)return;Ue[n]=t;function e(E){return`__firebase__banner__${E}`}const r="__firebase__banner",o=xa().prod.length>0;function c(){const E=document.getElementById(r);E&&E.remove()}function h(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function y(E,R){E.setAttribute("width","24"),E.setAttribute("id",R),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function v(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{qr=!0,c()},E}function I(E,R){E.setAttribute("id",R),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function S(){const E=ja(r),R=e("text"),U=document.getElementById(R)||document.createElement("span"),L=e("learnmore"),M=document.getElementById(L)||document.createElement("a"),C=e("preprendIcon"),B=document.getElementById(C)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const $=E.element;h($),I(M,L);const F=v();y(B,C),$.append(B,U,M,F),document.body.appendChild($)}o?(U.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,U.innerText="Preview backend running in this workspace."),U.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
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
*/function X(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(X())}function Va(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ba(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ha(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $a(){const n=X();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Wa(){try{return typeof indexedDB=="object"}catch{return!1}}function za(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{e=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(e){t(e)}})}/**
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
*/const Ga="FirebaseError";class _t extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Ga,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,We.prototype.create)}}class We{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},o=`${this.service}/${t}`,c=this.errors[t],h=c?qa(c,r):"Error",y=`${this.serviceName}: ${h} (${o}).`;return new _t(o,y,r)}}function qa(n,t){return n.replace(Ka,(e,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const Ka=/\{\$([^}]+)}/g;function Ja(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Qt(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const o of e){if(!r.includes(o))return!1;const c=n[o],h=t[o];if(Kr(c)&&Kr(h)){if(!Qt(c,h))return!1}else if(c!==h)return!1}for(const o of r)if(!e.includes(o))return!1;return!0}function Kr(n){return n!==null&&typeof n=="object"}/**
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
*/function ze(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Le(n){const t={};return n.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[r,o]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(o)}}),t}function Me(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Xa(n,t){const e=new Ya(n,t);return e.subscribe.bind(e)}class Ya{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let o;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Za(t,["next","error","complete"])?o=t:o={next:t,error:e,complete:r},o.next===void 0&&(o.next=cn),o.error===void 0&&(o.error=cn),o.complete===void 0&&(o.complete=cn);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Za(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function cn(){}/**
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
*/function st(n){return n&&n._delegate?n._delegate:n}class Bt{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
*/const Kt="[DEFAULT]";/**
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
*/class Qa{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ua;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:e});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ec(t))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(e);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(t=Kt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Kt){return this.instances.has(t)}getOptions(t=Kt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[c,h]of this.instancesDeferred.entries()){const y=this.normalizeInstanceIdentifier(c);r===y&&h.resolve(o)}return o}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),o=this.onInitCallbacks.get(r)??new Set;o.add(t),this.onInitCallbacks.set(r,o);const c=this.instances.get(r);return c&&t(c,r),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const o of r)try{o(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Kt){return this.component?this.component.multipleInstances?t:Kt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tc(n){return n===Kt?void 0:n}function ec(n){return n.instantiationMode==="EAGER"}/**
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
*/class sc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Qa(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
*/var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const nc={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},rc=D.INFO,ic={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},oc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),o=ic[t];if(o)console[o](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Nn{constructor(t){this.name=t,this._logLevel=rc,this._logHandler=oc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in D))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?nc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...t),this._logHandler(this,D.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...t),this._logHandler(this,D.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,D.INFO,...t),this._logHandler(this,D.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,D.WARN,...t),this._logHandler(this,D.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...t),this._logHandler(this,D.ERROR,...t)}}const ac=(n,t)=>t.some(e=>n instanceof e);let Jr,Xr;function cc(){return Jr||(Jr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hc(){return Xr||(Xr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zi=new WeakMap,_n=new WeakMap,Qi=new WeakMap,hn=new WeakMap,Pn=new WeakMap;function lc(n){const t=new Promise((e,r)=>{const o=()=>{n.removeEventListener("success",c),n.removeEventListener("error",h)},c=()=>{e(Ft(n.result)),o()},h=()=>{r(n.error),o()};n.addEventListener("success",c),n.addEventListener("error",h)});return t.then(e=>{e instanceof IDBCursor&&Zi.set(e,n)}).catch(()=>{}),Pn.set(t,n),t}function uc(n){if(_n.has(n))return;const t=new Promise((e,r)=>{const o=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",h),n.removeEventListener("abort",h)},c=()=>{e(),o()},h=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",c),n.addEventListener("error",h),n.addEventListener("abort",h)});_n.set(n,t)}let vn={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return _n.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Qi.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ft(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function dc(n){vn=n(vn)}function fc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ln(this),t,...e);return Qi.set(r,t.sort?t.sort():[t]),Ft(r)}:hc().includes(n)?function(...t){return n.apply(ln(this),t),Ft(Zi.get(this))}:function(...t){return Ft(n.apply(ln(this),t))}}function pc(n){return typeof n=="function"?fc(n):(n instanceof IDBTransaction&&uc(n),ac(n,cc())?new Proxy(n,vn):n)}function Ft(n){if(n instanceof IDBRequest)return lc(n);if(hn.has(n))return hn.get(n);const t=pc(n);return t!==n&&(hn.set(n,t),Pn.set(t,n)),t}const ln=n=>Pn.get(n);function gc(n,t,{blocked:e,upgrade:r,blocking:o,terminated:c}={}){const h=indexedDB.open(n,t),y=Ft(h);return r&&h.addEventListener("upgradeneeded",v=>{r(Ft(h.result),v.oldVersion,v.newVersion,Ft(h.transaction),v)}),e&&h.addEventListener("blocked",v=>e(v.oldVersion,v.newVersion,v)),y.then(v=>{c&&v.addEventListener("close",()=>c()),o&&v.addEventListener("versionchange",I=>o(I.oldVersion,I.newVersion,I))}).catch(()=>{}),y}const mc=["get","getKey","getAll","getAllKeys","count"],yc=["put","add","delete","clear"],un=new Map;function Yr(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(un.get(t))return un.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,o=yc.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(o||mc.includes(e)))return;const c=async function(h,...y){const v=this.transaction(h,o?"readwrite":"readonly");let I=v.store;return r&&(I=I.index(y.shift())),(await Promise.all([I[e](...y),o&&v.done]))[0]};return un.set(t,c),c}dc(n=>({...n,get:(t,e,r)=>Yr(t,e)||n.get(t,e,r),has:(t,e)=>!!Yr(t,e)||n.has(t,e)}));/**
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
*/class _c{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vc(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}else return null}).filter(t=>t).join(" ")}}function vc(n){return n.getComponent()?.type==="VERSION"}const wn="@firebase/app",Zr="0.14.4";/**
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
*/const St=new Nn("@firebase/app"),wc="@firebase/app-compat",bc="@firebase/analytics-compat",Ic="@firebase/analytics",Ec="@firebase/app-check-compat",Tc="@firebase/app-check",Sc="@firebase/auth",Ac="@firebase/auth-compat",kc="@firebase/database",Cc="@firebase/data-connect",Rc="@firebase/database-compat",Nc="@firebase/functions",Pc="@firebase/functions-compat",Oc="@firebase/installations",Dc="@firebase/installations-compat",Lc="@firebase/messaging",Mc="@firebase/messaging-compat",Uc="@firebase/performance",xc="@firebase/performance-compat",jc="@firebase/remote-config",Fc="@firebase/remote-config-compat",Vc="@firebase/storage",Bc="@firebase/storage-compat",Hc="@firebase/firestore",$c="@firebase/ai",Wc="@firebase/firestore-compat",zc="firebase",Gc="12.4.0";/**
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
*/const bn="[DEFAULT]",qc={[wn]:"fire-core",[wc]:"fire-core-compat",[Ic]:"fire-analytics",[bc]:"fire-analytics-compat",[Tc]:"fire-app-check",[Ec]:"fire-app-check-compat",[Sc]:"fire-auth",[Ac]:"fire-auth-compat",[kc]:"fire-rtdb",[Cc]:"fire-data-connect",[Rc]:"fire-rtdb-compat",[Nc]:"fire-fn",[Pc]:"fire-fn-compat",[Oc]:"fire-iid",[Dc]:"fire-iid-compat",[Lc]:"fire-fcm",[Mc]:"fire-fcm-compat",[Uc]:"fire-perf",[xc]:"fire-perf-compat",[jc]:"fire-rc",[Fc]:"fire-rc-compat",[Vc]:"fire-gcs",[Bc]:"fire-gcs-compat",[Hc]:"fire-fst",[Wc]:"fire-fst-compat",[$c]:"fire-vertex","fire-js":"fire-js",[zc]:"fire-js-all"};/**
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
*/const bs=new Map,Kc=new Map,In=new Map;function Qr(n,t){try{n.container.addComponent(t)}catch(e){St.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function te(n){const t=n.name;if(In.has(t))return St.debug(`There were multiple attempts to register component ${t}.`),!1;In.set(t,n);for(const e of bs.values())Qr(e,n);for(const e of Kc.values())Qr(e,n);return!0}function Os(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Q(n){return n==null?!1:n.settings!==void 0}/**
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
*/const Jc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vt=new We("app","Firebase",Jc);/**
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
*/class Xc{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
*/const re=Gc;function to(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:bn,automaticDataCollectionEnabled:!0,...t},o=r.name;if(typeof o!="string"||!o)throw Vt.create("bad-app-name",{appName:String(o)});if(e||(e=Ji()),!e)throw Vt.create("no-options");const c=bs.get(o);if(c){if(Qt(e,c.options)&&Qt(r,c.config))return c;throw Vt.create("duplicate-app",{appName:o})}const h=new sc(o);for(const v of In.values())h.addComponent(v);const y=new Xc(e,r,h);return bs.set(o,y),y}function On(n=bn){const t=bs.get(n);if(!t&&n===bn&&Ji())return to();if(!t)throw Vt.create("no-app",{appName:n});return t}function pt(n,t,e){let r=qc[n]??n;e&&(r+=`-${e}`);const o=r.match(/\s|\//),c=t.match(/\s|\//);if(o||c){const h=[`Unable to register library "${r}" with version "${t}":`];o&&h.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&c&&h.push("and"),c&&h.push(`version name "${t}" contains illegal characters (whitespace or "/")`),St.warn(h.join(" "));return}te(new Bt(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
*/const Yc="firebase-heartbeat-database",Zc=1,Be="firebase-heartbeat-store";let dn=null;function eo(){return dn||(dn=gc(Yc,Zc,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Be)}catch(e){console.warn(e)}}}}).catch(n=>{throw Vt.create("idb-open",{originalErrorMessage:n.message})})),dn}async function Qc(n){try{const t=(await eo()).transaction(Be),e=await t.objectStore(Be).get(so(n));return await t.done,e}catch(t){if(t instanceof _t)St.warn(t.message);else{const e=Vt.create("idb-get",{originalErrorMessage:t?.message});St.warn(e.message)}}}async function ti(n,t){try{const e=(await eo()).transaction(Be,"readwrite");await e.objectStore(Be).put(t,so(n)),await e.done}catch(e){if(e instanceof _t)St.warn(e.message);else{const r=Vt.create("idb-set",{originalErrorMessage:e?.message});St.warn(r.message)}}}function so(n){return`${n.name}!${n.options.appId}`}/**
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
*/const th=1024,eh=30;class sh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new rh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=ei();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===e||this._heartbeatsCache.heartbeats.some(r=>r.date===e))return;if(this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats.length>eh){const r=ih(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){St.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ei(),{heartbeatsToSend:e,unsentEntries:r}=nh(this._heartbeatsCache.heartbeats),o=ws(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return St.warn(t),""}}}function ei(){return new Date().toISOString().substring(0,10)}function nh(n,t=th){const e=[];let r=n.slice();for(const o of n){const c=e.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),si(e)>t){c.dates.pop();break}}else if(e.push({agent:o.agent,dates:[o.date]}),si(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class rh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wa()?za().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Qc(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const e=await this.read();return ti(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const e=await this.read();return ti(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:[...e.heartbeats,...t.heartbeats]})}else return}}function si(n){return ws(JSON.stringify({version:2,heartbeats:n})).length}function ih(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
*/function oh(n){te(new Bt("platform-logger",t=>new _c(t),"PRIVATE")),te(new Bt("heartbeat",t=>new sh(t),"PRIVATE")),pt(wn,Zr,n),pt(wn,Zr,"esm2020"),pt("fire-js","")}oh("");var ah="firebase",ch="12.4.0";/**
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
*/pt(ah,ch,"app");var ni=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dn;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(g,u){function f(){}f.prototype=u.prototype,g.F=u.prototype,g.prototype=new f,g.prototype.constructor=g,g.D=function(m,p,w){for(var d=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)d[Z-2]=arguments[Z];return u.prototype[p].apply(m,d)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(g,u,f){f||(f=0);const m=Array(16);if(typeof u=="string")for(var p=0;p<16;++p)m[p]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(p=0;p<16;++p)m[p]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=g.g[0],f=g.g[1],p=g.g[2];let w=g.g[3],d;d=u+(w^f&(p^w))+m[0]+3614090360&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+m[1]+3905402710&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+m[2]+606105819&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+m[3]+3250441966&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(w^f&(p^w))+m[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+m[5]+1200080426&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+m[6]+2821735955&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+m[7]+4249261313&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(w^f&(p^w))+m[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+m[9]+2336552879&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+m[10]+4294925233&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+m[11]+2304563134&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(w^f&(p^w))+m[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+m[13]+4254626195&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+m[14]+2792965006&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+m[15]+1236535329&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(p^w&(f^p))+m[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+m[6]+3225465664&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+m[11]+643717713&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+m[0]+3921069994&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^w&(f^p))+m[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+m[10]+38016083&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+m[15]+3634488961&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+m[4]+3889429448&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^w&(f^p))+m[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+m[14]+3275163606&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+m[3]+4107603335&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+m[8]+1163531501&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^w&(f^p))+m[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+m[2]+4243563512&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+m[7]+1735328473&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+m[12]+2368359562&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(f^p^w)+m[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+m[8]+2272392833&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+m[11]+1839030562&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+m[14]+4259657740&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^w)+m[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+m[4]+1272893353&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+m[7]+4139469664&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+m[10]+3200236656&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^w)+m[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+m[0]+3936430074&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+m[3]+3572445317&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+m[6]+76029189&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^w)+m[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+m[12]+3873151461&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+m[15]+530742520&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+m[2]+3299628645&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(p^(f|~w))+m[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+m[7]+1126891415&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+m[14]+2878612391&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+m[5]+4237533241&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~w))+m[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+m[3]+2399980690&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+m[10]+4293915773&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+m[1]+2240044497&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~w))+m[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+m[15]+4264355552&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+m[6]+2734768916&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+m[13]+1309151649&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~w))+m[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+m[11]+3174756917&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+m[2]+718787259&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+m[9]+3951481745&4294967295,g.g[0]=g.g[0]+u&4294967295,g.g[1]=g.g[1]+(p+(d<<21&4294967295|d>>>11))&4294967295,g.g[2]=g.g[2]+p&4294967295,g.g[3]=g.g[3]+w&4294967295}r.prototype.v=function(g,u){u===void 0&&(u=g.length);const f=u-this.blockSize,m=this.C;let p=this.h,w=0;for(;w<u;){if(p==0)for(;w<=f;)o(this,g,w),w+=this.blockSize;if(typeof g=="string"){for(;w<u;)if(m[p++]=g.charCodeAt(w++),p==this.blockSize){o(this,m),p=0;break}}else for(;w<u;)if(m[p++]=g[w++],p==this.blockSize){o(this,m),p=0;break}}this.h=p,this.o+=u},r.prototype.A=function(){var g=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);g[0]=128;for(var u=1;u<g.length-8;++u)g[u]=0;u=this.o*8;for(var f=g.length-8;f<g.length;++f)g[f]=u&255,u/=256;for(this.v(g),g=Array(16),u=0,f=0;f<4;++f)for(let m=0;m<32;m+=8)g[u++]=this.g[f]>>>m&255;return g};function c(g,u){var f=y;return Object.prototype.hasOwnProperty.call(f,g)?f[g]:f[g]=u(g)}function h(g,u){this.h=u;const f=[];let m=!0;for(let p=g.length-1;p>=0;p--){const w=g[p]|0;m&&w==u||(f[p]=w,m=!1)}this.g=f}var y={};function v(g){return-128<=g&&g<128?c(g,function(u){return new h([u|0],u<0?-1:0)}):new h([g|0],g<0?-1:0)}function I(g){if(isNaN(g)||!isFinite(g))return E;if(g<0)return C(I(-g));const u=[];let f=1;for(let m=0;g>=f;m++)u[m]=g/f|0,f*=4294967296;return new h(u,0)}function S(g,u){if(g.length==0)throw Error("number format error: empty string");if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(g.charAt(0)=="-")return C(S(g.substring(1),u));if(g.indexOf("-")>=0)throw Error('number format error: interior "-" character');const f=I(Math.pow(u,8));let m=E;for(let w=0;w<g.length;w+=8){var p=Math.min(8,g.length-w);const d=parseInt(g.substring(w,w+p),u);p<8?(p=I(Math.pow(u,p)),m=m.j(p).add(I(d))):(m=m.j(f),m=m.add(I(d)))}return m}var E=v(0),R=v(1),U=v(16777216);n=h.prototype,n.m=function(){if(M(this))return-C(this).m();let g=0,u=1;for(let f=0;f<this.g.length;f++){const m=this.i(f);g+=(m>=0?m:4294967296+m)*u,u*=4294967296}return g},n.toString=function(g){if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(L(this))return"0";if(M(this))return"-"+C(this).toString(g);const u=I(Math.pow(g,6));var f=this;let m="";for(;;){const p=nt(f,u).g;f=B(f,p.j(u));let w=((f.g.length>0?f.g[0]:f.h)>>>0).toString(g);if(f=p,L(f))return w+m;for(;w.length<6;)w="0"+w;m=w+m}},n.i=function(g){return g<0?0:g<this.g.length?this.g[g]:this.h};function L(g){if(g.h!=0)return!1;for(let u=0;u<g.g.length;u++)if(g.g[u]!=0)return!1;return!0}function M(g){return g.h==-1}n.l=function(g){return g=B(this,g),M(g)?-1:L(g)?0:1};function C(g){const u=g.g.length,f=[];for(let m=0;m<u;m++)f[m]=~g.g[m];return new h(f,~g.h).add(R)}n.abs=function(){return M(this)?C(this):this},n.add=function(g){const u=Math.max(this.g.length,g.g.length),f=[];let m=0;for(let p=0;p<=u;p++){let w=m+(this.i(p)&65535)+(g.i(p)&65535),d=(w>>>16)+(this.i(p)>>>16)+(g.i(p)>>>16);m=d>>>16,w&=65535,d&=65535,f[p]=d<<16|w}return new h(f,f[f.length-1]&-2147483648?-1:0)};function B(g,u){return g.add(C(u))}n.j=function(g){if(L(this)||L(g))return E;if(M(this))return M(g)?C(this).j(C(g)):C(C(this).j(g));if(M(g))return C(this.j(C(g)));if(this.l(U)<0&&g.l(U)<0)return I(this.m()*g.m());const u=this.g.length+g.g.length,f=[];for(var m=0;m<2*u;m++)f[m]=0;for(m=0;m<this.g.length;m++)for(let p=0;p<g.g.length;p++){const w=this.i(m)>>>16,d=this.i(m)&65535,Z=g.i(p)>>>16,Wt=g.i(p)&65535;f[2*m+2*p]+=d*Wt,$(f,2*m+2*p),f[2*m+2*p+1]+=w*Wt,$(f,2*m+2*p+1),f[2*m+2*p+1]+=d*Z,$(f,2*m+2*p+1),f[2*m+2*p+2]+=w*Z,$(f,2*m+2*p+2)}for(g=0;g<u;g++)f[g]=f[2*g+1]<<16|f[2*g];for(g=u;g<2*u;g++)f[g]=0;return new h(f,0)};function $(g,u){for(;(g[u]&65535)!=g[u];)g[u+1]+=g[u]>>>16,g[u]&=65535,u++}function F(g,u){this.g=g,this.h=u}function nt(g,u){if(L(u))throw Error("division by zero");if(L(g))return new F(E,E);if(M(g))return u=nt(C(g),u),new F(C(u.g),C(u.h));if(M(u))return u=nt(g,C(u)),new F(C(u.g),u.h);if(g.g.length>30){if(M(g)||M(u))throw Error("slowDivide_ only works with positive integers.");for(var f=R,m=u;m.l(g)<=0;)f=tt(f),m=tt(m);var p=Y(f,1),w=Y(m,1);for(m=Y(m,2),f=Y(f,2);!L(m);){var d=w.add(m);d.l(g)<=0&&(p=p.add(f),w=d),m=Y(m,1),f=Y(f,1)}return u=B(g,p.j(u)),new F(p,u)}for(p=E;g.l(u)>=0;){for(f=Math.max(1,Math.floor(g.m()/u.m())),m=Math.ceil(Math.log(f)/Math.LN2),m=m<=48?1:Math.pow(2,m-48),w=I(f),d=w.j(u);M(d)||d.l(g)>0;)f-=m,w=I(f),d=w.j(u);L(w)&&(w=R),p=p.add(w),g=B(g,d)}return new F(p,g)}n.B=function(g){return nt(this,g).h},n.and=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let m=0;m<u;m++)f[m]=this.i(m)&g.i(m);return new h(f,this.h&g.h)},n.or=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let m=0;m<u;m++)f[m]=this.i(m)|g.i(m);return new h(f,this.h|g.h)},n.xor=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let m=0;m<u;m++)f[m]=this.i(m)^g.i(m);return new h(f,this.h^g.h)};function tt(g){const u=g.g.length+1,f=[];for(let m=0;m<u;m++)f[m]=g.i(m)<<1|g.i(m-1)>>>31;return new h(f,g.h)}function Y(g,u){const f=u>>5;u%=32;const m=g.g.length-f,p=[];for(let w=0;w<m;w++)p[w]=u>0?g.i(w+f)>>>u|g.i(w+f+1)<<32-u:g.i(w+f);return new h(p,g.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=I,h.fromString=S,Dn=h}).apply(typeof ni<"u"?ni:typeof self<"u"?self:typeof window<"u"?window:{});var us=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof us=="object"&&us];for(var i=0;i<s.length;++i){var a=s[i];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=e(this);function o(s,i){if(i)t:{var a=r;s=s.split(".");for(var l=0;l<s.length-1;l++){var _=s[l];if(!(_ in a))break t;a=a[_]}s=s[s.length-1],l=a[s],i=i(l),i!=l&&i!=null&&t(a,s,{configurable:!0,writable:!0,value:i})}}o("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(s){return s||function(i){var a=[],l;for(l in i)Object.prototype.hasOwnProperty.call(i,l)&&a.push([l,i[l]]);return a}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},h=this||self;function y(s){var i=typeof s;return i=="object"&&s!=null||i=="function"}function v(s,i,a){return s.call.apply(s.bind,arguments)}function I(s,i,a){return I=v,I.apply(null,arguments)}function S(s,i){var a=Array.prototype.slice.call(arguments,1);return function(){var l=a.slice();return l.push.apply(l,arguments),s.apply(this,l)}}function E(s,i){function a(){}a.prototype=i.prototype,s.Z=i.prototype,s.prototype=new a,s.prototype.constructor=s,s.Ob=function(l,_,b){for(var T=Array(arguments.length-2),k=2;k<arguments.length;k++)T[k-2]=arguments[k];return i.prototype[_].apply(l,T)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function U(s){const i=s.length;if(i>0){const a=Array(i);for(let l=0;l<i;l++)a[l]=s[l];return a}return[]}function L(s,i){for(let l=1;l<arguments.length;l++){const _=arguments[l];var a=typeof _;if(a=a!="object"?a:_?Array.isArray(_)?"array":a:"null",a=="array"||a=="object"&&typeof _.length=="number"){a=s.length||0;const b=_.length||0;s.length=a+b;for(let T=0;T<b;T++)s[a+T]=_[T]}else s.push(_)}}class M{constructor(i,a){this.i=i,this.j=a,this.h=0,this.g=null}get(){let i;return this.h>0?(this.h--,i=this.g,this.g=i.next,i.next=null):i=this.i(),i}}function C(s){h.setTimeout(()=>{throw s},0)}function B(){var s=g;let i=null;return s.g&&(i=s.g,s.g=s.g.next,s.g||(s.h=null),i.next=null),i}class ${constructor(){this.h=this.g=null}add(i,a){const l=F.get();l.set(i,a),this.h?this.h.next=l:this.g=l,this.h=l}}var F=new M(()=>new nt,s=>s.reset());class nt{constructor(){this.next=this.g=this.h=null}set(i,a){this.h=i,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,Y=!1,g=new $,u=()=>{const s=Promise.resolve(void 0);tt=()=>{s.then(f)}};function f(){for(var s;s=B();){try{s.h.call(s.g)}catch(a){C(a)}var i=F;i.j(s),i.h<100&&(i.h++,s.next=i.g,i.g=s)}Y=!1}function m(){this.u=this.u,this.C=this.C}m.prototype.u=!1,m.prototype.dispose=function(){this.u||(this.u=!0,this.N())},m.prototype[Symbol.dispose]=function(){this.dispose()},m.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function p(s,i){this.type=s,this.g=this.target=i,this.defaultPrevented=!1}p.prototype.h=function(){this.defaultPrevented=!0};var w=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var s=!1,i=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const a=()=>{};h.addEventListener("test",a,i),h.removeEventListener("test",a,i)}catch{}return s})();function d(s){return/^[\s\xa0]*$/.test(s)}function Z(s,i){p.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,i)}E(Z,p),Z.prototype.init=function(s,i){const a=this.type=s.type,l=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=i,i=s.relatedTarget,i||(a=="mouseover"?i=s.fromElement:a=="mouseout"&&(i=s.toElement)),this.relatedTarget=i,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&Z.Z.h.call(this)},Z.prototype.h=function(){Z.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Wt="closure_listenable_"+(Math.random()*1e6|0),Xo=0;function Yo(s,i,a,l,_){this.listener=s,this.proxy=null,this.src=i,this.type=a,this.capture=!!l,this.ha=_,this.key=++Xo,this.da=this.fa=!1}function Ze(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Qe(s,i,a){for(const l in s)i.call(a,s[l],l,s)}function Zo(s,i){for(const a in s)i.call(void 0,s[a],a,s)}function qn(s){const i={};for(const a in s)i[a]=s[a];return i}const Kn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Jn(s,i){let a,l;for(let _=1;_<arguments.length;_++){l=arguments[_];for(a in l)s[a]=l[a];for(let b=0;b<Kn.length;b++)a=Kn[b],Object.prototype.hasOwnProperty.call(l,a)&&(s[a]=l[a])}}function ts(s){this.src=s,this.g={},this.h=0}ts.prototype.add=function(s,i,a,l,_){const b=s.toString();s=this.g[b],s||(s=this.g[b]=[],this.h++);const T=xs(s,i,l,_);return T>-1?(i=s[T],a||(i.fa=!1)):(i=new Yo(i,this.src,b,!!l,_),i.fa=a,s.push(i)),i};function Us(s,i){const a=i.type;if(a in s.g){var l=s.g[a],_=Array.prototype.indexOf.call(l,i,void 0),b;(b=_>=0)&&Array.prototype.splice.call(l,_,1),b&&(Ze(i),s.g[a].length==0&&(delete s.g[a],s.h--))}}function xs(s,i,a,l){for(let _=0;_<s.length;++_){const b=s[_];if(!b.da&&b.listener==i&&b.capture==!!a&&b.ha==l)return _}return-1}var js="closure_lm_"+(Math.random()*1e6|0),Fs={};function Xn(s,i,a,l,_){if(Array.isArray(i)){for(let b=0;b<i.length;b++)Xn(s,i[b],a,l,_);return null}return a=Qn(a),s&&s[Wt]?s.J(i,a,y(l)?!!l.capture:!1,_):Qo(s,i,a,!1,l,_)}function Qo(s,i,a,l,_,b){if(!i)throw Error("Invalid event type");const T=y(_)?!!_.capture:!!_;let k=Bs(s);if(k||(s[js]=k=new ts(s)),a=k.add(i,a,l,T,b),a.proxy)return a;if(l=ta(),a.proxy=l,l.src=s,l.listener=a,s.addEventListener)w||(_=T),_===void 0&&(_=!1),s.addEventListener(i.toString(),l,_);else if(s.attachEvent)s.attachEvent(Zn(i.toString()),l);else if(s.addListener&&s.removeListener)s.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return a}function ta(){function s(a){return i.call(s.src,s.listener,a)}const i=ea;return s}function Yn(s,i,a,l,_){if(Array.isArray(i))for(var b=0;b<i.length;b++)Yn(s,i[b],a,l,_);else l=y(l)?!!l.capture:!!l,a=Qn(a),s&&s[Wt]?(s=s.i,b=String(i).toString(),b in s.g&&(i=s.g[b],a=xs(i,a,l,_),a>-1&&(Ze(i[a]),Array.prototype.splice.call(i,a,1),i.length==0&&(delete s.g[b],s.h--)))):s&&(s=Bs(s))&&(i=s.g[i.toString()],s=-1,i&&(s=xs(i,a,l,_)),(a=s>-1?i[s]:null)&&Vs(a))}function Vs(s){if(typeof s!="number"&&s&&!s.da){var i=s.src;if(i&&i[Wt])Us(i.i,s);else{var a=s.type,l=s.proxy;i.removeEventListener?i.removeEventListener(a,l,s.capture):i.detachEvent?i.detachEvent(Zn(a),l):i.addListener&&i.removeListener&&i.removeListener(l),(a=Bs(i))?(Us(a,s),a.h==0&&(a.src=null,i[js]=null)):Ze(s)}}}function Zn(s){return s in Fs?Fs[s]:Fs[s]="on"+s}function ea(s,i){if(s.da)s=!0;else{i=new Z(i,this);const a=s.listener,l=s.ha||s.src;s.fa&&Vs(s),s=a.call(l,i)}return s}function Bs(s){return s=s[js],s instanceof ts?s:null}var Hs="__closure_events_fn_"+(Math.random()*1e9>>>0);function Qn(s){return typeof s=="function"?s:(s[Hs]||(s[Hs]=function(i){return s.handleEvent(i)}),s[Hs])}function G(){m.call(this),this.i=new ts(this),this.M=this,this.G=null}E(G,m),G.prototype[Wt]=!0,G.prototype.removeEventListener=function(s,i,a,l){Yn(this,s,i,a,l)};function q(s,i){var a,l=s.G;if(l)for(a=[];l;l=l.G)a.push(l);if(s=s.M,l=i.type||i,typeof i=="string")i=new p(i,s);else if(i instanceof p)i.target=i.target||s;else{var _=i;i=new p(l,s),Jn(i,_)}_=!0;let b,T;if(a)for(T=a.length-1;T>=0;T--)b=i.g=a[T],_=es(b,l,!0,i)&&_;if(b=i.g=s,_=es(b,l,!0,i)&&_,_=es(b,l,!1,i)&&_,a)for(T=0;T<a.length;T++)b=i.g=a[T],_=es(b,l,!1,i)&&_}G.prototype.N=function(){if(G.Z.N.call(this),this.i){var s=this.i;for(const i in s.g){const a=s.g[i];for(let l=0;l<a.length;l++)Ze(a[l]);delete s.g[i],s.h--}}this.G=null},G.prototype.J=function(s,i,a,l){return this.i.add(String(s),i,!1,a,l)},G.prototype.K=function(s,i,a,l){return this.i.add(String(s),i,!0,a,l)};function es(s,i,a,l){if(i=s.i.g[String(i)],!i)return!0;i=i.concat();let _=!0;for(let b=0;b<i.length;++b){const T=i[b];if(T&&!T.da&&T.capture==a){const k=T.listener,W=T.ha||T.src;T.fa&&Us(s.i,T),_=k.call(W,l)!==!1&&_}}return _&&!l.defaultPrevented}function sa(s,i){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=I(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(i)>2147483647?-1:h.setTimeout(s,i||0)}function tr(s){s.g=sa(()=>{s.g=null,s.i&&(s.i=!1,tr(s))},s.l);const i=s.h;s.h=null,s.m.apply(null,i)}class na extends m{constructor(i,a){super(),this.m=i,this.l=a,this.h=null,this.i=!1,this.g=null}j(i){this.h=arguments,this.g?this.i=!0:tr(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ve(s){m.call(this),this.h=s,this.g={}}E(ve,m);var er=[];function sr(s){Qe(s.g,function(i,a){this.g.hasOwnProperty(a)&&Vs(i)},s),s.g={}}ve.prototype.N=function(){ve.Z.N.call(this),sr(this)},ve.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $s=h.JSON.stringify,ra=h.JSON.parse,ia=class{stringify(s){return h.JSON.stringify(s,void 0)}parse(s){return h.JSON.parse(s,void 0)}};function nr(){}var ss={OPEN:"a",ERROR:"c"};function Ws(){p.call(this,"d")}E(Ws,p);function zs(){p.call(this,"c")}E(zs,p);var ie={},rr=null;function Gs(){return rr=rr||new G}ie.Ia="serverreachability";function ir(s){p.call(this,ie.Ia,s)}E(ir,p);function we(s){const i=Gs();q(i,new ir(i))}ie.STAT_EVENT="statevent";function or(s,i){p.call(this,ie.STAT_EVENT,s),this.stat=i}E(or,p);function K(s){const i=Gs();q(i,new or(i,s))}ie.Ja="timingevent";function ar(s,i){p.call(this,ie.Ja,s),this.size=i}E(ar,p);function be(s,i){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){s()},i)}function Ie(){this.g=!0}Ie.prototype.ua=function(){this.g=!1};function oa(s,i,a,l,_,b){s.info(function(){if(s.g)if(b){var T="",k=b.split("&");for(let j=0;j<k.length;j++){var W=k[j].split("=");if(W.length>1){const z=W[0];W=W[1];const lt=z.split("_");T=lt.length>=2&&lt[1]=="type"?T+(z+"="+W+"&"):T+(z+"=redacted&")}}}else T=null;else T=b;return"XMLHTTP REQ ("+l+") [attempt "+_+"]: "+i+`
`+a+`
`+T})}function aa(s,i,a,l,_,b,T){s.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+_+"]: "+i+`
`+a+`
`+b+" "+T})}function oe(s,i,a,l){s.info(function(){return"XMLHTTP TEXT ("+i+"): "+ha(s,a)+(l?" "+l:"")})}function ca(s,i){s.info(function(){return"TIMEOUT: "+i})}Ie.prototype.info=function(){};function ha(s,i){if(!s.g)return i;if(!i)return null;try{const b=JSON.parse(i);if(b){for(s=0;s<b.length;s++)if(Array.isArray(b[s])){var a=b[s];if(!(a.length<2)){var l=a[1];if(Array.isArray(l)&&!(l.length<1)){var _=l[0];if(_!="noop"&&_!="stop"&&_!="close")for(let T=1;T<l.length;T++)l[T]=""}}}}return $s(b)}catch{return i}}var cr;function qs(){}E(qs,nr),qs.prototype.g=function(){return new XMLHttpRequest},cr=new qs;function Ee(s){return encodeURIComponent(String(s))}function la(s){var i=1;s=s.split(":");const a=[];for(;i>0&&s.length;)a.push(s.shift()),i--;return s.length&&a.push(s.join(":")),a}function Ct(s,i,a,l){this.j=s,this.i=i,this.l=a,this.S=l||1,this.V=new ve(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new hr}function hr(){this.i=null,this.g="",this.h=!1}var lr={},Ks={};function Js(s,i,a){s.M=1,s.A=rs(ht(i)),s.u=a,s.R=!0,ur(s,null)}function ur(s,i){s.F=Date.now(),ns(s),s.B=ht(s.A);var a=s.B,l=s.S;Array.isArray(l)||(l=[String(l)]),Tr(a.i,"t",l),s.C=0,a=s.j.L,s.h=new hr,s.g=Hr(s.j,a?i:null,!s.u),s.P>0&&(s.O=new na(I(s.Y,s,s.g),s.P)),i=s.V,a=s.g,l=s.ba;var _="readystatechange";Array.isArray(_)||(_&&(er[0]=_.toString()),_=er);for(let b=0;b<_.length;b++){const T=Xn(a,_[b],l||i.handleEvent,!1,i.h||i);if(!T)break;i.g[T.key]=T}i=s.J?qn(s.J):{},s.u?(s.v||(s.v="POST"),i["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,i)):(s.v="GET",s.g.ea(s.B,s.v,null,i)),we(),oa(s.i,s.v,s.B,s.l,s.S,s.u)}Ct.prototype.ba=function(s){s=s.target;const i=this.O;i&&Pt(s)==3?i.j():this.Y(s)},Ct.prototype.Y=function(s){try{if(s==this.g)t:{const k=Pt(this.g),W=this.g.ya(),j=this.g.ca();if(!(k<3)&&(k!=3||this.g&&(this.h.h||this.g.la()||Pr(this.g)))){this.K||k!=4||W==7||(W==8||j<=0?we(3):we(2)),Xs(this);var i=this.g.ca();this.X=i;var a=ua(this);if(this.o=i==200,aa(this.i,this.v,this.B,this.l,this.S,k,i),this.o){if(this.U&&!this.L){e:{if(this.g){var l,_=this.g;if((l=_.g?_.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!d(l)){var b=l;break e}}b=null}if(s=b)oe(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ys(this,s);else{this.o=!1,this.m=3,K(12),zt(this),Te(this);break t}}if(this.R){s=!0;let z;for(;!this.K&&this.C<a.length;)if(z=da(this,a),z==Ks){k==4&&(this.m=4,K(14),s=!1),oe(this.i,this.l,null,"[Incomplete Response]");break}else if(z==lr){this.m=4,K(15),oe(this.i,this.l,a,"[Invalid Chunk]"),s=!1;break}else oe(this.i,this.l,z,null),Ys(this,z);if(dr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),k!=4||a.length!=0||this.h.h||(this.m=1,K(16),s=!1),this.o=this.o&&s,!s)oe(this.i,this.l,a,"[Invalid Chunked Response]"),zt(this),Te(this);else if(a.length>0&&!this.W){this.W=!0;var T=this.j;T.g==this&&T.aa&&!T.P&&(T.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),on(T),T.P=!0,K(11))}}else oe(this.i,this.l,a,null),Ys(this,a);k==4&&zt(this),this.o&&!this.K&&(k==4?jr(this.j,this):(this.o=!1,ns(this)))}else Aa(this.g),i==400&&a.indexOf("Unknown SID")>0?(this.m=3,K(12)):(this.m=0,K(13)),zt(this),Te(this)}}}catch{}finally{}};function ua(s){if(!dr(s))return s.g.la();const i=Pr(s.g);if(i==="")return"";let a="";const l=i.length,_=Pt(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return zt(s),Te(s),"";s.h.i=new h.TextDecoder}for(let b=0;b<l;b++)s.h.h=!0,a+=s.h.i.decode(i[b],{stream:!(_&&b==l-1)});return i.length=0,s.h.g+=a,s.C=0,s.h.g}function dr(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function da(s,i){var a=s.C,l=i.indexOf(`
`,a);return l==-1?Ks:(a=Number(i.substring(a,l)),isNaN(a)?lr:(l+=1,l+a>i.length?Ks:(i=i.slice(l,l+a),s.C=l+a,i)))}Ct.prototype.cancel=function(){this.K=!0,zt(this)};function ns(s){s.T=Date.now()+s.H,fr(s,s.H)}function fr(s,i){if(s.D!=null)throw Error("WatchDog timer not null");s.D=be(I(s.aa,s),i)}function Xs(s){s.D&&(h.clearTimeout(s.D),s.D=null)}Ct.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(ca(this.i,this.B),this.M!=2&&(we(),K(17)),zt(this),this.m=2,Te(this)):fr(this,this.T-s)};function Te(s){s.j.I==0||s.K||jr(s.j,s)}function zt(s){Xs(s);var i=s.O;i&&typeof i.dispose=="function"&&i.dispose(),s.O=null,sr(s.V),s.g&&(i=s.g,s.g=null,i.abort(),i.dispose())}function Ys(s,i){try{var a=s.j;if(a.I!=0&&(a.g==s||Zs(a.h,s))){if(!s.L&&Zs(a.h,s)&&a.I==3){try{var l=a.Ba.g.parse(i)}catch{l=null}if(Array.isArray(l)&&l.length==3){var _=l;if(_[0]==0){t:if(!a.v){if(a.g)if(a.g.F+3e3<s.F)hs(a),as(a);else break t;rn(a),K(18)}}else a.xa=_[1],0<a.xa-a.K&&_[2]<37500&&a.F&&a.A==0&&!a.C&&(a.C=be(I(a.Va,a),6e3));mr(a.h)<=1&&a.ta&&(a.ta=void 0)}else qt(a,11)}else if((s.L||a.g==s)&&hs(a),!d(i))for(_=a.Ba.g.parse(i),i=0;i<_.length;i++){let j=_[i];const z=j[0];if(!(z<=a.K))if(a.K=z,j=j[1],a.I==2)if(j[0]=="c"){a.M=j[1],a.ba=j[2];const lt=j[3];lt!=null&&(a.ka=lt,a.j.info("VER="+a.ka));const he=j[4];he!=null&&(a.za=he,a.j.info("SVER="+a.za));const Ot=j[5];Ot!=null&&typeof Ot=="number"&&Ot>0&&(l=1.5*Ot,a.O=l,a.j.info("backChannelRequestTimeoutMs_="+l)),l=a;const Dt=s.g;if(Dt){const ls=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ls){var b=l.h;b.g||ls.indexOf("spdy")==-1&&ls.indexOf("quic")==-1&&ls.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Qs(b,b.h),b.h=null))}if(l.G){const an=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;an&&(l.wa=an,x(l.J,l.G,an))}}a.I=3,a.l&&a.l.ra(),a.aa&&(a.T=Date.now()-s.F,a.j.info("Handshake RTT: "+a.T+"ms")),l=a;var T=s;if(l.na=Br(l,l.L?l.ba:null,l.W),T.L){yr(l.h,T);var k=T,W=l.O;W&&(k.H=W),k.D&&(Xs(k),ns(k)),l.g=T}else Ur(l);a.i.length>0&&cs(a)}else j[0]!="stop"&&j[0]!="close"||qt(a,7);else a.I==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?qt(a,7):nn(a):j[0]!="noop"&&a.l&&a.l.qa(j),a.A=0)}}we(4)}catch{}}var fa=class{constructor(s,i){this.g=s,this.map=i}};function pr(s){this.l=s||10,h.PerformanceNavigationTiming?(s=h.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function gr(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function mr(s){return s.h?1:s.g?s.g.size:0}function Zs(s,i){return s.h?s.h==i:s.g?s.g.has(i):!1}function Qs(s,i){s.g?s.g.add(i):s.h=i}function yr(s,i){s.h&&s.h==i?s.h=null:s.g&&s.g.has(i)&&s.g.delete(i)}pr.prototype.cancel=function(){if(this.i=_r(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function _r(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let i=s.i;for(const a of s.g.values())i=i.concat(a.G);return i}return U(s.i)}var vr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pa(s,i){if(s){s=s.split("&");for(let a=0;a<s.length;a++){const l=s[a].indexOf("=");let _,b=null;l>=0?(_=s[a].substring(0,l),b=s[a].substring(l+1)):_=s[a],i(_,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Rt(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let i;s instanceof Rt?(this.l=s.l,Se(this,s.j),this.o=s.o,this.g=s.g,Ae(this,s.u),this.h=s.h,tn(this,Sr(s.i)),this.m=s.m):s&&(i=String(s).match(vr))?(this.l=!1,Se(this,i[1]||"",!0),this.o=ke(i[2]||""),this.g=ke(i[3]||"",!0),Ae(this,i[4]),this.h=ke(i[5]||"",!0),tn(this,i[6]||"",!0),this.m=ke(i[7]||"")):(this.l=!1,this.i=new Re(null,this.l))}Rt.prototype.toString=function(){const s=[];var i=this.j;i&&s.push(Ce(i,wr,!0),":");var a=this.g;return(a||i=="file")&&(s.push("//"),(i=this.o)&&s.push(Ce(i,wr,!0),"@"),s.push(Ee(a).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.u,a!=null&&s.push(":",String(a))),(a=this.h)&&(this.g&&a.charAt(0)!="/"&&s.push("/"),s.push(Ce(a,a.charAt(0)=="/"?ya:ma,!0))),(a=this.i.toString())&&s.push("?",a),(a=this.m)&&s.push("#",Ce(a,va)),s.join("")},Rt.prototype.resolve=function(s){const i=ht(this);let a=!!s.j;a?Se(i,s.j):a=!!s.o,a?i.o=s.o:a=!!s.g,a?i.g=s.g:a=s.u!=null;var l=s.h;if(a)Ae(i,s.u);else if(a=!!s.h){if(l.charAt(0)!="/")if(this.g&&!this.h)l="/"+l;else{var _=i.h.lastIndexOf("/");_!=-1&&(l=i.h.slice(0,_+1)+l)}if(_=l,_==".."||_==".")l="";else if(_.indexOf("./")!=-1||_.indexOf("/.")!=-1){l=_.lastIndexOf("/",0)==0,_=_.split("/");const b=[];for(let T=0;T<_.length;){const k=_[T++];k=="."?l&&T==_.length&&b.push(""):k==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),l&&T==_.length&&b.push("")):(b.push(k),l=!0)}l=b.join("/")}else l=_}return a?i.h=l:a=s.i.toString()!=="",a?tn(i,Sr(s.i)):a=!!s.m,a&&(i.m=s.m),i};function ht(s){return new Rt(s)}function Se(s,i,a){s.j=a?ke(i,!0):i,s.j&&(s.j=s.j.replace(/:$/,""))}function Ae(s,i){if(i){if(i=Number(i),isNaN(i)||i<0)throw Error("Bad port number "+i);s.u=i}else s.u=null}function tn(s,i,a){i instanceof Re?(s.i=i,wa(s.i,s.l)):(a||(i=Ce(i,_a)),s.i=new Re(i,s.l))}function x(s,i,a){s.i.set(i,a)}function rs(s){return x(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function ke(s,i){return s?i?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ce(s,i,a){return typeof s=="string"?(s=encodeURI(s).replace(i,ga),a&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function ga(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var wr=/[#\/\?@]/g,ma=/[#\?:]/g,ya=/[#\?]/g,_a=/[#\?@]/g,va=/#/g;function Re(s,i){this.h=this.g=null,this.i=s||null,this.j=!!i}function Gt(s){s.g||(s.g=new Map,s.h=0,s.i&&pa(s.i,function(i,a){s.add(decodeURIComponent(i.replace(/\+/g," ")),a)}))}n=Re.prototype,n.add=function(s,i){Gt(this),this.i=null,s=ae(this,s);let a=this.g.get(s);return a||this.g.set(s,a=[]),a.push(i),this.h+=1,this};function br(s,i){Gt(s),i=ae(s,i),s.g.has(i)&&(s.i=null,s.h-=s.g.get(i).length,s.g.delete(i))}function Ir(s,i){return Gt(s),i=ae(s,i),s.g.has(i)}n.forEach=function(s,i){Gt(this),this.g.forEach(function(a,l){a.forEach(function(_){s.call(i,_,l,this)},this)},this)};function Er(s,i){Gt(s);let a=[];if(typeof i=="string")Ir(s,i)&&(a=a.concat(s.g.get(ae(s,i))));else for(s=Array.from(s.g.values()),i=0;i<s.length;i++)a=a.concat(s[i]);return a}n.set=function(s,i){return Gt(this),this.i=null,s=ae(this,s),Ir(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[i]),this.h+=1,this},n.get=function(s,i){return s?(s=Er(this,s),s.length>0?String(s[0]):i):i};function Tr(s,i,a){br(s,i),a.length>0&&(s.i=null,s.g.set(ae(s,i),U(a)),s.h+=a.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],i=Array.from(this.g.keys());for(let l=0;l<i.length;l++){var a=i[l];const _=Ee(a);a=Er(this,a);for(let b=0;b<a.length;b++){let T=_;a[b]!==""&&(T+="="+Ee(a[b])),s.push(T)}}return this.i=s.join("&")};function Sr(s){const i=new Re;return i.i=s.i,s.g&&(i.g=new Map(s.g),i.h=s.h),i}function ae(s,i){return i=String(i),s.j&&(i=i.toLowerCase()),i}function wa(s,i){i&&!s.j&&(Gt(s),s.i=null,s.g.forEach(function(a,l){const _=l.toLowerCase();l!=_&&(br(this,l),Tr(this,_,a))},s)),s.j=i}function ba(s,i){const a=new Ie;if(h.Image){const l=new Image;l.onload=S(Nt,a,"TestLoadImage: loaded",!0,i,l),l.onerror=S(Nt,a,"TestLoadImage: error",!1,i,l),l.onabort=S(Nt,a,"TestLoadImage: abort",!1,i,l),l.ontimeout=S(Nt,a,"TestLoadImage: timeout",!1,i,l),h.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=s}else i(!1)}function Ia(s,i){const a=new Ie,l=new AbortController,_=setTimeout(()=>{l.abort(),Nt(a,"TestPingServer: timeout",!1,i)},1e4);fetch(s,{signal:l.signal}).then(b=>{clearTimeout(_),b.ok?Nt(a,"TestPingServer: ok",!0,i):Nt(a,"TestPingServer: server error",!1,i)}).catch(()=>{clearTimeout(_),Nt(a,"TestPingServer: error",!1,i)})}function Nt(s,i,a,l,_){try{_&&(_.onload=null,_.onerror=null,_.onabort=null,_.ontimeout=null),l(a)}catch{}}function Ea(){this.g=new ia}function en(s){this.i=s.Sb||null,this.h=s.ab||!1}E(en,nr),en.prototype.g=function(){return new is(this.i,this.h)};function is(s,i){G.call(this),this.H=s,this.o=i,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(is,G),n=is.prototype,n.open=function(s,i){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=i,this.readyState=1,Pe(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const i={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(i.body=s),(this.H||h).fetch(new Request(this.D,i)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ne(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Pe(this)),this.g&&(this.readyState=3,Pe(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ar(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ar(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var i=s.value?s.value:new Uint8Array(0);(i=this.B.decode(i,{stream:!s.done}))&&(this.response=this.responseText+=i)}s.done?Ne(this):Pe(this),this.readyState==3&&Ar(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,Ne(this))},n.Na=function(s){this.g&&(this.response=s,Ne(this))},n.ga=function(){this.g&&Ne(this)};function Ne(s){s.readyState=4,s.l=null,s.j=null,s.B=null,Pe(s)}n.setRequestHeader=function(s,i){this.A.append(s,i)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],i=this.h.entries();for(var a=i.next();!a.done;)a=a.value,s.push(a[0]+": "+a[1]),a=i.next();return s.join(`\r
`)};function Pe(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(is.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function kr(s){let i="";return Qe(s,function(a,l){i+=l,i+=":",i+=a,i+=`\r
`}),i}function sn(s,i,a){t:{for(l in a){var l=!1;break t}l=!0}l||(a=kr(a),typeof s=="string"?a!=null&&Ee(a):x(s,i,a))}function V(s){G.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(V,G);var Ta=/^https?$/i,Sa=["POST","PUT"];n=V.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,i,a,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);i=i?i.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():cr.g(),this.g.onreadystatechange=R(I(this.Ca,this));try{this.B=!0,this.g.open(i,String(s),!0),this.B=!1}catch(b){Cr(this,b);return}if(s=a||"",a=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var _ in l)a.set(_,l[_]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const b of l.keys())a.set(b,l.get(b));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(a.keys()).find(b=>b.toLowerCase()=="content-type"),_=h.FormData&&s instanceof h.FormData,!(Array.prototype.indexOf.call(Sa,i,void 0)>=0)||l||_||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,T]of a)this.g.setRequestHeader(b,T);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(b){Cr(this,b)}};function Cr(s,i){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=i,s.o=5,Rr(s),os(s)}function Rr(s){s.A||(s.A=!0,q(s,"complete"),q(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,q(this,"complete"),q(this,"abort"),os(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),os(this,!0)),V.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Nr(this):this.Xa())},n.Xa=function(){Nr(this)};function Nr(s){if(s.h&&typeof c<"u"){if(s.v&&Pt(s)==4)setTimeout(s.Ca.bind(s),0);else if(q(s,"readystatechange"),Pt(s)==4){s.h=!1;try{const b=s.ca();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i=!0;break t;default:i=!1}var a;if(!(a=i)){var l;if(l=b===0){let T=String(s.D).match(vr)[1]||null;!T&&h.self&&h.self.location&&(T=h.self.location.protocol.slice(0,-1)),l=!Ta.test(T?T.toLowerCase():"")}a=l}if(a)q(s,"complete"),q(s,"success");else{s.o=6;try{var _=Pt(s)>2?s.g.statusText:""}catch{_=""}s.l=_+" ["+s.ca()+"]",Rr(s)}}finally{os(s)}}}}function os(s,i){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const a=s.g;s.g=null,i||q(s,"ready");try{a.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Pt(s){return s.g?s.g.readyState:0}n.ca=function(){try{return Pt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var i=this.g.responseText;return s&&i.indexOf(s)==0&&(i=i.substring(s.length)),ra(i)}};function Pr(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Aa(s){const i={};s=(s.g&&Pt(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<s.length;l++){if(d(s[l]))continue;var a=la(s[l]);const _=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const b=i[_]||[];i[_]=b,b.push(a)}Zo(i,function(l){return l.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oe(s,i,a){return a&&a.internalChannelParams&&a.internalChannelParams[s]||i}function Or(s){this.za=0,this.i=[],this.j=new Ie,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Oe("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Oe("baseRetryDelayMs",5e3,s),this.Za=Oe("retryDelaySeedMs",1e4,s),this.Ta=Oe("forwardChannelMaxRetries",2,s),this.va=Oe("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new pr(s&&s.concurrentRequestLimit),this.Ba=new Ea,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Or.prototype,n.ka=8,n.I=1,n.connect=function(s,i,a,l){K(0),this.W=s,this.H=i||{},a&&l!==void 0&&(this.H.OSID=a,this.H.OAID=l),this.F=this.X,this.J=Br(this,null,this.W),cs(this)};function nn(s){if(Dr(s),s.I==3){var i=s.V++,a=ht(s.J);if(x(a,"SID",s.M),x(a,"RID",i),x(a,"TYPE","terminate"),De(s,a),i=new Ct(s,s.j,i),i.M=2,i.A=rs(ht(a)),a=!1,h.navigator&&h.navigator.sendBeacon)try{a=h.navigator.sendBeacon(i.A.toString(),"")}catch{}!a&&h.Image&&(new Image().src=i.A,a=!0),a||(i.g=Hr(i.j,null),i.g.ea(i.A)),i.F=Date.now(),ns(i)}Vr(s)}function as(s){s.g&&(on(s),s.g.cancel(),s.g=null)}function Dr(s){as(s),s.v&&(h.clearTimeout(s.v),s.v=null),hs(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&h.clearTimeout(s.m),s.m=null)}function cs(s){if(!gr(s.h)&&!s.m){s.m=!0;var i=s.Ea;tt||u(),Y||(tt(),Y=!0),g.add(i,s),s.D=0}}function ka(s,i){return mr(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=i.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=be(I(s.Ea,s,i),Fr(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const _=new Ct(this,this.j,s);let b=this.o;if(this.U&&(b?(b=qn(b),Jn(b,this.U)):b=this.U),this.u!==null||this.R||(_.J=b,b=null),this.S)t:{for(var i=0,a=0;a<this.i.length;a++){e:{var l=this.i[a];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break e}l=void 0}if(l===void 0)break;if(i+=l,i>4096){i=a;break t}if(i===4096||a===this.i.length-1){i=a+1;break t}}i=1e3}else i=1e3;i=Mr(this,_,i),a=ht(this.J),x(a,"RID",s),x(a,"CVER",22),this.G&&x(a,"X-HTTP-Session-Id",this.G),De(this,a),b&&(this.R?i="headers="+Ee(kr(b))+"&"+i:this.u&&sn(a,this.u,b)),Qs(this.h,_),this.Ra&&x(a,"TYPE","init"),this.S?(x(a,"$req",i),x(a,"SID","null"),_.U=!0,Js(_,a,null)):Js(_,a,i),this.I=2}}else this.I==3&&(s?Lr(this,s):this.i.length==0||gr(this.h)||Lr(this))};function Lr(s,i){var a;i?a=i.l:a=s.V++;const l=ht(s.J);x(l,"SID",s.M),x(l,"RID",a),x(l,"AID",s.K),De(s,l),s.u&&s.o&&sn(l,s.u,s.o),a=new Ct(s,s.j,a,s.D+1),s.u===null&&(a.J=s.o),i&&(s.i=i.G.concat(s.i)),i=Mr(s,a,1e3),a.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),Qs(s.h,a),Js(a,l,i)}function De(s,i){s.H&&Qe(s.H,function(a,l){x(i,l,a)}),s.l&&Qe({},function(a,l){x(i,l,a)})}function Mr(s,i,a){a=Math.min(s.i.length,a);const l=s.l?I(s.l.Ka,s.l,s):null;t:{var _=s.i;let k=-1;for(;;){const W=["count="+a];k==-1?a>0?(k=_[0].g,W.push("ofs="+k)):k=0:W.push("ofs="+k);let j=!0;for(let z=0;z<a;z++){var b=_[z].g;const lt=_[z].map;if(b-=k,b<0)k=Math.max(0,_[z].g-100),j=!1;else try{b="req"+b+"_"||"";try{var T=lt instanceof Map?lt:Object.entries(lt);for(const[he,Ot]of T){let Dt=Ot;y(Ot)&&(Dt=$s(Ot)),W.push(b+he+"="+encodeURIComponent(Dt))}}catch(he){throw W.push(b+"type="+encodeURIComponent("_badmap")),he}}catch{l&&l(lt)}}if(j){T=W.join("&");break t}}T=void 0}return s=s.i.splice(0,a),i.G=s,T}function Ur(s){if(!s.g&&!s.v){s.Y=1;var i=s.Da;tt||u(),Y||(tt(),Y=!0),g.add(i,s),s.A=0}}function rn(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=be(I(s.Da,s),Fr(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,xr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=be(I(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,K(10),as(this),xr(this))};function on(s){s.B!=null&&(h.clearTimeout(s.B),s.B=null)}function xr(s){s.g=new Ct(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var i=ht(s.na);x(i,"RID","rpc"),x(i,"SID",s.M),x(i,"AID",s.K),x(i,"CI",s.F?"0":"1"),!s.F&&s.ia&&x(i,"TO",s.ia),x(i,"TYPE","xmlhttp"),De(s,i),s.u&&s.o&&sn(i,s.u,s.o),s.O&&(s.g.H=s.O);var a=s.g;s=s.ba,a.M=1,a.A=rs(ht(i)),a.u=null,a.R=!0,ur(a,s)}n.Va=function(){this.C!=null&&(this.C=null,as(this),rn(this),K(19))};function hs(s){s.C!=null&&(h.clearTimeout(s.C),s.C=null)}function jr(s,i){var a=null;if(s.g==i){hs(s),on(s),s.g=null;var l=2}else if(Zs(s.h,i))a=i.G,yr(s.h,i),l=1;else return;if(s.I!=0){if(i.o)if(l==1){a=i.u?i.u.length:0,i=Date.now()-i.F;var _=s.D;l=Gs(),q(l,new ar(l,a)),cs(s)}else Ur(s);else if(_=i.m,_==3||_==0&&i.X>0||!(l==1&&ka(s,i)||l==2&&rn(s)))switch(a&&a.length>0&&(i=s.h,i.i=i.i.concat(a)),_){case 1:qt(s,5);break;case 4:qt(s,10);break;case 3:qt(s,6);break;default:qt(s,2)}}}function Fr(s,i){let a=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(a*=2),a*i}function qt(s,i){if(s.j.info("Error code "+i),i==2){var a=I(s.bb,s),l=s.Ua;const _=!l;l=new Rt(l||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Se(l,"https"),rs(l),_?ba(l.toString(),a):Ia(l.toString(),a)}else K(2);s.I=0,s.l&&s.l.pa(i),Vr(s),Dr(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),K(2)):(this.j.info("Failed to ping google.com"),K(1))};function Vr(s){if(s.I=0,s.ja=[],s.l){const i=_r(s.h);(i.length!=0||s.i.length!=0)&&(L(s.ja,i),L(s.ja,s.i),s.h.i.length=0,U(s.i),s.i.length=0),s.l.oa()}}function Br(s,i,a){var l=a instanceof Rt?ht(a):new Rt(a);if(l.g!="")i&&(l.g=i+"."+l.g),Ae(l,l.u);else{var _=h.location;l=_.protocol,i=i?i+"."+_.hostname:_.hostname,_=+_.port;const b=new Rt(null);l&&Se(b,l),i&&(b.g=i),_&&Ae(b,_),a&&(b.h=a),l=b}return a=s.G,i=s.wa,a&&i&&x(l,a,i),x(l,"VER",s.ka),De(s,l),l}function Hr(s,i,a){if(i&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return i=s.Aa&&!s.ma?new V(new en({ab:a})):new V(s.ma),i.Fa(s.L),i}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $r(){}n=$r.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function et(s,i){G.call(this),this.g=new Or(i),this.l=s,this.h=i&&i.messageUrlParams||null,s=i&&i.messageHeaders||null,i&&i.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=i&&i.initMessageHeaders||null,i&&i.messageContentType&&(s?s["X-WebChannel-Content-Type"]=i.messageContentType:s={"X-WebChannel-Content-Type":i.messageContentType}),i&&i.sa&&(s?s["X-WebChannel-Client-Profile"]=i.sa:s={"X-WebChannel-Client-Profile":i.sa}),this.g.U=s,(s=i&&i.Qb)&&!d(s)&&(this.g.u=s),this.A=i&&i.supportsCrossDomainXhr||!1,this.v=i&&i.sendRawJson||!1,(i=i&&i.httpSessionIdParam)&&!d(i)&&(this.g.G=i,s=this.h,s!==null&&i in s&&(s=this.h,i in s&&delete s[i])),this.j=new ce(this)}E(et,G),et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},et.prototype.close=function(){nn(this.g)},et.prototype.o=function(s){var i=this.g;if(typeof s=="string"){var a={};a.__data__=s,s=a}else this.v&&(a={},a.__data__=$s(s),s=a);i.i.push(new fa(i.Ya++,s)),i.I==3&&cs(i)},et.prototype.N=function(){this.g.l=null,delete this.j,nn(this.g),delete this.g,et.Z.N.call(this)};function Wr(s){Ws.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var i=s.__sm__;if(i){t:{for(const a in i){s=a;break t}s=void 0}(this.i=s)&&(s=this.i,i=i!==null&&s in i?i[s]:void 0),this.data=i}else this.data=s}E(Wr,Ws);function zr(){zs.call(this),this.status=1}E(zr,zs);function ce(s){this.g=s}E(ce,$r),ce.prototype.ra=function(){q(this.g,"a")},ce.prototype.qa=function(s){q(this.g,new Wr(s))},ce.prototype.pa=function(s){q(this.g,new zr)},ce.prototype.oa=function(){q(this.g,"b")},et.prototype.send=et.prototype.o,et.prototype.open=et.prototype.m,et.prototype.close=et.prototype.close,ss.OPEN="a",ss.CLOSE="b",ss.ERROR="c",ss.MESSAGE="d",G.prototype.listen=G.prototype.J,V.prototype.listenOnce=V.prototype.K,V.prototype.getLastError=V.prototype.Ha,V.prototype.getLastErrorCode=V.prototype.ya,V.prototype.getStatus=V.prototype.ca,V.prototype.getResponseJson=V.prototype.La,V.prototype.getResponseText=V.prototype.la,V.prototype.send=V.prototype.ea,V.prototype.setWithCredentials=V.prototype.Fa}).apply(typeof us<"u"?us:typeof self<"u"?self:typeof window<"u"?window:{});const ri="@firebase/firestore",ii="4.9.2";/**
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
*/class J{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}J.UNAUTHENTICATED=new J(null),J.GOOGLE_CREDENTIALS=new J("google-credentials-uid"),J.FIRST_PARTY=new J("first-party-uid"),J.MOCK_USER=new J("mock-user");/**
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
*/let Ge="12.3.0";/**
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
*/const ge=new Nn("@firebase/firestore");function it(n,...t){if(ge.logLevel<=D.DEBUG){const e=t.map(Ln);ge.debug(`Firestore (${Ge}): ${n}`,...e)}}function no(n,...t){if(ge.logLevel<=D.ERROR){const e=t.map(Ln);ge.error(`Firestore (${Ge}): ${n}`,...e)}}function hh(n,...t){if(ge.logLevel<=D.WARN){const e=t.map(Ln);ge.warn(`Firestore (${Ge}): ${n}`,...e)}}function Ln(n){if(typeof n=="string")return n;try{/**
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
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
*/function He(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,ro(n,r,e)}function ro(n,t,e){let r=`FIRESTORE (${Ge}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw no(r),new Error(r)}function xe(n,t,e,r){let o="Unexpected state";typeof e=="string"?o=e:r=e,n||ro(t,o,r)}/**
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
*/const P={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class O extends _t{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
*/class je{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
*/class io{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class lh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(J.UNAUTHENTICATED)))}shutdown(){}}class uh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class dh{constructor(t){this.t=t,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){xe(this.o===void 0,42304);let r=this.i;const o=v=>this.i!==r?(r=this.i,e(v)):Promise.resolve();let c=new je;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new je,t.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const v=c;t.enqueueRetryable((async()=>{await v.promise,await o(this.currentUser)}))},y=v=>{it("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=v,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((v=>y(v))),setTimeout((()=>{if(!this.auth){const v=this.t.getImmediate({optional:!0});v?y(v):(it("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new je)}}),0),h()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(it("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string",31837,{l:r}),new io(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return xe(t===null||typeof t=="string",2055,{h:t}),new J(t)}}class fh{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=J.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ph{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new fh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(J.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class oi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gh{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Q(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){xe(this.o===void 0,3512);const r=c=>{c.error!=null&&it("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,it("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?e(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable((()=>r(c)))};const o=c=>{it("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>o(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):it("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new oi(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(xe(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new oi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
*/function mh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
*/class yh{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=mh(40);for(let c=0;c<o.length;++c)r.length<20&&o[c]<e&&(r+=t.charAt(o[c]%62))}return r}}function Ht(n,t){return n<t?-1:n>t?1:0}function _h(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const o=n.charAt(r),c=t.charAt(r);if(o!==c)return fn(o)===fn(c)?Ht(o,c):fn(o)?1:-1}return Ht(n.length,t.length)}const vh=55296,wh=57343;function fn(n){const t=n.charCodeAt(0);return t>=vh&&t<=wh}/**
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
*/const ai="__name__";class ut{constructor(t,e,r){e===void 0?e=0:e>t.length&&He(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&He(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return ut.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ut?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let o=0;o<r;o++){const c=ut.compareSegments(t.get(o),e.get(o));if(c!==0)return c}return Ht(t.length,e.length)}static compareSegments(t,e){const r=ut.isNumericId(t),o=ut.isNumericId(e);return r&&!o?-1:!r&&o?1:r&&o?ut.extractNumericId(t).compare(ut.extractNumericId(e)):_h(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Dn.fromString(t.substring(4,t.length-2))}}class rt extends ut{construct(t,e,r){return new rt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((o=>o.length>0)))}return new rt(e)}static emptyPath(){return new rt([])}}const bh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Jt extends ut{construct(t,e,r){return new Jt(t,e,r)}static isValidIdentifier(t){return bh.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Jt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ai}static keyField(){return new Jt([ai])}static fromServerFormat(t){const e=[];let r="",o=0;const c=()=>{if(r.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let h=!1;for(;o<t.length;){const y=t[o];if(y==="\\"){if(o+1===t.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const v=t[o+1];if(v!=="\\"&&v!=="."&&v!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=v,o+=2}else y==="`"?(h=!h,o++):y!=="."||h?(r+=y,o++):(c(),o++)}if(c(),h)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Jt(e)}static emptyPath(){return new Jt([])}}/**
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
*/class Xt{constructor(t){this.path=t}static fromPath(t){return new Xt(rt.fromString(t))}static fromName(t){return new Xt(rt.fromString(t).popFirst(5))}static empty(){return new Xt(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&rt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return rt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Xt(new rt(t.slice()))}}function Ih(n,t,e,r){if(t===!0&&r===!0)throw new O(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Eh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Th(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(e){return e.constructor?e.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":He(12329,{type:typeof n})}function Sh(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Th(n);throw new O(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
*/function H(n,t){const e={typeString:n};return t&&(e.value=t),e}function qe(n,t){if(!Eh(n))throw new O(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const o=t[r].typeString,c="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const h=n[r];if(o&&typeof h!==o){e=`JSON field '${r}' must be a ${o}.`;break}if(c!==void 0&&h!==c.value){e=`Expected '${r}' field to equal '${c.value}'`;break}}if(e)throw new O(P.INVALID_ARGUMENT,e);return!0}/**
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
*/const ci=-62135596800,hi=1e6;class dt{static now(){return dt.fromMillis(Date.now())}static fromDate(t){return dt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*hi);return new dt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ci)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hi}_compareTo(t){return this.seconds===t.seconds?Ht(this.nanoseconds,t.nanoseconds):Ht(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:dt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(qe(t,dt._jsonSchema))return new dt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-ci;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}dt._jsonSchemaVersion="firestore/timestamp/1.0",dt._jsonSchema={type:H("string",dt._jsonSchemaVersion),seconds:H("number"),nanoseconds:H("number")};function Ah(n){return n.name==="IndexedDbTransactionError"}/**
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
*/class kh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
*/class ee{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new kh("Invalid base64 string: "+o):o}})(t);return new ee(e)}static fromUint8Array(t){const e=(function(r){let o="";for(let c=0;c<r.length;++c)o+=String.fromCharCode(r[c]);return o})(t);return new ee(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ht(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ee.EMPTY_BYTE_STRING=new ee("");const En="(default)";class Is{constructor(t,e){this.projectId=t,this.database=e||En}static empty(){return new Is("","")}get isDefaultDatabase(){return this.database===En}isEqual(t){return t instanceof Is&&t.projectId===this.projectId&&t.database===this.database}}/**
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
*/class Ch{constructor(t,e=null,r=[],o=[],c=null,h="F",y=null,v=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=o,this.limit=c,this.limitType=h,this.startAt=y,this.endAt=v,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Rh(n){return new Ch(n)}/**
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
*/var li,N;(N=li||(li={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
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
*/new Dn([4294967295,4294967295],0);/**
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
*/const Nh=41943040;/**
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
*/const Ph=1048576;function pn(){return typeof document<"u"?document:null}/**
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
*/class Oh{constructor(t,e,r=1e3,o=1.5,c=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=o,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),o=Math.max(0,e-r);o>0&&it("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
*/class Mn{constructor(t,e,r,o,c){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=o,this.removalCallback=c,this.deferred=new je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,o,c){const h=Date.now()+r,y=new Mn(t,e,h,o,c);return y.start(r),y}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var ui,di;(di=ui||(ui={})).Ma="default",di.Cache="cache";/**
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
*/function Dh(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
*/const fi=new Map;/**
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
*/const oo="firestore.googleapis.com",pi=!0;class gi{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=oo,this.ssl=pi}else this.host=t.host,this.ssl=t.ssl??pi;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Nh;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Ph)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ih("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Dh(t.experimentalLongPollingOptions??{}),(function(e){if(e.timeoutSeconds!==void 0){if(isNaN(e.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(e,r){return e.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ao{constructor(t,e,r,o){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gi({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gi(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(e){if(!e)return new lh;switch(e.type){case"firstParty":return new ph(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const e=fi.get(t);e&&(it("ComponentProvider","Removing Datastore"),fi.delete(t),e.terminate())})(this),Promise.resolve()}}function Lh(n,t,e,r={}){n=Sh(n,ao);const o=ye(t),c=n._getSettings(),h={...c,emulatorOptions:n._getEmulatorOptions()},y=`${t}:${e}`;o&&(Cn(`https://${y}`),Rn("Firestore",!0)),c.host!==oo&&c.host!==y&&hh("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v={...c,host:y,ssl:o,emulatorOptions:r};if(!Qt(v,h)&&(n._setSettings(v),r.mockUserToken)){let I,S;if(typeof r.mockUserToken=="string")I=r.mockUserToken,S=J.MOCK_USER;else{I=Yi(r.mockUserToken,n._app?.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new O(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new J(E)}n._authCredentials=new uh(new io(I,S))}}/**
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
*/class Un{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Un(this.firestore,t,this._query)}}class ft{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ft(this.firestore,t,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(qe(e,ft._jsonSchema))return new ft(t,r||null,new Xt(rt.fromString(e.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:H("string",ft._jsonSchemaVersion),referencePath:H("string")};class xn extends Un{constructor(t,e,r){super(t,e,Rh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ft(this.firestore,null,new Xt(t))}withConverter(t){return new xn(this.firestore,t,this._path)}}/**
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
*/const mi="AsyncQueue";class yi{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Oh(this,"async_queue_retry"),this._c=()=>{const r=pn();r&&it(mi,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=pn();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=pn();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new je;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Ah(t))throw t;it(mi,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,no("INTERNAL UNHANDLED ERROR: ",_i(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const o=Mn.createAndSchedule(this,t,e,r,(c=>this.hc(c)));return this.tc.push(o),o}uc(){this.nc&&He(47125,{Pc:_i(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function _i(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Mh extends ao{constructor(t,e,r,o){super(t,e,r,o),this.type="firestore",this._queue=new yi,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new yi(t),this._firestoreClient=void 0,await t}}}function Uh(n,t){const e=typeof n=="object"?n:On(),r=typeof n=="string"?n:En,o=Os(e,"firestore").getImmediate({identifier:r});if(!o._initialized){const c=Ki("firestore");c&&Lh(o,...c)}return o}/**
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
*/class bt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new bt(ee.fromBase64String(t))}catch(e){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new bt(ee.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(qe(t,bt._jsonSchema))return bt.fromBase64String(t.bytes)}}bt._jsonSchemaVersion="firestore/bytes/1.0",bt._jsonSchema={type:H("string",bt._jsonSchemaVersion),bytes:H("string")};/**
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
*/class co{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Jt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
*/class Yt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Ht(this._lat,t._lat)||Ht(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Yt._jsonSchemaVersion}}static fromJSON(t){if(qe(t,Yt._jsonSchema))return new Yt(t.latitude,t.longitude)}}Yt._jsonSchemaVersion="firestore/geoPoint/1.0",Yt._jsonSchema={type:H("string",Yt._jsonSchemaVersion),latitude:H("number"),longitude:H("number")};/**
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
*/class Zt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(e,r){if(e.length!==r.length)return!1;for(let o=0;o<e.length;++o)if(e[o]!==r[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Zt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(qe(t,Zt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Zt(t.vectorValues);throw new O(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Zt._jsonSchemaVersion="firestore/vectorValue/1.0",Zt._jsonSchema={type:H("string",Zt._jsonSchemaVersion),vectorValues:H("object")};const xh=new RegExp("[~\\*/\\[\\]]");function jh(n,t,e){if(t.search(xh)>=0)throw vi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new co(...t.split("."))._internalPath}catch{throw vi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function vi(n,t,e,r,o){let c=`Function ${t}() called with invalid data`;c+=". ";let h="";return new O(P.INVALID_ARGUMENT,c+n+h)}/**
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
*/class ho{constructor(t,e,r,o,c){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Fh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(lo("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Fh extends ho{data(){return super.data()}}function lo(n,t){return typeof t=="string"?jh(n,t):t instanceof co?t._internalPath:t._delegate._internalPath}class ds{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ue extends ho{constructor(t,e,r,o,c,h){super(t,e,r,o,h),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new gs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(lo("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=ue._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()||(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED")),e}}ue._jsonSchemaVersion="firestore/documentSnapshot/1.0",ue._jsonSchema={type:H("string",ue._jsonSchemaVersion),bundleSource:H("string","DocumentSnapshot"),bundleName:H("string"),bundle:H("string")};class gs extends ue{data(t={}){return super.data(t)}}class Fe{constructor(t,e,r,o){this._firestore=t,this._userDataWriter=e,this._snapshot=o,this.metadata=new ds(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new gs(this._firestore,this._userDataWriter,r.key,r,new ds(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(r,o){if(r._snapshot.oldDocs.isEmpty()){let c=0;return r._snapshot.docChanges.map((h=>{const y=new gs(r._firestore,r._userDataWriter,h.doc.key,h.doc,new ds(r._snapshot.mutatedKeys.has(h.doc.key),r._snapshot.fromCache),r.query.converter);return h.doc,{type:"added",doc:y,oldIndex:-1,newIndex:c++}}))}{let c=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((h=>o||h.type!==3)).map((h=>{const y=new gs(r._firestore,r._userDataWriter,h.doc.key,h.doc,new ds(r._snapshot.mutatedKeys.has(h.doc.key),r._snapshot.fromCache),r.query.converter);let v=-1,I=-1;return h.type!==0&&(v=c.indexOf(h.doc.key),c=c.delete(h.doc.key)),h.type!==1&&(c=c.add(h.doc),I=c.indexOf(h.doc.key)),{type:Vh(h.type),doc:y,oldIndex:v,newIndex:I}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Fe._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=yh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],o=[];return this.docs.forEach((c=>{c._document!==null&&(e.push(c._document),r.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Vh(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return He(61501,{type:n})}}Fe._jsonSchemaVersion="firestore/querySnapshot/1.0",Fe._jsonSchema={type:H("string",Fe._jsonSchemaVersion),bundleSource:H("string","QuerySnapshot"),bundleName:H("string"),bundle:H("string")};(function(n,t=!0){(function(e){Ge=e})(re),te(new Bt("firestore",((e,{instanceIdentifier:r,options:o})=>{const c=e.getProvider("app").getImmediate(),h=new Mh(new dh(e.getProvider("auth-internal")),new gh(c,e.getProvider("app-check-internal")),(function(y,v){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Is(y.options.projectId,v)})(c,r),c);return o={useFetchStreams:t,...o},h._setSettings(o),h}),"PUBLIC").setMultipleInstances(!0)),pt(ri,ii,n),pt(ri,ii,"esm2020")})();function uo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bh=uo,fo=new We("auth","Firebase",uo());/**
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
*/const Es=new Nn("@firebase/auth");function Hh(n,...t){Es.logLevel<=D.WARN&&Es.warn(`Auth (${re}): ${n}`,...t)}function ms(n,...t){Es.logLevel<=D.ERROR&&Es.error(`Auth (${re}): ${n}`,...t)}/**
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
*/function ct(n,...t){throw jn(n,...t)}function gt(n,...t){return jn(n,...t)}function po(n,t,e){const r={...Bh(),[t]:e};return new We("auth","Firebase",r).create(t,{appName:n.name})}function Tt(n){return po(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jn(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return fo.create(n,...t)}function A(n,t,...e){if(!n)throw jn(t,...e)}function It(n){const t="INTERNAL ASSERTION FAILED: "+n;throw ms(t),new Error(t)}function At(n,t){n||It(t)}/**
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
*/function Tn(){return typeof self<"u"&&self.location?.href||""}function $h(){return wi()==="http:"||wi()==="https:"}function wi(){return typeof self<"u"&&self.location?.protocol||null}/**
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
*/function Wh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($h()||Ba()||"connection"in navigator)?navigator.onLine:!0}function zh(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
*/class Ke{constructor(t,e){this.shortDelay=t,this.longDelay=e,At(e>t,"Short delay should be less than long delay!"),this.isMobile=Fa()||Ha()}get(){return Wh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
*/function Fn(n,t){At(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
*/class go{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
*/const Gh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
*/const qh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Kh=new Ke(3e4,6e4);function kt(n,t){return n.tenantId&&!t.tenantId?{...t,tenantId:n.tenantId}:t}async function vt(n,t,e,r,o={}){return mo(n,o,async()=>{let c={},h={};r&&(t==="GET"?h=r:c={body:JSON.stringify(r)});const y=ze({key:n.config.apiKey,...h}).slice(1),v=await n._getAdditionalHeaders();v["Content-Type"]="application/json",n.languageCode&&(v["X-Firebase-Locale"]=n.languageCode);const I={method:t,headers:v,...c};return Va()||(I.referrerPolicy="no-referrer"),n.emulatorConfig&&ye(n.emulatorConfig.host)&&(I.credentials="include"),go.fetch()(await yo(n,n.config.apiHost,e,y),I)})}async function mo(n,t,e){n._canInitEmulator=!1;const r={...Gh,...t};try{const o=new Xh(n),c=await Promise.race([e(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw fs(n,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const y=c.ok?h.errorMessage:h.error.message,[v,I]=y.split(" : ");if(v==="FEDERATED_USER_ID_ALREADY_LINKED")throw fs(n,"credential-already-in-use",h);if(v==="EMAIL_EXISTS")throw fs(n,"email-already-in-use",h);if(v==="USER_DISABLED")throw fs(n,"user-disabled",h);const S=r[v]||v.toLowerCase().replace(/[_\s]+/g,"-");if(I)throw po(n,S,I);ct(n,S)}}catch(o){if(o instanceof _t)throw o;ct(n,"network-request-failed",{message:String(o)})}}async function Je(n,t,e,r,o={}){const c=await vt(n,t,e,r,o);return"mfaPendingCredential"in c&&ct(n,"multi-factor-auth-required",{_serverResponse:c}),c}async function yo(n,t,e,r){const o=`${t}${e}?${r}`,c=n,h=c.config.emulator?Fn(n.config,o):`${n.config.apiScheme}://${o}`;return qh.includes(e)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}function Jh(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Xh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),Kh.get())})}}function fs(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const o=gt(n,t,r);return o.customData._tokenResponse=e,o}function bi(n){return n!==void 0&&n.enterprise!==void 0}class Yh{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return Jh(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Zh(n,t){return vt(n,"GET","/v2/recaptchaConfig",kt(n,t))}/**
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
*/async function Qh(n,t){return vt(n,"POST","/v1/accounts:delete",t)}async function Ts(n,t){return vt(n,"POST","/v1/accounts:lookup",t)}/**
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
*/function Ve(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function tl(n,t=!1){const e=st(n),r=await e.getIdToken(t),o=Vn(r);A(o&&o.exp&&o.auth_time&&o.iat,e.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c?.sign_in_provider;return{claims:o,token:r,authTime:Ve(gn(o.auth_time)),issuedAtTime:Ve(gn(o.iat)),expirationTime:Ve(gn(o.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function gn(n){return Number(n)*1e3}function Vn(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return ms("JWT malformed, contained fewer than 3 sections"),null;try{const o=Gi(e);return o?JSON.parse(o):(ms("Failed to decode base64 JWT payload"),null)}catch(o){return ms("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Ii(n){const t=Vn(n);return A(t,"internal-error"),A(typeof t.exp<"u","internal-error"),A(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
*/async function me(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof _t&&el(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function el({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
*/class sl{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
*/class Sn{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ve(this.lastLoginAt),this.creationTime=Ve(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
*/async function Ss(n){const t=n.auth,e=await n.getIdToken(),r=await me(n,Ts(t,{idToken:e}));A(r?.users.length,t,"internal-error");const o=r.users[0];n._notifyReloadListener(o);const c=o.providerUserInfo?.length?_o(o.providerUserInfo):[],h=rl(n.providerData,c),y=n.isAnonymous,v=!(n.email&&o.passwordHash)&&!h?.length,I=y?v:!1,S={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Sn(o.createdAt,o.lastLoginAt),isAnonymous:I};Object.assign(n,S)}async function nl(n){const t=st(n);await Ss(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function rl(n,t){return[...n.filter(e=>!t.some(r=>r.providerId===e.providerId)),...t]}function _o(n){return n.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
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
*/async function il(n,t){const e=await mo(n,{},async()=>{const r=ze({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:c}=n.config,h=await yo(n,o,"/v1/token",`key=${c}`),y=await n._getAdditionalHeaders();y["Content-Type"]="application/x-www-form-urlencoded";const v={method:"POST",headers:y,body:r};return n.emulatorConfig&&ye(n.emulatorConfig.host)&&(v.credentials="include"),go.fetch()(h,v)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function ol(n,t){return vt(n,"POST","/v2/accounts:revokeToken",kt(n,t))}/**
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
*/class de{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){A(t.idToken,"internal-error"),A(typeof t.idToken<"u","internal-error"),A(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ii(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){A(t.length!==0,"internal-error");const e=Ii(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:o,expiresIn:c}=await il(t,e);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:o,expirationTime:c}=e,h=new de;return r&&(A(typeof r=="string","internal-error",{appName:t}),h.refreshToken=r),o&&(A(typeof o=="string","internal-error",{appName:t}),h.accessToken=o),c&&(A(typeof c=="number","internal-error",{appName:t}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new de,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
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
*/function Lt(n,t){A(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class ot{constructor({uid:t,auth:e,stsTokenManager:r,...o}){this.providerId="firebase",this.proactiveRefresh=new sl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Sn(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const e=await me(this,this.stsTokenManager.getToken(this.auth,t));return A(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return tl(this,t)}reload(){return nl(this)}_assign(t){this!==t&&(A(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ot({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await Ss(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Q(this.auth.app))return Promise.reject(Tt(this.auth));const t=await this.getIdToken();return await me(this,Qh(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const r=e.displayName??void 0,o=e.email??void 0,c=e.phoneNumber??void 0,h=e.photoURL??void 0,y=e.tenantId??void 0,v=e._redirectEventId??void 0,I=e.createdAt??void 0,S=e.lastLoginAt??void 0,{uid:E,emailVerified:R,isAnonymous:U,providerData:L,stsTokenManager:M}=e;A(E&&M,t,"internal-error");const C=de.fromJSON(this.name,M);A(typeof E=="string",t,"internal-error"),Lt(r,t.name),Lt(o,t.name),A(typeof R=="boolean",t,"internal-error"),A(typeof U=="boolean",t,"internal-error"),Lt(c,t.name),Lt(h,t.name),Lt(y,t.name),Lt(v,t.name),Lt(I,t.name),Lt(S,t.name);const B=new ot({uid:E,auth:t,email:o,emailVerified:R,displayName:r,isAnonymous:U,photoURL:h,phoneNumber:c,tenantId:y,stsTokenManager:C,createdAt:I,lastLoginAt:S});return L&&Array.isArray(L)&&(B.providerData=L.map($=>({...$}))),v&&(B._redirectEventId=v),B}static async _fromIdTokenResponse(t,e,r=!1){const o=new de;o.updateFromServerResponse(e);const c=new ot({uid:e.localId,auth:t,stsTokenManager:o,isAnonymous:r});return await Ss(c),c}static async _fromGetAccountInfoResponse(t,e,r){const o=e.users[0];A(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?_o(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!c?.length,y=new de;y.updateFromIdToken(r);const v=new ot({uid:o.localId,auth:t,stsTokenManager:y,isAnonymous:h}),I={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Sn(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!c?.length};return Object.assign(v,I),v}}/**
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
*/const Ei=new Map;function Et(n){At(n instanceof Function,"Expected a class definition");let t=Ei.get(n);return t?(At(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Ei.set(n,t),t)}/**
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
*/class vo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}vo.type="NONE";const Ti=vo;/**
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
*/function ys(n,t,e){return`firebase:${n}:${t}:${e}`}class fe{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=ys(this.userKey,o.apiKey,c),this.fullPersistenceKey=ys("persistence",o.apiKey,c),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await Ts(this.auth,{idToken:t}).catch(()=>{});return e?ot._fromGetAccountInfoResponse(this.auth,e,t):null}return ot._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new fe(Et(Ti),t,r);const o=(await Promise.all(e.map(async I=>{if(await I._isAvailable())return I}))).filter(I=>I);let c=o[0]||Et(Ti);const h=ys(r,t.config.apiKey,t.name);let y=null;for(const I of e)try{const S=await I._get(h);if(S){let E;if(typeof S=="string"){const R=await Ts(t,{idToken:S}).catch(()=>{});if(!R)break;E=await ot._fromGetAccountInfoResponse(t,R,S)}else E=ot._fromJSON(t,S);I!==c&&(y=E),c=I;break}}catch{}const v=o.filter(I=>I._shouldAllowMigration);return!c._shouldAllowMigration||!v.length?new fe(c,t,r):(c=v[0],y&&await c._set(h,y.toJSON()),await Promise.all(e.map(async I=>{if(I!==c)try{await I._remove(h)}catch{}})),new fe(c,t,r))}}/**
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
*/function Si(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Eo(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(wo(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(So(t))return"Blackberry";if(Ao(t))return"Webos";if(bo(t))return"Safari";if((t.includes("chrome/")||Io(t))&&!t.includes("edge/"))return"Chrome";if(To(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if(r?.length===2)return r[1]}return"Other"}function wo(n=X()){return/firefox\//i.test(n)}function bo(n=X()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Io(n=X()){return/crios\//i.test(n)}function Eo(n=X()){return/iemobile/i.test(n)}function To(n=X()){return/android/i.test(n)}function So(n=X()){return/blackberry/i.test(n)}function Ao(n=X()){return/webos/i.test(n)}function Bn(n=X()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function al(n=X()){return Bn(n)&&!!window.navigator?.standalone}function cl(){return $a()&&document.documentMode===10}function ko(n=X()){return Bn(n)||To(n)||Ao(n)||So(n)||/windows phone/i.test(n)||Eo(n)}/**
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
*/function Co(n,t=[]){let e;switch(n){case"Browser":e=Si(X());break;case"Worker":e=`${Si(X())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${re}/${r}`}/**
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
*/class hl{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=c=>new Promise((h,y)=>{try{const v=t(c);h(v)}catch(v){y(v)}});r.onAbort=e,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const o of e)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
*/async function ll(n,t={}){return vt(n,"GET","/v2/passwordPolicy",kt(n,t))}/**
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
*/const ul=6;class dl{constructor(t){const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??ul,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),o&&(e.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let o=0;o<t.length;o++)r=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
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
*/class fl{constructor(t,e,r,o){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ai(this),this.idTokenSubscription=new Ai(this),this.beforeStateQueue=new hl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Et(e)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await fe.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Ts(this,{idToken:t}),r=await ot._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Q(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let r=e,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,h=r?._redirectEventId,y=await this.tryRedirectSignIn(t);(!c||c===h)&&y?.user&&(r=y.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(c){r=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Ss(t)}catch(e){if(e?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=zh()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Q(this.app))return Promise.reject(Tt(this));const e=t?st(t):null;return e&&A(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&A(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Q(this.app)?Promise.reject(Tt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Q(this.app)?Promise.reject(Tt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await ll(this),e=new dl(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new We("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await ol(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Et(t)||this._popupRedirectResolver;A(e,this,"argument-error"),this.redirectPersistenceManager=await fe.create(this,[Et(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,o){if(this._deleted)return()=>{};const c=typeof e=="function"?e:e.next.bind(e);let h=!1;const y=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(y,this,"internal-error"),y.then(()=>{h||c(this.currentUser)}),typeof e=="function"){const v=t.addObserver(e,r,o);return()=>{h=!0,v()}}else{const v=t.addObserver(e);return()=>{h=!0,v()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Co(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();e&&(t["X-Firebase-Client"]=e);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){if(Q(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&Hh(`Error while retrieving App Check token: ${t.error}`),t?.token}}function $t(n){return st(n)}class Ai{constructor(t){this.auth=t,this.observer=null,this.addObserver=Xa(e=>this.observer=e)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
*/let Ds={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pl(n){Ds=n}function Ro(n){return Ds.loadJS(n)}function gl(){return Ds.recaptchaEnterpriseScript}function ml(){return Ds.gapiScript}function yl(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class _l{constructor(){this.enterprise=new vl}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class vl{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const wl="recaptcha-enterprise",No="NO_RECAPTCHA";class bl{constructor(t){this.type=wl,this.auth=$t(t)}async verify(t="verify",e=!1){async function r(c){if(!e){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(h,y)=>{Zh(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(v=>{if(v.recaptchaKey===void 0)y(new Error("recaptcha Enterprise site key undefined"));else{const I=new Yh(v);return c.tenantId==null?c._agentRecaptchaConfig=I:c._tenantRecaptchaConfigs[c.tenantId]=I,h(I.siteKey)}}).catch(v=>{y(v)})})}function o(c,h,y){const v=window.grecaptcha;bi(v)?v.enterprise.ready(()=>{v.enterprise.execute(c,{action:t}).then(I=>{h(I)}).catch(()=>{h(No)})}):y(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _l().execute("siteKey",{action:"verify"}):new Promise((c,h)=>{r(this.auth).then(y=>{if(!e&&bi(window.grecaptcha))o(y,c,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let v=gl();v.length!==0&&(v+=y),Ro(v).then(()=>{o(y,c,h)}).catch(I=>{h(I)})}}).catch(y=>{h(y)})})}}async function ki(n,t,e,r=!1,o=!1){const c=new bl(n);let h;if(o)h=No;else try{h=await c.verify(e)}catch{h=await c.verify(e,!0)}const y={...t};if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in y){const v=y.phoneEnrollmentInfo.phoneNumber,I=y.phoneEnrollmentInfo.recaptchaToken;Object.assign(y,{phoneEnrollmentInfo:{phoneNumber:v,recaptchaToken:I,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in y){const v=y.phoneSignInInfo.recaptchaToken;Object.assign(y,{phoneSignInInfo:{recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return y}return r?Object.assign(y,{captchaResp:h}):Object.assign(y,{captchaResponse:h}),Object.assign(y,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(y,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),y}async function As(n,t,e,r,o){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await ki(n,t,e,e==="getOobCode");return r(n,c)}else return r(n,t).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await ki(n,t,e,e==="getOobCode");return r(n,h)}else return Promise.reject(c)})}/**
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
*/function Il(n,t){const e=Os(n,"auth");if(e.isInitialized()){const r=e.getImmediate(),o=e.getOptions();if(Qt(o,t??{}))return r;ct(r,"already-initialized")}return e.initialize({options:t})}function El(n,t){const e=t?.persistence||[],r=(Array.isArray(e)?e:[e]).map(Et);t?.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t?.popupRedirectResolver)}function Tl(n,t,e){const r=$t(n);A(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!1,c=Po(t),{host:h,port:y}=Sl(t),v=y===null?"":`:${y}`,I={url:`${c}//${h}${v}/`},S=Object.freeze({host:h,port:y,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){A(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),A(Qt(I,r.config.emulator)&&Qt(S,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=I,r.emulatorConfig=S,r.settings.appVerificationDisabledForTesting=!0,ye(h)?(Cn(`${c}//${h}${v}`),Rn("Auth",!0)):Al()}function Po(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Sl(n){const t=Po(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:Ci(r.substr(c.length+1))}}else{const[c,h]=r.split(":");return{host:c,port:Ci(h)}}}function Ci(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Al(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
*/class Hn{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return It("not implemented")}_getIdTokenResponse(t){return It("not implemented")}_linkToIdToken(t,e){return It("not implemented")}_getReauthenticationResolver(t){return It("not implemented")}}async function kl(n,t){return vt(n,"POST","/v1/accounts:signUp",t)}/**
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
*/async function Cl(n,t){return Je(n,"POST","/v1/accounts:signInWithPassword",kt(n,t))}async function Oo(n,t){return vt(n,"POST","/v1/accounts:sendOobCode",kt(n,t))}async function Rl(n,t){return Oo(n,t)}async function Nl(n,t){return Oo(n,t)}/**
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
*/async function Pl(n,t){return Je(n,"POST","/v1/accounts:signInWithEmailLink",kt(n,t))}async function Ol(n,t){return Je(n,"POST","/v1/accounts:signInWithEmailLink",kt(n,t))}/**
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
*/class $e extends Hn{constructor(t,e,r,o=null){super("password",r),this._email=t,this._password=e,this._tenantId=o}static _fromEmailAndPassword(t,e){return new $e(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new $e(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e?.email&&e?.password){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return As(t,e,"signInWithPassword",Cl);case"emailLink":return Pl(t,{email:this._email,oobCode:this._password});default:ct(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const r={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return As(t,r,"signUpPassword",kl);case"emailLink":return Ol(t,{idToken:e,email:this._email,oobCode:this._password});default:ct(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
*/async function pe(n,t){return Je(n,"POST","/v1/accounts:signInWithIdp",kt(n,t))}/**
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
*/const Dl="http://localhost";class se extends Hn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new se(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):ct("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:o,...c}=e;if(!r||!o)return null;const h=new se(r,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(t){const e=this.buildRequest();return pe(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,pe(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,pe(t,e)}buildRequest(){const t={requestUri:Dl,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=ze(e)}return t}}/**
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
*/function Ll(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ml(n){const t=Le(Me(n)).link,e=t?Le(Me(t)).deep_link_id:null,r=Le(Me(n)).deep_link_id;return(r?Le(Me(r)).link:null)||r||e||t||n}class $n{constructor(t){const e=Le(Me(t)),r=e.apiKey??null,o=e.oobCode??null,c=Ll(e.mode??null);A(r&&o&&c,"argument-error"),this.apiKey=r,this.operation=c,this.code=o,this.continueUrl=e.continueUrl??null,this.languageCode=e.lang??null,this.tenantId=e.tenantId??null}static parseLink(t){const e=Ml(t);try{return new $n(e)}catch{return null}}}/**
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
*/class _e{constructor(){this.providerId=_e.PROVIDER_ID}static credential(t,e){return $e._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=$n.parseLink(e);return A(r,"argument-error"),$e._fromEmailAndCode(t,r.code,r.tenantId)}}_e.PROVIDER_ID="password";_e.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_e.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
*/class Do{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
*/class Xe extends Do{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
*/class Mt extends Xe{constructor(){super("facebook.com")}static credential(t){return se._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mt.credential(t.oauthAccessToken)}catch{return null}}}Mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mt.PROVIDER_ID="facebook.com";/**
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
*/class Ut extends Xe{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return se._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return Ut.credential(e,r)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
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
*/class xt extends Xe{constructor(){super("github.com")}static credential(t){return se._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return xt.credential(t.oauthAccessToken)}catch{return null}}}xt.GITHUB_SIGN_IN_METHOD="github.com";xt.PROVIDER_ID="github.com";/**
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
*/class jt extends Xe{constructor(){super("twitter.com")}static credential(t,e){return se._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return jt.credential(e,r)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
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
*/async function Ul(n,t){return Je(n,"POST","/v1/accounts:signUp",kt(n,t))}/**
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
*/class ne{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,o=!1){const c=await ot._fromIdTokenResponse(t,r,o),h=Ri(r);return new ne({user:c,providerId:h,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const o=Ri(r);return new ne({user:t,providerId:o,_tokenResponse:r,operationType:e})}}function Ri(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
*/class ks extends _t{constructor(t,e,r,o){super(e.code,e.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,ks.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,o){return new ks(t,e,r,o)}}function Lo(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ks._fromErrorAndOperation(n,o,t,r):o})}async function xl(n,t,e=!1){const r=await me(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return ne._forOperation(n,"link",r)}/**
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
*/async function jl(n,t,e=!1){const{auth:r}=n;if(Q(r.app))return Promise.reject(Tt(r));const o="reauthenticate";try{const c=await me(n,Lo(r,o,t,n),e);A(c.idToken,r,"internal-error");const h=Vn(c.idToken);A(h,r,"internal-error");const{sub:y}=h;return A(n.uid===y,r,"user-mismatch"),ne._forOperation(n,o,c)}catch(c){throw c?.code==="auth/user-not-found"&&ct(r,"user-mismatch"),c}}/**
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
*/async function Mo(n,t,e=!1){if(Q(n.app))return Promise.reject(Tt(n));const r="signIn",o=await Lo(n,r,t),c=await ne._fromIdTokenResponse(n,r,o);return e||await n._updateCurrentUser(c.user),c}async function Fl(n,t){return Mo($t(n),t)}/**
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
*/function Vl(n,t,e){A(e.url?.length>0,n,"invalid-continue-uri"),A(typeof e.dynamicLinkDomain>"u"||e.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),A(typeof e.linkDomain>"u"||e.linkDomain.length>0,n,"invalid-hosting-link-domain"),t.continueUrl=e.url,t.dynamicLinkDomain=e.dynamicLinkDomain,t.linkDomain=e.linkDomain,t.canHandleCodeInApp=e.handleCodeInApp,e.iOS&&(A(e.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),t.iOSBundleId=e.iOS.bundleId),e.android&&(A(e.android.packageName.length>0,n,"missing-android-pkg-name"),t.androidInstallApp=e.android.installApp,t.androidMinimumVersionCode=e.android.minimumVersion,t.androidPackageName=e.android.packageName)}/**
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
*/async function Uo(n){const t=$t(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Od(n,t,e){const r=$t(n);await As(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Nl)}async function Dd(n,t,e){if(Q(n.app))return Promise.reject(Tt(n));const r=$t(n),o=await As(r,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ul).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&Uo(n),h}),c=await ne._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Ld(n,t,e){return Q(n.app)?Promise.reject(Tt(n)):Fl(st(n),_e.credential(t,e)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Uo(n),r})}async function Md(n,t){const e=st(n),r={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};t&&Vl(e.auth,r,t);const{email:o}=await Rl(e.auth,r);o!==n.email&&await n.reload()}/**
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
*/async function Bl(n,t){return vt(n,"POST","/v1/accounts:update",t)}/**
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
*/async function Ud(n,{displayName:t,photoURL:e}){if(t===void 0&&e===void 0)return;const r=st(n),o={idToken:await r.getIdToken(),displayName:t,photoUrl:e,returnSecureToken:!0},c=await me(r,Bl(r.auth,o));r.displayName=c.displayName||null,r.photoURL=c.photoUrl||null;const h=r.providerData.find(({providerId:y})=>y==="password");h&&(h.displayName=r.displayName,h.photoURL=r.photoURL),await r._updateTokensIfNecessary(c)}function Hl(n,t,e,r){return st(n).onIdTokenChanged(t,e,r)}function $l(n,t,e){return st(n).beforeAuthStateChanged(t,e)}function xd(n,t,e,r){return st(n).onAuthStateChanged(t,e,r)}function jd(n){return st(n).signOut()}const Cs="__sak";/**
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
*/class xo{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Cs,"1"),this.storage.removeItem(Cs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
*/const Wl=1e3,zl=10;class jo extends xo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ko(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),o=this.localCache[e];r!==o&&t(e,o,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((h,y,v)=>{this.notifyListeners(h,v)});return}const r=t.key;e?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(r);!e&&this.localCache[r]===h||this.notifyListeners(r,h)},c=this.storage.getItem(r);cl()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,zl):o()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},Wl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}jo.type="LOCAL";const Gl=jo;/**
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
*/class Fo extends xo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Fo.type="SESSION";const Vo=Fo;/**
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
*/function ql(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
*/class Ls{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(o=>o.isListeningto(t));if(e)return e;const r=new Ls(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:o,data:c}=e.data,h=this.handlersMap[o];if(!h?.size)return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const y=Array.from(h).map(async I=>I(e.origin,c)),v=await ql(y);e.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:v})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ls.receivers=[];/**
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
*/function Wn(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
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
*/class Kl{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((y,v)=>{const I=Wn("",20);o.port1.start();const S=setTimeout(()=>{v(new Error("unsupported_event"))},r);h={messageChannel:o,onMessage(E){const R=E;if(R.data.eventId===I)switch(R.data.status){case"ack":clearTimeout(S),c=setTimeout(()=>{v(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),y(R.data.response);break;default:clearTimeout(S),clearTimeout(c),v(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:t,eventId:I,data:e},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
*/function mt(){return window}function Jl(n){mt().location.href=n}/**
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
*/function Bo(){return typeof mt().WorkerGlobalScope<"u"&&typeof mt().importScripts=="function"}async function Xl(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yl(){return navigator?.serviceWorker?.controller||null}function Zl(){return Bo()?self:null}/**
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
*/const Ho="firebaseLocalStorageDb",Ql=1,Rs="firebaseLocalStorage",$o="fbase_key";class Ye{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Ms(n,t){return n.transaction([Rs],t?"readwrite":"readonly").objectStore(Rs)}function tu(){const n=indexedDB.deleteDatabase(Ho);return new Ye(n).toPromise()}function An(){const n=indexedDB.open(Ho,Ql);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Rs,{keyPath:$o})}catch(o){e(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Rs)?t(r):(r.close(),await tu(),t(await An()))})})}async function Ni(n,t,e){const r=Ms(n,!0).put({[$o]:t,value:e});return new Ye(r).toPromise()}async function eu(n,t){const e=Ms(n,!1).get(t),r=await new Ye(e).toPromise();return r===void 0?null:r.value}function Pi(n,t){const e=Ms(n,!0).delete(t);return new Ye(e).toPromise()}const su=800,nu=3;class Wo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await An(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>nu)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ls._getInstance(Zl()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Xl(),!this.activeServiceWorker)return;this.sender=new Kl(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Yl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await An();return await Ni(t,Cs,"1"),await Pi(t,Cs),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ni(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>eu(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Pi(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const c=Ms(o,!1).getAll();return new Ye(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:o,value:c}of t)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),e.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),e.push(o));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),su)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wo.type="LOCAL";const ru=Wo;new Ke(3e4,6e4);/**
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
*/function iu(n,t){return t?Et(t):(A(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
*/class zn extends Hn{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return pe(t,this._buildIdpRequest())}_linkToIdToken(t,e){return pe(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return pe(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function ou(n){return Mo(n.auth,new zn(n),n.bypassAuthState)}function au(n){const{auth:t,user:e}=n;return A(e,t,"internal-error"),jl(e,new zn(n),n.bypassAuthState)}async function cu(n){const{auth:t,user:e}=n;return A(e,t,"internal-error"),xl(e,new zn(n),n.bypassAuthState)}/**
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
*/class zo{constructor(t,e,r,o,c=!1){this.auth=t,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:o,tenantId:c,error:h,type:y}=t;if(h){this.reject(h);return}const v={auth:this.auth,requestUri:e,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(y)(v))}catch(I){this.reject(I)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ou;case"linkViaPopup":case"linkViaRedirect":return cu;case"reauthViaPopup":case"reauthViaRedirect":return au;default:ct(this.auth,"internal-error")}}resolve(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
*/const hu=new Ke(2e3,1e4);class le extends zo{constructor(t,e,r,o,c){super(t,e,o,c),this.provider=r,this.authWindow=null,this.pollId=null,le.currentPopupAction&&le.currentPopupAction.cancel(),le.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return A(t,this.auth,"internal-error"),t}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const t=Wn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,le.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,hu.get())};t()}}le.currentPopupAction=null;/**
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
*/const lu="pendingRedirect",_s=new Map;class uu extends zo{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=_s.get(this.auth._key());if(!t){try{const e=await du(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}_s.set(this.auth._key(),t)}return this.bypassAuthState||_s.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function du(n,t){const e=gu(t),r=pu(n);if(!await r._isAvailable())return!1;const o=await r._get(e)==="true";return await r._remove(e),o}function fu(n,t){_s.set(n._key(),t)}function pu(n){return Et(n._redirectPersistence)}function gu(n){return ys(lu,n.config.apiKey,n.name)}async function mu(n,t,e=!1){if(Q(n.app))return Promise.reject(Tt(n));const r=$t(n),o=iu(r,t),c=await new uu(r,o,e).execute();return c&&!e&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,t)),c}/**
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
*/const yu=600*1e3;class _u{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!vu(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){if(t.error&&!Go(t)){const r=t.error.code?.split("auth/")[1]||"internal-error";e.onError(gt(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=yu&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oi(t))}saveEventToCache(t){this.cachedEventUids.add(Oi(t)),this.lastProcessedEventTime=Date.now()}}function Oi(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Go({type:n,error:t}){return n==="unknown"&&t?.code==="auth/no-auth-event"}function vu(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Go(n);default:return!1}}/**
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
*/async function wu(n,t={}){return vt(n,"GET","/v1/projects",t)}/**
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
*/const bu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Iu=/^https?/;async function Eu(n){if(n.config.emulator)return;const{authorizedDomains:t}=await wu(n);for(const e of t)try{if(Tu(e))return}catch{}ct(n,"unauthorized-domain")}function Tu(n){const t=Tn(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&c.hostname===r}if(!Iu.test(e))return!1;if(bu.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
*/const Su=new Ke(3e4,6e4);function Di(){const n=mt().___jsl;if(n?.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Au(n){return new Promise((t,e)=>{function r(){Di(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Di(),e(gt(n,"network-request-failed"))},timeout:Su.get()})}if(mt().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(mt().gapi?.load)r();else{const o=yl("iframefcb");return mt()[o]=()=>{gapi.load?r():e(gt(n,"network-request-failed"))},Ro(`${ml()}?onload=${o}`).catch(c=>e(c))}}).catch(t=>{throw vs=null,t})}let vs=null;function ku(n){return vs=vs||Au(n),vs}/**
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
*/const Cu=new Ke(5e3,15e3),Ru="__/auth/iframe",Nu="emulator/auth/iframe",Pu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ou=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Du(n){const t=n.config;A(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Fn(t,Nu):`https://${n.config.authDomain}/${Ru}`,r={apiKey:t.apiKey,appName:n.name,v:re},o=Ou.get(n.config.apiHost);o&&(r.eid=o);const c=n._getFrameworks();return c.length&&(r.fw=c.join(",")),`${e}?${ze(r).slice(1)}`}async function Lu(n){const t=await ku(n),e=mt().gapi;return A(e,n,"internal-error"),t.open({where:document.body,url:Du(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pu,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const h=gt(n,"network-request-failed"),y=mt().setTimeout(()=>{c(h)},Cu.get());function v(){mt().clearTimeout(y),o(r)}r.ping(v).then(v,()=>{c(h)})}))}/**
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
*/const Mu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Uu=500,xu=600,ju="_blank",Fu="http://localhost";class Li{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vu(n,t,e,r=Uu,o=xu){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let y="";const v={...Mu,width:r.toString(),height:o.toString(),top:c,left:h},I=X().toLowerCase();e&&(y=Io(I)?ju:e),wo(I)&&(t=t||Fu,v.scrollbars="yes");const S=Object.entries(v).reduce((R,[U,L])=>`${R}${U}=${L},`,"");if(al(I)&&y!=="_self")return Bu(t||"",y),new Li(null);const E=window.open(t||"",y,S);A(E,n,"popup-blocked");try{E.focus()}catch{}return new Li(E)}function Bu(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
*/const Hu="__/auth/handler",$u="emulator/auth/handler",Wu=encodeURIComponent("fac");async function Mi(n,t,e,r,o,c){A(n.config.authDomain,n,"auth-domain-config-required"),A(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:re,eventId:o};if(t instanceof Do){t.setDefaultLanguage(n.languageCode),h.providerId=t.providerId||"",Ja(t.getCustomParameters())||(h.customParameters=JSON.stringify(t.getCustomParameters()));for(const[S,E]of Object.entries({}))h[S]=E}if(t instanceof Xe){const S=t.getScopes().filter(E=>E!=="");S.length>0&&(h.scopes=S.join(","))}n.tenantId&&(h.tid=n.tenantId);const y=h;for(const S of Object.keys(y))y[S]===void 0&&delete y[S];const v=await n._getAppCheckToken(),I=v?`#${Wu}=${encodeURIComponent(v)}`:"";return`${zu(n)}?${ze(y).slice(1)}${I}`}function zu({config:n}){return n.emulator?Fn(n,$u):`https://${n.authDomain}/${Hu}`}/**
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
*/const mn="webStorageSupport";class Gu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vo,this._completeRedirectFn=mu,this._overrideRedirectResult=fu}async _openPopup(t,e,r,o){At(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const c=await Mi(t,e,r,Tn(),o);return Vu(t,c,Wn())}async _openRedirect(t,e,r,o){await this._originValidation(t);const c=await Mi(t,e,r,Tn(),o);return Jl(c),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:o,promise:c}=this.eventManagers[e];return o?Promise.resolve(o):(At(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await Lu(t),r=new _u(t);return e.register("authEvent",o=>(A(o?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(mn,{type:mn},r=>{const o=r?.[0]?.[mn];o!==void 0&&e(!!o),ct(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Eu(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return ko()||bo()||Bn()}}const qu=Gu;var Ui="@firebase/auth",xi="1.11.0";/**
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
*/class Ku{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
*/function Ju(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Xu(n){te(new Bt("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:h,authDomain:y}=r.options;A(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const v={apiKey:h,authDomain:y,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Co(n)},I=new fl(r,o,c,v);return El(I,e),I},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),te(new Bt("auth-internal",t=>{const e=$t(t.getProvider("auth").getImmediate());return(r=>new Ku(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),pt(Ui,xi,Ju(n)),pt(Ui,xi,"esm2020")}/**
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
*/const Yu=300,Zu=Xi("authIdTokenMaxAge")||Yu;let ji=null;const Qu=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>Zu)return;const o=e?.token;ji!==o&&(ji=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function td(n=On()){const t=Os(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Il(n,{popupRedirectResolver:qu,persistence:[ru,Gl,Vo]}),r=Xi("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const h=Qu(c.toString());$l(e,h,()=>h(e.currentUser)),Hl(e,y=>h(y))}}const o=qi("auth");return o&&Tl(e,`http://${o}`),e}function ed(){return document.getElementsByTagName("head")?.[0]??document}pl({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=o=>{const c=gt("internal-error");c.customData=o,e(c)},r.type="text/javascript",r.charset="UTF-8",ed().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Xu("Browser");/**
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
*/const qo="firebasestorage.googleapis.com",sd="storageBucket",nd=120*1e3,rd=600*1e3;/**
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
*/class wt extends _t{constructor(t,e,r=0){super(yn(t),`Firebase Storage: ${e} (${yn(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,wt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return yn(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var yt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(yt||(yt={}));function yn(n){return"storage/"+n}function id(){const n="An unknown error occurred, please check the error payload for server response.";return new wt(yt.UNKNOWN,n)}function od(){return new wt(yt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ad(){return new wt(yt.CANCELED,"User canceled the upload/download.")}function cd(n){return new wt(yt.INVALID_URL,"Invalid URL '"+n+"'.")}function hd(n){return new wt(yt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Fi(n){return new wt(yt.INVALID_ARGUMENT,n)}function Ko(){return new wt(yt.APP_DELETED,"The Firebase app was deleted.")}function ld(n){return new wt(yt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
*/class at{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=at.makeFromUrl(t,e)}catch{return new at(t,"")}if(r.path==="")return r;throw hd(t)}static makeFromUrl(t,e){let r=null;const o="([A-Za-z0-9.\\-_]+)";function c(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const h="(/(.*))?$",y=new RegExp("^gs://"+o+h,"i"),v={bucket:1,path:3};function I(F){F.path_=decodeURIComponent(F.path)}const S="v[A-Za-z0-9_]+",E=e.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",U=new RegExp(`^https?://${E}/${S}/b/${o}/o${R}`,"i"),L={bucket:1,path:3},M=e===qo?"(?:storage.googleapis.com|storage.cloud.google.com)":e,C="([^?#]*)",B=new RegExp(`^https?://${M}/${o}/${C}`,"i"),$=[{regex:y,indices:v,postModify:c},{regex:U,indices:L,postModify:I},{regex:B,indices:{bucket:1,path:2},postModify:I}];for(let F=0;F<$.length;F++){const nt=$[F],tt=nt.regex.exec(t);if(tt){const Y=tt[nt.indices.bucket];let g=tt[nt.indices.path];g||(g=""),r=new at(Y,g),nt.postModify(r);break}}if(r==null)throw cd(t);return r}}class ud{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
*/function dd(n,t,e){let r=1,o=null,c=null,h=!1,y=0;function v(){return y===2}let I=!1;function S(...C){I||(I=!0,t.apply(null,C))}function E(C){o=setTimeout(()=>{o=null,n(U,v())},C)}function R(){c&&clearTimeout(c)}function U(C,...B){if(I){R();return}if(C){R(),S.call(null,C,...B);return}if(v()||h){R(),S.call(null,C,...B);return}r<64&&(r*=2);let $;y===1?(y=2,$=0):$=(r+Math.random())*1e3,E($)}let L=!1;function M(C){L||(L=!0,R(),!I&&(o!==null?(C||(y=2),clearTimeout(o),E(0)):C||(y=1)))}return E(0),c=setTimeout(()=>{h=!0,M(!0)},e),M}function fd(n){n(!1)}/**
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
*/function pd(n){return n!==void 0}function Vi(n,t,e,r){if(r<t)throw Fi(`Invalid value for '${n}'. Expected ${t} or greater.`);if(r>e)throw Fi(`Invalid value for '${n}'. Expected ${e} or less.`)}function gd(n){const t=encodeURIComponent;let e="?";for(const r in n)if(n.hasOwnProperty(r)){const o=t(r)+"="+t(n[r]);e=e+o+"&"}return e=e.slice(0,-1),e}var Ns;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ns||(Ns={}));/**
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
*/function md(n,t){const e=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,o=t.indexOf(n)!==-1;return e||r||o}/**
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
*/class yd{constructor(t,e,r,o,c,h,y,v,I,S,E,R=!0,U=!1){this.url_=t,this.method_=e,this.headers_=r,this.body_=o,this.successCodes_=c,this.additionalRetryCodes_=h,this.callback_=y,this.errorCallback_=v,this.timeout_=I,this.progressCallback_=S,this.connectionFactory_=E,this.retry=R,this.isUsingEmulator=U,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((L,M)=>{this.resolve_=L,this.reject_=M,this.start_()})}start_(){const t=(r,o)=>{if(o){r(!1,new ps(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const h=y=>{const v=y.loaded,I=y.lengthComputable?y.total:-1;this.progressCallback_!==null&&this.progressCallback_(v,I)};this.progressCallback_!==null&&c.addUploadProgressListener(h),c.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(h),this.pendingConnection_=null;const y=c.getErrorCode()===Ns.NO_ERROR,v=c.getStatus();if(!y||md(v,this.additionalRetryCodes_)&&this.retry){const S=c.getErrorCode()===Ns.ABORT;r(!1,new ps(!1,null,S));return}const I=this.successCodes_.indexOf(v)!==-1;r(!0,new ps(I,c))})},e=(r,o)=>{const c=this.resolve_,h=this.reject_,y=o.connection;if(o.wasSuccessCode)try{const v=this.callback_(y,y.getResponse());pd(v)?c(v):c()}catch(v){h(v)}else if(y!==null){const v=id();v.serverResponse=y.getErrorText(),this.errorCallback_?h(this.errorCallback_(y,v)):h(v)}else if(o.canceled){const v=this.appDelete_?Ko():ad();h(v)}else{const v=od();h(v)}};this.canceled_?e(!1,new ps(!1,null,!0)):this.backoffId_=dd(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&fd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ps{constructor(t,e,r){this.wasSuccessCode=t,this.connection=e,this.canceled=!!r}}function _d(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function vd(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function wd(n,t){t&&(n["X-Firebase-GMPID"]=t)}function bd(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function Id(n,t,e,r,o,c,h=!0,y=!1){const v=gd(n.urlParams),I=n.url+v,S=Object.assign({},n.headers);return wd(S,t),_d(S,e),vd(S,c),bd(S,r),new yd(I,n.method,S,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h,y)}/**
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
*/function Ed(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function Td(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
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
*/class Ps{constructor(t,e){this._service=t,e instanceof at?this._location=e:this._location=at.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Ps(t,e)}get root(){const t=new at(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Td(this._location.path)}get storage(){return this._service}get parent(){const t=Ed(this._location.path);if(t===null)return null;const e=new at(this._location.bucket,t);return new Ps(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw ld(t)}}function Bi(n,t){const e=t?.[sd];return e==null?null:at.makeFromBucketSpec(e,n)}function Sd(n,t,e,r={}){n.host=`${t}:${e}`;const o=ye(t);o&&(Cn(`https://${n.host}/b`),Rn("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:c}=r;c&&(n._overrideAuthToken=typeof c=="string"?c:Yi(c,n.app.options.projectId))}class Ad{constructor(t,e,r,o,c,h=!1){this.app=t,this._authProvider=e,this._appCheckProvider=r,this._url=o,this._firebaseVersion=c,this._isUsingEmulator=h,this._bucket=null,this._host=qo,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=nd,this._maxUploadRetryTime=rd,this._requests=new Set,o!=null?this._bucket=at.makeFromBucketSpec(o,this._host):this._bucket=Bi(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=at.makeFromBucketSpec(this._url,t):this._bucket=Bi(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Vi("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Vi("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){if(Q(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ps(this,t)}_makeRequest(t,e,r,o,c=!0){if(this._deleted)return new ud(Ko());{const h=Id(t,this._appId,r,o,e,this._firebaseVersion,c,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(t,e){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,r,o).getPromise()}}const Hi="@firebase/storage",$i="0.14.0";/**
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
*/const Jo="storage";function kd(n=On(),t){n=st(n);const e=Os(n,Jo).getImmediate({identifier:t}),r=Ki("storage");return r&&Cd(e,...r),e}function Cd(n,t,e,r={}){Sd(n,t,e,r)}function Rd(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Ad(e,r,o,t,re)}function Nd(){te(new Bt(Jo,Rd,"PUBLIC").setMultipleInstances(!0)),pt(Hi,$i,""),pt(Hi,$i,"esm2020")}Nd();const Pd={apiKey:"AIzaSyC0qVQm59S1_OFJcYLr2ILyGB9m-SoxHro",authDomain:"holysmokas-4ef36.firebaseapp.com",projectId:"holysmokas-4ef36",storageBucket:"holysmokas-4ef36.firebasestorage.app",messagingSenderId:"236391401471",appId:"1:236391401471:web:16780dc40257205caf09ca",measurementId:"G-LRKVZGKNLD"},Gn=to(Pd);Uh(Gn);const Fd=td(Gn);kd(Gn);export{jd as B,Md as F,Fd as H,Od as M,Dd as U,Ud as V,xd as j,Ld as x};
