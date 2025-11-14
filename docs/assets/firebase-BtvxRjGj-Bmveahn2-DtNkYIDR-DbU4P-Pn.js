const ka=()=>{};var zi={};/**
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
*/const $s=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Ca=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const o=r[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const c=r[t++];e[i++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=r[t++],h=r[t++],y=r[t++],_=((o&7)<<18|(c&63)<<12|(h&63)<<6|y&63)-65536;e[i++]=String.fromCharCode(55296+(_>>10)),e[i++]=String.fromCharCode(56320+(_&1023))}else{const c=r[t++],h=r[t++];e[i++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return e.join("")},Ws={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const c=r[o],h=o+1<r.length,y=h?r[o+1]:0,_=o+2<r.length,b=_?r[o+2]:0,S=c>>2,E=(c&3)<<4|y>>4;let R=(y&15)<<2|b>>6,U=b&63;_||(U=64,h||(R=64)),i.push(t[S],t[E],t[R],t[U])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray($s(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Ca(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const c=t[r.charAt(o++)],h=o<r.length?t[r.charAt(o)]:0;++o;const y=o<r.length?t[r.charAt(o)]:64;++o;const _=o<r.length?t[r.charAt(o)]:64;if(++o,c==null||h==null||y==null||_==null)throw new Ra;const b=c<<2|h>>4;if(i.push(b),y!==64){const S=h<<4&240|y>>2;if(i.push(S),_!==64){const E=y<<6&192|_;i.push(E)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Ra extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Na=function(r){const e=$s(r);return Ws.encodeByteArray(e,!0)},wn=function(r){return Na(r).replace(/\./g,"")},zs=function(r){try{return Ws.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
*/const Oa=()=>Pa().__FIREBASE_DEFAULTS__,Da=()=>{if(typeof process>"u"||typeof zi>"u")return;const r=zi.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},La=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&zs(r[1]);return e&&JSON.parse(e)},Ar=()=>{try{return ka()||Oa()||Da()||La()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Gs=r=>Ar()?.emulatorHosts?.[r],qs=r=>{const e=Gs(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Ks=()=>Ar()?.config,Js=r=>Ar()?.[`_${r}`];/**
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
*/class Ma{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
*/function yt(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function kr(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
*/function Xs(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[wn(JSON.stringify(t)),wn(JSON.stringify(h)),""].join(".")}const Ut={};function Ua(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ut))Ut[e]?r.emulator.push(e):r.prod.push(e);return r}function xa(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Gi=!1;function Cr(r,e){if(typeof window>"u"||typeof document>"u"||!yt(window.location.host)||Ut[r]===e||Ut[r]||Gi)return;Ut[r]=e;function t(E){return`__firebase__banner__${E}`}const i="__firebase__banner",o=Ua().prod.length>0;function c(){const E=document.getElementById(i);E&&E.remove()}function h(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function y(E,R){E.setAttribute("width","24"),E.setAttribute("id",R),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function _(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{Gi=!0,c()},E}function b(E,R){E.setAttribute("id",R),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function S(){const E=xa(i),R=t("text"),U=document.getElementById(R)||document.createElement("span"),L=t("learnmore"),M=document.getElementById(L)||document.createElement("a"),C=t("preprendIcon"),B=document.getElementById(C)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const $=E.element;h($),b(M,L);const F=_();y(B,C),$.append(B,U,M,F),document.body.appendChild($)}o?(U.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
*/function X(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ja(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(X())}function Fa(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Va(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Ba(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ha(){const r=X();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function $a(){try{return typeof indexedDB=="object"}catch{return!1}}function Wa(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}/**
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
*/const za="FirebaseError";class ve extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=za,Object.setPrototypeOf(this,ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wt.prototype.create)}}class Wt{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,c=this.errors[e],h=c?Ga(c,i):"Error",y=`${this.serviceName}: ${h} (${o}).`;return new ve(o,y,i)}}function Ga(r,e){return r.replace(qa,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const qa=/\{\$([^}]+)}/g;function Ka(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Qe(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const c=r[o],h=e[o];if(qi(c)&&qi(h)){if(!Qe(c,h))return!1}else if(c!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function qi(r){return r!==null&&typeof r=="object"}/**
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
*/function zt(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Lt(r){const e={};return r.replace(/^\?/,"").split("&").forEach(t=>{if(t){const[i,o]=t.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Mt(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Ja(r,e){const t=new Xa(r,e);return t.subscribe.bind(t)}class Xa{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Ya(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=ar),o.error===void 0&&(o.error=ar),o.complete===void 0&&(o.complete=ar);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ya(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function ar(){}/**
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
*/function ne(r){return r&&r._delegate?r._delegate:r}class Be{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
*/const Ke="[DEFAULT]";/**
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
*/class Za{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Ma;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ec(e))try{this.getOrInitializeService({instanceIdentifier:Ke})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const c=this.getOrInitializeService({instanceIdentifier:o});i.resolve(c)}catch{}}}}clearInstance(e=Ke){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ke){return this.instances.has(e)}getOptions(e=Ke){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[c,h]of this.instancesDeferred.entries()){const y=this.normalizeInstanceIdentifier(c);i===y&&h.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const c=this.instances.get(i);return c&&e(c,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Qa(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ke){return this.component?this.component.multipleInstances?e:Ke:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qa(r){return r===Ke?void 0:r}function ec(r){return r.instantiationMode==="EAGER"}/**
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
*/class tc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Za(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
*/var D;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(D||(D={}));const nc={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},rc=D.INFO,ic={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},sc=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=ic[e];if(o)console[o](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rr{constructor(e){this.name=e,this._logLevel=rc,this._logHandler=sc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const oc=(r,e)=>e.some(t=>r instanceof t);let Ki,Ji;function ac(){return Ki||(Ki=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cc(){return Ji||(Ji=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ys=new WeakMap,yr=new WeakMap,Zs=new WeakMap,cr=new WeakMap,Nr=new WeakMap;function hc(r){const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("success",c),r.removeEventListener("error",h)},c=()=>{t(Fe(r.result)),o()},h=()=>{i(r.error),o()};r.addEventListener("success",c),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Ys.set(t,r)}).catch(()=>{}),Nr.set(e,r),e}function lc(r){if(yr.has(r))return;const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",h),r.removeEventListener("abort",h)},c=()=>{t(),o()},h=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",c),r.addEventListener("error",h),r.addEventListener("abort",h)});yr.set(r,e)}let vr={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return yr.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Zs.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Fe(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function uc(r){vr=r(vr)}function dc(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(hr(this),e,...t);return Zs.set(i,e.sort?e.sort():[e]),Fe(i)}:cc().includes(r)?function(...e){return r.apply(hr(this),e),Fe(Ys.get(this))}:function(...e){return Fe(r.apply(hr(this),e))}}function fc(r){return typeof r=="function"?dc(r):(r instanceof IDBTransaction&&lc(r),oc(r,ac())?new Proxy(r,vr):r)}function Fe(r){if(r instanceof IDBRequest)return hc(r);if(cr.has(r))return cr.get(r);const e=fc(r);return e!==r&&(cr.set(r,e),Nr.set(e,r)),e}const hr=r=>Nr.get(r);function pc(r,e,{blocked:t,upgrade:i,blocking:o,terminated:c}={}){const h=indexedDB.open(r,e),y=Fe(h);return i&&h.addEventListener("upgradeneeded",_=>{i(Fe(h.result),_.oldVersion,_.newVersion,Fe(h.transaction),_)}),t&&h.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),y.then(_=>{c&&_.addEventListener("close",()=>c()),o&&_.addEventListener("versionchange",b=>o(b.oldVersion,b.newVersion,b))}).catch(()=>{}),y}const gc=["get","getKey","getAll","getAllKeys","count"],mc=["put","add","delete","clear"],lr=new Map;function Xi(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(lr.get(e))return lr.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=mc.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||gc.includes(t)))return;const c=async function(h,...y){const _=this.transaction(h,o?"readwrite":"readonly");let b=_.store;return i&&(b=b.index(y.shift())),(await Promise.all([b[t](...y),o&&_.done]))[0]};return lr.set(e,c),c}uc(r=>({...r,get:(e,t,i)=>Xi(e,t)||r.get(e,t,i),has:(e,t)=>!!Xi(e,t)||r.has(e,t)}));/**
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
*/class yc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(vc(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(e=>e).join(" ")}}function vc(r){return r.getComponent()?.type==="VERSION"}const _r="@firebase/app",Yi="0.14.4";/**
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
*/const Se=new Rr("@firebase/app"),_c="@firebase/app-compat",wc="@firebase/analytics-compat",Ic="@firebase/analytics",bc="@firebase/app-check-compat",Ec="@firebase/app-check",Tc="@firebase/auth",Sc="@firebase/auth-compat",Ac="@firebase/database",kc="@firebase/data-connect",Cc="@firebase/database-compat",Rc="@firebase/functions",Nc="@firebase/functions-compat",Pc="@firebase/installations",Oc="@firebase/installations-compat",Dc="@firebase/messaging",Lc="@firebase/messaging-compat",Mc="@firebase/performance",Uc="@firebase/performance-compat",xc="@firebase/remote-config",jc="@firebase/remote-config-compat",Fc="@firebase/storage",Vc="@firebase/storage-compat",Bc="@firebase/firestore",Hc="@firebase/ai",$c="@firebase/firestore-compat",Wc="firebase",zc="12.4.0";/**
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
*/const wr="[DEFAULT]",Gc={[_r]:"fire-core",[_c]:"fire-core-compat",[Ic]:"fire-analytics",[wc]:"fire-analytics-compat",[Ec]:"fire-app-check",[bc]:"fire-app-check-compat",[Tc]:"fire-auth",[Sc]:"fire-auth-compat",[Ac]:"fire-rtdb",[kc]:"fire-data-connect",[Cc]:"fire-rtdb-compat",[Rc]:"fire-fn",[Nc]:"fire-fn-compat",[Pc]:"fire-iid",[Oc]:"fire-iid-compat",[Dc]:"fire-fcm",[Lc]:"fire-fcm-compat",[Mc]:"fire-perf",[Uc]:"fire-perf-compat",[xc]:"fire-rc",[jc]:"fire-rc-compat",[Fc]:"fire-gcs",[Vc]:"fire-gcs-compat",[Bc]:"fire-fst",[$c]:"fire-fst-compat",[Hc]:"fire-vertex","fire-js":"fire-js",[Wc]:"fire-js-all"};/**
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
*/const In=new Map,qc=new Map,Ir=new Map;function Zi(r,e){try{r.container.addComponent(e)}catch(t){Se.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function et(r){const e=r.name;if(Ir.has(e))return Se.debug(`There were multiple attempts to register component ${e}.`),!1;Ir.set(e,r);for(const t of In.values())Zi(t,r);for(const t of qc.values())Zi(t,r);return!0}function On(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Q(r){return r==null?!1:r.settings!==void 0}/**
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
*/const Kc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ve=new Wt("app","Firebase",Kc);/**
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
*/class Jc{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ve.create("app-deleted",{appName:this._name})}}/**
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
*/const it=zc;function Qs(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i={name:wr,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw Ve.create("bad-app-name",{appName:String(o)});if(t||(t=Ks()),!t)throw Ve.create("no-options");const c=In.get(o);if(c){if(Qe(t,c.options)&&Qe(i,c.config))return c;throw Ve.create("duplicate-app",{appName:o})}const h=new tc(o);for(const _ of Ir.values())h.addComponent(_);const y=new Jc(t,i,h);return In.set(o,y),y}function Pr(r=wr){const e=In.get(r);if(!e&&r===wr&&Ks())return Qs();if(!e)throw Ve.create("no-app",{appName:r});return e}function pe(r,e,t){let i=Gc[r]??r;t&&(i+=`-${t}`);const o=i.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const h=[`Unable to register library "${i}" with version "${e}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Se.warn(h.join(" "));return}et(new Be(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
*/const Xc="firebase-heartbeat-database",Yc=1,Bt="firebase-heartbeat-store";let ur=null;function eo(){return ur||(ur=pc(Xc,Yc,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Bt)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ve.create("idb-open",{originalErrorMessage:r.message})})),ur}async function Zc(r){try{const e=(await eo()).transaction(Bt),t=await e.objectStore(Bt).get(to(r));return await e.done,t}catch(e){if(e instanceof ve)Se.warn(e.message);else{const t=Ve.create("idb-get",{originalErrorMessage:e?.message});Se.warn(t.message)}}}async function Qi(r,e){try{const t=(await eo()).transaction(Bt,"readwrite");await t.objectStore(Bt).put(e,to(r)),await t.done}catch(t){if(t instanceof ve)Se.warn(t.message);else{const i=Ve.create("idb-set",{originalErrorMessage:t?.message});Se.warn(i.message)}}}function to(r){return`${r.name}!${r.options.appId}`}/**
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
*/const Qc=1024,eh=30;class th{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rh(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=es();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(i=>i.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>eh){const i=ih(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Se.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=es(),{heartbeatsToSend:t,unsentEntries:i}=nh(this._heartbeatsCache.heartbeats),o=wn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Se.warn(e),""}}}function es(){return new Date().toISOString().substring(0,10)}function nh(r,e=Qc){const t=[];let i=r.slice();for(const o of r){const c=t.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),ts(t)>e){c.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ts(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class rh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $a()?Wa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Zc(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Qi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Qi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}else return}}function ts(r){return wn(JSON.stringify({version:2,heartbeats:r})).length}function ih(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
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
*/function sh(r){et(new Be("platform-logger",e=>new yc(e),"PRIVATE")),et(new Be("heartbeat",e=>new th(e),"PRIVATE")),pe(_r,Yi,r),pe(_r,Yi,"esm2020"),pe("fire-js","")}sh("");var oh="firebase",ah="12.4.0";/**
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
*/pe(oh,ah,"app");var ns=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Or;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,u){function f(){}f.prototype=u.prototype,g.F=u.prototype,g.prototype=new f,g.prototype.constructor=g,g.D=function(m,p,w){for(var d=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)d[Z-2]=arguments[Z];return u.prototype[p].apply(m,d)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(g,u,f){f||(f=0);const m=Array(16);if(typeof u=="string")for(var p=0;p<16;++p)m[p]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(p=0;p<16;++p)m[p]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=g.g[0],f=g.g[1],p=g.g[2];let w=g.g[3],d;d=u+(w^f&(p^w))+m[0]+3614090360&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+m[1]+3905402710&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+m[2]+606105819&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+m[3]+3250441966&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(w^f&(p^w))+m[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+m[5]+1200080426&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+m[6]+2821735955&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+m[7]+4249261313&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(w^f&(p^w))+m[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+m[9]+2336552879&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+m[10]+4294925233&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+m[11]+2304563134&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(w^f&(p^w))+m[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+m[13]+4254626195&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+m[14]+2792965006&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+m[15]+1236535329&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(p^w&(f^p))+m[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+m[6]+3225465664&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+m[11]+643717713&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+m[0]+3921069994&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^w&(f^p))+m[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+m[10]+38016083&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+m[15]+3634488961&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+m[4]+3889429448&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^w&(f^p))+m[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+m[14]+3275163606&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+m[3]+4107603335&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+m[8]+1163531501&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^w&(f^p))+m[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+m[2]+4243563512&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+m[7]+1735328473&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+m[12]+2368359562&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(f^p^w)+m[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+m[8]+2272392833&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+m[11]+1839030562&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+m[14]+4259657740&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^w)+m[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+m[4]+1272893353&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+m[7]+4139469664&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+m[10]+3200236656&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^w)+m[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+m[0]+3936430074&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+m[3]+3572445317&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+m[6]+76029189&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^w)+m[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+m[12]+3873151461&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+m[15]+530742520&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+m[2]+3299628645&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(p^(f|~w))+m[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+m[7]+1126891415&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+m[14]+2878612391&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+m[5]+4237533241&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~w))+m[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+m[3]+2399980690&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+m[10]+4293915773&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+m[1]+2240044497&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~w))+m[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+m[15]+4264355552&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+m[6]+2734768916&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+m[13]+1309151649&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~w))+m[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+m[11]+3174756917&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+m[2]+718787259&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+m[9]+3951481745&4294967295,g.g[0]=g.g[0]+u&4294967295,g.g[1]=g.g[1]+(p+(d<<21&4294967295|d>>>11))&4294967295,g.g[2]=g.g[2]+p&4294967295,g.g[3]=g.g[3]+w&4294967295}i.prototype.v=function(g,u){u===void 0&&(u=g.length);const f=u-this.blockSize,m=this.C;let p=this.h,w=0;for(;w<u;){if(p==0)for(;w<=f;)o(this,g,w),w+=this.blockSize;if(typeof g=="string"){for(;w<u;)if(m[p++]=g.charCodeAt(w++),p==this.blockSize){o(this,m),p=0;break}}else for(;w<u;)if(m[p++]=g[w++],p==this.blockSize){o(this,m),p=0;break}}this.h=p,this.o+=u},i.prototype.A=function(){var g=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);g[0]=128;for(var u=1;u<g.length-8;++u)g[u]=0;u=this.o*8;for(var f=g.length-8;f<g.length;++f)g[f]=u&255,u/=256;for(this.v(g),g=Array(16),u=0,f=0;f<4;++f)for(let m=0;m<32;m+=8)g[u++]=this.g[f]>>>m&255;return g};function c(g,u){var f=y;return Object.prototype.hasOwnProperty.call(f,g)?f[g]:f[g]=u(g)}function h(g,u){this.h=u;const f=[];let m=!0;for(let p=g.length-1;p>=0;p--){const w=g[p]|0;m&&w==u||(f[p]=w,m=!1)}this.g=f}var y={};function _(g){return-128<=g&&g<128?c(g,function(u){return new h([u|0],u<0?-1:0)}):new h([g|0],g<0?-1:0)}function b(g){if(isNaN(g)||!isFinite(g))return E;if(g<0)return C(b(-g));const u=[];let f=1;for(let m=0;g>=f;m++)u[m]=g/f|0,f*=4294967296;return new h(u,0)}function S(g,u){if(g.length==0)throw Error("number format error: empty string");if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(g.charAt(0)=="-")return C(S(g.substring(1),u));if(g.indexOf("-")>=0)throw Error('number format error: interior "-" character');const f=b(Math.pow(u,8));let m=E;for(let w=0;w<g.length;w+=8){var p=Math.min(8,g.length-w);const d=parseInt(g.substring(w,w+p),u);p<8?(p=b(Math.pow(u,p)),m=m.j(p).add(b(d))):(m=m.j(f),m=m.add(b(d)))}return m}var E=_(0),R=_(1),U=_(16777216);r=h.prototype,r.m=function(){if(M(this))return-C(this).m();let g=0,u=1;for(let f=0;f<this.g.length;f++){const m=this.i(f);g+=(m>=0?m:4294967296+m)*u,u*=4294967296}return g},r.toString=function(g){if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(L(this))return"0";if(M(this))return"-"+C(this).toString(g);const u=b(Math.pow(g,6));var f=this;let m="";for(;;){const p=re(f,u).g;f=B(f,p.j(u));let w=((f.g.length>0?f.g[0]:f.h)>>>0).toString(g);if(f=p,L(f))return w+m;for(;w.length<6;)w="0"+w;m=w+m}},r.i=function(g){return g<0?0:g<this.g.length?this.g[g]:this.h};function L(g){if(g.h!=0)return!1;for(let u=0;u<g.g.length;u++)if(g.g[u]!=0)return!1;return!0}function M(g){return g.h==-1}r.l=function(g){return g=B(this,g),M(g)?-1:L(g)?0:1};function C(g){const u=g.g.length,f=[];for(let m=0;m<u;m++)f[m]=~g.g[m];return new h(f,~g.h).add(R)}r.abs=function(){return M(this)?C(this):this},r.add=function(g){const u=Math.max(this.g.length,g.g.length),f=[];let m=0;for(let p=0;p<=u;p++){let w=m+(this.i(p)&65535)+(g.i(p)&65535),d=(w>>>16)+(this.i(p)>>>16)+(g.i(p)>>>16);m=d>>>16,w&=65535,d&=65535,f[p]=d<<16|w}return new h(f,f[f.length-1]&-2147483648?-1:0)};function B(g,u){return g.add(C(u))}r.j=function(g){if(L(this)||L(g))return E;if(M(this))return M(g)?C(this).j(C(g)):C(C(this).j(g));if(M(g))return C(this.j(C(g)));if(this.l(U)<0&&g.l(U)<0)return b(this.m()*g.m());const u=this.g.length+g.g.length,f=[];for(var m=0;m<2*u;m++)f[m]=0;for(m=0;m<this.g.length;m++)for(let p=0;p<g.g.length;p++){const w=this.i(m)>>>16,d=this.i(m)&65535,Z=g.i(p)>>>16,We=g.i(p)&65535;f[2*m+2*p]+=d*We,$(f,2*m+2*p),f[2*m+2*p+1]+=w*We,$(f,2*m+2*p+1),f[2*m+2*p+1]+=d*Z,$(f,2*m+2*p+1),f[2*m+2*p+2]+=w*Z,$(f,2*m+2*p+2)}for(g=0;g<u;g++)f[g]=f[2*g+1]<<16|f[2*g];for(g=u;g<2*u;g++)f[g]=0;return new h(f,0)};function $(g,u){for(;(g[u]&65535)!=g[u];)g[u+1]+=g[u]>>>16,g[u]&=65535,u++}function F(g,u){this.g=g,this.h=u}function re(g,u){if(L(u))throw Error("division by zero");if(L(g))return new F(E,E);if(M(g))return u=re(C(g),u),new F(C(u.g),C(u.h));if(M(u))return u=re(g,C(u)),new F(C(u.g),u.h);if(g.g.length>30){if(M(g)||M(u))throw Error("slowDivide_ only works with positive integers.");for(var f=R,m=u;m.l(g)<=0;)f=ee(f),m=ee(m);var p=Y(f,1),w=Y(m,1);for(m=Y(m,2),f=Y(f,2);!L(m);){var d=w.add(m);d.l(g)<=0&&(p=p.add(f),w=d),m=Y(m,1),f=Y(f,1)}return u=B(g,p.j(u)),new F(p,u)}for(p=E;g.l(u)>=0;){for(f=Math.max(1,Math.floor(g.m()/u.m())),m=Math.ceil(Math.log(f)/Math.LN2),m=m<=48?1:Math.pow(2,m-48),w=b(f),d=w.j(u);M(d)||d.l(g)>0;)f-=m,w=b(f),d=w.j(u);L(w)&&(w=R),p=p.add(w),g=B(g,d)}return new F(p,g)}r.B=function(g){return re(this,g).h},r.and=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let m=0;m<u;m++)f[m]=this.i(m)&g.i(m);return new h(f,this.h&g.h)},r.or=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let m=0;m<u;m++)f[m]=this.i(m)|g.i(m);return new h(f,this.h|g.h)},r.xor=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let m=0;m<u;m++)f[m]=this.i(m)^g.i(m);return new h(f,this.h^g.h)};function ee(g){const u=g.g.length+1,f=[];for(let m=0;m<u;m++)f[m]=g.i(m)<<1|g.i(m-1)>>>31;return new h(f,g.h)}function Y(g,u){const f=u>>5;u%=32;const m=g.g.length-f,p=[];for(let w=0;w<m;w++)p[w]=u>0?g.i(w+f)>>>u|g.i(w+f+1)<<32-u:g.i(w+f);return new h(p,g.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=b,h.fromString=S,Or=h}).apply(typeof ns<"u"?ns:typeof self<"u"?self:typeof window<"u"?window:{});var un=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var r,e=Object.defineProperty;function t(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof un=="object"&&un];for(var s=0;s<n.length;++s){var a=n[s];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var i=t(this);function o(n,s){if(s)e:{var a=i;n=n.split(".");for(var l=0;l<n.length-1;l++){var v=n[l];if(!(v in a))break e;a=a[v]}n=n[n.length-1],l=a[n],s=s(l),s!=l&&s!=null&&e(a,n,{configurable:!0,writable:!0,value:s})}}o("Symbol.dispose",function(n){return n||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(n){return n||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(n){return n||function(s){var a=[],l;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&a.push([l,s[l]]);return a}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},h=this||self;function y(n){var s=typeof n;return s=="object"&&n!=null||s=="function"}function _(n,s,a){return n.call.apply(n.bind,arguments)}function b(n,s,a){return b=_,b.apply(null,arguments)}function S(n,s){var a=Array.prototype.slice.call(arguments,1);return function(){var l=a.slice();return l.push.apply(l,arguments),n.apply(this,l)}}function E(n,s){function a(){}a.prototype=s.prototype,n.Z=s.prototype,n.prototype=new a,n.prototype.constructor=n,n.Ob=function(l,v,I){for(var T=Array(arguments.length-2),k=2;k<arguments.length;k++)T[k-2]=arguments[k];return s.prototype[v].apply(l,T)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?n=>n&&AsyncContext.Snapshot.wrap(n):n=>n;function U(n){const s=n.length;if(s>0){const a=Array(s);for(let l=0;l<s;l++)a[l]=n[l];return a}return[]}function L(n,s){for(let l=1;l<arguments.length;l++){const v=arguments[l];var a=typeof v;if(a=a!="object"?a:v?Array.isArray(v)?"array":a:"null",a=="array"||a=="object"&&typeof v.length=="number"){a=n.length||0;const I=v.length||0;n.length=a+I;for(let T=0;T<I;T++)n[a+T]=v[T]}else n.push(v)}}class M{constructor(s,a){this.i=s,this.j=a,this.h=0,this.g=null}get(){let s;return this.h>0?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function C(n){h.setTimeout(()=>{throw n},0)}function B(){var n=g;let s=null;return n.g&&(s=n.g,n.g=n.g.next,n.g||(n.h=null),s.next=null),s}class ${constructor(){this.h=this.g=null}add(s,a){const l=F.get();l.set(s,a),this.h?this.h.next=l:this.g=l,this.h=l}}var F=new M(()=>new re,n=>n.reset());class re{constructor(){this.next=this.g=this.h=null}set(s,a){this.h=s,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,Y=!1,g=new $,u=()=>{const n=Promise.resolve(void 0);ee=()=>{n.then(f)}};function f(){for(var n;n=B();){try{n.h.call(n.g)}catch(a){C(a)}var s=F;s.j(n),s.h<100&&(s.h++,n.next=s.g,s.g=n)}Y=!1}function m(){this.u=this.u,this.C=this.C}m.prototype.u=!1,m.prototype.dispose=function(){this.u||(this.u=!0,this.N())},m.prototype[Symbol.dispose]=function(){this.dispose()},m.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function p(n,s){this.type=n,this.g=this.target=s,this.defaultPrevented=!1}p.prototype.h=function(){this.defaultPrevented=!0};var w=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var n=!1,s=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const a=()=>{};h.addEventListener("test",a,s),h.removeEventListener("test",a,s)}catch{}return n})();function d(n){return/^[\s\xa0]*$/.test(n)}function Z(n,s){p.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n&&this.init(n,s)}E(Z,p),Z.prototype.init=function(n,s){const a=this.type=n.type,l=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;this.target=n.target||n.srcElement,this.g=s,s=n.relatedTarget,s||(a=="mouseover"?s=n.fromElement:a=="mouseout"&&(s=n.toElement)),this.relatedTarget=s,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=n.pointerType,this.state=n.state,this.i=n,n.defaultPrevented&&Z.Z.h.call(this)},Z.prototype.h=function(){Z.Z.h.call(this);const n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var We="closure_listenable_"+(Math.random()*1e6|0),Jo=0;function Xo(n,s,a,l,v){this.listener=n,this.proxy=null,this.src=s,this.type=a,this.capture=!!l,this.ha=v,this.key=++Jo,this.da=this.fa=!1}function Zt(n){n.da=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function Qt(n,s,a){for(const l in n)s.call(a,n[l],l,n)}function Yo(n,s){for(const a in n)s.call(void 0,n[a],a,n)}function Gr(n){const s={};for(const a in n)s[a]=n[a];return s}const qr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Kr(n,s){let a,l;for(let v=1;v<arguments.length;v++){l=arguments[v];for(a in l)n[a]=l[a];for(let I=0;I<qr.length;I++)a=qr[I],Object.prototype.hasOwnProperty.call(l,a)&&(n[a]=l[a])}}function en(n){this.src=n,this.g={},this.h=0}en.prototype.add=function(n,s,a,l,v){const I=n.toString();n=this.g[I],n||(n=this.g[I]=[],this.h++);const T=xn(n,s,l,v);return T>-1?(s=n[T],a||(s.fa=!1)):(s=new Xo(s,this.src,I,!!l,v),s.fa=a,n.push(s)),s};function Un(n,s){const a=s.type;if(a in n.g){var l=n.g[a],v=Array.prototype.indexOf.call(l,s,void 0),I;(I=v>=0)&&Array.prototype.splice.call(l,v,1),I&&(Zt(s),n.g[a].length==0&&(delete n.g[a],n.h--))}}function xn(n,s,a,l){for(let v=0;v<n.length;++v){const I=n[v];if(!I.da&&I.listener==s&&I.capture==!!a&&I.ha==l)return v}return-1}var jn="closure_lm_"+(Math.random()*1e6|0),Fn={};function Jr(n,s,a,l,v){if(Array.isArray(s)){for(let I=0;I<s.length;I++)Jr(n,s[I],a,l,v);return null}return a=Zr(a),n&&n[We]?n.J(s,a,y(l)?!!l.capture:!1,v):Zo(n,s,a,!1,l,v)}function Zo(n,s,a,l,v,I){if(!s)throw Error("Invalid event type");const T=y(v)?!!v.capture:!!v;let k=Bn(n);if(k||(n[jn]=k=new en(n)),a=k.add(s,a,l,T,I),a.proxy)return a;if(l=Qo(),a.proxy=l,l.src=n,l.listener=a,n.addEventListener)w||(v=T),v===void 0&&(v=!1),n.addEventListener(s.toString(),l,v);else if(n.attachEvent)n.attachEvent(Yr(s.toString()),l);else if(n.addListener&&n.removeListener)n.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return a}function Qo(){function n(a){return s.call(n.src,n.listener,a)}const s=ea;return n}function Xr(n,s,a,l,v){if(Array.isArray(s))for(var I=0;I<s.length;I++)Xr(n,s[I],a,l,v);else l=y(l)?!!l.capture:!!l,a=Zr(a),n&&n[We]?(n=n.i,I=String(s).toString(),I in n.g&&(s=n.g[I],a=xn(s,a,l,v),a>-1&&(Zt(s[a]),Array.prototype.splice.call(s,a,1),s.length==0&&(delete n.g[I],n.h--)))):n&&(n=Bn(n))&&(s=n.g[s.toString()],n=-1,s&&(n=xn(s,a,l,v)),(a=n>-1?s[n]:null)&&Vn(a))}function Vn(n){if(typeof n!="number"&&n&&!n.da){var s=n.src;if(s&&s[We])Un(s.i,n);else{var a=n.type,l=n.proxy;s.removeEventListener?s.removeEventListener(a,l,n.capture):s.detachEvent?s.detachEvent(Yr(a),l):s.addListener&&s.removeListener&&s.removeListener(l),(a=Bn(s))?(Un(a,n),a.h==0&&(a.src=null,s[jn]=null)):Zt(n)}}}function Yr(n){return n in Fn?Fn[n]:Fn[n]="on"+n}function ea(n,s){if(n.da)n=!0;else{s=new Z(s,this);const a=n.listener,l=n.ha||n.src;n.fa&&Vn(n),n=a.call(l,s)}return n}function Bn(n){return n=n[jn],n instanceof en?n:null}var Hn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Zr(n){return typeof n=="function"?n:(n[Hn]||(n[Hn]=function(s){return n.handleEvent(s)}),n[Hn])}function G(){m.call(this),this.i=new en(this),this.M=this,this.G=null}E(G,m),G.prototype[We]=!0,G.prototype.removeEventListener=function(n,s,a,l){Xr(this,n,s,a,l)};function q(n,s){var a,l=n.G;if(l)for(a=[];l;l=l.G)a.push(l);if(n=n.M,l=s.type||s,typeof s=="string")s=new p(s,n);else if(s instanceof p)s.target=s.target||n;else{var v=s;s=new p(l,n),Kr(s,v)}v=!0;let I,T;if(a)for(T=a.length-1;T>=0;T--)I=s.g=a[T],v=tn(I,l,!0,s)&&v;if(I=s.g=n,v=tn(I,l,!0,s)&&v,v=tn(I,l,!1,s)&&v,a)for(T=0;T<a.length;T++)I=s.g=a[T],v=tn(I,l,!1,s)&&v}G.prototype.N=function(){if(G.Z.N.call(this),this.i){var n=this.i;for(const s in n.g){const a=n.g[s];for(let l=0;l<a.length;l++)Zt(a[l]);delete n.g[s],n.h--}}this.G=null},G.prototype.J=function(n,s,a,l){return this.i.add(String(n),s,!1,a,l)},G.prototype.K=function(n,s,a,l){return this.i.add(String(n),s,!0,a,l)};function tn(n,s,a,l){if(s=n.i.g[String(s)],!s)return!0;s=s.concat();let v=!0;for(let I=0;I<s.length;++I){const T=s[I];if(T&&!T.da&&T.capture==a){const k=T.listener,W=T.ha||T.src;T.fa&&Un(n.i,T),v=k.call(W,l)!==!1&&v}}return v&&!l.defaultPrevented}function ta(n,s){if(typeof n!="function")if(n&&typeof n.handleEvent=="function")n=b(n.handleEvent,n);else throw Error("Invalid listener argument");return Number(s)>2147483647?-1:h.setTimeout(n,s||0)}function Qr(n){n.g=ta(()=>{n.g=null,n.i&&(n.i=!1,Qr(n))},n.l);const s=n.h;n.h=null,n.m.apply(null,s)}class na extends m{constructor(s,a){super(),this.m=s,this.l=a,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:Qr(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _t(n){m.call(this),this.h=n,this.g={}}E(_t,m);var ei=[];function ti(n){Qt(n.g,function(s,a){this.g.hasOwnProperty(a)&&Vn(s)},n),n.g={}}_t.prototype.N=function(){_t.Z.N.call(this),ti(this)},_t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $n=h.JSON.stringify,ra=h.JSON.parse,ia=class{stringify(n){return h.JSON.stringify(n,void 0)}parse(n){return h.JSON.parse(n,void 0)}};function ni(){}function Wn(){p.call(this,"d")}E(Wn,p);function zn(){p.call(this,"c")}E(zn,p);var st={},ri=null;function Gn(){return ri=ri||new G}st.Ia="serverreachability";function ii(n){p.call(this,st.Ia,n)}E(ii,p);function wt(n){const s=Gn();q(s,new ii(s))}st.STAT_EVENT="statevent";function si(n,s){p.call(this,st.STAT_EVENT,n),this.stat=s}E(si,p);function K(n){const s=Gn();q(s,new si(s,n))}st.Ja="timingevent";function oi(n,s){p.call(this,st.Ja,n),this.size=s}E(oi,p);function It(n,s){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){n()},s)}function bt(){this.g=!0}bt.prototype.ua=function(){this.g=!1};function sa(n,s,a,l,v,I){n.info(function(){if(n.g)if(I){var T="",k=I.split("&");for(let j=0;j<k.length;j++){var W=k[j].split("=");if(W.length>1){const z=W[0];W=W[1];const le=z.split("_");T=le.length>=2&&le[1]=="type"?T+(z+"="+W+"&"):T+(z+"=redacted&")}}}else T=null;else T=I;return"XMLHTTP REQ ("+l+") [attempt "+v+"]: "+s+`
`+a+`
`+T})}function oa(n,s,a,l,v,I,T){n.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+v+"]: "+s+`
`+a+`
`+I+" "+T})}function ot(n,s,a,l){n.info(function(){return"XMLHTTP TEXT ("+s+"): "+ca(n,a)+(l?" "+l:"")})}function aa(n,s){n.info(function(){return"TIMEOUT: "+s})}bt.prototype.info=function(){};function ca(n,s){if(!n.g)return s;if(!s)return null;try{const I=JSON.parse(s);if(I){for(n=0;n<I.length;n++)if(Array.isArray(I[n])){var a=I[n];if(!(a.length<2)){var l=a[1];if(Array.isArray(l)&&!(l.length<1)){var v=l[0];if(v!="noop"&&v!="stop"&&v!="close")for(let T=1;T<l.length;T++)l[T]=""}}}}return $n(I)}catch{return s}}var ai;function qn(){}E(qn,ni),qn.prototype.g=function(){return new XMLHttpRequest},ai=new qn;function Et(n){return encodeURIComponent(String(n))}function ha(n){var s=1;n=n.split(":");const a=[];for(;s>0&&n.length;)a.push(n.shift()),s--;return n.length&&a.push(n.join(":")),a}function Ce(n,s,a,l){this.j=n,this.i=s,this.l=a,this.S=l||1,this.V=new _t(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ci}function ci(){this.i=null,this.g="",this.h=!1}var hi={},Kn={};function Jn(n,s,a){n.M=1,n.A=rn(he(s)),n.u=a,n.R=!0,li(n,null)}function li(n,s){n.F=Date.now(),nn(n),n.B=he(n.A);var a=n.B,l=n.S;Array.isArray(l)||(l=[String(l)]),Ei(a.i,"t",l),n.C=0,a=n.j.L,n.h=new ci,n.g=Bi(n.j,a?s:null,!n.u),n.P>0&&(n.O=new na(b(n.Y,n,n.g),n.P)),s=n.V,a=n.g,l=n.ba;var v="readystatechange";Array.isArray(v)||(v&&(ei[0]=v.toString()),v=ei);for(let I=0;I<v.length;I++){const T=Jr(a,v[I],l||s.handleEvent,!1,s.h||s);if(!T)break;s.g[T.key]=T}s=n.J?Gr(n.J):{},n.u?(n.v||(n.v="POST"),s["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.B,n.v,n.u,s)):(n.v="GET",n.g.ea(n.B,n.v,null,s)),wt(),sa(n.i,n.v,n.B,n.l,n.S,n.u)}Ce.prototype.ba=function(n){n=n.target;const s=this.O;s&&Pe(n)==3?s.j():this.Y(n)},Ce.prototype.Y=function(n){try{if(n==this.g)e:{const k=Pe(this.g),W=this.g.ya(),j=this.g.ca();if(!(k<3)&&(k!=3||this.g&&(this.h.h||this.g.la()||Ni(this.g)))){this.K||k!=4||W==7||(W==8||j<=0?wt(3):wt(2)),Xn(this);var s=this.g.ca();this.X=s;var a=la(this);if(this.o=s==200,oa(this.i,this.v,this.B,this.l,this.S,k,s),this.o){if(this.U&&!this.L){t:{if(this.g){var l,v=this.g;if((l=v.g?v.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!d(l)){var I=l;break t}}I=null}if(n=I)ot(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Yn(this,n);else{this.o=!1,this.m=3,K(12),ze(this),Tt(this);break e}}if(this.R){n=!0;let z;for(;!this.K&&this.C<a.length;)if(z=ua(this,a),z==Kn){k==4&&(this.m=4,K(14),n=!1),ot(this.i,this.l,null,"[Incomplete Response]");break}else if(z==hi){this.m=4,K(15),ot(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}else ot(this.i,this.l,z,null),Yn(this,z);if(ui(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),k!=4||a.length!=0||this.h.h||(this.m=1,K(16),n=!1),this.o=this.o&&n,!n)ot(this.i,this.l,a,"[Invalid Chunked Response]"),ze(this),Tt(this);else if(a.length>0&&!this.W){this.W=!0;var T=this.j;T.g==this&&T.aa&&!T.P&&(T.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),sr(T),T.P=!0,K(11))}}else ot(this.i,this.l,a,null),Yn(this,a);k==4&&ze(this),this.o&&!this.K&&(k==4?xi(this.j,this):(this.o=!1,nn(this)))}else Sa(this.g),s==400&&a.indexOf("Unknown SID")>0?(this.m=3,K(12)):(this.m=0,K(13)),ze(this),Tt(this)}}}catch{}finally{}};function la(n){if(!ui(n))return n.g.la();const s=Ni(n.g);if(s==="")return"";let a="";const l=s.length,v=Pe(n.g)==4;if(!n.h.i){if(typeof TextDecoder>"u")return ze(n),Tt(n),"";n.h.i=new h.TextDecoder}for(let I=0;I<l;I++)n.h.h=!0,a+=n.h.i.decode(s[I],{stream:!(v&&I==l-1)});return s.length=0,n.h.g+=a,n.C=0,n.h.g}function ui(n){return n.g?n.v=="GET"&&n.M!=2&&n.j.Aa:!1}function ua(n,s){var a=n.C,l=s.indexOf(`
`,a);return l==-1?Kn:(a=Number(s.substring(a,l)),isNaN(a)?hi:(l+=1,l+a>s.length?Kn:(s=s.slice(l,l+a),n.C=l+a,s)))}Ce.prototype.cancel=function(){this.K=!0,ze(this)};function nn(n){n.T=Date.now()+n.H,di(n,n.H)}function di(n,s){if(n.D!=null)throw Error("WatchDog timer not null");n.D=It(b(n.aa,n),s)}function Xn(n){n.D&&(h.clearTimeout(n.D),n.D=null)}Ce.prototype.aa=function(){this.D=null;const n=Date.now();n-this.T>=0?(aa(this.i,this.B),this.M!=2&&(wt(),K(17)),ze(this),this.m=2,Tt(this)):di(this,this.T-n)};function Tt(n){n.j.I==0||n.K||xi(n.j,n)}function ze(n){Xn(n);var s=n.O;s&&typeof s.dispose=="function"&&s.dispose(),n.O=null,ti(n.V),n.g&&(s=n.g,n.g=null,s.abort(),s.dispose())}function Yn(n,s){try{var a=n.j;if(a.I!=0&&(a.g==n||Zn(a.h,n))){if(!n.L&&Zn(a.h,n)&&a.I==3){try{var l=a.Ba.g.parse(s)}catch{l=null}if(Array.isArray(l)&&l.length==3){var v=l;if(v[0]==0){e:if(!a.v){if(a.g)if(a.g.F+3e3<n.F)hn(a),an(a);else break e;ir(a),K(18)}}else a.xa=v[1],0<a.xa-a.K&&v[2]<37500&&a.F&&a.A==0&&!a.C&&(a.C=It(b(a.Va,a),6e3));gi(a.h)<=1&&a.ta&&(a.ta=void 0)}else qe(a,11)}else if((n.L||a.g==n)&&hn(a),!d(s))for(v=a.Ba.g.parse(s),s=0;s<v.length;s++){let j=v[s];const z=j[0];if(!(z<=a.K))if(a.K=z,j=j[1],a.I==2)if(j[0]=="c"){a.M=j[1],a.ba=j[2];const le=j[3];le!=null&&(a.ka=le,a.j.info("VER="+a.ka));const ht=j[4];ht!=null&&(a.za=ht,a.j.info("SVER="+a.za));const Oe=j[5];Oe!=null&&typeof Oe=="number"&&Oe>0&&(l=1.5*Oe,a.O=l,a.j.info("backChannelRequestTimeoutMs_="+l)),l=a;const De=n.g;if(De){const ln=De.g?De.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ln){var I=l.h;I.g||ln.indexOf("spdy")==-1&&ln.indexOf("quic")==-1&&ln.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(Qn(I,I.h),I.h=null))}if(l.G){const or=De.g?De.g.getResponseHeader("X-HTTP-Session-Id"):null;or&&(l.wa=or,x(l.J,l.G,or))}}a.I=3,a.l&&a.l.ra(),a.aa&&(a.T=Date.now()-n.F,a.j.info("Handshake RTT: "+a.T+"ms")),l=a;var T=n;if(l.na=Vi(l,l.L?l.ba:null,l.W),T.L){mi(l.h,T);var k=T,W=l.O;W&&(k.H=W),k.D&&(Xn(k),nn(k)),l.g=T}else Mi(l);a.i.length>0&&cn(a)}else j[0]!="stop"&&j[0]!="close"||qe(a,7);else a.I==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?qe(a,7):rr(a):j[0]!="noop"&&a.l&&a.l.qa(j),a.A=0)}}wt(4)}catch{}}var da=class{constructor(n,s){this.g=n,this.map=s}};function fi(n){this.l=n||10,h.PerformanceNavigationTiming?(n=h.performance.getEntriesByType("navigation"),n=n.length>0&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=n?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function pi(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function gi(n){return n.h?1:n.g?n.g.size:0}function Zn(n,s){return n.h?n.h==s:n.g?n.g.has(s):!1}function Qn(n,s){n.g?n.g.add(s):n.h=s}function mi(n,s){n.h&&n.h==s?n.h=null:n.g&&n.g.has(s)&&n.g.delete(s)}fi.prototype.cancel=function(){if(this.i=yi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function yi(n){if(n.h!=null)return n.i.concat(n.h.G);if(n.g!=null&&n.g.size!==0){let s=n.i;for(const a of n.g.values())s=s.concat(a.G);return s}return U(n.i)}var vi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fa(n,s){if(n){n=n.split("&");for(let a=0;a<n.length;a++){const l=n[a].indexOf("=");let v,I=null;l>=0?(v=n[a].substring(0,l),I=n[a].substring(l+1)):v=n[a],s(v,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function Re(n){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let s;n instanceof Re?(this.l=n.l,St(this,n.j),this.o=n.o,this.g=n.g,At(this,n.u),this.h=n.h,er(this,Ti(n.i)),this.m=n.m):n&&(s=String(n).match(vi))?(this.l=!1,St(this,s[1]||"",!0),this.o=kt(s[2]||""),this.g=kt(s[3]||"",!0),At(this,s[4]),this.h=kt(s[5]||"",!0),er(this,s[6]||"",!0),this.m=kt(s[7]||"")):(this.l=!1,this.i=new Rt(null,this.l))}Re.prototype.toString=function(){const n=[];var s=this.j;s&&n.push(Ct(s,_i,!0),":");var a=this.g;return(a||s=="file")&&(n.push("//"),(s=this.o)&&n.push(Ct(s,_i,!0),"@"),n.push(Et(a).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.u,a!=null&&n.push(":",String(a))),(a=this.h)&&(this.g&&a.charAt(0)!="/"&&n.push("/"),n.push(Ct(a,a.charAt(0)=="/"?ma:ga,!0))),(a=this.i.toString())&&n.push("?",a),(a=this.m)&&n.push("#",Ct(a,va)),n.join("")},Re.prototype.resolve=function(n){const s=he(this);let a=!!n.j;a?St(s,n.j):a=!!n.o,a?s.o=n.o:a=!!n.g,a?s.g=n.g:a=n.u!=null;var l=n.h;if(a)At(s,n.u);else if(a=!!n.h){if(l.charAt(0)!="/")if(this.g&&!this.h)l="/"+l;else{var v=s.h.lastIndexOf("/");v!=-1&&(l=s.h.slice(0,v+1)+l)}if(v=l,v==".."||v==".")l="";else if(v.indexOf("./")!=-1||v.indexOf("/.")!=-1){l=v.lastIndexOf("/",0)==0,v=v.split("/");const I=[];for(let T=0;T<v.length;){const k=v[T++];k=="."?l&&T==v.length&&I.push(""):k==".."?((I.length>1||I.length==1&&I[0]!="")&&I.pop(),l&&T==v.length&&I.push("")):(I.push(k),l=!0)}l=I.join("/")}else l=v}return a?s.h=l:a=n.i.toString()!=="",a?er(s,Ti(n.i)):a=!!n.m,a&&(s.m=n.m),s};function he(n){return new Re(n)}function St(n,s,a){n.j=a?kt(s,!0):s,n.j&&(n.j=n.j.replace(/:$/,""))}function At(n,s){if(s){if(s=Number(s),isNaN(s)||s<0)throw Error("Bad port number "+s);n.u=s}else n.u=null}function er(n,s,a){s instanceof Rt?(n.i=s,_a(n.i,n.l)):(a||(s=Ct(s,ya)),n.i=new Rt(s,n.l))}function x(n,s,a){n.i.set(s,a)}function rn(n){return x(n,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),n}function kt(n,s){return n?s?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Ct(n,s,a){return typeof n=="string"?(n=encodeURI(n).replace(s,pa),a&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function pa(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var _i=/[#\/\?@]/g,ga=/[#\?:]/g,ma=/[#\?]/g,ya=/[#\?@]/g,va=/#/g;function Rt(n,s){this.h=this.g=null,this.i=n||null,this.j=!!s}function Ge(n){n.g||(n.g=new Map,n.h=0,n.i&&fa(n.i,function(s,a){n.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}r=Rt.prototype,r.add=function(n,s){Ge(this),this.i=null,n=at(this,n);let a=this.g.get(n);return a||this.g.set(n,a=[]),a.push(s),this.h+=1,this};function wi(n,s){Ge(n),s=at(n,s),n.g.has(s)&&(n.i=null,n.h-=n.g.get(s).length,n.g.delete(s))}function Ii(n,s){return Ge(n),s=at(n,s),n.g.has(s)}r.forEach=function(n,s){Ge(this),this.g.forEach(function(a,l){a.forEach(function(v){n.call(s,v,l,this)},this)},this)};function bi(n,s){Ge(n);let a=[];if(typeof s=="string")Ii(n,s)&&(a=a.concat(n.g.get(at(n,s))));else for(n=Array.from(n.g.values()),s=0;s<n.length;s++)a=a.concat(n[s]);return a}r.set=function(n,s){return Ge(this),this.i=null,n=at(this,n),Ii(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[s]),this.h+=1,this},r.get=function(n,s){return n?(n=bi(this,n),n.length>0?String(n[0]):s):s};function Ei(n,s,a){wi(n,s),a.length>0&&(n.i=null,n.g.set(at(n,s),U(a)),n.h+=a.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],s=Array.from(this.g.keys());for(let l=0;l<s.length;l++){var a=s[l];const v=Et(a);a=bi(this,a);for(let I=0;I<a.length;I++){let T=v;a[I]!==""&&(T+="="+Et(a[I])),n.push(T)}}return this.i=n.join("&")};function Ti(n){const s=new Rt;return s.i=n.i,n.g&&(s.g=new Map(n.g),s.h=n.h),s}function at(n,s){return s=String(s),n.j&&(s=s.toLowerCase()),s}function _a(n,s){s&&!n.j&&(Ge(n),n.i=null,n.g.forEach(function(a,l){const v=l.toLowerCase();l!=v&&(wi(this,l),Ei(this,v,a))},n)),n.j=s}function wa(n,s){const a=new bt;if(h.Image){const l=new Image;l.onload=S(Ne,a,"TestLoadImage: loaded",!0,s,l),l.onerror=S(Ne,a,"TestLoadImage: error",!1,s,l),l.onabort=S(Ne,a,"TestLoadImage: abort",!1,s,l),l.ontimeout=S(Ne,a,"TestLoadImage: timeout",!1,s,l),h.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=n}else s(!1)}function Ia(n,s){const a=new bt,l=new AbortController,v=setTimeout(()=>{l.abort(),Ne(a,"TestPingServer: timeout",!1,s)},1e4);fetch(n,{signal:l.signal}).then(I=>{clearTimeout(v),I.ok?Ne(a,"TestPingServer: ok",!0,s):Ne(a,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(v),Ne(a,"TestPingServer: error",!1,s)})}function Ne(n,s,a,l,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),l(a)}catch{}}function ba(){this.g=new ia}function tr(n){this.i=n.Sb||null,this.h=n.ab||!1}E(tr,ni),tr.prototype.g=function(){return new sn(this.i,this.h)};function sn(n,s){G.call(this),this.H=n,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(sn,G),r=sn.prototype,r.open=function(n,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=n,this.D=s,this.readyState=1,Pt(this)},r.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const s={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};n&&(s.body=n),(this.H||h).fetch(new Request(this.D,s)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Nt(this)),this.readyState=0},r.Pa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Pt(this)),this.g&&(this.readyState=3,Pt(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Si(this)}else n.text().then(this.Oa.bind(this),this.ga.bind(this))};function Si(n){n.j.read().then(n.Ma.bind(n)).catch(n.ga.bind(n))}r.Ma=function(n){if(this.g){if(this.o&&n.value)this.response.push(n.value);else if(!this.o){var s=n.value?n.value:new Uint8Array(0);(s=this.B.decode(s,{stream:!n.done}))&&(this.response=this.responseText+=s)}n.done?Nt(this):Pt(this),this.readyState==3&&Si(this)}},r.Oa=function(n){this.g&&(this.response=this.responseText=n,Nt(this))},r.Na=function(n){this.g&&(this.response=n,Nt(this))},r.ga=function(){this.g&&Nt(this)};function Nt(n){n.readyState=4,n.l=null,n.j=null,n.B=null,Pt(n)}r.setRequestHeader=function(n,s){this.A.append(n,s)},r.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],s=this.h.entries();for(var a=s.next();!a.done;)a=a.value,n.push(a[0]+": "+a[1]),a=s.next();return n.join(`\r
`)};function Pt(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(sn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});function Ai(n){let s="";return Qt(n,function(a,l){s+=l,s+=":",s+=a,s+=`\r
`}),s}function nr(n,s,a){e:{for(l in a){var l=!1;break e}l=!0}l||(a=Ai(a),typeof n=="string"?a!=null&&Et(a):x(n,s,a))}function V(n){G.call(this),this.headers=new Map,this.L=n||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(V,G);var Ea=/^https?$/i,Ta=["POST","PUT"];r=V.prototype,r.Fa=function(n){this.H=n},r.ea=function(n,s,a,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+n);s=s?s.toUpperCase():"GET",this.D=n,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ai.g(),this.g.onreadystatechange=R(b(this.Ca,this));try{this.B=!0,this.g.open(s,String(n),!0),this.B=!1}catch(I){ki(this,I);return}if(n=a||"",a=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var v in l)a.set(v,l[v]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const I of l.keys())a.set(I,l.get(I));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(a.keys()).find(I=>I.toLowerCase()=="content-type"),v=h.FormData&&n instanceof h.FormData,!(Array.prototype.indexOf.call(Ta,s,void 0)>=0)||l||v||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,T]of a)this.g.setRequestHeader(I,T);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(n),this.v=!1}catch(I){ki(this,I)}};function ki(n,s){n.h=!1,n.g&&(n.j=!0,n.g.abort(),n.j=!1),n.l=s,n.o=5,Ci(n),on(n)}function Ci(n){n.A||(n.A=!0,q(n,"complete"),q(n,"error"))}r.abort=function(n){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=n||7,q(this,"complete"),q(this,"abort"),on(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),V.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Ri(this):this.Xa())},r.Xa=function(){Ri(this)};function Ri(n){if(n.h&&typeof c<"u"){if(n.v&&Pe(n)==4)setTimeout(n.Ca.bind(n),0);else if(q(n,"readystatechange"),Pe(n)==4){n.h=!1;try{const I=n.ca();e:switch(I){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var a;if(!(a=s)){var l;if(l=I===0){let T=String(n.D).match(vi)[1]||null;!T&&h.self&&h.self.location&&(T=h.self.location.protocol.slice(0,-1)),l=!Ea.test(T?T.toLowerCase():"")}a=l}if(a)q(n,"complete"),q(n,"success");else{n.o=6;try{var v=Pe(n)>2?n.g.statusText:""}catch{v=""}n.l=v+" ["+n.ca()+"]",Ci(n)}}finally{on(n)}}}}function on(n,s){if(n.g){n.m&&(clearTimeout(n.m),n.m=null);const a=n.g;n.g=null,s||q(n,"ready");try{a.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Pe(n){return n.g?n.g.readyState:0}r.ca=function(){try{return Pe(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(n){if(this.g){var s=this.g.responseText;return n&&s.indexOf(n)==0&&(s=s.substring(n.length)),ra(s)}};function Ni(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.F){case"":case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Sa(n){const s={};n=(n.g&&Pe(n)>=2&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<n.length;l++){if(d(n[l]))continue;var a=ha(n[l]);const v=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const I=s[v]||[];s[v]=I,I.push(a)}Yo(s,function(l){return l.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ot(n,s,a){return a&&a.internalChannelParams&&a.internalChannelParams[n]||s}function Pi(n){this.za=0,this.i=[],this.j=new bt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ot("failFast",!1,n),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ot("baseRetryDelayMs",5e3,n),this.Za=Ot("retryDelaySeedMs",1e4,n),this.Ta=Ot("forwardChannelMaxRetries",2,n),this.va=Ot("forwardChannelRequestTimeoutMs",2e4,n),this.ma=n&&n.xmlHttpFactory||void 0,this.Ua=n&&n.Rb||void 0,this.Aa=n&&n.useFetchStreams||!1,this.O=void 0,this.L=n&&n.supportsCrossDomainXhr||!1,this.M="",this.h=new fi(n&&n.concurrentRequestLimit),this.Ba=new ba,this.S=n&&n.fastHandshake||!1,this.R=n&&n.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=n&&n.Pb||!1,n&&n.ua&&this.j.ua(),n&&n.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&n&&n.detectBufferingProxy||!1,this.ia=void 0,n&&n.longPollingTimeout&&n.longPollingTimeout>0&&(this.ia=n.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Pi.prototype,r.ka=8,r.I=1,r.connect=function(n,s,a,l){K(0),this.W=n,this.H=s||{},a&&l!==void 0&&(this.H.OSID=a,this.H.OAID=l),this.F=this.X,this.J=Vi(this,null,this.W),cn(this)};function rr(n){if(Oi(n),n.I==3){var s=n.V++,a=he(n.J);if(x(a,"SID",n.M),x(a,"RID",s),x(a,"TYPE","terminate"),Dt(n,a),s=new Ce(n,n.j,s),s.M=2,s.A=rn(he(a)),a=!1,h.navigator&&h.navigator.sendBeacon)try{a=h.navigator.sendBeacon(s.A.toString(),"")}catch{}!a&&h.Image&&(new Image().src=s.A,a=!0),a||(s.g=Bi(s.j,null),s.g.ea(s.A)),s.F=Date.now(),nn(s)}Fi(n)}function an(n){n.g&&(sr(n),n.g.cancel(),n.g=null)}function Oi(n){an(n),n.v&&(h.clearTimeout(n.v),n.v=null),hn(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&h.clearTimeout(n.m),n.m=null)}function cn(n){if(!pi(n.h)&&!n.m){n.m=!0;var s=n.Ea;ee||u(),Y||(ee(),Y=!0),g.add(s,n),n.D=0}}function Aa(n,s){return gi(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=s.G.concat(n.i),!0):n.I==1||n.I==2||n.D>=(n.Sa?0:n.Ta)?!1:(n.m=It(b(n.Ea,n,s),ji(n,n.D)),n.D++,!0)}r.Ea=function(n){if(this.m)if(this.m=null,this.I==1){if(!n){this.V=Math.floor(Math.random()*1e5),n=this.V++;const v=new Ce(this,this.j,n);let I=this.o;if(this.U&&(I?(I=Gr(I),Kr(I,this.U)):I=this.U),this.u!==null||this.R||(v.J=I,I=null),this.S)e:{for(var s=0,a=0;a<this.i.length;a++){t:{var l=this.i[a];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break t}l=void 0}if(l===void 0)break;if(s+=l,s>4096){s=a;break e}if(s===4096||a===this.i.length-1){s=a+1;break e}}s=1e3}else s=1e3;s=Li(this,v,s),a=he(this.J),x(a,"RID",n),x(a,"CVER",22),this.G&&x(a,"X-HTTP-Session-Id",this.G),Dt(this,a),I&&(this.R?s="headers="+Et(Ai(I))+"&"+s:this.u&&nr(a,this.u,I)),Qn(this.h,v),this.Ra&&x(a,"TYPE","init"),this.S?(x(a,"$req",s),x(a,"SID","null"),v.U=!0,Jn(v,a,null)):Jn(v,a,s),this.I=2}}else this.I==3&&(n?Di(this,n):this.i.length==0||pi(this.h)||Di(this))};function Di(n,s){var a;s?a=s.l:a=n.V++;const l=he(n.J);x(l,"SID",n.M),x(l,"RID",a),x(l,"AID",n.K),Dt(n,l),n.u&&n.o&&nr(l,n.u,n.o),a=new Ce(n,n.j,a,n.D+1),n.u===null&&(a.J=n.o),s&&(n.i=s.G.concat(n.i)),s=Li(n,a,1e3),a.H=Math.round(n.va*.5)+Math.round(n.va*.5*Math.random()),Qn(n.h,a),Jn(a,l,s)}function Dt(n,s){n.H&&Qt(n.H,function(a,l){x(s,l,a)}),n.l&&Qt({},function(a,l){x(s,l,a)})}function Li(n,s,a){a=Math.min(n.i.length,a);const l=n.l?b(n.l.Ka,n.l,n):null;e:{var v=n.i;let k=-1;for(;;){const W=["count="+a];k==-1?a>0?(k=v[0].g,W.push("ofs="+k)):k=0:W.push("ofs="+k);let j=!0;for(let z=0;z<a;z++){var I=v[z].g;const le=v[z].map;if(I-=k,I<0)k=Math.max(0,v[z].g-100),j=!1;else try{I="req"+I+"_"||"";try{var T=le instanceof Map?le:Object.entries(le);for(const[ht,Oe]of T){let De=Oe;y(Oe)&&(De=$n(Oe)),W.push(I+ht+"="+encodeURIComponent(De))}}catch(ht){throw W.push(I+"type="+encodeURIComponent("_badmap")),ht}}catch{l&&l(le)}}if(j){T=W.join("&");break e}}T=void 0}return n=n.i.splice(0,a),s.G=n,T}function Mi(n){if(!n.g&&!n.v){n.Y=1;var s=n.Da;ee||u(),Y||(ee(),Y=!0),g.add(s,n),n.A=0}}function ir(n){return n.g||n.v||n.A>=3?!1:(n.Y++,n.v=It(b(n.Da,n),ji(n,n.A)),n.A++,!0)}r.Da=function(){if(this.v=null,Ui(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var n=4*this.T;this.j.info("BP detection timer enabled: "+n),this.B=It(b(this.Wa,this),n)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,K(10),an(this),Ui(this))};function sr(n){n.B!=null&&(h.clearTimeout(n.B),n.B=null)}function Ui(n){n.g=new Ce(n,n.j,"rpc",n.Y),n.u===null&&(n.g.J=n.o),n.g.P=0;var s=he(n.na);x(s,"RID","rpc"),x(s,"SID",n.M),x(s,"AID",n.K),x(s,"CI",n.F?"0":"1"),!n.F&&n.ia&&x(s,"TO",n.ia),x(s,"TYPE","xmlhttp"),Dt(n,s),n.u&&n.o&&nr(s,n.u,n.o),n.O&&(n.g.H=n.O);var a=n.g;n=n.ba,a.M=1,a.A=rn(he(s)),a.u=null,a.R=!0,li(a,n)}r.Va=function(){this.C!=null&&(this.C=null,an(this),ir(this),K(19))};function hn(n){n.C!=null&&(h.clearTimeout(n.C),n.C=null)}function xi(n,s){var a=null;if(n.g==s){hn(n),sr(n),n.g=null;var l=2}else if(Zn(n.h,s))a=s.G,mi(n.h,s),l=1;else return;if(n.I!=0){if(s.o)if(l==1){a=s.u?s.u.length:0,s=Date.now()-s.F;var v=n.D;l=Gn(),q(l,new oi(l,a)),cn(n)}else Mi(n);else if(v=s.m,v==3||v==0&&s.X>0||!(l==1&&Aa(n,s)||l==2&&ir(n)))switch(a&&a.length>0&&(s=n.h,s.i=s.i.concat(a)),v){case 1:qe(n,5);break;case 4:qe(n,10);break;case 3:qe(n,6);break;default:qe(n,2)}}}function ji(n,s){let a=n.Qa+Math.floor(Math.random()*n.Za);return n.isActive()||(a*=2),a*s}function qe(n,s){if(n.j.info("Error code "+s),s==2){var a=b(n.bb,n),l=n.Ua;const v=!l;l=new Re(l||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||St(l,"https"),rn(l),v?wa(l.toString(),a):Ia(l.toString(),a)}else K(2);n.I=0,n.l&&n.l.pa(s),Fi(n),Oi(n)}r.bb=function(n){n?(this.j.info("Successfully pinged google.com"),K(2)):(this.j.info("Failed to ping google.com"),K(1))};function Fi(n){if(n.I=0,n.ja=[],n.l){const s=yi(n.h);(s.length!=0||n.i.length!=0)&&(L(n.ja,s),L(n.ja,n.i),n.h.i.length=0,U(n.i),n.i.length=0),n.l.oa()}}function Vi(n,s,a){var l=a instanceof Re?he(a):new Re(a);if(l.g!="")s&&(l.g=s+"."+l.g),At(l,l.u);else{var v=h.location;l=v.protocol,s=s?s+"."+v.hostname:v.hostname,v=+v.port;const I=new Re(null);l&&St(I,l),s&&(I.g=s),v&&At(I,v),a&&(I.h=a),l=I}return a=n.G,s=n.wa,a&&s&&x(l,a,s),x(l,"VER",n.ka),Dt(n,l),l}function Bi(n,s,a){if(s&&!n.L)throw Error("Can't create secondary domain capable XhrIo object.");return s=n.Aa&&!n.ma?new V(new tr({ab:a})):new V(n.ma),s.Fa(n.L),s}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hi(){}r=Hi.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function te(n,s){G.call(this),this.g=new Pi(s),this.l=n,this.h=s&&s.messageUrlParams||null,n=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.o=n,n=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(n?n["X-WebChannel-Content-Type"]=s.messageContentType:n={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.sa&&(n?n["X-WebChannel-Client-Profile"]=s.sa:n={"X-WebChannel-Client-Profile":s.sa}),this.g.U=n,(n=s&&s.Qb)&&!d(n)&&(this.g.u=n),this.A=s&&s.supportsCrossDomainXhr||!1,this.v=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!d(s)&&(this.g.G=s,n=this.h,n!==null&&s in n&&(n=this.h,s in n&&delete n[s])),this.j=new ct(this)}E(te,G),te.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},te.prototype.close=function(){rr(this.g)},te.prototype.o=function(n){var s=this.g;if(typeof n=="string"){var a={};a.__data__=n,n=a}else this.v&&(a={},a.__data__=$n(n),n=a);s.i.push(new da(s.Ya++,n)),s.I==3&&cn(s)},te.prototype.N=function(){this.g.l=null,delete this.j,rr(this.g),delete this.g,te.Z.N.call(this)};function $i(n){Wn.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var s=n.__sm__;if(s){e:{for(const a in s){n=a;break e}n=void 0}(this.i=n)&&(n=this.i,s=s!==null&&n in s?s[n]:void 0),this.data=s}else this.data=n}E($i,Wn);function Wi(){zn.call(this),this.status=1}E(Wi,zn);function ct(n){this.g=n}E(ct,Hi),ct.prototype.ra=function(){q(this.g,"a")},ct.prototype.qa=function(n){q(this.g,new $i(n))},ct.prototype.pa=function(n){q(this.g,new Wi)},ct.prototype.oa=function(){q(this.g,"b")},te.prototype.send=te.prototype.o,te.prototype.open=te.prototype.m,te.prototype.close=te.prototype.close,G.prototype.listen=G.prototype.J,V.prototype.listenOnce=V.prototype.K,V.prototype.getLastError=V.prototype.Ha,V.prototype.getLastErrorCode=V.prototype.ya,V.prototype.getStatus=V.prototype.ca,V.prototype.getResponseJson=V.prototype.La,V.prototype.getResponseText=V.prototype.la,V.prototype.send=V.prototype.ea,V.prototype.setWithCredentials=V.prototype.Fa}).apply(typeof un<"u"?un:typeof self<"u"?self:typeof window<"u"?window:{});const rs="@firebase/firestore",is="4.9.2";/**
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
*/let Gt="12.3.0";/**
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
*/const gt=new Rr("@firebase/firestore");function se(r,...e){if(gt.logLevel<=D.DEBUG){const t=e.map(Dr);gt.debug(`Firestore (${Gt}): ${r}`,...t)}}function no(r,...e){if(gt.logLevel<=D.ERROR){const t=e.map(Dr);gt.error(`Firestore (${Gt}): ${r}`,...t)}}function ch(r,...e){if(gt.logLevel<=D.WARN){const t=e.map(Dr);gt.warn(`Firestore (${Gt}): ${r}`,...t)}}function Dr(r){if(typeof r=="string")return r;try{/**
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
*/return(function(e){return JSON.stringify(e)})(r)}catch{return r}}/**
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
*/function Ht(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,ro(r,i,t)}function ro(r,e,t){let i=`FIRESTORE (${Gt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw no(i),new Error(i)}function xt(r,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,r||ro(e,o,i)}/**
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
*/const P={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class O extends ve{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
*/class jt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
*/class io{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(J.UNAUTHENTICATED)))}shutdown(){}}class lh{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class uh{constructor(e){this.t=e,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){xt(this.o===void 0,42304);let i=this.i;const o=_=>this.i!==i?(i=this.i,t(_)):Promise.resolve();let c=new jt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new jt,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const _=c;e.enqueueRetryable((async()=>{await _.promise,await o(this.currentUser)}))},y=_=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((_=>y(_))),setTimeout((()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?y(_):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new jt)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(xt(typeof i.accessToken=="string",31837,{l:i}),new io(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xt(e===null||typeof e=="string",2055,{h:e}),new J(e)}}class dh{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=J.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class fh{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new dh(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(J.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ss{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ph{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Q(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){xt(this.o===void 0,3512);const i=c=>{c.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,se("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>i(c)))};const o=c=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>o(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ss(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(xt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ss(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
*/function gh(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
*/class mh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=gh(40);for(let c=0;c<o.length;++c)i.length<20&&o[c]<t&&(i+=e.charAt(o[c]%62))}return i}}function He(r,e){return r<e?-1:r>e?1:0}function yh(r,e){const t=Math.min(r.length,e.length);for(let i=0;i<t;i++){const o=r.charAt(i),c=e.charAt(i);if(o!==c)return dr(o)===dr(c)?He(o,c):dr(o)?1:-1}return He(r.length,e.length)}const vh=55296,_h=57343;function dr(r){const e=r.charCodeAt(0);return e>=vh&&e<=_h}/**
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
*/const os="__name__";class ue{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ht(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Ht(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ue.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ue?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const c=ue.compareSegments(e.get(o),t.get(o));if(c!==0)return c}return He(e.length,t.length)}static compareSegments(e,t){const i=ue.isNumericId(e),o=ue.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?ue.extractNumericId(e).compare(ue.extractNumericId(t)):yh(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Or.fromString(e.substring(4,e.length-2))}}class ie extends ue{construct(e,t,i){return new ie(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new ie(t)}static emptyPath(){return new ie([])}}const wh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends ue{construct(e,t,i){return new Je(e,t,i)}static isValidIdentifier(e){return wh.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===os}static keyField(){return new Je([os])}static fromServerFormat(e){const t=[];let i="",o=0;const c=()=>{if(i.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const y=e[o];if(y==="\\"){if(o+1===e.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[o+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=_,o+=2}else y==="`"?(h=!h,o++):y!=="."||h?(i+=y,o++):(c(),o++)}if(c(),h)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(t)}static emptyPath(){return new Je([])}}/**
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
*/class Xe{constructor(e){this.path=e}static fromPath(e){return new Xe(ie.fromString(e))}static fromName(e){return new Xe(ie.fromString(e).popFirst(5))}static empty(){return new Xe(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Xe(new ie(e.slice()))}}function Ih(r,e,t,i){if(e===!0&&i===!0)throw new O(P.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function bh(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Eh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(t){return t.constructor?t.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ht(12329,{type:typeof r})}function Th(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Eh(r);throw new O(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
*/function H(r,e){const t={typeString:r};return e&&(t.value=e),t}function qt(r,e){if(!bh(r))throw new O(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,c="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){t=`JSON missing required field: '${i}'`;break}const h=r[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(c!==void 0&&h!==c.value){t=`Expected '${i}' field to equal '${c.value}'`;break}}if(t)throw new O(P.INVALID_ARGUMENT,t);return!0}/**
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
*/const as=-62135596800,cs=1e6;class de{static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*cs);return new de(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<as)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/cs}_compareTo(e){return this.seconds===e.seconds?He(this.nanoseconds,e.nanoseconds):He(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:de._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(qt(e,de._jsonSchema))return new de(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-as;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}de._jsonSchemaVersion="firestore/timestamp/1.0",de._jsonSchema={type:H("string",de._jsonSchemaVersion),seconds:H("number"),nanoseconds:H("number")};function Sh(r){return r.name==="IndexedDbTransactionError"}/**
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
*/class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ah("Invalid base64 string: "+o):o}})(e);return new tt(t)}static fromUint8Array(e){const t=(function(i){let o="";for(let c=0;c<i.length;++c)o+=String.fromCharCode(i[c]);return o})(e);return new tt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return He(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const br="(default)";class bn{constructor(e,t){this.projectId=e,this.database=t||br}static empty(){return new bn("","")}get isDefaultDatabase(){return this.database===br}isEqual(e){return e instanceof bn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
*/class kh{constructor(e,t=null,i=[],o=[],c=null,h="F",y=null,_=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=c,this.limitType=h,this.startAt=y,this.endAt=_,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Ch(r){return new kh(r)}/**
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
*/var hs,N;(N=hs||(hs={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
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
*/new Or([4294967295,4294967295],0);/**
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
*/const Nh=1048576;function fr(){return typeof document<"u"?document:null}/**
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
*/class Ph{constructor(e,t,i=1e3,o=1.5,c=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=o,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
*/class Lr{constructor(e,t,i,o,c){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=c,this.deferred=new jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,c){const h=Date.now()+i,y=new Lr(e,t,h,o,c);return y.start(i),y}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var ls,us;(us=ls||(ls={})).Ma="default",us.Cache="cache";/**
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
*/function Oh(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
*/const ds=new Map;/**
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
*/const so="firestore.googleapis.com",fs=!0;class ps{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=so,this.ssl=fs}else this.host=e.host,this.ssl=e.ssl??fs;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Rh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Nh)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ih("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Oh(e.experimentalLongPollingOptions??{}),(function(t){if(t.timeoutSeconds!==void 0){if(isNaN(t.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(t,i){return t.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oo{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ps({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ps(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(t){if(!t)return new hh;switch(t.type){case"firstParty":return new fh(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const t=ds.get(e);t&&(se("ComponentProvider","Removing Datastore"),ds.delete(e),t.terminate())})(this),Promise.resolve()}}function Dh(r,e,t,i={}){r=Th(r,oo);const o=yt(e),c=r._getSettings(),h={...c,emulatorOptions:r._getEmulatorOptions()},y=`${e}:${t}`;o&&(kr(`https://${y}`),Cr("Firestore",!0)),c.host!==so&&c.host!==y&&ch("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...c,host:y,ssl:o,emulatorOptions:i};if(!Qe(_,h)&&(r._setSettings(_),i.mockUserToken)){let b,S;if(typeof i.mockUserToken=="string")b=i.mockUserToken,S=J.MOCK_USER;else{b=Xs(i.mockUserToken,r._app?.options.projectId);const E=i.mockUserToken.sub||i.mockUserToken.user_id;if(!E)throw new O(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new J(E)}r._authCredentials=new lh(new io(b,S))}}/**
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
*/class Mr{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Mr(this.firestore,e,this._query)}}class fe{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fe(this.firestore,e,this._key)}toJSON(){return{type:fe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(qt(t,fe._jsonSchema))return new fe(e,i||null,new Xe(ie.fromString(t.referencePath)))}}fe._jsonSchemaVersion="firestore/documentReference/1.0",fe._jsonSchema={type:H("string",fe._jsonSchemaVersion),referencePath:H("string")};class Ur extends Mr{constructor(e,t,i){super(e,t,Ch(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fe(this.firestore,null,new Xe(e))}withConverter(e){return new Ur(this.firestore,e,this._path)}}/**
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
*/const gs="AsyncQueue";class ms{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ph(this,"async_queue_retry"),this._c=()=>{const i=fr();i&&se(gs,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=fr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=fr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new jt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Sh(e))throw e;se(gs,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,no("INTERNAL UNHANDLED ERROR: ",ys(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Lr.createAndSchedule(this,e,t,i,(c=>this.hc(c)));return this.tc.push(o),o}uc(){this.nc&&Ht(47125,{Pc:ys(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function ys(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Lh extends oo{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new ms,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ms(e),this._firestoreClient=void 0,await e}}}function Mh(r,e){const t=typeof r=="object"?r:Pr(),i=typeof r=="string"?r:br,o=On(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const c=qs("firestore");c&&Dh(o,...c)}return o}/**
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
*/class Ie{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ie(tt.fromBase64String(e))}catch(t){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ie(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ie._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(qt(e,Ie._jsonSchema))return Ie.fromBase64String(e.bytes)}}Ie._jsonSchemaVersion="firestore/bytes/1.0",Ie._jsonSchema={type:H("string",Ie._jsonSchemaVersion),bytes:H("string")};/**
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
*/class ao{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
*/class Ye{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return He(this._lat,e._lat)||He(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ye._jsonSchemaVersion}}static fromJSON(e){if(qt(e,Ye._jsonSchema))return new Ye(e.latitude,e.longitude)}}Ye._jsonSchemaVersion="firestore/geoPoint/1.0",Ye._jsonSchema={type:H("string",Ye._jsonSchemaVersion),latitude:H("number"),longitude:H("number")};/**
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
*/class Ze{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(t,i){if(t.length!==i.length)return!1;for(let o=0;o<t.length;++o)if(t[o]!==i[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ze._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(qt(e,Ze._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ze(e.vectorValues);throw new O(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ze._jsonSchemaVersion="firestore/vectorValue/1.0",Ze._jsonSchema={type:H("string",Ze._jsonSchemaVersion),vectorValues:H("object")};const Uh=new RegExp("[~\\*/\\[\\]]");function xh(r,e,t){if(e.search(Uh)>=0)throw vs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new ao(...e.split("."))._internalPath}catch{throw vs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function vs(r,e,t,i,o){let c=`Function ${e}() called with invalid data`;c+=". ";let h="";return new O(P.INVALID_ARGUMENT,c+r+h)}/**
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
*/class co{constructor(e,t,i,o,c){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ho("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class jh extends co{data(){return super.data()}}function ho(r,e){return typeof e=="string"?xh(r,e):e instanceof ao?e._internalPath:e._delegate._internalPath}class dn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ut extends co{constructor(e,t,i,o,c,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new gn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(ho("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ut._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()||(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED")),t}}ut._jsonSchemaVersion="firestore/documentSnapshot/1.0",ut._jsonSchema={type:H("string",ut._jsonSchemaVersion),bundleSource:H("string","DocumentSnapshot"),bundleName:H("string"),bundle:H("string")};class gn extends ut{data(e={}){return super.data(e)}}class Ft{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new dn(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new gn(this._firestore,this._userDataWriter,i.key,i,new dn(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map((h=>{const y=new gn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new dn(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:y,oldIndex:-1,newIndex:c++}}))}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((h=>o||h.type!==3)).map((h=>{const y=new gn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new dn(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let _=-1,b=-1;return h.type!==0&&(_=c.indexOf(h.doc.key),c=c.delete(h.doc.key)),h.type!==1&&(c=c.add(h.doc),b=c.indexOf(h.doc.key)),{type:Fh(h.type),doc:y,oldIndex:_,newIndex:b}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ft._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=mh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((c=>{c._document!==null&&(t.push(c._document),i.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Fh(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ht(61501,{type:r})}}Ft._jsonSchemaVersion="firestore/querySnapshot/1.0",Ft._jsonSchema={type:H("string",Ft._jsonSchemaVersion),bundleSource:H("string","QuerySnapshot"),bundleName:H("string"),bundle:H("string")};(function(r,e=!0){(function(t){Gt=t})(it),et(new Be("firestore",((t,{instanceIdentifier:i,options:o})=>{const c=t.getProvider("app").getImmediate(),h=new Lh(new uh(t.getProvider("auth-internal")),new ph(c,t.getProvider("app-check-internal")),(function(y,_){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bn(y.options.projectId,_)})(c,i),c);return o={useFetchStreams:e,...o},h._setSettings(o),h}),"PUBLIC").setMultipleInstances(!0)),pe(rs,is,r),pe(rs,is,"esm2020")})();function lo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vh=lo,uo=new Wt("auth","Firebase",lo());/**
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
*/const En=new Rr("@firebase/auth");function Bh(r,...e){En.logLevel<=D.WARN&&En.warn(`Auth (${it}): ${r}`,...e)}function mn(r,...e){En.logLevel<=D.ERROR&&En.error(`Auth (${it}): ${r}`,...e)}/**
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
*/function ce(r,...e){throw xr(r,...e)}function ge(r,...e){return xr(r,...e)}function fo(r,e,t){const i={...Vh(),[e]:t};return new Wt("auth","Firebase",i).create(e,{appName:r.name})}function Te(r){return fo(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xr(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return uo.create(r,...e)}function A(r,e,...t){if(!r)throw xr(e,...t)}function be(r){const e="INTERNAL ASSERTION FAILED: "+r;throw mn(e),new Error(e)}function Ae(r,e){r||be(e)}/**
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
*/function Er(){return typeof self<"u"&&self.location?.href||""}function Hh(){return _s()==="http:"||_s()==="https:"}function _s(){return typeof self<"u"&&self.location?.protocol||null}/**
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
*/function $h(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hh()||Va()||"connection"in navigator)?navigator.onLine:!0}function Wh(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
*/class Kt{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ae(t>e,"Short delay should be less than long delay!"),this.isMobile=ja()||Ba()}get(){return $h()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
*/function jr(r,e){Ae(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
*/class po{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;be("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;be("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;be("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
*/const Gh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qh=new Kt(3e4,6e4);function ke(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function _e(r,e,t,i,o={}){return go(r,o,async()=>{let c={},h={};i&&(e==="GET"?h=i:c={body:JSON.stringify(i)});const y=zt({key:r.config.apiKey,...h}).slice(1),_=await r._getAdditionalHeaders();_["Content-Type"]="application/json",r.languageCode&&(_["X-Firebase-Locale"]=r.languageCode);const b={method:e,headers:_,...c};return Fa()||(b.referrerPolicy="no-referrer"),r.emulatorConfig&&yt(r.emulatorConfig.host)&&(b.credentials="include"),po.fetch()(await mo(r,r.config.apiHost,t,y),b)})}async function go(r,e,t){r._canInitEmulator=!1;const i={...zh,...e};try{const o=new Jh(r),c=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw fn(r,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const y=c.ok?h.errorMessage:h.error.message,[_,b]=y.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw fn(r,"credential-already-in-use",h);if(_==="EMAIL_EXISTS")throw fn(r,"email-already-in-use",h);if(_==="USER_DISABLED")throw fn(r,"user-disabled",h);const S=i[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(b)throw fo(r,S,b);ce(r,S)}}catch(o){if(o instanceof ve)throw o;ce(r,"network-request-failed",{message:String(o)})}}async function Jt(r,e,t,i,o={}){const c=await _e(r,e,t,i,o);return"mfaPendingCredential"in c&&ce(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function mo(r,e,t,i){const o=`${e}${t}?${i}`,c=r,h=c.config.emulator?jr(r.config,o):`${r.config.apiScheme}://${o}`;return Gh.includes(t)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}function Kh(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Jh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ge(this.auth,"network-request-failed")),qh.get())})}}function fn(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=ge(r,e,i);return o.customData._tokenResponse=t,o}function ws(r){return r!==void 0&&r.enterprise!==void 0}class Xh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Kh(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Yh(r,e){return _e(r,"GET","/v2/recaptchaConfig",ke(r,e))}/**
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
*/async function Zh(r,e){return _e(r,"POST","/v1/accounts:delete",e)}async function Tn(r,e){return _e(r,"POST","/v1/accounts:lookup",e)}/**
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
*/function Vt(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qh(r,e=!1){const t=ne(r),i=await t.getIdToken(e),o=Fr(i);A(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c?.sign_in_provider;return{claims:o,token:i,authTime:Vt(pr(o.auth_time)),issuedAtTime:Vt(pr(o.iat)),expirationTime:Vt(pr(o.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function pr(r){return Number(r)*1e3}function Fr(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return mn("JWT malformed, contained fewer than 3 sections"),null;try{const o=zs(t);return o?JSON.parse(o):(mn("Failed to decode base64 JWT payload"),null)}catch(o){return mn("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Is(r){const e=Fr(r);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
*/async function mt(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ve&&el(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function el({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
*/class tl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const t=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,t)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
*/class Tr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vt(this.lastLoginAt),this.creationTime=Vt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
*/async function Sn(r){const e=r.auth,t=await r.getIdToken(),i=await mt(r,Tn(e,{idToken:t}));A(i?.users.length,e,"internal-error");const o=i.users[0];r._notifyReloadListener(o);const c=o.providerUserInfo?.length?yo(o.providerUserInfo):[],h=rl(r.providerData,c),y=r.isAnonymous,_=!(r.email&&o.passwordHash)&&!h?.length,b=y?_:!1,S={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Tr(o.createdAt,o.lastLoginAt),isAnonymous:b};Object.assign(r,S)}async function nl(r){const e=ne(r);await Sn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rl(r,e){return[...r.filter(t=>!e.some(i=>i.providerId===t.providerId)),...e]}function yo(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
*/async function il(r,e){const t=await go(r,{},async()=>{const i=zt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=r.config,h=await mo(r,o,"/v1/token",`key=${c}`),y=await r._getAdditionalHeaders();y["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:y,body:i};return r.emulatorConfig&&yt(r.emulatorConfig.host)&&(_.credentials="include"),po.fetch()(h,_)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function sl(r,e){return _e(r,"POST","/v2/accounts:revokeToken",ke(r,e))}/**
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
*/class dt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Is(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){A(e.length!==0,"internal-error");const t=Is(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:c}=await il(e,t);this.updateTokensAndExpiration(i,o,Number(c))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:c}=t,h=new dt;return i&&(A(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(A(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),c&&(A(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dt,this.toJSON())}_performRefresh(){return be("not implemented")}}/**
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
*/function Le(r,e){A(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class oe{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new tl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Tr(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await mt(this,this.stsTokenManager.getToken(this.auth,e));return A(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Qh(this,e)}reload(){return nl(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new oe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Sn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Q(this.auth.app))return Promise.reject(Te(this.auth));const e=await this.getIdToken();return await mt(this,Zh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,c=t.phoneNumber??void 0,h=t.photoURL??void 0,y=t.tenantId??void 0,_=t._redirectEventId??void 0,b=t.createdAt??void 0,S=t.lastLoginAt??void 0,{uid:E,emailVerified:R,isAnonymous:U,providerData:L,stsTokenManager:M}=t;A(E&&M,e,"internal-error");const C=dt.fromJSON(this.name,M);A(typeof E=="string",e,"internal-error"),Le(i,e.name),Le(o,e.name),A(typeof R=="boolean",e,"internal-error"),A(typeof U=="boolean",e,"internal-error"),Le(c,e.name),Le(h,e.name),Le(y,e.name),Le(_,e.name),Le(b,e.name),Le(S,e.name);const B=new oe({uid:E,auth:e,email:o,emailVerified:R,displayName:i,isAnonymous:U,photoURL:h,phoneNumber:c,tenantId:y,stsTokenManager:C,createdAt:b,lastLoginAt:S});return L&&Array.isArray(L)&&(B.providerData=L.map($=>({...$}))),_&&(B._redirectEventId=_),B}static async _fromIdTokenResponse(e,t,i=!1){const o=new dt;o.updateFromServerResponse(t);const c=new oe({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Sn(c),c}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];A(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?yo(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!c?.length,y=new dt;y.updateFromIdToken(i);const _=new oe({uid:o.localId,auth:e,stsTokenManager:y,isAnonymous:h}),b={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Tr(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!c?.length};return Object.assign(_,b),_}}/**
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
*/const bs=new Map;function Ee(r){Ae(r instanceof Function,"Expected a class definition");let e=bs.get(r);return e?(Ae(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,bs.set(r,e),e)}/**
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
*/class vo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}vo.type="NONE";const Es=vo;/**
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
*/function yn(r,e,t){return`firebase:${r}:${e}:${t}`}class ft{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:c}=this.auth;this.fullUserKey=yn(this.userKey,o.apiKey,c),this.fullPersistenceKey=yn("persistence",o.apiKey,c),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Tn(this.auth,{idToken:e}).catch(()=>{});return t?oe._fromGetAccountInfoResponse(this.auth,t,e):null}return oe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new ft(Ee(Es),e,i);const o=(await Promise.all(t.map(async b=>{if(await b._isAvailable())return b}))).filter(b=>b);let c=o[0]||Ee(Es);const h=yn(i,e.config.apiKey,e.name);let y=null;for(const b of t)try{const S=await b._get(h);if(S){let E;if(typeof S=="string"){const R=await Tn(e,{idToken:S}).catch(()=>{});if(!R)break;E=await oe._fromGetAccountInfoResponse(e,R,S)}else E=oe._fromJSON(e,S);b!==c&&(y=E),c=b;break}}catch{}const _=o.filter(b=>b._shouldAllowMigration);return!c._shouldAllowMigration||!_.length?new ft(c,e,i):(c=_[0],y&&await c._set(h,y.toJSON()),await Promise.all(t.map(async b=>{if(b!==c)try{await b._remove(h)}catch{}})),new ft(c,e,i))}}/**
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
*/function Ts(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_o(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(To(e))return"Blackberry";if(So(e))return"Webos";if(wo(e))return"Safari";if((e.includes("chrome/")||Io(e))&&!e.includes("edge/"))return"Chrome";if(Eo(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if(i?.length===2)return i[1]}return"Other"}function _o(r=X()){return/firefox\//i.test(r)}function wo(r=X()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Io(r=X()){return/crios\//i.test(r)}function bo(r=X()){return/iemobile/i.test(r)}function Eo(r=X()){return/android/i.test(r)}function To(r=X()){return/blackberry/i.test(r)}function So(r=X()){return/webos/i.test(r)}function Vr(r=X()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function ol(r=X()){return Vr(r)&&!!window.navigator?.standalone}function al(){return Ha()&&document.documentMode===10}function Ao(r=X()){return Vr(r)||Eo(r)||So(r)||To(r)||/windows phone/i.test(r)||bo(r)}/**
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
*/function ko(r,e=[]){let t;switch(r){case"Browser":t=Ts(X());break;case"Worker":t=`${Ts(X())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${it}/${i}`}/**
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
*/class cl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=c=>new Promise((h,y)=>{try{const _=e(c);h(_)}catch(_){y(_)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
*/async function hl(r,e={}){return _e(r,"GET","/v2/passwordPolicy",ke(r,e))}/**
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
*/const ll=6;class ul{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??ll,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
*/class dl{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ss(this),this.idTokenSubscription=new Ss(this),this.beforeStateQueue=new cl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ee(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ft.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Tn(this,{idToken:e}),i=await oe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Q(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,h=i?._redirectEventId,y=await this.tryRedirectSignIn(e);(!c||c===h)&&y?.user&&(i=y.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Sn(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Q(this.app))return Promise.reject(Te(this));const t=e?ne(e):null;return t&&A(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Q(this.app)?Promise.reject(Te(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Q(this.app)?Promise.reject(Te(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ee(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hl(this),t=new ul(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Wt("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await sl(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ee(e)||this._popupRedirectResolver;A(t,this,"argument-error"),this.redirectPersistenceManager=await ft.create(this,[Ee(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const c=typeof t=="function"?t:t.next.bind(t);let h=!1;const y=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(y,this,"internal-error"),y.then(()=>{h||c(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,i,o);return()=>{h=!0,_()}}else{const _=e.addObserver(t);return()=>{h=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ko(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(Q(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Bh(`Error while retrieving App Check token: ${e.error}`),e?.token}}function $e(r){return ne(r)}class Ss{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ja(t=>this.observer=t)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
*/let Dn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fl(r){Dn=r}function Co(r){return Dn.loadJS(r)}function pl(){return Dn.recaptchaEnterpriseScript}function gl(){return Dn.gapiScript}function ml(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class yl{constructor(){this.enterprise=new vl}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class vl{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const _l="recaptcha-enterprise",Ro="NO_RECAPTCHA";class wl{constructor(e){this.type=_l,this.auth=$e(e)}async verify(e="verify",t=!1){async function i(c){if(!t){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(h,y)=>{Yh(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)y(new Error("recaptcha Enterprise site key undefined"));else{const b=new Xh(_);return c.tenantId==null?c._agentRecaptchaConfig=b:c._tenantRecaptchaConfigs[c.tenantId]=b,h(b.siteKey)}}).catch(_=>{y(_)})})}function o(c,h,y){const _=window.grecaptcha;ws(_)?_.enterprise.ready(()=>{_.enterprise.execute(c,{action:e}).then(b=>{h(b)}).catch(()=>{h(Ro)})}):y(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new yl().execute("siteKey",{action:"verify"}):new Promise((c,h)=>{i(this.auth).then(y=>{if(!t&&ws(window.grecaptcha))o(y,c,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let _=pl();_.length!==0&&(_+=y),Co(_).then(()=>{o(y,c,h)}).catch(b=>{h(b)})}}).catch(y=>{h(y)})})}}async function As(r,e,t,i=!1,o=!1){const c=new wl(r);let h;if(o)h=Ro;else try{h=await c.verify(t)}catch{h=await c.verify(t,!0)}const y={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in y){const _=y.phoneEnrollmentInfo.phoneNumber,b=y.phoneEnrollmentInfo.recaptchaToken;Object.assign(y,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:b,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in y){const _=y.phoneSignInInfo.recaptchaToken;Object.assign(y,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return y}return i?Object.assign(y,{captchaResp:h}):Object.assign(y,{captchaResponse:h}),Object.assign(y,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(y,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),y}async function An(r,e,t,i,o){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await As(r,e,t,t==="getOobCode");return i(r,c)}else return i(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await As(r,e,t,t==="getOobCode");return i(r,h)}else return Promise.reject(c)})}/**
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
*/function Il(r,e){const t=On(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(Qe(o,e??{}))return i;ce(i,"already-initialized")}return t.initialize({options:e})}function bl(r,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Ee);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e?.popupRedirectResolver)}function El(r,e,t){const i=$e(r);A(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,c=No(e),{host:h,port:y}=Tl(e),_=y===null?"":`:${y}`,b={url:`${c}//${h}${_}/`},S=Object.freeze({host:h,port:y,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){A(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),A(Qe(b,i.config.emulator)&&Qe(S,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=b,i.emulatorConfig=S,i.settings.appVerificationDisabledForTesting=!0,yt(h)?(kr(`${c}//${h}${_}`),Cr("Auth",!0)):Sl()}function No(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Tl(r){const e=No(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const c=o[1];return{host:c,port:ks(i.substr(c.length+1))}}else{const[c,h]=i.split(":");return{host:c,port:ks(h)}}}function ks(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Sl(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
*/class Br{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return be("not implemented")}_getIdTokenResponse(e){return be("not implemented")}_linkToIdToken(e,t){return be("not implemented")}_getReauthenticationResolver(e){return be("not implemented")}}async function Al(r,e){return _e(r,"POST","/v1/accounts:signUp",e)}/**
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
*/async function kl(r,e){return Jt(r,"POST","/v1/accounts:signInWithPassword",ke(r,e))}async function Po(r,e){return _e(r,"POST","/v1/accounts:sendOobCode",ke(r,e))}async function Cl(r,e){return Po(r,e)}async function Rl(r,e){return Po(r,e)}/**
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
*/async function Nl(r,e){return Jt(r,"POST","/v1/accounts:signInWithEmailLink",ke(r,e))}async function Pl(r,e){return Jt(r,"POST","/v1/accounts:signInWithEmailLink",ke(r,e))}/**
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
*/class $t extends Br{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new $t(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new $t(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return An(e,t,"signInWithPassword",kl);case"emailLink":return Nl(e,{email:this._email,oobCode:this._password});default:ce(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return An(e,i,"signUpPassword",Al);case"emailLink":return Pl(e,{idToken:t,email:this._email,oobCode:this._password});default:ce(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
*/async function pt(r,e){return Jt(r,"POST","/v1/accounts:signInWithIdp",ke(r,e))}/**
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
*/const Ol="http://localhost";class nt extends Br{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ce("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...c}=t;if(!i||!o)return null;const h=new nt(i,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return pt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,pt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pt(e,t)}buildRequest(){const e={requestUri:Ol,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zt(t)}return e}}/**
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
*/function Dl(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ll(r){const e=Lt(Mt(r)).link,t=e?Lt(Mt(e)).deep_link_id:null,i=Lt(Mt(r)).deep_link_id;return(i?Lt(Mt(i)).link:null)||i||t||e||r}class Hr{constructor(e){const t=Lt(Mt(e)),i=t.apiKey??null,o=t.oobCode??null,c=Dl(t.mode??null);A(i&&o&&c,"argument-error"),this.apiKey=i,this.operation=c,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Ll(e);try{return new Hr(t)}catch{return null}}}/**
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
*/class vt{constructor(){this.providerId=vt.PROVIDER_ID}static credential(e,t){return $t._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Hr.parseLink(t);return A(i,"argument-error"),$t._fromEmailAndCode(e,i.code,i.tenantId)}}vt.PROVIDER_ID="password";vt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
*/class Oo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
*/class Xt extends Oo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
*/class Me extends Xt{constructor(){super("facebook.com")}static credential(e){return nt._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Me.credential(e.oauthAccessToken)}catch{return null}}}Me.FACEBOOK_SIGN_IN_METHOD="facebook.com";Me.PROVIDER_ID="facebook.com";/**
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
*/class Ue extends Xt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nt._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ue.credential(t,i)}catch{return null}}}Ue.GOOGLE_SIGN_IN_METHOD="google.com";Ue.PROVIDER_ID="google.com";/**
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
*/class xe extends Xt{constructor(){super("github.com")}static credential(e){return nt._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xe.credentialFromTaggedObject(e)}static credentialFromError(e){return xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xe.credential(e.oauthAccessToken)}catch{return null}}}xe.GITHUB_SIGN_IN_METHOD="github.com";xe.PROVIDER_ID="github.com";/**
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
*/class je extends Xt{constructor(){super("twitter.com")}static credential(e,t){return nt._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return je.credential(t,i)}catch{return null}}}je.TWITTER_SIGN_IN_METHOD="twitter.com";je.PROVIDER_ID="twitter.com";/**
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
*/async function Ml(r,e){return Jt(r,"POST","/v1/accounts:signUp",ke(r,e))}/**
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
*/class rt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const c=await oe._fromIdTokenResponse(e,i,o),h=Cs(i);return new rt({user:c,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Cs(i);return new rt({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Cs(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
*/class kn extends ve{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,kn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new kn(e,t,i,o)}}function Do(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?kn._fromErrorAndOperation(r,o,e,i):o})}async function Ul(r,e,t=!1){const i=await mt(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return rt._forOperation(r,"link",i)}/**
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
*/async function xl(r,e,t=!1){const{auth:i}=r;if(Q(i.app))return Promise.reject(Te(i));const o="reauthenticate";try{const c=await mt(r,Do(i,o,e,r),t);A(c.idToken,i,"internal-error");const h=Fr(c.idToken);A(h,i,"internal-error");const{sub:y}=h;return A(r.uid===y,i,"user-mismatch"),rt._forOperation(r,o,c)}catch(c){throw c?.code==="auth/user-not-found"&&ce(i,"user-mismatch"),c}}/**
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
*/async function Lo(r,e,t=!1){if(Q(r.app))return Promise.reject(Te(r));const i="signIn",o=await Do(r,i,e),c=await rt._fromIdTokenResponse(r,i,o);return t||await r._updateCurrentUser(c.user),c}async function jl(r,e){return Lo($e(r),e)}/**
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
*/function Fl(r,e,t){A(t.url?.length>0,r,"invalid-continue-uri"),A(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),A(typeof t.linkDomain>"u"||t.linkDomain.length>0,r,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(A(t.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(A(t.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
*/async function Mo(r){const e=$e(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Pd(r,e,t){const i=$e(r);await An(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Rl)}async function Od(r,e,t){if(Q(r.app))return Promise.reject(Te(r));const i=$e(r),o=await An(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ml).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&Mo(r),h}),c=await rt._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function Dd(r,e,t){return Q(r.app)?Promise.reject(Te(r)):jl(ne(r),vt.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Mo(r),i})}async function Ld(r,e){const t=ne(r),i={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()};e&&Fl(t.auth,i,e);const{email:o}=await Cl(t.auth,i);o!==r.email&&await r.reload()}/**
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
*/async function Vl(r,e){return _e(r,"POST","/v1/accounts:update",e)}/**
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
*/async function Md(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=ne(r),o={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await mt(i,Vl(i.auth,o));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const h=i.providerData.find(({providerId:y})=>y==="password");h&&(h.displayName=i.displayName,h.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function Bl(r,e,t,i){return ne(r).onIdTokenChanged(e,t,i)}function Hl(r,e,t){return ne(r).beforeAuthStateChanged(e,t)}function Ud(r,e,t,i){return ne(r).onAuthStateChanged(e,t,i)}function xd(r){return ne(r).signOut()}const Cn="__sak";/**
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
*/class Uo{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cn,"1"),this.storage.removeItem(Cn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
*/const $l=1e3,Wl=10;class xo extends Uo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ao(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,y,_)=>{this.notifyListeners(h,_)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},c=this.storage.getItem(i);al()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Wl):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},$l)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xo.type="LOCAL";const zl=xo;/**
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
*/class jo extends Uo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jo.type="SESSION";const Fo=jo;/**
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
*/function Gl(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
*/class Ln{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Ln(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:c}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const y=Array.from(h).map(async b=>b(t.origin,c)),_=await Gl(y);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ln.receivers=[];/**
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
*/function $r(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
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
*/class ql{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((y,_)=>{const b=$r("",20);o.port1.start();const S=setTimeout(()=>{_(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(E){const R=E;if(R.data.eventId===b)switch(R.data.status){case"ack":clearTimeout(S),c=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),y(R.data.response);break;default:clearTimeout(S),clearTimeout(c),_(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:b,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
*/function me(){return window}function Kl(r){me().location.href=r}/**
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
*/function Vo(){return typeof me().WorkerGlobalScope<"u"&&typeof me().importScripts=="function"}async function Jl(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xl(){return navigator?.serviceWorker?.controller||null}function Yl(){return Vo()?self:null}/**
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
*/const Bo="firebaseLocalStorageDb",Zl=1,Rn="firebaseLocalStorage",Ho="fbase_key";class Yt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Mn(r,e){return r.transaction([Rn],e?"readwrite":"readonly").objectStore(Rn)}function Ql(){const r=indexedDB.deleteDatabase(Bo);return new Yt(r).toPromise()}function Sr(){const r=indexedDB.open(Bo,Zl);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(Rn,{keyPath:Ho})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(Rn)?e(i):(i.close(),await Ql(),e(await Sr()))})})}async function Rs(r,e,t){const i=Mn(r,!0).put({[Ho]:e,value:t});return new Yt(i).toPromise()}async function eu(r,e){const t=Mn(r,!1).get(e),i=await new Yt(t).toPromise();return i===void 0?null:i.value}function Ns(r,e){const t=Mn(r,!0).delete(e);return new Yt(t).toPromise()}const tu=800,nu=3;class $o{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>nu)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ln._getInstance(Yl()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Jl(),!this.activeServiceWorker)return;this.sender=new ql(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sr();return await Rs(e,Cn,"1"),await Ns(e,Cn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Rs(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>eu(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ns(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=Mn(o,!1).getAll();return new Yt(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$o.type="LOCAL";const ru=$o;new Kt(3e4,6e4);/**
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
*/function iu(r,e){return e?Ee(e):(A(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
*/class Wr extends Br{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function su(r){return Lo(r.auth,new Wr(r),r.bypassAuthState)}function ou(r){const{auth:e,user:t}=r;return A(t,e,"internal-error"),xl(t,new Wr(r),r.bypassAuthState)}async function au(r){const{auth:e,user:t}=r;return A(t,e,"internal-error"),Ul(t,new Wr(r),r.bypassAuthState)}/**
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
*/class Wo{constructor(e,t,i,o,c=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:c,error:h,type:y}=e;if(h){this.reject(h);return}const _={auth:this.auth,requestUri:t,sessionId:i,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(y)(_))}catch(b){this.reject(b)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return su;case"linkViaPopup":case"linkViaRedirect":return au;case"reauthViaPopup":case"reauthViaRedirect":return ou;default:ce(this.auth,"internal-error")}}resolve(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
*/const cu=new Kt(2e3,1e4);class lt extends Wo{constructor(e,t,i,o,c){super(e,t,o,c),this.provider=i,this.authWindow=null,this.pollId=null,lt.currentPopupAction&&lt.currentPopupAction.cancel(),lt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Ae(this.filter.length===1,"Popup operations only handle one event");const e=$r();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lt.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cu.get())};e()}}lt.currentPopupAction=null;/**
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
*/const hu="pendingRedirect",vn=new Map;class lu extends Wo{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=vn.get(this.auth._key());if(!e){try{const t=await uu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}vn.set(this.auth._key(),e)}return this.bypassAuthState||vn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uu(r,e){const t=pu(e),i=fu(r);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function du(r,e){vn.set(r._key(),e)}function fu(r){return Ee(r._redirectPersistence)}function pu(r){return yn(hu,r.config.apiKey,r.name)}async function gu(r,e,t=!1){if(Q(r.app))return Promise.reject(Te(r));const i=$e(r),o=iu(i,e),c=await new lu(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
*/const mu=600*1e3;class yu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vu(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!zo(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ge(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mu&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ps(e))}saveEventToCache(e){this.cachedEventUids.add(Ps(e)),this.lastProcessedEventTime=Date.now()}}function Ps(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function zo({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function vu(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zo(r);default:return!1}}/**
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
*/async function _u(r,e={}){return _e(r,"GET","/v1/projects",e)}/**
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
*/const wu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Iu=/^https?/;async function bu(r){if(r.config.emulator)return;const{authorizedDomains:e}=await _u(r);for(const t of e)try{if(Eu(t))return}catch{}ce(r,"unauthorized-domain")}function Eu(r){const e=Er(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const c=new URL(r);return c.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!Iu.test(t))return!1;if(wu.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
*/const Tu=new Kt(3e4,6e4);function Os(){const r=me().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Su(r){return new Promise((e,t)=>{function i(){Os(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Os(),t(ge(r,"network-request-failed"))},timeout:Tu.get()})}if(me().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(me().gapi?.load)i();else{const o=ml("iframefcb");return me()[o]=()=>{gapi.load?i():t(ge(r,"network-request-failed"))},Co(`${gl()}?onload=${o}`).catch(c=>t(c))}}).catch(e=>{throw _n=null,e})}let _n=null;function Au(r){return _n=_n||Su(r),_n}/**
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
*/const ku=new Kt(5e3,15e3),Cu="__/auth/iframe",Ru="emulator/auth/iframe",Nu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ou(r){const e=r.config;A(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?jr(e,Ru):`https://${r.config.authDomain}/${Cu}`,i={apiKey:e.apiKey,appName:r.name,v:it},o=Pu.get(r.config.apiHost);o&&(i.eid=o);const c=r._getFrameworks();return c.length&&(i.fw=c.join(",")),`${t}?${zt(i).slice(1)}`}async function Du(r){const e=await Au(r),t=me().gapi;return A(t,r,"internal-error"),e.open({where:document.body,url:Ou(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nu,dontclear:!0},i=>new Promise(async(o,c)=>{await i.restyle({setHideOnLeave:!1});const h=ge(r,"network-request-failed"),y=me().setTimeout(()=>{c(h)},ku.get());function _(){me().clearTimeout(y),o(i)}i.ping(_).then(_,()=>{c(h)})}))}/**
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
*/const Lu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mu=500,Uu=600,xu="_blank",ju="http://localhost";class Ds{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fu(r,e,t,i=Mu,o=Uu){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let y="";const _={...Lu,width:i.toString(),height:o.toString(),top:c,left:h},b=X().toLowerCase();t&&(y=Io(b)?xu:t),_o(b)&&(e=e||ju,_.scrollbars="yes");const S=Object.entries(_).reduce((R,[U,L])=>`${R}${U}=${L},`,"");if(ol(b)&&y!=="_self")return Vu(e||"",y),new Ds(null);const E=window.open(e||"",y,S);A(E,r,"popup-blocked");try{E.focus()}catch{}return new Ds(E)}function Vu(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
*/const Bu="__/auth/handler",Hu="emulator/auth/handler",$u=encodeURIComponent("fac");async function Ls(r,e,t,i,o,c){A(r.config.authDomain,r,"auth-domain-config-required"),A(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:it,eventId:o};if(e instanceof Oo){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",Ka(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[S,E]of Object.entries({}))h[S]=E}if(e instanceof Xt){const S=e.getScopes().filter(E=>E!=="");S.length>0&&(h.scopes=S.join(","))}r.tenantId&&(h.tid=r.tenantId);const y=h;for(const S of Object.keys(y))y[S]===void 0&&delete y[S];const _=await r._getAppCheckToken(),b=_?`#${$u}=${encodeURIComponent(_)}`:"";return`${Wu(r)}?${zt(y).slice(1)}${b}`}function Wu({config:r}){return r.emulator?jr(r,Hu):`https://${r.authDomain}/${Bu}`}/**
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
*/const gr="webStorageSupport";class zu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fo,this._completeRedirectFn=gu,this._overrideRedirectResult=du}async _openPopup(e,t,i,o){Ae(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await Ls(e,t,i,Er(),o);return Fu(e,c,$r())}async _openRedirect(e,t,i,o){await this._originValidation(e);const c=await Ls(e,t,i,Er(),o);return Kl(c),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:c}=this.eventManagers[t];return o?Promise.resolve(o):(Ae(c,"If manager is not set, promise should be"),c)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Du(e),i=new yu(e);return t.register("authEvent",o=>(A(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gr,{type:gr},i=>{const o=i?.[0]?.[gr];o!==void 0&&t(!!o),ce(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bu(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ao()||wo()||Vr()}}const Gu=zu;var Ms="@firebase/auth",Us="1.11.0";/**
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
*/class qu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
*/function Ku(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ju(r){et(new Be("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:y}=i.options;A(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const _={apiKey:h,authDomain:y,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ko(r)},b=new dl(i,o,c,_);return bl(b,t),b},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),et(new Be("auth-internal",e=>{const t=$e(e.getProvider("auth").getImmediate());return(i=>new qu(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pe(Ms,Us,Ku(r)),pe(Ms,Us,"esm2020")}/**
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
*/const Xu=300,Yu=Js("authIdTokenMaxAge")||Xu;let xs=null;const Zu=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Yu)return;const o=t?.token;xs!==o&&(xs=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Qu(r=Pr()){const e=On(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Il(r,{popupRedirectResolver:Gu,persistence:[ru,zl,Fo]}),i=Js("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(i,location.origin);if(location.origin===c.origin){const h=Zu(c.toString());Hl(t,h,()=>h(t.currentUser)),Bl(t,y=>h(y))}}const o=Gs("auth");return o&&El(t,`http://${o}`),t}function ed(){return document.getElementsByTagName("head")?.[0]??document}fl({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const c=ge("internal-error");c.customData=o,t(c)},i.type="text/javascript",i.charset="UTF-8",ed().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ju("Browser");/**
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
*/const Go="firebasestorage.googleapis.com",td="storageBucket",nd=120*1e3,rd=600*1e3;/**
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
*/class we extends ve{constructor(e,t,i=0){super(mr(e),`Firebase Storage: ${t} (${mr(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,we.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return mr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ye;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ye||(ye={}));function mr(r){return"storage/"+r}function id(){const r="An unknown error occurred, please check the error payload for server response.";return new we(ye.UNKNOWN,r)}function sd(){return new we(ye.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function od(){return new we(ye.CANCELED,"User canceled the upload/download.")}function ad(r){return new we(ye.INVALID_URL,"Invalid URL '"+r+"'.")}function cd(r){return new we(ye.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function js(r){return new we(ye.INVALID_ARGUMENT,r)}function qo(){return new we(ye.APP_DELETED,"The Firebase app was deleted.")}function hd(r){return new we(ye.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
*/class ae{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=ae.makeFromUrl(e,t)}catch{return new ae(e,"")}if(i.path==="")return i;throw cd(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function c(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const h="(/(.*))?$",y=new RegExp("^gs://"+o+h,"i"),_={bucket:1,path:3};function b(F){F.path_=decodeURIComponent(F.path)}const S="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",U=new RegExp(`^https?://${E}/${S}/b/${o}/o${R}`,"i"),L={bucket:1,path:3},M=t===Go?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",B=new RegExp(`^https?://${M}/${o}/${C}`,"i"),$=[{regex:y,indices:_,postModify:c},{regex:U,indices:L,postModify:b},{regex:B,indices:{bucket:1,path:2},postModify:b}];for(let F=0;F<$.length;F++){const re=$[F],ee=re.regex.exec(e);if(ee){const Y=ee[re.indices.bucket];let g=ee[re.indices.path];g||(g=""),i=new ae(Y,g),re.postModify(i);break}}if(i==null)throw ad(e);return i}}class ld{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
*/function ud(r,e,t){let i=1,o=null,c=null,h=!1,y=0;function _(){return y===2}let b=!1;function S(...C){b||(b=!0,e.apply(null,C))}function E(C){o=setTimeout(()=>{o=null,r(U,_())},C)}function R(){c&&clearTimeout(c)}function U(C,...B){if(b){R();return}if(C){R(),S.call(null,C,...B);return}if(_()||h){R(),S.call(null,C,...B);return}i<64&&(i*=2);let $;y===1?(y=2,$=0):$=(i+Math.random())*1e3,E($)}let L=!1;function M(C){L||(L=!0,R(),!b&&(o!==null?(C||(y=2),clearTimeout(o),E(0)):C||(y=1)))}return E(0),c=setTimeout(()=>{h=!0,M(!0)},t),M}function dd(r){r(!1)}/**
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
*/function fd(r){return r!==void 0}function Fs(r,e,t,i){if(i<e)throw js(`Invalid value for '${r}'. Expected ${e} or greater.`);if(i>t)throw js(`Invalid value for '${r}'. Expected ${t} or less.`)}function pd(r){const e=encodeURIComponent;let t="?";for(const i in r)if(r.hasOwnProperty(i)){const o=e(i)+"="+e(r[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Nn;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Nn||(Nn={}));/**
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
*/function gd(r,e){const t=r>=500&&r<600,i=[408,429].indexOf(r)!==-1,o=e.indexOf(r)!==-1;return t||i||o}/**
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
*/class md{constructor(e,t,i,o,c,h,y,_,b,S,E,R=!0,U=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=c,this.additionalRetryCodes_=h,this.callback_=y,this.errorCallback_=_,this.timeout_=b,this.progressCallback_=S,this.connectionFactory_=E,this.retry=R,this.isUsingEmulator=U,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((L,M)=>{this.resolve_=L,this.reject_=M,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new pn(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const h=y=>{const _=y.loaded,b=y.lengthComputable?y.total:-1;this.progressCallback_!==null&&this.progressCallback_(_,b)};this.progressCallback_!==null&&c.addUploadProgressListener(h),c.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(h),this.pendingConnection_=null;const y=c.getErrorCode()===Nn.NO_ERROR,_=c.getStatus();if(!y||gd(_,this.additionalRetryCodes_)&&this.retry){const S=c.getErrorCode()===Nn.ABORT;i(!1,new pn(!1,null,S));return}const b=this.successCodes_.indexOf(_)!==-1;i(!0,new pn(b,c))})},t=(i,o)=>{const c=this.resolve_,h=this.reject_,y=o.connection;if(o.wasSuccessCode)try{const _=this.callback_(y,y.getResponse());fd(_)?c(_):c()}catch(_){h(_)}else if(y!==null){const _=id();_.serverResponse=y.getErrorText(),this.errorCallback_?h(this.errorCallback_(y,_)):h(_)}else if(o.canceled){const _=this.appDelete_?qo():od();h(_)}else{const _=sd();h(_)}};this.canceled_?t(!1,new pn(!1,null,!0)):this.backoffId_=ud(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&dd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pn{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function yd(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function vd(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _d(r,e){e&&(r["X-Firebase-GMPID"]=e)}function wd(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function Id(r,e,t,i,o,c,h=!0,y=!1){const _=pd(r.urlParams),b=r.url+_,S=Object.assign({},r.headers);return _d(S,e),yd(S,t),vd(S,c),wd(S,i),new md(b,r.method,S,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,h,y)}/**
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
*/function bd(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function Ed(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
*/class Pn{constructor(e,t){this._service=e,t instanceof ae?this._location=t:this._location=ae.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Pn(e,t)}get root(){const e=new ae(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ed(this._location.path)}get storage(){return this._service}get parent(){const e=bd(this._location.path);if(e===null)return null;const t=new ae(this._location.bucket,e);return new Pn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw hd(e)}}function Vs(r,e){const t=e?.[td];return t==null?null:ae.makeFromBucketSpec(t,r)}function Td(r,e,t,i={}){r.host=`${e}:${t}`;const o=yt(e);o&&(kr(`https://${r.host}/b`),Cr("Storage",!0)),r._isUsingEmulator=!0,r._protocol=o?"https":"http";const{mockUserToken:c}=i;c&&(r._overrideAuthToken=typeof c=="string"?c:Xs(c,r.app.options.projectId))}class Sd{constructor(e,t,i,o,c,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=c,this._isUsingEmulator=h,this._bucket=null,this._host=Go,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=nd,this._maxUploadRetryTime=rd,this._requests=new Set,o!=null?this._bucket=ae.makeFromBucketSpec(o,this._host):this._bucket=Vs(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ae.makeFromBucketSpec(this._url,e):this._bucket=Vs(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Fs("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Fs("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Q(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Pn(this,e)}_makeRequest(e,t,i,o,c=!0){if(this._deleted)return new ld(qo());{const h=Id(e,this._appId,i,o,t,this._firebaseVersion,c,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const Bs="@firebase/storage",Hs="0.14.0";/**
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
*/const Ko="storage";function Ad(r=Pr(),e){r=ne(r);const t=On(r,Ko).getImmediate({identifier:e}),i=qs("storage");return i&&kd(t,...i),t}function kd(r,e,t,i={}){Td(r,e,t,i)}function Cd(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),i=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new Sd(t,i,o,e,it)}function Rd(){et(new Be(Ko,Cd,"PUBLIC").setMultipleInstances(!0)),pe(Bs,Hs,""),pe(Bs,Hs,"esm2020")}Rd();const Nd={apiKey:"AIzaSyC0qVQm59S1_OFJcYLr2ILyGB9m-SoxHro",authDomain:"holysmokas-4ef36.firebaseapp.com",projectId:"holysmokas-4ef36",storageBucket:"holysmokas-4ef36.firebasestorage.app",messagingSenderId:"236391401471",appId:"1:236391401471:web:16780dc40257205caf09ca",measurementId:"G-LRKVZGKNLD"},zr=Qs(Nd);Mh(zr);const jd=Qu(zr);Ad(zr);export{Od as D,jd as F,Dd as L,Ld as M,Pd as O,Md as U,xd as j,Ud as x};
