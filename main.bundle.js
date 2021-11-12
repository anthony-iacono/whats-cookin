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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  font-family: 'Kaisei HarunoUmi', serif;\n  color: black; }\n\nbody {\n  background-color: #F0F1ED;\n  width: 100vw;\n  height: 100vh;\n  margin: 0px; }\n\nheader {\n  height: 200px;\n  width: 100%;\n  margin: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center; }\n\nheader > h1 {\n  margin-top: 50px;\n  margin-bottom: 0px;\n  margin-left: 10px;\n  font-size: 10vh;\n  color: #E23D26;\n  font-weight: 700; }\n\nnav {\n  width: 90%;\n  height: 100%;\n  display: flex;\n  justify-content: space-around;\n  border-top: black solid;\n  border-bottom: black solid;\n  text-align: center; }\n\nnav > button {\n  border-radius: 5px;\n  border: none;\n  text-align: center;\n  font-size: 18px;\n  opacity: 1;\n  background: none;\n  cursor: pointer; }\n\nnav > form {\n  display: flex;\n  align-self: center; }\n\nmain {\n  width: 100vw;\n  height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap; }\n\n.search-box-label {\n  color: transparent; }\n\n.favorite-recipes-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap; }\n\n.box {\n  width: 50%;\n  height: 90%;\n  border-radius: 15px;\n  background-color: grey;\n  position: relative;\n  z-index: 9; }\n\n.container, .results-section, .favorites-results-section, .recipes-to-cook-results {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: flex-start;\n  height: 100%;\n  width: 100%; }\n\n.recipe {\n  margin-top: 50px;\n  border-radius: 10px;\n  height: 350px;\n  width: 250px;\n  background-color: white;\n  margin-right: 3vw;\n  display: inline-block;\n  opacity: 1;\n  cursor: pointer; }\n\n.recipe-image {\n  width: 100%;\n  height: 75%;\n  background-size: cover;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px; }\n\n.article-title {\n  width: auto;\n  border: none;\n  margin-top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 17px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  letter-spacing: 1px;\n  word-wrap: break-word;\n  text-align: center; }\n\n.favorites-wrapper {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center; }\n\n.favorites-search-box {\n  width: 145px;\n  height: 15px;\n  display: flex;\n  align-self: flex-start; }\n\n.full-recipe {\n  margin-top: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column; }\n\n.test, .test-two, .test-three {\n  width: 45%;\n  display: flex;\n  justify-content: flex-start;\n  font-family: 'Roboto', sans-serif; }\n\nli, p {\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px; }\n\nul {\n  list-style-type: none; }\n\n.cost {\n  margin: 20px 0px 0px 55px; }\n\naside {\n  margin-top: 10px;\n  margin-left: 100px;\n  width: 90%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center; }\n\n.tags {\n  width: 150px; }\n\n.add-favorite-btn, .add-recipe-btn {\n  font-family: 'Roboto', sans-serif;\n  background-color: #F0F1ED;\n  font-size: 14px;\n  width: 20%;\n  height: 25px;\n  border-radius: 5px;\n  border: solid #E23D26 1px;\n  box-shadow: 0;\n  border-style: solid;\n  margin-bottom: 10px; }\n\n.clicked {\n  border-color: green;\n  background-color: green;\n  opacity: 50%; }\n\n.hidden {\n  display: none; }\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sCAAsC;EACtC,YAAY,EAAA;;AAGd;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,WAAW,EAAA;;AAGb;EACE,aAAa;EACb,WAAW;EACX,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,mBAAmB,EAAA;;AAGrB;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,cAAc;EACd,gBAAgB,EAAA;;AAGlB;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,uBAAuB;EACvB,0BAA0B;EAC1B,kBAAkB,EAAA;;AAGpB;EACE,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,UAAU;EACV,gBAAgB;EAChB,eAAe,EAAA;;AAGjB;EACE,aAAa;EACb,kBAAkB,EAAA;;AAKpB;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,eAAe,EAAA;;AAGjB;EACE,kBAAkB,EAAA;;AAGpB;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe,EAAA;;AAGjB;EACE,UAAS;EACT,WAAW;EACX,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,UAAU,EAAA;;AAGZ;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,uBAAuB;EACvB,uBAAuB;EACvB,YAAY;EACZ,WAAW,EAAA;;AAGb;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,iBAAiB;EACjB,qBAAqB;EACrB,UAAU;EACV,eAAe,EAAA;;AAGjB;EACE,WAAW;EACX,WAAW;EACX,sBAAsB;EACtB,4BAA4B;EAC5B,6BAA6B,EAAA;;AAG/B;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,iCAAiC;EACjC,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB,EAAA;;AAGpB;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,mBAAmB;EACnB,uBAAuB,EAAA;;AAGzB;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,sBAAsB,EAAA;;AAGxB;EACE,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB,EAAA;;AAGxB;EACE,UAAU;EACV,aAAa;EACb,2BAA2B;EAC3B,iCAAiC,EAAA;;AAGnC;EACE,iCAAiC;EACjC,eAAe,EAAA;;AAGjB;EACI,qBAAqB,EAAA;;AAGzB;EACE,yBAAyB,EAAA;;AAG3B;EACE,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,uBAAuB;EACvB,mBAAmB,EAAA;;AAGrB;EACE,YAAY,EAAA;;AAGd;EACE,iCAAiC;EACjC,yBAAyB;EACzB,eAAe;EACf,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,mBAAmB,EAAA;;AAGrB;EACA,mBAAmB;EACnB,uBAAuB;EACvB,YAAY,EAAA;;AAGZ;EACE,aAAa,EAAA","sourcesContent":["* {\n  font-family: 'Kaisei HarunoUmi', serif;\n  color: black;\n}\n\nbody {\n  background-color: #F0F1ED;\n  width: 100vw;\n  height: 100vh;\n  margin: 0px;\n}\n\nheader {\n  height: 200px;;\n  width: 100%;\n  margin: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n}\n\nheader > h1 {\n  margin-top: 50px;\n  margin-bottom: 0px;\n  margin-left: 10px;\n  font-size: 10vh;\n  color: #E23D26;\n  font-weight: 700;\n}\n\nnav {\n  width: 90%;\n  height: 100%;\n  display: flex;\n  justify-content: space-around;\n  border-top: black solid;\n  border-bottom: black solid;\n  text-align: center;\n}\n\nnav > button {\n  border-radius: 5px;\n  border: none;\n  text-align: center;\n  font-size: 18px;\n  opacity: 1;\n  background: none;\n  cursor: pointer;\n}\n\nnav > form {\n  display: flex;\n  align-self: center;\n}\n\n\n\nmain {\n  width: 100vw;\n  height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n\n.search-box-label {\n  color: transparent;\n}\n\n.favorite-recipes-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.box {\n  width:50%;\n  height: 90%;\n  border-radius: 15px;\n  background-color: grey;\n  position: relative;\n  z-index: 9;\n}\n\n.container, .results-section, .favorites-results-section, .recipes-to-cook-results {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: flex-start;\n  height: 100%;\n  width: 100%;\n}\n\n.recipe {\n  margin-top: 50px;\n  border-radius: 10px;\n  height: 350px;\n  width: 250px;\n  background-color: white;\n  margin-right: 3vw;\n  display: inline-block;\n  opacity: 1;\n  cursor: pointer;\n}\n\n.recipe-image {\n  width: 100%;\n  height: 75%;\n  background-size: cover;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.article-title {\n  width: auto;\n  border: none;\n  margin-top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 17px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  letter-spacing: 1px;\n  word-wrap: break-word;\n  text-align: center;\n}\n\n.favorites-wrapper {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.favorites-search-box {\n  width: 145px;\n  height: 15px;\n  display: flex;\n  align-self: flex-start;\n}\n\n.full-recipe {\n  margin-top: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.test, .test-two, .test-three {\n  width: 45%;\n  display: flex;\n  justify-content: flex-start;\n  font-family: 'Roboto', sans-serif;\n}\n\nli, p {\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n}\n\nul {\n    list-style-type: none;\n}\n\n.cost {\n  margin: 20px 0px 0px 55px;\n}\n\naside {\n  margin-top: 10px;\n  margin-left: 100px;\n  width: 90%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.tags {\n  width: 150px;\n}\n\n.add-favorite-btn, .add-recipe-btn {\n  font-family: 'Roboto', sans-serif;\n  background-color: #F0F1ED;\n  font-size: 14px;\n  width: 20%;\n  height: 25px;\n  border-radius: 5px;\n  border: solid #E23D26 1px;\n  box-shadow: 0;\n  border-style: solid;\n  margin-bottom: 10px;\n}\n\n.clicked {\nborder-color: green;\nbackground-color: green;\nopacity: 50%;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/*! exports provided: fetchUsers, fetchRecipes, fetchIngredients */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecipes", function() { return fetchRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchIngredients", function() { return fetchIngredients; });
function fetchUsers() {
  return fetch("https://whats-cookin-api-data.herokuapp.com/api/v1/users")
    .then((response) => response.json())
    .catch(error => console.error(error))
}

function fetchRecipes() {
  return fetch("https://whats-cookin-api-data.herokuapp.com/api/v1/recipes")
    .then((response) => response.json())
    .catch(error => console.error(error))
}

function fetchIngredients() {
  return fetch("https://whats-cookin-api-data.herokuapp.com/api/v1/ingredients")
    .then((response) => response.json())
    .catch(error => console.error(error))
}




/***/ }),

/***/ "./src/classes/Ingredient.js":
/*!***********************************!*\
  !*** ./src/classes/Ingredient.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Ingredient {
  constructor(ingredient) {
    this.id = ingredient.id;
    this.amount = ingredient.quantity.amount;
    this.unit = ingredient.quantity.unit;
    this.name;
    this.cost;
  }

  retrieveNameAndCost(ingredientsData) {
    const ingredient = ingredientsData.find(ingredient => ingredient.id === this.id);
    this.name = ingredient.name;
    this.cost = ingredient.estimatedCostInCents * this.amount;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Ingredient);


/***/ }),

/***/ "./src/classes/Pantry.js":
/*!*******************************!*\
  !*** ./src/classes/Pantry.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Pantry {
  constructor(ingredients, userId) {
    this.ingredients = ingredients;
    this.neededIngredients = [];
    this.id = userId;
  }

  checkPantry(recipeIngredients) {
    const differences = recipeIngredients.reduce((previous, current) => {
      const matchingPantryIngredient = this.ingredients.find(ingredient => {
        return current.id === ingredient.ingredient
      })
      if (!matchingPantryIngredient) {
        previous.push({id: current.id, name: current.name, difference: current.amount, unit: current.unit})
      } else if (matchingPantryIngredient.amount < current.amount) {
        previous.push({id: current.id, name: current.name, difference: current.amount - matchingPantryIngredient.amount, unit: current.unit})
      }
      return previous;
    }, [])
    this.neededIngredients = differences;
    return differences;
  }

  buyIngredients() {
    this.neededIngredients.forEach(neededIngredient => {
      const matchingIngredient = this.ingredients.find(pantryIngredient => {
        return pantryIngredient.ingredient === neededIngredient.id
      })
      if (!matchingIngredient) {
        this.postToPantry(neededIngredient.id, neededIngredient.difference)
        return this.ingredients.push({ingredient: neededIngredient.id, amount: neededIngredient.difference})
      }
      this.ingredients.forEach(ingredient => {
        if (ingredient.ingredient === neededIngredient.id) {
          ingredient.amount += neededIngredient.difference
          this.postToPantry(neededIngredient.id, neededIngredient.difference)
        }
      })
    })
  }

  postToPantry(ingredientId, difference) {
    fetch("http://localhost:3001/api/v1/users", {
      method: 'POST',
      body: JSON.stringify({
        userID: this.id,
        ingredientID: ingredientId,
        ingredientModification: difference
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    .catch(err => console.log(err));
  }

  removeRecipeIngredients(recipeIngredients) {
    this.ingredients = this.ingredients.reduce((acc, pantryIng) => {
      const recipeIngredient = recipeIngredients.find(recipeIng => {
        return pantryIng.ingredient === recipeIng.id
      })
      if (recipeIngredient) {
        pantryIng.amount -= recipeIngredient.amount;
        const amountDifference = -recipeIngredient.amount;
        this.postToPantry(pantryIng.ingredient, amountDifference);
        if (pantryIng.amount > 0) {
          acc.push(pantryIng)
        }
        return acc;
      }
      acc.push(pantryIng);
      return acc;
    }, [])
  }

  //

  nameIngredients(recipeRepo) {
    return this.ingredients.map(ingredient => {
      const matchingIng = recipeRepo.ingredientsData.find(ingData => {
        return ingData.id === ingredient.ingredient
      })
      const unit = this.findIngredientUnit(ingredient, recipeRepo)
      return `<li>${ingredient.amount} ${unit} ${matchingIng.name}</li>`
    })
  }

  findIngredientUnit(ingredient, recipeRepo) {
    let ingredientUnit;
    recipeRepo.recipes.forEach(recipe => {
      recipe.ingredients.forEach(recipeIngredient => {
        if (recipeIngredient.id === ingredient.ingredient) {
          ingredientUnit = recipeIngredient.unit
        }
      })
    })
    return ingredientUnit
  }

  increaseIngredient(ingredientId, ingredientAmount) {
    ingredientId = parseInt(ingredientId);
    ingredientAmount = parseInt(ingredientAmount)
    const ingredientIds = this.ingredients.map(ingredient => ingredient.ingredient)
    if (!ingredientIds.includes(ingredientId)) {
      this.postToPantry(ingredientId, ingredientAmount)
      return this.ingredients.push({ingredient: ingredientId, amount: ingredientAmount})
    }
    this.ingredients.forEach(ingredient => {
      if(ingredient.ingredient === ingredientId) {
        this.postToPantry(ingredientId, ingredientAmount)
        ingredient.amount += ingredientAmount
      }
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Pantry);


/***/ }),

