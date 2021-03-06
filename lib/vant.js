(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("vant", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["vant"] = factory(require("vue"));
	else
		root["vant"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
/* unused harmony export isAndroid */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var isServer = vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$isServer;

function isDef(value) {
  return value !== undefined && value !== null;
}

function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });
  return result;
}

var camelizeRE = /-(\w)/g;

function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}

function isAndroid() {
  /* istanbul ignore next */
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cancel; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/**
 * requestAnimationFrame polyfill
 */

var prev = Date.now();
/* istanbul ignore next */

function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}
/* istanbul ignore next */


var root = _index__WEBPACK_IMPORTED_MODULE_0__[/* isServer */ "e"] ? global : window;
/* istanbul ignore next */

var iRaf = root.requestAnimationFrame || root.webkitRequestAnimationFrame || fallback;
/* istanbul ignore next */

var iCancel = root.cancelAnimationFrame || root.webkitCancelAnimationFrame || root.clearTimeout;
function raf(fn) {
  return iRaf.call(root, fn);
}
function cancel(id) {
  iCancel.call(root, id);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Vue-Lazyload.js v1.2.3
 * (c) 2018 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function e(e){return e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function t(e){e=e||{};var t=arguments.length,i=0;if(1===t)return e;for(;++i<t;){var o=arguments[i];g(e)&&(e=o),r(o)&&n(e,o)}return e}function n(e,n){m(e,n);for(var o in n)if("__proto__"!==o&&i(n,o)){var a=n[o];r(a)?("undefined"===L(e[o])&&"function"===L(a)&&(e[o]=a),e[o]=t(e[o]||{},a)):e[o]=a}return e}function r(e){return"object"===L(e)||"function"===L(e)}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function o(e,t){if(e.length){var n=e.indexOf(t);return n>-1?e.splice(n,1):void 0}}function a(e,t){for(var n=!1,r=0,i=e.length;r<i;r++)if(t(e[r])){n=!0;break}return n}function s(e,t){if("IMG"===e.tagName&&e.getAttribute("data-srcset")){var n=e.getAttribute("data-srcset"),r=[],i=e.parentNode,o=i.offsetWidth*t,a=void 0,s=void 0,u=void 0;n=n.trim().split(","),n.map(function(e){e=e.trim(),a=e.lastIndexOf(" "),-1===a?(s=e,u=999998):(s=e.substr(0,a),u=parseInt(e.substr(a+1,e.length-a-2),10)),r.push([u,s])}),r.sort(function(e,t){if(e[0]<t[0])return-1;if(e[0]>t[0])return 1;if(e[0]===t[0]){if(-1!==t[1].indexOf(".webp",t[1].length-5))return 1;if(-1!==e[1].indexOf(".webp",e[1].length-5))return-1}return 0});for(var l="",d=void 0,c=r.length,h=0;h<c;h++)if(d=r[h],d[0]>=o){l=d[1];break}return l}}function u(e,t){for(var n=void 0,r=0,i=e.length;r<i;r++)if(t(e[r])){n=e[r];break}return n}function l(){if(!k)return!1;var e=!0,t=document;try{var n=t.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",t.body.appendChild(n),e=!n.offsetWidth,t.body.removeChild(n)}catch(t){e=!1}return e}function d(e,t){var n=null,r=0;return function(){if(!n){var i=Date.now()-r,o=this,a=arguments,s=function(){r=Date.now(),n=!1,e.apply(o,a)};i>=t?s():n=setTimeout(s,t)}}}function c(e){return null!==e&&"object"===(void 0===e?"undefined":p(e))}function h(e){if(!(e instanceof Object))return[];if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}function f(e){for(var t=e.length,n=[],r=0;r<t;r++)n.push(e[r]);return n}function v(){}var p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=function(e){return null==e||"function"!=typeof e&&"object"!==(void 0===e?"undefined":p(e))},m=function(e,t){if(null===e||void 0===e)throw new TypeError("expected first argument to be an object.");if(void 0===t||"undefined"==typeof Symbol)return e;if("function"!=typeof Object.getOwnPropertySymbols)return e;for(var n=Object.prototype.propertyIsEnumerable,r=Object(e),i=arguments.length,o=0;++o<i;)for(var a=Object(arguments[o]),s=Object.getOwnPropertySymbols(a),u=0;u<s.length;u++){var l=s[u];n.call(a,l)&&(r[l]=a[l])}return r},w=Object.prototype.toString,L=function(t){var n=void 0===t?"undefined":p(t);return"undefined"===n?"undefined":null===t?"null":!0===t||!1===t||t instanceof Boolean?"boolean":"string"===n||t instanceof String?"string":"number"===n||t instanceof Number?"number":"function"===n||t instanceof Function?void 0!==t.constructor.name&&"Generator"===t.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(t)?"array":t instanceof RegExp?"regexp":t instanceof Date?"date":(n=w.call(t),"[object RegExp]"===n?"regexp":"[object Date]"===n?"date":"[object Arguments]"===n?"arguments":"[object Error]"===n?"error":"[object Promise]"===n?"promise":e(t)?"buffer":"[object Set]"===n?"set":"[object WeakSet]"===n?"weakset":"[object Map]"===n?"map":"[object WeakMap]"===n?"weakmap":"[object Symbol]"===n?"symbol":"[object Map Iterator]"===n?"mapiterator":"[object Set Iterator]"===n?"setiterator":"[object String Iterator]"===n?"stringiterator":"[object Array Iterator]"===n?"arrayiterator":"[object Int8Array]"===n?"int8array":"[object Uint8Array]"===n?"uint8array":"[object Uint8ClampedArray]"===n?"uint8clampedarray":"[object Int16Array]"===n?"int16array":"[object Uint16Array]"===n?"uint16array":"[object Int32Array]"===n?"int32array":"[object Uint32Array]"===n?"uint32array":"[object Float32Array]"===n?"float32array":"[object Float64Array]"===n?"float64array":"object")},_=t,k="undefined"!=typeof window,E=k&&"IntersectionObserver"in window,A={event:"event",observer:"observer"},j=function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if(k)return"function"==typeof window.CustomEvent?window.CustomEvent:(e.prototype=window.Event.prototype,e)}(),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return k?window.devicePixelRatio||e:e},T=function(){if(k){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}}(),O={on:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];T?e.addEventListener(t,n,{capture:r,passive:!0}):e.addEventListener(t,n,r)},off:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.removeEventListener(t,n,r)}},I=function(e,t,n){var r=new Image;r.src=e.src,r.onload=function(){t({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src})},r.onerror=function(e){n(e)}},x=function(e,t){return"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]},S=function(e){return x(e,"overflow")+x(e,"overflow-y")+x(e,"overflow-x")},$=function(e){if(k){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(S(t)))return t;t=t.parentNode}return window}},H={},Q=function(){function e(t){var n=t.el,r=t.src,i=t.error,o=t.loading,a=t.bindType,s=t.$parent,u=t.options,l=t.elRenderer;b(this,e),this.el=n,this.src=r,this.error=i,this.loading=o,this.bindType=a,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=u,this.rect=null,this.$parent=s,this.elRenderer=l,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return y(e,[{key:"initState",value:function(){this.el.dataset.src=this.src,this.state={error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(e){this.performanceData[e]=Date.now()}},{key:"update",value:function(e){var t=e.src,n=e.loading,r=e.error,i=this.src;this.src=t,this.loading=n,this.error=r,this.filter(),i!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){var e=this;h(this.options.filter).map(function(t){e.options.filter[t](e,e.options)})}},{key:"renderLoading",value:function(e){var t=this;I({src:this.loading},function(n){t.render("loading",!1),e()},function(){e(),t.options.silent||console.warn("VueLazyload log: load failed with loading image("+t.loading+")")})}},{key:"load",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times"),void t()):this.state.loaded||H[this.src]?(this.state.loaded=!0,t(),this.render("loaded",!0)):void this.renderLoading(function(){e.attempt++,e.record("loadStart"),I({src:e.src},function(n){e.naturalHeight=n.naturalHeight,e.naturalWidth=n.naturalWidth,e.state.loaded=!0,e.state.error=!1,e.record("loadEnd"),e.render("loaded",!1),H[e.src]=1,t()},function(t){!e.options.silent&&console.error(t),e.state.error=!0,e.state.loaded=!1,e.render("error",!1)})})}},{key:"render",value:function(e,t){this.elRenderer(this,e,t)}},{key:"performance",value:function(){var e="loading",t=0;return this.state.loaded&&(e="loaded",t=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:t}}},{key:"destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),e}(),C="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",R=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],W={rootMargin:"0px",threshold:0},D=function(e){return function(){function t(e){var n=e.preLoad,r=e.error,i=e.throttleWait,o=e.preLoadTop,a=e.dispatchEvent,s=e.loading,u=e.attempt,c=e.silent,h=void 0===c||c,f=e.scale,v=e.listenEvents,p=(e.hasbind,e.filter),y=e.adapter,g=e.observer,m=e.observerOptions;b(this,t),this.version="1.2.3",this.mode=A.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:h,dispatchEvent:!!a,throttleWait:i||200,preLoad:n||1.3,preLoadTop:o||0,error:r||C,loading:s||C,attempt:u||3,scale:f||z(f),ListenEvents:v||R,hasbind:!1,supportWebp:l(),filter:p||{},adapter:y||{},observer:!!g,observerOptions:m||W},this._initEvent(),this.lazyLoadHandler=d(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?A.observer:A.event)}return y(t,[{key:"config",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_(this.options,e)}},{key:"performance",value:function(){var e=[];return this.ListenerQueue.map(function(t){e.push(t.performance())}),e}},{key:"addLazyBox",value:function(e){this.ListenerQueue.push(e),k&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}},{key:"add",value:function(t,n,r){var i=this;if(a(this.ListenerQueue,function(e){return e.el===t}))return this.update(t,n),e.nextTick(this.lazyLoadHandler);var o=this._valueFormatter(n.value),u=o.src,l=o.loading,d=o.error;e.nextTick(function(){u=s(t,i.options.scale)||u,i._observer&&i._observer.observe(t);var o=Object.keys(n.modifiers)[0],a=void 0;o&&(a=r.context.$refs[o],a=a?a.$el||a:document.getElementById(o)),a||(a=$(t));var c=new Q({bindType:n.arg,$parent:a,el:t,loading:l,error:d,src:u,elRenderer:i._elRenderer.bind(i),options:i.options});i.ListenerQueue.push(c),k&&(i._addListenerTarget(window),i._addListenerTarget(a)),i.lazyLoadHandler(),e.nextTick(function(){return i.lazyLoadHandler()})})}},{key:"update",value:function(t,n){var r=this,i=this._valueFormatter(n.value),o=i.src,a=i.loading,l=i.error;o=s(t,this.options.scale)||o;var d=u(this.ListenerQueue,function(e){return e.el===t});d&&d.update({src:o,loading:a,error:l}),this._observer&&(this._observer.unobserve(t),this._observer.observe(t)),this.lazyLoadHandler(),e.nextTick(function(){return r.lazyLoadHandler()})}},{key:"remove",value:function(e){if(e){this._observer&&this._observer.unobserve(e);var t=u(this.ListenerQueue,function(t){return t.el===e});t&&(this._removeListenerTarget(t.$parent),this._removeListenerTarget(window),o(this.ListenerQueue,t)&&t.destroy())}}},{key:"removeComponent",value:function(e){e&&(o(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(e){var t=this;E||e!==A.observer||(e=A.event),this.mode=e,e===A.event?(this._observer&&(this.ListenerQueue.forEach(function(e){t._observer.unobserve(e.el)}),this._observer=null),this.TargetQueue.forEach(function(e){t._initListen(e.el,!0)})):(this.TargetQueue.forEach(function(e){t._initListen(e.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(e){if(e){var t=u(this.TargetQueue,function(t){return t.el===e});return t?t.childrenCount++:(t={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===A.event&&this._initListen(t.el,!0),this.TargetQueue.push(t)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(e){var t=this;this.TargetQueue.forEach(function(n,r){n.el===e&&(--n.childrenCount||(t._initListen(n.el,!1),t.TargetQueue.splice(r,1),n=null))})}},{key:"_initListen",value:function(e,t){var n=this;this.options.ListenEvents.forEach(function(r){return O[t?"on":"off"](e,r,n.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var e=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(t,n){e.Event.listeners[t].push(n)},this.$once=function(t,n){function r(){i.$off(t,r),n.apply(i,arguments)}var i=e;e.$on(t,r)},this.$off=function(t,n){if(!n)return void(e.Event.listeners[t]=[]);o(e.Event.listeners[t],n)},this.$emit=function(t,n,r){e.Event.listeners[t].forEach(function(e){return e(n,r)})}}},{key:"_lazyLoadHandler",value:function(){var e=this,t=!1;this.ListenerQueue.forEach(function(n,r){n.state.loaded||(t=n.checkInView())&&n.load(function(){!n.error&&n.loaded&&e.ListenerQueue.splice(r,1)})})}},{key:"_initIntersectionObserver",value:function(){var e=this;E&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(t){e._observer.observe(t.el)}))}},{key:"_observerHandler",value:function(e,t){var n=this;e.forEach(function(e){e.isIntersecting&&n.ListenerQueue.forEach(function(t){if(t.el===e.target){if(t.state.loaded)return n._observer.unobserve(t.el);t.load()}})})}},{key:"_elRenderer",value:function(e,t,n){if(e.el){var r=e.el,i=e.bindType,o=void 0;switch(t){case"loading":o=e.loading;break;case"error":o=e.error;break;default:o=e.src}if(i?r.style[i]='url("'+o+'")':r.getAttribute("src")!==o&&r.setAttribute("src",o),r.setAttribute("lazy",t),this.$emit(t,e,n),this.options.adapter[t]&&this.options.adapter[t](e,this.options),this.options.dispatchEvent){var a=new j(t,{detail:e});r.dispatchEvent(a)}}}},{key:"_valueFormatter",value:function(e){var t=e,n=this.options.loading,r=this.options.error;return c(e)&&(e.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+e),t=e.src,n=e.loading||this.options.loading,r=e.error||this.options.error),{src:t,loading:n,error:r}}}]),t}()},B=function(e){return{props:{tag:{type:String,default:"div"}},render:function(e){return!1===this.show?e(this.tag):e(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,e.addLazyBox(this),e.lazyLoadHandler()},beforeDestroy:function(){e.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),k&&this.rect.top<window.innerHeight*e.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*e.options.preLoad&&this.rect.right>0},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)}}}},V=function(){function e(t){var n=t.lazy;b(this,e),this.lazy=n,n.lazyContainerMananger=this,this._queue=[]}return y(e,[{key:"bind",value:function(e,t,n){var r=new N({el:e,binding:t,vnode:n,lazy:this.lazy});this._queue.push(r)}},{key:"update",value:function(e,t,n){var r=u(this._queue,function(t){return t.el===e});r&&r.update({el:e,binding:t,vnode:n})}},{key:"unbind",value:function(e,t,n){var r=u(this._queue,function(t){return t.el===e});r&&(r.clear(),o(this._queue,r))}}]),e}(),M={selector:"img"},N=function(){function e(t){var n=t.el,r=t.binding,i=t.vnode,o=t.lazy;b(this,e),this.el=null,this.vnode=i,this.binding=r,this.options={},this.lazy=o,this._queue=[],this.update({el:n,binding:r})}return y(e,[{key:"update",value:function(e){var t=this,n=e.el,r=e.binding;this.el=n,this.options=_({},M,r.value),this.getImgs().forEach(function(e){t.lazy.add(e,_({},t.binding,{value:{src:e.dataset.src,error:e.dataset.error,loading:e.dataset.loading}}),t.vnode)})}},{key:"getImgs",value:function(){return f(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var e=this;this.getImgs().forEach(function(t){return e.lazy.remove(t)}),this.vnode=null,this.binding=null,this.lazy=null}}]),e}();return{install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=D(e),r=new n(t),i=new V({lazy:r}),o="2"===e.version.split(".")[0];e.prototype.$Lazyload=r,t.lazyComponent&&e.component("lazy-component",B(r)),o?(e.directive("lazy",{bind:r.add.bind(r),update:r.update.bind(r),componentUpdated:r.lazyLoadHandler.bind(r),unbind:r.remove.bind(r)}),e.directive("lazy-container",{bind:i.bind.bind(i),update:i.update.bind(i),unbind:i.unbind.bind(i)})):(e.directive("lazy",{bind:r.lazyLoadHandler.bind(r),update:function(e,t){_(this.vm.$refs,this.vm.$els),r.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){r.remove(this.el)}}),e.directive("lazy-container",{update:function(e,t){i.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){i.unbind(this.el)}}))}}});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(1);
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default = /*#__PURE__*/__webpack_require__.n(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_);

// EXTERNAL MODULE: ./es/utils/index.js
var utils = __webpack_require__(0);

// CONCATENATED MODULE: ./es/utils/deep-assign.js

var deep_assign_hasOwnProperty = Object.prototype.hasOwnProperty;

function assignKey(to, from, key) {
  var val = from[key];

  if (!Object(utils["c" /* isDef */])(val) || deep_assign_hasOwnProperty.call(to, key) && !Object(utils["c" /* isDef */])(to[key])) {
    return;
  }

  if (!deep_assign_hasOwnProperty.call(to, key) || !Object(utils["d" /* isObj */])(val)) {
    to[key] = val;
  } else {
    to[key] = deep_assign_assign(Object(to[key]), from[key]);
  }
}

function deep_assign_assign(to, from) {
  for (var key in from) {
    if (deep_assign_hasOwnProperty.call(from, key)) {
      assignKey(to, from, key);
    }
  }

  return to;
}
// CONCATENATED MODULE: ./es/locale/lang/zh-CN.js
/* harmony default export */ var zh_CN = ({
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  loadingTip: '加载中...',
  telEmpty: '请填写电话',
  nameEmpty: '请填写姓名',
  confirmDelete: '确定要删除么',
  telInvalid: '请填写正确的电话',
  vanContactCard: {
    addText: '添加联系人'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCouponCell: {
    title: '优惠券',
    tips: '使用优惠',
    count: function count(_count) {
      return "\u60A8\u6709 " + _count + " \u4E2A\u53EF\u7528\u4F18\u60E0";
    }
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠',
    enable: '可使用优惠券',
    disabled: '不可使用优惠券',
    placeholder: '请输入优惠码'
  },
  vanCouponItem: {
    valid: '有效期',
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EE1" + _condition + "\u5143\u53EF\u7528";
    }
  }
});
// CONCATENATED MODULE: ./es/locale/index.js



var proto = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype;
var defaultLang = 'zh-CN';
var locale = {
  install: function install() {
    var _Vue$util$defineReact;

    if (proto.$vantLang) {
      return;
    }

    external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.util.defineReactive(proto, '$vantLang', defaultLang);
    external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.util.defineReactive(proto, '$vantMessages', (_Vue$util$defineReact = {}, _Vue$util$defineReact[defaultLang] = zh_CN, _Vue$util$defineReact));
  },
  use: function use(lang, messages) {
    var _this$add;

    proto.$vantLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    deep_assign_assign(proto.$vantMessages, messages);
  }
};
locale.install();
/* harmony default export */ var es_locale = (locale);
// CONCATENATED MODULE: ./es/mixins/bem.js
/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
var ELEMENT = '__';
var MODS = '--';

var join = function join(name, el, symbol) {
  return el ? name + symbol + el : name;
};

var bem_prefix = function prefix(name, mods) {
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }

  if (Array.isArray(mods)) {
    return mods.map(function (item) {
      return prefix(name, item);
    });
  }

  var ret = {};
  Object.keys(mods).forEach(function (key) {
    ret[name + MODS + key] = mods[key];
  });
  return ret;
};

/* harmony default export */ var bem = ({
  methods: {
    b: function b(el, mods) {
      var name = this.$options.name;

      if (el && typeof el !== 'string') {
        mods = el;
        el = '';
      }

      el = join(name, el, ELEMENT);
      return mods ? [el, bem_prefix(el, mods)] : el;
    }
  }
});
// CONCATENATED MODULE: ./es/mixins/i18n.js
// component mixin

/* harmony default export */ var i18n = ({
  computed: {
    $t: function $t() {
      var name = this.$options.name;
      var prefix = name ? Object(utils["a" /* camelize */])(name) + '.' : '';

      if (!this.$vantMessages) {
        if (false) {}

        return function () {
          return '';
        };
      }

      var messages = this.$vantMessages[this.$vantLang];
      return function (path) {
        var message = Object(utils["b" /* get */])(messages, prefix + path) || Object(utils["b" /* get */])(messages, path);

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return typeof message === 'function' ? message.apply(null, args) : message;
      };
    }
  }
});
// CONCATENATED MODULE: ./es/utils/create-basic.js
/**
 * Create a basic component with common options
 */





var create_basic_install = function install(Vue) {
  Vue.component(this.name, this);
};

/* harmony default export */ var create_basic = (function (sfc) {
  sfc.name = 'van-' + sfc.name;
  sfc.install = sfc.install || create_basic_install;
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(i18n, bem);
  sfc.methods = sfc.methods || {};
  sfc.methods.isDef = utils["c" /* isDef */];
  return sfc;
});
;
// CONCATENATED MODULE: ./es/info/index.js

/* harmony default export */ var info = (create_basic({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.isDef(_vm.info) ? _c('div', {
      class: _vm.b()
    }, [_vm._v(_vm._s(_vm.info))]) : _vm._e();
  },
  name: 'info',
  props: {
    info: [String, Number]
  }
}));
// CONCATENATED MODULE: ./es/icon/index.js
var _components;



/* harmony default export */ var icon = (create_basic({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('i', _vm._g({
      class: _vm.name,
      style: _vm.style
    }, _vm.$listeners), [_vm._t("default"), _c('van-info', {
      attrs: {
        "info": _vm.info
      }
    })], 2);
  },
  name: 'icon',
  components: (_components = {}, _components[info.name] = info, _components),
  props: {
    name: String,
    info: [String, Number],
    color: String,
    size: String
  },
  computed: {
    style: function style() {
      return {
        color: this.color,
        fontSize: this.size
      };
    }
  }
}));
// CONCATENATED MODULE: ./es/loading/index.js

var DEFAULT_COLOR = '#c9c9c9';
/* harmony default export */ var loading = (create_basic({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b([_vm.type, _vm.colorType]),
      style: _vm.style
    }, [_c('span', {
      class: _vm.b('spinner', _vm.type)
    }, [_vm._l(_vm.type === 'spinner' ? 12 : 0, function (item, index) {
      return _c('i', {
        key: index
      });
    }), _vm.type === 'circular' ? _c('svg', {
      class: _vm.b('circular'),
      attrs: {
        "viewBox": "25 25 50 50"
      }
    }, [_c('circle', {
      attrs: {
        "cx": "50",
        "cy": "50",
        "r": "20",
        "fill": "none"
      }
    })]) : _vm._e()], 2)]);
  },
  name: 'loading',
  props: {
    size: String,
    type: {
      type: String,
      default: 'circular'
    },
    color: {
      type: String,
      default: DEFAULT_COLOR
    }
  },
  computed: {
    colorType: function colorType() {
      var color = this.color;
      return color === 'white' || color === 'black' ? color : '';
    },
    style: function style() {
      return {
        color: this.color === 'black' ? DEFAULT_COLOR : this.color,
        width: this.size,
        height: this.size
      };
    }
  }
}));
// CONCATENATED MODULE: ./es/mixins/router-link.js
/**
 * add Vue-Router support
 */
/* harmony default export */ var router_link = ({
  props: {
    url: String,
    replace: Boolean,
    to: [String, Object]
  },
  methods: {
    routerLink: function routerLink() {
      var to = this.to,
          url = this.url,
          $router = this.$router,
          replace = this.replace;

      if (to && $router) {
        $router[replace ? 'replace' : 'push'](to);
      } else if (url) {
        replace ? location.replace(url) : location.href = url;
      }
    }
  }
});
// CONCATENATED MODULE: ./es/cell/index.js



/* harmony default export */ var cell = (create_basic({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: [_vm.b({
        center: _vm.center,
        required: _vm.required,
        clickable: _vm.isLink || _vm.clickable
      }), {
        'van-hairline': _vm.border
      }],
      on: {
        "click": _vm.onClick
      }
    }, [_vm._t("icon", [_vm.icon ? _c('icon', {
      class: _vm.b('left-icon'),
      attrs: {
        "name": _vm.icon
      }
    }) : _vm._e()]), _vm.isDef(_vm.title) || _vm.$slots.title ? _c('div', {
      class: _vm.b('title')
    }, [_vm._t("title", [_c('span', {
      domProps: {
        "textContent": _vm._s(_vm.title)
      }
    }), _vm.label ? _c('div', {
      class: _vm.b('label'),
      domProps: {
        "textContent": _vm._s(_vm.label)
      }
    }) : _vm._e()])], 2) : _vm._e(), _vm.isDef(_vm.value) || _vm.$slots.default ? _c('div', {
      class: _vm.b('value', {
        alone: !_vm.$slots.title && !_vm.title
      })
    }, [_vm._t("default", [_c('span', {
      domProps: {
        "textContent": _vm._s(_vm.value)
      }
    })])], 2) : _vm._e(), _vm._t("right-icon", [_vm.isLink ? _c('icon', {
      class: _vm.b('right-icon', _vm.arrowDirection),
      attrs: {
        "name": "ion-ios-arrow-right"
      }
    }) : _vm._e()]), _vm._t("extra")], 2);
  },
  name: 'cell',
  components: {
    Icon: icon
  },
  mixins: [router_link],
  props: {
    icon: String,
    label: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    title: [String, Number],
    value: [String, Number],
    arrowDirection: String,
    border: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
      this.routerLink();
    }
  }
}));
// CONCATENATED MODULE: ./es/cell-group/index.js

