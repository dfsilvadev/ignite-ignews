/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscriberButton\": function() { return /* binding */ SubscriberButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/danielsilva/Documents/Ignite/ignite-ignews/src/components/SubscribeButton/index.tsx\";\n\n\nfunction SubscriberButton({\n  priceId\n}) {\n  const [session] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n\n  function handleSubscriber() {\n    if (!session) {\n      (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.signin)(\"github\");\n      return;\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n    type: \"button\",\n    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().subscribe),\n    onClick: handleSubscriber,\n    children: \"Subscribe now\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25pLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL2luZGV4LnRzeD9lZjFkIl0sIm5hbWVzIjpbIlN1YnNjcmliZXJCdXR0b24iLCJwcmljZUlkIiwic2Vzc2lvbiIsInVzZVNlc3Npb24iLCJoYW5kbGVTdWJzY3JpYmVyIiwic2lnbmluIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTU8sU0FBU0EsZ0JBQVQsQ0FBMEI7QUFBRUM7QUFBRixDQUExQixFQUE4RDtBQUNuRSxRQUFNLENBQUNDLE9BQUQsSUFBWUMsNERBQVUsRUFBNUI7O0FBRUEsV0FBU0MsZ0JBQVQsR0FBNEI7QUFDMUIsUUFBSSxDQUFDRixPQUFMLEVBQWM7QUFDWkcsOERBQU0sQ0FBQyxRQUFELENBQU47QUFDQTtBQUNEO0FBQ0Y7O0FBRUQsc0JBQ0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGFBQVMsRUFBRUMsc0VBRmI7QUFHRSxXQUFPLEVBQUVGLGdCQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWduaW4sIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcblxuaW50ZXJmYWNlIFN1YnNjcmliZXJCdXR0b25Qcm9wcyB7XG4gIHByaWNlSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN1YnNjcmliZXJCdXR0b24oeyBwcmljZUlkIH06IFN1YnNjcmliZXJCdXR0b25Qcm9wcykge1xuICBjb25zdCBbc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3Vic2NyaWJlcigpIHtcbiAgICBpZiAoIXNlc3Npb24pIHtcbiAgICAgIHNpZ25pbihcImdpdGh1YlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3Vic2NyaWJlfVxuICAgICAgb25DbGljaz17aGFuZGxlU3Vic2NyaWJlcn1cbiAgICA+XG4gICAgICBTdWJzY3JpYmUgbm93XG4gICAgPC9idXR0b24+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/danielsilva/Documents/Ignite/ignite-ignews/src/pages/index.tsx\";\n\n\n\n\nfunction Home({\n  product\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Home | ig.news\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().display),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: \"\\uD83D\\uDC4F Hey, welcome!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: [\"News about \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 24\n          }, this), \"the \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"React\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 17\n          }, this), \" world.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [\"Get acess to all the publications \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 47\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: [\"for \", product.amount, \" month\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__.SubscriberButton, {\n          priceId: product.priceId\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: \"/images/avatar.svg\",\n        alt: \"Girl coding\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\nconst getStaticProps = async () => {\n  const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.prices.retrieve(\"price_1IfoSlHfzJbXPHYWOs6tGIeU\", {\n    expand: [\"product\"]\n  });\n  const product = {\n    priceId: price.id,\n    amount: new Intl.NumberFormat(\"en-US\", {\n      style: \"currency\",\n      currency: \"USD\"\n    }).format(price.unit_amount / 100)\n  };\n  return {\n    props: {\n      product\n    },\n    revalidate: 60 * 60 * 24 // 24 hours\n\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25pLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9kdWN0Iiwic3R5bGVzIiwiYW1vdW50IiwicHJpY2VJZCIsImdldFN0YXRpY1Byb3BzIiwicHJpY2UiLCJzdHJpcGUiLCJleHBhbmQiLCJpZCIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0IiwidW5pdF9hbW91bnQiLCJwcm9wcyIsInJldmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVNlLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBc0M7QUFDbkQsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBTSxlQUFTLEVBQUVDLG9FQUFqQjtBQUFBLDhCQUNFO0FBQVMsaUJBQVMsRUFBRUEsa0VBQXBCO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLGlEQUNhO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRGIsdUJBRU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBTUU7QUFBQSx3RUFDb0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEcEMsZUFFRTtBQUFBLCtCQUFXRCxPQUFPLENBQUNFLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsZUFVRSw4REFBQyx5RUFBRDtBQUFrQixpQkFBTyxFQUFFRixPQUFPLENBQUNHO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFhRTtBQUFLLFdBQUcsRUFBQyxvQkFBVDtBQUE4QixXQUFHLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUEsa0JBREY7QUFzQkQ7QUFFTSxNQUFNQyxjQUE4QixHQUFHLFlBQVk7QUFDeEQsUUFBTUMsS0FBSyxHQUFHLE1BQU1DLG9FQUFBLENBQXVCLGdDQUF2QixFQUF5RDtBQUMzRUMsVUFBTSxFQUFFLENBQUMsU0FBRDtBQURtRSxHQUF6RCxDQUFwQjtBQUlBLFFBQU1QLE9BQU8sR0FBRztBQUNkRyxXQUFPLEVBQUVFLEtBQUssQ0FBQ0csRUFERDtBQUVkTixVQUFNLEVBQUUsSUFBSU8sSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO0FBQ3JDQyxXQUFLLEVBQUUsVUFEOEI7QUFFckNDLGNBQVEsRUFBRTtBQUYyQixLQUEvQixFQUdMQyxNQUhLLENBR0VSLEtBQUssQ0FBQ1MsV0FBTixHQUFvQixHQUh0QjtBQUZNLEdBQWhCO0FBUUEsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTGY7QUFESyxLQURGO0FBSUxnQixjQUFVLEVBQUUsS0FBSyxFQUFMLEdBQVUsRUFKakIsQ0FJcUI7O0FBSnJCLEdBQVA7QUFNRCxDQW5CTSIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVyQnV0dG9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uXCI7XG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tIFwiLi4vc2VydmljZXMvc3RyaXBlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaG9tZS5tb2R1bGUuc2Nzc1wiO1xuXG5pbnRlcmZhY2UgSG9tZVByb3BzIHtcbiAgcHJvZHVjdDoge1xuICAgIHByaWNlSWQ6IHN0cmluZztcbiAgICBhbW91bnQ6IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHByb2R1Y3QgfTogSG9tZVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SG9tZSB8IGlnLm5ld3M8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZGlzcGxheX0+XG4gICAgICAgICAgPHNwYW4+8J+RjyBIZXksIHdlbGNvbWUhPC9zcGFuPlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIE5ld3MgYWJvdXQgPGJyIC8+XG4gICAgICAgICAgICB0aGUgPHNwYW4+UmVhY3Q8L3NwYW4+IHdvcmxkLlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBHZXQgYWNlc3MgdG8gYWxsIHRoZSBwdWJsaWNhdGlvbnMgPGJyIC8+XG4gICAgICAgICAgICA8c3Bhbj5mb3Ige3Byb2R1Y3QuYW1vdW50fSBtb250aDwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPFN1YnNjcmliZXJCdXR0b24gcHJpY2VJZD17cHJvZHVjdC5wcmljZUlkfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9hdmF0YXIuc3ZnXCIgYWx0PVwiR2lybCBjb2RpbmdcIiAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwcmljZSA9IGF3YWl0IHN0cmlwZS5wcmljZXMucmV0cmlldmUoXCJwcmljZV8xSWZvU2xIZnpKYlhQSFlXT3M2dEdJZVVcIiwge1xuICAgIGV4cGFuZDogW1wicHJvZHVjdFwiXSxcbiAgfSk7XG5cbiAgY29uc3QgcHJvZHVjdCA9IHtcbiAgICBwcmljZUlkOiBwcmljZS5pZCxcbiAgICBhbW91bnQ6IG5ldyBJbnRsLk51bWJlckZvcm1hdChcImVuLVVTXCIsIHtcbiAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gICAgICBjdXJyZW5jeTogXCJVU0RcIixcbiAgICB9KS5mb3JtYXQocHJpY2UudW5pdF9hbW91bnQgLyAxMDApLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3QsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogMjQsIC8vIDI0IGhvdXJzXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": function() { return /* binding */ stripe; }\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n  apiVersion: \"2020-08-27\",\n  appInfo: {\n    name: \"Ignews\",\n    version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25pLy4vc3JjL3NlcnZpY2VzL3N0cmlwZS50cz9kOTY4Il0sIm5hbWVzIjpbInN0cmlwZSIsIlN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfQVBJX0tFWSIsImFwaVZlcnNpb24iLCJhcHBJbmZvIiwibmFtZSIsInZlcnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUEsTUFBTSxHQUFHLElBQUlDLCtDQUFKLENBQVdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxjQUF2QixFQUF1QztBQUMzREMsWUFBVSxFQUFFLFlBRCtDO0FBRTNEQyxTQUFPLEVBQUU7QUFDUEMsUUFBSSxFQUFFLFFBREM7QUFFUEMsV0FBT0E7QUFGQTtBQUZrRCxDQUF2QyxDQUFmIiwiZmlsZSI6Ii4vc3JjL3NlcnZpY2VzL3N0cmlwZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiO1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gXCIuLi8uLi9wYWNrYWdlLmpzb25cIjtcblxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX0FQSV9LRVksIHtcbiAgYXBpVmVyc2lvbjogXCIyMDIwLTA4LTI3XCIsXG4gIGFwcEluZm86IHtcbiAgICBuYW1lOiBcIklnbmV3c1wiLFxuICAgIHZlcnNpb24sXG4gIH0sXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"subscribe\": \"styles_subscribe__3gBhT\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25pLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL3N0eWxlcy5tb2R1bGUuc2Nzcz80NGE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL3N0eWxlcy5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1YnNjcmliZVwiOiBcInN0eWxlc19zdWJzY3JpYmVfXzNnQmhUXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"home_container__2W4Hx\",\n\t\"display\": \"home_display__1cyjr\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25pLy4vc3JjL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3M/NWFkMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJob21lX2NvbnRhaW5lcl9fMlc0SHhcIixcblx0XCJkaXNwbGF5XCI6IFwiaG9tZV9kaXNwbGF5X18xY3lqclwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/home.module.scss\n");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"igni","version":"0.1.0","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start"},"dependencies":{"faunadb":"^4.3.0","next":"10.2.2","next-auth":"^3.23.3","react":"17.0.2","react-dom":"17.0.2","react-icons":"^4.2.0","sass":"^1.34.0","stripe":"^8.149.0"},"devDependencies":{"@types/next-auth":"^3.15.0","@types/node":"^15.6.0","@types/react":"^17.0.6","typescript":"^4.2.4"}}');

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("stripe");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();