(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function nv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var dh={exports:{}},qo={};var Wg;function Xy(){if(Wg)return qo;Wg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return qo.Fragment=e,qo.jsx=i,qo.jsxs=i,qo}var qg;function Wy(){return qg||(qg=1,dh.exports=Xy()),dh.exports}var ge=Wy(),ph={exports:{}},lt={};var Yg;function qy(){if(Yg)return lt;Yg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=y&&I[y]||I["@@iterator"],typeof I=="function"?I:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function x(I,ie,ve){this.props=I,this.context=ie,this.refs=M,this.updater=ve||T}x.prototype.isReactComponent={},x.prototype.setState=function(I,ie){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ie,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function D(){}D.prototype=x.prototype;function N(I,ie,ve){this.props=I,this.context=ie,this.refs=M,this.updater=ve||T}var U=N.prototype=new D;U.constructor=N,C(U,x.prototype),U.isPureReactComponent=!0;var O=Array.isArray;function B(){}var P={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function E(I,ie,ve){var Ce=ve.ref;return{$$typeof:o,type:I,key:ie,ref:Ce!==void 0?Ce:null,props:ve}}function R(I,ie){return E(I.type,ie,I.props)}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function Y(I){var ie={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(ve){return ie[ve]})}var K=/\/+/g;function fe(I,ie){return typeof I=="object"&&I!==null&&I.key!=null?Y(""+I.key):ie.toString(36)}function re(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(B,B):(I.status="pending",I.then(function(ie){I.status==="pending"&&(I.status="fulfilled",I.value=ie)},function(ie){I.status==="pending"&&(I.status="rejected",I.reason=ie)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function z(I,ie,ve,Ce,Be){var $=typeof I;($==="undefined"||$==="boolean")&&(I=null);var oe=!1;if(I===null)oe=!0;else switch($){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(I.$$typeof){case o:case e:oe=!0;break;case _:return oe=I._init,z(oe(I._payload),ie,ve,Ce,Be)}}if(oe)return Be=Be(I),oe=Ce===""?"."+fe(I,0):Ce,O(Be)?(ve="",oe!=null&&(ve=oe.replace(K,"$&/")+"/"),z(Be,ie,ve,"",function(He){return He})):Be!=null&&(G(Be)&&(Be=R(Be,ve+(Be.key==null||I&&I.key===Be.key?"":(""+Be.key).replace(K,"$&/")+"/")+oe)),ie.push(Be)),1;oe=0;var De=Ce===""?".":Ce+":";if(O(I))for(var ke=0;ke<I.length;ke++)Ce=I[ke],$=De+fe(Ce,ke),oe+=z(Ce,ie,ve,$,Be);else if(ke=S(I),typeof ke=="function")for(I=ke.call(I),ke=0;!(Ce=I.next()).done;)Ce=Ce.value,$=De+fe(Ce,ke++),oe+=z(Ce,ie,ve,$,Be);else if($==="object"){if(typeof I.then=="function")return z(re(I),ie,ve,Ce,Be);throw ie=String(I),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return oe}function V(I,ie,ve){if(I==null)return I;var Ce=[],Be=0;return z(I,Ce,"","",function($){return ie.call(ve,$,Be++)}),Ce}function ne(I){if(I._status===-1){var ie=I._result;ie=ie(),ie.then(function(ve){(I._status===0||I._status===-1)&&(I._status=1,I._result=ve)},function(ve){(I._status===0||I._status===-1)&&(I._status=2,I._result=ve)}),I._status===-1&&(I._status=0,I._result=ie)}if(I._status===1)return I._result.default;throw I._result}var Me=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},be={map:V,forEach:function(I,ie,ve){V(I,function(){ie.apply(this,arguments)},ve)},count:function(I){var ie=0;return V(I,function(){ie++}),ie},toArray:function(I){return V(I,function(ie){return ie})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return lt.Activity=g,lt.Children=be,lt.Component=x,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=N,lt.StrictMode=s,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,lt.__COMPILER_RUNTIME={__proto__:null,c:function(I){return P.H.useMemoCache(I)}},lt.cache=function(I){return function(){return I.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(I,ie,ve){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Ce=C({},I.props),Be=I.key;if(ie!=null)for($ in ie.key!==void 0&&(Be=""+ie.key),ie)!k.call(ie,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&ie.ref===void 0||(Ce[$]=ie[$]);var $=arguments.length-2;if($===1)Ce.children=ve;else if(1<$){for(var oe=Array($),De=0;De<$;De++)oe[De]=arguments[De+2];Ce.children=oe}return E(I.type,Be,Ce)},lt.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},lt.createElement=function(I,ie,ve){var Ce,Be={},$=null;if(ie!=null)for(Ce in ie.key!==void 0&&($=""+ie.key),ie)k.call(ie,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Be[Ce]=ie[Ce]);var oe=arguments.length-2;if(oe===1)Be.children=ve;else if(1<oe){for(var De=Array(oe),ke=0;ke<oe;ke++)De[ke]=arguments[ke+2];Be.children=De}if(I&&I.defaultProps)for(Ce in oe=I.defaultProps,oe)Be[Ce]===void 0&&(Be[Ce]=oe[Ce]);return E(I,$,Be)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(I){return{$$typeof:d,render:I}},lt.isValidElement=G,lt.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:ne}},lt.memo=function(I,ie){return{$$typeof:p,type:I,compare:ie===void 0?null:ie}},lt.startTransition=function(I){var ie=P.T,ve={};P.T=ve;try{var Ce=I(),Be=P.S;Be!==null&&Be(ve,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(B,Me)}catch($){Me($)}finally{ie!==null&&ve.types!==null&&(ie.types=ve.types),P.T=ie}},lt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},lt.use=function(I){return P.H.use(I)},lt.useActionState=function(I,ie,ve){return P.H.useActionState(I,ie,ve)},lt.useCallback=function(I,ie){return P.H.useCallback(I,ie)},lt.useContext=function(I){return P.H.useContext(I)},lt.useDebugValue=function(){},lt.useDeferredValue=function(I,ie){return P.H.useDeferredValue(I,ie)},lt.useEffect=function(I,ie){return P.H.useEffect(I,ie)},lt.useEffectEvent=function(I){return P.H.useEffectEvent(I)},lt.useId=function(){return P.H.useId()},lt.useImperativeHandle=function(I,ie,ve){return P.H.useImperativeHandle(I,ie,ve)},lt.useInsertionEffect=function(I,ie){return P.H.useInsertionEffect(I,ie)},lt.useLayoutEffect=function(I,ie){return P.H.useLayoutEffect(I,ie)},lt.useMemo=function(I,ie){return P.H.useMemo(I,ie)},lt.useOptimistic=function(I,ie){return P.H.useOptimistic(I,ie)},lt.useReducer=function(I,ie,ve){return P.H.useReducer(I,ie,ve)},lt.useRef=function(I){return P.H.useRef(I)},lt.useState=function(I){return P.H.useState(I)},lt.useSyncExternalStore=function(I,ie,ve){return P.H.useSyncExternalStore(I,ie,ve)},lt.useTransition=function(){return P.H.useTransition()},lt.version="19.2.3",lt}var jg;function jd(){return jg||(jg=1,ph.exports=qy()),ph.exports}var xt=jd();const Yy=nv(xt);var mh={exports:{}},Yo={},gh={exports:{}},_h={};var Zg;function jy(){return Zg||(Zg=1,(function(o){function e(z,V){var ne=z.length;z.push(V);e:for(;0<ne;){var Me=ne-1>>>1,be=z[Me];if(0<l(be,V))z[Me]=V,z[ne]=be,ne=Me;else break e}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var V=z[0],ne=z.pop();if(ne!==V){z[0]=ne;e:for(var Me=0,be=z.length,I=be>>>1;Me<I;){var ie=2*(Me+1)-1,ve=z[ie],Ce=ie+1,Be=z[Ce];if(0>l(ve,ne))Ce<be&&0>l(Be,ve)?(z[Me]=Be,z[Ce]=ne,Me=Ce):(z[Me]=ve,z[ie]=ne,Me=ie);else if(Ce<be&&0>l(Be,ne))z[Me]=Be,z[Ce]=ne,Me=Ce;else break e}}return V}function l(z,V){var ne=z.sortIndex-V.sortIndex;return ne!==0?ne:z.id-V.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,y=3,S=!1,T=!1,C=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(z){for(var V=i(p);V!==null;){if(V.callback===null)s(p);else if(V.startTime<=z)s(p),V.sortIndex=V.expirationTime,e(m,V);else break;V=i(p)}}function O(z){if(C=!1,U(z),!T)if(i(m)!==null)T=!0,B||(B=!0,Y());else{var V=i(p);V!==null&&re(O,V.startTime-z)}}var B=!1,P=-1,k=5,E=-1;function R(){return M?!0:!(o.unstable_now()-E<k)}function G(){if(M=!1,B){var z=o.unstable_now();E=z;var V=!0;try{e:{T=!1,C&&(C=!1,D(P),P=-1),S=!0;var ne=y;try{t:{for(U(z),g=i(m);g!==null&&!(g.expirationTime>z&&R());){var Me=g.callback;if(typeof Me=="function"){g.callback=null,y=g.priorityLevel;var be=Me(g.expirationTime<=z);if(z=o.unstable_now(),typeof be=="function"){g.callback=be,U(z),V=!0;break t}g===i(m)&&s(m),U(z)}else s(m);g=i(m)}if(g!==null)V=!0;else{var I=i(p);I!==null&&re(O,I.startTime-z),V=!1}}break e}finally{g=null,y=ne,S=!1}V=void 0}}finally{V?Y():B=!1}}}var Y;if(typeof N=="function")Y=function(){N(G)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,fe=K.port2;K.port1.onmessage=G,Y=function(){fe.postMessage(null)}}else Y=function(){x(G,0)};function re(z,V){P=x(function(){z(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(z){switch(y){case 1:case 2:case 3:var V=3;break;default:V=y}var ne=y;y=V;try{return z()}finally{y=ne}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ne=y;y=z;try{return V()}finally{y=ne}},o.unstable_scheduleCallback=function(z,V,ne){var Me=o.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Me+ne:Me):ne=Me,z){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=ne+be,z={id:_++,callback:V,priorityLevel:z,startTime:ne,expirationTime:be,sortIndex:-1},ne>Me?(z.sortIndex=ne,e(p,z),i(m)===null&&z===i(p)&&(C?(D(P),P=-1):C=!0,re(O,ne-Me))):(z.sortIndex=be,e(m,z),T||S||(T=!0,B||(B=!0,Y()))),z},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(z){var V=y;return function(){var ne=y;y=V;try{return z.apply(this,arguments)}finally{y=ne}}}})(_h)),_h}var Kg;function Zy(){return Kg||(Kg=1,gh.exports=jy()),gh.exports}var vh={exports:{}},Gn={};var Qg;function Ky(){if(Qg)return Gn;Qg=1;var o=jd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Gn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Gn.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},Gn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Gn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Gn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:S}):_==="script"&&s.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Gn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Gn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Gn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Gn.requestFormReset=function(m){s.d.r(m)},Gn.unstable_batchedUpdates=function(m,p){return m(p)},Gn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Gn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Gn.version="19.2.3",Gn}var Jg;function Qy(){if(Jg)return vh.exports;Jg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),vh.exports=Ky(),vh.exports}var $g;function Jy(){if($g)return Yo;$g=1;var o=Zy(),e=jd(),i=Qy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var v=!1,A=u.child;A;){if(A===a){v=!0,a=u,r=f;break}if(A===r){v=!0,r=u,a=f;break}A=A.sibling}if(!v){for(A=f.child;A;){if(A===a){v=!0,a=f,r=u;break}if(A===r){v=!0,r=f,a=u;break}A=A.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var K=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===K?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case O:return"Suspense";case B:return"SuspenseList";case E:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case N:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:fe(t.type)||"Memo";case k:n=t._payload,t=t._init;try{return fe(t(n))}catch{}}return null}var re=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},Me=[],be=-1;function I(t){return{current:t}}function ie(t){0>be||(t.current=Me[be],Me[be]=null,be--)}function ve(t,n){be++,Me[be]=t.current,t.current=n}var Ce=I(null),Be=I(null),$=I(null),oe=I(null);function De(t,n){switch(ve($,n),ve(Be,t),ve(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?pg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=pg(n),t=mg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(Ce),ve(Ce,t)}function ke(){ie(Ce),ie(Be),ie($)}function He(t){t.memoizedState!==null&&ve(oe,t);var n=Ce.current,a=mg(n,t.type);n!==a&&(ve(Be,t),ve(Ce,a))}function ut(t){Be.current===t&&(ie(Ce),ie(Be)),oe.current===t&&(ie(oe),Vo._currentValue=ne)}var $t,gt;function dt(t){if($t===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$t=n&&n[1]||"",gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+t+gt}var Nt=!1;function at(t,n){if(!t||Nt)return"";Nt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ce){var se=ce}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ce){se=ce}t.call(xe.prototype)}}else{try{throw Error()}catch(ce){se=ce}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ce){if(ce&&se&&typeof ce.stack=="string")return[ce.stack,se.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],A=f[1];if(v&&A){var H=v.split(`
`),te=A.split(`
`);for(u=r=0;r<H.length&&!H[r].includes("DetermineComponentFrameRoot");)r++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(r===H.length||u===te.length)for(r=H.length-1,u=te.length-1;1<=r&&0<=u&&H[r]!==te[u];)u--;for(;1<=r&&0<=u;r--,u--)if(H[r]!==te[u]){if(r!==1||u!==1)do if(r--,u--,0>u||H[r]!==te[u]){var me=`
`+H[r].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=r&&0<=u);break}}}finally{Nt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?dt(a):""}function bt(t,n){switch(t.tag){case 26:case 27:case 5:return dt(t.type);case 16:return dt("Lazy");case 13:return t.child!==n&&n!==null?dt("Suspense Fallback"):dt("Suspense");case 19:return dt("SuspenseList");case 0:case 15:return at(t.type,!1);case 11:return at(t.type.render,!1);case 1:return at(t.type,!0);case 31:return dt("Activity");default:return""}}function F(t){try{var n="",a=null;do n+=bt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Gt=Object.prototype.hasOwnProperty,At=o.unstable_scheduleCallback,It=o.unstable_cancelCallback,Ye=o.unstable_shouldYield,L=o.unstable_requestPaint,b=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,pe=o.unstable_ImmediatePriority,Se=o.unstable_UserBlockingPriority,ue=o.unstable_NormalPriority,Xe=o.unstable_LowPriority,Ue=o.unstable_IdlePriority,Ge=o.log,tt=o.unstable_setDisableYieldValue,Te=null,we=null;function Fe(t){if(typeof Ge=="function"&&tt(t),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(Te,t)}catch{}}var Ie=Math.clz32?Math.clz32:W,Ne=Math.log,ft=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Ne(t)/ft|0)|0}var Le=256,Re=262144,ye=4194304;function de(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function he(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?u=de(r):(v&=A,v!==0?u=de(v):a||(a=A&~t,a!==0&&(u=de(a))))):(A=r&~f,A!==0?u=de(A):v!==0?u=de(v):a||(a=r&~t,a!==0&&(u=de(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ee(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ae(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qe(){var t=ye;return ye<<=1,(ye&62914560)===0&&(ye=4194304),t}function ot(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function _t(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ht(t,n,a,r,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,H=t.expirationTimes,te=t.hiddenUpdates;for(a=v&~a;0<a;){var me=31-Ie(a),xe=1<<me;A[me]=0,H[me]=-1;var se=te[me];if(se!==null)for(te[me]=null,me=0;me<se.length;me++){var ce=se[me];ce!==null&&(ce.lane&=-536870913)}a&=~xe}r!==0&&st(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function st(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Ie(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Qt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Ie(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function Sn(t,n){var a=n&-n;return a=(a&42)!==0?1:ta(a),(a&(t.suspendedLanes|n))!==0?0:a}function ta(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Bi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function na(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:Bg(t.type))}function Kn(t,n){var a=V.p;try{return V.p=t,n()}finally{V.p=a}}var mn=Math.random().toString(36).slice(2),tn="__reactFiber$"+mn,ln="__reactProps$"+mn,Ri="__reactContainer$"+mn,qs="__reactEvents$"+mn,Ys="__reactListeners$"+mn,pl="__reactHandles$"+mn,no="__reactResources$"+mn,ps="__reactMarker$"+mn;function io(t){delete t[tn],delete t[ln],delete t[qs],delete t[Ys],delete t[pl]}function Ua(t){var n=t[tn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ri]||a[tn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Mg(t);t!==null;){if(a=t[tn])return a;t=Mg(t)}return n}t=a,a=t.parentNode}return null}function Na(t){if(t=t[tn]||t[Ri]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ms(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function La(t){var n=t[no];return n||(n=t[no]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function w(t){t[ps]=!0}var j=new Set,le={};function ae(t,n){J(t,n),J(t+"Capture",n)}function J(t,n){for(le[t]=n,t=0;t<n.length;t++)j.add(n[t])}var Oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ve={},Pe={};function We(t){return Gt.call(Pe,t)?!0:Gt.call(Ve,t)?!1:Oe.test(t)?Pe[t]=!0:(Ve[t]=!0,!1)}function je(t,n,a){if(We(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function et(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ze(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function nt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sn(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function en(t){if(!t._valueTracker){var n=Bt(t)?"checked":"value";t._valueTracker=sn(t,n,""+t[n])}}function Vt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Bt(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Je(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ft=/[\n"\\]/g;function rt(t){return t.replace(Ft,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Nn(t,n,a,r,u,f,v,A){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+nt(n)):t.value!==""+nt(n)&&(t.value=""+nt(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?Ln(t,v,nt(n)):a!=null?Ln(t,v,nt(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+nt(A):t.removeAttribute("name")}function ia(t,n,a,r,u,f,v,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){en(t);return}a=a!=null?""+nt(a):"",n=n!=null?""+nt(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),en(t)}function Ln(t,n,a){n==="number"&&Je(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function gi(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+nt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function kt(t,n,a){if(n!=null&&(n=""+nt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+nt(a):""}function On(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(re(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=nt(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),en(t)}function Mn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var In=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pn(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||In.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function js(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Pn(t,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Pn(t,f,n[f])}function Ci(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(t){return Gv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function aa(){}var cu=null;function uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zs=null,Ks=null;function dp(t){var n=Na(t);if(n&&(t=n.stateNode)){var a=t[ln]||null;e:switch(t=n.stateNode,n.type){case"input":if(Nn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+rt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[ln]||null;if(!u)throw Error(s(90));Nn(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Vt(r)}break e;case"textarea":kt(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&gi(t,!!a.multiple,n,!1)}}}var fu=!1;function pp(t,n,a){if(fu)return t(n,a);fu=!0;try{var r=t(n);return r}finally{if(fu=!1,(Zs!==null||Ks!==null)&&(nc(),Zs&&(n=Zs,t=Ks,Ks=Zs=null,dp(n),t)))for(n=0;n<t.length;n++)dp(t[n])}}function ao(t,n){var a=t.stateNode;if(a===null)return null;var r=a[ln]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=!1;if(sa)try{var so={};Object.defineProperty(so,"passive",{get:function(){hu=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{hu=!1}var Oa=null,du=null,gl=null;function mp(){if(gl)return gl;var t,n=du,a=n.length,r,u="value"in Oa?Oa.value:Oa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(r=1;r<=v&&n[a-r]===u[f-r];r++);return gl=u.slice(t,1<r?1-r:void 0)}function _l(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function gp(){return!1}function Qn(t){function n(a,r,u,f,v){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?vl:gp,this.isPropagationStopped=gp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Qn(gs),ro=g({},gs,{view:0,detail:0}),Vv=Qn(ro),pu,mu,oo,yl=g({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(pu=t.screenX-oo.screenX,mu=t.screenY-oo.screenY):mu=pu=0,oo=t),pu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),_p=Qn(yl),kv=g({},yl,{dataTransfer:0}),Xv=Qn(kv),Wv=g({},ro,{relatedTarget:0}),gu=Qn(Wv),qv=g({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),Yv=Qn(qv),jv=g({},gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zv=Qn(jv),Kv=g({},gs,{data:0}),vp=Qn(Kv),Qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$v={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ex(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=$v[t])?!!n[t]:!1}function _u(){return ex}var tx=g({},ro,{key:function(t){if(t.key){var n=Qv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nx=Qn(tx),ix=g({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xp=Qn(ix),ax=g({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),sx=Qn(ax),rx=g({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),ox=Qn(rx),lx=g({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cx=Qn(lx),ux=g({},gs,{newState:0,oldState:0}),fx=Qn(ux),hx=[9,13,27,32],vu=sa&&"CompositionEvent"in window,lo=null;sa&&"documentMode"in document&&(lo=document.documentMode);var dx=sa&&"TextEvent"in window&&!lo,yp=sa&&(!vu||lo&&8<lo&&11>=lo),Sp=" ",Mp=!1;function bp(t,n){switch(t){case"keyup":return hx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ep(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qs=!1;function px(t,n){switch(t){case"compositionend":return Ep(n);case"keypress":return n.which!==32?null:(Mp=!0,Sp);case"textInput":return t=n.data,t===Sp&&Mp?null:t;default:return null}}function mx(t,n){if(Qs)return t==="compositionend"||!vu&&bp(t,n)?(t=mp(),gl=du=Oa=null,Qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return yp&&n.locale!=="ko"?null:n.data;default:return null}}var gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!gx[t.type]:n==="textarea"}function Ap(t,n,a,r){Zs?Ks?Ks.push(r):Ks=[r]:Zs=r,n=cc(n,"onChange"),0<n.length&&(a=new xl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var co=null,uo=null;function _x(t){lg(t,0)}function Sl(t){var n=ms(t);if(Vt(n))return t}function wp(t,n){if(t==="change")return n}var Rp=!1;if(sa){var xu;if(sa){var yu="oninput"in document;if(!yu){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),yu=typeof Cp.oninput=="function"}xu=yu}else xu=!1;Rp=xu&&(!document.documentMode||9<document.documentMode)}function Dp(){co&&(co.detachEvent("onpropertychange",Up),uo=co=null)}function Up(t){if(t.propertyName==="value"&&Sl(uo)){var n=[];Ap(n,uo,t,uu(t)),pp(_x,n)}}function vx(t,n,a){t==="focusin"?(Dp(),co=n,uo=a,co.attachEvent("onpropertychange",Up)):t==="focusout"&&Dp()}function xx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(uo)}function yx(t,n){if(t==="click")return Sl(n)}function Sx(t,n){if(t==="input"||t==="change")return Sl(n)}function Mx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ri=typeof Object.is=="function"?Object.is:Mx;function fo(t,n){if(ri(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Gt.call(n,u)||!ri(t[u],n[u]))return!1}return!0}function Np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lp(t,n){var a=Np(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Np(a)}}function Op(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Op(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ip(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Je(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Je(t.document)}return n}function Su(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var bx=sa&&"documentMode"in document&&11>=document.documentMode,Js=null,Mu=null,ho=null,bu=!1;function Pp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bu||Js==null||Js!==Je(r)||(r=Js,"selectionStart"in r&&Su(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ho&&fo(ho,r)||(ho=r,r=cc(Mu,"onSelect"),0<r.length&&(n=new xl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Js)))}function _s(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var $s={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionrun:_s("Transition","TransitionRun"),transitionstart:_s("Transition","TransitionStart"),transitioncancel:_s("Transition","TransitionCancel"),transitionend:_s("Transition","TransitionEnd")},Eu={},zp={};sa&&(zp=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function vs(t){if(Eu[t])return Eu[t];if(!$s[t])return t;var n=$s[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in zp)return Eu[t]=n[a];return t}var Bp=vs("animationend"),Fp=vs("animationiteration"),Hp=vs("animationstart"),Ex=vs("transitionrun"),Tx=vs("transitionstart"),Ax=vs("transitioncancel"),Gp=vs("transitionend"),Vp=new Map,Tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tu.push("scrollEnd");function Di(t,n){Vp.set(t,n),ae(n,[t])}var Ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],er=0,Au=0;function bl(){for(var t=er,n=Au=er=0;n<t;){var a=_i[n];_i[n++]=null;var r=_i[n];_i[n++]=null;var u=_i[n];_i[n++]=null;var f=_i[n];if(_i[n++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}f!==0&&kp(a,u,f)}}function El(t,n,a,r){_i[er++]=t,_i[er++]=n,_i[er++]=a,_i[er++]=r,Au|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function wu(t,n,a,r){return El(t,n,a,r),Tl(t)}function xs(t,n){return El(t,null,null,n),Tl(t)}function kp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ie(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function Tl(t){if(50<Io)throw Io=0,zf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var tr={};function wx(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(t,n,a,r){return new wx(t,n,a,r)}function Ru(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ra(t,n){var a=t.alternate;return a===null?(a=oi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Xp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Al(t,n,a,r,u,f){var v=0;if(r=t,typeof t=="function")Ru(t)&&(v=1);else if(typeof t=="string")v=Ny(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case E:return t=oi(31,a,n,u),t.elementType=E,t.lanes=f,t;case C:return ys(a.children,u,f,n);case M:v=8,u|=24;break;case x:return t=oi(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case O:return t=oi(13,a,n,u),t.elementType=O,t.lanes=f,t;case B:return t=oi(19,a,n,u),t.elementType=B,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:v=10;break e;case D:v=9;break e;case U:v=11;break e;case P:v=14;break e;case k:v=16,r=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=oi(v,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function ys(t,n,a,r){return t=oi(7,t,r,n),t.lanes=a,t}function Cu(t,n,a){return t=oi(6,t,null,n),t.lanes=a,t}function Wp(t){var n=oi(18,null,null,0);return n.stateNode=t,n}function Du(t,n,a){return n=oi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var qp=new WeakMap;function vi(t,n){if(typeof t=="object"&&t!==null){var a=qp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:F(n)},qp.set(t,n),n)}return{value:t,source:n,stack:F(n)}}var nr=[],ir=0,wl=null,po=0,xi=[],yi=0,Ia=null,Fi=1,Hi="";function oa(t,n){nr[ir++]=po,nr[ir++]=wl,wl=t,po=n}function Yp(t,n,a){xi[yi++]=Fi,xi[yi++]=Hi,xi[yi++]=Ia,Ia=t;var r=Fi;t=Hi;var u=32-Ie(r)-1;r&=~(1<<u),a+=1;var f=32-Ie(n)+u;if(30<f){var v=u-u%5;f=(r&(1<<v)-1).toString(32),r>>=v,u-=v,Fi=1<<32-Ie(n)+u|a<<u|r,Hi=f+t}else Fi=1<<f|a<<u|r,Hi=t}function Uu(t){t.return!==null&&(oa(t,1),Yp(t,1,0))}function Nu(t){for(;t===wl;)wl=nr[--ir],nr[ir]=null,po=nr[--ir],nr[ir]=null;for(;t===Ia;)Ia=xi[--yi],xi[yi]=null,Hi=xi[--yi],xi[yi]=null,Fi=xi[--yi],xi[yi]=null}function jp(t,n){xi[yi++]=Fi,xi[yi++]=Hi,xi[yi++]=Ia,Fi=n.id,Hi=n.overflow,Ia=t}var zn=null,nn=null,Dt=!1,Pa=null,Si=!1,Lu=Error(s(519));function za(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mo(vi(n,t)),Lu}function Zp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[tn]=t,n[ln]=r,a){case"dialog":Tt("cancel",n),Tt("close",n);break;case"iframe":case"object":case"embed":Tt("load",n);break;case"video":case"audio":for(a=0;a<zo.length;a++)Tt(zo[a],n);break;case"source":Tt("error",n);break;case"img":case"image":case"link":Tt("error",n),Tt("load",n);break;case"details":Tt("toggle",n);break;case"input":Tt("invalid",n),ia(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Tt("invalid",n);break;case"textarea":Tt("invalid",n),On(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||hg(n.textContent,a)?(r.popover!=null&&(Tt("beforetoggle",n),Tt("toggle",n)),r.onScroll!=null&&Tt("scroll",n),r.onScrollEnd!=null&&Tt("scrollend",n),r.onClick!=null&&(n.onclick=aa),n=!0):n=!1,n||za(t,!0)}function Kp(t){for(zn=t.return;zn;)switch(zn.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:zn=zn.return}}function ar(t){if(t!==zn)return!1;if(!Dt)return Kp(t),Dt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Jf(t.type,t.memoizedProps)),a=!a),a&&nn&&za(t),Kp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));nn=Sg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));nn=Sg(t)}else n===27?(n=nn,Qa(t.type)?(t=ih,ih=null,nn=t):nn=n):nn=zn?bi(t.stateNode.nextSibling):null;return!0}function Ss(){nn=zn=null,Dt=!1}function Ou(){var t=Pa;return t!==null&&(ti===null?ti=t:ti.push.apply(ti,t),Pa=null),t}function mo(t){Pa===null?Pa=[t]:Pa.push(t)}var Iu=I(null),Ms=null,la=null;function Ba(t,n,a){ve(Iu,n._currentValue),n._currentValue=a}function ca(t){t._currentValue=Iu.current,ie(Iu)}function Pu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function zu(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Pu(f.return,a,t),r||(v=null);break e}f=A.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Pu(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function sr(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var A=u.type;ri(u.pendingProps.value,v.value)||(t!==null?t.push(A):t=[A])}}else if(u===oe.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Vo):t=[Vo])}u=u.return}t!==null&&zu(n,t,a,r),n.flags|=262144}function Rl(t){for(t=t.firstContext;t!==null;){if(!ri(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function bs(t){Ms=t,la=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Bn(t){return Qp(Ms,t)}function Cl(t,n){return Ms===null&&bs(t),Qp(t,n)}function Qp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},la===null){if(t===null)throw Error(s(308));la=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else la=la.next=n;return a}var Rx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Cx=o.unstable_scheduleCallback,Dx=o.unstable_NormalPriority,gn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bu(){return{controller:new Rx,data:new Map,refCount:0}}function go(t){t.refCount--,t.refCount===0&&Cx(Dx,function(){t.controller.abort()})}var _o=null,Fu=0,rr=0,or=null;function Ux(t,n){if(_o===null){var a=_o=[];Fu=0,rr=kf(),or={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Fu++,n.then(Jp,Jp),n}function Jp(){if(--Fu===0&&_o!==null){or!==null&&(or.status="fulfilled");var t=_o;_o=null,rr=0,or=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Nx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var $p=z.S;z.S=function(t,n){P0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ux(t,n),$p!==null&&$p(t,n)};var Es=I(null);function Hu(){var t=Es.current;return t!==null?t:Jt.pooledCache}function Dl(t,n){n===null?ve(Es,Es.current):ve(Es,n.pool)}function em(){var t=Hu();return t===null?null:{parent:gn._currentValue,pool:t}}var lr=Error(s(460)),Gu=Error(s(474)),Ul=Error(s(542)),Nl={then:function(){}};function tm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function nm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(aa,aa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,am(t),t;default:if(typeof n.status=="string")n.then(aa,aa);else{if(t=Jt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,am(t),t}throw As=n,lr}}function Ts(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(As=a,lr):a}}var As=null;function im(){if(As===null)throw Error(s(459));var t=As;return As=null,t}function am(t){if(t===lr||t===Ul)throw Error(s(483))}var cr=null,vo=0;function Ll(t){var n=vo;return vo+=1,cr===null&&(cr=[]),nm(cr,t,n)}function xo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ol(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function sm(t){function n(Z,X){if(t){var ee=Z.deletions;ee===null?(Z.deletions=[X],Z.flags|=16):ee.push(X)}}function a(Z,X){if(!t)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function r(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function u(Z,X){return Z=ra(Z,X),Z.index=0,Z.sibling=null,Z}function f(Z,X,ee){return Z.index=ee,t?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<X?(Z.flags|=67108866,X):ee):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function v(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,X,ee,_e){return X===null||X.tag!==6?(X=Cu(ee,Z.mode,_e),X.return=Z,X):(X=u(X,ee),X.return=Z,X)}function H(Z,X,ee,_e){var $e=ee.type;return $e===C?me(Z,X,ee.props.children,_e,ee.key):X!==null&&(X.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===k&&Ts($e)===X.type)?(X=u(X,ee.props),xo(X,ee),X.return=Z,X):(X=Al(ee.type,ee.key,ee.props,null,Z.mode,_e),xo(X,ee),X.return=Z,X)}function te(Z,X,ee,_e){return X===null||X.tag!==4||X.stateNode.containerInfo!==ee.containerInfo||X.stateNode.implementation!==ee.implementation?(X=Du(ee,Z.mode,_e),X.return=Z,X):(X=u(X,ee.children||[]),X.return=Z,X)}function me(Z,X,ee,_e,$e){return X===null||X.tag!==7?(X=ys(ee,Z.mode,_e,$e),X.return=Z,X):(X=u(X,ee),X.return=Z,X)}function xe(Z,X,ee){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Cu(""+X,Z.mode,ee),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return ee=Al(X.type,X.key,X.props,null,Z.mode,ee),xo(ee,X),ee.return=Z,ee;case T:return X=Du(X,Z.mode,ee),X.return=Z,X;case k:return X=Ts(X),xe(Z,X,ee)}if(re(X)||Y(X))return X=ys(X,Z.mode,ee,null),X.return=Z,X;if(typeof X.then=="function")return xe(Z,Ll(X),ee);if(X.$$typeof===N)return xe(Z,Cl(Z,X),ee);Ol(Z,X)}return null}function se(Z,X,ee,_e){var $e=X!==null?X.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return $e!==null?null:A(Z,X,""+ee,_e);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case S:return ee.key===$e?H(Z,X,ee,_e):null;case T:return ee.key===$e?te(Z,X,ee,_e):null;case k:return ee=Ts(ee),se(Z,X,ee,_e)}if(re(ee)||Y(ee))return $e!==null?null:me(Z,X,ee,_e,null);if(typeof ee.then=="function")return se(Z,X,Ll(ee),_e);if(ee.$$typeof===N)return se(Z,X,Cl(Z,ee),_e);Ol(Z,ee)}return null}function ce(Z,X,ee,_e,$e){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Z=Z.get(ee)||null,A(X,Z,""+_e,$e);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case S:return Z=Z.get(_e.key===null?ee:_e.key)||null,H(X,Z,_e,$e);case T:return Z=Z.get(_e.key===null?ee:_e.key)||null,te(X,Z,_e,$e);case k:return _e=Ts(_e),ce(Z,X,ee,_e,$e)}if(re(_e)||Y(_e))return Z=Z.get(ee)||null,me(X,Z,_e,$e,null);if(typeof _e.then=="function")return ce(Z,X,ee,Ll(_e),$e);if(_e.$$typeof===N)return ce(Z,X,ee,Cl(X,_e),$e);Ol(X,_e)}return null}function qe(Z,X,ee,_e){for(var $e=null,Pt=null,Ke=X,vt=X=0,Rt=null;Ke!==null&&vt<ee.length;vt++){Ke.index>vt?(Rt=Ke,Ke=null):Rt=Ke.sibling;var zt=se(Z,Ke,ee[vt],_e);if(zt===null){Ke===null&&(Ke=Rt);break}t&&Ke&&zt.alternate===null&&n(Z,Ke),X=f(zt,X,vt),Pt===null?$e=zt:Pt.sibling=zt,Pt=zt,Ke=Rt}if(vt===ee.length)return a(Z,Ke),Dt&&oa(Z,vt),$e;if(Ke===null){for(;vt<ee.length;vt++)Ke=xe(Z,ee[vt],_e),Ke!==null&&(X=f(Ke,X,vt),Pt===null?$e=Ke:Pt.sibling=Ke,Pt=Ke);return Dt&&oa(Z,vt),$e}for(Ke=r(Ke);vt<ee.length;vt++)Rt=ce(Ke,Z,vt,ee[vt],_e),Rt!==null&&(t&&Rt.alternate!==null&&Ke.delete(Rt.key===null?vt:Rt.key),X=f(Rt,X,vt),Pt===null?$e=Rt:Pt.sibling=Rt,Pt=Rt);return t&&Ke.forEach(function(ns){return n(Z,ns)}),Dt&&oa(Z,vt),$e}function it(Z,X,ee,_e){if(ee==null)throw Error(s(151));for(var $e=null,Pt=null,Ke=X,vt=X=0,Rt=null,zt=ee.next();Ke!==null&&!zt.done;vt++,zt=ee.next()){Ke.index>vt?(Rt=Ke,Ke=null):Rt=Ke.sibling;var ns=se(Z,Ke,zt.value,_e);if(ns===null){Ke===null&&(Ke=Rt);break}t&&Ke&&ns.alternate===null&&n(Z,Ke),X=f(ns,X,vt),Pt===null?$e=ns:Pt.sibling=ns,Pt=ns,Ke=Rt}if(zt.done)return a(Z,Ke),Dt&&oa(Z,vt),$e;if(Ke===null){for(;!zt.done;vt++,zt=ee.next())zt=xe(Z,zt.value,_e),zt!==null&&(X=f(zt,X,vt),Pt===null?$e=zt:Pt.sibling=zt,Pt=zt);return Dt&&oa(Z,vt),$e}for(Ke=r(Ke);!zt.done;vt++,zt=ee.next())zt=ce(Ke,Z,vt,zt.value,_e),zt!==null&&(t&&zt.alternate!==null&&Ke.delete(zt.key===null?vt:zt.key),X=f(zt,X,vt),Pt===null?$e=zt:Pt.sibling=zt,Pt=zt);return t&&Ke.forEach(function(ky){return n(Z,ky)}),Dt&&oa(Z,vt),$e}function Zt(Z,X,ee,_e){if(typeof ee=="object"&&ee!==null&&ee.type===C&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case S:e:{for(var $e=ee.key;X!==null;){if(X.key===$e){if($e=ee.type,$e===C){if(X.tag===7){a(Z,X.sibling),_e=u(X,ee.props.children),_e.return=Z,Z=_e;break e}}else if(X.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===k&&Ts($e)===X.type){a(Z,X.sibling),_e=u(X,ee.props),xo(_e,ee),_e.return=Z,Z=_e;break e}a(Z,X);break}else n(Z,X);X=X.sibling}ee.type===C?(_e=ys(ee.props.children,Z.mode,_e,ee.key),_e.return=Z,Z=_e):(_e=Al(ee.type,ee.key,ee.props,null,Z.mode,_e),xo(_e,ee),_e.return=Z,Z=_e)}return v(Z);case T:e:{for($e=ee.key;X!==null;){if(X.key===$e)if(X.tag===4&&X.stateNode.containerInfo===ee.containerInfo&&X.stateNode.implementation===ee.implementation){a(Z,X.sibling),_e=u(X,ee.children||[]),_e.return=Z,Z=_e;break e}else{a(Z,X);break}else n(Z,X);X=X.sibling}_e=Du(ee,Z.mode,_e),_e.return=Z,Z=_e}return v(Z);case k:return ee=Ts(ee),Zt(Z,X,ee,_e)}if(re(ee))return qe(Z,X,ee,_e);if(Y(ee)){if($e=Y(ee),typeof $e!="function")throw Error(s(150));return ee=$e.call(ee),it(Z,X,ee,_e)}if(typeof ee.then=="function")return Zt(Z,X,Ll(ee),_e);if(ee.$$typeof===N)return Zt(Z,X,Cl(Z,ee),_e);Ol(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,X!==null&&X.tag===6?(a(Z,X.sibling),_e=u(X,ee),_e.return=Z,Z=_e):(a(Z,X),_e=Cu(ee,Z.mode,_e),_e.return=Z,Z=_e),v(Z)):a(Z,X)}return function(Z,X,ee,_e){try{vo=0;var $e=Zt(Z,X,ee,_e);return cr=null,$e}catch(Ke){if(Ke===lr||Ke===Ul)throw Ke;var Pt=oi(29,Ke,null,Z.mode);return Pt.lanes=_e,Pt.return=Z,Pt}}}var ws=sm(!0),rm=sm(!1),Fa=!1;function Vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ku(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ga(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ht&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=Tl(t),kp(t,null,a),n}return El(t,r,n,a),Tl(t)}function yo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Qt(t,a)}}function Xu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Wu=!1;function So(){if(Wu){var t=or;if(t!==null)throw t}}function Mo(t,n,a,r){Wu=!1;var u=t.updateQueue;Fa=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,te=H.next;H.next=null,v===null?f=te:v.next=te,v=H;var me=t.alternate;me!==null&&(me=me.updateQueue,A=me.lastBaseUpdate,A!==v&&(A===null?me.firstBaseUpdate=te:A.next=te,me.lastBaseUpdate=H))}if(f!==null){var xe=u.baseState;v=0,me=te=H=null,A=f;do{var se=A.lane&-536870913,ce=se!==A.lane;if(ce?(wt&se)===se:(r&se)===se){se!==0&&se===rr&&(Wu=!0),me!==null&&(me=me.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var qe=t,it=A;se=n;var Zt=a;switch(it.tag){case 1:if(qe=it.payload,typeof qe=="function"){xe=qe.call(Zt,xe,se);break e}xe=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=it.payload,se=typeof qe=="function"?qe.call(Zt,xe,se):qe,se==null)break e;xe=g({},xe,se);break e;case 2:Fa=!0}}se=A.callback,se!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[se]:ce.push(se))}else ce={lane:se,tag:A.tag,payload:A.payload,callback:A.callback,next:null},me===null?(te=me=ce,H=xe):me=me.next=ce,v|=se;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ce=A,A=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);me===null&&(H=xe),u.baseState=H,u.firstBaseUpdate=te,u.lastBaseUpdate=me,f===null&&(u.shared.lanes=0),qa|=v,t.lanes=v,t.memoizedState=xe}}function om(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function lm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)om(a[t],n)}var ur=I(null),Il=I(0);function cm(t,n){t=va,ve(Il,t),ve(ur,n),va=t|n.baseLanes}function qu(){ve(Il,va),ve(ur,ur.current)}function Yu(){va=Il.current,ie(ur),ie(Il)}var li=I(null),Mi=null;function Va(t){var n=t.alternate;ve(hn,hn.current&1),ve(li,t),Mi===null&&(n===null||ur.current!==null||n.memoizedState!==null)&&(Mi=t)}function ju(t){ve(hn,hn.current),ve(li,t),Mi===null&&(Mi=t)}function um(t){t.tag===22?(ve(hn,hn.current),ve(li,t),Mi===null&&(Mi=t)):ka()}function ka(){ve(hn,hn.current),ve(li,li.current)}function ci(t){ie(li),Mi===t&&(Mi=null),ie(hn)}var hn=I(0);function Pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||th(a)||nh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ua=0,pt=null,Yt=null,_n=null,zl=!1,fr=!1,Rs=!1,Bl=0,bo=0,hr=null,Lx=0;function cn(){throw Error(s(321))}function Zu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ri(t[a],n[a]))return!1;return!0}function Ku(t,n,a,r,u,f){return ua=f,pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?Ym:hf,Rs=!1,f=a(r,u),Rs=!1,fr&&(f=hm(n,a,r,u)),fm(t),f}function fm(t){z.H=Ao;var n=Yt!==null&&Yt.next!==null;if(ua=0,_n=Yt=pt=null,zl=!1,bo=0,hr=null,n)throw Error(s(300));t===null||vn||(t=t.dependencies,t!==null&&Rl(t)&&(vn=!0))}function hm(t,n,a,r){pt=t;var u=0;do{if(fr&&(hr=null),bo=0,fr=!1,25<=u)throw Error(s(301));if(u+=1,_n=Yt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=jm,f=n(a,r)}while(fr);return f}function Ox(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?Eo(n):n,t=t.useState()[0],(Yt!==null?Yt.memoizedState:null)!==t&&(pt.flags|=1024),n}function Qu(){var t=Bl!==0;return Bl=0,t}function Ju(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function $u(t){if(zl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}zl=!1}ua=0,_n=Yt=pt=null,fr=!1,bo=Bl=0,hr=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?pt.memoizedState=_n=t:_n=_n.next=t,_n}function dn(){if(Yt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var n=_n===null?pt.memoizedState:_n.next;if(n!==null)_n=n,Yt=t;else{if(t===null)throw pt.alternate===null?Error(s(467)):Error(s(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},_n===null?pt.memoizedState=_n=t:_n=_n.next=t}return _n}function Fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(t){var n=bo;return bo+=1,hr===null&&(hr=[]),t=nm(hr,t,n),n=pt,(_n===null?n.memoizedState:_n.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Ym:hf),t}function Hl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Eo(t);if(t.$$typeof===N)return Bn(t)}throw Error(s(438,String(t)))}function ef(t){var n=null,a=pt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=pt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Fl(),pt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=R;return n.index++,a}function fa(t,n){return typeof n=="function"?n(t):n}function Gl(t){var n=dn();return tf(n,Yt,t)}function tf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var A=v=null,H=null,te=n,me=!1;do{var xe=te.lane&-536870913;if(xe!==te.lane?(wt&xe)===xe:(ua&xe)===xe){var se=te.revertLane;if(se===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),xe===rr&&(me=!0);else if((ua&se)===se){te=te.next,se===rr&&(me=!0);continue}else xe={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(A=H=xe,v=f):H=H.next=xe,pt.lanes|=se,qa|=se;xe=te.action,Rs&&a(f,xe),f=te.hasEagerState?te.eagerState:a(f,xe)}else se={lane:xe,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(A=H=se,v=f):H=H.next=se,pt.lanes|=xe,qa|=xe;te=te.next}while(te!==null&&te!==n);if(H===null?v=f:H.next=A,!ri(f,t.memoizedState)&&(vn=!0,me&&(a=or,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=H,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function nf(t){var n=dn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);ri(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function dm(t,n,a){var r=pt,u=dn(),f=Dt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!ri((Yt||u).memoizedState,a);if(v&&(u.memoizedState=a,vn=!0),u=u.queue,rf(gm.bind(null,r,u,t),[t]),u.getSnapshot!==n||v||_n!==null&&_n.memoizedState.tag&1){if(r.flags|=2048,dr(9,{destroy:void 0},mm.bind(null,r,u,a,n),null),Jt===null)throw Error(s(349));f||(ua&127)!==0||pm(r,n,a)}return a}function pm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pt.updateQueue,n===null?(n=Fl(),pt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function mm(t,n,a,r){n.value=a,n.getSnapshot=r,_m(n)&&vm(t)}function gm(t,n,a){return a(function(){_m(n)&&vm(t)})}function _m(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ri(t,a)}catch{return!0}}function vm(t){var n=xs(t,2);n!==null&&ni(n,t,2)}function af(t){var n=Yn();if(typeof t=="function"){var a=t;if(t=a(),Rs){Fe(!0);try{a()}finally{Fe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},n}function xm(t,n,a,r){return t.baseState=a,tf(t,Yt,typeof r=="function"?r:fa)}function Ix(t,n,a,r,u){if(Xl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};z.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,ym(n,f)):(f.next=a.next,n.pending=a.next=f)}}function ym(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=z.T,v={};z.T=v;try{var A=a(u,r),H=z.S;H!==null&&H(v,A),Sm(t,n,A)}catch(te){sf(t,n,te)}finally{f!==null&&v.types!==null&&(f.types=v.types),z.T=f}}else try{f=a(u,r),Sm(t,n,f)}catch(te){sf(t,n,te)}}function Sm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Mm(t,n,r)},function(r){return sf(t,n,r)}):Mm(t,n,a)}function Mm(t,n,a){n.status="fulfilled",n.value=a,bm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,ym(t,a)))}function sf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,bm(n),n=n.next;while(n!==r)}t.action=null}function bm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Em(t,n){return n}function Tm(t,n){if(Dt){var a=Jt.formState;if(a!==null){e:{var r=pt;if(Dt){if(nn){t:{for(var u=nn,f=Si;u.nodeType!==8;){if(!f){u=null;break t}if(u=bi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){nn=bi(u.nextSibling),r=u.data==="F!";break e}}za(r)}r=!1}r&&(n=a[0])}}return a=Yn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Em,lastRenderedState:n},a.queue=r,a=Xm.bind(null,pt,r),r.dispatch=a,r=af(!1),f=ff.bind(null,pt,!1,r.queue),r=Yn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=Ix.bind(null,pt,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function Am(t){var n=dn();return wm(n,Yt,t)}function wm(t,n,a){if(n=tf(t,n,Em)[0],t=Gl(fa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Eo(n)}catch(v){throw v===lr?Ul:v}else r=n;n=dn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(pt.flags|=2048,dr(9,{destroy:void 0},Px.bind(null,u,a),null)),[r,f,t]}function Px(t,n){t.action=n}function Rm(t){var n=dn(),a=Yt;if(a!==null)return wm(n,a,t);dn(),n=n.memoizedState,a=dn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function dr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=pt.updateQueue,n===null&&(n=Fl(),pt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Cm(){return dn().memoizedState}function Vl(t,n,a,r){var u=Yn();pt.flags|=t,u.memoizedState=dr(1|n,{destroy:void 0},a,r===void 0?null:r)}function kl(t,n,a,r){var u=dn();r=r===void 0?null:r;var f=u.memoizedState.inst;Yt!==null&&r!==null&&Zu(r,Yt.memoizedState.deps)?u.memoizedState=dr(n,f,a,r):(pt.flags|=t,u.memoizedState=dr(1|n,f,a,r))}function Dm(t,n){Vl(8390656,8,t,n)}function rf(t,n){kl(2048,8,t,n)}function zx(t){pt.flags|=4;var n=pt.updateQueue;if(n===null)n=Fl(),pt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Um(t){var n=dn().memoizedState;return zx({ref:n,nextImpl:t}),function(){if((Ht&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Nm(t,n){return kl(4,2,t,n)}function Lm(t,n){return kl(4,4,t,n)}function Om(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Im(t,n,a){a=a!=null?a.concat([t]):null,kl(4,4,Om.bind(null,n,t),a)}function of(){}function Pm(t,n){var a=dn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Zu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function zm(t,n){var a=dn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Zu(n,r[1]))return r[0];if(r=t(),Rs){Fe(!0);try{t()}finally{Fe(!1)}}return a.memoizedState=[r,n],r}function lf(t,n,a){return a===void 0||(ua&1073741824)!==0&&(wt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=B0(),pt.lanes|=t,qa|=t,a)}function Bm(t,n,a,r){return ri(a,n)?a:ur.current!==null?(t=lf(t,a,r),ri(t,n)||(vn=!0),t):(ua&42)===0||(ua&1073741824)!==0&&(wt&261930)===0?(vn=!0,t.memoizedState=a):(t=B0(),pt.lanes|=t,qa|=t,n)}function Fm(t,n,a,r,u){var f=V.p;V.p=f!==0&&8>f?f:8;var v=z.T,A={};z.T=A,ff(t,!1,n,a);try{var H=u(),te=z.S;if(te!==null&&te(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var me=Nx(H,r);To(t,n,me,hi(t))}else To(t,n,r,hi(t))}catch(xe){To(t,n,{then:function(){},status:"rejected",reason:xe},hi())}finally{V.p=f,v!==null&&A.types!==null&&(v.types=A.types),z.T=v}}function Bx(){}function cf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=Hm(t).queue;Fm(t,u,n,ne,a===null?Bx:function(){return Gm(t),a(r)})}function Hm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:ne},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Gm(t){var n=Hm(t);n.next===null&&(n=t.alternate.memoizedState),To(t,n.next.queue,{},hi())}function uf(){return Bn(Vo)}function Vm(){return dn().memoizedState}function km(){return dn().memoizedState}function Fx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=hi();t=Ha(a);var r=Ga(n,t,a);r!==null&&(ni(r,n,a),yo(r,n,a)),n={cache:Bu()},t.payload=n;return}n=n.return}}function Hx(t,n,a){var r=hi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Xl(t)?Wm(n,a):(a=wu(t,n,a,r),a!==null&&(ni(a,t,r),qm(a,n,r)))}function Xm(t,n,a){var r=hi();To(t,n,a,r)}function To(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xl(t))Wm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,A=f(v,a);if(u.hasEagerState=!0,u.eagerState=A,ri(A,v))return El(t,n,u,0),Jt===null&&bl(),!1}catch{}if(a=wu(t,n,u,r),a!==null)return ni(a,t,r),qm(a,n,r),!0}return!1}function ff(t,n,a,r){if(r={lane:2,revertLane:kf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Xl(t)){if(n)throw Error(s(479))}else n=wu(t,a,r,2),n!==null&&ni(n,t,2)}function Xl(t){var n=t.alternate;return t===pt||n!==null&&n===pt}function Wm(t,n){fr=zl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function qm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Qt(t,a)}}var Ao={readContext:Bn,use:Hl,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};Ao.useEffectEvent=cn;var Ym={readContext:Bn,use:Hl,useCallback:function(t,n){return Yn().memoizedState=[t,n===void 0?null:n],t},useContext:Bn,useEffect:Dm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Vl(4194308,4,Om.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Vl(4194308,4,t,n)},useInsertionEffect:function(t,n){Vl(4,2,t,n)},useMemo:function(t,n){var a=Yn();n=n===void 0?null:n;var r=t();if(Rs){Fe(!0);try{t()}finally{Fe(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Yn();if(a!==void 0){var u=a(n);if(Rs){Fe(!0);try{a(n)}finally{Fe(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=Hx.bind(null,pt,t),[r.memoizedState,t]},useRef:function(t){var n=Yn();return t={current:t},n.memoizedState=t},useState:function(t){t=af(t);var n=t.queue,a=Xm.bind(null,pt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:of,useDeferredValue:function(t,n){var a=Yn();return lf(a,t,n)},useTransition:function(){var t=af(!1);return t=Fm.bind(null,pt,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=pt,u=Yn();if(Dt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Jt===null)throw Error(s(349));(wt&127)!==0||pm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Dm(gm.bind(null,r,f,t),[t]),r.flags|=2048,dr(9,{destroy:void 0},mm.bind(null,r,f,a,n),null),a},useId:function(){var t=Yn(),n=Jt.identifierPrefix;if(Dt){var a=Hi,r=Fi;a=(r&~(1<<32-Ie(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Lx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:uf,useFormState:Tm,useActionState:Tm,useOptimistic:function(t){var n=Yn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ff.bind(null,pt,!0,a),a.dispatch=n,[t,n]},useMemoCache:ef,useCacheRefresh:function(){return Yn().memoizedState=Fx.bind(null,pt)},useEffectEvent:function(t){var n=Yn(),a={impl:t};return n.memoizedState=a,function(){if((Ht&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},hf={readContext:Bn,use:Hl,useCallback:Pm,useContext:Bn,useEffect:rf,useImperativeHandle:Im,useInsertionEffect:Nm,useLayoutEffect:Lm,useMemo:zm,useReducer:Gl,useRef:Cm,useState:function(){return Gl(fa)},useDebugValue:of,useDeferredValue:function(t,n){var a=dn();return Bm(a,Yt.memoizedState,t,n)},useTransition:function(){var t=Gl(fa)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:Eo(t),n]},useSyncExternalStore:dm,useId:Vm,useHostTransitionStatus:uf,useFormState:Am,useActionState:Am,useOptimistic:function(t,n){var a=dn();return xm(a,Yt,t,n)},useMemoCache:ef,useCacheRefresh:km};hf.useEffectEvent=Um;var jm={readContext:Bn,use:Hl,useCallback:Pm,useContext:Bn,useEffect:rf,useImperativeHandle:Im,useInsertionEffect:Nm,useLayoutEffect:Lm,useMemo:zm,useReducer:nf,useRef:Cm,useState:function(){return nf(fa)},useDebugValue:of,useDeferredValue:function(t,n){var a=dn();return Yt===null?lf(a,t,n):Bm(a,Yt.memoizedState,t,n)},useTransition:function(){var t=nf(fa)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:Eo(t),n]},useSyncExternalStore:dm,useId:Vm,useHostTransitionStatus:uf,useFormState:Rm,useActionState:Rm,useOptimistic:function(t,n){var a=dn();return Yt!==null?xm(a,Yt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ef,useCacheRefresh:km};jm.useEffectEvent=Um;function df(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var pf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=hi(),u=Ha(r);u.payload=n,a!=null&&(u.callback=a),n=Ga(t,u,r),n!==null&&(ni(n,t,r),yo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=hi(),u=Ha(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ga(t,u,r),n!==null&&(ni(n,t,r),yo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=hi(),r=Ha(a);r.tag=2,n!=null&&(r.callback=n),n=Ga(t,r,a),n!==null&&(ni(n,t,a),yo(n,t,a))}};function Zm(t,n,a,r,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!fo(a,r)||!fo(u,f):!0}function Km(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&pf.enqueueReplaceState(n,n.state,null)}function Cs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Qm(t){Ml(t)}function Jm(t){console.error(t)}function $m(t){Ml(t)}function Wl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function e0(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function mf(t,n,a){return a=Ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Wl(t,n)},a}function t0(t){return t=Ha(t),t.tag=3,t}function n0(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){e0(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){e0(n,a,r),typeof u!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function Gx(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&sr(n,a,u,!0),a=li.current,a!==null){switch(a.tag){case 31:case 13:return Mi===null?ic():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===Nl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Hf(t,r,u)),!1;case 22:return a.flags|=65536,r===Nl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Hf(t,r,u)),!1}throw Error(s(435,a.tag))}return Hf(t,r,u),ic(),!1}if(Dt)return n=li.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Lu&&(t=Error(s(422),{cause:r}),mo(vi(t,a)))):(r!==Lu&&(n=Error(s(423),{cause:r}),mo(vi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=vi(r,a),u=mf(t.stateNode,r,u),Xu(t,u),un!==4&&(un=2)),!1;var f=Error(s(520),{cause:r});if(f=vi(f,a),Oo===null?Oo=[f]:Oo.push(f),un!==4&&(un=2),n===null)return!0;r=vi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=mf(a.stateNode,r,t),Xu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ya===null||!Ya.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=t0(u),n0(u,t,a,r),Xu(a,u),!1}a=a.return}while(a!==null);return!1}var gf=Error(s(461)),vn=!1;function Fn(t,n,a,r){n.child=t===null?rm(n,null,a,r):ws(n,t.child,a,r)}function i0(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var A in r)A!=="ref"&&(v[A]=r[A])}else v=r;return bs(n),r=Ku(t,n,a,v,f,u),A=Qu(),t!==null&&!vn?(Ju(t,n,u),ha(t,n,u)):(Dt&&A&&Uu(n),n.flags|=1,Fn(t,n,r,u),n.child)}function a0(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!Ru(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,s0(t,n,f,r,u)):(t=Al(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Ef(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:fo,a(v,r)&&t.ref===n.ref)return ha(t,n,u)}return n.flags|=1,t=ra(f,r),t.ref=n.ref,t.return=n,n.child=t}function s0(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(fo(f,r)&&t.ref===n.ref)if(vn=!1,n.pendingProps=r=f,Ef(t,u))(t.flags&131072)!==0&&(vn=!0);else return n.lanes=t.lanes,ha(t,n,u)}return _f(t,n,a,r,u)}function r0(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return o0(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Dl(n,f!==null?f.cachePool:null),f!==null?cm(n,f):qu(),um(n);else return r=n.lanes=536870912,o0(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(Dl(n,f.cachePool),cm(n,f),ka(),n.memoizedState=null):(t!==null&&Dl(n,null),qu(),ka());return Fn(t,n,u,a),n.child}function wo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function o0(t,n,a,r,u){var f=Hu();return f=f===null?null:{parent:gn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Dl(n,null),qu(),um(n),t!==null&&sr(t,n,r,!0),n.childLanes=u,null}function ql(t,n){return n=jl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function l0(t,n,a){return ws(n,t.child,null,a),t=ql(n,n.pendingProps),t.flags|=2,ci(n),n.memoizedState=null,t}function Vx(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Dt){if(r.mode==="hidden")return t=ql(n,r),n.lanes=536870912,wo(null,t);if(ju(n),(t=nn)?(t=yg(t,Si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Wp(t),a.return=n,n.child=a,zn=n,nn=null)):t=null,t===null)throw za(n);return n.lanes=536870912,null}return ql(n,r)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(ju(n),u)if(n.flags&256)n.flags&=-257,n=l0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(vn||sr(t,n,a,!1),u=(a&t.childLanes)!==0,vn||u){if(r=Jt,r!==null&&(v=Sn(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,xs(t,v),ni(r,t,v),gf;ic(),n=l0(t,n,a)}else t=f.treeContext,nn=bi(v.nextSibling),zn=n,Dt=!0,Pa=null,Si=!1,t!==null&&jp(n,t),n=ql(n,r),n.flags|=4096;return n}return t=ra(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Yl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function _f(t,n,a,r,u){return bs(n),a=Ku(t,n,a,r,void 0,u),r=Qu(),t!==null&&!vn?(Ju(t,n,u),ha(t,n,u)):(Dt&&r&&Uu(n),n.flags|=1,Fn(t,n,a,u),n.child)}function c0(t,n,a,r,u,f){return bs(n),n.updateQueue=null,a=hm(n,r,a,u),fm(t),r=Qu(),t!==null&&!vn?(Ju(t,n,f),ha(t,n,f)):(Dt&&r&&Uu(n),n.flags|=1,Fn(t,n,a,f),n.child)}function u0(t,n,a,r,u){if(bs(n),n.stateNode===null){var f=tr,v=a.contextType;typeof v=="object"&&v!==null&&(f=Bn(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=pf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Vu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Bn(v):tr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(df(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&pf.enqueueReplaceState(f,f.state,null),Mo(n,r,f,u),So(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,H=Cs(a,A);f.props=H;var te=f.context,me=a.contextType;v=tr,typeof me=="object"&&me!==null&&(v=Bn(me));var xe=a.getDerivedStateFromProps;me=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||te!==v)&&Km(n,f,r,v),Fa=!1;var se=n.memoizedState;f.state=se,Mo(n,r,f,u),So(),te=n.memoizedState,A||se!==te||Fa?(typeof xe=="function"&&(df(n,a,xe,r),te=n.memoizedState),(H=Fa||Zm(n,a,H,r,se,te,v))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=te),f.props=r,f.state=te,f.context=v,r=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,ku(t,n),v=n.memoizedProps,me=Cs(a,v),f.props=me,xe=n.pendingProps,se=f.context,te=a.contextType,H=tr,typeof te=="object"&&te!==null&&(H=Bn(te)),A=a.getDerivedStateFromProps,(te=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==xe||se!==H)&&Km(n,f,r,H),Fa=!1,se=n.memoizedState,f.state=se,Mo(n,r,f,u),So();var ce=n.memoizedState;v!==xe||se!==ce||Fa||t!==null&&t.dependencies!==null&&Rl(t.dependencies)?(typeof A=="function"&&(df(n,a,A,r),ce=n.memoizedState),(me=Fa||Zm(n,a,me,r,se,ce,H)||t!==null&&t.dependencies!==null&&Rl(t.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ce,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ce,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ce),f.props=r,f.state=ce,f.context=H,r=me):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Yl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=ws(n,t.child,null,u),n.child=ws(n,null,a,u)):Fn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ha(t,n,u),t}function f0(t,n,a,r){return Ss(),n.flags|=256,Fn(t,n,a,r),n.child}var vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xf(t){return{baseLanes:t,cachePool:em()}}function yf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=fi),t}function h0(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Dt){if(u?Va(n):ka(),(t=nn)?(t=yg(t,Si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Wp(t),a.return=n,n.child=a,zn=n,nn=null)):t=null,t===null)throw za(n);return nh(t)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,u?(ka(),u=n.mode,A=jl({mode:"hidden",children:A},u),r=ys(r,u,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=xf(a),r.childLanes=yf(t,v,a),n.memoizedState=vf,wo(null,r)):(Va(n),Sf(n,A))}var H=t.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(f)n.flags&256?(Va(n),n.flags&=-257,n=Mf(t,n,a)):n.memoizedState!==null?(ka(),n.child=t.child,n.flags|=128,n=null):(ka(),A=r.fallback,u=n.mode,r=jl({mode:"visible",children:r.children},u),A=ys(A,u,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,ws(n,t.child,null,a),r=n.child,r.memoizedState=xf(a),r.childLanes=yf(t,v,a),n.memoizedState=vf,n=wo(null,r));else if(Va(n),nh(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var te=v.dgst;v=te,r=Error(s(419)),r.stack="",r.digest=v,mo({value:r,source:null,stack:null}),n=Mf(t,n,a)}else if(vn||sr(t,n,a,!1),v=(a&t.childLanes)!==0,vn||v){if(v=Jt,v!==null&&(r=Sn(v,a),r!==0&&r!==H.retryLane))throw H.retryLane=r,xs(t,r),ni(v,t,r),gf;th(A)||ic(),n=Mf(t,n,a)}else th(A)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,nn=bi(A.nextSibling),zn=n,Dt=!0,Pa=null,Si=!1,t!==null&&jp(n,t),n=Sf(n,r.children),n.flags|=4096);return n}return u?(ka(),A=r.fallback,u=n.mode,H=t.child,te=H.sibling,r=ra(H,{mode:"hidden",children:r.children}),r.subtreeFlags=H.subtreeFlags&65011712,te!==null?A=ra(te,A):(A=ys(A,u,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,wo(null,r),r=n.child,A=t.child.memoizedState,A===null?A=xf(a):(u=A.cachePool,u!==null?(H=gn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=em(),A={baseLanes:A.baseLanes|a,cachePool:u}),r.memoizedState=A,r.childLanes=yf(t,v,a),n.memoizedState=vf,wo(t.child,r)):(Va(n),a=t.child,t=a.sibling,a=ra(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function Sf(t,n){return n=jl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function jl(t,n){return t=oi(22,t,null,n),t.lanes=0,t}function Mf(t,n,a){return ws(n,t.child,null,a),t=Sf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function d0(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Pu(t.return,n,a)}function bf(t,n,a,r,u,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function p0(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var v=hn.current,A=(v&2)!==0;if(A?(v=v&1|2,n.flags|=128):v&=1,ve(hn,v),Fn(t,n,r,a),r=Dt?po:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&d0(t,a,n);else if(t.tag===19)d0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Pl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),bf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Pl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}bf(n,!0,a,null,f,r);break;case"together":bf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ha(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),qa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(sr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ra(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ra(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Ef(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Rl(t)))}function kx(t,n,a){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),Ba(n,gn,t.memoizedState.cache),Ss();break;case 27:case 5:He(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:Ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ju(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?h0(t,n,a):(Va(n),t=ha(t,n,a),t!==null?t.sibling:null);Va(n);break;case 19:var u=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(sr(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return p0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ve(hn,hn.current),r)break;return null;case 22:return n.lanes=0,r0(t,n,a,n.pendingProps);case 24:Ba(n,gn,t.memoizedState.cache)}return ha(t,n,a)}function m0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)vn=!0;else{if(!Ef(t,a)&&(n.flags&128)===0)return vn=!1,kx(t,n,a);vn=(t.flags&131072)!==0}else vn=!1,Dt&&(n.flags&1048576)!==0&&Yp(n,po,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(t=Ts(n.elementType),n.type=t,typeof t=="function")Ru(t)?(r=Cs(t,r),n.tag=1,n=u0(null,n,t,r,a)):(n.tag=0,n=_f(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===U){n.tag=11,n=i0(null,n,t,r,a);break e}else if(u===P){n.tag=14,n=a0(null,n,t,r,a);break e}}throw n=fe(t)||t,Error(s(306,n,""))}}return n;case 0:return _f(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Cs(r,n.pendingProps),u0(t,n,r,u,a);case 3:e:{if(De(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,ku(t,n),Mo(n,r,null,a);var v=n.memoizedState;if(r=v.cache,Ba(n,gn,r),r!==f.cache&&zu(n,[gn],a,!0),So(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=f0(t,n,r,a);break e}else if(r!==u){u=vi(Error(s(424)),n),mo(u),n=f0(t,n,r,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,nn=bi(t.firstChild),zn=n,Dt=!0,Pa=null,Si=!0,a=rm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ss(),r===u){n=ha(t,n,a);break e}Fn(t,n,r,a)}n=n.child}return n;case 26:return Yl(t,n),t===null?(a=Ag(n.type,null,n.pendingProps,null))?n.memoizedState=a:Dt||(a=n.type,t=n.pendingProps,r=uc($.current).createElement(a),r[tn]=n,r[ln]=t,Hn(r,a,t),w(r),n.stateNode=r):n.memoizedState=Ag(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return He(n),t===null&&Dt&&(r=n.stateNode=bg(n.type,n.pendingProps,$.current),zn=n,Si=!0,u=nn,Qa(n.type)?(ih=u,nn=bi(r.firstChild)):nn=u),Fn(t,n,n.pendingProps.children,a),Yl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Dt&&((u=r=nn)&&(r=xy(r,n.type,n.pendingProps,Si),r!==null?(n.stateNode=r,zn=n,nn=bi(r.firstChild),Si=!1,u=!0):u=!1),u||za(n)),He(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,r=f.children,Jf(u,f)?r=null:v!==null&&Jf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Ku(t,n,Ox,null,null,a),Vo._currentValue=u),Yl(t,n),Fn(t,n,r,a),n.child;case 6:return t===null&&Dt&&((t=a=nn)&&(a=yy(a,n.pendingProps,Si),a!==null?(n.stateNode=a,zn=n,nn=null,t=!0):t=!1),t||za(n)),null;case 13:return h0(t,n,a);case 4:return De(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ws(n,null,r,a):Fn(t,n,r,a),n.child;case 11:return i0(t,n,n.type,n.pendingProps,a);case 7:return Fn(t,n,n.pendingProps,a),n.child;case 8:return Fn(t,n,n.pendingProps.children,a),n.child;case 12:return Fn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ba(n,n.type,r.value),Fn(t,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,bs(n),u=Bn(u),r=r(u),n.flags|=1,Fn(t,n,r,a),n.child;case 14:return a0(t,n,n.type,n.pendingProps,a);case 15:return s0(t,n,n.type,n.pendingProps,a);case 19:return p0(t,n,a);case 31:return Vx(t,n,a);case 22:return r0(t,n,a,n.pendingProps);case 24:return bs(n),r=Bn(gn),t===null?(u=Hu(),u===null&&(u=Jt,f=Bu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Vu(n),Ba(n,gn,u)):((t.lanes&a)!==0&&(ku(t,n),Mo(n,null,null,a),So()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ba(n,gn,r)):(r=f.cache,Ba(n,gn,r),r!==u.cache&&zu(n,[gn],a,!0))),Fn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function da(t){t.flags|=4}function Tf(t,n,a,r,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(V0())t.flags|=8192;else throw As=Nl,Gu}else t.flags&=-16777217}function g0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ug(n))if(V0())t.flags|=8192;else throw As=Nl,Gu}function Zl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Qe():536870912,t.lanes|=n,_r|=n)}function Ro(t,n){if(!Dt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function an(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Xx(t,n,a){var r=n.pendingProps;switch(Nu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ca(gn),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ar(n)?da(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ou())),an(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(da(n),f!==null?(an(n),g0(n,f)):(an(n),Tf(n,u,null,r,a))):f?f!==t.memoizedState?(da(n),an(n),g0(n,f)):(an(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&da(n),an(n),Tf(n,u,t,r,a)),null;case 27:if(ut(n),a=$.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&da(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return an(n),null}t=Ce.current,ar(n)?Zp(n):(t=bg(u,r,a),n.stateNode=t,da(n))}return an(n),null;case 5:if(ut(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&da(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return an(n),null}if(f=Ce.current,ar(n))Zp(n);else{var v=uc($.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(u,{is:r.is}):v.createElement(u)}}f[tn]=n,f[ln]=r;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Hn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&da(n)}}return an(n),Tf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&da(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=$.current,ar(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=zn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[tn]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||hg(t.nodeValue,a)),t||za(n,!0)}else t=uc(t).createTextNode(r),t[tn]=n,n.stateNode=t}return an(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=ar(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[tn]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),t=!1}else a=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ci(n),n):(ci(n),null);if((n.flags&128)!==0)throw Error(s(558))}return an(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ar(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[tn]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),u=!1}else u=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ci(n),n):(ci(n),null)}return ci(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Zl(n,n.updateQueue),an(n),null);case 4:return ke(),t===null&&Yf(n.stateNode.containerInfo),an(n),null;case 10:return ca(n.type),an(n),null;case 19:if(ie(hn),r=n.memoizedState,r===null)return an(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)Ro(r,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Pl(t),f!==null){for(n.flags|=128,Ro(r,!1),t=f.updateQueue,n.updateQueue=t,Zl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Xp(a,t),a=a.sibling;return ve(hn,hn.current&1|2),Dt&&oa(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&b()>ec&&(n.flags|=128,u=!0,Ro(r,!1),n.lanes=4194304)}else{if(!u)if(t=Pl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Zl(n,t),Ro(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Dt)return an(n),null}else 2*b()-r.renderingStartTime>ec&&a!==536870912&&(n.flags|=128,u=!0,Ro(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=b(),t.sibling=null,a=hn.current,ve(hn,u?a&1|2:a&1),Dt&&oa(n,r.treeForkCount),t):(an(n),null);case 22:case 23:return ci(n),Yu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),a=n.updateQueue,a!==null&&Zl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&ie(Es),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ca(gn),an(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Wx(t,n){switch(Nu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ca(gn),ke(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ut(n),null;case 31:if(n.memoizedState!==null){if(ci(n),n.alternate===null)throw Error(s(340));Ss()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ci(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ss()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ie(hn),null;case 4:return ke(),null;case 10:return ca(n.type),null;case 22:case 23:return ci(n),Yu(),t!==null&&ie(Es),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ca(gn),null;case 25:return null;default:return null}}function _0(t,n){switch(Nu(n),n.tag){case 3:ca(gn),ke();break;case 26:case 27:case 5:ut(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&ci(n);break;case 13:ci(n);break;case 19:ie(hn);break;case 10:ca(n.type);break;case 22:case 23:ci(n),Yu(),t!==null&&ie(Es);break;case 24:ca(gn)}}function Co(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==u)}}catch(A){Wt(n,n.return,A)}}function Xa(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var v=r.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,u=n;var H=a,te=A;try{te()}catch(me){Wt(u,H,me)}}}r=r.next}while(r!==f)}}catch(me){Wt(n,n.return,me)}}function v0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{lm(n,a)}catch(r){Wt(t,t.return,r)}}}function x0(t,n,a){a.props=Cs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Wt(t,n,r)}}function Do(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(u){Wt(t,n,u)}}function Gi(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Wt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Wt(t,n,u)}else a.current=null}function y0(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Wt(t,t.return,u)}}function Af(t,n,a){try{var r=t.stateNode;dy(r,t.type,a,n),r[ln]=n}catch(u){Wt(t,t.return,u)}}function S0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Qa(t.type)||t.tag===4}function wf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||S0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=aa));else if(r!==4&&(r===27&&Qa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Rf(t,n,a),t=t.sibling;t!==null;)Rf(t,n,a),t=t.sibling}function Kl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Qa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Kl(t,n,a),t=t.sibling;t!==null;)Kl(t,n,a),t=t.sibling}function M0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Hn(n,r,a),n[tn]=t,n[ln]=a}catch(f){Wt(t,t.return,f)}}var pa=!1,xn=!1,Cf=!1,b0=typeof WeakSet=="function"?WeakSet:Set,Cn=null;function qx(t,n){if(t=t.containerInfo,Kf=_c,t=Ip(t),Su(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,A=-1,H=-1,te=0,me=0,xe=t,se=null;t:for(;;){for(var ce;xe!==a||u!==0&&xe.nodeType!==3||(A=v+u),xe!==f||r!==0&&xe.nodeType!==3||(H=v+r),xe.nodeType===3&&(v+=xe.nodeValue.length),(ce=xe.firstChild)!==null;)se=xe,xe=ce;for(;;){if(xe===t)break t;if(se===a&&++te===u&&(A=v),se===f&&++me===r&&(H=v),(ce=xe.nextSibling)!==null)break;xe=se,se=xe.parentNode}xe=ce}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qf={focusedElem:t,selectionRange:a},_c=!1,Cn=n;Cn!==null;)if(n=Cn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Cn=t;else for(;Cn!==null;){switch(n=Cn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var qe=Cs(a.type,u);t=r.getSnapshotBeforeUpdate(qe,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(it){Wt(a,a.return,it)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)eh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":eh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Cn=t;break}Cn=n.return}}function E0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ga(t,a),r&4&&Co(5,a);break;case 1:if(ga(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Wt(a,a.return,v)}else{var u=Cs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Wt(a,a.return,v)}}r&64&&v0(a),r&512&&Do(a,a.return);break;case 3:if(ga(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{lm(t,n)}catch(v){Wt(a,a.return,v)}}break;case 27:n===null&&r&4&&M0(a);case 26:case 5:ga(t,a),n===null&&r&4&&y0(a),r&512&&Do(a,a.return);break;case 12:ga(t,a);break;case 31:ga(t,a),r&4&&w0(t,a);break;case 13:ga(t,a),r&4&&R0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ty.bind(null,a),Sy(t,a))));break;case 22:if(r=a.memoizedState!==null||pa,!r){n=n!==null&&n.memoizedState!==null||xn,u=pa;var f=xn;pa=r,(xn=n)&&!f?_a(t,a,(a.subtreeFlags&8772)!==0):ga(t,a),pa=u,xn=f}break;case 30:break;default:ga(t,a)}}function T0(t){var n=t.alternate;n!==null&&(t.alternate=null,T0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&io(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,Jn=!1;function ma(t,n,a){for(a=a.child;a!==null;)A0(t,n,a),a=a.sibling}function A0(t,n,a){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Te,a)}catch{}switch(a.tag){case 26:xn||Gi(a,n),ma(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xn||Gi(a,n);var r=rn,u=Jn;Qa(a.type)&&(rn=a.stateNode,Jn=!1),ma(t,n,a),Fo(a.stateNode),rn=r,Jn=u;break;case 5:xn||Gi(a,n);case 6:if(r=rn,u=Jn,rn=null,ma(t,n,a),rn=r,Jn=u,rn!==null)if(Jn)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode)}catch(f){Wt(a,n,f)}else try{rn.removeChild(a.stateNode)}catch(f){Wt(a,n,f)}break;case 18:rn!==null&&(Jn?(t=rn,vg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Tr(t)):vg(rn,a.stateNode));break;case 4:r=rn,u=Jn,rn=a.stateNode.containerInfo,Jn=!0,ma(t,n,a),rn=r,Jn=u;break;case 0:case 11:case 14:case 15:Xa(2,a,n),xn||Xa(4,a,n),ma(t,n,a);break;case 1:xn||(Gi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&x0(a,n,r)),ma(t,n,a);break;case 21:ma(t,n,a);break;case 22:xn=(r=xn)||a.memoizedState!==null,ma(t,n,a),xn=r;break;default:ma(t,n,a)}}function w0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Tr(t)}catch(a){Wt(n,n.return,a)}}}function R0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Tr(t)}catch(a){Wt(n,n.return,a)}}function Yx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new b0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new b0),n;default:throw Error(s(435,t.tag))}}function Ql(t,n){var a=Yx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=ny.bind(null,t,r);r.then(u,u)}})}function $n(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=t,v=n,A=v;e:for(;A!==null;){switch(A.tag){case 27:if(Qa(A.type)){rn=A.stateNode,Jn=!1;break e}break;case 5:rn=A.stateNode,Jn=!1;break e;case 3:case 4:rn=A.stateNode.containerInfo,Jn=!0;break e}A=A.return}if(rn===null)throw Error(s(160));A0(f,v,u),rn=null,Jn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)C0(n,t),n=n.sibling}var Ui=null;function C0(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:$n(n,t),ei(t),r&4&&(Xa(3,t,t.return),Co(3,t),Xa(5,t,t.return));break;case 1:$n(n,t),ei(t),r&512&&(xn||a===null||Gi(a,a.return)),r&64&&pa&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Ui;if($n(n,t),ei(t),r&512&&(xn||a===null||Gi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){e:{r=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ps]||f[tn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Hn(f,r,a),f[tn]=t,w(f),r=f;break e;case"link":var v=Cg("link","href",u).get(r+(a.href||""));if(v){for(var A=0;A<v.length;A++)if(f=v[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(A,1);break t}}f=u.createElement(r),Hn(f,r,a),u.head.appendChild(f);break;case"meta":if(v=Cg("meta","content",u).get(r+(a.content||""))){for(A=0;A<v.length;A++)if(f=v[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(A,1);break t}}f=u.createElement(r),Hn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[tn]=t,w(f),r=f}t.stateNode=r}else Dg(u,t.type,t.stateNode);else t.stateNode=Rg(u,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Dg(u,t.type,t.stateNode):Rg(u,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Af(t,t.memoizedProps,a.memoizedProps)}break;case 27:$n(n,t),ei(t),r&512&&(xn||a===null||Gi(a,a.return)),a!==null&&r&4&&Af(t,t.memoizedProps,a.memoizedProps);break;case 5:if($n(n,t),ei(t),r&512&&(xn||a===null||Gi(a,a.return)),t.flags&32){u=t.stateNode;try{Mn(u,"")}catch(qe){Wt(t,t.return,qe)}}r&4&&t.stateNode!=null&&(u=t.memoizedProps,Af(t,u,a!==null?a.memoizedProps:u)),r&1024&&(Cf=!0);break;case 6:if($n(n,t),ei(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(qe){Wt(t,t.return,qe)}}break;case 3:if(dc=null,u=Ui,Ui=fc(n.containerInfo),$n(n,t),Ui=u,ei(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Tr(n.containerInfo)}catch(qe){Wt(t,t.return,qe)}Cf&&(Cf=!1,D0(t));break;case 4:r=Ui,Ui=fc(t.stateNode.containerInfo),$n(n,t),ei(t),Ui=r;break;case 12:$n(n,t),ei(t);break;case 31:$n(n,t),ei(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ql(t,r)));break;case 13:$n(n,t),ei(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($l=b()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ql(t,r)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,te=pa,me=xn;if(pa=te||u,xn=me||H,$n(n,t),xn=me,pa=te,ei(t),r&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||pa||xn||Ds(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=H.stateNode;var xe=H.memoizedProps.style,se=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;A.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(qe){Wt(H,H.return,qe)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(qe){Wt(H,H.return,qe)}}}else if(n.tag===18){if(a===null){H=n;try{var ce=H.stateNode;u?xg(ce,!0):xg(H.stateNode,!1)}catch(qe){Wt(H,H.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Ql(t,a))));break;case 19:$n(n,t),ei(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ql(t,r)));break;case 30:break;case 21:break;default:$n(n,t),ei(t)}}function ei(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(S0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=wf(t);Kl(t,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Mn(v,""),a.flags&=-33);var A=wf(t);Kl(t,A,v);break;case 3:case 4:var H=a.stateNode.containerInfo,te=wf(t);Rf(t,te,H);break;default:throw Error(s(161))}}catch(me){Wt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function D0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;D0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ga(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)E0(t,n.alternate,n),n=n.sibling}function Ds(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Xa(4,n,n.return),Ds(n);break;case 1:Gi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&x0(n,n.return,a),Ds(n);break;case 27:Fo(n.stateNode);case 26:case 5:Gi(n,n.return),Ds(n);break;case 22:n.memoizedState===null&&Ds(n);break;case 30:Ds(n);break;default:Ds(n)}t=t.sibling}}function _a(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:_a(u,f,a),Co(4,f);break;case 1:if(_a(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Wt(r,r.return,te)}if(r=f,u=r.updateQueue,u!==null){var A=r.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)om(H[u],A)}catch(te){Wt(r,r.return,te)}}a&&v&64&&v0(f),Do(f,f.return);break;case 27:M0(f);case 26:case 5:_a(u,f,a),a&&r===null&&v&4&&y0(f),Do(f,f.return);break;case 12:_a(u,f,a);break;case 31:_a(u,f,a),a&&v&4&&w0(u,f);break;case 13:_a(u,f,a),a&&v&4&&R0(u,f);break;case 22:f.memoizedState===null&&_a(u,f,a),Do(f,f.return);break;case 30:break;default:_a(u,f,a)}n=n.sibling}}function Df(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&go(a))}function Uf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&go(t))}function Ni(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)U0(t,n,a,r),n=n.sibling}function U0(t,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(t,n,a,r),u&2048&&Co(9,n);break;case 1:Ni(t,n,a,r);break;case 3:Ni(t,n,a,r),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&go(t)));break;case 12:if(u&2048){Ni(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,A=f.onPostCommit;typeof A=="function"&&A(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Wt(n,n.return,H)}}else Ni(t,n,a,r);break;case 31:Ni(t,n,a,r);break;case 13:Ni(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ni(t,n,a,r):Uo(t,n):f._visibility&2?Ni(t,n,a,r):(f._visibility|=2,pr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Df(v,n);break;case 24:Ni(t,n,a,r),u&2048&&Uf(n.alternate,n);break;default:Ni(t,n,a,r)}}function pr(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,A=a,H=r,te=v.flags;switch(v.tag){case 0:case 11:case 15:pr(f,v,A,H,u),Co(8,v);break;case 23:break;case 22:var me=v.stateNode;v.memoizedState!==null?me._visibility&2?pr(f,v,A,H,u):Uo(f,v):(me._visibility|=2,pr(f,v,A,H,u)),u&&te&2048&&Df(v.alternate,v);break;case 24:pr(f,v,A,H,u),u&&te&2048&&Uf(v.alternate,v);break;default:pr(f,v,A,H,u)}n=n.sibling}}function Uo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:Uo(a,r),u&2048&&Df(r.alternate,r);break;case 24:Uo(a,r),u&2048&&Uf(r.alternate,r);break;default:Uo(a,r)}n=n.sibling}}var No=8192;function mr(t,n,a){if(t.subtreeFlags&No)for(t=t.child;t!==null;)N0(t,n,a),t=t.sibling}function N0(t,n,a){switch(t.tag){case 26:mr(t,n,a),t.flags&No&&t.memoizedState!==null&&Ly(a,Ui,t.memoizedState,t.memoizedProps);break;case 5:mr(t,n,a);break;case 3:case 4:var r=Ui;Ui=fc(t.stateNode.containerInfo),mr(t,n,a),Ui=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=No,No=16777216,mr(t,n,a),No=r):mr(t,n,a));break;default:mr(t,n,a)}}function L0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Lo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Cn=r,I0(r,t)}L0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)O0(t),t=t.sibling}function O0(t){switch(t.tag){case 0:case 11:case 15:Lo(t),t.flags&2048&&Xa(9,t,t.return);break;case 3:Lo(t);break;case 12:Lo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Jl(t)):Lo(t);break;default:Lo(t)}}function Jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Cn=r,I0(r,t)}L0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Xa(8,n,n.return),Jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Jl(n));break;default:Jl(n)}t=t.sibling}}function I0(t,n){for(;Cn!==null;){var a=Cn;switch(a.tag){case 0:case 11:case 15:Xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:go(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Cn=r;else e:for(a=t;Cn!==null;){r=Cn;var u=r.sibling,f=r.return;if(T0(r),r===a){Cn=null;break e}if(u!==null){u.return=f,Cn=u;break e}Cn=f}}}var jx={getCacheForType:function(t){var n=Bn(gn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Bn(gn).controller.signal}},Zx=typeof WeakMap=="function"?WeakMap:Map,Ht=0,Jt=null,Et=null,wt=0,Xt=0,ui=null,Wa=!1,gr=!1,Nf=!1,va=0,un=0,qa=0,Us=0,Lf=0,fi=0,_r=0,Oo=null,ti=null,Of=!1,$l=0,P0=0,ec=1/0,tc=null,Ya=null,bn=0,ja=null,vr=null,xa=0,If=0,Pf=null,z0=null,Io=0,zf=null;function hi(){return(Ht&2)!==0&&wt!==0?wt&-wt:z.T!==null?kf():na()}function B0(){if(fi===0)if((wt&536870912)===0||Dt){var t=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),fi=t}else fi=536870912;return t=li.current,t!==null&&(t.flags|=32),fi}function ni(t,n,a){(t===Jt&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)&&(xr(t,0),Za(t,wt,fi,!1)),_t(t,a),((Ht&2)===0||t!==Jt)&&(t===Jt&&((Ht&2)===0&&(Us|=a),un===4&&Za(t,wt,fi,!1)),Vi(t))}function F0(t,n,a){if((Ht&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ee(t,n),u=r?Jx(t,n):Ff(t,n,!0),f=r;do{if(u===0){gr&&!r&&Za(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Kx(a)){u=Ff(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var A=t;u=Oo;var H=A.current.memoizedState.isDehydrated;if(H&&(xr(A,v).flags|=256),v=Ff(A,v,!1),v!==2){if(Nf&&!H){A.errorRecoveryDisabledLanes|=f,Us|=f,u=4;break e}f=ti,ti=u,f!==null&&(ti===null?ti=f:ti.push.apply(ti,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){xr(t,0),Za(t,n,0,!0);break}e:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Za(r,n,fi,!Wa);break e;case 2:ti=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=$l+300-b(),10<u)){if(Za(r,n,fi,!Wa),he(r,0,!0)!==0)break e;xa=n,r.timeoutHandle=gg(H0.bind(null,r,a,ti,tc,Of,n,fi,Us,_r,Wa,f,"Throttled",-0,0),u);break e}H0(r,a,ti,tc,Of,n,fi,Us,_r,Wa,f,null,-0,0)}}break}while(!0);Vi(t)}function H0(t,n,a,r,u,f,v,A,H,te,me,xe,se,ce){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:aa},N0(n,f,xe);var qe=(f&62914560)===f?$l-b():(f&4194048)===f?P0-b():0;if(qe=Oy(xe,qe),qe!==null){xa=f,t.cancelPendingCommit=qe(j0.bind(null,t,n,f,a,r,u,v,A,H,me,xe,null,se,ce)),Za(t,f,v,!te);return}}j0(t,n,f,a,r,u,v,A,H)}function Kx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!ri(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Za(t,n,a,r){n&=~Lf,n&=~Us,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-Ie(u),v=1<<f;r[f]=-1,u&=~v}a!==0&&st(t,a,n)}function nc(){return(Ht&6)===0?(Po(0),!1):!0}function Bf(){if(Et!==null){if(Xt===0)var t=Et.return;else t=Et,la=Ms=null,$u(t),cr=null,vo=0,t=Et;for(;t!==null;)_0(t.alternate,t),t=t.return;Et=null}}function xr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,gy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),xa=0,Bf(),Jt=t,Et=a=ra(t.current,null),wt=n,Xt=0,ui=null,Wa=!1,gr=Ee(t,n),Nf=!1,_r=fi=Lf=Us=qa=un=0,ti=Oo=null,Of=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var u=31-Ie(r),f=1<<u;n|=t[u],r&=~f}return va=n,bl(),a}function G0(t,n){pt=null,z.H=Ao,n===lr||n===Ul?(n=im(),Xt=3):n===Gu?(n=im(),Xt=4):Xt=n===gf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ui=n,Et===null&&(un=1,Wl(t,vi(n,t.current)))}function V0(){var t=li.current;return t===null?!0:(wt&4194048)===wt?Mi===null:(wt&62914560)===wt||(wt&536870912)!==0?t===Mi:!1}function k0(){var t=z.H;return z.H=Ao,t===null?Ao:t}function X0(){var t=z.A;return z.A=jx,t}function ic(){un=4,Wa||(wt&4194048)!==wt&&li.current!==null||(gr=!0),(qa&134217727)===0&&(Us&134217727)===0||Jt===null||Za(Jt,wt,fi,!1)}function Ff(t,n,a){var r=Ht;Ht|=2;var u=k0(),f=X0();(Jt!==t||wt!==n)&&(tc=null,xr(t,n)),n=!1;var v=un;e:do try{if(Xt!==0&&Et!==null){var A=Et,H=ui;switch(Xt){case 8:Bf(),v=6;break e;case 3:case 2:case 9:case 6:li.current===null&&(n=!0);var te=Xt;if(Xt=0,ui=null,yr(t,A,H,te),a&&gr){v=0;break e}break;default:te=Xt,Xt=0,ui=null,yr(t,A,H,te)}}Qx(),v=un;break}catch(me){G0(t,me)}while(!0);return n&&t.shellSuspendCounter++,la=Ms=null,Ht=r,z.H=u,z.A=f,Et===null&&(Jt=null,wt=0,bl()),v}function Qx(){for(;Et!==null;)W0(Et)}function Jx(t,n){var a=Ht;Ht|=2;var r=k0(),u=X0();Jt!==t||wt!==n?(tc=null,ec=b()+500,xr(t,n)):gr=Ee(t,n);e:do try{if(Xt!==0&&Et!==null){n=Et;var f=ui;t:switch(Xt){case 1:Xt=0,ui=null,yr(t,n,f,1);break;case 2:case 9:if(tm(f)){Xt=0,ui=null,q0(n);break}n=function(){Xt!==2&&Xt!==9||Jt!==t||(Xt=7),Vi(t)},f.then(n,n);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:tm(f)?(Xt=0,ui=null,q0(n)):(Xt=0,ui=null,yr(t,n,f,7));break;case 5:var v=null;switch(Et.tag){case 26:v=Et.memoizedState;case 5:case 27:var A=Et;if(v?Ug(v):A.stateNode.complete){Xt=0,ui=null;var H=A.sibling;if(H!==null)Et=H;else{var te=A.return;te!==null?(Et=te,ac(te)):Et=null}break t}}Xt=0,ui=null,yr(t,n,f,5);break;case 6:Xt=0,ui=null,yr(t,n,f,6);break;case 8:Bf(),un=6;break e;default:throw Error(s(462))}}$x();break}catch(me){G0(t,me)}while(!0);return la=Ms=null,z.H=r,z.A=u,Ht=a,Et!==null?0:(Jt=null,wt=0,bl(),un)}function $x(){for(;Et!==null&&!Ye();)W0(Et)}function W0(t){var n=m0(t.alternate,t,va);t.memoizedProps=t.pendingProps,n===null?ac(t):Et=n}function q0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=c0(a,n,n.pendingProps,n.type,void 0,wt);break;case 11:n=c0(a,n,n.pendingProps,n.type.render,n.ref,wt);break;case 5:$u(n);default:_0(a,n),n=Et=Xp(n,va),n=m0(a,n,va)}t.memoizedProps=t.pendingProps,n===null?ac(t):Et=n}function yr(t,n,a,r){la=Ms=null,$u(n),cr=null,vo=0;var u=n.return;try{if(Gx(t,u,n,a,wt)){un=1,Wl(t,vi(a,t.current)),Et=null;return}}catch(f){if(u!==null)throw Et=u,f;un=1,Wl(t,vi(a,t.current)),Et=null;return}n.flags&32768?(Dt||r===1?t=!0:gr||(wt&536870912)!==0?t=!1:(Wa=t=!0,(r===2||r===9||r===3||r===6)&&(r=li.current,r!==null&&r.tag===13&&(r.flags|=16384))),Y0(n,t)):ac(n)}function ac(t){var n=t;do{if((n.flags&32768)!==0){Y0(n,Wa);return}t=n.return;var a=Xx(n.alternate,n,va);if(a!==null){Et=a;return}if(n=n.sibling,n!==null){Et=n;return}Et=n=t}while(n!==null);un===0&&(un=5)}function Y0(t,n){do{var a=Wx(t.alternate,t);if(a!==null){a.flags&=32767,Et=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Et=t;return}Et=t=a}while(t!==null);un=6,Et=null}function j0(t,n,a,r,u,f,v,A,H){t.cancelPendingCommit=null;do sc();while(bn!==0);if((Ht&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Au,ht(t,a,f,v,A,H),t===Jt&&(Et=Jt=null,wt=0),vr=n,ja=t,xa=a,If=f,Pf=u,z0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,iy(ue,function(){return $0(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,u=V.p,V.p=2,v=Ht,Ht|=4;try{qx(t,n,a)}finally{Ht=v,V.p=u,z.T=r}}bn=1,Z0(),K0(),Q0()}}function Z0(){if(bn===1){bn=0;var t=ja,n=vr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var r=V.p;V.p=2;var u=Ht;Ht|=4;try{C0(n,t);var f=Qf,v=Ip(t.containerInfo),A=f.focusedElem,H=f.selectionRange;if(v!==A&&A&&A.ownerDocument&&Op(A.ownerDocument.documentElement,A)){if(H!==null&&Su(A)){var te=H.start,me=H.end;if(me===void 0&&(me=te),"selectionStart"in A)A.selectionStart=te,A.selectionEnd=Math.min(me,A.value.length);else{var xe=A.ownerDocument||document,se=xe&&xe.defaultView||window;if(se.getSelection){var ce=se.getSelection(),qe=A.textContent.length,it=Math.min(H.start,qe),Zt=H.end===void 0?it:Math.min(H.end,qe);!ce.extend&&it>Zt&&(v=Zt,Zt=it,it=v);var Z=Lp(A,it),X=Lp(A,Zt);if(Z&&X&&(ce.rangeCount!==1||ce.anchorNode!==Z.node||ce.anchorOffset!==Z.offset||ce.focusNode!==X.node||ce.focusOffset!==X.offset)){var ee=xe.createRange();ee.setStart(Z.node,Z.offset),ce.removeAllRanges(),it>Zt?(ce.addRange(ee),ce.extend(X.node,X.offset)):(ee.setEnd(X.node,X.offset),ce.addRange(ee))}}}}for(xe=[],ce=A;ce=ce.parentNode;)ce.nodeType===1&&xe.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xe.length;A++){var _e=xe[A];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}_c=!!Kf,Qf=Kf=null}finally{Ht=u,V.p=r,z.T=a}}t.current=n,bn=2}}function K0(){if(bn===2){bn=0;var t=ja,n=vr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var r=V.p;V.p=2;var u=Ht;Ht|=4;try{E0(t,n.alternate,n)}finally{Ht=u,V.p=r,z.T=a}}bn=3}}function Q0(){if(bn===4||bn===3){bn=0,L();var t=ja,n=vr,a=xa,r=z0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,vr=ja=null,J0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ya=null),Bi(a),n=n.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Te,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=z.T,u=V.p,V.p=2,z.T=null;try{for(var f=t.onRecoverableError,v=0;v<r.length;v++){var A=r[v];f(A.value,{componentStack:A.stack})}}finally{z.T=n,V.p=u}}(xa&3)!==0&&sc(),Vi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===zf?Io++:(Io=0,zf=t):Io=0,Po(0)}}function J0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,go(n)))}function sc(){return Z0(),K0(),Q0(),$0()}function $0(){if(bn!==5)return!1;var t=ja,n=If;If=0;var a=Bi(xa),r=z.T,u=V.p;try{V.p=32>a?32:a,z.T=null,a=Pf,Pf=null;var f=ja,v=xa;if(bn=0,vr=ja=null,xa=0,(Ht&6)!==0)throw Error(s(331));var A=Ht;if(Ht|=4,O0(f.current),U0(f,f.current,v,a),Ht=A,Po(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Te,f)}catch{}return!0}finally{V.p=u,z.T=r,J0(t,n)}}function eg(t,n,a){n=vi(a,n),n=mf(t.stateNode,n,2),t=Ga(t,n,2),t!==null&&(_t(t,2),Vi(t))}function Wt(t,n,a){if(t.tag===3)eg(t,t,a);else for(;n!==null;){if(n.tag===3){eg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ya===null||!Ya.has(r))){t=vi(a,t),a=t0(2),r=Ga(n,a,2),r!==null&&(n0(a,r,n,t),_t(r,2),Vi(r));break}}n=n.return}}function Hf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Zx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Nf=!0,u.add(a),t=ey.bind(null,t,n,a),n.then(t,t))}function ey(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Jt===t&&(wt&a)===a&&(un===4||un===3&&(wt&62914560)===wt&&300>b()-$l?(Ht&2)===0&&xr(t,0):Lf|=a,_r===wt&&(_r=0)),Vi(t)}function tg(t,n){n===0&&(n=Qe()),t=xs(t,n),t!==null&&(_t(t,n),Vi(t))}function ty(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),tg(t,a)}function ny(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),tg(t,a)}function iy(t,n){return At(t,n)}var rc=null,Sr=null,Gf=!1,oc=!1,Vf=!1,Ka=0;function Vi(t){t!==Sr&&t.next===null&&(Sr===null?rc=Sr=t:Sr=Sr.next=t),oc=!0,Gf||(Gf=!0,sy())}function Po(t,n){if(!Vf&&oc){Vf=!0;do for(var a=!1,r=rc;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var v=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-Ie(42|t)+1)-1,f&=u&~(v&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,sg(r,f))}else f=wt,f=he(r,r===Jt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ee(r,f)||(a=!0,sg(r,f));r=r.next}while(a);Vf=!1}}function ay(){ng()}function ng(){oc=Gf=!1;var t=0;Ka!==0&&my()&&(t=Ka);for(var n=b(),a=null,r=rc;r!==null;){var u=r.next,f=ig(r,n);f===0?(r.next=null,a===null?rc=u:a.next=u,u===null&&(Sr=a)):(a=r,(t!==0||(f&3)!==0)&&(oc=!0)),r=u}bn!==0&&bn!==5||Po(t),Ka!==0&&(Ka=0)}function ig(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Ie(f),A=1<<v,H=u[v];H===-1?((A&a)===0||(A&r)!==0)&&(u[v]=Ae(A,n)):H<=n&&(t.expiredLanes|=A),f&=~A}if(n=Jt,a=wt,a=he(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&It(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ee(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&It(r),Bi(a)){case 2:case 8:a=Se;break;case 32:a=ue;break;case 268435456:a=Ue;break;default:a=ue}return r=ag.bind(null,t),a=At(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&It(r),t.callbackPriority=2,t.callbackNode=null,2}function ag(t,n){if(bn!==0&&bn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(sc()&&t.callbackNode!==a)return null;var r=wt;return r=he(t,t===Jt?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(F0(t,r,n),ig(t,b()),t.callbackNode!=null&&t.callbackNode===a?ag.bind(null,t):null)}function sg(t,n){if(sc())return null;F0(t,n,!0)}function sy(){_y(function(){(Ht&6)!==0?At(pe,ay):ng()})}function kf(){if(Ka===0){var t=rr;t===0&&(t=Le,Le<<=1,(Le&261888)===0&&(Le=256)),Ka=t}return Ka}function rg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ml(""+t)}function og(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function ry(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=rg((u[ln]||null).action),v=r.submitter;v&&(n=(n=v[ln]||null)?rg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var A=new xl("action","action",null,r,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ka!==0){var H=v?og(u,v):new FormData(u);cf(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(A.preventDefault(),H=v?og(u,v):new FormData(u),cf(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Xf=0;Xf<Tu.length;Xf++){var Wf=Tu[Xf],oy=Wf.toLowerCase(),ly=Wf[0].toUpperCase()+Wf.slice(1);Di(oy,"on"+ly)}Di(Bp,"onAnimationEnd"),Di(Fp,"onAnimationIteration"),Di(Hp,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(Ex,"onTransitionRun"),Di(Tx,"onTransitionStart"),Di(Ax,"onTransitionCancel"),Di(Gp,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),ae("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ae("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ae("onBeforeInput",["compositionend","keypress","textInput","paste"]),ae("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function lg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var A=r[v],H=A.instance,te=A.currentTarget;if(A=A.listener,H!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=te;try{f(u)}catch(me){Ml(me)}u.currentTarget=null,f=H}else for(v=0;v<r.length;v++){if(A=r[v],H=A.instance,te=A.currentTarget,A=A.listener,H!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=te;try{f(u)}catch(me){Ml(me)}u.currentTarget=null,f=H}}}}function Tt(t,n){var a=n[qs];a===void 0&&(a=n[qs]=new Set);var r=t+"__bubble";a.has(r)||(cg(n,t,2,!1),a.add(r))}function qf(t,n,a){var r=0;n&&(r|=4),cg(a,t,r,n)}var lc="_reactListening"+Math.random().toString(36).slice(2);function Yf(t){if(!t[lc]){t[lc]=!0,j.forEach(function(a){a!=="selectionchange"&&(cy.has(a)||qf(a,!1,t),qf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[lc]||(n[lc]=!0,qf("selectionchange",!1,n))}}function cg(t,n,a,r){switch(Bg(n)){case 2:var u=zy;break;case 8:u=By;break;default:u=lh}a=u.bind(null,n,a,t),u=void 0,!hu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function jf(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var A=r.stateNode.containerInfo;if(A===u)break;if(v===4)for(v=r.return;v!==null;){var H=v.tag;if((H===3||H===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;A!==null;){if(v=Ua(A),v===null)return;if(H=v.tag,H===5||H===6||H===26||H===27){r=f=v;continue e}A=A.parentNode}}r=r.return}pp(function(){var te=f,me=uu(a),xe=[];e:{var se=Vp.get(t);if(se!==void 0){var ce=xl,qe=t;switch(t){case"keypress":if(_l(a)===0)break e;case"keydown":case"keyup":ce=nx;break;case"focusin":qe="focus",ce=gu;break;case"focusout":qe="blur",ce=gu;break;case"beforeblur":case"afterblur":ce=gu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=_p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Xv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=sx;break;case Bp:case Fp:case Hp:ce=Yv;break;case Gp:ce=ox;break;case"scroll":case"scrollend":ce=Vv;break;case"wheel":ce=cx;break;case"copy":case"cut":case"paste":ce=Zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=xp;break;case"toggle":case"beforetoggle":ce=fx}var it=(n&4)!==0,Zt=!it&&(t==="scroll"||t==="scrollend"),Z=it?se!==null?se+"Capture":null:se;it=[];for(var X=te,ee;X!==null;){var _e=X;if(ee=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||ee===null||Z===null||(_e=ao(X,Z),_e!=null&&it.push(Bo(X,_e,ee))),Zt)break;X=X.return}0<it.length&&(se=new ce(se,qe,null,a,me),xe.push({event:se,listeners:it}))}}if((n&7)===0){e:{if(se=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",se&&a!==cu&&(qe=a.relatedTarget||a.fromElement)&&(Ua(qe)||qe[Ri]))break e;if((ce||se)&&(se=me.window===me?me:(se=me.ownerDocument)?se.defaultView||se.parentWindow:window,ce?(qe=a.relatedTarget||a.toElement,ce=te,qe=qe?Ua(qe):null,qe!==null&&(Zt=c(qe),it=qe.tag,qe!==Zt||it!==5&&it!==27&&it!==6)&&(qe=null)):(ce=null,qe=te),ce!==qe)){if(it=_p,_e="onMouseLeave",Z="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(it=xp,_e="onPointerLeave",Z="onPointerEnter",X="pointer"),Zt=ce==null?se:ms(ce),ee=qe==null?se:ms(qe),se=new it(_e,X+"leave",ce,a,me),se.target=Zt,se.relatedTarget=ee,_e=null,Ua(me)===te&&(it=new it(Z,X+"enter",qe,a,me),it.target=ee,it.relatedTarget=Zt,_e=it),Zt=_e,ce&&qe)t:{for(it=uy,Z=ce,X=qe,ee=0,_e=Z;_e;_e=it(_e))ee++;_e=0;for(var $e=X;$e;$e=it($e))_e++;for(;0<ee-_e;)Z=it(Z),ee--;for(;0<_e-ee;)X=it(X),_e--;for(;ee--;){if(Z===X||X!==null&&Z===X.alternate){it=Z;break t}Z=it(Z),X=it(X)}it=null}else it=null;ce!==null&&ug(xe,se,ce,it,!1),qe!==null&&Zt!==null&&ug(xe,Zt,qe,it,!0)}}e:{if(se=te?ms(te):window,ce=se.nodeName&&se.nodeName.toLowerCase(),ce==="select"||ce==="input"&&se.type==="file")var Pt=wp;else if(Tp(se))if(Rp)Pt=Sx;else{Pt=xx;var Ke=vx}else ce=se.nodeName,!ce||ce.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?te&&Ci(te.elementType)&&(Pt=wp):Pt=yx;if(Pt&&(Pt=Pt(t,te))){Ap(xe,Pt,a,me);break e}Ke&&Ke(t,se,te),t==="focusout"&&te&&se.type==="number"&&te.memoizedProps.value!=null&&Ln(se,"number",se.value)}switch(Ke=te?ms(te):window,t){case"focusin":(Tp(Ke)||Ke.contentEditable==="true")&&(Js=Ke,Mu=te,ho=null);break;case"focusout":ho=Mu=Js=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Pp(xe,a,me);break;case"selectionchange":if(bx)break;case"keydown":case"keyup":Pp(xe,a,me)}var vt;if(vu)e:{switch(t){case"compositionstart":var Rt="onCompositionStart";break e;case"compositionend":Rt="onCompositionEnd";break e;case"compositionupdate":Rt="onCompositionUpdate";break e}Rt=void 0}else Qs?bp(t,a)&&(Rt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Rt="onCompositionStart");Rt&&(yp&&a.locale!=="ko"&&(Qs||Rt!=="onCompositionStart"?Rt==="onCompositionEnd"&&Qs&&(vt=mp()):(Oa=me,du="value"in Oa?Oa.value:Oa.textContent,Qs=!0)),Ke=cc(te,Rt),0<Ke.length&&(Rt=new vp(Rt,t,null,a,me),xe.push({event:Rt,listeners:Ke}),vt?Rt.data=vt:(vt=Ep(a),vt!==null&&(Rt.data=vt)))),(vt=dx?px(t,a):mx(t,a))&&(Rt=cc(te,"onBeforeInput"),0<Rt.length&&(Ke=new vp("onBeforeInput","beforeinput",null,a,me),xe.push({event:Ke,listeners:Rt}),Ke.data=vt)),ry(xe,t,te,a,me)}lg(xe,n)})}function Bo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function cc(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ao(t,a),u!=null&&r.unshift(Bo(t,u,f)),u=ao(t,n),u!=null&&r.push(Bo(t,u,f))),t.tag===3)return r;t=t.return}return[]}function uy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ug(t,n,a,r,u){for(var f=n._reactName,v=[];a!==null&&a!==r;){var A=a,H=A.alternate,te=A.stateNode;if(A=A.tag,H!==null&&H===r)break;A!==5&&A!==26&&A!==27||te===null||(H=te,u?(te=ao(a,f),te!=null&&v.unshift(Bo(a,te,H))):u||(te=ao(a,f),te!=null&&v.push(Bo(a,te,H)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var fy=/\r\n?/g,hy=/\u0000|\uFFFD/g;function fg(t){return(typeof t=="string"?t:""+t).replace(fy,`
`).replace(hy,"")}function hg(t,n){return n=fg(n),fg(t)===n}function jt(t,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Mn(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Mn(t,""+r);break;case"className":et(t,"class",r);break;case"tabIndex":et(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":et(t,a,r);break;case"style":js(t,r,f);break;case"data":if(n!=="object"){et(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=ml(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&jt(t,n,"name",u.name,u,null),jt(t,n,"formEncType",u.formEncType,u,null),jt(t,n,"formMethod",u.formMethod,u,null),jt(t,n,"formTarget",u.formTarget,u,null)):(jt(t,n,"encType",u.encType,u,null),jt(t,n,"method",u.method,u,null),jt(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=ml(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=aa);break;case"onScroll":r!=null&&Tt("scroll",t);break;case"onScrollEnd":r!=null&&Tt("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=ml(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Tt("beforetoggle",t),Tt("toggle",t),je(t,"popover",r);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":je(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Hv.get(a)||a,je(t,a,r))}}function Zf(t,n,a,r,u,f){switch(a){case"style":js(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Mn(t,r):(typeof r=="number"||typeof r=="bigint")&&Mn(t,""+r);break;case"onScroll":r!=null&&Tt("scroll",t);break;case"onScrollEnd":r!=null&&Tt("scrollend",t);break;case"onClick":r!=null&&(t.onclick=aa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!le.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[ln]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,u);break e}a in t?t[a]=r:r===!0?t.setAttribute(a,""):je(t,a,r)}}}function Hn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",t),Tt("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:jt(t,n,f,v,a,null)}}u&&jt(t,n,"srcSet",a.srcSet,a,null),r&&jt(t,n,"src",a.src,a,null);return;case"input":Tt("invalid",t);var A=f=v=u=null,H=null,te=null;for(r in a)if(a.hasOwnProperty(r)){var me=a[r];if(me!=null)switch(r){case"name":u=me;break;case"type":v=me;break;case"checked":H=me;break;case"defaultChecked":te=me;break;case"value":f=me;break;case"defaultValue":A=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:jt(t,n,r,me,a,null)}}ia(t,f,A,H,te,v,u,!1);return;case"select":Tt("invalid",t),r=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":v=A;break;case"multiple":r=A;default:jt(t,n,u,A,a,null)}n=f,a=v,t.multiple=!!r,n!=null?gi(t,!!r,n,!1):a!=null&&gi(t,!!r,a,!0);return;case"textarea":Tt("invalid",t),f=u=r=null;for(v in a)if(a.hasOwnProperty(v)&&(A=a[v],A!=null))switch(v){case"value":r=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:jt(t,n,v,A,a,null)}On(t,r,u,f);return;case"option":for(H in a)a.hasOwnProperty(H)&&(r=a[H],r!=null)&&(H==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":jt(t,n,H,r,a,null));return;case"dialog":Tt("beforetoggle",t),Tt("toggle",t),Tt("cancel",t),Tt("close",t);break;case"iframe":case"object":Tt("load",t);break;case"video":case"audio":for(r=0;r<zo.length;r++)Tt(zo[r],t);break;case"image":Tt("error",t),Tt("load",t);break;case"details":Tt("toggle",t);break;case"embed":case"source":case"link":Tt("error",t),Tt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(r=a[te],r!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:jt(t,n,te,r,a,null)}return;default:if(Ci(n)){for(me in a)a.hasOwnProperty(me)&&(r=a[me],r!==void 0&&Zf(t,n,me,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&jt(t,n,A,r,a,null))}function dy(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,A=null,H=null,te=null,me=null;for(ce in a){var xe=a[ce];if(a.hasOwnProperty(ce)&&xe!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":H=xe;default:r.hasOwnProperty(ce)||jt(t,n,ce,null,r,xe)}}for(var se in r){var ce=r[se];if(xe=a[se],r.hasOwnProperty(se)&&(ce!=null||xe!=null))switch(se){case"type":f=ce;break;case"name":u=ce;break;case"checked":te=ce;break;case"defaultChecked":me=ce;break;case"value":v=ce;break;case"defaultValue":A=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==xe&&jt(t,n,se,ce,r,xe)}}Nn(t,v,A,H,te,me,f,u);return;case"select":ce=v=A=se=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ce=H;default:r.hasOwnProperty(f)||jt(t,n,f,null,r,H)}for(u in r)if(f=r[u],H=a[u],r.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":se=f;break;case"defaultValue":A=f;break;case"multiple":v=f;default:f!==H&&jt(t,n,u,f,r,H)}n=A,a=v,r=ce,se!=null?gi(t,!!a,se,!1):!!r!=!!a&&(n!=null?gi(t,!!a,n,!0):gi(t,!!a,a?[]:"",!1));return;case"textarea":ce=se=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:jt(t,n,A,null,r,u)}for(v in r)if(u=r[v],f=a[v],r.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":se=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&jt(t,n,v,u,r,f)}kt(t,se,ce);return;case"option":for(var qe in a)se=a[qe],a.hasOwnProperty(qe)&&se!=null&&!r.hasOwnProperty(qe)&&(qe==="selected"?t.selected=!1:jt(t,n,qe,null,r,se));for(H in r)se=r[H],ce=a[H],r.hasOwnProperty(H)&&se!==ce&&(se!=null||ce!=null)&&(H==="selected"?t.selected=se&&typeof se!="function"&&typeof se!="symbol":jt(t,n,H,se,r,ce));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in a)se=a[it],a.hasOwnProperty(it)&&se!=null&&!r.hasOwnProperty(it)&&jt(t,n,it,null,r,se);for(te in r)if(se=r[te],ce=a[te],r.hasOwnProperty(te)&&se!==ce&&(se!=null||ce!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:jt(t,n,te,se,r,ce)}return;default:if(Ci(n)){for(var Zt in a)se=a[Zt],a.hasOwnProperty(Zt)&&se!==void 0&&!r.hasOwnProperty(Zt)&&Zf(t,n,Zt,void 0,r,se);for(me in r)se=r[me],ce=a[me],!r.hasOwnProperty(me)||se===ce||se===void 0&&ce===void 0||Zf(t,n,me,se,r,ce);return}}for(var Z in a)se=a[Z],a.hasOwnProperty(Z)&&se!=null&&!r.hasOwnProperty(Z)&&jt(t,n,Z,null,r,se);for(xe in r)se=r[xe],ce=a[xe],!r.hasOwnProperty(xe)||se===ce||se==null&&ce==null||jt(t,n,xe,se,r,ce)}function dg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function py(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,v=u.initiatorType,A=u.duration;if(f&&A&&dg(v)){for(v=0,A=u.responseEnd,r+=1;r<a.length;r++){var H=a[r],te=H.startTime;if(te>A)break;var me=H.transferSize,xe=H.initiatorType;me&&dg(xe)&&(H=H.responseEnd,v+=me*(H<A?1:(A-te)/(H-te)))}if(--r,n+=8*(f+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Kf=null,Qf=null;function uc(t){return t.nodeType===9?t:t.ownerDocument}function pg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Jf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $f=null;function my(){var t=window.event;return t&&t.type==="popstate"?t===$f?!1:($f=t,!0):($f=null,!1)}var gg=typeof setTimeout=="function"?setTimeout:void 0,gy=typeof clearTimeout=="function"?clearTimeout:void 0,_g=typeof Promise=="function"?Promise:void 0,_y=typeof queueMicrotask=="function"?queueMicrotask:typeof _g<"u"?function(t){return _g.resolve(null).then(t).catch(vy)}:gg;function vy(t){setTimeout(function(){throw t})}function Qa(t){return t==="head"}function vg(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),Tr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Fo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Fo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,A=f.nodeName;f[ps]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Fo(t.ownerDocument.body);a=u}while(a);Tr(n)}function xg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function eh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":eh(a),io(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function xy(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ps])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=bi(t.nextSibling),t===null)break}return null}function yy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=bi(t.nextSibling),t===null))return null;return t}function yg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=bi(t.nextSibling),t===null))return null;return t}function th(t){return t.data==="$?"||t.data==="$~"}function nh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Sy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function bi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ih=null;function Sg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return bi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Mg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function bg(t,n,a){switch(n=uc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Fo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);io(t)}var Ei=new Map,Eg=new Set;function fc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ya=V.d;V.d={f:My,r:by,D:Ey,C:Ty,L:Ay,m:wy,X:Cy,S:Ry,M:Dy};function My(){var t=ya.f(),n=nc();return t||n}function by(t){var n=Na(t);n!==null&&n.tag===5&&n.type==="form"?Gm(n):ya.r(t)}var Mr=typeof document>"u"?null:document;function Tg(t,n,a){var r=Mr;if(r&&typeof n=="string"&&n){var u=rt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Eg.has(u)||(Eg.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Hn(n,"link",t),w(n),r.head.appendChild(n)))}}function Ey(t){ya.D(t),Tg("dns-prefetch",t,null)}function Ty(t,n){ya.C(t,n),Tg("preconnect",t,n)}function Ay(t,n,a){ya.L(t,n,a);var r=Mr;if(r&&t&&n){var u='link[rel="preload"][as="'+rt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+rt(a.imageSizes)+'"]')):u+='[href="'+rt(t)+'"]';var f=u;switch(n){case"style":f=br(t);break;case"script":f=Er(t)}Ei.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ei.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(Ho(f))||n==="script"&&r.querySelector(Go(f))||(n=r.createElement("link"),Hn(n,"link",t),w(n),r.head.appendChild(n)))}}function wy(t,n){ya.m(t,n);var a=Mr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+rt(r)+'"][href="'+rt(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Er(t)}if(!Ei.has(f)&&(t=g({rel:"modulepreload",href:t},n),Ei.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Go(f)))return}r=a.createElement("link"),Hn(r,"link",t),w(r),a.head.appendChild(r)}}}function Ry(t,n,a){ya.S(t,n,a);var r=Mr;if(r&&t){var u=La(r).hoistableStyles,f=br(t);n=n||"default";var v=u.get(f);if(!v){var A={loading:0,preload:null};if(v=r.querySelector(Ho(f)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ei.get(f))&&ah(t,a);var H=v=r.createElement("link");w(H),Hn(H,"link",t),H._p=new Promise(function(te,me){H.onload=te,H.onerror=me}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,hc(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:A},u.set(f,v)}}}function Cy(t,n){ya.X(t,n);var a=Mr;if(a&&t){var r=La(a).hoistableScripts,u=Er(t),f=r.get(u);f||(f=a.querySelector(Go(u)),f||(t=g({src:t,async:!0},n),(n=Ei.get(u))&&sh(t,n),f=a.createElement("script"),w(f),Hn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Dy(t,n){ya.M(t,n);var a=Mr;if(a&&t){var r=La(a).hoistableScripts,u=Er(t),f=r.get(u);f||(f=a.querySelector(Go(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=Ei.get(u))&&sh(t,n),f=a.createElement("script"),w(f),Hn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Ag(t,n,a,r){var u=(u=$.current)?fc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=br(a.href),a=La(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=br(a.href);var f=La(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(Ho(t)))&&!f._p&&(v.instance=f,v.state.loading=5),Ei.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ei.set(t,a),f||Uy(u,t,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Er(a),a=La(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function br(t){return'href="'+rt(t)+'"'}function Ho(t){return'link[rel="stylesheet"]['+t+"]"}function wg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Uy(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Hn(n,"link",a),w(n),t.head.appendChild(n))}function Er(t){return'[src="'+rt(t)+'"]'}function Go(t){return"script[async]"+t}function Rg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+rt(a.href)+'"]');if(r)return n.instance=r,w(r),r;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),w(r),Hn(r,"style",u),hc(r,a.precedence,t),n.instance=r;case"stylesheet":u=br(a.href);var f=t.querySelector(Ho(u));if(f)return n.state.loading|=4,n.instance=f,w(f),f;r=wg(a),(u=Ei.get(u))&&ah(r,u),f=(t.ownerDocument||t).createElement("link"),w(f);var v=f;return v._p=new Promise(function(A,H){v.onload=A,v.onerror=H}),Hn(f,"link",r),n.state.loading|=4,hc(f,a.precedence,t),n.instance=f;case"script":return f=Er(a.src),(u=t.querySelector(Go(f)))?(n.instance=u,w(u),u):(r=a,(u=Ei.get(f))&&(r=g({},a),sh(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),w(u),Hn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,hc(r,a.precedence,t));return n.instance}function hc(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,v=0;v<r.length;v++){var A=r[v];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ah(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function sh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var dc=null;function Cg(t,n,a){if(dc===null){var r=new Map,u=dc=new Map;u.set(a,r)}else u=dc,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ps]||f[tn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var A=r.get(v);A?A.push(f):r.set(v,[f])}}return r}function Dg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Ny(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ug(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ly(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=br(r.href),f=n.querySelector(Ho(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=pc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,w(f);return}f=n.ownerDocument||n,r=wg(r),(u=Ei.get(u))&&ah(r,u),f=f.createElement("link"),w(f);var v=f;v._p=new Promise(function(A,H){v.onload=A,v.onerror=H}),Hn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=pc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var rh=0;function Oy(t,n){return t.stylesheets&&t.count===0&&gc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&rh===0&&(rh=62500*py());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>rh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mc=null;function gc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mc=new Map,n.forEach(Iy,t),mc=null,pc.call(t))}function Iy(t,n){if(!(n.state.loading&4)){var a=mc.get(t);if(a)var r=a.get(null);else{a=new Map,mc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,u),a.set(v,u),this.count++,r=pc.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Vo={$$typeof:N,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function Py(t,n,a,r,u,f,v,A,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Ng(t,n,a,r,u,f,v,A,H,te,me,xe){return t=new Py(t,n,a,v,H,te,me,xe,A),n=1,f===!0&&(n|=24),f=oi(3,null,null,n),t.current=f,f.stateNode=t,n=Bu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Vu(f),t}function Lg(t){return t?(t=tr,t):tr}function Og(t,n,a,r,u,f){u=Lg(u),r.context===null?r.context=u:r.pendingContext=u,r=Ha(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ga(t,r,n),a!==null&&(ni(a,t,n),yo(a,t,n))}function Ig(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function oh(t,n){Ig(t,n),(t=t.alternate)&&Ig(t,n)}function Pg(t){if(t.tag===13||t.tag===31){var n=xs(t,67108864);n!==null&&ni(n,t,67108864),oh(t,67108864)}}function zg(t){if(t.tag===13||t.tag===31){var n=hi();n=ta(n);var a=xs(t,n);a!==null&&ni(a,t,n),oh(t,n)}}var _c=!0;function zy(t,n,a,r){var u=z.T;z.T=null;var f=V.p;try{V.p=2,lh(t,n,a,r)}finally{V.p=f,z.T=u}}function By(t,n,a,r){var u=z.T;z.T=null;var f=V.p;try{V.p=8,lh(t,n,a,r)}finally{V.p=f,z.T=u}}function lh(t,n,a,r){if(_c){var u=ch(r);if(u===null)jf(t,n,r,vc,a),Fg(t,r);else if(Hy(u,t,n,a,r))r.stopPropagation();else if(Fg(t,r),n&4&&-1<Fy.indexOf(t)){for(;u!==null;){var f=Na(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=de(f.pendingLanes);if(v!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var H=1<<31-Ie(v);A.entanglements[1]|=H,v&=~H}Vi(f),(Ht&6)===0&&(ec=b()+500,Po(0))}}break;case 31:case 13:A=xs(f,2),A!==null&&ni(A,f,2),nc(),oh(f,2)}if(f=ch(r),f===null&&jf(t,n,r,vc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else jf(t,n,r,null,a)}}function ch(t){return t=uu(t),uh(t)}var vc=null;function uh(t){if(vc=null,t=Ua(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return vc=t,null}function Bg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case pe:return 2;case Se:return 8;case ue:case Xe:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var fh=!1,Ja=null,$a=null,es=null,ko=new Map,Xo=new Map,ts=[],Fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fg(t,n){switch(t){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":es=null;break;case"pointerover":case"pointerout":ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(n.pointerId)}}function Wo(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Na(n),n!==null&&Pg(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Hy(t,n,a,r,u){switch(n){case"focusin":return Ja=Wo(Ja,t,n,a,r,u),!0;case"dragenter":return $a=Wo($a,t,n,a,r,u),!0;case"mouseover":return es=Wo(es,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return ko.set(f,Wo(ko.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Xo.set(f,Wo(Xo.get(f)||null,t,n,a,r,u)),!0}return!1}function Hg(t){var n=Ua(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Kn(t.priority,function(){zg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Kn(t.priority,function(){zg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ch(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);cu=r,a.target.dispatchEvent(r),cu=null}else return n=Na(a),n!==null&&Pg(n),t.blockedOn=a,!1;n.shift()}return!0}function Gg(t,n,a){xc(t)&&a.delete(n)}function Gy(){fh=!1,Ja!==null&&xc(Ja)&&(Ja=null),$a!==null&&xc($a)&&($a=null),es!==null&&xc(es)&&(es=null),ko.forEach(Gg),Xo.forEach(Gg)}function yc(t,n){t.blockedOn===n&&(t.blockedOn=null,fh||(fh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Gy)))}var Sc=null;function Vg(t){Sc!==t&&(Sc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Sc===t&&(Sc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(uh(r||a)===null)continue;break}var f=Na(a);f!==null&&(t.splice(n,3),n-=3,cf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function Tr(t){function n(H){return yc(H,t)}Ja!==null&&yc(Ja,t),$a!==null&&yc($a,t),es!==null&&yc(es,t),ko.forEach(n),Xo.forEach(n);for(var a=0;a<ts.length;a++){var r=ts[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<ts.length&&(a=ts[0],a.blockedOn===null);)Hg(a),a.blockedOn===null&&ts.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],v=u[ln]||null;if(typeof f=="function")v||Vg(a);else if(v){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[ln]||null)A=v.formAction;else if(uh(u)!==null)continue}else A=v.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),Vg(a)}}}function kg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function hh(t){this._internalRoot=t}Mc.prototype.render=hh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=hi();Og(a,r,t,n,null,null)},Mc.prototype.unmount=hh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Og(t.current,2,null,t,null,null),nc(),n[Ri]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var n=na();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ts.length&&n!==0&&n<ts[a].priority;a++);ts.splice(a,0,t),a===0&&Hg(t)}};var Xg=e.version;if(Xg!=="19.2.3")throw Error(s(527,Xg,"19.2.3"));V.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Vy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{Te=bc.inject(Vy),we=bc}catch{}}return Yo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=Qm,f=Jm,v=$m;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Ng(t,1,!1,null,null,a,r,null,u,f,v,kg),t[Ri]=n.current,Yf(t),new hh(n)},Yo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=Qm,v=Jm,A=$m,H=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Ng(t,1,!0,n,a??null,r,u,H,f,v,A,kg),n.context=Lg(null),a=n.current,r=hi(),r=ta(r),u=Ha(r),u.callback=null,Ga(a,u,r),a=r,n.current.lanes=a,_t(n,a),Vi(n),t[Ri]=n.current,Yf(t),new Mc(n)},Yo.version="19.2.3",Yo}var e_;function $y(){if(e_)return mh.exports;e_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),mh.exports=Jy(),mh.exports}var eS=$y();const tS=nv(eS),nS="modulepreload",iS=function(o){return"/horror/"+o},t_={},aS=function(e,i,s){let l=Promise.resolve();if(i&&i.length>0){let p=function(_){return Promise.all(_.map(g=>Promise.resolve(g).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};var h=p;document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=d?.nonce||d?.getAttribute("nonce");l=p(i.map(_=>{if(_=iS(_),_ in t_)return;t_[_]=!0;const g=_.endsWith(".css"),y=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${y}`))return;const S=document.createElement("link");if(S.rel=g?"stylesheet":nS,g||(S.as="script"),S.crossOrigin="",S.href=_,m&&S.setAttribute("nonce",m),document.head.appendChild(S),g)return new Promise((T,C)=>{S.addEventListener("load",T),S.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${_}`)))})}))}function c(d){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=d,window.dispatchEvent(m),!m.defaultPrevented)throw d}return l.then(d=>{for(const m of d||[])m.status==="rejected"&&c(m.reason);return e().catch(c)})};function sS(o={}){const{immediate:e=!1,onNeedRefresh:i,onOfflineReady:s,onRegistered:l,onRegisteredSW:c,onRegisterError:h}=o;let d,m;const p=async(g=!0)=>{await m};async function _(){if("serviceWorker"in navigator){if(d=await aS(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:g}},[]).then(({Workbox:g})=>new g("/horror/sw.js",{scope:"/horror/",type:"classic"})).catch(g=>{h?.(g)}),!d)return;d.addEventListener("activated",g=>{(g.isUpdate||g.isExternal)&&window.location.reload()}),d.addEventListener("installed",g=>{g.isUpdate||s?.()}),d.register({immediate:e}).then(g=>{c?c("/horror/sw.js",g):l?.(g)}).catch(g=>{h?.(g)})}}return m=_(),p}const rS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),oS=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),n_=o=>{const e=oS(o);return e.charAt(0).toUpperCase()+e.slice(1)},iv=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),lS=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var cS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const uS=xt.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},m)=>xt.createElement("svg",{ref:m,...cS,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:iv("lucide",l),...!c&&!lS(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,_])=>xt.createElement(p,_)),...Array.isArray(c)?c:[c]]));const Ws=(o,e)=>{const i=xt.forwardRef(({className:s,...l},c)=>xt.createElement(uS,{ref:c,iconNode:e,className:iv(`lucide-${rS(n_(o))}`,`lucide-${o}`,s),...l}));return i.displayName=n_(o),i};const fS=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],av=Ws("arrow-left",fS);const hS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],dS=Ws("circle-alert",hS);const pS=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],mS=Ws("eye",pS);const gS=[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]],_S=Ws("ghost",gS);const vS=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],xS=Ws("mountain",vS);const yS=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],SS=Ws("play",yS);const MS=[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]],bS=Ws("wheat",MS);const Zd="182",ES=0,i_=1,TS=2,Yc=1,AS=2,il=3,hs=0,ai=1,qi=2,wa=0,Wr=1,a_=2,s_=3,r_=4,wS=5,Fs=100,RS=101,CS=102,DS=103,US=104,NS=200,LS=201,OS=202,IS=203,ed=204,td=205,PS=206,zS=207,BS=208,FS=209,HS=210,GS=211,VS=212,kS=213,XS=214,nd=0,id=1,ad=2,jr=3,sd=4,rd=5,od=6,ld=7,sv=0,WS=1,qS=2,Ki=0,rv=1,ov=2,lv=3,cv=4,uv=5,fv=6,hv=7,dv=300,ks=301,Zr=302,cd=303,ud=304,au=306,qr=1e3,Aa=1001,fd=1002,Tn=1003,YS=1004,Ec=1005,Wn=1006,xh=1007,Gs=1008,mi=1009,pv=1010,mv=1011,rl=1012,Kd=1013,Ji=1014,ji=1015,Ca=1016,Qd=1017,Jd=1018,ol=1020,gv=35902,_v=35899,vv=1021,xv=1022,Pi=1023,Da=1026,Vs=1027,yv=1028,$d=1029,Kr=1030,ep=1031,tp=1033,jc=33776,Zc=33777,Kc=33778,Qc=33779,hd=35840,dd=35841,pd=35842,md=35843,gd=36196,_d=37492,vd=37496,xd=37488,yd=37489,Sd=37490,Md=37491,bd=37808,Ed=37809,Td=37810,Ad=37811,wd=37812,Rd=37813,Cd=37814,Dd=37815,Ud=37816,Nd=37817,Ld=37818,Od=37819,Id=37820,Pd=37821,zd=36492,Bd=36494,Fd=36495,Hd=36283,Gd=36284,Vd=36285,kd=36286,jS=3200,Sv=0,ZS=1,cs="",Ai="srgb",Qr="srgb-linear",$c="linear",qt="srgb",Ar=7680,o_=519,KS=512,QS=513,JS=514,np=515,$S=516,eM=517,ip=518,tM=519,Xd=35044,l_="300 es",Zi=2e3,eu=2001;function Mv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ll(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function nM(){const o=ll("canvas");return o.style.display="block",o}const c_={};function tu(...o){const e="THREE."+o.shift();console.log(e,...o)}function ct(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Lt(...o){const e="THREE."+o.shift();console.error(e,...o)}function cl(...o){const e=o.join(" ");e in c_||(c_[e]=!0,ct(...o))}function iM(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class $r{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yh=Math.PI/180,nu=180/Math.PI;function fs(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Vn[o&255]+Vn[o>>8&255]+Vn[o>>16&255]+Vn[o>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[i&63|128]+Vn[i>>8&255]+"-"+Vn[i>>16&255]+Vn[i>>24&255]+Vn[s&255]+Vn[s>>8&255]+Vn[s>>16&255]+Vn[s>>24&255]).toLowerCase()}function Ut(o,e,i){return Math.max(e,Math.min(i,o))}function aM(o,e){return(o%e+e)%e}function Sh(o,e,i){return(1-i)*o+i*e}function Yi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Kt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class mt{constructor(e=0,i=0){mt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ut(this.x,e.x,i.x),this.y=Ut(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ut(this.x,e,i),this.y=Ut(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ut(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ut(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],g=s[l+3],y=c[h+0],S=c[h+1],T=c[h+2],C=c[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g;return}if(d>=1){e[i+0]=y,e[i+1]=S,e[i+2]=T,e[i+3]=C;return}if(g!==C||m!==y||p!==S||_!==T){let M=m*y+p*S+_*T+g*C;M<0&&(y=-y,S=-S,T=-T,C=-C,M=-M);let x=1-d;if(M<.9995){const D=Math.acos(M),N=Math.sin(D);x=Math.sin(x*D)/N,d=Math.sin(d*D)/N,m=m*x+y*d,p=p*x+S*d,_=_*x+T*d,g=g*x+C*d}else{m=m*x+y*d,p=p*x+S*d,_=_*x+T*d,g=g*x+C*d;const D=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=D,p*=D,_*=D,g*=D}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],g=c[h],y=c[h+1],S=c[h+2],T=c[h+3];return e[i]=d*T+_*g+m*S-p*y,e[i+1]=m*T+_*y+p*g-d*S,e[i+2]=p*T+_*S+d*y-m*g,e[i+3]=_*T-d*g-m*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),g=d(c/2),y=m(s/2),S=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=y*_*g+p*S*T,this._y=p*S*g-y*_*T,this._z=p*_*T+y*S*g,this._w=p*_*g-y*S*T;break;case"YXZ":this._x=y*_*g+p*S*T,this._y=p*S*g-y*_*T,this._z=p*_*T-y*S*g,this._w=p*_*g+y*S*T;break;case"ZXY":this._x=y*_*g-p*S*T,this._y=p*S*g+y*_*T,this._z=p*_*T+y*S*g,this._w=p*_*g-y*S*T;break;case"ZYX":this._x=y*_*g-p*S*T,this._y=p*S*g+y*_*T,this._z=p*_*T-y*S*g,this._w=p*_*g+y*S*T;break;case"YZX":this._x=y*_*g+p*S*T,this._y=p*S*g+y*_*T,this._z=p*_*T-y*S*g,this._w=p*_*g-y*S*T;break;case"XZY":this._x=y*_*g-p*S*T,this._y=p*S*g-y*_*T,this._z=p*_*T+y*S*g,this._w=p*_*g+y*S*T;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],y=s+d+g;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(s>d&&s>g){const S=2*Math.sqrt(1+s-d-g);this._w=(_-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-s-g);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+g-s-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-s*p,this._z=c*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,h=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,i=0,s=0){Q.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(u_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(u_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),_=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+m*p+h*g-d*_,this.y=s+m*_+d*p-c*g,this.z=l+m*g+c*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ut(this.x,e.x,i.x),this.y=Ut(this.y,e.y,i.y),this.z=Ut(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ut(this.x,e,i),this.y=Ut(this.y,e,i),this.z=Ut(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ut(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ut(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mh=new Q,u_=new fl;class yt{constructor(e,i,s,l,c,h,d,m,p){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p)}set(e,i,s,l,c,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],g=s[7],y=s[2],S=s[5],T=s[8],C=l[0],M=l[3],x=l[6],D=l[1],N=l[4],U=l[7],O=l[2],B=l[5],P=l[8];return c[0]=h*C+d*D+m*O,c[3]=h*M+d*N+m*B,c[6]=h*x+d*U+m*P,c[1]=p*C+_*D+g*O,c[4]=p*M+_*N+g*B,c[7]=p*x+_*U+g*P,c[2]=y*C+S*D+T*O,c[5]=y*M+S*N+T*B,c[8]=y*x+S*U+T*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-s*c*_+s*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=_*h-d*p,y=d*m-_*c,S=p*c-h*m,T=i*g+s*y+l*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=g*C,e[1]=(l*p-_*s)*C,e[2]=(d*s-l*h)*C,e[3]=y*C,e[4]=(_*i-l*m)*C,e[5]=(l*c-d*i)*C,e[6]=S*C,e[7]=(s*m-p*i)*C,e[8]=(h*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(bh.makeScale(e,i)),this}rotate(e){return this.premultiply(bh.makeRotation(-e)),this}translate(e,i){return this.premultiply(bh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bh=new yt,f_=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),h_=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sM(){const o={enabled:!0,workingColorSpace:Qr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===qt&&(l.r=Ra(l.r),l.g=Ra(l.g),l.b=Ra(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===qt&&(l.r=Yr(l.r),l.g=Yr(l.g),l.b=Yr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===cs?$c:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return cl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return cl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Qr]:{primaries:e,whitePoint:s,transfer:$c,toXYZ:f_,fromXYZ:h_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:e,whitePoint:s,transfer:qt,toXYZ:f_,fromXYZ:h_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),o}const Ot=sM();function Ra(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Yr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let wr;class rM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{wr===void 0&&(wr=ll("canvas")),wr.width=e.width,wr.height=e.height;const l=wr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=wr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ll("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ra(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ra(i[s]/255)*255):i[s]=Ra(i[s]);return{data:i,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oM=0;class ap{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Eh(l[h].image)):c.push(Eh(l[h]))}else c=Eh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Eh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?rM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let lM=0;const Th=new Q;class qn extends $r{constructor(e=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,s=Aa,l=Aa,c=Wn,h=Gs,d=Pi,m=mi,p=qn.DEFAULT_ANISOTROPY,_=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=fs(),this.name="",this.source=new ap(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Th).x}get height(){return this.source.getSize(Th).y}get depth(){return this.source.getSize(Th).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ct(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qr:e.x=e.x-Math.floor(e.x);break;case Aa:e.x=e.x<0?0:1;break;case fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qr:e.y=e.y-Math.floor(e.y);break;case Aa:e.y=e.y<0?0:1;break;case fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=dv;qn.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,i=0,s=0,l=1){fn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],_=m[4],g=m[8],y=m[1],S=m[5],T=m[9],C=m[2],M=m[6],x=m[10];if(Math.abs(_-y)<.01&&Math.abs(g-C)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+y)<.1&&Math.abs(g+C)<.1&&Math.abs(T+M)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,U=(S+1)/2,O=(x+1)/2,B=(_+y)/4,P=(g+C)/4,k=(T+M)/4;return N>U&&N>O?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=B/s,c=P/s):U>O?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=B/l,c=k/l):O<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),s=P/c,l=k/c),this.set(s,l,c,i),this}let D=Math.sqrt((M-T)*(M-T)+(g-C)*(g-C)+(y-_)*(y-_));return Math.abs(D)<.001&&(D=1),this.x=(M-T)/D,this.y=(g-C)/D,this.z=(y-_)/D,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ut(this.x,e.x,i.x),this.y=Ut(this.y,e.y,i.y),this.z=Ut(this.z,e.z,i.z),this.w=Ut(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ut(this.x,e,i),this.y=Ut(this.y,e,i),this.z=Ut(this.z,e,i),this.w=Ut(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ut(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cM extends $r{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new fn(0,0,e,i),this.scissorTest=!1,this.viewport=new fn(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new qn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new ap(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends cM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class bv extends qn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uM extends qn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl{constructor(e=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Li.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Li.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Li.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Li):Li.fromBufferAttribute(c,h),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Tc.copy(s.boundingBox)),Tc.applyMatrix4(e.matrixWorld),this.union(Tc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Ac.subVectors(this.max,jo),Rr.subVectors(e.a,jo),Cr.subVectors(e.b,jo),Dr.subVectors(e.c,jo),is.subVectors(Cr,Rr),as.subVectors(Dr,Cr),Ns.subVectors(Rr,Dr);let i=[0,-is.z,is.y,0,-as.z,as.y,0,-Ns.z,Ns.y,is.z,0,-is.x,as.z,0,-as.x,Ns.z,0,-Ns.x,-is.y,is.x,0,-as.y,as.x,0,-Ns.y,Ns.x,0];return!Ah(i,Rr,Cr,Dr,Ac)||(i=[1,0,0,0,1,0,0,0,1],!Ah(i,Rr,Cr,Dr,Ac))?!1:(wc.crossVectors(is,as),i=[wc.x,wc.y,wc.z],Ah(i,Rr,Cr,Dr,Ac))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sa=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Li=new Q,Tc=new hl,Rr=new Q,Cr=new Q,Dr=new Q,is=new Q,as=new Q,Ns=new Q,jo=new Q,Ac=new Q,wc=new Q,Ls=new Q;function Ah(o,e,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){Ls.fromArray(o,c);const d=l.x*Math.abs(Ls.x)+l.y*Math.abs(Ls.y)+l.z*Math.abs(Ls.z),m=e.dot(Ls),p=i.dot(Ls),_=s.dot(Ls);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const fM=new hl,Zo=new Q,wh=new Q;class sp{constructor(e=new Q,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):fM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const i=Zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Zo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(wh)),this.expandByPoint(Zo.copy(e.center).sub(wh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ma=new Q,Rh=new Q,Rc=new Q,ss=new Q,Ch=new Q,Cc=new Q,Dh=new Q;class hM{constructor(e=new Q,i=new Q(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ma)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ma.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ma.copy(this.origin).addScaledVector(this.direction,i),Ma.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Rh.copy(e).add(i).multiplyScalar(.5),Rc.copy(i).sub(e).normalize(),ss.copy(this.origin).sub(Rh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Rc),d=ss.dot(this.direction),m=-ss.dot(Rc),p=ss.lengthSq(),_=Math.abs(1-h*h);let g,y,S,T;if(_>0)if(g=h*m-d,y=h*d-m,T=c*_,g>=0)if(y>=-T)if(y<=T){const C=1/_;g*=C,y*=C,S=g*(g+h*y+2*d)+y*(h*g+y+2*m)+p}else y=c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;else y=-c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;else y<=-T?(g=Math.max(0,-(-h*c+d)),y=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+y*(y+2*m)+p):y<=T?(g=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+p):(g=Math.max(0,-(h*c+d)),y=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+y*(y+2*m)+p);else y=h>0?-c:c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Rh).addScaledVector(Rc,y),S}intersectSphere(e,i){Ma.subVectors(e.center,this.origin);const s=Ma.dot(this.direction),l=Ma.dot(Ma)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),_>=0?(c=(e.min.y-y.y)*_,h=(e.max.y-y.y)*_):(c=(e.max.y-y.y)*_,h=(e.min.y-y.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-y.z)*g,m=(e.max.z-y.z)*g):(d=(e.max.z-y.z)*g,m=(e.min.z-y.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ma)!==null}intersectTriangle(e,i,s,l,c){Ch.subVectors(i,e),Cc.subVectors(s,e),Dh.crossVectors(Ch,Cc);let h=this.direction.dot(Dh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ss.subVectors(this.origin,e);const m=d*this.direction.dot(Cc.crossVectors(ss,Cc));if(m<0)return null;const p=d*this.direction.dot(Ch.cross(ss));if(p<0||m+p>h)return null;const _=-d*ss.dot(Dh);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(e,i,s,l,c,h,d,m,p,_,g,y,S,T,C,M){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p,_,g,y,S,T,C,M)}set(e,i,s,l,c,h,d,m,p,_,g,y,S,T,C,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=_,x[10]=g,x[14]=y,x[3]=S,x[7]=T,x[11]=C,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Ur.setFromMatrixColumn(e,0).length(),c=1/Ur.setFromMatrixColumn(e,1).length(),h=1/Ur.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const y=h*_,S=h*g,T=d*_,C=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=S+T*p,i[5]=y-C*p,i[9]=-d*m,i[2]=C-y*p,i[6]=T+S*p,i[10]=h*m}else if(e.order==="YXZ"){const y=m*_,S=m*g,T=p*_,C=p*g;i[0]=y+C*d,i[4]=T*d-S,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=S*d-T,i[6]=C+y*d,i[10]=h*m}else if(e.order==="ZXY"){const y=m*_,S=m*g,T=p*_,C=p*g;i[0]=y-C*d,i[4]=-h*g,i[8]=T+S*d,i[1]=S+T*d,i[5]=h*_,i[9]=C-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const y=h*_,S=h*g,T=d*_,C=d*g;i[0]=m*_,i[4]=T*p-S,i[8]=y*p+C,i[1]=m*g,i[5]=C*p+y,i[9]=S*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const y=h*m,S=h*p,T=d*m,C=d*p;i[0]=m*_,i[4]=C-y*g,i[8]=T*g+S,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=S*g+T,i[10]=y-C*g}else if(e.order==="XZY"){const y=h*m,S=h*p,T=d*m,C=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=y*g+C,i[5]=h*_,i[9]=S*g-T,i[2]=T*g-S,i[6]=d*_,i[10]=C*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dM,e,pM)}lookAt(e,i,s){const l=this.elements;return di.subVectors(e,i),di.lengthSq()===0&&(di.z=1),di.normalize(),rs.crossVectors(s,di),rs.lengthSq()===0&&(Math.abs(s.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),rs.crossVectors(s,di)),rs.normalize(),Dc.crossVectors(di,rs),l[0]=rs.x,l[4]=Dc.x,l[8]=di.x,l[1]=rs.y,l[5]=Dc.y,l[9]=di.y,l[2]=rs.z,l[6]=Dc.z,l[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],g=s[5],y=s[9],S=s[13],T=s[2],C=s[6],M=s[10],x=s[14],D=s[3],N=s[7],U=s[11],O=s[15],B=l[0],P=l[4],k=l[8],E=l[12],R=l[1],G=l[5],Y=l[9],K=l[13],fe=l[2],re=l[6],z=l[10],V=l[14],ne=l[3],Me=l[7],be=l[11],I=l[15];return c[0]=h*B+d*R+m*fe+p*ne,c[4]=h*P+d*G+m*re+p*Me,c[8]=h*k+d*Y+m*z+p*be,c[12]=h*E+d*K+m*V+p*I,c[1]=_*B+g*R+y*fe+S*ne,c[5]=_*P+g*G+y*re+S*Me,c[9]=_*k+g*Y+y*z+S*be,c[13]=_*E+g*K+y*V+S*I,c[2]=T*B+C*R+M*fe+x*ne,c[6]=T*P+C*G+M*re+x*Me,c[10]=T*k+C*Y+M*z+x*be,c[14]=T*E+C*K+M*V+x*I,c[3]=D*B+N*R+U*fe+O*ne,c[7]=D*P+N*G+U*re+O*Me,c[11]=D*k+N*Y+U*z+O*be,c[15]=D*E+N*K+U*V+O*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],g=e[6],y=e[10],S=e[14],T=e[3],C=e[7],M=e[11],x=e[15],D=m*S-p*y,N=d*S-p*g,U=d*y-m*g,O=h*S-p*_,B=h*y-m*_,P=h*g-d*_;return i*(C*D-M*N+x*U)-s*(T*D-M*O+x*B)+l*(T*N-C*O+x*P)-c*(T*U-C*B+M*P)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=e[9],y=e[10],S=e[11],T=e[12],C=e[13],M=e[14],x=e[15],D=g*M*p-C*y*p+C*m*S-d*M*S-g*m*x+d*y*x,N=T*y*p-_*M*p-T*m*S+h*M*S+_*m*x-h*y*x,U=_*C*p-T*g*p+T*d*S-h*C*S-_*d*x+h*g*x,O=T*g*m-_*C*m-T*d*y+h*C*y+_*d*M-h*g*M,B=i*D+s*N+l*U+c*O;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/B;return e[0]=D*P,e[1]=(C*y*c-g*M*c-C*l*S+s*M*S+g*l*x-s*y*x)*P,e[2]=(d*M*c-C*m*c+C*l*p-s*M*p-d*l*x+s*m*x)*P,e[3]=(g*m*c-d*y*c-g*l*p+s*y*p+d*l*S-s*m*S)*P,e[4]=N*P,e[5]=(_*M*c-T*y*c+T*l*S-i*M*S-_*l*x+i*y*x)*P,e[6]=(T*m*c-h*M*c-T*l*p+i*M*p+h*l*x-i*m*x)*P,e[7]=(h*y*c-_*m*c+_*l*p-i*y*p-h*l*S+i*m*S)*P,e[8]=U*P,e[9]=(T*g*c-_*C*c-T*s*S+i*C*S+_*s*x-i*g*x)*P,e[10]=(h*C*c-T*d*c+T*s*p-i*C*p-h*s*x+i*d*x)*P,e[11]=(_*d*c-h*g*c-_*s*p+i*g*p+h*s*S-i*d*S)*P,e[12]=O*P,e[13]=(_*C*l-T*g*l+T*s*y-i*C*y-_*s*M+i*g*M)*P,e[14]=(T*d*l-h*C*l-T*s*m+i*C*m+h*s*M-i*d*M)*P,e[15]=(h*g*l-_*d*l+_*s*m-i*g*m-h*s*y+i*d*y)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,m=e.z,p=c*h,_=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,g=d+d,y=c*p,S=c*_,T=c*g,C=h*_,M=h*g,x=d*g,D=m*p,N=m*_,U=m*g,O=s.x,B=s.y,P=s.z;return l[0]=(1-(C+x))*O,l[1]=(S+U)*O,l[2]=(T-N)*O,l[3]=0,l[4]=(S-U)*B,l[5]=(1-(y+x))*B,l[6]=(M+D)*B,l[7]=0,l[8]=(T+N)*P,l[9]=(M-D)*P,l[10]=(1-(y+C))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Ur.set(l[0],l[1],l[2]).length();const h=Ur.set(l[4],l[5],l[6]).length(),d=Ur.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Oi.copy(this);const p=1/c,_=1/h,g=1/d;return Oi.elements[0]*=p,Oi.elements[1]*=p,Oi.elements[2]*=p,Oi.elements[4]*=_,Oi.elements[5]*=_,Oi.elements[6]*=_,Oi.elements[8]*=g,Oi.elements[9]*=g,Oi.elements[10]*=g,i.setFromRotationMatrix(Oi),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=Zi,m=!1){const p=this.elements,_=2*c/(i-e),g=2*c/(s-l),y=(i+e)/(i-e),S=(s+l)/(s-l);let T,C;if(m)T=c/(h-c),C=h*c/(h-c);else if(d===Zi)T=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===eu)T=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=Zi,m=!1){const p=this.elements,_=2/(i-e),g=2/(s-l),y=-(i+e)/(i-e),S=-(s+l)/(s-l);let T,C;if(m)T=1/(h-c),C=h/(h-c);else if(d===Zi)T=-2/(h-c),C=-(h+c)/(h-c);else if(d===eu)T=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Ur=new Q,Oi=new on,dM=new Q(0,0,0),pM=new Q(1,1,1),rs=new Q,Dc=new Q,di=new Q,d_=new on,p_=new fl;class $i{constructor(e=0,i=0,s=0,l=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ut(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ut(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return d_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(d_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return p_.setFromEuler(this),this.setFromQuaternion(p_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class Ev{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mM=0;const m_=new Q,Nr=new fl,ba=new on,Uc=new Q,Ko=new Q,gM=new Q,_M=new fl,g_=new Q(1,0,0),__=new Q(0,1,0),v_=new Q(0,0,1),x_={type:"added"},vM={type:"removed"},Lr={type:"childadded",child:null},Uh={type:"childremoved",child:null};class An extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new Q,i=new $i,s=new fl,l=new Q(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new yt}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ev,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Nr.setFromAxisAngle(e,i),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,i){return Nr.setFromAxisAngle(e,i),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(g_,e)}rotateY(e){return this.rotateOnAxis(__,e)}rotateZ(e){return this.rotateOnAxis(v_,e)}translateOnAxis(e,i){return m_.copy(e).applyQuaternion(this.quaternion),this.position.add(m_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(g_,e)}translateY(e){return this.translateOnAxis(__,e)}translateZ(e){return this.translateOnAxis(v_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ba.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Uc.copy(e):Uc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ba.lookAt(Ko,Uc,this.up):ba.lookAt(Uc,Ko,this.up),this.quaternion.setFromRotationMatrix(ba),l&&(ba.extractRotation(l.matrixWorld),Nr.setFromRotationMatrix(ba),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(x_),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(vM),Uh.child=e,this.dispatchEvent(Uh),Uh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ba.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ba.multiply(e.parent.matrixWorld)),e.applyMatrix4(ba),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(x_),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,gM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,_M,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),g=h(e.shapes),y=h(e.skeletons),S=h(e.animations),T=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}An.DEFAULT_UP=new Q(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ii=new Q,Ea=new Q,Nh=new Q,Ta=new Q,Or=new Q,Ir=new Q,y_=new Q,Lh=new Q,Oh=new Q,Ih=new Q,Ph=new fn,zh=new fn,Bh=new fn;class wi{constructor(e=new Q,i=new Q,s=new Q){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ii.subVectors(e,i),l.cross(Ii);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ii.subVectors(l,i),Ea.subVectors(s,i),Nh.subVectors(e,i);const h=Ii.dot(Ii),d=Ii.dot(Ea),m=Ii.dot(Nh),p=Ea.dot(Ea),_=Ea.dot(Nh),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const y=1/g,S=(p*m-d*_)*y,T=(h*_-d*m)*y;return c.set(1-S-T,T,S)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ta)===null?!1:Ta.x>=0&&Ta.y>=0&&Ta.x+Ta.y<=1}static getInterpolation(e,i,s,l,c,h,d,m){return this.getBarycoord(e,i,s,l,Ta)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ta.x),m.addScaledVector(h,Ta.y),m.addScaledVector(d,Ta.z),m)}static getInterpolatedAttribute(e,i,s,l,c,h){return Ph.setScalar(0),zh.setScalar(0),Bh.setScalar(0),Ph.fromBufferAttribute(e,i),zh.fromBufferAttribute(e,s),Bh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Ph,c.x),h.addScaledVector(zh,c.y),h.addScaledVector(Bh,c.z),h}static isFrontFacing(e,i,s,l){return Ii.subVectors(s,i),Ea.subVectors(e,i),Ii.cross(Ea).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),Ea.subVectors(this.a,this.b),Ii.cross(Ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return wi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;Or.subVectors(l,s),Ir.subVectors(c,s),Lh.subVectors(e,s);const m=Or.dot(Lh),p=Ir.dot(Lh);if(m<=0&&p<=0)return i.copy(s);Oh.subVectors(e,l);const _=Or.dot(Oh),g=Ir.dot(Oh);if(_>=0&&g<=_)return i.copy(l);const y=m*g-_*p;if(y<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Or,h);Ih.subVectors(e,c);const S=Or.dot(Ih),T=Ir.dot(Ih);if(T>=0&&S<=T)return i.copy(c);const C=S*p-m*T;if(C<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(Ir,d);const M=_*T-S*g;if(M<=0&&g-_>=0&&S-T>=0)return y_.subVectors(c,l),d=(g-_)/(g-_+(S-T)),i.copy(l).addScaledVector(y_,d);const x=1/(M+C+y);return h=C*x,d=y*x,i.copy(s).addScaledVector(Or,h).addScaledVector(Ir,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function Fh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ct{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ot.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ot.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ot.workingColorSpace){if(e=aM(e,1),i=Ut(i,0,1),s=Ut(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Fh(h,c,e+1/3),this.g=Fh(h,c,e),this.b=Fh(h,c,e-1/3)}return Ot.colorSpaceToWorking(this,l),this}setStyle(e,i=Ai){function s(c){c!==void 0&&parseFloat(c)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ct("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ai){const s=Tv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ai){return Ot.workingToColorSpace(kn.copy(this),e),Math.round(Ut(kn.r*255,0,255))*65536+Math.round(Ut(kn.g*255,0,255))*256+Math.round(Ut(kn.b*255,0,255))}getHexString(e=Ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ot.workingColorSpace){Ot.workingToColorSpace(kn.copy(this),i);const s=kn.r,l=kn.g,c=kn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Ot.workingColorSpace){return Ot.workingToColorSpace(kn.copy(this),i),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=Ai){Ot.workingToColorSpace(kn.copy(this),e);const i=kn.r,s=kn.g,l=kn.b;return e!==Ai?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(os),this.setHSL(os.h+e,os.s+i,os.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(os),e.getHSL(Nc);const s=Sh(os.h,Nc.h,i),l=Sh(os.s,Nc.s,i),c=Sh(os.l,Nc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new Ct;Ct.NAMES=Tv;let xM=0;class eo extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=Wr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ed,this.blendDst=td,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ct(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(s.blending=this.blending),this.side!==hs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ed&&(s.blendSrc=this.blendSrc),this.blendDst!==td&&(s.blendDst=this.blendDst),this.blendEquation!==Fs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==o_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xi extends eo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=sv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yn=new Q,Lc=new mt;let yM=0;class zi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Xd,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Lc.fromBufferAttribute(this,i),Lc.applyMatrix3(e),this.setXY(i,Lc.x,Lc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix3(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix4(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyNormalMatrix(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.transformDirection(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Yi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Kt(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Yi(i,this.array)),i}setX(e,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Yi(i,this.array)),i}setY(e,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Yi(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Yi(i,this.array)),i}setW(e,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Kt(i,this.array),s=Kt(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Kt(i,this.array),s=Kt(s,this.array),l=Kt(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Kt(i,this.array),s=Kt(s,this.array),l=Kt(l,this.array),c=Kt(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xd&&(e.usage=this.usage),e}}class Av extends zi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class wv extends zi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class pn extends zi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let SM=0;const Ti=new on,Hh=new An,Pr=new Q,pi=new hl,Qo=new hl,Dn=new Q;class si extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mv(e)?wv:Av)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new yt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,i,s){return Ti.makeTranslation(e,i,s),this.applyMatrix4(Ti),this}scale(e,i,s){return Ti.makeScale(e,i,s),this.applyMatrix4(Ti),this}lookAt(e){return Hh.lookAt(e),Hh.updateMatrix(),this.applyMatrix4(Hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new pn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];pi.setFromBufferAttribute(c),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const s=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Qo.setFromBufferAttribute(d),this.morphTargetsRelative?(Dn.addVectors(pi.min,Qo.min),pi.expandByPoint(Dn),Dn.addVectors(pi.max,Qo.max),pi.expandByPoint(Dn)):(pi.expandByPoint(Qo.min),pi.expandByPoint(Qo.max))}pi.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)Dn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Dn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Dn.fromBufferAttribute(d,p),m&&(Pr.fromBufferAttribute(e,p),Dn.add(Pr)),l=Math.max(l,s.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let k=0;k<s.count;k++)d[k]=new Q,m[k]=new Q;const p=new Q,_=new Q,g=new Q,y=new mt,S=new mt,T=new mt,C=new Q,M=new Q;function x(k,E,R){p.fromBufferAttribute(s,k),_.fromBufferAttribute(s,E),g.fromBufferAttribute(s,R),y.fromBufferAttribute(c,k),S.fromBufferAttribute(c,E),T.fromBufferAttribute(c,R),_.sub(p),g.sub(p),S.sub(y),T.sub(y);const G=1/(S.x*T.y-T.x*S.y);isFinite(G)&&(C.copy(_).multiplyScalar(T.y).addScaledVector(g,-S.y).multiplyScalar(G),M.copy(g).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(G),d[k].add(C),d[E].add(C),d[R].add(C),m[k].add(M),m[E].add(M),m[R].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let k=0,E=D.length;k<E;++k){const R=D[k],G=R.start,Y=R.count;for(let K=G,fe=G+Y;K<fe;K+=3)x(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const N=new Q,U=new Q,O=new Q,B=new Q;function P(k){O.fromBufferAttribute(l,k),B.copy(O);const E=d[k];N.copy(E),N.sub(O.multiplyScalar(O.dot(E))).normalize(),U.crossVectors(B,E);const G=U.dot(m[k])<0?-1:1;h.setXYZW(k,N.x,N.y,N.z,G)}for(let k=0,E=D.length;k<E;++k){const R=D[k],G=R.start,Y=R.count;for(let K=G,fe=G+Y;K<fe;K+=3)P(e.getX(K+0)),P(e.getX(K+1)),P(e.getX(K+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new zi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const l=new Q,c=new Q,h=new Q,d=new Q,m=new Q,p=new Q,_=new Q,g=new Q;if(e)for(let y=0,S=e.count;y<S;y+=3){const T=e.getX(y+0),C=e.getX(y+1),M=e.getX(y+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Dn.fromBufferAttribute(e,i),Dn.normalize(),e.setXYZ(i,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,g=d.normalized,y=new p.constructor(m.length*_);let S=0,T=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?S=m[C]*d.data.stride+d.offset:S=m[C]*_;for(let x=0;x<_;x++)y[T++]=p[S++]}return new zi(y,_,g)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new si,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,g=p.length;_<g;_++){const y=p[_],S=e(y,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,y=p.length;g<y;g++){const S=p[g];_.push(S.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],g=c[p];for(let y=0,S=g.length;y<S;y++)_.push(g[y].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const S_=new on,Os=new hM,Oc=new sp,M_=new Q,Ic=new Q,Pc=new Q,zc=new Q,Gh=new Q,Bc=new Q,b_=new Q,Fc=new Q;class St extends An{constructor(e=new si,i=new Xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Bc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],g=c[m];_!==0&&(Gh.fromBufferAttribute(g,e),h?Bc.addScaledVector(Gh,_):Bc.addScaledVector(Gh.sub(i),_))}i.add(Bc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Oc.copy(s.boundingSphere),Oc.applyMatrix4(c),Os.copy(e.ray).recast(e.near),!(Oc.containsPoint(Os.origin)===!1&&(Os.intersectSphere(Oc,M_)===null||Os.origin.distanceToSquared(M_)>(e.far-e.near)**2))&&(S_.copy(c).invert(),Os.copy(e.ray).applyMatrix4(S_),!(s.boundingBox!==null&&Os.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Os)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,C=y.length;T<C;T++){const M=y[T],x=h[M.materialIndex],D=Math.max(M.start,S.start),N=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let U=D,O=N;U<O;U+=3){const B=d.getX(U),P=d.getX(U+1),k=d.getX(U+2);l=Hc(this,x,e,s,p,_,g,B,P,k),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),C=Math.min(d.count,S.start+S.count);for(let M=T,x=C;M<x;M+=3){const D=d.getX(M),N=d.getX(M+1),U=d.getX(M+2);l=Hc(this,h,e,s,p,_,g,D,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,C=y.length;T<C;T++){const M=y[T],x=h[M.materialIndex],D=Math.max(M.start,S.start),N=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let U=D,O=N;U<O;U+=3){const B=U,P=U+1,k=U+2;l=Hc(this,x,e,s,p,_,g,B,P,k),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),C=Math.min(m.count,S.start+S.count);for(let M=T,x=C;M<x;M+=3){const D=M,N=M+1,U=M+2;l=Hc(this,h,e,s,p,_,g,D,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function MM(o,e,i,s,l,c,h,d){let m;if(e.side===ai?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,e.side===hs,d),m===null)return null;Fc.copy(d),Fc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Fc);return p<i.near||p>i.far?null:{distance:p,point:Fc.clone(),object:o}}function Hc(o,e,i,s,l,c,h,d,m,p){o.getVertexPosition(d,Ic),o.getVertexPosition(m,Pc),o.getVertexPosition(p,zc);const _=MM(o,e,i,s,Ic,Pc,zc,b_);if(_){const g=new Q;wi.getBarycoord(b_,Ic,Pc,zc,g),l&&(_.uv=wi.getInterpolatedAttribute(l,d,m,p,g,new mt)),c&&(_.uv1=wi.getInterpolatedAttribute(c,d,m,p,g,new mt)),h&&(_.normal=wi.getInterpolatedAttribute(h,d,m,p,g,new Q),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new Q,materialIndex:0};wi.getNormal(Ic,Pc,zc,y.normal),_.face=y,_.barycoord=g}return _}class Xn extends si{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],g=[];let y=0,S=0;T("z","y","x",-1,-1,s,i,e,h,c,0),T("z","y","x",1,-1,s,i,-e,h,c,1),T("x","z","y",1,1,e,s,i,l,h,2),T("x","z","y",1,-1,e,s,-i,l,h,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(_,3)),this.setAttribute("uv",new pn(g,2));function T(C,M,x,D,N,U,O,B,P,k,E){const R=U/P,G=O/k,Y=U/2,K=O/2,fe=B/2,re=P+1,z=k+1;let V=0,ne=0;const Me=new Q;for(let be=0;be<z;be++){const I=be*G-K;for(let ie=0;ie<re;ie++){const ve=ie*R-Y;Me[C]=ve*D,Me[M]=I*N,Me[x]=fe,p.push(Me.x,Me.y,Me.z),Me[C]=0,Me[M]=0,Me[x]=B>0?1:-1,_.push(Me.x,Me.y,Me.z),g.push(ie/P),g.push(1-be/k),V+=1}}for(let be=0;be<k;be++)for(let I=0;I<P;I++){const ie=y+I+re*be,ve=y+I+re*(be+1),Ce=y+(I+1)+re*(be+1),Be=y+(I+1)+re*be;m.push(ie,ve,Be),m.push(ve,Ce,Be),ne+=6}d.addGroup(S,ne,E),S+=ne,y+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Jr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Zn(o){const e={};for(let i=0;i<o.length;i++){const s=Jr(o[i]);for(const l in s)e[l]=s[l]}return e}function bM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Rv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const EM={clone:Jr,merge:Zn};var TM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ea extends eo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TM,this.fragmentShader=AM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=bM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Cv extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new Q,E_=new mt,T_=new mt;class ii extends Cv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=nu*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nu*2*Math.atan(Math.tan(yh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,i){return this.getViewBounds(e,E_,T_),i.subVectors(T_,E_)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(yh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const zr=-90,Br=1;class wM extends An{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ii(zr,Br,e,i);l.layers=this.layers,this.add(l);const c=new ii(zr,Br,e,i);c.layers=this.layers,this.add(c);const h=new ii(zr,Br,e,i);h.layers=this.layers,this.add(h);const d=new ii(zr,Br,e,i);d.layers=this.layers,this.add(d);const m=new ii(zr,Br,e,i);m.layers=this.layers,this.add(m);const p=new ii(zr,Br,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Zi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===eu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(g,y,S),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class Dv extends qn{constructor(e=[],i=ks,s,l,c,h,d,m,p,_){super(e,i,s,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uv extends Qi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Dv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Xn(5,5,5),c=new ea({name:"CubemapFromEquirect",uniforms:Jr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ai,blending:wa});c.uniforms.tEquirect.value=i;const h=new St(l,c),d=i.minFilter;return i.minFilter===Gs&&(i.minFilter=Wn),new wM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}class Un extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RM={type:"move"};class Vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,s),x=this._getHandJoint(p,C);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=_.position.distanceTo(g.position),S=.02,T=.005;p.inputState.pinching&&y>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(RM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Un;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class sl{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ct(e),this.density=i}clone(){return new sl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class CM extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class DM{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=Xd,this.updateRanges=[],this.version=0,this.uuid=fs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,s){e*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[s+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jn=new Q;class iu{constructor(e,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,s=this.data.count;i<s;i++)jn.fromBufferAttribute(this,i),jn.applyMatrix4(e),this.setXYZ(i,jn.x,jn.y,jn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)jn.fromBufferAttribute(this,i),jn.applyNormalMatrix(e),this.setXYZ(i,jn.x,jn.y,jn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)jn.fromBufferAttribute(this,i),jn.transformDirection(e),this.setXYZ(i,jn.x,jn.y,jn.z);return this}getComponent(e,i){let s=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(s=Yi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Kt(s,this.array)),this.data.array[e*this.data.stride+this.offset+i]=s,this}setX(e,i){return this.normalized&&(i=Kt(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Kt(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Kt(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Kt(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Yi(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Yi(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Yi(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Yi(i,this.array)),i}setXY(e,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(i=Kt(i,this.array),s=Kt(s,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this}setXYZ(e,i,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Kt(i,this.array),s=Kt(s,this.array),l=Kt(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=Kt(i,this.array),s=Kt(s,this.array),l=Kt(l,this.array),c=Kt(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){tu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new zi(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new iu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wd extends eo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Fr;const Jo=new Q,Hr=new Q,Gr=new Q,Vr=new mt,$o=new mt,Nv=new on,Gc=new Q,el=new Q,Vc=new Q,A_=new mt,kh=new mt,w_=new mt;class R_ extends An{constructor(e=new Wd){if(super(),this.isSprite=!0,this.type="Sprite",Fr===void 0){Fr=new si;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new DM(i,5);Fr.setIndex([0,1,2,0,2,3]),Fr.setAttribute("position",new iu(s,3,0,!1)),Fr.setAttribute("uv",new iu(s,2,3,!1))}this.geometry=Fr,this.material=e,this.center=new mt(.5,.5),this.count=1}raycast(e,i){e.camera===null&&Lt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hr.setFromMatrixScale(this.matrixWorld),Nv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Gr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const h=this.center;kc(Gc.set(-.5,-.5,0),Gr,h,Hr,l,c),kc(el.set(.5,-.5,0),Gr,h,Hr,l,c),kc(Vc.set(.5,.5,0),Gr,h,Hr,l,c),A_.set(0,0),kh.set(1,0),w_.set(1,1);let d=e.ray.intersectTriangle(Gc,el,Vc,!1,Jo);if(d===null&&(kc(el.set(-.5,.5,0),Gr,h,Hr,l,c),kh.set(0,1),d=e.ray.intersectTriangle(Gc,Vc,el,!1,Jo),d===null))return;const m=e.ray.origin.distanceTo(Jo);m<e.near||m>e.far||i.push({distance:m,point:Jo.clone(),uv:wi.getInterpolation(Jo,Gc,el,Vc,A_,kh,w_,new mt),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function kc(o,e,i,s,l,c){Vr.subVectors(o,i).addScalar(.5).multiply(s),l!==void 0?($o.x=c*Vr.x-l*Vr.y,$o.y=l*Vr.x+c*Vr.y):$o.copy(Vr),o.copy(e),o.x+=$o.x,o.y+=$o.y,o.applyMatrix4(Nv)}class UM extends qn{constructor(e=null,i=1,s=1,l,c,h,d,m,p=Tn,_=Tn,g,y){super(null,h,d,m,p,_,l,c,g,y),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xh=new Q,NM=new Q,LM=new yt;class Bs{constructor(e=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Xh.subVectors(s,i).cross(NM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Xh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||LM.getNormalMatrix(e),l=this.coplanarPoint(Xh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Is=new sp,OM=new mt(.5,.5),Xc=new Q;class rp{constructor(e=new Bs,i=new Bs,s=new Bs,l=new Bs,c=new Bs,h=new Bs){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Zi,s=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],g=c[5],y=c[6],S=c[7],T=c[8],C=c[9],M=c[10],x=c[11],D=c[12],N=c[13],U=c[14],O=c[15];if(l[0].setComponents(p-h,S-_,x-T,O-D).normalize(),l[1].setComponents(p+h,S+_,x+T,O+D).normalize(),l[2].setComponents(p+d,S+g,x+C,O+N).normalize(),l[3].setComponents(p-d,S-g,x-C,O-N).normalize(),s)l[4].setComponents(m,y,M,U).normalize(),l[5].setComponents(p-m,S-y,x-M,O-U).normalize();else if(l[4].setComponents(p-m,S-y,x-M,O-U).normalize(),i===Zi)l[5].setComponents(p+m,S+y,x+M,O+U).normalize();else if(i===eu)l[5].setComponents(m,y,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){Is.center.set(0,0,0);const i=OM.distanceTo(e.center);return Is.radius=.7071067811865476+i,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Xc.x=l.normal.x>0?e.max.x:e.min.x,Xc.y=l.normal.y>0?e.max.y:e.min.y,Xc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ul extends qn{constructor(e,i,s=Ji,l,c,h,d=Tn,m=Tn,p,_=Da,g=1){if(_!==Da&&_!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:g};super(y,l,c,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ap(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class IM extends ul{constructor(e,i=Ji,s=ks,l,c,h=Tn,d=Tn,m,p=Da){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,i,s,l,c,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Lv extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ds extends si{constructor(e=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],g=[],y=[],S=[];let T=0;const C=[],M=s/2;let x=0;D(),h===!1&&(e>0&&N(!0),i>0&&N(!1)),this.setIndex(_),this.setAttribute("position",new pn(g,3)),this.setAttribute("normal",new pn(y,3)),this.setAttribute("uv",new pn(S,2));function D(){const U=new Q,O=new Q;let B=0;const P=(i-e)/s;for(let k=0;k<=c;k++){const E=[],R=k/c,G=R*(i-e)+e;for(let Y=0;Y<=l;Y++){const K=Y/l,fe=K*m+d,re=Math.sin(fe),z=Math.cos(fe);O.x=G*re,O.y=-R*s+M,O.z=G*z,g.push(O.x,O.y,O.z),U.set(re,P,z).normalize(),y.push(U.x,U.y,U.z),S.push(K,1-R),E.push(T++)}C.push(E)}for(let k=0;k<l;k++)for(let E=0;E<c;E++){const R=C[E][k],G=C[E+1][k],Y=C[E+1][k+1],K=C[E][k+1];(e>0||E!==0)&&(_.push(R,G,K),B+=3),(i>0||E!==c-1)&&(_.push(G,Y,K),B+=3)}p.addGroup(x,B,0),x+=B}function N(U){const O=T,B=new mt,P=new Q;let k=0;const E=U===!0?e:i,R=U===!0?1:-1;for(let Y=1;Y<=l;Y++)g.push(0,M*R,0),y.push(0,R,0),S.push(.5,.5),T++;const G=T;for(let Y=0;Y<=l;Y++){const fe=Y/l*m+d,re=Math.cos(fe),z=Math.sin(fe);P.x=E*z,P.y=M*R,P.z=E*re,g.push(P.x,P.y,P.z),y.push(0,R,0),B.x=re*.5+.5,B.y=z*.5*R+.5,S.push(B.x,B.y),T++}for(let Y=0;Y<l;Y++){const K=O+Y,fe=G+Y;U===!0?_.push(fe,fe+1,K):_.push(fe+1,fe,K),k+=3}p.addGroup(x,k,U===!0?1:2),x+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class su extends ds{constructor(e=1,i=1,s=32,l=1,c=!1,h=0,d=Math.PI*2){super(0,e,i,s,l,c,h,d),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:d}}static fromJSON(e){return new su(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class op extends si{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const c=[],h=[];d(l),p(s),_(),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(c.slice(),3)),this.setAttribute("uv",new pn(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(D){const N=new Q,U=new Q,O=new Q;for(let B=0;B<i.length;B+=3)S(i[B+0],N),S(i[B+1],U),S(i[B+2],O),m(N,U,O,D)}function m(D,N,U,O){const B=O+1,P=[];for(let k=0;k<=B;k++){P[k]=[];const E=D.clone().lerp(U,k/B),R=N.clone().lerp(U,k/B),G=B-k;for(let Y=0;Y<=G;Y++)Y===0&&k===B?P[k][Y]=E:P[k][Y]=E.clone().lerp(R,Y/G)}for(let k=0;k<B;k++)for(let E=0;E<2*(B-k)-1;E++){const R=Math.floor(E/2);E%2===0?(y(P[k][R+1]),y(P[k+1][R]),y(P[k][R])):(y(P[k][R+1]),y(P[k+1][R+1]),y(P[k+1][R]))}}function p(D){const N=new Q;for(let U=0;U<c.length;U+=3)N.x=c[U+0],N.y=c[U+1],N.z=c[U+2],N.normalize().multiplyScalar(D),c[U+0]=N.x,c[U+1]=N.y,c[U+2]=N.z}function _(){const D=new Q;for(let N=0;N<c.length;N+=3){D.x=c[N+0],D.y=c[N+1],D.z=c[N+2];const U=M(D)/2/Math.PI+.5,O=x(D)/Math.PI+.5;h.push(U,1-O)}T(),g()}function g(){for(let D=0;D<h.length;D+=6){const N=h[D+0],U=h[D+2],O=h[D+4],B=Math.max(N,U,O),P=Math.min(N,U,O);B>.9&&P<.1&&(N<.2&&(h[D+0]+=1),U<.2&&(h[D+2]+=1),O<.2&&(h[D+4]+=1))}}function y(D){c.push(D.x,D.y,D.z)}function S(D,N){const U=D*3;N.x=e[U+0],N.y=e[U+1],N.z=e[U+2]}function T(){const D=new Q,N=new Q,U=new Q,O=new Q,B=new mt,P=new mt,k=new mt;for(let E=0,R=0;E<c.length;E+=9,R+=6){D.set(c[E+0],c[E+1],c[E+2]),N.set(c[E+3],c[E+4],c[E+5]),U.set(c[E+6],c[E+7],c[E+8]),B.set(h[R+0],h[R+1]),P.set(h[R+2],h[R+3]),k.set(h[R+4],h[R+5]),O.copy(D).add(N).add(U).divideScalar(3);const G=M(O);C(B,R+0,D,G),C(P,R+2,N,G),C(k,R+4,U,G)}}function C(D,N,U,O){O<0&&D.x===1&&(h[N]=D.x-1),U.x===0&&U.z===0&&(h[N]=O/2/Math.PI+.5)}function M(D){return Math.atan2(D.z,-D.x)}function x(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new op(e.vertices,e.indices,e.radius,e.detail)}}class lp extends op{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=1/s,c=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-l,-s,0,-l,s,0,l,-s,0,l,s,-l,-s,0,-l,s,0,l,-s,0,l,s,0,-s,0,-l,s,0,-l,-s,0,l,s,0,l],h=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(c,h,e,i),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new lp(e.radius,e.detail)}}class Xs extends si{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,g=e/d,y=i/m,S=[],T=[],C=[],M=[];for(let x=0;x<_;x++){const D=x*y-h;for(let N=0;N<p;N++){const U=N*g-c;T.push(U,-D,0),C.push(0,0,1),M.push(N/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let D=0;D<d;D++){const N=D+p*x,U=D+p*(x+1),O=D+1+p*(x+1),B=D+1+p*x;S.push(N,U,B),S.push(U,O,B)}this.setIndex(S),this.setAttribute("position",new pn(T,3)),this.setAttribute("normal",new pn(C,3)),this.setAttribute("uv",new pn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.widthSegments,e.heightSegments)}}class cp extends si{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const _=[],g=new Q,y=new Q,S=[],T=[],C=[],M=[];for(let x=0;x<=s;x++){const D=[],N=x/s;let U=0;x===0&&h===0?U=.5/i:x===s&&m===Math.PI&&(U=-.5/i);for(let O=0;O<=i;O++){const B=O/i;g.x=-e*Math.cos(l+B*c)*Math.sin(h+N*d),g.y=e*Math.cos(h+N*d),g.z=e*Math.sin(l+B*c)*Math.sin(h+N*d),T.push(g.x,g.y,g.z),y.copy(g).normalize(),C.push(y.x,y.y,y.z),M.push(B+U,1-N),D.push(p++)}_.push(D)}for(let x=0;x<s;x++)for(let D=0;D<i;D++){const N=_[x][D+1],U=_[x][D],O=_[x+1][D],B=_[x+1][D+1];(x!==0||h>0)&&S.push(N,U,B),(x!==s-1||m<Math.PI)&&S.push(U,O,B)}this.setIndex(S),this.setAttribute("position",new pn(T,3)),this.setAttribute("normal",new pn(C,3)),this.setAttribute("uv",new pn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dl extends si{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],m=[],p=[],_=new Q,g=new Q,y=new Q;for(let S=0;S<=s;S++)for(let T=0;T<=l;T++){const C=T/l*c,M=S/s*Math.PI*2;g.x=(e+i*Math.cos(M))*Math.cos(C),g.y=(e+i*Math.cos(M))*Math.sin(C),g.z=i*Math.sin(M),d.push(g.x,g.y,g.z),_.x=e*Math.cos(C),_.y=e*Math.sin(C),y.subVectors(g,_).normalize(),m.push(y.x,y.y,y.z),p.push(T/l),p.push(S/s)}for(let S=1;S<=s;S++)for(let T=1;T<=l;T++){const C=(l+1)*S+T-1,M=(l+1)*(S-1)+T-1,x=(l+1)*(S-1)+T,D=(l+1)*S+T;h.push(C,M,D),h.push(M,x,D)}this.setIndex(h),this.setAttribute("position",new pn(d,3)),this.setAttribute("normal",new pn(m,3)),this.setAttribute("uv",new pn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class PM extends ea{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class En extends eo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sv,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zM extends eo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BM extends eo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wh={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class FM{constructor(e,i,s){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(_){d++,c===!1&&l.onStart!==void 0&&l.onStart(_,h,d),c=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,y=p.length;g<y;g+=2){const S=p[g],T=p[g+1];if(S.global&&(S.lastIndex=0),S.test(_))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const HM=new FM;class up{constructor(e){this.manager=e!==void 0?e:HM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,c){s.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}up.DEFAULT_MATERIAL_NAME="__DEFAULT";const kr=new WeakMap;class GM extends up{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,h=Wh.get(`image:${e}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(h),c.manager.itemEnd(e)},0);else{let g=kr.get(h);g===void 0&&(g=[],kr.set(h,g)),g.push({onLoad:i,onError:l})}return h}const d=ll("img");function m(){_(),i&&i(this);const g=kr.get(this)||[];for(let y=0;y<g.length;y++){const S=g[y];S.onLoad&&S.onLoad(this)}kr.delete(this),c.manager.itemEnd(e)}function p(g){_(),l&&l(g),Wh.remove(`image:${e}`);const y=kr.get(this)||[];for(let S=0;S<y.length;S++){const T=y[S];T.onError&&T.onError(g)}kr.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function _(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Wh.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class VM extends up{constructor(e){super(e)}load(e,i,s,l){const c=new qn,h=new GM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}class ru extends An{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const qh=new on,C_=new Q,D_=new Q;class fp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rp,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new fn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;C_.setFromMatrixPosition(e.matrixWorld),i.position.copy(C_),D_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(D_),i.updateMatrixWorld(),qh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(qh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kM extends fp{constructor(){super(new ii(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const i=this.camera,s=nu*2*e.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class XM extends ru{constructor(e,i,s=0,l=Math.PI/3,c=0,h=2){super(e,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.distance=s,this.angle=l,this.penumbra=c,this.decay=h,this.map=null,this.shadow=new kM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(e).uuid),i.object.shadow=this.shadow.toJSON(),i}}class WM extends fp{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class Yh extends ru{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new WM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class hp extends Cv{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class qM extends fp{constructor(){super(new hp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class YM extends ru{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new qM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class jM extends ru{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class ZM extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function U_(o,e,i,s){const l=KM(s);switch(i){case vv:return o*e;case yv:return o*e/l.components*l.byteLength;case $d:return o*e/l.components*l.byteLength;case Kr:return o*e*2/l.components*l.byteLength;case ep:return o*e*2/l.components*l.byteLength;case xv:return o*e*3/l.components*l.byteLength;case Pi:return o*e*4/l.components*l.byteLength;case tp:return o*e*4/l.components*l.byteLength;case jc:case Zc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Kc:case Qc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case dd:case md:return Math.max(o,16)*Math.max(e,8)/4;case hd:case pd:return Math.max(o,8)*Math.max(e,8)/2;case gd:case _d:case xd:case yd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case vd:case Sd:case Md:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Td:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case wd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Od:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Id:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Pd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case zd:case Bd:case Fd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Hd:case Gd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Vd:case kd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function KM(o){switch(o){case mi:case pv:return{byteLength:1,components:1};case rl:case mv:case Ca:return{byteLength:2,components:1};case Qd:case Jd:return{byteLength:2,components:4};case Ji:case Kd:case ji:return{byteLength:4,components:1};case gv:case _v:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zd}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zd);function Ov(){let o=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function QM(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,_),d.onUploadCallback();let S;if(p instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=o.SHORT;else if(p instanceof Uint32Array)S=o.UNSIGNED_INT;else if(p instanceof Int32Array)S=o.INT;else if(p instanceof Int8Array)S=o.BYTE;else if(p instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,_);else{g.sort((S,T)=>S.start-T.start);let y=0;for(let S=1;S<g.length;S++){const T=g[y],C=g[S];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++y,g[y]=C)}g.length=y+1;for(let S=0,T=g.length;S<T;S++){const C=g[S];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var JM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$M=`#ifdef USE_ALPHAHASH
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
#endif`,eb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ib=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ab=`#ifdef USE_AOMAP
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
#endif`,sb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rb=`#ifdef USE_BATCHING
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
#endif`,ob=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ub=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fb=`#ifdef USE_IRIDESCENCE
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
#endif`,hb=`#ifdef USE_BUMPMAP
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
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_b=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sb=`#define PI 3.141592653589793
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
} // validated`,Mb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bb=`vec3 transformedNormal = objectNormal;
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
#endif`,Eb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ab=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Db=`#ifdef USE_ENVMAP
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
#endif`,Ub=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
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
#endif`,Lb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ob=`#ifdef USE_ENVMAP
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
#endif`,Ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fb=`#ifdef USE_GRADIENTMAP
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
}`,Hb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kb=`uniform bool receiveShadow;
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
#endif`,Xb=`#ifdef USE_ENVMAP
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
#endif`,Wb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zb=`PhysicalMaterial material;
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
#endif`,Kb=`uniform sampler2D dfgLUT;
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
}`,Qb=`
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
#endif`,Jb=`#if defined( RE_IndirectDiffuse )
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
#endif`,$b=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oE=`#if defined( USE_POINTS_UV )
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
#endif`,lE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dE=`#ifdef USE_MORPHTARGETS
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
#endif`,pE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yE=`#ifdef USE_NORMALMAP
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
#endif`,SE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ME=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PE=`float getShadowMask() {
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
}`,zE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BE=`#ifdef USE_SKINNING
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
#endif`,FE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HE=`#ifdef USE_SKINNING
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
#endif`,GE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,WE=`#ifdef USE_TRANSMISSION
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
#endif`,qE=`#ifdef USE_TRANSMISSION
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JE=`uniform sampler2D t2D;
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
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`#include <common>
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
}`,a1=`#if DEPTH_PACKING == 3200
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
}`,s1=`#define DISTANCE
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
}`,r1=`#define DISTANCE
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`uniform float scale;
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
}`,u1=`uniform vec3 diffuse;
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
}`,f1=`#include <common>
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
}`,h1=`uniform vec3 diffuse;
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
}`,d1=`#define LAMBERT
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
}`,p1=`#define LAMBERT
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
}`,m1=`#define MATCAP
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
}`,g1=`#define MATCAP
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
}`,_1=`#define NORMAL
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
}`,v1=`#define NORMAL
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
}`,x1=`#define PHONG
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
}`,y1=`#define PHONG
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
}`,S1=`#define STANDARD
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
}`,M1=`#define STANDARD
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
}`,b1=`#define TOON
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
}`,E1=`#define TOON
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
}`,T1=`uniform float size;
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
}`,A1=`uniform vec3 diffuse;
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
}`,w1=`#include <common>
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
}`,R1=`uniform vec3 color;
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
}`,C1=`uniform float rotation;
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
}`,D1=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:JM,alphahash_pars_fragment:$M,alphamap_fragment:eb,alphamap_pars_fragment:tb,alphatest_fragment:nb,alphatest_pars_fragment:ib,aomap_fragment:ab,aomap_pars_fragment:sb,batching_pars_vertex:rb,batching_vertex:ob,begin_vertex:lb,beginnormal_vertex:cb,bsdfs:ub,iridescence_fragment:fb,bumpmap_pars_fragment:hb,clipping_planes_fragment:db,clipping_planes_pars_fragment:pb,clipping_planes_pars_vertex:mb,clipping_planes_vertex:gb,color_fragment:_b,color_pars_fragment:vb,color_pars_vertex:xb,color_vertex:yb,common:Sb,cube_uv_reflection_fragment:Mb,defaultnormal_vertex:bb,displacementmap_pars_vertex:Eb,displacementmap_vertex:Tb,emissivemap_fragment:Ab,emissivemap_pars_fragment:wb,colorspace_fragment:Rb,colorspace_pars_fragment:Cb,envmap_fragment:Db,envmap_common_pars_fragment:Ub,envmap_pars_fragment:Nb,envmap_pars_vertex:Lb,envmap_physical_pars_fragment:Xb,envmap_vertex:Ob,fog_vertex:Ib,fog_pars_vertex:Pb,fog_fragment:zb,fog_pars_fragment:Bb,gradientmap_pars_fragment:Fb,lightmap_pars_fragment:Hb,lights_lambert_fragment:Gb,lights_lambert_pars_fragment:Vb,lights_pars_begin:kb,lights_toon_fragment:Wb,lights_toon_pars_fragment:qb,lights_phong_fragment:Yb,lights_phong_pars_fragment:jb,lights_physical_fragment:Zb,lights_physical_pars_fragment:Kb,lights_fragment_begin:Qb,lights_fragment_maps:Jb,lights_fragment_end:$b,logdepthbuf_fragment:eE,logdepthbuf_pars_fragment:tE,logdepthbuf_pars_vertex:nE,logdepthbuf_vertex:iE,map_fragment:aE,map_pars_fragment:sE,map_particle_fragment:rE,map_particle_pars_fragment:oE,metalnessmap_fragment:lE,metalnessmap_pars_fragment:cE,morphinstance_vertex:uE,morphcolor_vertex:fE,morphnormal_vertex:hE,morphtarget_pars_vertex:dE,morphtarget_vertex:pE,normal_fragment_begin:mE,normal_fragment_maps:gE,normal_pars_fragment:_E,normal_pars_vertex:vE,normal_vertex:xE,normalmap_pars_fragment:yE,clearcoat_normal_fragment_begin:SE,clearcoat_normal_fragment_maps:ME,clearcoat_pars_fragment:bE,iridescence_pars_fragment:EE,opaque_fragment:TE,packing:AE,premultiplied_alpha_fragment:wE,project_vertex:RE,dithering_fragment:CE,dithering_pars_fragment:DE,roughnessmap_fragment:UE,roughnessmap_pars_fragment:NE,shadowmap_pars_fragment:LE,shadowmap_pars_vertex:OE,shadowmap_vertex:IE,shadowmask_pars_fragment:PE,skinbase_vertex:zE,skinning_pars_vertex:BE,skinning_vertex:FE,skinnormal_vertex:HE,specularmap_fragment:GE,specularmap_pars_fragment:VE,tonemapping_fragment:kE,tonemapping_pars_fragment:XE,transmission_fragment:WE,transmission_pars_fragment:qE,uv_pars_fragment:YE,uv_pars_vertex:jE,uv_vertex:ZE,worldpos_vertex:KE,background_vert:QE,background_frag:JE,backgroundCube_vert:$E,backgroundCube_frag:e1,cube_vert:t1,cube_frag:n1,depth_vert:i1,depth_frag:a1,distance_vert:s1,distance_frag:r1,equirect_vert:o1,equirect_frag:l1,linedashed_vert:c1,linedashed_frag:u1,meshbasic_vert:f1,meshbasic_frag:h1,meshlambert_vert:d1,meshlambert_frag:p1,meshmatcap_vert:m1,meshmatcap_frag:g1,meshnormal_vert:_1,meshnormal_frag:v1,meshphong_vert:x1,meshphong_frag:y1,meshphysical_vert:S1,meshphysical_frag:M1,meshtoon_vert:b1,meshtoon_frag:E1,points_vert:T1,points_frag:A1,shadow_vert:w1,shadow_frag:R1,sprite_vert:C1,sprite_frag:D1},ze={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},Wi={basic:{uniforms:Zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Zn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Zn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Zn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Zn([ze.points,ze.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Zn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Zn([ze.common,ze.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Zn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Zn([ze.sprite,ze.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:Zn([ze.common,ze.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:Zn([ze.lights,ze.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Wi.physical={uniforms:Zn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Wc={r:0,b:0,g:0},Ps=new $i,U1=new on;function N1(o,e,i,s,l,c,h){const d=new Ct(0);let m=c===!0?0:1,p,_,g=null,y=0,S=null;function T(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:e).get(U)),U}function C(N){let U=!1;const O=T(N);O===null?x(d,m):O&&O.isColor&&(x(O,1),U=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(N,U){const O=T(U);O&&(O.isCubeTexture||O.mapping===au)?(_===void 0&&(_=new St(new Xn(1,1,1),new ea({name:"BackgroundCubeMaterial",uniforms:Jr(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(B,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Ps.copy(U.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),_.material.uniforms.envMap.value=O,_.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(U1.makeRotationFromEuler(Ps)),_.material.toneMapped=Ot.getTransfer(O.colorSpace)!==qt,(g!==O||y!==O.version||S!==o.toneMapping)&&(_.material.needsUpdate=!0,g=O,y=O.version,S=o.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new St(new Xs(2,2),new ea({name:"BackgroundMaterial",uniforms:Jr(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ot.getTransfer(O.colorSpace)!==qt,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(g!==O||y!==O.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,g=O,y=O.version,S=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function x(N,U){N.getRGB(Wc,Rv(o)),s.buffers.color.setClear(Wc.r,Wc.g,Wc.b,U,h)}function D(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),m=U,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,x(d,m)},render:C,addToRenderList:M,dispose:D}}function L1(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,h=!1;function d(R,G,Y,K,fe){let re=!1;const z=g(K,Y,G);c!==z&&(c=z,p(c.object)),re=S(R,K,Y,fe),re&&T(R,K,Y,fe),fe!==null&&e.update(fe,o.ELEMENT_ARRAY_BUFFER),(re||h)&&(h=!1,U(R,G,Y,K),fe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function g(R,G,Y){const K=Y.wireframe===!0;let fe=s[R.id];fe===void 0&&(fe={},s[R.id]=fe);let re=fe[G.id];re===void 0&&(re={},fe[G.id]=re);let z=re[K];return z===void 0&&(z=y(m()),re[K]=z),z}function y(R){const G=[],Y=[],K=[];for(let fe=0;fe<i;fe++)G[fe]=0,Y[fe]=0,K[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:K,object:R,attributes:{},index:null}}function S(R,G,Y,K){const fe=c.attributes,re=G.attributes;let z=0;const V=Y.getAttributes();for(const ne in V)if(V[ne].location>=0){const be=fe[ne];let I=re[ne];if(I===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),be===void 0||be.attribute!==I||I&&be.data!==I.data)return!0;z++}return c.attributesNum!==z||c.index!==K}function T(R,G,Y,K){const fe={},re=G.attributes;let z=0;const V=Y.getAttributes();for(const ne in V)if(V[ne].location>=0){let be=re[ne];be===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(be=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(be=R.instanceColor));const I={};I.attribute=be,be&&be.data&&(I.data=be.data),fe[ne]=I,z++}c.attributes=fe,c.attributesNum=z,c.index=K}function C(){const R=c.newAttributes;for(let G=0,Y=R.length;G<Y;G++)R[G]=0}function M(R){x(R,0)}function x(R,G){const Y=c.newAttributes,K=c.enabledAttributes,fe=c.attributeDivisors;Y[R]=1,K[R]===0&&(o.enableVertexAttribArray(R),K[R]=1),fe[R]!==G&&(o.vertexAttribDivisor(R,G),fe[R]=G)}function D(){const R=c.newAttributes,G=c.enabledAttributes;for(let Y=0,K=G.length;Y<K;Y++)G[Y]!==R[Y]&&(o.disableVertexAttribArray(Y),G[Y]=0)}function N(R,G,Y,K,fe,re,z){z===!0?o.vertexAttribIPointer(R,G,Y,fe,re):o.vertexAttribPointer(R,G,Y,K,fe,re)}function U(R,G,Y,K){C();const fe=K.attributes,re=Y.getAttributes(),z=G.defaultAttributeValues;for(const V in re){const ne=re[V];if(ne.location>=0){let Me=fe[V];if(Me===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(Me=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(Me=R.instanceColor)),Me!==void 0){const be=Me.normalized,I=Me.itemSize,ie=e.get(Me);if(ie===void 0)continue;const ve=ie.buffer,Ce=ie.type,Be=ie.bytesPerElement,$=Ce===o.INT||Ce===o.UNSIGNED_INT||Me.gpuType===Kd;if(Me.isInterleavedBufferAttribute){const oe=Me.data,De=oe.stride,ke=Me.offset;if(oe.isInstancedInterleavedBuffer){for(let He=0;He<ne.locationSize;He++)x(ne.location+He,oe.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let He=0;He<ne.locationSize;He++)M(ne.location+He);o.bindBuffer(o.ARRAY_BUFFER,ve);for(let He=0;He<ne.locationSize;He++)N(ne.location+He,I/ne.locationSize,Ce,be,De*Be,(ke+I/ne.locationSize*He)*Be,$)}else{if(Me.isInstancedBufferAttribute){for(let oe=0;oe<ne.locationSize;oe++)x(ne.location+oe,Me.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let oe=0;oe<ne.locationSize;oe++)M(ne.location+oe);o.bindBuffer(o.ARRAY_BUFFER,ve);for(let oe=0;oe<ne.locationSize;oe++)N(ne.location+oe,I/ne.locationSize,Ce,be,I*Be,I/ne.locationSize*oe*Be,$)}}else if(z!==void 0){const be=z[V];if(be!==void 0)switch(be.length){case 2:o.vertexAttrib2fv(ne.location,be);break;case 3:o.vertexAttrib3fv(ne.location,be);break;case 4:o.vertexAttrib4fv(ne.location,be);break;default:o.vertexAttrib1fv(ne.location,be)}}}}D()}function O(){k();for(const R in s){const G=s[R];for(const Y in G){const K=G[Y];for(const fe in K)_(K[fe].object),delete K[fe];delete G[Y]}delete s[R]}}function B(R){if(s[R.id]===void 0)return;const G=s[R.id];for(const Y in G){const K=G[Y];for(const fe in K)_(K[fe].object),delete K[fe];delete G[Y]}delete s[R.id]}function P(R){for(const G in s){const Y=s[G];if(Y[R.id]===void 0)continue;const K=Y[R.id];for(const fe in K)_(K[fe].object),delete K[fe];delete Y[R.id]}}function k(){E(),h=!0,c!==l&&(c=l,p(c.object))}function E(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:E,dispose:O,releaseStatesOfGeometry:B,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:M,disableUnusedAttributes:D}}function O1(o,e,i){let s;function l(p){s=p}function c(p,_){o.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,g){g!==0&&(o.drawArraysInstanced(s,p,_,g),i.update(_,s,g))}function d(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,g);let S=0;for(let T=0;T<g;T++)S+=_[T];i.update(S,s,1)}function m(p,_,g,y){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<p.length;T++)h(p[T],_[T],y[T]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,_,0,y,0,g);let T=0;for(let C=0;C<g;C++)T+=_[C]*y[C];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function I1(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Pi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const k=P===Ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==mi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ji&&!k)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ct("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:D,maxVaryings:N,maxFragmentUniforms:U,maxSamples:O,samples:B}}function P1(o){const e=this;let i=null,s=0,l=!1,c=!1;const h=new Bs,d=new yt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const S=g.length!==0||y||s!==0||l;return l=y,s=g.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=_(g,y,0)},this.setState=function(g,y,S){const T=g.clippingPlanes,C=g.clipIntersection,M=g.clipShadows,x=o.get(g);if(!l||T===null||T.length===0||c&&!M)c?_(null):p();else{const D=c?0:s,N=D*4;let U=x.clippingState||null;m.value=U,U=_(T,y,N,S);for(let O=0;O!==N;++O)U[O]=i[O];x.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(g,y,S,T){const C=g!==null?g.length:0;let M=null;if(C!==0){if(M=m.value,T!==!0||M===null){const x=S+C*4,D=y.matrixWorldInverse;d.getNormalMatrix(D),(M===null||M.length<x)&&(M=new Float32Array(x));for(let N=0,U=S;N!==C;++N,U+=4)h.copy(g[N]).applyMatrix4(D,d),h.normal.toArray(M,U),M[U+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function z1(o){let e=new WeakMap;function i(h,d){return d===cd?h.mapping=ks:d===ud&&(h.mapping=Zr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===cd||d===ud)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Uv(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const us=4,N_=[.125,.215,.35,.446,.526,.582],Hs=20,B1=256,tl=new hp,L_=new Ct;let jh=null,Zh=0,Kh=0,Qh=!1;const F1=new Q;class O_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=F1}=c;jh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jh,Zh,Kh),this._renderer.xr.enabled=Qh,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ks||e.mapping===Zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Ca,format:Pi,colorSpace:Qr,depthBuffer:!1},l=I_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=I_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=H1(c)),this._blurMaterial=V1(c,e,i),this._ggxMaterial=G1(c,e,i)}return l}_compileMaterial(e){const i=new St(new si,e);this._renderer.compile(i,tl)}_sceneToCubeUV(e,i,s,l,c){const m=new ii(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,S=g.toneMapping;g.getClearColor(L_),g.toneMapping=Ki,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new St(new Xn,new Xi({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let x=!1;const D=e.background;D?D.isColor&&(M.color.copy(D),e.background=null,x=!0):(M.color.copy(L_),x=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[N],c.y,c.z)):U===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[N]));const O=this._cubeSize;Xr(l,U*O,N>2?O:0,O,O),g.setRenderTarget(l),x&&g.render(C,m),g.render(e,m)}g.toneMapping=S,g.autoClear=y,e.background=D}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===ks||e.mapping===Zr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=P_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Xr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,tl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),y=0+p*1.25,S=g*y,{_lodMax:T}=this,C=this._sizeLods[s],M=3*C*(s>T-us?s-T+us:0),x=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=T-i,Xr(c,M,x,3*C,2*C),l.setRenderTarget(c),l.render(d,tl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Xr(e,M,x,3*C,2*C),l.setRenderTarget(e),l.render(d,tl)}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const y=p.uniforms,S=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Hs-1),C=c/T,M=isFinite(c)?1+Math.floor(_*C):Hs;M>Hs&&ct(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Hs}`);const x=[];let D=0;for(let P=0;P<Hs;++P){const k=P/C,E=Math.exp(-k*k/2);x.push(E),P===0?D+=E:P<M&&(D+=2*E)}for(let P=0;P<x.length;P++)x[P]=x[P]/D;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=x,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:N}=this;y.dTheta.value=T,y.mipInt.value=N-s;const U=this._sizeLods[l],O=3*U*(l>N-us?l-N+us:0),B=4*(this._cubeSize-U);Xr(i,O,B,3*U,2*U),m.setRenderTarget(i),m.render(g,tl)}}function H1(o){const e=[],i=[],s=[];let l=o;const c=o-us+1+N_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-us?m=N_[h-o+us-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,g=1+p,y=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,T=6,C=3,M=2,x=1,D=new Float32Array(C*T*S),N=new Float32Array(M*T*S),U=new Float32Array(x*T*S);for(let B=0;B<S;B++){const P=B%3*2/3-1,k=B>2?0:-1,E=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];D.set(E,C*T*B),N.set(y,M*T*B);const R=[B,B,B,B,B,B];U.set(R,x*T*B)}const O=new si;O.setAttribute("position",new zi(D,C)),O.setAttribute("uv",new zi(N,M)),O.setAttribute("faceIndex",new zi(U,x)),s.push(new St(O,null)),l>us&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function I_(o,e,i){const s=new Qi(o,e,i);return s.texture.mapping=au,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Xr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function G1(o,e,i){return new ea({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:B1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ou(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function V1(o,e,i){const s=new Float32Array(Hs),l=new Q(0,1,0);return new ea({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ou(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function P_(){return new ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function z_(){return new ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function ou(){return`

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
	`}function k1(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===cd||m===ud,_=m===ks||m===Zr;if(p||_){let g=e.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new O_(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new O_(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function X1(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&cl("WebGLRenderer: "+s+" extension not supported."),l}}}function W1(o,e,i,s){const l={},c=new WeakMap;function h(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);y.removeEventListener("dispose",h),delete l[y.id];const S=c.get(y);S&&(e.remove(S),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(g,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const S in y)e.update(y[S],o.ARRAY_BUFFER)}function p(g){const y=[],S=g.index,T=g.attributes.position;let C=0;if(S!==null){const D=S.array;C=S.version;for(let N=0,U=D.length;N<U;N+=3){const O=D[N+0],B=D[N+1],P=D[N+2];y.push(O,B,B,P,P,O)}}else if(T!==void 0){const D=T.array;C=T.version;for(let N=0,U=D.length/3-1;N<U;N+=3){const O=N+0,B=N+1,P=N+2;y.push(O,B,B,P,P,O)}}else return;const M=new(Mv(y)?wv:Av)(y,1);M.version=C;const x=c.get(g);x&&e.remove(x),c.set(g,M)}function _(g){const y=c.get(g);if(y){const S=g.index;S!==null&&y.version<S.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function q1(o,e,i){let s;function l(y){s=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,S){o.drawElements(s,S,c,y*h),i.update(S,s,1)}function p(y,S,T){T!==0&&(o.drawElementsInstanced(s,S,c,y*h,T),i.update(S,s,T))}function _(y,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,y,0,T);let M=0;for(let x=0;x<T;x++)M+=S[x];i.update(M,s,1)}function g(y,S,T,C){if(T===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<y.length;x++)p(y[x]/h,S[x],C[x]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,c,y,0,C,0,T);let x=0;for(let D=0;D<T;D++)x+=S[D]*C[D];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function Y1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:Lt("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function j1(o,e,i){const s=new WeakMap,l=new fn;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let y=s.get(d);if(y===void 0||y.count!==g){let R=function(){k.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var S=R;y!==void 0&&y.texture.dispose();const T=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let U=0;T===!0&&(U=1),C===!0&&(U=2),M===!0&&(U=3);let O=d.attributes.position.count*U,B=1;O>e.maxTextureSize&&(B=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const P=new Float32Array(O*B*4*g),k=new bv(P,O,B,g);k.type=ji,k.needsUpdate=!0;const E=U*4;for(let G=0;G<g;G++){const Y=x[G],K=D[G],fe=N[G],re=O*B*4*G;for(let z=0;z<Y.count;z++){const V=z*E;T===!0&&(l.fromBufferAttribute(Y,z),P[re+V+0]=l.x,P[re+V+1]=l.y,P[re+V+2]=l.z,P[re+V+3]=0),C===!0&&(l.fromBufferAttribute(K,z),P[re+V+4]=l.x,P[re+V+5]=l.y,P[re+V+6]=l.z,P[re+V+7]=0),M===!0&&(l.fromBufferAttribute(fe,z),P[re+V+8]=l.x,P[re+V+9]=l.y,P[re+V+10]=l.z,P[re+V+11]=fe.itemSize===4?l.w:1)}}y={count:g,texture:k,size:new mt(O,B)},s.set(d,y),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<p.length;M++)T+=p[M];const C=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function Z1(o,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const K1={[rv]:"LINEAR_TONE_MAPPING",[ov]:"REINHARD_TONE_MAPPING",[lv]:"CINEON_TONE_MAPPING",[cv]:"ACES_FILMIC_TONE_MAPPING",[fv]:"AGX_TONE_MAPPING",[hv]:"NEUTRAL_TONE_MAPPING",[uv]:"CUSTOM_TONE_MAPPING"};function Q1(o,e,i,s,l){const c=new Qi(e,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new Qi(e,i,{type:Ca,depthBuffer:!1,stencilBuffer:!1}),d=new si;d.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new pn([0,2,0,0,2,0],2));const m=new PM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new St(d,m),_=new hp(-1,1,1,-1,0,1);let g=null,y=null,S=!1,T,C=null,M=[],x=!1;this.setSize=function(D,N){c.setSize(D,N),h.setSize(D,N);for(let U=0;U<M.length;U++){const O=M[U];O.setSize&&O.setSize(D,N)}},this.setEffects=function(D){M=D,x=M.length>0&&M[0].isRenderPass===!0;const N=c.width,U=c.height;for(let O=0;O<M.length;O++){const B=M[O];B.setSize&&B.setSize(N,U)}},this.begin=function(D,N){if(S||D.toneMapping===Ki&&M.length===0)return!1;if(C=N,N!==null){const U=N.width,O=N.height;(c.width!==U||c.height!==O)&&this.setSize(U,O)}return x===!1&&D.setRenderTarget(c),T=D.toneMapping,D.toneMapping=Ki,!0},this.hasRenderPass=function(){return x},this.end=function(D,N){D.toneMapping=T,S=!0;let U=c,O=h;for(let B=0;B<M.length;B++){const P=M[B];if(P.enabled!==!1&&(P.render(D,O,U,N),P.needsSwap!==!1)){const k=U;U=O,O=k}}if(g!==D.outputColorSpace||y!==D.toneMapping){g=D.outputColorSpace,y=D.toneMapping,m.defines={},Ot.getTransfer(g)===qt&&(m.defines.SRGB_TRANSFER="");const B=K1[y];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,D.setRenderTarget(C),D.render(p,_),C=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Iv=new qn,qd=new ul(1,1),Pv=new bv,zv=new uM,Bv=new Dv,B_=[],F_=[],H_=new Float32Array(16),G_=new Float32Array(9),V_=new Float32Array(4);function to(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=B_[l];if(c===void 0&&(c=new Float32Array(l),B_[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function wn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Rn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function lu(o,e){let i=F_[e];i===void 0&&(i=new Int32Array(e),F_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function J1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function $1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(wn(i,e))return;o.uniform2fv(this.addr,e),Rn(i,e)}}function eT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(wn(i,e))return;o.uniform3fv(this.addr,e),Rn(i,e)}}function tT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(wn(i,e))return;o.uniform4fv(this.addr,e),Rn(i,e)}}function nT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(wn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Rn(i,e)}else{if(wn(i,s))return;V_.set(s),o.uniformMatrix2fv(this.addr,!1,V_),Rn(i,s)}}function iT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(wn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Rn(i,e)}else{if(wn(i,s))return;G_.set(s),o.uniformMatrix3fv(this.addr,!1,G_),Rn(i,s)}}function aT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(wn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Rn(i,e)}else{if(wn(i,s))return;H_.set(s),o.uniformMatrix4fv(this.addr,!1,H_),Rn(i,s)}}function sT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function rT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(wn(i,e))return;o.uniform2iv(this.addr,e),Rn(i,e)}}function oT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(wn(i,e))return;o.uniform3iv(this.addr,e),Rn(i,e)}}function lT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(wn(i,e))return;o.uniform4iv(this.addr,e),Rn(i,e)}}function cT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function uT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(wn(i,e))return;o.uniform2uiv(this.addr,e),Rn(i,e)}}function fT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(wn(i,e))return;o.uniform3uiv(this.addr,e),Rn(i,e)}}function hT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(wn(i,e))return;o.uniform4uiv(this.addr,e),Rn(i,e)}}function dT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(qd.compareFunction=i.isReversedDepthBuffer()?ip:np,c=qd):c=Iv,i.setTexture2D(e||c,l)}function pT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||zv,l)}function mT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Bv,l)}function gT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Pv,l)}function _T(o){switch(o){case 5126:return J1;case 35664:return $1;case 35665:return eT;case 35666:return tT;case 35674:return nT;case 35675:return iT;case 35676:return aT;case 5124:case 35670:return sT;case 35667:case 35671:return rT;case 35668:case 35672:return oT;case 35669:case 35673:return lT;case 5125:return cT;case 36294:return uT;case 36295:return fT;case 36296:return hT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return pT;case 35680:case 36300:case 36308:case 36293:return mT;case 36289:case 36303:case 36311:case 36292:return gT}}function vT(o,e){o.uniform1fv(this.addr,e)}function xT(o,e){const i=to(e,this.size,2);o.uniform2fv(this.addr,i)}function yT(o,e){const i=to(e,this.size,3);o.uniform3fv(this.addr,i)}function ST(o,e){const i=to(e,this.size,4);o.uniform4fv(this.addr,i)}function MT(o,e){const i=to(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function bT(o,e){const i=to(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ET(o,e){const i=to(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function TT(o,e){o.uniform1iv(this.addr,e)}function AT(o,e){o.uniform2iv(this.addr,e)}function wT(o,e){o.uniform3iv(this.addr,e)}function RT(o,e){o.uniform4iv(this.addr,e)}function CT(o,e){o.uniform1uiv(this.addr,e)}function DT(o,e){o.uniform2uiv(this.addr,e)}function UT(o,e){o.uniform3uiv(this.addr,e)}function NT(o,e){o.uniform4uiv(this.addr,e)}function LT(o,e,i){const s=this.cache,l=e.length,c=lu(i,l);wn(s,c)||(o.uniform1iv(this.addr,c),Rn(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=qd:h=Iv;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,c[d])}function OT(o,e,i){const s=this.cache,l=e.length,c=lu(i,l);wn(s,c)||(o.uniform1iv(this.addr,c),Rn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||zv,c[h])}function IT(o,e,i){const s=this.cache,l=e.length,c=lu(i,l);wn(s,c)||(o.uniform1iv(this.addr,c),Rn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Bv,c[h])}function PT(o,e,i){const s=this.cache,l=e.length,c=lu(i,l);wn(s,c)||(o.uniform1iv(this.addr,c),Rn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Pv,c[h])}function zT(o){switch(o){case 5126:return vT;case 35664:return xT;case 35665:return yT;case 35666:return ST;case 35674:return MT;case 35675:return bT;case 35676:return ET;case 5124:case 35670:return TT;case 35667:case 35671:return AT;case 35668:case 35672:return wT;case 35669:case 35673:return RT;case 5125:return CT;case 36294:return DT;case 36295:return UT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return LT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return PT}}class BT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=_T(i.type)}}class FT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=zT(i.type)}}class HT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const Jh=/(\w+)(\])?(\[|\.)?/g;function k_(o,e){o.seq.push(e),o.map[e.id]=e}function GT(o,e,i){const s=o.name,l=s.length;for(Jh.lastIndex=0;;){const c=Jh.exec(s),h=Jh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){k_(i,p===void 0?new BT(d,o,e):new FT(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new HT(d),k_(i,g)),i=g}}}class Jc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);GT(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function X_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const VT=37297;let kT=0;function XT(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const W_=new yt;function WT(o){Ot._getMatrix(W_,Ot.workingColorSpace,o);const e=`mat3( ${W_.elements.map(i=>i.toFixed(4))} )`;switch(Ot.getTransfer(o)){case $c:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function q_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+XT(o.getShaderSource(e),d)}else return c}function qT(o,e){const i=WT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const YT={[rv]:"Linear",[ov]:"Reinhard",[lv]:"Cineon",[cv]:"ACESFilmic",[fv]:"AgX",[hv]:"Neutral",[uv]:"Custom"};function jT(o,e){const i=YT[e];return i===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const qc=new Q;function ZT(){Ot.getLuminanceCoefficients(qc);const o=qc.x.toFixed(4),e=qc.y.toFixed(4),i=qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function QT(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function JT(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function al(o){return o!==""}function Y_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function j_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $T=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(o){return o.replace($T,tA)}const eA=new Map;function tA(o,e){let i=Mt[e];if(i===void 0){const s=eA.get(e);if(s!==void 0)i=Mt[s],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Yd(i)}const nA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z_(o){return o.replace(nA,iA)}function iA(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function K_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const aA={[Yc]:"SHADOWMAP_TYPE_PCF",[il]:"SHADOWMAP_TYPE_VSM"};function sA(o){return aA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rA={[ks]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE",[au]:"ENVMAP_TYPE_CUBE_UV"};function oA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":rA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const lA={[Zr]:"ENVMAP_MODE_REFRACTION"};function cA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":lA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uA={[sv]:"ENVMAP_BLENDING_MULTIPLY",[WS]:"ENVMAP_BLENDING_MIX",[qS]:"ENVMAP_BLENDING_ADD"};function fA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":uA[o.combine]||"ENVMAP_BLENDING_NONE"}function hA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function dA(o,e,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=sA(i),p=oA(i),_=cA(i),g=fA(i),y=hA(i),S=KT(i),T=QT(c),C=l.createProgram();let M,x,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(al).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(al).join(`
`),x.length>0&&(x+=`
`)):(M=[K_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),x=[K_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ki?"#define TONE_MAPPING":"",i.toneMapping!==Ki?Mt.tonemapping_pars_fragment:"",i.toneMapping!==Ki?jT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,qT("linearToOutputTexel",i.outputColorSpace),ZT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(al).join(`
`)),h=Yd(h),h=Y_(h,i),h=j_(h,i),d=Yd(d),d=Y_(d,i),d=j_(d,i),h=Z_(h),d=Z_(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===l_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===l_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=D+M+h,U=D+x+d,O=X_(l,l.VERTEX_SHADER,N),B=X_(l,l.FRAGMENT_SHADER,U);l.attachShader(C,O),l.attachShader(C,B),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(G){if(o.debug.checkShaderErrors){const Y=l.getProgramInfoLog(C)||"",K=l.getShaderInfoLog(O)||"",fe=l.getShaderInfoLog(B)||"",re=Y.trim(),z=K.trim(),V=fe.trim();let ne=!0,Me=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ne=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,O,B);else{const be=q_(l,O,"vertex"),I=q_(l,B,"fragment");Lt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+re+`
`+be+`
`+I)}else re!==""?ct("WebGLProgram: Program Info Log:",re):(z===""||V==="")&&(Me=!1);Me&&(G.diagnostics={runnable:ne,programLog:re,vertexShader:{log:z,prefix:M},fragmentShader:{log:V,prefix:x}})}l.deleteShader(O),l.deleteShader(B),k=new Jc(l,C),E=JT(l,C)}let k;this.getUniforms=function(){return k===void 0&&P(this),k};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,VT)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=kT++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=O,this.fragmentShader=B,this}let pA=0;class mA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new gA(e),i.set(e,s)),s}}class gA{constructor(e){this.id=pA++,this.code=e,this.usedTimes=0}}function _A(o,e,i,s,l,c,h){const d=new Ev,m=new mA,p=new Set,_=[],g=new Map,y=l.logarithmicDepthBuffer;let S=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(E){return p.add(E),E===0?"uv":`uv${E}`}function M(E,R,G,Y,K){const fe=Y.fog,re=K.geometry,z=E.isMeshStandardMaterial?Y.environment:null,V=(E.isMeshStandardMaterial?i:e).get(E.envMap||z),ne=V&&V.mapping===au?V.image.height:null,Me=T[E.type];E.precision!==null&&(S=l.getMaxPrecision(E.precision),S!==E.precision&&ct("WebGLProgram.getParameters:",E.precision,"not supported, using",S,"instead."));const be=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,I=be!==void 0?be.length:0;let ie=0;re.morphAttributes.position!==void 0&&(ie=1),re.morphAttributes.normal!==void 0&&(ie=2),re.morphAttributes.color!==void 0&&(ie=3);let ve,Ce,Be,$;if(Me){const ot=Wi[Me];ve=ot.vertexShader,Ce=ot.fragmentShader}else ve=E.vertexShader,Ce=E.fragmentShader,m.update(E),Be=m.getVertexShaderID(E),$=m.getFragmentShaderID(E);const oe=o.getRenderTarget(),De=o.state.buffers.depth.getReversed(),ke=K.isInstancedMesh===!0,He=K.isBatchedMesh===!0,ut=!!E.map,$t=!!E.matcap,gt=!!V,dt=!!E.aoMap,Nt=!!E.lightMap,at=!!E.bumpMap,bt=!!E.normalMap,F=!!E.displacementMap,Gt=!!E.emissiveMap,At=!!E.metalnessMap,It=!!E.roughnessMap,Ye=E.anisotropy>0,L=E.clearcoat>0,b=E.dispersion>0,q=E.iridescence>0,pe=E.sheen>0,Se=E.transmission>0,ue=Ye&&!!E.anisotropyMap,Xe=L&&!!E.clearcoatMap,Ue=L&&!!E.clearcoatNormalMap,Ge=L&&!!E.clearcoatRoughnessMap,tt=q&&!!E.iridescenceMap,Te=q&&!!E.iridescenceThicknessMap,we=pe&&!!E.sheenColorMap,Fe=pe&&!!E.sheenRoughnessMap,Ie=!!E.specularMap,Ne=!!E.specularColorMap,ft=!!E.specularIntensityMap,W=Se&&!!E.transmissionMap,Le=Se&&!!E.thicknessMap,Re=!!E.gradientMap,ye=!!E.alphaMap,de=E.alphaTest>0,he=!!E.alphaHash,Ee=!!E.extensions;let Ae=Ki;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ae=o.toneMapping);const Qe={shaderID:Me,shaderType:E.type,shaderName:E.name,vertexShader:ve,fragmentShader:Ce,defines:E.defines,customVertexShaderID:Be,customFragmentShaderID:$,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:S,batching:He,batchingColor:He&&K._colorsTexture!==null,instancing:ke,instancingColor:ke&&K.instanceColor!==null,instancingMorph:ke&&K.morphTexture!==null,outputColorSpace:oe===null?o.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Qr,alphaToCoverage:!!E.alphaToCoverage,map:ut,matcap:$t,envMap:gt,envMapMode:gt&&V.mapping,envMapCubeUVHeight:ne,aoMap:dt,lightMap:Nt,bumpMap:at,normalMap:bt,displacementMap:F,emissiveMap:Gt,normalMapObjectSpace:bt&&E.normalMapType===ZS,normalMapTangentSpace:bt&&E.normalMapType===Sv,metalnessMap:At,roughnessMap:It,anisotropy:Ye,anisotropyMap:ue,clearcoat:L,clearcoatMap:Xe,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Ge,dispersion:b,iridescence:q,iridescenceMap:tt,iridescenceThicknessMap:Te,sheen:pe,sheenColorMap:we,sheenRoughnessMap:Fe,specularMap:Ie,specularColorMap:Ne,specularIntensityMap:ft,transmission:Se,transmissionMap:W,thicknessMap:Le,gradientMap:Re,opaque:E.transparent===!1&&E.blending===Wr&&E.alphaToCoverage===!1,alphaMap:ye,alphaTest:de,alphaHash:he,combine:E.combine,mapUv:ut&&C(E.map.channel),aoMapUv:dt&&C(E.aoMap.channel),lightMapUv:Nt&&C(E.lightMap.channel),bumpMapUv:at&&C(E.bumpMap.channel),normalMapUv:bt&&C(E.normalMap.channel),displacementMapUv:F&&C(E.displacementMap.channel),emissiveMapUv:Gt&&C(E.emissiveMap.channel),metalnessMapUv:At&&C(E.metalnessMap.channel),roughnessMapUv:It&&C(E.roughnessMap.channel),anisotropyMapUv:ue&&C(E.anisotropyMap.channel),clearcoatMapUv:Xe&&C(E.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&C(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&C(E.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&C(E.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&C(E.iridescenceThicknessMap.channel),sheenColorMapUv:we&&C(E.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&C(E.sheenRoughnessMap.channel),specularMapUv:Ie&&C(E.specularMap.channel),specularColorMapUv:Ne&&C(E.specularColorMap.channel),specularIntensityMapUv:ft&&C(E.specularIntensityMap.channel),transmissionMapUv:W&&C(E.transmissionMap.channel),thicknessMapUv:Le&&C(E.thicknessMap.channel),alphaMapUv:ye&&C(E.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(bt||Ye),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!re.attributes.uv&&(ut||ye),fog:!!fe,useFog:E.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:De,skinning:K.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ie,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ae,decodeVideoTexture:ut&&E.map.isVideoTexture===!0&&Ot.getTransfer(E.map.colorSpace)===qt,decodeVideoTextureEmissive:Gt&&E.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(E.emissiveMap.colorSpace)===qt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===qi,flipSided:E.side===ai,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ee&&E.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&E.extensions.multiDraw===!0||He)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Qe.vertexUv1s=p.has(1),Qe.vertexUv2s=p.has(2),Qe.vertexUv3s=p.has(3),p.clear(),Qe}function x(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const G in E.defines)R.push(G),R.push(E.defines[G]);return E.isRawShaderMaterial===!1&&(D(R,E),N(R,E),R.push(o.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function D(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function N(E,R){d.disableAll(),R.instancing&&d.enable(0),R.instancingColor&&d.enable(1),R.instancingMorph&&d.enable(2),R.matcap&&d.enable(3),R.envMap&&d.enable(4),R.normalMapObjectSpace&&d.enable(5),R.normalMapTangentSpace&&d.enable(6),R.clearcoat&&d.enable(7),R.iridescence&&d.enable(8),R.alphaTest&&d.enable(9),R.vertexColors&&d.enable(10),R.vertexAlphas&&d.enable(11),R.vertexUv1s&&d.enable(12),R.vertexUv2s&&d.enable(13),R.vertexUv3s&&d.enable(14),R.vertexTangents&&d.enable(15),R.anisotropy&&d.enable(16),R.alphaHash&&d.enable(17),R.batching&&d.enable(18),R.dispersion&&d.enable(19),R.batchingColor&&d.enable(20),R.gradientMap&&d.enable(21),E.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),E.push(d.mask)}function U(E){const R=T[E.type];let G;if(R){const Y=Wi[R];G=EM.clone(Y.uniforms)}else G=E.uniforms;return G}function O(E,R){let G=g.get(R);return G!==void 0?++G.usedTimes:(G=new dA(o,R,E,c),_.push(G),g.set(R,G)),G}function B(E){if(--E.usedTimes===0){const R=_.indexOf(E);_[R]=_[_.length-1],_.pop(),g.delete(E.cacheKey),E.destroy()}}function P(E){m.remove(E)}function k(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:U,acquireProgram:O,releaseProgram:B,releaseShaderCache:P,programs:_,dispose:k}}function vA(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function xA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Q_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function J_(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(g,y,S,T,C,M){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:y,material:S,groupOrder:T,renderOrder:g.renderOrder,z:C,group:M},o[e]=x):(x.id=g.id,x.object=g,x.geometry=y,x.material=S,x.groupOrder=T,x.renderOrder=g.renderOrder,x.z=C,x.group=M),e++,x}function d(g,y,S,T,C,M){const x=h(g,y,S,T,C,M);S.transmission>0?s.push(x):S.transparent===!0?l.push(x):i.push(x)}function m(g,y,S,T,C,M){const x=h(g,y,S,T,C,M);S.transmission>0?s.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,y){i.length>1&&i.sort(g||xA),s.length>1&&s.sort(y||Q_),l.length>1&&l.sort(y||Q_)}function _(){for(let g=e,y=o.length;g<y;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function yA(){let o=new WeakMap;function e(s,l){const c=o.get(s);let h;return c===void 0?(h=new J_,o.set(s,[h])):l>=c.length?(h=new J_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function SA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Q,color:new Ct};break;case"SpotLight":i={position:new Q,direction:new Q,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":i={color:new Ct,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return o[e.id]=i,i}}}function MA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let bA=0;function EA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function TA(o){const e=new SA,i=MA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Q);const l=new Q,c=new on,h=new on;function d(p){let _=0,g=0,y=0;for(let E=0;E<9;E++)s.probe[E].set(0,0,0);let S=0,T=0,C=0,M=0,x=0,D=0,N=0,U=0,O=0,B=0,P=0;p.sort(EA);for(let E=0,R=p.length;E<R;E++){const G=p[E],Y=G.color,K=G.intensity,fe=G.distance;let re=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Kr?re=G.shadow.map.texture:re=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=Y.r*K,g+=Y.g*K,y+=Y.b*K;else if(G.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(G.sh.coefficients[z],K);P++}else if(G.isDirectionalLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const V=G.shadow,ne=i.get(G);ne.shadowIntensity=V.intensity,ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize=V.mapSize,s.directionalShadow[S]=ne,s.directionalShadowMap[S]=re,s.directionalShadowMatrix[S]=G.shadow.matrix,D++}s.directional[S]=z,S++}else if(G.isSpotLight){const z=e.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(Y).multiplyScalar(K),z.distance=fe,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,s.spot[C]=z;const V=G.shadow;if(G.map&&(s.spotLightMap[O]=G.map,O++,V.updateMatrices(G),G.castShadow&&B++),s.spotLightMatrix[C]=V.matrix,G.castShadow){const ne=i.get(G);ne.shadowIntensity=V.intensity,ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize=V.mapSize,s.spotShadow[C]=ne,s.spotShadowMap[C]=re,U++}C++}else if(G.isRectAreaLight){const z=e.get(G);z.color.copy(Y).multiplyScalar(K),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=z,M++}else if(G.isPointLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const V=G.shadow,ne=i.get(G);ne.shadowIntensity=V.intensity,ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize=V.mapSize,ne.shadowCameraNear=V.camera.near,ne.shadowCameraFar=V.camera.far,s.pointShadow[T]=ne,s.pointShadowMap[T]=re,s.pointShadowMatrix[T]=G.shadow.matrix,N++}s.point[T]=z,T++}else if(G.isHemisphereLight){const z=e.get(G);z.skyColor.copy(G.color).multiplyScalar(K),z.groundColor.copy(G.groundColor).multiplyScalar(K),s.hemi[x]=z,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ze.LTC_FLOAT_1,s.rectAreaLTC2=ze.LTC_FLOAT_2):(s.rectAreaLTC1=ze.LTC_HALF_1,s.rectAreaLTC2=ze.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=y;const k=s.hash;(k.directionalLength!==S||k.pointLength!==T||k.spotLength!==C||k.rectAreaLength!==M||k.hemiLength!==x||k.numDirectionalShadows!==D||k.numPointShadows!==N||k.numSpotShadows!==U||k.numSpotMaps!==O||k.numLightProbes!==P)&&(s.directional.length=S,s.spot.length=C,s.rectArea.length=M,s.point.length=T,s.hemi.length=x,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=U+O-B,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=P,k.directionalLength=S,k.pointLength=T,k.spotLength=C,k.rectAreaLength=M,k.hemiLength=x,k.numDirectionalShadows=D,k.numPointShadows=N,k.numSpotShadows=U,k.numSpotMaps=O,k.numLightProbes=P,s.version=bA++)}function m(p,_){let g=0,y=0,S=0,T=0,C=0;const M=_.matrixWorldInverse;for(let x=0,D=p.length;x<D;x++){const N=p[x];if(N.isDirectionalLight){const U=s.directional[g];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),g++}else if(N.isSpotLight){const U=s.spot[S];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),S++}else if(N.isRectAreaLight){const U=s.rectArea[T];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),h.identity(),c.copy(N.matrixWorld),c.premultiply(M),h.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),T++}else if(N.isPointLight){const U=s.point[y];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),y++}else if(N.isHemisphereLight){const U=s.hemi[C];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:s}}function $_(o){const e=new TA(o),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function AA(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new $_(o),e.set(l,[d])):c>=h.length?(d=new $_(o),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const wA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RA=`uniform sampler2D shadow_pass;
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
}`,CA=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],DA=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],ev=new on,nl=new Q,$h=new Q;function UA(o,e,i){let s=new rp;const l=new mt,c=new mt,h=new fn,d=new zM,m=new BM,p={},_=i.maxTextureSize,g={[hs]:ai,[ai]:hs,[qi]:qi},y=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:wA,fragmentShader:RA}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const T=new si;T.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new St(T,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let x=this.type;this.render=function(B,P,k){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;B.type===AS&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Yc);const E=o.getRenderTarget(),R=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(wa),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const K=x!==this.type;K&&P.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(re=>re.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,re=B.length;fe<re;fe++){const z=B[fe],V=z.shadow;if(V===void 0){ct("WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const ne=V.getFrameExtents();if(l.multiply(ne),c.copy(V.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ne.x),l.x=c.x*ne.x,V.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ne.y),l.y=c.y*ne.y,V.mapSize.y=c.y)),V.map===null||K===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===il){if(z.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Qi(l.x,l.y,{format:Kr,type:Ca,minFilter:Wn,magFilter:Wn,generateMipmaps:!1}),V.map.texture.name=z.name+".shadowMap",V.map.depthTexture=new ul(l.x,l.y,ji),V.map.depthTexture.name=z.name+".shadowMapDepth",V.map.depthTexture.format=Da,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Tn,V.map.depthTexture.magFilter=Tn}else{z.isPointLight?(V.map=new Uv(l.x),V.map.depthTexture=new IM(l.x,Ji)):(V.map=new Qi(l.x,l.y),V.map.depthTexture=new ul(l.x,l.y,Ji)),V.map.depthTexture.name=z.name+".shadowMap",V.map.depthTexture.format=Da;const be=o.state.buffers.depth.getReversed();this.type===Yc?(V.map.depthTexture.compareFunction=be?ip:np,V.map.depthTexture.minFilter=Wn,V.map.depthTexture.magFilter=Wn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Tn,V.map.depthTexture.magFilter=Tn)}V.camera.updateProjectionMatrix()}const Me=V.map.isWebGLCubeRenderTarget?6:1;for(let be=0;be<Me;be++){if(V.map.isWebGLCubeRenderTarget)o.setRenderTarget(V.map,be),o.clear();else{be===0&&(o.setRenderTarget(V.map),o.clear());const I=V.getViewport(be);h.set(c.x*I.x,c.y*I.y,c.x*I.z,c.y*I.w),Y.viewport(h)}if(z.isPointLight){const I=V.camera,ie=V.matrix,ve=z.distance||I.far;ve!==I.far&&(I.far=ve,I.updateProjectionMatrix()),nl.setFromMatrixPosition(z.matrixWorld),I.position.copy(nl),$h.copy(I.position),$h.add(CA[be]),I.up.copy(DA[be]),I.lookAt($h),I.updateMatrixWorld(),ie.makeTranslation(-nl.x,-nl.y,-nl.z),ev.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),V._frustum.setFromProjectionMatrix(ev,I.coordinateSystem,I.reversedDepth)}else V.updateMatrices(z);s=V.getFrustum(),U(P,k,V.camera,z,this.type)}V.isPointLightShadow!==!0&&this.type===il&&D(V,k),V.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(E,R,G)};function D(B,P){const k=e.update(C);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Qi(l.x,l.y,{format:Kr,type:Ca})),y.uniforms.shadow_pass.value=B.map.depthTexture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(P,null,k,y,C,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(P,null,k,S,C,null)}function N(B,P,k,E){let R=null;const G=k.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)R=G;else if(R=k.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Y=R.uuid,K=P.uuid;let fe=p[Y];fe===void 0&&(fe={},p[Y]=fe);let re=fe[K];re===void 0&&(re=R.clone(),fe[K]=re,P.addEventListener("dispose",O)),R=re}if(R.visible=P.visible,R.wireframe=P.wireframe,E===il?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:g[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,k.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Y=o.properties.get(R);Y.light=k}return R}function U(B,P,k,E,R){if(B.visible===!1)return;if(B.layers.test(P.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===il)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,B.matrixWorld);const K=e.update(B),fe=B.material;if(Array.isArray(fe)){const re=K.groups;for(let z=0,V=re.length;z<V;z++){const ne=re[z],Me=fe[ne.materialIndex];if(Me&&Me.visible){const be=N(B,Me,E,R);B.onBeforeShadow(o,B,P,k,K,be,ne),o.renderBufferDirect(k,null,K,be,B,ne),B.onAfterShadow(o,B,P,k,K,be,ne)}}}else if(fe.visible){const re=N(B,fe,E,R);B.onBeforeShadow(o,B,P,k,K,re,null),o.renderBufferDirect(k,null,K,re,B,null),B.onAfterShadow(o,B,P,k,K,re,null)}}const Y=B.children;for(let K=0,fe=Y.length;K<fe;K++)U(Y[K],P,k,E,R)}function O(B){B.target.removeEventListener("dispose",O);for(const k in p){const E=p[k],R=B.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}const NA={[nd]:id,[ad]:od,[sd]:ld,[jr]:rd,[id]:nd,[od]:ad,[ld]:sd,[rd]:jr};function LA(o,e){function i(){let W=!1;const Le=new fn;let Re=null;const ye=new fn(0,0,0,0);return{setMask:function(de){Re!==de&&!W&&(o.colorMask(de,de,de,de),Re=de)},setLocked:function(de){W=de},setClear:function(de,he,Ee,Ae,Qe){Qe===!0&&(de*=Ae,he*=Ae,Ee*=Ae),Le.set(de,he,Ee,Ae),ye.equals(Le)===!1&&(o.clearColor(de,he,Ee,Ae),ye.copy(Le))},reset:function(){W=!1,Re=null,ye.set(-1,0,0,0)}}}function s(){let W=!1,Le=!1,Re=null,ye=null,de=null;return{setReversed:function(he){if(Le!==he){const Ee=e.get("EXT_clip_control");he?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),Le=he;const Ae=de;de=null,this.setClear(Ae)}},getReversed:function(){return Le},setTest:function(he){he?oe(o.DEPTH_TEST):De(o.DEPTH_TEST)},setMask:function(he){Re!==he&&!W&&(o.depthMask(he),Re=he)},setFunc:function(he){if(Le&&(he=NA[he]),ye!==he){switch(he){case nd:o.depthFunc(o.NEVER);break;case id:o.depthFunc(o.ALWAYS);break;case ad:o.depthFunc(o.LESS);break;case jr:o.depthFunc(o.LEQUAL);break;case sd:o.depthFunc(o.EQUAL);break;case rd:o.depthFunc(o.GEQUAL);break;case od:o.depthFunc(o.GREATER);break;case ld:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ye=he}},setLocked:function(he){W=he},setClear:function(he){de!==he&&(Le&&(he=1-he),o.clearDepth(he),de=he)},reset:function(){W=!1,Re=null,ye=null,de=null,Le=!1}}}function l(){let W=!1,Le=null,Re=null,ye=null,de=null,he=null,Ee=null,Ae=null,Qe=null;return{setTest:function(ot){W||(ot?oe(o.STENCIL_TEST):De(o.STENCIL_TEST))},setMask:function(ot){Le!==ot&&!W&&(o.stencilMask(ot),Le=ot)},setFunc:function(ot,_t,ht){(Re!==ot||ye!==_t||de!==ht)&&(o.stencilFunc(ot,_t,ht),Re=ot,ye=_t,de=ht)},setOp:function(ot,_t,ht){(he!==ot||Ee!==_t||Ae!==ht)&&(o.stencilOp(ot,_t,ht),he=ot,Ee=_t,Ae=ht)},setLocked:function(ot){W=ot},setClear:function(ot){Qe!==ot&&(o.clearStencil(ot),Qe=ot)},reset:function(){W=!1,Le=null,Re=null,ye=null,de=null,he=null,Ee=null,Ae=null,Qe=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},y=new WeakMap,S=[],T=null,C=!1,M=null,x=null,D=null,N=null,U=null,O=null,B=null,P=new Ct(0,0,0),k=0,E=!1,R=null,G=null,Y=null,K=null,fe=null;const re=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,V=0;const ne=o.getParameter(o.VERSION);ne.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ne)[1]),z=V>=1):ne.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),z=V>=2);let Me=null,be={};const I=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),ve=new fn().fromArray(I),Ce=new fn().fromArray(ie);function Be(W,Le,Re,ye){const de=new Uint8Array(4),he=o.createTexture();o.bindTexture(W,he),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ee=0;Ee<Re;Ee++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Le,0,o.RGBA,1,1,ye,0,o.RGBA,o.UNSIGNED_BYTE,de):o.texImage2D(Le+Ee,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,de);return he}const $={};$[o.TEXTURE_2D]=Be(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=Be(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=Be(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=Be(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),oe(o.DEPTH_TEST),h.setFunc(jr),at(!1),bt(i_),oe(o.CULL_FACE),dt(wa);function oe(W){_[W]!==!0&&(o.enable(W),_[W]=!0)}function De(W){_[W]!==!1&&(o.disable(W),_[W]=!1)}function ke(W,Le){return g[W]!==Le?(o.bindFramebuffer(W,Le),g[W]=Le,W===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Le),W===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Le),!0):!1}function He(W,Le){let Re=S,ye=!1;if(W){Re=y.get(Le),Re===void 0&&(Re=[],y.set(Le,Re));const de=W.textures;if(Re.length!==de.length||Re[0]!==o.COLOR_ATTACHMENT0){for(let he=0,Ee=de.length;he<Ee;he++)Re[he]=o.COLOR_ATTACHMENT0+he;Re.length=de.length,ye=!0}}else Re[0]!==o.BACK&&(Re[0]=o.BACK,ye=!0);ye&&o.drawBuffers(Re)}function ut(W){return T!==W?(o.useProgram(W),T=W,!0):!1}const $t={[Fs]:o.FUNC_ADD,[RS]:o.FUNC_SUBTRACT,[CS]:o.FUNC_REVERSE_SUBTRACT};$t[DS]=o.MIN,$t[US]=o.MAX;const gt={[NS]:o.ZERO,[LS]:o.ONE,[OS]:o.SRC_COLOR,[ed]:o.SRC_ALPHA,[HS]:o.SRC_ALPHA_SATURATE,[BS]:o.DST_COLOR,[PS]:o.DST_ALPHA,[IS]:o.ONE_MINUS_SRC_COLOR,[td]:o.ONE_MINUS_SRC_ALPHA,[FS]:o.ONE_MINUS_DST_COLOR,[zS]:o.ONE_MINUS_DST_ALPHA,[GS]:o.CONSTANT_COLOR,[VS]:o.ONE_MINUS_CONSTANT_COLOR,[kS]:o.CONSTANT_ALPHA,[XS]:o.ONE_MINUS_CONSTANT_ALPHA};function dt(W,Le,Re,ye,de,he,Ee,Ae,Qe,ot){if(W===wa){C===!0&&(De(o.BLEND),C=!1);return}if(C===!1&&(oe(o.BLEND),C=!0),W!==wS){if(W!==M||ot!==E){if((x!==Fs||U!==Fs)&&(o.blendEquation(o.FUNC_ADD),x=Fs,U=Fs),ot)switch(W){case Wr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case a_:o.blendFunc(o.ONE,o.ONE);break;case s_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case r_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Lt("WebGLState: Invalid blending: ",W);break}else switch(W){case Wr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case a_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case s_:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case r_:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",W);break}D=null,N=null,O=null,B=null,P.set(0,0,0),k=0,M=W,E=ot}return}de=de||Le,he=he||Re,Ee=Ee||ye,(Le!==x||de!==U)&&(o.blendEquationSeparate($t[Le],$t[de]),x=Le,U=de),(Re!==D||ye!==N||he!==O||Ee!==B)&&(o.blendFuncSeparate(gt[Re],gt[ye],gt[he],gt[Ee]),D=Re,N=ye,O=he,B=Ee),(Ae.equals(P)===!1||Qe!==k)&&(o.blendColor(Ae.r,Ae.g,Ae.b,Qe),P.copy(Ae),k=Qe),M=W,E=!1}function Nt(W,Le){W.side===qi?De(o.CULL_FACE):oe(o.CULL_FACE);let Re=W.side===ai;Le&&(Re=!Re),at(Re),W.blending===Wr&&W.transparent===!1?dt(wa):dt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const ye=W.stencilWrite;d.setTest(ye),ye&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Gt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?oe(o.SAMPLE_ALPHA_TO_COVERAGE):De(o.SAMPLE_ALPHA_TO_COVERAGE)}function at(W){R!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),R=W)}function bt(W){W!==ES?(oe(o.CULL_FACE),W!==G&&(W===i_?o.cullFace(o.BACK):W===TS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):De(o.CULL_FACE),G=W}function F(W){W!==Y&&(z&&o.lineWidth(W),Y=W)}function Gt(W,Le,Re){W?(oe(o.POLYGON_OFFSET_FILL),(K!==Le||fe!==Re)&&(o.polygonOffset(Le,Re),K=Le,fe=Re)):De(o.POLYGON_OFFSET_FILL)}function At(W){W?oe(o.SCISSOR_TEST):De(o.SCISSOR_TEST)}function It(W){W===void 0&&(W=o.TEXTURE0+re-1),Me!==W&&(o.activeTexture(W),Me=W)}function Ye(W,Le,Re){Re===void 0&&(Me===null?Re=o.TEXTURE0+re-1:Re=Me);let ye=be[Re];ye===void 0&&(ye={type:void 0,texture:void 0},be[Re]=ye),(ye.type!==W||ye.texture!==Le)&&(Me!==Re&&(o.activeTexture(Re),Me=Re),o.bindTexture(W,Le||$[W]),ye.type=W,ye.texture=Le)}function L(){const W=be[Me];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function pe(){try{o.texSubImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Se(){try{o.texSubImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function ue(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Xe(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Ue(){try{o.texStorage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Ge(){try{o.texStorage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function tt(){try{o.texImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Te(){try{o.texImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function we(W){ve.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),ve.copy(W))}function Fe(W){Ce.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Ce.copy(W))}function Ie(W,Le){let Re=p.get(Le);Re===void 0&&(Re=new WeakMap,p.set(Le,Re));let ye=Re.get(W);ye===void 0&&(ye=o.getUniformBlockIndex(Le,W.name),Re.set(W,ye))}function Ne(W,Le){const ye=p.get(Le).get(W);m.get(Le)!==ye&&(o.uniformBlockBinding(Le,ye,W.__bindingPointIndex),m.set(Le,ye))}function ft(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},Me=null,be={},g={},y=new WeakMap,S=[],T=null,C=!1,M=null,x=null,D=null,N=null,U=null,O=null,B=null,P=new Ct(0,0,0),k=0,E=!1,R=null,G=null,Y=null,K=null,fe=null,ve.set(0,0,o.canvas.width,o.canvas.height),Ce.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:oe,disable:De,bindFramebuffer:ke,drawBuffers:He,useProgram:ut,setBlending:dt,setMaterial:Nt,setFlipSided:at,setCullFace:bt,setLineWidth:F,setPolygonOffset:Gt,setScissorTest:At,activeTexture:It,bindTexture:Ye,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:q,texImage2D:tt,texImage3D:Te,updateUBOMapping:Ie,uniformBlockBinding:Ne,texStorage2D:Ue,texStorage3D:Ge,texSubImage2D:pe,texSubImage3D:Se,compressedTexSubImage2D:ue,compressedTexSubImage3D:Xe,scissor:we,viewport:Fe,reset:ft}}function OA(o,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new mt,_=new WeakMap;let g;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,b){return S?new OffscreenCanvas(L,b):ll("canvas")}function C(L,b,q){let pe=1;const Se=Ye(L);if((Se.width>q||Se.height>q)&&(pe=q/Math.max(Se.width,Se.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ue=Math.floor(pe*Se.width),Xe=Math.floor(pe*Se.height);g===void 0&&(g=T(ue,Xe));const Ue=b?T(ue,Xe):g;return Ue.width=ue,Ue.height=Xe,Ue.getContext("2d").drawImage(L,0,0,ue,Xe),ct("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+ue+"x"+Xe+")."),Ue}else return"data"in L&&ct("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),L;return L}function M(L){return L.generateMipmaps}function x(L){o.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(L,b,q,pe,Se=!1){if(L!==null){if(o[L]!==void 0)return o[L];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ue=b;if(b===o.RED&&(q===o.FLOAT&&(ue=o.R32F),q===o.HALF_FLOAT&&(ue=o.R16F),q===o.UNSIGNED_BYTE&&(ue=o.R8)),b===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(ue=o.R8UI),q===o.UNSIGNED_SHORT&&(ue=o.R16UI),q===o.UNSIGNED_INT&&(ue=o.R32UI),q===o.BYTE&&(ue=o.R8I),q===o.SHORT&&(ue=o.R16I),q===o.INT&&(ue=o.R32I)),b===o.RG&&(q===o.FLOAT&&(ue=o.RG32F),q===o.HALF_FLOAT&&(ue=o.RG16F),q===o.UNSIGNED_BYTE&&(ue=o.RG8)),b===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(ue=o.RG8UI),q===o.UNSIGNED_SHORT&&(ue=o.RG16UI),q===o.UNSIGNED_INT&&(ue=o.RG32UI),q===o.BYTE&&(ue=o.RG8I),q===o.SHORT&&(ue=o.RG16I),q===o.INT&&(ue=o.RG32I)),b===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),q===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),q===o.UNSIGNED_INT&&(ue=o.RGB32UI),q===o.BYTE&&(ue=o.RGB8I),q===o.SHORT&&(ue=o.RGB16I),q===o.INT&&(ue=o.RGB32I)),b===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),q===o.UNSIGNED_INT&&(ue=o.RGBA32UI),q===o.BYTE&&(ue=o.RGBA8I),q===o.SHORT&&(ue=o.RGBA16I),q===o.INT&&(ue=o.RGBA32I)),b===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ue=o.R11F_G11F_B10F)),b===o.RGBA){const Xe=Se?$c:Ot.getTransfer(pe);q===o.FLOAT&&(ue=o.RGBA32F),q===o.HALF_FLOAT&&(ue=o.RGBA16F),q===o.UNSIGNED_BYTE&&(ue=Xe===qt?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function U(L,b){let q;return L?b===null||b===Ji||b===ol?q=o.DEPTH24_STENCIL8:b===ji?q=o.DEPTH32F_STENCIL8:b===rl&&(q=o.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ji||b===ol?q=o.DEPTH_COMPONENT24:b===ji?q=o.DEPTH_COMPONENT32F:b===rl&&(q=o.DEPTH_COMPONENT16),q}function O(L,b){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Tn&&L.minFilter!==Wn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function B(L){const b=L.target;b.removeEventListener("dispose",B),k(b),b.isVideoTexture&&_.delete(b)}function P(L){const b=L.target;b.removeEventListener("dispose",P),R(b)}function k(L){const b=s.get(L);if(b.__webglInit===void 0)return;const q=L.source,pe=y.get(q);if(pe){const Se=pe[b.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&E(L),Object.keys(pe).length===0&&y.delete(q)}s.remove(L)}function E(L){const b=s.get(L);o.deleteTexture(b.__webglTexture);const q=L.source,pe=y.get(q);delete pe[b.__cacheKey],h.memory.textures--}function R(L){const b=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(b.__webglFramebuffer[pe]))for(let Se=0;Se<b.__webglFramebuffer[pe].length;Se++)o.deleteFramebuffer(b.__webglFramebuffer[pe][Se]);else o.deleteFramebuffer(b.__webglFramebuffer[pe]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[pe])}else{if(Array.isArray(b.__webglFramebuffer))for(let pe=0;pe<b.__webglFramebuffer.length;pe++)o.deleteFramebuffer(b.__webglFramebuffer[pe]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pe=0;pe<b.__webglColorRenderbuffer.length;pe++)b.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[pe]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=L.textures;for(let pe=0,Se=q.length;pe<Se;pe++){const ue=s.get(q[pe]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),h.memory.textures--),s.remove(q[pe])}s.remove(L)}let G=0;function Y(){G=0}function K(){const L=G;return L>=l.maxTextures&&ct("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),G+=1,L}function fe(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function re(L,b){const q=s.get(L);if(L.isVideoTexture&&At(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const pe=L.image;if(pe===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{$(q,L,b);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+b)}function z(L,b){const q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){$(q,L,b);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+b)}function V(L,b){const q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){$(q,L,b);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+b)}function ne(L,b){const q=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&q.__version!==L.version){oe(q,L,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+b)}const Me={[qr]:o.REPEAT,[Aa]:o.CLAMP_TO_EDGE,[fd]:o.MIRRORED_REPEAT},be={[Tn]:o.NEAREST,[YS]:o.NEAREST_MIPMAP_NEAREST,[Ec]:o.NEAREST_MIPMAP_LINEAR,[Wn]:o.LINEAR,[xh]:o.LINEAR_MIPMAP_NEAREST,[Gs]:o.LINEAR_MIPMAP_LINEAR},I={[KS]:o.NEVER,[tM]:o.ALWAYS,[QS]:o.LESS,[np]:o.LEQUAL,[JS]:o.EQUAL,[ip]:o.GEQUAL,[$S]:o.GREATER,[eM]:o.NOTEQUAL};function ie(L,b){if(b.type===ji&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Wn||b.magFilter===xh||b.magFilter===Ec||b.magFilter===Gs||b.minFilter===Wn||b.minFilter===xh||b.minFilter===Ec||b.minFilter===Gs)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,Me[b.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,Me[b.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,Me[b.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,be[b.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,be[b.minFilter]),b.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,I[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Tn||b.minFilter!==Ec&&b.minFilter!==Gs||b.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function ve(L,b){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",B));const pe=b.source;let Se=y.get(pe);Se===void 0&&(Se={},y.set(pe,Se));const ue=fe(b);if(ue!==L.__cacheKey){Se[ue]===void 0&&(Se[ue]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,q=!0),Se[ue].usedTimes++;const Xe=Se[L.__cacheKey];Xe!==void 0&&(Se[L.__cacheKey].usedTimes--,Xe.usedTimes===0&&E(b)),L.__cacheKey=ue,L.__webglTexture=Se[ue].texture}return q}function Ce(L,b,q){return Math.floor(Math.floor(L/q)/b)}function Be(L,b,q,pe){const ue=L.updateRanges;if(ue.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,q,pe,b.data);else{ue.sort((Te,we)=>Te.start-we.start);let Xe=0;for(let Te=1;Te<ue.length;Te++){const we=ue[Xe],Fe=ue[Te],Ie=we.start+we.count,Ne=Ce(Fe.start,b.width,4),ft=Ce(we.start,b.width,4);Fe.start<=Ie+1&&Ne===ft&&Ce(Fe.start+Fe.count-1,b.width,4)===Ne?we.count=Math.max(we.count,Fe.start+Fe.count-we.start):(++Xe,ue[Xe]=Fe)}ue.length=Xe+1;const Ue=o.getParameter(o.UNPACK_ROW_LENGTH),Ge=o.getParameter(o.UNPACK_SKIP_PIXELS),tt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Te=0,we=ue.length;Te<we;Te++){const Fe=ue[Te],Ie=Math.floor(Fe.start/4),Ne=Math.ceil(Fe.count/4),ft=Ie%b.width,W=Math.floor(Ie/b.width),Le=Ne,Re=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ft),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,ft,W,Le,Re,q,pe,b.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ue),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ge),o.pixelStorei(o.UNPACK_SKIP_ROWS,tt)}}function $(L,b,q){let pe=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pe=o.TEXTURE_3D);const Se=ve(L,b),ue=b.source;i.bindTexture(pe,L.__webglTexture,o.TEXTURE0+q);const Xe=s.get(ue);if(ue.version!==Xe.__version||Se===!0){i.activeTexture(o.TEXTURE0+q);const Ue=Ot.getPrimaries(Ot.workingColorSpace),Ge=b.colorSpace===cs?null:Ot.getPrimaries(b.colorSpace),tt=b.colorSpace===cs||Ue===Ge?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Te=C(b.image,!1,l.maxTextureSize);Te=It(b,Te);const we=c.convert(b.format,b.colorSpace),Fe=c.convert(b.type);let Ie=N(b.internalFormat,we,Fe,b.colorSpace,b.isVideoTexture);ie(pe,b);let Ne;const ft=b.mipmaps,W=b.isVideoTexture!==!0,Le=Xe.__version===void 0||Se===!0,Re=ue.dataReady,ye=O(b,Te);if(b.isDepthTexture)Ie=U(b.format===Vs,b.type),Le&&(W?i.texStorage2D(o.TEXTURE_2D,1,Ie,Te.width,Te.height):i.texImage2D(o.TEXTURE_2D,0,Ie,Te.width,Te.height,0,we,Fe,null));else if(b.isDataTexture)if(ft.length>0){W&&Le&&i.texStorage2D(o.TEXTURE_2D,ye,Ie,ft[0].width,ft[0].height);for(let de=0,he=ft.length;de<he;de++)Ne=ft[de],W?Re&&i.texSubImage2D(o.TEXTURE_2D,de,0,0,Ne.width,Ne.height,we,Fe,Ne.data):i.texImage2D(o.TEXTURE_2D,de,Ie,Ne.width,Ne.height,0,we,Fe,Ne.data);b.generateMipmaps=!1}else W?(Le&&i.texStorage2D(o.TEXTURE_2D,ye,Ie,Te.width,Te.height),Re&&Be(b,Te,we,Fe)):i.texImage2D(o.TEXTURE_2D,0,Ie,Te.width,Te.height,0,we,Fe,Te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ye,Ie,ft[0].width,ft[0].height,Te.depth);for(let de=0,he=ft.length;de<he;de++)if(Ne=ft[de],b.format!==Pi)if(we!==null)if(W){if(Re)if(b.layerUpdates.size>0){const Ee=U_(Ne.width,Ne.height,b.format,b.type);for(const Ae of b.layerUpdates){const Qe=Ne.data.subarray(Ae*Ee/Ne.data.BYTES_PER_ELEMENT,(Ae+1)*Ee/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,de,0,0,Ae,Ne.width,Ne.height,1,we,Qe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,de,0,0,0,Ne.width,Ne.height,Te.depth,we,Ne.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,de,Ie,Ne.width,Ne.height,Te.depth,0,Ne.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Re&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,de,0,0,0,Ne.width,Ne.height,Te.depth,we,Fe,Ne.data):i.texImage3D(o.TEXTURE_2D_ARRAY,de,Ie,Ne.width,Ne.height,Te.depth,0,we,Fe,Ne.data)}else{W&&Le&&i.texStorage2D(o.TEXTURE_2D,ye,Ie,ft[0].width,ft[0].height);for(let de=0,he=ft.length;de<he;de++)Ne=ft[de],b.format!==Pi?we!==null?W?Re&&i.compressedTexSubImage2D(o.TEXTURE_2D,de,0,0,Ne.width,Ne.height,we,Ne.data):i.compressedTexImage2D(o.TEXTURE_2D,de,Ie,Ne.width,Ne.height,0,Ne.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Re&&i.texSubImage2D(o.TEXTURE_2D,de,0,0,Ne.width,Ne.height,we,Fe,Ne.data):i.texImage2D(o.TEXTURE_2D,de,Ie,Ne.width,Ne.height,0,we,Fe,Ne.data)}else if(b.isDataArrayTexture)if(W){if(Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ye,Ie,Te.width,Te.height,Te.depth),Re)if(b.layerUpdates.size>0){const de=U_(Te.width,Te.height,b.format,b.type);for(const he of b.layerUpdates){const Ee=Te.data.subarray(he*de/Te.data.BYTES_PER_ELEMENT,(he+1)*de/Te.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,he,Te.width,Te.height,1,we,Fe,Ee)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,we,Fe,Te.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ie,Te.width,Te.height,Te.depth,0,we,Fe,Te.data);else if(b.isData3DTexture)W?(Le&&i.texStorage3D(o.TEXTURE_3D,ye,Ie,Te.width,Te.height,Te.depth),Re&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,we,Fe,Te.data)):i.texImage3D(o.TEXTURE_3D,0,Ie,Te.width,Te.height,Te.depth,0,we,Fe,Te.data);else if(b.isFramebufferTexture){if(Le)if(W)i.texStorage2D(o.TEXTURE_2D,ye,Ie,Te.width,Te.height);else{let de=Te.width,he=Te.height;for(let Ee=0;Ee<ye;Ee++)i.texImage2D(o.TEXTURE_2D,Ee,Ie,de,he,0,we,Fe,null),de>>=1,he>>=1}}else if(ft.length>0){if(W&&Le){const de=Ye(ft[0]);i.texStorage2D(o.TEXTURE_2D,ye,Ie,de.width,de.height)}for(let de=0,he=ft.length;de<he;de++)Ne=ft[de],W?Re&&i.texSubImage2D(o.TEXTURE_2D,de,0,0,we,Fe,Ne):i.texImage2D(o.TEXTURE_2D,de,Ie,we,Fe,Ne);b.generateMipmaps=!1}else if(W){if(Le){const de=Ye(Te);i.texStorage2D(o.TEXTURE_2D,ye,Ie,de.width,de.height)}Re&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,we,Fe,Te)}else i.texImage2D(o.TEXTURE_2D,0,Ie,we,Fe,Te);M(b)&&x(pe),Xe.__version=ue.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function oe(L,b,q){if(b.image.length!==6)return;const pe=ve(L,b),Se=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+q);const ue=s.get(Se);if(Se.version!==ue.__version||pe===!0){i.activeTexture(o.TEXTURE0+q);const Xe=Ot.getPrimaries(Ot.workingColorSpace),Ue=b.colorSpace===cs?null:Ot.getPrimaries(b.colorSpace),Ge=b.colorSpace===cs||Xe===Ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const tt=b.isCompressedTexture||b.image[0].isCompressedTexture,Te=b.image[0]&&b.image[0].isDataTexture,we=[];for(let he=0;he<6;he++)!tt&&!Te?we[he]=C(b.image[he],!0,l.maxCubemapSize):we[he]=Te?b.image[he].image:b.image[he],we[he]=It(b,we[he]);const Fe=we[0],Ie=c.convert(b.format,b.colorSpace),Ne=c.convert(b.type),ft=N(b.internalFormat,Ie,Ne,b.colorSpace),W=b.isVideoTexture!==!0,Le=ue.__version===void 0||pe===!0,Re=Se.dataReady;let ye=O(b,Fe);ie(o.TEXTURE_CUBE_MAP,b);let de;if(tt){W&&Le&&i.texStorage2D(o.TEXTURE_CUBE_MAP,ye,ft,Fe.width,Fe.height);for(let he=0;he<6;he++){de=we[he].mipmaps;for(let Ee=0;Ee<de.length;Ee++){const Ae=de[Ee];b.format!==Pi?Ie!==null?W?Re&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,0,0,Ae.width,Ae.height,Ie,Ae.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,ft,Ae.width,Ae.height,0,Ae.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,0,0,Ae.width,Ae.height,Ie,Ne,Ae.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,ft,Ae.width,Ae.height,0,Ie,Ne,Ae.data)}}}else{if(de=b.mipmaps,W&&Le){de.length>0&&ye++;const he=Ye(we[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,ye,ft,he.width,he.height)}for(let he=0;he<6;he++)if(Te){W?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,we[he].width,we[he].height,Ie,Ne,we[he].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ft,we[he].width,we[he].height,0,Ie,Ne,we[he].data);for(let Ee=0;Ee<de.length;Ee++){const Qe=de[Ee].image[he].image;W?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,0,0,Qe.width,Qe.height,Ie,Ne,Qe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,ft,Qe.width,Qe.height,0,Ie,Ne,Qe.data)}}else{W?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ie,Ne,we[he]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ft,Ie,Ne,we[he]);for(let Ee=0;Ee<de.length;Ee++){const Ae=de[Ee];W?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,0,0,Ie,Ne,Ae.image[he]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,ft,Ie,Ne,Ae.image[he])}}}M(b)&&x(o.TEXTURE_CUBE_MAP),ue.__version=Se.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function De(L,b,q,pe,Se,ue){const Xe=c.convert(q.format,q.colorSpace),Ue=c.convert(q.type),Ge=N(q.internalFormat,Xe,Ue,q.colorSpace),tt=s.get(b),Te=s.get(q);if(Te.__renderTarget=b,!tt.__hasExternalTextures){const we=Math.max(1,b.width>>ue),Fe=Math.max(1,b.height>>ue);Se===o.TEXTURE_3D||Se===o.TEXTURE_2D_ARRAY?i.texImage3D(Se,ue,Ge,we,Fe,b.depth,0,Xe,Ue,null):i.texImage2D(Se,ue,Ge,we,Fe,0,Xe,Ue,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Gt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,Se,Te.__webglTexture,0,F(b)):(Se===o.TEXTURE_2D||Se>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,Se,Te.__webglTexture,ue),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ke(L,b,q){if(o.bindRenderbuffer(o.RENDERBUFFER,L),b.depthBuffer){const pe=b.depthTexture,Se=pe&&pe.isDepthTexture?pe.type:null,ue=U(b.stencilBuffer,Se),Xe=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Gt(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,F(b),ue,b.width,b.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,F(b),ue,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ue,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xe,o.RENDERBUFFER,L)}else{const pe=b.textures;for(let Se=0;Se<pe.length;Se++){const ue=pe[Se],Xe=c.convert(ue.format,ue.colorSpace),Ue=c.convert(ue.type),Ge=N(ue.internalFormat,Xe,Ue,ue.colorSpace);Gt(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,F(b),Ge,b.width,b.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,F(b),Ge,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Ge,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function He(L,b,q){const pe=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=s.get(b.depthTexture);if(Se.__renderTarget=b,(!Se.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),pe){if(Se.__webglInit===void 0&&(Se.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),Se.__webglTexture===void 0){Se.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Se.__webglTexture),ie(o.TEXTURE_CUBE_MAP,b.depthTexture);const tt=c.convert(b.depthTexture.format),Te=c.convert(b.depthTexture.type);let we;b.depthTexture.format===Da?we=o.DEPTH_COMPONENT24:b.depthTexture.format===Vs&&(we=o.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,we,b.width,b.height,0,tt,Te,null)}}else re(b.depthTexture,0);const ue=Se.__webglTexture,Xe=F(b),Ue=pe?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,Ge=b.depthTexture.format===Vs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(b.depthTexture.format===Da)Gt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ge,Ue,ue,0,Xe):o.framebufferTexture2D(o.FRAMEBUFFER,Ge,Ue,ue,0);else if(b.depthTexture.format===Vs)Gt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ge,Ue,ue,0,Xe):o.framebufferTexture2D(o.FRAMEBUFFER,Ge,Ue,ue,0);else throw new Error("Unknown depthTexture format")}function ut(L){const b=s.get(L),q=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const pe=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pe){const Se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pe.removeEventListener("dispose",Se)};pe.addEventListener("dispose",Se),b.__depthDisposeCallback=Se}b.__boundDepthTexture=pe}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(q)for(let pe=0;pe<6;pe++)He(b.__webglFramebuffer[pe],L,pe);else{const pe=L.texture.mipmaps;pe&&pe.length>0?He(b.__webglFramebuffer[0],L,0):He(b.__webglFramebuffer,L,0)}else if(q){b.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[pe]),b.__webglDepthbuffer[pe]===void 0)b.__webglDepthbuffer[pe]=o.createRenderbuffer(),ke(b.__webglDepthbuffer[pe],L,!1);else{const Se=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,Se,o.RENDERBUFFER,ue)}}else{const pe=L.texture.mipmaps;if(pe&&pe.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),ke(b.__webglDepthbuffer,L,!1);else{const Se=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,Se,o.RENDERBUFFER,ue)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function $t(L,b,q){const pe=s.get(L);b!==void 0&&De(pe.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&ut(L)}function gt(L){const b=L.texture,q=s.get(L),pe=s.get(b);L.addEventListener("dispose",P);const Se=L.textures,ue=L.isWebGLCubeRenderTarget===!0,Xe=Se.length>1;if(Xe||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=b.version,h.memory.textures++),ue){q.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[Ue]=[];for(let Ge=0;Ge<b.mipmaps.length;Ge++)q.__webglFramebuffer[Ue][Ge]=o.createFramebuffer()}else q.__webglFramebuffer[Ue]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ue=0;Ue<b.mipmaps.length;Ue++)q.__webglFramebuffer[Ue]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Xe)for(let Ue=0,Ge=Se.length;Ue<Ge;Ue++){const tt=s.get(Se[Ue]);tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&Gt(L)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Se.length;Ue++){const Ge=Se[Ue];q.__webglColorRenderbuffer[Ue]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[Ue]);const tt=c.convert(Ge.format,Ge.colorSpace),Te=c.convert(Ge.type),we=N(Ge.internalFormat,tt,Te,Ge.colorSpace,L.isXRRenderTarget===!0),Fe=F(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Fe,we,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,q.__webglColorRenderbuffer[Ue])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),ke(q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){i.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ie(o.TEXTURE_CUBE_MAP,b);for(let Ue=0;Ue<6;Ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ge=0;Ge<b.mipmaps.length;Ge++)De(q.__webglFramebuffer[Ue][Ge],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ge);else De(q.__webglFramebuffer[Ue],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);M(b)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xe){for(let Ue=0,Ge=Se.length;Ue<Ge;Ue++){const tt=Se[Ue],Te=s.get(tt);let we=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(we=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(we,Te.__webglTexture),ie(we,tt),De(q.__webglFramebuffer,L,tt,o.COLOR_ATTACHMENT0+Ue,we,0),M(tt)&&x(we)}i.unbindTexture()}else{let Ue=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ue=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ue,pe.__webglTexture),ie(Ue,b),b.mipmaps&&b.mipmaps.length>0)for(let Ge=0;Ge<b.mipmaps.length;Ge++)De(q.__webglFramebuffer[Ge],L,b,o.COLOR_ATTACHMENT0,Ue,Ge);else De(q.__webglFramebuffer,L,b,o.COLOR_ATTACHMENT0,Ue,0);M(b)&&x(Ue),i.unbindTexture()}L.depthBuffer&&ut(L)}function dt(L){const b=L.textures;for(let q=0,pe=b.length;q<pe;q++){const Se=b[q];if(M(Se)){const ue=D(L),Xe=s.get(Se).__webglTexture;i.bindTexture(ue,Xe),x(ue),i.unbindTexture()}}}const Nt=[],at=[];function bt(L){if(L.samples>0){if(Gt(L)===!1){const b=L.textures,q=L.width,pe=L.height;let Se=o.COLOR_BUFFER_BIT;const ue=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xe=s.get(L),Ue=b.length>1;if(Ue)for(let tt=0;tt<b.length;tt++)i.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer);const Ge=L.texture.mipmaps;Ge&&Ge.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let tt=0;tt<b.length;tt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Se|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Se|=o.STENCIL_BUFFER_BIT)),Ue){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xe.__webglColorRenderbuffer[tt]);const Te=s.get(b[tt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Te,0)}o.blitFramebuffer(0,0,q,pe,0,0,q,pe,Se,o.NEAREST),m===!0&&(Nt.length=0,at.length=0,Nt.push(o.COLOR_ATTACHMENT0+tt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Nt.push(ue),at.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,at)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Nt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ue)for(let tt=0;tt<b.length;tt++){i.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,Xe.__webglColorRenderbuffer[tt]);const Te=s.get(b[tt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,Te,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function F(L){return Math.min(l.maxSamples,L.samples)}function Gt(L){const b=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function At(L){const b=h.render.frame;_.get(L)!==b&&(_.set(L,b),L.update())}function It(L,b){const q=L.colorSpace,pe=L.format,Se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Qr&&q!==cs&&(Ot.getTransfer(q)===qt?(pe!==Pi||Se!==mi)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",q)),b}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=K,this.resetTextureUnits=Y,this.setTexture2D=re,this.setTexture2DArray=z,this.setTexture3D=V,this.setTextureCube=ne,this.rebindTextures=$t,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function IA(o,e){function i(s,l=cs){let c;const h=Ot.getTransfer(l);if(s===mi)return o.UNSIGNED_BYTE;if(s===Qd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Jd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===gv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===_v)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===pv)return o.BYTE;if(s===mv)return o.SHORT;if(s===rl)return o.UNSIGNED_SHORT;if(s===Kd)return o.INT;if(s===Ji)return o.UNSIGNED_INT;if(s===ji)return o.FLOAT;if(s===Ca)return o.HALF_FLOAT;if(s===vv)return o.ALPHA;if(s===xv)return o.RGB;if(s===Pi)return o.RGBA;if(s===Da)return o.DEPTH_COMPONENT;if(s===Vs)return o.DEPTH_STENCIL;if(s===yv)return o.RED;if(s===$d)return o.RED_INTEGER;if(s===Kr)return o.RG;if(s===ep)return o.RG_INTEGER;if(s===tp)return o.RGBA_INTEGER;if(s===jc||s===Zc||s===Kc||s===Qc)if(h===qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hd||s===dd||s===pd||s===md)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===hd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===pd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===md)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===gd||s===_d||s===vd||s===xd||s===yd||s===Sd||s===Md)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===gd||s===_d)return h===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===vd)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===xd)return c.COMPRESSED_R11_EAC;if(s===yd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Sd)return c.COMPRESSED_RG11_EAC;if(s===Md)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===bd||s===Ed||s===Td||s===Ad||s===wd||s===Rd||s===Cd||s===Dd||s===Ud||s===Nd||s===Ld||s===Od||s===Id||s===Pd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===bd)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ed)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Td)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ad)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wd)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rd)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Cd)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dd)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ud)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Nd)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ld)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Od)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Id)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Pd)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zd||s===Bd||s===Fd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===zd)return h===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Bd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Hd||s===Gd||s===Vd||s===kd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Hd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Gd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===kd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ol?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const PA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zA=`
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

}`;class BA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Lv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ea({vertexShader:PA,fragmentShader:zA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new St(new Xs(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FA extends $r{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,y=null,S=null,T=null;const C=typeof XRWebGLBinding<"u",M=new BA,x={},D=i.getContextAttributes();let N=null,U=null;const O=[],B=[],P=new mt;let k=null;const E=new ii;E.viewport=new fn;const R=new ii;R.viewport=new fn;const G=[E,R],Y=new ZM;let K=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let oe=O[$];return oe===void 0&&(oe=new Vh,O[$]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function($){let oe=O[$];return oe===void 0&&(oe=new Vh,O[$]=oe),oe.getGripSpace()},this.getHand=function($){let oe=O[$];return oe===void 0&&(oe=new Vh,O[$]=oe),oe.getHandSpace()};function re($){const oe=B.indexOf($.inputSource);if(oe===-1)return;const De=O[oe];De!==void 0&&(De.update($.inputSource,$.frame,p||h),De.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){l.removeEventListener("select",re),l.removeEventListener("selectstart",re),l.removeEventListener("selectend",re),l.removeEventListener("squeeze",re),l.removeEventListener("squeezestart",re),l.removeEventListener("squeezeend",re),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",V);for(let $=0;$<O.length;$++){const oe=B[$];oe!==null&&(B[$]=null,O[$].disconnect(oe))}K=null,fe=null,M.reset();for(const $ in x)delete x[$];e.setRenderTarget(N),S=null,y=null,g=null,l=null,U=null,Be.stop(),s.isPresenting=!1,e.setPixelRatio(k),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,s.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,s.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",re),l.addEventListener("selectstart",re),l.addEventListener("selectend",re),l.addEventListener("squeeze",re),l.addEventListener("squeezestart",re),l.addEventListener("squeezeend",re),l.addEventListener("end",z),l.addEventListener("inputsourceschange",V),D.xrCompatible!==!0&&await i.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,ke=null,He=null;D.depth&&(He=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,De=D.stencil?Vs:Da,ke=D.stencil?ol:Ji);const ut={colorFormat:i.RGBA8,depthFormat:He,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer(ut),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),U=new Qi(y.textureWidth,y.textureHeight,{format:Pi,type:mi,depthTexture:new ul(y.textureWidth,y.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const De={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,De),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Qi(S.framebufferWidth,S.framebufferHeight,{format:Pi,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Be.setContext(l),Be.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V($){for(let oe=0;oe<$.removed.length;oe++){const De=$.removed[oe],ke=B.indexOf(De);ke>=0&&(B[ke]=null,O[ke].disconnect(De))}for(let oe=0;oe<$.added.length;oe++){const De=$.added[oe];let ke=B.indexOf(De);if(ke===-1){for(let ut=0;ut<O.length;ut++)if(ut>=B.length){B.push(De),ke=ut;break}else if(B[ut]===null){B[ut]=De,ke=ut;break}if(ke===-1)break}const He=O[ke];He&&He.connect(De)}}const ne=new Q,Me=new Q;function be($,oe,De){ne.setFromMatrixPosition(oe.matrixWorld),Me.setFromMatrixPosition(De.matrixWorld);const ke=ne.distanceTo(Me),He=oe.projectionMatrix.elements,ut=De.projectionMatrix.elements,$t=He[14]/(He[10]-1),gt=He[14]/(He[10]+1),dt=(He[9]+1)/He[5],Nt=(He[9]-1)/He[5],at=(He[8]-1)/He[0],bt=(ut[8]+1)/ut[0],F=$t*at,Gt=$t*bt,At=ke/(-at+bt),It=At*-at;if(oe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(It),$.translateZ(At),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),He[10]===-1)$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Ye=$t+At,L=gt+At,b=F-It,q=Gt+(ke-It),pe=dt*gt/L*Ye,Se=Nt*gt/L*Ye;$.projectionMatrix.makePerspective(b,q,pe,Se,Ye,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function I($,oe){oe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(oe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let oe=$.near,De=$.far;M.texture!==null&&(M.depthNear>0&&(oe=M.depthNear),M.depthFar>0&&(De=M.depthFar)),Y.near=R.near=E.near=oe,Y.far=R.far=E.far=De,(K!==Y.near||fe!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),K=Y.near,fe=Y.far),Y.layers.mask=$.layers.mask|6,E.layers.mask=Y.layers.mask&3,R.layers.mask=Y.layers.mask&5;const ke=$.parent,He=Y.cameras;I(Y,ke);for(let ut=0;ut<He.length;ut++)I(He[ut],ke);He.length===2?be(Y,E,R):Y.projectionMatrix.copy(E.projectionMatrix),ie($,Y,ke)};function ie($,oe,De){De===null?$.matrix.copy(oe.matrixWorld):($.matrix.copy(De.matrixWorld),$.matrix.invert(),$.matrix.multiply(oe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=nu*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function($){m=$,y!==null&&(y.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function($){return x[$]};let ve=null;function Ce($,oe){if(_=oe.getViewerPose(p||h),T=oe,_!==null){const De=_.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let ke=!1;De.length!==Y.cameras.length&&(Y.cameras.length=0,ke=!0);for(let gt=0;gt<De.length;gt++){const dt=De[gt];let Nt=null;if(S!==null)Nt=S.getViewport(dt);else{const bt=g.getViewSubImage(y,dt);Nt=bt.viewport,gt===0&&(e.setRenderTargetTextures(U,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(U))}let at=G[gt];at===void 0&&(at=new ii,at.layers.enable(gt),at.viewport=new fn,G[gt]=at),at.matrix.fromArray(dt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(dt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),gt===0&&(Y.matrix.copy(at.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),ke===!0&&Y.cameras.push(at)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=s.getBinding();const gt=g.getDepthInformation(De[0]);gt&&gt.isValid&&gt.texture&&M.init(gt,l.renderState)}if(He&&He.includes("camera-access")&&C){e.state.unbindTexture(),g=s.getBinding();for(let gt=0;gt<De.length;gt++){const dt=De[gt].camera;if(dt){let Nt=x[dt];Nt||(Nt=new Lv,x[dt]=Nt);const at=g.getCameraImage(dt);Nt.sourceTexture=at}}}}for(let De=0;De<O.length;De++){const ke=B[De],He=O[De];ke!==null&&He!==void 0&&He.update(ke,oe,p||h)}ve&&ve($,oe),oe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:oe}),T=null}const Be=new Ov;Be.setAnimationLoop(Ce),this.setAnimationLoop=function($){ve=$},this.dispose=function(){}}}const zs=new $i,HA=new on;function GA(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,Rv(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,D,N,U){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),g(M,x)):x.isMeshPhongMaterial?(c(M,x),_(M,x)):x.isMeshStandardMaterial?(c(M,x),y(M,x),x.isMeshPhysicalMaterial&&S(M,x,U)):x.isMeshMatcapMaterial?(c(M,x),T(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),C(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,D,N):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===ai&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===ai&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const D=e.get(x),N=D.envMap,U=D.envMapRotation;N&&(M.envMap.value=N,zs.copy(U),zs.x*=-1,zs.y*=-1,zs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),M.envMapRotation.value.setFromMatrix4(HA.makeRotationFromEuler(zs)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,D,N){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*D,M.scale.value=N*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function y(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,D){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ai&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,x){x.matcap&&(M.matcap.value=x.matcap)}function C(M,x){const D=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function VA(o,e,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,N){const U=N.program;s.uniformBlockBinding(D,U)}function p(D,N){let U=l[D.id];U===void 0&&(T(D),U=_(D),l[D.id]=U,D.addEventListener("dispose",M));const O=N.program;s.updateUBOMapping(D,O);const B=e.render.frame;c[D.id]!==B&&(y(D),c[D.id]=B)}function _(D){const N=g();D.__bindingPointIndex=N;const U=o.createBuffer(),O=D.__size,B=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,O,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,U),U}function g(){for(let D=0;D<d;D++)if(h.indexOf(D)===-1)return h.push(D),D;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(D){const N=l[D.id],U=D.uniforms,O=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let B=0,P=U.length;B<P;B++){const k=Array.isArray(U[B])?U[B]:[U[B]];for(let E=0,R=k.length;E<R;E++){const G=k[E];if(S(G,B,E,O)===!0){const Y=G.__offset,K=Array.isArray(G.value)?G.value:[G.value];let fe=0;for(let re=0;re<K.length;re++){const z=K[re],V=C(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,Y+fe,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):(z.toArray(G.__data,fe),fe+=V.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(D,N,U,O){const B=D.value,P=N+"_"+U;if(O[P]===void 0)return typeof B=="number"||typeof B=="boolean"?O[P]=B:O[P]=B.clone(),!0;{const k=O[P];if(typeof B=="number"||typeof B=="boolean"){if(k!==B)return O[P]=B,!0}else if(k.equals(B)===!1)return k.copy(B),!0}return!1}function T(D){const N=D.uniforms;let U=0;const O=16;for(let P=0,k=N.length;P<k;P++){const E=Array.isArray(N[P])?N[P]:[N[P]];for(let R=0,G=E.length;R<G;R++){const Y=E[R],K=Array.isArray(Y.value)?Y.value:[Y.value];for(let fe=0,re=K.length;fe<re;fe++){const z=K[fe],V=C(z),ne=U%O,Me=ne%V.boundary,be=ne+Me;U+=Me,be!==0&&O-be<V.storage&&(U+=O-be),Y.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=U,U+=V.storage}}}const B=U%O;return B>0&&(U+=O-B),D.__size=U,D.__cache={},this}function C(D){const N={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(N.boundary=4,N.storage=4):D.isVector2?(N.boundary=8,N.storage=8):D.isVector3||D.isColor?(N.boundary=16,N.storage=12):D.isVector4?(N.boundary=16,N.storage=16):D.isMatrix3?(N.boundary=48,N.storage=48):D.isMatrix4?(N.boundary=64,N.storage=64):D.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ct("WebGLRenderer: Unsupported uniform value type.",D),N}function M(D){const N=D.target;N.removeEventListener("dispose",M);const U=h.indexOf(N.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function x(){for(const D in l)o.deleteBuffer(l[D]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}const kA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function XA(){return ki===null&&(ki=new UM(kA,16,16,Kr,Ca),ki.name="DFG_LUT",ki.minFilter=Wn,ki.magFilter=Wn,ki.wrapS=Aa,ki.wrapT=Aa,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class WA{constructor(e={}){const{canvas:i=nM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1,outputBufferType:S=mi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const C=S,M=new Set([tp,ep,$d]),x=new Set([mi,Ji,rl,ol,Qd,Jd]),D=new Uint32Array(4),N=new Int32Array(4);let U=null,O=null;const B=[],P=[];let k=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let R=!1;this._outputColorSpace=Ai;let G=0,Y=0,K=null,fe=-1,re=null;const z=new fn,V=new fn;let ne=null;const Me=new Ct(0);let be=0,I=i.width,ie=i.height,ve=1,Ce=null,Be=null;const $=new fn(0,0,I,ie),oe=new fn(0,0,I,ie);let De=!1;const ke=new rp;let He=!1,ut=!1;const $t=new on,gt=new Q,dt=new fn,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function bt(){return K===null?ve:1}let F=s;function Gt(w,j){return i.getContext(w,j)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Zd}`),i.addEventListener("webglcontextlost",Ae,!1),i.addEventListener("webglcontextrestored",Qe,!1),i.addEventListener("webglcontextcreationerror",ot,!1),F===null){const j="webgl2";if(F=Gt(j,w),F===null)throw Gt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Lt("WebGLRenderer: "+w.message),w}let At,It,Ye,L,b,q,pe,Se,ue,Xe,Ue,Ge,tt,Te,we,Fe,Ie,Ne,ft,W,Le,Re,ye,de;function he(){At=new X1(F),At.init(),Re=new IA(F,At),It=new I1(F,At,e,Re),Ye=new LA(F,At),It.reversedDepthBuffer&&y&&Ye.buffers.depth.setReversed(!0),L=new Y1(F),b=new vA,q=new OA(F,At,Ye,b,It,Re,L),pe=new z1(E),Se=new k1(E),ue=new QM(F),ye=new L1(F,ue),Xe=new W1(F,ue,L,ye),Ue=new Z1(F,Xe,ue,L),ft=new j1(F,It,q),Fe=new P1(b),Ge=new _A(E,pe,Se,At,It,ye,Fe),tt=new GA(E,b),Te=new yA,we=new AA(At),Ne=new N1(E,pe,Se,Ye,Ue,T,m),Ie=new UA(E,Ue,It),de=new VA(F,L,It,Ye),W=new O1(F,At,L),Le=new q1(F,At,L),L.programs=Ge.programs,E.capabilities=It,E.extensions=At,E.properties=b,E.renderLists=Te,E.shadowMap=Ie,E.state=Ye,E.info=L}he(),C!==mi&&(k=new Q1(C,i.width,i.height,l,c));const Ee=new FA(E,F);this.xr=Ee,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=At.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=At.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(w){w!==void 0&&(ve=w,this.setSize(I,ie,!1))},this.getSize=function(w){return w.set(I,ie)},this.setSize=function(w,j,le=!0){if(Ee.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,ie=j,i.width=Math.floor(w*ve),i.height=Math.floor(j*ve),le===!0&&(i.style.width=w+"px",i.style.height=j+"px"),k!==null&&k.setSize(i.width,i.height),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(I*ve,ie*ve).floor()},this.setDrawingBufferSize=function(w,j,le){I=w,ie=j,ve=le,i.width=Math.floor(w*le),i.height=Math.floor(j*le),this.setViewport(0,0,w,j)},this.setEffects=function(w){if(C===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let j=0;j<w.length;j++)if(w[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,j,le,ae){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,j,le,ae),Ye.viewport(z.copy($).multiplyScalar(ve).round())},this.getScissor=function(w){return w.copy(oe)},this.setScissor=function(w,j,le,ae){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,j,le,ae),Ye.scissor(V.copy(oe).multiplyScalar(ve).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(w){Ye.setScissorTest(De=w)},this.setOpaqueSort=function(w){Ce=w},this.setTransparentSort=function(w){Be=w},this.getClearColor=function(w){return w.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(w=!0,j=!0,le=!0){let ae=0;if(w){let J=!1;if(K!==null){const Oe=K.texture.format;J=M.has(Oe)}if(J){const Oe=K.texture.type,Ve=x.has(Oe),Pe=Ne.getClearColor(),We=Ne.getClearAlpha(),je=Pe.r,et=Pe.g,Ze=Pe.b;Ve?(D[0]=je,D[1]=et,D[2]=Ze,D[3]=We,F.clearBufferuiv(F.COLOR,0,D)):(N[0]=je,N[1]=et,N[2]=Ze,N[3]=We,F.clearBufferiv(F.COLOR,0,N))}else ae|=F.COLOR_BUFFER_BIT}j&&(ae|=F.DEPTH_BUFFER_BIT),le&&(ae|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ae,!1),i.removeEventListener("webglcontextrestored",Qe,!1),i.removeEventListener("webglcontextcreationerror",ot,!1),Ne.dispose(),Te.dispose(),we.dispose(),b.dispose(),pe.dispose(),Se.dispose(),Ue.dispose(),ye.dispose(),de.dispose(),Ge.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Bi),Ee.removeEventListener("sessionend",na),Kn.stop()};function Ae(w){w.preventDefault(),tu("WebGLRenderer: Context Lost."),R=!0}function Qe(){tu("WebGLRenderer: Context Restored."),R=!1;const w=L.autoReset,j=Ie.enabled,le=Ie.autoUpdate,ae=Ie.needsUpdate,J=Ie.type;he(),L.autoReset=w,Ie.enabled=j,Ie.autoUpdate=le,Ie.needsUpdate=ae,Ie.type=J}function ot(w){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function _t(w){const j=w.target;j.removeEventListener("dispose",_t),ht(j)}function ht(w){st(w),b.remove(w)}function st(w){const j=b.get(w).programs;j!==void 0&&(j.forEach(function(le){Ge.releaseProgram(le)}),w.isShaderMaterial&&Ge.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,le,ae,J,Oe){j===null&&(j=Nt);const Ve=J.isMesh&&J.matrixWorld.determinant()<0,Pe=ps(w,j,le,ae,J);Ye.setMaterial(ae,Ve);let We=le.index,je=1;if(ae.wireframe===!0){if(We=Xe.getWireframeAttribute(le),We===void 0)return;je=2}const et=le.drawRange,Ze=le.attributes.position;let nt=et.start*je,Bt=(et.start+et.count)*je;Oe!==null&&(nt=Math.max(nt,Oe.start*je),Bt=Math.min(Bt,(Oe.start+Oe.count)*je)),We!==null?(nt=Math.max(nt,0),Bt=Math.min(Bt,We.count)):Ze!=null&&(nt=Math.max(nt,0),Bt=Math.min(Bt,Ze.count));const sn=Bt-nt;if(sn<0||sn===1/0)return;ye.setup(J,ae,Pe,le,We);let en,Vt=W;if(We!==null&&(en=ue.get(We),Vt=Le,Vt.setIndex(en)),J.isMesh)ae.wireframe===!0?(Ye.setLineWidth(ae.wireframeLinewidth*bt()),Vt.setMode(F.LINES)):Vt.setMode(F.TRIANGLES);else if(J.isLine){let Je=ae.linewidth;Je===void 0&&(Je=1),Ye.setLineWidth(Je*bt()),J.isLineSegments?Vt.setMode(F.LINES):J.isLineLoop?Vt.setMode(F.LINE_LOOP):Vt.setMode(F.LINE_STRIP)}else J.isPoints?Vt.setMode(F.POINTS):J.isSprite&&Vt.setMode(F.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)cl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Vt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(At.get("WEBGL_multi_draw"))Vt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Je=J._multiDrawStarts,Ft=J._multiDrawCounts,rt=J._multiDrawCount,Nn=We?ue.get(We).bytesPerElement:1,ia=b.get(ae).currentProgram.getUniforms();for(let Ln=0;Ln<rt;Ln++)ia.setValue(F,"_gl_DrawID",Ln),Vt.render(Je[Ln]/Nn,Ft[Ln])}else if(J.isInstancedMesh)Vt.renderInstances(nt,sn,J.count);else if(le.isInstancedBufferGeometry){const Je=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ft=Math.min(le.instanceCount,Je);Vt.renderInstances(nt,sn,Ft)}else Vt.render(nt,sn)};function Qt(w,j,le){w.transparent===!0&&w.side===qi&&w.forceSinglePass===!1?(w.side=ai,w.needsUpdate=!0,Ys(w,j,le),w.side=hs,w.needsUpdate=!0,Ys(w,j,le),w.side=qi):Ys(w,j,le)}this.compile=function(w,j,le=null){le===null&&(le=w),O=we.get(le),O.init(j),P.push(O),le.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(O.pushLight(J),J.castShadow&&O.pushShadow(J))}),w!==le&&w.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(O.pushLight(J),J.castShadow&&O.pushShadow(J))}),O.setupLights();const ae=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Oe=J.material;if(Oe)if(Array.isArray(Oe))for(let Ve=0;Ve<Oe.length;Ve++){const Pe=Oe[Ve];Qt(Pe,le,J),ae.add(Pe)}else Qt(Oe,le,J),ae.add(Oe)}),O=P.pop(),ae},this.compileAsync=function(w,j,le=null){const ae=this.compile(w,j,le);return new Promise(J=>{function Oe(){if(ae.forEach(function(Ve){b.get(Ve).currentProgram.isReady()&&ae.delete(Ve)}),ae.size===0){J(w);return}setTimeout(Oe,10)}At.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Sn=null;function ta(w){Sn&&Sn(w)}function Bi(){Kn.stop()}function na(){Kn.start()}const Kn=new Ov;Kn.setAnimationLoop(ta),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(w){Sn=w,Ee.setAnimationLoop(w),w===null?Kn.stop():Kn.start()},Ee.addEventListener("sessionstart",Bi),Ee.addEventListener("sessionend",na),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const le=Ee.enabled===!0&&Ee.isPresenting===!0,ae=k!==null&&(K===null||le)&&k.begin(E,K);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(j),j=Ee.getCamera()),w.isScene===!0&&w.onBeforeRender(E,w,j,K),O=we.get(w,P.length),O.init(j),P.push(O),$t.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ke.setFromProjectionMatrix($t,Zi,j.reversedDepth),ut=this.localClippingEnabled,He=Fe.init(this.clippingPlanes,ut),U=Te.get(w,B.length),U.init(),B.push(U),Ee.enabled===!0&&Ee.isPresenting===!0){const Ve=E.xr.getDepthSensingMesh();Ve!==null&&mn(Ve,j,-1/0,E.sortObjects)}mn(w,j,0,E.sortObjects),U.finish(),E.sortObjects===!0&&U.sort(Ce,Be),at=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,at&&Ne.addToRenderList(U,w),this.info.render.frame++,He===!0&&Fe.beginShadows();const J=O.state.shadowsArray;if(Ie.render(J,w,j),He===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&k.hasRenderPass())===!1){const Ve=U.opaque,Pe=U.transmissive;if(O.setupLights(),j.isArrayCamera){const We=j.cameras;if(Pe.length>0)for(let je=0,et=We.length;je<et;je++){const Ze=We[je];ln(Ve,Pe,w,Ze)}at&&Ne.render(w);for(let je=0,et=We.length;je<et;je++){const Ze=We[je];tn(U,w,Ze,Ze.viewport)}}else Pe.length>0&&ln(Ve,Pe,w,j),at&&Ne.render(w),tn(U,w,j)}K!==null&&Y===0&&(q.updateMultisampleRenderTarget(K),q.updateRenderTargetMipmap(K)),ae&&k.end(E),w.isScene===!0&&w.onAfterRender(E,w,j),ye.resetDefaultState(),fe=-1,re=null,P.pop(),P.length>0?(O=P[P.length-1],He===!0&&Fe.setGlobalState(E.clippingPlanes,O.state.camera)):O=null,B.pop(),B.length>0?U=B[B.length-1]:U=null};function mn(w,j,le,ae){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)le=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLight)O.pushLight(w),w.castShadow&&O.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ke.intersectsSprite(w)){ae&&dt.setFromMatrixPosition(w.matrixWorld).applyMatrix4($t);const Ve=Ue.update(w),Pe=w.material;Pe.visible&&U.push(w,Ve,Pe,le,dt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ke.intersectsObject(w))){const Ve=Ue.update(w),Pe=w.material;if(ae&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),dt.copy(w.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),dt.copy(Ve.boundingSphere.center)),dt.applyMatrix4(w.matrixWorld).applyMatrix4($t)),Array.isArray(Pe)){const We=Ve.groups;for(let je=0,et=We.length;je<et;je++){const Ze=We[je],nt=Pe[Ze.materialIndex];nt&&nt.visible&&U.push(w,Ve,nt,le,dt.z,Ze)}}else Pe.visible&&U.push(w,Ve,Pe,le,dt.z,null)}}const Oe=w.children;for(let Ve=0,Pe=Oe.length;Ve<Pe;Ve++)mn(Oe[Ve],j,le,ae)}function tn(w,j,le,ae){const{opaque:J,transmissive:Oe,transparent:Ve}=w;O.setupLightsView(le),He===!0&&Fe.setGlobalState(E.clippingPlanes,le),ae&&Ye.viewport(z.copy(ae)),J.length>0&&Ri(J,j,le),Oe.length>0&&Ri(Oe,j,le),Ve.length>0&&Ri(Ve,j,le),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function ln(w,j,le,ae){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[ae.id]===void 0){const nt=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[ae.id]=new Qi(1,1,{generateMipmaps:!0,type:nt?Ca:mi,minFilter:Gs,samples:It.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace})}const Oe=O.state.transmissionRenderTarget[ae.id],Ve=ae.viewport||z;Oe.setSize(Ve.z*E.transmissionResolutionScale,Ve.w*E.transmissionResolutionScale);const Pe=E.getRenderTarget(),We=E.getActiveCubeFace(),je=E.getActiveMipmapLevel();E.setRenderTarget(Oe),E.getClearColor(Me),be=E.getClearAlpha(),be<1&&E.setClearColor(16777215,.5),E.clear(),at&&Ne.render(le);const et=E.toneMapping;E.toneMapping=Ki;const Ze=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),O.setupLightsView(ae),He===!0&&Fe.setGlobalState(E.clippingPlanes,ae),Ri(w,le,ae),q.updateMultisampleRenderTarget(Oe),q.updateRenderTargetMipmap(Oe),At.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Bt=0,sn=j.length;Bt<sn;Bt++){const en=j[Bt],{object:Vt,geometry:Je,material:Ft,group:rt}=en;if(Ft.side===qi&&Vt.layers.test(ae.layers)){const Nn=Ft.side;Ft.side=ai,Ft.needsUpdate=!0,qs(Vt,le,ae,Je,Ft,rt),Ft.side=Nn,Ft.needsUpdate=!0,nt=!0}}nt===!0&&(q.updateMultisampleRenderTarget(Oe),q.updateRenderTargetMipmap(Oe))}E.setRenderTarget(Pe,We,je),E.setClearColor(Me,be),Ze!==void 0&&(ae.viewport=Ze),E.toneMapping=et}function Ri(w,j,le){const ae=j.isScene===!0?j.overrideMaterial:null;for(let J=0,Oe=w.length;J<Oe;J++){const Ve=w[J],{object:Pe,geometry:We,group:je}=Ve;let et=Ve.material;et.allowOverride===!0&&ae!==null&&(et=ae),Pe.layers.test(le.layers)&&qs(Pe,j,le,We,et,je)}}function qs(w,j,le,ae,J,Oe){w.onBeforeRender(E,j,le,ae,J,Oe),w.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(E,j,le,ae,w,Oe),J.transparent===!0&&J.side===qi&&J.forceSinglePass===!1?(J.side=ai,J.needsUpdate=!0,E.renderBufferDirect(le,j,ae,J,w,Oe),J.side=hs,J.needsUpdate=!0,E.renderBufferDirect(le,j,ae,J,w,Oe),J.side=qi):E.renderBufferDirect(le,j,ae,J,w,Oe),w.onAfterRender(E,j,le,ae,J,Oe)}function Ys(w,j,le){j.isScene!==!0&&(j=Nt);const ae=b.get(w),J=O.state.lights,Oe=O.state.shadowsArray,Ve=J.state.version,Pe=Ge.getParameters(w,J.state,Oe,j,le),We=Ge.getProgramCacheKey(Pe);let je=ae.programs;ae.environment=w.isMeshStandardMaterial?j.environment:null,ae.fog=j.fog,ae.envMap=(w.isMeshStandardMaterial?Se:pe).get(w.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,je===void 0&&(w.addEventListener("dispose",_t),je=new Map,ae.programs=je);let et=je.get(We);if(et!==void 0){if(ae.currentProgram===et&&ae.lightsStateVersion===Ve)return no(w,Pe),et}else Pe.uniforms=Ge.getUniforms(w),w.onBeforeCompile(Pe,E),et=Ge.acquireProgram(Pe,We),je.set(We,et),ae.uniforms=Pe.uniforms;const Ze=ae.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ze.clippingPlanes=Fe.uniform),no(w,Pe),ae.needsLights=Ua(w),ae.lightsStateVersion=Ve,ae.needsLights&&(Ze.ambientLightColor.value=J.state.ambient,Ze.lightProbe.value=J.state.probe,Ze.directionalLights.value=J.state.directional,Ze.directionalLightShadows.value=J.state.directionalShadow,Ze.spotLights.value=J.state.spot,Ze.spotLightShadows.value=J.state.spotShadow,Ze.rectAreaLights.value=J.state.rectArea,Ze.ltc_1.value=J.state.rectAreaLTC1,Ze.ltc_2.value=J.state.rectAreaLTC2,Ze.pointLights.value=J.state.point,Ze.pointLightShadows.value=J.state.pointShadow,Ze.hemisphereLights.value=J.state.hemi,Ze.directionalShadowMap.value=J.state.directionalShadowMap,Ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ze.spotShadowMap.value=J.state.spotShadowMap,Ze.spotLightMatrix.value=J.state.spotLightMatrix,Ze.spotLightMap.value=J.state.spotLightMap,Ze.pointShadowMap.value=J.state.pointShadowMap,Ze.pointShadowMatrix.value=J.state.pointShadowMatrix),ae.currentProgram=et,ae.uniformsList=null,et}function pl(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=Jc.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function no(w,j){const le=b.get(w);le.outputColorSpace=j.outputColorSpace,le.batching=j.batching,le.batchingColor=j.batchingColor,le.instancing=j.instancing,le.instancingColor=j.instancingColor,le.instancingMorph=j.instancingMorph,le.skinning=j.skinning,le.morphTargets=j.morphTargets,le.morphNormals=j.morphNormals,le.morphColors=j.morphColors,le.morphTargetsCount=j.morphTargetsCount,le.numClippingPlanes=j.numClippingPlanes,le.numIntersection=j.numClipIntersection,le.vertexAlphas=j.vertexAlphas,le.vertexTangents=j.vertexTangents,le.toneMapping=j.toneMapping}function ps(w,j,le,ae,J){j.isScene!==!0&&(j=Nt),q.resetTextureUnits();const Oe=j.fog,Ve=ae.isMeshStandardMaterial?j.environment:null,Pe=K===null?E.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Qr,We=(ae.isMeshStandardMaterial?Se:pe).get(ae.envMap||Ve),je=ae.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,et=!!le.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ze=!!le.morphAttributes.position,nt=!!le.morphAttributes.normal,Bt=!!le.morphAttributes.color;let sn=Ki;ae.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(sn=E.toneMapping);const en=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Vt=en!==void 0?en.length:0,Je=b.get(ae),Ft=O.state.lights;if(He===!0&&(ut===!0||w!==re)){const In=w===re&&ae.id===fe;Fe.setState(ae,w,In)}let rt=!1;ae.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Ft.state.version||Je.outputColorSpace!==Pe||J.isBatchedMesh&&Je.batching===!1||!J.isBatchedMesh&&Je.batching===!0||J.isBatchedMesh&&Je.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Je.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Je.instancing===!1||!J.isInstancedMesh&&Je.instancing===!0||J.isSkinnedMesh&&Je.skinning===!1||!J.isSkinnedMesh&&Je.skinning===!0||J.isInstancedMesh&&Je.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Je.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Je.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Je.instancingMorph===!1&&J.morphTexture!==null||Je.envMap!==We||ae.fog===!0&&Je.fog!==Oe||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Fe.numPlanes||Je.numIntersection!==Fe.numIntersection)||Je.vertexAlphas!==je||Je.vertexTangents!==et||Je.morphTargets!==Ze||Je.morphNormals!==nt||Je.morphColors!==Bt||Je.toneMapping!==sn||Je.morphTargetsCount!==Vt)&&(rt=!0):(rt=!0,Je.__version=ae.version);let Nn=Je.currentProgram;rt===!0&&(Nn=Ys(ae,j,J));let ia=!1,Ln=!1,gi=!1;const kt=Nn.getUniforms(),On=Je.uniforms;if(Ye.useProgram(Nn.program)&&(ia=!0,Ln=!0,gi=!0),ae.id!==fe&&(fe=ae.id,Ln=!0),ia||re!==w){Ye.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),kt.setValue(F,"projectionMatrix",w.projectionMatrix),kt.setValue(F,"viewMatrix",w.matrixWorldInverse);const Pn=kt.map.cameraPosition;Pn!==void 0&&Pn.setValue(F,gt.setFromMatrixPosition(w.matrixWorld)),It.logarithmicDepthBuffer&&kt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&kt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),re!==w&&(re=w,Ln=!0,gi=!0)}if(Je.needsLights&&(Ft.state.directionalShadowMap.length>0&&kt.setValue(F,"directionalShadowMap",Ft.state.directionalShadowMap,q),Ft.state.spotShadowMap.length>0&&kt.setValue(F,"spotShadowMap",Ft.state.spotShadowMap,q),Ft.state.pointShadowMap.length>0&&kt.setValue(F,"pointShadowMap",Ft.state.pointShadowMap,q)),J.isSkinnedMesh){kt.setOptional(F,J,"bindMatrix"),kt.setOptional(F,J,"bindMatrixInverse");const In=J.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),kt.setValue(F,"boneTexture",In.boneTexture,q))}J.isBatchedMesh&&(kt.setOptional(F,J,"batchingTexture"),kt.setValue(F,"batchingTexture",J._matricesTexture,q),kt.setOptional(F,J,"batchingIdTexture"),kt.setValue(F,"batchingIdTexture",J._indirectTexture,q),kt.setOptional(F,J,"batchingColorTexture"),J._colorsTexture!==null&&kt.setValue(F,"batchingColorTexture",J._colorsTexture,q));const Mn=le.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&ft.update(J,le,Nn),(Ln||Je.receiveShadow!==J.receiveShadow)&&(Je.receiveShadow=J.receiveShadow,kt.setValue(F,"receiveShadow",J.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(On.envMap.value=We,On.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&j.environment!==null&&(On.envMapIntensity.value=j.environmentIntensity),On.dfgLUT!==void 0&&(On.dfgLUT.value=XA()),Ln&&(kt.setValue(F,"toneMappingExposure",E.toneMappingExposure),Je.needsLights&&io(On,gi),Oe&&ae.fog===!0&&tt.refreshFogUniforms(On,Oe),tt.refreshMaterialUniforms(On,ae,ve,ie,O.state.transmissionRenderTarget[w.id]),Jc.upload(F,pl(Je),On,q)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Jc.upload(F,pl(Je),On,q),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&kt.setValue(F,"center",J.center),kt.setValue(F,"modelViewMatrix",J.modelViewMatrix),kt.setValue(F,"normalMatrix",J.normalMatrix),kt.setValue(F,"modelMatrix",J.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const In=ae.uniformsGroups;for(let Pn=0,js=In.length;Pn<js;Pn++){const Ci=In[Pn];de.update(Ci,Nn),de.bind(Ci,Nn)}}return Nn}function io(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function Ua(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(w,j,le){const ae=b.get(w);ae.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),b.get(w.texture).__webglTexture=j,b.get(w.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:le,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,j){const le=b.get(w);le.__webglFramebuffer=j,le.__useDefaultFramebuffer=j===void 0};const Na=F.createFramebuffer();this.setRenderTarget=function(w,j=0,le=0){K=w,G=j,Y=le;let ae=null,J=!1,Oe=!1;if(w){const Pe=b.get(w);if(Pe.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(F.FRAMEBUFFER,Pe.__webglFramebuffer),z.copy(w.viewport),V.copy(w.scissor),ne=w.scissorTest,Ye.viewport(z),Ye.scissor(V),Ye.setScissorTest(ne),fe=-1;return}else if(Pe.__webglFramebuffer===void 0)q.setupRenderTarget(w);else if(Pe.__hasExternalTextures)q.rebindTextures(w,b.get(w.texture).__webglTexture,b.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const et=w.depthTexture;if(Pe.__boundDepthTexture!==et){if(et!==null&&b.has(et)&&(w.width!==et.image.width||w.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(w)}}const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Oe=!0);const je=b.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(je[j])?ae=je[j][le]:ae=je[j],J=!0):w.samples>0&&q.useMultisampledRTT(w)===!1?ae=b.get(w).__webglMultisampledFramebuffer:Array.isArray(je)?ae=je[le]:ae=je,z.copy(w.viewport),V.copy(w.scissor),ne=w.scissorTest}else z.copy($).multiplyScalar(ve).floor(),V.copy(oe).multiplyScalar(ve).floor(),ne=De;if(le!==0&&(ae=Na),Ye.bindFramebuffer(F.FRAMEBUFFER,ae)&&Ye.drawBuffers(w,ae),Ye.viewport(z),Ye.scissor(V),Ye.setScissorTest(ne),J){const Pe=b.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+j,Pe.__webglTexture,le)}else if(Oe){const Pe=j;for(let We=0;We<w.textures.length;We++){const je=b.get(w.textures[We]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+We,je.__webglTexture,le,Pe)}}else if(w!==null&&le!==0){const Pe=b.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Pe.__webglTexture,le)}fe=-1},this.readRenderTargetPixels=function(w,j,le,ae,J,Oe,Ve,Pe=0){if(!(w&&w.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We){Ye.bindFramebuffer(F.FRAMEBUFFER,We);try{const je=w.textures[Pe],et=je.format,Ze=je.type;if(!It.textureFormatReadable(et)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Ze)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-ae&&le>=0&&le<=w.height-J&&(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Pe),F.readPixels(j,le,ae,J,Re.convert(et),Re.convert(Ze),Oe))}finally{const je=K!==null?b.get(K).__webglFramebuffer:null;Ye.bindFramebuffer(F.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(w,j,le,ae,J,Oe,Ve,Pe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We)if(j>=0&&j<=w.width-ae&&le>=0&&le<=w.height-J){Ye.bindFramebuffer(F.FRAMEBUFFER,We);const je=w.textures[Pe],et=je.format,Ze=je.type;if(!It.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,nt),F.bufferData(F.PIXEL_PACK_BUFFER,Oe.byteLength,F.STREAM_READ),w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Pe),F.readPixels(j,le,ae,J,Re.convert(et),Re.convert(Ze),0);const Bt=K!==null?b.get(K).__webglFramebuffer:null;Ye.bindFramebuffer(F.FRAMEBUFFER,Bt);const sn=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await iM(F,sn,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,nt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Oe),F.deleteBuffer(nt),F.deleteSync(sn),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,j=null,le=0){const ae=Math.pow(2,-le),J=Math.floor(w.image.width*ae),Oe=Math.floor(w.image.height*ae),Ve=j!==null?j.x:0,Pe=j!==null?j.y:0;q.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,le,0,0,Ve,Pe,J,Oe),Ye.unbindTexture()};const ms=F.createFramebuffer(),La=F.createFramebuffer();this.copyTextureToTexture=function(w,j,le=null,ae=null,J=0,Oe=null){Oe===null&&(J!==0?(cl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Oe=J,J=0):Oe=0);let Ve,Pe,We,je,et,Ze,nt,Bt,sn;const en=w.isCompressedTexture?w.mipmaps[Oe]:w.image;if(le!==null)Ve=le.max.x-le.min.x,Pe=le.max.y-le.min.y,We=le.isBox3?le.max.z-le.min.z:1,je=le.min.x,et=le.min.y,Ze=le.isBox3?le.min.z:0;else{const Mn=Math.pow(2,-J);Ve=Math.floor(en.width*Mn),Pe=Math.floor(en.height*Mn),w.isDataArrayTexture?We=en.depth:w.isData3DTexture?We=Math.floor(en.depth*Mn):We=1,je=0,et=0,Ze=0}ae!==null?(nt=ae.x,Bt=ae.y,sn=ae.z):(nt=0,Bt=0,sn=0);const Vt=Re.convert(j.format),Je=Re.convert(j.type);let Ft;j.isData3DTexture?(q.setTexture3D(j,0),Ft=F.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(q.setTexture2DArray(j,0),Ft=F.TEXTURE_2D_ARRAY):(q.setTexture2D(j,0),Ft=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);const rt=F.getParameter(F.UNPACK_ROW_LENGTH),Nn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ia=F.getParameter(F.UNPACK_SKIP_PIXELS),Ln=F.getParameter(F.UNPACK_SKIP_ROWS),gi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,en.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,en.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,je),F.pixelStorei(F.UNPACK_SKIP_ROWS,et),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ze);const kt=w.isDataArrayTexture||w.isData3DTexture,On=j.isDataArrayTexture||j.isData3DTexture;if(w.isDepthTexture){const Mn=b.get(w),In=b.get(j),Pn=b.get(Mn.__renderTarget),js=b.get(In.__renderTarget);Ye.bindFramebuffer(F.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,js.__webglFramebuffer);for(let Ci=0;Ci<We;Ci++)kt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,b.get(w).__webglTexture,J,Ze+Ci),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,b.get(j).__webglTexture,Oe,sn+Ci)),F.blitFramebuffer(je,et,Ve,Pe,nt,Bt,Ve,Pe,F.DEPTH_BUFFER_BIT,F.NEAREST);Ye.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(J!==0||w.isRenderTargetTexture||b.has(w)){const Mn=b.get(w),In=b.get(j);Ye.bindFramebuffer(F.READ_FRAMEBUFFER,ms),Ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,La);for(let Pn=0;Pn<We;Pn++)kt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mn.__webglTexture,J,Ze+Pn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mn.__webglTexture,J),On?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,In.__webglTexture,Oe,sn+Pn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,In.__webglTexture,Oe),J!==0?F.blitFramebuffer(je,et,Ve,Pe,nt,Bt,Ve,Pe,F.COLOR_BUFFER_BIT,F.NEAREST):On?F.copyTexSubImage3D(Ft,Oe,nt,Bt,sn+Pn,je,et,Ve,Pe):F.copyTexSubImage2D(Ft,Oe,nt,Bt,je,et,Ve,Pe);Ye.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else On?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Ft,Oe,nt,Bt,sn,Ve,Pe,We,Vt,Je,en.data):j.isCompressedArrayTexture?F.compressedTexSubImage3D(Ft,Oe,nt,Bt,sn,Ve,Pe,We,Vt,en.data):F.texSubImage3D(Ft,Oe,nt,Bt,sn,Ve,Pe,We,Vt,Je,en):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Oe,nt,Bt,Ve,Pe,Vt,Je,en.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Oe,nt,Bt,en.width,en.height,Vt,en.data):F.texSubImage2D(F.TEXTURE_2D,Oe,nt,Bt,Ve,Pe,Vt,Je,en);F.pixelStorei(F.UNPACK_ROW_LENGTH,rt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Nn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ia),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ln),F.pixelStorei(F.UNPACK_SKIP_IMAGES,gi),Oe===0&&j.generateMipmaps&&F.generateMipmap(Ft),Ye.unbindTexture()},this.initRenderTarget=function(w){b.get(w).__webglFramebuffer===void 0&&q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?q.setTextureCube(w,0):w.isData3DTexture?q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?q.setTexture2DArray(w,0):q.setTexture2D(w,0),Ye.unbindTexture()},this.resetState=function(){G=0,Y=0,K=null,Ye.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ot._getUnpackColorSpace()}}const qA=()=>{const o=new Un,e=2;o.scale.set(e,e,e);const i=new En({color:6045747,roughness:1}),s=new St(new Xn(.15,6,.15),i);s.position.y=3,o.add(s);const l=new St(new Xn(3.5,.15,.15),i);l.position.y=4.8,l.rotation.z=(Math.random()-.5)*.4,o.add(l);const c=new En({color:12759680,roughness:1}),h=new St(new Xn(.8,1,.7),c);h.position.y=5.4,o.add(h);const d=new Xi({color:0}),m=new ds(.03,.03,.4),p=(T,C,M)=>{const x=new Un;x.position.set(T,C,M);const D=new St(m,d),N=new St(m,d);return D.rotation.z=Math.PI/4,N.rotation.z=-Math.PI/4,x.add(D),x.add(N),x};o.add(p(-.2,5.45,.36)),o.add(p(.2,5.45,.36));const _=new St(new dl(.2,.03,8,8,Math.PI),d);_.rotation.x=Math.PI,_.position.set(0,5.2,.36),o.add(_);const g=new su(1.2,4.5,5,1,!0),y=new En({color:4865073,side:qi,roughness:1}),S=new St(g,y);return S.position.y=3.2,S.scale.z=.5,o.add(S),o},YA=()=>{const o=new Un,e=new ds(.05,.1,4,5),i=new En({color:5597999,roughness:.8}),s=new St(e,i);s.position.y=0,o.add(s);const l=new Xs(.3,1.5);l.translate(0,.75,0);for(let h=0;h<4;h++){const d=new St(l,i);d.position.y=Math.random()*2-1,d.rotation.y=Math.random()*Math.PI*2,d.rotation.z=Math.PI/4,o.add(d)}const c=.8+Math.random()*.4;return o.scale.set(c,c,c),o},jA=()=>{const o=new Un,e=new En({color:8947848,roughness:.9}),i=new En({color:2263074,roughness:1}),s=new St(new Xn(1.5,1,1.5),e);s.position.y=.5,o.add(s);const l=2+Math.random()*4,c=Math.floor(l);for(let h=0;h<c;h++){const d=new ds(.6,.6,1,8),m=new St(d,e);if(m.position.y=1.5+h,m.position.x=(Math.random()-.5)*.1,m.position.z=(Math.random()-.5)*.1,m.rotation.y=Math.random()*Math.PI,o.add(m),Math.random()>.6){const p=new St(new dl(.7,.05,4,6),i);p.rotation.x=Math.PI/2,p.position.y=1.5+h,p.rotation.z=Math.random()-.5,o.add(p)}}if(Math.random()>.3){const h=new St(new Xn(1.6,.4,1.6),e);h.position.y=1.5+c,h.rotation.z=(Math.random()-.5)*.2,o.add(h)}return o},ZA=()=>{const o=new Un,e=new En({color:6045747}),i=new St(new ds(.2,.2,3),e);i.position.y=1.5,o.add(i);const s=new St(new Xn(4,.2,4),e);return s.position.y=3,o.add(s),o},KA=()=>{const o=new Un,e=[new En({color:16711680,roughness:.2}),new En({color:65280,roughness:.2}),new En({color:255,roughness:.2})];for(let i=0;i<3;i++){const s=new St(new cp(.8,16,16),e[i]);s.position.set((Math.random()-.5)*1.5,4+Math.random()*2,(Math.random()-.5)*1.5),o.add(s);const l=new St(new ds(.02,.02,4),new Xi({color:16777215}));l.position.set(s.position.x,s.position.y-2,s.position.z),o.add(l)}return o},QA=()=>{const o=new Un,e=new En({color:5592405,roughness:.9}),i=new St(new lp(1.5),e);return i.scale.set(1+Math.random(),.8+Math.random(),1+Math.random()),i.position.y=.5,o.add(i),o},JA=({onExit:o})=>{const e=xt.useRef(),[i,s]=xt.useState(100),[l,c]=xt.useState(!1),[h,d]=xt.useState("EXPLORATION MODE"),[m,p]=xt.useState(""),[_,g]=xt.useState(0),[y,S]=xt.useState(!1),[T,C]=xt.useState(100),[M,x]=xt.useState(!0),D=xt.useRef([]),N=xt.useRef(0),U=xt.useRef(!1),O=xt.useRef("PARTY"),B=xt.useRef(!1),P=xt.useRef(null),k=xt.useRef(null),E=xt.useRef([]),R=xt.useRef(new Un),G=xt.useRef(new Un),Y=xt.useRef(new Un),K=xt.useRef({forward:!1,backward:!1,left:!1,right:!1,jump:!1,run:!1}),fe=xt.useRef(new Q),re=10;xt.useRef([]);const z=xt.useRef([]),V=xt.useRef([]),ne=xt.useRef([]),Me=xt.useRef({}),be=xt.useRef(null),I=xt.useRef(!1),ie=()=>{if(l)return;const $="/horror/",oe={PARTY:new Audio(`${$}audio/party_ambience.mp3`),CORNFIELD:new Audio(`${$}audio/cornfield_ambience.mp3`),RUINS:new Audio(`${$}audio/ruins_ambience.mp3`),CHASE:new Audio(`${$}audio/chase_music.mp3`)};oe.PARTY.loop=!0,oe.CORNFIELD.loop=!0,oe.RUINS.loop=!0,oe.CHASE.loop=!0,oe.PARTY.volume=.6,oe.CORNFIELD.volume=.7,oe.RUINS.volume=.8,oe.CHASE.volume=1,Me.current=oe,c(!0)},ve=$=>{Object.values(Me.current).forEach(De=>{De!==Me.current[$]&&(De.pause(),De.currentTime=0)});const oe=Me.current[$];oe&&(oe.play().catch(De=>console.log("Audio play failed:",De)),be.current=$)},Ce=$=>{x(!1),ie(),Be.current=$},Be=xt.useRef(null);return xt.useEffect(()=>{if(!e.current)return;document.body.requestPointerLock=document.body.requestPointerLock||document.body.mozRequestPointerLock;const $=()=>{!M&&!y&&(e.current.requestPointerLock(),l&&be.current&&Me.current[be.current].play().catch(ye=>{}))},oe=ye=>{document.pointerLockElement===e.current&&(k.current.camera.rotation.y-=ye.movementX*.002,k.current.camera.rotation.x-=ye.movementY*.002,k.current.camera.rotation.x=Math.max(-1.5,Math.min(1.5,k.current.camera.rotation.x)),k.current.camera.rotation.z=0,k.current.camera.rotation.order="YXZ")},De=ye=>{switch(ye.code){case"KeyW":K.current.forward=!0;break;case"KeyS":K.current.backward=!0;break;case"KeyA":K.current.left=!0;break;case"KeyD":K.current.right=!0;break;case"Space":K.current.jump=!0;break;case"ShiftLeft":case"ShiftRight":K.current.run=!0;break}},ke=ye=>{switch(ye.code){case"KeyW":K.current.forward=!1;break;case"KeyS":K.current.backward=!1;break;case"KeyA":K.current.left=!1;break;case"KeyD":K.current.right=!1;break;case"Space":K.current.jump=!1;break;case"ShiftLeft":case"ShiftRight":K.current.run=!1;break}};window.addEventListener("keydown",De),window.addEventListener("keyup",ke),document.addEventListener("mousemove",oe),e.current.addEventListener("click",$);const He="/horror/",ut=new VM,$t=ut.load(`${He}images/party_wallpaper.png`),gt=ut.load(`${He}images/carpet.png`),dt=ut.load(`${He}images/dirt_ground.png`),Nt=ut.load(`${He}images/host.png`),at=ut.load(`${He}images/cake.png`);$t.wrapS=$t.wrapT=qr,gt.wrapS=gt.wrapT=qr,dt.wrapS=dt.wrapT=qr,gt.repeat.set(4,4),dt.repeat.set(4,4),Nt.magFilter=Tn,at.magFilter=Tn;const bt=new CM;k.current=bt,bt.rotation.order="YXZ";const F=new ii(75,window.innerWidth/window.innerHeight,.1,1e3);F.rotation.order="YXZ",k.current.camera=F;const Gt=new WA({antialias:!0,alpha:!1});Gt.setSize(window.innerWidth,window.innerHeight),Gt.domElement.style.cssText="position:absolute; top:0; left:0; width:100%; height:100%; filter: contrast(1.1) saturate(1.2);",e.current.appendChild(Gt.domElement);const At=new En({map:$t,color:16777215,roughness:.5}),It=new En({map:gt,color:5588019,roughness:1}),Ye=new En({map:dt,color:3355443,roughness:1}),L=new En({color:2232576}),b=new En({color:5592405,roughness:.8}),q=new En({color:8947848,roughness:.9});R.current=new Un,G.current=new Un,Y.current=new Un,G.current.visible=!1,Y.current.visible=!1,bt.add(R.current),bt.add(G.current),bt.add(Y.current);const pe=[[1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,2,1,0,3,0,0,2,0,1],[1,0,1,0,1,0,1,1,0,1,0,1],[1,4,1,0,0,0,0,1,0,1,3,1],[1,0,1,1,1,1,0,1,1,1,0,1],[1,3,0,0,0,1,0,0,4,0,0,1],[1,1,1,1,0,1,1,1,0,1,0,1],[1,0,2,1,0,0,0,1,2,1,0,1],[1,0,0,0,0,1,0,0,0,1,0,1],[1,0,1,1,1,1,0,1,0,1,0,1],[1,2,0,4,0,1,2,1,0,3,0,1],[1,1,1,1,1,1,1,1,1,1,1,1]],Se=new Xn(re,12,re),ue=new Xs(re,re);pe.forEach((ye,de)=>{ye.forEach((he,Ee)=>{const Ae=Ee*re,Qe=de*re,ot=new St(ue,It);ot.rotation.x=-Math.PI/2,ot.position.set(Ae,-4,Qe),R.current.add(ot);const _t=new St(ue,L);if(_t.rotation.x=Math.PI/2,_t.position.set(Ae,4,Qe),R.current.add(_t),he===1){const st=new St(Se,At);st.position.set(Ae,0,Qe),st.userData={isBorder:!0},R.current.add(st)}else if(he===2){const st=ZA();st.position.set(Ae,-4,Qe),R.current.add(st);const Qt=new St(Se,new Xi({visible:!1}));Qt.position.set(Ae,0,Qe),Qt.userData={isBorder:!0},R.current.add(Qt)}else if(he===3){const st=KA();st.position.set(Ae,-4,Qe),R.current.add(st),z.current.push({x:Ae,z:Qe})}else if(he===4){const st=new Yh(16711935,2,15);st.position.set(Ae,2,Qe),R.current.add(st),z.current.push({x:Ae,z:Qe})}else if(z.current.push({x:Ae,z:Qe}),Math.random()>.9){const st=new Yh(16755200,1,10);st.position.set(Ae,2,Qe),R.current.add(st)}const ht=new St(ue,Ye);if(ht.rotation.x=-Math.PI/2,ht.position.set(Ae,-4,Qe),G.current.add(ht),he===1){for(let Qt=0;Qt<8;Qt++){const Sn=YA();Sn.position.set(Ae+(Math.random()-.5)*8,-4,Qe+(Math.random()-.5)*8),G.current.add(Sn)}const st=new St(Se,new Xi({visible:!1}));st.position.set(Ae,0,Qe),st.userData={isBorder:!0},G.current.add(st)}else if(he===2){const st=QA();st.position.set(Ae,-4,Qe),G.current.add(st);const Qt=new St(Se,new Xi({visible:!1}));Qt.position.set(Ae,0,Qe),Qt.userData={isBorder:!0},G.current.add(Qt)}else V.current.push({x:Ae,z:Qe})})});const Xe=20,Ue=15;for(let ye=0;ye<Xe;ye++)for(let de=0;de<Xe;de++){const he=de*Ue,Ee=ye*Ue,Ae=new St(new Xs(Ue,Ue),b);Ae.rotation.x=-Math.PI/2,Ae.position.set(he,-4,Ee),Ae.rotation.x+=(Math.random()-.5)*.05,Ae.rotation.y+=(Math.random()-.5)*.05,Y.current.add(Ae);const Qe=ye===0||ye===Xe-1||de===0||de===Xe-1,ot=Math.random()>.8;if(Qe||ot)if(Math.random()>.5){const _t=jA();_t.position.set(he,-3.5,Ee),_t.scale.set(1.5,1.5,1.5),Y.current.add(_t);const ht=new St(new Xn(2,10,2),new Xi({visible:!1}));ht.position.set(he,0,Ee),ht.userData={isBorder:!0},Y.current.add(ht)}else{const _t=new St(new Xn(4,2,8),q);_t.position.set(he,-3,Ee),_t.rotation.y=Math.random(),Y.current.add(_t),_t.userData={isBorder:!0}}else ne.current.push({x:he,z:Ee})}const Ge=new jM(16755200,1);bt.add(Ge);const tt=new YM(16777215,1.2);tt.position.set(50,100,50),bt.add(tt);const Te=new XM(16768426,8,120,Math.PI/3,.4,1);Te.position.set(0,0,0),Te.target.position.set(0,0,-1),F.add(Te),F.add(Te.target),bt.add(F),F.position.set(re,0,re);const we=new dl(.5,.1,8,16),Fe=new Xi({color:16766720}),Ie=(ye,de)=>{for(let he=0;he<3;he++){if(ye.length===0)return;const Ee=ye[Math.floor(Math.random()*ye.length)],Ae=new St(we,Fe);Ae.position.set(Ee.x,-2,Ee.z),Ae.userData={type:"key"},de.add(Ae);const Qe=new Yh(16766720,2,8);Qe.position.set(Ee.x,-2,Ee.z),de.add(Qe),D.current.push(Ae)}};Ie(z.current,R.current),Ie(V.current,G.current),Ie(ne.current,Y.current);const Ne=(ye,de,he)=>{if(de.length===0)return;const Ee=de[Math.floor(Math.random()*de.length)];let Ae;if(ye==="HOST"){const Qe=new Wd({map:Nt,transparent:!0});Ae=new R_(Qe),Ae.scale.set(3,7,1),Ae.userData={type:ye,state:"PATROL",level:"PARTY",spawnY:0}}else if(ye==="SCARECROW")Ae=qA(),Ae.userData={type:ye,state:"FROZEN",level:"CORNFIELD",spawnY:0};else{Ae=new Un;const Qe=new St(new Xn(3,7,3),new En({color:5570560,roughness:.5}));Qe.position.y=-.5,Ae.add(Qe);const ot=new St(new Xn(2,2,2.5),new En({color:3342336}));ot.position.set(0,3.5,.5),Ae.add(ot);const _t=new St(new su(.3,2),new Xi({color:16777215}));_t.position.set(.8,4.5,.5),_t.rotation.z=-.5,Ae.add(_t.clone()),_t.position.set(-.8,4.5,.5),_t.rotation.z=.5,Ae.add(_t),Ae.scale.set(1.5,1.5,1.5),Ae.userData={type:ye,state:"CHASE",level:"RUINS",spawnY:2}}Ae.position.set(Ee.x,Ae.userData.spawnY,Ee.z),he.add(Ae),E.current.push(Ae)};Ne("HOST",z.current,R.current),Ne("SCARECROW",V.current,G.current),Ne("MINOTAUR",ne.current,Y.current);const ft=ye=>{if(O.current=ye,R.current.visible=!1,G.current.visible=!1,Y.current.visible=!1,Me.current[ye]&&ve(ye),ye==="PARTY")d("Objective: Find 3 Gifts"),p(""),bt.background=new Ct(3351040),bt.fog=new sl(4469504,.02),Ge.color.setHex(16755200),Ge.intensity=.8,R.current.visible=!0,F.position.set(z.current[0].x,0,z.current[0].z);else if(ye==="CORNFIELD"){d("EXILED."),p("DON'T BLINK."),bt.background=new Ct(8943462),bt.fog=new sl(8943462,.02),Ge.color.setHex(16772829),Ge.intensity=1,G.current.visible=!0;const de=V.current[Math.floor(Math.random()*V.current.length)];F.position.set(de.x,0,de.z)}else if(ye==="RUINS"){d("THE SANCTUARY."),p("THE SKY IS WATCHING."),bt.background=new Ct(8900331),bt.fog=new sl(15658734,.005),Ge.color.setHex(16777215),Ge.intensity=1.2,Y.current.visible=!0;const de=ne.current[Math.floor(Math.random()*ne.current.length)];F.position.set(de.x,0,de.z)}};let W=performance.now();const Le=()=>{if(requestAnimationFrame(Le),M)return;Be.current&&(ft(Be.current),Be.current=null);const ye=performance.now(),de=(ye-W)/1e3;W=ye;const he=K.current.forward?1:0,Ee=K.current.backward?1:0,Ae=K.current.left?1:0,Qe=K.current.right?1:0;K.current.jump&&F.position.y<=.1&&(fe.current.y=12,K.current.jump=!1);const ot=-30;if(fe.current.y+=ot*de,F.position.y+=fe.current.y*de,F.position.y<0&&(F.position.y=0,fe.current.y=0),he||Ee||Ae||Qe){const ht=K.current.run?16:8,st=new Q;F.getWorldDirection(st),st.y=0,st.normalize();const Qt=new Q;Qt.crossVectors(F.up,st).normalize();const Sn=new Q;he&&Sn.add(st),Ee&&Sn.sub(st),Ae&&Sn.add(Qt),Qe&&Sn.sub(Qt),Sn.normalize();const ta=F.position.x+Sn.x*ht*de,Bi=F.position.z+Sn.z*ht*de;let na=R.current;O.current==="CORNFIELD"&&(na=G.current),O.current==="RUINS"&&(na=Y.current);let Kn=!1;if(O.current==="RUINS")na.children.forEach(mn=>{if(mn.userData.isBorder){const tn=Math.abs(mn.position.x-ta),ln=Math.abs(mn.position.z-Bi);tn<2.5&&ln<2.5&&(Kn=!0)}});else{const mn=Math.round(ta/re),tn=Math.round(Bi/re);if(pe[tn]&&mn>=0&&mn<pe[0].length){const ln=pe[tn][mn];(ln===1||ln===2)&&(Kn=!0)}}Kn||(F.position.x=ta,F.position.z=Bi)}D.current.forEach(ht=>{if(ht.visible&&ht.parent.visible&&(ht.rotation.y+=de,F.position.distanceTo(ht.position)<3&&(ht.visible=!1,N.current++,g(st=>st+1),N.current===3&&!P.current))){d("EXIT REVEALED.");const st=new R_(new Wd({map:at}));st.scale.set(3,3,1),st.position.set(F.position.x+5,0,F.position.z+5),O.current==="PARTY"&&R.current.add(st),O.current==="CORNFIELD"&&G.current.add(st),O.current==="RUINS"&&Y.current.add(st),P.current=st}}),P.current&&F.position.distanceTo(P.current.position)<2&&(B.current=!0,S(!0));let _t=!1;E.current.forEach(ht=>{if(ht.userData.level!==O.current)return;const st=ht.position.distanceTo(F.position);if(ht.userData.type==="SCARECROW")ht.rotation.z=Math.sin(ye*20)*.1,ht.rotation.x=Math.sin(ye*15)*.05;else if(ht.userData.type==="MINOTAUR"){const Qt=1.5+Math.sin(ye*3)*.1;ht.scale.set(Qt,Qt,Qt)}if(st<40){if(_t=!0,st>6){const Qt=new Q().subVectors(F.position,ht.position).normalize();Qt.y=0;const Sn=ht.userData.type==="SCARECROW"?14:ht.userData.type==="MINOTAUR"?9:6;ht.position.addScaledVector(Qt,Sn*de)}ht.userData.type!=="HOST"&&ht.lookAt(F.position.x,ht.position.y,F.position.z)}}),_t!==I.current&&(I.current=_t,ve(_t?"CHASE":O.current)),Gt.render(bt,F)},Re=requestAnimationFrame(Le);return()=>{cancelAnimationFrame(Re),window.removeEventListener("keydown",De),window.removeEventListener("keyup",ke),document.removeEventListener("mousemove",oe),e.current&&(e.current.innerHTML=""),Gt.dispose(),Object.values(Me.current).forEach(ye=>ye.pause())}},[M]),ge.jsxs("div",{className:"relative w-full h-screen bg-black overflow-hidden font-mono select-none",children:[ge.jsx("div",{ref:e,className:"w-full h-full"}),ge.jsx("div",{className:"absolute top-0 left-0 w-full p-8 pointer-events-none mix-blend-difference z-10",children:ge.jsxs("div",{className:"flex justify-between items-start",children:[ge.jsxs("div",{children:[ge.jsx("h1",{className:"text-4xl font-bold text-yellow-500 tracking-widest drop-shadow-md",children:"PROTOCOL: BIRTHDAY"}),ge.jsx("p",{className:"text-xl text-yellow-200 mt-2 animate-pulse",children:h})]}),ge.jsxs("div",{className:"text-right",children:[ge.jsx("div",{className:"text-2xl text-yellow-500 font-bold mb-2",children:"SOCIAL BATTERY"}),ge.jsx("div",{className:"w-64 h-6 bg-gray-900 border-2 border-yellow-700",children:ge.jsx("div",{className:"h-full bg-yellow-500 transition-all duration-200",style:{width:`${T}%`}})}),ge.jsxs("div",{className:"mt-4 flex flex-col items-end gap-1",children:[ge.jsx("div",{className:"text-sm text-yellow-300",children:"PRESS [SPACE] TO JUMP"}),ge.jsx("div",{className:"text-sm text-yellow-300",children:"HOLD [SHIFT] TO RUN"}),ge.jsx("div",{className:"text-sm text-yellow-300 text-right mt-2 w-48",children:"CLICK SCREEN TO ENABLE MOUSE LOOK"})]}),ge.jsxs("div",{className:"mt-4 text-xl text-yellow-200",children:["GIFTS OPENED: ",_," / 3"]})]})]})}),m&&ge.jsx("div",{className:"absolute bottom-1/4 w-full text-center pointer-events-none z-20",children:ge.jsx("p",{className:"text-2xl font-bold text-red-400 bg-black/50 inline-block px-4 py-2 animate-pulse",children:m})}),M&&ge.jsxs("div",{className:"absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/90 text-yellow-500",children:[ge.jsx("h1",{className:"text-6xl font-black tracking-widest mb-12 animate-pulse text-yellow-200 drop-shadow-lg",children:"SELECT STAGE"}),ge.jsxs("div",{className:"flex gap-8",children:[ge.jsx("button",{onClick:()=>Ce("PARTY"),className:"px-8 py-6 border-2 border-yellow-600 bg-black hover:bg-yellow-900 transition-all cursor-pointer",children:ge.jsxs("div",{className:"flex flex-col items-center gap-4",children:[ge.jsx(SS,{className:"w-12 h-12 text-yellow-500"}),ge.jsx("span",{className:"text-2xl font-bold",children:"LEVEL 21"})]})}),ge.jsx("button",{onClick:()=>Ce("CORNFIELD"),className:"px-8 py-6 border-2 border-red-900 bg-black hover:bg-red-950 transition-all cursor-pointer",children:ge.jsxs("div",{className:"flex flex-col items-center gap-4",children:[ge.jsx(bS,{className:"w-12 h-12 text-red-700"}),ge.jsx("span",{className:"text-2xl font-bold",children:"LEVEL 10"})]})}),ge.jsx("button",{onClick:()=>Ce("RUINS"),className:"px-8 py-6 border-2 border-cyan-800 bg-black hover:bg-cyan-950 transition-all cursor-pointer",children:ge.jsxs("div",{className:"flex flex-col items-center gap-4",children:[ge.jsx(xS,{className:"w-12 h-12 text-cyan-500"}),ge.jsx("span",{className:"text-2xl font-bold",children:"THE RUINS"})]})})]})]}),(y||U.current)&&!M&&ge.jsx("div",{className:`absolute inset-0 z-20 flex flex-col items-center justify-center ${y?"bg-yellow-900":"bg-red-600"} mix-blend-multiply transition-opacity duration-1000`,children:y?ge.jsxs("div",{className:"text-center animate-bounce",children:[ge.jsx("h1",{className:"text-9xl font-black text-yellow-100 mb-8",children:"SURVIVED"}),ge.jsx("button",{onClick:()=>window.location.reload(),className:"mt-12 px-8 py-4 bg-yellow-600 text-black font-bold",children:"REPLAY"})]}):ge.jsx("h1",{className:"text-9xl font-black text-black animate-ping",children:"CAUGHT!"})}),ge.jsx("div",{className:"absolute top-8 right-8 z-50 flex flex-col gap-4 pointer-events-auto",children:ge.jsxs("button",{onClick:o,className:"flex items-center gap-2 bg-red-950/80 text-red-200 border border-red-800 px-4 py-2 uppercase text-xs font-bold",children:["ABORT ",ge.jsx(av,{className:"w-4 h-4"})]})}),ge.jsx("div",{className:"absolute top-1/2 left-1/2 w-1 h-1 bg-white/50 rounded-full pointer-events-none mix-blend-exclusion"})]})},$A=({story:o,onClick:e})=>ge.jsxs("div",{onClick:e,className:"group relative bg-[#080808] border border-gray-800/60 p-0 cursor-pointer overflow-hidden transition-all duration-500 hover:border-red-900/60 hover:shadow-[0_0_40px_rgba(220,38,38,0.05)] rounded-sm",children:[ge.jsxs("div",{className:"absolute top-0 right-0 bg-gray-900/50 px-3 py-1 border-b border-l border-gray-800 text-[9px] font-mono text-gray-500 uppercase tracking-widest group-hover:bg-red-950/30 group-hover:text-red-400 transition-colors",children:["Case File #",o.id.toUpperCase().substring(0,4)]}),o.imageUrl&&ge.jsxs("div",{className:"w-full h-56 overflow-hidden relative border-b border-gray-800/50",children:[ge.jsx("div",{className:"absolute inset-0 bg-red-900/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"}),ge.jsx("img",{src:o.imageUrl,alt:o.title,className:"w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter grayscale contrast-125 group-hover:grayscale-0"}),ge.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"}),ge.jsxs("div",{className:"absolute bottom-3 left-3 flex items-center gap-2 z-20",children:[ge.jsx("div",{className:`w-2 h-2 rounded-full ${o.is3D?"bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]":"bg-gray-600"}`}),ge.jsx("span",{className:"text-[10px] font-mono uppercase tracking-widest text-gray-400 group-hover:text-gray-200",children:o.is3D?"Live Feed":"Archived"})]})]}),ge.jsxs("div",{className:"p-8 pt-6 relative",children:[ge.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-red-900/0 group-hover:bg-red-900/50 transition-all duration-500"}),ge.jsx("h3",{className:"text-3xl font-bold mb-3 text-gray-300 group-hover:text-red-500 transition-colors uppercase tracking-tighter font-header leading-none",children:o.title}),ge.jsxs("div",{className:"flex items-center gap-4 mb-4 text-[10px] font-mono text-gray-600 uppercase tracking-widest border-b border-gray-900 pb-4 group-hover:border-red-900/20 transition-colors",children:[ge.jsxs("span",{className:"text-red-900 group-hover:text-red-700",children:["Auth: ",o.author]}),ge.jsx("span",{children:"//"}),ge.jsx("span",{children:o.date})]}),ge.jsx("p",{className:"text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2 font-serif group-hover:text-gray-400 transition-colors",children:o.summary}),ge.jsx("div",{className:"flex flex-wrap gap-2",children:o.tags.map(i=>ge.jsx("span",{className:"text-[9px] uppercase tracking-widest bg-black px-2 py-1 text-gray-600 border border-gray-800 group-hover:border-red-900/30 group-hover:text-red-900/70 transition-colors",children:i},i))})]})]}),Fv=({publisherId:o="ca-pub-6275575304084608",slotId:e="2004776727",className:i})=>ge.jsxs("div",{className:`bg-[#0a0a0a] border border-gray-800/30 p-8 flex flex-col items-center justify-center min-h-[150px] relative overflow-hidden group ${i}`,children:[ge.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-red-900/20 animate-scan"}),ge.jsx("p",{className:"text-xs text-gray-700 font-mono uppercase tracking-[0.2em] mb-4",children:"External Broadcast Signal [Sponsor]"}),ge.jsxs("div",{className:"w-full max-w-[728px] h-[90px] bg-black border border-gray-800 flex items-center justify-center relative overflow-hidden group-hover:border-red-900/40 transition-colors",children:[ge.jsxs("div",{className:"absolute inset-0 opacity-20 pointer-events-none",children:[ge.jsx("div",{className:"w-full h-full bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] bg-cover opacity-10 mix-blend-screen"}),ge.jsx("div",{className:"absolute inset-0 bg-red-900/10 animate-pulse"})]}),ge.jsx("span",{className:"absolute z-0 text-[10px] font-mono text-red-900/50 uppercase tracking-[0.3em] animate-pulse",children:"$$ NO SIGNAL // AWAITING INPUT $$"}),ge.jsx("ins",{className:"adsbygoogle block relative z-10",style:{display:"block",width:"100%",height:"100%"},"data-ad-client":o,"data-ad-slot":e,"data-ad-format":"auto","data-full-width-responsive":"true"})]})]});try{window&&window.adsbygoogle}catch(o){console.error("AdSense Error:",o)}const ew=({story:o,onBack:e})=>(xt.useEffect(()=>{window.scrollTo(0,0)},[]),ge.jsxs("div",{className:"animate-fade-in relative",children:[ge.jsxs("button",{onClick:e,className:"group flex items-center gap-2 text-red-600 mb-8 hover:text-red-400 transition-colors uppercase text-sm font-bold tracking-widest",children:[ge.jsx(av,{className:"w-4 h-4 group-hover:-translate-x-1 transition-transform"}),"Return to Index"]}),o.id==="fractal-saint"&&ge.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0 opacity-10 mix-blend-screen overflow-hidden",children:[ge.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-red-500/20 rounded-full animate-[spin_60s_linear_infinite]"}),ge.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-500/30 rotate-45 animate-[spin_40s_linear_infinite_reverse]"}),ge.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-red-500/10 rotate-12 animate-[pulse_4s_ease-in-out_infinite]"})]}),ge.jsxs("article",{className:"prose prose-invert prose-red max-w-none relative z-10",children:[ge.jsxs("header",{className:"mb-12 border-b border-red-900/20 pb-8",children:[ge.jsx("h2",{className:"text-5xl font-black text-gray-100 mb-4 uppercase tracking-tighter",children:o.title}),ge.jsxs("div",{className:"flex gap-4 text-xs font-sans uppercase tracking-widest text-red-700",children:[ge.jsxs("span",{children:["Author: ",o.author]}),ge.jsx("span",{children:"|"}),ge.jsxs("span",{children:["Archive: ",o.date]})]})]}),ge.jsx("div",{className:"text-xl leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:text-red-600 first-letter:mr-3 first-letter:float-left",dangerouslySetInnerHTML:{__html:o.content}}),ge.jsx(Fv,{className:"mt-16 mb-8"})]}),ge.jsx("footer",{className:"mt-16 p-8 bg-red-950/5 border border-red-900/20 rounded-lg relative z-10",children:ge.jsxs("div",{className:"flex items-start gap-4",children:[ge.jsx(dS,{className:"text-red-600 shrink-0 mt-1"}),ge.jsxs("div",{children:[ge.jsx("h4",{className:"font-bold text-red-500 uppercase tracking-widest text-sm mb-2",children:"Researcher's Note"}),ge.jsx("p",{className:"text-sm italic text-gray-500",children:"The contents of this file have been linked to severe psychological distress. If you begin to hear a rhythmic clicking or experience spatial anomalies, cease reading immediately."})]})]})})]})),tv=[{id:"backrooms",title:"Level 0: The Beige Eternity",author:"Surveyor K. Miller",date:"RECOVERED LOG",is3D:!0,imageUrl:"images/wallpaper.png",summary:"If you aren't careful and you noclip out of reality in the wrong areas...",tags:["interactive","3d","liminal-space"],content:`
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
    `}];function tw(){const[o,e]=xt.useState(null),[i,s]=xt.useState(100),l=tv.find(c=>c.id===o);return xt.useEffect(()=>{const c=setInterval(()=>{s(h=>Math.max(80,h-.01))},1e3);return()=>clearInterval(c)},[]),l?.is3D?ge.jsx(JA,{onExit:()=>e(null)}):l&&!l.is3D?ge.jsx(ew,{story:l,onBack:()=>e(null)}):ge.jsxs("div",{className:`min-h-screen bg-[#050505] text-gray-300 font-serif selection:bg-red-900 selection:text-white transition-all duration-1000 ${i<90?"animate-vibrate":""}`,children:[ge.jsxs("nav",{className:"fixed top-0 left-0 w-full bg-black/90 border-b border-red-900/30 backdrop-blur-md z-40 p-4 flex justify-between items-center px-8",children:[ge.jsxs("div",{className:"flex items-center gap-3",children:[ge.jsx(_S,{className:"text-red-600 w-8 h-8 animate-pulse"}),ge.jsx("h1",{className:"text-2xl font-black uppercase tracking-tighter text-red-600 font-header",children:"The Void Archive"})]}),ge.jsxs("div",{className:"flex gap-6 text-sm uppercase tracking-widest text-gray-500 font-sans items-center",children:[ge.jsx("a",{href:"https://elo2026x.github.io/The_Victoria_Texas_Franchise/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-500 cursor-pointer transition-colors border-b border-transparent hover:border-red-600",children:"FORENSICS"}),ge.jsx("a",{href:"https://www.amazon.com/shop/elo2025x",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-500 cursor-pointer transition-colors border-b border-transparent hover:border-red-600",children:"MARKETING"}),ge.jsx("a",{href:"https://elo2026.gumroad.com/l/eircyr",target:"_blank",rel:"noopener noreferrer",className:"text-red-600 font-bold border border-red-900/50 px-3 py-1 hover:bg-red-900/20 hover:text-red-400 transition-all animate-pulse",children:"Subscribe"})]})]}),ge.jsx("main",{className:"pt-24 pb-20 max-w-5xl mx-auto px-6",children:ge.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[ge.jsxs("div",{className:"col-span-full mb-8",children:[ge.jsx("h3",{className:"text-red-700 font-sans uppercase tracking-[0.4em] text-xs font-bold mb-4",children:"Latest Classified Data"}),ge.jsx("p",{className:"text-gray-500 italic max-w-xl",children:'"Reality is a thin layer of ice over a very deep, dark ocean. These stories are the cracks."'})]}),tv.map(c=>ge.jsx($A,{story:c,onClick:()=>e(c.id)},c.id)),ge.jsx(Fv,{className:"col-span-full mt-12 mb-8"})]})}),ge.jsxs("div",{className:"fixed bottom-6 right-6 flex items-center gap-4 bg-black/80 border border-gray-800 p-3 backdrop-blur-sm",children:[ge.jsxs("div",{className:"text-right",children:[ge.jsx("p",{className:"text-[10px] text-gray-600 font-sans uppercase font-bold",children:"Local Reality Level"}),ge.jsxs("p",{className:"font-mono text-red-600 text-sm",children:[i.toFixed(4),"%"]})]}),ge.jsxs("div",{className:"w-12 h-12 rounded-full border-2 border-red-900 flex items-center justify-center relative",children:[ge.jsx("div",{className:"absolute inset-1 rounded-full border border-red-600 animate-ping opacity-20"}),ge.jsx(mS,{className:"w-5 h-5 text-red-600"})]})]}),ge.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const nw=sS({onNeedRefresh(){confirm("A new version of The Void Archive is available. Reload to update?")&&nw(!0)},onOfflineReady(){console.log("Archive downloaded. Offline access granted.")}});tS.createRoot(document.getElementById("app")).render(ge.jsx(Yy.StrictMode,{children:ge.jsx(tw,{})}));