/* harmony default export */ var cell_group = (create_basic({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: [_vm.b(), {
        'van-hairline--top-bottom': _vm.border
      }]
    }, [_vm._t("default")], 2);
  },
  name: 'cell-group',
  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
}));
// CONCATENATED MODULE: ./es/utils/create.js

/**
 * Create a component with common options
 */






/* harmony default export */ var create = (function (sfc) {
  sfc.components = _extends(sfc.components || {}, {
    Icon: icon,
    Loading: loading,
    Cell: cell,
    CellGroup: cell_group
  });
  return create_basic(sfc);
});
;
// CONCATENATED MODULE: ./es/mixins/popup/Modal.js

/* harmony default export */ var Modal = ({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('transition', {
      attrs: {
        "name": "van-fade"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.visible,
        expression: "visible"
      }],
      staticClass: "van-modal",
      class: _vm.className,
      style: _vm.style,
      on: {
        "touchmove": function touchmove($event) {
          $event.preventDefault();
          $event.stopPropagation();
        },
        "click": function click($event) {
          _vm.$emit('click', $event);
        }
      }
    })]);
  },
  name: 'modal',
  props: {
    visible: Boolean,
    zIndex: Number,
    className: String,
    customStyle: Object
  },
  computed: {
    style: function style() {
      return _extends({
        zIndex: this.zIndex
      }, this.customStyle);
    }
  }
});
// CONCATENATED MODULE: ./es/mixins/popup/context.js
/* harmony default export */ var popup_context = ({
  id: 1,
  zIndex: 2000,
  stack: [],
  lockCount: 0,
  plusKey: function plusKey(key) {
    return this[key]++;
  },

  get top() {
    return this.stack[this.stack.length - 1];
  }

});
// CONCATENATED MODULE: ./es/mixins/popup/manager.js




var defaultConfig = {
  className: '',
  customStyle: {}
};
/* harmony default export */ var manager = ({
  open: function open(vm, config) {
    /* istanbul ignore next */
    if (!popup_context.stack.some(function (item) {
      return item.vm._popupId === vm._popupId;
    })) {
      var el = vm.$el;
      var targetNode = el && el.parentNode && el.parentNode.nodeType !== 11 ? el.parentNode : document.body;
      popup_context.stack.push({
        vm: vm,
        config: config,
        targetNode: targetNode
      });
      this.update();
    }

    ;
  },
  close: function close(id) {
    var stack = popup_context.stack;

    if (stack.length) {
      if (popup_context.top.vm._popupId === id) {
        stack.pop();
        this.update();
      } else {
        popup_context.stack = stack.filter(function (item) {
          return item.vm._popupId !== id;
        });
      }
    }
  },
  update: function update() {
    var modal = popup_context.modal;

    if (!modal) {
      modal = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(Modal))({
        el: document.createElement('div')
      });
      modal.$on('click', this.onClick);
      popup_context.modal = modal;
    }

    if (modal.$el.parentNode) {
      modal.visible = false;
    }

    if (popup_context.top) {
      var _context$top = popup_context.top,
          targetNode = _context$top.targetNode,
          config = _context$top.config;
      targetNode.appendChild(modal.$el);

      _extends(modal, _extends({}, defaultConfig, config, {
        visible: true
      }));
    }
  },
  // close popup when click modal && closeOnClickOverlay is true
  onClick: function onClick() {
    /* istanbul ignore else */
    if (popup_context.top) {
      var vm = popup_context.top.vm;
      vm.$emit('click-overlay');
      vm.closeOnClickOverlay && vm.$emit('input', false);
    }
  }
});
// CONCATENATED MODULE: ./es/utils/scroll.js

/* harmony default export */ var utils_scroll = ({
  // get nearest scroll element
  getScrollEventTarget: function getScrollEventTarget(element, rootParent) {
    if (rootParent === void 0) {
      rootParent = window;
    }

    var currentNode = element; // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome

    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1 && currentNode !== rootParent) {
      var overflowY = this.getComputedStyle(currentNode).overflowY;

      if (overflowY === 'scroll' || overflowY === 'auto') {
        return currentNode;
      }

      currentNode = currentNode.parentNode;
    }

    return rootParent;
  },
  getScrollTop: function getScrollTop(element) {
    return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
  },
  setScrollTop: function setScrollTop(element, value) {
    'scrollTop' in element ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
  },
  // get distance from element top to page top
  getElementTop: function getElementTop(element) {
    return (element === window ? 0 : element.getBoundingClientRect().top) + this.getScrollTop(window);
  },
  getVisibleHeight: function getVisibleHeight(element) {
    return element === window ? element.innerHeight : element.getBoundingClientRect().height;
  },
  getComputedStyle: !utils["e" /* isServer */] && document.defaultView.getComputedStyle.bind(document.defaultView)
});
// CONCATENATED MODULE: ./es/utils/event.js

var supportsPassive = false;

if (!utils["e" /* isServer */]) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

function on(target, event, handler, passive) {
  if (passive === void 0) {
    passive = false;
  }

  !utils["e" /* isServer */] && target.addEventListener(event, handler, supportsPassive ? {
    capture: false,
    passive: passive
  } : false);
}
function off(target, event, handler) {
  !utils["e" /* isServer */] && target.removeEventListener(event, handler);
}
// CONCATENATED MODULE: ./es/mixins/touch.js
/* harmony default export */ var touch = ({
  methods: {
    touchStart: function touchStart(event) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.offsetX > this.offsetY ? 'horizontal' : this.offsetX < this.offsetY ? 'vertical' : '';
    },
    resetTouchStatus: function resetTouchStatus() {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    }
  }
});
// CONCATENATED MODULE: ./es/mixins/popup/index.js





/* harmony default export */ var popup = ({
  mixins: [touch],
  props: {
    // whether to show popup
    value: Boolean,
    // whether to show overlay
    overlay: Boolean,
    // overlay custom style
    overlayStyle: Object,
    // overlay custom class name
    overlayClass: String,
    // whether to close popup when click overlay
    closeOnClickOverlay: Boolean,
    // z-index
    zIndex: [String, Number],
    // return the mount node for popup
    getContainer: [String, Function],
    // prevent body scroll
    lockScroll: {
      type: Boolean,
      default: true
    },
    // whether to lazy render
    lazyRender: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      inited: this.value
    };
  },
  computed: {
    shouldRender: function shouldRender() {
      return this.inited || !this.lazyRender;
    }
  },
  watch: {
    value: function value(val) {
      this.inited = this.inited || this.value;
      this[val ? 'open' : 'close']();
    },
    getContainer: function getContainer() {
      this.move();
    },
    overlay: function overlay() {
      this.renderOverlay();
    }
  },
  created: function created() {
    this._popupId = 'popup-' + popup_context.plusKey('id');
  },
  mounted: function mounted() {
    if (this.getContainer) {
      this.move();
    }

    if (this.value) {
      this.open();
    }
  },
  activated: function activated() {
    /* istanbul ignore next */
    if (this.value) {
      this.open();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.close();

    if (this.getContainer) {
      this.$parent.$el.appendChild(this.$el);
    }
  },
  deactivated: function deactivated() {
    /* istanbul ignore next */
    this.close();
  },
  methods: {
    open: function open() {
      /* istanbul ignore next */
      if (this.$isServer || this.opened) {
        return;
      } // 如果属性中传入了`zIndex`，则覆盖`context`中对应的`zIndex`


      if (this.zIndex !== undefined) {
        popup_context.zIndex = this.zIndex;
      }

      this.opened = true;
      this.renderOverlay();

      if (this.lockScroll) {
        on(document, 'touchstart', this.touchStart);
        on(document, 'touchmove', this.onTouchMove);

        if (!popup_context.lockCount) {
          document.body.classList.add('van-overflow-hidden');
        }

        popup_context.lockCount++;
      }
    },
    close: function close() {
      if (!this.opened) {
        return;
      }

      if (this.lockScroll) {
        popup_context.lockCount--;
        off(document, 'touchstart', this.touchStart);
        off(document, 'touchmove', this.onTouchMove);

        if (!popup_context.lockCount) {
          document.body.classList.remove('van-overflow-hidden');
        }
      }

      this.opened = false;
      manager.close(this._popupId);
      this.$emit('input', false);
    },
    move: function move() {
      var container;
      var getContainer = this.getContainer;

      if (getContainer) {
        container = typeof getContainer === 'string' ? document.querySelector(getContainer) : getContainer();
      } else if (this.$parent) {
        container = this.$parent.$el;
      }

      if (container) {
        container.appendChild(this.$el);
      }
    },
    onTouchMove: function onTouchMove(e) {
      this.touchMove(e);
      var direction = this.deltaY > 0 ? '10' : '01';
      var el = utils_scroll.getScrollEventTarget(e.target, this.$el);
      var scrollHeight = el.scrollHeight,
          offsetHeight = el.offsetHeight,
          scrollTop = el.scrollTop;
      var status = '11';
      /* istanbul ignore next */

      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01';
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10';
      }
      /* istanbul ignore next */


      if (status !== '11' && this.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    renderOverlay: function renderOverlay() {
      var _this = this;

      if (this.overlay) {
        manager.open(this, {
          zIndex: popup_context.plusKey('zIndex'),
          className: this.overlayClass,
          customStyle: this.overlayStyle
        });
      } else {
        manager.close(this._popupId);
      }

      this.$nextTick(function () {
        _this.$el.style.zIndex = popup_context.plusKey('zIndex');
      });
    }
  }
});
// CONCATENATED MODULE: ./es/actionsheet/index.js


/* harmony default export */ var actionsheet = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('transition', {
      attrs: {
        "name": "van-slide-bottom"
      }
    }, [_vm.shouldRender ? _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.value,
        expression: "value"
      }],
      class: _vm.b({
        'withtitle': _vm.title
      })
    }, [_vm.title ? _c('div', {
      staticClass: "van-hairline--top-bottom",
      class: _vm.b('header')
    }, [_c('div', {
      domProps: {
        "textContent": _vm._s(_vm.title)
      }
    }), _c('icon', {
      attrs: {
        "name": "ion-ios-close-outline"
      },
      on: {
        "click": _vm.onCancel
      }
    })], 1) : _c('ul', {
      staticClass: "van-hairline--bottom"
    }, _vm._l(_vm.actions, function (item) {
      return _c('li', {
        class: [_vm.b('item', {
          disabled: item.disabled || item.loading
        }), item.className, 'van-hairline--top'],
        on: {
          "click": function click($event) {
            $event.stopPropagation();

            _vm.onSelect(item);
          }
        }
      }, [!item.loading ? [_c('span', {
        class: _vm.b('name')
      }, [_vm._v(_vm._s(item.name))]), item.subname ? _c('span', {
        class: _vm.b('subname')
      }, [_vm._v(_vm._s(item.subname))]) : _vm._e()] : _c('loading', {
        class: _vm.b('loading'),
        attrs: {
          "size": "20px"
        }
      })], 2);
    })), _vm.cancelText ? _c('div', {
      class: [_vm.b('cancel'), 'van-hairline--top'],
      domProps: {
        "textContent": _vm._s(_vm.cancelText)
      },
      on: {
        "click": _vm.onCancel
      }
    }) : _c('div', {
      class: _vm.b('content')
    }, [_vm._t("default")], 2)]) : _vm._e()]);
  },
  name: 'actionsheet',
  mixins: [popup],
  props: {
    value: Boolean,
    title: String,
    cancelText: String,
    actions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onSelect: function onSelect(item) {
      if (!item.disabled && !item.loading) {
        item.callback && item.callback(item);
        this.$emit('select', item);
      }
    },
    onCancel: function onCancel() {
      this.$emit('input', false);
      this.$emit('cancel');
    }
  }
}));
// CONCATENATED MODULE: ./es/badge/index.js
var badge_components;



/* harmony default export */ var badge = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('a', {
      class: [_vm.b({
        select: _vm.select
      }), 'van-hairline'],
      attrs: {
        "href": _vm.url
      },
      on: {
        "click": _vm.onClick
      }
    }, [_c('van-info', {
      class: _vm.b('info'),
      attrs: {
        "info": _vm.info
      }
    }), _vm._v("\n  " + _vm._s(_vm.title) + "\n")], 1);
  },
  name: 'badge',
  components: (badge_components = {}, badge_components[info.name] = info, badge_components),
  props: {
    url: String,
    info: [String, Number],
    title: String
  },
  beforeCreate: function beforeCreate() {
    this.$parent.badges.push(this);
  },
  computed: {
    select: function select() {
      return this.$parent.badges.indexOf(this) === this.$parent.activeKey;
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click', this.$parent.badges.indexOf(this));
    }
  }
}));
// CONCATENATED MODULE: ./es/badge-group/index.js

/* harmony default export */ var badge_group = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "van-hairline--top-bottom",
      class: _vm.b()
    }, [_vm._t("default")], 2);
  },
  name: 'badge-group',
  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },
  data: function data() {
    return {
      badges: []
    };
  }
}));
// CONCATENATED MODULE: ./es/button/index.js

/* harmony default export */ var es_button = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(_vm.tag, {
      tag: "component",
      class: _vm.b([_vm.type, _vm.size, {
        block: _vm.block,
        plain: _vm.plain,
        round: _vm.round,
        square: _vm.square,
        loading: _vm.loading,
        disabled: _vm.disabled,
        unclickable: _vm.disabled || _vm.loading,
        'bottom-action': _vm.bottomAction
      }]),
      attrs: {
        "type": _vm.nativeType,
        "disabled": _vm.disabled
      },
      on: {
        "click": _vm.onClick
      }
    }, [_vm.loading ? _c('loading', {
      attrs: {
        "size": "20px",
        "color": _vm.type === 'default' ? void 0 : ''
      }
    }) : _c('span', {
      class: _vm.b('text')
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2)], 1);
  },
  name: 'button',
  props: {
    text: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    disabled: Boolean,
    nativeType: String,
    bottomAction: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  methods: {
    onClick: function onClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/tag/index.js

/* harmony default export */ var tag = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('span', {
      class: [_vm.b((_obj = {
        mark: _vm.mark,
        plain: _vm.plain
      }, _obj[_vm.type] = _vm.type, _obj)), {
        'van-hairline--surround': _vm.plain
      }]
    }, [_vm._t("default")], 2);

    var _obj;
  },
  name: 'tag',
  props: {
    type: String,
    mark: Boolean,
    plain: Boolean
  }
}));
// CONCATENATED MODULE: ./es/card/index.js


/* harmony default export */ var card = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b({
        center: _vm.centered
      })
    }, [_c('a', {
      class: _vm.b('thumb'),
      attrs: {
        "href": _vm.thumbLink
      }
    }, [_vm._t("thumb", [_c('img', {
      class: _vm.b('img'),
      attrs: {
        "src": _vm.thumb
      }
    })]), _vm.tag ? _c('van-tag', {
      class: _vm.b('tag'),
      attrs: {
        "mark": "",
        "type": "danger"
      }
    }, [_vm._v("\n      " + _vm._s(_vm.tag) + "\n    ")]) : _vm._e()], 2), _c('div', {
      class: _vm.b('content')
    }, [_vm._t("title", [_vm.title || _vm.isDef(_vm.price) ? _c('div', {
      class: _vm.b('row')
    }, [_vm.title ? _c('div', {
      class: _vm.b('title')
    }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm.isDef(_vm.price) ? _c('div', {
      class: _vm.b('price')
    }, [_vm._v(_vm._s(_vm.currency) + " " + _vm._s(_vm.price))]) : _vm._e()]) : _vm._e()]), _vm._t("desc", [_vm.desc || _vm.isDef(_vm.num) ? _c('div', {
      class: _vm.b('row')
    }, [_vm.desc ? _c('div', {
      class: [_vm.b('desc'), 'van-ellipsis']
    }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e(), _vm.isDef(_vm.num) ? _c('div', {
      class: _vm.b('num')
    }, [_vm._v("x " + _vm._s(_vm.num))]) : _vm._e()]) : _vm._e()]), _vm._t("tags")], 2), _vm.$slots.footer ? _c('div', {
      class: _vm.b('footer')
    }, [_vm._t("footer")], 2) : _vm._e()]);
  },
  name: 'card',
  components: {
    VanTag: tag
  },
  props: {
    tag: String,
    desc: String,
    thumb: String,
    title: String,
    centered: Boolean,
    num: [Number, String],
    price: [Number, String],
    currency: {
      type: String,
      default: '¥'
    },
    thumbLink: {
      type: String,
      default: 'javascript:;'
    }
  }
}));
// CONCATENATED MODULE: ./es/mixins/find-parent.js
/**
 * find parent component by name
 */
