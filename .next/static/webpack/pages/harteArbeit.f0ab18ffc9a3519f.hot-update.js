"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/harteArbeit",{

/***/ "./komponenten/BilderListe.js":
/*!************************************!*\
  !*** ./komponenten/BilderListe.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BilderListe; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _jsondb_pictures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsondb/pictures */ \"./jsondb/pictures.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction BilderListe() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bilderDiv\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row row-cols-3 p-5\",\n                children: _jsondb_pictures__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pictures.map((picture)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-1 col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/produkte/\".concat(picture.url),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    variant: \"top\",\n                                    src: picture.bild,\n                                    width: 260,\n                                    height: 200,\n                                    alt: \"Skizze\",\n                                    class: \"border border-white\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johannkirr/Dev/Tiny-House/komponenten/BilderListe.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 26\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/johannkirr/Dev/Tiny-House/komponenten/BilderListe.js\",\n                                lineNumber: 13,\n                                columnNumber: 24\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card-body\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    class: \"card-text border border-1 border-dark shadow mt-1\",\n                                    style: {\n                                        backgroundColor: \"white\",\n                                        display: \" flex\",\n                                        overflow: \"hidden\",\n                                        width: \"250px\"\n                                    },\n                                    children: picture.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/johannkirr/Dev/Tiny-House/komponenten/BilderListe.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 27\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/johannkirr/Dev/Tiny-House/komponenten/BilderListe.js\",\n                                lineNumber: 16,\n                                columnNumber: 24\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/johannkirr/Dev/Tiny-House/komponenten/BilderListe.js\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/johannkirr/Dev/Tiny-House/komponenten/BilderListe.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/johannkirr/Dev/Tiny-House/komponenten/BilderListe.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/johannkirr/Dev/Tiny-House/komponenten/BilderListe.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = BilderListe;\nvar _c;\n$RefreshReg$(_c, \"BilderListe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9rb21wb25lbnRlbi9CaWxkZXJMaXN0ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQXVDO0FBQ1Q7QUFDRjtBQUdiLFNBQVNHLGNBQWM7SUFFcEMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDVkwscUVBQW1CLENBQUMsQ0FBQ1Esd0JBQ2xCLDhEQUFDSjt3QkFBSUMsV0FBVTs7MENBQ1IsOERBQUNILGtEQUFJQTtnQ0FBQ08sTUFBTSxhQUF5QixPQUFaRCxRQUFRRSxHQUFHO2dDQUFJQyxRQUFROzBDQUM5Qyw0RUFBQ1YsbURBQUtBO29DQUFDVyxTQUFRO29DQUFNQyxLQUFLTCxRQUFRTSxJQUFJO29DQUFFQyxPQUFPO29DQUFLQyxRQUFRO29DQUFLQyxLQUFJO29DQUFTQyxPQUFNOzs7Ozs7Ozs7OzswQ0FFdEYsOERBQUNkO2dDQUFJQyxXQUFVOzBDQUNaLDRFQUFDYztvQ0FBR0QsT0FBTTtvQ0FBb0RFLE9BQU87d0NBQUNDLGlCQUFpQjt3Q0FBU0MsU0FBUTt3Q0FBU0MsVUFBVTt3Q0FBVVIsT0FBTTtvQ0FBTzs4Q0FBSVAsUUFBUWdCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3ZMLDhEQUFDQzs7Ozs7Ozs7Ozs7QUFHUCxDQUFDO0tBbkJ1QnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2tvbXBvbmVudGVuL0JpbGRlckxpc3RlLmpzP2Q3NWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpzb25kYiBmcm9tICcuLi9qc29uZGIvcGljdHVyZXMnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaWxkZXJMaXN0ZSgpIHtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2JpbGRlckRpdic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1jb2xzLTMgcC01XCI+XG4gICAgICAgICAgICB7anNvbmRiLnBpY3R1cmVzLm1hcCgocGljdHVyZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMSBjb2xcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVrdGUvJHtwaWN0dXJlLnVybH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgdmFyaWFudD1cInRvcFwiIHNyYz17cGljdHVyZS5iaWxkfSB3aWR0aD17MjYwfSBoZWlnaHQ9ezIwMH0gYWx0PVwiU2tpenplXCIgY2xhc3M9XCJib3JkZXIgYm9yZGVyLXdoaXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGV4dCBib3JkZXIgYm9yZGVyLTEgYm9yZGVyLWRhcmsgc2hhZG93IG10LTFcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLCBkaXNwbGF5OlwiIGZsZXhcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsIHdpZHRoOlwiMjUwcHhcIn19PntwaWN0dXJlLnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPGJyPjwvYnI+XG4gICAgPC9kaXY+IFxuICApXG59XG5cbiJdLCJuYW1lcyI6WyJqc29uZGIiLCJJbWFnZSIsIkxpbmsiLCJCaWxkZXJMaXN0ZSIsImRpdiIsImNsYXNzTmFtZSIsInBpY3R1cmVzIiwibWFwIiwicGljdHVyZSIsImhyZWYiLCJ1cmwiLCJwYXNzSHJlZiIsInZhcmlhbnQiLCJzcmMiLCJiaWxkIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJjbGFzcyIsImg1Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5Iiwib3ZlcmZsb3ciLCJ0aXRsZSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./komponenten/BilderListe.js\n"));

/***/ })

});