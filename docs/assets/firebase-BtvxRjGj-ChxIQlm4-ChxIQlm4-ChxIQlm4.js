const Oa=()=>{};var qs={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Na=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const c=i[t++];e[s++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=i[t++],h=i[t++],g=i[t++],y=((o&7)<<18|(c&63)<<12|(h&63)<<6|g&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const c=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return e.join("")},zr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const c=i[o],h=o+1<i.length,g=h?i[o+1]:0,y=o+2<i.length,v=y?i[o+2]:0,S=c>>2,b=(c&3)<<4|g>>4;let A=(g&15)<<2|v>>6,M=v&63;y||(M=64,h||(A=64)),s.push(t[S],t[b],t[A],t[M])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Gr(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Na(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const c=t[i.charAt(o++)],g=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const b=o<i.length?t[i.charAt(o)]:64;if(++o,c==null||g==null||v==null||b==null)throw new Da;const A=c<<2|g>>4;if(s.push(A),v!==64){const M=g<<4&240|v>>2;if(s.push(M),b!==64){const D=v<<6&192|b;s.push(D)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Da extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const La=function(i){const e=Gr(i);return zr.encodeByteArray(e,!0)},En=function(i){return La(i).replace(/\./g,"")},qr=function(i){try{return zr.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ma(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ua=()=>Ma().__FIREBASE_DEFAULTS__,xa=()=>{if(typeof process>"u"||typeof qs>"u")return;const i=qs.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Fa=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&qr(i[1]);return e&&JSON.parse(e)},ki=()=>{try{return Oa()||Ua()||xa()||Fa()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Kr=i=>ki()?.emulatorHosts?.[i],Jr=i=>{const e=Kr(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Xr=()=>ki()?.config,Yr=i=>ki()?.[`_${i}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function _t(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Pi(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function Qr(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...i};return[En(JSON.stringify(t)),En(JSON.stringify(h)),""].join(".")}const xt={};function ja(){const i={prod:[],emulator:[]};for(const e of Object.keys(xt))xt[e]?i.emulator.push(e):i.prod.push(e);return i}function Ba(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Ks=!1;function Ci(i,e){if(typeof window>"u"||typeof document>"u"||!_t(window.location.host)||xt[i]===e||xt[i]||Ks)return;xt[i]=e;function t(A){return`__firebase__banner__${A}`}const s="__firebase__banner",c=ja().prod.length>0;function h(){const A=document.getElementById(s);A&&A.remove()}function g(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function y(A,M){A.setAttribute("width","24"),A.setAttribute("id",M),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function v(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{Ks=!0,h()},A}function S(A,M){A.setAttribute("id",M),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function b(){const A=Ba(s),M=t("text"),D=document.getElementById(M)||document.createElement("span"),U=t("learnmore"),P=document.getElementById(U)||document.createElement("a"),W=t("preprendIcon"),K=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const H=A.element;g(H),S(P,U);const j=v();y(K,W),H.append(K,D,P,j),document.body.appendChild(H)}c?(D.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",M)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ha(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Q())}function $a(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Wa(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Ga(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function za(){const i=Q();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function qa(){try{return typeof indexedDB=="object"}catch{return!1}}function Ka(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="FirebaseError";class ye extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Ja,Object.setPrototypeOf(this,ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gt.prototype.create)}}class Gt{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,c=this.errors[e],h=c?Xa(c,s):"Error",g=`${this.serviceName}: ${h} (${o}).`;return new ye(o,g,s)}}function Xa(i,e){return i.replace(Ya,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Ya=/\{\$([^}]+)}/g;function Qa(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function et(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const c=i[o],h=e[o];if(Js(c)&&Js(h)){if(!et(c,h))return!1}else if(c!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Js(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Mt(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,c]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(c)}}),e}function Ut(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function Za(i,e){const t=new ec(i,e);return t.subscribe.bind(t)}class ec{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");tc(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=hi),o.error===void 0&&(o.error=hi),o.complete===void 0&&(o.complete=hi);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tc(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function hi(){}/**
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
 */function ie(i){return i&&i._delegate?i._delegate:i}class Be{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Je="[DEFAULT]";/**
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
 */class nc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Va;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sc(e))try{this.getOrInitializeService({instanceIdentifier:Je})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const c=this.getOrInitializeService({instanceIdentifier:o});s.resolve(c)}catch{}}}}clearInstance(e=Je){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Je){return this.instances.has(e)}getOptions(e=Je){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[c,h]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);s===g&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const c=this.instances.get(s);return c&&e(c,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ic(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Je){return this.component?this.component.multipleInstances?e:Je:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ic(i){return i===Je?void 0:i}function sc(i){return i.instantiationMode==="EAGER"}/**
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
 */class rc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(L||(L={}));const oc={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},ac=L.INFO,cc={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},hc=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=cc[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oi{constructor(e){this.name=e,this._logLevel=ac,this._logHandler=hc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}const lc=(i,e)=>e.some(t=>i instanceof t);let Xs,Ys;function uc(){return Xs||(Xs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dc(){return Ys||(Ys=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zr=new WeakMap,Ii=new WeakMap,eo=new WeakMap,li=new WeakMap,Ni=new WeakMap;function fc(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",c),i.removeEventListener("error",h)},c=()=>{t(Ve(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",c),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Zr.set(t,i)}).catch(()=>{}),Ni.set(e,i),e}function pc(i){if(Ii.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",h),i.removeEventListener("abort",h)},c=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",c),i.addEventListener("error",h),i.addEventListener("abort",h)});Ii.set(i,e)}let wi={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Ii.get(i);if(e==="objectStoreNames")return i.objectStoreNames||eo.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ve(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function gc(i){wi=i(wi)}function mc(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(ui(this),e,...t);return eo.set(s,e.sort?e.sort():[e]),Ve(s)}:dc().includes(i)?function(...e){return i.apply(ui(this),e),Ve(Zr.get(this))}:function(...e){return Ve(i.apply(ui(this),e))}}function _c(i){return typeof i=="function"?mc(i):(i instanceof IDBTransaction&&pc(i),lc(i,uc())?new Proxy(i,wi):i)}function Ve(i){if(i instanceof IDBRequest)return fc(i);if(li.has(i))return li.get(i);const e=_c(i);return e!==i&&(li.set(i,e),Ni.set(e,i)),e}const ui=i=>Ni.get(i);function yc(i,e,{blocked:t,upgrade:s,blocking:o,terminated:c}={}){const h=indexedDB.open(i,e),g=Ve(h);return s&&h.addEventListener("upgradeneeded",y=>{s(Ve(h.result),y.oldVersion,y.newVersion,Ve(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),g.then(y=>{c&&y.addEventListener("close",()=>c()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),g}const Ic=["get","getKey","getAll","getAllKeys","count"],wc=["put","add","delete","clear"],di=new Map;function Qs(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(di.get(e))return di.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=wc.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Ic.includes(t)))return;const c=async function(h,...g){const y=this.transaction(h,o?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(g.shift())),(await Promise.all([v[t](...g),o&&y.done]))[0]};return di.set(e,c),c}gc(i=>({...i,get:(e,t,s)=>Qs(e,t)||i.get(e,t,s),has:(e,t)=>!!Qs(e,t)||i.has(e,t)}));/**
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
 */class Ec{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vc(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function vc(i){return i.getComponent()?.type==="VERSION"}const Ei="@firebase/app",Zs="0.14.4";/**
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
 */const Se=new Oi("@firebase/app"),Tc="@firebase/app-compat",Ac="@firebase/analytics-compat",Sc="@firebase/analytics",bc="@firebase/app-check-compat",Rc="@firebase/app-check",kc="@firebase/auth",Pc="@firebase/auth-compat",Cc="@firebase/database",Oc="@firebase/data-connect",Nc="@firebase/database-compat",Dc="@firebase/functions",Lc="@firebase/functions-compat",Mc="@firebase/installations",Uc="@firebase/installations-compat",xc="@firebase/messaging",Fc="@firebase/messaging-compat",Vc="@firebase/performance",jc="@firebase/performance-compat",Bc="@firebase/remote-config",Hc="@firebase/remote-config-compat",$c="@firebase/storage",Wc="@firebase/storage-compat",Gc="@firebase/firestore",zc="@firebase/ai",qc="@firebase/firestore-compat",Kc="firebase",Jc="12.4.0";/**
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
 */const vi="[DEFAULT]",Xc={[Ei]:"fire-core",[Tc]:"fire-core-compat",[Sc]:"fire-analytics",[Ac]:"fire-analytics-compat",[Rc]:"fire-app-check",[bc]:"fire-app-check-compat",[kc]:"fire-auth",[Pc]:"fire-auth-compat",[Cc]:"fire-rtdb",[Oc]:"fire-data-connect",[Nc]:"fire-rtdb-compat",[Dc]:"fire-fn",[Lc]:"fire-fn-compat",[Mc]:"fire-iid",[Uc]:"fire-iid-compat",[xc]:"fire-fcm",[Fc]:"fire-fcm-compat",[Vc]:"fire-perf",[jc]:"fire-perf-compat",[Bc]:"fire-rc",[Hc]:"fire-rc-compat",[$c]:"fire-gcs",[Wc]:"fire-gcs-compat",[Gc]:"fire-fst",[qc]:"fire-fst-compat",[zc]:"fire-vertex","fire-js":"fire-js",[Kc]:"fire-js-all"};/**
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
 */const vn=new Map,Yc=new Map,Ti=new Map;function er(i,e){try{i.container.addComponent(e)}catch(t){Se.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function tt(i){const e=i.name;if(Ti.has(e))return Se.debug(`There were multiple attempts to register component ${e}.`),!1;Ti.set(e,i);for(const t of vn.values())er(t,i);for(const t of Yc.values())er(t,i);return!0}function Dn(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function te(i){return i==null?!1:i.settings!==void 0}/**
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
 */const Qc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},je=new Gt("app","Firebase",Qc);/**
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
 */class Zc{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw je.create("app-deleted",{appName:this._name})}}/**
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
 */const rt=Jc;function to(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:vi,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw je.create("bad-app-name",{appName:String(o)});if(t||(t=Xr()),!t)throw je.create("no-options");const c=vn.get(o);if(c){if(et(t,c.options)&&et(s,c.config))return c;throw je.create("duplicate-app",{appName:o})}const h=new rc(o);for(const y of Ti.values())h.addComponent(y);const g=new Zc(t,s,h);return vn.set(o,g),g}function Di(i=vi){const e=vn.get(i);if(!e&&i===vi&&Xr())return to();if(!e)throw je.create("no-app",{appName:i});return e}function pe(i,e,t){let s=Xc[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Se.warn(h.join(" "));return}tt(new Be(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const eh="firebase-heartbeat-database",th=1,Ht="firebase-heartbeat-store";let fi=null;function no(){return fi||(fi=yc(eh,th,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ht)}catch(t){console.warn(t)}}}}).catch(i=>{throw je.create("idb-open",{originalErrorMessage:i.message})})),fi}async function nh(i){try{const t=(await no()).transaction(Ht),s=await t.objectStore(Ht).get(io(i));return await t.done,s}catch(e){if(e instanceof ye)Se.warn(e.message);else{const t=je.create("idb-get",{originalErrorMessage:e?.message});Se.warn(t.message)}}}async function tr(i,e){try{const s=(await no()).transaction(Ht,"readwrite");await s.objectStore(Ht).put(e,io(i)),await s.done}catch(t){if(t instanceof ye)Se.warn(t.message);else{const s=je.create("idb-set",{originalErrorMessage:t?.message});Se.warn(s.message)}}}function io(i){return`${i.name}!${i.options.appId}`}/**
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
 */const ih=1024,sh=30;class rh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ah(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nr();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>sh){const o=ch(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Se.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nr(),{heartbeatsToSend:t,unsentEntries:s}=oh(this._heartbeatsCache.heartbeats),o=En(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Se.warn(e),""}}}function nr(){return new Date().toISOString().substring(0,10)}function oh(i,e=ih){const t=[];let s=i.slice();for(const o of i){const c=t.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),ir(t)>e){c.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ir(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class ah{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qa()?Ka().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await nh(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return tr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return tr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ir(i){return En(JSON.stringify({version:2,heartbeats:i})).length}function ch(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function hh(i){tt(new Be("platform-logger",e=>new Ec(e),"PRIVATE")),tt(new Be("heartbeat",e=>new rh(e),"PRIVATE")),pe(Ei,Zs,i),pe(Ei,Zs,"esm2020"),pe("fire-js","")}hh("");var lh="firebase",uh="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pe(lh,uh,"app");var sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Li;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(m,u){function f(){}f.prototype=u.prototype,m.F=u.prototype,m.prototype=new f,m.prototype.constructor=m,m.D=function(_,p,w){for(var d=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)d[Z-2]=arguments[Z];return u.prototype[p].apply(_,d)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(m,u,f){f||(f=0);const _=Array(16);if(typeof u=="string")for(var p=0;p<16;++p)_[p]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(p=0;p<16;++p)_[p]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=m.g[0],f=m.g[1],p=m.g[2];let w=m.g[3],d;d=u+(w^f&(p^w))+_[0]+3614090360&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+_[1]+3905402710&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+_[2]+606105819&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+_[3]+3250441966&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(w^f&(p^w))+_[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+_[5]+1200080426&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+_[6]+2821735955&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+_[7]+4249261313&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(w^f&(p^w))+_[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+_[9]+2336552879&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+_[10]+4294925233&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+_[11]+2304563134&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(w^f&(p^w))+_[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+_[13]+4254626195&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+_[14]+2792965006&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+_[15]+1236535329&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(p^w&(f^p))+_[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+_[6]+3225465664&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+_[11]+643717713&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+_[0]+3921069994&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^w&(f^p))+_[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+_[10]+38016083&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+_[15]+3634488961&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+_[4]+3889429448&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^w&(f^p))+_[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+_[14]+3275163606&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+_[3]+4107603335&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+_[8]+1163531501&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^w&(f^p))+_[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+_[2]+4243563512&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+_[7]+1735328473&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+_[12]+2368359562&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(f^p^w)+_[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+_[8]+2272392833&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+_[11]+1839030562&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+_[14]+4259657740&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^w)+_[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+_[4]+1272893353&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+_[7]+4139469664&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+_[10]+3200236656&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^w)+_[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+_[0]+3936430074&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+_[3]+3572445317&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+_[6]+76029189&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^w)+_[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+_[12]+3873151461&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+_[15]+530742520&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+_[2]+3299628645&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(p^(f|~w))+_[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+_[7]+1126891415&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+_[14]+2878612391&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+_[5]+4237533241&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~w))+_[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+_[3]+2399980690&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+_[10]+4293915773&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+_[1]+2240044497&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~w))+_[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+_[15]+4264355552&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+_[6]+2734768916&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+_[13]+1309151649&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~w))+_[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+_[11]+3174756917&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+_[2]+718787259&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+_[9]+3951481745&4294967295,m.g[0]=m.g[0]+u&4294967295,m.g[1]=m.g[1]+(p+(d<<21&4294967295|d>>>11))&4294967295,m.g[2]=m.g[2]+p&4294967295,m.g[3]=m.g[3]+w&4294967295}s.prototype.v=function(m,u){u===void 0&&(u=m.length);const f=u-this.blockSize,_=this.C;let p=this.h,w=0;for(;w<u;){if(p==0)for(;w<=f;)o(this,m,w),w+=this.blockSize;if(typeof m=="string"){for(;w<u;)if(_[p++]=m.charCodeAt(w++),p==this.blockSize){o(this,_),p=0;break}}else for(;w<u;)if(_[p++]=m[w++],p==this.blockSize){o(this,_),p=0;break}}this.h=p,this.o+=u},s.prototype.A=function(){var m=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);m[0]=128;for(var u=1;u<m.length-8;++u)m[u]=0;u=this.o*8;for(var f=m.length-8;f<m.length;++f)m[f]=u&255,u/=256;for(this.v(m),m=Array(16),u=0,f=0;f<4;++f)for(let _=0;_<32;_+=8)m[u++]=this.g[f]>>>_&255;return m};function c(m,u){var f=g;return Object.prototype.hasOwnProperty.call(f,m)?f[m]:f[m]=u(m)}function h(m,u){this.h=u;const f=[];let _=!0;for(let p=m.length-1;p>=0;p--){const w=m[p]|0;_&&w==u||(f[p]=w,_=!1)}this.g=f}var g={};function y(m){return-128<=m&&m<128?c(m,function(u){return new h([u|0],u<0?-1:0)}):new h([m|0],m<0?-1:0)}function v(m){if(isNaN(m)||!isFinite(m))return b;if(m<0)return P(v(-m));const u=[];let f=1;for(let _=0;m>=f;_++)u[_]=m/f|0,f*=4294967296;return new h(u,0)}function S(m,u){if(m.length==0)throw Error("number format error: empty string");if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(m.charAt(0)=="-")return P(S(m.substring(1),u));if(m.indexOf("-")>=0)throw Error('number format error: interior "-" character');const f=v(Math.pow(u,8));let _=b;for(let w=0;w<m.length;w+=8){var p=Math.min(8,m.length-w);const d=parseInt(m.substring(w,w+p),u);p<8?(p=v(Math.pow(u,p)),_=_.j(p).add(v(d))):(_=_.j(f),_=_.add(v(d)))}return _}var b=y(0),A=y(1),M=y(16777216);i=h.prototype,i.m=function(){if(U(this))return-P(this).m();let m=0,u=1;for(let f=0;f<this.g.length;f++){const _=this.i(f);m+=(_>=0?_:4294967296+_)*u,u*=4294967296}return m},i.toString=function(m){if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(D(this))return"0";if(U(this))return"-"+P(this).toString(m);const u=v(Math.pow(m,6));var f=this;let _="";for(;;){const p=j(f,u).g;f=W(f,p.j(u));let w=((f.g.length>0?f.g[0]:f.h)>>>0).toString(m);if(f=p,D(f))return w+_;for(;w.length<6;)w="0"+w;_=w+_}},i.i=function(m){return m<0?0:m<this.g.length?this.g[m]:this.h};function D(m){if(m.h!=0)return!1;for(let u=0;u<m.g.length;u++)if(m.g[u]!=0)return!1;return!0}function U(m){return m.h==-1}i.l=function(m){return m=W(this,m),U(m)?-1:D(m)?0:1};function P(m){const u=m.g.length,f=[];for(let _=0;_<u;_++)f[_]=~m.g[_];return new h(f,~m.h).add(A)}i.abs=function(){return U(this)?P(this):this},i.add=function(m){const u=Math.max(this.g.length,m.g.length),f=[];let _=0;for(let p=0;p<=u;p++){let w=_+(this.i(p)&65535)+(m.i(p)&65535),d=(w>>>16)+(this.i(p)>>>16)+(m.i(p)>>>16);_=d>>>16,w&=65535,d&=65535,f[p]=d<<16|w}return new h(f,f[f.length-1]&-2147483648?-1:0)};function W(m,u){return m.add(P(u))}i.j=function(m){if(D(this)||D(m))return b;if(U(this))return U(m)?P(this).j(P(m)):P(P(this).j(m));if(U(m))return P(this.j(P(m)));if(this.l(M)<0&&m.l(M)<0)return v(this.m()*m.m());const u=this.g.length+m.g.length,f=[];for(var _=0;_<2*u;_++)f[_]=0;for(_=0;_<this.g.length;_++)for(let p=0;p<m.g.length;p++){const w=this.i(_)>>>16,d=this.i(_)&65535,Z=m.i(p)>>>16,We=m.i(p)&65535;f[2*_+2*p]+=d*We,K(f,2*_+2*p),f[2*_+2*p+1]+=w*We,K(f,2*_+2*p+1),f[2*_+2*p+1]+=d*Z,K(f,2*_+2*p+1),f[2*_+2*p+2]+=w*Z,K(f,2*_+2*p+2)}for(m=0;m<u;m++)f[m]=f[2*m+1]<<16|f[2*m];for(m=u;m<2*u;m++)f[m]=0;return new h(f,0)};function K(m,u){for(;(m[u]&65535)!=m[u];)m[u+1]+=m[u]>>>16,m[u]&=65535,u++}function H(m,u){this.g=m,this.h=u}function j(m,u){if(D(u))throw Error("division by zero");if(D(m))return new H(b,b);if(U(m))return u=j(P(m),u),new H(P(u.g),P(u.h));if(U(u))return u=j(m,P(u)),new H(P(u.g),u.h);if(m.g.length>30){if(U(m)||U(u))throw Error("slowDivide_ only works with positive integers.");for(var f=A,_=u;_.l(m)<=0;)f=ee(f),_=ee(_);var p=z(f,1),w=z(_,1);for(_=z(_,2),f=z(f,2);!D(_);){var d=w.add(_);d.l(m)<=0&&(p=p.add(f),w=d),_=z(_,1),f=z(f,1)}return u=W(m,p.j(u)),new H(p,u)}for(p=b;m.l(u)>=0;){for(f=Math.max(1,Math.floor(m.m()/u.m())),_=Math.ceil(Math.log(f)/Math.LN2),_=_<=48?1:Math.pow(2,_-48),w=v(f),d=w.j(u);U(d)||d.l(m)>0;)f-=_,w=v(f),d=w.j(u);D(w)&&(w=A),p=p.add(w),m=W(m,d)}return new H(p,m)}i.B=function(m){return j(this,m).h},i.and=function(m){const u=Math.max(this.g.length,m.g.length),f=[];for(let _=0;_<u;_++)f[_]=this.i(_)&m.i(_);return new h(f,this.h&m.h)},i.or=function(m){const u=Math.max(this.g.length,m.g.length),f=[];for(let _=0;_<u;_++)f[_]=this.i(_)|m.i(_);return new h(f,this.h|m.h)},i.xor=function(m){const u=Math.max(this.g.length,m.g.length),f=[];for(let _=0;_<u;_++)f[_]=this.i(_)^m.i(_);return new h(f,this.h^m.h)};function ee(m){const u=m.g.length+1,f=[];for(let _=0;_<u;_++)f[_]=m.i(_)<<1|m.i(_-1)>>>31;return new h(f,m.h)}function z(m,u){const f=u>>5;u%=32;const _=m.g.length-f,p=[];for(let w=0;w<_;w++)p[w]=u>0?m.i(w+f)>>>u|m.i(w+f+1)<<32-u:m.i(w+f);return new h(p,m.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=S,Li=h}).apply(typeof sr<"u"?sr:typeof self<"u"?self:typeof window<"u"?window:{});var dn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=Object.defineProperty;function t(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof dn=="object"&&dn];for(var r=0;r<n.length;++r){var a=n[r];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var s=t(this);function o(n,r){if(r)e:{var a=s;n=n.split(".");for(var l=0;l<n.length-1;l++){var I=n[l];if(!(I in a))break e;a=a[I]}n=n[n.length-1],l=a[n],r=r(l),r!=l&&r!=null&&e(a,n,{configurable:!0,writable:!0,value:r})}}o("Symbol.dispose",function(n){return n||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(n){return n||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(n){return n||function(r){var a=[],l;for(l in r)Object.prototype.hasOwnProperty.call(r,l)&&a.push([l,r[l]]);return a}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},h=this||self;function g(n){var r=typeof n;return r=="object"&&n!=null||r=="function"}function y(n,r,a){return n.call.apply(n.bind,arguments)}function v(n,r,a){return v=y,v.apply(null,arguments)}function S(n,r){var a=Array.prototype.slice.call(arguments,1);return function(){var l=a.slice();return l.push.apply(l,arguments),n.apply(this,l)}}function b(n,r){function a(){}a.prototype=r.prototype,n.Z=r.prototype,n.prototype=new a,n.prototype.constructor=n,n.Ob=function(l,I,E){for(var T=Array(arguments.length-2),k=2;k<arguments.length;k++)T[k-2]=arguments[k];return r.prototype[I].apply(l,T)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?n=>n&&AsyncContext.Snapshot.wrap(n):n=>n;function M(n){const r=n.length;if(r>0){const a=Array(r);for(let l=0;l<r;l++)a[l]=n[l];return a}return[]}function D(n,r){for(let l=1;l<arguments.length;l++){const I=arguments[l];var a=typeof I;if(a=a!="object"?a:I?Array.isArray(I)?"array":a:"null",a=="array"||a=="object"&&typeof I.length=="number"){a=n.length||0;const E=I.length||0;n.length=a+E;for(let T=0;T<E;T++)n[a+T]=I[T]}else n.push(I)}}class U{constructor(r,a){this.i=r,this.j=a,this.h=0,this.g=null}get(){let r;return this.h>0?(this.h--,r=this.g,this.g=r.next,r.next=null):r=this.i(),r}}function P(n){h.setTimeout(()=>{throw n},0)}function W(){var n=m;let r=null;return n.g&&(r=n.g,n.g=n.g.next,n.g||(n.h=null),r.next=null),r}class K{constructor(){this.h=this.g=null}add(r,a){const l=H.get();l.set(r,a),this.h?this.h.next=l:this.g=l,this.h=l}}var H=new U(()=>new j,n=>n.reset());class j{constructor(){this.next=this.g=this.h=null}set(r,a){this.h=r,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,z=!1,m=new K,u=()=>{const n=Promise.resolve(void 0);ee=()=>{n.then(f)}};function f(){for(var n;n=W();){try{n.h.call(n.g)}catch(a){P(a)}var r=H;r.j(n),r.h<100&&(r.h++,n.next=r.g,r.g=n)}z=!1}function _(){this.u=this.u,this.C=this.C}_.prototype.u=!1,_.prototype.dispose=function(){this.u||(this.u=!0,this.N())},_.prototype[Symbol.dispose]=function(){this.dispose()},_.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function p(n,r){this.type=n,this.g=this.target=r,this.defaultPrevented=!1}p.prototype.h=function(){this.defaultPrevented=!0};var w=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var n=!1,r=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const a=()=>{};h.addEventListener("test",a,r),h.removeEventListener("test",a,r)}catch{}return n})();function d(n){return/^[\s\xa0]*$/.test(n)}function Z(n,r){p.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n&&this.init(n,r)}b(Z,p),Z.prototype.init=function(n,r){const a=this.type=n.type,l=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;this.target=n.target||n.srcElement,this.g=r,r=n.relatedTarget,r||(a=="mouseover"?r=n.fromElement:a=="mouseout"&&(r=n.toElement)),this.relatedTarget=r,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=n.pointerType,this.state=n.state,this.i=n,n.defaultPrevented&&Z.Z.h.call(this)},Z.prototype.h=function(){Z.Z.h.call(this);const n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var We="closure_listenable_"+(Math.random()*1e6|0),Yo=0;function Qo(n,r,a,l,I){this.listener=n,this.proxy=null,this.src=r,this.type=a,this.capture=!!l,this.ha=I,this.key=++Yo,this.da=this.fa=!1}function Zt(n){n.da=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function en(n,r,a){for(const l in n)r.call(a,n[l],l,n)}function Zo(n,r){for(const a in n)r.call(void 0,n[a],a,n)}function Ki(n){const r={};for(const a in n)r[a]=n[a];return r}const Ji="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xi(n,r){let a,l;for(let I=1;I<arguments.length;I++){l=arguments[I];for(a in l)n[a]=l[a];for(let E=0;E<Ji.length;E++)a=Ji[E],Object.prototype.hasOwnProperty.call(l,a)&&(n[a]=l[a])}}function tn(n){this.src=n,this.g={},this.h=0}tn.prototype.add=function(n,r,a,l,I){const E=n.toString();n=this.g[E],n||(n=this.g[E]=[],this.h++);const T=Fn(n,r,l,I);return T>-1?(r=n[T],a||(r.fa=!1)):(r=new Qo(r,this.src,E,!!l,I),r.fa=a,n.push(r)),r};function xn(n,r){const a=r.type;if(a in n.g){var l=n.g[a],I=Array.prototype.indexOf.call(l,r,void 0),E;(E=I>=0)&&Array.prototype.splice.call(l,I,1),E&&(Zt(r),n.g[a].length==0&&(delete n.g[a],n.h--))}}function Fn(n,r,a,l){for(let I=0;I<n.length;++I){const E=n[I];if(!E.da&&E.listener==r&&E.capture==!!a&&E.ha==l)return I}return-1}var Vn="closure_lm_"+(Math.random()*1e6|0),jn={};function Yi(n,r,a,l,I){if(Array.isArray(r)){for(let E=0;E<r.length;E++)Yi(n,r[E],a,l,I);return null}return a=es(a),n&&n[We]?n.J(r,a,g(l)?!!l.capture:!1,I):ea(n,r,a,!1,l,I)}function ea(n,r,a,l,I,E){if(!r)throw Error("Invalid event type");const T=g(I)?!!I.capture:!!I;let k=Hn(n);if(k||(n[Vn]=k=new tn(n)),a=k.add(r,a,l,T,E),a.proxy)return a;if(l=ta(),a.proxy=l,l.src=n,l.listener=a,n.addEventListener)w||(I=T),I===void 0&&(I=!1),n.addEventListener(r.toString(),l,I);else if(n.attachEvent)n.attachEvent(Zi(r.toString()),l);else if(n.addListener&&n.removeListener)n.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return a}function ta(){function n(a){return r.call(n.src,n.listener,a)}const r=na;return n}function Qi(n,r,a,l,I){if(Array.isArray(r))for(var E=0;E<r.length;E++)Qi(n,r[E],a,l,I);else l=g(l)?!!l.capture:!!l,a=es(a),n&&n[We]?(n=n.i,E=String(r).toString(),E in n.g&&(r=n.g[E],a=Fn(r,a,l,I),a>-1&&(Zt(r[a]),Array.prototype.splice.call(r,a,1),r.length==0&&(delete n.g[E],n.h--)))):n&&(n=Hn(n))&&(r=n.g[r.toString()],n=-1,r&&(n=Fn(r,a,l,I)),(a=n>-1?r[n]:null)&&Bn(a))}function Bn(n){if(typeof n!="number"&&n&&!n.da){var r=n.src;if(r&&r[We])xn(r.i,n);else{var a=n.type,l=n.proxy;r.removeEventListener?r.removeEventListener(a,l,n.capture):r.detachEvent?r.detachEvent(Zi(a),l):r.addListener&&r.removeListener&&r.removeListener(l),(a=Hn(r))?(xn(a,n),a.h==0&&(a.src=null,r[Vn]=null)):Zt(n)}}}function Zi(n){return n in jn?jn[n]:jn[n]="on"+n}function na(n,r){if(n.da)n=!0;else{r=new Z(r,this);const a=n.listener,l=n.ha||n.src;n.fa&&Bn(n),n=a.call(l,r)}return n}function Hn(n){return n=n[Vn],n instanceof tn?n:null}var $n="__closure_events_fn_"+(Math.random()*1e9>>>0);function es(n){return typeof n=="function"?n:(n[$n]||(n[$n]=function(r){return n.handleEvent(r)}),n[$n])}function q(){_.call(this),this.i=new tn(this),this.M=this,this.G=null}b(q,_),q.prototype[We]=!0,q.prototype.removeEventListener=function(n,r,a,l){Qi(this,n,r,a,l)};function J(n,r){var a,l=n.G;if(l)for(a=[];l;l=l.G)a.push(l);if(n=n.M,l=r.type||r,typeof r=="string")r=new p(r,n);else if(r instanceof p)r.target=r.target||n;else{var I=r;r=new p(l,n),Xi(r,I)}I=!0;let E,T;if(a)for(T=a.length-1;T>=0;T--)E=r.g=a[T],I=nn(E,l,!0,r)&&I;if(E=r.g=n,I=nn(E,l,!0,r)&&I,I=nn(E,l,!1,r)&&I,a)for(T=0;T<a.length;T++)E=r.g=a[T],I=nn(E,l,!1,r)&&I}q.prototype.N=function(){if(q.Z.N.call(this),this.i){var n=this.i;for(const r in n.g){const a=n.g[r];for(let l=0;l<a.length;l++)Zt(a[l]);delete n.g[r],n.h--}}this.G=null},q.prototype.J=function(n,r,a,l){return this.i.add(String(n),r,!1,a,l)},q.prototype.K=function(n,r,a,l){return this.i.add(String(n),r,!0,a,l)};function nn(n,r,a,l){if(r=n.i.g[String(r)],!r)return!0;r=r.concat();let I=!0;for(let E=0;E<r.length;++E){const T=r[E];if(T&&!T.da&&T.capture==a){const k=T.listener,$=T.ha||T.src;T.fa&&xn(n.i,T),I=k.call($,l)!==!1&&I}}return I&&!l.defaultPrevented}function ia(n,r){if(typeof n!="function")if(n&&typeof n.handleEvent=="function")n=v(n.handleEvent,n);else throw Error("Invalid listener argument");return Number(r)>2147483647?-1:h.setTimeout(n,r||0)}function ts(n){n.g=ia(()=>{n.g=null,n.i&&(n.i=!1,ts(n))},n.l);const r=n.h;n.h=null,n.m.apply(null,r)}class sa extends _{constructor(r,a){super(),this.m=r,this.l=a,this.h=null,this.i=!1,this.g=null}j(r){this.h=arguments,this.g?this.i=!0:ts(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function It(n){_.call(this),this.h=n,this.g={}}b(It,_);var ns=[];function is(n){en(n.g,function(r,a){this.g.hasOwnProperty(a)&&Bn(r)},n),n.g={}}It.prototype.N=function(){It.Z.N.call(this),is(this)},It.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wn=h.JSON.stringify,ra=h.JSON.parse,oa=class{stringify(n){return h.JSON.stringify(n,void 0)}parse(n){return h.JSON.parse(n,void 0)}};function ss(){}function aa(){}var wt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Gn(){p.call(this,"d")}b(Gn,p);function zn(){p.call(this,"c")}b(zn,p);var ot={},rs=null;function qn(){return rs=rs||new q}ot.Ia="serverreachability";function os(n){p.call(this,ot.Ia,n)}b(os,p);function Et(n){const r=qn();J(r,new os(r))}ot.STAT_EVENT="statevent";function as(n,r){p.call(this,ot.STAT_EVENT,n),this.stat=r}b(as,p);function X(n){const r=qn();J(r,new as(r,n))}ot.Ja="timingevent";function cs(n,r){p.call(this,ot.Ja,n),this.size=r}b(cs,p);function vt(n,r){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){n()},r)}function Tt(){this.g=!0}Tt.prototype.ua=function(){this.g=!1};function ca(n,r,a,l,I,E){n.info(function(){if(n.g)if(E){var T="",k=E.split("&");for(let x=0;x<k.length;x++){var $=k[x].split("=");if($.length>1){const G=$[0];$=$[1];const le=G.split("_");T=le.length>=2&&le[1]=="type"?T+(G+"="+$+"&"):T+(G+"=redacted&")}}}else T=null;else T=E;return"XMLHTTP REQ ("+l+") [attempt "+I+"]: "+r+`
`+a+`
`+T})}function ha(n,r,a,l,I,E,T){n.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+I+"]: "+r+`
`+a+`
`+E+" "+T})}function at(n,r,a,l){n.info(function(){return"XMLHTTP TEXT ("+r+"): "+ua(n,a)+(l?" "+l:"")})}function la(n,r){n.info(function(){return"TIMEOUT: "+r})}Tt.prototype.info=function(){};function ua(n,r){if(!n.g)return r;if(!r)return null;try{const E=JSON.parse(r);if(E){for(n=0;n<E.length;n++)if(Array.isArray(E[n])){var a=E[n];if(!(a.length<2)){var l=a[1];if(Array.isArray(l)&&!(l.length<1)){var I=l[0];if(I!="noop"&&I!="stop"&&I!="close")for(let T=1;T<l.length;T++)l[T]=""}}}}return Wn(E)}catch{return r}}var Kn={NO_ERROR:0,TIMEOUT:8},da={},hs;function Jn(){}b(Jn,ss),Jn.prototype.g=function(){return new XMLHttpRequest},hs=new Jn;function At(n){return encodeURIComponent(String(n))}function fa(n){var r=1;n=n.split(":");const a=[];for(;r>0&&n.length;)a.push(n.shift()),r--;return n.length&&a.push(n.join(":")),a}function ke(n,r,a,l){this.j=n,this.i=r,this.l=a,this.S=l||1,this.V=new It(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ls}function ls(){this.i=null,this.g="",this.h=!1}var us={},Xn={};function Yn(n,r,a){n.M=1,n.A=rn(he(r)),n.u=a,n.R=!0,ds(n,null)}function ds(n,r){n.F=Date.now(),sn(n),n.B=he(n.A);var a=n.B,l=n.S;Array.isArray(l)||(l=[String(l)]),Ss(a.i,"t",l),n.C=0,a=n.j.L,n.h=new ls,n.g=$s(n.j,a?r:null,!n.u),n.P>0&&(n.O=new sa(v(n.Y,n,n.g),n.P)),r=n.V,a=n.g,l=n.ba;var I="readystatechange";Array.isArray(I)||(I&&(ns[0]=I.toString()),I=ns);for(let E=0;E<I.length;E++){const T=Yi(a,I[E],l||r.handleEvent,!1,r.h||r);if(!T)break;r.g[T.key]=T}r=n.J?Ki(n.J):{},n.u?(n.v||(n.v="POST"),r["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.B,n.v,n.u,r)):(n.v="GET",n.g.ea(n.B,n.v,null,r)),Et(),ca(n.i,n.v,n.B,n.l,n.S,n.u)}ke.prototype.ba=function(n){n=n.target;const r=this.O;r&&Oe(n)==3?r.j():this.Y(n)},ke.prototype.Y=function(n){try{if(n==this.g)e:{const k=Oe(this.g),$=this.g.ya(),x=this.g.ca();if(!(k<3)&&(k!=3||this.g&&(this.h.h||this.g.la()||Ns(this.g)))){this.K||k!=4||$==7||($==8||x<=0?Et(3):Et(2)),Qn(this);var r=this.g.ca();this.X=r;var a=pa(this);if(this.o=r==200,ha(this.i,this.v,this.B,this.l,this.S,k,r),this.o){if(this.U&&!this.L){t:{if(this.g){var l,I=this.g;if((l=I.g?I.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!d(l)){var E=l;break t}}E=null}if(n=E)at(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Zn(this,n);else{this.o=!1,this.m=3,X(12),Ge(this),St(this);break e}}if(this.R){n=!0;let G;for(;!this.K&&this.C<a.length;)if(G=ga(this,a),G==Xn){k==4&&(this.m=4,X(14),n=!1),at(this.i,this.l,null,"[Incomplete Response]");break}else if(G==us){this.m=4,X(15),at(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}else at(this.i,this.l,G,null),Zn(this,G);if(fs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),k!=4||a.length!=0||this.h.h||(this.m=1,X(16),n=!1),this.o=this.o&&n,!n)at(this.i,this.l,a,"[Invalid Chunked Response]"),Ge(this),St(this);else if(a.length>0&&!this.W){this.W=!0;var T=this.j;T.g==this&&T.aa&&!T.P&&(T.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),ai(T),T.P=!0,X(11))}}else at(this.i,this.l,a,null),Zn(this,a);k==4&&Ge(this),this.o&&!this.K&&(k==4?Vs(this.j,this):(this.o=!1,sn(this)))}else Pa(this.g),r==400&&a.indexOf("Unknown SID")>0?(this.m=3,X(12)):(this.m=0,X(13)),Ge(this),St(this)}}}catch{}finally{}};function pa(n){if(!fs(n))return n.g.la();const r=Ns(n.g);if(r==="")return"";let a="";const l=r.length,I=Oe(n.g)==4;if(!n.h.i){if(typeof TextDecoder>"u")return Ge(n),St(n),"";n.h.i=new h.TextDecoder}for(let E=0;E<l;E++)n.h.h=!0,a+=n.h.i.decode(r[E],{stream:!(I&&E==l-1)});return r.length=0,n.h.g+=a,n.C=0,n.h.g}function fs(n){return n.g?n.v=="GET"&&n.M!=2&&n.j.Aa:!1}function ga(n,r){var a=n.C,l=r.indexOf(`
`,a);return l==-1?Xn:(a=Number(r.substring(a,l)),isNaN(a)?us:(l+=1,l+a>r.length?Xn:(r=r.slice(l,l+a),n.C=l+a,r)))}ke.prototype.cancel=function(){this.K=!0,Ge(this)};function sn(n){n.T=Date.now()+n.H,ps(n,n.H)}function ps(n,r){if(n.D!=null)throw Error("WatchDog timer not null");n.D=vt(v(n.aa,n),r)}function Qn(n){n.D&&(h.clearTimeout(n.D),n.D=null)}ke.prototype.aa=function(){this.D=null;const n=Date.now();n-this.T>=0?(la(this.i,this.B),this.M!=2&&(Et(),X(17)),Ge(this),this.m=2,St(this)):ps(this,this.T-n)};function St(n){n.j.I==0||n.K||Vs(n.j,n)}function Ge(n){Qn(n);var r=n.O;r&&typeof r.dispose=="function"&&r.dispose(),n.O=null,is(n.V),n.g&&(r=n.g,n.g=null,r.abort(),r.dispose())}function Zn(n,r){try{var a=n.j;if(a.I!=0&&(a.g==n||ei(a.h,n))){if(!n.L&&ei(a.h,n)&&a.I==3){try{var l=a.Ba.g.parse(r)}catch{l=null}if(Array.isArray(l)&&l.length==3){var I=l;if(I[0]==0){e:if(!a.v){if(a.g)if(a.g.F+3e3<n.F)ln(a),cn(a);else break e;oi(a),X(18)}}else a.xa=I[1],0<a.xa-a.K&&I[2]<37500&&a.F&&a.A==0&&!a.C&&(a.C=vt(v(a.Va,a),6e3));_s(a.h)<=1&&a.ta&&(a.ta=void 0)}else qe(a,11)}else if((n.L||a.g==n)&&ln(a),!d(r))for(I=a.Ba.g.parse(r),r=0;r<I.length;r++){let x=I[r];const G=x[0];if(!(G<=a.K))if(a.K=G,x=x[1],a.I==2)if(x[0]=="c"){a.M=x[1],a.ba=x[2];const le=x[3];le!=null&&(a.ka=le,a.j.info("VER="+a.ka));const Ke=x[4];Ke!=null&&(a.za=Ke,a.j.info("SVER="+a.za));const Ne=x[5];Ne!=null&&typeof Ne=="number"&&Ne>0&&(l=1.5*Ne,a.O=l,a.j.info("backChannelRequestTimeoutMs_="+l)),l=a;const De=n.g;if(De){const un=De.g?De.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(un){var E=l.h;E.g||un.indexOf("spdy")==-1&&un.indexOf("quic")==-1&&un.indexOf("h2")==-1||(E.j=E.l,E.g=new Set,E.h&&(ti(E,E.h),E.h=null))}if(l.G){const ci=De.g?De.g.getResponseHeader("X-HTTP-Session-Id"):null;ci&&(l.wa=ci,F(l.J,l.G,ci))}}a.I=3,a.l&&a.l.ra(),a.aa&&(a.T=Date.now()-n.F,a.j.info("Handshake RTT: "+a.T+"ms")),l=a;var T=n;if(l.na=Hs(l,l.L?l.ba:null,l.W),T.L){ys(l.h,T);var k=T,$=l.O;$&&(k.H=$),k.D&&(Qn(k),sn(k)),l.g=T}else xs(l);a.i.length>0&&hn(a)}else x[0]!="stop"&&x[0]!="close"||qe(a,7);else a.I==3&&(x[0]=="stop"||x[0]=="close"?x[0]=="stop"?qe(a,7):ri(a):x[0]!="noop"&&a.l&&a.l.qa(x),a.A=0)}}Et(4)}catch{}}var ma=class{constructor(n,r){this.g=n,this.map=r}};function gs(n){this.l=n||10,h.PerformanceNavigationTiming?(n=h.performance.getEntriesByType("navigation"),n=n.length>0&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=n?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ms(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function _s(n){return n.h?1:n.g?n.g.size:0}function ei(n,r){return n.h?n.h==r:n.g?n.g.has(r):!1}function ti(n,r){n.g?n.g.add(r):n.h=r}function ys(n,r){n.h&&n.h==r?n.h=null:n.g&&n.g.has(r)&&n.g.delete(r)}gs.prototype.cancel=function(){if(this.i=Is(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Is(n){if(n.h!=null)return n.i.concat(n.h.G);if(n.g!=null&&n.g.size!==0){let r=n.i;for(const a of n.g.values())r=r.concat(a.G);return r}return M(n.i)}var ws=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _a(n,r){if(n){n=n.split("&");for(let a=0;a<n.length;a++){const l=n[a].indexOf("=");let I,E=null;l>=0?(I=n[a].substring(0,l),E=n[a].substring(l+1)):I=n[a],r(I,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function Pe(n){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let r;n instanceof Pe?(this.l=n.l,bt(this,n.j),this.o=n.o,this.g=n.g,Rt(this,n.u),this.h=n.h,ni(this,bs(n.i)),this.m=n.m):n&&(r=String(n).match(ws))?(this.l=!1,bt(this,r[1]||"",!0),this.o=kt(r[2]||""),this.g=kt(r[3]||"",!0),Rt(this,r[4]),this.h=kt(r[5]||"",!0),ni(this,r[6]||"",!0),this.m=kt(r[7]||"")):(this.l=!1,this.i=new Ct(null,this.l))}Pe.prototype.toString=function(){const n=[];var r=this.j;r&&n.push(Pt(r,Es,!0),":");var a=this.g;return(a||r=="file")&&(n.push("//"),(r=this.o)&&n.push(Pt(r,Es,!0),"@"),n.push(At(a).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.u,a!=null&&n.push(":",String(a))),(a=this.h)&&(this.g&&a.charAt(0)!="/"&&n.push("/"),n.push(Pt(a,a.charAt(0)=="/"?wa:Ia,!0))),(a=this.i.toString())&&n.push("?",a),(a=this.m)&&n.push("#",Pt(a,va)),n.join("")},Pe.prototype.resolve=function(n){const r=he(this);let a=!!n.j;a?bt(r,n.j):a=!!n.o,a?r.o=n.o:a=!!n.g,a?r.g=n.g:a=n.u!=null;var l=n.h;if(a)Rt(r,n.u);else if(a=!!n.h){if(l.charAt(0)!="/")if(this.g&&!this.h)l="/"+l;else{var I=r.h.lastIndexOf("/");I!=-1&&(l=r.h.slice(0,I+1)+l)}if(I=l,I==".."||I==".")l="";else if(I.indexOf("./")!=-1||I.indexOf("/.")!=-1){l=I.lastIndexOf("/",0)==0,I=I.split("/");const E=[];for(let T=0;T<I.length;){const k=I[T++];k=="."?l&&T==I.length&&E.push(""):k==".."?((E.length>1||E.length==1&&E[0]!="")&&E.pop(),l&&T==I.length&&E.push("")):(E.push(k),l=!0)}l=E.join("/")}else l=I}return a?r.h=l:a=n.i.toString()!=="",a?ni(r,bs(n.i)):a=!!n.m,a&&(r.m=n.m),r};function he(n){return new Pe(n)}function bt(n,r,a){n.j=a?kt(r,!0):r,n.j&&(n.j=n.j.replace(/:$/,""))}function Rt(n,r){if(r){if(r=Number(r),isNaN(r)||r<0)throw Error("Bad port number "+r);n.u=r}else n.u=null}function ni(n,r,a){r instanceof Ct?(n.i=r,Ta(n.i,n.l)):(a||(r=Pt(r,Ea)),n.i=new Ct(r,n.l))}function F(n,r,a){n.i.set(r,a)}function rn(n){return F(n,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),n}function kt(n,r){return n?r?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Pt(n,r,a){return typeof n=="string"?(n=encodeURI(n).replace(r,ya),a&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function ya(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Es=/[#\/\?@]/g,Ia=/[#\?:]/g,wa=/[#\?]/g,Ea=/[#\?@]/g,va=/#/g;function Ct(n,r){this.h=this.g=null,this.i=n||null,this.j=!!r}function ze(n){n.g||(n.g=new Map,n.h=0,n.i&&_a(n.i,function(r,a){n.add(decodeURIComponent(r.replace(/\+/g," ")),a)}))}i=Ct.prototype,i.add=function(n,r){ze(this),this.i=null,n=ct(this,n);let a=this.g.get(n);return a||this.g.set(n,a=[]),a.push(r),this.h+=1,this};function vs(n,r){ze(n),r=ct(n,r),n.g.has(r)&&(n.i=null,n.h-=n.g.get(r).length,n.g.delete(r))}function Ts(n,r){return ze(n),r=ct(n,r),n.g.has(r)}i.forEach=function(n,r){ze(this),this.g.forEach(function(a,l){a.forEach(function(I){n.call(r,I,l,this)},this)},this)};function As(n,r){ze(n);let a=[];if(typeof r=="string")Ts(n,r)&&(a=a.concat(n.g.get(ct(n,r))));else for(n=Array.from(n.g.values()),r=0;r<n.length;r++)a=a.concat(n[r]);return a}i.set=function(n,r){return ze(this),this.i=null,n=ct(this,n),Ts(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[r]),this.h+=1,this},i.get=function(n,r){return n?(n=As(this,n),n.length>0?String(n[0]):r):r};function Ss(n,r,a){vs(n,r),a.length>0&&(n.i=null,n.g.set(ct(n,r),M(a)),n.h+=a.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],r=Array.from(this.g.keys());for(let l=0;l<r.length;l++){var a=r[l];const I=At(a);a=As(this,a);for(let E=0;E<a.length;E++){let T=I;a[E]!==""&&(T+="="+At(a[E])),n.push(T)}}return this.i=n.join("&")};function bs(n){const r=new Ct;return r.i=n.i,n.g&&(r.g=new Map(n.g),r.h=n.h),r}function ct(n,r){return r=String(r),n.j&&(r=r.toLowerCase()),r}function Ta(n,r){r&&!n.j&&(ze(n),n.i=null,n.g.forEach(function(a,l){const I=l.toLowerCase();l!=I&&(vs(this,l),Ss(this,I,a))},n)),n.j=r}function Aa(n,r){const a=new Tt;if(h.Image){const l=new Image;l.onload=S(Ce,a,"TestLoadImage: loaded",!0,r,l),l.onerror=S(Ce,a,"TestLoadImage: error",!1,r,l),l.onabort=S(Ce,a,"TestLoadImage: abort",!1,r,l),l.ontimeout=S(Ce,a,"TestLoadImage: timeout",!1,r,l),h.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=n}else r(!1)}function Sa(n,r){const a=new Tt,l=new AbortController,I=setTimeout(()=>{l.abort(),Ce(a,"TestPingServer: timeout",!1,r)},1e4);fetch(n,{signal:l.signal}).then(E=>{clearTimeout(I),E.ok?Ce(a,"TestPingServer: ok",!0,r):Ce(a,"TestPingServer: server error",!1,r)}).catch(()=>{clearTimeout(I),Ce(a,"TestPingServer: error",!1,r)})}function Ce(n,r,a,l,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),l(a)}catch{}}function ba(){this.g=new oa}function ii(n){this.i=n.Sb||null,this.h=n.ab||!1}b(ii,ss),ii.prototype.g=function(){return new on(this.i,this.h)};function on(n,r){q.call(this),this.H=n,this.o=r,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}b(on,q),i=on.prototype,i.open=function(n,r){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=n,this.D=r,this.readyState=1,Nt(this)},i.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const r={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};n&&(r.body=n),(this.H||h).fetch(new Request(this.D,r)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ot(this)),this.readyState=0},i.Pa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Nt(this)),this.g&&(this.readyState=3,Nt(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Rs(this)}else n.text().then(this.Oa.bind(this),this.ga.bind(this))};function Rs(n){n.j.read().then(n.Ma.bind(n)).catch(n.ga.bind(n))}i.Ma=function(n){if(this.g){if(this.o&&n.value)this.response.push(n.value);else if(!this.o){var r=n.value?n.value:new Uint8Array(0);(r=this.B.decode(r,{stream:!n.done}))&&(this.response=this.responseText+=r)}n.done?Ot(this):Nt(this),this.readyState==3&&Rs(this)}},i.Oa=function(n){this.g&&(this.response=this.responseText=n,Ot(this))},i.Na=function(n){this.g&&(this.response=n,Ot(this))},i.ga=function(){this.g&&Ot(this)};function Ot(n){n.readyState=4,n.l=null,n.j=null,n.B=null,Nt(n)}i.setRequestHeader=function(n,r){this.A.append(n,r)},i.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],r=this.h.entries();for(var a=r.next();!a.done;)a=a.value,n.push(a[0]+": "+a[1]),a=r.next();return n.join(`\r
`)};function Nt(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(on.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});function ks(n){let r="";return en(n,function(a,l){r+=l,r+=":",r+=a,r+=`\r
`}),r}function si(n,r,a){e:{for(l in a){var l=!1;break e}l=!0}l||(a=ks(a),typeof n=="string"?a!=null&&At(a):F(n,r,a))}function V(n){q.call(this),this.headers=new Map,this.L=n||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}b(V,q);var Ra=/^https?$/i,ka=["POST","PUT"];i=V.prototype,i.Fa=function(n){this.H=n},i.ea=function(n,r,a,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+n);r=r?r.toUpperCase():"GET",this.D=n,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():hs.g(),this.g.onreadystatechange=A(v(this.Ca,this));try{this.B=!0,this.g.open(r,String(n),!0),this.B=!1}catch(E){Ps(this,E);return}if(n=a||"",a=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var I in l)a.set(I,l[I]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const E of l.keys())a.set(E,l.get(E));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(a.keys()).find(E=>E.toLowerCase()=="content-type"),I=h.FormData&&n instanceof h.FormData,!(Array.prototype.indexOf.call(ka,r,void 0)>=0)||l||I||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[E,T]of a)this.g.setRequestHeader(E,T);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(n),this.v=!1}catch(E){Ps(this,E)}};function Ps(n,r){n.h=!1,n.g&&(n.j=!0,n.g.abort(),n.j=!1),n.l=r,n.o=5,Cs(n),an(n)}function Cs(n){n.A||(n.A=!0,J(n,"complete"),J(n,"error"))}i.abort=function(n){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=n||7,J(this,"complete"),J(this,"abort"),an(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),an(this,!0)),V.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?Os(this):this.Xa())},i.Xa=function(){Os(this)};function Os(n){if(n.h&&typeof c<"u"){if(n.v&&Oe(n)==4)setTimeout(n.Ca.bind(n),0);else if(J(n,"readystatechange"),Oe(n)==4){n.h=!1;try{const E=n.ca();e:switch(E){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}var a;if(!(a=r)){var l;if(l=E===0){let T=String(n.D).match(ws)[1]||null;!T&&h.self&&h.self.location&&(T=h.self.location.protocol.slice(0,-1)),l=!Ra.test(T?T.toLowerCase():"")}a=l}if(a)J(n,"complete"),J(n,"success");else{n.o=6;try{var I=Oe(n)>2?n.g.statusText:""}catch{I=""}n.l=I+" ["+n.ca()+"]",Cs(n)}}finally{an(n)}}}}function an(n,r){if(n.g){n.m&&(clearTimeout(n.m),n.m=null);const a=n.g;n.g=null,r||J(n,"ready");try{a.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Oe(n){return n.g?n.g.readyState:0}i.ca=function(){try{return Oe(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(n){if(this.g){var r=this.g.responseText;return n&&r.indexOf(n)==0&&(r=r.substring(n.length)),ra(r)}};function Ns(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.F){case"":case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Pa(n){const r={};n=(n.g&&Oe(n)>=2&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<n.length;l++){if(d(n[l]))continue;var a=fa(n[l]);const I=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const E=r[I]||[];r[I]=E,E.push(a)}Zo(r,function(l){return l.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Dt(n,r,a){return a&&a.internalChannelParams&&a.internalChannelParams[n]||r}function Ds(n){this.za=0,this.i=[],this.j=new Tt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Dt("failFast",!1,n),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Dt("baseRetryDelayMs",5e3,n),this.Za=Dt("retryDelaySeedMs",1e4,n),this.Ta=Dt("forwardChannelMaxRetries",2,n),this.va=Dt("forwardChannelRequestTimeoutMs",2e4,n),this.ma=n&&n.xmlHttpFactory||void 0,this.Ua=n&&n.Rb||void 0,this.Aa=n&&n.useFetchStreams||!1,this.O=void 0,this.L=n&&n.supportsCrossDomainXhr||!1,this.M="",this.h=new gs(n&&n.concurrentRequestLimit),this.Ba=new ba,this.S=n&&n.fastHandshake||!1,this.R=n&&n.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=n&&n.Pb||!1,n&&n.ua&&this.j.ua(),n&&n.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&n&&n.detectBufferingProxy||!1,this.ia=void 0,n&&n.longPollingTimeout&&n.longPollingTimeout>0&&(this.ia=n.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Ds.prototype,i.ka=8,i.I=1,i.connect=function(n,r,a,l){X(0),this.W=n,this.H=r||{},a&&l!==void 0&&(this.H.OSID=a,this.H.OAID=l),this.F=this.X,this.J=Hs(this,null,this.W),hn(this)};function ri(n){if(Ls(n),n.I==3){var r=n.V++,a=he(n.J);if(F(a,"SID",n.M),F(a,"RID",r),F(a,"TYPE","terminate"),Lt(n,a),r=new ke(n,n.j,r),r.M=2,r.A=rn(he(a)),a=!1,h.navigator&&h.navigator.sendBeacon)try{a=h.navigator.sendBeacon(r.A.toString(),"")}catch{}!a&&h.Image&&(new Image().src=r.A,a=!0),a||(r.g=$s(r.j,null),r.g.ea(r.A)),r.F=Date.now(),sn(r)}Bs(n)}function cn(n){n.g&&(ai(n),n.g.cancel(),n.g=null)}function Ls(n){cn(n),n.v&&(h.clearTimeout(n.v),n.v=null),ln(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&h.clearTimeout(n.m),n.m=null)}function hn(n){if(!ms(n.h)&&!n.m){n.m=!0;var r=n.Ea;ee||u(),z||(ee(),z=!0),m.add(r,n),n.D=0}}function Ca(n,r){return _s(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=r.G.concat(n.i),!0):n.I==1||n.I==2||n.D>=(n.Sa?0:n.Ta)?!1:(n.m=vt(v(n.Ea,n,r),js(n,n.D)),n.D++,!0)}i.Ea=function(n){if(this.m)if(this.m=null,this.I==1){if(!n){this.V=Math.floor(Math.random()*1e5),n=this.V++;const I=new ke(this,this.j,n);let E=this.o;if(this.U&&(E?(E=Ki(E),Xi(E,this.U)):E=this.U),this.u!==null||this.R||(I.J=E,E=null),this.S)e:{for(var r=0,a=0;a<this.i.length;a++){t:{var l=this.i[a];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break t}l=void 0}if(l===void 0)break;if(r+=l,r>4096){r=a;break e}if(r===4096||a===this.i.length-1){r=a+1;break e}}r=1e3}else r=1e3;r=Us(this,I,r),a=he(this.J),F(a,"RID",n),F(a,"CVER",22),this.G&&F(a,"X-HTTP-Session-Id",this.G),Lt(this,a),E&&(this.R?r="headers="+At(ks(E))+"&"+r:this.u&&si(a,this.u,E)),ti(this.h,I),this.Ra&&F(a,"TYPE","init"),this.S?(F(a,"$req",r),F(a,"SID","null"),I.U=!0,Yn(I,a,null)):Yn(I,a,r),this.I=2}}else this.I==3&&(n?Ms(this,n):this.i.length==0||ms(this.h)||Ms(this))};function Ms(n,r){var a;r?a=r.l:a=n.V++;const l=he(n.J);F(l,"SID",n.M),F(l,"RID",a),F(l,"AID",n.K),Lt(n,l),n.u&&n.o&&si(l,n.u,n.o),a=new ke(n,n.j,a,n.D+1),n.u===null&&(a.J=n.o),r&&(n.i=r.G.concat(n.i)),r=Us(n,a,1e3),a.H=Math.round(n.va*.5)+Math.round(n.va*.5*Math.random()),ti(n.h,a),Yn(a,l,r)}function Lt(n,r){n.H&&en(n.H,function(a,l){F(r,l,a)}),n.l&&en({},function(a,l){F(r,l,a)})}function Us(n,r,a){a=Math.min(n.i.length,a);const l=n.l?v(n.l.Ka,n.l,n):null;e:{var I=n.i;let k=-1;for(;;){const $=["count="+a];k==-1?a>0?(k=I[0].g,$.push("ofs="+k)):k=0:$.push("ofs="+k);let x=!0;for(let G=0;G<a;G++){var E=I[G].g;const le=I[G].map;if(E-=k,E<0)k=Math.max(0,I[G].g-100),x=!1;else try{E="req"+E+"_"||"";try{var T=le instanceof Map?le:Object.entries(le);for(const[Ke,Ne]of T){let De=Ne;g(Ne)&&(De=Wn(Ne)),$.push(E+Ke+"="+encodeURIComponent(De))}}catch(Ke){throw $.push(E+"type="+encodeURIComponent("_badmap")),Ke}}catch{l&&l(le)}}if(x){T=$.join("&");break e}}T=void 0}return n=n.i.splice(0,a),r.G=n,T}function xs(n){if(!n.g&&!n.v){n.Y=1;var r=n.Da;ee||u(),z||(ee(),z=!0),m.add(r,n),n.A=0}}function oi(n){return n.g||n.v||n.A>=3?!1:(n.Y++,n.v=vt(v(n.Da,n),js(n,n.A)),n.A++,!0)}i.Da=function(){if(this.v=null,Fs(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var n=4*this.T;this.j.info("BP detection timer enabled: "+n),this.B=vt(v(this.Wa,this),n)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,X(10),cn(this),Fs(this))};function ai(n){n.B!=null&&(h.clearTimeout(n.B),n.B=null)}function Fs(n){n.g=new ke(n,n.j,"rpc",n.Y),n.u===null&&(n.g.J=n.o),n.g.P=0;var r=he(n.na);F(r,"RID","rpc"),F(r,"SID",n.M),F(r,"AID",n.K),F(r,"CI",n.F?"0":"1"),!n.F&&n.ia&&F(r,"TO",n.ia),F(r,"TYPE","xmlhttp"),Lt(n,r),n.u&&n.o&&si(r,n.u,n.o),n.O&&(n.g.H=n.O);var a=n.g;n=n.ba,a.M=1,a.A=rn(he(r)),a.u=null,a.R=!0,ds(a,n)}i.Va=function(){this.C!=null&&(this.C=null,cn(this),oi(this),X(19))};function ln(n){n.C!=null&&(h.clearTimeout(n.C),n.C=null)}function Vs(n,r){var a=null;if(n.g==r){ln(n),ai(n),n.g=null;var l=2}else if(ei(n.h,r))a=r.G,ys(n.h,r),l=1;else return;if(n.I!=0){if(r.o)if(l==1){a=r.u?r.u.length:0,r=Date.now()-r.F;var I=n.D;l=qn(),J(l,new cs(l,a)),hn(n)}else xs(n);else if(I=r.m,I==3||I==0&&r.X>0||!(l==1&&Ca(n,r)||l==2&&oi(n)))switch(a&&a.length>0&&(r=n.h,r.i=r.i.concat(a)),I){case 1:qe(n,5);break;case 4:qe(n,10);break;case 3:qe(n,6);break;default:qe(n,2)}}}function js(n,r){let a=n.Qa+Math.floor(Math.random()*n.Za);return n.isActive()||(a*=2),a*r}function qe(n,r){if(n.j.info("Error code "+r),r==2){var a=v(n.bb,n),l=n.Ua;const I=!l;l=new Pe(l||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||bt(l,"https"),rn(l),I?Aa(l.toString(),a):Sa(l.toString(),a)}else X(2);n.I=0,n.l&&n.l.pa(r),Bs(n),Ls(n)}i.bb=function(n){n?(this.j.info("Successfully pinged google.com"),X(2)):(this.j.info("Failed to ping google.com"),X(1))};function Bs(n){if(n.I=0,n.ja=[],n.l){const r=Is(n.h);(r.length!=0||n.i.length!=0)&&(D(n.ja,r),D(n.ja,n.i),n.h.i.length=0,M(n.i),n.i.length=0),n.l.oa()}}function Hs(n,r,a){var l=a instanceof Pe?he(a):new Pe(a);if(l.g!="")r&&(l.g=r+"."+l.g),Rt(l,l.u);else{var I=h.location;l=I.protocol,r=r?r+"."+I.hostname:I.hostname,I=+I.port;const E=new Pe(null);l&&bt(E,l),r&&(E.g=r),I&&Rt(E,I),a&&(E.h=a),l=E}return a=n.G,r=n.wa,a&&r&&F(l,a,r),F(l,"VER",n.ka),Lt(n,l),l}function $s(n,r,a){if(r&&!n.L)throw Error("Can't create secondary domain capable XhrIo object.");return r=n.Aa&&!n.ma?new V(new ii({ab:a})):new V(n.ma),r.Fa(n.L),r}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ws(){}i=Ws.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function ne(n,r){q.call(this),this.g=new Ds(r),this.l=n,this.h=r&&r.messageUrlParams||null,n=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.o=n,n=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(n?n["X-WebChannel-Content-Type"]=r.messageContentType:n={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.sa&&(n?n["X-WebChannel-Client-Profile"]=r.sa:n={"X-WebChannel-Client-Profile":r.sa}),this.g.U=n,(n=r&&r.Qb)&&!d(n)&&(this.g.u=n),this.A=r&&r.supportsCrossDomainXhr||!1,this.v=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!d(r)&&(this.g.G=r,n=this.h,n!==null&&r in n&&(n=this.h,r in n&&delete n[r])),this.j=new ht(this)}b(ne,q),ne.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ne.prototype.close=function(){ri(this.g)},ne.prototype.o=function(n){var r=this.g;if(typeof n=="string"){var a={};a.__data__=n,n=a}else this.v&&(a={},a.__data__=Wn(n),n=a);r.i.push(new ma(r.Ya++,n)),r.I==3&&hn(r)},ne.prototype.N=function(){this.g.l=null,delete this.j,ri(this.g),delete this.g,ne.Z.N.call(this)};function Gs(n){Gn.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var r=n.__sm__;if(r){e:{for(const a in r){n=a;break e}n=void 0}(this.i=n)&&(n=this.i,r=r!==null&&n in r?r[n]:void 0),this.data=r}else this.data=n}b(Gs,Gn);function zs(){zn.call(this),this.status=1}b(zs,zn);function ht(n){this.g=n}b(ht,Ws),ht.prototype.ra=function(){J(this.g,"a")},ht.prototype.qa=function(n){J(this.g,new Gs(n))},ht.prototype.pa=function(n){J(this.g,new zs)},ht.prototype.oa=function(){J(this.g,"b")},ne.prototype.send=ne.prototype.o,ne.prototype.open=ne.prototype.m,ne.prototype.close=ne.prototype.close,Kn.NO_ERROR=0,Kn.TIMEOUT=8,Kn.HTTP_ERROR=6,da.COMPLETE="complete",aa.EventType=wt,wt.OPEN="a",wt.CLOSE="b",wt.ERROR="c",wt.MESSAGE="d",q.prototype.listen=q.prototype.J,V.prototype.listenOnce=V.prototype.K,V.prototype.getLastError=V.prototype.Ha,V.prototype.getLastErrorCode=V.prototype.ya,V.prototype.getStatus=V.prototype.ca,V.prototype.getResponseJson=V.prototype.La,V.prototype.getResponseText=V.prototype.la,V.prototype.send=V.prototype.ea,V.prototype.setWithCredentials=V.prototype.Fa}).apply(typeof dn<"u"?dn:typeof self<"u"?self:typeof window<"u"?window:{});const rr="@firebase/firestore",or="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Y.UNAUTHENTICATED=new Y(null),Y.GOOGLE_CREDENTIALS=new Y("google-credentials-uid"),Y.FIRST_PARTY=new Y("first-party-uid"),Y.MOCK_USER=new Y("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qt="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=new Oi("@firebase/firestore");function re(i,...e){if(gt.logLevel<=L.DEBUG){const t=e.map(Mi);gt.debug(`Firestore (${qt}): ${i}`,...t)}}function so(i,...e){if(gt.logLevel<=L.ERROR){const t=e.map(Mi);gt.error(`Firestore (${qt}): ${i}`,...t)}}function dh(i,...e){if(gt.logLevel<=L.WARN){const t=e.map(Mi);gt.warn(`Firestore (${qt}): ${i}`,...t)}}function Mi(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,ro(i,s,t)}function ro(i,e,t){let s=`FIRESTORE (${qt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw so(s),new Error(s)}function Ft(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||ro(e,o,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class N extends ye{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Y.UNAUTHENTICATED)))}shutdown(){}}class ph{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class gh{constructor(e){this.t=e,this.currentUser=Y.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ft(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let c=new Vt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Vt,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=c;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},g=y=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>g(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?g(y):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Vt)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ft(typeof s.accessToken=="string",31837,{l:s}),new oo(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ft(e===null||typeof e=="string",2055,{h:e}),new Y(e)}}class mh{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Y.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class _h{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new mh(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Y.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ar{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yh{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,te(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ft(this.o===void 0,3512);const s=c=>{c.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>s(c)))};const o=c=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>o(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ar(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ft(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ar(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=Ih(40);for(let c=0;c<o.length;++c)s.length<20&&o[c]<t&&(s+=e.charAt(o[c]%62))}return s}}function He(i,e){return i<e?-1:i>e?1:0}function Eh(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),c=e.charAt(s);if(o!==c)return pi(o)===pi(c)?He(o,c):pi(o)?1:-1}return He(i.length,e.length)}const vh=55296,Th=57343;function pi(i){const e=i.charCodeAt(0);return e>=vh&&e<=Th}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="__name__";class ue{constructor(e,t,s){t===void 0?t=0:t>e.length&&$t(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&$t(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ue.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ue?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const c=ue.compareSegments(e.get(o),t.get(o));if(c!==0)return c}return He(e.length,t.length)}static compareSegments(e,t){const s=ue.isNumericId(e),o=ue.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?ue.extractNumericId(e).compare(ue.extractNumericId(t)):Eh(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Li.fromString(e.substring(4,e.length-2))}}class se extends ue{construct(e,t,s){return new se(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new N(O.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new se(t)}static emptyPath(){return new se([])}}const Ah=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends ue{construct(e,t,s){return new Xe(e,t,s)}static isValidIdentifier(e){return Ah.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cr}static keyField(){return new Xe([cr])}static fromServerFormat(e){const t=[];let s="",o=0;const c=()=>{if(s.length===0)throw new N(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const g=e[o];if(g==="\\"){if(o+1===e.length)throw new N(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new N(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else g==="`"?(h=!h,o++):g!=="."||h?(s+=g,o++):(c(),o++)}if(c(),h)throw new N(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(t)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.path=e}static fromPath(e){return new Ye(se.fromString(e))}static fromName(e){return new Ye(se.fromString(e).popFirst(5))}static empty(){return new Ye(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ye(new se(e.slice()))}}function Sh(i,e,t,s){if(e===!0&&s===!0)throw new N(O.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function bh(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Rh(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":$t(12329,{type:typeof i})}function kh(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new N(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Rh(i);throw new N(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function B(i,e){const t={typeString:i};return e&&(t.value=e),t}function Kt(i,e){if(!bh(i))throw new N(O.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,c="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(c!==void 0&&h!==c.value){t=`Expected '${s}' field to equal '${c.value}'`;break}}if(t)throw new N(O.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=-62135596800,lr=1e6;class de{static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*lr);return new de(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<hr)throw new N(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/lr}_compareTo(e){return this.seconds===e.seconds?He(this.nanoseconds,e.nanoseconds):He(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:de._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Kt(e,de._jsonSchema))return new de(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hr;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}de._jsonSchemaVersion="firestore/timestamp/1.0",de._jsonSchema={type:B("string",de._jsonSchemaVersion),seconds:B("number"),nanoseconds:B("number")};function Ph(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Ch extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new Ch("Invalid base64 string: "+c):c}})(e);return new nt(t)}static fromUint8Array(e){const t=(function(o){let c="";for(let h=0;h<o.length;++h)c+=String.fromCharCode(o[h]);return c})(e);return new nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return He(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const Ai="(default)";class Tn{constructor(e,t){this.projectId=e,this.database=t||Ai}static empty(){return new Tn("","")}get isDefaultDatabase(){return this.database===Ai}isEqual(e){return e instanceof Tn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,t=null,s=[],o=[],c=null,h="F",g=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=c,this.limitType=h,this.startAt=g,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Nh(i){return new Oh(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ur,C;(C=ur||(ur={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Li([4294967295,4294967295],0);/**
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
 */const Dh=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=1048576;function gi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,t,s=1e3,o=1.5,c=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t,s,o,c){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=c,this.deferred=new Vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,c){const h=Date.now()+s,g=new Ui(e,t,h,o,c);return g.start(s),g}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var dr,fr;(fr=dr||(dr={})).Ma="default",fr.Cache="cache";/**
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
 */function Uh(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="firestore.googleapis.com",gr=!0;class mr{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new N(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ao,this.ssl=gr}else this.host=e.host,this.ssl=e.ssl??gr;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Dh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Lh)throw new N(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Sh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uh(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new N(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new N(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new N(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class co{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mr(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new fh;switch(s.type){case"firstParty":return new _h(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new N(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=pr.get(t);s&&(re("ComponentProvider","Removing Datastore"),pr.delete(t),s.terminate())})(this),Promise.resolve()}}function xh(i,e,t,s={}){i=kh(i,co);const o=_t(e),c=i._getSettings(),h={...c,emulatorOptions:i._getEmulatorOptions()},g=`${e}:${t}`;o&&(Pi(`https://${g}`),Ci("Firestore",!0)),c.host!==ao&&c.host!==g&&dh("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...c,host:g,ssl:o,emulatorOptions:s};if(!et(y,h)&&(i._setSettings(y),s.mockUserToken)){let v,S;if(typeof s.mockUserToken=="string")v=s.mockUserToken,S=Y.MOCK_USER;else{v=Qr(s.mockUserToken,i._app?.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new N(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new Y(b)}i._authCredentials=new ph(new oo(v,S))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new xi(this.firestore,e,this._query)}}class fe{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fe(this.firestore,e,this._key)}toJSON(){return{type:fe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Kt(t,fe._jsonSchema))return new fe(e,s||null,new Ye(se.fromString(t.referencePath)))}}fe._jsonSchemaVersion="firestore/documentReference/1.0",fe._jsonSchema={type:B("string",fe._jsonSchemaVersion),referencePath:B("string")};class Fi extends xi{constructor(e,t,s){super(e,t,Nh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fe(this.firestore,null,new Ye(e))}withConverter(e){return new Fi(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="AsyncQueue";class yr{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Mh(this,"async_queue_retry"),this._c=()=>{const s=gi();s&&re(_r,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=gi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=gi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Vt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ph(e))throw e;re(_r,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,so("INTERNAL UNHANDLED ERROR: ",Ir(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Ui.createAndSchedule(this,e,t,s,(c=>this.hc(c)));return this.tc.push(o),o}uc(){this.nc&&$t(47125,{Pc:Ir(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Ir(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Fh extends co{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new yr,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yr(e),this._firestoreClient=void 0,await e}}}function Vh(i,e){const t=typeof i=="object"?i:Di(),s=typeof i=="string"?i:Ai,o=Dn(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const c=Jr("firestore");c&&xh(o,...c)}return o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ee(nt.fromBase64String(e))}catch(t){throw new N(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ee(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ee._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Kt(e,Ee._jsonSchema))return Ee.fromBase64String(e.bytes)}}Ee._jsonSchemaVersion="firestore/bytes/1.0",Ee._jsonSchema={type:B("string",Ee._jsonSchemaVersion),bytes:B("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return He(this._lat,e._lat)||He(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Qe._jsonSchemaVersion}}static fromJSON(e){if(Kt(e,Qe._jsonSchema))return new Qe(e.latitude,e.longitude)}}Qe._jsonSchemaVersion="firestore/geoPoint/1.0",Qe._jsonSchema={type:B("string",Qe._jsonSchemaVersion),latitude:B("number"),longitude:B("number")};/**
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
 */class Ze{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==o[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ze._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Kt(e,Ze._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ze(e.vectorValues);throw new N(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ze._jsonSchemaVersion="firestore/vectorValue/1.0",Ze._jsonSchema={type:B("string",Ze._jsonSchemaVersion),vectorValues:B("object")};const jh=new RegExp("[~\\*/\\[\\]]");function Bh(i,e,t){if(e.search(jh)>=0)throw wr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new ho(...e.split("."))._internalPath}catch{throw wr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function wr(i,e,t,s,o){let c=`Function ${e}() called with invalid data`;c+=". ";let h="";return new N(O.INVALID_ARGUMENT,c+i+h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t,s,o,c){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Hh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(uo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Hh extends lo{data(){return super.data()}}function uo(i,e){return typeof e=="string"?Bh(i,e):e instanceof ho?e._internalPath:e._delegate._internalPath}class fn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ut extends lo{constructor(e,t,s,o,c,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(uo("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ut._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ut._jsonSchemaVersion="firestore/documentSnapshot/1.0",ut._jsonSchema={type:B("string",ut._jsonSchemaVersion),bundleSource:B("string","DocumentSnapshot"),bundleName:B("string"),bundle:B("string")};class mn extends ut{data(e={}){return super.data(e)}}class jt{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new fn(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new mn(this._firestore,this._userDataWriter,s.key,s,new fn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,c){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((g=>{const y=new mn(o._firestore,o._userDataWriter,g.doc.key,g.doc,new fn(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);return g.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((g=>c||g.type!==3)).map((g=>{const y=new mn(o._firestore,o._userDataWriter,g.doc.key,g.doc,new fn(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,S=-1;return g.type!==0&&(v=h.indexOf(g.doc.key),h=h.delete(g.doc.key)),g.type!==1&&(h=h.add(g.doc),S=h.indexOf(g.doc.key)),{type:$h(g.type),doc:y,oldIndex:v,newIndex:S}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=jt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=wh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((c=>{c._document!==null&&(t.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $h(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $t(61501,{type:i})}}jt._jsonSchemaVersion="firestore/querySnapshot/1.0",jt._jsonSchema={type:B("string",jt._jsonSchemaVersion),bundleSource:B("string","QuerySnapshot"),bundleName:B("string"),bundle:B("string")};(function(e,t=!0){(function(o){qt=o})(rt),tt(new Be("firestore",((s,{instanceIdentifier:o,options:c})=>{const h=s.getProvider("app").getImmediate(),g=new Fh(new gh(s.getProvider("auth-internal")),new yh(h,s.getProvider("app-check-internal")),(function(v,S){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new N(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tn(v.options.projectId,S)})(h,o),h);return c={useFetchStreams:t,...c},g._setSettings(c),g}),"PUBLIC").setMultipleInstances(!0)),pe(rr,or,e),pe(rr,or,"esm2020")})();function fo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wh=fo,po=new Gt("auth","Firebase",fo());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new Oi("@firebase/auth");function Gh(i,...e){An.logLevel<=L.WARN&&An.warn(`Auth (${rt}): ${i}`,...e)}function _n(i,...e){An.logLevel<=L.ERROR&&An.error(`Auth (${rt}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(i,...e){throw Vi(i,...e)}function ge(i,...e){return Vi(i,...e)}function go(i,e,t){const s={...Wh(),[e]:t};return new Gt("auth","Firebase",s).create(e,{appName:i.name})}function Ae(i){return go(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vi(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return po.create(i,...e)}function R(i,e,...t){if(!i)throw Vi(e,...t)}function ve(i){const e="INTERNAL ASSERTION FAILED: "+i;throw _n(e),new Error(e)}function be(i,e){i||ve(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(){return typeof self<"u"&&self.location?.href||""}function zh(){return Er()==="http:"||Er()==="https:"}function Er(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zh()||Wa()||"connection"in navigator)?navigator.onLine:!0}function Kh(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t){this.shortDelay=e,this.longDelay=t,be(t>e,"Short delay should be less than long delay!"),this.isMobile=Ha()||Ga()}get(){return qh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(i,e){be(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Yh=new Jt(3e4,6e4);function Re(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Ie(i,e,t,s,o={}){return _o(i,o,async()=>{let c={},h={};s&&(e==="GET"?h=s:c={body:JSON.stringify(s)});const g=zt({key:i.config.apiKey,...h}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v={method:e,headers:y,...c};return $a()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&_t(i.emulatorConfig.host)&&(v.credentials="include"),mo.fetch()(await yo(i,i.config.apiHost,t,g),v)})}async function _o(i,e,t){i._canInitEmulator=!1;const s={...Jh,...e};try{const o=new Zh(i),c=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw pn(i,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const g=c.ok?h.errorMessage:h.error.message,[y,v]=g.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw pn(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw pn(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw pn(i,"user-disabled",h);const S=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw go(i,S,v);ce(i,S)}}catch(o){if(o instanceof ye)throw o;ce(i,"network-request-failed",{message:String(o)})}}async function Xt(i,e,t,s,o={}){const c=await Ie(i,e,t,s,o);return"mfaPendingCredential"in c&&ce(i,"multi-factor-auth-required",{_serverResponse:c}),c}async function yo(i,e,t,s){const o=`${e}${t}?${s}`,c=i,h=c.config.emulator?ji(i.config,o):`${i.config.apiScheme}://${o}`;return Xh.includes(t)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}function Qh(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Zh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ge(this.auth,"network-request-failed")),Yh.get())})}}function pn(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=ge(i,e,s);return o.customData._tokenResponse=t,o}function vr(i){return i!==void 0&&i.enterprise!==void 0}class el{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Qh(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function tl(i,e){return Ie(i,"GET","/v2/recaptchaConfig",Re(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(i,e){return Ie(i,"POST","/v1/accounts:delete",e)}async function Sn(i,e){return Ie(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function il(i,e=!1){const t=ie(i),s=await t.getIdToken(e),o=Bi(s);R(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c?.sign_in_provider;return{claims:o,token:s,authTime:Bt(mi(o.auth_time)),issuedAtTime:Bt(mi(o.iat)),expirationTime:Bt(mi(o.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function mi(i){return Number(i)*1e3}function Bi(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return _n("JWT malformed, contained fewer than 3 sections"),null;try{const o=qr(t);return o?JSON.parse(o):(_n("Failed to decode base64 JWT payload"),null)}catch(o){return _n("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Tr(i){const e=Bi(i);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ye&&sl(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function sl({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bt(this.lastLoginAt),this.creationTime=Bt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bn(i){const e=i.auth,t=await i.getIdToken(),s=await mt(i,Sn(e,{idToken:t}));R(s?.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const c=o.providerUserInfo?.length?Io(o.providerUserInfo):[],h=al(i.providerData,c),g=i.isAnonymous,y=!(i.email&&o.passwordHash)&&!h?.length,v=g?y:!1,S={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new bi(o.createdAt,o.lastLoginAt),isAnonymous:v};Object.assign(i,S)}async function ol(i){const e=ie(i);await bn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function al(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Io(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cl(i,e){const t=await _o(i,{},async()=>{const s=zt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=i.config,h=await yo(i,o,"/v1/token",`key=${c}`),g=await i._getAdditionalHeaders();g["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:g,body:s};return i.emulatorConfig&&_t(i.emulatorConfig.host)&&(y.credentials="include"),mo.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hl(i,e){return Ie(i,"POST","/v2/accounts:revokeToken",Re(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){R(e.length!==0,"internal-error");const t=Tr(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(R(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:c}=await cl(e,t);this.updateTokensAndExpiration(s,o,Number(c))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:c}=t,h=new dt;return s&&(R(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(R(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),c&&(R(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dt,this.toJSON())}_performRefresh(){return ve("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(i,e){R(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class oe{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new rl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new bi(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await mt(this,this.stsTokenManager.getToken(this.auth,e));return R(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return il(this,e)}reload(){return ol(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new oe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await bn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(te(this.auth.app))return Promise.reject(Ae(this.auth));const e=await this.getIdToken();return await mt(this,nl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,c=t.phoneNumber??void 0,h=t.photoURL??void 0,g=t.tenantId??void 0,y=t._redirectEventId??void 0,v=t.createdAt??void 0,S=t.lastLoginAt??void 0,{uid:b,emailVerified:A,isAnonymous:M,providerData:D,stsTokenManager:U}=t;R(b&&U,e,"internal-error");const P=dt.fromJSON(this.name,U);R(typeof b=="string",e,"internal-error"),Le(s,e.name),Le(o,e.name),R(typeof A=="boolean",e,"internal-error"),R(typeof M=="boolean",e,"internal-error"),Le(c,e.name),Le(h,e.name),Le(g,e.name),Le(y,e.name),Le(v,e.name),Le(S,e.name);const W=new oe({uid:b,auth:e,email:o,emailVerified:A,displayName:s,isAnonymous:M,photoURL:h,phoneNumber:c,tenantId:g,stsTokenManager:P,createdAt:v,lastLoginAt:S});return D&&Array.isArray(D)&&(W.providerData=D.map(K=>({...K}))),y&&(W._redirectEventId=y),W}static async _fromIdTokenResponse(e,t,s=!1){const o=new dt;o.updateFromServerResponse(t);const c=new oe({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await bn(c),c}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];R(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Io(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!c?.length,g=new dt;g.updateFromIdToken(s);const y=new oe({uid:o.localId,auth:e,stsTokenManager:g,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new bi(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!c?.length};return Object.assign(y,v),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Map;function Te(i){be(i instanceof Function,"Expected a class definition");let e=Ar.get(i);return e?(be(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Ar.set(i,e),e)}/**
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
 */class wo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}wo.type="NONE";const Sr=wo;/**
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
 */function yn(i,e,t){return`firebase:${i}:${e}:${t}`}class ft{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:c}=this.auth;this.fullUserKey=yn(this.userKey,o.apiKey,c),this.fullPersistenceKey=yn("persistence",o.apiKey,c),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Sn(this.auth,{idToken:e}).catch(()=>{});return t?oe._fromGetAccountInfoResponse(this.auth,t,e):null}return oe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ft(Te(Sr),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let c=o[0]||Te(Sr);const h=yn(s,e.config.apiKey,e.name);let g=null;for(const v of t)try{const S=await v._get(h);if(S){let b;if(typeof S=="string"){const A=await Sn(e,{idToken:S}).catch(()=>{});if(!A)break;b=await oe._fromGetAccountInfoResponse(e,A,S)}else b=oe._fromJSON(e,S);v!==c&&(g=b),c=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!c._shouldAllowMigration||!y.length?new ft(c,e,s):(c=y[0],g&&await c._set(h,g.toJSON()),await Promise.all(t.map(async v=>{if(v!==c)try{await v._remove(h)}catch{}})),new ft(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ao(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Eo(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bo(e))return"Blackberry";if(Ro(e))return"Webos";if(vo(e))return"Safari";if((e.includes("chrome/")||To(e))&&!e.includes("edge/"))return"Chrome";if(So(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if(s?.length===2)return s[1]}return"Other"}function Eo(i=Q()){return/firefox\//i.test(i)}function vo(i=Q()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function To(i=Q()){return/crios\//i.test(i)}function Ao(i=Q()){return/iemobile/i.test(i)}function So(i=Q()){return/android/i.test(i)}function bo(i=Q()){return/blackberry/i.test(i)}function Ro(i=Q()){return/webos/i.test(i)}function Hi(i=Q()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function ll(i=Q()){return Hi(i)&&!!window.navigator?.standalone}function ul(){return za()&&document.documentMode===10}function ko(i=Q()){return Hi(i)||So(i)||Ro(i)||bo(i)||/windows phone/i.test(i)||Ao(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(i,e=[]){let t;switch(i){case"Browser":t=br(Q());break;case"Worker":t=`${br(Q())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${rt}/${s}`}/**
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
 */class dl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=c=>new Promise((h,g)=>{try{const y=e(c);h(y)}catch(y){g(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function fl(i,e={}){return Ie(i,"GET","/v2/passwordPolicy",Re(i,e))}/**
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
 */const pl=6;class gl{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??pl,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rr(this),this.idTokenSubscription=new Rr(this),this.beforeStateQueue=new dl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=po,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Te(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ft.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Sn(this,{idToken:e}),s=await oe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(te(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,h=s?._redirectEventId,g=await this.tryRedirectSignIn(e);(!c||c===h)&&g?.user&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bn(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(te(this.app))return Promise.reject(Ae(this));const t=e?ie(e):null;return t&&R(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return te(this.app)?Promise.reject(Ae(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return te(this.app)?Promise.reject(Ae(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Te(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fl(this),t=new gl(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Gt("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await hl(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Te(e)||this._popupRedirectResolver;R(t,this,"argument-error"),this.redirectPersistenceManager=await ft.create(this,[Te(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const c=typeof t=="function"?t:t.next.bind(t);let h=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(g,this,"internal-error"),g.then(()=>{h||c(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Po(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(te(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Gh(`Error while retrieving App Check token: ${e.error}`),e?.token}}function $e(i){return ie(i)}class Rr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Za(t=>this.observer=t)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _l(i){Ln=i}function Co(i){return Ln.loadJS(i)}function yl(){return Ln.recaptchaEnterpriseScript}function Il(){return Ln.gapiScript}function wl(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class El{constructor(){this.enterprise=new vl}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class vl{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Tl="recaptcha-enterprise",Oo="NO_RECAPTCHA";class Al{constructor(e){this.type=Tl,this.auth=$e(e)}async verify(e="verify",t=!1){async function s(c){if(!t){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(h,g)=>{tl(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)g(new Error("recaptcha Enterprise site key undefined"));else{const v=new el(y);return c.tenantId==null?c._agentRecaptchaConfig=v:c._tenantRecaptchaConfigs[c.tenantId]=v,h(v.siteKey)}}).catch(y=>{g(y)})})}function o(c,h,g){const y=window.grecaptcha;vr(y)?y.enterprise.ready(()=>{y.enterprise.execute(c,{action:e}).then(v=>{h(v)}).catch(()=>{h(Oo)})}):g(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new El().execute("siteKey",{action:"verify"}):new Promise((c,h)=>{s(this.auth).then(g=>{if(!t&&vr(window.grecaptcha))o(g,c,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let y=yl();y.length!==0&&(y+=g),Co(y).then(()=>{o(g,c,h)}).catch(v=>{h(v)})}}).catch(g=>{h(g)})})}}async function kr(i,e,t,s=!1,o=!1){const c=new Al(i);let h;if(o)h=Oo;else try{h=await c.verify(t)}catch{h=await c.verify(t,!0)}const g={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in g){const y=g.phoneEnrollmentInfo.phoneNumber,v=g.phoneEnrollmentInfo.recaptchaToken;Object.assign(g,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in g){const y=g.phoneSignInInfo.recaptchaToken;Object.assign(g,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return g}return s?Object.assign(g,{captchaResp:h}):Object.assign(g,{captchaResponse:h}),Object.assign(g,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(g,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),g}async function Rn(i,e,t,s,o){if(i._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await kr(i,e,t,t==="getOobCode");return s(i,c)}else return s(i,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await kr(i,e,t,t==="getOobCode");return s(i,h)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(i,e){const t=Dn(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),c=t.getOptions();if(et(c,e??{}))return o;ce(o,"already-initialized")}return t.initialize({options:e})}function bl(i,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Te);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function Rl(i,e,t){const s=$e(i);R(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,c=No(e),{host:h,port:g}=kl(e),y=g===null?"":`:${g}`,v={url:`${c}//${h}${y}/`},S=Object.freeze({host:h,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){R(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),R(et(v,s.config.emulator)&&et(S,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=S,s.settings.appVerificationDisabledForTesting=!0,_t(h)?(Pi(`${c}//${h}${y}`),Ci("Auth",!0)):Pl()}function No(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function kl(i){const e=No(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const c=o[1];return{host:c,port:Pr(s.substr(c.length+1))}}else{const[c,h]=s.split(":");return{host:c,port:Pr(h)}}}function Pr(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Pl(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ve("not implemented")}_getIdTokenResponse(e){return ve("not implemented")}_linkToIdToken(e,t){return ve("not implemented")}_getReauthenticationResolver(e){return ve("not implemented")}}async function Cl(i,e){return Ie(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ol(i,e){return Xt(i,"POST","/v1/accounts:signInWithPassword",Re(i,e))}async function Do(i,e){return Ie(i,"POST","/v1/accounts:sendOobCode",Re(i,e))}async function Nl(i,e){return Do(i,e)}async function Dl(i,e){return Do(i,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ll(i,e){return Xt(i,"POST","/v1/accounts:signInWithEmailLink",Re(i,e))}async function Ml(i,e){return Xt(i,"POST","/v1/accounts:signInWithEmailLink",Re(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends $i{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Wt(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Wt(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rn(e,t,"signInWithPassword",Ol);case"emailLink":return Ll(e,{email:this._email,oobCode:this._password});default:ce(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rn(e,s,"signUpPassword",Cl);case"emailLink":return Ml(e,{idToken:t,email:this._email,oobCode:this._password});default:ce(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pt(i,e){return Xt(i,"POST","/v1/accounts:signInWithIdp",Re(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="http://localhost";class it extends $i{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new it(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ce("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...c}=t;if(!s||!o)return null;const h=new it(s,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return pt(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,pt(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pt(e,t)}buildRequest(){const e={requestUri:Ul,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Fl(i){const e=Mt(Ut(i)).link,t=e?Mt(Ut(e)).deep_link_id:null,s=Mt(Ut(i)).deep_link_id;return(s?Mt(Ut(s)).link:null)||s||t||e||i}class Wi{constructor(e){const t=Mt(Ut(e)),s=t.apiKey??null,o=t.oobCode??null,c=xl(t.mode??null);R(s&&o&&c,"argument-error"),this.apiKey=s,this.operation=c,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Fl(e);try{return new Wi(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(){this.providerId=yt.PROVIDER_ID}static credential(e,t){return Wt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Wi.parseLink(t);return R(s,"argument-error"),Wt._fromEmailAndCode(e,s.code,s.tenantId)}}yt.PROVIDER_ID="password";yt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yt extends Lo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends Yt{constructor(){super("facebook.com")}static credential(e){return it._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Me.credential(e.oauthAccessToken)}catch{return null}}}Me.FACEBOOK_SIGN_IN_METHOD="facebook.com";Me.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Yt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return it._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ue.credential(t,s)}catch{return null}}}Ue.GOOGLE_SIGN_IN_METHOD="google.com";Ue.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends Yt{constructor(){super("github.com")}static credential(e){return it._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xe.credentialFromTaggedObject(e)}static credentialFromError(e){return xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xe.credential(e.oauthAccessToken)}catch{return null}}}xe.GITHUB_SIGN_IN_METHOD="github.com";xe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends Yt{constructor(){super("twitter.com")}static credential(e,t){return it._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Fe.credential(t,s)}catch{return null}}}Fe.TWITTER_SIGN_IN_METHOD="twitter.com";Fe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vl(i,e){return Xt(i,"POST","/v1/accounts:signUp",Re(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const c=await oe._fromIdTokenResponse(e,s,o),h=Cr(s);return new st({user:c,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Cr(s);return new st({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Cr(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends ye{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,kn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new kn(e,t,s,o)}}function Mo(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?kn._fromErrorAndOperation(i,c,e,s):c})}async function jl(i,e,t=!1){const s=await mt(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return st._forOperation(i,"link",s)}/**
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
 */async function Bl(i,e,t=!1){const{auth:s}=i;if(te(s.app))return Promise.reject(Ae(s));const o="reauthenticate";try{const c=await mt(i,Mo(s,o,e,i),t);R(c.idToken,s,"internal-error");const h=Bi(c.idToken);R(h,s,"internal-error");const{sub:g}=h;return R(i.uid===g,s,"user-mismatch"),st._forOperation(i,o,c)}catch(c){throw c?.code==="auth/user-not-found"&&ce(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(i,e,t=!1){if(te(i.app))return Promise.reject(Ae(i));const s="signIn",o=await Mo(i,s,e),c=await st._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(c.user),c}async function Hl(i,e){return Uo($e(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(i,e,t){R(t.url?.length>0,i,"invalid-continue-uri"),R(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),R(typeof t.linkDomain>"u"||t.linkDomain.length>0,i,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(R(t.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(R(t.android.packageName.length>0,i,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(i){const e=$e(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Md(i,e,t){const s=$e(i);await Rn(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Dl)}async function Ud(i,e,t){if(te(i.app))return Promise.reject(Ae(i));const s=$e(i),h=await Rn(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Vl).catch(y=>{throw y.code==="auth/password-does-not-meet-requirements"&&xo(i),y}),g=await st._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(g.user),g}function xd(i,e,t){return te(i.app)?Promise.reject(Ae(i)):Hl(ie(i),yt.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&xo(i),s})}async function Fd(i,e){const t=ie(i),o={requestType:"VERIFY_EMAIL",idToken:await i.getIdToken()};e&&$l(t.auth,o,e);const{email:c}=await Nl(t.auth,o);c!==i.email&&await i.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wl(i,e){return Ie(i,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vd(i,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=ie(i),c={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await mt(s,Wl(s.auth,c));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const g=s.providerData.find(({providerId:y})=>y==="password");g&&(g.displayName=s.displayName,g.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function Gl(i,e,t,s){return ie(i).onIdTokenChanged(e,t,s)}function zl(i,e,t){return ie(i).beforeAuthStateChanged(e,t)}function jd(i,e,t,s){return ie(i).onAuthStateChanged(e,t,s)}function Bd(i){return ie(i).signOut()}const Pn="__sak";/**
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
 */class Fo{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Pn,"1"),this.storage.removeItem(Pn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=1e3,Kl=10;class Vo extends Fo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ko(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,g,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},c=this.storage.getItem(s);ul()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Kl):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},ql)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vo.type="LOCAL";const Jl=Vo;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends Fo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jo.type="SESSION";const Bo=jo;/**
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
 */function Xl(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Mn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Mn(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:c}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const g=Array.from(h).map(async v=>v(t.origin,c)),y=await Xl(g);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class Yl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((g,y)=>{const v=Gi("",20);o.port1.start();const S=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(b){const A=b;if(A.data.eventId===v)switch(A.data.status){case"ack":clearTimeout(S),c=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(A.data.response);break;default:clearTimeout(S),clearTimeout(c),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return window}function Ql(i){me().location.href=i}/**
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
 */function Ho(){return typeof me().WorkerGlobalScope<"u"&&typeof me().importScripts=="function"}async function Zl(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eu(){return navigator?.serviceWorker?.controller||null}function tu(){return Ho()?self:null}/**
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
 */const $o="firebaseLocalStorageDb",nu=1,Cn="firebaseLocalStorage",Wo="fbase_key";class Qt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Un(i,e){return i.transaction([Cn],e?"readwrite":"readonly").objectStore(Cn)}function iu(){const i=indexedDB.deleteDatabase($o);return new Qt(i).toPromise()}function Ri(){const i=indexedDB.open($o,nu);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Cn,{keyPath:Wo})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Cn)?e(s):(s.close(),await iu(),e(await Ri()))})})}async function Or(i,e,t){const s=Un(i,!0).put({[Wo]:e,value:t});return new Qt(s).toPromise()}async function su(i,e){const t=Un(i,!1).get(e),s=await new Qt(t).toPromise();return s===void 0?null:s.value}function Nr(i,e){const t=Un(i,!0).delete(e);return new Qt(t).toPromise()}const ru=800,ou=3;class Go{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ri(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>ou)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ho()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mn._getInstance(tu()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Zl(),!this.activeServiceWorker)return;this.sender=new Yl(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ri();return await Or(e,Pn,"1"),await Nr(e,Pn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Or(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>su(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Nr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=Un(o,!1).getAll();return new Qt(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ru)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Go.type="LOCAL";const au=Go;new Jt(3e4,6e4);/**
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
 */function cu(i,e){return e?Te(e):(R(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class zi extends $i{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hu(i){return Uo(i.auth,new zi(i),i.bypassAuthState)}function lu(i){const{auth:e,user:t}=i;return R(t,e,"internal-error"),Bl(t,new zi(i),i.bypassAuthState)}async function uu(i){const{auth:e,user:t}=i;return R(t,e,"internal-error"),jl(t,new zi(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t,s,o,c=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:c,error:h,type:g}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hu;case"linkViaPopup":case"linkViaRedirect":return uu;case"reauthViaPopup":case"reauthViaRedirect":return lu;default:ce(this.auth,"internal-error")}}resolve(e){be(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){be(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du=new Jt(2e3,1e4);class lt extends zo{constructor(e,t,s,o,c){super(e,t,o,c),this.provider=s,this.authWindow=null,this.pollId=null,lt.currentPopupAction&&lt.currentPopupAction.cancel(),lt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){be(this.filter.length===1,"Popup operations only handle one event");const e=Gi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lt.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,du.get())};e()}}lt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu="pendingRedirect",In=new Map;class pu extends zo{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=In.get(this.auth._key());if(!e){try{const s=await gu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}In.set(this.auth._key(),e)}return this.bypassAuthState||In.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gu(i,e){const t=yu(e),s=_u(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function mu(i,e){In.set(i._key(),e)}function _u(i){return Te(i._redirectPersistence)}function yu(i){return yn(fu,i.config.apiKey,i.name)}async function Iu(i,e,t=!1){if(te(i.app))return Promise.reject(Ae(i));const s=$e(i),o=cu(s,e),h=await new pu(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=600*1e3;class Eu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vu(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!qo(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ge(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wu&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dr(e))}saveEventToCache(e){this.cachedEventUids.add(Dr(e)),this.lastProcessedEventTime=Date.now()}}function Dr(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function qo({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function vu(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qo(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tu(i,e={}){return Ie(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Su=/^https?/;async function bu(i){if(i.config.emulator)return;const{authorizedDomains:e}=await Tu(i);for(const t of e)try{if(Ru(t))return}catch{}ce(i,"unauthorized-domain")}function Ru(i){const e=Si(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!Su.test(t))return!1;if(Au.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const ku=new Jt(3e4,6e4);function Lr(){const i=me().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function Pu(i){return new Promise((e,t)=>{function s(){Lr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lr(),t(ge(i,"network-request-failed"))},timeout:ku.get()})}if(me().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(me().gapi?.load)s();else{const o=wl("iframefcb");return me()[o]=()=>{gapi.load?s():t(ge(i,"network-request-failed"))},Co(`${Il()}?onload=${o}`).catch(c=>t(c))}}).catch(e=>{throw wn=null,e})}let wn=null;function Cu(i){return wn=wn||Pu(i),wn}/**
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
 */const Ou=new Jt(5e3,15e3),Nu="__/auth/iframe",Du="emulator/auth/iframe",Lu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Uu(i){const e=i.config;R(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?ji(e,Du):`https://${i.config.authDomain}/${Nu}`,s={apiKey:e.apiKey,appName:i.name,v:rt},o=Mu.get(i.config.apiHost);o&&(s.eid=o);const c=i._getFrameworks();return c.length&&(s.fw=c.join(",")),`${t}?${zt(s).slice(1)}`}async function xu(i){const e=await Cu(i),t=me().gapi;return R(t,i,"internal-error"),e.open({where:document.body,url:Uu(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lu,dontclear:!0},s=>new Promise(async(o,c)=>{await s.restyle({setHideOnLeave:!1});const h=ge(i,"network-request-failed"),g=me().setTimeout(()=>{c(h)},Ou.get());function y(){me().clearTimeout(g),o(s)}s.ping(y).then(y,()=>{c(h)})}))}/**
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
 */const Fu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vu=500,ju=600,Bu="_blank",Hu="http://localhost";class Mr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $u(i,e,t,s=Vu,o=ju){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const y={...Fu,width:s.toString(),height:o.toString(),top:c,left:h},v=Q().toLowerCase();t&&(g=To(v)?Bu:t),Eo(v)&&(e=e||Hu,y.scrollbars="yes");const S=Object.entries(y).reduce((A,[M,D])=>`${A}${M}=${D},`,"");if(ll(v)&&g!=="_self")return Wu(e||"",g),new Mr(null);const b=window.open(e||"",g,S);R(b,i,"popup-blocked");try{b.focus()}catch{}return new Mr(b)}function Wu(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const Gu="__/auth/handler",zu="emulator/auth/handler",qu=encodeURIComponent("fac");async function Ur(i,e,t,s,o,c){R(i.config.authDomain,i,"auth-domain-config-required"),R(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:rt,eventId:o};if(e instanceof Lo){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Qa(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[S,b]of Object.entries({}))h[S]=b}if(e instanceof Yt){const S=e.getScopes().filter(b=>b!=="");S.length>0&&(h.scopes=S.join(","))}i.tenantId&&(h.tid=i.tenantId);const g=h;for(const S of Object.keys(g))g[S]===void 0&&delete g[S];const y=await i._getAppCheckToken(),v=y?`#${qu}=${encodeURIComponent(y)}`:"";return`${Ku(i)}?${zt(g).slice(1)}${v}`}function Ku({config:i}){return i.emulator?ji(i,zu):`https://${i.authDomain}/${Gu}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i="webStorageSupport";class Ju{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bo,this._completeRedirectFn=Iu,this._overrideRedirectResult=mu}async _openPopup(e,t,s,o){be(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await Ur(e,t,s,Si(),o);return $u(e,c,Gi())}async _openRedirect(e,t,s,o){await this._originValidation(e);const c=await Ur(e,t,s,Si(),o);return Ql(c),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:c}=this.eventManagers[t];return o?Promise.resolve(o):(be(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await xu(e),s=new Eu(e);return t.register("authEvent",o=>(R(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_i,{type:_i},o=>{const c=o?.[0]?.[_i];c!==void 0&&t(!!c),ce(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bu(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ko()||vo()||Hi()}}const Xu=Ju;var xr="@firebase/auth",Fr="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Zu(i){tt(new Be("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:g}=s.options;R(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:g,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Po(i)},v=new ml(s,o,c,y);return bl(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),tt(new Be("auth-internal",e=>{const t=$e(e.getProvider("auth").getImmediate());return(s=>new Yu(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pe(xr,Fr,Qu(i)),pe(xr,Fr,"esm2020")}/**
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
 */const ed=300,td=Yr("authIdTokenMaxAge")||ed;let Vr=null;const nd=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>td)return;const o=t?.token;Vr!==o&&(Vr=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function id(i=Di()){const e=Dn(i,"auth");if(e.isInitialized())return e.getImmediate();const t=Sl(i,{popupRedirectResolver:Xu,persistence:[au,Jl,Bo]}),s=Yr("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const h=nd(c.toString());zl(t,h,()=>h(t.currentUser)),Gl(t,g=>h(g))}}const o=Kr("auth");return o&&Rl(t,`http://${o}`),t}function sd(){return document.getElementsByTagName("head")?.[0]??document}_l({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const c=ge("internal-error");c.customData=o,t(c)},s.type="text/javascript",s.charset="UTF-8",sd().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Zu("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="firebasestorage.googleapis.com",rd="storageBucket",od=120*1e3,ad=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends ye{constructor(e,t,s=0){super(yi(e),`Firebase Storage: ${t} (${yi(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,we.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yi(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _e;(function(i){i.UNKNOWN="unknown",i.OBJECT_NOT_FOUND="object-not-found",i.BUCKET_NOT_FOUND="bucket-not-found",i.PROJECT_NOT_FOUND="project-not-found",i.QUOTA_EXCEEDED="quota-exceeded",i.UNAUTHENTICATED="unauthenticated",i.UNAUTHORIZED="unauthorized",i.UNAUTHORIZED_APP="unauthorized-app",i.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",i.INVALID_CHECKSUM="invalid-checksum",i.CANCELED="canceled",i.INVALID_EVENT_NAME="invalid-event-name",i.INVALID_URL="invalid-url",i.INVALID_DEFAULT_BUCKET="invalid-default-bucket",i.NO_DEFAULT_BUCKET="no-default-bucket",i.CANNOT_SLICE_BLOB="cannot-slice-blob",i.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",i.NO_DOWNLOAD_URL="no-download-url",i.INVALID_ARGUMENT="invalid-argument",i.INVALID_ARGUMENT_COUNT="invalid-argument-count",i.APP_DELETED="app-deleted",i.INVALID_ROOT_OPERATION="invalid-root-operation",i.INVALID_FORMAT="invalid-format",i.INTERNAL_ERROR="internal-error",i.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_e||(_e={}));function yi(i){return"storage/"+i}function cd(){const i="An unknown error occurred, please check the error payload for server response.";return new we(_e.UNKNOWN,i)}function hd(){return new we(_e.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ld(){return new we(_e.CANCELED,"User canceled the upload/download.")}function ud(i){return new we(_e.INVALID_URL,"Invalid URL '"+i+"'.")}function dd(i){return new we(_e.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.")}function jr(i){return new we(_e.INVALID_ARGUMENT,i)}function Jo(){return new we(_e.APP_DELETED,"The Firebase app was deleted.")}function fd(i){return new we(_e.INVALID_ROOT_OPERATION,"The operation '"+i+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=ae.makeFromUrl(e,t)}catch{return new ae(e,"")}if(s.path==="")return s;throw dd(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function c(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const h="(/(.*))?$",g=new RegExp("^gs://"+o+h,"i"),y={bucket:1,path:3};function v(j){j.path_=decodeURIComponent(j.path)}const S="v[A-Za-z0-9_]+",b=t.replace(/[.]/g,"\\."),A="(/([^?#]*).*)?$",M=new RegExp(`^https?://${b}/${S}/b/${o}/o${A}`,"i"),D={bucket:1,path:3},U=t===Ko?"(?:storage.googleapis.com|storage.cloud.google.com)":t,P="([^?#]*)",W=new RegExp(`^https?://${U}/${o}/${P}`,"i"),H=[{regex:g,indices:y,postModify:c},{regex:M,indices:D,postModify:v},{regex:W,indices:{bucket:1,path:2},postModify:v}];for(let j=0;j<H.length;j++){const ee=H[j],z=ee.regex.exec(e);if(z){const m=z[ee.indices.bucket];let u=z[ee.indices.path];u||(u=""),s=new ae(m,u),ee.postModify(s);break}}if(s==null)throw ud(e);return s}}class pd{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(i,e,t){let s=1,o=null,c=null,h=!1,g=0;function y(){return g===2}let v=!1;function S(...P){v||(v=!0,e.apply(null,P))}function b(P){o=setTimeout(()=>{o=null,i(M,y())},P)}function A(){c&&clearTimeout(c)}function M(P,...W){if(v){A();return}if(P){A(),S.call(null,P,...W);return}if(y()||h){A(),S.call(null,P,...W);return}s<64&&(s*=2);let H;g===1?(g=2,H=0):H=(s+Math.random())*1e3,b(H)}let D=!1;function U(P){D||(D=!0,A(),!v&&(o!==null?(P||(g=2),clearTimeout(o),b(0)):P||(g=1)))}return b(0),c=setTimeout(()=>{h=!0,U(!0)},t),U}function md(i){i(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(i){return i!==void 0}function Br(i,e,t,s){if(s<e)throw jr(`Invalid value for '${i}'. Expected ${e} or greater.`);if(s>t)throw jr(`Invalid value for '${i}'. Expected ${t} or less.`)}function yd(i){const e=encodeURIComponent;let t="?";for(const s in i)if(i.hasOwnProperty(s)){const o=e(s)+"="+e(i[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var On;(function(i){i[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT"})(On||(On={}));/**
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
 */function Id(i,e){const t=i>=500&&i<600,o=[408,429].indexOf(i)!==-1,c=e.indexOf(i)!==-1;return t||o||c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,t,s,o,c,h,g,y,v,S,b,A=!0,M=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=c,this.additionalRetryCodes_=h,this.callback_=g,this.errorCallback_=y,this.timeout_=v,this.progressCallback_=S,this.connectionFactory_=b,this.retry=A,this.isUsingEmulator=M,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,U)=>{this.resolve_=D,this.reject_=U,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new gn(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const h=g=>{const y=g.loaded,v=g.lengthComputable?g.total:-1;this.progressCallback_!==null&&this.progressCallback_(y,v)};this.progressCallback_!==null&&c.addUploadProgressListener(h),c.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(h),this.pendingConnection_=null;const g=c.getErrorCode()===On.NO_ERROR,y=c.getStatus();if(!g||Id(y,this.additionalRetryCodes_)&&this.retry){const S=c.getErrorCode()===On.ABORT;s(!1,new gn(!1,null,S));return}const v=this.successCodes_.indexOf(y)!==-1;s(!0,new gn(v,c))})},t=(s,o)=>{const c=this.resolve_,h=this.reject_,g=o.connection;if(o.wasSuccessCode)try{const y=this.callback_(g,g.getResponse());_d(y)?c(y):c()}catch(y){h(y)}else if(g!==null){const y=cd();y.serverResponse=g.getErrorText(),this.errorCallback_?h(this.errorCallback_(g,y)):h(y)}else if(o.canceled){const y=this.appDelete_?Jo():ld();h(y)}else{const y=hd();h(y)}};this.canceled_?t(!1,new gn(!1,null,!0)):this.backoffId_=gd(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&md(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gn{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function Ed(i,e){e!==null&&e.length>0&&(i.Authorization="Firebase "+e)}function vd(i,e){i["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Td(i,e){e&&(i["X-Firebase-GMPID"]=e)}function Ad(i,e){e!==null&&(i["X-Firebase-AppCheck"]=e)}function Sd(i,e,t,s,o,c,h=!0,g=!1){const y=yd(i.urlParams),v=i.url+y,S=Object.assign({},i.headers);return Td(S,e),Ed(S,t),vd(S,c),Ad(S,s),new wd(v,i.method,S,i.body,i.successCodes,i.additionalRetryCodes,i.handler,i.errorHandler,i.timeout,i.progressCallback,o,h,g)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(i){if(i.length===0)return null;const e=i.lastIndexOf("/");return e===-1?"":i.slice(0,e)}function Rd(i){const e=i.lastIndexOf("/",i.length-2);return e===-1?i:i.slice(e+1)}/**
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
 */class Nn{constructor(e,t){this._service=e,t instanceof ae?this._location=t:this._location=ae.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Nn(e,t)}get root(){const e=new ae(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Rd(this._location.path)}get storage(){return this._service}get parent(){const e=bd(this._location.path);if(e===null)return null;const t=new ae(this._location.bucket,e);return new Nn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw fd(e)}}function Hr(i,e){const t=e?.[rd];return t==null?null:ae.makeFromBucketSpec(t,i)}function kd(i,e,t,s={}){i.host=`${e}:${t}`;const o=_t(e);o&&(Pi(`https://${i.host}/b`),Ci("Storage",!0)),i._isUsingEmulator=!0,i._protocol=o?"https":"http";const{mockUserToken:c}=s;c&&(i._overrideAuthToken=typeof c=="string"?c:Qr(c,i.app.options.projectId))}class Pd{constructor(e,t,s,o,c,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=c,this._isUsingEmulator=h,this._bucket=null,this._host=Ko,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=od,this._maxUploadRetryTime=ad,this._requests=new Set,o!=null?this._bucket=ae.makeFromBucketSpec(o,this._host):this._bucket=Hr(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ae.makeFromBucketSpec(this._url,e):this._bucket=Hr(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Br("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Br("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(te(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Nn(this,e)}_makeRequest(e,t,s,o,c=!0){if(this._deleted)return new pd(Jo());{const h=Sd(e,this._appId,s,o,t,this._firebaseVersion,c,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const $r="@firebase/storage",Wr="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="storage";function Cd(i=Di(),e){i=ie(i);const s=Dn(i,Xo).getImmediate({identifier:e}),o=Jr("storage");return o&&Od(s,...o),s}function Od(i,e,t,s={}){kd(i,e,t,s)}function Nd(i,{instanceIdentifier:e}){const t=i.getProvider("app").getImmediate(),s=i.getProvider("auth-internal"),o=i.getProvider("app-check-internal");return new Pd(t,s,o,e,rt)}function Dd(){tt(new Be(Xo,Nd,"PUBLIC").setMultipleInstances(!0)),pe($r,Wr,""),pe($r,Wr,"esm2020")}Dd();const Ld={apiKey:"AIzaSyC0qVQm59S1_OFJcYLr2ILyGB9m-SoxHro",authDomain:"holysmokas-4ef36.firebaseapp.com",projectId:"holysmokas-4ef36",storageBucket:"holysmokas-4ef36.firebasestorage.app",messagingSenderId:"236391401471",appId:"1:236391401471:web:16780dc40257205caf09ca",measurementId:"G-LRKVZGKNLD"},qi=to(Ld);Vh(qi);const Hd=id(qi);Cd(qi);export{Hd as a,Bd as b,Ud as c,Fd as d,Md as e,jd as o,xd as s,Vd as u};