/* harmony default export */ var find_parent = ({
  data: function data() {
    return {
      parent: null
    };
  },
  methods: {
    findParent: function findParent(name) {
      var parent = this.$parent;

      while (parent) {
        if (parent.$options.name === name) {
          this.parent = parent;
          break;
        }

        parent = parent.$parent;
      }
    }
  }
});
// CONCATENATED MODULE: ./es/checkbox/index.js


/* harmony default export */ var es_checkbox = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('div', {
      class: [_vm.b('icon', [_vm.shape, {
        disabled: _vm.isDisabled,
        checked: _vm.checked
      }])],
      on: {
        "click": _vm.toggle
      }
    }, [_vm._t("icon", [_c('icon', {
      attrs: {
        "name": "ion-checkmark"
      }
    })], {
      checked: _vm.checked
    })], 2), _vm.$slots.default ? _c('span', {
      class: _vm.b('label', _vm.labelPosition),
      on: {
        "click": function click($event) {
          _vm.toggle('label');
        }
      }
    }, [_vm._t("default")], 2) : _vm._e()]);
  },
  name: 'checkbox',
  mixins: [find_parent],
  props: {
    name: null,
    value: null,
    disabled: Boolean,
    labelPosition: String,
    labelDisabled: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String,
      default: 'round'
    }
  },
  computed: {
    checked: {
      get: function get() {
        return this.parent ? this.parent.value.indexOf(this.name) !== -1 : this.value;
      },
      set: function set(val) {
        var parent = this.parent;

        if (parent) {
          var parentValue = this.parent.value.slice();

          if (val) {
            if (parent.max && parentValue.length >= parent.max) {
              return;
            }
            /* istanbul ignore else */


            if (parentValue.indexOf(this.name) === -1) {
              parentValue.push(this.name);
              parent.$emit('input', parentValue);
            }
          } else {
            var index = parentValue.indexOf(this.name);
            /* istanbul ignore else */

            if (index !== -1) {
              parentValue.splice(index, 1);
              parent.$emit('input', parentValue);
            }
          }
        } else {
          this.$emit('input', val);
        }
      }
    },
    isDisabled: function isDisabled() {
      return this.parent && this.parent.disabled || this.disabled;
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  created: function created() {
    this.findParent('van-checkbox-group');
  },
  methods: {
    toggle: function toggle(target) {
      if (!this.isDisabled && !(target === 'label' && this.labelDisabled)) {
        this.checked = !this.checked;
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/checkbox-group/index.js

/* harmony default export */ var checkbox_group = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm._t("default")], 2);
  },
  name: 'checkbox-group',
  props: {
    value: Array,
    disabled: Boolean,
    max: {
      default: 0,
      type: Number
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  }
}));
// EXTERNAL MODULE: ./es/utils/raf.js
var raf = __webpack_require__(2);

// CONCATENATED MODULE: ./es/circle/index.js


/* harmony default export */ var circle = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b(),
      style: _vm.style,
      on: {
        "click": function click($event) {
          _vm.$emit('click');
        }
      }
    }, [_c('svg', {
      attrs: {
        "viewBox": "0 0 1060 1060"
      }
    }, [_c('path', {
      class: _vm.b('hover'),
      style: _vm.hoverStyle,
      attrs: {
        "d": _vm.path
      }
    }), _c('path', {
      class: _vm.b('layer'),
      style: _vm.layerStyle,
      attrs: {
        "d": _vm.path
      }
    })]), _vm._t("default", [_c('div', {
      class: _vm.b('text')
    }, [_vm._v(_vm._s(_vm.text))])])], 2);
  },
  name: 'circle',
  props: {
    text: String,
    speed: Number,
    size: {
      type: String,
      default: '100px'
    },
    fill: {
      type: String,
      default: 'none'
    },
    total: {
      type: Number,
      default: 100
    },
    current: {
      type: Number,
      default: 0
    },
    layerColor: {
      type: String,
      default: '#fff'
    },
    color: {
      type: String,
      default: '#38f'
    },
    strokeWidth: {
      type: Number,
      default: 40
    },
    clockwise: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      dynamic: this.current
    };
  },
  beforeCreate: function beforeCreate() {
    this.perimeter = 3140;
    this.path = 'M 530 530 m -500, 0 a 500, 500 0 1, 1 1000, 0 a 500, 500 0 1, 1 -1000, 0';
  },
  computed: {
    style: function style() {
      return {
        width: this.size,
        height: this.size
      };
    },
    layerStyle: function layerStyle() {
      var offset = this.perimeter * this.format((this.total - this.dynamic) / this.total, 0, 1);
      offset = this.clockwise ? offset : this.perimeter * 2 - offset;
      return {
        stroke: "" + this.color,
        strokeDashoffset: offset + "px",
        strokeWidth: this.strokeWidth + 1 + "px"
      };
    },
    hoverStyle: function hoverStyle() {
      return {
        fill: "" + this.fill,
        stroke: "" + this.layerColor,
        strokeWidth: this.strokeWidth + "px"
      };
    }
  },
  watch: {
    current: {
      handler: function handler(val, old) {
        this.startTime = Date.now();
        this.startRate = old;
        this.endRate = val;
        this.increase = this.endRate > this.startRate;
        this.duration = Math.abs((this.startRate - this.endRate) * 1000 / this.speed);

        if (this.speed) {
          Object(raf["a" /* cancel */])(this.rafId);
          this.rafId = Object(raf["b" /* raf */])(this.animate);
        } else {
          this.dynamic = this.current;
        }
      },
      immediate: true
    }
  },
  methods: {
    animate: function animate() {
      var now = Date.now();
      var progress = Math.min((now - this.startTime) / this.duration, 1);
      this.dynamic = progress * (this.endRate - this.startRate) + this.startRate;

      if (this.increase ? this.dynamic < this.endRate : this.dynamic > this.endRate) {
        this.rafId = Object(raf["b" /* raf */])(this.animate);
      }
    },
    format: function format(rate, min, max) {
      return Math.min(Math.max(rate, min), max);
    }
  }
}));
// CONCATENATED MODULE: ./es/col/index.js

/* harmony default export */ var col = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(_vm.tag, {
      tag: "component",
      class: _vm.b((_obj = {}, _obj[_vm.span] = _vm.span, _obj["offset-" + _vm.offset] = _vm.offset, _obj)),
      style: _vm.style
    }, [_vm._t("default")], 2);

    var _obj;
  },
  name: 'col',
  props: {
    span: [Number, String],
    offset: [Number, String],
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    gutter: function gutter() {
      return this.$parent && Number(this.$parent.gutter) || 0;
    },
    style: function style() {
      var padding = this.gutter / 2 + "px";
      return this.gutter ? {
        paddingLeft: padding,
        paddingRight: padding
      } : {};
    }
  }
}));
// CONCATENATED MODULE: ./es/collapse/index.js

/* harmony default export */ var collapse = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "van-hairline--top-bottom",
      class: _vm.b()
    }, [_vm._t("default")], 2);
  },
  name: 'collapse',
  props: {
    accordion: Boolean,
    value: [String, Number, Array]
  },
  data: function data() {
    return {
      items: []
    };
  },
  methods: {
    switch: function _switch(name, expanded) {
      if (!this.accordion) {
        name = expanded ? this.value.concat(name) : this.value.filter(function (activeName) {
          return activeName !== name;
        });
      }

      this.$emit('change', name);
      this.$emit('input', name);
    }
  }
}));
// CONCATENATED MODULE: ./es/collapse-item/index.js



/* harmony default export */ var collapse_item = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: [_vm.b({
        expanded: _vm.expanded
      }), {
        'van-hairline--top': _vm.index
      }]
    }, [_c('cell', _vm._b({
      class: _vm.b('title'),
      on: {
        "click": _vm.onClick
      }
    }, 'cell', _vm.$props, false), [_vm._t("title", null, {
      slot: "title"
    }), _vm._t("icon", null, {
      slot: "icon"
    }), _vm._t("value"), _vm._t("right-icon", null, {
      slot: "right-icon"
    })], 2), _vm.inited ? _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.show,
        expression: "show"
      }],
      ref: "wrapper",
      class: _vm.b('wrapper'),
      on: {
        "transitionend": _vm.onTransitionEnd
      }
    }, [_c('div', {
      ref: "content",
      class: _vm.b('content')
    }, [_vm._t("default")], 2)]) : _vm._e()], 1);
  },
  name: 'collapse-item',
  mixins: [find_parent],
  props: {
    name: [String, Number],
    icon: String,
    label: String,
    title: [String, Number],
    value: [String, Number],
    border: {
      type: Boolean,
      default: true
    },
    isLink: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      show: null,
      inited: null
    };
  },
  computed: {
    items: function items() {
      return this.parent.items;
    },
    index: function index() {
      return this.items.indexOf(this);
    },
    currentName: function currentName() {
      return this.isDef(this.name) ? this.name : this.index;
    },
    expanded: function expanded() {
      var _this = this;

      if (!this.parent) {
        return null;
      }

      var value = this.parent.value;
      return this.parent.accordion ? value === this.currentName : value.some(function (name) {
        return name === _this.currentName;
      });
    }
  },
  created: function created() {
    this.findParent('van-collapse');
    this.items.push(this);
    this.show = this.expanded;
    this.inited = this.expanded;
  },
  destroyed: function destroyed() {
    this.items.splice(this.index, 1);
  },
  watch: {
    expanded: function expanded(_expanded, prev) {
      var _this2 = this;

      if (prev === null) {
        return;
      }

      if (_expanded) {
        this.show = true;
        this.inited = true;
      }

      this.$nextTick(function () {
        var _this2$$refs = _this2.$refs,
            content = _this2$$refs.content,
            wrapper = _this2$$refs.wrapper;

        if (!content || !wrapper) {
          return;
        }

        var contentHeight = content.clientHeight + 'px';
        wrapper.style.height = _expanded ? 0 : contentHeight;
        Object(raf["b" /* raf */])(function () {
          wrapper.style.height = _expanded ? contentHeight : 0;
        });
      });
    }
  },
  methods: {
    onClick: function onClick() {
      var parent = this.parent;
      var name = parent.accordion && this.currentName === parent.value ? '' : this.currentName;
      var expanded = !this.expanded;
      this.parent.switch(name, expanded);
    },
    onTransitionEnd: function onTransitionEnd() {
      if (!this.expanded) {
        this.show = false;
      } else {
        this.$refs.wrapper.style.height = null;
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/utils/deep-clone.js

function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  } else if (typeof obj === 'object') {
    return deep_assign_assign({}, obj);
  }

  return obj;
}
// CONCATENATED MODULE: ./es/picker/PickerColumn.js



var DEFAULT_DURATION = 200;
/* harmony default export */ var PickerColumn = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: [_vm.b(), _vm.className],
      style: _vm.columnStyle,
      on: {
        "touchstart": _vm.onTouchStart,
        "touchmove": function touchmove($event) {
          $event.preventDefault();
          return _vm.onTouchMove($event);
        },
        "touchend": _vm.onTouchEnd,
        "touchcancel": _vm.onTouchEnd
      }
    }, [_c('ul', {
      style: _vm.wrapperStyle
    }, _vm._l(_vm.options, function (option, index) {
      return _c('li', {
        staticClass: "van-ellipsis",
        class: _vm.b('item', {
          disabled: _vm.isDisabled(option),
          selected: index === _vm.currentIndex
        }),
        style: _vm.optionStyle,
        domProps: {
          "innerHTML": _vm._s(_vm.getOptionText(option))
        },
        on: {
          "click": function click($event) {
            _vm.setIndex(index, true);
          }
        }
      });
    }))]);
  },
  name: 'picker-column',
  props: {
    valueKey: String,
    className: String,
    itemHeight: Number,
    visibleItemCount: Number,
    initialOptions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      startY: 0,
      offset: 0,
      duration: 0,
      startOffset: 0,
      options: deepClone(this.initialOptions),
      currentIndex: this.defaultIndex
    };
  },
  created: function created() {
    this.$parent.children && this.$parent.children.push(this);
    this.setIndex(this.currentIndex);
  },
  destroyed: function destroyed() {
    var children = this.$parent.children;
    children && children.splice(children.indexOf(this), 1);
  },
  watch: {
    defaultIndex: function defaultIndex() {
      this.setIndex(this.defaultIndex);
    }
  },
  computed: {
    count: function count() {
      return this.options.length;
    },
    baseOffset: function baseOffset() {
      return this.itemHeight * (this.visibleItemCount - 1) / 2;
    },
    columnStyle: function columnStyle() {
      return {
        height: this.itemHeight * this.visibleItemCount + 'px'
      };
    },
    wrapperStyle: function wrapperStyle() {
      return {
        transition: this.duration + "ms",
        transform: "translate3d(0, " + (this.offset + this.baseOffset) + "px, 0)",
        lineHeight: this.itemHeight + 'px'
      };
    },
    optionStyle: function optionStyle() {
      return {
        height: this.itemHeight + 'px'
      };
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      this.startY = event.touches[0].clientY;
      this.startOffset = this.offset;
      this.duration = 0;
    },
    onTouchMove: function onTouchMove(event) {
      var deltaY = event.touches[0].clientY - this.startY;
      this.offset = Object(utils["f" /* range */])(this.startOffset + deltaY, -(this.count * this.itemHeight), this.itemHeight);
    },
    onTouchEnd: function onTouchEnd() {
      if (this.offset !== this.startOffset) {
        this.duration = DEFAULT_DURATION;
        var index = Object(utils["f" /* range */])(Math.round(-this.offset / this.itemHeight), 0, this.count - 1);
        this.setIndex(index, true);
      }
    },
    adjustIndex: function adjustIndex(index) {
      index = Object(utils["f" /* range */])(index, 0, this.count);

      for (var i = index; i < this.count; i++) {
        if (!this.isDisabled(this.options[i])) return i;
      }

      for (var _i = index - 1; _i >= 0; _i--) {
        if (!this.isDisabled(this.options[_i])) return _i;
      }
    },
    isDisabled: function isDisabled(option) {
      return Object(utils["d" /* isObj */])(option) && option.disabled;
    },
    getOptionText: function getOptionText(option) {
      return Object(utils["d" /* isObj */])(option) && this.valueKey in option ? option[this.valueKey] : option;
    },
    setIndex: function setIndex(index, userAction) {
      index = this.adjustIndex(index) || 0;
      this.offset = -index * this.itemHeight;

      if (index !== this.currentIndex) {
        this.currentIndex = index;
        userAction && this.$emit('change', index);
      }
    },
    setValue: function setValue(value) {
      var options = this.options;

      for (var i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          return this.setIndex(i);
        }
      }
    },
    getValue: function getValue() {
      return this.options[this.currentIndex];
    }
  }
}));
// CONCATENATED MODULE: ./es/picker/index.js



/* harmony default export */ var picker = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm.showToolbar ? _c('div', {
      staticClass: "van-hairline--top-bottom",
      class: _vm.b('toolbar')
    }, [_vm._t("default", [_c('div', {
      class: _vm.b('cancel'),
      on: {
        "click": function click($event) {
          _vm.emit('cancel');
        }
      }
    }, [_vm._v(_vm._s(_vm.cancelButtonText || _vm.$t('cancel')))]), _vm.title ? _c('div', {
      staticClass: "van-ellipsis",
      class: _vm.b('title'),
      domProps: {
        "textContent": _vm._s(_vm.title)
      }
    }) : _vm._e(), _c('div', {
      class: _vm.b('confirm'),
      on: {
        "click": function click($event) {
          _vm.emit('confirm');
        }
      }
    }, [_vm._v(_vm._s(_vm.confirmButtonText || _vm.$t('confirm')))])])], 2) : _vm._e(), _vm.loading ? _c('div', {
      class: _vm.b('loading')
    }, [_c('loading')], 1) : _vm._e(), _c('div', {
      class: _vm.b('columns'),
      style: _vm.columnsStyle,
      on: {
        "touchmove": function touchmove($event) {
          $event.preventDefault();
        }
      }
    }, [_vm._l(_vm.simple ? [_vm.columns] : _vm.columns, function (item, index) {
      return _c('picker-column', {
        key: index,
        attrs: {
          "value-key": _vm.valueKey,
          "initial-options": _vm.simple ? item : item.values,
          "class-name": item.className,
          "default-index": item.defaultIndex,
          "item-height": _vm.itemHeight,
          "visible-item-count": _vm.visibleItemCount
        },
        on: {
          "change": function change($event) {
            _vm.onChange(index);
          }
        }
      });
    }), _c('div', {
      staticClass: "van-hairline--top-bottom",
      class: _vm.b('frame'),
      style: _vm.frameStyle
    })], 2)]);
  },
  name: 'picker',
  components: {
    PickerColumn: PickerColumn
  },
  props: {
    title: String,
    loading: Boolean,
    showToolbar: Boolean,
    confirmButtonText: String,
    cancelButtonText: String,
    visibleItemCount: {
      type: Number,
      default: 5
    },
    valueKey: {
      type: String,
      default: 'text'
    },
    itemHeight: {
      type: Number,
      default: 44
    },
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      children: []
    };
  },
  computed: {
    frameStyle: function frameStyle() {
      return {
        height: this.itemHeight + 'px'
      };
    },
    columnsStyle: function columnsStyle() {
      return {
        height: this.itemHeight * this.visibleItemCount + 'px'
      };
    },
    simple: function simple() {
      return this.columns.length && !this.columns[0].values;
    }
  },
  watch: {
    columns: function columns() {
      this.setColumns();
    }
  },
  methods: {
    setColumns: function setColumns() {
      var _this = this;

      var columns = this.simple ? [{
        values: this.columns
      }] : this.columns;
      columns.forEach(function (columns, index) {
        _this.setColumnValues(index, deepClone(columns.values));
      });
    },
    emit: function emit(event) {
      if (this.simple) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(event, this.getValues(), this.getIndexes());
      }
    },
    onChange: function onChange(columnIndex) {
      if (this.simple) {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit('change', this, this.getValues(), columnIndex);
      }
    },
    // get column instance by index
    getColumn: function getColumn(index) {
      return this.children[index];
    },
    // get column value by index
    getColumnValue: function getColumnValue(index) {
      var column = this.getColumn(index);
      return column && column.getValue();
    },
    // set column value by index
    setColumnValue: function setColumnValue(index, value) {
      var column = this.getColumn(index);
      column && column.setValue(value);
    },
    // get column option index by column index
    getColumnIndex: function getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },
    // set column option index by column index
    setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
      var column = this.getColumn(columnIndex);
      column && column.setIndex(optionIndex);
    },
    // get options of column by index
    getColumnValues: function getColumnValues(index) {
      return (this.children[index] || {}).options;
    },
    // set options of column by index
    setColumnValues: function setColumnValues(index, options) {
      var column = this.children[index];

      if (column && JSON.stringify(column.options) !== JSON.stringify(options)) {
        column.options = options;
        column.setIndex(0);
      }
    },
    // get values of all columns
    getValues: function getValues() {
      return this.children.map(function (child) {
        return child.getValue();
      });
    },
    // set values of all columns
    setValues: function setValues(values) {
      var _this2 = this;

      values.forEach(function (value, index) {
        _this2.setColumnValue(index, value);
      });
    },
    // get indexes of all columns
    getIndexes: function getIndexes() {
      return this.children.map(function (child) {
        return child.currentIndex;
      });
    },
    // set indexes of all columns
    setIndexes: function setIndexes(indexes) {
      var _this3 = this;

      indexes.forEach(function (optionIndex, columnIndex) {
        _this3.setColumnIndex(columnIndex, optionIndex);
      });
    }
  }
}));
// CONCATENATED MODULE: ./es/datetime-picker/index.js



var currentYear = new Date().getFullYear();

var isValidDate = function isValidDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
};