/***/ "./src/classes/Recipe.js":
/*!*******************************!*\
  !*** ./src/classes/Recipe.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ingredient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ingredient */ "./src/classes/Ingredient.js");


class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.cost;
  }

  getIngredientsInformation(ingredientsData) {
    this.ingredients.forEach(ingredient => ingredient.retrieveNameAndCost(ingredientsData));
  }

  findIngredientsName() {
    return this.ingredients.map(ingredient => ingredient.name);
  }

  getCost() {
    let total = 0;
    this.ingredients.forEach(ingredient => {
      total = total + ingredient.cost;
    })

    const dollars = Math.round(total / 100);
    const cents = Math.round(total % 100) / 100;
    const totalCost = (dollars + cents).toFixed(2)
    this.cost = `$ ${totalCost}`;
  }

  getInstructions() {
    return this.instructions;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Recipe);


/***/ }),

/***/ "./src/classes/RecipeRepository.js":
/*!*****************************************!*\
  !*** ./src/classes/RecipeRepository.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Recipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Recipe */ "./src/classes/Recipe.js");
/* harmony import */ var _Ingredient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ingredient */ "./src/classes/Ingredient.js");



class RecipeRepository {
  constructor(recipes, ingredientsData) {
    this.recipes = recipes;
    this.matchingRecipes;
    this.matchingTags;
    this.selectedTags = [];
    this.ingredientsData = ingredientsData;
  }

  addRecipes() {
    this.recipes = this.recipes.map(recipe => {
      const newRecipe = new _Recipe__WEBPACK_IMPORTED_MODULE_0__["default"](recipe);
      newRecipe.ingredients = recipe.ingredients.map(ingredient => new _Ingredient__WEBPACK_IMPORTED_MODULE_1__["default"](ingredient));
      return newRecipe;
    });
  }

  getRecipesInformation() {
    this.recipes.forEach(recipe => {
      recipe.getIngredientsInformation(this.ingredientsData);
    })
  }

  getRecipeCost() {
    this.recipes.forEach(recipe => {
      recipe.getCost();
    })
  }

  filterTags() {
    this.matchingTags = [];
    this.matchingRecipes.forEach(recipe => {
      recipe.tags.forEach(tag => {
        if (!this.matchingTags.includes(tag)) {
          this.matchingTags.push(tag);
        }
      })
    })
  }

  filterByTag() {
    let filteredRecipes = []
    this.selectedTags.forEach(selectedTag => {
      this.addToFilteredRecipe(selectedTag, filteredRecipes);
    });
    return filteredRecipes;
  }

  addToFilteredRecipe(selectedTag, filteredRecipes) {
    this.matchingRecipes.forEach(matchingRecipe => {
      if(matchingRecipe.tags.includes(selectedTag) && !filteredRecipes.includes(matchingRecipe)){
        filteredRecipes.push(matchingRecipe)
      }
    });
  }

  search(keywords, recipes) {
    this.matchingRecipes = [];
    keywords = keywords.split(' ');
    recipes.forEach(recipe => {
      this.checkNamesIngredientsAndTags(keywords, recipe);
    })
  }

  checkNamesIngredientsAndTags(keywords, recipe) {
    keywords.forEach(keyword => {
      this.checkNames(keyword, recipe);
      this.checkIngredients(keyword, recipe);
      this.checkTags(keyword, recipe);
    })
  }


  checkNames(keyword, recipe, containsRecipe) {
    if (recipe.name.toLowerCase().includes(keyword)
    && !this.matchingRecipes.includes(recipe)) {
      this.matchingRecipes.push(recipe);
    }
  }

  checkTags(keyword, recipe, containsRecipe) {
    if (recipe.tags.includes(keyword)
    && !this.matchingRecipes.includes(recipe)) {
      this.matchingRecipes.push(recipe)
    }
  }

  checkIngredients(keyword, recipe, containsRecipe) {
    const ingredientNames = recipe.ingredients.map(ingredient => ingredient.name)
    if (ingredientNames.join(' ').toLowerCase().includes(keyword)
    && !this.matchingRecipes.includes(recipe)) {
      this.matchingRecipes.push(recipe)
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (RecipeRepository);


/***/ }),

/***/ "./src/classes/User.js":
/*!*****************************!*\
  !*** ./src/classes/User.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pantry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pantry */ "./src/classes/Pantry.js");


class User {
  constructor(user) {
    this.name = user.name;
    this.id = user.id;
    this.pantry = user.pantry;
    this.favorites = [];
    this.recipesToCook = [];
  }

  addPantry() {
    this.pantry = new _Pantry__WEBPACK_IMPORTED_MODULE_0__["default"](this.pantry, this.id);
  }

  addToFavorites(recipe) {
    this.favorites.push(recipe);
  }

  removeFromFavorites(recipe) {
    this.favorites = this.favorites.filter(favorite => {
      return favorite !== recipe;
    });
  }

  addToRecipesToCook(recipe) {
    this.recipesToCook.push(recipe);
  }

  removeFromRecipesToCook(recipe) {
    this.recipesToCook = this.recipesToCook.filter(recipeToCook => {
      return recipeToCook !== recipe;
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const domUpdates = {
  addUserName(userName) {
    document.querySelector('.js-user-profile-btn').innerText = userName;
  },

  hide(...elements) {
    elements.forEach(element => {
      element.classList.add('hidden');
    })
  },

  show(...views) {
    views.forEach(view => view.classList.remove('hidden'));
  },

  fillIngredients(selectedRecipe) {
    selectedRecipe.ingredients.forEach(ingredient => {
      document.querySelector('.js-ingredients').innerHTML +=
      `<li>${ingredient.amount} ${ingredient.unit} ${ingredient.name}</li>`;
    });
  },

  fillInstructions(selectedRecipe) {
    selectedRecipe.instructions.forEach(instruction => {
      document.querySelector('.js-instructions').innerHTML +=
      `<li>${instruction.instruction}</li>`;
    });
  },

  updateBtnToClicked(selectedRecipe, user) {
    user.favorites.forEach(favoriteRecipe => {
      if (favoriteRecipe.id === selectedRecipe.id) {
        document.querySelector('.js-add-favorite-btn').classList.add('clicked');
      }
    })
    user.recipesToCook.forEach(recipeToCook => {
      if (recipeToCook.id === selectedRecipe.id) {
        document.querySelector('.js-add-recipe-btn').classList.add('clicked');
        this.fillDifferences(user.pantry.checkPantry(selectedRecipe.ingredients));
      }
    })
  },

  fillPantry(ingElms) {
    document.querySelector('.js-pantry-list').innerHTML = ""
    ingElms.forEach(elm => {
      document.querySelector('.js-pantry-list').innerHTML += elm
    })
  },

  fillIngredientDropdown(recipeRepo) {
    recipeRepo.ingredientsData.forEach(ingredient => {
      document.querySelector('.js-ingredients-dropdown').innerHTML += `
        <option id="${ingredient.id}">${ingredient.name}</option>
      `
    })
  },

  fillIngredientAmountDropdown() {
    for (let i = 0; i < 99; i++) {
      document.querySelector('.js-ingredients-amount-dropdown').innerHTML += `
        <option>${i + 1}</option>
      `
    }
  },

  fillPopout(selectedRecipe, user, popout) {
    popout.innerHTML =
    `<article class="full-recipe" id="${selectedRecipe.id}">
      <img src="${selectedRecipe.image}" alt="${selectedRecipe.name}">
      <h2>${selectedRecipe.name}</h2>
      <button class="add-favorite-btn js-add-favorite-btn">Add to Favorites</button>
      <button class="add-recipe-btn js-add-recipe-btn">Add to Recipes to Cook</button>
      <button class="make-recipe-btn js-make-recipe-btn hidden">Make this Recipe</button>
      <button class="buy-ingredients-btn js-buy-ingredients-btn hidden">Buy Ingredients</button>
      <div class="js-ingredients-needed-container hidden">
        <h3>To Make This Recipe You Need:</h3>
        <ul class="js-ingredients-needed-list"></ul>
      </div>
      <div class="test">
        <h3>Ingredients</h3>
        <ul class="js-ingredients"></ul>
      </div>
      <div class="test-two">
        <h3>Directions</h3>
        <ol class="js-instructions"></ol>
      </div>
      <div class="test-three">
        <h3>Cost</h3>
        <p class="cost js-cost">${selectedRecipe.cost}</p>
      </div>
    </article>`;
    this.updateBtnToClicked(selectedRecipe, user);
  },

  fillDifferences(ingredientsNeeded) {
    if (!ingredientsNeeded.length) {
      this.show(document.querySelector('.js-make-recipe-btn'));
      return;
    }
    this.show(document.querySelector('.js-ingredients-needed-container'))
    this.show(document.querySelector('.js-buy-ingredients-btn'))
    ingredientsNeeded.forEach(ingredientNeeded => {
      document.querySelector('.js-ingredients-needed-list').innerHTML +=
      `<li>${ingredientNeeded.name} ${ingredientNeeded.difference} ${ingredientNeeded.unit}</li>`;
    });
  },

  displayRecipes(recipes, section) {
    if (!recipes.length) {
      section.innerHTML =
      `<p>We couldn't find any recipes that matches your search criteria.</p>`
    } else {
      section.innerHTML = '';
      recipes.forEach(recipe => {
        const recipeCard =
        `<article class="recipe ${recipe.id}">
        <img class="recipe-image ${recipe.id}" src="${recipe.image}" alt="plate of ${recipe.name}">
        <h2 class="article-title card-title ${recipe.id}">${recipe.name}</h2>
        </article>`;
        section.innerHTML += recipeCard;
      });
    }
  },

  determineClickedBtn(btn) {
    if (btn.matches('.js-add-favorite-btn')) {
      btn.classList.toggle('clicked')
      return 'Favorites'
    } else if (btn.matches('.js-add-recipe-btn')) {
      btn.classList.toggle('clicked')
      return 'RTC'
    } else if (btn.matches('.js-buy-ingredients-btn')) {
      this.hide(btn, document.querySelector('.js-ingredients-needed-container'));
      this.show(document.querySelector('.js-make-recipe-btn'))
      return 'Buy Now'
    } else if (btn.matches('.js-make-recipe-btn')) {

      return 'Make Recipe'
    }
  },

  displayNoRecipeMsg(section) {
    section.innerHTML =
    `<p>You haven't added any recipes yet</p>`
  },

  displayTags(tagsSection, recipeRepo) {
    tagsSection.innerHTML = ''
    recipeRepo.matchingTags.forEach(tag => {
      const tagCard =
      `<label class="tags">
      <input class="tag" type="checkbox" name="${tag}">${tag}
      </label>`;
      tagsSection.innerHTML += tagCard;
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiCalls */ "./src/apiCalls.js");
/* harmony import */ var _classes_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/User */ "./src/classes/User.js");
/* harmony import */ var _classes_RecipeRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/RecipeRepository */ "./src/classes/RecipeRepository.js");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");





let recipeRepo;
let user;

const favoritesBtn = document.querySelector('.js-favorites-btn');
const favoritesResultsSection = document.querySelector('.favorites-results-section');
const favoritesSearchBox = document.querySelector('.js-favorites-search-box');
const favoritesSection = document.querySelector('.js-favorites-section');
const favoritesTagsSection = document.querySelector('.js-favorites-tags-section')
const favoritesWrapper = document.querySelector('.js-favorites-wrapper');
const homeSection = document.querySelector('.js-home-section');
const homeBtn = document.querySelector('.js-home-btn');
const mainSearchBox = document.querySelector('.js-search-box');
const popout = document.querySelector('.js-recipe-popout');
const recipesToCookSection = document.querySelector('.js-recipes-to-cook-section');
const recipesToCookBtn = document.querySelector('.js-recipes-to-cook-btn');
const recipesToCookResults = document.querySelector('.js-recipes-to-cook-results')
const resultsSection = document.querySelector('.js-results-section');
const searchSection = document.querySelector('.js-search-section');
const searchTagsSection = document.querySelector('.js-tags-section');
const userProfileBtn = document.querySelector('.js-user-profile-btn');
const userPantrySection = document.querySelector('.js-user-pantry');
const addIngredientsForm = document.querySelector('.js-add-to-pantry');

window.addEventListener('load', getApis)
favoritesBtn.addEventListener('click', showFavorites);
favoritesSearchBox.addEventListener('keypress', function(event) {
  showResults(event, favoritesResultsSection, favoritesSearchBox,
    user.favorites, favoritesTagsSection
  );
})
favoritesSection.addEventListener('click', displayPopout);
favoritesTagsSection.addEventListener('click', function(event) {
  filterResultsByTag(event, favoritesResultsSection);
});
homeBtn.addEventListener('click', showHome);
homeSection.addEventListener('click', displayPopout);
popout.addEventListener('click', addFavoriteOrRecipeToCook);
recipesToCookBtn.addEventListener('click', showRecipesToCook);
recipesToCookSection.addEventListener('click', displayPopout);
resultsSection.addEventListener('click', displayPopout);
mainSearchBox.addEventListener('keypress', function(event) {
  showResults(event, resultsSection, mainSearchBox, recipeRepo.recipes,
    searchTagsSection
  );
});
searchTagsSection.addEventListener('click', function(event) {
  filterResultsByTag(event, resultsSection);
});
userProfileBtn.addEventListener('click', showPantry);
addIngredientsForm.addEventListener('submit', addIngredient);

function addIngredient(event) {
  event.preventDefault()
  const dropdown = document.querySelector(".js-ingredients-dropdown");
  const ingredientId = dropdown.options[dropdown.selectedIndex].id;
  const ingredientAmount = document.querySelector('.js-ingredients-amount-dropdown').value
  user.pantry.increaseIngredient(ingredientId, ingredientAmount)
  showPantry();
}

function addTag(tag, section) {
  recipeRepo.selectedTags.push(tag);
  const filteredRecipes = recipeRepo.filterByTag();
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayRecipes(filteredRecipes, section);
}

function displayPopout(event) {
  if (!event.target.parentNode.classList.contains('recipe')
    && !event.target.classList.contains('recipe')) {
    return;
  }
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].hide(homeSection, favoritesWrapper, recipesToCookSection, searchSection, popout);
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].show(popout);
  const selectedRecipe = recipeRepo.recipes.find(recipe => {
    return event.target.classList.contains(recipe.id)
  });

  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].fillPopout(selectedRecipe, user, popout);
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].fillIngredients(selectedRecipe);
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].fillInstructions(selectedRecipe);
}

