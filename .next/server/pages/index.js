module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, private, scripts, dependencies, devDependencies, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"ignews\\\",\\\"version\\\":\\\"0.1.0\\\",\\\"private\\\":true,\\\"scripts\\\":{\\\"dev\\\":\\\"next dev\\\",\\\"build\\\":\\\"next build\\\",\\\"start\\\":\\\"next start\\\"},\\\"dependencies\\\":{\\\"@stripe/stripe-js\\\":\\\"^1.13.2\\\",\\\"axios\\\":\\\"^0.21.1\\\",\\\"faunadb\\\":\\\"^4.2.0\\\",\\\"next\\\":\\\"10.1.3\\\",\\\"next-auth\\\":\\\"^3.14.0\\\",\\\"react\\\":\\\"17.0.2\\\",\\\"react-dom\\\":\\\"17.0.2\\\",\\\"react-icons\\\":\\\"^4.2.0\\\",\\\"sass\\\":\\\"^1.32.8\\\",\\\"stripe\\\":\\\"^8.142.0\\\"},\\\"devDependencies\\\":{\\\"@types/next-auth\\\":\\\"^3.13.0\\\",\\\"@types/node\\\":\\\"^14.14.37\\\",\\\"@types/react\\\":\\\"^17.0.3\\\",\\\"typescript\\\":\\\"^4.2.3\\\"}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhY2thZ2UuanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./package.json\n");

