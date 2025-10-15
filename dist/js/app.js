/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
/**
 * Este es un toast personalizado para mostrar mensajes en la pantalla
 */
/**
 * Clase principal del toast
 * @param {Object} param0 {
 *
 * }
 */
var MiniToast = /*#__PURE__*/_createClass(function MiniToast() {
  var configParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  _classCallCheck(this, MiniToast);
  this.border = true;
  this.elementRoot = "#toast-container";
  this.classes = {
    root: "toast--root",
    container: "toast__container",
    itemContainer: "toast__item--container",
    icon: "toast__item--icon",
    title: "toast__item--title",
    message: "toast__item--message",
    textContainer: "toast__item--text-container",
    border: "toast__item--border",
    show: "show"
  };
  this.duration = 6000;
  this.container = false;
  this.horizontal = "right";
  this.vertical = "top";
  this.width = "280";
  this.timeToastsShow = 500;
  this.icon_success = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-8.69"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
  this.icon_error = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>';
  this.icon_warning = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>';
  this.icon_info = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
  this.config(configParams);
});
MiniToast.prototype.config = function (_ref) {
  var _ref$border = _ref.border,
    border = _ref$border === void 0 ? null : _ref$border,
    _ref$classes = _ref.classes,
    classes = _ref$classes === void 0 ? null : _ref$classes,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? null : _ref$duration,
    _ref$elementRoot = _ref.elementRoot,
    elementRoot = _ref$elementRoot === void 0 ? null : _ref$elementRoot,
    _ref$horizontal = _ref.horizontal,
    horizontal = _ref$horizontal === void 0 ? null : _ref$horizontal,
    _ref$icon_error = _ref.icon_error,
    icon_error = _ref$icon_error === void 0 ? null : _ref$icon_error,
    _ref$icon_info = _ref.icon_info,
    icon_info = _ref$icon_info === void 0 ? null : _ref$icon_info,
    _ref$icon_success = _ref.icon_success,
    icon_success = _ref$icon_success === void 0 ? null : _ref$icon_success,
    _ref$icon_warning = _ref.icon_warning,
    icon_warning = _ref$icon_warning === void 0 ? null : _ref$icon_warning,
    _ref$timeToastsShow = _ref.timeToastsShow,
    timeToastsShow = _ref$timeToastsShow === void 0 ? null : _ref$timeToastsShow,
    _ref$vertical = _ref.vertical,
    vertical = _ref$vertical === void 0 ? null : _ref$vertical,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? null : _ref$width;
  if (border && typeof border === "boolean") {
    this.border = border;
  }
  if (classes && _typeof(classes) === "object") {
    this.classes = _objectSpread(_objectSpread({}, this.classes), classes);
  }
  if (duration && typeof duration === "number") {
    this.duration = duration;
  }
  if (elementRoot && typeof elementRoot === "string") {
    this.elementRoot = elementRoot;
  }
  if (icon_error && typeof icon_error === "string") {
    this.icon_error = icon_error;
  }
  if (icon_info && typeof icon_info === "string") {
    this.icon_info = icon_info;
  }
  if (icon_success && typeof icon_success === "string") {
    this.icon_success = icon_success;
  }
  if (icon_warning && typeof icon_warning === "string") {
    this.icon_warning = icon_warning;
  }
  if (vertical && typeof vertical === "string") {
    this.vertical = vertical;
  }
  if (timeToastsShow && typeof timeToastsShow === "number") {
    this.timeToastsShow = timeToastsShow;
  }
  if (horizontal && typeof horizontal === "string") {
    this.horizontal = horizontal;
  }
  if (width && typeof width === "number") {
    this.width = width;
  }
  this.toast_create();
};
MiniToast.prototype.toast_create = function () {
  var elementRoot = document.querySelector(this.elementRoot);
  if (!elementRoot) {
    console.error("Toast: elementRoot is required");
    return;
  }

  // se agregan clases a elemento root
  elementRoot.classList.add(this.classes.root);
  elementRoot.classList.add(this.vertical);
  elementRoot.classList.add(this.horizontal);
  this.container = document.createElement("div");
  this.container.classList.add(this.classes.container);
  this.container.classList.add(this.horizontal);
  elementRoot.appendChild(this.container);
};
MiniToast.prototype.toast_item_container = function (variant) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!variant) {
    console.error("Toast: variant is required");
    return;
  }
  var containerToast = document.createElement("div");
  containerToast.className = this.classes.itemContainer;
  containerToast.className += " " + this.classes.show;
  containerToast.className += " " + variant;
  if (width) {
    containerToast.style.width = width + "px";
  } else {
    containerToast.style.width = this.width + "px";
  }
  if (this.border) {
    containerToast.className += " " + this.classes.border;
  }
  return containerToast;
};
MiniToast.prototype.toast_item_icon = function (variant) {
  var containerToastIcon = document.createElement("div");
  containerToastIcon.className = this.classes.icon + " " + variant;
  switch (variant) {
    case "success":
      containerToastIcon.innerHTML = this.icon_success;
      break;
    case "error":
      containerToastIcon.innerHTML = this.icon_error;
      break;
    case "warning":
      containerToastIcon.innerHTML = this.icon_warning;
      break;
    case "info":
      containerToastIcon.innerHTML = this.icon_info;
      break;
    default:
      return false;
  }
  return containerToastIcon;
};
MiniToast.prototype.toast_item_title = function (text, variant) {
  var containerToastItemTitle = document.createElement("div");
  containerToastItemTitle.className = this.classes.title + " " + variant;
  containerToastItemTitle.textContent = text;
  return containerToastItemTitle;
};
MiniToast.prototype.toast_item_message = function (text, variant) {
  var containerToastItemMessage = document.createElement("div");
  containerToastItemMessage.className = this.classes.message + " " + variant;
  containerToastItemMessage.textContent = text;
  return containerToastItemMessage;
};
MiniToast.prototype.toast_item_text = function (title, message, variant) {
  var containerToastItemText = document.createElement("div");
  containerToastItemText.className = this.classes.textContainer;
  if (title) {
    var titleToast = this.toast_item_title(title, variant);
    containerToastItemText.appendChild(titleToast);
  }
  if (message) {
    var messageToast = this.toast_item_message(message, variant);
    containerToastItemText.appendChild(messageToast);
  }
  return containerToastItemText;
};
MiniToast.prototype.add = function (_ref2) {
  var _this = this;
  var _ref2$variant = _ref2.variant,
    variant = _ref2$variant === void 0 ? "success" : _ref2$variant,
    _ref2$title = _ref2.title,
    title = _ref2$title === void 0 ? "" : _ref2$title,
    _ref2$message = _ref2.message,
    message = _ref2$message === void 0 ? "" : _ref2$message,
    _ref2$duration = _ref2.duration,
    duration = _ref2$duration === void 0 ? this.duration : _ref2$duration,
    _ref2$onClose = _ref2.onClose,
    onClose = _ref2$onClose === void 0 ? function () {} : _ref2$onClose,
    _ref2$width = _ref2.width,
    width = _ref2$width === void 0 ? null : _ref2$width;
  if (this.container === false) {
    console.error("Toast: container is required");
    return;
  }
  if (!variant) {
    console.error("Toast: variant is required");
  }
  if (!title || !message) {
    console.error("Toast: title and message are required");
    return;
  }
  var totalToast = this.container.childNodes.length;
  var containerItemToast = this.toast_item_container(variant, width);
  var text = this.toast_item_text(title, message, variant);
  var icon = this.toast_item_icon(variant);
  if (icon) {
    containerItemToast.appendChild(icon);
  }
  if (text) {
    containerItemToast.appendChild(text);
  }
  this.container.appendChild(containerItemToast);
  var closeToast = duration + totalToast * 500;
  setTimeout(function () {
    containerItemToast.classList.remove(_this.classes.show);
    setTimeout(function () {
      _this.container.removeChild(containerItemToast);
      onClose();
    }, 500);
  }, closeToast);
};
MiniToast.prototype.remove = function () {
  this.elementRoot.innerHTML = "";
  this.elementRoot.className = "";
};
(function (window) {
  "use strict";

  window.MiniToast = MiniToast;
})(window);

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkminitoast"] = self["webpackChunkminitoast"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/styles/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;