/* harmony default export */ var datetime_picker = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('picker', {
      ref: "picker",
      attrs: {
        "title": _vm.title,
        "columns": _vm.columns,
        "item-height": _vm.itemHeight,
        "show-toolbar": _vm.showToolbar,
        "visible-item-count": _vm.visibleItemCount,
        "confirm-button-text": _vm.confirmButtonText,
        "cancel-button-text": _vm.cancelButtonText
      },
      on: {
        "change": _vm.onChange,
        "confirm": _vm.onConfirm,
        "cancel": function cancel($event) {
          _vm.$emit('cancel');
        }
      }
    });
  },
  name: 'datetime-picker',
  components: {
    Picker: picker
  },
  props: {
    value: {},
    title: String,
    itemHeight: Number,
    visibleItemCount: Number,
    confirmButtonText: String,
    cancelButtonText: String,
    type: {
      type: String,
      default: 'datetime'
    },
    showToolbar: {
      type: Boolean,
      default: true
    },
    format: {
      type: String,
      default: 'YYYY.MM.DD HH时 mm分'
    },
    formatter: {
      type: Function,
      default: function _default(type, value) {
        return value;
      }
    },
    minDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear - 10, 0, 1);
      },
      validator: isValidDate
    },
    maxDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear + 10, 11, 31);
      },
      validator: isValidDate
    },
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    minMinute: {
      type: Number,
      default: 0
    },
    maxMinute: {
      type: Number,
      default: 59
    }
  },
  data: function data() {
    return {
      innerValue: this.correctValue(this.value)
    };
  },
  watch: {
    value: function value(val) {
      val = this.correctValue(val);
      var isEqual = this.type === 'time' ? val === this.innerValue : val.valueOf() === this.innerValue.valueOf();
      if (!isEqual) this.innerValue = val;
    },
    innerValue: function innerValue(val) {
      this.$emit('input', val);
    },
    columns: function columns() {
      this.updateColumnValue(this.innerValue);
    }
  },
  computed: {
    ranges: function ranges() {
      if (this.type === 'time') {
        return [{
          type: 'hour',
          range: [this.minHour, this.maxHour]
        }, {
          type: 'minute',
          range: [this.minMinute, this.maxMinute]
        }];
      }

      var _this$getBoundary = this.getBoundary('max', this.innerValue),
          maxYear = _this$getBoundary.maxYear,
          maxDate = _this$getBoundary.maxDate,
          maxMonth = _this$getBoundary.maxMonth,
          maxHour = _this$getBoundary.maxHour,
          maxMinute = _this$getBoundary.maxMinute;

      var _this$getBoundary2 = this.getBoundary('min', this.innerValue),
          minYear = _this$getBoundary2.minYear,
          minDate = _this$getBoundary2.minDate,
          minMonth = _this$getBoundary2.minMonth,
          minHour = _this$getBoundary2.minHour,
          minMinute = _this$getBoundary2.minMinute;

      var result = [{
        type: 'year',
        range: [minYear, maxYear]
      }, {
        type: 'month',
        range: [minMonth, maxMonth]
      }, {
        type: 'day',
        range: [minDate, maxDate]
      }, {
        type: 'hour',
        range: [minHour, maxHour]
      }, {
        type: 'minute',
        range: [minMinute, maxMinute]
      }];
      if (this.type === 'date') result.splice(3, 2);
      if (this.type === 'year-month') result.splice(2, 3);
      return result;
    },
    columns: function columns() {
      var _this = this;

      var results = this.ranges.map(function (_ref) {
        var type = _ref.type,
            range = _ref.range;

        var values = _this.times(range[1] - range[0] + 1, function (index) {
          var value = range[0] + index;
          value = value < 10 ? "0" + value : "" + value;
          return _this.formatter(type, value);
        });

        return {
          values: values
        };
      });
      return results;
    }
  },
  methods: {
    pad: function pad(val) {
      return ("00" + val).slice(-2);
    },
    correctValue: function correctValue(value) {
      // validate value
      var isDateType = this.type !== 'time';

      if (isDateType && !isValidDate(value)) {
        value = this.minDate;
      } else if (!value) {
        var _minHour = this.minHour;
        value = (_minHour > 10 ? _minHour : '0' + _minHour) + ":00";
      } // time type


      if (!isDateType) {
        var _value$split = value.split(':'),
            hour = _value$split[0],
            minute = _value$split[1];

        hour = this.pad(Object(utils["f" /* range */])(hour, this.minHour, this.maxHour));
        minute = this.pad(Object(utils["f" /* range */])(minute, this.minMinute, this.maxMinute));
        return hour + ":" + minute;
      } // date type


      var _this$getBoundary3 = this.getBoundary('max', value),
          maxYear = _this$getBoundary3.maxYear,
          maxDate = _this$getBoundary3.maxDate,
          maxMonth = _this$getBoundary3.maxMonth,
          maxHour = _this$getBoundary3.maxHour,
          maxMinute = _this$getBoundary3.maxMinute;

      var _this$getBoundary4 = this.getBoundary('min', value),
          minYear = _this$getBoundary4.minYear,
          minDate = _this$getBoundary4.minDate,
          minMonth = _this$getBoundary4.minMonth,
          minHour = _this$getBoundary4.minHour,
          minMinute = _this$getBoundary4.minMinute;

      var minDay = new Date(minYear, minMonth - 1, minDate, minHour, minMinute);
      var maxDay = new Date(maxYear, maxMonth - 1, maxDate, maxHour, maxMinute);
      value = Math.max(value, minDay);
      value = Math.min(value, maxDay);
      return new Date(value);
    },
    times: function times(n, iteratee) {
      var index = -1;
      var result = Array(n);

      while (++index < n) {
        result[index] = iteratee(index);
      }

      return result;
    },
    getBoundary: function getBoundary(type, value) {
      var _ref2;

      var boundary = this[type + "Date"];
      var year = boundary.getFullYear();
      var month = 1;
      var date = 1;
      var hour = 0;
      var minute = 0;

      if (type === 'max') {
        month = 12;
        date = this.getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }

      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;

        if (value.getMonth() + 1 === month) {
          date = boundary.getDate();

          if (value.getDate() === date) {
            hour = boundary.getHours();

            if (value.getHours() === hour) {
              minute = boundary.getMinutes();
            }
          }
        }
      }

      return _ref2 = {}, _ref2[type + "Year"] = year, _ref2[type + "Month"] = month, _ref2[type + "Date"] = date, _ref2[type + "Hour"] = hour, _ref2[type + "Minute"] = minute, _ref2;
    },
    getTrueValue: function getTrueValue(formattedValue) {
      if (!formattedValue) return;

      while (isNaN(parseInt(formattedValue, 10))) {
        formattedValue = formattedValue.slice(1);
      }

      return parseInt(formattedValue, 10);
    },
    getMonthEndDay: function getMonthEndDay(year, month) {
      return 32 - new Date(year, month - 1, 32).getDate();
    },
    onConfirm: function onConfirm() {
      this.$emit('confirm', this.innerValue);
    },
    onChange: function onChange(picker) {
      var _this2 = this;

      var values = picker.getValues();
      var value;

      if (this.type === 'time') {
        value = values.join(':');
      } else {
        var year = this.getTrueValue(values[0]);
        var month = this.getTrueValue(values[1]);
        var maxDate = this.getMonthEndDay(year, month);
        var date = this.getTrueValue(values[2]);

        if (this.type === 'year-month') {
          date = 1;
        }

        date = date > maxDate ? maxDate : date;
        var hour = 0;
        var minute = 0;

        if (this.type === 'datetime') {
          hour = this.getTrueValue(values[3]);
          minute = this.getTrueValue(values[4]);
        }

        value = new Date(year, month - 1, date, hour, minute);
      }

      value = this.correctValue(value);
      this.innerValue = value;
      this.$nextTick(function () {
        _this2.$nextTick(function () {
          _this2.$emit('change', picker);
        });
      });
    },
    updateColumnValue: function updateColumnValue(value) {
      var _this3 = this;

      var values = [];
      var formatter = this.formatter,
          pad = this.pad;

      if (this.type === 'time') {
        var currentValue = value.split(':');
        values = [formatter('hour', currentValue[0]), formatter('minute', currentValue[1])];
      } else {
        values = [formatter('year', "" + value.getFullYear()), formatter('month', pad(value.getMonth() + 1)), formatter('day', pad(value.getDate()))];

        if (this.type === 'datetime') {
          values.push(formatter('hour', pad(value.getHours())), formatter('minute', pad(value.getMinutes())));
        }

        if (this.type === 'year-month') {
          values = values.slice(0, 2);
        }
      }

      this.$nextTick(function () {
        _this3.$refs.picker.setValues(values);
      });
    }
  },
  mounted: function mounted() {
    this.updateColumnValue(this.innerValue);
  }
}));
// CONCATENATED MODULE: ./es/dialog/Dialog.js



/* harmony default export */ var dialog_Dialog = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('transition', {
      attrs: {
        "name": "van-dialog-bounce"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.value,
        expression: "value"
      }],
      class: [_vm.b(), _vm.className]
    }, [_vm.title ? _c('div', {
      class: _vm.b('header', {
        isolated: !_vm.message && !_vm.$slots.default
      }),
      domProps: {
        "textContent": _vm._s(_vm.title)
      }
    }) : _vm._e(), _vm.message || _vm.$slots.default ? _c('div', {
      class: _vm.b('content')
    }, [_vm._t("default", [_vm.message ? _c('div', {
      class: _vm.b('message', {
        'has-title': _vm.title
      }),
      domProps: {
        "innerHTML": _vm._s(_vm.message)
      }
    }) : _vm._e()])], 2) : _vm._e(), _c('div', {
      staticClass: "van-hairline--top",
      class: _vm.b('footer', {
        'buttons': _vm.showCancelButton && _vm.showConfirmButton
      })
    }, [_c('van-button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.showCancelButton,
        expression: "showCancelButton"
      }],
      class: _vm.b('cancel'),
      attrs: {
        "loading": _vm.loading.cancel,
        "size": "large"
      },
      on: {
        "click": function click($event) {
          _vm.handleAction('cancel');
        }
      }
    }, [_vm._v("\n        " + _vm._s(_vm.cancelButtonText || _vm.$t('cancel')) + "\n      ")]), _c('van-button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.showConfirmButton,
        expression: "showConfirmButton"
      }],
      class: [_vm.b('confirm'), {
        'van-hairline--left': _vm.showCancelButton && _vm.showConfirmButton
      }],
      attrs: {
        "size": "large",
        "loading": _vm.loading.confirm
      },
      on: {
        "click": function click($event) {
          _vm.handleAction('confirm');
        }
      }
    }, [_vm._v("\n        " + _vm._s(_vm.confirmButtonText || _vm.$t('confirm')) + "\n      ")])], 1)])]);
  },
  name: 'dialog',
  components: {
    VanButton: es_button
  },
  mixins: [popup],
  props: {
    title: String,
    message: String,
    callback: Function,
    className: [String, Object, Array],
    beforeClose: Function,
    confirmButtonText: String,
    cancelButtonText: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      }
    };
  },
  methods: {
    handleAction: function handleAction(action) {
      var _this = this;

      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, function (state) {
          if (state !== false) {
            _this.onClose(action);
          }

          _this.loading[action] = false;
        });
      } else {
        this.onClose(action);
      }
    },
    onClose: function onClose(action) {
      this.$emit('input', false);
      this.$emit(action);
      this.callback && this.callback(action);
    }
  }
}));
// CONCATENATED MODULE: ./es/dialog/index.js



var instance;

var dialog_initInstance = function initInstance() {
  instance = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(dialog_Dialog))({
    el: document.createElement('div')
  });
  instance.$on('input', function (value) {
    instance.value = value;
  });
  document.body.appendChild(instance.$el);
};

var es_dialog_Dialog = function Dialog(options) {
  return new Promise(function (resolve, reject) {
    if (!instance) {
      dialog_initInstance();
    }

    _extends(instance, _extends({
      resolve: resolve,
      reject: reject
    }, options));
  });
};

es_dialog_Dialog.defaultOptions = {
  value: true,
  title: '',
  message: '',
  overlay: true,
  className: '',
  lockScroll: true,
  beforeClose: null,
  confirmButtonText: '',
  cancelButtonText: '',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  callback: function callback(action) {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};

es_dialog_Dialog.alert = function (options) {
  return es_dialog_Dialog(_extends({}, es_dialog_Dialog.currentOptions, options));
};

es_dialog_Dialog.confirm = function (options) {
  return es_dialog_Dialog(_extends({}, es_dialog_Dialog.currentOptions, {
    showCancelButton: true
  }, options));
};

es_dialog_Dialog.close = function () {
  if (instance) {
    instance.value = false;
  }
};

es_dialog_Dialog.setDefaultOptions = function (options) {
  _extends(es_dialog_Dialog.currentOptions, options);
};

es_dialog_Dialog.resetDefaultOptions = function () {
  es_dialog_Dialog.currentOptions = _extends({}, es_dialog_Dialog.defaultOptions);
};

es_dialog_Dialog.install = function () {
  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.use(dialog_Dialog);
};

external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$dialog = es_dialog_Dialog;
es_dialog_Dialog.resetDefaultOptions();
/* harmony default export */ var dialog = (es_dialog_Dialog);
// CONCATENATED MODULE: ./es/field/index.js



/* harmony default export */ var field = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('cell', {
      class: _vm.b((_obj = {
        error: _vm.error,
        disabled: _vm.$attrs.disabled,
        'min-height': _vm.type === 'textarea' && !_vm.autosize
      }, _obj["label-" + _vm.labelAlign] = _vm.labelAlign, _obj)),
      attrs: {
        "icon": _vm.leftIcon,
        "title": _vm.label,
        "center": _vm.center,
        "border": _vm.border,
        "is-link": _vm.isLink,
        "required": _vm.required
      }
    }, [_vm._t("label", null, {
      slot: "title"
    }), _c('div', {
      class: _vm.b('body')
    }, [_vm.type === 'textarea' ? _c('textarea', _vm._g(_vm._b({
      ref: "input",
      class: _vm.b('control', _vm.inputAlign),
      attrs: {
        "readonly": _vm.readonly
      },
      domProps: {
        "value": _vm.value
      }
    }, 'textarea', _vm.$attrs, false), _vm.listeners)) : _c('input', _vm._g(_vm._b({
      ref: "input",
      class: _vm.b('control', _vm.inputAlign),
      attrs: {
        "type": _vm.type,
        "readonly": _vm.readonly
      },
      domProps: {
        "value": _vm.value
      }
    }, 'input', _vm.$attrs, false), _vm.listeners)), _vm.showClear ? _c('icon', {
      class: _vm.b('clear'),
      attrs: {
        "name": "ion-ios-close"
      },
      on: {
        "touchstart": function touchstart($event) {
          $event.preventDefault();

          _vm.$emit('input', '');
        }
      }
    }) : _vm._e(), _vm.$slots.icon || _vm.icon ? _c('div', {
      class: _vm.b('icon'),
      on: {
        "click": _vm.onClickIcon
      }
    }, [_vm._t("icon", [_c('icon', {
      attrs: {
        "name": _vm.icon
      }
    })])], 2) : _vm._e(), _vm.$slots.button ? _c('div', {
      class: _vm.b('button')
    }, [_vm._t("button")], 2) : _vm._e()], 1), _vm.errorMessage ? _c('div', {
      class: _vm.b('error-message'),
      domProps: {
        "textContent": _vm._s(_vm.errorMessage)
      }
    }) : _vm._e()], 2);

    var _obj;
  },
  name: 'field',
  inheritAttrs: false,
  props: {
    value: [String, Number],
    icon: String,
    label: String,
    error: Boolean,
    center: Boolean,
    isLink: Boolean,
    leftIcon: String,
    readonly: Boolean,
    required: Boolean,
    clearable: Boolean,
    labelAlign: String,
    inputAlign: String,
    onIconClick: Function,
    autosize: [Boolean, Object],
    errorMessage: String,
    type: {
      type: String,
      default: 'text'
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      focused: false
    };
  },
  watch: {
    value: function value() {
      this.$nextTick(this.adjustSize);
    }
  },
  mounted: function mounted() {
    this.format();
    this.$nextTick(this.adjustSize);
  },
  computed: {
    showClear: function showClear() {
      return this.clearable && this.focused && this.value !== '' && this.isDef(this.value) && !this.readonly;
    },
    listeners: function listeners() {
      return _extends({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      });
    }
  },
  methods: {
    blur: function blur() {
      this.$refs.input && this.$refs.input.blur();
    },
    // native maxlength not work when type = number
    format: function format(target) {
      if (target === void 0) {
        target = this.$refs.input;
      }

      var _target = target,
          value = _target.value;
      var maxlength = this.$attrs.maxlength;

      if (this.isDef(maxlength) && value.length > maxlength) {
        value = value.slice(0, maxlength);
        target.value = value;
      }

      return value;
    },
    onInput: function onInput(event) {
      this.$emit('input', this.format(event.target));
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.$emit('focus', event); // hack for safari

      if (this.readonly) {
        this.blur();
      }
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
    },
    onClickIcon: function onClickIcon() {
      this.$emit('click-icon');
      this.onIconClick && this.onIconClick();
    },
    onKeypress: function onKeypress(event) {
      if (this.type === 'number') {
        var keyCode = event.keyCode;
        var allowPoint = String(this.value).indexOf('.') === -1;
        var isValidKey = keyCode >= 48 && keyCode <= 57 || keyCode === 46 && allowPoint || keyCode === 45;

        if (!isValidKey) {
          event.preventDefault();
        }
      }

      if (this.type === 'search' && event.keyCode === 13) {
        this.blur();
      }

      this.$emit('keypress', event);
    },
    adjustSize: function adjustSize() {
      var input = this.$refs.input;

      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';
      var height = input.scrollHeight;

      if (Object(utils["d" /* isObj */])(this.autosize)) {
        var _this$autosize = this.autosize,
            maxHeight = _this$autosize.maxHeight,
            minHeight = _this$autosize.minHeight;

        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }

        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = height + 'px';
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/swipe/index.js



/* harmony default export */ var swipe = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('div', {
      class: _vm.b('track'),
      style: _vm.trackStyle,
      on: {
        "touchstart": _vm.onTouchStart,
        "touchmove": _vm.onTouchMove,
        "touchend": _vm.onTouchEnd,
        "touchcancel": _vm.onTouchEnd,
        "transitionend": function transitionend($event) {
          _vm.$emit('change', _vm.activeIndicator);
        }
      }
    }, [_vm._t("default")], 2), _vm.showIndicators && _vm.count > 1 ? _c('div', {
      class: _vm.b('indicators', {
        vertical: _vm.vertical
      })
    }, _vm._l(_vm.count, function (index) {
      return _c('i', {
        class: _vm.b('indicator', {
          active: index - 1 === _vm.activeIndicator
        })
      });
    })) : _vm._e()]);
  },
  name: 'swipe',
  mixins: [touch],
  props: {
    autoplay: Number,
    vertical: Boolean,
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    },
    touchable: {
      type: Boolean,
      default: true
    },
    initialSwipe: {
      type: Number,
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  data: function data() {
    return {
      computedWidth: 0,
      computedHeight: 0,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swipes: [],
      swiping: false
    };
  },
  mounted: function mounted() {
    this.initialize();

    if (!this.$isServer) {
      on(window, 'resize', this.onResize, true);
    }
  },
  destroyed: function destroyed() {
    this.clear();

    if (!this.$isServer) {
      off(window, 'resize', this.onResize, true);
    }
  },
  watch: {
    swipes: function swipes() {
      this.initialize();
    },
    initialSwipe: function initialSwipe() {
      this.initialize();
    },
    autoplay: function autoplay(_autoplay) {
      if (!_autoplay) {
        this.clear();
      } else {
        this.autoPlay();
      }
    }
  },
  computed: {
    count: function count() {
      return this.swipes.length;
    },
    delta: function delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    size: function size() {
      return this[this.vertical ? 'computedHeight' : 'computedWidth'];
    },
    trackSize: function trackSize() {
      return this.count * this.size;
    },
    activeIndicator: function activeIndicator() {
      return (this.active + this.count) % this.count;
    },
    trackStyle: function trackStyle() {
      var _ref;

      return _ref = {}, _ref[this.vertical ? 'height' : 'width'] = this.trackSize + "px", _ref.transitionDuration = (this.swiping ? 0 : this.duration) + "ms", _ref.transform = "translate" + (this.vertical ? 'Y' : 'X') + "(" + this.offset + "px)", _ref;
    }
  },
  methods: {
    // initialize swipe position
    initialize: function initialize(active) {
      if (active === void 0) {
        active = this.initialSwipe;
      }

      clearTimeout(this.timer);

      if (this.$el) {
        var rect = this.$el.getBoundingClientRect();
        this.computedWidth = this.width || rect.width;
        this.computedHeight = this.height || rect.height;
      }

      this.swiping = true;
      this.active = active;
      this.offset = this.count > 1 ? -this.size * this.active : 0;
      this.swipes.forEach(function (swipe) {
        swipe.offset = 0;
      });
      this.autoPlay();
    },
    onResize: function onResize() {
      this.initialize(this.activeIndicator);
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.touchable) return;
      this.clear();
      this.swiping = true;
      this.touchStart(event);
      this.correctPosition();
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.touchable) return;
      this.touchMove(event);

      if (this.vertical && this.direction === 'vertical' || this.direction === 'horizontal') {
        event.preventDefault();
        event.stopPropagation();
        this.move(0, Math.min(Math.max(this.delta, -this.size), this.size));
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.touchable) return;

      if (this.delta) {
        var offset = this.vertical ? this.offsetY : this.offsetX;
        this.move(offset > 50 ? this.delta > 0 ? -1 : 1 : 0);
        this.swiping = false;
      }

      this.autoPlay();
    },
    move: function move(_move, offset) {
      if (_move === void 0) {
        _move = 0;
      }

      if (offset === void 0) {
        offset = 0;
      }

      var delta = this.delta,
          active = this.active,
          count = this.count,
          swipes = this.swipes,
          trackSize = this.trackSize;
      var atFirst = active === 0;
      var atLast = active === count - 1;
      var outOfBounds = !this.loop && (atFirst && (offset > 0 || _move < 0) || atLast && (offset < 0 || _move > 0));

      if (outOfBounds || count <= 1) {
        return;
      }

      swipes[0].offset = atLast && (delta < 0 || _move > 0) ? trackSize : 0;
      swipes[count - 1].offset = atFirst && (delta > 0 || _move < 0) ? -trackSize : 0;

      if (_move && active + _move >= -1 && active + _move <= count) {
        this.active += _move;
      }

      this.offset = offset - this.active * this.size;
    },
    swipeTo: function swipeTo(index) {
      var _this = this;

      this.swiping = true;
      this.correctPosition();
      setTimeout(function () {
        _this.swiping = false;

        _this.move(index % _this.count - _this.active);
      }, 30);
    },
    correctPosition: function correctPosition() {
      if (this.active <= -1) {
        this.move(this.count);
      }

      if (this.active >= this.count) {
        this.move(-this.count);
      }
    },
    clear: function clear() {
      clearTimeout(this.timer);
    },
    autoPlay: function autoPlay() {
      var _this2 = this;

      var autoplay = this.autoplay;

      if (autoplay && this.count > 1) {
        this.clear();
        this.timer = setTimeout(function () {
          _this2.swiping = true;

          _this2.resetTouchStatus();

          _this2.correctPosition();

          setTimeout(function () {
            _this2.swiping = false;

            _this2.move(1);

            _this2.autoPlay();
          }, 30);
        }, autoplay);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/swipe-item/index.js

/* harmony default export */ var swipe_item = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b(),
      style: _vm.style
    }, [_vm._t("default")], 2);
  },
  name: 'swipe-item',
  data: function data() {
    return {
      offset: 0
    };
  },
  computed: {
    style: function style() {
      var _this$$parent = this.$parent,
          vertical = _this$$parent.vertical,
          computedWidth = _this$$parent.computedWidth,
          computedHeight = _this$$parent.computedHeight;
      return {
        width: computedWidth + 'px',
        height: vertical ? computedHeight + 'px' : '100%',
        transform: "translate" + (vertical ? 'Y' : 'X') + "(" + this.offset + "px)"
      };
    }
  },
  beforeCreate: function beforeCreate() {
    this.$parent.swipes.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  }
}));
// CONCATENATED MODULE: ./es/image-preview/ImagePreview.js