/***/ }),

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/*! exports provided: SubscribeButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SubscribeButton\", function() { return SubscribeButton; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _services_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stripe-js */ \"./src/services/stripe-js.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/danielsilva/Documents/Ignite/ignite-ignews/src/components/SubscribeButton/index.tsx\";\n\n\n\n\nfunction SubscribeButton({\n  priceID\n}) {\n  const [session] = Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__[\"useSession\"])();\n\n  async function handleSubscribe() {\n    if (!session) {\n      Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__[\"signIn\"])(\"github\");\n      return;\n    }\n\n    try {\n      const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__[\"api\"].post(\"/subscribe\");\n      const {\n        sessionId\n      } = response.data;\n      const stripe = await Object(_services_stripe_js__WEBPACK_IMPORTED_MODULE_3__[\"getStipeJs\"])();\n      await stripe.redirectToCheckout({\n        sessionId\n      });\n    } catch (err) {\n      alert(err.message);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    type: \"button\",\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.subscribeButton,\n    onClick: handleSubscribe,\n    children: \"Subscribe now\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4P2VmMWQiXSwibmFtZXMiOlsiU3Vic2NyaWJlQnV0dG9uIiwicHJpY2VJRCIsInNlc3Npb24iLCJ1c2VTZXNzaW9uIiwiaGFuZGxlU3Vic2NyaWJlIiwic2lnbkluIiwicmVzcG9uc2UiLCJhcGkiLCJwb3N0Iiwic2Vzc2lvbklkIiwiZGF0YSIsInN0cmlwZSIsImdldFN0aXBlSnMiLCJyZWRpcmVjdFRvQ2hlY2tvdXQiLCJlcnIiLCJhbGVydCIsIm1lc3NhZ2UiLCJzdHlsZXMiLCJzdWJzY3JpYmVCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBTU8sU0FBU0EsZUFBVCxDQUF5QjtBQUFFQztBQUFGLENBQXpCLEVBQTREO0FBQ2pFLFFBQU0sQ0FBQ0MsT0FBRCxJQUFZQyxtRUFBVSxFQUE1Qjs7QUFFQSxpQkFBZUMsZUFBZixHQUFpQztBQUMvQixRQUFJLENBQUNGLE9BQUwsRUFBYztBQUNaRyxxRUFBTSxDQUFDLFFBQUQsQ0FBTjtBQUNBO0FBQ0Q7O0FBQ0QsUUFBSTtBQUNGLFlBQU1DLFFBQVEsR0FBRyxNQUFNQyxpREFBRyxDQUFDQyxJQUFKLENBQVMsWUFBVCxDQUF2QjtBQUNBLFlBQU07QUFBRUM7QUFBRixVQUFnQkgsUUFBUSxDQUFDSSxJQUEvQjtBQUNBLFlBQU1DLE1BQU0sR0FBRyxNQUFNQyxzRUFBVSxFQUEvQjtBQUNBLFlBQU1ELE1BQU0sQ0FBQ0Usa0JBQVAsQ0FBMEI7QUFBRUo7QUFBRixPQUExQixDQUFOO0FBQ0QsS0FMRCxDQUtFLE9BQU9LLEdBQVAsRUFBWTtBQUNaQyxXQUFLLENBQUNELEdBQUcsQ0FBQ0UsT0FBTCxDQUFMO0FBQ0Q7QUFDRjs7QUFFRCxzQkFDRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsYUFBUyxFQUFFQywwREFBTSxDQUFDQyxlQUZwQjtBQUdFLFdBQU8sRUFBRWQsZUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0QiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2lnbkluLCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGlcIjtcbmltcG9ydCB7IGdldFN0aXBlSnMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3RyaXBlLWpzXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XG5cbmludGVyZmFjZSBTdWJzY3JpYmVCdXR0b25Qcm9wcyB7XG4gIHByaWNlSUQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN1YnNjcmliZUJ1dHRvbih7IHByaWNlSUQgfTogU3Vic2NyaWJlQnV0dG9uUHJvcHMpIHtcbiAgY29uc3QgW3Nlc3Npb25dID0gdXNlU2Vzc2lvbigpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXNlc3Npb24pIHtcbiAgICAgIHNpZ25JbihcImdpdGh1YlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvc3Vic2NyaWJlXCIpO1xuICAgICAgY29uc3QgeyBzZXNzaW9uSWQgfSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICBjb25zdCBzdHJpcGUgPSBhd2FpdCBnZXRTdGlwZUpzKCk7XG4gICAgICBhd2FpdCBzdHJpcGUucmVkaXJlY3RUb0NoZWNrb3V0KHsgc2Vzc2lvbklkIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJzY3JpYmVCdXR0b259XG4gICAgICBvbkNsaWNrPXtoYW5kbGVTdWJzY3JpYmV9XG4gICAgPlxuICAgICAgU3Vic2NyaWJlIG5vd1xuICAgIDwvYnV0dG9uPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"subscribeButton\": \"styles_subscribeButton__1uQAs\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzPzZlMDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3Vic2NyaWJlQnV0dG9uXCI6IFwic3R5bGVzX3N1YnNjcmliZUJ1dHRvbl9fMXVRQXNcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"contentContainer\": \"home_contentContainer__21EWl\",\n\t\"hero\": \"home_hero__3Za5I\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcz8xOTI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRlbnRDb250YWluZXJcIjogXCJob21lX2NvbnRlbnRDb250YWluZXJfXzIxRVdsXCIsXG5cdFwiaGVyb1wiOiBcImhvbWVfaGVyb19fM1phNUlcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home.module.scss\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/danielsilva/Documents/Ignite/ignite-ignews/src/pages/index.tsx\";\n\n\n\n\nfunction Home({\n  product\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Home | ig.news\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.contentContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.hero,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: \"\\uD83D\\uDC4F Hey, welcome\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: [\"News about the \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: \"React\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 28\n          }, this), \" world.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [\"Get acess to all the publications \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 47\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: [\"for \", product.amount, \" month\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__[\"SubscribeButton\"], {\n          priceID: product.priceID\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/images/avatar.svg\",\n        alt: \"Girl codding\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\nconst getStaticProps = async () => {\n  const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__[\"stripe\"].prices.retrieve(\"price_1IfoSlHfzJbXPHYWOs6tGIeU\", {\n    expand: [\"product\"]\n  });\n  const product = {\n    priceID: price.id,\n    amount: new Intl.NumberFormat(\"en-US\", {\n      style: \"currency\",\n      currency: \"USD\"\n    }).format(price.unit_amount / 100)\n  };\n  return {\n    props: {\n      product\n    },\n    revalidate: 60 * 60 * 24 // 24 hours\n\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZSIsInByb2R1Y3QiLCJzdHlsZXMiLCJjb250ZW50Q29udGFpbmVyIiwiaGVybyIsImFtb3VudCIsInByaWNlSUQiLCJnZXRTdGF0aWNQcm9wcyIsInByaWNlIiwic3RyaXBlIiwicHJpY2VzIiwicmV0cmlldmUiLCJleHBhbmQiLCJpZCIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0IiwidW5pdF9hbW91bnQiLCJwcm9wcyIsInJldmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFTZSxTQUFTQSxJQUFULENBQWM7QUFBRUM7QUFBRixDQUFkLEVBQXNDO0FBQ25ELHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQU0sZUFBUyxFQUFFQyx3REFBTSxDQUFDQyxnQkFBeEI7QUFBQSw4QkFDRTtBQUFTLGlCQUFTLEVBQUVELHdEQUFNLENBQUNFLElBQTNCO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLHFEQUNpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBS0U7QUFBQSx3RUFDb0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEcEMsZUFFRTtBQUFBLCtCQUFXSCxPQUFPLENBQUNJLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsZUFTRSxxRUFBQywyRUFBRDtBQUFpQixpQkFBTyxFQUFFSixPQUFPLENBQUNLO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFZRTtBQUFLLFdBQUcsRUFBQyxvQkFBVDtBQUE4QixXQUFHLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUEsa0JBREY7QUFxQkQ7QUFFTSxNQUFNQyxjQUE4QixHQUFHLFlBQVk7QUFDeEQsUUFBTUMsS0FBSyxHQUFHLE1BQU1DLHVEQUFNLENBQUNDLE1BQVAsQ0FBY0MsUUFBZCxDQUF1QixnQ0FBdkIsRUFBeUQ7QUFDM0VDLFVBQU0sRUFBRSxDQUFDLFNBQUQ7QUFEbUUsR0FBekQsQ0FBcEI7QUFJQSxRQUFNWCxPQUFPLEdBQUc7QUFDZEssV0FBTyxFQUFFRSxLQUFLLENBQUNLLEVBREQ7QUFFZFIsVUFBTSxFQUFFLElBQUlTLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUNyQ0MsV0FBSyxFQUFFLFVBRDhCO0FBRXJDQyxjQUFRLEVBQUU7QUFGMkIsS0FBL0IsRUFHTEMsTUFISyxDQUdFVixLQUFLLENBQUNXLFdBQU4sR0FBb0IsR0FIdEI7QUFGTSxHQUFoQjtBQU9BLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xuQjtBQURLLEtBREY7QUFJTG9CLGNBQVUsRUFBRSxLQUFLLEVBQUwsR0FBVSxFQUpqQixDQUlxQjs7QUFKckIsR0FBUDtBQU1ELENBbEJNIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFN1YnNjcmliZUJ1dHRvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvblwiO1xuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0cmlwZVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2hvbWUubW9kdWxlLnNjc3NcIjtcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIHByb2R1Y3Q6IHtcbiAgICBwcmljZUlEOiBzdHJpbmc7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwcm9kdWN0IH06IEhvbWVQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhvbWUgfCBpZy5uZXdzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRDb250YWluZXJ9PlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvfT5cbiAgICAgICAgICA8c3Bhbj7wn5GPIEhleSwgd2VsY29tZTwvc3Bhbj5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICBOZXdzIGFib3V0IHRoZSA8c3Bhbj5SZWFjdDwvc3Bhbj4gd29ybGQuXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEdldCBhY2VzcyB0byBhbGwgdGhlIHB1YmxpY2F0aW9ucyA8YnIgLz5cbiAgICAgICAgICAgIDxzcGFuPmZvciB7cHJvZHVjdC5hbW91bnR9IG1vbnRoPC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8U3Vic2NyaWJlQnV0dG9uIHByaWNlSUQ9e3Byb2R1Y3QucHJpY2VJRH0gLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYXZhdGFyLnN2Z1wiIGFsdD1cIkdpcmwgY29kZGluZ1wiIC8+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHByaWNlID0gYXdhaXQgc3RyaXBlLnByaWNlcy5yZXRyaWV2ZShcInByaWNlXzFJZm9TbEhmekpiWFBIWVdPczZ0R0llVVwiLCB7XG4gICAgZXhwYW5kOiBbXCJwcm9kdWN0XCJdLFxuICB9KTtcblxuICBjb25zdCBwcm9kdWN0ID0ge1xuICAgIHByaWNlSUQ6IHByaWNlLmlkLFxuICAgIGFtb3VudDogbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIiwge1xuICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcbiAgICAgIGN1cnJlbmN5OiBcIlVTRFwiLFxuICAgIH0pLmZvcm1hdChwcmljZS51bml0X2Ftb3VudCAvIDEwMCksXG4gIH07XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3QsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogMjQsIC8vIDI0IGhvdXJzXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/*! exports provided: api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"api\", function() { return api; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: \"/api\"\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYXBpLnRzPzBlOWQiXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsR0FBRyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDOUJDLFNBQU8sRUFBRTtBQURxQixDQUFiLENBQVoiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogXCIvYXBpXCIsXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/stripe-js.ts":
/*!***********************************!*\
  !*** ./src/services/stripe-js.ts ***!
  \***********************************/
