"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./components/ui/Post-Detail-Page/PostContent.jsx":
/*!********************************************************!*\
  !*** ./components/ui/Post-Detail-Page/PostContent.jsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-content.module.css */ \"./components/ui/Post-Detail-Page/post-content.module.css\");\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_post_content_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _PostHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostHeader */ \"./components/ui/Post-Detail-Page/PostHeader.jsx\");\n\n\n\n\n\n\nfunction PostContent(props) {\n    const { post } = props;\n    const imagePath = \"/images/posts/\".concat(post.slug, \"/\").concat(post.image);\n    const customRenderers = {\n        img (image) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/images/posts/\".concat(post.slug, \"/\").concat(image.src),\n                alt: image.alt,\n                width: 600,\n                height: 300\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Post-Detail-Page\\\\PostContent.jsx\",\n                lineNumber: 16,\n                columnNumber: 17\n            }, this);\n        },\n        code (code) {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: (_post_content_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: post.title,\n                image: imagePath\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Post-Detail-Page\\\\PostContent.jsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                components: customRenderers,\n                children: post.content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Post-Detail-Page\\\\PostContent.jsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Post-Detail-Page\\\\PostContent.jsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_c = PostContent;\nvar _c;\n$RefreshReg$(_c, \"PostContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL1Bvc3QtRGV0YWlsLVBhZ2UvUG9zdENvbnRlbnQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDWTtBQUNHO0FBQ1I7QUFDVztBQUVsQyxTQUFTSyxZQUFZQyxLQUFLO0lBRXJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdEO0lBRWpCLE1BQU1FLFlBQVksaUJBQThCRCxPQUFiQSxLQUFLRSxJQUFJLEVBQUMsS0FBYyxPQUFYRixLQUFLRyxLQUFLO0lBRTFELE1BQU1DLGtCQUFrQjtRQUNwQkMsS0FBSUYsS0FBSztZQUNMLHFCQUNJLDhEQUFDVixtREFBS0E7Z0JBQUNhLEtBQUssaUJBQThCSCxPQUFiSCxLQUFLRSxJQUFJLEVBQUMsS0FBYSxPQUFWQyxNQUFNRyxHQUFHO2dCQUFJQyxLQUFLSixNQUFNSSxHQUFHO2dCQUFFQyxPQUFPO2dCQUFLQyxRQUFROzs7Ozs7UUFFbkc7UUFDQUMsTUFBS0EsSUFBSSxHQUVUO0lBQ0o7SUFHQSxxQkFDSSw4REFBQ0M7UUFBUUMsV0FBV2pCLHlFQUFhOzswQkFDN0IsOERBQUNDLG1EQUFVQTtnQkFBQ2tCLE9BQU9kLEtBQUtjLEtBQUs7Z0JBQUVYLE9BQU9GOzs7Ozs7MEJBQ3RDLDhEQUFDUCxzREFBYUE7Z0JBQUNxQixZQUFZWDswQkFDdEJKLEtBQUthLE9BQU87Ozs7Ozs7Ozs7OztBQUk3QjtLQTFCd0JmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvUG9zdC1EZXRhaWwtUGFnZS9Qb3N0Q29udGVudC5qc3g/NWJiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XHJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9wb3N0LWNvbnRlbnQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgUG9zdEhlYWRlciBmcm9tIFwiLi9Qb3N0SGVhZGVyXCI7XHJcbmltcG9ydCB7IFByaXNtIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdENvbnRlbnQocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCB7IHBvc3QgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IGltYWdlUGF0aCA9IGAvaW1hZ2VzL3Bvc3RzLyR7cG9zdC5zbHVnfS8ke3Bvc3QuaW1hZ2V9YDtcclxuXHJcbiAgICBjb25zdCBjdXN0b21SZW5kZXJlcnMgPSB7XHJcbiAgICAgICAgaW1nKGltYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtgL2ltYWdlcy9wb3N0cy8ke3Bvc3Quc2x1Z30vJHtpbWFnZS5zcmN9YH0gYWx0PXtpbWFnZS5hbHR9IHdpZHRoPXs2MDB9IGhlaWdodD17MzAwfSAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29kZShjb2RlKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtTdHlsZS5jb250ZW50fT5cclxuICAgICAgICAgICAgPFBvc3RIZWFkZXIgdGl0bGU9e3Bvc3QudGl0bGV9IGltYWdlPXtpbWFnZVBhdGh9IC8+XHJcbiAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIGNvbXBvbmVudHM9e2N1c3RvbVJlbmRlcmVyc30+XHJcbiAgICAgICAgICAgICAgICB7cG9zdC5jb250ZW50fVxyXG4gICAgICAgICAgICA8L1JlYWN0TWFya2Rvd24+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0TWFya2Rvd24iLCJTdHlsZSIsIlBvc3RIZWFkZXIiLCJQcmlzbSIsIlBvc3RDb250ZW50IiwicHJvcHMiLCJwb3N0IiwiaW1hZ2VQYXRoIiwic2x1ZyIsImltYWdlIiwiY3VzdG9tUmVuZGVyZXJzIiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJjb2RlIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsImNvbnRlbnQiLCJ0aXRsZSIsImNvbXBvbmVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ui/Post-Detail-Page/PostContent.jsx\n"));

/***/ })

});