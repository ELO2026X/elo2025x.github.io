(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function tv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ch={exports:{}},Fo={};var G0;function Wy(){if(G0)return Fo;G0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Fo.Fragment=e,Fo.jsx=i,Fo.jsxs=i,Fo}var V0;function qy(){return V0||(V0=1,ch.exports=Wy()),ch.exports}var Se=qy(),uh={exports:{}},ct={};var k0;function Yy(){if(k0)return ct;k0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.iterator;function S(U){return U===null||typeof U!="object"?null:(U=y&&U[y]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function x(U,te,_e){this.props=U,this.context=te,this.refs=M,this.updater=_e||E}x.prototype.isReactComponent={},x.prototype.setState=function(U,te){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,te,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function O(){}O.prototype=x.prototype;function I(U,te,_e){this.props=U,this.context=te,this.refs=M,this.updater=_e||E}var L=I.prototype=new O;L.constructor=I,w(L,x.prototype),L.isPureReactComponent=!0;var z=Array.isArray;function F(){}var P={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function R(U,te,_e){var Ae=_e.ref;return{$$typeof:o,type:U,key:te,ref:Ae!==void 0?Ae:null,props:_e}}function C(U,te){return R(U.type,te,U.props)}function G(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function se(U){var te={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(_e){return te[_e]})}var re=/\/+/g;function pe(U,te){return typeof U=="object"&&U!==null&&U.key!=null?se(""+U.key):te.toString(36)}function ue(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(F,F):(U.status="pending",U.then(function(te){U.status==="pending"&&(U.status="fulfilled",U.value=te)},function(te){U.status==="pending"&&(U.status="rejected",U.reason=te)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function N(U,te,_e,Ae,Re){var Q=typeof U;(Q==="undefined"||Q==="boolean")&&(U=null);var fe=!1;if(U===null)fe=!0;else switch(Q){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(U.$$typeof){case o:case e:fe=!0;break;case _:return fe=U._init,N(fe(U._payload),te,_e,Ae,Re)}}if(fe)return Re=Re(U),fe=Ae===""?"."+pe(U,0):Ae,z(Re)?(_e="",fe!=null&&(_e=fe.replace(re,"$&/")+"/"),N(Re,te,_e,"",function(ze){return ze})):Re!=null&&(G(Re)&&(Re=C(Re,_e+(Re.key==null||U&&U.key===Re.key?"":(""+Re.key).replace(re,"$&/")+"/")+fe)),te.push(Re)),1;fe=0;var Oe=Ae===""?".":Ae+":";if(z(U))for(var Xe=0;Xe<U.length;Xe++)Ae=U[Xe],Q=Oe+pe(Ae,Xe),fe+=N(Ae,te,_e,Q,Re);else if(Xe=S(U),typeof Xe=="function")for(U=Xe.call(U),Xe=0;!(Ae=U.next()).done;)Ae=Ae.value,Q=Oe+pe(Ae,Xe++),fe+=N(Ae,te,_e,Q,Re);else if(Q==="object"){if(typeof U.then=="function")return N(ue(U),te,_e,Ae,Re);throw te=String(U),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return fe}function H(U,te,_e){if(U==null)return U;var Ae=[],Re=0;return N(U,Ae,"","",function(Q){return te.call(_e,Q,Re++)}),Ae}function ne(U){if(U._status===-1){var te=U._result;te=te(),te.then(function(_e){(U._status===0||U._status===-1)&&(U._status=1,U._result=_e)},function(_e){(U._status===0||U._status===-1)&&(U._status=2,U._result=_e)}),U._status===-1&&(U._status=0,U._result=te)}if(U._status===1)return U._result.default;throw U._result}var be=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Me={map:H,forEach:function(U,te,_e){H(U,function(){te.apply(this,arguments)},_e)},count:function(U){var te=0;return H(U,function(){te++}),te},toArray:function(U){return H(U,function(te){return te})||[]},only:function(U){if(!G(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ct.Activity=g,ct.Children=Me,ct.Component=x,ct.Fragment=i,ct.Profiler=l,ct.PureComponent=I,ct.StrictMode=r,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ct.__COMPILER_RUNTIME={__proto__:null,c:function(U){return P.H.useMemoCache(U)}},ct.cache=function(U){return function(){return U.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(U,te,_e){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ae=w({},U.props),Re=U.key;if(te!=null)for(Q in te.key!==void 0&&(Re=""+te.key),te)!K.call(te,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&te.ref===void 0||(Ae[Q]=te[Q]);var Q=arguments.length-2;if(Q===1)Ae.children=_e;else if(1<Q){for(var fe=Array(Q),Oe=0;Oe<Q;Oe++)fe[Oe]=arguments[Oe+2];Ae.children=fe}return R(U.type,Re,Ae)},ct.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ct.createElement=function(U,te,_e){var Ae,Re={},Q=null;if(te!=null)for(Ae in te.key!==void 0&&(Q=""+te.key),te)K.call(te,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Re[Ae]=te[Ae]);var fe=arguments.length-2;if(fe===1)Re.children=_e;else if(1<fe){for(var Oe=Array(fe),Xe=0;Xe<fe;Xe++)Oe[Xe]=arguments[Xe+2];Re.children=Oe}if(U&&U.defaultProps)for(Ae in fe=U.defaultProps,fe)Re[Ae]===void 0&&(Re[Ae]=fe[Ae]);return R(U,Q,Re)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(U){return{$$typeof:d,render:U}},ct.isValidElement=G,ct.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:ne}},ct.memo=function(U,te){return{$$typeof:p,type:U,compare:te===void 0?null:te}},ct.startTransition=function(U){var te=P.T,_e={};P.T=_e;try{var Ae=U(),Re=P.S;Re!==null&&Re(_e,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(F,be)}catch(Q){be(Q)}finally{te!==null&&_e.types!==null&&(te.types=_e.types),P.T=te}},ct.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ct.use=function(U){return P.H.use(U)},ct.useActionState=function(U,te,_e){return P.H.useActionState(U,te,_e)},ct.useCallback=function(U,te){return P.H.useCallback(U,te)},ct.useContext=function(U){return P.H.useContext(U)},ct.useDebugValue=function(){},ct.useDeferredValue=function(U,te){return P.H.useDeferredValue(U,te)},ct.useEffect=function(U,te){return P.H.useEffect(U,te)},ct.useEffectEvent=function(U){return P.H.useEffectEvent(U)},ct.useId=function(){return P.H.useId()},ct.useImperativeHandle=function(U,te,_e){return P.H.useImperativeHandle(U,te,_e)},ct.useInsertionEffect=function(U,te){return P.H.useInsertionEffect(U,te)},ct.useLayoutEffect=function(U,te){return P.H.useLayoutEffect(U,te)},ct.useMemo=function(U,te){return P.H.useMemo(U,te)},ct.useOptimistic=function(U,te){return P.H.useOptimistic(U,te)},ct.useReducer=function(U,te,_e){return P.H.useReducer(U,te,_e)},ct.useRef=function(U){return P.H.useRef(U)},ct.useState=function(U){return P.H.useState(U)},ct.useSyncExternalStore=function(U,te,_e){return P.H.useSyncExternalStore(U,te,_e)},ct.useTransition=function(){return P.H.useTransition()},ct.version="19.2.3",ct}var X0;function Xd(){return X0||(X0=1,uh.exports=Yy()),uh.exports}var Ut=Xd();const jy=tv(Ut);var fh={exports:{}},Ho={},hh={exports:{}},dh={};var W0;function Zy(){return W0||(W0=1,(function(o){function e(N,H){var ne=N.length;N.push(H);e:for(;0<ne;){var be=ne-1>>>1,Me=N[be];if(0<l(Me,H))N[be]=H,N[ne]=Me,ne=be;else break e}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var H=N[0],ne=N.pop();if(ne!==H){N[0]=ne;e:for(var be=0,Me=N.length,U=Me>>>1;be<U;){var te=2*(be+1)-1,_e=N[te],Ae=te+1,Re=N[Ae];if(0>l(_e,ne))Ae<Me&&0>l(Re,_e)?(N[be]=Re,N[Ae]=ne,be=Ae):(N[be]=_e,N[te]=ne,be=te);else if(Ae<Me&&0>l(Re,ne))N[be]=Re,N[Ae]=ne,be=Ae;else break e}}return H}function l(N,H){var ne=N.sortIndex-H.sortIndex;return ne!==0?ne:N.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,y=3,S=!1,E=!1,w=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function L(N){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=N)r(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function z(N){if(w=!1,L(N),!E)if(i(m)!==null)E=!0,F||(F=!0,se());else{var H=i(p);H!==null&&ue(z,H.startTime-N)}}var F=!1,P=-1,K=5,R=-1;function C(){return M?!0:!(o.unstable_now()-R<K)}function G(){if(M=!1,F){var N=o.unstable_now();R=N;var H=!0;try{e:{E=!1,w&&(w=!1,O(P),P=-1),S=!0;var ne=y;try{t:{for(L(N),g=i(m);g!==null&&!(g.expirationTime>N&&C());){var be=g.callback;if(typeof be=="function"){g.callback=null,y=g.priorityLevel;var Me=be(g.expirationTime<=N);if(N=o.unstable_now(),typeof Me=="function"){g.callback=Me,L(N),H=!0;break t}g===i(m)&&r(m),L(N)}else r(m);g=i(m)}if(g!==null)H=!0;else{var U=i(p);U!==null&&ue(z,U.startTime-N),H=!1}}break e}finally{g=null,y=ne,S=!1}H=void 0}}finally{H?se():F=!1}}}var se;if(typeof I=="function")se=function(){I(G)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,pe=re.port2;re.port1.onmessage=G,se=function(){pe.postMessage(null)}}else se=function(){x(G,0)};function ue(N,H){P=x(function(){N(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(N){switch(y){case 1:case 2:case 3:var H=3;break;default:H=y}var ne=y;y=H;try{return N()}finally{y=ne}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(N,H){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ne=y;y=N;try{return H()}finally{y=ne}},o.unstable_scheduleCallback=function(N,H,ne){var be=o.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?be+ne:be):ne=be,N){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=ne+Me,N={id:_++,callback:H,priorityLevel:N,startTime:ne,expirationTime:Me,sortIndex:-1},ne>be?(N.sortIndex=ne,e(p,N),i(m)===null&&N===i(p)&&(w?(O(P),P=-1):w=!0,ue(z,ne-be))):(N.sortIndex=Me,e(m,N),E||S||(E=!0,F||(F=!0,se()))),N},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(N){var H=y;return function(){var ne=y;y=H;try{return N.apply(this,arguments)}finally{y=ne}}}})(dh)),dh}var q0;function Ky(){return q0||(q0=1,hh.exports=Zy()),hh.exports}var ph={exports:{}},Nn={};var Y0;function Qy(){if(Y0)return Nn;Y0=1;var o=Xd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Nn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:S}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Nn.requestFormReset=function(m){r.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Nn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Nn.version="19.2.3",Nn}var j0;function Jy(){if(j0)return ph.exports;j0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ph.exports=Qy(),ph.exports}var Z0;function $y(){if(Z0)return Ho;Z0=1;var o=Ky(),e=Xd(),i=Jy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var v=!1,T=u.child;T;){if(T===a){v=!0,a=u,s=f;break}if(T===s){v=!0,s=u,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,s=u;break}if(T===s){v=!0,s=f,a=u;break}T=T.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),I=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function se(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var re=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===re?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case F:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case I:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var ue=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},be=[],Me=-1;function U(t){return{current:t}}function te(t){0>Me||(t.current=be[Me],be[Me]=null,Me--)}function _e(t,n){Me++,be[Me]=t.current,t.current=n}var Ae=U(null),Re=U(null),Q=U(null),fe=U(null);function Oe(t,n){switch(_e(Q,n),_e(Re,t),_e(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?u0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=u0(n),t=f0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}te(Ae),_e(Ae,t)}function Xe(){te(Ae),te(Re),te(Q)}function ze(t){t.memoizedState!==null&&_e(fe,t);var n=Ae.current,a=f0(n,t.type);n!==a&&(_e(Re,t),_e(Ae,a))}function pt(t){Re.current===t&&(te(Ae),te(Re)),fe.current===t&&(te(fe),Io._currentValue=ne)}var Zt,st;function nt(t){if(Zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Zt=n&&n[1]||"",st=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+t+st}var Et=!1;function it(t,n){if(!t||Et)return"";Et=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(le){var ae=le}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(le){ae=le}t.call(ve.prototype)}}else{try{throw Error()}catch(le){ae=le}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(le){if(le&&ae&&typeof le.stack=="string")return[le.stack,ae.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var B=v.split(`
`),$=T.split(`
`);for(u=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(s===B.length||u===$.length)for(s=B.length-1,u=$.length-1;1<=s&&0<=u&&B[s]!==$[u];)u--;for(;1<=s&&0<=u;s--,u--)if(B[s]!==$[u]){if(s!==1||u!==1)do if(s--,u--,0>u||B[s]!==$[u]){var he=`
`+B[s].replace(" at new "," at ");return t.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",t.displayName)),he}while(1<=s&&0<=u);break}}}finally{Et=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?nt(a):""}function Wt(t,n){switch(t.tag){case 26:case 27:case 5:return nt(t.type);case 16:return nt("Lazy");case 13:return t.child!==n&&n!==null?nt("Suspense Fallback"):nt("Suspense");case 19:return nt("SuspenseList");case 0:case 15:return it(t.type,!1);case 11:return it(t.type.render,!1);case 1:return it(t.type,!0);case 31:return nt("Activity");default:return""}}function V(t){try{var n="",a=null;do n+=Wt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var qt=Object.prototype.hasOwnProperty,vt=o.unstable_scheduleCallback,wt=o.unstable_cancelCallback,Ye=o.unstable_shouldYield,D=o.unstable_requestPaint,b=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,de=o.unstable_ImmediatePriority,ce=o.unstable_UserBlockingPriority,Z=o.unstable_NormalPriority,Ie=o.unstable_LowPriority,we=o.unstable_IdlePriority,ye=o.log,Ge=o.unstable_setDisableYieldValue,me=null,Ee=null;function Ne(t){if(typeof ye=="function"&&Ge(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(me,t)}catch{}}var Le=Math.clz32?Math.clz32:X,Ce=Math.log,at=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(Ce(t)/at|0)|0}var Be=256,De=262144,Ve=4194304;function Te(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=Te(s):(v&=T,v!==0?u=Te(v):a||(a=T&~t,a!==0&&(u=Te(a))))):(T=s&~f,T!==0?u=Te(T):v!==0?u=Te(v):a||(a=s&~t,a!==0&&(u=Te(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ue(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function rt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(){var t=Ve;return Ve<<=1,(Ve&62914560)===0&&(Ve=4194304),t}function At(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Un(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xi(t,n,a,s,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(a=v&~a;0<a;){var he=31-Le(a),ve=1<<he;T[he]=0,B[he]=-1;var ae=$[he];if(ae!==null)for($[he]=null,he=0;he<ae.length;he++){var le=ae[he];le!==null&&(le.lane&=-536870913)}a&=~ve}s!==0&&ul(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function ul(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Le(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function qs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Le(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Lr(t,n){var a=n&-n;return a=(a&42)!==0?1:Ys(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ys(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Or(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function js(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:O0(t.type))}function Ni(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var ri=Math.random().toString(36).slice(2),on="__reactFiber$"+ri,yn="__reactProps$"+ri,yi="__reactContainer$"+ri,Ir="__reactEvents$"+ri,Pr="__reactListeners$"+ri,fl="__reactHandles$"+ri,Zs="__reactResources$"+ri,ir="__reactMarker$"+ri;function Ks(t){delete t[on],delete t[yn],delete t[Ir],delete t[Pr],delete t[fl]}function Ma(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[yi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=v0(t);t!==null;){if(a=t[on])return a;t=v0(t)}return n}t=a,a=t.parentNode}return null}function ba(t){if(t=t[on]||t[yi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ar(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ea(t){var n=t[Zs];return n||(n=t[Zs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function A(t){t[ir]=!0}var q=new Set,oe={};function ie(t,n){j(t,n),j(t+"Capture",n)}function j(t,n){for(oe[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Pe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ke={},Fe={};function We(t){return qt.call(Fe,t)?!0:qt.call(ke,t)?!1:Pe.test(t)?Fe[t]=!0:(ke[t]=!0,!1)}function je(t,n,a){if(We(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function $e(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ze(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function jt(t){if(!t._valueTracker){var n=Nt(t)?"checked":"value";t._valueTracker=Jt(t,n,""+t[n])}}function It(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Nt(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Qe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lt=/[\n"\\]/g;function ot(t){return t.replace(Lt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Sn(t,n,a,s,u,f,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+et(n)):t.value!==""+et(n)&&(t.value=""+et(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?Mn(t,v,et(n)):a!=null?Mn(t,v,et(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+et(T):t.removeAttribute("name")}function qi(t,n,a,s,u,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){jt(t);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),jt(t)}function Mn(t,n,a){n==="number"&&Qe(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function si(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function zt(t,n,a){if(n!=null&&(n=""+et(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+et(a):""}function bn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ue(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=et(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),jt(t)}function pn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var En=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tn(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||En.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function zr(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&Tn(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&Tn(t,f,n[f])}function Si(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hl(t){return Vv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yi(){}var ru=null;function su(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Br=null,Fr=null;function cp(t){var n=ba(t);if(n&&(t=n.stateNode)){var a=t[yn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Sn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ot(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[yn]||null;if(!u)throw Error(r(90));Sn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&It(s)}break e;case"textarea":zt(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&si(t,!!a.multiple,n,!1)}}}var ou=!1;function up(t,n,a){if(ou)return t(n,a);ou=!0;try{var s=t(n);return s}finally{if(ou=!1,(Br!==null||Fr!==null)&&($l(),Br&&(n=Br,t=Fr,Fr=Br=null,cp(n),t)))for(n=0;n<t.length;n++)cp(t[n])}}function Qs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[yn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=!1;if(ji)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){lu=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{lu=!1}var Ta=null,cu=null,dl=null;function fp(){if(dl)return dl;var t,n=cu,a=n.length,s,u="value"in Ta?Ta.value:Ta.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(s=1;s<=v&&n[a-s]===u[f-s];s++);return dl=u.slice(t,1<s?1-s:void 0)}function pl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function hp(){return!1}function Hn(t){function n(a,s,u,f,v){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ml:hp,this.isPropagationStopped=hp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),n}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=Hn(rr),$s=g({},rr,{view:0,detail:0}),kv=Hn($s),uu,fu,eo,_l=g({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(uu=t.screenX-eo.screenX,fu=t.screenY-eo.screenY):fu=uu=0,eo=t),uu)},movementY:function(t){return"movementY"in t?t.movementY:fu}}),dp=Hn(_l),Xv=g({},_l,{dataTransfer:0}),Wv=Hn(Xv),qv=g({},$s,{relatedTarget:0}),hu=Hn(qv),Yv=g({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=Hn(Yv),Zv=g({},rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kv=Hn(Zv),Qv=g({},rr,{data:0}),pp=Hn(Qv),Jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=ex[t])?!!n[t]:!1}function du(){return tx}var nx=g({},$s,{key:function(t){if(t.key){var n=Jv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$v[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ix=Hn(nx),ax=g({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mp=Hn(ax),rx=g({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),sx=Hn(rx),ox=g({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=Hn(ox),cx=g({},_l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=Hn(cx),fx=g({},rr,{newState:0,oldState:0}),hx=Hn(fx),dx=[9,13,27,32],pu=ji&&"CompositionEvent"in window,to=null;ji&&"documentMode"in document&&(to=document.documentMode);var px=ji&&"TextEvent"in window&&!to,gp=ji&&(!pu||to&&8<to&&11>=to),_p=" ",vp=!1;function xp(t,n){switch(t){case"keyup":return dx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function mx(t,n){switch(t){case"compositionend":return yp(n);case"keypress":return n.which!==32?null:(vp=!0,_p);case"textInput":return t=n.data,t===_p&&vp?null:t;default:return null}}function gx(t,n){if(Hr)return t==="compositionend"||!pu&&xp(t,n)?(t=fp(),dl=cu=Ta=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gp&&n.locale!=="ko"?null:n.data;default:return null}}var _x={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!_x[t.type]:n==="textarea"}function Mp(t,n,a,s){Br?Fr?Fr.push(s):Fr=[s]:Br=s,n=sc(n,"onChange"),0<n.length&&(a=new gl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var no=null,io=null;function vx(t){a0(t,0)}function vl(t){var n=ar(t);if(It(n))return t}function bp(t,n){if(t==="change")return n}var Ep=!1;if(ji){var mu;if(ji){var gu="oninput"in document;if(!gu){var Tp=document.createElement("div");Tp.setAttribute("oninput","return;"),gu=typeof Tp.oninput=="function"}mu=gu}else mu=!1;Ep=mu&&(!document.documentMode||9<document.documentMode)}function Ap(){no&&(no.detachEvent("onpropertychange",Rp),io=no=null)}function Rp(t){if(t.propertyName==="value"&&vl(io)){var n=[];Mp(n,io,t,su(t)),up(vx,n)}}function xx(t,n,a){t==="focusin"?(Ap(),no=n,io=a,no.attachEvent("onpropertychange",Rp)):t==="focusout"&&Ap()}function yx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vl(io)}function Sx(t,n){if(t==="click")return vl(n)}function Mx(t,n){if(t==="input"||t==="change")return vl(n)}function bx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var jn=typeof Object.is=="function"?Object.is:bx;function ao(t,n){if(jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!qt.call(n,u)||!jn(t[u],n[u]))return!1}return!0}function wp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cp(t,n){var a=wp(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=wp(a)}}function Dp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Dp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Up(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qe(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qe(t.document)}return n}function _u(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ex=ji&&"documentMode"in document&&11>=document.documentMode,Gr=null,vu=null,ro=null,xu=!1;function Np(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xu||Gr==null||Gr!==Qe(s)||(s=Gr,"selectionStart"in s&&_u(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ro&&ao(ro,s)||(ro=s,s=sc(vu,"onSelect"),0<s.length&&(n=new gl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Gr)))}function sr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Vr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},yu={},Lp={};ji&&(Lp=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function or(t){if(yu[t])return yu[t];if(!Vr[t])return t;var n=Vr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Lp)return yu[t]=n[a];return t}var Op=or("animationend"),Ip=or("animationiteration"),Pp=or("animationstart"),Tx=or("transitionrun"),Ax=or("transitionstart"),Rx=or("transitioncancel"),zp=or("transitionend"),Bp=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function Mi(t,n){Bp.set(t,n),ie(n,[t])}var xl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oi=[],kr=0,Mu=0;function yl(){for(var t=kr,n=Mu=kr=0;n<t;){var a=oi[n];oi[n++]=null;var s=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,s!==null&&u!==null){var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}f!==0&&Fp(a,u,f)}}function Sl(t,n,a,s){oi[kr++]=t,oi[kr++]=n,oi[kr++]=a,oi[kr++]=s,Mu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function bu(t,n,a,s){return Sl(t,n,a,s),Ml(t)}function lr(t,n){return Sl(t,null,null,n),Ml(t)}function Fp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Le(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function Ml(t){if(50<wo)throw wo=0,Lf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Xr={};function wx(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,a,s){return new wx(t,n,a,s)}function Eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zi(t,n){var a=t.alternate;return a===null?(a=Zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Hp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function bl(t,n,a,s,u,f){var v=0;if(s=t,typeof t=="function")Eu(t)&&(v=1);else if(typeof t=="string")v=Ly(t,a,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case R:return t=Zn(31,a,n,u),t.elementType=R,t.lanes=f,t;case w:return cr(a.children,u,f,n);case M:v=8,u|=24;break;case x:return t=Zn(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case z:return t=Zn(13,a,n,u),t.elementType=z,t.lanes=f,t;case F:return t=Zn(19,a,n,u),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:v=10;break e;case O:v=9;break e;case L:v=11;break e;case P:v=14;break e;case K:v=16,s=null;break e}v=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Zn(v,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function cr(t,n,a,s){return t=Zn(7,t,s,n),t.lanes=a,t}function Tu(t,n,a){return t=Zn(6,t,null,n),t.lanes=a,t}function Gp(t){var n=Zn(18,null,null,0);return n.stateNode=t,n}function Au(t,n,a){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Vp=new WeakMap;function li(t,n){if(typeof t=="object"&&t!==null){var a=Vp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:V(n)},Vp.set(t,n),n)}return{value:t,source:n,stack:V(n)}}var Wr=[],qr=0,El=null,so=0,ci=[],ui=0,Aa=null,Li=1,Oi="";function Ki(t,n){Wr[qr++]=so,Wr[qr++]=El,El=t,so=n}function kp(t,n,a){ci[ui++]=Li,ci[ui++]=Oi,ci[ui++]=Aa,Aa=t;var s=Li;t=Oi;var u=32-Le(s)-1;s&=~(1<<u),a+=1;var f=32-Le(n)+u;if(30<f){var v=u-u%5;f=(s&(1<<v)-1).toString(32),s>>=v,u-=v,Li=1<<32-Le(n)+u|a<<u|s,Oi=f+t}else Li=1<<f|a<<u|s,Oi=t}function Ru(t){t.return!==null&&(Ki(t,1),kp(t,1,0))}function wu(t){for(;t===El;)El=Wr[--qr],Wr[qr]=null,so=Wr[--qr],Wr[qr]=null;for(;t===Aa;)Aa=ci[--ui],ci[ui]=null,Oi=ci[--ui],ci[ui]=null,Li=ci[--ui],ci[ui]=null}function Xp(t,n){ci[ui++]=Li,ci[ui++]=Oi,ci[ui++]=Aa,Li=n.id,Oi=n.overflow,Aa=t}var An=null,Kt=null,Mt=!1,Ra=null,fi=!1,Cu=Error(r(519));function wa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw oo(li(n,t)),Cu}function Wp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[on]=t,n[yn]=s,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<Do.length;a++)_t(Do[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),qi(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),bn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||l0(n.textContent,a)?(s.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),s.onScroll!=null&&_t("scroll",n),s.onScrollEnd!=null&&_t("scrollend",n),s.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||wa(t,!0)}function qp(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:An=An.return}}function Yr(t){if(t!==An)return!1;if(!Mt)return qp(t),Mt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||jf(t.type,t.memoizedProps)),a=!a),a&&Kt&&wa(t),qp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=_0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=_0(t)}else n===27?(n=Kt,Va(t.type)?(t=$f,$f=null,Kt=t):Kt=n):Kt=An?di(t.stateNode.nextSibling):null;return!0}function ur(){Kt=An=null,Mt=!1}function Du(){var t=Ra;return t!==null&&(Xn===null?Xn=t:Xn.push.apply(Xn,t),Ra=null),t}function oo(t){Ra===null?Ra=[t]:Ra.push(t)}var Uu=U(null),fr=null,Qi=null;function Ca(t,n,a){_e(Uu,n._currentValue),n._currentValue=a}function Ji(t){t._currentValue=Uu.current,te(Uu)}function Nu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Lu(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Nu(f.return,a,t),s||(v=null);break e}f=T.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Nu(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function jr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var T=u.type;jn(u.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(u===fe.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Io):t=[Io])}u=u.return}t!==null&&Lu(n,t,a,s),n.flags|=262144}function Tl(t){for(t=t.firstContext;t!==null;){if(!jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function hr(t){fr=t,Qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return Yp(fr,t)}function Al(t,n){return fr===null&&hr(t),Yp(t,n)}function Yp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(t===null)throw Error(r(308));Qi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Qi=Qi.next=n;return a}var Cx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Dx=o.unstable_scheduleCallback,Ux=o.unstable_NormalPriority,ln={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new Cx,data:new Map,refCount:0}}function lo(t){t.refCount--,t.refCount===0&&Dx(Ux,function(){t.controller.abort()})}var co=null,Iu=0,Zr=0,Kr=null;function Nx(t,n){if(co===null){var a=co=[];Iu=0,Zr=Ff(),Kr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Iu++,n.then(jp,jp),n}function jp(){if(--Iu===0&&co!==null){Kr!==null&&(Kr.status="fulfilled");var t=co;co=null,Zr=0,Kr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Lx(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Zp=N.S;N.S=function(t,n){Ng=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Nx(t,n),Zp!==null&&Zp(t,n)};var dr=U(null);function Pu(){var t=dr.current;return t!==null?t:Yt.pooledCache}function Rl(t,n){n===null?_e(dr,dr.current):_e(dr,n.pool)}function Kp(){var t=Pu();return t===null?null:{parent:ln._currentValue,pool:t}}var Qr=Error(r(460)),zu=Error(r(474)),wl=Error(r(542)),Cl={then:function(){}};function Qp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Jp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,em(t),t;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,em(t),t}throw mr=n,Qr}}function pr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(mr=a,Qr):a}}var mr=null;function $p(){if(mr===null)throw Error(r(459));var t=mr;return mr=null,t}function em(t){if(t===Qr||t===wl)throw Error(r(483))}var Jr=null,uo=0;function Dl(t){var n=uo;return uo+=1,Jr===null&&(Jr=[]),Jp(Jr,t,n)}function fo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ul(t,n){throw n.$$typeof===y?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function tm(t){function n(Y,k){if(t){var J=Y.deletions;J===null?(Y.deletions=[k],Y.flags|=16):J.push(k)}}function a(Y,k){if(!t)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function s(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function u(Y,k){return Y=Zi(Y,k),Y.index=0,Y.sibling=null,Y}function f(Y,k,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<k?(Y.flags|=67108866,k):J):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function v(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,k,J,ge){return k===null||k.tag!==6?(k=Tu(J,Y.mode,ge),k.return=Y,k):(k=u(k,J),k.return=Y,k)}function B(Y,k,J,ge){var Je=J.type;return Je===w?he(Y,k,J.props.children,ge,J.key):k!==null&&(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===K&&pr(Je)===k.type)?(k=u(k,J.props),fo(k,J),k.return=Y,k):(k=bl(J.type,J.key,J.props,null,Y.mode,ge),fo(k,J),k.return=Y,k)}function $(Y,k,J,ge){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=Au(J,Y.mode,ge),k.return=Y,k):(k=u(k,J.children||[]),k.return=Y,k)}function he(Y,k,J,ge,Je){return k===null||k.tag!==7?(k=cr(J,Y.mode,ge,Je),k.return=Y,k):(k=u(k,J),k.return=Y,k)}function ve(Y,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Tu(""+k,Y.mode,J),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return J=bl(k.type,k.key,k.props,null,Y.mode,J),fo(J,k),J.return=Y,J;case E:return k=Au(k,Y.mode,J),k.return=Y,k;case K:return k=pr(k),ve(Y,k,J)}if(ue(k)||se(k))return k=cr(k,Y.mode,J,null),k.return=Y,k;if(typeof k.then=="function")return ve(Y,Dl(k),J);if(k.$$typeof===I)return ve(Y,Al(Y,k),J);Ul(Y,k)}return null}function ae(Y,k,J,ge){var Je=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Je!==null?null:T(Y,k,""+J,ge);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case S:return J.key===Je?B(Y,k,J,ge):null;case E:return J.key===Je?$(Y,k,J,ge):null;case K:return J=pr(J),ae(Y,k,J,ge)}if(ue(J)||se(J))return Je!==null?null:he(Y,k,J,ge,null);if(typeof J.then=="function")return ae(Y,k,Dl(J),ge);if(J.$$typeof===I)return ae(Y,k,Al(Y,J),ge);Ul(Y,J)}return null}function le(Y,k,J,ge,Je){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Y=Y.get(J)||null,T(k,Y,""+ge,Je);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case S:return Y=Y.get(ge.key===null?J:ge.key)||null,B(k,Y,ge,Je);case E:return Y=Y.get(ge.key===null?J:ge.key)||null,$(k,Y,ge,Je);case K:return ge=pr(ge),le(Y,k,J,ge,Je)}if(ue(ge)||se(ge))return Y=Y.get(J)||null,he(k,Y,ge,Je,null);if(typeof ge.then=="function")return le(Y,k,J,Dl(ge),Je);if(ge.$$typeof===I)return le(Y,k,J,Al(k,ge),Je);Ul(k,ge)}return null}function qe(Y,k,J,ge){for(var Je=null,Ct=null,Ke=k,ft=k=0,yt=null;Ke!==null&&ft<J.length;ft++){Ke.index>ft?(yt=Ke,Ke=null):yt=Ke.sibling;var Dt=ae(Y,Ke,J[ft],ge);if(Dt===null){Ke===null&&(Ke=yt);break}t&&Ke&&Dt.alternate===null&&n(Y,Ke),k=f(Dt,k,ft),Ct===null?Je=Dt:Ct.sibling=Dt,Ct=Dt,Ke=yt}if(ft===J.length)return a(Y,Ke),Mt&&Ki(Y,ft),Je;if(Ke===null){for(;ft<J.length;ft++)Ke=ve(Y,J[ft],ge),Ke!==null&&(k=f(Ke,k,ft),Ct===null?Je=Ke:Ct.sibling=Ke,Ct=Ke);return Mt&&Ki(Y,ft),Je}for(Ke=s(Ke);ft<J.length;ft++)yt=le(Ke,Y,ft,J[ft],ge),yt!==null&&(t&&yt.alternate!==null&&Ke.delete(yt.key===null?ft:yt.key),k=f(yt,k,ft),Ct===null?Je=yt:Ct.sibling=yt,Ct=yt);return t&&Ke.forEach(function(Ya){return n(Y,Ya)}),Mt&&Ki(Y,ft),Je}function tt(Y,k,J,ge){if(J==null)throw Error(r(151));for(var Je=null,Ct=null,Ke=k,ft=k=0,yt=null,Dt=J.next();Ke!==null&&!Dt.done;ft++,Dt=J.next()){Ke.index>ft?(yt=Ke,Ke=null):yt=Ke.sibling;var Ya=ae(Y,Ke,Dt.value,ge);if(Ya===null){Ke===null&&(Ke=yt);break}t&&Ke&&Ya.alternate===null&&n(Y,Ke),k=f(Ya,k,ft),Ct===null?Je=Ya:Ct.sibling=Ya,Ct=Ya,Ke=yt}if(Dt.done)return a(Y,Ke),Mt&&Ki(Y,ft),Je;if(Ke===null){for(;!Dt.done;ft++,Dt=J.next())Dt=ve(Y,Dt.value,ge),Dt!==null&&(k=f(Dt,k,ft),Ct===null?Je=Dt:Ct.sibling=Dt,Ct=Dt);return Mt&&Ki(Y,ft),Je}for(Ke=s(Ke);!Dt.done;ft++,Dt=J.next())Dt=le(Ke,Y,ft,Dt.value,ge),Dt!==null&&(t&&Dt.alternate!==null&&Ke.delete(Dt.key===null?ft:Dt.key),k=f(Dt,k,ft),Ct===null?Je=Dt:Ct.sibling=Dt,Ct=Dt);return t&&Ke.forEach(function(Xy){return n(Y,Xy)}),Mt&&Ki(Y,ft),Je}function Xt(Y,k,J,ge){if(typeof J=="object"&&J!==null&&J.type===w&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case S:e:{for(var Je=J.key;k!==null;){if(k.key===Je){if(Je=J.type,Je===w){if(k.tag===7){a(Y,k.sibling),ge=u(k,J.props.children),ge.return=Y,Y=ge;break e}}else if(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===K&&pr(Je)===k.type){a(Y,k.sibling),ge=u(k,J.props),fo(ge,J),ge.return=Y,Y=ge;break e}a(Y,k);break}else n(Y,k);k=k.sibling}J.type===w?(ge=cr(J.props.children,Y.mode,ge,J.key),ge.return=Y,Y=ge):(ge=bl(J.type,J.key,J.props,null,Y.mode,ge),fo(ge,J),ge.return=Y,Y=ge)}return v(Y);case E:e:{for(Je=J.key;k!==null;){if(k.key===Je)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){a(Y,k.sibling),ge=u(k,J.children||[]),ge.return=Y,Y=ge;break e}else{a(Y,k);break}else n(Y,k);k=k.sibling}ge=Au(J,Y.mode,ge),ge.return=Y,Y=ge}return v(Y);case K:return J=pr(J),Xt(Y,k,J,ge)}if(ue(J))return qe(Y,k,J,ge);if(se(J)){if(Je=se(J),typeof Je!="function")throw Error(r(150));return J=Je.call(J),tt(Y,k,J,ge)}if(typeof J.then=="function")return Xt(Y,k,Dl(J),ge);if(J.$$typeof===I)return Xt(Y,k,Al(Y,J),ge);Ul(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(a(Y,k.sibling),ge=u(k,J),ge.return=Y,Y=ge):(a(Y,k),ge=Tu(J,Y.mode,ge),ge.return=Y,Y=ge),v(Y)):a(Y,k)}return function(Y,k,J,ge){try{uo=0;var Je=Xt(Y,k,J,ge);return Jr=null,Je}catch(Ke){if(Ke===Qr||Ke===wl)throw Ke;var Ct=Zn(29,Ke,null,Y.mode);return Ct.lanes=ge,Ct.return=Y,Ct}}}var gr=tm(!0),nm=tm(!1),Da=!1;function Bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Na(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ot&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Ml(t),Fp(t,null,a),n}return Sl(t,s,n,a),Ml(t)}function ho(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,qs(t,a)}}function Hu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Gu=!1;function po(){if(Gu){var t=Kr;if(t!==null)throw t}}function mo(t,n,a,s){Gu=!1;var u=t.updateQueue;Da=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,$=B.next;B.next=null,v===null?f=$:v.next=$,v=B;var he=t.alternate;he!==null&&(he=he.updateQueue,T=he.lastBaseUpdate,T!==v&&(T===null?he.firstBaseUpdate=$:T.next=$,he.lastBaseUpdate=B))}if(f!==null){var ve=u.baseState;v=0,he=$=B=null,T=f;do{var ae=T.lane&-536870913,le=ae!==T.lane;if(le?(xt&ae)===ae:(s&ae)===ae){ae!==0&&ae===Zr&&(Gu=!0),he!==null&&(he=he.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var qe=t,tt=T;ae=n;var Xt=a;switch(tt.tag){case 1:if(qe=tt.payload,typeof qe=="function"){ve=qe.call(Xt,ve,ae);break e}ve=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=tt.payload,ae=typeof qe=="function"?qe.call(Xt,ve,ae):qe,ae==null)break e;ve=g({},ve,ae);break e;case 2:Da=!0}}ae=T.callback,ae!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[ae]:le.push(ae))}else le={lane:ae,tag:T.tag,payload:T.payload,callback:T.callback,next:null},he===null?($=he=le,B=ve):he=he.next=le,v|=ae;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;le=T,T=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);he===null&&(B=ve),u.baseState=B,u.firstBaseUpdate=$,u.lastBaseUpdate=he,f===null&&(u.shared.lanes=0),za|=v,t.lanes=v,t.memoizedState=ve}}function im(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function am(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)im(a[t],n)}var $r=U(null),Nl=U(0);function rm(t,n){t=oa,_e(Nl,t),_e($r,n),oa=t|n.baseLanes}function Vu(){_e(Nl,oa),_e($r,$r.current)}function ku(){oa=Nl.current,te($r),te(Nl)}var Kn=U(null),hi=null;function La(t){var n=t.alternate;_e(rn,rn.current&1),_e(Kn,t),hi===null&&(n===null||$r.current!==null||n.memoizedState!==null)&&(hi=t)}function Xu(t){_e(rn,rn.current),_e(Kn,t),hi===null&&(hi=t)}function sm(t){t.tag===22?(_e(rn,rn.current),_e(Kn,t),hi===null&&(hi=t)):Oa()}function Oa(){_e(rn,rn.current),_e(Kn,Kn.current)}function Qn(t){te(Kn),hi===t&&(hi=null),te(rn)}var rn=U(0);function Ll(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Qf(a)||Jf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,ut=null,Vt=null,cn=null,Ol=!1,es=!1,_r=!1,Il=0,go=0,ts=null,Ox=0;function tn(){throw Error(r(321))}function Wu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!jn(t[a],n[a]))return!1;return!0}function qu(t,n,a,s,u,f){return $i=f,ut=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?km:lf,_r=!1,f=a(s,u),_r=!1,es&&(f=lm(n,a,s,u)),om(t),f}function om(t){N.H=xo;var n=Vt!==null&&Vt.next!==null;if($i=0,cn=Vt=ut=null,Ol=!1,go=0,ts=null,n)throw Error(r(300));t===null||un||(t=t.dependencies,t!==null&&Tl(t)&&(un=!0))}function lm(t,n,a,s){ut=t;var u=0;do{if(es&&(ts=null),go=0,es=!1,25<=u)throw Error(r(301));if(u+=1,cn=Vt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=Xm,f=n(a,s)}while(es);return f}function Ix(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?_o(n):n,t=t.useState()[0],(Vt!==null?Vt.memoizedState:null)!==t&&(ut.flags|=1024),n}function Yu(){var t=Il!==0;return Il=0,t}function ju(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Zu(t){if(Ol){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ol=!1}$i=0,cn=Vt=ut=null,es=!1,go=Il=0,ts=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ut.memoizedState=cn=t:cn=cn.next=t,cn}function sn(){if(Vt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var n=cn===null?ut.memoizedState:cn.next;if(n!==null)cn=n,Vt=t;else{if(t===null)throw ut.alternate===null?Error(r(467)):Error(r(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},cn===null?ut.memoizedState=cn=t:cn=cn.next=t}return cn}function Pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _o(t){var n=go;return go+=1,ts===null&&(ts=[]),t=Jp(ts,t,n),n=ut,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?km:lf),t}function zl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return _o(t);if(t.$$typeof===I)return Rn(t)}throw Error(r(438,String(t)))}function Ku(t){var n=null,a=ut.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ut.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Pl(),ut.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function ea(t,n){return typeof n=="function"?n(t):n}function Bl(t){var n=sn();return Qu(n,Vt,t)}function Qu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=v=null,B=null,$=n,he=!1;do{var ve=$.lane&-536870913;if(ve!==$.lane?(xt&ve)===ve:($i&ve)===ve){var ae=$.revertLane;if(ae===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ve===Zr&&(he=!0);else if(($i&ae)===ae){$=$.next,ae===Zr&&(he=!0);continue}else ve={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=ve,v=f):B=B.next=ve,ut.lanes|=ae,za|=ae;ve=$.action,_r&&a(f,ve),f=$.hasEagerState?$.eagerState:a(f,ve)}else ae={lane:ve,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=ae,v=f):B=B.next=ae,ut.lanes|=ve,za|=ve;$=$.next}while($!==null&&$!==n);if(B===null?v=f:B.next=T,!jn(f,t.memoizedState)&&(un=!0,he&&(a=Kr,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=B,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Ju(t){var n=sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);jn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function cm(t,n,a){var s=ut,u=sn(),f=Mt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!jn((Vt||u).memoizedState,a);if(v&&(u.memoizedState=a,un=!0),u=u.queue,tf(hm.bind(null,s,u,t),[t]),u.getSnapshot!==n||v||cn!==null&&cn.memoizedState.tag&1){if(s.flags|=2048,ns(9,{destroy:void 0},fm.bind(null,s,u,a,n),null),Yt===null)throw Error(r(349));f||($i&127)!==0||um(s,n,a)}return a}function um(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ut.updateQueue,n===null?(n=Pl(),ut.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function fm(t,n,a,s){n.value=a,n.getSnapshot=s,dm(n)&&pm(t)}function hm(t,n,a){return a(function(){dm(n)&&pm(t)})}function dm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!jn(t,a)}catch{return!0}}function pm(t){var n=lr(t,2);n!==null&&Wn(n,t,2)}function $u(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),_r){Ne(!0);try{a()}finally{Ne(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},n}function mm(t,n,a,s){return t.baseState=a,Qu(t,Vt,typeof s=="function"?s:ea)}function Px(t,n,a,s,u){if(Gl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};N.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,gm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function gm(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=N.T,v={};N.T=v;try{var T=a(u,s),B=N.S;B!==null&&B(v,T),_m(t,n,T)}catch($){ef(t,n,$)}finally{f!==null&&v.types!==null&&(f.types=v.types),N.T=f}}else try{f=a(u,s),_m(t,n,f)}catch($){ef(t,n,$)}}function _m(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){vm(t,n,s)},function(s){return ef(t,n,s)}):vm(t,n,a)}function vm(t,n,a){n.status="fulfilled",n.value=a,xm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,gm(t,a)))}function ef(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,xm(n),n=n.next;while(n!==s)}t.action=null}function xm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function ym(t,n){return n}function Sm(t,n){if(Mt){var a=Yt.formState;if(a!==null){e:{var s=ut;if(Mt){if(Kt){t:{for(var u=Kt,f=fi;u.nodeType!==8;){if(!f){u=null;break t}if(u=di(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Kt=di(u.nextSibling),s=u.data==="F!";break e}}wa(s)}s=!1}s&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ym,lastRenderedState:n},a.queue=s,a=Hm.bind(null,ut,s),s.dispatch=a,s=$u(!1),f=of.bind(null,ut,!1,s.queue),s=zn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=Px.bind(null,ut,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Mm(t){var n=sn();return bm(n,Vt,t)}function bm(t,n,a){if(n=Qu(t,n,ym)[0],t=Bl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=_o(n)}catch(v){throw v===Qr?wl:v}else s=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ut.flags|=2048,ns(9,{destroy:void 0},zx.bind(null,u,a),null)),[s,f,t]}function zx(t,n){t.action=n}function Em(t){var n=sn(),a=Vt;if(a!==null)return bm(n,a,t);sn(),n=n.memoizedState,a=sn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function ns(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ut.updateQueue,n===null&&(n=Pl(),ut.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Tm(){return sn().memoizedState}function Fl(t,n,a,s){var u=zn();ut.flags|=t,u.memoizedState=ns(1|n,{destroy:void 0},a,s===void 0?null:s)}function Hl(t,n,a,s){var u=sn();s=s===void 0?null:s;var f=u.memoizedState.inst;Vt!==null&&s!==null&&Wu(s,Vt.memoizedState.deps)?u.memoizedState=ns(n,f,a,s):(ut.flags|=t,u.memoizedState=ns(1|n,f,a,s))}function Am(t,n){Fl(8390656,8,t,n)}function tf(t,n){Hl(2048,8,t,n)}function Bx(t){ut.flags|=4;var n=ut.updateQueue;if(n===null)n=Pl(),ut.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Rm(t){var n=sn().memoizedState;return Bx({ref:n,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function wm(t,n){return Hl(4,2,t,n)}function Cm(t,n){return Hl(4,4,t,n)}function Dm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Um(t,n,a){a=a!=null?a.concat([t]):null,Hl(4,4,Dm.bind(null,n,t),a)}function nf(){}function Nm(t,n){var a=sn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Wu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Lm(t,n){var a=sn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Wu(n,s[1]))return s[0];if(s=t(),_r){Ne(!0);try{t()}finally{Ne(!1)}}return a.memoizedState=[s,n],s}function af(t,n,a){return a===void 0||($i&1073741824)!==0&&(xt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Og(),ut.lanes|=t,za|=t,a)}function Om(t,n,a,s){return jn(a,n)?a:$r.current!==null?(t=af(t,a,s),jn(t,n)||(un=!0),t):($i&42)===0||($i&1073741824)!==0&&(xt&261930)===0?(un=!0,t.memoizedState=a):(t=Og(),ut.lanes|=t,za|=t,n)}function Im(t,n,a,s,u){var f=H.p;H.p=f!==0&&8>f?f:8;var v=N.T,T={};N.T=T,of(t,!1,n,a);try{var B=u(),$=N.S;if($!==null&&$(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var he=Lx(B,s);vo(t,n,he,ei(t))}else vo(t,n,s,ei(t))}catch(ve){vo(t,n,{then:function(){},status:"rejected",reason:ve},ei())}finally{H.p=f,v!==null&&T.types!==null&&(v.types=T.types),N.T=v}}function Fx(){}function rf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Pm(t).queue;Im(t,u,n,ne,a===null?Fx:function(){return zm(t),a(s)})}function Pm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:ne},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function zm(t){var n=Pm(t);n.next===null&&(n=t.alternate.memoizedState),vo(t,n.next.queue,{},ei())}function sf(){return Rn(Io)}function Bm(){return sn().memoizedState}function Fm(){return sn().memoizedState}function Hx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();t=Ua(a);var s=Na(n,t,a);s!==null&&(Wn(s,n,a),ho(s,n,a)),n={cache:Ou()},t.payload=n;return}n=n.return}}function Gx(t,n,a){var s=ei();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gl(t)?Gm(n,a):(a=bu(t,n,a,s),a!==null&&(Wn(a,t,s),Vm(a,n,s)))}function Hm(t,n,a){var s=ei();vo(t,n,a,s)}function vo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gl(t))Gm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(u.hasEagerState=!0,u.eagerState=T,jn(T,v))return Sl(t,n,u,0),Yt===null&&yl(),!1}catch{}if(a=bu(t,n,u,s),a!==null)return Wn(a,t,s),Vm(a,n,s),!0}return!1}function of(t,n,a,s){if(s={lane:2,revertLane:Ff(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Gl(t)){if(n)throw Error(r(479))}else n=bu(t,a,s,2),n!==null&&Wn(n,t,2)}function Gl(t){var n=t.alternate;return t===ut||n!==null&&n===ut}function Gm(t,n){es=Ol=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Vm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,qs(t,a)}}var xo={readContext:Rn,use:zl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};xo.useEffectEvent=tn;var km={readContext:Rn,use:zl,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:Am,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Fl(4194308,4,Dm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Fl(4194308,4,t,n)},useInsertionEffect:function(t,n){Fl(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var s=t();if(_r){Ne(!0);try{t()}finally{Ne(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=zn();if(a!==void 0){var u=a(n);if(_r){Ne(!0);try{a(n)}finally{Ne(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=Gx.bind(null,ut,t),[s.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=$u(t);var n=t.queue,a=Hm.bind(null,ut,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(t,n){var a=zn();return af(a,t,n)},useTransition:function(){var t=$u(!1);return t=Im.bind(null,ut,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ut,u=zn();if(Mt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Yt===null)throw Error(r(349));(xt&127)!==0||um(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Am(hm.bind(null,s,f,t),[t]),s.flags|=2048,ns(9,{destroy:void 0},fm.bind(null,s,f,a,n),null),a},useId:function(){var t=zn(),n=Yt.identifierPrefix;if(Mt){var a=Oi,s=Li;a=(s&~(1<<32-Le(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Il++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ox++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:sf,useFormState:Sm,useActionState:Sm,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=of.bind(null,ut,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ku,useCacheRefresh:function(){return zn().memoizedState=Hx.bind(null,ut)},useEffectEvent:function(t){var n=zn(),a={impl:t};return n.memoizedState=a,function(){if((Ot&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},lf={readContext:Rn,use:zl,useCallback:Nm,useContext:Rn,useEffect:tf,useImperativeHandle:Um,useInsertionEffect:wm,useLayoutEffect:Cm,useMemo:Lm,useReducer:Bl,useRef:Tm,useState:function(){return Bl(ea)},useDebugValue:nf,useDeferredValue:function(t,n){var a=sn();return Om(a,Vt.memoizedState,t,n)},useTransition:function(){var t=Bl(ea)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:_o(t),n]},useSyncExternalStore:cm,useId:Bm,useHostTransitionStatus:sf,useFormState:Mm,useActionState:Mm,useOptimistic:function(t,n){var a=sn();return mm(a,Vt,t,n)},useMemoCache:Ku,useCacheRefresh:Fm};lf.useEffectEvent=Rm;var Xm={readContext:Rn,use:zl,useCallback:Nm,useContext:Rn,useEffect:tf,useImperativeHandle:Um,useInsertionEffect:wm,useLayoutEffect:Cm,useMemo:Lm,useReducer:Ju,useRef:Tm,useState:function(){return Ju(ea)},useDebugValue:nf,useDeferredValue:function(t,n){var a=sn();return Vt===null?af(a,t,n):Om(a,Vt.memoizedState,t,n)},useTransition:function(){var t=Ju(ea)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:_o(t),n]},useSyncExternalStore:cm,useId:Bm,useHostTransitionStatus:sf,useFormState:Em,useActionState:Em,useOptimistic:function(t,n){var a=sn();return Vt!==null?mm(a,Vt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:Fm};Xm.useEffectEvent=Rm;function cf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var uf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ei(),u=Ua(s);u.payload=n,a!=null&&(u.callback=a),n=Na(t,u,s),n!==null&&(Wn(n,t,s),ho(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ei(),u=Ua(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Na(t,u,s),n!==null&&(Wn(n,t,s),ho(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ei(),s=Ua(a);s.tag=2,n!=null&&(s.callback=n),n=Na(t,s,a),n!==null&&(Wn(n,t,a),ho(n,t,a))}};function Wm(t,n,a,s,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,v):n.prototype&&n.prototype.isPureReactComponent?!ao(a,s)||!ao(u,f):!0}function qm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&uf.enqueueReplaceState(n,n.state,null)}function vr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Ym(t){xl(t)}function jm(t){console.error(t)}function Zm(t){xl(t)}function Vl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Km(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ff(t,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(t,n)},a}function Qm(t){return t=Ua(t),t.tag=3,t}function Jm(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){Km(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Km(n,a,s),typeof u!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Vx(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&jr(n,a,u,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?ec():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Cl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Pf(t,s,u)),!1;case 22:return a.flags|=65536,s===Cl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Pf(t,s,u)),!1}throw Error(r(435,a.tag))}return Pf(t,s,u),ec(),!1}if(Mt)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Cu&&(t=Error(r(422),{cause:s}),oo(li(t,a)))):(s!==Cu&&(n=Error(r(423),{cause:s}),oo(li(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=li(s,a),u=ff(t.stateNode,s,u),Hu(t,u),nn!==4&&(nn=2)),!1;var f=Error(r(520),{cause:s});if(f=li(f,a),Ro===null?Ro=[f]:Ro.push(f),nn!==4&&(nn=2),n===null)return!0;s=li(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=ff(a.stateNode,s,t),Hu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ba===null||!Ba.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Qm(u),Jm(u,t,a,s),Hu(a,u),!1}a=a.return}while(a!==null);return!1}var hf=Error(r(461)),un=!1;function wn(t,n,a,s){n.child=t===null?nm(n,null,a,s):gr(n,t.child,a,s)}function $m(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var v={};for(var T in s)T!=="ref"&&(v[T]=s[T])}else v=s;return hr(n),s=qu(t,n,a,v,f,u),T=Yu(),t!==null&&!un?(ju(t,n,u),ta(t,n,u)):(Mt&&T&&Ru(n),n.flags|=1,wn(t,n,s,u),n.child)}function eg(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Eu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,tg(t,n,f,s,u)):(t=bl(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!yf(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:ao,a(v,s)&&t.ref===n.ref)return ta(t,n,u)}return n.flags|=1,t=Zi(f,s),t.ref=n.ref,t.return=n,n.child=t}function tg(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(ao(f,s)&&t.ref===n.ref)if(un=!1,n.pendingProps=s=f,yf(t,u))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,ta(t,n,u)}return df(t,n,a,s,u)}function ng(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return ig(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Rl(n,f!==null?f.cachePool:null),f!==null?rm(n,f):Vu(),sm(n);else return s=n.lanes=536870912,ig(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(Rl(n,f.cachePool),rm(n,f),Oa(),n.memoizedState=null):(t!==null&&Rl(n,null),Vu(),Oa());return wn(t,n,u,a),n.child}function yo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ig(t,n,a,s,u){var f=Pu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Rl(n,null),Vu(),sm(n),t!==null&&jr(t,n,s,!0),n.childLanes=u,null}function kl(t,n){return n=Wl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function ag(t,n,a){return gr(n,t.child,null,a),t=kl(n,n.pendingProps),t.flags|=2,Qn(n),n.memoizedState=null,t}function kx(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Mt){if(s.mode==="hidden")return t=kl(n,s),n.lanes=536870912,yo(null,t);if(Xu(n),(t=Kt)?(t=g0(t,fi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(t),a.return=n,n.child=a,An=n,Kt=null)):t=null,t===null)throw wa(n);return n.lanes=536870912,null}return kl(n,s)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Xu(n),u)if(n.flags&256)n.flags&=-257,n=ag(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(un||jr(t,n,a,!1),u=(a&t.childLanes)!==0,un||u){if(s=Yt,s!==null&&(v=Lr(s,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,lr(t,v),Wn(s,t,v),hf;ec(),n=ag(t,n,a)}else t=f.treeContext,Kt=di(v.nextSibling),An=n,Mt=!0,Ra=null,fi=!1,t!==null&&Xp(n,t),n=kl(n,s),n.flags|=4096;return n}return t=Zi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Xl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function df(t,n,a,s,u){return hr(n),a=qu(t,n,a,s,void 0,u),s=Yu(),t!==null&&!un?(ju(t,n,u),ta(t,n,u)):(Mt&&s&&Ru(n),n.flags|=1,wn(t,n,a,u),n.child)}function rg(t,n,a,s,u,f){return hr(n),n.updateQueue=null,a=lm(n,s,a,u),om(t),s=Yu(),t!==null&&!un?(ju(t,n,f),ta(t,n,f)):(Mt&&s&&Ru(n),n.flags|=1,wn(t,n,a,f),n.child)}function sg(t,n,a,s,u){if(hr(n),n.stateNode===null){var f=Xr,v=a.contextType;typeof v=="object"&&v!==null&&(f=Rn(v)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=uf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Bu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Rn(v):Xr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(cf(n,a,v,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&uf.enqueueReplaceState(f,f.state,null),mo(n,s,f,u),po(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=vr(a,T);f.props=B;var $=f.context,he=a.contextType;v=Xr,typeof he=="object"&&he!==null&&(v=Rn(he));var ve=a.getDerivedStateFromProps;he=typeof ve=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,he||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==v)&&qm(n,f,s,v),Da=!1;var ae=n.memoizedState;f.state=ae,mo(n,s,f,u),po(),$=n.memoizedState,T||ae!==$||Da?(typeof ve=="function"&&(cf(n,a,ve,s),$=n.memoizedState),(B=Da||Wm(n,a,B,s,ae,$,v))?(he||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=v,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Fu(t,n),v=n.memoizedProps,he=vr(a,v),f.props=he,ve=n.pendingProps,ae=f.context,$=a.contextType,B=Xr,typeof $=="object"&&$!==null&&(B=Rn($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==ve||ae!==B)&&qm(n,f,s,B),Da=!1,ae=n.memoizedState,f.state=ae,mo(n,s,f,u),po();var le=n.memoizedState;v!==ve||ae!==le||Da||t!==null&&t.dependencies!==null&&Tl(t.dependencies)?(typeof T=="function"&&(cf(n,a,T,s),le=n.memoizedState),(he=Da||Wm(n,a,he,s,ae,le,B)||t!==null&&t.dependencies!==null&&Tl(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,le,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,le,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=le),f.props=s,f.state=le,f.context=B,s=he):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Xl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=gr(n,t.child,null,u),n.child=gr(n,null,a,u)):wn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ta(t,n,u),t}function og(t,n,a,s){return ur(),n.flags|=256,wn(t,n,a,s),n.child}var pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mf(t){return{baseLanes:t,cachePool:Kp()}}function gf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=$n),t}function lg(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Mt){if(u?La(n):Oa(),(t=Kt)?(t=g0(t,fi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(t),a.return=n,n.child=a,An=n,Kt=null)):t=null,t===null)throw wa(n);return Jf(t)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,u?(Oa(),u=n.mode,T=Wl({mode:"hidden",children:T},u),s=cr(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=mf(a),s.childLanes=gf(t,v,a),n.memoizedState=pf,yo(null,s)):(La(n),_f(n,T))}var B=t.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(La(n),n.flags&=-257,n=vf(t,n,a)):n.memoizedState!==null?(Oa(),n.child=t.child,n.flags|=128,n=null):(Oa(),T=s.fallback,u=n.mode,s=Wl({mode:"visible",children:s.children},u),T=cr(T,u,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,gr(n,t.child,null,a),s=n.child,s.memoizedState=mf(a),s.childLanes=gf(t,v,a),n.memoizedState=pf,n=yo(null,s));else if(La(n),Jf(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var $=v.dgst;v=$,s=Error(r(419)),s.stack="",s.digest=v,oo({value:s,source:null,stack:null}),n=vf(t,n,a)}else if(un||jr(t,n,a,!1),v=(a&t.childLanes)!==0,un||v){if(v=Yt,v!==null&&(s=Lr(v,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,lr(t,s),Wn(v,t,s),hf;Qf(T)||ec(),n=vf(t,n,a)}else Qf(T)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Kt=di(T.nextSibling),An=n,Mt=!0,Ra=null,fi=!1,t!==null&&Xp(n,t),n=_f(n,s.children),n.flags|=4096);return n}return u?(Oa(),T=s.fallback,u=n.mode,B=t.child,$=B.sibling,s=Zi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,$!==null?T=Zi($,T):(T=cr(T,u,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,yo(null,s),s=n.child,T=t.child.memoizedState,T===null?T=mf(a):(u=T.cachePool,u!==null?(B=ln._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Kp(),T={baseLanes:T.baseLanes|a,cachePool:u}),s.memoizedState=T,s.childLanes=gf(t,v,a),n.memoizedState=pf,yo(t.child,s)):(La(n),a=t.child,t=a.sibling,a=Zi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function _f(t,n){return n=Wl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Wl(t,n){return t=Zn(22,t,null,n),t.lanes=0,t}function vf(t,n,a){return gr(n,t.child,null,a),t=_f(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function cg(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Nu(t.return,n,a)}function xf(t,n,a,s,u,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function ug(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var v=rn.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,_e(rn,v),wn(t,n,s,a),s=Mt?so:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cg(t,a,n);else if(t.tag===19)cg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ll(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),xf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ll(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}xf(n,!0,a,null,f,s);break;case"together":xf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function ta(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(jr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function yf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Tl(t)))}function Xx(t,n,a){switch(n.tag){case 3:Oe(n,n.stateNode.containerInfo),Ca(n,ln,t.memoizedState.cache),ur();break;case 27:case 5:ze(n);break;case 4:Oe(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Xu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?lg(t,n,a):(La(n),t=ta(t,n,a),t!==null?t.sibling:null);La(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(jr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return ug(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(rn,rn.current),s)break;return null;case 22:return n.lanes=0,ng(t,n,a,n.pendingProps);case 24:Ca(n,ln,t.memoizedState.cache)}return ta(t,n,a)}function fg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!yf(t,a)&&(n.flags&128)===0)return un=!1,Xx(t,n,a);un=(t.flags&131072)!==0}else un=!1,Mt&&(n.flags&1048576)!==0&&kp(n,so,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(t=pr(n.elementType),n.type=t,typeof t=="function")Eu(t)?(s=vr(t,s),n.tag=1,n=sg(null,n,t,s,a)):(n.tag=0,n=df(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===L){n.tag=11,n=$m(null,n,t,s,a);break e}else if(u===P){n.tag=14,n=eg(null,n,t,s,a);break e}}throw n=pe(t)||t,Error(r(306,n,""))}}return n;case 0:return df(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=vr(s,n.pendingProps),sg(t,n,s,u,a);case 3:e:{if(Oe(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Fu(t,n),mo(n,s,null,a);var v=n.memoizedState;if(s=v.cache,Ca(n,ln,s),s!==f.cache&&Lu(n,[ln],a,!0),po(),s=v.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=og(t,n,s,a);break e}else if(s!==u){u=li(Error(r(424)),n),oo(u),n=og(t,n,s,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Kt=di(t.firstChild),An=n,Mt=!0,Ra=null,fi=!0,a=nm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ur(),s===u){n=ta(t,n,a);break e}wn(t,n,s,a)}n=n.child}return n;case 26:return Xl(t,n),t===null?(a=M0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,t=n.pendingProps,s=oc(Q.current).createElement(a),s[on]=n,s[yn]=t,Cn(s,a,t),A(s),n.stateNode=s):n.memoizedState=M0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ze(n),t===null&&Mt&&(s=n.stateNode=x0(n.type,n.pendingProps,Q.current),An=n,fi=!0,u=Kt,Va(n.type)?($f=u,Kt=di(s.firstChild)):Kt=u),wn(t,n,n.pendingProps.children,a),Xl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Mt&&((u=s=Kt)&&(s=yy(s,n.type,n.pendingProps,fi),s!==null?(n.stateNode=s,An=n,Kt=di(s.firstChild),fi=!1,u=!0):u=!1),u||wa(n)),ze(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,s=f.children,jf(u,f)?s=null:v!==null&&jf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=qu(t,n,Ix,null,null,a),Io._currentValue=u),Xl(t,n),wn(t,n,s,a),n.child;case 6:return t===null&&Mt&&((t=a=Kt)&&(a=Sy(a,n.pendingProps,fi),a!==null?(n.stateNode=a,An=n,Kt=null,t=!0):t=!1),t||wa(n)),null;case 13:return lg(t,n,a);case 4:return Oe(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=gr(n,null,s,a):wn(t,n,s,a),n.child;case 11:return $m(t,n,n.type,n.pendingProps,a);case 7:return wn(t,n,n.pendingProps,a),n.child;case 8:return wn(t,n,n.pendingProps.children,a),n.child;case 12:return wn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Ca(n,n.type,s.value),wn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,hr(n),u=Rn(u),s=s(u),n.flags|=1,wn(t,n,s,a),n.child;case 14:return eg(t,n,n.type,n.pendingProps,a);case 15:return tg(t,n,n.type,n.pendingProps,a);case 19:return ug(t,n,a);case 31:return kx(t,n,a);case 22:return ng(t,n,a,n.pendingProps);case 24:return hr(n),s=Rn(ln),t===null?(u=Pu(),u===null&&(u=Yt,f=Ou(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Bu(n),Ca(n,ln,u)):((t.lanes&a)!==0&&(Fu(t,n),mo(n,null,null,a),po()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ca(n,ln,s)):(s=f.cache,Ca(n,ln,s),s!==u.cache&&Lu(n,[ln],a,!0))),wn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function na(t){t.flags|=4}function Sf(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Bg())t.flags|=8192;else throw mr=Cl,zu}else t.flags&=-16777217}function hg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!R0(n))if(Bg())t.flags|=8192;else throw mr=Cl,zu}function ql(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Pt():536870912,t.lanes|=n,ss|=n)}function So(t,n){if(!Mt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Wx(t,n,a){var s=n.pendingProps;switch(wu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ji(ln),Xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Yr(n)?na(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Du())),Qt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(na(n),f!==null?(Qt(n),hg(n,f)):(Qt(n),Sf(n,u,null,s,a))):f?f!==t.memoizedState?(na(n),Qt(n),hg(n,f)):(Qt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&na(n),Qt(n),Sf(n,u,t,s,a)),null;case 27:if(pt(n),a=Q.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&na(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}t=Ae.current,Yr(n)?Wp(n):(t=x0(u,s,a),n.stateNode=t,na(n))}return Qt(n),null;case 5:if(pt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&na(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}if(f=Ae.current,Yr(n))Wp(n);else{var v=oc(Q.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?v.createElement(u,{is:s.is}):v.createElement(u)}}f[on]=n,f[yn]=s;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Cn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&na(n)}}return Qt(n),Sf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&na(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Q.current,Yr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=An,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||l0(t.nodeValue,a)),t||wa(n,!0)}else t=oc(t).createTextNode(s),t[on]=n,n.stateNode=t}return Qt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Yr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[on]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),t=!1}else a=Du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qt(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Yr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[on]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=Du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),ql(n,n.updateQueue),Qt(n),null);case 4:return Xe(),t===null&&kf(n.stateNode.containerInfo),Qt(n),null;case 10:return Ji(n.type),Qt(n),null;case 19:if(te(rn),s=n.memoizedState,s===null)return Qt(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)So(s,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ll(t),f!==null){for(n.flags|=128,So(s,!1),t=f.updateQueue,n.updateQueue=t,ql(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Hp(a,t),a=a.sibling;return _e(rn,rn.current&1|2),Mt&&Ki(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&b()>Ql&&(n.flags|=128,u=!0,So(s,!1),n.lanes=4194304)}else{if(!u)if(t=Ll(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,ql(n,t),So(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Mt)return Qt(n),null}else 2*b()-s.renderingStartTime>Ql&&a!==536870912&&(n.flags|=128,u=!0,So(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=b(),t.sibling=null,a=rn.current,_e(rn,u?a&1|2:a&1),Mt&&Ki(n,s.treeForkCount),t):(Qt(n),null);case 22:case 23:return Qn(n),ku(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&ql(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&te(dr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(ln),Qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function qx(t,n){switch(wu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ji(ln),Xe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(r(340));ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return te(rn),null;case 4:return Xe(),null;case 10:return Ji(n.type),null;case 22:case 23:return Qn(n),ku(),t!==null&&te(dr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ji(ln),null;case 25:return null;default:return null}}function dg(t,n){switch(wu(n),n.tag){case 3:Ji(ln),Xe();break;case 26:case 27:case 5:pt(n);break;case 4:Xe();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:te(rn);break;case 10:Ji(n.type);break;case 22:case 23:Qn(n),ku(),t!==null&&te(dr);break;case 24:Ji(ln)}}function Mo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,v=a.inst;s=f(),v.destroy=s}a=a.next}while(a!==u)}}catch(T){Ft(n,n.return,T)}}function Ia(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var v=s.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,u=n;var B=a,$=T;try{$()}catch(he){Ft(u,B,he)}}}s=s.next}while(s!==f)}}catch(he){Ft(n,n.return,he)}}function pg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{am(n,a)}catch(s){Ft(t,t.return,s)}}}function mg(t,n,a){a.props=vr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ft(t,n,s)}}function bo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Ft(t,n,u)}}function Ii(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ft(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ft(t,n,u)}else a.current=null}function gg(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ft(t,t.return,u)}}function Mf(t,n,a){try{var s=t.stateNode;py(s,t.type,a,n),s[yn]=n}catch(u){Ft(t,t.return,u)}}function _g(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Va(t.type)||t.tag===4}function bf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_g(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Va(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ef(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi));else if(s!==4&&(s===27&&Va(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Ef(t,n,a),t=t.sibling;t!==null;)Ef(t,n,a),t=t.sibling}function Yl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Yl(t,n,a),t=t.sibling;t!==null;)Yl(t,n,a),t=t.sibling}function vg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,s,a),n[on]=t,n[yn]=a}catch(f){Ft(t,t.return,f)}}var ia=!1,fn=!1,Tf=!1,xg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function Yx(t,n){if(t=t.containerInfo,qf=pc,t=Up(t),_u(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,T=-1,B=-1,$=0,he=0,ve=t,ae=null;t:for(;;){for(var le;ve!==a||u!==0&&ve.nodeType!==3||(T=v+u),ve!==f||s!==0&&ve.nodeType!==3||(B=v+s),ve.nodeType===3&&(v+=ve.nodeValue.length),(le=ve.firstChild)!==null;)ae=ve,ve=le;for(;;){if(ve===t)break t;if(ae===a&&++$===u&&(T=v),ae===f&&++he===s&&(B=v),(le=ve.nextSibling)!==null)break;ve=ae,ae=ve.parentNode}ve=le}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yf={focusedElem:t,selectionRange:a},pc=!1,vn=n;vn!==null;)if(n=vn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,vn=t;else for(;vn!==null;){switch(n=vn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var qe=vr(a.type,u);t=s.getSnapshotBeforeUpdate(qe,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Ft(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Kf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Kf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,vn=t;break}vn=n.return}}function yg(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ra(t,a),s&4&&Mo(5,a);break;case 1:if(ra(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Ft(a,a.return,v)}else{var u=vr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Ft(a,a.return,v)}}s&64&&pg(a),s&512&&bo(a,a.return);break;case 3:if(ra(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{am(t,n)}catch(v){Ft(a,a.return,v)}}break;case 27:n===null&&s&4&&vg(a);case 26:case 5:ra(t,a),n===null&&s&4&&gg(a),s&512&&bo(a,a.return);break;case 12:ra(t,a);break;case 31:ra(t,a),s&4&&bg(t,a);break;case 13:ra(t,a),s&4&&Eg(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ny.bind(null,a),My(t,a))));break;case 22:if(s=a.memoizedState!==null||ia,!s){n=n!==null&&n.memoizedState!==null||fn,u=ia;var f=fn;ia=s,(fn=n)&&!f?sa(t,a,(a.subtreeFlags&8772)!==0):ra(t,a),ia=u,fn=f}break;case 30:break;default:ra(t,a)}}function Sg(t){var n=t.alternate;n!==null&&(t.alternate=null,Sg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ks(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,Gn=!1;function aa(t,n,a){for(a=a.child;a!==null;)Mg(t,n,a),a=a.sibling}function Mg(t,n,a){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(me,a)}catch{}switch(a.tag){case 26:fn||Ii(a,n),aa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ii(a,n);var s=$t,u=Gn;Va(a.type)&&($t=a.stateNode,Gn=!1),aa(t,n,a),No(a.stateNode),$t=s,Gn=u;break;case 5:fn||Ii(a,n);case 6:if(s=$t,u=Gn,$t=null,aa(t,n,a),$t=s,Gn=u,$t!==null)if(Gn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{$t.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:$t!==null&&(Gn?(t=$t,p0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ps(t)):p0($t,a.stateNode));break;case 4:s=$t,u=Gn,$t=a.stateNode.containerInfo,Gn=!0,aa(t,n,a),$t=s,Gn=u;break;case 0:case 11:case 14:case 15:Ia(2,a,n),fn||Ia(4,a,n),aa(t,n,a);break;case 1:fn||(Ii(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&mg(a,n,s)),aa(t,n,a);break;case 21:aa(t,n,a);break;case 22:fn=(s=fn)||a.memoizedState!==null,aa(t,n,a),fn=s;break;default:aa(t,n,a)}}function bg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ps(t)}catch(a){Ft(n,n.return,a)}}}function Eg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ps(t)}catch(a){Ft(n,n.return,a)}}function jx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new xg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new xg),n;default:throw Error(r(435,t.tag))}}function jl(t,n){var a=jx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=iy.bind(null,t,s);s.then(u,u)}})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,v=n,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Va(T.type)){$t=T.stateNode,Gn=!1;break e}break;case 5:$t=T.stateNode,Gn=!1;break e;case 3:case 4:$t=T.stateNode.containerInfo,Gn=!0;break e}T=T.return}if($t===null)throw Error(r(160));Mg(f,v,u),$t=null,Gn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Tg(n,t),n=n.sibling}var bi=null;function Tg(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),kn(t),s&4&&(Ia(3,t,t.return),Mo(3,t),Ia(5,t,t.return));break;case 1:Vn(n,t),kn(t),s&512&&(fn||a===null||Ii(a,a.return)),s&64&&ia&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=bi;if(Vn(n,t),kn(t),s&512&&(fn||a===null||Ii(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){e:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ir]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,s,a),f[on]=t,A(f),s=f;break e;case"link":var v=T0("link","href",u).get(s+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}f=u.createElement(s),Cn(f,s,a),u.head.appendChild(f);break;case"meta":if(v=T0("meta","content",u).get(s+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}f=u.createElement(s),Cn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[on]=t,A(f),s=f}t.stateNode=s}else A0(u,t.type,t.stateNode);else t.stateNode=E0(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?A0(u,t.type,t.stateNode):E0(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Mf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),kn(t),s&512&&(fn||a===null||Ii(a,a.return)),a!==null&&s&4&&Mf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),kn(t),s&512&&(fn||a===null||Ii(a,a.return)),t.flags&32){u=t.stateNode;try{pn(u,"")}catch(qe){Ft(t,t.return,qe)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Mf(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Tf=!0);break;case 6:if(Vn(n,t),kn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(qe){Ft(t,t.return,qe)}}break;case 3:if(uc=null,u=bi,bi=lc(n.containerInfo),Vn(n,t),bi=u,kn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ps(n.containerInfo)}catch(qe){Ft(t,t.return,qe)}Tf&&(Tf=!1,Ag(t));break;case 4:s=bi,bi=lc(t.stateNode.containerInfo),Vn(n,t),kn(t),bi=s;break;case 12:Vn(n,t),kn(t);break;case 31:Vn(n,t),kn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,jl(t,s)));break;case 13:Vn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Kl=b()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,jl(t,s)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=ia,he=fn;if(ia=$||u,fn=he||B,Vn(n,t),fn=he,ia=$,kn(t),s&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||ia||fn||xr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=B.stateNode;var ve=B.memoizedProps.style,ae=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;T.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(qe){Ft(B,B.return,qe)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(qe){Ft(B,B.return,qe)}}}else if(n.tag===18){if(a===null){B=n;try{var le=B.stateNode;u?m0(le,!0):m0(B.stateNode,!1)}catch(qe){Ft(B,B.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,jl(t,a))));break;case 19:Vn(n,t),kn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,jl(t,s)));break;case 30:break;case 21:break;default:Vn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(_g(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=bf(t);Yl(t,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(pn(v,""),a.flags&=-33);var T=bf(t);Yl(t,T,v);break;case 3:case 4:var B=a.stateNode.containerInfo,$=bf(t);Ef(t,$,B);break;default:throw Error(r(161))}}catch(he){Ft(t,t.return,he)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ag(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ag(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ra(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)yg(t,n.alternate,n),n=n.sibling}function xr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ia(4,n,n.return),xr(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&mg(n,n.return,a),xr(n);break;case 27:No(n.stateNode);case 26:case 5:Ii(n,n.return),xr(n);break;case 22:n.memoizedState===null&&xr(n);break;case 30:xr(n);break;default:xr(n)}t=t.sibling}}function sa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:sa(u,f,a),Mo(4,f);break;case 1:if(sa(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Ft(s,s.return,$)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)im(B[u],T)}catch($){Ft(s,s.return,$)}}a&&v&64&&pg(f),bo(f,f.return);break;case 27:vg(f);case 26:case 5:sa(u,f,a),a&&s===null&&v&4&&gg(f),bo(f,f.return);break;case 12:sa(u,f,a);break;case 31:sa(u,f,a),a&&v&4&&bg(u,f);break;case 13:sa(u,f,a),a&&v&4&&Eg(u,f);break;case 22:f.memoizedState===null&&sa(u,f,a),bo(f,f.return);break;case 30:break;default:sa(u,f,a)}n=n.sibling}}function Af(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&lo(a))}function Rf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&lo(t))}function Ei(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Rg(t,n,a,s),n=n.sibling}function Rg(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,s),u&2048&&Mo(9,n);break;case 1:Ei(t,n,a,s);break;case 3:Ei(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&lo(t)));break;case 12:if(u&2048){Ei(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Ft(n,n.return,B)}}else Ei(t,n,a,s);break;case 31:Ei(t,n,a,s);break;case 13:Ei(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(t,n,a,s):Eo(t,n):f._visibility&2?Ei(t,n,a,s):(f._visibility|=2,is(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Af(v,n);break;case 24:Ei(t,n,a,s),u&2048&&Rf(n.alternate,n);break;default:Ei(t,n,a,s)}}function is(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,T=a,B=s,$=v.flags;switch(v.tag){case 0:case 11:case 15:is(f,v,T,B,u),Mo(8,v);break;case 23:break;case 22:var he=v.stateNode;v.memoizedState!==null?he._visibility&2?is(f,v,T,B,u):Eo(f,v):(he._visibility|=2,is(f,v,T,B,u)),u&&$&2048&&Af(v.alternate,v);break;case 24:is(f,v,T,B,u),u&&$&2048&&Rf(v.alternate,v);break;default:is(f,v,T,B,u)}n=n.sibling}}function Eo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:Eo(a,s),u&2048&&Af(s.alternate,s);break;case 24:Eo(a,s),u&2048&&Rf(s.alternate,s);break;default:Eo(a,s)}n=n.sibling}}var To=8192;function as(t,n,a){if(t.subtreeFlags&To)for(t=t.child;t!==null;)wg(t,n,a),t=t.sibling}function wg(t,n,a){switch(t.tag){case 26:as(t,n,a),t.flags&To&&t.memoizedState!==null&&Oy(a,bi,t.memoizedState,t.memoizedProps);break;case 5:as(t,n,a);break;case 3:case 4:var s=bi;bi=lc(t.stateNode.containerInfo),as(t,n,a),bi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=To,To=16777216,as(t,n,a),To=s):as(t,n,a));break;default:as(t,n,a)}}function Cg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ao(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];vn=s,Ug(s,t)}Cg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dg(t),t=t.sibling}function Dg(t){switch(t.tag){case 0:case 11:case 15:Ao(t),t.flags&2048&&Ia(9,t,t.return);break;case 3:Ao(t);break;case 12:Ao(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Zl(t)):Ao(t);break;default:Ao(t)}}function Zl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];vn=s,Ug(s,t)}Cg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ia(8,n,n.return),Zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Zl(n));break;default:Zl(n)}t=t.sibling}}function Ug(t,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Ia(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:lo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,vn=s;else e:for(a=t;vn!==null;){s=vn;var u=s.sibling,f=s.return;if(Sg(s),s===a){vn=null;break e}if(u!==null){u.return=f,vn=u;break e}vn=f}}}var Zx={getCacheForType:function(t){var n=Rn(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(ln).controller.signal}},Kx=typeof WeakMap=="function"?WeakMap:Map,Ot=0,Yt=null,gt=null,xt=0,Bt=0,Jn=null,Pa=!1,rs=!1,wf=!1,oa=0,nn=0,za=0,yr=0,Cf=0,$n=0,ss=0,Ro=null,Xn=null,Df=!1,Kl=0,Ng=0,Ql=1/0,Jl=null,Ba=null,mn=0,Fa=null,os=null,la=0,Uf=0,Nf=null,Lg=null,wo=0,Lf=null;function ei(){return(Ot&2)!==0&&xt!==0?xt&-xt:N.T!==null?Ff():js()}function Og(){if($n===0)if((xt&536870912)===0||Mt){var t=De;De<<=1,(De&3932160)===0&&(De=262144),$n=t}else $n=536870912;return t=Kn.current,t!==null&&(t.flags|=32),$n}function Wn(t,n,a){(t===Yt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(ls(t,0),Ha(t,xt,$n,!1)),Un(t,a),((Ot&2)===0||t!==Yt)&&(t===Yt&&((Ot&2)===0&&(yr|=a),nn===4&&Ha(t,xt,$n,!1)),Pi(t))}function Ig(t,n,a){if((Ot&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ue(t,n),u=s?$x(t,n):If(t,n,!0),f=s;do{if(u===0){rs&&!s&&Ha(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Qx(a)){u=If(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var T=t;u=Ro;var B=T.current.memoizedState.isDehydrated;if(B&&(ls(T,v).flags|=256),v=If(T,v,!1),v!==2){if(wf&&!B){T.errorRecoveryDisabledLanes|=f,yr|=f,u=4;break e}f=Xn,Xn=u,f!==null&&(Xn===null?Xn=f:Xn.push.apply(Xn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){ls(t,0),Ha(t,n,0,!0);break}e:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ha(s,n,$n,!Pa);break e;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Kl+300-b(),10<u)){if(Ha(s,n,$n,!Pa),xe(s,0,!0)!==0)break e;la=n,s.timeoutHandle=h0(Pg.bind(null,s,a,Xn,Jl,Df,n,$n,yr,ss,Pa,f,"Throttled",-0,0),u);break e}Pg(s,a,Xn,Jl,Df,n,$n,yr,ss,Pa,f,null,-0,0)}}break}while(!0);Pi(t)}function Pg(t,n,a,s,u,f,v,T,B,$,he,ve,ae,le){if(t.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},wg(n,f,ve);var qe=(f&62914560)===f?Kl-b():(f&4194048)===f?Ng-b():0;if(qe=Iy(ve,qe),qe!==null){la=f,t.cancelPendingCommit=qe(Xg.bind(null,t,n,f,a,s,u,v,T,B,he,ve,null,ae,le)),Ha(t,f,v,!$);return}}Xg(t,n,f,a,s,u,v,T,B)}function Qx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ha(t,n,a,s){n&=~Cf,n&=~yr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Le(u),v=1<<f;s[f]=-1,u&=~v}a!==0&&ul(t,a,n)}function $l(){return(Ot&6)===0?(Co(0),!1):!0}function Of(){if(gt!==null){if(Bt===0)var t=gt.return;else t=gt,Qi=fr=null,Zu(t),Jr=null,uo=0,t=gt;for(;t!==null;)dg(t.alternate,t),t=t.return;gt=null}}function ls(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,_y(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),la=0,Of(),Yt=t,gt=a=Zi(t.current,null),xt=n,Bt=0,Jn=null,Pa=!1,rs=Ue(t,n),wf=!1,ss=$n=Cf=yr=za=nn=0,Xn=Ro=null,Df=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Le(s),f=1<<u;n|=t[u],s&=~f}return oa=n,yl(),a}function zg(t,n){ut=null,N.H=xo,n===Qr||n===wl?(n=$p(),Bt=3):n===zu?(n=$p(),Bt=4):Bt=n===hf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,gt===null&&(nn=1,Vl(t,li(n,t.current)))}function Bg(){var t=Kn.current;return t===null?!0:(xt&4194048)===xt?hi===null:(xt&62914560)===xt||(xt&536870912)!==0?t===hi:!1}function Fg(){var t=N.H;return N.H=xo,t===null?xo:t}function Hg(){var t=N.A;return N.A=Zx,t}function ec(){nn=4,Pa||(xt&4194048)!==xt&&Kn.current!==null||(rs=!0),(za&134217727)===0&&(yr&134217727)===0||Yt===null||Ha(Yt,xt,$n,!1)}function If(t,n,a){var s=Ot;Ot|=2;var u=Fg(),f=Hg();(Yt!==t||xt!==n)&&(Jl=null,ls(t,n)),n=!1;var v=nn;e:do try{if(Bt!==0&&gt!==null){var T=gt,B=Jn;switch(Bt){case 8:Of(),v=6;break e;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var $=Bt;if(Bt=0,Jn=null,cs(t,T,B,$),a&&rs){v=0;break e}break;default:$=Bt,Bt=0,Jn=null,cs(t,T,B,$)}}Jx(),v=nn;break}catch(he){zg(t,he)}while(!0);return n&&t.shellSuspendCounter++,Qi=fr=null,Ot=s,N.H=u,N.A=f,gt===null&&(Yt=null,xt=0,yl()),v}function Jx(){for(;gt!==null;)Gg(gt)}function $x(t,n){var a=Ot;Ot|=2;var s=Fg(),u=Hg();Yt!==t||xt!==n?(Jl=null,Ql=b()+500,ls(t,n)):rs=Ue(t,n);e:do try{if(Bt!==0&&gt!==null){n=gt;var f=Jn;t:switch(Bt){case 1:Bt=0,Jn=null,cs(t,n,f,1);break;case 2:case 9:if(Qp(f)){Bt=0,Jn=null,Vg(n);break}n=function(){Bt!==2&&Bt!==9||Yt!==t||(Bt=7),Pi(t)},f.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:Qp(f)?(Bt=0,Jn=null,Vg(n)):(Bt=0,Jn=null,cs(t,n,f,7));break;case 5:var v=null;switch(gt.tag){case 26:v=gt.memoizedState;case 5:case 27:var T=gt;if(v?R0(v):T.stateNode.complete){Bt=0,Jn=null;var B=T.sibling;if(B!==null)gt=B;else{var $=T.return;$!==null?(gt=$,tc($)):gt=null}break t}}Bt=0,Jn=null,cs(t,n,f,5);break;case 6:Bt=0,Jn=null,cs(t,n,f,6);break;case 8:Of(),nn=6;break e;default:throw Error(r(462))}}ey();break}catch(he){zg(t,he)}while(!0);return Qi=fr=null,N.H=s,N.A=u,Ot=a,gt!==null?0:(Yt=null,xt=0,yl(),nn)}function ey(){for(;gt!==null&&!Ye();)Gg(gt)}function Gg(t){var n=fg(t.alternate,t,oa);t.memoizedProps=t.pendingProps,n===null?tc(t):gt=n}function Vg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=rg(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=rg(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:Zu(n);default:dg(a,n),n=gt=Hp(n,oa),n=fg(a,n,oa)}t.memoizedProps=t.pendingProps,n===null?tc(t):gt=n}function cs(t,n,a,s){Qi=fr=null,Zu(n),Jr=null,uo=0;var u=n.return;try{if(Vx(t,u,n,a,xt)){nn=1,Vl(t,li(a,t.current)),gt=null;return}}catch(f){if(u!==null)throw gt=u,f;nn=1,Vl(t,li(a,t.current)),gt=null;return}n.flags&32768?(Mt||s===1?t=!0:rs||(xt&536870912)!==0?t=!1:(Pa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Kn.current,s!==null&&s.tag===13&&(s.flags|=16384))),kg(n,t)):tc(n)}function tc(t){var n=t;do{if((n.flags&32768)!==0){kg(n,Pa);return}t=n.return;var a=Wx(n.alternate,n,oa);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);nn===0&&(nn=5)}function kg(t,n){do{var a=qx(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);nn=6,gt=null}function Xg(t,n,a,s,u,f,v,T,B){t.cancelPendingCommit=null;do nc();while(mn!==0);if((Ot&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Mu,xi(t,a,f,v,T,B),t===Yt&&(gt=Yt=null,xt=0),os=n,Fa=t,la=a,Uf=f,Nf=u,Lg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ay(Z,function(){return Zg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=N.T,N.T=null,u=H.p,H.p=2,v=Ot,Ot|=4;try{Yx(t,n,a)}finally{Ot=v,H.p=u,N.T=s}}mn=1,Wg(),qg(),Yg()}}function Wg(){if(mn===1){mn=0;var t=Fa,n=os,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var s=H.p;H.p=2;var u=Ot;Ot|=4;try{Tg(n,t);var f=Yf,v=Up(t.containerInfo),T=f.focusedElem,B=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&Dp(T.ownerDocument.documentElement,T)){if(B!==null&&_u(T)){var $=B.start,he=B.end;if(he===void 0&&(he=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(he,T.value.length);else{var ve=T.ownerDocument||document,ae=ve&&ve.defaultView||window;if(ae.getSelection){var le=ae.getSelection(),qe=T.textContent.length,tt=Math.min(B.start,qe),Xt=B.end===void 0?tt:Math.min(B.end,qe);!le.extend&&tt>Xt&&(v=Xt,Xt=tt,tt=v);var Y=Cp(T,tt),k=Cp(T,Xt);if(Y&&k&&(le.rangeCount!==1||le.anchorNode!==Y.node||le.anchorOffset!==Y.offset||le.focusNode!==k.node||le.focusOffset!==k.offset)){var J=ve.createRange();J.setStart(Y.node,Y.offset),le.removeAllRanges(),tt>Xt?(le.addRange(J),le.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),le.addRange(J))}}}}for(ve=[],le=T;le=le.parentNode;)le.nodeType===1&&ve.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ve.length;T++){var ge=ve[T];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}pc=!!qf,Yf=qf=null}finally{Ot=u,H.p=s,N.T=a}}t.current=n,mn=2}}function qg(){if(mn===2){mn=0;var t=Fa,n=os,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var s=H.p;H.p=2;var u=Ot;Ot|=4;try{yg(t,n.alternate,n)}finally{Ot=u,H.p=s,N.T=a}}mn=3}}function Yg(){if(mn===4||mn===3){mn=0,D();var t=Fa,n=os,a=la,s=Lg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,os=Fa=null,jg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ba=null),Or(a),n=n.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(me,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=N.T,u=H.p,H.p=2,N.T=null;try{for(var f=t.onRecoverableError,v=0;v<s.length;v++){var T=s[v];f(T.value,{componentStack:T.stack})}}finally{N.T=n,H.p=u}}(la&3)!==0&&nc(),Pi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Lf?wo++:(wo=0,Lf=t):wo=0,Co(0)}}function jg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,lo(n)))}function nc(){return Wg(),qg(),Yg(),Zg()}function Zg(){if(mn!==5)return!1;var t=Fa,n=Uf;Uf=0;var a=Or(la),s=N.T,u=H.p;try{H.p=32>a?32:a,N.T=null,a=Nf,Nf=null;var f=Fa,v=la;if(mn=0,os=Fa=null,la=0,(Ot&6)!==0)throw Error(r(331));var T=Ot;if(Ot|=4,Dg(f.current),Rg(f,f.current,v,a),Ot=T,Co(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(me,f)}catch{}return!0}finally{H.p=u,N.T=s,jg(t,n)}}function Kg(t,n,a){n=li(a,n),n=ff(t.stateNode,n,2),t=Na(t,n,2),t!==null&&(Un(t,2),Pi(t))}function Ft(t,n,a){if(t.tag===3)Kg(t,t,a);else for(;n!==null;){if(n.tag===3){Kg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ba===null||!Ba.has(s))){t=li(a,t),a=Qm(2),s=Na(n,a,2),s!==null&&(Jm(a,s,n,t),Un(s,2),Pi(s));break}}n=n.return}}function Pf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Kx;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(wf=!0,u.add(a),t=ty.bind(null,t,n,a),n.then(t,t))}function ty(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Yt===t&&(xt&a)===a&&(nn===4||nn===3&&(xt&62914560)===xt&&300>b()-Kl?(Ot&2)===0&&ls(t,0):Cf|=a,ss===xt&&(ss=0)),Pi(t)}function Qg(t,n){n===0&&(n=Pt()),t=lr(t,n),t!==null&&(Un(t,n),Pi(t))}function ny(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Qg(t,a)}function iy(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Qg(t,a)}function ay(t,n){return vt(t,n)}var ic=null,us=null,zf=!1,ac=!1,Bf=!1,Ga=0;function Pi(t){t!==us&&t.next===null&&(us===null?ic=us=t:us=us.next=t),ac=!0,zf||(zf=!0,sy())}function Co(t,n){if(!Bf&&ac){Bf=!0;do for(var a=!1,s=ic;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var v=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Le(42|t)+1)-1,f&=u&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,t0(s,f))}else f=xt,f=xe(s,s===Yt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ue(s,f)||(a=!0,t0(s,f));s=s.next}while(a);Bf=!1}}function ry(){Jg()}function Jg(){ac=zf=!1;var t=0;Ga!==0&&gy()&&(t=Ga);for(var n=b(),a=null,s=ic;s!==null;){var u=s.next,f=$g(s,n);f===0?(s.next=null,a===null?ic=u:a.next=u,u===null&&(us=a)):(a=s,(t!==0||(f&3)!==0)&&(ac=!0)),s=u}mn!==0&&mn!==5||Co(t),Ga!==0&&(Ga=0)}function $g(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Le(f),T=1<<v,B=u[v];B===-1?((T&a)===0||(T&s)!==0)&&(u[v]=rt(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=Yt,a=xt,a=xe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&wt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ue(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&wt(s),Or(a)){case 2:case 8:a=ce;break;case 32:a=Z;break;case 268435456:a=we;break;default:a=Z}return s=e0.bind(null,t),a=vt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&wt(s),t.callbackPriority=2,t.callbackNode=null,2}function e0(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(nc()&&t.callbackNode!==a)return null;var s=xt;return s=xe(t,t===Yt?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Ig(t,s,n),$g(t,b()),t.callbackNode!=null&&t.callbackNode===a?e0.bind(null,t):null)}function t0(t,n){if(nc())return null;Ig(t,n,!0)}function sy(){vy(function(){(Ot&6)!==0?vt(de,ry):Jg()})}function Ff(){if(Ga===0){var t=Zr;t===0&&(t=Be,Be<<=1,(Be&261888)===0&&(Be=256)),Ga=t}return Ga}function n0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:hl(""+t)}function i0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function oy(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=n0((u[yn]||null).action),v=s.submitter;v&&(n=(n=v[yn]||null)?n0(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new gl("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ga!==0){var B=v?i0(u,v):new FormData(u);rf(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=v?i0(u,v):new FormData(u),rf(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Hf=0;Hf<Su.length;Hf++){var Gf=Su[Hf],ly=Gf.toLowerCase(),cy=Gf[0].toUpperCase()+Gf.slice(1);Mi(ly,"on"+cy)}Mi(Op,"onAnimationEnd"),Mi(Ip,"onAnimationIteration"),Mi(Pp,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(Tx,"onTransitionRun"),Mi(Ax,"onTransitionStart"),Mi(Rx,"onTransitionCancel"),Mi(zp,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),ie("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ie("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ie("onBeforeInput",["compositionend","keypress","textInput","paste"]),ie("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ie("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ie("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Do));function a0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var v=s.length-1;0<=v;v--){var T=s[v],B=T.instance,$=T.currentTarget;if(T=T.listener,B!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=$;try{f(u)}catch(he){xl(he)}u.currentTarget=null,f=B}else for(v=0;v<s.length;v++){if(T=s[v],B=T.instance,$=T.currentTarget,T=T.listener,B!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=$;try{f(u)}catch(he){xl(he)}u.currentTarget=null,f=B}}}}function _t(t,n){var a=n[Ir];a===void 0&&(a=n[Ir]=new Set);var s=t+"__bubble";a.has(s)||(r0(n,t,2,!1),a.add(s))}function Vf(t,n,a){var s=0;n&&(s|=4),r0(a,t,s,n)}var rc="_reactListening"+Math.random().toString(36).slice(2);function kf(t){if(!t[rc]){t[rc]=!0,q.forEach(function(a){a!=="selectionchange"&&(uy.has(a)||Vf(a,!1,t),Vf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[rc]||(n[rc]=!0,Vf("selectionchange",!1,n))}}function r0(t,n,a,s){switch(O0(n)){case 2:var u=By;break;case 8:u=Fy;break;default:u=ah}a=u.bind(null,n,a,t),u=void 0,!lu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Xf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var T=s.stateNode.containerInfo;if(T===u)break;if(v===4)for(v=s.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;T!==null;){if(v=Ma(T),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){s=f=v;continue e}T=T.parentNode}}s=s.return}up(function(){var $=f,he=su(a),ve=[];e:{var ae=Bp.get(t);if(ae!==void 0){var le=gl,qe=t;switch(t){case"keypress":if(pl(a)===0)break e;case"keydown":case"keyup":le=ix;break;case"focusin":qe="focus",le=hu;break;case"focusout":qe="blur",le=hu;break;case"beforeblur":case"afterblur":le=hu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=Wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=sx;break;case Op:case Ip:case Pp:le=jv;break;case zp:le=lx;break;case"scroll":case"scrollend":le=kv;break;case"wheel":le=ux;break;case"copy":case"cut":case"paste":le=Kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=mp;break;case"toggle":case"beforetoggle":le=hx}var tt=(n&4)!==0,Xt=!tt&&(t==="scroll"||t==="scrollend"),Y=tt?ae!==null?ae+"Capture":null:ae;tt=[];for(var k=$,J;k!==null;){var ge=k;if(J=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||J===null||Y===null||(ge=Qs(k,Y),ge!=null&&tt.push(Uo(k,ge,J))),Xt)break;k=k.return}0<tt.length&&(ae=new le(ae,qe,null,a,he),ve.push({event:ae,listeners:tt}))}}if((n&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",ae&&a!==ru&&(qe=a.relatedTarget||a.fromElement)&&(Ma(qe)||qe[yi]))break e;if((le||ae)&&(ae=he.window===he?he:(ae=he.ownerDocument)?ae.defaultView||ae.parentWindow:window,le?(qe=a.relatedTarget||a.toElement,le=$,qe=qe?Ma(qe):null,qe!==null&&(Xt=c(qe),tt=qe.tag,qe!==Xt||tt!==5&&tt!==27&&tt!==6)&&(qe=null)):(le=null,qe=$),le!==qe)){if(tt=dp,ge="onMouseLeave",Y="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(tt=mp,ge="onPointerLeave",Y="onPointerEnter",k="pointer"),Xt=le==null?ae:ar(le),J=qe==null?ae:ar(qe),ae=new tt(ge,k+"leave",le,a,he),ae.target=Xt,ae.relatedTarget=J,ge=null,Ma(he)===$&&(tt=new tt(Y,k+"enter",qe,a,he),tt.target=J,tt.relatedTarget=Xt,ge=tt),Xt=ge,le&&qe)t:{for(tt=fy,Y=le,k=qe,J=0,ge=Y;ge;ge=tt(ge))J++;ge=0;for(var Je=k;Je;Je=tt(Je))ge++;for(;0<J-ge;)Y=tt(Y),J--;for(;0<ge-J;)k=tt(k),ge--;for(;J--;){if(Y===k||k!==null&&Y===k.alternate){tt=Y;break t}Y=tt(Y),k=tt(k)}tt=null}else tt=null;le!==null&&s0(ve,ae,le,tt,!1),qe!==null&&Xt!==null&&s0(ve,Xt,qe,tt,!0)}}e:{if(ae=$?ar($):window,le=ae.nodeName&&ae.nodeName.toLowerCase(),le==="select"||le==="input"&&ae.type==="file")var Ct=bp;else if(Sp(ae))if(Ep)Ct=Mx;else{Ct=yx;var Ke=xx}else le=ae.nodeName,!le||le.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?$&&Si($.elementType)&&(Ct=bp):Ct=Sx;if(Ct&&(Ct=Ct(t,$))){Mp(ve,Ct,a,he);break e}Ke&&Ke(t,ae,$),t==="focusout"&&$&&ae.type==="number"&&$.memoizedProps.value!=null&&Mn(ae,"number",ae.value)}switch(Ke=$?ar($):window,t){case"focusin":(Sp(Ke)||Ke.contentEditable==="true")&&(Gr=Ke,vu=$,ro=null);break;case"focusout":ro=vu=Gr=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,Np(ve,a,he);break;case"selectionchange":if(Ex)break;case"keydown":case"keyup":Np(ve,a,he)}var ft;if(pu)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Hr?xp(t,a)&&(yt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(gp&&a.locale!=="ko"&&(Hr||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Hr&&(ft=fp()):(Ta=he,cu="value"in Ta?Ta.value:Ta.textContent,Hr=!0)),Ke=sc($,yt),0<Ke.length&&(yt=new pp(yt,t,null,a,he),ve.push({event:yt,listeners:Ke}),ft?yt.data=ft:(ft=yp(a),ft!==null&&(yt.data=ft)))),(ft=px?mx(t,a):gx(t,a))&&(yt=sc($,"onBeforeInput"),0<yt.length&&(Ke=new pp("onBeforeInput","beforeinput",null,a,he),ve.push({event:Ke,listeners:yt}),Ke.data=ft)),oy(ve,t,$,a,he)}a0(ve,n)})}function Uo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function sc(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Qs(t,a),u!=null&&s.unshift(Uo(t,u,f)),u=Qs(t,n),u!=null&&s.push(Uo(t,u,f))),t.tag===3)return s;t=t.return}return[]}function fy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function s0(t,n,a,s,u){for(var f=n._reactName,v=[];a!==null&&a!==s;){var T=a,B=T.alternate,$=T.stateNode;if(T=T.tag,B!==null&&B===s)break;T!==5&&T!==26&&T!==27||$===null||(B=$,u?($=Qs(a,f),$!=null&&v.unshift(Uo(a,$,B))):u||($=Qs(a,f),$!=null&&v.push(Uo(a,$,B)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var hy=/\r\n?/g,dy=/\u0000|\uFFFD/g;function o0(t){return(typeof t=="string"?t:""+t).replace(hy,`
`).replace(dy,"")}function l0(t,n){return n=o0(n),o0(t)===n}function kt(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||pn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&pn(t,""+s);break;case"className":$e(t,"class",s);break;case"tabIndex":$e(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":$e(t,a,s);break;case"style":zr(t,s,f);break;case"data":if(n!=="object"){$e(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=hl(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&kt(t,n,"name",u.name,u,null),kt(t,n,"formEncType",u.formEncType,u,null),kt(t,n,"formMethod",u.formMethod,u,null),kt(t,n,"formTarget",u.formTarget,u,null)):(kt(t,n,"encType",u.encType,u,null),kt(t,n,"method",u.method,u,null),kt(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=hl(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Yi);break;case"onScroll":s!=null&&_t("scroll",t);break;case"onScrollEnd":s!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=hl(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":_t("beforetoggle",t),_t("toggle",t),je(t,"popover",s);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":je(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Gv.get(a)||a,je(t,a,s))}}function Wf(t,n,a,s,u,f){switch(a){case"style":zr(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?pn(t,s):(typeof s=="number"||typeof s=="bigint")&&pn(t,""+s);break;case"onScroll":s!=null&&_t("scroll",t);break;case"onScrollEnd":s!=null&&_t("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break e}a in t?t[a]=s:s===!0?t.setAttribute(a,""):je(t,a,s)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:kt(t,n,f,v,a,null)}}u&&kt(t,n,"srcSet",a.srcSet,a,null),s&&kt(t,n,"src",a.src,a,null);return;case"input":_t("invalid",t);var T=f=v=u=null,B=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var he=a[s];if(he!=null)switch(s){case"name":u=he;break;case"type":v=he;break;case"checked":B=he;break;case"defaultChecked":$=he;break;case"value":f=he;break;case"defaultValue":T=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:kt(t,n,s,he,a,null)}}qi(t,f,T,B,$,v,u,!1);return;case"select":_t("invalid",t),s=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":s=T;default:kt(t,n,u,T,a,null)}n=f,a=v,t.multiple=!!s,n!=null?si(t,!!s,n,!1):a!=null&&si(t,!!s,a,!0);return;case"textarea":_t("invalid",t),f=u=s=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:kt(t,n,v,T,a,null)}bn(t,s,u,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(s=a[B],s!=null)&&(B==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":kt(t,n,B,s,a,null));return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(s=0;s<Do.length;s++)_t(Do[s],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:kt(t,n,$,s,a,null)}return;default:if(Si(n)){for(he in a)a.hasOwnProperty(he)&&(s=a[he],s!==void 0&&Wf(t,n,he,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&kt(t,n,T,s,a,null))}function py(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,T=null,B=null,$=null,he=null;for(le in a){var ve=a[le];if(a.hasOwnProperty(le)&&ve!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":B=ve;default:s.hasOwnProperty(le)||kt(t,n,le,null,s,ve)}}for(var ae in s){var le=s[ae];if(ve=a[ae],s.hasOwnProperty(ae)&&(le!=null||ve!=null))switch(ae){case"type":f=le;break;case"name":u=le;break;case"checked":$=le;break;case"defaultChecked":he=le;break;case"value":v=le;break;case"defaultValue":T=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==ve&&kt(t,n,ae,le,s,ve)}}Sn(t,v,T,B,$,he,f,u);return;case"select":le=v=T=ae=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":le=B;default:s.hasOwnProperty(f)||kt(t,n,f,null,s,B)}for(u in s)if(f=s[u],B=a[u],s.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":ae=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==B&&kt(t,n,u,f,s,B)}n=T,a=v,s=le,ae!=null?si(t,!!a,ae,!1):!!s!=!!a&&(n!=null?si(t,!!a,n,!0):si(t,!!a,a?[]:"",!1));return;case"textarea":le=ae=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:kt(t,n,T,null,s,u)}for(v in s)if(u=s[v],f=a[v],s.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":ae=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&kt(t,n,v,u,s,f)}zt(t,ae,le);return;case"option":for(var qe in a)ae=a[qe],a.hasOwnProperty(qe)&&ae!=null&&!s.hasOwnProperty(qe)&&(qe==="selected"?t.selected=!1:kt(t,n,qe,null,s,ae));for(B in s)ae=s[B],le=a[B],s.hasOwnProperty(B)&&ae!==le&&(ae!=null||le!=null)&&(B==="selected"?t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol":kt(t,n,B,ae,s,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)ae=a[tt],a.hasOwnProperty(tt)&&ae!=null&&!s.hasOwnProperty(tt)&&kt(t,n,tt,null,s,ae);for($ in s)if(ae=s[$],le=a[$],s.hasOwnProperty($)&&ae!==le&&(ae!=null||le!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,n));break;default:kt(t,n,$,ae,s,le)}return;default:if(Si(n)){for(var Xt in a)ae=a[Xt],a.hasOwnProperty(Xt)&&ae!==void 0&&!s.hasOwnProperty(Xt)&&Wf(t,n,Xt,void 0,s,ae);for(he in s)ae=s[he],le=a[he],!s.hasOwnProperty(he)||ae===le||ae===void 0&&le===void 0||Wf(t,n,he,ae,s,le);return}}for(var Y in a)ae=a[Y],a.hasOwnProperty(Y)&&ae!=null&&!s.hasOwnProperty(Y)&&kt(t,n,Y,null,s,ae);for(ve in s)ae=s[ve],le=a[ve],!s.hasOwnProperty(ve)||ae===le||ae==null&&le==null||kt(t,n,ve,ae,s,le)}function c0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function my(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,v=u.initiatorType,T=u.duration;if(f&&T&&c0(v)){for(v=0,T=u.responseEnd,s+=1;s<a.length;s++){var B=a[s],$=B.startTime;if($>T)break;var he=B.transferSize,ve=B.initiatorType;he&&c0(ve)&&(B=B.responseEnd,v+=he*(B<T?1:(T-$)/(B-$)))}if(--s,n+=8*(f+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var qf=null,Yf=null;function oc(t){return t.nodeType===9?t:t.ownerDocument}function u0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function f0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function jf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zf=null;function gy(){var t=window.event;return t&&t.type==="popstate"?t===Zf?!1:(Zf=t,!0):(Zf=null,!1)}var h0=typeof setTimeout=="function"?setTimeout:void 0,_y=typeof clearTimeout=="function"?clearTimeout:void 0,d0=typeof Promise=="function"?Promise:void 0,vy=typeof queueMicrotask=="function"?queueMicrotask:typeof d0<"u"?function(t){return d0.resolve(null).then(t).catch(xy)}:h0;function xy(t){setTimeout(function(){throw t})}function Va(t){return t==="head"}function p0(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),ps(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")No(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,No(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[ir]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&No(t.ownerDocument.body);a=u}while(a);ps(n)}function m0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Kf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),Ks(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function yy(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ir])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function Sy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function g0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function Qf(t){return t.data==="$?"||t.data==="$~"}function Jf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function My(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var $f=null;function _0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return di(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function v0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function x0(t,n,a){switch(n=oc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function No(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ks(t)}var pi=new Map,y0=new Set;function lc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ca=H.d;H.d={f:by,r:Ey,D:Ty,C:Ay,L:Ry,m:wy,X:Dy,S:Cy,M:Uy};function by(){var t=ca.f(),n=$l();return t||n}function Ey(t){var n=ba(t);n!==null&&n.tag===5&&n.type==="form"?zm(n):ca.r(t)}var fs=typeof document>"u"?null:document;function S0(t,n,a){var s=fs;if(s&&typeof n=="string"&&n){var u=ot(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),y0.has(u)||(y0.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Cn(n,"link",t),A(n),s.head.appendChild(n)))}}function Ty(t){ca.D(t),S0("dns-prefetch",t,null)}function Ay(t,n){ca.C(t,n),S0("preconnect",t,n)}function Ry(t,n,a){ca.L(t,n,a);var s=fs;if(s&&t&&n){var u='link[rel="preload"][as="'+ot(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ot(a.imageSizes)+'"]')):u+='[href="'+ot(t)+'"]';var f=u;switch(n){case"style":f=hs(t);break;case"script":f=ds(t)}pi.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),pi.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(Lo(f))||n==="script"&&s.querySelector(Oo(f))||(n=s.createElement("link"),Cn(n,"link",t),A(n),s.head.appendChild(n)))}}function wy(t,n){ca.m(t,n);var a=fs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ot(s)+'"][href="'+ot(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ds(t)}if(!pi.has(f)&&(t=g({rel:"modulepreload",href:t},n),pi.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Oo(f)))return}s=a.createElement("link"),Cn(s,"link",t),A(s),a.head.appendChild(s)}}}function Cy(t,n,a){ca.S(t,n,a);var s=fs;if(s&&t){var u=Ea(s).hoistableStyles,f=hs(t);n=n||"default";var v=u.get(f);if(!v){var T={loading:0,preload:null};if(v=s.querySelector(Lo(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=pi.get(f))&&eh(t,a);var B=v=s.createElement("link");A(B),Cn(B,"link",t),B._p=new Promise(function($,he){B.onload=$,B.onerror=he}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,cc(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:T},u.set(f,v)}}}function Dy(t,n){ca.X(t,n);var a=fs;if(a&&t){var s=Ea(a).hoistableScripts,u=ds(t),f=s.get(u);f||(f=a.querySelector(Oo(u)),f||(t=g({src:t,async:!0},n),(n=pi.get(u))&&th(t,n),f=a.createElement("script"),A(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Uy(t,n){ca.M(t,n);var a=fs;if(a&&t){var s=Ea(a).hoistableScripts,u=ds(t),f=s.get(u);f||(f=a.querySelector(Oo(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=pi.get(u))&&th(t,n),f=a.createElement("script"),A(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function M0(t,n,a,s){var u=(u=Q.current)?lc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hs(a.href),a=Ea(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=hs(a.href);var f=Ea(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(Lo(t)))&&!f._p&&(v.instance=f,v.state.loading=5),pi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(t,a),f||Ny(u,t,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ds(a),a=Ea(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function hs(t){return'href="'+ot(t)+'"'}function Lo(t){return'link[rel="stylesheet"]['+t+"]"}function b0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Ny(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Cn(n,"link",a),A(n),t.head.appendChild(n))}function ds(t){return'[src="'+ot(t)+'"]'}function Oo(t){return"script[async]"+t}function E0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+ot(a.href)+'"]');if(s)return n.instance=s,A(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),A(s),Cn(s,"style",u),cc(s,a.precedence,t),n.instance=s;case"stylesheet":u=hs(a.href);var f=t.querySelector(Lo(u));if(f)return n.state.loading|=4,n.instance=f,A(f),f;s=b0(a),(u=pi.get(u))&&eh(s,u),f=(t.ownerDocument||t).createElement("link"),A(f);var v=f;return v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),Cn(f,"link",s),n.state.loading|=4,cc(f,a.precedence,t),n.instance=f;case"script":return f=ds(a.src),(u=t.querySelector(Oo(f)))?(n.instance=u,A(u),u):(s=a,(u=pi.get(f))&&(s=g({},a),th(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),A(u),Cn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,cc(s,a.precedence,t));return n.instance}function cc(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,v=0;v<s.length;v++){var T=s[v];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function eh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function th(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var uc=null;function T0(t,n,a){if(uc===null){var s=new Map,u=uc=new Map;u.set(a,s)}else u=uc,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ir]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var T=s.get(v);T?T.push(f):s.set(v,[f])}}return s}function A0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Ly(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function R0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Oy(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=hs(s.href),f=n.querySelector(Lo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=fc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,A(f);return}f=n.ownerDocument||n,s=b0(s),(u=pi.get(u))&&eh(s,u),f=f.createElement("link"),A(f);var v=f;v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),Cn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=fc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var nh=0;function Iy(t,n){return t.stylesheets&&t.count===0&&dc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&dc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&nh===0&&(nh=62500*my());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&dc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>nh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function fc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)dc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var hc=null;function dc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,hc=new Map,n.forEach(Py,t),hc=null,fc.call(t))}function Py(t,n){if(!(n.state.loading&4)){var a=hc.get(t);if(a)var s=a.get(null);else{a=new Map,hc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||s,f===s&&a.set(null,u),a.set(v,u),this.count++,s=fc.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Io={$$typeof:I,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function zy(t,n,a,s,u,f,v,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function w0(t,n,a,s,u,f,v,T,B,$,he,ve){return t=new zy(t,n,a,v,B,$,he,ve,T),n=1,f===!0&&(n|=24),f=Zn(3,null,null,n),t.current=f,f.stateNode=t,n=Ou(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Bu(f),t}function C0(t){return t?(t=Xr,t):Xr}function D0(t,n,a,s,u,f){u=C0(u),s.context===null?s.context=u:s.pendingContext=u,s=Ua(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Na(t,s,n),a!==null&&(Wn(a,t,n),ho(a,t,n))}function U0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ih(t,n){U0(t,n),(t=t.alternate)&&U0(t,n)}function N0(t){if(t.tag===13||t.tag===31){var n=lr(t,67108864);n!==null&&Wn(n,t,67108864),ih(t,67108864)}}function L0(t){if(t.tag===13||t.tag===31){var n=ei();n=Ys(n);var a=lr(t,n);a!==null&&Wn(a,t,n),ih(t,n)}}var pc=!0;function By(t,n,a,s){var u=N.T;N.T=null;var f=H.p;try{H.p=2,ah(t,n,a,s)}finally{H.p=f,N.T=u}}function Fy(t,n,a,s){var u=N.T;N.T=null;var f=H.p;try{H.p=8,ah(t,n,a,s)}finally{H.p=f,N.T=u}}function ah(t,n,a,s){if(pc){var u=rh(s);if(u===null)Xf(t,n,s,mc,a),I0(t,s);else if(Gy(u,t,n,a,s))s.stopPropagation();else if(I0(t,s),n&4&&-1<Hy.indexOf(t)){for(;u!==null;){var f=ba(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Te(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var B=1<<31-Le(v);T.entanglements[1]|=B,v&=~B}Pi(f),(Ot&6)===0&&(Ql=b()+500,Co(0))}}break;case 31:case 13:T=lr(f,2),T!==null&&Wn(T,f,2),$l(),ih(f,2)}if(f=rh(s),f===null&&Xf(t,n,s,mc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Xf(t,n,s,null,a)}}function rh(t){return t=su(t),sh(t)}var mc=null;function sh(t){if(mc=null,t=Ma(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return mc=t,null}function O0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case de:return 2;case ce:return 8;case Z:case Ie:return 32;case we:return 268435456;default:return 32}default:return 32}}var oh=!1,ka=null,Xa=null,Wa=null,Po=new Map,zo=new Map,qa=[],Hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function I0(t,n){switch(t){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(n.pointerId)}}function Bo(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ba(n),n!==null&&N0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Gy(t,n,a,s,u){switch(n){case"focusin":return ka=Bo(ka,t,n,a,s,u),!0;case"dragenter":return Xa=Bo(Xa,t,n,a,s,u),!0;case"mouseover":return Wa=Bo(Wa,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return Po.set(f,Bo(Po.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,zo.set(f,Bo(zo.get(f)||null,t,n,a,s,u)),!0}return!1}function P0(t){var n=Ma(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ni(t.priority,function(){L0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Ni(t.priority,function(){L0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=rh(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);ru=s,a.target.dispatchEvent(s),ru=null}else return n=ba(a),n!==null&&N0(n),t.blockedOn=a,!1;n.shift()}return!0}function z0(t,n,a){gc(t)&&a.delete(n)}function Vy(){oh=!1,ka!==null&&gc(ka)&&(ka=null),Xa!==null&&gc(Xa)&&(Xa=null),Wa!==null&&gc(Wa)&&(Wa=null),Po.forEach(z0),zo.forEach(z0)}function _c(t,n){t.blockedOn===n&&(t.blockedOn=null,oh||(oh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Vy)))}var vc=null;function B0(t){vc!==t&&(vc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){vc===t&&(vc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(sh(s||a)===null)continue;break}var f=ba(a);f!==null&&(t.splice(n,3),n-=3,rf(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function ps(t){function n(B){return _c(B,t)}ka!==null&&_c(ka,t),Xa!==null&&_c(Xa,t),Wa!==null&&_c(Wa,t),Po.forEach(n),zo.forEach(n);for(var a=0;a<qa.length;a++){var s=qa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)P0(a),a.blockedOn===null&&qa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],v=u[yn]||null;if(typeof f=="function")v||B0(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[yn]||null)T=v.formAction;else if(sh(u)!==null)continue}else T=v.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),B0(a)}}}function F0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function lh(t){this._internalRoot=t}xc.prototype.render=lh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ei();D0(a,s,t,n,null,null)},xc.prototype.unmount=lh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;D0(t.current,2,null,t,null,null),$l(),n[yi]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var n=js();t={blockedOn:null,target:t,priority:n};for(var a=0;a<qa.length&&n!==0&&n<qa[a].priority;a++);qa.splice(a,0,t),a===0&&P0(t)}};var H0=e.version;if(H0!=="19.2.3")throw Error(r(527,H0,"19.2.3"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var ky={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{me=yc.inject(ky),Ee=yc}catch{}}return Ho.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Ym,f=jm,v=Zm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=w0(t,1,!1,null,null,a,s,null,u,f,v,F0),t[yi]=n.current,kf(t),new lh(n)},Ho.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Ym,v=jm,T=Zm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=w0(t,1,!0,n,a??null,s,u,B,f,v,T,F0),n.context=C0(null),a=n.current,s=ei(),s=Ys(s),u=Ua(s),u.callback=null,Na(a,u,s),a=s,n.current.lanes=a,Un(n,a),Pi(n),t[yi]=n.current,kf(t),new xc(n)},Ho.version="19.2.3",Ho}var K0;function eS(){if(K0)return fh.exports;K0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),fh.exports=$y(),fh.exports}var tS=eS();const nS=tv(tS),iS="modulepreload",aS=function(o){return"/horror/"+o},Q0={},rS=function(e,i,r){let l=Promise.resolve();if(i&&i.length>0){let p=function(_){return Promise.all(_.map(g=>Promise.resolve(g).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};var h=p;document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=d?.nonce||d?.getAttribute("nonce");l=p(i.map(_=>{if(_=aS(_),_ in Q0)return;Q0[_]=!0;const g=_.endsWith(".css"),y=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${y}`))return;const S=document.createElement("link");if(S.rel=g?"stylesheet":iS,g||(S.as="script"),S.crossOrigin="",S.href=_,m&&S.setAttribute("nonce",m),document.head.appendChild(S),g)return new Promise((E,w)=>{S.addEventListener("load",E),S.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${_}`)))})}))}function c(d){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=d,window.dispatchEvent(m),!m.defaultPrevented)throw d}return l.then(d=>{for(const m of d||[])m.status==="rejected"&&c(m.reason);return e().catch(c)})};function sS(o={}){const{immediate:e=!1,onNeedRefresh:i,onOfflineReady:r,onRegistered:l,onRegisteredSW:c,onRegisterError:h}=o;let d,m;const p=async(g=!0)=>{await m};async function _(){if("serviceWorker"in navigator){if(d=await rS(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:g}},[]).then(({Workbox:g})=>new g("/horror/sw.js",{scope:"/horror/",type:"classic"})).catch(g=>{h?.(g)}),!d)return;d.addEventListener("activated",g=>{(g.isUpdate||g.isExternal)&&window.location.reload()}),d.addEventListener("installed",g=>{g.isUpdate||r?.()}),d.register({immediate:e}).then(g=>{c?c("/horror/sw.js",g):l?.(g)}).catch(g=>{h?.(g)})}}return m=_(),p}const oS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lS=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),J0=o=>{const e=lS(o);return e.charAt(0).toUpperCase()+e.slice(1)},nv=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),cS=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var uS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const fS=Ut.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:h,...d},m)=>Ut.createElement("svg",{ref:m,...uS,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:nv("lucide",l),...!c&&!cS(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,_])=>Ut.createElement(p,_)),...Array.isArray(c)?c:[c]]));const tu=(o,e)=>{const i=Ut.forwardRef(({className:r,...l},c)=>Ut.createElement(fS,{ref:c,iconNode:e,className:nv(`lucide-${oS(J0(o))}`,`lucide-${o}`,r),...l}));return i.displayName=J0(o),i};const hS=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],iv=tu("arrow-left",hS);const dS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],pS=tu("circle-alert",dS);const mS=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],gS=tu("eye",mS);const _S=[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]],vS=tu("ghost",_S);const Wd="182",xS=0,$0=1,yS=2,Xc=1,SS=2,Ko=3,nr=0,Yn=1,ma=2,_a=0,Os=1,e_=2,t_=3,n_=4,MS=5,wr=100,bS=101,ES=102,TS=103,AS=104,RS=200,wS=201,CS=202,DS=203,Zh=204,Kh=205,US=206,NS=207,LS=208,OS=209,IS=210,PS=211,zS=212,BS=213,FS=214,Qh=0,Jh=1,$h=2,Ps=3,ed=4,td=5,nd=6,id=7,av=0,HS=1,GS=2,Gi=0,rv=1,sv=2,ov=3,lv=4,cv=5,uv=6,fv=7,hv=300,Nr=301,zs=302,ad=303,rd=304,nu=306,tl=1e3,ga=1001,sd=1002,dn=1003,VS=1004,Sc=1005,In=1006,mh=1007,Dr=1008,ii=1009,dv=1010,pv=1011,nl=1012,qd=1013,ki=1014,Fi=1015,ya=1016,Yd=1017,jd=1018,il=1020,mv=35902,gv=35899,_v=1021,vv=1022,Ci=1023,Sa=1026,Ur=1027,xv=1028,Zd=1029,Bs=1030,Kd=1031,Qd=1033,Wc=33776,qc=33777,Yc=33778,jc=33779,od=35840,ld=35841,cd=35842,ud=35843,fd=36196,hd=37492,dd=37496,pd=37488,md=37489,gd=37490,_d=37491,vd=37808,xd=37809,yd=37810,Sd=37811,Md=37812,bd=37813,Ed=37814,Td=37815,Ad=37816,Rd=37817,wd=37818,Cd=37819,Dd=37820,Ud=37821,Nd=36492,Ld=36494,Od=36495,Id=36283,Pd=36284,zd=36285,Bd=36286,kS=3200,yv=0,XS=1,er="",gi="srgb",Fs="srgb-linear",Kc="linear",Ht="srgb",ms=7680,i_=519,WS=512,qS=513,YS=514,Jd=515,jS=516,ZS=517,$d=518,KS=519,Fd=35044,a_="300 es",Hi=2e3,Qc=2001;function Sv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function al(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function QS(){const o=al("canvas");return o.style.display="block",o}const r_={};function Jc(...o){const e="THREE."+o.shift();console.log(e,...o)}function lt(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Tt(...o){const e="THREE."+o.shift();console.error(e,...o)}function rl(...o){const e=o.join(" ");e in r_||(r_[e]=!0,lt(...o))}function JS(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Vs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let s_=1234567;const $o=Math.PI/180,Hs=180/Math.PI;function va(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function St(o,e,i){return Math.max(e,Math.min(i,o))}function ep(o,e){return(o%e+e)%e}function $S(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function eM(o,e,i){return o!==e?(i-o)/(e-o):0}function el(o,e,i){return(1-i)*o+i*e}function tM(o,e,i,r){return el(o,e,1-Math.exp(-i*r))}function nM(o,e=1){return e-Math.abs(ep(o,e*2)-e)}function iM(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function aM(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function rM(o,e){return o+Math.floor(Math.random()*(e-o+1))}function sM(o,e){return o+Math.random()*(e-o)}function oM(o){return o*(.5-Math.random())}function lM(o){o!==void 0&&(s_=o);let e=s_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cM(o){return o*$o}function uM(o){return o*Hs}function fM(o){return(o&o-1)===0&&o!==0}function hM(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function dM(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function pM(o,e,i,r,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((e+r)/2),_=h((e+r)/2),g=c((e-r)/2),y=h((e-r)/2),S=c((r-e)/2),E=h((r-e)/2);switch(l){case"XYX":o.set(d*_,m*g,m*y,d*p);break;case"YZY":o.set(m*y,d*_,m*g,d*p);break;case"ZXZ":o.set(m*g,m*y,d*_,d*p);break;case"XZX":o.set(d*_,m*E,m*S,d*p);break;case"YXY":o.set(m*S,d*_,m*E,d*p);break;case"ZYZ":o.set(m*E,m*S,d*_,d*p);break;default:lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function wi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const mM={DEG2RAD:$o,RAD2DEG:Hs,generateUUID:va,clamp:St,euclideanModulo:ep,mapLinear:$S,inverseLerp:eM,lerp:el,damp:tM,pingpong:nM,smoothstep:iM,smootherstep:aM,randInt:rM,randFloat:sM,randFloatSpread:oM,seededRandom:lM,degToRad:cM,radToDeg:uM,isPowerOfTwo:fM,ceilPowerOfTwo:hM,floorPowerOfTwo:dM,setQuaternionFromProperEuler:pM,normalize:Gt,denormalize:wi};class mt{constructor(e=0,i=0){mt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ol{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3],y=c[h+0],S=c[h+1],E=c[h+2],w=c[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g;return}if(d>=1){e[i+0]=y,e[i+1]=S,e[i+2]=E,e[i+3]=w;return}if(g!==w||m!==y||p!==S||_!==E){let M=m*y+p*S+_*E+g*w;M<0&&(y=-y,S=-S,E=-E,w=-w,M=-M);let x=1-d;if(M<.9995){const O=Math.acos(M),I=Math.sin(O);x=Math.sin(x*O)/I,d=Math.sin(d*O)/I,m=m*x+y*d,p=p*x+S*d,_=_*x+E*d,g=g*x+w*d}else{m=m*x+y*d,p=p*x+S*d,_=_*x+E*d,g=g*x+w*d;const O=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=O,p*=O,_*=O,g*=O}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=c[h],y=c[h+1],S=c[h+2],E=c[h+3];return e[i]=d*E+_*g+m*S-p*y,e[i+1]=m*E+_*y+p*g-d*S,e[i+2]=p*E+_*S+d*y-m*g,e[i+3]=_*E-d*g-m*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),g=d(c/2),y=m(r/2),S=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=y*_*g+p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g-y*S*E;break;case"YXZ":this._x=y*_*g+p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g+y*S*E;break;case"ZXY":this._x=y*_*g-p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g-y*S*E;break;case"ZYX":this._x=y*_*g-p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g+y*S*E;break;case"YZX":this._x=y*_*g+p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g-y*S*E;break;case"XZY":this._x=y*_*g-p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g+y*S*E;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],y=r+d+g;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(r>d&&r>g){const S=2*Math.sqrt(1+r-d-g);this._w=(_-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-r-g);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+g-r-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-r*p,this._z=c*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,h=e._w,d=this.dot(e);d<0&&(r=-r,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,i=0,r=0){ee.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(o_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(o_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),_=2*(d*i-c*l),g=2*(c*r-h*i);return this.x=i+m*p+h*g-d*_,this.y=r+m*_+d*p-c*g,this.z=l+m*g+c*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return gh.copy(this).projectOnVector(e),this.sub(gh)}reflect(e){return this.sub(gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gh=new ee,o_=new ol;class ht{constructor(e,i,r,l,c,h,d,m,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],g=r[7],y=r[2],S=r[5],E=r[8],w=l[0],M=l[3],x=l[6],O=l[1],I=l[4],L=l[7],z=l[2],F=l[5],P=l[8];return c[0]=h*w+d*O+m*z,c[3]=h*M+d*I+m*F,c[6]=h*x+d*L+m*P,c[1]=p*w+_*O+g*z,c[4]=p*M+_*I+g*F,c[7]=p*x+_*L+g*P,c[2]=y*w+S*O+E*z,c[5]=y*M+S*I+E*F,c[8]=y*x+S*L+E*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-r*c*_+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=_*h-d*p,y=d*m-_*c,S=p*c-h*m,E=i*g+r*y+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=g*w,e[1]=(l*p-_*r)*w,e[2]=(d*r-l*h)*w,e[3]=y*w,e[4]=(_*i-l*m)*w,e[5]=(l*c-d*i)*w,e[6]=S*w,e[7]=(r*m-p*i)*w,e[8]=(h*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(_h.makeScale(e,i)),this}rotate(e){return this.premultiply(_h.makeRotation(-e)),this}translate(e,i){return this.premultiply(_h.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _h=new ht,l_=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),c_=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gM(){const o={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ht&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ht&&(l.r=Is(l.r),l.g=Is(l.g),l.b=Is(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===er?Kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return rl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return rl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Fs]:{primaries:e,whitePoint:r,transfer:Kc,toXYZ:l_,fromXYZ:c_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:l_,fromXYZ:c_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),o}const Rt=gM();function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Is(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let gs;class _M{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{gs===void 0&&(gs=al("canvas")),gs.width=e.width,gs.height=e.height;const l=gs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=gs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=al("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=xa(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(xa(i[r]/255)*255):i[r]=xa(i[r]);return{data:i,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vM=0;class tp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=va(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(vh(l[h].image)):c.push(vh(l[h]))}else c=vh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function vh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?_M.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let xM=0;const xh=new ee;class Pn extends Vs{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=ga,l=ga,c=In,h=Dr,d=Ci,m=ii,p=Pn.DEFAULT_ANISOTROPY,_=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=va(),this.name="",this.source=new tp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){lt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tl:e.x=e.x-Math.floor(e.x);break;case ga:e.x=e.x<0?0:1;break;case sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tl:e.y=e.y-Math.floor(e.y);break;case ga:e.y=e.y<0?0:1;break;case sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=hv;Pn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],_=m[4],g=m[8],y=m[1],S=m[5],E=m[9],w=m[2],M=m[6],x=m[10];if(Math.abs(_-y)<.01&&Math.abs(g-w)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+y)<.1&&Math.abs(g+w)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(p+1)/2,L=(S+1)/2,z=(x+1)/2,F=(_+y)/4,P=(g+w)/4,K=(E+M)/4;return I>L&&I>z?I<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(I),l=F/r,c=P/r):L>z?L<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),r=F/l,c=K/l):z<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),r=P/c,l=K/c),this.set(r,l,c,i),this}let O=Math.sqrt((M-E)*(M-E)+(g-w)*(g-w)+(y-_)*(y-_));return Math.abs(O)<.001&&(O=1),this.x=(M-E)/O,this.y=(g-w)/O,this.z=(y-_)/O,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yM extends Vs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Pn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new tp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends yM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Mv extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=dn,this.minFilter=dn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SM extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=dn,this.minFilter=dn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ll{constructor(e=new ee(1/0,1/0,1/0),i=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ti.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ti.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ti.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ti):Ti.fromBufferAttribute(c,h),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Mc.copy(r.boundingBox)),Mc.applyMatrix4(e.matrixWorld),this.union(Mc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),bc.subVectors(this.max,Go),_s.subVectors(e.a,Go),vs.subVectors(e.b,Go),xs.subVectors(e.c,Go),ja.subVectors(vs,_s),Za.subVectors(xs,vs),Sr.subVectors(_s,xs);let i=[0,-ja.z,ja.y,0,-Za.z,Za.y,0,-Sr.z,Sr.y,ja.z,0,-ja.x,Za.z,0,-Za.x,Sr.z,0,-Sr.x,-ja.y,ja.x,0,-Za.y,Za.x,0,-Sr.y,Sr.x,0];return!yh(i,_s,vs,xs,bc)||(i=[1,0,0,0,1,0,0,0,1],!yh(i,_s,vs,xs,bc))?!1:(Ec.crossVectors(ja,Za),i=[Ec.x,Ec.y,Ec.z],yh(i,_s,vs,xs,bc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ua),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ua=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Ti=new ee,Mc=new ll,_s=new ee,vs=new ee,xs=new ee,ja=new ee,Za=new ee,Sr=new ee,Go=new ee,bc=new ee,Ec=new ee,Mr=new ee;function yh(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){Mr.fromArray(o,c);const d=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),m=e.dot(Mr),p=i.dot(Mr),_=r.dot(Mr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const MM=new ll,Vo=new ee,Sh=new ee;class np{constructor(e=new ee,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):MM.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const i=Vo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Vo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(Sh)),this.expandByPoint(Vo.copy(e.center).sub(Sh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fa=new ee,Mh=new ee,Tc=new ee,Ka=new ee,bh=new ee,Ac=new ee,Eh=new ee;class bv{constructor(e=new ee,i=new ee(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=fa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Mh.copy(e).add(i).multiplyScalar(.5),Tc.copy(i).sub(e).normalize(),Ka.copy(this.origin).sub(Mh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Tc),d=Ka.dot(this.direction),m=-Ka.dot(Tc),p=Ka.lengthSq(),_=Math.abs(1-h*h);let g,y,S,E;if(_>0)if(g=h*m-d,y=h*d-m,E=c*_,g>=0)if(y>=-E)if(y<=E){const w=1/_;g*=w,y*=w,S=g*(g+h*y+2*d)+y*(h*g+y+2*m)+p}else y=c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;else y=-c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;else y<=-E?(g=Math.max(0,-(-h*c+d)),y=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+y*(y+2*m)+p):y<=E?(g=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+p):(g=Math.max(0,-(h*c+d)),y=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+y*(y+2*m)+p);else y=h>0?-c:c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Mh).addScaledVector(Tc,y),S}intersectSphere(e,i){fa.subVectors(e.center,this.origin);const r=fa.dot(this.direction),l=fa.dot(fa)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),_>=0?(c=(e.min.y-y.y)*_,h=(e.max.y-y.y)*_):(c=(e.max.y-y.y)*_,h=(e.min.y-y.y)*_),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-y.z)*g,m=(e.max.z-y.z)*g):(d=(e.max.z-y.z)*g,m=(e.min.z-y.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,fa)!==null}intersectTriangle(e,i,r,l,c){bh.subVectors(i,e),Ac.subVectors(r,e),Eh.crossVectors(bh,Ac);let h=this.direction.dot(Eh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ka.subVectors(this.origin,e);const m=d*this.direction.dot(Ac.crossVectors(Ka,Ac));if(m<0)return null;const p=d*this.direction.dot(bh.cross(Ka));if(p<0||m+p>h)return null;const _=-d*Ka.dot(Eh);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,i,r,l,c,h,d,m,p,_,g,y,S,E,w,M){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,_,g,y,S,E,w,M)}set(e,i,r,l,c,h,d,m,p,_,g,y,S,E,w,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=_,x[10]=g,x[14]=y,x[3]=S,x[7]=E,x[11]=w,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/ys.setFromMatrixColumn(e,0).length(),c=1/ys.setFromMatrixColumn(e,1).length(),h=1/ys.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const y=h*_,S=h*g,E=d*_,w=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=S+E*p,i[5]=y-w*p,i[9]=-d*m,i[2]=w-y*p,i[6]=E+S*p,i[10]=h*m}else if(e.order==="YXZ"){const y=m*_,S=m*g,E=p*_,w=p*g;i[0]=y+w*d,i[4]=E*d-S,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=S*d-E,i[6]=w+y*d,i[10]=h*m}else if(e.order==="ZXY"){const y=m*_,S=m*g,E=p*_,w=p*g;i[0]=y-w*d,i[4]=-h*g,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*_,i[9]=w-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const y=h*_,S=h*g,E=d*_,w=d*g;i[0]=m*_,i[4]=E*p-S,i[8]=y*p+w,i[1]=m*g,i[5]=w*p+y,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const y=h*m,S=h*p,E=d*m,w=d*p;i[0]=m*_,i[4]=w-y*g,i[8]=E*g+S,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=S*g+E,i[10]=y-w*g}else if(e.order==="XZY"){const y=h*m,S=h*p,E=d*m,w=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=y*g+w,i[5]=h*_,i[9]=S*g-E,i[2]=E*g-S,i[6]=d*_,i[10]=w*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bM,e,EM)}lookAt(e,i,r){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Qa.crossVectors(r,ti),Qa.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Qa.crossVectors(r,ti)),Qa.normalize(),Rc.crossVectors(ti,Qa),l[0]=Qa.x,l[4]=Rc.x,l[8]=ti.x,l[1]=Qa.y,l[5]=Rc.y,l[9]=ti.y,l[2]=Qa.z,l[6]=Rc.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],g=r[5],y=r[9],S=r[13],E=r[2],w=r[6],M=r[10],x=r[14],O=r[3],I=r[7],L=r[11],z=r[15],F=l[0],P=l[4],K=l[8],R=l[12],C=l[1],G=l[5],se=l[9],re=l[13],pe=l[2],ue=l[6],N=l[10],H=l[14],ne=l[3],be=l[7],Me=l[11],U=l[15];return c[0]=h*F+d*C+m*pe+p*ne,c[4]=h*P+d*G+m*ue+p*be,c[8]=h*K+d*se+m*N+p*Me,c[12]=h*R+d*re+m*H+p*U,c[1]=_*F+g*C+y*pe+S*ne,c[5]=_*P+g*G+y*ue+S*be,c[9]=_*K+g*se+y*N+S*Me,c[13]=_*R+g*re+y*H+S*U,c[2]=E*F+w*C+M*pe+x*ne,c[6]=E*P+w*G+M*ue+x*be,c[10]=E*K+w*se+M*N+x*Me,c[14]=E*R+w*re+M*H+x*U,c[3]=O*F+I*C+L*pe+z*ne,c[7]=O*P+I*G+L*ue+z*be,c[11]=O*K+I*se+L*N+z*Me,c[15]=O*R+I*re+L*H+z*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],g=e[6],y=e[10],S=e[14],E=e[3],w=e[7],M=e[11],x=e[15],O=m*S-p*y,I=d*S-p*g,L=d*y-m*g,z=h*S-p*_,F=h*y-m*_,P=h*g-d*_;return i*(w*O-M*I+x*L)-r*(E*O-M*z+x*F)+l*(E*I-w*z+x*P)-c*(E*L-w*F+M*P)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=e[9],y=e[10],S=e[11],E=e[12],w=e[13],M=e[14],x=e[15],O=g*M*p-w*y*p+w*m*S-d*M*S-g*m*x+d*y*x,I=E*y*p-_*M*p-E*m*S+h*M*S+_*m*x-h*y*x,L=_*w*p-E*g*p+E*d*S-h*w*S-_*d*x+h*g*x,z=E*g*m-_*w*m-E*d*y+h*w*y+_*d*M-h*g*M,F=i*O+r*I+l*L+c*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/F;return e[0]=O*P,e[1]=(w*y*c-g*M*c-w*l*S+r*M*S+g*l*x-r*y*x)*P,e[2]=(d*M*c-w*m*c+w*l*p-r*M*p-d*l*x+r*m*x)*P,e[3]=(g*m*c-d*y*c-g*l*p+r*y*p+d*l*S-r*m*S)*P,e[4]=I*P,e[5]=(_*M*c-E*y*c+E*l*S-i*M*S-_*l*x+i*y*x)*P,e[6]=(E*m*c-h*M*c-E*l*p+i*M*p+h*l*x-i*m*x)*P,e[7]=(h*y*c-_*m*c+_*l*p-i*y*p-h*l*S+i*m*S)*P,e[8]=L*P,e[9]=(E*g*c-_*w*c-E*r*S+i*w*S+_*r*x-i*g*x)*P,e[10]=(h*w*c-E*d*c+E*r*p-i*w*p-h*r*x+i*d*x)*P,e[11]=(_*d*c-h*g*c-_*r*p+i*g*p+h*r*S-i*d*S)*P,e[12]=z*P,e[13]=(_*w*l-E*g*l+E*r*y-i*w*y-_*r*M+i*g*M)*P,e[14]=(E*d*l-h*w*l-E*r*m+i*w*m+h*r*M-i*d*M)*P,e[15]=(h*g*l-_*d*l+_*r*m-i*g*m-h*r*y+i*d*y)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,_=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,g=d+d,y=c*p,S=c*_,E=c*g,w=h*_,M=h*g,x=d*g,O=m*p,I=m*_,L=m*g,z=r.x,F=r.y,P=r.z;return l[0]=(1-(w+x))*z,l[1]=(S+L)*z,l[2]=(E-I)*z,l[3]=0,l[4]=(S-L)*F,l[5]=(1-(y+x))*F,l[6]=(M+O)*F,l[7]=0,l[8]=(E+I)*P,l[9]=(M-O)*P,l[10]=(1-(y+w))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=ys.set(l[0],l[1],l[2]).length();const h=ys.set(l[4],l[5],l[6]).length(),d=ys.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ai.copy(this);const p=1/c,_=1/h,g=1/d;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=_,Ai.elements[5]*=_,Ai.elements[6]*=_,Ai.elements[8]*=g,Ai.elements[9]*=g,Ai.elements[10]*=g,i.setFromRotationMatrix(Ai),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Hi,m=!1){const p=this.elements,_=2*c/(i-e),g=2*c/(r-l),y=(i+e)/(i-e),S=(r+l)/(r-l);let E,w;if(m)E=c/(h-c),w=h*c/(h-c);else if(d===Hi)E=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(d===Qc)E=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Hi,m=!1){const p=this.elements,_=2/(i-e),g=2/(r-l),y=-(i+e)/(i-e),S=-(r+l)/(r-l);let E,w;if(m)E=1/(h-c),w=h/(h-c);else if(d===Hi)E=-2/(h-c),w=-(h+c)/(h-c);else if(d===Qc)E=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ys=new ee,Ai=new en,bM=new ee(0,0,0),EM=new ee(1,1,1),Qa=new ee,Rc=new ee,ti=new ee,u_=new en,f_=new ol;class Xi{constructor(e=0,i=0,r=0,l=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return u_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(u_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return f_.setFromEuler(this),this.setFromQuaternion(f_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class ip{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TM=0;const h_=new ee,Ss=new ol,ha=new en,wc=new ee,ko=new ee,AM=new ee,RM=new ol,d_=new ee(1,0,0),p_=new ee(0,1,0),m_=new ee(0,0,1),g_={type:"added"},wM={type:"removed"},Ms={type:"childadded",child:null},Th={type:"childremoved",child:null};class Dn extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new ee,i=new Xi,r=new ol,l=new ee(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new ht}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ss.setFromAxisAngle(e,i),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,i){return Ss.setFromAxisAngle(e,i),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(d_,e)}rotateY(e){return this.rotateOnAxis(p_,e)}rotateZ(e){return this.rotateOnAxis(m_,e)}translateOnAxis(e,i){return h_.copy(e).applyQuaternion(this.quaternion),this.position.add(h_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(d_,e)}translateY(e){return this.translateOnAxis(p_,e)}translateZ(e){return this.translateOnAxis(m_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?wc.copy(e):wc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(ko,wc,this.up):ha.lookAt(wc,ko,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),Ss.setFromRotationMatrix(ha),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(g_),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(wM),Th.child=e,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ha.multiply(e.parent.matrixWorld)),e.applyMatrix4(ha),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(g_),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,AM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,RM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),g=h(e.shapes),y=h(e.skeletons),S=h(e.animations),E=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new ee(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new ee,da=new ee,Ah=new ee,pa=new ee,bs=new ee,Es=new ee,__=new ee,Rh=new ee,wh=new ee,Ch=new ee,Dh=new an,Uh=new an,Nh=new an;class _i{constructor(e=new ee,i=new ee,r=new ee){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ri.subVectors(e,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ri.subVectors(l,i),da.subVectors(r,i),Ah.subVectors(e,i);const h=Ri.dot(Ri),d=Ri.dot(da),m=Ri.dot(Ah),p=da.dot(da),_=da.dot(Ah),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const y=1/g,S=(p*m-d*_)*y,E=(h*_-d*m)*y;return c.set(1-S-E,E,S)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(h,pa.y),m.addScaledVector(d,pa.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return Dh.setScalar(0),Uh.setScalar(0),Nh.setScalar(0),Dh.fromBufferAttribute(e,i),Uh.fromBufferAttribute(e,r),Nh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Dh,c.x),h.addScaledVector(Uh,c.y),h.addScaledVector(Nh,c.z),h}static isFrontFacing(e,i,r,l){return Ri.subVectors(r,i),da.subVectors(e,i),Ri.cross(da).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ri.cross(da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return _i.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return _i.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;bs.subVectors(l,r),Es.subVectors(c,r),Rh.subVectors(e,r);const m=bs.dot(Rh),p=Es.dot(Rh);if(m<=0&&p<=0)return i.copy(r);wh.subVectors(e,l);const _=bs.dot(wh),g=Es.dot(wh);if(_>=0&&g<=_)return i.copy(l);const y=m*g-_*p;if(y<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(bs,h);Ch.subVectors(e,c);const S=bs.dot(Ch),E=Es.dot(Ch);if(E>=0&&S<=E)return i.copy(c);const w=S*p-m*E;if(w<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(Es,d);const M=_*E-S*g;if(M<=0&&g-_>=0&&S-E>=0)return __.subVectors(c,l),d=(g-_)/(g-_+(S-E)),i.copy(l).addScaledVector(__,d);const x=1/(M+w+y);return h=w*x,d=y*x,i.copy(r).addScaledVector(bs,h).addScaledVector(Es,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Lh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class bt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Rt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Rt.workingColorSpace){if(e=ep(e,1),i=St(i,0,1),r=St(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Lh(h,c,e+1/3),this.g=Lh(h,c,e),this.b=Lh(h,c,e-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(e,i=gi){function r(c){c!==void 0&&parseFloat(c)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:lt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=gi){const r=Ev[e.toLowerCase()];return r!==void 0?this.setHex(r,i):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Rt.workingToColorSpace(On.copy(this),e),Math.round(St(On.r*255,0,255))*65536+Math.round(St(On.g*255,0,255))*256+Math.round(St(On.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,c=On.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Rt.workingColorSpace){return Rt.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=gi){Rt.workingToColorSpace(On.copy(this),e);const i=On.r,r=On.g,l=On.b;return e!==gi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ja),this.setHSL(Ja.h+e,Ja.s+i,Ja.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ja),e.getHSL(Cc);const r=el(Ja.h,Cc.h,i),l=el(Ja.s,Cc.s,i),c=el(Ja.l,Cc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new bt;bt.NAMES=Ev;let CM=0;class ks extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=va(),this.name="",this.type="Material",this.blending=Os,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=Kh,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){lt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==nr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Zh&&(r.blendSrc=this.blendSrc),this.blendDst!==Kh&&(r.blendDst=this.blendDst),this.blendEquation!==wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==i_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ap extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new ee,Dc=new mt;let DM=0;class Di{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Fd,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(e),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=wi(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Gt(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=wi(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=wi(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=wi(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=wi(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Gt(i,this.array),r=Gt(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Gt(i,this.array),r=Gt(r,this.array),l=Gt(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Gt(i,this.array),r=Gt(r,this.array),l=Gt(l,this.array),c=Gt(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fd&&(e.usage=this.usage),e}}class Tv extends Di{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Av extends Di{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class vi extends Di{constructor(e,i,r){super(new Float32Array(e),i,r)}}let UM=0;const mi=new en,Oh=new Dn,Ts=new ee,ni=new ll,Xo=new ll,xn=new ee;class Ui extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sv(e)?Av:Tv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ht().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,i,r){return mi.makeTranslation(e,i,r),this.applyMatrix4(mi),this}scale(e,i,r){return mi.makeScale(e,i,r),this.applyMatrix4(mi),this}lookAt(e){return Oh.lookAt(e),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new vi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ll);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new np);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Xo.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ni.min,Xo.min),ni.expandByPoint(xn),xn.addVectors(ni.max,Xo.max),ni.expandByPoint(xn)):(ni.expandByPoint(Xo.min),ni.expandByPoint(Xo.max))}ni.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)xn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)xn.fromBufferAttribute(d,p),m&&(Ts.fromBufferAttribute(e,p),xn.add(Ts)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<r.count;K++)d[K]=new ee,m[K]=new ee;const p=new ee,_=new ee,g=new ee,y=new mt,S=new mt,E=new mt,w=new ee,M=new ee;function x(K,R,C){p.fromBufferAttribute(r,K),_.fromBufferAttribute(r,R),g.fromBufferAttribute(r,C),y.fromBufferAttribute(c,K),S.fromBufferAttribute(c,R),E.fromBufferAttribute(c,C),_.sub(p),g.sub(p),S.sub(y),E.sub(y);const G=1/(S.x*E.y-E.x*S.y);isFinite(G)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(G),M.copy(g).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(G),d[K].add(w),d[R].add(w),d[C].add(w),m[K].add(M),m[R].add(M),m[C].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let K=0,R=O.length;K<R;++K){const C=O[K],G=C.start,se=C.count;for(let re=G,pe=G+se;re<pe;re+=3)x(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const I=new ee,L=new ee,z=new ee,F=new ee;function P(K){z.fromBufferAttribute(l,K),F.copy(z);const R=d[K];I.copy(R),I.sub(z.multiplyScalar(z.dot(R))).normalize(),L.crossVectors(F,R);const G=L.dot(m[K])<0?-1:1;h.setXYZW(K,I.x,I.y,I.z,G)}for(let K=0,R=O.length;K<R;++K){const C=O[K],G=C.start,se=C.count;for(let re=G,pe=G+se;re<pe;re+=3)P(e.getX(re+0)),P(e.getX(re+1)),P(e.getX(re+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const l=new ee,c=new ee,h=new ee,d=new ee,m=new ee,p=new ee,_=new ee,g=new ee;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),w=e.getX(y+1),M=e.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,M),d.add(_),m.add(_),p.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)xn.fromBufferAttribute(e,i),xn.normalize(),e.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,g=d.normalized,y=new p.constructor(m.length*_);let S=0,E=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?S=m[w]*d.data.stride+d.offset:S=m[w]*_;for(let x=0;x<_;x++)y[E++]=p[S++]}return new Di(y,_,g)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ui,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,g=p.length;_<g;_++){const y=p[_],S=e(y,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,y=p.length;g<y;g++){const S=p[g];_.push(S.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],g=c[p];for(let y=0,S=g.length;y<S;y++)_.push(g[y].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const v_=new en,br=new bv,Uc=new np,x_=new ee,Nc=new ee,Lc=new ee,Oc=new ee,Ih=new ee,Ic=new ee,y_=new ee,Pc=new ee;class ai extends Dn{constructor(e=new Ui,i=new ap){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Ic.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],g=c[m];_!==0&&(Ih.fromBufferAttribute(g,e),h?Ic.addScaledVector(Ih,_):Ic.addScaledVector(Ih.sub(i),_))}i.add(Ic)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Uc.copy(r.boundingSphere),Uc.applyMatrix4(c),br.copy(e.ray).recast(e.near),!(Uc.containsPoint(br.origin)===!1&&(br.intersectSphere(Uc,x_)===null||br.origin.distanceToSquared(x_)>(e.far-e.near)**2))&&(v_.copy(c).invert(),br.copy(e.ray).applyMatrix4(v_),!(r.boundingBox!==null&&br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,br)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,w=y.length;E<w;E++){const M=y[E],x=h[M.materialIndex],O=Math.max(M.start,S.start),I=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let L=O,z=I;L<z;L+=3){const F=d.getX(L),P=d.getX(L+1),K=d.getX(L+2);l=zc(this,x,e,r,p,_,g,F,P,K),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let M=E,x=w;M<x;M+=3){const O=d.getX(M),I=d.getX(M+1),L=d.getX(M+2);l=zc(this,h,e,r,p,_,g,O,I,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,w=y.length;E<w;E++){const M=y[E],x=h[M.materialIndex],O=Math.max(M.start,S.start),I=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let L=O,z=I;L<z;L+=3){const F=L,P=L+1,K=L+2;l=zc(this,x,e,r,p,_,g,F,P,K),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(m.count,S.start+S.count);for(let M=E,x=w;M<x;M+=3){const O=M,I=M+1,L=M+2;l=zc(this,h,e,r,p,_,g,O,I,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function NM(o,e,i,r,l,c,h,d){let m;if(e.side===Yn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===nr,d),m===null)return null;Pc.copy(d),Pc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Pc);return p<i.near||p>i.far?null:{distance:p,point:Pc.clone(),object:o}}function zc(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,Nc),o.getVertexPosition(m,Lc),o.getVertexPosition(p,Oc);const _=NM(o,e,i,r,Nc,Lc,Oc,y_);if(_){const g=new ee;_i.getBarycoord(y_,Nc,Lc,Oc,g),l&&(_.uv=_i.getInterpolatedAttribute(l,d,m,p,g,new mt)),c&&(_.uv1=_i.getInterpolatedAttribute(c,d,m,p,g,new mt)),h&&(_.normal=_i.getInterpolatedAttribute(h,d,m,p,g,new ee),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new ee,materialIndex:0};_i.getNormal(Nc,Lc,Oc,y.normal),_.face=y,_.barycoord=g}return _}class Xs extends Ui{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],g=[];let y=0,S=0;E("z","y","x",-1,-1,r,i,e,h,c,0),E("z","y","x",1,-1,r,i,-e,h,c,1),E("x","z","y",1,1,e,r,i,l,h,2),E("x","z","y",1,-1,e,r,-i,l,h,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new vi(p,3)),this.setAttribute("normal",new vi(_,3)),this.setAttribute("uv",new vi(g,2));function E(w,M,x,O,I,L,z,F,P,K,R){const C=L/P,G=z/K,se=L/2,re=z/2,pe=F/2,ue=P+1,N=K+1;let H=0,ne=0;const be=new ee;for(let Me=0;Me<N;Me++){const U=Me*G-re;for(let te=0;te<ue;te++){const _e=te*C-se;be[w]=_e*O,be[M]=U*I,be[x]=pe,p.push(be.x,be.y,be.z),be[w]=0,be[M]=0,be[x]=F>0?1:-1,_.push(be.x,be.y,be.z),g.push(te/P),g.push(1-Me/K),H+=1}}for(let Me=0;Me<K;Me++)for(let U=0;U<P;U++){const te=y+U+ue*Me,_e=y+U+ue*(Me+1),Ae=y+(U+1)+ue*(Me+1),Re=y+(U+1)+ue*Me;m.push(te,_e,Re),m.push(_e,Ae,Re),ne+=6}d.addGroup(S,ne,R),S+=ne,y+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Fn(o){const e={};for(let i=0;i<o.length;i++){const r=Gs(o[i]);for(const l in r)e[l]=r[l]}return e}function LM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Rv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const OM={clone:Gs,merge:Fn};var IM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IM,this.fragmentShader=PM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=LM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class wv extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $a=new ee,S_=new mt,M_=new mt;class qn extends wv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Hs*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($a.x,$a.y).multiplyScalar(-e/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set($a.x,$a.y).multiplyScalar(-e/$a.z)}getViewSize(e,i){return this.getViewBounds(e,S_,M_),i.subVectors(M_,S_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan($o*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const As=-90,Rs=1;class zM extends Dn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new qn(As,Rs,e,i);l.layers=this.layers,this.add(l);const c=new qn(As,Rs,e,i);c.layers=this.layers,this.add(c);const h=new qn(As,Rs,e,i);h.layers=this.layers,this.add(h);const d=new qn(As,Rs,e,i);d.layers=this.layers,this.add(d);const m=new qn(As,Rs,e,i);m.layers=this.layers,this.add(m);const p=new qn(As,Rs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Qc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(g,y,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Cv extends Pn{constructor(e=[],i=Nr,r,l,c,h,d,m,p,_){super(e,i,r,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dv extends Vi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Cv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Xs(5,5,5),c=new Wi({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:_a});c.uniforms.tEquirect.value=i;const h=new ai(l,c),d=i.minFilter;return i.minFilter===Dr&&(i.minFilter=In),new zM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class Qo extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BM={type:"move"};class Ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,r),x=this._getHandJoint(p,w);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=_.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(BM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Qo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class $c{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(e),this.density=i}clone(){return new $c(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class FM extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class HM{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=Fd,this.updateRanges=[],this.version=0,this.uuid=va()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,r){e*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[r+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=va()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=va()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new ee;class eu{constructor(e,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,r=this.data.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.applyMatrix4(e),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.applyNormalMatrix(e),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.transformDirection(e),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}getComponent(e,i){let r=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(r=wi(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Gt(r,this.array)),this.data.array[e*this.data.stride+this.offset+i]=r,this}setX(e,i){return this.normalized&&(i=Gt(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=wi(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=wi(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=wi(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=wi(i,this.array)),i}setXY(e,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(i=Gt(i,this.array),r=Gt(r,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this}setXYZ(e,i,r,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Gt(i,this.array),r=Gt(r,this.array),l=Gt(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=Gt(i,this.array),r=Gt(r,this.array),l=Gt(l,this.array),c=Gt(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){Jc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Di(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new eu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Jc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Hd extends ks{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ws;const Wo=new ee,Cs=new ee,Ds=new ee,Us=new mt,qo=new mt,Uv=new en,Bc=new ee,Yo=new ee,Fc=new ee,b_=new mt,zh=new mt,E_=new mt;class T_ extends Dn{constructor(e=new Hd){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new Ui;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new HM(i,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new eu(r,3,0,!1)),ws.setAttribute("uv",new eu(r,2,3,!1))}this.geometry=ws,this.material=e,this.center=new mt(.5,.5),this.count=1}raycast(e,i){e.camera===null&&Tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cs.setFromMatrixScale(this.matrixWorld),Uv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cs.multiplyScalar(-Ds.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const h=this.center;Hc(Bc.set(-.5,-.5,0),Ds,h,Cs,l,c),Hc(Yo.set(.5,-.5,0),Ds,h,Cs,l,c),Hc(Fc.set(.5,.5,0),Ds,h,Cs,l,c),b_.set(0,0),zh.set(1,0),E_.set(1,1);let d=e.ray.intersectTriangle(Bc,Yo,Fc,!1,Wo);if(d===null&&(Hc(Yo.set(-.5,.5,0),Ds,h,Cs,l,c),zh.set(0,1),d=e.ray.intersectTriangle(Bc,Fc,Yo,!1,Wo),d===null))return;const m=e.ray.origin.distanceTo(Wo);m<e.near||m>e.far||i.push({distance:m,point:Wo.clone(),uv:_i.getInterpolation(Wo,Bc,Yo,Fc,b_,zh,E_,new mt),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Hc(o,e,i,r,l,c){Us.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(qo.x=c*Us.x-l*Us.y,qo.y=l*Us.x+c*Us.y):qo.copy(Us),o.copy(e),o.x+=qo.x,o.y+=qo.y,o.applyMatrix4(Uv)}class GM extends Pn{constructor(e=null,i=1,r=1,l,c,h,d,m,p=dn,_=dn,g,y){super(null,h,d,m,p,_,l,c,g,y),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bh=new ee,VM=new ee,kM=new ht;class Rr{constructor(e=new ee(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Bh.subVectors(r,i).cross(VM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Bh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||kM.getNormalMatrix(e),l=this.coplanarPoint(Bh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new np,XM=new mt(.5,.5),Gc=new ee;class rp{constructor(e=new Rr,i=new Rr,r=new Rr,l=new Rr,c=new Rr,h=new Rr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Hi,r=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],g=c[5],y=c[6],S=c[7],E=c[8],w=c[9],M=c[10],x=c[11],O=c[12],I=c[13],L=c[14],z=c[15];if(l[0].setComponents(p-h,S-_,x-E,z-O).normalize(),l[1].setComponents(p+h,S+_,x+E,z+O).normalize(),l[2].setComponents(p+d,S+g,x+w,z+I).normalize(),l[3].setComponents(p-d,S-g,x-w,z-I).normalize(),r)l[4].setComponents(m,y,M,L).normalize(),l[5].setComponents(p-m,S-y,x-M,z-L).normalize();else if(l[4].setComponents(p-m,S-y,x-M,z-L).normalize(),i===Hi)l[5].setComponents(p+m,S+y,x+M,z+L).normalize();else if(i===Qc)l[5].setComponents(m,y,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);const i=XM.distanceTo(e.center);return Er.radius=.7071067811865476+i,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Gc.x=l.normal.x>0?e.max.x:e.min.x,Gc.y=l.normal.y>0?e.max.y:e.min.y,Gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sl extends Pn{constructor(e,i,r=ki,l,c,h,d=dn,m=dn,p,_=Sa,g=1){if(_!==Sa&&_!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:g};super(y,l,c,h,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class WM extends sl{constructor(e,i=ki,r=Nr,l,c,h=dn,d=dn,m,p=Sa){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,i,r,l,c,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Nv extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cl extends Ui{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,g=e/d,y=i/m,S=[],E=[],w=[],M=[];for(let x=0;x<_;x++){const O=x*y-h;for(let I=0;I<p;I++){const L=I*g-c;E.push(L,-O,0),w.push(0,0,1),M.push(I/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<d;O++){const I=O+p*x,L=O+p*(x+1),z=O+1+p*(x+1),F=O+1+p*x;S.push(I,L,F),S.push(L,z,F)}this.setIndex(S),this.setAttribute("position",new vi(E,3)),this.setAttribute("normal",new vi(w,3)),this.setAttribute("uv",new vi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.widthSegments,e.heightSegments)}}class sp extends Ui{constructor(e=1,i=.4,r=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:l,arc:c},r=Math.floor(r),l=Math.floor(l);const h=[],d=[],m=[],p=[],_=new ee,g=new ee,y=new ee;for(let S=0;S<=r;S++)for(let E=0;E<=l;E++){const w=E/l*c,M=S/r*Math.PI*2;g.x=(e+i*Math.cos(M))*Math.cos(w),g.y=(e+i*Math.cos(M))*Math.sin(w),g.z=i*Math.sin(M),d.push(g.x,g.y,g.z),_.x=e*Math.cos(w),_.y=e*Math.sin(w),y.subVectors(g,_).normalize(),m.push(y.x,y.y,y.z),p.push(E/l),p.push(S/r)}for(let S=1;S<=r;S++)for(let E=1;E<=l;E++){const w=(l+1)*S+E-1,M=(l+1)*(S-1)+E-1,x=(l+1)*(S-1)+E,O=(l+1)*S+E;h.push(w,M,O),h.push(M,x,O)}this.setIndex(h),this.setAttribute("position",new vi(d,3)),this.setAttribute("normal",new vi(m,3)),this.setAttribute("uv",new vi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class qM extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fh extends ks{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yv,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class YM extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jM extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hh={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class ZM{constructor(e,i,r){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(_){d++,c===!1&&l.onStart!==void 0&&l.onStart(_,h,d),c=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,y=p.length;g<y;g+=2){const S=p[g],E=p[g+1];if(S.global&&(S.lastIndex=0),S.test(_))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const KM=new ZM;class op{constructor(e){this.manager=e!==void 0?e:KM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,c){r.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}op.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ns=new WeakMap;class QM extends op{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,h=Hh.get(`image:${e}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(h),c.manager.itemEnd(e)},0);else{let g=Ns.get(h);g===void 0&&(g=[],Ns.set(h,g)),g.push({onLoad:i,onError:l})}return h}const d=al("img");function m(){_(),i&&i(this);const g=Ns.get(this)||[];for(let y=0;y<g.length;y++){const S=g[y];S.onLoad&&S.onLoad(this)}Ns.delete(this),c.manager.itemEnd(e)}function p(g){_(),l&&l(g),Hh.remove(`image:${e}`);const y=Ns.get(this)||[];for(let S=0;S<y.length;S++){const E=y[S];E.onError&&E.onError(g)}Ns.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function _(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Hh.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class JM extends op{constructor(e){super(e)}load(e,i,r,l){const c=new Pn,h=new QM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class lp extends Dn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Gh=new en,A_=new ee,R_=new ee;class Lv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rp,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;A_.setFromMatrixPosition(e.matrixWorld),i.position.copy(A_),R_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(R_),i.updateMatrixWorld(),Gh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $M extends Lv{constructor(){super(new qn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const i=this.camera,r=Hs*2*e.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||i.far;(r!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=r,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class eb extends lp{constructor(e,i,r=0,l=Math.PI/3,c=0,h=2){super(e,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.distance=r,this.angle=l,this.penumbra=c,this.decay=h,this.map=null,this.shadow=new $M}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(e).uuid),i.object.shadow=this.shadow.toJSON(),i}}class tb extends Lv{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0}}class Vh extends lp{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new tb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Ov extends wv{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class nb extends lp{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class ib extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const w_=new en;class ab{constructor(e,i,r=0,l=1/0){this.ray=new bv(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new ip,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Tt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return w_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(w_),this}intersectObject(e,i=!0,r=[]){return Gd(e,this,r,i),r.sort(C_),r}intersectObjects(e,i=!0,r=[]){for(let l=0,c=e.length;l<c;l++)Gd(e[l],this,r,i);return r.sort(C_),r}}function C_(o,e){return o.distance-e.distance}function Gd(o,e,i,r){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const c=o.children;for(let h=0,d=c.length;h<d;h++)Gd(c[h],e,i,!0)}}function D_(o,e,i,r){const l=rb(r);switch(i){case _v:return o*e;case xv:return o*e/l.components*l.byteLength;case Zd:return o*e/l.components*l.byteLength;case Bs:return o*e*2/l.components*l.byteLength;case Kd:return o*e*2/l.components*l.byteLength;case vv:return o*e*3/l.components*l.byteLength;case Ci:return o*e*4/l.components*l.byteLength;case Qd:return o*e*4/l.components*l.byteLength;case Wc:case qc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Yc:case jc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ld:case ud:return Math.max(o,16)*Math.max(e,8)/4;case od:case cd:return Math.max(o,8)*Math.max(e,8)/2;case fd:case hd:case pd:case md:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case dd:case gd:case _d:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case vd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case yd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Md:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case bd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Td:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ad:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case wd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Cd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Dd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Nd:case Ld:case Od:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Id:case Pd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case zd:case Bd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function rb(o){switch(o){case ii:case dv:return{byteLength:1,components:1};case nl:case pv:case ya:return{byteLength:2,components:1};case Yd:case jd:return{byteLength:2,components:4};case ki:case qd:case Fi:return{byteLength:4,components:1};case mv:case gv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wd}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wd);function Iv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function sb(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,_),d.onUploadCallback();let S;if(p instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=o.SHORT;else if(p instanceof Uint32Array)S=o.UNSIGNED_INT;else if(p instanceof Int32Array)S=o.INT;else if(p instanceof Int8Array)S=o.BYTE;else if(p instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,_);else{g.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<g.length;S++){const E=g[y],w=g[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++y,g[y]=w)}g.length=y+1;for(let S=0,E=g.length;S<E;S++){const w=g[S];o.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var ob=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lb=`#ifdef USE_ALPHAHASH
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
#endif`,cb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ub=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,db=`#ifdef USE_AOMAP
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
#endif`,pb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mb=`#ifdef USE_BATCHING
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
#endif`,gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_b=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yb=`#ifdef USE_IRIDESCENCE
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
#endif`,Sb=`#ifdef USE_BUMPMAP
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
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ab=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Db=`#define PI 3.141592653589793
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
} // validated`,Ub=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nb=`vec3 transformedNormal = objectNormal;
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
#endif`,Lb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ob=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fb=`#ifdef USE_ENVMAP
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
#endif`,Hb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gb=`#ifdef USE_ENVMAP
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
#endif`,Vb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
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
#endif`,Xb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jb=`#ifdef USE_GRADIENTMAP
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
}`,Zb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jb=`uniform bool receiveShadow;
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
#endif`,$b=`#ifdef USE_ENVMAP
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
#endif`,eE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aE=`PhysicalMaterial material;
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
#endif`,rE=`uniform sampler2D dfgLUT;
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
}`,sE=`
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
#endif`,oE=`#if defined( RE_IndirectDiffuse )
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
#endif`,lE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gE=`#if defined( USE_POINTS_UV )
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
#endif`,_E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ME=`#ifdef USE_MORPHTARGETS
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
#endif`,bE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,TE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,AE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CE=`#ifdef USE_NORMALMAP
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
#endif`,DE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,PE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,WE=`float getShadowMask() {
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
}`,qE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YE=`#ifdef USE_SKINNING
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
#endif`,jE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZE=`#ifdef USE_SKINNING
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
#endif`,KE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$E=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eT=`#ifdef USE_TRANSMISSION
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
#endif`,tT=`#ifdef USE_TRANSMISSION
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
#endif`,nT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oT=`uniform sampler2D t2D;
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
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`#include <common>
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
}`,dT=`#if DEPTH_PACKING == 3200
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
}`,pT=`#define DISTANCE
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
}`,mT=`#define DISTANCE
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
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_T=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`uniform float scale;
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
}`,xT=`uniform vec3 diffuse;
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
}`,yT=`#include <common>
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
}`,ST=`uniform vec3 diffuse;
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
}`,MT=`#define LAMBERT
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
}`,bT=`#define LAMBERT
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
}`,ET=`#define MATCAP
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
}`,TT=`#define MATCAP
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
}`,AT=`#define NORMAL
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
}`,RT=`#define NORMAL
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
}`,wT=`#define PHONG
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
}`,CT=`#define PHONG
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
}`,DT=`#define STANDARD
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
}`,UT=`#define STANDARD
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
}`,NT=`#define TOON
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
}`,LT=`#define TOON
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
}`,OT=`uniform float size;
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
}`,IT=`uniform vec3 diffuse;
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
}`,PT=`#include <common>
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
}`,zT=`uniform vec3 color;
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
}`,BT=`uniform float rotation;
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
}`,FT=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:ob,alphahash_pars_fragment:lb,alphamap_fragment:cb,alphamap_pars_fragment:ub,alphatest_fragment:fb,alphatest_pars_fragment:hb,aomap_fragment:db,aomap_pars_fragment:pb,batching_pars_vertex:mb,batching_vertex:gb,begin_vertex:_b,beginnormal_vertex:vb,bsdfs:xb,iridescence_fragment:yb,bumpmap_pars_fragment:Sb,clipping_planes_fragment:Mb,clipping_planes_pars_fragment:bb,clipping_planes_pars_vertex:Eb,clipping_planes_vertex:Tb,color_fragment:Ab,color_pars_fragment:Rb,color_pars_vertex:wb,color_vertex:Cb,common:Db,cube_uv_reflection_fragment:Ub,defaultnormal_vertex:Nb,displacementmap_pars_vertex:Lb,displacementmap_vertex:Ob,emissivemap_fragment:Ib,emissivemap_pars_fragment:Pb,colorspace_fragment:zb,colorspace_pars_fragment:Bb,envmap_fragment:Fb,envmap_common_pars_fragment:Hb,envmap_pars_fragment:Gb,envmap_pars_vertex:Vb,envmap_physical_pars_fragment:$b,envmap_vertex:kb,fog_vertex:Xb,fog_pars_vertex:Wb,fog_fragment:qb,fog_pars_fragment:Yb,gradientmap_pars_fragment:jb,lightmap_pars_fragment:Zb,lights_lambert_fragment:Kb,lights_lambert_pars_fragment:Qb,lights_pars_begin:Jb,lights_toon_fragment:eE,lights_toon_pars_fragment:tE,lights_phong_fragment:nE,lights_phong_pars_fragment:iE,lights_physical_fragment:aE,lights_physical_pars_fragment:rE,lights_fragment_begin:sE,lights_fragment_maps:oE,lights_fragment_end:lE,logdepthbuf_fragment:cE,logdepthbuf_pars_fragment:uE,logdepthbuf_pars_vertex:fE,logdepthbuf_vertex:hE,map_fragment:dE,map_pars_fragment:pE,map_particle_fragment:mE,map_particle_pars_fragment:gE,metalnessmap_fragment:_E,metalnessmap_pars_fragment:vE,morphinstance_vertex:xE,morphcolor_vertex:yE,morphnormal_vertex:SE,morphtarget_pars_vertex:ME,morphtarget_vertex:bE,normal_fragment_begin:EE,normal_fragment_maps:TE,normal_pars_fragment:AE,normal_pars_vertex:RE,normal_vertex:wE,normalmap_pars_fragment:CE,clearcoat_normal_fragment_begin:DE,clearcoat_normal_fragment_maps:UE,clearcoat_pars_fragment:NE,iridescence_pars_fragment:LE,opaque_fragment:OE,packing:IE,premultiplied_alpha_fragment:PE,project_vertex:zE,dithering_fragment:BE,dithering_pars_fragment:FE,roughnessmap_fragment:HE,roughnessmap_pars_fragment:GE,shadowmap_pars_fragment:VE,shadowmap_pars_vertex:kE,shadowmap_vertex:XE,shadowmask_pars_fragment:WE,skinbase_vertex:qE,skinning_pars_vertex:YE,skinning_vertex:jE,skinnormal_vertex:ZE,specularmap_fragment:KE,specularmap_pars_fragment:QE,tonemapping_fragment:JE,tonemapping_pars_fragment:$E,transmission_fragment:eT,transmission_pars_fragment:tT,uv_pars_fragment:nT,uv_pars_vertex:iT,uv_vertex:aT,worldpos_vertex:rT,background_vert:sT,background_frag:oT,backgroundCube_vert:lT,backgroundCube_frag:cT,cube_vert:uT,cube_frag:fT,depth_vert:hT,depth_frag:dT,distance_vert:pT,distance_frag:mT,equirect_vert:gT,equirect_frag:_T,linedashed_vert:vT,linedashed_frag:xT,meshbasic_vert:yT,meshbasic_frag:ST,meshlambert_vert:MT,meshlambert_frag:bT,meshmatcap_vert:ET,meshmatcap_frag:TT,meshnormal_vert:AT,meshnormal_frag:RT,meshphong_vert:wT,meshphong_frag:CT,meshphysical_vert:DT,meshphysical_frag:UT,meshtoon_vert:NT,meshtoon_frag:LT,points_vert:OT,points_frag:IT,shadow_vert:PT,shadow_frag:zT,sprite_vert:BT,sprite_frag:FT},He={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Bi={basic:{uniforms:Fn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Fn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new bt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Fn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Fn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Fn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new bt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Fn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Fn([He.points,He.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Fn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Fn([He.common,He.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Fn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Fn([He.sprite,He.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Fn([He.common,He.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Fn([He.lights,He.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Bi.physical={uniforms:Fn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Vc={r:0,b:0,g:0},Tr=new Xi,HT=new en;function GT(o,e,i,r,l,c,h){const d=new bt(0);let m=c===!0?0:1,p,_,g=null,y=0,S=null;function E(I){let L=I.isScene===!0?I.background:null;return L&&L.isTexture&&(L=(I.backgroundBlurriness>0?i:e).get(L)),L}function w(I){let L=!1;const z=E(I);z===null?x(d,m):z&&z.isColor&&(x(z,1),L=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(I,L){const z=E(L);z&&(z.isCubeTexture||z.mapping===nu)?(_===void 0&&(_=new ai(new Xs(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Gs(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,P,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Tr.copy(L.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),_.material.uniforms.envMap.value=z,_.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(HT.makeRotationFromEuler(Tr)),_.material.toneMapped=Rt.getTransfer(z.colorSpace)!==Ht,(g!==z||y!==z.version||S!==o.toneMapping)&&(_.material.needsUpdate=!0,g=z,y=z.version,S=o.toneMapping),_.layers.enableAll(),I.unshift(_,_.geometry,_.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new ai(new cl(2,2),new Wi({name:"BackgroundMaterial",uniforms:Gs(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(z.colorSpace)!==Ht,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||y!==z.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,g=z,y=z.version,S=o.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null))}function x(I,L){I.getRGB(Vc,Rv(o)),r.buffers.color.setClear(Vc.r,Vc.g,Vc.b,L,h)}function O(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(I,L=1){d.set(I),m=L,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(I){m=I,x(d,m)},render:w,addToRenderList:M,dispose:O}}function VT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,h=!1;function d(C,G,se,re,pe){let ue=!1;const N=g(re,se,G);c!==N&&(c=N,p(c.object)),ue=S(C,re,se,pe),ue&&E(C,re,se,pe),pe!==null&&e.update(pe,o.ELEMENT_ARRAY_BUFFER),(ue||h)&&(h=!1,L(C,G,se,re),pe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function _(C){return o.deleteVertexArray(C)}function g(C,G,se){const re=se.wireframe===!0;let pe=r[C.id];pe===void 0&&(pe={},r[C.id]=pe);let ue=pe[G.id];ue===void 0&&(ue={},pe[G.id]=ue);let N=ue[re];return N===void 0&&(N=y(m()),ue[re]=N),N}function y(C){const G=[],se=[],re=[];for(let pe=0;pe<i;pe++)G[pe]=0,se[pe]=0,re[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:se,attributeDivisors:re,object:C,attributes:{},index:null}}function S(C,G,se,re){const pe=c.attributes,ue=G.attributes;let N=0;const H=se.getAttributes();for(const ne in H)if(H[ne].location>=0){const Me=pe[ne];let U=ue[ne];if(U===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),Me===void 0||Me.attribute!==U||U&&Me.data!==U.data)return!0;N++}return c.attributesNum!==N||c.index!==re}function E(C,G,se,re){const pe={},ue=G.attributes;let N=0;const H=se.getAttributes();for(const ne in H)if(H[ne].location>=0){let Me=ue[ne];Me===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(Me=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(Me=C.instanceColor));const U={};U.attribute=Me,Me&&Me.data&&(U.data=Me.data),pe[ne]=U,N++}c.attributes=pe,c.attributesNum=N,c.index=re}function w(){const C=c.newAttributes;for(let G=0,se=C.length;G<se;G++)C[G]=0}function M(C){x(C,0)}function x(C,G){const se=c.newAttributes,re=c.enabledAttributes,pe=c.attributeDivisors;se[C]=1,re[C]===0&&(o.enableVertexAttribArray(C),re[C]=1),pe[C]!==G&&(o.vertexAttribDivisor(C,G),pe[C]=G)}function O(){const C=c.newAttributes,G=c.enabledAttributes;for(let se=0,re=G.length;se<re;se++)G[se]!==C[se]&&(o.disableVertexAttribArray(se),G[se]=0)}function I(C,G,se,re,pe,ue,N){N===!0?o.vertexAttribIPointer(C,G,se,pe,ue):o.vertexAttribPointer(C,G,se,re,pe,ue)}function L(C,G,se,re){w();const pe=re.attributes,ue=se.getAttributes(),N=G.defaultAttributeValues;for(const H in ue){const ne=ue[H];if(ne.location>=0){let be=pe[H];if(be===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(be=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(be=C.instanceColor)),be!==void 0){const Me=be.normalized,U=be.itemSize,te=e.get(be);if(te===void 0)continue;const _e=te.buffer,Ae=te.type,Re=te.bytesPerElement,Q=Ae===o.INT||Ae===o.UNSIGNED_INT||be.gpuType===qd;if(be.isInterleavedBufferAttribute){const fe=be.data,Oe=fe.stride,Xe=be.offset;if(fe.isInstancedInterleavedBuffer){for(let ze=0;ze<ne.locationSize;ze++)x(ne.location+ze,fe.meshPerAttribute);C.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ze=0;ze<ne.locationSize;ze++)M(ne.location+ze);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let ze=0;ze<ne.locationSize;ze++)I(ne.location+ze,U/ne.locationSize,Ae,Me,Oe*Re,(Xe+U/ne.locationSize*ze)*Re,Q)}else{if(be.isInstancedBufferAttribute){for(let fe=0;fe<ne.locationSize;fe++)x(ne.location+fe,be.meshPerAttribute);C.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let fe=0;fe<ne.locationSize;fe++)M(ne.location+fe);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let fe=0;fe<ne.locationSize;fe++)I(ne.location+fe,U/ne.locationSize,Ae,Me,U*Re,U/ne.locationSize*fe*Re,Q)}}else if(N!==void 0){const Me=N[H];if(Me!==void 0)switch(Me.length){case 2:o.vertexAttrib2fv(ne.location,Me);break;case 3:o.vertexAttrib3fv(ne.location,Me);break;case 4:o.vertexAttrib4fv(ne.location,Me);break;default:o.vertexAttrib1fv(ne.location,Me)}}}}O()}function z(){K();for(const C in r){const G=r[C];for(const se in G){const re=G[se];for(const pe in re)_(re[pe].object),delete re[pe];delete G[se]}delete r[C]}}function F(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const se in G){const re=G[se];for(const pe in re)_(re[pe].object),delete re[pe];delete G[se]}delete r[C.id]}function P(C){for(const G in r){const se=r[G];if(se[C.id]===void 0)continue;const re=se[C.id];for(const pe in re)_(re[pe].object),delete re[pe];delete se[C.id]}}function K(){R(),h=!0,c!==l&&(c=l,p(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:R,dispose:z,releaseStatesOfGeometry:F,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:M,disableUnusedAttributes:O}}function kT(o,e,i){let r;function l(p){r=p}function c(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,g){g!==0&&(o.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function d(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let S=0;for(let E=0;E<g;E++)S+=_[E];i.update(S,r,1)}function m(p,_,g,y){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)h(p[E],_[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,_,0,y,0,g);let E=0;for(let w=0;w<g;w++)E+=_[w]*y[w];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function XT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Ci&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const K=P===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ii&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Fi&&!K)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(lt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),I=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=o.getParameter(o.MAX_SAMPLES),F=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:O,maxVaryings:I,maxFragmentUniforms:L,maxSamples:z,samples:F}}function WT(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new Rr,d=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const S=g.length!==0||y||r!==0||l;return l=y,r=g.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=_(g,y,0)},this.setState=function(g,y,S){const E=g.clippingPlanes,w=g.clipIntersection,M=g.clipShadows,x=o.get(g);if(!l||E===null||E.length===0||c&&!M)c?_(null):p();else{const O=c?0:r,I=O*4;let L=x.clippingState||null;m.value=L,L=_(E,y,I,S);for(let z=0;z!==I;++z)L[z]=i[z];x.clippingState=L,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,y,S,E){const w=g!==null?g.length:0;let M=null;if(w!==0){if(M=m.value,E!==!0||M===null){const x=S+w*4,O=y.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<x)&&(M=new Float32Array(x));for(let I=0,L=S;I!==w;++I,L+=4)h.copy(g[I]).applyMatrix4(O,d),h.normal.toArray(M,L),M[L+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}function qT(o){let e=new WeakMap;function i(h,d){return d===ad?h.mapping=Nr:d===rd&&(h.mapping=zs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===ad||d===rd)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Dv(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const tr=4,U_=[.125,.215,.35,.446,.526,.582],Cr=20,YT=256,jo=new Ov,N_=new bt;let kh=null,Xh=0,Wh=0,qh=!1;const jT=new ee;class L_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=jT}=c;kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=P_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kh,Xh,Wh),this._renderer.xr.enabled=qh,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Nr||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:In,minFilter:In,generateMipmaps:!1,type:ya,format:Ci,colorSpace:Fs,depthBuffer:!1},l=O_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=O_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ZT(c)),this._blurMaterial=QT(c,e,i),this._ggxMaterial=KT(c,e,i)}return l}_compileMaterial(e){const i=new ai(new Ui,e);this._renderer.compile(i,jo)}_sceneToCubeUV(e,i,r,l,c){const m=new qn(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,S=g.toneMapping;g.getClearColor(N_),g.toneMapping=Gi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ai(new Xs,new ap({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let x=!1;const O=e.background;O?O.isColor&&(M.color.copy(O),e.background=null,x=!0):(M.color.copy(N_),x=!0);for(let I=0;I<6;I++){const L=I%3;L===0?(m.up.set(0,p[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[I],c.y,c.z)):L===1?(m.up.set(0,0,p[I]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[I],c.z)):(m.up.set(0,p[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[I]));const z=this._cubeSize;Ls(l,L*z,I>2?z:0,z,z),g.setRenderTarget(l),x&&g.render(w,m),g.render(e,m)}g.toneMapping=S,g.autoClear=y,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Nr||e.mapping===zs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=P_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=I_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Ls(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,jo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),y=0+p*1.25,S=g*y,{_lodMax:E}=this,w=this._sizeLods[r],M=3*w*(r>E-tr?r-E+tr:0),x=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=E-i,Ls(c,M,x,3*w,2*w),l.setRenderTarget(c),l.render(d,jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Ls(e,M,x,3*w,2*w),l.setRenderTarget(e),l.render(d,jo)}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const y=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Cr-1),w=c/E,M=isFinite(c)?1+Math.floor(_*w):Cr;M>Cr&&lt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Cr}`);const x=[];let O=0;for(let P=0;P<Cr;++P){const K=P/w,R=Math.exp(-K*K/2);x.push(R),P===0?O+=R:P<M&&(O+=2*R)}for(let P=0;P<x.length;P++)x[P]=x[P]/O;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=x,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:I}=this;y.dTheta.value=E,y.mipInt.value=I-r;const L=this._sizeLods[l],z=3*L*(l>I-tr?l-I+tr:0),F=4*(this._cubeSize-L);Ls(i,z,F,3*L,2*L),m.setRenderTarget(i),m.render(g,jo)}}function ZT(o){const e=[],i=[],r=[];let l=o;const c=o-tr+1+U_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-tr?m=U_[h-o+tr-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,g=1+p,y=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,E=6,w=3,M=2,x=1,O=new Float32Array(w*E*S),I=new Float32Array(M*E*S),L=new Float32Array(x*E*S);for(let F=0;F<S;F++){const P=F%3*2/3-1,K=F>2?0:-1,R=[P,K,0,P+2/3,K,0,P+2/3,K+1,0,P,K,0,P+2/3,K+1,0,P,K+1,0];O.set(R,w*E*F),I.set(y,M*E*F);const C=[F,F,F,F,F,F];L.set(C,x*E*F)}const z=new Ui;z.setAttribute("position",new Di(O,w)),z.setAttribute("uv",new Di(I,M)),z.setAttribute("faceIndex",new Di(L,x)),r.push(new ai(z,null)),l>tr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function O_(o,e,i){const r=new Vi(o,e,i);return r.texture.mapping=nu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ls(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function KT(o,e,i){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:YT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:iu(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function QT(o,e,i){const r=new Float32Array(Cr),l=new ee(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:iu(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function I_(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function P_(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function iu(){return`

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
	`}function JT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===ad||m===rd,_=m===Nr||m===zs;if(p||_){let g=e.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new L_(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new L_(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function $T(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&rl("WebGLRenderer: "+r+" extension not supported."),l}}}function e1(o,e,i,r){const l={},c=new WeakMap;function h(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",h),delete l[y.id];const S=c.get(y);S&&(e.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(g,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const S in y)e.update(y[S],o.ARRAY_BUFFER)}function p(g){const y=[],S=g.index,E=g.attributes.position;let w=0;if(S!==null){const O=S.array;w=S.version;for(let I=0,L=O.length;I<L;I+=3){const z=O[I+0],F=O[I+1],P=O[I+2];y.push(z,F,F,P,P,z)}}else if(E!==void 0){const O=E.array;w=E.version;for(let I=0,L=O.length/3-1;I<L;I+=3){const z=I+0,F=I+1,P=I+2;y.push(z,F,F,P,P,z)}}else return;const M=new(Sv(y)?Av:Tv)(y,1);M.version=w;const x=c.get(g);x&&e.remove(x),c.set(g,M)}function _(g){const y=c.get(g);if(y){const S=g.index;S!==null&&y.version<S.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function t1(o,e,i){let r;function l(y){r=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,S){o.drawElements(r,S,c,y*h),i.update(S,r,1)}function p(y,S,E){E!==0&&(o.drawElementsInstanced(r,S,c,y*h,E),i.update(S,r,E))}function _(y,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,E);let M=0;for(let x=0;x<E;x++)M+=S[x];i.update(M,r,1)}function g(y,S,E,w){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<y.length;x++)p(y[x]/h,S[x],w[x]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,w,0,E);let x=0;for(let O=0;O<E;O++)x+=S[O]*w[O];i.update(x,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function n1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:Tt("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function i1(o,e,i){const r=new WeakMap,l=new an;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let y=r.get(d);if(y===void 0||y.count!==g){let C=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let L=0;E===!0&&(L=1),w===!0&&(L=2),M===!0&&(L=3);let z=d.attributes.position.count*L,F=1;z>e.maxTextureSize&&(F=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const P=new Float32Array(z*F*4*g),K=new Mv(P,z,F,g);K.type=Fi,K.needsUpdate=!0;const R=L*4;for(let G=0;G<g;G++){const se=x[G],re=O[G],pe=I[G],ue=z*F*4*G;for(let N=0;N<se.count;N++){const H=N*R;E===!0&&(l.fromBufferAttribute(se,N),P[ue+H+0]=l.x,P[ue+H+1]=l.y,P[ue+H+2]=l.z,P[ue+H+3]=0),w===!0&&(l.fromBufferAttribute(re,N),P[ue+H+4]=l.x,P[ue+H+5]=l.y,P[ue+H+6]=l.z,P[ue+H+7]=0),M===!0&&(l.fromBufferAttribute(pe,N),P[ue+H+8]=l.x,P[ue+H+9]=l.y,P[ue+H+10]=l.z,P[ue+H+11]=pe.itemSize===4?l.w:1)}}y={count:g,texture:K,size:new mt(z,F)},r.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const w=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function a1(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const r1={[rv]:"LINEAR_TONE_MAPPING",[sv]:"REINHARD_TONE_MAPPING",[ov]:"CINEON_TONE_MAPPING",[lv]:"ACES_FILMIC_TONE_MAPPING",[uv]:"AGX_TONE_MAPPING",[fv]:"NEUTRAL_TONE_MAPPING",[cv]:"CUSTOM_TONE_MAPPING"};function s1(o,e,i,r,l){const c=new Vi(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),h=new Vi(e,i,{type:ya,depthBuffer:!1,stencilBuffer:!1}),d=new Ui;d.setAttribute("position",new vi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new vi([0,2,0,0,2,0],2));const m=new qM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ai(d,m),_=new Ov(-1,1,1,-1,0,1);let g=null,y=null,S=!1,E,w=null,M=[],x=!1;this.setSize=function(O,I){c.setSize(O,I),h.setSize(O,I);for(let L=0;L<M.length;L++){const z=M[L];z.setSize&&z.setSize(O,I)}},this.setEffects=function(O){M=O,x=M.length>0&&M[0].isRenderPass===!0;const I=c.width,L=c.height;for(let z=0;z<M.length;z++){const F=M[z];F.setSize&&F.setSize(I,L)}},this.begin=function(O,I){if(S||O.toneMapping===Gi&&M.length===0)return!1;if(w=I,I!==null){const L=I.width,z=I.height;(c.width!==L||c.height!==z)&&this.setSize(L,z)}return x===!1&&O.setRenderTarget(c),E=O.toneMapping,O.toneMapping=Gi,!0},this.hasRenderPass=function(){return x},this.end=function(O,I){O.toneMapping=E,S=!0;let L=c,z=h;for(let F=0;F<M.length;F++){const P=M[F];if(P.enabled!==!1&&(P.render(O,z,L,I),P.needsSwap!==!1)){const K=L;L=z,z=K}}if(g!==O.outputColorSpace||y!==O.toneMapping){g=O.outputColorSpace,y=O.toneMapping,m.defines={},Rt.getTransfer(g)===Ht&&(m.defines.SRGB_TRANSFER="");const F=r1[y];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,O.setRenderTarget(w),O.render(p,_),w=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Pv=new Pn,Vd=new sl(1,1),zv=new Mv,Bv=new SM,Fv=new Cv,z_=[],B_=[],F_=new Float32Array(16),H_=new Float32Array(9),G_=new Float32Array(4);function Ws(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=z_[l];if(c===void 0&&(c=new Float32Array(l),z_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function gn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function _n(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function au(o,e){let i=B_[e];i===void 0&&(i=new Int32Array(e),B_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function o1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function l1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2fv(this.addr,e),_n(i,e)}}function c1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;o.uniform3fv(this.addr,e),_n(i,e)}}function u1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4fv(this.addr,e),_n(i,e)}}function f1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;G_.set(r),o.uniformMatrix2fv(this.addr,!1,G_),_n(i,r)}}function h1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;H_.set(r),o.uniformMatrix3fv(this.addr,!1,H_),_n(i,r)}}function d1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;F_.set(r),o.uniformMatrix4fv(this.addr,!1,F_),_n(i,r)}}function p1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function m1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2iv(this.addr,e),_n(i,e)}}function g1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3iv(this.addr,e),_n(i,e)}}function _1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4iv(this.addr,e),_n(i,e)}}function v1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function x1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2uiv(this.addr,e),_n(i,e)}}function y1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3uiv(this.addr,e),_n(i,e)}}function S1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4uiv(this.addr,e),_n(i,e)}}function M1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Vd.compareFunction=i.isReversedDepthBuffer()?$d:Jd,c=Vd):c=Pv,i.setTexture2D(e||c,l)}function b1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Bv,l)}function E1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Fv,l)}function T1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||zv,l)}function A1(o){switch(o){case 5126:return o1;case 35664:return l1;case 35665:return c1;case 35666:return u1;case 35674:return f1;case 35675:return h1;case 35676:return d1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return _1;case 5125:return v1;case 36294:return x1;case 36295:return y1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return b1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return T1}}function R1(o,e){o.uniform1fv(this.addr,e)}function w1(o,e){const i=Ws(e,this.size,2);o.uniform2fv(this.addr,i)}function C1(o,e){const i=Ws(e,this.size,3);o.uniform3fv(this.addr,i)}function D1(o,e){const i=Ws(e,this.size,4);o.uniform4fv(this.addr,i)}function U1(o,e){const i=Ws(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function N1(o,e){const i=Ws(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function L1(o,e){const i=Ws(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function O1(o,e){o.uniform1iv(this.addr,e)}function I1(o,e){o.uniform2iv(this.addr,e)}function P1(o,e){o.uniform3iv(this.addr,e)}function z1(o,e){o.uniform4iv(this.addr,e)}function B1(o,e){o.uniform1uiv(this.addr,e)}function F1(o,e){o.uniform2uiv(this.addr,e)}function H1(o,e){o.uniform3uiv(this.addr,e)}function G1(o,e){o.uniform4uiv(this.addr,e)}function V1(o,e,i){const r=this.cache,l=e.length,c=au(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),_n(r,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Vd:h=Pv;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,c[d])}function k1(o,e,i){const r=this.cache,l=e.length,c=au(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),_n(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Bv,c[h])}function X1(o,e,i){const r=this.cache,l=e.length,c=au(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),_n(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Fv,c[h])}function W1(o,e,i){const r=this.cache,l=e.length,c=au(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),_n(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||zv,c[h])}function q1(o){switch(o){case 5126:return R1;case 35664:return w1;case 35665:return C1;case 35666:return D1;case 35674:return U1;case 35675:return N1;case 35676:return L1;case 5124:case 35670:return O1;case 35667:case 35671:return I1;case 35668:case 35672:return P1;case 35669:case 35673:return z1;case 5125:return B1;case 36294:return F1;case 36295:return H1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return k1;case 35680:case 36300:case 36308:case 36293:return X1;case 36289:case 36303:case 36311:case 36292:return W1}}class Y1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=A1(i.type)}}class j1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=q1(i.type)}}class Z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const Yh=/(\w+)(\])?(\[|\.)?/g;function V_(o,e){o.seq.push(e),o.map[e.id]=e}function K1(o,e,i){const r=o.name,l=r.length;for(Yh.lastIndex=0;;){const c=Yh.exec(r),h=Yh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){V_(i,p===void 0?new Y1(d,o,e):new j1(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new Z1(d),V_(i,g)),i=g}}}class Zc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);K1(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function k_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Q1=37297;let J1=0;function $1(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const X_=new ht;function eA(o){Rt._getMatrix(X_,Rt.workingColorSpace,o);const e=`mat3( ${X_.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(o)){case Kc:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function W_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+$1(o.getShaderSource(e),d)}else return c}function tA(o,e){const i=eA(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const nA={[rv]:"Linear",[sv]:"Reinhard",[ov]:"Cineon",[lv]:"ACESFilmic",[uv]:"AgX",[fv]:"Neutral",[cv]:"Custom"};function iA(o,e){const i=nA[e];return i===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const kc=new ee;function aA(){Rt.getLuminanceCoefficients(kc);const o=kc.x.toFixed(4),e=kc.y.toFixed(4),i=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function sA(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function oA(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Jo(o){return o!==""}function q_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Y_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lA=/^[ \t]*#include +<([\w\d./]+)>/gm;function kd(o){return o.replace(lA,uA)}const cA=new Map;function uA(o,e){let i=dt[e];if(i===void 0){const r=cA.get(e);if(r!==void 0)i=dt[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return kd(i)}const fA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function j_(o){return o.replace(fA,hA)}function hA(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Z_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const dA={[Xc]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function pA(o){return dA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mA={[Nr]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE",[nu]:"ENVMAP_TYPE_CUBE_UV"};function gA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":mA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const _A={[zs]:"ENVMAP_MODE_REFRACTION"};function vA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":_A[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xA={[av]:"ENVMAP_BLENDING_MULTIPLY",[HS]:"ENVMAP_BLENDING_MIX",[GS]:"ENVMAP_BLENDING_ADD"};function yA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":xA[o.combine]||"ENVMAP_BLENDING_NONE"}function SA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function MA(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=pA(i),p=gA(i),_=vA(i),g=yA(i),y=SA(i),S=rA(i),E=sA(c),w=l.createProgram();let M,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Jo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Jo).join(`
`),x.length>0&&(x+=`
`)):(M=[Z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),x=[Z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Gi?"#define TONE_MAPPING":"",i.toneMapping!==Gi?dt.tonemapping_pars_fragment:"",i.toneMapping!==Gi?iA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,tA("linearToOutputTexel",i.outputColorSpace),aA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Jo).join(`
`)),h=kd(h),h=q_(h,i),h=Y_(h,i),d=kd(d),d=q_(d,i),d=Y_(d,i),h=j_(h),d=j_(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===a_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===a_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=O+M+h,L=O+x+d,z=k_(l,l.VERTEX_SHADER,I),F=k_(l,l.FRAGMENT_SHADER,L);l.attachShader(w,z),l.attachShader(w,F),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function P(G){if(o.debug.checkShaderErrors){const se=l.getProgramInfoLog(w)||"",re=l.getShaderInfoLog(z)||"",pe=l.getShaderInfoLog(F)||"",ue=se.trim(),N=re.trim(),H=pe.trim();let ne=!0,be=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ne=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,z,F);else{const Me=W_(l,z,"vertex"),U=W_(l,F,"fragment");Tt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ue+`
`+Me+`
`+U)}else ue!==""?lt("WebGLProgram: Program Info Log:",ue):(N===""||H==="")&&(be=!1);be&&(G.diagnostics={runnable:ne,programLog:ue,vertexShader:{log:N,prefix:M},fragmentShader:{log:H,prefix:x}})}l.deleteShader(z),l.deleteShader(F),K=new Zc(l,w),R=oA(l,w)}let K;this.getUniforms=function(){return K===void 0&&P(this),K};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(w,Q1)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=J1++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=z,this.fragmentShader=F,this}let bA=0;class EA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new TA(e),i.set(e,r)),r}}class TA{constructor(e){this.id=bA++,this.code=e,this.usedTimes=0}}function AA(o,e,i,r,l,c,h){const d=new ip,m=new EA,p=new Set,_=[],g=new Map,y=l.logarithmicDepthBuffer;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return p.add(R),R===0?"uv":`uv${R}`}function M(R,C,G,se,re){const pe=se.fog,ue=re.geometry,N=R.isMeshStandardMaterial?se.environment:null,H=(R.isMeshStandardMaterial?i:e).get(R.envMap||N),ne=H&&H.mapping===nu?H.image.height:null,be=E[R.type];R.precision!==null&&(S=l.getMaxPrecision(R.precision),S!==R.precision&&lt("WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const Me=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,U=Me!==void 0?Me.length:0;let te=0;ue.morphAttributes.position!==void 0&&(te=1),ue.morphAttributes.normal!==void 0&&(te=2),ue.morphAttributes.color!==void 0&&(te=3);let _e,Ae,Re,Q;if(be){const At=Bi[be];_e=At.vertexShader,Ae=At.fragmentShader}else _e=R.vertexShader,Ae=R.fragmentShader,m.update(R),Re=m.getVertexShaderID(R),Q=m.getFragmentShaderID(R);const fe=o.getRenderTarget(),Oe=o.state.buffers.depth.getReversed(),Xe=re.isInstancedMesh===!0,ze=re.isBatchedMesh===!0,pt=!!R.map,Zt=!!R.matcap,st=!!H,nt=!!R.aoMap,Et=!!R.lightMap,it=!!R.bumpMap,Wt=!!R.normalMap,V=!!R.displacementMap,qt=!!R.emissiveMap,vt=!!R.metalnessMap,wt=!!R.roughnessMap,Ye=R.anisotropy>0,D=R.clearcoat>0,b=R.dispersion>0,W=R.iridescence>0,de=R.sheen>0,ce=R.transmission>0,Z=Ye&&!!R.anisotropyMap,Ie=D&&!!R.clearcoatMap,we=D&&!!R.clearcoatNormalMap,ye=D&&!!R.clearcoatRoughnessMap,Ge=W&&!!R.iridescenceMap,me=W&&!!R.iridescenceThicknessMap,Ee=de&&!!R.sheenColorMap,Ne=de&&!!R.sheenRoughnessMap,Le=!!R.specularMap,Ce=!!R.specularColorMap,at=!!R.specularIntensityMap,X=ce&&!!R.transmissionMap,Be=ce&&!!R.thicknessMap,De=!!R.gradientMap,Ve=!!R.alphaMap,Te=R.alphaTest>0,xe=!!R.alphaHash,Ue=!!R.extensions;let rt=Gi;R.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(rt=o.toneMapping);const Pt={shaderID:be,shaderType:R.type,shaderName:R.name,vertexShader:_e,fragmentShader:Ae,defines:R.defines,customVertexShaderID:Re,customFragmentShaderID:Q,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:ze,batchingColor:ze&&re._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&re.instanceColor!==null,instancingMorph:Xe&&re.morphTexture!==null,outputColorSpace:fe===null?o.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Fs,alphaToCoverage:!!R.alphaToCoverage,map:pt,matcap:Zt,envMap:st,envMapMode:st&&H.mapping,envMapCubeUVHeight:ne,aoMap:nt,lightMap:Et,bumpMap:it,normalMap:Wt,displacementMap:V,emissiveMap:qt,normalMapObjectSpace:Wt&&R.normalMapType===XS,normalMapTangentSpace:Wt&&R.normalMapType===yv,metalnessMap:vt,roughnessMap:wt,anisotropy:Ye,anisotropyMap:Z,clearcoat:D,clearcoatMap:Ie,clearcoatNormalMap:we,clearcoatRoughnessMap:ye,dispersion:b,iridescence:W,iridescenceMap:Ge,iridescenceThicknessMap:me,sheen:de,sheenColorMap:Ee,sheenRoughnessMap:Ne,specularMap:Le,specularColorMap:Ce,specularIntensityMap:at,transmission:ce,transmissionMap:X,thicknessMap:Be,gradientMap:De,opaque:R.transparent===!1&&R.blending===Os&&R.alphaToCoverage===!1,alphaMap:Ve,alphaTest:Te,alphaHash:xe,combine:R.combine,mapUv:pt&&w(R.map.channel),aoMapUv:nt&&w(R.aoMap.channel),lightMapUv:Et&&w(R.lightMap.channel),bumpMapUv:it&&w(R.bumpMap.channel),normalMapUv:Wt&&w(R.normalMap.channel),displacementMapUv:V&&w(R.displacementMap.channel),emissiveMapUv:qt&&w(R.emissiveMap.channel),metalnessMapUv:vt&&w(R.metalnessMap.channel),roughnessMapUv:wt&&w(R.roughnessMap.channel),anisotropyMapUv:Z&&w(R.anisotropyMap.channel),clearcoatMapUv:Ie&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:we&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:me&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&w(R.sheenRoughnessMap.channel),specularMapUv:Le&&w(R.specularMap.channel),specularColorMapUv:Ce&&w(R.specularColorMap.channel),specularIntensityMapUv:at&&w(R.specularIntensityMap.channel),transmissionMapUv:X&&w(R.transmissionMap.channel),thicknessMapUv:Be&&w(R.thicknessMap.channel),alphaMapUv:Ve&&w(R.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Wt||Ye),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!ue.attributes.uv&&(pt||Ve),fog:!!pe,useFog:R.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Oe,skinning:re.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:te,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:rt,decodeVideoTexture:pt&&R.map.isVideoTexture===!0&&Rt.getTransfer(R.map.colorSpace)===Ht,decodeVideoTextureEmissive:qt&&R.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(R.emissiveMap.colorSpace)===Ht,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ma,flipSided:R.side===Yn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Ue&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&R.extensions.multiDraw===!0||ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function x(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const G in R.defines)C.push(G),C.push(R.defines[G]);return R.isRawShaderMaterial===!1&&(O(C,R),I(C,R),C.push(o.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function O(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function I(R,C){d.disableAll(),C.instancing&&d.enable(0),C.instancingColor&&d.enable(1),C.instancingMorph&&d.enable(2),C.matcap&&d.enable(3),C.envMap&&d.enable(4),C.normalMapObjectSpace&&d.enable(5),C.normalMapTangentSpace&&d.enable(6),C.clearcoat&&d.enable(7),C.iridescence&&d.enable(8),C.alphaTest&&d.enable(9),C.vertexColors&&d.enable(10),C.vertexAlphas&&d.enable(11),C.vertexUv1s&&d.enable(12),C.vertexUv2s&&d.enable(13),C.vertexUv3s&&d.enable(14),C.vertexTangents&&d.enable(15),C.anisotropy&&d.enable(16),C.alphaHash&&d.enable(17),C.batching&&d.enable(18),C.dispersion&&d.enable(19),C.batchingColor&&d.enable(20),C.gradientMap&&d.enable(21),R.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),R.push(d.mask)}function L(R){const C=E[R.type];let G;if(C){const se=Bi[C];G=OM.clone(se.uniforms)}else G=R.uniforms;return G}function z(R,C){let G=g.get(C);return G!==void 0?++G.usedTimes:(G=new MA(o,C,R,c),_.push(G),g.set(C,G)),G}function F(R){if(--R.usedTimes===0){const C=_.indexOf(R);_[C]=_[_.length-1],_.pop(),g.delete(R.cacheKey),R.destroy()}}function P(R){m.remove(R)}function K(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:L,acquireProgram:z,releaseProgram:F,releaseShaderCache:P,programs:_,dispose:K}}function RA(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function wA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function K_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Q_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(g,y,S,E,w,M){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:y,material:S,groupOrder:E,renderOrder:g.renderOrder,z:w,group:M},o[e]=x):(x.id=g.id,x.object=g,x.geometry=y,x.material=S,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=w,x.group=M),e++,x}function d(g,y,S,E,w,M){const x=h(g,y,S,E,w,M);S.transmission>0?r.push(x):S.transparent===!0?l.push(x):i.push(x)}function m(g,y,S,E,w,M){const x=h(g,y,S,E,w,M);S.transmission>0?r.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,y){i.length>1&&i.sort(g||wA),r.length>1&&r.sort(y||K_),l.length>1&&l.sort(y||K_)}function _(){for(let g=e,y=o.length;g<y;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function CA(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new Q_,o.set(r,[h])):l>=c.length?(h=new Q_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function DA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ee,color:new bt};break;case"SpotLight":i={position:new ee,direction:new ee,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ee,color:new bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ee,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":i={color:new bt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return o[e.id]=i,i}}}function UA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let NA=0;function LA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function OA(o){const e=new DA,i=UA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ee);const l=new ee,c=new en,h=new en;function d(p){let _=0,g=0,y=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let S=0,E=0,w=0,M=0,x=0,O=0,I=0,L=0,z=0,F=0,P=0;p.sort(LA);for(let R=0,C=p.length;R<C;R++){const G=p[R],se=G.color,re=G.intensity,pe=G.distance;let ue=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Bs?ue=G.shadow.map.texture:ue=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=se.r*re,g+=se.g*re,y+=se.b*re;else if(G.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(G.sh.coefficients[N],re);P++}else if(G.isDirectionalLight){const N=e.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,ne=i.get(G);ne.shadowIntensity=H.intensity,ne.shadowBias=H.bias,ne.shadowNormalBias=H.normalBias,ne.shadowRadius=H.radius,ne.shadowMapSize=H.mapSize,r.directionalShadow[S]=ne,r.directionalShadowMap[S]=ue,r.directionalShadowMatrix[S]=G.shadow.matrix,O++}r.directional[S]=N,S++}else if(G.isSpotLight){const N=e.get(G);N.position.setFromMatrixPosition(G.matrixWorld),N.color.copy(se).multiplyScalar(re),N.distance=pe,N.coneCos=Math.cos(G.angle),N.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),N.decay=G.decay,r.spot[w]=N;const H=G.shadow;if(G.map&&(r.spotLightMap[z]=G.map,z++,H.updateMatrices(G),G.castShadow&&F++),r.spotLightMatrix[w]=H.matrix,G.castShadow){const ne=i.get(G);ne.shadowIntensity=H.intensity,ne.shadowBias=H.bias,ne.shadowNormalBias=H.normalBias,ne.shadowRadius=H.radius,ne.shadowMapSize=H.mapSize,r.spotShadow[w]=ne,r.spotShadowMap[w]=ue,L++}w++}else if(G.isRectAreaLight){const N=e.get(G);N.color.copy(se).multiplyScalar(re),N.halfWidth.set(G.width*.5,0,0),N.halfHeight.set(0,G.height*.5,0),r.rectArea[M]=N,M++}else if(G.isPointLight){const N=e.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),N.distance=G.distance,N.decay=G.decay,G.castShadow){const H=G.shadow,ne=i.get(G);ne.shadowIntensity=H.intensity,ne.shadowBias=H.bias,ne.shadowNormalBias=H.normalBias,ne.shadowRadius=H.radius,ne.shadowMapSize=H.mapSize,ne.shadowCameraNear=H.camera.near,ne.shadowCameraFar=H.camera.far,r.pointShadow[E]=ne,r.pointShadowMap[E]=ue,r.pointShadowMatrix[E]=G.shadow.matrix,I++}r.point[E]=N,E++}else if(G.isHemisphereLight){const N=e.get(G);N.skyColor.copy(G.color).multiplyScalar(re),N.groundColor.copy(G.groundColor).multiplyScalar(re),r.hemi[x]=N,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=He.LTC_FLOAT_1,r.rectAreaLTC2=He.LTC_FLOAT_2):(r.rectAreaLTC1=He.LTC_HALF_1,r.rectAreaLTC2=He.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=y;const K=r.hash;(K.directionalLength!==S||K.pointLength!==E||K.spotLength!==w||K.rectAreaLength!==M||K.hemiLength!==x||K.numDirectionalShadows!==O||K.numPointShadows!==I||K.numSpotShadows!==L||K.numSpotMaps!==z||K.numLightProbes!==P)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=M,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=L+z-F,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=P,K.directionalLength=S,K.pointLength=E,K.spotLength=w,K.rectAreaLength=M,K.hemiLength=x,K.numDirectionalShadows=O,K.numPointShadows=I,K.numSpotShadows=L,K.numSpotMaps=z,K.numLightProbes=P,r.version=NA++)}function m(p,_){let g=0,y=0,S=0,E=0,w=0;const M=_.matrixWorldInverse;for(let x=0,O=p.length;x<O;x++){const I=p[x];if(I.isDirectionalLight){const L=r.directional[g];L.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),g++}else if(I.isSpotLight){const L=r.spot[S];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),S++}else if(I.isRectAreaLight){const L=r.rectArea[E];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(M),h.identity(),c.copy(I.matrixWorld),c.premultiply(M),h.extractRotation(c),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),E++}else if(I.isPointLight){const L=r.point[y];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(M),y++}else if(I.isHemisphereLight){const L=r.hemi[w];L.direction.setFromMatrixPosition(I.matrixWorld),L.direction.transformDirection(M),w++}}}return{setup:d,setupView:m,state:r}}function J_(o){const e=new OA(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function IA(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new J_(o),e.set(l,[d])):c>=h.length?(d=new J_(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const PA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zA=`uniform sampler2D shadow_pass;
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
}`,BA=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],FA=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],$_=new en,Zo=new ee,jh=new ee;function HA(o,e,i){let r=new rp;const l=new mt,c=new mt,h=new an,d=new YM,m=new jM,p={},_=i.maxTextureSize,g={[nr]:Yn,[Yn]:nr,[ma]:ma},y=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:PA,fragmentShader:zA}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new Ui;E.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ai(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let x=this.type;this.render=function(F,P,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;F.type===SS&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=Xc);const R=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),se=o.state;se.setBlending(_a),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const re=x!==this.type;re&&P.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(ue=>ue.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,ue=F.length;pe<ue;pe++){const N=F[pe],H=N.shadow;if(H===void 0){lt("WebGLShadowMap:",N,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ne=H.getFrameExtents();if(l.multiply(ne),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ne.x),l.x=c.x*ne.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ne.y),l.y=c.y*ne.y,H.mapSize.y=c.y)),H.map===null||re===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ko){if(N.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Vi(l.x,l.y,{format:Bs,type:ya,minFilter:In,magFilter:In,generateMipmaps:!1}),H.map.texture.name=N.name+".shadowMap",H.map.depthTexture=new sl(l.x,l.y,Fi),H.map.depthTexture.name=N.name+".shadowMapDepth",H.map.depthTexture.format=Sa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=dn,H.map.depthTexture.magFilter=dn}else{N.isPointLight?(H.map=new Dv(l.x),H.map.depthTexture=new WM(l.x,ki)):(H.map=new Vi(l.x,l.y),H.map.depthTexture=new sl(l.x,l.y,ki)),H.map.depthTexture.name=N.name+".shadowMap",H.map.depthTexture.format=Sa;const Me=o.state.buffers.depth.getReversed();this.type===Xc?(H.map.depthTexture.compareFunction=Me?$d:Jd,H.map.depthTexture.minFilter=In,H.map.depthTexture.magFilter=In):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=dn,H.map.depthTexture.magFilter=dn)}H.camera.updateProjectionMatrix()}const be=H.map.isWebGLCubeRenderTarget?6:1;for(let Me=0;Me<be;Me++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,Me),o.clear();else{Me===0&&(o.setRenderTarget(H.map),o.clear());const U=H.getViewport(Me);h.set(c.x*U.x,c.y*U.y,c.x*U.z,c.y*U.w),se.viewport(h)}if(N.isPointLight){const U=H.camera,te=H.matrix,_e=N.distance||U.far;_e!==U.far&&(U.far=_e,U.updateProjectionMatrix()),Zo.setFromMatrixPosition(N.matrixWorld),U.position.copy(Zo),jh.copy(U.position),jh.add(BA[Me]),U.up.copy(FA[Me]),U.lookAt(jh),U.updateMatrixWorld(),te.makeTranslation(-Zo.x,-Zo.y,-Zo.z),$_.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H._frustum.setFromProjectionMatrix($_,U.coordinateSystem,U.reversedDepth)}else H.updateMatrices(N);r=H.getFrustum(),L(P,K,H.camera,N,this.type)}H.isPointLightShadow!==!0&&this.type===Ko&&O(H,K),H.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(R,C,G)};function O(F,P){const K=e.update(w);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Vi(l.x,l.y,{format:Bs,type:ya})),y.uniforms.shadow_pass.value=F.map.depthTexture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(P,null,K,y,w,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(P,null,K,S,w,null)}function I(F,P,K,R){let C=null;const G=K.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)C=G;else if(C=K.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const se=C.uuid,re=P.uuid;let pe=p[se];pe===void 0&&(pe={},p[se]=pe);let ue=pe[re];ue===void 0&&(ue=C.clone(),pe[re]=ue,P.addEventListener("dispose",z)),C=ue}if(C.visible=P.visible,C.wireframe=P.wireframe,R===Ko?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:g[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,K.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const se=o.properties.get(C);se.light=K}return C}function L(F,P,K,R,C){if(F.visible===!1)return;if(F.layers.test(P.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===Ko)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,F.matrixWorld);const re=e.update(F),pe=F.material;if(Array.isArray(pe)){const ue=re.groups;for(let N=0,H=ue.length;N<H;N++){const ne=ue[N],be=pe[ne.materialIndex];if(be&&be.visible){const Me=I(F,be,R,C);F.onBeforeShadow(o,F,P,K,re,Me,ne),o.renderBufferDirect(K,null,re,Me,F,ne),F.onAfterShadow(o,F,P,K,re,Me,ne)}}}else if(pe.visible){const ue=I(F,pe,R,C);F.onBeforeShadow(o,F,P,K,re,ue,null),o.renderBufferDirect(K,null,re,ue,F,null),F.onAfterShadow(o,F,P,K,re,ue,null)}}const se=F.children;for(let re=0,pe=se.length;re<pe;re++)L(se[re],P,K,R,C)}function z(F){F.target.removeEventListener("dispose",z);for(const K in p){const R=p[K],C=F.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const GA={[Qh]:Jh,[$h]:nd,[ed]:id,[Ps]:td,[Jh]:Qh,[nd]:$h,[id]:ed,[td]:Ps};function VA(o,e){function i(){let X=!1;const Be=new an;let De=null;const Ve=new an(0,0,0,0);return{setMask:function(Te){De!==Te&&!X&&(o.colorMask(Te,Te,Te,Te),De=Te)},setLocked:function(Te){X=Te},setClear:function(Te,xe,Ue,rt,Pt){Pt===!0&&(Te*=rt,xe*=rt,Ue*=rt),Be.set(Te,xe,Ue,rt),Ve.equals(Be)===!1&&(o.clearColor(Te,xe,Ue,rt),Ve.copy(Be))},reset:function(){X=!1,De=null,Ve.set(-1,0,0,0)}}}function r(){let X=!1,Be=!1,De=null,Ve=null,Te=null;return{setReversed:function(xe){if(Be!==xe){const Ue=e.get("EXT_clip_control");xe?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Be=xe;const rt=Te;Te=null,this.setClear(rt)}},getReversed:function(){return Be},setTest:function(xe){xe?fe(o.DEPTH_TEST):Oe(o.DEPTH_TEST)},setMask:function(xe){De!==xe&&!X&&(o.depthMask(xe),De=xe)},setFunc:function(xe){if(Be&&(xe=GA[xe]),Ve!==xe){switch(xe){case Qh:o.depthFunc(o.NEVER);break;case Jh:o.depthFunc(o.ALWAYS);break;case $h:o.depthFunc(o.LESS);break;case Ps:o.depthFunc(o.LEQUAL);break;case ed:o.depthFunc(o.EQUAL);break;case td:o.depthFunc(o.GEQUAL);break;case nd:o.depthFunc(o.GREATER);break;case id:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ve=xe}},setLocked:function(xe){X=xe},setClear:function(xe){Te!==xe&&(Be&&(xe=1-xe),o.clearDepth(xe),Te=xe)},reset:function(){X=!1,De=null,Ve=null,Te=null,Be=!1}}}function l(){let X=!1,Be=null,De=null,Ve=null,Te=null,xe=null,Ue=null,rt=null,Pt=null;return{setTest:function(At){X||(At?fe(o.STENCIL_TEST):Oe(o.STENCIL_TEST))},setMask:function(At){Be!==At&&!X&&(o.stencilMask(At),Be=At)},setFunc:function(At,Un,xi){(De!==At||Ve!==Un||Te!==xi)&&(o.stencilFunc(At,Un,xi),De=At,Ve=Un,Te=xi)},setOp:function(At,Un,xi){(xe!==At||Ue!==Un||rt!==xi)&&(o.stencilOp(At,Un,xi),xe=At,Ue=Un,rt=xi)},setLocked:function(At){X=At},setClear:function(At){Pt!==At&&(o.clearStencil(At),Pt=At)},reset:function(){X=!1,Be=null,De=null,Ve=null,Te=null,xe=null,Ue=null,rt=null,Pt=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},y=new WeakMap,S=[],E=null,w=!1,M=null,x=null,O=null,I=null,L=null,z=null,F=null,P=new bt(0,0,0),K=0,R=!1,C=null,G=null,se=null,re=null,pe=null;const ue=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,H=0;const ne=o.getParameter(o.VERSION);ne.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ne)[1]),N=H>=1):ne.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),N=H>=2);let be=null,Me={};const U=o.getParameter(o.SCISSOR_BOX),te=o.getParameter(o.VIEWPORT),_e=new an().fromArray(U),Ae=new an().fromArray(te);function Re(X,Be,De,Ve){const Te=new Uint8Array(4),xe=o.createTexture();o.bindTexture(X,xe),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ue=0;Ue<De;Ue++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Be,0,o.RGBA,1,1,Ve,0,o.RGBA,o.UNSIGNED_BYTE,Te):o.texImage2D(Be+Ue,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Te);return xe}const Q={};Q[o.TEXTURE_2D]=Re(o.TEXTURE_2D,o.TEXTURE_2D,1),Q[o.TEXTURE_CUBE_MAP]=Re(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[o.TEXTURE_2D_ARRAY]=Re(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Q[o.TEXTURE_3D]=Re(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),fe(o.DEPTH_TEST),h.setFunc(Ps),it(!1),Wt($0),fe(o.CULL_FACE),nt(_a);function fe(X){_[X]!==!0&&(o.enable(X),_[X]=!0)}function Oe(X){_[X]!==!1&&(o.disable(X),_[X]=!1)}function Xe(X,Be){return g[X]!==Be?(o.bindFramebuffer(X,Be),g[X]=Be,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Be),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Be),!0):!1}function ze(X,Be){let De=S,Ve=!1;if(X){De=y.get(Be),De===void 0&&(De=[],y.set(Be,De));const Te=X.textures;if(De.length!==Te.length||De[0]!==o.COLOR_ATTACHMENT0){for(let xe=0,Ue=Te.length;xe<Ue;xe++)De[xe]=o.COLOR_ATTACHMENT0+xe;De.length=Te.length,Ve=!0}}else De[0]!==o.BACK&&(De[0]=o.BACK,Ve=!0);Ve&&o.drawBuffers(De)}function pt(X){return E!==X?(o.useProgram(X),E=X,!0):!1}const Zt={[wr]:o.FUNC_ADD,[bS]:o.FUNC_SUBTRACT,[ES]:o.FUNC_REVERSE_SUBTRACT};Zt[TS]=o.MIN,Zt[AS]=o.MAX;const st={[RS]:o.ZERO,[wS]:o.ONE,[CS]:o.SRC_COLOR,[Zh]:o.SRC_ALPHA,[IS]:o.SRC_ALPHA_SATURATE,[LS]:o.DST_COLOR,[US]:o.DST_ALPHA,[DS]:o.ONE_MINUS_SRC_COLOR,[Kh]:o.ONE_MINUS_SRC_ALPHA,[OS]:o.ONE_MINUS_DST_COLOR,[NS]:o.ONE_MINUS_DST_ALPHA,[PS]:o.CONSTANT_COLOR,[zS]:o.ONE_MINUS_CONSTANT_COLOR,[BS]:o.CONSTANT_ALPHA,[FS]:o.ONE_MINUS_CONSTANT_ALPHA};function nt(X,Be,De,Ve,Te,xe,Ue,rt,Pt,At){if(X===_a){w===!0&&(Oe(o.BLEND),w=!1);return}if(w===!1&&(fe(o.BLEND),w=!0),X!==MS){if(X!==M||At!==R){if((x!==wr||L!==wr)&&(o.blendEquation(o.FUNC_ADD),x=wr,L=wr),At)switch(X){case Os:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case e_:o.blendFunc(o.ONE,o.ONE);break;case t_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case n_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Tt("WebGLState: Invalid blending: ",X);break}else switch(X){case Os:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case e_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case t_:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case n_:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",X);break}O=null,I=null,z=null,F=null,P.set(0,0,0),K=0,M=X,R=At}return}Te=Te||Be,xe=xe||De,Ue=Ue||Ve,(Be!==x||Te!==L)&&(o.blendEquationSeparate(Zt[Be],Zt[Te]),x=Be,L=Te),(De!==O||Ve!==I||xe!==z||Ue!==F)&&(o.blendFuncSeparate(st[De],st[Ve],st[xe],st[Ue]),O=De,I=Ve,z=xe,F=Ue),(rt.equals(P)===!1||Pt!==K)&&(o.blendColor(rt.r,rt.g,rt.b,Pt),P.copy(rt),K=Pt),M=X,R=!1}function Et(X,Be){X.side===ma?Oe(o.CULL_FACE):fe(o.CULL_FACE);let De=X.side===Yn;Be&&(De=!De),it(De),X.blending===Os&&X.transparent===!1?nt(_a):nt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ve=X.stencilWrite;d.setTest(Ve),Ve&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),qt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?fe(o.SAMPLE_ALPHA_TO_COVERAGE):Oe(o.SAMPLE_ALPHA_TO_COVERAGE)}function it(X){C!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),C=X)}function Wt(X){X!==xS?(fe(o.CULL_FACE),X!==G&&(X===$0?o.cullFace(o.BACK):X===yS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Oe(o.CULL_FACE),G=X}function V(X){X!==se&&(N&&o.lineWidth(X),se=X)}function qt(X,Be,De){X?(fe(o.POLYGON_OFFSET_FILL),(re!==Be||pe!==De)&&(o.polygonOffset(Be,De),re=Be,pe=De)):Oe(o.POLYGON_OFFSET_FILL)}function vt(X){X?fe(o.SCISSOR_TEST):Oe(o.SCISSOR_TEST)}function wt(X){X===void 0&&(X=o.TEXTURE0+ue-1),be!==X&&(o.activeTexture(X),be=X)}function Ye(X,Be,De){De===void 0&&(be===null?De=o.TEXTURE0+ue-1:De=be);let Ve=Me[De];Ve===void 0&&(Ve={type:void 0,texture:void 0},Me[De]=Ve),(Ve.type!==X||Ve.texture!==Be)&&(be!==De&&(o.activeTexture(De),be=De),o.bindTexture(X,Be||Q[X]),Ve.type=X,Ve.texture=Be)}function D(){const X=Me[be];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function de(){try{o.texSubImage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function ce(){try{o.texSubImage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function Z(){try{o.compressedTexSubImage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function Ie(){try{o.compressedTexSubImage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function we(){try{o.texStorage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function ye(){try{o.texStorage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function Ge(){try{o.texImage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function me(){try{o.texImage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function Ee(X){_e.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),_e.copy(X))}function Ne(X){Ae.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Ae.copy(X))}function Le(X,Be){let De=p.get(Be);De===void 0&&(De=new WeakMap,p.set(Be,De));let Ve=De.get(X);Ve===void 0&&(Ve=o.getUniformBlockIndex(Be,X.name),De.set(X,Ve))}function Ce(X,Be){const Ve=p.get(Be).get(X);m.get(Be)!==Ve&&(o.uniformBlockBinding(Be,Ve,X.__bindingPointIndex),m.set(Be,Ve))}function at(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},be=null,Me={},g={},y=new WeakMap,S=[],E=null,w=!1,M=null,x=null,O=null,I=null,L=null,z=null,F=null,P=new bt(0,0,0),K=0,R=!1,C=null,G=null,se=null,re=null,pe=null,_e.set(0,0,o.canvas.width,o.canvas.height),Ae.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:fe,disable:Oe,bindFramebuffer:Xe,drawBuffers:ze,useProgram:pt,setBlending:nt,setMaterial:Et,setFlipSided:it,setCullFace:Wt,setLineWidth:V,setPolygonOffset:qt,setScissorTest:vt,activeTexture:wt,bindTexture:Ye,unbindTexture:D,compressedTexImage2D:b,compressedTexImage3D:W,texImage2D:Ge,texImage3D:me,updateUBOMapping:Le,uniformBlockBinding:Ce,texStorage2D:we,texStorage3D:ye,texSubImage2D:de,texSubImage3D:ce,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ie,scissor:Ee,viewport:Ne,reset:at}}function kA(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new mt,_=new WeakMap;let g;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,b){return S?new OffscreenCanvas(D,b):al("canvas")}function w(D,b,W){let de=1;const ce=Ye(D);if((ce.width>W||ce.height>W)&&(de=W/Math.max(ce.width,ce.height)),de<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Z=Math.floor(de*ce.width),Ie=Math.floor(de*ce.height);g===void 0&&(g=E(Z,Ie));const we=b?E(Z,Ie):g;return we.width=Z,we.height=Ie,we.getContext("2d").drawImage(D,0,0,Z,Ie),lt("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Z+"x"+Ie+")."),we}else return"data"in D&&lt("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),D;return D}function M(D){return D.generateMipmaps}function x(D){o.generateMipmap(D)}function O(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function I(D,b,W,de,ce=!1){if(D!==null){if(o[D]!==void 0)return o[D];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Z=b;if(b===o.RED&&(W===o.FLOAT&&(Z=o.R32F),W===o.HALF_FLOAT&&(Z=o.R16F),W===o.UNSIGNED_BYTE&&(Z=o.R8)),b===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(Z=o.R8UI),W===o.UNSIGNED_SHORT&&(Z=o.R16UI),W===o.UNSIGNED_INT&&(Z=o.R32UI),W===o.BYTE&&(Z=o.R8I),W===o.SHORT&&(Z=o.R16I),W===o.INT&&(Z=o.R32I)),b===o.RG&&(W===o.FLOAT&&(Z=o.RG32F),W===o.HALF_FLOAT&&(Z=o.RG16F),W===o.UNSIGNED_BYTE&&(Z=o.RG8)),b===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(Z=o.RG8UI),W===o.UNSIGNED_SHORT&&(Z=o.RG16UI),W===o.UNSIGNED_INT&&(Z=o.RG32UI),W===o.BYTE&&(Z=o.RG8I),W===o.SHORT&&(Z=o.RG16I),W===o.INT&&(Z=o.RG32I)),b===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(Z=o.RGB8UI),W===o.UNSIGNED_SHORT&&(Z=o.RGB16UI),W===o.UNSIGNED_INT&&(Z=o.RGB32UI),W===o.BYTE&&(Z=o.RGB8I),W===o.SHORT&&(Z=o.RGB16I),W===o.INT&&(Z=o.RGB32I)),b===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(Z=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(Z=o.RGBA16UI),W===o.UNSIGNED_INT&&(Z=o.RGBA32UI),W===o.BYTE&&(Z=o.RGBA8I),W===o.SHORT&&(Z=o.RGBA16I),W===o.INT&&(Z=o.RGBA32I)),b===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(Z=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(Z=o.R11F_G11F_B10F)),b===o.RGBA){const Ie=ce?Kc:Rt.getTransfer(de);W===o.FLOAT&&(Z=o.RGBA32F),W===o.HALF_FLOAT&&(Z=o.RGBA16F),W===o.UNSIGNED_BYTE&&(Z=Ie===Ht?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(Z=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(Z=o.RGB5_A1)}return(Z===o.R16F||Z===o.R32F||Z===o.RG16F||Z===o.RG32F||Z===o.RGBA16F||Z===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function L(D,b){let W;return D?b===null||b===ki||b===il?W=o.DEPTH24_STENCIL8:b===Fi?W=o.DEPTH32F_STENCIL8:b===nl&&(W=o.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ki||b===il?W=o.DEPTH_COMPONENT24:b===Fi?W=o.DEPTH_COMPONENT32F:b===nl&&(W=o.DEPTH_COMPONENT16),W}function z(D,b){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==dn&&D.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function F(D){const b=D.target;b.removeEventListener("dispose",F),K(b),b.isVideoTexture&&_.delete(b)}function P(D){const b=D.target;b.removeEventListener("dispose",P),C(b)}function K(D){const b=r.get(D);if(b.__webglInit===void 0)return;const W=D.source,de=y.get(W);if(de){const ce=de[b.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&R(D),Object.keys(de).length===0&&y.delete(W)}r.remove(D)}function R(D){const b=r.get(D);o.deleteTexture(b.__webglTexture);const W=D.source,de=y.get(W);delete de[b.__cacheKey],h.memory.textures--}function C(D){const b=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(b.__webglFramebuffer[de]))for(let ce=0;ce<b.__webglFramebuffer[de].length;ce++)o.deleteFramebuffer(b.__webglFramebuffer[de][ce]);else o.deleteFramebuffer(b.__webglFramebuffer[de]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[de])}else{if(Array.isArray(b.__webglFramebuffer))for(let de=0;de<b.__webglFramebuffer.length;de++)o.deleteFramebuffer(b.__webglFramebuffer[de]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let de=0;de<b.__webglColorRenderbuffer.length;de++)b.__webglColorRenderbuffer[de]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[de]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=D.textures;for(let de=0,ce=W.length;de<ce;de++){const Z=r.get(W[de]);Z.__webglTexture&&(o.deleteTexture(Z.__webglTexture),h.memory.textures--),r.remove(W[de])}r.remove(D)}let G=0;function se(){G=0}function re(){const D=G;return D>=l.maxTextures&&lt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),G+=1,D}function pe(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function ue(D,b){const W=r.get(D);if(D.isVideoTexture&&vt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){const de=D.image;if(de===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(W,D,b);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+b)}function N(D,b){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){Q(W,D,b);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+b)}function H(D,b){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){Q(W,D,b);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+b)}function ne(D,b){const W=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){fe(W,D,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+b)}const be={[tl]:o.REPEAT,[ga]:o.CLAMP_TO_EDGE,[sd]:o.MIRRORED_REPEAT},Me={[dn]:o.NEAREST,[VS]:o.NEAREST_MIPMAP_NEAREST,[Sc]:o.NEAREST_MIPMAP_LINEAR,[In]:o.LINEAR,[mh]:o.LINEAR_MIPMAP_NEAREST,[Dr]:o.LINEAR_MIPMAP_LINEAR},U={[WS]:o.NEVER,[KS]:o.ALWAYS,[qS]:o.LESS,[Jd]:o.LEQUAL,[YS]:o.EQUAL,[$d]:o.GEQUAL,[jS]:o.GREATER,[ZS]:o.NOTEQUAL};function te(D,b){if(b.type===Fi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===mh||b.magFilter===Sc||b.magFilter===Dr||b.minFilter===In||b.minFilter===mh||b.minFilter===Sc||b.minFilter===Dr)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,be[b.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,be[b.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,be[b.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,Me[b.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,Me[b.minFilter]),b.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,U[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===dn||b.minFilter!==Sc&&b.minFilter!==Dr||b.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function _e(D,b){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",F));const de=b.source;let ce=y.get(de);ce===void 0&&(ce={},y.set(de,ce));const Z=pe(b);if(Z!==D.__cacheKey){ce[Z]===void 0&&(ce[Z]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,W=!0),ce[Z].usedTimes++;const Ie=ce[D.__cacheKey];Ie!==void 0&&(ce[D.__cacheKey].usedTimes--,Ie.usedTimes===0&&R(b)),D.__cacheKey=Z,D.__webglTexture=ce[Z].texture}return W}function Ae(D,b,W){return Math.floor(Math.floor(D/W)/b)}function Re(D,b,W,de){const Z=D.updateRanges;if(Z.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,W,de,b.data);else{Z.sort((me,Ee)=>me.start-Ee.start);let Ie=0;for(let me=1;me<Z.length;me++){const Ee=Z[Ie],Ne=Z[me],Le=Ee.start+Ee.count,Ce=Ae(Ne.start,b.width,4),at=Ae(Ee.start,b.width,4);Ne.start<=Le+1&&Ce===at&&Ae(Ne.start+Ne.count-1,b.width,4)===Ce?Ee.count=Math.max(Ee.count,Ne.start+Ne.count-Ee.start):(++Ie,Z[Ie]=Ne)}Z.length=Ie+1;const we=o.getParameter(o.UNPACK_ROW_LENGTH),ye=o.getParameter(o.UNPACK_SKIP_PIXELS),Ge=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let me=0,Ee=Z.length;me<Ee;me++){const Ne=Z[me],Le=Math.floor(Ne.start/4),Ce=Math.ceil(Ne.count/4),at=Le%b.width,X=Math.floor(Le/b.width),Be=Ce,De=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,at),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,at,X,Be,De,W,de,b.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,we),o.pixelStorei(o.UNPACK_SKIP_PIXELS,ye),o.pixelStorei(o.UNPACK_SKIP_ROWS,Ge)}}function Q(D,b,W){let de=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(de=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(de=o.TEXTURE_3D);const ce=_e(D,b),Z=b.source;i.bindTexture(de,D.__webglTexture,o.TEXTURE0+W);const Ie=r.get(Z);if(Z.version!==Ie.__version||ce===!0){i.activeTexture(o.TEXTURE0+W);const we=Rt.getPrimaries(Rt.workingColorSpace),ye=b.colorSpace===er?null:Rt.getPrimaries(b.colorSpace),Ge=b.colorSpace===er||we===ye?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let me=w(b.image,!1,l.maxTextureSize);me=wt(b,me);const Ee=c.convert(b.format,b.colorSpace),Ne=c.convert(b.type);let Le=I(b.internalFormat,Ee,Ne,b.colorSpace,b.isVideoTexture);te(de,b);let Ce;const at=b.mipmaps,X=b.isVideoTexture!==!0,Be=Ie.__version===void 0||ce===!0,De=Z.dataReady,Ve=z(b,me);if(b.isDepthTexture)Le=L(b.format===Ur,b.type),Be&&(X?i.texStorage2D(o.TEXTURE_2D,1,Le,me.width,me.height):i.texImage2D(o.TEXTURE_2D,0,Le,me.width,me.height,0,Ee,Ne,null));else if(b.isDataTexture)if(at.length>0){X&&Be&&i.texStorage2D(o.TEXTURE_2D,Ve,Le,at[0].width,at[0].height);for(let Te=0,xe=at.length;Te<xe;Te++)Ce=at[Te],X?De&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,Ce.width,Ce.height,Ee,Ne,Ce.data):i.texImage2D(o.TEXTURE_2D,Te,Le,Ce.width,Ce.height,0,Ee,Ne,Ce.data);b.generateMipmaps=!1}else X?(Be&&i.texStorage2D(o.TEXTURE_2D,Ve,Le,me.width,me.height),De&&Re(b,me,Ee,Ne)):i.texImage2D(o.TEXTURE_2D,0,Le,me.width,me.height,0,Ee,Ne,me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&Be&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ve,Le,at[0].width,at[0].height,me.depth);for(let Te=0,xe=at.length;Te<xe;Te++)if(Ce=at[Te],b.format!==Ci)if(Ee!==null)if(X){if(De)if(b.layerUpdates.size>0){const Ue=D_(Ce.width,Ce.height,b.format,b.type);for(const rt of b.layerUpdates){const Pt=Ce.data.subarray(rt*Ue/Ce.data.BYTES_PER_ELEMENT,(rt+1)*Ue/Ce.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,rt,Ce.width,Ce.height,1,Ee,Pt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,0,Ce.width,Ce.height,me.depth,Ee,Ce.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Te,Le,Ce.width,Ce.height,me.depth,0,Ce.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?De&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,0,Ce.width,Ce.height,me.depth,Ee,Ne,Ce.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Te,Le,Ce.width,Ce.height,me.depth,0,Ee,Ne,Ce.data)}else{X&&Be&&i.texStorage2D(o.TEXTURE_2D,Ve,Le,at[0].width,at[0].height);for(let Te=0,xe=at.length;Te<xe;Te++)Ce=at[Te],b.format!==Ci?Ee!==null?X?De&&i.compressedTexSubImage2D(o.TEXTURE_2D,Te,0,0,Ce.width,Ce.height,Ee,Ce.data):i.compressedTexImage2D(o.TEXTURE_2D,Te,Le,Ce.width,Ce.height,0,Ce.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?De&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,Ce.width,Ce.height,Ee,Ne,Ce.data):i.texImage2D(o.TEXTURE_2D,Te,Le,Ce.width,Ce.height,0,Ee,Ne,Ce.data)}else if(b.isDataArrayTexture)if(X){if(Be&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ve,Le,me.width,me.height,me.depth),De)if(b.layerUpdates.size>0){const Te=D_(me.width,me.height,b.format,b.type);for(const xe of b.layerUpdates){const Ue=me.data.subarray(xe*Te/me.data.BYTES_PER_ELEMENT,(xe+1)*Te/me.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xe,me.width,me.height,1,Ee,Ne,Ue)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ee,Ne,me.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Le,me.width,me.height,me.depth,0,Ee,Ne,me.data);else if(b.isData3DTexture)X?(Be&&i.texStorage3D(o.TEXTURE_3D,Ve,Le,me.width,me.height,me.depth),De&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ee,Ne,me.data)):i.texImage3D(o.TEXTURE_3D,0,Le,me.width,me.height,me.depth,0,Ee,Ne,me.data);else if(b.isFramebufferTexture){if(Be)if(X)i.texStorage2D(o.TEXTURE_2D,Ve,Le,me.width,me.height);else{let Te=me.width,xe=me.height;for(let Ue=0;Ue<Ve;Ue++)i.texImage2D(o.TEXTURE_2D,Ue,Le,Te,xe,0,Ee,Ne,null),Te>>=1,xe>>=1}}else if(at.length>0){if(X&&Be){const Te=Ye(at[0]);i.texStorage2D(o.TEXTURE_2D,Ve,Le,Te.width,Te.height)}for(let Te=0,xe=at.length;Te<xe;Te++)Ce=at[Te],X?De&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,Ee,Ne,Ce):i.texImage2D(o.TEXTURE_2D,Te,Le,Ee,Ne,Ce);b.generateMipmaps=!1}else if(X){if(Be){const Te=Ye(me);i.texStorage2D(o.TEXTURE_2D,Ve,Le,Te.width,Te.height)}De&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee,Ne,me)}else i.texImage2D(o.TEXTURE_2D,0,Le,Ee,Ne,me);M(b)&&x(de),Ie.__version=Z.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function fe(D,b,W){if(b.image.length!==6)return;const de=_e(D,b),ce=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+W);const Z=r.get(ce);if(ce.version!==Z.__version||de===!0){i.activeTexture(o.TEXTURE0+W);const Ie=Rt.getPrimaries(Rt.workingColorSpace),we=b.colorSpace===er?null:Rt.getPrimaries(b.colorSpace),ye=b.colorSpace===er||Ie===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ge=b.isCompressedTexture||b.image[0].isCompressedTexture,me=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let xe=0;xe<6;xe++)!Ge&&!me?Ee[xe]=w(b.image[xe],!0,l.maxCubemapSize):Ee[xe]=me?b.image[xe].image:b.image[xe],Ee[xe]=wt(b,Ee[xe]);const Ne=Ee[0],Le=c.convert(b.format,b.colorSpace),Ce=c.convert(b.type),at=I(b.internalFormat,Le,Ce,b.colorSpace),X=b.isVideoTexture!==!0,Be=Z.__version===void 0||de===!0,De=ce.dataReady;let Ve=z(b,Ne);te(o.TEXTURE_CUBE_MAP,b);let Te;if(Ge){X&&Be&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ve,at,Ne.width,Ne.height);for(let xe=0;xe<6;xe++){Te=Ee[xe].mipmaps;for(let Ue=0;Ue<Te.length;Ue++){const rt=Te[Ue];b.format!==Ci?Le!==null?X?De&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue,0,0,rt.width,rt.height,Le,rt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue,at,rt.width,rt.height,0,rt.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?De&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue,0,0,rt.width,rt.height,Le,Ce,rt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue,at,rt.width,rt.height,0,Le,Ce,rt.data)}}}else{if(Te=b.mipmaps,X&&Be){Te.length>0&&Ve++;const xe=Ye(Ee[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ve,at,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(me){X?De&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ee[xe].width,Ee[xe].height,Le,Ce,Ee[xe].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,at,Ee[xe].width,Ee[xe].height,0,Le,Ce,Ee[xe].data);for(let Ue=0;Ue<Te.length;Ue++){const Pt=Te[Ue].image[xe].image;X?De&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue+1,0,0,Pt.width,Pt.height,Le,Ce,Pt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue+1,at,Pt.width,Pt.height,0,Le,Ce,Pt.data)}}else{X?De&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Le,Ce,Ee[xe]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,at,Le,Ce,Ee[xe]);for(let Ue=0;Ue<Te.length;Ue++){const rt=Te[Ue];X?De&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue+1,0,0,Le,Ce,rt.image[xe]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue+1,at,Le,Ce,rt.image[xe])}}}M(b)&&x(o.TEXTURE_CUBE_MAP),Z.__version=ce.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Oe(D,b,W,de,ce,Z){const Ie=c.convert(W.format,W.colorSpace),we=c.convert(W.type),ye=I(W.internalFormat,Ie,we,W.colorSpace),Ge=r.get(b),me=r.get(W);if(me.__renderTarget=b,!Ge.__hasExternalTextures){const Ee=Math.max(1,b.width>>Z),Ne=Math.max(1,b.height>>Z);ce===o.TEXTURE_3D||ce===o.TEXTURE_2D_ARRAY?i.texImage3D(ce,Z,ye,Ee,Ne,b.depth,0,Ie,we,null):i.texImage2D(ce,Z,ye,Ee,Ne,0,Ie,we,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),qt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,de,ce,me.__webglTexture,0,V(b)):(ce===o.TEXTURE_2D||ce>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,de,ce,me.__webglTexture,Z),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Xe(D,b,W){if(o.bindRenderbuffer(o.RENDERBUFFER,D),b.depthBuffer){const de=b.depthTexture,ce=de&&de.isDepthTexture?de.type:null,Z=L(b.stencilBuffer,ce),Ie=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;qt(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(b),Z,b.width,b.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(b),Z,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Z,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ie,o.RENDERBUFFER,D)}else{const de=b.textures;for(let ce=0;ce<de.length;ce++){const Z=de[ce],Ie=c.convert(Z.format,Z.colorSpace),we=c.convert(Z.type),ye=I(Z.internalFormat,Ie,we,Z.colorSpace);qt(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(b),ye,b.width,b.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(b),ye,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ye,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ze(D,b,W){const de=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=r.get(b.depthTexture);if(ce.__renderTarget=b,(!ce.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),de){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),ce.__webglTexture===void 0){ce.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,ce.__webglTexture),te(o.TEXTURE_CUBE_MAP,b.depthTexture);const Ge=c.convert(b.depthTexture.format),me=c.convert(b.depthTexture.type);let Ee;b.depthTexture.format===Sa?Ee=o.DEPTH_COMPONENT24:b.depthTexture.format===Ur&&(Ee=o.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ee,b.width,b.height,0,Ge,me,null)}}else ue(b.depthTexture,0);const Z=ce.__webglTexture,Ie=V(b),we=de?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,ye=b.depthTexture.format===Ur?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(b.depthTexture.format===Sa)qt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ye,we,Z,0,Ie):o.framebufferTexture2D(o.FRAMEBUFFER,ye,we,Z,0);else if(b.depthTexture.format===Ur)qt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ye,we,Z,0,Ie):o.framebufferTexture2D(o.FRAMEBUFFER,ye,we,Z,0);else throw new Error("Unknown depthTexture format")}function pt(D){const b=r.get(D),W=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const de=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),de){const ce=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,de.removeEventListener("dispose",ce)};de.addEventListener("dispose",ce),b.__depthDisposeCallback=ce}b.__boundDepthTexture=de}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let de=0;de<6;de++)ze(b.__webglFramebuffer[de],D,de);else{const de=D.texture.mipmaps;de&&de.length>0?ze(b.__webglFramebuffer[0],D,0):ze(b.__webglFramebuffer,D,0)}else if(W){b.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[de]),b.__webglDepthbuffer[de]===void 0)b.__webglDepthbuffer[de]=o.createRenderbuffer(),Xe(b.__webglDepthbuffer[de],D,!1);else{const ce=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[de];o.bindRenderbuffer(o.RENDERBUFFER,Z),o.framebufferRenderbuffer(o.FRAMEBUFFER,ce,o.RENDERBUFFER,Z)}}else{const de=D.texture.mipmaps;if(de&&de.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Xe(b.__webglDepthbuffer,D,!1);else{const ce=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Z),o.framebufferRenderbuffer(o.FRAMEBUFFER,ce,o.RENDERBUFFER,Z)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(D,b,W){const de=r.get(D);b!==void 0&&Oe(de.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&pt(D)}function st(D){const b=D.texture,W=r.get(D),de=r.get(b);D.addEventListener("dispose",P);const ce=D.textures,Z=D.isWebGLCubeRenderTarget===!0,Ie=ce.length>1;if(Ie||(de.__webglTexture===void 0&&(de.__webglTexture=o.createTexture()),de.__version=b.version,h.memory.textures++),Z){W.__webglFramebuffer=[];for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[we]=[];for(let ye=0;ye<b.mipmaps.length;ye++)W.__webglFramebuffer[we][ye]=o.createFramebuffer()}else W.__webglFramebuffer[we]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let we=0;we<b.mipmaps.length;we++)W.__webglFramebuffer[we]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(Ie)for(let we=0,ye=ce.length;we<ye;we++){const Ge=r.get(ce[we]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&qt(D)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let we=0;we<ce.length;we++){const ye=ce[we];W.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[we]);const Ge=c.convert(ye.format,ye.colorSpace),me=c.convert(ye.type),Ee=I(ye.internalFormat,Ge,me,ye.colorSpace,D.isXRRenderTarget===!0),Ne=V(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ne,Ee,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,W.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Xe(W.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Z){i.bindTexture(o.TEXTURE_CUBE_MAP,de.__webglTexture),te(o.TEXTURE_CUBE_MAP,b);for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0)for(let ye=0;ye<b.mipmaps.length;ye++)Oe(W.__webglFramebuffer[we][ye],D,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,ye);else Oe(W.__webglFramebuffer[we],D,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);M(b)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ie){for(let we=0,ye=ce.length;we<ye;we++){const Ge=ce[we],me=r.get(Ge);let Ee=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ee,me.__webglTexture),te(Ee,Ge),Oe(W.__webglFramebuffer,D,Ge,o.COLOR_ATTACHMENT0+we,Ee,0),M(Ge)&&x(Ee)}i.unbindTexture()}else{let we=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(we=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(we,de.__webglTexture),te(we,b),b.mipmaps&&b.mipmaps.length>0)for(let ye=0;ye<b.mipmaps.length;ye++)Oe(W.__webglFramebuffer[ye],D,b,o.COLOR_ATTACHMENT0,we,ye);else Oe(W.__webglFramebuffer,D,b,o.COLOR_ATTACHMENT0,we,0);M(b)&&x(we),i.unbindTexture()}D.depthBuffer&&pt(D)}function nt(D){const b=D.textures;for(let W=0,de=b.length;W<de;W++){const ce=b[W];if(M(ce)){const Z=O(D),Ie=r.get(ce).__webglTexture;i.bindTexture(Z,Ie),x(Z),i.unbindTexture()}}}const Et=[],it=[];function Wt(D){if(D.samples>0){if(qt(D)===!1){const b=D.textures,W=D.width,de=D.height;let ce=o.COLOR_BUFFER_BIT;const Z=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ie=r.get(D),we=b.length>1;if(we)for(let Ge=0;Ge<b.length;Ge++)i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ge,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ge,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const ye=D.texture.mipmaps;ye&&ye.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ge=0;Ge<b.length;Ge++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ce|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ce|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ge]);const me=r.get(b[Ge]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,me,0)}o.blitFramebuffer(0,0,W,de,0,0,W,de,ce,o.NEAREST),m===!0&&(Et.length=0,it.length=0,Et.push(o.COLOR_ATTACHMENT0+Ge),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Et.push(Z),it.push(Z),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,it)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Et))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let Ge=0;Ge<b.length;Ge++){i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ge,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ge]);const me=r.get(b[Ge]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ge,o.TEXTURE_2D,me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const b=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function V(D){return Math.min(l.maxSamples,D.samples)}function qt(D){const b=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function vt(D){const b=h.render.frame;_.get(D)!==b&&(_.set(D,b),D.update())}function wt(D,b){const W=D.colorSpace,de=D.format,ce=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Fs&&W!==er&&(Rt.getTransfer(W)===Ht?(de!==Ci||ce!==ii)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",W)),b}function Ye(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=re,this.resetTextureUnits=se,this.setTexture2D=ue,this.setTexture2DArray=N,this.setTexture3D=H,this.setTextureCube=ne,this.rebindTextures=Zt,this.setupRenderTarget=st,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function XA(o,e){function i(r,l=er){let c;const h=Rt.getTransfer(l);if(r===ii)return o.UNSIGNED_BYTE;if(r===Yd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===jd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===mv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===gv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===dv)return o.BYTE;if(r===pv)return o.SHORT;if(r===nl)return o.UNSIGNED_SHORT;if(r===qd)return o.INT;if(r===ki)return o.UNSIGNED_INT;if(r===Fi)return o.FLOAT;if(r===ya)return o.HALF_FLOAT;if(r===_v)return o.ALPHA;if(r===vv)return o.RGB;if(r===Ci)return o.RGBA;if(r===Sa)return o.DEPTH_COMPONENT;if(r===Ur)return o.DEPTH_STENCIL;if(r===xv)return o.RED;if(r===Zd)return o.RED_INTEGER;if(r===Bs)return o.RG;if(r===Kd)return o.RG_INTEGER;if(r===Qd)return o.RGBA_INTEGER;if(r===Wc||r===qc||r===Yc||r===jc)if(h===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Wc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Wc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===od||r===ld||r===cd||r===ud)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===od)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ld)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===cd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ud)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===_d)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===fd||r===hd)return h===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===dd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===pd)return c.COMPRESSED_R11_EAC;if(r===md)return c.COMPRESSED_SIGNED_R11_EAC;if(r===gd)return c.COMPRESSED_RG11_EAC;if(r===_d)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===vd||r===xd||r===yd||r===Sd||r===Md||r===bd||r===Ed||r===Td||r===Ad||r===Rd||r===wd||r===Cd||r===Dd||r===Ud)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===vd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Md)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ed)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Td)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ad)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ud)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nd||r===Ld||r===Od)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Nd)return h===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ld)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Od)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Id||r===Pd||r===zd||r===Bd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Id)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Pd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===il?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const WA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qA=`
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

}`;class YA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Nv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Wi({vertexShader:WA,fragmentShader:qA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ai(new cl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jA extends Vs{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,y=null,S=null,E=null;const w=typeof XRWebGLBinding<"u",M=new YA,x={},O=i.getContextAttributes();let I=null,L=null;const z=[],F=[],P=new mt;let K=null;const R=new qn;R.viewport=new an;const C=new qn;C.viewport=new an;const G=[R,C],se=new ib;let re=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let fe=z[Q];return fe===void 0&&(fe=new Ph,z[Q]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Q){let fe=z[Q];return fe===void 0&&(fe=new Ph,z[Q]=fe),fe.getGripSpace()},this.getHand=function(Q){let fe=z[Q];return fe===void 0&&(fe=new Ph,z[Q]=fe),fe.getHandSpace()};function ue(Q){const fe=F.indexOf(Q.inputSource);if(fe===-1)return;const Oe=z[fe];Oe!==void 0&&(Oe.update(Q.inputSource,Q.frame,p||h),Oe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function N(){l.removeEventListener("select",ue),l.removeEventListener("selectstart",ue),l.removeEventListener("selectend",ue),l.removeEventListener("squeeze",ue),l.removeEventListener("squeezestart",ue),l.removeEventListener("squeezeend",ue),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",H);for(let Q=0;Q<z.length;Q++){const fe=F[Q];fe!==null&&(F[Q]=null,z[Q].disconnect(fe))}re=null,pe=null,M.reset();for(const Q in x)delete x[Q];e.setRenderTarget(I),S=null,y=null,g=null,l=null,L=null,Re.stop(),r.isPresenting=!1,e.setPixelRatio(K),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",ue),l.addEventListener("selectstart",ue),l.addEventListener("selectend",ue),l.addEventListener("squeeze",ue),l.addEventListener("squeezestart",ue),l.addEventListener("squeezeend",ue),l.addEventListener("end",N),l.addEventListener("inputsourceschange",H),O.xrCompatible!==!0&&await i.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(P),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Oe=null,Xe=null,ze=null;O.depth&&(ze=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Oe=O.stencil?Ur:Sa,Xe=O.stencil?il:ki);const pt={colorFormat:i.RGBA8,depthFormat:ze,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer(pt),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),L=new Vi(y.textureWidth,y.textureHeight,{format:Ci,type:ii,depthTexture:new sl(y.textureWidth,y.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Oe),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Oe={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Oe),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Vi(S.framebufferWidth,S.framebufferHeight,{format:Ci,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Re.setContext(l),Re.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(Q){for(let fe=0;fe<Q.removed.length;fe++){const Oe=Q.removed[fe],Xe=F.indexOf(Oe);Xe>=0&&(F[Xe]=null,z[Xe].disconnect(Oe))}for(let fe=0;fe<Q.added.length;fe++){const Oe=Q.added[fe];let Xe=F.indexOf(Oe);if(Xe===-1){for(let pt=0;pt<z.length;pt++)if(pt>=F.length){F.push(Oe),Xe=pt;break}else if(F[pt]===null){F[pt]=Oe,Xe=pt;break}if(Xe===-1)break}const ze=z[Xe];ze&&ze.connect(Oe)}}const ne=new ee,be=new ee;function Me(Q,fe,Oe){ne.setFromMatrixPosition(fe.matrixWorld),be.setFromMatrixPosition(Oe.matrixWorld);const Xe=ne.distanceTo(be),ze=fe.projectionMatrix.elements,pt=Oe.projectionMatrix.elements,Zt=ze[14]/(ze[10]-1),st=ze[14]/(ze[10]+1),nt=(ze[9]+1)/ze[5],Et=(ze[9]-1)/ze[5],it=(ze[8]-1)/ze[0],Wt=(pt[8]+1)/pt[0],V=Zt*it,qt=Zt*Wt,vt=Xe/(-it+Wt),wt=vt*-it;if(fe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(wt),Q.translateZ(vt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ze[10]===-1)Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ye=Zt+vt,D=st+vt,b=V-wt,W=qt+(Xe-wt),de=nt*st/D*Ye,ce=Et*st/D*Ye;Q.projectionMatrix.makePerspective(b,W,de,ce,Ye,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function U(Q,fe){fe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(fe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let fe=Q.near,Oe=Q.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(Oe=M.depthFar)),se.near=C.near=R.near=fe,se.far=C.far=R.far=Oe,(re!==se.near||pe!==se.far)&&(l.updateRenderState({depthNear:se.near,depthFar:se.far}),re=se.near,pe=se.far),se.layers.mask=Q.layers.mask|6,R.layers.mask=se.layers.mask&3,C.layers.mask=se.layers.mask&5;const Xe=Q.parent,ze=se.cameras;U(se,Xe);for(let pt=0;pt<ze.length;pt++)U(ze[pt],Xe);ze.length===2?Me(se,R,C):se.projectionMatrix.copy(R.projectionMatrix),te(Q,se,Xe)};function te(Q,fe,Oe){Oe===null?Q.matrix.copy(fe.matrixWorld):(Q.matrix.copy(Oe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(fe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Hs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function(Q){m=Q,y!==null&&(y.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(se)},this.getCameraTexture=function(Q){return x[Q]};let _e=null;function Ae(Q,fe){if(_=fe.getViewerPose(p||h),E=fe,_!==null){const Oe=_.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let Xe=!1;Oe.length!==se.cameras.length&&(se.cameras.length=0,Xe=!0);for(let st=0;st<Oe.length;st++){const nt=Oe[st];let Et=null;if(S!==null)Et=S.getViewport(nt);else{const Wt=g.getViewSubImage(y,nt);Et=Wt.viewport,st===0&&(e.setRenderTargetTextures(L,Wt.colorTexture,Wt.depthStencilTexture),e.setRenderTarget(L))}let it=G[st];it===void 0&&(it=new qn,it.layers.enable(st),it.viewport=new an,G[st]=it),it.matrix.fromArray(nt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(nt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Et.x,Et.y,Et.width,Et.height),st===0&&(se.matrix.copy(it.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),Xe===!0&&se.cameras.push(it)}const ze=l.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){g=r.getBinding();const st=g.getDepthInformation(Oe[0]);st&&st.isValid&&st.texture&&M.init(st,l.renderState)}if(ze&&ze.includes("camera-access")&&w){e.state.unbindTexture(),g=r.getBinding();for(let st=0;st<Oe.length;st++){const nt=Oe[st].camera;if(nt){let Et=x[nt];Et||(Et=new Nv,x[nt]=Et);const it=g.getCameraImage(nt);Et.sourceTexture=it}}}}for(let Oe=0;Oe<z.length;Oe++){const Xe=F[Oe],ze=z[Oe];Xe!==null&&ze!==void 0&&ze.update(Xe,fe,p||h)}_e&&_e(Q,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),E=null}const Re=new Iv;Re.setAnimationLoop(Ae),this.setAnimationLoop=function(Q){_e=Q},this.dispose=function(){}}}const Ar=new Xi,ZA=new en;function KA(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,Rv(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,O,I,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),g(M,x)):x.isMeshPhongMaterial?(c(M,x),_(M,x)):x.isMeshStandardMaterial?(c(M,x),y(M,x),x.isMeshPhysicalMaterial&&S(M,x,L)):x.isMeshMatcapMaterial?(c(M,x),E(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),w(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,O,I):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Yn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Yn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const O=e.get(x),I=O.envMap,L=O.envMapRotation;I&&(M.envMap.value=I,Ar.copy(L),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),M.envMapRotation.value.setFromMatrix4(ZA.makeRotationFromEuler(Ar)),M.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,O,I){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*O,M.scale.value=I*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function y(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,O){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Yn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function w(M,x){const O=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function QA(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,I){const L=I.program;r.uniformBlockBinding(O,L)}function p(O,I){let L=l[O.id];L===void 0&&(E(O),L=_(O),l[O.id]=L,O.addEventListener("dispose",M));const z=I.program;r.updateUBOMapping(O,z);const F=e.render.frame;c[O.id]!==F&&(y(O),c[O.id]=F)}function _(O){const I=g();O.__bindingPointIndex=I;const L=o.createBuffer(),z=O.__size,F=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,z,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,I,L),L}function g(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(O){const I=l[O.id],L=O.uniforms,z=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,I);for(let F=0,P=L.length;F<P;F++){const K=Array.isArray(L[F])?L[F]:[L[F]];for(let R=0,C=K.length;R<C;R++){const G=K[R];if(S(G,F,R,z)===!0){const se=G.__offset,re=Array.isArray(G.value)?G.value:[G.value];let pe=0;for(let ue=0;ue<re.length;ue++){const N=re[ue],H=w(N);typeof N=="number"||typeof N=="boolean"?(G.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,se+pe,G.__data)):N.isMatrix3?(G.__data[0]=N.elements[0],G.__data[1]=N.elements[1],G.__data[2]=N.elements[2],G.__data[3]=0,G.__data[4]=N.elements[3],G.__data[5]=N.elements[4],G.__data[6]=N.elements[5],G.__data[7]=0,G.__data[8]=N.elements[6],G.__data[9]=N.elements[7],G.__data[10]=N.elements[8],G.__data[11]=0):(N.toArray(G.__data,pe),pe+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,se,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(O,I,L,z){const F=O.value,P=I+"_"+L;if(z[P]===void 0)return typeof F=="number"||typeof F=="boolean"?z[P]=F:z[P]=F.clone(),!0;{const K=z[P];if(typeof F=="number"||typeof F=="boolean"){if(K!==F)return z[P]=F,!0}else if(K.equals(F)===!1)return K.copy(F),!0}return!1}function E(O){const I=O.uniforms;let L=0;const z=16;for(let P=0,K=I.length;P<K;P++){const R=Array.isArray(I[P])?I[P]:[I[P]];for(let C=0,G=R.length;C<G;C++){const se=R[C],re=Array.isArray(se.value)?se.value:[se.value];for(let pe=0,ue=re.length;pe<ue;pe++){const N=re[pe],H=w(N),ne=L%z,be=ne%H.boundary,Me=ne+be;L+=be,Me!==0&&z-Me<H.storage&&(L+=z-Me),se.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=L,L+=H.storage}}}const F=L%z;return F>0&&(L+=z-F),O.__size=L,O.__cache={},this}function w(O){const I={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(I.boundary=4,I.storage=4):O.isVector2?(I.boundary=8,I.storage=8):O.isVector3||O.isColor?(I.boundary=16,I.storage=12):O.isVector4?(I.boundary=16,I.storage=16):O.isMatrix3?(I.boundary=48,I.storage=48):O.isMatrix4?(I.boundary=64,I.storage=64):O.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",O),I}function M(O){const I=O.target;I.removeEventListener("dispose",M);const L=h.indexOf(I.__bindingPointIndex);h.splice(L,1),o.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function x(){for(const O in l)o.deleteBuffer(l[O]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}const JA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function $A(){return zi===null&&(zi=new GM(JA,16,16,Bs,ya),zi.name="DFG_LUT",zi.minFilter=In,zi.magFilter=In,zi.wrapS=ga,zi.wrapT=ga,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class eR{constructor(e={}){const{canvas:i=QS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1,outputBufferType:S=ii}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=h;const w=S,M=new Set([Qd,Kd,Zd]),x=new Set([ii,ki,nl,il,Yd,jd]),O=new Uint32Array(4),I=new Int32Array(4);let L=null,z=null;const F=[],P=[];let K=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let C=!1;this._outputColorSpace=gi;let G=0,se=0,re=null,pe=-1,ue=null;const N=new an,H=new an;let ne=null;const be=new bt(0);let Me=0,U=i.width,te=i.height,_e=1,Ae=null,Re=null;const Q=new an(0,0,U,te),fe=new an(0,0,U,te);let Oe=!1;const Xe=new rp;let ze=!1,pt=!1;const Zt=new en,st=new ee,nt=new an,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Wt(){return re===null?_e:1}let V=r;function qt(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Wd}`),i.addEventListener("webglcontextlost",rt,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",At,!1),V===null){const q="webgl2";if(V=qt(q,A),V===null)throw qt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Tt("WebGLRenderer: "+A.message),A}let vt,wt,Ye,D,b,W,de,ce,Z,Ie,we,ye,Ge,me,Ee,Ne,Le,Ce,at,X,Be,De,Ve,Te;function xe(){vt=new $T(V),vt.init(),De=new XA(V,vt),wt=new XT(V,vt,e,De),Ye=new VA(V,vt),wt.reversedDepthBuffer&&y&&Ye.buffers.depth.setReversed(!0),D=new n1(V),b=new RA,W=new kA(V,vt,Ye,b,wt,De,D),de=new qT(R),ce=new JT(R),Z=new sb(V),Ve=new VT(V,Z),Ie=new e1(V,Z,D,Ve),we=new a1(V,Ie,Z,D),at=new i1(V,wt,W),Ne=new WT(b),ye=new AA(R,de,ce,vt,wt,Ve,Ne),Ge=new KA(R,b),me=new CA,Ee=new IA(vt),Ce=new GT(R,de,ce,Ye,we,E,m),Le=new HA(R,we,wt),Te=new QA(V,D,wt,Ye),X=new kT(V,vt,D),Be=new t1(V,vt,D),D.programs=ye.programs,R.capabilities=wt,R.extensions=vt,R.properties=b,R.renderLists=me,R.shadowMap=Le,R.state=Ye,R.info=D}xe(),w!==ii&&(K=new s1(w,i.width,i.height,l,c));const Ue=new jA(R,V);this.xr=Ue,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(A){A!==void 0&&(_e=A,this.setSize(U,te,!1))},this.getSize=function(A){return A.set(U,te)},this.setSize=function(A,q,oe=!0){if(Ue.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,te=q,i.width=Math.floor(A*_e),i.height=Math.floor(q*_e),oe===!0&&(i.style.width=A+"px",i.style.height=q+"px"),K!==null&&K.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(U*_e,te*_e).floor()},this.setDrawingBufferSize=function(A,q,oe){U=A,te=q,_e=oe,i.width=Math.floor(A*oe),i.height=Math.floor(q*oe),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(w===ii){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}K.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,q,oe,ie){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,q,oe,ie),Ye.viewport(N.copy(Q).multiplyScalar(_e).round())},this.getScissor=function(A){return A.copy(fe)},this.setScissor=function(A,q,oe,ie){A.isVector4?fe.set(A.x,A.y,A.z,A.w):fe.set(A,q,oe,ie),Ye.scissor(H.copy(fe).multiplyScalar(_e).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(A){Ye.setScissorTest(Oe=A)},this.setOpaqueSort=function(A){Ae=A},this.setTransparentSort=function(A){Re=A},this.getClearColor=function(A){return A.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,oe=!0){let ie=0;if(A){let j=!1;if(re!==null){const Pe=re.texture.format;j=M.has(Pe)}if(j){const Pe=re.texture.type,ke=x.has(Pe),Fe=Ce.getClearColor(),We=Ce.getClearAlpha(),je=Fe.r,$e=Fe.g,Ze=Fe.b;ke?(O[0]=je,O[1]=$e,O[2]=Ze,O[3]=We,V.clearBufferuiv(V.COLOR,0,O)):(I[0]=je,I[1]=$e,I[2]=Ze,I[3]=We,V.clearBufferiv(V.COLOR,0,I))}else ie|=V.COLOR_BUFFER_BIT}q&&(ie|=V.DEPTH_BUFFER_BIT),oe&&(ie|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",rt,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",At,!1),Ce.dispose(),me.dispose(),Ee.dispose(),b.dispose(),de.dispose(),ce.dispose(),we.dispose(),Ve.dispose(),Te.dispose(),ye.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Or),Ue.removeEventListener("sessionend",js),Ni.stop()};function rt(A){A.preventDefault(),Jc("WebGLRenderer: Context Lost."),C=!0}function Pt(){Jc("WebGLRenderer: Context Restored."),C=!1;const A=D.autoReset,q=Le.enabled,oe=Le.autoUpdate,ie=Le.needsUpdate,j=Le.type;xe(),D.autoReset=A,Le.enabled=q,Le.autoUpdate=oe,Le.needsUpdate=ie,Le.type=j}function At(A){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Un(A){const q=A.target;q.removeEventListener("dispose",Un),xi(q)}function xi(A){ul(A),b.remove(A)}function ul(A){const q=b.get(A).programs;q!==void 0&&(q.forEach(function(oe){ye.releaseProgram(oe)}),A.isShaderMaterial&&ye.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,oe,ie,j,Pe){q===null&&(q=Et);const ke=j.isMesh&&j.matrixWorld.determinant()<0,Fe=ir(A,q,oe,ie,j);Ye.setMaterial(ie,ke);let We=oe.index,je=1;if(ie.wireframe===!0){if(We=Ie.getWireframeAttribute(oe),We===void 0)return;je=2}const $e=oe.drawRange,Ze=oe.attributes.position;let et=$e.start*je,Nt=($e.start+$e.count)*je;Pe!==null&&(et=Math.max(et,Pe.start*je),Nt=Math.min(Nt,(Pe.start+Pe.count)*je)),We!==null?(et=Math.max(et,0),Nt=Math.min(Nt,We.count)):Ze!=null&&(et=Math.max(et,0),Nt=Math.min(Nt,Ze.count));const Jt=Nt-et;if(Jt<0||Jt===1/0)return;Ve.setup(j,ie,Fe,oe,We);let jt,It=X;if(We!==null&&(jt=Z.get(We),It=Be,It.setIndex(jt)),j.isMesh)ie.wireframe===!0?(Ye.setLineWidth(ie.wireframeLinewidth*Wt()),It.setMode(V.LINES)):It.setMode(V.TRIANGLES);else if(j.isLine){let Qe=ie.linewidth;Qe===void 0&&(Qe=1),Ye.setLineWidth(Qe*Wt()),j.isLineSegments?It.setMode(V.LINES):j.isLineLoop?It.setMode(V.LINE_LOOP):It.setMode(V.LINE_STRIP)}else j.isPoints?It.setMode(V.POINTS):j.isSprite&&It.setMode(V.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)rl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),It.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))It.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Qe=j._multiDrawStarts,Lt=j._multiDrawCounts,ot=j._multiDrawCount,Sn=We?Z.get(We).bytesPerElement:1,qi=b.get(ie).currentProgram.getUniforms();for(let Mn=0;Mn<ot;Mn++)qi.setValue(V,"_gl_DrawID",Mn),It.render(Qe[Mn]/Sn,Lt[Mn])}else if(j.isInstancedMesh)It.renderInstances(et,Jt,j.count);else if(oe.isInstancedBufferGeometry){const Qe=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Lt=Math.min(oe.instanceCount,Qe);It.renderInstances(et,Jt,Lt)}else It.render(et,Jt)};function qs(A,q,oe){A.transparent===!0&&A.side===ma&&A.forceSinglePass===!1?(A.side=Yn,A.needsUpdate=!0,Pr(A,q,oe),A.side=nr,A.needsUpdate=!0,Pr(A,q,oe),A.side=ma):Pr(A,q,oe)}this.compile=function(A,q,oe=null){oe===null&&(oe=A),z=Ee.get(oe),z.init(q),P.push(z),oe.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(z.pushLight(j),j.castShadow&&z.pushShadow(j))}),A!==oe&&A.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(z.pushLight(j),j.castShadow&&z.pushShadow(j))}),z.setupLights();const ie=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Pe=j.material;if(Pe)if(Array.isArray(Pe))for(let ke=0;ke<Pe.length;ke++){const Fe=Pe[ke];qs(Fe,oe,j),ie.add(Fe)}else qs(Pe,oe,j),ie.add(Pe)}),z=P.pop(),ie},this.compileAsync=function(A,q,oe=null){const ie=this.compile(A,q,oe);return new Promise(j=>{function Pe(){if(ie.forEach(function(ke){b.get(ke).currentProgram.isReady()&&ie.delete(ke)}),ie.size===0){j(A);return}setTimeout(Pe,10)}vt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Lr=null;function Ys(A){Lr&&Lr(A)}function Or(){Ni.stop()}function js(){Ni.start()}const Ni=new Iv;Ni.setAnimationLoop(Ys),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(A){Lr=A,Ue.setAnimationLoop(A),A===null?Ni.stop():Ni.start()},Ue.addEventListener("sessionstart",Or),Ue.addEventListener("sessionend",js),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;const oe=Ue.enabled===!0&&Ue.isPresenting===!0,ie=K!==null&&(re===null||oe)&&K.begin(R,re);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(K===null||K.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(q),q=Ue.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,q,re),z=Ee.get(A,P.length),z.init(q),P.push(z),Zt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Xe.setFromProjectionMatrix(Zt,Hi,q.reversedDepth),pt=this.localClippingEnabled,ze=Ne.init(this.clippingPlanes,pt),L=me.get(A,F.length),L.init(),F.push(L),Ue.enabled===!0&&Ue.isPresenting===!0){const ke=R.xr.getDepthSensingMesh();ke!==null&&ri(ke,q,-1/0,R.sortObjects)}ri(A,q,0,R.sortObjects),L.finish(),R.sortObjects===!0&&L.sort(Ae,Re),it=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,it&&Ce.addToRenderList(L,A),this.info.render.frame++,ze===!0&&Ne.beginShadows();const j=z.state.shadowsArray;if(Le.render(j,A,q),ze===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&K.hasRenderPass())===!1){const ke=L.opaque,Fe=L.transmissive;if(z.setupLights(),q.isArrayCamera){const We=q.cameras;if(Fe.length>0)for(let je=0,$e=We.length;je<$e;je++){const Ze=We[je];yn(ke,Fe,A,Ze)}it&&Ce.render(A);for(let je=0,$e=We.length;je<$e;je++){const Ze=We[je];on(L,A,Ze,Ze.viewport)}}else Fe.length>0&&yn(ke,Fe,A,q),it&&Ce.render(A),on(L,A,q)}re!==null&&se===0&&(W.updateMultisampleRenderTarget(re),W.updateRenderTargetMipmap(re)),ie&&K.end(R),A.isScene===!0&&A.onAfterRender(R,A,q),Ve.resetDefaultState(),pe=-1,ue=null,P.pop(),P.length>0?(z=P[P.length-1],ze===!0&&Ne.setGlobalState(R.clippingPlanes,z.state.camera)):z=null,F.pop(),F.length>0?L=F[F.length-1]:L=null};function ri(A,q,oe,ie){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)z.pushLight(A),A.castShadow&&z.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Xe.intersectsSprite(A)){ie&&nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Zt);const ke=we.update(A),Fe=A.material;Fe.visible&&L.push(A,ke,Fe,oe,nt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Xe.intersectsObject(A))){const ke=we.update(A),Fe=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),nt.copy(A.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),nt.copy(ke.boundingSphere.center)),nt.applyMatrix4(A.matrixWorld).applyMatrix4(Zt)),Array.isArray(Fe)){const We=ke.groups;for(let je=0,$e=We.length;je<$e;je++){const Ze=We[je],et=Fe[Ze.materialIndex];et&&et.visible&&L.push(A,ke,et,oe,nt.z,Ze)}}else Fe.visible&&L.push(A,ke,Fe,oe,nt.z,null)}}const Pe=A.children;for(let ke=0,Fe=Pe.length;ke<Fe;ke++)ri(Pe[ke],q,oe,ie)}function on(A,q,oe,ie){const{opaque:j,transmissive:Pe,transparent:ke}=A;z.setupLightsView(oe),ze===!0&&Ne.setGlobalState(R.clippingPlanes,oe),ie&&Ye.viewport(N.copy(ie)),j.length>0&&yi(j,q,oe),Pe.length>0&&yi(Pe,q,oe),ke.length>0&&yi(ke,q,oe),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function yn(A,q,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[ie.id]===void 0){const et=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[ie.id]=new Vi(1,1,{generateMipmaps:!0,type:et?ya:ii,minFilter:Dr,samples:wt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Pe=z.state.transmissionRenderTarget[ie.id],ke=ie.viewport||N;Pe.setSize(ke.z*R.transmissionResolutionScale,ke.w*R.transmissionResolutionScale);const Fe=R.getRenderTarget(),We=R.getActiveCubeFace(),je=R.getActiveMipmapLevel();R.setRenderTarget(Pe),R.getClearColor(be),Me=R.getClearAlpha(),Me<1&&R.setClearColor(16777215,.5),R.clear(),it&&Ce.render(oe);const $e=R.toneMapping;R.toneMapping=Gi;const Ze=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),z.setupLightsView(ie),ze===!0&&Ne.setGlobalState(R.clippingPlanes,ie),yi(A,oe,ie),W.updateMultisampleRenderTarget(Pe),W.updateRenderTargetMipmap(Pe),vt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Nt=0,Jt=q.length;Nt<Jt;Nt++){const jt=q[Nt],{object:It,geometry:Qe,material:Lt,group:ot}=jt;if(Lt.side===ma&&It.layers.test(ie.layers)){const Sn=Lt.side;Lt.side=Yn,Lt.needsUpdate=!0,Ir(It,oe,ie,Qe,Lt,ot),Lt.side=Sn,Lt.needsUpdate=!0,et=!0}}et===!0&&(W.updateMultisampleRenderTarget(Pe),W.updateRenderTargetMipmap(Pe))}R.setRenderTarget(Fe,We,je),R.setClearColor(be,Me),Ze!==void 0&&(ie.viewport=Ze),R.toneMapping=$e}function yi(A,q,oe){const ie=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Pe=A.length;j<Pe;j++){const ke=A[j],{object:Fe,geometry:We,group:je}=ke;let $e=ke.material;$e.allowOverride===!0&&ie!==null&&($e=ie),Fe.layers.test(oe.layers)&&Ir(Fe,q,oe,We,$e,je)}}function Ir(A,q,oe,ie,j,Pe){A.onBeforeRender(R,q,oe,ie,j,Pe),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(R,q,oe,ie,A,Pe),j.transparent===!0&&j.side===ma&&j.forceSinglePass===!1?(j.side=Yn,j.needsUpdate=!0,R.renderBufferDirect(oe,q,ie,j,A,Pe),j.side=nr,j.needsUpdate=!0,R.renderBufferDirect(oe,q,ie,j,A,Pe),j.side=ma):R.renderBufferDirect(oe,q,ie,j,A,Pe),A.onAfterRender(R,q,oe,ie,j,Pe)}function Pr(A,q,oe){q.isScene!==!0&&(q=Et);const ie=b.get(A),j=z.state.lights,Pe=z.state.shadowsArray,ke=j.state.version,Fe=ye.getParameters(A,j.state,Pe,q,oe),We=ye.getProgramCacheKey(Fe);let je=ie.programs;ie.environment=A.isMeshStandardMaterial?q.environment:null,ie.fog=q.fog,ie.envMap=(A.isMeshStandardMaterial?ce:de).get(A.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,je===void 0&&(A.addEventListener("dispose",Un),je=new Map,ie.programs=je);let $e=je.get(We);if($e!==void 0){if(ie.currentProgram===$e&&ie.lightsStateVersion===ke)return Zs(A,Fe),$e}else Fe.uniforms=ye.getUniforms(A),A.onBeforeCompile(Fe,R),$e=ye.acquireProgram(Fe,We),je.set(We,$e),ie.uniforms=Fe.uniforms;const Ze=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=Ne.uniform),Zs(A,Fe),ie.needsLights=Ma(A),ie.lightsStateVersion=ke,ie.needsLights&&(Ze.ambientLightColor.value=j.state.ambient,Ze.lightProbe.value=j.state.probe,Ze.directionalLights.value=j.state.directional,Ze.directionalLightShadows.value=j.state.directionalShadow,Ze.spotLights.value=j.state.spot,Ze.spotLightShadows.value=j.state.spotShadow,Ze.rectAreaLights.value=j.state.rectArea,Ze.ltc_1.value=j.state.rectAreaLTC1,Ze.ltc_2.value=j.state.rectAreaLTC2,Ze.pointLights.value=j.state.point,Ze.pointLightShadows.value=j.state.pointShadow,Ze.hemisphereLights.value=j.state.hemi,Ze.directionalShadowMap.value=j.state.directionalShadowMap,Ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ze.spotShadowMap.value=j.state.spotShadowMap,Ze.spotLightMatrix.value=j.state.spotLightMatrix,Ze.spotLightMap.value=j.state.spotLightMap,Ze.pointShadowMap.value=j.state.pointShadowMap,Ze.pointShadowMatrix.value=j.state.pointShadowMatrix),ie.currentProgram=$e,ie.uniformsList=null,$e}function fl(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Zc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Zs(A,q){const oe=b.get(A);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function ir(A,q,oe,ie,j){q.isScene!==!0&&(q=Et),W.resetTextureUnits();const Pe=q.fog,ke=ie.isMeshStandardMaterial?q.environment:null,Fe=re===null?R.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Fs,We=(ie.isMeshStandardMaterial?ce:de).get(ie.envMap||ke),je=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,$e=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ze=!!oe.morphAttributes.position,et=!!oe.morphAttributes.normal,Nt=!!oe.morphAttributes.color;let Jt=Gi;ie.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Jt=R.toneMapping);const jt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,It=jt!==void 0?jt.length:0,Qe=b.get(ie),Lt=z.state.lights;if(ze===!0&&(pt===!0||A!==ue)){const En=A===ue&&ie.id===pe;Ne.setState(ie,A,En)}let ot=!1;ie.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Lt.state.version||Qe.outputColorSpace!==Fe||j.isBatchedMesh&&Qe.batching===!1||!j.isBatchedMesh&&Qe.batching===!0||j.isBatchedMesh&&Qe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Qe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Qe.instancing===!1||!j.isInstancedMesh&&Qe.instancing===!0||j.isSkinnedMesh&&Qe.skinning===!1||!j.isSkinnedMesh&&Qe.skinning===!0||j.isInstancedMesh&&Qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Qe.instancingMorph===!1&&j.morphTexture!==null||Qe.envMap!==We||ie.fog===!0&&Qe.fog!==Pe||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ne.numPlanes||Qe.numIntersection!==Ne.numIntersection)||Qe.vertexAlphas!==je||Qe.vertexTangents!==$e||Qe.morphTargets!==Ze||Qe.morphNormals!==et||Qe.morphColors!==Nt||Qe.toneMapping!==Jt||Qe.morphTargetsCount!==It)&&(ot=!0):(ot=!0,Qe.__version=ie.version);let Sn=Qe.currentProgram;ot===!0&&(Sn=Pr(ie,q,j));let qi=!1,Mn=!1,si=!1;const zt=Sn.getUniforms(),bn=Qe.uniforms;if(Ye.useProgram(Sn.program)&&(qi=!0,Mn=!0,si=!0),ie.id!==pe&&(pe=ie.id,Mn=!0),qi||ue!==A){Ye.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),zt.setValue(V,"projectionMatrix",A.projectionMatrix),zt.setValue(V,"viewMatrix",A.matrixWorldInverse);const Tn=zt.map.cameraPosition;Tn!==void 0&&Tn.setValue(V,st.setFromMatrixPosition(A.matrixWorld)),wt.logarithmicDepthBuffer&&zt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&zt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),ue!==A&&(ue=A,Mn=!0,si=!0)}if(Qe.needsLights&&(Lt.state.directionalShadowMap.length>0&&zt.setValue(V,"directionalShadowMap",Lt.state.directionalShadowMap,W),Lt.state.spotShadowMap.length>0&&zt.setValue(V,"spotShadowMap",Lt.state.spotShadowMap,W),Lt.state.pointShadowMap.length>0&&zt.setValue(V,"pointShadowMap",Lt.state.pointShadowMap,W)),j.isSkinnedMesh){zt.setOptional(V,j,"bindMatrix"),zt.setOptional(V,j,"bindMatrixInverse");const En=j.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),zt.setValue(V,"boneTexture",En.boneTexture,W))}j.isBatchedMesh&&(zt.setOptional(V,j,"batchingTexture"),zt.setValue(V,"batchingTexture",j._matricesTexture,W),zt.setOptional(V,j,"batchingIdTexture"),zt.setValue(V,"batchingIdTexture",j._indirectTexture,W),zt.setOptional(V,j,"batchingColorTexture"),j._colorsTexture!==null&&zt.setValue(V,"batchingColorTexture",j._colorsTexture,W));const pn=oe.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&at.update(j,oe,Sn),(Mn||Qe.receiveShadow!==j.receiveShadow)&&(Qe.receiveShadow=j.receiveShadow,zt.setValue(V,"receiveShadow",j.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(bn.envMap.value=We,bn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&q.environment!==null&&(bn.envMapIntensity.value=q.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=$A()),Mn&&(zt.setValue(V,"toneMappingExposure",R.toneMappingExposure),Qe.needsLights&&Ks(bn,si),Pe&&ie.fog===!0&&Ge.refreshFogUniforms(bn,Pe),Ge.refreshMaterialUniforms(bn,ie,_e,te,z.state.transmissionRenderTarget[A.id]),Zc.upload(V,fl(Qe),bn,W)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Zc.upload(V,fl(Qe),bn,W),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&zt.setValue(V,"center",j.center),zt.setValue(V,"modelViewMatrix",j.modelViewMatrix),zt.setValue(V,"normalMatrix",j.normalMatrix),zt.setValue(V,"modelMatrix",j.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const En=ie.uniformsGroups;for(let Tn=0,zr=En.length;Tn<zr;Tn++){const Si=En[Tn];Te.update(Si,Sn),Te.bind(Si,Sn)}}return Sn}function Ks(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Ma(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(A,q,oe){const ie=b.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),b.get(A.texture).__webglTexture=q,b.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:oe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const oe=b.get(A);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0};const ba=V.createFramebuffer();this.setRenderTarget=function(A,q=0,oe=0){re=A,G=q,se=oe;let ie=null,j=!1,Pe=!1;if(A){const Fe=b.get(A);if(Fe.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(V.FRAMEBUFFER,Fe.__webglFramebuffer),N.copy(A.viewport),H.copy(A.scissor),ne=A.scissorTest,Ye.viewport(N),Ye.scissor(H),Ye.setScissorTest(ne),pe=-1;return}else if(Fe.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(Fe.__hasExternalTextures)W.rebindTextures(A,b.get(A.texture).__webglTexture,b.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(Fe.__boundDepthTexture!==$e){if($e!==null&&b.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const je=b.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(je[q])?ie=je[q][oe]:ie=je[q],j=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?ie=b.get(A).__webglMultisampledFramebuffer:Array.isArray(je)?ie=je[oe]:ie=je,N.copy(A.viewport),H.copy(A.scissor),ne=A.scissorTest}else N.copy(Q).multiplyScalar(_e).floor(),H.copy(fe).multiplyScalar(_e).floor(),ne=Oe;if(oe!==0&&(ie=ba),Ye.bindFramebuffer(V.FRAMEBUFFER,ie)&&Ye.drawBuffers(A,ie),Ye.viewport(N),Ye.scissor(H),Ye.setScissorTest(ne),j){const Fe=b.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,Fe.__webglTexture,oe)}else if(Pe){const Fe=q;for(let We=0;We<A.textures.length;We++){const je=b.get(A.textures[We]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+We,je.__webglTexture,oe,Fe)}}else if(A!==null&&oe!==0){const Fe=b.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Fe.__webglTexture,oe)}pe=-1},this.readRenderTargetPixels=function(A,q,oe,ie,j,Pe,ke,Fe=0){if(!(A&&A.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We){Ye.bindFramebuffer(V.FRAMEBUFFER,We);try{const je=A.textures[Fe],$e=je.format,Ze=je.type;if(!wt.textureFormatReadable($e)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Ze)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ie&&oe>=0&&oe<=A.height-j&&(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Fe),V.readPixels(q,oe,ie,j,De.convert($e),De.convert(Ze),Pe))}finally{const je=re!==null?b.get(re).__webglFramebuffer:null;Ye.bindFramebuffer(V.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(A,q,oe,ie,j,Pe,ke,Fe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We)if(q>=0&&q<=A.width-ie&&oe>=0&&oe<=A.height-j){Ye.bindFramebuffer(V.FRAMEBUFFER,We);const je=A.textures[Fe],$e=je.format,Ze=je.type;if(!wt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,et),V.bufferData(V.PIXEL_PACK_BUFFER,Pe.byteLength,V.STREAM_READ),A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Fe),V.readPixels(q,oe,ie,j,De.convert($e),De.convert(Ze),0);const Nt=re!==null?b.get(re).__webglFramebuffer:null;Ye.bindFramebuffer(V.FRAMEBUFFER,Nt);const Jt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await JS(V,Jt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,et),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Pe),V.deleteBuffer(et),V.deleteSync(Jt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,oe=0){const ie=Math.pow(2,-oe),j=Math.floor(A.image.width*ie),Pe=Math.floor(A.image.height*ie),ke=q!==null?q.x:0,Fe=q!==null?q.y:0;W.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,oe,0,0,ke,Fe,j,Pe),Ye.unbindTexture()};const ar=V.createFramebuffer(),Ea=V.createFramebuffer();this.copyTextureToTexture=function(A,q,oe=null,ie=null,j=0,Pe=null){Pe===null&&(j!==0?(rl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pe=j,j=0):Pe=0);let ke,Fe,We,je,$e,Ze,et,Nt,Jt;const jt=A.isCompressedTexture?A.mipmaps[Pe]:A.image;if(oe!==null)ke=oe.max.x-oe.min.x,Fe=oe.max.y-oe.min.y,We=oe.isBox3?oe.max.z-oe.min.z:1,je=oe.min.x,$e=oe.min.y,Ze=oe.isBox3?oe.min.z:0;else{const pn=Math.pow(2,-j);ke=Math.floor(jt.width*pn),Fe=Math.floor(jt.height*pn),A.isDataArrayTexture?We=jt.depth:A.isData3DTexture?We=Math.floor(jt.depth*pn):We=1,je=0,$e=0,Ze=0}ie!==null?(et=ie.x,Nt=ie.y,Jt=ie.z):(et=0,Nt=0,Jt=0);const It=De.convert(q.format),Qe=De.convert(q.type);let Lt;q.isData3DTexture?(W.setTexture3D(q,0),Lt=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),Lt=V.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),Lt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const ot=V.getParameter(V.UNPACK_ROW_LENGTH),Sn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),qi=V.getParameter(V.UNPACK_SKIP_PIXELS),Mn=V.getParameter(V.UNPACK_SKIP_ROWS),si=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,jt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,jt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,je),V.pixelStorei(V.UNPACK_SKIP_ROWS,$e),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ze);const zt=A.isDataArrayTexture||A.isData3DTexture,bn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const pn=b.get(A),En=b.get(q),Tn=b.get(pn.__renderTarget),zr=b.get(En.__renderTarget);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,zr.__webglFramebuffer);for(let Si=0;Si<We;Si++)zt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(A).__webglTexture,j,Ze+Si),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(q).__webglTexture,Pe,Jt+Si)),V.blitFramebuffer(je,$e,ke,Fe,et,Nt,ke,Fe,V.DEPTH_BUFFER_BIT,V.NEAREST);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||b.has(A)){const pn=b.get(A),En=b.get(q);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,ar),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ea);for(let Tn=0;Tn<We;Tn++)zt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,pn.__webglTexture,j,Ze+Tn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,pn.__webglTexture,j),bn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,En.__webglTexture,Pe,Jt+Tn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,En.__webglTexture,Pe),j!==0?V.blitFramebuffer(je,$e,ke,Fe,et,Nt,ke,Fe,V.COLOR_BUFFER_BIT,V.NEAREST):bn?V.copyTexSubImage3D(Lt,Pe,et,Nt,Jt+Tn,je,$e,ke,Fe):V.copyTexSubImage2D(Lt,Pe,et,Nt,je,$e,ke,Fe);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else bn?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Lt,Pe,et,Nt,Jt,ke,Fe,We,It,Qe,jt.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(Lt,Pe,et,Nt,Jt,ke,Fe,We,It,jt.data):V.texSubImage3D(Lt,Pe,et,Nt,Jt,ke,Fe,We,It,Qe,jt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Pe,et,Nt,ke,Fe,It,Qe,jt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Pe,et,Nt,jt.width,jt.height,It,jt.data):V.texSubImage2D(V.TEXTURE_2D,Pe,et,Nt,ke,Fe,It,Qe,jt);V.pixelStorei(V.UNPACK_ROW_LENGTH,ot),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Sn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,qi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Mn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,si),Pe===0&&q.generateMipmaps&&V.generateMipmap(Lt),Ye.unbindTexture()},this.initRenderTarget=function(A){b.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){G=0,se=0,re=null,Ye.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}const tR=({onExit:o})=>{const e=Ut.useRef(),[i,r]=Ut.useState(100),[l,c]=Ut.useState(!1),[h,d]=Ut.useState("Objective: Find 3 Gifts"),[m,p]=Ut.useState(""),[_,g]=Ut.useState(0),[y,S]=Ut.useState(null),[E,w]=Ut.useState(!1),[M,x]=Ut.useState(100),O=Ut.useRef(null);Ut.useRef(100),Ut.useRef(performance.now());const I=Ut.useRef([]),L=Ut.useRef(0),z=Ut.useRef(!1),F=Ut.useRef("PARTY"),P=Ut.useRef(!1),K=Ut.useRef(null),R=Ut.useRef({forward:!1,backward:!1,left:!1,right:!1,smile:!1}),C=Ut.useRef([[1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,1,0,0,0,0,0,0,1],[1,0,1,0,1,0,1,1,0,1,0,1],[1,0,1,0,0,0,0,1,0,1,0,1],[1,0,1,1,1,1,0,1,1,1,0,1],[1,0,0,0,0,1,0,0,0,0,0,1],[1,1,1,1,0,1,1,1,0,1,0,1],[1,0,0,1,0,0,0,1,0,1,0,1],[1,0,0,0,0,1,0,0,0,1,0,1],[1,0,1,1,1,1,0,1,0,1,0,1],[1,0,0,0,0,1,0,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1]]),G=10,se=Ut.useRef([]);return Ut.useEffect(()=>{if(!e.current)return;const re=ce=>{switch(ce.code){case"KeyW":R.current.forward=!0;break;case"KeyS":R.current.backward=!0;break;case"KeyA":R.current.left=!0;break;case"KeyD":R.current.right=!0;break;case"Space":R.current.smile=!0;break}},pe=ce=>{switch(ce.code){case"KeyW":R.current.forward=!1;break;case"KeyS":R.current.backward=!1;break;case"KeyA":R.current.left=!1;break;case"KeyD":R.current.right=!1;break;case"Space":R.current.smile=!1;break}};window.addEventListener("keydown",re),window.addEventListener("keyup",pe);const ue="/horror/",N=new JM,H=N.load(`${ue}images/party_wallpaper.png`),ne=N.load(`${ue}images/carpet.png`),be=N.load(`${ue}images/host.png`),Me=N.load(`${ue}images/corn_wall.png`),U=N.load(`${ue}images/dirt_ground.png`),te=N.load(`${ue}images/scarecrow.png`),_e=N.load(`${ue}images/cake.png`);[H,Me].forEach(ce=>{ce.wrapS=ce.wrapT=tl,ce.repeat.set(1,1)}),[ne,U].forEach(ce=>{ce.wrapS=ce.wrapT=tl,ce.repeat.set(4,4)}),be.magFilter=dn,te.magFilter=dn,_e.magFilter=dn;const Ae=new FM;Ae.background=new bt(3351040),Ae.fog=new $c(4469504,.03);const Re=new qn(75,window.innerWidth/window.innerHeight,.1,1e3),Q=new eR({antialias:!1,alpha:!1});Q.setSize(window.innerWidth,window.innerHeight),Q.domElement.style.cssText="position:absolute; top:0; left:0; width:100%; height:100%; filter: contrast(1.2) sepia(0.4) saturate(1.5);",e.current.appendChild(Q.domElement);const fe=new Fh({map:H,color:16777215,roughness:.5}),Oe=new Fh({map:ne,color:5588019,roughness:1}),Xe=new Fh({color:2232576}),ze=new Qo,pt=new Xs(G,12,G),Zt=new cl(G,G),st=C.current,nt=[],Et=[];st.forEach((ce,Z)=>{const Ie=[];ce.forEach((we,ye)=>{const Ge=ye*G,me=Z*G,Ee=new ai(Zt,Oe);Ee.rotation.x=-Math.PI/2,Ee.position.set(Ge,-4,me),ze.add(Ee);const Ne=new ai(Zt,Xe);Ne.rotation.x=Math.PI/2,Ne.position.set(Ge,4,me),ze.add(Ne),Et.push(Ne);const Le=new ai(pt,fe),Ce=we===1?0:-20;if(Le.position.set(Ge,Ce,me),Le.userData={targetY:Ce,isBorder:Z===0||Z===st.length-1||ye===0||ye===ce.length-1},ze.add(Le),Ie.push(Le),we===0&&nt.push({x:Ge,z:me}),we===1&&Math.random()>.85){const at=new Vh(16755200,1,12);at.position.set(Ge,1,me),at.userData={type:"lantern",flickerSpeed:Math.random()*.1+.05,baseInt:1},ze.add(at)}}),se.current.push(Ie)}),Ae.add(ze);const it=new nb(16755200,.4);Ae.add(it);const Wt=new eb(16768426,3,80,Math.PI/5,.4,1);Wt.position.set(0,0,0),Wt.target.position.set(0,0,-1),Re.add(Wt),Re.add(Wt.target),Ae.add(Re);const V=[],qt=(ce,Z)=>{if(nt.length===0)return;const Ie=Math.floor(nt.length*.8+Math.random()*(nt.length*.2)),we=nt[Ie],ye=new Hd({map:ce,transparent:!0,depthWrite:!1}),Ge=new T_(ye);Ge.position.set(we.x,0,we.z),Ge.scale.set(1.5,3.5,1),Ge.userData={name:Z,state:"PATROL",glitchTimer:0},ze.add(Ge),V.push(Ge)};qt(be,"Host"),qt(be,"Host"),Re.position.set(G,0,G);const vt=new sp(.5,.1,8,16),wt=new ap({color:16766720});for(let ce=0;ce<3;ce++){const Z=Math.floor(Math.random()*nt.length),Ie=nt[Z],we=new ai(vt,wt);we.position.set(Ie.x,-2,Ie.z),we.userData={type:"key"},Ae.add(we),I.current.push(we);const ye=new Vh(16766720,1,5);ye.position.set(Ie.x,-2,Ie.z),Ae.add(ye)}const Ye=ce=>{F.current=ce;{d("EXILED TO THE CORNFIELD."),p("THEY ONLY MOVE WHEN UNAWARE. WATCH THEM."),r(100),fe.map=Me,Oe.map=U,Oe.color.setHex(3355443),fe.color.setHex(11184810),Et.forEach(Ie=>Ie.visible=!1),Ae.background=new bt(5592388),Ae.fog=new $c(5592388,.04),it.color.setHex(11184810),it.intensity=.8,V.forEach(Ie=>{Ie.material.map=te,Ie.userData.name="Scarecrow",Ie.scale.set(2,4,1)}),ze.children.forEach(Ie=>{Ie.userData.type==="lantern"&&(Ie.visible=!1)});const Z=nt[Math.floor(Math.random()*nt.length)];Re.position.set(Z.x,0,Z.z),setTimeout(()=>p(""),5e3)}};let D=performance.now();const b=()=>{if(z.current||P.current)return;requestAnimationFrame(b);const ce=performance.now(),Z=(ce-D)/1e3;D=ce,R.current.left&&(Re.rotation.y+=2*Z),R.current.right&&(Re.rotation.y-=2*Z);const Ie=R.current.forward,we=R.current.backward;if(Ie||we){const ye=new ee;Re.getWorldDirection(ye),ye.y=0,ye.normalize(),we&&ye.negate();const Ge=Re.position.x+ye.x*5*Z,me=Re.position.z+ye.z*5*Z,Ee=Math.round(Ge/G),Ne=Math.round(me/G);if(st[Ne]&&st[Ne][Ee]===0)Re.position.x=Ge,Re.position.z=me;else{const Le=Math.round(Re.position.z/G);if(st[Le]&&st[Le][Ee]===0)Re.position.x=Ge;else{const Ce=Math.round(Re.position.x/G);st[Ne]&&st[Ne][Ce]===0&&(Re.position.z=me)}}Re.position.y=Math.sin(ce*10)*.05}else Re.position.y=mM.lerp(Re.position.y,0,Z*5);R.current.smile?M>0?x(ye=>Math.max(0,ye-15*Z)):(R.current.smile=!1,F.current==="PARTY"&&Ye("CORNFIELD")):x(ye=>Math.min(100,ye+2*Z)),I.current.forEach(ye=>{if(ye.visible&&(ye.rotation.y+=Z,Re.position.distanceTo(ye.position)<2&&(ye.visible=!1,L.current+=1,g(Ge=>Ge+1),x(100),d("GIFT OPENED. BATTERY RESTORED."),L.current===3))){const Ge=new Hd({map:_e,transparent:!0}),me=new T_(Ge);me.scale.set(3,3,1),me.position.set(G,0,G),ze.add(me),K.current=me;const Ee=new Vh(16711935,2,8);Ee.position.set(G,0,G),ze.add(Ee),d("EXIT OPEN! FIND THE CAKE WHERE YOU STARTED!")}}),K.current&&Re.position.distanceTo(K.current.position)<2&&(P.current=!0,w(!0)),V.forEach(ye=>{ye.lookAt(Re.position.x,ye.position.y,Re.position.z);const Ge=ye.position.distanceTo(Re.position),me=new ee().subVectors(Re.position,ye.position).normalize(),Ne=new ab(ye.position,me,0,50).intersectObjects(ze.children.filter(Ce=>Ce.isMesh&&Ce.userData.isBorder!==void 0)),Le=Ne.length===0||Ne[0].distance>Ge;if(F.current==="PARTY")Le&&Ge<20?R.current.smile&&M>0?ye.userData.state="STARE":ye.userData.state="CHASE":ye.userData.state="PATROL",ye.userData.state==="CHASE"?(ye.position.x+=me.x*6*Z,ye.position.z+=me.z*6*Z,Ge<1&&(de(ye),setTimeout(()=>Ye("CORNFIELD"),1e3))):ye.userData.state==="PATROL"&&(ye.position.x+=(Math.random()-.5)*.2,ye.position.z+=(Math.random()-.5)*.2);else{const Ce=new ee;Re.getWorldDirection(Ce);const at=Ce.dot(me);Le&&at<-.4?ye.userData.state="FROZEN":(ye.userData.state="RUSH",ye.position.x+=me.x*12*Z,ye.position.z+=me.z*12*Z,Ge<1&&de(ye))}}),Q.render(Ae,Re)},W=requestAnimationFrame(b),de=ce=>{if(!z.current){if(z.current=!0,O.current){const Z=O.current.ctx.currentTime;O.current.osc.frequency.setValueAtTime(100,Z),O.current.osc.frequency.exponentialRampToValueAtTime(800,Z+.1),O.current.gain.gain.setValueAtTime(1,Z),O.current.gain.gain.exponentialRampToValueAtTime(.01,Z+.5)}if(d(F.current==="PARTY"?"RUDE! EXILE IMMINENT!":"CONSUMED BY THE CORN."),ce){const Z=nt[Math.floor(Math.random()*nt.length)];ce.position.set(Z.x,0,Z.z)}setTimeout(()=>{z.current=!1},2e3)}};return()=>{cancelAnimationFrame(W),window.removeEventListener("keydown",re),window.removeEventListener("keyup",pe),e.current&&Q.domElement&&e.current.removeChild(Q.domElement),Q.dispose()}},[l]),Se.jsxs("div",{className:"relative w-full h-screen bg-black overflow-hidden font-mono select-none",children:[Se.jsx("div",{ref:e,className:"w-full h-full"}),Se.jsx("div",{className:"absolute top-0 left-0 w-full p-8 pointer-events-none mix-blend-difference z-10",children:Se.jsxs("div",{className:"flex justify-between items-start",children:[Se.jsxs("div",{children:[Se.jsx("h1",{className:"text-4xl font-bold text-yellow-500 tracking-widest drop-shadow-md",children:"PROTOCOL: BIRTHDAY"}),Se.jsx("p",{className:"text-xl text-yellow-200 mt-2 animate-pulse",children:h})]}),Se.jsxs("div",{className:"text-right",children:[Se.jsx("div",{className:"text-2xl text-yellow-500 font-bold mb-2",children:"SOCIAL BATTERY"}),Se.jsx("div",{className:"w-64 h-6 bg-gray-900 border-2 border-yellow-700",children:Se.jsx("div",{className:"h-full bg-yellow-500 transition-all duration-200",style:{width:`${M}%`}})}),Se.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[Se.jsx("span",{className:"text-sm text-yellow-300",children:"HOLD [SPACE] TO WIDEN SMILE"}),Se.jsx("div",{className:`w-8 h-8 rounded-full border-2 ${R.current?.smile?"bg-green-500 border-green-300":"bg-transparent border-red-500"}`})]}),Se.jsxs("div",{className:"mt-4 text-xl text-yellow-200",children:["GIFTS OPENED: ",_," / 3"]})]})]})}),m&&Se.jsx("div",{className:"absolute bottom-1/4 w-full text-center pointer-events-none z-20",children:Se.jsx("p",{className:"text-2xl font-bold text-red-400 bg-black/50 inline-block px-4 py-2 animate-pulse",children:m})}),(E||z.current)&&Se.jsx("div",{className:`absolute inset-0 z-20 flex flex-col items-center justify-center ${E?"bg-yellow-900":"bg-red-600"} mix-blend-multiply transition-opacity duration-1000`,children:E?Se.jsxs("div",{className:"text-center animate-bounce",children:[Se.jsx("h1",{className:"text-9xl font-black text-yellow-100 mb-8 drop-shadow-lg",children:"SURVIVED"}),Se.jsx("p",{className:"text-4xl text-yellow-300 mb-8",children:"REWARD: ALMOND WATER"}),Se.jsx("img",{src:"/horror/images/cake.png",className:"w-64 h-64 mx-auto pixelated animate-spin",alt:"Cake"}),Se.jsx("button",{onClick:()=>window.location.reload(),className:"mt-12 px-8 py-4 bg-yellow-600 text-black font-bold text-2xl hover:bg-yellow-500",children:"REPLAY"})]}):Se.jsx("h1",{className:"text-9xl font-black text-black animate-ping",children:"RUDE!"})}),Se.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-10 bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] mix-blend-overlay"}),Se.jsx("div",{className:"absolute top-8 right-8 z-50 flex flex-col gap-4 pointer-events-auto",children:Se.jsxs("button",{onClick:o,className:"flex items-center gap-2 bg-red-950/80 text-red-200 border border-red-800 px-4 py-2 uppercase text-xs font-bold",children:["ABORT ",Se.jsx(iv,{className:"w-4 h-4"})]})}),Se.jsx("div",{className:"absolute top-1/2 left-1/2 w-1 h-1 bg-white/50 rounded-full pointer-events-none mix-blend-exclusion"})]})},nR=({story:o,onClick:e})=>Se.jsxs("div",{onClick:e,className:"group relative bg-[#080808] border border-gray-800/60 p-0 cursor-pointer overflow-hidden transition-all duration-500 hover:border-red-900/60 hover:shadow-[0_0_40px_rgba(220,38,38,0.05)] rounded-sm",children:[Se.jsxs("div",{className:"absolute top-0 right-0 bg-gray-900/50 px-3 py-1 border-b border-l border-gray-800 text-[9px] font-mono text-gray-500 uppercase tracking-widest group-hover:bg-red-950/30 group-hover:text-red-400 transition-colors",children:["Case File #",o.id.toUpperCase().substring(0,4)]}),o.imageUrl&&Se.jsxs("div",{className:"w-full h-56 overflow-hidden relative border-b border-gray-800/50",children:[Se.jsx("div",{className:"absolute inset-0 bg-red-900/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"}),Se.jsx("img",{src:o.imageUrl,alt:o.title,className:"w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter grayscale contrast-125 group-hover:grayscale-0"}),Se.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"}),Se.jsxs("div",{className:"absolute bottom-3 left-3 flex items-center gap-2 z-20",children:[Se.jsx("div",{className:`w-2 h-2 rounded-full ${o.is3D?"bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]":"bg-gray-600"}`}),Se.jsx("span",{className:"text-[10px] font-mono uppercase tracking-widest text-gray-400 group-hover:text-gray-200",children:o.is3D?"Live Feed":"Archived"})]})]}),Se.jsxs("div",{className:"p-8 pt-6 relative",children:[Se.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-red-900/0 group-hover:bg-red-900/50 transition-all duration-500"}),Se.jsx("h3",{className:"text-3xl font-bold mb-3 text-gray-300 group-hover:text-red-500 transition-colors uppercase tracking-tighter font-header leading-none",children:o.title}),Se.jsxs("div",{className:"flex items-center gap-4 mb-4 text-[10px] font-mono text-gray-600 uppercase tracking-widest border-b border-gray-900 pb-4 group-hover:border-red-900/20 transition-colors",children:[Se.jsxs("span",{className:"text-red-900 group-hover:text-red-700",children:["Auth: ",o.author]}),Se.jsx("span",{children:"//"}),Se.jsx("span",{children:o.date})]}),Se.jsx("p",{className:"text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2 font-serif group-hover:text-gray-400 transition-colors",children:o.summary}),Se.jsx("div",{className:"flex flex-wrap gap-2",children:o.tags.map(i=>Se.jsx("span",{className:"text-[9px] uppercase tracking-widest bg-black px-2 py-1 text-gray-600 border border-gray-800 group-hover:border-red-900/30 group-hover:text-red-900/70 transition-colors",children:i},i))})]})]}),Hv=({publisherId:o="ca-pub-6275575304084608",slotId:e="2004776727",className:i})=>Se.jsxs("div",{className:`bg-[#0a0a0a] border border-gray-800/30 p-8 flex flex-col items-center justify-center min-h-[150px] relative overflow-hidden group ${i}`,children:[Se.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-red-900/20 animate-scan"}),Se.jsx("p",{className:"text-xs text-gray-700 font-mono uppercase tracking-[0.2em] mb-4",children:"External Broadcast Signal [Sponsor]"}),Se.jsxs("div",{className:"w-full max-w-[728px] h-[90px] bg-black border border-gray-800 flex items-center justify-center relative overflow-hidden group-hover:border-red-900/40 transition-colors",children:[Se.jsxs("div",{className:"absolute inset-0 opacity-20 pointer-events-none",children:[Se.jsx("div",{className:"w-full h-full bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] bg-cover opacity-10 mix-blend-screen"}),Se.jsx("div",{className:"absolute inset-0 bg-red-900/10 animate-pulse"})]}),Se.jsx("span",{className:"absolute z-0 text-[10px] font-mono text-red-900/50 uppercase tracking-[0.3em] animate-pulse",children:"$$ NO SIGNAL // AWAITING INPUT $$"}),Se.jsx("ins",{className:"adsbygoogle block relative z-10",style:{display:"block",width:"100%",height:"100%"},"data-ad-client":o,"data-ad-slot":e,"data-ad-format":"auto","data-full-width-responsive":"true"})]})]});try{window&&window.adsbygoogle}catch(o){console.error("AdSense Error:",o)}const iR=({story:o,onBack:e})=>(Ut.useEffect(()=>{window.scrollTo(0,0)},[]),Se.jsxs("div",{className:"animate-fade-in relative",children:[Se.jsxs("button",{onClick:e,className:"group flex items-center gap-2 text-red-600 mb-8 hover:text-red-400 transition-colors uppercase text-sm font-bold tracking-widest",children:[Se.jsx(iv,{className:"w-4 h-4 group-hover:-translate-x-1 transition-transform"}),"Return to Index"]}),o.id==="fractal-saint"&&Se.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0 opacity-10 mix-blend-screen overflow-hidden",children:[Se.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-red-500/20 rounded-full animate-[spin_60s_linear_infinite]"}),Se.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-500/30 rotate-45 animate-[spin_40s_linear_infinite_reverse]"}),Se.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-red-500/10 rotate-12 animate-[pulse_4s_ease-in-out_infinite]"})]}),Se.jsxs("article",{className:"prose prose-invert prose-red max-w-none relative z-10",children:[Se.jsxs("header",{className:"mb-12 border-b border-red-900/20 pb-8",children:[Se.jsx("h2",{className:"text-5xl font-black text-gray-100 mb-4 uppercase tracking-tighter",children:o.title}),Se.jsxs("div",{className:"flex gap-4 text-xs font-sans uppercase tracking-widest text-red-700",children:[Se.jsxs("span",{children:["Author: ",o.author]}),Se.jsx("span",{children:"|"}),Se.jsxs("span",{children:["Archive: ",o.date]})]})]}),Se.jsx("div",{className:"text-xl leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:text-red-600 first-letter:mr-3 first-letter:float-left",dangerouslySetInnerHTML:{__html:o.content}}),Se.jsx(Hv,{className:"mt-16 mb-8"})]}),Se.jsx("footer",{className:"mt-16 p-8 bg-red-950/5 border border-red-900/20 rounded-lg relative z-10",children:Se.jsxs("div",{className:"flex items-start gap-4",children:[Se.jsx(pS,{className:"text-red-600 shrink-0 mt-1"}),Se.jsxs("div",{children:[Se.jsx("h4",{className:"font-bold text-red-500 uppercase tracking-widest text-sm mb-2",children:"Researcher's Note"}),Se.jsx("p",{className:"text-sm italic text-gray-500",children:"The contents of this file have been linked to severe psychological distress. If you begin to hear a rhythmic clicking or experience spatial anomalies, cease reading immediately."})]})]})})]})),ev=[{id:"backrooms",title:"Level 0: The Beige Eternity",author:"Surveyor K. Miller",date:"RECOVERED LOG",is3D:!0,imageUrl:"images/wallpaper.png",summary:"If you aren't careful and you noclip out of reality in the wrong areas...",tags:["interactive","3d","liminal-space"],content:`
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
    `}];function aR(){const[o,e]=Ut.useState(null),[i,r]=Ut.useState(100),l=ev.find(c=>c.id===o);return Ut.useEffect(()=>{const c=setInterval(()=>{r(h=>Math.max(80,h-.01))},1e3);return()=>clearInterval(c)},[]),l?.is3D?Se.jsx(tR,{onExit:()=>e(null)}):l&&!l.is3D?Se.jsx(iR,{story:l,onBack:()=>e(null)}):Se.jsxs("div",{className:`min-h-screen bg-[#050505] text-gray-300 font-serif selection:bg-red-900 selection:text-white transition-all duration-1000 ${i<90?"animate-vibrate":""}`,children:[Se.jsxs("nav",{className:"fixed top-0 left-0 w-full bg-black/90 border-b border-red-900/30 backdrop-blur-md z-40 p-4 flex justify-between items-center px-8",children:[Se.jsxs("div",{className:"flex items-center gap-3",children:[Se.jsx(vS,{className:"text-red-600 w-8 h-8 animate-pulse"}),Se.jsx("h1",{className:"text-2xl font-black uppercase tracking-tighter text-red-600 font-header",children:"The Void Archive"})]}),Se.jsxs("div",{className:"flex gap-6 text-sm uppercase tracking-widest text-gray-500 font-sans items-center",children:[Se.jsx("a",{href:"https://elo2026x.github.io/The_Victoria_Texas_Franchise/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-500 cursor-pointer transition-colors border-b border-transparent hover:border-red-600",children:"FORENSICS"}),Se.jsx("a",{href:"https://www.amazon.com/shop/elo2025x",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-500 cursor-pointer transition-colors border-b border-transparent hover:border-red-600",children:"MARKETING"}),Se.jsx("a",{href:"https://elo2026.gumroad.com/l/eircyr",target:"_blank",rel:"noopener noreferrer",className:"text-red-600 font-bold border border-red-900/50 px-3 py-1 hover:bg-red-900/20 hover:text-red-400 transition-all animate-pulse",children:"Subscribe"})]})]}),Se.jsx("main",{className:"pt-24 pb-20 max-w-5xl mx-auto px-6",children:Se.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[Se.jsxs("div",{className:"col-span-full mb-8",children:[Se.jsx("h3",{className:"text-red-700 font-sans uppercase tracking-[0.4em] text-xs font-bold mb-4",children:"Latest Classified Data"}),Se.jsx("p",{className:"text-gray-500 italic max-w-xl",children:'"Reality is a thin layer of ice over a very deep, dark ocean. These stories are the cracks."'})]}),ev.map(c=>Se.jsx(nR,{story:c,onClick:()=>e(c.id)},c.id)),Se.jsx(Hv,{className:"col-span-full mt-12 mb-8"})]})}),Se.jsxs("div",{className:"fixed bottom-6 right-6 flex items-center gap-4 bg-black/80 border border-gray-800 p-3 backdrop-blur-sm",children:[Se.jsxs("div",{className:"text-right",children:[Se.jsx("p",{className:"text-[10px] text-gray-600 font-sans uppercase font-bold",children:"Local Reality Level"}),Se.jsxs("p",{className:"font-mono text-red-600 text-sm",children:[i.toFixed(4),"%"]})]}),Se.jsxs("div",{className:"w-12 h-12 rounded-full border-2 border-red-900 flex items-center justify-center relative",children:[Se.jsx("div",{className:"absolute inset-1 rounded-full border border-red-600 animate-ping opacity-20"}),Se.jsx(gS,{className:"w-5 h-5 text-red-600"})]})]}),Se.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const rR=sS({onNeedRefresh(){confirm("A new version of The Void Archive is available. Reload to update?")&&rR(!0)},onOfflineReady(){console.log("Archive downloaded. Offline access granted.")}});nS.createRoot(document.getElementById("app")).render(Se.jsx(jy.StrictMode,{children:Se.jsx(aR,{})}));
