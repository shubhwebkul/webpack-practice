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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./vue-components/homepage/homepage.js */ \"./vue-components/homepage/homepage.js\");\n\nnew Vue({\n    el: '#components-demo'\n})\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./vue-components/homepage/homepage.js":
/*!*********************************************!*\
  !*** ./vue-components/homepage/homepage.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let template = `\n    <table>\n        <thead>\n            <tr>\n                <td>Amount</td>\n                <td>Items</td>\n                <td>Weight</td>\n                <td>Less</td>\n                <td>New wt</td>\n                <td>tunch</td>\n                <td>lab</td>\n                <td>Fine</td>\n            </tr>\n        </thead>\n        <tbody id=\"tbody\">\n            <tr>\n                <td><input type=\"text\" id=\"amount\"></td>\n                <td><select id=\"item\">\n                    <option>1</option>\n                    <option>2</option>\n                    <option>3</option>\n                    <option>4</option>\n                </select></td>\n                <td><input type=\"text\" id=\"weight\"></td>\n                <td><input type=\"text\" id=\"less\"></td>\n                <td><input type=\"text\" id=\"newWeight\"></td>\n                <td><input type=\"text\" id=\"tunch\"></td>\n                <td><input type=\"text\" id=\"lab\"></td>\n                <td><input type=\"text\" id=\"fine\"></td>\n                <button type=\"button\" v-on:click=\"addItem\">Submit</button>\n            </tr>\n        </tbody>\n    </table>\n`;\n\nVue.component('button-counter', {\n    methods: {\n        addItem () {\n            let fields = {\n                amountField: this.getElement('#amount'),\n                itemField: this.getElement('#item'),\n                weightField: this.getElement('#weight'),\n                lessField: this.getElement('#less'),\n                newWeightField: this.getElement('#newWeight'),\n                tunchField: this.getElement('#tunch'),\n                labField: this.getElement('#lab'),\n                fineField: this.getElement('#fine')\n            }\n\n            let isValidateSuccessful = this.validateFields(fields);\n\n            if(isValidateSuccessful)\n                this.createRow(fields);\n        },\n        createRow (fields) {\n            let tbody = this.getElement('#tbody');\n            let tr = document.createElement('tr');\n            \n            for(var key in fields) {\n                let td = document.createElement('td');\n                let field = fields[key];\n                td.innerHTML = field.value;\n                tr.appendChild(td);\n            }\n\n            tbody.appendChild(tr);\n\n        },\n        validateFields (fields) {\n            for(var key in fields) {\n                let isValidate = true;\n                let currentElement = fields[key];\n                if(typeof currentElement !== \"undefined\" && typeof currentElement.value !== \"undefined\" && !currentElement.value) {\n                    isValidate = false;\n                    this.showError(currentElement);\n                }\n\n                return isValidate;\n            }\n        },\n        getElement (selector) {\n            return document.querySelector(selector);\n        },\n        showError (showErrorElement) {\n            let span = document.createElement('span');\n            span.innerHTML = 'This field is required';\n            showErrorElement.parentNode.insertBefore(span, showErrorElement.nextSibling);\n        }\n    },\n    template: template,\n})\n\n//# sourceURL=webpack:///./vue-components/homepage/homepage.js?");

/***/ })

/******/ });