/*! exports provided: getStipeJs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStipeJs\", function() { return getStipeJs; });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getStipeJs() {\n  const stripeJs = await Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__[\"loadStripe\"])(\"pk_test_51IfoOvHfzJbXPHYWm62LZtVFRnwZDQjB2eMxjTu2v9X7gFm1GNqw4NDO8dFLAyGtzmCVTMI54Jb4LlEDOwJ8XDca00BOuTMzY3\");\n  return stripeJs;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc3RyaXBlLWpzLnRzP2Q4YWMiXSwibmFtZXMiOlsiZ2V0U3RpcGVKcyIsInN0cmlwZUpzIiwibG9hZFN0cmlwZSIsInByb2Nlc3MiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxlQUFlQSxVQUFmLEdBQTRCO0FBQ2pDLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxvRUFBVSxDQUFDQyw2R0FBRCxDQUFqQztBQUVBLFNBQU9GLFFBQVA7QUFDRCIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9zdHJpcGUtanMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGlwZUpzKCkge1xuICBjb25zdCBzdHJpcGVKcyA9IGF3YWl0IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJQ19LRVkpO1xuXG4gIHJldHVybiBzdHJpcGVKcztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/stripe-js.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/*! exports provided: stripe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stripe\", function() { return stripe; });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ \"./package.json\", 1);\n\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0___default.a(process.env.STRIPE_API_KEY, {\n  apiVersion: \"2020-08-27\",\n  appInfo: {\n    name: \"Ignews\",\n    version: _package_json__WEBPACK_IMPORTED_MODULE_1__[\"version\"]\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2Q5NjgiXSwibmFtZXMiOlsic3RyaXBlIiwiU3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIiwidmVyc2lvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyw2Q0FBSixDQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsY0FBdkIsRUFBdUM7QUFDM0RDLFlBQVUsRUFBRSxZQUQrQztBQUUzREMsU0FBTyxFQUFFO0FBQ1BDLFFBQUksRUFBRSxRQURDO0FBRVBDLGtFQUFPQTtBQUZBO0FBRmtELENBQXZDLENBQWYiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tIFwic3RyaXBlXCI7XG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSBcIi4uLy4uL3BhY2thZ2UuanNvblwiO1xuXG5leHBvcnQgY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShwcm9jZXNzLmVudi5TVFJJUEVfQVBJX0tFWSwge1xuICBhcGlWZXJzaW9uOiBcIjIwMjAtMDgtMjdcIixcbiAgYXBwSW5mbzoge1xuICAgIG5hbWU6IFwiSWduZXdzXCIsXG4gICAgdmVyc2lvbixcbiAgfSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@stripe/stripe-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3RyaXBlL3N0cmlwZS1qc1wiPzk3ODkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHN0cmlwZS9zdHJpcGUtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3RyaXBlL3N0cmlwZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@stripe/stripe-js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCI/ZDNiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/client\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stripe\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJpcGVcIj9mNWFiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN0cmlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmlwZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///stripe\n");

/***/ })

/******/ });