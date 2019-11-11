/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./node_modules/normalize.css/normalize.css?");

/***/ }),

/***/ "./src/javascript/app/app.js":
/*!***********************************!*\
  !*** ./src/javascript/app/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.onscroll = function() {\n    hideWelcomePage();\n    animateNavTabs();\n};\n\nfunction hideWelcomePage() {\n    let welcomePage = document.getElementById('welcomePage');\n    let header = document.getElementById('header');\n    let rect = header.getBoundingClientRect();\n    if (rect.top === 0) {\n        welcomePage.style.display = 'none';\n    }\n}\n\nfunction animateNavTabs() {\n    const TOP_CONTENT_INDENT = 40;\n    let sections = document.getElementsByClassName('main-content');\n    let headerHeight = document.getElementById('header').getBoundingClientRect().height;\n    for (let section of sections) {\n        let rect = section.getBoundingClientRect();\n        let id = section.id;\n        if (rect.top <= headerHeight + TOP_CONTENT_INDENT  &&  rect.top + rect.height > headerHeight + TOP_CONTENT_INDENT) {\n            document.querySelector('a[href*=' + id + ']').setAttribute('class', 'active');\n        } else {\n            document.querySelector('a[href*=' + id + ']').setAttribute('class', '');\n        }\n    }\n}\nfunction scrollOnClick(elementId) {\n    let sectionTop = document.getElementById(elementId).offsetTop;\n    let headerHeight = document.getElementById('header').getBoundingClientRect().height;\n    window.scrollTo({top: sectionTop - headerHeight, behavior: \"smooth\"})\n}\n\nlet navLinks = document.querySelectorAll('a[href*=\"#nav\"]');\nfor (let navlink of navLinks) {\n    navlink.addEventListener('click', function (e) {\n        e.preventDefault();\n        scrollOnClick(navlink.hash.substr(1));\n    })\n}\n\n//# sourceURL=webpack:///./src/javascript/app/app.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_fonts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/fonts.scss */ \"./src/sass/fonts.scss\");\n/* harmony import */ var _sass_fonts_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_fonts_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sass_px_to_rem_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/px-to-rem.scss */ \"./src/sass/px-to-rem.scss\");\n/* harmony import */ var _sass_px_to_rem_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_px_to_rem_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app */ \"./src/javascript/app/app.js\");\n/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_app__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/sass/fonts.scss":
/*!*****************************!*\
  !*** ./src/sass/fonts.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/fonts.scss?");

/***/ }),

/***/ "./src/sass/px-to-rem.scss":
/*!*********************************!*\
  !*** ./src/sass/px-to-rem.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/px-to-rem.scss?");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/styles.scss?");

/***/ })

/******/ });