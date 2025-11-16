(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const Oa=()=>{};var Js={};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Gr=function(i){const t=[];let e=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?t[e++]=o:o<2048?(t[e++]=o>>6|192,t[e++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),t[e++]=o>>18|240,t[e++]=o>>12&63|128,t[e++]=o>>6&63|128,t[e++]=o&63|128):(t[e++]=o>>12|224,t[e++]=o>>6&63|128,t[e++]=o&63|128)}return t},Da=function(i){const t=[];let e=0,s=0;for(;e<i.length;){const o=i[e++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const c=i[e++];t[s++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=i[e++],h=i[e++],m=i[e++],_=((o&7)<<18|(c&63)<<12|(h&63)<<6|m&63)-65536;t[s++]=String.fromCharCode(55296+(_>>10)),t[s++]=String.fromCharCode(56320+(_&1023))}else{const c=i[e++],h=i[e++];t[s++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return t.join("")},Kr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const c=i[o],h=o+1<i.length,m=h?i[o+1]:0,_=o+2<i.length,b=_?i[o+2]:0,S=c>>2,E=(c&3)<<4|m>>4;let R=(m&15)<<2|b>>6,U=b&63;_||(U=64,h||(R=64)),s.push(e[S],e[E],e[R],e[U])}return s.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(Gr(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):Da(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const c=e[i.charAt(o++)],h=o<i.length?e[i.charAt(o)]:0;++o;const m=o<i.length?e[i.charAt(o)]:64;++o;const _=o<i.length?e[i.charAt(o)]:64;if(++o,c==null||h==null||m==null||_==null)throw new La;const b=c<<2|h>>4;if(s.push(b),m!==64){const S=h<<4&240|m>>2;if(s.push(S),_!==64){const E=m<<6&192|_;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class La extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ma=function(i){const t=Gr(i);return Kr.encodeByteArray(t,!0)},bi=function(i){return Ma(i).replace(/\./g,"")},Jr=function(i){try{return Kr.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
*/function Ua(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
*/const xa=()=>Ua().__FIREBASE_DEFAULTS__,ja=()=>{if(typeof process>"u"||typeof Js>"u")return;const i=Js.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Fa=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&Jr(i[1]);return t&&JSON.parse(t)},Rn=()=>{try{return Oa()||xa()||ja()||Fa()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Xr=i=>Rn()?.emulatorHosts?.[i],Yr=i=>{const t=Xr(i);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},Zr=()=>Rn()?.config,Qr=i=>Rn()?.[`_${i}`];/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Va{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}/**
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
*/function we(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Pn(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
*/function to(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",o=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...i};return[bi(JSON.stringify(e)),bi(JSON.stringify(h)),""].join(".")}const je={};function Ba(){const i={prod:[],emulator:[]};for(const t of Object.keys(je))je[t]?i.emulator.push(t):i.prod.push(t);return i}function Ha(i){let t=document.getElementById(i),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",i),e=!0),{created:e,element:t}}let Xs=!1;function Nn(i,t){if(typeof window>"u"||typeof document>"u"||!we(window.location.host)||je[i]===t||je[i]||Xs)return;je[i]=t;function e(E){return`__firebase__banner__${E}`}const s="__firebase__banner",o=Ba().prod.length>0;function c(){const E=document.getElementById(s);E&&E.remove()}function h(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function m(E,R){E.setAttribute("width","24"),E.setAttribute("id",R),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function _(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{Xs=!0,c()},E}function b(E,R){E.setAttribute("id",R),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function S(){const E=Ha(s),R=e("text"),U=document.getElementById(R)||document.createElement("span"),L=e("learnmore"),M=document.getElementById(L)||document.createElement("a"),C=e("preprendIcon"),B=document.getElementById(C)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const $=E.element;h($),b(M,L);const F=_();m(B,C),$.append(B,U,M,F),document.body.appendChild($)}o?(U.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
*/function X(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $a(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(X())}function Wa(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function za(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function qa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ga(){const i=X();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Ka(){try{return typeof indexedDB=="object"}catch{return!1}}function Ja(){return new Promise((i,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),e||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{e=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(e){t(e)}})}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Xa="FirebaseError";class wt extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=Xa,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qe.prototype.create)}}class qe{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},o=`${this.service}/${t}`,c=this.errors[t],h=c?Ya(c,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new wt(o,m,s)}}function Ya(i,t){return i.replace(Za,(e,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const Za=/\{\$([^}]+)}/g;function Qa(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}function te(i,t){if(i===t)return!0;const e=Object.keys(i),s=Object.keys(t);for(const o of e){if(!s.includes(o))return!1;const c=i[o],h=t[o];if(Ys(c)&&Ys(h)){if(!te(c,h))return!1}else if(c!==h)return!1}for(const o of s)if(!e.includes(o))return!1;return!0}function Ys(i){return i!==null&&typeof i=="object"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ge(i){const t=[];for(const[e,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Ue(i){const t={};return i.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[s,o]=e.split("=");t[decodeURIComponent(s)]=decodeURIComponent(o)}}),t}function xe(i){const t=i.indexOf("?");if(!t)return"";const e=i.indexOf("#",t);return i.substring(t,e>0?e:void 0)}function tc(i,t){const e=new ec(i,t);return e.subscribe.bind(e)}class ec{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,s){let o;if(t===void 0&&e===void 0&&s===void 0)throw new Error("Missing Observer.");ic(t,["next","error","complete"])?o=t:o={next:t,error:e,complete:s},o.next===void 0&&(o.next=ln),o.error===void 0&&(o.error=ln),o.complete===void 0&&(o.complete=ln);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ic(i,t){if(typeof i!="object"||i===null)return!1;for(const e of t)if(e in i&&typeof i[e]=="function")return!0;return!1}function ln(){}/**
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
*/function nt(i){return i&&i._delegate?i._delegate:i}class Ht{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
*/const Jt="[DEFAULT]";/**
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
*/class nc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new Va;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:e});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),s=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(rc(t))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(e);try{const c=this.getOrInitializeService({instanceIdentifier:o});s.resolve(c)}catch{}}}}clearInstance(t=Jt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Jt){return this.instances.has(t)}getOptions(t=Jt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[c,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);s===m&&h.resolve(o)}return o}onInit(t,e){const s=this.normalizeInstanceIdentifier(e),o=this.onInitCallbacks.get(s)??new Set;o.add(t),this.onInitCallbacks.set(s,o);const c=this.instances.get(s);return c&&t(c,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const o of s)try{o(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:sc(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Jt){return this.component?this.component.multipleInstances?t:Jt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sc(i){return i===Jt?void 0:i}function rc(i){return i.instantiationMode==="EAGER"}/**
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
*/class oc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new nc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(D||(D={}));const ac={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},cc=D.INFO,hc={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},lc=(i,t,...e)=>{if(t<i.logLevel)return;const s=new Date().toISOString(),o=hc[t];if(o)console[o](`[${s}]  ${i.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class On{constructor(t){this.name=t,this._logLevel=cc,this._logHandler=lc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in D))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ac[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...t),this._logHandler(this,D.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...t),this._logHandler(this,D.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,D.INFO,...t),this._logHandler(this,D.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,D.WARN,...t),this._logHandler(this,D.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...t),this._logHandler(this,D.ERROR,...t)}}const uc=(i,t)=>t.some(e=>i instanceof e);let Zs,Qs;function dc(){return Zs||(Zs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fc(){return Qs||(Qs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eo=new WeakMap,vn=new WeakMap,io=new WeakMap,un=new WeakMap,Dn=new WeakMap;function pc(i){const t=new Promise((e,s)=>{const o=()=>{i.removeEventListener("success",c),i.removeEventListener("error",h)},c=()=>{e(Vt(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",c),i.addEventListener("error",h)});return t.then(e=>{e instanceof IDBCursor&&eo.set(e,i)}).catch(()=>{}),Dn.set(t,i),t}function gc(i){if(vn.has(i))return;const t=new Promise((e,s)=>{const o=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",h),i.removeEventListener("abort",h)},c=()=>{e(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",c),i.addEventListener("error",h),i.addEventListener("abort",h)});vn.set(i,t)}let In={get(i,t,e){if(i instanceof IDBTransaction){if(t==="done")return vn.get(i);if(t==="objectStoreNames")return i.objectStoreNames||io.get(i);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Vt(i[t])},set(i,t,e){return i[t]=e,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function mc(i){In=i(In)}function yc(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=i.call(dn(this),t,...e);return io.set(s,t.sort?t.sort():[t]),Vt(s)}:fc().includes(i)?function(...t){return i.apply(dn(this),t),Vt(eo.get(this))}:function(...t){return Vt(i.apply(dn(this),t))}}function _c(i){return typeof i=="function"?yc(i):(i instanceof IDBTransaction&&gc(i),uc(i,dc())?new Proxy(i,In):i)}function Vt(i){if(i instanceof IDBRequest)return pc(i);if(un.has(i))return un.get(i);const t=_c(i);return t!==i&&(un.set(i,t),Dn.set(t,i)),t}const dn=i=>Dn.get(i);function wc(i,t,{blocked:e,upgrade:s,blocking:o,terminated:c}={}){const h=indexedDB.open(i,t),m=Vt(h);return s&&h.addEventListener("upgradeneeded",_=>{s(Vt(h.result),_.oldVersion,_.newVersion,Vt(h.transaction),_)}),e&&h.addEventListener("blocked",_=>e(_.oldVersion,_.newVersion,_)),m.then(_=>{c&&_.addEventListener("close",()=>c()),o&&_.addEventListener("versionchange",b=>o(b.oldVersion,b.newVersion,b))}).catch(()=>{}),m}const vc=["get","getKey","getAll","getAllKeys","count"],Ic=["put","add","delete","clear"],fn=new Map;function tr(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(fn.get(t))return fn.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,o=Ic.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(o||vc.includes(e)))return;const c=async function(h,...m){const _=this.transaction(h,o?"readwrite":"readonly");let b=_.store;return s&&(b=b.index(m.shift())),(await Promise.all([b[e](...m),o&&_.done]))[0]};return fn.set(t,c),c}mc(i=>({...i,get:(t,e,s)=>tr(t,e)||i.get(t,e,s),has:(t,e)=>!!tr(t,e)||i.has(t,e)}));/**
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
*/class bc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ec(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}else return null}).filter(t=>t).join(" ")}}function Ec(i){return i.getComponent()?.type==="VERSION"}const bn="@firebase/app",er="0.14.4";/**
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
*/const kt=new On("@firebase/app"),Tc="@firebase/app-compat",Sc="@firebase/analytics-compat",kc="@firebase/analytics",Ac="@firebase/app-check-compat",Cc="@firebase/app-check",Rc="@firebase/auth",Pc="@firebase/auth-compat",Nc="@firebase/database",Oc="@firebase/data-connect",Dc="@firebase/database-compat",Lc="@firebase/functions",Mc="@firebase/functions-compat",Uc="@firebase/installations",xc="@firebase/installations-compat",jc="@firebase/messaging",Fc="@firebase/messaging-compat",Vc="@firebase/performance",Bc="@firebase/performance-compat",Hc="@firebase/remote-config",$c="@firebase/remote-config-compat",Wc="@firebase/storage",zc="@firebase/storage-compat",qc="@firebase/firestore",Gc="@firebase/ai",Kc="@firebase/firestore-compat",Jc="firebase",Xc="12.4.0";/**
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
*/const En="[DEFAULT]",Yc={[bn]:"fire-core",[Tc]:"fire-core-compat",[kc]:"fire-analytics",[Sc]:"fire-analytics-compat",[Cc]:"fire-app-check",[Ac]:"fire-app-check-compat",[Rc]:"fire-auth",[Pc]:"fire-auth-compat",[Nc]:"fire-rtdb",[Oc]:"fire-data-connect",[Dc]:"fire-rtdb-compat",[Lc]:"fire-fn",[Mc]:"fire-fn-compat",[Uc]:"fire-iid",[xc]:"fire-iid-compat",[jc]:"fire-fcm",[Fc]:"fire-fcm-compat",[Vc]:"fire-perf",[Bc]:"fire-perf-compat",[Hc]:"fire-rc",[$c]:"fire-rc-compat",[Wc]:"fire-gcs",[zc]:"fire-gcs-compat",[qc]:"fire-fst",[Kc]:"fire-fst-compat",[Gc]:"fire-vertex","fire-js":"fire-js",[Jc]:"fire-js-all"};/**
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
*/const Ei=new Map,Zc=new Map,Tn=new Map;function ir(i,t){try{i.container.addComponent(t)}catch(e){kt.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,e)}}function ee(i){const t=i.name;if(Tn.has(t))return kt.debug(`There were multiple attempts to register component ${t}.`),!1;Tn.set(t,i);for(const e of Ei.values())ir(e,i);for(const e of Zc.values())ir(e,i);return!0}function Li(i,t){const e=i.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),i.container.getProvider(t)}function Q(i){return i==null?!1:i.settings!==void 0}/**
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
*/const Qc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bt=new qe("app","Firebase",Qc);/**
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
*/class th{constructor(t,e,s){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}/**
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
*/const oe=Xc;function no(i,t={}){let e=i;typeof t!="object"&&(t={name:t});const s={name:En,automaticDataCollectionEnabled:!0,...t},o=s.name;if(typeof o!="string"||!o)throw Bt.create("bad-app-name",{appName:String(o)});if(e||(e=Zr()),!e)throw Bt.create("no-options");const c=Ei.get(o);if(c){if(te(e,c.options)&&te(s,c.config))return c;throw Bt.create("duplicate-app",{appName:o})}const h=new oc(o);for(const _ of Tn.values())h.addComponent(_);const m=new th(e,s,h);return Ei.set(o,m),m}function Ln(i=En){const t=Ei.get(i);if(!t&&i===En&&Zr())return no();if(!t)throw Bt.create("no-app",{appName:i});return t}function gt(i,t,e){let s=Yc[i]??i;e&&(s+=`-${e}`);const o=s.match(/\s|\//),c=t.match(/\s|\//);if(o||c){const h=[`Unable to register library "${s}" with version "${t}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&c&&h.push("and"),c&&h.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kt.warn(h.join(" "));return}ee(new Ht(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
*/const eh="firebase-heartbeat-database",ih=1,$e="firebase-heartbeat-store";let pn=null;function so(){return pn||(pn=wc(eh,ih,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore($e)}catch(e){console.warn(e)}}}}).catch(i=>{throw Bt.create("idb-open",{originalErrorMessage:i.message})})),pn}async function nh(i){try{const t=(await so()).transaction($e),e=await t.objectStore($e).get(ro(i));return await t.done,e}catch(t){if(t instanceof wt)kt.warn(t.message);else{const e=Bt.create("idb-get",{originalErrorMessage:t?.message});kt.warn(e.message)}}}async function nr(i,t){try{const e=(await so()).transaction($e,"readwrite");await e.objectStore($e).put(t,ro(i)),await e.done}catch(e){if(e instanceof wt)kt.warn(e.message);else{const s=Bt.create("idb-set",{originalErrorMessage:e?.message});kt.warn(s.message)}}}function ro(i){return`${i.name}!${i.options.appId}`}/**
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
*/const sh=1024,rh=30;class oh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ch(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=sr();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===e||this._heartbeatsCache.heartbeats.some(s=>s.date===e))return;if(this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats.length>rh){const s=hh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){kt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=sr(),{heartbeatsToSend:e,unsentEntries:s}=ah(this._heartbeatsCache.heartbeats),o=bi(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return kt.warn(t),""}}}function sr(){return new Date().toISOString().substring(0,10)}function ah(i,t=sh){const e=[];let s=i.slice();for(const o of i){const c=e.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),rr(e)>t){c.dates.pop();break}}else if(e.push({agent:o.agent,dates:[o.date]}),rr(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class ch{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ka()?Ja().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await nh(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const e=await this.read();return nr(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const e=await this.read();return nr(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:[...e.heartbeats,...t.heartbeats]})}else return}}function rr(i){return bi(JSON.stringify({version:2,heartbeats:i})).length}function hh(i){if(i.length===0)return-1;let t=0,e=i[0].date;for(let s=1;s<i.length;s++)i[s].date<e&&(e=i[s].date,t=s);return t}/**
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
*/function lh(i){ee(new Ht("platform-logger",t=>new bc(t),"PRIVATE")),ee(new Ht("heartbeat",t=>new oh(t),"PRIVATE")),gt(bn,er,i),gt(bn,er,"esm2020"),gt("fire-js","")}lh("");var uh="firebase",dh="12.4.0";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/gt(uh,dh,"app");var or=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mn;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(g,u){function f(){}f.prototype=u.prototype,g.F=u.prototype,g.prototype=new f,g.prototype.constructor=g,g.D=function(y,p,v){for(var d=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)d[Z-2]=arguments[Z];return u.prototype[p].apply(y,d)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(s,e),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(g,u,f){f||(f=0);const y=Array(16);if(typeof u=="string")for(var p=0;p<16;++p)y[p]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(p=0;p<16;++p)y[p]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=g.g[0],f=g.g[1],p=g.g[2];let v=g.g[3],d;d=u+(v^f&(p^v))+y[0]+3614090360&4294967295,u=f+(d<<7&4294967295|d>>>25),d=v+(p^u&(f^p))+y[1]+3905402710&4294967295,v=u+(d<<12&4294967295|d>>>20),d=p+(f^v&(u^f))+y[2]+606105819&4294967295,p=v+(d<<17&4294967295|d>>>15),d=f+(u^p&(v^u))+y[3]+3250441966&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(v^f&(p^v))+y[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=v+(p^u&(f^p))+y[5]+1200080426&4294967295,v=u+(d<<12&4294967295|d>>>20),d=p+(f^v&(u^f))+y[6]+2821735955&4294967295,p=v+(d<<17&4294967295|d>>>15),d=f+(u^p&(v^u))+y[7]+4249261313&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(v^f&(p^v))+y[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=v+(p^u&(f^p))+y[9]+2336552879&4294967295,v=u+(d<<12&4294967295|d>>>20),d=p+(f^v&(u^f))+y[10]+4294925233&4294967295,p=v+(d<<17&4294967295|d>>>15),d=f+(u^p&(v^u))+y[11]+2304563134&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(v^f&(p^v))+y[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=v+(p^u&(f^p))+y[13]+4254626195&4294967295,v=u+(d<<12&4294967295|d>>>20),d=p+(f^v&(u^f))+y[14]+2792965006&4294967295,p=v+(d<<17&4294967295|d>>>15),d=f+(u^p&(v^u))+y[15]+1236535329&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(p^v&(f^p))+y[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=v+(f^p&(u^f))+y[6]+3225465664&4294967295,v=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(v^u))+y[11]+643717713&4294967295,p=v+(d<<14&4294967295|d>>>18),d=f+(v^u&(p^v))+y[0]+3921069994&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^v&(f^p))+y[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=v+(f^p&(u^f))+y[10]+38016083&4294967295,v=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(v^u))+y[15]+3634488961&4294967295,p=v+(d<<14&4294967295|d>>>18),d=f+(v^u&(p^v))+y[4]+3889429448&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^v&(f^p))+y[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=v+(f^p&(u^f))+y[14]+3275163606&4294967295,v=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(v^u))+y[3]+4107603335&4294967295,p=v+(d<<14&4294967295|d>>>18),d=f+(v^u&(p^v))+y[8]+1163531501&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^v&(f^p))+y[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=v+(f^p&(u^f))+y[2]+4243563512&4294967295,v=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(v^u))+y[7]+1735328473&4294967295,p=v+(d<<14&4294967295|d>>>18),d=f+(v^u&(p^v))+y[12]+2368359562&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(f^p^v)+y[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=v+(u^f^p)+y[8]+2272392833&4294967295,v=u+(d<<11&4294967295|d>>>21),d=p+(v^u^f)+y[11]+1839030562&4294967295,p=v+(d<<16&4294967295|d>>>16),d=f+(p^v^u)+y[14]+4259657740&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^v)+y[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=v+(u^f^p)+y[4]+1272893353&4294967295,v=u+(d<<11&4294967295|d>>>21),d=p+(v^u^f)+y[7]+4139469664&4294967295,p=v+(d<<16&4294967295|d>>>16),d=f+(p^v^u)+y[10]+3200236656&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^v)+y[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=v+(u^f^p)+y[0]+3936430074&4294967295,v=u+(d<<11&4294967295|d>>>21),d=p+(v^u^f)+y[3]+3572445317&4294967295,p=v+(d<<16&4294967295|d>>>16),d=f+(p^v^u)+y[6]+76029189&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^v)+y[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=v+(u^f^p)+y[12]+3873151461&4294967295,v=u+(d<<11&4294967295|d>>>21),d=p+(v^u^f)+y[15]+530742520&4294967295,p=v+(d<<16&4294967295|d>>>16),d=f+(p^v^u)+y[2]+3299628645&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(p^(f|~v))+y[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=v+(f^(u|~p))+y[7]+1126891415&4294967295,v=u+(d<<10&4294967295|d>>>22),d=p+(u^(v|~f))+y[14]+2878612391&4294967295,p=v+(d<<15&4294967295|d>>>17),d=f+(v^(p|~u))+y[5]+4237533241&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~v))+y[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=v+(f^(u|~p))+y[3]+2399980690&4294967295,v=u+(d<<10&4294967295|d>>>22),d=p+(u^(v|~f))+y[10]+4293915773&4294967295,p=v+(d<<15&4294967295|d>>>17),d=f+(v^(p|~u))+y[1]+2240044497&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~v))+y[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=v+(f^(u|~p))+y[15]+4264355552&4294967295,v=u+(d<<10&4294967295|d>>>22),d=p+(u^(v|~f))+y[6]+2734768916&4294967295,p=v+(d<<15&4294967295|d>>>17),d=f+(v^(p|~u))+y[13]+1309151649&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~v))+y[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=v+(f^(u|~p))+y[11]+3174756917&4294967295,v=u+(d<<10&4294967295|d>>>22),d=p+(u^(v|~f))+y[2]+718787259&4294967295,p=v+(d<<15&4294967295|d>>>17),d=f+(v^(p|~u))+y[9]+3951481745&4294967295,g.g[0]=g.g[0]+u&4294967295,g.g[1]=g.g[1]+(p+(d<<21&4294967295|d>>>11))&4294967295,g.g[2]=g.g[2]+p&4294967295,g.g[3]=g.g[3]+v&4294967295}s.prototype.v=function(g,u){u===void 0&&(u=g.length);const f=u-this.blockSize,y=this.C;let p=this.h,v=0;for(;v<u;){if(p==0)for(;v<=f;)o(this,g,v),v+=this.blockSize;if(typeof g=="string"){for(;v<u;)if(y[p++]=g.charCodeAt(v++),p==this.blockSize){o(this,y),p=0;break}}else for(;v<u;)if(y[p++]=g[v++],p==this.blockSize){o(this,y),p=0;break}}this.h=p,this.o+=u},s.prototype.A=function(){var g=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);g[0]=128;for(var u=1;u<g.length-8;++u)g[u]=0;u=this.o*8;for(var f=g.length-8;f<g.length;++f)g[f]=u&255,u/=256;for(this.v(g),g=Array(16),u=0,f=0;f<4;++f)for(let y=0;y<32;y+=8)g[u++]=this.g[f]>>>y&255;return g};function c(g,u){var f=m;return Object.prototype.hasOwnProperty.call(f,g)?f[g]:f[g]=u(g)}function h(g,u){this.h=u;const f=[];let y=!0;for(let p=g.length-1;p>=0;p--){const v=g[p]|0;y&&v==u||(f[p]=v,y=!1)}this.g=f}var m={};function _(g){return-128<=g&&g<128?c(g,function(u){return new h([u|0],u<0?-1:0)}):new h([g|0],g<0?-1:0)}function b(g){if(isNaN(g)||!isFinite(g))return E;if(g<0)return C(b(-g));const u=[];let f=1;for(let y=0;g>=f;y++)u[y]=g/f|0,f*=4294967296;return new h(u,0)}function S(g,u){if(g.length==0)throw Error("number format error: empty string");if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(g.charAt(0)=="-")return C(S(g.substring(1),u));if(g.indexOf("-")>=0)throw Error('number format error: interior "-" character');const f=b(Math.pow(u,8));let y=E;for(let v=0;v<g.length;v+=8){var p=Math.min(8,g.length-v);const d=parseInt(g.substring(v,v+p),u);p<8?(p=b(Math.pow(u,p)),y=y.j(p).add(b(d))):(y=y.j(f),y=y.add(b(d)))}return y}var E=_(0),R=_(1),U=_(16777216);i=h.prototype,i.m=function(){if(M(this))return-C(this).m();let g=0,u=1;for(let f=0;f<this.g.length;f++){const y=this.i(f);g+=(y>=0?y:4294967296+y)*u,u*=4294967296}return g},i.toString=function(g){if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(L(this))return"0";if(M(this))return"-"+C(this).toString(g);const u=b(Math.pow(g,6));var f=this;let y="";for(;;){const p=st(f,u).g;f=B(f,p.j(u));let v=((f.g.length>0?f.g[0]:f.h)>>>0).toString(g);if(f=p,L(f))return v+y;for(;v.length<6;)v="0"+v;y=v+y}},i.i=function(g){return g<0?0:g<this.g.length?this.g[g]:this.h};function L(g){if(g.h!=0)return!1;for(let u=0;u<g.g.length;u++)if(g.g[u]!=0)return!1;return!0}function M(g){return g.h==-1}i.l=function(g){return g=B(this,g),M(g)?-1:L(g)?0:1};function C(g){const u=g.g.length,f=[];for(let y=0;y<u;y++)f[y]=~g.g[y];return new h(f,~g.h).add(R)}i.abs=function(){return M(this)?C(this):this},i.add=function(g){const u=Math.max(this.g.length,g.g.length),f=[];let y=0;for(let p=0;p<=u;p++){let v=y+(this.i(p)&65535)+(g.i(p)&65535),d=(v>>>16)+(this.i(p)>>>16)+(g.i(p)>>>16);y=d>>>16,v&=65535,d&=65535,f[p]=d<<16|v}return new h(f,f[f.length-1]&-2147483648?-1:0)};function B(g,u){return g.add(C(u))}i.j=function(g){if(L(this)||L(g))return E;if(M(this))return M(g)?C(this).j(C(g)):C(C(this).j(g));if(M(g))return C(this.j(C(g)));if(this.l(U)<0&&g.l(U)<0)return b(this.m()*g.m());const u=this.g.length+g.g.length,f=[];for(var y=0;y<2*u;y++)f[y]=0;for(y=0;y<this.g.length;y++)for(let p=0;p<g.g.length;p++){const v=this.i(y)>>>16,d=this.i(y)&65535,Z=g.i(p)>>>16,zt=g.i(p)&65535;f[2*y+2*p]+=d*zt,$(f,2*y+2*p),f[2*y+2*p+1]+=v*zt,$(f,2*y+2*p+1),f[2*y+2*p+1]+=d*Z,$(f,2*y+2*p+1),f[2*y+2*p+2]+=v*Z,$(f,2*y+2*p+2)}for(g=0;g<u;g++)f[g]=f[2*g+1]<<16|f[2*g];for(g=u;g<2*u;g++)f[g]=0;return new h(f,0)};function $(g,u){for(;(g[u]&65535)!=g[u];)g[u+1]+=g[u]>>>16,g[u]&=65535,u++}function F(g,u){this.g=g,this.h=u}function st(g,u){if(L(u))throw Error("division by zero");if(L(g))return new F(E,E);if(M(g))return u=st(C(g),u),new F(C(u.g),C(u.h));if(M(u))return u=st(g,C(u)),new F(C(u.g),u.h);if(g.g.length>30){if(M(g)||M(u))throw Error("slowDivide_ only works with positive integers.");for(var f=R,y=u;y.l(g)<=0;)f=tt(f),y=tt(y);var p=Y(f,1),v=Y(y,1);for(y=Y(y,2),f=Y(f,2);!L(y);){var d=v.add(y);d.l(g)<=0&&(p=p.add(f),v=d),y=Y(y,1),f=Y(f,1)}return u=B(g,p.j(u)),new F(p,u)}for(p=E;g.l(u)>=0;){for(f=Math.max(1,Math.floor(g.m()/u.m())),y=Math.ceil(Math.log(f)/Math.LN2),y=y<=48?1:Math.pow(2,y-48),v=b(f),d=v.j(u);M(d)||d.l(g)>0;)f-=y,v=b(f),d=v.j(u);L(v)&&(v=R),p=p.add(v),g=B(g,d)}return new F(p,g)}i.B=function(g){return st(this,g).h},i.and=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let y=0;y<u;y++)f[y]=this.i(y)&g.i(y);return new h(f,this.h&g.h)},i.or=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let y=0;y<u;y++)f[y]=this.i(y)|g.i(y);return new h(f,this.h|g.h)},i.xor=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let y=0;y<u;y++)f[y]=this.i(y)^g.i(y);return new h(f,this.h^g.h)};function tt(g){const u=g.g.length+1,f=[];for(let y=0;y<u;y++)f[y]=g.i(y)<<1|g.i(y-1)>>>31;return new h(f,g.h)}function Y(g,u){const f=u>>5;u%=32;const y=g.g.length-f,p=[];for(let v=0;v<y;v++)p[v]=u>0?g.i(v+f)>>>u|g.i(v+f+1)<<32-u:g.i(v+f);return new h(p,g.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=b,h.fromString=S,Mn=h}).apply(typeof or<"u"?or:typeof self<"u"?self:typeof window<"u"?window:{});var di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,t=Object.defineProperty;function e(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof di=="object"&&di];for(var r=0;r<n.length;++r){var a=n[r];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var s=e(this);function o(n,r){if(r)t:{var a=s;n=n.split(".");for(var l=0;l<n.length-1;l++){var w=n[l];if(!(w in a))break t;a=a[w]}n=n[n.length-1],l=a[n],r=r(l),r!=l&&r!=null&&t(a,n,{configurable:!0,writable:!0,value:r})}}o("Symbol.dispose",function(n){return n||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(n){return n||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(n){return n||function(r){var a=[],l;for(l in r)Object.prototype.hasOwnProperty.call(r,l)&&a.push([l,r[l]]);return a}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},h=this||self;function m(n){var r=typeof n;return r=="object"&&n!=null||r=="function"}function _(n,r,a){return n.call.apply(n.bind,arguments)}function b(n,r,a){return b=_,b.apply(null,arguments)}function S(n,r){var a=Array.prototype.slice.call(arguments,1);return function(){var l=a.slice();return l.push.apply(l,arguments),n.apply(this,l)}}function E(n,r){function a(){}a.prototype=r.prototype,n.Z=r.prototype,n.prototype=new a,n.prototype.constructor=n,n.Ob=function(l,w,I){for(var T=Array(arguments.length-2),A=2;A<arguments.length;A++)T[A-2]=arguments[A];return r.prototype[w].apply(l,T)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?n=>n&&AsyncContext.Snapshot.wrap(n):n=>n;function U(n){const r=n.length;if(r>0){const a=Array(r);for(let l=0;l<r;l++)a[l]=n[l];return a}return[]}function L(n,r){for(let l=1;l<arguments.length;l++){const w=arguments[l];var a=typeof w;if(a=a!="object"?a:w?Array.isArray(w)?"array":a:"null",a=="array"||a=="object"&&typeof w.length=="number"){a=n.length||0;const I=w.length||0;n.length=a+I;for(let T=0;T<I;T++)n[a+T]=w[T]}else n.push(w)}}class M{constructor(r,a){this.i=r,this.j=a,this.h=0,this.g=null}get(){let r;return this.h>0?(this.h--,r=this.g,this.g=r.next,r.next=null):r=this.i(),r}}function C(n){h.setTimeout(()=>{throw n},0)}function B(){var n=g;let r=null;return n.g&&(r=n.g,n.g=n.g.next,n.g||(n.h=null),r.next=null),r}class ${constructor(){this.h=this.g=null}add(r,a){const l=F.get();l.set(r,a),this.h?this.h.next=l:this.g=l,this.h=l}}var F=new M(()=>new st,n=>n.reset());class st{constructor(){this.next=this.g=this.h=null}set(r,a){this.h=r,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,Y=!1,g=new $,u=()=>{const n=Promise.resolve(void 0);tt=()=>{n.then(f)}};function f(){for(var n;n=B();){try{n.h.call(n.g)}catch(a){C(a)}var r=F;r.j(n),r.h<100&&(r.h++,n.next=r.g,r.g=n)}Y=!1}function y(){this.u=this.u,this.C=this.C}y.prototype.u=!1,y.prototype.dispose=function(){this.u||(this.u=!0,this.N())},y.prototype[Symbol.dispose]=function(){this.dispose()},y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function p(n,r){this.type=n,this.g=this.target=r,this.defaultPrevented=!1}p.prototype.h=function(){this.defaultPrevented=!0};var v=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var n=!1,r=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const a=()=>{};h.addEventListener("test",a,r),h.removeEventListener("test",a,r)}catch{}return n})();function d(n){return/^[\s\xa0]*$/.test(n)}function Z(n,r){p.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n&&this.init(n,r)}E(Z,p),Z.prototype.init=function(n,r){const a=this.type=n.type,l=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;this.target=n.target||n.srcElement,this.g=r,r=n.relatedTarget,r||(a=="mouseover"?r=n.fromElement:a=="mouseout"&&(r=n.toElement)),this.relatedTarget=r,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=n.pointerType,this.state=n.state,this.i=n,n.defaultPrevented&&Z.Z.h.call(this)},Z.prototype.h=function(){Z.Z.h.call(this);const n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var zt="closure_listenable_"+(Math.random()*1e6|0),ta=0;function ea(n,r,a,l,w){this.listener=n,this.proxy=null,this.src=r,this.type=a,this.capture=!!l,this.ha=w,this.key=++ta,this.da=this.fa=!1}function ti(n){n.da=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function ei(n,r,a){for(const l in n)r.call(a,n[l],l,n)}function ia(n,r){for(const a in n)r.call(void 0,n[a],a,n)}function Xn(n){const r={};for(const a in n)r[a]=n[a];return r}const Yn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zn(n,r){let a,l;for(let w=1;w<arguments.length;w++){l=arguments[w];for(a in l)n[a]=l[a];for(let I=0;I<Yn.length;I++)a=Yn[I],Object.prototype.hasOwnProperty.call(l,a)&&(n[a]=l[a])}}function ii(n){this.src=n,this.g={},this.h=0}ii.prototype.add=function(n,r,a,l,w){const I=n.toString();n=this.g[I],n||(n=this.g[I]=[],this.h++);const T=Fi(n,r,l,w);return T>-1?(r=n[T],a||(r.fa=!1)):(r=new ea(r,this.src,I,!!l,w),r.fa=a,n.push(r)),r};function ji(n,r){const a=r.type;if(a in n.g){var l=n.g[a],w=Array.prototype.indexOf.call(l,r,void 0),I;(I=w>=0)&&Array.prototype.splice.call(l,w,1),I&&(ti(r),n.g[a].length==0&&(delete n.g[a],n.h--))}}function Fi(n,r,a,l){for(let w=0;w<n.length;++w){const I=n[w];if(!I.da&&I.listener==r&&I.capture==!!a&&I.ha==l)return w}return-1}var Vi="closure_lm_"+(Math.random()*1e6|0),Bi={};function Qn(n,r,a,l,w){if(Array.isArray(r)){for(let I=0;I<r.length;I++)Qn(n,r[I],a,l,w);return null}return a=is(a),n&&n[zt]?n.J(r,a,m(l)?!!l.capture:!1,w):na(n,r,a,!1,l,w)}function na(n,r,a,l,w,I){if(!r)throw Error("Invalid event type");const T=m(w)?!!w.capture:!!w;let A=$i(n);if(A||(n[Vi]=A=new ii(n)),a=A.add(r,a,l,T,I),a.proxy)return a;if(l=sa(),a.proxy=l,l.src=n,l.listener=a,n.addEventListener)v||(w=T),w===void 0&&(w=!1),n.addEventListener(r.toString(),l,w);else if(n.attachEvent)n.attachEvent(es(r.toString()),l);else if(n.addListener&&n.removeListener)n.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return a}function sa(){function n(a){return r.call(n.src,n.listener,a)}const r=ra;return n}function ts(n,r,a,l,w){if(Array.isArray(r))for(var I=0;I<r.length;I++)ts(n,r[I],a,l,w);else l=m(l)?!!l.capture:!!l,a=is(a),n&&n[zt]?(n=n.i,I=String(r).toString(),I in n.g&&(r=n.g[I],a=Fi(r,a,l,w),a>-1&&(ti(r[a]),Array.prototype.splice.call(r,a,1),r.length==0&&(delete n.g[I],n.h--)))):n&&(n=$i(n))&&(r=n.g[r.toString()],n=-1,r&&(n=Fi(r,a,l,w)),(a=n>-1?r[n]:null)&&Hi(a))}function Hi(n){if(typeof n!="number"&&n&&!n.da){var r=n.src;if(r&&r[zt])ji(r.i,n);else{var a=n.type,l=n.proxy;r.removeEventListener?r.removeEventListener(a,l,n.capture):r.detachEvent?r.detachEvent(es(a),l):r.addListener&&r.removeListener&&r.removeListener(l),(a=$i(r))?(ji(a,n),a.h==0&&(a.src=null,r[Vi]=null)):ti(n)}}}function es(n){return n in Bi?Bi[n]:Bi[n]="on"+n}function ra(n,r){if(n.da)n=!0;else{r=new Z(r,this);const a=n.listener,l=n.ha||n.src;n.fa&&Hi(n),n=a.call(l,r)}return n}function $i(n){return n=n[Vi],n instanceof ii?n:null}var Wi="__closure_events_fn_"+(Math.random()*1e9>>>0);function is(n){return typeof n=="function"?n:(n[Wi]||(n[Wi]=function(r){return n.handleEvent(r)}),n[Wi])}function q(){y.call(this),this.i=new ii(this),this.M=this,this.G=null}E(q,y),q.prototype[zt]=!0,q.prototype.removeEventListener=function(n,r,a,l){ts(this,n,r,a,l)};function G(n,r){var a,l=n.G;if(l)for(a=[];l;l=l.G)a.push(l);if(n=n.M,l=r.type||r,typeof r=="string")r=new p(r,n);else if(r instanceof p)r.target=r.target||n;else{var w=r;r=new p(l,n),Zn(r,w)}w=!0;let I,T;if(a)for(T=a.length-1;T>=0;T--)I=r.g=a[T],w=ni(I,l,!0,r)&&w;if(I=r.g=n,w=ni(I,l,!0,r)&&w,w=ni(I,l,!1,r)&&w,a)for(T=0;T<a.length;T++)I=r.g=a[T],w=ni(I,l,!1,r)&&w}q.prototype.N=function(){if(q.Z.N.call(this),this.i){var n=this.i;for(const r in n.g){const a=n.g[r];for(let l=0;l<a.length;l++)ti(a[l]);delete n.g[r],n.h--}}this.G=null},q.prototype.J=function(n,r,a,l){return this.i.add(String(n),r,!1,a,l)},q.prototype.K=function(n,r,a,l){return this.i.add(String(n),r,!0,a,l)};function ni(n,r,a,l){if(r=n.i.g[String(r)],!r)return!0;r=r.concat();let w=!0;for(let I=0;I<r.length;++I){const T=r[I];if(T&&!T.da&&T.capture==a){const A=T.listener,W=T.ha||T.src;T.fa&&ji(n.i,T),w=A.call(W,l)!==!1&&w}}return w&&!l.defaultPrevented}function oa(n,r){if(typeof n!="function")if(n&&typeof n.handleEvent=="function")n=b(n.handleEvent,n);else throw Error("Invalid listener argument");return Number(r)>2147483647?-1:h.setTimeout(n,r||0)}function ns(n){n.g=oa(()=>{n.g=null,n.i&&(n.i=!1,ns(n))},n.l);const r=n.h;n.h=null,n.m.apply(null,r)}class aa extends y{constructor(r,a){super(),this.m=r,this.l=a,this.h=null,this.i=!1,this.g=null}j(r){this.h=arguments,this.g?this.i=!0:ns(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ie(n){y.call(this),this.h=n,this.g={}}E(Ie,y);var ss=[];function rs(n){ei(n.g,function(r,a){this.g.hasOwnProperty(a)&&Hi(r)},n),n.g={}}Ie.prototype.N=function(){Ie.Z.N.call(this),rs(this)},Ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zi=h.JSON.stringify,ca=h.JSON.parse,ha=class{stringify(n){return h.JSON.stringify(n,void 0)}parse(n){return h.JSON.parse(n,void 0)}};function os(){}function qi(){p.call(this,"d")}E(qi,p);function Gi(){p.call(this,"c")}E(Gi,p);var ae={},as=null;function Ki(){return as=as||new q}ae.Ia="serverreachability";function cs(n){p.call(this,ae.Ia,n)}E(cs,p);function be(n){const r=Ki();G(r,new cs(r))}ae.STAT_EVENT="statevent";function hs(n,r){p.call(this,ae.STAT_EVENT,n),this.stat=r}E(hs,p);function K(n){const r=Ki();G(r,new hs(r,n))}ae.Ja="timingevent";function ls(n,r){p.call(this,ae.Ja,n),this.size=r}E(ls,p);function Ee(n,r){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){n()},r)}function Te(){this.g=!0}Te.prototype.ua=function(){this.g=!1};function la(n,r,a,l,w,I){n.info(function(){if(n.g)if(I){var T="",A=I.split("&");for(let j=0;j<A.length;j++){var W=A[j].split("=");if(W.length>1){const z=W[0];W=W[1];const ut=z.split("_");T=ut.length>=2&&ut[1]=="type"?T+(z+"="+W+"&"):T+(z+"=redacted&")}}}else T=null;else T=I;return"XMLHTTP REQ ("+l+") [attempt "+w+"]: "+r+`
`+a+`
`+T})}function ua(n,r,a,l,w,I,T){n.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+w+"]: "+r+`
`+a+`
`+I+" "+T})}function ce(n,r,a,l){n.info(function(){return"XMLHTTP TEXT ("+r+"): "+fa(n,a)+(l?" "+l:"")})}function da(n,r){n.info(function(){return"TIMEOUT: "+r})}Te.prototype.info=function(){};function fa(n,r){if(!n.g)return r;if(!r)return null;try{const I=JSON.parse(r);if(I){for(n=0;n<I.length;n++)if(Array.isArray(I[n])){var a=I[n];if(!(a.length<2)){var l=a[1];if(Array.isArray(l)&&!(l.length<1)){var w=l[0];if(w!="noop"&&w!="stop"&&w!="close")for(let T=1;T<l.length;T++)l[T]=""}}}}return zi(I)}catch{return r}}var us;function Ji(){}E(Ji,os),Ji.prototype.g=function(){return new XMLHttpRequest},us=new Ji;function Se(n){return encodeURIComponent(String(n))}function pa(n){var r=1;n=n.split(":");const a=[];for(;r>0&&n.length;)a.push(n.shift()),r--;return n.length&&a.push(n.join(":")),a}function Rt(n,r,a,l){this.j=n,this.i=r,this.l=a,this.S=l||1,this.V=new Ie(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ds}function ds(){this.i=null,this.g="",this.h=!1}var fs={},Xi={};function Yi(n,r,a){n.M=1,n.A=ri(lt(r)),n.u=a,n.R=!0,ps(n,null)}function ps(n,r){n.F=Date.now(),si(n),n.B=lt(n.A);var a=n.B,l=n.S;Array.isArray(l)||(l=[String(l)]),As(a.i,"t",l),n.C=0,a=n.j.L,n.h=new ds,n.g=zs(n.j,a?r:null,!n.u),n.P>0&&(n.O=new aa(b(n.Y,n,n.g),n.P)),r=n.V,a=n.g,l=n.ba;var w="readystatechange";Array.isArray(w)||(w&&(ss[0]=w.toString()),w=ss);for(let I=0;I<w.length;I++){const T=Qn(a,w[I],l||r.handleEvent,!1,r.h||r);if(!T)break;r.g[T.key]=T}r=n.J?Xn(n.J):{},n.u?(n.v||(n.v="POST"),r["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.B,n.v,n.u,r)):(n.v="GET",n.g.ea(n.B,n.v,null,r)),be(),la(n.i,n.v,n.B,n.l,n.S,n.u)}Rt.prototype.ba=function(n){n=n.target;const r=this.O;r&&Ot(n)==3?r.j():this.Y(n)},Rt.prototype.Y=function(n){try{if(n==this.g)t:{const A=Ot(this.g),W=this.g.ya(),j=this.g.ca();if(!(A<3)&&(A!=3||this.g&&(this.h.h||this.g.la()||Ls(this.g)))){this.K||A!=4||W==7||(W==8||j<=0?be(3):be(2)),Zi(this);var r=this.g.ca();this.X=r;var a=ga(this);if(this.o=r==200,ua(this.i,this.v,this.B,this.l,this.S,A,r),this.o){if(this.U&&!this.L){e:{if(this.g){var l,w=this.g;if((l=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!d(l)){var I=l;break e}}I=null}if(n=I)ce(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Qi(this,n);else{this.o=!1,this.m=3,K(12),qt(this),ke(this);break t}}if(this.R){n=!0;let z;for(;!this.K&&this.C<a.length;)if(z=ma(this,a),z==Xi){A==4&&(this.m=4,K(14),n=!1),ce(this.i,this.l,null,"[Incomplete Response]");break}else if(z==fs){this.m=4,K(15),ce(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}else ce(this.i,this.l,z,null),Qi(this,z);if(gs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),A!=4||a.length!=0||this.h.h||(this.m=1,K(16),n=!1),this.o=this.o&&n,!n)ce(this.i,this.l,a,"[Invalid Chunked Response]"),qt(this),ke(this);else if(a.length>0&&!this.W){this.W=!0;var T=this.j;T.g==this&&T.aa&&!T.P&&(T.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),cn(T),T.P=!0,K(11))}}else ce(this.i,this.l,a,null),Qi(this,a);A==4&&qt(this),this.o&&!this.K&&(A==4?Bs(this.j,this):(this.o=!1,si(this)))}else Pa(this.g),r==400&&a.indexOf("Unknown SID")>0?(this.m=3,K(12)):(this.m=0,K(13)),qt(this),ke(this)}}}catch{}finally{}};function ga(n){if(!gs(n))return n.g.la();const r=Ls(n.g);if(r==="")return"";let a="";const l=r.length,w=Ot(n.g)==4;if(!n.h.i){if(typeof TextDecoder>"u")return qt(n),ke(n),"";n.h.i=new h.TextDecoder}for(let I=0;I<l;I++)n.h.h=!0,a+=n.h.i.decode(r[I],{stream:!(w&&I==l-1)});return r.length=0,n.h.g+=a,n.C=0,n.h.g}function gs(n){return n.g?n.v=="GET"&&n.M!=2&&n.j.Aa:!1}function ma(n,r){var a=n.C,l=r.indexOf(`
`,a);return l==-1?Xi:(a=Number(r.substring(a,l)),isNaN(a)?fs:(l+=1,l+a>r.length?Xi:(r=r.slice(l,l+a),n.C=l+a,r)))}Rt.prototype.cancel=function(){this.K=!0,qt(this)};function si(n){n.T=Date.now()+n.H,ms(n,n.H)}function ms(n,r){if(n.D!=null)throw Error("WatchDog timer not null");n.D=Ee(b(n.aa,n),r)}function Zi(n){n.D&&(h.clearTimeout(n.D),n.D=null)}Rt.prototype.aa=function(){this.D=null;const n=Date.now();n-this.T>=0?(da(this.i,this.B),this.M!=2&&(be(),K(17)),qt(this),this.m=2,ke(this)):ms(this,this.T-n)};function ke(n){n.j.I==0||n.K||Bs(n.j,n)}function qt(n){Zi(n);var r=n.O;r&&typeof r.dispose=="function"&&r.dispose(),n.O=null,rs(n.V),n.g&&(r=n.g,n.g=null,r.abort(),r.dispose())}function Qi(n,r){try{var a=n.j;if(a.I!=0&&(a.g==n||tn(a.h,n))){if(!n.L&&tn(a.h,n)&&a.I==3){try{var l=a.Ba.g.parse(r)}catch{l=null}if(Array.isArray(l)&&l.length==3){var w=l;if(w[0]==0){t:if(!a.v){if(a.g)if(a.g.F+3e3<n.F)li(a),ci(a);else break t;an(a),K(18)}}else a.xa=w[1],0<a.xa-a.K&&w[2]<37500&&a.F&&a.A==0&&!a.C&&(a.C=Ee(b(a.Va,a),6e3));ws(a.h)<=1&&a.ta&&(a.ta=void 0)}else Kt(a,11)}else if((n.L||a.g==n)&&li(a),!d(r))for(w=a.Ba.g.parse(r),r=0;r<w.length;r++){let j=w[r];const z=j[0];if(!(z<=a.K))if(a.K=z,j=j[1],a.I==2)if(j[0]=="c"){a.M=j[1],a.ba=j[2];const ut=j[3];ut!=null&&(a.ka=ut,a.j.info("VER="+a.ka));const ue=j[4];ue!=null&&(a.za=ue,a.j.info("SVER="+a.za));const Dt=j[5];Dt!=null&&typeof Dt=="number"&&Dt>0&&(l=1.5*Dt,a.O=l,a.j.info("backChannelRequestTimeoutMs_="+l)),l=a;const Lt=n.g;if(Lt){const ui=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ui){var I=l.h;I.g||ui.indexOf("spdy")==-1&&ui.indexOf("quic")==-1&&ui.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(en(I,I.h),I.h=null))}if(l.G){const hn=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;hn&&(l.wa=hn,x(l.J,l.G,hn))}}a.I=3,a.l&&a.l.ra(),a.aa&&(a.T=Date.now()-n.F,a.j.info("Handshake RTT: "+a.T+"ms")),l=a;var T=n;if(l.na=Ws(l,l.L?l.ba:null,l.W),T.L){vs(l.h,T);var A=T,W=l.O;W&&(A.H=W),A.D&&(Zi(A),si(A)),l.g=T}else Fs(l);a.i.length>0&&hi(a)}else j[0]!="stop"&&j[0]!="close"||Kt(a,7);else a.I==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Kt(a,7):on(a):j[0]!="noop"&&a.l&&a.l.qa(j),a.A=0)}}be(4)}catch{}}var ya=class{constructor(n,r){this.g=n,this.map=r}};function ys(n){this.l=n||10,h.PerformanceNavigationTiming?(n=h.performance.getEntriesByType("navigation"),n=n.length>0&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=n?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function _s(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function ws(n){return n.h?1:n.g?n.g.size:0}function tn(n,r){return n.h?n.h==r:n.g?n.g.has(r):!1}function en(n,r){n.g?n.g.add(r):n.h=r}function vs(n,r){n.h&&n.h==r?n.h=null:n.g&&n.g.has(r)&&n.g.delete(r)}ys.prototype.cancel=function(){if(this.i=Is(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Is(n){if(n.h!=null)return n.i.concat(n.h.G);if(n.g!=null&&n.g.size!==0){let r=n.i;for(const a of n.g.values())r=r.concat(a.G);return r}return U(n.i)}var bs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _a(n,r){if(n){n=n.split("&");for(let a=0;a<n.length;a++){const l=n[a].indexOf("=");let w,I=null;l>=0?(w=n[a].substring(0,l),I=n[a].substring(l+1)):w=n[a],r(w,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function Pt(n){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let r;n instanceof Pt?(this.l=n.l,Ae(this,n.j),this.o=n.o,this.g=n.g,Ce(this,n.u),this.h=n.h,nn(this,Cs(n.i)),this.m=n.m):n&&(r=String(n).match(bs))?(this.l=!1,Ae(this,r[1]||"",!0),this.o=Re(r[2]||""),this.g=Re(r[3]||"",!0),Ce(this,r[4]),this.h=Re(r[5]||"",!0),nn(this,r[6]||"",!0),this.m=Re(r[7]||"")):(this.l=!1,this.i=new Ne(null,this.l))}Pt.prototype.toString=function(){const n=[];var r=this.j;r&&n.push(Pe(r,Es,!0),":");var a=this.g;return(a||r=="file")&&(n.push("//"),(r=this.o)&&n.push(Pe(r,Es,!0),"@"),n.push(Se(a).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.u,a!=null&&n.push(":",String(a))),(a=this.h)&&(this.g&&a.charAt(0)!="/"&&n.push("/"),n.push(Pe(a,a.charAt(0)=="/"?Ia:va,!0))),(a=this.i.toString())&&n.push("?",a),(a=this.m)&&n.push("#",Pe(a,Ea)),n.join("")},Pt.prototype.resolve=function(n){const r=lt(this);let a=!!n.j;a?Ae(r,n.j):a=!!n.o,a?r.o=n.o:a=!!n.g,a?r.g=n.g:a=n.u!=null;var l=n.h;if(a)Ce(r,n.u);else if(a=!!n.h){if(l.charAt(0)!="/")if(this.g&&!this.h)l="/"+l;else{var w=r.h.lastIndexOf("/");w!=-1&&(l=r.h.slice(0,w+1)+l)}if(w=l,w==".."||w==".")l="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){l=w.lastIndexOf("/",0)==0,w=w.split("/");const I=[];for(let T=0;T<w.length;){const A=w[T++];A=="."?l&&T==w.length&&I.push(""):A==".."?((I.length>1||I.length==1&&I[0]!="")&&I.pop(),l&&T==w.length&&I.push("")):(I.push(A),l=!0)}l=I.join("/")}else l=w}return a?r.h=l:a=n.i.toString()!=="",a?nn(r,Cs(n.i)):a=!!n.m,a&&(r.m=n.m),r};function lt(n){return new Pt(n)}function Ae(n,r,a){n.j=a?Re(r,!0):r,n.j&&(n.j=n.j.replace(/:$/,""))}function Ce(n,r){if(r){if(r=Number(r),isNaN(r)||r<0)throw Error("Bad port number "+r);n.u=r}else n.u=null}function nn(n,r,a){r instanceof Ne?(n.i=r,Ta(n.i,n.l)):(a||(r=Pe(r,ba)),n.i=new Ne(r,n.l))}function x(n,r,a){n.i.set(r,a)}function ri(n){return x(n,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),n}function Re(n,r){return n?r?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Pe(n,r,a){return typeof n=="string"?(n=encodeURI(n).replace(r,wa),a&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function wa(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Es=/[#\/\?@]/g,va=/[#\?:]/g,Ia=/[#\?]/g,ba=/[#\?@]/g,Ea=/#/g;function Ne(n,r){this.h=this.g=null,this.i=n||null,this.j=!!r}function Gt(n){n.g||(n.g=new Map,n.h=0,n.i&&_a(n.i,function(r,a){n.add(decodeURIComponent(r.replace(/\+/g," ")),a)}))}i=Ne.prototype,i.add=function(n,r){Gt(this),this.i=null,n=he(this,n);let a=this.g.get(n);return a||this.g.set(n,a=[]),a.push(r),this.h+=1,this};function Ts(n,r){Gt(n),r=he(n,r),n.g.has(r)&&(n.i=null,n.h-=n.g.get(r).length,n.g.delete(r))}function Ss(n,r){return Gt(n),r=he(n,r),n.g.has(r)}i.forEach=function(n,r){Gt(this),this.g.forEach(function(a,l){a.forEach(function(w){n.call(r,w,l,this)},this)},this)};function ks(n,r){Gt(n);let a=[];if(typeof r=="string")Ss(n,r)&&(a=a.concat(n.g.get(he(n,r))));else for(n=Array.from(n.g.values()),r=0;r<n.length;r++)a=a.concat(n[r]);return a}i.set=function(n,r){return Gt(this),this.i=null,n=he(this,n),Ss(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[r]),this.h+=1,this},i.get=function(n,r){return n?(n=ks(this,n),n.length>0?String(n[0]):r):r};function As(n,r,a){Ts(n,r),a.length>0&&(n.i=null,n.g.set(he(n,r),U(a)),n.h+=a.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],r=Array.from(this.g.keys());for(let l=0;l<r.length;l++){var a=r[l];const w=Se(a);a=ks(this,a);for(let I=0;I<a.length;I++){let T=w;a[I]!==""&&(T+="="+Se(a[I])),n.push(T)}}return this.i=n.join("&")};function Cs(n){const r=new Ne;return r.i=n.i,n.g&&(r.g=new Map(n.g),r.h=n.h),r}function he(n,r){return r=String(r),n.j&&(r=r.toLowerCase()),r}function Ta(n,r){r&&!n.j&&(Gt(n),n.i=null,n.g.forEach(function(a,l){const w=l.toLowerCase();l!=w&&(Ts(this,l),As(this,w,a))},n)),n.j=r}function Sa(n,r){const a=new Te;if(h.Image){const l=new Image;l.onload=S(Nt,a,"TestLoadImage: loaded",!0,r,l),l.onerror=S(Nt,a,"TestLoadImage: error",!1,r,l),l.onabort=S(Nt,a,"TestLoadImage: abort",!1,r,l),l.ontimeout=S(Nt,a,"TestLoadImage: timeout",!1,r,l),h.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=n}else r(!1)}function ka(n,r){const a=new Te,l=new AbortController,w=setTimeout(()=>{l.abort(),Nt(a,"TestPingServer: timeout",!1,r)},1e4);fetch(n,{signal:l.signal}).then(I=>{clearTimeout(w),I.ok?Nt(a,"TestPingServer: ok",!0,r):Nt(a,"TestPingServer: server error",!1,r)}).catch(()=>{clearTimeout(w),Nt(a,"TestPingServer: error",!1,r)})}function Nt(n,r,a,l,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),l(a)}catch{}}function Aa(){this.g=new ha}function sn(n){this.i=n.Sb||null,this.h=n.ab||!1}E(sn,os),sn.prototype.g=function(){return new oi(this.i,this.h)};function oi(n,r){q.call(this),this.H=n,this.o=r,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(oi,q),i=oi.prototype,i.open=function(n,r){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=n,this.D=r,this.readyState=1,De(this)},i.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const r={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};n&&(r.body=n),(this.H||h).fetch(new Request(this.D,r)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Oe(this)),this.readyState=0},i.Pa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,De(this)),this.g&&(this.readyState=3,De(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Rs(this)}else n.text().then(this.Oa.bind(this),this.ga.bind(this))};function Rs(n){n.j.read().then(n.Ma.bind(n)).catch(n.ga.bind(n))}i.Ma=function(n){if(this.g){if(this.o&&n.value)this.response.push(n.value);else if(!this.o){var r=n.value?n.value:new Uint8Array(0);(r=this.B.decode(r,{stream:!n.done}))&&(this.response=this.responseText+=r)}n.done?Oe(this):De(this),this.readyState==3&&Rs(this)}},i.Oa=function(n){this.g&&(this.response=this.responseText=n,Oe(this))},i.Na=function(n){this.g&&(this.response=n,Oe(this))},i.ga=function(){this.g&&Oe(this)};function Oe(n){n.readyState=4,n.l=null,n.j=null,n.B=null,De(n)}i.setRequestHeader=function(n,r){this.A.append(n,r)},i.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],r=this.h.entries();for(var a=r.next();!a.done;)a=a.value,n.push(a[0]+": "+a[1]),a=r.next();return n.join(`\r
`)};function De(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});function Ps(n){let r="";return ei(n,function(a,l){r+=l,r+=":",r+=a,r+=`\r
`}),r}function rn(n,r,a){t:{for(l in a){var l=!1;break t}l=!0}l||(a=Ps(a),typeof n=="string"?a!=null&&Se(a):x(n,r,a))}function V(n){q.call(this),this.headers=new Map,this.L=n||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(V,q);var Ca=/^https?$/i,Ra=["POST","PUT"];i=V.prototype,i.Fa=function(n){this.H=n},i.ea=function(n,r,a,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+n);r=r?r.toUpperCase():"GET",this.D=n,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():us.g(),this.g.onreadystatechange=R(b(this.Ca,this));try{this.B=!0,this.g.open(r,String(n),!0),this.B=!1}catch(I){Ns(this,I);return}if(n=a||"",a=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var w in l)a.set(w,l[w]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const I of l.keys())a.set(I,l.get(I));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(a.keys()).find(I=>I.toLowerCase()=="content-type"),w=h.FormData&&n instanceof h.FormData,!(Array.prototype.indexOf.call(Ra,r,void 0)>=0)||l||w||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,T]of a)this.g.setRequestHeader(I,T);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(n),this.v=!1}catch(I){Ns(this,I)}};function Ns(n,r){n.h=!1,n.g&&(n.j=!0,n.g.abort(),n.j=!1),n.l=r,n.o=5,Os(n),ai(n)}function Os(n){n.A||(n.A=!0,G(n,"complete"),G(n,"error"))}i.abort=function(n){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=n||7,G(this,"complete"),G(this,"abort"),ai(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ai(this,!0)),V.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?Ds(this):this.Xa())},i.Xa=function(){Ds(this)};function Ds(n){if(n.h&&typeof c<"u"){if(n.v&&Ot(n)==4)setTimeout(n.Ca.bind(n),0);else if(G(n,"readystatechange"),Ot(n)==4){n.h=!1;try{const I=n.ca();t:switch(I){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}var a;if(!(a=r)){var l;if(l=I===0){let T=String(n.D).match(bs)[1]||null;!T&&h.self&&h.self.location&&(T=h.self.location.protocol.slice(0,-1)),l=!Ca.test(T?T.toLowerCase():"")}a=l}if(a)G(n,"complete"),G(n,"success");else{n.o=6;try{var w=Ot(n)>2?n.g.statusText:""}catch{w=""}n.l=w+" ["+n.ca()+"]",Os(n)}}finally{ai(n)}}}}function ai(n,r){if(n.g){n.m&&(clearTimeout(n.m),n.m=null);const a=n.g;n.g=null,r||G(n,"ready");try{a.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Ot(n){return n.g?n.g.readyState:0}i.ca=function(){try{return Ot(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(n){if(this.g){var r=this.g.responseText;return n&&r.indexOf(n)==0&&(r=r.substring(n.length)),ca(r)}};function Ls(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.F){case"":case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Pa(n){const r={};n=(n.g&&Ot(n)>=2&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<n.length;l++){if(d(n[l]))continue;var a=pa(n[l]);const w=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const I=r[w]||[];r[w]=I,I.push(a)}ia(r,function(l){return l.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Le(n,r,a){return a&&a.internalChannelParams&&a.internalChannelParams[n]||r}function Ms(n){this.za=0,this.i=[],this.j=new Te,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Le("failFast",!1,n),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Le("baseRetryDelayMs",5e3,n),this.Za=Le("retryDelaySeedMs",1e4,n),this.Ta=Le("forwardChannelMaxRetries",2,n),this.va=Le("forwardChannelRequestTimeoutMs",2e4,n),this.ma=n&&n.xmlHttpFactory||void 0,this.Ua=n&&n.Rb||void 0,this.Aa=n&&n.useFetchStreams||!1,this.O=void 0,this.L=n&&n.supportsCrossDomainXhr||!1,this.M="",this.h=new ys(n&&n.concurrentRequestLimit),this.Ba=new Aa,this.S=n&&n.fastHandshake||!1,this.R=n&&n.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=n&&n.Pb||!1,n&&n.ua&&this.j.ua(),n&&n.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&n&&n.detectBufferingProxy||!1,this.ia=void 0,n&&n.longPollingTimeout&&n.longPollingTimeout>0&&(this.ia=n.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Ms.prototype,i.ka=8,i.I=1,i.connect=function(n,r,a,l){K(0),this.W=n,this.H=r||{},a&&l!==void 0&&(this.H.OSID=a,this.H.OAID=l),this.F=this.X,this.J=Ws(this,null,this.W),hi(this)};function on(n){if(Us(n),n.I==3){var r=n.V++,a=lt(n.J);if(x(a,"SID",n.M),x(a,"RID",r),x(a,"TYPE","terminate"),Me(n,a),r=new Rt(n,n.j,r),r.M=2,r.A=ri(lt(a)),a=!1,h.navigator&&h.navigator.sendBeacon)try{a=h.navigator.sendBeacon(r.A.toString(),"")}catch{}!a&&h.Image&&(new Image().src=r.A,a=!0),a||(r.g=zs(r.j,null),r.g.ea(r.A)),r.F=Date.now(),si(r)}$s(n)}function ci(n){n.g&&(cn(n),n.g.cancel(),n.g=null)}function Us(n){ci(n),n.v&&(h.clearTimeout(n.v),n.v=null),li(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&h.clearTimeout(n.m),n.m=null)}function hi(n){if(!_s(n.h)&&!n.m){n.m=!0;var r=n.Ea;tt||u(),Y||(tt(),Y=!0),g.add(r,n),n.D=0}}function Na(n,r){return ws(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=r.G.concat(n.i),!0):n.I==1||n.I==2||n.D>=(n.Sa?0:n.Ta)?!1:(n.m=Ee(b(n.Ea,n,r),Hs(n,n.D)),n.D++,!0)}i.Ea=function(n){if(this.m)if(this.m=null,this.I==1){if(!n){this.V=Math.floor(Math.random()*1e5),n=this.V++;const w=new Rt(this,this.j,n);let I=this.o;if(this.U&&(I?(I=Xn(I),Zn(I,this.U)):I=this.U),this.u!==null||this.R||(w.J=I,I=null),this.S)t:{for(var r=0,a=0;a<this.i.length;a++){e:{var l=this.i[a];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break e}l=void 0}if(l===void 0)break;if(r+=l,r>4096){r=a;break t}if(r===4096||a===this.i.length-1){r=a+1;break t}}r=1e3}else r=1e3;r=js(this,w,r),a=lt(this.J),x(a,"RID",n),x(a,"CVER",22),this.G&&x(a,"X-HTTP-Session-Id",this.G),Me(this,a),I&&(this.R?r="headers="+Se(Ps(I))+"&"+r:this.u&&rn(a,this.u,I)),en(this.h,w),this.Ra&&x(a,"TYPE","init"),this.S?(x(a,"$req",r),x(a,"SID","null"),w.U=!0,Yi(w,a,null)):Yi(w,a,r),this.I=2}}else this.I==3&&(n?xs(this,n):this.i.length==0||_s(this.h)||xs(this))};function xs(n,r){var a;r?a=r.l:a=n.V++;const l=lt(n.J);x(l,"SID",n.M),x(l,"RID",a),x(l,"AID",n.K),Me(n,l),n.u&&n.o&&rn(l,n.u,n.o),a=new Rt(n,n.j,a,n.D+1),n.u===null&&(a.J=n.o),r&&(n.i=r.G.concat(n.i)),r=js(n,a,1e3),a.H=Math.round(n.va*.5)+Math.round(n.va*.5*Math.random()),en(n.h,a),Yi(a,l,r)}function Me(n,r){n.H&&ei(n.H,function(a,l){x(r,l,a)}),n.l&&ei({},function(a,l){x(r,l,a)})}function js(n,r,a){a=Math.min(n.i.length,a);const l=n.l?b(n.l.Ka,n.l,n):null;t:{var w=n.i;let A=-1;for(;;){const W=["count="+a];A==-1?a>0?(A=w[0].g,W.push("ofs="+A)):A=0:W.push("ofs="+A);let j=!0;for(let z=0;z<a;z++){var I=w[z].g;const ut=w[z].map;if(I-=A,I<0)A=Math.max(0,w[z].g-100),j=!1;else try{I="req"+I+"_"||"";try{var T=ut instanceof Map?ut:Object.entries(ut);for(const[ue,Dt]of T){let Lt=Dt;m(Dt)&&(Lt=zi(Dt)),W.push(I+ue+"="+encodeURIComponent(Lt))}}catch(ue){throw W.push(I+"type="+encodeURIComponent("_badmap")),ue}}catch{l&&l(ut)}}if(j){T=W.join("&");break t}}T=void 0}return n=n.i.splice(0,a),r.G=n,T}function Fs(n){if(!n.g&&!n.v){n.Y=1;var r=n.Da;tt||u(),Y||(tt(),Y=!0),g.add(r,n),n.A=0}}function an(n){return n.g||n.v||n.A>=3?!1:(n.Y++,n.v=Ee(b(n.Da,n),Hs(n,n.A)),n.A++,!0)}i.Da=function(){if(this.v=null,Vs(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var n=4*this.T;this.j.info("BP detection timer enabled: "+n),this.B=Ee(b(this.Wa,this),n)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,K(10),ci(this),Vs(this))};function cn(n){n.B!=null&&(h.clearTimeout(n.B),n.B=null)}function Vs(n){n.g=new Rt(n,n.j,"rpc",n.Y),n.u===null&&(n.g.J=n.o),n.g.P=0;var r=lt(n.na);x(r,"RID","rpc"),x(r,"SID",n.M),x(r,"AID",n.K),x(r,"CI",n.F?"0":"1"),!n.F&&n.ia&&x(r,"TO",n.ia),x(r,"TYPE","xmlhttp"),Me(n,r),n.u&&n.o&&rn(r,n.u,n.o),n.O&&(n.g.H=n.O);var a=n.g;n=n.ba,a.M=1,a.A=ri(lt(r)),a.u=null,a.R=!0,ps(a,n)}i.Va=function(){this.C!=null&&(this.C=null,ci(this),an(this),K(19))};function li(n){n.C!=null&&(h.clearTimeout(n.C),n.C=null)}function Bs(n,r){var a=null;if(n.g==r){li(n),cn(n),n.g=null;var l=2}else if(tn(n.h,r))a=r.G,vs(n.h,r),l=1;else return;if(n.I!=0){if(r.o)if(l==1){a=r.u?r.u.length:0,r=Date.now()-r.F;var w=n.D;l=Ki(),G(l,new ls(l,a)),hi(n)}else Fs(n);else if(w=r.m,w==3||w==0&&r.X>0||!(l==1&&Na(n,r)||l==2&&an(n)))switch(a&&a.length>0&&(r=n.h,r.i=r.i.concat(a)),w){case 1:Kt(n,5);break;case 4:Kt(n,10);break;case 3:Kt(n,6);break;default:Kt(n,2)}}}function Hs(n,r){let a=n.Qa+Math.floor(Math.random()*n.Za);return n.isActive()||(a*=2),a*r}function Kt(n,r){if(n.j.info("Error code "+r),r==2){var a=b(n.bb,n),l=n.Ua;const w=!l;l=new Pt(l||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Ae(l,"https"),ri(l),w?Sa(l.toString(),a):ka(l.toString(),a)}else K(2);n.I=0,n.l&&n.l.pa(r),$s(n),Us(n)}i.bb=function(n){n?(this.j.info("Successfully pinged google.com"),K(2)):(this.j.info("Failed to ping google.com"),K(1))};function $s(n){if(n.I=0,n.ja=[],n.l){const r=Is(n.h);(r.length!=0||n.i.length!=0)&&(L(n.ja,r),L(n.ja,n.i),n.h.i.length=0,U(n.i),n.i.length=0),n.l.oa()}}function Ws(n,r,a){var l=a instanceof Pt?lt(a):new Pt(a);if(l.g!="")r&&(l.g=r+"."+l.g),Ce(l,l.u);else{var w=h.location;l=w.protocol,r=r?r+"."+w.hostname:w.hostname,w=+w.port;const I=new Pt(null);l&&Ae(I,l),r&&(I.g=r),w&&Ce(I,w),a&&(I.h=a),l=I}return a=n.G,r=n.wa,a&&r&&x(l,a,r),x(l,"VER",n.ka),Me(n,l),l}function zs(n,r,a){if(r&&!n.L)throw Error("Can't create secondary domain capable XhrIo object.");return r=n.Aa&&!n.ma?new V(new sn({ab:a})):new V(n.ma),r.Fa(n.L),r}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function qs(){}i=qs.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function et(n,r){q.call(this),this.g=new Ms(r),this.l=n,this.h=r&&r.messageUrlParams||null,n=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.o=n,n=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(n?n["X-WebChannel-Content-Type"]=r.messageContentType:n={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.sa&&(n?n["X-WebChannel-Client-Profile"]=r.sa:n={"X-WebChannel-Client-Profile":r.sa}),this.g.U=n,(n=r&&r.Qb)&&!d(n)&&(this.g.u=n),this.A=r&&r.supportsCrossDomainXhr||!1,this.v=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!d(r)&&(this.g.G=r,n=this.h,n!==null&&r in n&&(n=this.h,r in n&&delete n[r])),this.j=new le(this)}E(et,q),et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},et.prototype.close=function(){on(this.g)},et.prototype.o=function(n){var r=this.g;if(typeof n=="string"){var a={};a.__data__=n,n=a}else this.v&&(a={},a.__data__=zi(n),n=a);r.i.push(new ya(r.Ya++,n)),r.I==3&&hi(r)},et.prototype.N=function(){this.g.l=null,delete this.j,on(this.g),delete this.g,et.Z.N.call(this)};function Gs(n){qi.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var r=n.__sm__;if(r){t:{for(const a in r){n=a;break t}n=void 0}(this.i=n)&&(n=this.i,r=r!==null&&n in r?r[n]:void 0),this.data=r}else this.data=n}E(Gs,qi);function Ks(){Gi.call(this),this.status=1}E(Ks,Gi);function le(n){this.g=n}E(le,qs),le.prototype.ra=function(){G(this.g,"a")},le.prototype.qa=function(n){G(this.g,new Gs(n))},le.prototype.pa=function(n){G(this.g,new Ks)},le.prototype.oa=function(){G(this.g,"b")},et.prototype.send=et.prototype.o,et.prototype.open=et.prototype.m,et.prototype.close=et.prototype.close,q.prototype.listen=q.prototype.J,V.prototype.listenOnce=V.prototype.K,V.prototype.getLastError=V.prototype.Ha,V.prototype.getLastErrorCode=V.prototype.ya,V.prototype.getStatus=V.prototype.ca,V.prototype.getResponseJson=V.prototype.La,V.prototype.getResponseText=V.prototype.la,V.prototype.send=V.prototype.ea,V.prototype.setWithCredentials=V.prototype.Fa}).apply(typeof di<"u"?di:typeof self<"u"?self:typeof window<"u"?window:{});const ar="@firebase/firestore",cr="4.9.2";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/let Ke="12.3.0";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ye=new On("@firebase/firestore");function ot(i,...t){if(ye.logLevel<=D.DEBUG){const e=t.map(Un);ye.debug(`Firestore (${Ke}): ${i}`,...e)}}function oo(i,...t){if(ye.logLevel<=D.ERROR){const e=t.map(Un);ye.error(`Firestore (${Ke}): ${i}`,...e)}}function fh(i,...t){if(ye.logLevel<=D.WARN){const e=t.map(Un);ye.warn(`Firestore (${Ke}): ${i}`,...e)}}function Un(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/function We(i,t,e){let s="Unexpected state";typeof t=="string"?s=t:e=t,ao(i,s,e)}function ao(i,t,e){let s=`FIRESTORE (${Ke}) INTERNAL ASSERTION FAILED: ${t} (ID: ${i.toString(16)})`;if(e!==void 0)try{s+=" CONTEXT: "+JSON.stringify(e)}catch{s+=" CONTEXT: "+e}throw oo(s),new Error(s)}function Fe(i,t,e,s){let o="Unexpected state";typeof e=="string"?o=e:s=e,i||ao(t,o,s)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const N={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class O extends wt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ve{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class co{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ph{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(J.UNAUTHENTICATED)))}shutdown(){}}class gh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class mh{constructor(t){this.t=t,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Fe(this.o===void 0,42304);let s=this.i;const o=_=>this.i!==s?(s=this.i,e(_)):Promise.resolve();let c=new Ve;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Ve,t.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const _=c;t.enqueueRetryable((async()=>{await _.promise,await o(this.currentUser)}))},m=_=>{ot("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((_=>m(_))),setTimeout((()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?m(_):(ot("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Ve)}}),0),h()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((s=>this.i!==t?(ot("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new co(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Fe(t===null||typeof t=="string",2055,{h:t}),new J(t)}}class yh{constructor(t,e,s){this.P=t,this.T=e,this.I=s,this.type="FirstParty",this.user=J.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class _h{constructor(t,e,s){this.P=t,this.T=e,this.I=s}getToken(){return Promise.resolve(new yh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(J.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class hr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wh{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Q(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Fe(this.o===void 0,3512);const s=c=>{c.error!=null&&ot("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,ot("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?e(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable((()=>s(c)))};const o=c=>{ot("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>o(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):ot("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new hr(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(Fe(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new hr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function vh(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<i;s++)e[s]=Math.floor(256*Math.random());return e}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ih{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=vh(40);for(let c=0;c<o.length;++c)s.length<20&&o[c]<e&&(s+=t.charAt(o[c]%62))}return s}}function $t(i,t){return i<t?-1:i>t?1:0}function bh(i,t){const e=Math.min(i.length,t.length);for(let s=0;s<e;s++){const o=i.charAt(s),c=t.charAt(s);if(o!==c)return gn(o)===gn(c)?$t(o,c):gn(o)?1:-1}return $t(i.length,t.length)}const Eh=55296,Th=57343;function gn(i){const t=i.charCodeAt(0);return t>=Eh&&t<=Th}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const lr="__name__";class dt{constructor(t,e,s){e===void 0?e=0:e>t.length&&We(637,{offset:e,range:t.length}),s===void 0?s=t.length-e:s>t.length-e&&We(1746,{length:s,range:t.length-e}),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return dt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof dt?t.forEach((s=>{e.push(s)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let o=0;o<s;o++){const c=dt.compareSegments(t.get(o),e.get(o));if(c!==0)return c}return $t(t.length,e.length)}static compareSegments(t,e){const s=dt.isNumericId(t),o=dt.isNumericId(e);return s&&!o?-1:!s&&o?1:s&&o?dt.extractNumericId(t).compare(dt.extractNumericId(e)):bh(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Mn.fromString(t.substring(4,t.length-2))}}class rt extends dt{construct(t,e,s){return new rt(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new O(N.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter((o=>o.length>0)))}return new rt(e)}static emptyPath(){return new rt([])}}const Sh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xt extends dt{construct(t,e,s){return new Xt(t,e,s)}static isValidIdentifier(t){return Sh.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lr}static keyField(){return new Xt([lr])}static fromServerFormat(t){const e=[];let s="",o=0;const c=()=>{if(s.length===0)throw new O(N.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let h=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new O(N.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const _=t[o+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new O(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=_,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(c(),o++)}if(c(),h)throw new O(N.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Xt(e)}static emptyPath(){return new Xt([])}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Yt{constructor(t){this.path=t}static fromPath(t){return new Yt(rt.fromString(t))}static fromName(t){return new Yt(rt.fromString(t).popFirst(5))}static empty(){return new Yt(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&rt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return rt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Yt(new rt(t.slice()))}}function kh(i,t,e,s){if(t===!0&&s===!0)throw new O(N.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)}function Ah(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Ch(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=(function(e){return e.constructor?e.constructor.name:null})(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":We(12329,{type:typeof i})}function Rh(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new O(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ch(i);throw new O(N.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return i}/**
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
*/function H(i,t){const e={typeString:i};return t&&(e.value=t),e}function Je(i,t){if(!Ah(i))throw new O(N.INVALID_ARGUMENT,"JSON must be an object");let e;for(const s in t)if(t[s]){const o=t[s].typeString,c="value"in t[s]?{value:t[s].value}:void 0;if(!(s in i)){e=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){e=`JSON field '${s}' must be a ${o}.`;break}if(c!==void 0&&h!==c.value){e=`Expected '${s}' field to equal '${c.value}'`;break}}if(e)throw new O(N.INVALID_ARGUMENT,e);return!0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ur=-62135596800,dr=1e6;class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(t){return ft.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor((t-1e3*e)*dr);return new ft(e,s)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ur)throw new O(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/dr}_compareTo(t){return this.seconds===t.seconds?$t(this.nanoseconds,t.nanoseconds):$t(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ft._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Je(t,ft._jsonSchema))return new ft(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-ur;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ft._jsonSchemaVersion="firestore/timestamp/1.0",ft._jsonSchema={type:H("string",ft._jsonSchemaVersion),seconds:H("number"),nanoseconds:H("number")};function Ph(i){return i.name==="IndexedDbTransactionError"}/**
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
*/class Nh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ie{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Nh("Invalid base64 string: "+o):o}})(t);return new ie(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let c=0;c<s.length;++c)o+=String.fromCharCode(s[c]);return o})(t);return new ie(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const e=new Uint8Array(t.length);for(let s=0;s<t.length;s++)e[s]=t.charCodeAt(s);return e})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $t(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ie.EMPTY_BYTE_STRING=new ie("");const Sn="(default)";class Ti{constructor(t,e){this.projectId=t,this.database=e||Sn}static empty(){return new Ti("","")}get isDefaultDatabase(){return this.database===Sn}isEqual(t){return t instanceof Ti&&t.projectId===this.projectId&&t.database===this.database}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Oh{constructor(t,e=null,s=[],o=[],c=null,h="F",m=null,_=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=o,this.limit=c,this.limitType=h,this.startAt=m,this.endAt=_,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Dh(i){return new Oh(i)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fr,P;(P=fr||(fr={}))[P.OK=0]="OK",P[P.CANCELLED=1]="CANCELLED",P[P.UNKNOWN=2]="UNKNOWN",P[P.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",P[P.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",P[P.NOT_FOUND=5]="NOT_FOUND",P[P.ALREADY_EXISTS=6]="ALREADY_EXISTS",P[P.PERMISSION_DENIED=7]="PERMISSION_DENIED",P[P.UNAUTHENTICATED=16]="UNAUTHENTICATED",P[P.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",P[P.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",P[P.ABORTED=10]="ABORTED",P[P.OUT_OF_RANGE=11]="OUT_OF_RANGE",P[P.UNIMPLEMENTED=12]="UNIMPLEMENTED",P[P.INTERNAL=13]="INTERNAL",P[P.UNAVAILABLE=14]="UNAVAILABLE",P[P.DATA_LOSS=15]="DATA_LOSS";/**
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
*/new Mn([4294967295,4294967295],0);/**
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
*/const Lh=41943040;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Mh=1048576;function mn(){return typeof document<"u"?document:null}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Uh{constructor(t,e,s=1e3,o=1.5,c=6e4){this.Mi=t,this.timerId=e,this.d_=s,this.A_=o,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,e-s);o>0&&ot("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class xn{constructor(t,e,s,o,c){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=o,this.removalCallback=c,this.deferred=new Ve,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,o,c){const h=Date.now()+s,m=new xn(t,e,h,o,c);return m.start(s),m}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(N.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var pr,gr;(gr=pr||(pr={})).Ma="default",gr.Cache="cache";/**
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
*/function xh(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const mr=new Map;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ho="firestore.googleapis.com",yr=!0;class _r{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new O(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ho,this.ssl=yr}else this.host=t.host,this.ssl=t.ssl??yr;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Lh;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Mh)throw new O(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}kh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xh(t.experimentalLongPollingOptions??{}),(function(e){if(e.timeoutSeconds!==void 0){if(isNaN(e.timeoutSeconds))throw new O(N.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new O(N.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new O(N.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(e,s){return e.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class lo{constructor(t,e,s,o){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _r({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _r(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(e){if(!e)return new ph;switch(e.type){case"firstParty":return new _h(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new O(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const e=mr.get(t);e&&(ot("ComponentProvider","Removing Datastore"),mr.delete(t),e.terminate())})(this),Promise.resolve()}}function jh(i,t,e,s={}){i=Rh(i,lo);const o=we(t),c=i._getSettings(),h={...c,emulatorOptions:i._getEmulatorOptions()},m=`${t}:${e}`;o&&(Pn(`https://${m}`),Nn("Firestore",!0)),c.host!==ho&&c.host!==m&&fh("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...c,host:m,ssl:o,emulatorOptions:s};if(!te(_,h)&&(i._setSettings(_),s.mockUserToken)){let b,S;if(typeof s.mockUserToken=="string")b=s.mockUserToken,S=J.MOCK_USER;else{b=to(s.mockUserToken,i._app?.options.projectId);const E=s.mockUserToken.sub||s.mockUserToken.user_id;if(!E)throw new O(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new J(E)}i._authCredentials=new gh(new co(b,S))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class jn{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new jn(this.firestore,t,this._query)}}class pt{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new pt(this.firestore,t,this._key)}toJSON(){return{type:pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,s){if(Je(e,pt._jsonSchema))return new pt(t,s||null,new Yt(rt.fromString(e.referencePath)))}}pt._jsonSchemaVersion="firestore/documentReference/1.0",pt._jsonSchema={type:H("string",pt._jsonSchemaVersion),referencePath:H("string")};class Fn extends jn{constructor(t,e,s){super(t,e,Dh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new pt(this.firestore,null,new Yt(t))}withConverter(t){return new Fn(this.firestore,t,this._path)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const wr="AsyncQueue";class vr{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Uh(this,"async_queue_retry"),this._c=()=>{const s=mn();s&&ot(wr,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const e=mn();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=mn();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new Ve;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Ph(t))throw t;ot(wr,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((s=>{throw this.nc=s,this.rc=!1,oo("INTERNAL UNHANDLED ERROR: ",Ir(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=e,e}enqueueAfterDelay(t,e,s){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const o=xn.createAndSchedule(this,t,e,s,(c=>this.hc(c)));return this.tc.push(o),o}uc(){this.nc&&We(47125,{Pc:Ir(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,s)=>e.targetTimeMs-s.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Ir(i){let t=i.message||"";return i.stack&&(t=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),t}class Fh extends lo{constructor(t,e,s,o){super(t,e,s,o),this.type="firestore",this._queue=new vr,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new vr(t),this._firestoreClient=void 0,await t}}}function Vh(i,t){const e=typeof i=="object"?i:Ln(),s=typeof i=="string"?i:Sn,o=Li(e,"firestore").getImmediate({identifier:s});if(!o._initialized){const c=Yr("firestore");c&&jh(o,...c)}return o}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class bt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new bt(ie.fromBase64String(t))}catch(e){throw new O(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new bt(ie.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Je(t,bt._jsonSchema))return bt.fromBase64String(t.bytes)}}bt._jsonSchemaVersion="firestore/bytes/1.0",bt._jsonSchema={type:H("string",bt._jsonSchemaVersion),bytes:H("string")};/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class uo{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Zt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return $t(this._lat,t._lat)||$t(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zt._jsonSchemaVersion}}static fromJSON(t){if(Je(t,Zt._jsonSchema))return new Zt(t.latitude,t.longitude)}}Zt._jsonSchemaVersion="firestore/geoPoint/1.0",Zt._jsonSchema={type:H("string",Zt._jsonSchemaVersion),latitude:H("number"),longitude:H("number")};/**
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
*/class Qt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(e,s){if(e.length!==s.length)return!1;for(let o=0;o<e.length;++o)if(e[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Qt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Je(t,Qt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Qt(t.vectorValues);throw new O(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Qt._jsonSchemaVersion="firestore/vectorValue/1.0",Qt._jsonSchema={type:H("string",Qt._jsonSchemaVersion),vectorValues:H("object")};const Bh=new RegExp("[~\\*/\\[\\]]");function Hh(i,t,e){if(t.search(Bh)>=0)throw br(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new uo(...t.split("."))._internalPath}catch{throw br(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function br(i,t,e,s,o){let c=`Function ${t}() called with invalid data`;c+=". ";let h="";return new O(N.INVALID_ARGUMENT,c+i+h)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class fo{constructor(t,e,s,o,c){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new $h(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(po("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class $h extends fo{data(){return super.data()}}function po(i,t){return typeof t=="string"?Hh(i,t):t instanceof uo?t._internalPath:t._delegate._internalPath}class fi{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class fe extends fo{constructor(t,e,s,o,c,h){super(t,e,s,o,h),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new mi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(po("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=fe._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()||(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED")),e}}fe._jsonSchemaVersion="firestore/documentSnapshot/1.0",fe._jsonSchema={type:H("string",fe._jsonSchemaVersion),bundleSource:H("string","DocumentSnapshot"),bundleName:H("string"),bundle:H("string")};class mi extends fe{data(t={}){return super.data(t)}}class Be{constructor(t,e,s,o){this._firestore=t,this._userDataWriter=e,this._snapshot=o,this.metadata=new fi(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((s=>{t.call(e,new mi(this._firestore,this._userDataWriter,s.key,s,new fi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let c=0;return s._snapshot.docChanges.map((h=>{const m=new mi(s._firestore,s._userDataWriter,h.doc.key,h.doc,new fi(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);return h.doc,{type:"added",doc:m,oldIndex:-1,newIndex:c++}}))}{let c=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((h=>o||h.type!==3)).map((h=>{const m=new mi(s._firestore,s._userDataWriter,h.doc.key,h.doc,new fi(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);let _=-1,b=-1;return h.type!==0&&(_=c.indexOf(h.doc.key),c=c.delete(h.doc.key)),h.type!==1&&(c=c.add(h.doc),b=c.indexOf(h.doc.key)),{type:Wh(h.type),doc:m,oldIndex:_,newIndex:b}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Be._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ih.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],s=[],o=[];return this.docs.forEach((c=>{c._document!==null&&(e.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Wh(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return We(61501,{type:i})}}Be._jsonSchemaVersion="firestore/querySnapshot/1.0",Be._jsonSchema={type:H("string",Be._jsonSchemaVersion),bundleSource:H("string","QuerySnapshot"),bundleName:H("string"),bundle:H("string")};(function(i,t=!0){(function(e){Ke=e})(oe),ee(new Ht("firestore",((e,{instanceIdentifier:s,options:o})=>{const c=e.getProvider("app").getImmediate(),h=new Fh(new mh(e.getProvider("auth-internal")),new wh(c,e.getProvider("app-check-internal")),(function(m,_){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new O(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ti(m.options.projectId,_)})(c,s),c);return o={useFetchStreams:t,...o},h._setSettings(o),h}),"PUBLIC").setMultipleInstances(!0)),gt(ar,cr,i),gt(ar,cr,"esm2020")})();function go(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zh=go,mo=new qe("auth","Firebase",go());/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Si=new On("@firebase/auth");function qh(i,...t){Si.logLevel<=D.WARN&&Si.warn(`Auth (${oe}): ${i}`,...t)}function yi(i,...t){Si.logLevel<=D.ERROR&&Si.error(`Auth (${oe}): ${i}`,...t)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ht(i,...t){throw Vn(i,...t)}function mt(i,...t){return Vn(i,...t)}function yo(i,t,e){const s={...zh(),[t]:e};return new qe("auth","Firebase",s).create(t,{appName:i.name})}function St(i){return yo(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vn(i,...t){if(typeof i!="string"){const e=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(e,...s)}return mo.create(i,...t)}function k(i,t,...e){if(!i)throw Vn(t,...e)}function Et(i){const t="INTERNAL ASSERTION FAILED: "+i;throw yi(t),new Error(t)}function At(i,t){i||Et(t)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function kn(){return typeof self<"u"&&self.location?.href||""}function Gh(){return Er()==="http:"||Er()==="https:"}function Er(){return typeof self<"u"&&self.location?.protocol||null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Kh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gh()||za()||"connection"in navigator)?navigator.onLine:!0}function Jh(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Xe{constructor(t,e){this.shortDelay=t,this.longDelay=e,At(e>t,"Short delay should be less than long delay!"),this.isMobile=$a()||qa()}get(){return Kh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Bn(i,t){At(i.emulator,"Emulator should always be set here");const{url:e}=i.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _o{static initialize(t,e,s){this.fetchImpl=t,e&&(this.headersImpl=e),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Xh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Yh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Zh=new Xe(3e4,6e4);function Ct(i,t){return i.tenantId&&!t.tenantId?{...t,tenantId:i.tenantId}:t}async function vt(i,t,e,s,o={}){return wo(i,o,async()=>{let c={},h={};s&&(t==="GET"?h=s:c={body:JSON.stringify(s)});const m=Ge({key:i.config.apiKey,...h}).slice(1),_=await i._getAdditionalHeaders();_["Content-Type"]="application/json",i.languageCode&&(_["X-Firebase-Locale"]=i.languageCode);const b={method:t,headers:_,...c};return Wa()||(b.referrerPolicy="no-referrer"),i.emulatorConfig&&we(i.emulatorConfig.host)&&(b.credentials="include"),_o.fetch()(await vo(i,i.config.apiHost,e,m),b)})}async function wo(i,t,e){i._canInitEmulator=!1;const s={...Xh,...t};try{const o=new tl(i),c=await Promise.race([e(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw pi(i,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const m=c.ok?h.errorMessage:h.error.message,[_,b]=m.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw pi(i,"credential-already-in-use",h);if(_==="EMAIL_EXISTS")throw pi(i,"email-already-in-use",h);if(_==="USER_DISABLED")throw pi(i,"user-disabled",h);const S=s[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(b)throw yo(i,S,b);ht(i,S)}}catch(o){if(o instanceof wt)throw o;ht(i,"network-request-failed",{message:String(o)})}}async function Ye(i,t,e,s,o={}){const c=await vt(i,t,e,s,o);return"mfaPendingCredential"in c&&ht(i,"multi-factor-auth-required",{_serverResponse:c}),c}async function vo(i,t,e,s){const o=`${t}${e}?${s}`,c=i,h=c.config.emulator?Bn(i.config,o):`${i.config.apiScheme}://${o}`;return Yh.includes(e)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}function Qh(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tl{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,s)=>{this.timer=setTimeout(()=>s(mt(this.auth,"network-request-failed")),Zh.get())})}}function pi(i,t,e){const s={appName:i.name};e.email&&(s.email=e.email),e.phoneNumber&&(s.phoneNumber=e.phoneNumber);const o=mt(i,t,s);return o.customData._tokenResponse=e,o}function Tr(i){return i!==void 0&&i.enterprise!==void 0}class el{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return Qh(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function il(i,t){return vt(i,"GET","/v2/recaptchaConfig",Ct(i,t))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function nl(i,t){return vt(i,"POST","/v1/accounts:delete",t)}async function ki(i,t){return vt(i,"POST","/v1/accounts:lookup",t)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function He(i){if(i)try{const t=new Date(Number(i));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function sl(i,t=!1){const e=nt(i),s=await e.getIdToken(t),o=Hn(s);k(o&&o.exp&&o.auth_time&&o.iat,e.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c?.sign_in_provider;return{claims:o,token:s,authTime:He(yn(o.auth_time)),issuedAtTime:He(yn(o.iat)),expirationTime:He(yn(o.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function yn(i){return Number(i)*1e3}function Hn(i){const[t,e,s]=i.split(".");if(t===void 0||e===void 0||s===void 0)return yi("JWT malformed, contained fewer than 3 sections"),null;try{const o=Jr(e);return o?JSON.parse(o):(yi("Failed to decode base64 JWT payload"),null)}catch(o){return yi("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Sr(i){const t=Hn(i);return k(t,"internal-error"),k(typeof t.exp<"u","internal-error"),k(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function _e(i,t,e=!1){if(e)return t;try{return await t}catch(s){throw s instanceof wt&&rl(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function rl({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ol{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class An{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=He(this.lastLoginAt),this.creationTime=He(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
*/async function Ai(i){const t=i.auth,e=await i.getIdToken(),s=await _e(i,ki(t,{idToken:e}));k(s?.users.length,t,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const c=o.providerUserInfo?.length?Io(o.providerUserInfo):[],h=cl(i.providerData,c),m=i.isAnonymous,_=!(i.email&&o.passwordHash)&&!h?.length,b=m?_:!1,S={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new An(o.createdAt,o.lastLoginAt),isAnonymous:b};Object.assign(i,S)}async function al(i){const t=nt(i);await Ai(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function cl(i,t){return[...i.filter(e=>!t.some(s=>s.providerId===e.providerId)),...t]}function Io(i){return i.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function hl(i,t){const e=await wo(i,{},async()=>{const s=Ge({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:c}=i.config,h=await vo(i,o,"/v1/token",`key=${c}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:m,body:s};return i.emulatorConfig&&we(i.emulatorConfig.host)&&(_.credentials="include"),_o.fetch()(h,_)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function ll(i,t){return vt(i,"POST","/v2/accounts:revokeToken",Ct(i,t))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class pe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){k(t.idToken,"internal-error"),k(typeof t.idToken<"u","internal-error"),k(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Sr(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){k(t.length!==0,"internal-error");const e=Sr(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(k(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:s,refreshToken:o,expiresIn:c}=await hl(t,e);this.updateTokensAndExpiration(s,o,Number(c))}updateTokensAndExpiration(t,e,s){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,e){const{refreshToken:s,accessToken:o,expirationTime:c}=e,h=new pe;return s&&(k(typeof s=="string","internal-error",{appName:t}),h.refreshToken=s),o&&(k(typeof o=="string","internal-error",{appName:t}),h.accessToken=o),c&&(k(typeof c=="number","internal-error",{appName:t}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new pe,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Mt(i,t){k(typeof i=="string"||typeof i>"u","internal-error",{appName:t})}class at{constructor({uid:t,auth:e,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new ol(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new An(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const e=await _e(this,this.stsTokenManager.getToken(this.auth,t));return k(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return sl(this,t)}reload(){return al(this)}_assign(t){this!==t&&(k(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new at({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),e&&await Ai(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Q(this.auth.app))return Promise.reject(St(this.auth));const t=await this.getIdToken();return await _e(this,nl(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const s=e.displayName??void 0,o=e.email??void 0,c=e.phoneNumber??void 0,h=e.photoURL??void 0,m=e.tenantId??void 0,_=e._redirectEventId??void 0,b=e.createdAt??void 0,S=e.lastLoginAt??void 0,{uid:E,emailVerified:R,isAnonymous:U,providerData:L,stsTokenManager:M}=e;k(E&&M,t,"internal-error");const C=pe.fromJSON(this.name,M);k(typeof E=="string",t,"internal-error"),Mt(s,t.name),Mt(o,t.name),k(typeof R=="boolean",t,"internal-error"),k(typeof U=="boolean",t,"internal-error"),Mt(c,t.name),Mt(h,t.name),Mt(m,t.name),Mt(_,t.name),Mt(b,t.name),Mt(S,t.name);const B=new at({uid:E,auth:t,email:o,emailVerified:R,displayName:s,isAnonymous:U,photoURL:h,phoneNumber:c,tenantId:m,stsTokenManager:C,createdAt:b,lastLoginAt:S});return L&&Array.isArray(L)&&(B.providerData=L.map($=>({...$}))),_&&(B._redirectEventId=_),B}static async _fromIdTokenResponse(t,e,s=!1){const o=new pe;o.updateFromServerResponse(e);const c=new at({uid:e.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await Ai(c),c}static async _fromGetAccountInfoResponse(t,e,s){const o=e.users[0];k(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Io(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!c?.length,m=new pe;m.updateFromIdToken(s);const _=new at({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:h}),b={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new An(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!c?.length};return Object.assign(_,b),_}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const kr=new Map;function Tt(i){At(i instanceof Function,"Expected a class definition");let t=kr.get(i);return t?(At(t instanceof i,"Instance stored in cache mismatched with class"),t):(t=new i,kr.set(i,t),t)}/**
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
*/class bo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}bo.type="NONE";const Ar=bo;/**
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
*/function _i(i,t,e){return`firebase:${i}:${t}:${e}`}class ge{constructor(t,e,s){this.persistence=t,this.auth=e,this.userKey=s;const{config:o,name:c}=this.auth;this.fullUserKey=_i(this.userKey,o.apiKey,c),this.fullPersistenceKey=_i("persistence",o.apiKey,c),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await ki(this.auth,{idToken:t}).catch(()=>{});return e?at._fromGetAccountInfoResponse(this.auth,e,t):null}return at._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,s="authUser"){if(!e.length)return new ge(Tt(Ar),t,s);const o=(await Promise.all(e.map(async b=>{if(await b._isAvailable())return b}))).filter(b=>b);let c=o[0]||Tt(Ar);const h=_i(s,t.config.apiKey,t.name);let m=null;for(const b of e)try{const S=await b._get(h);if(S){let E;if(typeof S=="string"){const R=await ki(t,{idToken:S}).catch(()=>{});if(!R)break;E=await at._fromGetAccountInfoResponse(t,R,S)}else E=at._fromJSON(t,S);b!==c&&(m=E),c=b;break}}catch{}const _=o.filter(b=>b._shouldAllowMigration);return!c._shouldAllowMigration||!_.length?new ge(c,t,s):(c=_[0],m&&await c._set(h,m.toJSON()),await Promise.all(e.map(async b=>{if(b!==c)try{await b._remove(h)}catch{}})),new ge(c,t,s))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Cr(i){const t=i.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ko(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Eo(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Co(t))return"Blackberry";if(Ro(t))return"Webos";if(To(t))return"Safari";if((t.includes("chrome/")||So(t))&&!t.includes("edge/"))return"Chrome";if(Ao(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(e);if(s?.length===2)return s[1]}return"Other"}function Eo(i=X()){return/firefox\//i.test(i)}function To(i=X()){const t=i.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function So(i=X()){return/crios\//i.test(i)}function ko(i=X()){return/iemobile/i.test(i)}function Ao(i=X()){return/android/i.test(i)}function Co(i=X()){return/blackberry/i.test(i)}function Ro(i=X()){return/webos/i.test(i)}function $n(i=X()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function ul(i=X()){return $n(i)&&!!window.navigator?.standalone}function dl(){return Ga()&&document.documentMode===10}function Po(i=X()){return $n(i)||Ao(i)||Ro(i)||Co(i)||/windows phone/i.test(i)||ko(i)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function No(i,t=[]){let e;switch(i){case"Browser":e=Cr(X());break;case"Worker":e=`${Cr(X())}-${i}`;break;default:e=i}const s=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${oe}/${s}`}/**
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
*/class fl{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const s=c=>new Promise((h,m)=>{try{const _=t(c);h(_)}catch(_){m(_)}});s.onAbort=e,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const s of this.queue)await s(t),s.onAbort&&e.push(s.onAbort)}catch(s){e.reverse();for(const o of e)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
*/async function pl(i,t={}){return vt(i,"GET","/v2/passwordPolicy",Ct(i,t))}/**
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
*/const gl=6;class ml{constructor(t){const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??gl,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(e.meetsMinPasswordLength=t.length>=s),o&&(e.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(e,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,e,s,o,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class yl{constructor(t,e,s,o){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rr(this),this.idTokenSubscription=new Rr(this),this.beforeStateQueue=new fl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Tt(e)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ge.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await ki(this,{idToken:t}),s=await at._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(s)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Q(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let s=e,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,h=s?._redirectEventId,m=await this.tryRedirectSignIn(t);(!c||c===h)&&m?.user&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Ai(t)}catch(e){if(e?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Jh()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Q(this.app))return Promise.reject(St(this));const e=t?nt(t):null;return e&&k(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&k(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Q(this.app)?Promise.reject(St(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Q(this.app)?Promise.reject(St(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await pl(this),e=new ml(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new qe("auth","Firebase",t())}onAuthStateChanged(t,e,s){return this.registerStateListener(this.authStateSubscription,t,e,s)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,s){return this.registerStateListener(this.idTokenSubscription,t,e,s)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(s.tenantId=this.tenantId),await ll(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,e){const s=await this.getOrInitRedirectPersistenceManager(e);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Tt(t)||this._popupRedirectResolver;k(e,this,"argument-error"),this.redirectPersistenceManager=await ge.create(this,[Tt(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,s,o){if(this._deleted)return()=>{};const c=typeof e=="function"?e:e.next.bind(e);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(k(m,this,"internal-error"),m.then(()=>{h||c(this.currentUser)}),typeof e=="function"){const _=t.addObserver(e,s,o);return()=>{h=!0,_()}}else{const _=t.addObserver(e);return()=>{h=!0,_()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=No(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();e&&(t["X-Firebase-Client"]=e);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){if(Q(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&qh(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Wt(i){return nt(i)}class Rr{constructor(t){this.auth=t,this.observer=null,this.addObserver=tc(e=>this.observer=e)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Mi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _l(i){Mi=i}function Oo(i){return Mi.loadJS(i)}function wl(){return Mi.recaptchaEnterpriseScript}function vl(){return Mi.gapiScript}function Il(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class bl{constructor(){this.enterprise=new El}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class El{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const Tl="recaptcha-enterprise",Do="NO_RECAPTCHA";class Sl{constructor(t){this.type=Tl,this.auth=Wt(t)}async verify(t="verify",e=!1){async function s(c){if(!e){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(h,m)=>{il(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const b=new el(_);return c.tenantId==null?c._agentRecaptchaConfig=b:c._tenantRecaptchaConfigs[c.tenantId]=b,h(b.siteKey)}}).catch(_=>{m(_)})})}function o(c,h,m){const _=window.grecaptcha;Tr(_)?_.enterprise.ready(()=>{_.enterprise.execute(c,{action:t}).then(b=>{h(b)}).catch(()=>{h(Do)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new bl().execute("siteKey",{action:"verify"}):new Promise((c,h)=>{s(this.auth).then(m=>{if(!e&&Tr(window.grecaptcha))o(m,c,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let _=wl();_.length!==0&&(_+=m),Oo(_).then(()=>{o(m,c,h)}).catch(b=>{h(b)})}}).catch(m=>{h(m)})})}}async function Pr(i,t,e,s=!1,o=!1){const c=new Sl(i);let h;if(o)h=Do;else try{h=await c.verify(e)}catch{h=await c.verify(e,!0)}const m={...t};if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const _=m.phoneEnrollmentInfo.phoneNumber,b=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:b,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const _=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Ci(i,t,e,s,o){if(i._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Pr(i,t,e,e==="getOobCode");return s(i,c)}else return s(i,t).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Pr(i,t,e,e==="getOobCode");return s(i,h)}else return Promise.reject(c)})}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function kl(i,t){const e=Li(i,"auth");if(e.isInitialized()){const s=e.getImmediate(),o=e.getOptions();if(te(o,t??{}))return s;ht(s,"already-initialized")}return e.initialize({options:t})}function Al(i,t){const e=t?.persistence||[],s=(Array.isArray(e)?e:[e]).map(Tt);t?.errorMap&&i._updateErrorMap(t.errorMap),i._initializeWithPersistence(s,t?.popupRedirectResolver)}function Cl(i,t,e){const s=Wt(i);k(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,c=Lo(t),{host:h,port:m}=Rl(t),_=m===null?"":`:${m}`,b={url:`${c}//${h}${_}/`},S=Object.freeze({host:h,port:m,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){k(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),k(te(b,s.config.emulator)&&te(S,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=b,s.emulatorConfig=S,s.settings.appVerificationDisabledForTesting=!0,we(h)?(Pn(`${c}//${h}${_}`),Nn("Auth",!0)):Pl()}function Lo(i){const t=i.indexOf(":");return t<0?"":i.substr(0,t+1)}function Rl(i){const t=Lo(i),e=/(\/\/)?([^?#/]+)/.exec(i.substr(t.length));if(!e)return{host:"",port:null};const s=e[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const c=o[1];return{host:c,port:Nr(s.substr(c.length+1))}}else{const[c,h]=s.split(":");return{host:c,port:Nr(h)}}}function Nr(i){if(!i)return null;const t=Number(i);return isNaN(t)?null:t}function Pl(){function i(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Wn{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Et("not implemented")}_getIdTokenResponse(t){return Et("not implemented")}_linkToIdToken(t,e){return Et("not implemented")}_getReauthenticationResolver(t){return Et("not implemented")}}async function Nl(i,t){return vt(i,"POST","/v1/accounts:signUp",t)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Ol(i,t){return Ye(i,"POST","/v1/accounts:signInWithPassword",Ct(i,t))}async function Mo(i,t){return vt(i,"POST","/v1/accounts:sendOobCode",Ct(i,t))}async function Dl(i,t){return Mo(i,t)}async function Ll(i,t){return Mo(i,t)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Ml(i,t){return Ye(i,"POST","/v1/accounts:signInWithEmailLink",Ct(i,t))}async function Ul(i,t){return Ye(i,"POST","/v1/accounts:signInWithEmailLink",Ct(i,t))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ze extends Wn{constructor(t,e,s,o=null){super("password",s),this._email=t,this._password=e,this._tenantId=o}static _fromEmailAndPassword(t,e){return new ze(t,e,"password")}static _fromEmailAndCode(t,e,s=null){return new ze(t,e,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e?.email&&e?.password){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ci(t,e,"signInWithPassword",Ol);case"emailLink":return Ml(t,{email:this._email,oobCode:this._password});default:ht(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const s={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ci(t,s,"signUpPassword",Nl);case"emailLink":return Ul(t,{idToken:e,email:this._email,oobCode:this._password});default:ht(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function me(i,t){return Ye(i,"POST","/v1/accounts:signInWithIdp",Ct(i,t))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const xl="http://localhost";class ne extends Wn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ne(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):ht("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o,...c}=e;if(!s||!o)return null;const h=new ne(s,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(t){const e=this.buildRequest();return me(t,e)}_linkToIdToken(t,e){const s=this.buildRequest();return s.idToken=e,me(t,s)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,me(t,e)}buildRequest(){const t={requestUri:xl,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Ge(e)}return t}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function jl(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Fl(i){const t=Ue(xe(i)).link,e=t?Ue(xe(t)).deep_link_id:null,s=Ue(xe(i)).deep_link_id;return(s?Ue(xe(s)).link:null)||s||e||t||i}class zn{constructor(t){const e=Ue(xe(t)),s=e.apiKey??null,o=e.oobCode??null,c=jl(e.mode??null);k(s&&o&&c,"argument-error"),this.apiKey=s,this.operation=c,this.code=o,this.continueUrl=e.continueUrl??null,this.languageCode=e.lang??null,this.tenantId=e.tenantId??null}static parseLink(t){const e=Fl(t);try{return new zn(e)}catch{return null}}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ve{constructor(){this.providerId=ve.PROVIDER_ID}static credential(t,e){return ze._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const s=zn.parseLink(e);return k(s,"argument-error"),ze._fromEmailAndCode(t,s.code,s.tenantId)}}ve.PROVIDER_ID="password";ve.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ve.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Uo{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
*/class Ze extends Uo{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ut extends Ze{constructor(){super("facebook.com")}static credential(t){return ne._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ut.credential(t.oauthAccessToken)}catch{return null}}}Ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ut.PROVIDER_ID="facebook.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class xt extends Ze{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ne._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:s}=t;if(!e&&!s)return null;try{return xt.credential(e,s)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class jt extends Ze{constructor(){super("github.com")}static credential(t){return ne._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return jt.credential(t.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ft extends Ze{constructor(){super("twitter.com")}static credential(t,e){return ne._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:s}=t;if(!e||!s)return null;try{return Ft.credential(e,s)}catch{return null}}}Ft.TWITTER_SIGN_IN_METHOD="twitter.com";Ft.PROVIDER_ID="twitter.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Vl(i,t){return Ye(i,"POST","/v1/accounts:signUp",Ct(i,t))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class se{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,s,o=!1){const c=await at._fromIdTokenResponse(t,s,o),h=Or(s);return new se({user:c,providerId:h,_tokenResponse:s,operationType:e})}static async _forOperation(t,e,s){await t._updateTokensIfNecessary(s,!0);const o=Or(s);return new se({user:t,providerId:o,_tokenResponse:s,operationType:e})}}function Or(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ri extends wt{constructor(t,e,s,o){super(e.code,e.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Ri.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,e,s,o){return new Ri(t,e,s,o)}}function xo(i,t,e,s){return(t==="reauthenticate"?e._getReauthenticationResolver(i):e._getIdTokenResponse(i)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ri._fromErrorAndOperation(i,o,t,s):o})}async function Bl(i,t,e=!1){const s=await _e(i,t._linkToIdToken(i.auth,await i.getIdToken()),e);return se._forOperation(i,"link",s)}/**
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
*/async function Hl(i,t,e=!1){const{auth:s}=i;if(Q(s.app))return Promise.reject(St(s));const o="reauthenticate";try{const c=await _e(i,xo(s,o,t,i),e);k(c.idToken,s,"internal-error");const h=Hn(c.idToken);k(h,s,"internal-error");const{sub:m}=h;return k(i.uid===m,s,"user-mismatch"),se._forOperation(i,o,c)}catch(c){throw c?.code==="auth/user-not-found"&&ht(s,"user-mismatch"),c}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function jo(i,t,e=!1){if(Q(i.app))return Promise.reject(St(i));const s="signIn",o=await xo(i,s,t),c=await se._fromIdTokenResponse(i,s,o);return e||await i._updateCurrentUser(c.user),c}async function $l(i,t){return jo(Wt(i),t)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Wl(i,t,e){k(e.url?.length>0,i,"invalid-continue-uri"),k(typeof e.dynamicLinkDomain>"u"||e.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),k(typeof e.linkDomain>"u"||e.linkDomain.length>0,i,"invalid-hosting-link-domain"),t.continueUrl=e.url,t.dynamicLinkDomain=e.dynamicLinkDomain,t.linkDomain=e.linkDomain,t.canHandleCodeInApp=e.handleCodeInApp,e.iOS&&(k(e.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),t.iOSBundleId=e.iOS.bundleId),e.android&&(k(e.android.packageName.length>0,i,"missing-android-pkg-name"),t.androidInstallApp=e.android.installApp,t.androidMinimumVersionCode=e.android.minimumVersion,t.androidPackageName=e.android.packageName)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Fo(i){const t=Wt(i);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function zl(i,t,e){const s=Wt(i);await Ci(s,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Ll)}async function ql(i,t,e){if(Q(i.app))return Promise.reject(St(i));const s=Wt(i),o=await Ci(s,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Vl).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&Fo(i),h}),c=await se._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(c.user),c}function Gl(i,t,e){return Q(i.app)?Promise.reject(St(i)):$l(nt(i),ve.credential(t,e)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Fo(i),s})}async function Vo(i,t){const e=nt(i),s={requestType:"VERIFY_EMAIL",idToken:await i.getIdToken()};t&&Wl(e.auth,s,t);const{email:o}=await Dl(e.auth,s);o!==i.email&&await i.reload()}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Kl(i,t){return vt(i,"POST","/v1/accounts:update",t)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Jl(i,{displayName:t,photoURL:e}){if(t===void 0&&e===void 0)return;const s=nt(i),o={idToken:await s.getIdToken(),displayName:t,photoUrl:e,returnSecureToken:!0},c=await _e(s,Kl(s.auth,o));s.displayName=c.displayName||null,s.photoURL=c.photoUrl||null;const h=s.providerData.find(({providerId:m})=>m==="password");h&&(h.displayName=s.displayName,h.photoURL=s.photoURL),await s._updateTokensIfNecessary(c)}function Xl(i,t,e,s){return nt(i).onIdTokenChanged(t,e,s)}function Yl(i,t,e){return nt(i).beforeAuthStateChanged(t,e)}function Zl(i,t,e,s){return nt(i).onAuthStateChanged(t,e,s)}function qn(i){return nt(i).signOut()}const Pi="__sak";/**
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
*/class Bo{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Pi,"1"),this.storage.removeItem(Pi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ql=1e3,tu=10;class Ho extends Bo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Po(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const s=this.storage.getItem(e),o=this.localCache[e];s!==o&&t(e,o,s)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((h,m,_)=>{this.notifyListeners(h,_)});return}const s=t.key;e?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!e&&this.localCache[s]===h||this.notifyListeners(s,h)},c=this.storage.getItem(s);dl()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,tu):o()}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:s}),!0)})},Ql)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ho.type="LOCAL";const eu=Ho;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class $o extends Bo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}$o.type="SESSION";const Wo=$o;/**
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
*/function iu(i){return Promise.all(i.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
*/class Ui{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(o=>o.isListeningto(t));if(e)return e;const s=new Ui(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:s,eventType:o,data:c}=e.data,h=this.handlersMap[o];if(!h?.size)return;e.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async b=>b(e.origin,c)),_=await iu(m);e.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:_})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ui.receivers=[];/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Gn(i="",t=10){let e="";for(let s=0;s<t;s++)e+=Math.floor(Math.random()*10);return i+e}/**
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
*/class nu{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((m,_)=>{const b=Gn("",20);o.port1.start();const S=setTimeout(()=>{_(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(E){const R=E;if(R.data.eventId===b)switch(R.data.status){case"ack":clearTimeout(S),c=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),m(R.data.response);break;default:clearTimeout(S),clearTimeout(c),_(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:t,eventId:b,data:e},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function yt(){return window}function su(i){yt().location.href=i}/**
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
*/function zo(){return typeof yt().WorkerGlobalScope<"u"&&typeof yt().importScripts=="function"}async function ru(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ou(){return navigator?.serviceWorker?.controller||null}function au(){return zo()?self:null}/**
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
*/const qo="firebaseLocalStorageDb",cu=1,Ni="firebaseLocalStorage",Go="fbase_key";class Qe{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function xi(i,t){return i.transaction([Ni],t?"readwrite":"readonly").objectStore(Ni)}function hu(){const i=indexedDB.deleteDatabase(qo);return new Qe(i).toPromise()}function Cn(){const i=indexedDB.open(qo,cu);return new Promise((t,e)=>{i.addEventListener("error",()=>{e(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Ni,{keyPath:Go})}catch(o){e(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Ni)?t(s):(s.close(),await hu(),t(await Cn()))})})}async function Dr(i,t,e){const s=xi(i,!0).put({[Go]:t,value:e});return new Qe(s).toPromise()}async function lu(i,t){const e=xi(i,!1).get(t),s=await new Qe(e).toPromise();return s===void 0?null:s.value}function Lr(i,t){const e=xi(i,!0).delete(t);return new Qe(e).toPromise()}const uu=800,du=3;class Ko{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cn(),this.db)}async _withRetries(t){let e=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(e++>du)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ui._getInstance(au()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await ru(),!this.activeServiceWorker)return;this.sender=new nu(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ou()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Cn();return await Dr(t,Pi,"1"),await Lr(t,Pi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(s=>Dr(s,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(s=>lu(s,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Lr(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const c=xi(o,!1).getAll();return new Qe(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:c}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),e.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),e.push(o));return e}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ko.type="LOCAL";const fu=Ko;new Xe(3e4,6e4);/**
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
*/function pu(i,t){return t?Tt(t):(k(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
*/class Kn extends Wn{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return me(t,this._buildIdpRequest())}_linkToIdToken(t,e){return me(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return me(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function gu(i){return jo(i.auth,new Kn(i),i.bypassAuthState)}function mu(i){const{auth:t,user:e}=i;return k(e,t,"internal-error"),Hl(e,new Kn(i),i.bypassAuthState)}async function yu(i){const{auth:t,user:e}=i;return k(e,t,"internal-error"),Bl(e,new Kn(i),i.bypassAuthState)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Jo{constructor(t,e,s,o,c=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:s,postBody:o,tenantId:c,error:h,type:m}=t;if(h){this.reject(h);return}const _={auth:this.auth,requestUri:e,sessionId:s,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(_))}catch(b){this.reject(b)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return gu;case"linkViaPopup":case"linkViaRedirect":return yu;case"reauthViaPopup":case"reauthViaRedirect":return mu;default:ht(this.auth,"internal-error")}}resolve(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const _u=new Xe(2e3,1e4);class de extends Jo{constructor(t,e,s,o,c){super(t,e,o,c),this.provider=s,this.authWindow=null,this.pollId=null,de.currentPopupAction&&de.currentPopupAction.cancel(),de.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return k(t,this.auth,"internal-error"),t}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const t=Gn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,de.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,_u.get())};t()}}de.currentPopupAction=null;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const wu="pendingRedirect",wi=new Map;class vu extends Jo{constructor(t,e,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,s),this.eventId=null}async execute(){let t=wi.get(this.auth._key());if(!t){try{const e=await Iu(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}wi.set(this.auth._key(),t)}return this.bypassAuthState||wi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Iu(i,t){const e=Tu(t),s=Eu(i);if(!await s._isAvailable())return!1;const o=await s._get(e)==="true";return await s._remove(e),o}function bu(i,t){wi.set(i._key(),t)}function Eu(i){return Tt(i._redirectPersistence)}function Tu(i){return _i(wu,i.config.apiKey,i.name)}async function Su(i,t,e=!1){if(Q(i.app))return Promise.reject(St(i));const s=Wt(i),o=pu(s,t),c=await new vu(s,o,e).execute();return c&&!e&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,t)),c}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ku=600*1e3;class Au{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(e=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Cu(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){if(t.error&&!Xo(t)){const s=t.error.code?.split("auth/")[1]||"internal-error";e.onError(mt(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const s=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=ku&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mr(t))}saveEventToCache(t){this.cachedEventUids.add(Mr(t)),this.lastProcessedEventTime=Date.now()}}function Mr(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(t=>t).join("-")}function Xo({type:i,error:t}){return i==="unknown"&&t?.code==="auth/no-auth-event"}function Cu(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xo(i);default:return!1}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Ru(i,t={}){return vt(i,"GET","/v1/projects",t)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Pu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nu=/^https?/;async function Ou(i){if(i.config.emulator)return;const{authorizedDomains:t}=await Ru(i);for(const e of t)try{if(Du(e))return}catch{}ht(i,"unauthorized-domain")}function Du(i){const t=kn(),{protocol:e,hostname:s}=new URL(t);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&s===""?e==="chrome-extension:"&&i.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&c.hostname===s}if(!Nu.test(e))return!1;if(Pu.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
*/const Lu=new Xe(3e4,6e4);function Ur(){const i=yt().___jsl;if(i?.H){for(const t of Object.keys(i.H))if(i.H[t].r=i.H[t].r||[],i.H[t].L=i.H[t].L||[],i.H[t].r=[...i.H[t].L],i.CP)for(let e=0;e<i.CP.length;e++)i.CP[e]=null}}function Mu(i){return new Promise((t,e)=>{function s(){Ur(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ur(),e(mt(i,"network-request-failed"))},timeout:Lu.get()})}if(yt().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(yt().gapi?.load)s();else{const o=Il("iframefcb");return yt()[o]=()=>{gapi.load?s():e(mt(i,"network-request-failed"))},Oo(`${vl()}?onload=${o}`).catch(c=>e(c))}}).catch(t=>{throw vi=null,t})}let vi=null;function Uu(i){return vi=vi||Mu(i),vi}/**
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
*/const xu=new Xe(5e3,15e3),ju="__/auth/iframe",Fu="emulator/auth/iframe",Vu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hu(i){const t=i.config;k(t.authDomain,i,"auth-domain-config-required");const e=t.emulator?Bn(t,Fu):`https://${i.config.authDomain}/${ju}`,s={apiKey:t.apiKey,appName:i.name,v:oe},o=Bu.get(i.config.apiHost);o&&(s.eid=o);const c=i._getFrameworks();return c.length&&(s.fw=c.join(",")),`${e}?${Ge(s).slice(1)}`}async function $u(i){const t=await Uu(i),e=yt().gapi;return k(e,i,"internal-error"),t.open({where:document.body,url:Hu(i),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vu,dontclear:!0},s=>new Promise(async(o,c)=>{await s.restyle({setHideOnLeave:!1});const h=mt(i,"network-request-failed"),m=yt().setTimeout(()=>{c(h)},xu.get());function _(){yt().clearTimeout(m),o(s)}s.ping(_).then(_,()=>{c(h)})}))}/**
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
*/const Wu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zu=500,qu=600,Gu="_blank",Ku="http://localhost";class xr{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ju(i,t,e,s=zu,o=qu){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const _={...Wu,width:s.toString(),height:o.toString(),top:c,left:h},b=X().toLowerCase();e&&(m=So(b)?Gu:e),Eo(b)&&(t=t||Ku,_.scrollbars="yes");const S=Object.entries(_).reduce((R,[U,L])=>`${R}${U}=${L},`,"");if(ul(b)&&m!=="_self")return Xu(t||"",m),new xr(null);const E=window.open(t||"",m,S);k(E,i,"popup-blocked");try{E.focus()}catch{}return new xr(E)}function Xu(i,t){const e=document.createElement("a");e.href=i,e.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(s)}/**
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
*/const Yu="__/auth/handler",Zu="emulator/auth/handler",Qu=encodeURIComponent("fac");async function jr(i,t,e,s,o,c){k(i.config.authDomain,i,"auth-domain-config-required"),k(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:e,redirectUrl:s,v:oe,eventId:o};if(t instanceof Uo){t.setDefaultLanguage(i.languageCode),h.providerId=t.providerId||"",Qa(t.getCustomParameters())||(h.customParameters=JSON.stringify(t.getCustomParameters()));for(const[S,E]of Object.entries({}))h[S]=E}if(t instanceof Ze){const S=t.getScopes().filter(E=>E!=="");S.length>0&&(h.scopes=S.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const S of Object.keys(m))m[S]===void 0&&delete m[S];const _=await i._getAppCheckToken(),b=_?`#${Qu}=${encodeURIComponent(_)}`:"";return`${td(i)}?${Ge(m).slice(1)}${b}`}function td({config:i}){return i.emulator?Bn(i,Zu):`https://${i.authDomain}/${Yu}`}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const _n="webStorageSupport";class ed{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wo,this._completeRedirectFn=Su,this._overrideRedirectResult=bu}async _openPopup(t,e,s,o){At(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const c=await jr(t,e,s,kn(),o);return Ju(t,c,Gn())}async _openRedirect(t,e,s,o){await this._originValidation(t);const c=await jr(t,e,s,kn(),o);return su(c),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:o,promise:c}=this.eventManagers[e];return o?Promise.resolve(o):(At(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(t);return this.eventManagers[e]={promise:s},s.catch(()=>{delete this.eventManagers[e]}),s}async initAndGetManager(t){const e=await $u(t),s=new Au(t);return e.register("authEvent",o=>(k(o?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=e,s}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(_n,{type:_n},s=>{const o=s?.[0]?.[_n];o!==void 0&&e(!!o),ht(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Ou(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Po()||To()||$n()}}const id=ed;var Fr="@firebase/auth",Vr="1.11.0";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class nd{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function sd(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rd(i){ee(new Ht("auth",(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;k(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const _={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:No(i)},b=new yl(s,o,c,_);return Al(b,e),b},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,s)=>{t.getProvider("auth-internal").initialize()})),ee(new Ht("auth-internal",t=>{const e=Wt(t.getProvider("auth").getImmediate());return(s=>new nd(s))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),gt(Fr,Vr,sd(i)),gt(Fr,Vr,"esm2020")}/**
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
*/const od=300,ad=Qr("authIdTokenMaxAge")||od;let Br=null;const cd=i=>async t=>{const e=t&&await t.getIdTokenResult(),s=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(s&&s>ad)return;const o=e?.token;Br!==o&&(Br=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function hd(i=Ln()){const t=Li(i,"auth");if(t.isInitialized())return t.getImmediate();const e=kl(i,{popupRedirectResolver:id,persistence:[fu,eu,Wo]}),s=Qr("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const h=cd(c.toString());Yl(e,h,()=>h(e.currentUser)),Xl(e,m=>h(m))}}const o=Xr("auth");return o&&Cl(e,`http://${o}`),e}function ld(){return document.getElementsByTagName("head")?.[0]??document}_l({loadJS(i){return new Promise((t,e)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=t,s.onerror=o=>{const c=mt("internal-error");c.customData=o,e(c)},s.type="text/javascript",s.charset="UTF-8",ld().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rd("Browser");/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Yo="firebasestorage.googleapis.com",ud="storageBucket",dd=120*1e3,fd=600*1e3;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class It extends wt{constructor(t,e,s=0){super(wn(t),`Firebase Storage: ${e} (${wn(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,It.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return wn(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _t;(function(i){i.UNKNOWN="unknown",i.OBJECT_NOT_FOUND="object-not-found",i.BUCKET_NOT_FOUND="bucket-not-found",i.PROJECT_NOT_FOUND="project-not-found",i.QUOTA_EXCEEDED="quota-exceeded",i.UNAUTHENTICATED="unauthenticated",i.UNAUTHORIZED="unauthorized",i.UNAUTHORIZED_APP="unauthorized-app",i.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",i.INVALID_CHECKSUM="invalid-checksum",i.CANCELED="canceled",i.INVALID_EVENT_NAME="invalid-event-name",i.INVALID_URL="invalid-url",i.INVALID_DEFAULT_BUCKET="invalid-default-bucket",i.NO_DEFAULT_BUCKET="no-default-bucket",i.CANNOT_SLICE_BLOB="cannot-slice-blob",i.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",i.NO_DOWNLOAD_URL="no-download-url",i.INVALID_ARGUMENT="invalid-argument",i.INVALID_ARGUMENT_COUNT="invalid-argument-count",i.APP_DELETED="app-deleted",i.INVALID_ROOT_OPERATION="invalid-root-operation",i.INVALID_FORMAT="invalid-format",i.INTERNAL_ERROR="internal-error",i.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_t||(_t={}));function wn(i){return"storage/"+i}function pd(){const i="An unknown error occurred, please check the error payload for server response.";return new It(_t.UNKNOWN,i)}function gd(){return new It(_t.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function md(){return new It(_t.CANCELED,"User canceled the upload/download.")}function yd(i){return new It(_t.INVALID_URL,"Invalid URL '"+i+"'.")}function _d(i){return new It(_t.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.")}function Hr(i){return new It(_t.INVALID_ARGUMENT,i)}function Zo(){return new It(_t.APP_DELETED,"The Firebase app was deleted.")}function wd(i){return new It(_t.INVALID_ROOT_OPERATION,"The operation '"+i+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ct{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=ct.makeFromUrl(t,e)}catch{return new ct(t,"")}if(s.path==="")return s;throw _d(t)}static makeFromUrl(t,e){let s=null;const o="([A-Za-z0-9.\\-_]+)";function c(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const h="(/(.*))?$",m=new RegExp("^gs://"+o+h,"i"),_={bucket:1,path:3};function b(F){F.path_=decodeURIComponent(F.path)}const S="v[A-Za-z0-9_]+",E=e.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",U=new RegExp(`^https?://${E}/${S}/b/${o}/o${R}`,"i"),L={bucket:1,path:3},M=e===Yo?"(?:storage.googleapis.com|storage.cloud.google.com)":e,C="([^?#]*)",B=new RegExp(`^https?://${M}/${o}/${C}`,"i"),$=[{regex:m,indices:_,postModify:c},{regex:U,indices:L,postModify:b},{regex:B,indices:{bucket:1,path:2},postModify:b}];for(let F=0;F<$.length;F++){const st=$[F],tt=st.regex.exec(t);if(tt){const Y=tt[st.indices.bucket];let g=tt[st.indices.path];g||(g=""),s=new ct(Y,g),st.postModify(s);break}}if(s==null)throw yd(t);return s}}class vd{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Id(i,t,e){let s=1,o=null,c=null,h=!1,m=0;function _(){return m===2}let b=!1;function S(...C){b||(b=!0,t.apply(null,C))}function E(C){o=setTimeout(()=>{o=null,i(U,_())},C)}function R(){c&&clearTimeout(c)}function U(C,...B){if(b){R();return}if(C){R(),S.call(null,C,...B);return}if(_()||h){R(),S.call(null,C,...B);return}s<64&&(s*=2);let $;m===1?(m=2,$=0):$=(s+Math.random())*1e3,E($)}let L=!1;function M(C){L||(L=!0,R(),!b&&(o!==null?(C||(m=2),clearTimeout(o),E(0)):C||(m=1)))}return E(0),c=setTimeout(()=>{h=!0,M(!0)},e),M}function bd(i){i(!1)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ed(i){return i!==void 0}function $r(i,t,e,s){if(s<t)throw Hr(`Invalid value for '${i}'. Expected ${t} or greater.`);if(s>e)throw Hr(`Invalid value for '${i}'. Expected ${e} or less.`)}function Td(i){const t=encodeURIComponent;let e="?";for(const s in i)if(i.hasOwnProperty(s)){const o=t(s)+"="+t(i[s]);e=e+o+"&"}return e=e.slice(0,-1),e}var Oi;(function(i){i[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT"})(Oi||(Oi={}));/**
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
*/function Sd(i,t){const e=i>=500&&i<600,s=[408,429].indexOf(i)!==-1,o=t.indexOf(i)!==-1;return e||s||o}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class kd{constructor(t,e,s,o,c,h,m,_,b,S,E,R=!0,U=!1){this.url_=t,this.method_=e,this.headers_=s,this.body_=o,this.successCodes_=c,this.additionalRetryCodes_=h,this.callback_=m,this.errorCallback_=_,this.timeout_=b,this.progressCallback_=S,this.connectionFactory_=E,this.retry=R,this.isUsingEmulator=U,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((L,M)=>{this.resolve_=L,this.reject_=M,this.start_()})}start_(){const t=(s,o)=>{if(o){s(!1,new gi(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const h=m=>{const _=m.loaded,b=m.lengthComputable?m.total:-1;this.progressCallback_!==null&&this.progressCallback_(_,b)};this.progressCallback_!==null&&c.addUploadProgressListener(h),c.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(h),this.pendingConnection_=null;const m=c.getErrorCode()===Oi.NO_ERROR,_=c.getStatus();if(!m||Sd(_,this.additionalRetryCodes_)&&this.retry){const S=c.getErrorCode()===Oi.ABORT;s(!1,new gi(!1,null,S));return}const b=this.successCodes_.indexOf(_)!==-1;s(!0,new gi(b,c))})},e=(s,o)=>{const c=this.resolve_,h=this.reject_,m=o.connection;if(o.wasSuccessCode)try{const _=this.callback_(m,m.getResponse());Ed(_)?c(_):c()}catch(_){h(_)}else if(m!==null){const _=pd();_.serverResponse=m.getErrorText(),this.errorCallback_?h(this.errorCallback_(m,_)):h(_)}else if(o.canceled){const _=this.appDelete_?Zo():md();h(_)}else{const _=gd();h(_)}};this.canceled_?e(!1,new gi(!1,null,!0)):this.backoffId_=Id(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&bd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gi{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function Ad(i,t){t!==null&&t.length>0&&(i.Authorization="Firebase "+t)}function Cd(i,t){i["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Rd(i,t){t&&(i["X-Firebase-GMPID"]=t)}function Pd(i,t){t!==null&&(i["X-Firebase-AppCheck"]=t)}function Nd(i,t,e,s,o,c,h=!0,m=!1){const _=Td(i.urlParams),b=i.url+_,S=Object.assign({},i.headers);return Rd(S,t),Ad(S,e),Cd(S,c),Pd(S,s),new kd(b,i.method,S,i.body,i.successCodes,i.additionalRetryCodes,i.handler,i.errorHandler,i.timeout,i.progressCallback,o,h,m)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Od(i){if(i.length===0)return null;const t=i.lastIndexOf("/");return t===-1?"":i.slice(0,t)}function Dd(i){const t=i.lastIndexOf("/",i.length-2);return t===-1?i:i.slice(t+1)}/**
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
*/class Di{constructor(t,e){this._service=t,e instanceof ct?this._location=e:this._location=ct.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Di(t,e)}get root(){const t=new ct(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Dd(this._location.path)}get storage(){return this._service}get parent(){const t=Od(this._location.path);if(t===null)return null;const e=new ct(this._location.bucket,t);return new Di(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw wd(t)}}function Wr(i,t){const e=t?.[ud];return e==null?null:ct.makeFromBucketSpec(e,i)}function Ld(i,t,e,s={}){i.host=`${t}:${e}`;const o=we(t);o&&(Pn(`https://${i.host}/b`),Nn("Storage",!0)),i._isUsingEmulator=!0,i._protocol=o?"https":"http";const{mockUserToken:c}=s;c&&(i._overrideAuthToken=typeof c=="string"?c:to(c,i.app.options.projectId))}class Md{constructor(t,e,s,o,c,h=!1){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=o,this._firebaseVersion=c,this._isUsingEmulator=h,this._bucket=null,this._host=Yo,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dd,this._maxUploadRetryTime=fd,this._requests=new Set,o!=null?this._bucket=ct.makeFromBucketSpec(o,this._host):this._bucket=Wr(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ct.makeFromBucketSpec(this._url,t):this._bucket=Wr(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){$r("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){$r("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){if(Q(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Di(this,t)}_makeRequest(t,e,s,o,c=!0){if(this._deleted)return new vd(Zo());{const h=Nd(t,this._appId,s,o,e,this._firebaseVersion,c,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(t,e){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,o).getPromise()}}const zr="@firebase/storage",qr="0.14.0";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Qo="storage";function Ud(i=Ln(),t){i=nt(i);const e=Li(i,Qo).getImmediate({identifier:t}),s=Yr("storage");return s&&xd(e,...s),e}function xd(i,t,e,s={}){Ld(i,t,e,s)}function jd(i,{instanceIdentifier:t}){const e=i.getProvider("app").getImmediate(),s=i.getProvider("auth-internal"),o=i.getProvider("app-check-internal");return new Md(e,s,o,t,oe)}function Fd(){ee(new Ht(Qo,jd,"PUBLIC").setMultipleInstances(!0)),gt(zr,qr,""),gt(zr,qr,"esm2020")}Fd();const Vd={apiKey:"AIzaSyC0qVQm59S1_OFJcYLr2ILyGB9m-SoxHro",authDomain:"holysmokas-4ef36.firebaseapp.com",projectId:"holysmokas-4ef36",storageBucket:"holysmokas-4ef36.firebasestorage.app",messagingSenderId:"236391401471",appId:"1:236391401471:web:16780dc40257205caf09ca",measurementId:"G-LRKVZGKNLD"},Jn=no(Vd);Vh(Jn);const re=hd(Jn);Ud(Jn);let Ii=!1;Zl(re,i=>{const t=window.location.pathname;Ii||(i&&t.includes("login.html")?window.location.href="/src/frontend/pages/dashboard.html":!i&&t.includes("dashboard.html")&&(window.location.href="/src/frontend/pages/login.html"))});async function Bd(i){try{(await(await fetch("http://localhost:8080/claim-projects",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:i.uid,email:i.email})})).json()).success&&console.log("✅ Projects claimed successfully")}catch(t){console.error("Error claiming projects:",t)}}window.handleLogin=async function(i){i.preventDefault();const t=i.target,e=t.email.value,s=t.password.value,o=document.getElementById("loginBtn");o.disabled=!0,o.textContent="Signing In...";try{const c=(await Gl(re,e,s)).user;if(!c.emailVerified){it("warning","Email Not Verified","Please verify your email before logging in. Check your inbox for the verification link.",[{text:"Resend Verification Email",action:()=>{Hd(c)}},{text:"Close",action:closeAuthModal,primary:!0}]),await qn(re),o.disabled=!1,o.textContent="Sign In";return}console.log("Login successful:",c.email),await Bd(c),it("success","Login Successful!","Redirecting to your dashboard..."),setTimeout(()=>{window.location.href="/src/frontend/pages/dashboard.html"},1e3)}catch(c){console.error("Login error:",c);let h="Login failed. Please try again.";c.code==="auth/invalid-credential"||c.code==="auth/wrong-password"?h="Invalid email or password. Please check your credentials.":c.code==="auth/user-not-found"?h="No account found with this email address.":c.code==="auth/too-many-requests"?h="Too many failed login attempts. Please try again later.":c.code==="auth/network-request-failed"?h="Network error. Please check your internet connection.":c.code==="auth/invalid-email"&&(h="Please enter a valid email address."),it("error","Login Failed",h),o.disabled=!1,o.textContent="Sign In"}};window.handleLogout=async function(){try{await qn(re),console.log("Logout successful"),window.location.href="/src/frontend/pages/login.html"}catch(i){console.error("Logout error:",i),it("error","Logout Error","Error logging out. Please try again.")}};function it(i,t,e,s=null){const o=document.getElementById("authModal"),c=document.getElementById("authIcon"),h=document.getElementById("authTitle"),m=document.getElementById("authMessage"),_=document.getElementById("authModalButtons");o&&(i==="success"?(c.textContent="✓",c.style.background="var(--secondary)"):i==="error"?(c.textContent="✕",c.style.background="#ef4444"):i==="warning"&&(c.textContent="⚠",c.style.background="#f59e0b"),h.textContent=t,m.textContent=e,s&&_?(_.innerHTML="",s.forEach(b=>{const S=document.createElement("button");S.textContent=b.text,S.className=b.primary?"btn btn-primary":"btn btn-secondary",S.onclick=b.action,S.style.margin="0 0.5rem",_.appendChild(S)})):_&&(_.innerHTML='<button class="btn btn-primary" onclick="closeAuthModal()">Close</button>'),o.classList.add("show"))}window.closeAuthModal=function(){const i=document.getElementById("authModal");i&&i.classList.remove("show")};window.handleRegister=async function(i){i.preventDefault();const t=i.target,e=t.name.value,s=t.email.value,o=t.password.value,c=document.getElementById("registerBtn");if(o.length<6){it("error","Validation Error","Password must be at least 6 characters long.");return}c.disabled=!0,c.textContent="Creating Account...",Ii=!0;try{const h=(await ql(re,s,o)).user;console.log("Account created:",h.email),await Jl(h,{displayName:e});const m={url:window.location.origin+"/src/frontend/pages/login.html",handleCodeInApp:!1};await Vo(h,m),console.log("Verification email sent to:",s),await qn(re),await new Promise(_=>setTimeout(_,500)),Ii=!1,it("success","Account Created Successfully!",`A verification email has been sent to ${s}. Please check your inbox (and spam folder) and click the verification link before logging in.`,[{text:"Go to Login",action:()=>{closeAuthModal(),showLoginForm()},primary:!0}]),t.reset()}catch(h){console.error("Registration error:",h),Ii=!1;let m="Failed to create account. ";h.code==="auth/email-already-in-use"?m+="An account with this email already exists.":h.code==="auth/weak-password"?m+="Password should be at least 6 characters.":h.code==="auth/invalid-email"?m+="Invalid email address format.":h.code==="auth/operation-not-allowed"?m+="Email/password accounts are not enabled. Please contact support.":m+=h.message,it("error","Registration Failed",m),c.disabled=!1,c.textContent="Create Account"}finally{c.disabled=!1,c.textContent="Create Account"}};async function Hd(i){try{await Vo(i),it("success","Verification Email Sent","Please check your inbox for the verification link.")}catch(t){console.error("Error resending verification email:",t),it("error","Error","Failed to resend verification email. Please try again later.")}}window.handlePasswordReset=async function(i=null){let t=i;if(!t){$d();return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){it("error","Invalid Email","Please enter a valid email address.");return}try{await zl(re,t),it("success","Password Reset Email Sent",`A password reset link has been sent to ${t}. Please check your inbox and follow the instructions.`)}catch(e){console.error("Password reset error:",e);let s="Failed to send password reset email.";e.code==="auth/user-not-found"?s="No account found with this email address.":e.code==="auth/invalid-email"?s="Invalid email address format.":e.code==="auth/too-many-requests"?s="Too many requests. Please try again later.":s="An error occurred. Please contact support at (415) 691-7085.",it("error","Password Reset Failed",s)}};function $d(){const i=document.getElementById("authModal"),t=document.getElementById("authIcon"),e=document.getElementById("authTitle"),s=document.getElementById("authMessage"),o=document.getElementById("authModalButtons");if(!i)return;t.textContent="🔑",t.style.background="var(--primary)",e.textContent="Reset Your Password",s.innerHTML=`
        <div style="margin: 1.5rem 0;">
            <input 
                type="email" 
                id="resetEmailInput" 
                placeholder="Enter your email address"
                style="width: 100%; padding: 0.75rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem; font-family: inherit;"
            />
        </div>
    `,o.innerHTML="";const c=document.createElement("button");c.textContent="Send Reset Link",c.className="btn btn-primary",c.style.margin="0 0.5rem",c.onclick=async()=>{const m=document.getElementById("resetEmailInput"),_=m.value.trim();if(!_){m.style.borderColor="#ef4444";return}closeAuthModal(),await handlePasswordReset(_)};const h=document.createElement("button");h.textContent="Cancel",h.className="btn btn-secondary",h.style.margin="0 0.5rem",h.onclick=closeAuthModal,o.appendChild(c),o.appendChild(h),i.classList.add("show"),setTimeout(()=>{const m=document.getElementById("resetEmailInput");m&&(m.focus(),m.addEventListener("keypress",_=>{_.key==="Enter"&&c.click()}))},100)}document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("authModal");i&&i.addEventListener("click",t=>{(t.target===i||t.target.classList.contains("modal-overlay"))&&closeAuthModal()})});export{Zl as U,re as j};
