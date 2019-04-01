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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/wouldreads.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/wouldreads.jsx":
/*!*********************************!*\
  !*** ./frontend/wouldreads.jsx ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/aa/Desktop/WouldReads/frontend/wouldreads.jsx: Unexpected token (2:1)\\n\\n\\u001b[0m \\u001b[90m 1 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mReactDOM\\u001b[39m from \\u001b[32m'react-dom'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 2 | \\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 3 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33m*\\u001b[39m as \\u001b[33mSessionApiUtil\\u001b[39m from \\u001b[32m'./util/session_api_util'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mReact\\u001b[39m from \\u001b[32m'react'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m\\u001b[36mimport\\u001b[39m configureStore from \\u001b[32m'./store/store'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Object.raise (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:3851:17)\\n    at Object.unexpected (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:5165:16)\\n    at Object.jsxParseIdentifier (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:3350:12)\\n    at Object.jsxParseNamespacedName (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:3360:23)\\n    at Object.jsxParseElementName (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:3371:21)\\n    at Object.jsxParseOpeningElementAt (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:3456:22)\\n    at Object.jsxParseElementAt (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:3489:33)\\n    at Object.jsxParseElement (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:3558:17)\\n    at Object.parseExprAtom (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:3565:19)\\n    at Object.parseExprSubscripts (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:5916:23)\\n    at Object.parseMaybeUnary (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:5896:21)\\n    at Object.parseExprOps (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:5783:23)\\n    at Object.parseMaybeConditional (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:5756:23)\\n    at Object.parseMaybeAssign (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:5703:21)\\n    at Object.parseExpression (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:5651:23)\\n    at Object.parseStatementContent (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:7422:23)\\n    at Object.parseStatement (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:7293:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:7879:25)\\n    at Object.parseBlockBody (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:7866:10)\\n    at Object.parseTopLevel (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:7222:10)\\n    at Object.parse (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:8871:17)\\n    at parse (/Users/aa/Desktop/WouldReads/node_modules/@babel/parser/lib/index.js:11133:38)\\n    at parser (/Users/aa/Desktop/WouldReads/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\\n    at normalizeFile (/Users/aa/Desktop/WouldReads/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\\n    at runSync (/Users/aa/Desktop/WouldReads/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/Users/aa/Desktop/WouldReads/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at process.nextTick (/Users/aa/Desktop/WouldReads/node_modules/@babel/core/lib/transform.js:34:34)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2Zyb250ZW5kL3dvdWxkcmVhZHMuanN4LmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./frontend/wouldreads.jsx\n");

/***/ })

/******/ });