/* harmony default export */ var ImagePreview = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.value ? _c('div', {
      class: _vm.b(),
      on: {
        "touchstart": _vm.onTouchStart,
        "touchend": _vm.onTouchEnd,
        "touchcancel": _vm.onTouchEnd
      }
    }, [_vm.showIndex ? _c('div', {
      class: _vm.b('index')
    }, [_vm._v(_vm._s(_vm.active + 1) + "/" + _vm._s(_vm.count))]) : _vm._e(), _c('swipe', {
      ref: "swipe",
      attrs: {
        "initial-swipe": _vm.startPosition,
        "show-indicators": false
      },
      on: {
        "change": _vm.onChange
      }
    }, _vm._l(_vm.images, function (item, index) {
      return _c('swipe-item', {
        key: index
      }, [_c('img', {
        class: _vm.b('image'),
        attrs: {
          "src": item
        }
      })]);
    }))], 1) : _vm._e();
  },
  name: 'image-preview',
  mixins: [popup],
  components: {
    Swipe: swipe,
    SwipeItem: swipe_item
  },
  props: {
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    startPosition: {
      type: Number,
      default: 0
    },
    overlay: {
      type: Boolean,
      default: true
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    overlayClass: {
      type: String,
      default: 'van-image-preview__overlay'
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      active: this.startPosition
    };
  },
  computed: {
    count: function count() {
      return this.images.length;
    }
  },
  watch: {
    startPosition: function startPosition(active) {
      this.active = active;
    }
  },
  methods: {
    onTouchStart: function onTouchStart() {
      this.touchStartTime = new Date();
    },
    onTouchEnd: function onTouchEnd(event) {
      event.preventDefault();
      var deltaTime = new Date() - this.touchStartTime;
      var _this$$refs$swipe = this.$refs.swipe,
          offsetX = _this$$refs$swipe.offsetX,
          offsetY = _this$$refs$swipe.offsetY; // prevent long tap to close component

      if (deltaTime < 500 && offsetX < 10 && offsetY < 10) {
        this.$emit('input', false);
      }
    },
    onChange: function onChange(active) {
      this.active = active;
    }
  }
}));
// CONCATENATED MODULE: ./es/image-preview/index.js


var image_preview_instance;

var image_preview_initInstance = function initInstance() {
  image_preview_instance = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(ImagePreview))({
    el: document.createElement('div')
  });
  document.body.appendChild(image_preview_instance.$el);
};

var image_preview_ImagePreview = function ImagePreview(images, startPosition) {
  if (!image_preview_instance) {
    image_preview_initInstance();
  }

  var config = Array.isArray(images) ? {
    images: images,
    startPosition: startPosition
  } : images;
  image_preview_instance.value = true;
  image_preview_instance.images = config.images;
  image_preview_instance.showIndex = config.showIndex || true;
  image_preview_instance.startPosition = config.startPosition || 0;
  image_preview_instance.$on('input', function (show) {
    image_preview_instance.value = show;

    if (!show) {
      image_preview_instance.$off('input');
      config.onClose && config.onClose();
    }
  });
  return image_preview_instance;
};

image_preview_ImagePreview.install = function () {
  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.use(ImagePreview);
};

/* harmony default export */ var image_preview = (image_preview_ImagePreview);
// EXTERNAL MODULE: ./node_modules/vue-lazyload/vue-lazyload.js
var vue_lazyload = __webpack_require__(3);
var vue_lazyload_default = /*#__PURE__*/__webpack_require__.n(vue_lazyload);

// CONCATENATED MODULE: ./es/lazyload/index.js

/* harmony default export */ var lazyload = (vue_lazyload_default.a);
// CONCATENATED MODULE: ./es/list/index.js



/* harmony default export */ var list = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm._t("default"), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.loading,
        expression: "loading"
      }],
      class: _vm.b('loading')
    }, [_vm._t("loading", [_c('loading'), _c('span', {
      class: _vm.b('loading-text')
    }, [_vm._v(_vm._s(_vm.loadingText || _vm.$t('loadingTip')))])])], 2)], 2);
  },
  name: 'list',
  model: {
    prop: 'loading'
  },
  props: {
    loading: Boolean,
    finished: Boolean,
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 300
    },
    loadingText: String
  },
  mounted: function mounted() {
    this.scroller = utils_scroll.getScrollEventTarget(this.$el);
    this.handler(true);

    if (this.immediateCheck) {
      this.$nextTick(this.check);
    }
  },
  destroyed: function destroyed() {
    this.handler(false);
  },
  activated: function activated() {
    this.handler(true);
  },
  deactivated: function deactivated() {
    this.handler(false);
  },
  watch: {
    loading: function loading() {
      this.$nextTick(this.check);
    },
    finished: function finished() {
      this.$nextTick(this.check);
    }
  },
  methods: {
    check: function check() {
      if (this.loading || this.finished) {
        return;
      }

      var el = this.$el;
      var scroller = this.scroller;
      var scrollerHeight = utils_scroll.getVisibleHeight(scroller);
      /* istanbul ignore next */

      if (!scrollerHeight || utils_scroll.getComputedStyle(el).display === 'none' || el.offsetParent === null) {
        return;
      }

      var scrollTop = utils_scroll.getScrollTop(scroller);
      var targetBottom = scrollTop + scrollerHeight;
      var reachBottom = false;
      /* istanbul ignore next */

      if (el === scroller) {
        reachBottom = scroller.scrollHeight - targetBottom < this.offset;
      } else {
        var elBottom = utils_scroll.getElementTop(el) - utils_scroll.getElementTop(scroller) + utils_scroll.getVisibleHeight(el);
        reachBottom = elBottom - scrollerHeight < this.offset;
      }
      /* istanbul ignore else */


      if (reachBottom) {
        this.$emit('input', true);
        this.$emit('load');
      }
    },
    handler: function handler(bind) {
      /* istanbul ignore else */
      if (this.binded !== bind) {
        this.binded = bind;
        (bind ? on : off)(this.scroller, 'scroll', this.check);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/nav-bar/index.js

/* harmony default export */ var nav_bar = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "van-hairline--bottom",
      class: _vm.b({
        fixed: _vm.fixed
      }),
      style: _vm.style
    }, [_c('div', {
      class: _vm.b('left'),
      on: {
        "click": function click($event) {
          _vm.$emit('click-left');
        }
      }
    }, [_vm._t("left", [_vm.leftArrow ? _c('icon', {
      class: _vm.b('arrow'),
      attrs: {
        "name": "ion-ios-arrow-left"
      }
    }) : _vm._e(), _vm.leftText ? _c('span', {
      class: _vm.b('text'),
      domProps: {
        "textContent": _vm._s(_vm.leftText)
      }
    }) : _vm._e()])], 2), _c('div', {
      staticClass: "van-ellipsis",
      class: _vm.b('title')
    }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2), _c('div', {
      class: _vm.b('right'),
      on: {
        "click": function click($event) {
          _vm.$emit('click-right');
        }
      }
    }, [_vm._t("right", [_vm.rightText ? _c('span', {
      class: _vm.b('text'),
      domProps: {
        "textContent": _vm._s(_vm.rightText)
      }
    }) : _vm._e()])], 2)]);
  },
  name: 'nav-bar',
  props: {
    title: String,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    fixed: Boolean,
    zIndex: {
      type: Number,
      default: 1
    }
  },
  computed: {
    style: function style() {
      return {
        zIndex: this.zIndex
      };
    }
  }
}));
// CONCATENATED MODULE: ./es/notice-bar/index.js

/* harmony default export */ var notice_bar = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.showNoticeBar,
        expression: "showNoticeBar"
      }],
      class: _vm.b({
        withicon: _vm.mode
      }),
      style: _vm.barStyle,
      on: {
        "click": function click($event) {
          _vm.$emit('click');
        }
      }
    }, [_vm.leftIcon ? _c('div', {
      class: _vm.b('left-icon')
    }, [_c('img', {
      attrs: {
        "src": _vm.leftIcon
      }
    })]) : _vm._e(), _c('div', {
      ref: "wrap",
      class: _vm.b('wrap')
    }, [_c('div', {
      ref: "content",
      class: [_vm.b('content'), _vm.animationClass],
      style: _vm.contentStyle,
      on: {
        "animationend": _vm.onAnimationEnd,
        "webkitAnimationEnd": _vm.onAnimationEnd
      }
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2)]), _vm.iconName ? _c('icon', {
      class: _vm.b('right-icon'),
      attrs: {
        "name": _vm.iconName
      },
      on: {
        "click": _vm.onClickIcon
      }
    }) : _vm._e()], 1);
  },
  name: 'notice-bar',
  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    background: String,
    delay: {
      type: [String, Number],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  data: function data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ''
    };
  },
  computed: {
    iconName: function iconName() {
      return this.mode === 'closeable' ? 'close' : this.mode === 'link' ? 'arrow' : '';
    },
    barStyle: function barStyle() {
      return {
        color: this.color,
        background: this.background
      };
    },
    contentStyle: function contentStyle() {
      return {
        paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
        animationDelay: (this.firstRound ? this.delay : 0) + 's',
        animationDuration: this.duration + 's'
      };
    }
  },
  watch: {
    text: {
      handler: function handler() {
        var _this = this;

        this.$nextTick(function () {
          var _this$$refs = _this.$refs,
              wrap = _this$$refs.wrap,
              content = _this$$refs.content;

          if (!wrap || !content) {
            return;
          }

          var wrapWidth = wrap.getBoundingClientRect().width;
          var offsetWidth = content.getBoundingClientRect().width;

          if (_this.scrollable && offsetWidth > wrapWidth) {
            _this.wrapWidth = wrapWidth;
            _this.offsetWidth = offsetWidth;
            _this.duration = offsetWidth / _this.speed;
            _this.animationClass = _this.b('play');
          }
        });
      },
      immediate: true
    }
  },
  methods: {
    onClickIcon: function onClickIcon() {
      this.showNoticeBar = this.mode !== 'closeable';
    },
    onAnimationEnd: function onAnimationEnd() {
      var _this2 = this;

      this.firstRound = false;
      this.$nextTick(function () {
        _this2.duration = (_this2.offsetWidth + _this2.wrapWidth) / _this2.speed;
        _this2.animationClass = _this2.b('play--infinite');
      });
    }
  }
}));
// CONCATENATED MODULE: ./es/number-keyboard/Key.js

/* harmony default export */ var Key = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('i', {
      staticClass: "van-hairline",
      class: [_vm.b(), _vm.className],
      domProps: {
        "textContent": _vm._s(_vm.text)
      },
      on: {
        "touchstart": function touchstart($event) {
          $event.stopPropagation();
          $event.preventDefault();
          return _vm.onFocus($event);
        },
        "touchmove": _vm.onBlur,
        "touchend": _vm.onBlur,
        "touchcancel": _vm.onBlur
      }
    });
  },
  name: 'key',
  props: {
    text: [String, Number],
    type: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    className: function className() {
      var _this = this;

      var types = this.type.slice(0);
      this.active && types.push('active');
      return types.map(function (type) {
        return _this.b([type]);
      });
    }
  },
  methods: {
    onFocus: function onFocus() {
      this.active = true;
      this.$emit('press', this.text);
    },
    onBlur: function onBlur() {
      this.active = false;
    }
  }
}));
// CONCATENATED MODULE: ./es/number-keyboard/index.js


/* harmony default export */ var number_keyboard = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('transition', {
      attrs: {
        "name": _vm.transition ? 'van-slide-bottom' : ''
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.show,
        expression: "show"
      }],
      class: _vm.b([_vm.theme]),
      style: _vm.style,
      on: {
        "touchstart": function touchstart($event) {
          $event.stopPropagation();
        },
        "animationend": _vm.onAnimationEnd,
        "webkitAnimationEnd": _vm.onAnimationEnd
      }
    }, [_vm.title || _vm.showTitleClose ? _c('div', {
      staticClass: "van-hairline--top",
      class: _vm.b('title')
    }, [_c('span', {
      domProps: {
        "textContent": _vm._s(_vm.title)
      }
    }), _vm.showTitleClose ? _c('span', {
      class: _vm.b('close'),
      domProps: {
        "textContent": _vm._s(_vm.closeButtonText)
      },
      on: {
        "click": _vm.onClose
      }
    }) : _vm._e()]) : _vm._e(), _c('div', {
      class: _vm.b('body')
    }, _vm._l(_vm.keys, function (key) {
      return _c('key', {
        key: key.text,
        attrs: {
          "text": key.text,
          "type": key.type
        },
        on: {
          "press": _vm.onPressKey
        }
      });
    })), _vm.theme === 'custom' ? _c('div', {
      class: _vm.b('sidebar')
    }, [_c('key', {
      attrs: {
        "text": 'delete',
        "type": ['delete', 'big']
      },
      on: {
        "press": _vm.onPressKey
      }
    }), _c('key', {
      attrs: {
        "text": _vm.closeButtonText,
        "type": ['green', 'big']
      },
      on: {
        "press": _vm.onPressKey
      }
    })], 1) : _vm._e()])]);
  },
  name: 'number-keyboard',
  components: {
    Key: Key
  },
  props: {
    show: Boolean,
    title: String,
    closeButtonText: String,
    theme: {
      type: String,
      default: 'default'
    },
    extraKey: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 100
    },
    transition: {
      type: Boolean,
      default: true
    },
    showDeleteKey: {
      type: Boolean,
      default: true
    },
    hideOnClickOutside: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted() {
    this.handler(true);
  },
  destroyed: function destroyed() {
    this.handler(false);
  },
  activated: function activated() {
    this.handler(true);
  },
  deactivated: function deactivated() {
    this.handler(false);
  },
  watch: {
    show: function show() {
      if (!this.transition) {
        this.$emit(this.show ? 'show' : 'hide');
      }
    }
  },
  computed: {
    keys: function keys() {
      var keys = [];

      for (var i = 1; i <= 9; i++) {
        keys.push({
          text: i
        });
      }

      switch (this.theme) {
        case 'default':
          keys.push({
            text: this.extraKey,
            type: ['gray']
          }, {
            text: 0
          }, {
            text: 'delete',
            type: ['gray', 'delete']
          });
          break;

        case 'custom':
          keys.push({
            text: 0,
            type: ['middle']
          }, {
            text: this.extraKey
          });
          break;
      }

      return keys;
    },
    style: function style() {
      return {
        zIndex: this.zIndex
      };
    },
    showTitleClose: function showTitleClose() {
      return this.closeButtonText && this.theme === 'default';
    }
  },
  methods: {
    handler: function handler(action) {
      if (action !== this.handlerStatus && this.hideOnClickOutside) {
        this.handlerStatus = action;
        document.body[(action ? 'add' : 'remove') + 'EventListener']('touchstart', this.onBlur);
      }
    },
    onBlur: function onBlur() {
      this.$emit('blur');
    },
    onClose: function onClose() {
      this.$emit('close');
      this.onBlur();
    },
    onAnimationEnd: function onAnimationEnd() {
      this.$emit(this.show ? 'show' : 'hide');
    },
    onPressKey: function onPressKey(text) {
      if (text === '') {
        return;
      }

      if (text === 'delete') {
        this.$emit('delete');
      } else if (text === this.closeButtonText) {
        this.onClose();
      } else {
        this.$emit('input', text);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/pagination/index.js

/* harmony default export */ var pagination = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('ul', {
      class: _vm.b({
        simple: !_vm.isMultiMode
      })
    }, [_c('li', {
      staticClass: "van-hairline",
      class: [_vm.b('item', {
        disabled: _vm.value === 1
      }), _vm.b('prev')],
      on: {
        "click": function click($event) {
          _vm.selectPage(_vm.value - 1);
        }
      }
    }, [_vm._v("\n    " + _vm._s(_vm.prevText || _vm.$t('prev')) + "\n  ")]), _vm._l(_vm.pages, function (page) {
      return _vm.isMultiMode ? _c('li', {
        staticClass: "van-hairline",
        class: [_vm.b('item', {
          active: page.active
        }), _vm.b('page')],
        on: {
          "click": function click($event) {
            _vm.selectPage(page.number);
          }
        }
      }, [_vm._v("\n    " + _vm._s(page.text) + "\n  ")]) : _vm._e();
    }), !_vm.isMultiMode ? _c('li', {
      class: _vm.b('page-desc')
    }, [_vm._t("pageDesc", [_vm._v(_vm._s(_vm.pageDesc))])], 2) : _vm._e(), _c('li', {
      staticClass: "van-hairline",
      class: [_vm.b('item', {
        disabled: _vm.value === _vm.computedPageCount
      }), _vm.b('next')],
      on: {
        "click": function click($event) {
          _vm.selectPage(_vm.value + 1);
        }
      }
    }, [_vm._v("\n    " + _vm._s(_vm.nextText || _vm.$t('next')) + "\n  ")])], 2);
  },
  name: 'pagination',
  props: {
    value: Number,
    prevText: String,
    nextText: String,
    pageCount: Number,
    forceEllipses: Boolean,
    mode: {
      type: String,
      default: 'multi'
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    showPageSize: {
      type: Number,
      default: 5
    },
    totalItems: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isMultiMode: function isMultiMode() {
      return this.mode === 'multi';
    },
    computedPageCount: function computedPageCount() {
      var count = this.pageCount || Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(1, count);
    },
    pageDesc: function pageDesc() {
      return this.value + '/' + this.computedPageCount;
    },
    pages: function pages() {
      var pages = [];
      var pageCount = this.computedPageCount; // Default page limits

      var startPage = 1;
      var endPage = pageCount;
      var isMaxSized = this.showPageSize !== undefined && this.showPageSize < pageCount; // recompute if showPageSize

      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(this.value - Math.floor(this.showPageSize / 2), 1);
        endPage = startPage + this.showPageSize - 1; // Adjust if limit is exceeded

        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - this.showPageSize + 1;
        }
      } // Add page number links


      for (var number = startPage; number <= endPage; number++) {
        var page = this.makePage(number, number, number === this.value);
        pages.push(page);
      } // Add links to move between page sets


      if (isMaxSized && this.showPageSize > 0 && this.forceEllipses) {
        if (startPage > 1) {
          var previousPageSet = this.makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }

        if (endPage < pageCount) {
          var nextPageSet = this.makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
      }

      return pages;
    }
  },
  watch: {
    value: {
      handler: function handler(page) {
        this.selectPage(page || this.value);
      },
      immediate: true
    }
  },
  methods: {
    selectPage: function selectPage(page) {
      page = Math.max(1, page);
      page = Math.min(this.computedPageCount, page);

      if (this.value !== page) {
        this.$emit('input', page);
        this.$emit('change', page);
      }
    },
    makePage: function makePage(number, text, active) {
      return {
        number: number,
        text: text,
        active: active
      };
    }
  }
}));
// CONCATENATED MODULE: ./es/panel/index.js

