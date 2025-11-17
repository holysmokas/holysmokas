import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css                                                  */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const Zu=()=>{};var Ya={};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Wh=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ed=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const c=n[t++];e[s++]=String.fromCharCode((i&31)<<6|c&63)}else if(i>239&&i<365){const c=n[t++],h=n[t++],b=n[t++],T=((i&7)<<18|(c&63)<<12|(h&63)<<6|b&63)-65536;e[s++]=String.fromCharCode(55296+(T>>10)),e[s++]=String.fromCharCode(56320+(T&1023))}else{const c=n[t++],h=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(c&63)<<6|h&63)}}return e.join("")},Gh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const c=n[i],h=i+1<n.length,b=h?n[i+1]:0,T=i+2<n.length,E=T?n[i+2]:0,C=c>>2,k=(c&3)<<4|b>>4;let R=(b&15)<<2|E>>6,L=E&63;T||(L=64,h||(R=64)),s.push(t[C],t[k],t[R],t[L])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Wh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ed(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const c=t[n.charAt(i++)],h=i<n.length?t[n.charAt(i)]:0;++i;const b=i<n.length?t[n.charAt(i)]:64;++i;const T=i<n.length?t[n.charAt(i)]:64;if(++i,c==null||h==null||b==null||T==null)throw new td;const E=c<<2|h>>4;if(s.push(E),b!==64){const C=h<<4&240|b>>2;if(s.push(C),T!==64){const k=b<<6&192|T;s.push(k)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class td extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nd=function(n){const e=Wh(n);return Gh.encodeByteArray(e,!0)},Di=function(n){return nd(n).replace(/\./g,"")},qh=function(n){try{return Gh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
*/function sd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
*/const rd=()=>sd().__FIREBASE_DEFAULTS__,id=()=>{if(typeof process>"u"||typeof Ya>"u")return;const n=Ya.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},od=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&qh(n[1]);return e&&JSON.parse(e)},aa=()=>{try{return Zu()||rd()||id()||od()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Kh=n=>aa()?.emulatorHosts?.[n],Jh=n=>{const e=Kh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Xh=()=>aa()?.config,Yh=n=>aa()?.[`_${n}`];/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ad{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
*/function $s(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ca(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
*/function Qh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,c=n.sub||n.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Di(JSON.stringify(t)),Di(JSON.stringify(h)),""].join(".")}const Sr={};function cd(){const n={prod:[],emulator:[]};for(const e of Object.keys(Sr))Sr[e]?n.emulator.push(e):n.prod.push(e);return n}function hd(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Qa=!1;function ha(n,e){if(typeof window>"u"||typeof document>"u"||!$s(window.location.host)||Sr[n]===e||Sr[n]||Qa)return;Sr[n]=e;function t(k){return`__firebase__banner__${k}`}const s="__firebase__banner",i=cd().prod.length>0;function c(){const k=document.getElementById(s);k&&k.remove()}function h(k){k.style.display="flex",k.style.background="#7faaf0",k.style.position="fixed",k.style.bottom="5px",k.style.left="5px",k.style.padding=".5em",k.style.borderRadius="5px",k.style.alignItems="center"}function b(k,R){k.setAttribute("width","24"),k.setAttribute("id",R),k.setAttribute("height","24"),k.setAttribute("viewBox","0 0 24 24"),k.setAttribute("fill","none"),k.style.marginLeft="-6px"}function T(){const k=document.createElement("span");return k.style.cursor="pointer",k.style.marginLeft="16px",k.style.fontSize="24px",k.innerHTML=" &times;",k.onclick=()=>{Qa=!0,c()},k}function E(k,R){k.setAttribute("id",R),k.innerText="Learn more",k.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",k.setAttribute("target","__blank"),k.style.paddingLeft="5px",k.style.textDecoration="underline"}function C(){const k=hd(s),R=t("text"),L=document.getElementById(R)||document.createElement("span"),O=t("learnmore"),D=document.getElementById(O)||document.createElement("a"),N=t("preprendIcon"),V=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(k.created){const j=k.element;h(j),E(D,O);const U=T();b(V,N),j.append(V,L,D,U),document.body.appendChild(j)}i?(L.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,L.innerText="Preview backend running in this workspace."),L.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",C):C()}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ld(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function ud(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function fd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pd(){const n=_e();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gd(){try{return typeof indexedDB=="object"}catch{return!1}}function md(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const yd="FirebaseError";class lt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=yd,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,c=this.errors[e],h=c?_d(c,s):"Error",b=`${this.serviceName}: ${h} (${i}).`;return new lt(i,b,s)}}function _d(n,e){return n.replace(wd,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const wd=/\{\$([^}]+)}/g;function vd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Zn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const c=n[i],h=e[i];if(Za(c)&&Za(h)){if(!Zn(c,h))return!1}else if(c!==h)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Za(n){return n!==null&&typeof n=="object"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $r(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Id(n,e){const t=new bd(n,e);return t.subscribe.bind(t)}class bd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Td(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=To),i.error===void 0&&(i.error=To),i.complete===void 0&&(i.complete=To);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Td(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function To(){}/**
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
*/function as(n){return n&&n._delegate?n._delegate:n}let un=class{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
*/const Bn="[DEFAULT]";/**
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
*/class Ed{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ad;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ad(e))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const c=this.getOrInitializeService({instanceIdentifier:i});s.resolve(c)}catch{}}}}clearInstance(e=Bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bn){return this.instances.has(e)}getOptions(e=Bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[c,h]of this.instancesDeferred.entries()){const b=this.normalizeInstanceIdentifier(c);s===b&&h.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const c=this.instances.get(s);return c&&e(c,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Sd(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bn){return this.component?this.component.multipleInstances?e:Bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sd(n){return n===Bn?void 0:n}function Ad(n){return n.instantiationMode==="EAGER"}/**
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
*/class kd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ed(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const Cd={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Rd=Z.INFO,Pd={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Nd=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Pd[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class la{constructor(e){this.name=e,this._logLevel=Rd,this._logHandler=Nd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Od=(n,e)=>e.some(t=>n instanceof t);let ec,tc;function Dd(){return ec||(ec=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ld(){return tc||(tc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zh=new WeakMap,Ho=new WeakMap,el=new WeakMap,Eo=new WeakMap,ua=new WeakMap;function Md(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",c),n.removeEventListener("error",h)},c=()=>{t(an(n.result)),i()},h=()=>{s(n.error),i()};n.addEventListener("success",c),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Zh.set(t,n)}).catch(()=>{}),ua.set(e,n),e}function Ud(n){if(Ho.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",h),n.removeEventListener("abort",h)},c=()=>{t(),i()},h=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",c),n.addEventListener("error",h),n.addEventListener("abort",h)});Ho.set(n,e)}let zo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ho.get(n);if(e==="objectStoreNames")return n.objectStoreNames||el.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return an(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function xd(n){zo=n(zo)}function Fd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(So(this),e,...t);return el.set(s,e.sort?e.sort():[e]),an(s)}:Ld().includes(n)?function(...e){return n.apply(So(this),e),an(Zh.get(this))}:function(...e){return an(n.apply(So(this),e))}}function jd(n){return typeof n=="function"?Fd(n):(n instanceof IDBTransaction&&Ud(n),Od(n,Dd())?new Proxy(n,zo):n)}function an(n){if(n instanceof IDBRequest)return Md(n);if(Eo.has(n))return Eo.get(n);const e=jd(n);return e!==n&&(Eo.set(n,e),ua.set(e,n)),e}const So=n=>ua.get(n);function Vd(n,e,{blocked:t,upgrade:s,blocking:i,terminated:c}={}){const h=indexedDB.open(n,e),b=an(h);return s&&h.addEventListener("upgradeneeded",T=>{s(an(h.result),T.oldVersion,T.newVersion,an(h.transaction),T)}),t&&h.addEventListener("blocked",T=>t(T.oldVersion,T.newVersion,T)),b.then(T=>{c&&T.addEventListener("close",()=>c()),i&&T.addEventListener("versionchange",E=>i(E.oldVersion,E.newVersion,E))}).catch(()=>{}),b}const Bd=["get","getKey","getAll","getAllKeys","count"],$d=["put","add","delete","clear"],Ao=new Map;function nc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ao.get(e))return Ao.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=$d.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Bd.includes(t)))return;const c=async function(h,...b){const T=this.transaction(h,i?"readwrite":"readonly");let E=T.store;return s&&(E=E.index(b.shift())),(await Promise.all([E[t](...b),i&&T.done]))[0]};return Ao.set(e,c),c}xd(n=>({...n,get:(e,t,s)=>nc(e,t)||n.get(e,t,s),has:(e,t)=>!!nc(e,t)||n.has(e,t)}));/**
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
*/class Hd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(zd(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(e=>e).join(" ")}}function zd(n){return n.getComponent()?.type==="VERSION"}const Wo="@firebase/app",sc="0.14.4";/**
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
*/const Dt=new la("@firebase/app"),Wd="@firebase/app-compat",Gd="@firebase/analytics-compat",qd="@firebase/analytics",Kd="@firebase/app-check-compat",Jd="@firebase/app-check",Xd="@firebase/auth",Yd="@firebase/auth-compat",Qd="@firebase/database",Zd="@firebase/data-connect",ef="@firebase/database-compat",tf="@firebase/functions",nf="@firebase/functions-compat",sf="@firebase/installations",rf="@firebase/installations-compat",of="@firebase/messaging",af="@firebase/messaging-compat",cf="@firebase/performance",hf="@firebase/performance-compat",lf="@firebase/remote-config",uf="@firebase/remote-config-compat",df="@firebase/storage",ff="@firebase/storage-compat",pf="@firebase/firestore",gf="@firebase/ai",mf="@firebase/firestore-compat",yf="firebase",_f="12.4.0";/**
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
*/const Go="[DEFAULT]",wf={[Wo]:"fire-core",[Wd]:"fire-core-compat",[qd]:"fire-analytics",[Gd]:"fire-analytics-compat",[Jd]:"fire-app-check",[Kd]:"fire-app-check-compat",[Xd]:"fire-auth",[Yd]:"fire-auth-compat",[Qd]:"fire-rtdb",[Zd]:"fire-data-connect",[ef]:"fire-rtdb-compat",[tf]:"fire-fn",[nf]:"fire-fn-compat",[sf]:"fire-iid",[rf]:"fire-iid-compat",[of]:"fire-fcm",[af]:"fire-fcm-compat",[cf]:"fire-perf",[hf]:"fire-perf-compat",[lf]:"fire-rc",[uf]:"fire-rc-compat",[df]:"fire-gcs",[ff]:"fire-gcs-compat",[pf]:"fire-fst",[mf]:"fire-fst-compat",[gf]:"fire-vertex","fire-js":"fire-js",[yf]:"fire-js-all"};/**
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
*/const Li=new Map,vf=new Map,qo=new Map;function rc(n,e){try{n.container.addComponent(e)}catch(t){Dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function es(n){const e=n.name;if(qo.has(e))return Dt.debug(`There were multiple attempts to register component ${e}.`),!1;qo.set(e,n);for(const t of Li.values())rc(t,n);for(const t of vf.values())rc(t,n);return!0}function to(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Le(n){return n==null?!1:n.settings!==void 0}/**
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
*/const If={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cn=new Br("app","Firebase",If);/**
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
*/class bf{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cn.create("app-deleted",{appName:this._name})}}/**
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
*/const cs=_f;function tl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Go,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw cn.create("bad-app-name",{appName:String(i)});if(t||(t=Xh()),!t)throw cn.create("no-options");const c=Li.get(i);if(c){if(Zn(t,c.options)&&Zn(s,c.config))return c;throw cn.create("duplicate-app",{appName:i})}const h=new kd(i);for(const T of qo.values())h.addComponent(T);const b=new bf(t,s,h);return Li.set(i,b),b}function da(n=Go){const e=Li.get(n);if(!e&&n===Go&&Xh())return tl();if(!e)throw cn.create("no-app",{appName:n});return e}function nt(n,e,t){let s=wf[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),c=e.match(/\s|\//);if(i||c){const h=[`Unable to register library "${s}" with version "${e}":`];i&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dt.warn(h.join(" "));return}es(new un(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
*/const Tf="firebase-heartbeat-database",Ef=1,Mr="firebase-heartbeat-store";let ko=null;function nl(){return ko||(ko=Vd(Tf,Ef,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Mr)}catch(t){console.warn(t)}}}}).catch(n=>{throw cn.create("idb-open",{originalErrorMessage:n.message})})),ko}async function Sf(n){try{const e=(await nl()).transaction(Mr),t=await e.objectStore(Mr).get(sl(n));return await e.done,t}catch(e){if(e instanceof lt)Dt.warn(e.message);else{const t=cn.create("idb-get",{originalErrorMessage:e?.message});Dt.warn(t.message)}}}async function ic(n,e){try{const t=(await nl()).transaction(Mr,"readwrite");await t.objectStore(Mr).put(e,sl(n)),await t.done}catch(t){if(t instanceof lt)Dt.warn(t.message);else{const s=cn.create("idb-set",{originalErrorMessage:t?.message});Dt.warn(s.message)}}}function sl(n){return`${n.name}!${n.options.appId}`}/**
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
*/const Af=1024,kf=30;class Cf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Pf(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=oc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(s=>s.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>kf){const s=Nf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Dt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=oc(),{heartbeatsToSend:t,unsentEntries:s}=Rf(this._heartbeatsCache.heartbeats),i=Di(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Dt.warn(e),""}}}function oc(){return new Date().toISOString().substring(0,10)}function Rf(n,e=Af){const t=[];let s=n.slice();for(const i of n){const c=t.find(h=>h.agent===i.agent);if(c){if(c.dates.push(i.date),ac(t)>e){c.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ac(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Pf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gd()?md().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Sf(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return ic(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return ic(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}else return}}function ac(n){return Di(JSON.stringify({version:2,heartbeats:n})).length}function Nf(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
*/function Of(n){es(new un("platform-logger",e=>new Hd(e),"PRIVATE")),es(new un("heartbeat",e=>new Cf(e),"PRIVATE")),nt(Wo,sc,n),nt(Wo,sc,"esm2020"),nt("fire-js","")}Of("");var Df="firebase",Lf="12.4.0";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/nt(Df,Lf,"app");var cc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fa;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,f){function g(){}g.prototype=f.prototype,y.F=f.prototype,y.prototype=new g,y.prototype.constructor=y,y.D=function(_,m,v){for(var p=Array(arguments.length-2),te=2;te<arguments.length;te++)p[te-2]=arguments[te];return f.prototype[m].apply(_,p)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,f,g){g||(g=0);const _=Array(16);if(typeof f=="string")for(var m=0;m<16;++m)_[m]=f.charCodeAt(g++)|f.charCodeAt(g++)<<8|f.charCodeAt(g++)<<16|f.charCodeAt(g++)<<24;else for(m=0;m<16;++m)_[m]=f[g++]|f[g++]<<8|f[g++]<<16|f[g++]<<24;f=y.g[0],g=y.g[1],m=y.g[2];let v=y.g[3],p;p=f+(v^g&(m^v))+_[0]+3614090360&4294967295,f=g+(p<<7&4294967295|p>>>25),p=v+(m^f&(g^m))+_[1]+3905402710&4294967295,v=f+(p<<12&4294967295|p>>>20),p=m+(g^v&(f^g))+_[2]+606105819&4294967295,m=v+(p<<17&4294967295|p>>>15),p=g+(f^m&(v^f))+_[3]+3250441966&4294967295,g=m+(p<<22&4294967295|p>>>10),p=f+(v^g&(m^v))+_[4]+4118548399&4294967295,f=g+(p<<7&4294967295|p>>>25),p=v+(m^f&(g^m))+_[5]+1200080426&4294967295,v=f+(p<<12&4294967295|p>>>20),p=m+(g^v&(f^g))+_[6]+2821735955&4294967295,m=v+(p<<17&4294967295|p>>>15),p=g+(f^m&(v^f))+_[7]+4249261313&4294967295,g=m+(p<<22&4294967295|p>>>10),p=f+(v^g&(m^v))+_[8]+1770035416&4294967295,f=g+(p<<7&4294967295|p>>>25),p=v+(m^f&(g^m))+_[9]+2336552879&4294967295,v=f+(p<<12&4294967295|p>>>20),p=m+(g^v&(f^g))+_[10]+4294925233&4294967295,m=v+(p<<17&4294967295|p>>>15),p=g+(f^m&(v^f))+_[11]+2304563134&4294967295,g=m+(p<<22&4294967295|p>>>10),p=f+(v^g&(m^v))+_[12]+1804603682&4294967295,f=g+(p<<7&4294967295|p>>>25),p=v+(m^f&(g^m))+_[13]+4254626195&4294967295,v=f+(p<<12&4294967295|p>>>20),p=m+(g^v&(f^g))+_[14]+2792965006&4294967295,m=v+(p<<17&4294967295|p>>>15),p=g+(f^m&(v^f))+_[15]+1236535329&4294967295,g=m+(p<<22&4294967295|p>>>10),p=f+(m^v&(g^m))+_[1]+4129170786&4294967295,f=g+(p<<5&4294967295|p>>>27),p=v+(g^m&(f^g))+_[6]+3225465664&4294967295,v=f+(p<<9&4294967295|p>>>23),p=m+(f^g&(v^f))+_[11]+643717713&4294967295,m=v+(p<<14&4294967295|p>>>18),p=g+(v^f&(m^v))+_[0]+3921069994&4294967295,g=m+(p<<20&4294967295|p>>>12),p=f+(m^v&(g^m))+_[5]+3593408605&4294967295,f=g+(p<<5&4294967295|p>>>27),p=v+(g^m&(f^g))+_[10]+38016083&4294967295,v=f+(p<<9&4294967295|p>>>23),p=m+(f^g&(v^f))+_[15]+3634488961&4294967295,m=v+(p<<14&4294967295|p>>>18),p=g+(v^f&(m^v))+_[4]+3889429448&4294967295,g=m+(p<<20&4294967295|p>>>12),p=f+(m^v&(g^m))+_[9]+568446438&4294967295,f=g+(p<<5&4294967295|p>>>27),p=v+(g^m&(f^g))+_[14]+3275163606&4294967295,v=f+(p<<9&4294967295|p>>>23),p=m+(f^g&(v^f))+_[3]+4107603335&4294967295,m=v+(p<<14&4294967295|p>>>18),p=g+(v^f&(m^v))+_[8]+1163531501&4294967295,g=m+(p<<20&4294967295|p>>>12),p=f+(m^v&(g^m))+_[13]+2850285829&4294967295,f=g+(p<<5&4294967295|p>>>27),p=v+(g^m&(f^g))+_[2]+4243563512&4294967295,v=f+(p<<9&4294967295|p>>>23),p=m+(f^g&(v^f))+_[7]+1735328473&4294967295,m=v+(p<<14&4294967295|p>>>18),p=g+(v^f&(m^v))+_[12]+2368359562&4294967295,g=m+(p<<20&4294967295|p>>>12),p=f+(g^m^v)+_[5]+4294588738&4294967295,f=g+(p<<4&4294967295|p>>>28),p=v+(f^g^m)+_[8]+2272392833&4294967295,v=f+(p<<11&4294967295|p>>>21),p=m+(v^f^g)+_[11]+1839030562&4294967295,m=v+(p<<16&4294967295|p>>>16),p=g+(m^v^f)+_[14]+4259657740&4294967295,g=m+(p<<23&4294967295|p>>>9),p=f+(g^m^v)+_[1]+2763975236&4294967295,f=g+(p<<4&4294967295|p>>>28),p=v+(f^g^m)+_[4]+1272893353&4294967295,v=f+(p<<11&4294967295|p>>>21),p=m+(v^f^g)+_[7]+4139469664&4294967295,m=v+(p<<16&4294967295|p>>>16),p=g+(m^v^f)+_[10]+3200236656&4294967295,g=m+(p<<23&4294967295|p>>>9),p=f+(g^m^v)+_[13]+681279174&4294967295,f=g+(p<<4&4294967295|p>>>28),p=v+(f^g^m)+_[0]+3936430074&4294967295,v=f+(p<<11&4294967295|p>>>21),p=m+(v^f^g)+_[3]+3572445317&4294967295,m=v+(p<<16&4294967295|p>>>16),p=g+(m^v^f)+_[6]+76029189&4294967295,g=m+(p<<23&4294967295|p>>>9),p=f+(g^m^v)+_[9]+3654602809&4294967295,f=g+(p<<4&4294967295|p>>>28),p=v+(f^g^m)+_[12]+3873151461&4294967295,v=f+(p<<11&4294967295|p>>>21),p=m+(v^f^g)+_[15]+530742520&4294967295,m=v+(p<<16&4294967295|p>>>16),p=g+(m^v^f)+_[2]+3299628645&4294967295,g=m+(p<<23&4294967295|p>>>9),p=f+(m^(g|~v))+_[0]+4096336452&4294967295,f=g+(p<<6&4294967295|p>>>26),p=v+(g^(f|~m))+_[7]+1126891415&4294967295,v=f+(p<<10&4294967295|p>>>22),p=m+(f^(v|~g))+_[14]+2878612391&4294967295,m=v+(p<<15&4294967295|p>>>17),p=g+(v^(m|~f))+_[5]+4237533241&4294967295,g=m+(p<<21&4294967295|p>>>11),p=f+(m^(g|~v))+_[12]+1700485571&4294967295,f=g+(p<<6&4294967295|p>>>26),p=v+(g^(f|~m))+_[3]+2399980690&4294967295,v=f+(p<<10&4294967295|p>>>22),p=m+(f^(v|~g))+_[10]+4293915773&4294967295,m=v+(p<<15&4294967295|p>>>17),p=g+(v^(m|~f))+_[1]+2240044497&4294967295,g=m+(p<<21&4294967295|p>>>11),p=f+(m^(g|~v))+_[8]+1873313359&4294967295,f=g+(p<<6&4294967295|p>>>26),p=v+(g^(f|~m))+_[15]+4264355552&4294967295,v=f+(p<<10&4294967295|p>>>22),p=m+(f^(v|~g))+_[6]+2734768916&4294967295,m=v+(p<<15&4294967295|p>>>17),p=g+(v^(m|~f))+_[13]+1309151649&4294967295,g=m+(p<<21&4294967295|p>>>11),p=f+(m^(g|~v))+_[4]+4149444226&4294967295,f=g+(p<<6&4294967295|p>>>26),p=v+(g^(f|~m))+_[11]+3174756917&4294967295,v=f+(p<<10&4294967295|p>>>22),p=m+(f^(v|~g))+_[2]+718787259&4294967295,m=v+(p<<15&4294967295|p>>>17),p=g+(v^(m|~f))+_[9]+3951481745&4294967295,y.g[0]=y.g[0]+f&4294967295,y.g[1]=y.g[1]+(m+(p<<21&4294967295|p>>>11))&4294967295,y.g[2]=y.g[2]+m&4294967295,y.g[3]=y.g[3]+v&4294967295}s.prototype.v=function(y,f){f===void 0&&(f=y.length);const g=f-this.blockSize,_=this.C;let m=this.h,v=0;for(;v<f;){if(m==0)for(;v<=g;)i(this,y,v),v+=this.blockSize;if(typeof y=="string"){for(;v<f;)if(_[m++]=y.charCodeAt(v++),m==this.blockSize){i(this,_),m=0;break}}else for(;v<f;)if(_[m++]=y[v++],m==this.blockSize){i(this,_),m=0;break}}this.h=m,this.o+=f},s.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var f=1;f<y.length-8;++f)y[f]=0;f=this.o*8;for(var g=y.length-8;g<y.length;++g)y[g]=f&255,f/=256;for(this.v(y),y=Array(16),f=0,g=0;g<4;++g)for(let _=0;_<32;_+=8)y[f++]=this.g[g]>>>_&255;return y};function c(y,f){var g=b;return Object.prototype.hasOwnProperty.call(g,y)?g[y]:g[y]=f(y)}function h(y,f){this.h=f;const g=[];let _=!0;for(let m=y.length-1;m>=0;m--){const v=y[m]|0;_&&v==f||(g[m]=v,_=!1)}this.g=g}var b={};function T(y){return-128<=y&&y<128?c(y,function(f){return new h([f|0],f<0?-1:0)}):new h([y|0],y<0?-1:0)}function E(y){if(isNaN(y)||!isFinite(y))return k;if(y<0)return N(E(-y));const f=[];let g=1;for(let _=0;y>=g;_++)f[_]=y/g|0,g*=4294967296;return new h(f,0)}function C(y,f){if(y.length==0)throw Error("number format error: empty string");if(f=f||10,f<2||36<f)throw Error("radix out of range: "+f);if(y.charAt(0)=="-")return N(C(y.substring(1),f));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=E(Math.pow(f,8));let _=k;for(let v=0;v<y.length;v+=8){var m=Math.min(8,y.length-v);const p=parseInt(y.substring(v,v+m),f);m<8?(m=E(Math.pow(f,m)),_=_.j(m).add(E(p))):(_=_.j(g),_=_.add(E(p)))}return _}var k=T(0),R=T(1),L=T(16777216);n=h.prototype,n.m=function(){if(D(this))return-N(this).m();let y=0,f=1;for(let g=0;g<this.g.length;g++){const _=this.i(g);y+=(_>=0?_:4294967296+_)*f,f*=4294967296}return y},n.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(O(this))return"0";if(D(this))return"-"+N(this).toString(y);const f=E(Math.pow(y,6));var g=this;let _="";for(;;){const m=H(g,f).g;g=V(g,m.j(f));let v=((g.g.length>0?g.g[0]:g.h)>>>0).toString(y);if(g=m,O(g))return v+_;for(;v.length<6;)v="0"+v;_=v+_}},n.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function O(y){if(y.h!=0)return!1;for(let f=0;f<y.g.length;f++)if(y.g[f]!=0)return!1;return!0}function D(y){return y.h==-1}n.l=function(y){return y=V(this,y),D(y)?-1:O(y)?0:1};function N(y){const f=y.g.length,g=[];for(let _=0;_<f;_++)g[_]=~y.g[_];return new h(g,~y.h).add(R)}n.abs=function(){return D(this)?N(this):this},n.add=function(y){const f=Math.max(this.g.length,y.g.length),g=[];let _=0;for(let m=0;m<=f;m++){let v=_+(this.i(m)&65535)+(y.i(m)&65535),p=(v>>>16)+(this.i(m)>>>16)+(y.i(m)>>>16);_=p>>>16,v&=65535,p&=65535,g[m]=p<<16|v}return new h(g,g[g.length-1]&-2147483648?-1:0)};function V(y,f){return y.add(N(f))}n.j=function(y){if(O(this)||O(y))return k;if(D(this))return D(y)?N(this).j(N(y)):N(N(this).j(y));if(D(y))return N(this.j(N(y)));if(this.l(L)<0&&y.l(L)<0)return E(this.m()*y.m());const f=this.g.length+y.g.length,g=[];for(var _=0;_<2*f;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(let m=0;m<y.g.length;m++){const v=this.i(_)>>>16,p=this.i(_)&65535,te=y.i(m)>>>16,de=y.i(m)&65535;g[2*_+2*m]+=p*de,j(g,2*_+2*m),g[2*_+2*m+1]+=v*de,j(g,2*_+2*m+1),g[2*_+2*m+1]+=p*te,j(g,2*_+2*m+1),g[2*_+2*m+2]+=v*te,j(g,2*_+2*m+2)}for(y=0;y<f;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=f;y<2*f;y++)g[y]=0;return new h(g,0)};function j(y,f){for(;(y[f]&65535)!=y[f];)y[f+1]+=y[f]>>>16,y[f]&=65535,f++}function U(y,f){this.g=y,this.h=f}function H(y,f){if(O(f))throw Error("division by zero");if(O(y))return new U(k,k);if(D(y))return f=H(N(y),f),new U(N(f.g),N(f.h));if(D(f))return f=H(y,N(f)),new U(N(f.g),f.h);if(y.g.length>30){if(D(y)||D(f))throw Error("slowDivide_ only works with positive integers.");for(var g=R,_=f;_.l(y)<=0;)g=ie(g),_=ie(_);var m=Y(g,1),v=Y(_,1);for(_=Y(_,2),g=Y(g,2);!O(_);){var p=v.add(_);p.l(y)<=0&&(m=m.add(g),v=p),_=Y(_,1),g=Y(g,1)}return f=V(y,m.j(f)),new U(m,f)}for(m=k;y.l(f)>=0;){for(g=Math.max(1,Math.floor(y.m()/f.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=_<=48?1:Math.pow(2,_-48),v=E(g),p=v.j(f);D(p)||p.l(y)>0;)g-=_,v=E(g),p=v.j(f);O(v)&&(v=R),m=m.add(v),y=V(y,p)}return new U(m,y)}n.B=function(y){return H(this,y).h},n.and=function(y){const f=Math.max(this.g.length,y.g.length),g=[];for(let _=0;_<f;_++)g[_]=this.i(_)&y.i(_);return new h(g,this.h&y.h)},n.or=function(y){const f=Math.max(this.g.length,y.g.length),g=[];for(let _=0;_<f;_++)g[_]=this.i(_)|y.i(_);return new h(g,this.h|y.h)},n.xor=function(y){const f=Math.max(this.g.length,y.g.length),g=[];for(let _=0;_<f;_++)g[_]=this.i(_)^y.i(_);return new h(g,this.h^y.h)};function ie(y){const f=y.g.length+1,g=[];for(let _=0;_<f;_++)g[_]=y.i(_)<<1|y.i(_-1)>>>31;return new h(g,y.h)}function Y(y,f){const g=f>>5;f%=32;const _=y.g.length-g,m=[];for(let v=0;v<_;v++)m[v]=f>0?y.i(v+g)>>>f|y.i(v+g+1)<<32-f:y.i(v+g);return new h(m,y.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=E,h.fromString=C,fa=h}).apply(typeof cc<"u"?cc:typeof self<"u"?self:typeof window<"u"?window:{});var gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof gi=="object"&&gi];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=t(this);function i(o,l){if(l)e:{var d=s;o=o.split(".");for(var I=0;I<o.length-1;I++){var r=o[I];if(!(r in d))break e;d=d[r]}o=o[o.length-1],I=d[o],l=l(I),l!=I&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}i("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(o){return o||function(l){var d=[],I;for(I in l)Object.prototype.hasOwnProperty.call(l,I)&&d.push([I,l[I]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},h=this||self;function b(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function T(o,l,d){return o.call.apply(o.bind,arguments)}function E(o,l,d){return E=T,E.apply(null,arguments)}function C(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var I=d.slice();return I.push.apply(I,arguments),o.apply(this,I)}}function k(o,l){function d(){}d.prototype=l.prototype,o.Z=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(I,r,a){for(var u=Array(arguments.length-2),w=2;w<arguments.length;w++)u[w-2]=arguments[w];return l.prototype[r].apply(I,u)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function L(o){const l=o.length;if(l>0){const d=Array(l);for(let I=0;I<l;I++)d[I]=o[I];return d}return[]}function O(o,l){for(let I=1;I<arguments.length;I++){const r=arguments[I];var d=typeof r;if(d=d!="object"?d:r?Array.isArray(r)?"array":d:"null",d=="array"||d=="object"&&typeof r.length=="number"){d=o.length||0;const a=r.length||0;o.length=d+a;for(let u=0;u<a;u++)o[d+u]=r[u]}else o.push(r)}}class D{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function N(o){h.setTimeout(()=>{throw o},0)}function V(){var o=y;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class j{constructor(){this.h=this.g=null}add(l,d){const I=U.get();I.set(l,d),this.h?this.h.next=I:this.g=I,this.h=I}}var U=new D(()=>new H,o=>o.reset());class H{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,Y=!1,y=new j,f=()=>{const o=Promise.resolve(void 0);ie=()=>{o.then(g)}};function g(){for(var o;o=V();){try{o.h.call(o.g)}catch(d){N(d)}var l=U;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}Y=!1}function _(){this.u=this.u,this.C=this.C}_.prototype.u=!1,_.prototype.dispose=function(){this.u||(this.u=!0,this.N())},_.prototype[Symbol.dispose]=function(){this.dispose()},_.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function m(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}m.prototype.h=function(){this.defaultPrevented=!0};var v=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};h.addEventListener("test",d,l),h.removeEventListener("test",d,l)}catch{}return o})();function p(o){return/^[\s\xa0]*$/.test(o)}function te(o,l){m.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}k(te,m),te.prototype.init=function(o,l){const d=this.type=o.type,I=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&te.Z.h.call(this)},te.prototype.h=function(){te.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var de="closure_listenable_"+(Math.random()*1e6|0),ao=0;function co(o,l,d,I,r){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!I,this.ha=r,this.key=++ao,this.da=this.fa=!1}function pt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function gt(o,l,d){for(const I in o)l.call(d,o[I],I,o)}function ho(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function Gs(o){const l={};for(const d in o)l[d]=o[d];return l}const qs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ks(o,l){let d,I;for(let r=1;r<arguments.length;r++){I=arguments[r];for(d in I)o[d]=I[d];for(let a=0;a<qs.length;a++)d=qs[a],Object.prototype.hasOwnProperty.call(I,d)&&(o[d]=I[d])}}function mt(o){this.src=o,this.g={},this.h=0}mt.prototype.add=function(o,l,d,I,r){const a=o.toString();o=this.g[a],o||(o=this.g[a]=[],this.h++);const u=mn(o,l,I,r);return u>-1?(l=o[u],d||(l.fa=!1)):(l=new co(l,this.src,a,!!I,r),l.fa=d,o.push(l)),l};function gn(o,l){const d=l.type;if(d in o.g){var I=o.g[d],r=Array.prototype.indexOf.call(I,l,void 0),a;(a=r>=0)&&Array.prototype.splice.call(I,r,1),a&&(pt(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function mn(o,l,d,I){for(let r=0;r<o.length;++r){const a=o[r];if(!a.da&&a.listener==l&&a.capture==!!d&&a.ha==I)return r}return-1}var yn="closure_lm_"+(Math.random()*1e6|0),_n={};function Js(o,l,d,I,r){if(Array.isArray(l)){for(let a=0;a<l.length;a++)Js(o,l[a],d,I,r);return null}return d=Qs(d),o&&o[de]?o.J(l,d,b(I)?!!I.capture:!1,r):lo(o,l,d,!1,I,r)}function lo(o,l,d,I,r,a){if(!l)throw Error("Invalid event type");const u=b(r)?!!r.capture:!!r;let w=vn(o);if(w||(o[yn]=w=new mt(o)),d=w.add(l,d,I,u,a),d.proxy)return d;if(I=uo(),d.proxy=I,I.src=o,I.listener=d,o.addEventListener)v||(r=u),r===void 0&&(r=!1),o.addEventListener(l.toString(),I,r);else if(o.attachEvent)o.attachEvent(Ys(l.toString()),I);else if(o.addListener&&o.removeListener)o.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return d}function uo(){function o(d){return l.call(o.src,o.listener,d)}const l=fo;return o}function Xs(o,l,d,I,r){if(Array.isArray(l))for(var a=0;a<l.length;a++)Xs(o,l[a],d,I,r);else I=b(I)?!!I.capture:!!I,d=Qs(d),o&&o[de]?(o=o.i,a=String(l).toString(),a in o.g&&(l=o.g[a],d=mn(l,d,I,r),d>-1&&(pt(l[d]),Array.prototype.splice.call(l,d,1),l.length==0&&(delete o.g[a],o.h--)))):o&&(o=vn(o))&&(l=o.g[l.toString()],o=-1,l&&(o=mn(l,d,I,r)),(d=o>-1?l[o]:null)&&wn(d))}function wn(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[de])gn(l.i,o);else{var d=o.type,I=o.proxy;l.removeEventListener?l.removeEventListener(d,I,o.capture):l.detachEvent?l.detachEvent(Ys(d),I):l.addListener&&l.removeListener&&l.removeListener(I),(d=vn(l))?(gn(d,o),d.h==0&&(d.src=null,l[yn]=null)):pt(o)}}}function Ys(o){return o in _n?_n[o]:_n[o]="on"+o}function fo(o,l){if(o.da)o=!0;else{l=new te(l,this);const d=o.listener,I=o.ha||o.src;o.fa&&wn(o),o=d.call(I,l)}return o}function vn(o){return o=o[yn],o instanceof mt?o:null}var In="__closure_events_fn_"+(Math.random()*1e9>>>0);function Qs(o){return typeof o=="function"?o:(o[In]||(o[In]=function(l){return o.handleEvent(l)}),o[In])}function X(){_.call(this),this.i=new mt(this),this.M=this,this.G=null}k(X,_),X.prototype[de]=!0,X.prototype.removeEventListener=function(o,l,d,I){Xs(this,o,l,d,I)};function Q(o,l){var d,I=o.G;if(I)for(d=[];I;I=I.G)d.push(I);if(o=o.M,I=l.type||l,typeof l=="string")l=new m(l,o);else if(l instanceof m)l.target=l.target||o;else{var r=l;l=new m(I,o),Ks(l,r)}r=!0;let a,u;if(d)for(u=d.length-1;u>=0;u--)a=l.g=d[u],r=yt(a,I,!0,l)&&r;if(a=l.g=o,r=yt(a,I,!0,l)&&r,r=yt(a,I,!1,l)&&r,d)for(u=0;u<d.length;u++)a=l.g=d[u],r=yt(a,I,!1,l)&&r}X.prototype.N=function(){if(X.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const d=o.g[l];for(let I=0;I<d.length;I++)pt(d[I]);delete o.g[l],o.h--}}this.G=null},X.prototype.J=function(o,l,d,I){return this.i.add(String(o),l,!1,d,I)},X.prototype.K=function(o,l,d,I){return this.i.add(String(o),l,!0,d,I)};function yt(o,l,d,I){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let r=!0;for(let a=0;a<l.length;++a){const u=l[a];if(u&&!u.da&&u.capture==d){const w=u.listener,S=u.ha||u.src;u.fa&&gn(o.i,u),r=w.call(S,I)!==!1&&r}}return r&&!I.defaultPrevented}function po(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=E(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:h.setTimeout(o,l||0)}function Zs(o){o.g=po(()=>{o.g=null,o.i&&(o.i=!1,Zs(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class go extends _{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Zs(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ee(o){_.call(this),this.h=o,this.g={}}k(Ee,_);var er=[];function tr(o){gt(o.g,function(l,d){this.g.hasOwnProperty(d)&&wn(l)},o),o.g={}}Ee.prototype.N=function(){Ee.Z.N.call(this),tr(this)},Ee.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bn=h.JSON.stringify,mo=h.JSON.parse,yo=class{stringify(o){return h.JSON.stringify(o,void 0)}parse(o){return h.JSON.parse(o,void 0)}};function nr(){}function sr(){m.call(this,"d")}k(sr,m);function _t(){m.call(this,"c")}k(_t,m);var $e={},us=null;function He(){return us=us||new X}$e.Ia="serverreachability";function rr(o){m.call(this,$e.Ia,o)}k(rr,m);function wt(o){const l=He();Q(l,new rr(l))}$e.STAT_EVENT="statevent";function ir(o,l){m.call(this,$e.STAT_EVENT,o),this.stat=l}k(ir,m);function ce(o){const l=He();Q(l,new ir(l,o))}$e.Ja="timingevent";function or(o,l){m.call(this,$e.Ja,o),this.size=l}k(or,m);function he(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){o()},l)}function jt(){this.g=!0}jt.prototype.ua=function(){this.g=!1};function Tn(o,l,d,I,r,a){o.info(function(){if(o.g)if(a){var u="",w=a.split("&");for(let A=0;A<w.length;A++){var S=w[A].split("=");if(S.length>1){const P=S[0];S=S[1];const M=P.split("_");u=M.length>=2&&M[1]=="type"?u+(P+"="+S+"&"):u+(P+"=redacted&")}}}else u=null;else u=a;return"XMLHTTP REQ ("+I+") [attempt "+r+"]: "+l+`
`+d+`
`+u})}function En(o,l,d,I,r,a,u){o.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+r+"]: "+l+`
`+d+`
`+a+" "+u})}function Vt(o,l,d,I){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Bt(o,d)+(I?" "+I:"")})}function _o(o,l){o.info(function(){return"TIMEOUT: "+l})}jt.prototype.info=function(){};function Bt(o,l){if(!o.g)return l;if(!l)return null;try{const a=JSON.parse(l);if(a){for(o=0;o<a.length;o++)if(Array.isArray(a[o])){var d=a[o];if(!(d.length<2)){var I=d[1];if(Array.isArray(I)&&!(I.length<1)){var r=I[0];if(r!="noop"&&r!="stop"&&r!="close")for(let u=1;u<I.length;u++)I[u]=""}}}}return bn(a)}catch{return l}}var ti;function ar(){}k(ar,nr),ar.prototype.g=function(){return new XMLHttpRequest},ti=new ar;function vt(o){return encodeURIComponent(String(o))}function wo(o){var l=1;o=o.split(":");const d=[];for(;l>0&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function Se(o,l,d,I){this.j=o,this.i=l,this.l=d,this.S=I||1,this.V=new Ee(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ds}function ds(){this.i=null,this.g="",this.h=!1}var $t={},cr={};function Ie(o,l,d){o.M=1,o.A=We(ve(l)),o.u=d,o.R=!0,hr(o,null)}function hr(o,l){o.F=Date.now(),Sn(o),o.B=ve(o.A);var d=o.B,I=o.S;Array.isArray(I)||(I=[String(I)]),Ge(d.i,"t",I),o.C=0,d=o.j.L,o.h=new ds,o.g=br(o.j,d?l:null,!o.u),o.P>0&&(o.O=new go(E(o.Y,o,o.g),o.P)),l=o.V,d=o.g,I=o.ba;var r="readystatechange";Array.isArray(r)||(r&&(er[0]=r.toString()),r=er);for(let a=0;a<r.length;a++){const u=Js(d,r[a],I||l.handleEvent,!1,l.h||l);if(!u)break;l.g[u.key]=u}l=o.J?Gs(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),wt(),Tn(o.i,o.v,o.B,o.l,o.S,o.u)}Se.prototype.ba=function(o){o=o.target;const l=this.O;l&&Re(o)==3?l.j():this.Y(o)},Se.prototype.Y=function(o){try{if(o==this.g)e:{const w=Re(this.g),S=this.g.ya(),A=this.g.ca();if(!(w<3)&&(w!=3||this.g&&(this.h.h||this.g.la()||_r(this.g)))){this.K||w!=4||S==7||(S==8||A<=0?wt(3):wt(2)),ps(this);var l=this.g.ca();this.X=l;var d=ni(this);if(this.o=l==200,En(this.i,this.v,this.B,this.l,this.S,w,l),this.o){if(this.U&&!this.L){t:{if(this.g){var I,r=this.g;if((I=r.g?r.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(I)){var a=I;break t}}a=null}if(o=a)Vt(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,gs(this,o);else{this.o=!1,this.m=3,ce(12),be(this),An(this);break e}}if(this.R){o=!0;let P;for(;!this.K&&this.C<d.length;)if(P=lr(this,d),P==cr){w==4&&(this.m=4,ce(14),o=!1),Vt(this.i,this.l,null,"[Incomplete Response]");break}else if(P==$t){this.m=4,ce(15),Vt(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else Vt(this.i,this.l,P,null),gs(this,P);if(fs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),w!=4||d.length!=0||this.h.h||(this.m=1,ce(16),o=!1),this.o=this.o&&o,!o)Vt(this.i,this.l,d,"[Invalid Chunked Response]"),be(this),An(this);else if(d.length>0&&!this.W){this.W=!0;var u=this.j;u.g==this&&u.aa&&!u.P&&(u.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),St(u),u.P=!0,ce(11))}}else Vt(this.i,this.l,d,null),gs(this,d);w==4&&be(this),this.o&&!this.K&&(w==4?As(this.j,this):(this.o=!1,Sn(this)))}else di(this.g),l==400&&d.indexOf("Unknown SID")>0?(this.m=3,ce(12)):(this.m=0,ce(13)),be(this),An(this)}}}catch{}finally{}};function ni(o){if(!fs(o))return o.g.la();const l=_r(o.g);if(l==="")return"";let d="";const I=l.length,r=Re(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return be(o),An(o),"";o.h.i=new h.TextDecoder}for(let a=0;a<I;a++)o.h.h=!0,d+=o.h.i.decode(l[a],{stream:!(r&&a==I-1)});return l.length=0,o.h.g+=d,o.C=0,o.h.g}function fs(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function lr(o,l){var d=o.C,I=l.indexOf(`
`,d);return I==-1?cr:(d=Number(l.substring(d,I)),isNaN(d)?$t:(I+=1,I+d>l.length?cr:(l=l.slice(I,I+d),o.C=I+d,l)))}Se.prototype.cancel=function(){this.K=!0,be(this)};function Sn(o){o.T=Date.now()+o.H,si(o,o.H)}function si(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=he(E(o.aa,o),l)}function ps(o){o.D&&(h.clearTimeout(o.D),o.D=null)}Se.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(_o(this.i,this.B),this.M!=2&&(wt(),ce(17)),be(this),this.m=2,An(this)):si(this,this.T-o)};function An(o){o.j.I==0||o.K||As(o.j,o)}function be(o){ps(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,tr(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function gs(o,l){try{var d=o.j;if(d.I!=0&&(d.g==o||dr(d.h,o))){if(!o.L&&dr(d.h,o)&&d.I==3){try{var I=d.Ba.g.parse(l)}catch{I=null}if(Array.isArray(I)&&I.length==3){var r=I;if(r[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)Fn(d),Es(d);else break e;Ss(d),ce(18)}}else d.xa=r[1],0<d.xa-d.K&&r[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=he(E(d.Va,d),6e3));ms(d.h)<=1&&d.ta&&(d.ta=void 0)}else Ke(d,11)}else if((o.L||d.g==o)&&Fn(d),!p(l))for(r=d.Ba.g.parse(l),l=0;l<r.length;l++){let A=r[l];const P=A[0];if(!(P<=d.K))if(d.K=P,A=A[1],d.I==2)if(A[0]=="c"){d.M=A[1],d.ba=A[2];const M=A[3];M!=null&&(d.ka=M,d.j.info("VER="+d.ka));const oe=A[4];oe!=null&&(d.za=oe,d.j.info("SVER="+d.za));const $=A[5];$!=null&&typeof $=="number"&&$>0&&(I=1.5*$,d.O=I,d.j.info("backChannelRequestTimeoutMs_="+I)),I=d;const re=o.g;if(re){const ge=re.g?re.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ge){var a=I.h;a.g||ge.indexOf("spdy")==-1&&ge.indexOf("quic")==-1&&ge.indexOf("h2")==-1||(a.j=a.l,a.g=new Set,a.h&&(ys(a,a.h),a.h=null))}if(I.G){const Ne=re.g?re.g.getResponseHeader("X-HTTP-Session-Id"):null;Ne&&(I.wa=Ne,B(I.J,I.G,Ne))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),I=d;var u=o;if(I.na=Ir(I,I.L?I.ba:null,I.W),u.L){fr(I.h,u);var w=u,S=I.O;S&&(w.H=S),w.D&&(ps(w),Sn(w)),I.g=u}else fi(I);d.i.length>0&&Mn(d)}else A[0]!="stop"&&A[0]!="close"||Ke(d,7);else d.I==3&&(A[0]=="stop"||A[0]=="close"?A[0]=="stop"?Ke(d,7):Ts(d):A[0]!="noop"&&d.l&&d.l.qa(A),d.A=0)}}wt(4)}catch{}}var ur=class{constructor(o,l){this.g=o,this.map=l}};function Ht(o){this.l=o||10,h.PerformanceNavigationTiming?(o=h.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ze(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ms(o){return o.h?1:o.g?o.g.size:0}function dr(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function ys(o,l){o.g?o.g.add(l):o.h=l}function fr(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Ht.prototype.cancel=function(){if(this.i=pr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function pr(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.G);return l}return L(o.i)}var _s=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gr(o,l){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const I=o[d].indexOf("=");let r,a=null;I>=0?(r=o[d].substring(0,I),a=o[d].substring(I+1)):r=o[d],l(r,a?decodeURIComponent(a.replace(/\+/g," ")):"")}}}function Ae(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof Ae?(this.l=o.l,zt(this,o.j),this.o=o.o,this.g=o.g,kn(this,o.u),this.h=o.h,Te(this,mr(o.i)),this.m=o.m):o&&(l=String(o).match(_s))?(this.l=!1,zt(this,l[1]||"",!0),this.o=ke(l[2]||""),this.g=ke(l[3]||"",!0),kn(this,l[4]),this.h=ke(l[5]||"",!0),Te(this,l[6]||"",!0),this.m=ke(l[7]||"")):(this.l=!1,this.i=new Nn(null,this.l))}Ae.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(It(l,Cn,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(It(l,Cn,!0),"@"),o.push(vt(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(It(d,d.charAt(0)=="/"?Pn:Rn,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",It(d,ri)),o.join("")},Ae.prototype.resolve=function(o){const l=ve(this);let d=!!o.j;d?zt(l,o.j):d=!!o.o,d?l.o=o.o:d=!!o.g,d?l.g=o.g:d=o.u!=null;var I=o.h;if(d)kn(l,o.u);else if(d=!!o.h){if(I.charAt(0)!="/")if(this.g&&!this.h)I="/"+I;else{var r=l.h.lastIndexOf("/");r!=-1&&(I=l.h.slice(0,r+1)+I)}if(r=I,r==".."||r==".")I="";else if(r.indexOf("./")!=-1||r.indexOf("/.")!=-1){I=r.lastIndexOf("/",0)==0,r=r.split("/");const a=[];for(let u=0;u<r.length;){const w=r[u++];w=="."?I&&u==r.length&&a.push(""):w==".."?((a.length>1||a.length==1&&a[0]!="")&&a.pop(),I&&u==r.length&&a.push("")):(a.push(w),I=!0)}I=a.join("/")}else I=r}return d?l.h=I:d=o.i.toString()!=="",d?Te(l,mr(o.i)):d=!!o.m,d&&(l.m=o.m),l};function ve(o){return new Ae(o)}function zt(o,l,d){o.j=d?ke(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function kn(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function Te(o,l,d){l instanceof Nn?(o.i=l,ai(o.i,o.l)):(d||(l=It(l,vo)),o.i=new Nn(l,o.l))}function B(o,l,d){o.i.set(l,d)}function We(o){return B(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function ke(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function It(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,ne),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ne(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Cn=/[#\/\?@]/g,Rn=/[#\?:]/g,Pn=/[#\?]/g,vo=/[#\?@]/g,ri=/#/g;function Nn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function bt(o){o.g||(o.g=new Map,o.h=0,o.i&&gr(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=Nn.prototype,n.add=function(o,l){bt(this),this.i=null,o=Tt(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function ii(o,l){bt(o),l=Tt(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function oi(o,l){return bt(o),l=Tt(o,l),o.g.has(l)}n.forEach=function(o,l){bt(this),this.g.forEach(function(d,I){d.forEach(function(r){o.call(l,r,I,this)},this)},this)};function Wt(o,l){bt(o);let d=[];if(typeof l=="string")oi(o,l)&&(d=d.concat(o.g.get(Tt(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)d=d.concat(o[l]);return d}n.set=function(o,l){return bt(this),this.i=null,o=Tt(this,o),oi(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=Wt(this,o),o.length>0?String(o[0]):l):l};function Ge(o,l,d){ii(o,l),d.length>0&&(o.i=null,o.g.set(Tt(o,l),L(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let I=0;I<l.length;I++){var d=l[I];const r=vt(d);d=Wt(this,d);for(let a=0;a<d.length;a++){let u=r;d[a]!==""&&(u+="="+vt(d[a])),o.push(u)}}return this.i=o.join("&")};function mr(o){const l=new Nn;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function Tt(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function ai(o,l){l&&!o.j&&(bt(o),o.i=null,o.g.forEach(function(d,I){const r=I.toLowerCase();I!=r&&(ii(this,I),Ge(this,r,d))},o)),o.j=l}function ci(o,l){const d=new jt;if(h.Image){const I=new Image;I.onload=C(fe,d,"TestLoadImage: loaded",!0,l,I),I.onerror=C(fe,d,"TestLoadImage: error",!1,l,I),I.onabort=C(fe,d,"TestLoadImage: abort",!1,l,I),I.ontimeout=C(fe,d,"TestLoadImage: timeout",!1,l,I),h.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=o}else l(!1)}function hi(o,l){const d=new jt,I=new AbortController,r=setTimeout(()=>{I.abort(),fe(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:I.signal}).then(a=>{clearTimeout(r),a.ok?fe(d,"TestPingServer: ok",!0,l):fe(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(r),fe(d,"TestPingServer: error",!1,l)})}function fe(o,l,d,I,r){try{r&&(r.onload=null,r.onerror=null,r.onabort=null,r.ontimeout=null),I(d)}catch{}}function Io(){this.g=new yo}function yr(o){this.i=o.Sb||null,this.h=o.ab||!1}k(yr,nr),yr.prototype.g=function(){return new ws(this.i,this.h)};function ws(o,l){X.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}k(ws,X),n=ws.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,Et(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||h).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,On(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Et(this)),this.g&&(this.readyState=3,Et(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ce(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ce(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?On(this):Et(this),this.readyState==3&&Ce(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,On(this))},n.Na=function(o){this.g&&(this.response=o,On(this))},n.ga=function(){this.g&&On(this)};function On(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Et(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function Et(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ws.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Dn(o){let l="";return gt(o,function(d,I){l+=I,l+=":",l+=d,l+=`\r
`}),l}function vs(o,l,d){e:{for(I in d){var I=!1;break e}I=!0}I||(d=Dn(d),typeof o=="string"?d!=null&&vt(d):B(o,l,d))}function se(o){X.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}k(se,X);var Ln=/^https?$/i,li=["POST","PUT"];n=se.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,d,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ti.g(),this.g.onreadystatechange=R(E(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(a){Is(this,a);return}if(o=d||"",d=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var r in I)d.set(r,I[r]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const a of I.keys())d.set(a,I.get(a));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(d.keys()).find(a=>a.toLowerCase()=="content-type"),r=h.FormData&&o instanceof h.FormData,!(Array.prototype.indexOf.call(li,l,void 0)>=0)||I||r||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[a,u]of d)this.g.setRequestHeader(a,u);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(a){Is(this,a)}};function Is(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,ae(o),bs(o)}function ae(o){o.A||(o.A=!0,Q(o,"complete"),Q(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Q(this,"complete"),Q(this,"abort"),bs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bs(this,!0)),se.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ui(this):this.Xa())},n.Xa=function(){ui(this)};function ui(o){if(o.h&&typeof c<"u"){if(o.v&&Re(o)==4)setTimeout(o.Ca.bind(o),0);else if(Q(o,"readystatechange"),Re(o)==4){o.h=!1;try{const a=o.ca();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var I;if(I=a===0){let u=String(o.D).match(_s)[1]||null;!u&&h.self&&h.self.location&&(u=h.self.location.protocol.slice(0,-1)),I=!Ln.test(u?u.toLowerCase():"")}d=I}if(d)Q(o,"complete"),Q(o,"success");else{o.o=6;try{var r=Re(o)>2?o.g.statusText:""}catch{r=""}o.l=r+" ["+o.ca()+"]",ae(o)}}finally{bs(o)}}}}function bs(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,l||Q(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Re(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Re(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),mo(l)}};function _r(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function di(o){const l={};o=(o.g&&Re(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<o.length;I++){if(p(o[I]))continue;var d=wo(o[I]);const r=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const a=l[r]||[];l[r]=a,a.push(d)}ho(l,function(I){return I.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function qe(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function Pe(o){this.za=0,this.i=[],this.j=new jt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=qe("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=qe("baseRetryDelayMs",5e3,o),this.Za=qe("retryDelaySeedMs",1e4,o),this.Ta=qe("forwardChannelMaxRetries",2,o),this.va=qe("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Ht(o&&o.concurrentRequestLimit),this.Ba=new Io,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Pe.prototype,n.ka=8,n.I=1,n.connect=function(o,l,d,I){ce(0),this.W=o,this.H=l||{},d&&I!==void 0&&(this.H.OSID=d,this.H.OAID=I),this.F=this.X,this.J=Ir(this,null,this.W),Mn(this)};function Ts(o){if(Gt(o),o.I==3){var l=o.V++,d=ve(o.J);if(B(d,"SID",o.M),B(d,"RID",l),B(d,"TYPE","terminate"),qt(o,d),l=new Se(o,o.j,l),l.M=2,l.A=We(ve(d)),d=!1,h.navigator&&h.navigator.sendBeacon)try{d=h.navigator.sendBeacon(l.A.toString(),"")}catch{}!d&&h.Image&&(new Image().src=l.A,d=!0),d||(l.g=br(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Sn(l)}jn(o)}function Es(o){o.g&&(St(o),o.g.cancel(),o.g=null)}function Gt(o){Es(o),o.v&&(h.clearTimeout(o.v),o.v=null),Fn(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&h.clearTimeout(o.m),o.m=null)}function Mn(o){if(!ze(o.h)&&!o.m){o.m=!0;var l=o.Ea;ie||f(),Y||(ie(),Y=!0),y.add(l,o),o.D=0}}function wr(o,l){return ms(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=he(E(o.Ea,o,l),ks(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const r=new Se(this,this.j,o);let a=this.o;if(this.U&&(a?(a=Gs(a),Ks(a,this.U)):a=this.U),this.u!==null||this.R||(r.J=a,a=null),this.S)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var I=this.i[d];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(l+=I,l>4096){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=xn(this,r,l),d=ve(this.J),B(d,"RID",o),B(d,"CVER",22),this.G&&B(d,"X-HTTP-Session-Id",this.G),qt(this,d),a&&(this.R?l="headers="+vt(Dn(a))+"&"+l:this.u&&vs(d,this.u,a)),ys(this.h,r),this.Ra&&B(d,"TYPE","init"),this.S?(B(d,"$req",l),B(d,"SID","null"),r.U=!0,Ie(r,d,null)):Ie(r,d,l),this.I=2}}else this.I==3&&(o?Un(this,o):this.i.length==0||ze(this.h)||Un(this))};function Un(o,l){var d;l?d=l.l:d=o.V++;const I=ve(o.J);B(I,"SID",o.M),B(I,"RID",d),B(I,"AID",o.K),qt(o,I),o.u&&o.o&&vs(I,o.u,o.o),d=new Se(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),l&&(o.i=l.G.concat(o.i)),l=xn(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),ys(o.h,d),Ie(d,I,l)}function qt(o,l){o.H&&gt(o.H,function(d,I){B(l,I,d)}),o.l&&gt({},function(d,I){B(l,I,d)})}function xn(o,l,d){d=Math.min(o.i.length,d);const I=o.l?E(o.l.Ka,o.l,o):null;e:{var r=o.i;let w=-1;for(;;){const S=["count="+d];w==-1?d>0?(w=r[0].g,S.push("ofs="+w)):w=0:S.push("ofs="+w);let A=!0;for(let P=0;P<d;P++){var a=r[P].g;const M=r[P].map;if(a-=w,a<0)w=Math.max(0,r[P].g-100),A=!1;else try{a="req"+a+"_"||"";try{var u=M instanceof Map?M:Object.entries(M);for(const[oe,$]of u){let re=$;b($)&&(re=bn($)),S.push(a+oe+"="+encodeURIComponent(re))}}catch(oe){throw S.push(a+"type="+encodeURIComponent("_badmap")),oe}}catch{I&&I(M)}}if(A){u=S.join("&");break e}}u=void 0}return o=o.i.splice(0,d),l.G=o,u}function fi(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;ie||f(),Y||(ie(),Y=!0),y.add(l,o),o.A=0}}function Ss(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=he(E(o.Da,o),ks(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,vr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=he(E(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ce(10),Es(this),vr(this))};function St(o){o.B!=null&&(h.clearTimeout(o.B),o.B=null)}function vr(o){o.g=new Se(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=ve(o.na);B(l,"RID","rpc"),B(l,"SID",o.M),B(l,"AID",o.K),B(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&B(l,"TO",o.ia),B(l,"TYPE","xmlhttp"),qt(o,l),o.u&&o.o&&vs(l,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=We(ve(l)),d.u=null,d.R=!0,hr(d,o)}n.Va=function(){this.C!=null&&(this.C=null,Es(this),Ss(this),ce(19))};function Fn(o){o.C!=null&&(h.clearTimeout(o.C),o.C=null)}function As(o,l){var d=null;if(o.g==l){Fn(o),St(o),o.g=null;var I=2}else if(dr(o.h,l))d=l.G,fr(o.h,l),I=1;else return;if(o.I!=0){if(l.o)if(I==1){d=l.u?l.u.length:0,l=Date.now()-l.F;var r=o.D;I=He(),Q(I,new or(I,d)),Mn(o)}else fi(o);else if(r=l.m,r==3||r==0&&l.X>0||!(I==1&&wr(o,l)||I==2&&Ss(o)))switch(d&&d.length>0&&(l=o.h,l.i=l.i.concat(d)),r){case 1:Ke(o,5);break;case 4:Ke(o,10);break;case 3:Ke(o,6);break;default:Ke(o,2)}}}function ks(o,l){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*l}function Ke(o,l){if(o.j.info("Error code "+l),l==2){var d=E(o.bb,o),I=o.Ua;const r=!I;I=new Ae(I||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||zt(I,"https"),We(I),r?ci(I.toString(),d):hi(I.toString(),d)}else ce(2);o.I=0,o.l&&o.l.pa(l),jn(o),Gt(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),ce(2)):(this.j.info("Failed to ping google.com"),ce(1))};function jn(o){if(o.I=0,o.ja=[],o.l){const l=pr(o.h);(l.length!=0||o.i.length!=0)&&(O(o.ja,l),O(o.ja,o.i),o.h.i.length=0,L(o.i),o.i.length=0),o.l.oa()}}function Ir(o,l,d){var I=d instanceof Ae?ve(d):new Ae(d);if(I.g!="")l&&(I.g=l+"."+I.g),kn(I,I.u);else{var r=h.location;I=r.protocol,l=l?l+"."+r.hostname:r.hostname,r=+r.port;const a=new Ae(null);I&&zt(a,I),l&&(a.g=l),r&&kn(a,r),d&&(a.h=d),I=a}return d=o.G,l=o.wa,d&&l&&B(I,d,l),B(I,"VER",o.ka),qt(o,I),I}function br(o,l,d){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new se(new yr({ab:d})):new se(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Je(){}n=Je.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function pe(o,l){X.call(this),this.g=new Pe(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!p(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!p(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new At(this)}k(pe,X),pe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},pe.prototype.close=function(){Ts(this.g)},pe.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=bn(o),o=d);l.i.push(new ur(l.Ya++,o)),l.I==3&&Mn(l)},pe.prototype.N=function(){this.g.l=null,delete this.j,Ts(this.g),delete this.g,pe.Z.N.call(this)};function Tr(o){sr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}k(Tr,sr);function Er(){_t.call(this),this.status=1}k(Er,_t);function At(o){this.g=o}k(At,Je),At.prototype.ra=function(){Q(this.g,"a")},At.prototype.qa=function(o){Q(this.g,new Tr(o))},At.prototype.pa=function(o){Q(this.g,new Er)},At.prototype.oa=function(){Q(this.g,"b")},pe.prototype.send=pe.prototype.o,pe.prototype.open=pe.prototype.m,pe.prototype.close=pe.prototype.close,X.prototype.listen=X.prototype.J,se.prototype.listenOnce=se.prototype.K,se.prototype.getLastError=se.prototype.Ha,se.prototype.getLastErrorCode=se.prototype.ya,se.prototype.getStatus=se.prototype.ca,se.prototype.getResponseJson=se.prototype.La,se.prototype.getResponseText=se.prototype.la,se.prototype.send=se.prototype.ea,se.prototype.setWithCredentials=se.prototype.Fa}).apply(typeof gi<"u"?gi:typeof self<"u"?self:typeof window<"u"?window:{});const hc="@firebase/firestore",lc="4.9.2";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}me.UNAUTHENTICATED=new me(null),me.GOOGLE_CREDENTIALS=new me("google-credentials-uid"),me.FIRST_PARTY=new me("first-party-uid"),me.MOCK_USER=new me("mock-user");/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Hr="12.3.0";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Fs=new la("@firebase/firestore");function Ue(n,...e){if(Fs.logLevel<=Z.DEBUG){const t=e.map(pa);Fs.debug(`Firestore (${Hr}): ${n}`,...t)}}function rl(n,...e){if(Fs.logLevel<=Z.ERROR){const t=e.map(pa);Fs.error(`Firestore (${Hr}): ${n}`,...t)}}function Mf(n,...e){if(Fs.logLevel<=Z.WARN){const t=e.map(pa);Fs.warn(`Firestore (${Hr}): ${n}`,...t)}}function pa(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ur(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,il(n,s,t)}function il(n,e,t){let s=`FIRESTORE (${Hr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw rl(s),new Error(s)}function Ar(n,e,t,s){let i="Unexpected state";typeof t=="string"?i=t:s=t,n||il(e,i,s)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const G={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};let q=class extends lt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class kr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ol{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Uf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(me.UNAUTHENTICATED)))}shutdown(){}}class xf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Ff{constructor(e){this.t=e,this.currentUser=me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ar(this.o===void 0,42304);let s=this.i;const i=T=>this.i!==s?(s=this.i,t(T)):Promise.resolve();let c=new kr;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new kr,e.enqueueRetryable((()=>i(this.currentUser)))};const h=()=>{const T=c;e.enqueueRetryable((async()=>{await T.promise,await i(this.currentUser)}))},b=T=>{Ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=T,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((T=>b(T))),setTimeout((()=>{if(!this.auth){const T=this.t.getImmediate({optional:!0});T?b(T):(Ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new kr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(Ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ar(typeof s.accessToken=="string",31837,{l:s}),new ol(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ar(e===null||typeof e=="string",2055,{h:e}),new me(e)}}class jf{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=me.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Vf{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new jf(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(me.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class uc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bf{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Le(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ar(this.o===void 0,3512);const s=c=>{c.error!=null&&Ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,Ue("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>s(c)))};const i=c=>{Ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>i(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?i(c):Ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new uc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ar(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new uc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $f(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Hf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=$f(40);for(let c=0;c<i.length;++c)s.length<20&&i[c]<t&&(s+=e.charAt(i[c]%62))}return s}}function dn(n,e){return n<e?-1:n>e?1:0}function zf(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const i=n.charAt(s),c=e.charAt(s);if(i!==c)return Co(i)===Co(c)?dn(i,c):Co(i)?1:-1}return dn(n.length,e.length)}const Wf=55296,Gf=57343;function Co(n){const e=n.charCodeAt(0);return e>=Wf&&e<=Gf}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const dc="__name__";class Xe{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ur(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ur(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Xe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xe?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const c=Xe.compareSegments(e.get(i),t.get(i));if(c!==0)return c}return dn(e.length,t.length)}static compareSegments(e,t){const s=Xe.isNumericId(e),i=Xe.isNumericId(t);return s&&!i?-1:!s&&i?1:s&&i?Xe.extractNumericId(e).compare(Xe.extractNumericId(t)):zf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return fa.fromString(e.substring(4,e.length-2))}}class Oe extends Xe{construct(e,t,s){return new Oe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new q(G.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((i=>i.length>0)))}return new Oe(t)}static emptyPath(){return new Oe([])}}const qf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Hn extends Xe{construct(e,t,s){return new Hn(e,t,s)}static isValidIdentifier(e){return qf.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Hn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===dc}static keyField(){return new Hn([dc])}static fromServerFormat(e){const t=[];let s="",i=0;const c=()=>{if(s.length===0)throw new q(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;i<e.length;){const b=e[i];if(b==="\\"){if(i+1===e.length)throw new q(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const T=e[i+1];if(T!=="\\"&&T!=="."&&T!=="`")throw new q(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=T,i+=2}else b==="`"?(h=!h,i++):b!=="."||h?(s+=b,i++):(c(),i++)}if(c(),h)throw new q(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Hn(t)}static emptyPath(){return new Hn([])}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Wn{constructor(e){this.path=e}static fromPath(e){return new Wn(Oe.fromString(e))}static fromName(e){return new Wn(Oe.fromString(e).popFirst(5))}static empty(){return new Wn(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Wn(new Oe(e.slice()))}}function Kf(n,e,t,s){if(e===!0&&s===!0)throw new q(G.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Jf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Xf(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(t){return t.constructor?t.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ur(12329,{type:typeof n})}function Yf(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new q(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xf(n);throw new q(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
*/function le(n,e){const t={typeString:n};return e&&(t.value=e),t}function zr(n,e){if(!Jf(n))throw new q(G.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const i=e[s].typeString,c="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const h=n[s];if(i&&typeof h!==i){t=`JSON field '${s}' must be a ${i}.`;break}if(c!==void 0&&h!==c.value){t=`Expected '${s}' field to equal '${c.value}'`;break}}if(t)throw new q(G.INVALID_ARGUMENT,t);return!0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const fc=-62135596800,pc=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*pc);return new Qe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new q(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new q(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<fc)throw new q(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/pc}_compareTo(e){return this.seconds===e.seconds?dn(this.nanoseconds,e.nanoseconds):dn(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(zr(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:le("string",Qe._jsonSchemaVersion),seconds:le("number"),nanoseconds:le("number")};function Qf(n){return n.name==="IndexedDbTransactionError"}/**
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
*/class Zf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ts{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Zf("Invalid base64 string: "+i):i}})(e);return new ts(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let c=0;c<s.length;++c)i+=String.fromCharCode(s[c]);return i})(e);return new ts(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return dn(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ts.EMPTY_BYTE_STRING=new ts("");const Ko="(default)";class Mi{constructor(e,t){this.projectId=e,this.database=t||Ko}static empty(){return new Mi("","")}get isDefaultDatabase(){return this.database===Ko}isEqual(e){return e instanceof Mi&&e.projectId===this.projectId&&e.database===this.database}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ep{constructor(e,t=null,s=[],i=[],c=null,h="F",b=null,T=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=c,this.limitType=h,this.startAt=b,this.endAt=T,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function tp(n){return new ep(n)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gc,z;(z=gc||(gc={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
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
*/new fa([4294967295,4294967295],0);/**
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
*/const np=41943040;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const sp=1048576;function Ro(){return typeof document<"u"?document:null}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class rp{constructor(e,t,s=1e3,i=1.5,c=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=i,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-s);i>0&&Ue("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ga{constructor(e,t,s,i,c){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=c,this.deferred=new kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,c){const h=Date.now()+s,b=new ga(e,t,h,i,c);return b.start(s),b}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var mc,yc;(yc=mc||(mc={})).Ma="default",yc.Cache="cache";/**
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
*/function ip(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const _c=new Map;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const al="firestore.googleapis.com",wc=!0;class vc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=al,this.ssl=wc}else this.host=e.host,this.ssl=e.ssl??wc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=np;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sp)throw new q(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Kf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ip(e.experimentalLongPollingOptions??{}),(function(t){if(t.timeoutSeconds!==void 0){if(isNaN(t.timeoutSeconds))throw new q(G.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new q(G.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new q(G.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(t,s){return t.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cl{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(t){if(!t)return new Uf;switch(t.type){case"firstParty":return new Vf(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new q(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const t=_c.get(e);t&&(Ue("ComponentProvider","Removing Datastore"),_c.delete(e),t.terminate())})(this),Promise.resolve()}}function op(n,e,t,s={}){n=Yf(n,cl);const i=$s(e),c=n._getSettings(),h={...c,emulatorOptions:n._getEmulatorOptions()},b=`${e}:${t}`;i&&(ca(`https://${b}`),ha("Firestore",!0)),c.host!==al&&c.host!==b&&Mf("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const T={...c,host:b,ssl:i,emulatorOptions:s};if(!Zn(T,h)&&(n._setSettings(T),s.mockUserToken)){let E,C;if(typeof s.mockUserToken=="string")E=s.mockUserToken,C=me.MOCK_USER;else{E=Qh(s.mockUserToken,n._app?.options.projectId);const k=s.mockUserToken.sub||s.mockUserToken.user_id;if(!k)throw new q(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new me(k)}n._authCredentials=new xf(new ol(E,C))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ma{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ma(this.firestore,e,this._query)}}class et{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ya(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}toJSON(){return{type:et._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(zr(t,et._jsonSchema))return new et(e,s||null,new Wn(Oe.fromString(t.referencePath)))}}et._jsonSchemaVersion="firestore/documentReference/1.0",et._jsonSchema={type:le("string",et._jsonSchemaVersion),referencePath:le("string")};class ya extends ma{constructor(e,t,s){super(e,t,tp(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new Wn(e))}withConverter(e){return new ya(this.firestore,e,this._path)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ic="AsyncQueue";class bc{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new rp(this,"async_queue_retry"),this._c=()=>{const s=Ro();s&&Ue(Ic,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Ro();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ro();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new kr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Qf(e))throw e;Ue(Ic,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,rl("INTERNAL UNHANDLED ERROR: ",Tc(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=ga.createAndSchedule(this,e,t,s,(c=>this.hc(c)));return this.tc.push(i),i}uc(){this.nc&&Ur(47125,{Pc:Tc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Tc(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ap extends cl{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new bc,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bc(e),this._firestoreClient=void 0,await e}}}function cp(n,e){const t=typeof n=="object"?n:da(),s=typeof n=="string"?n:Ko,i=to(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const c=Jh("firestore");c&&op(i,...c)}return i}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kt(ts.fromBase64String(e))}catch(t){throw new q(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new kt(ts.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(zr(e,kt._jsonSchema))return kt.fromBase64String(e.bytes)}}kt._jsonSchemaVersion="firestore/bytes/1.0",kt._jsonSchema={type:le("string",kt._jsonSchemaVersion),bytes:le("string")};/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class hl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new q(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Hn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class qn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new q(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new q(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return dn(this._lat,e._lat)||dn(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:qn._jsonSchemaVersion}}static fromJSON(e){if(zr(e,qn._jsonSchema))return new qn(e.latitude,e.longitude)}}qn._jsonSchemaVersion="firestore/geoPoint/1.0",qn._jsonSchema={type:le("string",qn._jsonSchemaVersion),latitude:le("number"),longitude:le("number")};/**
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
*/class Kn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(t,s){if(t.length!==s.length)return!1;for(let i=0;i<t.length;++i)if(t[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Kn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(zr(e,Kn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Kn(e.vectorValues);throw new q(G.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Kn._jsonSchemaVersion="firestore/vectorValue/1.0",Kn._jsonSchema={type:le("string",Kn._jsonSchemaVersion),vectorValues:le("object")};const hp=new RegExp("[~\\*/\\[\\]]");function lp(n,e,t){if(e.search(hp)>=0)throw Ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new hl(...e.split("."))._internalPath}catch{throw Ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Ec(n,e,t,s,i){let c=`Function ${e}() called with invalid data`;c+=". ";let h="";return new q(G.INVALID_ARGUMENT,c+n+h)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ll{constructor(e,t,s,i,c){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new up(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ul("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class up extends ll{data(){return super.data()}}function ul(n,e){return typeof e=="string"?lp(n,e):e instanceof hl?e._internalPath:e._delegate._internalPath}class mi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ps extends ll{constructor(e,t,s,i,c,h){super(e,t,s,i,h),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ti(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ul("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(G.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ps._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()||(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED")),t}}Ps._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ps._jsonSchema={type:le("string",Ps._jsonSchemaVersion),bundleSource:le("string","DocumentSnapshot"),bundleName:le("string"),bundle:le("string")};class Ti extends Ps{data(e={}){return super.data(e)}}class Cr{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new mi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Ti(this._firestore,this._userDataWriter,s.key,s,new mi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new q(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let c=0;return s._snapshot.docChanges.map((h=>{const b=new Ti(s._firestore,s._userDataWriter,h.doc.key,h.doc,new mi(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);return h.doc,{type:"added",doc:b,oldIndex:-1,newIndex:c++}}))}{let c=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((h=>i||h.type!==3)).map((h=>{const b=new Ti(s._firestore,s._userDataWriter,h.doc.key,h.doc,new mi(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);let T=-1,E=-1;return h.type!==0&&(T=c.indexOf(h.doc.key),c=c.delete(h.doc.key)),h.type!==1&&(c=c.add(h.doc),E=c.indexOf(h.doc.key)),{type:dp(h.type),doc:b,oldIndex:T,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(G.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Cr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Hf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],i=[];return this.docs.forEach((c=>{c._document!==null&&(t.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),i.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function dp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ur(61501,{type:n})}}Cr._jsonSchemaVersion="firestore/querySnapshot/1.0",Cr._jsonSchema={type:le("string",Cr._jsonSchemaVersion),bundleSource:le("string","QuerySnapshot"),bundleName:le("string"),bundle:le("string")};(function(n,e=!0){(function(t){Hr=t})(cs),es(new un("firestore",((t,{instanceIdentifier:s,options:i})=>{const c=t.getProvider("app").getImmediate(),h=new ap(new Ff(t.getProvider("auth-internal")),new Bf(c,t.getProvider("app-check-internal")),(function(b,T){if(!Object.prototype.hasOwnProperty.apply(b.options,["projectId"]))throw new q(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mi(b.options.projectId,T)})(c,s),c);return i={useFetchStreams:e,...i},h._setSettings(i),h}),"PUBLIC").setMultipleInstances(!0)),nt(hc,lc,n),nt(hc,lc,"esm2020")})();function dl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fp=dl,fl=new Br("auth","Firebase",dl());/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ui=new la("@firebase/auth");function pp(n,...e){Ui.logLevel<=Z.WARN&&Ui.warn(`Auth (${cs}): ${n}`,...e)}function Ei(n,...e){Ui.logLevel<=Z.ERROR&&Ui.error(`Auth (${cs}): ${n}`,...e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Lt(n,...e){throw _a(n,...e)}function st(n,...e){return _a(n,...e)}function pl(n,e,t){const s={...fp(),[e]:t};return new Br("auth","Firebase",s).create(e,{appName:n.name})}function Jn(n){return pl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _a(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return fl.create(n,...e)}function x(n,e,...t){if(!n)throw _a(e,...t)}function Rt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ei(e),new Error(e)}function Mt(n,e){n||Rt(e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Jo(){return typeof self<"u"&&self.location?.href||""}function gp(){return Sc()==="http:"||Sc()==="https:"}function Sc(){return typeof self<"u"&&self.location?.protocol||null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function mp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gp()||dd()||"connection"in navigator)?navigator.onLine:!0}function yp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Wr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mt(t>e,"Short delay should be less than long delay!"),this.isMobile=ld()||fd()}get(){return mp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function wa(n,e){Mt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class gl{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const _p={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const wp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vp=new Wr(3e4,6e4);function va(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Hs(n,e,t,s,i={}){return ml(n,i,async()=>{let c={},h={};s&&(e==="GET"?h=s:c={body:JSON.stringify(s)});const b=$r({key:n.config.apiKey,...h}).slice(1),T=await n._getAdditionalHeaders();T["Content-Type"]="application/json",n.languageCode&&(T["X-Firebase-Locale"]=n.languageCode);const E={method:e,headers:T,...c};return ud()||(E.referrerPolicy="no-referrer"),n.emulatorConfig&&$s(n.emulatorConfig.host)&&(E.credentials="include"),gl.fetch()(await yl(n,n.config.apiHost,t,b),E)})}async function ml(n,e,t){n._canInitEmulator=!1;const s={..._p,...e};try{const i=new bp(n),c=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw yi(n,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const b=c.ok?h.errorMessage:h.error.message,[T,E]=b.split(" : ");if(T==="FEDERATED_USER_ID_ALREADY_LINKED")throw yi(n,"credential-already-in-use",h);if(T==="EMAIL_EXISTS")throw yi(n,"email-already-in-use",h);if(T==="USER_DISABLED")throw yi(n,"user-disabled",h);const C=s[T]||T.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw pl(n,C,E);Lt(n,C)}}catch(i){if(i instanceof lt)throw i;Lt(n,"network-request-failed",{message:String(i)})}}async function Ip(n,e,t,s,i={}){const c=await Hs(n,e,t,s,i);return"mfaPendingCredential"in c&&Lt(n,"multi-factor-auth-required",{_serverResponse:c}),c}async function yl(n,e,t,s){const i=`${e}${t}?${s}`,c=n,h=c.config.emulator?wa(n.config,i):`${n.config.apiScheme}://${i}`;return wp.includes(t)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}class bp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(st(this.auth,"network-request-failed")),vp.get())})}}function yi(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=st(n,e,s);return i.customData._tokenResponse=t,i}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Tp(n,e){return Hs(n,"POST","/v1/accounts:delete",e)}async function xi(n,e){return Hs(n,"POST","/v1/accounts:lookup",e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Rr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ep(n,e=!1){const t=as(n),s=await t.getIdToken(e),i=Ia(s);x(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const c=typeof i.firebase=="object"?i.firebase:void 0,h=c?.sign_in_provider;return{claims:i,token:s,authTime:Rr(Po(i.auth_time)),issuedAtTime:Rr(Po(i.iat)),expirationTime:Rr(Po(i.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Po(n){return Number(n)*1e3}function Ia(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Ei("JWT malformed, contained fewer than 3 sections"),null;try{const i=qh(t);return i?JSON.parse(i):(Ei("Failed to decode base64 JWT payload"),null)}catch(i){return Ei("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Ac(n){const e=Ia(n);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function xr(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof lt&&Sp(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Sp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ap{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const t=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,t)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Xo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rr(this.lastLoginAt),this.creationTime=Rr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
*/async function Fi(n){const e=n.auth,t=await n.getIdToken(),s=await xr(n,xi(e,{idToken:t}));x(s?.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const c=i.providerUserInfo?.length?_l(i.providerUserInfo):[],h=Cp(n.providerData,c),b=n.isAnonymous,T=!(n.email&&i.passwordHash)&&!h?.length,E=b?T:!1,C={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:h,metadata:new Xo(i.createdAt,i.lastLoginAt),isAnonymous:E};Object.assign(n,C)}async function kp(n){const e=as(n);await Fi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cp(n,e){return[...n.filter(t=>!e.some(s=>s.providerId===t.providerId)),...e]}function _l(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Rp(n,e){const t=await ml(n,{},async()=>{const s=$r({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:c}=n.config,h=await yl(n,i,"/v1/token",`key=${c}`),b=await n._getAdditionalHeaders();b["Content-Type"]="application/x-www-form-urlencoded";const T={method:"POST",headers:b,body:s};return n.emulatorConfig&&$s(n.emulatorConfig.host)&&(T.credentials="include"),gl.fetch()(h,T)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Pp(n,e){return Hs(n,"POST","/v2/accounts:revokeToken",va(n,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ac(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){x(e.length!==0,"internal-error");const t=Ac(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:c}=await Rp(e,t);this.updateTokensAndExpiration(s,i,Number(c))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:c}=t,h=new Ns;return s&&(x(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),i&&(x(typeof i=="string","internal-error",{appName:e}),h.accessToken=i),c&&(x(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ns,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Xt(n,e){x(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class xe{constructor({uid:e,auth:t,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new Ap(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await xr(this,this.stsTokenManager.getToken(this.auth,e));return x(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ep(this,e)}reload(){return kp(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Fi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(Jn(this.auth));const e=await this.getIdToken();return await xr(this,Tp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,i=t.email??void 0,c=t.phoneNumber??void 0,h=t.photoURL??void 0,b=t.tenantId??void 0,T=t._redirectEventId??void 0,E=t.createdAt??void 0,C=t.lastLoginAt??void 0,{uid:k,emailVerified:R,isAnonymous:L,providerData:O,stsTokenManager:D}=t;x(k&&D,e,"internal-error");const N=Ns.fromJSON(this.name,D);x(typeof k=="string",e,"internal-error"),Xt(s,e.name),Xt(i,e.name),x(typeof R=="boolean",e,"internal-error"),x(typeof L=="boolean",e,"internal-error"),Xt(c,e.name),Xt(h,e.name),Xt(b,e.name),Xt(T,e.name),Xt(E,e.name),Xt(C,e.name);const V=new xe({uid:k,auth:e,email:i,emailVerified:R,displayName:s,isAnonymous:L,photoURL:h,phoneNumber:c,tenantId:b,stsTokenManager:N,createdAt:E,lastLoginAt:C});return O&&Array.isArray(O)&&(V.providerData=O.map(j=>({...j}))),T&&(V._redirectEventId=T),V}static async _fromIdTokenResponse(e,t,s=!1){const i=new Ns;i.updateFromServerResponse(t);const c=new xe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Fi(c),c}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];x(i.localId!==void 0,"internal-error");const c=i.providerUserInfo!==void 0?_l(i.providerUserInfo):[],h=!(i.email&&i.passwordHash)&&!c?.length,b=new Ns;b.updateFromIdToken(s);const T=new xe({uid:i.localId,auth:e,stsTokenManager:b,isAnonymous:h}),E={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Xo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!c?.length};return Object.assign(T,E),T}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const kc=new Map;function Pt(n){Mt(n instanceof Function,"Expected a class definition");let e=kc.get(n);return e?(Mt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,kc.set(n,e),e)}/**
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
*/class wl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}wl.type="NONE";const Cc=wl;/**
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
*/function Si(n,e,t){return`firebase:${n}:${e}:${t}`}class Os{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:c}=this.auth;this.fullUserKey=Si(this.userKey,i.apiKey,c),this.fullPersistenceKey=Si("persistence",i.apiKey,c),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await xi(this.auth,{idToken:e}).catch(()=>{});return t?xe._fromGetAccountInfoResponse(this.auth,t,e):null}return xe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Os(Pt(Cc),e,s);const i=(await Promise.all(t.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=i[0]||Pt(Cc);const h=Si(s,e.config.apiKey,e.name);let b=null;for(const E of t)try{const C=await E._get(h);if(C){let k;if(typeof C=="string"){const R=await xi(e,{idToken:C}).catch(()=>{});if(!R)break;k=await xe._fromGetAccountInfoResponse(e,R,C)}else k=xe._fromJSON(e,C);E!==c&&(b=k),c=E;break}}catch{}const T=i.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!T.length?new Os(c,e,s):(c=T[0],b&&await c._set(h,b.toJSON()),await Promise.all(t.map(async E=>{if(E!==c)try{await E._remove(h)}catch{}})),new Os(c,e,s))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Rc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sl(e))return"Blackberry";if(Al(e))return"Webos";if(Il(e))return"Safari";if((e.includes("chrome/")||bl(e))&&!e.includes("edge/"))return"Chrome";if(El(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function vl(n=_e()){return/firefox\//i.test(n)}function Il(n=_e()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bl(n=_e()){return/crios\//i.test(n)}function Tl(n=_e()){return/iemobile/i.test(n)}function El(n=_e()){return/android/i.test(n)}function Sl(n=_e()){return/blackberry/i.test(n)}function Al(n=_e()){return/webos/i.test(n)}function ba(n=_e()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Np(n=_e()){return ba(n)&&!!window.navigator?.standalone}function Op(){return pd()&&document.documentMode===10}function kl(n=_e()){return ba(n)||El(n)||Al(n)||Sl(n)||/windows phone/i.test(n)||Tl(n)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Cl(n,e=[]){let t;switch(n){case"Browser":t=Rc(_e());break;case"Worker":t=`${Rc(_e())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${cs}/${s}`}/**
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
*/class Dp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=c=>new Promise((h,b)=>{try{const T=e(c);h(T)}catch(T){b(T)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
*/async function Lp(n,e={}){return Hs(n,"GET","/v2/passwordPolicy",va(n,e))}/**
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
*/const Mp=6;class Up{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Mp,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class xp{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pc(this),this.idTokenSubscription=new Pc(this),this.beforeStateQueue=new Dp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pt(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Os.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await xi(this,{idToken:e}),s=await xe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Le(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,h=s?._redirectEventId,b=await this.tryRedirectSignIn(e);(!c||c===h)&&b?.user&&(s=b.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Le(this.app))return Promise.reject(Jn(this));const t=e?as(e):null;return t&&x(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(Jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Le(this.app)?Promise.reject(Jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Lp(this),t=new Up(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Br("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Pp(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pt(e)||this._popupRedirectResolver;x(t,this,"argument-error"),this.redirectPersistenceManager=await Os.create(this,[Pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const c=typeof t=="function"?t:t.next.bind(t);let h=!1;const b=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(b,this,"internal-error"),b.then(()=>{h||c(this.currentUser)}),typeof t=="function"){const T=e.addObserver(t,s,i);return()=>{h=!0,T()}}else{const T=e.addObserver(t);return()=>{h=!0,T()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&pp(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ta(n){return as(n)}class Pc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Id(t=>this.observer=t)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Ea={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Fp(n){Ea=n}function jp(n){return Ea.loadJS(n)}function Vp(){return Ea.gapiScript}function Bp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $p(n,e){const t=to(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Zn(i,e??{}))return s;Lt(s,"already-initialized")}return t.initialize({options:e})}function Hp(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Pt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function zp(n,e,t){const s=Ta(n);x(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,c=Rl(e),{host:h,port:b}=Wp(e),T=b===null?"":`:${b}`,E={url:`${c}//${h}${T}/`},C=Object.freeze({host:h,port:b,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){x(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),x(Zn(E,s.config.emulator)&&Zn(C,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=E,s.emulatorConfig=C,s.settings.appVerificationDisabledForTesting=!0,$s(h)?(ca(`${c}//${h}${T}`),ha("Auth",!0)):Gp()}function Rl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Wp(n){const e=Rl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const c=i[1];return{host:c,port:Nc(s.substr(c.length+1))}}else{const[c,h]=s.split(":");return{host:c,port:Nc(h)}}}function Nc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Gp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Pl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,t){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Ds(n,e){return Ip(n,"POST","/v1/accounts:signInWithIdp",va(n,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const qp="http://localhost";class ns extends Pl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Lt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...c}=t;if(!s||!i)return null;const h=new ns(s,i);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Ds(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ds(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ds(e,t)}buildRequest(){const e={requestUri:qp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$r(t)}return e}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Nl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
*/class Gr extends Nl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Qt extends Gr{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Zt extends Gr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ns._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Zt.credential(t,s)}catch{return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class en extends Gr{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class tn extends Gr{constructor(){super("twitter.com")}static credential(e,t){return ns._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return tn.credential(t,s)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class js{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const c=await xe._fromIdTokenResponse(e,s,i),h=Oc(s);return new js({user:c,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Oc(s);return new js({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Oc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ji extends lt{constructor(e,t,s,i){super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ji.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new ji(e,t,s,i)}}function Ol(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ji._fromErrorAndOperation(n,i,e,s):i})}async function Kp(n,e,t=!1){const s=await xr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return js._forOperation(n,"link",s)}/**
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
*/async function Jp(n,e,t=!1){const{auth:s}=n;if(Le(s.app))return Promise.reject(Jn(s));const i="reauthenticate";try{const c=await xr(n,Ol(s,i,e,n),t);x(c.idToken,s,"internal-error");const h=Ia(c.idToken);x(h,s,"internal-error");const{sub:b}=h;return x(n.uid===b,s,"user-mismatch"),js._forOperation(n,i,c)}catch(c){throw c?.code==="auth/user-not-found"&&Lt(s,"user-mismatch"),c}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Xp(n,e,t=!1){if(Le(n.app))return Promise.reject(Jn(n));const s="signIn",i=await Ol(n,s,e),c=await js._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(c.user),c}function Yp(n,e,t,s){return as(n).onIdTokenChanged(e,t,s)}function Qp(n,e,t){return as(n).beforeAuthStateChanged(e,t)}const Vi="__sak";/**
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
*/class Dl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vi,"1"),this.storage.removeItem(Vi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Zp=1e3,eg=10;class Ll extends Dl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,b,T)=>{this.notifyListeners(h,T)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},c=this.storage.getItem(s);Op()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,eg):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Zp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ll.type="LOCAL";const tg=Ll;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ml extends Dl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ml.type="SESSION";const Ul=Ml;/**
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
*/function ng(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
*/class no{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new no(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:c}=t.data,h=this.handlersMap[i];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const b=Array.from(h).map(async E=>E(t.origin,c)),T=await ng(b);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:T})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}no.receivers=[];/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Sa(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
*/class sg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let c,h;return new Promise((b,T)=>{const E=Sa("",20);i.port1.start();const C=setTimeout(()=>{T(new Error("unsupported_event"))},s);h={messageChannel:i,onMessage(k){const R=k;if(R.data.eventId===E)switch(R.data.status){case"ack":clearTimeout(C),c=setTimeout(()=>{T(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),b(R.data.response);break;default:clearTimeout(C),clearTimeout(c),T(new Error("invalid_response"));break}}},this.handlers.add(h),i.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:E,data:t},[i.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function rt(){return window}function rg(n){rt().location.href=n}/**
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
*/function xl(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function ig(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function og(){return navigator?.serviceWorker?.controller||null}function ag(){return xl()?self:null}/**
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
*/const Fl="firebaseLocalStorageDb",cg=1,Bi="firebaseLocalStorage",jl="fbase_key";class qr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function so(n,e){return n.transaction([Bi],e?"readwrite":"readonly").objectStore(Bi)}function hg(){const n=indexedDB.deleteDatabase(Fl);return new qr(n).toPromise()}function Yo(){const n=indexedDB.open(Fl,cg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Bi,{keyPath:jl})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Bi)?e(s):(s.close(),await hg(),e(await Yo()))})})}async function Dc(n,e,t){const s=so(n,!0).put({[jl]:e,value:t});return new qr(s).toPromise()}async function lg(n,e){const t=so(n,!1).get(e),s=await new qr(t).toPromise();return s===void 0?null:s.value}function Lc(n,e){const t=so(n,!0).delete(e);return new qr(t).toPromise()}const ug=800,dg=3;class Vl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>dg)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=no._getInstance(ag()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await ig(),!this.activeServiceWorker)return;this.sender=new sg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||og()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yo();return await Dc(e,Vi,"1"),await Lc(e,Vi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Dc(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>lg(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Lc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const c=so(i,!1).getAll();return new qr(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:c}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(c)&&(this.notifyListeners(i,c),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ug)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vl.type="LOCAL";const fg=Vl;new Wr(3e4,6e4);/**
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
*/function pg(n,e){return e?Pt(e):(x(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
*/class Aa extends Pl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ds(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ds(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function gg(n){return Xp(n.auth,new Aa(n),n.bypassAuthState)}function mg(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),Jp(t,new Aa(n),n.bypassAuthState)}async function yg(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),Kp(t,new Aa(n),n.bypassAuthState)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Bl{constructor(e,t,s,i,c=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:c,error:h,type:b}=e;if(h){this.reject(h);return}const T={auth:this.auth,requestUri:t,sessionId:s,tenantId:c||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(b)(T))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gg;case"linkViaPopup":case"linkViaRedirect":return yg;case"reauthViaPopup":case"reauthViaRedirect":return mg;default:Lt(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const _g=new Wr(2e3,1e4);class Cs extends Bl{constructor(e,t,s,i,c){super(e,t,i,c),this.provider=s,this.authWindow=null,this.pollId=null,Cs.currentPopupAction&&Cs.currentPopupAction.cancel(),Cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=Sa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_g.get())};e()}}Cs.currentPopupAction=null;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const wg="pendingRedirect",Ai=new Map;class vg extends Bl{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ai.get(this.auth._key());if(!e){try{const t=await Ig(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Ai.set(this.auth._key(),e)}return this.bypassAuthState||Ai.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ig(n,e){const t=Eg(e),s=Tg(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function bg(n,e){Ai.set(n._key(),e)}function Tg(n){return Pt(n._redirectPersistence)}function Eg(n){return Si(wg,n.config.apiKey,n.name)}async function Sg(n,e,t=!1){if(Le(n.app))return Promise.reject(Jn(n));const s=Ta(n),i=pg(s,e),c=await new vg(s,i,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ag=600*1e3;class kg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Cg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!$l(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(st(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ag&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mc(e))}saveEventToCache(e){this.cachedEventUids.add(Mc(e)),this.lastProcessedEventTime=Date.now()}}function Mc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function $l({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Cg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $l(n);default:return!1}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Rg(n,e={}){return Hs(n,"GET","/v1/projects",e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Pg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ng=/^https?/;async function Og(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Rg(n);for(const t of e)try{if(Dg(t))return}catch{}Lt(n,"unauthorized-domain")}function Dg(n){const e=Jo(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!Ng.test(t))return!1;if(Pg.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
*/const Lg=new Wr(3e4,6e4);function Uc(){const n=rt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Mg(n){return new Promise((e,t)=>{function s(){Uc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uc(),t(st(n,"network-request-failed"))},timeout:Lg.get()})}if(rt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(rt().gapi?.load)s();else{const i=Bp("iframefcb");return rt()[i]=()=>{gapi.load?s():t(st(n,"network-request-failed"))},jp(`${Vp()}?onload=${i}`).catch(c=>t(c))}}).catch(e=>{throw ki=null,e})}let ki=null;function Ug(n){return ki=ki||Mg(n),ki}/**
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
*/const xg=new Wr(5e3,15e3),Fg="__/auth/iframe",jg="emulator/auth/iframe",Vg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $g(n){const e=n.config;x(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?wa(e,jg):`https://${n.config.authDomain}/${Fg}`,s={apiKey:e.apiKey,appName:n.name,v:cs},i=Bg.get(n.config.apiHost);i&&(s.eid=i);const c=n._getFrameworks();return c.length&&(s.fw=c.join(",")),`${t}?${$r(s).slice(1)}`}async function Hg(n){const e=await Ug(n),t=rt().gapi;return x(t,n,"internal-error"),e.open({where:document.body,url:$g(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vg,dontclear:!0},s=>new Promise(async(i,c)=>{await s.restyle({setHideOnLeave:!1});const h=st(n,"network-request-failed"),b=rt().setTimeout(()=>{c(h)},xg.get());function T(){rt().clearTimeout(b),i(s)}s.ping(T).then(T,()=>{c(h)})}))}/**
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
*/const zg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wg=500,Gg=600,qg="_blank",Kg="http://localhost";class xc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jg(n,e,t,s=Wg,i=Gg){const c=Math.max((window.screen.availHeight-i)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let b="";const T={...zg,width:s.toString(),height:i.toString(),top:c,left:h},E=_e().toLowerCase();t&&(b=bl(E)?qg:t),vl(E)&&(e=e||Kg,T.scrollbars="yes");const C=Object.entries(T).reduce((R,[L,O])=>`${R}${L}=${O},`,"");if(Np(E)&&b!=="_self")return Xg(e||"",b),new xc(null);const k=window.open(e||"",b,C);x(k,n,"popup-blocked");try{k.focus()}catch{}return new xc(k)}function Xg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
*/const Yg="__/auth/handler",Qg="emulator/auth/handler",Zg=encodeURIComponent("fac");async function Fc(n,e,t,s,i,c){x(n.config.authDomain,n,"auth-domain-config-required"),x(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:cs,eventId:i};if(e instanceof Nl){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",vd(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[C,k]of Object.entries({}))h[C]=k}if(e instanceof Gr){const C=e.getScopes().filter(k=>k!=="");C.length>0&&(h.scopes=C.join(","))}n.tenantId&&(h.tid=n.tenantId);const b=h;for(const C of Object.keys(b))b[C]===void 0&&delete b[C];const T=await n._getAppCheckToken(),E=T?`#${Zg}=${encodeURIComponent(T)}`:"";return`${em(n)}?${$r(b).slice(1)}${E}`}function em({config:n}){return n.emulator?wa(n,Qg):`https://${n.authDomain}/${Yg}`}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const No="webStorageSupport";class tm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ul,this._completeRedirectFn=Sg,this._overrideRedirectResult=bg}async _openPopup(e,t,s,i){Mt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await Fc(e,t,s,Jo(),i);return Jg(e,c,Sa())}async _openRedirect(e,t,s,i){await this._originValidation(e);const c=await Fc(e,t,s,Jo(),i);return rg(c),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:c}=this.eventManagers[t];return i?Promise.resolve(i):(Mt(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Hg(e),s=new kg(e);return t.register("authEvent",i=>(x(i?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(No,{type:No},s=>{const i=s?.[0]?.[No];i!==void 0&&t(!!i),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Og(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return kl()||Il()||ba()}}const nm=tm;var jc="@firebase/auth",Vc="1.11.0";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class sm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function rm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function im(n){es(new un("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:b}=s.options;x(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const T={apiKey:h,authDomain:b,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cl(n)},E=new xp(s,i,c,T);return Hp(E,t),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),es(new un("auth-internal",e=>{const t=Ta(e.getProvider("auth").getImmediate());return(s=>new sm(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(jc,Vc,rm(n)),nt(jc,Vc,"esm2020")}/**
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
*/const om=300,am=Yh("authIdTokenMaxAge")||om;let Bc=null;const cm=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>am)return;const i=t?.token;Bc!==i&&(Bc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hm(n=da()){const e=to(n,"auth");if(e.isInitialized())return e.getImmediate();const t=$p(n,{popupRedirectResolver:nm,persistence:[fg,tg,Ul]}),s=Yh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const h=cm(c.toString());Qp(t,h,()=>h(t.currentUser)),Yp(t,b=>h(b))}}const i=Kh("auth");return i&&zp(t,`http://${i}`),t}function lm(){return document.getElementsByTagName("head")?.[0]??document}Fp({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const c=st("internal-error");c.customData=i,t(c)},s.type="text/javascript",s.charset="UTF-8",lm().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});im("Browser");/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Hl="firebasestorage.googleapis.com",um="storageBucket",dm=120*1e3,fm=600*1e3;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ut extends lt{constructor(e,t,s=0){super(Oo(e),`Firebase Storage: ${t} (${Oo(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ut.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Oo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ct;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ct||(ct={}));function Oo(n){return"storage/"+n}function pm(){const n="An unknown error occurred, please check the error payload for server response.";return new ut(ct.UNKNOWN,n)}function gm(){return new ut(ct.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function mm(){return new ut(ct.CANCELED,"User canceled the upload/download.")}function ym(n){return new ut(ct.INVALID_URL,"Invalid URL '"+n+"'.")}function _m(n){return new ut(ct.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function $c(n){return new ut(ct.INVALID_ARGUMENT,n)}function zl(){return new ut(ct.APP_DELETED,"The Firebase app was deleted.")}function wm(n){return new ut(ct.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Fe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=Fe.makeFromUrl(e,t)}catch{return new Fe(e,"")}if(s.path==="")return s;throw _m(e)}static makeFromUrl(e,t){let s=null;const i="([A-Za-z0-9.\\-_]+)";function c(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const h="(/(.*))?$",b=new RegExp("^gs://"+i+h,"i"),T={bucket:1,path:3};function E(U){U.path_=decodeURIComponent(U.path)}const C="v[A-Za-z0-9_]+",k=t.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",L=new RegExp(`^https?://${k}/${C}/b/${i}/o${R}`,"i"),O={bucket:1,path:3},D=t===Hl?"(?:storage.googleapis.com|storage.cloud.google.com)":t,N="([^?#]*)",V=new RegExp(`^https?://${D}/${i}/${N}`,"i"),j=[{regex:b,indices:T,postModify:c},{regex:L,indices:O,postModify:E},{regex:V,indices:{bucket:1,path:2},postModify:E}];for(let U=0;U<j.length;U++){const H=j[U],ie=H.regex.exec(e);if(ie){const Y=ie[H.indices.bucket];let y=ie[H.indices.path];y||(y=""),s=new Fe(Y,y),H.postModify(s);break}}if(s==null)throw ym(e);return s}}class vm{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Im(n,e,t){let s=1,i=null,c=null,h=!1,b=0;function T(){return b===2}let E=!1;function C(...N){E||(E=!0,e.apply(null,N))}function k(N){i=setTimeout(()=>{i=null,n(L,T())},N)}function R(){c&&clearTimeout(c)}function L(N,...V){if(E){R();return}if(N){R(),C.call(null,N,...V);return}if(T()||h){R(),C.call(null,N,...V);return}s<64&&(s*=2);let j;b===1?(b=2,j=0):j=(s+Math.random())*1e3,k(j)}let O=!1;function D(N){O||(O=!0,R(),!E&&(i!==null?(N||(b=2),clearTimeout(i),k(0)):N||(b=1)))}return k(0),c=setTimeout(()=>{h=!0,D(!0)},t),D}function bm(n){n(!1)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Tm(n){return n!==void 0}function Hc(n,e,t,s){if(s<e)throw $c(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw $c(`Invalid value for '${n}'. Expected ${t} or less.`)}function Em(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const i=e(s)+"="+e(n[s]);t=t+i+"&"}return t=t.slice(0,-1),t}var $i;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})($i||($i={}));/**
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
*/function Sm(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Am{constructor(e,t,s,i,c,h,b,T,E,C,k,R=!0,L=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=i,this.successCodes_=c,this.additionalRetryCodes_=h,this.callback_=b,this.errorCallback_=T,this.timeout_=E,this.progressCallback_=C,this.connectionFactory_=k,this.retry=R,this.isUsingEmulator=L,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,D)=>{this.resolve_=O,this.reject_=D,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new _i(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const h=b=>{const T=b.loaded,E=b.lengthComputable?b.total:-1;this.progressCallback_!==null&&this.progressCallback_(T,E)};this.progressCallback_!==null&&c.addUploadProgressListener(h),c.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(h),this.pendingConnection_=null;const b=c.getErrorCode()===$i.NO_ERROR,T=c.getStatus();if(!b||Sm(T,this.additionalRetryCodes_)&&this.retry){const C=c.getErrorCode()===$i.ABORT;s(!1,new _i(!1,null,C));return}const E=this.successCodes_.indexOf(T)!==-1;s(!0,new _i(E,c))})},t=(s,i)=>{const c=this.resolve_,h=this.reject_,b=i.connection;if(i.wasSuccessCode)try{const T=this.callback_(b,b.getResponse());Tm(T)?c(T):c()}catch(T){h(T)}else if(b!==null){const T=pm();T.serverResponse=b.getErrorText(),this.errorCallback_?h(this.errorCallback_(b,T)):h(T)}else if(i.canceled){const T=this.appDelete_?zl():mm();h(T)}else{const T=gm();h(T)}};this.canceled_?t(!1,new _i(!1,null,!0)):this.backoffId_=Im(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bm(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _i{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function km(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Cm(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Rm(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Pm(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Nm(n,e,t,s,i,c,h=!0,b=!1){const T=Em(n.urlParams),E=n.url+T,C=Object.assign({},n.headers);return Rm(C,e),km(C,t),Cm(C,c),Pm(C,s),new Am(E,n.method,C,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,h,b)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Om(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Dm(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
*/class Hi{constructor(e,t){this._service=e,t instanceof Fe?this._location=t:this._location=Fe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Hi(e,t)}get root(){const e=new Fe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Dm(this._location.path)}get storage(){return this._service}get parent(){const e=Om(this._location.path);if(e===null)return null;const t=new Fe(this._location.bucket,e);return new Hi(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw wm(e)}}function zc(n,e){const t=e?.[um];return t==null?null:Fe.makeFromBucketSpec(t,n)}function Lm(n,e,t,s={}){n.host=`${e}:${t}`;const i=$s(e);i&&(ca(`https://${n.host}/b`),ha("Storage",!0)),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:c}=s;c&&(n._overrideAuthToken=typeof c=="string"?c:Qh(c,n.app.options.projectId))}class Mm{constructor(e,t,s,i,c,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=i,this._firebaseVersion=c,this._isUsingEmulator=h,this._bucket=null,this._host=Hl,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dm,this._maxUploadRetryTime=fm,this._requests=new Set,i!=null?this._bucket=Fe.makeFromBucketSpec(i,this._host):this._bucket=zc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Fe.makeFromBucketSpec(this._url,e):this._bucket=zc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Hc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Hc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hi(this,e)}_makeRequest(e,t,s,i,c=!0){if(this._deleted)return new vm(zl());{const h=Nm(e,this._appId,s,i,t,this._firebaseVersion,c,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,i).getPromise()}}const Wc="@firebase/storage",Gc="0.14.0";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Wl="storage";function Um(n=da(),e){n=as(n);const t=to(n,Wl).getImmediate({identifier:e}),s=Jh("storage");return s&&xm(t,...s),t}function xm(n,e,t,s={}){Lm(n,e,t,s)}function Fm(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Mm(t,s,i,e,cs)}function jm(){es(new un(Wl,Fm,"PUBLIC").setMultipleInstances(!0)),nt(Wc,Gc,""),nt(Wc,Gc,"esm2020")}jm();const Vm={apiKey:"AIzaSyC0qVQm59S1_OFJcYLr2ILyGB9m-SoxHro",authDomain:"holysmokas-4ef36.firebaseapp.com",projectId:"holysmokas-4ef36",storageBucket:"holysmokas-4ef36.firebasestorage.app",messagingSenderId:"236391401471",appId:"1:236391401471:web:16780dc40257205caf09ca",measurementId:"G-LRKVZGKNLD"},ka=tl(Vm);cp(ka);hm(ka);Um(ka);const Bm="https://script.google.com/macros/s/AKfycbzJOYtbHJRuIgQTT7BVhmzGvRaJ1TMBd-VDoe_DUk_Rbnyr9EBiB5W9Xutir8r8LcgUTg/exec";function qc(n,e,t=!0){const s=document.getElementById("formModal"),i=document.getElementById("modalTitle"),c=document.getElementById("modalMessage"),h=document.getElementById("modalIcon");i.textContent=n,c.textContent=e,h.textContent=t?"✔":"✕",h.style.background=t?"var(--secondary)":"#ef4444",s.classList.add("show")}window.closeModal=function(){document.getElementById("formModal").classList.remove("show")};async function $m(n){try{const e=await fetch(Bm,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return console.log("Data sent to Google Apps Script"),!0}catch(e){return console.error("Error sending to Google Script:",e),!1}}function Hm(n){let e=n.replace(/^https?:\/\//,"");return e=e.replace(/^www\./,""),e=e.split("/")[0],e=e.trim(),e}window.checkDomain=async function(){const n=document.getElementById("domainInput"),e=document.getElementById("domainResult"),t=n.value.trim();if(!t){e.innerHTML="⚠️ Please enter a domain name.",e.style.color="#f59e0b";return}e.innerHTML="🔍 Checking availability...",e.style.color="#6b7280";try{const s=await(await fetch("http://localhost:8080/check-domain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({domain:t})})).json();if(s.available===!0){const i=s.cleanedDomain||Hm(t),c=s.pricing?.initialCost||s.price||12.99,h=s.pricing?.renewalCost||s.renewalPrice||12.99;e.innerHTML=`
                <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                        <span style="font-size: 1.5rem;">✅</span>
                        <strong style="color: #065f46; font-size: 1.1rem;">${i} is available!</strong>
                    </div>
                    
                    <div style="background: white; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.75rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span style="color: #6b7280;">Initial Registration:</span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${c.toFixed(2)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: #6b7280;">Annual Renewal:</span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${h.toFixed(2)}/year</strong>
                        </div>
                    </div>
                    
                    <button 
                        type="button" 
                        class="btn btn-primary" 
                        onclick="addDomainToForm('${i}', ${c}, ${h})" 
                        style="width: 100%; margin-top: 0.5rem;">
                        Add to Form
                    </button>
                    
                    <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.75rem; margin-bottom: 0;">
                        💡 Domain will be registered after you complete your website order
                    </p>
                </div>
            `,e.style.color="#10b981",window.selectedDomain=i,window.domainPricing={initialCost:c,renewalCost:h}}else{const i=s.domain||t;e.innerHTML=`
                <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 1.5rem;">❌</span>
                        <strong style="color: #991b1b;">${i} is already taken</strong>
                    </div>
                    <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem; margin-bottom: 0;">
                        Try a different domain name or extension (.net, .org, .co)
                    </p>
                </div>
            `,e.style.color="#ef4444",window.selectedDomain=null,window.domainPricing=null}}catch(s){console.error("Domain check error:",s),e.innerHTML=`
            <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span style="font-size: 1.5rem;">⚠️</span>
                    <strong style="color: #991b1b;">Error checking domain</strong>
                </div>
                <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem; margin-bottom: 0;">
                    Please try again or contact support
                </p>
            </div>
        `,e.style.color="#ef4444"}};window.addDomainToForm=function(n,e=0,t=0){const s=document.getElementById("currentUrl");s&&(s.value=`https://${n}`,s.style.border="2px solid #10b981",setTimeout(()=>{s.style.border=""},2e3)),window.selectedDomain=n,window.domainPricing={initialCost:e,renewalCost:t};const i=document.getElementById("domainResult");i.innerHTML=`
        <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                <span style="font-size: 1.5rem;">✅</span>
                <strong style="color: #065f46;">${n} has been added to your form!</strong>
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
    `,i.style.color="#10b981",Ca(),document.getElementById("contactForm").scrollIntoView({behavior:"smooth",block:"start"}),setTimeout(()=>{const c=document.getElementById("businessName");c&&!c.value&&c.focus()},500)};function Gl(n){return{"Starter - $599 (New Website)":599,"Business - $1,199 (New Website)":1199,"Small Shop - $1,699 (New Website)":1699,"E-Commerce/Enterprise - Custom Quote":0,"Website Redesign/Updates":0,"Not Sure Yet":0}[n]||0}function Ca(){const n=document.getElementById("package"),e=n?n.value:"",t=Gl(e),s=window.domainPricing?window.domainPricing.initialCost:0;let i=document.getElementById("pricingBreakdown");if(!i){i=document.createElement("div"),i.id="pricingBreakdown",i.style.cssText="margin-top: 2rem; padding: 1.5rem; background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px;";const c=document.getElementById("submitBtn");c&&c.parentNode.insertBefore(i,c)}if(t>0){const c=t+s;i.innerHTML=`
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
                
                ${s>0?`
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem; padding-bottom: 0.75rem; border-bottom: 1px solid #e5e7eb;">
                        <span style="color: #6b7280; font-size: 1rem;">
                            <strong>Domain Registration:</strong><br>
                            <span style="font-size: 0.875rem;">${window.selectedDomain}</span>
                        </span>
                        <strong style="color: #059669; font-size: 1.1rem;">$${s.toFixed(2)}</strong>
                    </div>
                `:""}
                
                <div style="display: flex; justify-content: space-between; padding-top: 0.75rem;">
                    <strong style="color: #065f46; font-size: 1.2rem;">Total First Year:</strong>
                    <strong style="color: #065f46; font-size: 1.4rem;">$${c.toFixed(2)}</strong>
                </div>
            </div>
            
            ${s>0?`
                <p style="color: #6b7280; font-size: 0.875rem; text-align: center; margin-top: 1rem; margin-bottom: 0;">
                    📅 Domain renewal of $${window.domainPricing.renewalCost.toFixed(2)} will be due annually
                </p>
            `:""}
            
            <p style="color: #6b7280; font-size: 0.875rem; text-align: center; margin-top: 0.75rem; margin-bottom: 0;">
                ✨ This is an estimate. Final quote will be provided after reviewing your requirements.
            </p>
        `,i.style.display="block"}else e.includes("Custom Quote")?(i.innerHTML=`
            <h3 style="color: #6366f1; font-size: 1.3rem; margin-bottom: 1rem; text-align: center;">
                💼 Custom Enterprise Quote
            </h3>
            
            <div style="background: white; padding: 1.5rem; border-radius: 6px; text-align: center;">
                <p style="color: #6b7280; margin-bottom: 1rem;">
                    We'll provide a detailed custom quote based on your specific requirements and features.
                </p>
                ${s>0?`
                    <div style="padding-top: 1rem; border-top: 1px solid #e5e7eb;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="color: #6b7280;">
                                <strong>Domain Registration:</strong><br>
                                <span style="font-size: 0.875rem;">${window.selectedDomain}</span>
                            </span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${s.toFixed(2)}</strong>
                        </div>
                    </div>
                `:""}
            </div>
        `,i.style.display="block"):i.style.display="none"}window.removeDomainFromForm=function(){const n=document.getElementById("currentUrl");n&&(n.value=""),window.selectedDomain=null,window.domainPricing=null;const e=document.getElementById("domainInput");e&&(e.value="");const t=document.getElementById("domainResult");t&&(t.innerHTML=""),Ca()};window.handleContactSubmit=async function(n){n.preventDefault();const e=n.target,t=e.querySelector("#name")?.value.trim()||"",s=e.querySelector("#email")?.value.trim()||"",i=e.querySelector("#businessName")?.value.trim()||"",c=e.querySelector("#phone")?.value.trim()||"",h=e.querySelector("#package")?.value.trim()||"",b=e.querySelector("#timeline")?.value.trim()||"",T=e.querySelector("#currentUrl")?.value.trim()||"",E=e.querySelector("#referenceWebsite")?.value.trim()||"",C=e.querySelector("#mainGoal")?.value.trim()||"",k=e.querySelector("#mustHaveFeatures")?.value.trim()||"",R=Gl(h),L=window.domainPricing?window.domainPricing.initialCost:0,O=R+L;if(R===0){qc("Please Select a Package","Please select a website package (Starter, Business, or Small Shop) before submitting.",!1);return}const D={name:t,email:s,businessName:i,phone:c,package:h,packagePrice:R,timeline:b,currentUrl:T,referenceWebsite:E,mainGoal:C,mustHaveFeatures:k,selectedDomain:window.selectedDomain||"N/A",domainPricing:window.domainPricing?{initialCost:window.domainPricing.initialCost,renewalCost:window.domainPricing.renewalCost}:null,totalCost:O,timestamp:new Date().toISOString(),status:"pending_payment"},N=document.getElementById("submitBtn"),V=N.textContent;N.textContent="Creating Payment Session...",N.disabled=!0;try{const j=await(await fetch("http://localhost:8080/create-payment-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(D)})).json();if(j.success&&j.sessionUrl)$m(D).catch(U=>{console.warn("⚠️ Google Script submission failed, but proceeding to payment:",U)}),window.location.href=j.sessionUrl;else throw new Error(j.error||"Failed to create payment session")}catch(j){console.error("Error creating payment session:",j),qc("Error","There was an error processing your request. Please try again or contact us at (415) 691-7085.",!1),N.textContent=V,N.disabled=!1}};document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("package");n&&n.addEventListener("change",Ca)});const zm=()=>{};var Kc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Wm=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const c=n[t++];e[s++]=String.fromCharCode((i&31)<<6|c&63)}else if(i>239&&i<365){const c=n[t++],h=n[t++],b=n[t++],T=((i&7)<<18|(c&63)<<12|(h&63)<<6|b&63)-65536;e[s++]=String.fromCharCode(55296+(T>>10)),e[s++]=String.fromCharCode(56320+(T&1023))}else{const c=n[t++],h=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(c&63)<<6|h&63)}}return e.join("")},Kl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const c=n[i],h=i+1<n.length,b=h?n[i+1]:0,T=i+2<n.length,E=T?n[i+2]:0,C=c>>2,k=(c&3)<<4|b>>4;let R=(b&15)<<2|E>>6,L=E&63;T||(L=64,h||(R=64)),s.push(t[C],t[k],t[R],t[L])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ql(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Wm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const c=t[n.charAt(i++)],b=i<n.length?t[n.charAt(i)]:0;++i;const E=i<n.length?t[n.charAt(i)]:64;++i;const k=i<n.length?t[n.charAt(i)]:64;if(++i,c==null||b==null||E==null||k==null)throw new Gm;const R=c<<2|b>>4;if(s.push(R),E!==64){const L=b<<4&240|E>>2;if(s.push(L),k!==64){const O=E<<6&192|k;s.push(O)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Gm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qm=function(n){const e=ql(n);return Kl.encodeByteArray(e,!0)},zi=function(n){return qm(n).replace(/\./g,"")},Jl=function(n){try{return Kl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Km(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Jm=()=>Km().__FIREBASE_DEFAULTS__,Xm=()=>{if(typeof process>"u"||typeof Kc>"u")return;const n=Kc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ym=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Jl(n[1]);return e&&JSON.parse(e)},Ra=()=>{try{return zm()||Jm()||Xm()||Ym()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Xl=n=>Ra()?.emulatorHosts?.[n],Yl=n=>{const e=Xl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ql=()=>Ra()?.config,Zl=n=>Ra()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function zs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Pa(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function eu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,c=n.sub||n.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...n};return[zi(JSON.stringify(t)),zi(JSON.stringify(h)),""].join(".")}const Pr={};function Zm(){const n={prod:[],emulator:[]};for(const e of Object.keys(Pr))Pr[e]?n.emulator.push(e):n.prod.push(e);return n}function ey(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Jc=!1;function Na(n,e){if(typeof window>"u"||typeof document>"u"||!zs(window.location.host)||Pr[n]===e||Pr[n]||Jc)return;Pr[n]=e;function t(R){return`__firebase__banner__${R}`}const s="__firebase__banner",c=Zm().prod.length>0;function h(){const R=document.getElementById(s);R&&R.remove()}function b(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function T(R,L){R.setAttribute("width","24"),R.setAttribute("id",L),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function E(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{Jc=!0,h()},R}function C(R,L){R.setAttribute("id",L),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function k(){const R=ey(s),L=t("text"),O=document.getElementById(L)||document.createElement("span"),D=t("learnmore"),N=document.getElementById(D)||document.createElement("a"),V=t("preprendIcon"),j=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const U=R.element;b(U),C(N,D);const H=E();T(j,V),U.append(j,O,N,H),document.body.appendChild(U)}c?(O.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",L)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",k):k()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ty(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function ny(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ry(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iy(){const n=we();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function oy(){try{return typeof indexedDB=="object"}catch{return!1}}function ay(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="FirebaseError";class dt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=cy,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kr.prototype.create)}}class Kr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,c=this.errors[e],h=c?hy(c,s):"Error",b=`${this.serviceName}: ${h} (${i}).`;return new dt(i,b,s)}}function hy(n,e){return n.replace(ly,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ly=/\{\$([^}]+)}/g;function uy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ss(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const c=n[i],h=e[i];if(Xc(c)&&Xc(h)){if(!ss(c,h))return!1}else if(c!==h)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Xc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function dy(n,e){const t=new fy(n,e);return t.subscribe.bind(t)}class fy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");py(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Do),i.error===void 0&&(i.error=Do),i.complete===void 0&&(i.complete=Do);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function py(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Do(){}/**
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
 */function hs(n){return n&&n._delegate?n._delegate:n}class fn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $n="[DEFAULT]";/**
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
 */class gy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Qm;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yy(e))try{this.getOrInitializeService({instanceIdentifier:$n})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const c=this.getOrInitializeService({instanceIdentifier:i});s.resolve(c)}catch{}}}}clearInstance(e=$n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$n){return this.instances.has(e)}getOptions(e=$n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[c,h]of this.instancesDeferred.entries()){const b=this.normalizeInstanceIdentifier(c);s===b&&h.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const c=this.instances.get(s);return c&&e(c,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:my(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$n){return this.component?this.component.multipleInstances?e:$n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function my(n){return n===$n?void 0:n}function yy(n){return n.instantiationMode==="EAGER"}/**
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
 */class _y{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const wy={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},vy=ee.INFO,Iy={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},by=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Iy[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oa{constructor(e){this.name=e,this._logLevel=vy,this._logHandler=by,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Ty=(n,e)=>e.some(t=>n instanceof t);let Yc,Qc;function Ey(){return Yc||(Yc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sy(){return Qc||(Qc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tu=new WeakMap,Qo=new WeakMap,nu=new WeakMap,Lo=new WeakMap,Da=new WeakMap;function Ay(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",c),n.removeEventListener("error",h)},c=()=>{t(hn(n.result)),i()},h=()=>{s(n.error),i()};n.addEventListener("success",c),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&tu.set(t,n)}).catch(()=>{}),Da.set(e,n),e}function ky(n){if(Qo.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",h),n.removeEventListener("abort",h)},c=()=>{t(),i()},h=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",c),n.addEventListener("error",h),n.addEventListener("abort",h)});Qo.set(n,e)}let Zo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||nu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return hn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Cy(n){Zo=n(Zo)}function Ry(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Mo(this),e,...t);return nu.set(s,e.sort?e.sort():[e]),hn(s)}:Sy().includes(n)?function(...e){return n.apply(Mo(this),e),hn(tu.get(this))}:function(...e){return hn(n.apply(Mo(this),e))}}function Py(n){return typeof n=="function"?Ry(n):(n instanceof IDBTransaction&&ky(n),Ty(n,Ey())?new Proxy(n,Zo):n)}function hn(n){if(n instanceof IDBRequest)return Ay(n);if(Lo.has(n))return Lo.get(n);const e=Py(n);return e!==n&&(Lo.set(n,e),Da.set(e,n)),e}const Mo=n=>Da.get(n);function Ny(n,e,{blocked:t,upgrade:s,blocking:i,terminated:c}={}){const h=indexedDB.open(n,e),b=hn(h);return s&&h.addEventListener("upgradeneeded",T=>{s(hn(h.result),T.oldVersion,T.newVersion,hn(h.transaction),T)}),t&&h.addEventListener("blocked",T=>t(T.oldVersion,T.newVersion,T)),b.then(T=>{c&&T.addEventListener("close",()=>c()),i&&T.addEventListener("versionchange",E=>i(E.oldVersion,E.newVersion,E))}).catch(()=>{}),b}const Oy=["get","getKey","getAll","getAllKeys","count"],Dy=["put","add","delete","clear"],Uo=new Map;function Zc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Uo.get(e))return Uo.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Dy.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Oy.includes(t)))return;const c=async function(h,...b){const T=this.transaction(h,i?"readwrite":"readonly");let E=T.store;return s&&(E=E.index(b.shift())),(await Promise.all([E[t](...b),i&&T.done]))[0]};return Uo.set(e,c),c}Cy(n=>({...n,get:(e,t,s)=>Zc(e,t)||n.get(e,t,s),has:(e,t)=>!!Zc(e,t)||n.has(e,t)}));/**
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
 */class Ly{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(My(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function My(n){return n.getComponent()?.type==="VERSION"}const ea="@firebase/app",eh="0.14.4";/**
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
 */const Ut=new Oa("@firebase/app"),Uy="@firebase/app-compat",xy="@firebase/analytics-compat",Fy="@firebase/analytics",jy="@firebase/app-check-compat",Vy="@firebase/app-check",By="@firebase/auth",$y="@firebase/auth-compat",Hy="@firebase/database",zy="@firebase/data-connect",Wy="@firebase/database-compat",Gy="@firebase/functions",qy="@firebase/functions-compat",Ky="@firebase/installations",Jy="@firebase/installations-compat",Xy="@firebase/messaging",Yy="@firebase/messaging-compat",Qy="@firebase/performance",Zy="@firebase/performance-compat",e_="@firebase/remote-config",t_="@firebase/remote-config-compat",n_="@firebase/storage",s_="@firebase/storage-compat",r_="@firebase/firestore",i_="@firebase/ai",o_="@firebase/firestore-compat",a_="firebase",c_="12.4.0";/**
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
 */const ta="[DEFAULT]",h_={[ea]:"fire-core",[Uy]:"fire-core-compat",[Fy]:"fire-analytics",[xy]:"fire-analytics-compat",[Vy]:"fire-app-check",[jy]:"fire-app-check-compat",[By]:"fire-auth",[$y]:"fire-auth-compat",[Hy]:"fire-rtdb",[zy]:"fire-data-connect",[Wy]:"fire-rtdb-compat",[Gy]:"fire-fn",[qy]:"fire-fn-compat",[Ky]:"fire-iid",[Jy]:"fire-iid-compat",[Xy]:"fire-fcm",[Yy]:"fire-fcm-compat",[Qy]:"fire-perf",[Zy]:"fire-perf-compat",[e_]:"fire-rc",[t_]:"fire-rc-compat",[n_]:"fire-gcs",[s_]:"fire-gcs-compat",[r_]:"fire-fst",[o_]:"fire-fst-compat",[i_]:"fire-vertex","fire-js":"fire-js",[a_]:"fire-js-all"};/**
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
 */const Wi=new Map,l_=new Map,na=new Map;function th(n,e){try{n.container.addComponent(e)}catch(t){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function rs(n){const e=n.name;if(na.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;na.set(e,n);for(const t of Wi.values())th(t,n);for(const t of l_.values())th(t,n);return!0}function ro(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Me(n){return n==null?!1:n.settings!==void 0}/**
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
 */const u_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ln=new Kr("app","Firebase",u_);/**
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
 */class d_{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
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
 */const ls=c_;function su(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:ta,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw ln.create("bad-app-name",{appName:String(i)});if(t||(t=Ql()),!t)throw ln.create("no-options");const c=Wi.get(i);if(c){if(ss(t,c.options)&&ss(s,c.config))return c;throw ln.create("duplicate-app",{appName:i})}const h=new _y(i);for(const T of na.values())h.addComponent(T);const b=new d_(t,s,h);return Wi.set(i,b),b}function La(n=ta){const e=Wi.get(n);if(!e&&n===ta&&Ql())return su();if(!e)throw ln.create("no-app",{appName:n});return e}function it(n,e,t){let s=h_[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),c=e.match(/\s|\//);if(i||c){const h=[`Unable to register library "${s}" with version "${e}":`];i&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(h.join(" "));return}rs(new fn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const f_="firebase-heartbeat-database",p_=1,Fr="firebase-heartbeat-store";let xo=null;function ru(){return xo||(xo=Ny(f_,p_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Fr)}catch(t){console.warn(t)}}}}).catch(n=>{throw ln.create("idb-open",{originalErrorMessage:n.message})})),xo}async function g_(n){try{const t=(await ru()).transaction(Fr),s=await t.objectStore(Fr).get(iu(n));return await t.done,s}catch(e){if(e instanceof dt)Ut.warn(e.message);else{const t=ln.create("idb-get",{originalErrorMessage:e?.message});Ut.warn(t.message)}}}async function nh(n,e){try{const s=(await ru()).transaction(Fr,"readwrite");await s.objectStore(Fr).put(e,iu(n)),await s.done}catch(t){if(t instanceof dt)Ut.warn(t.message);else{const s=ln.create("idb-set",{originalErrorMessage:t?.message});Ut.warn(s.message)}}}function iu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const m_=1024,y_=30;class __{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new v_(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sh();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>y_){const i=I_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ut.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sh(),{heartbeatsToSend:t,unsentEntries:s}=w_(this._heartbeatsCache.heartbeats),i=zi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Ut.warn(e),""}}}function sh(){return new Date().toISOString().substring(0,10)}function w_(n,e=m_){const t=[];let s=n.slice();for(const i of n){const c=t.find(h=>h.agent===i.agent);if(c){if(c.dates.push(i.date),rh(t)>e){c.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),rh(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class v_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oy()?ay().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await g_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return nh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return nh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function rh(n){return zi(JSON.stringify({version:2,heartbeats:n})).length}function I_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function b_(n){rs(new fn("platform-logger",e=>new Ly(e),"PRIVATE")),rs(new fn("heartbeat",e=>new __(e),"PRIVATE")),it(ea,eh,n),it(ea,eh,"esm2020"),it("fire-js","")}b_("");var T_="firebase",E_="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */it(T_,E_,"app");var ih=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ma;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,f){function g(){}g.prototype=f.prototype,y.F=f.prototype,y.prototype=new g,y.prototype.constructor=y,y.D=function(_,m,v){for(var p=Array(arguments.length-2),te=2;te<arguments.length;te++)p[te-2]=arguments[te];return f.prototype[m].apply(_,p)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,f,g){g||(g=0);const _=Array(16);if(typeof f=="string")for(var m=0;m<16;++m)_[m]=f.charCodeAt(g++)|f.charCodeAt(g++)<<8|f.charCodeAt(g++)<<16|f.charCodeAt(g++)<<24;else for(m=0;m<16;++m)_[m]=f[g++]|f[g++]<<8|f[g++]<<16|f[g++]<<24;f=y.g[0],g=y.g[1],m=y.g[2];let v=y.g[3],p;p=f+(v^g&(m^v))+_[0]+3614090360&4294967295,f=g+(p<<7&4294967295|p>>>25),p=v+(m^f&(g^m))+_[1]+3905402710&4294967295,v=f+(p<<12&4294967295|p>>>20),p=m+(g^v&(f^g))+_[2]+606105819&4294967295,m=v+(p<<17&4294967295|p>>>15),p=g+(f^m&(v^f))+_[3]+3250441966&4294967295,g=m+(p<<22&4294967295|p>>>10),p=f+(v^g&(m^v))+_[4]+4118548399&4294967295,f=g+(p<<7&4294967295|p>>>25),p=v+(m^f&(g^m))+_[5]+1200080426&4294967295,v=f+(p<<12&4294967295|p>>>20),p=m+(g^v&(f^g))+_[6]+2821735955&4294967295,m=v+(p<<17&4294967295|p>>>15),p=g+(f^m&(v^f))+_[7]+4249261313&4294967295,g=m+(p<<22&4294967295|p>>>10),p=f+(v^g&(m^v))+_[8]+1770035416&4294967295,f=g+(p<<7&4294967295|p>>>25),p=v+(m^f&(g^m))+_[9]+2336552879&4294967295,v=f+(p<<12&4294967295|p>>>20),p=m+(g^v&(f^g))+_[10]+4294925233&4294967295,m=v+(p<<17&4294967295|p>>>15),p=g+(f^m&(v^f))+_[11]+2304563134&4294967295,g=m+(p<<22&4294967295|p>>>10),p=f+(v^g&(m^v))+_[12]+1804603682&4294967295,f=g+(p<<7&4294967295|p>>>25),p=v+(m^f&(g^m))+_[13]+4254626195&4294967295,v=f+(p<<12&4294967295|p>>>20),p=m+(g^v&(f^g))+_[14]+2792965006&4294967295,m=v+(p<<17&4294967295|p>>>15),p=g+(f^m&(v^f))+_[15]+1236535329&4294967295,g=m+(p<<22&4294967295|p>>>10),p=f+(m^v&(g^m))+_[1]+4129170786&4294967295,f=g+(p<<5&4294967295|p>>>27),p=v+(g^m&(f^g))+_[6]+3225465664&4294967295,v=f+(p<<9&4294967295|p>>>23),p=m+(f^g&(v^f))+_[11]+643717713&4294967295,m=v+(p<<14&4294967295|p>>>18),p=g+(v^f&(m^v))+_[0]+3921069994&4294967295,g=m+(p<<20&4294967295|p>>>12),p=f+(m^v&(g^m))+_[5]+3593408605&4294967295,f=g+(p<<5&4294967295|p>>>27),p=v+(g^m&(f^g))+_[10]+38016083&4294967295,v=f+(p<<9&4294967295|p>>>23),p=m+(f^g&(v^f))+_[15]+3634488961&4294967295,m=v+(p<<14&4294967295|p>>>18),p=g+(v^f&(m^v))+_[4]+3889429448&4294967295,g=m+(p<<20&4294967295|p>>>12),p=f+(m^v&(g^m))+_[9]+568446438&4294967295,f=g+(p<<5&4294967295|p>>>27),p=v+(g^m&(f^g))+_[14]+3275163606&4294967295,v=f+(p<<9&4294967295|p>>>23),p=m+(f^g&(v^f))+_[3]+4107603335&4294967295,m=v+(p<<14&4294967295|p>>>18),p=g+(v^f&(m^v))+_[8]+1163531501&4294967295,g=m+(p<<20&4294967295|p>>>12),p=f+(m^v&(g^m))+_[13]+2850285829&4294967295,f=g+(p<<5&4294967295|p>>>27),p=v+(g^m&(f^g))+_[2]+4243563512&4294967295,v=f+(p<<9&4294967295|p>>>23),p=m+(f^g&(v^f))+_[7]+1735328473&4294967295,m=v+(p<<14&4294967295|p>>>18),p=g+(v^f&(m^v))+_[12]+2368359562&4294967295,g=m+(p<<20&4294967295|p>>>12),p=f+(g^m^v)+_[5]+4294588738&4294967295,f=g+(p<<4&4294967295|p>>>28),p=v+(f^g^m)+_[8]+2272392833&4294967295,v=f+(p<<11&4294967295|p>>>21),p=m+(v^f^g)+_[11]+1839030562&4294967295,m=v+(p<<16&4294967295|p>>>16),p=g+(m^v^f)+_[14]+4259657740&4294967295,g=m+(p<<23&4294967295|p>>>9),p=f+(g^m^v)+_[1]+2763975236&4294967295,f=g+(p<<4&4294967295|p>>>28),p=v+(f^g^m)+_[4]+1272893353&4294967295,v=f+(p<<11&4294967295|p>>>21),p=m+(v^f^g)+_[7]+4139469664&4294967295,m=v+(p<<16&4294967295|p>>>16),p=g+(m^v^f)+_[10]+3200236656&4294967295,g=m+(p<<23&4294967295|p>>>9),p=f+(g^m^v)+_[13]+681279174&4294967295,f=g+(p<<4&4294967295|p>>>28),p=v+(f^g^m)+_[0]+3936430074&4294967295,v=f+(p<<11&4294967295|p>>>21),p=m+(v^f^g)+_[3]+3572445317&4294967295,m=v+(p<<16&4294967295|p>>>16),p=g+(m^v^f)+_[6]+76029189&4294967295,g=m+(p<<23&4294967295|p>>>9),p=f+(g^m^v)+_[9]+3654602809&4294967295,f=g+(p<<4&4294967295|p>>>28),p=v+(f^g^m)+_[12]+3873151461&4294967295,v=f+(p<<11&4294967295|p>>>21),p=m+(v^f^g)+_[15]+530742520&4294967295,m=v+(p<<16&4294967295|p>>>16),p=g+(m^v^f)+_[2]+3299628645&4294967295,g=m+(p<<23&4294967295|p>>>9),p=f+(m^(g|~v))+_[0]+4096336452&4294967295,f=g+(p<<6&4294967295|p>>>26),p=v+(g^(f|~m))+_[7]+1126891415&4294967295,v=f+(p<<10&4294967295|p>>>22),p=m+(f^(v|~g))+_[14]+2878612391&4294967295,m=v+(p<<15&4294967295|p>>>17),p=g+(v^(m|~f))+_[5]+4237533241&4294967295,g=m+(p<<21&4294967295|p>>>11),p=f+(m^(g|~v))+_[12]+1700485571&4294967295,f=g+(p<<6&4294967295|p>>>26),p=v+(g^(f|~m))+_[3]+2399980690&4294967295,v=f+(p<<10&4294967295|p>>>22),p=m+(f^(v|~g))+_[10]+4293915773&4294967295,m=v+(p<<15&4294967295|p>>>17),p=g+(v^(m|~f))+_[1]+2240044497&4294967295,g=m+(p<<21&4294967295|p>>>11),p=f+(m^(g|~v))+_[8]+1873313359&4294967295,f=g+(p<<6&4294967295|p>>>26),p=v+(g^(f|~m))+_[15]+4264355552&4294967295,v=f+(p<<10&4294967295|p>>>22),p=m+(f^(v|~g))+_[6]+2734768916&4294967295,m=v+(p<<15&4294967295|p>>>17),p=g+(v^(m|~f))+_[13]+1309151649&4294967295,g=m+(p<<21&4294967295|p>>>11),p=f+(m^(g|~v))+_[4]+4149444226&4294967295,f=g+(p<<6&4294967295|p>>>26),p=v+(g^(f|~m))+_[11]+3174756917&4294967295,v=f+(p<<10&4294967295|p>>>22),p=m+(f^(v|~g))+_[2]+718787259&4294967295,m=v+(p<<15&4294967295|p>>>17),p=g+(v^(m|~f))+_[9]+3951481745&4294967295,y.g[0]=y.g[0]+f&4294967295,y.g[1]=y.g[1]+(m+(p<<21&4294967295|p>>>11))&4294967295,y.g[2]=y.g[2]+m&4294967295,y.g[3]=y.g[3]+v&4294967295}s.prototype.v=function(y,f){f===void 0&&(f=y.length);const g=f-this.blockSize,_=this.C;let m=this.h,v=0;for(;v<f;){if(m==0)for(;v<=g;)i(this,y,v),v+=this.blockSize;if(typeof y=="string"){for(;v<f;)if(_[m++]=y.charCodeAt(v++),m==this.blockSize){i(this,_),m=0;break}}else for(;v<f;)if(_[m++]=y[v++],m==this.blockSize){i(this,_),m=0;break}}this.h=m,this.o+=f},s.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var f=1;f<y.length-8;++f)y[f]=0;f=this.o*8;for(var g=y.length-8;g<y.length;++g)y[g]=f&255,f/=256;for(this.v(y),y=Array(16),f=0,g=0;g<4;++g)for(let _=0;_<32;_+=8)y[f++]=this.g[g]>>>_&255;return y};function c(y,f){var g=b;return Object.prototype.hasOwnProperty.call(g,y)?g[y]:g[y]=f(y)}function h(y,f){this.h=f;const g=[];let _=!0;for(let m=y.length-1;m>=0;m--){const v=y[m]|0;_&&v==f||(g[m]=v,_=!1)}this.g=g}var b={};function T(y){return-128<=y&&y<128?c(y,function(f){return new h([f|0],f<0?-1:0)}):new h([y|0],y<0?-1:0)}function E(y){if(isNaN(y)||!isFinite(y))return k;if(y<0)return N(E(-y));const f=[];let g=1;for(let _=0;y>=g;_++)f[_]=y/g|0,g*=4294967296;return new h(f,0)}function C(y,f){if(y.length==0)throw Error("number format error: empty string");if(f=f||10,f<2||36<f)throw Error("radix out of range: "+f);if(y.charAt(0)=="-")return N(C(y.substring(1),f));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=E(Math.pow(f,8));let _=k;for(let v=0;v<y.length;v+=8){var m=Math.min(8,y.length-v);const p=parseInt(y.substring(v,v+m),f);m<8?(m=E(Math.pow(f,m)),_=_.j(m).add(E(p))):(_=_.j(g),_=_.add(E(p)))}return _}var k=T(0),R=T(1),L=T(16777216);n=h.prototype,n.m=function(){if(D(this))return-N(this).m();let y=0,f=1;for(let g=0;g<this.g.length;g++){const _=this.i(g);y+=(_>=0?_:4294967296+_)*f,f*=4294967296}return y},n.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(O(this))return"0";if(D(this))return"-"+N(this).toString(y);const f=E(Math.pow(y,6));var g=this;let _="";for(;;){const m=H(g,f).g;g=V(g,m.j(f));let v=((g.g.length>0?g.g[0]:g.h)>>>0).toString(y);if(g=m,O(g))return v+_;for(;v.length<6;)v="0"+v;_=v+_}},n.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function O(y){if(y.h!=0)return!1;for(let f=0;f<y.g.length;f++)if(y.g[f]!=0)return!1;return!0}function D(y){return y.h==-1}n.l=function(y){return y=V(this,y),D(y)?-1:O(y)?0:1};function N(y){const f=y.g.length,g=[];for(let _=0;_<f;_++)g[_]=~y.g[_];return new h(g,~y.h).add(R)}n.abs=function(){return D(this)?N(this):this},n.add=function(y){const f=Math.max(this.g.length,y.g.length),g=[];let _=0;for(let m=0;m<=f;m++){let v=_+(this.i(m)&65535)+(y.i(m)&65535),p=(v>>>16)+(this.i(m)>>>16)+(y.i(m)>>>16);_=p>>>16,v&=65535,p&=65535,g[m]=p<<16|v}return new h(g,g[g.length-1]&-2147483648?-1:0)};function V(y,f){return y.add(N(f))}n.j=function(y){if(O(this)||O(y))return k;if(D(this))return D(y)?N(this).j(N(y)):N(N(this).j(y));if(D(y))return N(this.j(N(y)));if(this.l(L)<0&&y.l(L)<0)return E(this.m()*y.m());const f=this.g.length+y.g.length,g=[];for(var _=0;_<2*f;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(let m=0;m<y.g.length;m++){const v=this.i(_)>>>16,p=this.i(_)&65535,te=y.i(m)>>>16,de=y.i(m)&65535;g[2*_+2*m]+=p*de,j(g,2*_+2*m),g[2*_+2*m+1]+=v*de,j(g,2*_+2*m+1),g[2*_+2*m+1]+=p*te,j(g,2*_+2*m+1),g[2*_+2*m+2]+=v*te,j(g,2*_+2*m+2)}for(y=0;y<f;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=f;y<2*f;y++)g[y]=0;return new h(g,0)};function j(y,f){for(;(y[f]&65535)!=y[f];)y[f+1]+=y[f]>>>16,y[f]&=65535,f++}function U(y,f){this.g=y,this.h=f}function H(y,f){if(O(f))throw Error("division by zero");if(O(y))return new U(k,k);if(D(y))return f=H(N(y),f),new U(N(f.g),N(f.h));if(D(f))return f=H(y,N(f)),new U(N(f.g),f.h);if(y.g.length>30){if(D(y)||D(f))throw Error("slowDivide_ only works with positive integers.");for(var g=R,_=f;_.l(y)<=0;)g=ie(g),_=ie(_);var m=Y(g,1),v=Y(_,1);for(_=Y(_,2),g=Y(g,2);!O(_);){var p=v.add(_);p.l(y)<=0&&(m=m.add(g),v=p),_=Y(_,1),g=Y(g,1)}return f=V(y,m.j(f)),new U(m,f)}for(m=k;y.l(f)>=0;){for(g=Math.max(1,Math.floor(y.m()/f.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=_<=48?1:Math.pow(2,_-48),v=E(g),p=v.j(f);D(p)||p.l(y)>0;)g-=_,v=E(g),p=v.j(f);O(v)&&(v=R),m=m.add(v),y=V(y,p)}return new U(m,y)}n.B=function(y){return H(this,y).h},n.and=function(y){const f=Math.max(this.g.length,y.g.length),g=[];for(let _=0;_<f;_++)g[_]=this.i(_)&y.i(_);return new h(g,this.h&y.h)},n.or=function(y){const f=Math.max(this.g.length,y.g.length),g=[];for(let _=0;_<f;_++)g[_]=this.i(_)|y.i(_);return new h(g,this.h|y.h)},n.xor=function(y){const f=Math.max(this.g.length,y.g.length),g=[];for(let _=0;_<f;_++)g[_]=this.i(_)^y.i(_);return new h(g,this.h^y.h)};function ie(y){const f=y.g.length+1,g=[];for(let _=0;_<f;_++)g[_]=y.i(_)<<1|y.i(_-1)>>>31;return new h(g,y.h)}function Y(y,f){const g=f>>5;f%=32;const _=y.g.length-g,m=[];for(let v=0;v<_;v++)m[v]=f>0?y.i(v+g)>>>f|y.i(v+g+1)<<32-f:y.i(v+g);return new h(m,y.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=E,h.fromString=C,Ma=h}).apply(typeof ih<"u"?ih:typeof self<"u"?self:typeof window<"u"?window:{});var wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=Object.defineProperty;function t(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof wi=="object"&&wi];for(var a=0;a<r.length;++a){var u=r[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var s=t(this);function i(r,a){if(a)e:{var u=s;r=r.split(".");for(var w=0;w<r.length-1;w++){var S=r[w];if(!(S in u))break e;u=u[S]}r=r[r.length-1],w=u[r],a=a(w),a!=w&&a!=null&&e(u,r,{configurable:!0,writable:!0,value:a})}}i("Symbol.dispose",function(r){return r||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(r){return r||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(r){return r||function(a){var u=[],w;for(w in a)Object.prototype.hasOwnProperty.call(a,w)&&u.push([w,a[w]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},h=this||self;function b(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function T(r,a,u){return r.call.apply(r.bind,arguments)}function E(r,a,u){return E=T,E.apply(null,arguments)}function C(r,a){var u=Array.prototype.slice.call(arguments,1);return function(){var w=u.slice();return w.push.apply(w,arguments),r.apply(this,w)}}function k(r,a){function u(){}u.prototype=a.prototype,r.Z=a.prototype,r.prototype=new u,r.prototype.constructor=r,r.Ob=function(w,S,A){for(var P=Array(arguments.length-2),M=2;M<arguments.length;M++)P[M-2]=arguments[M];return a.prototype[S].apply(w,P)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?r=>r&&AsyncContext.Snapshot.wrap(r):r=>r;function L(r){const a=r.length;if(a>0){const u=Array(a);for(let w=0;w<a;w++)u[w]=r[w];return u}return[]}function O(r,a){for(let w=1;w<arguments.length;w++){const S=arguments[w];var u=typeof S;if(u=u!="object"?u:S?Array.isArray(S)?"array":u:"null",u=="array"||u=="object"&&typeof S.length=="number"){u=r.length||0;const A=S.length||0;r.length=u+A;for(let P=0;P<A;P++)r[u+P]=S[P]}else r.push(S)}}class D{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return this.h>0?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function N(r){h.setTimeout(()=>{throw r},0)}function V(){var r=y;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class j{constructor(){this.h=this.g=null}add(a,u){const w=U.get();w.set(a,u),this.h?this.h.next=w:this.g=w,this.h=w}}var U=new D(()=>new H,r=>r.reset());class H{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,Y=!1,y=new j,f=()=>{const r=Promise.resolve(void 0);ie=()=>{r.then(g)}};function g(){for(var r;r=V();){try{r.h.call(r.g)}catch(u){N(u)}var a=U;a.j(r),a.h<100&&(a.h++,r.next=a.g,a.g=r)}Y=!1}function _(){this.u=this.u,this.C=this.C}_.prototype.u=!1,_.prototype.dispose=function(){this.u||(this.u=!0,this.N())},_.prototype[Symbol.dispose]=function(){this.dispose()},_.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function m(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}m.prototype.h=function(){this.defaultPrevented=!0};var v=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const u=()=>{};h.addEventListener("test",u,a),h.removeEventListener("test",u,a)}catch{}return r})();function p(r){return/^[\s\xa0]*$/.test(r)}function te(r,a){m.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r&&this.init(r,a)}k(te,m),te.prototype.init=function(r,a){const u=this.type=r.type,w=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget,a||(u=="mouseover"?a=r.fromElement:u=="mouseout"&&(a=r.toElement)),this.relatedTarget=a,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=r.pointerType,this.state=r.state,this.i=r,r.defaultPrevented&&te.Z.h.call(this)},te.prototype.h=function(){te.Z.h.call(this);const r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var de="closure_listenable_"+(Math.random()*1e6|0),ao=0;function co(r,a,u,w,S){this.listener=r,this.proxy=null,this.src=a,this.type=u,this.capture=!!w,this.ha=S,this.key=++ao,this.da=this.fa=!1}function pt(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function gt(r,a,u){for(const w in r)a.call(u,r[w],w,r)}function ho(r,a){for(const u in r)a.call(void 0,r[u],u,r)}function Gs(r){const a={};for(const u in r)a[u]=r[u];return a}const qs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ks(r,a){let u,w;for(let S=1;S<arguments.length;S++){w=arguments[S];for(u in w)r[u]=w[u];for(let A=0;A<qs.length;A++)u=qs[A],Object.prototype.hasOwnProperty.call(w,u)&&(r[u]=w[u])}}function mt(r){this.src=r,this.g={},this.h=0}mt.prototype.add=function(r,a,u,w,S){const A=r.toString();r=this.g[A],r||(r=this.g[A]=[],this.h++);const P=mn(r,a,w,S);return P>-1?(a=r[P],u||(a.fa=!1)):(a=new co(a,this.src,A,!!w,S),a.fa=u,r.push(a)),a};function gn(r,a){const u=a.type;if(u in r.g){var w=r.g[u],S=Array.prototype.indexOf.call(w,a,void 0),A;(A=S>=0)&&Array.prototype.splice.call(w,S,1),A&&(pt(a),r.g[u].length==0&&(delete r.g[u],r.h--))}}function mn(r,a,u,w){for(let S=0;S<r.length;++S){const A=r[S];if(!A.da&&A.listener==a&&A.capture==!!u&&A.ha==w)return S}return-1}var yn="closure_lm_"+(Math.random()*1e6|0),_n={};function Js(r,a,u,w,S){if(Array.isArray(a)){for(let A=0;A<a.length;A++)Js(r,a[A],u,w,S);return null}return u=Qs(u),r&&r[de]?r.J(a,u,b(w)?!!w.capture:!1,S):lo(r,a,u,!1,w,S)}function lo(r,a,u,w,S,A){if(!a)throw Error("Invalid event type");const P=b(S)?!!S.capture:!!S;let M=vn(r);if(M||(r[yn]=M=new mt(r)),u=M.add(a,u,w,P,A),u.proxy)return u;if(w=uo(),u.proxy=w,w.src=r,w.listener=u,r.addEventListener)v||(S=P),S===void 0&&(S=!1),r.addEventListener(a.toString(),w,S);else if(r.attachEvent)r.attachEvent(Ys(a.toString()),w);else if(r.addListener&&r.removeListener)r.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return u}function uo(){function r(u){return a.call(r.src,r.listener,u)}const a=fo;return r}function Xs(r,a,u,w,S){if(Array.isArray(a))for(var A=0;A<a.length;A++)Xs(r,a[A],u,w,S);else w=b(w)?!!w.capture:!!w,u=Qs(u),r&&r[de]?(r=r.i,A=String(a).toString(),A in r.g&&(a=r.g[A],u=mn(a,u,w,S),u>-1&&(pt(a[u]),Array.prototype.splice.call(a,u,1),a.length==0&&(delete r.g[A],r.h--)))):r&&(r=vn(r))&&(a=r.g[a.toString()],r=-1,a&&(r=mn(a,u,w,S)),(u=r>-1?a[r]:null)&&wn(u))}function wn(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[de])gn(a.i,r);else{var u=r.type,w=r.proxy;a.removeEventListener?a.removeEventListener(u,w,r.capture):a.detachEvent?a.detachEvent(Ys(u),w):a.addListener&&a.removeListener&&a.removeListener(w),(u=vn(a))?(gn(u,r),u.h==0&&(u.src=null,a[yn]=null)):pt(r)}}}function Ys(r){return r in _n?_n[r]:_n[r]="on"+r}function fo(r,a){if(r.da)r=!0;else{a=new te(a,this);const u=r.listener,w=r.ha||r.src;r.fa&&wn(r),r=u.call(w,a)}return r}function vn(r){return r=r[yn],r instanceof mt?r:null}var In="__closure_events_fn_"+(Math.random()*1e9>>>0);function Qs(r){return typeof r=="function"?r:(r[In]||(r[In]=function(a){return r.handleEvent(a)}),r[In])}function X(){_.call(this),this.i=new mt(this),this.M=this,this.G=null}k(X,_),X.prototype[de]=!0,X.prototype.removeEventListener=function(r,a,u,w){Xs(this,r,a,u,w)};function Q(r,a){var u,w=r.G;if(w)for(u=[];w;w=w.G)u.push(w);if(r=r.M,w=a.type||a,typeof a=="string")a=new m(a,r);else if(a instanceof m)a.target=a.target||r;else{var S=a;a=new m(w,r),Ks(a,S)}S=!0;let A,P;if(u)for(P=u.length-1;P>=0;P--)A=a.g=u[P],S=yt(A,w,!0,a)&&S;if(A=a.g=r,S=yt(A,w,!0,a)&&S,S=yt(A,w,!1,a)&&S,u)for(P=0;P<u.length;P++)A=a.g=u[P],S=yt(A,w,!1,a)&&S}X.prototype.N=function(){if(X.Z.N.call(this),this.i){var r=this.i;for(const a in r.g){const u=r.g[a];for(let w=0;w<u.length;w++)pt(u[w]);delete r.g[a],r.h--}}this.G=null},X.prototype.J=function(r,a,u,w){return this.i.add(String(r),a,!1,u,w)},X.prototype.K=function(r,a,u,w){return this.i.add(String(r),a,!0,u,w)};function yt(r,a,u,w){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();let S=!0;for(let A=0;A<a.length;++A){const P=a[A];if(P&&!P.da&&P.capture==u){const M=P.listener,oe=P.ha||P.src;P.fa&&gn(r.i,P),S=M.call(oe,w)!==!1&&S}}return S&&!w.defaultPrevented}function po(r,a){if(typeof r!="function")if(r&&typeof r.handleEvent=="function")r=E(r.handleEvent,r);else throw Error("Invalid listener argument");return Number(a)>2147483647?-1:h.setTimeout(r,a||0)}function Zs(r){r.g=po(()=>{r.g=null,r.i&&(r.i=!1,Zs(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class go extends _{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Zs(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ee(r){_.call(this),this.h=r,this.g={}}k(Ee,_);var er=[];function tr(r){gt(r.g,function(a,u){this.g.hasOwnProperty(u)&&wn(a)},r),r.g={}}Ee.prototype.N=function(){Ee.Z.N.call(this),tr(this)},Ee.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bn=h.JSON.stringify,mo=h.JSON.parse,yo=class{stringify(r){return h.JSON.stringify(r,void 0)}parse(r){return h.JSON.parse(r,void 0)}};function nr(){}function sr(){}var _t={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function $e(){m.call(this,"d")}k($e,m);function us(){m.call(this,"c")}k(us,m);var He={},rr=null;function wt(){return rr=rr||new X}He.Ia="serverreachability";function ir(r){m.call(this,He.Ia,r)}k(ir,m);function ce(r){const a=wt();Q(a,new ir(a))}He.STAT_EVENT="statevent";function or(r,a){m.call(this,He.STAT_EVENT,r),this.stat=a}k(or,m);function he(r){const a=wt();Q(a,new or(a,r))}He.Ja="timingevent";function jt(r,a){m.call(this,He.Ja,r),this.size=a}k(jt,m);function Tn(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){r()},a)}function En(){this.g=!0}En.prototype.ua=function(){this.g=!1};function Vt(r,a,u,w,S,A){r.info(function(){if(r.g)if(A){var P="",M=A.split("&");for(let $=0;$<M.length;$++){var oe=M[$].split("=");if(oe.length>1){const re=oe[0];oe=oe[1];const ge=re.split("_");P=ge.length>=2&&ge[1]=="type"?P+(re+"="+oe+"&"):P+(re+"=redacted&")}}}else P=null;else P=A;return"XMLHTTP REQ ("+w+") [attempt "+S+"]: "+a+`
`+u+`
`+P})}function _o(r,a,u,w,S,A,P){r.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+S+"]: "+a+`
`+u+`
`+A+" "+P})}function Bt(r,a,u,w){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+ar(r,u)+(w?" "+w:"")})}function ti(r,a){r.info(function(){return"TIMEOUT: "+a})}En.prototype.info=function(){};function ar(r,a){if(!r.g)return a;if(!a)return null;try{const A=JSON.parse(a);if(A){for(r=0;r<A.length;r++)if(Array.isArray(A[r])){var u=A[r];if(!(u.length<2)){var w=u[1];if(Array.isArray(w)&&!(w.length<1)){var S=w[0];if(S!="noop"&&S!="stop"&&S!="close")for(let P=1;P<w.length;P++)w[P]=""}}}}return bn(A)}catch{return a}}var vt={NO_ERROR:0,TIMEOUT:8},wo={},Se;function ds(){}k(ds,nr),ds.prototype.g=function(){return new XMLHttpRequest},Se=new ds;function $t(r){return encodeURIComponent(String(r))}function cr(r){var a=1;r=r.split(":");const u=[];for(;a>0&&r.length;)u.push(r.shift()),a--;return r.length&&u.push(r.join(":")),u}function Ie(r,a,u,w){this.j=r,this.i=a,this.l=u,this.S=w||1,this.V=new Ee(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new hr}function hr(){this.i=null,this.g="",this.h=!1}var ni={},fs={};function lr(r,a,u){r.M=1,r.A=Cn(B(a)),r.u=u,r.R=!0,Sn(r,null)}function Sn(r,a){r.F=Date.now(),be(r),r.B=B(r.A);var u=r.B,w=r.S;Array.isArray(w)||(w=[String(w)]),ci(u.i,"t",w),r.C=0,u=r.j.L,r.h=new hr,r.g=Er(r.j,u?a:null,!r.u),r.P>0&&(r.O=new go(E(r.Y,r,r.g),r.P)),a=r.V,u=r.g,w=r.ba;var S="readystatechange";Array.isArray(S)||(S&&(er[0]=S.toString()),S=er);for(let A=0;A<S.length;A++){const P=Js(u,S[A],w||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=r.J?Gs(r.J):{},r.u?(r.v||(r.v="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.B,r.v,r.u,a)):(r.v="GET",r.g.ea(r.B,r.v,null,a)),ce(),Vt(r.i,r.v,r.B,r.l,r.S,r.u)}Ie.prototype.ba=function(r){r=r.target;const a=this.O;a&&Pe(r)==3?a.j():this.Y(r)},Ie.prototype.Y=function(r){try{if(r==this.g)e:{const M=Pe(this.g),oe=this.g.ya(),$=this.g.ca();if(!(M<3)&&(M!=3||this.g&&(this.h.h||this.g.la()||Ts(this.g)))){this.K||M!=4||oe==7||(oe==8||$<=0?ce(3):ce(2)),ur(this);var a=this.g.ca();this.X=a;var u=si(this);if(this.o=a==200,_o(this.i,this.v,this.B,this.l,this.S,M,a),this.o){if(this.U&&!this.L){t:{if(this.g){var w,S=this.g;if((w=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(w)){var A=w;break t}}A=null}if(r=A)Bt(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ms(this,r);else{this.o=!1,this.m=3,he(12),ze(this),Ht(this);break e}}if(this.R){r=!0;let re;for(;!this.K&&this.C<u.length;)if(re=An(this,u),re==fs){M==4&&(this.m=4,he(14),r=!1),Bt(this.i,this.l,null,"[Incomplete Response]");break}else if(re==ni){this.m=4,he(15),Bt(this.i,this.l,u,"[Invalid Chunk]"),r=!1;break}else Bt(this.i,this.l,re,null),ms(this,re);if(ps(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),M!=4||u.length!=0||this.h.h||(this.m=1,he(16),r=!1),this.o=this.o&&r,!r)Bt(this.i,this.l,u,"[Invalid Chunked Response]"),ze(this),Ht(this);else if(u.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),ks(P),P.P=!0,he(11))}}else Bt(this.i,this.l,u,null),ms(this,u);M==4&&ze(this),this.o&&!this.K&&(M==4?Ir(this.j,this):(this.o=!1,be(this)))}else Es(this.g),a==400&&u.indexOf("Unknown SID")>0?(this.m=3,he(12)):(this.m=0,he(13)),ze(this),Ht(this)}}}catch{}finally{}};function si(r){if(!ps(r))return r.g.la();const a=Ts(r.g);if(a==="")return"";let u="";const w=a.length,S=Pe(r.g)==4;if(!r.h.i){if(typeof TextDecoder>"u")return ze(r),Ht(r),"";r.h.i=new h.TextDecoder}for(let A=0;A<w;A++)r.h.h=!0,u+=r.h.i.decode(a[A],{stream:!(S&&A==w-1)});return a.length=0,r.h.g+=u,r.C=0,r.h.g}function ps(r){return r.g?r.v=="GET"&&r.M!=2&&r.j.Aa:!1}function An(r,a){var u=r.C,w=a.indexOf(`
`,u);return w==-1?fs:(u=Number(a.substring(u,w)),isNaN(u)?ni:(w+=1,w+u>a.length?fs:(a=a.slice(w,w+u),r.C=w+u,a)))}Ie.prototype.cancel=function(){this.K=!0,ze(this)};function be(r){r.T=Date.now()+r.H,gs(r,r.H)}function gs(r,a){if(r.D!=null)throw Error("WatchDog timer not null");r.D=Tn(E(r.aa,r),a)}function ur(r){r.D&&(h.clearTimeout(r.D),r.D=null)}Ie.prototype.aa=function(){this.D=null;const r=Date.now();r-this.T>=0?(ti(this.i,this.B),this.M!=2&&(ce(),he(17)),ze(this),this.m=2,Ht(this)):gs(this,this.T-r)};function Ht(r){r.j.I==0||r.K||Ir(r.j,r)}function ze(r){ur(r);var a=r.O;a&&typeof a.dispose=="function"&&a.dispose(),r.O=null,tr(r.V),r.g&&(a=r.g,r.g=null,a.abort(),a.dispose())}function ms(r,a){try{var u=r.j;if(u.I!=0&&(u.g==r||_s(u.h,r))){if(!r.L&&_s(u.h,r)&&u.I==3){try{var w=u.Ba.g.parse(a)}catch{w=null}if(Array.isArray(w)&&w.length==3){var S=w;if(S[0]==0){e:if(!u.v){if(u.g)if(u.g.F+3e3<r.F)jn(u),Un(u);else break e;As(u),he(18)}}else u.xa=S[1],0<u.xa-u.K&&S[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=Tn(E(u.Va,u),6e3));pr(u.h)<=1&&u.ta&&(u.ta=void 0)}else Je(u,11)}else if((r.L||u.g==r)&&jn(u),!p(a))for(S=u.Ba.g.parse(a),a=0;a<S.length;a++){let $=S[a];const re=$[0];if(!(re<=u.K))if(u.K=re,$=$[1],u.I==2)if($[0]=="c"){u.M=$[1],u.ba=$[2];const ge=$[3];ge!=null&&(u.ka=ge,u.j.info("VER="+u.ka));const Ne=$[4];Ne!=null&&(u.za=Ne,u.j.info("SVER="+u.za));const Kt=$[5];Kt!=null&&typeof Kt=="number"&&Kt>0&&(w=1.5*Kt,u.O=w,u.j.info("backChannelRequestTimeoutMs_="+w)),w=u;const Jt=r.g;if(Jt){const pi=Jt.g?Jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pi){var A=w.h;A.g||pi.indexOf("spdy")==-1&&pi.indexOf("quic")==-1&&pi.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(gr(A,A.h),A.h=null))}if(w.G){const bo=Jt.g?Jt.g.getResponseHeader("X-HTTP-Session-Id"):null;bo&&(w.wa=bo,ne(w.J,w.G,bo))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-r.F,u.j.info("Handshake RTT: "+u.T+"ms")),w=u;var P=r;if(w.na=Tr(w,w.L?w.ba:null,w.W),P.L){Ae(w.h,P);var M=P,oe=w.O;oe&&(M.H=oe),M.D&&(ur(M),be(M)),w.g=P}else Fn(w);u.i.length>0&&xn(u)}else $[0]!="stop"&&$[0]!="close"||Je(u,7);else u.I==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?Je(u,7):wr(u):$[0]!="noop"&&u.l&&u.l.qa($),u.A=0)}}ce(4)}catch{}}var dr=class{constructor(r,a){this.g=r,this.map=a}};function ys(r){this.l=r||10,h.PerformanceNavigationTiming?(r=h.performance.getEntriesByType("navigation"),r=r.length>0&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function fr(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function pr(r){return r.h?1:r.g?r.g.size:0}function _s(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function gr(r,a){r.g?r.g.add(a):r.h=a}function Ae(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}ys.prototype.cancel=function(){if(this.i=ve(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function ve(r){if(r.h!=null)return r.i.concat(r.h.G);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const u of r.g.values())a=a.concat(u.G);return a}return L(r.i)}var zt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kn(r,a){if(r){r=r.split("&");for(let u=0;u<r.length;u++){const w=r[u].indexOf("=");let S,A=null;w>=0?(S=r[u].substring(0,w),A=r[u].substring(w+1)):S=r[u],a(S,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Te(r){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let a;r instanceof Te?(this.l=r.l,We(this,r.j),this.o=r.o,this.g=r.g,ke(this,r.u),this.h=r.h,It(this,hi(r.i)),this.m=r.m):r&&(a=String(r).match(zt))?(this.l=!1,We(this,a[1]||"",!0),this.o=Rn(a[2]||""),this.g=Rn(a[3]||"",!0),ke(this,a[4]),this.h=Rn(a[5]||"",!0),It(this,a[6]||"",!0),this.m=Rn(a[7]||"")):(this.l=!1,this.i=new Wt(null,this.l))}Te.prototype.toString=function(){const r=[];var a=this.j;a&&r.push(Pn(a,ri,!0),":");var u=this.g;return(u||a=="file")&&(r.push("//"),(a=this.o)&&r.push(Pn(a,ri,!0),"@"),r.push($t(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&r.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&r.push("/"),r.push(Pn(u,u.charAt(0)=="/"?bt:Nn,!0))),(u=this.i.toString())&&r.push("?",u),(u=this.m)&&r.push("#",Pn(u,oi)),r.join("")},Te.prototype.resolve=function(r){const a=B(this);let u=!!r.j;u?We(a,r.j):u=!!r.o,u?a.o=r.o:u=!!r.g,u?a.g=r.g:u=r.u!=null;var w=r.h;if(u)ke(a,r.u);else if(u=!!r.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var S=a.h.lastIndexOf("/");S!=-1&&(w=a.h.slice(0,S+1)+w)}if(S=w,S==".."||S==".")w="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){w=S.lastIndexOf("/",0)==0,S=S.split("/");const A=[];for(let P=0;P<S.length;){const M=S[P++];M=="."?w&&P==S.length&&A.push(""):M==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),w&&P==S.length&&A.push("")):(A.push(M),w=!0)}w=A.join("/")}else w=S}return u?a.h=w:u=r.i.toString()!=="",u?It(a,hi(r.i)):u=!!r.m,u&&(a.m=r.m),a};function B(r){return new Te(r)}function We(r,a,u){r.j=u?Rn(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function ke(r,a){if(a){if(a=Number(a),isNaN(a)||a<0)throw Error("Bad port number "+a);r.u=a}else r.u=null}function It(r,a,u){a instanceof Wt?(r.i=a,Io(r.i,r.l)):(u||(a=Pn(a,ii)),r.i=new Wt(a,r.l))}function ne(r,a,u){r.i.set(a,u)}function Cn(r){return ne(r,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),r}function Rn(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Pn(r,a,u){return typeof r=="string"?(r=encodeURI(r).replace(a,vo),u&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function vo(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var ri=/[#\/\?@]/g,Nn=/[#\?:]/g,bt=/[#\?]/g,ii=/[#\?@]/g,oi=/#/g;function Wt(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function Ge(r){r.g||(r.g=new Map,r.h=0,r.i&&kn(r.i,function(a,u){r.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}n=Wt.prototype,n.add=function(r,a){Ge(this),this.i=null,r=fe(this,r);let u=this.g.get(r);return u||this.g.set(r,u=[]),u.push(a),this.h+=1,this};function mr(r,a){Ge(r),a=fe(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function Tt(r,a){return Ge(r),a=fe(r,a),r.g.has(a)}n.forEach=function(r,a){Ge(this),this.g.forEach(function(u,w){u.forEach(function(S){r.call(a,S,w,this)},this)},this)};function ai(r,a){Ge(r);let u=[];if(typeof a=="string")Tt(r,a)&&(u=u.concat(r.g.get(fe(r,a))));else for(r=Array.from(r.g.values()),a=0;a<r.length;a++)u=u.concat(r[a]);return u}n.set=function(r,a){return Ge(this),this.i=null,r=fe(this,r),Tt(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},n.get=function(r,a){return r?(r=ai(this,r),r.length>0?String(r[0]):a):a};function ci(r,a,u){mr(r,a),u.length>0&&(r.i=null,r.g.set(fe(r,a),L(u)),r.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(let w=0;w<a.length;w++){var u=a[w];const S=$t(u);u=ai(this,u);for(let A=0;A<u.length;A++){let P=S;u[A]!==""&&(P+="="+$t(u[A])),r.push(P)}}return this.i=r.join("&")};function hi(r){const a=new Wt;return a.i=r.i,r.g&&(a.g=new Map(r.g),a.h=r.h),a}function fe(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function Io(r,a){a&&!r.j&&(Ge(r),r.i=null,r.g.forEach(function(u,w){const S=w.toLowerCase();w!=S&&(mr(this,w),ci(this,S,u))},r)),r.j=a}function yr(r,a){const u=new En;if(h.Image){const w=new Image;w.onload=C(Ce,u,"TestLoadImage: loaded",!0,a,w),w.onerror=C(Ce,u,"TestLoadImage: error",!1,a,w),w.onabort=C(Ce,u,"TestLoadImage: abort",!1,a,w),w.ontimeout=C(Ce,u,"TestLoadImage: timeout",!1,a,w),h.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=r}else a(!1)}function ws(r,a){const u=new En,w=new AbortController,S=setTimeout(()=>{w.abort(),Ce(u,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:w.signal}).then(A=>{clearTimeout(S),A.ok?Ce(u,"TestPingServer: ok",!0,a):Ce(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(S),Ce(u,"TestPingServer: error",!1,a)})}function Ce(r,a,u,w,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),w(u)}catch{}}function On(){this.g=new yo}function Et(r){this.i=r.Sb||null,this.h=r.ab||!1}k(Et,nr),Et.prototype.g=function(){return new Dn(this.i,this.h)};function Dn(r,a){X.call(this),this.H=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}k(Dn,X),n=Dn.prototype,n.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=r,this.D=a,this.readyState=1,Ln(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const a={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};r&&(a.body=r),(this.H||h).fetch(new Request(this.D,a)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,se(this)),this.readyState=0},n.Pa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;vs(this)}else r.text().then(this.Oa.bind(this),this.ga.bind(this))};function vs(r){r.j.read().then(r.Ma.bind(r)).catch(r.ga.bind(r))}n.Ma=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.B.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?se(this):Ln(this),this.readyState==3&&vs(this)}},n.Oa=function(r){this.g&&(this.response=this.responseText=r,se(this))},n.Na=function(r){this.g&&(this.response=r,se(this))},n.ga=function(){this.g&&se(this)};function se(r){r.readyState=4,r.l=null,r.j=null,r.B=null,Ln(r)}n.setRequestHeader=function(r,a){this.A.append(r,a)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,r.push(u[0]+": "+u[1]),u=a.next();return r.join(`\r
`)};function Ln(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(Dn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function li(r){let a="";return gt(r,function(u,w){a+=w,a+=":",a+=u,a+=`\r
`}),a}function Is(r,a,u){e:{for(w in u){var w=!1;break e}w=!0}w||(u=li(u),typeof r=="string"?u!=null&&$t(u):ne(r,a,u))}function ae(r){X.call(this),this.headers=new Map,this.L=r||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}k(ae,X);var ui=/^https?$/i,bs=["POST","PUT"];n=ae.prototype,n.Fa=function(r){this.H=r},n.ea=function(r,a,u,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Se.g(),this.g.onreadystatechange=R(E(this.Ca,this));try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(A){Re(this,A);return}if(r=u||"",u=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var S in w)u.set(S,w[S]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const A of w.keys())u.set(A,w.get(A));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(u.keys()).find(A=>A.toLowerCase()=="content-type"),S=h.FormData&&r instanceof h.FormData,!(Array.prototype.indexOf.call(bs,a,void 0)>=0)||w||S||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,P]of u)this.g.setRequestHeader(A,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(r),this.v=!1}catch(A){Re(this,A)}};function Re(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.o=5,_r(r),qe(r)}function _r(r){r.A||(r.A=!0,Q(r,"complete"),Q(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=r||7,Q(this,"complete"),Q(this,"abort"),qe(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qe(this,!0)),ae.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?di(this):this.Xa())},n.Xa=function(){di(this)};function di(r){if(r.h&&typeof c<"u"){if(r.v&&Pe(r)==4)setTimeout(r.Ca.bind(r),0);else if(Q(r,"readystatechange"),Pe(r)==4){r.h=!1;try{const A=r.ca();e:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break e;default:a=!1}var u;if(!(u=a)){var w;if(w=A===0){let P=String(r.D).match(zt)[1]||null;!P&&h.self&&h.self.location&&(P=h.self.location.protocol.slice(0,-1)),w=!ui.test(P?P.toLowerCase():"")}u=w}if(u)Q(r,"complete"),Q(r,"success");else{r.o=6;try{var S=Pe(r)>2?r.g.statusText:""}catch{S=""}r.l=S+" ["+r.ca()+"]",_r(r)}}finally{qe(r)}}}}function qe(r,a){if(r.g){r.m&&(clearTimeout(r.m),r.m=null);const u=r.g;r.g=null,a||Q(r,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Pe(r){return r.g?r.g.readyState:0}n.ca=function(){try{return Pe(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),mo(a)}};function Ts(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.F){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Es(r){const a={};r=(r.g&&Pe(r)>=2&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<r.length;w++){if(p(r[w]))continue;var u=cr(r[w]);const S=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const A=a[S]||[];a[S]=A,A.push(u)}ho(a,function(w){return w.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gt(r,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[r]||a}function Mn(r){this.za=0,this.i=[],this.j=new En,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Gt("failFast",!1,r),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Gt("baseRetryDelayMs",5e3,r),this.Za=Gt("retryDelaySeedMs",1e4,r),this.Ta=Gt("forwardChannelMaxRetries",2,r),this.va=Gt("forwardChannelRequestTimeoutMs",2e4,r),this.ma=r&&r.xmlHttpFactory||void 0,this.Ua=r&&r.Rb||void 0,this.Aa=r&&r.useFetchStreams||!1,this.O=void 0,this.L=r&&r.supportsCrossDomainXhr||!1,this.M="",this.h=new ys(r&&r.concurrentRequestLimit),this.Ba=new On,this.S=r&&r.fastHandshake||!1,this.R=r&&r.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=r&&r.Pb||!1,r&&r.ua&&this.j.ua(),r&&r.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&r&&r.detectBufferingProxy||!1,this.ia=void 0,r&&r.longPollingTimeout&&r.longPollingTimeout>0&&(this.ia=r.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Mn.prototype,n.ka=8,n.I=1,n.connect=function(r,a,u,w){he(0),this.W=r,this.H=a||{},u&&w!==void 0&&(this.H.OSID=u,this.H.OAID=w),this.F=this.X,this.J=Tr(this,null,this.W),xn(this)};function wr(r){if(qt(r),r.I==3){var a=r.V++,u=B(r.J);if(ne(u,"SID",r.M),ne(u,"RID",a),ne(u,"TYPE","terminate"),St(r,u),a=new Ie(r,r.j,a),a.M=2,a.A=Cn(B(u)),u=!1,h.navigator&&h.navigator.sendBeacon)try{u=h.navigator.sendBeacon(a.A.toString(),"")}catch{}!u&&h.Image&&(new Image().src=a.A,u=!0),u||(a.g=Er(a.j,null),a.g.ea(a.A)),a.F=Date.now(),be(a)}pe(r)}function Un(r){r.g&&(ks(r),r.g.cancel(),r.g=null)}function qt(r){Un(r),r.v&&(h.clearTimeout(r.v),r.v=null),jn(r),r.h.cancel(),r.m&&(typeof r.m=="number"&&h.clearTimeout(r.m),r.m=null)}function xn(r){if(!fr(r.h)&&!r.m){r.m=!0;var a=r.Ea;ie||f(),Y||(ie(),Y=!0),y.add(a,r),r.D=0}}function fi(r,a){return pr(r.h)>=r.h.j-(r.m?1:0)?!1:r.m?(r.i=a.G.concat(r.i),!0):r.I==1||r.I==2||r.D>=(r.Sa?0:r.Ta)?!1:(r.m=Tn(E(r.Ea,r,a),br(r,r.D)),r.D++,!0)}n.Ea=function(r){if(this.m)if(this.m=null,this.I==1){if(!r){this.V=Math.floor(Math.random()*1e5),r=this.V++;const S=new Ie(this,this.j,r);let A=this.o;if(this.U&&(A?(A=Gs(A),Ks(A,this.U)):A=this.U),this.u!==null||this.R||(S.J=A,A=null),this.S)e:{for(var a=0,u=0;u<this.i.length;u++){t:{var w=this.i[u];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(a+=w,a>4096){a=u;break e}if(a===4096||u===this.i.length-1){a=u+1;break e}}a=1e3}else a=1e3;a=vr(this,S,a),u=B(this.J),ne(u,"RID",r),ne(u,"CVER",22),this.G&&ne(u,"X-HTTP-Session-Id",this.G),St(this,u),A&&(this.R?a="headers="+$t(li(A))+"&"+a:this.u&&Is(u,this.u,A)),gr(this.h,S),this.Ra&&ne(u,"TYPE","init"),this.S?(ne(u,"$req",a),ne(u,"SID","null"),S.U=!0,lr(S,u,null)):lr(S,u,a),this.I=2}}else this.I==3&&(r?Ss(this,r):this.i.length==0||fr(this.h)||Ss(this))};function Ss(r,a){var u;a?u=a.l:u=r.V++;const w=B(r.J);ne(w,"SID",r.M),ne(w,"RID",u),ne(w,"AID",r.K),St(r,w),r.u&&r.o&&Is(w,r.u,r.o),u=new Ie(r,r.j,u,r.D+1),r.u===null&&(u.J=r.o),a&&(r.i=a.G.concat(r.i)),a=vr(r,u,1e3),u.H=Math.round(r.va*.5)+Math.round(r.va*.5*Math.random()),gr(r.h,u),lr(u,w,a)}function St(r,a){r.H&&gt(r.H,function(u,w){ne(a,w,u)}),r.l&&gt({},function(u,w){ne(a,w,u)})}function vr(r,a,u){u=Math.min(r.i.length,u);const w=r.l?E(r.l.Ka,r.l,r):null;e:{var S=r.i;let M=-1;for(;;){const oe=["count="+u];M==-1?u>0?(M=S[0].g,oe.push("ofs="+M)):M=0:oe.push("ofs="+M);let $=!0;for(let re=0;re<u;re++){var A=S[re].g;const ge=S[re].map;if(A-=M,A<0)M=Math.max(0,S[re].g-100),$=!1;else try{A="req"+A+"_"||"";try{var P=ge instanceof Map?ge:Object.entries(ge);for(const[Ne,Kt]of P){let Jt=Kt;b(Kt)&&(Jt=bn(Kt)),oe.push(A+Ne+"="+encodeURIComponent(Jt))}}catch(Ne){throw oe.push(A+"type="+encodeURIComponent("_badmap")),Ne}}catch{w&&w(ge)}}if($){P=oe.join("&");break e}}P=void 0}return r=r.i.splice(0,u),a.G=r,P}function Fn(r){if(!r.g&&!r.v){r.Y=1;var a=r.Da;ie||f(),Y||(ie(),Y=!0),y.add(a,r),r.A=0}}function As(r){return r.g||r.v||r.A>=3?!1:(r.Y++,r.v=Tn(E(r.Da,r),br(r,r.A)),r.A++,!0)}n.Da=function(){if(this.v=null,Ke(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var r=4*this.T;this.j.info("BP detection timer enabled: "+r),this.B=Tn(E(this.Wa,this),r)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,he(10),Un(this),Ke(this))};function ks(r){r.B!=null&&(h.clearTimeout(r.B),r.B=null)}function Ke(r){r.g=new Ie(r,r.j,"rpc",r.Y),r.u===null&&(r.g.J=r.o),r.g.P=0;var a=B(r.na);ne(a,"RID","rpc"),ne(a,"SID",r.M),ne(a,"AID",r.K),ne(a,"CI",r.F?"0":"1"),!r.F&&r.ia&&ne(a,"TO",r.ia),ne(a,"TYPE","xmlhttp"),St(r,a),r.u&&r.o&&Is(a,r.u,r.o),r.O&&(r.g.H=r.O);var u=r.g;r=r.ba,u.M=1,u.A=Cn(B(a)),u.u=null,u.R=!0,Sn(u,r)}n.Va=function(){this.C!=null&&(this.C=null,Un(this),As(this),he(19))};function jn(r){r.C!=null&&(h.clearTimeout(r.C),r.C=null)}function Ir(r,a){var u=null;if(r.g==a){jn(r),ks(r),r.g=null;var w=2}else if(_s(r.h,a))u=a.G,Ae(r.h,a),w=1;else return;if(r.I!=0){if(a.o)if(w==1){u=a.u?a.u.length:0,a=Date.now()-a.F;var S=r.D;w=wt(),Q(w,new jt(w,u)),xn(r)}else Fn(r);else if(S=a.m,S==3||S==0&&a.X>0||!(w==1&&fi(r,a)||w==2&&As(r)))switch(u&&u.length>0&&(a=r.h,a.i=a.i.concat(u)),S){case 1:Je(r,5);break;case 4:Je(r,10);break;case 3:Je(r,6);break;default:Je(r,2)}}}function br(r,a){let u=r.Qa+Math.floor(Math.random()*r.Za);return r.isActive()||(u*=2),u*a}function Je(r,a){if(r.j.info("Error code "+a),a==2){var u=E(r.bb,r),w=r.Ua;const S=!w;w=new Te(w||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||We(w,"https"),Cn(w),S?yr(w.toString(),u):ws(w.toString(),u)}else he(2);r.I=0,r.l&&r.l.pa(a),pe(r),qt(r)}n.bb=function(r){r?(this.j.info("Successfully pinged google.com"),he(2)):(this.j.info("Failed to ping google.com"),he(1))};function pe(r){if(r.I=0,r.ja=[],r.l){const a=ve(r.h);(a.length!=0||r.i.length!=0)&&(O(r.ja,a),O(r.ja,r.i),r.h.i.length=0,L(r.i),r.i.length=0),r.l.oa()}}function Tr(r,a,u){var w=u instanceof Te?B(u):new Te(u);if(w.g!="")a&&(w.g=a+"."+w.g),ke(w,w.u);else{var S=h.location;w=S.protocol,a=a?a+"."+S.hostname:S.hostname,S=+S.port;const A=new Te(null);w&&We(A,w),a&&(A.g=a),S&&ke(A,S),u&&(A.h=u),w=A}return u=r.G,a=r.wa,u&&a&&ne(w,u,a),ne(w,"VER",r.ka),St(r,w),w}function Er(r,a,u){if(a&&!r.L)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Aa&&!r.ma?new ae(new Et({ab:u})):new ae(r.ma),a.Fa(r.L),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function At(){}n=At.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function o(r,a){X.call(this),this.g=new Mn(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.sa&&(r?r["X-WebChannel-Client-Profile"]=a.sa:r={"X-WebChannel-Client-Profile":a.sa}),this.g.U=r,(r=a&&a.Qb)&&!p(r)&&(this.g.u=r),this.A=a&&a.supportsCrossDomainXhr||!1,this.v=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!p(a)&&(this.g.G=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new I(this)}k(o,X),o.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},o.prototype.close=function(){wr(this.g)},o.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var u={};u.__data__=r,r=u}else this.v&&(u={},u.__data__=bn(r),r=u);a.i.push(new dr(a.Ya++,r)),a.I==3&&xn(a)},o.prototype.N=function(){this.g.l=null,delete this.j,wr(this.g),delete this.g,o.Z.N.call(this)};function l(r){$e.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){e:{for(const u in a){r=u;break e}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}k(l,$e);function d(){us.call(this),this.status=1}k(d,us);function I(r){this.g=r}k(I,At),I.prototype.ra=function(){Q(this.g,"a")},I.prototype.qa=function(r){Q(this.g,new l(r))},I.prototype.pa=function(r){Q(this.g,new d)},I.prototype.oa=function(){Q(this.g,"b")},o.prototype.send=o.prototype.o,o.prototype.open=o.prototype.m,o.prototype.close=o.prototype.close,vt.NO_ERROR=0,vt.TIMEOUT=8,vt.HTTP_ERROR=6,wo.COMPLETE="complete",sr.EventType=_t,_t.OPEN="a",_t.CLOSE="b",_t.ERROR="c",_t.MESSAGE="d",X.prototype.listen=X.prototype.J,ae.prototype.listenOnce=ae.prototype.K,ae.prototype.getLastError=ae.prototype.Ha,ae.prototype.getLastErrorCode=ae.prototype.ya,ae.prototype.getStatus=ae.prototype.ca,ae.prototype.getResponseJson=ae.prototype.La,ae.prototype.getResponseText=ae.prototype.la,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Fa}).apply(typeof wi<"u"?wi:typeof self<"u"?self:typeof window<"u"?window:{});const oh="@firebase/firestore",ah="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ye.UNAUTHENTICATED=new ye(null),ye.GOOGLE_CREDENTIALS=new ye("google-credentials-uid"),ye.FIRST_PARTY=new ye("first-party-uid"),ye.MOCK_USER=new ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xr="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=new Oa("@firebase/firestore");function je(n,...e){if(Vs.logLevel<=ee.DEBUG){const t=e.map(Ua);Vs.debug(`Firestore (${Xr}): ${n}`,...t)}}function ou(n,...e){if(Vs.logLevel<=ee.ERROR){const t=e.map(Ua);Vs.error(`Firestore (${Xr}): ${n}`,...t)}}function S_(n,...e){if(Vs.logLevel<=ee.WARN){const t=e.map(Ua);Vs.warn(`Firestore (${Xr}): ${n}`,...t)}}function Ua(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function jr(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,au(n,s,t)}function au(n,e,t){let s=`FIRESTORE (${Xr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw ou(s),new Error(s)}function Nr(n,e,t,s){let i="Unexpected state";typeof t=="string"?i=t:s=t,n||au(e,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class J extends dt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ye.UNAUTHENTICATED)))}shutdown(){}}class k_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class C_{constructor(e){this.t=e,this.currentUser=ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Nr(this.o===void 0,42304);let s=this.i;const i=T=>this.i!==s?(s=this.i,t(T)):Promise.resolve();let c=new Or;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Or,e.enqueueRetryable((()=>i(this.currentUser)))};const h=()=>{const T=c;e.enqueueRetryable((async()=>{await T.promise,await i(this.currentUser)}))},b=T=>{je("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=T,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((T=>b(T))),setTimeout((()=>{if(!this.auth){const T=this.t.getImmediate({optional:!0});T?b(T):(je("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Or)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(je("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Nr(typeof s.accessToken=="string",31837,{l:s}),new cu(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Nr(e===null||typeof e=="string",2055,{h:e}),new ye(e)}}class R_{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=ye.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class P_{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new R_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ye.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ch{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Me(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Nr(this.o===void 0,3512);const s=c=>{c.error!=null&&je("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,je("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>s(c)))};const i=c=>{je("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>i(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?i(c):je("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ch(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Nr(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ch(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=O_(40);for(let c=0;c<i.length;++c)s.length<20&&i[c]<t&&(s+=e.charAt(i[c]%62))}return s}}function pn(n,e){return n<e?-1:n>e?1:0}function L_(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const i=n.charAt(s),c=e.charAt(s);if(i!==c)return Fo(i)===Fo(c)?pn(i,c):Fo(i)?1:-1}return pn(n.length,e.length)}const M_=55296,U_=57343;function Fo(n){const e=n.charCodeAt(0);return e>=M_&&e<=U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="__name__";class Ye{constructor(e,t,s){t===void 0?t=0:t>e.length&&jr(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&jr(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ye.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ye?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const c=Ye.compareSegments(e.get(i),t.get(i));if(c!==0)return c}return pn(e.length,t.length)}static compareSegments(e,t){const s=Ye.isNumericId(e),i=Ye.isNumericId(t);return s&&!i?-1:!s&&i?1:s&&i?Ye.extractNumericId(e).compare(Ye.extractNumericId(t)):L_(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ma.fromString(e.substring(4,e.length-2))}}class De extends Ye{construct(e,t,s){return new De(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new J(K.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((i=>i.length>0)))}return new De(t)}static emptyPath(){return new De([])}}const x_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class zn extends Ye{construct(e,t,s){return new zn(e,t,s)}static isValidIdentifier(e){return x_.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),zn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===hh}static keyField(){return new zn([hh])}static fromServerFormat(e){const t=[];let s="",i=0;const c=()=>{if(s.length===0)throw new J(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;i<e.length;){const b=e[i];if(b==="\\"){if(i+1===e.length)throw new J(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const T=e[i+1];if(T!=="\\"&&T!=="."&&T!=="`")throw new J(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=T,i+=2}else b==="`"?(h=!h,i++):b!=="."||h?(s+=b,i++):(c(),i++)}if(c(),h)throw new J(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new zn(t)}static emptyPath(){return new zn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.path=e}static fromPath(e){return new Gn(De.fromString(e))}static fromName(e){return new Gn(De.fromString(e).popFirst(5))}static empty(){return new Gn(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return De.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Gn(new De(e.slice()))}}function F_(n,e,t,s){if(e===!0&&s===!0)throw new J(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function j_(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function V_(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":jr(12329,{type:typeof n})}function B_(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new J(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=V_(n);throw new J(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ue(n,e){const t={typeString:n};return e&&(t.value=e),t}function Yr(n,e){if(!j_(n))throw new J(K.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const i=e[s].typeString,c="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const h=n[s];if(i&&typeof h!==i){t=`JSON field '${s}' must be a ${i}.`;break}if(c!==void 0&&h!==c.value){t=`Expected '${s}' field to equal '${c.value}'`;break}}if(t)throw new J(K.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh=-62135596800,uh=1e6;class Ze{static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*uh);return new Ze(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new J(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new J(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<lh)throw new J(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/uh}_compareTo(e){return this.seconds===e.seconds?pn(this.nanoseconds,e.nanoseconds):pn(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ze._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Yr(e,Ze._jsonSchema))return new Ze(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-lh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ze._jsonSchemaVersion="firestore/timestamp/1.0",Ze._jsonSchema={type:ue("string",Ze._jsonSchemaVersion),seconds:ue("number"),nanoseconds:ue("number")};function $_(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class H_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new H_("Invalid base64 string: "+c):c}})(e);return new is(t)}static fromUint8Array(e){const t=(function(i){let c="";for(let h=0;h<i.length;++h)c+=String.fromCharCode(i[h]);return c})(e);return new is(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pn(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}is.EMPTY_BYTE_STRING=new is("");const sa="(default)";class Gi{constructor(e,t){this.projectId=e,this.database=t||sa}static empty(){return new Gi("","")}get isDefaultDatabase(){return this.database===sa}isEqual(e){return e instanceof Gi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,t=null,s=[],i=[],c=null,h="F",b=null,T=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=c,this.limitType=h,this.startAt=b,this.endAt=T,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function W_(n){return new z_(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dh,W;(W=dh||(dh={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Ma([4294967295,4294967295],0);/**
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
 */const G_=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=1048576;function jo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,t,s=1e3,i=1.5,c=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=i,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-s);i>0&&je("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t,s,i,c){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=c,this.deferred=new Or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,c){const h=Date.now()+s,b=new xa(e,t,h,i,c);return b.start(s),b}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var fh,ph;(ph=fh||(fh={})).Ma="default",ph.Cache="cache";/**
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
 */function J_(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="firestore.googleapis.com",mh=!0;class yh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new J(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hu,this.ssl=mh}else this.host=e.host,this.ssl=e.ssl??mh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=G_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<q_)throw new J(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}F_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=J_(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new J(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new J(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new J(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,i){return s.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lu{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new A_;switch(s.type){case"firstParty":return new P_(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new J(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=gh.get(t);s&&(je("ComponentProvider","Removing Datastore"),gh.delete(t),s.terminate())})(this),Promise.resolve()}}function X_(n,e,t,s={}){n=B_(n,lu);const i=zs(e),c=n._getSettings(),h={...c,emulatorOptions:n._getEmulatorOptions()},b=`${e}:${t}`;i&&(Pa(`https://${b}`),Na("Firestore",!0)),c.host!==hu&&c.host!==b&&S_("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const T={...c,host:b,ssl:i,emulatorOptions:s};if(!ss(T,h)&&(n._setSettings(T),s.mockUserToken)){let E,C;if(typeof s.mockUserToken=="string")E=s.mockUserToken,C=ye.MOCK_USER;else{E=eu(s.mockUserToken,n._app?.options.projectId);const k=s.mockUserToken.sub||s.mockUserToken.user_id;if(!k)throw new J(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new ye(k)}n._authCredentials=new k_(new cu(E,C))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Fa(this.firestore,e,this._query)}}class tt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ja(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}toJSON(){return{type:tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Yr(t,tt._jsonSchema))return new tt(e,s||null,new Gn(De.fromString(t.referencePath)))}}tt._jsonSchemaVersion="firestore/documentReference/1.0",tt._jsonSchema={type:ue("string",tt._jsonSchemaVersion),referencePath:ue("string")};class ja extends Fa{constructor(e,t,s){super(e,t,W_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new Gn(e))}withConverter(e){return new ja(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="AsyncQueue";class wh{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new K_(this,"async_queue_retry"),this._c=()=>{const s=jo();s&&je(_h,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=jo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=jo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Or;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!$_(e))throw e;je(_h,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,ou("INTERNAL UNHANDLED ERROR: ",vh(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=xa.createAndSchedule(this,e,t,s,(c=>this.hc(c)));return this.tc.push(i),i}uc(){this.nc&&jr(47125,{Pc:vh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function vh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Y_ extends lu{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new wh,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wh(e),this._firestoreClient=void 0,await e}}}function Q_(n,e){const t=typeof n=="object"?n:La(),s=typeof n=="string"?n:sa,i=ro(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const c=Yl("firestore");c&&X_(i,...c)}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ct(is.fromBase64String(e))}catch(t){throw new J(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ct(is.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ct._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Yr(e,Ct._jsonSchema))return Ct.fromBase64String(e.bytes)}}Ct._jsonSchemaVersion="firestore/bytes/1.0",Ct._jsonSchema={type:ue("string",Ct._jsonSchemaVersion),bytes:ue("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new J(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new zn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new J(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new J(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return pn(this._lat,e._lat)||pn(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xn._jsonSchemaVersion}}static fromJSON(e){if(Yr(e,Xn._jsonSchema))return new Xn(e.latitude,e.longitude)}}Xn._jsonSchemaVersion="firestore/geoPoint/1.0",Xn._jsonSchema={type:ue("string",Xn._jsonSchemaVersion),latitude:ue("number"),longitude:ue("number")};/**
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
 */class Yn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,i){if(s.length!==i.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==i[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Yn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Yr(e,Yn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Yn(e.vectorValues);throw new J(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Yn._jsonSchemaVersion="firestore/vectorValue/1.0",Yn._jsonSchema={type:ue("string",Yn._jsonSchemaVersion),vectorValues:ue("object")};const Z_=new RegExp("[~\\*/\\[\\]]");function ew(n,e,t){if(e.search(Z_)>=0)throw Ih(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new uu(...e.split("."))._internalPath}catch{throw Ih(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Ih(n,e,t,s,i){let c=`Function ${e}() called with invalid data`;c+=". ";let h="";return new J(K.INVALID_ARGUMENT,c+n+h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,t,s,i,c){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(fu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class tw extends du{data(){return super.data()}}function fu(n,e){return typeof e=="string"?ew(n,e):e instanceof uu?e._internalPath:e._delegate._internalPath}class vi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ls extends du{constructor(e,t,s,i,c,h){super(e,t,s,i,h),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ci(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(fu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ls._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ls._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ls._jsonSchema={type:ue("string",Ls._jsonSchemaVersion),bundleSource:ue("string","DocumentSnapshot"),bundleName:ue("string"),bundle:ue("string")};class Ci extends Ls{data(e={}){return super.data(e)}}class Dr{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new vi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Ci(this._firestore,this._userDataWriter,s.key,s,new vi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new J(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,c){if(i._snapshot.oldDocs.isEmpty()){let h=0;return i._snapshot.docChanges.map((b=>{const T=new Ci(i._firestore,i._userDataWriter,b.doc.key,b.doc,new vi(i._snapshot.mutatedKeys.has(b.doc.key),i._snapshot.fromCache),i.query.converter);return b.doc,{type:"added",doc:T,oldIndex:-1,newIndex:h++}}))}{let h=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((b=>c||b.type!==3)).map((b=>{const T=new Ci(i._firestore,i._userDataWriter,b.doc.key,b.doc,new vi(i._snapshot.mutatedKeys.has(b.doc.key),i._snapshot.fromCache),i.query.converter);let E=-1,C=-1;return b.type!==0&&(E=h.indexOf(b.doc.key),h=h.delete(b.doc.key)),b.type!==1&&(h=h.add(b.doc),C=h.indexOf(b.doc.key)),{type:nw(b.type),doc:T,oldIndex:E,newIndex:C}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Dr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=D_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],i=[];return this.docs.forEach((c=>{c._document!==null&&(t.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),i.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function nw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return jr(61501,{type:n})}}Dr._jsonSchemaVersion="firestore/querySnapshot/1.0",Dr._jsonSchema={type:ue("string",Dr._jsonSchemaVersion),bundleSource:ue("string","QuerySnapshot"),bundleName:ue("string"),bundle:ue("string")};(function(e,t=!0){(function(i){Xr=i})(ls),rs(new fn("firestore",((s,{instanceIdentifier:i,options:c})=>{const h=s.getProvider("app").getImmediate(),b=new Y_(new C_(s.getProvider("auth-internal")),new N_(h,s.getProvider("app-check-internal")),(function(E,C){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new J(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gi(E.options.projectId,C)})(h,i),h);return c={useFetchStreams:t,...c},b._setSettings(c),b}),"PUBLIC").setMultipleInstances(!0)),it(oh,ah,e),it(oh,ah,"esm2020")})();function pu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sw=pu,gu=new Kr("auth","Firebase",pu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new Oa("@firebase/auth");function rw(n,...e){qi.logLevel<=ee.WARN&&qi.warn(`Auth (${ls}): ${n}`,...e)}function Ri(n,...e){qi.logLevel<=ee.ERROR&&qi.error(`Auth (${ls}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(n,...e){throw Va(n,...e)}function ot(n,...e){return Va(n,...e)}function mu(n,e,t){const s={...sw(),[e]:t};return new Kr("auth","Firebase",s).create(e,{appName:n.name})}function Qn(n){return mu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Va(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return gu.create(n,...e)}function F(n,e,...t){if(!n)throw Va(e,...t)}function Nt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ri(e),new Error(e)}function Ft(n,e){n||Nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(){return typeof self<"u"&&self.location?.href||""}function iw(){return bh()==="http:"||bh()==="https:"}function bh(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iw()||sy()||"connection"in navigator)?navigator.onLine:!0}function aw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ft(t>e,"Short delay should be less than long delay!"),this.isMobile=ty()||ry()}get(){return ow()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(n,e){Ft(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lw=new Qr(3e4,6e4);function $a(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ws(n,e,t,s,i={}){return _u(n,i,async()=>{let c={},h={};s&&(e==="GET"?h=s:c={body:JSON.stringify(s)});const b=Jr({key:n.config.apiKey,...h}).slice(1),T=await n._getAdditionalHeaders();T["Content-Type"]="application/json",n.languageCode&&(T["X-Firebase-Locale"]=n.languageCode);const E={method:e,headers:T,...c};return ny()||(E.referrerPolicy="no-referrer"),n.emulatorConfig&&zs(n.emulatorConfig.host)&&(E.credentials="include"),yu.fetch()(await wu(n,n.config.apiHost,t,b),E)})}async function _u(n,e,t){n._canInitEmulator=!1;const s={...cw,...e};try{const i=new dw(n),c=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw Ii(n,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const b=c.ok?h.errorMessage:h.error.message,[T,E]=b.split(" : ");if(T==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ii(n,"credential-already-in-use",h);if(T==="EMAIL_EXISTS")throw Ii(n,"email-already-in-use",h);if(T==="USER_DISABLED")throw Ii(n,"user-disabled",h);const C=s[T]||T.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw mu(n,C,E);xt(n,C)}}catch(i){if(i instanceof dt)throw i;xt(n,"network-request-failed",{message:String(i)})}}async function uw(n,e,t,s,i={}){const c=await Ws(n,e,t,s,i);return"mfaPendingCredential"in c&&xt(n,"multi-factor-auth-required",{_serverResponse:c}),c}async function wu(n,e,t,s){const i=`${e}${t}?${s}`,c=n,h=c.config.emulator?Ba(n.config,i):`${n.config.apiScheme}://${i}`;return hw.includes(t)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}class dw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ot(this.auth,"network-request-failed")),lw.get())})}}function Ii(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=ot(n,e,s);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fw(n,e){return Ws(n,"POST","/v1/accounts:delete",e)}async function Ki(n,e){return Ws(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pw(n,e=!1){const t=hs(n),s=await t.getIdToken(e),i=Ha(s);F(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const c=typeof i.firebase=="object"?i.firebase:void 0,h=c?.sign_in_provider;return{claims:i,token:s,authTime:Lr(Vo(i.auth_time)),issuedAtTime:Lr(Vo(i.iat)),expirationTime:Lr(Vo(i.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Vo(n){return Number(n)*1e3}function Ha(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Ri("JWT malformed, contained fewer than 3 sections"),null;try{const i=Jl(t);return i?JSON.parse(i):(Ri("Failed to decode base64 JWT payload"),null)}catch(i){return Ri("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Th(n){const e=Ha(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof dt&&gw(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function gw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lr(this.lastLoginAt),this.creationTime=Lr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ji(n){const e=n.auth,t=await n.getIdToken(),s=await Vr(n,Ki(e,{idToken:t}));F(s?.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const c=i.providerUserInfo?.length?vu(i.providerUserInfo):[],h=_w(n.providerData,c),b=n.isAnonymous,T=!(n.email&&i.passwordHash)&&!h?.length,E=b?T:!1,C={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:h,metadata:new ia(i.createdAt,i.lastLoginAt),isAnonymous:E};Object.assign(n,C)}async function yw(n){const e=hs(n);await Ji(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _w(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function vu(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ww(n,e){const t=await _u(n,{},async()=>{const s=Jr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:c}=n.config,h=await wu(n,i,"/v1/token",`key=${c}`),b=await n._getAdditionalHeaders();b["Content-Type"]="application/x-www-form-urlencoded";const T={method:"POST",headers:b,body:s};return n.emulatorConfig&&zs(n.emulatorConfig.host)&&(T.credentials="include"),yu.fetch()(h,T)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function vw(n,e){return Ws(n,"POST","/v2/accounts:revokeToken",$a(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Th(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=Th(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:c}=await ww(e,t);this.updateTokensAndExpiration(s,i,Number(c))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:c}=t,h=new Ms;return s&&(F(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),i&&(F(typeof i=="string","internal-error",{appName:e}),h.accessToken=i),c&&(F(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ms,this.toJSON())}_performRefresh(){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ve{constructor({uid:e,auth:t,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new mw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ia(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Vr(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return pw(this,e)}reload(){return yw(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ve({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ji(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(Qn(this.auth));const e=await this.getIdToken();return await Vr(this,fw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,i=t.email??void 0,c=t.phoneNumber??void 0,h=t.photoURL??void 0,b=t.tenantId??void 0,T=t._redirectEventId??void 0,E=t.createdAt??void 0,C=t.lastLoginAt??void 0,{uid:k,emailVerified:R,isAnonymous:L,providerData:O,stsTokenManager:D}=t;F(k&&D,e,"internal-error");const N=Ms.fromJSON(this.name,D);F(typeof k=="string",e,"internal-error"),Yt(s,e.name),Yt(i,e.name),F(typeof R=="boolean",e,"internal-error"),F(typeof L=="boolean",e,"internal-error"),Yt(c,e.name),Yt(h,e.name),Yt(b,e.name),Yt(T,e.name),Yt(E,e.name),Yt(C,e.name);const V=new Ve({uid:k,auth:e,email:i,emailVerified:R,displayName:s,isAnonymous:L,photoURL:h,phoneNumber:c,tenantId:b,stsTokenManager:N,createdAt:E,lastLoginAt:C});return O&&Array.isArray(O)&&(V.providerData=O.map(j=>({...j}))),T&&(V._redirectEventId=T),V}static async _fromIdTokenResponse(e,t,s=!1){const i=new Ms;i.updateFromServerResponse(t);const c=new Ve({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ji(c),c}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];F(i.localId!==void 0,"internal-error");const c=i.providerUserInfo!==void 0?vu(i.providerUserInfo):[],h=!(i.email&&i.passwordHash)&&!c?.length,b=new Ms;b.updateFromIdToken(s);const T=new Ve({uid:i.localId,auth:e,stsTokenManager:b,isAnonymous:h}),E={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new ia(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!c?.length};return Object.assign(T,E),T}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=new Map;function Ot(n){Ft(n instanceof Function,"Expected a class definition");let e=Eh.get(n);return e?(Ft(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Eh.set(n,e),e)}/**
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
 */class Iu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Iu.type="NONE";const Sh=Iu;/**
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
 */function Pi(n,e,t){return`firebase:${n}:${e}:${t}`}class Us{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:c}=this.auth;this.fullUserKey=Pi(this.userKey,i.apiKey,c),this.fullPersistenceKey=Pi("persistence",i.apiKey,c),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ki(this.auth,{idToken:e}).catch(()=>{});return t?Ve._fromGetAccountInfoResponse(this.auth,t,e):null}return Ve._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Us(Ot(Sh),e,s);const i=(await Promise.all(t.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=i[0]||Ot(Sh);const h=Pi(s,e.config.apiKey,e.name);let b=null;for(const E of t)try{const C=await E._get(h);if(C){let k;if(typeof C=="string"){const R=await Ki(e,{idToken:C}).catch(()=>{});if(!R)break;k=await Ve._fromGetAccountInfoResponse(e,R,C)}else k=Ve._fromJSON(e,C);E!==c&&(b=k),c=E;break}}catch{}const T=i.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!T.length?new Us(c,e,s):(c=T[0],b&&await c._set(h,b.toJSON()),await Promise.all(t.map(async E=>{if(E!==c)try{await E._remove(h)}catch{}})),new Us(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Su(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ku(e))return"Blackberry";if(Cu(e))return"Webos";if(Tu(e))return"Safari";if((e.includes("chrome/")||Eu(e))&&!e.includes("edge/"))return"Chrome";if(Au(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function bu(n=we()){return/firefox\//i.test(n)}function Tu(n=we()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Eu(n=we()){return/crios\//i.test(n)}function Su(n=we()){return/iemobile/i.test(n)}function Au(n=we()){return/android/i.test(n)}function ku(n=we()){return/blackberry/i.test(n)}function Cu(n=we()){return/webos/i.test(n)}function za(n=we()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Iw(n=we()){return za(n)&&!!window.navigator?.standalone}function bw(){return iy()&&document.documentMode===10}function Ru(n=we()){return za(n)||Au(n)||Cu(n)||ku(n)||/windows phone/i.test(n)||Su(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(n,e=[]){let t;switch(n){case"Browser":t=Ah(we());break;case"Worker":t=`${Ah(we())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ls}/${s}`}/**
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
 */class Tw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=c=>new Promise((h,b)=>{try{const T=e(c);h(T)}catch(T){b(T)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function Ew(n,e={}){return Ws(n,"GET","/v2/passwordPolicy",$a(n,e))}/**
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
 */const Sw=6;class Aw{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Sw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kh(this),this.idTokenSubscription=new kh(this),this.beforeStateQueue=new Tw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ot(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Us.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ki(this,{idToken:e}),s=await Ve._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Me(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,h=s?._redirectEventId,b=await this.tryRedirectSignIn(e);(!c||c===h)&&b?.user&&(s=b.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ji(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(Qn(this));const t=e?hs(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(Qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(Qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ew(this),t=new Aw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Kr("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await vw(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ot(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await Us.create(this,[Ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const c=typeof t=="function"?t:t.next.bind(t);let h=!1;const b=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(b,this,"internal-error"),b.then(()=>{h||c(this.currentUser)}),typeof t=="function"){const T=e.addObserver(t,s,i);return()=>{h=!0,T()}}else{const T=e.addObserver(t);return()=>{h=!0,T()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&rw(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Wa(n){return hs(n)}class kh{constructor(e){this.auth=e,this.observer=null,this.addObserver=dy(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ga={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Cw(n){Ga=n}function Rw(n){return Ga.loadJS(n)}function Pw(){return Ga.gapiScript}function Nw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(n,e){const t=ro(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),c=t.getOptions();if(ss(c,e??{}))return i;xt(i,"already-initialized")}return t.initialize({options:e})}function Dw(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Ot);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function Lw(n,e,t){const s=Wa(n);F(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,c=Nu(e),{host:h,port:b}=Mw(e),T=b===null?"":`:${b}`,E={url:`${c}//${h}${T}/`},C=Object.freeze({host:h,port:b,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){F(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),F(ss(E,s.config.emulator)&&ss(C,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=E,s.emulatorConfig=C,s.settings.appVerificationDisabledForTesting=!0,zs(h)?(Pa(`${c}//${h}${T}`),Na("Auth",!0)):Uw()}function Nu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Mw(n){const e=Nu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const c=i[1];return{host:c,port:Ch(s.substr(c.length+1))}}else{const[c,h]=s.split(":");return{host:c,port:Ch(h)}}}function Ch(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Uw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Nt("not implemented")}_getIdTokenResponse(e){return Nt("not implemented")}_linkToIdToken(e,t){return Nt("not implemented")}_getReauthenticationResolver(e){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(n,e){return uw(n,"POST","/v1/accounts:signInWithIdp",$a(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw="http://localhost";class os extends Ou{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):xt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...c}=t;if(!s||!i)return null;const h=new os(s,i);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return xs(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,xs(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xs(e,t)}buildRequest(){const e={requestUri:xw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Jr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zr extends Du{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Zr{constructor(){super("facebook.com")}static credential(e){return os._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Zr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return os._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return sn.credential(t,s)}catch{return null}}}sn.GOOGLE_SIGN_IN_METHOD="google.com";sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Zr{constructor(){super("github.com")}static credential(e){return os._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.GITHUB_SIGN_IN_METHOD="github.com";rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Zr{constructor(){super("twitter.com")}static credential(e,t){return os._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return on.credential(t,s)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const c=await Ve._fromIdTokenResponse(e,s,i),h=Rh(s);return new Bs({user:c,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Rh(s);return new Bs({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Rh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends dt{constructor(e,t,s,i){super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Xi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Xi(e,t,s,i)}}function Lu(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Xi._fromErrorAndOperation(n,c,e,s):c})}async function Fw(n,e,t=!1){const s=await Vr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Bs._forOperation(n,"link",s)}/**
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
 */async function jw(n,e,t=!1){const{auth:s}=n;if(Me(s.app))return Promise.reject(Qn(s));const i="reauthenticate";try{const c=await Vr(n,Lu(s,i,e,n),t);F(c.idToken,s,"internal-error");const h=Ha(c.idToken);F(h,s,"internal-error");const{sub:b}=h;return F(n.uid===b,s,"user-mismatch"),Bs._forOperation(n,i,c)}catch(c){throw c?.code==="auth/user-not-found"&&xt(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vw(n,e,t=!1){if(Me(n.app))return Promise.reject(Qn(n));const s="signIn",i=await Lu(n,s,e),c=await Bs._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(c.user),c}function Bw(n,e,t,s){return hs(n).onIdTokenChanged(e,t,s)}function $w(n,e,t){return hs(n).beforeAuthStateChanged(e,t)}const Yi="__sak";/**
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
 */class Mu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yi,"1"),this.storage.removeItem(Yi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=1e3,zw=10;class Uu extends Mu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ru(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,b,T)=>{this.notifyListeners(h,T)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},c=this.storage.getItem(s);bw()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zw):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Hw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Uu.type="LOCAL";const Ww=Uu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu extends Mu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xu.type="SESSION";const Fu=xu;/**
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
 */function Gw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class io{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new io(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:c}=t.data,h=this.handlersMap[i];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const b=Array.from(h).map(async E=>E(t.origin,c)),T=await Gw(b);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:T})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}io.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class qw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let c,h;return new Promise((b,T)=>{const E=qa("",20);i.port1.start();const C=setTimeout(()=>{T(new Error("unsupported_event"))},s);h={messageChannel:i,onMessage(k){const R=k;if(R.data.eventId===E)switch(R.data.status){case"ack":clearTimeout(C),c=setTimeout(()=>{T(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),b(R.data.response);break;default:clearTimeout(C),clearTimeout(c),T(new Error("invalid_response"));break}}},this.handlers.add(h),i.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:E,data:t},[i.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return window}function Kw(n){at().location.href=n}/**
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
 */function ju(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function Jw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xw(){return navigator?.serviceWorker?.controller||null}function Yw(){return ju()?self:null}/**
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
 */const Vu="firebaseLocalStorageDb",Qw=1,Qi="firebaseLocalStorage",Bu="fbase_key";class ei{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function oo(n,e){return n.transaction([Qi],e?"readwrite":"readonly").objectStore(Qi)}function Zw(){const n=indexedDB.deleteDatabase(Vu);return new ei(n).toPromise()}function oa(){const n=indexedDB.open(Vu,Qw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Qi,{keyPath:Bu})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Qi)?e(s):(s.close(),await Zw(),e(await oa()))})})}async function Ph(n,e,t){const s=oo(n,!0).put({[Bu]:e,value:t});return new ei(s).toPromise()}async function ev(n,e){const t=oo(n,!1).get(e),s=await new ei(t).toPromise();return s===void 0?null:s.value}function Nh(n,e){const t=oo(n,!0).delete(e);return new ei(t).toPromise()}const tv=800,nv=3;class $u{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>nv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ju()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=io._getInstance(Yw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Jw(),!this.activeServiceWorker)return;this.sender=new qw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oa();return await Ph(e,Yi,"1"),await Nh(e,Yi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ph(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>ev(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Nh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const c=oo(i,!1).getAll();return new ei(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:c}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(c)&&(this.notifyListeners(i,c),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$u.type="LOCAL";const sv=$u;new Qr(3e4,6e4);/**
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
 */function rv(n,e){return e?Ot(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ka extends Ou{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iv(n){return Vw(n.auth,new Ka(n),n.bypassAuthState)}function ov(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),jw(t,new Ka(n),n.bypassAuthState)}async function av(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Fw(t,new Ka(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t,s,i,c=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:c,error:h,type:b}=e;if(h){this.reject(h);return}const T={auth:this.auth,requestUri:t,sessionId:s,tenantId:c||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(b)(T))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iv;case"linkViaPopup":case"linkViaRedirect":return av;case"reauthViaPopup":case"reauthViaRedirect":return ov;default:xt(this.auth,"internal-error")}}resolve(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=new Qr(2e3,1e4);class Rs extends Hu{constructor(e,t,s,i,c){super(e,t,i,c),this.provider=s,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const e=qa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cv.get())};e()}}Rs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv="pendingRedirect",Ni=new Map;class lv extends Hu{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ni.get(this.auth._key());if(!e){try{const s=await uv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ni.set(this.auth._key(),e)}return this.bypassAuthState||Ni.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uv(n,e){const t=pv(e),s=fv(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function dv(n,e){Ni.set(n._key(),e)}function fv(n){return Ot(n._redirectPersistence)}function pv(n){return Pi(hv,n.config.apiKey,n.name)}async function gv(n,e,t=!1){if(Me(n.app))return Promise.reject(Qn(n));const s=Wa(n),i=rv(s,e),h=await new lv(s,i,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=600*1e3;class yv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_v(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!zu(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ot(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oh(e))}saveEventToCache(e){this.cachedEventUids.add(Oh(e)),this.lastProcessedEventTime=Date.now()}}function Oh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function zu({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function _v(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wv(n,e={}){return Ws(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Iv=/^https?/;async function bv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await wv(n);for(const t of e)try{if(Tv(t))return}catch{}xt(n,"unauthorized-domain")}function Tv(n){const e=ra(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!Iv.test(t))return!1;if(vv.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Ev=new Qr(3e4,6e4);function Dh(){const n=at().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Sv(n){return new Promise((e,t)=>{function s(){Dh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dh(),t(ot(n,"network-request-failed"))},timeout:Ev.get()})}if(at().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(at().gapi?.load)s();else{const i=Nw("iframefcb");return at()[i]=()=>{gapi.load?s():t(ot(n,"network-request-failed"))},Rw(`${Pw()}?onload=${i}`).catch(c=>t(c))}}).catch(e=>{throw Oi=null,e})}let Oi=null;function Av(n){return Oi=Oi||Sv(n),Oi}/**
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
 */const kv=new Qr(5e3,15e3),Cv="__/auth/iframe",Rv="emulator/auth/iframe",Pv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ov(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ba(e,Rv):`https://${n.config.authDomain}/${Cv}`,s={apiKey:e.apiKey,appName:n.name,v:ls},i=Nv.get(n.config.apiHost);i&&(s.eid=i);const c=n._getFrameworks();return c.length&&(s.fw=c.join(",")),`${t}?${Jr(s).slice(1)}`}async function Dv(n){const e=await Av(n),t=at().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:Ov(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pv,dontclear:!0},s=>new Promise(async(i,c)=>{await s.restyle({setHideOnLeave:!1});const h=ot(n,"network-request-failed"),b=at().setTimeout(()=>{c(h)},kv.get());function T(){at().clearTimeout(b),i(s)}s.ping(T).then(T,()=>{c(h)})}))}/**
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
 */const Lv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mv=500,Uv=600,xv="_blank",Fv="http://localhost";class Lh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jv(n,e,t,s=Mv,i=Uv){const c=Math.max((window.screen.availHeight-i)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let b="";const T={...Lv,width:s.toString(),height:i.toString(),top:c,left:h},E=we().toLowerCase();t&&(b=Eu(E)?xv:t),bu(E)&&(e=e||Fv,T.scrollbars="yes");const C=Object.entries(T).reduce((R,[L,O])=>`${R}${L}=${O},`,"");if(Iw(E)&&b!=="_self")return Vv(e||"",b),new Lh(null);const k=window.open(e||"",b,C);F(k,n,"popup-blocked");try{k.focus()}catch{}return new Lh(k)}function Vv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const Bv="__/auth/handler",$v="emulator/auth/handler",Hv=encodeURIComponent("fac");async function Mh(n,e,t,s,i,c){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:ls,eventId:i};if(e instanceof Du){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",uy(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[C,k]of Object.entries({}))h[C]=k}if(e instanceof Zr){const C=e.getScopes().filter(k=>k!=="");C.length>0&&(h.scopes=C.join(","))}n.tenantId&&(h.tid=n.tenantId);const b=h;for(const C of Object.keys(b))b[C]===void 0&&delete b[C];const T=await n._getAppCheckToken(),E=T?`#${Hv}=${encodeURIComponent(T)}`:"";return`${zv(n)}?${Jr(b).slice(1)}${E}`}function zv({config:n}){return n.emulator?Ba(n,$v):`https://${n.authDomain}/${Bv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="webStorageSupport";class Wv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fu,this._completeRedirectFn=gv,this._overrideRedirectResult=dv}async _openPopup(e,t,s,i){Ft(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await Mh(e,t,s,ra(),i);return jv(e,c,qa())}async _openRedirect(e,t,s,i){await this._originValidation(e);const c=await Mh(e,t,s,ra(),i);return Kw(c),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:c}=this.eventManagers[t];return i?Promise.resolve(i):(Ft(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Dv(e),s=new yv(e);return t.register("authEvent",i=>(F(i?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Bo,{type:Bo},i=>{const c=i?.[0]?.[Bo];c!==void 0&&t(!!c),xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ru()||Tu()||za()}}const Gv=Wv;var Uh="@firebase/auth",xh="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Jv(n){rs(new fn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:b}=s.options;F(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const T={apiKey:h,authDomain:b,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pu(n)},E=new kw(s,i,c,T);return Dw(E,t),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),rs(new fn("auth-internal",e=>{const t=Wa(e.getProvider("auth").getImmediate());return(s=>new qv(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),it(Uh,xh,Kv(n)),it(Uh,xh,"esm2020")}/**
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
 */const Xv=300,Yv=Zl("authIdTokenMaxAge")||Xv;let Fh=null;const Qv=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Yv)return;const i=t?.token;Fh!==i&&(Fh=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Zv(n=La()){const e=ro(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ow(n,{popupRedirectResolver:Gv,persistence:[sv,Ww,Fu]}),s=Zl("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const h=Qv(c.toString());$w(t,h,()=>h(t.currentUser)),Bw(t,b=>h(b))}}const i=Xl("auth");return i&&Lw(t,`http://${i}`),t}function eI(){return document.getElementsByTagName("head")?.[0]??document}Cw({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const c=ot("internal-error");c.customData=i,t(c)},s.type="text/javascript",s.charset="UTF-8",eI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Jv("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu="firebasestorage.googleapis.com",tI="storageBucket",nI=120*1e3,sI=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends dt{constructor(e,t,s=0){super($o(e),`Firebase Storage: ${t} (${$o(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ft.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $o(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ht;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ht||(ht={}));function $o(n){return"storage/"+n}function rI(){const n="An unknown error occurred, please check the error payload for server response.";return new ft(ht.UNKNOWN,n)}function iI(){return new ft(ht.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function oI(){return new ft(ht.CANCELED,"User canceled the upload/download.")}function aI(n){return new ft(ht.INVALID_URL,"Invalid URL '"+n+"'.")}function cI(n){return new ft(ht.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function jh(n){return new ft(ht.INVALID_ARGUMENT,n)}function Gu(){return new ft(ht.APP_DELETED,"The Firebase app was deleted.")}function hI(n){return new ft(ht.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=Be.makeFromUrl(e,t)}catch{return new Be(e,"")}if(s.path==="")return s;throw cI(e)}static makeFromUrl(e,t){let s=null;const i="([A-Za-z0-9.\\-_]+)";function c(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const h="(/(.*))?$",b=new RegExp("^gs://"+i+h,"i"),T={bucket:1,path:3};function E(H){H.path_=decodeURIComponent(H.path)}const C="v[A-Za-z0-9_]+",k=t.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",L=new RegExp(`^https?://${k}/${C}/b/${i}/o${R}`,"i"),O={bucket:1,path:3},D=t===Wu?"(?:storage.googleapis.com|storage.cloud.google.com)":t,N="([^?#]*)",V=new RegExp(`^https?://${D}/${i}/${N}`,"i"),U=[{regex:b,indices:T,postModify:c},{regex:L,indices:O,postModify:E},{regex:V,indices:{bucket:1,path:2},postModify:E}];for(let H=0;H<U.length;H++){const ie=U[H],Y=ie.regex.exec(e);if(Y){const y=Y[ie.indices.bucket];let f=Y[ie.indices.path];f||(f=""),s=new Be(y,f),ie.postModify(s);break}}if(s==null)throw aI(e);return s}}class lI{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(n,e,t){let s=1,i=null,c=null,h=!1,b=0;function T(){return b===2}let E=!1;function C(...N){E||(E=!0,e.apply(null,N))}function k(N){i=setTimeout(()=>{i=null,n(L,T())},N)}function R(){c&&clearTimeout(c)}function L(N,...V){if(E){R();return}if(N){R(),C.call(null,N,...V);return}if(T()||h){R(),C.call(null,N,...V);return}s<64&&(s*=2);let U;b===1?(b=2,U=0):U=(s+Math.random())*1e3,k(U)}let O=!1;function D(N){O||(O=!0,R(),!E&&(i!==null?(N||(b=2),clearTimeout(i),k(0)):N||(b=1)))}return k(0),c=setTimeout(()=>{h=!0,D(!0)},t),D}function dI(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(n){return n!==void 0}function Vh(n,e,t,s){if(s<e)throw jh(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw jh(`Invalid value for '${n}'. Expected ${t} or less.`)}function pI(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const i=e(s)+"="+e(n[s]);t=t+i+"&"}return t=t.slice(0,-1),t}var Zi;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Zi||(Zi={}));/**
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
 */function gI(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,c=e.indexOf(n)!==-1;return t||i||c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,t,s,i,c,h,b,T,E,C,k,R=!0,L=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=i,this.successCodes_=c,this.additionalRetryCodes_=h,this.callback_=b,this.errorCallback_=T,this.timeout_=E,this.progressCallback_=C,this.connectionFactory_=k,this.retry=R,this.isUsingEmulator=L,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,D)=>{this.resolve_=O,this.reject_=D,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new bi(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const h=b=>{const T=b.loaded,E=b.lengthComputable?b.total:-1;this.progressCallback_!==null&&this.progressCallback_(T,E)};this.progressCallback_!==null&&c.addUploadProgressListener(h),c.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(h),this.pendingConnection_=null;const b=c.getErrorCode()===Zi.NO_ERROR,T=c.getStatus();if(!b||gI(T,this.additionalRetryCodes_)&&this.retry){const C=c.getErrorCode()===Zi.ABORT;s(!1,new bi(!1,null,C));return}const E=this.successCodes_.indexOf(T)!==-1;s(!0,new bi(E,c))})},t=(s,i)=>{const c=this.resolve_,h=this.reject_,b=i.connection;if(i.wasSuccessCode)try{const T=this.callback_(b,b.getResponse());fI(T)?c(T):c()}catch(T){h(T)}else if(b!==null){const T=rI();T.serverResponse=b.getErrorText(),this.errorCallback_?h(this.errorCallback_(b,T)):h(T)}else if(i.canceled){const T=this.appDelete_?Gu():oI();h(T)}else{const T=iI();h(T)}};this.canceled_?t(!1,new bi(!1,null,!0)):this.backoffId_=uI(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&dI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bi{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function yI(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function _I(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function wI(n,e){e&&(n["X-Firebase-GMPID"]=e)}function vI(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function II(n,e,t,s,i,c,h=!0,b=!1){const T=pI(n.urlParams),E=n.url+T,C=Object.assign({},n.headers);return wI(C,e),yI(C,t),_I(C,c),vI(C,s),new mI(E,n.method,C,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,h,b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function TI(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class eo{constructor(e,t){this._service=e,t instanceof Be?this._location=t:this._location=Be.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new eo(e,t)}get root(){const e=new Be(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return TI(this._location.path)}get storage(){return this._service}get parent(){const e=bI(this._location.path);if(e===null)return null;const t=new Be(this._location.bucket,e);return new eo(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw hI(e)}}function Bh(n,e){const t=e?.[tI];return t==null?null:Be.makeFromBucketSpec(t,n)}function EI(n,e,t,s={}){n.host=`${e}:${t}`;const i=zs(e);i&&(Pa(`https://${n.host}/b`),Na("Storage",!0)),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:c}=s;c&&(n._overrideAuthToken=typeof c=="string"?c:eu(c,n.app.options.projectId))}class SI{constructor(e,t,s,i,c,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=i,this._firebaseVersion=c,this._isUsingEmulator=h,this._bucket=null,this._host=Wu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=nI,this._maxUploadRetryTime=sI,this._requests=new Set,i!=null?this._bucket=Be.makeFromBucketSpec(i,this._host):this._bucket=Bh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Be.makeFromBucketSpec(this._url,e):this._bucket=Bh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new eo(this,e)}_makeRequest(e,t,s,i,c=!0){if(this._deleted)return new lI(Gu());{const h=II(e,this._appId,s,i,t,this._firebaseVersion,c,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,i).getPromise()}}const $h="@firebase/storage",Hh="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="storage";function AI(n=La(),e){n=hs(n);const s=ro(n,qu).getImmediate({identifier:e}),i=Yl("storage");return i&&kI(s,...i),s}function kI(n,e,t,s={}){EI(n,e,t,s)}function CI(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new SI(t,s,i,e,ls)}function RI(){rs(new fn(qu,CI,"PUBLIC").setMultipleInstances(!0)),it($h,Hh,""),it($h,Hh,"esm2020")}RI();const PI={apiKey:"AIzaSyC0qVQm59S1_OFJcYLr2ILyGB9m-SoxHro",authDomain:"holysmokas-4ef36.firebaseapp.com",projectId:"holysmokas-4ef36",storageBucket:"holysmokas-4ef36.firebasestorage.app",messagingSenderId:"236391401471",appId:"1:236391401471:web:16780dc40257205caf09ca",measurementId:"G-LRKVZGKNLD"},Ja=su(PI);Q_(Ja);Zv(Ja);AI(Ja);const Ku="production",Ju={development:{API_BASE_URL:"http://localhost:3001",GOOGLE_SHEETS_URL:"https://script.google.com/macros/s/AKfycbzJOYtbHJRuIgQTT7BVhmzGvRaJ1TMBd-VDoe_DUk_Rbnyr9EBiB5W9Xutir8r8LcgUTg/exec",SITE_URL:"http://localhost:5173"},production:{API_BASE_URL:"http://34.136.122.71:3001",GOOGLE_SHEETS_URL:"https://script.google.com/macros/s/AKfycbzJOYtbHJRuIgQTT7BVhmzGvRaJ1TMBd-VDoe_DUk_Rbnyr9EBiB5W9Xutir8r8LcgUTg/exec",SITE_URL:"https://holysmokas.com"}},Vn=Ju[Ku].API_BASE_URL,Xu=Ju[Ku].GOOGLE_SHEETS_URL,Yu={createPaymentSession:`${Vn}/create-payment-session`,stripeWebhook:`${Vn}/stripe-webhook`,userProjects:n=>`${Vn}/user-projects/${n}`,claimProjects:`${Vn}/claim-projects`,requestModification:`${Vn}/request-modification`,checkDomain:`${Vn}/check-domain`,deploy:`${Vn}/deploy`,contactFormSubmission:Xu};function zh(n,e,t=!0){const s=document.getElementById("formModal"),i=document.getElementById("modalTitle"),c=document.getElementById("modalMessage"),h=document.getElementById("modalIcon");i.textContent=n,c.textContent=e,h.textContent=t?"✔":"✕",h.style.background=t?"var(--secondary)":"#ef4444",s.classList.add("show")}window.closeModal=function(){document.getElementById("formModal").classList.remove("show")};async function NI(n){try{const e=await fetch(Xu,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return console.log("Data sent to Google Apps Script"),!0}catch(e){return console.error("Error sending to Google Script:",e),!1}}function OI(n){let e=n.replace(/^https?:\/\//,"");return e=e.replace(/^www\./,""),e=e.split("/")[0],e=e.trim(),e}window.checkDomain=async function(){const n=document.getElementById("domainInput"),e=document.getElementById("domainResult"),t=n.value.trim();if(!t){e.innerHTML="⚠️ Please enter a domain name.",e.style.color="#f59e0b";return}e.innerHTML="🔍 Checking availability...",e.style.color="#6b7280";try{const i=await(await fetch(Yu.checkDomain,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({domain:t})})).json();if(i.available===!0){const c=i.cleanedDomain||OI(t),h=i.pricing?.initialCost||i.price||12.99,b=i.pricing?.renewalCost||i.renewalPrice||12.99;e.innerHTML=`
                <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                        <span style="font-size: 1.5rem;">✅</span>
                        <strong style="color: #065f46; font-size: 1.1rem;">${c} is available!</strong>
                    </div>
                    
                    <div style="background: white; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.75rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span style="color: #6b7280;">Initial Registration:</span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${h.toFixed(2)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: #6b7280;">Annual Renewal:</span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${b.toFixed(2)}/year</strong>
                        </div>
                    </div>
                    
                    <button 
                        type="button" 
                        class="btn btn-primary" 
                        onclick="addDomainToForm('${c}', ${h}, ${b})" 
                        style="width: 100%; margin-top: 0.5rem;">
                        Add to Form
                    </button>
                    
                    <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.75rem; margin-bottom: 0;">
                        💡 Domain will be registered after you complete your website order
                    </p>
                </div>
            `,e.style.color="#10b981",window.selectedDomain=c,window.domainPricing={initialCost:h,renewalCost:b}}else{const c=i.domain||t;e.innerHTML=`
                <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 1.5rem;">❌</span>
                        <strong style="color: #991b1b;">${c} is already taken</strong>
                    </div>
                    <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem; margin-bottom: 0;">
                        Try a different domain name or extension (.net, .org, .co)
                    </p>
                </div>
            `,e.style.color="#ef4444",window.selectedDomain=null,window.domainPricing=null}}catch(s){console.error("Domain check error:",s),e.innerHTML=`
            <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span style="font-size: 1.5rem;">⚠️</span>
                    <strong style="color: #991b1b;">Error checking domain</strong>
                </div>
                <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem; margin-bottom: 0;">
                    Please try again or contact support
                </p>
            </div>
        `,e.style.color="#ef4444"}};window.addDomainToForm=function(n,e=0,t=0){const s=document.getElementById("currentUrl");s&&(s.value=`https://${n}`,s.style.border="2px solid #10b981",setTimeout(()=>{s.style.border=""},2e3)),window.selectedDomain=n,window.domainPricing={initialCost:e,renewalCost:t};const i=document.getElementById("domainResult");i.innerHTML=`
        <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <span style="font-size: 1.5rem;">✅</span>
                <strong style="color: #065f46;">${n} added to form</strong>
            </div>
            <p style="color: #6b7280; font-size: 0.875rem; margin-bottom: 0.75rem;">
                This domain will be registered after payment
            </p>
            <button type="button" class="btn btn-secondary" onclick="removeDomainFromForm()" style="width: 100%;">
                Remove Domain
            </button>
        </div>
    `,i.style.color="#10b981",Xa()};function Qu(n){return n.includes("$499")?499:n.includes("$999")?999:n.includes("$1,999")?1999:(n.includes("Custom Quote"),0)}function Xa(){const n=document.getElementById("package"),e=document.getElementById("pricingBreakdown");if(!n||!e)return;const t=n.value,s=Qu(t),i=window.domainPricing?window.domainPricing.initialCost:0,c=s+i;s>0?(e.innerHTML=`
            <h3 style="color: #6366f1; font-size: 1.3rem; margin-bottom: 1rem; text-align: center;">
                💰 Price Breakdown
            </h3>
            
            <div style="background: white; padding: 1.5rem; border-radius: 6px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem; padding-bottom: 0.75rem; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 1rem;"><strong>Website Package:</strong></span>
                    <strong style="color: #6366f1; font-size: 1.1rem;">$${s.toFixed(2)}</strong>
                </div>
                
                ${i>0?`
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem; padding-bottom: 0.75rem; border-bottom: 1px solid #e5e7eb;">
                        <span style="color: #6b7280; font-size: 1rem;">
                            <strong>Domain Registration:</strong><br>
                            <span style="font-size: 0.875rem;">${window.selectedDomain}</span>
                        </span>
                        <strong style="color: #059669; font-size: 1.1rem;">$${i.toFixed(2)}</strong>
                    </div>
                `:""}
                
                <div style="display: flex; justify-content: space-between; padding-top: 0.75rem;">
                    <strong style="color: #065f46; font-size: 1.2rem;">Total First Year:</strong>
                    <strong style="color: #065f46; font-size: 1.4rem;">$${c.toFixed(2)}</strong>
                </div>
            </div>
            
            ${i>0?`
                <p style="color: #6b7280; font-size: 0.875rem; text-align: center; margin-top: 1rem; margin-bottom: 0;">
                    📅 Domain renewal of $${window.domainPricing.renewalCost.toFixed(2)} will be due annually
                </p>
            `:""}
            
            <p style="color: #6b7280; font-size: 0.875rem; text-align: center; margin-top: 0.75rem; margin-bottom: 0;">
                ✨ This is an estimate. Final quote will be provided after reviewing your requirements.
            </p>
        `,e.style.display="block"):t.includes("Custom Quote")?(e.innerHTML=`
            <h3 style="color: #6366f1; font-size: 1.3rem; margin-bottom: 1rem; text-align: center;">
                💼 Custom Enterprise Quote
            </h3>
            
            <div style="background: white; padding: 1.5rem; border-radius: 6px; text-align: center;">
                <p style="color: #6b7280; margin-bottom: 1rem;">
                    We'll provide a detailed custom quote based on your specific requirements and features.
                </p>
                ${i>0?`
                    <div style="padding-top: 1rem; border-top: 1px solid #e5e7eb;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="color: #6b7280;">
                                <strong>Domain Registration:</strong><br>
                                <span style="font-size: 0.875rem;">${window.selectedDomain}</span>
                            </span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${i.toFixed(2)}</strong>
                        </div>
                    </div>
                `:""}
            </div>
        `,e.style.display="block"):e.style.display="none"}window.removeDomainFromForm=function(){const n=document.getElementById("currentUrl");n&&(n.value=""),window.selectedDomain=null,window.domainPricing=null;const e=document.getElementById("domainInput");e&&(e.value="");const t=document.getElementById("domainResult");t&&(t.innerHTML=""),Xa()};window.handleContactSubmit=async function(n){n.preventDefault();const e=n.target,t=e.querySelector("#name")?.value.trim()||"",s=e.querySelector("#email")?.value.trim()||"",i=e.querySelector("#businessName")?.value.trim()||"",c=e.querySelector("#phone")?.value.trim()||"",h=e.querySelector("#package")?.value.trim()||"",b=e.querySelector("#timeline")?.value.trim()||"",T=e.querySelector("#currentUrl")?.value.trim()||"",E=e.querySelector("#referenceWebsite")?.value.trim()||"",C=e.querySelector("#mainGoal")?.value.trim()||"",k=e.querySelector("#mustHaveFeatures")?.value.trim()||"",R=Qu(h),L=window.domainPricing?window.domainPricing.initialCost:0,O=R+L;if(R===0){zh("Please Select a Package","Please select a website package (Starter, Business, or Small Shop) before submitting.",!1);return}const D={name:t,email:s,businessName:i,phone:c,package:h,packagePrice:R,timeline:b,currentUrl:T,referenceWebsite:E,mainGoal:C,mustHaveFeatures:k,selectedDomain:window.selectedDomain||"N/A",domainPricing:window.domainPricing?{initialCost:window.domainPricing.initialCost,renewalCost:window.domainPricing.renewalCost}:null,totalCost:O,timestamp:new Date().toISOString(),status:"pending_payment"},N=document.getElementById("submitBtn"),V=N.textContent;N.textContent="Creating Payment Session...",N.disabled=!0;try{const U=await(await fetch(Yu.createPaymentSession,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(D)})).json();if(U.success&&U.sessionUrl)NI(D).catch(H=>{console.warn("⚠️ Google Script submission failed, but proceeding to payment:",H)}),window.location.href=U.sessionUrl;else throw new Error(U.error||"Failed to create payment session")}catch(j){console.error("Error creating payment session:",j),zh("Error","There was an error processing your request. Please try again or contact us at (415) 691-7085.",!1),N.textContent=V,N.disabled=!1}};document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("package");n&&n.addEventListener("change",Xa)});
