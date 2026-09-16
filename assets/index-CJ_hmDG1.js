(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function jl(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Ee={},jr=[],Rt=()=>{},Gy=()=>!1,ca=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ql=t=>t.startsWith("onUpdate:"),Be=Object.assign,Hl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Qy=Object.prototype.hasOwnProperty,ce=(t,e)=>Qy.call(t,e),G=Array.isArray,qr=t=>la(t)==="[object Map]",up=t=>la(t)==="[object Set]",ee=t=>typeof t=="function",Ue=t=>typeof t=="string",Tr=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",hp=t=>(Re(t)||ee(t))&&ee(t.then)&&ee(t.catch),dp=Object.prototype.toString,la=t=>dp.call(t),Yy=t=>la(t).slice(8,-1),fp=t=>la(t)==="[object Object]",zl=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bs=jl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ua=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Jy=/-(\w)/g,ns=ua(t=>t.replace(Jy,(e,n)=>n?n.toUpperCase():"")),Xy=/\B([A-Z])/g,Ar=ua(t=>t.replace(Xy,"-$1").toLowerCase()),pp=ua(t=>t.charAt(0).toUpperCase()+t.slice(1)),fc=ua(t=>t?`on${pp(t)}`:""),Fn=(t,e)=>!Object.is(t,e),Io=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},mp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Wc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ih;const gp=()=>Ih||(Ih=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _s(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ue(r)?nv(r):_s(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ue(t)||Re(t))return t}const Zy=/;(?![^(]*\))/g,ev=/:([^]+)/,tv=/\/\*[^]*?\*\//g;function nv(t){const e={};return t.replace(tv,"").split(Zy).forEach(n=>{if(n){const r=n.split(ev);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function be(t){let e="";if(Ue(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const r=be(t[n]);r&&(e+=r+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const rv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sv=jl(rv);function _p(t){return!!t||t===""}const ge=t=>Ue(t)?t:t==null?"":G(t)||Re(t)&&(t.toString===dp||!ee(t.toString))?JSON.stringify(t,yp,2):String(t),yp=(t,e)=>e&&e.__v_isRef?yp(t,e.value):qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[pc(r,i)+" =>"]=s,n),{})}:up(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>pc(n))}:Tr(e)?pc(e):Re(e)&&!G(e)&&!fp(e)?String(e):e,pc=(t,e="")=>{var n;return Tr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Et;class vp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Et,!e&&Et&&(this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){Et=this}off(){Et=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function iv(t){return new vp(t)}function ov(t,e=Et){e&&e.active&&e.effects.push(t)}function av(){return Et}function cv(t){Et&&Et.cleanups.push(t)}let dr;class Wl{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,ov(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,qn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(lv(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Hn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Dn,n=dr;try{return Dn=!0,dr=this,this._runnings++,Th(this),this.fn()}finally{Ah(this),this._runnings--,dr=n,Dn=e}}stop(){this.active&&(Th(this),Ah(this),this.onStop&&this.onStop(),this.active=!1)}}function lv(t){return t.value}function Th(t){t._trackId++,t._depsLength=0}function Ah(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Ep(t.deps[e],t);t.deps.length=t._depsLength}}function Ep(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Dn=!0,Kc=0;const wp=[];function qn(){wp.push(Dn),Dn=!1}function Hn(){const t=wp.pop();Dn=t===void 0?!0:t}function Kl(){Kc++}function Gl(){for(Kc--;!Kc&&Gc.length;)Gc.shift()()}function Ip(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Ep(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Gc=[];function Tp(t,e,n){Kl();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Gc.push(r.scheduler)))}Gl()}const Ap=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Lo=new WeakMap,fr=Symbol(""),Qc=Symbol("");function gt(t,e,n){if(Dn&&dr){let r=Lo.get(t);r||Lo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ap(()=>r.delete(n))),Ip(dr,s)}}function ln(t,e,n,r,s,i){const o=Lo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Tr(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?zl(n)&&a.push(o.get("length")):(a.push(o.get(fr)),qr(t)&&a.push(o.get(Qc)));break;case"delete":G(t)||(a.push(o.get(fr)),qr(t)&&a.push(o.get(Qc)));break;case"set":qr(t)&&a.push(o.get(fr));break}Kl();for(const c of a)c&&Tp(c,4);Gl()}function uv(t,e){const n=Lo.get(t);return n&&n.get(e)}const hv=jl("__proto__,__v_isRef,__isVue"),bp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tr)),bh=dv();function dv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=le(this);for(let i=0,o=this.length;i<o;i++)gt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(le)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qn(),Kl();const r=le(this)[e].apply(this,n);return Gl(),Hn(),r}}),t}function fv(t){Tr(t)||(t=String(t));const e=le(this);return gt(e,"has",t),e.hasOwnProperty(t)}class Rp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Rv:kp:i?Pp:Cp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=G(e);if(!s){if(o&&ce(bh,n))return Reflect.get(bh,n,r);if(n==="hasOwnProperty")return fv}const a=Reflect.get(e,n,r);return(Tr(n)?bp.has(n):hv(n))||(s||gt(e,"get",n),i)?a:ut(a)?o&&zl(n)?a:a.value:Re(a)?s?Dp(a):ys(a):a}}class Sp extends Rp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=ti(i);if(!Fo(r)&&!ti(r)&&(i=le(i),r=le(r)),!G(e)&&ut(i)&&!ut(r))return c?!1:(i.value=r,!0)}const o=G(e)&&zl(n)?Number(n)<e.length:ce(e,n),a=Reflect.set(e,n,r,s);return e===le(s)&&(o?Fn(r,i)&&ln(e,"set",n,r):ln(e,"add",n,r)),a}deleteProperty(e,n){const r=ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ln(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Tr(n)||!bp.has(n))&&gt(e,"has",n),r}ownKeys(e){return gt(e,"iterate",G(e)?"length":fr),Reflect.ownKeys(e)}}class pv extends Rp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const mv=new Sp,gv=new pv,_v=new Sp(!0);const Ql=t=>t,ha=t=>Reflect.getPrototypeOf(t);function ro(t,e,n=!1,r=!1){t=t.__v_raw;const s=le(t),i=le(e);n||(Fn(e,i)&&gt(s,"get",e),gt(s,"get",i));const{has:o}=ha(s),a=r?Ql:n?Xl:ni;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function so(t,e=!1){const n=this.__v_raw,r=le(n),s=le(t);return e||(Fn(t,s)&&gt(r,"has",t),gt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function io(t,e=!1){return t=t.__v_raw,!e&&gt(le(t),"iterate",fr),Reflect.get(t,"size",t)}function Rh(t){t=le(t);const e=le(this);return ha(e).has.call(e,t)||(e.add(t),ln(e,"add",t,t)),this}function Sh(t,e){e=le(e);const n=le(this),{has:r,get:s}=ha(n);let i=r.call(n,t);i||(t=le(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Fn(e,o)&&ln(n,"set",t,e):ln(n,"add",t,e),this}function Ch(t){const e=le(this),{has:n,get:r}=ha(e);let s=n.call(e,t);s||(t=le(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ln(e,"delete",t,void 0),i}function Ph(){const t=le(this),e=t.size!==0,n=t.clear();return e&&ln(t,"clear",void 0,void 0),n}function oo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=le(o),c=e?Ql:t?Xl:ni;return!t&&gt(a,"iterate",fr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function ao(t,e,n){return function(...r){const s=this.__v_raw,i=le(s),o=qr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Ql:e?Xl:ni;return!e&&gt(i,"iterate",c?Qc:fr),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function wn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function yv(){const t={get(i){return ro(this,i)},get size(){return io(this)},has:so,add:Rh,set:Sh,delete:Ch,clear:Ph,forEach:oo(!1,!1)},e={get(i){return ro(this,i,!1,!0)},get size(){return io(this)},has:so,add:Rh,set:Sh,delete:Ch,clear:Ph,forEach:oo(!1,!0)},n={get(i){return ro(this,i,!0)},get size(){return io(this,!0)},has(i){return so.call(this,i,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:oo(!0,!1)},r={get(i){return ro(this,i,!0,!0)},get size(){return io(this,!0)},has(i){return so.call(this,i,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:oo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ao(i,!1,!1),n[i]=ao(i,!0,!1),e[i]=ao(i,!1,!0),r[i]=ao(i,!0,!0)}),[t,n,e,r]}const[vv,Ev,wv,Iv]=yv();function Yl(t,e){const n=e?t?Iv:wv:t?Ev:vv;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ce(n,s)&&s in r?n:r,s,i)}const Tv={get:Yl(!1,!1)},Av={get:Yl(!1,!0)},bv={get:Yl(!0,!1)};const Cp=new WeakMap,Pp=new WeakMap,kp=new WeakMap,Rv=new WeakMap;function Sv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cv(t){return t.__v_skip||!Object.isExtensible(t)?0:Sv(Yy(t))}function ys(t){return ti(t)?t:Jl(t,!1,mv,Tv,Cp)}function Pv(t){return Jl(t,!1,_v,Av,Pp)}function Dp(t){return Jl(t,!0,gv,bv,kp)}function Jl(t,e,n,r,s){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Cv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function js(t){return ti(t)?js(t.__v_raw):!!(t&&t.__v_isReactive)}function ti(t){return!!(t&&t.__v_isReadonly)}function Fo(t){return!!(t&&t.__v_isShallow)}function Np(t){return t?!!t.__v_raw:!1}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function kv(t){return Object.isExtensible(t)&&mp(t,"__v_skip",!0),t}const ni=t=>Re(t)?ys(t):t,Xl=t=>Re(t)?Dp(t):t;class Op{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Wl(()=>e(this._value),()=>To(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=le(this);return(!e._cacheable||e.effect.dirty)&&Fn(e._value,e._value=e.effect.run())&&To(e,4),Vp(e),e.effect._dirtyLevel>=2&&To(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Dv(t,e,n=!1){let r,s;const i=ee(t);return i?(r=t,s=Rt):(r=t.get,s=t.set),new Op(r,s,i||!s,n)}function Vp(t){var e;Dn&&dr&&(t=le(t),Ip(dr,(e=t.dep)!=null?e:t.dep=Ap(()=>t.dep=void 0,t instanceof Op?t:void 0)))}function To(t,e=4,n){t=le(t);const r=t.dep;r&&Tp(r,e)}function ut(t){return!!(t&&t.__v_isRef===!0)}function te(t){return Mp(t,!1)}function Hr(t){return Mp(t,!0)}function Mp(t,e){return ut(t)?t:new Nv(t,e)}class Nv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:ni(e)}get value(){return Vp(this),this._value}set value(e){const n=this.__v_isShallow||Fo(e)||ti(e);e=n?e:le(e),Fn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ni(e),To(this,4))}}function et(t){return ut(t)?t.value:t}const Ov={get:(t,e,n)=>et(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ut(s)&&!ut(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function xp(t){return js(t)?t:new Proxy(t,Ov)}function Vv(t){const e=G(t)?new Array(t.length):{};for(const n in t)e[n]=xv(t,n);return e}class Mv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return uv(le(this._object),this._key)}}function xv(t,e,n){const r=t[e];return ut(r)?r:new Mv(t,e,n)}/**
* @vue/runtime-core v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nn(t,e,n,r){try{return r?t(...r):t()}catch(s){da(s,e,n)}}function Vt(t,e,n,r){if(ee(t)){const s=Nn(t,e,n,r);return s&&hp(s)&&s.catch(i=>{da(i,e,n)}),s}if(G(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Vt(t[i],e,n,r));return s}}function da(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){qn(),Nn(c,null,10,[t,o,a]),Hn();return}}Lv(t,n,s,r)}function Lv(t,e,n,r=!0){console.error(t)}let ri=!1,Yc=!1;const nt=[];let qt=0;const zr=[];let An=null,sr=0;const Lp=Promise.resolve();let Zl=null;function fa(t){const e=Zl||Lp;return t?e.then(this?t.bind(this):t):e}function Fv(t){let e=qt+1,n=nt.length;for(;e<n;){const r=e+n>>>1,s=nt[r],i=si(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function eu(t){(!nt.length||!nt.includes(t,ri&&t.allowRecurse?qt+1:qt))&&(t.id==null?nt.push(t):nt.splice(Fv(t.id),0,t),Fp())}function Fp(){!ri&&!Yc&&(Yc=!0,Zl=Lp.then($p))}function Uv(t){const e=nt.indexOf(t);e>qt&&nt.splice(e,1)}function $v(t){G(t)?zr.push(...t):(!An||!An.includes(t,t.allowRecurse?sr+1:sr))&&zr.push(t),Fp()}function kh(t,e,n=ri?qt+1:0){for(;n<nt.length;n++){const r=nt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;nt.splice(n,1),n--,r()}}}function Up(t){if(zr.length){const e=[...new Set(zr)].sort((n,r)=>si(n)-si(r));if(zr.length=0,An){An.push(...e);return}for(An=e,sr=0;sr<An.length;sr++)An[sr]();An=null,sr=0}}const si=t=>t.id==null?1/0:t.id,Bv=(t,e)=>{const n=si(t)-si(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function $p(t){Yc=!1,ri=!0,nt.sort(Bv);try{for(qt=0;qt<nt.length;qt++){const e=nt[qt];e&&e.active!==!1&&Nn(e,null,14)}}finally{qt=0,nt.length=0,Up(),ri=!1,Zl=null,(nt.length||zr.length)&&$p()}}function jv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ee;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ee;d&&(s=n.map(p=>Ue(p)?p.trim():p)),h&&(s=n.map(Wc))}let a,c=r[a=fc(e)]||r[a=fc(ns(e))];!c&&i&&(c=r[a=fc(Ar(e))]),c&&Vt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Vt(l,t,6,s)}}function Bp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ee(t)){const c=l=>{const u=Bp(l,e,!0);u&&(a=!0,Be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Re(t)&&r.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):Be(o,i),Re(t)&&r.set(t,o),o)}function pa(t,e){return!t||!ca(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,Ar(e))||ce(t,e))}let pt=null,ma=null;function Uo(t){const e=pt;return pt=t,ma=t&&t.type.__scopeId||null,e}function Ci(t){ma=t}function Pi(){ma=null}function qv(t,e=pt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&$h(-1);const i=Uo(e);let o;try{o=t(...s)}finally{Uo(i),r._d&&$h(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function mc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:h,data:d,setupState:p,ctx:T,inheritAttrs:E}=t,R=Uo(t);let U,K;try{if(n.shapeFlag&4){const V=s||r,B=V;U=Bt(l.call(B,V,u,h,p,d,T)),K=a}else{const V=e;U=Bt(V.length>1?V(h,{attrs:a,slots:o,emit:c}):V(h,null)),K=e.props?a:Hv(a)}}catch(V){Ks.length=0,da(V,t,1),U=se(mr)}let H=U;if(K&&E!==!1){const V=Object.keys(K),{shapeFlag:B}=H;V.length&&B&7&&(i&&V.some(ql)&&(K=zv(K,i)),H=rs(H,K,!1,!0))}return n.dirs&&(H=rs(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),U=H,Uo(R),U}const Hv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ca(n))&&((e||(e={}))[n]=t[n]);return e},zv=(t,e)=>{const n={};for(const r in t)(!ql(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Wv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Dh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!pa(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Dh(r,o,l):!0:!!o;return!1}function Dh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!pa(n,i))return!0}return!1}function Kv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Gv=Symbol.for("v-ndc"),Qv=t=>t.__isSuspense;function Yv(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):$v(t)}const Jv=Symbol.for("v-scx"),Xv=()=>Ws(Jv);function tu(t,e){return nu(t,null,e)}const co={};function Gt(t,e,n){return nu(t,e,n)}function nu(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=Ee){if(e&&i){const N=e;e=(...z)=>{N(...z),B()}}const c=rt,l=N=>r===!0?N:or(N,r===!1?1:void 0);let u,h=!1,d=!1;if(ut(t)?(u=()=>t.value,h=Fo(t)):js(t)?(u=()=>l(t),h=!0):G(t)?(d=!0,h=t.some(N=>js(N)||Fo(N)),u=()=>t.map(N=>{if(ut(N))return N.value;if(js(N))return l(N);if(ee(N))return Nn(N,c,2)})):ee(t)?e?u=()=>Nn(t,c,2):u=()=>(p&&p(),Vt(t,c,3,[T])):u=Rt,e&&r){const N=u;u=()=>or(N())}let p,T=N=>{p=H.onStop=()=>{Nn(N,c,4),p=H.onStop=void 0}},E;if(ya)if(T=Rt,e?n&&Vt(e,c,3,[u(),d?[]:void 0,T]):u(),s==="sync"){const N=Xv();E=N.__watcherHandles||(N.__watcherHandles=[])}else return Rt;let R=d?new Array(t.length).fill(co):co;const U=()=>{if(!(!H.active||!H.dirty))if(e){const N=H.run();(r||h||(d?N.some((z,ne)=>Fn(z,R[ne])):Fn(N,R)))&&(p&&p(),Vt(e,c,3,[N,R===co?void 0:d&&R[0]===co?[]:R,T]),R=N)}else H.run()};U.allowRecurse=!!e;let K;s==="sync"?K=U:s==="post"?K=()=>dt(U,c&&c.suspense):(U.pre=!0,c&&(U.id=c.uid),K=()=>eu(U));const H=new Wl(u,Rt,K),V=av(),B=()=>{H.stop(),V&&Hl(V.effects,H)};return e?n?U():R=H.run():s==="post"?dt(H.run.bind(H),c&&c.suspense):H.run(),E&&E.push(B),B}function Zv(t,e,n){const r=this.proxy,s=Ue(t)?t.includes(".")?jp(r,t):()=>r[t]:t.bind(r,r);let i;ee(e)?i=e:(i=e.handler,n=e);const o=Di(this),a=nu(s,i.bind(r),n);return o(),a}function jp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function or(t,e=1/0,n){if(e<=0||!Re(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ut(t))or(t.value,e,n);else if(G(t))for(let r=0;r<t.length;r++)or(t[r],e,n);else if(up(t)||qr(t))t.forEach(r=>{or(r,e,n)});else if(fp(t))for(const r in t)or(t[r],e,n);return t}function qs(t,e){if(pt===null)return t;const n=va(pt)||pt.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=Ee]=e[s];i&&(ee(i)&&(i={mounted:i,updated:i}),i.deep&&or(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Zn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(qn(),Vt(c,n,8,[t.el,a,t,e]),Hn())}}/*! #__NO_SIDE_EFFECTS__ */function e0(t,e){return ee(t)?Be({name:t.name},e,{setup:t}):t}const Ao=t=>!!t.type.__asyncLoader,qp=t=>t.type.__isKeepAlive;function t0(t,e){Hp(t,"a",e)}function n0(t,e){Hp(t,"da",e)}function Hp(t,e,n=rt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ga(e,r,n),n){let s=n.parent;for(;s&&s.parent;)qp(s.parent.vnode)&&r0(r,e,n,s),s=s.parent}}function r0(t,e,n,r){const s=ga(e,t,r,!0);ki(()=>{Hl(r[e],s)},n)}function ga(t,e,n=rt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;qn();const a=Di(n),c=Vt(e,n,t,o);return a(),Hn(),c});return r?s.unshift(i):s.push(i),i}}const gn=t=>(e,n=rt)=>(!ya||t==="sp")&&ga(t,(...r)=>e(...r),n),s0=gn("bm"),zp=gn("m"),i0=gn("bu"),o0=gn("u"),a0=gn("bum"),ki=gn("um"),c0=gn("sp"),l0=gn("rtg"),u0=gn("rtc");function h0(t,e=rt){ga("ec",t,e)}function ar(t,e,n,r){let s;const i=n;if(G(t)||Ue(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(Re(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i)}}else s=[];return s}const Jc=t=>t?cm(t)?va(t)||t.proxy:Jc(t.parent):null,Hs=Be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Jc(t.parent),$root:t=>Jc(t.root),$emit:t=>t.emit,$options:t=>ru(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,eu(t.update)}),$nextTick:t=>t.n||(t.n=fa.bind(t.proxy)),$watch:t=>Zv.bind(t)}),gc=(t,e)=>t!==Ee&&!t.__isScriptSetup&&ce(t,e),d0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(gc(r,e))return o[e]=1,r[e];if(s!==Ee&&ce(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ce(l,e))return o[e]=3,i[e];if(n!==Ee&&ce(n,e))return o[e]=4,n[e];Xc&&(o[e]=0)}}const u=Hs[e];let h,d;if(u)return e==="$attrs"&&gt(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ee&&ce(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ce(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return gc(s,e)?(s[e]=n,!0):r!==Ee&&ce(r,e)?(r[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ee&&ce(t,o)||gc(e,o)||(a=i[0])&&ce(a,o)||ce(r,o)||ce(Hs,o)||ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Nh(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xc=!0;function f0(t){const e=ru(t),n=t.proxy,r=t.ctx;Xc=!1,e.beforeCreate&&Oh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:T,activated:E,deactivated:R,beforeDestroy:U,beforeUnmount:K,destroyed:H,unmounted:V,render:B,renderTracked:N,renderTriggered:z,errorCaptured:ne,serverPrefetch:_e,expose:he,inheritAttrs:Ce,components:Je,directives:_t,filters:Dr}=e;if(l&&p0(l,r,null),o)for(const de in o){const fe=o[de];ee(fe)&&(r[de]=fe.bind(n))}if(s){const de=s.call(n,n);Re(de)&&(t.data=ys(de))}if(Xc=!0,i)for(const de in i){const fe=i[de],Pt=ee(fe)?fe.bind(n,n):ee(fe.get)?fe.get.bind(n,n):Rt,Or=!ee(fe)&&ee(fe.set)?fe.set.bind(n):Rt,ht=Ae({get:Pt,set:Or});Object.defineProperty(r,de,{enumerable:!0,configurable:!0,get:()=>ht.value,set:At=>ht.value=At})}if(a)for(const de in a)Wp(a[de],r,n,de);if(c){const de=ee(c)?c.call(n):c;Reflect.ownKeys(de).forEach(fe=>{Gp(fe,de[fe])})}u&&Oh(u,t,"c");function Fe(de,fe){G(fe)?fe.forEach(Pt=>de(Pt.bind(n))):fe&&de(fe.bind(n))}if(Fe(s0,h),Fe(zp,d),Fe(i0,p),Fe(o0,T),Fe(t0,E),Fe(n0,R),Fe(h0,ne),Fe(u0,N),Fe(l0,z),Fe(a0,K),Fe(ki,V),Fe(c0,_e),G(he))if(he.length){const de=t.exposed||(t.exposed={});he.forEach(fe=>{Object.defineProperty(de,fe,{get:()=>n[fe],set:Pt=>n[fe]=Pt})})}else t.exposed||(t.exposed={});B&&t.render===Rt&&(t.render=B),Ce!=null&&(t.inheritAttrs=Ce),Je&&(t.components=Je),_t&&(t.directives=_t)}function p0(t,e,n=Rt){G(t)&&(t=Zc(t));for(const r in t){const s=t[r];let i;Re(s)?"default"in s?i=Ws(s.from||r,s.default,!0):i=Ws(s.from||r):i=Ws(s),ut(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Oh(t,e,n){Vt(G(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Wp(t,e,n,r){const s=r.includes(".")?jp(n,r):()=>n[r];if(Ue(t)){const i=e[t];ee(i)&&Gt(s,i)}else if(ee(t))Gt(s,t.bind(n));else if(Re(t))if(G(t))t.forEach(i=>Wp(i,e,n,r));else{const i=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(i)&&Gt(s,i,t)}}function ru(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>$o(c,l,o,!0)),$o(c,e,o)),Re(e)&&i.set(e,c),c}function $o(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&$o(t,i,n,!0),s&&s.forEach(o=>$o(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=m0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const m0={data:Vh,props:Mh,emits:Mh,methods:Os,computed:Os,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:Os,directives:Os,watch:_0,provide:Vh,inject:g0};function Vh(t,e){return e?t?function(){return Be(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function g0(t,e){return Os(Zc(t),Zc(e))}function Zc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ct(t,e){return t?[...new Set([].concat(t,e))]:e}function Os(t,e){return t?Be(Object.create(null),t,e):e}function Mh(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:Be(Object.create(null),Nh(t),Nh(e??{})):e}function _0(t,e){if(!t)return e;if(!e)return t;const n=Be(Object.create(null),t);for(const r in e)n[r]=ct(t[r],e[r]);return n}function Kp(){return{app:null,config:{isNativeTag:Gy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let y0=0;function v0(t,e){return function(r,s=null){ee(r)||(r=Be({},r)),s!=null&&!Re(s)&&(s=null);const i=Kp(),o=new WeakSet;let a=!1;const c=i.app={_uid:y0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:H0,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ee(l.install)?(o.add(l),l.install(c,...u)):ee(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=se(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,va(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=zs;zs=c;try{return l()}finally{zs=u}}};return c}}let zs=null;function Gp(t,e){if(rt){let n=rt.provides;const r=rt.parent&&rt.parent.provides;r===n&&(n=rt.provides=Object.create(r)),n[t]=e}}function Ws(t,e,n=!1){const r=rt||pt;if(r||zs){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:zs._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ee(e)?e.call(r&&r.proxy):e}}const Qp={},Yp=()=>Object.create(Qp),Jp=t=>Object.getPrototypeOf(t)===Qp;function E0(t,e,n,r=!1){const s={},i=Yp();t.propsDefaults=Object.create(null),Xp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Pv(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function w0(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=le(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(pa(t.emitsOptions,d))continue;const p=e[d];if(c)if(ce(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const T=ns(d);s[T]=el(c,a,T,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{Xp(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ce(e,h)&&((u=Ar(h))===h||!ce(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=el(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ce(e,h))&&(delete i[h],l=!0)}l&&ln(t.attrs,"set","")}function Xp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Bs(c))continue;const l=e[c];let u;s&&ce(s,u=ns(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:pa(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=le(n),l=a||Ee;for(let u=0;u<i.length;u++){const h=i[u];n[h]=el(s,c,h,l[h],t,!ce(l,h))}}return o}function el(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ee(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=Di(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ar(n))&&(r=!0))}return r}function Zp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ee(t)){const u=h=>{c=!0;const[d,p]=Zp(h,e,!0);Be(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Re(t)&&r.set(t,jr),jr;if(G(i))for(let u=0;u<i.length;u++){const h=ns(i[u]);xh(h)&&(o[h]=Ee)}else if(i)for(const u in i){const h=ns(u);if(xh(h)){const d=i[u],p=o[h]=G(d)||ee(d)?{type:d}:Be({},d);if(p){const T=Uh(Boolean,p.type),E=Uh(String,p.type);p[0]=T>-1,p[1]=E<0||T<E,(T>-1||ce(p,"default"))&&a.push(h)}}}const l=[o,a];return Re(t)&&r.set(t,l),l}function xh(t){return t[0]!=="$"&&!Bs(t)}function Lh(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Fh(t,e){return Lh(t)===Lh(e)}function Uh(t,e){return G(e)?e.findIndex(n=>Fh(n,t)):ee(e)&&Fh(e,t)?0:-1}const em=t=>t[0]==="_"||t==="$stable",su=t=>G(t)?t.map(Bt):[Bt(t)],I0=(t,e,n)=>{if(e._n)return e;const r=qv((...s)=>su(e(...s)),n);return r._c=!1,r},tm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(em(s))continue;const i=t[s];if(ee(i))e[s]=I0(s,i,r);else if(i!=null){const o=su(i);e[s]=()=>o}}},nm=(t,e)=>{const n=su(e);t.slots.default=()=>n},T0=(t,e)=>{const n=t.slots=Yp();if(t.vnode.shapeFlag&32){const r=e._;r?(Be(n,e),mp(n,"_",r,!0)):tm(e,n)}else e&&nm(t,e)},A0=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ee;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Be(s,e),!n&&a===1&&delete s._):(i=!e.$stable,tm(e,s)),o=e}else e&&(nm(t,e),o={default:1});if(i)for(const a in s)!em(a)&&o[a]==null&&delete s[a]};function tl(t,e,n,r,s=!1){if(G(t)){t.forEach((d,p)=>tl(d,e&&(G(e)?e[p]:e),n,r,s));return}if(Ao(r)&&!s)return;const i=r.shapeFlag&4?va(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ee?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ue(l)?(u[l]=null,ce(h,l)&&(h[l]=null)):ut(l)&&(l.value=null)),ee(c))Nn(c,a,12,[o,u]);else{const d=Ue(c),p=ut(c);if(d||p){const T=()=>{if(t.f){const E=d?ce(h,c)?h[c]:u[c]:c.value;s?G(E)&&Hl(E,i):G(E)?E.includes(i)||E.push(i):d?(u[c]=[i],ce(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ce(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(T.id=-1,dt(T,n)):T()}}}const dt=Yv;function b0(t){return R0(t)}function R0(t,e){const n=gp();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Rt,insertStaticContent:T}=t,E=(f,m,I,S=null,b=null,P=null,_=void 0,y=null,v=!!m.dynamicChildren)=>{if(f===m)return;f&&!Ps(f,m)&&(S=Xn(f),At(f,b,P,!0),f=null),m.patchFlag===-2&&(v=!1,m.dynamicChildren=null);const{type:w,ref:k,shapeFlag:O}=m;switch(w){case _a:R(f,m,I,S);break;case mr:U(f,m,I,S);break;case bo:f==null&&K(m,I,S,_);break;case xe:Je(f,m,I,S,b,P,_,y,v);break;default:O&1?B(f,m,I,S,b,P,_,y,v):O&6?_t(f,m,I,S,b,P,_,y,v):(O&64||O&128)&&w.process(f,m,I,S,b,P,_,y,v,Ft)}k!=null&&b&&tl(k,f&&f.ref,P,m||f,!m)},R=(f,m,I,S)=>{if(f==null)r(m.el=a(m.children),I,S);else{const b=m.el=f.el;m.children!==f.children&&l(b,m.children)}},U=(f,m,I,S)=>{f==null?r(m.el=c(m.children||""),I,S):m.el=f.el},K=(f,m,I,S)=>{[f.el,f.anchor]=T(f.children,m,I,S,f.el,f.anchor)},H=({el:f,anchor:m},I,S)=>{let b;for(;f&&f!==m;)b=d(f),r(f,I,S),f=b;r(m,I,S)},V=({el:f,anchor:m})=>{let I;for(;f&&f!==m;)I=d(f),s(f),f=I;s(m)},B=(f,m,I,S,b,P,_,y,v)=>{m.type==="svg"?_="svg":m.type==="math"&&(_="mathml"),f==null?N(m,I,S,b,P,_,y,v):_e(f,m,b,P,_,y,v)},N=(f,m,I,S,b,P,_,y)=>{let v,w;const{props:k,shapeFlag:O,transition:M,dirs:j}=f;if(v=f.el=o(f.type,P,k&&k.is,k),O&8?u(v,f.children):O&16&&ne(f.children,v,null,S,b,_c(f,P),_,y),j&&Zn(f,null,S,"created"),z(v,f,f.scopeId,_,S),k){for(const re in k)re!=="value"&&!Bs(re)&&i(v,re,null,k[re],P,f.children,S,b,kt);"value"in k&&i(v,"value",null,k.value,P),(w=k.onVnodeBeforeMount)&&$t(w,S,f)}j&&Zn(f,null,S,"beforeMount");const Z=S0(b,M);Z&&M.beforeEnter(v),r(v,m,I),((w=k&&k.onVnodeMounted)||Z||j)&&dt(()=>{w&&$t(w,S,f),Z&&M.enter(v),j&&Zn(f,null,S,"mounted")},b)},z=(f,m,I,S,b)=>{if(I&&p(f,I),S)for(let P=0;P<S.length;P++)p(f,S[P]);if(b){let P=b.subTree;if(m===P){const _=b.vnode;z(f,_,_.scopeId,_.slotScopeIds,b.parent)}}},ne=(f,m,I,S,b,P,_,y,v=0)=>{for(let w=v;w<f.length;w++){const k=f[w]=y?bn(f[w]):Bt(f[w]);E(null,k,m,I,S,b,P,_,y)}},_e=(f,m,I,S,b,P,_)=>{const y=m.el=f.el;let{patchFlag:v,dynamicChildren:w,dirs:k}=m;v|=f.patchFlag&16;const O=f.props||Ee,M=m.props||Ee;let j;if(I&&er(I,!1),(j=M.onVnodeBeforeUpdate)&&$t(j,I,m,f),k&&Zn(m,f,I,"beforeUpdate"),I&&er(I,!0),w?he(f.dynamicChildren,w,y,I,S,_c(m,b),P):_||fe(f,m,y,null,I,S,_c(m,b),P,!1),v>0){if(v&16)Ce(y,m,O,M,I,S,b);else if(v&2&&O.class!==M.class&&i(y,"class",null,M.class,b),v&4&&i(y,"style",O.style,M.style,b),v&8){const Z=m.dynamicProps;for(let re=0;re<Z.length;re++){const pe=Z[re],Pe=O[pe],yt=M[pe];(yt!==Pe||pe==="value")&&i(y,pe,Pe,yt,b,f.children,I,S,kt)}}v&1&&f.children!==m.children&&u(y,m.children)}else!_&&w==null&&Ce(y,m,O,M,I,S,b);((j=M.onVnodeUpdated)||k)&&dt(()=>{j&&$t(j,I,m,f),k&&Zn(m,f,I,"updated")},S)},he=(f,m,I,S,b,P,_)=>{for(let y=0;y<m.length;y++){const v=f[y],w=m[y],k=v.el&&(v.type===xe||!Ps(v,w)||v.shapeFlag&70)?h(v.el):I;E(v,w,k,null,S,b,P,_,!0)}},Ce=(f,m,I,S,b,P,_)=>{if(I!==S){if(I!==Ee)for(const y in I)!Bs(y)&&!(y in S)&&i(f,y,I[y],null,_,m.children,b,P,kt);for(const y in S){if(Bs(y))continue;const v=S[y],w=I[y];v!==w&&y!=="value"&&i(f,y,w,v,_,m.children,b,P,kt)}"value"in S&&i(f,"value",I.value,S.value,_)}},Je=(f,m,I,S,b,P,_,y,v)=>{const w=m.el=f?f.el:a(""),k=m.anchor=f?f.anchor:a("");let{patchFlag:O,dynamicChildren:M,slotScopeIds:j}=m;j&&(y=y?y.concat(j):j),f==null?(r(w,I,S),r(k,I,S),ne(m.children||[],I,k,b,P,_,y,v)):O>0&&O&64&&M&&f.dynamicChildren?(he(f.dynamicChildren,M,I,b,P,_,y),(m.key!=null||b&&m===b.subTree)&&rm(f,m,!0)):fe(f,m,I,k,b,P,_,y,v)},_t=(f,m,I,S,b,P,_,y,v)=>{m.slotScopeIds=y,f==null?m.shapeFlag&512?b.ctx.activate(m,I,S,_,v):Dr(m,I,S,b,P,_,v):Nr(f,m,v)},Dr=(f,m,I,S,b,P,_)=>{const y=f.component=x0(f,S,b);if(qp(f)&&(y.ctx.renderer=Ft),F0(y),y.asyncDep){if(b&&b.registerDep(y,Fe),!f.el){const v=y.subTree=se(mr);U(null,v,m,I)}}else Fe(y,f,m,I,b,P,_)},Nr=(f,m,I)=>{const S=m.component=f.component;if(Wv(f,m,I))if(S.asyncDep&&!S.asyncResolved){de(S,m,I);return}else S.next=m,Uv(S.update),S.effect.dirty=!0,S.update();else m.el=f.el,S.vnode=m},Fe=(f,m,I,S,b,P,_)=>{const y=()=>{if(f.isMounted){let{next:k,bu:O,u:M,parent:j,vnode:Z}=f;{const En=sm(f);if(En){k&&(k.el=Z.el,de(f,k,_)),En.asyncDep.then(()=>{f.isUnmounted||y()});return}}let re=k,pe;er(f,!1),k?(k.el=Z.el,de(f,k,_)):k=Z,O&&Io(O),(pe=k.props&&k.props.onVnodeBeforeUpdate)&&$t(pe,j,k,Z),er(f,!0);const Pe=mc(f),yt=f.subTree;f.subTree=Pe,E(yt,Pe,h(yt.el),Xn(yt),f,b,P),k.el=Pe.el,re===null&&Kv(f,Pe.el),M&&dt(M,b),(pe=k.props&&k.props.onVnodeUpdated)&&dt(()=>$t(pe,j,k,Z),b)}else{let k;const{el:O,props:M}=m,{bm:j,m:Z,parent:re}=f,pe=Ao(m);if(er(f,!1),j&&Io(j),!pe&&(k=M&&M.onVnodeBeforeMount)&&$t(k,re,m),er(f,!0),O&&vn){const Pe=()=>{f.subTree=mc(f),vn(O,f.subTree,f,b,null)};pe?m.type.__asyncLoader().then(()=>!f.isUnmounted&&Pe()):Pe()}else{const Pe=f.subTree=mc(f);E(null,Pe,I,S,f,b,P),m.el=Pe.el}if(Z&&dt(Z,b),!pe&&(k=M&&M.onVnodeMounted)){const Pe=m;dt(()=>$t(k,re,Pe),b)}(m.shapeFlag&256||re&&Ao(re.vnode)&&re.vnode.shapeFlag&256)&&f.a&&dt(f.a,b),f.isMounted=!0,m=I=S=null}},v=f.effect=new Wl(y,Rt,()=>eu(w),f.scope),w=f.update=()=>{v.dirty&&v.run()};w.id=f.uid,er(f,!0),w()},de=(f,m,I)=>{m.component=f;const S=f.vnode.props;f.vnode=m,f.next=null,w0(f,m.props,S,I),A0(f,m.children,I),qn(),kh(f),Hn()},fe=(f,m,I,S,b,P,_,y,v=!1)=>{const w=f&&f.children,k=f?f.shapeFlag:0,O=m.children,{patchFlag:M,shapeFlag:j}=m;if(M>0){if(M&128){Or(w,O,I,S,b,P,_,y,v);return}else if(M&256){Pt(w,O,I,S,b,P,_,y,v);return}}j&8?(k&16&&kt(w,b,P),O!==w&&u(I,O)):k&16?j&16?Or(w,O,I,S,b,P,_,y,v):kt(w,b,P,!0):(k&8&&u(I,""),j&16&&ne(O,I,S,b,P,_,y,v))},Pt=(f,m,I,S,b,P,_,y,v)=>{f=f||jr,m=m||jr;const w=f.length,k=m.length,O=Math.min(w,k);let M;for(M=0;M<O;M++){const j=m[M]=v?bn(m[M]):Bt(m[M]);E(f[M],j,I,null,b,P,_,y,v)}w>k?kt(f,b,P,!0,!1,O):ne(m,I,S,b,P,_,y,v,O)},Or=(f,m,I,S,b,P,_,y,v)=>{let w=0;const k=m.length;let O=f.length-1,M=k-1;for(;w<=O&&w<=M;){const j=f[w],Z=m[w]=v?bn(m[w]):Bt(m[w]);if(Ps(j,Z))E(j,Z,I,null,b,P,_,y,v);else break;w++}for(;w<=O&&w<=M;){const j=f[O],Z=m[M]=v?bn(m[M]):Bt(m[M]);if(Ps(j,Z))E(j,Z,I,null,b,P,_,y,v);else break;O--,M--}if(w>O){if(w<=M){const j=M+1,Z=j<k?m[j].el:S;for(;w<=M;)E(null,m[w]=v?bn(m[w]):Bt(m[w]),I,Z,b,P,_,y,v),w++}}else if(w>M)for(;w<=O;)At(f[w],b,P,!0),w++;else{const j=w,Z=w,re=new Map;for(w=Z;w<=M;w++){const vt=m[w]=v?bn(m[w]):Bt(m[w]);vt.key!=null&&re.set(vt.key,w)}let pe,Pe=0;const yt=M-Z+1;let En=!1,vh=0;const Cs=new Array(yt);for(w=0;w<yt;w++)Cs[w]=0;for(w=j;w<=O;w++){const vt=f[w];if(Pe>=yt){At(vt,b,P,!0);continue}let Ut;if(vt.key!=null)Ut=re.get(vt.key);else for(pe=Z;pe<=M;pe++)if(Cs[pe-Z]===0&&Ps(vt,m[pe])){Ut=pe;break}Ut===void 0?At(vt,b,P,!0):(Cs[Ut-Z]=w+1,Ut>=vh?vh=Ut:En=!0,E(vt,m[Ut],I,null,b,P,_,y,v),Pe++)}const Eh=En?C0(Cs):jr;for(pe=Eh.length-1,w=yt-1;w>=0;w--){const vt=Z+w,Ut=m[vt],wh=vt+1<k?m[vt+1].el:S;Cs[w]===0?E(null,Ut,I,wh,b,P,_,y,v):En&&(pe<0||w!==Eh[pe]?ht(Ut,I,wh,2):pe--)}}},ht=(f,m,I,S,b=null)=>{const{el:P,type:_,transition:y,children:v,shapeFlag:w}=f;if(w&6){ht(f.component.subTree,m,I,S);return}if(w&128){f.suspense.move(m,I,S);return}if(w&64){_.move(f,m,I,Ft);return}if(_===xe){r(P,m,I);for(let O=0;O<v.length;O++)ht(v[O],m,I,S);r(f.anchor,m,I);return}if(_===bo){H(f,m,I);return}if(S!==2&&w&1&&y)if(S===0)y.beforeEnter(P),r(P,m,I),dt(()=>y.enter(P),b);else{const{leave:O,delayLeave:M,afterLeave:j}=y,Z=()=>r(P,m,I),re=()=>{O(P,()=>{Z(),j&&j()})};M?M(P,Z,re):re()}else r(P,m,I)},At=(f,m,I,S=!1,b=!1)=>{const{type:P,props:_,ref:y,children:v,dynamicChildren:w,shapeFlag:k,patchFlag:O,dirs:M}=f;if(y!=null&&tl(y,null,I,f,!0),k&256){m.ctx.deactivate(f);return}const j=k&1&&M,Z=!Ao(f);let re;if(Z&&(re=_&&_.onVnodeBeforeUnmount)&&$t(re,m,f),k&6)dc(f.component,I,S);else{if(k&128){f.suspense.unmount(I,S);return}j&&Zn(f,null,m,"beforeUnmount"),k&64?f.type.remove(f,m,I,b,Ft,S):w&&(P!==xe||O>0&&O&64)?kt(w,m,I,!1,!0):(P===xe&&O&384||!b&&k&16)&&kt(v,m,I),S&&eo(f)}(Z&&(re=_&&_.onVnodeUnmounted)||j)&&dt(()=>{re&&$t(re,m,f),j&&Zn(f,null,m,"unmounted")},I)},eo=f=>{const{type:m,el:I,anchor:S,transition:b}=f;if(m===xe){hc(I,S);return}if(m===bo){V(f);return}const P=()=>{s(I),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:_,delayLeave:y}=b,v=()=>_(I,P);y?y(f.el,P,v):v()}else P()},hc=(f,m)=>{let I;for(;f!==m;)I=d(f),s(f),f=I;s(m)},dc=(f,m,I)=>{const{bum:S,scope:b,update:P,subTree:_,um:y}=f;S&&Io(S),b.stop(),P&&(P.active=!1,At(_,f,m,I)),y&&dt(y,m),dt(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},kt=(f,m,I,S=!1,b=!1,P=0)=>{for(let _=P;_<f.length;_++)At(f[_],m,I,S,b)},Xn=f=>f.shapeFlag&6?Xn(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let Ss=!1;const to=(f,m,I)=>{f==null?m._vnode&&At(m._vnode,null,null,!0):E(m._vnode||null,f,m,null,null,null,I),Ss||(Ss=!0,kh(),Up(),Ss=!1),m._vnode=f},Ft={p:E,um:At,m:ht,r:eo,mt:Dr,mc:ne,pc:fe,pbc:he,n:Xn,o:t};let no,vn;return{render:to,hydrate:no,createApp:v0(to,no)}}function _c({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function er({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function S0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function rm(t,e,n=!1){const r=t.children,s=e.children;if(G(r)&&G(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=bn(s[i]),a.el=o.el),n||rm(o,a)),a.type===_a&&(a.el=o.el)}}function C0(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function sm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:sm(e)}const P0=t=>t.__isTeleport,xe=Symbol.for("v-fgt"),_a=Symbol.for("v-txt"),mr=Symbol.for("v-cmt"),bo=Symbol.for("v-stc"),Ks=[];let Nt=null;function F(t=!1){Ks.push(Nt=t?null:[])}function k0(){Ks.pop(),Nt=Ks[Ks.length-1]||null}let ii=1;function $h(t){ii+=t}function im(t){return t.dynamicChildren=ii>0?Nt||jr:null,k0(),ii>0&&Nt&&Nt.push(t),t}function $(t,e,n,r,s,i){return im(g(t,e,n,r,s,i,!0))}function oi(t,e,n,r,s){return im(se(t,e,n,r,s,!0))}function nl(t){return t?t.__v_isVNode===!0:!1}function Ps(t,e){return t.type===e.type&&t.key===e.key}const om=({key:t})=>t??null,Ro=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||ut(t)||ee(t)?{i:pt,r:t,k:e,f:!!n}:t:null);function g(t,e=null,n=null,r=0,s=null,i=t===xe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&om(e),ref:e&&Ro(e),scopeId:ma,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:pt};return a?(iu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ue(n)?8:16),ii>0&&!o&&Nt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Nt.push(c),c}const se=D0;function D0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Gv)&&(t=mr),nl(t)){const a=rs(t,e,!0);return n&&iu(a,n),ii>0&&!i&&Nt&&(a.shapeFlag&6?Nt[Nt.indexOf(t)]=a:Nt.push(a)),a.patchFlag|=-2,a}if(j0(t)&&(t=t.__vccOpts),e){e=N0(e);let{class:a,style:c}=e;a&&!Ue(a)&&(e.class=be(a)),Re(c)&&(Np(c)&&!G(c)&&(c=Be({},c)),e.style=_s(c))}const o=Ue(t)?1:Qv(t)?128:P0(t)?64:Re(t)?4:ee(t)?2:0;return g(t,e,n,r,s,o,i,!0)}function N0(t){return t?Np(t)||Jp(t)?Be({},t):t:null}function rs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?am(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&om(l),ref:e&&e.ref?n&&i?G(i)?i.concat(Ro(e)):[i,Ro(e)]:Ro(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rs(t.ssContent),ssFallback:t.ssFallback&&rs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&(u.transition=c.clone(u)),u}function ai(t=" ",e=0){return se(_a,null,t,e)}function O0(t,e){const n=se(bo,null,t);return n.staticCount=e,n}function Me(t="",e=!1){return e?(F(),oi(mr,null,t)):se(mr,null,t)}function Bt(t){return t==null||typeof t=="boolean"?se(mr):G(t)?se(xe,null,t.slice()):typeof t=="object"?bn(t):se(_a,null,String(t))}function bn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:rs(t)}function iu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),iu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Jp(e)?e._ctx=pt:s===3&&pt&&(pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:pt},n=32):(e=String(e),r&64?(n=16,e=[ai(e)]):n=8);t.children=e,t.shapeFlag|=n}function am(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=be([e.class,r.class]));else if(s==="style")e.style=_s([e.style,r.style]);else if(ca(s)){const i=e[s],o=r[s];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function $t(t,e,n,r=null){Vt(t,e,7,[n,r])}const V0=Kp();let M0=0;function x0(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||V0,i={uid:M0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new vp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zp(r,s),emitsOptions:Bp(r,s),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:r.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=jv.bind(null,i),t.ce&&t.ce(i),i}let rt=null;const L0=()=>rt||pt;let Bo,rl;{const t=gp(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Bo=e("__VUE_INSTANCE_SETTERS__",n=>rt=n),rl=e("__VUE_SSR_SETTERS__",n=>ya=n)}const Di=t=>{const e=rt;return Bo(t),t.scope.on(),()=>{t.scope.off(),Bo(e)}},Bh=()=>{rt&&rt.scope.off(),Bo(null)};function cm(t){return t.vnode.shapeFlag&4}let ya=!1;function F0(t,e=!1){e&&rl(e);const{props:n,children:r}=t.vnode,s=cm(t);E0(t,n,s,e),T0(t,r);const i=s?U0(t,e):void 0;return e&&rl(!1),i}function U0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,d0);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?B0(t):null,i=Di(t);qn();const o=Nn(r,t,0,[t.props,s]);if(Hn(),i(),hp(o)){if(o.then(Bh,Bh),e)return o.then(a=>{jh(t,a,e)}).catch(a=>{da(a,t,0)});t.asyncDep=o}else jh(t,o,e)}else lm(t,e)}function jh(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=xp(e)),lm(t,n)}let qh;function lm(t,e,n){const r=t.type;if(!t.render){if(!e&&qh&&!r.render){const s=r.template||ru(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Be(Be({isCustomElement:i,delimiters:a},o),c);r.render=qh(s,l)}}t.render=r.render||Rt}{const s=Di(t);qn();try{f0(t)}finally{Hn(),s()}}}const $0={get(t,e){return gt(t,"get",""),t[e]}};function B0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,$0),slots:t.slots,emit:t.emit,expose:e}}function va(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(xp(kv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Hs)return Hs[n](t)},has(e,n){return n in e||n in Hs}}))}function j0(t){return ee(t)&&"__vccOpts"in t}const Ae=(t,e)=>Dv(t,e,ya);function q0(t,e,n){const r=arguments.length;return r===2?Re(e)&&!G(e)?nl(e)?se(t,null,[e]):se(t,e):se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&nl(n)&&(n=[n]),se(t,e,n))}const H0="3.4.26";/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const z0="http://www.w3.org/2000/svg",W0="http://www.w3.org/1998/Math/MathML",Rn=typeof document<"u"?document:null,Hh=Rn&&Rn.createElement("template"),K0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Rn.createElementNS(z0,t):e==="mathml"?Rn.createElementNS(W0,t):Rn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Rn.createTextNode(t),createComment:t=>Rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Hh.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Hh.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},G0=Symbol("_vtc");function Q0(t,e,n){const r=t[G0];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const zh=Symbol("_vod"),Y0=Symbol("_vsh"),J0=Symbol(""),X0=/(^|;)\s*display\s*:/;function Z0(t,e,n){const r=t.style,s=Ue(n);let i=!1;if(n&&!s){if(e)if(Ue(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&So(r,a,"")}else for(const o in e)n[o]==null&&So(r,o,"");for(const o in n)o==="display"&&(i=!0),So(r,o,n[o])}else if(s){if(e!==n){const o=r[J0];o&&(n+=";"+o),r.cssText=n,i=X0.test(n)}}else e&&t.removeAttribute("style");zh in t&&(t[zh]=i?r.display:"",t[Y0]&&(r.display="none"))}const Wh=/\s*!important$/;function So(t,e,n){if(G(n))n.forEach(r=>So(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=eE(t,e);Wh.test(n)?t.setProperty(Ar(r),n.replace(Wh,""),"important"):t[r]=n}}const Kh=["Webkit","Moz","ms"],yc={};function eE(t,e){const n=yc[e];if(n)return n;let r=ns(e);if(r!=="filter"&&r in t)return yc[e]=r;r=pp(r);for(let s=0;s<Kh.length;s++){const i=Kh[s]+r;if(i in t)return yc[e]=i}return e}const Gh="http://www.w3.org/1999/xlink";function tE(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Gh,e.slice(6,e.length)):t.setAttributeNS(Gh,e,n);else{const i=sv(e);n==null||i&&!_p(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function nE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=_p(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Lr(t,e,n,r){t.addEventListener(e,n,r)}function rE(t,e,n,r){t.removeEventListener(e,n,r)}const Qh=Symbol("_vei");function sE(t,e,n,r,s=null){const i=t[Qh]||(t[Qh]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=iE(e);if(r){const l=i[e]=cE(r,s);Lr(t,a,l,c)}else o&&(rE(t,a,o,c),i[e]=void 0)}}const Yh=/(?:Once|Passive|Capture)$/;function iE(t){let e;if(Yh.test(t)){e={};let r;for(;r=t.match(Yh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ar(t.slice(2)),e]}let vc=0;const oE=Promise.resolve(),aE=()=>vc||(oE.then(()=>vc=0),vc=Date.now());function cE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Vt(lE(r,n.value),e,5,[r])};return n.value=t,n.attached=aE(),n}function lE(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Jh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,uE=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?Q0(t,r,l):e==="style"?Z0(t,n,r):ca(e)?ql(e)||sE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hE(t,e,r,l))?nE(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),tE(t,e,r,l))};function hE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Jh(e)&&ee(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Jh(e)&&Ue(n)?!1:e in t}const Xh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>Io(e,n):e};function dE(t){t.target.composing=!0}function Zh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ec=Symbol("_assign"),Gs={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ec]=Xh(s);const i=r||s.props&&s.props.type==="number";Lr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Wc(a)),t[Ec](a)}),n&&Lr(t,"change",()=>{t.value=t.value.trim()}),e||(Lr(t,"compositionstart",dE),Lr(t,"compositionend",Zh),Lr(t,"change",Zh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Ec]=Xh(i),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?Wc(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},fE=["ctrl","shift","alt","meta"],pE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>fE.some(n=>t[`${n}Key`]&&!e.includes(n))},Wr=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=pE[e[o]];if(a&&a(s,e))return}return t(s,...i)})},mE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},um=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Ar(s.key);if(e.some(o=>o===i||mE[o]===i))return t(s)})},gE=Be({patchProp:uE},K0);let ed;function _E(){return ed||(ed=b0(gE))}const yE=(...t)=>{const e=_E().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=EE(r);if(!s)return;const i=e._component;!ee(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,vE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function vE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function EE(t){return Ue(t)?document.querySelector(t):t}var td={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},wE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},dm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new IE;const d=i<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const T=l<<6&192|h;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class IE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TE=function(t){const e=hm(t);return dm.encodeByteArray(e,!0)},jo=function(t){return TE(t).replace(/\./g,"")},fm=function(t){try{return dm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function AE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bE=()=>AE().__FIREBASE_DEFAULTS__,RE=()=>{if(typeof process>"u"||typeof td>"u")return;const t=td.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},SE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fm(t[1]);return e&&JSON.parse(e)},Ea=()=>{try{return bE()||RE()||SE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pm=t=>{var e,n;return(n=(e=Ea())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},CE=t=>{const e=pm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mm=()=>{var t;return(t=Ea())===null||t===void 0?void 0:t.config},gm=t=>{var e;return(e=Ea())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function kE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[jo(JSON.stringify(n)),jo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function DE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function NE(){var t;const e=(t=Ea())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function OE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function VE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ME(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xE(){return!NE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function LE(){try{return typeof indexedDB=="object"}catch{return!1}}function FE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="FirebaseError";class _n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=UE,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?$E(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new _n(s,a,r)}}function $E(t,e){return t.replace(BE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const BE=/\{\$([^}]+)}/g;function jE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ss(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(nd(i)&&nd(o)){if(!ss(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function nd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ms(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function qE(t,e){const n=new HE(t,e);return n.subscribe.bind(n)}class HE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=wc),s.error===void 0&&(s.error=wc),s.complete===void 0&&(s.complete=wc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wc(){}/**
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
 */function ke(t){return t&&t._delegate?t._delegate:t}class gr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nr="[DEFAULT]";/**
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
 */class WE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new PE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GE(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KE(t){return t===nr?void 0:t}function GE(t){return t.instantiationMode==="EAGER"}/**
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
 */class QE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const YE={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},JE=oe.INFO,XE={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},ZE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=XE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ou{constructor(e){this.name=e,this._logLevel=JE,this._logHandler=ZE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const ew=(t,e)=>e.some(n=>t instanceof n);let rd,sd;function tw(){return rd||(rd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nw(){return sd||(sd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _m=new WeakMap,sl=new WeakMap,ym=new WeakMap,Ic=new WeakMap,au=new WeakMap;function rw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(On(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_m.set(n,t)}).catch(()=>{}),au.set(e,t),e}function sw(t){if(sl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});sl.set(t,e)}let il={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ym.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return On(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iw(t){il=t(il)}function ow(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tc(this),e,...n);return ym.set(r,e.sort?e.sort():[e]),On(r)}:nw().includes(t)?function(...e){return t.apply(Tc(this),e),On(_m.get(this))}:function(...e){return On(t.apply(Tc(this),e))}}function aw(t){return typeof t=="function"?ow(t):(t instanceof IDBTransaction&&sw(t),ew(t,tw())?new Proxy(t,il):t)}function On(t){if(t instanceof IDBRequest)return rw(t);if(Ic.has(t))return Ic.get(t);const e=aw(t);return e!==t&&(Ic.set(t,e),au.set(e,t)),e}const Tc=t=>au.get(t);function cw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=On(o);return r&&o.addEventListener("upgradeneeded",c=>{r(On(o.result),c.oldVersion,c.newVersion,On(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const lw=["get","getKey","getAll","getAllKeys","count"],uw=["put","add","delete","clear"],Ac=new Map;function id(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ac.get(e))return Ac.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=uw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||lw.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ac.set(e,i),i}iw(t=>({...t,get:(e,n,r)=>id(e,n)||t.get(e,n,r),has:(e,n)=>!!id(e,n)||t.has(e,n)}));/**
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
 */class hw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ol="@firebase/app",od="0.10.2";/**
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
 */const _r=new ou("@firebase/app"),fw="@firebase/app-compat",pw="@firebase/analytics-compat",mw="@firebase/analytics",gw="@firebase/app-check-compat",_w="@firebase/app-check",yw="@firebase/auth",vw="@firebase/auth-compat",Ew="@firebase/database",ww="@firebase/database-compat",Iw="@firebase/functions",Tw="@firebase/functions-compat",Aw="@firebase/installations",bw="@firebase/installations-compat",Rw="@firebase/messaging",Sw="@firebase/messaging-compat",Cw="@firebase/performance",Pw="@firebase/performance-compat",kw="@firebase/remote-config",Dw="@firebase/remote-config-compat",Nw="@firebase/storage",Ow="@firebase/storage-compat",Vw="@firebase/firestore",Mw="@firebase/firestore-compat",xw="firebase",Lw="10.11.1";/**
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
 */const al="[DEFAULT]",Fw={[ol]:"fire-core",[fw]:"fire-core-compat",[mw]:"fire-analytics",[pw]:"fire-analytics-compat",[_w]:"fire-app-check",[gw]:"fire-app-check-compat",[yw]:"fire-auth",[vw]:"fire-auth-compat",[Ew]:"fire-rtdb",[ww]:"fire-rtdb-compat",[Iw]:"fire-fn",[Tw]:"fire-fn-compat",[Aw]:"fire-iid",[bw]:"fire-iid-compat",[Rw]:"fire-fcm",[Sw]:"fire-fcm-compat",[Cw]:"fire-perf",[Pw]:"fire-perf-compat",[kw]:"fire-rc",[Dw]:"fire-rc-compat",[Nw]:"fire-gcs",[Ow]:"fire-gcs-compat",[Vw]:"fire-fst",[Mw]:"fire-fst-compat","fire-js":"fire-js",[xw]:"fire-js-all"};/**
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
 */const qo=new Map,Uw=new Map,cl=new Map;function ad(t,e){try{t.container.addComponent(e)}catch(n){_r.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function is(t){const e=t.name;if(cl.has(e))return _r.debug(`There were multiple attempts to register component ${e}.`),!1;cl.set(e,t);for(const n of qo.values())ad(n,t);for(const n of Uw.values())ad(n,t);return!0}function cu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t.settings!==void 0}/**
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
 */const $w={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vn=new Ni("app","Firebase",$w);/**
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
 */class Bw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vn.create("app-deleted",{appName:this._name})}}/**
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
 */const vs=Lw;function vm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:al,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Vn.create("bad-app-name",{appName:String(s)});if(n||(n=mm()),!n)throw Vn.create("no-options");const i=qo.get(s);if(i){if(ss(n,i.options)&&ss(r,i.config))return i;throw Vn.create("duplicate-app",{appName:s})}const o=new QE(s);for(const c of cl.values())o.addComponent(c);const a=new Bw(n,r,o);return qo.set(s,a),a}function Em(t=al){const e=qo.get(t);if(!e&&t===al&&mm())return vm();if(!e)throw Vn.create("no-app",{appName:t});return e}function Mn(t,e,n){var r;let s=(r=Fw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_r.warn(a.join(" "));return}is(new gr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const jw="firebase-heartbeat-database",qw=1,ci="firebase-heartbeat-store";let bc=null;function wm(){return bc||(bc=cw(jw,qw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw Vn.create("idb-open",{originalErrorMessage:t.message})})),bc}async function Hw(t){try{const n=(await wm()).transaction(ci),r=await n.objectStore(ci).get(Im(t));return await n.done,r}catch(e){if(e instanceof _n)_r.warn(e.message);else{const n=Vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_r.warn(n.message)}}}async function cd(t,e){try{const r=(await wm()).transaction(ci,"readwrite");await r.objectStore(ci).put(e,Im(t)),await r.done}catch(n){if(n instanceof _n)_r.warn(n.message);else{const r=Vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_r.warn(r.message)}}}function Im(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zw=1024,Ww=30*24*60*60*1e3;class Kw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ld();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ww}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ld(),{heartbeatsToSend:r,unsentEntries:s}=Gw(this._heartbeatsCache.heartbeats),i=jo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ld(){return new Date().toISOString().substring(0,10)}function Gw(t,e=zw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ud(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ud(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LE()?FE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Hw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ud(t){return jo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Yw(t){is(new gr("platform-logger",e=>new hw(e),"PRIVATE")),is(new gr("heartbeat",e=>new Kw(e),"PRIVATE")),Mn(ol,od,t),Mn(ol,od,"esm2017"),Mn("fire-js","")}Yw("");function lu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Tm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jw=Tm,Am=new Ni("auth","Firebase",Tm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=new ou("@firebase/auth");function Xw(t,...e){Ho.logLevel<=oe.WARN&&Ho.warn(`Auth (${vs}): ${t}`,...e)}function Co(t,...e){Ho.logLevel<=oe.ERROR&&Ho.error(`Auth (${vs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,...e){throw hu(t,...e)}function Mt(t,...e){return hu(t,...e)}function uu(t,e,n){const r=Object.assign(Object.assign({},Jw()),{[e]:n});return new Ni("auth","Firebase",r).create(e,{appName:t.name})}function un(t){return uu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zw(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ct(t,"argument-error"),uu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Am.create(t,...e)}function W(t,e,...n){if(!t)throw hu(e,...n)}function rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Co(e),new Error(e)}function hn(t,e){t||rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function eI(){return hd()==="http:"||hd()==="https:"}function hd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eI()||OE()||"connection"in navigator)?navigator.onLine:!0}function nI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.shortDelay=e,this.longDelay=n,hn(n>e,"Short delay should be less than long delay!"),this.isMobile=DE()||VE()}get(){return tI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t,e){hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=new Vi(3e4,6e4);function zn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yn(t,e,n,r,s={}){return Rm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Oi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),bm.fetch()(Sm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Rm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rI),e);try{const s=new oI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw lo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw lo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw lo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw lo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw uu(t,u,l);Ct(t,u)}}catch(s){if(s instanceof _n)throw s;Ct(t,"network-request-failed",{message:String(s)})}}async function Mi(t,e,n,r,s={}){const i=await yn(t,e,n,r,s);return"mfaPendingCredential"in i&&Ct(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Sm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?du(t.config,s):`${t.config.apiScheme}://${s}`}function iI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),sI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function lo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Mt(t,e,r);return s.customData._tokenResponse=n,s}function dd(t){return t!==void 0&&t.enterprise!==void 0}class aI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return iI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function cI(t,e){return yn(t,"GET","/v2/recaptchaConfig",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(t,e){return yn(t,"POST","/v1/accounts:delete",e)}async function Cm(t,e){return yn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uI(t,e=!1){const n=ke(t),r=await n.getIdToken(e),s=fu(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Qs(Rc(s.auth_time)),issuedAtTime:Qs(Rc(s.iat)),expirationTime:Qs(Rc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Rc(t){return Number(t)*1e3}function fu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Co("JWT malformed, contained fewer than 3 sections"),null;try{const s=fm(n);return s?JSON.parse(s):(Co("Failed to decode base64 JWT payload"),null)}catch(s){return Co("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function fd(t){const e=fu(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _n&&hI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qs(this.lastLoginAt),this.creationTime=Qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await os(t,Cm(n,{idToken:r}));W(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Pm(i.providerUserInfo):[],a=pI(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ul(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function fI(t){const e=ke(t);await zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Pm(t){return t.map(e=>{var{providerId:n}=e,r=lu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mI(t,e){const n=await Rm(t,{},async()=>{const r=Oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Sm(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gI(t,e){return yn(t,"POST","/v2/accounts:revokeToken",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=fd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await mI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Kr;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kr,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=lu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ul(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await os(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uI(this,e)}reload(){return fI(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(un(this.auth));const e=await this.getIdToken();return await os(this,lI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,U=(l=n.createdAt)!==null&&l!==void 0?l:void 0,K=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:V,isAnonymous:B,providerData:N,stsTokenManager:z}=n;W(H&&z,e,"internal-error");const ne=Kr.fromJSON(this.name,z);W(typeof H=="string",e,"internal-error"),In(h,e.name),In(d,e.name),W(typeof V=="boolean",e,"internal-error"),W(typeof B=="boolean",e,"internal-error"),In(p,e.name),In(T,e.name),In(E,e.name),In(R,e.name),In(U,e.name),In(K,e.name);const _e=new sn({uid:H,auth:e,email:d,emailVerified:V,displayName:h,isAnonymous:B,photoURL:T,phoneNumber:p,tenantId:E,stsTokenManager:ne,createdAt:U,lastLoginAt:K});return N&&Array.isArray(N)&&(_e.providerData=N.map(he=>Object.assign({},he))),R&&(_e._redirectEventId=R),_e}static async _fromIdTokenResponse(e,n,r=!1){const s=new Kr;s.updateFromServerResponse(n);const i=new sn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await zo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];W(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Pm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Kr;a.updateFromIdToken(r);const c=new sn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ul(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd=new Map;function on(t){hn(t instanceof Function,"Expected a class definition");let e=pd.get(t);return e?(hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pd.set(t,e),e)}/**
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
 */class km{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}km.type="NONE";const md=km;/**
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
 */function Po(t,e,n){return`firebase:${t}:${e}:${n}`}class Gr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Po(this.userKey,s.apiKey,i),this.fullPersistenceKey=Po("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gr(on(md),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||on(md);const o=Po(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=sn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Gr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Gr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Om(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mm(e))return"Blackberry";if(xm(e))return"Webos";if(pu(e))return"Safari";if((e.includes("chrome/")||Nm(e))&&!e.includes("edge/"))return"Chrome";if(Vm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Dm(t=Ye()){return/firefox\//i.test(t)}function pu(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nm(t=Ye()){return/crios\//i.test(t)}function Om(t=Ye()){return/iemobile/i.test(t)}function Vm(t=Ye()){return/android/i.test(t)}function Mm(t=Ye()){return/blackberry/i.test(t)}function xm(t=Ye()){return/webos/i.test(t)}function wa(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _I(t=Ye()){var e;return wa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yI(){return ME()&&document.documentMode===10}function Lm(t=Ye()){return wa(t)||Vm(t)||xm(t)||Mm(t)||/windows phone/i.test(t)||Om(t)}function vI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t,e=[]){let n;switch(t){case"Browser":n=gd(Ye());break;case"Worker":n=`${gd(Ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vs}/${r}`}/**
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
 */class EI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function wI(t,e={}){return yn(t,"GET","/v2/passwordPolicy",zn(t,e))}/**
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
 */const II=6;class TI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:II,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _d(this),this.idTokenSubscription=new _d(this),this.beforeStateQueue=new EI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Am,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=on(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Gr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Cm(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(un(this));const n=e?ke(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wI(this),n=new TI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ni("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await gI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&on(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Gr.create(this,[on(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Xw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wn(t){return ke(t)}class _d{constructor(e){this.auth=e,this.observer=null,this.addObserver=qE(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ia={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bI(t){Ia=t}function Um(t){return Ia.loadJS(t)}function RI(){return Ia.recaptchaEnterpriseScript}function SI(){return Ia.gapiScript}function CI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const PI="recaptcha-enterprise",kI="NO_RECAPTCHA";class DI{constructor(e){this.type=PI,this.auth=Wn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{cI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new aI(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;dd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(kI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&dd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=RI();c.length!==0&&(c+=a),Um(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function yd(t,e,n,r=!1){const s=new DI(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function hl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await yd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await yd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t,e){const n=cu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ss(i,e??{}))return s;Ct(s,"already-initialized")}return n.initialize({options:e})}function OI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(on);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function VI(t,e,n){const r=Wn(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=$m(e),{host:o,port:a}=MI(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),xI()}function $m(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function MI(t){const e=$m(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:vd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:vd(o)}}}function vd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,n){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}async function LI(t,e){return yn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FI(t,e){return Mi(t,"POST","/v1/accounts:signInWithPassword",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UI(t,e){return Mi(t,"POST","/v1/accounts:signInWithEmailLink",zn(t,e))}async function $I(t,e){return Mi(t,"POST","/v1/accounts:signInWithEmailLink",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends mu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new li(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new li(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hl(e,n,"signInWithPassword",FI);case"emailLink":return UI(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hl(e,r,"signUpPassword",LI);case"emailLink":return $I(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(t,e){return Mi(t,"POST","/v1/accounts:signInWithIdp",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI="http://localhost";class yr extends mu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=lu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new yr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qr(e,n)}buildRequest(){const e={requestUri:BI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Oi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qI(t){const e=Vs(Ms(t)).link,n=e?Vs(Ms(e)).deep_link_id:null,r=Vs(Ms(t)).deep_link_id;return(r?Vs(Ms(r)).link:null)||r||n||e||t}class gu{constructor(e){var n,r,s,i,o,a;const c=Vs(Ms(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=jI((s=c.mode)!==null&&s!==void 0?s:null);W(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=qI(e);try{return new gu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this.providerId=Es.PROVIDER_ID}static credential(e,n){return li._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gu.parseLink(n);return W(r,"argument-error"),li._fromEmailAndCode(e,r.code,r.tenantId)}}Es.PROVIDER_ID="password";Es.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xi extends _u{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends xi{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends xi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yr._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends xi{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.GITHUB_SIGN_IN_METHOD="github.com";Cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends xi{constructor(){super("twitter.com")}static credential(e,n){return yr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.TWITTER_SIGN_IN_METHOD="twitter.com";Pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HI(t,e){return Mi(t,"POST","/v1/accounts:signUp",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await sn._fromIdTokenResponse(e,r,s),o=Ed(r);return new vr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ed(r);return new vr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ed(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends _n{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Wo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Wo(e,n,r,s)}}function Bm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Wo._fromErrorAndOperation(t,i,e,r):i})}async function zI(t,e,n=!1){const r=await os(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vr._forOperation(t,"link",r)}/**
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
 */async function WI(t,e,n=!1){const{auth:r}=t;if(Ot(r.app))return Promise.reject(un(r));const s="reauthenticate";try{const i=await os(t,Bm(r,s,e,t),n);W(i.idToken,r,"internal-error");const o=fu(i.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),vr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ct(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jm(t,e,n=!1){if(Ot(t.app))return Promise.reject(un(t));const r="signIn",s=await Bm(t,r,e),i=await vr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function KI(t,e){return jm(Wn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qm(t){const e=Wn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function GI(t,e,n){if(Ot(t.app))return Promise.reject(un(t));const r=Wn(t),o=await hl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",HI).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&qm(t),c}),a=await vr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function QI(t,e,n){return Ot(t.app)?Promise.reject(un(t)):KI(ke(t),Es.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qm(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YI(t,e){return yn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ke(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await os(r,YI(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function XI(t,e,n,r){return ke(t).onIdTokenChanged(e,n,r)}function ZI(t,e,n){return ke(t).beforeAuthStateChanged(e,n)}function eT(t,e,n,r){return ke(t).onAuthStateChanged(e,n,r)}function tT(t){return ke(t).signOut()}const Ko="__sak";/**
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
 */class Hm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ko,"1"),this.storage.removeItem(Ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(){const t=Ye();return pu(t)||wa(t)}const rT=1e3,sT=10;class zm extends Hm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=nT()&&vI(),this.fallbackToPolling=Lm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);yI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,sT):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zm.type="LOCAL";const iT=zm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm extends Hm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wm.type="SESSION";const Km=Wm;/**
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
 */function oT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ta(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await oT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ta.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class aT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=yu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return window}function cT(t){Qt().location.href=t}/**
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
 */function Gm(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function lT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hT(){return Gm()?self:null}/**
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
 */const Qm="firebaseLocalStorageDb",dT=1,Go="firebaseLocalStorage",Ym="fbase_key";class Li{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Aa(t,e){return t.transaction([Go],e?"readwrite":"readonly").objectStore(Go)}function fT(){const t=indexedDB.deleteDatabase(Qm);return new Li(t).toPromise()}function dl(){const t=indexedDB.open(Qm,dT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Go,{keyPath:Ym})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Go)?e(r):(r.close(),await fT(),e(await dl()))})})}async function wd(t,e,n){const r=Aa(t,!0).put({[Ym]:e,value:n});return new Li(r).toPromise()}async function pT(t,e){const n=Aa(t,!1).get(e),r=await new Li(n).toPromise();return r===void 0?null:r.value}function Id(t,e){const n=Aa(t,!0).delete(e);return new Li(n).toPromise()}const mT=800,gT=3;class Jm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ta._getInstance(hT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lT(),!this.activeServiceWorker)return;this.sender=new aT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dl();return await wd(e,Ko,"1"),await Id(e,Ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Id(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Aa(s,!1).getAll();return new Li(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jm.type="LOCAL";const _T=Jm;new Vi(3e4,6e4);/**
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
 */function Xm(t,e){return e?on(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vu extends mu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yT(t){return jm(t.auth,new vu(t),t.bypassAuthState)}function vT(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),WI(n,new vu(t),t.bypassAuthState)}async function ET(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),zI(n,new vu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yT;case"linkViaPopup":case"linkViaRedirect":return ET;case"reauthViaPopup":case"reauthViaRedirect":return vT;default:Ct(this.auth,"internal-error")}}resolve(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=new Vi(2e3,1e4);async function IT(t,e,n){if(Ot(t.app))return Promise.reject(Mt(t,"operation-not-supported-in-this-environment"));const r=Wn(t);Zw(t,e,_u);const s=Xm(r,n);return new cr(r,"signInViaPopup",e,s).executeNotNull()}class cr extends Zm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,cr.currentPopupAction&&cr.currentPopupAction.cancel(),cr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){hn(this.filter.length===1,"Popup operations only handle one event");const e=yu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wT.get())};e()}}cr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT="pendingRedirect",ko=new Map;class AT extends Zm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ko.get(this.auth._key());if(!e){try{const r=await bT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ko.set(this.auth._key(),e)}return this.bypassAuthState||ko.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bT(t,e){const n=CT(e),r=ST(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function RT(t,e){ko.set(t._key(),e)}function ST(t){return on(t._redirectPersistence)}function CT(t){return Po(TT,t.config.apiKey,t.name)}async function PT(t,e,n=!1){if(Ot(t.app))return Promise.reject(un(t));const r=Wn(t),s=Xm(r,e),o=await new AT(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=10*60*1e3;class DT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!eg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Td(e))}saveEventToCache(e){this.cachedEventUids.add(Td(e)),this.lastProcessedEventTime=Date.now()}}function Td(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function eg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OT(t,e={}){return yn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MT=/^https?/;async function xT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OT(t);for(const n of e)try{if(LT(n))return}catch{}Ct(t,"unauthorized-domain")}function LT(t){const e=ll(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MT.test(n))return!1;if(VT.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const FT=new Vi(3e4,6e4);function Ad(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UT(t){return new Promise((e,n)=>{var r,s,i;function o(){Ad(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ad(),n(Mt(t,"network-request-failed"))},timeout:FT.get()})}if(!((s=(r=Qt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Qt().gapi)===null||i===void 0)&&i.load)o();else{const a=CI("iframefcb");return Qt()[a]=()=>{gapi.load?o():n(Mt(t,"network-request-failed"))},Um(`${SI()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Do=null,e})}let Do=null;function $T(t){return Do=Do||UT(t),Do}/**
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
 */const BT=new Vi(5e3,15e3),jT="__/auth/iframe",qT="emulator/auth/iframe",HT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WT(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?du(e,qT):`https://${t.config.authDomain}/${jT}`,r={apiKey:e.apiKey,appName:t.name,v:vs},s=zT.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Oi(r).slice(1)}`}async function KT(t){const e=await $T(t),n=Qt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:WT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Mt(t,"network-request-failed"),a=Qt().setTimeout(()=>{i(o)},BT.get());function c(){Qt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const GT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QT=500,YT=600,JT="_blank",XT="http://localhost";class bd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZT(t,e,n,r=QT,s=YT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},GT),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ye().toLowerCase();n&&(a=Nm(l)?JT:n),Dm(l)&&(e=e||XT,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,T])=>`${d}${p}=${T},`,"");if(_I(l)&&a!=="_self")return eA(e||"",a),new bd(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new bd(h)}function eA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const tA="__/auth/handler",nA="emulator/auth/handler",rA=encodeURIComponent("fac");async function Rd(t,e,n,r,s,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vs,eventId:s};if(e instanceof _u){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",jE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof xi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${rA}=${encodeURIComponent(c)}`:"";return`${sA(t)}?${Oi(a).slice(1)}${l}`}function sA({config:t}){return t.emulator?du(t,nA):`https://${t.authDomain}/${tA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="webStorageSupport";class iA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Km,this._completeRedirectFn=PT,this._overrideRedirectResult=RT}async _openPopup(e,n,r,s){var i;hn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Rd(e,n,r,ll(),s);return ZT(e,o,yu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Rd(e,n,r,ll(),s);return cT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(hn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await KT(e),r=new DT(e);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sc,{type:Sc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Sc];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lm()||pu()||wa()}}const oA=iA;var Sd="@firebase/auth",Cd="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lA(t){is(new gr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fm(t)},l=new AI(r,s,i,c);return OI(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),is(new gr("auth-internal",e=>{const n=Wn(e.getProvider("auth").getImmediate());return(r=>new aA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mn(Sd,Cd,cA(t)),Mn(Sd,Cd,"esm2017")}/**
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
 */const uA=5*60,hA=gm("authIdTokenMaxAge")||uA;let Pd=null;const dA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hA)return;const s=n==null?void 0:n.token;Pd!==s&&(Pd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function fA(t=Em()){const e=cu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=NI(t,{popupRedirectResolver:oA,persistence:[_T,iT,Km]}),r=gm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=dA(i.toString());ZI(n,o,()=>o(n.currentUser)),XI(n,a=>o(a))}}const s=pm("auth");return s&&VI(n,`http://${s}`),n}function pA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}bI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Mt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",pA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lA("Browser");var mA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Eu=Eu||{},Y=mA||self;function ba(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ra(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function gA(t){return Object.prototype.hasOwnProperty.call(t,Cc)&&t[Cc]||(t[Cc]=++_A)}var Cc="closure_uid_"+(1e9*Math.random()>>>0),_A=0;function yA(t,e,n){return t.call.apply(t.bind,arguments)}function vA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function st(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=yA:st=vA,st.apply(null,arguments)}function uo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Kn(){this.s=this.s,this.o=this.o}var EA=0;Kn.prototype.s=!1;Kn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),EA!=0)&&gA(this)};Kn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const tg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function wu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function kd(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ba(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function it(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var wA=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};Y.addEventListener("test",n,e),Y.removeEventListener("test",n,e)}catch{}return t}();function ui(t){return/^[\s\xa0]*$/.test(t)}function Sa(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function Ht(t){return Sa().indexOf(t)!=-1}function Iu(t){return Iu[" "](t),t}Iu[" "]=function(){};function IA(t,e){var n=m1;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var TA=Ht("Opera"),as=Ht("Trident")||Ht("MSIE"),ng=Ht("Edge"),fl=ng||as,rg=Ht("Gecko")&&!(Sa().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge"))&&!(Ht("Trident")||Ht("MSIE"))&&!Ht("Edge"),AA=Sa().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge");function sg(){var t=Y.document;return t?t.documentMode:void 0}var pl;e:{var Pc="",kc=function(){var t=Sa();if(rg)return/rv:([^\);]+)(\)|;)/.exec(t);if(ng)return/Edge\/([\d\.]+)/.exec(t);if(as)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(AA)return/WebKit\/(\S+)/.exec(t);if(TA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(kc&&(Pc=kc?kc[1]:""),as){var Dc=sg();if(Dc!=null&&Dc>parseFloat(Pc)){pl=String(Dc);break e}}pl=Pc}var ml;if(Y.document&&as){var Dd=sg();ml=Dd||parseInt(pl,10)||void 0}else ml=void 0;var bA=ml;function hi(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(rg){e:{try{Iu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:RA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&hi.$.h.call(this)}}qe(hi,it);var RA={2:"touch",3:"pen",4:"mouse"};hi.prototype.h=function(){hi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ca="closure_listenable_"+(1e6*Math.random()|0),SA=0;function CA(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++SA,this.fa=this.ia=!1}function Pa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Tu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function PA(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function ig(t){const e={};for(const n in t)e[n]=t[n];return e}const Nd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function og(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Nd.length;i++)n=Nd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ka(t){this.src=t,this.g={},this.h=0}ka.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=_l(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new CA(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function gl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=tg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Pa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function _l(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Au="closure_lm_"+(1e6*Math.random()|0),Nc={};function ag(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ag(t,e[i],n,r,s);return null}return n=ug(n),t&&t[Ca]?t.O(e,n,Ra(r)?!!r.capture:!!r,s):kA(t,e,n,!1,r,s)}function kA(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ra(s)?!!s.capture:!!s,a=Ru(t);if(a||(t[Au]=a=new ka(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=DA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)wA||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(lg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function DA(){function t(n){return e.call(t.src,t.listener,n)}const e=NA;return t}function cg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)cg(t,e[i],n,r,s);else r=Ra(r)?!!r.capture:!!r,n=ug(n),t&&t[Ca]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=_l(i,n,r,s),-1<n&&(Pa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ru(t))&&(e=t.g[e.toString()],t=-1,e&&(t=_l(e,n,r,s)),(n=-1<t?e[t]:null)&&bu(n))}function bu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ca])gl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(lg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ru(e))?(gl(n,t),n.h==0&&(n.src=null,e[Au]=null)):Pa(t)}}}function lg(t){return t in Nc?Nc[t]:Nc[t]="on"+t}function NA(t,e){if(t.fa)t=!0;else{e=new hi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&bu(t),t=n.call(r,e)}return t}function Ru(t){return t=t[Au],t instanceof ka?t:null}var Oc="__closure_events_fn_"+(1e9*Math.random()>>>0);function ug(t){return typeof t=="function"?t:(t[Oc]||(t[Oc]=function(e){return t.handleEvent(e)}),t[Oc])}function je(){Kn.call(this),this.i=new ka(this),this.S=this,this.J=null}qe(je,Kn);je.prototype[Ca]=!0;je.prototype.removeEventListener=function(t,e,n,r){cg(this,t,e,n,r)};function Ge(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new it(e,t);else if(e instanceof it)e.target=e.target||t;else{var s=e;e=new it(r,t),og(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=ho(o,r,!0,e)&&s}if(o=e.g=t,s=ho(o,r,!0,e)&&s,s=ho(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=ho(o,r,!1,e)&&s}je.prototype.N=function(){if(je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Pa(n[r]);delete t.g[e],t.h--}}this.J=null};je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};je.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ho(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&gl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Su=Y.JSON.stringify;class OA{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function VA(){var t=Cu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class MA{constructor(){this.h=this.g=null}add(e,n){const r=hg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var hg=new OA(()=>new xA,t=>t.reset());class xA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function LA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function FA(t){Y.setTimeout(()=>{throw t},0)}let di,fi=!1,Cu=new MA,dg=()=>{const t=Y.Promise.resolve(void 0);di=()=>{t.then(UA)}};var UA=()=>{for(var t;t=VA();){try{t.h.call(t.g)}catch(n){FA(n)}var e=hg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}fi=!1};function Da(t,e){je.call(this),this.h=t||1,this.g=e||Y,this.j=st(this.qb,this),this.l=Date.now()}qe(Da,je);D=Da.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ge(this,"tick"),this.ga&&(Pu(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Pu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){Da.$.N.call(this),Pu(this),delete this.g};function ku(t,e,n){if(typeof t=="function")n&&(t=st(t,n));else if(t&&typeof t.handleEvent=="function")t=st(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function fg(t){t.g=ku(()=>{t.g=null,t.i&&(t.i=!1,fg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class $A extends Kn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:fg(this)}N(){super.N(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pi(t){Kn.call(this),this.h=t,this.g={}}qe(pi,Kn);var Od=[];function pg(t,e,n,r){Array.isArray(n)||(n&&(Od[0]=n.toString()),n=Od);for(var s=0;s<n.length;s++){var i=ag(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function mg(t){Tu(t.g,function(e,n){this.g.hasOwnProperty(n)&&bu(e)},t),t.g={}}pi.prototype.N=function(){pi.$.N.call(this),mg(this)};pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Na(){this.g=!0}Na.prototype.Ea=function(){this.g=!1};function BA(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function jA(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Br(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+HA(t,n)+(r?" "+r:"")})}function qA(t,e){t.info(function(){return"TIMEOUT: "+e})}Na.prototype.info=function(){};function HA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Su(n)}catch{return e}}var br={},Vd=null;function Oa(){return Vd=Vd||new je}br.Ta="serverreachability";function gg(t){it.call(this,br.Ta,t)}qe(gg,it);function mi(t){const e=Oa();Ge(e,new gg(e))}br.STAT_EVENT="statevent";function _g(t,e){it.call(this,br.STAT_EVENT,t),this.stat=e}qe(_g,it);function lt(t){const e=Oa();Ge(e,new _g(e,t))}br.Ua="timingevent";function yg(t,e){it.call(this,br.Ua,t),this.size=e}qe(yg,it);function Fi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var Va={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},vg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Du(){}Du.prototype.h=null;function Md(t){return t.h||(t.h=t.i())}function Eg(){}var Ui={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Nu(){it.call(this,"d")}qe(Nu,it);function Ou(){it.call(this,"c")}qe(Ou,it);var yl;function Ma(){}qe(Ma,Du);Ma.prototype.g=function(){return new XMLHttpRequest};Ma.prototype.i=function(){return{}};yl=new Ma;function $i(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new pi(this),this.P=zA,t=fl?125:void 0,this.V=new Da(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new wg}function wg(){this.i=null,this.g="",this.h=!1}var zA=45e3,Ig={},vl={};D=$i.prototype;D.setTimeout=function(t){this.P=t};function El(t,e,n){t.L=1,t.A=La(dn(e)),t.u=n,t.S=!0,Tg(t,null)}function Tg(t,e){t.G=Date.now(),Bi(t),t.B=dn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Dg(n.i,"t",r),t.o=0,n=t.l.J,t.h=new wg,t.g=Xg(t.l,n?e:null,!t.u),0<t.O&&(t.M=new $A(st(t.Pa,t,t.g),t.O)),pg(t.U,t.g,"readystatechange",t.nb),e=t.I?ig(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),mi(),BA(t.j,t.v,t.B,t.m,t.W,t.u)}D.nb=function(t){t=t.target;const e=this.M;e&&zt(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const u=zt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||fl||this.g&&(this.h.h||this.g.ja()||Ud(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?mi(3):mi(2)),xa(this);var n=this.g.da();this.ca=n;t:if(Ag(this)){var r=Ud(this.g);t="";var s=r.length,i=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){lr(this),Ys(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,jA(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ui(a)){var l=a;break t}}l=null}if(n=l)Br(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wl(this,n);else{this.i=!1,this.s=3,lt(12),lr(this),Ys(this);break e}}this.S?(bg(this,u,o),fl&&this.i&&u==3&&(pg(this.U,this.V,"tick",this.mb),this.V.start())):(Br(this.j,this.m,o,null),wl(this,o)),u==4&&lr(this),this.i&&!this.J&&(u==4?Gg(this.l,this):(this.i=!1,Bi(this)))}else d1(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),lr(this),Ys(this)}}}catch{}finally{}};function Ag(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function bg(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=WA(t,n),s==vl){e==4&&(t.s=4,lt(14),r=!1),Br(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Ig){t.s=4,lt(15),Br(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Br(t.j,t.m,s,null),wl(t,s);Ag(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,lt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Uu(e),e.M=!0,lt(11))):(Br(t.j,t.m,n,"[Invalid Chunked Response]"),lr(t),Ys(t))}D.mb=function(){if(this.g){var t=zt(this.g),e=this.g.ja();this.o<e.length&&(xa(this),bg(this,t,e),this.i&&t!=4&&Bi(this))}};function WA(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?vl:(n=Number(e.substring(n,r)),isNaN(n)?Ig:(r+=1,r+n>e.length?vl:(e=e.slice(r,r+n),t.o=r+n,e)))}D.cancel=function(){this.J=!0,lr(this)};function Bi(t){t.Y=Date.now()+t.P,Rg(t,t.P)}function Rg(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Fi(st(t.lb,t),e)}function xa(t){t.C&&(Y.clearTimeout(t.C),t.C=null)}D.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(qA(this.j,this.B),this.L!=2&&(mi(),lt(17)),lr(this),this.s=2,Ys(this)):Rg(this,this.Y-t)};function Ys(t){t.l.H==0||t.J||Gg(t.l,t)}function lr(t){xa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Pu(t.V),mg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function wl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Il(n.i,t))){if(!t.K&&Il(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Jo(n),$a(n);else break e;Fu(n),lt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Fi(st(n.ib,n),6e3));if(1>=Vg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ur(n,11)}else if((t.K||n.g==t)&&Jo(n),!ui(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const T=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var i=r.i;i.g||T.indexOf("spdy")==-1&&T.indexOf("quic")==-1&&T.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Vu(i,i.h),i.h=null))}if(r.F){const E=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,we(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Jg(r,r.J?r.pa:null,r.Y),o.K){Mg(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(xa(a),Bi(a)),r.g=o}else Wg(r);0<n.j.length&&Ba(n)}else l[0]!="stop"&&l[0]!="close"||ur(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ur(n,7):Lu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}mi(4)}catch{}}function KA(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ba(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function GA(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ba(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Sg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ba(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=GA(t),r=KA(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Cg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function QA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function pr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof pr){this.h=t.h,Qo(this,t.j),this.s=t.s,this.g=t.g,Yo(this,t.m),this.l=t.l;var e=t.i,n=new gi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),xd(this,n),this.o=t.o}else t&&(e=String(t).match(Cg))?(this.h=!1,Qo(this,e[1]||"",!0),this.s=xs(e[2]||""),this.g=xs(e[3]||"",!0),Yo(this,e[4]),this.l=xs(e[5]||"",!0),xd(this,e[6]||"",!0),this.o=xs(e[7]||"")):(this.h=!1,this.i=new gi(null,this.h))}pr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ls(e,Ld,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ls(e,Ld,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ls(n,n.charAt(0)=="/"?XA:JA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ls(n,e1)),t.join("")};function dn(t){return new pr(t)}function Qo(t,e,n){t.j=n?xs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Yo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function xd(t,e,n){e instanceof gi?(t.i=e,t1(t.i,t.h)):(n||(e=Ls(e,ZA)),t.i=new gi(e,t.h))}function we(t,e,n){t.i.set(e,n)}function La(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function xs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ls(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,YA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function YA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ld=/[#\/\?@]/g,JA=/[#\?:]/g,XA=/[#\?]/g,ZA=/[#\?@]/g,e1=/#/g;function gi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gn(t){t.g||(t.g=new Map,t.h=0,t.i&&QA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=gi.prototype;D.add=function(t,e){Gn(this),this.i=null,t=ws(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Pg(t,e){Gn(t),e=ws(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function kg(t,e){return Gn(t),e=ws(t,e),t.g.has(e)}D.forEach=function(t,e){Gn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};D.ta=function(){Gn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};D.Z=function(t){Gn(this);let e=[];if(typeof t=="string")kg(this,t)&&(e=e.concat(this.g.get(ws(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Gn(this),this.i=null,t=ws(this,t),kg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Dg(t,e,n){Pg(t,e),0<n.length&&(t.i=null,t.g.set(ws(t,e),wu(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ws(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function t1(t,e){e&&!t.j&&(Gn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Pg(this,r),Dg(this,s,n))},t)),t.j=e}var n1=class{constructor(t,e){this.g=t,this.map=e}};function Ng(t){this.l=t||r1,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ka&&Y.g.Ka()&&Y.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var r1=10;function Og(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Vg(t){return t.h?1:t.g?t.g.size:0}function Il(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Vu(t,e){t.g?t.g.add(e):t.h=e}function Mg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ng.prototype.cancel=function(){if(this.i=xg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return wu(t.i)}var s1=class{stringify(t){return Y.JSON.stringify(t,void 0)}parse(t){return Y.JSON.parse(t,void 0)}};function i1(){this.g=new s1}function o1(t,e,n){const r=n||"";try{Sg(t,function(s,i){let o=s;Ra(s)&&(o=Su(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function a1(t,e){const n=new Na;if(Y.Image){const r=new Image;r.onload=uo(fo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=uo(fo,n,r,"TestLoadImage: error",!1,e),r.onabort=uo(fo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=uo(fo,n,r,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function fo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function ji(t){this.l=t.ec||null,this.j=t.ob||!1}qe(ji,Du);ji.prototype.g=function(){return new Fa(this.l,this.j)};ji.prototype.i=function(t){return function(){return t}}({});function Fa(t,e){je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Mu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qe(Fa,je);var Mu=0;D=Fa.prototype;D.open=function(t,e){if(this.readyState!=Mu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_i(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Y).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qi(this)),this.readyState=Mu};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Lg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Lg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?qi(this):_i(this),this.readyState==3&&Lg(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,qi(this))};D.Ya=function(t){this.g&&(this.response=t,qi(this))};D.ka=function(){this.g&&qi(this)};function qi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_i(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function _i(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Fa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var c1=Y.JSON.parse;function De(t){je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Fg,this.L=this.M=!1}qe(De,je);var Fg="",l1=/^https?$/i,u1=["POST","PUT"];D=De.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():yl.g(),this.C=this.u?Md(this.u):Md(yl),this.g.onreadystatechange=st(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Fd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Y.FormData&&t instanceof Y.FormData,!(0<=tg(u1,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Bg(this),0<this.B&&((this.L=h1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.ua,this)):this.A=ku(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Fd(this,i)}};function h1(t){return as&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof Eu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function Fd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ug(t),Ua(t)}function Ug(t){t.F||(t.F=!0,Ge(t,"complete"),Ge(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),Ua(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ua(this,!0)),De.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?$g(this):this.kb())};D.kb=function(){$g(this)};function $g(t){if(t.h&&typeof Eu<"u"&&(!t.C[1]||zt(t)!=4||t.da()!=2)){if(t.v&&zt(t)==4)ku(t.La,0,t);else if(Ge(t,"readystatechange"),zt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Cg)[1]||null;!s&&Y.self&&Y.self.location&&(s=Y.self.location.protocol.slice(0,-1)),r=!l1.test(s?s.toLowerCase():"")}n=r}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var i=2<zt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Ug(t)}}finally{Ua(t)}}}}function Ua(t,e){if(t.g){Bg(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=r}catch{}}}function Bg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function zt(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),c1(e)}};function Ud(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Fg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function d1(t){const e={};t=(t.g&&2<=zt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ui(t[r]))continue;var n=LA(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}PA(e,function(r){return r.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jg(t){let e="";return Tu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function xu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=jg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):we(t,e,n))}function ks(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function qg(t){this.Ga=0,this.j=[],this.l=new Na,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ks("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ks("baseRetryDelayMs",5e3,t),this.hb=ks("retryDelaySeedMs",1e4,t),this.eb=ks("forwardChannelMaxRetries",2,t),this.xa=ks("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Ng(t&&t.concurrentRequestLimit),this.Ja=new i1,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=qg.prototype;D.ra=8;D.H=1;function Lu(t){if(Hg(t),t.H==3){var e=t.W++,n=dn(t.I);if(we(n,"SID",t.K),we(n,"RID",e),we(n,"TYPE","terminate"),Hi(t,n),e=new $i(t,t.l,e),e.L=2,e.A=La(dn(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon)try{n=Y.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&Y.Image&&(new Image().src=e.A,n=!0),n||(e.g=Xg(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Bi(e)}Yg(t)}function $a(t){t.g&&(Uu(t),t.g.cancel(),t.g=null)}function Hg(t){$a(t),t.u&&(Y.clearTimeout(t.u),t.u=null),Jo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function Ba(t){if(!Og(t.i)&&!t.m){t.m=!0;var e=t.Na;di||dg(),fi||(di(),fi=!0),Cu.add(e,t),t.C=0}}function f1(t,e){return Vg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Fi(st(t.Na,t,e),Qg(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new $i(this,this.l,t);let i=this.s;if(this.U&&(i?(i=ig(i),og(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=zg(this,s,e),n=dn(this.I),we(n,"RID",t),we(n,"CVER",22),this.F&&we(n,"X-HTTP-Session-Id",this.F),Hi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(jg(i)))+"&"+e:this.o&&xu(n,this.o,i)),Vu(this.i,s),this.bb&&we(n,"TYPE","init"),this.P?(we(n,"$req",e),we(n,"SID","null"),s.aa=!0,El(s,n,null)):El(s,n,e),this.H=2}}else this.H==3&&(t?$d(this,t):this.j.length==0||Og(this.i)||$d(this))};function $d(t,e){var n;e?n=e.m:n=t.W++;const r=dn(t.I);we(r,"SID",t.K),we(r,"RID",n),we(r,"AID",t.V),Hi(t,r),t.o&&t.s&&xu(r,t.o,t.s),n=new $i(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=zg(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Vu(t.i,n),El(n,r,e)}function Hi(t,e){t.na&&Tu(t.na,function(n,r){we(e,r,n)}),t.h&&Sg({},function(n,r){we(e,r,n)})}function zg(t,e,n){n=Math.min(t.j.length,n);var r=t.h?st(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{o1(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Wg(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;di||dg(),fi||(di(),fi=!0),Cu.add(e,t),t.A=0}}function Fu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Fi(st(t.Ma,t),Qg(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,Kg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Fi(st(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,lt(10),$a(this),Kg(this))};function Uu(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function Kg(t){t.g=new $i(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=dn(t.wa);we(e,"RID","rpc"),we(e,"SID",t.K),we(e,"AID",t.V),we(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&we(e,"TO",t.qa),we(e,"TYPE","xmlhttp"),Hi(t,e),t.o&&t.s&&xu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=La(dn(e)),n.u=null,n.S=!0,Tg(n,t)}D.ib=function(){this.v!=null&&(this.v=null,$a(this),Fu(this),lt(19))};function Jo(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function Gg(t,e){var n=null;if(t.g==e){Jo(t),Uu(t),t.g=null;var r=2}else if(Il(t.i,e))n=e.F,Mg(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Oa(),Ge(r,new yg(r,n)),Ba(t)}else Wg(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&f1(t,e)||r==2&&Fu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ur(t,5);break;case 4:ur(t,10);break;case 3:ur(t,6);break;default:ur(t,2)}}}function Qg(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ur(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=st(t.pb,t);n||(n=new pr("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||Qo(n,"https"),La(n)),a1(n.toString(),r)}else lt(2);t.H=0,t.h&&t.h.za(e),Yg(t),Hg(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),lt(2)):(this.l.info("Failed to ping google.com"),lt(1))};function Yg(t){if(t.H=0,t.ma=[],t.h){const e=xg(t.i);(e.length!=0||t.j.length!=0)&&(kd(t.ma,e),kd(t.ma,t.j),t.i.i.length=0,wu(t.j),t.j.length=0),t.h.ya()}}function Jg(t,e,n){var r=n instanceof pr?dn(n):new pr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Yo(r,r.m);else{var s=Y.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new pr(null);r&&Qo(i,r),e&&(i.g=e),s&&Yo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&we(r,n,e),we(r,"VER",t.ra),Hi(t,r),r}function Xg(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new De(new ji({ob:n})):new De(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function Zg(){}D=Zg.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function Xo(){if(as&&!(10<=Number(bA)))throw Error("Environmental error: no available transport.")}Xo.prototype.g=function(t,e){return new It(t,e)};function It(t,e){je.call(this),this.g=new qg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ui(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ui(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Is(this)}qe(It,je);It.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;lt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Jg(t,null,t.Y),Ba(t)};It.prototype.close=function(){Lu(this.g)};It.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Su(t),t=n);e.j.push(new n1(e.fb++,t)),e.H==3&&Ba(e)};It.prototype.N=function(){this.g.h=null,delete this.j,Lu(this.g),delete this.g,It.$.N.call(this)};function e_(t){Nu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qe(e_,Nu);function t_(){Ou.call(this),this.status=1}qe(t_,Ou);function Is(t){this.g=t}qe(Is,Zg);Is.prototype.Ba=function(){Ge(this.g,"a")};Is.prototype.Aa=function(t){Ge(this.g,new e_(t))};Is.prototype.za=function(t){Ge(this.g,new t_)};Is.prototype.ya=function(){Ge(this.g,"b")};function p1(){this.blockSize=-1}function xt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}qe(xt,p1);xt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Vc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}xt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Vc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Vc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Vc(this,r),s=0;break}}this.h=s,this.i+=e};xt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function me(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var m1={};function $u(t){return-128<=t&&128>t?IA(t,function(e){return new me([e|0],0>e?-1:0)}):new me([t|0],0>t?-1:0)}function Wt(t){if(isNaN(t)||!isFinite(t))return Yr;if(0>t)return We(Wt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Tl;return new me(e,0)}function n_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return We(n_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Wt(Math.pow(e,8)),r=Yr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Wt(Math.pow(e,i)),r=r.R(i).add(Wt(o))):(r=r.R(n),r=r.add(Wt(o)))}return r}var Tl=4294967296,Yr=$u(0),Al=$u(1),Bd=$u(16777216);D=me.prototype;D.ea=function(){if(bt(this))return-We(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Tl+r)*e,e*=Tl}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(an(this))return"0";if(bt(this))return"-"+We(this).toString(t);for(var e=Wt(Math.pow(t,6)),n=this,r="";;){var s=ea(n,e).g;n=Zo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,an(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function an(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function bt(t){return t.h==-1}D.X=function(t){return t=Zo(this,t),bt(t)?-1:an(t)?0:1};function We(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new me(n,~t.h).add(Al)}D.abs=function(){return bt(this)?We(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new me(n,n[n.length-1]&-2147483648?-1:0)};function Zo(t,e){return t.add(We(e))}D.R=function(t){if(an(this)||an(t))return Yr;if(bt(this))return bt(t)?We(this).R(We(t)):We(We(this).R(t));if(bt(t))return We(this.R(We(t)));if(0>this.X(Bd)&&0>t.X(Bd))return Wt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,po(n,2*r+2*s),n[2*r+2*s+1]+=i*c,po(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,po(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,po(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new me(n,0)};function po(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ds(t,e){this.g=t,this.h=e}function ea(t,e){if(an(e))throw Error("division by zero");if(an(t))return new Ds(Yr,Yr);if(bt(t))return e=ea(We(t),e),new Ds(We(e.g),We(e.h));if(bt(e))return e=ea(t,We(e)),new Ds(We(e.g),e.h);if(30<t.g.length){if(bt(t)||bt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Al,r=e;0>=r.X(t);)n=jd(n),r=jd(r);var s=Vr(n,1),i=Vr(r,1);for(r=Vr(r,2),n=Vr(n,2);!an(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Vr(r,1),n=Vr(n,1)}return e=Zo(t,s.R(e)),new Ds(s,e)}for(s=Yr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Wt(n),o=i.R(e);bt(o)||0<o.X(t);)n-=r,i=Wt(n),o=i.R(e);an(i)&&(i=Al),s=s.add(i),t=Zo(t,o)}return new Ds(s,t)}D.gb=function(t){return ea(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new me(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new me(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new me(n,this.h^t.h)};function jd(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new me(n,t.h)}function Vr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new me(s,t.h)}Xo.prototype.createWebChannel=Xo.prototype.g;It.prototype.send=It.prototype.u;It.prototype.open=It.prototype.m;It.prototype.close=It.prototype.close;Va.NO_ERROR=0;Va.TIMEOUT=8;Va.HTTP_ERROR=6;vg.COMPLETE="complete";Eg.EventType=Ui;Ui.OPEN="a";Ui.CLOSE="b";Ui.ERROR="c";Ui.MESSAGE="d";je.prototype.listen=je.prototype.O;De.prototype.listenOnce=De.prototype.P;De.prototype.getLastError=De.prototype.Sa;De.prototype.getLastErrorCode=De.prototype.Ia;De.prototype.getStatus=De.prototype.da;De.prototype.getResponseJson=De.prototype.Wa;De.prototype.getResponseText=De.prototype.ja;De.prototype.send=De.prototype.ha;De.prototype.setWithCredentials=De.prototype.Oa;xt.prototype.digest=xt.prototype.l;xt.prototype.reset=xt.prototype.reset;xt.prototype.update=xt.prototype.j;me.prototype.add=me.prototype.add;me.prototype.multiply=me.prototype.R;me.prototype.modulo=me.prototype.gb;me.prototype.compare=me.prototype.X;me.prototype.toNumber=me.prototype.ea;me.prototype.toString=me.prototype.toString;me.prototype.getBits=me.prototype.D;me.fromNumber=Wt;me.fromString=n_;var g1=function(){return new Xo},_1=function(){return Oa()},Mc=Va,y1=vg,v1=br,qd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},E1=ji,mo=Eg,w1=De,I1=xt,Jr=me;const Hd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts="10.11.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new ou("@firebase/firestore");function Ns(){return Er.logLevel}function L(t,...e){if(Er.logLevel<=oe.DEBUG){const n=e.map(Bu);Er.debug(`Firestore (${Ts}): ${t}`,...n)}}function fn(t,...e){if(Er.logLevel<=oe.ERROR){const n=e.map(Bu);Er.error(`Firestore (${Ts}): ${t}`,...n)}}function cs(t,...e){if(Er.logLevel<=oe.WARN){const n=e.map(Bu);Er.warn(`Firestore (${Ts}): ${t}`,...n)}}function Bu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Ts}) INTERNAL ASSERTION FAILED: `+t;throw fn(e),new Error(e)}function ve(t,e){t||Q()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends _n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class T1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class A1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class b1{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new xn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new xn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new r_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new Ze(e)}}class R1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class S1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new R1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class C1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.R=n.token,new C1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=k1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function ls(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ie(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ie(0,0))}static max(){return new J(new Ie(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends yi{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const D1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends yi{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return D1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ke(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new x(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new x(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new x(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new x(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Te.fromString(e))}static fromName(e){return new q(Te.fromString(e).popFirst(5))}static empty(){return new q(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Te(e.slice()))}}function N1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new Ie(n+1,0):new Ie(n,r));return new Un(s,q.empty(),e)}function O1(t){return new Un(t.readTime,t.key,-1)}class Un{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Un(J.min(),q.empty(),-1)}static max(){return new Un(J.max(),q.empty(),-1)}}function V1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class x1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==M1)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(s=>s?C.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new C((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new C((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function L1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Wi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ju{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ju.oe=-1;function ja(t){return t==null}function ta(t){return t===0&&1/t==-1/0}function F1(t){return typeof t=="number"&&Number.isInteger(t)&&!ta(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function i_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new go(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new go(this.root,e,this.comparator,!1)}getReverseIterator(){return new go(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new go(this.root,e,this.comparator,!0)}}class go{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ze.RED,this.left=s??ze.EMPTY,this.right=i??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wd(this.data.getIterator())}getIteratorFrom(e){return new Wd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class Wd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new wt([])}unionWith(e){let n=new Qe(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ls(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class o_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new o_("Invalid base64 string: "+i):i}}(e);return new at(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const U1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $n(t){if(ve(!!t),typeof t=="string"){let e=0;const n=U1.exec(t);if(ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wr(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hu(t){const e=t.mapValue.fields.__previous_value__;return qu(e)?Hu(e):e}function vi(t){const e=$n(t.mapValue.fields.__local_write_time__.timestampValue);return new Ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ei{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ei("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ei&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qu(t)?4:B1(t)?9007199254740991:10:Q()}function Zt(t,e){if(t===e)return!0;const n=Ir(t);if(n!==Ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vi(t).isEqual(vi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=$n(s.timestampValue),a=$n(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return wr(s.bytesValue).isEqual(wr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ve(s.doubleValue),a=Ve(i.doubleValue);return o===a?ta(o)===ta(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ls(t.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(zd(o)!==zd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Zt(o[c],a[c])))return!1;return!0}(t,e);default:return Q()}}function wi(t,e){return(t.values||[]).find(n=>Zt(n,e))!==void 0}function us(t,e){if(t===e)return 0;const n=Ir(t),r=Ir(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ve(i.integerValue||i.doubleValue),c=Ve(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Kd(t.timestampValue,e.timestampValue);case 4:return Kd(vi(t),vi(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(i,o){const a=wr(i),c=wr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ue(a[l],c[l]);if(u!==0)return u}return ue(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ue(Ve(i.latitude),Ve(o.latitude));return a!==0?a:ue(Ve(i.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=us(a[l],c[l]);if(u)return u}return ue(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===_o.mapValue&&o===_o.mapValue)return 0;if(i===_o.mapValue)return 1;if(o===_o.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=ue(c[h],u[h]);if(d!==0)return d;const p=us(a[c[h]],l[u[h]]);if(p!==0)return p}return ue(c.length,u.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Kd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=$n(t),r=$n(e),s=ue(n.seconds,r.seconds);return s!==0?s:ue(n.nanos,r.nanos)}function hs(t){return bl(t)}function bl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=$n(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return wr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=bl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${bl(n.fields[o])}`;return s+"}"}(t.mapValue):Q()}function Gd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Rl(t){return!!t&&"integerValue"in t}function zu(t){return!!t&&"arrayValue"in t}function Qd(t){return!!t&&"nullValue"in t}function Yd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function No(t){return!!t&&"mapValue"in t}function Js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Js(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Js(t.arrayValue.values[n]);return e}return Object.assign({},t)}function B1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!No(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Js(n)}setAll(e){let n=Ke.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Js(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());No(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];No(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Rr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ft(Js(this.value))}}function a_(t){const e=[];return Rr(t.fields,(n,r)=>{const s=new Ke([n]);if(No(r)){const i=a_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tt(e,0,J.min(),J.min(),J.min(),ft.empty(),0)}static newFoundDocument(e,n,r,s){return new tt(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new tt(e,2,n,J.min(),J.min(),ft.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,J.min(),J.min(),ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class na{constructor(e,n){this.position=e,this.inclusive=n}}function Jd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=us(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ii{constructor(e,n="asc"){this.field=e,this.dir=n}}function j1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class c_{}class Le extends c_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new H1(e,n,r):n==="array-contains"?new K1(e,r):n==="in"?new G1(e,r):n==="not-in"?new Q1(e,r):n==="array-contains-any"?new Y1(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new z1(e,r):new W1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(us(n,this.value)):n!==null&&Ir(this.value)===Ir(n)&&this.matchesComparison(us(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Lt extends c_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Lt(e,n)}matches(e){return l_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function l_(t){return t.op==="and"}function u_(t){return q1(t)&&l_(t)}function q1(t){for(const e of t.filters)if(e instanceof Lt)return!1;return!0}function Sl(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+hs(t.value);if(u_(t))return t.filters.map(e=>Sl(e)).join(",");{const e=t.filters.map(n=>Sl(n)).join(",");return`${t.op}(${e})`}}function h_(t,e){return t instanceof Le?function(r,s){return s instanceof Le&&r.op===s.op&&r.field.isEqual(s.field)&&Zt(r.value,s.value)}(t,e):t instanceof Lt?function(r,s){return s instanceof Lt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&h_(o,s.filters[a]),!0):!1}(t,e):void Q()}function d_(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${hs(n.value)}`}(t):t instanceof Lt?function(n){return n.op.toString()+" {"+n.getFilters().map(d_).join(" ,")+"}"}(t):"Filter"}class H1 extends Le{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class z1 extends Le{constructor(e,n){super(e,"in",n),this.keys=f_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class W1 extends Le{constructor(e,n){super(e,"not-in",n),this.keys=f_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function f_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class K1 extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zu(n)&&wi(n.arrayValue,this.value)}}class G1 extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wi(this.value.arrayValue,n)}}class Q1 extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(wi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wi(this.value.arrayValue,n)}}class Y1 extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wi(this.value.arrayValue,r))}}/**
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
 */class J1{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function Zd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new J1(t,e,n,r,s,i,o)}function Wu(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ja(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>hs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>hs(r)).join(",")),e.ue=n}return e.ue}function Ku(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!j1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!h_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xd(t.startAt,e.startAt)&&Xd(t.endAt,e.endAt)}function Cl(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function X1(t,e,n,r,s,i,o,a){return new As(t,e,n,r,s,i,o,a)}function qa(t){return new As(t)}function ef(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function p_(t){return t.collectionGroup!==null}function Xs(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Qe(Ke.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ii(i,r))}),n.has(Ke.keyField().canonicalString())||e.ce.push(new Ii(Ke.keyField(),r))}return e.ce}function Yt(t){const e=X(t);return e.le||(e.le=Z1(e,Xs(t))),e.le}function Z1(t,e){if(t.limitType==="F")return Zd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ii(s.field,i)});const n=t.endAt?new na(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new na(t.startAt.position,t.startAt.inclusive):null;return Zd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Pl(t,e){const n=t.filters.concat([e]);return new As(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function kl(t,e,n){return new As(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ha(t,e){return Ku(Yt(t),Yt(e))&&t.limitType===e.limitType}function m_(t){return`${Wu(Yt(t))}|lt:${t.limitType}`}function Fr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>d_(s)).join(", ")}]`),ja(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>hs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>hs(s)).join(",")),`Target(${r})`}(Yt(t))}; limitType=${t.limitType})`}function za(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Xs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Jd(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Xs(r),s)||r.endAt&&!function(o,a,c){const l=Jd(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Xs(r),s))}(t,e)}function eb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function g_(t){return(e,n)=>{let r=!1;for(const s of Xs(t)){const i=tb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function tb(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?us(c,l):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return i_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=new Se(q.comparator);function pn(){return nb}const __=new Se(q.comparator);function Fs(...t){let e=__;for(const n of t)e=e.insert(n.key,n);return e}function y_(t){let e=__;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function hr(){return Zs()}function v_(){return Zs()}function Zs(){return new bs(t=>t.toString(),(t,e)=>t.isEqual(e))}const rb=new Se(q.comparator),sb=new Qe(q.comparator);function ie(...t){let e=sb;for(const n of t)e=e.add(n);return e}const ib=new Qe(ue);function ob(){return ib}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ta(e)?"-0":e}}function w_(t){return{integerValue:""+t}}function I_(t,e){return F1(e)?w_(e):E_(t,e)}/**
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
 */class Wa{constructor(){this._=void 0}}function ab(t,e,n){return t instanceof Ti?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&qu(i)&&(i=Hu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ds?A_(t,e):t instanceof fs?b_(t,e):function(s,i){const o=T_(s,i),a=tf(o)+tf(s.Pe);return Rl(o)&&Rl(s.Pe)?w_(a):E_(s.serializer,a)}(t,e)}function cb(t,e,n){return t instanceof ds?A_(t,e):t instanceof fs?b_(t,e):n}function T_(t,e){return t instanceof Ai?function(r){return Rl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ti extends Wa{}class ds extends Wa{constructor(e){super(),this.elements=e}}function A_(t,e){const n=R_(e);for(const r of t.elements)n.some(s=>Zt(s,r))||n.push(r);return{arrayValue:{values:n}}}class fs extends Wa{constructor(e){super(),this.elements=e}}function b_(t,e){let n=R_(e);for(const r of t.elements)n=n.filter(s=>!Zt(s,r));return{arrayValue:{values:n}}}class Ai extends Wa{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function tf(t){return Ve(t.integerValue||t.doubleValue)}function R_(t){return zu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n){this.field=e,this.transform=n}}function lb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ds&&s instanceof ds||r instanceof fs&&s instanceof fs?ls(r.elements,s.elements,Zt):r instanceof Ai&&s instanceof Ai?Zt(r.Pe,s.Pe):r instanceof Ti&&s instanceof Ti}(t.transform,e.transform)}class ub{constructor(e,n){this.version=e,this.transformResults=n}}class mt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mt}static exists(e){return new mt(void 0,e)}static updateTime(e){return new mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Oo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ga{}function S_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Qa(t.key,mt.none()):new Ki(t.key,t.data,mt.none());{const n=t.data,r=ft.empty();let s=new Qe(Ke.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Qn(t.key,r,new wt(s.toArray()),mt.none())}}function hb(t,e,n){t instanceof Ki?function(s,i,o){const a=s.value.clone(),c=rf(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Qn?function(s,i,o){if(!Oo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=rf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(C_(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ei(t,e,n,r){return t instanceof Ki?function(i,o,a,c){if(!Oo(i.precondition,o))return a;const l=i.value.clone(),u=sf(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qn?function(i,o,a,c){if(!Oo(i.precondition,o))return a;const l=sf(i.fieldTransforms,c,o),u=o.data;return u.setAll(C_(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Oo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function db(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=T_(r.transform,s||null);i!=null&&(n===null&&(n=ft.empty()),n.set(r.field,i))}return n||null}function nf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ls(r,s,(i,o)=>lb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ki extends Ga{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qn extends Ga{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function C_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function rf(t,e,n){const r=new Map;ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,cb(o,a,n[s]))}return r}function sf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ab(i,o,e))}return r}class Qa extends Ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fb extends Ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&hb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ei(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ei(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=v_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=S_(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&ls(this.mutations,e.mutations,(n,r)=>nf(n,r))&&ls(this.baseMutations,e.baseMutations,(n,r)=>nf(n,r))}}class Gu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length);let s=function(){return rb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Gu(e,n,r,s)}}/**
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
 */class mb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,ae;function _b(t){switch(t){default:return Q();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function P_(t){if(t===void 0)return fn("GRPC error has no .code"),A.UNKNOWN;switch(t){case Oe.OK:return A.OK;case Oe.CANCELLED:return A.CANCELLED;case Oe.UNKNOWN:return A.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return A.INTERNAL;case Oe.UNAVAILABLE:return A.UNAVAILABLE;case Oe.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Oe.NOT_FOUND:return A.NOT_FOUND;case Oe.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Oe.ABORTED:return A.ABORTED;case Oe.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Oe.DATA_LOSS:return A.DATA_LOSS;default:return Q()}}(ae=Oe||(Oe={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function yb(){return new TextEncoder}/**
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
 */const vb=new Jr([4294967295,4294967295],0);function of(t){const e=yb().encode(t),n=new I1;return n.update(e),new Uint8Array(n.digest())}function af(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Jr([n,r],0),new Jr([s,i],0)]}class Qu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Us(`Invalid padding: ${n}`);if(r<0)throw new Us(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Us(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Us(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Jr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Jr.fromNumber(r)));return s.compare(vb)===1&&(s=new Jr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=of(e),[r,s]=af(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Qu(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=of(e),[r,s]=af(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Gi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ya(J.min(),s,new Se(ue),pn(),ie())}}class Gi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Gi(r,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class k_{constructor(e,n){this.targetId=e,this.me=n}}class D_{constructor(e,n,r=at.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class cf{constructor(){this.fe=0,this.ge=uf(),this.pe=at.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ie(),n=ie(),r=ie();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q()}}),new Gi(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=uf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Eb{constructor(e){this.Le=e,this.Be=new Map,this.ke=pn(),this.qe=lf(),this.Qe=new Se(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Cl(i))if(r===0){const o=new q(i.path);this.Ue(n,o,tt.newNoDocument(o,J.min()))}else ve(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),c=a?this.Xe(a,e,o):1;if(c!==0){this.je(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,l)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=wr(r).toUint8Array()}catch(c){if(c instanceof o_)return cs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Qu(o,s,i)}catch(c){return cs(c instanceof Us?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&Cl(a.target)){const c=new q(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,tt.newNoDocument(c,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=ie();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Je(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ya(e,n,this.Qe,this.ke,r);return this.ke=pn(),this.qe=lf(),this.Qe=new Se(ue),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new cf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Qe(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new cf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function lf(){return new Se(q.comparator)}function uf(){return new Se(q.comparator)}const wb={asc:"ASCENDING",desc:"DESCENDING"},Ib={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Tb={and:"AND",or:"OR"};class Ab{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Dl(t,e){return t.useProto3Json||ja(e)?e:{value:e}}function ra(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function N_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bb(t,e){return ra(t,e.toTimestamp())}function Jt(t){return ve(!!t),J.fromTimestamp(function(n){const r=$n(n);return new Ie(r.seconds,r.nanos)}(t))}function Yu(t,e){return Nl(t,e).canonicalString()}function Nl(t,e){const n=function(s){return new Te(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function O_(t){const e=Te.fromString(t);return ve(F_(e)),e}function Ol(t,e){return Yu(t.databaseId,e.path)}function xc(t,e){const n=O_(e);if(n.get(1)!==t.databaseId.projectId)throw new x(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(M_(n))}function V_(t,e){return Yu(t.databaseId,e)}function Rb(t){const e=O_(t);return e.length===4?Te.emptyPath():M_(e)}function Vl(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function M_(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function hf(t,e,n){return{name:Ol(t,e),fields:n.value.mapValue.fields}}function Sb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(ve(u===void 0||typeof u=="string"),at.fromBase64String(u||"")):(ve(u===void 0||u instanceof Buffer||u instanceof Uint8Array),at.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?A.UNKNOWN:P_(l.code);return new x(u,l.message||"")}(o);n=new D_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xc(t,r.document.name),i=Jt(r.document.updateTime),o=r.document.createTime?Jt(r.document.createTime):J.min(),a=new ft({mapValue:{fields:r.document.fields}}),c=tt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Vo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xc(t,r.document),i=r.readTime?Jt(r.readTime):J.min(),o=tt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Vo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xc(t,r.document),i=r.removedTargetIds||[];n=new Vo([],i,s,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new gb(s,i),a=r.targetId;n=new k_(a,o)}}return n}function Cb(t,e){let n;if(e instanceof Ki)n={update:hf(t,e.key,e.value)};else if(e instanceof Qa)n={delete:Ol(t,e.key)};else if(e instanceof Qn)n={update:hf(t,e.key,e.data),updateMask:Lb(e.fieldMask)};else{if(!(e instanceof fb))return Q();n={verify:Ol(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ti)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ds)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof fs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ai)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:bb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(t,e.precondition)),n}function Pb(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Jt(s.updateTime):Jt(i);return o.isEqual(J.min())&&(o=Jt(i)),new ub(o,s.transformResults||[])}(n,e))):[]}function kb(t,e){return{documents:[V_(t,e.path)]}}function Db(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=V_(t,s);const i=function(l){if(l.length!==0)return L_(Lt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:Ur(d.field),direction:Vb(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Dl(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{_t:n,parent:s}}function Nb(t){let e=Rb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=x_(h);return d instanceof Lt&&u_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(T){return new Ii($r(T.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,ja(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new na(p,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,p=h.values||[];return new na(p,d)}(n.endAt)),X1(e,s,o,i,a,"F",c,l)}function Ob(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function x_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$r(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=$r(n.unaryFilter.field);return Le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=$r(n.unaryFilter.field);return Le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=$r(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Le.create($r(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Lt.create(n.compositeFilter.filters.map(r=>x_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function Vb(t){return wb[t]}function Mb(t){return Ib[t]}function xb(t){return Tb[t]}function Ur(t){return{fieldPath:t.canonicalString()}}function $r(t){return Ke.fromServerFormat(t.fieldPath)}function L_(t){return t instanceof Le?function(n){if(n.op==="=="){if(Yd(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NAN"}};if(Qd(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Yd(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NAN"}};if(Qd(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(n.field),op:Mb(n.op),value:n.value}}}(t):t instanceof Lt?function(n){const r=n.getFilters().map(s=>L_(s));return r.length===1?r[0]:{compositeFilter:{op:xb(n.op),filters:r}}}(t):Q()}function Lb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function F_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n,r,s,i=J.min(),o=J.min(),a=at.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.ut=e}}function Ub(t){const e=Nb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kl(e,e.limit,"L"):e}/**
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
 */class $b{constructor(){this.on=new Bb}addToCollectionParentIndex(e,n){return this.on.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Un.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Un.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class Bb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Qe(Te.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Qe(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new ps(0)}static Nn(){return new ps(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this.changes=new bs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
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
 */class qb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ei(r.mutation,s,wt.empty(),Ie.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const s=hr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Fs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=hr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=pn();const o=Zs(),a=function(){return Zs()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Qn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),ei(u.mutation,l,u.mutation.getFieldMask(),Ie.now())):o.set(l.key,wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new qb(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Zs();let s=new Se((o,a)=>o-a),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||wt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ie()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=v_();u.forEach(d=>{if(!i.has(d)){const p=S_(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):p_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):C.resolve(hr());let a=-1,c=i;return o.next(l=>C.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?C.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ie())).next(u=>({batchId:a,changes:y_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let s=Fs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Fs();return this.indexManager.getCollectionParents(e,i).next(a=>C.forEach(a,c=>{const l=function(h,d){return new As(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,tt.newInvalidDocument(u)))});let a=Fs();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&ei(u.mutation,l,wt.empty(),Ie.now()),za(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return C.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Jt(s.createTime)}}(n)),C.resolve()}getNamedQuery(e,n){return C.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:Ub(s.bundledQuery),readTime:Jt(s.readTime)}}(n)),C.resolve()}}/**
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
 */class Wb{constructor(){this.overlays=new Se(q.comparator),this.lr=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=hr();return C.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const s=hr(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return C.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Se((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=hr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=hr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return C.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mb(n,r));let i=this.lr.get(n);i===void 0&&(i=ie(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this.hr=new Qe($e.Pr),this.Ir=new Qe($e.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new $e(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new q(new Te([])),r=new $e(n,e),s=new $e(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new q(new Te([])),r=new $e(n,e),s=new $e(n,e+1);let i=ie();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new $e(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return q.comparator(e.key,n.key)||ue(e.gr,n.gr)}static Tr(e,n){return ue(e.gr,n.gr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Qe($e.Pr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pb(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new $e(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),s=new $e(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(ue);return n.forEach(s=>{const i=new $e(s,0),o=new $e(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),C.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const o=new $e(new q(i),0);let a=new Qe(ue);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),C.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ve(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return C.forEach(n.mutations,s=>{const i=new $e(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new $e(n,0),s=this.yr.firstAfterOrEqual(r);return C.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e){this.Cr=e,this.docs=function(){return new Se(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=pn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():tt.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=pn();const o=n.path,a=new q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||V1(O1(u),r)<=0||(s.has(u.key)||za(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Q()}vr(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Qb(this)}getSize(e){return C.resolve(this.size)}}class Qb extends jb{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.persistence=e,this.Fr=new bs(n=>Wu(n),Ku),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Ju,this.targetCount=0,this.Nr=ps.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),C.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new ps(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.kn(n),C.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n){this.Lr={},this.overlays={},this.Br=new ju(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new Yb(this),this.indexManager=new $b,this.remoteDocumentCache=function(s){return new Gb(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Fb(n),this.Kr=new zb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Wb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new Kb(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const s=new Xb(this.Br.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return C.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class Xb extends x1{constructor(e){super(),this.currentSequenceNumber=e}}class Xu{constructor(e){this.persistence=e,this.Gr=new Ju,this.zr=null}static jr(e){return new Xu(e)}get Hr(){if(this.zr)return this.zr;throw Q()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),C.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Hr,r=>{const s=q.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return C.or([()=>C.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=ie(),s=ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Zu(e,n.fromCache,r,s)}}/**
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
 */class Zb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class eR{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return xE()?8:L1(Ye())>0?6:4}()}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Zb;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(Ns()<=oe.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Fr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),C.resolve()):(Ns()<=oe.DEBUG&&L("QueryEngine","Query:",Fr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Ns()<=oe.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Fr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(n))):C.resolve())}zi(e,n){if(ef(n))return C.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=kl(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ie(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,kl(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,r,s){return ef(n)||s.isEqual(J.min())?C.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?C.resolve(null):(Ns()<=oe.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fr(n)),this.Xi(e,o,n,N1(s,-1)).next(a=>a))})}Yi(e,n){let r=new Qe(g_(e));return n.forEach((s,i)=>{za(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return Ns()<=oe.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Fr(n)),this.Gi.getDocumentsMatchingQuery(e,n,Un.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new Se(ue),this.ns=new bs(i=>Wu(i),Ku),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Hb(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function nR(t,e,n,r){return new tR(t,e,n,r)}async function U_(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ie();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function rR(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let p=C.resolve();return d.forEach(T=>{p=p.next(()=>u.getEntry(c,T)).next(E=>{const R=l.docVersions.get(T);ve(R!==null),E.version.compareTo(R)<0&&(h.applyToRemoteDocument(E,l),E.isValidDocument()&&(E.setReadTime(l.commitVersion),u.addEntry(E)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ie();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function $_(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function sR(t,e){const n=X(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(at.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(E,R,U){return E.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(d,p,u)&&a.push(n.qr.updateTargetData(i,p))});let c=pn(),l=ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(iR(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!r.isEqual(J.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=s,i))}function iR(t,e,n){let r=ie(),s=ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=pn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function oR(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aR(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,C.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new kn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Ml(t,e,n){const r=X(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Wi(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function df(t,e,n){const r=X(t);let s=J.min(),i=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=X(c),d=h.ns.get(u);return d!==void 0?C.resolve(h.ts.get(d)):h.qr.getTargetData(l,u)}(r,o,Yt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:ie())).next(a=>(cR(r,eb(e),a),{documents:a,ls:i})))}function cR(t,e,n){let r=t.rs.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class ff{constructor(){this.activeTargetIds=ob()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lR{constructor(){this.eo=new ff,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new ff,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uR{ro(e){}shutdown(){}}/**
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
 */class pf{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let yo=null;function Lc(){return yo===null?yo=function(){return 268435456+Math.round(2147483648*Math.random())}():yo++,"0x"+yo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.lo()}send(e){this.co(e)}Vo(){this.Po()}mo(){this.To()}fo(e){this.Ao(e)}po(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection";class fR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.yo=r+"://"+n.host,this.wo=`projects/${s}/databases/${i}`,this.So=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get bo(){return!1}Do(n,r,s,i,o){const a=Lc(),c=this.Co(n,r.toUriEncodedString());L("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(l,i,o),this.Fo(n,c,l,s).then(u=>(L("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw cs("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Mo(n,r,s,i,o,a){return this.Do(n,r,s,i,o)}vo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ts}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Co(n,r){const s=hR[n];return`${this.yo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Fo(e,n,r,s){const i=Lc();return new Promise((o,a)=>{const c=new w1;c.setWithCredentials(!0),c.listenOnce(y1.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Mc.NO_ERROR:const u=c.getResponseJson();L(Xe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Mc.TIMEOUT:L(Xe,`RPC '${e}' ${i} timed out`),a(new x(A.DEADLINE_EXCEEDED,"Request time out"));break;case Mc.HTTP_ERROR:const h=c.getStatus();if(L(Xe,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const T=function(R){const U=R.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(U)>=0?U:A.UNKNOWN}(p.status);a(new x(T,p.message))}else a(new x(A.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new x(A.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{L(Xe,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);L(Xe,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}xo(e,n,r){const s=Lc(),i=[this.yo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=g1(),a=_1(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new E1({})),this.vo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");L(Xe,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const T=new dR({co:R=>{p?L(Xe,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(d||(L(Xe,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),L(Xe,`RPC '${e}' stream ${s} sending:`,R),h.send(R))},lo:()=>h.close()}),E=(R,U,K)=>{R.listen(U,H=>{try{K(H)}catch(V){setTimeout(()=>{throw V},0)}})};return E(h,mo.EventType.OPEN,()=>{p||(L(Xe,`RPC '${e}' stream ${s} transport opened.`),T.Vo())}),E(h,mo.EventType.CLOSE,()=>{p||(p=!0,L(Xe,`RPC '${e}' stream ${s} transport closed`),T.fo())}),E(h,mo.EventType.ERROR,R=>{p||(p=!0,cs(Xe,`RPC '${e}' stream ${s} transport errored:`,R),T.fo(new x(A.UNAVAILABLE,"The operation could not be completed")))}),E(h,mo.EventType.MESSAGE,R=>{var U;if(!p){const K=R.data[0];ve(!!K);const H=K,V=H.error||((U=H[0])===null||U===void 0?void 0:U.error);if(V){L(Xe,`RPC '${e}' stream ${s} received error:`,V);const B=V.status;let N=function(_e){const he=Oe[_e];if(he!==void 0)return P_(he)}(B),z=V.message;N===void 0&&(N=A.INTERNAL,z="Unknown error status: "+B+" with message "+V.message),p=!0,T.fo(new x(N,z)),h.close()}else L(Xe,`RPC '${e}' stream ${s} received:`,K),T.po(K)}}),E(a,v1.STAT_EVENT,R=>{R.stat===qd.PROXY?L(Xe,`RPC '${e}' stream ${s} detected buffering proxy`):R.stat===qd.NOPROXY&&L(Xe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{T.mo()},0),T}}function Fc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t){return new Ab(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Oo=r,this.No=s,this.Lo=i,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(e){this.cancel();const n=Math.floor(this.Bo+this.$o()),r=Math.max(0,Date.now()-this.qo),s=Math.max(0,n-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.qo=Date.now(),e())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){this.ko!==null&&(this.ko.skipDelay(),this.ko=null)}cancel(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n,r,s,i,o,a,c){this.si=e,this.Wo=r,this.Go=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new B_(e,n)}Yo(){return this.state===1||this.state===5||this.Zo()}Zo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&this.jo===null&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,()=>this.n_()))}r_(e){this.i_(),this.stream.send(e)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(e,n){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,e!==4?this.Jo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(fn(n.toString()),fn("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.o_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}o_(){}auth(){this.state=1;const e=this.__(this.zo),n=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.zo===n&&this.a_(r,s)},r=>{e(()=>{const s=new x(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.u_(s)})})}a_(e,n){const r=this.__(this.zo);this.stream=this.c_(e,n),this.stream.ho(()=>{r(()=>this.listener.ho())}),this.stream.Io(()=>{r(()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,()=>(this.Zo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.u_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Xo(){this.state=5,this.Jo.Ko(async()=>{this.state=0,this.start()})}u_(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}__(e){return n=>{this.si.enqueueAndForget(()=>this.zo===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pR extends j_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}c_(e,n){return this.connection.xo("Listen",e,n)}onMessage(e){this.Jo.reset();const n=Sb(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Jt(o.readTime):J.min()}(e);return this.listener.l_(n,r)}h_(e){const n={};n.database=Vl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Cl(c)?{documents:kb(i,c)}:{query:Db(i,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=N_(i,o.resumeToken);const l=Dl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=ra(i,o.snapshotVersion.toTimestamp());const l=Dl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=Ob(this.serializer,e);r&&(n.labels=r),this.r_(n)}P_(e){const n={};n.database=Vl(this.serializer),n.removeTarget=e,this.r_(n)}}class mR extends j_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(e,n){return this.connection.xo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.I_){this.Jo.reset();const n=Pb(e.writeResults,e.commitTime),r=Jt(e.commitTime);return this.listener.d_(r,n)}return ve(!e.writeResults||e.writeResults.length===0),this.I_=!0,this.listener.A_()}R_(){const e={};e.database=Vl(this.serializer),this.r_(e)}E_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Cb(this.serializer,r))};this.r_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.V_=!1}m_(){if(this.V_)throw new x(A.FAILED_PRECONDITION,"The client has already been terminated.")}Do(e,n,r,s){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Do(e,Nl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(A.UNKNOWN,i.toString())})}Mo(e,n,r,s,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,Nl(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(A.UNKNOWN,o.toString())})}terminate(){this.V_=!0,this.connection.terminate()}}class _R{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(fn(n),this.y_=!1):L("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.ro(o=>{r.enqueueAndForget(async()=>{Sr(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=X(c);l.M_.add(4),await Qi(l),l.N_.set("Unknown"),l.M_.delete(4),await Xa(l)}(this))})}),this.N_=new _R(r,s)}}async function Xa(t){if(Sr(t))for(const e of t.x_)await e(!0)}async function Qi(t){for(const e of t.x_)await e(!1)}function q_(t,e){const n=X(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),rh(n)?nh(n):Rs(n).Zo()&&th(n,e))}function eh(t,e){const n=X(t),r=Rs(n);n.F_.delete(e),r.Zo()&&H_(n,e),n.F_.size===0&&(r.Zo()?r.t_():Sr(n)&&n.N_.set("Unknown"))}function th(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Rs(t).h_(e)}function H_(t,e){t.L_.xe(e),Rs(t).P_(e)}function nh(t){t.L_=new Eb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Rs(t).start(),t.N_.w_()}function rh(t){return Sr(t)&&!Rs(t).Yo()&&t.F_.size>0}function Sr(t){return X(t).M_.size===0}function z_(t){t.L_=void 0}async function vR(t){t.N_.set("Online")}async function ER(t){t.F_.forEach((e,n)=>{th(t,e)})}async function wR(t,e){z_(t),rh(t)?(t.N_.D_(e),nh(t)):t.N_.set("Unknown")}async function IR(t,e,n){if(t.N_.set("Online"),e instanceof D_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.F_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.F_.delete(a),s.L_.removeTarget(a))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await sa(t,r)}else if(e instanceof Vo?t.L_.Ke(e):e instanceof k_?t.L_.He(e):t.L_.We(e),!n.isEqual(J.min()))try{const r=await $_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.L_.rt(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.F_.get(l);u&&i.F_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.F_.get(c);if(!u)return;i.F_.set(c,u.withResumeToken(at.EMPTY_BYTE_STRING,u.snapshotVersion)),H_(i,c);const h=new kn(u.target,c,l,u.sequenceNumber);th(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await sa(t,r)}}async function sa(t,e,n){if(!Wi(e))throw e;t.M_.add(1),await Qi(t),t.N_.set("Offline"),n||(n=()=>$_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Xa(t)})}function W_(t,e){return e().catch(n=>sa(t,n,e))}async function Za(t){const e=X(t),n=Bn(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;TR(e);)try{const s=await oR(e.localStore,r);if(s===null){e.v_.length===0&&n.t_();break}r=s.batchId,AR(e,s)}catch(s){await sa(e,s)}K_(e)&&G_(e)}function TR(t){return Sr(t)&&t.v_.length<10}function AR(t,e){t.v_.push(e);const n=Bn(t);n.Zo()&&n.T_&&n.E_(e.mutations)}function K_(t){return Sr(t)&&!Bn(t).Yo()&&t.v_.length>0}function G_(t){Bn(t).start()}async function bR(t){Bn(t).R_()}async function RR(t){const e=Bn(t);for(const n of t.v_)e.E_(n.mutations)}async function SR(t,e,n){const r=t.v_.shift(),s=Gu.from(r,e,n);await W_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Za(t)}async function CR(t,e){e&&Bn(t).T_&&await async function(r,s){if(function(o){return _b(o)&&o!==A.ABORTED}(s.code)){const i=r.v_.shift();Bn(r).e_(),await W_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Za(r)}}(t,e),K_(t)&&G_(t)}async function mf(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=Sr(n);n.M_.add(3),await Qi(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Xa(n)}async function PR(t,e){const n=X(t);e?(n.M_.delete(2),await Xa(n)):e||(n.M_.add(2),await Qi(n),n.N_.set("Unknown"))}function Rs(t){return t.B_||(t.B_=function(n,r,s){const i=X(n);return i.m_(),new pR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:vR.bind(null,t),Io:ER.bind(null,t),Eo:wR.bind(null,t),l_:IR.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.e_(),rh(t)?nh(t):t.N_.set("Unknown")):(await t.B_.stop(),z_(t))})),t.B_}function Bn(t){return t.k_||(t.k_=function(n,r,s){const i=X(n);return i.m_(),new mR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:()=>Promise.resolve(),Io:bR.bind(null,t),Eo:CR.bind(null,t),A_:RR.bind(null,t),d_:SR.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.e_(),await Za(t)):(await t.k_.stop(),t.v_.length>0&&(L("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new sh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ih(t,e){if(fn("AsyncQueue",`${e}: ${t}`),Wi(t))return new x(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Fs(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Xr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(){this.q_=new Se(q.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):Q():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ms{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ms(e,n,Xr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class DR{constructor(){this.queries=new bs(e=>m_(e),Ha),this.onlineState="Unknown",this.z_=new Set}}async function Q_(t,e){const n=X(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new kR,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=ih(o,`Initialization of query '${Fr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&oh(n)}async function Y_(t,e){const n=X(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function NR(t,e){const n=X(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.U_)a.H_(s)&&(r=!0);o.K_=s}}r&&oh(n)}function OR(t,e,n){const r=X(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function oh(t){t.z_.forEach(e=>{e.next()})}var xl,_f;(_f=xl||(xl={})).J_="default",_f.Cache="cache";class J_{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ms(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==xl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.key=e}}class Z_{constructor(e){this.key=e}}class VR{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ie(),this.mutatedKeys=ie(),this.Ia=g_(e),this.Ta=new Xr(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new gf,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=za(this.query,h)?h:null,T=!!d&&this.mutatedKeys.has(d.key),E=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let R=!1;d&&p?d.data.isEqual(p.data)?T!==E&&(r.track({type:3,doc:p}),R=!0):this.Ra(d,p)||(r.track({type:2,doc:p}),R=!0,(c&&this.Ia(p,c)>0||l&&this.Ia(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),R=!0):d&&!p&&(r.track({type:1,doc:d}),R=!0,(c||l)&&(a=!0)),R&&(p?(o=o.add(p),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Ta:o,Aa:r,Zi:a,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((u,h)=>function(p,T){const E=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return E(p)-E(T)}(u.type,h.type)||this.Ia(u.doc,h.doc)),this.Va(r),s=s!=null&&s;const a=n&&!s?this.ma():[],c=this.Pa.size===0&&this.current&&!s?1:0,l=c!==this.ha;return this.ha=c,o.length!==0||l?{snapshot:new ms(this.query,e.Ta,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new gf,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ie(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new Z_(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new X_(r))}),n}pa(e){this.la=e.ls,this.Pa=ie();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return ms.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class MR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xR{constructor(e){this.key=e,this.wa=!1}}class LR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new bs(a=>m_(a),Ha),this.Da=new Map,this.Ca=new Set,this.va=new Se(q.comparator),this.Fa=new Map,this.Ma=new Ju,this.xa={},this.Oa=new Map,this.Na=ps.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function FR(t,e,n=!0){const r=iy(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await ey(r,e,n,!0),s}async function UR(t,e){const n=iy(t);await ey(n,e,!0,!1)}async function ey(t,e,n,r){const s=await aR(t.localStore,Yt(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await $R(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&q_(t.remoteStore,s),a}async function $R(t,e,n,r,s){t.Ba=(h,d,p)=>async function(E,R,U,K){let H=R.view.da(U);H.Zi&&(H=await df(E.localStore,R.query,!1).then(({documents:z})=>R.view.da(z,H)));const V=K&&K.targetChanges.get(R.targetId),B=K&&K.targetMismatches.get(R.targetId)!=null,N=R.view.applyChanges(H,E.isPrimaryClient,V,B);return vf(E,R.targetId,N.fa),N.snapshot}(t,h,d,p);const i=await df(t.localStore,e,!0),o=new VR(e,i.ls),a=o.da(i.documents),c=Gi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);vf(t,n,l.fa);const u=new MR(e,n,o);return t.ba.set(e,u),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),l.snapshot}async function BR(t,e,n){const r=X(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!Ha(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ml(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&eh(r.remoteStore,s.targetId),Ll(r,s.targetId)}).catch(zi)):(Ll(r,s.targetId),await Ml(r.localStore,s.targetId,!0))}async function jR(t,e){const n=X(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),eh(n.remoteStore,r.targetId))}async function qR(t,e,n){const r=YR(t);try{const s=await function(o,a){const c=X(o),l=Ie.now(),u=a.reduce((p,T)=>p.add(T.key),ie());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let T=pn(),E=ie();return c.ss.getEntries(p,u).next(R=>{T=R,T.forEach((U,K)=>{K.isValidDocument()||(E=E.add(U))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,T)).next(R=>{h=R;const U=[];for(const K of a){const H=db(K,h.get(K.key).overlayedDocument);H!=null&&U.push(new Qn(K.key,H,a_(H.value.mapValue),mt.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,U,a)}).next(R=>{d=R;const U=R.applyToLocalDocumentSet(h,E);return c.documentOverlayCache.saveOverlays(p,R.batchId,U)})}).then(()=>({batchId:d.batchId,changes:y_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.xa[o.currentUser.toKey()];l||(l=new Se(ue)),l=l.insert(a,c),o.xa[o.currentUser.toKey()]=l}(r,s.batchId,n),await Yi(r,s.changes),await Za(r.remoteStore)}catch(s){const i=ih(s,"Failed to persist write");n.reject(i)}}async function ty(t,e){const n=X(t);try{const r=await sR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?ve(o.wa):s.removedDocuments.size>0&&(ve(o.wa),o.wa=!1))}),await Yi(n,r,e)}catch(r){await zi(r)}}function yf(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const a=o.view.j_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=X(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.U_)d.j_(a)&&(l=!0)}),l&&oh(c)}(r.eventManager,e),s.length&&r.Sa.l_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HR(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let o=new Se(q.comparator);o=o.insert(i,tt.newNoDocument(i,J.min()));const a=ie().add(i),c=new Ya(J.min(),new Map,new Se(ue),o,a);await ty(r,c),r.va=r.va.remove(i),r.Fa.delete(e),ah(r)}else await Ml(r.localStore,e,!1).then(()=>Ll(r,e,n)).catch(zi)}async function zR(t,e){const n=X(t),r=e.batch.batchId;try{const s=await rR(n.localStore,e);ry(n,r,null),ny(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yi(n,s)}catch(s){await zi(s)}}async function WR(t,e,n){const r=X(t);try{const s=await function(o,a){const c=X(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(ve(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);ry(r,e,n),ny(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yi(r,s)}catch(s){await zi(s)}}function ny(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function ry(t,e,n){const r=X(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function Ll(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Rr(e).forEach(r=>{t.Ma.containsKey(r)||sy(t,r)})}function sy(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(eh(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),ah(t))}function vf(t,e,n){for(const r of n)r instanceof X_?(t.Ma.addReference(r.key,e),KR(t,r)):r instanceof Z_?(L("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||sy(t,r.key)):Q()}function KR(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(L("SyncEngine","New document in limbo: "+n),t.Ca.add(r),ah(t))}function ah(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new q(Te.fromString(e)),r=t.Na.next();t.Fa.set(r,new xR(n)),t.va=t.va.insert(n,r),q_(t.remoteStore,new kn(Yt(qa(n.path)),r,"TargetPurposeLimboResolution",ju.oe))}}async function Yi(t,e,n){const r=X(t),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,c)=>{o.push(r.Ba(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Zu.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Sa.l_(s),await async function(c,l){const u=X(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>C.forEach(l,d=>C.forEach(d.ki,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>C.forEach(d.qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Wi(h))throw h;L("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const p=u.ts.get(d),T=p.snapshotVersion,E=p.withLastLimboFreeSnapshotVersion(T);u.ts=u.ts.insert(d,E)}}}(r.localStore,i))}async function GR(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await U_(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(a=>{a.forEach(c=>{c.reject(new x(A.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yi(n,r._s)}}function QR(t,e){const n=X(t),r=n.Fa.get(e);if(r&&r.wa)return ie().add(r.key);{let s=ie();const i=n.Da.get(e);if(!i)return s;for(const o of i){const a=n.ba.get(o);s=s.unionWith(a.view.Ea)}return s}}function iy(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ty.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HR.bind(null,e),e.Sa.l_=NR.bind(null,e.eventManager),e.Sa.ka=OR.bind(null,e.eventManager),e}function YR(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WR.bind(null,e),e}class Ef{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ja(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return nR(this.persistence,new eR,e.initialUser,this.serializer)}createPersistence(e){return new Jb(Xu.jr,this.serializer)}createSharedClientState(e){return new lR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class JR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GR.bind(null,this.syncEngine),await PR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DR}()}createDatastore(e){const n=Ja(e.databaseInfo.databaseId),r=function(i){return new fR(i)}(e.databaseInfo);return function(i,o,a,c){return new gR(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new yR(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>yf(this.syncEngine,n,0),function(){return pf.D()?new pf:new uR}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new LR(s,i,o,a,c,l);return u&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=X(r);L("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Qi(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):fn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ze.UNAUTHENTICATED,this.clientId=s_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{L("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(L("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ih(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Uc(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await U_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function wf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eS(t);L("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>mf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>mf(e.remoteStore,s)),t._onlineComponents=e}function ZR(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function eS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await Uc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ZR(n))throw n;cs("Error using user provided cache. Falling back to memory cache: "+n),await Uc(t,new Ef)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await Uc(t,new Ef);return t._offlineComponents}async function ay(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await wf(t,t._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await wf(t,new JR))),t._onlineComponents}function tS(t){return ay(t).then(e=>e.syncEngine)}async function Fl(t){const e=await ay(t),n=e.eventManager;return n.onListen=FR.bind(null,e.syncEngine),n.onUnlisten=BR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=UR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=jR.bind(null,e.syncEngine),n}function nS(t,e,n={}){const r=new xn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new oy({next:d=>{o.enqueueAndForget(()=>Y_(i,h));const p=d.docs.has(a);!p&&d.fromCache?l.reject(new x(A.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&c&&c.source==="server"?l.reject(new x(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new J_(qa(a.path),u,{includeMetadataChanges:!0,ra:!0});return Q_(i,h)}(await Fl(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function cy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t,e,n){if(!n)throw new x(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rS(t,e,n,r){if(e===!0&&r===!0)throw new x(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tf(t){if(!q.isDocumentKey(t))throw new x(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Af(t){if(q.isDocumentKey(t))throw new x(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ec(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function St(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ec(t);throw new x(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new x(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new x(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new x(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class tc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new T1;switch(r.type){case"firstParty":return new S1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=If.get(n);r&&(L("ComponentProvider","Removing Datastore"),If.delete(n),r.terminate())}(this),Promise.resolve()}}function sS(t,e,n,r={}){var s;const i=(t=St(t,tc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&cs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ze.MOCK_USER;else{a=kE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new x(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ze(l)}t._authCredentials=new A1(new r_(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cr(this.firestore,e,this._query)}}class ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class Ln extends Cr{constructor(e,n,r){super(e,n,qa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new q(e))}withConverter(e){return new Ln(this.firestore,e,this._path)}}function jt(t,e,...n){if(t=ke(t),ly("collection","path",e),t instanceof tc){const r=Te.fromString(e,...n);return Af(r),new Ln(t,null,r)}{if(!(t instanceof ot||t instanceof Ln))throw new x(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Af(r),new Ln(t.firestore,null,r)}}function He(t,e,...n){if(t=ke(t),arguments.length===1&&(e=s_.newId()),ly("doc","path",e),t instanceof tc){const r=Te.fromString(e,...n);return Tf(r),new ot(t,null,new q(r))}{if(!(t instanceof ot||t instanceof Ln))throw new x(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Tf(r),new ot(t.firestore,t instanceof Ln?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new B_(this,"async_queue_retry"),this.hu=()=>{const n=Fc();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Jo.Uo()};const e=Fc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Fc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new xn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(e){if(!Wi(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw fn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=sh.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&Q()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function Rf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class jn extends tc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new iS}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||uy(this),this._firestoreClient.terminate()}}function oS(t,e){const n=typeof t=="object"?t:Em(),r=typeof t=="string"?t:"(default)",s=cu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=CE("firestore");i&&sS(s,...i)}return s}function nc(t){return t._firestoreClient||uy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function uy(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new $1(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,cy(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new XR(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gs(at.fromBase64String(e))}catch(n){throw new x(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new gs(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=/^__.*__$/;class cS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ki(e,this.data,n,this.fieldTransforms)}}class hy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Qn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function dy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class rc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new rc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return ia(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(dy(this.fu)&&aS.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class lS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ja(e)}Fu(e,n,r,s=!1){return new rc({fu:e,methodName:n,vu:r,path:Ke.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sc(t){const e=t._freezeSettings(),n=Ja(t._databaseId);return new lS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fy(t,e,n,r,s,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);fh("Data must be an object, but it was:",o,r);const a=_y(r,o);let c,l;if(i.merge)c=new wt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Ul(e,h,n);if(!o.contains(d))throw new x(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);vy(u,d)||u.push(d)}c=new wt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new cS(new ft(a),c,l)}class ic extends Pr{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ic}}function py(t,e,n){return new rc({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class lh extends Pr{_toFieldTransform(e){return new Ka(e.path,new Ti)}isEqual(e){return e instanceof lh}}class uh extends Pr{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=py(this,e,!0),r=this.Mu.map(i=>kr(i,n)),s=new ds(r);return new Ka(e.path,s)}isEqual(e){return e instanceof uh&&ss(this.Mu,e.Mu)}}class hh extends Pr{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=py(this,e,!0),r=this.Mu.map(i=>kr(i,n)),s=new fs(r);return new Ka(e.path,s)}isEqual(e){return e instanceof hh&&ss(this.Mu,e.Mu)}}class dh extends Pr{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new Ai(e.serializer,I_(e.serializer,this.xu));return new Ka(e.path,n)}isEqual(e){return e instanceof dh&&this.xu===e.xu}}function my(t,e,n,r){const s=t.Fu(1,e,n);fh("Data must be an object, but it was:",s,r);const i=[],o=ft.empty();Rr(r,(c,l)=>{const u=ph(e,c,n);l=ke(l);const h=s.Su(u);if(l instanceof ic)i.push(u);else{const d=kr(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new wt(i);return new hy(o,a,s.fieldTransforms)}function gy(t,e,n,r,s,i){const o=t.Fu(1,e,n),a=[Ul(e,r,n)],c=[s];if(i.length%2!=0)throw new x(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Ul(e,i[d])),c.push(i[d+1]);const l=[],u=ft.empty();for(let d=a.length-1;d>=0;--d)if(!vy(l,a[d])){const p=a[d];let T=c[d];T=ke(T);const E=o.Su(p);if(T instanceof ic)l.push(p);else{const R=kr(T,E);R!=null&&(l.push(p),u.set(p,R))}}const h=new wt(l);return new hy(u,h,o.fieldTransforms)}function uS(t,e,n,r=!1){return kr(n,t.Fu(r?4:3,e))}function kr(t,e){if(yy(t=ke(t)))return fh("Unsupported field value:",e,t),_y(t,e);if(t instanceof Pr)return function(r,s){if(!dy(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=kr(a,s.bu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return I_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ie.fromDate(r);return{timestampValue:ra(s.serializer,i)}}if(r instanceof Ie){const i=new Ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ra(s.serializer,i)}}if(r instanceof ch)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof gs)return{bytesValue:N_(s.serializer,r._byteString)};if(r instanceof ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Yu(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${ec(r)}`)}(t,e)}function _y(t,e){const n={};return i_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(t,(r,s)=>{const i=kr(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function yy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ie||t instanceof ch||t instanceof gs||t instanceof ot||t instanceof Pr)}function fh(t,e,n){if(!yy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ec(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Ul(t,e,n){if((e=ke(e))instanceof Ji)return e._internalPath;if(typeof e=="string")return ph(t,e);throw ia("Field path arguments must be of type string or ",t,!1,void 0,n)}const hS=new RegExp("[~\\*/\\[\\]]");function ph(t,e,n){if(e.search(hS)>=0)throw ia(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ji(...e.split("."))._internalPath}catch{throw ia(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ia(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new x(A.INVALID_ARGUMENT,a+t+c)}function vy(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(oc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dS extends Ey{data(){return super.data()}}function oc(t,e){return typeof e=="string"?ph(t,e):e instanceof Ji?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mh{}class wy extends mh{}function rr(t,e,...n){let r=[];e instanceof mh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof gh).length,a=i.filter(c=>c instanceof ac).length;if(o>1||o>0&&a>0)throw new x(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ac extends wy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ac(e,n,r)}_apply(e){const n=this._parse(e);return Iy(e._query,n),new Cr(e.firestore,e.converter,Pl(e._query,n))}_parse(e){const n=sc(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new x(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Cf(h,u);const p=[];for(const T of h)p.push(Sf(c,i,T));d={arrayValue:{values:p}}}else d=Sf(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Cf(h,u),d=uS(a,o,h,u==="in"||u==="not-in");return Le.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function en(t,e,n){const r=e,s=oc("where",t);return ac._create(s,r,n)}class gh extends mh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new gh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Lt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Iy(o,c),o=Pl(o,c)}(e._query,n),new Cr(e.firestore,e.converter,Pl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _h extends wy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new _h(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new x(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new x(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ii(i,o)}(e._query,this._field,this._direction);return new Cr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new As(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function pS(t,e="asc"){const n=e,r=oc("orderBy",t);return _h._create(r,n)}function Sf(t,e,n){if(typeof(n=ke(n))=="string"){if(n==="")throw new x(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!p_(e)&&n.indexOf("/")!==-1)throw new x(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!q.isDocumentKey(r))throw new x(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gd(t,new q(r))}if(n instanceof ot)return Gd(t,n._key);throw new x(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ec(n)}.`)}function Cf(t,e){if(!Array.isArray(t)||t.length===0)throw new x(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Iy(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class mS{convertValue(e,n="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new ch(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vi(e));default:return null}}convertTimestamp(e){const n=$n(e);return new Ie(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);ve(F_(r));const s=new Ei(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(n)||fn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ay extends Ey{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Mo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(oc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Mo extends Ay{data(e={}){return super.data(e)}}class gS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new $s(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Mo(this._firestore,this._userDataWriter,r.key,r,new $s(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Mo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new $s(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Mo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new $s(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:_S(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _S(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t){t=St(t,ot);const e=St(t.firestore,jn);return nS(nc(e),t._key).then(n=>Ry(e,t,n))}class by extends mS{constructor(e){super(),this.firestore=e}convertBytes(e){return new gs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function Dt(t,e,n){t=St(t,ot);const r=St(t.firestore,jn),s=Ty(t.converter,e,n);return cc(r,[fy(sc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,mt.none())])}function yS(t,e,n,...r){t=St(t,ot);const s=St(t.firestore,jn),i=sc(s);let o;return o=typeof(e=ke(e))=="string"||e instanceof Ji?gy(i,"updateDoc",t._key,e,n,r):my(i,"updateDoc",t._key,e),cc(s,[o.toMutation(t._key,mt.exists(!0))])}function $c(t){return cc(St(t.firestore,jn),[new Qa(t._key,mt.none())])}function Tn(t,...e){var n,r,s;t=ke(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Rf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Rf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof ot)l=St(t.firestore,jn),u=qa(t._key.path),c={next:h=>{e[o]&&e[o](Ry(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=St(t,Cr);l=St(h.firestore,jn),u=h._query;const d=new by(l);c={next:p=>{e[o]&&e[o](new gS(l,d,h,p))},error:e[o+1],complete:e[o+2]},fS(t._query)}return function(d,p,T,E){const R=new oy(E),U=new J_(p,R,T);return d.asyncQueue.enqueueAndForget(async()=>Q_(await Fl(d),U)),()=>{R.$a(),d.asyncQueue.enqueueAndForget(async()=>Y_(await Fl(d),U))}}(nc(l),u,a,c)}function cc(t,e){return function(r,s){const i=new xn;return r.asyncQueue.enqueueAndForget(async()=>qR(await tS(r),s,i)),i.promise}(nc(t),e)}function Ry(t,e,n){const r=n.docs.get(e._key),s=new by(t);return new Ay(t,s,e._key,r,new $s(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=sc(e)}set(e,n,r){this._verifyNotCommitted();const s=Bc(e,this._firestore),i=Ty(s.converter,n,r),o=fy(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,mt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Bc(e,this._firestore);let o;return o=typeof(n=ke(n))=="string"||n instanceof Ji?gy(this._dataReader,"WriteBatch.update",i._key,n,r,s):my(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,mt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Bc(e,this._firestore);return this._mutations=this._mutations.concat(new Qa(n._key,mt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new x(A.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Bc(t,e){if((t=ke(t)).firestore!==e)throw new x(A.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function Sy(){return new lh("serverTimestamp")}function Zr(...t){return new uh("arrayUnion",t)}function ES(...t){return new hh("arrayRemove",t)}function jc(t){return new dh("increment",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t){return nc(t=St(t,jn)),new vS(t,e=>cc(t,e))}(function(e,n=!0){(function(s){Ts=s})(vs),is(new gr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new jn(new b1(r.getProvider("auth-internal")),new P1(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new x(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ei(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Mn(Hd,"4.6.1",e),Mn(Hd,"4.6.1","esm2017")})();var wS="firebase",IS="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mn(wS,IS,"app");const TS={apiKey:"AIzaSyCaKdM1mj_uAt9Cfc50VhNxJaimYS5g-Ec",authDomain:"vuechat-c27a8.firebaseapp.com",projectId:"vuechat-c27a8",storageBucket:"vuechat-c27a8.appspot.com",messagingSenderId:"713413651968",appId:"1:713413651968:web:93c490d79df8c319cf2e5"},Cy=vm(TS),Xt=fA(Cy),ye=oS(Cy),Yn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Py=t=>(Ci("data-v-819e2609"),t=t(),Pi(),t),AS=["width","height"],bS=Py(()=>g("path",{d:"M12 3C7.03 3 3 6.58 3 11C3 13.16 4.04 15.11 5.73 16.5L5 20L8.89 18.32C9.87 18.76 10.9 19 12 19C16.97 19 21 15.42 21 11C21 6.58 16.97 3 12 3Z",fill:"white","fill-opacity":"0.95"},null,-1)),RS=Py(()=>g("path",{d:"M12 8C11 6.5 9 6.5 8 8C7 9.5 8 11 12 14C16 11 17 9.5 16 8C15 6.5 13 6.5 12 8Z",fill:"#FF6A00"},null,-1)),SS=[bS,RS],CS={__name:"Logo",props:{className:{type:String,default:""},size:{type:String,default:"md"},showText:{type:Boolean,default:!1},variant:{type:String,default:"default"},center:{type:Boolean,default:!1}},setup(t){const e=t,r={sm:{badge:"logo-sm",text:"16px",icon:16},md:{badge:"logo-md",text:"20px",icon:20},lg:{badge:"logo-lg",text:"24px",icon:24},xl:{badge:"logo-xl",text:"30px",icon:28}}[e.size],s=e.variant==="white";return(i,o)=>(F(),$("div",{class:be(["logo",[{center:t.center},t.className]])},[g("div",{class:be(["logo-badge",[s?"logo-badge-white":"gradient-orange",et(r).badge]])},[(F(),$("svg",{width:et(r).icon,height:et(r).icon,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},SS,8,AS))],2),t.showText?(F(),$("span",{key:0,class:be(["logo-text",[s?"text-white":"text-dark",et(r).text]])}," Friendzy ",2)):Me("",!0)],2))}},$l=Yn(CS,[["__scopeId","data-v-819e2609"]]),PS={},kS={width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},DS=g("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"},null,-1),NS=g("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"},null,-1),OS=g("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"},null,-1),VS=g("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"},null,-1),MS=[DS,NS,OS,VS];function xS(t,e){return F(),$("svg",kS,MS)}const LS=Yn(PS,[["render",xS]]),Tt=t=>(Ci("data-v-1d2800a0"),t=t(),Pi(),t),FS={class:"auth"},US={class:"auth-left"},$S=Tt(()=>g("div",{class:"auth-grid-white"},null,-1)),BS={class:"auth-left-inner"},jS={class:"auth-left-mid"},qS=Tt(()=>g("h1",null,[ai(" Conecta con amigos "),g("br"),g("span",null,"de forma inteligente")],-1)),HS=Tt(()=>g("p",null," Chat en tiempo real, conoce nuevas personas y crea conexiones significativas en una plataforma segura. ",-1)),zS=Tt(()=>g("span",{class:"auth-checkmark"},[g("i",{class:"mdi mdi-check"})],-1)),WS={class:"auth-stats"},KS={class:"auth-right"},GS=Tt(()=>g("div",{class:"auth-right-grid"},null,-1)),QS={class:"auth-form-wrap"},YS={class:"auth-mobile-logo"},JS=Tt(()=>g("p",null,"Conecta con amigos de todo el mundo",-1)),XS={class:"auth-card"},ZS={class:"auth-card-head"},eC=Tt(()=>g("span",null,"Iniciar sesión con Google",-1)),tC=Tt(()=>g("div",{class:"divider"},[g("span",null,"o con tu email")],-1)),nC={class:"fields"},rC={key:0,class:"field"},sC=Tt(()=>g("label",null,"Nombre",-1)),iC={class:"field"},oC=Tt(()=>g("label",null,"Email",-1)),aC={class:"field"},cC=Tt(()=>g("label",null,"Contraseña",-1)),lC={key:0,class:"auth-error"},uC=Tt(()=>g("i",{class:"mdi mdi-alert-circle-outline"},null,-1)),hC=["disabled"],dC=Tt(()=>g("i",{class:"mdi mdi-arrow-right"},null,-1)),fC={class:"switch-link"},pC=O0('<div class="auth-badges" data-v-1d2800a0><div class="auth-badge" data-v-1d2800a0><i class="mdi mdi-shield-lock-outline" data-v-1d2800a0></i><span data-v-1d2800a0>Seguro</span></div><div class="auth-badge" data-v-1d2800a0><i class="mdi mdi-message-text-clock-outline" data-v-1d2800a0></i><span data-v-1d2800a0>Tiempo real</span></div><div class="auth-badge" data-v-1d2800a0><i class="mdi mdi-web" data-v-1d2800a0></i><span data-v-1d2800a0>Global</span></div></div>',1),mC={__name:"AuthScreen",setup(t){const e=te("login"),n=te(""),r=te(""),s=te(""),i=te(!1),o=te(""),a=["Mensajería en tiempo real","Conoce personas de todo el mundo","Seguridad y privacidad garantizada"],c=[{value:"10K+",label:"Usuarios"},{value:"50K+",label:"Mensajes"},{value:"99%",label:"Uptime"}],l=p=>{e.value=p,o.value=""},u=async()=>{try{const p=new tn;await IT(Xt,p)}catch(p){console.log(p)}},h=p=>{switch(p){case"auth/invalid-credential":case"auth/user-not-found":case"auth/wrong-password":return"Email o contraseña incorrectos";case"auth/email-already-in-use":return"Este email ya está registrado";case"auth/invalid-email":return"Introduce un email válido";case"auth/weak-password":return"La contraseña debe tener al menos 6 caracteres";case"auth/too-many-requests":return"Demasiados intentos. Intenta más tarde";default:return`Error: ${p}`}},d=async()=>{if(o.value="",!n.value.trim()||!r.value){o.value="Completa todos los campos";return}if(r.value.length<6){o.value="La contraseña debe tener al menos 6 caracteres";return}i.value=!0;try{if(e.value==="login")await QI(Xt,n.value.trim(),r.value);else{const{user:p}=await GI(Xt,n.value.trim(),r.value);s.value.trim()&&await JI(p,{displayName:s.value.trim()})}}catch(p){console.log(p),o.value=h(p.code)}finally{i.value=!1}};return(p,T)=>(F(),$("main",FS,[g("section",US,[$S,g("div",BS,[se($l,{size:"lg",showText:"",variant:"white"}),g("div",jS,[qS,HS,g("ul",null,[(F(),$(xe,null,ar(a,(E,R)=>g("li",{key:R,class:"auth-feature",style:_s({animationDelay:.3+R*.1+"s"})},[zS,g("span",null,ge(E),1)],4)),64))])]),g("div",WS,[(F(),$(xe,null,ar(c,E=>g("div",{key:E.label},[g("strong",null,ge(E.value),1),g("span",null,ge(E.label),1)])),64))])])]),g("section",KS,[GS,g("div",QS,[g("div",YS,[se($l,{size:"xl",showText:"",center:""}),JS]),g("div",XS,[g("div",ZS,[g("h2",null,ge(e.value==="login"?"Bienvenido de vuelta":"Crea tu cuenta"),1),g("p",null,ge(e.value==="login"?"Ingresa a tu cuenta para continuar":"Regístrate gratis y empieza a chatear"),1)]),g("button",{class:"google-btn",type:"button",onClick:u},[se(LS),eC]),tC,g("div",nC,[e.value==="register"?(F(),$("div",rC,[sC,qs(g("input",{"onUpdate:modelValue":T[0]||(T[0]=E=>s.value=E),type:"text",placeholder:"Tu nombre"},null,512),[[Gs,s.value]])])):Me("",!0),g("div",iC,[oC,qs(g("input",{"onUpdate:modelValue":T[1]||(T[1]=E=>n.value=E),type:"email",placeholder:"tu@email.com"},null,512),[[Gs,n.value]])]),g("div",aC,[cC,qs(g("input",{"onUpdate:modelValue":T[2]||(T[2]=E=>r.value=E),type:"password",placeholder:"••••••••",onKeyup:um(d,["enter"])},null,544),[[Gs,r.value]])])]),o.value?(F(),$("div",lC,[uC,g("span",null,ge(o.value),1)])):Me("",!0),g("button",{class:"submit-btn btn-primary",type:"button",disabled:i.value,onClick:d},[g("span",null,ge(i.value?"Cargando...":e.value==="login"?"Iniciar sesión":"Crear cuenta"),1),dC],8,hC),g("p",fC,[e.value==="login"?(F(),$(xe,{key:0},[ai(" ¿No tienes cuenta? "),g("a",{href:"#",onClick:T[3]||(T[3]=Wr(E=>l("register"),["prevent"]))},"Regístrate gratis")],64)):(F(),$(xe,{key:1},[ai(" ¿Ya tienes cuenta? "),g("a",{href:"#",onClick:T[4]||(T[4]=Wr(E=>l("login"),["prevent"]))},"Inicia sesión")],64))])]),pC])])]))}},gC=Yn(mC,[["__scopeId","data-v-1d2800a0"]]),_C=(t,e)=>[t,e].sort().join("_"),es=(t,e)=>t.split("_").find(n=>n!==e);let nn=null,kf=!1;function ky(){const t=window.AudioContext||window.webkitAudioContext;!t||typeof window>"u"||(nn||(nn=new t),nn.state==="suspended"&&nn.resume().catch(()=>{}))}const yC=()=>{kf||(kf=!0,ky())};typeof window<"u"&&["pointerdown","keydown","touchstart"].forEach(t=>window.addEventListener(t,yC,{once:!0}));function Df(){if(ky(),!nn)return;const t=nn.currentTime;[660,880].forEach((e,n)=>{const r=nn.createOscillator(),s=nn.createGain(),i=t+n*.12;r.type="sine",r.frequency.value=e,s.gain.setValueAtTime(1e-4,i),s.gain.exponentialRampToValueAtTime(.18,i+.02),s.gain.exponentialRampToValueAtTime(1e-4,i+.35),r.connect(s),s.connect(nn.destination),r.start(i),r.stop(i+.4)})}function vC(){typeof Notification<"u"&&Notification.permission==="default"&&Notification.requestPermission().catch(()=>{})}function Nf(t,e){if(typeof Notification<"u"&&Notification.permission==="granted")try{new Notification(t,{body:e,icon:"/friendzy/favicon.svg"})}catch{}}const EC={key:0,class:"pa-img"},wC=["src","alt"],IC={__name:"PremiumAvatar",props:{src:{type:String,default:""},name:{type:String,required:!0},size:{type:String,default:"md"},online:{type:Boolean,default:void 0},showRing:{type:Boolean,default:!1},className:{type:String,default:""}},setup(t){const e=t,r={sm:{avatar:"pa-size-sm",text:"pa-text-xs",status:"pa-status-sm"},md:{avatar:"pa-size-md",text:"pa-text-sm",status:"pa-status-md"},lg:{avatar:"pa-size-lg",text:"pa-text-base",status:"pa-status-lg"},xl:{avatar:"pa-size-xl",text:"pa-text-xl",status:"pa-status-xl"}}[e.size],s=["linear-gradient(135deg, #f97316, #f59e0b)","linear-gradient(135deg, #f59e0b, #ea580c)","linear-gradient(135deg, #ea580c, #ef4444)","linear-gradient(135deg, #f43f5e, #f97316)","#111827","linear-gradient(135deg, #fb923c, #eab308)"],o=s[Math.abs((c=>(c||"").split("").reduce((l,u)=>l+u.charCodeAt(0),0))(e.name))%s.length],a=(e.name||"?").split(" ").map(c=>c[0]).slice(0,2).join("").toUpperCase();return(c,l)=>(F(),$("div",{class:be(["pa-outer",t.className])},[g("div",{class:be(["pa-ring",t.showRing?"avatar-ring":""])},[g("div",{class:be(["pa-avatar",[et(r).avatar,"pa-"+t.size]])},[t.src?(F(),$("div",EC,[g("img",{src:t.src,alt:t.name},null,8,wC)])):(F(),$("div",{key:1,class:"pa-initials",style:_s({background:et(o)})},[g("span",{class:be(et(r).text)},ge(et(a)),3)],4))],2)],2),t.online!==void 0?(F(),$("span",{key:0,class:be(["pa-status",[et(r).status,t.online?"pa-online":"pa-offline"]])},null,2)):Me("",!0)],2))}},ir=Yn(IC,[["__scopeId","data-v-4322e703"]]),Ne=t=>(Ci("data-v-d8adb432"),t=t(),Pi(),t),TC={class:"sidebar"},AC={class:"sb-header"},bC=Ne(()=>g("i",{class:"mdi mdi-close"},null,-1)),RC=[bC],SC={class:"sb-profile-wrap"},CC={class:"sb-profile-info"},PC={class:"sb-profile-name"},kC={class:"sb-profile-email"},DC=Ne(()=>g("i",{class:"mdi mdi-chevron-down sb-profile-caret"},null,-1)),NC={key:0,class:"sb-menu"},OC=Ne(()=>g("i",{class:"mdi mdi-cog-outline"},null,-1)),VC=Ne(()=>g("span",null,"Configuración",-1)),MC=[OC,VC],xC=Ne(()=>g("div",{class:"sb-menu-sep"},null,-1)),LC=Ne(()=>g("i",{class:"mdi mdi-logout"},null,-1)),FC=Ne(()=>g("span",null,"Cerrar sesión",-1)),UC=[LC,FC],$C={class:"sb-search-row"},BC={class:"sb-search"},jC=Ne(()=>g("i",{class:"mdi mdi-magnify sb-search-icon"},null,-1)),qC={key:0,class:"sb-newchat"},HC=Ne(()=>g("div",{class:"sb-label"},[g("i",{class:"mdi mdi-account-multiple-outline"}),g("span",null,"Personas registradas")],-1)),zC=["onClick"],WC={class:"sb-user-body"},KC={class:"sb-user-name"},GC={class:"sb-user-email"},QC=["onClick"],YC=["onClick"],JC=Ne(()=>g("i",{class:"mdi mdi-message-outline"},null,-1)),XC=Ne(()=>g("span",null,"Chat",-1)),ZC=[JC,XC],eP={key:0,class:"sb-empty-note"},tP={class:"sb-section"},nP=Ne(()=>g("div",{class:"sb-label"},[g("i",{class:"mdi mdi-bell-outline"}),g("span",null,"Solicitudes")],-1)),rP={class:"sb-count sb-count-alert"},sP={class:"sb-list sb-friends"},iP={class:"conv-body"},oP={class:"conv-top"},aP={class:"conv-name"},cP=Ne(()=>g("div",{class:"conv-bottom"},[g("span",{class:"conv-preview"},"Quiere chatear contigo")],-1)),lP=["onClick"],uP=Ne(()=>g("i",{class:"mdi mdi-check"},null,-1)),hP=[uP],dP=["onClick"],fP=Ne(()=>g("i",{class:"mdi mdi-close"},null,-1)),pP=[fP],mP={class:"sb-section"},gP=Ne(()=>g("div",{class:"sb-label"},[g("i",{class:"mdi mdi-heart"}),g("span",null,"Amigos")],-1)),_P={class:"sb-count"},yP={class:"sb-list sb-friends"},vP=["onClick"],EP={class:"conv-body"},wP={class:"conv-top"},IP={class:"conv-name"},TP=Ne(()=>g("div",{class:"conv-bottom"},[g("span",{class:"conv-preview"},"En línea")],-1)),AP=["onClick"],bP=Ne(()=>g("i",{class:"mdi mdi-minus"},null,-1)),RP=[bP],SP={class:"sb-section"},CP=Ne(()=>g("div",{class:"sb-label"},[g("i",{class:"mdi mdi-message-text-outline"}),g("span",null,"Conversaciones")],-1)),PP={class:"sb-count"},kP={class:"sb-list"},DP=["onClick"],NP={class:"conv-body"},OP={class:"conv-top"},VP={class:"conv-name"},MP={key:0,class:"conv-badge"},xP={key:1,class:"conv-time"},LP={class:"conv-bottom"},FP={class:"conv-preview"},UP={key:0,class:"sb-empty"},$P=Ne(()=>g("p",null,"Sin conversaciones todavía",-1)),BP=Ne(()=>g("p",{class:"sb-empty-sub"},"Busca personas y envía una solicitud para chatear",-1)),jP=[$P,BP],qP={__name:"Conversations",props:{activeId:{type:String,default:""},isMobile:{type:Boolean,default:!1}},emits:["open","close"],setup(t,{emit:e}){const n=e,r=t,s=Xt.currentUser,i=te([]),o=te([]),a=te([]),c=te([]),l=te([]),u=te([]),h=te([]),d=te([]),p=te(""),T=te(!1),E=te(!1),R=(s==null?void 0:s.displayName)||(s==null?void 0:s.email)||"Usuario",U=(s==null?void 0:s.email)||"",K=(s==null?void 0:s.photoURL)||"";let H=null,V=null,B=null,N=null,z=null,ne=null,_e=null,he=null,Ce=!1,Je=!1;const _t={};zp(()=>{H=Tn(rr(jt(ye,"users")),_=>{i.value=_.docs.map(y=>y.data()).filter(y=>y.uid!==s.uid)},_=>console.error("denied:users",_.code)),V=Tn(rr(jt(ye,"conversations"),en("participants","array-contains",s.uid)),_=>{var w,k;const y=[],v={};if(_.forEach(O=>{const M=O.data();v[O.id]=M,y.push({id:O.id,...M})}),y.sort((O,M)=>{var j,Z,re,pe;return(((Z=(j=M.lastAt)==null?void 0:j.toMillis)==null?void 0:Z.call(j))??0)-(((pe=(re=O.lastAt)==null?void 0:re.toMillis)==null?void 0:pe.call(re))??0)}),o.value=y,!Ce){Ce=!0,_.forEach(O=>{var M,j;_t[O.id]=((j=(M=O.data())==null?void 0:M.unread)==null?void 0:j[s.uid])||0});return}_.forEach(O=>{var re;const M=O.data(),j=((re=M.unread)==null?void 0:re[s.uid])||0,Z=_t[O.id]||0;if(_t[O.id]=j,j>Z&&O.id!==r.activeId){const pe=es(O.id,s.uid),Pe=i.value.find(En=>En.uid===pe),yt=typeof M.lastMessage=="string"?M.lastMessage:"📷 Foto";Nf(`Nuevo mensaje de ${(Pe==null?void 0:Pe.displayName)||""}`,yt),Df()}}),r.activeId&&(((k=(w=v[r.activeId])==null?void 0:w.unread)==null?void 0:k[s.uid])||0)>0&&Nr(r.activeId)},_=>console.error("denied:convs",_.code)),B=Tn(He(ye,"users",s.uid),_=>{var y;a.value=((y=_.data())==null?void 0:y.friends)||[]},_=>console.error("denied:me",_.code)),N=Tn(rr(jt(ye,"requests"),en("to","==",s.uid),en("status","==","pending")),_=>{if(c.value=_.docs.map(y=>({id:y.id,...y.data()})),!Je){Je=!0;return}_.docChanges().forEach(y=>{if(y.type==="added"){const v=y.doc.data(),w=i.value.find(k=>k.uid===v.from);Nf("Nueva solicitud de chat",`${(w==null?void 0:w.displayName)||"Alguien"} quiere chatear contigo`),Df()}})},_=>console.error("denied:incoming",_.code)),z=Tn(rr(jt(ye,"requests"),en("from","==",s.uid),en("status","==","pending")),_=>{l.value=_.docs.map(y=>({id:y.id,...y.data()}))},_=>console.error("denied:sent",_.code)),ne=Tn(rr(jt(ye,"requests"),en("from","==",s.uid),en("status","==","accepted")),_=>{h.value=_.docs.map(y=>({id:y.id,...y.data()})),Dr()},_=>console.error("denied:accOut",_.code)),_e=Tn(rr(jt(ye,"requests"),en("to","==",s.uid),en("status","==","accepted")),_=>{u.value=_.docs.map(y=>({id:y.id,...y.data()})),Dr()},_=>console.error("denied:accIn",_.code)),he=_=>{_.target.closest(".sb-profile-wrap")||(T.value=!1),_.target.closest(".sb-search-row")||(E.value=!1)},document.addEventListener("click",he),setTimeout(()=>vC(),1500)}),ki(()=>{H==null||H(),V==null||V(),B==null||B(),N==null||N(),z==null||z(),ne==null||ne(),_e==null||_e(),he&&document.removeEventListener("click",he)});const Dr=()=>{d.value=[...u.value,...h.value]},Nr=_=>{yS(He(ye,"conversations",_),{[`unread.${s.uid}`]:0}).catch(()=>{})},Fe=_=>i.value.find(y=>y.uid===_),de=Ae(()=>c.value),fe=Ae(()=>{const _=new Set(a.value);return d.value.forEach(y=>{_.add(y.from===s.uid?y.to:y.from)}),_}),Pt=Ae(()=>i.value.filter(_=>fe.value.has(_.uid))),Or=Ae(()=>new Set(l.value.map(_=>_.to))),ht=_=>fe.value.has(_.uid)?"friend":Or.value.has(_.uid)?"pending":de.value.some(y=>y.from===_.uid)?"incoming":"none",At=_=>_==="pending"?"Pendiente":_==="incoming"?"Aceptar":"Solicitar",eo=_=>_==="pending"?"mdi-clock-outline":_==="incoming"?"mdi-check":"mdi-account-plus-outline",hc=_=>{ht(_)==="friend"&&b(_)},dc=_=>{const y=ht(_);if(y==="incoming"){const v=de.value.find(w=>w.from===_.uid);v&&Xn(v)}else y==="none"&&kt(_)},kt=async _=>{const y=`${s.uid}_${_.uid}`;await Dt(He(ye,"requests",y),{from:s.uid,to:_.uid,status:"pending",createdAt:Sy()})},Xn=async _=>{const y=He(ye,"requests",_.id),v=He(ye,"users",s.uid);await Dt(y,{status:"accepted"},{merge:!0}),await Dt(v,{friends:Zr(_.from)},{merge:!0});const w=i.value.find(k=>k.uid===_.from);await b({uid:_.from,displayName:(w==null?void 0:w.displayName)||_.from,photoURL:(w==null?void 0:w.photoURL)||""})},Ss=async _=>{await $c(He(ye,"requests",_.id))},to=async _=>{const y=He(ye,"users",s.uid);await Dt(y,{friends:ES(_.uid)},{merge:!0});const v=He(ye,"requests",`${_.uid}_${s.uid}`),w=await Pf(v);w.exists()&&w.data().from===_.uid&&w.data().to===s.uid&&await $c(v);const k=He(ye,"requests",`${s.uid}_${_.uid}`);(await Pf(k)).exists()&&await Dt(k,{status:"declined"},{merge:!0})},Ft=_=>{const y=es(_.id,s.uid),v=i.value.find(w=>w.uid===y);return v?v.displayName:y},no=_=>_.lastMessage?_.lastMessage:"Sin mensajes todavía",vn=Ae(()=>p.value.trim().toLowerCase()),f=Ae(()=>vn.value?o.value.filter(_=>Ft(_).toLowerCase().includes(vn.value)):o.value),m=Ae(()=>{let _=i.value;return vn.value&&(_=_.filter(y=>(y.displayName||"").toLowerCase().includes(vn.value)||(y.email||"").toLowerCase().includes(vn.value))),_}),I=_=>{var w;const y=((w=_==null?void 0:_.toMillis)==null?void 0:w.call(_))??0;if(!y)return"";const v=Math.floor((Date.now()-y)/1e3);return v<60?"ahora":v<3600?`${Math.floor(v/60)}m`:v<86400?`${Math.floor(v/3600)}h`:v<604800?`${Math.floor(v/86400)}d`:new Date(y).toLocaleDateString("es-ES",{day:"numeric",month:"short"})},S=_=>{Nr(_.id);const y=i.value.find(v=>v.uid===es(_.id,s.uid));n("open",{id:_.id,other:{name:Ft(_),photo:(y==null?void 0:y.photoURL)||""}})},b=async _=>{const y=_C(s.uid,_.uid);E.value=!1;const v=He(ye,"conversations",y);try{await Dt(v,{participants:Zr(s.uid,_.uid)},{merge:!0})}catch(w){console.error("startWith:conv",w.code,w.message);try{await $c(v),await Dt(v,{participants:Zr(s.uid,_.uid)},{merge:!0})}catch(k){console.error("startWith:repair",k.code,k.message)}}Nr(y),n("open",{id:y,other:{name:_.displayName,photo:_.photoURL||""}})},P=async()=>{try{await tT(Xt)}catch(_){console.log(_)}};return(_,y)=>(F(),$("div",TC,[g("div",AC,[se($l,{size:"md",showText:""}),t.isMobile?(F(),$("button",{key:0,class:"icon-btn",onClick:y[0]||(y[0]=v=>_.$emit("close"))},RC)):Me("",!0)]),g("div",SC,[g("button",{class:"sb-profile",onClick:y[1]||(y[1]=v=>T.value=!T.value)},[se(ir,{src:et(K),name:et(R),size:"md",online:""},null,8,["src","name"]),g("div",CC,[g("span",PC,ge(et(R)),1),g("span",kC,ge(et(U)),1)]),DC]),T.value?(F(),$("div",NC,[g("button",{class:"sb-menu-item",onClick:y[2]||(y[2]=v=>T.value=!1)},MC),xC,g("button",{class:"sb-menu-item sb-menu-danger",onClick:P},UC)])):Me("",!0)]),g("div",$C,[g("div",BC,[jC,qs(g("input",{"onUpdate:modelValue":y[3]||(y[3]=v=>p.value=v),type:"text",placeholder:"Buscar chats o personas...",class:"sb-search-input"},null,512),[[Gs,p.value]])]),g("button",{class:"icon-btn btn-primary sb-plus",onClick:y[4]||(y[4]=v=>E.value=!E.value)},[g("i",{class:be(["mdi",E.value?"mdi-close":"mdi-plus"])},null,2)]),E.value?(F(),$("div",qC,[HC,(F(!0),$(xe,null,ar(m.value,v=>(F(),$("button",{key:v.uid,class:"sb-user-item",onClick:w=>hc(v)},[se(ir,{src:v.photoURL||"",name:v.displayName,size:"md",online:!0},null,8,["src","name"]),g("div",WC,[g("span",KC,ge(v.displayName),1),g("span",GC,ge(v.email),1)]),ht(v)!=="friend"?(F(),$("span",{key:0,class:be(["btn-status","btn-"+ht(v)]),onClick:Wr(w=>dc(v),["stop"])},[g("i",{class:be(["mdi",eo(ht(v))])},null,2),g("span",null,ge(At(ht(v))),1)],10,QC)):(F(),$("span",{key:1,class:"btn-status btn-friend",onClick:Wr(w=>b(v),["stop"])},ZC,8,YC))],8,zC))),128)),m.value.length===0?(F(),$("p",eP," No hay personas registradas ")):Me("",!0)])):Me("",!0)]),de.value.length?(F(),$(xe,{key:0},[g("div",tP,[nP,g("span",rP,ge(de.value.length),1)]),g("div",sP,[(F(!0),$(xe,null,ar(de.value,v=>{var w,k,O;return F(),$("div",{key:v.id,class:"conv-item friend-item"},[se(ir,{src:((w=Fe(v.from))==null?void 0:w.photoURL)||"",name:((k=Fe(v.from))==null?void 0:k.displayName)||v.from,size:"lg",online:""},null,8,["src","name"]),g("div",iP,[g("div",oP,[g("span",aP,ge(((O=Fe(v.from))==null?void 0:O.displayName)||v.from),1)]),cP]),g("button",{class:"req-btn req-ok",title:"Aceptar",onClick:M=>Xn(v)},hP,8,lP),g("button",{class:"req-btn req-no",title:"Rechazar",onClick:M=>Ss(v)},pP,8,dP)])}),128))])],64)):Me("",!0),Pt.value.length?(F(),$(xe,{key:1},[g("div",mP,[gP,g("span",_P,ge(Pt.value.length),1)]),g("div",yP,[(F(!0),$(xe,null,ar(Pt.value,v=>(F(),$("div",{key:v.uid,class:"conv-item friend-item",onClick:w=>b(v)},[se(ir,{src:v.photoURL||"",name:v.displayName,size:"lg",online:""},null,8,["src","name"]),g("div",EP,[g("div",wP,[g("span",IP,ge(v.displayName),1)]),TP]),g("button",{class:"friend-remove",onClick:Wr(w=>to(v),["stop"])},RP,8,AP)],8,vP))),128))])],64)):Me("",!0),g("div",SP,[CP,g("span",PP,ge(f.value.length),1)]),g("div",kP,[(F(!0),$(xe,null,ar(f.value,v=>{var w;return F(),$("button",{key:v.id,class:be(["conv-item",{active:v.id===t.activeId}]),onClick:k=>S(v)},[se(ir,{name:Ft(v),size:"lg",online:""},null,8,["name"]),g("div",NP,[g("div",OP,[g("span",VP,ge(Ft(v)),1),(((w=v.unread)==null?void 0:w[et(s).uid])||0)>0?(F(),$("span",MP,ge(v.unread[et(s).uid]),1)):(F(),$("span",xP,ge(I(v.lastAt)),1))]),g("div",LP,[g("span",FP,ge(no(v)),1)])])],10,DP)}),128)),f.value.length===0?(F(),$("div",UP,jP)):Me("",!0)])]))}},Of=Yn(qP,[["__scopeId","data-v-d8adb432"]]),HP={class:"mb-max"},zP={key:0,class:"mb-audio"},WP={class:"mb-audio-head"},KP={class:"mb-audio-track"},GP={class:"mb-audio-time"},QP=["src"],YP={key:1,class:"mb-text"},JP={key:2,class:"mb-image"},XP=["src"],ZP={key:0,class:"mdi mdi-check-all mb-check"},ek={__name:"MessageBubble",props:{message:{type:Object,required:!0},isOwn:{type:Boolean,default:!1},showAvatar:{type:Boolean,default:!0},avatar:{type:String,default:""},senderName:{type:String,default:""}},setup(t){const e=t,n=te(null),r=te(!1),s=te(0),i=Ae(()=>{var h;const u=((h=e.message.time)==null?void 0:h.seconds)??0;return u?new Date(u*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""}),o=Ae(()=>{const u=e.message.duration||0;return`${Math.floor(u/60)}:${String(u%60).padStart(2,"0")}`}),a=()=>{const u=n.value;u&&(r.value?u.pause():u.play().catch(()=>{}),r.value=!r.value)},c=()=>{const u=n.value;!u||!u.duration||(s.value=u.currentTime/u.duration*100)},l=()=>{r.value=!1,s.value=0};return(u,h)=>(F(),$("div",{class:be(["mb-row",t.isOwn?"mb-own":"mb-other"])},[g("div",{class:be(["mb-avatar",t.showAvatar?"":"mb-avatar-hidden"])},[se(ir,{src:t.avatar||"",name:t.senderName,size:"sm"},null,8,["src","name"])],2),g("div",HP,[g("div",{class:be(["mb-bubble",t.isOwn?"mb-bubble-own":"mb-bubble-other"])},[t.message.audio?(F(),$("div",zP,[g("div",WP,[g("button",{class:"mb-audio-play",onClick:a},[g("i",{class:be(["mdi",r.value?"mdi-pause":"mdi-play"])},null,2)]),g("div",KP,[g("div",{class:"mb-audio-fill",style:_s({width:s.value+"%"})},null,4)]),g("span",GP,ge(o.value),1)]),g("audio",{ref_key:"audioRef",ref:n,src:t.message.audio,preload:"metadata",onTimeupdate:c,onEnded:l},null,40,QP)])):t.message.text?(F(),$("p",YP,ge(t.message.text),1)):t.message.image?(F(),$("div",JP,[g("img",{src:t.message.image,alt:"Compartida"},null,8,XP)])):Me("",!0),g("div",{class:be(["mb-meta",t.isOwn?"mb-meta-own":""])},[g("span",null,ge(i.value),1),t.isOwn?(F(),$("i",ZP)):Me("",!0)],2)],2)])],2))}},tk=Yn(ek,[["__scopeId","data-v-7c9f3cbe"]]),Xi=t=>(Ci("data-v-e075e0d5"),t=t(),Pi(),t),nk={class:"chat-input-wrap"},rk={key:1,class:"ci-attach"},sk=Xi(()=>g("i",{class:"mdi mdi-image-outline"},null,-1)),ik=[sk],ok={class:"ci-row"},ak={class:"ci-input-box"},ck=["onKeydown"],lk=Xi(()=>g("button",{class:"ci-round-btn ci-smile"},[g("i",{class:"mdi mdi-emoticon-outline"})],-1)),uk=Xi(()=>g("i",{class:"mdi mdi-send"},null,-1)),hk=[uk],dk={key:2,class:"ci-recording"},fk=Xi(()=>g("span",{class:"ci-rec-dot"},null,-1)),pk=Xi(()=>g("span",{class:"ci-rec-text"},"Grabando · toca para terminar",-1)),mk={class:"ci-rec-time"},gk={key:3,class:"ci-recording"},_k={class:"ci-rec-text"},yk=3e4,vk={__name:"FormAdd",props:{conversationId:{type:String,required:!0}},setup(t){const e=t,n=te(""),r=te(!1),s=te(!1),i=te(0),o=te(""),a=te(null),c=te(null),l=Ae(()=>{const V=Math.floor(i.value/1e3);return`${Math.floor(V/60)}:${String(V%60).padStart(2,"0")}`}),u={media:null,recorder:null,chunks:[],timer:null,startedAt:0,type:"audio/webm"},h=()=>{const V=a.value;V&&(V.style.height="auto",V.style.height=`${Math.min(V.scrollHeight,128)}px`)},d=async()=>{const V=n.value.trim();if(!(!V||!e.conversationId))try{const B=Xt.currentUser,N=es(e.conversationId,B.uid),z=He(ye,"conversations",e.conversationId);await Dt(z,{participants:Zr(B.uid,N)},{merge:!0});const ne=qc(ye),_e=He(jt(ye,"conversations",e.conversationId,"messages"));ne.set(_e,{text:V,time:Ie.fromDate(new Date),uid:B.uid,displayName:B.displayName}),ne.update(z,{lastMessage:V,lastAt:Ie.fromDate(new Date),[`unread.${N}`]:jc(1)}),await ne.commit(),n.value="",fa(()=>h())}catch(B){console.log(B)}},p=()=>{var V;r.value=!1,(V=c.value)==null||V.click()},T=async V=>{var N;const B=(N=V.target.files)==null?void 0:N[0];if(V.target.value="",!(!B||!e.conversationId))try{const z=await E(B);if(!z)return;const ne=Xt.currentUser,_e=es(e.conversationId,ne.uid),he=He(ye,"conversations",e.conversationId);await Dt(he,{participants:Zr(ne.uid,_e)},{merge:!0});const Ce=qc(ye),Je=He(jt(ye,"conversations",e.conversationId,"messages"));Ce.set(Je,{image:z,text:"",time:Ie.fromDate(new Date),uid:ne.uid,displayName:ne.displayName}),Ce.update(he,{lastMessage:"📷 Foto",lastAt:Ie.fromDate(new Date),[`unread.${_e}`]:jc(1)}),await Ce.commit()}catch(z){console.log(z)}},E=V=>new Promise(B=>{const N=new FileReader;N.onload=()=>{const z=new Image;z.onload=()=>{const _e=Math.min(1,1e3/Math.max(z.naturalWidth,z.naturalHeight)),he=Math.max(1,Math.round(z.naturalWidth*_e)),Ce=Math.max(1,Math.round(z.naturalHeight*_e)),Je=document.createElement("canvas");Je.width=he,Je.height=Ce;const _t=Je.getContext("2d");if(!_t)return B(N.result);_t.fillStyle="#fff",_t.fillRect(0,0,he,Ce),_t.drawImage(z,0,0,he,Ce),B(Je.toDataURL("image/jpeg",.75))},z.onerror=()=>B(null),z.src=N.result},N.onerror=()=>B(null),N.readAsDataURL(V)}),R=()=>{if(s.value){K();return}U()},U=async()=>{if(e.conversationId)try{const V=await navigator.mediaDevices.getUserMedia({audio:!0}),B=MediaRecorder.isTypeSupported("audio/webm;codecs=opus")?"audio/webm;codecs=opus":"",N=new MediaRecorder(V,{...B?{mimeType:B}:{},audioBitsPerSecond:24e3}),z=[];N.ondataavailable=ne=>{ne.data&&ne.data.size>0&&z.push(ne.data)},N.onstop=()=>{var he;(he=u.media)==null||he.getTracks().forEach(Ce=>Ce.stop());const ne=Math.max(1,Math.round((Date.now()-u.startedAt)/1e3)),_e=new Blob(z,{type:u.type});H(_e,ne)},u.media=V,u.recorder=N,u.chunks=z,u.startedAt=Date.now(),N.start(),u.type=N.mimeType||B||"audio/webm",s.value=!0,i.value=0,u.timer=setInterval(()=>{i.value=Date.now()-u.startedAt,i.value>=yk&&K()},250)}catch(V){console.log(V),s.value=!1}},K=()=>{clearInterval(u.timer),u.timer=null,s.value=!1;try{u.recorder&&u.recorder.state!=="inactive"&&u.recorder.stop()}catch(V){console.log(V)}},H=(V,B)=>{if(!e.conversationId)return;const N=new FileReader;N.onload=async()=>{try{const z=N.result;if(typeof z!="string"||z.length>9e5){o.value="La nota es demasiado larga para enviarse",setTimeout(()=>{o.value=""},4e3);return}const ne=Xt.currentUser,_e=es(e.conversationId,ne.uid),he=He(ye,"conversations",e.conversationId);await Dt(he,{participants:Zr(ne.uid,_e)},{merge:!0});const Ce=qc(ye),Je=He(jt(ye,"conversations",e.conversationId,"messages"));Ce.set(Je,{audio:z,duration:B,text:"",time:Ie.fromDate(new Date),uid:ne.uid,displayName:ne.displayName}),Ce.update(he,{lastMessage:"🎤 Nota de voz",lastAt:Ie.fromDate(new Date),[`unread.${_e}`]:jc(1)}),await Ce.commit()}catch(z){console.log(z)}},N.readAsDataURL(V)};return ki(()=>{var V;clearInterval(u.timer),(V=u.media)==null||V.getTracks().forEach(B=>B.stop())}),(V,B)=>(F(),$("div",nk,[r.value?(F(),$("div",{key:0,class:"ci-backdrop",onClick:B[0]||(B[0]=N=>r.value=!1)})):Me("",!0),r.value?(F(),$("div",rk,[g("button",{class:"ci-attach-btn",onClick:p},ik)])):Me("",!0),g("input",{ref_key:"fileInput",ref:c,type:"file",accept:"image/*",class:"hidden",onChange:T},null,544),g("div",ok,[g("button",{class:be(["ci-round-btn",{active:r.value}]),onClick:B[1]||(B[1]=N=>r.value=!r.value)},[g("i",{class:be(["mdi",r.value?"mdi-close":"mdi-paperclip"])},null,2)],2),g("div",ak,[qs(g("textarea",{ref_key:"taRef",ref:a,"onUpdate:modelValue":B[2]||(B[2]=N=>n.value=N),rows:"1",placeholder:"Escribe un mensaje...",class:"ci-textarea",onInput:h,onKeydown:um(Wr(d,["exact","prevent"]),["enter"])},null,40,ck),[[Gs,n.value]]),lk]),n.value.trim()?(F(),$("button",{key:0,class:"ci-round-btn btn-primary ci-send",onClick:d},hk)):(F(),$("button",{key:1,class:be(["ci-round-btn ci-send btn-primary",{recording:s.value}]),onClick:R},[g("i",{class:be(["mdi",s.value?"mdi-stop":"mdi-microphone"])},null,2)],2))]),s.value?(F(),$("div",dk,[fk,pk,g("span",mk,ge(l.value),1)])):Me("",!0),o.value?(F(),$("div",gk,[g("span",_k,ge(o.value),1)])):Me("",!0)]))}},Ek=Yn(vk,[["__scopeId","data-v-e075e0d5"]]),Jn=t=>(Ci("data-v-f5e8baca"),t=t(),Pi(),t),wk={class:"chat-main-wrap"},Ik=Jn(()=>g("div",{class:"cm-grid"},null,-1)),Tk={class:"cm-header"},Ak=Jn(()=>g("i",{class:"mdi mdi-menu"},null,-1)),bk=[Ak],Rk={class:"cm-header-info"},Sk=Jn(()=>g("p",null,[g("span",{class:"cm-status-dot"}),ai(" En línea ")],-1)),Ck=Jn(()=>g("div",{class:"cm-header-actions"},[g("button",{class:"icon-btn"},[g("i",{class:"mdi mdi-dots-horizontal"})])],-1)),Pk={key:0,class:"cm-empty"},kk=Jn(()=>g("i",{class:"mdi mdi-chat-processing-outline cm-empty-icon"},null,-1)),Dk=Jn(()=>g("p",null,"No hay mensajes todavía",-1)),Nk=Jn(()=>g("p",{class:"cm-empty-sub"},"¡Envía el primero!",-1)),Ok=[kk,Dk,Nk],Vk=Jn(()=>g("div",{class:"cm-date-pill"},"Hoy",-1)),Mk={__name:"Messages",props:{conversationId:{type:String,required:!0},other:{type:Object,default:()=>({})}},emits:["openDrawer"],setup(t){const e=t,n=te(Xt.currentUser),r=Ae(()=>{var c;return((c=n.value)==null?void 0:c.photoURL)||""}),s=te([]),i=te(null);let o=null;return Gt(()=>e.conversationId,c=>{if(o&&(o(),o=null),s.value=[],!c)return;const l=rr(jt(ye,"conversations",c,"messages"),pS("time"));o=Tn(l,u=>{s.value=u.docs.map(h=>({id:h.id,...h.data()})),fa(()=>{var d;const h=(d=i.value)==null?void 0:d.lastElementChild;h&&h.scrollIntoView({behavior:"smooth",block:"end"})})})},{immediate:!0}),ki(()=>{o==null||o()}),(c,l)=>(F(),$("div",wk,[Ik,g("header",Tk,[g("button",{class:"icon-btn cm-menu-btn",onClick:l[0]||(l[0]=u=>c.$emit("openDrawer"))},bk),se(ir,{src:t.other.photo||"",name:t.other.name,size:"md"},null,8,["src","name"]),g("div",Rk,[g("h2",null,ge(t.other.name),1),Sk]),Ck]),s.value.length===0?(F(),$("div",Pk,Ok)):(F(),$("div",{key:1,class:"cm-list",ref_key:"listRef",ref:i},[Vk,(F(!0),$(xe,null,ar(s.value,(u,h)=>{var d;return F(),oi(tk,{key:u.id,message:u,"is-own":u.uid===n.value.uid,"show-avatar":h===0||((d=s.value[h-1])==null?void 0:d.uid)!==u.uid,avatar:u.uid===n.value.uid?r.value:t.other.photo,"sender-name":u.uid===n.value.uid?n.value.displayName:t.other.name},null,8,["message","is-own","show-avatar","avatar","sender-name"])}),128))],512)),t.conversationId?(F(),oi(Ek,{key:2,"conversation-id":t.conversationId},null,8,["conversation-id"])):Me("",!0)]))}},xk=Yn(Mk,[["__scopeId","data-v-f5e8baca"]]),Lk={key:0,class:"app-loading"},Fk=g("div",{class:"app-spinner"},null,-1),Uk=g("span",null,"Cargando...",-1),$k=[Fk,Uk],Bk={key:2,class:"app-chat"},jk={class:"side-desktop"},qk={key:1,class:"side-mobile"},Hk={key:3,class:"app-placeholder"},zk=g("i",{class:"mdi mdi-account-plus-outline"},null,-1),Wk=[zk],Kk=g("p",null,"Selecciona un usuario o una conversación",-1),Gk=g("p",{class:"app-placeholder-sub"},"para empezar a chatear en privado",-1),Qk={__name:"App",setup(t){const e=te(null),n=te(!1),r=te(!1),s=te(null),i=({id:o,other:a})=>{s.value={id:o,other:a},r.value=!1};return eT(Xt,async o=>{if(e.value=o,n.value=!0,o)try{await Dt(He(ye,"users",o.uid),{uid:o.uid,displayName:o.displayName||o.email,email:o.email,photoURL:o.photoURL||"",lastSeen:Sy()},{merge:!0})}catch(a){console.error("Error registrando usuario:",a)}}),(o,a)=>n.value?e.value?(F(),$("div",Bk,[g("div",jk,[se(Of,{"active-id":s.value?s.value.id:"",onOpen:i},null,8,["active-id"])]),r.value?(F(),$("div",{key:0,class:"overlay",onClick:a[0]||(a[0]=c=>r.value=!1)})):Me("",!0),r.value?(F(),$("div",qk,[se(Of,{"active-id":s.value?s.value.id:"","is-mobile":"",onOpen:i,onClose:a[1]||(a[1]=c=>r.value=!1)},null,8,["active-id"])])):Me("",!0),s.value?(F(),oi(xk,{key:2,"conversation-id":s.value.id,other:s.value.other,onOpenDrawer:a[2]||(a[2]=c=>r.value=!0)},null,8,["conversation-id","other"])):(F(),$("div",Hk,[g("button",{class:"app-placeholder-btn",onClick:a[3]||(a[3]=c=>r.value=!0)},Wk),Kk,Gk]))])):(F(),oi(gC,{key:1})):(F(),$("div",Lk,$k))}};function Yk(t,e){let n;function r(){n=iv(),n.run(()=>e.length?e(()=>{n==null||n.stop(),r()}):e())}Gt(t,s=>{s&&!n?r():s||(n==null||n.stop(),n=void 0)},{immediate:!0}),cv(()=>{n==null||n.stop()})}const Kt=typeof window<"u",Jk=Kt&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function Xk(t,e,n){const r=e.length-1;if(r<0)return t===void 0?n:t;for(let s=0;s<r;s++){if(t==null)return n;t=t[e[s]]}return t==null||t[e[r]]===void 0?n:t[e[r]]}function Vf(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),Xk(t,e.split("."),n))}function Dy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,r)=>e+r)}function Mf(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function Hc(t,e){return e.every(n=>t.hasOwnProperty(n))}function Zk(t,e){const n={},r=new Set(Object.keys(t));for(const s of e)r.has(s)&&(n[s]=t[s]);return n}function eD(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function xf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function Lf(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function tD(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let r=0;for(;r<t.length;)n.push(t.substr(r,e)),r+=e;return n}function mn(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const s in t)r[s]=t[s];for(const s in e){const i=t[s],o=e[s];if(Mf(i)&&Mf(o)){r[s]=mn(i,o,n);continue}if(Array.isArray(i)&&Array.isArray(o)&&n){r[s]=n(i,o);continue}r[s]=o}return r}function ts(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(ts.cache.has(t))return ts.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return ts.cache.set(t,e),e}ts.cache=new Map;const Mr=2.4,Ff=.2126729,Uf=.7151522,$f=.072175,nD=.55,rD=.58,sD=.57,iD=.62,vo=.03,Bf=1.45,oD=5e-4,aD=1.25,cD=1.25,jf=.078,qf=12.82051282051282,Eo=.06,Hf=.001;function zf(t,e){const n=(t.r/255)**Mr,r=(t.g/255)**Mr,s=(t.b/255)**Mr,i=(e.r/255)**Mr,o=(e.g/255)**Mr,a=(e.b/255)**Mr;let c=n*Ff+r*Uf+s*$f,l=i*Ff+o*Uf+a*$f;if(c<=vo&&(c+=(vo-c)**Bf),l<=vo&&(l+=(vo-l)**Bf),Math.abs(l-c)<oD)return 0;let u;if(l>c){const h=(l**nD-c**rD)*aD;u=h<Hf?0:h<jf?h-h*qf*Eo:h-Eo}else{const h=(l**iD-c**sD)*cD;u=h>-Hf?0:h>-jf?h-h*qf*Eo:h+Eo}return u*100}const oa=.20689655172413793,lD=t=>t>oa**3?Math.cbrt(t):t/(3*oa**2)+4/29,uD=t=>t>oa?t**3:3*oa**2*(t-4/29);function Ny(t){const e=lD,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function Oy(t){const e=uD,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const hD=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],dD=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,fD=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],pD=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function Vy(t){const e=Array(3),n=dD,r=hD;for(let s=0;s<3;++s)e[s]=Math.round(eD(n(r[s][0]*t[0]+r[s][1]*t[1]+r[s][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function yh(t){let{r:e,g:n,b:r}=t;const s=[0,0,0],i=pD,o=fD;e=i(e/255),n=i(n/255),r=i(r/255);for(let a=0;a<3;++a)s[a]=o[a][0]*e+o[a][1]*n+o[a][2]*r;return s}const Wf=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,mD={rgb:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),rgba:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),hsl:(t,e,n,r)=>Kf({h:t,s:e,l:n,a:r}),hsla:(t,e,n,r)=>Kf({h:t,s:e,l:n,a:r}),hsv:(t,e,n,r)=>bi({h:t,s:e,v:n,a:r}),hsva:(t,e,n,r)=>bi({h:t,s:e,v:n,a:r})};function cn(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&Wf.test(t)){const{groups:e}=t.match(Wf),{fn:n,values:r}=e,s=r.split(/,\s*/).map(i=>i.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(i)/100:parseFloat(i));return mD[n](...s)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),_D(e)}else if(typeof t=="object"){if(Hc(t,["r","g","b"]))return t;if(Hc(t,["h","s","l"]))return bi(My(t));if(Hc(t,["h","s","v"]))return bi(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function bi(t){const{h:e,s:n,v:r,a:s}=t,i=a=>{const c=(a+e/60)%6;return r-r*n*Math.max(Math.min(c,4-c,1),0)},o=[i(5),i(3),i(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:s}}function Kf(t){return bi(My(t))}function My(t){const{h:e,s:n,l:r,a:s}=t,i=r+n*Math.min(r,1-r),o=i===0?0:2-2*r/i;return{h:e,s:o,v:i,a:s}}function wo(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function gD(t){let{r:e,g:n,b:r,a:s}=t;return`#${[wo(e),wo(n),wo(r),s!==void 0?wo(Math.round(s*255)):""].join("")}`}function _D(t){t=yD(t);let[e,n,r,s]=tD(t,2).map(i=>parseInt(i,16));return s=s===void 0?s:s/255,{r:e,g:n,b:r,a:s}}function yD(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=xf(xf(t,6),8,"F")),t}function vD(t,e){const n=Ny(yh(t));return n[0]=n[0]+e*10,Vy(Oy(n))}function ED(t,e){const n=Ny(yh(t));return n[0]=n[0]-e*10,Vy(Oy(n))}function wD(t){const e=cn(t);return yh(e)[1]}function ID(t){const e=Math.abs(zf(cn(0),cn(t)));return Math.abs(zf(cn(16777215),cn(t)))>Math.min(e,50)?"#fff":"#000"}function xy(t,e){return n=>Object.keys(t).reduce((r,s)=>{const o=typeof t[s]=="object"&&t[s]!=null&&!Array.isArray(t[s])?t[s]:{type:t[s]};return n&&s in n?r[s]={...o,default:n[s]}:r[s]=o,e&&!r[s].source&&(r[s].source=e),r},{})}const Ri=Symbol.for("vuetify:defaults");function TD(t){return te(t)}function Ly(){const t=Ws(Ri);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function AD(t,e){var n,r;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((r=t.props)==null?void 0:r[ts(e)])<"u"}function bD(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ly();const r=lc("useDefaults");if(e=e??r.type.name??r.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const s=Ae(()=>{var c;return(c=n.value)==null?void 0:c[t._as??e]}),i=new Proxy(t,{get(c,l){var h,d,p,T;const u=Reflect.get(c,l);return l==="class"||l==="style"?[(h=s.value)==null?void 0:h[l],u].filter(E=>E!=null):typeof l=="string"&&!AD(r.vnode,l)?((d=s.value)==null?void 0:d[l])??((T=(p=n.value)==null?void 0:p.global)==null?void 0:T[l])??u:u}}),o=Hr();tu(()=>{if(s.value){const c=Object.entries(s.value).filter(l=>{let[u]=l;return u.startsWith(u[0].toUpperCase())});o.value=c.length?Object.fromEntries(c):void 0}else o.value=void 0});function a(){const c=SD(Ri,r);Gp(Ri,Ae(()=>o.value?mn((c==null?void 0:c.value)??{},o.value):c==null?void 0:c.value))}return{props:i,provideSubDefaults:a}}function Zi(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=xy(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(r){return Zk(r,e)},t.props._as=String,t.setup=function(r,s){const i=Ly();if(!i.value)return t._setup(r,s);const{props:o,provideSubDefaults:a}=bD(r,r._as??t.name,i),c=t._setup(o,s);return a(),c}}return t}function RD(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?Zi:e0)(e)}function lc(t,e){const n=L0();if(!n)throw new Error(`[Vuetify] ${t} must be called from inside a setup function`);return n}let Fy=0,xo=new WeakMap;function Uy(){const t=lc("getUid");if(xo.has(t))return xo.get(t);{const e=Fy++;return xo.set(t,e),e}}Uy.reset=()=>{Fy=0,xo=new WeakMap};function SD(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:lc("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}function CD(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:h=>h,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:h=>h;const i=lc("useProxiedModel"),o=te(t[e]!==void 0?t[e]:n),a=ts(e),l=Ae(a!==e?()=>{var h,d,p,T;return t[e],!!(((h=i.vnode.props)!=null&&h.hasOwnProperty(e)||(d=i.vnode.props)!=null&&d.hasOwnProperty(a))&&((p=i.vnode.props)!=null&&p.hasOwnProperty(`onUpdate:${e}`)||(T=i.vnode.props)!=null&&T.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var h,d;return t[e],!!((h=i.vnode.props)!=null&&h.hasOwnProperty(e)&&((d=i.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${e}`)))});Yk(()=>!l.value,()=>{Gt(()=>t[e],h=>{o.value=h})});const u=Ae({get(){const h=t[e];return r(l.value?h:o.value)},set(h){const d=s(h),p=le(l.value?t[e]:o.value);p===d||r(p)===h||(o.value=d,i==null||i.emit(`update:${e}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>l.value?t[e]:o.value}),u}const PD={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},Gf="$vuetify.",Qf=(t,e)=>t.replace(/\{(\d+)\}/g,(n,r)=>String(e[+r])),$y=(t,e,n)=>function(r){for(var s=arguments.length,i=new Array(s>1?s-1:0),o=1;o<s;o++)i[o-1]=arguments[o];if(!r.startsWith(Gf))return Qf(r,i);const a=r.replace(Gf,""),c=t.value&&n.value[t.value],l=e.value&&n.value[e.value];let u=Vf(c,a,null);return u||(`${r}${t.value}`,u=Vf(l,a,null)),u||(u=r),typeof u!="string"&&(u=r),Qf(u,i)};function By(t,e){return(n,r)=>new Intl.NumberFormat([t.value,e.value],r).format(n)}function zc(t,e,n){const r=CD(t,e,t[e]??n.value);return r.value=t[e]??n.value,Gt(n,s=>{t[e]==null&&(r.value=n.value)}),r}function jy(t){return e=>{const n=zc(e,"locale",t.current),r=zc(e,"fallback",t.fallback),s=zc(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:r,messages:s,t:$y(n,r,s),n:By(n,r),provide:jy({current:n,fallback:r,messages:s})}}}function kD(t){const e=Hr((t==null?void 0:t.locale)??"en"),n=Hr((t==null?void 0:t.fallback)??"en"),r=te({en:PD,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:r,t:$y(e,n,r),n:By(e,n),provide:jy({current:e,fallback:n,messages:r})}}const Yf=Symbol.for("vuetify:locale");function DD(t){return t.name!=null}function ND(t){const e=t!=null&&t.adapter&&DD(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:kD(t),n=VD(e,t);return{...e,...n}}function OD(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function VD(t,e){const n=te((e==null?void 0:e.rtl)??OD()),r=Ae(()=>n.value[t.current.value]??!1);return{isRtl:r,rtl:n,rtlClasses:Ae(()=>`v-locale--is-${r.value?"rtl":"ltr"}`)}}const Si={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function MD(t,e){const n=[];let r=[];const s=qy(t),i=Hy(t),o=(s.getDay()-Si[e.slice(-2).toUpperCase()]+7)%7,a=(i.getDay()-Si[e.slice(-2).toUpperCase()]+7)%7;for(let c=0;c<o;c++){const l=new Date(s);l.setDate(l.getDate()-(o-c)),r.push(l)}for(let c=1;c<=i.getDate();c++){const l=new Date(t.getFullYear(),t.getMonth(),c);r.push(l),r.length===7&&(n.push(r),r=[])}for(let c=1;c<7-a;c++){const l=new Date(i);l.setDate(l.getDate()+c),r.push(l)}return r.length>0&&n.push(r),n}function xD(t,e){const n=new Date(t);for(;n.getDay()!==(Si[e.slice(-2).toUpperCase()]??0);)n.setDate(n.getDate()-1);return n}function LD(t,e){const n=new Date(t),r=((Si[e.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==r;)n.setDate(n.getDate()+1);return n}function qy(t){return new Date(t.getFullYear(),t.getMonth(),1)}function Hy(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function FD(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const UD=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function zy(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(UD.test(t))return FD(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const Jf=new Date(2e3,0,2);function $D(t){const e=Si[t.slice(-2).toUpperCase()];return Dy(7).map(n=>{const r=new Date(Jf);return r.setDate(Jf.getDate()+e+n),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(r)})}function BD(t,e,n,r){const s=zy(t)??new Date,i=r==null?void 0:r[e];if(typeof i=="function")return i(s,e,n);let o={};switch(e){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const a=s.getDate(),c=new Intl.DateTimeFormat(n,{month:"long"}).format(s);return`${a} ${c}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(s.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:o=i??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(s)}function jD(t,e){const n=t.toJsDate(e),r=n.getFullYear(),s=Lf(String(n.getMonth()+1),2,"0"),i=Lf(String(n.getDate()),2,"0");return`${r}-${s}-${i}`}function qD(t){const[e,n,r]=t.split("-").map(Number);return new Date(e,n-1,r)}function HD(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function zD(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function WD(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function KD(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function GD(t,e){const n=new Date(t);return n.setDate(1),n.setMonth(n.getMonth()+e),n}function QD(t){return t.getFullYear()}function YD(t){return t.getMonth()}function JD(t){return t.getDate()}function XD(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function ZD(t){return new Date(t.getFullYear(),t.getMonth()-1,1)}function eN(t){return t.getHours()}function tN(t){return t.getMinutes()}function nN(t){return new Date(t.getFullYear(),0,1)}function rN(t){return new Date(t.getFullYear(),11,31)}function sN(t,e){return aa(t,e[0])&&aN(t,e[1])}function iN(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function aa(t,e){return t.getTime()>e.getTime()}function oN(t,e){return aa(Bl(t),Bl(e))}function aN(t,e){return t.getTime()<e.getTime()}function Xf(t,e){return t.getTime()===e.getTime()}function cN(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function lN(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function uN(t,e){return t.getFullYear()===e.getFullYear()}function hN(t,e,n){const r=new Date(t),s=new Date(e);switch(n){case"years":return r.getFullYear()-s.getFullYear();case"quarters":return Math.floor((r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12)/4);case"months":return r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12;case"weeks":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24));case"hours":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60));case"minutes":return Math.floor((r.getTime()-s.getTime())/(1e3*60));case"seconds":return Math.floor((r.getTime()-s.getTime())/1e3);default:return r.getTime()-s.getTime()}}function dN(t,e){const n=new Date(t);return n.setHours(e),n}function fN(t,e){const n=new Date(t);return n.setMinutes(e),n}function pN(t,e){const n=new Date(t);return n.setMonth(e),n}function mN(t,e){const n=new Date(t);return n.setDate(e),n}function gN(t,e){const n=new Date(t);return n.setFullYear(e),n}function Bl(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0)}function _N(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class yN{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return zy(e)}toJsDate(e){return e}toISO(e){return jD(this,e)}parseISO(e){return qD(e)}addMinutes(e,n){return HD(e,n)}addHours(e,n){return zD(e,n)}addDays(e,n){return WD(e,n)}addWeeks(e,n){return KD(e,n)}addMonths(e,n){return GD(e,n)}getWeekArray(e){return MD(e,this.locale)}startOfWeek(e){return xD(e,this.locale)}endOfWeek(e){return LD(e,this.locale)}startOfMonth(e){return qy(e)}endOfMonth(e){return Hy(e)}format(e,n){return BD(e,n,this.locale,this.formats)}isEqual(e,n){return Xf(e,n)}isValid(e){return iN(e)}isWithinRange(e,n){return sN(e,n)}isAfter(e,n){return aa(e,n)}isAfterDay(e,n){return oN(e,n)}isBefore(e,n){return!aa(e,n)&&!Xf(e,n)}isSameDay(e,n){return cN(e,n)}isSameMonth(e,n){return lN(e,n)}isSameYear(e,n){return uN(e,n)}setMinutes(e,n){return fN(e,n)}setHours(e,n){return dN(e,n)}setMonth(e,n){return pN(e,n)}setDate(e,n){return mN(e,n)}setYear(e,n){return gN(e,n)}getDiff(e,n,r){return hN(e,n,r)}getWeekdays(){return $D(this.locale)}getYear(e){return QD(e)}getMonth(e){return YD(e)}getDate(e){return JD(e)}getNextMonth(e){return XD(e)}getPreviousMonth(e){return ZD(e)}getHours(e){return eN(e)}getMinutes(e){return tN(e)}startOfDay(e){return Bl(e)}endOfDay(e){return _N(e)}startOfYear(e){return nN(e)}endOfYear(e){return rN(e)}}const vN=Symbol.for("vuetify:date-options"),Zf=Symbol.for("vuetify:date-adapter");function EN(t,e){const n=mn({adapter:yN,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:wN(n,e)}}function wN(t,e){const n=ys(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return Gt(e.current,r=>{n.locale=t.locale[r]??r??n.locale}),n}const ep=Symbol.for("vuetify:display"),tp={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},IN=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:tp;return mn(tp,t)};function np(t){return Kt&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function rp(t){return Kt&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function sp(t){const e=Kt&&!t?window.navigator.userAgent:"ssr";function n(T){return!!e.match(T)}const r=n(/android/i),s=n(/iphone|ipad|ipod/i),i=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),c=n(/edge/i),l=n(/firefox/i),u=n(/opera/i),h=n(/win/i),d=n(/mac/i),p=n(/linux/i);return{android:r,ios:s,cordova:i,electron:o,chrome:a,edge:c,firefox:l,opera:u,win:h,mac:d,linux:p,touch:Jk,ssr:e==="ssr"}}function TN(t,e){const{thresholds:n,mobileBreakpoint:r}=IN(t),s=Hr(rp(e)),i=Hr(sp(e)),o=ys({}),a=Hr(np(e));function c(){s.value=rp(),a.value=np()}function l(){c(),i.value=sp()}return tu(()=>{const u=a.value<n.sm,h=a.value<n.md&&!u,d=a.value<n.lg&&!(h||u),p=a.value<n.xl&&!(d||h||u),T=a.value<n.xxl&&!(p||d||h||u),E=a.value>=n.xxl,R=u?"xs":h?"sm":d?"md":p?"lg":T?"xl":"xxl",U=typeof r=="number"?r:n[r],K=a.value<U;o.xs=u,o.sm=h,o.md=d,o.lg=p,o.xl=T,o.xxl=E,o.smAndUp=!u,o.mdAndUp=!(u||h),o.lgAndUp=!(u||h||d),o.xlAndUp=!(u||h||d||p),o.smAndDown=!(d||p||T||E),o.mdAndDown=!(p||T||E),o.lgAndDown=!(T||E),o.xlAndDown=!E,o.name=R,o.height=s.value,o.width=a.value,o.mobile=K,o.mobileBreakpoint=r,o.platform=i.value,o.thresholds=n}),Kt&&window.addEventListener("resize",c,{passive:!0}),{...Vv(o),update:l,ssr:!!e}}const AN=Symbol.for("vuetify:goto");function bN(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:t=>t,easeInQuad:t=>t**2,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t**2:-1+(4-2*t)*t,easeInCubic:t=>t**3,easeOutCubic:t=>--t**3+1,easeInOutCubic:t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t**4,easeOutQuart:t=>1- --t**4,easeInOutQuart:t=>t<.5?8*t**4:1-8*--t**4,easeInQuint:t=>t**5,easeOutQuint:t=>1+--t**5,easeInOutQuint:t=>t<.5?16*t**5:1+16*--t**5}}}function RN(t,e){return{rtl:e.isRtl,options:mn(bN(),t)}}const SN={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},CN={component:t=>q0(Wy,{...t,class:"mdi"})},PN=[String,Function,Object,Array],ip=Symbol.for("vuetify:icons"),uc=xy({icon:{type:PN},tag:{type:String,required:!0}},"icon");RD()({name:"VComponentIcon",props:uc(),setup(t,e){let{slots:n}=e;return()=>{const r=t.icon;return se(t.tag,null,{default:()=>{var s;return[t.icon?se(r,null,null):(s=n.default)==null?void 0:s.call(n)]}})}}});const kN=Zi({name:"VSvgIcon",inheritAttrs:!1,props:uc(),setup(t,e){let{attrs:n}=e;return()=>se(t.tag,am(n,{style:null}),{default:()=>[se("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(r=>Array.isArray(r)?se("path",{d:r[0],"fill-opacity":r[1]},null):se("path",{d:r},null)):se("path",{d:t.icon},null)])]})}});Zi({name:"VLigatureIcon",props:uc(),setup(t){return()=>se(t.tag,null,{default:()=>[t.icon]})}});const Wy=Zi({name:"VClassIcon",props:uc(),setup(t){return()=>se(t.tag,{class:t.icon},null)}});function DN(){return{svg:{component:kN},class:{component:Wy}}}function NN(t){const e=DN(),n=(t==null?void 0:t.defaultSet)??"mdi";return n==="mdi"&&!e.mdi&&(e.mdi=CN),mn({defaultSet:n,sets:e,aliases:{...SN,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},t)}const op=Symbol.for("vuetify:theme");function ap(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function ON(){var r,s;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ap();const e=ap();if(!t)return{...e,isDisabled:!0};const n={};for(const[i,o]of Object.entries(t.themes??{})){const a=o.dark||i==="dark"?(r=e.themes)==null?void 0:r.dark:(s=e.themes)==null?void 0:s.light;n[i]=mn(a,o)}return mn(e,{...t,themes:n})}function VN(t){const e=ON(t),n=te(e.defaultTheme),r=te(e.themes),s=Ae(()=>{const u={};for(const[h,d]of Object.entries(r.value)){const p=u[h]={...d,colors:{...d.colors}};if(e.variations)for(const T of e.variations.colors){const E=p.colors[T];if(E)for(const R of["lighten","darken"]){const U=R==="lighten"?vD:ED;for(const K of Dy(e.variations[R],1))p.colors[`${T}-${R}-${K}`]=gD(U(cn(E),K))}}for(const T of Object.keys(p.colors)){if(/^on-[a-z]/.test(T)||p.colors[`on-${T}`])continue;const E=`on-${T}`,R=cn(p.colors[T]);p.colors[E]=ID(R)}}return u}),i=Ae(()=>s.value[n.value]),o=Ae(()=>{var T;const u=[];(T=i.value)!=null&&T.dark&&tr(u,":root",["color-scheme: dark"]),tr(u,":root",cp(i.value));for(const[E,R]of Object.entries(s.value))tr(u,`.v-theme--${E}`,[`color-scheme: ${R.dark?"dark":"normal"}`,...cp(R)]);const h=[],d=[],p=new Set(Object.values(s.value).flatMap(E=>Object.keys(E.colors)));for(const E of p)/^on-[a-z]/.test(E)?tr(d,`.${E}`,[`color: rgb(var(--v-theme-${E})) !important`]):(tr(h,`.bg-${E}`,[`--v-theme-overlay-multiplier: var(--v-theme-${E}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${E})) !important`,`color: rgb(var(--v-theme-on-${E})) !important`]),tr(d,`.text-${E}`,[`color: rgb(var(--v-theme-${E})) !important`]),tr(d,`.border-${E}`,[`--v-border-color: var(--v-theme-${E})`]));return u.push(...h,...d),u.map((E,R)=>R===0?E:`    ${E}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function c(u){if(e.isDisabled)return;const h=u._context.provides.usehead;if(h)if(h.push){const p=h.push(a);Kt&&Gt(o,()=>{p.patch(a)})}else Kt?(h.addHeadObjs(Ae(a)),tu(()=>h.updateDOM())):h.addHeadObjs(a());else{let T=function(){if(typeof document<"u"&&!p){const E=document.createElement("style");E.type="text/css",E.id="vuetify-theme-stylesheet",e.cspNonce&&E.setAttribute("nonce",e.cspNonce),p=E,document.head.appendChild(p)}p&&(p.innerHTML=o.value)};var d=T;let p=Kt?document.getElementById("vuetify-theme-stylesheet"):null;Kt?Gt(o,T,{immediate:!0}):T()}}const l=Ae(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:c,isDisabled:e.isDisabled,name:n,themes:r,current:i,computedThemes:s,themeClasses:l,styles:o,global:{name:n,current:i}}}function tr(t,e,n){t.push(`${e} {
`,...n.map(r=>`  ${r};
`),`}
`)}function cp(t){const e=t.dark?2:1,n=t.dark?1:2,r=[];for(const[s,i]of Object.entries(t.colors)){const o=cn(i);r.push(`--v-theme-${s}: ${o.r},${o.g},${o.b}`),s.startsWith("on-")||r.push(`--v-theme-${s}-overlay-multiplier: ${wD(i)>.18?e:n}`)}for(const[s,i]of Object.entries(t.variables)){const o=typeof i=="string"&&i.startsWith("#")?cn(i):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;r.push(`--v-${s}: ${a??i}`)}return r}function Ky(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,r=mn(e,n),{aliases:s={},components:i={},directives:o={}}=r,a=TD(r.defaults),c=TN(r.display,r.ssr),l=VN(r.theme),u=NN(r.icons),h=ND(r.locale),d=EN(r.date,h),p=RN(r.goTo,h);return{install:E=>{for(const R in o)E.directive(R,o[R]);for(const R in i)E.component(R,i[R]);for(const R in s)E.component(R,Zi({...s[R],name:R,aliasName:s[R].name}));if(l.install(E),E.provide(Ri,a),E.provide(ep,c),E.provide(op,l),E.provide(ip,u),E.provide(Yf,h),E.provide(vN,d.options),E.provide(Zf,d.instance),E.provide(AN,p),Kt&&r.ssr)if(E.$nuxt)E.$nuxt.hook("app:suspense:resolve",()=>{c.update()});else{const{mount:R}=E;E.mount=function(){const U=R(...arguments);return fa(()=>c.update()),E.mount=R,U}}Uy.reset(),E.mixin({computed:{$vuetify(){return ys({defaults:xr.call(this,Ri),display:xr.call(this,ep),theme:xr.call(this,op),icons:xr.call(this,ip),locale:xr.call(this,Yf),date:xr.call(this,Zf)})}}})},defaults:a,display:c,theme:l,icons:u,locale:h,date:d,goTo:p}}const MN="3.6.3";Ky.version=MN;function xr(t){var r,s;const e=this.$,n=((r=e.parent)==null?void 0:r.provides)??((s=e.vnode.appContext)==null?void 0:s.provides);if(n&&t in n)return n[t]}const xN=Ky({theme:{defaultTheme:"light",themes:{light:{dark:!1,colors:{primary:"#FF6A00",secondary:"#F7F7F7",accent:"#FFB27D",error:"#EF4444",info:"#0EA5E9",success:"#22C55E",warning:"#F59E0B",background:"#FFFFFF",surface:"#FFFFFF"}}}}}),LN="modulepreload",FN=function(t){return"/friendzy/"+t},lp={},UN=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(a=>{if(a=FN(a),a in lp)return;lp[a]=!0;const c=a.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":LN,c||(u.as="script",u.crossOrigin=""),u.href=a,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((h,d)=>{u.addEventListener("load",h),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};async function $N(){(await UN(()=>import("./webfontloader-BbsTpSw6.js").then(e=>e.w),[])).load({google:{families:["Inter:100,300,400,500,600,700,800,900&display=swap"]}})}$N();yE(Qk).use(xN).mount("#app");
