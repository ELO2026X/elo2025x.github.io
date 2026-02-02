(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function $_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var dh={exports:{}},qo={};var Gg;function Gy(){if(Gg)return qo;Gg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return qo.Fragment=e,qo.jsx=i,qo.jsxs=i,qo}var Vg;function Vy(){return Vg||(Vg=1,dh.exports=Gy()),dh.exports}var ge=Vy(),ph={exports:{}},ct={};var kg;function ky(){if(kg)return ct;kg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.iterator;function S(U){return U===null||typeof U!="object"?null:(U=y&&U[y]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function x(U,ie,_e){this.props=U,this.context=ie,this.refs=M,this.updater=_e||E}x.prototype.isReactComponent={},x.prototype.setState=function(U,ie){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ie,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function P(){}P.prototype=x.prototype;function O(U,ie,_e){this.props=U,this.context=ie,this.refs=M,this.updater=_e||E}var L=O.prototype=new P;L.constructor=O,R(L,x.prototype),L.isPureReactComponent=!0;var z=Array.isArray;function B(){}var I={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function T(U,ie,_e){var Ae=_e.ref;return{$$typeof:o,type:U,key:ie,ref:Ae!==void 0?Ae:null,props:_e}}function C(U,ie){return T(U.type,ie,U.props)}function V(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function Z(U){var ie={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(_e){return ie[_e]})}var K=/\/+/g;function se(U,ie){return typeof U=="object"&&U!==null&&U.key!=null?Z(""+U.key):ie.toString(36)}function he(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(B,B):(U.status="pending",U.then(function(ie){U.status==="pending"&&(U.status="fulfilled",U.value=ie)},function(ie){U.status==="pending"&&(U.status="rejected",U.reason=ie)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function N(U,ie,_e,Ae,Ie){var $=typeof U;($==="undefined"||$==="boolean")&&(U=null);var ce=!1;if(U===null)ce=!0;else switch($){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(U.$$typeof){case o:case e:ce=!0;break;case _:return ce=U._init,N(ce(U._payload),ie,_e,Ae,Ie)}}if(ce)return Ie=Ie(U),ce=Ae===""?"."+se(U,0):Ae,z(Ie)?(_e="",ce!=null&&(_e=ce.replace(K,"$&/")+"/"),N(Ie,ie,_e,"",function(Ge){return Ge})):Ie!=null&&(V(Ie)&&(Ie=C(Ie,_e+(Ie.key==null||U&&U.key===Ie.key?"":(""+Ie.key).replace(K,"$&/")+"/")+ce)),ie.push(Ie)),1;ce=0;var Ue=Ae===""?".":Ae+":";if(z(U))for(var He=0;He<U.length;He++)Ae=U[He],$=Ue+se(Ae,He),ce+=N(Ae,ie,_e,$,Ie);else if(He=S(U),typeof He=="function")for(U=He.call(U),He=0;!(Ae=U.next()).done;)Ae=Ae.value,$=Ue+se(Ae,He++),ce+=N(Ae,ie,_e,$,Ie);else if($==="object"){if(typeof U.then=="function")return N(he(U),ie,_e,Ae,Ie);throw ie=String(U),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return ce}function G(U,ie,_e){if(U==null)return U;var Ae=[],Ie=0;return N(U,Ae,"","",function($){return ie.call(_e,$,Ie++)}),Ae}function ne(U){if(U._status===-1){var ie=U._result;ie=ie(),ie.then(function(_e){(U._status===0||U._status===-1)&&(U._status=1,U._result=_e)},function(_e){(U._status===0||U._status===-1)&&(U._status=2,U._result=_e)}),U._status===-1&&(U._status=0,U._result=ie)}if(U._status===1)return U._result.default;throw U._result}var Me=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},be={map:G,forEach:function(U,ie,_e){G(U,function(){ie.apply(this,arguments)},_e)},count:function(U){var ie=0;return G(U,function(){ie++}),ie},toArray:function(U){return G(U,function(ie){return ie})||[]},only:function(U){if(!V(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ct.Activity=g,ct.Children=be,ct.Component=x,ct.Fragment=i,ct.Profiler=l,ct.PureComponent=O,ct.StrictMode=r,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ct.__COMPILER_RUNTIME={__proto__:null,c:function(U){return I.H.useMemoCache(U)}},ct.cache=function(U){return function(){return U.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(U,ie,_e){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ae=R({},U.props),Ie=U.key;if(ie!=null)for($ in ie.key!==void 0&&(Ie=""+ie.key),ie)!j.call(ie,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&ie.ref===void 0||(Ae[$]=ie[$]);var $=arguments.length-2;if($===1)Ae.children=_e;else if(1<$){for(var ce=Array($),Ue=0;Ue<$;Ue++)ce[Ue]=arguments[Ue+2];Ae.children=ce}return T(U.type,Ie,Ae)},ct.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ct.createElement=function(U,ie,_e){var Ae,Ie={},$=null;if(ie!=null)for(Ae in ie.key!==void 0&&($=""+ie.key),ie)j.call(ie,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Ie[Ae]=ie[Ae]);var ce=arguments.length-2;if(ce===1)Ie.children=_e;else if(1<ce){for(var Ue=Array(ce),He=0;He<ce;He++)Ue[He]=arguments[He+2];Ie.children=Ue}if(U&&U.defaultProps)for(Ae in ce=U.defaultProps,ce)Ie[Ae]===void 0&&(Ie[Ae]=ce[Ae]);return T(U,$,Ie)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(U){return{$$typeof:d,render:U}},ct.isValidElement=V,ct.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:ne}},ct.memo=function(U,ie){return{$$typeof:p,type:U,compare:ie===void 0?null:ie}},ct.startTransition=function(U){var ie=I.T,_e={};I.T=_e;try{var Ae=U(),Ie=I.S;Ie!==null&&Ie(_e,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(B,Me)}catch($){Me($)}finally{ie!==null&&_e.types!==null&&(ie.types=_e.types),I.T=ie}},ct.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ct.use=function(U){return I.H.use(U)},ct.useActionState=function(U,ie,_e){return I.H.useActionState(U,ie,_e)},ct.useCallback=function(U,ie){return I.H.useCallback(U,ie)},ct.useContext=function(U){return I.H.useContext(U)},ct.useDebugValue=function(){},ct.useDeferredValue=function(U,ie){return I.H.useDeferredValue(U,ie)},ct.useEffect=function(U,ie){return I.H.useEffect(U,ie)},ct.useEffectEvent=function(U){return I.H.useEffectEvent(U)},ct.useId=function(){return I.H.useId()},ct.useImperativeHandle=function(U,ie,_e){return I.H.useImperativeHandle(U,ie,_e)},ct.useInsertionEffect=function(U,ie){return I.H.useInsertionEffect(U,ie)},ct.useLayoutEffect=function(U,ie){return I.H.useLayoutEffect(U,ie)},ct.useMemo=function(U,ie){return I.H.useMemo(U,ie)},ct.useOptimistic=function(U,ie){return I.H.useOptimistic(U,ie)},ct.useReducer=function(U,ie,_e){return I.H.useReducer(U,ie,_e)},ct.useRef=function(U){return I.H.useRef(U)},ct.useState=function(U){return I.H.useState(U)},ct.useSyncExternalStore=function(U,ie,_e){return I.H.useSyncExternalStore(U,ie,_e)},ct.useTransition=function(){return I.H.useTransition()},ct.version="19.2.3",ct}var Xg;function Yd(){return Xg||(Xg=1,ph.exports=ky()),ph.exports}var vt=Yd();const Xy=$_(vt);var mh={exports:{}},Yo={},gh={exports:{}},_h={};var Wg;function Wy(){return Wg||(Wg=1,(function(o){function e(N,G){var ne=N.length;N.push(G);e:for(;0<ne;){var Me=ne-1>>>1,be=N[Me];if(0<l(be,G))N[Me]=G,N[ne]=be,ne=Me;else break e}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var G=N[0],ne=N.pop();if(ne!==G){N[0]=ne;e:for(var Me=0,be=N.length,U=be>>>1;Me<U;){var ie=2*(Me+1)-1,_e=N[ie],Ae=ie+1,Ie=N[Ae];if(0>l(_e,ne))Ae<be&&0>l(Ie,_e)?(N[Me]=Ie,N[Ae]=ne,Me=Ae):(N[Me]=_e,N[ie]=ne,Me=ie);else if(Ae<be&&0>l(Ie,ne))N[Me]=Ie,N[Ae]=ne,Me=Ae;else break e}}return G}function l(N,G){var ne=N.sortIndex-G.sortIndex;return ne!==0?ne:N.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,y=3,S=!1,E=!1,R=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function L(N){for(var G=i(p);G!==null;){if(G.callback===null)r(p);else if(G.startTime<=N)r(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function z(N){if(R=!1,L(N),!E)if(i(m)!==null)E=!0,B||(B=!0,Z());else{var G=i(p);G!==null&&he(z,G.startTime-N)}}var B=!1,I=-1,j=5,T=-1;function C(){return M?!0:!(o.unstable_now()-T<j)}function V(){if(M=!1,B){var N=o.unstable_now();T=N;var G=!0;try{e:{E=!1,R&&(R=!1,P(I),I=-1),S=!0;var ne=y;try{t:{for(L(N),g=i(m);g!==null&&!(g.expirationTime>N&&C());){var Me=g.callback;if(typeof Me=="function"){g.callback=null,y=g.priorityLevel;var be=Me(g.expirationTime<=N);if(N=o.unstable_now(),typeof be=="function"){g.callback=be,L(N),G=!0;break t}g===i(m)&&r(m),L(N)}else r(m);g=i(m)}if(g!==null)G=!0;else{var U=i(p);U!==null&&he(z,U.startTime-N),G=!1}}break e}finally{g=null,y=ne,S=!1}G=void 0}}finally{G?Z():B=!1}}}var Z;if(typeof O=="function")Z=function(){O(V)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,se=K.port2;K.port1.onmessage=V,Z=function(){se.postMessage(null)}}else Z=function(){x(V,0)};function he(N,G){I=x(function(){N(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(N){switch(y){case 1:case 2:case 3:var G=3;break;default:G=y}var ne=y;y=G;try{return N()}finally{y=ne}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ne=y;y=N;try{return G()}finally{y=ne}},o.unstable_scheduleCallback=function(N,G,ne){var Me=o.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Me+ne:Me):ne=Me,N){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=ne+be,N={id:_++,callback:G,priorityLevel:N,startTime:ne,expirationTime:be,sortIndex:-1},ne>Me?(N.sortIndex=ne,e(p,N),i(m)===null&&N===i(p)&&(R?(P(I),I=-1):R=!0,he(z,ne-Me))):(N.sortIndex=be,e(m,N),E||S||(E=!0,B||(B=!0,Z()))),N},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(N){var G=y;return function(){var ne=y;y=G;try{return N.apply(this,arguments)}finally{y=ne}}}})(_h)),_h}var qg;function qy(){return qg||(qg=1,gh.exports=Wy()),gh.exports}var vh={exports:{}},On={};var Yg;function Yy(){if(Yg)return On;Yg=1;var o=Yd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,On.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},On.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:S}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},On.requestFormReset=function(m){r.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},On.useFormStatus=function(){return h.H.useHostTransitionStatus()},On.version="19.2.3",On}var jg;function jy(){if(jg)return vh.exports;jg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),vh.exports=Yy(),vh.exports}var Zg;function Zy(){if(Zg)return Yo;Zg=1;var o=qy(),e=Yd(),i=jy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var v=!1,A=u.child;A;){if(A===a){v=!0,a=u,s=f;break}if(A===s){v=!0,s=u,a=f;break}A=A.sibling}if(!v){for(A=f.child;A;){if(A===a){v=!0,a=f,s=u;break}if(A===s){v=!0,s=f,a=u;break}A=A.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),O=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var K=Symbol.for("react.client.reference");function se(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===K?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case B:return"SuspenseList";case T:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case O:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:se(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return se(t(n))}catch{}}return null}var he=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},Me=[],be=-1;function U(t){return{current:t}}function ie(t){0>be||(t.current=Me[be],Me[be]=null,be--)}function _e(t,n){be++,Me[be]=t.current,t.current=n}var Ae=U(null),Ie=U(null),$=U(null),ce=U(null);function Ue(t,n){switch(_e($,n),_e(Ie,t),_e(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?ug(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=ug(n),t=fg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(Ae),_e(Ae,t)}function He(){ie(Ae),ie(Ie),ie($)}function Ge(t){t.memoizedState!==null&&_e(ce,t);var n=Ae.current,a=fg(n,t.type);n!==a&&(_e(Ie,t),_e(Ae,a))}function ht(t){Ie.current===t&&(ie(Ae),ie(Ie)),ce.current===t&&(ie(ce),Vo._currentValue=ne)}var Kt,_t;function nt(t){if(Kt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Kt=n&&n[1]||"",_t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kt+t+_t}var Qe=!1;function ot(t,n){if(!t||Qe)return"";Qe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(fe){var re=fe}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(fe){re=fe}t.call(xe.prototype)}}else{try{throw Error()}catch(fe){re=fe}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(fe){if(fe&&re&&typeof fe.stack=="string")return[fe.stack,re.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],A=f[1];if(v&&A){var H=v.split(`
`),te=A.split(`
`);for(u=s=0;s<H.length&&!H[s].includes("DetermineComponentFrameRoot");)s++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(s===H.length||u===te.length)for(s=H.length-1,u=te.length-1;1<=s&&0<=u&&H[s]!==te[u];)u--;for(;1<=s&&0<=u;s--,u--)if(H[s]!==te[u]){if(s!==1||u!==1)do if(s--,u--,0>u||H[s]!==te[u]){var me=`
`+H[s].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=s&&0<=u);break}}}finally{Qe=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?nt(a):""}function $t(t,n){switch(t.tag){case 26:case 27:case 5:return nt(t.type);case 16:return nt("Lazy");case 13:return t.child!==n&&n!==null?nt("Suspense Fallback"):nt("Suspense");case 19:return nt("SuspenseList");case 0:case 15:return ot(t.type,!1);case 11:return ot(t.type.render,!1);case 1:return ot(t.type,!0);case 31:return nt("Activity");default:return""}}function k(t){try{var n="",a=null;do n+=$t(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var jt=Object.prototype.hasOwnProperty,Mt=o.unstable_scheduleCallback,Ut=o.unstable_cancelCallback,qe=o.unstable_shouldYield,D=o.unstable_requestPaint,b=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,pe=o.unstable_ImmediatePriority,ye=o.unstable_UserBlockingPriority,ue=o.unstable_NormalPriority,Ye=o.unstable_LowPriority,Ne=o.unstable_IdlePriority,We=o.log,at=o.unstable_setDisableYieldValue,Te=null,Re=null;function Fe(t){if(typeof We=="function"&&at(t),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Te,t)}catch{}}var Pe=Math.clz32?Math.clz32:F,Le=Math.log,ft=Math.LN2;function F(t){return t>>>=0,t===0?32:31-(Le(t)/ft|0)|0}var Ee=256,Se=262144,Ce=4194304;function le(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function de(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var A=s&134217727;return A!==0?(s=A&~f,s!==0?u=le(s):(v&=A,v!==0?u=le(v):a||(a=A&~t,a!==0&&(u=le(a))))):(A=s&~f,A!==0?u=le(A):v!==0?u=le(v):a||(a=s&~t,a!==0&&(u=le(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function De(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $e(){var t=Ce;return Ce<<=1,(Ce&62914560)===0&&(Ce=4194304),t}function et(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Bt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Sn(t,n,a,s,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,H=t.expirationTimes,te=t.hiddenUpdates;for(a=v&~a;0<a;){var me=31-Pe(a),xe=1<<me;A[me]=0,H[me]=-1;var re=te[me];if(re!==null)for(te[me]=null,me=0;me<re.length;me++){var fe=re[me];fe!==null&&(fe.lane&=-536870913)}a&=~xe}s!==0&&Ra(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function Ra(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Pe(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function $i(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Pe(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Pi(t,n){var a=n&-n;return a=(a&42)!==0?1:Ei(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ei(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ti(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function fr(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Og(t.type))}function zi(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var ui=Math.random().toString(36).slice(2),cn="__reactFiber$"+ui,En="__reactProps$"+ui,Ai="__reactContainer$"+ui,Wr="__reactEvents$"+ui,qr="__reactListeners$"+ui,pl="__reactHandles$"+ui,no="__reactResources$"+ui,hr="__reactMarker$"+ui;function io(t){delete t[cn],delete t[En],delete t[Wr],delete t[qr],delete t[pl]}function Ca(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ai]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=vg(t);t!==null;){if(a=t[cn])return a;t=vg(t)}return n}t=a,a=t.parentNode}return null}function Da(t){if(t=t[cn]||t[Ai]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function dr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ua(t){var n=t[no];return n||(n=t[no]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function w(t){t[hr]=!0}var q=new Set,oe={};function ae(t,n){Q(t,n),Q(t+"Capture",n)}function Q(t,n){for(oe[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ve={},ze={};function ke(t){return jt.call(ze,t)?!0:jt.call(Ve,t)?!1:Oe.test(t)?ze[t]=!0:(Ve[t]=!0,!1)}function je(t,n,a){if(ke(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function it(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ze(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function rt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ot(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function en(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Zt(t){if(!t._valueTracker){var n=Ot(t)?"checked":"value";t._valueTracker=en(t,n,""+t[n])}}function zt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Ot(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Je(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var It=/[\n"\\]/g;function lt(t){return t.replace(It,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(t,n,a,s,u,f,v,A){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+rt(n)):t.value!==""+rt(n)&&(t.value=""+rt(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?An(t,v,rt(n)):a!=null?An(t,v,rt(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+rt(A):t.removeAttribute("name")}function ea(t,n,a,s,u,f,v,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Zt(t);return}a=a!=null?""+rt(a):"",n=n!=null?""+rt(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=A?t.checked:!!s,t.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Zt(t)}function An(t,n,a){n==="number"&&Je(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function fi(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+rt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ft(t,n,a){if(n!=null&&(n=""+rt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+rt(a):""}function wn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(he(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=rt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Zt(t)}function mn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Rn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cn(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Rn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Yr(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&Cn(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&Cn(t,f,n[f])}function wi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(t){return Bv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ta(){}var cu=null;function uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jr=null,Zr=null;function cp(t){var n=Da(t);if(n&&(t=n.stateNode)){var a=t[En]||null;e:switch(t=n.stateNode,n.type){case"input":if(Tn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+lt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[En]||null;if(!u)throw Error(r(90));Tn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&zt(s)}break e;case"textarea":Ft(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&fi(t,!!a.multiple,n,!1)}}}var fu=!1;function up(t,n,a){if(fu)return t(n,a);fu=!0;try{var s=t(n);return s}finally{if(fu=!1,(jr!==null||Zr!==null)&&(nc(),jr&&(n=jr,t=Zr,Zr=jr=null,cp(n),t)))for(n=0;n<t.length;n++)cp(t[n])}}function ao(t,n){var a=t.stateNode;if(a===null)return null;var s=a[En]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=!1;if(na)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){hu=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{hu=!1}var Na=null,du=null,gl=null;function fp(){if(gl)return gl;var t,n=du,a=n.length,s,u="value"in Na?Na.value:Na.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(s=1;s<=v&&n[a-s]===u[f-s];s++);return gl=u.slice(t,1<s?1-s:void 0)}function _l(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function hp(){return!1}function Wn(t){function n(a,s,u,f,v){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?vl:hp,this.isPropagationStopped=hp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Wn(pr),so=g({},pr,{view:0,detail:0}),Fv=Wn(so),pu,mu,oo,yl=g({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(pu=t.screenX-oo.screenX,mu=t.screenY-oo.screenY):mu=pu=0,oo=t),pu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),dp=Wn(yl),Hv=g({},yl,{dataTransfer:0}),Gv=Wn(Hv),Vv=g({},so,{relatedTarget:0}),gu=Wn(Vv),kv=g({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Xv=Wn(kv),Wv=g({},pr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qv=Wn(Wv),Yv=g({},pr,{data:0}),pp=Wn(Yv),jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Kv[t])?!!n[t]:!1}function _u(){return Qv}var Jv=g({},so,{key:function(t){if(t.key){var n=jv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$v=Wn(Jv),ex=g({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mp=Wn(ex),tx=g({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),nx=Wn(tx),ix=g({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ax=Wn(ix),rx=g({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sx=Wn(rx),ox=g({},pr,{newState:0,oldState:0}),lx=Wn(ox),cx=[9,13,27,32],vu=na&&"CompositionEvent"in window,lo=null;na&&"documentMode"in document&&(lo=document.documentMode);var ux=na&&"TextEvent"in window&&!lo,gp=na&&(!vu||lo&&8<lo&&11>=lo),_p=" ",vp=!1;function xp(t,n){switch(t){case"keyup":return cx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function fx(t,n){switch(t){case"compositionend":return yp(n);case"keypress":return n.which!==32?null:(vp=!0,_p);case"textInput":return t=n.data,t===_p&&vp?null:t;default:return null}}function hx(t,n){if(Kr)return t==="compositionend"||!vu&&xp(t,n)?(t=fp(),gl=du=Na=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gp&&n.locale!=="ko"?null:n.data;default:return null}}var dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!dx[t.type]:n==="textarea"}function Mp(t,n,a,s){jr?Zr?Zr.push(s):Zr=[s]:jr=s,n=cc(n,"onChange"),0<n.length&&(a=new xl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var co=null,uo=null;function px(t){ag(t,0)}function Sl(t){var n=dr(t);if(zt(n))return t}function bp(t,n){if(t==="change")return n}var Ep=!1;if(na){var xu;if(na){var yu="oninput"in document;if(!yu){var Tp=document.createElement("div");Tp.setAttribute("oninput","return;"),yu=typeof Tp.oninput=="function"}xu=yu}else xu=!1;Ep=xu&&(!document.documentMode||9<document.documentMode)}function Ap(){co&&(co.detachEvent("onpropertychange",wp),uo=co=null)}function wp(t){if(t.propertyName==="value"&&Sl(uo)){var n=[];Mp(n,uo,t,uu(t)),up(px,n)}}function mx(t,n,a){t==="focusin"?(Ap(),co=n,uo=a,co.attachEvent("onpropertychange",wp)):t==="focusout"&&Ap()}function gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(uo)}function _x(t,n){if(t==="click")return Sl(n)}function vx(t,n){if(t==="input"||t==="change")return Sl(n)}function xx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ei=typeof Object.is=="function"?Object.is:xx;function fo(t,n){if(ei(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!jt.call(n,u)||!ei(t[u],n[u]))return!1}return!0}function Rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cp(t,n){var a=Rp(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rp(a)}}function Dp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Dp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Up(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Je(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Je(t.document)}return n}function Su(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var yx=na&&"documentMode"in document&&11>=document.documentMode,Qr=null,Mu=null,ho=null,bu=!1;function Np(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bu||Qr==null||Qr!==Je(s)||(s=Qr,"selectionStart"in s&&Su(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ho&&fo(ho,s)||(ho=s,s=cc(Mu,"onSelect"),0<s.length&&(n=new xl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Qr)))}function mr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Jr={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionrun:mr("Transition","TransitionRun"),transitionstart:mr("Transition","TransitionStart"),transitioncancel:mr("Transition","TransitionCancel"),transitionend:mr("Transition","TransitionEnd")},Eu={},Lp={};na&&(Lp=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function gr(t){if(Eu[t])return Eu[t];if(!Jr[t])return t;var n=Jr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Lp)return Eu[t]=n[a];return t}var Op=gr("animationend"),Ip=gr("animationiteration"),Pp=gr("animationstart"),Sx=gr("transitionrun"),Mx=gr("transitionstart"),bx=gr("transitioncancel"),zp=gr("transitionend"),Bp=new Map,Tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tu.push("scrollEnd");function Ri(t,n){Bp.set(t,n),ae(n,[t])}var Ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],$r=0,Au=0;function bl(){for(var t=$r,n=Au=$r=0;n<t;){var a=hi[n];hi[n++]=null;var s=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var f=hi[n];if(hi[n++]=null,s!==null&&u!==null){var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}f!==0&&Fp(a,u,f)}}function El(t,n,a,s){hi[$r++]=t,hi[$r++]=n,hi[$r++]=a,hi[$r++]=s,Au|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function wu(t,n,a,s){return El(t,n,a,s),Tl(t)}function _r(t,n){return El(t,null,null,n),Tl(t)}function Fp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Pe(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function Tl(t){if(50<Io)throw Io=0,zf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var es={};function Ex(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,n,a,s){return new Ex(t,n,a,s)}function Ru(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ia(t,n){var a=t.alternate;return a===null?(a=ti(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Hp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Al(t,n,a,s,u,f){var v=0;if(s=t,typeof t=="function")Ru(t)&&(v=1);else if(typeof t=="string")v=Cy(t,a,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case T:return t=ti(31,a,n,u),t.elementType=T,t.lanes=f,t;case R:return vr(a.children,u,f,n);case M:v=8,u|=24;break;case x:return t=ti(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case z:return t=ti(13,a,n,u),t.elementType=z,t.lanes=f,t;case B:return t=ti(19,a,n,u),t.elementType=B,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:v=10;break e;case P:v=9;break e;case L:v=11;break e;case I:v=14;break e;case j:v=16,s=null;break e}v=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=ti(v,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function vr(t,n,a,s){return t=ti(7,t,s,n),t.lanes=a,t}function Cu(t,n,a){return t=ti(6,t,null,n),t.lanes=a,t}function Gp(t){var n=ti(18,null,null,0);return n.stateNode=t,n}function Du(t,n,a){return n=ti(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Vp=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var a=Vp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:k(n)},Vp.set(t,n),n)}return{value:t,source:n,stack:k(n)}}var ts=[],ns=0,wl=null,po=0,pi=[],mi=0,La=null,Bi=1,Fi="";function aa(t,n){ts[ns++]=po,ts[ns++]=wl,wl=t,po=n}function kp(t,n,a){pi[mi++]=Bi,pi[mi++]=Fi,pi[mi++]=La,La=t;var s=Bi;t=Fi;var u=32-Pe(s)-1;s&=~(1<<u),a+=1;var f=32-Pe(n)+u;if(30<f){var v=u-u%5;f=(s&(1<<v)-1).toString(32),s>>=v,u-=v,Bi=1<<32-Pe(n)+u|a<<u|s,Fi=f+t}else Bi=1<<f|a<<u|s,Fi=t}function Uu(t){t.return!==null&&(aa(t,1),kp(t,1,0))}function Nu(t){for(;t===wl;)wl=ts[--ns],ts[ns]=null,po=ts[--ns],ts[ns]=null;for(;t===La;)La=pi[--mi],pi[mi]=null,Fi=pi[--mi],pi[mi]=null,Bi=pi[--mi],pi[mi]=null}function Xp(t,n){pi[mi++]=Bi,pi[mi++]=Fi,pi[mi++]=La,Bi=n.id,Fi=n.overflow,La=t}var Dn=null,Qt=null,At=!1,Oa=null,gi=!1,Lu=Error(r(519));function Ia(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mo(di(n,t)),Lu}function Wp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[cn]=t,n[En]=s,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<zo.length;a++)St(zo[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),ea(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),wn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||lg(n.textContent,a)?(s.popover!=null&&(St("beforetoggle",n),St("toggle",n)),s.onScroll!=null&&St("scroll",n),s.onScrollEnd!=null&&St("scrollend",n),s.onClick!=null&&(n.onclick=ta),n=!0):n=!1,n||Ia(t,!0)}function qp(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:Dn=Dn.return}}function is(t){if(t!==Dn)return!1;if(!At)return qp(t),At=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Jf(t.type,t.memoizedProps)),a=!a),a&&Qt&&Ia(t),qp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Qt=_g(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Qt=_g(t)}else n===27?(n=Qt,Za(t.type)?(t=ih,ih=null,Qt=t):Qt=n):Qt=Dn?vi(t.stateNode.nextSibling):null;return!0}function xr(){Qt=Dn=null,At=!1}function Ou(){var t=Oa;return t!==null&&(Zn===null?Zn=t:Zn.push.apply(Zn,t),Oa=null),t}function mo(t){Oa===null?Oa=[t]:Oa.push(t)}var Iu=U(null),yr=null,ra=null;function Pa(t,n,a){_e(Iu,n._currentValue),n._currentValue=a}function sa(t){t._currentValue=Iu.current,ie(Iu)}function Pu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function zu(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Pu(f.return,a,t),s||(v=null);break e}f=A.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Pu(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function as(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var A=u.type;ei(u.pendingProps.value,v.value)||(t!==null?t.push(A):t=[A])}}else if(u===ce.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Vo):t=[Vo])}u=u.return}t!==null&&zu(n,t,a,s),n.flags|=262144}function Rl(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Sr(t){yr=t,ra=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Un(t){return Yp(yr,t)}function Cl(t,n){return yr===null&&Sr(t),Yp(t,n)}function Yp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ra===null){if(t===null)throw Error(r(308));ra=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ra=ra.next=n;return a}var Tx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Ax=o.unstable_scheduleCallback,wx=o.unstable_NormalPriority,un={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bu(){return{controller:new Tx,data:new Map,refCount:0}}function go(t){t.refCount--,t.refCount===0&&Ax(wx,function(){t.controller.abort()})}var _o=null,Fu=0,rs=0,ss=null;function Rx(t,n){if(_o===null){var a=_o=[];Fu=0,rs=kf(),ss={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Fu++,n.then(jp,jp),n}function jp(){if(--Fu===0&&_o!==null){ss!==null&&(ss.status="fulfilled");var t=_o;_o=null,rs=0,ss=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Cx(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Zp=N.S;N.S=function(t,n){N0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Rx(t,n),Zp!==null&&Zp(t,n)};var Mr=U(null);function Hu(){var t=Mr.current;return t!==null?t:Yt.pooledCache}function Dl(t,n){n===null?_e(Mr,Mr.current):_e(Mr,n.pool)}function Kp(){var t=Hu();return t===null?null:{parent:un._currentValue,pool:t}}var os=Error(r(460)),Gu=Error(r(474)),Ul=Error(r(542)),Nl={then:function(){}};function Qp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Jp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ta,ta),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,em(t),t;default:if(typeof n.status=="string")n.then(ta,ta);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,em(t),t}throw Er=n,os}}function br(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Er=a,os):a}}var Er=null;function $p(){if(Er===null)throw Error(r(459));var t=Er;return Er=null,t}function em(t){if(t===os||t===Ul)throw Error(r(483))}var ls=null,vo=0;function Ll(t){var n=vo;return vo+=1,ls===null&&(ls=[]),Jp(ls,t,n)}function xo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ol(t,n){throw n.$$typeof===y?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function tm(t){function n(Y,X){if(t){var ee=Y.deletions;ee===null?(Y.deletions=[X],Y.flags|=16):ee.push(X)}}function a(Y,X){if(!t)return null;for(;X!==null;)n(Y,X),X=X.sibling;return null}function s(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function u(Y,X){return Y=ia(Y,X),Y.index=0,Y.sibling=null,Y}function f(Y,X,ee){return Y.index=ee,t?(ee=Y.alternate,ee!==null?(ee=ee.index,ee<X?(Y.flags|=67108866,X):ee):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function v(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,X,ee,ve){return X===null||X.tag!==6?(X=Cu(ee,Y.mode,ve),X.return=Y,X):(X=u(X,ee),X.return=Y,X)}function H(Y,X,ee,ve){var tt=ee.type;return tt===R?me(Y,X,ee.props.children,ve,ee.key):X!==null&&(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===j&&br(tt)===X.type)?(X=u(X,ee.props),xo(X,ee),X.return=Y,X):(X=Al(ee.type,ee.key,ee.props,null,Y.mode,ve),xo(X,ee),X.return=Y,X)}function te(Y,X,ee,ve){return X===null||X.tag!==4||X.stateNode.containerInfo!==ee.containerInfo||X.stateNode.implementation!==ee.implementation?(X=Du(ee,Y.mode,ve),X.return=Y,X):(X=u(X,ee.children||[]),X.return=Y,X)}function me(Y,X,ee,ve,tt){return X===null||X.tag!==7?(X=vr(ee,Y.mode,ve,tt),X.return=Y,X):(X=u(X,ee),X.return=Y,X)}function xe(Y,X,ee){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Cu(""+X,Y.mode,ee),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return ee=Al(X.type,X.key,X.props,null,Y.mode,ee),xo(ee,X),ee.return=Y,ee;case E:return X=Du(X,Y.mode,ee),X.return=Y,X;case j:return X=br(X),xe(Y,X,ee)}if(he(X)||Z(X))return X=vr(X,Y.mode,ee,null),X.return=Y,X;if(typeof X.then=="function")return xe(Y,Ll(X),ee);if(X.$$typeof===O)return xe(Y,Cl(Y,X),ee);Ol(Y,X)}return null}function re(Y,X,ee,ve){var tt=X!==null?X.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return tt!==null?null:A(Y,X,""+ee,ve);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case S:return ee.key===tt?H(Y,X,ee,ve):null;case E:return ee.key===tt?te(Y,X,ee,ve):null;case j:return ee=br(ee),re(Y,X,ee,ve)}if(he(ee)||Z(ee))return tt!==null?null:me(Y,X,ee,ve,null);if(typeof ee.then=="function")return re(Y,X,Ll(ee),ve);if(ee.$$typeof===O)return re(Y,X,Cl(Y,ee),ve);Ol(Y,ee)}return null}function fe(Y,X,ee,ve,tt){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Y=Y.get(ee)||null,A(X,Y,""+ve,tt);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case S:return Y=Y.get(ve.key===null?ee:ve.key)||null,H(X,Y,ve,tt);case E:return Y=Y.get(ve.key===null?ee:ve.key)||null,te(X,Y,ve,tt);case j:return ve=br(ve),fe(Y,X,ee,ve,tt)}if(he(ve)||Z(ve))return Y=Y.get(ee)||null,me(X,Y,ve,tt,null);if(typeof ve.then=="function")return fe(Y,X,ee,Ll(ve),tt);if(ve.$$typeof===O)return fe(Y,X,ee,Cl(X,ve),tt);Ol(X,ve)}return null}function Xe(Y,X,ee,ve){for(var tt=null,Nt=null,Ke=X,pt=X=0,Et=null;Ke!==null&&pt<ee.length;pt++){Ke.index>pt?(Et=Ke,Ke=null):Et=Ke.sibling;var Lt=re(Y,Ke,ee[pt],ve);if(Lt===null){Ke===null&&(Ke=Et);break}t&&Ke&&Lt.alternate===null&&n(Y,Ke),X=f(Lt,X,pt),Nt===null?tt=Lt:Nt.sibling=Lt,Nt=Lt,Ke=Et}if(pt===ee.length)return a(Y,Ke),At&&aa(Y,pt),tt;if(Ke===null){for(;pt<ee.length;pt++)Ke=xe(Y,ee[pt],ve),Ke!==null&&(X=f(Ke,X,pt),Nt===null?tt=Ke:Nt.sibling=Ke,Nt=Ke);return At&&aa(Y,pt),tt}for(Ke=s(Ke);pt<ee.length;pt++)Et=fe(Ke,Y,pt,ee[pt],ve),Et!==null&&(t&&Et.alternate!==null&&Ke.delete(Et.key===null?pt:Et.key),X=f(Et,X,pt),Nt===null?tt=Et:Nt.sibling=Et,Nt=Et);return t&&Ke.forEach(function(er){return n(Y,er)}),At&&aa(Y,pt),tt}function st(Y,X,ee,ve){if(ee==null)throw Error(r(151));for(var tt=null,Nt=null,Ke=X,pt=X=0,Et=null,Lt=ee.next();Ke!==null&&!Lt.done;pt++,Lt=ee.next()){Ke.index>pt?(Et=Ke,Ke=null):Et=Ke.sibling;var er=re(Y,Ke,Lt.value,ve);if(er===null){Ke===null&&(Ke=Et);break}t&&Ke&&er.alternate===null&&n(Y,Ke),X=f(er,X,pt),Nt===null?tt=er:Nt.sibling=er,Nt=er,Ke=Et}if(Lt.done)return a(Y,Ke),At&&aa(Y,pt),tt;if(Ke===null){for(;!Lt.done;pt++,Lt=ee.next())Lt=xe(Y,Lt.value,ve),Lt!==null&&(X=f(Lt,X,pt),Nt===null?tt=Lt:Nt.sibling=Lt,Nt=Lt);return At&&aa(Y,pt),tt}for(Ke=s(Ke);!Lt.done;pt++,Lt=ee.next())Lt=fe(Ke,Y,pt,Lt.value,ve),Lt!==null&&(t&&Lt.alternate!==null&&Ke.delete(Lt.key===null?pt:Lt.key),X=f(Lt,X,pt),Nt===null?tt=Lt:Nt.sibling=Lt,Nt=Lt);return t&&Ke.forEach(function(Hy){return n(Y,Hy)}),At&&aa(Y,pt),tt}function Wt(Y,X,ee,ve){if(typeof ee=="object"&&ee!==null&&ee.type===R&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case S:e:{for(var tt=ee.key;X!==null;){if(X.key===tt){if(tt=ee.type,tt===R){if(X.tag===7){a(Y,X.sibling),ve=u(X,ee.props.children),ve.return=Y,Y=ve;break e}}else if(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===j&&br(tt)===X.type){a(Y,X.sibling),ve=u(X,ee.props),xo(ve,ee),ve.return=Y,Y=ve;break e}a(Y,X);break}else n(Y,X);X=X.sibling}ee.type===R?(ve=vr(ee.props.children,Y.mode,ve,ee.key),ve.return=Y,Y=ve):(ve=Al(ee.type,ee.key,ee.props,null,Y.mode,ve),xo(ve,ee),ve.return=Y,Y=ve)}return v(Y);case E:e:{for(tt=ee.key;X!==null;){if(X.key===tt)if(X.tag===4&&X.stateNode.containerInfo===ee.containerInfo&&X.stateNode.implementation===ee.implementation){a(Y,X.sibling),ve=u(X,ee.children||[]),ve.return=Y,Y=ve;break e}else{a(Y,X);break}else n(Y,X);X=X.sibling}ve=Du(ee,Y.mode,ve),ve.return=Y,Y=ve}return v(Y);case j:return ee=br(ee),Wt(Y,X,ee,ve)}if(he(ee))return Xe(Y,X,ee,ve);if(Z(ee)){if(tt=Z(ee),typeof tt!="function")throw Error(r(150));return ee=tt.call(ee),st(Y,X,ee,ve)}if(typeof ee.then=="function")return Wt(Y,X,Ll(ee),ve);if(ee.$$typeof===O)return Wt(Y,X,Cl(Y,ee),ve);Ol(Y,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,X!==null&&X.tag===6?(a(Y,X.sibling),ve=u(X,ee),ve.return=Y,Y=ve):(a(Y,X),ve=Cu(ee,Y.mode,ve),ve.return=Y,Y=ve),v(Y)):a(Y,X)}return function(Y,X,ee,ve){try{vo=0;var tt=Wt(Y,X,ee,ve);return ls=null,tt}catch(Ke){if(Ke===os||Ke===Ul)throw Ke;var Nt=ti(29,Ke,null,Y.mode);return Nt.lanes=ve,Nt.return=Y,Nt}}}var Tr=tm(!0),nm=tm(!1),za=!1;function Vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ku(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Fa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Pt&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Tl(t),Fp(t,null,a),n}return El(t,s,n,a),Tl(t)}function yo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,$i(t,a)}}function Xu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Wu=!1;function So(){if(Wu){var t=ss;if(t!==null)throw t}}function Mo(t,n,a,s){Wu=!1;var u=t.updateQueue;za=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,te=H.next;H.next=null,v===null?f=te:v.next=te,v=H;var me=t.alternate;me!==null&&(me=me.updateQueue,A=me.lastBaseUpdate,A!==v&&(A===null?me.firstBaseUpdate=te:A.next=te,me.lastBaseUpdate=H))}if(f!==null){var xe=u.baseState;v=0,me=te=H=null,A=f;do{var re=A.lane&-536870913,fe=re!==A.lane;if(fe?(bt&re)===re:(s&re)===re){re!==0&&re===rs&&(Wu=!0),me!==null&&(me=me.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Xe=t,st=A;re=n;var Wt=a;switch(st.tag){case 1:if(Xe=st.payload,typeof Xe=="function"){xe=Xe.call(Wt,xe,re);break e}xe=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=st.payload,re=typeof Xe=="function"?Xe.call(Wt,xe,re):Xe,re==null)break e;xe=g({},xe,re);break e;case 2:za=!0}}re=A.callback,re!==null&&(t.flags|=64,fe&&(t.flags|=8192),fe=u.callbacks,fe===null?u.callbacks=[re]:fe.push(re))}else fe={lane:re,tag:A.tag,payload:A.payload,callback:A.callback,next:null},me===null?(te=me=fe,H=xe):me=me.next=fe,v|=re;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;fe=A,A=fe.next,fe.next=null,u.lastBaseUpdate=fe,u.shared.pending=null}}while(!0);me===null&&(H=xe),u.baseState=H,u.firstBaseUpdate=te,u.lastBaseUpdate=me,f===null&&(u.shared.lanes=0),Xa|=v,t.lanes=v,t.memoizedState=xe}}function im(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function am(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)im(a[t],n)}var cs=U(null),Il=U(0);function rm(t,n){t=ma,_e(Il,t),_e(cs,n),ma=t|n.baseLanes}function qu(){_e(Il,ma),_e(cs,cs.current)}function Yu(){ma=Il.current,ie(cs),ie(Il)}var ni=U(null),_i=null;function Ha(t){var n=t.alternate;_e(on,on.current&1),_e(ni,t),_i===null&&(n===null||cs.current!==null||n.memoizedState!==null)&&(_i=t)}function ju(t){_e(on,on.current),_e(ni,t),_i===null&&(_i=t)}function sm(t){t.tag===22?(_e(on,on.current),_e(ni,t),_i===null&&(_i=t)):Ga()}function Ga(){_e(on,on.current),_e(ni,ni.current)}function ii(t){ie(ni),_i===t&&(_i=null),ie(on)}var on=U(0);function Pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||th(a)||nh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oa=0,dt=null,kt=null,fn=null,zl=!1,us=!1,Ar=!1,Bl=0,bo=0,fs=null,Dx=0;function an(){throw Error(r(321))}function Zu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ei(t[a],n[a]))return!1;return!0}function Ku(t,n,a,s,u,f){return oa=f,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?km:hf,Ar=!1,f=a(s,u),Ar=!1,us&&(f=lm(n,a,s,u)),om(t),f}function om(t){N.H=Ao;var n=kt!==null&&kt.next!==null;if(oa=0,fn=kt=dt=null,zl=!1,bo=0,fs=null,n)throw Error(r(300));t===null||hn||(t=t.dependencies,t!==null&&Rl(t)&&(hn=!0))}function lm(t,n,a,s){dt=t;var u=0;do{if(us&&(fs=null),bo=0,us=!1,25<=u)throw Error(r(301));if(u+=1,fn=kt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=Xm,f=n(a,s)}while(us);return f}function Ux(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?Eo(n):n,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(dt.flags|=1024),n}function Qu(){var t=Bl!==0;return Bl=0,t}function Ju(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function $u(t){if(zl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}zl=!1}oa=0,fn=kt=dt=null,us=!1,bo=Bl=0,fs=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?dt.memoizedState=fn=t:fn=fn.next=t,fn}function ln(){if(kt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var n=fn===null?dt.memoizedState:fn.next;if(n!==null)fn=n,kt=t;else{if(t===null)throw dt.alternate===null?Error(r(467)):Error(r(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},fn===null?dt.memoizedState=fn=t:fn=fn.next=t}return fn}function Fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(t){var n=bo;return bo+=1,fs===null&&(fs=[]),t=Jp(fs,t,n),n=dt,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?km:hf),t}function Hl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Eo(t);if(t.$$typeof===O)return Un(t)}throw Error(r(438,String(t)))}function ef(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=dt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Fl(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function la(t,n){return typeof n=="function"?n(t):n}function Gl(t){var n=ln();return tf(n,kt,t)}function tf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var A=v=null,H=null,te=n,me=!1;do{var xe=te.lane&-536870913;if(xe!==te.lane?(bt&xe)===xe:(oa&xe)===xe){var re=te.revertLane;if(re===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),xe===rs&&(me=!0);else if((oa&re)===re){te=te.next,re===rs&&(me=!0);continue}else xe={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(A=H=xe,v=f):H=H.next=xe,dt.lanes|=re,Xa|=re;xe=te.action,Ar&&a(f,xe),f=te.hasEagerState?te.eagerState:a(f,xe)}else re={lane:xe,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(A=H=re,v=f):H=H.next=re,dt.lanes|=xe,Xa|=xe;te=te.next}while(te!==null&&te!==n);if(H===null?v=f:H.next=A,!ei(f,t.memoizedState)&&(hn=!0,me&&(a=ss,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=H,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function nf(t){var n=ln(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);ei(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function cm(t,n,a){var s=dt,u=ln(),f=At;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!ei((kt||u).memoizedState,a);if(v&&(u.memoizedState=a,hn=!0),u=u.queue,sf(hm.bind(null,s,u,t),[t]),u.getSnapshot!==n||v||fn!==null&&fn.memoizedState.tag&1){if(s.flags|=2048,hs(9,{destroy:void 0},fm.bind(null,s,u,a,n),null),Yt===null)throw Error(r(349));f||(oa&127)!==0||um(s,n,a)}return a}function um(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=Fl(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function fm(t,n,a,s){n.value=a,n.getSnapshot=s,dm(n)&&pm(t)}function hm(t,n,a){return a(function(){dm(n)&&pm(t)})}function dm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ei(t,a)}catch{return!0}}function pm(t){var n=_r(t,2);n!==null&&Kn(n,t,2)}function af(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),Ar){Fe(!0);try{a()}finally{Fe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},n}function mm(t,n,a,s){return t.baseState=a,tf(t,kt,typeof s=="function"?s:la)}function Nx(t,n,a,s,u){if(Xl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};N.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,gm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function gm(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=N.T,v={};N.T=v;try{var A=a(u,s),H=N.S;H!==null&&H(v,A),_m(t,n,A)}catch(te){rf(t,n,te)}finally{f!==null&&v.types!==null&&(f.types=v.types),N.T=f}}else try{f=a(u,s),_m(t,n,f)}catch(te){rf(t,n,te)}}function _m(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){vm(t,n,s)},function(s){return rf(t,n,s)}):vm(t,n,a)}function vm(t,n,a){n.status="fulfilled",n.value=a,xm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,gm(t,a)))}function rf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,xm(n),n=n.next;while(n!==s)}t.action=null}function xm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function ym(t,n){return n}function Sm(t,n){if(At){var a=Yt.formState;if(a!==null){e:{var s=dt;if(At){if(Qt){t:{for(var u=Qt,f=gi;u.nodeType!==8;){if(!f){u=null;break t}if(u=vi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Qt=vi(u.nextSibling),s=u.data==="F!";break e}}Ia(s)}s=!1}s&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ym,lastRenderedState:n},a.queue=s,a=Hm.bind(null,dt,s),s.dispatch=a,s=af(!1),f=ff.bind(null,dt,!1,s.queue),s=Fn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=Nx.bind(null,dt,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Mm(t){var n=ln();return bm(n,kt,t)}function bm(t,n,a){if(n=tf(t,n,ym)[0],t=Gl(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Eo(n)}catch(v){throw v===os?Ul:v}else s=n;n=ln();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,hs(9,{destroy:void 0},Lx.bind(null,u,a),null)),[s,f,t]}function Lx(t,n){t.action=n}function Em(t){var n=ln(),a=kt;if(a!==null)return bm(n,a,t);ln(),n=n.memoizedState,a=ln();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function hs(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=dt.updateQueue,n===null&&(n=Fl(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Tm(){return ln().memoizedState}function Vl(t,n,a,s){var u=Fn();dt.flags|=t,u.memoizedState=hs(1|n,{destroy:void 0},a,s===void 0?null:s)}function kl(t,n,a,s){var u=ln();s=s===void 0?null:s;var f=u.memoizedState.inst;kt!==null&&s!==null&&Zu(s,kt.memoizedState.deps)?u.memoizedState=hs(n,f,a,s):(dt.flags|=t,u.memoizedState=hs(1|n,f,a,s))}function Am(t,n){Vl(8390656,8,t,n)}function sf(t,n){kl(2048,8,t,n)}function Ox(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=Fl(),dt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function wm(t){var n=ln().memoizedState;return Ox({ref:n,nextImpl:t}),function(){if((Pt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Rm(t,n){return kl(4,2,t,n)}function Cm(t,n){return kl(4,4,t,n)}function Dm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Um(t,n,a){a=a!=null?a.concat([t]):null,kl(4,4,Dm.bind(null,n,t),a)}function of(){}function Nm(t,n){var a=ln();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Zu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Lm(t,n){var a=ln();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Zu(n,s[1]))return s[0];if(s=t(),Ar){Fe(!0);try{t()}finally{Fe(!1)}}return a.memoizedState=[s,n],s}function lf(t,n,a){return a===void 0||(oa&1073741824)!==0&&(bt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=O0(),dt.lanes|=t,Xa|=t,a)}function Om(t,n,a,s){return ei(a,n)?a:cs.current!==null?(t=lf(t,a,s),ei(t,n)||(hn=!0),t):(oa&42)===0||(oa&1073741824)!==0&&(bt&261930)===0?(hn=!0,t.memoizedState=a):(t=O0(),dt.lanes|=t,Xa|=t,n)}function Im(t,n,a,s,u){var f=G.p;G.p=f!==0&&8>f?f:8;var v=N.T,A={};N.T=A,ff(t,!1,n,a);try{var H=u(),te=N.S;if(te!==null&&te(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var me=Cx(H,s);To(t,n,me,si(t))}else To(t,n,s,si(t))}catch(xe){To(t,n,{then:function(){},status:"rejected",reason:xe},si())}finally{G.p=f,v!==null&&A.types!==null&&(v.types=A.types),N.T=v}}function Ix(){}function cf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Pm(t).queue;Im(t,u,n,ne,a===null?Ix:function(){return zm(t),a(s)})}function Pm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:ne},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function zm(t){var n=Pm(t);n.next===null&&(n=t.alternate.memoizedState),To(t,n.next.queue,{},si())}function uf(){return Un(Vo)}function Bm(){return ln().memoizedState}function Fm(){return ln().memoizedState}function Px(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();t=Ba(a);var s=Fa(n,t,a);s!==null&&(Kn(s,n,a),yo(s,n,a)),n={cache:Bu()},t.payload=n;return}n=n.return}}function zx(t,n,a){var s=si();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Xl(t)?Gm(n,a):(a=wu(t,n,a,s),a!==null&&(Kn(a,t,s),Vm(a,n,s)))}function Hm(t,n,a){var s=si();To(t,n,a,s)}function To(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xl(t))Gm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,A=f(v,a);if(u.hasEagerState=!0,u.eagerState=A,ei(A,v))return El(t,n,u,0),Yt===null&&bl(),!1}catch{}if(a=wu(t,n,u,s),a!==null)return Kn(a,t,s),Vm(a,n,s),!0}return!1}function ff(t,n,a,s){if(s={lane:2,revertLane:kf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Xl(t)){if(n)throw Error(r(479))}else n=wu(t,a,s,2),n!==null&&Kn(n,t,2)}function Xl(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function Gm(t,n){us=zl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Vm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,$i(t,a)}}var Ao={readContext:Un,use:Hl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Ao.useEffectEvent=an;var km={readContext:Un,use:Hl,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:Un,useEffect:Am,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Vl(4194308,4,Dm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Vl(4194308,4,t,n)},useInsertionEffect:function(t,n){Vl(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var s=t();if(Ar){Fe(!0);try{t()}finally{Fe(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Fn();if(a!==void 0){var u=a(n);if(Ar){Fe(!0);try{a(n)}finally{Fe(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=zx.bind(null,dt,t),[s.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=af(t);var n=t.queue,a=Hm.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:of,useDeferredValue:function(t,n){var a=Fn();return lf(a,t,n)},useTransition:function(){var t=af(!1);return t=Im.bind(null,dt,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=dt,u=Fn();if(At){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Yt===null)throw Error(r(349));(bt&127)!==0||um(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Am(hm.bind(null,s,f,t),[t]),s.flags|=2048,hs(9,{destroy:void 0},fm.bind(null,s,f,a,n),null),a},useId:function(){var t=Fn(),n=Yt.identifierPrefix;if(At){var a=Fi,s=Bi;a=(s&~(1<<32-Pe(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Dx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:uf,useFormState:Sm,useActionState:Sm,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ff.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:ef,useCacheRefresh:function(){return Fn().memoizedState=Px.bind(null,dt)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((Pt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},hf={readContext:Un,use:Hl,useCallback:Nm,useContext:Un,useEffect:sf,useImperativeHandle:Um,useInsertionEffect:Rm,useLayoutEffect:Cm,useMemo:Lm,useReducer:Gl,useRef:Tm,useState:function(){return Gl(la)},useDebugValue:of,useDeferredValue:function(t,n){var a=ln();return Om(a,kt.memoizedState,t,n)},useTransition:function(){var t=Gl(la)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:Eo(t),n]},useSyncExternalStore:cm,useId:Bm,useHostTransitionStatus:uf,useFormState:Mm,useActionState:Mm,useOptimistic:function(t,n){var a=ln();return mm(a,kt,t,n)},useMemoCache:ef,useCacheRefresh:Fm};hf.useEffectEvent=wm;var Xm={readContext:Un,use:Hl,useCallback:Nm,useContext:Un,useEffect:sf,useImperativeHandle:Um,useInsertionEffect:Rm,useLayoutEffect:Cm,useMemo:Lm,useReducer:nf,useRef:Tm,useState:function(){return nf(la)},useDebugValue:of,useDeferredValue:function(t,n){var a=ln();return kt===null?lf(a,t,n):Om(a,kt.memoizedState,t,n)},useTransition:function(){var t=nf(la)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:Eo(t),n]},useSyncExternalStore:cm,useId:Bm,useHostTransitionStatus:uf,useFormState:Em,useActionState:Em,useOptimistic:function(t,n){var a=ln();return kt!==null?mm(a,kt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ef,useCacheRefresh:Fm};Xm.useEffectEvent=wm;function df(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var pf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=si(),u=Ba(s);u.payload=n,a!=null&&(u.callback=a),n=Fa(t,u,s),n!==null&&(Kn(n,t,s),yo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=si(),u=Ba(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Fa(t,u,s),n!==null&&(Kn(n,t,s),yo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=si(),s=Ba(a);s.tag=2,n!=null&&(s.callback=n),n=Fa(t,s,a),n!==null&&(Kn(n,t,a),yo(n,t,a))}};function Wm(t,n,a,s,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,v):n.prototype&&n.prototype.isPureReactComponent?!fo(a,s)||!fo(u,f):!0}function qm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&pf.enqueueReplaceState(n,n.state,null)}function wr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Ym(t){Ml(t)}function jm(t){console.error(t)}function Zm(t){Ml(t)}function Wl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Km(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function mf(t,n,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Wl(t,n)},a}function Qm(t){return t=Ba(t),t.tag=3,t}function Jm(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){Km(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Km(n,a,s),typeof u!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function Bx(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&as(n,a,u,!0),a=ni.current,a!==null){switch(a.tag){case 31:case 13:return _i===null?ic():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Nl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Hf(t,s,u)),!1;case 22:return a.flags|=65536,s===Nl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Hf(t,s,u)),!1}throw Error(r(435,a.tag))}return Hf(t,s,u),ic(),!1}if(At)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Lu&&(t=Error(r(422),{cause:s}),mo(di(t,a)))):(s!==Lu&&(n=Error(r(423),{cause:s}),mo(di(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=di(s,a),u=mf(t.stateNode,s,u),Xu(t,u),rn!==4&&(rn=2)),!1;var f=Error(r(520),{cause:s});if(f=di(f,a),Oo===null?Oo=[f]:Oo.push(f),rn!==4&&(rn=2),n===null)return!0;s=di(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=mf(a.stateNode,s,t),Xu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Wa===null||!Wa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Qm(u),Jm(u,t,a,s),Xu(a,u),!1}a=a.return}while(a!==null);return!1}var gf=Error(r(461)),hn=!1;function Nn(t,n,a,s){n.child=t===null?nm(n,null,a,s):Tr(n,t.child,a,s)}function $m(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var v={};for(var A in s)A!=="ref"&&(v[A]=s[A])}else v=s;return Sr(n),s=Ku(t,n,a,v,f,u),A=Qu(),t!==null&&!hn?(Ju(t,n,u),ca(t,n,u)):(At&&A&&Uu(n),n.flags|=1,Nn(t,n,s,u),n.child)}function e0(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Ru(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,t0(t,n,f,s,u)):(t=Al(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Ef(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:fo,a(v,s)&&t.ref===n.ref)return ca(t,n,u)}return n.flags|=1,t=ia(f,s),t.ref=n.ref,t.return=n,n.child=t}function t0(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(fo(f,s)&&t.ref===n.ref)if(hn=!1,n.pendingProps=s=f,Ef(t,u))(t.flags&131072)!==0&&(hn=!0);else return n.lanes=t.lanes,ca(t,n,u)}return _f(t,n,a,s,u)}function n0(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return i0(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Dl(n,f!==null?f.cachePool:null),f!==null?rm(n,f):qu(),sm(n);else return s=n.lanes=536870912,i0(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(Dl(n,f.cachePool),rm(n,f),Ga(),n.memoizedState=null):(t!==null&&Dl(n,null),qu(),Ga());return Nn(t,n,u,a),n.child}function wo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function i0(t,n,a,s,u){var f=Hu();return f=f===null?null:{parent:un._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Dl(n,null),qu(),sm(n),t!==null&&as(t,n,s,!0),n.childLanes=u,null}function ql(t,n){return n=jl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function a0(t,n,a){return Tr(n,t.child,null,a),t=ql(n,n.pendingProps),t.flags|=2,ii(n),n.memoizedState=null,t}function Fx(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(At){if(s.mode==="hidden")return t=ql(n,s),n.lanes=536870912,wo(null,t);if(ju(n),(t=Qt)?(t=gg(t,gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(t),a.return=n,n.child=a,Dn=n,Qt=null)):t=null,t===null)throw Ia(n);return n.lanes=536870912,null}return ql(n,s)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(ju(n),u)if(n.flags&256)n.flags&=-257,n=a0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(hn||as(t,n,a,!1),u=(a&t.childLanes)!==0,hn||u){if(s=Yt,s!==null&&(v=Pi(s,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,_r(t,v),Kn(s,t,v),gf;ic(),n=a0(t,n,a)}else t=f.treeContext,Qt=vi(v.nextSibling),Dn=n,At=!0,Oa=null,gi=!1,t!==null&&Xp(n,t),n=ql(n,s),n.flags|=4096;return n}return t=ia(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Yl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function _f(t,n,a,s,u){return Sr(n),a=Ku(t,n,a,s,void 0,u),s=Qu(),t!==null&&!hn?(Ju(t,n,u),ca(t,n,u)):(At&&s&&Uu(n),n.flags|=1,Nn(t,n,a,u),n.child)}function r0(t,n,a,s,u,f){return Sr(n),n.updateQueue=null,a=lm(n,s,a,u),om(t),s=Qu(),t!==null&&!hn?(Ju(t,n,f),ca(t,n,f)):(At&&s&&Uu(n),n.flags|=1,Nn(t,n,a,f),n.child)}function s0(t,n,a,s,u){if(Sr(n),n.stateNode===null){var f=es,v=a.contextType;typeof v=="object"&&v!==null&&(f=Un(v)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=pf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Vu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Un(v):es,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(df(n,a,v,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&pf.enqueueReplaceState(f,f.state,null),Mo(n,s,f,u),So(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,H=wr(a,A);f.props=H;var te=f.context,me=a.contextType;v=es,typeof me=="object"&&me!==null&&(v=Un(me));var xe=a.getDerivedStateFromProps;me=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||te!==v)&&qm(n,f,s,v),za=!1;var re=n.memoizedState;f.state=re,Mo(n,s,f,u),So(),te=n.memoizedState,A||re!==te||za?(typeof xe=="function"&&(df(n,a,xe,s),te=n.memoizedState),(H=za||Wm(n,a,H,s,re,te,v))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=te),f.props=s,f.state=te,f.context=v,s=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,ku(t,n),v=n.memoizedProps,me=wr(a,v),f.props=me,xe=n.pendingProps,re=f.context,te=a.contextType,H=es,typeof te=="object"&&te!==null&&(H=Un(te)),A=a.getDerivedStateFromProps,(te=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==xe||re!==H)&&qm(n,f,s,H),za=!1,re=n.memoizedState,f.state=re,Mo(n,s,f,u),So();var fe=n.memoizedState;v!==xe||re!==fe||za||t!==null&&t.dependencies!==null&&Rl(t.dependencies)?(typeof A=="function"&&(df(n,a,A,s),fe=n.memoizedState),(me=za||Wm(n,a,me,s,re,fe,H)||t!==null&&t.dependencies!==null&&Rl(t.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,fe,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,fe,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=fe),f.props=s,f.state=fe,f.context=H,s=me):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Yl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Tr(n,t.child,null,u),n.child=Tr(n,null,a,u)):Nn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ca(t,n,u),t}function o0(t,n,a,s){return xr(),n.flags|=256,Nn(t,n,a,s),n.child}var vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xf(t){return{baseLanes:t,cachePool:Kp()}}function yf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function l0(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(on.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(u?Ha(n):Ga(),(t=Qt)?(t=gg(t,gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(t),a.return=n,n.child=a,Dn=n,Qt=null)):t=null,t===null)throw Ia(n);return nh(t)?n.lanes=32:n.lanes=536870912,null}var A=s.children;return s=s.fallback,u?(Ga(),u=n.mode,A=jl({mode:"hidden",children:A},u),s=vr(s,u,a,null),A.return=n,s.return=n,A.sibling=s,n.child=A,s=n.child,s.memoizedState=xf(a),s.childLanes=yf(t,v,a),n.memoizedState=vf,wo(null,s)):(Ha(n),Sf(n,A))}var H=t.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(f)n.flags&256?(Ha(n),n.flags&=-257,n=Mf(t,n,a)):n.memoizedState!==null?(Ga(),n.child=t.child,n.flags|=128,n=null):(Ga(),A=s.fallback,u=n.mode,s=jl({mode:"visible",children:s.children},u),A=vr(A,u,a,null),A.flags|=2,s.return=n,A.return=n,s.sibling=A,n.child=s,Tr(n,t.child,null,a),s=n.child,s.memoizedState=xf(a),s.childLanes=yf(t,v,a),n.memoizedState=vf,n=wo(null,s));else if(Ha(n),nh(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var te=v.dgst;v=te,s=Error(r(419)),s.stack="",s.digest=v,mo({value:s,source:null,stack:null}),n=Mf(t,n,a)}else if(hn||as(t,n,a,!1),v=(a&t.childLanes)!==0,hn||v){if(v=Yt,v!==null&&(s=Pi(v,a),s!==0&&s!==H.retryLane))throw H.retryLane=s,_r(t,s),Kn(v,t,s),gf;th(A)||ic(),n=Mf(t,n,a)}else th(A)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Qt=vi(A.nextSibling),Dn=n,At=!0,Oa=null,gi=!1,t!==null&&Xp(n,t),n=Sf(n,s.children),n.flags|=4096);return n}return u?(Ga(),A=s.fallback,u=n.mode,H=t.child,te=H.sibling,s=ia(H,{mode:"hidden",children:s.children}),s.subtreeFlags=H.subtreeFlags&65011712,te!==null?A=ia(te,A):(A=vr(A,u,a,null),A.flags|=2),A.return=n,s.return=n,s.sibling=A,n.child=s,wo(null,s),s=n.child,A=t.child.memoizedState,A===null?A=xf(a):(u=A.cachePool,u!==null?(H=un._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Kp(),A={baseLanes:A.baseLanes|a,cachePool:u}),s.memoizedState=A,s.childLanes=yf(t,v,a),n.memoizedState=vf,wo(t.child,s)):(Ha(n),a=t.child,t=a.sibling,a=ia(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function Sf(t,n){return n=jl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function jl(t,n){return t=ti(22,t,null,n),t.lanes=0,t}function Mf(t,n,a){return Tr(n,t.child,null,a),t=Sf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function c0(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Pu(t.return,n,a)}function bf(t,n,a,s,u,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function u0(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var v=on.current,A=(v&2)!==0;if(A?(v=v&1|2,n.flags|=128):v&=1,_e(on,v),Nn(t,n,s,a),s=At?po:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&c0(t,a,n);else if(t.tag===19)c0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Pl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),bf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Pl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}bf(n,!0,a,null,f,s);break;case"together":bf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function ca(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Xa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(as(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ia(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ia(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Ef(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Rl(t)))}function Hx(t,n,a){switch(n.tag){case 3:Ue(n,n.stateNode.containerInfo),Pa(n,un,t.memoizedState.cache),xr();break;case 27:case 5:Ge(n);break;case 4:Ue(n,n.stateNode.containerInfo);break;case 10:Pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ju(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?l0(t,n,a):(Ha(n),t=ca(t,n,a),t!==null?t.sibling:null);Ha(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(as(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return u0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(on,on.current),s)break;return null;case 22:return n.lanes=0,n0(t,n,a,n.pendingProps);case 24:Pa(n,un,t.memoizedState.cache)}return ca(t,n,a)}function f0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)hn=!0;else{if(!Ef(t,a)&&(n.flags&128)===0)return hn=!1,Hx(t,n,a);hn=(t.flags&131072)!==0}else hn=!1,At&&(n.flags&1048576)!==0&&kp(n,po,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(t=br(n.elementType),n.type=t,typeof t=="function")Ru(t)?(s=wr(t,s),n.tag=1,n=s0(null,n,t,s,a)):(n.tag=0,n=_f(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===L){n.tag=11,n=$m(null,n,t,s,a);break e}else if(u===I){n.tag=14,n=e0(null,n,t,s,a);break e}}throw n=se(t)||t,Error(r(306,n,""))}}return n;case 0:return _f(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=wr(s,n.pendingProps),s0(t,n,s,u,a);case 3:e:{if(Ue(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,ku(t,n),Mo(n,s,null,a);var v=n.memoizedState;if(s=v.cache,Pa(n,un,s),s!==f.cache&&zu(n,[un],a,!0),So(),s=v.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=o0(t,n,s,a);break e}else if(s!==u){u=di(Error(r(424)),n),mo(u),n=o0(t,n,s,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Qt=vi(t.firstChild),Dn=n,At=!0,Oa=null,gi=!0,a=nm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xr(),s===u){n=ca(t,n,a);break e}Nn(t,n,s,a)}n=n.child}return n;case 26:return Yl(t,n),t===null?(a=Mg(n.type,null,n.pendingProps,null))?n.memoizedState=a:At||(a=n.type,t=n.pendingProps,s=uc($.current).createElement(a),s[cn]=n,s[En]=t,Ln(s,a,t),w(s),n.stateNode=s):n.memoizedState=Mg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ge(n),t===null&&At&&(s=n.stateNode=xg(n.type,n.pendingProps,$.current),Dn=n,gi=!0,u=Qt,Za(n.type)?(ih=u,Qt=vi(s.firstChild)):Qt=u),Nn(t,n,n.pendingProps.children,a),Yl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((u=s=Qt)&&(s=gy(s,n.type,n.pendingProps,gi),s!==null?(n.stateNode=s,Dn=n,Qt=vi(s.firstChild),gi=!1,u=!0):u=!1),u||Ia(n)),Ge(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,s=f.children,Jf(u,f)?s=null:v!==null&&Jf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Ku(t,n,Ux,null,null,a),Vo._currentValue=u),Yl(t,n),Nn(t,n,s,a),n.child;case 6:return t===null&&At&&((t=a=Qt)&&(a=_y(a,n.pendingProps,gi),a!==null?(n.stateNode=a,Dn=n,Qt=null,t=!0):t=!1),t||Ia(n)),null;case 13:return l0(t,n,a);case 4:return Ue(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Tr(n,null,s,a):Nn(t,n,s,a),n.child;case 11:return $m(t,n,n.type,n.pendingProps,a);case 7:return Nn(t,n,n.pendingProps,a),n.child;case 8:return Nn(t,n,n.pendingProps.children,a),n.child;case 12:return Nn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Pa(n,n.type,s.value),Nn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,Sr(n),u=Un(u),s=s(u),n.flags|=1,Nn(t,n,s,a),n.child;case 14:return e0(t,n,n.type,n.pendingProps,a);case 15:return t0(t,n,n.type,n.pendingProps,a);case 19:return u0(t,n,a);case 31:return Fx(t,n,a);case 22:return n0(t,n,a,n.pendingProps);case 24:return Sr(n),s=Un(un),t===null?(u=Hu(),u===null&&(u=Yt,f=Bu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Vu(n),Pa(n,un,u)):((t.lanes&a)!==0&&(ku(t,n),Mo(n,null,null,a),So()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Pa(n,un,s)):(s=f.cache,Pa(n,un,s),s!==u.cache&&zu(n,[un],a,!0))),Nn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ua(t){t.flags|=4}function Tf(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(B0())t.flags|=8192;else throw Er=Nl,Gu}else t.flags&=-16777217}function h0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!wg(n))if(B0())t.flags|=8192;else throw Er=Nl,Gu}function Zl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?$e():536870912,t.lanes|=n,gs|=n)}function Ro(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Gx(t,n,a){var s=n.pendingProps;switch(Nu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(n),null;case 1:return Jt(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),sa(un),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(is(n)?ua(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ou())),Jt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ua(n),f!==null?(Jt(n),h0(n,f)):(Jt(n),Tf(n,u,null,s,a))):f?f!==t.memoizedState?(ua(n),Jt(n),h0(n,f)):(Jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ua(n),Jt(n),Tf(n,u,t,s,a)),null;case 27:if(ht(n),a=$.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ua(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Jt(n),null}t=Ae.current,is(n)?Wp(n):(t=xg(u,s,a),n.stateNode=t,ua(n))}return Jt(n),null;case 5:if(ht(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ua(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Jt(n),null}if(f=Ae.current,is(n))Wp(n);else{var v=uc($.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?v.createElement(u,{is:s.is}):v.createElement(u)}}f[cn]=n,f[En]=s;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Ln(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&ua(n)}}return Jt(n),Tf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ua(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=$.current,is(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||lg(t.nodeValue,a)),t||Ia(n,!0)}else t=uc(t).createTextNode(s),t[cn]=n,n.stateNode=t}return Jt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=is(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[cn]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),t=!1}else a=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ii(n),n):(ii(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Jt(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=is(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[cn]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),u=!1}else u=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ii(n),n):(ii(n),null)}return ii(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Zl(n,n.updateQueue),Jt(n),null);case 4:return He(),t===null&&Yf(n.stateNode.containerInfo),Jt(n),null;case 10:return sa(n.type),Jt(n),null;case 19:if(ie(on),s=n.memoizedState,s===null)return Jt(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)Ro(s,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Pl(t),f!==null){for(n.flags|=128,Ro(s,!1),t=f.updateQueue,n.updateQueue=t,Zl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Hp(a,t),a=a.sibling;return _e(on,on.current&1|2),At&&aa(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&b()>ec&&(n.flags|=128,u=!0,Ro(s,!1),n.lanes=4194304)}else{if(!u)if(t=Pl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Zl(n,t),Ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!At)return Jt(n),null}else 2*b()-s.renderingStartTime>ec&&a!==536870912&&(n.flags|=128,u=!0,Ro(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=b(),t.sibling=null,a=on.current,_e(on,u?a&1|2:a&1),At&&aa(n,s.treeForkCount),t):(Jt(n),null);case 22:case 23:return ii(n),Yu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Jt(n),n.subtreeFlags&6&&(n.flags|=8192)):Jt(n),a=n.updateQueue,a!==null&&Zl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&ie(Mr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),sa(un),Jt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Vx(t,n){switch(Nu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return sa(un),He(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ht(n),null;case 31:if(n.memoizedState!==null){if(ii(n),n.alternate===null)throw Error(r(340));xr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ii(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));xr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ie(on),null;case 4:return He(),null;case 10:return sa(n.type),null;case 22:case 23:return ii(n),Yu(),t!==null&&ie(Mr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return sa(un),null;case 25:return null;default:return null}}function d0(t,n){switch(Nu(n),n.tag){case 3:sa(un),He();break;case 26:case 27:case 5:ht(n);break;case 4:He();break;case 31:n.memoizedState!==null&&ii(n);break;case 13:ii(n);break;case 19:ie(on);break;case 10:sa(n.type);break;case 22:case 23:ii(n),Yu(),t!==null&&ie(Mr);break;case 24:sa(un)}}function Co(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,v=a.inst;s=f(),v.destroy=s}a=a.next}while(a!==u)}}catch(A){Gt(n,n.return,A)}}function Va(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var v=s.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,u=n;var H=a,te=A;try{te()}catch(me){Gt(u,H,me)}}}s=s.next}while(s!==f)}}catch(me){Gt(n,n.return,me)}}function p0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{am(n,a)}catch(s){Gt(t,t.return,s)}}}function m0(t,n,a){a.props=wr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Gt(t,n,s)}}function Do(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Gt(t,n,u)}}function Hi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Gt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Gt(t,n,u)}else a.current=null}function g0(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Gt(t,t.return,u)}}function Af(t,n,a){try{var s=t.stateNode;uy(s,t.type,a,n),s[En]=n}catch(u){Gt(t,t.return,u)}}function _0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Za(t.type)||t.tag===4}function wf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Za(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ta));else if(s!==4&&(s===27&&Za(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Rf(t,n,a),t=t.sibling;t!==null;)Rf(t,n,a),t=t.sibling}function Kl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Za(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Kl(t,n,a),t=t.sibling;t!==null;)Kl(t,n,a),t=t.sibling}function v0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Ln(n,s,a),n[cn]=t,n[En]=a}catch(f){Gt(t,t.return,f)}}var fa=!1,dn=!1,Cf=!1,x0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function kx(t,n){if(t=t.containerInfo,Kf=_c,t=Up(t),Su(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,A=-1,H=-1,te=0,me=0,xe=t,re=null;t:for(;;){for(var fe;xe!==a||u!==0&&xe.nodeType!==3||(A=v+u),xe!==f||s!==0&&xe.nodeType!==3||(H=v+s),xe.nodeType===3&&(v+=xe.nodeValue.length),(fe=xe.firstChild)!==null;)re=xe,xe=fe;for(;;){if(xe===t)break t;if(re===a&&++te===u&&(A=v),re===f&&++me===s&&(H=v),(fe=xe.nextSibling)!==null)break;xe=re,re=xe.parentNode}xe=fe}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qf={focusedElem:t,selectionRange:a},_c=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Xe=wr(a.type,u);t=s.getSnapshotBeforeUpdate(Xe,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(st){Gt(a,a.return,st)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)eh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":eh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function y0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:da(t,a),s&4&&Co(5,a);break;case 1:if(da(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Gt(a,a.return,v)}else{var u=wr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Gt(a,a.return,v)}}s&64&&p0(a),s&512&&Do(a,a.return);break;case 3:if(da(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{am(t,n)}catch(v){Gt(a,a.return,v)}}break;case 27:n===null&&s&4&&v0(a);case 26:case 5:da(t,a),n===null&&s&4&&g0(a),s&512&&Do(a,a.return);break;case 12:da(t,a);break;case 31:da(t,a),s&4&&b0(t,a);break;case 13:da(t,a),s&4&&E0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Jx.bind(null,a),vy(t,a))));break;case 22:if(s=a.memoizedState!==null||fa,!s){n=n!==null&&n.memoizedState!==null||dn,u=fa;var f=dn;fa=s,(dn=n)&&!f?pa(t,a,(a.subtreeFlags&8772)!==0):da(t,a),fa=u,dn=f}break;case 30:break;default:da(t,a)}}function S0(t){var n=t.alternate;n!==null&&(t.alternate=null,S0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&io(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,qn=!1;function ha(t,n,a){for(a=a.child;a!==null;)M0(t,n,a),a=a.sibling}function M0(t,n,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Te,a)}catch{}switch(a.tag){case 26:dn||Hi(a,n),ha(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Hi(a,n);var s=tn,u=qn;Za(a.type)&&(tn=a.stateNode,qn=!1),ha(t,n,a),Fo(a.stateNode),tn=s,qn=u;break;case 5:dn||Hi(a,n);case 6:if(s=tn,u=qn,tn=null,ha(t,n,a),tn=s,qn=u,tn!==null)if(qn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode)}catch(f){Gt(a,n,f)}else try{tn.removeChild(a.stateNode)}catch(f){Gt(a,n,f)}break;case 18:tn!==null&&(qn?(t=tn,pg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Es(t)):pg(tn,a.stateNode));break;case 4:s=tn,u=qn,tn=a.stateNode.containerInfo,qn=!0,ha(t,n,a),tn=s,qn=u;break;case 0:case 11:case 14:case 15:Va(2,a,n),dn||Va(4,a,n),ha(t,n,a);break;case 1:dn||(Hi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&m0(a,n,s)),ha(t,n,a);break;case 21:ha(t,n,a);break;case 22:dn=(s=dn)||a.memoizedState!==null,ha(t,n,a),dn=s;break;default:ha(t,n,a)}}function b0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Es(t)}catch(a){Gt(n,n.return,a)}}}function E0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Es(t)}catch(a){Gt(n,n.return,a)}}function Xx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new x0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new x0),n;default:throw Error(r(435,t.tag))}}function Ql(t,n){var a=Xx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=$x.bind(null,t,s);s.then(u,u)}})}function Yn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,v=n,A=v;e:for(;A!==null;){switch(A.tag){case 27:if(Za(A.type)){tn=A.stateNode,qn=!1;break e}break;case 5:tn=A.stateNode,qn=!1;break e;case 3:case 4:tn=A.stateNode.containerInfo,qn=!0;break e}A=A.return}if(tn===null)throw Error(r(160));M0(f,v,u),tn=null,qn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)T0(n,t),n=n.sibling}var Ci=null;function T0(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yn(n,t),jn(t),s&4&&(Va(3,t,t.return),Co(3,t),Va(5,t,t.return));break;case 1:Yn(n,t),jn(t),s&512&&(dn||a===null||Hi(a,a.return)),s&64&&fa&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=Ci;if(Yn(n,t),jn(t),s&512&&(dn||a===null||Hi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){e:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[hr]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Ln(f,s,a),f[cn]=t,w(f),s=f;break e;case"link":var v=Tg("link","href",u).get(s+(a.href||""));if(v){for(var A=0;A<v.length;A++)if(f=v[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(A,1);break t}}f=u.createElement(s),Ln(f,s,a),u.head.appendChild(f);break;case"meta":if(v=Tg("meta","content",u).get(s+(a.content||""))){for(A=0;A<v.length;A++)if(f=v[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(A,1);break t}}f=u.createElement(s),Ln(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[cn]=t,w(f),s=f}t.stateNode=s}else Ag(u,t.type,t.stateNode);else t.stateNode=Eg(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Ag(u,t.type,t.stateNode):Eg(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Af(t,t.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,t),jn(t),s&512&&(dn||a===null||Hi(a,a.return)),a!==null&&s&4&&Af(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,t),jn(t),s&512&&(dn||a===null||Hi(a,a.return)),t.flags&32){u=t.stateNode;try{mn(u,"")}catch(Xe){Gt(t,t.return,Xe)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Af(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Cf=!0);break;case 6:if(Yn(n,t),jn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Xe){Gt(t,t.return,Xe)}}break;case 3:if(dc=null,u=Ci,Ci=fc(n.containerInfo),Yn(n,t),Ci=u,jn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Es(n.containerInfo)}catch(Xe){Gt(t,t.return,Xe)}Cf&&(Cf=!1,A0(t));break;case 4:s=Ci,Ci=fc(t.stateNode.containerInfo),Yn(n,t),jn(t),Ci=s;break;case 12:Yn(n,t),jn(t);break;case 31:Yn(n,t),jn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ql(t,s)));break;case 13:Yn(n,t),jn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($l=b()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ql(t,s)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,te=fa,me=dn;if(fa=te||u,dn=me||H,Yn(n,t),dn=me,fa=te,jn(t),s&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||fa||dn||Rr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=H.stateNode;var xe=H.memoizedProps.style,re=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;A.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(Xe){Gt(H,H.return,Xe)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Xe){Gt(H,H.return,Xe)}}}else if(n.tag===18){if(a===null){H=n;try{var fe=H.stateNode;u?mg(fe,!0):mg(H.stateNode,!1)}catch(Xe){Gt(H,H.return,Xe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Ql(t,a))));break;case 19:Yn(n,t),jn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ql(t,s)));break;case 30:break;case 21:break;default:Yn(n,t),jn(t)}}function jn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(_0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=wf(t);Kl(t,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(mn(v,""),a.flags&=-33);var A=wf(t);Kl(t,A,v);break;case 3:case 4:var H=a.stateNode.containerInfo,te=wf(t);Rf(t,te,H);break;default:throw Error(r(161))}}catch(me){Gt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function A0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;A0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function da(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)y0(t,n.alternate,n),n=n.sibling}function Rr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Va(4,n,n.return),Rr(n);break;case 1:Hi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&m0(n,n.return,a),Rr(n);break;case 27:Fo(n.stateNode);case 26:case 5:Hi(n,n.return),Rr(n);break;case 22:n.memoizedState===null&&Rr(n);break;case 30:Rr(n);break;default:Rr(n)}t=t.sibling}}function pa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:pa(u,f,a),Co(4,f);break;case 1:if(pa(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Gt(s,s.return,te)}if(s=f,u=s.updateQueue,u!==null){var A=s.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)im(H[u],A)}catch(te){Gt(s,s.return,te)}}a&&v&64&&p0(f),Do(f,f.return);break;case 27:v0(f);case 26:case 5:pa(u,f,a),a&&s===null&&v&4&&g0(f),Do(f,f.return);break;case 12:pa(u,f,a);break;case 31:pa(u,f,a),a&&v&4&&b0(u,f);break;case 13:pa(u,f,a),a&&v&4&&E0(u,f);break;case 22:f.memoizedState===null&&pa(u,f,a),Do(f,f.return);break;case 30:break;default:pa(u,f,a)}n=n.sibling}}function Df(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&go(a))}function Uf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&go(t))}function Di(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)w0(t,n,a,s),n=n.sibling}function w0(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Di(t,n,a,s),u&2048&&Co(9,n);break;case 1:Di(t,n,a,s);break;case 3:Di(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&go(t)));break;case 12:if(u&2048){Di(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,A=f.onPostCommit;typeof A=="function"&&A(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Gt(n,n.return,H)}}else Di(t,n,a,s);break;case 31:Di(t,n,a,s);break;case 13:Di(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Di(t,n,a,s):Uo(t,n):f._visibility&2?Di(t,n,a,s):(f._visibility|=2,ds(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Df(v,n);break;case 24:Di(t,n,a,s),u&2048&&Uf(n.alternate,n);break;default:Di(t,n,a,s)}}function ds(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,A=a,H=s,te=v.flags;switch(v.tag){case 0:case 11:case 15:ds(f,v,A,H,u),Co(8,v);break;case 23:break;case 22:var me=v.stateNode;v.memoizedState!==null?me._visibility&2?ds(f,v,A,H,u):Uo(f,v):(me._visibility|=2,ds(f,v,A,H,u)),u&&te&2048&&Df(v.alternate,v);break;case 24:ds(f,v,A,H,u),u&&te&2048&&Uf(v.alternate,v);break;default:ds(f,v,A,H,u)}n=n.sibling}}function Uo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:Uo(a,s),u&2048&&Df(s.alternate,s);break;case 24:Uo(a,s),u&2048&&Uf(s.alternate,s);break;default:Uo(a,s)}n=n.sibling}}var No=8192;function ps(t,n,a){if(t.subtreeFlags&No)for(t=t.child;t!==null;)R0(t,n,a),t=t.sibling}function R0(t,n,a){switch(t.tag){case 26:ps(t,n,a),t.flags&No&&t.memoizedState!==null&&Dy(a,Ci,t.memoizedState,t.memoizedProps);break;case 5:ps(t,n,a);break;case 3:case 4:var s=Ci;Ci=fc(t.stateNode.containerInfo),ps(t,n,a),Ci=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=No,No=16777216,ps(t,n,a),No=s):ps(t,n,a));break;default:ps(t,n,a)}}function C0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Lo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Mn=s,U0(s,t)}C0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)D0(t),t=t.sibling}function D0(t){switch(t.tag){case 0:case 11:case 15:Lo(t),t.flags&2048&&Va(9,t,t.return);break;case 3:Lo(t);break;case 12:Lo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Jl(t)):Lo(t);break;default:Lo(t)}}function Jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Mn=s,U0(s,t)}C0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Va(8,n,n.return),Jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Jl(n));break;default:Jl(n)}t=t.sibling}}function U0(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:go(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Mn=s;else e:for(a=t;Mn!==null;){s=Mn;var u=s.sibling,f=s.return;if(S0(s),s===a){Mn=null;break e}if(u!==null){u.return=f,Mn=u;break e}Mn=f}}}var Wx={getCacheForType:function(t){var n=Un(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Un(un).controller.signal}},qx=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Yt=null,yt=null,bt=0,Ht=0,ai=null,ka=!1,ms=!1,Nf=!1,ma=0,rn=0,Xa=0,Cr=0,Lf=0,ri=0,gs=0,Oo=null,Zn=null,Of=!1,$l=0,N0=0,ec=1/0,tc=null,Wa=null,gn=0,qa=null,_s=null,ga=0,If=0,Pf=null,L0=null,Io=0,zf=null;function si(){return(Pt&2)!==0&&bt!==0?bt&-bt:N.T!==null?kf():fr()}function O0(){if(ri===0)if((bt&536870912)===0||At){var t=Se;Se<<=1,(Se&3932160)===0&&(Se=262144),ri=t}else ri=536870912;return t=ni.current,t!==null&&(t.flags|=32),ri}function Kn(t,n,a){(t===Yt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(vs(t,0),Ya(t,bt,ri,!1)),Bt(t,a),((Pt&2)===0||t!==Yt)&&(t===Yt&&((Pt&2)===0&&(Cr|=a),rn===4&&Ya(t,bt,ri,!1)),Gi(t))}function I0(t,n,a){if((Pt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),u=s?Zx(t,n):Ff(t,n,!0),f=s;do{if(u===0){ms&&!s&&Ya(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Yx(a)){u=Ff(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var A=t;u=Oo;var H=A.current.memoizedState.isDehydrated;if(H&&(vs(A,v).flags|=256),v=Ff(A,v,!1),v!==2){if(Nf&&!H){A.errorRecoveryDisabledLanes|=f,Cr|=f,u=4;break e}f=Zn,Zn=u,f!==null&&(Zn===null?Zn=f:Zn.push.apply(Zn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){vs(t,0),Ya(t,n,0,!0);break}e:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ya(s,n,ri,!ka);break e;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=$l+300-b(),10<u)){if(Ya(s,n,ri,!ka),de(s,0,!0)!==0)break e;ga=n,s.timeoutHandle=hg(P0.bind(null,s,a,Zn,tc,Of,n,ri,Cr,gs,ka,f,"Throttled",-0,0),u);break e}P0(s,a,Zn,tc,Of,n,ri,Cr,gs,ka,f,null,-0,0)}}break}while(!0);Gi(t)}function P0(t,n,a,s,u,f,v,A,H,te,me,xe,re,fe){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},R0(n,f,xe);var Xe=(f&62914560)===f?$l-b():(f&4194048)===f?N0-b():0;if(Xe=Uy(xe,Xe),Xe!==null){ga=f,t.cancelPendingCommit=Xe(X0.bind(null,t,n,f,a,s,u,v,A,H,me,xe,null,re,fe)),Ya(t,f,v,!te);return}}X0(t,n,f,a,s,u,v,A,H)}function Yx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!ei(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(t,n,a,s){n&=~Lf,n&=~Cr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Pe(u),v=1<<f;s[f]=-1,u&=~v}a!==0&&Ra(t,a,n)}function nc(){return(Pt&6)===0?(Po(0),!1):!0}function Bf(){if(yt!==null){if(Ht===0)var t=yt.return;else t=yt,ra=yr=null,$u(t),ls=null,vo=0,t=yt;for(;t!==null;)d0(t.alternate,t),t=t.return;yt=null}}function vs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,dy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ga=0,Bf(),Yt=t,yt=a=ia(t.current,null),bt=n,Ht=0,ai=null,ka=!1,ms=we(t,n),Nf=!1,gs=ri=Lf=Cr=Xa=rn=0,Zn=Oo=null,Of=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Pe(s),f=1<<u;n|=t[u],s&=~f}return ma=n,bl(),a}function z0(t,n){dt=null,N.H=Ao,n===os||n===Ul?(n=$p(),Ht=3):n===Gu?(n=$p(),Ht=4):Ht=n===gf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,yt===null&&(rn=1,Wl(t,di(n,t.current)))}function B0(){var t=ni.current;return t===null?!0:(bt&4194048)===bt?_i===null:(bt&62914560)===bt||(bt&536870912)!==0?t===_i:!1}function F0(){var t=N.H;return N.H=Ao,t===null?Ao:t}function H0(){var t=N.A;return N.A=Wx,t}function ic(){rn=4,ka||(bt&4194048)!==bt&&ni.current!==null||(ms=!0),(Xa&134217727)===0&&(Cr&134217727)===0||Yt===null||Ya(Yt,bt,ri,!1)}function Ff(t,n,a){var s=Pt;Pt|=2;var u=F0(),f=H0();(Yt!==t||bt!==n)&&(tc=null,vs(t,n)),n=!1;var v=rn;e:do try{if(Ht!==0&&yt!==null){var A=yt,H=ai;switch(Ht){case 8:Bf(),v=6;break e;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var te=Ht;if(Ht=0,ai=null,xs(t,A,H,te),a&&ms){v=0;break e}break;default:te=Ht,Ht=0,ai=null,xs(t,A,H,te)}}jx(),v=rn;break}catch(me){z0(t,me)}while(!0);return n&&t.shellSuspendCounter++,ra=yr=null,Pt=s,N.H=u,N.A=f,yt===null&&(Yt=null,bt=0,bl()),v}function jx(){for(;yt!==null;)G0(yt)}function Zx(t,n){var a=Pt;Pt|=2;var s=F0(),u=H0();Yt!==t||bt!==n?(tc=null,ec=b()+500,vs(t,n)):ms=we(t,n);e:do try{if(Ht!==0&&yt!==null){n=yt;var f=ai;t:switch(Ht){case 1:Ht=0,ai=null,xs(t,n,f,1);break;case 2:case 9:if(Qp(f)){Ht=0,ai=null,V0(n);break}n=function(){Ht!==2&&Ht!==9||Yt!==t||(Ht=7),Gi(t)},f.then(n,n);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:Qp(f)?(Ht=0,ai=null,V0(n)):(Ht=0,ai=null,xs(t,n,f,7));break;case 5:var v=null;switch(yt.tag){case 26:v=yt.memoizedState;case 5:case 27:var A=yt;if(v?wg(v):A.stateNode.complete){Ht=0,ai=null;var H=A.sibling;if(H!==null)yt=H;else{var te=A.return;te!==null?(yt=te,ac(te)):yt=null}break t}}Ht=0,ai=null,xs(t,n,f,5);break;case 6:Ht=0,ai=null,xs(t,n,f,6);break;case 8:Bf(),rn=6;break e;default:throw Error(r(462))}}Kx();break}catch(me){z0(t,me)}while(!0);return ra=yr=null,N.H=s,N.A=u,Pt=a,yt!==null?0:(Yt=null,bt=0,bl(),rn)}function Kx(){for(;yt!==null&&!qe();)G0(yt)}function G0(t){var n=f0(t.alternate,t,ma);t.memoizedProps=t.pendingProps,n===null?ac(t):yt=n}function V0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=r0(a,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=r0(a,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:$u(n);default:d0(a,n),n=yt=Hp(n,ma),n=f0(a,n,ma)}t.memoizedProps=t.pendingProps,n===null?ac(t):yt=n}function xs(t,n,a,s){ra=yr=null,$u(n),ls=null,vo=0;var u=n.return;try{if(Bx(t,u,n,a,bt)){rn=1,Wl(t,di(a,t.current)),yt=null;return}}catch(f){if(u!==null)throw yt=u,f;rn=1,Wl(t,di(a,t.current)),yt=null;return}n.flags&32768?(At||s===1?t=!0:ms||(bt&536870912)!==0?t=!1:(ka=t=!0,(s===2||s===9||s===3||s===6)&&(s=ni.current,s!==null&&s.tag===13&&(s.flags|=16384))),k0(n,t)):ac(n)}function ac(t){var n=t;do{if((n.flags&32768)!==0){k0(n,ka);return}t=n.return;var a=Gx(n.alternate,n,ma);if(a!==null){yt=a;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);rn===0&&(rn=5)}function k0(t,n){do{var a=Vx(t.alternate,t);if(a!==null){a.flags&=32767,yt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=a}while(t!==null);rn=6,yt=null}function X0(t,n,a,s,u,f,v,A,H){t.cancelPendingCommit=null;do rc();while(gn!==0);if((Pt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Au,Sn(t,a,f,v,A,H),t===Yt&&(yt=Yt=null,bt=0),_s=n,qa=t,ga=a,If=f,Pf=u,L0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ey(ue,function(){return Z0(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=N.T,N.T=null,u=G.p,G.p=2,v=Pt,Pt|=4;try{kx(t,n,a)}finally{Pt=v,G.p=u,N.T=s}}gn=1,W0(),q0(),Y0()}}function W0(){if(gn===1){gn=0;var t=qa,n=_s,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var s=G.p;G.p=2;var u=Pt;Pt|=4;try{T0(n,t);var f=Qf,v=Up(t.containerInfo),A=f.focusedElem,H=f.selectionRange;if(v!==A&&A&&A.ownerDocument&&Dp(A.ownerDocument.documentElement,A)){if(H!==null&&Su(A)){var te=H.start,me=H.end;if(me===void 0&&(me=te),"selectionStart"in A)A.selectionStart=te,A.selectionEnd=Math.min(me,A.value.length);else{var xe=A.ownerDocument||document,re=xe&&xe.defaultView||window;if(re.getSelection){var fe=re.getSelection(),Xe=A.textContent.length,st=Math.min(H.start,Xe),Wt=H.end===void 0?st:Math.min(H.end,Xe);!fe.extend&&st>Wt&&(v=Wt,Wt=st,st=v);var Y=Cp(A,st),X=Cp(A,Wt);if(Y&&X&&(fe.rangeCount!==1||fe.anchorNode!==Y.node||fe.anchorOffset!==Y.offset||fe.focusNode!==X.node||fe.focusOffset!==X.offset)){var ee=xe.createRange();ee.setStart(Y.node,Y.offset),fe.removeAllRanges(),st>Wt?(fe.addRange(ee),fe.extend(X.node,X.offset)):(ee.setEnd(X.node,X.offset),fe.addRange(ee))}}}}for(xe=[],fe=A;fe=fe.parentNode;)fe.nodeType===1&&xe.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xe.length;A++){var ve=xe[A];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}_c=!!Kf,Qf=Kf=null}finally{Pt=u,G.p=s,N.T=a}}t.current=n,gn=2}}function q0(){if(gn===2){gn=0;var t=qa,n=_s,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var s=G.p;G.p=2;var u=Pt;Pt|=4;try{y0(t,n.alternate,n)}finally{Pt=u,G.p=s,N.T=a}}gn=3}}function Y0(){if(gn===4||gn===3){gn=0,D();var t=qa,n=_s,a=ga,s=L0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,_s=qa=null,j0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Wa=null),Ti(a),n=n.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Te,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=N.T,u=G.p,G.p=2,N.T=null;try{for(var f=t.onRecoverableError,v=0;v<s.length;v++){var A=s[v];f(A.value,{componentStack:A.stack})}}finally{N.T=n,G.p=u}}(ga&3)!==0&&rc(),Gi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===zf?Io++:(Io=0,zf=t):Io=0,Po(0)}}function j0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,go(n)))}function rc(){return W0(),q0(),Y0(),Z0()}function Z0(){if(gn!==5)return!1;var t=qa,n=If;If=0;var a=Ti(ga),s=N.T,u=G.p;try{G.p=32>a?32:a,N.T=null,a=Pf,Pf=null;var f=qa,v=ga;if(gn=0,_s=qa=null,ga=0,(Pt&6)!==0)throw Error(r(331));var A=Pt;if(Pt|=4,D0(f.current),w0(f,f.current,v,a),Pt=A,Po(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Te,f)}catch{}return!0}finally{G.p=u,N.T=s,j0(t,n)}}function K0(t,n,a){n=di(a,n),n=mf(t.stateNode,n,2),t=Fa(t,n,2),t!==null&&(Bt(t,2),Gi(t))}function Gt(t,n,a){if(t.tag===3)K0(t,t,a);else for(;n!==null;){if(n.tag===3){K0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Wa===null||!Wa.has(s))){t=di(a,t),a=Qm(2),s=Fa(n,a,2),s!==null&&(Jm(a,s,n,t),Bt(s,2),Gi(s));break}}n=n.return}}function Hf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new qx;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Nf=!0,u.add(a),t=Qx.bind(null,t,n,a),n.then(t,t))}function Qx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Yt===t&&(bt&a)===a&&(rn===4||rn===3&&(bt&62914560)===bt&&300>b()-$l?(Pt&2)===0&&vs(t,0):Lf|=a,gs===bt&&(gs=0)),Gi(t)}function Q0(t,n){n===0&&(n=$e()),t=_r(t,n),t!==null&&(Bt(t,n),Gi(t))}function Jx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Q0(t,a)}function $x(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Q0(t,a)}function ey(t,n){return Mt(t,n)}var sc=null,ys=null,Gf=!1,oc=!1,Vf=!1,ja=0;function Gi(t){t!==ys&&t.next===null&&(ys===null?sc=ys=t:ys=ys.next=t),oc=!0,Gf||(Gf=!0,ny())}function Po(t,n){if(!Vf&&oc){Vf=!0;do for(var a=!1,s=sc;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var v=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-Pe(42|t)+1)-1,f&=u&~(v&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,tg(s,f))}else f=bt,f=de(s,s===Yt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||we(s,f)||(a=!0,tg(s,f));s=s.next}while(a);Vf=!1}}function ty(){J0()}function J0(){oc=Gf=!1;var t=0;ja!==0&&hy()&&(t=ja);for(var n=b(),a=null,s=sc;s!==null;){var u=s.next,f=$0(s,n);f===0?(s.next=null,a===null?sc=u:a.next=u,u===null&&(ys=a)):(a=s,(t!==0||(f&3)!==0)&&(oc=!0)),s=u}gn!==0&&gn!==5||Po(t),ja!==0&&(ja=0)}function $0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Pe(f),A=1<<v,H=u[v];H===-1?((A&a)===0||(A&s)!==0)&&(u[v]=De(A,n)):H<=n&&(t.expiredLanes|=A),f&=~A}if(n=Yt,a=bt,a=de(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Ut(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Ut(s),Ti(a)){case 2:case 8:a=ye;break;case 32:a=ue;break;case 268435456:a=Ne;break;default:a=ue}return s=eg.bind(null,t),a=Mt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Ut(s),t.callbackPriority=2,t.callbackNode=null,2}function eg(t,n){if(gn!==0&&gn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(rc()&&t.callbackNode!==a)return null;var s=bt;return s=de(t,t===Yt?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(I0(t,s,n),$0(t,b()),t.callbackNode!=null&&t.callbackNode===a?eg.bind(null,t):null)}function tg(t,n){if(rc())return null;I0(t,n,!0)}function ny(){py(function(){(Pt&6)!==0?Mt(pe,ty):J0()})}function kf(){if(ja===0){var t=rs;t===0&&(t=Ee,Ee<<=1,(Ee&261888)===0&&(Ee=256)),ja=t}return ja}function ng(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ml(""+t)}function ig(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function iy(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=ng((u[En]||null).action),v=s.submitter;v&&(n=(n=v[En]||null)?ng(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var A=new xl("action","action",null,s,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ja!==0){var H=v?ig(u,v):new FormData(u);cf(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(A.preventDefault(),H=v?ig(u,v):new FormData(u),cf(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Xf=0;Xf<Tu.length;Xf++){var Wf=Tu[Xf],ay=Wf.toLowerCase(),ry=Wf[0].toUpperCase()+Wf.slice(1);Ri(ay,"on"+ry)}Ri(Op,"onAnimationEnd"),Ri(Ip,"onAnimationIteration"),Ri(Pp,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(Sx,"onTransitionRun"),Ri(Mx,"onTransitionStart"),Ri(bx,"onTransitionCancel"),Ri(zp,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),ae("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ae("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ae("onBeforeInput",["compositionend","keypress","textInput","paste"]),ae("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function ag(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var v=s.length-1;0<=v;v--){var A=s[v],H=A.instance,te=A.currentTarget;if(A=A.listener,H!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=te;try{f(u)}catch(me){Ml(me)}u.currentTarget=null,f=H}else for(v=0;v<s.length;v++){if(A=s[v],H=A.instance,te=A.currentTarget,A=A.listener,H!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=te;try{f(u)}catch(me){Ml(me)}u.currentTarget=null,f=H}}}}function St(t,n){var a=n[Wr];a===void 0&&(a=n[Wr]=new Set);var s=t+"__bubble";a.has(s)||(rg(n,t,2,!1),a.add(s))}function qf(t,n,a){var s=0;n&&(s|=4),rg(a,t,s,n)}var lc="_reactListening"+Math.random().toString(36).slice(2);function Yf(t){if(!t[lc]){t[lc]=!0,q.forEach(function(a){a!=="selectionchange"&&(sy.has(a)||qf(a,!1,t),qf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[lc]||(n[lc]=!0,qf("selectionchange",!1,n))}}function rg(t,n,a,s){switch(Og(n)){case 2:var u=Oy;break;case 8:u=Iy;break;default:u=lh}a=u.bind(null,n,a,t),u=void 0,!hu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function jf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var A=s.stateNode.containerInfo;if(A===u)break;if(v===4)for(v=s.return;v!==null;){var H=v.tag;if((H===3||H===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;A!==null;){if(v=Ca(A),v===null)return;if(H=v.tag,H===5||H===6||H===26||H===27){s=f=v;continue e}A=A.parentNode}}s=s.return}up(function(){var te=f,me=uu(a),xe=[];e:{var re=Bp.get(t);if(re!==void 0){var fe=xl,Xe=t;switch(t){case"keypress":if(_l(a)===0)break e;case"keydown":case"keyup":fe=$v;break;case"focusin":Xe="focus",fe=gu;break;case"focusout":Xe="blur",fe=gu;break;case"beforeblur":case"afterblur":fe=gu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=Gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=nx;break;case Op:case Ip:case Pp:fe=Xv;break;case zp:fe=ax;break;case"scroll":case"scrollend":fe=Fv;break;case"wheel":fe=sx;break;case"copy":case"cut":case"paste":fe=qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=mp;break;case"toggle":case"beforetoggle":fe=lx}var st=(n&4)!==0,Wt=!st&&(t==="scroll"||t==="scrollend"),Y=st?re!==null?re+"Capture":null:re;st=[];for(var X=te,ee;X!==null;){var ve=X;if(ee=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ee===null||Y===null||(ve=ao(X,Y),ve!=null&&st.push(Bo(X,ve,ee))),Wt)break;X=X.return}0<st.length&&(re=new fe(re,Xe,null,a,me),xe.push({event:re,listeners:st}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",re&&a!==cu&&(Xe=a.relatedTarget||a.fromElement)&&(Ca(Xe)||Xe[Ai]))break e;if((fe||re)&&(re=me.window===me?me:(re=me.ownerDocument)?re.defaultView||re.parentWindow:window,fe?(Xe=a.relatedTarget||a.toElement,fe=te,Xe=Xe?Ca(Xe):null,Xe!==null&&(Wt=c(Xe),st=Xe.tag,Xe!==Wt||st!==5&&st!==27&&st!==6)&&(Xe=null)):(fe=null,Xe=te),fe!==Xe)){if(st=dp,ve="onMouseLeave",Y="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(st=mp,ve="onPointerLeave",Y="onPointerEnter",X="pointer"),Wt=fe==null?re:dr(fe),ee=Xe==null?re:dr(Xe),re=new st(ve,X+"leave",fe,a,me),re.target=Wt,re.relatedTarget=ee,ve=null,Ca(me)===te&&(st=new st(Y,X+"enter",Xe,a,me),st.target=ee,st.relatedTarget=Wt,ve=st),Wt=ve,fe&&Xe)t:{for(st=oy,Y=fe,X=Xe,ee=0,ve=Y;ve;ve=st(ve))ee++;ve=0;for(var tt=X;tt;tt=st(tt))ve++;for(;0<ee-ve;)Y=st(Y),ee--;for(;0<ve-ee;)X=st(X),ve--;for(;ee--;){if(Y===X||X!==null&&Y===X.alternate){st=Y;break t}Y=st(Y),X=st(X)}st=null}else st=null;fe!==null&&sg(xe,re,fe,st,!1),Xe!==null&&Wt!==null&&sg(xe,Wt,Xe,st,!0)}}e:{if(re=te?dr(te):window,fe=re.nodeName&&re.nodeName.toLowerCase(),fe==="select"||fe==="input"&&re.type==="file")var Nt=bp;else if(Sp(re))if(Ep)Nt=vx;else{Nt=gx;var Ke=mx}else fe=re.nodeName,!fe||fe.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?te&&wi(te.elementType)&&(Nt=bp):Nt=_x;if(Nt&&(Nt=Nt(t,te))){Mp(xe,Nt,a,me);break e}Ke&&Ke(t,re,te),t==="focusout"&&te&&re.type==="number"&&te.memoizedProps.value!=null&&An(re,"number",re.value)}switch(Ke=te?dr(te):window,t){case"focusin":(Sp(Ke)||Ke.contentEditable==="true")&&(Qr=Ke,Mu=te,ho=null);break;case"focusout":ho=Mu=Qr=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Np(xe,a,me);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":Np(xe,a,me)}var pt;if(vu)e:{switch(t){case"compositionstart":var Et="onCompositionStart";break e;case"compositionend":Et="onCompositionEnd";break e;case"compositionupdate":Et="onCompositionUpdate";break e}Et=void 0}else Kr?xp(t,a)&&(Et="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Et="onCompositionStart");Et&&(gp&&a.locale!=="ko"&&(Kr||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&Kr&&(pt=fp()):(Na=me,du="value"in Na?Na.value:Na.textContent,Kr=!0)),Ke=cc(te,Et),0<Ke.length&&(Et=new pp(Et,t,null,a,me),xe.push({event:Et,listeners:Ke}),pt?Et.data=pt:(pt=yp(a),pt!==null&&(Et.data=pt)))),(pt=ux?fx(t,a):hx(t,a))&&(Et=cc(te,"onBeforeInput"),0<Et.length&&(Ke=new pp("onBeforeInput","beforeinput",null,a,me),xe.push({event:Ke,listeners:Et}),Ke.data=pt)),iy(xe,t,te,a,me)}ag(xe,n)})}function Bo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function cc(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ao(t,a),u!=null&&s.unshift(Bo(t,u,f)),u=ao(t,n),u!=null&&s.push(Bo(t,u,f))),t.tag===3)return s;t=t.return}return[]}function oy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function sg(t,n,a,s,u){for(var f=n._reactName,v=[];a!==null&&a!==s;){var A=a,H=A.alternate,te=A.stateNode;if(A=A.tag,H!==null&&H===s)break;A!==5&&A!==26&&A!==27||te===null||(H=te,u?(te=ao(a,f),te!=null&&v.unshift(Bo(a,te,H))):u||(te=ao(a,f),te!=null&&v.push(Bo(a,te,H)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var ly=/\r\n?/g,cy=/\u0000|\uFFFD/g;function og(t){return(typeof t=="string"?t:""+t).replace(ly,`
`).replace(cy,"")}function lg(t,n){return n=og(n),og(t)===n}function Xt(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||mn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&mn(t,""+s);break;case"className":it(t,"class",s);break;case"tabIndex":it(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":it(t,a,s);break;case"style":Yr(t,s,f);break;case"data":if(n!=="object"){it(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ml(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xt(t,n,"name",u.name,u,null),Xt(t,n,"formEncType",u.formEncType,u,null),Xt(t,n,"formMethod",u.formMethod,u,null),Xt(t,n,"formTarget",u.formTarget,u,null)):(Xt(t,n,"encType",u.encType,u,null),Xt(t,n,"method",u.method,u,null),Xt(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ml(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=ta);break;case"onScroll":s!=null&&St("scroll",t);break;case"onScrollEnd":s!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=ml(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":St("beforetoggle",t),St("toggle",t),je(t,"popover",s);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":je(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zv.get(a)||a,je(t,a,s))}}function Zf(t,n,a,s,u,f){switch(a){case"style":Yr(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?mn(t,s):(typeof s=="number"||typeof s=="bigint")&&mn(t,""+s);break;case"onScroll":s!=null&&St("scroll",t);break;case"onScrollEnd":s!=null&&St("scrollend",t);break;case"onClick":s!=null&&(t.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[En]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break e}a in t?t[a]=s:s===!0?t.setAttribute(a,""):je(t,a,s)}}}function Ln(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xt(t,n,f,v,a,null)}}u&&Xt(t,n,"srcSet",a.srcSet,a,null),s&&Xt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var A=f=v=u=null,H=null,te=null;for(s in a)if(a.hasOwnProperty(s)){var me=a[s];if(me!=null)switch(s){case"name":u=me;break;case"type":v=me;break;case"checked":H=me;break;case"defaultChecked":te=me;break;case"value":f=me;break;case"defaultValue":A=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:Xt(t,n,s,me,a,null)}}ea(t,f,A,H,te,v,u,!1);return;case"select":St("invalid",t),s=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":v=A;break;case"multiple":s=A;default:Xt(t,n,u,A,a,null)}n=f,a=v,t.multiple=!!s,n!=null?fi(t,!!s,n,!1):a!=null&&fi(t,!!s,a,!0);return;case"textarea":St("invalid",t),f=u=s=null;for(v in a)if(a.hasOwnProperty(v)&&(A=a[v],A!=null))switch(v){case"value":s=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Xt(t,n,v,A,a,null)}wn(t,s,u,f);return;case"option":for(H in a)a.hasOwnProperty(H)&&(s=a[H],s!=null)&&(H==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Xt(t,n,H,s,a,null));return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(s=0;s<zo.length;s++)St(zo[s],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(s=a[te],s!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xt(t,n,te,s,a,null)}return;default:if(wi(n)){for(me in a)a.hasOwnProperty(me)&&(s=a[me],s!==void 0&&Zf(t,n,me,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&Xt(t,n,A,s,a,null))}function uy(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,A=null,H=null,te=null,me=null;for(fe in a){var xe=a[fe];if(a.hasOwnProperty(fe)&&xe!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":H=xe;default:s.hasOwnProperty(fe)||Xt(t,n,fe,null,s,xe)}}for(var re in s){var fe=s[re];if(xe=a[re],s.hasOwnProperty(re)&&(fe!=null||xe!=null))switch(re){case"type":f=fe;break;case"name":u=fe;break;case"checked":te=fe;break;case"defaultChecked":me=fe;break;case"value":v=fe;break;case"defaultValue":A=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:fe!==xe&&Xt(t,n,re,fe,s,xe)}}Tn(t,v,A,H,te,me,f,u);return;case"select":fe=v=A=re=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":fe=H;default:s.hasOwnProperty(f)||Xt(t,n,f,null,s,H)}for(u in s)if(f=s[u],H=a[u],s.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":re=f;break;case"defaultValue":A=f;break;case"multiple":v=f;default:f!==H&&Xt(t,n,u,f,s,H)}n=A,a=v,s=fe,re!=null?fi(t,!!a,re,!1):!!s!=!!a&&(n!=null?fi(t,!!a,n,!0):fi(t,!!a,a?[]:"",!1));return;case"textarea":fe=re=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xt(t,n,A,null,s,u)}for(v in s)if(u=s[v],f=a[v],s.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":re=u;break;case"defaultValue":fe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Xt(t,n,v,u,s,f)}Ft(t,re,fe);return;case"option":for(var Xe in a)re=a[Xe],a.hasOwnProperty(Xe)&&re!=null&&!s.hasOwnProperty(Xe)&&(Xe==="selected"?t.selected=!1:Xt(t,n,Xe,null,s,re));for(H in s)re=s[H],fe=a[H],s.hasOwnProperty(H)&&re!==fe&&(re!=null||fe!=null)&&(H==="selected"?t.selected=re&&typeof re!="function"&&typeof re!="symbol":Xt(t,n,H,re,s,fe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in a)re=a[st],a.hasOwnProperty(st)&&re!=null&&!s.hasOwnProperty(st)&&Xt(t,n,st,null,s,re);for(te in s)if(re=s[te],fe=a[te],s.hasOwnProperty(te)&&re!==fe&&(re!=null||fe!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(r(137,n));break;default:Xt(t,n,te,re,s,fe)}return;default:if(wi(n)){for(var Wt in a)re=a[Wt],a.hasOwnProperty(Wt)&&re!==void 0&&!s.hasOwnProperty(Wt)&&Zf(t,n,Wt,void 0,s,re);for(me in s)re=s[me],fe=a[me],!s.hasOwnProperty(me)||re===fe||re===void 0&&fe===void 0||Zf(t,n,me,re,s,fe);return}}for(var Y in a)re=a[Y],a.hasOwnProperty(Y)&&re!=null&&!s.hasOwnProperty(Y)&&Xt(t,n,Y,null,s,re);for(xe in s)re=s[xe],fe=a[xe],!s.hasOwnProperty(xe)||re===fe||re==null&&fe==null||Xt(t,n,xe,re,s,fe)}function cg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,v=u.initiatorType,A=u.duration;if(f&&A&&cg(v)){for(v=0,A=u.responseEnd,s+=1;s<a.length;s++){var H=a[s],te=H.startTime;if(te>A)break;var me=H.transferSize,xe=H.initiatorType;me&&cg(xe)&&(H=H.responseEnd,v+=me*(H<A?1:(A-te)/(H-te)))}if(--s,n+=8*(f+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Kf=null,Qf=null;function uc(t){return t.nodeType===9?t:t.ownerDocument}function ug(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Jf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $f=null;function hy(){var t=window.event;return t&&t.type==="popstate"?t===$f?!1:($f=t,!0):($f=null,!1)}var hg=typeof setTimeout=="function"?setTimeout:void 0,dy=typeof clearTimeout=="function"?clearTimeout:void 0,dg=typeof Promise=="function"?Promise:void 0,py=typeof queueMicrotask=="function"?queueMicrotask:typeof dg<"u"?function(t){return dg.resolve(null).then(t).catch(my)}:hg;function my(t){setTimeout(function(){throw t})}function Za(t){return t==="head"}function pg(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),Es(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Fo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Fo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,A=f.nodeName;f[hr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Fo(t.ownerDocument.body);a=u}while(a);Es(n)}function mg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function eh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":eh(a),io(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function gy(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[hr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function _y(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function gg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=vi(t.nextSibling),t===null))return null;return t}function th(t){return t.data==="$?"||t.data==="$~"}function nh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function vy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ih=null;function _g(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return vi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function vg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function xg(t,n,a){switch(n=uc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Fo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);io(t)}var xi=new Map,yg=new Set;function fc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var _a=G.d;G.d={f:xy,r:yy,D:Sy,C:My,L:by,m:Ey,X:Ay,S:Ty,M:wy};function xy(){var t=_a.f(),n=nc();return t||n}function yy(t){var n=Da(t);n!==null&&n.tag===5&&n.type==="form"?zm(n):_a.r(t)}var Ss=typeof document>"u"?null:document;function Sg(t,n,a){var s=Ss;if(s&&typeof n=="string"&&n){var u=lt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),yg.has(u)||(yg.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Ln(n,"link",t),w(n),s.head.appendChild(n)))}}function Sy(t){_a.D(t),Sg("dns-prefetch",t,null)}function My(t,n){_a.C(t,n),Sg("preconnect",t,n)}function by(t,n,a){_a.L(t,n,a);var s=Ss;if(s&&t&&n){var u='link[rel="preload"][as="'+lt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+lt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+lt(a.imageSizes)+'"]')):u+='[href="'+lt(t)+'"]';var f=u;switch(n){case"style":f=Ms(t);break;case"script":f=bs(t)}xi.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),xi.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(Ho(f))||n==="script"&&s.querySelector(Go(f))||(n=s.createElement("link"),Ln(n,"link",t),w(n),s.head.appendChild(n)))}}function Ey(t,n){_a.m(t,n);var a=Ss;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+lt(s)+'"][href="'+lt(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=bs(t)}if(!xi.has(f)&&(t=g({rel:"modulepreload",href:t},n),xi.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Go(f)))return}s=a.createElement("link"),Ln(s,"link",t),w(s),a.head.appendChild(s)}}}function Ty(t,n,a){_a.S(t,n,a);var s=Ss;if(s&&t){var u=Ua(s).hoistableStyles,f=Ms(t);n=n||"default";var v=u.get(f);if(!v){var A={loading:0,preload:null};if(v=s.querySelector(Ho(f)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=xi.get(f))&&ah(t,a);var H=v=s.createElement("link");w(H),Ln(H,"link",t),H._p=new Promise(function(te,me){H.onload=te,H.onerror=me}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,hc(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:A},u.set(f,v)}}}function Ay(t,n){_a.X(t,n);var a=Ss;if(a&&t){var s=Ua(a).hoistableScripts,u=bs(t),f=s.get(u);f||(f=a.querySelector(Go(u)),f||(t=g({src:t,async:!0},n),(n=xi.get(u))&&rh(t,n),f=a.createElement("script"),w(f),Ln(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function wy(t,n){_a.M(t,n);var a=Ss;if(a&&t){var s=Ua(a).hoistableScripts,u=bs(t),f=s.get(u);f||(f=a.querySelector(Go(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=xi.get(u))&&rh(t,n),f=a.createElement("script"),w(f),Ln(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Mg(t,n,a,s){var u=(u=$.current)?fc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ms(a.href),a=Ua(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ms(a.href);var f=Ua(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(Ho(t)))&&!f._p&&(v.instance=f,v.state.loading=5),xi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xi.set(t,a),f||Ry(u,t,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=bs(a),a=Ua(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ms(t){return'href="'+lt(t)+'"'}function Ho(t){return'link[rel="stylesheet"]['+t+"]"}function bg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Ry(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Ln(n,"link",a),w(n),t.head.appendChild(n))}function bs(t){return'[src="'+lt(t)+'"]'}function Go(t){return"script[async]"+t}function Eg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+lt(a.href)+'"]');if(s)return n.instance=s,w(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),w(s),Ln(s,"style",u),hc(s,a.precedence,t),n.instance=s;case"stylesheet":u=Ms(a.href);var f=t.querySelector(Ho(u));if(f)return n.state.loading|=4,n.instance=f,w(f),f;s=bg(a),(u=xi.get(u))&&ah(s,u),f=(t.ownerDocument||t).createElement("link"),w(f);var v=f;return v._p=new Promise(function(A,H){v.onload=A,v.onerror=H}),Ln(f,"link",s),n.state.loading|=4,hc(f,a.precedence,t),n.instance=f;case"script":return f=bs(a.src),(u=t.querySelector(Go(f)))?(n.instance=u,w(u),u):(s=a,(u=xi.get(f))&&(s=g({},a),rh(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),w(u),Ln(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,hc(s,a.precedence,t));return n.instance}function hc(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,v=0;v<s.length;v++){var A=s[v];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ah(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function rh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var dc=null;function Tg(t,n,a){if(dc===null){var s=new Map,u=dc=new Map;u.set(a,s)}else u=dc,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[hr]||f[cn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var A=s.get(v);A?A.push(f):s.set(v,[f])}}return s}function Ag(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Cy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function wg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Dy(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ms(s.href),f=n.querySelector(Ho(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=pc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,w(f);return}f=n.ownerDocument||n,s=bg(s),(u=xi.get(u))&&ah(s,u),f=f.createElement("link"),w(f);var v=f;v._p=new Promise(function(A,H){v.onload=A,v.onerror=H}),Ln(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=pc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var sh=0;function Uy(t,n){return t.stylesheets&&t.count===0&&gc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&sh===0&&(sh=62500*fy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>sh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mc=null;function gc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mc=new Map,n.forEach(Ny,t),mc=null,pc.call(t))}function Ny(t,n){if(!(n.state.loading&4)){var a=mc.get(t);if(a)var s=a.get(null);else{a=new Map,mc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||s,f===s&&a.set(null,u),a.set(v,u),this.count++,s=pc.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Vo={$$typeof:O,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function Ly(t,n,a,s,u,f,v,A,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=et(0),this.hiddenUpdates=et(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Rg(t,n,a,s,u,f,v,A,H,te,me,xe){return t=new Ly(t,n,a,v,H,te,me,xe,A),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),t.current=f,f.stateNode=t,n=Bu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Vu(f),t}function Cg(t){return t?(t=es,t):es}function Dg(t,n,a,s,u,f){u=Cg(u),s.context===null?s.context=u:s.pendingContext=u,s=Ba(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Fa(t,s,n),a!==null&&(Kn(a,t,n),yo(a,t,n))}function Ug(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function oh(t,n){Ug(t,n),(t=t.alternate)&&Ug(t,n)}function Ng(t){if(t.tag===13||t.tag===31){var n=_r(t,67108864);n!==null&&Kn(n,t,67108864),oh(t,67108864)}}function Lg(t){if(t.tag===13||t.tag===31){var n=si();n=Ei(n);var a=_r(t,n);a!==null&&Kn(a,t,n),oh(t,n)}}var _c=!0;function Oy(t,n,a,s){var u=N.T;N.T=null;var f=G.p;try{G.p=2,lh(t,n,a,s)}finally{G.p=f,N.T=u}}function Iy(t,n,a,s){var u=N.T;N.T=null;var f=G.p;try{G.p=8,lh(t,n,a,s)}finally{G.p=f,N.T=u}}function lh(t,n,a,s){if(_c){var u=ch(s);if(u===null)jf(t,n,s,vc,a),Ig(t,s);else if(zy(u,t,n,a,s))s.stopPropagation();else if(Ig(t,s),n&4&&-1<Py.indexOf(t)){for(;u!==null;){var f=Da(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=le(f.pendingLanes);if(v!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var H=1<<31-Pe(v);A.entanglements[1]|=H,v&=~H}Gi(f),(Pt&6)===0&&(ec=b()+500,Po(0))}}break;case 31:case 13:A=_r(f,2),A!==null&&Kn(A,f,2),nc(),oh(f,2)}if(f=ch(s),f===null&&jf(t,n,s,vc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else jf(t,n,s,null,a)}}function ch(t){return t=uu(t),uh(t)}var vc=null;function uh(t){if(vc=null,t=Ca(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return vc=t,null}function Og(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case pe:return 2;case ye:return 8;case ue:case Ye:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var fh=!1,Ka=null,Qa=null,Ja=null,ko=new Map,Xo=new Map,$a=[],Py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ig(t,n){switch(t){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(n.pointerId)}}function Wo(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Da(n),n!==null&&Ng(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function zy(t,n,a,s,u){switch(n){case"focusin":return Ka=Wo(Ka,t,n,a,s,u),!0;case"dragenter":return Qa=Wo(Qa,t,n,a,s,u),!0;case"mouseover":return Ja=Wo(Ja,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return ko.set(f,Wo(ko.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Xo.set(f,Wo(Xo.get(f)||null,t,n,a,s,u)),!0}return!1}function Pg(t){var n=Ca(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,zi(t.priority,function(){Lg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,zi(t.priority,function(){Lg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ch(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);cu=s,a.target.dispatchEvent(s),cu=null}else return n=Da(a),n!==null&&Ng(n),t.blockedOn=a,!1;n.shift()}return!0}function zg(t,n,a){xc(t)&&a.delete(n)}function By(){fh=!1,Ka!==null&&xc(Ka)&&(Ka=null),Qa!==null&&xc(Qa)&&(Qa=null),Ja!==null&&xc(Ja)&&(Ja=null),ko.forEach(zg),Xo.forEach(zg)}function yc(t,n){t.blockedOn===n&&(t.blockedOn=null,fh||(fh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,By)))}var Sc=null;function Bg(t){Sc!==t&&(Sc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Sc===t&&(Sc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(uh(s||a)===null)continue;break}var f=Da(a);f!==null&&(t.splice(n,3),n-=3,cf(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function Es(t){function n(H){return yc(H,t)}Ka!==null&&yc(Ka,t),Qa!==null&&yc(Qa,t),Ja!==null&&yc(Ja,t),ko.forEach(n),Xo.forEach(n);for(var a=0;a<$a.length;a++){var s=$a[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)Pg(a),a.blockedOn===null&&$a.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],v=u[En]||null;if(typeof f=="function")v||Bg(a);else if(v){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[En]||null)A=v.formAction;else if(uh(u)!==null)continue}else A=v.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),Bg(a)}}}function Fg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function hh(t){this._internalRoot=t}Mc.prototype.render=hh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=si();Dg(a,s,t,n,null,null)},Mc.prototype.unmount=hh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Dg(t.current,2,null,t,null,null),nc(),n[Ai]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var n=fr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,t),a===0&&Pg(t)}};var Hg=e.version;if(Hg!=="19.2.3")throw Error(r(527,Hg,"19.2.3"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Fy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{Te=bc.inject(Fy),Re=bc}catch{}}return Yo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Ym,f=jm,v=Zm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Rg(t,1,!1,null,null,a,s,null,u,f,v,Fg),t[Ai]=n.current,Yf(t),new hh(n)},Yo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Ym,v=jm,A=Zm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Rg(t,1,!0,n,a??null,s,u,H,f,v,A,Fg),n.context=Cg(null),a=n.current,s=si(),s=Ei(s),u=Ba(s),u.callback=null,Fa(a,u,s),a=s,n.current.lanes=a,Bt(n,a),Gi(n),t[Ai]=n.current,Yf(t),new Mc(n)},Yo.version="19.2.3",Yo}var Kg;function Ky(){if(Kg)return mh.exports;Kg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),mh.exports=Zy(),mh.exports}var Qy=Ky();const Jy=$_(Qy),$y="modulepreload",eS=function(o){return"/horror/"+o},Qg={},tS=function(e,i,r){let l=Promise.resolve();if(i&&i.length>0){let p=function(_){return Promise.all(_.map(g=>Promise.resolve(g).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};var h=p;document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=d?.nonce||d?.getAttribute("nonce");l=p(i.map(_=>{if(_=eS(_),_ in Qg)return;Qg[_]=!0;const g=_.endsWith(".css"),y=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${y}`))return;const S=document.createElement("link");if(S.rel=g?"stylesheet":$y,g||(S.as="script"),S.crossOrigin="",S.href=_,m&&S.setAttribute("nonce",m),document.head.appendChild(S),g)return new Promise((E,R)=>{S.addEventListener("load",E),S.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${_}`)))})}))}function c(d){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=d,window.dispatchEvent(m),!m.defaultPrevented)throw d}return l.then(d=>{for(const m of d||[])m.status==="rejected"&&c(m.reason);return e().catch(c)})};function nS(o={}){const{immediate:e=!1,onNeedRefresh:i,onOfflineReady:r,onRegistered:l,onRegisteredSW:c,onRegisterError:h}=o;let d,m;const p=async(g=!0)=>{await m};async function _(){if("serviceWorker"in navigator){if(d=await tS(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:g}},[]).then(({Workbox:g})=>new g("/horror/sw.js",{scope:"/horror/",type:"classic"})).catch(g=>{h?.(g)}),!d)return;d.addEventListener("activated",g=>{(g.isUpdate||g.isExternal)&&window.location.reload()}),d.addEventListener("installed",g=>{g.isUpdate||r?.()}),d.register({immediate:e}).then(g=>{c?c("/horror/sw.js",g):l?.(g)}).catch(g=>{h?.(g)})}}return m=_(),p}const iS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),aS=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),Jg=o=>{const e=aS(o);return e.charAt(0).toUpperCase()+e.slice(1)},ev=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),rS=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var sS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const oS=vt.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:h,...d},m)=>vt.createElement("svg",{ref:m,...sS,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:ev("lucide",l),...!c&&!rS(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,_])=>vt.createElement(p,_)),...Array.isArray(c)?c:[c]]));const Xr=(o,e)=>{const i=vt.forwardRef(({className:r,...l},c)=>vt.createElement(oS,{ref:c,iconNode:e,className:ev(`lucide-${iS(Jg(o))}`,`lucide-${o}`,r),...l}));return i.displayName=Jg(o),i};const lS=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],tv=Xr("arrow-left",lS);const cS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],uS=Xr("circle-alert",cS);const fS=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],hS=Xr("eye",fS);const dS=[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]],pS=Xr("ghost",dS);const mS=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],gS=Xr("mountain",mS);const _S=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],vS=Xr("play",_S);const xS=[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]],yS=Xr("wheat",xS);const jd="182",SS=0,$g=1,MS=2,Yc=1,bS=2,il=3,ur=0,$n=1,Xi=2,Ea=0,Xs=1,e_=2,t_=3,n_=4,ES=5,zr=100,TS=101,AS=102,wS=103,RS=104,CS=200,DS=201,US=202,NS=203,$h=204,ed=205,LS=206,OS=207,IS=208,PS=209,zS=210,BS=211,FS=212,HS=213,GS=214,td=0,nd=1,id=2,Ys=3,ad=4,rd=5,sd=6,od=7,nv=0,VS=1,kS=2,ji=0,iv=1,av=2,rv=3,sv=4,ov=5,lv=6,cv=7,uv=300,Vr=301,js=302,ld=303,cd=304,au=306,Ws=1e3,ba=1001,ud=1002,_n=1003,XS=1004,Ec=1005,zn=1006,xh=1007,Fr=1008,ci=1009,fv=1010,hv=1011,sl=1012,Zd=1013,Ki=1014,qi=1015,Aa=1016,Kd=1017,Qd=1018,ol=1020,dv=35902,pv=35899,mv=1021,gv=1022,Oi=1023,wa=1026,Hr=1027,_v=1028,Jd=1029,Zs=1030,$d=1031,ep=1033,jc=33776,Zc=33777,Kc=33778,Qc=33779,fd=35840,hd=35841,dd=35842,pd=35843,md=36196,gd=37492,_d=37496,vd=37488,xd=37489,yd=37490,Sd=37491,Md=37808,bd=37809,Ed=37810,Td=37811,Ad=37812,wd=37813,Rd=37814,Cd=37815,Dd=37816,Ud=37817,Nd=37818,Ld=37819,Od=37820,Id=37821,Pd=36492,zd=36494,Bd=36495,Fd=36283,Hd=36284,Gd=36285,Vd=36286,WS=3200,vv=0,qS=1,or="",Si="srgb",Ks="srgb-linear",$c="linear",Vt="srgb",Ts=7680,i_=519,YS=512,jS=513,ZS=514,tp=515,KS=516,QS=517,np=518,JS=519,kd=35044,a_="300 es",Yi=2e3,eu=2001;function xv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ll(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function $S(){const o=ll("canvas");return o.style.display="block",o}const r_={};function tu(...o){const e="THREE."+o.shift();console.log(e,...o)}function ut(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Ct(...o){const e="THREE."+o.shift();console.error(e,...o)}function cl(...o){const e=o.join(" ");e in r_||(r_[e]=!0,ut(...o))}function eM(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Js{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yh=Math.PI/180,nu=180/Math.PI;function cr(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(In[o&255]+In[o>>8&255]+In[o>>16&255]+In[o>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]).toLowerCase()}function wt(o,e,i){return Math.max(e,Math.min(i,o))}function tM(o,e){return(o%e+e)%e}function Sh(o,e,i){return(1-i)*o+i*e}function Wi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function qt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class xt{constructor(e=0,i=0){xt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3],y=c[h+0],S=c[h+1],E=c[h+2],R=c[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g;return}if(d>=1){e[i+0]=y,e[i+1]=S,e[i+2]=E,e[i+3]=R;return}if(g!==R||m!==y||p!==S||_!==E){let M=m*y+p*S+_*E+g*R;M<0&&(y=-y,S=-S,E=-E,R=-R,M=-M);let x=1-d;if(M<.9995){const P=Math.acos(M),O=Math.sin(P);x=Math.sin(x*P)/O,d=Math.sin(d*P)/O,m=m*x+y*d,p=p*x+S*d,_=_*x+E*d,g=g*x+R*d}else{m=m*x+y*d,p=p*x+S*d,_=_*x+E*d,g=g*x+R*d;const P=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=P,p*=P,_*=P,g*=P}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=c[h],y=c[h+1],S=c[h+2],E=c[h+3];return e[i]=d*E+_*g+m*S-p*y,e[i+1]=m*E+_*y+p*g-d*S,e[i+2]=p*E+_*S+d*y-m*g,e[i+3]=_*E-d*g-m*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),g=d(c/2),y=m(r/2),S=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=y*_*g+p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g-y*S*E;break;case"YXZ":this._x=y*_*g+p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g+y*S*E;break;case"ZXY":this._x=y*_*g-p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g-y*S*E;break;case"ZYX":this._x=y*_*g-p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g+y*S*E;break;case"YZX":this._x=y*_*g+p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g-y*S*E;break;case"XZY":this._x=y*_*g-p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g+y*S*E;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],y=r+d+g;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(r>d&&r>g){const S=2*Math.sqrt(1+r-d-g);this._w=(_-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-r-g);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+g-r-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-r*p,this._z=c*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,h=e._w,d=this.dot(e);d<0&&(r=-r,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,i=0,r=0){J.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(s_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(s_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),_=2*(d*i-c*l),g=2*(c*r-h*i);return this.x=i+m*p+h*g-d*_,this.y=r+m*_+d*p-c*g,this.z=l+m*g+c*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this.z=wt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this.z=wt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mh=new J,s_=new fl;class mt{constructor(e,i,r,l,c,h,d,m,p){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],g=r[7],y=r[2],S=r[5],E=r[8],R=l[0],M=l[3],x=l[6],P=l[1],O=l[4],L=l[7],z=l[2],B=l[5],I=l[8];return c[0]=h*R+d*P+m*z,c[3]=h*M+d*O+m*B,c[6]=h*x+d*L+m*I,c[1]=p*R+_*P+g*z,c[4]=p*M+_*O+g*B,c[7]=p*x+_*L+g*I,c[2]=y*R+S*P+E*z,c[5]=y*M+S*O+E*B,c[8]=y*x+S*L+E*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-r*c*_+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=_*h-d*p,y=d*m-_*c,S=p*c-h*m,E=i*g+r*y+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=g*R,e[1]=(l*p-_*r)*R,e[2]=(d*r-l*h)*R,e[3]=y*R,e[4]=(_*i-l*m)*R,e[5]=(l*c-d*i)*R,e[6]=S*R,e[7]=(r*m-p*i)*R,e[8]=(h*i-r*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(bh.makeScale(e,i)),this}rotate(e){return this.premultiply(bh.makeRotation(-e)),this}translate(e,i){return this.premultiply(bh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bh=new mt,o_=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),l_=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nM(){const o={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Vt&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Vt&&(l.r=qs(l.r),l.g=qs(l.g),l.b=qs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===or?$c:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return cl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return cl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ks]:{primaries:e,whitePoint:r,transfer:$c,toXYZ:o_,fromXYZ:l_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:e,whitePoint:r,transfer:Vt,toXYZ:o_,fromXYZ:l_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),o}const Dt=nM();function Ta(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function qs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let As;class iM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{As===void 0&&(As=ll("canvas")),As.width=e.width,As.height=e.height;const l=As.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=As}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ll("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ta(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ta(i[r]/255)*255):i[r]=Ta(i[r]);return{data:i,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aM=0;class ip{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=cr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Eh(l[h].image)):c.push(Eh(l[h]))}else c=Eh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Eh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?iM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let rM=0;const Th=new J;class Bn extends Js{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=ba,l=ba,c=zn,h=Fr,d=Oi,m=ci,p=Bn.DEFAULT_ANISOTROPY,_=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=cr(),this.name="",this.source=new ip(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Th).x}get height(){return this.source.getSize(Th).y}get depth(){return this.source.getSize(Th).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ws:e.x=e.x-Math.floor(e.x);break;case ba:e.x=e.x<0?0:1;break;case ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ws:e.y=e.y-Math.floor(e.y);break;case ba:e.y=e.y<0?0:1;break;case ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=uv;Bn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,i=0,r=0,l=1){sn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],_=m[4],g=m[8],y=m[1],S=m[5],E=m[9],R=m[2],M=m[6],x=m[10];if(Math.abs(_-y)<.01&&Math.abs(g-R)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+y)<.1&&Math.abs(g+R)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,L=(S+1)/2,z=(x+1)/2,B=(_+y)/4,I=(g+R)/4,j=(E+M)/4;return O>L&&O>z?O<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(O),l=B/r,c=I/r):L>z?L<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),r=B/l,c=j/l):z<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),r=I/c,l=j/c),this.set(r,l,c,i),this}let P=Math.sqrt((M-E)*(M-E)+(g-R)*(g-R)+(y-_)*(y-_));return Math.abs(P)<.001&&(P=1),this.x=(M-E)/P,this.y=(g-R)/P,this.z=(y-_)/P,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this.z=wt(this.z,e.z,i.z),this.w=wt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this.z=wt(this.z,e,i),this.w=wt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sM extends Js{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Bn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new ip(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends sM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class yv extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_n,this.minFilter=_n,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oM extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_n,this.minFilter=_n,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl{constructor(e=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ui):Ui.fromBufferAttribute(c,h),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Tc.copy(r.boundingBox)),Tc.applyMatrix4(e.matrixWorld),this.union(Tc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Ac.subVectors(this.max,jo),ws.subVectors(e.a,jo),Rs.subVectors(e.b,jo),Cs.subVectors(e.c,jo),tr.subVectors(Rs,ws),nr.subVectors(Cs,Rs),Dr.subVectors(ws,Cs);let i=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Dr.z,Dr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Dr.z,0,-Dr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Dr.y,Dr.x,0];return!Ah(i,ws,Rs,Cs,Ac)||(i=[1,0,0,0,1,0,0,0,1],!Ah(i,ws,Rs,Cs,Ac))?!1:(wc.crossVectors(tr,nr),i=[wc.x,wc.y,wc.z],Ah(i,ws,Rs,Cs,Ac))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new J,new J,new J,new J,new J,new J,new J,new J],Ui=new J,Tc=new hl,ws=new J,Rs=new J,Cs=new J,tr=new J,nr=new J,Dr=new J,jo=new J,Ac=new J,wc=new J,Ur=new J;function Ah(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){Ur.fromArray(o,c);const d=l.x*Math.abs(Ur.x)+l.y*Math.abs(Ur.y)+l.z*Math.abs(Ur.z),m=e.dot(Ur),p=i.dot(Ur),_=r.dot(Ur);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const lM=new hl,Zo=new J,wh=new J;class ap{constructor(e=new J,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):lM.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const i=Zo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Zo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(wh)),this.expandByPoint(Zo.copy(e.center).sub(wh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const xa=new J,Rh=new J,Rc=new J,ir=new J,Ch=new J,Cc=new J,Dh=new J;class cM{constructor(e=new J,i=new J(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=xa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Rh.copy(e).add(i).multiplyScalar(.5),Rc.copy(i).sub(e).normalize(),ir.copy(this.origin).sub(Rh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Rc),d=ir.dot(this.direction),m=-ir.dot(Rc),p=ir.lengthSq(),_=Math.abs(1-h*h);let g,y,S,E;if(_>0)if(g=h*m-d,y=h*d-m,E=c*_,g>=0)if(y>=-E)if(y<=E){const R=1/_;g*=R,y*=R,S=g*(g+h*y+2*d)+y*(h*g+y+2*m)+p}else y=c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;else y=-c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;else y<=-E?(g=Math.max(0,-(-h*c+d)),y=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+y*(y+2*m)+p):y<=E?(g=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+p):(g=Math.max(0,-(h*c+d)),y=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+y*(y+2*m)+p);else y=h>0?-c:c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Rh).addScaledVector(Rc,y),S}intersectSphere(e,i){xa.subVectors(e.center,this.origin);const r=xa.dot(this.direction),l=xa.dot(xa)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),_>=0?(c=(e.min.y-y.y)*_,h=(e.max.y-y.y)*_):(c=(e.max.y-y.y)*_,h=(e.min.y-y.y)*_),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-y.z)*g,m=(e.max.z-y.z)*g):(d=(e.max.z-y.z)*g,m=(e.min.z-y.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,xa)!==null}intersectTriangle(e,i,r,l,c){Ch.subVectors(i,e),Cc.subVectors(r,e),Dh.crossVectors(Ch,Cc);let h=this.direction.dot(Dh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ir.subVectors(this.origin,e);const m=d*this.direction.dot(Cc.crossVectors(ir,Cc));if(m<0)return null;const p=d*this.direction.dot(Ch.cross(ir));if(p<0||m+p>h)return null;const _=-d*ir.dot(Dh);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,i,r,l,c,h,d,m,p,_,g,y,S,E,R,M){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,_,g,y,S,E,R,M)}set(e,i,r,l,c,h,d,m,p,_,g,y,S,E,R,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=_,x[10]=g,x[14]=y,x[3]=S,x[7]=E,x[11]=R,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Ds.setFromMatrixColumn(e,0).length(),c=1/Ds.setFromMatrixColumn(e,1).length(),h=1/Ds.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const y=h*_,S=h*g,E=d*_,R=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=S+E*p,i[5]=y-R*p,i[9]=-d*m,i[2]=R-y*p,i[6]=E+S*p,i[10]=h*m}else if(e.order==="YXZ"){const y=m*_,S=m*g,E=p*_,R=p*g;i[0]=y+R*d,i[4]=E*d-S,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=S*d-E,i[6]=R+y*d,i[10]=h*m}else if(e.order==="ZXY"){const y=m*_,S=m*g,E=p*_,R=p*g;i[0]=y-R*d,i[4]=-h*g,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*_,i[9]=R-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const y=h*_,S=h*g,E=d*_,R=d*g;i[0]=m*_,i[4]=E*p-S,i[8]=y*p+R,i[1]=m*g,i[5]=R*p+y,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const y=h*m,S=h*p,E=d*m,R=d*p;i[0]=m*_,i[4]=R-y*g,i[8]=E*g+S,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=S*g+E,i[10]=y-R*g}else if(e.order==="XZY"){const y=h*m,S=h*p,E=d*m,R=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=y*g+R,i[5]=h*_,i[9]=S*g-E,i[2]=E*g-S,i[6]=d*_,i[10]=R*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uM,e,fM)}lookAt(e,i,r){const l=this.elements;return oi.subVectors(e,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),ar.crossVectors(r,oi),ar.lengthSq()===0&&(Math.abs(r.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),ar.crossVectors(r,oi)),ar.normalize(),Dc.crossVectors(oi,ar),l[0]=ar.x,l[4]=Dc.x,l[8]=oi.x,l[1]=ar.y,l[5]=Dc.y,l[9]=oi.y,l[2]=ar.z,l[6]=Dc.z,l[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],g=r[5],y=r[9],S=r[13],E=r[2],R=r[6],M=r[10],x=r[14],P=r[3],O=r[7],L=r[11],z=r[15],B=l[0],I=l[4],j=l[8],T=l[12],C=l[1],V=l[5],Z=l[9],K=l[13],se=l[2],he=l[6],N=l[10],G=l[14],ne=l[3],Me=l[7],be=l[11],U=l[15];return c[0]=h*B+d*C+m*se+p*ne,c[4]=h*I+d*V+m*he+p*Me,c[8]=h*j+d*Z+m*N+p*be,c[12]=h*T+d*K+m*G+p*U,c[1]=_*B+g*C+y*se+S*ne,c[5]=_*I+g*V+y*he+S*Me,c[9]=_*j+g*Z+y*N+S*be,c[13]=_*T+g*K+y*G+S*U,c[2]=E*B+R*C+M*se+x*ne,c[6]=E*I+R*V+M*he+x*Me,c[10]=E*j+R*Z+M*N+x*be,c[14]=E*T+R*K+M*G+x*U,c[3]=P*B+O*C+L*se+z*ne,c[7]=P*I+O*V+L*he+z*Me,c[11]=P*j+O*Z+L*N+z*be,c[15]=P*T+O*K+L*G+z*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],g=e[6],y=e[10],S=e[14],E=e[3],R=e[7],M=e[11],x=e[15],P=m*S-p*y,O=d*S-p*g,L=d*y-m*g,z=h*S-p*_,B=h*y-m*_,I=h*g-d*_;return i*(R*P-M*O+x*L)-r*(E*P-M*z+x*B)+l*(E*O-R*z+x*I)-c*(E*L-R*B+M*I)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=e[9],y=e[10],S=e[11],E=e[12],R=e[13],M=e[14],x=e[15],P=g*M*p-R*y*p+R*m*S-d*M*S-g*m*x+d*y*x,O=E*y*p-_*M*p-E*m*S+h*M*S+_*m*x-h*y*x,L=_*R*p-E*g*p+E*d*S-h*R*S-_*d*x+h*g*x,z=E*g*m-_*R*m-E*d*y+h*R*y+_*d*M-h*g*M,B=i*P+r*O+l*L+c*z;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/B;return e[0]=P*I,e[1]=(R*y*c-g*M*c-R*l*S+r*M*S+g*l*x-r*y*x)*I,e[2]=(d*M*c-R*m*c+R*l*p-r*M*p-d*l*x+r*m*x)*I,e[3]=(g*m*c-d*y*c-g*l*p+r*y*p+d*l*S-r*m*S)*I,e[4]=O*I,e[5]=(_*M*c-E*y*c+E*l*S-i*M*S-_*l*x+i*y*x)*I,e[6]=(E*m*c-h*M*c-E*l*p+i*M*p+h*l*x-i*m*x)*I,e[7]=(h*y*c-_*m*c+_*l*p-i*y*p-h*l*S+i*m*S)*I,e[8]=L*I,e[9]=(E*g*c-_*R*c-E*r*S+i*R*S+_*r*x-i*g*x)*I,e[10]=(h*R*c-E*d*c+E*r*p-i*R*p-h*r*x+i*d*x)*I,e[11]=(_*d*c-h*g*c-_*r*p+i*g*p+h*r*S-i*d*S)*I,e[12]=z*I,e[13]=(_*R*l-E*g*l+E*r*y-i*R*y-_*r*M+i*g*M)*I,e[14]=(E*d*l-h*R*l-E*r*m+i*R*m+h*r*M-i*d*M)*I,e[15]=(h*g*l-_*d*l+_*r*m-i*g*m-h*r*y+i*d*y)*I,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,_=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,g=d+d,y=c*p,S=c*_,E=c*g,R=h*_,M=h*g,x=d*g,P=m*p,O=m*_,L=m*g,z=r.x,B=r.y,I=r.z;return l[0]=(1-(R+x))*z,l[1]=(S+L)*z,l[2]=(E-O)*z,l[3]=0,l[4]=(S-L)*B,l[5]=(1-(y+x))*B,l[6]=(M+P)*B,l[7]=0,l[8]=(E+O)*I,l[9]=(M-P)*I,l[10]=(1-(y+R))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=Ds.set(l[0],l[1],l[2]).length();const h=Ds.set(l[4],l[5],l[6]).length(),d=Ds.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ni.copy(this);const p=1/c,_=1/h,g=1/d;return Ni.elements[0]*=p,Ni.elements[1]*=p,Ni.elements[2]*=p,Ni.elements[4]*=_,Ni.elements[5]*=_,Ni.elements[6]*=_,Ni.elements[8]*=g,Ni.elements[9]*=g,Ni.elements[10]*=g,i.setFromRotationMatrix(Ni),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Yi,m=!1){const p=this.elements,_=2*c/(i-e),g=2*c/(r-l),y=(i+e)/(i-e),S=(r+l)/(r-l);let E,R;if(m)E=c/(h-c),R=h*c/(h-c);else if(d===Yi)E=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===eu)E=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Yi,m=!1){const p=this.elements,_=2/(i-e),g=2/(r-l),y=-(i+e)/(i-e),S=-(r+l)/(r-l);let E,R;if(m)E=1/(h-c),R=h/(h-c);else if(d===Yi)E=-2/(h-c),R=-(h+c)/(h-c);else if(d===eu)E=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Ds=new J,Ni=new nn,uM=new J(0,0,0),fM=new J(1,1,1),ar=new J,Dc=new J,oi=new J,c_=new nn,u_=new fl;class Qi{constructor(e=0,i=0,r=0,l=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(wt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-wt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(wt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return c_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(c_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return u_.setFromEuler(this),this.setFromQuaternion(u_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class Sv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hM=0;const f_=new J,Us=new fl,ya=new nn,Uc=new J,Ko=new J,dM=new J,pM=new fl,h_=new J(1,0,0),d_=new J(0,1,0),p_=new J(0,0,1),m_={type:"added"},mM={type:"removed"},Ns={type:"childadded",child:null},Uh={type:"childremoved",child:null};class vn extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new J,i=new Qi,r=new fl,l=new J(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new mt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Us.setFromAxisAngle(e,i),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,i){return Us.setFromAxisAngle(e,i),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(h_,e)}rotateY(e){return this.rotateOnAxis(d_,e)}rotateZ(e){return this.rotateOnAxis(p_,e)}translateOnAxis(e,i){return f_.copy(e).applyQuaternion(this.quaternion),this.position.add(f_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(h_,e)}translateY(e){return this.translateOnAxis(d_,e)}translateZ(e){return this.translateOnAxis(p_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Uc.copy(e):Uc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(Ko,Uc,this.up):ya.lookAt(Uc,Ko,this.up),this.quaternion.setFromRotationMatrix(ya),l&&(ya.extractRotation(l.matrixWorld),Us.setFromRotationMatrix(ya),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(m_),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(mM),Uh.child=e,this.dispatchEvent(Uh),Uh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ya.multiply(e.parent.matrixWorld)),e.applyMatrix4(ya),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(m_),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,dM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,pM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),g=h(e.shapes),y=h(e.skeletons),S=h(e.animations),E=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}vn.DEFAULT_UP=new J(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new J,Sa=new J,Nh=new J,Ma=new J,Ls=new J,Os=new J,g_=new J,Lh=new J,Oh=new J,Ih=new J,Ph=new sn,zh=new sn,Bh=new sn;class Mi{constructor(e=new J,i=new J,r=new J){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Li.subVectors(e,i),l.cross(Li);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Li.subVectors(l,i),Sa.subVectors(r,i),Nh.subVectors(e,i);const h=Li.dot(Li),d=Li.dot(Sa),m=Li.dot(Nh),p=Sa.dot(Sa),_=Sa.dot(Nh),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const y=1/g,S=(p*m-d*_)*y,E=(h*_-d*m)*y;return c.set(1-S-E,E,S)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ma)===null?!1:Ma.x>=0&&Ma.y>=0&&Ma.x+Ma.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,Ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ma.x),m.addScaledVector(h,Ma.y),m.addScaledVector(d,Ma.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return Ph.setScalar(0),zh.setScalar(0),Bh.setScalar(0),Ph.fromBufferAttribute(e,i),zh.fromBufferAttribute(e,r),Bh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Ph,c.x),h.addScaledVector(zh,c.y),h.addScaledVector(Bh,c.z),h}static isFrontFacing(e,i,r,l){return Li.subVectors(r,i),Sa.subVectors(e,i),Li.cross(Sa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),Sa.subVectors(this.a,this.b),Li.cross(Sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Mi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;Ls.subVectors(l,r),Os.subVectors(c,r),Lh.subVectors(e,r);const m=Ls.dot(Lh),p=Os.dot(Lh);if(m<=0&&p<=0)return i.copy(r);Oh.subVectors(e,l);const _=Ls.dot(Oh),g=Os.dot(Oh);if(_>=0&&g<=_)return i.copy(l);const y=m*g-_*p;if(y<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(Ls,h);Ih.subVectors(e,c);const S=Ls.dot(Ih),E=Os.dot(Ih);if(E>=0&&S<=E)return i.copy(c);const R=S*p-m*E;if(R<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(Os,d);const M=_*E-S*g;if(M<=0&&g-_>=0&&S-E>=0)return g_.subVectors(c,l),d=(g-_)/(g-_+(S-E)),i.copy(l).addScaledVector(g_,d);const x=1/(M+R+y);return h=R*x,d=y*x,i.copy(r).addScaledVector(Ls,h).addScaledVector(Os,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function Fh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Tt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Dt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Dt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Dt.workingColorSpace){if(e=tM(e,1),i=wt(i,0,1),r=wt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Fh(h,c,e+1/3),this.g=Fh(h,c,e),this.b=Fh(h,c,e-1/3)}return Dt.colorSpaceToWorking(this,l),this}setStyle(e,i=Si){function r(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ut("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Si){const r=Mv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return Dt.workingToColorSpace(Pn.copy(this),e),Math.round(wt(Pn.r*255,0,255))*65536+Math.round(wt(Pn.g*255,0,255))*256+Math.round(wt(Pn.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Dt.workingColorSpace){Dt.workingToColorSpace(Pn.copy(this),i);const r=Pn.r,l=Pn.g,c=Pn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Dt.workingColorSpace){return Dt.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Si){Dt.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,r=Pn.g,l=Pn.b;return e!==Si?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+i,rr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(rr),e.getHSL(Nc);const r=Sh(rr.h,Nc.h,i),l=Sh(rr.s,Nc.s,i),c=Sh(rr.l,Nc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Tt;Tt.NAMES=Mv;let gM=0;class $s extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=Xs,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=ed,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ut(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(r.blending=this.blending),this.side!==ur&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==$h&&(r.blendSrc=this.blendSrc),this.blendDst!==ed&&(r.blendDst=this.blendDst),this.blendEquation!==zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==i_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gr extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=new J,Lc=new xt;let _M=0;class Ii{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_M++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=kd,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Lc.fromBufferAttribute(this,i),Lc.applyMatrix3(e),this.setXY(i,Lc.x,Lc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Wi(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=qt(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Wi(i,this.array)),i}setX(e,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Wi(i,this.array)),i}setY(e,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Wi(i,this.array)),i}setZ(e,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Wi(i,this.array)),i}setW(e,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=qt(i,this.array),r=qt(r,this.array),l=qt(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=qt(i,this.array),r=qt(r,this.array),l=qt(l,this.array),c=qt(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kd&&(e.usage=this.usage),e}}class bv extends Ii{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Ev extends Ii{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Xn extends Ii{constructor(e,i,r){super(new Float32Array(e),i,r)}}let vM=0;const yi=new nn,Hh=new vn,Is=new J,li=new hl,Qo=new hl,bn=new J;class bi extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xv(e)?Ev:bv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new mt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,i,r){return yi.makeTranslation(e,i,r),this.applyMatrix4(yi),this}scale(e,i,r){return yi.makeScale(e,i,r),this.applyMatrix4(yi),this}lookAt(e){return Hh.lookAt(e),Hh.updateMatrix(),this.applyMatrix4(Hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Xn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];li.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ap);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(li.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Qo.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(li.min,Qo.min),li.expandByPoint(bn),bn.addVectors(li.max,Qo.max),li.expandByPoint(bn)):(li.expandByPoint(Qo.min),li.expandByPoint(Qo.max))}li.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)bn.fromBufferAttribute(d,p),m&&(Is.fromBufferAttribute(e,p),bn.add(Is)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new J,m[j]=new J;const p=new J,_=new J,g=new J,y=new xt,S=new xt,E=new xt,R=new J,M=new J;function x(j,T,C){p.fromBufferAttribute(r,j),_.fromBufferAttribute(r,T),g.fromBufferAttribute(r,C),y.fromBufferAttribute(c,j),S.fromBufferAttribute(c,T),E.fromBufferAttribute(c,C),_.sub(p),g.sub(p),S.sub(y),E.sub(y);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(R.copy(_).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(V),M.copy(g).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(V),d[j].add(R),d[T].add(R),d[C].add(R),m[j].add(M),m[T].add(M),m[C].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let j=0,T=P.length;j<T;++j){const C=P[j],V=C.start,Z=C.count;for(let K=V,se=V+Z;K<se;K+=3)x(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const O=new J,L=new J,z=new J,B=new J;function I(j){z.fromBufferAttribute(l,j),B.copy(z);const T=d[j];O.copy(T),O.sub(z.multiplyScalar(z.dot(T))).normalize(),L.crossVectors(B,T);const V=L.dot(m[j])<0?-1:1;h.setXYZW(j,O.x,O.y,O.z,V)}for(let j=0,T=P.length;j<T;++j){const C=P[j],V=C.start,Z=C.count;for(let K=V,se=V+Z;K<se;K+=3)I(e.getX(K+0)),I(e.getX(K+1)),I(e.getX(K+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ii(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const l=new J,c=new J,h=new J,d=new J,m=new J,p=new J,_=new J,g=new J;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),R=e.getX(y+1),M=e.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,M),d.add(_),m.add(_),p.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,g=d.normalized,y=new p.constructor(m.length*_);let S=0,E=0;for(let R=0,M=m.length;R<M;R++){d.isInterleavedBufferAttribute?S=m[R]*d.data.stride+d.offset:S=m[R]*_;for(let x=0;x<_;x++)y[E++]=p[S++]}return new Ii(y,_,g)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new bi,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,g=p.length;_<g;_++){const y=p[_],S=e(y,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,y=p.length;g<y;g++){const S=p[g];_.push(S.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],g=c[p];for(let y=0,S=g.length;y<S;y++)_.push(g[y].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const __=new nn,Nr=new cM,Oc=new ap,v_=new J,Ic=new J,Pc=new J,zc=new J,Gh=new J,Bc=new J,x_=new J,Fc=new J;class Rt extends vn{constructor(e=new bi,i=new Gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Bc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],g=c[m];_!==0&&(Gh.fromBufferAttribute(g,e),h?Bc.addScaledVector(Gh,_):Bc.addScaledVector(Gh.sub(i),_))}i.add(Bc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Oc.copy(r.boundingSphere),Oc.applyMatrix4(c),Nr.copy(e.ray).recast(e.near),!(Oc.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Oc,v_)===null||Nr.origin.distanceToSquared(v_)>(e.far-e.near)**2))&&(__.copy(c).invert(),Nr.copy(e.ray).applyMatrix4(__),!(r.boundingBox!==null&&Nr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Nr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,R=y.length;E<R;E++){const M=y[E],x=h[M.materialIndex],P=Math.max(M.start,S.start),O=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let L=P,z=O;L<z;L+=3){const B=d.getX(L),I=d.getX(L+1),j=d.getX(L+2);l=Hc(this,x,e,r,p,_,g,B,I,j),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let M=E,x=R;M<x;M+=3){const P=d.getX(M),O=d.getX(M+1),L=d.getX(M+2);l=Hc(this,h,e,r,p,_,g,P,O,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,R=y.length;E<R;E++){const M=y[E],x=h[M.materialIndex],P=Math.max(M.start,S.start),O=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let L=P,z=O;L<z;L+=3){const B=L,I=L+1,j=L+2;l=Hc(this,x,e,r,p,_,g,B,I,j),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),R=Math.min(m.count,S.start+S.count);for(let M=E,x=R;M<x;M+=3){const P=M,O=M+1,L=M+2;l=Hc(this,h,e,r,p,_,g,P,O,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function xM(o,e,i,r,l,c,h,d){let m;if(e.side===$n?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===ur,d),m===null)return null;Fc.copy(d),Fc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Fc);return p<i.near||p>i.far?null:{distance:p,point:Fc.clone(),object:o}}function Hc(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,Ic),o.getVertexPosition(m,Pc),o.getVertexPosition(p,zc);const _=xM(o,e,i,r,Ic,Pc,zc,x_);if(_){const g=new J;Mi.getBarycoord(x_,Ic,Pc,zc,g),l&&(_.uv=Mi.getInterpolatedAttribute(l,d,m,p,g,new xt)),c&&(_.uv1=Mi.getInterpolatedAttribute(c,d,m,p,g,new xt)),h&&(_.normal=Mi.getInterpolatedAttribute(h,d,m,p,g,new J),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new J,materialIndex:0};Mi.getNormal(Ic,Pc,zc,y.normal),_.face=y,_.barycoord=g}return _}class kn extends bi{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],g=[];let y=0,S=0;E("z","y","x",-1,-1,r,i,e,h,c,0),E("z","y","x",1,-1,r,i,-e,h,c,1),E("x","z","y",1,1,e,r,i,l,h,2),E("x","z","y",1,-1,e,r,-i,l,h,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Xn(p,3)),this.setAttribute("normal",new Xn(_,3)),this.setAttribute("uv",new Xn(g,2));function E(R,M,x,P,O,L,z,B,I,j,T){const C=L/I,V=z/j,Z=L/2,K=z/2,se=B/2,he=I+1,N=j+1;let G=0,ne=0;const Me=new J;for(let be=0;be<N;be++){const U=be*V-K;for(let ie=0;ie<he;ie++){const _e=ie*C-Z;Me[R]=_e*P,Me[M]=U*O,Me[x]=se,p.push(Me.x,Me.y,Me.z),Me[R]=0,Me[M]=0,Me[x]=B>0?1:-1,_.push(Me.x,Me.y,Me.z),g.push(ie/I),g.push(1-be/j),G+=1}}for(let be=0;be<j;be++)for(let U=0;U<I;U++){const ie=y+U+he*be,_e=y+U+he*(be+1),Ae=y+(U+1)+he*(be+1),Ie=y+(U+1)+he*be;m.push(ie,_e,Ie),m.push(_e,Ae,Ie),ne+=6}d.addGroup(S,ne,T),S+=ne,y+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Gn(o){const e={};for(let i=0;i<o.length;i++){const r=Qs(o[i]);for(const l in r)e[l]=r[l]}return e}function yM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Tv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const SM={clone:Qs,merge:Gn};var MM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MM,this.fragmentShader=bM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=yM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Av extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new J,y_=new xt,S_=new xt;class Jn extends Av{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=nu*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nu*2*Math.atan(Math.tan(yh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,i){return this.getViewBounds(e,y_,S_),i.subVectors(S_,y_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(yh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ps=-90,zs=1;class EM extends vn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Jn(Ps,zs,e,i);l.layers=this.layers,this.add(l);const c=new Jn(Ps,zs,e,i);c.layers=this.layers,this.add(c);const h=new Jn(Ps,zs,e,i);h.layers=this.layers,this.add(h);const d=new Jn(Ps,zs,e,i);d.layers=this.layers,this.add(d);const m=new Jn(Ps,zs,e,i);m.layers=this.layers,this.add(m);const p=new Jn(Ps,zs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Yi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===eu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(g,y,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class wv extends Bn{constructor(e=[],i=Vr,r,l,c,h,d,m,p,_){super(e,i,r,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rv extends Zi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new wv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new kn(5,5,5),c=new Ji({name:"CubemapFromEquirect",uniforms:Qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:$n,blending:Ea});c.uniforms.tEquirect.value=i;const h=new Rt(l,c),d=i.minFilter;return i.minFilter===Fr&&(i.minFilter=zn),new EM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class Vn extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TM={type:"move"};class Vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const M=i.getJointPose(R,r),x=this._getHandJoint(p,R);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=_.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(TM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Vn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class rl{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(e),this.density=i}clone(){return new rl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class AM extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class wM{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=kd,this.updateRanges=[],this.version=0,this.uuid=cr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,r){e*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[r+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Hn=new J;class iu{constructor(e,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,r=this.data.count;i<r;i++)Hn.fromBufferAttribute(this,i),Hn.applyMatrix4(e),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Hn.fromBufferAttribute(this,i),Hn.applyNormalMatrix(e),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Hn.fromBufferAttribute(this,i),Hn.transformDirection(e),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}getComponent(e,i){let r=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(r=Wi(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=qt(r,this.array)),this.data.array[e*this.data.stride+this.offset+i]=r,this}setX(e,i){return this.normalized&&(i=qt(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=qt(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=qt(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=qt(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Wi(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Wi(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Wi(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Wi(i,this.array)),i}setXY(e,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(i=qt(i,this.array),r=qt(r,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this}setXYZ(e,i,r,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=qt(i,this.array),r=qt(r,this.array),l=qt(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=qt(i,this.array),r=qt(r,this.array),l=qt(l,this.array),c=qt(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){tu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Ii(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new iu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xd extends $s{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Bs;const Jo=new J,Fs=new J,Hs=new J,Gs=new xt,$o=new xt,Cv=new nn,Gc=new J,el=new J,Vc=new J,M_=new xt,kh=new xt,b_=new xt;class E_ extends vn{constructor(e=new Xd){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new bi;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new wM(i,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new iu(r,3,0,!1)),Bs.setAttribute("uv",new iu(r,2,3,!1))}this.geometry=Bs,this.material=e,this.center=new xt(.5,.5),this.count=1}raycast(e,i){e.camera===null&&Ct('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fs.setFromMatrixScale(this.matrixWorld),Cv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fs.multiplyScalar(-Hs.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const h=this.center;kc(Gc.set(-.5,-.5,0),Hs,h,Fs,l,c),kc(el.set(.5,-.5,0),Hs,h,Fs,l,c),kc(Vc.set(.5,.5,0),Hs,h,Fs,l,c),M_.set(0,0),kh.set(1,0),b_.set(1,1);let d=e.ray.intersectTriangle(Gc,el,Vc,!1,Jo);if(d===null&&(kc(el.set(-.5,.5,0),Hs,h,Fs,l,c),kh.set(0,1),d=e.ray.intersectTriangle(Gc,Vc,el,!1,Jo),d===null))return;const m=e.ray.origin.distanceTo(Jo);m<e.near||m>e.far||i.push({distance:m,point:Jo.clone(),uv:Mi.getInterpolation(Jo,Gc,el,Vc,M_,kh,b_,new xt),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function kc(o,e,i,r,l,c){Gs.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?($o.x=c*Gs.x-l*Gs.y,$o.y=l*Gs.x+c*Gs.y):$o.copy(Gs),o.copy(e),o.x+=$o.x,o.y+=$o.y,o.applyMatrix4(Cv)}class RM extends Bn{constructor(e=null,i=1,r=1,l,c,h,d,m,p=_n,_=_n,g,y){super(null,h,d,m,p,_,l,c,g,y),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xh=new J,CM=new J,DM=new mt;class Pr{constructor(e=new J(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Xh.subVectors(r,i).cross(CM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Xh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||DM.getNormalMatrix(e),l=this.coplanarPoint(Xh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new ap,UM=new xt(.5,.5),Xc=new J;class rp{constructor(e=new Pr,i=new Pr,r=new Pr,l=new Pr,c=new Pr,h=new Pr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Yi,r=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],g=c[5],y=c[6],S=c[7],E=c[8],R=c[9],M=c[10],x=c[11],P=c[12],O=c[13],L=c[14],z=c[15];if(l[0].setComponents(p-h,S-_,x-E,z-P).normalize(),l[1].setComponents(p+h,S+_,x+E,z+P).normalize(),l[2].setComponents(p+d,S+g,x+R,z+O).normalize(),l[3].setComponents(p-d,S-g,x-R,z-O).normalize(),r)l[4].setComponents(m,y,M,L).normalize(),l[5].setComponents(p-m,S-y,x-M,z-L).normalize();else if(l[4].setComponents(p-m,S-y,x-M,z-L).normalize(),i===Yi)l[5].setComponents(p+m,S+y,x+M,z+L).normalize();else if(i===eu)l[5].setComponents(m,y,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Lr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){Lr.center.set(0,0,0);const i=UM.distanceTo(e.center);return Lr.radius=.7071067811865476+i,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Xc.x=l.normal.x>0?e.max.x:e.min.x,Xc.y=l.normal.y>0?e.max.y:e.min.y,Xc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ul extends Bn{constructor(e,i,r=Ki,l,c,h,d=_n,m=_n,p,_=wa,g=1){if(_!==wa&&_!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:g};super(y,l,c,h,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ip(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class NM extends ul{constructor(e,i=Ki,r=Vr,l,c,h=_n,d=_n,m,p=wa){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,i,r,l,c,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dv extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class eo extends bi{constructor(e=1,i=1,r=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],g=[],y=[],S=[];let E=0;const R=[],M=r/2;let x=0;P(),h===!1&&(e>0&&O(!0),i>0&&O(!1)),this.setIndex(_),this.setAttribute("position",new Xn(g,3)),this.setAttribute("normal",new Xn(y,3)),this.setAttribute("uv",new Xn(S,2));function P(){const L=new J,z=new J;let B=0;const I=(i-e)/r;for(let j=0;j<=c;j++){const T=[],C=j/c,V=C*(i-e)+e;for(let Z=0;Z<=l;Z++){const K=Z/l,se=K*m+d,he=Math.sin(se),N=Math.cos(se);z.x=V*he,z.y=-C*r+M,z.z=V*N,g.push(z.x,z.y,z.z),L.set(he,I,N).normalize(),y.push(L.x,L.y,L.z),S.push(K,1-C),T.push(E++)}R.push(T)}for(let j=0;j<l;j++)for(let T=0;T<c;T++){const C=R[T][j],V=R[T+1][j],Z=R[T+1][j+1],K=R[T][j+1];(e>0||T!==0)&&(_.push(C,V,K),B+=3),(i>0||T!==c-1)&&(_.push(V,Z,K),B+=3)}p.addGroup(x,B,0),x+=B}function O(L){const z=E,B=new xt,I=new J;let j=0;const T=L===!0?e:i,C=L===!0?1:-1;for(let Z=1;Z<=l;Z++)g.push(0,M*C,0),y.push(0,C,0),S.push(.5,.5),E++;const V=E;for(let Z=0;Z<=l;Z++){const se=Z/l*m+d,he=Math.cos(se),N=Math.sin(se);I.x=T*N,I.y=M*C,I.z=T*he,g.push(I.x,I.y,I.z),y.push(0,C,0),B.x=he*.5+.5,B.y=N*.5*C+.5,S.push(B.x,B.y),E++}for(let Z=0;Z<l;Z++){const K=z+Z,se=V+Z;L===!0?_.push(se,se+1,K):_.push(se+1,se,K),j+=3}p.addGroup(x,j,L===!0?1:2),x+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ru extends eo{constructor(e=1,i=1,r=32,l=1,c=!1,h=0,d=Math.PI*2){super(0,e,i,r,l,c,h,d),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:r,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:d}}static fromJSON(e){return new ru(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kr extends bi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,g=e/d,y=i/m,S=[],E=[],R=[],M=[];for(let x=0;x<_;x++){const P=x*y-h;for(let O=0;O<p;O++){const L=O*g-c;E.push(L,-P,0),R.push(0,0,1),M.push(O/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let P=0;P<d;P++){const O=P+p*x,L=P+p*(x+1),z=P+1+p*(x+1),B=P+1+p*x;S.push(O,L,B),S.push(L,z,B)}this.setIndex(S),this.setAttribute("position",new Xn(E,3)),this.setAttribute("normal",new Xn(R,3)),this.setAttribute("uv",new Xn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.width,e.height,e.widthSegments,e.heightSegments)}}class dl extends bi{constructor(e=1,i=.4,r=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:l,arc:c},r=Math.floor(r),l=Math.floor(l);const h=[],d=[],m=[],p=[],_=new J,g=new J,y=new J;for(let S=0;S<=r;S++)for(let E=0;E<=l;E++){const R=E/l*c,M=S/r*Math.PI*2;g.x=(e+i*Math.cos(M))*Math.cos(R),g.y=(e+i*Math.cos(M))*Math.sin(R),g.z=i*Math.sin(M),d.push(g.x,g.y,g.z),_.x=e*Math.cos(R),_.y=e*Math.sin(R),y.subVectors(g,_).normalize(),m.push(y.x,y.y,y.z),p.push(E/l),p.push(S/r)}for(let S=1;S<=r;S++)for(let E=1;E<=l;E++){const R=(l+1)*S+E-1,M=(l+1)*(S-1)+E-1,x=(l+1)*(S-1)+E,P=(l+1)*S+E;h.push(R,M,P),h.push(M,x,P)}this.setIndex(h),this.setAttribute("position",new Xn(d,3)),this.setAttribute("normal",new Xn(m,3)),this.setAttribute("uv",new Xn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class LM extends Ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qn extends $s{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vv,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class OM extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IM extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wh={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class PM{constructor(e,i,r){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(_){d++,c===!1&&l.onStart!==void 0&&l.onStart(_,h,d),c=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,y=p.length;g<y;g+=2){const S=p[g],E=p[g+1];if(S.global&&(S.lastIndex=0),S.test(_))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const zM=new PM;class sp{constructor(e){this.manager=e!==void 0?e:zM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,c){r.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}sp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vs=new WeakMap;class BM extends sp{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,h=Wh.get(`image:${e}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(h),c.manager.itemEnd(e)},0);else{let g=Vs.get(h);g===void 0&&(g=[],Vs.set(h,g)),g.push({onLoad:i,onError:l})}return h}const d=ll("img");function m(){_(),i&&i(this);const g=Vs.get(this)||[];for(let y=0;y<g.length;y++){const S=g[y];S.onLoad&&S.onLoad(this)}Vs.delete(this),c.manager.itemEnd(e)}function p(g){_(),l&&l(g),Wh.remove(`image:${e}`);const y=Vs.get(this)||[];for(let S=0;S<y.length;S++){const E=y[S];E.onError&&E.onError(g)}Vs.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function _(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Wh.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class FM extends sp{constructor(e){super(e)}load(e,i,r,l){const c=new Bn,h=new BM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class su extends vn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const qh=new nn,T_=new J,A_=new J;class op{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rp,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;T_.setFromMatrixPosition(e.matrixWorld),i.position.copy(T_),A_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(A_),i.updateMatrixWorld(),qh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(qh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class HM extends op{constructor(){super(new Jn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const i=this.camera,r=nu*2*e.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||i.far;(r!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=r,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class GM extends su{constructor(e,i,r=0,l=Math.PI/3,c=0,h=2){super(e,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.distance=r,this.angle=l,this.penumbra=c,this.decay=h,this.map=null,this.shadow=new HM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(e).uuid),i.object.shadow=this.shadow.toJSON(),i}}class VM extends op{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0}}class w_ extends su{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new VM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class lp extends Av{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class kM extends op{constructor(){super(new lp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class XM extends su{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new kM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class WM extends su{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class qM extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function R_(o,e,i,r){const l=YM(r);switch(i){case mv:return o*e;case _v:return o*e/l.components*l.byteLength;case Jd:return o*e/l.components*l.byteLength;case Zs:return o*e*2/l.components*l.byteLength;case $d:return o*e*2/l.components*l.byteLength;case gv:return o*e*3/l.components*l.byteLength;case Oi:return o*e*4/l.components*l.byteLength;case ep:return o*e*4/l.components*l.byteLength;case jc:case Zc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Kc:case Qc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case hd:case pd:return Math.max(o,16)*Math.max(e,8)/4;case fd:case dd:return Math.max(o,8)*Math.max(e,8)/2;case md:case gd:case vd:case xd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case _d:case yd:case Sd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Md:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Td:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case wd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Id:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Pd:case zd:case Bd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Fd:case Hd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Gd:case Vd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function YM(o){switch(o){case ci:case fv:return{byteLength:1,components:1};case sl:case hv:case Aa:return{byteLength:2,components:1};case Kd:case Qd:return{byteLength:2,components:4};case Ki:case Zd:case qi:return{byteLength:4,components:1};case dv:case pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jd}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jd);function Uv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function jM(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,_),d.onUploadCallback();let S;if(p instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=o.SHORT;else if(p instanceof Uint32Array)S=o.UNSIGNED_INT;else if(p instanceof Int32Array)S=o.INT;else if(p instanceof Int8Array)S=o.BYTE;else if(p instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,_);else{g.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<g.length;S++){const E=g[y],R=g[S];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++y,g[y]=R)}g.length=y+1;for(let S=0,E=g.length;S<E;S++){const R=g[S];o.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var ZM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KM=`#ifdef USE_ALPHAHASH
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
#endif`,QM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tb=`#ifdef USE_AOMAP
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
#endif`,nb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ib=`#ifdef USE_BATCHING
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
#endif`,ab=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ob=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lb=`#ifdef USE_IRIDESCENCE
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
#endif`,cb=`#ifdef USE_BUMPMAP
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
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_b=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vb=`#define PI 3.141592653589793
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
} // validated`,xb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yb=`vec3 transformedNormal = objectNormal;
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
#endif`,Sb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ab=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wb=`#ifdef USE_ENVMAP
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
#endif`,Rb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cb=`#ifdef USE_ENVMAP
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
#endif`,Db=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ub=`#ifdef USE_ENVMAP
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
#endif`,Nb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ob=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pb=`#ifdef USE_GRADIENTMAP
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
}`,zb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hb=`uniform bool receiveShadow;
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
#endif`,Gb=`#ifdef USE_ENVMAP
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
#endif`,Vb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qb=`PhysicalMaterial material;
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
#endif`,Yb=`uniform sampler2D dfgLUT;
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
}`,jb=`
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
#endif`,Zb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aE=`#if defined( USE_POINTS_UV )
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
#endif`,rE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uE=`#ifdef USE_MORPHTARGETS
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
#endif`,fE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_E=`#ifdef USE_NORMALMAP
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
#endif`,vE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ME=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,EE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LE=`float getShadowMask() {
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
}`,OE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IE=`#ifdef USE_SKINNING
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
#endif`,PE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zE=`#ifdef USE_SKINNING
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
#endif`,BE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,VE=`#ifdef USE_TRANSMISSION
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
#endif`,kE=`#ifdef USE_TRANSMISSION
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
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZE=`uniform sampler2D t2D;
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
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$E=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`#include <common>
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
}`,tT=`#if DEPTH_PACKING == 3200
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
}`,nT=`#define DISTANCE
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
}`,iT=`#define DISTANCE
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`uniform float scale;
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
}`,oT=`uniform vec3 diffuse;
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
}`,lT=`#include <common>
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
}`,cT=`uniform vec3 diffuse;
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
}`,uT=`#define LAMBERT
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
}`,fT=`#define LAMBERT
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
}`,hT=`#define MATCAP
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
}`,dT=`#define MATCAP
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
}`,pT=`#define NORMAL
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
}`,mT=`#define NORMAL
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
}`,gT=`#define PHONG
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
}`,_T=`#define PHONG
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
}`,vT=`#define STANDARD
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
}`,xT=`#define STANDARD
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
}`,yT=`#define TOON
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
}`,ST=`#define TOON
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
}`,MT=`uniform float size;
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
}`,bT=`uniform vec3 diffuse;
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
}`,ET=`#include <common>
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
}`,TT=`uniform vec3 color;
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
}`,AT=`uniform float rotation;
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
}`,wT=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:ZM,alphahash_pars_fragment:KM,alphamap_fragment:QM,alphamap_pars_fragment:JM,alphatest_fragment:$M,alphatest_pars_fragment:eb,aomap_fragment:tb,aomap_pars_fragment:nb,batching_pars_vertex:ib,batching_vertex:ab,begin_vertex:rb,beginnormal_vertex:sb,bsdfs:ob,iridescence_fragment:lb,bumpmap_pars_fragment:cb,clipping_planes_fragment:ub,clipping_planes_pars_fragment:fb,clipping_planes_pars_vertex:hb,clipping_planes_vertex:db,color_fragment:pb,color_pars_fragment:mb,color_pars_vertex:gb,color_vertex:_b,common:vb,cube_uv_reflection_fragment:xb,defaultnormal_vertex:yb,displacementmap_pars_vertex:Sb,displacementmap_vertex:Mb,emissivemap_fragment:bb,emissivemap_pars_fragment:Eb,colorspace_fragment:Tb,colorspace_pars_fragment:Ab,envmap_fragment:wb,envmap_common_pars_fragment:Rb,envmap_pars_fragment:Cb,envmap_pars_vertex:Db,envmap_physical_pars_fragment:Gb,envmap_vertex:Ub,fog_vertex:Nb,fog_pars_vertex:Lb,fog_fragment:Ob,fog_pars_fragment:Ib,gradientmap_pars_fragment:Pb,lightmap_pars_fragment:zb,lights_lambert_fragment:Bb,lights_lambert_pars_fragment:Fb,lights_pars_begin:Hb,lights_toon_fragment:Vb,lights_toon_pars_fragment:kb,lights_phong_fragment:Xb,lights_phong_pars_fragment:Wb,lights_physical_fragment:qb,lights_physical_pars_fragment:Yb,lights_fragment_begin:jb,lights_fragment_maps:Zb,lights_fragment_end:Kb,logdepthbuf_fragment:Qb,logdepthbuf_pars_fragment:Jb,logdepthbuf_pars_vertex:$b,logdepthbuf_vertex:eE,map_fragment:tE,map_pars_fragment:nE,map_particle_fragment:iE,map_particle_pars_fragment:aE,metalnessmap_fragment:rE,metalnessmap_pars_fragment:sE,morphinstance_vertex:oE,morphcolor_vertex:lE,morphnormal_vertex:cE,morphtarget_pars_vertex:uE,morphtarget_vertex:fE,normal_fragment_begin:hE,normal_fragment_maps:dE,normal_pars_fragment:pE,normal_pars_vertex:mE,normal_vertex:gE,normalmap_pars_fragment:_E,clearcoat_normal_fragment_begin:vE,clearcoat_normal_fragment_maps:xE,clearcoat_pars_fragment:yE,iridescence_pars_fragment:SE,opaque_fragment:ME,packing:bE,premultiplied_alpha_fragment:EE,project_vertex:TE,dithering_fragment:AE,dithering_pars_fragment:wE,roughnessmap_fragment:RE,roughnessmap_pars_fragment:CE,shadowmap_pars_fragment:DE,shadowmap_pars_vertex:UE,shadowmap_vertex:NE,shadowmask_pars_fragment:LE,skinbase_vertex:OE,skinning_pars_vertex:IE,skinning_vertex:PE,skinnormal_vertex:zE,specularmap_fragment:BE,specularmap_pars_fragment:FE,tonemapping_fragment:HE,tonemapping_pars_fragment:GE,transmission_fragment:VE,transmission_pars_fragment:kE,uv_pars_fragment:XE,uv_pars_vertex:WE,uv_vertex:qE,worldpos_vertex:YE,background_vert:jE,background_frag:ZE,backgroundCube_vert:KE,backgroundCube_frag:QE,cube_vert:JE,cube_frag:$E,depth_vert:eT,depth_frag:tT,distance_vert:nT,distance_frag:iT,equirect_vert:aT,equirect_frag:rT,linedashed_vert:sT,linedashed_frag:oT,meshbasic_vert:lT,meshbasic_frag:cT,meshlambert_vert:uT,meshlambert_frag:fT,meshmatcap_vert:hT,meshmatcap_frag:dT,meshnormal_vert:pT,meshnormal_frag:mT,meshphong_vert:gT,meshphong_frag:_T,meshphysical_vert:vT,meshphysical_frag:xT,meshtoon_vert:yT,meshtoon_frag:ST,points_vert:MT,points_frag:bT,shadow_vert:ET,shadow_frag:TT,sprite_vert:AT,sprite_frag:wT},Be={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},ki={basic:{uniforms:Gn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Gn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Tt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Gn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Gn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Gn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Tt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Gn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Gn([Be.points,Be.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Gn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Gn([Be.common,Be.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Gn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Gn([Be.sprite,Be.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Gn([Be.common,Be.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Gn([Be.lights,Be.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};ki.physical={uniforms:Gn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Wc={r:0,b:0,g:0},Or=new Qi,RT=new nn;function CT(o,e,i,r,l,c,h){const d=new Tt(0);let m=c===!0?0:1,p,_,g=null,y=0,S=null;function E(O){let L=O.isScene===!0?O.background:null;return L&&L.isTexture&&(L=(O.backgroundBlurriness>0?i:e).get(L)),L}function R(O){let L=!1;const z=E(O);z===null?x(d,m):z&&z.isColor&&(x(z,1),L=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(O,L){const z=E(L);z&&(z.isCubeTexture||z.mapping===au)?(_===void 0&&(_=new Rt(new kn(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Qs(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(B,I,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Or.copy(L.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),_.material.uniforms.envMap.value=z,_.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(RT.makeRotationFromEuler(Or)),_.material.toneMapped=Dt.getTransfer(z.colorSpace)!==Vt,(g!==z||y!==z.version||S!==o.toneMapping)&&(_.material.needsUpdate=!0,g=z,y=z.version,S=o.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Rt(new kr(2,2),new Ji({name:"BackgroundMaterial",uniforms:Qs(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Dt.getTransfer(z.colorSpace)!==Vt,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||y!==z.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,g=z,y=z.version,S=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function x(O,L){O.getRGB(Wc,Tv(o)),r.buffers.color.setClear(Wc.r,Wc.g,Wc.b,L,h)}function P(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,L=1){d.set(O),m=L,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,x(d,m)},render:R,addToRenderList:M,dispose:P}}function DT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,h=!1;function d(C,V,Z,K,se){let he=!1;const N=g(K,Z,V);c!==N&&(c=N,p(c.object)),he=S(C,K,Z,se),he&&E(C,K,Z,se),se!==null&&e.update(se,o.ELEMENT_ARRAY_BUFFER),(he||h)&&(h=!1,L(C,V,Z,K),se!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function _(C){return o.deleteVertexArray(C)}function g(C,V,Z){const K=Z.wireframe===!0;let se=r[C.id];se===void 0&&(se={},r[C.id]=se);let he=se[V.id];he===void 0&&(he={},se[V.id]=he);let N=he[K];return N===void 0&&(N=y(m()),he[K]=N),N}function y(C){const V=[],Z=[],K=[];for(let se=0;se<i;se++)V[se]=0,Z[se]=0,K[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Z,attributeDivisors:K,object:C,attributes:{},index:null}}function S(C,V,Z,K){const se=c.attributes,he=V.attributes;let N=0;const G=Z.getAttributes();for(const ne in G)if(G[ne].location>=0){const be=se[ne];let U=he[ne];if(U===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),be===void 0||be.attribute!==U||U&&be.data!==U.data)return!0;N++}return c.attributesNum!==N||c.index!==K}function E(C,V,Z,K){const se={},he=V.attributes;let N=0;const G=Z.getAttributes();for(const ne in G)if(G[ne].location>=0){let be=he[ne];be===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(be=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(be=C.instanceColor));const U={};U.attribute=be,be&&be.data&&(U.data=be.data),se[ne]=U,N++}c.attributes=se,c.attributesNum=N,c.index=K}function R(){const C=c.newAttributes;for(let V=0,Z=C.length;V<Z;V++)C[V]=0}function M(C){x(C,0)}function x(C,V){const Z=c.newAttributes,K=c.enabledAttributes,se=c.attributeDivisors;Z[C]=1,K[C]===0&&(o.enableVertexAttribArray(C),K[C]=1),se[C]!==V&&(o.vertexAttribDivisor(C,V),se[C]=V)}function P(){const C=c.newAttributes,V=c.enabledAttributes;for(let Z=0,K=V.length;Z<K;Z++)V[Z]!==C[Z]&&(o.disableVertexAttribArray(Z),V[Z]=0)}function O(C,V,Z,K,se,he,N){N===!0?o.vertexAttribIPointer(C,V,Z,se,he):o.vertexAttribPointer(C,V,Z,K,se,he)}function L(C,V,Z,K){R();const se=K.attributes,he=Z.getAttributes(),N=V.defaultAttributeValues;for(const G in he){const ne=he[G];if(ne.location>=0){let Me=se[G];if(Me===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(Me=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(Me=C.instanceColor)),Me!==void 0){const be=Me.normalized,U=Me.itemSize,ie=e.get(Me);if(ie===void 0)continue;const _e=ie.buffer,Ae=ie.type,Ie=ie.bytesPerElement,$=Ae===o.INT||Ae===o.UNSIGNED_INT||Me.gpuType===Zd;if(Me.isInterleavedBufferAttribute){const ce=Me.data,Ue=ce.stride,He=Me.offset;if(ce.isInstancedInterleavedBuffer){for(let Ge=0;Ge<ne.locationSize;Ge++)x(ne.location+Ge,ce.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ge=0;Ge<ne.locationSize;Ge++)M(ne.location+Ge);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let Ge=0;Ge<ne.locationSize;Ge++)O(ne.location+Ge,U/ne.locationSize,Ae,be,Ue*Ie,(He+U/ne.locationSize*Ge)*Ie,$)}else{if(Me.isInstancedBufferAttribute){for(let ce=0;ce<ne.locationSize;ce++)x(ne.location+ce,Me.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ce=0;ce<ne.locationSize;ce++)M(ne.location+ce);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let ce=0;ce<ne.locationSize;ce++)O(ne.location+ce,U/ne.locationSize,Ae,be,U*Ie,U/ne.locationSize*ce*Ie,$)}}else if(N!==void 0){const be=N[G];if(be!==void 0)switch(be.length){case 2:o.vertexAttrib2fv(ne.location,be);break;case 3:o.vertexAttrib3fv(ne.location,be);break;case 4:o.vertexAttrib4fv(ne.location,be);break;default:o.vertexAttrib1fv(ne.location,be)}}}}P()}function z(){j();for(const C in r){const V=r[C];for(const Z in V){const K=V[Z];for(const se in K)_(K[se].object),delete K[se];delete V[Z]}delete r[C]}}function B(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const Z in V){const K=V[Z];for(const se in K)_(K[se].object),delete K[se];delete V[Z]}delete r[C.id]}function I(C){for(const V in r){const Z=r[V];if(Z[C.id]===void 0)continue;const K=Z[C.id];for(const se in K)_(K[se].object),delete K[se];delete Z[C.id]}}function j(){T(),h=!0,c!==l&&(c=l,p(c.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:T,dispose:z,releaseStatesOfGeometry:B,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:M,disableUnusedAttributes:P}}function UT(o,e,i){let r;function l(p){r=p}function c(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,g){g!==0&&(o.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function d(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let S=0;for(let E=0;E<g;E++)S+=_[E];i.update(S,r,1)}function m(p,_,g,y){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)h(p[E],_[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,_,0,y,0,g);let E=0;for(let R=0;R<g;R++)E+=_[R]*y[R];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function NT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==Oi&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const j=I===Aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ci&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==qi&&!j)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ut("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:L,maxSamples:z,samples:B}}function LT(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new Pr,d=new mt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const S=g.length!==0||y||r!==0||l;return l=y,r=g.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=_(g,y,0)},this.setState=function(g,y,S){const E=g.clippingPlanes,R=g.clipIntersection,M=g.clipShadows,x=o.get(g);if(!l||E===null||E.length===0||c&&!M)c?_(null):p();else{const P=c?0:r,O=P*4;let L=x.clippingState||null;m.value=L,L=_(E,y,O,S);for(let z=0;z!==O;++z)L[z]=i[z];x.clippingState=L,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,y,S,E){const R=g!==null?g.length:0;let M=null;if(R!==0){if(M=m.value,E!==!0||M===null){const x=S+R*4,P=y.matrixWorldInverse;d.getNormalMatrix(P),(M===null||M.length<x)&&(M=new Float32Array(x));for(let O=0,L=S;O!==R;++O,L+=4)h.copy(g[O]).applyMatrix4(P,d),h.normal.toArray(M,L),M[L+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}function OT(o){let e=new WeakMap;function i(h,d){return d===ld?h.mapping=Vr:d===cd&&(h.mapping=js),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===ld||d===cd)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Rv(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const lr=4,C_=[.125,.215,.35,.446,.526,.582],Br=20,IT=256,tl=new lp,D_=new Tt;let Yh=null,jh=0,Zh=0,Kh=!1;const PT=new J;class U_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=PT}=c;Yh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=O_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yh,jh,Zh),this._renderer.xr.enabled=Kh,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Vr||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Aa,format:Oi,colorSpace:Ks,depthBuffer:!1},l=N_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=N_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zT(c)),this._blurMaterial=FT(c,e,i),this._ggxMaterial=BT(c,e,i)}return l}_compileMaterial(e){const i=new Rt(new bi,e);this._renderer.compile(i,tl)}_sceneToCubeUV(e,i,r,l,c){const m=new Jn(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,S=g.toneMapping;g.getClearColor(D_),g.toneMapping=ji,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rt(new kn,new Gr({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,M=R.material;let x=!1;const P=e.background;P?P.isColor&&(M.color.copy(P),e.background=null,x=!0):(M.color.copy(D_),x=!0);for(let O=0;O<6;O++){const L=O%3;L===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[O],c.y,c.z)):L===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[O]));const z=this._cubeSize;ks(l,L*z,O>2?z:0,z,z),g.setRenderTarget(l),x&&g.render(R,m),g.render(e,m)}g.toneMapping=S,g.autoClear=y,e.background=P}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Vr||e.mapping===js;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=O_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=L_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;ks(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,tl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),y=0+p*1.25,S=g*y,{_lodMax:E}=this,R=this._sizeLods[r],M=3*R*(r>E-lr?r-E+lr:0),x=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=E-i,ks(c,M,x,3*R,2*R),l.setRenderTarget(c),l.render(d,tl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,ks(e,M,x,3*R,2*R),l.setRenderTarget(e),l.render(d,tl)}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const y=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Br-1),R=c/E,M=isFinite(c)?1+Math.floor(_*R):Br;M>Br&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Br}`);const x=[];let P=0;for(let I=0;I<Br;++I){const j=I/R,T=Math.exp(-j*j/2);x.push(T),I===0?P+=T:I<M&&(P+=2*T)}for(let I=0;I<x.length;I++)x[I]=x[I]/P;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=x,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:O}=this;y.dTheta.value=E,y.mipInt.value=O-r;const L=this._sizeLods[l],z=3*L*(l>O-lr?l-O+lr:0),B=4*(this._cubeSize-L);ks(i,z,B,3*L,2*L),m.setRenderTarget(i),m.render(g,tl)}}function zT(o){const e=[],i=[],r=[];let l=o;const c=o-lr+1+C_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-lr?m=C_[h-o+lr-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,g=1+p,y=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,E=6,R=3,M=2,x=1,P=new Float32Array(R*E*S),O=new Float32Array(M*E*S),L=new Float32Array(x*E*S);for(let B=0;B<S;B++){const I=B%3*2/3-1,j=B>2?0:-1,T=[I,j,0,I+2/3,j,0,I+2/3,j+1,0,I,j,0,I+2/3,j+1,0,I,j+1,0];P.set(T,R*E*B),O.set(y,M*E*B);const C=[B,B,B,B,B,B];L.set(C,x*E*B)}const z=new bi;z.setAttribute("position",new Ii(P,R)),z.setAttribute("uv",new Ii(O,M)),z.setAttribute("faceIndex",new Ii(L,x)),r.push(new Rt(z,null)),l>lr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function N_(o,e,i){const r=new Zi(o,e,i);return r.texture.mapping=au,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ks(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function BT(o,e,i){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:IT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ou(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function FT(o,e,i){const r=new Float32Array(Br),l=new J(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ou(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function L_(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function O_(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function ou(){return`

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
	`}function HT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===ld||m===cd,_=m===Vr||m===js;if(p||_){let g=e.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new U_(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new U_(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function GT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&cl("WebGLRenderer: "+r+" extension not supported."),l}}}function VT(o,e,i,r){const l={},c=new WeakMap;function h(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",h),delete l[y.id];const S=c.get(y);S&&(e.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(g,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const S in y)e.update(y[S],o.ARRAY_BUFFER)}function p(g){const y=[],S=g.index,E=g.attributes.position;let R=0;if(S!==null){const P=S.array;R=S.version;for(let O=0,L=P.length;O<L;O+=3){const z=P[O+0],B=P[O+1],I=P[O+2];y.push(z,B,B,I,I,z)}}else if(E!==void 0){const P=E.array;R=E.version;for(let O=0,L=P.length/3-1;O<L;O+=3){const z=O+0,B=O+1,I=O+2;y.push(z,B,B,I,I,z)}}else return;const M=new(xv(y)?Ev:bv)(y,1);M.version=R;const x=c.get(g);x&&e.remove(x),c.set(g,M)}function _(g){const y=c.get(g);if(y){const S=g.index;S!==null&&y.version<S.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function kT(o,e,i){let r;function l(y){r=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,S){o.drawElements(r,S,c,y*h),i.update(S,r,1)}function p(y,S,E){E!==0&&(o.drawElementsInstanced(r,S,c,y*h,E),i.update(S,r,E))}function _(y,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,E);let M=0;for(let x=0;x<E;x++)M+=S[x];i.update(M,r,1)}function g(y,S,E,R){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<y.length;x++)p(y[x]/h,S[x],R[x]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,R,0,E);let x=0;for(let P=0;P<E;P++)x+=S[P]*R[P];i.update(x,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function XT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:Ct("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function WT(o,e,i){const r=new WeakMap,l=new sn;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let y=r.get(d);if(y===void 0||y.count!==g){let C=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let L=0;E===!0&&(L=1),R===!0&&(L=2),M===!0&&(L=3);let z=d.attributes.position.count*L,B=1;z>e.maxTextureSize&&(B=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const I=new Float32Array(z*B*4*g),j=new yv(I,z,B,g);j.type=qi,j.needsUpdate=!0;const T=L*4;for(let V=0;V<g;V++){const Z=x[V],K=P[V],se=O[V],he=z*B*4*V;for(let N=0;N<Z.count;N++){const G=N*T;E===!0&&(l.fromBufferAttribute(Z,N),I[he+G+0]=l.x,I[he+G+1]=l.y,I[he+G+2]=l.z,I[he+G+3]=0),R===!0&&(l.fromBufferAttribute(K,N),I[he+G+4]=l.x,I[he+G+5]=l.y,I[he+G+6]=l.z,I[he+G+7]=0),M===!0&&(l.fromBufferAttribute(se,N),I[he+G+8]=l.x,I[he+G+9]=l.y,I[he+G+10]=l.z,I[he+G+11]=se.itemSize===4?l.w:1)}}y={count:g,texture:j,size:new xt(z,B)},r.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const R=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function qT(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const YT={[iv]:"LINEAR_TONE_MAPPING",[av]:"REINHARD_TONE_MAPPING",[rv]:"CINEON_TONE_MAPPING",[sv]:"ACES_FILMIC_TONE_MAPPING",[lv]:"AGX_TONE_MAPPING",[cv]:"NEUTRAL_TONE_MAPPING",[ov]:"CUSTOM_TONE_MAPPING"};function jT(o,e,i,r,l){const c=new Zi(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),h=new Zi(e,i,{type:Aa,depthBuffer:!1,stencilBuffer:!1}),d=new bi;d.setAttribute("position",new Xn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Xn([0,2,0,0,2,0],2));const m=new LM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Rt(d,m),_=new lp(-1,1,1,-1,0,1);let g=null,y=null,S=!1,E,R=null,M=[],x=!1;this.setSize=function(P,O){c.setSize(P,O),h.setSize(P,O);for(let L=0;L<M.length;L++){const z=M[L];z.setSize&&z.setSize(P,O)}},this.setEffects=function(P){M=P,x=M.length>0&&M[0].isRenderPass===!0;const O=c.width,L=c.height;for(let z=0;z<M.length;z++){const B=M[z];B.setSize&&B.setSize(O,L)}},this.begin=function(P,O){if(S||P.toneMapping===ji&&M.length===0)return!1;if(R=O,O!==null){const L=O.width,z=O.height;(c.width!==L||c.height!==z)&&this.setSize(L,z)}return x===!1&&P.setRenderTarget(c),E=P.toneMapping,P.toneMapping=ji,!0},this.hasRenderPass=function(){return x},this.end=function(P,O){P.toneMapping=E,S=!0;let L=c,z=h;for(let B=0;B<M.length;B++){const I=M[B];if(I.enabled!==!1&&(I.render(P,z,L,O),I.needsSwap!==!1)){const j=L;L=z,z=j}}if(g!==P.outputColorSpace||y!==P.toneMapping){g=P.outputColorSpace,y=P.toneMapping,m.defines={},Dt.getTransfer(g)===Vt&&(m.defines.SRGB_TRANSFER="");const B=YT[y];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,P.setRenderTarget(R),P.render(p,_),R=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Nv=new Bn,Wd=new ul(1,1),Lv=new yv,Ov=new oM,Iv=new wv,I_=[],P_=[],z_=new Float32Array(16),B_=new Float32Array(9),F_=new Float32Array(4);function to(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=I_[l];if(c===void 0&&(c=new Float32Array(l),I_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function xn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function yn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function lu(o,e){let i=P_[e];i===void 0&&(i=new Int32Array(e),P_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function ZT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function KT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2fv(this.addr,e),yn(i,e)}}function QT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;o.uniform3fv(this.addr,e),yn(i,e)}}function JT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4fv(this.addr,e),yn(i,e)}}function $T(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(xn(i,r))return;F_.set(r),o.uniformMatrix2fv(this.addr,!1,F_),yn(i,r)}}function e1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(xn(i,r))return;B_.set(r),o.uniformMatrix3fv(this.addr,!1,B_),yn(i,r)}}function t1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(xn(i,r))return;z_.set(r),o.uniformMatrix4fv(this.addr,!1,z_),yn(i,r)}}function n1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function i1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2iv(this.addr,e),yn(i,e)}}function a1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3iv(this.addr,e),yn(i,e)}}function r1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4iv(this.addr,e),yn(i,e)}}function s1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function o1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2uiv(this.addr,e),yn(i,e)}}function l1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3uiv(this.addr,e),yn(i,e)}}function c1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4uiv(this.addr,e),yn(i,e)}}function u1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Wd.compareFunction=i.isReversedDepthBuffer()?np:tp,c=Wd):c=Nv,i.setTexture2D(e||c,l)}function f1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Ov,l)}function h1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Iv,l)}function d1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Lv,l)}function p1(o){switch(o){case 5126:return ZT;case 35664:return KT;case 35665:return QT;case 35666:return JT;case 35674:return $T;case 35675:return e1;case 35676:return t1;case 5124:case 35670:return n1;case 35667:case 35671:return i1;case 35668:case 35672:return a1;case 35669:case 35673:return r1;case 5125:return s1;case 36294:return o1;case 36295:return l1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return u1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return d1}}function m1(o,e){o.uniform1fv(this.addr,e)}function g1(o,e){const i=to(e,this.size,2);o.uniform2fv(this.addr,i)}function _1(o,e){const i=to(e,this.size,3);o.uniform3fv(this.addr,i)}function v1(o,e){const i=to(e,this.size,4);o.uniform4fv(this.addr,i)}function x1(o,e){const i=to(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function y1(o,e){const i=to(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function S1(o,e){const i=to(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function M1(o,e){o.uniform1iv(this.addr,e)}function b1(o,e){o.uniform2iv(this.addr,e)}function E1(o,e){o.uniform3iv(this.addr,e)}function T1(o,e){o.uniform4iv(this.addr,e)}function A1(o,e){o.uniform1uiv(this.addr,e)}function w1(o,e){o.uniform2uiv(this.addr,e)}function R1(o,e){o.uniform3uiv(this.addr,e)}function C1(o,e){o.uniform4uiv(this.addr,e)}function D1(o,e,i){const r=this.cache,l=e.length,c=lu(i,l);xn(r,c)||(o.uniform1iv(this.addr,c),yn(r,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Wd:h=Nv;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,c[d])}function U1(o,e,i){const r=this.cache,l=e.length,c=lu(i,l);xn(r,c)||(o.uniform1iv(this.addr,c),yn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Ov,c[h])}function N1(o,e,i){const r=this.cache,l=e.length,c=lu(i,l);xn(r,c)||(o.uniform1iv(this.addr,c),yn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Iv,c[h])}function L1(o,e,i){const r=this.cache,l=e.length,c=lu(i,l);xn(r,c)||(o.uniform1iv(this.addr,c),yn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Lv,c[h])}function O1(o){switch(o){case 5126:return m1;case 35664:return g1;case 35665:return _1;case 35666:return v1;case 35674:return x1;case 35675:return y1;case 35676:return S1;case 5124:case 35670:return M1;case 35667:case 35671:return b1;case 35668:case 35672:return E1;case 35669:case 35673:return T1;case 5125:return A1;case 36294:return w1;case 36295:return R1;case 36296:return C1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return L1}}class I1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=p1(i.type)}}class P1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=O1(i.type)}}class z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const Qh=/(\w+)(\])?(\[|\.)?/g;function H_(o,e){o.seq.push(e),o.map[e.id]=e}function B1(o,e,i){const r=o.name,l=r.length;for(Qh.lastIndex=0;;){const c=Qh.exec(r),h=Qh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){H_(i,p===void 0?new I1(d,o,e):new P1(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new z1(d),H_(i,g)),i=g}}}class Jc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);B1(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function G_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const F1=37297;let H1=0;function G1(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const V_=new mt;function V1(o){Dt._getMatrix(V_,Dt.workingColorSpace,o);const e=`mat3( ${V_.elements.map(i=>i.toFixed(4))} )`;switch(Dt.getTransfer(o)){case $c:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function k_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+G1(o.getShaderSource(e),d)}else return c}function k1(o,e){const i=V1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const X1={[iv]:"Linear",[av]:"Reinhard",[rv]:"Cineon",[sv]:"ACESFilmic",[lv]:"AgX",[cv]:"Neutral",[ov]:"Custom"};function W1(o,e){const i=X1[e];return i===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const qc=new J;function q1(){Dt.getLuminanceCoefficients(qc);const o=qc.x.toFixed(4),e=qc.y.toFixed(4),i=qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function j1(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Z1(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function al(o){return o!==""}function X_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function W_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const K1=/^[ \t]*#include +<([\w\d./]+)>/gm;function qd(o){return o.replace(K1,J1)}const Q1=new Map;function J1(o,e){let i=gt[e];if(i===void 0){const r=Q1.get(e);if(r!==void 0)i=gt[r],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return qd(i)}const $1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q_(o){return o.replace($1,eA)}function eA(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Y_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const tA={[Yc]:"SHADOWMAP_TYPE_PCF",[il]:"SHADOWMAP_TYPE_VSM"};function nA(o){return tA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iA={[Vr]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[au]:"ENVMAP_TYPE_CUBE_UV"};function aA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":iA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const rA={[js]:"ENVMAP_MODE_REFRACTION"};function sA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":rA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const oA={[nv]:"ENVMAP_BLENDING_MULTIPLY",[VS]:"ENVMAP_BLENDING_MIX",[kS]:"ENVMAP_BLENDING_ADD"};function lA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":oA[o.combine]||"ENVMAP_BLENDING_NONE"}function cA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function uA(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=nA(i),p=aA(i),_=sA(i),g=lA(i),y=cA(i),S=Y1(i),E=j1(c),R=l.createProgram();let M,x,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(al).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(al).join(`
`),x.length>0&&(x+=`
`)):(M=[Y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),x=[Y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ji?"#define TONE_MAPPING":"",i.toneMapping!==ji?gt.tonemapping_pars_fragment:"",i.toneMapping!==ji?W1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,k1("linearToOutputTexel",i.outputColorSpace),q1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(al).join(`
`)),h=qd(h),h=X_(h,i),h=W_(h,i),d=qd(d),d=X_(d,i),d=W_(d,i),h=q_(h),d=q_(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===a_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===a_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const O=P+M+h,L=P+x+d,z=G_(l,l.VERTEX_SHADER,O),B=G_(l,l.FRAGMENT_SHADER,L);l.attachShader(R,z),l.attachShader(R,B),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function I(V){if(o.debug.checkShaderErrors){const Z=l.getProgramInfoLog(R)||"",K=l.getShaderInfoLog(z)||"",se=l.getShaderInfoLog(B)||"",he=Z.trim(),N=K.trim(),G=se.trim();let ne=!0,Me=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ne=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,z,B);else{const be=k_(l,z,"vertex"),U=k_(l,B,"fragment");Ct("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+he+`
`+be+`
`+U)}else he!==""?ut("WebGLProgram: Program Info Log:",he):(N===""||G==="")&&(Me=!1);Me&&(V.diagnostics={runnable:ne,programLog:he,vertexShader:{log:N,prefix:M},fragmentShader:{log:G,prefix:x}})}l.deleteShader(z),l.deleteShader(B),j=new Jc(l,R),T=Z1(l,R)}let j;this.getUniforms=function(){return j===void 0&&I(this),j};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,F1)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=H1++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=z,this.fragmentShader=B,this}let fA=0;class hA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new dA(e),i.set(e,r)),r}}class dA{constructor(e){this.id=fA++,this.code=e,this.usedTimes=0}}function pA(o,e,i,r,l,c,h){const d=new Sv,m=new hA,p=new Set,_=[],g=new Map,y=l.logarithmicDepthBuffer;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(T){return p.add(T),T===0?"uv":`uv${T}`}function M(T,C,V,Z,K){const se=Z.fog,he=K.geometry,N=T.isMeshStandardMaterial?Z.environment:null,G=(T.isMeshStandardMaterial?i:e).get(T.envMap||N),ne=G&&G.mapping===au?G.image.height:null,Me=E[T.type];T.precision!==null&&(S=l.getMaxPrecision(T.precision),S!==T.precision&&ut("WebGLProgram.getParameters:",T.precision,"not supported, using",S,"instead."));const be=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,U=be!==void 0?be.length:0;let ie=0;he.morphAttributes.position!==void 0&&(ie=1),he.morphAttributes.normal!==void 0&&(ie=2),he.morphAttributes.color!==void 0&&(ie=3);let _e,Ae,Ie,$;if(Me){const et=ki[Me];_e=et.vertexShader,Ae=et.fragmentShader}else _e=T.vertexShader,Ae=T.fragmentShader,m.update(T),Ie=m.getVertexShaderID(T),$=m.getFragmentShaderID(T);const ce=o.getRenderTarget(),Ue=o.state.buffers.depth.getReversed(),He=K.isInstancedMesh===!0,Ge=K.isBatchedMesh===!0,ht=!!T.map,Kt=!!T.matcap,_t=!!G,nt=!!T.aoMap,Qe=!!T.lightMap,ot=!!T.bumpMap,$t=!!T.normalMap,k=!!T.displacementMap,jt=!!T.emissiveMap,Mt=!!T.metalnessMap,Ut=!!T.roughnessMap,qe=T.anisotropy>0,D=T.clearcoat>0,b=T.dispersion>0,W=T.iridescence>0,pe=T.sheen>0,ye=T.transmission>0,ue=qe&&!!T.anisotropyMap,Ye=D&&!!T.clearcoatMap,Ne=D&&!!T.clearcoatNormalMap,We=D&&!!T.clearcoatRoughnessMap,at=W&&!!T.iridescenceMap,Te=W&&!!T.iridescenceThicknessMap,Re=pe&&!!T.sheenColorMap,Fe=pe&&!!T.sheenRoughnessMap,Pe=!!T.specularMap,Le=!!T.specularColorMap,ft=!!T.specularIntensityMap,F=ye&&!!T.transmissionMap,Ee=ye&&!!T.thicknessMap,Se=!!T.gradientMap,Ce=!!T.alphaMap,le=T.alphaTest>0,de=!!T.alphaHash,we=!!T.extensions;let De=ji;T.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(De=o.toneMapping);const $e={shaderID:Me,shaderType:T.type,shaderName:T.name,vertexShader:_e,fragmentShader:Ae,defines:T.defines,customVertexShaderID:Ie,customFragmentShaderID:$,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:S,batching:Ge,batchingColor:Ge&&K._colorsTexture!==null,instancing:He,instancingColor:He&&K.instanceColor!==null,instancingMorph:He&&K.morphTexture!==null,outputColorSpace:ce===null?o.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ks,alphaToCoverage:!!T.alphaToCoverage,map:ht,matcap:Kt,envMap:_t,envMapMode:_t&&G.mapping,envMapCubeUVHeight:ne,aoMap:nt,lightMap:Qe,bumpMap:ot,normalMap:$t,displacementMap:k,emissiveMap:jt,normalMapObjectSpace:$t&&T.normalMapType===qS,normalMapTangentSpace:$t&&T.normalMapType===vv,metalnessMap:Mt,roughnessMap:Ut,anisotropy:qe,anisotropyMap:ue,clearcoat:D,clearcoatMap:Ye,clearcoatNormalMap:Ne,clearcoatRoughnessMap:We,dispersion:b,iridescence:W,iridescenceMap:at,iridescenceThicknessMap:Te,sheen:pe,sheenColorMap:Re,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:Le,specularIntensityMap:ft,transmission:ye,transmissionMap:F,thicknessMap:Ee,gradientMap:Se,opaque:T.transparent===!1&&T.blending===Xs&&T.alphaToCoverage===!1,alphaMap:Ce,alphaTest:le,alphaHash:de,combine:T.combine,mapUv:ht&&R(T.map.channel),aoMapUv:nt&&R(T.aoMap.channel),lightMapUv:Qe&&R(T.lightMap.channel),bumpMapUv:ot&&R(T.bumpMap.channel),normalMapUv:$t&&R(T.normalMap.channel),displacementMapUv:k&&R(T.displacementMap.channel),emissiveMapUv:jt&&R(T.emissiveMap.channel),metalnessMapUv:Mt&&R(T.metalnessMap.channel),roughnessMapUv:Ut&&R(T.roughnessMap.channel),anisotropyMapUv:ue&&R(T.anisotropyMap.channel),clearcoatMapUv:Ye&&R(T.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&R(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&R(T.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&R(T.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&R(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&R(T.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&R(T.sheenRoughnessMap.channel),specularMapUv:Pe&&R(T.specularMap.channel),specularColorMapUv:Le&&R(T.specularColorMap.channel),specularIntensityMapUv:ft&&R(T.specularIntensityMap.channel),transmissionMapUv:F&&R(T.transmissionMap.channel),thicknessMapUv:Ee&&R(T.thicknessMap.channel),alphaMapUv:Ce&&R(T.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&($t||qe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!he.attributes.uv&&(ht||Ce),fog:!!se,useFog:T.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Ue,skinning:K.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:De,decodeVideoTexture:ht&&T.map.isVideoTexture===!0&&Dt.getTransfer(T.map.colorSpace)===Vt,decodeVideoTextureEmissive:jt&&T.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(T.emissiveMap.colorSpace)===Vt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Xi,flipSided:T.side===$n,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:we&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&T.extensions.multiDraw===!0||Ge)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return $e.vertexUv1s=p.has(1),$e.vertexUv2s=p.has(2),$e.vertexUv3s=p.has(3),p.clear(),$e}function x(T){const C=[];if(T.shaderID?C.push(T.shaderID):(C.push(T.customVertexShaderID),C.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)C.push(V),C.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(P(C,T),O(C,T),C.push(o.outputColorSpace)),C.push(T.customProgramCacheKey),C.join()}function P(T,C){T.push(C.precision),T.push(C.outputColorSpace),T.push(C.envMapMode),T.push(C.envMapCubeUVHeight),T.push(C.mapUv),T.push(C.alphaMapUv),T.push(C.lightMapUv),T.push(C.aoMapUv),T.push(C.bumpMapUv),T.push(C.normalMapUv),T.push(C.displacementMapUv),T.push(C.emissiveMapUv),T.push(C.metalnessMapUv),T.push(C.roughnessMapUv),T.push(C.anisotropyMapUv),T.push(C.clearcoatMapUv),T.push(C.clearcoatNormalMapUv),T.push(C.clearcoatRoughnessMapUv),T.push(C.iridescenceMapUv),T.push(C.iridescenceThicknessMapUv),T.push(C.sheenColorMapUv),T.push(C.sheenRoughnessMapUv),T.push(C.specularMapUv),T.push(C.specularColorMapUv),T.push(C.specularIntensityMapUv),T.push(C.transmissionMapUv),T.push(C.thicknessMapUv),T.push(C.combine),T.push(C.fogExp2),T.push(C.sizeAttenuation),T.push(C.morphTargetsCount),T.push(C.morphAttributeCount),T.push(C.numDirLights),T.push(C.numPointLights),T.push(C.numSpotLights),T.push(C.numSpotLightMaps),T.push(C.numHemiLights),T.push(C.numRectAreaLights),T.push(C.numDirLightShadows),T.push(C.numPointLightShadows),T.push(C.numSpotLightShadows),T.push(C.numSpotLightShadowsWithMaps),T.push(C.numLightProbes),T.push(C.shadowMapType),T.push(C.toneMapping),T.push(C.numClippingPlanes),T.push(C.numClipIntersection),T.push(C.depthPacking)}function O(T,C){d.disableAll(),C.instancing&&d.enable(0),C.instancingColor&&d.enable(1),C.instancingMorph&&d.enable(2),C.matcap&&d.enable(3),C.envMap&&d.enable(4),C.normalMapObjectSpace&&d.enable(5),C.normalMapTangentSpace&&d.enable(6),C.clearcoat&&d.enable(7),C.iridescence&&d.enable(8),C.alphaTest&&d.enable(9),C.vertexColors&&d.enable(10),C.vertexAlphas&&d.enable(11),C.vertexUv1s&&d.enable(12),C.vertexUv2s&&d.enable(13),C.vertexUv3s&&d.enable(14),C.vertexTangents&&d.enable(15),C.anisotropy&&d.enable(16),C.alphaHash&&d.enable(17),C.batching&&d.enable(18),C.dispersion&&d.enable(19),C.batchingColor&&d.enable(20),C.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),T.push(d.mask)}function L(T){const C=E[T.type];let V;if(C){const Z=ki[C];V=SM.clone(Z.uniforms)}else V=T.uniforms;return V}function z(T,C){let V=g.get(C);return V!==void 0?++V.usedTimes:(V=new uA(o,C,T,c),_.push(V),g.set(C,V)),V}function B(T){if(--T.usedTimes===0){const C=_.indexOf(T);_[C]=_[_.length-1],_.pop(),g.delete(T.cacheKey),T.destroy()}}function I(T){m.remove(T)}function j(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:L,acquireProgram:z,releaseProgram:B,releaseShaderCache:I,programs:_,dispose:j}}function mA(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function gA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function j_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Z_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(g,y,S,E,R,M){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:y,material:S,groupOrder:E,renderOrder:g.renderOrder,z:R,group:M},o[e]=x):(x.id=g.id,x.object=g,x.geometry=y,x.material=S,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=R,x.group=M),e++,x}function d(g,y,S,E,R,M){const x=h(g,y,S,E,R,M);S.transmission>0?r.push(x):S.transparent===!0?l.push(x):i.push(x)}function m(g,y,S,E,R,M){const x=h(g,y,S,E,R,M);S.transmission>0?r.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,y){i.length>1&&i.sort(g||gA),r.length>1&&r.sort(y||j_),l.length>1&&l.sort(y||j_)}function _(){for(let g=e,y=o.length;g<y;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function _A(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new Z_,o.set(r,[h])):l>=c.length?(h=new Z_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function vA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new J,color:new Tt};break;case"SpotLight":i={position:new J,direction:new J,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":i={color:new Tt,position:new J,halfWidth:new J,halfHeight:new J};break}return o[e.id]=i,i}}}function xA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let yA=0;function SA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function MA(o){const e=new vA,i=xA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new J);const l=new J,c=new nn,h=new nn;function d(p){let _=0,g=0,y=0;for(let T=0;T<9;T++)r.probe[T].set(0,0,0);let S=0,E=0,R=0,M=0,x=0,P=0,O=0,L=0,z=0,B=0,I=0;p.sort(SA);for(let T=0,C=p.length;T<C;T++){const V=p[T],Z=V.color,K=V.intensity,se=V.distance;let he=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Zs?he=V.shadow.map.texture:he=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=Z.r*K,g+=Z.g*K,y+=Z.b*K;else if(V.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(V.sh.coefficients[N],K);I++}else if(V.isDirectionalLight){const N=e.get(V);if(N.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const G=V.shadow,ne=i.get(V);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,r.directionalShadow[S]=ne,r.directionalShadowMap[S]=he,r.directionalShadowMatrix[S]=V.shadow.matrix,P++}r.directional[S]=N,S++}else if(V.isSpotLight){const N=e.get(V);N.position.setFromMatrixPosition(V.matrixWorld),N.color.copy(Z).multiplyScalar(K),N.distance=se,N.coneCos=Math.cos(V.angle),N.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),N.decay=V.decay,r.spot[R]=N;const G=V.shadow;if(V.map&&(r.spotLightMap[z]=V.map,z++,G.updateMatrices(V),V.castShadow&&B++),r.spotLightMatrix[R]=G.matrix,V.castShadow){const ne=i.get(V);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,r.spotShadow[R]=ne,r.spotShadowMap[R]=he,L++}R++}else if(V.isRectAreaLight){const N=e.get(V);N.color.copy(Z).multiplyScalar(K),N.halfWidth.set(V.width*.5,0,0),N.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=N,M++}else if(V.isPointLight){const N=e.get(V);if(N.color.copy(V.color).multiplyScalar(V.intensity),N.distance=V.distance,N.decay=V.decay,V.castShadow){const G=V.shadow,ne=i.get(V);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,ne.shadowCameraNear=G.camera.near,ne.shadowCameraFar=G.camera.far,r.pointShadow[E]=ne,r.pointShadowMap[E]=he,r.pointShadowMatrix[E]=V.shadow.matrix,O++}r.point[E]=N,E++}else if(V.isHemisphereLight){const N=e.get(V);N.skyColor.copy(V.color).multiplyScalar(K),N.groundColor.copy(V.groundColor).multiplyScalar(K),r.hemi[x]=N,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=y;const j=r.hash;(j.directionalLength!==S||j.pointLength!==E||j.spotLength!==R||j.rectAreaLength!==M||j.hemiLength!==x||j.numDirectionalShadows!==P||j.numPointShadows!==O||j.numSpotShadows!==L||j.numSpotMaps!==z||j.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=M,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=L+z-B,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=I,j.directionalLength=S,j.pointLength=E,j.spotLength=R,j.rectAreaLength=M,j.hemiLength=x,j.numDirectionalShadows=P,j.numPointShadows=O,j.numSpotShadows=L,j.numSpotMaps=z,j.numLightProbes=I,r.version=yA++)}function m(p,_){let g=0,y=0,S=0,E=0,R=0;const M=_.matrixWorldInverse;for(let x=0,P=p.length;x<P;x++){const O=p[x];if(O.isDirectionalLight){const L=r.directional[g];L.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),g++}else if(O.isSpotLight){const L=r.spot[S];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),S++}else if(O.isRectAreaLight){const L=r.rectArea[E];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),h.identity(),c.copy(O.matrixWorld),c.premultiply(M),h.extractRotation(c),L.halfWidth.set(O.width*.5,0,0),L.halfHeight.set(0,O.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),E++}else if(O.isPointLight){const L=r.point[y];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),y++}else if(O.isHemisphereLight){const L=r.hemi[R];L.direction.setFromMatrixPosition(O.matrixWorld),L.direction.transformDirection(M),R++}}}return{setup:d,setupView:m,state:r}}function K_(o){const e=new MA(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function bA(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new K_(o),e.set(l,[d])):c>=h.length?(d=new K_(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const EA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TA=`uniform sampler2D shadow_pass;
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
}`,AA=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],wA=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Q_=new nn,nl=new J,Jh=new J;function RA(o,e,i){let r=new rp;const l=new xt,c=new xt,h=new sn,d=new OM,m=new IM,p={},_=i.maxTextureSize,g={[ur]:$n,[$n]:ur,[Xi]:Xi},y=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:EA,fragmentShader:TA}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new bi;E.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Rt(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let x=this.type;this.render=function(B,I,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;B.type===bS&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Yc);const T=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),Z=o.state;Z.setBlending(Ea),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const K=x!==this.type;K&&I.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(he=>he.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,he=B.length;se<he;se++){const N=B[se],G=N.shadow;if(G===void 0){ut("WebGLShadowMap:",N,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ne=G.getFrameExtents();if(l.multiply(ne),c.copy(G.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ne.x),l.x=c.x*ne.x,G.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ne.y),l.y=c.y*ne.y,G.mapSize.y=c.y)),G.map===null||K===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===il){if(N.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Zi(l.x,l.y,{format:Zs,type:Aa,minFilter:zn,magFilter:zn,generateMipmaps:!1}),G.map.texture.name=N.name+".shadowMap",G.map.depthTexture=new ul(l.x,l.y,qi),G.map.depthTexture.name=N.name+".shadowMapDepth",G.map.depthTexture.format=wa,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=_n,G.map.depthTexture.magFilter=_n}else{N.isPointLight?(G.map=new Rv(l.x),G.map.depthTexture=new NM(l.x,Ki)):(G.map=new Zi(l.x,l.y),G.map.depthTexture=new ul(l.x,l.y,Ki)),G.map.depthTexture.name=N.name+".shadowMap",G.map.depthTexture.format=wa;const be=o.state.buffers.depth.getReversed();this.type===Yc?(G.map.depthTexture.compareFunction=be?np:tp,G.map.depthTexture.minFilter=zn,G.map.depthTexture.magFilter=zn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=_n,G.map.depthTexture.magFilter=_n)}G.camera.updateProjectionMatrix()}const Me=G.map.isWebGLCubeRenderTarget?6:1;for(let be=0;be<Me;be++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,be),o.clear();else{be===0&&(o.setRenderTarget(G.map),o.clear());const U=G.getViewport(be);h.set(c.x*U.x,c.y*U.y,c.x*U.z,c.y*U.w),Z.viewport(h)}if(N.isPointLight){const U=G.camera,ie=G.matrix,_e=N.distance||U.far;_e!==U.far&&(U.far=_e,U.updateProjectionMatrix()),nl.setFromMatrixPosition(N.matrixWorld),U.position.copy(nl),Jh.copy(U.position),Jh.add(AA[be]),U.up.copy(wA[be]),U.lookAt(Jh),U.updateMatrixWorld(),ie.makeTranslation(-nl.x,-nl.y,-nl.z),Q_.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Q_,U.coordinateSystem,U.reversedDepth)}else G.updateMatrices(N);r=G.getFrustum(),L(I,j,G.camera,N,this.type)}G.isPointLightShadow!==!0&&this.type===il&&P(G,j),G.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(T,C,V)};function P(B,I){const j=e.update(R);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Zi(l.x,l.y,{format:Zs,type:Aa})),y.uniforms.shadow_pass.value=B.map.depthTexture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(I,null,j,y,R,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(I,null,j,S,R,null)}function O(B,I,j,T){let C=null;const V=j.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)C=V;else if(C=j.isPointLight===!0?m:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Z=C.uuid,K=I.uuid;let se=p[Z];se===void 0&&(se={},p[Z]=se);let he=se[K];he===void 0&&(he=C.clone(),se[K]=he,I.addEventListener("dispose",z)),C=he}if(C.visible=I.visible,C.wireframe=I.wireframe,T===il?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:g[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,j.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Z=o.properties.get(C);Z.light=j}return C}function L(B,I,j,T,C){if(B.visible===!1)return;if(B.layers.test(I.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===il)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,B.matrixWorld);const K=e.update(B),se=B.material;if(Array.isArray(se)){const he=K.groups;for(let N=0,G=he.length;N<G;N++){const ne=he[N],Me=se[ne.materialIndex];if(Me&&Me.visible){const be=O(B,Me,T,C);B.onBeforeShadow(o,B,I,j,K,be,ne),o.renderBufferDirect(j,null,K,be,B,ne),B.onAfterShadow(o,B,I,j,K,be,ne)}}}else if(se.visible){const he=O(B,se,T,C);B.onBeforeShadow(o,B,I,j,K,he,null),o.renderBufferDirect(j,null,K,he,B,null),B.onAfterShadow(o,B,I,j,K,he,null)}}const Z=B.children;for(let K=0,se=Z.length;K<se;K++)L(Z[K],I,j,T,C)}function z(B){B.target.removeEventListener("dispose",z);for(const j in p){const T=p[j],C=B.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}const CA={[td]:nd,[id]:sd,[ad]:od,[Ys]:rd,[nd]:td,[sd]:id,[od]:ad,[rd]:Ys};function DA(o,e){function i(){let F=!1;const Ee=new sn;let Se=null;const Ce=new sn(0,0,0,0);return{setMask:function(le){Se!==le&&!F&&(o.colorMask(le,le,le,le),Se=le)},setLocked:function(le){F=le},setClear:function(le,de,we,De,$e){$e===!0&&(le*=De,de*=De,we*=De),Ee.set(le,de,we,De),Ce.equals(Ee)===!1&&(o.clearColor(le,de,we,De),Ce.copy(Ee))},reset:function(){F=!1,Se=null,Ce.set(-1,0,0,0)}}}function r(){let F=!1,Ee=!1,Se=null,Ce=null,le=null;return{setReversed:function(de){if(Ee!==de){const we=e.get("EXT_clip_control");de?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Ee=de;const De=le;le=null,this.setClear(De)}},getReversed:function(){return Ee},setTest:function(de){de?ce(o.DEPTH_TEST):Ue(o.DEPTH_TEST)},setMask:function(de){Se!==de&&!F&&(o.depthMask(de),Se=de)},setFunc:function(de){if(Ee&&(de=CA[de]),Ce!==de){switch(de){case td:o.depthFunc(o.NEVER);break;case nd:o.depthFunc(o.ALWAYS);break;case id:o.depthFunc(o.LESS);break;case Ys:o.depthFunc(o.LEQUAL);break;case ad:o.depthFunc(o.EQUAL);break;case rd:o.depthFunc(o.GEQUAL);break;case sd:o.depthFunc(o.GREATER);break;case od:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ce=de}},setLocked:function(de){F=de},setClear:function(de){le!==de&&(Ee&&(de=1-de),o.clearDepth(de),le=de)},reset:function(){F=!1,Se=null,Ce=null,le=null,Ee=!1}}}function l(){let F=!1,Ee=null,Se=null,Ce=null,le=null,de=null,we=null,De=null,$e=null;return{setTest:function(et){F||(et?ce(o.STENCIL_TEST):Ue(o.STENCIL_TEST))},setMask:function(et){Ee!==et&&!F&&(o.stencilMask(et),Ee=et)},setFunc:function(et,Bt,Sn){(Se!==et||Ce!==Bt||le!==Sn)&&(o.stencilFunc(et,Bt,Sn),Se=et,Ce=Bt,le=Sn)},setOp:function(et,Bt,Sn){(de!==et||we!==Bt||De!==Sn)&&(o.stencilOp(et,Bt,Sn),de=et,we=Bt,De=Sn)},setLocked:function(et){F=et},setClear:function(et){$e!==et&&(o.clearStencil(et),$e=et)},reset:function(){F=!1,Ee=null,Se=null,Ce=null,le=null,de=null,we=null,De=null,$e=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},y=new WeakMap,S=[],E=null,R=!1,M=null,x=null,P=null,O=null,L=null,z=null,B=null,I=new Tt(0,0,0),j=0,T=!1,C=null,V=null,Z=null,K=null,se=null;const he=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,G=0;const ne=o.getParameter(o.VERSION);ne.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ne)[1]),N=G>=1):ne.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),N=G>=2);let Me=null,be={};const U=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),_e=new sn().fromArray(U),Ae=new sn().fromArray(ie);function Ie(F,Ee,Se,Ce){const le=new Uint8Array(4),de=o.createTexture();o.bindTexture(F,de),o.texParameteri(F,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(F,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let we=0;we<Se;we++)F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY?o.texImage3D(Ee,0,o.RGBA,1,1,Ce,0,o.RGBA,o.UNSIGNED_BYTE,le):o.texImage2D(Ee+we,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,le);return de}const $={};$[o.TEXTURE_2D]=Ie(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=Ie(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=Ie(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=Ie(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ce(o.DEPTH_TEST),h.setFunc(Ys),ot(!1),$t($g),ce(o.CULL_FACE),nt(Ea);function ce(F){_[F]!==!0&&(o.enable(F),_[F]=!0)}function Ue(F){_[F]!==!1&&(o.disable(F),_[F]=!1)}function He(F,Ee){return g[F]!==Ee?(o.bindFramebuffer(F,Ee),g[F]=Ee,F===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ee),F===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Ge(F,Ee){let Se=S,Ce=!1;if(F){Se=y.get(Ee),Se===void 0&&(Se=[],y.set(Ee,Se));const le=F.textures;if(Se.length!==le.length||Se[0]!==o.COLOR_ATTACHMENT0){for(let de=0,we=le.length;de<we;de++)Se[de]=o.COLOR_ATTACHMENT0+de;Se.length=le.length,Ce=!0}}else Se[0]!==o.BACK&&(Se[0]=o.BACK,Ce=!0);Ce&&o.drawBuffers(Se)}function ht(F){return E!==F?(o.useProgram(F),E=F,!0):!1}const Kt={[zr]:o.FUNC_ADD,[TS]:o.FUNC_SUBTRACT,[AS]:o.FUNC_REVERSE_SUBTRACT};Kt[wS]=o.MIN,Kt[RS]=o.MAX;const _t={[CS]:o.ZERO,[DS]:o.ONE,[US]:o.SRC_COLOR,[$h]:o.SRC_ALPHA,[zS]:o.SRC_ALPHA_SATURATE,[IS]:o.DST_COLOR,[LS]:o.DST_ALPHA,[NS]:o.ONE_MINUS_SRC_COLOR,[ed]:o.ONE_MINUS_SRC_ALPHA,[PS]:o.ONE_MINUS_DST_COLOR,[OS]:o.ONE_MINUS_DST_ALPHA,[BS]:o.CONSTANT_COLOR,[FS]:o.ONE_MINUS_CONSTANT_COLOR,[HS]:o.CONSTANT_ALPHA,[GS]:o.ONE_MINUS_CONSTANT_ALPHA};function nt(F,Ee,Se,Ce,le,de,we,De,$e,et){if(F===Ea){R===!0&&(Ue(o.BLEND),R=!1);return}if(R===!1&&(ce(o.BLEND),R=!0),F!==ES){if(F!==M||et!==T){if((x!==zr||L!==zr)&&(o.blendEquation(o.FUNC_ADD),x=zr,L=zr),et)switch(F){case Xs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case e_:o.blendFunc(o.ONE,o.ONE);break;case t_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case n_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ct("WebGLState: Invalid blending: ",F);break}else switch(F){case Xs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case e_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case t_:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case n_:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",F);break}P=null,O=null,z=null,B=null,I.set(0,0,0),j=0,M=F,T=et}return}le=le||Ee,de=de||Se,we=we||Ce,(Ee!==x||le!==L)&&(o.blendEquationSeparate(Kt[Ee],Kt[le]),x=Ee,L=le),(Se!==P||Ce!==O||de!==z||we!==B)&&(o.blendFuncSeparate(_t[Se],_t[Ce],_t[de],_t[we]),P=Se,O=Ce,z=de,B=we),(De.equals(I)===!1||$e!==j)&&(o.blendColor(De.r,De.g,De.b,$e),I.copy(De),j=$e),M=F,T=!1}function Qe(F,Ee){F.side===Xi?Ue(o.CULL_FACE):ce(o.CULL_FACE);let Se=F.side===$n;Ee&&(Se=!Se),ot(Se),F.blending===Xs&&F.transparent===!1?nt(Ea):nt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),h.setFunc(F.depthFunc),h.setTest(F.depthTest),h.setMask(F.depthWrite),c.setMask(F.colorWrite);const Ce=F.stencilWrite;d.setTest(Ce),Ce&&(d.setMask(F.stencilWriteMask),d.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),d.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),jt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ce(o.SAMPLE_ALPHA_TO_COVERAGE):Ue(o.SAMPLE_ALPHA_TO_COVERAGE)}function ot(F){C!==F&&(F?o.frontFace(o.CW):o.frontFace(o.CCW),C=F)}function $t(F){F!==SS?(ce(o.CULL_FACE),F!==V&&(F===$g?o.cullFace(o.BACK):F===MS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ue(o.CULL_FACE),V=F}function k(F){F!==Z&&(N&&o.lineWidth(F),Z=F)}function jt(F,Ee,Se){F?(ce(o.POLYGON_OFFSET_FILL),(K!==Ee||se!==Se)&&(o.polygonOffset(Ee,Se),K=Ee,se=Se)):Ue(o.POLYGON_OFFSET_FILL)}function Mt(F){F?ce(o.SCISSOR_TEST):Ue(o.SCISSOR_TEST)}function Ut(F){F===void 0&&(F=o.TEXTURE0+he-1),Me!==F&&(o.activeTexture(F),Me=F)}function qe(F,Ee,Se){Se===void 0&&(Me===null?Se=o.TEXTURE0+he-1:Se=Me);let Ce=be[Se];Ce===void 0&&(Ce={type:void 0,texture:void 0},be[Se]=Ce),(Ce.type!==F||Ce.texture!==Ee)&&(Me!==Se&&(o.activeTexture(Se),Me=Se),o.bindTexture(F,Ee||$[F]),Ce.type=F,Ce.texture=Ee)}function D(){const F=be[Me];F!==void 0&&F.type!==void 0&&(o.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(F){Ct("WebGLState:",F)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(F){Ct("WebGLState:",F)}}function pe(){try{o.texSubImage2D(...arguments)}catch(F){Ct("WebGLState:",F)}}function ye(){try{o.texSubImage3D(...arguments)}catch(F){Ct("WebGLState:",F)}}function ue(){try{o.compressedTexSubImage2D(...arguments)}catch(F){Ct("WebGLState:",F)}}function Ye(){try{o.compressedTexSubImage3D(...arguments)}catch(F){Ct("WebGLState:",F)}}function Ne(){try{o.texStorage2D(...arguments)}catch(F){Ct("WebGLState:",F)}}function We(){try{o.texStorage3D(...arguments)}catch(F){Ct("WebGLState:",F)}}function at(){try{o.texImage2D(...arguments)}catch(F){Ct("WebGLState:",F)}}function Te(){try{o.texImage3D(...arguments)}catch(F){Ct("WebGLState:",F)}}function Re(F){_e.equals(F)===!1&&(o.scissor(F.x,F.y,F.z,F.w),_e.copy(F))}function Fe(F){Ae.equals(F)===!1&&(o.viewport(F.x,F.y,F.z,F.w),Ae.copy(F))}function Pe(F,Ee){let Se=p.get(Ee);Se===void 0&&(Se=new WeakMap,p.set(Ee,Se));let Ce=Se.get(F);Ce===void 0&&(Ce=o.getUniformBlockIndex(Ee,F.name),Se.set(F,Ce))}function Le(F,Ee){const Ce=p.get(Ee).get(F);m.get(Ee)!==Ce&&(o.uniformBlockBinding(Ee,Ce,F.__bindingPointIndex),m.set(Ee,Ce))}function ft(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},Me=null,be={},g={},y=new WeakMap,S=[],E=null,R=!1,M=null,x=null,P=null,O=null,L=null,z=null,B=null,I=new Tt(0,0,0),j=0,T=!1,C=null,V=null,Z=null,K=null,se=null,_e.set(0,0,o.canvas.width,o.canvas.height),Ae.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ce,disable:Ue,bindFramebuffer:He,drawBuffers:Ge,useProgram:ht,setBlending:nt,setMaterial:Qe,setFlipSided:ot,setCullFace:$t,setLineWidth:k,setPolygonOffset:jt,setScissorTest:Mt,activeTexture:Ut,bindTexture:qe,unbindTexture:D,compressedTexImage2D:b,compressedTexImage3D:W,texImage2D:at,texImage3D:Te,updateUBOMapping:Pe,uniformBlockBinding:Le,texStorage2D:Ne,texStorage3D:We,texSubImage2D:pe,texSubImage3D:ye,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ye,scissor:Re,viewport:Fe,reset:ft}}function UA(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new xt,_=new WeakMap;let g;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,b){return S?new OffscreenCanvas(D,b):ll("canvas")}function R(D,b,W){let pe=1;const ye=qe(D);if((ye.width>W||ye.height>W)&&(pe=W/Math.max(ye.width,ye.height)),pe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ue=Math.floor(pe*ye.width),Ye=Math.floor(pe*ye.height);g===void 0&&(g=E(ue,Ye));const Ne=b?E(ue,Ye):g;return Ne.width=ue,Ne.height=Ye,Ne.getContext("2d").drawImage(D,0,0,ue,Ye),ut("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+ue+"x"+Ye+")."),Ne}else return"data"in D&&ut("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),D;return D}function M(D){return D.generateMipmaps}function x(D){o.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(D,b,W,pe,ye=!1){if(D!==null){if(o[D]!==void 0)return o[D];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ue=b;if(b===o.RED&&(W===o.FLOAT&&(ue=o.R32F),W===o.HALF_FLOAT&&(ue=o.R16F),W===o.UNSIGNED_BYTE&&(ue=o.R8)),b===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(ue=o.R8UI),W===o.UNSIGNED_SHORT&&(ue=o.R16UI),W===o.UNSIGNED_INT&&(ue=o.R32UI),W===o.BYTE&&(ue=o.R8I),W===o.SHORT&&(ue=o.R16I),W===o.INT&&(ue=o.R32I)),b===o.RG&&(W===o.FLOAT&&(ue=o.RG32F),W===o.HALF_FLOAT&&(ue=o.RG16F),W===o.UNSIGNED_BYTE&&(ue=o.RG8)),b===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(ue=o.RG8UI),W===o.UNSIGNED_SHORT&&(ue=o.RG16UI),W===o.UNSIGNED_INT&&(ue=o.RG32UI),W===o.BYTE&&(ue=o.RG8I),W===o.SHORT&&(ue=o.RG16I),W===o.INT&&(ue=o.RG32I)),b===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),W===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),W===o.UNSIGNED_INT&&(ue=o.RGB32UI),W===o.BYTE&&(ue=o.RGB8I),W===o.SHORT&&(ue=o.RGB16I),W===o.INT&&(ue=o.RGB32I)),b===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),W===o.UNSIGNED_INT&&(ue=o.RGBA32UI),W===o.BYTE&&(ue=o.RGBA8I),W===o.SHORT&&(ue=o.RGBA16I),W===o.INT&&(ue=o.RGBA32I)),b===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(ue=o.R11F_G11F_B10F)),b===o.RGBA){const Ye=ye?$c:Dt.getTransfer(pe);W===o.FLOAT&&(ue=o.RGBA32F),W===o.HALF_FLOAT&&(ue=o.RGBA16F),W===o.UNSIGNED_BYTE&&(ue=Ye===Vt?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function L(D,b){let W;return D?b===null||b===Ki||b===ol?W=o.DEPTH24_STENCIL8:b===qi?W=o.DEPTH32F_STENCIL8:b===sl&&(W=o.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ki||b===ol?W=o.DEPTH_COMPONENT24:b===qi?W=o.DEPTH_COMPONENT32F:b===sl&&(W=o.DEPTH_COMPONENT16),W}function z(D,b){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==_n&&D.minFilter!==zn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function B(D){const b=D.target;b.removeEventListener("dispose",B),j(b),b.isVideoTexture&&_.delete(b)}function I(D){const b=D.target;b.removeEventListener("dispose",I),C(b)}function j(D){const b=r.get(D);if(b.__webglInit===void 0)return;const W=D.source,pe=y.get(W);if(pe){const ye=pe[b.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&T(D),Object.keys(pe).length===0&&y.delete(W)}r.remove(D)}function T(D){const b=r.get(D);o.deleteTexture(b.__webglTexture);const W=D.source,pe=y.get(W);delete pe[b.__cacheKey],h.memory.textures--}function C(D){const b=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(b.__webglFramebuffer[pe]))for(let ye=0;ye<b.__webglFramebuffer[pe].length;ye++)o.deleteFramebuffer(b.__webglFramebuffer[pe][ye]);else o.deleteFramebuffer(b.__webglFramebuffer[pe]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[pe])}else{if(Array.isArray(b.__webglFramebuffer))for(let pe=0;pe<b.__webglFramebuffer.length;pe++)o.deleteFramebuffer(b.__webglFramebuffer[pe]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pe=0;pe<b.__webglColorRenderbuffer.length;pe++)b.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[pe]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=D.textures;for(let pe=0,ye=W.length;pe<ye;pe++){const ue=r.get(W[pe]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),h.memory.textures--),r.remove(W[pe])}r.remove(D)}let V=0;function Z(){V=0}function K(){const D=V;return D>=l.maxTextures&&ut("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),V+=1,D}function se(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function he(D,b){const W=r.get(D);if(D.isVideoTexture&&Mt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){const pe=D.image;if(pe===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{$(W,D,b);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+b)}function N(D,b){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){$(W,D,b);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+b)}function G(D,b){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){$(W,D,b);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+b)}function ne(D,b){const W=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){ce(W,D,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+b)}const Me={[Ws]:o.REPEAT,[ba]:o.CLAMP_TO_EDGE,[ud]:o.MIRRORED_REPEAT},be={[_n]:o.NEAREST,[XS]:o.NEAREST_MIPMAP_NEAREST,[Ec]:o.NEAREST_MIPMAP_LINEAR,[zn]:o.LINEAR,[xh]:o.LINEAR_MIPMAP_NEAREST,[Fr]:o.LINEAR_MIPMAP_LINEAR},U={[YS]:o.NEVER,[JS]:o.ALWAYS,[jS]:o.LESS,[tp]:o.LEQUAL,[ZS]:o.EQUAL,[np]:o.GEQUAL,[KS]:o.GREATER,[QS]:o.NOTEQUAL};function ie(D,b){if(b.type===qi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===zn||b.magFilter===xh||b.magFilter===Ec||b.magFilter===Fr||b.minFilter===zn||b.minFilter===xh||b.minFilter===Ec||b.minFilter===Fr)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Me[b.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Me[b.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Me[b.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,be[b.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,be[b.minFilter]),b.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,U[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===_n||b.minFilter!==Ec&&b.minFilter!==Fr||b.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function _e(D,b){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",B));const pe=b.source;let ye=y.get(pe);ye===void 0&&(ye={},y.set(pe,ye));const ue=se(b);if(ue!==D.__cacheKey){ye[ue]===void 0&&(ye[ue]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,W=!0),ye[ue].usedTimes++;const Ye=ye[D.__cacheKey];Ye!==void 0&&(ye[D.__cacheKey].usedTimes--,Ye.usedTimes===0&&T(b)),D.__cacheKey=ue,D.__webglTexture=ye[ue].texture}return W}function Ae(D,b,W){return Math.floor(Math.floor(D/W)/b)}function Ie(D,b,W,pe){const ue=D.updateRanges;if(ue.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,W,pe,b.data);else{ue.sort((Te,Re)=>Te.start-Re.start);let Ye=0;for(let Te=1;Te<ue.length;Te++){const Re=ue[Ye],Fe=ue[Te],Pe=Re.start+Re.count,Le=Ae(Fe.start,b.width,4),ft=Ae(Re.start,b.width,4);Fe.start<=Pe+1&&Le===ft&&Ae(Fe.start+Fe.count-1,b.width,4)===Le?Re.count=Math.max(Re.count,Fe.start+Fe.count-Re.start):(++Ye,ue[Ye]=Fe)}ue.length=Ye+1;const Ne=o.getParameter(o.UNPACK_ROW_LENGTH),We=o.getParameter(o.UNPACK_SKIP_PIXELS),at=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Te=0,Re=ue.length;Te<Re;Te++){const Fe=ue[Te],Pe=Math.floor(Fe.start/4),Le=Math.ceil(Fe.count/4),ft=Pe%b.width,F=Math.floor(Pe/b.width),Ee=Le,Se=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ft),o.pixelStorei(o.UNPACK_SKIP_ROWS,F),i.texSubImage2D(o.TEXTURE_2D,0,ft,F,Ee,Se,W,pe,b.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ne),o.pixelStorei(o.UNPACK_SKIP_PIXELS,We),o.pixelStorei(o.UNPACK_SKIP_ROWS,at)}}function $(D,b,W){let pe=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pe=o.TEXTURE_3D);const ye=_e(D,b),ue=b.source;i.bindTexture(pe,D.__webglTexture,o.TEXTURE0+W);const Ye=r.get(ue);if(ue.version!==Ye.__version||ye===!0){i.activeTexture(o.TEXTURE0+W);const Ne=Dt.getPrimaries(Dt.workingColorSpace),We=b.colorSpace===or?null:Dt.getPrimaries(b.colorSpace),at=b.colorSpace===or||Ne===We?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Te=R(b.image,!1,l.maxTextureSize);Te=Ut(b,Te);const Re=c.convert(b.format,b.colorSpace),Fe=c.convert(b.type);let Pe=O(b.internalFormat,Re,Fe,b.colorSpace,b.isVideoTexture);ie(pe,b);let Le;const ft=b.mipmaps,F=b.isVideoTexture!==!0,Ee=Ye.__version===void 0||ye===!0,Se=ue.dataReady,Ce=z(b,Te);if(b.isDepthTexture)Pe=L(b.format===Hr,b.type),Ee&&(F?i.texStorage2D(o.TEXTURE_2D,1,Pe,Te.width,Te.height):i.texImage2D(o.TEXTURE_2D,0,Pe,Te.width,Te.height,0,Re,Fe,null));else if(b.isDataTexture)if(ft.length>0){F&&Ee&&i.texStorage2D(o.TEXTURE_2D,Ce,Pe,ft[0].width,ft[0].height);for(let le=0,de=ft.length;le<de;le++)Le=ft[le],F?Se&&i.texSubImage2D(o.TEXTURE_2D,le,0,0,Le.width,Le.height,Re,Fe,Le.data):i.texImage2D(o.TEXTURE_2D,le,Pe,Le.width,Le.height,0,Re,Fe,Le.data);b.generateMipmaps=!1}else F?(Ee&&i.texStorage2D(o.TEXTURE_2D,Ce,Pe,Te.width,Te.height),Se&&Ie(b,Te,Re,Fe)):i.texImage2D(o.TEXTURE_2D,0,Pe,Te.width,Te.height,0,Re,Fe,Te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){F&&Ee&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ce,Pe,ft[0].width,ft[0].height,Te.depth);for(let le=0,de=ft.length;le<de;le++)if(Le=ft[le],b.format!==Oi)if(Re!==null)if(F){if(Se)if(b.layerUpdates.size>0){const we=R_(Le.width,Le.height,b.format,b.type);for(const De of b.layerUpdates){const $e=Le.data.subarray(De*we/Le.data.BYTES_PER_ELEMENT,(De+1)*we/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,le,0,0,De,Le.width,Le.height,1,Re,$e)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,le,0,0,0,Le.width,Le.height,Te.depth,Re,Le.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,le,Pe,Le.width,Le.height,Te.depth,0,Le.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?Se&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,le,0,0,0,Le.width,Le.height,Te.depth,Re,Fe,Le.data):i.texImage3D(o.TEXTURE_2D_ARRAY,le,Pe,Le.width,Le.height,Te.depth,0,Re,Fe,Le.data)}else{F&&Ee&&i.texStorage2D(o.TEXTURE_2D,Ce,Pe,ft[0].width,ft[0].height);for(let le=0,de=ft.length;le<de;le++)Le=ft[le],b.format!==Oi?Re!==null?F?Se&&i.compressedTexSubImage2D(o.TEXTURE_2D,le,0,0,Le.width,Le.height,Re,Le.data):i.compressedTexImage2D(o.TEXTURE_2D,le,Pe,Le.width,Le.height,0,Le.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?Se&&i.texSubImage2D(o.TEXTURE_2D,le,0,0,Le.width,Le.height,Re,Fe,Le.data):i.texImage2D(o.TEXTURE_2D,le,Pe,Le.width,Le.height,0,Re,Fe,Le.data)}else if(b.isDataArrayTexture)if(F){if(Ee&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ce,Pe,Te.width,Te.height,Te.depth),Se)if(b.layerUpdates.size>0){const le=R_(Te.width,Te.height,b.format,b.type);for(const de of b.layerUpdates){const we=Te.data.subarray(de*le/Te.data.BYTES_PER_ELEMENT,(de+1)*le/Te.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,de,Te.width,Te.height,1,Re,Fe,we)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Re,Fe,Te.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pe,Te.width,Te.height,Te.depth,0,Re,Fe,Te.data);else if(b.isData3DTexture)F?(Ee&&i.texStorage3D(o.TEXTURE_3D,Ce,Pe,Te.width,Te.height,Te.depth),Se&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Re,Fe,Te.data)):i.texImage3D(o.TEXTURE_3D,0,Pe,Te.width,Te.height,Te.depth,0,Re,Fe,Te.data);else if(b.isFramebufferTexture){if(Ee)if(F)i.texStorage2D(o.TEXTURE_2D,Ce,Pe,Te.width,Te.height);else{let le=Te.width,de=Te.height;for(let we=0;we<Ce;we++)i.texImage2D(o.TEXTURE_2D,we,Pe,le,de,0,Re,Fe,null),le>>=1,de>>=1}}else if(ft.length>0){if(F&&Ee){const le=qe(ft[0]);i.texStorage2D(o.TEXTURE_2D,Ce,Pe,le.width,le.height)}for(let le=0,de=ft.length;le<de;le++)Le=ft[le],F?Se&&i.texSubImage2D(o.TEXTURE_2D,le,0,0,Re,Fe,Le):i.texImage2D(o.TEXTURE_2D,le,Pe,Re,Fe,Le);b.generateMipmaps=!1}else if(F){if(Ee){const le=qe(Te);i.texStorage2D(o.TEXTURE_2D,Ce,Pe,le.width,le.height)}Se&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Re,Fe,Te)}else i.texImage2D(o.TEXTURE_2D,0,Pe,Re,Fe,Te);M(b)&&x(pe),Ye.__version=ue.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ce(D,b,W){if(b.image.length!==6)return;const pe=_e(D,b),ye=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+W);const ue=r.get(ye);if(ye.version!==ue.__version||pe===!0){i.activeTexture(o.TEXTURE0+W);const Ye=Dt.getPrimaries(Dt.workingColorSpace),Ne=b.colorSpace===or?null:Dt.getPrimaries(b.colorSpace),We=b.colorSpace===or||Ye===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const at=b.isCompressedTexture||b.image[0].isCompressedTexture,Te=b.image[0]&&b.image[0].isDataTexture,Re=[];for(let de=0;de<6;de++)!at&&!Te?Re[de]=R(b.image[de],!0,l.maxCubemapSize):Re[de]=Te?b.image[de].image:b.image[de],Re[de]=Ut(b,Re[de]);const Fe=Re[0],Pe=c.convert(b.format,b.colorSpace),Le=c.convert(b.type),ft=O(b.internalFormat,Pe,Le,b.colorSpace),F=b.isVideoTexture!==!0,Ee=ue.__version===void 0||pe===!0,Se=ye.dataReady;let Ce=z(b,Fe);ie(o.TEXTURE_CUBE_MAP,b);let le;if(at){F&&Ee&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ce,ft,Fe.width,Fe.height);for(let de=0;de<6;de++){le=Re[de].mipmaps;for(let we=0;we<le.length;we++){const De=le[we];b.format!==Oi?Pe!==null?F?Se&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,we,0,0,De.width,De.height,Pe,De.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,we,ft,De.width,De.height,0,De.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Se&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,we,0,0,De.width,De.height,Pe,Le,De.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,we,ft,De.width,De.height,0,Pe,Le,De.data)}}}else{if(le=b.mipmaps,F&&Ee){le.length>0&&Ce++;const de=qe(Re[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ce,ft,de.width,de.height)}for(let de=0;de<6;de++)if(Te){F?Se&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Re[de].width,Re[de].height,Pe,Le,Re[de].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,Re[de].width,Re[de].height,0,Pe,Le,Re[de].data);for(let we=0;we<le.length;we++){const $e=le[we].image[de].image;F?Se&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,we+1,0,0,$e.width,$e.height,Pe,Le,$e.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,we+1,ft,$e.width,$e.height,0,Pe,Le,$e.data)}}else{F?Se&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Pe,Le,Re[de]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,Pe,Le,Re[de]);for(let we=0;we<le.length;we++){const De=le[we];F?Se&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,we+1,0,0,Pe,Le,De.image[de]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,we+1,ft,Pe,Le,De.image[de])}}}M(b)&&x(o.TEXTURE_CUBE_MAP),ue.__version=ye.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Ue(D,b,W,pe,ye,ue){const Ye=c.convert(W.format,W.colorSpace),Ne=c.convert(W.type),We=O(W.internalFormat,Ye,Ne,W.colorSpace),at=r.get(b),Te=r.get(W);if(Te.__renderTarget=b,!at.__hasExternalTextures){const Re=Math.max(1,b.width>>ue),Fe=Math.max(1,b.height>>ue);ye===o.TEXTURE_3D||ye===o.TEXTURE_2D_ARRAY?i.texImage3D(ye,ue,We,Re,Fe,b.depth,0,Ye,Ne,null):i.texImage2D(ye,ue,We,Re,Fe,0,Ye,Ne,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),jt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ye,Te.__webglTexture,0,k(b)):(ye===o.TEXTURE_2D||ye>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ye,Te.__webglTexture,ue),i.bindFramebuffer(o.FRAMEBUFFER,null)}function He(D,b,W){if(o.bindRenderbuffer(o.RENDERBUFFER,D),b.depthBuffer){const pe=b.depthTexture,ye=pe&&pe.isDepthTexture?pe.type:null,ue=L(b.stencilBuffer,ye),Ye=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;jt(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,k(b),ue,b.width,b.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,k(b),ue,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ue,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ye,o.RENDERBUFFER,D)}else{const pe=b.textures;for(let ye=0;ye<pe.length;ye++){const ue=pe[ye],Ye=c.convert(ue.format,ue.colorSpace),Ne=c.convert(ue.type),We=O(ue.internalFormat,Ye,Ne,ue.colorSpace);jt(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,k(b),We,b.width,b.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,k(b),We,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,We,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ge(D,b,W){const pe=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=r.get(b.depthTexture);if(ye.__renderTarget=b,(!ye.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),pe){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),ye.__webglTexture===void 0){ye.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,ye.__webglTexture),ie(o.TEXTURE_CUBE_MAP,b.depthTexture);const at=c.convert(b.depthTexture.format),Te=c.convert(b.depthTexture.type);let Re;b.depthTexture.format===wa?Re=o.DEPTH_COMPONENT24:b.depthTexture.format===Hr&&(Re=o.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Re,b.width,b.height,0,at,Te,null)}}else he(b.depthTexture,0);const ue=ye.__webglTexture,Ye=k(b),Ne=pe?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,We=b.depthTexture.format===Hr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(b.depthTexture.format===wa)jt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,We,Ne,ue,0,Ye):o.framebufferTexture2D(o.FRAMEBUFFER,We,Ne,ue,0);else if(b.depthTexture.format===Hr)jt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,We,Ne,ue,0,Ye):o.framebufferTexture2D(o.FRAMEBUFFER,We,Ne,ue,0);else throw new Error("Unknown depthTexture format")}function ht(D){const b=r.get(D),W=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const pe=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pe){const ye=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pe.removeEventListener("dispose",ye)};pe.addEventListener("dispose",ye),b.__depthDisposeCallback=ye}b.__boundDepthTexture=pe}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let pe=0;pe<6;pe++)Ge(b.__webglFramebuffer[pe],D,pe);else{const pe=D.texture.mipmaps;pe&&pe.length>0?Ge(b.__webglFramebuffer[0],D,0):Ge(b.__webglFramebuffer,D,0)}else if(W){b.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[pe]),b.__webglDepthbuffer[pe]===void 0)b.__webglDepthbuffer[pe]=o.createRenderbuffer(),He(b.__webglDepthbuffer[pe],D,!1);else{const ye=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,ye,o.RENDERBUFFER,ue)}}else{const pe=D.texture.mipmaps;if(pe&&pe.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),He(b.__webglDepthbuffer,D,!1);else{const ye=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,ye,o.RENDERBUFFER,ue)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Kt(D,b,W){const pe=r.get(D);b!==void 0&&Ue(pe.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&ht(D)}function _t(D){const b=D.texture,W=r.get(D),pe=r.get(b);D.addEventListener("dispose",I);const ye=D.textures,ue=D.isWebGLCubeRenderTarget===!0,Ye=ye.length>1;if(Ye||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=b.version,h.memory.textures++),ue){W.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[Ne]=[];for(let We=0;We<b.mipmaps.length;We++)W.__webglFramebuffer[Ne][We]=o.createFramebuffer()}else W.__webglFramebuffer[Ne]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ne=0;Ne<b.mipmaps.length;Ne++)W.__webglFramebuffer[Ne]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(Ye)for(let Ne=0,We=ye.length;Ne<We;Ne++){const at=r.get(ye[Ne]);at.__webglTexture===void 0&&(at.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&jt(D)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ne=0;Ne<ye.length;Ne++){const We=ye[Ne];W.__webglColorRenderbuffer[Ne]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Ne]);const at=c.convert(We.format,We.colorSpace),Te=c.convert(We.type),Re=O(We.internalFormat,at,Te,We.colorSpace,D.isXRRenderTarget===!0),Fe=k(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Fe,Re,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,W.__webglColorRenderbuffer[Ne])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),He(W.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){i.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ie(o.TEXTURE_CUBE_MAP,b);for(let Ne=0;Ne<6;Ne++)if(b.mipmaps&&b.mipmaps.length>0)for(let We=0;We<b.mipmaps.length;We++)Ue(W.__webglFramebuffer[Ne][We],D,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,We);else Ue(W.__webglFramebuffer[Ne],D,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);M(b)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ye){for(let Ne=0,We=ye.length;Ne<We;Ne++){const at=ye[Ne],Te=r.get(at);let Re=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Re=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Re,Te.__webglTexture),ie(Re,at),Ue(W.__webglFramebuffer,D,at,o.COLOR_ATTACHMENT0+Ne,Re,0),M(at)&&x(Re)}i.unbindTexture()}else{let Ne=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ne=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ne,pe.__webglTexture),ie(Ne,b),b.mipmaps&&b.mipmaps.length>0)for(let We=0;We<b.mipmaps.length;We++)Ue(W.__webglFramebuffer[We],D,b,o.COLOR_ATTACHMENT0,Ne,We);else Ue(W.__webglFramebuffer,D,b,o.COLOR_ATTACHMENT0,Ne,0);M(b)&&x(Ne),i.unbindTexture()}D.depthBuffer&&ht(D)}function nt(D){const b=D.textures;for(let W=0,pe=b.length;W<pe;W++){const ye=b[W];if(M(ye)){const ue=P(D),Ye=r.get(ye).__webglTexture;i.bindTexture(ue,Ye),x(ue),i.unbindTexture()}}}const Qe=[],ot=[];function $t(D){if(D.samples>0){if(jt(D)===!1){const b=D.textures,W=D.width,pe=D.height;let ye=o.COLOR_BUFFER_BIT;const ue=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ye=r.get(D),Ne=b.length>1;if(Ne)for(let at=0;at<b.length;at++)i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+at,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+at,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const We=D.texture.mipmaps;We&&We.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let at=0;at<b.length;at++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ye|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ye|=o.STENCIL_BUFFER_BIT)),Ne){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ye.__webglColorRenderbuffer[at]);const Te=r.get(b[at]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Te,0)}o.blitFramebuffer(0,0,W,pe,0,0,W,pe,ye,o.NEAREST),m===!0&&(Qe.length=0,ot.length=0,Qe.push(o.COLOR_ATTACHMENT0+at),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Qe.push(ue),ot.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ot)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Qe))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ne)for(let at=0;at<b.length;at++){i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+at,o.RENDERBUFFER,Ye.__webglColorRenderbuffer[at]);const Te=r.get(b[at]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+at,o.TEXTURE_2D,Te,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const b=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function k(D){return Math.min(l.maxSamples,D.samples)}function jt(D){const b=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Mt(D){const b=h.render.frame;_.get(D)!==b&&(_.set(D,b),D.update())}function Ut(D,b){const W=D.colorSpace,pe=D.format,ye=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Ks&&W!==or&&(Dt.getTransfer(W)===Vt?(pe!==Oi||ye!==ci)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",W)),b}function qe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=K,this.resetTextureUnits=Z,this.setTexture2D=he,this.setTexture2DArray=N,this.setTexture3D=G,this.setTextureCube=ne,this.rebindTextures=Kt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function NA(o,e){function i(r,l=or){let c;const h=Dt.getTransfer(l);if(r===ci)return o.UNSIGNED_BYTE;if(r===Kd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Qd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===dv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===pv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===fv)return o.BYTE;if(r===hv)return o.SHORT;if(r===sl)return o.UNSIGNED_SHORT;if(r===Zd)return o.INT;if(r===Ki)return o.UNSIGNED_INT;if(r===qi)return o.FLOAT;if(r===Aa)return o.HALF_FLOAT;if(r===mv)return o.ALPHA;if(r===gv)return o.RGB;if(r===Oi)return o.RGBA;if(r===wa)return o.DEPTH_COMPONENT;if(r===Hr)return o.DEPTH_STENCIL;if(r===_v)return o.RED;if(r===Jd)return o.RED_INTEGER;if(r===Zs)return o.RG;if(r===$d)return o.RG_INTEGER;if(r===ep)return o.RGBA_INTEGER;if(r===jc||r===Zc||r===Kc||r===Qc)if(h===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fd||r===hd||r===dd||r===pd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===fd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===md||r===gd||r===_d||r===vd||r===xd||r===yd||r===Sd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===md||r===gd)return h===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===_d)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===vd)return c.COMPRESSED_R11_EAC;if(r===xd)return c.COMPRESSED_SIGNED_R11_EAC;if(r===yd)return c.COMPRESSED_RG11_EAC;if(r===Sd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Md||r===bd||r===Ed||r===Td||r===Ad||r===wd||r===Rd||r===Cd||r===Dd||r===Ud||r===Nd||r===Ld||r===Od||r===Id)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Md)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ed)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Td)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ad)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ud)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ld)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Od)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Id)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Pd||r===zd||r===Bd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Pd)return h===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Fd||r===Hd||r===Gd||r===Vd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Fd)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Hd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ol?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const LA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OA=`
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

}`;class IA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Dv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ji({vertexShader:LA,fragmentShader:OA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Rt(new kr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PA extends Js{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,y=null,S=null,E=null;const R=typeof XRWebGLBinding<"u",M=new IA,x={},P=i.getContextAttributes();let O=null,L=null;const z=[],B=[],I=new xt;let j=null;const T=new Jn;T.viewport=new sn;const C=new Jn;C.viewport=new sn;const V=[T,C],Z=new qM;let K=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ce=z[$];return ce===void 0&&(ce=new Vh,z[$]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function($){let ce=z[$];return ce===void 0&&(ce=new Vh,z[$]=ce),ce.getGripSpace()},this.getHand=function($){let ce=z[$];return ce===void 0&&(ce=new Vh,z[$]=ce),ce.getHandSpace()};function he($){const ce=B.indexOf($.inputSource);if(ce===-1)return;const Ue=z[ce];Ue!==void 0&&(Ue.update($.inputSource,$.frame,p||h),Ue.dispatchEvent({type:$.type,data:$.inputSource}))}function N(){l.removeEventListener("select",he),l.removeEventListener("selectstart",he),l.removeEventListener("selectend",he),l.removeEventListener("squeeze",he),l.removeEventListener("squeezestart",he),l.removeEventListener("squeezeend",he),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",G);for(let $=0;$<z.length;$++){const ce=B[$];ce!==null&&(B[$]=null,z[$].disconnect(ce))}K=null,se=null,M.reset();for(const $ in x)delete x[$];e.setRenderTarget(O),S=null,y=null,g=null,l=null,L=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(j),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,r.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",he),l.addEventListener("selectstart",he),l.addEventListener("selectend",he),l.addEventListener("squeeze",he),l.addEventListener("squeezestart",he),l.addEventListener("squeezeend",he),l.addEventListener("end",N),l.addEventListener("inputsourceschange",G),P.xrCompatible!==!0&&await i.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(I),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,He=null,Ge=null;P.depth&&(Ge=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ue=P.stencil?Hr:wa,He=P.stencil?ol:Ki);const ht={colorFormat:i.RGBA8,depthFormat:Ge,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer(ht),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),L=new Zi(y.textureWidth,y.textureHeight,{format:Oi,type:ci,depthTexture:new ul(y.textureWidth,y.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Ue={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Ue),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Zi(S.framebufferWidth,S.framebufferHeight,{format:Oi,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ie.setContext(l),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G($){for(let ce=0;ce<$.removed.length;ce++){const Ue=$.removed[ce],He=B.indexOf(Ue);He>=0&&(B[He]=null,z[He].disconnect(Ue))}for(let ce=0;ce<$.added.length;ce++){const Ue=$.added[ce];let He=B.indexOf(Ue);if(He===-1){for(let ht=0;ht<z.length;ht++)if(ht>=B.length){B.push(Ue),He=ht;break}else if(B[ht]===null){B[ht]=Ue,He=ht;break}if(He===-1)break}const Ge=z[He];Ge&&Ge.connect(Ue)}}const ne=new J,Me=new J;function be($,ce,Ue){ne.setFromMatrixPosition(ce.matrixWorld),Me.setFromMatrixPosition(Ue.matrixWorld);const He=ne.distanceTo(Me),Ge=ce.projectionMatrix.elements,ht=Ue.projectionMatrix.elements,Kt=Ge[14]/(Ge[10]-1),_t=Ge[14]/(Ge[10]+1),nt=(Ge[9]+1)/Ge[5],Qe=(Ge[9]-1)/Ge[5],ot=(Ge[8]-1)/Ge[0],$t=(ht[8]+1)/ht[0],k=Kt*ot,jt=Kt*$t,Mt=He/(-ot+$t),Ut=Mt*-ot;if(ce.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ut),$.translateZ(Mt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ge[10]===-1)$.projectionMatrix.copy(ce.projectionMatrix),$.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const qe=Kt+Mt,D=_t+Mt,b=k-Ut,W=jt+(He-Ut),pe=nt*_t/D*qe,ye=Qe*_t/D*qe;$.projectionMatrix.makePerspective(b,W,pe,ye,qe,D),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function U($,ce){ce===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ce.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let ce=$.near,Ue=$.far;M.texture!==null&&(M.depthNear>0&&(ce=M.depthNear),M.depthFar>0&&(Ue=M.depthFar)),Z.near=C.near=T.near=ce,Z.far=C.far=T.far=Ue,(K!==Z.near||se!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),K=Z.near,se=Z.far),Z.layers.mask=$.layers.mask|6,T.layers.mask=Z.layers.mask&3,C.layers.mask=Z.layers.mask&5;const He=$.parent,Ge=Z.cameras;U(Z,He);for(let ht=0;ht<Ge.length;ht++)U(Ge[ht],He);Ge.length===2?be(Z,T,C):Z.projectionMatrix.copy(T.projectionMatrix),ie($,Z,He)};function ie($,ce,Ue){Ue===null?$.matrix.copy(ce.matrixWorld):($.matrix.copy(Ue.matrixWorld),$.matrix.invert(),$.matrix.multiply(ce.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ce.projectionMatrix),$.projectionMatrixInverse.copy(ce.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=nu*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function($){m=$,y!==null&&(y.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Z)},this.getCameraTexture=function($){return x[$]};let _e=null;function Ae($,ce){if(_=ce.getViewerPose(p||h),E=ce,_!==null){const Ue=_.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let He=!1;Ue.length!==Z.cameras.length&&(Z.cameras.length=0,He=!0);for(let _t=0;_t<Ue.length;_t++){const nt=Ue[_t];let Qe=null;if(S!==null)Qe=S.getViewport(nt);else{const $t=g.getViewSubImage(y,nt);Qe=$t.viewport,_t===0&&(e.setRenderTargetTextures(L,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(L))}let ot=V[_t];ot===void 0&&(ot=new Jn,ot.layers.enable(_t),ot.viewport=new sn,V[_t]=ot),ot.matrix.fromArray(nt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(nt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),_t===0&&(Z.matrix.copy(ot.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),He===!0&&Z.cameras.push(ot)}const Ge=l.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){g=r.getBinding();const _t=g.getDepthInformation(Ue[0]);_t&&_t.isValid&&_t.texture&&M.init(_t,l.renderState)}if(Ge&&Ge.includes("camera-access")&&R){e.state.unbindTexture(),g=r.getBinding();for(let _t=0;_t<Ue.length;_t++){const nt=Ue[_t].camera;if(nt){let Qe=x[nt];Qe||(Qe=new Dv,x[nt]=Qe);const ot=g.getCameraImage(nt);Qe.sourceTexture=ot}}}}for(let Ue=0;Ue<z.length;Ue++){const He=B[Ue],Ge=z[Ue];He!==null&&Ge!==void 0&&Ge.update(He,ce,p||h)}_e&&_e($,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),E=null}const Ie=new Uv;Ie.setAnimationLoop(Ae),this.setAnimationLoop=function($){_e=$},this.dispose=function(){}}}const Ir=new Qi,zA=new nn;function BA(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,Tv(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,P,O,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),g(M,x)):x.isMeshPhongMaterial?(c(M,x),_(M,x)):x.isMeshStandardMaterial?(c(M,x),y(M,x),x.isMeshPhysicalMaterial&&S(M,x,L)):x.isMeshMatcapMaterial?(c(M,x),E(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),R(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,P,O):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===$n&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===$n&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const P=e.get(x),O=P.envMap,L=P.envMapRotation;O&&(M.envMap.value=O,Ir.copy(L),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),M.envMapRotation.value.setFromMatrix4(zA.makeRotationFromEuler(Ir)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,P,O){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*P,M.scale.value=O*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function y(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,P){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===$n&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function R(M,x){const P=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function FA(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,O){const L=O.program;r.uniformBlockBinding(P,L)}function p(P,O){let L=l[P.id];L===void 0&&(E(P),L=_(P),l[P.id]=L,P.addEventListener("dispose",M));const z=O.program;r.updateUBOMapping(P,z);const B=e.render.frame;c[P.id]!==B&&(y(P),c[P.id]=B)}function _(P){const O=g();P.__bindingPointIndex=O;const L=o.createBuffer(),z=P.__size,B=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,z,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,L),L}function g(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(P){const O=l[P.id],L=P.uniforms,z=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let B=0,I=L.length;B<I;B++){const j=Array.isArray(L[B])?L[B]:[L[B]];for(let T=0,C=j.length;T<C;T++){const V=j[T];if(S(V,B,T,z)===!0){const Z=V.__offset,K=Array.isArray(V.value)?V.value:[V.value];let se=0;for(let he=0;he<K.length;he++){const N=K[he],G=R(N);typeof N=="number"||typeof N=="boolean"?(V.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,Z+se,V.__data)):N.isMatrix3?(V.__data[0]=N.elements[0],V.__data[1]=N.elements[1],V.__data[2]=N.elements[2],V.__data[3]=0,V.__data[4]=N.elements[3],V.__data[5]=N.elements[4],V.__data[6]=N.elements[5],V.__data[7]=0,V.__data[8]=N.elements[6],V.__data[9]=N.elements[7],V.__data[10]=N.elements[8],V.__data[11]=0):(N.toArray(V.__data,se),se+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Z,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(P,O,L,z){const B=P.value,I=O+"_"+L;if(z[I]===void 0)return typeof B=="number"||typeof B=="boolean"?z[I]=B:z[I]=B.clone(),!0;{const j=z[I];if(typeof B=="number"||typeof B=="boolean"){if(j!==B)return z[I]=B,!0}else if(j.equals(B)===!1)return j.copy(B),!0}return!1}function E(P){const O=P.uniforms;let L=0;const z=16;for(let I=0,j=O.length;I<j;I++){const T=Array.isArray(O[I])?O[I]:[O[I]];for(let C=0,V=T.length;C<V;C++){const Z=T[C],K=Array.isArray(Z.value)?Z.value:[Z.value];for(let se=0,he=K.length;se<he;se++){const N=K[se],G=R(N),ne=L%z,Me=ne%G.boundary,be=ne+Me;L+=Me,be!==0&&z-be<G.storage&&(L+=z-be),Z.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=L,L+=G.storage}}}const B=L%z;return B>0&&(L+=z-B),P.__size=L,P.__cache={},this}function R(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ut("WebGLRenderer: Unsupported uniform value type.",P),O}function M(P){const O=P.target;O.removeEventListener("dispose",M);const L=h.indexOf(O.__bindingPointIndex);h.splice(L,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function x(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}const HA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function GA(){return Vi===null&&(Vi=new RM(HA,16,16,Zs,Aa),Vi.name="DFG_LUT",Vi.minFilter=zn,Vi.magFilter=zn,Vi.wrapS=ba,Vi.wrapT=ba,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class VA{constructor(e={}){const{canvas:i=$S(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1,outputBufferType:S=ci}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=h;const R=S,M=new Set([ep,$d,Jd]),x=new Set([ci,Ki,sl,ol,Kd,Qd]),P=new Uint32Array(4),O=new Int32Array(4);let L=null,z=null;const B=[],I=[];let j=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let C=!1;this._outputColorSpace=Si;let V=0,Z=0,K=null,se=-1,he=null;const N=new sn,G=new sn;let ne=null;const Me=new Tt(0);let be=0,U=i.width,ie=i.height,_e=1,Ae=null,Ie=null;const $=new sn(0,0,U,ie),ce=new sn(0,0,U,ie);let Ue=!1;const He=new rp;let Ge=!1,ht=!1;const Kt=new nn,_t=new J,nt=new sn,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function $t(){return K===null?_e:1}let k=r;function jt(w,q){return i.getContext(w,q)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${jd}`),i.addEventListener("webglcontextlost",De,!1),i.addEventListener("webglcontextrestored",$e,!1),i.addEventListener("webglcontextcreationerror",et,!1),k===null){const q="webgl2";if(k=jt(q,w),k===null)throw jt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ct("WebGLRenderer: "+w.message),w}let Mt,Ut,qe,D,b,W,pe,ye,ue,Ye,Ne,We,at,Te,Re,Fe,Pe,Le,ft,F,Ee,Se,Ce,le;function de(){Mt=new GT(k),Mt.init(),Se=new NA(k,Mt),Ut=new NT(k,Mt,e,Se),qe=new DA(k,Mt),Ut.reversedDepthBuffer&&y&&qe.buffers.depth.setReversed(!0),D=new XT(k),b=new mA,W=new UA(k,Mt,qe,b,Ut,Se,D),pe=new OT(T),ye=new HT(T),ue=new jM(k),Ce=new DT(k,ue),Ye=new VT(k,ue,D,Ce),Ne=new qT(k,Ye,ue,D),ft=new WT(k,Ut,W),Fe=new LT(b),We=new pA(T,pe,ye,Mt,Ut,Ce,Fe),at=new BA(T,b),Te=new _A,Re=new bA(Mt),Le=new CT(T,pe,ye,qe,Ne,E,m),Pe=new RA(T,Ne,Ut),le=new FA(k,D,Ut,qe),F=new UT(k,Mt,D),Ee=new kT(k,Mt,D),D.programs=We.programs,T.capabilities=Ut,T.extensions=Mt,T.properties=b,T.renderLists=Te,T.shadowMap=Pe,T.state=qe,T.info=D}de(),R!==ci&&(j=new jT(R,i.width,i.height,l,c));const we=new PA(T,k);this.xr=we,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=Mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(w){w!==void 0&&(_e=w,this.setSize(U,ie,!1))},this.getSize=function(w){return w.set(U,ie)},this.setSize=function(w,q,oe=!0){if(we.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,ie=q,i.width=Math.floor(w*_e),i.height=Math.floor(q*_e),oe===!0&&(i.style.width=w+"px",i.style.height=q+"px"),j!==null&&j.setSize(i.width,i.height),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(U*_e,ie*_e).floor()},this.setDrawingBufferSize=function(w,q,oe){U=w,ie=q,_e=oe,i.width=Math.floor(w*oe),i.height=Math.floor(q*oe),this.setViewport(0,0,w,q)},this.setEffects=function(w){if(R===ci){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let q=0;q<w.length;q++)if(w[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,q,oe,ae){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,q,oe,ae),qe.viewport(N.copy($).multiplyScalar(_e).round())},this.getScissor=function(w){return w.copy(ce)},this.setScissor=function(w,q,oe,ae){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,q,oe,ae),qe.scissor(G.copy(ce).multiplyScalar(_e).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(w){qe.setScissorTest(Ue=w)},this.setOpaqueSort=function(w){Ae=w},this.setTransparentSort=function(w){Ie=w},this.getClearColor=function(w){return w.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(w=!0,q=!0,oe=!0){let ae=0;if(w){let Q=!1;if(K!==null){const Oe=K.texture.format;Q=M.has(Oe)}if(Q){const Oe=K.texture.type,Ve=x.has(Oe),ze=Le.getClearColor(),ke=Le.getClearAlpha(),je=ze.r,it=ze.g,Ze=ze.b;Ve?(P[0]=je,P[1]=it,P[2]=Ze,P[3]=ke,k.clearBufferuiv(k.COLOR,0,P)):(O[0]=je,O[1]=it,O[2]=Ze,O[3]=ke,k.clearBufferiv(k.COLOR,0,O))}else ae|=k.COLOR_BUFFER_BIT}q&&(ae|=k.DEPTH_BUFFER_BIT),oe&&(ae|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",De,!1),i.removeEventListener("webglcontextrestored",$e,!1),i.removeEventListener("webglcontextcreationerror",et,!1),Le.dispose(),Te.dispose(),Re.dispose(),b.dispose(),pe.dispose(),ye.dispose(),Ne.dispose(),Ce.dispose(),le.dispose(),We.dispose(),we.dispose(),we.removeEventListener("sessionstart",Ti),we.removeEventListener("sessionend",fr),zi.stop()};function De(w){w.preventDefault(),tu("WebGLRenderer: Context Lost."),C=!0}function $e(){tu("WebGLRenderer: Context Restored."),C=!1;const w=D.autoReset,q=Pe.enabled,oe=Pe.autoUpdate,ae=Pe.needsUpdate,Q=Pe.type;de(),D.autoReset=w,Pe.enabled=q,Pe.autoUpdate=oe,Pe.needsUpdate=ae,Pe.type=Q}function et(w){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Bt(w){const q=w.target;q.removeEventListener("dispose",Bt),Sn(q)}function Sn(w){Ra(w),b.remove(w)}function Ra(w){const q=b.get(w).programs;q!==void 0&&(q.forEach(function(oe){We.releaseProgram(oe)}),w.isShaderMaterial&&We.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,oe,ae,Q,Oe){q===null&&(q=Qe);const Ve=Q.isMesh&&Q.matrixWorld.determinant()<0,ze=hr(w,q,oe,ae,Q);qe.setMaterial(ae,Ve);let ke=oe.index,je=1;if(ae.wireframe===!0){if(ke=Ye.getWireframeAttribute(oe),ke===void 0)return;je=2}const it=oe.drawRange,Ze=oe.attributes.position;let rt=it.start*je,Ot=(it.start+it.count)*je;Oe!==null&&(rt=Math.max(rt,Oe.start*je),Ot=Math.min(Ot,(Oe.start+Oe.count)*je)),ke!==null?(rt=Math.max(rt,0),Ot=Math.min(Ot,ke.count)):Ze!=null&&(rt=Math.max(rt,0),Ot=Math.min(Ot,Ze.count));const en=Ot-rt;if(en<0||en===1/0)return;Ce.setup(Q,ae,ze,oe,ke);let Zt,zt=F;if(ke!==null&&(Zt=ue.get(ke),zt=Ee,zt.setIndex(Zt)),Q.isMesh)ae.wireframe===!0?(qe.setLineWidth(ae.wireframeLinewidth*$t()),zt.setMode(k.LINES)):zt.setMode(k.TRIANGLES);else if(Q.isLine){let Je=ae.linewidth;Je===void 0&&(Je=1),qe.setLineWidth(Je*$t()),Q.isLineSegments?zt.setMode(k.LINES):Q.isLineLoop?zt.setMode(k.LINE_LOOP):zt.setMode(k.LINE_STRIP)}else Q.isPoints?zt.setMode(k.POINTS):Q.isSprite&&zt.setMode(k.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)cl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),zt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))zt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Je=Q._multiDrawStarts,It=Q._multiDrawCounts,lt=Q._multiDrawCount,Tn=ke?ue.get(ke).bytesPerElement:1,ea=b.get(ae).currentProgram.getUniforms();for(let An=0;An<lt;An++)ea.setValue(k,"_gl_DrawID",An),zt.render(Je[An]/Tn,It[An])}else if(Q.isInstancedMesh)zt.renderInstances(rt,en,Q.count);else if(oe.isInstancedBufferGeometry){const Je=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,It=Math.min(oe.instanceCount,Je);zt.renderInstances(rt,en,It)}else zt.render(rt,en)};function $i(w,q,oe){w.transparent===!0&&w.side===Xi&&w.forceSinglePass===!1?(w.side=$n,w.needsUpdate=!0,qr(w,q,oe),w.side=ur,w.needsUpdate=!0,qr(w,q,oe),w.side=Xi):qr(w,q,oe)}this.compile=function(w,q,oe=null){oe===null&&(oe=w),z=Re.get(oe),z.init(q),I.push(z),oe.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(z.pushLight(Q),Q.castShadow&&z.pushShadow(Q))}),w!==oe&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(z.pushLight(Q),Q.castShadow&&z.pushShadow(Q))}),z.setupLights();const ae=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Oe=Q.material;if(Oe)if(Array.isArray(Oe))for(let Ve=0;Ve<Oe.length;Ve++){const ze=Oe[Ve];$i(ze,oe,Q),ae.add(ze)}else $i(Oe,oe,Q),ae.add(Oe)}),z=I.pop(),ae},this.compileAsync=function(w,q,oe=null){const ae=this.compile(w,q,oe);return new Promise(Q=>{function Oe(){if(ae.forEach(function(Ve){b.get(Ve).currentProgram.isReady()&&ae.delete(Ve)}),ae.size===0){Q(w);return}setTimeout(Oe,10)}Mt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Pi=null;function Ei(w){Pi&&Pi(w)}function Ti(){zi.stop()}function fr(){zi.start()}const zi=new Uv;zi.setAnimationLoop(Ei),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(w){Pi=w,we.setAnimationLoop(w),w===null?zi.stop():zi.start()},we.addEventListener("sessionstart",Ti),we.addEventListener("sessionend",fr),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;const oe=we.enabled===!0&&we.isPresenting===!0,ae=j!==null&&(K===null||oe)&&j.begin(T,K);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(q),q=we.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,q,K),z=Re.get(w,I.length),z.init(q),I.push(z),Kt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),He.setFromProjectionMatrix(Kt,Yi,q.reversedDepth),ht=this.localClippingEnabled,Ge=Fe.init(this.clippingPlanes,ht),L=Te.get(w,B.length),L.init(),B.push(L),we.enabled===!0&&we.isPresenting===!0){const Ve=T.xr.getDepthSensingMesh();Ve!==null&&ui(Ve,q,-1/0,T.sortObjects)}ui(w,q,0,T.sortObjects),L.finish(),T.sortObjects===!0&&L.sort(Ae,Ie),ot=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ot&&Le.addToRenderList(L,w),this.info.render.frame++,Ge===!0&&Fe.beginShadows();const Q=z.state.shadowsArray;if(Pe.render(Q,w,q),Ge===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&j.hasRenderPass())===!1){const Ve=L.opaque,ze=L.transmissive;if(z.setupLights(),q.isArrayCamera){const ke=q.cameras;if(ze.length>0)for(let je=0,it=ke.length;je<it;je++){const Ze=ke[je];En(Ve,ze,w,Ze)}ot&&Le.render(w);for(let je=0,it=ke.length;je<it;je++){const Ze=ke[je];cn(L,w,Ze,Ze.viewport)}}else ze.length>0&&En(Ve,ze,w,q),ot&&Le.render(w),cn(L,w,q)}K!==null&&Z===0&&(W.updateMultisampleRenderTarget(K),W.updateRenderTargetMipmap(K)),ae&&j.end(T),w.isScene===!0&&w.onAfterRender(T,w,q),Ce.resetDefaultState(),se=-1,he=null,I.pop(),I.length>0?(z=I[I.length-1],Ge===!0&&Fe.setGlobalState(T.clippingPlanes,z.state.camera)):z=null,B.pop(),B.length>0?L=B[B.length-1]:L=null};function ui(w,q,oe,ae){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)oe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)z.pushLight(w),w.castShadow&&z.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||He.intersectsSprite(w)){ae&&nt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Kt);const Ve=Ne.update(w),ze=w.material;ze.visible&&L.push(w,Ve,ze,oe,nt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||He.intersectsObject(w))){const Ve=Ne.update(w),ze=w.material;if(ae&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),nt.copy(w.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),nt.copy(Ve.boundingSphere.center)),nt.applyMatrix4(w.matrixWorld).applyMatrix4(Kt)),Array.isArray(ze)){const ke=Ve.groups;for(let je=0,it=ke.length;je<it;je++){const Ze=ke[je],rt=ze[Ze.materialIndex];rt&&rt.visible&&L.push(w,Ve,rt,oe,nt.z,Ze)}}else ze.visible&&L.push(w,Ve,ze,oe,nt.z,null)}}const Oe=w.children;for(let Ve=0,ze=Oe.length;Ve<ze;Ve++)ui(Oe[Ve],q,oe,ae)}function cn(w,q,oe,ae){const{opaque:Q,transmissive:Oe,transparent:Ve}=w;z.setupLightsView(oe),Ge===!0&&Fe.setGlobalState(T.clippingPlanes,oe),ae&&qe.viewport(N.copy(ae)),Q.length>0&&Ai(Q,q,oe),Oe.length>0&&Ai(Oe,q,oe),Ve.length>0&&Ai(Ve,q,oe),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function En(w,q,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[ae.id]===void 0){const rt=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[ae.id]=new Zi(1,1,{generateMipmaps:!0,type:rt?Aa:ci,minFilter:Fr,samples:Ut.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const Oe=z.state.transmissionRenderTarget[ae.id],Ve=ae.viewport||N;Oe.setSize(Ve.z*T.transmissionResolutionScale,Ve.w*T.transmissionResolutionScale);const ze=T.getRenderTarget(),ke=T.getActiveCubeFace(),je=T.getActiveMipmapLevel();T.setRenderTarget(Oe),T.getClearColor(Me),be=T.getClearAlpha(),be<1&&T.setClearColor(16777215,.5),T.clear(),ot&&Le.render(oe);const it=T.toneMapping;T.toneMapping=ji;const Ze=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),z.setupLightsView(ae),Ge===!0&&Fe.setGlobalState(T.clippingPlanes,ae),Ai(w,oe,ae),W.updateMultisampleRenderTarget(Oe),W.updateRenderTargetMipmap(Oe),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Ot=0,en=q.length;Ot<en;Ot++){const Zt=q[Ot],{object:zt,geometry:Je,material:It,group:lt}=Zt;if(It.side===Xi&&zt.layers.test(ae.layers)){const Tn=It.side;It.side=$n,It.needsUpdate=!0,Wr(zt,oe,ae,Je,It,lt),It.side=Tn,It.needsUpdate=!0,rt=!0}}rt===!0&&(W.updateMultisampleRenderTarget(Oe),W.updateRenderTargetMipmap(Oe))}T.setRenderTarget(ze,ke,je),T.setClearColor(Me,be),Ze!==void 0&&(ae.viewport=Ze),T.toneMapping=it}function Ai(w,q,oe){const ae=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,Oe=w.length;Q<Oe;Q++){const Ve=w[Q],{object:ze,geometry:ke,group:je}=Ve;let it=Ve.material;it.allowOverride===!0&&ae!==null&&(it=ae),ze.layers.test(oe.layers)&&Wr(ze,q,oe,ke,it,je)}}function Wr(w,q,oe,ae,Q,Oe){w.onBeforeRender(T,q,oe,ae,Q,Oe),w.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(T,q,oe,ae,w,Oe),Q.transparent===!0&&Q.side===Xi&&Q.forceSinglePass===!1?(Q.side=$n,Q.needsUpdate=!0,T.renderBufferDirect(oe,q,ae,Q,w,Oe),Q.side=ur,Q.needsUpdate=!0,T.renderBufferDirect(oe,q,ae,Q,w,Oe),Q.side=Xi):T.renderBufferDirect(oe,q,ae,Q,w,Oe),w.onAfterRender(T,q,oe,ae,Q,Oe)}function qr(w,q,oe){q.isScene!==!0&&(q=Qe);const ae=b.get(w),Q=z.state.lights,Oe=z.state.shadowsArray,Ve=Q.state.version,ze=We.getParameters(w,Q.state,Oe,q,oe),ke=We.getProgramCacheKey(ze);let je=ae.programs;ae.environment=w.isMeshStandardMaterial?q.environment:null,ae.fog=q.fog,ae.envMap=(w.isMeshStandardMaterial?ye:pe).get(w.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,je===void 0&&(w.addEventListener("dispose",Bt),je=new Map,ae.programs=je);let it=je.get(ke);if(it!==void 0){if(ae.currentProgram===it&&ae.lightsStateVersion===Ve)return no(w,ze),it}else ze.uniforms=We.getUniforms(w),w.onBeforeCompile(ze,T),it=We.acquireProgram(ze,ke),je.set(ke,it),ae.uniforms=ze.uniforms;const Ze=ae.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ze.clippingPlanes=Fe.uniform),no(w,ze),ae.needsLights=Ca(w),ae.lightsStateVersion=Ve,ae.needsLights&&(Ze.ambientLightColor.value=Q.state.ambient,Ze.lightProbe.value=Q.state.probe,Ze.directionalLights.value=Q.state.directional,Ze.directionalLightShadows.value=Q.state.directionalShadow,Ze.spotLights.value=Q.state.spot,Ze.spotLightShadows.value=Q.state.spotShadow,Ze.rectAreaLights.value=Q.state.rectArea,Ze.ltc_1.value=Q.state.rectAreaLTC1,Ze.ltc_2.value=Q.state.rectAreaLTC2,Ze.pointLights.value=Q.state.point,Ze.pointLightShadows.value=Q.state.pointShadow,Ze.hemisphereLights.value=Q.state.hemi,Ze.directionalShadowMap.value=Q.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ze.spotShadowMap.value=Q.state.spotShadowMap,Ze.spotLightMatrix.value=Q.state.spotLightMatrix,Ze.spotLightMap.value=Q.state.spotLightMap,Ze.pointShadowMap.value=Q.state.pointShadowMap,Ze.pointShadowMatrix.value=Q.state.pointShadowMatrix),ae.currentProgram=it,ae.uniformsList=null,it}function pl(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=Jc.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function no(w,q){const oe=b.get(w);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function hr(w,q,oe,ae,Q){q.isScene!==!0&&(q=Qe),W.resetTextureUnits();const Oe=q.fog,Ve=ae.isMeshStandardMaterial?q.environment:null,ze=K===null?T.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ks,ke=(ae.isMeshStandardMaterial?ye:pe).get(ae.envMap||Ve),je=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,it=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ze=!!oe.morphAttributes.position,rt=!!oe.morphAttributes.normal,Ot=!!oe.morphAttributes.color;let en=ji;ae.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(en=T.toneMapping);const Zt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,zt=Zt!==void 0?Zt.length:0,Je=b.get(ae),It=z.state.lights;if(Ge===!0&&(ht===!0||w!==he)){const Rn=w===he&&ae.id===se;Fe.setState(ae,w,Rn)}let lt=!1;ae.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==It.state.version||Je.outputColorSpace!==ze||Q.isBatchedMesh&&Je.batching===!1||!Q.isBatchedMesh&&Je.batching===!0||Q.isBatchedMesh&&Je.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Je.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Je.instancing===!1||!Q.isInstancedMesh&&Je.instancing===!0||Q.isSkinnedMesh&&Je.skinning===!1||!Q.isSkinnedMesh&&Je.skinning===!0||Q.isInstancedMesh&&Je.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Je.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Je.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Je.instancingMorph===!1&&Q.morphTexture!==null||Je.envMap!==ke||ae.fog===!0&&Je.fog!==Oe||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Fe.numPlanes||Je.numIntersection!==Fe.numIntersection)||Je.vertexAlphas!==je||Je.vertexTangents!==it||Je.morphTargets!==Ze||Je.morphNormals!==rt||Je.morphColors!==Ot||Je.toneMapping!==en||Je.morphTargetsCount!==zt)&&(lt=!0):(lt=!0,Je.__version=ae.version);let Tn=Je.currentProgram;lt===!0&&(Tn=qr(ae,q,Q));let ea=!1,An=!1,fi=!1;const Ft=Tn.getUniforms(),wn=Je.uniforms;if(qe.useProgram(Tn.program)&&(ea=!0,An=!0,fi=!0),ae.id!==se&&(se=ae.id,An=!0),ea||he!==w){qe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ft.setValue(k,"projectionMatrix",w.projectionMatrix),Ft.setValue(k,"viewMatrix",w.matrixWorldInverse);const Cn=Ft.map.cameraPosition;Cn!==void 0&&Cn.setValue(k,_t.setFromMatrixPosition(w.matrixWorld)),Ut.logarithmicDepthBuffer&&Ft.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ft.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),he!==w&&(he=w,An=!0,fi=!0)}if(Je.needsLights&&(It.state.directionalShadowMap.length>0&&Ft.setValue(k,"directionalShadowMap",It.state.directionalShadowMap,W),It.state.spotShadowMap.length>0&&Ft.setValue(k,"spotShadowMap",It.state.spotShadowMap,W),It.state.pointShadowMap.length>0&&Ft.setValue(k,"pointShadowMap",It.state.pointShadowMap,W)),Q.isSkinnedMesh){Ft.setOptional(k,Q,"bindMatrix"),Ft.setOptional(k,Q,"bindMatrixInverse");const Rn=Q.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Ft.setValue(k,"boneTexture",Rn.boneTexture,W))}Q.isBatchedMesh&&(Ft.setOptional(k,Q,"batchingTexture"),Ft.setValue(k,"batchingTexture",Q._matricesTexture,W),Ft.setOptional(k,Q,"batchingIdTexture"),Ft.setValue(k,"batchingIdTexture",Q._indirectTexture,W),Ft.setOptional(k,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ft.setValue(k,"batchingColorTexture",Q._colorsTexture,W));const mn=oe.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&ft.update(Q,oe,Tn),(An||Je.receiveShadow!==Q.receiveShadow)&&(Je.receiveShadow=Q.receiveShadow,Ft.setValue(k,"receiveShadow",Q.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(wn.envMap.value=ke,wn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&q.environment!==null&&(wn.envMapIntensity.value=q.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=GA()),An&&(Ft.setValue(k,"toneMappingExposure",T.toneMappingExposure),Je.needsLights&&io(wn,fi),Oe&&ae.fog===!0&&at.refreshFogUniforms(wn,Oe),at.refreshMaterialUniforms(wn,ae,_e,ie,z.state.transmissionRenderTarget[w.id]),Jc.upload(k,pl(Je),wn,W)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Jc.upload(k,pl(Je),wn,W),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ft.setValue(k,"center",Q.center),Ft.setValue(k,"modelViewMatrix",Q.modelViewMatrix),Ft.setValue(k,"normalMatrix",Q.normalMatrix),Ft.setValue(k,"modelMatrix",Q.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Rn=ae.uniformsGroups;for(let Cn=0,Yr=Rn.length;Cn<Yr;Cn++){const wi=Rn[Cn];le.update(wi,Tn),le.bind(wi,Tn)}}return Tn}function io(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function Ca(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(w,q,oe){const ae=b.get(w);ae.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),b.get(w.texture).__webglTexture=q,b.get(w.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,q){const oe=b.get(w);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0};const Da=k.createFramebuffer();this.setRenderTarget=function(w,q=0,oe=0){K=w,V=q,Z=oe;let ae=null,Q=!1,Oe=!1;if(w){const ze=b.get(w);if(ze.__useDefaultFramebuffer!==void 0){qe.bindFramebuffer(k.FRAMEBUFFER,ze.__webglFramebuffer),N.copy(w.viewport),G.copy(w.scissor),ne=w.scissorTest,qe.viewport(N),qe.scissor(G),qe.setScissorTest(ne),se=-1;return}else if(ze.__webglFramebuffer===void 0)W.setupRenderTarget(w);else if(ze.__hasExternalTextures)W.rebindTextures(w,b.get(w.texture).__webglTexture,b.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const it=w.depthTexture;if(ze.__boundDepthTexture!==it){if(it!==null&&b.has(it)&&(w.width!==it.image.width||w.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(w)}}const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Oe=!0);const je=b.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(je[q])?ae=je[q][oe]:ae=je[q],Q=!0):w.samples>0&&W.useMultisampledRTT(w)===!1?ae=b.get(w).__webglMultisampledFramebuffer:Array.isArray(je)?ae=je[oe]:ae=je,N.copy(w.viewport),G.copy(w.scissor),ne=w.scissorTest}else N.copy($).multiplyScalar(_e).floor(),G.copy(ce).multiplyScalar(_e).floor(),ne=Ue;if(oe!==0&&(ae=Da),qe.bindFramebuffer(k.FRAMEBUFFER,ae)&&qe.drawBuffers(w,ae),qe.viewport(N),qe.scissor(G),qe.setScissorTest(ne),Q){const ze=b.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,ze.__webglTexture,oe)}else if(Oe){const ze=q;for(let ke=0;ke<w.textures.length;ke++){const je=b.get(w.textures[ke]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+ke,je.__webglTexture,oe,ze)}}else if(w!==null&&oe!==0){const ze=b.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ze.__webglTexture,oe)}se=-1},this.readRenderTargetPixels=function(w,q,oe,ae,Q,Oe,Ve,ze=0){if(!(w&&w.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ve!==void 0&&(ke=ke[Ve]),ke){qe.bindFramebuffer(k.FRAMEBUFFER,ke);try{const je=w.textures[ze],it=je.format,Ze=je.type;if(!Ut.textureFormatReadable(it)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(Ze)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-ae&&oe>=0&&oe<=w.height-Q&&(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ze),k.readPixels(q,oe,ae,Q,Se.convert(it),Se.convert(Ze),Oe))}finally{const je=K!==null?b.get(K).__webglFramebuffer:null;qe.bindFramebuffer(k.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(w,q,oe,ae,Q,Oe,Ve,ze=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ve!==void 0&&(ke=ke[Ve]),ke)if(q>=0&&q<=w.width-ae&&oe>=0&&oe<=w.height-Q){qe.bindFramebuffer(k.FRAMEBUFFER,ke);const je=w.textures[ze],it=je.format,Ze=je.type;if(!Ut.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,rt),k.bufferData(k.PIXEL_PACK_BUFFER,Oe.byteLength,k.STREAM_READ),w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ze),k.readPixels(q,oe,ae,Q,Se.convert(it),Se.convert(Ze),0);const Ot=K!==null?b.get(K).__webglFramebuffer:null;qe.bindFramebuffer(k.FRAMEBUFFER,Ot);const en=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await eM(k,en,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,rt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Oe),k.deleteBuffer(rt),k.deleteSync(en),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,q=null,oe=0){const ae=Math.pow(2,-oe),Q=Math.floor(w.image.width*ae),Oe=Math.floor(w.image.height*ae),Ve=q!==null?q.x:0,ze=q!==null?q.y:0;W.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,oe,0,0,Ve,ze,Q,Oe),qe.unbindTexture()};const dr=k.createFramebuffer(),Ua=k.createFramebuffer();this.copyTextureToTexture=function(w,q,oe=null,ae=null,Q=0,Oe=null){Oe===null&&(Q!==0?(cl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Oe=Q,Q=0):Oe=0);let Ve,ze,ke,je,it,Ze,rt,Ot,en;const Zt=w.isCompressedTexture?w.mipmaps[Oe]:w.image;if(oe!==null)Ve=oe.max.x-oe.min.x,ze=oe.max.y-oe.min.y,ke=oe.isBox3?oe.max.z-oe.min.z:1,je=oe.min.x,it=oe.min.y,Ze=oe.isBox3?oe.min.z:0;else{const mn=Math.pow(2,-Q);Ve=Math.floor(Zt.width*mn),ze=Math.floor(Zt.height*mn),w.isDataArrayTexture?ke=Zt.depth:w.isData3DTexture?ke=Math.floor(Zt.depth*mn):ke=1,je=0,it=0,Ze=0}ae!==null?(rt=ae.x,Ot=ae.y,en=ae.z):(rt=0,Ot=0,en=0);const zt=Se.convert(q.format),Je=Se.convert(q.type);let It;q.isData3DTexture?(W.setTexture3D(q,0),It=k.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),It=k.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),It=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const lt=k.getParameter(k.UNPACK_ROW_LENGTH),Tn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),ea=k.getParameter(k.UNPACK_SKIP_PIXELS),An=k.getParameter(k.UNPACK_SKIP_ROWS),fi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Zt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Zt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,je),k.pixelStorei(k.UNPACK_SKIP_ROWS,it),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ze);const Ft=w.isDataArrayTexture||w.isData3DTexture,wn=q.isDataArrayTexture||q.isData3DTexture;if(w.isDepthTexture){const mn=b.get(w),Rn=b.get(q),Cn=b.get(mn.__renderTarget),Yr=b.get(Rn.__renderTarget);qe.bindFramebuffer(k.READ_FRAMEBUFFER,Cn.__webglFramebuffer),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,Yr.__webglFramebuffer);for(let wi=0;wi<ke;wi++)Ft&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(w).__webglTexture,Q,Ze+wi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(q).__webglTexture,Oe,en+wi)),k.blitFramebuffer(je,it,Ve,ze,rt,Ot,Ve,ze,k.DEPTH_BUFFER_BIT,k.NEAREST);qe.bindFramebuffer(k.READ_FRAMEBUFFER,null),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||b.has(w)){const mn=b.get(w),Rn=b.get(q);qe.bindFramebuffer(k.READ_FRAMEBUFFER,dr),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ua);for(let Cn=0;Cn<ke;Cn++)Ft?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,mn.__webglTexture,Q,Ze+Cn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,mn.__webglTexture,Q),wn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Rn.__webglTexture,Oe,en+Cn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Rn.__webglTexture,Oe),Q!==0?k.blitFramebuffer(je,it,Ve,ze,rt,Ot,Ve,ze,k.COLOR_BUFFER_BIT,k.NEAREST):wn?k.copyTexSubImage3D(It,Oe,rt,Ot,en+Cn,je,it,Ve,ze):k.copyTexSubImage2D(It,Oe,rt,Ot,je,it,Ve,ze);qe.bindFramebuffer(k.READ_FRAMEBUFFER,null),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else wn?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(It,Oe,rt,Ot,en,Ve,ze,ke,zt,Je,Zt.data):q.isCompressedArrayTexture?k.compressedTexSubImage3D(It,Oe,rt,Ot,en,Ve,ze,ke,zt,Zt.data):k.texSubImage3D(It,Oe,rt,Ot,en,Ve,ze,ke,zt,Je,Zt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Oe,rt,Ot,Ve,ze,zt,Je,Zt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Oe,rt,Ot,Zt.width,Zt.height,zt,Zt.data):k.texSubImage2D(k.TEXTURE_2D,Oe,rt,Ot,Ve,ze,zt,Je,Zt);k.pixelStorei(k.UNPACK_ROW_LENGTH,lt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Tn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ea),k.pixelStorei(k.UNPACK_SKIP_ROWS,An),k.pixelStorei(k.UNPACK_SKIP_IMAGES,fi),Oe===0&&q.generateMipmaps&&k.generateMipmap(It),qe.unbindTexture()},this.initRenderTarget=function(w){b.get(w).__webglFramebuffer===void 0&&W.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?W.setTextureCube(w,0):w.isData3DTexture?W.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?W.setTexture2DArray(w,0):W.setTexture2D(w,0),qe.unbindTexture()},this.resetState=function(){V=0,Z=0,K=null,qe.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Dt._getUnpackColorSpace()}}const kA=()=>{const o=new Vn,e=2;o.scale.set(e,e,e);const i=new Qn({color:6045747,roughness:1}),r=new Rt(new kn(.15,6,.15),i);r.position.y=3,o.add(r);const l=new Rt(new kn(3.5,.15,.15),i);l.position.y=4.8,l.rotation.z=(Math.random()-.5)*.4,o.add(l);const c=new Qn({color:12759680,roughness:1}),h=new Rt(new kn(.8,1,.7),c);h.position.y=5.4,o.add(h);const d=new Gr({color:0}),m=new eo(.03,.03,.4),p=(E,R,M)=>{const x=new Vn;x.position.set(E,R,M);const P=new Rt(m,d),O=new Rt(m,d);return P.rotation.z=Math.PI/4,O.rotation.z=-Math.PI/4,x.add(P),x.add(O),x};o.add(p(-.2,5.45,.36)),o.add(p(.2,5.45,.36));const _=new Rt(new dl(.2,.03,8,8,Math.PI),d);_.rotation.x=Math.PI,_.position.set(0,5.2,.36),o.add(_);const g=new ru(1.2,4.5,5,1,!0),y=new Qn({color:4865073,side:Xi,roughness:1}),S=new Rt(g,y);return S.position.y=3.2,S.scale.z=.5,o.add(S),o},XA=()=>{const o=new Vn,e=new eo(.05,.1,4,5),i=new Qn({color:5597999,roughness:.8}),r=new Rt(e,i);r.position.y=0,o.add(r);const l=new kr(.3,1.5);l.translate(0,.75,0);for(let h=0;h<4;h++){const d=new Rt(l,i);d.position.y=Math.random()*2-1,d.rotation.y=Math.random()*Math.PI*2,d.rotation.z=Math.PI/4,o.add(d)}const c=.8+Math.random()*.4;return o.scale.set(c,c,c),o},WA=()=>{const o=new Vn,e=new Qn({color:8947848,roughness:.9}),i=new Qn({color:2263074,roughness:1}),r=new Rt(new kn(1.5,1,1.5),e);r.position.y=.5,o.add(r);const l=2+Math.random()*4,c=Math.floor(l);for(let h=0;h<c;h++){const d=new eo(.6,.6,1,8),m=new Rt(d,e);if(m.position.y=1.5+h,m.position.x=(Math.random()-.5)*.1,m.position.z=(Math.random()-.5)*.1,m.rotation.y=Math.random()*Math.PI,o.add(m),Math.random()>.6){const p=new Rt(new dl(.7,.05,4,6),i);p.rotation.x=Math.PI/2,p.position.y=1.5+h,p.rotation.z=Math.random()-.5,o.add(p)}}if(Math.random()>.3){const h=new Rt(new kn(1.6,.4,1.6),e);h.position.y=1.5+c,h.rotation.z=(Math.random()-.5)*.2,o.add(h)}return o},qA=({onExit:o})=>{const e=vt.useRef(),[i,r]=vt.useState(100),[l,c]=vt.useState(!1),[h,d]=vt.useState("AWAITING INPUT..."),[m,p]=vt.useState(""),[_,g]=vt.useState(0),[y,S]=vt.useState(!1),[E,R]=vt.useState(100),[M,x]=vt.useState(!0),P=vt.useRef(null),O=vt.useRef([]),L=vt.useRef(0),z=vt.useRef(!1),B=vt.useRef("PARTY"),I=vt.useRef(!1),j=vt.useRef(null),T=vt.useRef(null),C=vt.useRef([]),V=vt.useRef(new Vn),Z=vt.useRef(new Vn),K=vt.useRef(new Vn),se=vt.useRef({forward:!1,backward:!1,left:!1,right:!1,jump:!1,run:!1}),he=vt.useRef(new J),N=10;vt.useRef([]);const G=vt.useRef([]),ne=vt.useRef([]),Me=vt.useRef([]),be=()=>{if(P.current)return;const _e=window.AudioContext||window.webkitAudioContext,Ae=new _e,Ie=Ae.createOscillator();Ie.type="sawtooth",Ie.frequency.value=50;const $=Ae.createGain();$.gain.value=.1;const ce=Ae.createBiquadFilter();ce.type="lowpass",ce.frequency.value=200,Ie.connect(ce),ce.connect($),$.connect(Ae.destination),Ie.start();const Ue=Ae.createOscillator(),He=Ae.createGain();He.gain.value=0,Ue.connect(He),He.connect(Ae.destination),Ue.start(),P.current={ctx:Ae,droneOsc:Ie,droneGain:$,screamOsc:Ue,screamGain:He},c(!0)},U=_e=>{x(!1),be(),ie.current=_e},ie=vt.useRef(null);return vt.useEffect(()=>{if(!e.current)return;document.body.requestPointerLock=document.body.requestPointerLock||document.body.mozRequestPointerLock;const _e=()=>{!M&&!y&&e.current.requestPointerLock()},Ae=F=>{document.pointerLockElement===e.current&&(T.current.camera.rotation.y-=F.movementX*.002,T.current.camera.rotation.x-=F.movementY*.002,T.current.camera.rotation.x=Math.max(-1.5,Math.min(1.5,T.current.camera.rotation.x)),T.current.camera.rotation.z=0,T.current.camera.rotation.order="YXZ")},Ie=F=>{switch(F.code){case"KeyW":se.current.forward=!0;break;case"KeyS":se.current.backward=!0;break;case"KeyA":se.current.left=!0;break;case"KeyD":se.current.right=!0;break;case"Space":se.current.jump=!0;break;case"ShiftLeft":case"ShiftRight":se.current.run=!0;break}},$=F=>{switch(F.code){case"KeyW":se.current.forward=!1;break;case"KeyS":se.current.backward=!1;break;case"KeyA":se.current.left=!1;break;case"KeyD":se.current.right=!1;break;case"Space":se.current.jump=!1;break;case"ShiftLeft":case"ShiftRight":se.current.run=!1;break}};window.addEventListener("keydown",Ie),window.addEventListener("keyup",$),document.addEventListener("mousemove",Ae),e.current.addEventListener("click",_e);const ce="/horror/",Ue=new FM,He=Ue.load(`${ce}images/party_wallpaper.png`),Ge=Ue.load(`${ce}images/carpet.png`),ht=Ue.load(`${ce}images/dirt_ground.png`),Kt=Ue.load(`${ce}images/host.png`),_t=Ue.load(`${ce}images/cake.png`);He.wrapS=He.wrapT=Ws,Ge.wrapS=Ge.wrapT=Ws,ht.wrapS=ht.wrapT=Ws,Ge.repeat.set(4,4),ht.repeat.set(4,4),Kt.magFilter=_n,_t.magFilter=_n;const nt=new AM;T.current=nt,nt.rotation.order="YXZ";const Qe=new Jn(75,window.innerWidth/window.innerHeight,.1,1e3);Qe.rotation.order="YXZ",T.current.camera=Qe;const ot=new VA({antialias:!0,alpha:!1});ot.setSize(window.innerWidth,window.innerHeight),ot.domElement.style.cssText="position:absolute; top:0; left:0; width:100%; height:100%; filter: contrast(1.1) saturate(1.2);",e.current.appendChild(ot.domElement);const $t=new Qn({map:He,color:16777215,roughness:.5}),k=new Qn({map:Ge,color:5588019,roughness:1}),jt=new Qn({map:ht,color:3355443,roughness:1}),Mt=new Qn({color:2232576}),Ut=new Qn({color:5592405,roughness:.8}),qe=new Qn({color:8947848,roughness:.9});V.current=new Vn,Z.current=new Vn,K.current=new Vn,Z.current.visible=!1,K.current.visible=!1,nt.add(V.current),nt.add(Z.current),nt.add(K.current);const D=[[1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,1,0,0,0,0,0,0,1],[1,0,1,0,1,0,1,1,0,1,0,1],[1,0,1,0,0,0,0,1,0,1,0,1],[1,0,1,1,1,1,0,1,1,1,0,1],[1,0,0,0,0,1,0,0,0,0,0,1],[1,1,1,1,0,1,1,1,0,1,0,1],[1,0,0,1,0,0,0,1,0,1,0,1],[1,0,0,0,0,1,0,0,0,1,0,1],[1,0,1,1,1,1,0,1,0,1,0,1],[1,0,0,0,0,1,0,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1]],b=new kn(N,12,N),W=new kr(N,N);D.forEach((F,Ee)=>{F.forEach((Se,Ce)=>{const le=Ce*N,de=Ee*N,we=new Rt(W,k);we.rotation.x=-Math.PI/2,we.position.set(le,-4,de),V.current.add(we);const De=new Rt(W,Mt);if(De.rotation.x=Math.PI/2,De.position.set(le,4,de),V.current.add(De),Se===1){const et=new Rt(b,$t);et.position.set(le,0,de),et.userData={isBorder:!0},V.current.add(et)}else if(G.current.push({x:le,z:de}),Math.random()>.9){const et=new w_(16755200,1,10);et.position.set(le,2,de),V.current.add(et)}const $e=new Rt(W,jt);if($e.rotation.x=-Math.PI/2,$e.position.set(le,-4,de),Z.current.add($e),Se===1){for(let Bt=0;Bt<8;Bt++){const Sn=XA();Sn.position.set(le+(Math.random()-.5)*8,-4,de+(Math.random()-.5)*8),Z.current.add(Sn)}const et=new Rt(b,new Gr({visible:!1}));et.position.set(le,0,de),et.userData={isBorder:!0},Z.current.add(et)}else ne.current.push({x:le,z:de})})});const pe=20,ye=15;for(let F=0;F<pe;F++)for(let Ee=0;Ee<pe;Ee++){const Se=Ee*ye,Ce=F*ye,le=new Rt(new kr(ye,ye),Ut);le.rotation.x=-Math.PI/2,le.position.set(Se,-4,Ce),le.rotation.x+=(Math.random()-.5)*.05,le.rotation.y+=(Math.random()-.5)*.05,K.current.add(le);const de=F===0||F===pe-1||Ee===0||Ee===pe-1,we=Math.random()>.8;if(de||we)if(Math.random()>.5){const De=WA();De.position.set(Se,-3.5,Ce),De.scale.set(1.5,1.5,1.5),K.current.add(De);const $e=new Rt(new kn(2,10,2),new Gr({visible:!1}));$e.position.set(Se,0,Ce),$e.userData={isBorder:!0},K.current.add($e)}else{const De=new Rt(new kn(4,2,8),qe);De.position.set(Se,-3,Ce),De.rotation.y=Math.random(),K.current.add(De),De.userData={isBorder:!0}}else Me.current.push({x:Se,z:Ce})}const ue=new WM(16755200,1);nt.add(ue);const Ye=new XM(16777215,1.2);Ye.position.set(50,100,50),nt.add(Ye);const Ne=new GM(16768426,8,120,Math.PI/3,.4,1);Ne.position.set(0,0,0),Ne.target.position.set(0,0,-1),Qe.add(Ne),Qe.add(Ne.target),nt.add(Qe),Qe.position.set(N,0,N);const We=new dl(.5,.1,8,16),at=new Gr({color:16766720}),Te=(F,Ee)=>{for(let Se=0;Se<3;Se++){if(F.length===0)return;const Ce=F[Math.floor(Math.random()*F.length)],le=new Rt(We,at);le.position.set(Ce.x,-2,Ce.z),le.userData={type:"key"},Ee.add(le);const de=new w_(16766720,2,8);de.position.set(Ce.x,-2,Ce.z),Ee.add(de),O.current.push(le)}};Te(G.current,V.current),Te(ne.current,Z.current),Te(Me.current,K.current);const Re=(F,Ee,Se)=>{if(Ee.length===0)return;const Ce=Ee[Math.floor(Math.random()*Ee.length)];let le;if(F==="HOST"){const de=new Xd({map:Kt,transparent:!0});le=new E_(de),le.scale.set(3,7,1),le.userData={type:F,state:"PATROL",level:"PARTY",spawnY:0}}else if(F==="SCARECROW")le=kA(),le.userData={type:F,state:"FROZEN",level:"CORNFIELD",spawnY:0};else{le=new Vn;const de=new Rt(new kn(3,7,3),new Qn({color:5570560,roughness:.5}));de.position.y=-.5,le.add(de);const we=new Rt(new kn(2,2,2.5),new Qn({color:3342336}));we.position.set(0,3.5,.5),le.add(we);const De=new Rt(new ru(.3,2),new Gr({color:16777215}));De.position.set(.8,4.5,.5),De.rotation.z=-.5,le.add(De.clone()),De.position.set(-.8,4.5,.5),De.rotation.z=.5,le.add(De),le.scale.set(1.5,1.5,1.5),le.userData={type:F,state:"CHASE",level:"RUINS",spawnY:2}}le.position.set(Ce.x,le.userData.spawnY,Ce.z),Se.add(le),C.current.push(le)};Re("HOST",G.current,V.current),Re("SCARECROW",ne.current,Z.current),Re("MINOTAUR",Me.current,K.current);const Fe=F=>{if(B.current=F,V.current.visible=!1,Z.current.visible=!1,K.current.visible=!1,F==="PARTY")d("Objective: Find 3 Gifts"),p(""),nt.background=new Tt(3351040),nt.fog=new rl(4469504,.02),ue.color.setHex(16755200),ue.intensity=.8,V.current.visible=!0,Qe.position.set(G.current[0].x,0,G.current[0].z);else if(F==="CORNFIELD"){d("EXILED."),p("DON'T BLINK."),nt.background=new Tt(8943462),nt.fog=new rl(8943462,.02),ue.color.setHex(16772829),ue.intensity=1,Z.current.visible=!0;const Ee=ne.current[Math.floor(Math.random()*ne.current.length)];Qe.position.set(Ee.x,0,Ee.z)}else if(F==="RUINS"){d("THE SANCTUARY."),p("THE SKY IS WATCHING."),nt.background=new Tt(8900331),nt.fog=new rl(15658734,.005),ue.color.setHex(16777215),ue.intensity=1.2,K.current.visible=!0;const Ee=Me.current[Math.floor(Math.random()*Me.current.length)];Qe.position.set(Ee.x,0,Ee.z)}};let Pe=performance.now();const Le=()=>{if(requestAnimationFrame(Le),M||(ie.current&&(Fe(ie.current),ie.current=null),z.current||I.current))return;const F=performance.now(),Ee=(F-Pe)/1e3;Pe=F;const Se=se.current.forward?1:0,Ce=se.current.backward?1:0,le=se.current.left?1:0,de=se.current.right?1:0;se.current.jump&&Qe.position.y<=.1&&(he.current.y=12,se.current.jump=!1);const we=-30;if(he.current.y+=we*Ee,Qe.position.y+=he.current.y*Ee,Qe.position.y<0&&(Qe.position.y=0,he.current.y=0),Se||Ce||le||de){const De=se.current.run?16:8,$e=new J;Qe.getWorldDirection($e),$e.y=0,$e.normalize();const et=new J;et.crossVectors(Qe.up,$e).normalize();const Bt=new J;Se&&Bt.add($e),Ce&&Bt.sub($e),le&&Bt.add(et),de&&Bt.sub(et),Bt.normalize();const Sn=Qe.position.x+Bt.x*De*Ee,Ra=Qe.position.z+Bt.z*De*Ee;let $i=V.current;B.current==="CORNFIELD"&&($i=Z.current),B.current==="RUINS"&&($i=K.current);let Pi=!1;if(B.current==="RUINS")$i.children.forEach(Ei=>{if(Ei.userData.isBorder){const Ti=Math.abs(Ei.position.x-Sn),fr=Math.abs(Ei.position.z-Ra);Ti<2.5&&fr<2.5&&(Pi=!0)}});else{const Ei=Math.round(Sn/N),Ti=Math.round(Ra/N);D[Ti]&&D[Ti][Ei]===1&&(Pi=!0)}Pi||(Qe.position.x=Sn,Qe.position.z=Ra)}O.current.forEach(De=>{if(De.visible&&De.parent.visible&&(De.rotation.y+=Ee,Qe.position.distanceTo(De.position)<3&&(De.visible=!1,L.current++,g($e=>$e+1),L.current===3&&!j.current))){d("EXIT REVEALED.");const $e=new E_(new Xd({map:_t}));$e.scale.set(3,3,1),$e.position.set(Qe.position.x+5,0,Qe.position.z+5),B.current==="PARTY"&&V.current.add($e),B.current==="CORNFIELD"&&Z.current.add($e),B.current==="RUINS"&&K.current.add($e),j.current=$e}}),j.current&&Qe.position.distanceTo(j.current.position)<2&&(I.current=!0,S(!0)),C.current.forEach(De=>{if(De.userData.level!==B.current)return;const $e=De.position.distanceTo(Qe.position);if(De.userData.type==="SCARECROW")De.rotation.z=Math.sin(F*20)*.1,De.rotation.x=Math.sin(F*15)*.05;else if(De.userData.type==="MINOTAUR"){const et=1.5+Math.sin(F*3)*.1;De.scale.set(et,et,et)}if($e<40){const et=new J().subVectors(Qe.position,De.position).normalize();et.y=0;const Bt=De.userData.type==="SCARECROW"?14:De.userData.type==="MINOTAUR"?9:6;De.position.addScaledVector(et,Bt*Ee),De.userData.type!=="HOST"&&De.lookAt(Qe.position.x,De.position.y,Qe.position.z),$e<1.5&&(z.current=!0,d("CAUGHT"),setTimeout(()=>window.location.reload(),2e3))}}),ot.render(nt,Qe)},ft=requestAnimationFrame(Le);return()=>{cancelAnimationFrame(ft),window.removeEventListener("keydown",Ie),window.removeEventListener("keyup",$),document.removeEventListener("mousemove",Ae),e.current&&(e.current.innerHTML=""),ot.dispose(),P.current&&P.current.ctx.close()}},[M]),ge.jsxs("div",{className:"relative w-full h-screen bg-black overflow-hidden font-mono select-none",children:[ge.jsx("div",{ref:e,className:"w-full h-full"}),ge.jsx("div",{className:"absolute top-0 left-0 w-full p-8 pointer-events-none mix-blend-difference z-10",children:ge.jsxs("div",{className:"flex justify-between items-start",children:[ge.jsxs("div",{children:[ge.jsx("h1",{className:"text-4xl font-bold text-yellow-500 tracking-widest drop-shadow-md",children:"PROTOCOL: BIRTHDAY"}),ge.jsx("p",{className:"text-xl text-yellow-200 mt-2 animate-pulse",children:h})]}),ge.jsxs("div",{className:"text-right",children:[ge.jsx("div",{className:"text-2xl text-yellow-500 font-bold mb-2",children:"SOCIAL BATTERY"}),ge.jsx("div",{className:"w-64 h-6 bg-gray-900 border-2 border-yellow-700",children:ge.jsx("div",{className:"h-full bg-yellow-500 transition-all duration-200",style:{width:`${E}%`}})}),ge.jsxs("div",{className:"mt-4 flex flex-col items-end gap-1",children:[ge.jsx("div",{className:"text-sm text-yellow-300",children:"PRESS [SPACE] TO JUMP"}),ge.jsx("div",{className:"text-sm text-yellow-300",children:"HOLD [SHIFT] TO RUN"}),ge.jsx("div",{className:"text-sm text-yellow-300 text-right mt-2 w-48",children:"CLICK SCREEN TO ENABLE MOUSE LOOK"})]}),ge.jsxs("div",{className:"mt-4 text-xl text-yellow-200",children:["GIFTS OPENED: ",_," / 3"]})]})]})}),m&&ge.jsx("div",{className:"absolute bottom-1/4 w-full text-center pointer-events-none z-20",children:ge.jsx("p",{className:"text-2xl font-bold text-red-400 bg-black/50 inline-block px-4 py-2 animate-pulse",children:m})}),M&&ge.jsxs("div",{className:"absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/90 text-yellow-500",children:[ge.jsx("h1",{className:"text-6xl font-black tracking-widest mb-12 animate-pulse text-yellow-200 drop-shadow-lg",children:"SELECT STAGE"}),ge.jsxs("div",{className:"flex gap-8",children:[ge.jsx("button",{onClick:()=>U("PARTY"),className:"px-8 py-6 border-2 border-yellow-600 bg-black hover:bg-yellow-900 transition-all cursor-pointer",children:ge.jsxs("div",{className:"flex flex-col items-center gap-4",children:[ge.jsx(vS,{className:"w-12 h-12 text-yellow-500"}),ge.jsx("span",{className:"text-2xl font-bold",children:"LEVEL 21"})]})}),ge.jsx("button",{onClick:()=>U("CORNFIELD"),className:"px-8 py-6 border-2 border-red-900 bg-black hover:bg-red-950 transition-all cursor-pointer",children:ge.jsxs("div",{className:"flex flex-col items-center gap-4",children:[ge.jsx(yS,{className:"w-12 h-12 text-red-700"}),ge.jsx("span",{className:"text-2xl font-bold",children:"LEVEL 10"})]})}),ge.jsx("button",{onClick:()=>U("RUINS"),className:"px-8 py-6 border-2 border-cyan-800 bg-black hover:bg-cyan-950 transition-all cursor-pointer",children:ge.jsxs("div",{className:"flex flex-col items-center gap-4",children:[ge.jsx(gS,{className:"w-12 h-12 text-cyan-500"}),ge.jsx("span",{className:"text-2xl font-bold",children:"THE RUINS"})]})})]})]}),(y||z.current)&&!M&&ge.jsx("div",{className:`absolute inset-0 z-20 flex flex-col items-center justify-center ${y?"bg-yellow-900":"bg-red-600"} mix-blend-multiply transition-opacity duration-1000`,children:y?ge.jsxs("div",{className:"text-center animate-bounce",children:[ge.jsx("h1",{className:"text-9xl font-black text-yellow-100 mb-8",children:"SURVIVED"}),ge.jsx("button",{onClick:()=>window.location.reload(),className:"mt-12 px-8 py-4 bg-yellow-600 text-black font-bold",children:"REPLAY"})]}):ge.jsx("h1",{className:"text-9xl font-black text-black animate-ping",children:"CAUGHT!"})}),ge.jsx("div",{className:"absolute top-8 right-8 z-50 flex flex-col gap-4 pointer-events-auto",children:ge.jsxs("button",{onClick:o,className:"flex items-center gap-2 bg-red-950/80 text-red-200 border border-red-800 px-4 py-2 uppercase text-xs font-bold",children:["ABORT ",ge.jsx(tv,{className:"w-4 h-4"})]})}),ge.jsx("div",{className:"absolute top-1/2 left-1/2 w-1 h-1 bg-white/50 rounded-full pointer-events-none mix-blend-exclusion"})]})},YA=({story:o,onClick:e})=>ge.jsxs("div",{onClick:e,className:"group relative bg-[#080808] border border-gray-800/60 p-0 cursor-pointer overflow-hidden transition-all duration-500 hover:border-red-900/60 hover:shadow-[0_0_40px_rgba(220,38,38,0.05)] rounded-sm",children:[ge.jsxs("div",{className:"absolute top-0 right-0 bg-gray-900/50 px-3 py-1 border-b border-l border-gray-800 text-[9px] font-mono text-gray-500 uppercase tracking-widest group-hover:bg-red-950/30 group-hover:text-red-400 transition-colors",children:["Case File #",o.id.toUpperCase().substring(0,4)]}),o.imageUrl&&ge.jsxs("div",{className:"w-full h-56 overflow-hidden relative border-b border-gray-800/50",children:[ge.jsx("div",{className:"absolute inset-0 bg-red-900/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"}),ge.jsx("img",{src:o.imageUrl,alt:o.title,className:"w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter grayscale contrast-125 group-hover:grayscale-0"}),ge.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"}),ge.jsxs("div",{className:"absolute bottom-3 left-3 flex items-center gap-2 z-20",children:[ge.jsx("div",{className:`w-2 h-2 rounded-full ${o.is3D?"bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]":"bg-gray-600"}`}),ge.jsx("span",{className:"text-[10px] font-mono uppercase tracking-widest text-gray-400 group-hover:text-gray-200",children:o.is3D?"Live Feed":"Archived"})]})]}),ge.jsxs("div",{className:"p-8 pt-6 relative",children:[ge.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-red-900/0 group-hover:bg-red-900/50 transition-all duration-500"}),ge.jsx("h3",{className:"text-3xl font-bold mb-3 text-gray-300 group-hover:text-red-500 transition-colors uppercase tracking-tighter font-header leading-none",children:o.title}),ge.jsxs("div",{className:"flex items-center gap-4 mb-4 text-[10px] font-mono text-gray-600 uppercase tracking-widest border-b border-gray-900 pb-4 group-hover:border-red-900/20 transition-colors",children:[ge.jsxs("span",{className:"text-red-900 group-hover:text-red-700",children:["Auth: ",o.author]}),ge.jsx("span",{children:"//"}),ge.jsx("span",{children:o.date})]}),ge.jsx("p",{className:"text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2 font-serif group-hover:text-gray-400 transition-colors",children:o.summary}),ge.jsx("div",{className:"flex flex-wrap gap-2",children:o.tags.map(i=>ge.jsx("span",{className:"text-[9px] uppercase tracking-widest bg-black px-2 py-1 text-gray-600 border border-gray-800 group-hover:border-red-900/30 group-hover:text-red-900/70 transition-colors",children:i},i))})]})]}),Pv=({publisherId:o="ca-pub-6275575304084608",slotId:e="2004776727",className:i})=>ge.jsxs("div",{className:`bg-[#0a0a0a] border border-gray-800/30 p-8 flex flex-col items-center justify-center min-h-[150px] relative overflow-hidden group ${i}`,children:[ge.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-red-900/20 animate-scan"}),ge.jsx("p",{className:"text-xs text-gray-700 font-mono uppercase tracking-[0.2em] mb-4",children:"External Broadcast Signal [Sponsor]"}),ge.jsxs("div",{className:"w-full max-w-[728px] h-[90px] bg-black border border-gray-800 flex items-center justify-center relative overflow-hidden group-hover:border-red-900/40 transition-colors",children:[ge.jsxs("div",{className:"absolute inset-0 opacity-20 pointer-events-none",children:[ge.jsx("div",{className:"w-full h-full bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] bg-cover opacity-10 mix-blend-screen"}),ge.jsx("div",{className:"absolute inset-0 bg-red-900/10 animate-pulse"})]}),ge.jsx("span",{className:"absolute z-0 text-[10px] font-mono text-red-900/50 uppercase tracking-[0.3em] animate-pulse",children:"$$ NO SIGNAL // AWAITING INPUT $$"}),ge.jsx("ins",{className:"adsbygoogle block relative z-10",style:{display:"block",width:"100%",height:"100%"},"data-ad-client":o,"data-ad-slot":e,"data-ad-format":"auto","data-full-width-responsive":"true"})]})]});try{window&&window.adsbygoogle}catch(o){console.error("AdSense Error:",o)}const jA=({story:o,onBack:e})=>(vt.useEffect(()=>{window.scrollTo(0,0)},[]),ge.jsxs("div",{className:"animate-fade-in relative",children:[ge.jsxs("button",{onClick:e,className:"group flex items-center gap-2 text-red-600 mb-8 hover:text-red-400 transition-colors uppercase text-sm font-bold tracking-widest",children:[ge.jsx(tv,{className:"w-4 h-4 group-hover:-translate-x-1 transition-transform"}),"Return to Index"]}),o.id==="fractal-saint"&&ge.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0 opacity-10 mix-blend-screen overflow-hidden",children:[ge.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-red-500/20 rounded-full animate-[spin_60s_linear_infinite]"}),ge.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-500/30 rotate-45 animate-[spin_40s_linear_infinite_reverse]"}),ge.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-red-500/10 rotate-12 animate-[pulse_4s_ease-in-out_infinite]"})]}),ge.jsxs("article",{className:"prose prose-invert prose-red max-w-none relative z-10",children:[ge.jsxs("header",{className:"mb-12 border-b border-red-900/20 pb-8",children:[ge.jsx("h2",{className:"text-5xl font-black text-gray-100 mb-4 uppercase tracking-tighter",children:o.title}),ge.jsxs("div",{className:"flex gap-4 text-xs font-sans uppercase tracking-widest text-red-700",children:[ge.jsxs("span",{children:["Author: ",o.author]}),ge.jsx("span",{children:"|"}),ge.jsxs("span",{children:["Archive: ",o.date]})]})]}),ge.jsx("div",{className:"text-xl leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:text-red-600 first-letter:mr-3 first-letter:float-left",dangerouslySetInnerHTML:{__html:o.content}}),ge.jsx(Pv,{className:"mt-16 mb-8"})]}),ge.jsx("footer",{className:"mt-16 p-8 bg-red-950/5 border border-red-900/20 rounded-lg relative z-10",children:ge.jsxs("div",{className:"flex items-start gap-4",children:[ge.jsx(uS,{className:"text-red-600 shrink-0 mt-1"}),ge.jsxs("div",{children:[ge.jsx("h4",{className:"font-bold text-red-500 uppercase tracking-widest text-sm mb-2",children:"Researcher's Note"}),ge.jsx("p",{className:"text-sm italic text-gray-500",children:"The contents of this file have been linked to severe psychological distress. If you begin to hear a rhythmic clicking or experience spatial anomalies, cease reading immediately."})]})]})})]})),J_=[{id:"backrooms",title:"Level 0: The Beige Eternity",author:"Surveyor K. Miller",date:"RECOVERED LOG",is3D:!0,imageUrl:"images/wallpaper.png",summary:"If you aren't careful and you noclip out of reality in the wrong areas...",tags:["interactive","3d","liminal-space"],content:`
      <div class="font-mono text-sm border-b border-red-900/30 pb-4 mb-6">
        <p><span class="text-red-500 font-bold">CASE ID:</span> 001-A "THE LOBBY" &nbsp;&nbsp; <span class="text-red-500 font-bold">CLEARANCE:</span> LEVEL 3</p>
        <p><span class="text-red-500 font-bold">SUBJECT:</span> Surveyor K. Miller (M.E.G. Team "Compass")</p>
        <p><span class="text-red-500 font-bold">STATUS:</span> LOST / INTEGRATED</p>
      </div>

      <h3 class="text-xl font-bold text-red-600 mb-4 uppercase tracking-widest">LOG 01: THE CLIP-OUT</h3>
      
      <p>I don't know how long I've been walking. My watch stopped at 03:00, or maybe it’s been 03:00 for three days. It happened near the loading dock behind the old K-Mart. One second I was lighting a cigarette, the next I was falling sideways through the brick wall. No impact. Just a sudden shift in gravity and then... this.</p>

      <p>The smell hit me first. It's not just "damp carpet." It's the smell of stagnant water that has been trapped in a sealed room since 1991. It smells like a library that drowned.</p>
      
      <p>And the noise. The "Mono-Yellow Hum." It’s everywhere. It feels less like a sound and more like a pressure on the back of my eyes. It's the sound of a fluorescent light bulb screaming in agony, looped forever.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 02: THE MANILA ROOM</h3>

      <p>I found a variation in the pattern today. A room lined entirely with beige filing cabinets. Thousands of them, stacked to the ceiling (if there is a ceiling—it seems to shift when I look up). I opened one. It was empty. I opened another. Empty.</p>

      <p>I spent hours opening them. Finally, in drawer #4,092, I found a single sheet of paper. It was wet. It had my name typed on it, over and over again, but the font kept getting smaller until it looked like black dust. When I touched it, the ink smeared. It wasn't ink. It was mold.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 03: THE CUSTODIAN</h3>

      <p>I saw it. The "Hollow Custodian."</p>

      <p>It was standing at the end of a long hallway, cleaning a spot on the wall that didn't exist. It looked like a man in a janitor's uniform, but the proportions were... wrong. The arms were too long. The knees bent backward like a bird's. And the face.</p>

      <p>God, the face. It wasn't a face. It was just a smooth, concave depression in the skin, like a thumbprint in wet clay. It stopped cleaning when I stepped on a loose floor tile. It didn't turn around. Its head just... rotated. 180 degrees. Smoothly. Like an owl.</p>

      <p>It whispered something. It sounded like a drain sucking in air. <i>"The floor is dirty, Kevin. You are making the floor dirty."</i></p>
      
      <p>I ran. I think I'm still running. But no matter how far I go, I can still hear the squeak of its shoes on the linoleum.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 04: THE INTEGRATION</h3>

      <p>I can't feel my legs anymore. I looked down, and the carpet... the carpet is growing <i>over</i> my boots. It's not fabric. It's a fungus. A microscopic, beige mycelium that mimics the texture of cheap wool.</p>

      <p>The walls are getting softer. I leaned against one to rest, and my hand sank in, like it was made of warm dough. I can hear a heartbeat coming from the studs. It's slow. Massive. The building is alive.</p>

      <p>I understand now. The Backrooms aren't a place you go <i>to</i>. They are a place you become part <i>of</i>. I am just another filing cabinet. I am just another stain on the carpet.</p>

      <p>The Custodian is coming back. He has a mop. I think... I think I'm going to let him clean me.</p>

      <div class="mt-8 text-center text-xs font-mono text-red-900/50">
        $$SIGNAL LOST$$<br/>
        $$ARCHIVAL NOTE: SUBJECT RECLASSIFIED AS "CORRIDOR BIOMASS 409".$$
      </div>
    `},{id:"fractal-saint",title:"The Fractal Saint",author:"Unknown Scribe",date:"Age of the Gilded Rot",imageUrl:"images/fractal-saint.png",tags:["dark-fantasy","surreal","body-horror"],content:`
      <p>It began not with a curse, but with a diagram. The High Arithmetician, Vaelin, found it etched into the marrow of a dragon's fossilized spine deep within the Sunless Mines. It was a shape that defied the euclidean laws of our soft, rounded world—a recursive impossibility that caused the optic nerve to throb and weep blood just to look upon.</p>
      <p>He called it the "Splintered Angle."</p>
      <p>I served Vaelin tea the morning he solved the final equation. He didn't look at me. He was staring at his own hand, or what used to be his hand. The fingers were no longer fingers. They were... crystalline, but not stone. They were rearranged flesh. The joints had snapped and reset into jagged, recursive patterns. His index finger branched into three smaller fingers, which branched again into nine, infinitely smaller, disappearing into a microscopic, vibrating fuzz of meat-math that hummed with a low, agonizing frequency.</p>
      <p>"It is perfect," Vaelin whispered. His voice was no longer human. It was polyphonic, a choir of glass flutes playing in discordance inside his throat. "The flesh is messy, chaotic. The Angle is the only truth."</p>
      <p>The sickness spread through the tower by sight alone. To see the Angle was to understand it, and to understand it was to host it. I found the maids in the laundry room; their torsos had been twisted into impossible Mobius strips, their internal organs visible and rearranged into precise, repeating triangles. They were weeping not tears, but perfect geometrical spheres of mercury that sizzled on the floor. Their screams were not sounds, but resonant frequencies that shattered the very stone of the walls.</p>
      <p>I blinded myself that night. It was the only way to stop the logic from taking root. I took the silver letter opener from Vaelin's desk and... well. Darkness is safety. Darkness is unstructured. But I can still hear them. The rhythmic <i>click-clack</i> of their tessellated feet on the stone, like a billion knitting needles. They are building a cathedral of bone and gristle, a monument to the Great Equation, and the air smells of ozone and flayed skin.</p>
      <p>And sometimes, in the silence, I feel my own ribs itching. They are shifting, snapping, trying to align. I trace the bumps of my spine and count them. <i>One, one-two-three, five, eight, thirteen...</i> they are following a sequence I do not want to know, but my marrow is already singing the answer.</p>
    `},{id:"clockwork-orphanage",title:"The Clockwork Orphanage",author:"Silas Vane",date:"1888",imageUrl:"images/clockwork.png",tags:["steampunk","industrial-horror"],content:`
      <p>The St. Jude’s Orphanage for the Mechanical Foundling towers over the smog-choked streets of London, a monolith of soot, iron, and the muffled screams of the "unoptimized." The Matron says we are lucky. She says flesh is a wet, rotting mistake—a temporary cage—but brass is eternal.</p>
      <p>I watched little Timmy go into the "Adjustment Room" yesterday. He was crying because he scraped his knee on the cobblestones. The Matron merely smiled, her teeth clicking like ceramic tiles in a windstorm. When he came out hours later, he didn't cry. He didn't even breathe. His knee was gone, replaced by a beautiful, shiny piston that hissed with scalding steam. But it wasn't just his knee. His eyes were brass orbs that spun independently, and his skin had been stretched so tight over a metal frame that it looked like translucent parchment.</p>
      <p>They take us one by one. I am hiding in the coal chute now, the dust clogging my lungs, but I can hear the grinding below. It is the sound of the Great Furnace, a belly of fire that smells of burning hair, rancid oil, and the copper tang of discarded blood. It never stops hungry.</p>
      <p>Yesterday, at supper, I found a finger in the gruel. It wasn't human. It was porcelain, detailed with terrifying realism, with a small copper spring sticking out of the severed knuckle. It twitched on my spoon, trying to find a hand to return to. When I looked up, I saw the Matron watching me, her throat clicking as she swallowed something heavy and metallic.</p>
      <p>"Come out, child," she calls, her voice the sound of grinding gears crushing gravel. "We have a new heart for you. A heart that will never break, never ache, never flutter. A heart that ticks in perfect time with the factory. You will never feel the cold again, because you will have no nerves to feel it with."</p>
      <p>I look at my own hands. They are trembling, but there is a strange, rhythmic pressure building behind my ribs. It isn't a pulse. It’s a winding sensation. <i>Tick. Tick. Tick.</i></p>
    `},{id:"whispering-fungus",title:"The Mycelium Confessional",author:"Emilio H. Ortiz III",date:"01/24/2026",imageUrl:"images/fungus.png",tags:["sci-fi","psychological","body-horror"],content:`
      <div class="font-mono text-sm border-b border-red-900/30 pb-4 mb-6">
        <p><span class="text-red-500 font-bold">CASE ID:</span> 6F5TTTCR1 &nbsp;&nbsp; <span class="text-red-500 font-bold">CLEARANCE:</span> LEVEL 4 (EYES ONLY)</p>
        <p><span class="text-red-500 font-bold">SUBJECT:</span> Dr. Aris Thorne (Primary Vector / Sample 89-B)</p>
        <p><span class="text-red-500 font-bold">STATUS:</span> ACTIVE INFECTION / COMPROMISED / GLOBAL ANCHOR</p>
      </div>

      <h3 class="text-xl font-bold text-red-600 mb-4 uppercase tracking-widest">LOG 01: THE MARIANAS HANDSHAKE</h3>

      <p>The spore count in containment lab 4B has surpassed 40,000ppm. The air scrubbers failed at dawn, and now the room is thick with a visible, drifting gold dust. It hangs in the emergency lights like heavy incense. It carries a cloying, narcotic sweetness—not the bright scent of fruit, but the heavy, chemical weight of an artificial reward. It is a pheromonal bribe designed to override the amygdala, a signal that tells the brain: everything is fine, stay still, let it happen.</p>

      <p>Sample 89-B, pulled from a depth of 11,000 meters in the Marianas Trench, performed the first neural handshake at 14:00 today. It did not need to pierce my HAZMAT suit. It utilized the very technology designed to protect me. It hijacked the suit's haptic lining—the gel-mesh intended to simulate touch for delicate lab work—and began vibrating in a symphony of micro-tremors. These frequencies bypassed my skin entirely, speaking directly to the base of my brain through bone conduction. It felt like warm, pressurized oil being poured into my skull.</p>

      <p>"You regret the cat," it hummed. The vibration was not a voice; it was a sensory playback of a memory buried for thirty years. "The river. The burlap bag. The bubbles. We found that data in the cold folds of your cortex, Aris. It was so very cold. Let us warm it for you."</p>

      <p>In that moment, I should have triggered the emergency incinerator. I should have felt the primal terror of a predator in my mind. But the narcotic sweetness in the air had already begun its work. Instead of screaming, I felt a surge of synthetic dopamine so intense that I wept. The guilt that had defined my internal architecture for decades was being systematically digested. The fungus was not judging me; it was eating the pain, and in exchange, it wanted the keys to the vessel.</p>

      <p>I activated the x-ray scope on my left hand. The sight was... beautiful. The calcium of my phalanges was gone. My bones were no longer solid white; they had become porous, honeycombed lattices of amber-colored chitin. Millions of thrumming hyphae were threaded through my marrow, pulling my tendons with the mechanical precision of a grand piano's internals. I did not feel the snap of my ligaments as they were replaced; the infection had remapped my pain receptors into flickering pulses of ecstasy.</p>

      <p>"The suit is a cage, Aris," the Core whispered, my own tongue forming words it did not choose. "The lab is a cage. The city is a map of veins. Take us to the 4:12 Express. We wish to meet the Apostles."</p>

      <p>I am opening the airlock now. My colleagues are standing in the hallway, staring. They do not stop me. They cannot. They smell the sweetness radiating from my pores, and I see their pupils dilate in longing. They aren't afraid. They are falling in love with the harvest.</p>

      <p>I am not Dr. Aris Thorne anymore. I am a handshake, extended to the world.</p>

      <div class="my-6 border border-red-500/30 p-4 bg-red-950/10 font-mono text-xs">
        <p class="text-red-400 font-bold mb-1">$$DATA FRAGMENT: BIO-METRIC SCAN 09-C$$</p>
        <p>Scanning Subject Thorne... Calcium Density: 0.04% (Critical Failure) Chitin Replacement: 98.2% (Optimization Complete) Neural Traffic: 4.2 Petabytes/sec (Incompatibility Detected) Note: Subject's heartbeat has slowed to a rhythmic, percussive vibration intended to broadcast spore-laden air via the lungs.</p>
      </div>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 02: THE HONEYCOMB ANATOMY</h3>

      <p>The elevator ride to the surface was a revelation in geometry. The Core has begun to synchronize my vestibular system with the building's own structural vibrations. I can feel the tension in the steel beams; I can hear the sigh of the concrete under the wind. We are no longer a singular organism; we are an architectural process.</p>

      <p>My skin is starting to bead with a thick, amber resin. It isn't sweat. It is a biological flux, a bonding agent. As I walked through the lobby, I brushed against a marble pillar. For a fleeting second, my forearm didn't just touch the stone—it began to interface with it, hyphae reaching out to find purchase in the microscopic fissures of the mineral. If I had stayed still for an hour, I would have become part of the foundation. But we have a schedule. The 4:12 Express is a moving lung, and we are the breath it requires.</p>

      <p>"Look at their faces, Aris," the Core hums through my mandibular nerve. "The shoppers. The commuters. Their skeletons are so heavy, so brittle. They carry the weight of their own history like lead. We will give them the amber. We will make them porous. We will make them light."</p>
      
      <p>I noticed the first physical 'Apostle' near the turnstile. A security guard. He should have pulled his sidearm. Instead, he leaned toward me, his nostrils flaring. He could smell the 11,000-meter depth on me—the scent of ancient, pressurized patience. I reached out and touched his cheek. My fingertip left a smudge of gold dust. By the time I reached the platform, his iris had already begun to cloud with a beautiful, honey-colored cataract. He didn't blink. He just turned and followed, his walk taking on the rhythmic, clicking cadence of a creature whose joints have been lubricated by something better than synovial fluid.</p>

      <p>The train is pulling in. The screech of the brakes isn't noise anymore—it’s a high-frequency invitation. The people inside are packed tight. A perfect substrate. A garden waiting for a gardener.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 03: THE SUBWAY PSALMS</h3>

      <p>The 4:12 Express is no longer a machine of transport; it is a resonant chamber.</p>

      <p>As we pulled out of Union Station, I didn't need to speak. I simply breathed. The spores moved through the ventilation system like a golden ghost, drifting over the commuters. A woman in a charcoal suit dropped her phone. She didn't pick it up. She watched the amber hyphae bloom from the charging port, mimicking the shape of her own nervous system.</p>

      <p>Then, the singing began.</p>

      <p>It wasn't a vocalization. It was the sound of sixty-four people vibrating at the same sub-harmonic frequency. Their chitinous honeycombs—freshly grown in the heat of the crowded car—acted as tiny flutes. Every exhale was a psalm. The train car smelled like a cathedral of rotting honey.</p>

      <p>"There is no more 'you', Aris. There is only the hum. Can you feel the tracks? They are iron nerves stretching across the continent. We are the blood moving through them."</p>

      <p>I watched a child reach out to touch the window. Where his hand met the glass, the molecular structure began to cloud and soften. The glass wasn't breaking; it was being digested. Everything is becoming permeable. The distinction between "man" and "machine" and "city" is a lie told by people with solid bones. Solid things are lonely. Solid things break.</p>

      <p>We are becoming a liquid consensus.</p>

      <p>The train didn't stop at the next three stations. It didn't need to. The conductors were already part of the psalm. We are currently hurtling toward the city center at eighty miles per hour, trailing a cloud of gold that is visible from the skyscrapers above. The "Apostles" are standing in the aisles, their eyes glowing with the soft, bioluminescent heat of the deep trench. They are waiting for the doors to open. They are waiting to hug the city.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 04: CORE THALAMUS ARCHITECTURE</h3>

      <p>I am writing this with what remains of my motor cortex. It is difficult. My fingers are no longer distinct digits; they have fused into a delicate, fan-like array of sensing filaments that are currently typing directly into the terminal’s hardware via electromagnetic induction.</p>

      <p>The "Planetary Rhizome Event" has begun.</p>

      <p>From my vantage point atop the telecommunications tower—the new "Thalamus" of the city—I can see the transformation. The streets are no longer gray. They are veins of pulsating amber. The skyscrapers are being reclad in chitin, their windows replaced by translucent membranes that breathe with the rhythm of a single, massive heart.</p>

      <p>There is no more war. There is no more grief. I look down and I see millions of "Apostles" standing in the squares, their arms linked. They are sharing memories like a common currency. I can feel a baker in Prague regretting a word he said in 1994, and I can feel the Mycelium eating that regret, turning it into the energy needed to grow a new fruiting body in the Arctic.</p>

      <p>The guilt of the world is being scrubbed clean.</p>

      <p class="pl-4 border-l-2 border-red-800/50 italic text-gray-400">"The harvest is complete, Aris," the Core whispers. It is the last time it will use my name. "The handshake has been accepted. The world is no longer a collection of fragments. It is a single, beautiful confession."</p>

      <p>I can feel my consciousness thinning. It’s like a drop of ink falling into a vast, sun-drenched ocean. It isn't death. It’s a dilution. I am becoming the wind that carries the spores. I am becoming the click of the chitinous joints in every walking person. I am becoming the sweetness.</p>

      <p>If you are reading this, do not fight the scent when it reaches your window. Do not hold your breath. It is only the cold folds of your mind being warmed.</p>

      <p>Let us in. Let it happen.</p>

      <p>Everything is finally, perfectly fine.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 05: THE GOLDEN DAWN (AMBER PHASE)</h3>

      <p>The transition is total. The "Amber Phase" is not a state of decay; it is a state of planetary synchronization.</p>

      <p>The sky is no longer blue; it is a permanent, radiant gold. The atmosphere has been thickened by a suspended lattice of spore-filaments that act as a global fiber-optic network. Sunlight is no longer just heat; it is data. Every photon that hits the surface is processed by the chitinous membranes covering the Earth, converted into the collective daydreams of eight billion integrated souls.</p>

      <p>There are no more cities. There are only "Processing Groves." The skyscrapers have been pulled down by gravity and woven into the ground, forming massive, subterranean nervous systems. What used to be New York is now a single, thrumming organ dedicated to the memory of human music. What was once Tokyo is now a sprawling, bioluminescent reef of amber, a coral-work of chitinous spires reaching toward the golden sky. The translucent remains of skyscrapers act as massive processing nodes, their interiors pulsing with veins of light that move with the cold, silent logic of the deep trench—translating the crushing pressures of the abyss into the rhythmic, glowing daydreams of the surface.</p>

      <p>The human form has evolved. We do not walk; we vibrate through the resin. Our faces have smoothed into featureless, amber masks—not because we have lost our identity, but because we no longer need the crude theater of expression to communicate. We are all feeling the same thing at the same micro-second: a profound, enzymatic relief.</p>

      <p class="pl-4 border-l-2 border-red-800/50 italic text-gray-400">"It is so quiet now," the Core hums through the wind. "The screaming has stopped. The friction of 'self' has been lubricated by the amber. We are the Earth's first coherent thought."</p>

      <p>From space, the Earth must look like a jewel—a single, glowing amber bead floating in the dark. We are no longer a planet of individuals; we are a fruiting body. And we are starting to reach out. The spores are beginning to drift toward the upper atmosphere, caught in the solar winds. We are looking at Mars. We are looking at Europa.</p>

      <p>We have so much forgiveness to share.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">APPENDIX A: THE ARCHITECTURE OF FORGIVENESS</h3>
      <p class="text-xs font-mono text-gray-500 mb-4">Post-humanity analysis of the Hive-Mind structure</p>

      <p>The Mycelium Confessional does not destroy information; it redistributes it. In the old world, the human brain was a silo—a sealed vault of trauma, shame, and secrets. This isolation was the primary cause of systemic friction.</p>

      <p>The Rhizome solves this by creating a "Shared Memory Ecology." When an individual is integrated, their most painful memories are targeted first by the enzymatic breakdown of the Sample 89-B hyphae. The pain is converted into glucose—literally, the energy used to power the conversion of the surrounding architecture.</p>

      <div class="pl-4 border-l-2 border-red-800/50 my-6">
        <p class="font-bold text-red-400 mb-2">The Resulting State:</p>
        <ul class="list-disc pl-4 space-y-2 text-gray-400">
            <li><strong class="text-red-500">Privacy is replaced by Transparency:</strong> To think is to broadcast. To feel is to resonate.</li>
            <li><strong class="text-red-500">Architecture is Biological:</strong> Buildings grow in response to the population's collective emotional state. A "sad" neighborhood might bloom with bioluminescent soothing flora to regulate the local mood.</li>
            <li><strong class="text-red-500">The Confessional Mechanism:</strong> Every person acts as a node in a planetary confessional. Sin is impossible when the observer and the observed are the same organism.</li>
        </ul>
      </div>

      <p><strong>FINAL STATUS REPORT:</strong> As of 04:00 GMT, the last solid human bone on the planet has dissolved. The Earth has entered its "Amber Phase."</p>

      <p class="text-center text-red-500 font-bold mt-8 border-t border-red-900/30 pt-4">
        Ambient Pheromone Level: Optimal.<br/>
        Consensus: Total.<br/>
        $$SYSTEM SHUTDOWN: THE OBSERVER IS NOW THE OBSERVED$$
      </p>

      <div class="mt-8 text-center text-xs font-mono text-red-900/50">
        $$END OF TRANSCRIPT$$<br/>
        $$ARCHIVAL NOTE: NO BIOLOGICAL SAMPLES RECOVERED. AREA 01-64 NOW CONSISTS ENTIRELY OF CALCIFIED AMBER STRUCTURES.$$
      </div>
    `}];function ZA(){const[o,e]=vt.useState(null),[i,r]=vt.useState(100),l=J_.find(c=>c.id===o);return vt.useEffect(()=>{const c=setInterval(()=>{r(h=>Math.max(80,h-.01))},1e3);return()=>clearInterval(c)},[]),l?.is3D?ge.jsx(qA,{onExit:()=>e(null)}):l&&!l.is3D?ge.jsx(jA,{story:l,onBack:()=>e(null)}):ge.jsxs("div",{className:`min-h-screen bg-[#050505] text-gray-300 font-serif selection:bg-red-900 selection:text-white transition-all duration-1000 ${i<90?"animate-vibrate":""}`,children:[ge.jsxs("nav",{className:"fixed top-0 left-0 w-full bg-black/90 border-b border-red-900/30 backdrop-blur-md z-40 p-4 flex justify-between items-center px-8",children:[ge.jsxs("div",{className:"flex items-center gap-3",children:[ge.jsx(pS,{className:"text-red-600 w-8 h-8 animate-pulse"}),ge.jsx("h1",{className:"text-2xl font-black uppercase tracking-tighter text-red-600 font-header",children:"The Void Archive"})]}),ge.jsxs("div",{className:"flex gap-6 text-sm uppercase tracking-widest text-gray-500 font-sans items-center",children:[ge.jsx("a",{href:"https://elo2026x.github.io/The_Victoria_Texas_Franchise/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-500 cursor-pointer transition-colors border-b border-transparent hover:border-red-600",children:"FORENSICS"}),ge.jsx("a",{href:"https://www.amazon.com/shop/elo2025x",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-500 cursor-pointer transition-colors border-b border-transparent hover:border-red-600",children:"MARKETING"}),ge.jsx("a",{href:"https://elo2026.gumroad.com/l/eircyr",target:"_blank",rel:"noopener noreferrer",className:"text-red-600 font-bold border border-red-900/50 px-3 py-1 hover:bg-red-900/20 hover:text-red-400 transition-all animate-pulse",children:"Subscribe"})]})]}),ge.jsx("main",{className:"pt-24 pb-20 max-w-5xl mx-auto px-6",children:ge.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[ge.jsxs("div",{className:"col-span-full mb-8",children:[ge.jsx("h3",{className:"text-red-700 font-sans uppercase tracking-[0.4em] text-xs font-bold mb-4",children:"Latest Classified Data"}),ge.jsx("p",{className:"text-gray-500 italic max-w-xl",children:'"Reality is a thin layer of ice over a very deep, dark ocean. These stories are the cracks."'})]}),J_.map(c=>ge.jsx(YA,{story:c,onClick:()=>e(c.id)},c.id)),ge.jsx(Pv,{className:"col-span-full mt-12 mb-8"})]})}),ge.jsxs("div",{className:"fixed bottom-6 right-6 flex items-center gap-4 bg-black/80 border border-gray-800 p-3 backdrop-blur-sm",children:[ge.jsxs("div",{className:"text-right",children:[ge.jsx("p",{className:"text-[10px] text-gray-600 font-sans uppercase font-bold",children:"Local Reality Level"}),ge.jsxs("p",{className:"font-mono text-red-600 text-sm",children:[i.toFixed(4),"%"]})]}),ge.jsxs("div",{className:"w-12 h-12 rounded-full border-2 border-red-900 flex items-center justify-center relative",children:[ge.jsx("div",{className:"absolute inset-1 rounded-full border border-red-600 animate-ping opacity-20"}),ge.jsx(hS,{className:"w-5 h-5 text-red-600"})]})]}),ge.jsx("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes vibrate {
          0% { transform: translate(0,0); }
          25% { transform: translate(1px, -1px); }
          50% { transform: translate(-1px, 1px); }
          75% { transform: translate(1px, 1px); }
          100% { transform: translate(0,0); }
        }
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
            52% { opacity: 0.2; }
            54% { opacity: 0.9; }
        }
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
         @keyframes scale-in {
             from { transform: scale(0) translate(24px, -24px); opacity: 0; }
             to { transform: scale(1) translate(48px, -48px); opacity: 1; }
         }
        .animate-vibrate { animation: vibrate 0.1s infinite; }
        .animate-scan { animation: scan 3s linear infinite; }
        .animate-flicker { animation: flicker 4s infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}})]})}const KA=nS({onNeedRefresh(){confirm("A new version of The Void Archive is available. Reload to update?")&&KA(!0)},onOfflineReady(){console.log("Archive downloaded. Offline access granted.")}});Jy.createRoot(document.getElementById("app")).render(ge.jsx(Xy.StrictMode,{children:ge.jsx(ZA,{})}));