/* harmony default export */ var panel = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('cell-group', {
      class: _vm.b()
    }, [_vm._t("header", [_c('cell', {
      class: _vm.b('header'),
      attrs: {
        "title": _vm.title,
        "label": _vm.desc,
        "value": _vm.status
      }
    })]), _c('div', {
      class: _vm.b('content')
    }, [_vm._t("default")], 2), _vm.$slots.footer ? _c('div', {
      staticClass: "van-hairline--top",
      class: _vm.b('footer')
    }, [_vm._t("footer")], 2) : _vm._e()], 2);
  },
  name: 'panel',
  props: {
    desc: String,
    title: String,
    status: String
  }
}));
// CONCATENATED MODULE: ./es/password-input/index.js

/* harmony default export */ var password_input = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('ul', {
      staticClass: "van-hairline--surround",
      class: _vm.b('security'),
      on: {
        "touchstart": function touchstart($event) {
          $event.stopPropagation();

          _vm.$emit('focus');
        }
      }
    }, _vm._l(_vm.points, function (visibility) {
      return _c('li', {
        staticClass: "van-hairline"
      }, [_c('i', {
        style: "visibility: " + visibility
      })]);
    })), _vm.errorInfo || _vm.info ? _c('div', {
      class: _vm.b(_vm.errorInfo ? 'error-info' : 'info'),
      domProps: {
        "textContent": _vm._s(_vm.errorInfo || _vm.info)
      }
    }) : _vm._e()]);
  },
  name: 'password-input',
  props: {
    info: String,
    errorInfo: String,
    value: {
      type: String,
      default: ''
    },
    length: {
      type: Number,
      default: 6
    }
  },
  computed: {
    points: function points() {
      var arr = [];

      for (var i = 0; i < this.length; i++) {
        arr[i] = this.value[i] ? 'visible' : 'hidden';
      }

      return arr;
    }
  }
}));
// CONCATENATED MODULE: ./es/popup/index.js


/* harmony default export */ var es_popup = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('transition', {
      attrs: {
        "name": _vm.currentTransition
      }
    }, [_vm.shouldRender ? _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.value,
        expression: "value"
      }],
      class: _vm.b((_obj = {}, _obj[_vm.position] = _vm.position, _obj))
    }, [_vm._t("default")], 2) : _vm._e()]);

    var _obj;
  },
  name: 'popup',
  mixins: [popup],
  props: {
    transition: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  },
  computed: {
    currentTransition: function currentTransition() {
      return this.transition || (this.position === '' ? 'van-fade' : "popup-slide-" + this.position);
    }
  }
}));
// CONCATENATED MODULE: ./es/progress/index.js

/* harmony default export */ var es_progress = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('span', {
      class: _vm.b('portion', {
        'with-pivot': _vm.showPivot && _vm.text
      }),
      style: _vm.portionStyle
    }, [_vm.showPivot && _vm.text ? _c('span', {
      ref: "pivot",
      class: _vm.b('pivot'),
      style: _vm.pivotStyle
    }, [_vm._v(_vm._s(_vm.text))]) : _vm._e()])]);
  },
  name: 'progress',
  props: {
    inactive: Boolean,
    pivotText: String,
    pivotColor: String,
    percentage: {
      type: Number,
      required: true,
      validator: function validator(value) {
        return value >= 0 && value <= 100;
      }
    },
    showPivot: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#38f'
    },
    textColor: {
      type: String,
      default: '#fff'
    }
  },
  data: function data() {
    return {
      pivotWidth: 0,
      progressWidth: 0
    };
  },
  computed: {
    text: function text() {
      return this.isDef(this.pivotText) ? this.pivotText : this.percentage + '%';
    },
    currentColor: function currentColor() {
      return this.inactive ? '#cacaca' : this.color;
    },
    pivotStyle: function pivotStyle() {
      return {
        color: this.textColor,
        background: this.pivotColor || this.currentColor
      };
    },
    portionStyle: function portionStyle() {
      return {
        width: (this.progressWidth - this.pivotWidth) * this.percentage / 100 + 'px',
        background: this.currentColor
      };
    }
  },
  mounted: function mounted() {
    this.getWidth();
  },
  watch: {
    showPivot: function showPivot() {
      this.getWidth();
    },
    pivotText: function pivotText() {
      this.getWidth();
    }
  },
  methods: {
    getWidth: function getWidth() {
      this.progressWidth = this.$el.offsetWidth;
      this.pivotWidth = this.$refs.pivot ? this.$refs.pivot.offsetWidth : 0;
    }
  }
}));
// CONCATENATED MODULE: ./es/pull-refresh/index.js



/* harmony default export */ var pull_refresh = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('div', {
      class: _vm.b('track'),
      style: _vm.style,
      on: {
        "touchstart": _vm.onTouchStart,
        "touchmove": _vm.onTouchMove,
        "touchend": _vm.onTouchEnd,
        "touchcancel": _vm.onTouchEnd
      }
    }, [_c('div', {
      class: _vm.b('head')
    }, [_vm.status === 'normal' ? _vm._t("normal") : _vm._e(), _vm.status === 'pulling' ? _vm._t("pulling", [_c('span', {
      class: _vm.b('text')
    }, [_vm._v(_vm._s(_vm.pullingText || _vm.$t('pulling')))])]) : _vm._e(), _vm.status === 'loosing' ? _vm._t("loosing", [_c('span', {
      class: _vm.b('text')
    }, [_vm._v(_vm._s(_vm.loosingText || _vm.$t('loosing')))])]) : _vm._e(), _vm.status === 'loading' ? _vm._t("loading", [_c('div', {
      class: _vm.b('loading')
    }, [_c('loading'), _c('span', [_vm._v(_vm._s(_vm.loadingText || _vm.$t('loadingTip')))])], 1)]) : _vm._e()], 2), _vm._t("default")], 2)]);
  },
  name: 'pull-refresh',
  mixins: [touch],
  props: {
    disabled: Boolean,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    value: {
      type: Boolean,
      required: true
    },
    animationDuration: {
      type: Number,
      default: 300
    },
    headHeight: {
      type: Number,
      default: 50
    }
  },
  data: function data() {
    return {
      status: 'normal',
      height: 0,
      duration: 0
    };
  },
  computed: {
    style: function style() {
      return {
        transition: this.duration + "ms",
        transform: "translate3d(0," + this.height + "px, 0)"
      };
    },
    untouchable: function untouchable() {
      return this.status === 'loading' || this.disabled;
    }
  },
  mounted: function mounted() {
    this.scrollEl = utils_scroll.getScrollEventTarget(this.$el);
  },
  watch: {
    value: function value(val) {
      this.duration = this.animationDuration;
      this.getStatus(val ? this.headHeight : 0, val);
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (this.untouchable) {
        return;
      }

      if (this.getCeiling()) {
        this.duration = 0;
        this.touchStart(event);
      }
    },
    onTouchMove: function onTouchMove(event) {
      if (this.untouchable) {
        return;
      }

      this.touchMove(event);

      if (!this.ceiling && this.getCeiling()) {
        this.duration = 0;
        this.startY = event.touches[0].clientY;
        this.deltaY = 0;
      }

      if (this.ceiling && this.deltaY >= 0) {
        if (this.direction === 'vertical') {
          this.getStatus(this.ease(this.deltaY));
          event.cancelable && event.preventDefault();
        }
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (this.untouchable) {
        return;
      }

      if (this.ceiling && this.deltaY) {
        this.duration = this.animationDuration;

        if (this.status === 'loosing') {
          this.getStatus(this.headHeight, true);
          this.$emit('input', true);
          this.$emit('refresh');
        } else {
          this.getStatus(0);
        }
      }
    },
    getCeiling: function getCeiling() {
      this.ceiling = utils_scroll.getScrollTop(this.scrollEl) === 0;
      return this.ceiling;
    },
    ease: function ease(height) {
      var headHeight = this.headHeight;
      return height < headHeight ? height : height < headHeight * 2 ? Math.round(headHeight + (height - headHeight) / 2) : Math.round(headHeight * 1.5 + (height - headHeight * 2) / 4);
    },
    getStatus: function getStatus(height, isLoading) {
      this.height = height;
      var status = isLoading ? 'loading' : height === 0 ? 'normal' : height < this.headHeight ? 'pulling' : 'loosing';

      if (status !== this.status) {
        this.status = status;
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/radio/index.js


/* harmony default export */ var es_radio = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b({
        disabled: _vm.isDisabled
      }),
      on: {
        "click": function click($event) {
          _vm.$emit('click');
        }
      }
    }, [_c('span', {
      class: _vm.b('input')
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.currentValue,
        expression: "currentValue"
      }],
      class: _vm.b('control'),
      attrs: {
        "type": "radio",
        "disabled": _vm.isDisabled
      },
      domProps: {
        "value": _vm.name,
        "checked": _vm._q(_vm.currentValue, _vm.name)
      },
      on: {
        "change": function change($event) {
          _vm.currentValue = _vm.name;
        }
      }
    }), _c('icon', {
      attrs: {
        "name": _vm.currentValue === _vm.name ? 'ion-ios-checkmark' : 'ion-ios-circle-outline'
      }
    })], 1), _vm.$slots.default ? _c('span', {
      class: _vm.b('label', _vm.labelPosition),
      on: {
        "click": _vm.onClickLabel
      }
    }, [_vm._t("default")], 2) : _vm._e()]);
  },
  name: 'radio',
  mixins: [find_parent],
  props: {
    name: null,
    value: null,
    disabled: Boolean,
    labelDisabled: Boolean,
    labelPosition: Boolean
  },
  computed: {
    currentValue: {
      get: function get() {
        return this.parent ? this.parent.value : this.value;
      },
      set: function set(val) {
        (this.parent || this).$emit('input', val);
      }
    },
    isDisabled: function isDisabled() {
      return this.parent ? this.parent.disabled || this.disabled : this.disabled;
    }
  },
  created: function created() {
    this.findParent('van-radio-group');
  },
  methods: {
    onClickLabel: function onClickLabel() {
      if (!this.isDisabled && !this.labelDisabled) {
        this.currentValue = this.name;
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/radio-group/index.js

/* harmony default export */ var radio_group = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm._t("default")], 2);
  },
  name: 'radio-group',
  props: {
    value: null,
    disabled: Boolean
  },
  watch: {
    value: function value(_value) {
      this.$emit('change', _value);
    }
  }
}));
// CONCATENATED MODULE: ./es/rate/index.js

/* harmony default export */ var rate = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, _vm._l(_vm.list, function (isFull, index) {
      return _c('svg', {
        class: _vm.b('item'),
        style: _vm.style,
        attrs: {
          "fill": _vm.disabled ? _vm.disabledColor : isFull ? _vm.color : _vm.voidColor,
          "viewBox": "0 0 32 32"
        },
        on: {
          "click": function click($event) {
            _vm.onSelect(index);
          }
        }
      }, [_c('path', {
        attrs: {
          "d": isFull ? 'M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z' : 'M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z'
        }
      })]);
    }));
  },
  name: 'rate',
  props: {
    readonly: Boolean,
    disabled: Boolean,
    size: {
      type: Number,
      default: 20
    },
    color: {
      type: String,
      default: '#ffd21e'
    },
    voidColor: {
      type: String,
      default: '#c7c7c7'
    },
    disabledColor: {
      type: String,
      default: '#bdbdbd'
    },
    count: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    style: function style() {
      return {
        width: this.size + 'px'
      };
    },
    list: function list() {
      var _this = this;

      return Array.apply(null, {
        length: this.count
      }).map(function (value, index) {
        return index < _this.value;
      });
    }
  },
  methods: {
    onSelect: function onSelect(index) {
      if (!this.disabled && !this.readonly) {
        this.$emit('input', index + 1);
        this.$emit('change', index + 1);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/row/index.js

/* harmony default export */ var row = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(_vm.tag, {
      tag: "component",
      class: _vm.b((_obj = {
        flex: _vm.flex
      }, _obj["align-" + _vm.align] = _vm.flex && _vm.align, _obj["justify-" + _vm.justify] = _vm.flex && _vm.justify, _obj)),
      style: _vm.style
    }, [_vm._t("default")], 2);

    var _obj;
  },
  name: 'row',
  props: {
    type: String,
    align: String,
    justify: String,
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    flex: function flex() {
      return this.type === 'flex';
    },
    style: function style() {
      var margin = "-" + Number(this.gutter) / 2 + "px";
      return this.gutter ? {
        marginLeft: margin,
        marginRight: margin
      } : {};
    }
  }
}));
// CONCATENATED MODULE: ./es/search/index.js



/* harmony default export */ var search = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b({
        'show-action': _vm.showAction
      }),
      style: {
        background: _vm.background
      }
    }, [_c('field', _vm._g(_vm._b({
      attrs: {
        "clearable": "",
        "type": "search",
        "value": _vm.value,
        "border": false,
        "left-icon": "search"
      }
    }, 'field', _vm.$attrs, false), _vm.listeners)), _vm.showAction ? _c('div', {
      class: _vm.b('action')
    }, [_vm._t("action", [_c('div', {
      on: {
        "click": _vm.onBack
      }
    }, [_vm._v(_vm._s(_vm.$t('cancel')))])])], 2) : _vm._e()], 1);
  },
  name: 'search',
  inheritAttrs: false,
  components: {
    Field: field
  },
  props: {
    value: String,
    showAction: Boolean,
    background: {
      type: String,
      default: '#f2f2f2'
    }
  },
  computed: {
    listeners: function listeners() {
      return _extends({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress
      });
    }
  },
  methods: {
    onInput: function onInput(value) {
      this.$emit('input', value);
    },
    onKeypress: function onKeypress(event) {
      // press enter
      if (event.keyCode === 13) {
        event.preventDefault();
        this.$emit('search', this.value);
      }

      this.$emit('keypress', event);
    },
    onBack: function onBack() {
      this.$emit('input', '');
      this.$emit('cancel');
    }
  }
}));
// CONCATENATED MODULE: ./es/slider/index.js


/* harmony default export */ var slider = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b({
        disabled: _vm.disabled
      }),
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          return _vm.onClick($event);
        }
      }
    }, [_c('div', {
      class: _vm.b('bar'),
      style: _vm.barStyle
    }, [_c('span', {
      class: _vm.b('button'),
      on: {
        "touchstart": _vm.onTouchStart,
        "touchmove": function touchmove($event) {
          $event.preventDefault();
          $event.stopPropagation();
          return _vm.onTouchMove($event);
        },
        "touchend": _vm.onTouchEnd,
        "touchcancel": _vm.onTouchEnd
      }
    })])]);
  },
  name: 'slider',
  mixins: [touch],
  props: {
    disabled: Boolean,
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    barHeight: {
      type: String,
      default: '2px'
    }
  },
  computed: {
    barStyle: function barStyle() {
      return {
        width: this.format(this.value) + '%',
        height: this.barHeight
      };
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (this.disabled) return;
      this.touchStart(event);
      this.startValue = this.format(this.value);
    },
    onTouchMove: function onTouchMove(event) {
      if (this.disabled) return;
      this.touchMove(event);
      var rect = this.$el.getBoundingClientRect();
      var diff = this.deltaX / rect.width * 100;
      this.updateValue(this.startValue + diff);
    },
    onTouchEnd: function onTouchEnd() {
      if (this.disabled) return;
      this.updateValue(this.value, true);
    },
    onClick: function onClick(event) {
      if (this.disabled) return;
      var rect = this.$el.getBoundingClientRect();
      var value = (event.clientX - rect.left) / rect.width * 100;
      this.updateValue(value, true);
    },
    updateValue: function updateValue(value, end) {
      value = this.format(value);
      this.$emit('input', value);

      if (end) {
        this.$emit('change', value);
      }
    },
    format: function format(value) {
      return Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step;
    }
  }
}));
// CONCATENATED MODULE: ./es/step/index.js

/* harmony default export */ var step = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "van-hairline",
      class: _vm.b([_vm.$parent.direction, (_obj = {}, _obj[_vm.status] = _vm.status, _obj)])
    }, [_c('div', {
      class: _vm.b('title'),
      style: _vm.titleStyle
    }, [_vm._t("default")], 2), _c('div', {
      class: _vm.b('circle-container')
    }, [_vm.status !== 'process' ? _c('i', {
      class: _vm.b('circle')
    }) : _c('i', {
      staticClass: "step-process ion-ios-checkmark",
      style: {
        color: _vm.$parent.activeColor
      }
    })]), _c('div', {
      class: _vm.b('line')
    })]);

    var _obj;
  },
  name: 'step',
  beforeCreate: function beforeCreate() {
    this.$parent.steps.push(this);
  },
  computed: {
    status: function status() {
      var index = this.$parent.steps.indexOf(this);
      var active = this.$parent.active;

      if (index < active) {
        return 'finish';
      } else if (index === active) {
        return 'process';
      }
    },
    titleStyle: function titleStyle() {
      return this.status === 'process' ? {
        color: this.$parent.activeColor
      } : {};
    }
  }
}));
// CONCATENATED MODULE: ./es/stepper/index.js

/* harmony default export */ var stepper = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('button', {
      class: _vm.b('minus', {
        disabled: _vm.minusDisabled
      }),
      on: {
        "click": function click($event) {
          _vm.onChange('minus');
        }
      }
    }), _c('input', {
      class: _vm.b('input'),
      attrs: {
        "type": "number",
        "disabled": _vm.disabled || _vm.disableInput
      },
      domProps: {
        "value": _vm.currentValue
      },
      on: {
        "input": _vm.onInput,
        "blur": _vm.onBlur
      }
    }), _c('button', {
      class: _vm.b('plus', {
        disabled: _vm.plusDisabled
      }),
      on: {
        "click": function click($event) {
          _vm.onChange('plus');
        }
      }
    })]);
  },
  name: 'stepper',
  props: {
    value: null,
    integer: Boolean,
    disabled: Boolean,
    disableInput: Boolean,
    min: {
      type: [String, Number],
      default: 1
    },
    max: {
      type: [String, Number],
      default: Infinity
    },
    step: {
      type: [String, Number],
      default: 1
    },
    defaultValue: {
      type: [String, Number],
      default: 1
    }
  },
  data: function data() {
    var value = this.range(this.isDef(this.value) ? this.value : this.defaultValue);

    if (value !== +this.value) {
      this.$emit('input', value);
    }

    return {
      currentValue: value
    };
  },
  computed: {
    minusDisabled: function minusDisabled() {
      return this.disabled || this.currentValue <= this.min;
    },
    plusDisabled: function plusDisabled() {
      return this.disabled || this.currentValue >= this.max;
    }
  },
  watch: {
    value: function value(val) {
      if (val !== this.currentValue) {
        this.currentValue = this.format(val);
      }
    },
    currentValue: function currentValue(val) {
      this.$emit('input', val);
      this.$emit('change', val);
    }
  },
  methods: {
    // filter illegal characters
    format: function format(value) {
      value = String(value).replace(/[^0-9\.-]/g, '');
      return value === '' ? 0 : this.integer ? Math.floor(value) : +value;
    },
    // limit value range
    range: function range(value) {
      return Math.max(Math.min(this.max, this.format(value)), this.min);
    },
    onInput: function onInput(event) {
      var value = event.target.value;
      var formatted = this.format(value);

      if (+value !== formatted) {
        event.target.value = formatted;
      }

      this.currentValue = formatted;
    },
    onChange: function onChange(type) {
      if (this[type + "Disabled"]) {
        this.$emit('overlimit', type);
        return;
      }

      var diff = type === 'minus' ? -this.step : +this.step;
      var value = Math.round((this.currentValue + diff) * 100) / 100;
      this.currentValue = this.range(value);
      this.$emit(type);
    },
    onBlur: function onBlur(event) {
      this.currentValue = this.range(this.currentValue);
      this.$emit('blur', event);
    }
  }
}));
// CONCATENATED MODULE: ./es/steps/index.js

