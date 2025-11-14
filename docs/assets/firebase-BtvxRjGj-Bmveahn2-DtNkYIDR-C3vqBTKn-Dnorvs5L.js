const ka=()=>{};var zs={};/**
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
*/const $r=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);o<128?t[e++]=o:o<2048?(t[e++]=o>>6|192,t[e++]=o&63|128):(o&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=o>>18|240,t[e++]=o>>12&63|128,t[e++]=o>>6&63|128,t[e++]=o&63|128):(t[e++]=o>>12|224,t[e++]=o>>6&63|128,t[e++]=o&63|128)}return t},Ca=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const o=n[e++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const c=n[e++];t[s++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=n[e++],h=n[e++],y=n[e++],w=((o&7)<<18|(c&63)<<12|(h&63)<<6|y&63)-65536;t[s++]=String.fromCharCode(55296+(w>>10)),t[s++]=String.fromCharCode(56320+(w&1023))}else{const c=n[e++],h=n[e++];t[s++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return t.join("")},Wr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<n.length;o+=3){const c=n[o],h=o+1<n.length,y=h?n[o+1]:0,w=o+2<n.length,b=w?n[o+2]:0,S=c>>2,E=(c&3)<<4|y>>4;let R=(y&15)<<2|b>>6,U=b&63;w||(U=64,h||(R=64)),s.push(e[S],e[E],e[R],e[U])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray($r(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ca(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<n.length;){const c=e[n.charAt(o++)],h=o<n.length?e[n.charAt(o)]:0;++o;const y=o<n.length?e[n.charAt(o)]:64;++o;const w=o<n.length?e[n.charAt(o)]:64;if(++o,c==null||h==null||y==null||w==null)throw new Ra;const b=c<<2|h>>4;if(s.push(b),y!==64){const S=h<<4&240|y>>2;if(s.push(S),w!==64){const E=y<<6&192|w;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ra extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Na=function(n){const t=$r(n);return Wr.encodeByteArray(t,!0)},wi=function(n){return Na(n).replace(/\./g,"")},zr=function(n){try{return Wr.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
*/function Pa(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
*/const Oa=()=>Pa().__FIREBASE_DEFAULTS__,Da=()=>{if(typeof process>"u"||typeof zs>"u")return;const n=zs.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},La=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&zr(n[1]);return t&&JSON.parse(t)},An=()=>{try{return ka()||Oa()||Da()||La()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Gr=n=>An()?.emulatorHosts?.[n],qr=n=>{const t=Gr(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},Kr=()=>An()?.config,Jr=n=>An()?.[`_${n}`];/**
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
*/class Ma{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}/**
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
*/function ye(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function kn(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
*/function Xr(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",o=n.iat||0,c=n.sub||n.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...n};return[wi(JSON.stringify(e)),wi(JSON.stringify(h)),""].join(".")}const Ue={};function Ua(){const n={prod:[],emulator:[]};for(const t of Object.keys(Ue))Ue[t]?n.emulator.push(t):n.prod.push(t);return n}function xa(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Gs=!1;function Cn(n,t){if(typeof window>"u"||typeof document>"u"||!ye(window.location.host)||Ue[n]===t||Ue[n]||Gs)return;Ue[n]=t;function e(E){return`__firebase__banner__${E}`}const s="__firebase__banner",o=Ua().prod.length>0;function c(){const E=document.getElementById(s);E&&E.remove()}function h(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function y(E,R){E.setAttribute("width","24"),E.setAttribute("id",R),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function w(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{Gs=!0,c()},E}function b(E,R){E.setAttribute("id",R),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function S(){const E=xa(s),R=e("text"),U=document.getElementById(R)||document.createElement("span"),L=e("learnmore"),M=document.getElementById(L)||document.createElement("a"),C=e("preprendIcon"),B=document.getElementById(C)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const $=E.element;h($),b(M,L);const F=w();y(B,C),$.append(B,U,M,F),document.body.appendChild($)}o?(U.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
*/function X(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ja(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(X())}function Fa(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Va(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ba(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ha(){const n=X();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function $a(){try{return typeof indexedDB=="object"}catch{return!1}}function Wa(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},o.onupgradeneeded=()=>{e=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(e){t(e)}})}/**
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
*/const za="FirebaseError";class _t extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=za,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,We.prototype.create)}}class We{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},o=`${this.service}/${t}`,c=this.errors[t],h=c?Ga(c,s):"Error",y=`${this.serviceName}: ${h} (${o}).`;return new _t(o,y,s)}}function Ga(n,t){return n.replace(qa,(e,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const qa=/\{\$([^}]+)}/g;function Ka(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Qt(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const o of e){if(!s.includes(o))return!1;const c=n[o],h=t[o];if(qs(c)&&qs(h)){if(!Qt(c,h))return!1}else if(c!==h)return!1}for(const o of s)if(!e.includes(o))return!1;return!0}function qs(n){return n!==null&&typeof n=="object"}/**
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
*/function ze(n){const t=[];for(const[e,s]of Object.entries(n))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Le(n){const t={};return n.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[s,o]=e.split("=");t[decodeURIComponent(s)]=decodeURIComponent(o)}}),t}function Me(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Ja(n,t){const e=new Xa(n,t);return e.subscribe.bind(e)}class Xa{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,s){let o;if(t===void 0&&e===void 0&&s===void 0)throw new Error("Missing Observer.");Ya(t,["next","error","complete"])?o=t:o={next:t,error:e,complete:s},o.next===void 0&&(o.next=an),o.error===void 0&&(o.error=an),o.complete===void 0&&(o.complete=an);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ya(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function an(){}/**
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
*/function it(n){return n&&n._delegate?n._delegate:n}class Bt{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
*/class Za{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new Ma;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:e});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),s=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(tc(t))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(e);try{const c=this.getOrInitializeService({instanceIdentifier:o});s.resolve(c)}catch{}}}}clearInstance(t=Kt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Kt){return this.instances.has(t)}getOptions(t=Kt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[c,h]of this.instancesDeferred.entries()){const y=this.normalizeInstanceIdentifier(c);s===y&&h.resolve(o)}return o}onInit(t,e){const s=this.normalizeInstanceIdentifier(e),o=this.onInitCallbacks.get(s)??new Set;o.add(t),this.onInitCallbacks.set(s,o);const c=this.instances.get(s);return c&&t(c,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const o of s)try{o(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Qa(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Kt){return this.component?this.component.multipleInstances?t:Kt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qa(n){return n===Kt?void 0:n}function tc(n){return n.instantiationMode==="EAGER"}/**
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
*/class ec{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Za(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
*/var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const ic={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},nc=D.INFO,sc={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},rc=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),o=sc[t];if(o)console[o](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Rn{constructor(t){this.name=t,this._logLevel=nc,this._logHandler=rc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in D))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ic[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...t),this._logHandler(this,D.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...t),this._logHandler(this,D.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,D.INFO,...t),this._logHandler(this,D.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,D.WARN,...t),this._logHandler(this,D.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...t),this._logHandler(this,D.ERROR,...t)}}const oc=(n,t)=>t.some(e=>n instanceof e);let Ks,Js;function ac(){return Ks||(Ks=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cc(){return Js||(Js=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yr=new WeakMap,yn=new WeakMap,Zr=new WeakMap,cn=new WeakMap,Nn=new WeakMap;function hc(n){const t=new Promise((e,s)=>{const o=()=>{n.removeEventListener("success",c),n.removeEventListener("error",h)},c=()=>{e(Ft(n.result)),o()},h=()=>{s(n.error),o()};n.addEventListener("success",c),n.addEventListener("error",h)});return t.then(e=>{e instanceof IDBCursor&&Yr.set(e,n)}).catch(()=>{}),Nn.set(t,n),t}function lc(n){if(yn.has(n))return;const t=new Promise((e,s)=>{const o=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",h),n.removeEventListener("abort",h)},c=()=>{e(),o()},h=()=>{s(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",c),n.addEventListener("error",h),n.addEventListener("abort",h)});yn.set(n,t)}let _n={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return yn.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Zr.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ft(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function uc(n){_n=n(_n)}function dc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(hn(this),t,...e);return Zr.set(s,t.sort?t.sort():[t]),Ft(s)}:cc().includes(n)?function(...t){return n.apply(hn(this),t),Ft(Yr.get(this))}:function(...t){return Ft(n.apply(hn(this),t))}}function fc(n){return typeof n=="function"?dc(n):(n instanceof IDBTransaction&&lc(n),oc(n,ac())?new Proxy(n,_n):n)}function Ft(n){if(n instanceof IDBRequest)return hc(n);if(cn.has(n))return cn.get(n);const t=fc(n);return t!==n&&(cn.set(n,t),Nn.set(t,n)),t}const hn=n=>Nn.get(n);function pc(n,t,{blocked:e,upgrade:s,blocking:o,terminated:c}={}){const h=indexedDB.open(n,t),y=Ft(h);return s&&h.addEventListener("upgradeneeded",w=>{s(Ft(h.result),w.oldVersion,w.newVersion,Ft(h.transaction),w)}),e&&h.addEventListener("blocked",w=>e(w.oldVersion,w.newVersion,w)),y.then(w=>{c&&w.addEventListener("close",()=>c()),o&&w.addEventListener("versionchange",b=>o(b.oldVersion,b.newVersion,b))}).catch(()=>{}),y}const gc=["get","getKey","getAll","getAllKeys","count"],mc=["put","add","delete","clear"],ln=new Map;function Xs(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ln.get(t))return ln.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,o=mc.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(o||gc.includes(e)))return;const c=async function(h,...y){const w=this.transaction(h,o?"readwrite":"readonly");let b=w.store;return s&&(b=b.index(y.shift())),(await Promise.all([b[e](...y),o&&w.done]))[0]};return ln.set(t,c),c}uc(n=>({...n,get:(t,e,s)=>Xs(t,e)||n.get(t,e,s),has:(t,e)=>!!Xs(t,e)||n.has(t,e)}));/**
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
*/class yc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_c(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}else return null}).filter(t=>t).join(" ")}}function _c(n){return n.getComponent()?.type==="VERSION"}const wn="@firebase/app",Ys="0.14.4";/**
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
*/const St=new Rn("@firebase/app"),wc="@firebase/app-compat",vc="@firebase/analytics-compat",Ic="@firebase/analytics",bc="@firebase/app-check-compat",Ec="@firebase/app-check",Tc="@firebase/auth",Sc="@firebase/auth-compat",Ac="@firebase/database",kc="@firebase/data-connect",Cc="@firebase/database-compat",Rc="@firebase/functions",Nc="@firebase/functions-compat",Pc="@firebase/installations",Oc="@firebase/installations-compat",Dc="@firebase/messaging",Lc="@firebase/messaging-compat",Mc="@firebase/performance",Uc="@firebase/performance-compat",xc="@firebase/remote-config",jc="@firebase/remote-config-compat",Fc="@firebase/storage",Vc="@firebase/storage-compat",Bc="@firebase/firestore",Hc="@firebase/ai",$c="@firebase/firestore-compat",Wc="firebase",zc="12.4.0";/**
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
*/const vn="[DEFAULT]",Gc={[wn]:"fire-core",[wc]:"fire-core-compat",[Ic]:"fire-analytics",[vc]:"fire-analytics-compat",[Ec]:"fire-app-check",[bc]:"fire-app-check-compat",[Tc]:"fire-auth",[Sc]:"fire-auth-compat",[Ac]:"fire-rtdb",[kc]:"fire-data-connect",[Cc]:"fire-rtdb-compat",[Rc]:"fire-fn",[Nc]:"fire-fn-compat",[Pc]:"fire-iid",[Oc]:"fire-iid-compat",[Dc]:"fire-fcm",[Lc]:"fire-fcm-compat",[Mc]:"fire-perf",[Uc]:"fire-perf-compat",[xc]:"fire-rc",[jc]:"fire-rc-compat",[Fc]:"fire-gcs",[Vc]:"fire-gcs-compat",[Bc]:"fire-fst",[$c]:"fire-fst-compat",[Hc]:"fire-vertex","fire-js":"fire-js",[Wc]:"fire-js-all"};/**
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
*/const vi=new Map,qc=new Map,In=new Map;function Zs(n,t){try{n.container.addComponent(t)}catch(e){St.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function te(n){const t=n.name;if(In.has(t))return St.debug(`There were multiple attempts to register component ${t}.`),!1;In.set(t,n);for(const e of vi.values())Zs(e,n);for(const e of qc.values())Zs(e,n);return!0}function Pi(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Q(n){return n==null?!1:n.settings!==void 0}/**
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
*/const Kc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vt=new We("app","Firebase",Kc);/**
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
*/class Jc{constructor(t,e,s){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
*/const se=zc;function Qr(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s={name:vn,automaticDataCollectionEnabled:!0,...t},o=s.name;if(typeof o!="string"||!o)throw Vt.create("bad-app-name",{appName:String(o)});if(e||(e=Kr()),!e)throw Vt.create("no-options");const c=vi.get(o);if(c){if(Qt(e,c.options)&&Qt(s,c.config))return c;throw Vt.create("duplicate-app",{appName:o})}const h=new ec(o);for(const w of In.values())h.addComponent(w);const y=new Jc(e,s,h);return vi.set(o,y),y}function Pn(n=vn){const t=vi.get(n);if(!t&&n===vn&&Kr())return Qr();if(!t)throw Vt.create("no-app",{appName:n});return t}function pt(n,t,e){let s=Gc[n]??n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),c=t.match(/\s|\//);if(o||c){const h=[`Unable to register library "${s}" with version "${t}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&c&&h.push("and"),c&&h.push(`version name "${t}" contains illegal characters (whitespace or "/")`),St.warn(h.join(" "));return}te(new Bt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
*/const Xc="firebase-heartbeat-database",Yc=1,Be="firebase-heartbeat-store";let un=null;function to(){return un||(un=pc(Xc,Yc,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Be)}catch(e){console.warn(e)}}}}).catch(n=>{throw Vt.create("idb-open",{originalErrorMessage:n.message})})),un}async function Zc(n){try{const t=(await to()).transaction(Be),e=await t.objectStore(Be).get(eo(n));return await t.done,e}catch(t){if(t instanceof _t)St.warn(t.message);else{const e=Vt.create("idb-get",{originalErrorMessage:t?.message});St.warn(e.message)}}}async function Qs(n,t){try{const e=(await to()).transaction(Be,"readwrite");await e.objectStore(Be).put(t,eo(n)),await e.done}catch(e){if(e instanceof _t)St.warn(e.message);else{const s=Vt.create("idb-set",{originalErrorMessage:e?.message});St.warn(s.message)}}}function eo(n){return`${n.name}!${n.options.appId}`}/**
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
*/const Qc=1024,th=30;class eh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new nh(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=tr();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===e||this._heartbeatsCache.heartbeats.some(s=>s.date===e))return;if(this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats.length>th){const s=sh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){St.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=tr(),{heartbeatsToSend:e,unsentEntries:s}=ih(this._heartbeatsCache.heartbeats),o=wi(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return St.warn(t),""}}}function tr(){return new Date().toISOString().substring(0,10)}function ih(n,t=Qc){const e=[];let s=n.slice();for(const o of n){const c=e.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),er(e)>t){c.dates.pop();break}}else if(e.push({agent:o.agent,dates:[o.date]}),er(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class nh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $a()?Wa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Zc(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const e=await this.read();return Qs(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const e=await this.read();return Qs(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:[...e.heartbeats,...t.heartbeats]})}else return}}function er(n){return wi(JSON.stringify({version:2,heartbeats:n})).length}function sh(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let s=1;s<n.length;s++)n[s].date<e&&(e=n[s].date,t=s);return t}/**
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
*/function rh(n){te(new Bt("platform-logger",t=>new yc(t),"PRIVATE")),te(new Bt("heartbeat",t=>new eh(t),"PRIVATE")),pt(wn,Ys,n),pt(wn,Ys,"esm2020"),pt("fire-js","")}rh("");var oh="firebase",ah="12.4.0";/**
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
*/pt(oh,ah,"app");var ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var On;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(g,u){function f(){}f.prototype=u.prototype,g.F=u.prototype,g.prototype=new f,g.prototype.constructor=g,g.D=function(m,p,v){for(var d=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)d[Z-2]=arguments[Z];return u.prototype[p].apply(m,d)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(s,e),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(g,u,f){f||(f=0);const m=Array(16);if(typeof u=="string")for(var p=0;p<16;++p)m[p]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(p=0;p<16;++p)m[p]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=g.g[0],f=g.g[1],p=g.g[2];let v=g.g[3],d;d=u+(v^f&(p^v))+m[0]+3614090360&4294967295,u=f+(d<<7&4294967295|d>>>25),d=v+(p^u&(f^p))+m[1]+3905402710&4294967295,v=u+(d<<12&4294967295|d>>>20),d=p+(f^v&(u^f))+m[2]+606105819&4294967295,p=v+(d<<17&4294967295|d>>>15),d=f+(u^p&(v^u))+m[3]+3250441966&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(v^f&(p^v))+m[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=v+(p^u&(f^p))+m[5]+1200080426&4294967295,v=u+(d<<12&4294967295|d>>>20),d=p+(f^v&(u^f))+m[6]+2821735955&4294967295,p=v+(d<<17&4294967295|d>>>15),d=f+(u^p&(v^u))+m[7]+4249261313&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(v^f&(p^v))+m[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=v+(p^u&(f^p))+m[9]+2336552879&4294967295,v=u+(d<<12&4294967295|d>>>20),d=p+(f^v&(u^f))+m[10]+4294925233&4294967295,p=v+(d<<17&4294967295|d>>>15),d=f+(u^p&(v^u))+m[11]+2304563134&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(v^f&(p^v))+m[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=v+(p^u&(f^p))+m[13]+4254626195&4294967295,v=u+(d<<12&4294967295|d>>>20),d=p+(f^v&(u^f))+m[14]+2792965006&4294967295,p=v+(d<<17&4294967295|d>>>15),d=f+(u^p&(v^u))+m[15]+1236535329&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(p^v&(f^p))+m[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=v+(f^p&(u^f))+m[6]+3225465664&4294967295,v=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(v^u))+m[11]+643717713&4294967295,p=v+(d<<14&4294967295|d>>>18),d=f+(v^u&(p^v))+m[0]+3921069994&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^v&(f^p))+m[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=v+(f^p&(u^f))+m[10]+38016083&4294967295,v=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(v^u))+m[15]+3634488961&4294967295,p=v+(d<<14&4294967295|d>>>18),d=f+(v^u&(p^v))+m[4]+3889429448&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^v&(f^p))+m[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=v+(f^p&(u^f))+m[14]+3275163606&4294967295,v=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(v^u))+m[3]+4107603335&4294967295,p=v+(d<<14&4294967295|d>>>18),d=f+(v^u&(p^v))+m[8]+1163531501&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^v&(f^p))+m[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=v+(f^p&(u^f))+m[2]+4243563512&4294967295,v=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(v^u))+m[7]+1735328473&4294967295,p=v+(d<<14&4294967295|d>>>18),d=f+(v^u&(p^v))+m[12]+2368359562&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(f^p^v)+m[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=v+(u^f^p)+m[8]+2272392833&4294967295,v=u+(d<<11&4294967295|d>>>21),d=p+(v^u^f)+m[11]+1839030562&4294967295,p=v+(d<<16&4294967295|d>>>16),d=f+(p^v^u)+m[14]+4259657740&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^v)+m[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=v+(u^f^p)+m[4]+1272893353&4294967295,v=u+(d<<11&4294967295|d>>>21),d=p+(v^u^f)+m[7]+4139469664&4294967295,p=v+(d<<16&4294967295|d>>>16),d=f+(p^v^u)+m[10]+3200236656&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^v)+m[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=v+(u^f^p)+m[0]+3936430074&4294967295,v=u+(d<<11&4294967295|d>>>21),d=p+(v^u^f)+m[3]+3572445317&4294967295,p=v+(d<<16&4294967295|d>>>16),d=f+(p^v^u)+m[6]+76029189&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^v)+m[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=v+(u^f^p)+m[12]+3873151461&4294967295,v=u+(d<<11&4294967295|d>>>21),d=p+(v^u^f)+m[15]+530742520&4294967295,p=v+(d<<16&4294967295|d>>>16),d=f+(p^v^u)+m[2]+3299628645&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(p^(f|~v))+m[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=v+(f^(u|~p))+m[7]+1126891415&4294967295,v=u+(d<<10&4294967295|d>>>22),d=p+(u^(v|~f))+m[14]+2878612391&4294967295,p=v+(d<<15&4294967295|d>>>17),d=f+(v^(p|~u))+m[5]+4237533241&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~v))+m[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=v+(f^(u|~p))+m[3]+2399980690&4294967295,v=u+(d<<10&4294967295|d>>>22),d=p+(u^(v|~f))+m[10]+4293915773&4294967295,p=v+(d<<15&4294967295|d>>>17),d=f+(v^(p|~u))+m[1]+2240044497&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~v))+m[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=v+(f^(u|~p))+m[15]+4264355552&4294967295,v=u+(d<<10&4294967295|d>>>22),d=p+(u^(v|~f))+m[6]+2734768916&4294967295,p=v+(d<<15&4294967295|d>>>17),d=f+(v^(p|~u))+m[13]+1309151649&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~v))+m[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=v+(f^(u|~p))+m[11]+3174756917&4294967295,v=u+(d<<10&4294967295|d>>>22),d=p+(u^(v|~f))+m[2]+718787259&4294967295,p=v+(d<<15&4294967295|d>>>17),d=f+(v^(p|~u))+m[9]+3951481745&4294967295,g.g[0]=g.g[0]+u&4294967295,g.g[1]=g.g[1]+(p+(d<<21&4294967295|d>>>11))&4294967295,g.g[2]=g.g[2]+p&4294967295,g.g[3]=g.g[3]+v&4294967295}s.prototype.v=function(g,u){u===void 0&&(u=g.length);const f=u-this.blockSize,m=this.C;let p=this.h,v=0;for(;v<u;){if(p==0)for(;v<=f;)o(this,g,v),v+=this.blockSize;if(typeof g=="string"){for(;v<u;)if(m[p++]=g.charCodeAt(v++),p==this.blockSize){o(this,m),p=0;break}}else for(;v<u;)if(m[p++]=g[v++],p==this.blockSize){o(this,m),p=0;break}}this.h=p,this.o+=u},s.prototype.A=function(){var g=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);g[0]=128;for(var u=1;u<g.length-8;++u)g[u]=0;u=this.o*8;for(var f=g.length-8;f<g.length;++f)g[f]=u&255,u/=256;for(this.v(g),g=Array(16),u=0,f=0;f<4;++f)for(let m=0;m<32;m+=8)g[u++]=this.g[f]>>>m&255;return g};function c(g,u){var f=y;return Object.prototype.hasOwnProperty.call(f,g)?f[g]:f[g]=u(g)}function h(g,u){this.h=u;const f=[];let m=!0;for(let p=g.length-1;p>=0;p--){const v=g[p]|0;m&&v==u||(f[p]=v,m=!1)}this.g=f}var y={};function w(g){return-128<=g&&g<128?c(g,function(u){return new h([u|0],u<0?-1:0)}):new h([g|0],g<0?-1:0)}function b(g){if(isNaN(g)||!isFinite(g))return E;if(g<0)return C(b(-g));const u=[];let f=1;for(let m=0;g>=f;m++)u[m]=g/f|0,f*=4294967296;return new h(u,0)}function S(g,u){if(g.length==0)throw Error("number format error: empty string");if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(g.charAt(0)=="-")return C(S(g.substring(1),u));if(g.indexOf("-")>=0)throw Error('number format error: interior "-" character');const f=b(Math.pow(u,8));let m=E;for(let v=0;v<g.length;v+=8){var p=Math.min(8,g.length-v);const d=parseInt(g.substring(v,v+p),u);p<8?(p=b(Math.pow(u,p)),m=m.j(p).add(b(d))):(m=m.j(f),m=m.add(b(d)))}return m}var E=w(0),R=w(1),U=w(16777216);n=h.prototype,n.m=function(){if(M(this))return-C(this).m();let g=0,u=1;for(let f=0;f<this.g.length;f++){const m=this.i(f);g+=(m>=0?m:4294967296+m)*u,u*=4294967296}return g},n.toString=function(g){if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(L(this))return"0";if(M(this))return"-"+C(this).toString(g);const u=b(Math.pow(g,6));var f=this;let m="";for(;;){const p=nt(f,u).g;f=B(f,p.j(u));let v=((f.g.length>0?f.g[0]:f.h)>>>0).toString(g);if(f=p,L(f))return v+m;for(;v.length<6;)v="0"+v;m=v+m}},n.i=function(g){return g<0?0:g<this.g.length?this.g[g]:this.h};function L(g){if(g.h!=0)return!1;for(let u=0;u<g.g.length;u++)if(g.g[u]!=0)return!1;return!0}function M(g){return g.h==-1}n.l=function(g){return g=B(this,g),M(g)?-1:L(g)?0:1};function C(g){const u=g.g.length,f=[];for(let m=0;m<u;m++)f[m]=~g.g[m];return new h(f,~g.h).add(R)}n.abs=function(){return M(this)?C(this):this},n.add=function(g){const u=Math.max(this.g.length,g.g.length),f=[];let m=0;for(let p=0;p<=u;p++){let v=m+(this.i(p)&65535)+(g.i(p)&65535),d=(v>>>16)+(this.i(p)>>>16)+(g.i(p)>>>16);m=d>>>16,v&=65535,d&=65535,f[p]=d<<16|v}return new h(f,f[f.length-1]&-2147483648?-1:0)};function B(g,u){return g.add(C(u))}n.j=function(g){if(L(this)||L(g))return E;if(M(this))return M(g)?C(this).j(C(g)):C(C(this).j(g));if(M(g))return C(this.j(C(g)));if(this.l(U)<0&&g.l(U)<0)return b(this.m()*g.m());const u=this.g.length+g.g.length,f=[];for(var m=0;m<2*u;m++)f[m]=0;for(m=0;m<this.g.length;m++)for(let p=0;p<g.g.length;p++){const v=this.i(m)>>>16,d=this.i(m)&65535,Z=g.i(p)>>>16,Wt=g.i(p)&65535;f[2*m+2*p]+=d*Wt,$(f,2*m+2*p),f[2*m+2*p+1]+=v*Wt,$(f,2*m+2*p+1),f[2*m+2*p+1]+=d*Z,$(f,2*m+2*p+1),f[2*m+2*p+2]+=v*Z,$(f,2*m+2*p+2)}for(g=0;g<u;g++)f[g]=f[2*g+1]<<16|f[2*g];for(g=u;g<2*u;g++)f[g]=0;return new h(f,0)};function $(g,u){for(;(g[u]&65535)!=g[u];)g[u+1]+=g[u]>>>16,g[u]&=65535,u++}function F(g,u){this.g=g,this.h=u}function nt(g,u){if(L(u))throw Error("division by zero");if(L(g))return new F(E,E);if(M(g))return u=nt(C(g),u),new F(C(u.g),C(u.h));if(M(u))return u=nt(g,C(u)),new F(C(u.g),u.h);if(g.g.length>30){if(M(g)||M(u))throw Error("slowDivide_ only works with positive integers.");for(var f=R,m=u;m.l(g)<=0;)f=tt(f),m=tt(m);var p=Y(f,1),v=Y(m,1);for(m=Y(m,2),f=Y(f,2);!L(m);){var d=v.add(m);d.l(g)<=0&&(p=p.add(f),v=d),m=Y(m,1),f=Y(f,1)}return u=B(g,p.j(u)),new F(p,u)}for(p=E;g.l(u)>=0;){for(f=Math.max(1,Math.floor(g.m()/u.m())),m=Math.ceil(Math.log(f)/Math.LN2),m=m<=48?1:Math.pow(2,m-48),v=b(f),d=v.j(u);M(d)||d.l(g)>0;)f-=m,v=b(f),d=v.j(u);L(v)&&(v=R),p=p.add(v),g=B(g,d)}return new F(p,g)}n.B=function(g){return nt(this,g).h},n.and=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let m=0;m<u;m++)f[m]=this.i(m)&g.i(m);return new h(f,this.h&g.h)},n.or=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let m=0;m<u;m++)f[m]=this.i(m)|g.i(m);return new h(f,this.h|g.h)},n.xor=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let m=0;m<u;m++)f[m]=this.i(m)^g.i(m);return new h(f,this.h^g.h)};function tt(g){const u=g.g.length+1,f=[];for(let m=0;m<u;m++)f[m]=g.i(m)<<1|g.i(m-1)>>>31;return new h(f,g.h)}function Y(g,u){const f=u>>5;u%=32;const m=g.g.length-f,p=[];for(let v=0;v<m;v++)p[v]=u>0?g.i(v+f)>>>u|g.i(v+f+1)<<32-u:g.i(v+f);return new h(p,g.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=b,h.fromString=S,On=h}).apply(typeof ir<"u"?ir:typeof self<"u"?self:typeof window<"u"?window:{});var li=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof li=="object"&&li];for(var r=0;r<i.length;++r){var a=i[r];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var s=e(this);function o(i,r){if(r)t:{var a=s;i=i.split(".");for(var l=0;l<i.length-1;l++){var _=i[l];if(!(_ in a))break t;a=a[_]}i=i[i.length-1],l=a[i],r=r(l),r!=l&&r!=null&&t(a,i,{configurable:!0,writable:!0,value:r})}}o("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(i){return i||function(r){var a=[],l;for(l in r)Object.prototype.hasOwnProperty.call(r,l)&&a.push([l,r[l]]);return a}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},h=this||self;function y(i){var r=typeof i;return r=="object"&&i!=null||r=="function"}function w(i,r,a){return i.call.apply(i.bind,arguments)}function b(i,r,a){return b=w,b.apply(null,arguments)}function S(i,r){var a=Array.prototype.slice.call(arguments,1);return function(){var l=a.slice();return l.push.apply(l,arguments),i.apply(this,l)}}function E(i,r){function a(){}a.prototype=r.prototype,i.Z=r.prototype,i.prototype=new a,i.prototype.constructor=i,i.Ob=function(l,_,I){for(var T=Array(arguments.length-2),k=2;k<arguments.length;k++)T[k-2]=arguments[k];return r.prototype[_].apply(l,T)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function U(i){const r=i.length;if(r>0){const a=Array(r);for(let l=0;l<r;l++)a[l]=i[l];return a}return[]}function L(i,r){for(let l=1;l<arguments.length;l++){const _=arguments[l];var a=typeof _;if(a=a!="object"?a:_?Array.isArray(_)?"array":a:"null",a=="array"||a=="object"&&typeof _.length=="number"){a=i.length||0;const I=_.length||0;i.length=a+I;for(let T=0;T<I;T++)i[a+T]=_[T]}else i.push(_)}}class M{constructor(r,a){this.i=r,this.j=a,this.h=0,this.g=null}get(){let r;return this.h>0?(this.h--,r=this.g,this.g=r.next,r.next=null):r=this.i(),r}}function C(i){h.setTimeout(()=>{throw i},0)}function B(){var i=g;let r=null;return i.g&&(r=i.g,i.g=i.g.next,i.g||(i.h=null),r.next=null),r}class ${constructor(){this.h=this.g=null}add(r,a){const l=F.get();l.set(r,a),this.h?this.h.next=l:this.g=l,this.h=l}}var F=new M(()=>new nt,i=>i.reset());class nt{constructor(){this.next=this.g=this.h=null}set(r,a){this.h=r,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,Y=!1,g=new $,u=()=>{const i=Promise.resolve(void 0);tt=()=>{i.then(f)}};function f(){for(var i;i=B();){try{i.h.call(i.g)}catch(a){C(a)}var r=F;r.j(i),r.h<100&&(r.h++,i.next=r.g,r.g=i)}Y=!1}function m(){this.u=this.u,this.C=this.C}m.prototype.u=!1,m.prototype.dispose=function(){this.u||(this.u=!0,this.N())},m.prototype[Symbol.dispose]=function(){this.dispose()},m.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function p(i,r){this.type=i,this.g=this.target=r,this.defaultPrevented=!1}p.prototype.h=function(){this.defaultPrevented=!0};var v=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var i=!1,r=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const a=()=>{};h.addEventListener("test",a,r),h.removeEventListener("test",a,r)}catch{}return i})();function d(i){return/^[\s\xa0]*$/.test(i)}function Z(i,r){p.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,r)}E(Z,p),Z.prototype.init=function(i,r){const a=this.type=i.type,l=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=r,r=i.relatedTarget,r||(a=="mouseover"?r=i.fromElement:a=="mouseout"&&(r=i.toElement)),this.relatedTarget=r,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&Z.Z.h.call(this)},Z.prototype.h=function(){Z.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Wt="closure_listenable_"+(Math.random()*1e6|0),Jo=0;function Xo(i,r,a,l,_){this.listener=i,this.proxy=null,this.src=r,this.type=a,this.capture=!!l,this.ha=_,this.key=++Jo,this.da=this.fa=!1}function Ze(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Qe(i,r,a){for(const l in i)r.call(a,i[l],l,i)}function Yo(i,r){for(const a in i)r.call(void 0,i[a],a,i)}function Gn(i){const r={};for(const a in i)r[a]=i[a];return r}const qn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Kn(i,r){let a,l;for(let _=1;_<arguments.length;_++){l=arguments[_];for(a in l)i[a]=l[a];for(let I=0;I<qn.length;I++)a=qn[I],Object.prototype.hasOwnProperty.call(l,a)&&(i[a]=l[a])}}function ti(i){this.src=i,this.g={},this.h=0}ti.prototype.add=function(i,r,a,l,_){const I=i.toString();i=this.g[I],i||(i=this.g[I]=[],this.h++);const T=Ui(i,r,l,_);return T>-1?(r=i[T],a||(r.fa=!1)):(r=new Xo(r,this.src,I,!!l,_),r.fa=a,i.push(r)),r};function Mi(i,r){const a=r.type;if(a in i.g){var l=i.g[a],_=Array.prototype.indexOf.call(l,r,void 0),I;(I=_>=0)&&Array.prototype.splice.call(l,_,1),I&&(Ze(r),i.g[a].length==0&&(delete i.g[a],i.h--))}}function Ui(i,r,a,l){for(let _=0;_<i.length;++_){const I=i[_];if(!I.da&&I.listener==r&&I.capture==!!a&&I.ha==l)return _}return-1}var xi="closure_lm_"+(Math.random()*1e6|0),ji={};function Jn(i,r,a,l,_){if(Array.isArray(r)){for(let I=0;I<r.length;I++)Jn(i,r[I],a,l,_);return null}return a=Zn(a),i&&i[Wt]?i.J(r,a,y(l)?!!l.capture:!1,_):Zo(i,r,a,!1,l,_)}function Zo(i,r,a,l,_,I){if(!r)throw Error("Invalid event type");const T=y(_)?!!_.capture:!!_;let k=Vi(i);if(k||(i[xi]=k=new ti(i)),a=k.add(r,a,l,T,I),a.proxy)return a;if(l=Qo(),a.proxy=l,l.src=i,l.listener=a,i.addEventListener)v||(_=T),_===void 0&&(_=!1),i.addEventListener(r.toString(),l,_);else if(i.attachEvent)i.attachEvent(Yn(r.toString()),l);else if(i.addListener&&i.removeListener)i.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return a}function Qo(){function i(a){return r.call(i.src,i.listener,a)}const r=ta;return i}function Xn(i,r,a,l,_){if(Array.isArray(r))for(var I=0;I<r.length;I++)Xn(i,r[I],a,l,_);else l=y(l)?!!l.capture:!!l,a=Zn(a),i&&i[Wt]?(i=i.i,I=String(r).toString(),I in i.g&&(r=i.g[I],a=Ui(r,a,l,_),a>-1&&(Ze(r[a]),Array.prototype.splice.call(r,a,1),r.length==0&&(delete i.g[I],i.h--)))):i&&(i=Vi(i))&&(r=i.g[r.toString()],i=-1,r&&(i=Ui(r,a,l,_)),(a=i>-1?r[i]:null)&&Fi(a))}function Fi(i){if(typeof i!="number"&&i&&!i.da){var r=i.src;if(r&&r[Wt])Mi(r.i,i);else{var a=i.type,l=i.proxy;r.removeEventListener?r.removeEventListener(a,l,i.capture):r.detachEvent?r.detachEvent(Yn(a),l):r.addListener&&r.removeListener&&r.removeListener(l),(a=Vi(r))?(Mi(a,i),a.h==0&&(a.src=null,r[xi]=null)):Ze(i)}}}function Yn(i){return i in ji?ji[i]:ji[i]="on"+i}function ta(i,r){if(i.da)i=!0;else{r=new Z(r,this);const a=i.listener,l=i.ha||i.src;i.fa&&Fi(i),i=a.call(l,r)}return i}function Vi(i){return i=i[xi],i instanceof ti?i:null}var Bi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Zn(i){return typeof i=="function"?i:(i[Bi]||(i[Bi]=function(r){return i.handleEvent(r)}),i[Bi])}function G(){m.call(this),this.i=new ti(this),this.M=this,this.G=null}E(G,m),G.prototype[Wt]=!0,G.prototype.removeEventListener=function(i,r,a,l){Xn(this,i,r,a,l)};function q(i,r){var a,l=i.G;if(l)for(a=[];l;l=l.G)a.push(l);if(i=i.M,l=r.type||r,typeof r=="string")r=new p(r,i);else if(r instanceof p)r.target=r.target||i;else{var _=r;r=new p(l,i),Kn(r,_)}_=!0;let I,T;if(a)for(T=a.length-1;T>=0;T--)I=r.g=a[T],_=ei(I,l,!0,r)&&_;if(I=r.g=i,_=ei(I,l,!0,r)&&_,_=ei(I,l,!1,r)&&_,a)for(T=0;T<a.length;T++)I=r.g=a[T],_=ei(I,l,!1,r)&&_}G.prototype.N=function(){if(G.Z.N.call(this),this.i){var i=this.i;for(const r in i.g){const a=i.g[r];for(let l=0;l<a.length;l++)Ze(a[l]);delete i.g[r],i.h--}}this.G=null},G.prototype.J=function(i,r,a,l){return this.i.add(String(i),r,!1,a,l)},G.prototype.K=function(i,r,a,l){return this.i.add(String(i),r,!0,a,l)};function ei(i,r,a,l){if(r=i.i.g[String(r)],!r)return!0;r=r.concat();let _=!0;for(let I=0;I<r.length;++I){const T=r[I];if(T&&!T.da&&T.capture==a){const k=T.listener,W=T.ha||T.src;T.fa&&Mi(i.i,T),_=k.call(W,l)!==!1&&_}}return _&&!l.defaultPrevented}function ea(i,r){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=b(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(r)>2147483647?-1:h.setTimeout(i,r||0)}function Qn(i){i.g=ea(()=>{i.g=null,i.i&&(i.i=!1,Qn(i))},i.l);const r=i.h;i.h=null,i.m.apply(null,r)}class ia extends m{constructor(r,a){super(),this.m=r,this.l=a,this.h=null,this.i=!1,this.g=null}j(r){this.h=arguments,this.g?this.i=!0:Qn(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function we(i){m.call(this),this.h=i,this.g={}}E(we,m);var ts=[];function es(i){Qe(i.g,function(r,a){this.g.hasOwnProperty(a)&&Fi(r)},i),i.g={}}we.prototype.N=function(){we.Z.N.call(this),es(this)},we.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hi=h.JSON.stringify,na=h.JSON.parse,sa=class{stringify(i){return h.JSON.stringify(i,void 0)}parse(i){return h.JSON.parse(i,void 0)}};function is(){}function $i(){p.call(this,"d")}E($i,p);function Wi(){p.call(this,"c")}E(Wi,p);var re={},ns=null;function zi(){return ns=ns||new G}re.Ia="serverreachability";function ss(i){p.call(this,re.Ia,i)}E(ss,p);function ve(i){const r=zi();q(r,new ss(r))}re.STAT_EVENT="statevent";function rs(i,r){p.call(this,re.STAT_EVENT,i),this.stat=r}E(rs,p);function K(i){const r=zi();q(r,new rs(r,i))}re.Ja="timingevent";function os(i,r){p.call(this,re.Ja,i),this.size=r}E(os,p);function Ie(i,r){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){i()},r)}function be(){this.g=!0}be.prototype.ua=function(){this.g=!1};function ra(i,r,a,l,_,I){i.info(function(){if(i.g)if(I){var T="",k=I.split("&");for(let j=0;j<k.length;j++){var W=k[j].split("=");if(W.length>1){const z=W[0];W=W[1];const lt=z.split("_");T=lt.length>=2&&lt[1]=="type"?T+(z+"="+W+"&"):T+(z+"=redacted&")}}}else T=null;else T=I;return"XMLHTTP REQ ("+l+") [attempt "+_+"]: "+r+`
`+a+`
`+T})}function oa(i,r,a,l,_,I,T){i.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+_+"]: "+r+`
`+a+`
`+I+" "+T})}function oe(i,r,a,l){i.info(function(){return"XMLHTTP TEXT ("+r+"): "+ca(i,a)+(l?" "+l:"")})}function aa(i,r){i.info(function(){return"TIMEOUT: "+r})}be.prototype.info=function(){};function ca(i,r){if(!i.g)return r;if(!r)return null;try{const I=JSON.parse(r);if(I){for(i=0;i<I.length;i++)if(Array.isArray(I[i])){var a=I[i];if(!(a.length<2)){var l=a[1];if(Array.isArray(l)&&!(l.length<1)){var _=l[0];if(_!="noop"&&_!="stop"&&_!="close")for(let T=1;T<l.length;T++)l[T]=""}}}}return Hi(I)}catch{return r}}var as;function Gi(){}E(Gi,is),Gi.prototype.g=function(){return new XMLHttpRequest},as=new Gi;function Ee(i){return encodeURIComponent(String(i))}function ha(i){var r=1;i=i.split(":");const a=[];for(;r>0&&i.length;)a.push(i.shift()),r--;return i.length&&a.push(i.join(":")),a}function Ct(i,r,a,l){this.j=i,this.i=r,this.l=a,this.S=l||1,this.V=new we(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new cs}function cs(){this.i=null,this.g="",this.h=!1}var hs={},qi={};function Ki(i,r,a){i.M=1,i.A=ni(ht(r)),i.u=a,i.R=!0,ls(i,null)}function ls(i,r){i.F=Date.now(),ii(i),i.B=ht(i.A);var a=i.B,l=i.S;Array.isArray(l)||(l=[String(l)]),Es(a.i,"t",l),i.C=0,a=i.j.L,i.h=new cs,i.g=Bs(i.j,a?r:null,!i.u),i.P>0&&(i.O=new ia(b(i.Y,i,i.g),i.P)),r=i.V,a=i.g,l=i.ba;var _="readystatechange";Array.isArray(_)||(_&&(ts[0]=_.toString()),_=ts);for(let I=0;I<_.length;I++){const T=Jn(a,_[I],l||r.handleEvent,!1,r.h||r);if(!T)break;r.g[T.key]=T}r=i.J?Gn(i.J):{},i.u?(i.v||(i.v="POST"),r["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,r)):(i.v="GET",i.g.ea(i.B,i.v,null,r)),ve(),ra(i.i,i.v,i.B,i.l,i.S,i.u)}Ct.prototype.ba=function(i){i=i.target;const r=this.O;r&&Pt(i)==3?r.j():this.Y(i)},Ct.prototype.Y=function(i){try{if(i==this.g)t:{const k=Pt(this.g),W=this.g.ya(),j=this.g.ca();if(!(k<3)&&(k!=3||this.g&&(this.h.h||this.g.la()||Ns(this.g)))){this.K||k!=4||W==7||(W==8||j<=0?ve(3):ve(2)),Ji(this);var r=this.g.ca();this.X=r;var a=la(this);if(this.o=r==200,oa(this.i,this.v,this.B,this.l,this.S,k,r),this.o){if(this.U&&!this.L){e:{if(this.g){var l,_=this.g;if((l=_.g?_.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!d(l)){var I=l;break e}}I=null}if(i=I)oe(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Xi(this,i);else{this.o=!1,this.m=3,K(12),zt(this),Te(this);break t}}if(this.R){i=!0;let z;for(;!this.K&&this.C<a.length;)if(z=ua(this,a),z==qi){k==4&&(this.m=4,K(14),i=!1),oe(this.i,this.l,null,"[Incomplete Response]");break}else if(z==hs){this.m=4,K(15),oe(this.i,this.l,a,"[Invalid Chunk]"),i=!1;break}else oe(this.i,this.l,z,null),Xi(this,z);if(us(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),k!=4||a.length!=0||this.h.h||(this.m=1,K(16),i=!1),this.o=this.o&&i,!i)oe(this.i,this.l,a,"[Invalid Chunked Response]"),zt(this),Te(this);else if(a.length>0&&!this.W){this.W=!0;var T=this.j;T.g==this&&T.aa&&!T.P&&(T.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),rn(T),T.P=!0,K(11))}}else oe(this.i,this.l,a,null),Xi(this,a);k==4&&zt(this),this.o&&!this.K&&(k==4?xs(this.j,this):(this.o=!1,ii(this)))}else Sa(this.g),r==400&&a.indexOf("Unknown SID")>0?(this.m=3,K(12)):(this.m=0,K(13)),zt(this),Te(this)}}}catch{}finally{}};function la(i){if(!us(i))return i.g.la();const r=Ns(i.g);if(r==="")return"";let a="";const l=r.length,_=Pt(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return zt(i),Te(i),"";i.h.i=new h.TextDecoder}for(let I=0;I<l;I++)i.h.h=!0,a+=i.h.i.decode(r[I],{stream:!(_&&I==l-1)});return r.length=0,i.h.g+=a,i.C=0,i.h.g}function us(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function ua(i,r){var a=i.C,l=r.indexOf(`
`,a);return l==-1?qi:(a=Number(r.substring(a,l)),isNaN(a)?hs:(l+=1,l+a>r.length?qi:(r=r.slice(l,l+a),i.C=l+a,r)))}Ct.prototype.cancel=function(){this.K=!0,zt(this)};function ii(i){i.T=Date.now()+i.H,ds(i,i.H)}function ds(i,r){if(i.D!=null)throw Error("WatchDog timer not null");i.D=Ie(b(i.aa,i),r)}function Ji(i){i.D&&(h.clearTimeout(i.D),i.D=null)}Ct.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(aa(this.i,this.B),this.M!=2&&(ve(),K(17)),zt(this),this.m=2,Te(this)):ds(this,this.T-i)};function Te(i){i.j.I==0||i.K||xs(i.j,i)}function zt(i){Ji(i);var r=i.O;r&&typeof r.dispose=="function"&&r.dispose(),i.O=null,es(i.V),i.g&&(r=i.g,i.g=null,r.abort(),r.dispose())}function Xi(i,r){try{var a=i.j;if(a.I!=0&&(a.g==i||Yi(a.h,i))){if(!i.L&&Yi(a.h,i)&&a.I==3){try{var l=a.Ba.g.parse(r)}catch{l=null}if(Array.isArray(l)&&l.length==3){var _=l;if(_[0]==0){t:if(!a.v){if(a.g)if(a.g.F+3e3<i.F)ci(a),oi(a);else break t;sn(a),K(18)}}else a.xa=_[1],0<a.xa-a.K&&_[2]<37500&&a.F&&a.A==0&&!a.C&&(a.C=Ie(b(a.Va,a),6e3));gs(a.h)<=1&&a.ta&&(a.ta=void 0)}else qt(a,11)}else if((i.L||a.g==i)&&ci(a),!d(r))for(_=a.Ba.g.parse(r),r=0;r<_.length;r++){let j=_[r];const z=j[0];if(!(z<=a.K))if(a.K=z,j=j[1],a.I==2)if(j[0]=="c"){a.M=j[1],a.ba=j[2];const lt=j[3];lt!=null&&(a.ka=lt,a.j.info("VER="+a.ka));const he=j[4];he!=null&&(a.za=he,a.j.info("SVER="+a.za));const Ot=j[5];Ot!=null&&typeof Ot=="number"&&Ot>0&&(l=1.5*Ot,a.O=l,a.j.info("backChannelRequestTimeoutMs_="+l)),l=a;const Dt=i.g;if(Dt){const hi=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hi){var I=l.h;I.g||hi.indexOf("spdy")==-1&&hi.indexOf("quic")==-1&&hi.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(Zi(I,I.h),I.h=null))}if(l.G){const on=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;on&&(l.wa=on,x(l.J,l.G,on))}}a.I=3,a.l&&a.l.ra(),a.aa&&(a.T=Date.now()-i.F,a.j.info("Handshake RTT: "+a.T+"ms")),l=a;var T=i;if(l.na=Vs(l,l.L?l.ba:null,l.W),T.L){ms(l.h,T);var k=T,W=l.O;W&&(k.H=W),k.D&&(Ji(k),ii(k)),l.g=T}else Ms(l);a.i.length>0&&ai(a)}else j[0]!="stop"&&j[0]!="close"||qt(a,7);else a.I==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?qt(a,7):nn(a):j[0]!="noop"&&a.l&&a.l.qa(j),a.A=0)}}ve(4)}catch{}}var da=class{constructor(i,r){this.g=i,this.map=r}};function fs(i){this.l=i||10,h.PerformanceNavigationTiming?(i=h.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ps(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function gs(i){return i.h?1:i.g?i.g.size:0}function Yi(i,r){return i.h?i.h==r:i.g?i.g.has(r):!1}function Zi(i,r){i.g?i.g.add(r):i.h=r}function ms(i,r){i.h&&i.h==r?i.h=null:i.g&&i.g.has(r)&&i.g.delete(r)}fs.prototype.cancel=function(){if(this.i=ys(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ys(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let r=i.i;for(const a of i.g.values())r=r.concat(a.G);return r}return U(i.i)}var _s=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fa(i,r){if(i){i=i.split("&");for(let a=0;a<i.length;a++){const l=i[a].indexOf("=");let _,I=null;l>=0?(_=i[a].substring(0,l),I=i[a].substring(l+1)):_=i[a],r(_,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function Rt(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let r;i instanceof Rt?(this.l=i.l,Se(this,i.j),this.o=i.o,this.g=i.g,Ae(this,i.u),this.h=i.h,Qi(this,Ts(i.i)),this.m=i.m):i&&(r=String(i).match(_s))?(this.l=!1,Se(this,r[1]||"",!0),this.o=ke(r[2]||""),this.g=ke(r[3]||"",!0),Ae(this,r[4]),this.h=ke(r[5]||"",!0),Qi(this,r[6]||"",!0),this.m=ke(r[7]||"")):(this.l=!1,this.i=new Re(null,this.l))}Rt.prototype.toString=function(){const i=[];var r=this.j;r&&i.push(Ce(r,ws,!0),":");var a=this.g;return(a||r=="file")&&(i.push("//"),(r=this.o)&&i.push(Ce(r,ws,!0),"@"),i.push(Ee(a).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.u,a!=null&&i.push(":",String(a))),(a=this.h)&&(this.g&&a.charAt(0)!="/"&&i.push("/"),i.push(Ce(a,a.charAt(0)=="/"?ma:ga,!0))),(a=this.i.toString())&&i.push("?",a),(a=this.m)&&i.push("#",Ce(a,_a)),i.join("")},Rt.prototype.resolve=function(i){const r=ht(this);let a=!!i.j;a?Se(r,i.j):a=!!i.o,a?r.o=i.o:a=!!i.g,a?r.g=i.g:a=i.u!=null;var l=i.h;if(a)Ae(r,i.u);else if(a=!!i.h){if(l.charAt(0)!="/")if(this.g&&!this.h)l="/"+l;else{var _=r.h.lastIndexOf("/");_!=-1&&(l=r.h.slice(0,_+1)+l)}if(_=l,_==".."||_==".")l="";else if(_.indexOf("./")!=-1||_.indexOf("/.")!=-1){l=_.lastIndexOf("/",0)==0,_=_.split("/");const I=[];for(let T=0;T<_.length;){const k=_[T++];k=="."?l&&T==_.length&&I.push(""):k==".."?((I.length>1||I.length==1&&I[0]!="")&&I.pop(),l&&T==_.length&&I.push("")):(I.push(k),l=!0)}l=I.join("/")}else l=_}return a?r.h=l:a=i.i.toString()!=="",a?Qi(r,Ts(i.i)):a=!!i.m,a&&(r.m=i.m),r};function ht(i){return new Rt(i)}function Se(i,r,a){i.j=a?ke(r,!0):r,i.j&&(i.j=i.j.replace(/:$/,""))}function Ae(i,r){if(r){if(r=Number(r),isNaN(r)||r<0)throw Error("Bad port number "+r);i.u=r}else i.u=null}function Qi(i,r,a){r instanceof Re?(i.i=r,wa(i.i,i.l)):(a||(r=Ce(r,ya)),i.i=new Re(r,i.l))}function x(i,r,a){i.i.set(r,a)}function ni(i){return x(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function ke(i,r){return i?r?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ce(i,r,a){return typeof i=="string"?(i=encodeURI(i).replace(r,pa),a&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function pa(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ws=/[#\/\?@]/g,ga=/[#\?:]/g,ma=/[#\?]/g,ya=/[#\?@]/g,_a=/#/g;function Re(i,r){this.h=this.g=null,this.i=i||null,this.j=!!r}function Gt(i){i.g||(i.g=new Map,i.h=0,i.i&&fa(i.i,function(r,a){i.add(decodeURIComponent(r.replace(/\+/g," ")),a)}))}n=Re.prototype,n.add=function(i,r){Gt(this),this.i=null,i=ae(this,i);let a=this.g.get(i);return a||this.g.set(i,a=[]),a.push(r),this.h+=1,this};function vs(i,r){Gt(i),r=ae(i,r),i.g.has(r)&&(i.i=null,i.h-=i.g.get(r).length,i.g.delete(r))}function Is(i,r){return Gt(i),r=ae(i,r),i.g.has(r)}n.forEach=function(i,r){Gt(this),this.g.forEach(function(a,l){a.forEach(function(_){i.call(r,_,l,this)},this)},this)};function bs(i,r){Gt(i);let a=[];if(typeof r=="string")Is(i,r)&&(a=a.concat(i.g.get(ae(i,r))));else for(i=Array.from(i.g.values()),r=0;r<i.length;r++)a=a.concat(i[r]);return a}n.set=function(i,r){return Gt(this),this.i=null,i=ae(this,i),Is(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[r]),this.h+=1,this},n.get=function(i,r){return i?(i=bs(this,i),i.length>0?String(i[0]):r):r};function Es(i,r,a){vs(i,r),a.length>0&&(i.i=null,i.g.set(ae(i,r),U(a)),i.h+=a.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],r=Array.from(this.g.keys());for(let l=0;l<r.length;l++){var a=r[l];const _=Ee(a);a=bs(this,a);for(let I=0;I<a.length;I++){let T=_;a[I]!==""&&(T+="="+Ee(a[I])),i.push(T)}}return this.i=i.join("&")};function Ts(i){const r=new Re;return r.i=i.i,i.g&&(r.g=new Map(i.g),r.h=i.h),r}function ae(i,r){return r=String(r),i.j&&(r=r.toLowerCase()),r}function wa(i,r){r&&!i.j&&(Gt(i),i.i=null,i.g.forEach(function(a,l){const _=l.toLowerCase();l!=_&&(vs(this,l),Es(this,_,a))},i)),i.j=r}function va(i,r){const a=new be;if(h.Image){const l=new Image;l.onload=S(Nt,a,"TestLoadImage: loaded",!0,r,l),l.onerror=S(Nt,a,"TestLoadImage: error",!1,r,l),l.onabort=S(Nt,a,"TestLoadImage: abort",!1,r,l),l.ontimeout=S(Nt,a,"TestLoadImage: timeout",!1,r,l),h.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=i}else r(!1)}function Ia(i,r){const a=new be,l=new AbortController,_=setTimeout(()=>{l.abort(),Nt(a,"TestPingServer: timeout",!1,r)},1e4);fetch(i,{signal:l.signal}).then(I=>{clearTimeout(_),I.ok?Nt(a,"TestPingServer: ok",!0,r):Nt(a,"TestPingServer: server error",!1,r)}).catch(()=>{clearTimeout(_),Nt(a,"TestPingServer: error",!1,r)})}function Nt(i,r,a,l,_){try{_&&(_.onload=null,_.onerror=null,_.onabort=null,_.ontimeout=null),l(a)}catch{}}function ba(){this.g=new sa}function tn(i){this.i=i.Sb||null,this.h=i.ab||!1}E(tn,is),tn.prototype.g=function(){return new si(this.i,this.h)};function si(i,r){G.call(this),this.H=i,this.o=r,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(si,G),n=si.prototype,n.open=function(i,r){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=r,this.readyState=1,Pe(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const r={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(r.body=i),(this.H||h).fetch(new Request(this.D,r)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ne(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Pe(this)),this.g&&(this.readyState=3,Pe(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ss(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ss(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var r=i.value?i.value:new Uint8Array(0);(r=this.B.decode(r,{stream:!i.done}))&&(this.response=this.responseText+=r)}i.done?Ne(this):Pe(this),this.readyState==3&&Ss(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,Ne(this))},n.Na=function(i){this.g&&(this.response=i,Ne(this))},n.ga=function(){this.g&&Ne(this)};function Ne(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Pe(i)}n.setRequestHeader=function(i,r){this.A.append(i,r)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],r=this.h.entries();for(var a=r.next();!a.done;)a=a.value,i.push(a[0]+": "+a[1]),a=r.next();return i.join(`\r
`)};function Pe(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function As(i){let r="";return Qe(i,function(a,l){r+=l,r+=":",r+=a,r+=`\r
`}),r}function en(i,r,a){t:{for(l in a){var l=!1;break t}l=!0}l||(a=As(a),typeof i=="string"?a!=null&&Ee(a):x(i,r,a))}function V(i){G.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(V,G);var Ea=/^https?$/i,Ta=["POST","PUT"];n=V.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,r,a,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);r=r?r.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():as.g(),this.g.onreadystatechange=R(b(this.Ca,this));try{this.B=!0,this.g.open(r,String(i),!0),this.B=!1}catch(I){ks(this,I);return}if(i=a||"",a=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var _ in l)a.set(_,l[_]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const I of l.keys())a.set(I,l.get(I));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(a.keys()).find(I=>I.toLowerCase()=="content-type"),_=h.FormData&&i instanceof h.FormData,!(Array.prototype.indexOf.call(Ta,r,void 0)>=0)||l||_||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,T]of a)this.g.setRequestHeader(I,T);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(I){ks(this,I)}};function ks(i,r){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=r,i.o=5,Cs(i),ri(i)}function Cs(i){i.A||(i.A=!0,q(i,"complete"),q(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,q(this,"complete"),q(this,"abort"),ri(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ri(this,!0)),V.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Rs(this):this.Xa())},n.Xa=function(){Rs(this)};function Rs(i){if(i.h&&typeof c<"u"){if(i.v&&Pt(i)==4)setTimeout(i.Ca.bind(i),0);else if(q(i,"readystatechange"),Pt(i)==4){i.h=!1;try{const I=i.ca();t:switch(I){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}var a;if(!(a=r)){var l;if(l=I===0){let T=String(i.D).match(_s)[1]||null;!T&&h.self&&h.self.location&&(T=h.self.location.protocol.slice(0,-1)),l=!Ea.test(T?T.toLowerCase():"")}a=l}if(a)q(i,"complete"),q(i,"success");else{i.o=6;try{var _=Pt(i)>2?i.g.statusText:""}catch{_=""}i.l=_+" ["+i.ca()+"]",Cs(i)}}finally{ri(i)}}}}function ri(i,r){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const a=i.g;i.g=null,r||q(i,"ready");try{a.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Pt(i){return i.g?i.g.readyState:0}n.ca=function(){try{return Pt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var r=this.g.responseText;return i&&r.indexOf(i)==0&&(r=r.substring(i.length)),na(r)}};function Ns(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Sa(i){const r={};i=(i.g&&Pt(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<i.length;l++){if(d(i[l]))continue;var a=ha(i[l]);const _=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const I=r[_]||[];r[_]=I,I.push(a)}Yo(r,function(l){return l.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oe(i,r,a){return a&&a.internalChannelParams&&a.internalChannelParams[i]||r}function Ps(i){this.za=0,this.i=[],this.j=new be,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Oe("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Oe("baseRetryDelayMs",5e3,i),this.Za=Oe("retryDelaySeedMs",1e4,i),this.Ta=Oe("forwardChannelMaxRetries",2,i),this.va=Oe("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new fs(i&&i.concurrentRequestLimit),this.Ba=new ba,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ps.prototype,n.ka=8,n.I=1,n.connect=function(i,r,a,l){K(0),this.W=i,this.H=r||{},a&&l!==void 0&&(this.H.OSID=a,this.H.OAID=l),this.F=this.X,this.J=Vs(this,null,this.W),ai(this)};function nn(i){if(Os(i),i.I==3){var r=i.V++,a=ht(i.J);if(x(a,"SID",i.M),x(a,"RID",r),x(a,"TYPE","terminate"),De(i,a),r=new Ct(i,i.j,r),r.M=2,r.A=ni(ht(a)),a=!1,h.navigator&&h.navigator.sendBeacon)try{a=h.navigator.sendBeacon(r.A.toString(),"")}catch{}!a&&h.Image&&(new Image().src=r.A,a=!0),a||(r.g=Bs(r.j,null),r.g.ea(r.A)),r.F=Date.now(),ii(r)}Fs(i)}function oi(i){i.g&&(rn(i),i.g.cancel(),i.g=null)}function Os(i){oi(i),i.v&&(h.clearTimeout(i.v),i.v=null),ci(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&h.clearTimeout(i.m),i.m=null)}function ai(i){if(!ps(i.h)&&!i.m){i.m=!0;var r=i.Ea;tt||u(),Y||(tt(),Y=!0),g.add(r,i),i.D=0}}function Aa(i,r){return gs(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=r.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=Ie(b(i.Ea,i,r),js(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const _=new Ct(this,this.j,i);let I=this.o;if(this.U&&(I?(I=Gn(I),Kn(I,this.U)):I=this.U),this.u!==null||this.R||(_.J=I,I=null),this.S)t:{for(var r=0,a=0;a<this.i.length;a++){e:{var l=this.i[a];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break e}l=void 0}if(l===void 0)break;if(r+=l,r>4096){r=a;break t}if(r===4096||a===this.i.length-1){r=a+1;break t}}r=1e3}else r=1e3;r=Ls(this,_,r),a=ht(this.J),x(a,"RID",i),x(a,"CVER",22),this.G&&x(a,"X-HTTP-Session-Id",this.G),De(this,a),I&&(this.R?r="headers="+Ee(As(I))+"&"+r:this.u&&en(a,this.u,I)),Zi(this.h,_),this.Ra&&x(a,"TYPE","init"),this.S?(x(a,"$req",r),x(a,"SID","null"),_.U=!0,Ki(_,a,null)):Ki(_,a,r),this.I=2}}else this.I==3&&(i?Ds(this,i):this.i.length==0||ps(this.h)||Ds(this))};function Ds(i,r){var a;r?a=r.l:a=i.V++;const l=ht(i.J);x(l,"SID",i.M),x(l,"RID",a),x(l,"AID",i.K),De(i,l),i.u&&i.o&&en(l,i.u,i.o),a=new Ct(i,i.j,a,i.D+1),i.u===null&&(a.J=i.o),r&&(i.i=r.G.concat(i.i)),r=Ls(i,a,1e3),a.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Zi(i.h,a),Ki(a,l,r)}function De(i,r){i.H&&Qe(i.H,function(a,l){x(r,l,a)}),i.l&&Qe({},function(a,l){x(r,l,a)})}function Ls(i,r,a){a=Math.min(i.i.length,a);const l=i.l?b(i.l.Ka,i.l,i):null;t:{var _=i.i;let k=-1;for(;;){const W=["count="+a];k==-1?a>0?(k=_[0].g,W.push("ofs="+k)):k=0:W.push("ofs="+k);let j=!0;for(let z=0;z<a;z++){var I=_[z].g;const lt=_[z].map;if(I-=k,I<0)k=Math.max(0,_[z].g-100),j=!1;else try{I="req"+I+"_"||"";try{var T=lt instanceof Map?lt:Object.entries(lt);for(const[he,Ot]of T){let Dt=Ot;y(Ot)&&(Dt=Hi(Ot)),W.push(I+he+"="+encodeURIComponent(Dt))}}catch(he){throw W.push(I+"type="+encodeURIComponent("_badmap")),he}}catch{l&&l(lt)}}if(j){T=W.join("&");break t}}T=void 0}return i=i.i.splice(0,a),r.G=i,T}function Ms(i){if(!i.g&&!i.v){i.Y=1;var r=i.Da;tt||u(),Y||(tt(),Y=!0),g.add(r,i),i.A=0}}function sn(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=Ie(b(i.Da,i),js(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,Us(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=Ie(b(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,K(10),oi(this),Us(this))};function rn(i){i.B!=null&&(h.clearTimeout(i.B),i.B=null)}function Us(i){i.g=new Ct(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var r=ht(i.na);x(r,"RID","rpc"),x(r,"SID",i.M),x(r,"AID",i.K),x(r,"CI",i.F?"0":"1"),!i.F&&i.ia&&x(r,"TO",i.ia),x(r,"TYPE","xmlhttp"),De(i,r),i.u&&i.o&&en(r,i.u,i.o),i.O&&(i.g.H=i.O);var a=i.g;i=i.ba,a.M=1,a.A=ni(ht(r)),a.u=null,a.R=!0,ls(a,i)}n.Va=function(){this.C!=null&&(this.C=null,oi(this),sn(this),K(19))};function ci(i){i.C!=null&&(h.clearTimeout(i.C),i.C=null)}function xs(i,r){var a=null;if(i.g==r){ci(i),rn(i),i.g=null;var l=2}else if(Yi(i.h,r))a=r.G,ms(i.h,r),l=1;else return;if(i.I!=0){if(r.o)if(l==1){a=r.u?r.u.length:0,r=Date.now()-r.F;var _=i.D;l=zi(),q(l,new os(l,a)),ai(i)}else Ms(i);else if(_=r.m,_==3||_==0&&r.X>0||!(l==1&&Aa(i,r)||l==2&&sn(i)))switch(a&&a.length>0&&(r=i.h,r.i=r.i.concat(a)),_){case 1:qt(i,5);break;case 4:qt(i,10);break;case 3:qt(i,6);break;default:qt(i,2)}}}function js(i,r){let a=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(a*=2),a*r}function qt(i,r){if(i.j.info("Error code "+r),r==2){var a=b(i.bb,i),l=i.Ua;const _=!l;l=new Rt(l||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Se(l,"https"),ni(l),_?va(l.toString(),a):Ia(l.toString(),a)}else K(2);i.I=0,i.l&&i.l.pa(r),Fs(i),Os(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),K(2)):(this.j.info("Failed to ping google.com"),K(1))};function Fs(i){if(i.I=0,i.ja=[],i.l){const r=ys(i.h);(r.length!=0||i.i.length!=0)&&(L(i.ja,r),L(i.ja,i.i),i.h.i.length=0,U(i.i),i.i.length=0),i.l.oa()}}function Vs(i,r,a){var l=a instanceof Rt?ht(a):new Rt(a);if(l.g!="")r&&(l.g=r+"."+l.g),Ae(l,l.u);else{var _=h.location;l=_.protocol,r=r?r+"."+_.hostname:_.hostname,_=+_.port;const I=new Rt(null);l&&Se(I,l),r&&(I.g=r),_&&Ae(I,_),a&&(I.h=a),l=I}return a=i.G,r=i.wa,a&&r&&x(l,a,r),x(l,"VER",i.ka),De(i,l),l}function Bs(i,r,a){if(r&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return r=i.Aa&&!i.ma?new V(new tn({ab:a})):new V(i.ma),r.Fa(i.L),r}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hs(){}n=Hs.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function et(i,r){G.call(this),this.g=new Ps(r),this.l=i,this.h=r&&r.messageUrlParams||null,i=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(i?i["X-WebChannel-Content-Type"]=r.messageContentType:i={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.sa&&(i?i["X-WebChannel-Client-Profile"]=r.sa:i={"X-WebChannel-Client-Profile":r.sa}),this.g.U=i,(i=r&&r.Qb)&&!d(i)&&(this.g.u=i),this.A=r&&r.supportsCrossDomainXhr||!1,this.v=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!d(r)&&(this.g.G=r,i=this.h,i!==null&&r in i&&(i=this.h,r in i&&delete i[r])),this.j=new ce(this)}E(et,G),et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},et.prototype.close=function(){nn(this.g)},et.prototype.o=function(i){var r=this.g;if(typeof i=="string"){var a={};a.__data__=i,i=a}else this.v&&(a={},a.__data__=Hi(i),i=a);r.i.push(new da(r.Ya++,i)),r.I==3&&ai(r)},et.prototype.N=function(){this.g.l=null,delete this.j,nn(this.g),delete this.g,et.Z.N.call(this)};function $s(i){$i.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var r=i.__sm__;if(r){t:{for(const a in r){i=a;break t}i=void 0}(this.i=i)&&(i=this.i,r=r!==null&&i in r?r[i]:void 0),this.data=r}else this.data=i}E($s,$i);function Ws(){Wi.call(this),this.status=1}E(Ws,Wi);function ce(i){this.g=i}E(ce,Hs),ce.prototype.ra=function(){q(this.g,"a")},ce.prototype.qa=function(i){q(this.g,new $s(i))},ce.prototype.pa=function(i){q(this.g,new Ws)},ce.prototype.oa=function(){q(this.g,"b")},et.prototype.send=et.prototype.o,et.prototype.open=et.prototype.m,et.prototype.close=et.prototype.close,G.prototype.listen=G.prototype.J,V.prototype.listenOnce=V.prototype.K,V.prototype.getLastError=V.prototype.Ha,V.prototype.getLastErrorCode=V.prototype.ya,V.prototype.getStatus=V.prototype.ca,V.prototype.getResponseJson=V.prototype.La,V.prototype.getResponseText=V.prototype.la,V.prototype.send=V.prototype.ea,V.prototype.setWithCredentials=V.prototype.Fa}).apply(typeof li<"u"?li:typeof self<"u"?self:typeof window<"u"?window:{});const nr="@firebase/firestore",sr="4.9.2";/**
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
*/const ge=new Rn("@firebase/firestore");function rt(n,...t){if(ge.logLevel<=D.DEBUG){const e=t.map(Dn);ge.debug(`Firestore (${Ge}): ${n}`,...e)}}function io(n,...t){if(ge.logLevel<=D.ERROR){const e=t.map(Dn);ge.error(`Firestore (${Ge}): ${n}`,...e)}}function ch(n,...t){if(ge.logLevel<=D.WARN){const e=t.map(Dn);ge.warn(`Firestore (${Ge}): ${n}`,...e)}}function Dn(n){if(typeof n=="string")return n;try{/**
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
*/function He(n,t,e){let s="Unexpected state";typeof t=="string"?s=t:e=t,no(n,s,e)}function no(n,t,e){let s=`FIRESTORE (${Ge}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{s+=" CONTEXT: "+JSON.stringify(e)}catch{s+=" CONTEXT: "+e}throw io(s),new Error(s)}function xe(n,t,e,s){let o="Unexpected state";typeof e=="string"?o=e:s=e,n||no(t,o,s)}/**
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
*/class so{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class hh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(J.UNAUTHENTICATED)))}shutdown(){}}class lh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class uh{constructor(t){this.t=t,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){xe(this.o===void 0,42304);let s=this.i;const o=w=>this.i!==s?(s=this.i,e(w)):Promise.resolve();let c=new je;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new je,t.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const w=c;t.enqueueRetryable((async()=>{await w.promise,await o(this.currentUser)}))},y=w=>{rt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=w,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((w=>y(w))),setTimeout((()=>{if(!this.auth){const w=this.t.getImmediate({optional:!0});w?y(w):(rt("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new je)}}),0),h()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((s=>this.i!==t?(rt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(xe(typeof s.accessToken=="string",31837,{l:s}),new so(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return xe(t===null||typeof t=="string",2055,{h:t}),new J(t)}}class dh{constructor(t,e,s){this.P=t,this.T=e,this.I=s,this.type="FirstParty",this.user=J.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class fh{constructor(t,e,s){this.P=t,this.T=e,this.I=s}getToken(){return Promise.resolve(new dh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(J.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class rr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ph{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Q(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){xe(this.o===void 0,3512);const s=c=>{c.error!=null&&rt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,rt("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?e(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable((()=>s(c)))};const o=c=>{rt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>o(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):rt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new rr(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(xe(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new rr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
*/function gh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
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
*/class mh{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=gh(40);for(let c=0;c<o.length;++c)s.length<20&&o[c]<e&&(s+=t.charAt(o[c]%62))}return s}}function Ht(n,t){return n<t?-1:n>t?1:0}function yh(n,t){const e=Math.min(n.length,t.length);for(let s=0;s<e;s++){const o=n.charAt(s),c=t.charAt(s);if(o!==c)return dn(o)===dn(c)?Ht(o,c):dn(o)?1:-1}return Ht(n.length,t.length)}const _h=55296,wh=57343;function dn(n){const t=n.charCodeAt(0);return t>=_h&&t<=wh}/**
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
*/const or="__name__";class ut{constructor(t,e,s){e===void 0?e=0:e>t.length&&He(637,{offset:e,range:t.length}),s===void 0?s=t.length-e:s>t.length-e&&He(1746,{length:s,range:t.length-e}),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return ut.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ut?t.forEach((s=>{e.push(s)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let o=0;o<s;o++){const c=ut.compareSegments(t.get(o),e.get(o));if(c!==0)return c}return Ht(t.length,e.length)}static compareSegments(t,e){const s=ut.isNumericId(t),o=ut.isNumericId(e);return s&&!o?-1:!s&&o?1:s&&o?ut.extractNumericId(t).compare(ut.extractNumericId(e)):yh(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return On.fromString(t.substring(4,t.length-2))}}class st extends ut{construct(t,e,s){return new st(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter((o=>o.length>0)))}return new st(e)}static emptyPath(){return new st([])}}const vh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Jt extends ut{construct(t,e,s){return new Jt(t,e,s)}static isValidIdentifier(t){return vh.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Jt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===or}static keyField(){return new Jt([or])}static fromServerFormat(t){const e=[];let s="",o=0;const c=()=>{if(s.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let h=!1;for(;o<t.length;){const y=t[o];if(y==="\\"){if(o+1===t.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const w=t[o+1];if(w!=="\\"&&w!=="."&&w!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=w,o+=2}else y==="`"?(h=!h,o++):y!=="."||h?(s+=y,o++):(c(),o++)}if(c(),h)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Jt(e)}static emptyPath(){return new Jt([])}}/**
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
*/class Xt{constructor(t){this.path=t}static fromPath(t){return new Xt(st.fromString(t))}static fromName(t){return new Xt(st.fromString(t).popFirst(5))}static empty(){return new Xt(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&st.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return st.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Xt(new st(t.slice()))}}function Ih(n,t,e,s){if(t===!0&&s===!0)throw new O(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function bh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Eh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(e){return e.constructor?e.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":He(12329,{type:typeof n})}function Th(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Eh(n);throw new O(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
*/function H(n,t){const e={typeString:n};return t&&(e.value=t),e}function qe(n,t){if(!bh(n))throw new O(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const s in t)if(t[s]){const o=t[s].typeString,c="value"in t[s]?{value:t[s].value}:void 0;if(!(s in n)){e=`JSON missing required field: '${s}'`;break}const h=n[s];if(o&&typeof h!==o){e=`JSON field '${s}' must be a ${o}.`;break}if(c!==void 0&&h!==c.value){e=`Expected '${s}' field to equal '${c.value}'`;break}}if(e)throw new O(P.INVALID_ARGUMENT,e);return!0}/**
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
*/const ar=-62135596800,cr=1e6;class dt{static now(){return dt.fromMillis(Date.now())}static fromDate(t){return dt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor((t-1e3*e)*cr);return new dt(e,s)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ar)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/cr}_compareTo(t){return this.seconds===t.seconds?Ht(this.nanoseconds,t.nanoseconds):Ht(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:dt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(qe(t,dt._jsonSchema))return new dt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-ar;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}dt._jsonSchemaVersion="firestore/timestamp/1.0",dt._jsonSchema={type:H("string",dt._jsonSchemaVersion),seconds:H("number"),nanoseconds:H("number")};function Sh(n){return n.name==="IndexedDbTransactionError"}/**
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
*/class Ah extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
*/class ee{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ah("Invalid base64 string: "+o):o}})(t);return new ee(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let c=0;c<s.length;++c)o+=String.fromCharCode(s[c]);return o})(t);return new ee(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const e=new Uint8Array(t.length);for(let s=0;s<t.length;s++)e[s]=t.charCodeAt(s);return e})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ht(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ee.EMPTY_BYTE_STRING=new ee("");const bn="(default)";class Ii{constructor(t,e){this.projectId=t,this.database=e||bn}static empty(){return new Ii("","")}get isDefaultDatabase(){return this.database===bn}isEqual(t){return t instanceof Ii&&t.projectId===this.projectId&&t.database===this.database}}/**
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
*/class kh{constructor(t,e=null,s=[],o=[],c=null,h="F",y=null,w=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=o,this.limit=c,this.limitType=h,this.startAt=y,this.endAt=w,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Ch(n){return new kh(n)}/**
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
*/var hr,N;(N=hr||(hr={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
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
*/new On([4294967295,4294967295],0);/**
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
*/const Rh=41943040;/**
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
*/const Nh=1048576;function fn(){return typeof document<"u"?document:null}/**
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
*/class Ph{constructor(t,e,s=1e3,o=1.5,c=6e4){this.Mi=t,this.timerId=e,this.d_=s,this.A_=o,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,e-s);o>0&&rt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
*/class Ln{constructor(t,e,s,o,c){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=o,this.removalCallback=c,this.deferred=new je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,o,c){const h=Date.now()+s,y=new Ln(t,e,h,o,c);return y.start(s),y}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var lr,ur;(ur=lr||(lr={})).Ma="default",ur.Cache="cache";/**
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
*/function Oh(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
*/const dr=new Map;/**
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
*/const ro="firestore.googleapis.com",fr=!0;class pr{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ro,this.ssl=fr}else this.host=t.host,this.ssl=t.ssl??fr;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Rh;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Nh)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ih("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Oh(t.experimentalLongPollingOptions??{}),(function(e){if(e.timeoutSeconds!==void 0){if(isNaN(e.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(e,s){return e.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class oo{constructor(t,e,s,o){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pr(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(e){if(!e)return new hh;switch(e.type){case"firstParty":return new fh(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const e=dr.get(t);e&&(rt("ComponentProvider","Removing Datastore"),dr.delete(t),e.terminate())})(this),Promise.resolve()}}function Dh(n,t,e,s={}){n=Th(n,oo);const o=ye(t),c=n._getSettings(),h={...c,emulatorOptions:n._getEmulatorOptions()},y=`${t}:${e}`;o&&(kn(`https://${y}`),Cn("Firestore",!0)),c.host!==ro&&c.host!==y&&ch("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const w={...c,host:y,ssl:o,emulatorOptions:s};if(!Qt(w,h)&&(n._setSettings(w),s.mockUserToken)){let b,S;if(typeof s.mockUserToken=="string")b=s.mockUserToken,S=J.MOCK_USER;else{b=Xr(s.mockUserToken,n._app?.options.projectId);const E=s.mockUserToken.sub||s.mockUserToken.user_id;if(!E)throw new O(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new J(E)}n._authCredentials=new lh(new so(b,S))}}/**
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
*/class Mn{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Mn(this.firestore,t,this._query)}}class ft{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ft(this.firestore,t,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,s){if(qe(e,ft._jsonSchema))return new ft(t,s||null,new Xt(st.fromString(e.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:H("string",ft._jsonSchemaVersion),referencePath:H("string")};class Un extends Mn{constructor(t,e,s){super(t,e,Ch(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ft(this.firestore,null,new Xt(t))}withConverter(t){return new Un(this.firestore,t,this._path)}}/**
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
*/const gr="AsyncQueue";class mr{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ph(this,"async_queue_retry"),this._c=()=>{const s=fn();s&&rt(gr,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const e=fn();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=fn();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new je;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Sh(t))throw t;rt(gr,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((s=>{throw this.nc=s,this.rc=!1,io("INTERNAL UNHANDLED ERROR: ",yr(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=e,e}enqueueAfterDelay(t,e,s){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const o=Ln.createAndSchedule(this,t,e,s,(c=>this.hc(c)));return this.tc.push(o),o}uc(){this.nc&&He(47125,{Pc:yr(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,s)=>e.targetTimeMs-s.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function yr(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Lh extends oo{constructor(t,e,s,o){super(t,e,s,o),this.type="firestore",this._queue=new mr,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new mr(t),this._firestoreClient=void 0,await t}}}function Mh(n,t){const e=typeof n=="object"?n:Pn(),s=typeof n=="string"?n:bn,o=Pi(e,"firestore").getImmediate({identifier:s});if(!o._initialized){const c=qr("firestore");c&&Dh(o,...c)}return o}/**
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
*/class It{constructor(t){this._byteString=t}static fromBase64String(t){try{return new It(ee.fromBase64String(t))}catch(e){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new It(ee.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:It._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(qe(t,It._jsonSchema))return It.fromBase64String(t.bytes)}}It._jsonSchemaVersion="firestore/bytes/1.0",It._jsonSchema={type:H("string",It._jsonSchemaVersion),bytes:H("string")};/**
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
*/class ao{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Jt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
*/class Zt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(e,s){if(e.length!==s.length)return!1;for(let o=0;o<e.length;++o)if(e[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Zt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(qe(t,Zt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Zt(t.vectorValues);throw new O(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Zt._jsonSchemaVersion="firestore/vectorValue/1.0",Zt._jsonSchema={type:H("string",Zt._jsonSchemaVersion),vectorValues:H("object")};const Uh=new RegExp("[~\\*/\\[\\]]");function xh(n,t,e){if(t.search(Uh)>=0)throw _r(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new ao(...t.split("."))._internalPath}catch{throw _r(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function _r(n,t,e,s,o){let c=`Function ${t}() called with invalid data`;c+=". ";let h="";return new O(P.INVALID_ARGUMENT,c+n+h)}/**
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
*/class co{constructor(t,e,s,o,c){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new jh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ho("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class jh extends co{data(){return super.data()}}function ho(n,t){return typeof t=="string"?xh(n,t):t instanceof ao?t._internalPath:t._delegate._internalPath}class ui{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ue extends co{constructor(t,e,s,o,c,h){super(t,e,s,o,h),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new pi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(ho("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=ue._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()||(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED")),e}}ue._jsonSchemaVersion="firestore/documentSnapshot/1.0",ue._jsonSchema={type:H("string",ue._jsonSchemaVersion),bundleSource:H("string","DocumentSnapshot"),bundleName:H("string"),bundle:H("string")};class pi extends ue{data(t={}){return super.data(t)}}class Fe{constructor(t,e,s,o){this._firestore=t,this._userDataWriter=e,this._snapshot=o,this.metadata=new ui(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((s=>{t.call(e,new pi(this._firestore,this._userDataWriter,s.key,s,new ui(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let c=0;return s._snapshot.docChanges.map((h=>{const y=new pi(s._firestore,s._userDataWriter,h.doc.key,h.doc,new ui(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);return h.doc,{type:"added",doc:y,oldIndex:-1,newIndex:c++}}))}{let c=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((h=>o||h.type!==3)).map((h=>{const y=new pi(s._firestore,s._userDataWriter,h.doc.key,h.doc,new ui(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);let w=-1,b=-1;return h.type!==0&&(w=c.indexOf(h.doc.key),c=c.delete(h.doc.key)),h.type!==1&&(c=c.add(h.doc),b=c.indexOf(h.doc.key)),{type:Fh(h.type),doc:y,oldIndex:w,newIndex:b}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Fe._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=mh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],s=[],o=[];return this.docs.forEach((c=>{c._document!==null&&(e.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Fh(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return He(61501,{type:n})}}Fe._jsonSchemaVersion="firestore/querySnapshot/1.0",Fe._jsonSchema={type:H("string",Fe._jsonSchemaVersion),bundleSource:H("string","QuerySnapshot"),bundleName:H("string"),bundle:H("string")};(function(n,t=!0){(function(e){Ge=e})(se),te(new Bt("firestore",((e,{instanceIdentifier:s,options:o})=>{const c=e.getProvider("app").getImmediate(),h=new Lh(new uh(e.getProvider("auth-internal")),new ph(c,e.getProvider("app-check-internal")),(function(y,w){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ii(y.options.projectId,w)})(c,s),c);return o={useFetchStreams:t,...o},h._setSettings(o),h}),"PUBLIC").setMultipleInstances(!0)),pt(nr,sr,n),pt(nr,sr,"esm2020")})();function lo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vh=lo,uo=new We("auth","Firebase",lo());/**
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
*/const bi=new Rn("@firebase/auth");function Bh(n,...t){bi.logLevel<=D.WARN&&bi.warn(`Auth (${se}): ${n}`,...t)}function gi(n,...t){bi.logLevel<=D.ERROR&&bi.error(`Auth (${se}): ${n}`,...t)}/**
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
*/function ct(n,...t){throw xn(n,...t)}function gt(n,...t){return xn(n,...t)}function fo(n,t,e){const s={...Vh(),[t]:e};return new We("auth","Firebase",s).create(t,{appName:n.name})}function Tt(n){return fo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xn(n,...t){if(typeof n!="string"){const e=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(e,...s)}return uo.create(n,...t)}function A(n,t,...e){if(!n)throw xn(t,...e)}function bt(n){const t="INTERNAL ASSERTION FAILED: "+n;throw gi(t),new Error(t)}function At(n,t){n||bt(t)}/**
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
*/function En(){return typeof self<"u"&&self.location?.href||""}function Hh(){return wr()==="http:"||wr()==="https:"}function wr(){return typeof self<"u"&&self.location?.protocol||null}/**
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
*/function $h(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hh()||Va()||"connection"in navigator)?navigator.onLine:!0}function Wh(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
*/class Ke{constructor(t,e){this.shortDelay=t,this.longDelay=e,At(e>t,"Short delay should be less than long delay!"),this.isMobile=ja()||Ba()}get(){return $h()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
*/function jn(n,t){At(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
*/class po{static initialize(t,e,s){this.fetchImpl=t,e&&(this.headersImpl=e),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
*/const zh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
*/const Gh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qh=new Ke(3e4,6e4);function kt(n,t){return n.tenantId&&!t.tenantId?{...t,tenantId:n.tenantId}:t}async function wt(n,t,e,s,o={}){return go(n,o,async()=>{let c={},h={};s&&(t==="GET"?h=s:c={body:JSON.stringify(s)});const y=ze({key:n.config.apiKey,...h}).slice(1),w=await n._getAdditionalHeaders();w["Content-Type"]="application/json",n.languageCode&&(w["X-Firebase-Locale"]=n.languageCode);const b={method:t,headers:w,...c};return Fa()||(b.referrerPolicy="no-referrer"),n.emulatorConfig&&ye(n.emulatorConfig.host)&&(b.credentials="include"),po.fetch()(await mo(n,n.config.apiHost,e,y),b)})}async function go(n,t,e){n._canInitEmulator=!1;const s={...zh,...t};try{const o=new Jh(n),c=await Promise.race([e(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw di(n,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const y=c.ok?h.errorMessage:h.error.message,[w,b]=y.split(" : ");if(w==="FEDERATED_USER_ID_ALREADY_LINKED")throw di(n,"credential-already-in-use",h);if(w==="EMAIL_EXISTS")throw di(n,"email-already-in-use",h);if(w==="USER_DISABLED")throw di(n,"user-disabled",h);const S=s[w]||w.toLowerCase().replace(/[_\s]+/g,"-");if(b)throw fo(n,S,b);ct(n,S)}}catch(o){if(o instanceof _t)throw o;ct(n,"network-request-failed",{message:String(o)})}}async function Je(n,t,e,s,o={}){const c=await wt(n,t,e,s,o);return"mfaPendingCredential"in c&&ct(n,"multi-factor-auth-required",{_serverResponse:c}),c}async function mo(n,t,e,s){const o=`${t}${e}?${s}`,c=n,h=c.config.emulator?jn(n.config,o):`${n.config.apiScheme}://${o}`;return Gh.includes(e)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}function Kh(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Jh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,s)=>{this.timer=setTimeout(()=>s(gt(this.auth,"network-request-failed")),qh.get())})}}function di(n,t,e){const s={appName:n.name};e.email&&(s.email=e.email),e.phoneNumber&&(s.phoneNumber=e.phoneNumber);const o=gt(n,t,s);return o.customData._tokenResponse=e,o}function vr(n){return n!==void 0&&n.enterprise!==void 0}class Xh{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return Kh(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Yh(n,t){return wt(n,"GET","/v2/recaptchaConfig",kt(n,t))}/**
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
*/async function Zh(n,t){return wt(n,"POST","/v1/accounts:delete",t)}async function Ei(n,t){return wt(n,"POST","/v1/accounts:lookup",t)}/**
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
*/function Ve(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Qh(n,t=!1){const e=it(n),s=await e.getIdToken(t),o=Fn(s);A(o&&o.exp&&o.auth_time&&o.iat,e.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c?.sign_in_provider;return{claims:o,token:s,authTime:Ve(pn(o.auth_time)),issuedAtTime:Ve(pn(o.iat)),expirationTime:Ve(pn(o.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function pn(n){return Number(n)*1e3}function Fn(n){const[t,e,s]=n.split(".");if(t===void 0||e===void 0||s===void 0)return gi("JWT malformed, contained fewer than 3 sections"),null;try{const o=zr(e);return o?JSON.parse(o):(gi("Failed to decode base64 JWT payload"),null)}catch(o){return gi("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Ir(n){const t=Fn(n);return A(t,"internal-error"),A(typeof t.exp<"u","internal-error"),A(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
*/async function me(n,t,e=!1){if(e)return t;try{return await t}catch(s){throw s instanceof _t&&tl(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function tl({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
*/class el{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
*/class Tn{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ve(this.lastLoginAt),this.creationTime=Ve(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
*/async function Ti(n){const t=n.auth,e=await n.getIdToken(),s=await me(n,Ei(t,{idToken:e}));A(s?.users.length,t,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const c=o.providerUserInfo?.length?yo(o.providerUserInfo):[],h=nl(n.providerData,c),y=n.isAnonymous,w=!(n.email&&o.passwordHash)&&!h?.length,b=y?w:!1,S={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Tn(o.createdAt,o.lastLoginAt),isAnonymous:b};Object.assign(n,S)}async function il(n){const t=it(n);await Ti(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function nl(n,t){return[...n.filter(e=>!t.some(s=>s.providerId===e.providerId)),...t]}function yo(n){return n.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
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
*/async function sl(n,t){const e=await go(n,{},async()=>{const s=ze({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:c}=n.config,h=await mo(n,o,"/v1/token",`key=${c}`),y=await n._getAdditionalHeaders();y["Content-Type"]="application/x-www-form-urlencoded";const w={method:"POST",headers:y,body:s};return n.emulatorConfig&&ye(n.emulatorConfig.host)&&(w.credentials="include"),po.fetch()(h,w)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function rl(n,t){return wt(n,"POST","/v2/accounts:revokeToken",kt(n,t))}/**
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
*/class de{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){A(t.idToken,"internal-error"),A(typeof t.idToken<"u","internal-error"),A(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ir(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){A(t.length!==0,"internal-error");const e=Ir(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:s,refreshToken:o,expiresIn:c}=await sl(t,e);this.updateTokensAndExpiration(s,o,Number(c))}updateTokensAndExpiration(t,e,s){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,e){const{refreshToken:s,accessToken:o,expirationTime:c}=e,h=new de;return s&&(A(typeof s=="string","internal-error",{appName:t}),h.refreshToken=s),o&&(A(typeof o=="string","internal-error",{appName:t}),h.accessToken=o),c&&(A(typeof c=="number","internal-error",{appName:t}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new de,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
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
*/function Lt(n,t){A(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class ot{constructor({uid:t,auth:e,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new el(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Tn(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const e=await me(this,this.stsTokenManager.getToken(this.auth,t));return A(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Qh(this,t)}reload(){return il(this)}_assign(t){this!==t&&(A(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ot({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),e&&await Ti(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Q(this.auth.app))return Promise.reject(Tt(this.auth));const t=await this.getIdToken();return await me(this,Zh(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const s=e.displayName??void 0,o=e.email??void 0,c=e.phoneNumber??void 0,h=e.photoURL??void 0,y=e.tenantId??void 0,w=e._redirectEventId??void 0,b=e.createdAt??void 0,S=e.lastLoginAt??void 0,{uid:E,emailVerified:R,isAnonymous:U,providerData:L,stsTokenManager:M}=e;A(E&&M,t,"internal-error");const C=de.fromJSON(this.name,M);A(typeof E=="string",t,"internal-error"),Lt(s,t.name),Lt(o,t.name),A(typeof R=="boolean",t,"internal-error"),A(typeof U=="boolean",t,"internal-error"),Lt(c,t.name),Lt(h,t.name),Lt(y,t.name),Lt(w,t.name),Lt(b,t.name),Lt(S,t.name);const B=new ot({uid:E,auth:t,email:o,emailVerified:R,displayName:s,isAnonymous:U,photoURL:h,phoneNumber:c,tenantId:y,stsTokenManager:C,createdAt:b,lastLoginAt:S});return L&&Array.isArray(L)&&(B.providerData=L.map($=>({...$}))),w&&(B._redirectEventId=w),B}static async _fromIdTokenResponse(t,e,s=!1){const o=new de;o.updateFromServerResponse(e);const c=new ot({uid:e.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await Ti(c),c}static async _fromGetAccountInfoResponse(t,e,s){const o=e.users[0];A(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?yo(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!c?.length,y=new de;y.updateFromIdToken(s);const w=new ot({uid:o.localId,auth:t,stsTokenManager:y,isAnonymous:h}),b={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Tn(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!c?.length};return Object.assign(w,b),w}}/**
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
*/const br=new Map;function Et(n){At(n instanceof Function,"Expected a class definition");let t=br.get(n);return t?(At(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,br.set(n,t),t)}/**
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
*/class _o{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}_o.type="NONE";const Er=_o;/**
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
*/function mi(n,t,e){return`firebase:${n}:${t}:${e}`}class fe{constructor(t,e,s){this.persistence=t,this.auth=e,this.userKey=s;const{config:o,name:c}=this.auth;this.fullUserKey=mi(this.userKey,o.apiKey,c),this.fullPersistenceKey=mi("persistence",o.apiKey,c),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await Ei(this.auth,{idToken:t}).catch(()=>{});return e?ot._fromGetAccountInfoResponse(this.auth,e,t):null}return ot._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,s="authUser"){if(!e.length)return new fe(Et(Er),t,s);const o=(await Promise.all(e.map(async b=>{if(await b._isAvailable())return b}))).filter(b=>b);let c=o[0]||Et(Er);const h=mi(s,t.config.apiKey,t.name);let y=null;for(const b of e)try{const S=await b._get(h);if(S){let E;if(typeof S=="string"){const R=await Ei(t,{idToken:S}).catch(()=>{});if(!R)break;E=await ot._fromGetAccountInfoResponse(t,R,S)}else E=ot._fromJSON(t,S);b!==c&&(y=E),c=b;break}}catch{}const w=o.filter(b=>b._shouldAllowMigration);return!c._shouldAllowMigration||!w.length?new fe(c,t,s):(c=w[0],y&&await c._set(h,y.toJSON()),await Promise.all(e.map(async b=>{if(b!==c)try{await b._remove(h)}catch{}})),new fe(c,t,s))}}/**
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
*/function Tr(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(bo(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(wo(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(To(t))return"Blackberry";if(So(t))return"Webos";if(vo(t))return"Safari";if((t.includes("chrome/")||Io(t))&&!t.includes("edge/"))return"Chrome";if(Eo(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(e);if(s?.length===2)return s[1]}return"Other"}function wo(n=X()){return/firefox\//i.test(n)}function vo(n=X()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Io(n=X()){return/crios\//i.test(n)}function bo(n=X()){return/iemobile/i.test(n)}function Eo(n=X()){return/android/i.test(n)}function To(n=X()){return/blackberry/i.test(n)}function So(n=X()){return/webos/i.test(n)}function Vn(n=X()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ol(n=X()){return Vn(n)&&!!window.navigator?.standalone}function al(){return Ha()&&document.documentMode===10}function Ao(n=X()){return Vn(n)||Eo(n)||So(n)||To(n)||/windows phone/i.test(n)||bo(n)}/**
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
*/function ko(n,t=[]){let e;switch(n){case"Browser":e=Tr(X());break;case"Worker":e=`${Tr(X())}-${n}`;break;default:e=n}const s=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${se}/${s}`}/**
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
*/class cl{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const s=c=>new Promise((h,y)=>{try{const w=t(c);h(w)}catch(w){y(w)}});s.onAbort=e,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const s of this.queue)await s(t),s.onAbort&&e.push(s.onAbort)}catch(s){e.reverse();for(const o of e)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
*/async function hl(n,t={}){return wt(n,"GET","/v2/passwordPolicy",kt(n,t))}/**
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
*/const ll=6;class ul{constructor(t){const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??ll,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(e.meetsMinPasswordLength=t.length>=s),o&&(e.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(e,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,e,s,o,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
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
*/class dl{constructor(t,e,s,o){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sr(this),this.idTokenSubscription=new Sr(this),this.beforeStateQueue=new cl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Et(e)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await fe.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Ei(this,{idToken:t}),s=await ot._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(s)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Q(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let s=e,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,h=s?._redirectEventId,y=await this.tryRedirectSignIn(t);(!c||c===h)&&y?.user&&(s=y.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Ti(t)}catch(e){if(e?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Wh()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Q(this.app))return Promise.reject(Tt(this));const e=t?it(t):null;return e&&A(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&A(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Q(this.app)?Promise.reject(Tt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Q(this.app)?Promise.reject(Tt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await hl(this),e=new ul(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new We("auth","Firebase",t())}onAuthStateChanged(t,e,s){return this.registerStateListener(this.authStateSubscription,t,e,s)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,s){return this.registerStateListener(this.idTokenSubscription,t,e,s)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(s.tenantId=this.tenantId),await rl(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,e){const s=await this.getOrInitRedirectPersistenceManager(e);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Et(t)||this._popupRedirectResolver;A(e,this,"argument-error"),this.redirectPersistenceManager=await fe.create(this,[Et(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,s,o){if(this._deleted)return()=>{};const c=typeof e=="function"?e:e.next.bind(e);let h=!1;const y=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(y,this,"internal-error"),y.then(()=>{h||c(this.currentUser)}),typeof e=="function"){const w=t.addObserver(e,s,o);return()=>{h=!0,w()}}else{const w=t.addObserver(e);return()=>{h=!0,w()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ko(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();e&&(t["X-Firebase-Client"]=e);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){if(Q(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&Bh(`Error while retrieving App Check token: ${t.error}`),t?.token}}function $t(n){return it(n)}class Sr{constructor(t){this.auth=t,this.observer=null,this.addObserver=Ja(e=>this.observer=e)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
*/let Oi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fl(n){Oi=n}function Co(n){return Oi.loadJS(n)}function pl(){return Oi.recaptchaEnterpriseScript}function gl(){return Oi.gapiScript}function ml(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class yl{constructor(){this.enterprise=new _l}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class _l{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const wl="recaptcha-enterprise",Ro="NO_RECAPTCHA";class vl{constructor(t){this.type=wl,this.auth=$t(t)}async verify(t="verify",e=!1){async function s(c){if(!e){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(h,y)=>{Yh(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(w=>{if(w.recaptchaKey===void 0)y(new Error("recaptcha Enterprise site key undefined"));else{const b=new Xh(w);return c.tenantId==null?c._agentRecaptchaConfig=b:c._tenantRecaptchaConfigs[c.tenantId]=b,h(b.siteKey)}}).catch(w=>{y(w)})})}function o(c,h,y){const w=window.grecaptcha;vr(w)?w.enterprise.ready(()=>{w.enterprise.execute(c,{action:t}).then(b=>{h(b)}).catch(()=>{h(Ro)})}):y(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new yl().execute("siteKey",{action:"verify"}):new Promise((c,h)=>{s(this.auth).then(y=>{if(!e&&vr(window.grecaptcha))o(y,c,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let w=pl();w.length!==0&&(w+=y),Co(w).then(()=>{o(y,c,h)}).catch(b=>{h(b)})}}).catch(y=>{h(y)})})}}async function Ar(n,t,e,s=!1,o=!1){const c=new vl(n);let h;if(o)h=Ro;else try{h=await c.verify(e)}catch{h=await c.verify(e,!0)}const y={...t};if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in y){const w=y.phoneEnrollmentInfo.phoneNumber,b=y.phoneEnrollmentInfo.recaptchaToken;Object.assign(y,{phoneEnrollmentInfo:{phoneNumber:w,recaptchaToken:b,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in y){const w=y.phoneSignInInfo.recaptchaToken;Object.assign(y,{phoneSignInInfo:{recaptchaToken:w,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return y}return s?Object.assign(y,{captchaResp:h}):Object.assign(y,{captchaResponse:h}),Object.assign(y,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(y,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),y}async function Si(n,t,e,s,o){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Ar(n,t,e,e==="getOobCode");return s(n,c)}else return s(n,t).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Ar(n,t,e,e==="getOobCode");return s(n,h)}else return Promise.reject(c)})}/**
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
*/function Il(n,t){const e=Pi(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),o=e.getOptions();if(Qt(o,t??{}))return s;ct(s,"already-initialized")}return e.initialize({options:t})}function bl(n,t){const e=t?.persistence||[],s=(Array.isArray(e)?e:[e]).map(Et);t?.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(s,t?.popupRedirectResolver)}function El(n,t,e){const s=$t(n);A(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,c=No(t),{host:h,port:y}=Tl(t),w=y===null?"":`:${y}`,b={url:`${c}//${h}${w}/`},S=Object.freeze({host:h,port:y,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){A(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),A(Qt(b,s.config.emulator)&&Qt(S,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=b,s.emulatorConfig=S,s.settings.appVerificationDisabledForTesting=!0,ye(h)?(kn(`${c}//${h}${w}`),Cn("Auth",!0)):Sl()}function No(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Tl(n){const t=No(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const s=e[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const c=o[1];return{host:c,port:kr(s.substr(c.length+1))}}else{const[c,h]=s.split(":");return{host:c,port:kr(h)}}}function kr(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Sl(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
*/class Bn{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return bt("not implemented")}_getIdTokenResponse(t){return bt("not implemented")}_linkToIdToken(t,e){return bt("not implemented")}_getReauthenticationResolver(t){return bt("not implemented")}}async function Al(n,t){return wt(n,"POST","/v1/accounts:signUp",t)}/**
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
*/async function kl(n,t){return Je(n,"POST","/v1/accounts:signInWithPassword",kt(n,t))}async function Po(n,t){return wt(n,"POST","/v1/accounts:sendOobCode",kt(n,t))}async function Cl(n,t){return Po(n,t)}async function Rl(n,t){return Po(n,t)}/**
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
*/async function Nl(n,t){return Je(n,"POST","/v1/accounts:signInWithEmailLink",kt(n,t))}async function Pl(n,t){return Je(n,"POST","/v1/accounts:signInWithEmailLink",kt(n,t))}/**
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
*/class $e extends Bn{constructor(t,e,s,o=null){super("password",s),this._email=t,this._password=e,this._tenantId=o}static _fromEmailAndPassword(t,e){return new $e(t,e,"password")}static _fromEmailAndCode(t,e,s=null){return new $e(t,e,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e?.email&&e?.password){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Si(t,e,"signInWithPassword",kl);case"emailLink":return Nl(t,{email:this._email,oobCode:this._password});default:ct(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const s={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Si(t,s,"signUpPassword",Al);case"emailLink":return Pl(t,{idToken:e,email:this._email,oobCode:this._password});default:ct(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
*/const Ol="http://localhost";class ie extends Bn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ie(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):ct("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o,...c}=e;if(!s||!o)return null;const h=new ie(s,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(t){const e=this.buildRequest();return pe(t,e)}_linkToIdToken(t,e){const s=this.buildRequest();return s.idToken=e,pe(t,s)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,pe(t,e)}buildRequest(){const t={requestUri:Ol,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=ze(e)}return t}}/**
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
*/function Dl(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ll(n){const t=Le(Me(n)).link,e=t?Le(Me(t)).deep_link_id:null,s=Le(Me(n)).deep_link_id;return(s?Le(Me(s)).link:null)||s||e||t||n}class Hn{constructor(t){const e=Le(Me(t)),s=e.apiKey??null,o=e.oobCode??null,c=Dl(e.mode??null);A(s&&o&&c,"argument-error"),this.apiKey=s,this.operation=c,this.code=o,this.continueUrl=e.continueUrl??null,this.languageCode=e.lang??null,this.tenantId=e.tenantId??null}static parseLink(t){const e=Ll(t);try{return new Hn(e)}catch{return null}}}/**
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
*/class _e{constructor(){this.providerId=_e.PROVIDER_ID}static credential(t,e){return $e._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const s=Hn.parseLink(e);return A(s,"argument-error"),$e._fromEmailAndCode(t,s.code,s.tenantId)}}_e.PROVIDER_ID="password";_e.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_e.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
*/class Oo{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
*/class Xe extends Oo{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
*/class Mt extends Xe{constructor(){super("facebook.com")}static credential(t){return ie._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mt.credential(t.oauthAccessToken)}catch{return null}}}Mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mt.PROVIDER_ID="facebook.com";/**
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
*/class Ut extends Xe{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ie._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:s}=t;if(!e&&!s)return null;try{return Ut.credential(e,s)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
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
*/class xt extends Xe{constructor(){super("github.com")}static credential(t){return ie._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return xt.credential(t.oauthAccessToken)}catch{return null}}}xt.GITHUB_SIGN_IN_METHOD="github.com";xt.PROVIDER_ID="github.com";/**
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
*/class jt extends Xe{constructor(){super("twitter.com")}static credential(t,e){return ie._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:s}=t;if(!e||!s)return null;try{return jt.credential(e,s)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
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
*/async function Ml(n,t){return Je(n,"POST","/v1/accounts:signUp",kt(n,t))}/**
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
*/class ne{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,s,o=!1){const c=await ot._fromIdTokenResponse(t,s,o),h=Cr(s);return new ne({user:c,providerId:h,_tokenResponse:s,operationType:e})}static async _forOperation(t,e,s){await t._updateTokensIfNecessary(s,!0);const o=Cr(s);return new ne({user:t,providerId:o,_tokenResponse:s,operationType:e})}}function Cr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
*/class Ai extends _t{constructor(t,e,s,o){super(e.code,e.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Ai.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,e,s,o){return new Ai(t,e,s,o)}}function Do(n,t,e,s){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ai._fromErrorAndOperation(n,o,t,s):o})}async function Ul(n,t,e=!1){const s=await me(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return ne._forOperation(n,"link",s)}/**
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
*/async function xl(n,t,e=!1){const{auth:s}=n;if(Q(s.app))return Promise.reject(Tt(s));const o="reauthenticate";try{const c=await me(n,Do(s,o,t,n),e);A(c.idToken,s,"internal-error");const h=Fn(c.idToken);A(h,s,"internal-error");const{sub:y}=h;return A(n.uid===y,s,"user-mismatch"),ne._forOperation(n,o,c)}catch(c){throw c?.code==="auth/user-not-found"&&ct(s,"user-mismatch"),c}}/**
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
*/async function Lo(n,t,e=!1){if(Q(n.app))return Promise.reject(Tt(n));const s="signIn",o=await Do(n,s,t),c=await ne._fromIdTokenResponse(n,s,o);return e||await n._updateCurrentUser(c.user),c}async function jl(n,t){return Lo($t(n),t)}/**
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
*/function Fl(n,t,e){A(e.url?.length>0,n,"invalid-continue-uri"),A(typeof e.dynamicLinkDomain>"u"||e.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),A(typeof e.linkDomain>"u"||e.linkDomain.length>0,n,"invalid-hosting-link-domain"),t.continueUrl=e.url,t.dynamicLinkDomain=e.dynamicLinkDomain,t.linkDomain=e.linkDomain,t.canHandleCodeInApp=e.handleCodeInApp,e.iOS&&(A(e.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),t.iOSBundleId=e.iOS.bundleId),e.android&&(A(e.android.packageName.length>0,n,"missing-android-pkg-name"),t.androidInstallApp=e.android.installApp,t.androidMinimumVersionCode=e.android.minimumVersion,t.androidPackageName=e.android.packageName)}/**
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
*/async function Mo(n){const t=$t(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Pd(n,t,e){const s=$t(n);await Si(s,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Rl)}async function Od(n,t,e){if(Q(n.app))return Promise.reject(Tt(n));const s=$t(n),o=await Si(s,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ml).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&Mo(n),h}),c=await ne._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(c.user),c}function Dd(n,t,e){return Q(n.app)?Promise.reject(Tt(n)):jl(it(n),_e.credential(t,e)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Mo(n),s})}async function Ld(n,t){const e=it(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};t&&Fl(e.auth,s,t);const{email:o}=await Cl(e.auth,s);o!==n.email&&await n.reload()}/**
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
*/async function Vl(n,t){return wt(n,"POST","/v1/accounts:update",t)}/**
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
*/async function Md(n,{displayName:t,photoURL:e}){if(t===void 0&&e===void 0)return;const s=it(n),o={idToken:await s.getIdToken(),displayName:t,photoUrl:e,returnSecureToken:!0},c=await me(s,Vl(s.auth,o));s.displayName=c.displayName||null,s.photoURL=c.photoUrl||null;const h=s.providerData.find(({providerId:y})=>y==="password");h&&(h.displayName=s.displayName,h.photoURL=s.photoURL),await s._updateTokensIfNecessary(c)}function Bl(n,t,e,s){return it(n).onIdTokenChanged(t,e,s)}function Hl(n,t,e){return it(n).beforeAuthStateChanged(t,e)}function Ud(n,t,e,s){return it(n).onAuthStateChanged(t,e,s)}function xd(n){return it(n).signOut()}const ki="__sak";/**
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
*/class Uo{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(ki,"1"),this.storage.removeItem(ki),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
*/const $l=1e3,Wl=10;class xo extends Uo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ao(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const s=this.storage.getItem(e),o=this.localCache[e];s!==o&&t(e,o,s)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((h,y,w)=>{this.notifyListeners(h,w)});return}const s=t.key;e?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!e&&this.localCache[s]===h||this.notifyListeners(s,h)},c=this.storage.getItem(s);al()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,Wl):o()}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:s}),!0)})},$l)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}xo.type="LOCAL";const zl=xo;/**
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
*/class jo extends Uo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}jo.type="SESSION";const Fo=jo;/**
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
*/function Gl(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
*/class Di{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(o=>o.isListeningto(t));if(e)return e;const s=new Di(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:s,eventType:o,data:c}=e.data,h=this.handlersMap[o];if(!h?.size)return;e.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const y=Array.from(h).map(async b=>b(e.origin,c)),w=await Gl(y);e.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:w})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Di.receivers=[];/**
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
*/function $n(n="",t=10){let e="";for(let s=0;s<t;s++)e+=Math.floor(Math.random()*10);return n+e}/**
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
*/class ql{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((y,w)=>{const b=$n("",20);o.port1.start();const S=setTimeout(()=>{w(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(E){const R=E;if(R.data.eventId===b)switch(R.data.status){case"ack":clearTimeout(S),c=setTimeout(()=>{w(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),y(R.data.response);break;default:clearTimeout(S),clearTimeout(c),w(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:t,eventId:b,data:e},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
*/function mt(){return window}function Kl(n){mt().location.href=n}/**
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
*/function Vo(){return typeof mt().WorkerGlobalScope<"u"&&typeof mt().importScripts=="function"}async function Jl(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xl(){return navigator?.serviceWorker?.controller||null}function Yl(){return Vo()?self:null}/**
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
*/const Bo="firebaseLocalStorageDb",Zl=1,Ci="firebaseLocalStorage",Ho="fbase_key";class Ye{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Li(n,t){return n.transaction([Ci],t?"readwrite":"readonly").objectStore(Ci)}function Ql(){const n=indexedDB.deleteDatabase(Bo);return new Ye(n).toPromise()}function Sn(){const n=indexedDB.open(Bo,Zl);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Ci,{keyPath:Ho})}catch(o){e(o)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Ci)?t(s):(s.close(),await Ql(),t(await Sn()))})})}async function Rr(n,t,e){const s=Li(n,!0).put({[Ho]:t,value:e});return new Ye(s).toPromise()}async function tu(n,t){const e=Li(n,!1).get(t),s=await new Ye(e).toPromise();return s===void 0?null:s.value}function Nr(n,t){const e=Li(n,!0).delete(t);return new Ye(e).toPromise()}const eu=800,iu=3;class $o{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sn(),this.db)}async _withRetries(t){let e=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(e++>iu)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Di._getInstance(Yl()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Jl(),!this.activeServiceWorker)return;this.sender=new ql(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Xl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Sn();return await Rr(t,ki,"1"),await Nr(t,ki),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(s=>Rr(s,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(s=>tu(s,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Nr(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const c=Li(o,!1).getAll();return new Ye(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:c}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),e.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),e.push(o));return e}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$o.type="LOCAL";const nu=$o;new Ke(3e4,6e4);/**
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
*/function su(n,t){return t?Et(t):(A(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
*/class Wn extends Bn{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return pe(t,this._buildIdpRequest())}_linkToIdToken(t,e){return pe(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return pe(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function ru(n){return Lo(n.auth,new Wn(n),n.bypassAuthState)}function ou(n){const{auth:t,user:e}=n;return A(e,t,"internal-error"),xl(e,new Wn(n),n.bypassAuthState)}async function au(n){const{auth:t,user:e}=n;return A(e,t,"internal-error"),Ul(e,new Wn(n),n.bypassAuthState)}/**
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
*/class Wo{constructor(t,e,s,o,c=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:s,postBody:o,tenantId:c,error:h,type:y}=t;if(h){this.reject(h);return}const w={auth:this.auth,requestUri:e,sessionId:s,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(y)(w))}catch(b){this.reject(b)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ru;case"linkViaPopup":case"linkViaRedirect":return au;case"reauthViaPopup":case"reauthViaRedirect":return ou;default:ct(this.auth,"internal-error")}}resolve(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
*/const cu=new Ke(2e3,1e4);class le extends Wo{constructor(t,e,s,o,c){super(t,e,o,c),this.provider=s,this.authWindow=null,this.pollId=null,le.currentPopupAction&&le.currentPopupAction.cancel(),le.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return A(t,this.auth,"internal-error"),t}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const t=$n();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,le.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,cu.get())};t()}}le.currentPopupAction=null;/**
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
*/const hu="pendingRedirect",yi=new Map;class lu extends Wo{constructor(t,e,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,s),this.eventId=null}async execute(){let t=yi.get(this.auth._key());if(!t){try{const e=await uu(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}yi.set(this.auth._key(),t)}return this.bypassAuthState||yi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uu(n,t){const e=pu(t),s=fu(n);if(!await s._isAvailable())return!1;const o=await s._get(e)==="true";return await s._remove(e),o}function du(n,t){yi.set(n._key(),t)}function fu(n){return Et(n._redirectPersistence)}function pu(n){return mi(hu,n.config.apiKey,n.name)}async function gu(n,t,e=!1){if(Q(n.app))return Promise.reject(Tt(n));const s=$t(n),o=su(s,t),c=await new lu(s,o,e).execute();return c&&!e&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,t)),c}/**
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
*/const mu=600*1e3;class yu{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(e=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!_u(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){if(t.error&&!zo(t)){const s=t.error.code?.split("auth/")[1]||"internal-error";e.onError(gt(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const s=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=mu&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pr(t))}saveEventToCache(t){this.cachedEventUids.add(Pr(t)),this.lastProcessedEventTime=Date.now()}}function Pr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function zo({type:n,error:t}){return n==="unknown"&&t?.code==="auth/no-auth-event"}function _u(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zo(n);default:return!1}}/**
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
*/async function wu(n,t={}){return wt(n,"GET","/v1/projects",t)}/**
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
*/const vu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Iu=/^https?/;async function bu(n){if(n.config.emulator)return;const{authorizedDomains:t}=await wu(n);for(const e of t)try{if(Eu(e))return}catch{}ct(n,"unauthorized-domain")}function Eu(n){const t=En(),{protocol:e,hostname:s}=new URL(t);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&c.hostname===s}if(!Iu.test(e))return!1;if(vu.test(n))return s===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
*/const Tu=new Ke(3e4,6e4);function Or(){const n=mt().___jsl;if(n?.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Su(n){return new Promise((t,e)=>{function s(){Or(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Or(),e(gt(n,"network-request-failed"))},timeout:Tu.get()})}if(mt().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(mt().gapi?.load)s();else{const o=ml("iframefcb");return mt()[o]=()=>{gapi.load?s():e(gt(n,"network-request-failed"))},Co(`${gl()}?onload=${o}`).catch(c=>e(c))}}).catch(t=>{throw _i=null,t})}let _i=null;function Au(n){return _i=_i||Su(n),_i}/**
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
*/const ku=new Ke(5e3,15e3),Cu="__/auth/iframe",Ru="emulator/auth/iframe",Nu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ou(n){const t=n.config;A(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?jn(t,Ru):`https://${n.config.authDomain}/${Cu}`,s={apiKey:t.apiKey,appName:n.name,v:se},o=Pu.get(n.config.apiHost);o&&(s.eid=o);const c=n._getFrameworks();return c.length&&(s.fw=c.join(",")),`${e}?${ze(s).slice(1)}`}async function Du(n){const t=await Au(n),e=mt().gapi;return A(e,n,"internal-error"),t.open({where:document.body,url:Ou(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nu,dontclear:!0},s=>new Promise(async(o,c)=>{await s.restyle({setHideOnLeave:!1});const h=gt(n,"network-request-failed"),y=mt().setTimeout(()=>{c(h)},ku.get());function w(){mt().clearTimeout(y),o(s)}s.ping(w).then(w,()=>{c(h)})}))}/**
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
*/const Lu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mu=500,Uu=600,xu="_blank",ju="http://localhost";class Dr{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fu(n,t,e,s=Mu,o=Uu){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let y="";const w={...Lu,width:s.toString(),height:o.toString(),top:c,left:h},b=X().toLowerCase();e&&(y=Io(b)?xu:e),wo(b)&&(t=t||ju,w.scrollbars="yes");const S=Object.entries(w).reduce((R,[U,L])=>`${R}${U}=${L},`,"");if(ol(b)&&y!=="_self")return Vu(t||"",y),new Dr(null);const E=window.open(t||"",y,S);A(E,n,"popup-blocked");try{E.focus()}catch{}return new Dr(E)}function Vu(n,t){const e=document.createElement("a");e.href=n,e.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(s)}/**
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
*/const Bu="__/auth/handler",Hu="emulator/auth/handler",$u=encodeURIComponent("fac");async function Lr(n,t,e,s,o,c){A(n.config.authDomain,n,"auth-domain-config-required"),A(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:s,v:se,eventId:o};if(t instanceof Oo){t.setDefaultLanguage(n.languageCode),h.providerId=t.providerId||"",Ka(t.getCustomParameters())||(h.customParameters=JSON.stringify(t.getCustomParameters()));for(const[S,E]of Object.entries({}))h[S]=E}if(t instanceof Xe){const S=t.getScopes().filter(E=>E!=="");S.length>0&&(h.scopes=S.join(","))}n.tenantId&&(h.tid=n.tenantId);const y=h;for(const S of Object.keys(y))y[S]===void 0&&delete y[S];const w=await n._getAppCheckToken(),b=w?`#${$u}=${encodeURIComponent(w)}`:"";return`${Wu(n)}?${ze(y).slice(1)}${b}`}function Wu({config:n}){return n.emulator?jn(n,Hu):`https://${n.authDomain}/${Bu}`}/**
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
*/const gn="webStorageSupport";class zu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fo,this._completeRedirectFn=gu,this._overrideRedirectResult=du}async _openPopup(t,e,s,o){At(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const c=await Lr(t,e,s,En(),o);return Fu(t,c,$n())}async _openRedirect(t,e,s,o){await this._originValidation(t);const c=await Lr(t,e,s,En(),o);return Kl(c),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:o,promise:c}=this.eventManagers[e];return o?Promise.resolve(o):(At(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(t);return this.eventManagers[e]={promise:s},s.catch(()=>{delete this.eventManagers[e]}),s}async initAndGetManager(t){const e=await Du(t),s=new yu(t);return e.register("authEvent",o=>(A(o?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=e,s}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(gn,{type:gn},s=>{const o=s?.[0]?.[gn];o!==void 0&&e(!!o),ct(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=bu(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Ao()||vo()||Vn()}}const Gu=zu;var Mr="@firebase/auth",Ur="1.11.0";/**
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
*/class qu{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
*/function Ku(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ju(n){te(new Bt("auth",(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:h,authDomain:y}=s.options;A(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const w={apiKey:h,authDomain:y,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ko(n)},b=new dl(s,o,c,w);return bl(b,e),b},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,s)=>{t.getProvider("auth-internal").initialize()})),te(new Bt("auth-internal",t=>{const e=$t(t.getProvider("auth").getImmediate());return(s=>new qu(s))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),pt(Mr,Ur,Ku(n)),pt(Mr,Ur,"esm2020")}/**
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
*/const Xu=300,Yu=Jr("authIdTokenMaxAge")||Xu;let xr=null;const Zu=n=>async t=>{const e=t&&await t.getIdTokenResult(),s=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(s&&s>Yu)return;const o=e?.token;xr!==o&&(xr=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Qu(n=Pn()){const t=Pi(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Il(n,{popupRedirectResolver:Gu,persistence:[nu,zl,Fo]}),s=Jr("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const h=Zu(c.toString());Hl(e,h,()=>h(e.currentUser)),Bl(e,y=>h(y))}}const o=Gr("auth");return o&&El(e,`http://${o}`),e}function td(){return document.getElementsByTagName("head")?.[0]??document}fl({loadJS(n){return new Promise((t,e)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=t,s.onerror=o=>{const c=gt("internal-error");c.customData=o,e(c)},s.type="text/javascript",s.charset="UTF-8",td().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ju("Browser");/**
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
*/const Go="firebasestorage.googleapis.com",ed="storageBucket",id=120*1e3,nd=600*1e3;/**
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
*/class vt extends _t{constructor(t,e,s=0){super(mn(t),`Firebase Storage: ${e} (${mn(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,vt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return mn(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var yt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(yt||(yt={}));function mn(n){return"storage/"+n}function sd(){const n="An unknown error occurred, please check the error payload for server response.";return new vt(yt.UNKNOWN,n)}function rd(){return new vt(yt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function od(){return new vt(yt.CANCELED,"User canceled the upload/download.")}function ad(n){return new vt(yt.INVALID_URL,"Invalid URL '"+n+"'.")}function cd(n){return new vt(yt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function jr(n){return new vt(yt.INVALID_ARGUMENT,n)}function qo(){return new vt(yt.APP_DELETED,"The Firebase app was deleted.")}function hd(n){return new vt(yt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
*/class at{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=at.makeFromUrl(t,e)}catch{return new at(t,"")}if(s.path==="")return s;throw cd(t)}static makeFromUrl(t,e){let s=null;const o="([A-Za-z0-9.\\-_]+)";function c(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const h="(/(.*))?$",y=new RegExp("^gs://"+o+h,"i"),w={bucket:1,path:3};function b(F){F.path_=decodeURIComponent(F.path)}const S="v[A-Za-z0-9_]+",E=e.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",U=new RegExp(`^https?://${E}/${S}/b/${o}/o${R}`,"i"),L={bucket:1,path:3},M=e===Go?"(?:storage.googleapis.com|storage.cloud.google.com)":e,C="([^?#]*)",B=new RegExp(`^https?://${M}/${o}/${C}`,"i"),$=[{regex:y,indices:w,postModify:c},{regex:U,indices:L,postModify:b},{regex:B,indices:{bucket:1,path:2},postModify:b}];for(let F=0;F<$.length;F++){const nt=$[F],tt=nt.regex.exec(t);if(tt){const Y=tt[nt.indices.bucket];let g=tt[nt.indices.path];g||(g=""),s=new at(Y,g),nt.postModify(s);break}}if(s==null)throw ad(t);return s}}class ld{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
*/function ud(n,t,e){let s=1,o=null,c=null,h=!1,y=0;function w(){return y===2}let b=!1;function S(...C){b||(b=!0,t.apply(null,C))}function E(C){o=setTimeout(()=>{o=null,n(U,w())},C)}function R(){c&&clearTimeout(c)}function U(C,...B){if(b){R();return}if(C){R(),S.call(null,C,...B);return}if(w()||h){R(),S.call(null,C,...B);return}s<64&&(s*=2);let $;y===1?(y=2,$=0):$=(s+Math.random())*1e3,E($)}let L=!1;function M(C){L||(L=!0,R(),!b&&(o!==null?(C||(y=2),clearTimeout(o),E(0)):C||(y=1)))}return E(0),c=setTimeout(()=>{h=!0,M(!0)},e),M}function dd(n){n(!1)}/**
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
*/function fd(n){return n!==void 0}function Fr(n,t,e,s){if(s<t)throw jr(`Invalid value for '${n}'. Expected ${t} or greater.`);if(s>e)throw jr(`Invalid value for '${n}'. Expected ${e} or less.`)}function pd(n){const t=encodeURIComponent;let e="?";for(const s in n)if(n.hasOwnProperty(s)){const o=t(s)+"="+t(n[s]);e=e+o+"&"}return e=e.slice(0,-1),e}var Ri;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ri||(Ri={}));/**
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
*/function gd(n,t){const e=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,o=t.indexOf(n)!==-1;return e||s||o}/**
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
*/class md{constructor(t,e,s,o,c,h,y,w,b,S,E,R=!0,U=!1){this.url_=t,this.method_=e,this.headers_=s,this.body_=o,this.successCodes_=c,this.additionalRetryCodes_=h,this.callback_=y,this.errorCallback_=w,this.timeout_=b,this.progressCallback_=S,this.connectionFactory_=E,this.retry=R,this.isUsingEmulator=U,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((L,M)=>{this.resolve_=L,this.reject_=M,this.start_()})}start_(){const t=(s,o)=>{if(o){s(!1,new fi(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const h=y=>{const w=y.loaded,b=y.lengthComputable?y.total:-1;this.progressCallback_!==null&&this.progressCallback_(w,b)};this.progressCallback_!==null&&c.addUploadProgressListener(h),c.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(h),this.pendingConnection_=null;const y=c.getErrorCode()===Ri.NO_ERROR,w=c.getStatus();if(!y||gd(w,this.additionalRetryCodes_)&&this.retry){const S=c.getErrorCode()===Ri.ABORT;s(!1,new fi(!1,null,S));return}const b=this.successCodes_.indexOf(w)!==-1;s(!0,new fi(b,c))})},e=(s,o)=>{const c=this.resolve_,h=this.reject_,y=o.connection;if(o.wasSuccessCode)try{const w=this.callback_(y,y.getResponse());fd(w)?c(w):c()}catch(w){h(w)}else if(y!==null){const w=sd();w.serverResponse=y.getErrorText(),this.errorCallback_?h(this.errorCallback_(y,w)):h(w)}else if(o.canceled){const w=this.appDelete_?qo():od();h(w)}else{const w=rd();h(w)}};this.canceled_?e(!1,new fi(!1,null,!0)):this.backoffId_=ud(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&dd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fi{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function yd(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function _d(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function wd(n,t){t&&(n["X-Firebase-GMPID"]=t)}function vd(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function Id(n,t,e,s,o,c,h=!0,y=!1){const w=pd(n.urlParams),b=n.url+w,S=Object.assign({},n.headers);return wd(S,t),yd(S,e),_d(S,c),vd(S,s),new md(b,n.method,S,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h,y)}/**
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
*/function bd(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function Ed(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
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
*/class Ni{constructor(t,e){this._service=t,e instanceof at?this._location=e:this._location=at.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Ni(t,e)}get root(){const t=new at(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ed(this._location.path)}get storage(){return this._service}get parent(){const t=bd(this._location.path);if(t===null)return null;const e=new at(this._location.bucket,t);return new Ni(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw hd(t)}}function Vr(n,t){const e=t?.[ed];return e==null?null:at.makeFromBucketSpec(e,n)}function Td(n,t,e,s={}){n.host=`${t}:${e}`;const o=ye(t);o&&(kn(`https://${n.host}/b`),Cn("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:c}=s;c&&(n._overrideAuthToken=typeof c=="string"?c:Xr(c,n.app.options.projectId))}class Sd{constructor(t,e,s,o,c,h=!1){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=o,this._firebaseVersion=c,this._isUsingEmulator=h,this._bucket=null,this._host=Go,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=id,this._maxUploadRetryTime=nd,this._requests=new Set,o!=null?this._bucket=at.makeFromBucketSpec(o,this._host):this._bucket=Vr(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=at.makeFromBucketSpec(this._url,t):this._bucket=Vr(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Fr("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Fr("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){if(Q(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ni(this,t)}_makeRequest(t,e,s,o,c=!0){if(this._deleted)return new ld(qo());{const h=Id(t,this._appId,s,o,e,this._firebaseVersion,c,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(t,e){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,o).getPromise()}}const Br="@firebase/storage",Hr="0.14.0";/**
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
*/const Ko="storage";function Ad(n=Pn(),t){n=it(n);const e=Pi(n,Ko).getImmediate({identifier:t}),s=qr("storage");return s&&kd(e,...s),e}function kd(n,t,e,s={}){Td(n,t,e,s)}function Cd(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Sd(e,s,o,t,se)}function Rd(){te(new Bt(Ko,Cd,"PUBLIC").setMultipleInstances(!0)),pt(Br,Hr,""),pt(Br,Hr,"esm2020")}Rd();const Nd={apiKey:"AIzaSyC0qVQm59S1_OFJcYLr2ILyGB9m-SoxHro",authDomain:"holysmokas-4ef36.firebaseapp.com",projectId:"holysmokas-4ef36",storageBucket:"holysmokas-4ef36.firebasestorage.app",messagingSenderId:"236391401471",appId:"1:236391401471:web:16780dc40257205caf09ca",measurementId:"G-LRKVZGKNLD"},zn=Qr(Nd);Mh(zn);const jd=Qu(zn);Ad(zn);export{Dd as D,Ld as L,Md as M,Od as O,Pd as P,Ud as U,jd as j,xd as x};