function displayResults(keywords, section, recipes, tagsSection) {
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].hide(homeSection, favoritesWrapper, recipesToCookSection, searchSection, popout);
  if (section === favoritesResultsSection) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].show(favoritesWrapper)
  } else {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].show(searchSection);
  }
  recipeRepo.search(keywords, recipes);
  recipeRepo.filterTags();
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayTags(tagsSection, recipeRepo);
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayRecipes(recipeRepo.matchingRecipes, section || resultsSection);
}

function filterResultsByTag(event, section) {
  const checkbox = event.target;
  const tag = checkbox.name;
  if (!checkbox.matches('[type="checkbox"]')) {
    return;
  } else if (checkbox.checked) {
    addTag(tag, section);
  } else {
    removeTag(tag, section);
  }
}

async function getApis() {
 let usersData = await Object(_apiCalls__WEBPACK_IMPORTED_MODULE_1__["fetchUsers"])();
 let ingredientsData = await Object(_apiCalls__WEBPACK_IMPORTED_MODULE_1__["fetchIngredients"])();
 let recipesData = await Object(_apiCalls__WEBPACK_IMPORTED_MODULE_1__["fetchRecipes"])();
  const randomUsersDataIndex = Math.round(Math.random() * (usersData.length + 1));
  user = new _classes_User__WEBPACK_IMPORTED_MODULE_2__["default"](usersData[randomUsersDataIndex]);
  user.addPantry();
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].addUserName(user.name);
  recipeRepo = new _classes_RecipeRepository__WEBPACK_IMPORTED_MODULE_3__["default"](recipesData, ingredientsData);
  recipeRepo.addRecipes();
  recipeRepo.getRecipesInformation();
  recipeRepo.getRecipeCost();
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayRecipes(recipeRepo.recipes, homeSection);
}

function addFavoriteOrRecipeToCook(event) {
  event.preventDefault();
  if (!event.target.matches('button')) {
    return;
  }
  const btn = event.target;
  const recipeId = btn.parentNode.id;
  const recipe = recipeRepo.recipes.find(recipe => recipe.id === parseInt(recipeId));
  const clickedBtn = _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].determineClickedBtn(btn)
  if (clickedBtn === 'Favorites') {
    toggleFavorites(recipe)
  } else if (clickedBtn === 'RTC') {
    toggleRecipesToCook(recipe)
  } else if (clickedBtn === 'Buy Now') {
    user.pantry.buyIngredients();
  } else if (clickedBtn === 'Make Recipe') {
    user.recipesToCook = user.recipesToCook.filter(recipeToCook => {
      return recipeToCook.id !== parseInt(recipeId)
    })
    showRecipesToCook()
    user.pantry.removeRecipeIngredients(recipe.ingredients)
  }
}

function removeTag(tag, section) {
  recipeRepo.selectedTags = recipeRepo.selectedTags.filter(tag => {
    return tag !== tag;
  })
  if (recipeRepo.selectedTags.length) {
    const filteredRecipes = recipeRepo.filterByTag();
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayRecipes(filteredRecipes, section);
  }
  
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayRecipes(recipeRepo.matchingRecipes, section);
}

function showFavorites() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].hide(homeSection, favoritesWrapper, recipesToCookSection, searchSection, popout, userPantrySection);
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].show(favoritesWrapper);
  recipeRepo.matchingRecipes = user.favorites
  recipeRepo.filterTags()
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayTags(favoritesTagsSection, recipeRepo)
  if (!user.favorites.length) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayNoRecipeMsg(favoritesResultsSection);
    return;
  }
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayRecipes(user.favorites, favoritesResultsSection);
}

function showHome() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].hide(homeSection, favoritesWrapper, recipesToCookSection, searchSection, popout, userPantrySection);
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].show(homeSection);
}

function showRecipesToCook() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].hide(homeSection, favoritesWrapper, recipesToCookSection, searchSection, popout, userPantrySection);
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].show(recipesToCookSection);
  if (!user.recipesToCook.length) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayNoRecipeMsg(recipesToCookResults)
    return
  }
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayRecipes(user.recipesToCook, recipesToCookResults)
}

function showResults(event, section, searchBox, recipes, tagsSection) {
  if (event.key === 'Enter') {
    event.preventDefault();
    displayResults(searchBox.value.toLowerCase(), section, recipes, tagsSection);
  }
}

function showPantry() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].hide(homeSection, favoritesWrapper, recipesToCookSection, searchSection, popout);
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].show(userPantrySection);
  const pantry = user.pantry.nameIngredients(recipeRepo)
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].fillPantry(pantry)
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].fillIngredientDropdown(recipeRepo)
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].fillIngredientAmountDropdown()
}

function toggleFavorites(recipe) {
  if (!user.favorites.includes(recipe)) {
    user.addToFavorites(recipe);
  } else {
    user.removeFromFavorites(recipe);
  }
}