/* harmony default export */ var steps = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b([_vm.direction])
    }, [_vm.title || _vm.description ? _c('div', {
      class: _vm.b('status')
    }, [_vm.icon || _vm.$slots.icon ? _c('div', {
      class: _vm.b('icon')
    }, [_vm._t("icon", [_c('icon', {
      class: _vm.iconClass,
      attrs: {
        "name": _vm.icon
      }
    })])], 2) : _vm._e(), _c('div', {
      class: _vm.b('message')
    }, [_c('div', {
      class: _vm.b('title'),
      domProps: {
        "textContent": _vm._s(_vm.title)
      }
    }), _c('div', {
      staticClass: "van-ellipsis",
      class: _vm.b('desc'),
      domProps: {
        "textContent": _vm._s(_vm.description)
      }
    })]), _vm._t("message-extra")], 2) : _vm._e(), _c('div', {
      class: _vm.b('items', {
        alone: !_vm.title && !_vm.description
      })
    }, [_vm._t("default")], 2)]);
  },
  name: 'steps',
  props: {
    icon: String,
    title: String,
    active: Number,
    iconClass: String,
    description: String,
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: '#06bf04'
    }
  },
  data: function data() {
    return {
      steps: []
    };
  }
}));
// CONCATENATED MODULE: ./es/submit-bar/index.js


/* harmony default export */ var submit_bar = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm._t("top"), _vm.tip || _vm.$slots.tip ? _c('div', {
      class: _vm.b('tip')
    }, [_vm._v("\n    " + _vm._s(_vm.tip)), _vm._t("tip")], 2) : _vm._e(), _c('div', {
      class: _vm.b('bar')
    }, [_vm._t("default"), _c('div', {
      class: _vm.b('text')
    }, [_vm.hasPrice ? [_c('span', [_vm._v(_vm._s(_vm.label || _vm.$t('label')))]), _c('span', {
      class: _vm.b('price')
    }, [_vm._v(_vm._s(_vm.currency) + " " + _vm._s(_vm._f("format")(_vm.price)))])] : _vm._e()], 2), _c('van-button', {
      attrs: {
        "type": _vm.buttonType,
        "disabled": _vm.disabled,
        "loading": _vm.loading
      },
      on: {
        "click": function click($event) {
          _vm.$emit('submit');
        }
      }
    }, [_vm._v("\n      " + _vm._s(_vm.loading ? '' : _vm.buttonText) + "\n    ")])], 2)], 2);
  },
  name: 'submit-bar',
  components: {
    VanButton: es_button
  },
  props: {
    tip: String,
    type: Number,
    price: Number,
    label: String,
    loading: Boolean,
    disabled: Boolean,
    buttonText: String,
    currency: {
      type: String,
      default: '¥'
    },
    buttonType: {
      type: String,
      default: 'danger'
    }
  },
  computed: {
    hasPrice: function hasPrice() {
      return typeof this.price === 'number';
    }
  },
  filters: {
    format: function format(price) {
      return (price / 100).toFixed(2);
    }
  }
}));
// CONCATENATED MODULE: ./es/utils/clickoutside.js
/**
 * v-clickoutside
 *
 * ```vue
 * <div v-clickoutside="onClose">
 * ```
 */

var clickoutside_context = '@@clickoutsideContext';
/* harmony default export */ var clickoutside = ({
  bind: function bind(el, binding) {
    var handler = function handler(event) {
      if (!el.contains(event.target)) {
        el[clickoutside_context].callback();
      }
    };

    el[clickoutside_context] = {
      handler: handler,
      callback: binding.value,
      arg: binding.arg || 'click'
    };
    on(document, el[clickoutside_context].arg, handler);
  },
  update: function update(el, binding) {
    el[clickoutside_context].callback = binding.value;
  },
  unbind: function unbind(el) {
    off(document, el[clickoutside_context].arg, el[clickoutside_context].handler);
  },
  install: function install(Vue) {
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    });
  }
});
// CONCATENATED MODULE: ./es/swipe-cell/index.js



var THRESHOLD = 0.15;
/* harmony default export */ var swipe_cell = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      directives: [{
        name: "clickoutside",
        rawName: "v-clickoutside:touchstart",
        value: _vm.onClick,
        expression: "onClick",
        arg: "touchstart"
      }],
      class: _vm.b(),
      on: {
        "click": function click($event) {
          _vm.onClick('cell');
        },
        "touchstart": _vm.startDrag,
        "touchmove": _vm.onDrag,
        "touchend": _vm.endDrag,
        "touchcancel": _vm.endDrag
      }
    }, [_c('div', {
      class: _vm.b('wrapper'),
      style: _vm.wrapperStyle,
      on: {
        "transitionend": function transitionend($event) {
          _vm.swipe = false;
        }
      }
    }, [_vm.leftWidth ? _c('div', {
      class: _vm.b('left'),
      on: {
        "click": function click($event) {
          $event.stopPropagation();

          _vm.onClick('left');
        }
      }
    }, [_vm._t("left")], 2) : _vm._e(), _vm._t("default"), _vm.rightWidth ? _c('div', {
      class: _vm.b('right'),
      on: {
        "click": function click($event) {
          $event.stopPropagation();

          _vm.onClick('right');
        }
      }
    }, [_vm._t("right")], 2) : _vm._e()], 2)]);
  },
  name: 'swipe-cell',
  mixins: [touch],
  props: {
    onClose: Function,
    disabled: Boolean,
    leftWidth: {
      type: Number,
      default: 0
    },
    rightWidth: {
      type: Number,
      default: 0
    }
  },
  directives: {
    Clickoutside: clickoutside
  },
  data: function data() {
    return {
      offset: 0,
      draging: false
    };
  },
  computed: {
    wrapperStyle: function wrapperStyle() {
      return {
        transform: "translate3d(" + this.offset + "px, 0, 0)",
        transition: this.draging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)'
      };
    }
  },
  methods: {
    open: function open(position) {
      var offset = position === 'left' ? this.leftWidth : -this.rightWidth;
      this.swipeMove(offset);
      this.resetSwipeStatus();
    },
    close: function close() {
      this.offset = 0;
    },
    resetSwipeStatus: function resetSwipeStatus() {
      this.swiping = false;
      this.opened = true;
    },
    swipeMove: function swipeMove(offset) {
      if (offset === void 0) {
        offset = 0;
      }

      this.offset = offset;
      offset && (this.swiping = true);
      !offset && (this.opened = false);
    },
    swipeLeaveTransition: function swipeLeaveTransition(direction) {
      var offset = this.offset,
          leftWidth = this.leftWidth,
          rightWidth = this.rightWidth;
      var threshold = this.opened ? 1 - THRESHOLD : THRESHOLD; // right

      if (direction > 0 && -offset > rightWidth * threshold && rightWidth > 0) {
        this.open('right'); // left
      } else if (direction < 0 && offset > leftWidth * threshold && leftWidth > 0) {
        this.open('left');
      } else {
        this.swipeMove();
      }
    },
    startDrag: function startDrag(event) {
      if (this.disabled) {
        return;
      }

      this.draging = true;
      this.touchStart(event);

      if (this.opened) {
        this.startX -= this.offset;
      }
    },
    onDrag: function onDrag(event) {
      if (this.disabled) {
        return;
      }

      this.touchMove(event);
      var deltaX = this.deltaX;

      if (deltaX < 0 && (-deltaX > this.rightWidth || !this.rightWidth) || deltaX > 0 && (deltaX > this.leftWidth || deltaX > 0 && !this.leftWidth)) {
        return;
      }

      if (this.direction === 'horizontal') {
        event.preventDefault();
        this.swipeMove(deltaX);
      }

      ;
    },
    endDrag: function endDrag() {
      if (this.disabled) {
        return;
      }

      this.draging = false;

      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? -1 : 1);
      }

      ;
    },
    onClick: function onClick(position) {
      if (position === void 0) {
        position = 'outside';
      }

      this.$emit('click', position);

      if (!this.offset) {
        return;
      }

      if (this.onClose) {
        this.onClose(position, this);
      } else {
        this.swipeMove(0);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/switch/index.js

/* harmony default export */ var es_switch = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b({
        on: _vm.value,
        disabled: _vm.disabled
      }),
      style: _vm.style,
      on: {
        "click": _vm.onClick
      }
    }, [_c('div', {
      class: _vm.b('node')
    }, [_vm.loading ? _c('loading', {
      class: _vm.b('loading')
    }) : _vm._e()], 1)]);
  },
  name: 'switch',
  props: {
    value: Boolean,
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: '30px'
    }
  },
  computed: {
    style: function style() {
      return {
        fontSize: this.size
      };
    }
  },
  methods: {
    onClick: function onClick() {
      if (!this.disabled && !this.loading) {
        this.$emit('input', !this.value);
        this.$emit('change', !this.value);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/switch-cell/index.js


/* harmony default export */ var switch_cell = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('cell', {
      class: _vm.b(),
      attrs: {
        "center": "",
        "title": _vm.title,
        "border": _vm.border
      }
    }, [_c('van-switch', _vm._b({
      on: {
        "input": function input($event) {
          _vm.$emit('input', $event);
        }
      }
    }, 'van-switch', _vm.$props, false))], 1);
  },
  name: 'switch-cell',
  components: {
    VanSwitch: es_switch
  },
  props: {
    title: String,
    value: Boolean,
    border: Boolean,
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: '26px'
    }
  },
  watch: {
    value: function value() {
      this.$emit('change', this.value);
    }
  }
}));
// CONCATENATED MODULE: ./es/tab/index.js


/* harmony default export */ var tab = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.isSelected,
        expression: "isSelected"
      }],
      class: _vm.b('pane')
    }, [_vm.inited ? _vm._t("default") : _vm._e(), _vm.$slots.title ? _c('div', {
      ref: "title"
    }, [_vm._t("title")], 2) : _vm._e()], 2);
  },
  name: 'tab',
  mixins: [find_parent],
  props: {
    title: String,
    disabled: Boolean
  },
  data: function data() {
    return {
      inited: false
    };
  },
  computed: {
    index: function index() {
      return this.parent.tabs.indexOf(this);
    },
    isSelected: function isSelected() {
      return this.index === this.parent.curActive;
    }
  },
  watch: {
    'parent.curActive': function parentCurActive() {
      this.inited = this.inited || this.isSelected;
    },
    title: function title() {
      this.parent.setLine();
    }
  },
  created: function created() {
    this.findParent('van-tabs');
  },
  mounted: function mounted() {
    var tabs = this.parent.tabs;
    var index = this.parent.$slots.default.indexOf(this.$vnode);
    tabs.splice(index === -1 ? tabs.length : index, 0, this);

    if (this.$slots.title) {
      this.parent.renderTitle(this.$refs.title, this.index);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.parent.tabs.splice(this.index, 1);
  }
}));
// CONCATENATED MODULE: ./es/tabbar/index.js

/* harmony default export */ var tabbar = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "van-hairline--top-bottom",
      class: _vm.b({
        fixed: _vm.fixed
      }),
      style: _vm.style
    }, [_vm._t("default")], 2);
  },
  name: 'tabbar',
  data: function data() {
    return {
      items: []
    };
  },
  props: {
    value: Number,
    fixed: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },
  computed: {
    style: function style() {
      return {
        zIndex: this.zIndex
      };
    }
  },
  watch: {
    items: function items() {
      this.setActiveItem();
    },
    value: function value() {
      this.setActiveItem();
    }
  },
  methods: {
    setActiveItem: function setActiveItem() {
      var _this = this;

      this.items.forEach(function (item, index) {
        item.active = index === _this.value;
      });
    },
    onChange: function onChange(active) {
      if (active !== this.value) {
        this.$emit('input', active);
        this.$emit('change', active);
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/tabbar-item/index.js
var tabbar_item_components;




/* harmony default export */ var tabbar_item = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b({
        active: _vm.active
      }),
      on: {
        "click": _vm.onClick
      }
    }, [_c('div', {
      class: _vm.b('icon', {
        dot: _vm.dot
      })
    }, [_vm._t("icon", [_vm.icon ? _c('icon', {
      attrs: {
        "name": _vm.icon
      }
    }) : _vm._e()], {
      active: _vm.active
    }), _c('van-info', {
      attrs: {
        "info": _vm.info
      }
    })], 2), _c('div', {
      class: _vm.b('text')
    }, [_vm._t("default", null, {
      active: _vm.active
    })], 2)]);
  },
  name: 'tabbar-item',
  components: (tabbar_item_components = {}, tabbar_item_components[info.name] = info, tabbar_item_components),
  mixins: [router_link],
  props: {
    icon: String,
    dot: Boolean,
    info: [String, Number]
  },
  data: function data() {
    return {
      active: false
    };
  },
  beforeCreate: function beforeCreate() {
    this.$parent.items.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.items.splice(this.$parent.items.indexOf(this), 1);
  },
  methods: {
    onClick: function onClick(event) {
      this.$parent.onChange(this.$parent.items.indexOf(this));
      this.$emit('click', event);
      this.routerLink();
    }
  }
}));
// CONCATENATED MODULE: ./es/tabs/index.js





/* harmony default export */ var tabs = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b([_vm.type])
    }, [_c('div', {
      ref: "wrap",
      class: [_vm.b('wrap', {
        scrollable: _vm.scrollable
      }), {
        'van-hairline--top-bottom': _vm.type === 'line'
      }],
      style: _vm.wrapStyle
    }, [_c('div', {
      ref: "nav",
      class: _vm.b('nav', [_vm.type]),
      style: _vm.navStyle
    }, [_vm.type === 'line' ? _c('div', {
      class: _vm.b('line'),
      style: _vm.lineStyle
    }) : _vm._e(), _vm._l(_vm.tabs, function (tab, index) {
      return _c('div', {
        ref: "tabs",
        refInFor: true,
        staticClass: "van-tab",
        class: {
          'van-tab--active': index === _vm.curActive,
          'van-tab--disabled': tab.disabled
        },
        style: _vm.getTabStyle(tab, index),
        on: {
          "click": function click($event) {
            _vm.onClick(index);
          }
        }
      }, [_c('span', {
        ref: "title",
        refInFor: true,
        staticClass: "van-ellipsis"
      }, [_vm._v(_vm._s(tab.title))])]);
    })], 2)]), _c('div', {
      ref: "content",
      class: _vm.b('content')
    }, [_vm._t("default")], 2)]);
  },
  name: 'tabs',
  mixins: [touch],
  model: {
    prop: 'active'
  },
  props: {
    color: String,
    sticky: Boolean,
    lineWidth: Number,
    swipeable: Boolean,
    active: {
      type: [Number, String],
      default: 0
    },
    type: {
      type: String,
      default: 'line'
    },
    duration: {
      type: Number,
      default: 0.2
    },
    swipeThreshold: {
      type: Number,
      default: 4
    },
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      tabs: [],
      position: '',
      curActive: null,
      lineStyle: {},
      events: {
        resize: false,
        sticky: false,
        swipeable: false
      }
    };
  },
  computed: {
    // whether the nav is scrollable
    scrollable: function scrollable() {
      return this.tabs.length > this.swipeThreshold;
    },
    wrapStyle: function wrapStyle() {
      switch (this.position) {
        case 'top':
          return {
            top: this.offsetTop + 'px',
            position: 'fixed'
          };

        case 'bottom':
          return {
            top: 'auto',
            bottom: 0
          };

        default:
          return null;
      }
    },
    navStyle: function navStyle() {
      return {
        borderColor: this.color
      };
    }
  },
  watch: {
    active: function active(val) {
      if (val !== this.curActive) {
        this.correctActive(val);
      }
    },
    color: function color() {
      this.setLine();
    },
    tabs: function tabs(_tabs) {
      this.correctActive(this.curActive || this.active);
      this.scrollIntoView();
      this.setLine();
    },
    curActive: function curActive() {
      this.scrollIntoView();
      this.setLine(); // scroll to correct position

      if (this.position === 'page-top' || this.position === 'content-bottom') {
        utils_scroll.setScrollTop(window, utils_scroll.getElementTop(this.$el));
      }
    },
    sticky: function sticky() {
      this.handlers(true);
    },
    swipeable: function swipeable() {
      this.handlers(true);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.correctActive(this.active);
    this.setLine();
    this.$nextTick(function () {
      _this.handlers(true);

      _this.scrollIntoView(true);
    });
  },
  activated: function activated() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.handlers(true);

      _this2.scrollIntoView(true);
    });
  },
  deactivated: function deactivated() {
    this.handlers(false);
  },
  beforeDestroy: function beforeDestroy() {
    this.handlers(false);
  },
  methods: {
    // whether to bind sticky listener
    handlers: function handlers(bind) {
      var events = this.events;
      var sticky = this.sticky && bind;
      var swipeable = this.swipeable && bind; // listen to window resize event

      if (events.resize !== bind) {
        events.resize = bind;
        (bind ? on : off)(window, 'resize', this.setLine, true);
      } // listen to scroll event


      if (events.sticky !== sticky) {
        events.sticky = sticky;
        this.scrollEl = this.scrollEl || utils_scroll.getScrollEventTarget(this.$el);
        (sticky ? on : off)(this.scrollEl, 'scroll', this.onScroll, true);
        this.onScroll();
      } // listen to touch event


      if (events.swipeable !== swipeable) {
        events.swipeable = swipeable;
        var content = this.$refs.content;
        var action = swipeable ? on : off;
        action(content, 'touchstart', this.touchStart);
        action(content, 'touchmove', this.touchMove);
        action(content, 'touchend', this.onTouchEnd);
        action(content, 'touchcancel', this.onTouchEnd);
      }
    },
    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      var direction = this.direction,
          deltaX = this.deltaX,
          curActive = this.curActive;
      var minSwipeDistance = 50;
      /* istanbul ignore else */

      if (direction === 'horizontal' && this.offsetX >= minSwipeDistance) {
        /* istanbul ignore else */
        if (deltaX > 0 && curActive !== 0) {
          this.setCurActive(curActive - 1);
        } else if (deltaX < 0 && curActive !== this.tabs.length - 1) {
          this.setCurActive(curActive + 1);
        }
      }
    },
    // adjust tab position
    onScroll: function onScroll() {
      var scrollTop = utils_scroll.getScrollTop(window) + this.offsetTop;
      var elTopToPageTop = utils_scroll.getElementTop(this.$el);
      var elBottomToPageTop = elTopToPageTop + this.$el.offsetHeight - this.$refs.wrap.offsetHeight;

      if (scrollTop > elBottomToPageTop) {
        this.position = 'bottom';
      } else if (scrollTop > elTopToPageTop) {
        this.position = 'top';
      } else {
        this.position = '';
      }

      var scrollParams = {
        scrollTop: scrollTop,
        isFixed: this.position === 'top'
      };
      this.$emit('scroll', scrollParams);
    },
    // update nav bar style
    setLine: function setLine() {
      var _this3 = this;

      this.$nextTick(function () {
        if (!_this3.$refs.tabs || _this3.type !== 'line') {
          return;
        }

        var tab = _this3.$refs.tabs[_this3.curActive];
        var width = _this3.lineWidth || tab.offsetWidth;
        var left = tab.offsetLeft + (tab.offsetWidth - width) / 2;
        _this3.lineStyle = {
          width: width + "px",
          backgroundColor: _this3.color,
          transform: "translateX(" + left + "px)",
          transitionDuration: _this3.duration + "s"
        };
      });
    },
    // correct the value of active
    correctActive: function correctActive(active) {
      active = +active;
      var exist = this.tabs.some(function (tab) {
        return tab.index === active;
      });
      var defaultActive = (this.tabs[0] || {}).index || 0;
      this.setCurActive(exist ? active : defaultActive);
    },
    setCurActive: function setCurActive(active) {
      active = this.findAvailableTab(active, active < this.curActive);

      if (this.isDef(active) && active !== this.curActive) {
        this.$emit('input', active);

        if (this.curActive !== null) {
          this.$emit('change', active, this.tabs[active].title);
        }

        this.curActive = active;
      }
    },
    findAvailableTab: function findAvailableTab(index, reverse) {
      var diff = reverse ? -1 : 1;

      while (index >= 0 && index < this.tabs.length) {
        if (!this.tabs[index].disabled) {
          return index;
        }

        index += diff;
      }
    },
    // emit event when clicked
    onClick: function onClick(index) {
      var _this$tabs$index = this.tabs[index],
          title = _this$tabs$index.title,
          disabled = _this$tabs$index.disabled;

      if (disabled) {
        this.$emit('disabled', index, title);
      } else {
        this.setCurActive(index);
        this.$emit('click', index, title);
      }
    },
    // scroll active tab into view
    scrollIntoView: function scrollIntoView(immediate) {
      if (!this.scrollable || !this.$refs.tabs) {
        return;
      }

      var tab = this.$refs.tabs[this.curActive];
      var nav = this.$refs.nav;
      var scrollLeft = nav.scrollLeft,
          navWidth = nav.offsetWidth;
      var offsetLeft = tab.offsetLeft,
          tabWidth = tab.offsetWidth;
      this.scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2, immediate);
    },
    // animate the scrollLeft of nav
    scrollTo: function scrollTo(el, from, to, immediate) {
      if (immediate) {
        el.scrollLeft += to - from;
        return;
      }

      var count = 0;
      var frames = Math.round(this.duration * 1000 / 16);

      var animate = function animate() {
        el.scrollLeft += (to - from) / frames;
        /* istanbul ignore next */

        if (++count < frames) {
          Object(raf["b" /* raf */])(animate);
        }
      };

      animate();
    },
    // render title slot of child tab
    renderTitle: function renderTitle(el, index) {
      var _this4 = this;

      this.$nextTick(function () {
        var title = _this4.$refs.title[index];
        title.parentNode.replaceChild(el, title);
      });
    },
    getTabStyle: function getTabStyle(item, index) {
      var style = {};
      var color = this.color;
      var active = index === this.curActive;
      var isCard = this.type === 'card';

      if (color) {
        if (!item.disabled && isCard !== active) {
          style.color = color;
        }

        if (!item.disabled && isCard && active) {
          style.backgroundColor = color;
        }

        if (isCard) {
          style.borderColor = color;
        }
      }

      return style;
    }
  }
}));
// CONCATENATED MODULE: ./es/toast/Toast.js


