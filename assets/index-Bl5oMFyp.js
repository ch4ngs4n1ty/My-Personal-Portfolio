(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var jf={exports:{}},Co={};var g0;function uS(){if(g0)return Co;g0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Co.Fragment=e,Co.jsx=i,Co.jsxs=i,Co}var _0;function fS(){return _0||(_0=1,jf.exports=uS()),jf.exports}var xt=fS(),Zf={exports:{}},ae={};var v0;function dS(){if(v0)return ae;v0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function E(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function x(D,j,pt){this.props=D,this.context=j,this.refs=M,this.updater=pt||A}x.prototype.isReactComponent={},x.prototype.setState=function(D,j){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,j,"setState")},x.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function I(){}I.prototype=x.prototype;function O(D,j,pt){this.props=D,this.context=j,this.refs=M,this.updater=pt||A}var N=O.prototype=new I;N.constructor=O,C(N,x.prototype),N.isPureReactComponent=!0;var z=Array.isArray;function B(){}var P={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function R(D,j,pt){var At=pt.ref;return{$$typeof:o,type:D,key:j,ref:At!==void 0?At:null,props:pt}}function w(D,j){return R(D.type,j,D.props)}function X(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function at(D){var j={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(pt){return j[pt]})}var it=/\/+/g;function ct(D,j){return typeof D=="object"&&D!==null&&D.key!=null?at(""+D.key):j.toString(36)}function ft(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(B,B):(D.status="pending",D.then(function(j){D.status==="pending"&&(D.status="fulfilled",D.value=j)},function(j){D.status==="pending"&&(D.status="rejected",D.reason=j)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function L(D,j,pt,At,zt){var tt=typeof D;(tt==="undefined"||tt==="boolean")&&(D=null);var dt=!1;if(D===null)dt=!0;else switch(tt){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(D.$$typeof){case o:case e:dt=!0;break;case v:return dt=D._init,L(dt(D._payload),j,pt,At,zt)}}if(dt)return zt=zt(D),dt=At===""?"."+ct(D,0):At,z(zt)?(pt="",dt!=null&&(pt=dt.replace(it,"$&/")+"/"),L(zt,j,pt,"",function(Ht){return Ht})):zt!=null&&(X(zt)&&(zt=w(zt,pt+(zt.key==null||D&&D.key===zt.key?"":(""+zt.key).replace(it,"$&/")+"/")+dt)),j.push(zt)),1;dt=0;var Dt=At===""?".":At+":";if(z(D))for(var Xt=0;Xt<D.length;Xt++)At=D[Xt],tt=Dt+ct(At,Xt),dt+=L(At,j,pt,tt,zt);else if(Xt=E(D),typeof Xt=="function")for(D=Xt.call(D),Xt=0;!(At=D.next()).done;)At=At.value,tt=Dt+ct(At,Xt++),dt+=L(At,j,pt,tt,zt);else if(tt==="object"){if(typeof D.then=="function")return L(ft(D),j,pt,At,zt);throw j=String(D),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return dt}function H(D,j,pt){if(D==null)return D;var At=[],zt=0;return L(D,At,"","",function(tt){return j.call(pt,tt,zt++)}),At}function $(D){if(D._status===-1){var j=D._result;j=j(),j.then(function(pt){(D._status===0||D._status===-1)&&(D._status=1,D._result=pt)},function(pt){(D._status===0||D._status===-1)&&(D._status=2,D._result=pt)}),D._status===-1&&(D._status=0,D._result=j)}if(D._status===1)return D._result.default;throw D._result}var lt=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},_t={map:H,forEach:function(D,j,pt){H(D,function(){j.apply(this,arguments)},pt)},count:function(D){var j=0;return H(D,function(){j++}),j},toArray:function(D){return H(D,function(j){return j})||[]},only:function(D){if(!X(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return ae.Activity=_,ae.Children=_t,ae.Component=x,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=O,ae.StrictMode=r,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ae.__COMPILER_RUNTIME={__proto__:null,c:function(D){return P.H.useMemoCache(D)}},ae.cache=function(D){return function(){return D.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(D,j,pt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var At=C({},D.props),zt=D.key;if(j!=null)for(tt in j.key!==void 0&&(zt=""+j.key),j)!K.call(j,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&j.ref===void 0||(At[tt]=j[tt]);var tt=arguments.length-2;if(tt===1)At.children=pt;else if(1<tt){for(var dt=Array(tt),Dt=0;Dt<tt;Dt++)dt[Dt]=arguments[Dt+2];At.children=dt}return R(D.type,zt,At)},ae.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},ae.createElement=function(D,j,pt){var At,zt={},tt=null;if(j!=null)for(At in j.key!==void 0&&(tt=""+j.key),j)K.call(j,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(zt[At]=j[At]);var dt=arguments.length-2;if(dt===1)zt.children=pt;else if(1<dt){for(var Dt=Array(dt),Xt=0;Xt<dt;Xt++)Dt[Xt]=arguments[Xt+2];zt.children=Dt}if(D&&D.defaultProps)for(At in dt=D.defaultProps,dt)zt[At]===void 0&&(zt[At]=dt[At]);return R(D,tt,zt)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(D){return{$$typeof:h,render:D}},ae.isValidElement=X,ae.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:$}},ae.memo=function(D,j){return{$$typeof:p,type:D,compare:j===void 0?null:j}},ae.startTransition=function(D){var j=P.T,pt={};P.T=pt;try{var At=D(),zt=P.S;zt!==null&&zt(pt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(B,lt)}catch(tt){lt(tt)}finally{j!==null&&pt.types!==null&&(j.types=pt.types),P.T=j}},ae.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ae.use=function(D){return P.H.use(D)},ae.useActionState=function(D,j,pt){return P.H.useActionState(D,j,pt)},ae.useCallback=function(D,j){return P.H.useCallback(D,j)},ae.useContext=function(D){return P.H.useContext(D)},ae.useDebugValue=function(){},ae.useDeferredValue=function(D,j){return P.H.useDeferredValue(D,j)},ae.useEffect=function(D,j){return P.H.useEffect(D,j)},ae.useEffectEvent=function(D){return P.H.useEffectEvent(D)},ae.useId=function(){return P.H.useId()},ae.useImperativeHandle=function(D,j,pt){return P.H.useImperativeHandle(D,j,pt)},ae.useInsertionEffect=function(D,j){return P.H.useInsertionEffect(D,j)},ae.useLayoutEffect=function(D,j){return P.H.useLayoutEffect(D,j)},ae.useMemo=function(D,j){return P.H.useMemo(D,j)},ae.useOptimistic=function(D,j){return P.H.useOptimistic(D,j)},ae.useReducer=function(D,j,pt){return P.H.useReducer(D,j,pt)},ae.useRef=function(D){return P.H.useRef(D)},ae.useState=function(D){return P.H.useState(D)},ae.useSyncExternalStore=function(D,j,pt){return P.H.useSyncExternalStore(D,j,pt)},ae.useTransition=function(){return P.H.useTransition()},ae.version="19.2.3",ae}var x0;function Rh(){return x0||(x0=1,Zf.exports=dS()),Zf.exports}var Xn=Rh(),Kf={exports:{}},wo={},Qf={exports:{}},Jf={};var S0;function hS(){return S0||(S0=1,(function(o){function e(L,H){var $=L.length;L.push(H);t:for(;0<$;){var lt=$-1>>>1,_t=L[lt];if(0<l(_t,H))L[lt]=H,L[$]=_t,$=lt;else break t}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var H=L[0],$=L.pop();if($!==H){L[0]=$;t:for(var lt=0,_t=L.length,D=_t>>>1;lt<D;){var j=2*(lt+1)-1,pt=L[j],At=j+1,zt=L[At];if(0>l(pt,$))At<_t&&0>l(zt,pt)?(L[lt]=zt,L[At]=$,lt=At):(L[lt]=pt,L[j]=$,lt=j);else if(At<_t&&0>l(zt,$))L[lt]=zt,L[At]=$,lt=At;else break t}}return H}function l(L,H){var $=L.sortIndex-H.sortIndex;return $!==0?$:L.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,_=null,S=3,E=!1,A=!1,C=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function N(L){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=L)r(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function z(L){if(C=!1,N(L),!A)if(i(m)!==null)A=!0,B||(B=!0,at());else{var H=i(p);H!==null&&ft(z,H.startTime-L)}}var B=!1,P=-1,K=5,R=-1;function w(){return M?!0:!(o.unstable_now()-R<K)}function X(){if(M=!1,B){var L=o.unstable_now();R=L;var H=!0;try{t:{A=!1,C&&(C=!1,I(P),P=-1),E=!0;var $=S;try{e:{for(N(L),_=i(m);_!==null&&!(_.expirationTime>L&&w());){var lt=_.callback;if(typeof lt=="function"){_.callback=null,S=_.priorityLevel;var _t=lt(_.expirationTime<=L);if(L=o.unstable_now(),typeof _t=="function"){_.callback=_t,N(L),H=!0;break e}_===i(m)&&r(m),N(L)}else r(m);_=i(m)}if(_!==null)H=!0;else{var D=i(p);D!==null&&ft(z,D.startTime-L),H=!1}}break t}finally{_=null,S=$,E=!1}H=void 0}}finally{H?at():B=!1}}}var at;if(typeof O=="function")at=function(){O(X)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,ct=it.port2;it.port1.onmessage=X,at=function(){ct.postMessage(null)}}else at=function(){x(X,0)};function ft(L,H){P=x(function(){L(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(L){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var $=S;S=H;try{return L()}finally{S=$}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(L,H){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var $=S;S=L;try{return H()}finally{S=$}},o.unstable_scheduleCallback=function(L,H,$){var lt=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?lt+$:lt):$=lt,L){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=$+_t,L={id:v++,callback:H,priorityLevel:L,startTime:$,expirationTime:_t,sortIndex:-1},$>lt?(L.sortIndex=$,e(p,L),i(m)===null&&L===i(p)&&(C?(I(P),P=-1):C=!0,ft(z,$-lt))):(L.sortIndex=_t,e(m,L),A||E||(A=!0,B||(B=!0,at()))),L},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(L){var H=S;return function(){var $=S;S=H;try{return L.apply(this,arguments)}finally{S=$}}}})(Jf)),Jf}var M0;function pS(){return M0||(M0=1,Qf.exports=hS()),Qf.exports}var $f={exports:{}},wn={};var y0;function mS(){if(y0)return wn;y0=1;var o=Rh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,v)},wn.flushSync=function(m){var p=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=v,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:E}):v==="script"&&r.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.2.3",wn}var E0;function gS(){if(E0)return $f.exports;E0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),$f.exports=mS(),$f.exports}var b0;function _S(){if(b0)return wo;b0=1;var o=pS(),e=Rh(),i=gS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,b=c.child;b;){if(b===a){g=!0,a=c,s=f;break}if(b===s){g=!0,s=c,a=f;break}b=b.sibling}if(!g){for(b=f.child;b;){if(b===a){g=!0,a=f,s=c;break}if(b===s){g=!0,s=f,a=c;break}b=b.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),O=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function at(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var it=Symbol.for("react.client.reference");function ct(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===it?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case B:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case O:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:ct(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return ct(t(n))}catch{}}return null}var ft=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},lt=[],_t=-1;function D(t){return{current:t}}function j(t){0>_t||(t.current=lt[_t],lt[_t]=null,_t--)}function pt(t,n){_t++,lt[_t]=t.current,t.current=n}var At=D(null),zt=D(null),tt=D(null),dt=D(null);function Dt(t,n){switch(pt(tt,n),pt(zt,t),pt(At,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Bg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Bg(n),t=Hg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}j(At),pt(At,t)}function Xt(){j(At),j(zt),j(tt)}function Ht(t){t.memoizedState!==null&&pt(dt,t);var n=At.current,a=Hg(n,t.type);n!==a&&(pt(zt,t),pt(At,a))}function de(t){zt.current===t&&(j(At),j(zt)),dt.current===t&&(j(dt),bo._currentValue=$)}var Ke,ge;function he(t){if(Ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ke=n&&n[1]||"",ge=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+t+ge}var Re=!1;function se(t,n){if(!t||Re)return"";Re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ot){var nt=ot}Reflect.construct(t,[],vt)}else{try{vt.call()}catch(ot){nt=ot}t.call(vt.prototype)}}else{try{throw Error()}catch(ot){nt=ot}(vt=t())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ot){if(ot&&nt&&typeof ot.stack=="string")return[ot.stack,nt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],b=f[1];if(g&&b){var F=g.split(`
`),J=b.split(`
`);for(c=s=0;s<F.length&&!F[s].includes("DetermineComponentFrameRoot");)s++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(s===F.length||c===J.length)for(s=F.length-1,c=J.length-1;1<=s&&0<=c&&F[s]!==J[c];)c--;for(;1<=s&&0<=c;s--,c--)if(F[s]!==J[c]){if(s!==1||c!==1)do if(s--,c--,0>c||F[s]!==J[c]){var ht=`
`+F[s].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=s&&0<=c);break}}}finally{Re=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?he(a):""}function Qe(t,n){switch(t.tag){case 26:case 27:case 5:return he(t.type);case 16:return he("Lazy");case 13:return t.child!==n&&n!==null?he("Suspense Fallback"):he("Suspense");case 19:return he("SuspenseList");case 0:case 15:return se(t.type,!1);case 11:return se(t.type.render,!1);case 1:return se(t.type,!0);case 31:return he("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=Qe(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ye=Object.prototype.hasOwnProperty,Me=o.unstable_scheduleCallback,Ue=o.unstable_cancelCallback,Yt=o.unstable_shouldYield,U=o.unstable_requestPaint,y=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,mt=o.unstable_ImmediatePriority,Mt=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,kt=o.log,ee=o.unstable_setDisableYieldValue,Et=null,bt=null;function Ft(t){if(typeof kt=="function"&&ee(t),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Et,t)}catch{}}var Pt=Math.clz32?Math.clz32:k,wt=Math.log,le=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(wt(t)/le|0)|0}var Nt=256,Tt=262144,It=4194304;function yt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function St(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~f,s!==0?c=yt(s):(g&=b,g!==0?c=yt(g):a||(a=b&~t,a!==0&&(c=yt(a))))):(b=s&~f,b!==0?c=yt(b):g!==0?c=yt(g):a||(a=s&~t,a!==0&&(c=yt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Rt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Le(){var t=It;return It<<=1,(It&62914560)===0&&(It=4194304),t}function ye(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Cn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function gi(t,n,a,s,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,F=t.expirationTimes,J=t.hiddenUpdates;for(a=g&~a;0<a;){var ht=31-Pt(a),vt=1<<ht;b[ht]=0,F[ht]=-1;var nt=J[ht];if(nt!==null)for(J[ht]=null,ht=0;ht<nt.length;ht++){var ot=nt[ht];ot!==null&&(ot.lane&=-536870913)}a&=~vt}s!==0&&jo(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function jo(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Pt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Ps(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Pt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Dr(t,n){var a=n&-n;return a=(a&42)!==0?1:Is(a),(a&(t.suspendedLanes|n))!==0?0:a}function Is(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ur(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function zs(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:c0(t.type))}function Ci(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var ei=Math.random().toString(36).slice(2),rn="__reactFiber$"+ei,_n="__reactProps$"+ei,_i="__reactContainer$"+ei,Nr="__reactEvents$"+ei,Lr="__reactListeners$"+ei,Zo="__reactHandles$"+ei,Fs="__reactResources$"+ei,tr="__reactMarker$"+ei;function Bs(t){delete t[rn],delete t[_n],delete t[Nr],delete t[Lr],delete t[Zo]}function xa(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[_i]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Yg(t);t!==null;){if(a=t[rn])return a;t=Yg(t)}return n}t=a,a=t.parentNode}return null}function Sa(t){if(t=t[rn]||t[_i]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function er(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ma(t){var n=t[Fs];return n||(n=t[Fs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function T(t){t[tr]=!0}var q=new Set,st={};function et(t,n){Z(t,n),Z(t+"Capture",n)}function Z(t,n){for(st[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bt={},Lt={};function Gt(t){return Ye.call(Lt,t)?!0:Ye.call(Bt,t)?!1:Ut.test(t)?Lt[t]=!0:(Bt[t]=!0,!1)}function Wt(t,n,a){if(Gt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Jt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function qt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function $t(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ce(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function je(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ke(t){if(!t._valueTracker){var n=Ce(t)?"checked":"value";t._valueTracker=je(t,n,""+t[n])}}function Ne(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Ce(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var we=/[\n"\\]/g;function ie(t){return t.replace(we,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function vn(t,n,a,s,c,f,g,b){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$t(n)):t.value!==""+$t(n)&&(t.value=""+$t(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?xn(t,g,$t(n)):a!=null?xn(t,g,$t(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+$t(b):t.removeAttribute("name")}function Gi(t,n,a,s,c,f,g,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ke(t);return}a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),ke(t)}function xn(t,n,a){n==="number"&&Kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ni(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Oe(t,n,a){if(n!=null&&(n=""+$t(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$t(a):""}function Sn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ft(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=$t(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),ke(t)}function fn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yn(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Mn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Or(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&yn(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&yn(t,f,n[f])}function vi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ov=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ko(t){return ov.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Vi(){}var kc=null;function Wc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pr=null,Ir=null;function Fh(t){var n=Sa(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;t:switch(t=n.stateNode,n.type){case"input":if(vn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ie(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[_n]||null;if(!c)throw Error(r(90));vn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Ne(s)}break t;case"textarea":Oe(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ni(t,!!a.multiple,n,!1)}}}var qc=!1;function Bh(t,n,a){if(qc)return t(n,a);qc=!0;try{var s=t(n);return s}finally{if(qc=!1,(Pr!==null||Ir!==null)&&(zl(),Pr&&(n=Pr,t=Ir,Ir=Pr=null,Fh(n),t)))for(n=0;n<t.length;n++)Fh(t[n])}}function Hs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[_n]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=!1;if(Xi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Yc=!1}var ya=null,jc=null,Qo=null;function Hh(){if(Qo)return Qo;var t,n=jc,a=n.length,s,c="value"in ya?ya.value:ya.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return Qo=c.slice(t,1<s?1-s:void 0)}function Jo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function $o(){return!0}function Gh(){return!1}function In(t){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$o:Gh,this.isPropagationStopped=Gh,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=In(nr),Vs=_({},nr,{view:0,detail:0}),lv=In(Vs),Zc,Kc,Xs,el=_({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(Zc=t.screenX-Xs.screenX,Kc=t.screenY-Xs.screenY):Kc=Zc=0,Xs=t),Zc)},movementY:function(t){return"movementY"in t?t.movementY:Kc}}),Vh=In(el),cv=_({},el,{dataTransfer:0}),uv=In(cv),fv=_({},Vs,{relatedTarget:0}),Qc=In(fv),dv=_({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),hv=In(dv),pv=_({},nr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mv=In(pv),gv=_({},nr,{data:0}),Xh=In(gv),_v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=xv[t])?!!n[t]:!1}function Jc(){return Sv}var Mv=_({},Vs,{key:function(t){if(t.key){var n=_v[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jc,charCode:function(t){return t.type==="keypress"?Jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yv=In(Mv),Ev=_({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kh=In(Ev),bv=_({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jc}),Tv=In(bv),Av=_({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rv=In(Av),Cv=_({},el,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wv=In(Cv),Dv=_({},nr,{newState:0,oldState:0}),Uv=In(Dv),Nv=[9,13,27,32],$c=Xi&&"CompositionEvent"in window,ks=null;Xi&&"documentMode"in document&&(ks=document.documentMode);var Lv=Xi&&"TextEvent"in window&&!ks,Wh=Xi&&(!$c||ks&&8<ks&&11>=ks),qh=" ",Yh=!1;function jh(t,n){switch(t){case"keyup":return Nv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zr=!1;function Ov(t,n){switch(t){case"compositionend":return Zh(n);case"keypress":return n.which!==32?null:(Yh=!0,qh);case"textInput":return t=n.data,t===qh&&Yh?null:t;default:return null}}function Pv(t,n){if(zr)return t==="compositionend"||!$c&&jh(t,n)?(t=Hh(),Qo=jc=ya=null,zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wh&&n.locale!=="ko"?null:n.data;default:return null}}var Iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Iv[t.type]:n==="textarea"}function Qh(t,n,a,s){Pr?Ir?Ir.push(s):Ir=[s]:Pr=s,n=kl(n,"onChange"),0<n.length&&(a=new tl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ws=null,qs=null;function zv(t){Lg(t,0)}function nl(t){var n=er(t);if(Ne(n))return t}function Jh(t,n){if(t==="change")return n}var $h=!1;if(Xi){var tu;if(Xi){var eu="oninput"in document;if(!eu){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),eu=typeof tp.oninput=="function"}tu=eu}else tu=!1;$h=tu&&(!document.documentMode||9<document.documentMode)}function ep(){Ws&&(Ws.detachEvent("onpropertychange",np),qs=Ws=null)}function np(t){if(t.propertyName==="value"&&nl(qs)){var n=[];Qh(n,qs,t,Wc(t)),Bh(zv,n)}}function Fv(t,n,a){t==="focusin"?(ep(),Ws=n,qs=a,Ws.attachEvent("onpropertychange",np)):t==="focusout"&&ep()}function Bv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nl(qs)}function Hv(t,n){if(t==="click")return nl(n)}function Gv(t,n){if(t==="input"||t==="change")return nl(n)}function Vv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var qn=typeof Object.is=="function"?Object.is:Vv;function Ys(t,n){if(qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ye.call(n,c)||!qn(t[c],n[c]))return!1}return!0}function ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ap(t,n){var a=ip(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ip(a)}}function rp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?rp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function sp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Kt(t.document)}return n}function nu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Xv=Xi&&"documentMode"in document&&11>=document.documentMode,Fr=null,iu=null,js=null,au=!1;function op(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;au||Fr==null||Fr!==Kt(s)||(s=Fr,"selectionStart"in s&&nu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),js&&Ys(js,s)||(js=s,s=kl(iu,"onSelect"),0<s.length&&(n=new tl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Fr)))}function ir(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Br={animationend:ir("Animation","AnimationEnd"),animationiteration:ir("Animation","AnimationIteration"),animationstart:ir("Animation","AnimationStart"),transitionrun:ir("Transition","TransitionRun"),transitionstart:ir("Transition","TransitionStart"),transitioncancel:ir("Transition","TransitionCancel"),transitionend:ir("Transition","TransitionEnd")},ru={},lp={};Xi&&(lp=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function ar(t){if(ru[t])return ru[t];if(!Br[t])return t;var n=Br[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in lp)return ru[t]=n[a];return t}var cp=ar("animationend"),up=ar("animationiteration"),fp=ar("animationstart"),kv=ar("transitionrun"),Wv=ar("transitionstart"),qv=ar("transitioncancel"),dp=ar("transitionend"),hp=new Map,su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");su.push("scrollEnd");function xi(t,n){hp.set(t,n),et(n,[t])}var il=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ii=[],Hr=0,ou=0;function al(){for(var t=Hr,n=ou=Hr=0;n<t;){var a=ii[n];ii[n++]=null;var s=ii[n];ii[n++]=null;var c=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&pp(a,c,f)}}function rl(t,n,a,s){ii[Hr++]=t,ii[Hr++]=n,ii[Hr++]=a,ii[Hr++]=s,ou|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function lu(t,n,a,s){return rl(t,n,a,s),sl(t)}function rr(t,n){return rl(t,null,null,n),sl(t)}function pp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Pt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function sl(t){if(50<_o)throw _o=0,vf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Gr={};function Yv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,s){return new Yv(t,n,a,s)}function cu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ki(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function mp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ol(t,n,a,s,c,f){var g=0;if(s=t,typeof t=="function")cu(t)&&(g=1);else if(typeof t=="string")g=Jx(t,a,At.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case R:return t=Yn(31,a,n,c),t.elementType=R,t.lanes=f,t;case C:return sr(a.children,c,f,n);case M:g=8,c|=24;break;case x:return t=Yn(12,a,n,c|2),t.elementType=x,t.lanes=f,t;case z:return t=Yn(13,a,n,c),t.elementType=z,t.lanes=f,t;case B:return t=Yn(19,a,n,c),t.elementType=B,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:g=10;break t;case I:g=9;break t;case N:g=11;break t;case P:g=14;break t;case K:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Yn(g,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function sr(t,n,a,s){return t=Yn(7,t,s,n),t.lanes=a,t}function uu(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function gp(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function fu(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var _p=new WeakMap;function ai(t,n){if(typeof t=="object"&&t!==null){var a=_p.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},_p.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var Vr=[],Xr=0,ll=null,Zs=0,ri=[],si=0,Ea=null,wi=1,Di="";function Wi(t,n){Vr[Xr++]=Zs,Vr[Xr++]=ll,ll=t,Zs=n}function vp(t,n,a){ri[si++]=wi,ri[si++]=Di,ri[si++]=Ea,Ea=t;var s=wi;t=Di;var c=32-Pt(s)-1;s&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,wi=1<<32-Pt(n)+c|a<<c|s,Di=f+t}else wi=1<<f|a<<c|s,Di=t}function du(t){t.return!==null&&(Wi(t,1),vp(t,1,0))}function hu(t){for(;t===ll;)ll=Vr[--Xr],Vr[Xr]=null,Zs=Vr[--Xr],Vr[Xr]=null;for(;t===Ea;)Ea=ri[--si],ri[si]=null,Di=ri[--si],ri[si]=null,wi=ri[--si],ri[si]=null}function xp(t,n){ri[si++]=wi,ri[si++]=Di,ri[si++]=Ea,wi=n.id,Di=n.overflow,Ea=t}var En=null,We=null,xe=!1,ba=null,oi=!1,pu=Error(r(519));function Ta(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ks(ai(n,t)),pu}function Sp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[rn]=t,n[_n]=s,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)me(xo[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),Gi(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),Sn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||zg(n.textContent,a)?(s.popover!=null&&(me("beforetoggle",n),me("toggle",n)),s.onScroll!=null&&me("scroll",n),s.onScrollEnd!=null&&me("scrollend",n),s.onClick!=null&&(n.onclick=Vi),n=!0):n=!1,n||Ta(t,!0)}function Mp(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:En=En.return}}function kr(t){if(t!==En)return!1;if(!xe)return Mp(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Lf(t.type,t.memoizedProps)),a=!a),a&&We&&Ta(t),Mp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));We=qg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));We=qg(t)}else n===27?(n=We,Ba(t.type)?(t=Ff,Ff=null,We=t):We=n):We=En?ci(t.stateNode.nextSibling):null;return!0}function or(){We=En=null,xe=!1}function mu(){var t=ba;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),ba=null),t}function Ks(t){ba===null?ba=[t]:ba.push(t)}var gu=D(null),lr=null,qi=null;function Aa(t,n,a){pt(gu,n._currentValue),n._currentValue=a}function Yi(t){t._currentValue=gu.current,j(gu)}function _u(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function vu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var F=0;F<n.length;F++)if(b.context===n[F]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),_u(f.return,a,t),s||(g=null);break t}f=b.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),_u(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Wr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var b=c.type;qn(c.pendingProps.value,g.value)||(t!==null?t.push(b):t=[b])}}else if(c===dt.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(bo):t=[bo])}c=c.return}t!==null&&vu(n,t,a,s),n.flags|=262144}function cl(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function cr(t){lr=t,qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return yp(lr,t)}function ul(t,n){return lr===null&&cr(t),yp(t,n)}function yp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},qi===null){if(t===null)throw Error(r(308));qi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else qi=qi.next=n;return a}var jv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Zv=o.unstable_scheduleCallback,Kv=o.unstable_NormalPriority,sn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xu(){return{controller:new jv,data:new Map,refCount:0}}function Qs(t){t.refCount--,t.refCount===0&&Zv(Kv,function(){t.controller.abort()})}var Js=null,Su=0,qr=0,Yr=null;function Qv(t,n){if(Js===null){var a=Js=[];Su=0,qr=bf(),Yr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Su++,n.then(Ep,Ep),n}function Ep(){if(--Su===0&&Js!==null){Yr!==null&&(Yr.status="fulfilled");var t=Js;Js=null,qr=0,Yr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Jv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var bp=L.S;L.S=function(t,n){og=y(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Qv(t,n),bp!==null&&bp(t,n)};var ur=D(null);function Mu(){var t=ur.current;return t!==null?t:Xe.pooledCache}function fl(t,n){n===null?pt(ur,ur.current):pt(ur,n.pool)}function Tp(){var t=Mu();return t===null?null:{parent:sn._currentValue,pool:t}}var jr=Error(r(460)),yu=Error(r(474)),dl=Error(r(542)),hl={then:function(){}};function Ap(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Rp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Vi,Vi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,wp(t),t;default:if(typeof n.status=="string")n.then(Vi,Vi);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,wp(t),t}throw dr=n,jr}}function fr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(dr=a,jr):a}}var dr=null;function Cp(){if(dr===null)throw Error(r(459));var t=dr;return dr=null,t}function wp(t){if(t===jr||t===dl)throw Error(r(483))}var Zr=null,$s=0;function pl(t){var n=$s;return $s+=1,Zr===null&&(Zr=[]),Rp(Zr,t,n)}function to(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ml(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Dp(t){function n(Y,V){if(t){var Q=Y.deletions;Q===null?(Y.deletions=[V],Y.flags|=16):Q.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function s(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function c(Y,V){return Y=ki(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,Q){return Y.index=Q,t?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<V?(Y.flags|=67108866,V):Q):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function g(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function b(Y,V,Q,gt){return V===null||V.tag!==6?(V=uu(Q,Y.mode,gt),V.return=Y,V):(V=c(V,Q),V.return=Y,V)}function F(Y,V,Q,gt){var Qt=Q.type;return Qt===C?ht(Y,V,Q.props.children,gt,Q.key):V!==null&&(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===K&&fr(Qt)===V.type)?(V=c(V,Q.props),to(V,Q),V.return=Y,V):(V=ol(Q.type,Q.key,Q.props,null,Y.mode,gt),to(V,Q),V.return=Y,V)}function J(Y,V,Q,gt){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=fu(Q,Y.mode,gt),V.return=Y,V):(V=c(V,Q.children||[]),V.return=Y,V)}function ht(Y,V,Q,gt,Qt){return V===null||V.tag!==7?(V=sr(Q,Y.mode,gt,Qt),V.return=Y,V):(V=c(V,Q),V.return=Y,V)}function vt(Y,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=uu(""+V,Y.mode,Q),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return Q=ol(V.type,V.key,V.props,null,Y.mode,Q),to(Q,V),Q.return=Y,Q;case A:return V=fu(V,Y.mode,Q),V.return=Y,V;case K:return V=fr(V),vt(Y,V,Q)}if(ft(V)||at(V))return V=sr(V,Y.mode,Q,null),V.return=Y,V;if(typeof V.then=="function")return vt(Y,pl(V),Q);if(V.$$typeof===O)return vt(Y,ul(Y,V),Q);ml(Y,V)}return null}function nt(Y,V,Q,gt){var Qt=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Qt!==null?null:b(Y,V,""+Q,gt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:return Q.key===Qt?F(Y,V,Q,gt):null;case A:return Q.key===Qt?J(Y,V,Q,gt):null;case K:return Q=fr(Q),nt(Y,V,Q,gt)}if(ft(Q)||at(Q))return Qt!==null?null:ht(Y,V,Q,gt,null);if(typeof Q.then=="function")return nt(Y,V,pl(Q),gt);if(Q.$$typeof===O)return nt(Y,V,ul(Y,Q),gt);ml(Y,Q)}return null}function ot(Y,V,Q,gt,Qt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Y=Y.get(Q)||null,b(V,Y,""+gt,Qt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case E:return Y=Y.get(gt.key===null?Q:gt.key)||null,F(V,Y,gt,Qt);case A:return Y=Y.get(gt.key===null?Q:gt.key)||null,J(V,Y,gt,Qt);case K:return gt=fr(gt),ot(Y,V,Q,gt,Qt)}if(ft(gt)||at(gt))return Y=Y.get(Q)||null,ht(V,Y,gt,Qt,null);if(typeof gt.then=="function")return ot(Y,V,Q,pl(gt),Qt);if(gt.$$typeof===O)return ot(Y,V,Q,ul(V,gt),Qt);ml(V,gt)}return null}function Vt(Y,V,Q,gt){for(var Qt=null,be=null,jt=V,ce=V=0,ve=null;jt!==null&&ce<Q.length;ce++){jt.index>ce?(ve=jt,jt=null):ve=jt.sibling;var Te=nt(Y,jt,Q[ce],gt);if(Te===null){jt===null&&(jt=ve);break}t&&jt&&Te.alternate===null&&n(Y,jt),V=f(Te,V,ce),be===null?Qt=Te:be.sibling=Te,be=Te,jt=ve}if(ce===Q.length)return a(Y,jt),xe&&Wi(Y,ce),Qt;if(jt===null){for(;ce<Q.length;ce++)jt=vt(Y,Q[ce],gt),jt!==null&&(V=f(jt,V,ce),be===null?Qt=jt:be.sibling=jt,be=jt);return xe&&Wi(Y,ce),Qt}for(jt=s(jt);ce<Q.length;ce++)ve=ot(jt,Y,ce,Q[ce],gt),ve!==null&&(t&&ve.alternate!==null&&jt.delete(ve.key===null?ce:ve.key),V=f(ve,V,ce),be===null?Qt=ve:be.sibling=ve,be=ve);return t&&jt.forEach(function(ka){return n(Y,ka)}),xe&&Wi(Y,ce),Qt}function te(Y,V,Q,gt){if(Q==null)throw Error(r(151));for(var Qt=null,be=null,jt=V,ce=V=0,ve=null,Te=Q.next();jt!==null&&!Te.done;ce++,Te=Q.next()){jt.index>ce?(ve=jt,jt=null):ve=jt.sibling;var ka=nt(Y,jt,Te.value,gt);if(ka===null){jt===null&&(jt=ve);break}t&&jt&&ka.alternate===null&&n(Y,jt),V=f(ka,V,ce),be===null?Qt=ka:be.sibling=ka,be=ka,jt=ve}if(Te.done)return a(Y,jt),xe&&Wi(Y,ce),Qt;if(jt===null){for(;!Te.done;ce++,Te=Q.next())Te=vt(Y,Te.value,gt),Te!==null&&(V=f(Te,V,ce),be===null?Qt=Te:be.sibling=Te,be=Te);return xe&&Wi(Y,ce),Qt}for(jt=s(jt);!Te.done;ce++,Te=Q.next())Te=ot(jt,Y,ce,Te.value,gt),Te!==null&&(t&&Te.alternate!==null&&jt.delete(Te.key===null?ce:Te.key),V=f(Te,V,ce),be===null?Qt=Te:be.sibling=Te,be=Te);return t&&jt.forEach(function(cS){return n(Y,cS)}),xe&&Wi(Y,ce),Qt}function Ge(Y,V,Q,gt){if(typeof Q=="object"&&Q!==null&&Q.type===C&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:t:{for(var Qt=Q.key;V!==null;){if(V.key===Qt){if(Qt=Q.type,Qt===C){if(V.tag===7){a(Y,V.sibling),gt=c(V,Q.props.children),gt.return=Y,Y=gt;break t}}else if(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===K&&fr(Qt)===V.type){a(Y,V.sibling),gt=c(V,Q.props),to(gt,Q),gt.return=Y,Y=gt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}Q.type===C?(gt=sr(Q.props.children,Y.mode,gt,Q.key),gt.return=Y,Y=gt):(gt=ol(Q.type,Q.key,Q.props,null,Y.mode,gt),to(gt,Q),gt.return=Y,Y=gt)}return g(Y);case A:t:{for(Qt=Q.key;V!==null;){if(V.key===Qt)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(Y,V.sibling),gt=c(V,Q.children||[]),gt.return=Y,Y=gt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}gt=fu(Q,Y.mode,gt),gt.return=Y,Y=gt}return g(Y);case K:return Q=fr(Q),Ge(Y,V,Q,gt)}if(ft(Q))return Vt(Y,V,Q,gt);if(at(Q)){if(Qt=at(Q),typeof Qt!="function")throw Error(r(150));return Q=Qt.call(Q),te(Y,V,Q,gt)}if(typeof Q.then=="function")return Ge(Y,V,pl(Q),gt);if(Q.$$typeof===O)return Ge(Y,V,ul(Y,Q),gt);ml(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(Y,V.sibling),gt=c(V,Q),gt.return=Y,Y=gt):(a(Y,V),gt=uu(Q,Y.mode,gt),gt.return=Y,Y=gt),g(Y)):a(Y,V)}return function(Y,V,Q,gt){try{$s=0;var Qt=Ge(Y,V,Q,gt);return Zr=null,Qt}catch(jt){if(jt===jr||jt===dl)throw jt;var be=Yn(29,jt,null,Y.mode);return be.lanes=gt,be.return=Y,be}}}var hr=Dp(!0),Up=Dp(!1),Ra=!1;function Eu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ca(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function wa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(De&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=sl(t),pp(t,null,a),n}return rl(t,s,n,a),sl(t)}function eo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ps(t,a)}}function Tu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Au=!1;function no(){if(Au){var t=Yr;if(t!==null)throw t}}function io(t,n,a,s){Au=!1;var c=t.updateQueue;Ra=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var F=b,J=F.next;F.next=null,g===null?f=J:g.next=J,g=F;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,b=ht.lastBaseUpdate,b!==g&&(b===null?ht.firstBaseUpdate=J:b.next=J,ht.lastBaseUpdate=F))}if(f!==null){var vt=c.baseState;g=0,ht=J=F=null,b=f;do{var nt=b.lane&-536870913,ot=nt!==b.lane;if(ot?(_e&nt)===nt:(s&nt)===nt){nt!==0&&nt===qr&&(Au=!0),ht!==null&&(ht=ht.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Vt=t,te=b;nt=n;var Ge=a;switch(te.tag){case 1:if(Vt=te.payload,typeof Vt=="function"){vt=Vt.call(Ge,vt,nt);break t}vt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=te.payload,nt=typeof Vt=="function"?Vt.call(Ge,vt,nt):Vt,nt==null)break t;vt=_({},vt,nt);break t;case 2:Ra=!0}}nt=b.callback,nt!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[nt]:ot.push(nt))}else ot={lane:nt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ht===null?(J=ht=ot,F=vt):ht=ht.next=ot,g|=nt;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;ot=b,b=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ht===null&&(F=vt),c.baseState=F,c.firstBaseUpdate=J,c.lastBaseUpdate=ht,f===null&&(c.shared.lanes=0),Oa|=g,t.lanes=g,t.memoizedState=vt}}function Np(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Lp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Np(a[t],n)}var Kr=D(null),gl=D(0);function Op(t,n){t=na,pt(gl,t),pt(Kr,n),na=t|n.baseLanes}function Ru(){pt(gl,na),pt(Kr,Kr.current)}function Cu(){na=gl.current,j(Kr),j(gl)}var jn=D(null),li=null;function Da(t){var n=t.alternate;pt(tn,tn.current&1),pt(jn,t),li===null&&(n===null||Kr.current!==null||n.memoizedState!==null)&&(li=t)}function wu(t){pt(tn,tn.current),pt(jn,t),li===null&&(li=t)}function Pp(t){t.tag===22?(pt(tn,tn.current),pt(jn,t),li===null&&(li=t)):Ua()}function Ua(){pt(tn,tn.current),pt(jn,jn.current)}function Zn(t){j(jn),li===t&&(li=null),j(tn)}var tn=D(0);function _l(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||If(a)||zf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ji=0,oe=null,Be=null,on=null,vl=!1,Qr=!1,pr=!1,xl=0,ao=0,Jr=null,$v=0;function Je(){throw Error(r(321))}function Du(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!qn(t[a],n[a]))return!1;return!0}function Uu(t,n,a,s,c,f){return ji=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?vm:qu,pr=!1,f=a(s,c),pr=!1,Qr&&(f=zp(n,a,s,c)),Ip(t),f}function Ip(t){L.H=oo;var n=Be!==null&&Be.next!==null;if(ji=0,on=Be=oe=null,vl=!1,ao=0,Jr=null,n)throw Error(r(300));t===null||ln||(t=t.dependencies,t!==null&&cl(t)&&(ln=!0))}function zp(t,n,a,s){oe=t;var c=0;do{if(Qr&&(Jr=null),ao=0,Qr=!1,25<=c)throw Error(r(301));if(c+=1,on=Be=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=xm,f=n(a,s)}while(Qr);return f}function tx(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?ro(n):n,t=t.useState()[0],(Be!==null?Be.memoizedState:null)!==t&&(oe.flags|=1024),n}function Nu(){var t=xl!==0;return xl=0,t}function Lu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ou(t){if(vl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}vl=!1}ji=0,on=Be=oe=null,Qr=!1,ao=xl=0,Jr=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?oe.memoizedState=on=t:on=on.next=t,on}function en(){if(Be===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var n=on===null?oe.memoizedState:on.next;if(n!==null)on=n,Be=t;else{if(t===null)throw oe.alternate===null?Error(r(467)):Error(r(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},on===null?oe.memoizedState=on=t:on=on.next=t}return on}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(t){var n=ao;return ao+=1,Jr===null&&(Jr=[]),t=Rp(Jr,t,n),n=oe,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?vm:qu),t}function Ml(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ro(t);if(t.$$typeof===O)return bn(t)}throw Error(r(438,String(t)))}function Pu(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=oe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Sl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=w;return n.index++,a}function Zi(t,n){return typeof n=="function"?n(t):n}function yl(t){var n=en();return Iu(n,Be,t)}function Iu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=g=null,F=null,J=n,ht=!1;do{var vt=J.lane&-536870913;if(vt!==J.lane?(_e&vt)===vt:(ji&vt)===vt){var nt=J.revertLane;if(nt===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),vt===qr&&(ht=!0);else if((ji&nt)===nt){J=J.next,nt===qr&&(ht=!0);continue}else vt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},F===null?(b=F=vt,g=f):F=F.next=vt,oe.lanes|=nt,Oa|=nt;vt=J.action,pr&&a(f,vt),f=J.hasEagerState?J.eagerState:a(f,vt)}else nt={lane:vt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},F===null?(b=F=nt,g=f):F=F.next=nt,oe.lanes|=vt,Oa|=vt;J=J.next}while(J!==null&&J!==n);if(F===null?g=f:F.next=b,!qn(f,t.memoizedState)&&(ln=!0,ht&&(a=Yr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=F,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function zu(t){var n=en(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);qn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Fp(t,n,a){var s=oe,c=en(),f=xe;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!qn((Be||c).memoizedState,a);if(g&&(c.memoizedState=a,ln=!0),c=c.queue,Hu(Gp.bind(null,s,c,t),[t]),c.getSnapshot!==n||g||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,$r(9,{destroy:void 0},Hp.bind(null,s,c,a,n),null),Xe===null)throw Error(r(349));f||(ji&127)!==0||Bp(s,n,a)}return a}function Bp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=Sl(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Hp(t,n,a,s){n.value=a,n.getSnapshot=s,Vp(n)&&Xp(t)}function Gp(t,n,a){return a(function(){Vp(n)&&Xp(t)})}function Vp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!qn(t,a)}catch{return!0}}function Xp(t){var n=rr(t,2);n!==null&&Gn(n,t,2)}function Fu(t){var n=On();if(typeof t=="function"){var a=t;if(t=a(),pr){Ft(!0);try{a()}finally{Ft(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:t},n}function kp(t,n,a,s){return t.baseState=a,Iu(t,Be,typeof s=="function"?s:Zi)}function ex(t,n,a,s,c){if(Tl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};L.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Wp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Wp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=L.T,g={};L.T=g;try{var b=a(c,s),F=L.S;F!==null&&F(g,b),qp(t,n,b)}catch(J){Bu(t,n,J)}finally{f!==null&&g.types!==null&&(f.types=g.types),L.T=f}}else try{f=a(c,s),qp(t,n,f)}catch(J){Bu(t,n,J)}}function qp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Yp(t,n,s)},function(s){return Bu(t,n,s)}):Yp(t,n,a)}function Yp(t,n,a){n.status="fulfilled",n.value=a,jp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Wp(t,a)))}function Bu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,jp(n),n=n.next;while(n!==s)}t.action=null}function jp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Zp(t,n){return n}function Kp(t,n){if(xe){var a=Xe.formState;if(a!==null){t:{var s=oe;if(xe){if(We){e:{for(var c=We,f=oi;c.nodeType!==8;){if(!f){c=null;break e}if(c=ci(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){We=ci(c.nextSibling),s=c.data==="F!";break t}}Ta(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zp,lastRenderedState:n},a.queue=s,a=mm.bind(null,oe,s),s.dispatch=a,s=Fu(!1),f=Wu.bind(null,oe,!1,s.queue),s=On(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=ex.bind(null,oe,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Qp(t){var n=en();return Jp(n,Be,t)}function Jp(t,n,a){if(n=Iu(t,n,Zp)[0],t=yl(Zi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ro(n)}catch(g){throw g===jr?dl:g}else s=n;n=en();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,$r(9,{destroy:void 0},nx.bind(null,c,a),null)),[s,f,t]}function nx(t,n){t.action=n}function $p(t){var n=en(),a=Be;if(a!==null)return Jp(n,a,t);en(),n=n.memoizedState,a=en();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function $r(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=oe.updateQueue,n===null&&(n=Sl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function tm(){return en().memoizedState}function El(t,n,a,s){var c=On();oe.flags|=t,c.memoizedState=$r(1|n,{destroy:void 0},a,s===void 0?null:s)}function bl(t,n,a,s){var c=en();s=s===void 0?null:s;var f=c.memoizedState.inst;Be!==null&&s!==null&&Du(s,Be.memoizedState.deps)?c.memoizedState=$r(n,f,a,s):(oe.flags|=t,c.memoizedState=$r(1|n,f,a,s))}function em(t,n){El(8390656,8,t,n)}function Hu(t,n){bl(2048,8,t,n)}function ix(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=Sl(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function nm(t){var n=en().memoizedState;return ix({ref:n,nextImpl:t}),function(){if((De&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function im(t,n){return bl(4,2,t,n)}function am(t,n){return bl(4,4,t,n)}function rm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function sm(t,n,a){a=a!=null?a.concat([t]):null,bl(4,4,rm.bind(null,n,t),a)}function Gu(){}function om(t,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Du(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function lm(t,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Du(n,s[1]))return s[0];if(s=t(),pr){Ft(!0);try{t()}finally{Ft(!1)}}return a.memoizedState=[s,n],s}function Vu(t,n,a){return a===void 0||(ji&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=cg(),oe.lanes|=t,Oa|=t,a)}function cm(t,n,a,s){return qn(a,n)?a:Kr.current!==null?(t=Vu(t,a,s),qn(t,n)||(ln=!0),t):(ji&42)===0||(ji&1073741824)!==0&&(_e&261930)===0?(ln=!0,t.memoizedState=a):(t=cg(),oe.lanes|=t,Oa|=t,n)}function um(t,n,a,s,c){var f=H.p;H.p=f!==0&&8>f?f:8;var g=L.T,b={};L.T=b,Wu(t,!1,n,a);try{var F=c(),J=L.S;if(J!==null&&J(b,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ht=Jv(F,s);so(t,n,ht,Jn(t))}else so(t,n,s,Jn(t))}catch(vt){so(t,n,{then:function(){},status:"rejected",reason:vt},Jn())}finally{H.p=f,g!==null&&b.types!==null&&(g.types=b.types),L.T=g}}function ax(){}function Xu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=fm(t).queue;um(t,c,n,$,a===null?ax:function(){return dm(t),a(s)})}function fm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function dm(t){var n=fm(t);n.next===null&&(n=t.alternate.memoizedState),so(t,n.next.queue,{},Jn())}function ku(){return bn(bo)}function hm(){return en().memoizedState}function pm(){return en().memoizedState}function rx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();t=Ca(a);var s=wa(n,t,a);s!==null&&(Gn(s,n,a),eo(s,n,a)),n={cache:xu()},t.payload=n;return}n=n.return}}function sx(t,n,a){var s=Jn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tl(t)?gm(n,a):(a=lu(t,n,a,s),a!==null&&(Gn(a,t,s),_m(a,n,s)))}function mm(t,n,a){var s=Jn();so(t,n,a,s)}function so(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tl(t))gm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,b=f(g,a);if(c.hasEagerState=!0,c.eagerState=b,qn(b,g))return rl(t,n,c,0),Xe===null&&al(),!1}catch{}if(a=lu(t,n,c,s),a!==null)return Gn(a,t,s),_m(a,n,s),!0}return!1}function Wu(t,n,a,s){if(s={lane:2,revertLane:bf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Tl(t)){if(n)throw Error(r(479))}else n=lu(t,a,s,2),n!==null&&Gn(n,t,2)}function Tl(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function gm(t,n){Qr=vl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function _m(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ps(t,a)}}var oo={readContext:bn,use:Ml,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};oo.useEffectEvent=Je;var vm={readContext:bn,use:Ml,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:bn,useEffect:em,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,El(4194308,4,rm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return El(4194308,4,t,n)},useInsertionEffect:function(t,n){El(4,2,t,n)},useMemo:function(t,n){var a=On();n=n===void 0?null:n;var s=t();if(pr){Ft(!0);try{t()}finally{Ft(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=On();if(a!==void 0){var c=a(n);if(pr){Ft(!0);try{a(n)}finally{Ft(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=sx.bind(null,oe,t),[s.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=Fu(t);var n=t.queue,a=mm.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Gu,useDeferredValue:function(t,n){var a=On();return Vu(a,t,n)},useTransition:function(){var t=Fu(!1);return t=um.bind(null,oe,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=oe,c=On();if(xe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xe===null)throw Error(r(349));(_e&127)!==0||Bp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,em(Gp.bind(null,s,f,t),[t]),s.flags|=2048,$r(9,{destroy:void 0},Hp.bind(null,s,f,a,n),null),a},useId:function(){var t=On(),n=Xe.identifierPrefix;if(xe){var a=Di,s=wi;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=xl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=$v++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ku,useFormState:Kp,useActionState:Kp,useOptimistic:function(t){var n=On();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Wu.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Pu,useCacheRefresh:function(){return On().memoizedState=rx.bind(null,oe)},useEffectEvent:function(t){var n=On(),a={impl:t};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},qu={readContext:bn,use:Ml,useCallback:om,useContext:bn,useEffect:Hu,useImperativeHandle:sm,useInsertionEffect:im,useLayoutEffect:am,useMemo:lm,useReducer:yl,useRef:tm,useState:function(){return yl(Zi)},useDebugValue:Gu,useDeferredValue:function(t,n){var a=en();return cm(a,Be.memoizedState,t,n)},useTransition:function(){var t=yl(Zi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Fp,useId:hm,useHostTransitionStatus:ku,useFormState:Qp,useActionState:Qp,useOptimistic:function(t,n){var a=en();return kp(a,Be,t,n)},useMemoCache:Pu,useCacheRefresh:pm};qu.useEffectEvent=nm;var xm={readContext:bn,use:Ml,useCallback:om,useContext:bn,useEffect:Hu,useImperativeHandle:sm,useInsertionEffect:im,useLayoutEffect:am,useMemo:lm,useReducer:zu,useRef:tm,useState:function(){return zu(Zi)},useDebugValue:Gu,useDeferredValue:function(t,n){var a=en();return Be===null?Vu(a,t,n):cm(a,Be.memoizedState,t,n)},useTransition:function(){var t=zu(Zi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Fp,useId:hm,useHostTransitionStatus:ku,useFormState:$p,useActionState:$p,useOptimistic:function(t,n){var a=en();return Be!==null?kp(a,Be,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Pu,useCacheRefresh:pm};xm.useEffectEvent=nm;function Yu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ju={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Jn(),c=Ca(s);c.payload=n,a!=null&&(c.callback=a),n=wa(t,c,s),n!==null&&(Gn(n,t,s),eo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Jn(),c=Ca(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=wa(t,c,s),n!==null&&(Gn(n,t,s),eo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Jn(),s=Ca(a);s.tag=2,n!=null&&(s.callback=n),n=wa(t,s,a),n!==null&&(Gn(n,t,a),eo(n,t,a))}};function Sm(t,n,a,s,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Ys(a,s)||!Ys(c,f):!0}function Mm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&ju.enqueueReplaceState(n,n.state,null)}function mr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function ym(t){il(t)}function Em(t){console.error(t)}function bm(t){il(t)}function Al(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Tm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Zu(t,n,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){Al(t,n)},a}function Am(t){return t=Ca(t),t.tag=3,t}function Rm(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Tm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Tm(n,a,s),typeof c!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function ox(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Wr(n,a,c,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?Fl():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===hl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Mf(t,s,c)),!1;case 22:return a.flags|=65536,s===hl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Mf(t,s,c)),!1}throw Error(r(435,a.tag))}return Mf(t,s,c),Fl(),!1}if(xe)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==pu&&(t=Error(r(422),{cause:s}),Ks(ai(t,a)))):(s!==pu&&(n=Error(r(423),{cause:s}),Ks(ai(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ai(s,a),c=Zu(t.stateNode,s,c),Tu(t,c),$e!==4&&($e=2)),!1;var f=Error(r(520),{cause:s});if(f=ai(f,a),go===null?go=[f]:go.push(f),$e!==4&&($e=2),n===null)return!0;s=ai(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Zu(a.stateNode,s,t),Tu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Pa===null||!Pa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Am(c),Rm(c,t,a,s),Tu(a,c),!1}a=a.return}while(a!==null);return!1}var Ku=Error(r(461)),ln=!1;function Tn(t,n,a,s){n.child=t===null?Up(n,null,a,s):hr(n,t.child,a,s)}function Cm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var b in s)b!=="ref"&&(g[b]=s[b])}else g=s;return cr(n),s=Uu(t,n,a,g,f,c),b=Nu(),t!==null&&!ln?(Lu(t,n,c),Ki(t,n,c)):(xe&&b&&du(n),n.flags|=1,Tn(t,n,s,c),n.child)}function wm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!cu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Dm(t,n,f,s,c)):(t=ol(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!rf(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ys,a(g,s)&&t.ref===n.ref)return Ki(t,n,c)}return n.flags|=1,t=ki(f,s),t.ref=n.ref,t.return=n,n.child=t}function Dm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Ys(f,s)&&t.ref===n.ref)if(ln=!1,n.pendingProps=s=f,rf(t,c))(t.flags&131072)!==0&&(ln=!0);else return n.lanes=t.lanes,Ki(t,n,c)}return Qu(t,n,a,s,c)}function Um(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Nm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&fl(n,f!==null?f.cachePool:null),f!==null?Op(n,f):Ru(),Pp(n);else return s=n.lanes=536870912,Nm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(fl(n,f.cachePool),Op(n,f),Ua(),n.memoizedState=null):(t!==null&&fl(n,null),Ru(),Ua());return Tn(t,n,c,a),n.child}function lo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Nm(t,n,a,s,c){var f=Mu();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&fl(n,null),Ru(),Pp(n),t!==null&&Wr(t,n,s,!0),n.childLanes=c,null}function Rl(t,n){return n=wl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Lm(t,n,a){return hr(n,t.child,null,a),t=Rl(n,n.pendingProps),t.flags|=2,Zn(n),n.memoizedState=null,t}function lx(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(s.mode==="hidden")return t=Rl(n,s),n.lanes=536870912,lo(null,t);if(wu(n),(t=We)?(t=Wg(t,oi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=gp(t),a.return=n,n.child=a,En=n,We=null)):t=null,t===null)throw Ta(n);return n.lanes=536870912,null}return Rl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(wu(n),c)if(n.flags&256)n.flags&=-257,n=Lm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||Wr(t,n,a,!1),c=(a&t.childLanes)!==0,ln||c){if(s=Xe,s!==null&&(g=Dr(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,rr(t,g),Gn(s,t,g),Ku;Fl(),n=Lm(t,n,a)}else t=f.treeContext,We=ci(g.nextSibling),En=n,xe=!0,ba=null,oi=!1,t!==null&&xp(n,t),n=Rl(n,s),n.flags|=4096;return n}return t=ki(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Cl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Qu(t,n,a,s,c){return cr(n),a=Uu(t,n,a,s,void 0,c),s=Nu(),t!==null&&!ln?(Lu(t,n,c),Ki(t,n,c)):(xe&&s&&du(n),n.flags|=1,Tn(t,n,a,c),n.child)}function Om(t,n,a,s,c,f){return cr(n),n.updateQueue=null,a=zp(n,s,a,c),Ip(t),s=Nu(),t!==null&&!ln?(Lu(t,n,f),Ki(t,n,f)):(xe&&s&&du(n),n.flags|=1,Tn(t,n,a,f),n.child)}function Pm(t,n,a,s,c){if(cr(n),n.stateNode===null){var f=Gr,g=a.contextType;typeof g=="object"&&g!==null&&(f=bn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ju,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Eu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?bn(g):Gr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Yu(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&ju.enqueueReplaceState(f,f.state,null),io(n,s,f,c),no(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,F=mr(a,b);f.props=F;var J=f.context,ht=a.contextType;g=Gr,typeof ht=="object"&&ht!==null&&(g=bn(ht));var vt=a.getDerivedStateFromProps;ht=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||J!==g)&&Mm(n,f,s,g),Ra=!1;var nt=n.memoizedState;f.state=nt,io(n,s,f,c),no(),J=n.memoizedState,b||nt!==J||Ra?(typeof vt=="function"&&(Yu(n,a,vt,s),J=n.memoizedState),(F=Ra||Sm(n,a,F,s,nt,J,g))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=g,s=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,bu(t,n),g=n.memoizedProps,ht=mr(a,g),f.props=ht,vt=n.pendingProps,nt=f.context,J=a.contextType,F=Gr,typeof J=="object"&&J!==null&&(F=bn(J)),b=a.getDerivedStateFromProps,(J=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==vt||nt!==F)&&Mm(n,f,s,F),Ra=!1,nt=n.memoizedState,f.state=nt,io(n,s,f,c),no();var ot=n.memoizedState;g!==vt||nt!==ot||Ra||t!==null&&t.dependencies!==null&&cl(t.dependencies)?(typeof b=="function"&&(Yu(n,a,b,s),ot=n.memoizedState),(ht=Ra||Sm(n,a,ht,s,nt,ot,F)||t!==null&&t.dependencies!==null&&cl(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ot,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ot,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),f.props=s,f.state=ot,f.context=F,s=ht):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Cl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=hr(n,t.child,null,c),n.child=hr(n,null,a,c)):Tn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Ki(t,n,c),t}function Im(t,n,a,s){return or(),n.flags|=256,Tn(t,n,a,s),n.child}var Ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $u(t){return{baseLanes:t,cachePool:Tp()}}function tf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Qn),t}function zm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(tn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(c?Da(n):Ua(),(t=We)?(t=Wg(t,oi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=gp(t),a.return=n,n.child=a,En=n,We=null)):t=null,t===null)throw Ta(n);return zf(t)?n.lanes=32:n.lanes=536870912,null}var b=s.children;return s=s.fallback,c?(Ua(),c=n.mode,b=wl({mode:"hidden",children:b},c),s=sr(s,c,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,s=n.child,s.memoizedState=$u(a),s.childLanes=tf(t,g,a),n.memoizedState=Ju,lo(null,s)):(Da(n),ef(n,b))}var F=t.memoizedState;if(F!==null&&(b=F.dehydrated,b!==null)){if(f)n.flags&256?(Da(n),n.flags&=-257,n=nf(t,n,a)):n.memoizedState!==null?(Ua(),n.child=t.child,n.flags|=128,n=null):(Ua(),b=s.fallback,c=n.mode,s=wl({mode:"visible",children:s.children},c),b=sr(b,c,a,null),b.flags|=2,s.return=n,b.return=n,s.sibling=b,n.child=s,hr(n,t.child,null,a),s=n.child,s.memoizedState=$u(a),s.childLanes=tf(t,g,a),n.memoizedState=Ju,n=lo(null,s));else if(Da(n),zf(b)){if(g=b.nextSibling&&b.nextSibling.dataset,g)var J=g.dgst;g=J,s=Error(r(419)),s.stack="",s.digest=g,Ks({value:s,source:null,stack:null}),n=nf(t,n,a)}else if(ln||Wr(t,n,a,!1),g=(a&t.childLanes)!==0,ln||g){if(g=Xe,g!==null&&(s=Dr(g,a),s!==0&&s!==F.retryLane))throw F.retryLane=s,rr(t,s),Gn(g,t,s),Ku;If(b)||Fl(),n=nf(t,n,a)}else If(b)?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,We=ci(b.nextSibling),En=n,xe=!0,ba=null,oi=!1,t!==null&&xp(n,t),n=ef(n,s.children),n.flags|=4096);return n}return c?(Ua(),b=s.fallback,c=n.mode,F=t.child,J=F.sibling,s=ki(F,{mode:"hidden",children:s.children}),s.subtreeFlags=F.subtreeFlags&65011712,J!==null?b=ki(J,b):(b=sr(b,c,a,null),b.flags|=2),b.return=n,s.return=n,s.sibling=b,n.child=s,lo(null,s),s=n.child,b=t.child.memoizedState,b===null?b=$u(a):(c=b.cachePool,c!==null?(F=sn._currentValue,c=c.parent!==F?{parent:F,pool:F}:c):c=Tp(),b={baseLanes:b.baseLanes|a,cachePool:c}),s.memoizedState=b,s.childLanes=tf(t,g,a),n.memoizedState=Ju,lo(t.child,s)):(Da(n),a=t.child,t=a.sibling,a=ki(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function ef(t,n){return n=wl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function wl(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function nf(t,n,a){return hr(n,t.child,null,a),t=ef(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Fm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),_u(t.return,n,a)}function af(t,n,a,s,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Bm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=tn.current,b=(g&2)!==0;if(b?(g=g&1|2,n.flags|=128):g&=1,pt(tn,g),Tn(t,n,s,a),s=xe?Zs:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fm(t,a,n);else if(t.tag===19)Fm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&_l(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),af(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&_l(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}af(n,!0,a,null,f,s);break;case"together":af(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Oa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Wr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ki(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ki(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function rf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&cl(t)))}function cx(t,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),Aa(n,sn,t.memoizedState.cache),or();break;case 27:case 5:Ht(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:Aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,wu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?zm(t,n,a):(Da(n),t=Ki(t,n,a),t!==null?t.sibling:null);Da(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Wr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Bm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),pt(tn,tn.current),s)break;return null;case 22:return n.lanes=0,Um(t,n,a,n.pendingProps);case 24:Aa(n,sn,t.memoizedState.cache)}return Ki(t,n,a)}function Hm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)ln=!0;else{if(!rf(t,a)&&(n.flags&128)===0)return ln=!1,cx(t,n,a);ln=(t.flags&131072)!==0}else ln=!1,xe&&(n.flags&1048576)!==0&&vp(n,Zs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=fr(n.elementType),n.type=t,typeof t=="function")cu(t)?(s=mr(t,s),n.tag=1,n=Pm(null,n,t,s,a)):(n.tag=0,n=Qu(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===N){n.tag=11,n=Cm(null,n,t,s,a);break t}else if(c===P){n.tag=14,n=wm(null,n,t,s,a);break t}}throw n=ct(t)||t,Error(r(306,n,""))}}return n;case 0:return Qu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=mr(s,n.pendingProps),Pm(t,n,s,c,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,bu(t,n),io(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Aa(n,sn,s),s!==f.cache&&vu(n,[sn],a,!0),no(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Im(t,n,s,a);break t}else if(s!==c){c=ai(Error(r(424)),n),Ks(c),n=Im(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,We=ci(t.firstChild),En=n,xe=!0,ba=null,oi=!0,a=Up(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(or(),s===c){n=Ki(t,n,a);break t}Tn(t,n,s,a)}n=n.child}return n;case 26:return Cl(t,n),t===null?(a=Qg(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,t=n.pendingProps,s=Wl(tt.current).createElement(a),s[rn]=n,s[_n]=t,An(s,a,t),T(s),n.stateNode=s):n.memoizedState=Qg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ht(n),t===null&&xe&&(s=n.stateNode=jg(n.type,n.pendingProps,tt.current),En=n,oi=!0,c=We,Ba(n.type)?(Ff=c,We=ci(s.firstChild)):We=c),Tn(t,n,n.pendingProps.children,a),Cl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((c=s=We)&&(s=Bx(s,n.type,n.pendingProps,oi),s!==null?(n.stateNode=s,En=n,We=ci(s.firstChild),oi=!1,c=!0):c=!1),c||Ta(n)),Ht(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Lf(c,f)?s=null:g!==null&&Lf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Uu(t,n,tx,null,null,a),bo._currentValue=c),Cl(t,n),Tn(t,n,s,a),n.child;case 6:return t===null&&xe&&((t=a=We)&&(a=Hx(a,n.pendingProps,oi),a!==null?(n.stateNode=a,En=n,We=null,t=!0):t=!1),t||Ta(n)),null;case 13:return zm(t,n,a);case 4:return Dt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=hr(n,null,s,a):Tn(t,n,s,a),n.child;case 11:return Cm(t,n,n.type,n.pendingProps,a);case 7:return Tn(t,n,n.pendingProps,a),n.child;case 8:return Tn(t,n,n.pendingProps.children,a),n.child;case 12:return Tn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Aa(n,n.type,s.value),Tn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,cr(n),c=bn(c),s=s(c),n.flags|=1,Tn(t,n,s,a),n.child;case 14:return wm(t,n,n.type,n.pendingProps,a);case 15:return Dm(t,n,n.type,n.pendingProps,a);case 19:return Bm(t,n,a);case 31:return lx(t,n,a);case 22:return Um(t,n,a,n.pendingProps);case 24:return cr(n),s=bn(sn),t===null?(c=Mu(),c===null&&(c=Xe,f=xu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Eu(n),Aa(n,sn,c)):((t.lanes&a)!==0&&(bu(t,n),io(n,null,null,a),no()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Aa(n,sn,s)):(s=f.cache,Aa(n,sn,s),s!==c.cache&&vu(n,[sn],a,!0))),Tn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Qi(t){t.flags|=4}function sf(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(hg())t.flags|=8192;else throw dr=hl,yu}else t.flags&=-16777217}function Gm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!n0(n))if(hg())t.flags|=8192;else throw dr=hl,yu}function Dl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Le():536870912,t.lanes|=n,is|=n)}function co(t,n){if(!xe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function ux(t,n,a){var s=n.pendingProps;switch(hu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Yi(sn),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(kr(n)?Qi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,mu())),qe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Qi(n),f!==null?(qe(n),Gm(n,f)):(qe(n),sf(n,c,null,s,a))):f?f!==t.memoizedState?(Qi(n),qe(n),Gm(n,f)):(qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Qi(n),qe(n),sf(n,c,t,s,a)),null;case 27:if(de(n),a=tt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}t=At.current,kr(n)?Sp(n):(t=jg(c,s,a),n.stateNode=t,Qi(n))}return qe(n),null;case 5:if(de(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(f=At.current,kr(n))Sp(n);else{var g=Wl(tt.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[rn]=n,f[_n]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(An(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Qi(n)}}return qe(n),sf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Qi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=tt.current,kr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=En,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||zg(t.nodeValue,a)),t||Ta(n,!0)}else t=Wl(t).createTextNode(s),t[rn]=n,n.stateNode=t}return qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=kr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[rn]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),t=!1}else a=mu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=kr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=mu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Dl(n,n.updateQueue),qe(n),null);case 4:return Xt(),t===null&&Cf(n.stateNode.containerInfo),qe(n),null;case 10:return Yi(n.type),qe(n),null;case 19:if(j(tn),s=n.memoizedState,s===null)return qe(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)co(s,!1);else{if($e!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=_l(t),f!==null){for(n.flags|=128,co(s,!1),t=f.updateQueue,n.updateQueue=t,Dl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)mp(a,t),a=a.sibling;return pt(tn,tn.current&1|2),xe&&Wi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&y()>Pl&&(n.flags|=128,c=!0,co(s,!1),n.lanes=4194304)}else{if(!c)if(t=_l(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Dl(n,t),co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!xe)return qe(n),null}else 2*y()-s.renderingStartTime>Pl&&a!==536870912&&(n.flags|=128,c=!0,co(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=y(),t.sibling=null,a=tn.current,pt(tn,c?a&1|2:a&1),xe&&Wi(n,s.treeForkCount),t):(qe(n),null);case 22:case 23:return Zn(n),Cu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Dl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&j(ur),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Yi(sn),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function fx(t,n){switch(hu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Yi(sn),Xt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));or()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Zn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));or()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return j(tn),null;case 4:return Xt(),null;case 10:return Yi(n.type),null;case 22:case 23:return Zn(n),Cu(),t!==null&&j(ur),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Yi(sn),null;case 25:return null;default:return null}}function Vm(t,n){switch(hu(n),n.tag){case 3:Yi(sn),Xt();break;case 26:case 27:case 5:de(n);break;case 4:Xt();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:j(tn);break;case 10:Yi(n.type);break;case 22:case 23:Zn(n),Cu(),t!==null&&j(ur);break;case 24:Yi(sn)}}function uo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(b){Ie(n,n.return,b)}}function Na(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var g=s.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,c=n;var F=a,J=b;try{J()}catch(ht){Ie(c,F,ht)}}}s=s.next}while(s!==f)}}catch(ht){Ie(n,n.return,ht)}}function Xm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Lp(n,a)}catch(s){Ie(t,t.return,s)}}}function km(t,n,a){a.props=mr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ie(t,n,s)}}function fo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Ie(t,n,c)}}function Ui(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ie(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ie(t,n,c)}else a.current=null}function Wm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ie(t,t.return,c)}}function of(t,n,a){try{var s=t.stateNode;Lx(s,t.type,a,n),s[_n]=n}catch(c){Ie(t,t.return,c)}}function qm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ba(t.type)||t.tag===4}function lf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||qm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ba(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Vi));else if(s!==4&&(s===27&&Ba(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(cf(t,n,a),t=t.sibling;t!==null;)cf(t,n,a),t=t.sibling}function Ul(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ba(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ul(t,n,a),t=t.sibling;t!==null;)Ul(t,n,a),t=t.sibling}function Ym(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);An(n,s,a),n[rn]=t,n[_n]=a}catch(f){Ie(t,t.return,f)}}var Ji=!1,cn=!1,uf=!1,jm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function dx(t,n){if(t=t.containerInfo,Uf=Jl,t=sp(t),nu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,b=-1,F=-1,J=0,ht=0,vt=t,nt=null;e:for(;;){for(var ot;vt!==a||c!==0&&vt.nodeType!==3||(b=g+c),vt!==f||s!==0&&vt.nodeType!==3||(F=g+s),vt.nodeType===3&&(g+=vt.nodeValue.length),(ot=vt.firstChild)!==null;)nt=vt,vt=ot;for(;;){if(vt===t)break e;if(nt===a&&++J===c&&(b=g),nt===f&&++ht===s&&(F=g),(ot=vt.nextSibling)!==null)break;vt=nt,nt=vt.parentNode}vt=ot}a=b===-1||F===-1?null:{start:b,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nf={focusedElem:t,selectionRange:a},Jl=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Vt=mr(a.type,c);t=s.getSnapshotBeforeUpdate(Vt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(te){Ie(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Pf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Pf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Zm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ta(t,a),s&4&&uo(5,a);break;case 1:if(ta(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Ie(a,a.return,g)}else{var c=mr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Ie(a,a.return,g)}}s&64&&Xm(a),s&512&&fo(a,a.return);break;case 3:if(ta(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Lp(t,n)}catch(g){Ie(a,a.return,g)}}break;case 27:n===null&&s&4&&Ym(a);case 26:case 5:ta(t,a),n===null&&s&4&&Wm(a),s&512&&fo(a,a.return);break;case 12:ta(t,a);break;case 31:ta(t,a),s&4&&Jm(t,a);break;case 13:ta(t,a),s&4&&$m(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Mx.bind(null,a),Gx(t,a))));break;case 22:if(s=a.memoizedState!==null||Ji,!s){n=n!==null&&n.memoizedState!==null||cn,c=Ji;var f=cn;Ji=s,(cn=n)&&!f?ea(t,a,(a.subtreeFlags&8772)!==0):ta(t,a),Ji=c,cn=f}break;case 30:break;default:ta(t,a)}}function Km(t){var n=t.alternate;n!==null&&(t.alternate=null,Km(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Bs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ze=null,zn=!1;function $i(t,n,a){for(a=a.child;a!==null;)Qm(t,n,a),a=a.sibling}function Qm(t,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:cn||Ui(a,n),$i(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ui(a,n);var s=Ze,c=zn;Ba(a.type)&&(Ze=a.stateNode,zn=!1),$i(t,n,a),Mo(a.stateNode),Ze=s,zn=c;break;case 5:cn||Ui(a,n);case 6:if(s=Ze,c=zn,Ze=null,$i(t,n,a),Ze=s,zn=c,Ze!==null)if(zn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){Ie(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){Ie(a,n,f)}break;case 18:Ze!==null&&(zn?(t=Ze,Xg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),fs(t)):Xg(Ze,a.stateNode));break;case 4:s=Ze,c=zn,Ze=a.stateNode.containerInfo,zn=!0,$i(t,n,a),Ze=s,zn=c;break;case 0:case 11:case 14:case 15:Na(2,a,n),cn||Na(4,a,n),$i(t,n,a);break;case 1:cn||(Ui(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&km(a,n,s)),$i(t,n,a);break;case 21:$i(t,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,$i(t,n,a),cn=s;break;default:$i(t,n,a)}}function Jm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{fs(t)}catch(a){Ie(n,n.return,a)}}}function $m(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fs(t)}catch(a){Ie(n,n.return,a)}}function hx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new jm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new jm),n;default:throw Error(r(435,t.tag))}}function Nl(t,n){var a=hx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=yx.bind(null,t,s);s.then(c,c)}})}function Fn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,g=n,b=g;t:for(;b!==null;){switch(b.tag){case 27:if(Ba(b.type)){Ze=b.stateNode,zn=!1;break t}break;case 5:Ze=b.stateNode,zn=!1;break t;case 3:case 4:Ze=b.stateNode.containerInfo,zn=!0;break t}b=b.return}if(Ze===null)throw Error(r(160));Qm(f,g,c),Ze=null,zn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)tg(n,t),n=n.sibling}var Si=null;function tg(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Fn(n,t),Bn(t),s&4&&(Na(3,t,t.return),uo(3,t),Na(5,t,t.return));break;case 1:Fn(n,t),Bn(t),s&512&&(cn||a===null||Ui(a,a.return)),s&64&&Ji&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=Si;if(Fn(n,t),Bn(t),s&512&&(cn||a===null||Ui(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[tr]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),An(f,s,a),f[rn]=t,T(f),s=f;break t;case"link":var g=t0("link","href",c).get(s+(a.href||""));if(g){for(var b=0;b<g.length;b++)if(f=g[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(b,1);break e}}f=c.createElement(s),An(f,s,a),c.head.appendChild(f);break;case"meta":if(g=t0("meta","content",c).get(s+(a.content||""))){for(b=0;b<g.length;b++)if(f=g[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(b,1);break e}}f=c.createElement(s),An(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=t,T(f),s=f}t.stateNode=s}else e0(c,t.type,t.stateNode);else t.stateNode=$g(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?e0(c,t.type,t.stateNode):$g(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&of(t,t.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,t),Bn(t),s&512&&(cn||a===null||Ui(a,a.return)),a!==null&&s&4&&of(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,t),Bn(t),s&512&&(cn||a===null||Ui(a,a.return)),t.flags&32){c=t.stateNode;try{fn(c,"")}catch(Vt){Ie(t,t.return,Vt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,of(t,c,a!==null?a.memoizedProps:c)),s&1024&&(uf=!0);break;case 6:if(Fn(n,t),Bn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Vt){Ie(t,t.return,Vt)}}break;case 3:if(jl=null,c=Si,Si=ql(n.containerInfo),Fn(n,t),Si=c,Bn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{fs(n.containerInfo)}catch(Vt){Ie(t,t.return,Vt)}uf&&(uf=!1,eg(t));break;case 4:s=Si,Si=ql(t.stateNode.containerInfo),Fn(n,t),Bn(t),Si=s;break;case 12:Fn(n,t),Bn(t);break;case 31:Fn(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Nl(t,s)));break;case 13:Fn(n,t),Bn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ol=y()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Nl(t,s)));break;case 22:c=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,J=Ji,ht=cn;if(Ji=J||c,cn=ht||F,Fn(n,t),cn=ht,Ji=J,Bn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||F||Ji||cn||gr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{b=F.stateNode;var vt=F.memoizedProps.style,nt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;b.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Vt){Ie(F,F.return,Vt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=c?"":F.memoizedProps}catch(Vt){Ie(F,F.return,Vt)}}}else if(n.tag===18){if(a===null){F=n;try{var ot=F.stateNode;c?kg(ot,!0):kg(F.stateNode,!1)}catch(Vt){Ie(F,F.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Nl(t,a))));break;case 19:Fn(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Nl(t,s)));break;case 30:break;case 21:break;default:Fn(n,t),Bn(t)}}function Bn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(qm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=lf(t);Ul(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(fn(g,""),a.flags&=-33);var b=lf(t);Ul(t,b,g);break;case 3:case 4:var F=a.stateNode.containerInfo,J=lf(t);cf(t,J,F);break;default:throw Error(r(161))}}catch(ht){Ie(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function eg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;eg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ta(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Zm(t,n.alternate,n),n=n.sibling}function gr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Na(4,n,n.return),gr(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&km(n,n.return,a),gr(n);break;case 27:Mo(n.stateNode);case 26:case 5:Ui(n,n.return),gr(n);break;case 22:n.memoizedState===null&&gr(n);break;case 30:gr(n);break;default:gr(n)}t=t.sibling}}function ea(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:ea(c,f,a),uo(4,f);break;case 1:if(ea(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Ie(s,s.return,J)}if(s=f,c=s.updateQueue,c!==null){var b=s.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)Np(F[c],b)}catch(J){Ie(s,s.return,J)}}a&&g&64&&Xm(f),fo(f,f.return);break;case 27:Ym(f);case 26:case 5:ea(c,f,a),a&&s===null&&g&4&&Wm(f),fo(f,f.return);break;case 12:ea(c,f,a);break;case 31:ea(c,f,a),a&&g&4&&Jm(c,f);break;case 13:ea(c,f,a),a&&g&4&&$m(c,f);break;case 22:f.memoizedState===null&&ea(c,f,a),fo(f,f.return);break;case 30:break;default:ea(c,f,a)}n=n.sibling}}function ff(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Qs(a))}function df(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qs(t))}function Mi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ng(t,n,a,s),n=n.sibling}function ng(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,s),c&2048&&uo(9,n);break;case 1:Mi(t,n,a,s);break;case 3:Mi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qs(t)));break;case 12:if(c&2048){Mi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,b=f.onPostCommit;typeof b=="function"&&b(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Ie(n,n.return,F)}}else Mi(t,n,a,s);break;case 31:Mi(t,n,a,s);break;case 13:Mi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(t,n,a,s):ho(t,n):f._visibility&2?Mi(t,n,a,s):(f._visibility|=2,ts(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&ff(g,n);break;case 24:Mi(t,n,a,s),c&2048&&df(n.alternate,n);break;default:Mi(t,n,a,s)}}function ts(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,b=a,F=s,J=g.flags;switch(g.tag){case 0:case 11:case 15:ts(f,g,b,F,c),uo(8,g);break;case 23:break;case 22:var ht=g.stateNode;g.memoizedState!==null?ht._visibility&2?ts(f,g,b,F,c):ho(f,g):(ht._visibility|=2,ts(f,g,b,F,c)),c&&J&2048&&ff(g.alternate,g);break;case 24:ts(f,g,b,F,c),c&&J&2048&&df(g.alternate,g);break;default:ts(f,g,b,F,c)}n=n.sibling}}function ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:ho(a,s),c&2048&&ff(s.alternate,s);break;case 24:ho(a,s),c&2048&&df(s.alternate,s);break;default:ho(a,s)}n=n.sibling}}var po=8192;function es(t,n,a){if(t.subtreeFlags&po)for(t=t.child;t!==null;)ig(t,n,a),t=t.sibling}function ig(t,n,a){switch(t.tag){case 26:es(t,n,a),t.flags&po&&t.memoizedState!==null&&$x(a,Si,t.memoizedState,t.memoizedProps);break;case 5:es(t,n,a);break;case 3:case 4:var s=Si;Si=ql(t.stateNode.containerInfo),es(t,n,a),Si=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=po,po=16777216,es(t,n,a),po=s):es(t,n,a));break;default:es(t,n,a)}}function ag(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,sg(s,t)}ag(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rg(t),t=t.sibling}function rg(t){switch(t.tag){case 0:case 11:case 15:mo(t),t.flags&2048&&Na(9,t,t.return);break;case 3:mo(t);break;case 12:mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ll(t)):mo(t);break;default:mo(t)}}function Ll(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,sg(s,t)}ag(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Na(8,n,n.return),Ll(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ll(n));break;default:Ll(n)}t=t.sibling}}function sg(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Na(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else t:for(a=t;mn!==null;){s=mn;var c=s.sibling,f=s.return;if(Km(s),s===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var px={getCacheForType:function(t){var n=bn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return bn(sn).controller.signal}},mx=typeof WeakMap=="function"?WeakMap:Map,De=0,Xe=null,pe=null,_e=0,Pe=0,Kn=null,La=!1,ns=!1,hf=!1,na=0,$e=0,Oa=0,_r=0,pf=0,Qn=0,is=0,go=null,Hn=null,mf=!1,Ol=0,og=0,Pl=1/0,Il=null,Pa=null,dn=0,Ia=null,as=null,ia=0,gf=0,_f=null,lg=null,_o=0,vf=null;function Jn(){return(De&2)!==0&&_e!==0?_e&-_e:L.T!==null?bf():zs()}function cg(){if(Qn===0)if((_e&536870912)===0||xe){var t=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),Qn=t}else Qn=536870912;return t=jn.current,t!==null&&(t.flags|=32),Qn}function Gn(t,n,a){(t===Xe&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)&&(rs(t,0),za(t,_e,Qn,!1)),Cn(t,a),((De&2)===0||t!==Xe)&&(t===Xe&&((De&2)===0&&(_r|=a),$e===4&&za(t,_e,Qn,!1)),Ni(t))}function ug(t,n,a){if((De&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Rt(t,n),c=s?vx(t,n):Sf(t,n,!0),f=s;do{if(c===0){ns&&!s&&za(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!gx(a)){c=Sf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var b=t;c=go;var F=b.current.memoizedState.isDehydrated;if(F&&(rs(b,g).flags|=256),g=Sf(b,g,!1),g!==2){if(hf&&!F){b.errorRecoveryDisabledLanes|=f,_r|=f,c=4;break t}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){rs(t,0),za(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:za(s,n,Qn,!La);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Ol+300-y(),10<c)){if(za(s,n,Qn,!La),St(s,0,!0)!==0)break t;ia=n,s.timeoutHandle=Gg(fg.bind(null,s,a,Hn,Il,mf,n,Qn,_r,is,La,f,"Throttled",-0,0),c);break t}fg(s,a,Hn,Il,mf,n,Qn,_r,is,La,f,null,-0,0)}}break}while(!0);Ni(t)}function fg(t,n,a,s,c,f,g,b,F,J,ht,vt,nt,ot){if(t.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vi},ig(n,f,vt);var Vt=(f&62914560)===f?Ol-y():(f&4194048)===f?og-y():0;if(Vt=tS(vt,Vt),Vt!==null){ia=f,t.cancelPendingCommit=Vt(xg.bind(null,t,n,f,a,s,c,g,b,F,ht,vt,null,nt,ot)),za(t,f,g,!J);return}}xg(t,n,f,a,s,c,g,b,F)}function gx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!qn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function za(t,n,a,s){n&=~pf,n&=~_r,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&jo(t,a,n)}function zl(){return(De&6)===0?(vo(0),!1):!0}function xf(){if(pe!==null){if(Pe===0)var t=pe.return;else t=pe,qi=lr=null,Ou(t),Zr=null,$s=0,t=pe;for(;t!==null;)Vm(t.alternate,t),t=t.return;pe=null}}function rs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Ix(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ia=0,xf(),Xe=t,pe=a=ki(t.current,null),_e=n,Pe=0,Kn=null,La=!1,ns=Rt(t,n),hf=!1,is=Qn=pf=_r=Oa=$e=0,Hn=go=null,mf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Pt(s),f=1<<c;n|=t[c],s&=~f}return na=n,al(),a}function dg(t,n){oe=null,L.H=oo,n===jr||n===dl?(n=Cp(),Pe=3):n===yu?(n=Cp(),Pe=4):Pe=n===Ku?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,pe===null&&($e=1,Al(t,ai(n,t.current)))}function hg(){var t=jn.current;return t===null?!0:(_e&4194048)===_e?li===null:(_e&62914560)===_e||(_e&536870912)!==0?t===li:!1}function pg(){var t=L.H;return L.H=oo,t===null?oo:t}function mg(){var t=L.A;return L.A=px,t}function Fl(){$e=4,La||(_e&4194048)!==_e&&jn.current!==null||(ns=!0),(Oa&134217727)===0&&(_r&134217727)===0||Xe===null||za(Xe,_e,Qn,!1)}function Sf(t,n,a){var s=De;De|=2;var c=pg(),f=mg();(Xe!==t||_e!==n)&&(Il=null,rs(t,n)),n=!1;var g=$e;t:do try{if(Pe!==0&&pe!==null){var b=pe,F=Kn;switch(Pe){case 8:xf(),g=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var J=Pe;if(Pe=0,Kn=null,ss(t,b,F,J),a&&ns){g=0;break t}break;default:J=Pe,Pe=0,Kn=null,ss(t,b,F,J)}}_x(),g=$e;break}catch(ht){dg(t,ht)}while(!0);return n&&t.shellSuspendCounter++,qi=lr=null,De=s,L.H=c,L.A=f,pe===null&&(Xe=null,_e=0,al()),g}function _x(){for(;pe!==null;)gg(pe)}function vx(t,n){var a=De;De|=2;var s=pg(),c=mg();Xe!==t||_e!==n?(Il=null,Pl=y()+500,rs(t,n)):ns=Rt(t,n);t:do try{if(Pe!==0&&pe!==null){n=pe;var f=Kn;e:switch(Pe){case 1:Pe=0,Kn=null,ss(t,n,f,1);break;case 2:case 9:if(Ap(f)){Pe=0,Kn=null,_g(n);break}n=function(){Pe!==2&&Pe!==9||Xe!==t||(Pe=7),Ni(t)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Ap(f)?(Pe=0,Kn=null,_g(n)):(Pe=0,Kn=null,ss(t,n,f,7));break;case 5:var g=null;switch(pe.tag){case 26:g=pe.memoizedState;case 5:case 27:var b=pe;if(g?n0(g):b.stateNode.complete){Pe=0,Kn=null;var F=b.sibling;if(F!==null)pe=F;else{var J=b.return;J!==null?(pe=J,Bl(J)):pe=null}break e}}Pe=0,Kn=null,ss(t,n,f,5);break;case 6:Pe=0,Kn=null,ss(t,n,f,6);break;case 8:xf(),$e=6;break t;default:throw Error(r(462))}}xx();break}catch(ht){dg(t,ht)}while(!0);return qi=lr=null,L.H=s,L.A=c,De=a,pe!==null?0:(Xe=null,_e=0,al(),$e)}function xx(){for(;pe!==null&&!Yt();)gg(pe)}function gg(t){var n=Hm(t.alternate,t,na);t.memoizedProps=t.pendingProps,n===null?Bl(t):pe=n}function _g(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Om(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Om(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Ou(n);default:Vm(a,n),n=pe=mp(n,na),n=Hm(a,n,na)}t.memoizedProps=t.pendingProps,n===null?Bl(t):pe=n}function ss(t,n,a,s){qi=lr=null,Ou(n),Zr=null,$s=0;var c=n.return;try{if(ox(t,c,n,a,_e)){$e=1,Al(t,ai(a,t.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;$e=1,Al(t,ai(a,t.current)),pe=null;return}n.flags&32768?(xe||s===1?t=!0:ns||(_e&536870912)!==0?t=!1:(La=t=!0,(s===2||s===9||s===3||s===6)&&(s=jn.current,s!==null&&s.tag===13&&(s.flags|=16384))),vg(n,t)):Bl(n)}function Bl(t){var n=t;do{if((n.flags&32768)!==0){vg(n,La);return}t=n.return;var a=ux(n.alternate,n,na);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);$e===0&&($e=5)}function vg(t,n){do{var a=fx(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);$e=6,pe=null}function xg(t,n,a,s,c,f,g,b,F){t.cancelPendingCommit=null;do Hl();while(dn!==0);if((De&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=ou,gi(t,a,f,g,b,F),t===Xe&&(pe=Xe=null,_e=0),as=n,Ia=t,ia=a,gf=f,_f=c,lg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ex(ut,function(){return bg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=L.T,L.T=null,c=H.p,H.p=2,g=De,De|=4;try{dx(t,n,a)}finally{De=g,H.p=c,L.T=s}}dn=1,Sg(),Mg(),yg()}}function Sg(){if(dn===1){dn=0;var t=Ia,n=as,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var s=H.p;H.p=2;var c=De;De|=4;try{tg(n,t);var f=Nf,g=sp(t.containerInfo),b=f.focusedElem,F=f.selectionRange;if(g!==b&&b&&b.ownerDocument&&rp(b.ownerDocument.documentElement,b)){if(F!==null&&nu(b)){var J=F.start,ht=F.end;if(ht===void 0&&(ht=J),"selectionStart"in b)b.selectionStart=J,b.selectionEnd=Math.min(ht,b.value.length);else{var vt=b.ownerDocument||document,nt=vt&&vt.defaultView||window;if(nt.getSelection){var ot=nt.getSelection(),Vt=b.textContent.length,te=Math.min(F.start,Vt),Ge=F.end===void 0?te:Math.min(F.end,Vt);!ot.extend&&te>Ge&&(g=Ge,Ge=te,te=g);var Y=ap(b,te),V=ap(b,Ge);if(Y&&V&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==V.node||ot.focusOffset!==V.offset)){var Q=vt.createRange();Q.setStart(Y.node,Y.offset),ot.removeAllRanges(),te>Ge?(ot.addRange(Q),ot.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),ot.addRange(Q))}}}}for(vt=[],ot=b;ot=ot.parentNode;)ot.nodeType===1&&vt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<vt.length;b++){var gt=vt[b];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Jl=!!Uf,Nf=Uf=null}finally{De=c,H.p=s,L.T=a}}t.current=n,dn=2}}function Mg(){if(dn===2){dn=0;var t=Ia,n=as,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var s=H.p;H.p=2;var c=De;De|=4;try{Zm(t,n.alternate,n)}finally{De=c,H.p=s,L.T=a}}dn=3}}function yg(){if(dn===4||dn===3){dn=0,U();var t=Ia,n=as,a=ia,s=lg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,as=Ia=null,Eg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Pa=null),Ur(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=L.T,c=H.p,H.p=2,L.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var b=s[g];f(b.value,{componentStack:b.stack})}}finally{L.T=n,H.p=c}}(ia&3)!==0&&Hl(),Ni(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===vf?_o++:(_o=0,vf=t):_o=0,vo(0)}}function Eg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Qs(n)))}function Hl(){return Sg(),Mg(),yg(),bg()}function bg(){if(dn!==5)return!1;var t=Ia,n=gf;gf=0;var a=Ur(ia),s=L.T,c=H.p;try{H.p=32>a?32:a,L.T=null,a=_f,_f=null;var f=Ia,g=ia;if(dn=0,as=Ia=null,ia=0,(De&6)!==0)throw Error(r(331));var b=De;if(De|=4,rg(f.current),ng(f,f.current,g,a),De=b,vo(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Et,f)}catch{}return!0}finally{H.p=c,L.T=s,Eg(t,n)}}function Tg(t,n,a){n=ai(a,n),n=Zu(t.stateNode,n,2),t=wa(t,n,2),t!==null&&(Cn(t,2),Ni(t))}function Ie(t,n,a){if(t.tag===3)Tg(t,t,a);else for(;n!==null;){if(n.tag===3){Tg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Pa===null||!Pa.has(s))){t=ai(a,t),a=Am(2),s=wa(n,a,2),s!==null&&(Rm(a,s,n,t),Cn(s,2),Ni(s));break}}n=n.return}}function Mf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new mx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(hf=!0,c.add(a),t=Sx.bind(null,t,n,a),n.then(t,t))}function Sx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(_e&a)===a&&($e===4||$e===3&&(_e&62914560)===_e&&300>y()-Ol?(De&2)===0&&rs(t,0):pf|=a,is===_e&&(is=0)),Ni(t)}function Ag(t,n){n===0&&(n=Le()),t=rr(t,n),t!==null&&(Cn(t,n),Ni(t))}function Mx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Ag(t,a)}function yx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Ag(t,a)}function Ex(t,n){return Me(t,n)}var Gl=null,os=null,yf=!1,Vl=!1,Ef=!1,Fa=0;function Ni(t){t!==os&&t.next===null&&(os===null?Gl=os=t:os=os.next=t),Vl=!0,yf||(yf=!0,Tx())}function vo(t,n){if(!Ef&&Vl){Ef=!0;do for(var a=!1,s=Gl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,b=s.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=c&~(g&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Dg(s,f))}else f=_e,f=St(s,s===Xe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Rt(s,f)||(a=!0,Dg(s,f));s=s.next}while(a);Ef=!1}}function bx(){Rg()}function Rg(){Vl=yf=!1;var t=0;Fa!==0&&Px()&&(t=Fa);for(var n=y(),a=null,s=Gl;s!==null;){var c=s.next,f=Cg(s,n);f===0?(s.next=null,a===null?Gl=c:a.next=c,c===null&&(os=a)):(a=s,(t!==0||(f&3)!==0)&&(Vl=!0)),s=c}dn!==0&&dn!==5||vo(t),Fa!==0&&(Fa=0)}function Cg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Pt(f),b=1<<g,F=c[g];F===-1?((b&a)===0||(b&s)!==0)&&(c[g]=ne(b,n)):F<=n&&(t.expiredLanes|=b),f&=~b}if(n=Xe,a=_e,a=St(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Ue(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Rt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Ue(s),Ur(a)){case 2:case 8:a=Mt;break;case 32:a=ut;break;case 268435456:a=Ct;break;default:a=ut}return s=wg.bind(null,t),a=Me(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Ue(s),t.callbackPriority=2,t.callbackNode=null,2}function wg(t,n){if(dn!==0&&dn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Hl()&&t.callbackNode!==a)return null;var s=_e;return s=St(t,t===Xe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(ug(t,s,n),Cg(t,y()),t.callbackNode!=null&&t.callbackNode===a?wg.bind(null,t):null)}function Dg(t,n){if(Hl())return null;ug(t,n,!0)}function Tx(){zx(function(){(De&6)!==0?Me(mt,bx):Rg()})}function bf(){if(Fa===0){var t=qr;t===0&&(t=Nt,Nt<<=1,(Nt&261888)===0&&(Nt=256)),Fa=t}return Fa}function Ug(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ko(""+t)}function Ng(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Ax(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Ug((c[_n]||null).action),g=s.submitter;g&&(n=(n=g[_n]||null)?Ug(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var b=new tl("action","action",null,s,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Fa!==0){var F=g?Ng(c,g):new FormData(c);Xu(a,{pending:!0,data:F,method:c.method,action:f},null,F)}}else typeof f=="function"&&(b.preventDefault(),F=g?Ng(c,g):new FormData(c),Xu(a,{pending:!0,data:F,method:c.method,action:f},f,F))},currentTarget:c}]})}}for(var Tf=0;Tf<su.length;Tf++){var Af=su[Tf],Rx=Af.toLowerCase(),Cx=Af[0].toUpperCase()+Af.slice(1);xi(Rx,"on"+Cx)}xi(cp,"onAnimationEnd"),xi(up,"onAnimationIteration"),xi(fp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(kv,"onTransitionRun"),xi(Wv,"onTransitionStart"),xi(qv,"onTransitionCancel"),xi(dp,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function Lg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var b=s[g],F=b.instance,J=b.currentTarget;if(b=b.listener,F!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=J;try{f(c)}catch(ht){il(ht)}c.currentTarget=null,f=F}else for(g=0;g<s.length;g++){if(b=s[g],F=b.instance,J=b.currentTarget,b=b.listener,F!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=J;try{f(c)}catch(ht){il(ht)}c.currentTarget=null,f=F}}}}function me(t,n){var a=n[Nr];a===void 0&&(a=n[Nr]=new Set);var s=t+"__bubble";a.has(s)||(Og(n,t,2,!1),a.add(s))}function Rf(t,n,a){var s=0;n&&(s|=4),Og(a,t,s,n)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Cf(t){if(!t[Xl]){t[Xl]=!0,q.forEach(function(a){a!=="selectionchange"&&(wx.has(a)||Rf(a,!1,t),Rf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Xl]||(n[Xl]=!0,Rf("selectionchange",!1,n))}}function Og(t,n,a,s){switch(c0(n)){case 2:var c=iS;break;case 8:c=aS;break;default:c=Xf}a=c.bind(null,n,a,t),c=void 0,!Yc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function wf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var b=s.stateNode.containerInfo;if(b===c)break;if(g===4)for(g=s.return;g!==null;){var F=g.tag;if((F===3||F===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;b!==null;){if(g=xa(b),g===null)return;if(F=g.tag,F===5||F===6||F===26||F===27){s=f=g;continue t}b=b.parentNode}}s=s.return}Bh(function(){var J=f,ht=Wc(a),vt=[];t:{var nt=hp.get(t);if(nt!==void 0){var ot=tl,Vt=t;switch(t){case"keypress":if(Jo(a)===0)break t;case"keydown":case"keyup":ot=yv;break;case"focusin":Vt="focus",ot=Qc;break;case"focusout":Vt="blur",ot=Qc;break;case"beforeblur":case"afterblur":ot=Qc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Tv;break;case cp:case up:case fp:ot=hv;break;case dp:ot=Rv;break;case"scroll":case"scrollend":ot=lv;break;case"wheel":ot=wv;break;case"copy":case"cut":case"paste":ot=mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=kh;break;case"toggle":case"beforetoggle":ot=Uv}var te=(n&4)!==0,Ge=!te&&(t==="scroll"||t==="scrollend"),Y=te?nt!==null?nt+"Capture":null:nt;te=[];for(var V=J,Q;V!==null;){var gt=V;if(Q=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||Q===null||Y===null||(gt=Hs(V,Y),gt!=null&&te.push(So(V,gt,Q))),Ge)break;V=V.return}0<te.length&&(nt=new ot(nt,Vt,null,a,ht),vt.push({event:nt,listeners:te}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",nt&&a!==kc&&(Vt=a.relatedTarget||a.fromElement)&&(xa(Vt)||Vt[_i]))break t;if((ot||nt)&&(nt=ht.window===ht?ht:(nt=ht.ownerDocument)?nt.defaultView||nt.parentWindow:window,ot?(Vt=a.relatedTarget||a.toElement,ot=J,Vt=Vt?xa(Vt):null,Vt!==null&&(Ge=u(Vt),te=Vt.tag,Vt!==Ge||te!==5&&te!==27&&te!==6)&&(Vt=null)):(ot=null,Vt=J),ot!==Vt)){if(te=Vh,gt="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(te=kh,gt="onPointerLeave",Y="onPointerEnter",V="pointer"),Ge=ot==null?nt:er(ot),Q=Vt==null?nt:er(Vt),nt=new te(gt,V+"leave",ot,a,ht),nt.target=Ge,nt.relatedTarget=Q,gt=null,xa(ht)===J&&(te=new te(Y,V+"enter",Vt,a,ht),te.target=Q,te.relatedTarget=Ge,gt=te),Ge=gt,ot&&Vt)e:{for(te=Dx,Y=ot,V=Vt,Q=0,gt=Y;gt;gt=te(gt))Q++;gt=0;for(var Qt=V;Qt;Qt=te(Qt))gt++;for(;0<Q-gt;)Y=te(Y),Q--;for(;0<gt-Q;)V=te(V),gt--;for(;Q--;){if(Y===V||V!==null&&Y===V.alternate){te=Y;break e}Y=te(Y),V=te(V)}te=null}else te=null;ot!==null&&Pg(vt,nt,ot,te,!1),Vt!==null&&Ge!==null&&Pg(vt,Ge,Vt,te,!0)}}t:{if(nt=J?er(J):window,ot=nt.nodeName&&nt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&nt.type==="file")var be=Jh;else if(Kh(nt))if($h)be=Gv;else{be=Bv;var jt=Fv}else ot=nt.nodeName,!ot||ot.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?J&&vi(J.elementType)&&(be=Jh):be=Hv;if(be&&(be=be(t,J))){Qh(vt,be,a,ht);break t}jt&&jt(t,nt,J),t==="focusout"&&J&&nt.type==="number"&&J.memoizedProps.value!=null&&xn(nt,"number",nt.value)}switch(jt=J?er(J):window,t){case"focusin":(Kh(jt)||jt.contentEditable==="true")&&(Fr=jt,iu=J,js=null);break;case"focusout":js=iu=Fr=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,op(vt,a,ht);break;case"selectionchange":if(Xv)break;case"keydown":case"keyup":op(vt,a,ht)}var ce;if($c)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else zr?jh(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Wh&&a.locale!=="ko"&&(zr||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&zr&&(ce=Hh()):(ya=ht,jc="value"in ya?ya.value:ya.textContent,zr=!0)),jt=kl(J,ve),0<jt.length&&(ve=new Xh(ve,t,null,a,ht),vt.push({event:ve,listeners:jt}),ce?ve.data=ce:(ce=Zh(a),ce!==null&&(ve.data=ce)))),(ce=Lv?Ov(t,a):Pv(t,a))&&(ve=kl(J,"onBeforeInput"),0<ve.length&&(jt=new Xh("onBeforeInput","beforeinput",null,a,ht),vt.push({event:jt,listeners:ve}),jt.data=ce)),Ax(vt,t,J,a,ht)}Lg(vt,n)})}function So(t,n,a){return{instance:t,listener:n,currentTarget:a}}function kl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Hs(t,a),c!=null&&s.unshift(So(t,c,f)),c=Hs(t,n),c!=null&&s.push(So(t,c,f))),t.tag===3)return s;t=t.return}return[]}function Dx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Pg(t,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var b=a,F=b.alternate,J=b.stateNode;if(b=b.tag,F!==null&&F===s)break;b!==5&&b!==26&&b!==27||J===null||(F=J,c?(J=Hs(a,f),J!=null&&g.unshift(So(a,J,F))):c||(J=Hs(a,f),J!=null&&g.push(So(a,J,F)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Ux=/\r\n?/g,Nx=/\u0000|\uFFFD/g;function Ig(t){return(typeof t=="string"?t:""+t).replace(Ux,`
`).replace(Nx,"")}function zg(t,n){return n=Ig(n),Ig(t)===n}function He(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||fn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&fn(t,""+s);break;case"className":Jt(t,"class",s);break;case"tabIndex":Jt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(t,a,s);break;case"style":Or(t,s,f);break;case"data":if(n!=="object"){Jt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ko(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(t,n,"name",c.name,c,null),He(t,n,"formEncType",c.formEncType,c,null),He(t,n,"formMethod",c.formMethod,c,null),He(t,n,"formTarget",c.formTarget,c,null)):(He(t,n,"encType",c.encType,c,null),He(t,n,"method",c.method,c,null),He(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ko(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Vi);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ko(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":me("beforetoggle",t),me("toggle",t),Wt(t,"popover",s);break;case"xlinkActuate":qt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":qt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":qt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":qt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":qt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":qt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":qt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":qt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":qt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Wt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=sv.get(a)||a,Wt(t,a,s))}}function Df(t,n,a,s,c,f){switch(a){case"style":Or(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?fn(t,s):(typeof s=="number"||typeof s=="bigint")&&fn(t,""+s);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Vi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Wt(t,a,s)}}}function An(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(t,n,f,g,a,null)}}c&&He(t,n,"srcSet",a.srcSet,a,null),s&&He(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var b=f=g=c=null,F=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var ht=a[s];if(ht!=null)switch(s){case"name":c=ht;break;case"type":g=ht;break;case"checked":F=ht;break;case"defaultChecked":J=ht;break;case"value":f=ht;break;case"defaultValue":b=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:He(t,n,s,ht,a,null)}}Gi(t,f,b,F,J,g,c,!1);return;case"select":me("invalid",t),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":g=b;break;case"multiple":s=b;default:He(t,n,c,b,a,null)}n=f,a=g,t.multiple=!!s,n!=null?ni(t,!!s,n,!1):a!=null&&ni(t,!!s,a,!0);return;case"textarea":me("invalid",t),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(b=a[g],b!=null))switch(g){case"value":s=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:He(t,n,g,b,a,null)}Sn(t,s,c,f);return;case"option":for(F in a)a.hasOwnProperty(F)&&(s=a[F],s!=null)&&(F==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":He(t,n,F,s,a,null));return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(s=0;s<xo.length;s++)me(xo[s],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(t,n,J,s,a,null)}return;default:if(vi(n)){for(ht in a)a.hasOwnProperty(ht)&&(s=a[ht],s!==void 0&&Df(t,n,ht,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&He(t,n,b,s,a,null))}function Lx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,b=null,F=null,J=null,ht=null;for(ot in a){var vt=a[ot];if(a.hasOwnProperty(ot)&&vt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":F=vt;default:s.hasOwnProperty(ot)||He(t,n,ot,null,s,vt)}}for(var nt in s){var ot=s[nt];if(vt=a[nt],s.hasOwnProperty(nt)&&(ot!=null||vt!=null))switch(nt){case"type":f=ot;break;case"name":c=ot;break;case"checked":J=ot;break;case"defaultChecked":ht=ot;break;case"value":g=ot;break;case"defaultValue":b=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==vt&&He(t,n,nt,ot,s,vt)}}vn(t,g,b,F,J,ht,f,c);return;case"select":ot=g=b=nt=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":ot=F;default:s.hasOwnProperty(f)||He(t,n,f,null,s,F)}for(c in s)if(f=s[c],F=a[c],s.hasOwnProperty(c)&&(f!=null||F!=null))switch(c){case"value":nt=f;break;case"defaultValue":b=f;break;case"multiple":g=f;default:f!==F&&He(t,n,c,f,s,F)}n=b,a=g,s=ot,nt!=null?ni(t,!!a,nt,!1):!!s!=!!a&&(n!=null?ni(t,!!a,n,!0):ni(t,!!a,a?[]:"",!1));return;case"textarea":ot=nt=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:He(t,n,b,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":nt=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&He(t,n,g,c,s,f)}Oe(t,nt,ot);return;case"option":for(var Vt in a)nt=a[Vt],a.hasOwnProperty(Vt)&&nt!=null&&!s.hasOwnProperty(Vt)&&(Vt==="selected"?t.selected=!1:He(t,n,Vt,null,s,nt));for(F in s)nt=s[F],ot=a[F],s.hasOwnProperty(F)&&nt!==ot&&(nt!=null||ot!=null)&&(F==="selected"?t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol":He(t,n,F,nt,s,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)nt=a[te],a.hasOwnProperty(te)&&nt!=null&&!s.hasOwnProperty(te)&&He(t,n,te,null,s,nt);for(J in s)if(nt=s[J],ot=a[J],s.hasOwnProperty(J)&&nt!==ot&&(nt!=null||ot!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:He(t,n,J,nt,s,ot)}return;default:if(vi(n)){for(var Ge in a)nt=a[Ge],a.hasOwnProperty(Ge)&&nt!==void 0&&!s.hasOwnProperty(Ge)&&Df(t,n,Ge,void 0,s,nt);for(ht in s)nt=s[ht],ot=a[ht],!s.hasOwnProperty(ht)||nt===ot||nt===void 0&&ot===void 0||Df(t,n,ht,nt,s,ot);return}}for(var Y in a)nt=a[Y],a.hasOwnProperty(Y)&&nt!=null&&!s.hasOwnProperty(Y)&&He(t,n,Y,null,s,nt);for(vt in s)nt=s[vt],ot=a[vt],!s.hasOwnProperty(vt)||nt===ot||nt==null&&ot==null||He(t,n,vt,nt,s,ot)}function Fg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ox(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,b=c.duration;if(f&&b&&Fg(g)){for(g=0,b=c.responseEnd,s+=1;s<a.length;s++){var F=a[s],J=F.startTime;if(J>b)break;var ht=F.transferSize,vt=F.initiatorType;ht&&Fg(vt)&&(F=F.responseEnd,g+=ht*(F<b?1:(b-J)/(F-J)))}if(--s,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Uf=null,Nf=null;function Wl(t){return t.nodeType===9?t:t.ownerDocument}function Bg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Lf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Of=null;function Px(){var t=window.event;return t&&t.type==="popstate"?t===Of?!1:(Of=t,!0):(Of=null,!1)}var Gg=typeof setTimeout=="function"?setTimeout:void 0,Ix=typeof clearTimeout=="function"?clearTimeout:void 0,Vg=typeof Promise=="function"?Promise:void 0,zx=typeof queueMicrotask=="function"?queueMicrotask:typeof Vg<"u"?function(t){return Vg.resolve(null).then(t).catch(Fx)}:Gg;function Fx(t){setTimeout(function(){throw t})}function Ba(t){return t==="head"}function Xg(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),fs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Mo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Mo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,b=f.nodeName;f[tr]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Mo(t.ownerDocument.body);a=c}while(a);fs(n)}function kg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Pf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Pf(a),Bs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Bx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[tr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function Hx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function Wg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ci(t.nextSibling),t===null))return null;return t}function If(t){return t.data==="$?"||t.data==="$~"}function zf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Gx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Ff=null;function qg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Yg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function jg(t,n,a){switch(n=Wl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Mo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Bs(t)}var ui=new Map,Zg=new Set;function ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var aa=H.d;H.d={f:Vx,r:Xx,D:kx,C:Wx,L:qx,m:Yx,X:Zx,S:jx,M:Kx};function Vx(){var t=aa.f(),n=zl();return t||n}function Xx(t){var n=Sa(t);n!==null&&n.tag===5&&n.type==="form"?dm(n):aa.r(t)}var ls=typeof document>"u"?null:document;function Kg(t,n,a){var s=ls;if(s&&typeof n=="string"&&n){var c=ie(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Zg.has(c)||(Zg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),An(n,"link",t),T(n),s.head.appendChild(n)))}}function kx(t){aa.D(t),Kg("dns-prefetch",t,null)}function Wx(t,n){aa.C(t,n),Kg("preconnect",t,n)}function qx(t,n,a){aa.L(t,n,a);var s=ls;if(s&&t&&n){var c='link[rel="preload"][as="'+ie(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ie(a.imageSizes)+'"]')):c+='[href="'+ie(t)+'"]';var f=c;switch(n){case"style":f=cs(t);break;case"script":f=us(t)}ui.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(yo(f))||n==="script"&&s.querySelector(Eo(f))||(n=s.createElement("link"),An(n,"link",t),T(n),s.head.appendChild(n)))}}function Yx(t,n){aa.m(t,n);var a=ls;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ie(s)+'"][href="'+ie(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=us(t)}if(!ui.has(f)&&(t=_({rel:"modulepreload",href:t},n),ui.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}s=a.createElement("link"),An(s,"link",t),T(s),a.head.appendChild(s)}}}function jx(t,n,a){aa.S(t,n,a);var s=ls;if(s&&t){var c=Ma(s).hoistableStyles,f=cs(t);n=n||"default";var g=c.get(f);if(!g){var b={loading:0,preload:null};if(g=s.querySelector(yo(f)))b.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(f))&&Bf(t,a);var F=g=s.createElement("link");T(F),An(F,"link",t),F._p=new Promise(function(J,ht){F.onload=J,F.onerror=ht}),F.addEventListener("load",function(){b.loading|=1}),F.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Yl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:b},c.set(f,g)}}}function Zx(t,n){aa.X(t,n);var a=ls;if(a&&t){var s=Ma(a).hoistableScripts,c=us(t),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(t=_({src:t,async:!0},n),(n=ui.get(c))&&Hf(t,n),f=a.createElement("script"),T(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Kx(t,n){aa.M(t,n);var a=ls;if(a&&t){var s=Ma(a).hoistableScripts,c=us(t),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(t=_({src:t,async:!0,type:"module"},n),(n=ui.get(c))&&Hf(t,n),f=a.createElement("script"),T(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Qg(t,n,a,s){var c=(c=tt.current)?ql(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=cs(a.href),a=Ma(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=cs(a.href);var f=Ma(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(yo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),f||Qx(c,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=us(a),a=Ma(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function cs(t){return'href="'+ie(t)+'"'}function yo(t){return'link[rel="stylesheet"]['+t+"]"}function Jg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Qx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),An(n,"link",a),T(n),t.head.appendChild(n))}function us(t){return'[src="'+ie(t)+'"]'}function Eo(t){return"script[async]"+t}function $g(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+ie(a.href)+'"]');if(s)return n.instance=s,T(s),s;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),T(s),An(s,"style",c),Yl(s,a.precedence,t),n.instance=s;case"stylesheet":c=cs(a.href);var f=t.querySelector(yo(c));if(f)return n.state.loading|=4,n.instance=f,T(f),f;s=Jg(a),(c=ui.get(c))&&Bf(s,c),f=(t.ownerDocument||t).createElement("link"),T(f);var g=f;return g._p=new Promise(function(b,F){g.onload=b,g.onerror=F}),An(f,"link",s),n.state.loading|=4,Yl(f,a.precedence,t),n.instance=f;case"script":return f=us(a.src),(c=t.querySelector(Eo(f)))?(n.instance=c,T(c),c):(s=a,(c=ui.get(f))&&(s=_({},a),Hf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),T(c),An(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Yl(s,a.precedence,t));return n.instance}function Yl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var b=s[g];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Hf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var jl=null;function t0(t,n,a){if(jl===null){var s=new Map,c=jl=new Map;c.set(a,s)}else c=jl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[tr]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var b=s.get(g);b?b.push(f):s.set(g,[f])}}return s}function e0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Jx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function n0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function $x(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=cs(s.href),f=n.querySelector(yo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Zl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,T(f);return}f=n.ownerDocument||n,s=Jg(s),(c=ui.get(c))&&Bf(s,c),f=f.createElement("link"),T(f);var g=f;g._p=new Promise(function(b,F){g.onload=b,g.onerror=F}),An(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Zl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Gf=0;function tS(t,n){return t.stylesheets&&t.count===0&&Ql(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Ql(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Gf===0&&(Gf=62500*Ox());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ql(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Gf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ql(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Kl=null;function Ql(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Kl=new Map,n.forEach(eS,t),Kl=null,Zl.call(t))}function eS(t,n){if(!(n.state.loading&4)){var a=Kl.get(t);if(a)var s=a.get(null);else{a=new Map,Kl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=Zl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var bo={$$typeof:O,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function nS(t,n,a,s,c,f,g,b,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ye(0),this.hiddenUpdates=ye(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function i0(t,n,a,s,c,f,g,b,F,J,ht,vt){return t=new nS(t,n,a,g,F,J,ht,vt,b),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),t.current=f,f.stateNode=t,n=xu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Eu(f),t}function a0(t){return t?(t=Gr,t):Gr}function r0(t,n,a,s,c,f){c=a0(c),s.context===null?s.context=c:s.pendingContext=c,s=Ca(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=wa(t,s,n),a!==null&&(Gn(a,t,n),eo(a,t,n))}function s0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Vf(t,n){s0(t,n),(t=t.alternate)&&s0(t,n)}function o0(t){if(t.tag===13||t.tag===31){var n=rr(t,67108864);n!==null&&Gn(n,t,67108864),Vf(t,67108864)}}function l0(t){if(t.tag===13||t.tag===31){var n=Jn();n=Is(n);var a=rr(t,n);a!==null&&Gn(a,t,n),Vf(t,n)}}var Jl=!0;function iS(t,n,a,s){var c=L.T;L.T=null;var f=H.p;try{H.p=2,Xf(t,n,a,s)}finally{H.p=f,L.T=c}}function aS(t,n,a,s){var c=L.T;L.T=null;var f=H.p;try{H.p=8,Xf(t,n,a,s)}finally{H.p=f,L.T=c}}function Xf(t,n,a,s){if(Jl){var c=kf(s);if(c===null)wf(t,n,s,$l,a),u0(t,s);else if(sS(c,t,n,a,s))s.stopPropagation();else if(u0(t,s),n&4&&-1<rS.indexOf(t)){for(;c!==null;){var f=Sa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=yt(f.pendingLanes);if(g!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var F=1<<31-Pt(g);b.entanglements[1]|=F,g&=~F}Ni(f),(De&6)===0&&(Pl=y()+500,vo(0))}}break;case 31:case 13:b=rr(f,2),b!==null&&Gn(b,f,2),zl(),Vf(f,2)}if(f=kf(s),f===null&&wf(t,n,s,$l,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else wf(t,n,s,null,a)}}function kf(t){return t=Wc(t),Wf(t)}var $l=null;function Wf(t){if($l=null,t=xa(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return $l=t,null}function c0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case mt:return 2;case Mt:return 8;case ut:case Zt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var qf=!1,Ha=null,Ga=null,Va=null,To=new Map,Ao=new Map,Xa=[],rS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function u0(t,n){switch(t){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":To.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function Ro(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Sa(n),n!==null&&o0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function sS(t,n,a,s,c){switch(n){case"focusin":return Ha=Ro(Ha,t,n,a,s,c),!0;case"dragenter":return Ga=Ro(Ga,t,n,a,s,c),!0;case"mouseover":return Va=Ro(Va,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return To.set(f,Ro(To.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Ao.set(f,Ro(Ao.get(f)||null,t,n,a,s,c)),!0}return!1}function f0(t){var n=xa(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Ci(t.priority,function(){l0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ci(t.priority,function(){l0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=kf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);kc=s,a.target.dispatchEvent(s),kc=null}else return n=Sa(a),n!==null&&o0(n),t.blockedOn=a,!1;n.shift()}return!0}function d0(t,n,a){tc(t)&&a.delete(n)}function oS(){qf=!1,Ha!==null&&tc(Ha)&&(Ha=null),Ga!==null&&tc(Ga)&&(Ga=null),Va!==null&&tc(Va)&&(Va=null),To.forEach(d0),Ao.forEach(d0)}function ec(t,n){t.blockedOn===n&&(t.blockedOn=null,qf||(qf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,oS)))}var nc=null;function h0(t){nc!==t&&(nc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){nc===t&&(nc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Wf(s||a)===null)continue;break}var f=Sa(a);f!==null&&(t.splice(n,3),n-=3,Xu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function fs(t){function n(F){return ec(F,t)}Ha!==null&&ec(Ha,t),Ga!==null&&ec(Ga,t),Va!==null&&ec(Va,t),To.forEach(n),Ao.forEach(n);for(var a=0;a<Xa.length;a++){var s=Xa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Xa.length&&(a=Xa[0],a.blockedOn===null);)f0(a),a.blockedOn===null&&Xa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[_n]||null;if(typeof f=="function")g||h0(a);else if(g){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[_n]||null)b=g.formAction;else if(Wf(c)!==null)continue}else b=g.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),h0(a)}}}function p0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Yf(t){this._internalRoot=t}ic.prototype.render=Yf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Jn();r0(a,s,t,n,null,null)},ic.prototype.unmount=Yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;r0(t.current,2,null,t,null,null),zl(),n[_i]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var n=zs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Xa.length&&n!==0&&n<Xa[a].priority;a++);Xa.splice(a,0,t),a===0&&f0(t)}};var m0=e.version;if(m0!=="19.2.3")throw Error(r(527,m0,"19.2.3"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var lS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{Et=ac.inject(lS),bt=ac}catch{}}return wo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=ym,f=Em,g=bm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=i0(t,1,!1,null,null,a,s,null,c,f,g,p0),t[_i]=n.current,Cf(t),new Yf(n)},wo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=ym,g=Em,b=bm,F=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=i0(t,1,!0,n,a??null,s,c,F,f,g,b,p0),n.context=a0(null),a=n.current,s=Jn(),s=Is(s),c=Ca(s),c.callback=null,wa(a,c,s),a=s,n.current.lanes=a,Cn(n,a),Ni(n),t[_i]=n.current,Cf(t),new ic(n)},wo.version="19.2.3",wo}var T0;function vS(){if(T0)return Kf.exports;T0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Kf.exports=_S(),Kf.exports}var xS=vS();const Ch="182",SS=0,A0=1,MS=2,wc=1,yS=2,zo=3,$a=0,kn=1,ua=2,da=0,As=1,Pc=2,R0=3,C0=4,ES=5,Tr=100,bS=101,TS=102,AS=103,RS=104,CS=200,wS=201,DS=202,US=203,Ud=204,Nd=205,NS=206,LS=207,OS=208,PS=209,IS=210,zS=211,FS=212,BS=213,HS=214,Ld=0,Od=1,Pd=2,Cs=3,Id=4,zd=5,Fd=6,Bd=7,b_=0,GS=1,VS=2,zi=0,T_=1,A_=2,R_=3,C_=4,w_=5,D_=6,U_=7,N_=300,wr=301,ws=302,Hd=303,Gd=304,Bc=306,Vd=1e3,fa=1001,Xd=1002,Rn=1003,XS=1004,rc=1005,Nn=1006,td=1007,Rr=1008,pi=1009,L_=1010,O_=1011,Bo=1012,wh=1013,Bi=1014,Pi=1015,ma=1016,Dh=1017,Uh=1018,Ho=1020,P_=35902,I_=35899,z_=1021,F_=1022,Ai=1023,ga=1026,Cr=1027,B_=1028,Nh=1029,Ds=1030,Lh=1031,Oh=1033,Dc=33776,Uc=33777,Nc=33778,Lc=33779,kd=35840,Wd=35841,qd=35842,Yd=35843,jd=36196,Zd=37492,Kd=37496,Qd=37488,Jd=37489,$d=37490,th=37491,eh=37808,nh=37809,ih=37810,ah=37811,rh=37812,sh=37813,oh=37814,lh=37815,ch=37816,uh=37817,fh=37818,dh=37819,hh=37820,ph=37821,mh=36492,gh=36494,_h=36495,vh=36283,xh=36284,Sh=36285,Mh=36286,kS=3200,WS=0,qS=1,Qa="",di="srgb",Us="srgb-linear",Ic="linear",ze="srgb",ds=7680,w0=519,YS=512,jS=513,ZS=514,Ph=515,KS=516,QS=517,Ih=518,JS=519,D0=35044,U0="300 es",Ii=2e3,zc=2001;function H_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Fc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function $S(){const o=Fc("canvas");return o.style.display="block",o}const N0={};function L0(...o){const e="THREE."+o.shift();console.log(e,...o)}function re(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Ae(...o){const e="THREE."+o.shift();console.error(e,...o)}function Go(...o){const e=o.join(" ");e in N0||(N0[e]=!0,re(...o))}function tM(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Ls{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=Math.PI/180,yh=180/Math.PI;function Xo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Se(o,e,i){return Math.max(e,Math.min(i,o))}function eM(o,e){return(o%e+e)%e}function nd(o,e,i){return(1-i)*o+i*e}function Do(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,i=0){Ve.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ko{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],v=r[l+2],_=r[l+3],S=u[d+0],E=u[d+1],A=u[d+2],C=u[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_;return}if(h>=1){e[i+0]=S,e[i+1]=E,e[i+2]=A,e[i+3]=C;return}if(_!==C||m!==S||p!==E||v!==A){let M=m*S+p*E+v*A+_*C;M<0&&(S=-S,E=-E,A=-A,C=-C,M=-M);let x=1-h;if(M<.9995){const I=Math.acos(M),O=Math.sin(I);x=Math.sin(x*I)/O,h=Math.sin(h*I)/O,m=m*x+S*h,p=p*x+E*h,v=v*x+A*h,_=_*x+C*h}else{m=m*x+S*h,p=p*x+E*h,v=v*x+A*h,_=_*x+C*h;const I=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=I,p*=I,v*=I,_*=I}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],_=u[d],S=u[d+1],E=u[d+2],A=u[d+3];return e[i]=h*A+v*_+m*E-p*S,e[i+1]=m*A+v*S+p*_-h*E,e[i+2]=p*A+v*E+h*S-m*_,e[i+3]=v*A-h*_-m*S-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),_=h(u/2),S=m(r/2),E=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=S*v*_+p*E*A,this._y=p*E*_-S*v*A,this._z=p*v*A+S*E*_,this._w=p*v*_-S*E*A;break;case"YXZ":this._x=S*v*_+p*E*A,this._y=p*E*_-S*v*A,this._z=p*v*A-S*E*_,this._w=p*v*_+S*E*A;break;case"ZXY":this._x=S*v*_-p*E*A,this._y=p*E*_+S*v*A,this._z=p*v*A+S*E*_,this._w=p*v*_-S*E*A;break;case"ZYX":this._x=S*v*_-p*E*A,this._y=p*E*_+S*v*A,this._z=p*v*A-S*E*_,this._w=p*v*_+S*E*A;break;case"YZX":this._x=S*v*_+p*E*A,this._y=p*E*_+S*v*A,this._z=p*v*A-S*E*_,this._w=p*v*_-S*E*A;break;case"XZY":this._x=S*v*_-p*E*A,this._y=p*E*_-S*v*A,this._z=p*v*A+S*E*_,this._w=p*v*_+S*E*A;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],_=i[10],S=r+h+_;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(v-m)*E,this._y=(u-p)*E,this._z=(d-l)*E}else if(r>h&&r>_){const E=2*Math.sqrt(1+r-h-_);this._w=(v-m)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(u+p)/E}else if(h>_){const E=2*Math.sqrt(1+h-r-_);this._w=(u-p)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+_-r-h);this._w=(d-l)/E,this._x=(u+p)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Se(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+d*h+l*p-u*m,this._y=l*v+d*m+u*h-r*p,this._z=u*v+d*p+r*m-l*h,this._w=d*v-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,u=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(O0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(O0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),v=2*(h*i-u*l),_=2*(u*r-d*i);return this.x=i+m*p+d*_-h*v,this.y=r+m*v+h*p-u*_,this.z=l+m*_+u*v-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return id.copy(this).projectOnVector(e),this.sub(id)}reflect(e){return this.sub(id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const id=new rt,O0=new ko;class ue{constructor(e,i,r,l,u,d,h,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=u,v[5]=m,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],v=r[4],_=r[7],S=r[2],E=r[5],A=r[8],C=l[0],M=l[3],x=l[6],I=l[1],O=l[4],N=l[7],z=l[2],B=l[5],P=l[8];return u[0]=d*C+h*I+m*z,u[3]=d*M+h*O+m*B,u[6]=d*x+h*N+m*P,u[1]=p*C+v*I+_*z,u[4]=p*M+v*O+_*B,u[7]=p*x+v*N+_*P,u[2]=S*C+E*I+A*z,u[5]=S*M+E*O+A*B,u[8]=S*x+E*N+A*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*d*v-i*h*p-r*u*v+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],_=v*d-h*p,S=h*m-v*u,E=p*u-d*m,A=i*_+r*S+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=_*C,e[1]=(l*p-v*r)*C,e[2]=(h*r-l*d)*C,e[3]=S*C,e[4]=(v*i-l*m)*C,e[5]=(l*u-h*i)*C,e[6]=E*C,e[7]=(r*m-p*i)*C,e[8]=(d*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(ad.makeScale(e,i)),this}rotate(e){return this.premultiply(ad.makeRotation(-e)),this}translate(e,i){return this.premultiply(ad.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ad=new ue,P0=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),I0=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nM(){const o={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===ze&&(l.r=ha(l.r),l.g=ha(l.g),l.b=ha(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===ze&&(l.r=Rs(l.r),l.g=Rs(l.g),l.b=Rs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Qa?Ic:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Go("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Go("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Us]:{primaries:e,whitePoint:r,transfer:Ic,toXYZ:P0,fromXYZ:I0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:r,transfer:ze,toXYZ:P0,fromXYZ:I0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),o}const Ee=nM();function ha(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Rs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let hs;class iM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{hs===void 0&&(hs=Fc("canvas")),hs.width=e.width,hs.height=e.height;const l=hs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=hs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Fc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ha(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ha(i[r]/255)*255):i[r]=ha(i[r]);return{data:i,width:e.width,height:e.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aM=0;class zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Xo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(rd(l[d].image)):u.push(rd(l[d]))}else u=rd(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function rd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?iM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let rM=0;const sd=new rt;class Ln extends Ls{constructor(e=Ln.DEFAULT_IMAGE,i=Ln.DEFAULT_MAPPING,r=fa,l=fa,u=Nn,d=Rr,h=Ai,m=pi,p=Ln.DEFAULT_ANISOTROPY,v=Qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Xo(),this.name="",this.source=new zh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sd).x}get height(){return this.source.getSize(sd).y}get depth(){return this.source.getSize(sd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==N_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vd:e.x=e.x-Math.floor(e.x);break;case fa:e.x=e.x<0?0:1;break;case Xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vd:e.y=e.y-Math.floor(e.y);break;case fa:e.y=e.y<0?0:1;break;case Xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=N_;Ln.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,i=0,r=0,l=1){nn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],v=m[4],_=m[8],S=m[1],E=m[5],A=m[9],C=m[2],M=m[6],x=m[10];if(Math.abs(v-S)<.01&&Math.abs(_-C)<.01&&Math.abs(A-M)<.01){if(Math.abs(v+S)<.1&&Math.abs(_+C)<.1&&Math.abs(A+M)<.1&&Math.abs(p+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,N=(E+1)/2,z=(x+1)/2,B=(v+S)/4,P=(_+C)/4,K=(A+M)/4;return O>N&&O>z?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=B/r,u=P/r):N>z?N<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),r=B/l,u=K/l):z<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(z),r=P/u,l=K/u),this.set(r,l,u,i),this}let I=Math.sqrt((M-A)*(M-A)+(_-C)*(_-C)+(S-v)*(S-v));return Math.abs(I)<.001&&(I=1),this.x=(M-A)/I,this.y=(_-C)/I,this.z=(S-v)/I,this.w=Math.acos((p+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this.w=Se(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this.w=Se(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sM extends Ls{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new nn(0,0,e,i),this.scissorTest=!1,this.viewport=new nn(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Ln(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new zh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends sM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class G_ extends Ln{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oM extends Ln{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,yi):yi.fromBufferAttribute(u,d),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sc.copy(r.boundingBox)),sc.applyMatrix4(e.matrixWorld),this.union(sc)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),oc.subVectors(this.max,Uo),ps.subVectors(e.a,Uo),ms.subVectors(e.b,Uo),gs.subVectors(e.c,Uo),Wa.subVectors(ms,ps),qa.subVectors(gs,ms),vr.subVectors(ps,gs);let i=[0,-Wa.z,Wa.y,0,-qa.z,qa.y,0,-vr.z,vr.y,Wa.z,0,-Wa.x,qa.z,0,-qa.x,vr.z,0,-vr.x,-Wa.y,Wa.x,0,-qa.y,qa.x,0,-vr.y,vr.x,0];return!od(i,ps,ms,gs,oc)||(i=[1,0,0,0,1,0,0,0,1],!od(i,ps,ms,gs,oc))?!1:(lc.crossVectors(Wa,qa),i=[lc.x,lc.y,lc.z],od(i,ps,ms,gs,oc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ra=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],yi=new rt,sc=new Wo,ps=new rt,ms=new rt,gs=new rt,Wa=new rt,qa=new rt,vr=new rt,Uo=new rt,oc=new rt,lc=new rt,xr=new rt;function od(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){xr.fromArray(o,u);const h=l.x*Math.abs(xr.x)+l.y*Math.abs(xr.y)+l.z*Math.abs(xr.z),m=e.dot(xr),p=i.dot(xr),v=r.dot(xr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const lM=new Wo,No=new rt,ld=new rt;class Hc{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):lM.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(No,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(ld)),this.expandByPoint(No.copy(e.center).sub(ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const sa=new rt,cd=new rt,cc=new rt,Ya=new rt,ud=new rt,uc=new rt,fd=new rt;class V_{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=sa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(sa.copy(this.origin).addScaledVector(this.direction,i),sa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){cd.copy(e).add(i).multiplyScalar(.5),cc.copy(i).sub(e).normalize(),Ya.copy(this.origin).sub(cd);const u=e.distanceTo(i)*.5,d=-this.direction.dot(cc),h=Ya.dot(this.direction),m=-Ya.dot(cc),p=Ya.lengthSq(),v=Math.abs(1-d*d);let _,S,E,A;if(v>0)if(_=d*m-h,S=d*h-m,A=u*v,_>=0)if(S>=-A)if(S<=A){const C=1/v;_*=C,S*=C,E=_*(_+d*S+2*h)+S*(d*_+S+2*m)+p}else S=u,_=Math.max(0,-(d*S+h)),E=-_*_+S*(S+2*m)+p;else S=-u,_=Math.max(0,-(d*S+h)),E=-_*_+S*(S+2*m)+p;else S<=-A?(_=Math.max(0,-(-d*u+h)),S=_>0?-u:Math.min(Math.max(-u,-m),u),E=-_*_+S*(S+2*m)+p):S<=A?(_=0,S=Math.min(Math.max(-u,-m),u),E=S*(S+2*m)+p):(_=Math.max(0,-(d*u+h)),S=_>0?u:Math.min(Math.max(-u,-m),u),E=-_*_+S*(S+2*m)+p);else S=d>0?-u:u,_=Math.max(0,-(d*S+h)),E=-_*_+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(cd).addScaledVector(cc,S),E}intersectSphere(e,i){sa.subVectors(e.center,this.origin);const r=sa.dot(this.direction),l=sa.dot(sa)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),v>=0?(u=(e.min.y-S.y)*v,d=(e.max.y-S.y)*v):(u=(e.max.y-S.y)*v,d=(e.min.y-S.y)*v),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),_>=0?(h=(e.min.z-S.z)*_,m=(e.max.z-S.z)*_):(h=(e.max.z-S.z)*_,m=(e.min.z-S.z)*_),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,sa)!==null}intersectTriangle(e,i,r,l,u){ud.subVectors(i,e),uc.subVectors(r,e),fd.crossVectors(ud,uc);let d=this.direction.dot(fd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ya.subVectors(this.origin,e);const m=h*this.direction.dot(uc.crossVectors(Ya,uc));if(m<0)return null;const p=h*this.direction.dot(ud.cross(Ya));if(p<0||m+p>d)return null;const v=-h*Ya.dot(fd);return v<0?null:this.at(v/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(e,i,r,l,u,d,h,m,p,v,_,S,E,A,C,M){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,v,_,S,E,A,C,M)}set(e,i,r,l,u,d,h,m,p,v,_,S,E,A,C,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=u,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=v,x[10]=_,x[14]=S,x[3]=E,x[7]=A,x[11]=C,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/_s.setFromMatrixColumn(e,0).length(),u=1/_s.setFromMatrixColumn(e,1).length(),d=1/_s.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const S=d*v,E=d*_,A=h*v,C=h*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=E+A*p,i[5]=S-C*p,i[9]=-h*m,i[2]=C-S*p,i[6]=A+E*p,i[10]=d*m}else if(e.order==="YXZ"){const S=m*v,E=m*_,A=p*v,C=p*_;i[0]=S+C*h,i[4]=A*h-E,i[8]=d*p,i[1]=d*_,i[5]=d*v,i[9]=-h,i[2]=E*h-A,i[6]=C+S*h,i[10]=d*m}else if(e.order==="ZXY"){const S=m*v,E=m*_,A=p*v,C=p*_;i[0]=S-C*h,i[4]=-d*_,i[8]=A+E*h,i[1]=E+A*h,i[5]=d*v,i[9]=C-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const S=d*v,E=d*_,A=h*v,C=h*_;i[0]=m*v,i[4]=A*p-E,i[8]=S*p+C,i[1]=m*_,i[5]=C*p+S,i[9]=E*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,E=d*p,A=h*m,C=h*p;i[0]=m*v,i[4]=C-S*_,i[8]=A*_+E,i[1]=_,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=E*_+A,i[10]=S-C*_}else if(e.order==="XZY"){const S=d*m,E=d*p,A=h*m,C=h*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=S*_+C,i[5]=d*v,i[9]=E*_-A,i[2]=A*_-E,i[6]=h*v,i[10]=C*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cM,e,uM)}lookAt(e,i,r){const l=this.elements;return $n.subVectors(e,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),ja.crossVectors(r,$n),ja.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),ja.crossVectors(r,$n)),ja.normalize(),fc.crossVectors($n,ja),l[0]=ja.x,l[4]=fc.x,l[8]=$n.x,l[1]=ja.y,l[5]=fc.y,l[9]=$n.y,l[2]=ja.z,l[6]=fc.z,l[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],v=r[1],_=r[5],S=r[9],E=r[13],A=r[2],C=r[6],M=r[10],x=r[14],I=r[3],O=r[7],N=r[11],z=r[15],B=l[0],P=l[4],K=l[8],R=l[12],w=l[1],X=l[5],at=l[9],it=l[13],ct=l[2],ft=l[6],L=l[10],H=l[14],$=l[3],lt=l[7],_t=l[11],D=l[15];return u[0]=d*B+h*w+m*ct+p*$,u[4]=d*P+h*X+m*ft+p*lt,u[8]=d*K+h*at+m*L+p*_t,u[12]=d*R+h*it+m*H+p*D,u[1]=v*B+_*w+S*ct+E*$,u[5]=v*P+_*X+S*ft+E*lt,u[9]=v*K+_*at+S*L+E*_t,u[13]=v*R+_*it+S*H+E*D,u[2]=A*B+C*w+M*ct+x*$,u[6]=A*P+C*X+M*ft+x*lt,u[10]=A*K+C*at+M*L+x*_t,u[14]=A*R+C*it+M*H+x*D,u[3]=I*B+O*w+N*ct+z*$,u[7]=I*P+O*X+N*ft+z*lt,u[11]=I*K+O*at+N*L+z*_t,u[15]=I*R+O*it+N*H+z*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],v=e[2],_=e[6],S=e[10],E=e[14],A=e[3],C=e[7],M=e[11],x=e[15],I=m*E-p*S,O=h*E-p*_,N=h*S-m*_,z=d*E-p*v,B=d*S-m*v,P=d*_-h*v;return i*(C*I-M*O+x*N)-r*(A*I-M*z+x*B)+l*(A*O-C*z+x*P)-u*(A*N-C*B+M*P)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],_=e[9],S=e[10],E=e[11],A=e[12],C=e[13],M=e[14],x=e[15],I=_*M*p-C*S*p+C*m*E-h*M*E-_*m*x+h*S*x,O=A*S*p-v*M*p-A*m*E+d*M*E+v*m*x-d*S*x,N=v*C*p-A*_*p+A*h*E-d*C*E-v*h*x+d*_*x,z=A*_*m-v*C*m-A*h*S+d*C*S+v*h*M-d*_*M,B=i*I+r*O+l*N+u*z;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/B;return e[0]=I*P,e[1]=(C*S*u-_*M*u-C*l*E+r*M*E+_*l*x-r*S*x)*P,e[2]=(h*M*u-C*m*u+C*l*p-r*M*p-h*l*x+r*m*x)*P,e[3]=(_*m*u-h*S*u-_*l*p+r*S*p+h*l*E-r*m*E)*P,e[4]=O*P,e[5]=(v*M*u-A*S*u+A*l*E-i*M*E-v*l*x+i*S*x)*P,e[6]=(A*m*u-d*M*u-A*l*p+i*M*p+d*l*x-i*m*x)*P,e[7]=(d*S*u-v*m*u+v*l*p-i*S*p-d*l*E+i*m*E)*P,e[8]=N*P,e[9]=(A*_*u-v*C*u-A*r*E+i*C*E+v*r*x-i*_*x)*P,e[10]=(d*C*u-A*h*u+A*r*p-i*C*p-d*r*x+i*h*x)*P,e[11]=(v*h*u-d*_*u-v*r*p+i*_*p+d*r*E-i*h*E)*P,e[12]=z*P,e[13]=(v*C*l-A*_*l+A*r*S-i*C*S-v*r*M+i*_*M)*P,e[14]=(A*h*l-d*C*l-A*r*m+i*C*m+d*r*M-i*h*M)*P,e[15]=(d*_*l-v*h*l+v*r*m-i*_*m-d*r*S+i*h*S)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,v=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*d,0,p*m-l*h,v*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,v=d+d,_=h+h,S=u*p,E=u*v,A=u*_,C=d*v,M=d*_,x=h*_,I=m*p,O=m*v,N=m*_,z=r.x,B=r.y,P=r.z;return l[0]=(1-(C+x))*z,l[1]=(E+N)*z,l[2]=(A-O)*z,l[3]=0,l[4]=(E-N)*B,l[5]=(1-(S+x))*B,l[6]=(M+I)*B,l[7]=0,l[8]=(A+O)*P,l[9]=(M-I)*P,l[10]=(1-(S+C))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let u=_s.set(l[0],l[1],l[2]).length();const d=_s.set(l[4],l[5],l[6]).length(),h=_s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Ei.copy(this);const p=1/u,v=1/d,_=1/h;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=v,Ei.elements[5]*=v,Ei.elements[6]*=v,Ei.elements[8]*=_,Ei.elements[9]*=_,Ei.elements[10]*=_,i.setFromRotationMatrix(Ei),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=Ii,m=!1){const p=this.elements,v=2*u/(i-e),_=2*u/(r-l),S=(i+e)/(i-e),E=(r+l)/(r-l);let A,C;if(m)A=u/(d-u),C=d*u/(d-u);else if(h===Ii)A=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===zc)A=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=Ii,m=!1){const p=this.elements,v=2/(i-e),_=2/(r-l),S=-(i+e)/(i-e),E=-(r+l)/(r-l);let A,C;if(m)A=1/(d-u),C=d/(d-u);else if(h===Ii)A=-2/(d-u),C=-(d+u)/(d-u);else if(h===zc)A=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const _s=new rt,Ei=new an,cM=new rt(0,0,0),uM=new rt(1,1,1),ja=new rt,fc=new rt,$n=new rt,z0=new an,F0=new ko;class _a{constructor(e=0,i=0,r=0,l=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],_=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,E),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return z0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(z0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return F0.setFromEuler(this),this.setFromQuaternion(F0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class X_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fM=0;const B0=new rt,vs=new ko,oa=new an,dc=new rt,Lo=new rt,dM=new rt,hM=new ko,H0=new rt(1,0,0),G0=new rt(0,1,0),V0=new rt(0,0,1),X0={type:"added"},pM={type:"removed"},xs={type:"childadded",child:null},dd={type:"childremoved",child:null};class Wn extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new rt,i=new _a,r=new ko,l=new rt(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new ue}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(H0,e)}rotateY(e){return this.rotateOnAxis(G0,e)}rotateZ(e){return this.rotateOnAxis(V0,e)}translateOnAxis(e,i){return B0.copy(e).applyQuaternion(this.quaternion),this.position.add(B0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(H0,e)}translateY(e){return this.translateOnAxis(G0,e)}translateZ(e){return this.translateOnAxis(V0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?dc.copy(e):dc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oa.lookAt(Lo,dc,this.up):oa.lookAt(dc,Lo,this.up),this.quaternion.setFromRotationMatrix(oa),l&&(oa.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(oa),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ae("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(X0),xs.child=e,this.dispatchEvent(xs),xs.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(pM),dd.child=e,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oa.multiply(e.parent.matrixWorld)),e.applyMatrix4(oa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(X0),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,dM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,hM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];u(e.shapes,_)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),v=d(e.images),_=d(e.shapes),S=d(e.skeletons),E=d(e.animations),A=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),E.length>0&&(r.animations=E),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Wn.DEFAULT_UP=new rt(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new rt,la=new rt,hd=new rt,ca=new rt,Ss=new rt,Ms=new rt,k0=new rt,pd=new rt,md=new rt,gd=new rt,_d=new nn,vd=new nn,xd=new nn;class Ti{constructor(e=new rt,i=new rt,r=new rt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),bi.subVectors(e,i),l.cross(bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){bi.subVectors(l,i),la.subVectors(r,i),hd.subVectors(e,i);const d=bi.dot(bi),h=bi.dot(la),m=bi.dot(hd),p=la.dot(la),v=la.dot(hd),_=d*p-h*h;if(_===0)return u.set(0,0,0),null;const S=1/_,E=(p*m-h*v)*S,A=(d*v-h*m)*S;return u.set(1-E-A,A,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ca)===null?!1:ca.x>=0&&ca.y>=0&&ca.x+ca.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ca.x),m.addScaledVector(d,ca.y),m.addScaledVector(h,ca.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return _d.setScalar(0),vd.setScalar(0),xd.setScalar(0),_d.fromBufferAttribute(e,i),vd.fromBufferAttribute(e,r),xd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(_d,u.x),d.addScaledVector(vd,u.y),d.addScaledVector(xd,u.z),d}static isFrontFacing(e,i,r,l){return bi.subVectors(r,i),la.subVectors(e,i),bi.cross(la).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),la.subVectors(this.a,this.b),bi.cross(la).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ti.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ti.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;Ss.subVectors(l,r),Ms.subVectors(u,r),pd.subVectors(e,r);const m=Ss.dot(pd),p=Ms.dot(pd);if(m<=0&&p<=0)return i.copy(r);md.subVectors(e,l);const v=Ss.dot(md),_=Ms.dot(md);if(v>=0&&_<=v)return i.copy(l);const S=m*_-v*p;if(S<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(Ss,d);gd.subVectors(e,u);const E=Ss.dot(gd),A=Ms.dot(gd);if(A>=0&&E<=A)return i.copy(u);const C=E*p-m*A;if(C<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(Ms,h);const M=v*A-E*_;if(M<=0&&_-v>=0&&E-A>=0)return k0.subVectors(u,l),h=(_-v)/(_-v+(E-A)),i.copy(l).addScaledVector(k0,h);const x=1/(M+C+S);return d=C*x,h=S*x,i.copy(r).addScaledVector(Ss,d).addScaledVector(Ms,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const k_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},hc={h:0,s:0,l:0};function Sd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Fe{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ee.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ee.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ee.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ee.workingColorSpace){if(e=eM(e,1),i=Se(i,0,1),r=Se(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=Sd(d,u,e+1/3),this.g=Sd(d,u,e),this.b=Sd(d,u,e-1/3)}return Ee.colorSpaceToWorking(this,l),this}setStyle(e,i=di){function r(u){u!==void 0&&parseFloat(u)<1&&re("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:re("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=di){const r=k_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Ee.workingToColorSpace(Un.copy(this),e),Math.round(Se(Un.r*255,0,255))*65536+Math.round(Se(Un.g*255,0,255))*256+Math.round(Se(Un.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ee.workingColorSpace){Ee.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=v<=.5?_/(d+h):_/(2-d-h),d){case r:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-r)/_+2;break;case u:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Ee.workingColorSpace){return Ee.workingToColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=di){Ee.workingToColorSpace(Un.copy(this),e);const i=Un.r,r=Un.g,l=Un.b;return e!==di?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Za),this.setHSL(Za.h+e,Za.s+i,Za.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Za),e.getHSL(hc);const r=nd(Za.h,hc.h,i),l=nd(Za.s,hc.s,i),u=nd(Za.l,hc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Fe;Fe.NAMES=k_;let mM=0;class qo extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=As,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ud,this.blendDst=Nd,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(r.blending=this.blending),this.side!==$a&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ud&&(r.blendSrc=this.blendSrc),this.blendDst!==Nd&&(r.blendDst=this.blendDst),this.blendEquation!==Tr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==w0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class W_ extends qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=b_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new rt,pc=new Ve;let gM=0;class Ri{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=D0,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)pc.fromBufferAttribute(this,i),pc.applyMatrix3(e),this.setXY(i,pc.x,pc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Do(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Do(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Do(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Do(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Do(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==D0&&(e.usage=this.usage),e}}class q_ extends Ri{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Y_ extends Ri{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class pa extends Ri{constructor(e,i,r){super(new Float32Array(e),i,r)}}let _M=0;const fi=new an,Md=new Wn,ys=new rt,ti=new Wo,Oo=new Wo,gn=new rt;class mi extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H_(e)?Y_:q_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ue().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,i,r){return fi.makeTranslation(e,i,r),this.applyMatrix4(fi),this}scale(e,i,r){return fi.makeScale(e,i,r),this.applyMatrix4(fi),this}lookAt(e){return Md.lookAt(e),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new pa(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Oo.setFromBufferAttribute(h),this.morphTargetsRelative?(gn.addVectors(ti.min,Oo.min),ti.expandByPoint(gn),gn.addVectors(ti.max,Oo.max),ti.expandByPoint(gn)):(ti.expandByPoint(Oo.min),ti.expandByPoint(Oo.max))}ti.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)gn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)gn.fromBufferAttribute(h,p),m&&(ys.fromBufferAttribute(e,p),gn.add(ys)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let K=0;K<r.count;K++)h[K]=new rt,m[K]=new rt;const p=new rt,v=new rt,_=new rt,S=new Ve,E=new Ve,A=new Ve,C=new rt,M=new rt;function x(K,R,w){p.fromBufferAttribute(r,K),v.fromBufferAttribute(r,R),_.fromBufferAttribute(r,w),S.fromBufferAttribute(u,K),E.fromBufferAttribute(u,R),A.fromBufferAttribute(u,w),v.sub(p),_.sub(p),E.sub(S),A.sub(S);const X=1/(E.x*A.y-A.x*E.y);isFinite(X)&&(C.copy(v).multiplyScalar(A.y).addScaledVector(_,-E.y).multiplyScalar(X),M.copy(_).multiplyScalar(E.x).addScaledVector(v,-A.x).multiplyScalar(X),h[K].add(C),h[R].add(C),h[w].add(C),m[K].add(M),m[R].add(M),m[w].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let K=0,R=I.length;K<R;++K){const w=I[K],X=w.start,at=w.count;for(let it=X,ct=X+at;it<ct;it+=3)x(e.getX(it+0),e.getX(it+1),e.getX(it+2))}const O=new rt,N=new rt,z=new rt,B=new rt;function P(K){z.fromBufferAttribute(l,K),B.copy(z);const R=h[K];O.copy(R),O.sub(z.multiplyScalar(z.dot(R))).normalize(),N.crossVectors(B,R);const X=N.dot(m[K])<0?-1:1;d.setXYZW(K,O.x,O.y,O.z,X)}for(let K=0,R=I.length;K<R;++K){const w=I[K],X=w.start,at=w.count;for(let it=X,ct=X+at;it<ct;it+=3)P(e.getX(it+0)),P(e.getX(it+1)),P(e.getX(it+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,E=r.count;S<E;S++)r.setXYZ(S,0,0,0);const l=new rt,u=new rt,d=new rt,h=new rt,m=new rt,p=new rt,v=new rt,_=new rt;if(e)for(let S=0,E=e.count;S<E;S+=3){const A=e.getX(S+0),C=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,M),v.subVectors(d,u),_.subVectors(l,u),v.cross(_),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),h.add(v),m.add(v),p.add(v),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),v.subVectors(d,u),_.subVectors(l,u),v.cross(_),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)gn.fromBufferAttribute(e,i),gn.normalize(),e.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,_=h.normalized,S=new p.constructor(m.length*v);let E=0,A=0;for(let C=0,M=m.length;C<M;C++){h.isInterleavedBufferAttribute?E=m[C]*h.data.stride+h.offset:E=m[C]*v;for(let x=0;x<v;x++)S[A++]=p[E++]}return new Ri(S,v,_)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new mi,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let v=0,_=p.length;v<_;v++){const S=p[v],E=e(S,r);m.push(E)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,S=p.length;_<S;_++){const E=p[_];v.push(E.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=e.morphAttributes;for(const p in u){const v=[],_=u[p];for(let S=0,E=_.length;S<E;S++)v.push(_[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,v=d.length;p<v;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const W0=new an,Sr=new V_,mc=new Hc,q0=new rt,gc=new rt,_c=new rt,vc=new rt,yd=new rt,xc=new rt,Y0=new rt,Sc=new rt;class va extends Wn{constructor(e=new mi,i=new W_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){xc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=h[m],_=u[m];v!==0&&(yd.fromBufferAttribute(_,e),d?xc.addScaledVector(yd,v):xc.addScaledVector(yd.sub(i),v))}i.add(xc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),mc.copy(r.boundingSphere),mc.applyMatrix4(u),Sr.copy(e.ray).recast(e.near),!(mc.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(mc,q0)===null||Sr.origin.distanceToSquared(q0)>(e.far-e.near)**2))&&(W0.copy(u).invert(),Sr.copy(e.ray).applyMatrix4(W0),!(r.boundingBox!==null&&Sr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Sr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,_=u.attributes.normal,S=u.groups,E=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const M=S[A],x=d[M.materialIndex],I=Math.max(M.start,E.start),O=Math.min(h.count,Math.min(M.start+M.count,E.start+E.count));for(let N=I,z=O;N<z;N+=3){const B=h.getX(N),P=h.getX(N+1),K=h.getX(N+2);l=Mc(this,x,e,r,p,v,_,B,P,K),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),C=Math.min(h.count,E.start+E.count);for(let M=A,x=C;M<x;M+=3){const I=h.getX(M),O=h.getX(M+1),N=h.getX(M+2);l=Mc(this,d,e,r,p,v,_,I,O,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const M=S[A],x=d[M.materialIndex],I=Math.max(M.start,E.start),O=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let N=I,z=O;N<z;N+=3){const B=N,P=N+1,K=N+2;l=Mc(this,x,e,r,p,v,_,B,P,K),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let M=A,x=C;M<x;M+=3){const I=M,O=M+1,N=M+2;l=Mc(this,d,e,r,p,v,_,I,O,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function vM(o,e,i,r,l,u,d,h){let m;if(e.side===kn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===$a,h),m===null)return null;Sc.copy(h),Sc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Sc);return p<i.near||p>i.far?null:{distance:p,point:Sc.clone(),object:o}}function Mc(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,gc),o.getVertexPosition(m,_c),o.getVertexPosition(p,vc);const v=vM(o,e,i,r,gc,_c,vc,Y0);if(v){const _=new rt;Ti.getBarycoord(Y0,gc,_c,vc,_),l&&(v.uv=Ti.getInterpolatedAttribute(l,h,m,p,_,new Ve)),u&&(v.uv1=Ti.getInterpolatedAttribute(u,h,m,p,_,new Ve)),d&&(v.normal=Ti.getInterpolatedAttribute(d,h,m,p,_,new rt),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new rt,materialIndex:0};Ti.getNormal(gc,_c,vc,S.normal),v.face=S,v.barycoord=_}return v}class Yo extends mi{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],v=[],_=[];let S=0,E=0;A("z","y","x",-1,-1,r,i,e,d,u,0),A("z","y","x",1,-1,r,i,-e,d,u,1),A("x","z","y",1,1,e,r,i,l,d,2),A("x","z","y",1,-1,e,r,-i,l,d,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new pa(p,3)),this.setAttribute("normal",new pa(v,3)),this.setAttribute("uv",new pa(_,2));function A(C,M,x,I,O,N,z,B,P,K,R){const w=N/P,X=z/K,at=N/2,it=z/2,ct=B/2,ft=P+1,L=K+1;let H=0,$=0;const lt=new rt;for(let _t=0;_t<L;_t++){const D=_t*X-it;for(let j=0;j<ft;j++){const pt=j*w-at;lt[C]=pt*I,lt[M]=D*O,lt[x]=ct,p.push(lt.x,lt.y,lt.z),lt[C]=0,lt[M]=0,lt[x]=B>0?1:-1,v.push(lt.x,lt.y,lt.z),_.push(j/P),_.push(1-_t/K),H+=1}}for(let _t=0;_t<K;_t++)for(let D=0;D<P;D++){const j=S+D+ft*_t,pt=S+D+ft*(_t+1),At=S+(D+1)+ft*(_t+1),zt=S+(D+1)+ft*_t;m.push(j,pt,zt),m.push(pt,At,zt),$+=6}h.addGroup(E,$,R),E+=$,S+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Pn(o){const e={};for(let i=0;i<o.length;i++){const r=Ns(o[i]);for(const l in r)e[l]=r[l]}return e}function xM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function j_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ee.workingColorSpace}const SM={clone:Ns,merge:Pn};var MM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MM,this.fragmentShader=yM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=xM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Z_ extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new rt,j0=new Ve,Z0=new Ve;class hi extends Z_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=yh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ed*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yh*2*Math.atan(Math.tan(ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z)}getViewSize(e,i){return this.getViewBounds(e,j0,Z0),i.subVectors(Z0,j0)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ed*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Es=-90,bs=1;class EM extends Wn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(Es,bs,e,i);l.layers=this.layers,this.add(l);const u=new hi(Es,bs,e,i);u.layers=this.layers,this.add(u);const d=new hi(Es,bs,e,i);d.layers=this.layers,this.add(d);const h=new hi(Es,bs,e,i);h.layers=this.layers,this.add(h);const m=new hi(Es,bs,e,i);m.layers=this.layers,this.add(m);const p=new hi(Es,bs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===zc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,v]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(_,S,E),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class K_ extends Ln{constructor(e=[],i=wr,r,l,u,d,h,m,p,v){super(e,i,r,l,u,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Q_ extends Fi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new K_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Yo(5,5,5),u=new Hi({name:"CubemapFromEquirect",uniforms:Ns(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:da});u.uniforms.tEquirect.value=i;const d=new va(l,u),h=i.minFilter;return i.minFilter===Rr&&(i.minFilter=Nn),new EM(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class yc extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bM={type:"move"};class Ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),x=this._getHandJoint(p,C);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=v.position.distanceTo(_.position),E=.02,A=.005;p.inputState.pinching&&S>E+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=E-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(bM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new yc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class TM extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class AM extends Ln{constructor(e=null,i=1,r=1,l,u,d,h,m,p=Rn,v=Rn,_,S){super(null,d,h,m,p,v,l,u,_,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bd=new rt,RM=new rt,CM=new ue;class br{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=bd.subVectors(r,i).cross(RM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(bd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||CM.getNormalMatrix(e),l=this.coplanarPoint(bd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new Hc,wM=new Ve(.5,.5),Ec=new rt;class J_{constructor(e=new br,i=new br,r=new br,l=new br,u=new br,d=new br){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ii,r=!1){const l=this.planes,u=e.elements,d=u[0],h=u[1],m=u[2],p=u[3],v=u[4],_=u[5],S=u[6],E=u[7],A=u[8],C=u[9],M=u[10],x=u[11],I=u[12],O=u[13],N=u[14],z=u[15];if(l[0].setComponents(p-d,E-v,x-A,z-I).normalize(),l[1].setComponents(p+d,E+v,x+A,z+I).normalize(),l[2].setComponents(p+h,E+_,x+C,z+O).normalize(),l[3].setComponents(p-h,E-_,x-C,z-O).normalize(),r)l[4].setComponents(m,S,M,N).normalize(),l[5].setComponents(p-m,E-S,x-M,z-N).normalize();else if(l[4].setComponents(p-m,E-S,x-M,z-N).normalize(),i===Ii)l[5].setComponents(p+m,E+S,x+M,z+N).normalize();else if(i===zc)l[5].setComponents(m,S,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){Mr.center.set(0,0,0);const i=wM.distanceTo(e.center);return Mr.radius=.7071067811865476+i,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ec.x=l.normal.x>0?e.max.x:e.min.x,Ec.y=l.normal.y>0?e.max.y:e.min.y,Ec.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Eh extends qo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const K0=new an,bh=new V_,bc=new Hc,Tc=new rt;class Q0 extends Wn{constructor(e=new mi,i=new Eh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(l),bc.radius+=u,e.ray.intersectsSphere(bc)===!1)return;K0.copy(l).invert(),bh.copy(e.ray).applyMatrix4(K0);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,_=r.attributes.position;if(p!==null){const S=Math.max(0,d.start),E=Math.min(p.count,d.start+d.count);for(let A=S,C=E;A<C;A++){const M=p.getX(A);Tc.fromBufferAttribute(_,M),J0(Tc,M,m,l,e,i,this)}}else{const S=Math.max(0,d.start),E=Math.min(_.count,d.start+d.count);for(let A=S,C=E;A<C;A++)Tc.fromBufferAttribute(_,A),J0(Tc,A,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function J0(o,e,i,r,l,u,d){const h=bh.distanceSqToPoint(o);if(h<i){const m=new rt;bh.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class DM extends Ln{constructor(e,i,r,l,u,d,h,m,p){super(e,i,r,l,u,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vo extends Ln{constructor(e,i,r=Bi,l,u,d,h=Rn,m=Rn,p,v=ga,_=1){if(v!==ga&&v!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:_};super(S,l,u,d,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class UM extends Vo{constructor(e,i=Bi,r=wr,l,u,d=Rn,h=Rn,m,p=ga){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,i,r,l,u,d,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $_ extends Ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gc extends mi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,_=e/h,S=i/m,E=[],A=[],C=[],M=[];for(let x=0;x<v;x++){const I=x*S-d;for(let O=0;O<p;O++){const N=O*_-u;A.push(N,-I,0),C.push(0,0,1),M.push(O/h),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let I=0;I<h;I++){const O=I+p*x,N=I+p*(x+1),z=I+1+p*(x+1),B=I+1+p*x;E.push(O,N,B),E.push(N,z,B)}this.setIndex(E),this.setAttribute("position",new pa(A,3)),this.setAttribute("normal",new pa(C,3)),this.setAttribute("uv",new pa(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gc(e.width,e.height,e.widthSegments,e.heightSegments)}}class NM extends Hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class LM extends qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OM extends qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class tv extends Z_{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class PM extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function $0(o,e,i,r){const l=IM(r);switch(i){case z_:return o*e;case B_:return o*e/l.components*l.byteLength;case Nh:return o*e/l.components*l.byteLength;case Ds:return o*e*2/l.components*l.byteLength;case Lh:return o*e*2/l.components*l.byteLength;case F_:return o*e*3/l.components*l.byteLength;case Ai:return o*e*4/l.components*l.byteLength;case Oh:return o*e*4/l.components*l.byteLength;case Dc:case Uc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Nc:case Lc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Wd:case Yd:return Math.max(o,16)*Math.max(e,8)/4;case kd:case qd:return Math.max(o,8)*Math.max(e,8)/2;case jd:case Zd:case Qd:case Jd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Kd:case $d:case th:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ih:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case ah:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case rh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case sh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case oh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case lh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ch:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case uh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case fh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case dh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case hh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case ph:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case mh:case gh:case _h:return Math.ceil(o/4)*Math.ceil(e/4)*16;case vh:case xh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Sh:case Mh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function IM(o){switch(o){case pi:case L_:return{byteLength:1,components:1};case Bo:case O_:case ma:return{byteLength:2,components:1};case Dh:case Uh:return{byteLength:2,components:4};case Bi:case wh:case Pi:return{byteLength:4,components:1};case P_:case I_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ch}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ch);function ev(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function zM(o){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),h.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const v=m.array,_=m.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,v);else{_.sort((E,A)=>E.start-A.start);let S=0;for(let E=1;E<_.length;E++){const A=_[S],C=_[E];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++S,_[S]=C)}_.length=S+1;for(let E=0,A=_.length;E<A;E++){const C=_[E];o.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var FM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,HM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,WM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,YM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,QM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,JM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ay=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ry=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,oy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ly=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,py="gl_FragColor = linearToOutputTexel( gl_FragColor );",my=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_y=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,My=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ey=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,by=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ty=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ay=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ry=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Uy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ny=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ly=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Oy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Py=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Iy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,By=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ky=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ky=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$y=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_E=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,SE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ME=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,EE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,RE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,WE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ab=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ob=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ub=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,db=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:FM,alphahash_pars_fragment:BM,alphamap_fragment:HM,alphamap_pars_fragment:GM,alphatest_fragment:VM,alphatest_pars_fragment:XM,aomap_fragment:kM,aomap_pars_fragment:WM,batching_pars_vertex:qM,batching_vertex:YM,begin_vertex:jM,beginnormal_vertex:ZM,bsdfs:KM,iridescence_fragment:QM,bumpmap_pars_fragment:JM,clipping_planes_fragment:$M,clipping_planes_pars_fragment:ty,clipping_planes_pars_vertex:ey,clipping_planes_vertex:ny,color_fragment:iy,color_pars_fragment:ay,color_pars_vertex:ry,color_vertex:sy,common:oy,cube_uv_reflection_fragment:ly,defaultnormal_vertex:cy,displacementmap_pars_vertex:uy,displacementmap_vertex:fy,emissivemap_fragment:dy,emissivemap_pars_fragment:hy,colorspace_fragment:py,colorspace_pars_fragment:my,envmap_fragment:gy,envmap_common_pars_fragment:_y,envmap_pars_fragment:vy,envmap_pars_vertex:xy,envmap_physical_pars_fragment:Dy,envmap_vertex:Sy,fog_vertex:My,fog_pars_vertex:yy,fog_fragment:Ey,fog_pars_fragment:by,gradientmap_pars_fragment:Ty,lightmap_pars_fragment:Ay,lights_lambert_fragment:Ry,lights_lambert_pars_fragment:Cy,lights_pars_begin:wy,lights_toon_fragment:Uy,lights_toon_pars_fragment:Ny,lights_phong_fragment:Ly,lights_phong_pars_fragment:Oy,lights_physical_fragment:Py,lights_physical_pars_fragment:Iy,lights_fragment_begin:zy,lights_fragment_maps:Fy,lights_fragment_end:By,logdepthbuf_fragment:Hy,logdepthbuf_pars_fragment:Gy,logdepthbuf_pars_vertex:Vy,logdepthbuf_vertex:Xy,map_fragment:ky,map_pars_fragment:Wy,map_particle_fragment:qy,map_particle_pars_fragment:Yy,metalnessmap_fragment:jy,metalnessmap_pars_fragment:Zy,morphinstance_vertex:Ky,morphcolor_vertex:Qy,morphnormal_vertex:Jy,morphtarget_pars_vertex:$y,morphtarget_vertex:tE,normal_fragment_begin:eE,normal_fragment_maps:nE,normal_pars_fragment:iE,normal_pars_vertex:aE,normal_vertex:rE,normalmap_pars_fragment:sE,clearcoat_normal_fragment_begin:oE,clearcoat_normal_fragment_maps:lE,clearcoat_pars_fragment:cE,iridescence_pars_fragment:uE,opaque_fragment:fE,packing:dE,premultiplied_alpha_fragment:hE,project_vertex:pE,dithering_fragment:mE,dithering_pars_fragment:gE,roughnessmap_fragment:_E,roughnessmap_pars_fragment:vE,shadowmap_pars_fragment:xE,shadowmap_pars_vertex:SE,shadowmap_vertex:ME,shadowmask_pars_fragment:yE,skinbase_vertex:EE,skinning_pars_vertex:bE,skinning_vertex:TE,skinnormal_vertex:AE,specularmap_fragment:RE,specularmap_pars_fragment:CE,tonemapping_fragment:wE,tonemapping_pars_fragment:DE,transmission_fragment:UE,transmission_pars_fragment:NE,uv_pars_fragment:LE,uv_pars_vertex:OE,uv_vertex:PE,worldpos_vertex:IE,background_vert:zE,background_frag:FE,backgroundCube_vert:BE,backgroundCube_frag:HE,cube_vert:GE,cube_frag:VE,depth_vert:XE,depth_frag:kE,distance_vert:WE,distance_frag:qE,equirect_vert:YE,equirect_frag:jE,linedashed_vert:ZE,linedashed_frag:KE,meshbasic_vert:QE,meshbasic_frag:JE,meshlambert_vert:$E,meshlambert_frag:tb,meshmatcap_vert:eb,meshmatcap_frag:nb,meshnormal_vert:ib,meshnormal_frag:ab,meshphong_vert:rb,meshphong_frag:sb,meshphysical_vert:ob,meshphysical_frag:lb,meshtoon_vert:cb,meshtoon_frag:ub,points_vert:fb,points_frag:db,shadow_vert:hb,shadow_frag:pb,sprite_vert:mb,sprite_frag:gb},Ot={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Oi={basic:{uniforms:Pn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Pn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Fe(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Pn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Pn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Pn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Fe(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Pn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Pn([Ot.points,Ot.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Pn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Pn([Ot.common,Ot.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Pn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Pn([Ot.sprite,Ot.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:Pn([Ot.common,Ot.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:Pn([Ot.lights,Ot.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Oi.physical={uniforms:Pn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Ac={r:0,b:0,g:0},yr=new _a,_b=new an;function vb(o,e,i,r,l,u,d){const h=new Fe(0);let m=u===!0?0:1,p,v,_=null,S=0,E=null;function A(O){let N=O.isScene===!0?O.background:null;return N&&N.isTexture&&(N=(O.backgroundBlurriness>0?i:e).get(N)),N}function C(O){let N=!1;const z=A(O);z===null?x(h,m):z&&z.isColor&&(x(z,1),N=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,d):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(O,N){const z=A(N);z&&(z.isCubeTexture||z.mapping===Bc)?(v===void 0&&(v=new va(new Yo(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:Ns(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,P,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),yr.copy(N.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),v.material.uniforms.envMap.value=z,v.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(_b.makeRotationFromEuler(yr)),v.material.toneMapped=Ee.getTransfer(z.colorSpace)!==ze,(_!==z||S!==z.version||E!==o.toneMapping)&&(v.material.needsUpdate=!0,_=z,S=z.version,E=o.toneMapping),v.layers.enableAll(),O.unshift(v,v.geometry,v.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new va(new Gc(2,2),new Hi({name:"BackgroundMaterial",uniforms:Ns(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Ee.getTransfer(z.colorSpace)!==ze,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(_!==z||S!==z.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,_=z,S=z.version,E=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function x(O,N){O.getRGB(Ac,j_(o)),r.buffers.color.setClear(Ac.r,Ac.g,Ac.b,N,d)}function I(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,N=1){h.set(O),m=N,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,x(h,m)},render:C,addToRenderList:M,dispose:I}}function xb(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(w,X,at,it,ct){let ft=!1;const L=_(it,at,X);u!==L&&(u=L,p(u.object)),ft=E(w,it,at,ct),ft&&A(w,it,at,ct),ct!==null&&e.update(ct,o.ELEMENT_ARRAY_BUFFER),(ft||d)&&(d=!1,N(w,X,at,it),ct!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ct).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function v(w){return o.deleteVertexArray(w)}function _(w,X,at){const it=at.wireframe===!0;let ct=r[w.id];ct===void 0&&(ct={},r[w.id]=ct);let ft=ct[X.id];ft===void 0&&(ft={},ct[X.id]=ft);let L=ft[it];return L===void 0&&(L=S(m()),ft[it]=L),L}function S(w){const X=[],at=[],it=[];for(let ct=0;ct<i;ct++)X[ct]=0,at[ct]=0,it[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:at,attributeDivisors:it,object:w,attributes:{},index:null}}function E(w,X,at,it){const ct=u.attributes,ft=X.attributes;let L=0;const H=at.getAttributes();for(const $ in H)if(H[$].location>=0){const _t=ct[$];let D=ft[$];if(D===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(D=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(D=w.instanceColor)),_t===void 0||_t.attribute!==D||D&&_t.data!==D.data)return!0;L++}return u.attributesNum!==L||u.index!==it}function A(w,X,at,it){const ct={},ft=X.attributes;let L=0;const H=at.getAttributes();for(const $ in H)if(H[$].location>=0){let _t=ft[$];_t===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(_t=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(_t=w.instanceColor));const D={};D.attribute=_t,_t&&_t.data&&(D.data=_t.data),ct[$]=D,L++}u.attributes=ct,u.attributesNum=L,u.index=it}function C(){const w=u.newAttributes;for(let X=0,at=w.length;X<at;X++)w[X]=0}function M(w){x(w,0)}function x(w,X){const at=u.newAttributes,it=u.enabledAttributes,ct=u.attributeDivisors;at[w]=1,it[w]===0&&(o.enableVertexAttribArray(w),it[w]=1),ct[w]!==X&&(o.vertexAttribDivisor(w,X),ct[w]=X)}function I(){const w=u.newAttributes,X=u.enabledAttributes;for(let at=0,it=X.length;at<it;at++)X[at]!==w[at]&&(o.disableVertexAttribArray(at),X[at]=0)}function O(w,X,at,it,ct,ft,L){L===!0?o.vertexAttribIPointer(w,X,at,ct,ft):o.vertexAttribPointer(w,X,at,it,ct,ft)}function N(w,X,at,it){C();const ct=it.attributes,ft=at.getAttributes(),L=X.defaultAttributeValues;for(const H in ft){const $=ft[H];if($.location>=0){let lt=ct[H];if(lt===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(lt=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(lt=w.instanceColor)),lt!==void 0){const _t=lt.normalized,D=lt.itemSize,j=e.get(lt);if(j===void 0)continue;const pt=j.buffer,At=j.type,zt=j.bytesPerElement,tt=At===o.INT||At===o.UNSIGNED_INT||lt.gpuType===wh;if(lt.isInterleavedBufferAttribute){const dt=lt.data,Dt=dt.stride,Xt=lt.offset;if(dt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<$.locationSize;Ht++)x($.location+Ht,dt.meshPerAttribute);w.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ht=0;Ht<$.locationSize;Ht++)M($.location+Ht);o.bindBuffer(o.ARRAY_BUFFER,pt);for(let Ht=0;Ht<$.locationSize;Ht++)O($.location+Ht,D/$.locationSize,At,_t,Dt*zt,(Xt+D/$.locationSize*Ht)*zt,tt)}else{if(lt.isInstancedBufferAttribute){for(let dt=0;dt<$.locationSize;dt++)x($.location+dt,lt.meshPerAttribute);w.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let dt=0;dt<$.locationSize;dt++)M($.location+dt);o.bindBuffer(o.ARRAY_BUFFER,pt);for(let dt=0;dt<$.locationSize;dt++)O($.location+dt,D/$.locationSize,At,_t,D*zt,D/$.locationSize*dt*zt,tt)}}else if(L!==void 0){const _t=L[H];if(_t!==void 0)switch(_t.length){case 2:o.vertexAttrib2fv($.location,_t);break;case 3:o.vertexAttrib3fv($.location,_t);break;case 4:o.vertexAttrib4fv($.location,_t);break;default:o.vertexAttrib1fv($.location,_t)}}}}I()}function z(){K();for(const w in r){const X=r[w];for(const at in X){const it=X[at];for(const ct in it)v(it[ct].object),delete it[ct];delete X[at]}delete r[w]}}function B(w){if(r[w.id]===void 0)return;const X=r[w.id];for(const at in X){const it=X[at];for(const ct in it)v(it[ct].object),delete it[ct];delete X[at]}delete r[w.id]}function P(w){for(const X in r){const at=r[X];if(at[w.id]===void 0)continue;const it=at[w.id];for(const ct in it)v(it[ct].object),delete it[ct];delete at[w.id]}}function K(){R(),d=!0,u!==l&&(u=l,p(u.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:R,dispose:z,releaseStatesOfGeometry:B,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:M,disableUnusedAttributes:I}}function Sb(o,e,i){let r;function l(p){r=p}function u(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function d(p,v,_){_!==0&&(o.drawArraysInstanced(r,p,v,_),i.update(v,r,_))}function h(p,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,_);let E=0;for(let A=0;A<_;A++)E+=v[A];i.update(E,r,1)}function m(p,v,_,S){if(_===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let A=0;A<p.length;A++)d(p[A],v[A],S[A]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,v,0,S,0,_);let A=0;for(let C=0;C<_;C++)A+=v[C]*S[C];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Mb(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==Ai&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const K=P===ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==pi&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Pi&&!K)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(re("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:I,maxVaryings:O,maxFragmentUniforms:N,maxSamples:z,samples:B}}function yb(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new br,h=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const E=_.length!==0||S||r!==0||l;return l=S,r=_.length,E},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,S){i=v(_,S,0)},this.setState=function(_,S,E){const A=_.clippingPlanes,C=_.clipIntersection,M=_.clipShadows,x=o.get(_);if(!l||A===null||A.length===0||u&&!M)u?v(null):p();else{const I=u?0:r,O=I*4;let N=x.clippingState||null;m.value=N,N=v(A,S,O,E);for(let z=0;z!==O;++z)N[z]=i[z];x.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,S,E,A){const C=_!==null?_.length:0;let M=null;if(C!==0){if(M=m.value,A!==!0||M===null){const x=E+C*4,I=S.matrixWorldInverse;h.getNormalMatrix(I),(M===null||M.length<x)&&(M=new Float32Array(x));for(let O=0,N=E;O!==C;++O,N+=4)d.copy(_[O]).applyMatrix4(I,h),d.normal.toArray(M,N),M[N+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function Eb(o){let e=new WeakMap;function i(d,h){return h===Hd?d.mapping=wr:h===Gd&&(d.mapping=ws),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Hd||h===Gd)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Q_(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Ja=4,t_=[.125,.215,.35,.446,.526,.582],Ar=20,bb=256,Po=new tv,e_=new Fe;let Td=null,Ad=0,Rd=0,Cd=!1;const Tb=new rt;class n_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=Tb}=u;Td=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=r_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=a_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Td,Ad,Rd),this._renderer.xr.enabled=Cd,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===wr||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Td=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:ma,format:Ai,colorSpace:Us,depthBuffer:!1},l=i_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=i_(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ab(u)),this._blurMaterial=Cb(u,e,i),this._ggxMaterial=Rb(u,e,i)}return l}_compileMaterial(e){const i=new va(new mi,e);this._renderer.compile(i,Po)}_sceneToCubeUV(e,i,r,l,u){const m=new hi(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,E=_.toneMapping;_.getClearColor(e_),_.toneMapping=zi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new va(new Yo,new W_({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let x=!1;const I=e.background;I?I.isColor&&(M.color.copy(I),e.background=null,x=!0):(M.color.copy(e_),x=!0);for(let O=0;O<6;O++){const N=O%3;N===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[O],u.y,u.z)):N===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[O]));const z=this._cubeSize;Ts(l,N*z,O>2?z:0,z,z),_.setRenderTarget(l),x&&_.render(C,m),_.render(e,m)}_.toneMapping=E,_.autoClear=S,e.background=I}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===wr||e.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=r_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=a_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;Ts(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Po)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),S=0+p*1.25,E=_*S,{_lodMax:A}=this,C=this._sizeLods[r],M=3*C*(r>A-Ja?r-A+Ja:0),x=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=A-i,Ts(u,M,x,3*C,2*C),l.setRenderTarget(u),l.render(h,Po),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-r,Ts(e,M,x,3*C,2*C),l.setRenderTarget(e),l.render(h,Po)}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ae("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,E=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*Ar-1),C=u/A,M=isFinite(u)?1+Math.floor(v*C):Ar;M>Ar&&re(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ar}`);const x=[];let I=0;for(let P=0;P<Ar;++P){const K=P/C,R=Math.exp(-K*K/2);x.push(R),P===0?I+=R:P<M&&(I+=2*R)}for(let P=0;P<x.length;P++)x[P]=x[P]/I;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=x,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:O}=this;S.dTheta.value=A,S.mipInt.value=O-r;const N=this._sizeLods[l],z=3*N*(l>O-Ja?l-O+Ja:0),B=4*(this._cubeSize-N);Ts(i,z,B,3*N,2*N),m.setRenderTarget(i),m.render(_,Po)}}function Ab(o){const e=[],i=[],r=[];let l=o;const u=o-Ja+1+t_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>o-Ja?m=t_[d-o+Ja-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,_=1+p,S=[v,v,_,v,_,_,v,v,_,_,v,_],E=6,A=6,C=3,M=2,x=1,I=new Float32Array(C*A*E),O=new Float32Array(M*A*E),N=new Float32Array(x*A*E);for(let B=0;B<E;B++){const P=B%3*2/3-1,K=B>2?0:-1,R=[P,K,0,P+2/3,K,0,P+2/3,K+1,0,P,K,0,P+2/3,K+1,0,P,K+1,0];I.set(R,C*A*B),O.set(S,M*A*B);const w=[B,B,B,B,B,B];N.set(w,x*A*B)}const z=new mi;z.setAttribute("position",new Ri(I,C)),z.setAttribute("uv",new Ri(O,M)),z.setAttribute("faceIndex",new Ri(N,x)),r.push(new va(z,null)),l>Ja&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function i_(o,e,i){const r=new Fi(o,e,i);return r.texture.mapping=Bc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ts(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function Rb(o,e,i){return new Hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function Cb(o,e,i){const r=new Float32Array(Ar),l=new rt(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function a_(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function r_(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function Vc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wb(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Hd||m===Gd,v=m===wr||m===ws;if(p||v){let _=e.get(h);const S=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new n_(o)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const E=h.image;return p&&E&&E.height>0||v&&E&&l(E)?(i===null&&(i=new n_(o)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Db(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Go("WebGLRenderer: "+r+" extension not supported."),l}}}function Ub(o,e,i,r){const l={},u=new WeakMap;function d(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);S.removeEventListener("dispose",d),delete l[S.id];const E=u.get(S);E&&(e.remove(E),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(_,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const E in S)e.update(S[E],o.ARRAY_BUFFER)}function p(_){const S=[],E=_.index,A=_.attributes.position;let C=0;if(E!==null){const I=E.array;C=E.version;for(let O=0,N=I.length;O<N;O+=3){const z=I[O+0],B=I[O+1],P=I[O+2];S.push(z,B,B,P,P,z)}}else if(A!==void 0){const I=A.array;C=A.version;for(let O=0,N=I.length/3-1;O<N;O+=3){const z=O+0,B=O+1,P=O+2;S.push(z,B,B,P,P,z)}}else return;const M=new(H_(S)?Y_:q_)(S,1);M.version=C;const x=u.get(_);x&&e.remove(x),u.set(_,M)}function v(_){const S=u.get(_);if(S){const E=_.index;E!==null&&S.version<E.version&&p(_)}else p(_);return u.get(_)}return{get:h,update:m,getWireframeAttribute:v}}function Nb(o,e,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,E){o.drawElements(r,E,u,S*d),i.update(E,r,1)}function p(S,E,A){A!==0&&(o.drawElementsInstanced(r,E,u,S*d,A),i.update(E,r,A))}function v(S,E,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,u,S,0,A);let M=0;for(let x=0;x<A;x++)M+=E[x];i.update(M,r,1)}function _(S,E,A,C){if(A===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<S.length;x++)p(S[x]/d,E[x],C[x]);else{M.multiDrawElementsInstancedWEBGL(r,E,0,u,S,0,C,0,A);let x=0;for(let I=0;I<A;I++)x+=E[I]*C[I];i.update(x,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function Lb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:Ae("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Ob(o,e,i){const r=new WeakMap,l=new nn;function u(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let S=r.get(h);if(S===void 0||S.count!==_){let w=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",w)};var E=w;S!==void 0&&S.texture.dispose();const A=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let N=0;A===!0&&(N=1),C===!0&&(N=2),M===!0&&(N=3);let z=h.attributes.position.count*N,B=1;z>e.maxTextureSize&&(B=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const P=new Float32Array(z*B*4*_),K=new G_(P,z,B,_);K.type=Pi,K.needsUpdate=!0;const R=N*4;for(let X=0;X<_;X++){const at=x[X],it=I[X],ct=O[X],ft=z*B*4*X;for(let L=0;L<at.count;L++){const H=L*R;A===!0&&(l.fromBufferAttribute(at,L),P[ft+H+0]=l.x,P[ft+H+1]=l.y,P[ft+H+2]=l.z,P[ft+H+3]=0),C===!0&&(l.fromBufferAttribute(it,L),P[ft+H+4]=l.x,P[ft+H+5]=l.y,P[ft+H+6]=l.z,P[ft+H+7]=0),M===!0&&(l.fromBufferAttribute(ct,L),P[ft+H+8]=l.x,P[ft+H+9]=l.y,P[ft+H+10]=l.z,P[ft+H+11]=ct.itemSize===4?l.w:1)}}S={count:_,texture:K,size:new Ve(z,B)},r.set(h,S),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const C=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function Pb(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,v=m.geometry,_=e.get(m,v);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const Ib={[T_]:"LINEAR_TONE_MAPPING",[A_]:"REINHARD_TONE_MAPPING",[R_]:"CINEON_TONE_MAPPING",[C_]:"ACES_FILMIC_TONE_MAPPING",[D_]:"AGX_TONE_MAPPING",[U_]:"NEUTRAL_TONE_MAPPING",[w_]:"CUSTOM_TONE_MAPPING"};function zb(o,e,i,r,l){const u=new Fi(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),d=new Fi(e,i,{type:ma,depthBuffer:!1,stencilBuffer:!1}),h=new mi;h.setAttribute("position",new pa([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new pa([0,2,0,0,2,0],2));const m=new NM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new va(h,m),v=new tv(-1,1,1,-1,0,1);let _=null,S=null,E=!1,A,C=null,M=[],x=!1;this.setSize=function(I,O){u.setSize(I,O),d.setSize(I,O);for(let N=0;N<M.length;N++){const z=M[N];z.setSize&&z.setSize(I,O)}},this.setEffects=function(I){M=I,x=M.length>0&&M[0].isRenderPass===!0;const O=u.width,N=u.height;for(let z=0;z<M.length;z++){const B=M[z];B.setSize&&B.setSize(O,N)}},this.begin=function(I,O){if(E||I.toneMapping===zi&&M.length===0)return!1;if(C=O,O!==null){const N=O.width,z=O.height;(u.width!==N||u.height!==z)&&this.setSize(N,z)}return x===!1&&I.setRenderTarget(u),A=I.toneMapping,I.toneMapping=zi,!0},this.hasRenderPass=function(){return x},this.end=function(I,O){I.toneMapping=A,E=!0;let N=u,z=d;for(let B=0;B<M.length;B++){const P=M[B];if(P.enabled!==!1&&(P.render(I,z,N,O),P.needsSwap!==!1)){const K=N;N=z,z=K}}if(_!==I.outputColorSpace||S!==I.toneMapping){_=I.outputColorSpace,S=I.toneMapping,m.defines={},Ee.getTransfer(_)===ze&&(m.defines.SRGB_TRANSFER="");const B=Ib[S];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,I.setRenderTarget(C),I.render(p,v),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.dispose(),d.dispose(),h.dispose(),m.dispose()}}const nv=new Ln,Th=new Vo(1,1),iv=new G_,av=new oM,rv=new K_,s_=[],o_=[],l_=new Float32Array(16),c_=new Float32Array(9),u_=new Float32Array(4);function Os(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=s_[l];if(u===void 0&&(u=new Float32Array(l),s_[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function hn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function pn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Xc(o,e){let i=o_[e];i===void 0&&(i=new Int32Array(e),o_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function Fb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function Bb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2fv(this.addr,e),pn(i,e)}}function Hb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(hn(i,e))return;o.uniform3fv(this.addr,e),pn(i,e)}}function Gb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4fv(this.addr,e),pn(i,e)}}function Vb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),pn(i,e)}else{if(hn(i,r))return;u_.set(r),o.uniformMatrix2fv(this.addr,!1,u_),pn(i,r)}}function Xb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),pn(i,e)}else{if(hn(i,r))return;c_.set(r),o.uniformMatrix3fv(this.addr,!1,c_),pn(i,r)}}function kb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),pn(i,e)}else{if(hn(i,r))return;l_.set(r),o.uniformMatrix4fv(this.addr,!1,l_),pn(i,r)}}function Wb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function qb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2iv(this.addr,e),pn(i,e)}}function Yb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3iv(this.addr,e),pn(i,e)}}function jb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4iv(this.addr,e),pn(i,e)}}function Zb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function Kb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2uiv(this.addr,e),pn(i,e)}}function Qb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3uiv(this.addr,e),pn(i,e)}}function Jb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4uiv(this.addr,e),pn(i,e)}}function $b(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Th.compareFunction=i.isReversedDepthBuffer()?Ih:Ph,u=Th):u=nv,i.setTexture2D(e||u,l)}function tT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||av,l)}function eT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||rv,l)}function nT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||iv,l)}function iT(o){switch(o){case 5126:return Fb;case 35664:return Bb;case 35665:return Hb;case 35666:return Gb;case 35674:return Vb;case 35675:return Xb;case 35676:return kb;case 5124:case 35670:return Wb;case 35667:case 35671:return qb;case 35668:case 35672:return Yb;case 35669:case 35673:return jb;case 5125:return Zb;case 36294:return Kb;case 36295:return Qb;case 36296:return Jb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return tT;case 35680:case 36300:case 36308:case 36293:return eT;case 36289:case 36303:case 36311:case 36292:return nT}}function aT(o,e){o.uniform1fv(this.addr,e)}function rT(o,e){const i=Os(e,this.size,2);o.uniform2fv(this.addr,i)}function sT(o,e){const i=Os(e,this.size,3);o.uniform3fv(this.addr,i)}function oT(o,e){const i=Os(e,this.size,4);o.uniform4fv(this.addr,i)}function lT(o,e){const i=Os(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function cT(o,e){const i=Os(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function uT(o,e){const i=Os(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function fT(o,e){o.uniform1iv(this.addr,e)}function dT(o,e){o.uniform2iv(this.addr,e)}function hT(o,e){o.uniform3iv(this.addr,e)}function pT(o,e){o.uniform4iv(this.addr,e)}function mT(o,e){o.uniform1uiv(this.addr,e)}function gT(o,e){o.uniform2uiv(this.addr,e)}function _T(o,e){o.uniform3uiv(this.addr,e)}function vT(o,e){o.uniform4uiv(this.addr,e)}function xT(o,e,i){const r=this.cache,l=e.length,u=Xc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=Th:d=nv;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,u[h])}function ST(o,e,i){const r=this.cache,l=e.length,u=Xc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||av,u[d])}function MT(o,e,i){const r=this.cache,l=e.length,u=Xc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||rv,u[d])}function yT(o,e,i){const r=this.cache,l=e.length,u=Xc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||iv,u[d])}function ET(o){switch(o){case 5126:return aT;case 35664:return rT;case 35665:return sT;case 35666:return oT;case 35674:return lT;case 35675:return cT;case 35676:return uT;case 5124:case 35670:return fT;case 35667:case 35671:return dT;case 35668:case 35672:return hT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return gT;case 36295:return _T;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return xT;case 35679:case 36299:case 36307:return ST;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return yT}}class bT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=iT(i.type)}}class TT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ET(i.type)}}class AT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function f_(o,e){o.seq.push(e),o.map[e.id]=e}function RT(o,e,i){const r=o.name,l=r.length;for(wd.lastIndex=0;;){const u=wd.exec(r),d=wd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){f_(i,p===void 0?new bT(h,o,e):new TT(h,o,e));break}else{let _=i.map[h];_===void 0&&(_=new AT(h),f_(i,_)),i=_}}}class Oc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=e.getActiveUniform(i,d),m=e.getUniformLocation(i,h.name);RT(h,m,this)}const l=[],u=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function d_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const CT=37297;let wT=0;function DT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const h_=new ue;function UT(o){Ee._getMatrix(h_,Ee.workingColorSpace,o);const e=`mat3( ${h_.elements.map(i=>i.toFixed(4))} )`;switch(Ee.getTransfer(o)){case Ic:return[e,"LinearTransferOETF"];case ze:return[e,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function p_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+DT(o.getShaderSource(e),h)}else return u}function NT(o,e){const i=UT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const LT={[T_]:"Linear",[A_]:"Reinhard",[R_]:"Cineon",[C_]:"ACESFilmic",[D_]:"AgX",[U_]:"Neutral",[w_]:"Custom"};function OT(o,e){const i=LT[e];return i===void 0?(re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Rc=new rt;function PT(){Ee.getLuminanceCoefficients(Rc);const o=Rc.x.toFixed(4),e=Rc.y.toFixed(4),i=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function zT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function FT(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Fo(o){return o!==""}function m_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function g_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ah(o){return o.replace(BT,GT)}const HT=new Map;function GT(o,e){let i=fe[e];if(i===void 0){const r=HT.get(e);if(r!==void 0)i=fe[r],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ah(i)}const VT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function __(o){return o.replace(VT,XT)}function XT(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function v_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const kT={[wc]:"SHADOWMAP_TYPE_PCF",[zo]:"SHADOWMAP_TYPE_VSM"};function WT(o){return kT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qT={[wr]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE",[Bc]:"ENVMAP_TYPE_CUBE_UV"};function YT(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":qT[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const jT={[ws]:"ENVMAP_MODE_REFRACTION"};function ZT(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":jT[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const KT={[b_]:"ENVMAP_BLENDING_MULTIPLY",[GS]:"ENVMAP_BLENDING_MIX",[VS]:"ENVMAP_BLENDING_ADD"};function QT(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":KT[o.combine]||"ENVMAP_BLENDING_NONE"}function JT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function $T(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=WT(i),p=YT(i),v=ZT(i),_=QT(i),S=JT(i),E=IT(i),A=zT(u),C=l.createProgram();let M,x,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Fo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Fo).join(`
`),x.length>0&&(x+=`
`)):(M=[v_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),x=[v_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==zi?"#define TONE_MAPPING":"",i.toneMapping!==zi?fe.tonemapping_pars_fragment:"",i.toneMapping!==zi?OT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,NT("linearToOutputTexel",i.outputColorSpace),PT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Fo).join(`
`)),d=Ah(d),d=m_(d,i),d=g_(d,i),h=Ah(h),h=m_(h,i),h=g_(h,i),d=__(d),h=__(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===U0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===U0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const O=I+M+d,N=I+x+h,z=d_(l,l.VERTEX_SHADER,O),B=d_(l,l.FRAGMENT_SHADER,N);l.attachShader(C,z),l.attachShader(C,B),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(X){if(o.debug.checkShaderErrors){const at=l.getProgramInfoLog(C)||"",it=l.getShaderInfoLog(z)||"",ct=l.getShaderInfoLog(B)||"",ft=at.trim(),L=it.trim(),H=ct.trim();let $=!0,lt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if($=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,z,B);else{const _t=p_(l,z,"vertex"),D=p_(l,B,"fragment");Ae("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ft+`
`+_t+`
`+D)}else ft!==""?re("WebGLProgram: Program Info Log:",ft):(L===""||H==="")&&(lt=!1);lt&&(X.diagnostics={runnable:$,programLog:ft,vertexShader:{log:L,prefix:M},fragmentShader:{log:H,prefix:x}})}l.deleteShader(z),l.deleteShader(B),K=new Oc(l,C),R=FT(l,C)}let K;this.getUniforms=function(){return K===void 0&&P(this),K};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,CT)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=wT++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=z,this.fragmentShader=B,this}let t1=0;class e1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new n1(e),i.set(e,r)),r}}class n1{constructor(e){this.id=t1++,this.code=e,this.usedTimes=0}}function i1(o,e,i,r,l,u,d){const h=new X_,m=new e1,p=new Set,v=[],_=new Map,S=l.logarithmicDepthBuffer;let E=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return p.add(R),R===0?"uv":`uv${R}`}function M(R,w,X,at,it){const ct=at.fog,ft=it.geometry,L=R.isMeshStandardMaterial?at.environment:null,H=(R.isMeshStandardMaterial?i:e).get(R.envMap||L),$=H&&H.mapping===Bc?H.image.height:null,lt=A[R.type];R.precision!==null&&(E=l.getMaxPrecision(R.precision),E!==R.precision&&re("WebGLProgram.getParameters:",R.precision,"not supported, using",E,"instead."));const _t=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,D=_t!==void 0?_t.length:0;let j=0;ft.morphAttributes.position!==void 0&&(j=1),ft.morphAttributes.normal!==void 0&&(j=2),ft.morphAttributes.color!==void 0&&(j=3);let pt,At,zt,tt;if(lt){const ye=Oi[lt];pt=ye.vertexShader,At=ye.fragmentShader}else pt=R.vertexShader,At=R.fragmentShader,m.update(R),zt=m.getVertexShaderID(R),tt=m.getFragmentShaderID(R);const dt=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),Xt=it.isInstancedMesh===!0,Ht=it.isBatchedMesh===!0,de=!!R.map,Ke=!!R.matcap,ge=!!H,he=!!R.aoMap,Re=!!R.lightMap,se=!!R.bumpMap,Qe=!!R.normalMap,G=!!R.displacementMap,Ye=!!R.emissiveMap,Me=!!R.metalnessMap,Ue=!!R.roughnessMap,Yt=R.anisotropy>0,U=R.clearcoat>0,y=R.dispersion>0,W=R.iridescence>0,mt=R.sheen>0,Mt=R.transmission>0,ut=Yt&&!!R.anisotropyMap,Zt=U&&!!R.clearcoatMap,Ct=U&&!!R.clearcoatNormalMap,kt=U&&!!R.clearcoatRoughnessMap,ee=W&&!!R.iridescenceMap,Et=W&&!!R.iridescenceThicknessMap,bt=mt&&!!R.sheenColorMap,Ft=mt&&!!R.sheenRoughnessMap,Pt=!!R.specularMap,wt=!!R.specularColorMap,le=!!R.specularIntensityMap,k=Mt&&!!R.transmissionMap,Nt=Mt&&!!R.thicknessMap,Tt=!!R.gradientMap,It=!!R.alphaMap,yt=R.alphaTest>0,St=!!R.alphaHash,Rt=!!R.extensions;let ne=zi;R.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Le={shaderID:lt,shaderType:R.type,shaderName:R.name,vertexShader:pt,fragmentShader:At,defines:R.defines,customVertexShaderID:zt,customFragmentShaderID:tt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:E,batching:Ht,batchingColor:Ht&&it._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&it.instanceColor!==null,instancingMorph:Xt&&it.morphTexture!==null,outputColorSpace:dt===null?o.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Us,alphaToCoverage:!!R.alphaToCoverage,map:de,matcap:Ke,envMap:ge,envMapMode:ge&&H.mapping,envMapCubeUVHeight:$,aoMap:he,lightMap:Re,bumpMap:se,normalMap:Qe,displacementMap:G,emissiveMap:Ye,normalMapObjectSpace:Qe&&R.normalMapType===qS,normalMapTangentSpace:Qe&&R.normalMapType===WS,metalnessMap:Me,roughnessMap:Ue,anisotropy:Yt,anisotropyMap:ut,clearcoat:U,clearcoatMap:Zt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:kt,dispersion:y,iridescence:W,iridescenceMap:ee,iridescenceThicknessMap:Et,sheen:mt,sheenColorMap:bt,sheenRoughnessMap:Ft,specularMap:Pt,specularColorMap:wt,specularIntensityMap:le,transmission:Mt,transmissionMap:k,thicknessMap:Nt,gradientMap:Tt,opaque:R.transparent===!1&&R.blending===As&&R.alphaToCoverage===!1,alphaMap:It,alphaTest:yt,alphaHash:St,combine:R.combine,mapUv:de&&C(R.map.channel),aoMapUv:he&&C(R.aoMap.channel),lightMapUv:Re&&C(R.lightMap.channel),bumpMapUv:se&&C(R.bumpMap.channel),normalMapUv:Qe&&C(R.normalMap.channel),displacementMapUv:G&&C(R.displacementMap.channel),emissiveMapUv:Ye&&C(R.emissiveMap.channel),metalnessMapUv:Me&&C(R.metalnessMap.channel),roughnessMapUv:Ue&&C(R.roughnessMap.channel),anisotropyMapUv:ut&&C(R.anisotropyMap.channel),clearcoatMapUv:Zt&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&C(R.sheenRoughnessMap.channel),specularMapUv:Pt&&C(R.specularMap.channel),specularColorMapUv:wt&&C(R.specularColorMap.channel),specularIntensityMapUv:le&&C(R.specularIntensityMap.channel),transmissionMapUv:k&&C(R.transmissionMap.channel),thicknessMapUv:Nt&&C(R.thicknessMap.channel),alphaMapUv:It&&C(R.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Qe||Yt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!ft.attributes.uv&&(de||It),fog:!!ct,useFog:R.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Dt,skinning:it.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:j,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&X.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:de&&R.map.isVideoTexture===!0&&Ee.getTransfer(R.map.colorSpace)===ze,decodeVideoTextureEmissive:Ye&&R.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(R.emissiveMap.colorSpace)===ze,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ua,flipSided:R.side===kn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Rt&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&R.extensions.multiDraw===!0||Ht)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Le.vertexUv1s=p.has(1),Le.vertexUv2s=p.has(2),Le.vertexUv3s=p.has(3),p.clear(),Le}function x(R){const w=[];if(R.shaderID?w.push(R.shaderID):(w.push(R.customVertexShaderID),w.push(R.customFragmentShaderID)),R.defines!==void 0)for(const X in R.defines)w.push(X),w.push(R.defines[X]);return R.isRawShaderMaterial===!1&&(I(w,R),O(w,R),w.push(o.outputColorSpace)),w.push(R.customProgramCacheKey),w.join()}function I(R,w){R.push(w.precision),R.push(w.outputColorSpace),R.push(w.envMapMode),R.push(w.envMapCubeUVHeight),R.push(w.mapUv),R.push(w.alphaMapUv),R.push(w.lightMapUv),R.push(w.aoMapUv),R.push(w.bumpMapUv),R.push(w.normalMapUv),R.push(w.displacementMapUv),R.push(w.emissiveMapUv),R.push(w.metalnessMapUv),R.push(w.roughnessMapUv),R.push(w.anisotropyMapUv),R.push(w.clearcoatMapUv),R.push(w.clearcoatNormalMapUv),R.push(w.clearcoatRoughnessMapUv),R.push(w.iridescenceMapUv),R.push(w.iridescenceThicknessMapUv),R.push(w.sheenColorMapUv),R.push(w.sheenRoughnessMapUv),R.push(w.specularMapUv),R.push(w.specularColorMapUv),R.push(w.specularIntensityMapUv),R.push(w.transmissionMapUv),R.push(w.thicknessMapUv),R.push(w.combine),R.push(w.fogExp2),R.push(w.sizeAttenuation),R.push(w.morphTargetsCount),R.push(w.morphAttributeCount),R.push(w.numDirLights),R.push(w.numPointLights),R.push(w.numSpotLights),R.push(w.numSpotLightMaps),R.push(w.numHemiLights),R.push(w.numRectAreaLights),R.push(w.numDirLightShadows),R.push(w.numPointLightShadows),R.push(w.numSpotLightShadows),R.push(w.numSpotLightShadowsWithMaps),R.push(w.numLightProbes),R.push(w.shadowMapType),R.push(w.toneMapping),R.push(w.numClippingPlanes),R.push(w.numClipIntersection),R.push(w.depthPacking)}function O(R,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),R.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),R.push(h.mask)}function N(R){const w=A[R.type];let X;if(w){const at=Oi[w];X=SM.clone(at.uniforms)}else X=R.uniforms;return X}function z(R,w){let X=_.get(w);return X!==void 0?++X.usedTimes:(X=new $T(o,w,R,u),v.push(X),_.set(w,X)),X}function B(R){if(--R.usedTimes===0){const w=v.indexOf(R);v[w]=v[v.length-1],v.pop(),_.delete(R.cacheKey),R.destroy()}}function P(R){m.remove(R)}function K(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:N,acquireProgram:z,releaseProgram:B,releaseShaderCache:P,programs:v,dispose:K}}function a1(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function r1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function x_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function S_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(_,S,E,A,C,M){let x=o[e];return x===void 0?(x={id:_.id,object:_,geometry:S,material:E,groupOrder:A,renderOrder:_.renderOrder,z:C,group:M},o[e]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=E,x.groupOrder=A,x.renderOrder=_.renderOrder,x.z=C,x.group=M),e++,x}function h(_,S,E,A,C,M){const x=d(_,S,E,A,C,M);E.transmission>0?r.push(x):E.transparent===!0?l.push(x):i.push(x)}function m(_,S,E,A,C,M){const x=d(_,S,E,A,C,M);E.transmission>0?r.unshift(x):E.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,S){i.length>1&&i.sort(_||r1),r.length>1&&r.sort(S||x_),l.length>1&&l.sort(S||x_)}function v(){for(let _=e,S=o.length;_<S;_++){const E=o[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:v,sort:p}}function s1(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new S_,o.set(r,[d])):l>=u.length?(d=new S_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function o1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new Fe};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":i={color:new Fe,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[e.id]=i,i}}}function l1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let c1=0;function u1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function f1(o){const e=new o1,i=l1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new rt);const l=new rt,u=new an,d=new an;function h(p){let v=0,_=0,S=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let E=0,A=0,C=0,M=0,x=0,I=0,O=0,N=0,z=0,B=0,P=0;p.sort(u1);for(let R=0,w=p.length;R<w;R++){const X=p[R],at=X.color,it=X.intensity,ct=X.distance;let ft=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Ds?ft=X.shadow.map.texture:ft=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)v+=at.r*it,_+=at.g*it,S+=at.b*it;else if(X.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(X.sh.coefficients[L],it);P++}else if(X.isDirectionalLight){const L=e.get(X);if(L.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const H=X.shadow,$=i.get(X);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.directionalShadow[E]=$,r.directionalShadowMap[E]=ft,r.directionalShadowMatrix[E]=X.shadow.matrix,I++}r.directional[E]=L,E++}else if(X.isSpotLight){const L=e.get(X);L.position.setFromMatrixPosition(X.matrixWorld),L.color.copy(at).multiplyScalar(it),L.distance=ct,L.coneCos=Math.cos(X.angle),L.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),L.decay=X.decay,r.spot[C]=L;const H=X.shadow;if(X.map&&(r.spotLightMap[z]=X.map,z++,H.updateMatrices(X),X.castShadow&&B++),r.spotLightMatrix[C]=H.matrix,X.castShadow){const $=i.get(X);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.spotShadow[C]=$,r.spotShadowMap[C]=ft,N++}C++}else if(X.isRectAreaLight){const L=e.get(X);L.color.copy(at).multiplyScalar(it),L.halfWidth.set(X.width*.5,0,0),L.halfHeight.set(0,X.height*.5,0),r.rectArea[M]=L,M++}else if(X.isPointLight){const L=e.get(X);if(L.color.copy(X.color).multiplyScalar(X.intensity),L.distance=X.distance,L.decay=X.decay,X.castShadow){const H=X.shadow,$=i.get(X);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,r.pointShadow[A]=$,r.pointShadowMap[A]=ft,r.pointShadowMatrix[A]=X.shadow.matrix,O++}r.point[A]=L,A++}else if(X.isHemisphereLight){const L=e.get(X);L.skyColor.copy(X.color).multiplyScalar(it),L.groundColor.copy(X.groundColor).multiplyScalar(it),r.hemi[x]=L,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=S;const K=r.hash;(K.directionalLength!==E||K.pointLength!==A||K.spotLength!==C||K.rectAreaLength!==M||K.hemiLength!==x||K.numDirectionalShadows!==I||K.numPointShadows!==O||K.numSpotShadows!==N||K.numSpotMaps!==z||K.numLightProbes!==P)&&(r.directional.length=E,r.spot.length=C,r.rectArea.length=M,r.point.length=A,r.hemi.length=x,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=N+z-B,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=P,K.directionalLength=E,K.pointLength=A,K.spotLength=C,K.rectAreaLength=M,K.hemiLength=x,K.numDirectionalShadows=I,K.numPointShadows=O,K.numSpotShadows=N,K.numSpotMaps=z,K.numLightProbes=P,r.version=c1++)}function m(p,v){let _=0,S=0,E=0,A=0,C=0;const M=v.matrixWorldInverse;for(let x=0,I=p.length;x<I;x++){const O=p[x];if(O.isDirectionalLight){const N=r.directional[_];N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),_++}else if(O.isSpotLight){const N=r.spot[E];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),E++}else if(O.isRectAreaLight){const N=r.rectArea[A];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(M),d.identity(),u.copy(O.matrixWorld),u.premultiply(M),d.extractRotation(u),N.halfWidth.set(O.width*.5,0,0),N.halfHeight.set(0,O.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),A++}else if(O.isPointLight){const N=r.point[S];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(M),S++}else if(O.isHemisphereLight){const N=r.hemi[C];N.direction.setFromMatrixPosition(O.matrixWorld),N.direction.transformDirection(M),C++}}}return{setup:h,setupView:m,state:r}}function M_(o){const e=new f1(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function u(v){i.push(v)}function d(v){r.push(v)}function h(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function d1(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new M_(o),e.set(l,[h])):u>=d.length?(h=new M_(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const h1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,m1=[new rt(1,0,0),new rt(-1,0,0),new rt(0,1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1)],g1=[new rt(0,-1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1),new rt(0,-1,0),new rt(0,-1,0)],y_=new an,Io=new rt,Dd=new rt;function _1(o,e,i){let r=new J_;const l=new Ve,u=new Ve,d=new nn,h=new LM,m=new OM,p={},v=i.maxTextureSize,_={[$a]:kn,[kn]:$a,[ua]:ua},S=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:h1,fragmentShader:p1}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const A=new mi;A.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new va(A,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let x=this.type;this.render=function(B,P,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;B.type===yS&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=wc);const R=o.getRenderTarget(),w=o.getActiveCubeFace(),X=o.getActiveMipmapLevel(),at=o.state;at.setBlending(da),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const it=x!==this.type;it&&P.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(ft=>ft.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,ft=B.length;ct<ft;ct++){const L=B[ct],H=L.shadow;if(H===void 0){re("WebGLShadowMap:",L,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const $=H.getFrameExtents();if(l.multiply($),u.copy(H.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/$.x),l.x=u.x*$.x,H.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/$.y),l.y=u.y*$.y,H.mapSize.y=u.y)),H.map===null||it===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===zo){if(L.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Fi(l.x,l.y,{format:Ds,type:ma,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),H.map.texture.name=L.name+".shadowMap",H.map.depthTexture=new Vo(l.x,l.y,Pi),H.map.depthTexture.name=L.name+".shadowMapDepth",H.map.depthTexture.format=ga,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn}else{L.isPointLight?(H.map=new Q_(l.x),H.map.depthTexture=new UM(l.x,Bi)):(H.map=new Fi(l.x,l.y),H.map.depthTexture=new Vo(l.x,l.y,Bi)),H.map.depthTexture.name=L.name+".shadowMap",H.map.depthTexture.format=ga;const _t=o.state.buffers.depth.getReversed();this.type===wc?(H.map.depthTexture.compareFunction=_t?Ih:Ph,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn)}H.camera.updateProjectionMatrix()}const lt=H.map.isWebGLCubeRenderTarget?6:1;for(let _t=0;_t<lt;_t++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,_t),o.clear();else{_t===0&&(o.setRenderTarget(H.map),o.clear());const D=H.getViewport(_t);d.set(u.x*D.x,u.y*D.y,u.x*D.z,u.y*D.w),at.viewport(d)}if(L.isPointLight){const D=H.camera,j=H.matrix,pt=L.distance||D.far;pt!==D.far&&(D.far=pt,D.updateProjectionMatrix()),Io.setFromMatrixPosition(L.matrixWorld),D.position.copy(Io),Dd.copy(D.position),Dd.add(m1[_t]),D.up.copy(g1[_t]),D.lookAt(Dd),D.updateMatrixWorld(),j.makeTranslation(-Io.x,-Io.y,-Io.z),y_.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),H._frustum.setFromProjectionMatrix(y_,D.coordinateSystem,D.reversedDepth)}else H.updateMatrices(L);r=H.getFrustum(),N(P,K,H.camera,L,this.type)}H.isPointLightShadow!==!0&&this.type===zo&&I(H,K),H.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(R,w,X)};function I(B,P){const K=e.update(C);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,E.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Fi(l.x,l.y,{format:Ds,type:ma})),S.uniforms.shadow_pass.value=B.map.depthTexture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(P,null,K,S,C,null),E.uniforms.shadow_pass.value=B.mapPass.texture,E.uniforms.resolution.value=B.mapSize,E.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(P,null,K,E,C,null)}function O(B,P,K,R){let w=null;const X=K.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(X!==void 0)w=X;else if(w=K.isPointLight===!0?m:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const at=w.uuid,it=P.uuid;let ct=p[at];ct===void 0&&(ct={},p[at]=ct);let ft=ct[it];ft===void 0&&(ft=w.clone(),ct[it]=ft,P.addEventListener("dispose",z)),w=ft}if(w.visible=P.visible,w.wireframe=P.wireframe,R===zo?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:_[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,K.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const at=o.properties.get(w);at.light=K}return w}function N(B,P,K,R,w){if(B.visible===!1)return;if(B.layers.test(P.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===zo)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,B.matrixWorld);const it=e.update(B),ct=B.material;if(Array.isArray(ct)){const ft=it.groups;for(let L=0,H=ft.length;L<H;L++){const $=ft[L],lt=ct[$.materialIndex];if(lt&&lt.visible){const _t=O(B,lt,R,w);B.onBeforeShadow(o,B,P,K,it,_t,$),o.renderBufferDirect(K,null,it,_t,B,$),B.onAfterShadow(o,B,P,K,it,_t,$)}}}else if(ct.visible){const ft=O(B,ct,R,w);B.onBeforeShadow(o,B,P,K,it,ft,null),o.renderBufferDirect(K,null,it,ft,B,null),B.onAfterShadow(o,B,P,K,it,ft,null)}}const at=B.children;for(let it=0,ct=at.length;it<ct;it++)N(at[it],P,K,R,w)}function z(B){B.target.removeEventListener("dispose",z);for(const K in p){const R=p[K],w=B.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}const v1={[Ld]:Od,[Pd]:Fd,[Id]:Bd,[Cs]:zd,[Od]:Ld,[Fd]:Pd,[Bd]:Id,[zd]:Cs};function x1(o,e){function i(){let k=!1;const Nt=new nn;let Tt=null;const It=new nn(0,0,0,0);return{setMask:function(yt){Tt!==yt&&!k&&(o.colorMask(yt,yt,yt,yt),Tt=yt)},setLocked:function(yt){k=yt},setClear:function(yt,St,Rt,ne,Le){Le===!0&&(yt*=ne,St*=ne,Rt*=ne),Nt.set(yt,St,Rt,ne),It.equals(Nt)===!1&&(o.clearColor(yt,St,Rt,ne),It.copy(Nt))},reset:function(){k=!1,Tt=null,It.set(-1,0,0,0)}}}function r(){let k=!1,Nt=!1,Tt=null,It=null,yt=null;return{setReversed:function(St){if(Nt!==St){const Rt=e.get("EXT_clip_control");St?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),Nt=St;const ne=yt;yt=null,this.setClear(ne)}},getReversed:function(){return Nt},setTest:function(St){St?dt(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(St){Tt!==St&&!k&&(o.depthMask(St),Tt=St)},setFunc:function(St){if(Nt&&(St=v1[St]),It!==St){switch(St){case Ld:o.depthFunc(o.NEVER);break;case Od:o.depthFunc(o.ALWAYS);break;case Pd:o.depthFunc(o.LESS);break;case Cs:o.depthFunc(o.LEQUAL);break;case Id:o.depthFunc(o.EQUAL);break;case zd:o.depthFunc(o.GEQUAL);break;case Fd:o.depthFunc(o.GREATER);break;case Bd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}It=St}},setLocked:function(St){k=St},setClear:function(St){yt!==St&&(Nt&&(St=1-St),o.clearDepth(St),yt=St)},reset:function(){k=!1,Tt=null,It=null,yt=null,Nt=!1}}}function l(){let k=!1,Nt=null,Tt=null,It=null,yt=null,St=null,Rt=null,ne=null,Le=null;return{setTest:function(ye){k||(ye?dt(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(ye){Nt!==ye&&!k&&(o.stencilMask(ye),Nt=ye)},setFunc:function(ye,Cn,gi){(Tt!==ye||It!==Cn||yt!==gi)&&(o.stencilFunc(ye,Cn,gi),Tt=ye,It=Cn,yt=gi)},setOp:function(ye,Cn,gi){(St!==ye||Rt!==Cn||ne!==gi)&&(o.stencilOp(ye,Cn,gi),St=ye,Rt=Cn,ne=gi)},setLocked:function(ye){k=ye},setClear:function(ye){Le!==ye&&(o.clearStencil(ye),Le=ye)},reset:function(){k=!1,Nt=null,Tt=null,It=null,yt=null,St=null,Rt=null,ne=null,Le=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},_={},S=new WeakMap,E=[],A=null,C=!1,M=null,x=null,I=null,O=null,N=null,z=null,B=null,P=new Fe(0,0,0),K=0,R=!1,w=null,X=null,at=null,it=null,ct=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,H=0;const $=o.getParameter(o.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),L=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),L=H>=2);let lt=null,_t={};const D=o.getParameter(o.SCISSOR_BOX),j=o.getParameter(o.VIEWPORT),pt=new nn().fromArray(D),At=new nn().fromArray(j);function zt(k,Nt,Tt,It){const yt=new Uint8Array(4),St=o.createTexture();o.bindTexture(k,St),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Rt=0;Rt<Tt;Rt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,It,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Nt+Rt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return St}const tt={};tt[o.TEXTURE_2D]=zt(o.TEXTURE_2D,o.TEXTURE_2D,1),tt[o.TEXTURE_CUBE_MAP]=zt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[o.TEXTURE_2D_ARRAY]=zt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),tt[o.TEXTURE_3D]=zt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),dt(o.DEPTH_TEST),d.setFunc(Cs),se(!1),Qe(A0),dt(o.CULL_FACE),he(da);function dt(k){v[k]!==!0&&(o.enable(k),v[k]=!0)}function Dt(k){v[k]!==!1&&(o.disable(k),v[k]=!1)}function Xt(k,Nt){return _[k]!==Nt?(o.bindFramebuffer(k,Nt),_[k]=Nt,k===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Nt),k===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Ht(k,Nt){let Tt=E,It=!1;if(k){Tt=S.get(Nt),Tt===void 0&&(Tt=[],S.set(Nt,Tt));const yt=k.textures;if(Tt.length!==yt.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let St=0,Rt=yt.length;St<Rt;St++)Tt[St]=o.COLOR_ATTACHMENT0+St;Tt.length=yt.length,It=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,It=!0);It&&o.drawBuffers(Tt)}function de(k){return A!==k?(o.useProgram(k),A=k,!0):!1}const Ke={[Tr]:o.FUNC_ADD,[bS]:o.FUNC_SUBTRACT,[TS]:o.FUNC_REVERSE_SUBTRACT};Ke[AS]=o.MIN,Ke[RS]=o.MAX;const ge={[CS]:o.ZERO,[wS]:o.ONE,[DS]:o.SRC_COLOR,[Ud]:o.SRC_ALPHA,[IS]:o.SRC_ALPHA_SATURATE,[OS]:o.DST_COLOR,[NS]:o.DST_ALPHA,[US]:o.ONE_MINUS_SRC_COLOR,[Nd]:o.ONE_MINUS_SRC_ALPHA,[PS]:o.ONE_MINUS_DST_COLOR,[LS]:o.ONE_MINUS_DST_ALPHA,[zS]:o.CONSTANT_COLOR,[FS]:o.ONE_MINUS_CONSTANT_COLOR,[BS]:o.CONSTANT_ALPHA,[HS]:o.ONE_MINUS_CONSTANT_ALPHA};function he(k,Nt,Tt,It,yt,St,Rt,ne,Le,ye){if(k===da){C===!0&&(Dt(o.BLEND),C=!1);return}if(C===!1&&(dt(o.BLEND),C=!0),k!==ES){if(k!==M||ye!==R){if((x!==Tr||N!==Tr)&&(o.blendEquation(o.FUNC_ADD),x=Tr,N=Tr),ye)switch(k){case As:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Pc:o.blendFunc(o.ONE,o.ONE);break;case R0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case C0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ae("WebGLState: Invalid blending: ",k);break}else switch(k){case As:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Pc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case R0:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case C0:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",k);break}I=null,O=null,z=null,B=null,P.set(0,0,0),K=0,M=k,R=ye}return}yt=yt||Nt,St=St||Tt,Rt=Rt||It,(Nt!==x||yt!==N)&&(o.blendEquationSeparate(Ke[Nt],Ke[yt]),x=Nt,N=yt),(Tt!==I||It!==O||St!==z||Rt!==B)&&(o.blendFuncSeparate(ge[Tt],ge[It],ge[St],ge[Rt]),I=Tt,O=It,z=St,B=Rt),(ne.equals(P)===!1||Le!==K)&&(o.blendColor(ne.r,ne.g,ne.b,Le),P.copy(ne),K=Le),M=k,R=!1}function Re(k,Nt){k.side===ua?Dt(o.CULL_FACE):dt(o.CULL_FACE);let Tt=k.side===kn;Nt&&(Tt=!Tt),se(Tt),k.blending===As&&k.transparent===!1?he(da):he(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),u.setMask(k.colorWrite);const It=k.stencilWrite;h.setTest(It),It&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ye(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?dt(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function se(k){w!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),w=k)}function Qe(k){k!==SS?(dt(o.CULL_FACE),k!==X&&(k===A0?o.cullFace(o.BACK):k===MS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),X=k}function G(k){k!==at&&(L&&o.lineWidth(k),at=k)}function Ye(k,Nt,Tt){k?(dt(o.POLYGON_OFFSET_FILL),(it!==Nt||ct!==Tt)&&(o.polygonOffset(Nt,Tt),it=Nt,ct=Tt)):Dt(o.POLYGON_OFFSET_FILL)}function Me(k){k?dt(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function Ue(k){k===void 0&&(k=o.TEXTURE0+ft-1),lt!==k&&(o.activeTexture(k),lt=k)}function Yt(k,Nt,Tt){Tt===void 0&&(lt===null?Tt=o.TEXTURE0+ft-1:Tt=lt);let It=_t[Tt];It===void 0&&(It={type:void 0,texture:void 0},_t[Tt]=It),(It.type!==k||It.texture!==Nt)&&(lt!==Tt&&(o.activeTexture(Tt),lt=Tt),o.bindTexture(k,Nt||tt[k]),It.type=k,It.texture=Nt)}function U(){const k=_t[lt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function y(){try{o.compressedTexImage2D(...arguments)}catch(k){Ae("WebGLState:",k)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(k){Ae("WebGLState:",k)}}function mt(){try{o.texSubImage2D(...arguments)}catch(k){Ae("WebGLState:",k)}}function Mt(){try{o.texSubImage3D(...arguments)}catch(k){Ae("WebGLState:",k)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(k){Ae("WebGLState:",k)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){Ae("WebGLState:",k)}}function Ct(){try{o.texStorage2D(...arguments)}catch(k){Ae("WebGLState:",k)}}function kt(){try{o.texStorage3D(...arguments)}catch(k){Ae("WebGLState:",k)}}function ee(){try{o.texImage2D(...arguments)}catch(k){Ae("WebGLState:",k)}}function Et(){try{o.texImage3D(...arguments)}catch(k){Ae("WebGLState:",k)}}function bt(k){pt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),pt.copy(k))}function Ft(k){At.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),At.copy(k))}function Pt(k,Nt){let Tt=p.get(Nt);Tt===void 0&&(Tt=new WeakMap,p.set(Nt,Tt));let It=Tt.get(k);It===void 0&&(It=o.getUniformBlockIndex(Nt,k.name),Tt.set(k,It))}function wt(k,Nt){const It=p.get(Nt).get(k);m.get(Nt)!==It&&(o.uniformBlockBinding(Nt,It,k.__bindingPointIndex),m.set(Nt,It))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},lt=null,_t={},_={},S=new WeakMap,E=[],A=null,C=!1,M=null,x=null,I=null,O=null,N=null,z=null,B=null,P=new Fe(0,0,0),K=0,R=!1,w=null,X=null,at=null,it=null,ct=null,pt.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:dt,disable:Dt,bindFramebuffer:Xt,drawBuffers:Ht,useProgram:de,setBlending:he,setMaterial:Re,setFlipSided:se,setCullFace:Qe,setLineWidth:G,setPolygonOffset:Ye,setScissorTest:Me,activeTexture:Ue,bindTexture:Yt,unbindTexture:U,compressedTexImage2D:y,compressedTexImage3D:W,texImage2D:ee,texImage3D:Et,updateUBOMapping:Pt,uniformBlockBinding:wt,texStorage2D:Ct,texStorage3D:kt,texSubImage2D:mt,texSubImage3D:Mt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Zt,scissor:bt,viewport:Ft,reset:le}}function S1(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ve,v=new WeakMap;let _;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,y){return E?new OffscreenCanvas(U,y):Fc("canvas")}function C(U,y,W){let mt=1;const Mt=Yt(U);if((Mt.width>W||Mt.height>W)&&(mt=W/Math.max(Mt.width,Mt.height)),mt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ut=Math.floor(mt*Mt.width),Zt=Math.floor(mt*Mt.height);_===void 0&&(_=A(ut,Zt));const Ct=y?A(ut,Zt):_;return Ct.width=ut,Ct.height=Zt,Ct.getContext("2d").drawImage(U,0,0,ut,Zt),re("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ut+"x"+Zt+")."),Ct}else return"data"in U&&re("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),U;return U}function M(U){return U.generateMipmaps}function x(U){o.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(U,y,W,mt,Mt=!1){if(U!==null){if(o[U]!==void 0)return o[U];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ut=y;if(y===o.RED&&(W===o.FLOAT&&(ut=o.R32F),W===o.HALF_FLOAT&&(ut=o.R16F),W===o.UNSIGNED_BYTE&&(ut=o.R8)),y===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(ut=o.R8UI),W===o.UNSIGNED_SHORT&&(ut=o.R16UI),W===o.UNSIGNED_INT&&(ut=o.R32UI),W===o.BYTE&&(ut=o.R8I),W===o.SHORT&&(ut=o.R16I),W===o.INT&&(ut=o.R32I)),y===o.RG&&(W===o.FLOAT&&(ut=o.RG32F),W===o.HALF_FLOAT&&(ut=o.RG16F),W===o.UNSIGNED_BYTE&&(ut=o.RG8)),y===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(ut=o.RG8UI),W===o.UNSIGNED_SHORT&&(ut=o.RG16UI),W===o.UNSIGNED_INT&&(ut=o.RG32UI),W===o.BYTE&&(ut=o.RG8I),W===o.SHORT&&(ut=o.RG16I),W===o.INT&&(ut=o.RG32I)),y===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),W===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),W===o.UNSIGNED_INT&&(ut=o.RGB32UI),W===o.BYTE&&(ut=o.RGB8I),W===o.SHORT&&(ut=o.RGB16I),W===o.INT&&(ut=o.RGB32I)),y===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),W===o.UNSIGNED_INT&&(ut=o.RGBA32UI),W===o.BYTE&&(ut=o.RGBA8I),W===o.SHORT&&(ut=o.RGBA16I),W===o.INT&&(ut=o.RGBA32I)),y===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),y===o.RGBA){const Zt=Mt?Ic:Ee.getTransfer(mt);W===o.FLOAT&&(ut=o.RGBA32F),W===o.HALF_FLOAT&&(ut=o.RGBA16F),W===o.UNSIGNED_BYTE&&(ut=Zt===ze?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function N(U,y){let W;return U?y===null||y===Bi||y===Ho?W=o.DEPTH24_STENCIL8:y===Pi?W=o.DEPTH32F_STENCIL8:y===Bo&&(W=o.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Bi||y===Ho?W=o.DEPTH_COMPONENT24:y===Pi?W=o.DEPTH_COMPONENT32F:y===Bo&&(W=o.DEPTH_COMPONENT16),W}function z(U,y){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Rn&&U.minFilter!==Nn?Math.log2(Math.max(y.width,y.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?y.mipmaps.length:1}function B(U){const y=U.target;y.removeEventListener("dispose",B),K(y),y.isVideoTexture&&v.delete(y)}function P(U){const y=U.target;y.removeEventListener("dispose",P),w(y)}function K(U){const y=r.get(U);if(y.__webglInit===void 0)return;const W=U.source,mt=S.get(W);if(mt){const Mt=mt[y.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&R(U),Object.keys(mt).length===0&&S.delete(W)}r.remove(U)}function R(U){const y=r.get(U);o.deleteTexture(y.__webglTexture);const W=U.source,mt=S.get(W);delete mt[y.__cacheKey],d.memory.textures--}function w(U){const y=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(y.__webglFramebuffer[mt]))for(let Mt=0;Mt<y.__webglFramebuffer[mt].length;Mt++)o.deleteFramebuffer(y.__webglFramebuffer[mt][Mt]);else o.deleteFramebuffer(y.__webglFramebuffer[mt]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[mt])}else{if(Array.isArray(y.__webglFramebuffer))for(let mt=0;mt<y.__webglFramebuffer.length;mt++)o.deleteFramebuffer(y.__webglFramebuffer[mt]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let mt=0;mt<y.__webglColorRenderbuffer.length;mt++)y.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[mt]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const W=U.textures;for(let mt=0,Mt=W.length;mt<Mt;mt++){const ut=r.get(W[mt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),d.memory.textures--),r.remove(W[mt])}r.remove(U)}let X=0;function at(){X=0}function it(){const U=X;return U>=l.maxTextures&&re("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),X+=1,U}function ct(U){const y=[];return y.push(U.wrapS),y.push(U.wrapT),y.push(U.wrapR||0),y.push(U.magFilter),y.push(U.minFilter),y.push(U.anisotropy),y.push(U.internalFormat),y.push(U.format),y.push(U.type),y.push(U.generateMipmaps),y.push(U.premultiplyAlpha),y.push(U.flipY),y.push(U.unpackAlignment),y.push(U.colorSpace),y.join()}function ft(U,y){const W=r.get(U);if(U.isVideoTexture&&Me(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&W.__version!==U.version){const mt=U.image;if(mt===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(W,U,y);return}}else U.isExternalTexture&&(W.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+y)}function L(U,y){const W=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){tt(W,U,y);return}else U.isExternalTexture&&(W.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+y)}function H(U,y){const W=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){tt(W,U,y);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+y)}function $(U,y){const W=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&W.__version!==U.version){dt(W,U,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+y)}const lt={[Vd]:o.REPEAT,[fa]:o.CLAMP_TO_EDGE,[Xd]:o.MIRRORED_REPEAT},_t={[Rn]:o.NEAREST,[XS]:o.NEAREST_MIPMAP_NEAREST,[rc]:o.NEAREST_MIPMAP_LINEAR,[Nn]:o.LINEAR,[td]:o.LINEAR_MIPMAP_NEAREST,[Rr]:o.LINEAR_MIPMAP_LINEAR},D={[YS]:o.NEVER,[JS]:o.ALWAYS,[jS]:o.LESS,[Ph]:o.LEQUAL,[ZS]:o.EQUAL,[Ih]:o.GEQUAL,[KS]:o.GREATER,[QS]:o.NOTEQUAL};function j(U,y){if(y.type===Pi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Nn||y.magFilter===td||y.magFilter===rc||y.magFilter===Rr||y.minFilter===Nn||y.minFilter===td||y.minFilter===rc||y.minFilter===Rr)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,lt[y.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,lt[y.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,lt[y.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,_t[y.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,_t[y.minFilter]),y.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,D[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Rn||y.minFilter!==rc&&y.minFilter!==Rr||y.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function pt(U,y){let W=!1;U.__webglInit===void 0&&(U.__webglInit=!0,y.addEventListener("dispose",B));const mt=y.source;let Mt=S.get(mt);Mt===void 0&&(Mt={},S.set(mt,Mt));const ut=ct(y);if(ut!==U.__cacheKey){Mt[ut]===void 0&&(Mt[ut]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,W=!0),Mt[ut].usedTimes++;const Zt=Mt[U.__cacheKey];Zt!==void 0&&(Mt[U.__cacheKey].usedTimes--,Zt.usedTimes===0&&R(y)),U.__cacheKey=ut,U.__webglTexture=Mt[ut].texture}return W}function At(U,y,W){return Math.floor(Math.floor(U/W)/y)}function zt(U,y,W,mt){const ut=U.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,W,mt,y.data);else{ut.sort((Et,bt)=>Et.start-bt.start);let Zt=0;for(let Et=1;Et<ut.length;Et++){const bt=ut[Zt],Ft=ut[Et],Pt=bt.start+bt.count,wt=At(Ft.start,y.width,4),le=At(bt.start,y.width,4);Ft.start<=Pt+1&&wt===le&&At(Ft.start+Ft.count-1,y.width,4)===wt?bt.count=Math.max(bt.count,Ft.start+Ft.count-bt.start):(++Zt,ut[Zt]=Ft)}ut.length=Zt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),kt=o.getParameter(o.UNPACK_SKIP_PIXELS),ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let Et=0,bt=ut.length;Et<bt;Et++){const Ft=ut[Et],Pt=Math.floor(Ft.start/4),wt=Math.ceil(Ft.count/4),le=Pt%y.width,k=Math.floor(Pt/y.width),Nt=wt,Tt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,le,k,Nt,Tt,W,mt,y.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ee)}}function tt(U,y,W){let mt=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(mt=o.TEXTURE_3D);const Mt=pt(U,y),ut=y.source;i.bindTexture(mt,U.__webglTexture,o.TEXTURE0+W);const Zt=r.get(ut);if(ut.version!==Zt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+W);const Ct=Ee.getPrimaries(Ee.workingColorSpace),kt=y.colorSpace===Qa?null:Ee.getPrimaries(y.colorSpace),ee=y.colorSpace===Qa||Ct===kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Et=C(y.image,!1,l.maxTextureSize);Et=Ue(y,Et);const bt=u.convert(y.format,y.colorSpace),Ft=u.convert(y.type);let Pt=O(y.internalFormat,bt,Ft,y.colorSpace,y.isVideoTexture);j(mt,y);let wt;const le=y.mipmaps,k=y.isVideoTexture!==!0,Nt=Zt.__version===void 0||Mt===!0,Tt=ut.dataReady,It=z(y,Et);if(y.isDepthTexture)Pt=N(y.format===Cr,y.type),Nt&&(k?i.texStorage2D(o.TEXTURE_2D,1,Pt,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,Pt,Et.width,Et.height,0,bt,Ft,null));else if(y.isDataTexture)if(le.length>0){k&&Nt&&i.texStorage2D(o.TEXTURE_2D,It,Pt,le[0].width,le[0].height);for(let yt=0,St=le.length;yt<St;yt++)wt=le[yt],k?Tt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,wt.width,wt.height,bt,Ft,wt.data):i.texImage2D(o.TEXTURE_2D,yt,Pt,wt.width,wt.height,0,bt,Ft,wt.data);y.generateMipmaps=!1}else k?(Nt&&i.texStorage2D(o.TEXTURE_2D,It,Pt,Et.width,Et.height),Tt&&zt(y,Et,bt,Ft)):i.texImage2D(o.TEXTURE_2D,0,Pt,Et.width,Et.height,0,bt,Ft,Et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){k&&Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,It,Pt,le[0].width,le[0].height,Et.depth);for(let yt=0,St=le.length;yt<St;yt++)if(wt=le[yt],y.format!==Ai)if(bt!==null)if(k){if(Tt)if(y.layerUpdates.size>0){const Rt=$0(wt.width,wt.height,y.format,y.type);for(const ne of y.layerUpdates){const Le=wt.data.subarray(ne*Rt/wt.data.BYTES_PER_ELEMENT,(ne+1)*Rt/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ne,wt.width,wt.height,1,bt,Le)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,wt.width,wt.height,Et.depth,bt,wt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Pt,wt.width,wt.height,Et.depth,0,wt.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Tt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,wt.width,wt.height,Et.depth,bt,Ft,wt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Pt,wt.width,wt.height,Et.depth,0,bt,Ft,wt.data)}else{k&&Nt&&i.texStorage2D(o.TEXTURE_2D,It,Pt,le[0].width,le[0].height);for(let yt=0,St=le.length;yt<St;yt++)wt=le[yt],y.format!==Ai?bt!==null?k?Tt&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,wt.width,wt.height,bt,wt.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Pt,wt.width,wt.height,0,wt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Tt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,wt.width,wt.height,bt,Ft,wt.data):i.texImage2D(o.TEXTURE_2D,yt,Pt,wt.width,wt.height,0,bt,Ft,wt.data)}else if(y.isDataArrayTexture)if(k){if(Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,It,Pt,Et.width,Et.height,Et.depth),Tt)if(y.layerUpdates.size>0){const yt=$0(Et.width,Et.height,y.format,y.type);for(const St of y.layerUpdates){const Rt=Et.data.subarray(St*yt/Et.data.BYTES_PER_ELEMENT,(St+1)*yt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,Et.width,Et.height,1,bt,Ft,Rt)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,bt,Ft,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pt,Et.width,Et.height,Et.depth,0,bt,Ft,Et.data);else if(y.isData3DTexture)k?(Nt&&i.texStorage3D(o.TEXTURE_3D,It,Pt,Et.width,Et.height,Et.depth),Tt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,bt,Ft,Et.data)):i.texImage3D(o.TEXTURE_3D,0,Pt,Et.width,Et.height,Et.depth,0,bt,Ft,Et.data);else if(y.isFramebufferTexture){if(Nt)if(k)i.texStorage2D(o.TEXTURE_2D,It,Pt,Et.width,Et.height);else{let yt=Et.width,St=Et.height;for(let Rt=0;Rt<It;Rt++)i.texImage2D(o.TEXTURE_2D,Rt,Pt,yt,St,0,bt,Ft,null),yt>>=1,St>>=1}}else if(le.length>0){if(k&&Nt){const yt=Yt(le[0]);i.texStorage2D(o.TEXTURE_2D,It,Pt,yt.width,yt.height)}for(let yt=0,St=le.length;yt<St;yt++)wt=le[yt],k?Tt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,bt,Ft,wt):i.texImage2D(o.TEXTURE_2D,yt,Pt,bt,Ft,wt);y.generateMipmaps=!1}else if(k){if(Nt){const yt=Yt(Et);i.texStorage2D(o.TEXTURE_2D,It,Pt,yt.width,yt.height)}Tt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt,Ft,Et)}else i.texImage2D(o.TEXTURE_2D,0,Pt,bt,Ft,Et);M(y)&&x(mt),Zt.__version=ut.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function dt(U,y,W){if(y.image.length!==6)return;const mt=pt(U,y),Mt=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+W);const ut=r.get(Mt);if(Mt.version!==ut.__version||mt===!0){i.activeTexture(o.TEXTURE0+W);const Zt=Ee.getPrimaries(Ee.workingColorSpace),Ct=y.colorSpace===Qa?null:Ee.getPrimaries(y.colorSpace),kt=y.colorSpace===Qa||Zt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const ee=y.isCompressedTexture||y.image[0].isCompressedTexture,Et=y.image[0]&&y.image[0].isDataTexture,bt=[];for(let St=0;St<6;St++)!ee&&!Et?bt[St]=C(y.image[St],!0,l.maxCubemapSize):bt[St]=Et?y.image[St].image:y.image[St],bt[St]=Ue(y,bt[St]);const Ft=bt[0],Pt=u.convert(y.format,y.colorSpace),wt=u.convert(y.type),le=O(y.internalFormat,Pt,wt,y.colorSpace),k=y.isVideoTexture!==!0,Nt=ut.__version===void 0||mt===!0,Tt=Mt.dataReady;let It=z(y,Ft);j(o.TEXTURE_CUBE_MAP,y);let yt;if(ee){k&&Nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,It,le,Ft.width,Ft.height);for(let St=0;St<6;St++){yt=bt[St].mipmaps;for(let Rt=0;Rt<yt.length;Rt++){const ne=yt[Rt];y.format!==Ai?Pt!==null?k?Tt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt,0,0,ne.width,ne.height,Pt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt,le,ne.width,ne.height,0,ne.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt,0,0,ne.width,ne.height,Pt,wt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt,le,ne.width,ne.height,0,Pt,wt,ne.data)}}}else{if(yt=y.mipmaps,k&&Nt){yt.length>0&&It++;const St=Yt(bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,It,le,St.width,St.height)}for(let St=0;St<6;St++)if(Et){k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,bt[St].width,bt[St].height,Pt,wt,bt[St].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,le,bt[St].width,bt[St].height,0,Pt,wt,bt[St].data);for(let Rt=0;Rt<yt.length;Rt++){const Le=yt[Rt].image[St].image;k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt+1,0,0,Le.width,Le.height,Pt,wt,Le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt+1,le,Le.width,Le.height,0,Pt,wt,Le.data)}}else{k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Pt,wt,bt[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,le,Pt,wt,bt[St]);for(let Rt=0;Rt<yt.length;Rt++){const ne=yt[Rt];k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt+1,0,0,Pt,wt,ne.image[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt+1,le,Pt,wt,ne.image[St])}}}M(y)&&x(o.TEXTURE_CUBE_MAP),ut.__version=Mt.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function Dt(U,y,W,mt,Mt,ut){const Zt=u.convert(W.format,W.colorSpace),Ct=u.convert(W.type),kt=O(W.internalFormat,Zt,Ct,W.colorSpace),ee=r.get(y),Et=r.get(W);if(Et.__renderTarget=y,!ee.__hasExternalTextures){const bt=Math.max(1,y.width>>ut),Ft=Math.max(1,y.height>>ut);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,ut,kt,bt,Ft,y.depth,0,Zt,Ct,null):i.texImage2D(Mt,ut,kt,bt,Ft,0,Zt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Ye(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,Mt,Et.__webglTexture,0,G(y)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,Mt,Et.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Xt(U,y,W){if(o.bindRenderbuffer(o.RENDERBUFFER,U),y.depthBuffer){const mt=y.depthTexture,Mt=mt&&mt.isDepthTexture?mt.type:null,ut=N(y.stencilBuffer,Mt),Zt=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ye(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(y),ut,y.width,y.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(y),ut,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,ut,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,U)}else{const mt=y.textures;for(let Mt=0;Mt<mt.length;Mt++){const ut=mt[Mt],Zt=u.convert(ut.format,ut.colorSpace),Ct=u.convert(ut.type),kt=O(ut.internalFormat,Zt,Ct,ut.colorSpace);Ye(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(y),kt,y.width,y.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(y),kt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,kt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(U,y,W){const mt=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Mt=r.get(y.depthTexture);if(Mt.__renderTarget=y,(!Mt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),mt){if(Mt.__webglInit===void 0&&(Mt.__webglInit=!0,y.depthTexture.addEventListener("dispose",B)),Mt.__webglTexture===void 0){Mt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Mt.__webglTexture),j(o.TEXTURE_CUBE_MAP,y.depthTexture);const ee=u.convert(y.depthTexture.format),Et=u.convert(y.depthTexture.type);let bt;y.depthTexture.format===ga?bt=o.DEPTH_COMPONENT24:y.depthTexture.format===Cr&&(bt=o.DEPTH24_STENCIL8);for(let Ft=0;Ft<6;Ft++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,bt,y.width,y.height,0,ee,Et,null)}}else ft(y.depthTexture,0);const ut=Mt.__webglTexture,Zt=G(y),Ct=mt?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,kt=y.depthTexture.format===Cr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===ga)Ye(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,kt,Ct,ut,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,kt,Ct,ut,0);else if(y.depthTexture.format===Cr)Ye(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,kt,Ct,ut,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,kt,Ct,ut,0);else throw new Error("Unknown depthTexture format")}function de(U){const y=r.get(U),W=U.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==U.depthTexture){const mt=U.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),mt){const Mt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,mt.removeEventListener("dispose",Mt)};mt.addEventListener("dispose",Mt),y.__depthDisposeCallback=Mt}y.__boundDepthTexture=mt}if(U.depthTexture&&!y.__autoAllocateDepthBuffer)if(W)for(let mt=0;mt<6;mt++)Ht(y.__webglFramebuffer[mt],U,mt);else{const mt=U.texture.mipmaps;mt&&mt.length>0?Ht(y.__webglFramebuffer[0],U,0):Ht(y.__webglFramebuffer,U,0)}else if(W){y.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[mt]),y.__webglDepthbuffer[mt]===void 0)y.__webglDepthbuffer[mt]=o.createRenderbuffer(),Xt(y.__webglDepthbuffer[mt],U,!1);else{const Mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=y.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,ut)}}else{const mt=U.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),Xt(y.__webglDepthbuffer,U,!1);else{const Mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ke(U,y,W){const mt=r.get(U);y!==void 0&&Dt(mt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&de(U)}function ge(U){const y=U.texture,W=r.get(U),mt=r.get(y);U.addEventListener("dispose",P);const Mt=U.textures,ut=U.isWebGLCubeRenderTarget===!0,Zt=Mt.length>1;if(Zt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=y.version,d.memory.textures++),ut){W.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[Ct]=[];for(let kt=0;kt<y.mipmaps.length;kt++)W.__webglFramebuffer[Ct][kt]=o.createFramebuffer()}else W.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ct=0;Ct<y.mipmaps.length;Ct++)W.__webglFramebuffer[Ct]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let Ct=0,kt=Mt.length;Ct<kt;Ct++){const ee=r.get(Mt[Ct]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&Ye(U)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ct=0;Ct<Mt.length;Ct++){const kt=Mt[Ct];W.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Ct]);const ee=u.convert(kt.format,kt.colorSpace),Et=u.convert(kt.type),bt=O(kt.internalFormat,ee,Et,kt.colorSpace,U.isXRRenderTarget===!0),Ft=G(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ft,bt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,W.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Xt(W.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),j(o.TEXTURE_CUBE_MAP,y);for(let Ct=0;Ct<6;Ct++)if(y.mipmaps&&y.mipmaps.length>0)for(let kt=0;kt<y.mipmaps.length;kt++)Dt(W.__webglFramebuffer[Ct][kt],U,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,kt);else Dt(W.__webglFramebuffer[Ct],U,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(y)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Ct=0,kt=Mt.length;Ct<kt;Ct++){const ee=Mt[Ct],Et=r.get(ee);let bt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(bt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(bt,Et.__webglTexture),j(bt,ee),Dt(W.__webglFramebuffer,U,ee,o.COLOR_ATTACHMENT0+Ct,bt,0),M(ee)&&x(bt)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,mt.__webglTexture),j(Ct,y),y.mipmaps&&y.mipmaps.length>0)for(let kt=0;kt<y.mipmaps.length;kt++)Dt(W.__webglFramebuffer[kt],U,y,o.COLOR_ATTACHMENT0,Ct,kt);else Dt(W.__webglFramebuffer,U,y,o.COLOR_ATTACHMENT0,Ct,0);M(y)&&x(Ct),i.unbindTexture()}U.depthBuffer&&de(U)}function he(U){const y=U.textures;for(let W=0,mt=y.length;W<mt;W++){const Mt=y[W];if(M(Mt)){const ut=I(U),Zt=r.get(Mt).__webglTexture;i.bindTexture(ut,Zt),x(ut),i.unbindTexture()}}}const Re=[],se=[];function Qe(U){if(U.samples>0){if(Ye(U)===!1){const y=U.textures,W=U.width,mt=U.height;let Mt=o.COLOR_BUFFER_BIT;const ut=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=r.get(U),Ct=y.length>1;if(Ct)for(let ee=0;ee<y.length;ee++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const kt=U.texture.mipmaps;kt&&kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ee=0;ee<y.length;ee++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const Et=r.get(y[ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,W,mt,0,0,W,mt,Mt,o.NEAREST),m===!0&&(Re.length=0,se.length=0,Re.push(o.COLOR_ATTACHMENT0+ee),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Re.push(ut),se.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,se)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Re))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let ee=0;ee<y.length;ee++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const Et=r.get(y[ee]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,Et,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const y=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function G(U){return Math.min(l.maxSamples,U.samples)}function Ye(U){const y=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Me(U){const y=d.render.frame;v.get(U)!==y&&(v.set(U,y),U.update())}function Ue(U,y){const W=U.colorSpace,mt=U.format,Mt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||W!==Us&&W!==Qa&&(Ee.getTransfer(W)===ze?(mt!==Ai||Mt!==pi)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",W)),y}function Yt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=it,this.resetTextureUnits=at,this.setTexture2D=ft,this.setTexture2DArray=L,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=Ke,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function M1(o,e){function i(r,l=Qa){let u;const d=Ee.getTransfer(l);if(r===pi)return o.UNSIGNED_BYTE;if(r===Dh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Uh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===P_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===I_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===L_)return o.BYTE;if(r===O_)return o.SHORT;if(r===Bo)return o.UNSIGNED_SHORT;if(r===wh)return o.INT;if(r===Bi)return o.UNSIGNED_INT;if(r===Pi)return o.FLOAT;if(r===ma)return o.HALF_FLOAT;if(r===z_)return o.ALPHA;if(r===F_)return o.RGB;if(r===Ai)return o.RGBA;if(r===ga)return o.DEPTH_COMPONENT;if(r===Cr)return o.DEPTH_STENCIL;if(r===B_)return o.RED;if(r===Nh)return o.RED_INTEGER;if(r===Ds)return o.RG;if(r===Lh)return o.RG_INTEGER;if(r===Oh)return o.RGBA_INTEGER;if(r===Dc||r===Uc||r===Nc||r===Lc)if(d===ze)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Dc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Dc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Nc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kd||r===Wd||r===qd||r===Yd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===kd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Wd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===th)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===jd||r===Zd)return d===ze?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Kd)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Qd)return u.COMPRESSED_R11_EAC;if(r===Jd)return u.COMPRESSED_SIGNED_R11_EAC;if(r===$d)return u.COMPRESSED_RG11_EAC;if(r===th)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===eh||r===nh||r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===eh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ih)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ah)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===oh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===lh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ch)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===uh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===hh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ph)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mh||r===gh||r===_h)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===mh)return d===ze?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_h)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===vh||r===xh||r===Sh||r===Mh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===vh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===xh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Sh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ho?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const y1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class b1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new $_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Hi({vertexShader:y1,fragmentShader:E1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new va(new Gc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T1 extends Ls{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,v=null,_=null,S=null,E=null,A=null;const C=typeof XRWebGLBinding<"u",M=new b1,x={},I=i.getContextAttributes();let O=null,N=null;const z=[],B=[],P=new Ve;let K=null;const R=new hi;R.viewport=new nn;const w=new hi;w.viewport=new nn;const X=[R,w],at=new PM;let it=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let dt=z[tt];return dt===void 0&&(dt=new Ed,z[tt]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(tt){let dt=z[tt];return dt===void 0&&(dt=new Ed,z[tt]=dt),dt.getGripSpace()},this.getHand=function(tt){let dt=z[tt];return dt===void 0&&(dt=new Ed,z[tt]=dt),dt.getHandSpace()};function ft(tt){const dt=B.indexOf(tt.inputSource);if(dt===-1)return;const Dt=z[dt];Dt!==void 0&&(Dt.update(tt.inputSource,tt.frame,p||d),Dt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function L(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",H);for(let tt=0;tt<z.length;tt++){const dt=B[tt];dt!==null&&(B[tt]=null,z[tt].disconnect(dt))}it=null,ct=null,M.reset();for(const tt in x)delete x[tt];e.setRenderTarget(O),E=null,S=null,_=null,l=null,N=null,zt.stop(),r.isPresenting=!1,e.setPixelRatio(K),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){u=tt,r.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){h=tt,r.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",L),l.addEventListener("inputsourceschange",H),I.xrCompatible!==!0&&await i.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Xt=null,Ht=null;I.depth&&(Ht=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=I.stencil?Cr:ga,Xt=I.stencil?Ho:Bi);const de={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:u};_=this.getBinding(),S=_.createProjectionLayer(de),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),N=new Fi(S.textureWidth,S.textureHeight,{format:Ai,type:pi,depthTexture:new Vo(S.textureWidth,S.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Dt={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new Fi(E.framebufferWidth,E.framebufferHeight,{format:Ai,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),zt.setContext(l),zt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(tt){for(let dt=0;dt<tt.removed.length;dt++){const Dt=tt.removed[dt],Xt=B.indexOf(Dt);Xt>=0&&(B[Xt]=null,z[Xt].disconnect(Dt))}for(let dt=0;dt<tt.added.length;dt++){const Dt=tt.added[dt];let Xt=B.indexOf(Dt);if(Xt===-1){for(let de=0;de<z.length;de++)if(de>=B.length){B.push(Dt),Xt=de;break}else if(B[de]===null){B[de]=Dt,Xt=de;break}if(Xt===-1)break}const Ht=z[Xt];Ht&&Ht.connect(Dt)}}const $=new rt,lt=new rt;function _t(tt,dt,Dt){$.setFromMatrixPosition(dt.matrixWorld),lt.setFromMatrixPosition(Dt.matrixWorld);const Xt=$.distanceTo(lt),Ht=dt.projectionMatrix.elements,de=Dt.projectionMatrix.elements,Ke=Ht[14]/(Ht[10]-1),ge=Ht[14]/(Ht[10]+1),he=(Ht[9]+1)/Ht[5],Re=(Ht[9]-1)/Ht[5],se=(Ht[8]-1)/Ht[0],Qe=(de[8]+1)/de[0],G=Ke*se,Ye=Ke*Qe,Me=Xt/(-se+Qe),Ue=Me*-se;if(dt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Ue),tt.translateZ(Me),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Ht[10]===-1)tt.projectionMatrix.copy(dt.projectionMatrix),tt.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Yt=Ke+Me,U=ge+Me,y=G-Ue,W=Ye+(Xt-Ue),mt=he*ge/U*Yt,Mt=Re*ge/U*Yt;tt.projectionMatrix.makePerspective(y,W,mt,Mt,Yt,U),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function D(tt,dt){dt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(dt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let dt=tt.near,Dt=tt.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(Dt=M.depthFar)),at.near=w.near=R.near=dt,at.far=w.far=R.far=Dt,(it!==at.near||ct!==at.far)&&(l.updateRenderState({depthNear:at.near,depthFar:at.far}),it=at.near,ct=at.far),at.layers.mask=tt.layers.mask|6,R.layers.mask=at.layers.mask&3,w.layers.mask=at.layers.mask&5;const Xt=tt.parent,Ht=at.cameras;D(at,Xt);for(let de=0;de<Ht.length;de++)D(Ht[de],Xt);Ht.length===2?_t(at,R,w):at.projectionMatrix.copy(R.projectionMatrix),j(tt,at,Xt)};function j(tt,dt,Dt){Dt===null?tt.matrix.copy(dt.matrixWorld):(tt.matrix.copy(Dt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(dt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(dt.projectionMatrix),tt.projectionMatrixInverse.copy(dt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=yh*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function(tt){m=tt,S!==null&&(S.fixedFoveation=tt),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(at)},this.getCameraTexture=function(tt){return x[tt]};let pt=null;function At(tt,dt){if(v=dt.getViewerPose(p||d),A=dt,v!==null){const Dt=v.views;E!==null&&(e.setRenderTargetFramebuffer(N,E.framebuffer),e.setRenderTarget(N));let Xt=!1;Dt.length!==at.cameras.length&&(at.cameras.length=0,Xt=!0);for(let ge=0;ge<Dt.length;ge++){const he=Dt[ge];let Re=null;if(E!==null)Re=E.getViewport(he);else{const Qe=_.getViewSubImage(S,he);Re=Qe.viewport,ge===0&&(e.setRenderTargetTextures(N,Qe.colorTexture,Qe.depthStencilTexture),e.setRenderTarget(N))}let se=X[ge];se===void 0&&(se=new hi,se.layers.enable(ge),se.viewport=new nn,X[ge]=se),se.matrix.fromArray(he.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(he.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Re.x,Re.y,Re.width,Re.height),ge===0&&(at.matrix.copy(se.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),Xt===!0&&at.cameras.push(se)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const ge=_.getDepthInformation(Dt[0]);ge&&ge.isValid&&ge.texture&&M.init(ge,l.renderState)}if(Ht&&Ht.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let ge=0;ge<Dt.length;ge++){const he=Dt[ge].camera;if(he){let Re=x[he];Re||(Re=new $_,x[he]=Re);const se=_.getCameraImage(he);Re.sourceTexture=se}}}}for(let Dt=0;Dt<z.length;Dt++){const Xt=B[Dt],Ht=z[Dt];Xt!==null&&Ht!==void 0&&Ht.update(Xt,dt,p||d)}pt&&pt(tt,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),A=null}const zt=new ev;zt.setAnimationLoop(At),this.setAnimationLoop=function(tt){pt=tt},this.dispose=function(){}}}const Er=new _a,A1=new an;function R1(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,j_(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,I,O,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(M,x):x.isMeshToonMaterial?(u(M,x),_(M,x)):x.isMeshPhongMaterial?(u(M,x),v(M,x)):x.isMeshStandardMaterial?(u(M,x),S(M,x),x.isMeshPhysicalMaterial&&E(M,x,N)):x.isMeshMatcapMaterial?(u(M,x),A(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),C(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?m(M,x,I,O):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===kn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===kn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const I=e.get(x),O=I.envMap,N=I.envMapRotation;O&&(M.envMap.value=O,Er.copy(N),Er.x*=-1,Er.y*=-1,Er.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),M.envMapRotation.value.setFromMatrix4(A1.makeRotationFromEuler(Er)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,I,O){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*I,M.scale.value=O*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function S(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function E(M,x,I){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,x){x.matcap&&(M.matcap.value=x.matcap)}function C(M,x){const I=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function C1(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,O){const N=O.program;r.uniformBlockBinding(I,N)}function p(I,O){let N=l[I.id];N===void 0&&(A(I),N=v(I),l[I.id]=N,I.addEventListener("dispose",M));const z=O.program;r.updateUBOMapping(I,z);const B=e.render.frame;u[I.id]!==B&&(S(I),u[I.id]=B)}function v(I){const O=_();I.__bindingPointIndex=O;const N=o.createBuffer(),z=I.__size,B=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,z,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,N),N}function _(){for(let I=0;I<h;I++)if(d.indexOf(I)===-1)return d.push(I),I;return Ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(I){const O=l[I.id],N=I.uniforms,z=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let B=0,P=N.length;B<P;B++){const K=Array.isArray(N[B])?N[B]:[N[B]];for(let R=0,w=K.length;R<w;R++){const X=K[R];if(E(X,B,R,z)===!0){const at=X.__offset,it=Array.isArray(X.value)?X.value:[X.value];let ct=0;for(let ft=0;ft<it.length;ft++){const L=it[ft],H=C(L);typeof L=="number"||typeof L=="boolean"?(X.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,at+ct,X.__data)):L.isMatrix3?(X.__data[0]=L.elements[0],X.__data[1]=L.elements[1],X.__data[2]=L.elements[2],X.__data[3]=0,X.__data[4]=L.elements[3],X.__data[5]=L.elements[4],X.__data[6]=L.elements[5],X.__data[7]=0,X.__data[8]=L.elements[6],X.__data[9]=L.elements[7],X.__data[10]=L.elements[8],X.__data[11]=0):(L.toArray(X.__data,ct),ct+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,at,X.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(I,O,N,z){const B=I.value,P=O+"_"+N;if(z[P]===void 0)return typeof B=="number"||typeof B=="boolean"?z[P]=B:z[P]=B.clone(),!0;{const K=z[P];if(typeof B=="number"||typeof B=="boolean"){if(K!==B)return z[P]=B,!0}else if(K.equals(B)===!1)return K.copy(B),!0}return!1}function A(I){const O=I.uniforms;let N=0;const z=16;for(let P=0,K=O.length;P<K;P++){const R=Array.isArray(O[P])?O[P]:[O[P]];for(let w=0,X=R.length;w<X;w++){const at=R[w],it=Array.isArray(at.value)?at.value:[at.value];for(let ct=0,ft=it.length;ct<ft;ct++){const L=it[ct],H=C(L),$=N%z,lt=$%H.boundary,_t=$+lt;N+=lt,_t!==0&&z-_t<H.storage&&(N+=z-_t),at.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=N,N+=H.storage}}}const B=N%z;return B>0&&(N+=z-B),I.__size=N,I.__cache={},this}function C(I){const O={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(O.boundary=4,O.storage=4):I.isVector2?(O.boundary=8,O.storage=8):I.isVector3||I.isColor?(O.boundary=16,O.storage=12):I.isVector4?(O.boundary=16,O.storage=16):I.isMatrix3?(O.boundary=48,O.storage=48):I.isMatrix4?(O.boundary=64,O.storage=64):I.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",I),O}function M(I){const O=I.target;O.removeEventListener("dispose",M);const N=d.indexOf(O.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function x(){for(const I in l)o.deleteBuffer(l[I]);d=[],l={},u={}}return{bind:m,update:p,dispose:x}}const w1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function D1(){return Li===null&&(Li=new AM(w1,16,16,Ds,ma),Li.name="DFG_LUT",Li.minFilter=Nn,Li.magFilter=Nn,Li.wrapS=fa,Li.wrapT=fa,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class U1{constructor(e={}){const{canvas:i=$S(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:E=pi}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=d;const C=E,M=new Set([Oh,Lh,Nh]),x=new Set([pi,Bi,Bo,Ho,Dh,Uh]),I=new Uint32Array(4),O=new Int32Array(4);let N=null,z=null;const B=[],P=[];let K=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let w=!1;this._outputColorSpace=di;let X=0,at=0,it=null,ct=-1,ft=null;const L=new nn,H=new nn;let $=null;const lt=new Fe(0);let _t=0,D=i.width,j=i.height,pt=1,At=null,zt=null;const tt=new nn(0,0,D,j),dt=new nn(0,0,D,j);let Dt=!1;const Xt=new J_;let Ht=!1,de=!1;const Ke=new an,ge=new rt,he=new nn,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function Qe(){return it===null?pt:1}let G=r;function Ye(T,q){return i.getContext(T,q)}try{const T={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ch}`),i.addEventListener("webglcontextlost",ne,!1),i.addEventListener("webglcontextrestored",Le,!1),i.addEventListener("webglcontextcreationerror",ye,!1),G===null){const q="webgl2";if(G=Ye(q,T),G===null)throw Ye(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Ae("WebGLRenderer: "+T.message),T}let Me,Ue,Yt,U,y,W,mt,Mt,ut,Zt,Ct,kt,ee,Et,bt,Ft,Pt,wt,le,k,Nt,Tt,It,yt;function St(){Me=new Db(G),Me.init(),Tt=new M1(G,Me),Ue=new Mb(G,Me,e,Tt),Yt=new x1(G,Me),Ue.reversedDepthBuffer&&S&&Yt.buffers.depth.setReversed(!0),U=new Lb(G),y=new a1,W=new S1(G,Me,Yt,y,Ue,Tt,U),mt=new Eb(R),Mt=new wb(R),ut=new zM(G),It=new xb(G,ut),Zt=new Ub(G,ut,U,It),Ct=new Pb(G,Zt,ut,U),le=new Ob(G,Ue,W),Ft=new yb(y),kt=new i1(R,mt,Mt,Me,Ue,It,Ft),ee=new R1(R,y),Et=new s1,bt=new d1(Me),wt=new vb(R,mt,Mt,Yt,Ct,A,m),Pt=new _1(R,Ct,Ue),yt=new C1(G,U,Ue,Yt),k=new Sb(G,Me,U),Nt=new Nb(G,Me,U),U.programs=kt.programs,R.capabilities=Ue,R.extensions=Me,R.properties=y,R.renderLists=Et,R.shadowMap=Pt,R.state=Yt,R.info=U}St(),C!==pi&&(K=new zb(C,i.width,i.height,l,u));const Rt=new T1(R,G);this.xr=Rt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=Me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(T){T!==void 0&&(pt=T,this.setSize(D,j,!1))},this.getSize=function(T){return T.set(D,j)},this.setSize=function(T,q,st=!0){if(Rt.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}D=T,j=q,i.width=Math.floor(T*pt),i.height=Math.floor(q*pt),st===!0&&(i.style.width=T+"px",i.style.height=q+"px"),K!==null&&K.setSize(i.width,i.height),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(D*pt,j*pt).floor()},this.setDrawingBufferSize=function(T,q,st){D=T,j=q,pt=st,i.width=Math.floor(T*st),i.height=Math.floor(q*st),this.setViewport(0,0,T,q)},this.setEffects=function(T){if(C===pi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let q=0;q<T.length;q++)if(T[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}K.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(tt)},this.setViewport=function(T,q,st,et){T.isVector4?tt.set(T.x,T.y,T.z,T.w):tt.set(T,q,st,et),Yt.viewport(L.copy(tt).multiplyScalar(pt).round())},this.getScissor=function(T){return T.copy(dt)},this.setScissor=function(T,q,st,et){T.isVector4?dt.set(T.x,T.y,T.z,T.w):dt.set(T,q,st,et),Yt.scissor(H.copy(dt).multiplyScalar(pt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(T){Yt.setScissorTest(Dt=T)},this.setOpaqueSort=function(T){At=T},this.setTransparentSort=function(T){zt=T},this.getClearColor=function(T){return T.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(T=!0,q=!0,st=!0){let et=0;if(T){let Z=!1;if(it!==null){const Ut=it.texture.format;Z=M.has(Ut)}if(Z){const Ut=it.texture.type,Bt=x.has(Ut),Lt=wt.getClearColor(),Gt=wt.getClearAlpha(),Wt=Lt.r,Jt=Lt.g,qt=Lt.b;Bt?(I[0]=Wt,I[1]=Jt,I[2]=qt,I[3]=Gt,G.clearBufferuiv(G.COLOR,0,I)):(O[0]=Wt,O[1]=Jt,O[2]=qt,O[3]=Gt,G.clearBufferiv(G.COLOR,0,O))}else et|=G.COLOR_BUFFER_BIT}q&&(et|=G.DEPTH_BUFFER_BIT),st&&(et|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ne,!1),i.removeEventListener("webglcontextrestored",Le,!1),i.removeEventListener("webglcontextcreationerror",ye,!1),wt.dispose(),Et.dispose(),bt.dispose(),y.dispose(),mt.dispose(),Mt.dispose(),Ct.dispose(),It.dispose(),yt.dispose(),kt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Ur),Rt.removeEventListener("sessionend",zs),Ci.stop()};function ne(T){T.preventDefault(),L0("WebGLRenderer: Context Lost."),w=!0}function Le(){L0("WebGLRenderer: Context Restored."),w=!1;const T=U.autoReset,q=Pt.enabled,st=Pt.autoUpdate,et=Pt.needsUpdate,Z=Pt.type;St(),U.autoReset=T,Pt.enabled=q,Pt.autoUpdate=st,Pt.needsUpdate=et,Pt.type=Z}function ye(T){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Cn(T){const q=T.target;q.removeEventListener("dispose",Cn),gi(q)}function gi(T){jo(T),y.remove(T)}function jo(T){const q=y.get(T).programs;q!==void 0&&(q.forEach(function(st){kt.releaseProgram(st)}),T.isShaderMaterial&&kt.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,st,et,Z,Ut){q===null&&(q=Re);const Bt=Z.isMesh&&Z.matrixWorld.determinant()<0,Lt=tr(T,q,st,et,Z);Yt.setMaterial(et,Bt);let Gt=st.index,Wt=1;if(et.wireframe===!0){if(Gt=Zt.getWireframeAttribute(st),Gt===void 0)return;Wt=2}const Jt=st.drawRange,qt=st.attributes.position;let $t=Jt.start*Wt,Ce=(Jt.start+Jt.count)*Wt;Ut!==null&&($t=Math.max($t,Ut.start*Wt),Ce=Math.min(Ce,(Ut.start+Ut.count)*Wt)),Gt!==null?($t=Math.max($t,0),Ce=Math.min(Ce,Gt.count)):qt!=null&&($t=Math.max($t,0),Ce=Math.min(Ce,qt.count));const je=Ce-$t;if(je<0||je===1/0)return;It.setup(Z,et,Lt,st,Gt);let ke,Ne=k;if(Gt!==null&&(ke=ut.get(Gt),Ne=Nt,Ne.setIndex(ke)),Z.isMesh)et.wireframe===!0?(Yt.setLineWidth(et.wireframeLinewidth*Qe()),Ne.setMode(G.LINES)):Ne.setMode(G.TRIANGLES);else if(Z.isLine){let Kt=et.linewidth;Kt===void 0&&(Kt=1),Yt.setLineWidth(Kt*Qe()),Z.isLineSegments?Ne.setMode(G.LINES):Z.isLineLoop?Ne.setMode(G.LINE_LOOP):Ne.setMode(G.LINE_STRIP)}else Z.isPoints?Ne.setMode(G.POINTS):Z.isSprite&&Ne.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Go("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Ne.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Kt=Z._multiDrawStarts,we=Z._multiDrawCounts,ie=Z._multiDrawCount,vn=Gt?ut.get(Gt).bytesPerElement:1,Gi=y.get(et).currentProgram.getUniforms();for(let xn=0;xn<ie;xn++)Gi.setValue(G,"_gl_DrawID",xn),Ne.render(Kt[xn]/vn,we[xn])}else if(Z.isInstancedMesh)Ne.renderInstances($t,je,Z.count);else if(st.isInstancedBufferGeometry){const Kt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,we=Math.min(st.instanceCount,Kt);Ne.renderInstances($t,je,we)}else Ne.render($t,je)};function Ps(T,q,st){T.transparent===!0&&T.side===ua&&T.forceSinglePass===!1?(T.side=kn,T.needsUpdate=!0,Lr(T,q,st),T.side=$a,T.needsUpdate=!0,Lr(T,q,st),T.side=ua):Lr(T,q,st)}this.compile=function(T,q,st=null){st===null&&(st=T),z=bt.get(st),z.init(q),P.push(z),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(z.pushLight(Z),Z.castShadow&&z.pushShadow(Z))}),T!==st&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(z.pushLight(Z),Z.castShadow&&z.pushShadow(Z))}),z.setupLights();const et=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ut=Z.material;if(Ut)if(Array.isArray(Ut))for(let Bt=0;Bt<Ut.length;Bt++){const Lt=Ut[Bt];Ps(Lt,st,Z),et.add(Lt)}else Ps(Ut,st,Z),et.add(Ut)}),z=P.pop(),et},this.compileAsync=function(T,q,st=null){const et=this.compile(T,q,st);return new Promise(Z=>{function Ut(){if(et.forEach(function(Bt){y.get(Bt).currentProgram.isReady()&&et.delete(Bt)}),et.size===0){Z(T);return}setTimeout(Ut,10)}Me.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let Dr=null;function Is(T){Dr&&Dr(T)}function Ur(){Ci.stop()}function zs(){Ci.start()}const Ci=new ev;Ci.setAnimationLoop(Is),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(T){Dr=T,Rt.setAnimationLoop(T),T===null?Ci.stop():Ci.start()},Rt.addEventListener("sessionstart",Ur),Rt.addEventListener("sessionend",zs),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const st=Rt.enabled===!0&&Rt.isPresenting===!0,et=K!==null&&(it===null||st)&&K.begin(R,it);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(K===null||K.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(q),q=Rt.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,q,it),z=bt.get(T,P.length),z.init(q),P.push(z),Ke.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Xt.setFromProjectionMatrix(Ke,Ii,q.reversedDepth),de=this.localClippingEnabled,Ht=Ft.init(this.clippingPlanes,de),N=Et.get(T,B.length),N.init(),B.push(N),Rt.enabled===!0&&Rt.isPresenting===!0){const Bt=R.xr.getDepthSensingMesh();Bt!==null&&ei(Bt,q,-1/0,R.sortObjects)}ei(T,q,0,R.sortObjects),N.finish(),R.sortObjects===!0&&N.sort(At,zt),se=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,se&&wt.addToRenderList(N,T),this.info.render.frame++,Ht===!0&&Ft.beginShadows();const Z=z.state.shadowsArray;if(Pt.render(Z,T,q),Ht===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&K.hasRenderPass())===!1){const Bt=N.opaque,Lt=N.transmissive;if(z.setupLights(),q.isArrayCamera){const Gt=q.cameras;if(Lt.length>0)for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];_n(Bt,Lt,T,qt)}se&&wt.render(T);for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];rn(N,T,qt,qt.viewport)}}else Lt.length>0&&_n(Bt,Lt,T,q),se&&wt.render(T),rn(N,T,q)}it!==null&&at===0&&(W.updateMultisampleRenderTarget(it),W.updateRenderTargetMipmap(it)),et&&K.end(R),T.isScene===!0&&T.onAfterRender(R,T,q),It.resetDefaultState(),ct=-1,ft=null,P.pop(),P.length>0?(z=P[P.length-1],Ht===!0&&Ft.setGlobalState(R.clippingPlanes,z.state.camera)):z=null,B.pop(),B.length>0?N=B[B.length-1]:N=null};function ei(T,q,st,et){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)st=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)z.pushLight(T),T.castShadow&&z.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Xt.intersectsSprite(T)){et&&he.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ke);const Bt=Ct.update(T),Lt=T.material;Lt.visible&&N.push(T,Bt,Lt,st,he.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Xt.intersectsObject(T))){const Bt=Ct.update(T),Lt=T.material;if(et&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),he.copy(T.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),he.copy(Bt.boundingSphere.center)),he.applyMatrix4(T.matrixWorld).applyMatrix4(Ke)),Array.isArray(Lt)){const Gt=Bt.groups;for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt],$t=Lt[qt.materialIndex];$t&&$t.visible&&N.push(T,Bt,$t,st,he.z,qt)}}else Lt.visible&&N.push(T,Bt,Lt,st,he.z,null)}}const Ut=T.children;for(let Bt=0,Lt=Ut.length;Bt<Lt;Bt++)ei(Ut[Bt],q,st,et)}function rn(T,q,st,et){const{opaque:Z,transmissive:Ut,transparent:Bt}=T;z.setupLightsView(st),Ht===!0&&Ft.setGlobalState(R.clippingPlanes,st),et&&Yt.viewport(L.copy(et)),Z.length>0&&_i(Z,q,st),Ut.length>0&&_i(Ut,q,st),Bt.length>0&&_i(Bt,q,st),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function _n(T,q,st,et){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[et.id]===void 0){const $t=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[et.id]=new Fi(1,1,{generateMipmaps:!0,type:$t?ma:pi,minFilter:Rr,samples:Ue.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace})}const Ut=z.state.transmissionRenderTarget[et.id],Bt=et.viewport||L;Ut.setSize(Bt.z*R.transmissionResolutionScale,Bt.w*R.transmissionResolutionScale);const Lt=R.getRenderTarget(),Gt=R.getActiveCubeFace(),Wt=R.getActiveMipmapLevel();R.setRenderTarget(Ut),R.getClearColor(lt),_t=R.getClearAlpha(),_t<1&&R.setClearColor(16777215,.5),R.clear(),se&&wt.render(st);const Jt=R.toneMapping;R.toneMapping=zi;const qt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),z.setupLightsView(et),Ht===!0&&Ft.setGlobalState(R.clippingPlanes,et),_i(T,st,et),W.updateMultisampleRenderTarget(Ut),W.updateRenderTargetMipmap(Ut),Me.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ce=0,je=q.length;Ce<je;Ce++){const ke=q[Ce],{object:Ne,geometry:Kt,material:we,group:ie}=ke;if(we.side===ua&&Ne.layers.test(et.layers)){const vn=we.side;we.side=kn,we.needsUpdate=!0,Nr(Ne,st,et,Kt,we,ie),we.side=vn,we.needsUpdate=!0,$t=!0}}$t===!0&&(W.updateMultisampleRenderTarget(Ut),W.updateRenderTargetMipmap(Ut))}R.setRenderTarget(Lt,Gt,Wt),R.setClearColor(lt,_t),qt!==void 0&&(et.viewport=qt),R.toneMapping=Jt}function _i(T,q,st){const et=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Ut=T.length;Z<Ut;Z++){const Bt=T[Z],{object:Lt,geometry:Gt,group:Wt}=Bt;let Jt=Bt.material;Jt.allowOverride===!0&&et!==null&&(Jt=et),Lt.layers.test(st.layers)&&Nr(Lt,q,st,Gt,Jt,Wt)}}function Nr(T,q,st,et,Z,Ut){T.onBeforeRender(R,q,st,et,Z,Ut),T.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(R,q,st,et,T,Ut),Z.transparent===!0&&Z.side===ua&&Z.forceSinglePass===!1?(Z.side=kn,Z.needsUpdate=!0,R.renderBufferDirect(st,q,et,Z,T,Ut),Z.side=$a,Z.needsUpdate=!0,R.renderBufferDirect(st,q,et,Z,T,Ut),Z.side=ua):R.renderBufferDirect(st,q,et,Z,T,Ut),T.onAfterRender(R,q,st,et,Z,Ut)}function Lr(T,q,st){q.isScene!==!0&&(q=Re);const et=y.get(T),Z=z.state.lights,Ut=z.state.shadowsArray,Bt=Z.state.version,Lt=kt.getParameters(T,Z.state,Ut,q,st),Gt=kt.getProgramCacheKey(Lt);let Wt=et.programs;et.environment=T.isMeshStandardMaterial?q.environment:null,et.fog=q.fog,et.envMap=(T.isMeshStandardMaterial?Mt:mt).get(T.envMap||et.environment),et.envMapRotation=et.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,Wt===void 0&&(T.addEventListener("dispose",Cn),Wt=new Map,et.programs=Wt);let Jt=Wt.get(Gt);if(Jt!==void 0){if(et.currentProgram===Jt&&et.lightsStateVersion===Bt)return Fs(T,Lt),Jt}else Lt.uniforms=kt.getUniforms(T),T.onBeforeCompile(Lt,R),Jt=kt.acquireProgram(Lt,Gt),Wt.set(Gt,Jt),et.uniforms=Lt.uniforms;const qt=et.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qt.clippingPlanes=Ft.uniform),Fs(T,Lt),et.needsLights=xa(T),et.lightsStateVersion=Bt,et.needsLights&&(qt.ambientLightColor.value=Z.state.ambient,qt.lightProbe.value=Z.state.probe,qt.directionalLights.value=Z.state.directional,qt.directionalLightShadows.value=Z.state.directionalShadow,qt.spotLights.value=Z.state.spot,qt.spotLightShadows.value=Z.state.spotShadow,qt.rectAreaLights.value=Z.state.rectArea,qt.ltc_1.value=Z.state.rectAreaLTC1,qt.ltc_2.value=Z.state.rectAreaLTC2,qt.pointLights.value=Z.state.point,qt.pointLightShadows.value=Z.state.pointShadow,qt.hemisphereLights.value=Z.state.hemi,qt.directionalShadowMap.value=Z.state.directionalShadowMap,qt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qt.spotShadowMap.value=Z.state.spotShadowMap,qt.spotLightMatrix.value=Z.state.spotLightMatrix,qt.spotLightMap.value=Z.state.spotLightMap,qt.pointShadowMap.value=Z.state.pointShadowMap,qt.pointShadowMatrix.value=Z.state.pointShadowMatrix),et.currentProgram=Jt,et.uniformsList=null,Jt}function Zo(T){if(T.uniformsList===null){const q=T.currentProgram.getUniforms();T.uniformsList=Oc.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function Fs(T,q){const st=y.get(T);st.outputColorSpace=q.outputColorSpace,st.batching=q.batching,st.batchingColor=q.batchingColor,st.instancing=q.instancing,st.instancingColor=q.instancingColor,st.instancingMorph=q.instancingMorph,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function tr(T,q,st,et,Z){q.isScene!==!0&&(q=Re),W.resetTextureUnits();const Ut=q.fog,Bt=et.isMeshStandardMaterial?q.environment:null,Lt=it===null?R.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Us,Gt=(et.isMeshStandardMaterial?Mt:mt).get(et.envMap||Bt),Wt=et.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Jt=!!st.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),qt=!!st.morphAttributes.position,$t=!!st.morphAttributes.normal,Ce=!!st.morphAttributes.color;let je=zi;et.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(je=R.toneMapping);const ke=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ne=ke!==void 0?ke.length:0,Kt=y.get(et),we=z.state.lights;if(Ht===!0&&(de===!0||T!==ft)){const Mn=T===ft&&et.id===ct;Ft.setState(et,T,Mn)}let ie=!1;et.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==we.state.version||Kt.outputColorSpace!==Lt||Z.isBatchedMesh&&Kt.batching===!1||!Z.isBatchedMesh&&Kt.batching===!0||Z.isBatchedMesh&&Kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Kt.instancing===!1||!Z.isInstancedMesh&&Kt.instancing===!0||Z.isSkinnedMesh&&Kt.skinning===!1||!Z.isSkinnedMesh&&Kt.skinning===!0||Z.isInstancedMesh&&Kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Kt.instancingMorph===!1&&Z.morphTexture!==null||Kt.envMap!==Gt||et.fog===!0&&Kt.fog!==Ut||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Ft.numPlanes||Kt.numIntersection!==Ft.numIntersection)||Kt.vertexAlphas!==Wt||Kt.vertexTangents!==Jt||Kt.morphTargets!==qt||Kt.morphNormals!==$t||Kt.morphColors!==Ce||Kt.toneMapping!==je||Kt.morphTargetsCount!==Ne)&&(ie=!0):(ie=!0,Kt.__version=et.version);let vn=Kt.currentProgram;ie===!0&&(vn=Lr(et,q,Z));let Gi=!1,xn=!1,ni=!1;const Oe=vn.getUniforms(),Sn=Kt.uniforms;if(Yt.useProgram(vn.program)&&(Gi=!0,xn=!0,ni=!0),et.id!==ct&&(ct=et.id,xn=!0),Gi||ft!==T){Yt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Oe.setValue(G,"projectionMatrix",T.projectionMatrix),Oe.setValue(G,"viewMatrix",T.matrixWorldInverse);const yn=Oe.map.cameraPosition;yn!==void 0&&yn.setValue(G,ge.setFromMatrixPosition(T.matrixWorld)),Ue.logarithmicDepthBuffer&&Oe.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Oe.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),ft!==T&&(ft=T,xn=!0,ni=!0)}if(Kt.needsLights&&(we.state.directionalShadowMap.length>0&&Oe.setValue(G,"directionalShadowMap",we.state.directionalShadowMap,W),we.state.spotShadowMap.length>0&&Oe.setValue(G,"spotShadowMap",we.state.spotShadowMap,W),we.state.pointShadowMap.length>0&&Oe.setValue(G,"pointShadowMap",we.state.pointShadowMap,W)),Z.isSkinnedMesh){Oe.setOptional(G,Z,"bindMatrix"),Oe.setOptional(G,Z,"bindMatrixInverse");const Mn=Z.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Oe.setValue(G,"boneTexture",Mn.boneTexture,W))}Z.isBatchedMesh&&(Oe.setOptional(G,Z,"batchingTexture"),Oe.setValue(G,"batchingTexture",Z._matricesTexture,W),Oe.setOptional(G,Z,"batchingIdTexture"),Oe.setValue(G,"batchingIdTexture",Z._indirectTexture,W),Oe.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Oe.setValue(G,"batchingColorTexture",Z._colorsTexture,W));const fn=st.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&le.update(Z,st,vn),(xn||Kt.receiveShadow!==Z.receiveShadow)&&(Kt.receiveShadow=Z.receiveShadow,Oe.setValue(G,"receiveShadow",Z.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Sn.envMap.value=Gt,Sn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&q.environment!==null&&(Sn.envMapIntensity.value=q.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=D1()),xn&&(Oe.setValue(G,"toneMappingExposure",R.toneMappingExposure),Kt.needsLights&&Bs(Sn,ni),Ut&&et.fog===!0&&ee.refreshFogUniforms(Sn,Ut),ee.refreshMaterialUniforms(Sn,et,pt,j,z.state.transmissionRenderTarget[T.id]),Oc.upload(G,Zo(Kt),Sn,W)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Oc.upload(G,Zo(Kt),Sn,W),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Oe.setValue(G,"center",Z.center),Oe.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Oe.setValue(G,"normalMatrix",Z.normalMatrix),Oe.setValue(G,"modelMatrix",Z.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const Mn=et.uniformsGroups;for(let yn=0,Or=Mn.length;yn<Or;yn++){const vi=Mn[yn];yt.update(vi,vn),yt.bind(vi,vn)}}return vn}function Bs(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function xa(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return at},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(T,q,st){const et=y.get(T);et.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),y.get(T.texture).__webglTexture=q,y.get(T.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:st,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,q){const st=y.get(T);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0};const Sa=G.createFramebuffer();this.setRenderTarget=function(T,q=0,st=0){it=T,X=q,at=st;let et=null,Z=!1,Ut=!1;if(T){const Lt=y.get(T);if(Lt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(G.FRAMEBUFFER,Lt.__webglFramebuffer),L.copy(T.viewport),H.copy(T.scissor),$=T.scissorTest,Yt.viewport(L),Yt.scissor(H),Yt.setScissorTest($),ct=-1;return}else if(Lt.__webglFramebuffer===void 0)W.setupRenderTarget(T);else if(Lt.__hasExternalTextures)W.rebindTextures(T,y.get(T.texture).__webglTexture,y.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Jt=T.depthTexture;if(Lt.__boundDepthTexture!==Jt){if(Jt!==null&&y.has(Jt)&&(T.width!==Jt.image.width||T.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(T)}}const Gt=T.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Ut=!0);const Wt=y.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Wt[q])?et=Wt[q][st]:et=Wt[q],Z=!0):T.samples>0&&W.useMultisampledRTT(T)===!1?et=y.get(T).__webglMultisampledFramebuffer:Array.isArray(Wt)?et=Wt[st]:et=Wt,L.copy(T.viewport),H.copy(T.scissor),$=T.scissorTest}else L.copy(tt).multiplyScalar(pt).floor(),H.copy(dt).multiplyScalar(pt).floor(),$=Dt;if(st!==0&&(et=Sa),Yt.bindFramebuffer(G.FRAMEBUFFER,et)&&Yt.drawBuffers(T,et),Yt.viewport(L),Yt.scissor(H),Yt.setScissorTest($),Z){const Lt=y.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Lt.__webglTexture,st)}else if(Ut){const Lt=q;for(let Gt=0;Gt<T.textures.length;Gt++){const Wt=y.get(T.textures[Gt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Gt,Wt.__webglTexture,st,Lt)}}else if(T!==null&&st!==0){const Lt=y.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Lt.__webglTexture,st)}ct=-1},this.readRenderTargetPixels=function(T,q,st,et,Z,Ut,Bt,Lt=0){if(!(T&&T.isWebGLRenderTarget)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Bt!==void 0&&(Gt=Gt[Bt]),Gt){Yt.bindFramebuffer(G.FRAMEBUFFER,Gt);try{const Wt=T.textures[Lt],Jt=Wt.format,qt=Wt.type;if(!Ue.textureFormatReadable(Jt)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(qt)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-et&&st>=0&&st<=T.height-Z&&(T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(q,st,et,Z,Tt.convert(Jt),Tt.convert(qt),Ut))}finally{const Wt=it!==null?y.get(it).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(T,q,st,et,Z,Ut,Bt,Lt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Bt!==void 0&&(Gt=Gt[Bt]),Gt)if(q>=0&&q<=T.width-et&&st>=0&&st<=T.height-Z){Yt.bindFramebuffer(G.FRAMEBUFFER,Gt);const Wt=T.textures[Lt],Jt=Wt.format,qt=Wt.type;if(!Ue.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.bufferData(G.PIXEL_PACK_BUFFER,Ut.byteLength,G.STREAM_READ),T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(q,st,et,Z,Tt.convert(Jt),Tt.convert(qt),0);const Ce=it!==null?y.get(it).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,Ce);const je=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await tM(G,je,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ut),G.deleteBuffer($t),G.deleteSync(je),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,q=null,st=0){const et=Math.pow(2,-st),Z=Math.floor(T.image.width*et),Ut=Math.floor(T.image.height*et),Bt=q!==null?q.x:0,Lt=q!==null?q.y:0;W.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,Bt,Lt,Z,Ut),Yt.unbindTexture()};const er=G.createFramebuffer(),Ma=G.createFramebuffer();this.copyTextureToTexture=function(T,q,st=null,et=null,Z=0,Ut=null){Ut===null&&(Z!==0?(Go("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=Z,Z=0):Ut=0);let Bt,Lt,Gt,Wt,Jt,qt,$t,Ce,je;const ke=T.isCompressedTexture?T.mipmaps[Ut]:T.image;if(st!==null)Bt=st.max.x-st.min.x,Lt=st.max.y-st.min.y,Gt=st.isBox3?st.max.z-st.min.z:1,Wt=st.min.x,Jt=st.min.y,qt=st.isBox3?st.min.z:0;else{const fn=Math.pow(2,-Z);Bt=Math.floor(ke.width*fn),Lt=Math.floor(ke.height*fn),T.isDataArrayTexture?Gt=ke.depth:T.isData3DTexture?Gt=Math.floor(ke.depth*fn):Gt=1,Wt=0,Jt=0,qt=0}et!==null?($t=et.x,Ce=et.y,je=et.z):($t=0,Ce=0,je=0);const Ne=Tt.convert(q.format),Kt=Tt.convert(q.type);let we;q.isData3DTexture?(W.setTexture3D(q,0),we=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),we=G.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),we=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const ie=G.getParameter(G.UNPACK_ROW_LENGTH),vn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Gi=G.getParameter(G.UNPACK_SKIP_PIXELS),xn=G.getParameter(G.UNPACK_SKIP_ROWS),ni=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,ke.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ke.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Wt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Jt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qt);const Oe=T.isDataArrayTexture||T.isData3DTexture,Sn=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){const fn=y.get(T),Mn=y.get(q),yn=y.get(fn.__renderTarget),Or=y.get(Mn.__renderTarget);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,yn.__webglFramebuffer),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let vi=0;vi<Gt;vi++)Oe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,y.get(T).__webglTexture,Z,qt+vi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,y.get(q).__webglTexture,Ut,je+vi)),G.blitFramebuffer(Wt,Jt,Bt,Lt,$t,Ce,Bt,Lt,G.DEPTH_BUFFER_BIT,G.NEAREST);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||y.has(T)){const fn=y.get(T),Mn=y.get(q);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,er),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ma);for(let yn=0;yn<Gt;yn++)Oe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,fn.__webglTexture,Z,qt+yn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,fn.__webglTexture,Z),Sn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Mn.__webglTexture,Ut,je+yn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Mn.__webglTexture,Ut),Z!==0?G.blitFramebuffer(Wt,Jt,Bt,Lt,$t,Ce,Bt,Lt,G.COLOR_BUFFER_BIT,G.NEAREST):Sn?G.copyTexSubImage3D(we,Ut,$t,Ce,je+yn,Wt,Jt,Bt,Lt):G.copyTexSubImage2D(we,Ut,$t,Ce,Wt,Jt,Bt,Lt);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Sn?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(we,Ut,$t,Ce,je,Bt,Lt,Gt,Ne,Kt,ke.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(we,Ut,$t,Ce,je,Bt,Lt,Gt,Ne,ke.data):G.texSubImage3D(we,Ut,$t,Ce,je,Bt,Lt,Gt,Ne,Kt,ke):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ut,$t,Ce,Bt,Lt,Ne,Kt,ke.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ut,$t,Ce,ke.width,ke.height,Ne,ke.data):G.texSubImage2D(G.TEXTURE_2D,Ut,$t,Ce,Bt,Lt,Ne,Kt,ke);G.pixelStorei(G.UNPACK_ROW_LENGTH,ie),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,vn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Gi),G.pixelStorei(G.UNPACK_SKIP_ROWS,xn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ni),Ut===0&&q.generateMipmaps&&G.generateMipmap(we),Yt.unbindTexture()},this.initRenderTarget=function(T){y.get(T).__webglFramebuffer===void 0&&W.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?W.setTextureCube(T,0):T.isData3DTexture?W.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?W.setTexture2DArray(T,0):W.setTexture2D(T,0),Yt.unbindTexture()},this.resetState=function(){X=0,at=0,it=null,Yt.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ee._getUnpackColorSpace()}}function N1({onComplete:o}){const e=Xn.useRef(null),[i,r]=Xn.useState(!0);return Xn.useEffect(()=>{if(sessionStorage.getItem("hasSeenParticleIntro")){r(!1),o&&o();return}const u=new TM,d=new hi(75,window.innerWidth/window.innerHeight,.1,1e3);d.position.z=15;const h=new U1({alpha:!0,antialias:!0});h.setSize(window.innerWidth,window.innerHeight),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.current.appendChild(h.domElement);const m=2e3,p=new Float32Array(m*3),v=new Float32Array(m*3),_=new Float32Array(m*3);for(let $=0;$<m;$++){const lt=$*3,_t=5+Math.random()*2,D=Math.random()*Math.PI*2,j=Math.acos(Math.random()*2-1),pt=_t*Math.sin(j)*Math.cos(D),At=_t*Math.sin(j)*Math.sin(D),zt=_t*Math.cos(j);p[lt]=pt,p[lt+1]=At,p[lt+2]=zt,_[lt]=pt,_[lt+1]=At,_[lt+2]=zt;const tt=.15+Math.random()*.15;v[lt]=pt/_t*tt,v[lt+1]=At/_t*tt,v[lt+2]=zt/_t*tt}const S=new mi,E=new Ri(p,3);S.setAttribute("position",E);const A=document.createElement("canvas");A.width=32,A.height=32;const C=A.getContext("2d"),M=C.createRadialGradient(16,16,0,16,16,16);M.addColorStop(0,"rgba(255, 255, 255, 1)"),M.addColorStop(.4,"rgba(255, 255, 255, 0.8)"),M.addColorStop(1,"rgba(255, 255, 255, 0)"),C.fillStyle=M,C.fillRect(0,0,32,32);const x=new DM(A),I=new Eh({color:16777215,size:.25,transparent:!0,opacity:1,blending:Pc,sizeAttenuation:!0,depthWrite:!1,map:x}),O=new Q0(S,I);u.add(O);const N=new mi;N.setAttribute("position",E);const z=new Eh({color:16777215,size:.5,transparent:!0,opacity:.4,blending:Pc,sizeAttenuation:!0,depthWrite:!1,map:x}),B=new Q0(N,z);u.add(B);let P="rotating",K=0;const R=1,w=.8,X=.6,at=.5,it=.4;let ct=0;function ft(){const $=requestAnimationFrame(ft);if(K+=.016,P==="rotating"){O.rotation.y+=.003,O.rotation.x=Math.sin(K*.5)*.15,B.rotation.y=O.rotation.y,B.rotation.x=O.rotation.x;const lt=1+Math.sin(K*2)*.05;O.scale.set(lt,lt,lt),B.scale.set(lt,lt,lt),z.opacity=.3+Math.sin(K*3)*.15,K>=R&&(P="imploding",ct=0)}else if(P==="imploding"){ct+=.016;const lt=ct/w,_t=Math.pow(lt,2.5);for(let D=0;D<m;D++){const j=D*3;p[j]=_[j]*(1-_t),p[j+1]=_[j+1]*(1-_t),p[j+2]=_[j+2]*(1-_t)}S.attributes.position.needsUpdate=!0,z.opacity=.4+lt*.4,lt>=1&&(P="ball",ct=0)}else if(P==="ball"){ct+=.016;const lt=1+Math.sin(ct*10)*.3;I.size=.4*lt,z.size=.8*lt,z.opacity=.6+Math.sin(ct*8)*.3,ct>=X&&(P="exploding",ct=0)}else if(P==="exploding"){ct+=.016;const lt=ct/at,_t=1-Math.pow(1-lt,2);for(let D=0;D<m;D++){const j=D*3,pt=_t*50;p[j]=v[j]*pt,p[j+1]=v[j+1]*pt,p[j+2]=v[j+2]*pt}S.attributes.position.needsUpdate=!0,I.opacity=1+lt*2,z.opacity=.8+lt*1.5,lt>=1&&(P="whiteFlash",ct=0)}else if(P==="whiteFlash"){ct+=.016;const lt=ct/it;for(let D=0;D<m;D++){const j=D*3,pt=50+lt*20;p[j]=v[j]*pt,p[j+1]=v[j+1]*pt,p[j+2]=v[j+2]*pt}S.attributes.position.needsUpdate=!0;const _t=lt<.2?lt/.2:1-(lt-.2)/.8;if(e.current){const D=_t*.95;e.current.style.background=`linear-gradient(135deg, 
              rgba(255, 255, 255, ${D}), 
              rgba(255, 255, 255, ${D*.9}))`}if(I.opacity=Math.max(0,3*(1-lt)),z.opacity=Math.max(0,2*(1-lt)),lt>=1){cancelAnimationFrame($),L();return}}h.render(u,d)}function L(){S.dispose(),I.dispose(),N.dispose(),z.dispose(),x.dispose(),h.dispose(),e.current&&e.current.contains(h.domElement)&&e.current.removeChild(h.domElement),sessionStorage.setItem("hasSeenParticleIntro","true"),r(!1),o&&o()}function H(){d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",H),ft(),()=>{window.removeEventListener("resize",H),h.domElement&&e.current?.contains(h.domElement)&&e.current.removeChild(h.domElement),S.dispose(),I.dispose(),N.dispose(),z.dispose(),x.dispose(),h.dispose()}},[o]),i?xt.jsx("div",{ref:e,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:1e4,pointerEvents:"none",background:"linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)",backgroundSize:"400% 400%",animation:"gradientFlow 20s ease infinite"}}):null}function L1(){return xt.jsx("div",{className:"shooting-stars",children:[...Array(10)].map((o,e)=>xt.jsx("div",{className:"star"},e))})}function O1(){const[o,e]=Xn.useState(""),[i,r]=Xn.useState(!1),l=["Hello, I'm Ethan Chang!","Hi, I'm Ethan Chang!","Hey there, I'm Ethan Chang!","Welcome! I'm Ethan Chang","Greetings! I'm Ethan Chang","Hi Ethan Chang here!","Hey! Ethan Chang speaking","Nice to meet you! I'm Ethan","Hello World! I'm Ethan Chang","What's up? I'm Ethan Chang"];return Xn.useEffect(()=>{const u=l[Math.floor(Math.random()*l.length)];let d=0;const h=setTimeout(()=>{const m=setInterval(()=>{d<u.length?(e(u.slice(0,d+1)),d++):(clearInterval(m),r(!0))},80);return()=>clearInterval(m)},300);return()=>clearTimeout(h)},[]),xt.jsxs("div",{className:"container",children:[xt.jsx("h1",{id:"typing-text",className:i?"typing-complete":"",children:o}),xt.jsx("p",{children:"Welcome To My Personal Website"})]})}function P1(){return xt.jsxs("div",{className:"contact-section",children:[xt.jsxs("div",{className:"contact-grid",children:[xt.jsx("a",{href:"https://www.linkedin.com/in/echang0970",className:"contact-item",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:xt.jsx("svg",{className:"contact-logo",viewBox:"0 0 24 24",fill:"currentColor",children:xt.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.437-.103.249-.129.597-.129.946v5.422h-3.554s.047-8.733 0-9.652h3.554v1.366c.43-.664 1.199-1.61 2.920-1.61 2.135 0 3.753 1.395 3.753 4.402v5.494zM5.337 9.432c-1.144 0-1.915-.759-1.915-1.709 0-.955.77-1.708 1.959-1.708 1.187 0 1.911.753 1.935 1.708 0 .95-.748 1.709-1.979 1.709zm1.946 11.02H3.391V9.8h3.892v10.652zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"})})}),xt.jsx("a",{href:"https://github.com/ch4ngs4n1ty",className:"contact-item",target:"_blank",rel:"noopener noreferrer",title:"GitHub",children:xt.jsx("svg",{className:"contact-logo",viewBox:"0 0 24 24",fill:"currentColor",children:xt.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),xt.jsx("a",{href:"mailto:echang0970@gmail.com",className:"contact-item",title:"Email",children:xt.jsx("svg",{className:"contact-logo",viewBox:"0 0 24 24",fill:"currentColor",children:xt.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})})})]}),xt.jsx("div",{className:"resume-button-container",children:xt.jsxs("a",{href:"/My-Personal-Portfolio//resume.pdf",className:"resume-button",download:"Ethan_Chang_Resume.pdf",title:"Download Resume",children:[xt.jsxs("svg",{className:"resume-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[xt.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),xt.jsx("polyline",{points:"7 10 12 15 17 10"}),xt.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),xt.jsx("span",{children:"Download Resume"})]})})]})}function Cc(){return xt.jsx("div",{className:"divider"})}function I1(){return xt.jsxs("div",{className:"about-section",children:[xt.jsx("h2",{children:"About Me"}),xt.jsxs("p",{children:["I'm Ethan Chang, a ",xt.jsx("span",{className:"highlight-emphasis",children:"Computer Science student"})," at ",xt.jsx("span",{className:"highlight-emphasis",children:"Rochester Institute of Technology"}),". I'm interested in computing roles in both ",xt.jsx("span",{className:"highlight-glow",children:"software and hardware"}),". I enjoy exploring a wide range of areas, including ",xt.jsx("span",{className:"highlight-interest",children:"data science and analytics"}),", ",xt.jsx("span",{className:"highlight-interest",children:"software engineering"}),", ",xt.jsx("span",{className:"highlight-interest",children:"IT"}),", ",xt.jsx("span",{className:"highlight-interest",children:"cybersecurity"}),", and ",xt.jsx("span",{className:"highlight-interest",children:"AI/machine learning"}),". I'm always building new skills and projects so I can grow into more opportunities and ",xt.jsx("span",{className:"highlight-glow",children:"make a real impact"}),"."]})]})}const E_=[{id:1,title:"Software Development Tutor",company:"NTID Learning Center - Rochester Institute of Technology",duration:"September 2025 - Present",location:"Rochester, NY - Onsite",summary:"Provide individualized and group tutoring on programming concepts across Python, Java, and Excel. Adapt teaching approaches to diverse learning styles using ASL and spoken communication to support Deaf and hard-of-hearing students, while reinforcing computational thinking and debugging strategies.",skills:["Bilingual Communication","Accessible Teaching","Instructional Adaptability","Active Listening","Confidence-Building"],logo:"/images/rit.png",url:"https://www.rit.edu/ntid/learningcenter/instructors-tutors"},{id:2,title:"Data Science Intern",company:"Artificial Intelligence and Biomedical Informatics and Data Science (AIBIDS) Program - University of Pittsburgh",duration:"May 2025 - July 2025",location:"Pittsburgh, PA - Hybrid",summary:"Collaborated with faculty and peers on data-driven projects addressing healthcare and informatics challenges. Analyzed complex patient data to generate actionable insights supporting predictive modeling initiatives, and presented findings to stakeholders with practical recommendations.",skills:["Collaboration","Communication","Data Cleaning","Data Analysis","Data Storytelling","Data Security","Adaptability"],logo:"/images/pitt.png",url:"https://www.aibids.org/home"},{id:3,title:"Math Tutor",company:"NTID Learning Center - Rochester Institute of Technology",duration:"September 2024 - Present",location:"Rochester, NY - Onsite",summary:"Adapt teaching approaches to diverse learning styles using ASL and spoken communication to support Deaf and hard-of-hearing students, while reinforcing computational thinking and debugging strategies.",skills:["Bilingual Communication","Accessible Teaching","Instructional Adaptability","Active Listening","Confidence-Building"],logo:"/images/rit.png",url:"https://www.rit.edu/ntid/learningcenter/instructors-tutors"}];function z1({experience:o,index:e,isLast:i}){const[r,l]=Xn.useState(!1),u="/My-Personal-Portfolio/",d=h=>{h.target.closest(".experience-logo-link")||l(!r)};return xt.jsxs("div",{className:"experience-item",children:[xt.jsxs("div",{className:`experience-card ${r?"expanded":""}`,onClick:d,children:[o.url?xt.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",className:"experience-logo-link",children:xt.jsx("div",{className:"experience-logo",children:xt.jsx("img",{src:`${u}${o.logo}`,alt:`${o.company} logo`})})}):xt.jsx("div",{className:"experience-logo",children:xt.jsx("img",{src:`${u}${o.logo}`,alt:`${o.company} logo`})}),xt.jsx("h3",{children:o.title}),xt.jsx("p",{className:"company",children:o.company}),!r&&xt.jsx("p",{className:"click-hint",children:"Click to view details"}),xt.jsxs("div",{className:"experience-details-content",children:[xt.jsxs("p",{className:"duration",children:[o.duration," • ",o.location]}),xt.jsx("p",{className:"experience-summary",children:o.summary}),xt.jsxs("p",{className:"experience-skills",children:[xt.jsx("strong",{children:"Skills:"})," ",o.skills.join(", ")]})]})]}),!i&&xt.jsx("div",{className:"experience-connector"})]})}function F1(){return xt.jsxs("div",{className:"experiences-section",children:[xt.jsx("h2",{children:"Experiences"}),xt.jsx("div",{className:"experience-container",children:E_.map((o,e)=>xt.jsx(z1,{experience:o,index:e,isLast:e===E_.length-1},o.id))})]})}const B1=[{id:1,title:"Chroma",tech:["Angular","Spring Boot","Java","REST API"],duration:"August 2025 - December 2025",description:"Collaborated within a team to design and implement a full-stack web app for interactive color-based data visualization. Developed a responsive front-end using Angular and integrated RESTful APIs with a Spring-based Java backend. Applied object-oriented design, unit testing, and refactoring to ensure maintainable and scalable client-server code.",tools:["Angular","Spring Boot","Java","REST API","TypeScript","JUnit","Swing","GitHub","Agile/Scrum methodologies"],githubUrl:"https://github.com/ch4ngs4n1ty/Chroma",backgroundImage:"/images/chroma-bg.png",artifacts:[{}]},{id:2,title:"ACL Unplanned Surgery Predictive Model",tech:["Python","SQL","Pandas","Scikit-learn"],duration:"June 2025 - September 2025",program:"AIBIDS Program",description:"Accessed UPMC database of de-identified ACLR patients (2013-2021) for predictive modeling. Executed complex SQL queries with CTEs and LEFT JOINs to aggregate clinical datasets. Built logistic regression models using Social Determinants of Health (SDoH) factors to predict unplanned surgery needs.",tools:["Python","SQL","Pandas","Jupyter Notebook","LLMs","Prompt Engineering","Scikit-learn","PostgreSQL","Matplotlib"],githubUrl:null,backgroundImage:"/images/aclr-bg.png",artifacts:[{type:"image",src:"/images/aclr-diagram.png",alt:"ACL Unplanned Surgery Predictive Model Diagram"}]},{id:3,title:"Movie Database Management Systems",tech:["Python","PostgreSQL","SSH Tunnel","SQL"],duration:"January 2025 - May 2025",description:"Built and deployed a PostgreSQL movie database and application using Python and SQL. Collaborated with a group of 5 to design and develop the database and application features. Developed a Python application with SSH tunneling for secure remote database access and management.",tools:["Python","SQL","PostgreSQL","SSH Tunnel","Faker","GitHub","DataGrip","Kaggle","psycopg2"],githubUrl:"https://github.com/ch4ngs4n1ty/Movie-Database-Project",backgroundImage:"/images/movie-db-bg.png",artifacts:[{type:"image",src:"/images/eer-diagram.png",alt:"EER Diagram - Movie Database Schema"}]},{id:4,title:"Wildfire Simulation",tech:["C"],duration:"Sep 2024 - Oct 2024",description:"Designed and implemented a C-based wildfire simulation modeling probabilistic fire propagation across a grid-based forest. Developed probabilistic fire spread algorithms incorporating neighbor states, tree density, and burn probability with Fisher–Yates random initialization. Enhanced simulation performance and accuracy through iterative debugging, modular refactoring, and thorough documentation.",tools:["C","GCC","Makefile","Unix/Linux CLI","MobaXterm","VS Code","GitHub","Valgrind"],githubUrl:"",backgroundImage:"/images/wildfire-bg.png",artifacts:[{}]}];function H1({image:o,onClose:e}){Xn.useEffect(()=>{document.body.style.overflow="hidden";const r=l=>{l.key==="Escape"&&e()};return window.addEventListener("keydown",r),()=>{document.body.style.overflow="auto",window.removeEventListener("keydown",r)}},[e]);const i=r=>{r.target===r.currentTarget&&e()};return xt.jsxs("div",{className:"image-modal",style:{display:"grid"},onClick:i,children:[xt.jsx("span",{className:"modal-close",onClick:e,children:"×"}),xt.jsx("div",{className:"modal-content-wrapper",children:xt.jsx("img",{className:"modal-content",src:o.src,alt:o.alt})})]})}function G1({project:o}){const[e,i]=Xn.useState(!1),[r,l]=Xn.useState(null),u="/My-Personal-Portfolio/",d=h=>{h.target.closest(".project-link")||h.target.closest(".project-details")||i(!e)};return xt.jsxs(xt.Fragment,{children:[xt.jsxs("div",{className:`project-card ${e?"expanded":""}`,style:{backgroundImage:`url(${u}${o.backgroundImage})`},children:[xt.jsxs("div",{className:"project-overlay",onClick:d,children:[xt.jsxs("div",{className:"project-preview",children:[xt.jsx("h3",{children:o.title}),xt.jsx("p",{className:"click-hint",children:"Click to view details"})]}),xt.jsxs("div",{className:"project-details-content",children:[xt.jsxs("p",{className:"project-duration",children:[o.duration,o.program&&` • ${o.program}`]}),xt.jsx("p",{className:"project-description",children:o.description}),xt.jsxs("p",{className:"project-tools",children:[xt.jsx("strong",{children:"Tools:"})," ",o.tools.join(", ")]}),xt.jsx("div",{className:"project-links",children:o.githubUrl?xt.jsx("a",{href:o.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"project-link",onClick:h=>h.stopPropagation(),children:"View on GitHub"}):xt.jsx("button",{className:"project-link",onClick:h=>{h.stopPropagation(),alert("Project repository coming soon!")},children:"View Details"})})]})]}),o.artifacts&&o.artifacts.length>0&&xt.jsxs("details",{className:"project-details",children:[xt.jsx("summary",{children:"View Artifacts"}),xt.jsx("div",{className:"project-artifacts",children:o.artifacts.map((h,m)=>h.type==="image"?xt.jsx("img",{src:`${u}${h.src}`,alt:h.alt,className:"artifact-image",onClick:()=>l({...h,src:`${u}${h.src}`})},m):xt.jsx("button",{className:"artifact-link",children:h.name},m))})]})]}),r&&xt.jsx(H1,{image:r,onClose:()=>l(null)})]})}function V1(){return xt.jsxs("div",{className:"projects-section",children:[xt.jsx("h2",{children:"Projects"}),xt.jsx("div",{className:"projects-grid",children:B1.map(o=>xt.jsx(G1,{project:o},o.id))})]})}const X1=[{id:1,name:"Python",logo:"/images/python.png",url:"https://www.python.org/"},{id:2,name:"Java",logo:"/images/java.png",url:null},{id:3,name:"C",logo:"/images/c.png",url:null},{id:4,name:"SQL",logo:"/images/sql.png",url:null},{id:5,name:"JavaScript",logo:"/images/javascript.png",url:null},{id:6,name:"Jupyter",logo:"/images/jupyter.png",url:null},{id:7,name:"Git",logo:"/images/git.png",url:null},{id:8,name:"MobaXterm",logo:"/images/mobaxterm.png",url:null}];function k1({tool:o}){const i=xt.jsxs(xt.Fragment,{children:[xt.jsx("img",{src:`/My-Personal-Portfolio/${o.logo}`,alt:`${o.name} logo`,className:"tool-image"}),xt.jsx("p",{className:"tool-name",children:o.name})]});return xt.jsx("div",{className:"tool-card",children:o.url?xt.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",className:"tool-link",children:i}):i})}function W1(){return xt.jsxs("div",{className:"tools-section",children:[xt.jsx("h2",{children:"Tools & Technologies"}),xt.jsx("div",{className:"tools-grid",children:X1.map(o=>xt.jsx(k1,{tool:o},o.id))})]})}function q1(){const[o,e]=Xn.useState(!0),[i,r]=Xn.useState(!1);Xn.useEffect(()=>{sessionStorage.getItem("hasSeenParticleIntro")&&(e(!1),r(!0))},[]);const l=()=>{e(!1),r(!0)};return xt.jsxs(xt.Fragment,{children:[o&&xt.jsx(N1,{onComplete:l}),i&&xt.jsxs(xt.Fragment,{children:[xt.jsx(L1,{}),xt.jsx(O1,{}),xt.jsx(P1,{}),xt.jsx(Cc,{}),xt.jsx(I1,{}),xt.jsx(Cc,{}),xt.jsx(F1,{}),xt.jsx(Cc,{}),xt.jsx(V1,{}),xt.jsx(Cc,{}),xt.jsx(W1,{})]})]})}xS.createRoot(document.getElementById("root")).render(xt.jsx(Xn.StrictMode,{children:xt.jsx(q1,{})}));
