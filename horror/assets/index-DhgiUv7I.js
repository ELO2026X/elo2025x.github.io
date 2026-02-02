(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function J_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var sh={exports:{}},Ho={};var B0;function ky(){if(B0)return Ho;B0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=t,Ho.jsx=i,Ho.jsxs=i,Ho}var F0;function Xy(){return F0||(F0=1,sh.exports=ky()),sh.exports}var At=Xy(),oh={exports:{}},re={};var H0;function Wy(){if(H0)return re;H0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.iterator;function S(U){return U===null||typeof U!="object"?null:(U=y&&U[y]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function x(U,$,gt){this.props=U,this.context=$,this.refs=M,this.updater=gt||A}x.prototype.isReactComponent={},x.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function O(){}O.prototype=x.prototype;function P(U,$,gt){this.props=U,this.context=$,this.refs=M,this.updater=gt||A}var I=P.prototype=new O;I.constructor=P,w(I,x.prototype),I.isPureReactComponent=!0;var F=Array.isArray;function G(){}var B={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function R(U,$,gt){var wt=gt.ref;return{$$typeof:o,type:U,key:$,ref:wt!==void 0?wt:null,props:gt}}function C(U,$){return R(U.type,$,U.props)}function X(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function st(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(gt){return $[gt]})}var rt=/\/+/g;function pt(U,$){return typeof U=="object"&&U!==null&&U.key!=null?st(""+U.key):$.toString(36)}function ft(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(G,G):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function N(U,$,gt,wt,Pt){var j=typeof U;(j==="undefined"||j==="boolean")&&(U=null);var ht=!1;if(U===null)ht=!0;else switch(j){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(U.$$typeof){case o:case t:ht=!0;break;case _:return ht=U._init,N(ht(U._payload),$,gt,wt,Pt)}}if(ht)return Pt=Pt(U),ht=wt===""?"."+pt(U,0):wt,F(Pt)?(gt="",ht!=null&&(gt=ht.replace(rt,"$&/")+"/"),N(Pt,$,gt,"",function(Vt){return Vt})):Pt!=null&&(X(Pt)&&(Pt=C(Pt,gt+(Pt.key==null||U&&U.key===Pt.key?"":(""+Pt.key).replace(rt,"$&/")+"/")+ht)),$.push(Pt)),1;ht=0;var Dt=wt===""?".":wt+":";if(F(U))for(var kt=0;kt<U.length;kt++)wt=U[kt],j=Dt+pt(wt,kt),ht+=N(wt,$,gt,j,Pt);else if(kt=S(U),typeof kt=="function")for(U=kt.call(U),kt=0;!(wt=U.next()).done;)wt=wt.value,j=Dt+pt(wt,kt++),ht+=N(wt,$,gt,j,Pt);else if(j==="object"){if(typeof U.then=="function")return N(ft(U),$,gt,wt,Pt);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return ht}function z(U,$,gt){if(U==null)return U;var wt=[],Pt=0;return N(U,wt,"","",function(j){return $.call(gt,j,Pt++)}),wt}function nt(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(gt){(U._status===0||U._status===-1)&&(U._status=1,U._result=gt)},function(gt){(U._status===0||U._status===-1)&&(U._status=2,U._result=gt)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var Et=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},St={map:z,forEach:function(U,$,gt){z(U,function(){$.apply(this,arguments)},gt)},count:function(U){var $=0;return z(U,function(){$++}),$},toArray:function(U){return z(U,function($){return $})||[]},only:function(U){if(!X(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return re.Activity=g,re.Children=St,re.Component=x,re.Fragment=i,re.Profiler=l,re.PureComponent=P,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,re.__COMPILER_RUNTIME={__proto__:null,c:function(U){return B.H.useMemoCache(U)}},re.cache=function(U){return function(){return U.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(U,$,gt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var wt=w({},U.props),Pt=U.key;if($!=null)for(j in $.key!==void 0&&(Pt=""+$.key),$)!Q.call($,j)||j==="key"||j==="__self"||j==="__source"||j==="ref"&&$.ref===void 0||(wt[j]=$[j]);var j=arguments.length-2;if(j===1)wt.children=gt;else if(1<j){for(var ht=Array(j),Dt=0;Dt<j;Dt++)ht[Dt]=arguments[Dt+2];wt.children=ht}return R(U.type,Pt,wt)},re.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},re.createElement=function(U,$,gt){var wt,Pt={},j=null;if($!=null)for(wt in $.key!==void 0&&(j=""+$.key),$)Q.call($,wt)&&wt!=="key"&&wt!=="__self"&&wt!=="__source"&&(Pt[wt]=$[wt]);var ht=arguments.length-2;if(ht===1)Pt.children=gt;else if(1<ht){for(var Dt=Array(ht),kt=0;kt<ht;kt++)Dt[kt]=arguments[kt+2];Pt.children=Dt}if(U&&U.defaultProps)for(wt in ht=U.defaultProps,ht)Pt[wt]===void 0&&(Pt[wt]=ht[wt]);return R(U,j,Pt)},re.createRef=function(){return{current:null}},re.forwardRef=function(U){return{$$typeof:d,render:U}},re.isValidElement=X,re.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:nt}},re.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},re.startTransition=function(U){var $=B.T,gt={};B.T=gt;try{var wt=U(),Pt=B.S;Pt!==null&&Pt(gt,wt),typeof wt=="object"&&wt!==null&&typeof wt.then=="function"&&wt.then(G,Et)}catch(j){Et(j)}finally{$!==null&&gt.types!==null&&($.types=gt.types),B.T=$}},re.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},re.use=function(U){return B.H.use(U)},re.useActionState=function(U,$,gt){return B.H.useActionState(U,$,gt)},re.useCallback=function(U,$){return B.H.useCallback(U,$)},re.useContext=function(U){return B.H.useContext(U)},re.useDebugValue=function(){},re.useDeferredValue=function(U,$){return B.H.useDeferredValue(U,$)},re.useEffect=function(U,$){return B.H.useEffect(U,$)},re.useEffectEvent=function(U){return B.H.useEffectEvent(U)},re.useId=function(){return B.H.useId()},re.useImperativeHandle=function(U,$,gt){return B.H.useImperativeHandle(U,$,gt)},re.useInsertionEffect=function(U,$){return B.H.useInsertionEffect(U,$)},re.useLayoutEffect=function(U,$){return B.H.useLayoutEffect(U,$)},re.useMemo=function(U,$){return B.H.useMemo(U,$)},re.useOptimistic=function(U,$){return B.H.useOptimistic(U,$)},re.useReducer=function(U,$,gt){return B.H.useReducer(U,$,gt)},re.useRef=function(U){return B.H.useRef(U)},re.useState=function(U){return B.H.useState(U)},re.useSyncExternalStore=function(U,$,gt){return B.H.useSyncExternalStore(U,$,gt)},re.useTransition=function(){return B.H.useTransition()},re.version="19.2.3",re}var G0;function Gd(){return G0||(G0=1,oh.exports=Wy()),oh.exports}var ke=Gd();const qy=J_(ke);var lh={exports:{}},Go={},ch={exports:{}},uh={};var V0;function Yy(){return V0||(V0=1,(function(o){function t(N,z){var nt=N.length;N.push(z);t:for(;0<nt;){var Et=nt-1>>>1,St=N[Et];if(0<l(St,z))N[Et]=z,N[nt]=St,nt=Et;else break t}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],nt=N.pop();if(nt!==z){N[0]=nt;t:for(var Et=0,St=N.length,U=St>>>1;Et<U;){var $=2*(Et+1)-1,gt=N[$],wt=$+1,Pt=N[wt];if(0>l(gt,nt))wt<St&&0>l(Pt,gt)?(N[Et]=Pt,N[wt]=nt,Et=wt):(N[Et]=gt,N[$]=nt,Et=$);else if(wt<St&&0>l(Pt,nt))N[Et]=Pt,N[wt]=nt,Et=wt;else break t}}return z}function l(N,z){var nt=N.sortIndex-z.sortIndex;return nt!==0?nt:N.id-z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,y=3,S=!1,A=!1,w=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function I(N){for(var z=i(p);z!==null;){if(z.callback===null)r(p);else if(z.startTime<=N)r(p),z.sortIndex=z.expirationTime,t(m,z);else break;z=i(p)}}function F(N){if(w=!1,I(N),!A)if(i(m)!==null)A=!0,G||(G=!0,st());else{var z=i(p);z!==null&&ft(F,z.startTime-N)}}var G=!1,B=-1,Q=5,R=-1;function C(){return M?!0:!(o.unstable_now()-R<Q)}function X(){if(M=!1,G){var N=o.unstable_now();R=N;var z=!0;try{t:{A=!1,w&&(w=!1,O(B),B=-1),S=!0;var nt=y;try{e:{for(I(N),g=i(m);g!==null&&!(g.expirationTime>N&&C());){var Et=g.callback;if(typeof Et=="function"){g.callback=null,y=g.priorityLevel;var St=Et(g.expirationTime<=N);if(N=o.unstable_now(),typeof St=="function"){g.callback=St,I(N),z=!0;break e}g===i(m)&&r(m),I(N)}else r(m);g=i(m)}if(g!==null)z=!0;else{var U=i(p);U!==null&&ft(F,U.startTime-N),z=!1}}break t}finally{g=null,y=nt,S=!1}z=void 0}}finally{z?st():G=!1}}}var st;if(typeof P=="function")st=function(){P(X)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,pt=rt.port2;rt.port1.onmessage=X,st=function(){pt.postMessage(null)}}else st=function(){x(X,0)};function ft(N,z){B=x(function(){N(o.unstable_now())},z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(N){switch(y){case 1:case 2:case 3:var z=3;break;default:z=y}var nt=y;y=z;try{return N()}finally{y=nt}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var nt=y;y=N;try{return z()}finally{y=nt}},o.unstable_scheduleCallback=function(N,z,nt){var Et=o.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?Et+nt:Et):nt=Et,N){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=nt+St,N={id:_++,callback:z,priorityLevel:N,startTime:nt,expirationTime:St,sortIndex:-1},nt>Et?(N.sortIndex=nt,t(p,N),i(m)===null&&N===i(p)&&(w?(O(B),B=-1):w=!0,ft(F,nt-Et))):(N.sortIndex=St,t(m,N),A||S||(A=!0,G||(G=!0,st()))),N},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(N){var z=y;return function(){var nt=y;y=z;try{return N.apply(this,arguments)}finally{y=nt}}}})(uh)),uh}var k0;function jy(){return k0||(k0=1,ch.exports=Yy()),ch.exports}var fh={exports:{}},Nn={};var X0;function Zy(){if(X0)return Nn;X0=1;var o=Gd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Nn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:S}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Nn.requestFormReset=function(m){r.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Nn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Nn.version="19.2.3",Nn}var W0;function Ky(){if(W0)return fh.exports;W0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),fh.exports=Zy(),fh.exports}var q0;function Qy(){if(q0)return Go;q0=1;var o=jy(),t=Gd(),i=Ky();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var v=!1,E=u.child;E;){if(E===a){v=!0,a=u,s=f;break}if(E===s){v=!0,s=u,a=f;break}E=E.sibling}if(!v){for(E=f.child;E;){if(E===a){v=!0,a=f,s=u;break}if(E===s){v=!0,s=f,a=u;break}E=E.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),P=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function st(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case F:return"Suspense";case G:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case P:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case I:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:pt(e.type)||"Memo";case Q:n=e._payload,e=e._init;try{return pt(e(n))}catch{}}return null}var ft=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt={pending:!1,data:null,method:null,action:null},Et=[],St=-1;function U(e){return{current:e}}function $(e){0>St||(e.current=Et[St],Et[St]=null,St--)}function gt(e,n){St++,Et[St]=e.current,e.current=n}var wt=U(null),Pt=U(null),j=U(null),ht=U(null);function Dt(e,n){switch(gt(j,n),gt(Pt,e),gt(wt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?o0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=o0(n),e=l0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(wt),gt(wt,e)}function kt(){$(wt),$(Pt),$(j)}function Vt(e){e.memoizedState!==null&&gt(ht,e);var n=wt.current,a=l0(n,e.type);n!==a&&(gt(Pt,e),gt(wt,a))}function de(e){Pt.current===e&&($(wt),$(Pt)),ht.current===e&&($(ht),Po._currentValue=nt)}var Ye,pe;function oe(e){if(Ye===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ye=n&&n[1]||"",pe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ye+e+pe}var ge=!1;function ne(e,n){if(!e||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ct){var at=ct}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ct){at=ct}e.call(_t.prototype)}}else{try{throw Error()}catch(ct){at=ct}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ct){if(ct&&at&&typeof ct.stack=="string")return[ct.stack,at.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],E=f[1];if(v&&E){var H=v.split(`
`),et=E.split(`
`);for(u=s=0;s<H.length&&!H[s].includes("DetermineComponentFrameRoot");)s++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(s===H.length||u===et.length)for(s=H.length-1,u=et.length-1;1<=s&&0<=u&&H[s]!==et[u];)u--;for(;1<=s&&0<=u;s--,u--)if(H[s]!==et[u]){if(s!==1||u!==1)do if(s--,u--,0>u||H[s]!==et[u]){var dt=`
`+H[s].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=s&&0<=u);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?oe(a):""}function je(e,n){switch(e.tag){case 26:case 27:case 5:return oe(e.type);case 16:return oe("Lazy");case 13:return e.child!==n&&n!==null?oe("Suspense Fallback"):oe("Suspense");case 19:return oe("SuspenseList");case 0:case 15:return ne(e.type,!1);case 11:return ne(e.type.render,!1);case 1:return ne(e.type,!0);case 31:return oe("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=je(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var We=Object.prototype.hasOwnProperty,_e=o.unstable_scheduleCallback,Ae=o.unstable_cancelCallback,qt=o.unstable_shouldYield,D=o.unstable_requestPaint,b=o.unstable_now,L=o.unstable_getCurrentPriorityLevel,tt=o.unstable_ImmediatePriority,ut=o.unstable_UserBlockingPriority,ot=o.unstable_NormalPriority,yt=o.unstable_LowPriority,Mt=o.unstable_IdlePriority,Ut=o.log,Kt=o.unstable_setDisableYieldValue,xt=null,bt=null;function Nt(e){if(typeof Ut=="function"&&Kt(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(xt,e)}catch{}}var Ot=Math.clz32?Math.clz32:W,Lt=Math.log,ce=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Lt(e)/ce|0)|0}var zt=256,Rt=262144,Ht=4194304;function Tt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?u=Tt(s):(v&=E,v!==0?u=Tt(v):a||(a=E&~e,a!==0&&(u=Tt(a))))):(E=s&~f,E!==0?u=Tt(E):v!==0?u=Tt(v):a||(a=s&~e,a!==0&&(u=Tt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function Re(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Un(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xi(e,n,a,s,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,H=e.expirationTimes,et=e.hiddenUpdates;for(a=v&~a;0<a;){var dt=31-Ot(a),_t=1<<dt;E[dt]=0,H[dt]=-1;var at=et[dt];if(at!==null)for(et[dt]=null,dt=0;dt<at.length;dt++){var ct=at[dt];ct!==null&&(ct.lane&=-536870913)}a&=~_t}s!==0&&ll(e,s,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function ll(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Ot(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Ys(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Ot(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function Ir(e,n){var a=n&-n;return a=(a&42)!==0?1:js(a),(a&(e.suspendedLanes|n))!==0?0:a}function js(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zs(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:U0(e.type))}function Ui(e,n){var a=z.p;try{return z.p=e,n()}finally{z.p=a}}var ri=Math.random().toString(36).slice(2),on="__reactFiber$"+ri,yn="__reactProps$"+ri,yi="__reactContainer$"+ri,zr="__reactEvents$"+ri,Br="__reactListeners$"+ri,cl="__reactHandles$"+ri,Ks="__reactResources$"+ri,ir="__reactMarker$"+ri;function Qs(e){delete e[on],delete e[yn],delete e[zr],delete e[Br],delete e[cl]}function Sa(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[yi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=m0(e);e!==null;){if(a=e[on])return a;e=m0(e)}return n}e=a,a=e.parentNode}return null}function Ma(e){if(e=e[on]||e[yi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ar(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ba(e){var n=e[Ks];return n||(n=e[Ks]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function T(e){e[ir]=!0}var q=new Set,lt={};function it(e,n){Z(e,n),Z(e+"Capture",n)}function Z(e,n){for(lt[e]=n,e=0;e<n.length;e++)q.add(n[e])}var It=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gt={},Bt={};function Xt(e){return We.call(Bt,e)?!0:We.call(Gt,e)?!1:It.test(e)?Bt[e]=!0:(Gt[e]=!0,!1)}function Yt(e,n,a){if(Xt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function $t(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function jt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function te(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ue(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ze(e){if(!e._valueTracker){var n=Ue(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function Oe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Ue(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function Qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ne=/[\n"\\]/g;function ae(e){return e.replace(Ne,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Sn(e,n,a,s,u,f,v,E){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+te(n)):e.value!==""+te(n)&&(e.value=""+te(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Mn(e,v,te(n)):a!=null?Mn(e,v,te(a)):s!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+te(E):e.removeAttribute("name")}function qi(e,n,a,s,u,f,v,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ze(e);return}a=a!=null?""+te(a):"",n=n!=null?""+te(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=E?e.checked:!!s,e.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Ze(e)}function Mn(e,n,a){n==="number"&&Qt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function si(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+te(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Pe(e,n,a){if(n!=null&&(n=""+te(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+te(a):""}function bn(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ft(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=te(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),Ze(e)}function dn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var En=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tn(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||En.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Fr(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&Tn(e,u,s)}else for(var f in n)n.hasOwnProperty(f)&&Tn(e,f,n[f])}function Si(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ul(e){return Hv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yi(){}var nu=null;function iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hr=null,Gr=null;function sp(e){var n=Ma(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Sn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ae(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[yn]||null;if(!u)throw Error(r(90));Sn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Oe(s)}break t;case"textarea":Pe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&si(e,!!a.multiple,n,!1)}}}var au=!1;function op(e,n,a){if(au)return e(n,a);au=!0;try{var s=e(n);return s}finally{if(au=!1,(Hr!==null||Gr!==null)&&(Ql(),Hr&&(n=Hr,e=Gr,Gr=Hr=null,sp(n),e)))for(n=0;n<e.length;n++)sp(e[n])}}function Js(e,n){var a=e.stateNode;if(a===null)return null;var s=a[yn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(ji)try{var $s={};Object.defineProperty($s,"passive",{get:function(){ru=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{ru=!1}var Ea=null,su=null,fl=null;function lp(){if(fl)return fl;var e,n=su,a=n.length,s,u="value"in Ea?Ea.value:Ea.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(s=1;s<=v&&n[a-s]===u[f-s];s++);return fl=u.slice(e,1<s?1-s:void 0)}function hl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function dl(){return!0}function cp(){return!1}function Hn(e){function n(a,s,u,f,v){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?dl:cp,this.isPropagationStopped=cp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),n}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=Hn(rr),to=g({},rr,{view:0,detail:0}),Gv=Hn(to),ou,lu,eo,ml=g({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(ou=e.screenX-eo.screenX,lu=e.screenY-eo.screenY):lu=ou=0,eo=e),ou)},movementY:function(e){return"movementY"in e?e.movementY:lu}}),up=Hn(ml),Vv=g({},ml,{dataTransfer:0}),kv=Hn(Vv),Xv=g({},to,{relatedTarget:0}),cu=Hn(Xv),Wv=g({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),qv=Hn(Wv),Yv=g({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jv=Hn(Yv),Zv=g({},rr,{data:0}),fp=Hn(Zv),Kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $v(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Jv[e])?!!n[e]:!1}function uu(){return $v}var tx=g({},to,{key:function(e){if(e.key){var n=Kv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(e){return e.type==="keypress"?hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ex=Hn(tx),nx=g({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=Hn(nx),ix=g({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),ax=Hn(ix),rx=g({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=Hn(rx),ox=g({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lx=Hn(ox),cx=g({},rr,{newState:0,oldState:0}),ux=Hn(cx),fx=[9,13,27,32],fu=ji&&"CompositionEvent"in window,no=null;ji&&"documentMode"in document&&(no=document.documentMode);var hx=ji&&"TextEvent"in window&&!no,dp=ji&&(!fu||no&&8<no&&11>=no),pp=" ",mp=!1;function gp(e,n){switch(e){case"keyup":return fx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _p(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vr=!1;function dx(e,n){switch(e){case"compositionend":return _p(n);case"keypress":return n.which!==32?null:(mp=!0,pp);case"textInput":return e=n.data,e===pp&&mp?null:e;default:return null}}function px(e,n){if(Vr)return e==="compositionend"||!fu&&gp(e,n)?(e=lp(),fl=su=Ea=null,Vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dp&&n.locale!=="ko"?null:n.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!mx[e.type]:n==="textarea"}function xp(e,n,a,s){Hr?Gr?Gr.push(s):Gr=[s]:Hr=s,n=ac(n,"onChange"),0<n.length&&(a=new pl("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var io=null,ao=null;function gx(e){e0(e,0)}function gl(e){var n=ar(e);if(Oe(n))return e}function yp(e,n){if(e==="change")return n}var Sp=!1;if(ji){var hu;if(ji){var du="oninput"in document;if(!du){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),du=typeof Mp.oninput=="function"}hu=du}else hu=!1;Sp=hu&&(!document.documentMode||9<document.documentMode)}function bp(){io&&(io.detachEvent("onpropertychange",Ep),ao=io=null)}function Ep(e){if(e.propertyName==="value"&&gl(ao)){var n=[];xp(n,ao,e,iu(e)),op(gx,n)}}function _x(e,n,a){e==="focusin"?(bp(),io=n,ao=a,io.attachEvent("onpropertychange",Ep)):e==="focusout"&&bp()}function vx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(ao)}function xx(e,n){if(e==="click")return gl(n)}function yx(e,n){if(e==="input"||e==="change")return gl(n)}function Sx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:Sx;function ro(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!We.call(n,u)||!jn(e[u],n[u]))return!1}return!0}function Tp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ap(e,n){var a=Tp(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Tp(a)}}function Rp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Rp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function wp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Qt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Qt(e.document)}return n}function pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Mx=ji&&"documentMode"in document&&11>=document.documentMode,kr=null,mu=null,so=null,gu=!1;function Cp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||kr==null||kr!==Qt(s)||(s=kr,"selectionStart"in s&&pu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),so&&ro(so,s)||(so=s,s=ac(mu,"onSelect"),0<s.length&&(n=new pl("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=kr)))}function sr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Xr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},_u={},Dp={};ji&&(Dp=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function or(e){if(_u[e])return _u[e];if(!Xr[e])return e;var n=Xr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Dp)return _u[e]=n[a];return e}var Up=or("animationend"),Np=or("animationiteration"),Lp=or("animationstart"),bx=or("transitionrun"),Ex=or("transitionstart"),Tx=or("transitioncancel"),Op=or("transitionend"),Ip=new Map,vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vu.push("scrollEnd");function Mi(e,n){Ip.set(e,n),it(n,[e])}var _l=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},oi=[],Wr=0,xu=0;function vl(){for(var e=Wr,n=xu=Wr=0;n<e;){var a=oi[n];oi[n++]=null;var s=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,s!==null&&u!==null){var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}f!==0&&Pp(a,u,f)}}function xl(e,n,a,s){oi[Wr++]=e,oi[Wr++]=n,oi[Wr++]=a,oi[Wr++]=s,xu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function yu(e,n,a,s){return xl(e,n,a,s),yl(e)}function lr(e,n){return xl(e,null,null,n),yl(e)}function Pp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ot(a),e=f.hiddenUpdates,s=e[u],s===null?e[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function yl(e){if(50<Co)throw Co=0,Df=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var qr={};function Ax(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,a,s){return new Ax(e,n,a,s)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zi(e,n){var a=e.alternate;return a===null?(a=Zn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function zp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Sl(e,n,a,s,u,f){var v=0;if(s=e,typeof e=="function")Su(e)&&(v=1);else if(typeof e=="string")v=Uy(e,a,wt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=Zn(31,a,n,u),e.elementType=R,e.lanes=f,e;case w:return cr(a.children,u,f,n);case M:v=8,u|=24;break;case x:return e=Zn(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case F:return e=Zn(13,a,n,u),e.elementType=F,e.lanes=f,e;case G:return e=Zn(19,a,n,u),e.elementType=G,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:v=10;break t;case O:v=9;break t;case I:v=11;break t;case B:v=14;break t;case Q:v=16,s=null;break t}v=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Zn(v,a,n,u),n.elementType=e,n.type=s,n.lanes=f,n}function cr(e,n,a,s){return e=Zn(7,e,s,n),e.lanes=a,e}function Mu(e,n,a){return e=Zn(6,e,null,n),e.lanes=a,e}function Bp(e){var n=Zn(18,null,null,0);return n.stateNode=e,n}function bu(e,n,a){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Fp=new WeakMap;function li(e,n){if(typeof e=="object"&&e!==null){var a=Fp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},Fp.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var Yr=[],jr=0,Ml=null,oo=0,ci=[],ui=0,Ta=null,Ni=1,Li="";function Ki(e,n){Yr[jr++]=oo,Yr[jr++]=Ml,Ml=e,oo=n}function Hp(e,n,a){ci[ui++]=Ni,ci[ui++]=Li,ci[ui++]=Ta,Ta=e;var s=Ni;e=Li;var u=32-Ot(s)-1;s&=~(1<<u),a+=1;var f=32-Ot(n)+u;if(30<f){var v=u-u%5;f=(s&(1<<v)-1).toString(32),s>>=v,u-=v,Ni=1<<32-Ot(n)+u|a<<u|s,Li=f+e}else Ni=1<<f|a<<u|s,Li=e}function Eu(e){e.return!==null&&(Ki(e,1),Hp(e,1,0))}function Tu(e){for(;e===Ml;)Ml=Yr[--jr],Yr[jr]=null,oo=Yr[--jr],Yr[jr]=null;for(;e===Ta;)Ta=ci[--ui],ci[ui]=null,Li=ci[--ui],ci[ui]=null,Ni=ci[--ui],ci[ui]=null}function Gp(e,n){ci[ui++]=Ni,ci[ui++]=Li,ci[ui++]=Ta,Ni=n.id,Li=n.overflow,Ta=e}var An=null,Ke=null,Me=!1,Aa=null,fi=!1,Au=Error(r(519));function Ra(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lo(li(n,e)),Au}function Vp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[on]=e,n[yn]=s,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<Uo.length;a++)xe(Uo[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),qi(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),bn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||r0(n.textContent,a)?(s.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),s.onScroll!=null&&xe("scroll",n),s.onScrollEnd!=null&&xe("scrollend",n),s.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||Ra(e,!0)}function kp(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:An=An.return}}function Zr(e){if(e!==An)return!1;if(!Me)return kp(e),Me=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Wf(e.type,e.memoizedProps)),a=!a),a&&Ke&&Ra(e),kp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ke=p0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ke=p0(e)}else n===27?(n=Ke,Ga(e.type)?(e=Kf,Kf=null,Ke=e):Ke=n):Ke=An?di(e.stateNode.nextSibling):null;return!0}function ur(){Ke=An=null,Me=!1}function Ru(){var e=Aa;return e!==null&&(Xn===null?Xn=e:Xn.push.apply(Xn,e),Aa=null),e}function lo(e){Aa===null?Aa=[e]:Aa.push(e)}var wu=U(null),fr=null,Qi=null;function wa(e,n,a){gt(wu,n._currentValue),n._currentValue=a}function Ji(e){e._currentValue=wu.current,$(wu)}function Cu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Du(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=u;for(var H=0;H<n.length;H++)if(E.context===n[H]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),Cu(f.return,a,e),s||(v=null);break t}f=E.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Cu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Kr(e,n,a,s){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var E=u.type;jn(u.pendingProps.value,v.value)||(e!==null?e.push(E):e=[E])}}else if(u===ht.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Po):e=[Po])}u=u.return}e!==null&&Du(n,e,a,s),n.flags|=262144}function bl(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hr(e){fr=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Xp(fr,e)}function El(e,n){return fr===null&&hr(e),Xp(e,n)}function Xp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(e===null)throw Error(r(308));Qi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Qi=Qi.next=n;return a}var Rx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},wx=o.unstable_scheduleCallback,Cx=o.unstable_NormalPriority,ln={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uu(){return{controller:new Rx,data:new Map,refCount:0}}function co(e){e.refCount--,e.refCount===0&&wx(Cx,function(){e.controller.abort()})}var uo=null,Nu=0,Qr=0,Jr=null;function Dx(e,n){if(uo===null){var a=uo=[];Nu=0,Qr=Pf(),Jr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Nu++,n.then(Wp,Wp),n}function Wp(){if(--Nu===0&&uo!==null){Jr!==null&&(Jr.status="fulfilled");var e=uo;uo=null,Qr=0,Jr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ux(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var qp=N.S;N.S=function(e,n){Cg=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Dx(e,n),qp!==null&&qp(e,n)};var dr=U(null);function Lu(){var e=dr.current;return e!==null?e:qe.pooledCache}function Tl(e,n){n===null?gt(dr,dr.current):gt(dr,n.pool)}function Yp(){var e=Lu();return e===null?null:{parent:ln._currentValue,pool:e}}var $r=Error(r(460)),Ou=Error(r(474)),Al=Error(r(542)),Rl={then:function(){}};function jp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Qp(e),e;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Qp(e),e}throw mr=n,$r}}function pr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(mr=a,$r):a}}var mr=null;function Kp(){if(mr===null)throw Error(r(459));var e=mr;return mr=null,e}function Qp(e){if(e===$r||e===Al)throw Error(r(483))}var ts=null,fo=0;function wl(e){var n=fo;return fo+=1,ts===null&&(ts=[]),Zp(ts,e,n)}function ho(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Cl(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Jp(e){function n(Y,k){if(e){var J=Y.deletions;J===null?(Y.deletions=[k],Y.flags|=16):J.push(k)}}function a(Y,k){if(!e)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function s(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function u(Y,k){return Y=Zi(Y,k),Y.index=0,Y.sibling=null,Y}function f(Y,k,J){return Y.index=J,e?(J=Y.alternate,J!==null?(J=J.index,J<k?(Y.flags|=67108866,k):J):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function v(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function E(Y,k,J,mt){return k===null||k.tag!==6?(k=Mu(J,Y.mode,mt),k.return=Y,k):(k=u(k,J),k.return=Y,k)}function H(Y,k,J,mt){var Jt=J.type;return Jt===w?dt(Y,k,J.props.children,mt,J.key):k!==null&&(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===Q&&pr(Jt)===k.type)?(k=u(k,J.props),ho(k,J),k.return=Y,k):(k=Sl(J.type,J.key,J.props,null,Y.mode,mt),ho(k,J),k.return=Y,k)}function et(Y,k,J,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=bu(J,Y.mode,mt),k.return=Y,k):(k=u(k,J.children||[]),k.return=Y,k)}function dt(Y,k,J,mt,Jt){return k===null||k.tag!==7?(k=cr(J,Y.mode,mt,Jt),k.return=Y,k):(k=u(k,J),k.return=Y,k)}function _t(Y,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Mu(""+k,Y.mode,J),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return J=Sl(k.type,k.key,k.props,null,Y.mode,J),ho(J,k),J.return=Y,J;case A:return k=bu(k,Y.mode,J),k.return=Y,k;case Q:return k=pr(k),_t(Y,k,J)}if(ft(k)||st(k))return k=cr(k,Y.mode,J,null),k.return=Y,k;if(typeof k.then=="function")return _t(Y,wl(k),J);if(k.$$typeof===P)return _t(Y,El(Y,k),J);Cl(Y,k)}return null}function at(Y,k,J,mt){var Jt=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Jt!==null?null:E(Y,k,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case S:return J.key===Jt?H(Y,k,J,mt):null;case A:return J.key===Jt?et(Y,k,J,mt):null;case Q:return J=pr(J),at(Y,k,J,mt)}if(ft(J)||st(J))return Jt!==null?null:dt(Y,k,J,mt,null);if(typeof J.then=="function")return at(Y,k,wl(J),mt);if(J.$$typeof===P)return at(Y,k,El(Y,J),mt);Cl(Y,J)}return null}function ct(Y,k,J,mt,Jt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Y=Y.get(J)||null,E(k,Y,""+mt,Jt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case S:return Y=Y.get(mt.key===null?J:mt.key)||null,H(k,Y,mt,Jt);case A:return Y=Y.get(mt.key===null?J:mt.key)||null,et(k,Y,mt,Jt);case Q:return mt=pr(mt),ct(Y,k,J,mt,Jt)}if(ft(mt)||st(mt))return Y=Y.get(J)||null,dt(k,Y,mt,Jt,null);if(typeof mt.then=="function")return ct(Y,k,J,wl(mt),Jt);if(mt.$$typeof===P)return ct(Y,k,J,El(k,mt),Jt);Cl(k,mt)}return null}function Wt(Y,k,J,mt){for(var Jt=null,Ce=null,Zt=k,ue=k=0,Se=null;Zt!==null&&ue<J.length;ue++){Zt.index>ue?(Se=Zt,Zt=null):Se=Zt.sibling;var De=at(Y,Zt,J[ue],mt);if(De===null){Zt===null&&(Zt=Se);break}e&&Zt&&De.alternate===null&&n(Y,Zt),k=f(De,k,ue),Ce===null?Jt=De:Ce.sibling=De,Ce=De,Zt=Se}if(ue===J.length)return a(Y,Zt),Me&&Ki(Y,ue),Jt;if(Zt===null){for(;ue<J.length;ue++)Zt=_t(Y,J[ue],mt),Zt!==null&&(k=f(Zt,k,ue),Ce===null?Jt=Zt:Ce.sibling=Zt,Ce=Zt);return Me&&Ki(Y,ue),Jt}for(Zt=s(Zt);ue<J.length;ue++)Se=ct(Zt,Y,ue,J[ue],mt),Se!==null&&(e&&Se.alternate!==null&&Zt.delete(Se.key===null?ue:Se.key),k=f(Se,k,ue),Ce===null?Jt=Se:Ce.sibling=Se,Ce=Se);return e&&Zt.forEach(function(qa){return n(Y,qa)}),Me&&Ki(Y,ue),Jt}function ee(Y,k,J,mt){if(J==null)throw Error(r(151));for(var Jt=null,Ce=null,Zt=k,ue=k=0,Se=null,De=J.next();Zt!==null&&!De.done;ue++,De=J.next()){Zt.index>ue?(Se=Zt,Zt=null):Se=Zt.sibling;var qa=at(Y,Zt,De.value,mt);if(qa===null){Zt===null&&(Zt=Se);break}e&&Zt&&qa.alternate===null&&n(Y,Zt),k=f(qa,k,ue),Ce===null?Jt=qa:Ce.sibling=qa,Ce=qa,Zt=Se}if(De.done)return a(Y,Zt),Me&&Ki(Y,ue),Jt;if(Zt===null){for(;!De.done;ue++,De=J.next())De=_t(Y,De.value,mt),De!==null&&(k=f(De,k,ue),Ce===null?Jt=De:Ce.sibling=De,Ce=De);return Me&&Ki(Y,ue),Jt}for(Zt=s(Zt);!De.done;ue++,De=J.next())De=ct(Zt,Y,ue,De.value,mt),De!==null&&(e&&De.alternate!==null&&Zt.delete(De.key===null?ue:De.key),k=f(De,k,ue),Ce===null?Jt=De:Ce.sibling=De,Ce=De);return e&&Zt.forEach(function(Vy){return n(Y,Vy)}),Me&&Ki(Y,ue),Jt}function Ve(Y,k,J,mt){if(typeof J=="object"&&J!==null&&J.type===w&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case S:t:{for(var Jt=J.key;k!==null;){if(k.key===Jt){if(Jt=J.type,Jt===w){if(k.tag===7){a(Y,k.sibling),mt=u(k,J.props.children),mt.return=Y,Y=mt;break t}}else if(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===Q&&pr(Jt)===k.type){a(Y,k.sibling),mt=u(k,J.props),ho(mt,J),mt.return=Y,Y=mt;break t}a(Y,k);break}else n(Y,k);k=k.sibling}J.type===w?(mt=cr(J.props.children,Y.mode,mt,J.key),mt.return=Y,Y=mt):(mt=Sl(J.type,J.key,J.props,null,Y.mode,mt),ho(mt,J),mt.return=Y,Y=mt)}return v(Y);case A:t:{for(Jt=J.key;k!==null;){if(k.key===Jt)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){a(Y,k.sibling),mt=u(k,J.children||[]),mt.return=Y,Y=mt;break t}else{a(Y,k);break}else n(Y,k);k=k.sibling}mt=bu(J,Y.mode,mt),mt.return=Y,Y=mt}return v(Y);case Q:return J=pr(J),Ve(Y,k,J,mt)}if(ft(J))return Wt(Y,k,J,mt);if(st(J)){if(Jt=st(J),typeof Jt!="function")throw Error(r(150));return J=Jt.call(J),ee(Y,k,J,mt)}if(typeof J.then=="function")return Ve(Y,k,wl(J),mt);if(J.$$typeof===P)return Ve(Y,k,El(Y,J),mt);Cl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(a(Y,k.sibling),mt=u(k,J),mt.return=Y,Y=mt):(a(Y,k),mt=Mu(J,Y.mode,mt),mt.return=Y,Y=mt),v(Y)):a(Y,k)}return function(Y,k,J,mt){try{fo=0;var Jt=Ve(Y,k,J,mt);return ts=null,Jt}catch(Zt){if(Zt===$r||Zt===Al)throw Zt;var Ce=Zn(29,Zt,null,Y.mode);return Ce.lanes=mt,Ce.return=Y,Ce}}}var gr=Jp(!0),$p=Jp(!1),Ca=!1;function Iu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ua(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Le&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=yl(e),Pp(e,null,a),n}return xl(e,s,n,a),yl(e)}function po(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ys(e,a)}}function zu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Bu=!1;function mo(){if(Bu){var e=Jr;if(e!==null)throw e}}function go(e,n,a,s){Bu=!1;var u=e.updateQueue;Ca=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var H=E,et=H.next;H.next=null,v===null?f=et:v.next=et,v=H;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,E=dt.lastBaseUpdate,E!==v&&(E===null?dt.firstBaseUpdate=et:E.next=et,dt.lastBaseUpdate=H))}if(f!==null){var _t=u.baseState;v=0,dt=et=H=null,E=f;do{var at=E.lane&-536870913,ct=at!==E.lane;if(ct?(ye&at)===at:(s&at)===at){at!==0&&at===Qr&&(Bu=!0),dt!==null&&(dt=dt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Wt=e,ee=E;at=n;var Ve=a;switch(ee.tag){case 1:if(Wt=ee.payload,typeof Wt=="function"){_t=Wt.call(Ve,_t,at);break t}_t=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=ee.payload,at=typeof Wt=="function"?Wt.call(Ve,_t,at):Wt,at==null)break t;_t=g({},_t,at);break t;case 2:Ca=!0}}at=E.callback,at!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[at]:ct.push(at))}else ct={lane:at,tag:E.tag,payload:E.payload,callback:E.callback,next:null},dt===null?(et=dt=ct,H=_t):dt=dt.next=ct,v|=at;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;ct=E,E=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);dt===null&&(H=_t),u.baseState=H,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),Pa|=v,e.lanes=v,e.memoizedState=_t}}function tm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function em(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)tm(a[e],n)}var es=U(null),Dl=U(0);function nm(e,n){e=oa,gt(Dl,e),gt(es,n),oa=e|n.baseLanes}function Fu(){gt(Dl,oa),gt(es,es.current)}function Hu(){oa=Dl.current,$(es),$(Dl)}var Kn=U(null),hi=null;function Na(e){var n=e.alternate;gt(rn,rn.current&1),gt(Kn,e),hi===null&&(n===null||es.current!==null||n.memoizedState!==null)&&(hi=e)}function Gu(e){gt(rn,rn.current),gt(Kn,e),hi===null&&(hi=e)}function im(e){e.tag===22?(gt(rn,rn.current),gt(Kn,e),hi===null&&(hi=e)):La()}function La(){gt(rn,rn.current),gt(Kn,Kn.current)}function Qn(e){$(Kn),hi===e&&(hi=null),$(rn)}var rn=U(0);function Ul(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jf(a)||Zf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,le=null,He=null,cn=null,Nl=!1,ns=!1,_r=!1,Ll=0,_o=0,is=null,Nx=0;function en(){throw Error(r(321))}function Vu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!jn(e[a],n[a]))return!1;return!0}function ku(e,n,a,s,u,f){return $i=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?Hm:rf,_r=!1,f=a(s,u),_r=!1,ns&&(f=rm(n,a,s,u)),am(e),f}function am(e){N.H=yo;var n=He!==null&&He.next!==null;if($i=0,cn=He=le=null,Nl=!1,_o=0,is=null,n)throw Error(r(300));e===null||un||(e=e.dependencies,e!==null&&bl(e)&&(un=!0))}function rm(e,n,a,s){le=e;var u=0;do{if(ns&&(is=null),_o=0,ns=!1,25<=u)throw Error(r(301));if(u+=1,cn=He=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=Gm,f=n(a,s)}while(ns);return f}function Lx(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?vo(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(le.flags|=1024),n}function Xu(){var e=Ll!==0;return Ll=0,e}function Wu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function qu(e){if(Nl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Nl=!1}$i=0,cn=He=le=null,ns=!1,_o=Ll=0,is=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?le.memoizedState=cn=e:cn=cn.next=e,cn}function sn(){if(He===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=cn===null?le.memoizedState:cn.next;if(n!==null)cn=n,He=e;else{if(e===null)throw le.alternate===null?Error(r(467)):Error(r(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},cn===null?le.memoizedState=cn=e:cn=cn.next=e}return cn}function Ol(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(e){var n=_o;return _o+=1,is===null&&(is=[]),e=Zp(is,e,n),n=le,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Hm:rf),e}function Il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vo(e);if(e.$$typeof===P)return Rn(e)}throw Error(r(438,String(e)))}function Yu(e){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=le.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ol(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=C;return n.index++,a}function ta(e,n){return typeof n=="function"?n(e):n}function Pl(e){var n=sn();return ju(n,He,e)}function ju(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,f=s.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,s.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var E=v=null,H=null,et=n,dt=!1;do{var _t=et.lane&-536870913;if(_t!==et.lane?(ye&_t)===_t:($i&_t)===_t){var at=et.revertLane;if(at===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),_t===Qr&&(dt=!0);else if(($i&at)===at){et=et.next,at===Qr&&(dt=!0);continue}else _t={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},H===null?(E=H=_t,v=f):H=H.next=_t,le.lanes|=at,Pa|=at;_t=et.action,_r&&a(f,_t),f=et.hasEagerState?et.eagerState:a(f,_t)}else at={lane:_t,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},H===null?(E=H=at,v=f):H=H.next=at,le.lanes|=_t,Pa|=_t;et=et.next}while(et!==null&&et!==n);if(H===null?v=f:H.next=E,!jn(f,e.memoizedState)&&(un=!0,dt&&(a=Jr,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=H,s.lastRenderedState=f}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Zu(e){var n=sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);jn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function sm(e,n,a){var s=le,u=sn(),f=Me;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!jn((He||u).memoizedState,a);if(v&&(u.memoizedState=a,un=!0),u=u.queue,Ju(cm.bind(null,s,u,e),[e]),u.getSnapshot!==n||v||cn!==null&&cn.memoizedState.tag&1){if(s.flags|=2048,as(9,{destroy:void 0},lm.bind(null,s,u,a,n),null),qe===null)throw Error(r(349));f||($i&127)!==0||om(s,n,a)}return a}function om(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Ol(),le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function lm(e,n,a,s){n.value=a,n.getSnapshot=s,um(n)&&fm(e)}function cm(e,n,a){return a(function(){um(n)&&fm(e)})}function um(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!jn(e,a)}catch{return!0}}function fm(e){var n=lr(e,2);n!==null&&Wn(n,e,2)}function Ku(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),_r){Nt(!0);try{a()}finally{Nt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},n}function hm(e,n,a,s){return e.baseState=a,ju(e,He,typeof s=="function"?s:ta)}function Ox(e,n,a,s,u){if(Fl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};N.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,dm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function dm(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var f=N.T,v={};N.T=v;try{var E=a(u,s),H=N.S;H!==null&&H(v,E),pm(e,n,E)}catch(et){Qu(e,n,et)}finally{f!==null&&v.types!==null&&(f.types=v.types),N.T=f}}else try{f=a(u,s),pm(e,n,f)}catch(et){Qu(e,n,et)}}function pm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){mm(e,n,s)},function(s){return Qu(e,n,s)}):mm(e,n,a)}function mm(e,n,a){n.status="fulfilled",n.value=a,gm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,dm(e,a)))}function Qu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,gm(n),n=n.next;while(n!==s)}e.action=null}function gm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function _m(e,n){return n}function vm(e,n){if(Me){var a=qe.formState;if(a!==null){t:{var s=le;if(Me){if(Ke){e:{for(var u=Ke,f=fi;u.nodeType!==8;){if(!f){u=null;break e}if(u=di(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=di(u.nextSibling),s=u.data==="F!";break t}}Ra(s)}s=!1}s&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_m,lastRenderedState:n},a.queue=s,a=zm.bind(null,le,s),s.dispatch=a,s=Ku(!1),f=af.bind(null,le,!1,s.queue),s=zn(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=Ox.bind(null,le,u,f,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function xm(e){var n=sn();return ym(n,He,e)}function ym(e,n,a){if(n=ju(e,n,_m)[0],e=Pl(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=vo(n)}catch(v){throw v===$r?Al:v}else s=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,as(9,{destroy:void 0},Ix.bind(null,u,a),null)),[s,f,e]}function Ix(e,n){e.action=n}function Sm(e){var n=sn(),a=He;if(a!==null)return ym(n,a,e);sn(),n=n.memoizedState,a=sn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function as(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=le.updateQueue,n===null&&(n=Ol(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Mm(){return sn().memoizedState}function zl(e,n,a,s){var u=zn();le.flags|=e,u.memoizedState=as(1|n,{destroy:void 0},a,s===void 0?null:s)}function Bl(e,n,a,s){var u=sn();s=s===void 0?null:s;var f=u.memoizedState.inst;He!==null&&s!==null&&Vu(s,He.memoizedState.deps)?u.memoizedState=as(n,f,a,s):(le.flags|=e,u.memoizedState=as(1|n,f,a,s))}function bm(e,n){zl(8390656,8,e,n)}function Ju(e,n){Bl(2048,8,e,n)}function Px(e){le.flags|=4;var n=le.updateQueue;if(n===null)n=Ol(),le.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Em(e){var n=sn().memoizedState;return Px({ref:n,nextImpl:e}),function(){if((Le&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Tm(e,n){return Bl(4,2,e,n)}function Am(e,n){return Bl(4,4,e,n)}function Rm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function wm(e,n,a){a=a!=null?a.concat([e]):null,Bl(4,4,Rm.bind(null,n,e),a)}function $u(){}function Cm(e,n){var a=sn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Vu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Dm(e,n){var a=sn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Vu(n,s[1]))return s[0];if(s=e(),_r){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[s,n],s}function tf(e,n,a){return a===void 0||($i&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Ug(),le.lanes|=e,Pa|=e,a)}function Um(e,n,a,s){return jn(a,n)?a:es.current!==null?(e=tf(e,a,s),jn(e,n)||(un=!0),e):($i&42)===0||($i&1073741824)!==0&&(ye&261930)===0?(un=!0,e.memoizedState=a):(e=Ug(),le.lanes|=e,Pa|=e,n)}function Nm(e,n,a,s,u){var f=z.p;z.p=f!==0&&8>f?f:8;var v=N.T,E={};N.T=E,af(e,!1,n,a);try{var H=u(),et=N.S;if(et!==null&&et(E,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var dt=Ux(H,s);xo(e,n,dt,ti(e))}else xo(e,n,s,ti(e))}catch(_t){xo(e,n,{then:function(){},status:"rejected",reason:_t},ti())}finally{z.p=f,v!==null&&E.types!==null&&(v.types=E.types),N.T=v}}function zx(){}function ef(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=Lm(e).queue;Nm(e,u,n,nt,a===null?zx:function(){return Om(e),a(s)})}function Lm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:nt,baseState:nt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:nt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Om(e){var n=Lm(e);n.next===null&&(n=e.alternate.memoizedState),xo(e,n.next.queue,{},ti())}function nf(){return Rn(Po)}function Im(){return sn().memoizedState}function Pm(){return sn().memoizedState}function Bx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();e=Da(a);var s=Ua(n,e,a);s!==null&&(Wn(s,n,a),po(s,n,a)),n={cache:Uu()},e.payload=n;return}n=n.return}}function Fx(e,n,a){var s=ti();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fl(e)?Bm(n,a):(a=yu(e,n,a,s),a!==null&&(Wn(a,e,s),Fm(a,n,s)))}function zm(e,n,a){var s=ti();xo(e,n,a,s)}function xo(e,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fl(e))Bm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,E=f(v,a);if(u.hasEagerState=!0,u.eagerState=E,jn(E,v))return xl(e,n,u,0),qe===null&&vl(),!1}catch{}if(a=yu(e,n,u,s),a!==null)return Wn(a,e,s),Fm(a,n,s),!0}return!1}function af(e,n,a,s){if(s={lane:2,revertLane:Pf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Fl(e)){if(n)throw Error(r(479))}else n=yu(e,a,s,2),n!==null&&Wn(n,e,2)}function Fl(e){var n=e.alternate;return e===le||n!==null&&n===le}function Bm(e,n){ns=Nl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Fm(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ys(e,a)}}var yo={readContext:Rn,use:Il,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};yo.useEffectEvent=en;var Hm={readContext:Rn,use:Il,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:bm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,zl(4194308,4,Rm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return zl(4194308,4,e,n)},useInsertionEffect:function(e,n){zl(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var s=e();if(_r){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=zn();if(a!==void 0){var u=a(n);if(_r){Nt(!0);try{a(n)}finally{Nt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=Fx.bind(null,le,e),[s.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=Ku(e);var n=e.queue,a=zm.bind(null,le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:$u,useDeferredValue:function(e,n){var a=zn();return tf(a,e,n)},useTransition:function(){var e=Ku(!1);return e=Nm.bind(null,le,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=le,u=zn();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qe===null)throw Error(r(349));(ye&127)!==0||om(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,bm(cm.bind(null,s,f,e),[e]),s.flags|=2048,as(9,{destroy:void 0},lm.bind(null,s,f,a,n),null),a},useId:function(){var e=zn(),n=qe.identifierPrefix;if(Me){var a=Li,s=Ni;a=(s&~(1<<32-Ot(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ll++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Nx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:nf,useFormState:vm,useActionState:vm,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=af.bind(null,le,!0,a),a.dispatch=n,[e,n]},useMemoCache:Yu,useCacheRefresh:function(){return zn().memoizedState=Bx.bind(null,le)},useEffectEvent:function(e){var n=zn(),a={impl:e};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},rf={readContext:Rn,use:Il,useCallback:Cm,useContext:Rn,useEffect:Ju,useImperativeHandle:wm,useInsertionEffect:Tm,useLayoutEffect:Am,useMemo:Dm,useReducer:Pl,useRef:Mm,useState:function(){return Pl(ta)},useDebugValue:$u,useDeferredValue:function(e,n){var a=sn();return Um(a,He.memoizedState,e,n)},useTransition:function(){var e=Pl(ta)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:sm,useId:Im,useHostTransitionStatus:nf,useFormState:xm,useActionState:xm,useOptimistic:function(e,n){var a=sn();return hm(a,He,e,n)},useMemoCache:Yu,useCacheRefresh:Pm};rf.useEffectEvent=Em;var Gm={readContext:Rn,use:Il,useCallback:Cm,useContext:Rn,useEffect:Ju,useImperativeHandle:wm,useInsertionEffect:Tm,useLayoutEffect:Am,useMemo:Dm,useReducer:Zu,useRef:Mm,useState:function(){return Zu(ta)},useDebugValue:$u,useDeferredValue:function(e,n){var a=sn();return He===null?tf(a,e,n):Um(a,He.memoizedState,e,n)},useTransition:function(){var e=Zu(ta)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:sm,useId:Im,useHostTransitionStatus:nf,useFormState:Sm,useActionState:Sm,useOptimistic:function(e,n){var a=sn();return He!==null?hm(a,He,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Yu,useCacheRefresh:Pm};Gm.useEffectEvent=Em;function sf(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var of={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=ti(),u=Da(s);u.payload=n,a!=null&&(u.callback=a),n=Ua(e,u,s),n!==null&&(Wn(n,e,s),po(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=ti(),u=Da(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ua(e,u,s),n!==null&&(Wn(n,e,s),po(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ti(),s=Da(a);s.tag=2,n!=null&&(s.callback=n),n=Ua(e,s,a),n!==null&&(Wn(n,e,a),po(n,e,a))}};function Vm(e,n,a,s,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,v):n.prototype&&n.prototype.isPureReactComponent?!ro(a,s)||!ro(u,f):!0}function km(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&of.enqueueReplaceState(n,n.state,null)}function vr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Xm(e){_l(e)}function Wm(e){console.error(e)}function qm(e){_l(e)}function Hl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Ym(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function lf(e,n,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){Hl(e,n)},a}function jm(e){return e=Da(e),e.tag=3,e}function Zm(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;e.payload=function(){return u(f)},e.callback=function(){Ym(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Ym(n,a,s),typeof u!="function"&&(za===null?za=new Set([this]):za.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function Hx(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Kr(n,a,u,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?Jl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Rl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Lf(e,s,u)),!1;case 22:return a.flags|=65536,s===Rl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Lf(e,s,u)),!1}throw Error(r(435,a.tag))}return Lf(e,s,u),Jl(),!1}if(Me)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Au&&(e=Error(r(422),{cause:s}),lo(li(e,a)))):(s!==Au&&(n=Error(r(423),{cause:s}),lo(li(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=li(s,a),u=lf(e.stateNode,s,u),zu(e,u),nn!==4&&(nn=2)),!1;var f=Error(r(520),{cause:s});if(f=li(f,a),wo===null?wo=[f]:wo.push(f),nn!==4&&(nn=2),n===null)return!0;s=li(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=lf(a.stateNode,s,e),zu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(za===null||!za.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=jm(u),Zm(u,e,a,s),zu(a,u),!1}a=a.return}while(a!==null);return!1}var cf=Error(r(461)),un=!1;function wn(e,n,a,s){n.child=e===null?$p(n,null,a,s):gr(n,e.child,a,s)}function Km(e,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var v={};for(var E in s)E!=="ref"&&(v[E]=s[E])}else v=s;return hr(n),s=ku(e,n,a,v,f,u),E=Xu(),e!==null&&!un?(Wu(e,n,u),ea(e,n,u)):(Me&&E&&Eu(n),n.flags|=1,wn(e,n,s,u),n.child)}function Qm(e,n,a,s,u){if(e===null){var f=a.type;return typeof f=="function"&&!Su(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Jm(e,n,f,s,u)):(e=Sl(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!_f(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:ro,a(v,s)&&e.ref===n.ref)return ea(e,n,u)}return n.flags|=1,e=Zi(f,s),e.ref=n.ref,e.return=n,n.child=e}function Jm(e,n,a,s,u){if(e!==null){var f=e.memoizedProps;if(ro(f,s)&&e.ref===n.ref)if(un=!1,n.pendingProps=s=f,_f(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,ea(e,n,u)}return uf(e,n,a,s,u)}function $m(e,n,a,s){var u=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return tg(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Tl(n,f!==null?f.cachePool:null),f!==null?nm(n,f):Fu(),im(n);else return s=n.lanes=536870912,tg(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(Tl(n,f.cachePool),nm(n,f),La(),n.memoizedState=null):(e!==null&&Tl(n,null),Fu(),La());return wn(e,n,u,a),n.child}function So(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function tg(e,n,a,s,u){var f=Lu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Tl(n,null),Fu(),im(n),e!==null&&Kr(e,n,s,!0),n.childLanes=u,null}function Gl(e,n){return n=kl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function eg(e,n,a){return gr(n,e.child,null,a),e=Gl(n,n.pendingProps),e.flags|=2,Qn(n),n.memoizedState=null,e}function Gx(e,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Me){if(s.mode==="hidden")return e=Gl(n,s),n.lanes=536870912,So(null,e);if(Gu(n),(e=Ke)?(e=d0(e,fi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:Ni,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=Bp(e),a.return=n,n.child=a,An=n,Ke=null)):e=null,e===null)throw Ra(n);return n.lanes=536870912,null}return Gl(n,s)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Gu(n),u)if(n.flags&256)n.flags&=-257,n=eg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(un||Kr(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(s=qe,s!==null&&(v=Ir(s,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,lr(e,v),Wn(s,e,v),cf;Jl(),n=eg(e,n,a)}else e=f.treeContext,Ke=di(v.nextSibling),An=n,Me=!0,Aa=null,fi=!1,e!==null&&Gp(n,e),n=Gl(n,s),n.flags|=4096;return n}return e=Zi(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Vl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function uf(e,n,a,s,u){return hr(n),a=ku(e,n,a,s,void 0,u),s=Xu(),e!==null&&!un?(Wu(e,n,u),ea(e,n,u)):(Me&&s&&Eu(n),n.flags|=1,wn(e,n,a,u),n.child)}function ng(e,n,a,s,u,f){return hr(n),n.updateQueue=null,a=rm(n,s,a,u),am(e),s=Xu(),e!==null&&!un?(Wu(e,n,f),ea(e,n,f)):(Me&&s&&Eu(n),n.flags|=1,wn(e,n,a,f),n.child)}function ig(e,n,a,s,u){if(hr(n),n.stateNode===null){var f=qr,v=a.contextType;typeof v=="object"&&v!==null&&(f=Rn(v)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=of,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Iu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Rn(v):qr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(sf(n,a,v,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&of.enqueueReplaceState(f,f.state,null),go(n,s,f,u),mo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,H=vr(a,E);f.props=H;var et=f.context,dt=a.contextType;v=qr,typeof dt=="object"&&dt!==null&&(v=Rn(dt));var _t=a.getDerivedStateFromProps;dt=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||et!==v)&&km(n,f,s,v),Ca=!1;var at=n.memoizedState;f.state=at,go(n,s,f,u),mo(),et=n.memoizedState,E||at!==et||Ca?(typeof _t=="function"&&(sf(n,a,_t,s),et=n.memoizedState),(H=Ca||Vm(n,a,H,s,at,et,v))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=et),f.props=s,f.state=et,f.context=v,s=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Pu(e,n),v=n.memoizedProps,dt=vr(a,v),f.props=dt,_t=n.pendingProps,at=f.context,et=a.contextType,H=qr,typeof et=="object"&&et!==null&&(H=Rn(et)),E=a.getDerivedStateFromProps,(et=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==_t||at!==H)&&km(n,f,s,H),Ca=!1,at=n.memoizedState,f.state=at,go(n,s,f,u),mo();var ct=n.memoizedState;v!==_t||at!==ct||Ca||e!==null&&e.dependencies!==null&&bl(e.dependencies)?(typeof E=="function"&&(sf(n,a,E,s),ct=n.memoizedState),(dt=Ca||Vm(n,a,dt,s,at,ct,H)||e!==null&&e.dependencies!==null&&bl(e.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ct,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ct,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ct),f.props=s,f.state=ct,f.context=H,s=dt):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Vl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=gr(n,e.child,null,u),n.child=gr(n,null,a,u)):wn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ea(e,n,u),e}function ag(e,n,a,s){return ur(),n.flags|=256,wn(e,n,a,s),n.child}var ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(e){return{baseLanes:e,cachePool:Yp()}}function df(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=$n),e}function rg(e,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(u?Na(n):La(),(e=Ke)?(e=d0(e,fi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:Ni,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=Bp(e),a.return=n,n.child=a,An=n,Ke=null)):e=null,e===null)throw Ra(n);return Zf(e)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,u?(La(),u=n.mode,E=kl({mode:"hidden",children:E},u),s=cr(s,u,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=hf(a),s.childLanes=df(e,v,a),n.memoizedState=ff,So(null,s)):(Na(n),pf(n,E))}var H=e.memoizedState;if(H!==null&&(E=H.dehydrated,E!==null)){if(f)n.flags&256?(Na(n),n.flags&=-257,n=mf(e,n,a)):n.memoizedState!==null?(La(),n.child=e.child,n.flags|=128,n=null):(La(),E=s.fallback,u=n.mode,s=kl({mode:"visible",children:s.children},u),E=cr(E,u,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,gr(n,e.child,null,a),s=n.child,s.memoizedState=hf(a),s.childLanes=df(e,v,a),n.memoizedState=ff,n=So(null,s));else if(Na(n),Zf(E)){if(v=E.nextSibling&&E.nextSibling.dataset,v)var et=v.dgst;v=et,s=Error(r(419)),s.stack="",s.digest=v,lo({value:s,source:null,stack:null}),n=mf(e,n,a)}else if(un||Kr(e,n,a,!1),v=(a&e.childLanes)!==0,un||v){if(v=qe,v!==null&&(s=Ir(v,a),s!==0&&s!==H.retryLane))throw H.retryLane=s,lr(e,s),Wn(v,e,s),cf;jf(E)||Jl(),n=mf(e,n,a)}else jf(E)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,Ke=di(E.nextSibling),An=n,Me=!0,Aa=null,fi=!1,e!==null&&Gp(n,e),n=pf(n,s.children),n.flags|=4096);return n}return u?(La(),E=s.fallback,u=n.mode,H=e.child,et=H.sibling,s=Zi(H,{mode:"hidden",children:s.children}),s.subtreeFlags=H.subtreeFlags&65011712,et!==null?E=Zi(et,E):(E=cr(E,u,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,So(null,s),s=n.child,E=e.child.memoizedState,E===null?E=hf(a):(u=E.cachePool,u!==null?(H=ln._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Yp(),E={baseLanes:E.baseLanes|a,cachePool:u}),s.memoizedState=E,s.childLanes=df(e,v,a),n.memoizedState=ff,So(e.child,s)):(Na(n),a=e.child,e=a.sibling,a=Zi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function pf(e,n){return n=kl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function kl(e,n){return e=Zn(22,e,null,n),e.lanes=0,e}function mf(e,n,a){return gr(n,e.child,null,a),e=pf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function sg(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Cu(e.return,n,a)}function gf(e,n,a,s,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function og(e,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var v=rn.current,E=(v&2)!==0;if(E?(v=v&1|2,n.flags|=128):v&=1,gt(rn,v),wn(e,n,s,a),s=Me?oo:0,!E&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sg(e,a,n);else if(e.tag===19)sg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ul(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),gf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ul(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}gf(n,!0,a,null,f,s);break;case"together":gf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function ea(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Pa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Kr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Zi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Zi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function _f(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&bl(e)))}function Vx(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),wa(n,ln,e.memoizedState.cache),ur();break;case 27:case 5:Vt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Gu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?rg(e,n,a):(Na(n),e=ea(e,n,a),e!==null?e.sibling:null);Na(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Kr(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return og(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(rn,rn.current),s)break;return null;case 22:return n.lanes=0,$m(e,n,a,n.pendingProps);case 24:wa(n,ln,e.memoizedState.cache)}return ea(e,n,a)}function lg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!_f(e,a)&&(n.flags&128)===0)return un=!1,Vx(e,n,a);un=(e.flags&131072)!==0}else un=!1,Me&&(n.flags&1048576)!==0&&Hp(n,oo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(e=pr(n.elementType),n.type=e,typeof e=="function")Su(e)?(s=vr(e,s),n.tag=1,n=ig(null,n,e,s,a)):(n.tag=0,n=uf(null,n,e,s,a));else{if(e!=null){var u=e.$$typeof;if(u===I){n.tag=11,n=Km(null,n,e,s,a);break t}else if(u===B){n.tag=14,n=Qm(null,n,e,s,a);break t}}throw n=pt(e)||e,Error(r(306,n,""))}}return n;case 0:return uf(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=vr(s,n.pendingProps),ig(e,n,s,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Pu(e,n),go(n,s,null,a);var v=n.memoizedState;if(s=v.cache,wa(n,ln,s),s!==f.cache&&Du(n,[ln],a,!0),mo(),s=v.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ag(e,n,s,a);break t}else if(s!==u){u=li(Error(r(424)),n),lo(u),n=ag(e,n,s,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ke=di(e.firstChild),An=n,Me=!0,Aa=null,fi=!0,a=$p(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ur(),s===u){n=ea(e,n,a);break t}wn(e,n,s,a)}n=n.child}return n;case 26:return Vl(e,n),e===null?(a=x0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,e=n.pendingProps,s=rc(j.current).createElement(a),s[on]=n,s[yn]=e,Cn(s,a,e),T(s),n.stateNode=s):n.memoizedState=x0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Vt(n),e===null&&Me&&(s=n.stateNode=g0(n.type,n.pendingProps,j.current),An=n,fi=!0,u=Ke,Ga(n.type)?(Kf=u,Ke=di(s.firstChild)):Ke=u),wn(e,n,n.pendingProps.children,a),Vl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((u=s=Ke)&&(s=vy(s,n.type,n.pendingProps,fi),s!==null?(n.stateNode=s,An=n,Ke=di(s.firstChild),fi=!1,u=!0):u=!1),u||Ra(n)),Vt(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,s=f.children,Wf(u,f)?s=null:v!==null&&Wf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=ku(e,n,Lx,null,null,a),Po._currentValue=u),Vl(e,n),wn(e,n,s,a),n.child;case 6:return e===null&&Me&&((e=a=Ke)&&(a=xy(a,n.pendingProps,fi),a!==null?(n.stateNode=a,An=n,Ke=null,e=!0):e=!1),e||Ra(n)),null;case 13:return rg(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=gr(n,null,s,a):wn(e,n,s,a),n.child;case 11:return Km(e,n,n.type,n.pendingProps,a);case 7:return wn(e,n,n.pendingProps,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,wa(n,n.type,s.value),wn(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,hr(n),u=Rn(u),s=s(u),n.flags|=1,wn(e,n,s,a),n.child;case 14:return Qm(e,n,n.type,n.pendingProps,a);case 15:return Jm(e,n,n.type,n.pendingProps,a);case 19:return og(e,n,a);case 31:return Gx(e,n,a);case 22:return $m(e,n,a,n.pendingProps);case 24:return hr(n),s=Rn(ln),e===null?(u=Lu(),u===null&&(u=qe,f=Uu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Iu(n),wa(n,ln,u)):((e.lanes&a)!==0&&(Pu(e,n),go(n,null,null,a),mo()),u=e.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),wa(n,ln,s)):(s=f.cache,wa(n,ln,s),s!==u.cache&&Du(n,[ln],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function na(e){e.flags|=4}function vf(e,n,a,s,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Ig())e.flags|=8192;else throw mr=Rl,Ou}else e.flags&=-16777217}function cg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!E0(n))if(Ig())e.flags|=8192;else throw mr=Rl,Ou}function Xl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ie():536870912,e.lanes|=n,ls|=n)}function Mo(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function kx(e,n,a){var s=n.pendingProps;switch(Tu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ji(ln),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zr(n)?na(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ru())),Qe(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(na(n),f!==null?(Qe(n),cg(n,f)):(Qe(n),vf(n,u,null,s,a))):f?f!==e.memoizedState?(na(n),Qe(n),cg(n,f)):(Qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&na(n),Qe(n),vf(n,u,e,s,a)),null;case 27:if(de(n),a=j.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&na(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}e=wt.current,Zr(n)?Vp(n):(e=g0(u,s,a),n.stateNode=e,na(n))}return Qe(n),null;case 5:if(de(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&na(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}if(f=wt.current,Zr(n))Vp(n);else{var v=rc(j.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?v.createElement(u,{is:s.is}):v.createElement(u)}}f[on]=n,f[yn]=s;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Cn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&na(n)}}return Qe(n),vf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&na(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=j.current,Zr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=An,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||r0(e.nodeValue,a)),e||Ra(n,!0)}else e=rc(e).createTextNode(s),e[on]=n,n.stateNode=e}return Qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Zr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[on]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),e=!1}else a=Ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qe(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Zr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[on]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),u=!1}else u=Ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Xl(n,n.updateQueue),Qe(n),null);case 4:return kt(),e===null&&Hf(n.stateNode.containerInfo),Qe(n),null;case 10:return Ji(n.type),Qe(n),null;case 19:if($(rn),s=n.memoizedState,s===null)return Qe(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)Mo(s,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ul(e),f!==null){for(n.flags|=128,Mo(s,!1),e=f.updateQueue,n.updateQueue=e,Xl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)zp(a,e),a=a.sibling;return gt(rn,rn.current&1|2),Me&&Ki(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&b()>Zl&&(n.flags|=128,u=!0,Mo(s,!1),n.lanes=4194304)}else{if(!u)if(e=Ul(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Xl(n,e),Mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Me)return Qe(n),null}else 2*b()-s.renderingStartTime>Zl&&a!==536870912&&(n.flags|=128,u=!0,Mo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=b(),e.sibling=null,a=rn.current,gt(rn,u?a&1|2:a&1),Me&&Ki(n,s.treeForkCount),e):(Qe(n),null);case 22:case 23:return Qn(n),Hu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&Xl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&$(dr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(ln),Qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Xx(e,n){switch(Tu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ji(ln),kt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(r(340));ur()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Qn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ur()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(rn),null;case 4:return kt(),null;case 10:return Ji(n.type),null;case 22:case 23:return Qn(n),Hu(),e!==null&&$(dr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ji(ln),null;case 25:return null;default:return null}}function ug(e,n){switch(Tu(n),n.tag){case 3:Ji(ln),kt();break;case 26:case 27:case 5:de(n);break;case 4:kt();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:$(rn);break;case 10:Ji(n.type);break;case 22:case 23:Qn(n),Hu(),e!==null&&$(dr);break;case 24:Ji(ln)}}function bo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var f=a.create,v=a.inst;s=f(),v.destroy=s}a=a.next}while(a!==u)}}catch(E){Be(n,n.return,E)}}function Oa(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&e)===e){var v=s.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,u=n;var H=a,et=E;try{et()}catch(dt){Be(u,H,dt)}}}s=s.next}while(s!==f)}}catch(dt){Be(n,n.return,dt)}}function fg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{em(n,a)}catch(s){Be(e,e.return,s)}}}function hg(e,n,a){a.props=vr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Be(e,n,s)}}function Eo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(u){Be(e,n,u)}}function Oi(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function dg(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function xf(e,n,a){try{var s=e.stateNode;hy(s,e.type,a,n),s[yn]=n}catch(u){Be(e,e.return,u)}}function pg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function yf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||pg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sf(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi));else if(s!==4&&(s===27&&Ga(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Sf(e,n,a),e=e.sibling;e!==null;)Sf(e,n,a),e=e.sibling}function Wl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ga(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Wl(e,n,a),e=e.sibling;e!==null;)Wl(e,n,a),e=e.sibling}function mg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,s,a),n[on]=e,n[yn]=a}catch(f){Be(e,e.return,f)}}var ia=!1,fn=!1,Mf=!1,gg=typeof WeakSet=="function"?WeakSet:Set,_n=null;function Wx(e,n){if(e=e.containerInfo,kf=hc,e=wp(e),pu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,E=-1,H=-1,et=0,dt=0,_t=e,at=null;e:for(;;){for(var ct;_t!==a||u!==0&&_t.nodeType!==3||(E=v+u),_t!==f||s!==0&&_t.nodeType!==3||(H=v+s),_t.nodeType===3&&(v+=_t.nodeValue.length),(ct=_t.firstChild)!==null;)at=_t,_t=ct;for(;;){if(_t===e)break e;if(at===a&&++et===u&&(E=v),at===f&&++dt===s&&(H=v),(ct=_t.nextSibling)!==null)break;_t=at,at=_t.parentNode}_t=ct}a=E===-1||H===-1?null:{start:E,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xf={focusedElem:e,selectionRange:a},hc=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Wt=vr(a.type,u);e=s.getSnapshotBeforeUpdate(Wt,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Be(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Yf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function _g(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ra(e,a),s&4&&bo(5,a);break;case 1:if(ra(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Be(a,a.return,v)}else{var u=vr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Be(a,a.return,v)}}s&64&&fg(a),s&512&&Eo(a,a.return);break;case 3:if(ra(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{em(e,n)}catch(v){Be(a,a.return,v)}}break;case 27:n===null&&s&4&&mg(a);case 26:case 5:ra(e,a),n===null&&s&4&&dg(a),s&512&&Eo(a,a.return);break;case 12:ra(e,a);break;case 31:ra(e,a),s&4&&yg(e,a);break;case 13:ra(e,a),s&4&&Sg(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ty.bind(null,a),yy(e,a))));break;case 22:if(s=a.memoizedState!==null||ia,!s){n=n!==null&&n.memoizedState!==null||fn,u=ia;var f=fn;ia=s,(fn=n)&&!f?sa(e,a,(a.subtreeFlags&8772)!==0):ra(e,a),ia=u,fn=f}break;case 30:break;default:ra(e,a)}}function vg(e){var n=e.alternate;n!==null&&(e.alternate=null,vg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Qs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Gn=!1;function aa(e,n,a){for(a=a.child;a!==null;)xg(e,n,a),a=a.sibling}function xg(e,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(xt,a)}catch{}switch(a.tag){case 26:fn||Oi(a,n),aa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Oi(a,n);var s=$e,u=Gn;Ga(a.type)&&($e=a.stateNode,Gn=!1),aa(e,n,a),Lo(a.stateNode),$e=s,Gn=u;break;case 5:fn||Oi(a,n);case 6:if(s=$e,u=Gn,$e=null,aa(e,n,a),$e=s,Gn=u,$e!==null)if(Gn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:$e!==null&&(Gn?(e=$e,f0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),gs(e)):f0($e,a.stateNode));break;case 4:s=$e,u=Gn,$e=a.stateNode.containerInfo,Gn=!0,aa(e,n,a),$e=s,Gn=u;break;case 0:case 11:case 14:case 15:Oa(2,a,n),fn||Oa(4,a,n),aa(e,n,a);break;case 1:fn||(Oi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&hg(a,n,s)),aa(e,n,a);break;case 21:aa(e,n,a);break;case 22:fn=(s=fn)||a.memoizedState!==null,aa(e,n,a),fn=s;break;default:aa(e,n,a)}}function yg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{gs(e)}catch(a){Be(n,n.return,a)}}}function Sg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gs(e)}catch(a){Be(n,n.return,a)}}function qx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new gg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new gg),n;default:throw Error(r(435,e.tag))}}function ql(e,n){var a=qx(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=ey.bind(null,e,s);s.then(u,u)}})}function Vn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=e,v=n,E=v;t:for(;E!==null;){switch(E.tag){case 27:if(Ga(E.type)){$e=E.stateNode,Gn=!1;break t}break;case 5:$e=E.stateNode,Gn=!1;break t;case 3:case 4:$e=E.stateNode.containerInfo,Gn=!0;break t}E=E.return}if($e===null)throw Error(r(160));xg(f,v,u),$e=null,Gn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Mg(n,e),n=n.sibling}var bi=null;function Mg(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Vn(n,e),kn(e),s&4&&(Oa(3,e,e.return),bo(3,e),Oa(5,e,e.return));break;case 1:Vn(n,e),kn(e),s&512&&(fn||a===null||Oi(a,a.return)),s&64&&ia&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=bi;if(Vn(n,e),kn(e),s&512&&(fn||a===null||Oi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ir]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,s,a),f[on]=e,T(f),s=f;break t;case"link":var v=M0("link","href",u).get(s+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(f=v[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break e}}f=u.createElement(s),Cn(f,s,a),u.head.appendChild(f);break;case"meta":if(v=M0("meta","content",u).get(s+(a.content||""))){for(E=0;E<v.length;E++)if(f=v[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break e}}f=u.createElement(s),Cn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[on]=e,T(f),s=f}e.stateNode=s}else b0(u,e.type,e.stateNode);else e.stateNode=S0(u,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?b0(u,e.type,e.stateNode):S0(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&xf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,e),kn(e),s&512&&(fn||a===null||Oi(a,a.return)),a!==null&&s&4&&xf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,e),kn(e),s&512&&(fn||a===null||Oi(a,a.return)),e.flags&32){u=e.stateNode;try{dn(u,"")}catch(Wt){Be(e,e.return,Wt)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,xf(e,u,a!==null?a.memoizedProps:u)),s&1024&&(Mf=!0);break;case 6:if(Vn(n,e),kn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Wt){Be(e,e.return,Wt)}}break;case 3:if(lc=null,u=bi,bi=sc(n.containerInfo),Vn(n,e),bi=u,kn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{gs(n.containerInfo)}catch(Wt){Be(e,e.return,Wt)}Mf&&(Mf=!1,bg(e));break;case 4:s=bi,bi=sc(e.stateNode.containerInfo),Vn(n,e),kn(e),bi=s;break;case 12:Vn(n,e),kn(e);break;case 31:Vn(n,e),kn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,ql(e,s)));break;case 13:Vn(n,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jl=b()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,ql(e,s)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,et=ia,dt=fn;if(ia=et||u,fn=dt||H,Vn(n,e),fn=dt,ia=et,kn(e),s&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ia||fn||xr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=H.stateNode;var _t=H.memoizedProps.style,at=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;E.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(Wt){Be(H,H.return,Wt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Wt){Be(H,H.return,Wt)}}}else if(n.tag===18){if(a===null){H=n;try{var ct=H.stateNode;u?h0(ct,!0):h0(H.stateNode,!1)}catch(Wt){Be(H,H.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,ql(e,a))));break;case 19:Vn(n,e),kn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,ql(e,s)));break;case 30:break;case 21:break;default:Vn(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(pg(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=yf(e);Wl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(dn(v,""),a.flags&=-33);var E=yf(e);Wl(e,E,v);break;case 3:case 4:var H=a.stateNode.containerInfo,et=yf(e);Sf(e,et,H);break;default:throw Error(r(161))}}catch(dt){Be(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function bg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;bg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ra(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)_g(e,n.alternate,n),n=n.sibling}function xr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),xr(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&hg(n,n.return,a),xr(n);break;case 27:Lo(n.stateNode);case 26:case 5:Oi(n,n.return),xr(n);break;case 22:n.memoizedState===null&&xr(n);break;case 30:xr(n);break;default:xr(n)}e=e.sibling}}function sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:sa(u,f,a),bo(4,f);break;case 1:if(sa(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Be(s,s.return,et)}if(s=f,u=s.updateQueue,u!==null){var E=s.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)tm(H[u],E)}catch(et){Be(s,s.return,et)}}a&&v&64&&fg(f),Eo(f,f.return);break;case 27:mg(f);case 26:case 5:sa(u,f,a),a&&s===null&&v&4&&dg(f),Eo(f,f.return);break;case 12:sa(u,f,a);break;case 31:sa(u,f,a),a&&v&4&&yg(u,f);break;case 13:sa(u,f,a),a&&v&4&&Sg(u,f);break;case 22:f.memoizedState===null&&sa(u,f,a),Eo(f,f.return);break;case 30:break;default:sa(u,f,a)}n=n.sibling}}function bf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&co(a))}function Ef(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e))}function Ei(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Eg(e,n,a,s),n=n.sibling}function Eg(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(e,n,a,s),u&2048&&bo(9,n);break;case 1:Ei(e,n,a,s);break;case 3:Ei(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e)));break;case 12:if(u&2048){Ei(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,E=f.onPostCommit;typeof E=="function"&&E(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Be(n,n.return,H)}}else Ei(e,n,a,s);break;case 31:Ei(e,n,a,s);break;case 13:Ei(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(e,n,a,s):To(e,n):f._visibility&2?Ei(e,n,a,s):(f._visibility|=2,rs(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&bf(v,n);break;case 24:Ei(e,n,a,s),u&2048&&Ef(n.alternate,n);break;default:Ei(e,n,a,s)}}function rs(e,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,E=a,H=s,et=v.flags;switch(v.tag){case 0:case 11:case 15:rs(f,v,E,H,u),bo(8,v);break;case 23:break;case 22:var dt=v.stateNode;v.memoizedState!==null?dt._visibility&2?rs(f,v,E,H,u):To(f,v):(dt._visibility|=2,rs(f,v,E,H,u)),u&&et&2048&&bf(v.alternate,v);break;case 24:rs(f,v,E,H,u),u&&et&2048&&Ef(v.alternate,v);break;default:rs(f,v,E,H,u)}n=n.sibling}}function To(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:To(a,s),u&2048&&bf(s.alternate,s);break;case 24:To(a,s),u&2048&&Ef(s.alternate,s);break;default:To(a,s)}n=n.sibling}}var Ao=8192;function ss(e,n,a){if(e.subtreeFlags&Ao)for(e=e.child;e!==null;)Tg(e,n,a),e=e.sibling}function Tg(e,n,a){switch(e.tag){case 26:ss(e,n,a),e.flags&Ao&&e.memoizedState!==null&&Ny(a,bi,e.memoizedState,e.memoizedProps);break;case 5:ss(e,n,a);break;case 3:case 4:var s=bi;bi=sc(e.stateNode.containerInfo),ss(e,n,a),bi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=Ao,Ao=16777216,ss(e,n,a),Ao=s):ss(e,n,a));break;default:ss(e,n,a)}}function Ag(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ro(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,wg(s,e)}Ag(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rg(e),e=e.sibling}function Rg(e){switch(e.tag){case 0:case 11:case 15:Ro(e),e.flags&2048&&Oa(9,e,e.return);break;case 3:Ro(e);break;case 12:Ro(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Yl(e)):Ro(e);break;default:Ro(e)}}function Yl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,wg(s,e)}Ag(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),Yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yl(n));break;default:Yl(n)}e=e.sibling}}function wg(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:co(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,_n=s;else t:for(a=e;_n!==null;){s=_n;var u=s.sibling,f=s.return;if(vg(s),s===a){_n=null;break t}if(u!==null){u.return=f,_n=u;break t}_n=f}}}var Yx={getCacheForType:function(e){var n=Rn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Rn(ln).controller.signal}},jx=typeof WeakMap=="function"?WeakMap:Map,Le=0,qe=null,ve=null,ye=0,ze=0,Jn=null,Ia=!1,os=!1,Tf=!1,oa=0,nn=0,Pa=0,yr=0,Af=0,$n=0,ls=0,wo=null,Xn=null,Rf=!1,jl=0,Cg=0,Zl=1/0,Kl=null,za=null,pn=0,Ba=null,cs=null,la=0,wf=0,Cf=null,Dg=null,Co=0,Df=null;function ti(){return(Le&2)!==0&&ye!==0?ye&-ye:N.T!==null?Pf():Zs()}function Ug(){if($n===0)if((ye&536870912)===0||Me){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),$n=e}else $n=536870912;return e=Kn.current,e!==null&&(e.flags|=32),$n}function Wn(e,n,a){(e===qe&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(us(e,0),Fa(e,ye,$n,!1)),Un(e,a),((Le&2)===0||e!==qe)&&(e===qe&&((Le&2)===0&&(yr|=a),nn===4&&Fa(e,ye,$n,!1)),Ii(e))}function Ng(e,n,a){if((Le&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ct(e,n),u=s?Qx(e,n):Nf(e,n,!0),f=s;do{if(u===0){os&&!s&&Fa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Zx(a)){u=Nf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var E=e;u=wo;var H=E.current.memoizedState.isDehydrated;if(H&&(us(E,v).flags|=256),v=Nf(E,v,!1),v!==2){if(Tf&&!H){E.errorRecoveryDisabledLanes|=f,yr|=f,u=4;break t}f=Xn,Xn=u,f!==null&&(Xn===null?Xn=f:Xn.push.apply(Xn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){us(e,0),Fa(e,n,0,!0);break}t:{switch(s=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Fa(s,n,$n,!Ia);break t;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=jl+300-b(),10<u)){if(Fa(s,n,$n,!Ia),vt(s,0,!0)!==0)break t;la=n,s.timeoutHandle=c0(Lg.bind(null,s,a,Xn,Kl,Rf,n,$n,yr,ls,Ia,f,"Throttled",-0,0),u);break t}Lg(s,a,Xn,Kl,Rf,n,$n,yr,ls,Ia,f,null,-0,0)}}break}while(!0);Ii(e)}function Lg(e,n,a,s,u,f,v,E,H,et,dt,_t,at,ct){if(e.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},Tg(n,f,_t);var Wt=(f&62914560)===f?jl-b():(f&4194048)===f?Cg-b():0;if(Wt=Ly(_t,Wt),Wt!==null){la=f,e.cancelPendingCommit=Wt(Gg.bind(null,e,n,f,a,s,u,v,E,H,dt,_t,null,at,ct)),Fa(e,f,v,!et);return}}Gg(e,n,f,a,s,u,v,E,H)}function Zx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fa(e,n,a,s){n&=~Af,n&=~yr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var f=31-Ot(u),v=1<<f;s[f]=-1,u&=~v}a!==0&&ll(e,a,n)}function Ql(){return(Le&6)===0?(Do(0),!1):!0}function Uf(){if(ve!==null){if(ze===0)var e=ve.return;else e=ve,Qi=fr=null,qu(e),ts=null,fo=0,e=ve;for(;e!==null;)ug(e.alternate,e),e=e.return;ve=null}}function us(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,my(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),la=0,Uf(),qe=e,ve=a=Zi(e.current,null),ye=n,ze=0,Jn=null,Ia=!1,os=Ct(e,n),Tf=!1,ls=$n=Af=yr=Pa=nn=0,Xn=wo=null,Rf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-Ot(s),f=1<<u;n|=e[u],s&=~f}return oa=n,vl(),a}function Og(e,n){le=null,N.H=yo,n===$r||n===Al?(n=Kp(),ze=3):n===Ou?(n=Kp(),ze=4):ze=n===cf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,ve===null&&(nn=1,Hl(e,li(n,e.current)))}function Ig(){var e=Kn.current;return e===null?!0:(ye&4194048)===ye?hi===null:(ye&62914560)===ye||(ye&536870912)!==0?e===hi:!1}function Pg(){var e=N.H;return N.H=yo,e===null?yo:e}function zg(){var e=N.A;return N.A=Yx,e}function Jl(){nn=4,Ia||(ye&4194048)!==ye&&Kn.current!==null||(os=!0),(Pa&134217727)===0&&(yr&134217727)===0||qe===null||Fa(qe,ye,$n,!1)}function Nf(e,n,a){var s=Le;Le|=2;var u=Pg(),f=zg();(qe!==e||ye!==n)&&(Kl=null,us(e,n)),n=!1;var v=nn;t:do try{if(ze!==0&&ve!==null){var E=ve,H=Jn;switch(ze){case 8:Uf(),v=6;break t;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var et=ze;if(ze=0,Jn=null,fs(e,E,H,et),a&&os){v=0;break t}break;default:et=ze,ze=0,Jn=null,fs(e,E,H,et)}}Kx(),v=nn;break}catch(dt){Og(e,dt)}while(!0);return n&&e.shellSuspendCounter++,Qi=fr=null,Le=s,N.H=u,N.A=f,ve===null&&(qe=null,ye=0,vl()),v}function Kx(){for(;ve!==null;)Bg(ve)}function Qx(e,n){var a=Le;Le|=2;var s=Pg(),u=zg();qe!==e||ye!==n?(Kl=null,Zl=b()+500,us(e,n)):os=Ct(e,n);t:do try{if(ze!==0&&ve!==null){n=ve;var f=Jn;e:switch(ze){case 1:ze=0,Jn=null,fs(e,n,f,1);break;case 2:case 9:if(jp(f)){ze=0,Jn=null,Fg(n);break}n=function(){ze!==2&&ze!==9||qe!==e||(ze=7),Ii(e)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:jp(f)?(ze=0,Jn=null,Fg(n)):(ze=0,Jn=null,fs(e,n,f,7));break;case 5:var v=null;switch(ve.tag){case 26:v=ve.memoizedState;case 5:case 27:var E=ve;if(v?E0(v):E.stateNode.complete){ze=0,Jn=null;var H=E.sibling;if(H!==null)ve=H;else{var et=E.return;et!==null?(ve=et,$l(et)):ve=null}break e}}ze=0,Jn=null,fs(e,n,f,5);break;case 6:ze=0,Jn=null,fs(e,n,f,6);break;case 8:Uf(),nn=6;break t;default:throw Error(r(462))}}Jx();break}catch(dt){Og(e,dt)}while(!0);return Qi=fr=null,N.H=s,N.A=u,Le=a,ve!==null?0:(qe=null,ye=0,vl(),nn)}function Jx(){for(;ve!==null&&!qt();)Bg(ve)}function Bg(e){var n=lg(e.alternate,e,oa);e.memoizedProps=e.pendingProps,n===null?$l(e):ve=n}function Fg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=ng(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=ng(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:qu(n);default:ug(a,n),n=ve=zp(n,oa),n=lg(a,n,oa)}e.memoizedProps=e.pendingProps,n===null?$l(e):ve=n}function fs(e,n,a,s){Qi=fr=null,qu(n),ts=null,fo=0;var u=n.return;try{if(Hx(e,u,n,a,ye)){nn=1,Hl(e,li(a,e.current)),ve=null;return}}catch(f){if(u!==null)throw ve=u,f;nn=1,Hl(e,li(a,e.current)),ve=null;return}n.flags&32768?(Me||s===1?e=!0:os||(ye&536870912)!==0?e=!1:(Ia=e=!0,(s===2||s===9||s===3||s===6)&&(s=Kn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Hg(n,e)):$l(n)}function $l(e){var n=e;do{if((n.flags&32768)!==0){Hg(n,Ia);return}e=n.return;var a=kx(n.alternate,n,oa);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);nn===0&&(nn=5)}function Hg(e,n){do{var a=Xx(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);nn=6,ve=null}function Gg(e,n,a,s,u,f,v,E,H){e.cancelPendingCommit=null;do tc();while(pn!==0);if((Le&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=xu,xi(e,a,f,v,E,H),e===qe&&(ve=qe=null,ye=0),cs=n,Ba=e,la=a,wf=f,Cf=u,Dg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ny(ot,function(){return qg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=N.T,N.T=null,u=z.p,z.p=2,v=Le,Le|=4;try{Wx(e,n,a)}finally{Le=v,z.p=u,N.T=s}}pn=1,Vg(),kg(),Xg()}}function Vg(){if(pn===1){pn=0;var e=Ba,n=cs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var s=z.p;z.p=2;var u=Le;Le|=4;try{Mg(n,e);var f=Xf,v=wp(e.containerInfo),E=f.focusedElem,H=f.selectionRange;if(v!==E&&E&&E.ownerDocument&&Rp(E.ownerDocument.documentElement,E)){if(H!==null&&pu(E)){var et=H.start,dt=H.end;if(dt===void 0&&(dt=et),"selectionStart"in E)E.selectionStart=et,E.selectionEnd=Math.min(dt,E.value.length);else{var _t=E.ownerDocument||document,at=_t&&_t.defaultView||window;if(at.getSelection){var ct=at.getSelection(),Wt=E.textContent.length,ee=Math.min(H.start,Wt),Ve=H.end===void 0?ee:Math.min(H.end,Wt);!ct.extend&&ee>Ve&&(v=Ve,Ve=ee,ee=v);var Y=Ap(E,ee),k=Ap(E,Ve);if(Y&&k&&(ct.rangeCount!==1||ct.anchorNode!==Y.node||ct.anchorOffset!==Y.offset||ct.focusNode!==k.node||ct.focusOffset!==k.offset)){var J=_t.createRange();J.setStart(Y.node,Y.offset),ct.removeAllRanges(),ee>Ve?(ct.addRange(J),ct.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),ct.addRange(J))}}}}for(_t=[],ct=E;ct=ct.parentNode;)ct.nodeType===1&&_t.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<_t.length;E++){var mt=_t[E];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}hc=!!kf,Xf=kf=null}finally{Le=u,z.p=s,N.T=a}}e.current=n,pn=2}}function kg(){if(pn===2){pn=0;var e=Ba,n=cs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var s=z.p;z.p=2;var u=Le;Le|=4;try{_g(e,n.alternate,n)}finally{Le=u,z.p=s,N.T=a}}pn=3}}function Xg(){if(pn===4||pn===3){pn=0,D();var e=Ba,n=cs,a=la,s=Dg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,cs=Ba=null,Wg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(za=null),Pr(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(xt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=N.T,u=z.p,z.p=2,N.T=null;try{for(var f=e.onRecoverableError,v=0;v<s.length;v++){var E=s[v];f(E.value,{componentStack:E.stack})}}finally{N.T=n,z.p=u}}(la&3)!==0&&tc(),Ii(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Df?Co++:(Co=0,Df=e):Co=0,Do(0)}}function Wg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,co(n)))}function tc(){return Vg(),kg(),Xg(),qg()}function qg(){if(pn!==5)return!1;var e=Ba,n=wf;wf=0;var a=Pr(la),s=N.T,u=z.p;try{z.p=32>a?32:a,N.T=null,a=Cf,Cf=null;var f=Ba,v=la;if(pn=0,cs=Ba=null,la=0,(Le&6)!==0)throw Error(r(331));var E=Le;if(Le|=4,Rg(f.current),Eg(f,f.current,v,a),Le=E,Do(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(xt,f)}catch{}return!0}finally{z.p=u,N.T=s,Wg(e,n)}}function Yg(e,n,a){n=li(a,n),n=lf(e.stateNode,n,2),e=Ua(e,n,2),e!==null&&(Un(e,2),Ii(e))}function Be(e,n,a){if(e.tag===3)Yg(e,e,a);else for(;n!==null;){if(n.tag===3){Yg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(za===null||!za.has(s))){e=li(a,e),a=jm(2),s=Ua(n,a,2),s!==null&&(Zm(a,s,n,e),Un(s,2),Ii(s));break}}n=n.return}}function Lf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new jx;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Tf=!0,u.add(a),e=$x.bind(null,e,n,a),n.then(e,e))}function $x(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(ye&a)===a&&(nn===4||nn===3&&(ye&62914560)===ye&&300>b()-jl?(Le&2)===0&&us(e,0):Af|=a,ls===ye&&(ls=0)),Ii(e)}function jg(e,n){n===0&&(n=Ie()),e=lr(e,n),e!==null&&(Un(e,n),Ii(e))}function ty(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),jg(e,a)}function ey(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),jg(e,a)}function ny(e,n){return _e(e,n)}var ec=null,hs=null,Of=!1,nc=!1,If=!1,Ha=0;function Ii(e){e!==hs&&e.next===null&&(hs===null?ec=hs=e:hs=hs.next=e),nc=!0,Of||(Of=!0,ay())}function Do(e,n){if(!If&&nc){If=!0;do for(var a=!1,s=ec;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var v=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=u&~(v&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Jg(s,f))}else f=ye,f=vt(s,s===qe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ct(s,f)||(a=!0,Jg(s,f));s=s.next}while(a);If=!1}}function iy(){Zg()}function Zg(){nc=Of=!1;var e=0;Ha!==0&&py()&&(e=Ha);for(var n=b(),a=null,s=ec;s!==null;){var u=s.next,f=Kg(s,n);f===0?(s.next=null,a===null?ec=u:a.next=u,u===null&&(hs=a)):(a=s,(e!==0||(f&3)!==0)&&(nc=!0)),s=u}pn!==0&&pn!==5||Do(e),Ha!==0&&(Ha=0)}function Kg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Ot(f),E=1<<v,H=u[v];H===-1?((E&a)===0||(E&s)!==0)&&(u[v]=ie(E,n)):H<=n&&(e.expiredLanes|=E),f&=~E}if(n=qe,a=ye,a=vt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Ae(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Ae(s),Pr(a)){case 2:case 8:a=ut;break;case 32:a=ot;break;case 268435456:a=Mt;break;default:a=ot}return s=Qg.bind(null,e),a=_e(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Ae(s),e.callbackPriority=2,e.callbackNode=null,2}function Qg(e,n){if(pn!==0&&pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(tc()&&e.callbackNode!==a)return null;var s=ye;return s=vt(e,e===qe?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Ng(e,s,n),Kg(e,b()),e.callbackNode!=null&&e.callbackNode===a?Qg.bind(null,e):null)}function Jg(e,n){if(tc())return null;Ng(e,n,!0)}function ay(){gy(function(){(Le&6)!==0?_e(tt,iy):Zg()})}function Pf(){if(Ha===0){var e=Qr;e===0&&(e=zt,zt<<=1,(zt&261888)===0&&(zt=256)),Ha=e}return Ha}function $g(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ul(""+e)}function t0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ry(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=$g((u[yn]||null).action),v=s.submitter;v&&(n=(n=v[yn]||null)?$g(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var E=new pl("action","action",null,s,u);e.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ha!==0){var H=v?t0(u,v):new FormData(u);ef(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(E.preventDefault(),H=v?t0(u,v):new FormData(u),ef(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var zf=0;zf<vu.length;zf++){var Bf=vu[zf],sy=Bf.toLowerCase(),oy=Bf[0].toUpperCase()+Bf.slice(1);Mi(sy,"on"+oy)}Mi(Up,"onAnimationEnd"),Mi(Np,"onAnimationIteration"),Mi(Lp,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(bx,"onTransitionRun"),Mi(Ex,"onTransitionStart"),Mi(Tx,"onTransitionCancel"),Mi(Op,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),it("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),it("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),it("onBeforeInput",["compositionend","keypress","textInput","paste"]),it("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),it("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),it("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ly=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function e0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var v=s.length-1;0<=v;v--){var E=s[v],H=E.instance,et=E.currentTarget;if(E=E.listener,H!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=et;try{f(u)}catch(dt){_l(dt)}u.currentTarget=null,f=H}else for(v=0;v<s.length;v++){if(E=s[v],H=E.instance,et=E.currentTarget,E=E.listener,H!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=et;try{f(u)}catch(dt){_l(dt)}u.currentTarget=null,f=H}}}}function xe(e,n){var a=n[zr];a===void 0&&(a=n[zr]=new Set);var s=e+"__bubble";a.has(s)||(n0(n,e,2,!1),a.add(s))}function Ff(e,n,a){var s=0;n&&(s|=4),n0(a,e,s,n)}var ic="_reactListening"+Math.random().toString(36).slice(2);function Hf(e){if(!e[ic]){e[ic]=!0,q.forEach(function(a){a!=="selectionchange"&&(ly.has(a)||Ff(a,!1,e),Ff(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ic]||(n[ic]=!0,Ff("selectionchange",!1,n))}}function n0(e,n,a,s){switch(U0(n)){case 2:var u=Py;break;case 8:u=zy;break;default:u=eh}a=u.bind(null,n,a,e),u=void 0,!ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Gf(e,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var E=s.stateNode.containerInfo;if(E===u)break;if(v===4)for(v=s.return;v!==null;){var H=v.tag;if((H===3||H===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;E!==null;){if(v=Sa(E),v===null)return;if(H=v.tag,H===5||H===6||H===26||H===27){s=f=v;continue t}E=E.parentNode}}s=s.return}op(function(){var et=f,dt=iu(a),_t=[];t:{var at=Ip.get(e);if(at!==void 0){var ct=pl,Wt=e;switch(e){case"keypress":if(hl(a)===0)break t;case"keydown":case"keyup":ct=ex;break;case"focusin":Wt="focus",ct=cu;break;case"focusout":Wt="blur",ct=cu;break;case"beforeblur":case"afterblur":ct=cu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=ax;break;case Up:case Np:case Lp:ct=qv;break;case Op:ct=sx;break;case"scroll":case"scrollend":ct=Gv;break;case"wheel":ct=lx;break;case"copy":case"cut":case"paste":ct=jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=hp;break;case"toggle":case"beforetoggle":ct=ux}var ee=(n&4)!==0,Ve=!ee&&(e==="scroll"||e==="scrollend"),Y=ee?at!==null?at+"Capture":null:at;ee=[];for(var k=et,J;k!==null;){var mt=k;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||Y===null||(mt=Js(k,Y),mt!=null&&ee.push(No(k,mt,J))),Ve)break;k=k.return}0<ee.length&&(at=new ct(at,Wt,null,a,dt),_t.push({event:at,listeners:ee}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",at&&a!==nu&&(Wt=a.relatedTarget||a.fromElement)&&(Sa(Wt)||Wt[yi]))break t;if((ct||at)&&(at=dt.window===dt?dt:(at=dt.ownerDocument)?at.defaultView||at.parentWindow:window,ct?(Wt=a.relatedTarget||a.toElement,ct=et,Wt=Wt?Sa(Wt):null,Wt!==null&&(Ve=c(Wt),ee=Wt.tag,Wt!==Ve||ee!==5&&ee!==27&&ee!==6)&&(Wt=null)):(ct=null,Wt=et),ct!==Wt)){if(ee=up,mt="onMouseLeave",Y="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ee=hp,mt="onPointerLeave",Y="onPointerEnter",k="pointer"),Ve=ct==null?at:ar(ct),J=Wt==null?at:ar(Wt),at=new ee(mt,k+"leave",ct,a,dt),at.target=Ve,at.relatedTarget=J,mt=null,Sa(dt)===et&&(ee=new ee(Y,k+"enter",Wt,a,dt),ee.target=J,ee.relatedTarget=Ve,mt=ee),Ve=mt,ct&&Wt)e:{for(ee=cy,Y=ct,k=Wt,J=0,mt=Y;mt;mt=ee(mt))J++;mt=0;for(var Jt=k;Jt;Jt=ee(Jt))mt++;for(;0<J-mt;)Y=ee(Y),J--;for(;0<mt-J;)k=ee(k),mt--;for(;J--;){if(Y===k||k!==null&&Y===k.alternate){ee=Y;break e}Y=ee(Y),k=ee(k)}ee=null}else ee=null;ct!==null&&i0(_t,at,ct,ee,!1),Wt!==null&&Ve!==null&&i0(_t,Ve,Wt,ee,!0)}}t:{if(at=et?ar(et):window,ct=at.nodeName&&at.nodeName.toLowerCase(),ct==="select"||ct==="input"&&at.type==="file")var Ce=yp;else if(vp(at))if(Sp)Ce=yx;else{Ce=vx;var Zt=_x}else ct=at.nodeName,!ct||ct.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?et&&Si(et.elementType)&&(Ce=yp):Ce=xx;if(Ce&&(Ce=Ce(e,et))){xp(_t,Ce,a,dt);break t}Zt&&Zt(e,at,et),e==="focusout"&&et&&at.type==="number"&&et.memoizedProps.value!=null&&Mn(at,"number",at.value)}switch(Zt=et?ar(et):window,e){case"focusin":(vp(Zt)||Zt.contentEditable==="true")&&(kr=Zt,mu=et,so=null);break;case"focusout":so=mu=kr=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Cp(_t,a,dt);break;case"selectionchange":if(Mx)break;case"keydown":case"keyup":Cp(_t,a,dt)}var ue;if(fu)t:{switch(e){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Vr?gp(e,a)&&(Se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(dp&&a.locale!=="ko"&&(Vr||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Vr&&(ue=lp()):(Ea=dt,su="value"in Ea?Ea.value:Ea.textContent,Vr=!0)),Zt=ac(et,Se),0<Zt.length&&(Se=new fp(Se,e,null,a,dt),_t.push({event:Se,listeners:Zt}),ue?Se.data=ue:(ue=_p(a),ue!==null&&(Se.data=ue)))),(ue=hx?dx(e,a):px(e,a))&&(Se=ac(et,"onBeforeInput"),0<Se.length&&(Zt=new fp("onBeforeInput","beforeinput",null,a,dt),_t.push({event:Zt,listeners:Se}),Zt.data=ue)),ry(_t,e,et,a,dt)}e0(_t,n)})}function No(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ac(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Js(e,a),u!=null&&s.unshift(No(e,u,f)),u=Js(e,n),u!=null&&s.push(No(e,u,f))),e.tag===3)return s;e=e.return}return[]}function cy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function i0(e,n,a,s,u){for(var f=n._reactName,v=[];a!==null&&a!==s;){var E=a,H=E.alternate,et=E.stateNode;if(E=E.tag,H!==null&&H===s)break;E!==5&&E!==26&&E!==27||et===null||(H=et,u?(et=Js(a,f),et!=null&&v.unshift(No(a,et,H))):u||(et=Js(a,f),et!=null&&v.push(No(a,et,H)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var uy=/\r\n?/g,fy=/\u0000|\uFFFD/g;function a0(e){return(typeof e=="string"?e:""+e).replace(uy,`
`).replace(fy,"")}function r0(e,n){return n=a0(n),a0(e)===n}function Ge(e,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||dn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&dn(e,""+s);break;case"className":$t(e,"class",s);break;case"tabIndex":$t(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":$t(e,a,s);break;case"style":Fr(e,s,f);break;case"data":if(n!=="object"){$t(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=ul(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(e,n,"name",u.name,u,null),Ge(e,n,"formEncType",u.formEncType,u,null),Ge(e,n,"formMethod",u.formMethod,u,null),Ge(e,n,"formTarget",u.formTarget,u,null)):(Ge(e,n,"encType",u.encType,u,null),Ge(e,n,"method",u.method,u,null),Ge(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=ul(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Yi);break;case"onScroll":s!=null&&xe("scroll",e);break;case"onScrollEnd":s!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=ul(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Yt(e,"popover",s);break;case"xlinkActuate":jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":jt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":jt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":jt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":jt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Yt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Fv.get(a)||a,Yt(e,a,s))}}function Vf(e,n,a,s,u,f){switch(a){case"style":Fr(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?dn(e,s):(typeof s=="number"||typeof s=="bigint")&&dn(e,""+s);break;case"onScroll":s!=null&&xe("scroll",e);break;case"onScrollEnd":s!=null&&xe("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Yt(e,a,s)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,f,v,a,null)}}u&&Ge(e,n,"srcSet",a.srcSet,a,null),s&&Ge(e,n,"src",a.src,a,null);return;case"input":xe("invalid",e);var E=f=v=u=null,H=null,et=null;for(s in a)if(a.hasOwnProperty(s)){var dt=a[s];if(dt!=null)switch(s){case"name":u=dt;break;case"type":v=dt;break;case"checked":H=dt;break;case"defaultChecked":et=dt;break;case"value":f=dt;break;case"defaultValue":E=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Ge(e,n,s,dt,a,null)}}qi(e,f,E,H,et,v,u,!1);return;case"select":xe("invalid",e),s=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":f=E;break;case"defaultValue":v=E;break;case"multiple":s=E;default:Ge(e,n,u,E,a,null)}n=f,a=v,e.multiple=!!s,n!=null?si(e,!!s,n,!1):a!=null&&si(e,!!s,a,!0);return;case"textarea":xe("invalid",e),f=u=s=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":s=E;break;case"defaultValue":u=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Ge(e,n,v,E,a,null)}bn(e,s,u,f);return;case"option":for(H in a)a.hasOwnProperty(H)&&(s=a[H],s!=null)&&(H==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":Ge(e,n,H,s,a,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(s=0;s<Uo.length;s++)xe(Uo[s],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(s=a[et],s!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,et,s,a,null)}return;default:if(Si(n)){for(dt in a)a.hasOwnProperty(dt)&&(s=a[dt],s!==void 0&&Vf(e,n,dt,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Ge(e,n,E,s,a,null))}function hy(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,E=null,H=null,et=null,dt=null;for(ct in a){var _t=a[ct];if(a.hasOwnProperty(ct)&&_t!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":H=_t;default:s.hasOwnProperty(ct)||Ge(e,n,ct,null,s,_t)}}for(var at in s){var ct=s[at];if(_t=a[at],s.hasOwnProperty(at)&&(ct!=null||_t!=null))switch(at){case"type":f=ct;break;case"name":u=ct;break;case"checked":et=ct;break;case"defaultChecked":dt=ct;break;case"value":v=ct;break;case"defaultValue":E=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:ct!==_t&&Ge(e,n,at,ct,s,_t)}}Sn(e,v,E,H,et,dt,f,u);return;case"select":ct=v=E=at=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ct=H;default:s.hasOwnProperty(f)||Ge(e,n,f,null,s,H)}for(u in s)if(f=s[u],H=a[u],s.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":at=f;break;case"defaultValue":E=f;break;case"multiple":v=f;default:f!==H&&Ge(e,n,u,f,s,H)}n=E,a=v,s=ct,at!=null?si(e,!!a,at,!1):!!s!=!!a&&(n!=null?si(e,!!a,n,!0):si(e,!!a,a?[]:"",!1));return;case"textarea":ct=at=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ge(e,n,E,null,s,u)}for(v in s)if(u=s[v],f=a[v],s.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":at=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ge(e,n,v,u,s,f)}Pe(e,at,ct);return;case"option":for(var Wt in a)at=a[Wt],a.hasOwnProperty(Wt)&&at!=null&&!s.hasOwnProperty(Wt)&&(Wt==="selected"?e.selected=!1:Ge(e,n,Wt,null,s,at));for(H in s)at=s[H],ct=a[H],s.hasOwnProperty(H)&&at!==ct&&(at!=null||ct!=null)&&(H==="selected"?e.selected=at&&typeof at!="function"&&typeof at!="symbol":Ge(e,n,H,at,s,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)at=a[ee],a.hasOwnProperty(ee)&&at!=null&&!s.hasOwnProperty(ee)&&Ge(e,n,ee,null,s,at);for(et in s)if(at=s[et],ct=a[et],s.hasOwnProperty(et)&&at!==ct&&(at!=null||ct!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:Ge(e,n,et,at,s,ct)}return;default:if(Si(n)){for(var Ve in a)at=a[Ve],a.hasOwnProperty(Ve)&&at!==void 0&&!s.hasOwnProperty(Ve)&&Vf(e,n,Ve,void 0,s,at);for(dt in s)at=s[dt],ct=a[dt],!s.hasOwnProperty(dt)||at===ct||at===void 0&&ct===void 0||Vf(e,n,dt,at,s,ct);return}}for(var Y in a)at=a[Y],a.hasOwnProperty(Y)&&at!=null&&!s.hasOwnProperty(Y)&&Ge(e,n,Y,null,s,at);for(_t in s)at=s[_t],ct=a[_t],!s.hasOwnProperty(_t)||at===ct||at==null&&ct==null||Ge(e,n,_t,at,s,ct)}function s0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,v=u.initiatorType,E=u.duration;if(f&&E&&s0(v)){for(v=0,E=u.responseEnd,s+=1;s<a.length;s++){var H=a[s],et=H.startTime;if(et>E)break;var dt=H.transferSize,_t=H.initiatorType;dt&&s0(_t)&&(H=H.responseEnd,v+=dt*(H<E?1:(E-et)/(H-et)))}if(--s,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var kf=null,Xf=null;function rc(e){return e.nodeType===9?e:e.ownerDocument}function o0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function l0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Wf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qf=null;function py(){var e=window.event;return e&&e.type==="popstate"?e===qf?!1:(qf=e,!0):(qf=null,!1)}var c0=typeof setTimeout=="function"?setTimeout:void 0,my=typeof clearTimeout=="function"?clearTimeout:void 0,u0=typeof Promise=="function"?Promise:void 0,gy=typeof queueMicrotask=="function"?queueMicrotask:typeof u0<"u"?function(e){return u0.resolve(null).then(e).catch(_y)}:c0;function _y(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function f0(e,n){var a=n,s=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(u),gs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Lo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Lo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,E=f.nodeName;f[ir]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Lo(e.ownerDocument.body);a=u}while(a);gs(n)}function h0(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Yf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yf(a),Qs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function vy(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[ir])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=di(e.nextSibling),e===null)break}return null}function xy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=di(e.nextSibling),e===null))return null;return e}function d0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=di(e.nextSibling),e===null))return null;return e}function jf(e){return e.data==="$?"||e.data==="$~"}function Zf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function yy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function di(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Kf=null;function p0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return di(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function m0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function g0(e,n,a){switch(n=rc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Lo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Qs(e)}var pi=new Map,_0=new Set;function sc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=z.d;z.d={f:Sy,r:My,D:by,C:Ey,L:Ty,m:Ay,X:wy,S:Ry,M:Cy};function Sy(){var e=ca.f(),n=Ql();return e||n}function My(e){var n=Ma(e);n!==null&&n.tag===5&&n.type==="form"?Om(n):ca.r(e)}var ds=typeof document>"u"?null:document;function v0(e,n,a){var s=ds;if(s&&typeof n=="string"&&n){var u=ae(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),_0.has(u)||(_0.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Cn(n,"link",e),T(n),s.head.appendChild(n)))}}function by(e){ca.D(e),v0("dns-prefetch",e,null)}function Ey(e,n){ca.C(e,n),v0("preconnect",e,n)}function Ty(e,n,a){ca.L(e,n,a);var s=ds;if(s&&e&&n){var u='link[rel="preload"][as="'+ae(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ae(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ae(a.imageSizes)+'"]')):u+='[href="'+ae(e)+'"]';var f=u;switch(n){case"style":f=ps(e);break;case"script":f=ms(e)}pi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),pi.set(f,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(Oo(f))||n==="script"&&s.querySelector(Io(f))||(n=s.createElement("link"),Cn(n,"link",e),T(n),s.head.appendChild(n)))}}function Ay(e,n){ca.m(e,n);var a=ds;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ae(s)+'"][href="'+ae(e)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ms(e)}if(!pi.has(f)&&(e=g({rel:"modulepreload",href:e},n),pi.set(f,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Io(f)))return}s=a.createElement("link"),Cn(s,"link",e),T(s),a.head.appendChild(s)}}}function Ry(e,n,a){ca.S(e,n,a);var s=ds;if(s&&e){var u=ba(s).hoistableStyles,f=ps(e);n=n||"default";var v=u.get(f);if(!v){var E={loading:0,preload:null};if(v=s.querySelector(Oo(f)))E.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=pi.get(f))&&Qf(e,a);var H=v=s.createElement("link");T(H),Cn(H,"link",e),H._p=new Promise(function(et,dt){H.onload=et,H.onerror=dt}),H.addEventListener("load",function(){E.loading|=1}),H.addEventListener("error",function(){E.loading|=2}),E.loading|=4,oc(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:E},u.set(f,v)}}}function wy(e,n){ca.X(e,n);var a=ds;if(a&&e){var s=ba(a).hoistableScripts,u=ms(e),f=s.get(u);f||(f=a.querySelector(Io(u)),f||(e=g({src:e,async:!0},n),(n=pi.get(u))&&Jf(e,n),f=a.createElement("script"),T(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Cy(e,n){ca.M(e,n);var a=ds;if(a&&e){var s=ba(a).hoistableScripts,u=ms(e),f=s.get(u);f||(f=a.querySelector(Io(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=pi.get(u))&&Jf(e,n),f=a.createElement("script"),T(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function x0(e,n,a,s){var u=(u=j.current)?sc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ps(a.href),a=ba(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ps(a.href);var f=ba(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Oo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),pi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(e,a),f||Dy(u,e,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ms(a),a=ba(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ps(e){return'href="'+ae(e)+'"'}function Oo(e){return'link[rel="stylesheet"]['+e+"]"}function y0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Dy(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Cn(n,"link",a),T(n),e.head.appendChild(n))}function ms(e){return'[src="'+ae(e)+'"]'}function Io(e){return"script[async]"+e}function S0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+ae(a.href)+'"]');if(s)return n.instance=s,T(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),T(s),Cn(s,"style",u),oc(s,a.precedence,e),n.instance=s;case"stylesheet":u=ps(a.href);var f=e.querySelector(Oo(u));if(f)return n.state.loading|=4,n.instance=f,T(f),f;s=y0(a),(u=pi.get(u))&&Qf(s,u),f=(e.ownerDocument||e).createElement("link"),T(f);var v=f;return v._p=new Promise(function(E,H){v.onload=E,v.onerror=H}),Cn(f,"link",s),n.state.loading|=4,oc(f,a.precedence,e),n.instance=f;case"script":return f=ms(a.src),(u=e.querySelector(Io(f)))?(n.instance=u,T(u),u):(s=a,(u=pi.get(f))&&(s=g({},a),Jf(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),T(u),Cn(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,oc(s,a.precedence,e));return n.instance}function oc(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,v=0;v<s.length;v++){var E=s[v];if(E.dataset.precedence===n)f=E;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var lc=null;function M0(e,n,a){if(lc===null){var s=new Map,u=lc=new Map;u.set(a,s)}else u=lc,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ir]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var E=s.get(v);E?E.push(f):s.set(v,[f])}}return s}function b0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Uy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function E0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ny(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ps(s.href),f=n.querySelector(Oo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=cc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,T(f);return}f=n.ownerDocument||n,s=y0(s),(u=pi.get(u))&&Qf(s,u),f=f.createElement("link"),T(f);var v=f;v._p=new Promise(function(E,H){v.onload=E,v.onerror=H}),Cn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=cc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var $f=0;function Ly(e,n){return e.stylesheets&&e.count===0&&fc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&$f===0&&($f=62500*dy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>$f?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function cc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var uc=null;function fc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,uc=new Map,n.forEach(Oy,e),uc=null,cc.call(e))}function Oy(e,n){if(!(n.state.loading&4)){var a=uc.get(e);if(a)var s=a.get(null);else{a=new Map,uc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||s,f===s&&a.set(null,u),a.set(v,u),this.count++,s=cc.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Po={$$typeof:P,Provider:null,Consumer:null,_currentValue:nt,_currentValue2:nt,_threadCount:0};function Iy(e,n,a,s,u,f,v,E,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function T0(e,n,a,s,u,f,v,E,H,et,dt,_t){return e=new Iy(e,n,a,v,H,et,dt,_t,E),n=1,f===!0&&(n|=24),f=Zn(3,null,null,n),e.current=f,f.stateNode=e,n=Uu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Iu(f),e}function A0(e){return e?(e=qr,e):qr}function R0(e,n,a,s,u,f){u=A0(u),s.context===null?s.context=u:s.pendingContext=u,s=Da(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Ua(e,s,n),a!==null&&(Wn(a,e,n),po(a,e,n))}function w0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function th(e,n){w0(e,n),(e=e.alternate)&&w0(e,n)}function C0(e){if(e.tag===13||e.tag===31){var n=lr(e,67108864);n!==null&&Wn(n,e,67108864),th(e,67108864)}}function D0(e){if(e.tag===13||e.tag===31){var n=ti();n=js(n);var a=lr(e,n);a!==null&&Wn(a,e,n),th(e,n)}}var hc=!0;function Py(e,n,a,s){var u=N.T;N.T=null;var f=z.p;try{z.p=2,eh(e,n,a,s)}finally{z.p=f,N.T=u}}function zy(e,n,a,s){var u=N.T;N.T=null;var f=z.p;try{z.p=8,eh(e,n,a,s)}finally{z.p=f,N.T=u}}function eh(e,n,a,s){if(hc){var u=nh(s);if(u===null)Gf(e,n,s,dc,a),N0(e,s);else if(Fy(u,e,n,a,s))s.stopPropagation();else if(N0(e,s),n&4&&-1<By.indexOf(e)){for(;u!==null;){var f=Ma(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Tt(f.pendingLanes);if(v!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var H=1<<31-Ot(v);E.entanglements[1]|=H,v&=~H}Ii(f),(Le&6)===0&&(Zl=b()+500,Do(0))}}break;case 31:case 13:E=lr(f,2),E!==null&&Wn(E,f,2),Ql(),th(f,2)}if(f=nh(s),f===null&&Gf(e,n,s,dc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Gf(e,n,s,null,a)}}function nh(e){return e=iu(e),ih(e)}var dc=null;function ih(e){if(dc=null,e=Sa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return dc=e,null}function U0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(L()){case tt:return 2;case ut:return 8;case ot:case yt:return 32;case Mt:return 268435456;default:return 32}default:return 32}}var ah=!1,Va=null,ka=null,Xa=null,zo=new Map,Bo=new Map,Wa=[],By="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function N0(e,n){switch(e){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(n.pointerId)}}function Fo(e,n,a,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ma(n),n!==null&&C0(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Fy(e,n,a,s,u){switch(n){case"focusin":return Va=Fo(Va,e,n,a,s,u),!0;case"dragenter":return ka=Fo(ka,e,n,a,s,u),!0;case"mouseover":return Xa=Fo(Xa,e,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return zo.set(f,Fo(zo.get(f)||null,e,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Bo.set(f,Fo(Bo.get(f)||null,e,n,a,s,u)),!0}return!1}function L0(e){var n=Sa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Ui(e.priority,function(){D0(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ui(e.priority,function(){D0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=nh(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);nu=s,a.target.dispatchEvent(s),nu=null}else return n=Ma(a),n!==null&&C0(n),e.blockedOn=a,!1;n.shift()}return!0}function O0(e,n,a){pc(e)&&a.delete(n)}function Hy(){ah=!1,Va!==null&&pc(Va)&&(Va=null),ka!==null&&pc(ka)&&(ka=null),Xa!==null&&pc(Xa)&&(Xa=null),zo.forEach(O0),Bo.forEach(O0)}function mc(e,n){e.blockedOn===n&&(e.blockedOn=null,ah||(ah=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Hy)))}var gc=null;function I0(e){gc!==e&&(gc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){gc===e&&(gc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(ih(s||a)===null)continue;break}var f=Ma(a);f!==null&&(e.splice(n,3),n-=3,ef(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function gs(e){function n(H){return mc(H,e)}Va!==null&&mc(Va,e),ka!==null&&mc(ka,e),Xa!==null&&mc(Xa,e),zo.forEach(n),Bo.forEach(n);for(var a=0;a<Wa.length;a++){var s=Wa[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)L0(a),a.blockedOn===null&&Wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],v=u[yn]||null;if(typeof f=="function")v||I0(a);else if(v){var E=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[yn]||null)E=v.formAction;else if(ih(u)!==null)continue}else E=v.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),I0(a)}}}function P0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function rh(e){this._internalRoot=e}_c.prototype.render=rh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ti();R0(a,s,e,n,null,null)},_c.prototype.unmount=rh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;R0(e.current,2,null,e,null,null),Ql(),n[yi]=null}};function _c(e){this._internalRoot=e}_c.prototype.unstable_scheduleHydration=function(e){if(e){var n=Zs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,e),a===0&&L0(e)}};var z0=t.version;if(z0!=="19.2.3")throw Error(r(527,z0,"19.2.3"));z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Gy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{xt=vc.inject(Gy),bt=vc}catch{}}return Go.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=Xm,f=Wm,v=qm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=T0(e,1,!1,null,null,a,s,null,u,f,v,P0),e[yi]=n.current,Hf(e),new rh(n)},Go.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",f=Xm,v=Wm,E=qm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=T0(e,1,!0,n,a??null,s,u,H,f,v,E,P0),n.context=A0(null),a=n.current,s=ti(),s=js(s),u=Da(s),u.callback=null,Ua(a,u,s),a=s,n.current.lanes=a,Un(n,a),Ii(n),e[yi]=n.current,Hf(e),new _c(n)},Go.version="19.2.3",Go}var Y0;function Jy(){if(Y0)return lh.exports;Y0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),lh.exports=Qy(),lh.exports}var $y=Jy();const tS=J_($y),eS="modulepreload",nS=function(o){return"/horror/"+o},j0={},iS=function(t,i,r){let l=Promise.resolve();if(i&&i.length>0){let p=function(_){return Promise.all(_.map(g=>Promise.resolve(g).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};var h=p;document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=d?.nonce||d?.getAttribute("nonce");l=p(i.map(_=>{if(_=nS(_),_ in j0)return;j0[_]=!0;const g=_.endsWith(".css"),y=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${y}`))return;const S=document.createElement("link");if(S.rel=g?"stylesheet":eS,g||(S.as="script"),S.crossOrigin="",S.href=_,m&&S.setAttribute("nonce",m),document.head.appendChild(S),g)return new Promise((A,w)=>{S.addEventListener("load",A),S.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${_}`)))})}))}function c(d){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=d,window.dispatchEvent(m),!m.defaultPrevented)throw d}return l.then(d=>{for(const m of d||[])m.status==="rejected"&&c(m.reason);return t().catch(c)})};function aS(o={}){const{immediate:t=!1,onNeedRefresh:i,onOfflineReady:r,onRegistered:l,onRegisteredSW:c,onRegisterError:h}=o;let d,m;const p=async(g=!0)=>{await m};async function _(){if("serviceWorker"in navigator){if(d=await iS(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:g}},[]).then(({Workbox:g})=>new g("/horror/sw.js",{scope:"/horror/",type:"classic"})).catch(g=>{h?.(g)}),!d)return;d.addEventListener("activated",g=>{(g.isUpdate||g.isExternal)&&window.location.reload()}),d.addEventListener("installed",g=>{g.isUpdate||r?.()}),d.register({immediate:t}).then(g=>{c?c("/horror/sw.js",g):l?.(g)}).catch(g=>{h?.(g)})}}return m=_(),p}const rS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sS=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),Z0=o=>{const t=sS(o);return t.charAt(0).toUpperCase()+t.slice(1)},$_=(...o)=>o.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),oS=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};var lS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const cS=ke.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:h,...d},m)=>ke.createElement("svg",{ref:m,...lS,width:t,height:t,stroke:o,strokeWidth:r?Number(i)*24/Number(t):i,className:$_("lucide",l),...!c&&!oS(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,_])=>ke.createElement(p,_)),...Array.isArray(c)?c:[c]]));const Or=(o,t)=>{const i=ke.forwardRef(({className:r,...l},c)=>ke.createElement(cS,{ref:c,iconNode:t,className:$_(`lucide-${rS(Z0(o))}`,`lucide-${o}`,r),...l}));return i.displayName=Z0(o),i};const uS=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],tv=Or("arrow-left",uS);const fS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],hS=Or("circle-alert",fS);const dS=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],pS=Or("eye",dS);const mS=[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]],gS=Or("ghost",mS);const _S=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],vS=Or("key",_S);const xS=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],yS=Or("volume-2",xS);const SS=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],MS=Or("volume-x",SS);const Vd="182",bS=0,K0=1,ES=2,Vc=1,TS=2,Qo=3,nr=0,Yn=1,ma=2,_a=0,Ps=1,Q0=2,J0=3,$0=4,AS=5,wr=100,RS=101,wS=102,CS=103,DS=104,US=200,NS=201,LS=202,OS=203,Yh=204,jh=205,IS=206,PS=207,zS=208,BS=209,FS=210,HS=211,GS=212,VS=213,kS=214,Zh=0,Kh=1,Qh=2,Bs=3,Jh=4,$h=5,td=6,ed=7,ev=0,XS=1,WS=2,Gi=0,nv=1,iv=2,av=3,rv=4,sv=5,ov=6,lv=7,cv=300,Lr=301,Fs=302,nd=303,id=304,$c=306,Dr=1e3,ga=1001,ad=1002,xn=1003,qS=1004,xc=1005,In=1006,hh=1007,Ur=1008,ii=1009,uv=1010,fv=1011,tl=1012,kd=1013,ki=1014,Fi=1015,xa=1016,Xd=1017,Wd=1018,el=1020,hv=35902,dv=35899,pv=1021,mv=1022,wi=1023,ya=1026,Nr=1027,gv=1028,qd=1029,Hs=1030,Yd=1031,jd=1033,kc=33776,Xc=33777,Wc=33778,qc=33779,rd=35840,sd=35841,od=35842,ld=35843,cd=36196,ud=37492,fd=37496,hd=37488,dd=37489,pd=37490,md=37491,gd=37808,_d=37809,vd=37810,xd=37811,yd=37812,Sd=37813,Md=37814,bd=37815,Ed=37816,Td=37817,Ad=37818,Rd=37819,wd=37820,Cd=37821,Dd=36492,Ud=36494,Nd=36495,Ld=36283,Od=36284,Id=36285,Pd=36286,YS=3200,_v=0,jS=1,$a="",gi="srgb",Gs="srgb-linear",jc="linear",Fe="srgb",_s=7680,t_=519,ZS=512,KS=513,QS=514,Zd=515,JS=516,$S=517,Kd=518,tM=519,zd=35044,e_="300 es",Hi=2e3,Zc=2001;function vv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function nl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function eM(){const o=nl("canvas");return o.style.display="block",o}const n_={};function Kc(...o){const t="THREE."+o.shift();console.log(t,...o)}function se(...o){const t="THREE."+o.shift();console.warn(t,...o)}function Ee(...o){const t="THREE."+o.shift();console.error(t,...o)}function il(...o){const t=o.join(" ");t in n_||(n_[t]=!0,se(...o))}function nM(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class ks{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dh=Math.PI/180,Qc=180/Math.PI;function er(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function be(o,t,i){return Math.max(t,Math.min(i,o))}function iM(o,t){return(o%t+t)%t}function ph(o,t,i){return(1-i)*o+i*t}function Bi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xe(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class me{constructor(t=0,i=0){me.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(be(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rl{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3],y=c[h+0],S=c[h+1],A=c[h+2],w=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(d>=1){t[i+0]=y,t[i+1]=S,t[i+2]=A,t[i+3]=w;return}if(g!==w||m!==y||p!==S||_!==A){let M=m*y+p*S+_*A+g*w;M<0&&(y=-y,S=-S,A=-A,w=-w,M=-M);let x=1-d;if(M<.9995){const O=Math.acos(M),P=Math.sin(O);x=Math.sin(x*O)/P,d=Math.sin(d*O)/P,m=m*x+y*d,p=p*x+S*d,_=_*x+A*d,g=g*x+w*d}else{m=m*x+y*d,p=p*x+S*d,_=_*x+A*d,g=g*x+w*d;const O=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=O,p*=O,_*=O,g*=O}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=c[h],y=c[h+1],S=c[h+2],A=c[h+3];return t[i]=d*A+_*g+m*S-p*y,t[i+1]=m*A+_*y+p*g-d*S,t[i+2]=p*A+_*S+d*y-m*g,t[i+3]=_*A-d*g-m*y-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),g=d(c/2),y=m(r/2),S=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=y*_*g+p*S*A,this._y=p*S*g-y*_*A,this._z=p*_*A+y*S*g,this._w=p*_*g-y*S*A;break;case"YXZ":this._x=y*_*g+p*S*A,this._y=p*S*g-y*_*A,this._z=p*_*A-y*S*g,this._w=p*_*g+y*S*A;break;case"ZXY":this._x=y*_*g-p*S*A,this._y=p*S*g+y*_*A,this._z=p*_*A+y*S*g,this._w=p*_*g-y*S*A;break;case"ZYX":this._x=y*_*g-p*S*A,this._y=p*S*g+y*_*A,this._z=p*_*A-y*S*g,this._w=p*_*g+y*S*A;break;case"YZX":this._x=y*_*g+p*S*A,this._y=p*S*g+y*_*A,this._z=p*_*A-y*S*g,this._w=p*_*g-y*S*A;break;case"XZY":this._x=y*_*g-p*S*A,this._y=p*S*g-y*_*A,this._z=p*_*A+y*S*g,this._w=p*_*g+y*S*A;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],y=r+d+g;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(r>d&&r>g){const S=2*Math.sqrt(1+r-d-g);this._w=(_-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-r-g);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+g-r-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-r*p,this._z=c*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(r=-r,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,r=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(i_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(i_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),_=2*(d*i-c*l),g=2*(c*r-h*i);return this.x=i+m*p+h*g-d*_,this.y=r+m*_+d*p-c*g,this.z=l+m*g+c*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return mh.copy(this).projectOnVector(t),this.sub(mh)}reflect(t){return this.sub(mh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(be(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mh=new K,i_=new rl;class fe{constructor(t,i,r,l,c,h,d,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],g=r[7],y=r[2],S=r[5],A=r[8],w=l[0],M=l[3],x=l[6],O=l[1],P=l[4],I=l[7],F=l[2],G=l[5],B=l[8];return c[0]=h*w+d*O+m*F,c[3]=h*M+d*P+m*G,c[6]=h*x+d*I+m*B,c[1]=p*w+_*O+g*F,c[4]=p*M+_*P+g*G,c[7]=p*x+_*I+g*B,c[2]=y*w+S*O+A*F,c[5]=y*M+S*P+A*G,c[8]=y*x+S*I+A*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-r*c*_+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=_*h-d*p,y=d*m-_*c,S=p*c-h*m,A=i*g+r*y+l*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=g*w,t[1]=(l*p-_*r)*w,t[2]=(d*r-l*h)*w,t[3]=y*w,t[4]=(_*i-l*m)*w,t[5]=(l*c-d*i)*w,t[6]=S*w,t[7]=(r*m-p*i)*w,t[8]=(h*i-r*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(gh.makeScale(t,i)),this}rotate(t){return this.premultiply(gh.makeRotation(-t)),this}translate(t,i){return this.premultiply(gh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gh=new fe,a_=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),r_=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aM(){const o={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Fe&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=zs(l.r),l.g=zs(l.g),l.b=zs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===$a?jc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return il("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return il("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Gs]:{primaries:t,whitePoint:r,transfer:jc,toXYZ:a_,fromXYZ:r_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:r,transfer:Fe,toXYZ:a_,fromXYZ:r_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),o}const we=aM();function va(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function zs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let vs;class rM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{vs===void 0&&(vs=nl("canvas")),vs.width=t.width,vs.height=t.height;const l=vs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=vs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=nl("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=va(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(va(i[r]/255)*255):i[r]=va(i[r]);return{data:i,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sM=0;class Qd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=er(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(_h(l[h].image)):c.push(_h(l[h]))}else c=_h(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function _h(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?rM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let oM=0;const vh=new K;class Pn extends ks{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=ga,l=ga,c=In,h=Ur,d=wi,m=ii,p=Pn.DEFAULT_ANISOTROPY,_=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=er(),this.name="",this.source=new Qd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vh).x}get height(){return this.source.getSize(vh).y}get depth(){return this.source.getSize(vh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dr:t.x=t.x-Math.floor(t.x);break;case ga:t.x=t.x<0?0:1;break;case ad:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dr:t.y=t.y-Math.floor(t.y);break;case ga:t.y=t.y<0?0:1;break;case ad:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=cv;Pn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],_=m[4],g=m[8],y=m[1],S=m[5],A=m[9],w=m[2],M=m[6],x=m[10];if(Math.abs(_-y)<.01&&Math.abs(g-w)<.01&&Math.abs(A-M)<.01){if(Math.abs(_+y)<.1&&Math.abs(g+w)<.1&&Math.abs(A+M)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,I=(S+1)/2,F=(x+1)/2,G=(_+y)/4,B=(g+w)/4,Q=(A+M)/4;return P>I&&P>F?P<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(P),l=G/r,c=B/r):I>F?I<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(I),r=G/l,c=Q/l):F<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),r=B/c,l=Q/c),this.set(r,l,c,i),this}let O=Math.sqrt((M-A)*(M-A)+(g-w)*(g-w)+(y-_)*(y-_));return Math.abs(O)<.001&&(O=1),this.x=(M-A)/O,this.y=(g-w)/O,this.z=(y-_)/O,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this.w=be(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this.w=be(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lM extends ks{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new Pn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Qd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends lM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class xv extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=xn,this.minFilter=xn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cM extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=xn,this.minFilter=xn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sl{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ti.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ti.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ti.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ti):Ti.fromBufferAttribute(c,h),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),yc.copy(r.boundingBox)),yc.applyMatrix4(t.matrixWorld),this.union(yc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vo),Sc.subVectors(this.max,Vo),xs.subVectors(t.a,Vo),ys.subVectors(t.b,Vo),Ss.subVectors(t.c,Vo),Ya.subVectors(ys,xs),ja.subVectors(Ss,ys),Sr.subVectors(xs,Ss);let i=[0,-Ya.z,Ya.y,0,-ja.z,ja.y,0,-Sr.z,Sr.y,Ya.z,0,-Ya.x,ja.z,0,-ja.x,Sr.z,0,-Sr.x,-Ya.y,Ya.x,0,-ja.y,ja.x,0,-Sr.y,Sr.x,0];return!xh(i,xs,ys,Ss,Sc)||(i=[1,0,0,0,1,0,0,0,1],!xh(i,xs,ys,Ss,Sc))?!1:(Mc.crossVectors(Ya,ja),i=[Mc.x,Mc.y,Mc.z],xh(i,xs,ys,Ss,Sc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ua),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ua=[new K,new K,new K,new K,new K,new K,new K,new K],Ti=new K,yc=new sl,xs=new K,ys=new K,Ss=new K,Ya=new K,ja=new K,Sr=new K,Vo=new K,Sc=new K,Mc=new K,Mr=new K;function xh(o,t,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){Mr.fromArray(o,c);const d=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),m=t.dot(Mr),p=i.dot(Mr),_=r.dot(Mr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const uM=new sl,ko=new K,yh=new K;class Jd{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):uM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ko.subVectors(t,this.center);const i=ko.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(ko,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ko.copy(t.center).add(yh)),this.expandByPoint(ko.copy(t.center).sub(yh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const fa=new K,Sh=new K,bc=new K,Za=new K,Mh=new K,Ec=new K,bh=new K;class yv{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=fa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Sh.copy(t).add(i).multiplyScalar(.5),bc.copy(i).sub(t).normalize(),Za.copy(this.origin).sub(Sh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(bc),d=Za.dot(this.direction),m=-Za.dot(bc),p=Za.lengthSq(),_=Math.abs(1-h*h);let g,y,S,A;if(_>0)if(g=h*m-d,y=h*d-m,A=c*_,g>=0)if(y>=-A)if(y<=A){const w=1/_;g*=w,y*=w,S=g*(g+h*y+2*d)+y*(h*g+y+2*m)+p}else y=c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;else y=-c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;else y<=-A?(g=Math.max(0,-(-h*c+d)),y=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+y*(y+2*m)+p):y<=A?(g=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+p):(g=Math.max(0,-(h*c+d)),y=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+y*(y+2*m)+p);else y=h>0?-c:c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Sh).addScaledVector(bc,y),S}intersectSphere(t,i){fa.subVectors(t.center,this.origin);const r=fa.dot(this.direction),l=fa.dot(fa)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),_>=0?(c=(t.min.y-y.y)*_,h=(t.max.y-y.y)*_):(c=(t.max.y-y.y)*_,h=(t.min.y-y.y)*_),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-y.z)*g,m=(t.max.z-y.z)*g):(d=(t.max.z-y.z)*g,m=(t.min.z-y.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,fa)!==null}intersectTriangle(t,i,r,l,c){Mh.subVectors(i,t),Ec.subVectors(r,t),bh.crossVectors(Mh,Ec);let h=this.direction.dot(bh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Za.subVectors(this.origin,t);const m=d*this.direction.dot(Ec.crossVectors(Za,Ec));if(m<0)return null;const p=d*this.direction.dot(Mh.cross(Za));if(p<0||m+p>h)return null;const _=-d*Za.dot(bh);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,i,r,l,c,h,d,m,p,_,g,y,S,A,w,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,_,g,y,S,A,w,M)}set(t,i,r,l,c,h,d,m,p,_,g,y,S,A,w,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=_,x[10]=g,x[14]=y,x[3]=S,x[7]=A,x[11]=w,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/Ms.setFromMatrixColumn(t,0).length(),c=1/Ms.setFromMatrixColumn(t,1).length(),h=1/Ms.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const y=h*_,S=h*g,A=d*_,w=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=S+A*p,i[5]=y-w*p,i[9]=-d*m,i[2]=w-y*p,i[6]=A+S*p,i[10]=h*m}else if(t.order==="YXZ"){const y=m*_,S=m*g,A=p*_,w=p*g;i[0]=y+w*d,i[4]=A*d-S,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=S*d-A,i[6]=w+y*d,i[10]=h*m}else if(t.order==="ZXY"){const y=m*_,S=m*g,A=p*_,w=p*g;i[0]=y-w*d,i[4]=-h*g,i[8]=A+S*d,i[1]=S+A*d,i[5]=h*_,i[9]=w-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const y=h*_,S=h*g,A=d*_,w=d*g;i[0]=m*_,i[4]=A*p-S,i[8]=y*p+w,i[1]=m*g,i[5]=w*p+y,i[9]=S*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const y=h*m,S=h*p,A=d*m,w=d*p;i[0]=m*_,i[4]=w-y*g,i[8]=A*g+S,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=S*g+A,i[10]=y-w*g}else if(t.order==="XZY"){const y=h*m,S=h*p,A=d*m,w=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=y*g+w,i[5]=h*_,i[9]=S*g-A,i[2]=A*g-S,i[6]=d*_,i[10]=w*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fM,t,hM)}lookAt(t,i,r){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Ka.crossVectors(r,ei),Ka.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Ka.crossVectors(r,ei)),Ka.normalize(),Tc.crossVectors(ei,Ka),l[0]=Ka.x,l[4]=Tc.x,l[8]=ei.x,l[1]=Ka.y,l[5]=Tc.y,l[9]=ei.y,l[2]=Ka.z,l[6]=Tc.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],g=r[5],y=r[9],S=r[13],A=r[2],w=r[6],M=r[10],x=r[14],O=r[3],P=r[7],I=r[11],F=r[15],G=l[0],B=l[4],Q=l[8],R=l[12],C=l[1],X=l[5],st=l[9],rt=l[13],pt=l[2],ft=l[6],N=l[10],z=l[14],nt=l[3],Et=l[7],St=l[11],U=l[15];return c[0]=h*G+d*C+m*pt+p*nt,c[4]=h*B+d*X+m*ft+p*Et,c[8]=h*Q+d*st+m*N+p*St,c[12]=h*R+d*rt+m*z+p*U,c[1]=_*G+g*C+y*pt+S*nt,c[5]=_*B+g*X+y*ft+S*Et,c[9]=_*Q+g*st+y*N+S*St,c[13]=_*R+g*rt+y*z+S*U,c[2]=A*G+w*C+M*pt+x*nt,c[6]=A*B+w*X+M*ft+x*Et,c[10]=A*Q+w*st+M*N+x*St,c[14]=A*R+w*rt+M*z+x*U,c[3]=O*G+P*C+I*pt+F*nt,c[7]=O*B+P*X+I*ft+F*Et,c[11]=O*Q+P*st+I*N+F*St,c[15]=O*R+P*rt+I*z+F*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],g=t[6],y=t[10],S=t[14],A=t[3],w=t[7],M=t[11],x=t[15],O=m*S-p*y,P=d*S-p*g,I=d*y-m*g,F=h*S-p*_,G=h*y-m*_,B=h*g-d*_;return i*(w*O-M*P+x*I)-r*(A*O-M*F+x*G)+l*(A*P-w*F+x*B)-c*(A*I-w*G+M*B)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=t[9],y=t[10],S=t[11],A=t[12],w=t[13],M=t[14],x=t[15],O=g*M*p-w*y*p+w*m*S-d*M*S-g*m*x+d*y*x,P=A*y*p-_*M*p-A*m*S+h*M*S+_*m*x-h*y*x,I=_*w*p-A*g*p+A*d*S-h*w*S-_*d*x+h*g*x,F=A*g*m-_*w*m-A*d*y+h*w*y+_*d*M-h*g*M,G=i*O+r*P+l*I+c*F;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/G;return t[0]=O*B,t[1]=(w*y*c-g*M*c-w*l*S+r*M*S+g*l*x-r*y*x)*B,t[2]=(d*M*c-w*m*c+w*l*p-r*M*p-d*l*x+r*m*x)*B,t[3]=(g*m*c-d*y*c-g*l*p+r*y*p+d*l*S-r*m*S)*B,t[4]=P*B,t[5]=(_*M*c-A*y*c+A*l*S-i*M*S-_*l*x+i*y*x)*B,t[6]=(A*m*c-h*M*c-A*l*p+i*M*p+h*l*x-i*m*x)*B,t[7]=(h*y*c-_*m*c+_*l*p-i*y*p-h*l*S+i*m*S)*B,t[8]=I*B,t[9]=(A*g*c-_*w*c-A*r*S+i*w*S+_*r*x-i*g*x)*B,t[10]=(h*w*c-A*d*c+A*r*p-i*w*p-h*r*x+i*d*x)*B,t[11]=(_*d*c-h*g*c-_*r*p+i*g*p+h*r*S-i*d*S)*B,t[12]=F*B,t[13]=(_*w*l-A*g*l+A*r*y-i*w*y-_*r*M+i*g*M)*B,t[14]=(A*d*l-h*w*l-A*r*m+i*w*m+h*r*M-i*d*M)*B,t[15]=(h*g*l-_*d*l+_*r*m-i*g*m-h*r*y+i*d*y)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,_=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,g=d+d,y=c*p,S=c*_,A=c*g,w=h*_,M=h*g,x=d*g,O=m*p,P=m*_,I=m*g,F=r.x,G=r.y,B=r.z;return l[0]=(1-(w+x))*F,l[1]=(S+I)*F,l[2]=(A-P)*F,l[3]=0,l[4]=(S-I)*G,l[5]=(1-(y+x))*G,l[6]=(M+O)*G,l[7]=0,l[8]=(A+P)*B,l[9]=(M-O)*B,l[10]=(1-(y+w))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=Ms.set(l[0],l[1],l[2]).length();const h=Ms.set(l[4],l[5],l[6]).length(),d=Ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ai.copy(this);const p=1/c,_=1/h,g=1/d;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=_,Ai.elements[5]*=_,Ai.elements[6]*=_,Ai.elements[8]*=g,Ai.elements[9]*=g,Ai.elements[10]*=g,i.setFromRotationMatrix(Ai),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=Hi,m=!1){const p=this.elements,_=2*c/(i-t),g=2*c/(r-l),y=(i+t)/(i-t),S=(r+l)/(r-l);let A,w;if(m)A=c/(h-c),w=h*c/(h-c);else if(d===Hi)A=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(d===Zc)A=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=Hi,m=!1){const p=this.elements,_=2/(i-t),g=2/(r-l),y=-(i+t)/(i-t),S=-(r+l)/(r-l);let A,w;if(m)A=1/(h-c),w=h/(h-c);else if(d===Hi)A=-2/(h-c),w=-(h+c)/(h-c);else if(d===Zc)A=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=A,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Ms=new K,Ai=new tn,fM=new K(0,0,0),hM=new K(1,1,1),Ka=new K,Tc=new K,ei=new K,s_=new tn,o_=new rl;class Xi{constructor(t=0,i=0,r=0,l=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-be(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(be(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return s_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(s_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return o_.setFromEuler(this),this.setFromQuaternion(o_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class $d{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dM=0;const l_=new K,bs=new rl,ha=new tn,Ac=new K,Xo=new K,pM=new K,mM=new rl,c_=new K(1,0,0),u_=new K(0,1,0),f_=new K(0,0,1),h_={type:"added"},gM={type:"removed"},Es={type:"childadded",child:null},Eh={type:"childremoved",child:null};class Dn extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const t=new K,i=new Xi,r=new rl,l=new K(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new fe}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $d,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return bs.setFromAxisAngle(t,i),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,i){return bs.setFromAxisAngle(t,i),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(c_,t)}rotateY(t){return this.rotateOnAxis(u_,t)}rotateZ(t){return this.rotateOnAxis(f_,t)}translateOnAxis(t,i){return l_.copy(t).applyQuaternion(this.quaternion),this.position.add(l_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(c_,t)}translateY(t){return this.translateOnAxis(u_,t)}translateZ(t){return this.translateOnAxis(f_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Ac.copy(t):Ac.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(Xo,Ac,this.up):ha.lookAt(Ac,Xo,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),bs.setFromRotationMatrix(ha),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(h_),Es.child=t,this.dispatchEvent(Es),Es.child=null):Ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(gM),Eh.child=t,this.dispatchEvent(Eh),Eh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(ha),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(h_),Es.child=t,this.dispatchEvent(Es),Es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,t,pM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,mM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),g=h(t.shapes),y=h(t.skeletons),S=h(t.animations),A=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new K(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new K,da=new K,Th=new K,pa=new K,Ts=new K,As=new K,d_=new K,Ah=new K,Rh=new K,wh=new K,Ch=new an,Dh=new an,Uh=new an;class _i{constructor(t=new K,i=new K,r=new K){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ri.subVectors(t,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ri.subVectors(l,i),da.subVectors(r,i),Th.subVectors(t,i);const h=Ri.dot(Ri),d=Ri.dot(da),m=Ri.dot(Th),p=da.dot(da),_=da.dot(Th),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const y=1/g,S=(p*m-d*_)*y,A=(h*_-d*m)*y;return c.set(1-S-A,A,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(h,pa.y),m.addScaledVector(d,pa.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return Ch.setScalar(0),Dh.setScalar(0),Uh.setScalar(0),Ch.fromBufferAttribute(t,i),Dh.fromBufferAttribute(t,r),Uh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Ch,c.x),h.addScaledVector(Dh,c.y),h.addScaledVector(Uh,c.z),h}static isFrontFacing(t,i,r,l){return Ri.subVectors(r,i),da.subVectors(t,i),Ri.cross(da).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ri.cross(da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return _i.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;Ts.subVectors(l,r),As.subVectors(c,r),Ah.subVectors(t,r);const m=Ts.dot(Ah),p=As.dot(Ah);if(m<=0&&p<=0)return i.copy(r);Rh.subVectors(t,l);const _=Ts.dot(Rh),g=As.dot(Rh);if(_>=0&&g<=_)return i.copy(l);const y=m*g-_*p;if(y<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(Ts,h);wh.subVectors(t,c);const S=Ts.dot(wh),A=As.dot(wh);if(A>=0&&S<=A)return i.copy(c);const w=S*p-m*A;if(w<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(As,d);const M=_*A-S*g;if(M<=0&&g-_>=0&&S-A>=0)return d_.subVectors(c,l),d=(g-_)/(g-_+(S-A)),i.copy(l).addScaledVector(d_,d);const x=1/(M+w+y);return h=w*x,d=y*x,i.copy(r).addScaledVector(Ts,h).addScaledVector(As,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qa={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function Nh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Te{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=r,we.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=we.workingColorSpace){if(t=iM(t,1),i=be(i,0,1),r=be(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Nh(h,c,t+1/3),this.g=Nh(h,c,t),this.b=Nh(h,c,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,i=gi){function r(c){c!==void 0&&parseFloat(c)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:se("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=gi){const r=Sv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=va(t.r),this.g=va(t.g),this.b=va(t.b),this}copyLinearToSRGB(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return we.workingToColorSpace(On.copy(this),t),Math.round(be(On.r*255,0,255))*65536+Math.round(be(On.g*255,0,255))*256+Math.round(be(On.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,c=On.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=we.workingColorSpace){return we.workingToColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=gi){we.workingToColorSpace(On.copy(this),t);const i=On.r,r=On.g,l=On.b;return t!==gi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Qa),this.setHSL(Qa.h+t,Qa.s+i,Qa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Qa),t.getHSL(Rc);const r=ph(Qa.h,Rc.h,i),l=ph(Qa.s,Rc.s,i),c=ph(Qa.l,Rc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Te;Te.NAMES=Sv;let _M=0;class Xs extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=er(),this.name="",this.type="Material",this.blending=Ps,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yh,this.blendDst=jh,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){se(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(r.blending=this.blending),this.side!==nr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yh&&(r.blendSrc=this.blendSrc),this.blendDst!==jh&&(r.blendDst=this.blendDst),this.blendEquation!==wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==t_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(r.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class tp extends Xs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new K,wc=new me;let vM=0;class Ci{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=zd,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)wc.fromBufferAttribute(this,i),wc.applyMatrix3(t),this.setXY(i,wc.x,wc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Bi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Xe(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Bi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Bi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Bi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Bi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array),c=Xe(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zd&&(t.usage=this.usage),t}}class Mv extends Ci{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class bv extends Ci{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class vi extends Ci{constructor(t,i,r){super(new Float32Array(t),i,r)}}let xM=0;const mi=new tn,Lh=new Dn,Rs=new K,ni=new sl,Wo=new sl,vn=new K;class Di extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vv(t)?bv:Mv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new fe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,i,r){return mi.makeTranslation(t,i,r),this.applyMatrix4(mi),this}scale(t,i,r){return mi.makeScale(t,i,r),this.applyMatrix4(mi),this}lookAt(t){return Lh.lookAt(t),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new vi(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Wo.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(ni.min,Wo.min),ni.expandByPoint(vn),vn.addVectors(ni.max,Wo.max),ni.expandByPoint(vn)):(ni.expandByPoint(Wo.min),ni.expandByPoint(Wo.max))}ni.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)vn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)vn.fromBufferAttribute(d,p),m&&(Rs.fromBufferAttribute(t,p),vn.add(Rs)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Q=0;Q<r.count;Q++)d[Q]=new K,m[Q]=new K;const p=new K,_=new K,g=new K,y=new me,S=new me,A=new me,w=new K,M=new K;function x(Q,R,C){p.fromBufferAttribute(r,Q),_.fromBufferAttribute(r,R),g.fromBufferAttribute(r,C),y.fromBufferAttribute(c,Q),S.fromBufferAttribute(c,R),A.fromBufferAttribute(c,C),_.sub(p),g.sub(p),S.sub(y),A.sub(y);const X=1/(S.x*A.y-A.x*S.y);isFinite(X)&&(w.copy(_).multiplyScalar(A.y).addScaledVector(g,-S.y).multiplyScalar(X),M.copy(g).multiplyScalar(S.x).addScaledVector(_,-A.x).multiplyScalar(X),d[Q].add(w),d[R].add(w),d[C].add(w),m[Q].add(M),m[R].add(M),m[C].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let Q=0,R=O.length;Q<R;++Q){const C=O[Q],X=C.start,st=C.count;for(let rt=X,pt=X+st;rt<pt;rt+=3)x(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const P=new K,I=new K,F=new K,G=new K;function B(Q){F.fromBufferAttribute(l,Q),G.copy(F);const R=d[Q];P.copy(R),P.sub(F.multiplyScalar(F.dot(R))).normalize(),I.crossVectors(G,R);const X=I.dot(m[Q])<0?-1:1;h.setXYZW(Q,P.x,P.y,P.z,X)}for(let Q=0,R=O.length;Q<R;++Q){const C=O[Q],X=C.start,st=C.count;for(let rt=X,pt=X+st;rt<pt;rt+=3)B(t.getX(rt+0)),B(t.getX(rt+1)),B(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const l=new K,c=new K,h=new K,d=new K,m=new K,p=new K,_=new K,g=new K;if(t)for(let y=0,S=t.count;y<S;y+=3){const A=t.getX(y+0),w=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,M),d.add(_),m.add(_),p.add(_),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,g=d.normalized,y=new p.constructor(m.length*_);let S=0,A=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?S=m[w]*d.data.stride+d.offset:S=m[w]*_;for(let x=0;x<_;x++)y[A++]=p[S++]}return new Ci(y,_,g)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Di,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,g=p.length;_<g;_++){const y=p[_],S=t(y,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,y=p.length;g<y;g++){const S=p[g];_.push(S.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],g=c[p];for(let y=0,S=g.length;y<S;y++)_.push(g[y].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const p_=new tn,br=new yv,Cc=new Jd,m_=new K,Dc=new K,Uc=new K,Nc=new K,Oh=new K,Lc=new K,g_=new K,Oc=new K;class ai extends Dn{constructor(t=new Di,i=new tp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Lc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],g=c[m];_!==0&&(Oh.fromBufferAttribute(g,t),h?Lc.addScaledVector(Oh,_):Lc.addScaledVector(Oh.sub(i),_))}i.add(Lc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Cc.copy(r.boundingSphere),Cc.applyMatrix4(c),br.copy(t.ray).recast(t.near),!(Cc.containsPoint(br.origin)===!1&&(br.intersectSphere(Cc,m_)===null||br.origin.distanceToSquared(m_)>(t.far-t.near)**2))&&(p_.copy(c).invert(),br.copy(t.ray).applyMatrix4(p_),!(r.boundingBox!==null&&br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,br)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,w=y.length;A<w;A++){const M=y[A],x=h[M.materialIndex],O=Math.max(M.start,S.start),P=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let I=O,F=P;I<F;I+=3){const G=d.getX(I),B=d.getX(I+1),Q=d.getX(I+2);l=Ic(this,x,t,r,p,_,g,G,B,Q),l&&(l.faceIndex=Math.floor(I/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let M=A,x=w;M<x;M+=3){const O=d.getX(M),P=d.getX(M+1),I=d.getX(M+2);l=Ic(this,h,t,r,p,_,g,O,P,I),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,w=y.length;A<w;A++){const M=y[A],x=h[M.materialIndex],O=Math.max(M.start,S.start),P=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let I=O,F=P;I<F;I+=3){const G=I,B=I+1,Q=I+2;l=Ic(this,x,t,r,p,_,g,G,B,Q),l&&(l.faceIndex=Math.floor(I/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,S.start),w=Math.min(m.count,S.start+S.count);for(let M=A,x=w;M<x;M+=3){const O=M,P=M+1,I=M+2;l=Ic(this,h,t,r,p,_,g,O,P,I),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function yM(o,t,i,r,l,c,h,d){let m;if(t.side===Yn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===nr,d),m===null)return null;Oc.copy(d),Oc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Oc);return p<i.near||p>i.far?null:{distance:p,point:Oc.clone(),object:o}}function Ic(o,t,i,r,l,c,h,d,m,p){o.getVertexPosition(d,Dc),o.getVertexPosition(m,Uc),o.getVertexPosition(p,Nc);const _=yM(o,t,i,r,Dc,Uc,Nc,g_);if(_){const g=new K;_i.getBarycoord(g_,Dc,Uc,Nc,g),l&&(_.uv=_i.getInterpolatedAttribute(l,d,m,p,g,new me)),c&&(_.uv1=_i.getInterpolatedAttribute(c,d,m,p,g,new me)),h&&(_.normal=_i.getInterpolatedAttribute(h,d,m,p,g,new K),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new K,materialIndex:0};_i.getNormal(Dc,Uc,Nc,y.normal),_.face=y,_.barycoord=g}return _}class Ws extends Di{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],g=[];let y=0,S=0;A("z","y","x",-1,-1,r,i,t,h,c,0),A("z","y","x",1,-1,r,i,-t,h,c,1),A("x","z","y",1,1,t,r,i,l,h,2),A("x","z","y",1,-1,t,r,-i,l,h,3),A("x","y","z",1,-1,t,i,r,l,c,4),A("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new vi(p,3)),this.setAttribute("normal",new vi(_,3)),this.setAttribute("uv",new vi(g,2));function A(w,M,x,O,P,I,F,G,B,Q,R){const C=I/B,X=F/Q,st=I/2,rt=F/2,pt=G/2,ft=B+1,N=Q+1;let z=0,nt=0;const Et=new K;for(let St=0;St<N;St++){const U=St*X-rt;for(let $=0;$<ft;$++){const gt=$*C-st;Et[w]=gt*O,Et[M]=U*P,Et[x]=pt,p.push(Et.x,Et.y,Et.z),Et[w]=0,Et[M]=0,Et[x]=G>0?1:-1,_.push(Et.x,Et.y,Et.z),g.push($/B),g.push(1-St/Q),z+=1}}for(let St=0;St<Q;St++)for(let U=0;U<B;U++){const $=y+U+ft*St,gt=y+U+ft*(St+1),wt=y+(U+1)+ft*(St+1),Pt=y+(U+1)+ft*St;m.push($,gt,Pt),m.push(gt,wt,Pt),nt+=6}d.addGroup(S,nt,R),S+=nt,y+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ws(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vs(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Fn(o){const t={};for(let i=0;i<o.length;i++){const r=Vs(o[i]);for(const l in r)t[l]=r[l]}return t}function SM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Ev(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const MM={clone:Vs,merge:Fn};var bM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Xs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bM,this.fragmentShader=EM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=SM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Tv extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new K,__=new me,v_=new me;class qn extends Tv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Qc*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qc*2*Math.atan(Math.tan(dh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-t/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ja.x,Ja.y).multiplyScalar(-t/Ja.z)}getViewSize(t,i){return this.getViewBounds(t,__,v_),i.subVectors(v_,__)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(dh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ws=-90,Cs=1;class TM extends Dn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new qn(ws,Cs,t,i);l.layers=this.layers,this.add(l);const c=new qn(ws,Cs,t,i);c.layers=this.layers,this.add(c);const h=new qn(ws,Cs,t,i);h.layers=this.layers,this.add(h);const d=new qn(ws,Cs,t,i);d.layers=this.layers,this.add(d);const m=new qn(ws,Cs,t,i);m.layers=this.layers,this.add(m);const p=new qn(ws,Cs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Zc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,g=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=w,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(g,y,S),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Av extends Pn{constructor(t=[],i=Lr,r,l,c,h,d,m,p,_){super(t,i,r,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rv extends Vi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Av(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ws(5,5,5),c=new Wi({name:"CubemapFromEquirect",uniforms:Vs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:_a});c.uniforms.tEquirect.value=i;const h=new ai(l,c),d=i.minFilter;return i.minFilter===Ur&&(i.minFilter=In),new TM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class Jo extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AM={type:"move"};class Ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,r),x=this._getHandJoint(p,w);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=_.position.distanceTo(g.position),S=.02,A=.005;p.inputState.pinching&&y>S+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=S-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(AM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Jo;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class ep{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(t),this.density=i}clone(){return new ep(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class RM extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class wM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=zd,this.updateRanges=[],this.version=0,this.uuid=er()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=er()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=er()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new K;class Jc{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.applyMatrix4(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.applyNormalMatrix(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.transformDirection(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Bi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Xe(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Bi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Bi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Bi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Bi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array),c=Xe(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){Kc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Ci(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Jc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Kc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wv extends Xs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ds;const qo=new K,Us=new K,Ns=new K,Ls=new me,Yo=new me,Cv=new tn,Pc=new K,jo=new K,zc=new K,x_=new me,Ph=new me,y_=new me;class CM extends Dn{constructor(t=new wv){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new Di;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new wM(i,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new Jc(r,3,0,!1)),Ds.setAttribute("uv",new Jc(r,2,3,!1))}this.geometry=Ds,this.material=t,this.center=new me(.5,.5),this.count=1}raycast(t,i){t.camera===null&&Ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Us.setFromMatrixScale(this.matrixWorld),Cv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Us.multiplyScalar(-Ns.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const h=this.center;Bc(Pc.set(-.5,-.5,0),Ns,h,Us,l,c),Bc(jo.set(.5,-.5,0),Ns,h,Us,l,c),Bc(zc.set(.5,.5,0),Ns,h,Us,l,c),x_.set(0,0),Ph.set(1,0),y_.set(1,1);let d=t.ray.intersectTriangle(Pc,jo,zc,!1,qo);if(d===null&&(Bc(jo.set(-.5,.5,0),Ns,h,Us,l,c),Ph.set(0,1),d=t.ray.intersectTriangle(Pc,zc,jo,!1,qo),d===null))return;const m=t.ray.origin.distanceTo(qo);m<t.near||m>t.far||i.push({distance:m,point:qo.clone(),uv:_i.getInterpolation(qo,Pc,jo,zc,x_,Ph,y_,new me),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Bc(o,t,i,r,l,c){Ls.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Yo.x=c*Ls.x-l*Ls.y,Yo.y=l*Ls.x+c*Ls.y):Yo.copy(Ls),o.copy(t),o.x+=Yo.x,o.y+=Yo.y,o.applyMatrix4(Cv)}class DM extends Pn{constructor(t=null,i=1,r=1,l,c,h,d,m,p=xn,_=xn,g,y){super(null,h,d,m,p,_,l,c,g,y),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zh=new K,UM=new K,NM=new fe;class Rr{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=zh.subVectors(r,i).cross(UM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(zh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||NM.getNormalMatrix(t),l=this.coplanarPoint(zh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new Jd,LM=new me(.5,.5),Fc=new K;class np{constructor(t=new Rr,i=new Rr,r=new Rr,l=new Rr,c=new Rr,h=new Rr){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Hi,r=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],g=c[5],y=c[6],S=c[7],A=c[8],w=c[9],M=c[10],x=c[11],O=c[12],P=c[13],I=c[14],F=c[15];if(l[0].setComponents(p-h,S-_,x-A,F-O).normalize(),l[1].setComponents(p+h,S+_,x+A,F+O).normalize(),l[2].setComponents(p+d,S+g,x+w,F+P).normalize(),l[3].setComponents(p-d,S-g,x-w,F-P).normalize(),r)l[4].setComponents(m,y,M,I).normalize(),l[5].setComponents(p-m,S-y,x-M,F-I).normalize();else if(l[4].setComponents(p-m,S-y,x-M,F-I).normalize(),i===Hi)l[5].setComponents(p+m,S+y,x+M,F+I).normalize();else if(i===Zc)l[5].setComponents(m,y,M,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(t){Er.center.set(0,0,0);const i=LM.distanceTo(t.center);return Er.radius=.7071067811865476+i,Er.applyMatrix4(t.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Fc.x=l.normal.x>0?t.max.x:t.min.x,Fc.y=l.normal.y>0?t.max.y:t.min.y,Fc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class al extends Pn{constructor(t,i,r=ki,l,c,h,d=xn,m=xn,p,_=ya,g=1){if(_!==ya&&_!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:g};super(y,l,c,h,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class OM extends al{constructor(t,i=ki,r=Lr,l,c,h=xn,d=xn,m,p=ya){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,i,r,l,c,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Dv extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ol extends Di{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,g=t/d,y=i/m,S=[],A=[],w=[],M=[];for(let x=0;x<_;x++){const O=x*y-h;for(let P=0;P<p;P++){const I=P*g-c;A.push(I,-O,0),w.push(0,0,1),M.push(P/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<d;O++){const P=O+p*x,I=O+p*(x+1),F=O+1+p*(x+1),G=O+1+p*x;S.push(P,I,G),S.push(I,F,G)}this.setIndex(S),this.setAttribute("position",new vi(A,3)),this.setAttribute("normal",new vi(w,3)),this.setAttribute("uv",new vi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.width,t.height,t.widthSegments,t.heightSegments)}}class ip extends Di{constructor(t=1,i=.4,r=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:l,arc:c},r=Math.floor(r),l=Math.floor(l);const h=[],d=[],m=[],p=[],_=new K,g=new K,y=new K;for(let S=0;S<=r;S++)for(let A=0;A<=l;A++){const w=A/l*c,M=S/r*Math.PI*2;g.x=(t+i*Math.cos(M))*Math.cos(w),g.y=(t+i*Math.cos(M))*Math.sin(w),g.z=i*Math.sin(M),d.push(g.x,g.y,g.z),_.x=t*Math.cos(w),_.y=t*Math.sin(w),y.subVectors(g,_).normalize(),m.push(y.x,y.y,y.z),p.push(A/l),p.push(S/r)}for(let S=1;S<=r;S++)for(let A=1;A<=l;A++){const w=(l+1)*S+A-1,M=(l+1)*(S-1)+A-1,x=(l+1)*(S-1)+A,O=(l+1)*S+A;h.push(w,M,O),h.push(M,x,O)}this.setIndex(h),this.setAttribute("position",new vi(d,3)),this.setAttribute("normal",new vi(m,3)),this.setAttribute("uv",new vi(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ip(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class IM extends Wi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bh extends Xs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_v,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class PM extends Xs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zM extends Xs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Fh={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class BM{constructor(t,i,r){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(_){d++,c===!1&&l.onStart!==void 0&&l.onStart(_,h,d),c=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,y=p.length;g<y;g+=2){const S=p[g],A=p[g+1];if(S.global&&(S.lastIndex=0),S.test(_))return A}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const FM=new BM;class ap{constructor(t){this.manager=t!==void 0?t:FM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}ap.DEFAULT_MATERIAL_NAME="__DEFAULT";const Os=new WeakMap;class HM extends ap{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,h=Fh.get(`image:${t}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(h),c.manager.itemEnd(t)},0);else{let g=Os.get(h);g===void 0&&(g=[],Os.set(h,g)),g.push({onLoad:i,onError:l})}return h}const d=nl("img");function m(){_(),i&&i(this);const g=Os.get(this)||[];for(let y=0;y<g.length;y++){const S=g[y];S.onLoad&&S.onLoad(this)}Os.delete(this),c.manager.itemEnd(t)}function p(g){_(),l&&l(g),Fh.remove(`image:${t}`);const y=Os.get(this)||[];for(let S=0;S<y.length;S++){const A=y[S];A.onError&&A.onError(g)}Os.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function _(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Fh.add(`image:${t}`,d),c.manager.itemStart(t),d.src=t,d}}class GM extends ap{constructor(t){super(t)}load(t,i,r,l){const c=new Pn,h=new HM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class rp extends Dn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Hh=new tn,S_=new K,M_=new K;class Uv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new np,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;S_.setFromMatrixPosition(t.matrixWorld),i.position.copy(S_),M_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(M_),i.updateMatrixWorld(),Hh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Hh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class VM extends Uv{constructor(){super(new qn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,r=Qc*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(r!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=r,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class kM extends rp{constructor(t,i,r=0,l=Math.PI/3,c=0,h=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.distance=r,this.angle=l,this.penumbra=c,this.decay=h,this.map=null,this.shadow=new VM}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class XM extends Uv{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0}}class b_ extends rp{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new XM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Nv extends Tv{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class WM extends rp{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class qM extends qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const E_=new tn;class T_{constructor(t,i,r=0,l=1/0){this.ray=new yv(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new $d,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ee("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return E_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(E_),this}intersectObject(t,i=!0,r=[]){return Bd(t,this,r,i),r.sort(A_),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)Bd(t[l],this,r,i);return r.sort(A_),r}}function A_(o,t){return o.distance-t.distance}function Bd(o,t,i,r){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=o.children;for(let h=0,d=c.length;h<d;h++)Bd(c[h],t,i,!0)}}function R_(o,t,i,r){const l=YM(r);switch(i){case pv:return o*t;case gv:return o*t/l.components*l.byteLength;case qd:return o*t/l.components*l.byteLength;case Hs:return o*t*2/l.components*l.byteLength;case Yd:return o*t*2/l.components*l.byteLength;case mv:return o*t*3/l.components*l.byteLength;case wi:return o*t*4/l.components*l.byteLength;case jd:return o*t*4/l.components*l.byteLength;case kc:case Xc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Wc:case qc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case sd:case ld:return Math.max(o,16)*Math.max(t,8)/4;case rd:case od:return Math.max(o,8)*Math.max(t,8)/2;case cd:case ud:case hd:case dd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case fd:case pd:case md:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case gd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case _d:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case vd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case xd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case yd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Sd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Md:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case bd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Ed:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Td:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Ad:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Rd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case wd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Cd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Dd:case Ud:case Nd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Ld:case Od:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Id:case Pd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function YM(o){switch(o){case ii:case uv:return{byteLength:1,components:1};case tl:case fv:case xa:return{byteLength:2,components:1};case Xd:case Wd:return{byteLength:2,components:4};case ki:case kd:case Fi:return{byteLength:4,components:1};case hv:case dv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vd}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vd);function Lv(){let o=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function jM(o){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,_),d.onUploadCallback();let S;if(p instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=o.SHORT;else if(p instanceof Uint32Array)S=o.UNSIGNED_INT;else if(p instanceof Int32Array)S=o.INT;else if(p instanceof Int8Array)S=o.BYTE;else if(p instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,_);else{g.sort((S,A)=>S.start-A.start);let y=0;for(let S=1;S<g.length;S++){const A=g[y],w=g[S];w.start<=A.start+A.count+1?A.count=Math.max(A.count,w.start+w.count-A.start):(++y,g[y]=w)}g.length=y+1;for(let S=0,A=g.length;S<A;S++){const w=g[S];o.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var ZM=`#ifdef USE_ALPHAHASH
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
#endif`,tb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eb=`#ifdef USE_AOMAP
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
}`,Rb=`#ifdef USE_ENVMAP
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
#endif`,wb=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eE=`#ifdef USE_MAP
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
#endif`,RE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wE=`float roughnessFactor = roughness;
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
}`,tT=`#include <common>
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
}`,eT=`#if DEPTH_PACKING == 3200
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
}`,RT=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:ZM,alphahash_pars_fragment:KM,alphamap_fragment:QM,alphamap_pars_fragment:JM,alphatest_fragment:$M,alphatest_pars_fragment:tb,aomap_fragment:eb,aomap_pars_fragment:nb,batching_pars_vertex:ib,batching_vertex:ab,begin_vertex:rb,beginnormal_vertex:sb,bsdfs:ob,iridescence_fragment:lb,bumpmap_pars_fragment:cb,clipping_planes_fragment:ub,clipping_planes_pars_fragment:fb,clipping_planes_pars_vertex:hb,clipping_planes_vertex:db,color_fragment:pb,color_pars_fragment:mb,color_pars_vertex:gb,color_vertex:_b,common:vb,cube_uv_reflection_fragment:xb,defaultnormal_vertex:yb,displacementmap_pars_vertex:Sb,displacementmap_vertex:Mb,emissivemap_fragment:bb,emissivemap_pars_fragment:Eb,colorspace_fragment:Tb,colorspace_pars_fragment:Ab,envmap_fragment:Rb,envmap_common_pars_fragment:wb,envmap_pars_fragment:Cb,envmap_pars_vertex:Db,envmap_physical_pars_fragment:Gb,envmap_vertex:Ub,fog_vertex:Nb,fog_pars_vertex:Lb,fog_fragment:Ob,fog_pars_fragment:Ib,gradientmap_pars_fragment:Pb,lightmap_pars_fragment:zb,lights_lambert_fragment:Bb,lights_lambert_pars_fragment:Fb,lights_pars_begin:Hb,lights_toon_fragment:Vb,lights_toon_pars_fragment:kb,lights_phong_fragment:Xb,lights_phong_pars_fragment:Wb,lights_physical_fragment:qb,lights_physical_pars_fragment:Yb,lights_fragment_begin:jb,lights_fragment_maps:Zb,lights_fragment_end:Kb,logdepthbuf_fragment:Qb,logdepthbuf_pars_fragment:Jb,logdepthbuf_pars_vertex:$b,logdepthbuf_vertex:tE,map_fragment:eE,map_pars_fragment:nE,map_particle_fragment:iE,map_particle_pars_fragment:aE,metalnessmap_fragment:rE,metalnessmap_pars_fragment:sE,morphinstance_vertex:oE,morphcolor_vertex:lE,morphnormal_vertex:cE,morphtarget_pars_vertex:uE,morphtarget_vertex:fE,normal_fragment_begin:hE,normal_fragment_maps:dE,normal_pars_fragment:pE,normal_pars_vertex:mE,normal_vertex:gE,normalmap_pars_fragment:_E,clearcoat_normal_fragment_begin:vE,clearcoat_normal_fragment_maps:xE,clearcoat_pars_fragment:yE,iridescence_pars_fragment:SE,opaque_fragment:ME,packing:bE,premultiplied_alpha_fragment:EE,project_vertex:TE,dithering_fragment:AE,dithering_pars_fragment:RE,roughnessmap_fragment:wE,roughnessmap_pars_fragment:CE,shadowmap_pars_fragment:DE,shadowmap_pars_vertex:UE,shadowmap_vertex:NE,shadowmask_pars_fragment:LE,skinbase_vertex:OE,skinning_pars_vertex:IE,skinning_vertex:PE,skinnormal_vertex:zE,specularmap_fragment:BE,specularmap_pars_fragment:FE,tonemapping_fragment:HE,tonemapping_pars_fragment:GE,transmission_fragment:VE,transmission_pars_fragment:kE,uv_pars_fragment:XE,uv_pars_vertex:WE,uv_vertex:qE,worldpos_vertex:YE,background_vert:jE,background_frag:ZE,backgroundCube_vert:KE,backgroundCube_frag:QE,cube_vert:JE,cube_frag:$E,depth_vert:tT,depth_frag:eT,distance_vert:nT,distance_frag:iT,equirect_vert:aT,equirect_frag:rT,linedashed_vert:sT,linedashed_frag:oT,meshbasic_vert:lT,meshbasic_frag:cT,meshlambert_vert:uT,meshlambert_frag:fT,meshmatcap_vert:hT,meshmatcap_frag:dT,meshnormal_vert:pT,meshnormal_frag:mT,meshphong_vert:gT,meshphong_frag:_T,meshphysical_vert:vT,meshphysical_frag:xT,meshtoon_vert:yT,meshtoon_frag:ST,points_vert:MT,points_frag:bT,shadow_vert:ET,shadow_frag:TT,sprite_vert:AT,sprite_frag:RT},Ft={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},zi={basic:{uniforms:Fn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Fn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Te(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Fn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Fn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Fn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Te(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Fn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Fn([Ft.points,Ft.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Fn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Fn([Ft.common,Ft.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Fn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Fn([Ft.sprite,Ft.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:Fn([Ft.common,Ft.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:Fn([Ft.lights,Ft.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};zi.physical={uniforms:Fn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Hc={r:0,b:0,g:0},Tr=new Xi,wT=new tn;function CT(o,t,i,r,l,c,h){const d=new Te(0);let m=c===!0?0:1,p,_,g=null,y=0,S=null;function A(P){let I=P.isScene===!0?P.background:null;return I&&I.isTexture&&(I=(P.backgroundBlurriness>0?i:t).get(I)),I}function w(P){let I=!1;const F=A(P);F===null?x(d,m):F&&F.isColor&&(x(F,1),I=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||I)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(P,I){const F=A(I);F&&(F.isCubeTexture||F.mapping===$c)?(_===void 0&&(_=new ai(new Ws(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Vs(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(G,B,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Tr.copy(I.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),_.material.uniforms.envMap.value=F,_.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(wT.makeRotationFromEuler(Tr)),_.material.toneMapped=we.getTransfer(F.colorSpace)!==Fe,(g!==F||y!==F.version||S!==o.toneMapping)&&(_.material.needsUpdate=!0,g=F,y=F.version,S=o.toneMapping),_.layers.enableAll(),P.unshift(_,_.geometry,_.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new ai(new ol(2,2),new Wi({name:"BackgroundMaterial",uniforms:Vs(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=we.getTransfer(F.colorSpace)!==Fe,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(g!==F||y!==F.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,g=F,y=F.version,S=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function x(P,I){P.getRGB(Hc,Ev(o)),r.buffers.color.setClear(Hc.r,Hc.g,Hc.b,I,h)}function O(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,I=1){d.set(P),m=I,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,x(d,m)},render:w,addToRenderList:M,dispose:O}}function DT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,h=!1;function d(C,X,st,rt,pt){let ft=!1;const N=g(rt,st,X);c!==N&&(c=N,p(c.object)),ft=S(C,rt,st,pt),ft&&A(C,rt,st,pt),pt!==null&&t.update(pt,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,I(C,X,st,rt),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(pt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function _(C){return o.deleteVertexArray(C)}function g(C,X,st){const rt=st.wireframe===!0;let pt=r[C.id];pt===void 0&&(pt={},r[C.id]=pt);let ft=pt[X.id];ft===void 0&&(ft={},pt[X.id]=ft);let N=ft[rt];return N===void 0&&(N=y(m()),ft[rt]=N),N}function y(C){const X=[],st=[],rt=[];for(let pt=0;pt<i;pt++)X[pt]=0,st[pt]=0,rt[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:st,attributeDivisors:rt,object:C,attributes:{},index:null}}function S(C,X,st,rt){const pt=c.attributes,ft=X.attributes;let N=0;const z=st.getAttributes();for(const nt in z)if(z[nt].location>=0){const St=pt[nt];let U=ft[nt];if(U===void 0&&(nt==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),nt==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),St===void 0||St.attribute!==U||U&&St.data!==U.data)return!0;N++}return c.attributesNum!==N||c.index!==rt}function A(C,X,st,rt){const pt={},ft=X.attributes;let N=0;const z=st.getAttributes();for(const nt in z)if(z[nt].location>=0){let St=ft[nt];St===void 0&&(nt==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),nt==="instanceColor"&&C.instanceColor&&(St=C.instanceColor));const U={};U.attribute=St,St&&St.data&&(U.data=St.data),pt[nt]=U,N++}c.attributes=pt,c.attributesNum=N,c.index=rt}function w(){const C=c.newAttributes;for(let X=0,st=C.length;X<st;X++)C[X]=0}function M(C){x(C,0)}function x(C,X){const st=c.newAttributes,rt=c.enabledAttributes,pt=c.attributeDivisors;st[C]=1,rt[C]===0&&(o.enableVertexAttribArray(C),rt[C]=1),pt[C]!==X&&(o.vertexAttribDivisor(C,X),pt[C]=X)}function O(){const C=c.newAttributes,X=c.enabledAttributes;for(let st=0,rt=X.length;st<rt;st++)X[st]!==C[st]&&(o.disableVertexAttribArray(st),X[st]=0)}function P(C,X,st,rt,pt,ft,N){N===!0?o.vertexAttribIPointer(C,X,st,pt,ft):o.vertexAttribPointer(C,X,st,rt,pt,ft)}function I(C,X,st,rt){w();const pt=rt.attributes,ft=st.getAttributes(),N=X.defaultAttributeValues;for(const z in ft){const nt=ft[z];if(nt.location>=0){let Et=pt[z];if(Et===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(Et=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(Et=C.instanceColor)),Et!==void 0){const St=Et.normalized,U=Et.itemSize,$=t.get(Et);if($===void 0)continue;const gt=$.buffer,wt=$.type,Pt=$.bytesPerElement,j=wt===o.INT||wt===o.UNSIGNED_INT||Et.gpuType===kd;if(Et.isInterleavedBufferAttribute){const ht=Et.data,Dt=ht.stride,kt=Et.offset;if(ht.isInstancedInterleavedBuffer){for(let Vt=0;Vt<nt.locationSize;Vt++)x(nt.location+Vt,ht.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Vt=0;Vt<nt.locationSize;Vt++)M(nt.location+Vt);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let Vt=0;Vt<nt.locationSize;Vt++)P(nt.location+Vt,U/nt.locationSize,wt,St,Dt*Pt,(kt+U/nt.locationSize*Vt)*Pt,j)}else{if(Et.isInstancedBufferAttribute){for(let ht=0;ht<nt.locationSize;ht++)x(nt.location+ht,Et.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let ht=0;ht<nt.locationSize;ht++)M(nt.location+ht);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let ht=0;ht<nt.locationSize;ht++)P(nt.location+ht,U/nt.locationSize,wt,St,U*Pt,U/nt.locationSize*ht*Pt,j)}}else if(N!==void 0){const St=N[z];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(nt.location,St);break;case 3:o.vertexAttrib3fv(nt.location,St);break;case 4:o.vertexAttrib4fv(nt.location,St);break;default:o.vertexAttrib1fv(nt.location,St)}}}}O()}function F(){Q();for(const C in r){const X=r[C];for(const st in X){const rt=X[st];for(const pt in rt)_(rt[pt].object),delete rt[pt];delete X[st]}delete r[C]}}function G(C){if(r[C.id]===void 0)return;const X=r[C.id];for(const st in X){const rt=X[st];for(const pt in rt)_(rt[pt].object),delete rt[pt];delete X[st]}delete r[C.id]}function B(C){for(const X in r){const st=r[X];if(st[C.id]===void 0)continue;const rt=st[C.id];for(const pt in rt)_(rt[pt].object),delete rt[pt];delete st[C.id]}}function Q(){R(),h=!0,c!==l&&(c=l,p(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:R,dispose:F,releaseStatesOfGeometry:G,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:M,disableUnusedAttributes:O}}function UT(o,t,i){let r;function l(p){r=p}function c(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,g){g!==0&&(o.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function d(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let S=0;for(let A=0;A<g;A++)S+=_[A];i.update(S,r,1)}function m(p,_,g,y){if(g===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let A=0;A<p.length;A++)h(p[A],_[A],y[A]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,_,0,y,0,g);let A=0;for(let w=0;w<g;w++)A+=_[w]*y[w];i.update(A,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function NT(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==wi&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const Q=B===xa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==ii&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Fi&&!Q)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(se("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),I=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=o.getParameter(o.MAX_SAMPLES),G=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:A,maxTextureSize:w,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:O,maxVaryings:P,maxFragmentUniforms:I,maxSamples:F,samples:G}}function LT(o){const t=this;let i=null,r=0,l=!1,c=!1;const h=new Rr,d=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const S=g.length!==0||y||r!==0||l;return l=y,r=g.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=_(g,y,0)},this.setState=function(g,y,S){const A=g.clippingPlanes,w=g.clipIntersection,M=g.clipShadows,x=o.get(g);if(!l||A===null||A.length===0||c&&!M)c?_(null):p();else{const O=c?0:r,P=O*4;let I=x.clippingState||null;m.value=I,I=_(A,y,P,S);for(let F=0;F!==P;++F)I[F]=i[F];x.clippingState=I,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(g,y,S,A){const w=g!==null?g.length:0;let M=null;if(w!==0){if(M=m.value,A!==!0||M===null){const x=S+w*4,O=y.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<x)&&(M=new Float32Array(x));for(let P=0,I=S;P!==w;++P,I+=4)h.copy(g[P]).applyMatrix4(O,d),h.normal.toArray(M,I),M[I+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}function OT(o){let t=new WeakMap;function i(h,d){return d===nd?h.mapping=Lr:d===id&&(h.mapping=Fs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===nd||d===id)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Rv(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const tr=4,w_=[.125,.215,.35,.446,.526,.582],Cr=20,IT=256,Zo=new Nv,C_=new Te;let Gh=null,Vh=0,kh=0,Xh=!1;const PT=new K;class D_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=PT}=c;Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=N_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Gh,Vh,kh),this._renderer.xr.enabled=Xh,t.scissorTest=!1,Is(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Lr||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:In,minFilter:In,generateMipmaps:!1,type:xa,format:wi,colorSpace:Gs,depthBuffer:!1},l=U_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=U_(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zT(c)),this._blurMaterial=FT(c,t,i),this._ggxMaterial=BT(c,t,i)}return l}_compileMaterial(t){const i=new ai(new Di,t);this._renderer.compile(i,Zo)}_sceneToCubeUV(t,i,r,l,c){const m=new qn(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,S=g.toneMapping;g.getClearColor(C_),g.toneMapping=Gi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ai(new Ws,new tp({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let x=!1;const O=t.background;O?O.isColor&&(M.color.copy(O),t.background=null,x=!0):(M.color.copy(C_),x=!0);for(let P=0;P<6;P++){const I=P%3;I===0?(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[P],c.y,c.z)):I===1?(m.up.set(0,0,p[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[P],c.z)):(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[P]));const F=this._cubeSize;Is(l,I*F,P>2?F:0,F,F),g.setRenderTarget(l),x&&g.render(w,m),g.render(t,m)}g.toneMapping=S,g.autoClear=y,t.background=O}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Lr||t.mapping===Fs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=L_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=N_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Is(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Zo)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),y=0+p*1.25,S=g*y,{_lodMax:A}=this,w=this._sizeLods[r],M=3*w*(r>A-tr?r-A+tr:0),x=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=A-i,Is(c,M,x,3*w,2*w),l.setRenderTarget(c),l.render(d,Zo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-r,Is(t,M,x,3*w,2*w),l.setRenderTarget(t),l.render(d,Zo)}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ee("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const y=p.uniforms,S=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Cr-1),w=c/A,M=isFinite(c)?1+Math.floor(_*w):Cr;M>Cr&&se(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Cr}`);const x=[];let O=0;for(let B=0;B<Cr;++B){const Q=B/w,R=Math.exp(-Q*Q/2);x.push(R),B===0?O+=R:B<M&&(O+=2*R)}for(let B=0;B<x.length;B++)x[B]=x[B]/O;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=x,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:P}=this;y.dTheta.value=A,y.mipInt.value=P-r;const I=this._sizeLods[l],F=3*I*(l>P-tr?l-P+tr:0),G=4*(this._cubeSize-I);Is(i,F,G,3*I,2*I),m.setRenderTarget(i),m.render(g,Zo)}}function zT(o){const t=[],i=[],r=[];let l=o;const c=o-tr+1+w_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>o-tr?m=w_[h-o+tr-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,g=1+p,y=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,A=6,w=3,M=2,x=1,O=new Float32Array(w*A*S),P=new Float32Array(M*A*S),I=new Float32Array(x*A*S);for(let G=0;G<S;G++){const B=G%3*2/3-1,Q=G>2?0:-1,R=[B,Q,0,B+2/3,Q,0,B+2/3,Q+1,0,B,Q,0,B+2/3,Q+1,0,B,Q+1,0];O.set(R,w*A*G),P.set(y,M*A*G);const C=[G,G,G,G,G,G];I.set(C,x*A*G)}const F=new Di;F.setAttribute("position",new Ci(O,w)),F.setAttribute("uv",new Ci(P,M)),F.setAttribute("faceIndex",new Ci(I,x)),r.push(new ai(F,null)),l>tr&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function U_(o,t,i){const r=new Vi(o,t,i);return r.texture.mapping=$c,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Is(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function BT(o,t,i){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:IT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tu(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function FT(o,t,i){const r=new Float32Array(Cr),l=new K(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:tu(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function N_(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function L_(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function tu(){return`

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
	`}function HT(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===nd||m===id,_=m===Lr||m===Fs;if(p||_){let g=t.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new D_(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new D_(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function GT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&il("WebGLRenderer: "+r+" extension not supported."),l}}}function VT(o,t,i,r){const l={},c=new WeakMap;function h(g){const y=g.target;y.index!==null&&t.remove(y.index);for(const A in y.attributes)t.remove(y.attributes[A]);y.removeEventListener("dispose",h),delete l[y.id];const S=c.get(y);S&&(t.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(g,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const S in y)t.update(y[S],o.ARRAY_BUFFER)}function p(g){const y=[],S=g.index,A=g.attributes.position;let w=0;if(S!==null){const O=S.array;w=S.version;for(let P=0,I=O.length;P<I;P+=3){const F=O[P+0],G=O[P+1],B=O[P+2];y.push(F,G,G,B,B,F)}}else if(A!==void 0){const O=A.array;w=A.version;for(let P=0,I=O.length/3-1;P<I;P+=3){const F=P+0,G=P+1,B=P+2;y.push(F,G,G,B,B,F)}}else return;const M=new(vv(y)?bv:Mv)(y,1);M.version=w;const x=c.get(g);x&&t.remove(x),c.set(g,M)}function _(g){const y=c.get(g);if(y){const S=g.index;S!==null&&y.version<S.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function kT(o,t,i){let r;function l(y){r=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,S){o.drawElements(r,S,c,y*h),i.update(S,r,1)}function p(y,S,A){A!==0&&(o.drawElementsInstanced(r,S,c,y*h,A),i.update(S,r,A))}function _(y,S,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,A);let M=0;for(let x=0;x<A;x++)M+=S[x];i.update(M,r,1)}function g(y,S,A,w){if(A===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<y.length;x++)p(y[x]/h,S[x],w[x]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,w,0,A);let x=0;for(let O=0;O<A;O++)x+=S[O]*w[O];i.update(x,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function XT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:Ee("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function WT(o,t,i){const r=new WeakMap,l=new an;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let y=r.get(d);if(y===void 0||y.count!==g){let C=function(){Q.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;y!==void 0&&y.texture.dispose();const A=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let I=0;A===!0&&(I=1),w===!0&&(I=2),M===!0&&(I=3);let F=d.attributes.position.count*I,G=1;F>t.maxTextureSize&&(G=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const B=new Float32Array(F*G*4*g),Q=new xv(B,F,G,g);Q.type=Fi,Q.needsUpdate=!0;const R=I*4;for(let X=0;X<g;X++){const st=x[X],rt=O[X],pt=P[X],ft=F*G*4*X;for(let N=0;N<st.count;N++){const z=N*R;A===!0&&(l.fromBufferAttribute(st,N),B[ft+z+0]=l.x,B[ft+z+1]=l.y,B[ft+z+2]=l.z,B[ft+z+3]=0),w===!0&&(l.fromBufferAttribute(rt,N),B[ft+z+4]=l.x,B[ft+z+5]=l.y,B[ft+z+6]=l.z,B[ft+z+7]=0),M===!0&&(l.fromBufferAttribute(pt,N),B[ft+z+8]=l.x,B[ft+z+9]=l.y,B[ft+z+10]=l.z,B[ft+z+11]=pt.itemSize===4?l.w:1)}}y={count:g,texture:Q,size:new me(F,G)},r.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const w=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function qT(o,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const YT={[nv]:"LINEAR_TONE_MAPPING",[iv]:"REINHARD_TONE_MAPPING",[av]:"CINEON_TONE_MAPPING",[rv]:"ACES_FILMIC_TONE_MAPPING",[ov]:"AGX_TONE_MAPPING",[lv]:"NEUTRAL_TONE_MAPPING",[sv]:"CUSTOM_TONE_MAPPING"};function jT(o,t,i,r,l){const c=new Vi(t,i,{type:o,depthBuffer:r,stencilBuffer:l}),h=new Vi(t,i,{type:xa,depthBuffer:!1,stencilBuffer:!1}),d=new Di;d.setAttribute("position",new vi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new vi([0,2,0,0,2,0],2));const m=new IM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ai(d,m),_=new Nv(-1,1,1,-1,0,1);let g=null,y=null,S=!1,A,w=null,M=[],x=!1;this.setSize=function(O,P){c.setSize(O,P),h.setSize(O,P);for(let I=0;I<M.length;I++){const F=M[I];F.setSize&&F.setSize(O,P)}},this.setEffects=function(O){M=O,x=M.length>0&&M[0].isRenderPass===!0;const P=c.width,I=c.height;for(let F=0;F<M.length;F++){const G=M[F];G.setSize&&G.setSize(P,I)}},this.begin=function(O,P){if(S||O.toneMapping===Gi&&M.length===0)return!1;if(w=P,P!==null){const I=P.width,F=P.height;(c.width!==I||c.height!==F)&&this.setSize(I,F)}return x===!1&&O.setRenderTarget(c),A=O.toneMapping,O.toneMapping=Gi,!0},this.hasRenderPass=function(){return x},this.end=function(O,P){O.toneMapping=A,S=!0;let I=c,F=h;for(let G=0;G<M.length;G++){const B=M[G];if(B.enabled!==!1&&(B.render(O,F,I,P),B.needsSwap!==!1)){const Q=I;I=F,F=Q}}if(g!==O.outputColorSpace||y!==O.toneMapping){g=O.outputColorSpace,y=O.toneMapping,m.defines={},we.getTransfer(g)===Fe&&(m.defines.SRGB_TRANSFER="");const G=YT[y];G&&(m.defines[G]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=I.texture,O.setRenderTarget(w),O.render(p,_),w=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Ov=new Pn,Fd=new al(1,1),Iv=new xv,Pv=new cM,zv=new Av,O_=[],I_=[],P_=new Float32Array(16),z_=new Float32Array(9),B_=new Float32Array(4);function qs(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=O_[l];if(c===void 0&&(c=new Float32Array(l),O_[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function mn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function gn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function eu(o,t){let i=I_[t];i===void 0&&(i=new Int32Array(t),I_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function ZT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function KT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2fv(this.addr,t),gn(i,t)}}function QT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;o.uniform3fv(this.addr,t),gn(i,t)}}function JT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4fv(this.addr,t),gn(i,t)}}function $T(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;B_.set(r),o.uniformMatrix2fv(this.addr,!1,B_),gn(i,r)}}function t1(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;z_.set(r),o.uniformMatrix3fv(this.addr,!1,z_),gn(i,r)}}function e1(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;P_.set(r),o.uniformMatrix4fv(this.addr,!1,P_),gn(i,r)}}function n1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function i1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2iv(this.addr,t),gn(i,t)}}function a1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3iv(this.addr,t),gn(i,t)}}function r1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4iv(this.addr,t),gn(i,t)}}function s1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function o1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2uiv(this.addr,t),gn(i,t)}}function l1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3uiv(this.addr,t),gn(i,t)}}function c1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4uiv(this.addr,t),gn(i,t)}}function u1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Fd.compareFunction=i.isReversedDepthBuffer()?Kd:Zd,c=Fd):c=Ov,i.setTexture2D(t||c,l)}function f1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Pv,l)}function h1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||zv,l)}function d1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Iv,l)}function p1(o){switch(o){case 5126:return ZT;case 35664:return KT;case 35665:return QT;case 35666:return JT;case 35674:return $T;case 35675:return t1;case 35676:return e1;case 5124:case 35670:return n1;case 35667:case 35671:return i1;case 35668:case 35672:return a1;case 35669:case 35673:return r1;case 5125:return s1;case 36294:return o1;case 36295:return l1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return u1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return d1}}function m1(o,t){o.uniform1fv(this.addr,t)}function g1(o,t){const i=qs(t,this.size,2);o.uniform2fv(this.addr,i)}function _1(o,t){const i=qs(t,this.size,3);o.uniform3fv(this.addr,i)}function v1(o,t){const i=qs(t,this.size,4);o.uniform4fv(this.addr,i)}function x1(o,t){const i=qs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function y1(o,t){const i=qs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function S1(o,t){const i=qs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function M1(o,t){o.uniform1iv(this.addr,t)}function b1(o,t){o.uniform2iv(this.addr,t)}function E1(o,t){o.uniform3iv(this.addr,t)}function T1(o,t){o.uniform4iv(this.addr,t)}function A1(o,t){o.uniform1uiv(this.addr,t)}function R1(o,t){o.uniform2uiv(this.addr,t)}function w1(o,t){o.uniform3uiv(this.addr,t)}function C1(o,t){o.uniform4uiv(this.addr,t)}function D1(o,t,i){const r=this.cache,l=t.length,c=eu(i,l);mn(r,c)||(o.uniform1iv(this.addr,c),gn(r,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Fd:h=Ov;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function U1(o,t,i){const r=this.cache,l=t.length,c=eu(i,l);mn(r,c)||(o.uniform1iv(this.addr,c),gn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Pv,c[h])}function N1(o,t,i){const r=this.cache,l=t.length,c=eu(i,l);mn(r,c)||(o.uniform1iv(this.addr,c),gn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||zv,c[h])}function L1(o,t,i){const r=this.cache,l=t.length,c=eu(i,l);mn(r,c)||(o.uniform1iv(this.addr,c),gn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Iv,c[h])}function O1(o){switch(o){case 5126:return m1;case 35664:return g1;case 35665:return _1;case 35666:return v1;case 35674:return x1;case 35675:return y1;case 35676:return S1;case 5124:case 35670:return M1;case 35667:case 35671:return b1;case 35668:case 35672:return E1;case 35669:case 35673:return T1;case 5125:return A1;case 36294:return R1;case 36295:return w1;case 36296:return C1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return L1}}class I1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=p1(i.type)}}class P1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=O1(i.type)}}class z1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const Wh=/(\w+)(\])?(\[|\.)?/g;function F_(o,t){o.seq.push(t),o.map[t.id]=t}function B1(o,t,i){const r=o.name,l=r.length;for(Wh.lastIndex=0;;){const c=Wh.exec(r),h=Wh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){F_(i,p===void 0?new I1(d,o,t):new P1(d,o,t));break}else{let g=i.map[d];g===void 0&&(g=new z1(d),F_(i,g)),i=g}}}class Yc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);B1(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function H_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const F1=37297;let H1=0;function G1(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const G_=new fe;function V1(o){we._getMatrix(G_,we.workingColorSpace,o);const t=`mat3( ${G_.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(o)){case jc:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function V_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+G1(o.getShaderSource(t),d)}else return c}function k1(o,t){const i=V1(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const X1={[nv]:"Linear",[iv]:"Reinhard",[av]:"Cineon",[rv]:"ACESFilmic",[ov]:"AgX",[lv]:"Neutral",[sv]:"Custom"};function W1(o,t){const i=X1[t];return i===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gc=new K;function q1(){we.getLuminanceCoefficients(Gc);const o=Gc.x.toFixed(4),t=Gc.y.toFixed(4),i=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function j1(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Z1(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function $o(o){return o!==""}function k_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function X_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const K1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(o){return o.replace(K1,J1)}const Q1=new Map;function J1(o,t){let i=he[t];if(i===void 0){const r=Q1.get(t);if(r!==void 0)i=he[r],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Hd(i)}const $1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W_(o){return o.replace($1,tA)}function tA(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function q_(o){let t=`precision ${o.precision} float;
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
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const eA={[Vc]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function nA(o){return eA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iA={[Lr]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[$c]:"ENVMAP_TYPE_CUBE_UV"};function aA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":iA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const rA={[Fs]:"ENVMAP_MODE_REFRACTION"};function sA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":rA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const oA={[ev]:"ENVMAP_BLENDING_MULTIPLY",[XS]:"ENVMAP_BLENDING_MIX",[WS]:"ENVMAP_BLENDING_ADD"};function lA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":oA[o.combine]||"ENVMAP_BLENDING_NONE"}function cA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function uA(o,t,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=nA(i),p=aA(i),_=sA(i),g=lA(i),y=cA(i),S=Y1(i),A=j1(c),w=l.createProgram();let M,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter($o).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter($o).join(`
`),x.length>0&&(x+=`
`)):(M=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),x=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Gi?"#define TONE_MAPPING":"",i.toneMapping!==Gi?he.tonemapping_pars_fragment:"",i.toneMapping!==Gi?W1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,k1("linearToOutputTexel",i.outputColorSpace),q1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),h=Hd(h),h=k_(h,i),h=X_(h,i),d=Hd(d),d=k_(d,i),d=X_(d,i),h=W_(h),d=W_(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===e_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===e_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=O+M+h,I=O+x+d,F=H_(l,l.VERTEX_SHADER,P),G=H_(l,l.FRAGMENT_SHADER,I);l.attachShader(w,F),l.attachShader(w,G),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function B(X){if(o.debug.checkShaderErrors){const st=l.getProgramInfoLog(w)||"",rt=l.getShaderInfoLog(F)||"",pt=l.getShaderInfoLog(G)||"",ft=st.trim(),N=rt.trim(),z=pt.trim();let nt=!0,Et=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(nt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,F,G);else{const St=V_(l,F,"vertex"),U=V_(l,G,"fragment");Ee("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ft+`
`+St+`
`+U)}else ft!==""?se("WebGLProgram: Program Info Log:",ft):(N===""||z==="")&&(Et=!1);Et&&(X.diagnostics={runnable:nt,programLog:ft,vertexShader:{log:N,prefix:M},fragmentShader:{log:z,prefix:x}})}l.deleteShader(F),l.deleteShader(G),Q=new Yc(l,w),R=Z1(l,w)}let Q;this.getUniforms=function(){return Q===void 0&&B(this),Q};let R;this.getAttributes=function(){return R===void 0&&B(this),R};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(w,F1)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=H1++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=G,this}let fA=0;class hA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new dA(t),i.set(t,r)),r}}class dA{constructor(t){this.id=fA++,this.code=t,this.usedTimes=0}}function pA(o,t,i,r,l,c,h){const d=new $d,m=new hA,p=new Set,_=[],g=new Map,y=l.logarithmicDepthBuffer;let S=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return p.add(R),R===0?"uv":`uv${R}`}function M(R,C,X,st,rt){const pt=st.fog,ft=rt.geometry,N=R.isMeshStandardMaterial?st.environment:null,z=(R.isMeshStandardMaterial?i:t).get(R.envMap||N),nt=z&&z.mapping===$c?z.image.height:null,Et=A[R.type];R.precision!==null&&(S=l.getMaxPrecision(R.precision),S!==R.precision&&se("WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const St=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,U=St!==void 0?St.length:0;let $=0;ft.morphAttributes.position!==void 0&&($=1),ft.morphAttributes.normal!==void 0&&($=2),ft.morphAttributes.color!==void 0&&($=3);let gt,wt,Pt,j;if(Et){const Re=zi[Et];gt=Re.vertexShader,wt=Re.fragmentShader}else gt=R.vertexShader,wt=R.fragmentShader,m.update(R),Pt=m.getVertexShaderID(R),j=m.getFragmentShaderID(R);const ht=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),kt=rt.isInstancedMesh===!0,Vt=rt.isBatchedMesh===!0,de=!!R.map,Ye=!!R.matcap,pe=!!z,oe=!!R.aoMap,ge=!!R.lightMap,ne=!!R.bumpMap,je=!!R.normalMap,V=!!R.displacementMap,We=!!R.emissiveMap,_e=!!R.metalnessMap,Ae=!!R.roughnessMap,qt=R.anisotropy>0,D=R.clearcoat>0,b=R.dispersion>0,L=R.iridescence>0,tt=R.sheen>0,ut=R.transmission>0,ot=qt&&!!R.anisotropyMap,yt=D&&!!R.clearcoatMap,Mt=D&&!!R.clearcoatNormalMap,Ut=D&&!!R.clearcoatRoughnessMap,Kt=L&&!!R.iridescenceMap,xt=L&&!!R.iridescenceThicknessMap,bt=tt&&!!R.sheenColorMap,Nt=tt&&!!R.sheenRoughnessMap,Ot=!!R.specularMap,Lt=!!R.specularColorMap,ce=!!R.specularIntensityMap,W=ut&&!!R.transmissionMap,zt=ut&&!!R.thicknessMap,Rt=!!R.gradientMap,Ht=!!R.alphaMap,Tt=R.alphaTest>0,vt=!!R.alphaHash,Ct=!!R.extensions;let ie=Gi;R.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Ie={shaderID:Et,shaderType:R.type,shaderName:R.name,vertexShader:gt,fragmentShader:wt,defines:R.defines,customVertexShaderID:Pt,customFragmentShaderID:j,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:Vt,batchingColor:Vt&&rt._colorsTexture!==null,instancing:kt,instancingColor:kt&&rt.instanceColor!==null,instancingMorph:kt&&rt.morphTexture!==null,outputColorSpace:ht===null?o.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Gs,alphaToCoverage:!!R.alphaToCoverage,map:de,matcap:Ye,envMap:pe,envMapMode:pe&&z.mapping,envMapCubeUVHeight:nt,aoMap:oe,lightMap:ge,bumpMap:ne,normalMap:je,displacementMap:V,emissiveMap:We,normalMapObjectSpace:je&&R.normalMapType===jS,normalMapTangentSpace:je&&R.normalMapType===_v,metalnessMap:_e,roughnessMap:Ae,anisotropy:qt,anisotropyMap:ot,clearcoat:D,clearcoatMap:yt,clearcoatNormalMap:Mt,clearcoatRoughnessMap:Ut,dispersion:b,iridescence:L,iridescenceMap:Kt,iridescenceThicknessMap:xt,sheen:tt,sheenColorMap:bt,sheenRoughnessMap:Nt,specularMap:Ot,specularColorMap:Lt,specularIntensityMap:ce,transmission:ut,transmissionMap:W,thicknessMap:zt,gradientMap:Rt,opaque:R.transparent===!1&&R.blending===Ps&&R.alphaToCoverage===!1,alphaMap:Ht,alphaTest:Tt,alphaHash:vt,combine:R.combine,mapUv:de&&w(R.map.channel),aoMapUv:oe&&w(R.aoMap.channel),lightMapUv:ge&&w(R.lightMap.channel),bumpMapUv:ne&&w(R.bumpMap.channel),normalMapUv:je&&w(R.normalMap.channel),displacementMapUv:V&&w(R.displacementMap.channel),emissiveMapUv:We&&w(R.emissiveMap.channel),metalnessMapUv:_e&&w(R.metalnessMap.channel),roughnessMapUv:Ae&&w(R.roughnessMap.channel),anisotropyMapUv:ot&&w(R.anisotropyMap.channel),clearcoatMapUv:yt&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&w(R.sheenRoughnessMap.channel),specularMapUv:Ot&&w(R.specularMap.channel),specularColorMapUv:Lt&&w(R.specularColorMap.channel),specularIntensityMapUv:ce&&w(R.specularIntensityMap.channel),transmissionMapUv:W&&w(R.transmissionMap.channel),thicknessMapUv:zt&&w(R.thicknessMap.channel),alphaMapUv:Ht&&w(R.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(je||qt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ft.attributes.uv&&(de||Ht),fog:!!pt,useFog:R.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Dt,skinning:rt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:$,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&X.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:de&&R.map.isVideoTexture===!0&&we.getTransfer(R.map.colorSpace)===Fe,decodeVideoTextureEmissive:We&&R.emissiveMap.isVideoTexture===!0&&we.getTransfer(R.emissiveMap.colorSpace)===Fe,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ma,flipSided:R.side===Yn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Ct&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&R.extensions.multiDraw===!0||Vt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function x(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const X in R.defines)C.push(X),C.push(R.defines[X]);return R.isRawShaderMaterial===!1&&(O(C,R),P(C,R),C.push(o.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function O(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function P(R,C){d.disableAll(),C.instancing&&d.enable(0),C.instancingColor&&d.enable(1),C.instancingMorph&&d.enable(2),C.matcap&&d.enable(3),C.envMap&&d.enable(4),C.normalMapObjectSpace&&d.enable(5),C.normalMapTangentSpace&&d.enable(6),C.clearcoat&&d.enable(7),C.iridescence&&d.enable(8),C.alphaTest&&d.enable(9),C.vertexColors&&d.enable(10),C.vertexAlphas&&d.enable(11),C.vertexUv1s&&d.enable(12),C.vertexUv2s&&d.enable(13),C.vertexUv3s&&d.enable(14),C.vertexTangents&&d.enable(15),C.anisotropy&&d.enable(16),C.alphaHash&&d.enable(17),C.batching&&d.enable(18),C.dispersion&&d.enable(19),C.batchingColor&&d.enable(20),C.gradientMap&&d.enable(21),R.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),R.push(d.mask)}function I(R){const C=A[R.type];let X;if(C){const st=zi[C];X=MM.clone(st.uniforms)}else X=R.uniforms;return X}function F(R,C){let X=g.get(C);return X!==void 0?++X.usedTimes:(X=new uA(o,C,R,c),_.push(X),g.set(C,X)),X}function G(R){if(--R.usedTimes===0){const C=_.indexOf(R);_[C]=_[_.length-1],_.pop(),g.delete(R.cacheKey),R.destroy()}}function B(R){m.remove(R)}function Q(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:I,acquireProgram:F,releaseProgram:G,releaseShaderCache:B,programs:_,dispose:Q}}function mA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function gA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Y_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function j_(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(g,y,S,A,w,M){let x=o[t];return x===void 0?(x={id:g.id,object:g,geometry:y,material:S,groupOrder:A,renderOrder:g.renderOrder,z:w,group:M},o[t]=x):(x.id=g.id,x.object=g,x.geometry=y,x.material=S,x.groupOrder=A,x.renderOrder=g.renderOrder,x.z=w,x.group=M),t++,x}function d(g,y,S,A,w,M){const x=h(g,y,S,A,w,M);S.transmission>0?r.push(x):S.transparent===!0?l.push(x):i.push(x)}function m(g,y,S,A,w,M){const x=h(g,y,S,A,w,M);S.transmission>0?r.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,y){i.length>1&&i.sort(g||gA),r.length>1&&r.sort(y||Y_),l.length>1&&l.sort(y||Y_)}function _(){for(let g=t,y=o.length;g<y;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function _A(){let o=new WeakMap;function t(r,l){const c=o.get(r);let h;return c===void 0?(h=new j_,o.set(r,[h])):l>=c.length?(h=new j_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function vA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new Te};break;case"SpotLight":i={position:new K,direction:new K,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new K,halfWidth:new K,halfHeight:new K};break}return o[t.id]=i,i}}}function xA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let yA=0;function SA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function MA(o){const t=new vA,i=xA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new K);const l=new K,c=new tn,h=new tn;function d(p){let _=0,g=0,y=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let S=0,A=0,w=0,M=0,x=0,O=0,P=0,I=0,F=0,G=0,B=0;p.sort(SA);for(let R=0,C=p.length;R<C;R++){const X=p[R],st=X.color,rt=X.intensity,pt=X.distance;let ft=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Hs?ft=X.shadow.map.texture:ft=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)_+=st.r*rt,g+=st.g*rt,y+=st.b*rt;else if(X.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(X.sh.coefficients[N],rt);B++}else if(X.isDirectionalLight){const N=t.get(X);if(N.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const z=X.shadow,nt=i.get(X);nt.shadowIntensity=z.intensity,nt.shadowBias=z.bias,nt.shadowNormalBias=z.normalBias,nt.shadowRadius=z.radius,nt.shadowMapSize=z.mapSize,r.directionalShadow[S]=nt,r.directionalShadowMap[S]=ft,r.directionalShadowMatrix[S]=X.shadow.matrix,O++}r.directional[S]=N,S++}else if(X.isSpotLight){const N=t.get(X);N.position.setFromMatrixPosition(X.matrixWorld),N.color.copy(st).multiplyScalar(rt),N.distance=pt,N.coneCos=Math.cos(X.angle),N.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),N.decay=X.decay,r.spot[w]=N;const z=X.shadow;if(X.map&&(r.spotLightMap[F]=X.map,F++,z.updateMatrices(X),X.castShadow&&G++),r.spotLightMatrix[w]=z.matrix,X.castShadow){const nt=i.get(X);nt.shadowIntensity=z.intensity,nt.shadowBias=z.bias,nt.shadowNormalBias=z.normalBias,nt.shadowRadius=z.radius,nt.shadowMapSize=z.mapSize,r.spotShadow[w]=nt,r.spotShadowMap[w]=ft,I++}w++}else if(X.isRectAreaLight){const N=t.get(X);N.color.copy(st).multiplyScalar(rt),N.halfWidth.set(X.width*.5,0,0),N.halfHeight.set(0,X.height*.5,0),r.rectArea[M]=N,M++}else if(X.isPointLight){const N=t.get(X);if(N.color.copy(X.color).multiplyScalar(X.intensity),N.distance=X.distance,N.decay=X.decay,X.castShadow){const z=X.shadow,nt=i.get(X);nt.shadowIntensity=z.intensity,nt.shadowBias=z.bias,nt.shadowNormalBias=z.normalBias,nt.shadowRadius=z.radius,nt.shadowMapSize=z.mapSize,nt.shadowCameraNear=z.camera.near,nt.shadowCameraFar=z.camera.far,r.pointShadow[A]=nt,r.pointShadowMap[A]=ft,r.pointShadowMatrix[A]=X.shadow.matrix,P++}r.point[A]=N,A++}else if(X.isHemisphereLight){const N=t.get(X);N.skyColor.copy(X.color).multiplyScalar(rt),N.groundColor.copy(X.groundColor).multiplyScalar(rt),r.hemi[x]=N,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ft.LTC_FLOAT_1,r.rectAreaLTC2=Ft.LTC_FLOAT_2):(r.rectAreaLTC1=Ft.LTC_HALF_1,r.rectAreaLTC2=Ft.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=y;const Q=r.hash;(Q.directionalLength!==S||Q.pointLength!==A||Q.spotLength!==w||Q.rectAreaLength!==M||Q.hemiLength!==x||Q.numDirectionalShadows!==O||Q.numPointShadows!==P||Q.numSpotShadows!==I||Q.numSpotMaps!==F||Q.numLightProbes!==B)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=M,r.point.length=A,r.hemi.length=x,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=I+F-G,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=B,Q.directionalLength=S,Q.pointLength=A,Q.spotLength=w,Q.rectAreaLength=M,Q.hemiLength=x,Q.numDirectionalShadows=O,Q.numPointShadows=P,Q.numSpotShadows=I,Q.numSpotMaps=F,Q.numLightProbes=B,r.version=yA++)}function m(p,_){let g=0,y=0,S=0,A=0,w=0;const M=_.matrixWorldInverse;for(let x=0,O=p.length;x<O;x++){const P=p[x];if(P.isDirectionalLight){const I=r.directional[g];I.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(M),g++}else if(P.isSpotLight){const I=r.spot[S];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(M),I.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(M),S++}else if(P.isRectAreaLight){const I=r.rectArea[A];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(M),h.identity(),c.copy(P.matrixWorld),c.premultiply(M),h.extractRotation(c),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),I.halfWidth.applyMatrix4(h),I.halfHeight.applyMatrix4(h),A++}else if(P.isPointLight){const I=r.point[y];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(M),y++}else if(P.isHemisphereLight){const I=r.hemi[w];I.direction.setFromMatrixPosition(P.matrixWorld),I.direction.transformDirection(M),w++}}}return{setup:d,setupView:m,state:r}}function Z_(o){const t=new MA(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function h(_){r.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function bA(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new Z_(o),t.set(l,[d])):c>=h.length?(d=new Z_(o),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const EA=`void main() {
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
}`,AA=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],RA=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],K_=new tn,Ko=new K,qh=new K;function wA(o,t,i){let r=new np;const l=new me,c=new me,h=new an,d=new PM,m=new zM,p={},_=i.maxTextureSize,g={[nr]:Yn,[Yn]:nr,[ma]:ma},y=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:EA,fragmentShader:TA}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const A=new Di;A.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ai(A,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let x=this.type;this.render=function(G,B,Q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;G.type===TS&&(se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),G.type=Vc);const R=o.getRenderTarget(),C=o.getActiveCubeFace(),X=o.getActiveMipmapLevel(),st=o.state;st.setBlending(_a),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const rt=x!==this.type;rt&&B.traverse(function(pt){pt.material&&(Array.isArray(pt.material)?pt.material.forEach(ft=>ft.needsUpdate=!0):pt.material.needsUpdate=!0)});for(let pt=0,ft=G.length;pt<ft;pt++){const N=G[pt],z=N.shadow;if(z===void 0){se("WebGLShadowMap:",N,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const nt=z.getFrameExtents();if(l.multiply(nt),c.copy(z.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/nt.x),l.x=c.x*nt.x,z.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/nt.y),l.y=c.y*nt.y,z.mapSize.y=c.y)),z.map===null||rt===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Qo){if(N.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Vi(l.x,l.y,{format:Hs,type:xa,minFilter:In,magFilter:In,generateMipmaps:!1}),z.map.texture.name=N.name+".shadowMap",z.map.depthTexture=new al(l.x,l.y,Fi),z.map.depthTexture.name=N.name+".shadowMapDepth",z.map.depthTexture.format=ya,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=xn,z.map.depthTexture.magFilter=xn}else{N.isPointLight?(z.map=new Rv(l.x),z.map.depthTexture=new OM(l.x,ki)):(z.map=new Vi(l.x,l.y),z.map.depthTexture=new al(l.x,l.y,ki)),z.map.depthTexture.name=N.name+".shadowMap",z.map.depthTexture.format=ya;const St=o.state.buffers.depth.getReversed();this.type===Vc?(z.map.depthTexture.compareFunction=St?Kd:Zd,z.map.depthTexture.minFilter=In,z.map.depthTexture.magFilter=In):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=xn,z.map.depthTexture.magFilter=xn)}z.camera.updateProjectionMatrix()}const Et=z.map.isWebGLCubeRenderTarget?6:1;for(let St=0;St<Et;St++){if(z.map.isWebGLCubeRenderTarget)o.setRenderTarget(z.map,St),o.clear();else{St===0&&(o.setRenderTarget(z.map),o.clear());const U=z.getViewport(St);h.set(c.x*U.x,c.y*U.y,c.x*U.z,c.y*U.w),st.viewport(h)}if(N.isPointLight){const U=z.camera,$=z.matrix,gt=N.distance||U.far;gt!==U.far&&(U.far=gt,U.updateProjectionMatrix()),Ko.setFromMatrixPosition(N.matrixWorld),U.position.copy(Ko),qh.copy(U.position),qh.add(AA[St]),U.up.copy(RA[St]),U.lookAt(qh),U.updateMatrixWorld(),$.makeTranslation(-Ko.x,-Ko.y,-Ko.z),K_.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),z._frustum.setFromProjectionMatrix(K_,U.coordinateSystem,U.reversedDepth)}else z.updateMatrices(N);r=z.getFrustum(),I(B,Q,z.camera,N,this.type)}z.isPointLightShadow!==!0&&this.type===Qo&&O(z,Q),z.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(R,C,X)};function O(G,B){const Q=t.update(w);y.defines.VSM_SAMPLES!==G.blurSamples&&(y.defines.VSM_SAMPLES=G.blurSamples,S.defines.VSM_SAMPLES=G.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Vi(l.x,l.y,{format:Hs,type:xa})),y.uniforms.shadow_pass.value=G.map.depthTexture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(B,null,Q,y,w,null),S.uniforms.shadow_pass.value=G.mapPass.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(B,null,Q,S,w,null)}function P(G,B,Q,R){let C=null;const X=Q.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(X!==void 0)C=X;else if(C=Q.isPointLight===!0?m:d,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const st=C.uuid,rt=B.uuid;let pt=p[st];pt===void 0&&(pt={},p[st]=pt);let ft=pt[rt];ft===void 0&&(ft=C.clone(),pt[rt]=ft,B.addEventListener("dispose",F)),C=ft}if(C.visible=B.visible,C.wireframe=B.wireframe,R===Qo?C.side=B.shadowSide!==null?B.shadowSide:B.side:C.side=B.shadowSide!==null?B.shadowSide:g[B.side],C.alphaMap=B.alphaMap,C.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,C.map=B.map,C.clipShadows=B.clipShadows,C.clippingPlanes=B.clippingPlanes,C.clipIntersection=B.clipIntersection,C.displacementMap=B.displacementMap,C.displacementScale=B.displacementScale,C.displacementBias=B.displacementBias,C.wireframeLinewidth=B.wireframeLinewidth,C.linewidth=B.linewidth,Q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const st=o.properties.get(C);st.light=Q}return C}function I(G,B,Q,R,C){if(G.visible===!1)return;if(G.layers.test(B.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===Qo)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,G.matrixWorld);const rt=t.update(G),pt=G.material;if(Array.isArray(pt)){const ft=rt.groups;for(let N=0,z=ft.length;N<z;N++){const nt=ft[N],Et=pt[nt.materialIndex];if(Et&&Et.visible){const St=P(G,Et,R,C);G.onBeforeShadow(o,G,B,Q,rt,St,nt),o.renderBufferDirect(Q,null,rt,St,G,nt),G.onAfterShadow(o,G,B,Q,rt,St,nt)}}}else if(pt.visible){const ft=P(G,pt,R,C);G.onBeforeShadow(o,G,B,Q,rt,ft,null),o.renderBufferDirect(Q,null,rt,ft,G,null),G.onAfterShadow(o,G,B,Q,rt,ft,null)}}const st=G.children;for(let rt=0,pt=st.length;rt<pt;rt++)I(st[rt],B,Q,R,C)}function F(G){G.target.removeEventListener("dispose",F);for(const Q in p){const R=p[Q],C=G.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const CA={[Zh]:Kh,[Qh]:td,[Jh]:ed,[Bs]:$h,[Kh]:Zh,[td]:Qh,[ed]:Jh,[$h]:Bs};function DA(o,t){function i(){let W=!1;const zt=new an;let Rt=null;const Ht=new an(0,0,0,0);return{setMask:function(Tt){Rt!==Tt&&!W&&(o.colorMask(Tt,Tt,Tt,Tt),Rt=Tt)},setLocked:function(Tt){W=Tt},setClear:function(Tt,vt,Ct,ie,Ie){Ie===!0&&(Tt*=ie,vt*=ie,Ct*=ie),zt.set(Tt,vt,Ct,ie),Ht.equals(zt)===!1&&(o.clearColor(Tt,vt,Ct,ie),Ht.copy(zt))},reset:function(){W=!1,Rt=null,Ht.set(-1,0,0,0)}}}function r(){let W=!1,zt=!1,Rt=null,Ht=null,Tt=null;return{setReversed:function(vt){if(zt!==vt){const Ct=t.get("EXT_clip_control");vt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),zt=vt;const ie=Tt;Tt=null,this.setClear(ie)}},getReversed:function(){return zt},setTest:function(vt){vt?ht(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(vt){Rt!==vt&&!W&&(o.depthMask(vt),Rt=vt)},setFunc:function(vt){if(zt&&(vt=CA[vt]),Ht!==vt){switch(vt){case Zh:o.depthFunc(o.NEVER);break;case Kh:o.depthFunc(o.ALWAYS);break;case Qh:o.depthFunc(o.LESS);break;case Bs:o.depthFunc(o.LEQUAL);break;case Jh:o.depthFunc(o.EQUAL);break;case $h:o.depthFunc(o.GEQUAL);break;case td:o.depthFunc(o.GREATER);break;case ed:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ht=vt}},setLocked:function(vt){W=vt},setClear:function(vt){Tt!==vt&&(zt&&(vt=1-vt),o.clearDepth(vt),Tt=vt)},reset:function(){W=!1,Rt=null,Ht=null,Tt=null,zt=!1}}}function l(){let W=!1,zt=null,Rt=null,Ht=null,Tt=null,vt=null,Ct=null,ie=null,Ie=null;return{setTest:function(Re){W||(Re?ht(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(Re){zt!==Re&&!W&&(o.stencilMask(Re),zt=Re)},setFunc:function(Re,Un,xi){(Rt!==Re||Ht!==Un||Tt!==xi)&&(o.stencilFunc(Re,Un,xi),Rt=Re,Ht=Un,Tt=xi)},setOp:function(Re,Un,xi){(vt!==Re||Ct!==Un||ie!==xi)&&(o.stencilOp(Re,Un,xi),vt=Re,Ct=Un,ie=xi)},setLocked:function(Re){W=Re},setClear:function(Re){Ie!==Re&&(o.clearStencil(Re),Ie=Re)},reset:function(){W=!1,zt=null,Rt=null,Ht=null,Tt=null,vt=null,Ct=null,ie=null,Ie=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},y=new WeakMap,S=[],A=null,w=!1,M=null,x=null,O=null,P=null,I=null,F=null,G=null,B=new Te(0,0,0),Q=0,R=!1,C=null,X=null,st=null,rt=null,pt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,z=0;const nt=o.getParameter(o.VERSION);nt.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(nt)[1]),N=z>=1):nt.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),N=z>=2);let Et=null,St={};const U=o.getParameter(o.SCISSOR_BOX),$=o.getParameter(o.VIEWPORT),gt=new an().fromArray(U),wt=new an().fromArray($);function Pt(W,zt,Rt,Ht){const Tt=new Uint8Array(4),vt=o.createTexture();o.bindTexture(W,vt),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ct=0;Ct<Rt;Ct++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(zt,0,o.RGBA,1,1,Ht,0,o.RGBA,o.UNSIGNED_BYTE,Tt):o.texImage2D(zt+Ct,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Tt);return vt}const j={};j[o.TEXTURE_2D]=Pt(o.TEXTURE_2D,o.TEXTURE_2D,1),j[o.TEXTURE_CUBE_MAP]=Pt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[o.TEXTURE_2D_ARRAY]=Pt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),j[o.TEXTURE_3D]=Pt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ht(o.DEPTH_TEST),h.setFunc(Bs),ne(!1),je(K0),ht(o.CULL_FACE),oe(_a);function ht(W){_[W]!==!0&&(o.enable(W),_[W]=!0)}function Dt(W){_[W]!==!1&&(o.disable(W),_[W]=!1)}function kt(W,zt){return g[W]!==zt?(o.bindFramebuffer(W,zt),g[W]=zt,W===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=zt),W===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=zt),!0):!1}function Vt(W,zt){let Rt=S,Ht=!1;if(W){Rt=y.get(zt),Rt===void 0&&(Rt=[],y.set(zt,Rt));const Tt=W.textures;if(Rt.length!==Tt.length||Rt[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,Ct=Tt.length;vt<Ct;vt++)Rt[vt]=o.COLOR_ATTACHMENT0+vt;Rt.length=Tt.length,Ht=!0}}else Rt[0]!==o.BACK&&(Rt[0]=o.BACK,Ht=!0);Ht&&o.drawBuffers(Rt)}function de(W){return A!==W?(o.useProgram(W),A=W,!0):!1}const Ye={[wr]:o.FUNC_ADD,[RS]:o.FUNC_SUBTRACT,[wS]:o.FUNC_REVERSE_SUBTRACT};Ye[CS]=o.MIN,Ye[DS]=o.MAX;const pe={[US]:o.ZERO,[NS]:o.ONE,[LS]:o.SRC_COLOR,[Yh]:o.SRC_ALPHA,[FS]:o.SRC_ALPHA_SATURATE,[zS]:o.DST_COLOR,[IS]:o.DST_ALPHA,[OS]:o.ONE_MINUS_SRC_COLOR,[jh]:o.ONE_MINUS_SRC_ALPHA,[BS]:o.ONE_MINUS_DST_COLOR,[PS]:o.ONE_MINUS_DST_ALPHA,[HS]:o.CONSTANT_COLOR,[GS]:o.ONE_MINUS_CONSTANT_COLOR,[VS]:o.CONSTANT_ALPHA,[kS]:o.ONE_MINUS_CONSTANT_ALPHA};function oe(W,zt,Rt,Ht,Tt,vt,Ct,ie,Ie,Re){if(W===_a){w===!0&&(Dt(o.BLEND),w=!1);return}if(w===!1&&(ht(o.BLEND),w=!0),W!==AS){if(W!==M||Re!==R){if((x!==wr||I!==wr)&&(o.blendEquation(o.FUNC_ADD),x=wr,I=wr),Re)switch(W){case Ps:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Q0:o.blendFunc(o.ONE,o.ONE);break;case J0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case $0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ee("WebGLState: Invalid blending: ",W);break}else switch(W){case Ps:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Q0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case J0:Ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $0:Ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ee("WebGLState: Invalid blending: ",W);break}O=null,P=null,F=null,G=null,B.set(0,0,0),Q=0,M=W,R=Re}return}Tt=Tt||zt,vt=vt||Rt,Ct=Ct||Ht,(zt!==x||Tt!==I)&&(o.blendEquationSeparate(Ye[zt],Ye[Tt]),x=zt,I=Tt),(Rt!==O||Ht!==P||vt!==F||Ct!==G)&&(o.blendFuncSeparate(pe[Rt],pe[Ht],pe[vt],pe[Ct]),O=Rt,P=Ht,F=vt,G=Ct),(ie.equals(B)===!1||Ie!==Q)&&(o.blendColor(ie.r,ie.g,ie.b,Ie),B.copy(ie),Q=Ie),M=W,R=!1}function ge(W,zt){W.side===ma?Dt(o.CULL_FACE):ht(o.CULL_FACE);let Rt=W.side===Yn;zt&&(Rt=!Rt),ne(Rt),W.blending===Ps&&W.transparent===!1?oe(_a):oe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ht=W.stencilWrite;d.setTest(Ht),Ht&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),We(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ht(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ne(W){C!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),C=W)}function je(W){W!==bS?(ht(o.CULL_FACE),W!==X&&(W===K0?o.cullFace(o.BACK):W===ES?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),X=W}function V(W){W!==st&&(N&&o.lineWidth(W),st=W)}function We(W,zt,Rt){W?(ht(o.POLYGON_OFFSET_FILL),(rt!==zt||pt!==Rt)&&(o.polygonOffset(zt,Rt),rt=zt,pt=Rt)):Dt(o.POLYGON_OFFSET_FILL)}function _e(W){W?ht(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function Ae(W){W===void 0&&(W=o.TEXTURE0+ft-1),Et!==W&&(o.activeTexture(W),Et=W)}function qt(W,zt,Rt){Rt===void 0&&(Et===null?Rt=o.TEXTURE0+ft-1:Rt=Et);let Ht=St[Rt];Ht===void 0&&(Ht={type:void 0,texture:void 0},St[Rt]=Ht),(Ht.type!==W||Ht.texture!==zt)&&(Et!==Rt&&(o.activeTexture(Rt),Et=Rt),o.bindTexture(W,zt||j[W]),Ht.type=W,Ht.texture=zt)}function D(){const W=St[Et];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(W){Ee("WebGLState:",W)}}function L(){try{o.compressedTexImage3D(...arguments)}catch(W){Ee("WebGLState:",W)}}function tt(){try{o.texSubImage2D(...arguments)}catch(W){Ee("WebGLState:",W)}}function ut(){try{o.texSubImage3D(...arguments)}catch(W){Ee("WebGLState:",W)}}function ot(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Ee("WebGLState:",W)}}function yt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Ee("WebGLState:",W)}}function Mt(){try{o.texStorage2D(...arguments)}catch(W){Ee("WebGLState:",W)}}function Ut(){try{o.texStorage3D(...arguments)}catch(W){Ee("WebGLState:",W)}}function Kt(){try{o.texImage2D(...arguments)}catch(W){Ee("WebGLState:",W)}}function xt(){try{o.texImage3D(...arguments)}catch(W){Ee("WebGLState:",W)}}function bt(W){gt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function Nt(W){wt.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),wt.copy(W))}function Ot(W,zt){let Rt=p.get(zt);Rt===void 0&&(Rt=new WeakMap,p.set(zt,Rt));let Ht=Rt.get(W);Ht===void 0&&(Ht=o.getUniformBlockIndex(zt,W.name),Rt.set(W,Ht))}function Lt(W,zt){const Ht=p.get(zt).get(W);m.get(zt)!==Ht&&(o.uniformBlockBinding(zt,Ht,W.__bindingPointIndex),m.set(zt,Ht))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},Et=null,St={},g={},y=new WeakMap,S=[],A=null,w=!1,M=null,x=null,O=null,P=null,I=null,F=null,G=null,B=new Te(0,0,0),Q=0,R=!1,C=null,X=null,st=null,rt=null,pt=null,gt.set(0,0,o.canvas.width,o.canvas.height),wt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ht,disable:Dt,bindFramebuffer:kt,drawBuffers:Vt,useProgram:de,setBlending:oe,setMaterial:ge,setFlipSided:ne,setCullFace:je,setLineWidth:V,setPolygonOffset:We,setScissorTest:_e,activeTexture:Ae,bindTexture:qt,unbindTexture:D,compressedTexImage2D:b,compressedTexImage3D:L,texImage2D:Kt,texImage3D:xt,updateUBOMapping:Ot,uniformBlockBinding:Lt,texStorage2D:Mt,texStorage3D:Ut,texSubImage2D:tt,texSubImage3D:ut,compressedTexSubImage2D:ot,compressedTexSubImage3D:yt,scissor:bt,viewport:Nt,reset:ce}}function UA(o,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new me,_=new WeakMap;let g;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,b){return S?new OffscreenCanvas(D,b):nl("canvas")}function w(D,b,L){let tt=1;const ut=qt(D);if((ut.width>L||ut.height>L)&&(tt=L/Math.max(ut.width,ut.height)),tt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ot=Math.floor(tt*ut.width),yt=Math.floor(tt*ut.height);g===void 0&&(g=A(ot,yt));const Mt=b?A(ot,yt):g;return Mt.width=ot,Mt.height=yt,Mt.getContext("2d").drawImage(D,0,0,ot,yt),se("WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+ot+"x"+yt+")."),Mt}else return"data"in D&&se("WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),D;return D}function M(D){return D.generateMipmaps}function x(D){o.generateMipmap(D)}function O(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(D,b,L,tt,ut=!1){if(D!==null){if(o[D]!==void 0)return o[D];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ot=b;if(b===o.RED&&(L===o.FLOAT&&(ot=o.R32F),L===o.HALF_FLOAT&&(ot=o.R16F),L===o.UNSIGNED_BYTE&&(ot=o.R8)),b===o.RED_INTEGER&&(L===o.UNSIGNED_BYTE&&(ot=o.R8UI),L===o.UNSIGNED_SHORT&&(ot=o.R16UI),L===o.UNSIGNED_INT&&(ot=o.R32UI),L===o.BYTE&&(ot=o.R8I),L===o.SHORT&&(ot=o.R16I),L===o.INT&&(ot=o.R32I)),b===o.RG&&(L===o.FLOAT&&(ot=o.RG32F),L===o.HALF_FLOAT&&(ot=o.RG16F),L===o.UNSIGNED_BYTE&&(ot=o.RG8)),b===o.RG_INTEGER&&(L===o.UNSIGNED_BYTE&&(ot=o.RG8UI),L===o.UNSIGNED_SHORT&&(ot=o.RG16UI),L===o.UNSIGNED_INT&&(ot=o.RG32UI),L===o.BYTE&&(ot=o.RG8I),L===o.SHORT&&(ot=o.RG16I),L===o.INT&&(ot=o.RG32I)),b===o.RGB_INTEGER&&(L===o.UNSIGNED_BYTE&&(ot=o.RGB8UI),L===o.UNSIGNED_SHORT&&(ot=o.RGB16UI),L===o.UNSIGNED_INT&&(ot=o.RGB32UI),L===o.BYTE&&(ot=o.RGB8I),L===o.SHORT&&(ot=o.RGB16I),L===o.INT&&(ot=o.RGB32I)),b===o.RGBA_INTEGER&&(L===o.UNSIGNED_BYTE&&(ot=o.RGBA8UI),L===o.UNSIGNED_SHORT&&(ot=o.RGBA16UI),L===o.UNSIGNED_INT&&(ot=o.RGBA32UI),L===o.BYTE&&(ot=o.RGBA8I),L===o.SHORT&&(ot=o.RGBA16I),L===o.INT&&(ot=o.RGBA32I)),b===o.RGB&&(L===o.UNSIGNED_INT_5_9_9_9_REV&&(ot=o.RGB9_E5),L===o.UNSIGNED_INT_10F_11F_11F_REV&&(ot=o.R11F_G11F_B10F)),b===o.RGBA){const yt=ut?jc:we.getTransfer(tt);L===o.FLOAT&&(ot=o.RGBA32F),L===o.HALF_FLOAT&&(ot=o.RGBA16F),L===o.UNSIGNED_BYTE&&(ot=yt===Fe?o.SRGB8_ALPHA8:o.RGBA8),L===o.UNSIGNED_SHORT_4_4_4_4&&(ot=o.RGBA4),L===o.UNSIGNED_SHORT_5_5_5_1&&(ot=o.RGB5_A1)}return(ot===o.R16F||ot===o.R32F||ot===o.RG16F||ot===o.RG32F||ot===o.RGBA16F||ot===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function I(D,b){let L;return D?b===null||b===ki||b===el?L=o.DEPTH24_STENCIL8:b===Fi?L=o.DEPTH32F_STENCIL8:b===tl&&(L=o.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ki||b===el?L=o.DEPTH_COMPONENT24:b===Fi?L=o.DEPTH_COMPONENT32F:b===tl&&(L=o.DEPTH_COMPONENT16),L}function F(D,b){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==xn&&D.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function G(D){const b=D.target;b.removeEventListener("dispose",G),Q(b),b.isVideoTexture&&_.delete(b)}function B(D){const b=D.target;b.removeEventListener("dispose",B),C(b)}function Q(D){const b=r.get(D);if(b.__webglInit===void 0)return;const L=D.source,tt=y.get(L);if(tt){const ut=tt[b.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&R(D),Object.keys(tt).length===0&&y.delete(L)}r.remove(D)}function R(D){const b=r.get(D);o.deleteTexture(b.__webglTexture);const L=D.source,tt=y.get(L);delete tt[b.__cacheKey],h.memory.textures--}function C(D){const b=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(b.__webglFramebuffer[tt]))for(let ut=0;ut<b.__webglFramebuffer[tt].length;ut++)o.deleteFramebuffer(b.__webglFramebuffer[tt][ut]);else o.deleteFramebuffer(b.__webglFramebuffer[tt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[tt])}else{if(Array.isArray(b.__webglFramebuffer))for(let tt=0;tt<b.__webglFramebuffer.length;tt++)o.deleteFramebuffer(b.__webglFramebuffer[tt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let tt=0;tt<b.__webglColorRenderbuffer.length;tt++)b.__webglColorRenderbuffer[tt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[tt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const L=D.textures;for(let tt=0,ut=L.length;tt<ut;tt++){const ot=r.get(L[tt]);ot.__webglTexture&&(o.deleteTexture(ot.__webglTexture),h.memory.textures--),r.remove(L[tt])}r.remove(D)}let X=0;function st(){X=0}function rt(){const D=X;return D>=l.maxTextures&&se("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),X+=1,D}function pt(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function ft(D,b){const L=r.get(D);if(D.isVideoTexture&&_e(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&L.__version!==D.version){const tt=D.image;if(tt===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{j(L,D,b);return}}else D.isExternalTexture&&(L.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,L.__webglTexture,o.TEXTURE0+b)}function N(D,b){const L=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&L.__version!==D.version){j(L,D,b);return}else D.isExternalTexture&&(L.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,L.__webglTexture,o.TEXTURE0+b)}function z(D,b){const L=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&L.__version!==D.version){j(L,D,b);return}i.bindTexture(o.TEXTURE_3D,L.__webglTexture,o.TEXTURE0+b)}function nt(D,b){const L=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&L.__version!==D.version){ht(L,D,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+b)}const Et={[Dr]:o.REPEAT,[ga]:o.CLAMP_TO_EDGE,[ad]:o.MIRRORED_REPEAT},St={[xn]:o.NEAREST,[qS]:o.NEAREST_MIPMAP_NEAREST,[xc]:o.NEAREST_MIPMAP_LINEAR,[In]:o.LINEAR,[hh]:o.LINEAR_MIPMAP_NEAREST,[Ur]:o.LINEAR_MIPMAP_LINEAR},U={[ZS]:o.NEVER,[tM]:o.ALWAYS,[KS]:o.LESS,[Zd]:o.LEQUAL,[QS]:o.EQUAL,[Kd]:o.GEQUAL,[JS]:o.GREATER,[$S]:o.NOTEQUAL};function $(D,b){if(b.type===Fi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===hh||b.magFilter===xc||b.magFilter===Ur||b.minFilter===In||b.minFilter===hh||b.minFilter===xc||b.minFilter===Ur)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Et[b.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Et[b.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Et[b.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,St[b.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,St[b.minFilter]),b.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,U[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===xn||b.minFilter!==xc&&b.minFilter!==Ur||b.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const L=t.get("EXT_texture_filter_anisotropic");o.texParameterf(D,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function gt(D,b){let L=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",G));const tt=b.source;let ut=y.get(tt);ut===void 0&&(ut={},y.set(tt,ut));const ot=pt(b);if(ot!==D.__cacheKey){ut[ot]===void 0&&(ut[ot]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,L=!0),ut[ot].usedTimes++;const yt=ut[D.__cacheKey];yt!==void 0&&(ut[D.__cacheKey].usedTimes--,yt.usedTimes===0&&R(b)),D.__cacheKey=ot,D.__webglTexture=ut[ot].texture}return L}function wt(D,b,L){return Math.floor(Math.floor(D/L)/b)}function Pt(D,b,L,tt){const ot=D.updateRanges;if(ot.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,L,tt,b.data);else{ot.sort((xt,bt)=>xt.start-bt.start);let yt=0;for(let xt=1;xt<ot.length;xt++){const bt=ot[yt],Nt=ot[xt],Ot=bt.start+bt.count,Lt=wt(Nt.start,b.width,4),ce=wt(bt.start,b.width,4);Nt.start<=Ot+1&&Lt===ce&&wt(Nt.start+Nt.count-1,b.width,4)===Lt?bt.count=Math.max(bt.count,Nt.start+Nt.count-bt.start):(++yt,ot[yt]=Nt)}ot.length=yt+1;const Mt=o.getParameter(o.UNPACK_ROW_LENGTH),Ut=o.getParameter(o.UNPACK_SKIP_PIXELS),Kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let xt=0,bt=ot.length;xt<bt;xt++){const Nt=ot[xt],Ot=Math.floor(Nt.start/4),Lt=Math.ceil(Nt.count/4),ce=Ot%b.width,W=Math.floor(Ot/b.width),zt=Lt,Rt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,ce,W,zt,Rt,L,tt,b.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Mt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ut),o.pixelStorei(o.UNPACK_SKIP_ROWS,Kt)}}function j(D,b,L){let tt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(tt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(tt=o.TEXTURE_3D);const ut=gt(D,b),ot=b.source;i.bindTexture(tt,D.__webglTexture,o.TEXTURE0+L);const yt=r.get(ot);if(ot.version!==yt.__version||ut===!0){i.activeTexture(o.TEXTURE0+L);const Mt=we.getPrimaries(we.workingColorSpace),Ut=b.colorSpace===$a?null:we.getPrimaries(b.colorSpace),Kt=b.colorSpace===$a||Mt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let xt=w(b.image,!1,l.maxTextureSize);xt=Ae(b,xt);const bt=c.convert(b.format,b.colorSpace),Nt=c.convert(b.type);let Ot=P(b.internalFormat,bt,Nt,b.colorSpace,b.isVideoTexture);$(tt,b);let Lt;const ce=b.mipmaps,W=b.isVideoTexture!==!0,zt=yt.__version===void 0||ut===!0,Rt=ot.dataReady,Ht=F(b,xt);if(b.isDepthTexture)Ot=I(b.format===Nr,b.type),zt&&(W?i.texStorage2D(o.TEXTURE_2D,1,Ot,xt.width,xt.height):i.texImage2D(o.TEXTURE_2D,0,Ot,xt.width,xt.height,0,bt,Nt,null));else if(b.isDataTexture)if(ce.length>0){W&&zt&&i.texStorage2D(o.TEXTURE_2D,Ht,Ot,ce[0].width,ce[0].height);for(let Tt=0,vt=ce.length;Tt<vt;Tt++)Lt=ce[Tt],W?Rt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Lt.width,Lt.height,bt,Nt,Lt.data):i.texImage2D(o.TEXTURE_2D,Tt,Ot,Lt.width,Lt.height,0,bt,Nt,Lt.data);b.generateMipmaps=!1}else W?(zt&&i.texStorage2D(o.TEXTURE_2D,Ht,Ot,xt.width,xt.height),Rt&&Pt(b,xt,bt,Nt)):i.texImage2D(o.TEXTURE_2D,0,Ot,xt.width,xt.height,0,bt,Nt,xt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&zt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ht,Ot,ce[0].width,ce[0].height,xt.depth);for(let Tt=0,vt=ce.length;Tt<vt;Tt++)if(Lt=ce[Tt],b.format!==wi)if(bt!==null)if(W){if(Rt)if(b.layerUpdates.size>0){const Ct=R_(Lt.width,Lt.height,b.format,b.type);for(const ie of b.layerUpdates){const Ie=Lt.data.subarray(ie*Ct/Lt.data.BYTES_PER_ELEMENT,(ie+1)*Ct/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,ie,Lt.width,Lt.height,1,bt,Ie)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Lt.width,Lt.height,xt.depth,bt,Lt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,Ot,Lt.width,Lt.height,xt.depth,0,Lt.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Rt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Lt.width,Lt.height,xt.depth,bt,Nt,Lt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Tt,Ot,Lt.width,Lt.height,xt.depth,0,bt,Nt,Lt.data)}else{W&&zt&&i.texStorage2D(o.TEXTURE_2D,Ht,Ot,ce[0].width,ce[0].height);for(let Tt=0,vt=ce.length;Tt<vt;Tt++)Lt=ce[Tt],b.format!==wi?bt!==null?W?Rt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,Lt.width,Lt.height,bt,Lt.data):i.compressedTexImage2D(o.TEXTURE_2D,Tt,Ot,Lt.width,Lt.height,0,Lt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Rt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Lt.width,Lt.height,bt,Nt,Lt.data):i.texImage2D(o.TEXTURE_2D,Tt,Ot,Lt.width,Lt.height,0,bt,Nt,Lt.data)}else if(b.isDataArrayTexture)if(W){if(zt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ht,Ot,xt.width,xt.height,xt.depth),Rt)if(b.layerUpdates.size>0){const Tt=R_(xt.width,xt.height,b.format,b.type);for(const vt of b.layerUpdates){const Ct=xt.data.subarray(vt*Tt/xt.data.BYTES_PER_ELEMENT,(vt+1)*Tt/xt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,xt.width,xt.height,1,bt,Nt,Ct)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,bt,Nt,xt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ot,xt.width,xt.height,xt.depth,0,bt,Nt,xt.data);else if(b.isData3DTexture)W?(zt&&i.texStorage3D(o.TEXTURE_3D,Ht,Ot,xt.width,xt.height,xt.depth),Rt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,bt,Nt,xt.data)):i.texImage3D(o.TEXTURE_3D,0,Ot,xt.width,xt.height,xt.depth,0,bt,Nt,xt.data);else if(b.isFramebufferTexture){if(zt)if(W)i.texStorage2D(o.TEXTURE_2D,Ht,Ot,xt.width,xt.height);else{let Tt=xt.width,vt=xt.height;for(let Ct=0;Ct<Ht;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,Ot,Tt,vt,0,bt,Nt,null),Tt>>=1,vt>>=1}}else if(ce.length>0){if(W&&zt){const Tt=qt(ce[0]);i.texStorage2D(o.TEXTURE_2D,Ht,Ot,Tt.width,Tt.height)}for(let Tt=0,vt=ce.length;Tt<vt;Tt++)Lt=ce[Tt],W?Rt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,bt,Nt,Lt):i.texImage2D(o.TEXTURE_2D,Tt,Ot,bt,Nt,Lt);b.generateMipmaps=!1}else if(W){if(zt){const Tt=qt(xt);i.texStorage2D(o.TEXTURE_2D,Ht,Ot,Tt.width,Tt.height)}Rt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt,Nt,xt)}else i.texImage2D(o.TEXTURE_2D,0,Ot,bt,Nt,xt);M(b)&&x(tt),yt.__version=ot.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ht(D,b,L){if(b.image.length!==6)return;const tt=gt(D,b),ut=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+L);const ot=r.get(ut);if(ut.version!==ot.__version||tt===!0){i.activeTexture(o.TEXTURE0+L);const yt=we.getPrimaries(we.workingColorSpace),Mt=b.colorSpace===$a?null:we.getPrimaries(b.colorSpace),Ut=b.colorSpace===$a||yt===Mt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const Kt=b.isCompressedTexture||b.image[0].isCompressedTexture,xt=b.image[0]&&b.image[0].isDataTexture,bt=[];for(let vt=0;vt<6;vt++)!Kt&&!xt?bt[vt]=w(b.image[vt],!0,l.maxCubemapSize):bt[vt]=xt?b.image[vt].image:b.image[vt],bt[vt]=Ae(b,bt[vt]);const Nt=bt[0],Ot=c.convert(b.format,b.colorSpace),Lt=c.convert(b.type),ce=P(b.internalFormat,Ot,Lt,b.colorSpace),W=b.isVideoTexture!==!0,zt=ot.__version===void 0||tt===!0,Rt=ut.dataReady;let Ht=F(b,Nt);$(o.TEXTURE_CUBE_MAP,b);let Tt;if(Kt){W&&zt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,ce,Nt.width,Nt.height);for(let vt=0;vt<6;vt++){Tt=bt[vt].mipmaps;for(let Ct=0;Ct<Tt.length;Ct++){const ie=Tt[Ct];b.format!==wi?Ot!==null?W?Rt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,ie.width,ie.height,Ot,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,ce,ie.width,ie.height,0,ie.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,ie.width,ie.height,Ot,Lt,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,ce,ie.width,ie.height,0,Ot,Lt,ie.data)}}}else{if(Tt=b.mipmaps,W&&zt){Tt.length>0&&Ht++;const vt=qt(bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,ce,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(xt){W?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,bt[vt].width,bt[vt].height,Ot,Lt,bt[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ce,bt[vt].width,bt[vt].height,0,Ot,Lt,bt[vt].data);for(let Ct=0;Ct<Tt.length;Ct++){const Ie=Tt[Ct].image[vt].image;W?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,Ie.width,Ie.height,Ot,Lt,Ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,ce,Ie.width,Ie.height,0,Ot,Lt,Ie.data)}}else{W?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ot,Lt,bt[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ce,Ot,Lt,bt[vt]);for(let Ct=0;Ct<Tt.length;Ct++){const ie=Tt[Ct];W?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,Ot,Lt,ie.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,ce,Ot,Lt,ie.image[vt])}}}M(b)&&x(o.TEXTURE_CUBE_MAP),ot.__version=ut.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Dt(D,b,L,tt,ut,ot){const yt=c.convert(L.format,L.colorSpace),Mt=c.convert(L.type),Ut=P(L.internalFormat,yt,Mt,L.colorSpace),Kt=r.get(b),xt=r.get(L);if(xt.__renderTarget=b,!Kt.__hasExternalTextures){const bt=Math.max(1,b.width>>ot),Nt=Math.max(1,b.height>>ot);ut===o.TEXTURE_3D||ut===o.TEXTURE_2D_ARRAY?i.texImage3D(ut,ot,Ut,bt,Nt,b.depth,0,yt,Mt,null):i.texImage2D(ut,ot,Ut,bt,Nt,0,yt,Mt,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),We(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,tt,ut,xt.__webglTexture,0,V(b)):(ut===o.TEXTURE_2D||ut>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,tt,ut,xt.__webglTexture,ot),i.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(D,b,L){if(o.bindRenderbuffer(o.RENDERBUFFER,D),b.depthBuffer){const tt=b.depthTexture,ut=tt&&tt.isDepthTexture?tt.type:null,ot=I(b.stencilBuffer,ut),yt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;We(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(b),ot,b.width,b.height):L?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(b),ot,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ot,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,D)}else{const tt=b.textures;for(let ut=0;ut<tt.length;ut++){const ot=tt[ut],yt=c.convert(ot.format,ot.colorSpace),Mt=c.convert(ot.type),Ut=P(ot.internalFormat,yt,Mt,ot.colorSpace);We(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(b),Ut,b.width,b.height):L?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(b),Ut,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Ut,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Vt(D,b,L){const tt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=r.get(b.depthTexture);if(ut.__renderTarget=b,(!ut.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),tt){if(ut.__webglInit===void 0&&(ut.__webglInit=!0,b.depthTexture.addEventListener("dispose",G)),ut.__webglTexture===void 0){ut.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,ut.__webglTexture),$(o.TEXTURE_CUBE_MAP,b.depthTexture);const Kt=c.convert(b.depthTexture.format),xt=c.convert(b.depthTexture.type);let bt;b.depthTexture.format===ya?bt=o.DEPTH_COMPONENT24:b.depthTexture.format===Nr&&(bt=o.DEPTH24_STENCIL8);for(let Nt=0;Nt<6;Nt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,bt,b.width,b.height,0,Kt,xt,null)}}else ft(b.depthTexture,0);const ot=ut.__webglTexture,yt=V(b),Mt=tt?o.TEXTURE_CUBE_MAP_POSITIVE_X+L:o.TEXTURE_2D,Ut=b.depthTexture.format===Nr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(b.depthTexture.format===ya)We(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ut,Mt,ot,0,yt):o.framebufferTexture2D(o.FRAMEBUFFER,Ut,Mt,ot,0);else if(b.depthTexture.format===Nr)We(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ut,Mt,ot,0,yt):o.framebufferTexture2D(o.FRAMEBUFFER,Ut,Mt,ot,0);else throw new Error("Unknown depthTexture format")}function de(D){const b=r.get(D),L=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const tt=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),tt){const ut=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,tt.removeEventListener("dispose",ut)};tt.addEventListener("dispose",ut),b.__depthDisposeCallback=ut}b.__boundDepthTexture=tt}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(L)for(let tt=0;tt<6;tt++)Vt(b.__webglFramebuffer[tt],D,tt);else{const tt=D.texture.mipmaps;tt&&tt.length>0?Vt(b.__webglFramebuffer[0],D,0):Vt(b.__webglFramebuffer,D,0)}else if(L){b.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[tt]),b.__webglDepthbuffer[tt]===void 0)b.__webglDepthbuffer[tt]=o.createRenderbuffer(),kt(b.__webglDepthbuffer[tt],D,!1);else{const ut=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer[tt];o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,ut,o.RENDERBUFFER,ot)}}else{const tt=D.texture.mipmaps;if(tt&&tt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),kt(b.__webglDepthbuffer,D,!1);else{const ut=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,ut,o.RENDERBUFFER,ot)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ye(D,b,L){const tt=r.get(D);b!==void 0&&Dt(tt.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),L!==void 0&&de(D)}function pe(D){const b=D.texture,L=r.get(D),tt=r.get(b);D.addEventListener("dispose",B);const ut=D.textures,ot=D.isWebGLCubeRenderTarget===!0,yt=ut.length>1;if(yt||(tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture()),tt.__version=b.version,h.memory.textures++),ot){L.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(b.mipmaps&&b.mipmaps.length>0){L.__webglFramebuffer[Mt]=[];for(let Ut=0;Ut<b.mipmaps.length;Ut++)L.__webglFramebuffer[Mt][Ut]=o.createFramebuffer()}else L.__webglFramebuffer[Mt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){L.__webglFramebuffer=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)L.__webglFramebuffer[Mt]=o.createFramebuffer()}else L.__webglFramebuffer=o.createFramebuffer();if(yt)for(let Mt=0,Ut=ut.length;Mt<Ut;Mt++){const Kt=r.get(ut[Mt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&We(D)===!1){L.__webglMultisampledFramebuffer=o.createFramebuffer(),L.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let Mt=0;Mt<ut.length;Mt++){const Ut=ut[Mt];L.__webglColorRenderbuffer[Mt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,L.__webglColorRenderbuffer[Mt]);const Kt=c.convert(Ut.format,Ut.colorSpace),xt=c.convert(Ut.type),bt=P(Ut.internalFormat,Kt,xt,Ut.colorSpace,D.isXRRenderTarget===!0),Nt=V(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt,bt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Mt,o.RENDERBUFFER,L.__webglColorRenderbuffer[Mt])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(L.__webglDepthRenderbuffer=o.createRenderbuffer(),kt(L.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ot){i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture),$(o.TEXTURE_CUBE_MAP,b);for(let Mt=0;Mt<6;Mt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ut=0;Ut<b.mipmaps.length;Ut++)Dt(L.__webglFramebuffer[Mt][Ut],D,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ut);else Dt(L.__webglFramebuffer[Mt],D,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);M(b)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(yt){for(let Mt=0,Ut=ut.length;Mt<Ut;Mt++){const Kt=ut[Mt],xt=r.get(Kt);let bt=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(bt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(bt,xt.__webglTexture),$(bt,Kt),Dt(L.__webglFramebuffer,D,Kt,o.COLOR_ATTACHMENT0+Mt,bt,0),M(Kt)&&x(bt)}i.unbindTexture()}else{let Mt=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Mt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Mt,tt.__webglTexture),$(Mt,b),b.mipmaps&&b.mipmaps.length>0)for(let Ut=0;Ut<b.mipmaps.length;Ut++)Dt(L.__webglFramebuffer[Ut],D,b,o.COLOR_ATTACHMENT0,Mt,Ut);else Dt(L.__webglFramebuffer,D,b,o.COLOR_ATTACHMENT0,Mt,0);M(b)&&x(Mt),i.unbindTexture()}D.depthBuffer&&de(D)}function oe(D){const b=D.textures;for(let L=0,tt=b.length;L<tt;L++){const ut=b[L];if(M(ut)){const ot=O(D),yt=r.get(ut).__webglTexture;i.bindTexture(ot,yt),x(ot),i.unbindTexture()}}}const ge=[],ne=[];function je(D){if(D.samples>0){if(We(D)===!1){const b=D.textures,L=D.width,tt=D.height;let ut=o.COLOR_BUFFER_BIT;const ot=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,yt=r.get(D),Mt=b.length>1;if(Mt)for(let Kt=0;Kt<b.length;Kt++)i.bindFramebuffer(o.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const Ut=D.texture.mipmaps;Ut&&Ut.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Kt=0;Kt<b.length;Kt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ut|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ut|=o.STENCIL_BUFFER_BIT)),Mt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,yt.__webglColorRenderbuffer[Kt]);const xt=r.get(b[Kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,xt,0)}o.blitFramebuffer(0,0,L,tt,0,0,L,tt,ut,o.NEAREST),m===!0&&(ge.length=0,ne.length=0,ge.push(o.COLOR_ATTACHMENT0+Kt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ge.push(ot),ne.push(ot),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ne)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ge))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Mt)for(let Kt=0;Kt<b.length;Kt++){i.bindFramebuffer(o.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,yt.__webglColorRenderbuffer[Kt]);const xt=r.get(b[Kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,xt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const b=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function V(D){return Math.min(l.maxSamples,D.samples)}function We(D){const b=r.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function _e(D){const b=h.render.frame;_.get(D)!==b&&(_.set(D,b),D.update())}function Ae(D,b){const L=D.colorSpace,tt=D.format,ut=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||L!==Gs&&L!==$a&&(we.getTransfer(L)===Fe?(tt!==wi||ut!==ii)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ee("WebGLTextures: Unsupported texture color space:",L)),b}function qt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=st,this.setTexture2D=ft,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=nt,this.rebindTextures=Ye,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function NA(o,t){function i(r,l=$a){let c;const h=we.getTransfer(l);if(r===ii)return o.UNSIGNED_BYTE;if(r===Xd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Wd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===hv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===dv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===uv)return o.BYTE;if(r===fv)return o.SHORT;if(r===tl)return o.UNSIGNED_SHORT;if(r===kd)return o.INT;if(r===ki)return o.UNSIGNED_INT;if(r===Fi)return o.FLOAT;if(r===xa)return o.HALF_FLOAT;if(r===pv)return o.ALPHA;if(r===mv)return o.RGB;if(r===wi)return o.RGBA;if(r===ya)return o.DEPTH_COMPONENT;if(r===Nr)return o.DEPTH_STENCIL;if(r===gv)return o.RED;if(r===qd)return o.RED_INTEGER;if(r===Hs)return o.RG;if(r===Yd)return o.RG_INTEGER;if(r===jd)return o.RGBA_INTEGER;if(r===kc||r===Xc||r===Wc||r===qc)if(h===Fe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Wc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rd||r===sd||r===od||r===ld)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===rd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===od)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ld)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cd||r===ud||r===fd||r===hd||r===dd||r===pd||r===md)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===cd||r===ud)return h===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===fd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===hd)return c.COMPRESSED_R11_EAC;if(r===dd)return c.COMPRESSED_SIGNED_R11_EAC;if(r===pd)return c.COMPRESSED_RG11_EAC;if(r===md)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===gd||r===_d||r===vd||r===xd||r===yd||r===Sd||r===Md||r===bd||r===Ed||r===Td||r===Ad||r===Rd||r===wd||r===Cd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===gd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_d)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Md)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ed)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Td)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ad)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dd||r===Ud||r===Nd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Dd)return h===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ud)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Nd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ld||r===Od||r===Id||r===Pd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Ld)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Od)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Id)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Pd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===el?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const LA=`
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

}`;class IA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Dv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Wi({vertexShader:LA,fragmentShader:OA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ai(new ol(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PA extends ks{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,y=null,S=null,A=null;const w=typeof XRWebGLBinding<"u",M=new IA,x={},O=i.getContextAttributes();let P=null,I=null;const F=[],G=[],B=new me;let Q=null;const R=new qn;R.viewport=new an;const C=new qn;C.viewport=new an;const X=[R,C],st=new qM;let rt=null,pt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ht=F[j];return ht===void 0&&(ht=new Ih,F[j]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(j){let ht=F[j];return ht===void 0&&(ht=new Ih,F[j]=ht),ht.getGripSpace()},this.getHand=function(j){let ht=F[j];return ht===void 0&&(ht=new Ih,F[j]=ht),ht.getHandSpace()};function ft(j){const ht=G.indexOf(j.inputSource);if(ht===-1)return;const Dt=F[ht];Dt!==void 0&&(Dt.update(j.inputSource,j.frame,p||h),Dt.dispatchEvent({type:j.type,data:j.inputSource}))}function N(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",z);for(let j=0;j<F.length;j++){const ht=G[j];ht!==null&&(G[j]=null,F[j].disconnect(ht))}rt=null,pt=null,M.reset();for(const j in x)delete x[j];t.setRenderTarget(P),S=null,y=null,g=null,l=null,I=null,Pt.stop(),r.isPresenting=!1,t.setPixelRatio(Q),t.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){c=j,r.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){d=j,r.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",N),l.addEventListener("inputsourceschange",z),O.xrCompatible!==!0&&await i.makeXRCompatible(),Q=t.getPixelRatio(),t.getSize(B),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,kt=null,Vt=null;O.depth&&(Vt=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=O.stencil?Nr:ya,kt=O.stencil?el:ki);const de={colorFormat:i.RGBA8,depthFormat:Vt,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer(de),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),I=new Vi(y.textureWidth,y.textureHeight,{format:wi,type:ii,depthTexture:new al(y.textureWidth,y.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Dt={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new Vi(S.framebufferWidth,S.framebufferHeight,{format:wi,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Pt.setContext(l),Pt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function z(j){for(let ht=0;ht<j.removed.length;ht++){const Dt=j.removed[ht],kt=G.indexOf(Dt);kt>=0&&(G[kt]=null,F[kt].disconnect(Dt))}for(let ht=0;ht<j.added.length;ht++){const Dt=j.added[ht];let kt=G.indexOf(Dt);if(kt===-1){for(let de=0;de<F.length;de++)if(de>=G.length){G.push(Dt),kt=de;break}else if(G[de]===null){G[de]=Dt,kt=de;break}if(kt===-1)break}const Vt=F[kt];Vt&&Vt.connect(Dt)}}const nt=new K,Et=new K;function St(j,ht,Dt){nt.setFromMatrixPosition(ht.matrixWorld),Et.setFromMatrixPosition(Dt.matrixWorld);const kt=nt.distanceTo(Et),Vt=ht.projectionMatrix.elements,de=Dt.projectionMatrix.elements,Ye=Vt[14]/(Vt[10]-1),pe=Vt[14]/(Vt[10]+1),oe=(Vt[9]+1)/Vt[5],ge=(Vt[9]-1)/Vt[5],ne=(Vt[8]-1)/Vt[0],je=(de[8]+1)/de[0],V=Ye*ne,We=Ye*je,_e=kt/(-ne+je),Ae=_e*-ne;if(ht.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ae),j.translateZ(_e),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Vt[10]===-1)j.projectionMatrix.copy(ht.projectionMatrix),j.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const qt=Ye+_e,D=pe+_e,b=V-Ae,L=We+(kt-Ae),tt=oe*pe/D*qt,ut=ge*pe/D*qt;j.projectionMatrix.makePerspective(b,L,tt,ut,qt,D),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function U(j,ht){ht===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ht.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;let ht=j.near,Dt=j.far;M.texture!==null&&(M.depthNear>0&&(ht=M.depthNear),M.depthFar>0&&(Dt=M.depthFar)),st.near=C.near=R.near=ht,st.far=C.far=R.far=Dt,(rt!==st.near||pt!==st.far)&&(l.updateRenderState({depthNear:st.near,depthFar:st.far}),rt=st.near,pt=st.far),st.layers.mask=j.layers.mask|6,R.layers.mask=st.layers.mask&3,C.layers.mask=st.layers.mask&5;const kt=j.parent,Vt=st.cameras;U(st,kt);for(let de=0;de<Vt.length;de++)U(Vt[de],kt);Vt.length===2?St(st,R,C):st.projectionMatrix.copy(R.projectionMatrix),$(j,st,kt)};function $(j,ht,Dt){Dt===null?j.matrix.copy(ht.matrixWorld):(j.matrix.copy(Dt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ht.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ht.projectionMatrix),j.projectionMatrixInverse.copy(ht.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Qc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return st},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function(j){m=j,y!==null&&(y.fixedFoveation=j),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=j)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(st)},this.getCameraTexture=function(j){return x[j]};let gt=null;function wt(j,ht){if(_=ht.getViewerPose(p||h),A=ht,_!==null){const Dt=_.views;S!==null&&(t.setRenderTargetFramebuffer(I,S.framebuffer),t.setRenderTarget(I));let kt=!1;Dt.length!==st.cameras.length&&(st.cameras.length=0,kt=!0);for(let pe=0;pe<Dt.length;pe++){const oe=Dt[pe];let ge=null;if(S!==null)ge=S.getViewport(oe);else{const je=g.getViewSubImage(y,oe);ge=je.viewport,pe===0&&(t.setRenderTargetTextures(I,je.colorTexture,je.depthStencilTexture),t.setRenderTarget(I))}let ne=X[pe];ne===void 0&&(ne=new qn,ne.layers.enable(pe),ne.viewport=new an,X[pe]=ne),ne.matrix.fromArray(oe.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(oe.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(ge.x,ge.y,ge.width,ge.height),pe===0&&(st.matrix.copy(ne.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale)),kt===!0&&st.cameras.push(ne)}const Vt=l.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){g=r.getBinding();const pe=g.getDepthInformation(Dt[0]);pe&&pe.isValid&&pe.texture&&M.init(pe,l.renderState)}if(Vt&&Vt.includes("camera-access")&&w){t.state.unbindTexture(),g=r.getBinding();for(let pe=0;pe<Dt.length;pe++){const oe=Dt[pe].camera;if(oe){let ge=x[oe];ge||(ge=new Dv,x[oe]=ge);const ne=g.getCameraImage(oe);ge.sourceTexture=ne}}}}for(let Dt=0;Dt<F.length;Dt++){const kt=G[Dt],Vt=F[Dt];kt!==null&&Vt!==void 0&&Vt.update(kt,ht,p||h)}gt&&gt(j,ht),ht.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ht}),A=null}const Pt=new Lv;Pt.setAnimationLoop(wt),this.setAnimationLoop=function(j){gt=j},this.dispose=function(){}}}const Ar=new Xi,zA=new tn;function BA(o,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,Ev(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,O,P,I){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),g(M,x)):x.isMeshPhongMaterial?(c(M,x),_(M,x)):x.isMeshStandardMaterial?(c(M,x),y(M,x),x.isMeshPhysicalMaterial&&S(M,x,I)):x.isMeshMatcapMaterial?(c(M,x),A(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),w(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,O,P):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Yn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Yn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const O=t.get(x),P=O.envMap,I=O.envMapRotation;P&&(M.envMap.value=P,Ar.copy(I),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),M.envMapRotation.value.setFromMatrix4(zA.makeRotationFromEuler(Ar)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,O,P){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*O,M.scale.value=P*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function y(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,O){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Yn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,x){x.matcap&&(M.matcap.value=x.matcap)}function w(M,x){const O=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function FA(o,t,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,P){const I=P.program;r.uniformBlockBinding(O,I)}function p(O,P){let I=l[O.id];I===void 0&&(A(O),I=_(O),l[O.id]=I,O.addEventListener("dispose",M));const F=P.program;r.updateUBOMapping(O,F);const G=t.render.frame;c[O.id]!==G&&(y(O),c[O.id]=G)}function _(O){const P=g();O.__bindingPointIndex=P;const I=o.createBuffer(),F=O.__size,G=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,I),o.bufferData(o.UNIFORM_BUFFER,F,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,I),I}function g(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return Ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(O){const P=l[O.id],I=O.uniforms,F=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let G=0,B=I.length;G<B;G++){const Q=Array.isArray(I[G])?I[G]:[I[G]];for(let R=0,C=Q.length;R<C;R++){const X=Q[R];if(S(X,G,R,F)===!0){const st=X.__offset,rt=Array.isArray(X.value)?X.value:[X.value];let pt=0;for(let ft=0;ft<rt.length;ft++){const N=rt[ft],z=w(N);typeof N=="number"||typeof N=="boolean"?(X.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,st+pt,X.__data)):N.isMatrix3?(X.__data[0]=N.elements[0],X.__data[1]=N.elements[1],X.__data[2]=N.elements[2],X.__data[3]=0,X.__data[4]=N.elements[3],X.__data[5]=N.elements[4],X.__data[6]=N.elements[5],X.__data[7]=0,X.__data[8]=N.elements[6],X.__data[9]=N.elements[7],X.__data[10]=N.elements[8],X.__data[11]=0):(N.toArray(X.__data,pt),pt+=z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,X.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(O,P,I,F){const G=O.value,B=P+"_"+I;if(F[B]===void 0)return typeof G=="number"||typeof G=="boolean"?F[B]=G:F[B]=G.clone(),!0;{const Q=F[B];if(typeof G=="number"||typeof G=="boolean"){if(Q!==G)return F[B]=G,!0}else if(Q.equals(G)===!1)return Q.copy(G),!0}return!1}function A(O){const P=O.uniforms;let I=0;const F=16;for(let B=0,Q=P.length;B<Q;B++){const R=Array.isArray(P[B])?P[B]:[P[B]];for(let C=0,X=R.length;C<X;C++){const st=R[C],rt=Array.isArray(st.value)?st.value:[st.value];for(let pt=0,ft=rt.length;pt<ft;pt++){const N=rt[pt],z=w(N),nt=I%F,Et=nt%z.boundary,St=nt+Et;I+=Et,St!==0&&F-St<z.storage&&(I+=F-St),st.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=I,I+=z.storage}}}const G=I%F;return G>0&&(I+=F-G),O.__size=I,O.__cache={},this}function w(O){const P={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(P.boundary=4,P.storage=4):O.isVector2?(P.boundary=8,P.storage=8):O.isVector3||O.isColor?(P.boundary=16,P.storage=12):O.isVector4?(P.boundary=16,P.storage=16):O.isMatrix3?(P.boundary=48,P.storage=48):O.isMatrix4?(P.boundary=64,P.storage=64):O.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):se("WebGLRenderer: Unsupported uniform value type.",O),P}function M(O){const P=O.target;P.removeEventListener("dispose",M);const I=h.indexOf(P.__bindingPointIndex);h.splice(I,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function x(){for(const O in l)o.deleteBuffer(l[O]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}const HA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function GA(){return Pi===null&&(Pi=new DM(HA,16,16,Hs,xa),Pi.name="DFG_LUT",Pi.minFilter=In,Pi.magFilter=In,Pi.wrapS=ga,Pi.wrapT=ga,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class VA{constructor(t={}){const{canvas:i=eM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1,outputBufferType:S=ii}=t;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=h;const w=S,M=new Set([jd,Yd,qd]),x=new Set([ii,ki,tl,el,Xd,Wd]),O=new Uint32Array(4),P=new Int32Array(4);let I=null,F=null;const G=[],B=[];let Q=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let C=!1;this._outputColorSpace=gi;let X=0,st=0,rt=null,pt=-1,ft=null;const N=new an,z=new an;let nt=null;const Et=new Te(0);let St=0,U=i.width,$=i.height,gt=1,wt=null,Pt=null;const j=new an(0,0,U,$),ht=new an(0,0,U,$);let Dt=!1;const kt=new np;let Vt=!1,de=!1;const Ye=new tn,pe=new K,oe=new an,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function je(){return rt===null?gt:1}let V=r;function We(T,q){return i.getContext(T,q)}try{const T={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Vd}`),i.addEventListener("webglcontextlost",ie,!1),i.addEventListener("webglcontextrestored",Ie,!1),i.addEventListener("webglcontextcreationerror",Re,!1),V===null){const q="webgl2";if(V=We(q,T),V===null)throw We(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Ee("WebGLRenderer: "+T.message),T}let _e,Ae,qt,D,b,L,tt,ut,ot,yt,Mt,Ut,Kt,xt,bt,Nt,Ot,Lt,ce,W,zt,Rt,Ht,Tt;function vt(){_e=new GT(V),_e.init(),Rt=new NA(V,_e),Ae=new NT(V,_e,t,Rt),qt=new DA(V,_e),Ae.reversedDepthBuffer&&y&&qt.buffers.depth.setReversed(!0),D=new XT(V),b=new mA,L=new UA(V,_e,qt,b,Ae,Rt,D),tt=new OT(R),ut=new HT(R),ot=new jM(V),Ht=new DT(V,ot),yt=new VT(V,ot,D,Ht),Mt=new qT(V,yt,ot,D),ce=new WT(V,Ae,L),Nt=new LT(b),Ut=new pA(R,tt,ut,_e,Ae,Ht,Nt),Kt=new BA(R,b),xt=new _A,bt=new bA(_e),Lt=new CT(R,tt,ut,qt,Mt,A,m),Ot=new wA(R,Mt,Ae),Tt=new FA(V,D,Ae,qt),W=new UT(V,_e,D),zt=new kT(V,_e,D),D.programs=Ut.programs,R.capabilities=Ae,R.extensions=_e,R.properties=b,R.renderLists=xt,R.shadowMap=Ot,R.state=qt,R.info=D}vt(),w!==ii&&(Q=new jT(w,i.width,i.height,l,c));const Ct=new PA(R,V);this.xr=Ct,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=_e.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=_e.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(T){T!==void 0&&(gt=T,this.setSize(U,$,!1))},this.getSize=function(T){return T.set(U,$)},this.setSize=function(T,q,lt=!0){if(Ct.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,$=q,i.width=Math.floor(T*gt),i.height=Math.floor(q*gt),lt===!0&&(i.style.width=T+"px",i.style.height=q+"px"),Q!==null&&Q.setSize(i.width,i.height),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(U*gt,$*gt).floor()},this.setDrawingBufferSize=function(T,q,lt){U=T,$=q,gt=lt,i.width=Math.floor(T*lt),i.height=Math.floor(q*lt),this.setViewport(0,0,T,q)},this.setEffects=function(T){if(w===ii){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let q=0;q<T.length;q++)if(T[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Q.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(j)},this.setViewport=function(T,q,lt,it){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,q,lt,it),qt.viewport(N.copy(j).multiplyScalar(gt).round())},this.getScissor=function(T){return T.copy(ht)},this.setScissor=function(T,q,lt,it){T.isVector4?ht.set(T.x,T.y,T.z,T.w):ht.set(T,q,lt,it),qt.scissor(z.copy(ht).multiplyScalar(gt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(T){qt.setScissorTest(Dt=T)},this.setOpaqueSort=function(T){wt=T},this.setTransparentSort=function(T){Pt=T},this.getClearColor=function(T){return T.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(T=!0,q=!0,lt=!0){let it=0;if(T){let Z=!1;if(rt!==null){const It=rt.texture.format;Z=M.has(It)}if(Z){const It=rt.texture.type,Gt=x.has(It),Bt=Lt.getClearColor(),Xt=Lt.getClearAlpha(),Yt=Bt.r,$t=Bt.g,jt=Bt.b;Gt?(O[0]=Yt,O[1]=$t,O[2]=jt,O[3]=Xt,V.clearBufferuiv(V.COLOR,0,O)):(P[0]=Yt,P[1]=$t,P[2]=jt,P[3]=Xt,V.clearBufferiv(V.COLOR,0,P))}else it|=V.COLOR_BUFFER_BIT}q&&(it|=V.DEPTH_BUFFER_BIT),lt&&(it|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ie,!1),i.removeEventListener("webglcontextrestored",Ie,!1),i.removeEventListener("webglcontextcreationerror",Re,!1),Lt.dispose(),xt.dispose(),bt.dispose(),b.dispose(),tt.dispose(),ut.dispose(),Mt.dispose(),Ht.dispose(),Tt.dispose(),Ut.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Pr),Ct.removeEventListener("sessionend",Zs),Ui.stop()};function ie(T){T.preventDefault(),Kc("WebGLRenderer: Context Lost."),C=!0}function Ie(){Kc("WebGLRenderer: Context Restored."),C=!1;const T=D.autoReset,q=Ot.enabled,lt=Ot.autoUpdate,it=Ot.needsUpdate,Z=Ot.type;vt(),D.autoReset=T,Ot.enabled=q,Ot.autoUpdate=lt,Ot.needsUpdate=it,Ot.type=Z}function Re(T){Ee("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Un(T){const q=T.target;q.removeEventListener("dispose",Un),xi(q)}function xi(T){ll(T),b.remove(T)}function ll(T){const q=b.get(T).programs;q!==void 0&&(q.forEach(function(lt){Ut.releaseProgram(lt)}),T.isShaderMaterial&&Ut.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,lt,it,Z,It){q===null&&(q=ge);const Gt=Z.isMesh&&Z.matrixWorld.determinant()<0,Bt=ir(T,q,lt,it,Z);qt.setMaterial(it,Gt);let Xt=lt.index,Yt=1;if(it.wireframe===!0){if(Xt=yt.getWireframeAttribute(lt),Xt===void 0)return;Yt=2}const $t=lt.drawRange,jt=lt.attributes.position;let te=$t.start*Yt,Ue=($t.start+$t.count)*Yt;It!==null&&(te=Math.max(te,It.start*Yt),Ue=Math.min(Ue,(It.start+It.count)*Yt)),Xt!==null?(te=Math.max(te,0),Ue=Math.min(Ue,Xt.count)):jt!=null&&(te=Math.max(te,0),Ue=Math.min(Ue,jt.count));const Je=Ue-te;if(Je<0||Je===1/0)return;Ht.setup(Z,it,Bt,lt,Xt);let Ze,Oe=W;if(Xt!==null&&(Ze=ot.get(Xt),Oe=zt,Oe.setIndex(Ze)),Z.isMesh)it.wireframe===!0?(qt.setLineWidth(it.wireframeLinewidth*je()),Oe.setMode(V.LINES)):Oe.setMode(V.TRIANGLES);else if(Z.isLine){let Qt=it.linewidth;Qt===void 0&&(Qt=1),qt.setLineWidth(Qt*je()),Z.isLineSegments?Oe.setMode(V.LINES):Z.isLineLoop?Oe.setMode(V.LINE_LOOP):Oe.setMode(V.LINE_STRIP)}else Z.isPoints?Oe.setMode(V.POINTS):Z.isSprite&&Oe.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)il("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))Oe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qt=Z._multiDrawStarts,Ne=Z._multiDrawCounts,ae=Z._multiDrawCount,Sn=Xt?ot.get(Xt).bytesPerElement:1,qi=b.get(it).currentProgram.getUniforms();for(let Mn=0;Mn<ae;Mn++)qi.setValue(V,"_gl_DrawID",Mn),Oe.render(Qt[Mn]/Sn,Ne[Mn])}else if(Z.isInstancedMesh)Oe.renderInstances(te,Je,Z.count);else if(lt.isInstancedBufferGeometry){const Qt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Ne=Math.min(lt.instanceCount,Qt);Oe.renderInstances(te,Je,Ne)}else Oe.render(te,Je)};function Ys(T,q,lt){T.transparent===!0&&T.side===ma&&T.forceSinglePass===!1?(T.side=Yn,T.needsUpdate=!0,Br(T,q,lt),T.side=nr,T.needsUpdate=!0,Br(T,q,lt),T.side=ma):Br(T,q,lt)}this.compile=function(T,q,lt=null){lt===null&&(lt=T),F=bt.get(lt),F.init(q),B.push(F),lt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),T!==lt&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),F.setupLights();const it=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const It=Z.material;if(It)if(Array.isArray(It))for(let Gt=0;Gt<It.length;Gt++){const Bt=It[Gt];Ys(Bt,lt,Z),it.add(Bt)}else Ys(It,lt,Z),it.add(It)}),F=B.pop(),it},this.compileAsync=function(T,q,lt=null){const it=this.compile(T,q,lt);return new Promise(Z=>{function It(){if(it.forEach(function(Gt){b.get(Gt).currentProgram.isReady()&&it.delete(Gt)}),it.size===0){Z(T);return}setTimeout(It,10)}_e.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Ir=null;function js(T){Ir&&Ir(T)}function Pr(){Ui.stop()}function Zs(){Ui.start()}const Ui=new Lv;Ui.setAnimationLoop(js),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(T){Ir=T,Ct.setAnimationLoop(T),T===null?Ui.stop():Ui.start()},Ct.addEventListener("sessionstart",Pr),Ct.addEventListener("sessionend",Zs),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){Ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;const lt=Ct.enabled===!0&&Ct.isPresenting===!0,it=Q!==null&&(rt===null||lt)&&Q.begin(R,rt);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Q===null||Q.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(q),q=Ct.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,q,rt),F=bt.get(T,B.length),F.init(q),B.push(F),Ye.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),kt.setFromProjectionMatrix(Ye,Hi,q.reversedDepth),de=this.localClippingEnabled,Vt=Nt.init(this.clippingPlanes,de),I=xt.get(T,G.length),I.init(),G.push(I),Ct.enabled===!0&&Ct.isPresenting===!0){const Gt=R.xr.getDepthSensingMesh();Gt!==null&&ri(Gt,q,-1/0,R.sortObjects)}ri(T,q,0,R.sortObjects),I.finish(),R.sortObjects===!0&&I.sort(wt,Pt),ne=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,ne&&Lt.addToRenderList(I,T),this.info.render.frame++,Vt===!0&&Nt.beginShadows();const Z=F.state.shadowsArray;if(Ot.render(Z,T,q),Vt===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&Q.hasRenderPass())===!1){const Gt=I.opaque,Bt=I.transmissive;if(F.setupLights(),q.isArrayCamera){const Xt=q.cameras;if(Bt.length>0)for(let Yt=0,$t=Xt.length;Yt<$t;Yt++){const jt=Xt[Yt];yn(Gt,Bt,T,jt)}ne&&Lt.render(T);for(let Yt=0,$t=Xt.length;Yt<$t;Yt++){const jt=Xt[Yt];on(I,T,jt,jt.viewport)}}else Bt.length>0&&yn(Gt,Bt,T,q),ne&&Lt.render(T),on(I,T,q)}rt!==null&&st===0&&(L.updateMultisampleRenderTarget(rt),L.updateRenderTargetMipmap(rt)),it&&Q.end(R),T.isScene===!0&&T.onAfterRender(R,T,q),Ht.resetDefaultState(),pt=-1,ft=null,B.pop(),B.length>0?(F=B[B.length-1],Vt===!0&&Nt.setGlobalState(R.clippingPlanes,F.state.camera)):F=null,G.pop(),G.length>0?I=G[G.length-1]:I=null};function ri(T,q,lt,it){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)lt=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)F.pushLight(T),T.castShadow&&F.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||kt.intersectsSprite(T)){it&&oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ye);const Gt=Mt.update(T),Bt=T.material;Bt.visible&&I.push(T,Gt,Bt,lt,oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||kt.intersectsObject(T))){const Gt=Mt.update(T),Bt=T.material;if(it&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),oe.copy(T.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),oe.copy(Gt.boundingSphere.center)),oe.applyMatrix4(T.matrixWorld).applyMatrix4(Ye)),Array.isArray(Bt)){const Xt=Gt.groups;for(let Yt=0,$t=Xt.length;Yt<$t;Yt++){const jt=Xt[Yt],te=Bt[jt.materialIndex];te&&te.visible&&I.push(T,Gt,te,lt,oe.z,jt)}}else Bt.visible&&I.push(T,Gt,Bt,lt,oe.z,null)}}const It=T.children;for(let Gt=0,Bt=It.length;Gt<Bt;Gt++)ri(It[Gt],q,lt,it)}function on(T,q,lt,it){const{opaque:Z,transmissive:It,transparent:Gt}=T;F.setupLightsView(lt),Vt===!0&&Nt.setGlobalState(R.clippingPlanes,lt),it&&qt.viewport(N.copy(it)),Z.length>0&&yi(Z,q,lt),It.length>0&&yi(It,q,lt),Gt.length>0&&yi(Gt,q,lt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function yn(T,q,lt,it){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[it.id]===void 0){const te=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[it.id]=new Vi(1,1,{generateMipmaps:!0,type:te?xa:ii,minFilter:Ur,samples:Ae.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace})}const It=F.state.transmissionRenderTarget[it.id],Gt=it.viewport||N;It.setSize(Gt.z*R.transmissionResolutionScale,Gt.w*R.transmissionResolutionScale);const Bt=R.getRenderTarget(),Xt=R.getActiveCubeFace(),Yt=R.getActiveMipmapLevel();R.setRenderTarget(It),R.getClearColor(Et),St=R.getClearAlpha(),St<1&&R.setClearColor(16777215,.5),R.clear(),ne&&Lt.render(lt);const $t=R.toneMapping;R.toneMapping=Gi;const jt=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),F.setupLightsView(it),Vt===!0&&Nt.setGlobalState(R.clippingPlanes,it),yi(T,lt,it),L.updateMultisampleRenderTarget(It),L.updateRenderTargetMipmap(It),_e.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Ue=0,Je=q.length;Ue<Je;Ue++){const Ze=q[Ue],{object:Oe,geometry:Qt,material:Ne,group:ae}=Ze;if(Ne.side===ma&&Oe.layers.test(it.layers)){const Sn=Ne.side;Ne.side=Yn,Ne.needsUpdate=!0,zr(Oe,lt,it,Qt,Ne,ae),Ne.side=Sn,Ne.needsUpdate=!0,te=!0}}te===!0&&(L.updateMultisampleRenderTarget(It),L.updateRenderTargetMipmap(It))}R.setRenderTarget(Bt,Xt,Yt),R.setClearColor(Et,St),jt!==void 0&&(it.viewport=jt),R.toneMapping=$t}function yi(T,q,lt){const it=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,It=T.length;Z<It;Z++){const Gt=T[Z],{object:Bt,geometry:Xt,group:Yt}=Gt;let $t=Gt.material;$t.allowOverride===!0&&it!==null&&($t=it),Bt.layers.test(lt.layers)&&zr(Bt,q,lt,Xt,$t,Yt)}}function zr(T,q,lt,it,Z,It){T.onBeforeRender(R,q,lt,it,Z,It),T.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(R,q,lt,it,T,It),Z.transparent===!0&&Z.side===ma&&Z.forceSinglePass===!1?(Z.side=Yn,Z.needsUpdate=!0,R.renderBufferDirect(lt,q,it,Z,T,It),Z.side=nr,Z.needsUpdate=!0,R.renderBufferDirect(lt,q,it,Z,T,It),Z.side=ma):R.renderBufferDirect(lt,q,it,Z,T,It),T.onAfterRender(R,q,lt,it,Z,It)}function Br(T,q,lt){q.isScene!==!0&&(q=ge);const it=b.get(T),Z=F.state.lights,It=F.state.shadowsArray,Gt=Z.state.version,Bt=Ut.getParameters(T,Z.state,It,q,lt),Xt=Ut.getProgramCacheKey(Bt);let Yt=it.programs;it.environment=T.isMeshStandardMaterial?q.environment:null,it.fog=q.fog,it.envMap=(T.isMeshStandardMaterial?ut:tt).get(T.envMap||it.environment),it.envMapRotation=it.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,Yt===void 0&&(T.addEventListener("dispose",Un),Yt=new Map,it.programs=Yt);let $t=Yt.get(Xt);if($t!==void 0){if(it.currentProgram===$t&&it.lightsStateVersion===Gt)return Ks(T,Bt),$t}else Bt.uniforms=Ut.getUniforms(T),T.onBeforeCompile(Bt,R),$t=Ut.acquireProgram(Bt,Xt),Yt.set(Xt,$t),it.uniforms=Bt.uniforms;const jt=it.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(jt.clippingPlanes=Nt.uniform),Ks(T,Bt),it.needsLights=Sa(T),it.lightsStateVersion=Gt,it.needsLights&&(jt.ambientLightColor.value=Z.state.ambient,jt.lightProbe.value=Z.state.probe,jt.directionalLights.value=Z.state.directional,jt.directionalLightShadows.value=Z.state.directionalShadow,jt.spotLights.value=Z.state.spot,jt.spotLightShadows.value=Z.state.spotShadow,jt.rectAreaLights.value=Z.state.rectArea,jt.ltc_1.value=Z.state.rectAreaLTC1,jt.ltc_2.value=Z.state.rectAreaLTC2,jt.pointLights.value=Z.state.point,jt.pointLightShadows.value=Z.state.pointShadow,jt.hemisphereLights.value=Z.state.hemi,jt.directionalShadowMap.value=Z.state.directionalShadowMap,jt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,jt.spotShadowMap.value=Z.state.spotShadowMap,jt.spotLightMatrix.value=Z.state.spotLightMatrix,jt.spotLightMap.value=Z.state.spotLightMap,jt.pointShadowMap.value=Z.state.pointShadowMap,jt.pointShadowMatrix.value=Z.state.pointShadowMatrix),it.currentProgram=$t,it.uniformsList=null,$t}function cl(T){if(T.uniformsList===null){const q=T.currentProgram.getUniforms();T.uniformsList=Yc.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function Ks(T,q){const lt=b.get(T);lt.outputColorSpace=q.outputColorSpace,lt.batching=q.batching,lt.batchingColor=q.batchingColor,lt.instancing=q.instancing,lt.instancingColor=q.instancingColor,lt.instancingMorph=q.instancingMorph,lt.skinning=q.skinning,lt.morphTargets=q.morphTargets,lt.morphNormals=q.morphNormals,lt.morphColors=q.morphColors,lt.morphTargetsCount=q.morphTargetsCount,lt.numClippingPlanes=q.numClippingPlanes,lt.numIntersection=q.numClipIntersection,lt.vertexAlphas=q.vertexAlphas,lt.vertexTangents=q.vertexTangents,lt.toneMapping=q.toneMapping}function ir(T,q,lt,it,Z){q.isScene!==!0&&(q=ge),L.resetTextureUnits();const It=q.fog,Gt=it.isMeshStandardMaterial?q.environment:null,Bt=rt===null?R.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Gs,Xt=(it.isMeshStandardMaterial?ut:tt).get(it.envMap||Gt),Yt=it.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,$t=!!lt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),jt=!!lt.morphAttributes.position,te=!!lt.morphAttributes.normal,Ue=!!lt.morphAttributes.color;let Je=Gi;it.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Je=R.toneMapping);const Ze=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Oe=Ze!==void 0?Ze.length:0,Qt=b.get(it),Ne=F.state.lights;if(Vt===!0&&(de===!0||T!==ft)){const En=T===ft&&it.id===pt;Nt.setState(it,T,En)}let ae=!1;it.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Ne.state.version||Qt.outputColorSpace!==Bt||Z.isBatchedMesh&&Qt.batching===!1||!Z.isBatchedMesh&&Qt.batching===!0||Z.isBatchedMesh&&Qt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Qt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Qt.instancing===!1||!Z.isInstancedMesh&&Qt.instancing===!0||Z.isSkinnedMesh&&Qt.skinning===!1||!Z.isSkinnedMesh&&Qt.skinning===!0||Z.isInstancedMesh&&Qt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Qt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Qt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Qt.instancingMorph===!1&&Z.morphTexture!==null||Qt.envMap!==Xt||it.fog===!0&&Qt.fog!==It||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Nt.numPlanes||Qt.numIntersection!==Nt.numIntersection)||Qt.vertexAlphas!==Yt||Qt.vertexTangents!==$t||Qt.morphTargets!==jt||Qt.morphNormals!==te||Qt.morphColors!==Ue||Qt.toneMapping!==Je||Qt.morphTargetsCount!==Oe)&&(ae=!0):(ae=!0,Qt.__version=it.version);let Sn=Qt.currentProgram;ae===!0&&(Sn=Br(it,q,Z));let qi=!1,Mn=!1,si=!1;const Pe=Sn.getUniforms(),bn=Qt.uniforms;if(qt.useProgram(Sn.program)&&(qi=!0,Mn=!0,si=!0),it.id!==pt&&(pt=it.id,Mn=!0),qi||ft!==T){qt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Pe.setValue(V,"projectionMatrix",T.projectionMatrix),Pe.setValue(V,"viewMatrix",T.matrixWorldInverse);const Tn=Pe.map.cameraPosition;Tn!==void 0&&Tn.setValue(V,pe.setFromMatrixPosition(T.matrixWorld)),Ae.logarithmicDepthBuffer&&Pe.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Pe.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),ft!==T&&(ft=T,Mn=!0,si=!0)}if(Qt.needsLights&&(Ne.state.directionalShadowMap.length>0&&Pe.setValue(V,"directionalShadowMap",Ne.state.directionalShadowMap,L),Ne.state.spotShadowMap.length>0&&Pe.setValue(V,"spotShadowMap",Ne.state.spotShadowMap,L),Ne.state.pointShadowMap.length>0&&Pe.setValue(V,"pointShadowMap",Ne.state.pointShadowMap,L)),Z.isSkinnedMesh){Pe.setOptional(V,Z,"bindMatrix"),Pe.setOptional(V,Z,"bindMatrixInverse");const En=Z.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Pe.setValue(V,"boneTexture",En.boneTexture,L))}Z.isBatchedMesh&&(Pe.setOptional(V,Z,"batchingTexture"),Pe.setValue(V,"batchingTexture",Z._matricesTexture,L),Pe.setOptional(V,Z,"batchingIdTexture"),Pe.setValue(V,"batchingIdTexture",Z._indirectTexture,L),Pe.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Pe.setValue(V,"batchingColorTexture",Z._colorsTexture,L));const dn=lt.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&ce.update(Z,lt,Sn),(Mn||Qt.receiveShadow!==Z.receiveShadow)&&(Qt.receiveShadow=Z.receiveShadow,Pe.setValue(V,"receiveShadow",Z.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(bn.envMap.value=Xt,bn.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&q.environment!==null&&(bn.envMapIntensity.value=q.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=GA()),Mn&&(Pe.setValue(V,"toneMappingExposure",R.toneMappingExposure),Qt.needsLights&&Qs(bn,si),It&&it.fog===!0&&Kt.refreshFogUniforms(bn,It),Kt.refreshMaterialUniforms(bn,it,gt,$,F.state.transmissionRenderTarget[T.id]),Yc.upload(V,cl(Qt),bn,L)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Yc.upload(V,cl(Qt),bn,L),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Pe.setValue(V,"center",Z.center),Pe.setValue(V,"modelViewMatrix",Z.modelViewMatrix),Pe.setValue(V,"normalMatrix",Z.normalMatrix),Pe.setValue(V,"modelMatrix",Z.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const En=it.uniformsGroups;for(let Tn=0,Fr=En.length;Tn<Fr;Tn++){const Si=En[Tn];Tt.update(Si,Sn),Tt.bind(Si,Sn)}}return Sn}function Qs(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function Sa(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(T,q,lt){const it=b.get(T);it.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),b.get(T.texture).__webglTexture=q,b.get(T.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:lt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,q){const lt=b.get(T);lt.__webglFramebuffer=q,lt.__useDefaultFramebuffer=q===void 0};const Ma=V.createFramebuffer();this.setRenderTarget=function(T,q=0,lt=0){rt=T,X=q,st=lt;let it=null,Z=!1,It=!1;if(T){const Bt=b.get(T);if(Bt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(V.FRAMEBUFFER,Bt.__webglFramebuffer),N.copy(T.viewport),z.copy(T.scissor),nt=T.scissorTest,qt.viewport(N),qt.scissor(z),qt.setScissorTest(nt),pt=-1;return}else if(Bt.__webglFramebuffer===void 0)L.setupRenderTarget(T);else if(Bt.__hasExternalTextures)L.rebindTextures(T,b.get(T.texture).__webglTexture,b.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const $t=T.depthTexture;if(Bt.__boundDepthTexture!==$t){if($t!==null&&b.has($t)&&(T.width!==$t.image.width||T.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(T)}}const Xt=T.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(It=!0);const Yt=b.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Yt[q])?it=Yt[q][lt]:it=Yt[q],Z=!0):T.samples>0&&L.useMultisampledRTT(T)===!1?it=b.get(T).__webglMultisampledFramebuffer:Array.isArray(Yt)?it=Yt[lt]:it=Yt,N.copy(T.viewport),z.copy(T.scissor),nt=T.scissorTest}else N.copy(j).multiplyScalar(gt).floor(),z.copy(ht).multiplyScalar(gt).floor(),nt=Dt;if(lt!==0&&(it=Ma),qt.bindFramebuffer(V.FRAMEBUFFER,it)&&qt.drawBuffers(T,it),qt.viewport(N),qt.scissor(z),qt.setScissorTest(nt),Z){const Bt=b.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,Bt.__webglTexture,lt)}else if(It){const Bt=q;for(let Xt=0;Xt<T.textures.length;Xt++){const Yt=b.get(T.textures[Xt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Xt,Yt.__webglTexture,lt,Bt)}}else if(T!==null&&lt!==0){const Bt=b.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Bt.__webglTexture,lt)}pt=-1},this.readRenderTargetPixels=function(T,q,lt,it,Z,It,Gt,Bt=0){if(!(T&&T.isWebGLRenderTarget)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=b.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Gt!==void 0&&(Xt=Xt[Gt]),Xt){qt.bindFramebuffer(V.FRAMEBUFFER,Xt);try{const Yt=T.textures[Bt],$t=Yt.format,jt=Yt.type;if(!Ae.textureFormatReadable($t)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(jt)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-it&&lt>=0&&lt<=T.height-Z&&(T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Bt),V.readPixels(q,lt,it,Z,Rt.convert($t),Rt.convert(jt),It))}finally{const Yt=rt!==null?b.get(rt).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(T,q,lt,it,Z,It,Gt,Bt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=b.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Gt!==void 0&&(Xt=Xt[Gt]),Xt)if(q>=0&&q<=T.width-it&&lt>=0&&lt<=T.height-Z){qt.bindFramebuffer(V.FRAMEBUFFER,Xt);const Yt=T.textures[Bt],$t=Yt.format,jt=Yt.type;if(!Ae.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,te),V.bufferData(V.PIXEL_PACK_BUFFER,It.byteLength,V.STREAM_READ),T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Bt),V.readPixels(q,lt,it,Z,Rt.convert($t),Rt.convert(jt),0);const Ue=rt!==null?b.get(rt).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,Ue);const Je=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await nM(V,Je,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,te),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,It),V.deleteBuffer(te),V.deleteSync(Je),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,q=null,lt=0){const it=Math.pow(2,-lt),Z=Math.floor(T.image.width*it),It=Math.floor(T.image.height*it),Gt=q!==null?q.x:0,Bt=q!==null?q.y:0;L.setTexture2D(T,0),V.copyTexSubImage2D(V.TEXTURE_2D,lt,0,0,Gt,Bt,Z,It),qt.unbindTexture()};const ar=V.createFramebuffer(),ba=V.createFramebuffer();this.copyTextureToTexture=function(T,q,lt=null,it=null,Z=0,It=null){It===null&&(Z!==0?(il("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),It=Z,Z=0):It=0);let Gt,Bt,Xt,Yt,$t,jt,te,Ue,Je;const Ze=T.isCompressedTexture?T.mipmaps[It]:T.image;if(lt!==null)Gt=lt.max.x-lt.min.x,Bt=lt.max.y-lt.min.y,Xt=lt.isBox3?lt.max.z-lt.min.z:1,Yt=lt.min.x,$t=lt.min.y,jt=lt.isBox3?lt.min.z:0;else{const dn=Math.pow(2,-Z);Gt=Math.floor(Ze.width*dn),Bt=Math.floor(Ze.height*dn),T.isDataArrayTexture?Xt=Ze.depth:T.isData3DTexture?Xt=Math.floor(Ze.depth*dn):Xt=1,Yt=0,$t=0,jt=0}it!==null?(te=it.x,Ue=it.y,Je=it.z):(te=0,Ue=0,Je=0);const Oe=Rt.convert(q.format),Qt=Rt.convert(q.type);let Ne;q.isData3DTexture?(L.setTexture3D(q,0),Ne=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(L.setTexture2DArray(q,0),Ne=V.TEXTURE_2D_ARRAY):(L.setTexture2D(q,0),Ne=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const ae=V.getParameter(V.UNPACK_ROW_LENGTH),Sn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),qi=V.getParameter(V.UNPACK_SKIP_PIXELS),Mn=V.getParameter(V.UNPACK_SKIP_ROWS),si=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ze.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ze.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Yt),V.pixelStorei(V.UNPACK_SKIP_ROWS,$t),V.pixelStorei(V.UNPACK_SKIP_IMAGES,jt);const Pe=T.isDataArrayTexture||T.isData3DTexture,bn=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){const dn=b.get(T),En=b.get(q),Tn=b.get(dn.__renderTarget),Fr=b.get(En.__renderTarget);qt.bindFramebuffer(V.READ_FRAMEBUFFER,Tn.__webglFramebuffer),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let Si=0;Si<Xt;Si++)Pe&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(T).__webglTexture,Z,jt+Si),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(q).__webglTexture,It,Je+Si)),V.blitFramebuffer(Yt,$t,Gt,Bt,te,Ue,Gt,Bt,V.DEPTH_BUFFER_BIT,V.NEAREST);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||b.has(T)){const dn=b.get(T),En=b.get(q);qt.bindFramebuffer(V.READ_FRAMEBUFFER,ar),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,ba);for(let Tn=0;Tn<Xt;Tn++)Pe?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,dn.__webglTexture,Z,jt+Tn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,dn.__webglTexture,Z),bn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,En.__webglTexture,It,Je+Tn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,En.__webglTexture,It),Z!==0?V.blitFramebuffer(Yt,$t,Gt,Bt,te,Ue,Gt,Bt,V.COLOR_BUFFER_BIT,V.NEAREST):bn?V.copyTexSubImage3D(Ne,It,te,Ue,Je+Tn,Yt,$t,Gt,Bt):V.copyTexSubImage2D(Ne,It,te,Ue,Yt,$t,Gt,Bt);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else bn?T.isDataTexture||T.isData3DTexture?V.texSubImage3D(Ne,It,te,Ue,Je,Gt,Bt,Xt,Oe,Qt,Ze.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(Ne,It,te,Ue,Je,Gt,Bt,Xt,Oe,Ze.data):V.texSubImage3D(Ne,It,te,Ue,Je,Gt,Bt,Xt,Oe,Qt,Ze):T.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,It,te,Ue,Gt,Bt,Oe,Qt,Ze.data):T.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,It,te,Ue,Ze.width,Ze.height,Oe,Ze.data):V.texSubImage2D(V.TEXTURE_2D,It,te,Ue,Gt,Bt,Oe,Qt,Ze);V.pixelStorei(V.UNPACK_ROW_LENGTH,ae),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Sn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,qi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Mn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,si),It===0&&q.generateMipmaps&&V.generateMipmap(Ne),qt.unbindTexture()},this.initRenderTarget=function(T){b.get(T).__webglFramebuffer===void 0&&L.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?L.setTextureCube(T,0):T.isData3DTexture?L.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?L.setTexture2DArray(T,0):L.setTexture2D(T,0),qt.unbindTexture()},this.resetState=function(){X=0,st=0,rt=null,qt.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}const kA=[{time:2,text:"It's dark. Too dark."},{time:10,text:"I need to find the keys. They said three would open the way."},{time:25,text:"I hear... slurping sounds?"},{time:45,text:"The bananas... they aren't right here."},{time:60,text:"DONT LET THEM TOUCH YOU."},{time:90,text:"The peeling... it never stops."}],XA=({onExit:o})=>{const t=ke.useRef(),[i,r]=ke.useState(100),[l,c]=ke.useState(!1),[h,d]=ke.useState("OBJECTIVE: FIND 3 RUSTY KEYS"),[m,p]=ke.useState(0),[_,g]=ke.useState(null),[y,S]=ke.useState(null),[A,w]=ke.useState(!1),[M,x]=ke.useState(!1),O=ke.useRef(null),P=ke.useRef(100),I=ke.useRef(performance.now()),F=ke.useRef([]),G=ke.useRef(0),B=ke.useRef(!1),Q=ke.useRef([[1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,1,0,0,0,0,0,0,1],[1,0,1,0,1,0,1,1,0,1,0,1],[1,0,1,0,0,0,0,1,0,1,0,1],[1,0,1,1,1,1,0,1,1,1,0,1],[1,0,0,0,0,1,0,0,0,0,0,1],[1,1,1,1,0,1,1,1,0,1,0,1],[1,0,0,1,0,0,0,1,0,1,0,1],[1,0,0,0,0,1,0,0,0,1,0,1],[1,0,1,1,1,1,0,1,0,1,0,1],[1,0,0,0,0,1,0,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1]]),R=10,C=ke.useRef([]);return ke.useEffect(()=>{if(!t.current)return;const X="/horror/",st=new GM,rt=st.load(`${X}images/wallpaper.png`),pt=st.load(`${X}images/carpet.png`),ft=st.load(`${X}images/nano_banana.png`,()=>console.log("Banana Texture Loaded"),void 0,L=>console.error("Banana Texture Failed:",L));rt.wrapS=Dr,rt.wrapT=Dr,pt.wrapS=Dr,pt.wrapT=Dr;const N=new RM;N.background=new Te(1118481),N.fog=new ep(1118481,.02);const z=new qn(75,window.innerWidth/window.innerHeight,.1,1e3),nt=new VA({antialias:!1,alpha:!1});nt.setSize(window.innerWidth,window.innerHeight),nt.domElement.style.cssText="position:absolute; top:0; left:0; width:100%; height:100%; filter: contrast(1.1) brightness(1.2);",t.current.appendChild(nt.domElement);const Et=new Bh({map:rt,color:8947848,roughness:.8,metalness:.1}),St=new Bh({map:pt,color:6710886,roughness:1}),U=new Bh({color:3355443}),$=new Jo,gt=new Ws(R,8,R),wt=new ol(R,R),Pt=Q.current,j=[];Pt.forEach((L,tt)=>{const ut=[];L.forEach((ot,yt)=>{const Mt=yt*R,Ut=tt*R,Kt=new ai(wt,St);Kt.rotation.x=-Math.PI/2,Kt.position.set(Mt,-4,Ut),$.add(Kt);const xt=new ai(wt,U);xt.rotation.x=Math.PI/2,xt.position.set(Mt,4,Ut),$.add(xt);const bt=new ai(gt,Et),Nt=ot===1?0:-10;if(bt.position.set(Mt,Nt,Ut),bt.userData={targetY:Nt,isBorder:tt===0||tt===Pt.length-1||yt===0||yt===L.length-1},$.add(bt),ut.push(bt),ot===0&&j.push({x:Mt,z:Ut}),ot===1&&Math.random()>.8){const Ot=new b_(16755200,1,15);Ot.position.set(Mt,0,Ut),Ot.userData={flickerSpeed:Math.random()*.1+.05,baseInt:1},$.add(Ot)}}),C.current.push(ut)}),N.add($);const ht=new WM(16777215,.5);N.add(ht);const Dt=new kM(16777215,5,120,Math.PI/6,.5,1);Dt.position.set(0,0,0),Dt.target.position.set(0,0,-1),z.add(Dt),z.add(Dt.target),N.add(z),Ye.forEach(L=>{L.lookAt(z.position.x,L.position.y,z.position.z);const tt=L.position.distanceTo(z.position),ut=new K().subVectors(z.position,L.position).normalize(),yt=new T_(L.position,ut,0,40).intersectObjects($.children);let Mt=!1;if((yt.length===0||yt[0].distance>tt)&&(Mt=!0),Mt&&tt<25?L.userData.state="CHASE":L.userData.state="PATROL",L.userData.state==="CHASE"){let Ut=5*delta;Math.random()<.05&&(L.position.x+=ut.x*2.5,L.position.z+=ut.z*2.5,console.log("Enemy Glitch-Jump!")),Math.random()<.01&&(Ut=0),L.position.x+=ut.x*Ut,L.position.z+=ut.z*Ut,tt<1&&b(L)}else(!L.userData.patrolDir||Math.random()<.02)&&(L.userData.patrolDir=new K(Math.random()-.5,0,Math.random()-.5).normalize()),L.position.x+=L.userData.patrolDir.x*2*delta,L.position.z+=L.userData.patrolDir.z*2*delta});const kt=new ip(.5,.1,8,16),Vt=new tp({color:16766720});for(let L=0;L<3;L++)if(j.length>0){const tt=Math.floor(Math.random()*j.length),ut=j.splice(tt,1)[0],ot=new ai(kt,Vt);ot.position.set(ut.x,-2,ut.z),ot.userData={type:"key",id:L},N.add(ot),F.current.push(ot);const yt=new b_(16766720,1,5);yt.position.set(ut.x,-2,ut.z),N.add(yt)}ft.magFilter=xn;const de=new wv({map:ft,transparent:!0}),Ye=[],pe=(L,tt)=>{const ut=new CM(de);return ut.position.set(L,-1,tt),ut.scale.set(4,6,1),ut.userData={type:"enemy",state:"PATROL",target:null,speed:3,name:"NANO BANANA PRO",desc:"A corrupted fruit hybrid. Highly aggressive."},N.add(ut),ut};if(console.log("Spawning Enemies. Valid Points:",j.length),j.length>5){const L=j.length-1,tt=Math.floor(j.length/2),ut=pe(j[L].x,j[L].z),ot=pe(j[tt].x,j[tt].z);Ye.push(ut,ot),console.log("Enemies Spawned at",j[L],j[tt])}else console.warn("Not enough spawn points for enemies!");z.position.set(R,0,R);let oe=!1,ge=!1,ne=!1,je=!1,V=!1;const We=L=>{(L.key==="w"||L.key==="ArrowUp")&&(oe=!0),(L.key==="s"||L.key==="ArrowDown")&&(ge=!0),(L.key==="a"||L.key==="ArrowLeft")&&(ne=!0),(L.key==="d"||L.key==="ArrowRight")&&(je=!0),L.code==="Space"&&(V=!0)},_e=L=>{(L.key==="w"||L.key==="ArrowUp")&&(oe=!1),(L.key==="s"||L.key==="ArrowDown")&&(ge=!1),(L.key==="a"||L.key==="ArrowLeft")&&(ne=!1),(L.key==="d"||L.key==="ArrowRight")&&(je=!1),L.code==="Space"&&(V=!1)};window.addEventListener("keydown",We),window.addEventListener("keyup",_e);let Ae=performance.now();const qt=()=>{if(B.current)return;requestAnimationFrame(qt);const L=performance.now(),tt=(L-Ae)/1e3;if(Ae=L,ne&&(z.rotation.y+=2*tt),je&&(z.rotation.y-=2*tt),oe||ge){const yt=new K;z.getWorldDirection(yt),yt.y=0,yt.normalize(),ge&&yt.negate();const Mt=V?7:3.5,Ut=z.position.x+yt.x*Mt*tt,Kt=z.position.z+yt.z*Mt*tt,xt=Math.round(Ut/R),bt=Math.round(Kt/R);if(Pt[bt]&&Pt[bt][xt]===0)z.position.x=Ut,z.position.z=Kt;else{const Nt=Math.round(z.position.z/R);if(Pt[Nt]&&Pt[Nt][xt]===0)z.position.x=Ut;else{const Ot=Math.round(z.position.x/R);Pt[bt]&&Pt[bt][Ot]===0&&(z.position.z=Kt)}}}(oe||ge)&&(z.position.y=Math.sin(L*.01)*.15),F.current.forEach((yt,Mt)=>{yt.visible&&(yt.rotation.y+=tt,z.position.distanceTo(yt.position)<2&&(yt.visible=!1,G.current+=1,p(Ut=>Ut+1),console.log("Key Collected! Total:",G.current),G.current>=3&&d("KEYS COLLECTED. EXIT PORTAL OPENING...")))}),Ye.forEach(yt=>{yt.lookAt(z.position.x,yt.position.y,z.position.z);const Mt=yt.position.distanceTo(z.position),Ut=new K().subVectors(z.position,yt.position).normalize(),xt=new T_(yt.position,Ut,0,40).intersectObjects($.children);let bt=!1;if((xt.length===0||xt[0].distance>Mt)&&(bt=!0),bt&&Mt<25?yt.userData.state="CHASE":yt.userData.state="PATROL",yt.userData.state==="CHASE"){let Nt=5*tt;Math.random()<.05&&(yt.position.x+=Ut.x*1.5,yt.position.z+=Ut.z*1.5),Math.random()<.01&&(Nt=0),yt.position.x+=Ut.x*Nt,yt.position.z+=Ut.z*Nt,Mt<1&&b(yt)}else(!yt.userData.patrolDir||Math.random()<.02)&&(yt.userData.patrolDir=new K(Math.random()-.5,0,Math.random()-.5).normalize()),yt.position.x+=yt.userData.patrolDir.x*2*tt,yt.position.z+=yt.userData.patrolDir.z*2*tt}),N.children.forEach(yt=>{yt.isGroup&&yt.children.forEach(Mt=>{Mt.isPointLight&&Mt.userData.flickerSpeed&&(Mt.intensity=Mt.userData.baseInt+Math.sin(L*Mt.userData.flickerSpeed)*.5)})});const ut=(L-I.current)/1e3,ot=kA.find(yt=>Math.abs(yt.time-ut)<.5);ot&&(g(ot.text),setTimeout(()=>g(null),4e3)),P.current-=.02*tt,r(Math.max(0,P.current)),P.current<=0&&!M&&b(),nt.render(N,z)},D=requestAnimationFrame(qt),b=L=>{if(!B.current){if(B.current=!0,console.log("JUMPSCARE! Teleporting enemy away..."),O.current){const tt=O.current.ctx.currentTime;O.current.osc.frequency.setValueAtTime(100,tt),O.current.osc.frequency.exponentialRampToValueAtTime(800,tt+.1),O.current.gain.gain.setValueAtTime(1,tt),O.current.gain.gain.exponentialRampToValueAtTime(.01,tt+.5)}if(d("RUN! IT FOUND YOU!"),r(tt=>Math.max(0,tt-25)),L&&j.length>0){const tt=j[Math.floor(Math.random()*j.length)];L.position.set(tt.x,-1,tt.z),L.userData.state="PATROL"}setTimeout(()=>{B.current=!1,d("Objective: Find Keys")},2e3)}};return()=>{cancelAnimationFrame(D),window.removeEventListener("keydown",We),window.removeEventListener("keyup",_e),t.current&&nt.domElement&&t.current.removeChild(nt.domElement),nt.dispose()}},[l]),At.jsxs("div",{ref:t,className:"fixed inset-0 w-full h-full bg-black z-50 overflow-hidden cursor-none",children:[M&&At.jsxs("div",{className:"absolute inset-0 z-[100] bg-black flex items-center justify-center animate-vibrate",children:[At.jsx("img",{src:"/horror/images/nano_banana.png",className:"w-full h-full object-contain animate-pulse-fast filter contrast-150 brightness-50"}),At.jsx("h1",{className:"absolute text-red-600 font-black text-9xl animate-ping",children:"CAUGHT"})]}),At.jsx("div",{className:"absolute top-8 left-8 z-50 pointer-events-none select-none mix-blend-difference",children:At.jsxs("div",{className:"flex flex-col gap-2",children:[At.jsx("h2",{className:"text-xl font-black text-red-600 tracking-widest uppercase",children:"Vital Systems"}),At.jsx("div",{className:"h-2 w-48 bg-gray-900 border border-red-900/50",children:At.jsx("div",{className:"h-full bg-red-600",style:{width:`${i}%`}})}),At.jsxs("div",{className:"mt-4 flex items-center gap-2 text-yellow-500",children:[At.jsx(vS,{className:"w-6 h-6"}),At.jsxs("span",{className:"text-2xl font-mono",children:[m," / 3 KEYS"]})]}),At.jsx("p",{className:"text-orange-500 font-mono mt-2 animate-pulse",children:h})]})}),_&&At.jsx("div",{className:"absolute bottom-32 left-0 w-full text-center z-50 pointer-events-none",children:At.jsxs("p",{className:"text-xl text-gray-200 font-serif italic tracking-wide bg-black/50 p-4 inline-block rounded",children:['"',_,'"']})}),At.jsxs("div",{className:"absolute top-8 right-8 z-50 flex flex-col gap-4 pointer-events-auto",children:[At.jsxs("button",{onClick:o,className:"flex items-center gap-2 bg-red-950/80 text-red-200 border border-red-800 px-4 py-2 uppercase text-xs font-bold",children:["ABORT ",At.jsx(tv,{className:"w-4 h-4"})]}),At.jsx("button",{onClick:()=>c(!l),className:"self-end bg-black/50 p-2 border border-gray-800 text-gray-400",children:l?At.jsx(yS,{className:"w-5 h-5"}):At.jsx(MS,{className:"w-5 h-5"})})]}),At.jsx("div",{className:"absolute top-1/2 left-1/2 w-1 h-1 bg-white/50 rounded-full pointer-events-none mix-blend-exclusion"}),At.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjUiLz48L3N2Zz4=')] opacity-[0.05] pointer-events-none z-40"})]})},WA=({story:o,onClick:t})=>At.jsxs("div",{onClick:t,className:"group relative bg-[#080808] border border-gray-800/60 p-0 cursor-pointer overflow-hidden transition-all duration-500 hover:border-red-900/60 hover:shadow-[0_0_40px_rgba(220,38,38,0.05)] rounded-sm",children:[At.jsxs("div",{className:"absolute top-0 right-0 bg-gray-900/50 px-3 py-1 border-b border-l border-gray-800 text-[9px] font-mono text-gray-500 uppercase tracking-widest group-hover:bg-red-950/30 group-hover:text-red-400 transition-colors",children:["Case File #",o.id.toUpperCase().substring(0,4)]}),o.imageUrl&&At.jsxs("div",{className:"w-full h-56 overflow-hidden relative border-b border-gray-800/50",children:[At.jsx("div",{className:"absolute inset-0 bg-red-900/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"}),At.jsx("img",{src:o.imageUrl,alt:o.title,className:"w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter grayscale contrast-125 group-hover:grayscale-0"}),At.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"}),At.jsxs("div",{className:"absolute bottom-3 left-3 flex items-center gap-2 z-20",children:[At.jsx("div",{className:`w-2 h-2 rounded-full ${o.is3D?"bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]":"bg-gray-600"}`}),At.jsx("span",{className:"text-[10px] font-mono uppercase tracking-widest text-gray-400 group-hover:text-gray-200",children:o.is3D?"Live Feed":"Archived"})]})]}),At.jsxs("div",{className:"p-8 pt-6 relative",children:[At.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-red-900/0 group-hover:bg-red-900/50 transition-all duration-500"}),At.jsx("h3",{className:"text-3xl font-bold mb-3 text-gray-300 group-hover:text-red-500 transition-colors uppercase tracking-tighter font-header leading-none",children:o.title}),At.jsxs("div",{className:"flex items-center gap-4 mb-4 text-[10px] font-mono text-gray-600 uppercase tracking-widest border-b border-gray-900 pb-4 group-hover:border-red-900/20 transition-colors",children:[At.jsxs("span",{className:"text-red-900 group-hover:text-red-700",children:["Auth: ",o.author]}),At.jsx("span",{children:"//"}),At.jsx("span",{children:o.date})]}),At.jsx("p",{className:"text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2 font-serif group-hover:text-gray-400 transition-colors",children:o.summary}),At.jsx("div",{className:"flex flex-wrap gap-2",children:o.tags.map(i=>At.jsx("span",{className:"text-[9px] uppercase tracking-widest bg-black px-2 py-1 text-gray-600 border border-gray-800 group-hover:border-red-900/30 group-hover:text-red-900/70 transition-colors",children:i},i))})]})]}),Bv=({publisherId:o="ca-pub-6275575304084608",slotId:t="2004776727",className:i})=>At.jsxs("div",{className:`bg-[#0a0a0a] border border-gray-800/30 p-8 flex flex-col items-center justify-center min-h-[150px] relative overflow-hidden group ${i}`,children:[At.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-red-900/20 animate-scan"}),At.jsx("p",{className:"text-xs text-gray-700 font-mono uppercase tracking-[0.2em] mb-4",children:"External Broadcast Signal [Sponsor]"}),At.jsxs("div",{className:"w-full max-w-[728px] h-[90px] bg-black border border-gray-800 flex items-center justify-center relative overflow-hidden group-hover:border-red-900/40 transition-colors",children:[At.jsxs("div",{className:"absolute inset-0 opacity-20 pointer-events-none",children:[At.jsx("div",{className:"w-full h-full bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] bg-cover opacity-10 mix-blend-screen"}),At.jsx("div",{className:"absolute inset-0 bg-red-900/10 animate-pulse"})]}),At.jsx("span",{className:"absolute z-0 text-[10px] font-mono text-red-900/50 uppercase tracking-[0.3em] animate-pulse",children:"$$ NO SIGNAL // AWAITING INPUT $$"}),At.jsx("ins",{className:"adsbygoogle block relative z-10",style:{display:"block",width:"100%",height:"100%"},"data-ad-client":o,"data-ad-slot":t,"data-ad-format":"auto","data-full-width-responsive":"true"})]})]});try{window&&window.adsbygoogle}catch(o){console.error("AdSense Error:",o)}const qA=({story:o,onBack:t})=>(ke.useEffect(()=>{window.scrollTo(0,0)},[]),At.jsxs("div",{className:"animate-fade-in relative",children:[At.jsxs("button",{onClick:t,className:"group flex items-center gap-2 text-red-600 mb-8 hover:text-red-400 transition-colors uppercase text-sm font-bold tracking-widest",children:[At.jsx(tv,{className:"w-4 h-4 group-hover:-translate-x-1 transition-transform"}),"Return to Index"]}),o.id==="fractal-saint"&&At.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0 opacity-10 mix-blend-screen overflow-hidden",children:[At.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-red-500/20 rounded-full animate-[spin_60s_linear_infinite]"}),At.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-500/30 rotate-45 animate-[spin_40s_linear_infinite_reverse]"}),At.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-red-500/10 rotate-12 animate-[pulse_4s_ease-in-out_infinite]"})]}),At.jsxs("article",{className:"prose prose-invert prose-red max-w-none relative z-10",children:[At.jsxs("header",{className:"mb-12 border-b border-red-900/20 pb-8",children:[At.jsx("h2",{className:"text-5xl font-black text-gray-100 mb-4 uppercase tracking-tighter",children:o.title}),At.jsxs("div",{className:"flex gap-4 text-xs font-sans uppercase tracking-widest text-red-700",children:[At.jsxs("span",{children:["Author: ",o.author]}),At.jsx("span",{children:"|"}),At.jsxs("span",{children:["Archive: ",o.date]})]})]}),At.jsx("div",{className:"text-xl leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:text-red-600 first-letter:mr-3 first-letter:float-left",dangerouslySetInnerHTML:{__html:o.content}}),At.jsx(Bv,{className:"mt-16 mb-8"})]}),At.jsx("footer",{className:"mt-16 p-8 bg-red-950/5 border border-red-900/20 rounded-lg relative z-10",children:At.jsxs("div",{className:"flex items-start gap-4",children:[At.jsx(hS,{className:"text-red-600 shrink-0 mt-1"}),At.jsxs("div",{children:[At.jsx("h4",{className:"font-bold text-red-500 uppercase tracking-widest text-sm mb-2",children:"Researcher's Note"}),At.jsx("p",{className:"text-sm italic text-gray-500",children:"The contents of this file have been linked to severe psychological distress. If you begin to hear a rhythmic clicking or experience spatial anomalies, cease reading immediately."})]})]})})]})),Q_=[{id:"backrooms",title:"Level 0: The Beige Eternity",author:"Surveyor K. Miller",date:"RECOVERED LOG",is3D:!0,imageUrl:"images/wallpaper.png",summary:"If you aren't careful and you noclip out of reality in the wrong areas...",tags:["interactive","3d","liminal-space"],content:`
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
    `}];function YA(){const[o,t]=ke.useState(null),[i,r]=ke.useState(100),l=Q_.find(c=>c.id===o);return ke.useEffect(()=>{const c=setInterval(()=>{r(h=>Math.max(80,h-.01))},1e3);return()=>clearInterval(c)},[]),l?.is3D?At.jsx(XA,{onExit:()=>t(null)}):l&&!l.is3D?At.jsx(qA,{story:l,onBack:()=>t(null)}):At.jsxs("div",{className:`min-h-screen bg-[#050505] text-gray-300 font-serif selection:bg-red-900 selection:text-white transition-all duration-1000 ${i<90?"animate-vibrate":""}`,children:[At.jsxs("nav",{className:"fixed top-0 left-0 w-full bg-black/90 border-b border-red-900/30 backdrop-blur-md z-40 p-4 flex justify-between items-center px-8",children:[At.jsxs("div",{className:"flex items-center gap-3",children:[At.jsx(gS,{className:"text-red-600 w-8 h-8 animate-pulse"}),At.jsx("h1",{className:"text-2xl font-black uppercase tracking-tighter text-red-600 font-header",children:"The Void Archive"})]}),At.jsxs("div",{className:"flex gap-6 text-sm uppercase tracking-widest text-gray-500 font-sans items-center",children:[At.jsx("a",{href:"https://elo2026x.github.io/The_Victoria_Texas_Franchise/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-500 cursor-pointer transition-colors border-b border-transparent hover:border-red-600",children:"FORENSICS"}),At.jsx("a",{href:"https://www.amazon.com/shop/elo2025x",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-500 cursor-pointer transition-colors border-b border-transparent hover:border-red-600",children:"MARKETING"}),At.jsx("a",{href:"https://elo2026.gumroad.com/l/eircyr",target:"_blank",rel:"noopener noreferrer",className:"text-red-600 font-bold border border-red-900/50 px-3 py-1 hover:bg-red-900/20 hover:text-red-400 transition-all animate-pulse",children:"Subscribe"})]})]}),At.jsx("main",{className:"pt-24 pb-20 max-w-5xl mx-auto px-6",children:At.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[At.jsxs("div",{className:"col-span-full mb-8",children:[At.jsx("h3",{className:"text-red-700 font-sans uppercase tracking-[0.4em] text-xs font-bold mb-4",children:"Latest Classified Data"}),At.jsx("p",{className:"text-gray-500 italic max-w-xl",children:'"Reality is a thin layer of ice over a very deep, dark ocean. These stories are the cracks."'})]}),Q_.map(c=>At.jsx(WA,{story:c,onClick:()=>t(c.id)},c.id)),At.jsx(Bv,{className:"col-span-full mt-12 mb-8"})]})}),At.jsxs("div",{className:"fixed bottom-6 right-6 flex items-center gap-4 bg-black/80 border border-gray-800 p-3 backdrop-blur-sm",children:[At.jsxs("div",{className:"text-right",children:[At.jsx("p",{className:"text-[10px] text-gray-600 font-sans uppercase font-bold",children:"Local Reality Level"}),At.jsxs("p",{className:"font-mono text-red-600 text-sm",children:[i.toFixed(4),"%"]})]}),At.jsxs("div",{className:"w-12 h-12 rounded-full border-2 border-red-900 flex items-center justify-center relative",children:[At.jsx("div",{className:"absolute inset-1 rounded-full border border-red-600 animate-ping opacity-20"}),At.jsx(pS,{className:"w-5 h-5 text-red-600"})]})]}),At.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const jA=aS({onNeedRefresh(){confirm("A new version of The Void Archive is available. Reload to update?")&&jA(!0)},onOfflineReady(){console.log("Archive downloaded. Offline access granted.")}});tS.createRoot(document.getElementById("app")).render(At.jsx(qy.StrictMode,{children:At.jsx(YA,{})}));