var STYLE_LIST = ['success', 'fail', 'loading'];
/* harmony default export */ var Toast = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('transition', {
      attrs: {
        "name": "van-fade"
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.value,
        expression: "value"
      }],
      class: _vm.b([_vm.style, _vm.position])
    }, [_vm.style === 'text' ? _c('div', [_vm._v(_vm._s(_vm.message))]) : _vm._e(), _vm.style === 'html' ? _c('div', {
      domProps: {
        "innerHTML": _vm._s(_vm.message)
      }
    }) : _vm._e(), _vm.style === 'default' ? [_vm.type === 'loading' ? _c('loading', {
      attrs: {
        "color": "white",
        "type": _vm.loadingType
      }
    }) : _c('icon', {
      class: _vm.b('icon'),
      attrs: {
        "name": _vm.type
      }
    }), _vm.isDef(_vm.message) ? _c('div', {
      class: _vm.b('text')
    }, [_vm._v(_vm._s(_vm.message))]) : _vm._e()] : _vm._e()], 2)]);
  },
  name: 'toast',
  mixins: [popup],
  props: {
    forbidClick: Boolean,
    message: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    loadingType: {
      type: String,
      default: 'circular'
    },
    position: {
      type: String,
      default: 'middle'
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      clickable: false
    };
  },
  computed: {
    style: function style() {
      return STYLE_LIST.indexOf(this.type) !== -1 ? 'default' : this.type;
    }
  },
  mounted: function mounted() {
    this.toggleClickale();
  },
  watch: {
    value: function value() {
      this.toggleClickale();
    },
    forbidClick: function forbidClick() {
      this.toggleClickale();
    }
  },
  methods: {
    toggleClickale: function toggleClickale() {
      var clickable = this.value && this.forbidClick;

      if (this.clickable !== clickable) {
        this.clickable = clickable;
        var action = clickable ? 'add' : 'remove';
        document.body.classList[action]('van-toast--unclickable');
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/toast/index.js




var defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  value: true,
  duration: 3000,
  position: 'middle',
  loadingType: 'circular',
  forbidClick: false,
  overlayStyle: {}
};

var toast_parseOptions = function parseOptions(message) {
  return Object(utils["d" /* isObj */])(message) ? message : {
    message: message
  };
};

var queue = [];
var singleton = true;

var currentOptions = _extends({}, defaultOptions);

function createInstance() {
  if (!queue.length || !singleton) {
    var toast = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(Toast))({
      el: document.createElement('div')
    });
    document.body.appendChild(toast.$el);
    queue.push(toast);
  }

  return queue[queue.length - 1];
}

; // transform toast options to popup props

function transformer(options) {
  options.overlay = options.mask;
  return options;
}

function toast_Toast(options) {
  if (options === void 0) {
    options = {};
  }

  var toast = createInstance();
  options = _extends({}, currentOptions, toast_parseOptions(options), {
    clear: function clear() {
      toast.value = false;
    }
  });

  _extends(toast, transformer(options));

  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
    }, options.duration);
  }

  return toast;
}

;

var toast_createMethod = function createMethod(type) {
  return function (options) {
    return toast_Toast(_extends({
      type: type
    }, toast_parseOptions(options)));
  };
};

['loading', 'success', 'fail'].forEach(function (method) {
  toast_Toast[method] = toast_createMethod(method);
});

toast_Toast.clear = function (all) {
  if (queue.length) {
    if (all) {
      queue.forEach(function (toast) {
        toast.clear();
      });
      queue = [];
    } else if (singleton) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

toast_Toast.setDefaultOptions = function (options) {
  _extends(currentOptions, options);
};

toast_Toast.resetDefaultOptions = function () {
  currentOptions = _extends({}, defaultOptions);
};

toast_Toast.allowMultiple = function (allow) {
  if (allow === void 0) {
    allow = true;
  }

  singleton = !allow;
};

toast_Toast.install = function () {
  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.use(Toast);
};

external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$toast = toast_Toast;
/* harmony default export */ var es_toast = (toast_Toast);
// CONCATENATED MODULE: ./es/tree-select/index.js


/* harmony default export */ var tree_select = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b(),
      style: {
        height: _vm.mainHeight + 'px'
      }
    }, [_c('div', {
      class: _vm.b('nav')
    }, _vm._l(_vm.items, function (item, index) {
      return _c('div', {
        staticClass: "van-ellipsis",
        class: _vm.b('nitem', {
          active: _vm.mainActiveIndex === index
        }),
        on: {
          "click": function click($event) {
            _vm.$emit('navclick', index);
          }
        }
      }, [_vm._v("\n      " + _vm._s(item.text) + "\n    ")]);
    })), _c('div', {
      class: _vm.b('content'),
      style: {
        height: _vm.itemHeight + 'px'
      }
    }, _vm._l(_vm.subItems, function (item) {
      return _c('div', {
        key: item.id,
        staticClass: "van-ellipsis",
        class: _vm.b('item', {
          active: _vm.activeId === item.id
        }),
        on: {
          "click": function click($event) {
            _vm.onItemSelect(item);
          }
        }
      }, [_vm._v("\n      " + _vm._s(item.text) + "\n      "), _vm.activeId === item.id ? _c('icon', {
        class: _vm.b('selected'),
        attrs: {
          "name": "ion-checkmark"
        }
      }) : _vm._e()], 1);
    }))]);
  },
  name: 'tree-select',
  props: {
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    mainActiveIndex: {
      type: Number,
      default: 0
    },
    activeId: {
      type: [Number, String],
      default: 0
    },
    maxHeight: {
      type: Number,
      default: 300
    }
  },
  computed: {
    subItems: function subItems() {
      var selectedItem = this.items[this.mainActiveIndex] || {};
      return selectedItem.children || [];
    },
    mainHeight: function mainHeight() {
      var maxHeight = Math.max(this.items.length * 44, this.subItems.length * 44);
      return Math.min(maxHeight, this.maxHeight);
    },
    itemHeight: function itemHeight() {
      return Math.min(this.subItems.length * 44, this.maxHeight);
    }
  },
  methods: {
    onItemSelect: function onItemSelect(data) {
      this.$emit('itemclick', _extends({}, data));
    }
  }
}));
// CONCATENATED MODULE: ./es/uploader/index.js

/* harmony default export */ var uploader = (create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm._t("default"), _c('input', _vm._b({
      ref: "input",
      class: _vm.b('input'),
      attrs: {
        "type": "file",
        "accept": _vm.accept,
        "disabled": _vm.disabled
      },
      on: {
        "change": _vm.onChange
      }
    }, 'input', _vm.$attrs, false))], 2);
  },
  name: 'uploader',
  inheritAttrs: false,
  props: {
    disabled: Boolean,
    beforeRead: Function,
    afterRead: Function,
    accept: {
      type: String,
      default: 'image/*'
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    },
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE
    }
  },
  methods: {
    onChange: function onChange(event) {
      var _this = this;

      var files = event.target.files;

      if (this.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files, 0);

      if (!files || this.beforeRead && !this.beforeRead(files)) {
        return;
      }

      if (Array.isArray(files)) {
        Promise.all(files.map(this.readFile)).then(function (contents) {
          var oversize = false;
          var payload = files.map(function (file, index) {
            if (file.size > _this.maxSize) {
              oversize = true;
            }

            return {
              file: files[index],
              content: contents[index]
            };
          });

          _this.onAfterRead(payload, oversize);
        });
      } else {
        this.readFile(files).then(function (content) {
          _this.onAfterRead({
            file: files,
            content: content
          }, files.size > _this.maxSize);
        });
      }
    },
    readFile: function readFile(file) {
      var _this2 = this;

      return new Promise(function (resolve) {
        var reader = new FileReader();

        reader.onload = function (event) {
          resolve(event.target.result);
        };

        if (_this2.resultType === 'dataUrl') {
          reader.readAsDataURL(file);
        } else if (_this2.resultType === 'text') {
          reader.readAsText(file);
        }
      });
    },
    onAfterRead: function onAfterRead(files, oversize) {
      if (oversize) {
        this.$emit('oversize', files);
      } else {
        this.afterRead && this.afterRead(files);
        this.$refs.input && (this.$refs.input.value = '');
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/waterfall/directive.js


var CONTEXT = '@@Waterfall';
var OFFSET = 300; // 绑定事件到元素上
// 读取基本的控制变量

function doBindEvent() {
  var _this = this;

  if (this.el[CONTEXT].binded) {
    return;
  }

  this.el[CONTEXT].binded = true;
  this.scrollEventListener = handleScrollEvent.bind(this);
  this.scrollEventTarget = utils_scroll.getScrollEventTarget(this.el);
  var disabledExpr = this.el.getAttribute('waterfall-disabled');
  var disabled = false;

  if (disabledExpr) {
    this.vm.$watch(disabledExpr, function (value) {
      _this.disabled = value;

      _this.scrollEventListener();
    });
    disabled = Boolean(this.vm[disabledExpr]);
  }

  this.disabled = disabled;
  var offset = this.el.getAttribute('waterfall-offset');
  this.offset = Number(offset) || OFFSET;
  on(this.scrollEventTarget, 'scroll', this.scrollEventListener, true);
  this.scrollEventListener();
} // 处理滚动函数


function handleScrollEvent() {
  var element = this.el;
  var scrollEventTarget = this.scrollEventTarget; // 已被禁止的滚动处理

  if (this.disabled) return;
  var targetScrollTop = utils_scroll.getScrollTop(scrollEventTarget);
  var targetVisibleHeight = utils_scroll.getVisibleHeight(scrollEventTarget); // 滚动元素可视区域下边沿到滚动元素元素最顶上 距离

  var targetBottom = targetScrollTop + targetVisibleHeight; // 如果无元素高度，考虑为元素隐藏，直接返回

  if (!targetVisibleHeight) return; // 判断是否到了底

  var needLoadMoreToLower = false;

  if (element === scrollEventTarget) {
    needLoadMoreToLower = scrollEventTarget.scrollHeight - targetBottom < this.offset;
  } else {
    var elementBottom = utils_scroll.getElementTop(element) - utils_scroll.getElementTop(scrollEventTarget) + utils_scroll.getVisibleHeight(element);
    needLoadMoreToLower = elementBottom - targetVisibleHeight < this.offset;
  }

  if (needLoadMoreToLower) {
    this.cb.lower && this.cb.lower({
      target: scrollEventTarget,
      top: targetScrollTop
    });
  } // 判断是否到了顶


  var needLoadMoreToUpper = false;

  if (element === scrollEventTarget) {
    needLoadMoreToUpper = targetScrollTop < this.offset;
  } else {
    var elementTop = utils_scroll.getElementTop(element) - utils_scroll.getElementTop(scrollEventTarget);
    needLoadMoreToUpper = elementTop + this.offset > 0;
  }

  if (needLoadMoreToUpper) {
    this.cb.upper && this.cb.upper({
      target: scrollEventTarget,
      top: targetScrollTop
    });
  }
} // 绑定事件


function startBind(el) {
  var context = el[CONTEXT];
  context.vm.$nextTick(function () {
    doBindEvent.call(el[CONTEXT]);
  });
} // 确认何时绑事件监听函数


function doCheckStartBind(el) {
  var context = el[CONTEXT];

  if (context.vm._isMounted) {
    startBind(el);
  } else {
    context.vm.$on('hook:mounted', function () {
      startBind(el);
    });
  }
}

/* harmony default export */ var directive = (function (type) {
  return {
    bind: function bind(el, binding, vnode) {
      if (!el[CONTEXT]) {
        el[CONTEXT] = {
          el: el,
          vm: vnode.context,
          cb: {}
        };
      }

      el[CONTEXT].cb[type] = binding.value;
      doCheckStartBind(el);
    },
    update: function update(el) {
      var context = el[CONTEXT];
      context.scrollEventListener && context.scrollEventListener();
    },
    unbind: function unbind(el) {
      var context = el[CONTEXT];

      if (context.scrollEventTarget) {
        off(context.scrollEventTarget, 'scroll', context.scrollEventListener);
      }
    }
  };
});
;
// CONCATENATED MODULE: ./es/waterfall/index.js


directive.install = function (Vue) {
  if (false) {}

  Vue.directive('WaterfallLower', directive('lower'));
  Vue.directive('WaterfallUpper', directive('upper'));
};

/* harmony default export */ var waterfall = (directive);
// CONCATENATED MODULE: ./es/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return es_install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* concated harmony reexport Actionsheet */__webpack_require__.d(__webpack_exports__, "Actionsheet", function() { return actionsheet; });
/* concated harmony reexport Badge */__webpack_require__.d(__webpack_exports__, "Badge", function() { return badge; });
/* concated harmony reexport BadgeGroup */__webpack_require__.d(__webpack_exports__, "BadgeGroup", function() { return badge_group; });
/* concated harmony reexport Button */__webpack_require__.d(__webpack_exports__, "Button", function() { return es_button; });
/* concated harmony reexport Card */__webpack_require__.d(__webpack_exports__, "Card", function() { return card; });
/* concated harmony reexport Cell */__webpack_require__.d(__webpack_exports__, "Cell", function() { return cell; });
/* concated harmony reexport CellGroup */__webpack_require__.d(__webpack_exports__, "CellGroup", function() { return cell_group; });
/* concated harmony reexport Checkbox */__webpack_require__.d(__webpack_exports__, "Checkbox", function() { return es_checkbox; });
/* concated harmony reexport CheckboxGroup */__webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return checkbox_group; });
/* concated harmony reexport Circle */__webpack_require__.d(__webpack_exports__, "Circle", function() { return circle; });
/* concated harmony reexport Col */__webpack_require__.d(__webpack_exports__, "Col", function() { return col; });
/* concated harmony reexport Collapse */__webpack_require__.d(__webpack_exports__, "Collapse", function() { return collapse; });
/* concated harmony reexport CollapseItem */__webpack_require__.d(__webpack_exports__, "CollapseItem", function() { return collapse_item; });
/* concated harmony reexport DatetimePicker */__webpack_require__.d(__webpack_exports__, "DatetimePicker", function() { return datetime_picker; });
/* concated harmony reexport Dialog */__webpack_require__.d(__webpack_exports__, "Dialog", function() { return dialog; });
/* concated harmony reexport Field */__webpack_require__.d(__webpack_exports__, "Field", function() { return field; });
/* concated harmony reexport Icon */__webpack_require__.d(__webpack_exports__, "Icon", function() { return icon; });
/* concated harmony reexport ImagePreview */__webpack_require__.d(__webpack_exports__, "ImagePreview", function() { return image_preview; });
/* concated harmony reexport Info */__webpack_require__.d(__webpack_exports__, "Info", function() { return info; });
/* concated harmony reexport Lazyload */__webpack_require__.d(__webpack_exports__, "Lazyload", function() { return lazyload; });
/* concated harmony reexport List */__webpack_require__.d(__webpack_exports__, "List", function() { return list; });
/* concated harmony reexport Loading */__webpack_require__.d(__webpack_exports__, "Loading", function() { return loading; });
/* concated harmony reexport Locale */__webpack_require__.d(__webpack_exports__, "Locale", function() { return es_locale; });
/* concated harmony reexport NavBar */__webpack_require__.d(__webpack_exports__, "NavBar", function() { return nav_bar; });
/* concated harmony reexport NoticeBar */__webpack_require__.d(__webpack_exports__, "NoticeBar", function() { return notice_bar; });
/* concated harmony reexport NumberKeyboard */__webpack_require__.d(__webpack_exports__, "NumberKeyboard", function() { return number_keyboard; });
/* concated harmony reexport Pagination */__webpack_require__.d(__webpack_exports__, "Pagination", function() { return pagination; });
/* concated harmony reexport Panel */__webpack_require__.d(__webpack_exports__, "Panel", function() { return panel; });
/* concated harmony reexport PasswordInput */__webpack_require__.d(__webpack_exports__, "PasswordInput", function() { return password_input; });
/* concated harmony reexport Picker */__webpack_require__.d(__webpack_exports__, "Picker", function() { return picker; });
/* concated harmony reexport Popup */__webpack_require__.d(__webpack_exports__, "Popup", function() { return es_popup; });
/* concated harmony reexport Progress */__webpack_require__.d(__webpack_exports__, "Progress", function() { return es_progress; });
/* concated harmony reexport PullRefresh */__webpack_require__.d(__webpack_exports__, "PullRefresh", function() { return pull_refresh; });
/* concated harmony reexport Radio */__webpack_require__.d(__webpack_exports__, "Radio", function() { return es_radio; });
/* concated harmony reexport RadioGroup */__webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return radio_group; });
/* concated harmony reexport Rate */__webpack_require__.d(__webpack_exports__, "Rate", function() { return rate; });
/* concated harmony reexport Row */__webpack_require__.d(__webpack_exports__, "Row", function() { return row; });
/* concated harmony reexport Search */__webpack_require__.d(__webpack_exports__, "Search", function() { return search; });
/* concated harmony reexport Slider */__webpack_require__.d(__webpack_exports__, "Slider", function() { return slider; });
/* concated harmony reexport Step */__webpack_require__.d(__webpack_exports__, "Step", function() { return step; });
/* concated harmony reexport Stepper */__webpack_require__.d(__webpack_exports__, "Stepper", function() { return stepper; });
/* concated harmony reexport Steps */__webpack_require__.d(__webpack_exports__, "Steps", function() { return steps; });
/* concated harmony reexport SubmitBar */__webpack_require__.d(__webpack_exports__, "SubmitBar", function() { return submit_bar; });
/* concated harmony reexport Swipe */__webpack_require__.d(__webpack_exports__, "Swipe", function() { return swipe; });
/* concated harmony reexport SwipeCell */__webpack_require__.d(__webpack_exports__, "SwipeCell", function() { return swipe_cell; });
/* concated harmony reexport SwipeItem */__webpack_require__.d(__webpack_exports__, "SwipeItem", function() { return swipe_item; });
/* concated harmony reexport Switch */__webpack_require__.d(__webpack_exports__, "Switch", function() { return es_switch; });
/* concated harmony reexport SwitchCell */__webpack_require__.d(__webpack_exports__, "SwitchCell", function() { return switch_cell; });
/* concated harmony reexport Tab */__webpack_require__.d(__webpack_exports__, "Tab", function() { return tab; });
/* concated harmony reexport Tabbar */__webpack_require__.d(__webpack_exports__, "Tabbar", function() { return tabbar; });
/* concated harmony reexport TabbarItem */__webpack_require__.d(__webpack_exports__, "TabbarItem", function() { return tabbar_item; });
/* concated harmony reexport Tabs */__webpack_require__.d(__webpack_exports__, "Tabs", function() { return tabs; });
/* concated harmony reexport Tag */__webpack_require__.d(__webpack_exports__, "Tag", function() { return tag; });
/* concated harmony reexport Toast */__webpack_require__.d(__webpack_exports__, "Toast", function() { return es_toast; });
/* concated harmony reexport TreeSelect */__webpack_require__.d(__webpack_exports__, "TreeSelect", function() { return tree_select; });
/* concated harmony reexport Uploader */__webpack_require__.d(__webpack_exports__, "Uploader", function() { return uploader; });
/* concated harmony reexport Waterfall */__webpack_require__.d(__webpack_exports__, "Waterfall", function() { return waterfall; });
// This file is auto gererated by build/build-entry.js

























































var version = '1.3.4';
var components = [actionsheet, badge, badge_group, es_button, card, cell, cell_group, es_checkbox, checkbox_group, circle, col, collapse, collapse_item, datetime_picker, dialog, field, icon, image_preview, info, list, loading, es_locale, nav_bar, notice_bar, number_keyboard, pagination, panel, password_input, picker, es_popup, es_progress, pull_refresh, es_radio, radio_group, rate, row, search, slider, step, stepper, steps, submit_bar, swipe, swipe_cell, swipe_item, es_switch, switch_cell, tab, tabbar, tabbar_item, tabs, tag, es_toast, tree_select, uploader];

var es_install = function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
};
/* istanbul ignore if */


if (typeof window !== 'undefined' && window.Vue) {
  es_install(window.Vue);
}


/* harmony default export */ var es = __webpack_exports__["default"] = ({
  install: es_install,
  version: version
});

/***/ })
/******/ ]);
});