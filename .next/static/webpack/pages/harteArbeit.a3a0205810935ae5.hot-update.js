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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BilderListe; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _jsondb_pictures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsondb/pictures */ \"./jsondb/pictures.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction BilderListe() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bilderDiv\",\n        children: _jsondb_pictures__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pictures.map((picture)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"einzelBild\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/produkte/\".concat(picture.url),\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            variant: \"top\",\n                            src: picture.bild,\n                            width: 260,\n                            height: 200,\n                            alt: \"Skizze\",\n                            class: \"border border-white\"\n                        }, void 0, false, {\n                            fileName: \"/Users/johannkirr/Dev/Tiny-House/komponenten/BilderListe.js\",\n                            lineNumber: 14,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/johannkirr/Dev/Tiny-House/komponenten/BilderListe.js\",\n                        lineNumber: 13,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        class: \"card-text border border-1 border-dark shadow\",\n                        style: {\n                            backgroundColor: \"white\",\n                            display: \" flex\",\n                            overflow: \"hidden\",\n                            width: \"250px\"\n                        },\n                        children: picture.title\n                    }, void 0, false, {\n                        fileName: \"/Users/johannkirr/Dev/Tiny-House/komponenten/BilderListe.js\",\n                        lineNumber: 16,\n                        columnNumber: 19\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/johannkirr/Dev/Tiny-House/komponenten/BilderListe.js\",\n                lineNumber: 12,\n                columnNumber: 17\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/johannkirr/Dev/Tiny-House/komponenten/BilderListe.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = BilderListe;\nvar _c;\n$RefreshReg$(_c, \"BilderListe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9rb21wb25lbnRlbi9CaWxkZXJMaXN0ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQXVDO0FBQ1Q7QUFDRjtBQUdiLFNBQVNHLGNBQWM7SUFFcEMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBRU5MLHFFQUFtQixDQUFDLENBQUNRLHdCQUNsQiw4REFBQ0o7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDSCxrREFBSUE7d0JBQUNPLE1BQU0sYUFBeUIsT0FBWkQsUUFBUUUsR0FBRzt3QkFBSUMsUUFBUTtrQ0FDNUMsNEVBQUNWLG1EQUFLQTs0QkFBQ1csU0FBUTs0QkFBTUMsS0FBS0wsUUFBUU0sSUFBSTs0QkFBRUMsT0FBTzs0QkFBS0MsUUFBUTs0QkFBS0MsS0FBSTs0QkFBU0MsT0FBTTs7Ozs7Ozs7Ozs7a0NBRTFGLDhEQUFDQzt3QkFBR0QsT0FBTTt3QkFBK0NFLE9BQU87NEJBQUNDLGlCQUFpQjs0QkFBU0MsU0FBUTs0QkFBU0MsVUFBVTs0QkFBVVIsT0FBTTt3QkFBTztrQ0FBSVAsUUFBUWdCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhMLENBQUM7S0FoQnVCckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4va29tcG9uZW50ZW4vQmlsZGVyTGlzdGUuanM/ZDc1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQganNvbmRiIGZyb20gJy4uL2pzb25kYi9waWN0dXJlcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpbGRlckxpc3RlKCkge1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmlsZGVyRGl2Jz5cbiAgICAgICBcbiAgICAgICAgICAgIHtqc29uZGIucGljdHVyZXMubWFwKChwaWN0dXJlKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlaW56ZWxCaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVrdGUvJHtwaWN0dXJlLnVybH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSB2YXJpYW50PVwidG9wXCIgc3JjPXtwaWN0dXJlLmJpbGR9IHdpZHRoPXsyNjB9IGhlaWdodD17MjAwfSBhbHQ9XCJTa2l6emVcIiBjbGFzcz1cImJvcmRlciBib3JkZXItd2hpdGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4gICBcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGV4dCBib3JkZXIgYm9yZGVyLTEgYm9yZGVyLWRhcmsgc2hhZG93XCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiwgZGlzcGxheTpcIiBmbGV4XCIsIG92ZXJmbG93OiBcImhpZGRlblwiLCB3aWR0aDpcIjI1MHB4XCJ9fT57cGljdHVyZS50aXRsZX08L2g1PiAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICApKX1cbiAgICAgICAgXG4gICAgPC9kaXY+IFxuICApXG59XG5cbiJdLCJuYW1lcyI6WyJqc29uZGIiLCJJbWFnZSIsIkxpbmsiLCJCaWxkZXJMaXN0ZSIsImRpdiIsImNsYXNzTmFtZSIsInBpY3R1cmVzIiwibWFwIiwicGljdHVyZSIsImhyZWYiLCJ1cmwiLCJwYXNzSHJlZiIsInZhcmlhbnQiLCJzcmMiLCJiaWxkIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJjbGFzcyIsImg1Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5Iiwib3ZlcmZsb3ciLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./komponenten/BilderListe.js\n"));

/***/ })

});