function toggleRecipesToCook(recipe) {
  if (!user.recipesToCook.includes(recipe)) {
    user.addToRecipesToCook(recipe);
  } else {
    user.removeFromRecipesToCook(recipe);
  }
}


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUNhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0luZ3JlZGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvUGFudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1JlY2lwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9SZWNpcGVSZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/MjNkZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztR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QUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsK0VBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNuR2hDO0FBQUE7QUFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsK0NBQU07QUFDNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRWUsbUVBQUksRUFBQzs7Ozs7Ozs7Ozs7OztBQ3BDcEI7QUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0JBQWtCLEdBQUcsZ0JBQWdCLEdBQUcsZ0JBQWdCO0FBQ3JFLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1EQUFVO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUksbURBQVU7QUFDZDs7QUFFQSxFQUFFLG1EQUFVO0FBQ1o7O0FBRUE7QUFDQSxFQUFFLG1EQUFVO0FBQ1osRUFBRSxtREFBVTtBQUNaO0FBQ0E7QUFDQSxFQUFFLG1EQUFVO0FBQ1o7QUFDQSxJQUFJLG1EQUFVO0FBQ2Q7QUFDQTtBQUNBLEVBQUUsbURBQVU7QUFDWjs7QUFFQTtBQUNBLEVBQUUsbURBQVU7QUFDWixFQUFFLG1EQUFVO0FBQ1o7O0FBRUE7QUFDQSxFQUFFLG1EQUFVO0FBQ1osRUFBRSxtREFBVTtBQUNaO0FBQ0EsSUFBSSxtREFBVTtBQUNkO0FBQ0E7QUFDQSxFQUFFLG1EQUFVO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxtREFBVTtBQUNaLEVBQUUsbURBQVU7QUFDWjtBQUNBLEVBQUUsbURBQVU7QUFDWixFQUFFLG1EQUFVO0FBQ1osRUFBRSxtREFBVTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdOQTtBQUFBO0FBQUE7QUFBQTtBQUF5RjtBQUN6RixZQUFnSTs7QUFFaEk7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJVCwyTEFBTyxhQUFhLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zY3JpcHRzLmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGZvbnQtZmFtaWx5OiAnS2Fpc2VpIEhhcnVub1VtaScsIHNlcmlmO1xcbiAgY29sb3I6IGJsYWNrOyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMUVEO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMHB4OyB9XFxuXFxuaGVhZGVyIHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbmhlYWRlciA+IGgxIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTB2aDtcXG4gIGNvbG9yOiAjRTIzRDI2O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxcblxcbm5hdiB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYm9yZGVyLXRvcDogYmxhY2sgc29saWQ7XFxuICBib3JkZXItYm90dG9tOiBibGFjayBzb2xpZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbm5hdiA+IGJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBvcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbm5hdiA+IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxcblxcbm1haW4ge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7IH1cXG5cXG4uc2VhcmNoLWJveC1sYWJlbCB7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4uZmF2b3JpdGUtcmVjaXBlcy1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwOyB9XFxuXFxuLmJveCB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDk7IH1cXG5cXG4uY29udGFpbmVyLCAucmVzdWx0cy1zZWN0aW9uLCAuZmF2b3JpdGVzLXJlc3VsdHMtc2VjdGlvbiwgLnJlY2lwZXMtdG8tY29vay1yZXN1bHRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnJlY2lwZSB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1yaWdodDogM3Z3O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgb3BhY2l0eTogMTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5yZWNpcGUtaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDc1JTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7IH1cXG5cXG4uYXJ0aWNsZS10aXRsZSB7XFxuICB3aWR0aDogYXV0bztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmZhdm9yaXRlcy13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuLmZhdm9yaXRlcy1zZWFyY2gtYm94IHtcXG4gIHdpZHRoOiAxNDVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyB9XFxuXFxuLmZ1bGwtcmVjaXBlIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi50ZXN0LCAudGVzdC10d28sIC50ZXN0LXRocmVlIHtcXG4gIHdpZHRoOiA0NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmOyB9XFxuXFxubGksIHAge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4OyB9XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxuXFxuLmNvc3Qge1xcbiAgbWFyZ2luOiAyMHB4IDBweCAwcHggNTVweDsgfVxcblxcbmFzaWRlIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4udGFncyB7XFxuICB3aWR0aDogMTUwcHg7IH1cXG5cXG4uYWRkLWZhdm9yaXRlLWJ0biwgLmFkZC1yZWNpcGUtYnRuIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYxRUQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB3aWR0aDogMjAlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAjRTIzRDI2IDFweDtcXG4gIGJveC1zaGFkb3c6IDA7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcblxcbi5jbGlja2VkIHtcXG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIG9wYWNpdHk6IDUwJTsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0NBQXNDO0VBQ3RDLFlBQVksRUFBQTs7QUFHZDtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtF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eTogJ0thaXNlaSBIYXJ1bm9VbWknLCBzZXJpZjtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMUVEO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgaGVpZ2h0OiAyMDBweDs7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyID4gaDEge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxMHZoO1xcbiAgY29sb3I6ICNFMjNEMjY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5uYXYge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJvcmRlci10b3A6IGJsYWNrIHNvbGlkO1xcbiAgYm9yZGVyLWJvdHRvbTogYmxhY2sgc29saWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbm5hdiA+IGJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBvcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubmF2ID4gZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5tYWluIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogODB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uc2VhcmNoLWJveC1sYWJlbCB7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5mYXZvcml0ZS1yZWNpcGVzLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ib3gge1xcbiAgd2lkdGg6NTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDk7XFxufVxcblxcbi5jb250YWluZXIsIC5yZXN1bHRzLXNlY3Rpb24sIC5mYXZvcml0ZXMtcmVzdWx0cy1zZWN0aW9uLCAucmVjaXBlcy10by1jb29rLXJlc3VsdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZWNpcGUge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tcmlnaHQ6IDN2dztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG9wYWNpdHk6IDE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZWNpcGUtaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDc1JTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5hcnRpY2xlLXRpdGxlIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mYXZvcml0ZXMtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZhdm9yaXRlcy1zZWFyY2gtYm94IHtcXG4gIHdpZHRoOiAxNDVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uZnVsbC1yZWNpcGUge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGVzdCwgLnRlc3QtdHdvLCAudGVzdC10aHJlZSB7XFxuICB3aWR0aDogNDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxubGksIHAge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmNvc3Qge1xcbiAgbWFyZ2luOiAyMHB4IDBweCAwcHggNTVweDtcXG59XFxuXFxuYXNpZGUge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhZ3Mge1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4uYWRkLWZhdm9yaXRlLWJ0biwgLmFkZC1yZWNpcGUtYnRuIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYxRUQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB3aWR0aDogMjAlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAjRTIzRDI2IDFweDtcXG4gIGJveC1zaGFkb3c6IDA7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmNsaWNrZWQge1xcbmJvcmRlci1jb2xvcjogZ3JlZW47XFxuYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxub3BhY2l0eTogNTAlO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJmdW5jdGlvbiBmZXRjaFVzZXJzKCkge1xuICByZXR1cm4gZmV0Y2goXCJodHRwczovL3doYXRzLWNvb2tpbi1hcGktZGF0YS5oZXJva3VhcHAuY29tL2FwaS92MS91c2Vyc1wiKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hSZWNpcGVzKCkge1xuICByZXR1cm4gZmV0Y2goXCJodHRwczovL3doYXRzLWNvb2tpbi1hcGktZGF0YS5oZXJva3VhcHAuY29tL2FwaS92MS9yZWNpcGVzXCIpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKVxufVxuXG5mdW5jdGlvbiBmZXRjaEluZ3JlZGllbnRzKCkge1xuICByZXR1cm4gZmV0Y2goXCJodHRwczovL3doYXRzLWNvb2tpbi1hcGktZGF0YS5oZXJva3VhcHAuY29tL2FwaS92MS9pbmdyZWRpZW50c1wiKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSlcbn1cblxuZXhwb3J0IHtcbiAgZmV0Y2hVc2VycyxcbiAgZmV0Y2hSZWNpcGVzLFxuICBmZXRjaEluZ3JlZGllbnRzXG59XG4iLCJjbGFzcyBJbmdyZWRpZW50IHtcbiAgY29uc3RydWN0b3IoaW5ncmVkaWVudCkge1xuICAgIHRoaXMuaWQgPSBpbmdyZWRpZW50LmlkO1xuICAgIHRoaXMuYW1vdW50ID0gaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQ7XG4gICAgdGhpcy51bml0ID0gaW5ncmVkaWVudC5xdWFudGl0eS51bml0O1xuICAgIHRoaXMubmFtZTtcbiAgICB0aGlzLmNvc3Q7XG4gIH1cblxuICByZXRyaWV2ZU5hbWVBbmRDb3N0KGluZ3JlZGllbnRzRGF0YSkge1xuICAgIGNvbnN0IGluZ3JlZGllbnQgPSBpbmdyZWRpZW50c0RhdGEuZmluZChpbmdyZWRpZW50ID0+IGluZ3JlZGllbnQuaWQgPT09IHRoaXMuaWQpO1xuICAgIHRoaXMubmFtZSA9IGluZ3JlZGllbnQubmFtZTtcbiAgICB0aGlzLmNvc3QgPSBpbmdyZWRpZW50LmVzdGltYXRlZENvc3RJbkNlbnRzICogdGhpcy5hbW91bnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5ncmVkaWVudDtcbiIsImNsYXNzIFBhbnRyeSB7XG4gIGNvbnN0cnVjdG9yKGluZ3JlZGllbnRzLCB1c2VySWQpIHtcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gaW5ncmVkaWVudHM7XG4gICAgdGhpcy5uZWVkZWRJbmdyZWRpZW50cyA9IFtdO1xuICAgIHRoaXMuaWQgPSB1c2VySWQ7XG4gIH1cblxuICBjaGVja1BhbnRyeShyZWNpcGVJbmdyZWRpZW50cykge1xuICAgIGNvbnN0IGRpZmZlcmVuY2VzID0gcmVjaXBlSW5ncmVkaWVudHMucmVkdWNlKChwcmV2aW91cywgY3VycmVudCkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hpbmdQYW50cnlJbmdyZWRpZW50ID0gdGhpcy5pbmdyZWRpZW50cy5maW5kKGluZ3JlZGllbnQgPT4ge1xuICAgICAgICByZXR1cm4gY3VycmVudC5pZCA9PT0gaW5ncmVkaWVudC5pbmdyZWRpZW50XG4gICAgICB9KVxuICAgICAgaWYgKCFtYXRjaGluZ1BhbnRyeUluZ3JlZGllbnQpIHtcbiAgICAgICAgcHJldmlvdXMucHVzaCh7aWQ6IGN1cnJlbnQuaWQsIG5hbWU6IGN1cnJlbnQubmFtZSwgZGlmZmVyZW5jZTogY3VycmVudC5hbW91bnQsIHVuaXQ6IGN1cnJlbnQudW5pdH0pXG4gICAgICB9IGVsc2UgaWYgKG1hdGNoaW5nUGFudHJ5SW5ncmVkaWVudC5hbW91bnQgPCBjdXJyZW50LmFtb3VudCkge1xuICAgICAgICBwcmV2aW91cy5wdXNoKHtpZDogY3VycmVudC5pZCwgbmFtZTogY3VycmVudC5uYW1lLCBkaWZmZXJlbmNlOiBjdXJyZW50LmFtb3VudCAtIG1hdGNoaW5nUGFudHJ5SW5ncmVkaWVudC5hbW91bnQsIHVuaXQ6IGN1cnJlbnQudW5pdH0pXG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldmlvdXM7XG4gICAgfSwgW10pXG4gICAgdGhpcy5uZWVkZWRJbmdyZWRpZW50cyA9IGRpZmZlcmVuY2VzO1xuICAgIHJldHVybiBkaWZmZXJlbmNlcztcbiAgfVxuXG4gIGJ1eUluZ3JlZGllbnRzKCkge1xuICAgIHRoaXMubmVlZGVkSW5ncmVkaWVudHMuZm9yRWFjaChuZWVkZWRJbmdyZWRpZW50ID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoaW5nSW5ncmVkaWVudCA9IHRoaXMuaW5ncmVkaWVudHMuZmluZChwYW50cnlJbmdyZWRpZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIHBhbnRyeUluZ3JlZGllbnQuaW5ncmVkaWVudCA9PT0gbmVlZGVkSW5ncmVkaWVudC5pZFxuICAgICAgfSlcbiAgICAgIGlmICghbWF0Y2hpbmdJbmdyZWRpZW50KSB7XG4gICAgICAgIHRoaXMucG9zdFRvUGFudHJ5KG5lZWRlZEluZ3JlZGllbnQuaWQsIG5lZWRlZEluZ3JlZGllbnQuZGlmZmVyZW5jZSlcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5ncmVkaWVudHMucHVzaCh7aW5ncmVkaWVudDogbmVlZGVkSW5ncmVkaWVudC5pZCwgYW1vdW50OiBuZWVkZWRJbmdyZWRpZW50LmRpZmZlcmVuY2V9KVxuICAgICAgfVxuICAgICAgdGhpcy5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgICBpZiAoaW5ncmVkaWVudC5pbmdyZWRpZW50ID09PSBuZWVkZWRJbmdyZWRpZW50LmlkKSB7XG4gICAgICAgICAgaW5ncmVkaWVudC5hbW91bnQgKz0gbmVlZGVkSW5ncmVkaWVudC5kaWZmZXJlbmNlXG4gICAgICAgICAgdGhpcy5wb3N0VG9QYW50cnkobmVlZGVkSW5ncmVkaWVudC5pZCwgbmVlZGVkSW5ncmVkaWVudC5kaWZmZXJlbmNlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBwb3N0VG9QYW50cnkoaW5ncmVkaWVudElkLCBkaWZmZXJlbmNlKSB7XG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3VzZXJzXCIsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VySUQ6IHRoaXMuaWQsXG4gICAgICAgIGluZ3JlZGllbnRJRDogaW5ncmVkaWVudElkLFxuICAgICAgICBpbmdyZWRpZW50TW9kaWZpY2F0aW9uOiBkaWZmZXJlbmNlXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9XG5cbiAgcmVtb3ZlUmVjaXBlSW5ncmVkaWVudHMocmVjaXBlSW5ncmVkaWVudHMpIHtcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gdGhpcy5pbmdyZWRpZW50cy5yZWR1Y2UoKGFjYywgcGFudHJ5SW5nKSA9PiB7XG4gICAgICBjb25zdCByZWNpcGVJbmdyZWRpZW50ID0gcmVjaXBlSW5ncmVkaWVudHMuZmluZChyZWNpcGVJbmcgPT4ge1xuICAgICAgICByZXR1cm4gcGFudHJ5SW5nLmluZ3JlZGllbnQgPT09IHJlY2lwZUluZy5pZFxuICAgICAgfSlcbiAgICAgIGlmIChyZWNpcGVJbmdyZWRpZW50KSB7XG4gICAgICAgIHBhbnRyeUluZy5hbW91bnQgLT0gcmVjaXBlSW5ncmVkaWVudC5hbW91bnQ7XG4gICAgICAgIGNvbnN0IGFtb3VudERpZmZlcmVuY2UgPSAtcmVjaXBlSW5ncmVkaWVudC5hbW91bnQ7XG4gICAgICAgIHRoaXMucG9zdFRvUGFudHJ5KHBhbnRyeUluZy5pbmdyZWRpZW50LCBhbW91bnREaWZmZXJlbmNlKTtcbiAgICAgICAgaWYgKHBhbnRyeUluZy5hbW91bnQgPiAwKSB7XG4gICAgICAgICAgYWNjLnB1c2gocGFudHJ5SW5nKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG4gICAgICBhY2MucHVzaChwYW50cnlJbmcpO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSlcbiAgfVxuXG4gIC8vXG5cbiAgbmFtZUluZ3JlZGllbnRzKHJlY2lwZVJlcG8pIHtcbiAgICByZXR1cm4gdGhpcy5pbmdyZWRpZW50cy5tYXAoaW5ncmVkaWVudCA9PiB7XG4gICAgICBjb25zdCBtYXRjaGluZ0luZyA9IHJlY2lwZVJlcG8uaW5ncmVkaWVudHNEYXRhLmZpbmQoaW5nRGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBpbmdEYXRhLmlkID09PSBpbmdyZWRpZW50LmluZ3JlZGllbnRcbiAgICAgIH0pXG4gICAgICBjb25zdCB1bml0ID0gdGhpcy5maW5kSW5ncmVkaWVudFVuaXQoaW5ncmVkaWVudCwgcmVjaXBlUmVwbylcbiAgICAgIHJldHVybiBgPGxpPiR7aW5ncmVkaWVudC5hbW91bnR9ICR7dW5pdH0gJHttYXRjaGluZ0luZy5uYW1lfTwvbGk+YFxuICAgIH0pXG4gIH1cblxuICBmaW5kSW5ncmVkaWVudFVuaXQoaW5ncmVkaWVudCwgcmVjaXBlUmVwbykge1xuICAgIGxldCBpbmdyZWRpZW50VW5pdDtcbiAgICByZWNpcGVSZXBvLnJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgcmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2gocmVjaXBlSW5ncmVkaWVudCA9PiB7XG4gICAgICAgIGlmIChyZWNpcGVJbmdyZWRpZW50LmlkID09PSBpbmdyZWRpZW50LmluZ3JlZGllbnQpIHtcbiAgICAgICAgICBpbmdyZWRpZW50VW5pdCA9IHJlY2lwZUluZ3JlZGllbnQudW5pdFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIGluZ3JlZGllbnRVbml0XG4gIH1cblxuICBpbmNyZWFzZUluZ3JlZGllbnQoaW5ncmVkaWVudElkLCBpbmdyZWRpZW50QW1vdW50KSB7XG4gICAgaW5ncmVkaWVudElkID0gcGFyc2VJbnQoaW5ncmVkaWVudElkKTtcbiAgICBpbmdyZWRpZW50QW1vdW50ID0gcGFyc2VJbnQoaW5ncmVkaWVudEFtb3VudClcbiAgICBjb25zdCBpbmdyZWRpZW50SWRzID0gdGhpcy5pbmdyZWRpZW50cy5tYXAoaW5ncmVkaWVudCA9PiBpbmdyZWRpZW50LmluZ3JlZGllbnQpXG4gICAgaWYgKCFpbmdyZWRpZW50SWRzLmluY2x1ZGVzKGluZ3JlZGllbnRJZCkpIHtcbiAgICAgIHRoaXMucG9zdFRvUGFudHJ5KGluZ3JlZGllbnRJZCwgaW5ncmVkaWVudEFtb3VudClcbiAgICAgIHJldHVybiB0aGlzLmluZ3JlZGllbnRzLnB1c2goe2luZ3JlZGllbnQ6IGluZ3JlZGllbnRJZCwgYW1vdW50OiBpbmdyZWRpZW50QW1vdW50fSlcbiAgICB9XG4gICAgdGhpcy5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgaWYoaW5ncmVkaWVudC5pbmdyZWRpZW50ID09PSBpbmdyZWRpZW50SWQpIHtcbiAgICAgICAgdGhpcy5wb3N0VG9QYW50cnkoaW5ncmVkaWVudElkLCBpbmdyZWRpZW50QW1vdW50KVxuICAgICAgICBpbmdyZWRpZW50LmFtb3VudCArPSBpbmdyZWRpZW50QW1vdW50XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYW50cnk7XG4iLCJpbXBvcnQgSW5ncmVkaWVudCBmcm9tICcuL0luZ3JlZGllbnQnO1xuXG5jbGFzcyBSZWNpcGUge1xuICBjb25zdHJ1Y3RvcihyZWNpcGUpIHtcbiAgICB0aGlzLmlkID0gcmVjaXBlLmlkO1xuICAgIHRoaXMuaW1hZ2UgPSByZWNpcGUuaW1hZ2U7XG4gICAgdGhpcy5pbmdyZWRpZW50cztcbiAgICB0aGlzLmluc3RydWN0aW9ucyA9IHJlY2lwZS5pbnN0cnVjdGlvbnM7XG4gICAgdGhpcy5uYW1lID0gcmVjaXBlLm5hbWU7XG4gICAgdGhpcy50YWdzID0gcmVjaXBlLnRhZ3M7XG4gICAgdGhpcy5jb3N0O1xuICB9XG5cbiAgZ2V0SW5ncmVkaWVudHNJbmZvcm1hdGlvbihpbmdyZWRpZW50c0RhdGEpIHtcbiAgICB0aGlzLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiBpbmdyZWRpZW50LnJldHJpZXZlTmFtZUFuZENvc3QoaW5ncmVkaWVudHNEYXRhKSk7XG4gIH1cblxuICBmaW5kSW5ncmVkaWVudHNOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmluZ3JlZGllbnRzLm1hcChpbmdyZWRpZW50ID0+IGluZ3JlZGllbnQubmFtZSk7XG4gIH1cblxuICBnZXRDb3N0KCkge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgdGhpcy5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgdG90YWwgPSB0b3RhbCArIGluZ3JlZGllbnQuY29zdDtcbiAgICB9KVxuXG4gICAgY29uc3QgZG9sbGFycyA9IE1hdGgucm91bmQodG90YWwgLyAxMDApO1xuICAgIGNvbnN0IGNlbnRzID0gTWF0aC5yb3VuZCh0b3RhbCAlIDEwMCkgLyAxMDA7XG4gICAgY29uc3QgdG90YWxDb3N0ID0gKGRvbGxhcnMgKyBjZW50cykudG9GaXhlZCgyKVxuICAgIHRoaXMuY29zdCA9IGAkICR7dG90YWxDb3N0fWA7XG4gIH1cblxuICBnZXRJbnN0cnVjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdHJ1Y3Rpb25zO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZTtcbiIsImltcG9ydCBSZWNpcGUgZnJvbSAnLi9SZWNpcGUnO1xuaW1wb3J0IEluZ3JlZGllbnQgZnJvbSAnLi9JbmdyZWRpZW50JztcblxuY2xhc3MgUmVjaXBlUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHJlY2lwZXMsIGluZ3JlZGllbnRzRGF0YSkge1xuICAgIHRoaXMucmVjaXBlcyA9IHJlY2lwZXM7XG4gICAgdGhpcy5tYXRjaGluZ1JlY2lwZXM7XG4gICAgdGhpcy5tYXRjaGluZ1RhZ3M7XG4gICAgdGhpcy5zZWxlY3RlZFRhZ3MgPSBbXTtcbiAgICB0aGlzLmluZ3JlZGllbnRzRGF0YSA9IGluZ3JlZGllbnRzRGF0YTtcbiAgfVxuXG4gIGFkZFJlY2lwZXMoKSB7XG4gICAgdGhpcy5yZWNpcGVzID0gdGhpcy5yZWNpcGVzLm1hcChyZWNpcGUgPT4ge1xuICAgICAgY29uc3QgbmV3UmVjaXBlID0gbmV3IFJlY2lwZShyZWNpcGUpO1xuICAgICAgbmV3UmVjaXBlLmluZ3JlZGllbnRzID0gcmVjaXBlLmluZ3JlZGllbnRzLm1hcChpbmdyZWRpZW50ID0+IG5ldyBJbmdyZWRpZW50KGluZ3JlZGllbnQpKTtcbiAgICAgIHJldHVybiBuZXdSZWNpcGU7XG4gICAgfSk7XG4gIH1cblxuICBnZXRSZWNpcGVzSW5mb3JtYXRpb24oKSB7XG4gICAgdGhpcy5yZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIHJlY2lwZS5nZXRJbmdyZWRpZW50c0luZm9ybWF0aW9uKHRoaXMuaW5ncmVkaWVudHNEYXRhKTtcbiAgICB9KVxuICB9XG5cbiAgZ2V0UmVjaXBlQ29zdCgpIHtcbiAgICB0aGlzLnJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgcmVjaXBlLmdldENvc3QoKTtcbiAgICB9KVxuICB9XG5cbiAgZmlsdGVyVGFncygpIHtcbiAgICB0aGlzLm1hdGNoaW5nVGFncyA9IFtdO1xuICAgIHRoaXMubWF0Y2hpbmdSZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIHJlY2lwZS50YWdzLmZvckVhY2godGFnID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLm1hdGNoaW5nVGFncy5pbmNsdWRlcyh0YWcpKSB7XG4gICAgICAgICAgdGhpcy5tYXRjaGluZ1RhZ3MucHVzaCh0YWcpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBmaWx0ZXJCeVRhZygpIHtcbiAgICBsZXQgZmlsdGVyZWRSZWNpcGVzID0gW11cbiAgICB0aGlzLnNlbGVjdGVkVGFncy5mb3JFYWNoKHNlbGVjdGVkVGFnID0+IHtcbiAgICAgIHRoaXMuYWRkVG9GaWx0ZXJlZFJlY2lwZShzZWxlY3RlZFRhZywgZmlsdGVyZWRSZWNpcGVzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRSZWNpcGVzO1xuICB9XG5cbiAgYWRkVG9GaWx0ZXJlZFJlY2lwZShzZWxlY3RlZFRhZywgZmlsdGVyZWRSZWNpcGVzKSB7XG4gICAgdGhpcy5tYXRjaGluZ1JlY2lwZXMuZm9yRWFjaChtYXRjaGluZ1JlY2lwZSA9PiB7XG4gICAgICBpZihtYXRjaGluZ1JlY2lwZS50YWdzLmluY2x1ZGVzKHNlbGVjdGVkVGFnKSAmJiAhZmlsdGVyZWRSZWNpcGVzLmluY2x1ZGVzKG1hdGNoaW5nUmVjaXBlKSl7XG4gICAgICAgIGZpbHRlcmVkUmVjaXBlcy5wdXNoKG1hdGNoaW5nUmVjaXBlKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoKGtleXdvcmRzLCByZWNpcGVzKSB7XG4gICAgdGhpcy5tYXRjaGluZ1JlY2lwZXMgPSBbXTtcbiAgICBrZXl3b3JkcyA9IGtleXdvcmRzLnNwbGl0KCcgJyk7XG4gICAgcmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgICB0aGlzLmNoZWNrTmFtZXNJbmdyZWRpZW50c0FuZFRhZ3Moa2V5d29yZHMsIHJlY2lwZSk7XG4gICAgfSlcbiAgfVxuXG4gIGNoZWNrTmFtZXNJbmdyZWRpZW50c0FuZFRhZ3Moa2V5d29yZHMsIHJlY2lwZSkge1xuICAgIGtleXdvcmRzLmZvckVhY2goa2V5d29yZCA9PiB7XG4gICAgICB0aGlzLmNoZWNrTmFtZXMoa2V5d29yZCwgcmVjaXBlKTtcbiAgICAgIHRoaXMuY2hlY2tJbmdyZWRpZW50cyhrZXl3b3JkLCByZWNpcGUpO1xuICAgICAgdGhpcy5jaGVja1RhZ3Moa2V5d29yZCwgcmVjaXBlKTtcbiAgICB9KVxuICB9XG5cblxuICBjaGVja05hbWVzKGtleXdvcmQsIHJlY2lwZSwgY29udGFpbnNSZWNpcGUpIHtcbiAgICBpZiAocmVjaXBlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkKVxuICAgICYmICF0aGlzLm1hdGNoaW5nUmVjaXBlcy5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICB0aGlzLm1hdGNoaW5nUmVjaXBlcy5wdXNoKHJlY2lwZSk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tUYWdzKGtleXdvcmQsIHJlY2lwZSwgY29udGFpbnNSZWNpcGUpIHtcbiAgICBpZiAocmVjaXBlLnRhZ3MuaW5jbHVkZXMoa2V5d29yZClcbiAgICAmJiAhdGhpcy5tYXRjaGluZ1JlY2lwZXMuaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgdGhpcy5tYXRjaGluZ1JlY2lwZXMucHVzaChyZWNpcGUpXG4gICAgfVxuICB9XG5cbiAgY2hlY2tJbmdyZWRpZW50cyhrZXl3b3JkLCByZWNpcGUsIGNvbnRhaW5zUmVjaXBlKSB7XG4gICAgY29uc3QgaW5ncmVkaWVudE5hbWVzID0gcmVjaXBlLmluZ3JlZGllbnRzLm1hcChpbmdyZWRpZW50ID0+IGluZ3JlZGllbnQubmFtZSlcbiAgICBpZiAoaW5ncmVkaWVudE5hbWVzLmpvaW4oJyAnKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGtleXdvcmQpXG4gICAgJiYgIXRoaXMubWF0Y2hpbmdSZWNpcGVzLmluY2x1ZGVzKHJlY2lwZSkpIHtcbiAgICAgIHRoaXMubWF0Y2hpbmdSZWNpcGVzLnB1c2gocmVjaXBlKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVSZXBvc2l0b3J5O1xuIiwiaW1wb3J0IFBhbnRyeSBmcm9tICcuL1BhbnRyeSdcblxuY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXIpIHtcbiAgICB0aGlzLm5hbWUgPSB1c2VyLm5hbWU7XG4gICAgdGhpcy5pZCA9IHVzZXIuaWQ7XG4gICAgdGhpcy5wYW50cnkgPSB1c2VyLnBhbnRyeTtcbiAgICB0aGlzLmZhdm9yaXRlcyA9IFtdO1xuICAgIHRoaXMucmVjaXBlc1RvQ29vayA9IFtdO1xuICB9XG5cbiAgYWRkUGFudHJ5KCkge1xuICAgIHRoaXMucGFudHJ5ID0gbmV3IFBhbnRyeSh0aGlzLnBhbnRyeSwgdGhpcy5pZCk7XG4gIH1cblxuICBhZGRUb0Zhdm9yaXRlcyhyZWNpcGUpIHtcbiAgICB0aGlzLmZhdm9yaXRlcy5wdXNoKHJlY2lwZSk7XG4gIH1cblxuICByZW1vdmVGcm9tRmF2b3JpdGVzKHJlY2lwZSkge1xuICAgIHRoaXMuZmF2b3JpdGVzID0gdGhpcy5mYXZvcml0ZXMuZmlsdGVyKGZhdm9yaXRlID0+IHtcbiAgICAgIHJldHVybiBmYXZvcml0ZSAhPT0gcmVjaXBlO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkVG9SZWNpcGVzVG9Db29rKHJlY2lwZSkge1xuICAgIHRoaXMucmVjaXBlc1RvQ29vay5wdXNoKHJlY2lwZSk7XG4gIH1cblxuICByZW1vdmVGcm9tUmVjaXBlc1RvQ29vayhyZWNpcGUpIHtcbiAgICB0aGlzLnJlY2lwZXNUb0Nvb2sgPSB0aGlzLnJlY2lwZXNUb0Nvb2suZmlsdGVyKHJlY2lwZVRvQ29vayA9PiB7XG4gICAgICByZXR1cm4gcmVjaXBlVG9Db29rICE9PSByZWNpcGU7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsImNvbnN0IGRvbVVwZGF0ZXMgPSB7XG4gIGFkZFVzZXJOYW1lKHVzZXJOYW1lKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXVzZXItcHJvZmlsZS1idG4nKS5pbm5lclRleHQgPSB1c2VyTmFtZTtcbiAgfSxcblxuICBoaWRlKC4uLmVsZW1lbnRzKSB7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfSlcbiAgfSxcblxuICBzaG93KC4uLnZpZXdzKSB7XG4gICAgdmlld3MuZm9yRWFjaCh2aWV3ID0+IHZpZXcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJykpO1xuICB9LFxuXG4gIGZpbGxJbmdyZWRpZW50cyhzZWxlY3RlZFJlY2lwZSkge1xuICAgIHNlbGVjdGVkUmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaW5ncmVkaWVudHMnKS5pbm5lckhUTUwgKz1cbiAgICAgIGA8bGk+JHtpbmdyZWRpZW50LmFtb3VudH0gJHtpbmdyZWRpZW50LnVuaXR9ICR7aW5ncmVkaWVudC5uYW1lfTwvbGk+YDtcbiAgICB9KTtcbiAgfSxcblxuICBmaWxsSW5zdHJ1Y3Rpb25zKHNlbGVjdGVkUmVjaXBlKSB7XG4gICAgc2VsZWN0ZWRSZWNpcGUuaW5zdHJ1Y3Rpb25zLmZvckVhY2goaW5zdHJ1Y3Rpb24gPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWluc3RydWN0aW9ucycpLmlubmVySFRNTCArPVxuICAgICAgYDxsaT4ke2luc3RydWN0aW9uLmluc3RydWN0aW9ufTwvbGk+YDtcbiAgICB9KTtcbiAgfSxcblxuICB1cGRhdGVCdG5Ub0NsaWNrZWQoc2VsZWN0ZWRSZWNpcGUsIHVzZXIpIHtcbiAgICB1c2VyLmZhdm9yaXRlcy5mb3JFYWNoKGZhdm9yaXRlUmVjaXBlID0+IHtcbiAgICAgIGlmIChmYXZvcml0ZVJlY2lwZS5pZCA9PT0gc2VsZWN0ZWRSZWNpcGUuaWQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWFkZC1mYXZvcml0ZS1idG4nKS5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgICB9XG4gICAgfSlcbiAgICB1c2VyLnJlY2lwZXNUb0Nvb2suZm9yRWFjaChyZWNpcGVUb0Nvb2sgPT4ge1xuICAgICAgaWYgKHJlY2lwZVRvQ29vay5pZCA9PT0gc2VsZWN0ZWRSZWNpcGUuaWQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWFkZC1yZWNpcGUtYnRuJykuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xuICAgICAgICB0aGlzLmZpbGxEaWZmZXJlbmNlcyh1c2VyLnBhbnRyeS5jaGVja1BhbnRyeShzZWxlY3RlZFJlY2lwZS5pbmdyZWRpZW50cykpO1xuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgZmlsbFBhbnRyeShpbmdFbG1zKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXBhbnRyeS1saXN0JykuaW5uZXJIVE1MID0gXCJcIlxuICAgIGluZ0VsbXMuZm9yRWFjaChlbG0gPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXBhbnRyeS1saXN0JykuaW5uZXJIVE1MICs9IGVsbVxuICAgIH0pXG4gIH0sXG5cbiAgZmlsbEluZ3JlZGllbnREcm9wZG93bihyZWNpcGVSZXBvKSB7XG4gICAgcmVjaXBlUmVwby5pbmdyZWRpZW50c0RhdGEuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1pbmdyZWRpZW50cy1kcm9wZG93bicpLmlubmVySFRNTCArPSBgXG4gICAgICAgIDxvcHRpb24gaWQ9XCIke2luZ3JlZGllbnQuaWR9XCI+JHtpbmdyZWRpZW50Lm5hbWV9PC9vcHRpb24+XG4gICAgICBgXG4gICAgfSlcbiAgfSxcblxuICBmaWxsSW5ncmVkaWVudEFtb3VudERyb3Bkb3duKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTk7IGkrKykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWluZ3JlZGllbnRzLWFtb3VudC1kcm9wZG93bicpLmlubmVySFRNTCArPSBgXG4gICAgICAgIDxvcHRpb24+JHtpICsgMX08L29wdGlvbj5cbiAgICAgIGBcbiAgICB9XG4gIH0sXG5cbiAgZmlsbFBvcG91dChzZWxlY3RlZFJlY2lwZSwgdXNlciwgcG9wb3V0KSB7XG4gICAgcG9wb3V0LmlubmVySFRNTCA9XG4gICAgYDxhcnRpY2xlIGNsYXNzPVwiZnVsbC1yZWNpcGVcIiBpZD1cIiR7c2VsZWN0ZWRSZWNpcGUuaWR9XCI+XG4gICAgICA8aW1nIHNyYz1cIiR7c2VsZWN0ZWRSZWNpcGUuaW1hZ2V9XCIgYWx0PVwiJHtzZWxlY3RlZFJlY2lwZS5uYW1lfVwiPlxuICAgICAgPGgyPiR7c2VsZWN0ZWRSZWNpcGUubmFtZX08L2gyPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC1mYXZvcml0ZS1idG4ganMtYWRkLWZhdm9yaXRlLWJ0blwiPkFkZCB0byBGYXZvcml0ZXM8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtcmVjaXBlLWJ0biBqcy1hZGQtcmVjaXBlLWJ0blwiPkFkZCB0byBSZWNpcGVzIHRvIENvb2s8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJtYWtlLXJlY2lwZS1idG4ganMtbWFrZS1yZWNpcGUtYnRuIGhpZGRlblwiPk1ha2UgdGhpcyBSZWNpcGU8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidXktaW5ncmVkaWVudHMtYnRuIGpzLWJ1eS1pbmdyZWRpZW50cy1idG4gaGlkZGVuXCI+QnV5IEluZ3JlZGllbnRzPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzPVwianMtaW5ncmVkaWVudHMtbmVlZGVkLWNvbnRhaW5lciBoaWRkZW5cIj5cbiAgICAgICAgPGgzPlRvIE1ha2UgVGhpcyBSZWNpcGUgWW91IE5lZWQ6PC9oMz5cbiAgICAgICAgPHVsIGNsYXNzPVwianMtaW5ncmVkaWVudHMtbmVlZGVkLWxpc3RcIj48L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGVzdFwiPlxuICAgICAgICA8aDM+SW5ncmVkaWVudHM8L2gzPlxuICAgICAgICA8dWwgY2xhc3M9XCJqcy1pbmdyZWRpZW50c1wiPjwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXN0LXR3b1wiPlxuICAgICAgICA8aDM+RGlyZWN0aW9uczwvaDM+XG4gICAgICAgIDxvbCBjbGFzcz1cImpzLWluc3RydWN0aW9uc1wiPjwvb2w+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXN0LXRocmVlXCI+XG4gICAgICAgIDxoMz5Db3N0PC9oMz5cbiAgICAgICAgPHAgY2xhc3M9XCJjb3N0IGpzLWNvc3RcIj4ke3NlbGVjdGVkUmVjaXBlLmNvc3R9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9hcnRpY2xlPmA7XG4gICAgdGhpcy51cGRhdGVCdG5Ub0NsaWNrZWQoc2VsZWN0ZWRSZWNpcGUsIHVzZXIpO1xuICB9LFxuXG4gIGZpbGxEaWZmZXJlbmNlcyhpbmdyZWRpZW50c05lZWRlZCkge1xuICAgIGlmICghaW5ncmVkaWVudHNOZWVkZWQubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNob3coZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW1ha2UtcmVjaXBlLWJ0bicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zaG93KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1pbmdyZWRpZW50cy1uZWVkZWQtY29udGFpbmVyJykpXG4gICAgdGhpcy5zaG93KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idXktaW5ncmVkaWVudHMtYnRuJykpXG4gICAgaW5ncmVkaWVudHNOZWVkZWQuZm9yRWFjaChpbmdyZWRpZW50TmVlZGVkID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1pbmdyZWRpZW50cy1uZWVkZWQtbGlzdCcpLmlubmVySFRNTCArPVxuICAgICAgYDxsaT4ke2luZ3JlZGllbnROZWVkZWQubmFtZX0gJHtpbmdyZWRpZW50TmVlZGVkLmRpZmZlcmVuY2V9ICR7aW5ncmVkaWVudE5lZWRlZC51bml0fTwvbGk+YDtcbiAgICB9KTtcbiAgfSxcblxuICBkaXNwbGF5UmVjaXBlcyhyZWNpcGVzLCBzZWN0aW9uKSB7XG4gICAgaWYgKCFyZWNpcGVzLmxlbmd0aCkge1xuICAgICAgc2VjdGlvbi5pbm5lckhUTUwgPVxuICAgICAgYDxwPldlIGNvdWxkbid0IGZpbmQgYW55IHJlY2lwZXMgdGhhdCBtYXRjaGVzIHlvdXIgc2VhcmNoIGNyaXRlcmlhLjwvcD5gXG4gICAgfSBlbHNlIHtcbiAgICAgIHNlY3Rpb24uaW5uZXJIVE1MID0gJyc7XG4gICAgICByZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgICAgY29uc3QgcmVjaXBlQ2FyZCA9XG4gICAgICAgIGA8YXJ0aWNsZSBjbGFzcz1cInJlY2lwZSAke3JlY2lwZS5pZH1cIj5cbiAgICAgICAgPGltZyBjbGFzcz1cInJlY2lwZS1pbWFnZSAke3JlY2lwZS5pZH1cIiBzcmM9XCIke3JlY2lwZS5pbWFnZX1cIiBhbHQ9XCJwbGF0ZSBvZiAke3JlY2lwZS5uYW1lfVwiPlxuICAgICAgICA8aDIgY2xhc3M9XCJhcnRpY2xlLXRpdGxlIGNhcmQtdGl0bGUgJHtyZWNpcGUuaWR9XCI+JHtyZWNpcGUubmFtZX08L2gyPlxuICAgICAgICA8L2FydGljbGU+YDtcbiAgICAgICAgc2VjdGlvbi5pbm5lckhUTUwgKz0gcmVjaXBlQ2FyZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBkZXRlcm1pbmVDbGlja2VkQnRuKGJ0bikge1xuICAgIGlmIChidG4ubWF0Y2hlcygnLmpzLWFkZC1mYXZvcml0ZS1idG4nKSkge1xuICAgICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2NsaWNrZWQnKVxuICAgICAgcmV0dXJuICdGYXZvcml0ZXMnXG4gICAgfSBlbHNlIGlmIChidG4ubWF0Y2hlcygnLmpzLWFkZC1yZWNpcGUtYnRuJykpIHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdjbGlja2VkJylcbiAgICAgIHJldHVybiAnUlRDJ1xuICAgIH0gZWxzZSBpZiAoYnRuLm1hdGNoZXMoJy5qcy1idXktaW5ncmVkaWVudHMtYnRuJykpIHtcbiAgICAgIHRoaXMuaGlkZShidG4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1pbmdyZWRpZW50cy1uZWVkZWQtY29udGFpbmVyJykpO1xuICAgICAgdGhpcy5zaG93KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1tYWtlLXJlY2lwZS1idG4nKSlcbiAgICAgIHJldHVybiAnQnV5IE5vdydcbiAgICB9IGVsc2UgaWYgKGJ0bi5tYXRjaGVzKCcuanMtbWFrZS1yZWNpcGUtYnRuJykpIHtcblxuICAgICAgcmV0dXJuICdNYWtlIFJlY2lwZSdcbiAgICB9XG4gIH0sXG5cbiAgZGlzcGxheU5vUmVjaXBlTXNnKHNlY3Rpb24pIHtcbiAgICBzZWN0aW9uLmlubmVySFRNTCA9XG4gICAgYDxwPllvdSBoYXZlbid0IGFkZGVkIGFueSByZWNpcGVzIHlldDwvcD5gXG4gIH0sXG5cbiAgZGlzcGxheVRhZ3ModGFnc1NlY3Rpb24sIHJlY2lwZVJlcG8pIHtcbiAgICB0YWdzU2VjdGlvbi5pbm5lckhUTUwgPSAnJ1xuICAgIHJlY2lwZVJlcG8ubWF0Y2hpbmdUYWdzLmZvckVhY2godGFnID0+IHtcbiAgICAgIGNvbnN0IHRhZ0NhcmQgPVxuICAgICAgYDxsYWJlbCBjbGFzcz1cInRhZ3NcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInRhZ1wiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCIke3RhZ31cIj4ke3RhZ31cbiAgICAgIDwvbGFiZWw+YDtcbiAgICAgIHRhZ3NTZWN0aW9uLmlubmVySFRNTCArPSB0YWdDYXJkO1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlcztcbiIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGZldGNoVXNlcnMsIGZldGNoUmVjaXBlcywgZmV0Y2hJbmdyZWRpZW50cyB9IGZyb20gJy4vYXBpQ2FsbHMnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9jbGFzc2VzL1VzZXInXG5pbXBvcnQgUmVjaXBlUmVwb3NpdG9yeSBmcm9tICcuL2NsYXNzZXMvUmVjaXBlUmVwb3NpdG9yeSc7XG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL2RvbVVwZGF0ZXMnXG5sZXQgcmVjaXBlUmVwbztcbmxldCB1c2VyO1xuXG5jb25zdCBmYXZvcml0ZXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZmF2b3JpdGVzLWJ0bicpO1xuY29uc3QgZmF2b3JpdGVzUmVzdWx0c1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGVzLXJlc3VsdHMtc2VjdGlvbicpO1xuY29uc3QgZmF2b3JpdGVzU2VhcmNoQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWZhdm9yaXRlcy1zZWFyY2gtYm94Jyk7XG5jb25zdCBmYXZvcml0ZXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWZhdm9yaXRlcy1zZWN0aW9uJyk7XG5jb25zdCBmYXZvcml0ZXNUYWdzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1mYXZvcml0ZXMtdGFncy1zZWN0aW9uJylcbmNvbnN0IGZhdm9yaXRlc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZmF2b3JpdGVzLXdyYXBwZXInKTtcbmNvbnN0IGhvbWVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWhvbWUtc2VjdGlvbicpO1xuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1ob21lLWJ0bicpO1xuY29uc3QgbWFpblNlYXJjaEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZWFyY2gtYm94Jyk7XG5jb25zdCBwb3BvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcmVjaXBlLXBvcG91dCcpO1xuY29uc3QgcmVjaXBlc1RvQ29va1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcmVjaXBlcy10by1jb29rLXNlY3Rpb24nKTtcbmNvbnN0IHJlY2lwZXNUb0Nvb2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcmVjaXBlcy10by1jb29rLWJ0bicpO1xuY29uc3QgcmVjaXBlc1RvQ29va1Jlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcmVjaXBlcy10by1jb29rLXJlc3VsdHMnKVxuY29uc3QgcmVzdWx0c1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcmVzdWx0cy1zZWN0aW9uJyk7XG5jb25zdCBzZWFyY2hTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNlYXJjaC1zZWN0aW9uJyk7XG5jb25zdCBzZWFyY2hUYWdzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10YWdzLXNlY3Rpb24nKTtcbmNvbnN0IHVzZXJQcm9maWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXVzZXItcHJvZmlsZS1idG4nKTtcbmNvbnN0IHVzZXJQYW50cnlTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXVzZXItcGFudHJ5Jyk7XG5jb25zdCBhZGRJbmdyZWRpZW50c0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYWRkLXRvLXBhbnRyeScpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGdldEFwaXMpXG5mYXZvcml0ZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93RmF2b3JpdGVzKTtcbmZhdm9yaXRlc1NlYXJjaEJveC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHNob3dSZXN1bHRzKGV2ZW50LCBmYXZvcml0ZXNSZXN1bHRzU2VjdGlvbiwgZmF2b3JpdGVzU2VhcmNoQm94LFxuICAgIHVzZXIuZmF2b3JpdGVzLCBmYXZvcml0ZXNUYWdzU2VjdGlvblxuICApO1xufSlcbmZhdm9yaXRlc1NlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5UG9wb3V0KTtcbmZhdm9yaXRlc1RhZ3NTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgZmlsdGVyUmVzdWx0c0J5VGFnKGV2ZW50LCBmYXZvcml0ZXNSZXN1bHRzU2VjdGlvbik7XG59KTtcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93SG9tZSk7XG5ob21lU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlQb3BvdXQpO1xucG9wb3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkRmF2b3JpdGVPclJlY2lwZVRvQ29vayk7XG5yZWNpcGVzVG9Db29rQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1JlY2lwZXNUb0Nvb2spO1xucmVjaXBlc1RvQ29va1NlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5UG9wb3V0KTtcbnJlc3VsdHNTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVBvcG91dCk7XG5tYWluU2VhcmNoQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgc2hvd1Jlc3VsdHMoZXZlbnQsIHJlc3VsdHNTZWN0aW9uLCBtYWluU2VhcmNoQm94LCByZWNpcGVSZXBvLnJlY2lwZXMsXG4gICAgc2VhcmNoVGFnc1NlY3Rpb25cbiAgKTtcbn0pO1xuc2VhcmNoVGFnc1NlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICBmaWx0ZXJSZXN1bHRzQnlUYWcoZXZlbnQsIHJlc3VsdHNTZWN0aW9uKTtcbn0pO1xudXNlclByb2ZpbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93UGFudHJ5KTtcbmFkZEluZ3JlZGllbnRzRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRJbmdyZWRpZW50KTtcblxuZnVuY3Rpb24gYWRkSW5ncmVkaWVudChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1pbmdyZWRpZW50cy1kcm9wZG93blwiKTtcbiAgY29uc3QgaW5ncmVkaWVudElkID0gZHJvcGRvd24ub3B0aW9uc1tkcm9wZG93bi5zZWxlY3RlZEluZGV4XS5pZDtcbiAgY29uc3QgaW5ncmVkaWVudEFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1pbmdyZWRpZW50cy1hbW91bnQtZHJvcGRvd24nKS52YWx1ZVxuICB1c2VyLnBhbnRyeS5pbmNyZWFzZUluZ3JlZGllbnQoaW5ncmVkaWVudElkLCBpbmdyZWRpZW50QW1vdW50KVxuICBzaG93UGFudHJ5KCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhZyh0YWcsIHNlY3Rpb24pIHtcbiAgcmVjaXBlUmVwby5zZWxlY3RlZFRhZ3MucHVzaCh0YWcpO1xuICBjb25zdCBmaWx0ZXJlZFJlY2lwZXMgPSByZWNpcGVSZXBvLmZpbHRlckJ5VGFnKCk7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheVJlY2lwZXMoZmlsdGVyZWRSZWNpcGVzLCBzZWN0aW9uKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVBvcG91dChldmVudCkge1xuICBpZiAoIWV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygncmVjaXBlJylcbiAgICAmJiAhZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVjaXBlJykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZG9tVXBkYXRlcy5oaWRlKGhvbWVTZWN0aW9uLCBmYXZvcml0ZXNXcmFwcGVyLCByZWNpcGVzVG9Db29rU2VjdGlvbiwgc2VhcmNoU2VjdGlvbiwgcG9wb3V0KTtcbiAgZG9tVXBkYXRlcy5zaG93KHBvcG91dCk7XG4gIGNvbnN0IHNlbGVjdGVkUmVjaXBlID0gcmVjaXBlUmVwby5yZWNpcGVzLmZpbmQocmVjaXBlID0+IHtcbiAgICByZXR1cm4gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhyZWNpcGUuaWQpXG4gIH0pO1xuXG4gIGRvbVVwZGF0ZXMuZmlsbFBvcG91dChzZWxlY3RlZFJlY2lwZSwgdXNlciwgcG9wb3V0KTtcbiAgZG9tVXBkYXRlcy5maWxsSW5ncmVkaWVudHMoc2VsZWN0ZWRSZWNpcGUpO1xuICBkb21VcGRhdGVzLmZpbGxJbnN0cnVjdGlvbnMoc2VsZWN0ZWRSZWNpcGUpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UmVzdWx0cyhrZXl3b3Jkcywgc2VjdGlvbiwgcmVjaXBlcywgdGFnc1NlY3Rpb24pIHtcbiAgZG9tVXBkYXRlcy5oaWRlKGhvbWVTZWN0aW9uLCBmYXZvcml0ZXNXcmFwcGVyLCByZWNpcGVzVG9Db29rU2VjdGlvbiwgc2VhcmNoU2VjdGlvbiwgcG9wb3V0KTtcbiAgaWYgKHNlY3Rpb24gPT09IGZhdm9yaXRlc1Jlc3VsdHNTZWN0aW9uKSB7XG4gICAgZG9tVXBkYXRlcy5zaG93KGZhdm9yaXRlc1dyYXBwZXIpXG4gIH0gZWxzZSB7XG4gICAgZG9tVXBkYXRlcy5zaG93KHNlYXJjaFNlY3Rpb24pO1xuICB9XG4gIHJlY2lwZVJlcG8uc2VhcmNoKGtleXdvcmRzLCByZWNpcGVzKTtcbiAgcmVjaXBlUmVwby5maWx0ZXJUYWdzKCk7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheVRhZ3ModGFnc1NlY3Rpb24sIHJlY2lwZVJlcG8pO1xuICBkb21VcGRhdGVzLmRpc3BsYXlSZWNpcGVzKHJlY2lwZVJlcG8ubWF0Y2hpbmdSZWNpcGVzLCBzZWN0aW9uIHx8IHJlc3VsdHNTZWN0aW9uKTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyUmVzdWx0c0J5VGFnKGV2ZW50LCBzZWN0aW9uKSB7XG4gIGNvbnN0IGNoZWNrYm94ID0gZXZlbnQudGFyZ2V0O1xuICBjb25zdCB0YWcgPSBjaGVja2JveC5uYW1lO1xuICBpZiAoIWNoZWNrYm94Lm1hdGNoZXMoJ1t0eXBlPVwiY2hlY2tib3hcIl0nKSkge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgYWRkVGFnKHRhZywgc2VjdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlVGFnKHRhZywgc2VjdGlvbik7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0QXBpcygpIHtcbiBsZXQgdXNlcnNEYXRhID0gYXdhaXQgZmV0Y2hVc2VycygpO1xuIGxldCBpbmdyZWRpZW50c0RhdGEgPSBhd2FpdCBmZXRjaEluZ3JlZGllbnRzKCk7XG4gbGV0IHJlY2lwZXNEYXRhID0gYXdhaXQgZmV0Y2hSZWNpcGVzKCk7XG4gIGNvbnN0IHJhbmRvbVVzZXJzRGF0YUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKHVzZXJzRGF0YS5sZW5ndGggKyAxKSk7XG4gIHVzZXIgPSBuZXcgVXNlcih1c2Vyc0RhdGFbcmFuZG9tVXNlcnNEYXRhSW5kZXhdKTtcbiAgdXNlci5hZGRQYW50cnkoKTtcbiAgZG9tVXBkYXRlcy5hZGRVc2VyTmFtZSh1c2VyLm5hbWUpO1xuICByZWNpcGVSZXBvID0gbmV3IFJlY2lwZVJlcG9zaXRvcnkocmVjaXBlc0RhdGEsIGluZ3JlZGllbnRzRGF0YSk7XG4gIHJlY2lwZVJlcG8uYWRkUmVjaXBlcygpO1xuICByZWNpcGVSZXBvLmdldFJlY2lwZXNJbmZvcm1hdGlvbigpO1xuICByZWNpcGVSZXBvLmdldFJlY2lwZUNvc3QoKTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5UmVjaXBlcyhyZWNpcGVSZXBvLnJlY2lwZXMsIGhvbWVTZWN0aW9uKTtcbn1cblxuZnVuY3Rpb24gYWRkRmF2b3JpdGVPclJlY2lwZVRvQ29vayhldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCdidXR0b24nKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBidG4gPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IHJlY2lwZUlkID0gYnRuLnBhcmVudE5vZGUuaWQ7XG4gIGNvbnN0IHJlY2lwZSA9IHJlY2lwZVJlcG8ucmVjaXBlcy5maW5kKHJlY2lwZSA9PiByZWNpcGUuaWQgPT09IHBhcnNlSW50KHJlY2lwZUlkKSk7XG4gIGNvbnN0IGNsaWNrZWRCdG4gPSBkb21VcGRhdGVzLmRldGVybWluZUNsaWNrZWRCdG4oYnRuKVxuICBpZiAoY2xpY2tlZEJ0biA9PT0gJ0Zhdm9yaXRlcycpIHtcbiAgICB0b2dnbGVGYXZvcml0ZXMocmVjaXBlKVxuICB9IGVsc2UgaWYgKGNsaWNrZWRCdG4gPT09ICdSVEMnKSB7XG4gICAgdG9nZ2xlUmVjaXBlc1RvQ29vayhyZWNpcGUpXG4gIH0gZWxzZSBpZiAoY2xpY2tlZEJ0biA9PT0gJ0J1eSBOb3cnKSB7XG4gICAgdXNlci5wYW50cnkuYnV5SW5ncmVkaWVudHMoKTtcbiAgfSBlbHNlIGlmIChjbGlja2VkQnRuID09PSAnTWFrZSBSZWNpcGUnKSB7XG4gICAgdXNlci5yZWNpcGVzVG9Db29rID0gdXNlci5yZWNpcGVzVG9Db29rLmZpbHRlcihyZWNpcGVUb0Nvb2sgPT4ge1xuICAgICAgcmV0dXJuIHJlY2lwZVRvQ29vay5pZCAhPT0gcGFyc2VJbnQocmVjaXBlSWQpXG4gICAgfSlcbiAgICBzaG93UmVjaXBlc1RvQ29vaygpXG4gICAgdXNlci5wYW50cnkucmVtb3ZlUmVjaXBlSW5ncmVkaWVudHMocmVjaXBlLmluZ3JlZGllbnRzKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhZyh0YWcsIHNlY3Rpb24pIHtcbiAgcmVjaXBlUmVwby5zZWxlY3RlZFRhZ3MgPSByZWNpcGVSZXBvLnNlbGVjdGVkVGFncy5maWx0ZXIodGFnID0+IHtcbiAgICByZXR1cm4gdGFnICE9PSB0YWc7XG4gIH0pXG4gIGlmIChyZWNpcGVSZXBvLnNlbGVjdGVkVGFncy5sZW5ndGgpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFJlY2lwZXMgPSByZWNpcGVSZXBvLmZpbHRlckJ5VGFnKCk7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5UmVjaXBlcyhmaWx0ZXJlZFJlY2lwZXMsIHNlY3Rpb24pO1xuICB9XG4gIFxuICBkb21VcGRhdGVzLmRpc3BsYXlSZWNpcGVzKHJlY2lwZVJlcG8ubWF0Y2hpbmdSZWNpcGVzLCBzZWN0aW9uKTtcbn1cblxuZnVuY3Rpb24gc2hvd0Zhdm9yaXRlcygpIHtcbiAgZG9tVXBkYXRlcy5oaWRlKGhvbWVTZWN0aW9uLCBmYXZvcml0ZXNXcmFwcGVyLCByZWNpcGVzVG9Db29rU2VjdGlvbiwgc2VhcmNoU2VjdGlvbiwgcG9wb3V0LCB1c2VyUGFudHJ5U2VjdGlvbik7XG4gIGRvbVVwZGF0ZXMuc2hvdyhmYXZvcml0ZXNXcmFwcGVyKTtcbiAgcmVjaXBlUmVwby5tYXRjaGluZ1JlY2lwZXMgPSB1c2VyLmZhdm9yaXRlc1xuICByZWNpcGVSZXBvLmZpbHRlclRhZ3MoKVxuICBkb21VcGRhdGVzLmRpc3BsYXlUYWdzKGZhdm9yaXRlc1RhZ3NTZWN0aW9uLCByZWNpcGVSZXBvKVxuICBpZiAoIXVzZXIuZmF2b3JpdGVzLmxlbmd0aCkge1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheU5vUmVjaXBlTXNnKGZhdm9yaXRlc1Jlc3VsdHNTZWN0aW9uKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZG9tVXBkYXRlcy5kaXNwbGF5UmVjaXBlcyh1c2VyLmZhdm9yaXRlcywgZmF2b3JpdGVzUmVzdWx0c1NlY3Rpb24pO1xufVxuXG5mdW5jdGlvbiBzaG93SG9tZSgpIHtcbiAgZG9tVXBkYXRlcy5oaWRlKGhvbWVTZWN0aW9uLCBmYXZvcml0ZXNXcmFwcGVyLCByZWNpcGVzVG9Db29rU2VjdGlvbiwgc2VhcmNoU2VjdGlvbiwgcG9wb3V0LCB1c2VyUGFudHJ5U2VjdGlvbik7XG4gIGRvbVVwZGF0ZXMuc2hvdyhob21lU2VjdGlvbik7XG59XG5cbmZ1bmN0aW9uIHNob3dSZWNpcGVzVG9Db29rKCkge1xuICBkb21VcGRhdGVzLmhpZGUoaG9tZVNlY3Rpb24sIGZhdm9yaXRlc1dyYXBwZXIsIHJlY2lwZXNUb0Nvb2tTZWN0aW9uLCBzZWFyY2hTZWN0aW9uLCBwb3BvdXQsIHVzZXJQYW50cnlTZWN0aW9uKTtcbiAgZG9tVXBkYXRlcy5zaG93KHJlY2lwZXNUb0Nvb2tTZWN0aW9uKTtcbiAgaWYgKCF1c2VyLnJlY2lwZXNUb0Nvb2subGVuZ3RoKSB7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5Tm9SZWNpcGVNc2cocmVjaXBlc1RvQ29va1Jlc3VsdHMpXG4gICAgcmV0dXJuXG4gIH1cbiAgZG9tVXBkYXRlcy5kaXNwbGF5UmVjaXBlcyh1c2VyLnJlY2lwZXNUb0Nvb2ssIHJlY2lwZXNUb0Nvb2tSZXN1bHRzKVxufVxuXG5mdW5jdGlvbiBzaG93UmVzdWx0cyhldmVudCwgc2VjdGlvbiwgc2VhcmNoQm94LCByZWNpcGVzLCB0YWdzU2VjdGlvbikge1xuICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkaXNwbGF5UmVzdWx0cyhzZWFyY2hCb3gudmFsdWUudG9Mb3dlckNhc2UoKSwgc2VjdGlvbiwgcmVjaXBlcywgdGFnc1NlY3Rpb24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dQYW50cnkoKSB7XG4gIGRvbVVwZGF0ZXMuaGlkZShob21lU2VjdGlvbiwgZmF2b3JpdGVzV3JhcHBlciwgcmVjaXBlc1RvQ29va1NlY3Rpb24sIHNlYXJjaFNlY3Rpb24sIHBvcG91dCk7XG4gIGRvbVVwZGF0ZXMuc2hvdyh1c2VyUGFudHJ5U2VjdGlvbik7XG4gIGNvbnN0IHBhbnRyeSA9IHVzZXIucGFudHJ5Lm5hbWVJbmdyZWRpZW50cyhyZWNpcGVSZXBvKVxuICBkb21VcGRhdGVzLmZpbGxQYW50cnkocGFudHJ5KVxuICBkb21VcGRhdGVzLmZpbGxJbmdyZWRpZW50RHJvcGRvd24ocmVjaXBlUmVwbylcbiAgZG9tVXBkYXRlcy5maWxsSW5ncmVkaWVudEFtb3VudERyb3Bkb3duKClcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRmF2b3JpdGVzKHJlY2lwZSkge1xuICBpZiAoIXVzZXIuZmF2b3JpdGVzLmluY2x1ZGVzKHJlY2lwZSkpIHtcbiAgICB1c2VyLmFkZFRvRmF2b3JpdGVzKHJlY2lwZSk7XG4gIH0gZWxzZSB7XG4gICAgdXNlci5yZW1vdmVGcm9tRmF2b3JpdGVzKHJlY2lwZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlUmVjaXBlc1RvQ29vayhyZWNpcGUpIHtcbiAgaWYgKCF1c2VyLnJlY2lwZXNUb0Nvb2suaW5jbHVkZXMocmVjaXBlKSkge1xuICAgIHVzZXIuYWRkVG9SZWNpcGVzVG9Db29rKHJlY2lwZSk7XG4gIH0gZWxzZSB7XG4gICAgdXNlci5yZW1vdmVGcm9tUmVjaXBlc1RvQ29vayhyZWNpcGUpO1xuICB9XG59XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==