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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-content.module.css */ \"./components/ui/Post-Detail-Page/post-content.module.css\");\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_post_content_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _PostHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostHeader */ \"./components/ui/Post-Detail-Page/PostHeader.jsx\");\n\n\n\n\n\nfunction PostContent(props) {\n    const { post } = props;\n    const imagePath = \"/images/posts/\".concat(post.slug, \"/\").concat(post.image);\n    const customRenderers = {\n        image (image) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/images/posts/\".concat(post.slug, \"/\").concat(image.src),\n                alt: image.alt,\n                width: 600,\n                height: 300\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Post-Detail-Page\\\\PostContent.jsx\",\n                lineNumber: 14,\n                columnNumber: 20\n            }, this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: (_post_content_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: post.title,\n                image: imagePath\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Post-Detail-Page\\\\PostContent.jsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                components: customRenderers,\n                children: post.content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Post-Detail-Page\\\\PostContent.jsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Post-Detail-Page\\\\PostContent.jsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_c = PostContent;\nvar _c;\n$RefreshReg$(_c, \"PostContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL1Bvc3QtRGV0YWlsLVBhZ2UvUG9zdENvbnRlbnQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDWTtBQUNHO0FBQ1I7QUFFdkIsU0FBU0ksWUFBWUMsS0FBSztJQUVyQyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHRDtJQUVqQixNQUFNRSxZQUFZLGlCQUE4QkQsT0FBYkEsS0FBS0UsSUFBSSxFQUFDLEtBQWMsT0FBWEYsS0FBS0csS0FBSztJQUUxRCxNQUFNQyxrQkFBa0I7UUFDcEJELE9BQU1BLEtBQUs7WUFDUCxxQkFBTyw4REFBQ1QsbURBQUtBO2dCQUFDVyxLQUFLLGlCQUE4QkYsT0FBYkgsS0FBS0UsSUFBSSxFQUFDLEtBQWEsT0FBVkMsTUFBTUUsR0FBRztnQkFBSUMsS0FBS0gsTUFBTUcsR0FBRztnQkFBRUMsT0FBTztnQkFBS0MsUUFBUTs7Ozs7O1FBQ3RHO0lBQ0o7SUFHQSxxQkFDSSw4REFBQ0M7UUFBUUMsV0FBV2QseUVBQWE7OzBCQUM3Qiw4REFBQ0MsbURBQVVBO2dCQUFDZSxPQUFPWixLQUFLWSxLQUFLO2dCQUFFVCxPQUFPRjs7Ozs7OzBCQUN0Qyw4REFBQ04sc0RBQWFBO2dCQUFDa0IsWUFBWVQ7MEJBQ3RCSixLQUFLVyxPQUFPOzs7Ozs7Ozs7Ozs7QUFJN0I7S0FyQndCYiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL1Bvc3QtRGV0YWlsLVBhZ2UvUG9zdENvbnRlbnQuanN4PzViYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xyXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vcG9zdC1jb250ZW50Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFBvc3RIZWFkZXIgZnJvbSBcIi4vUG9zdEhlYWRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdENvbnRlbnQocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCB7IHBvc3QgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IGltYWdlUGF0aCA9IGAvaW1hZ2VzL3Bvc3RzLyR7cG9zdC5zbHVnfS8ke3Bvc3QuaW1hZ2V9YDtcclxuXHJcbiAgICBjb25zdCBjdXN0b21SZW5kZXJlcnMgPSB7XHJcbiAgICAgICAgaW1hZ2UoaW1hZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxJbWFnZSBzcmM9e2AvaW1hZ2VzL3Bvc3RzLyR7cG9zdC5zbHVnfS8ke2ltYWdlLnNyY31gfSBhbHQ9e2ltYWdlLmFsdH0gd2lkdGg9ezYwMH0gaGVpZ2h0PXszMDB9IC8+XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e1N0eWxlLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8UG9zdEhlYWRlciB0aXRsZT17cG9zdC50aXRsZX0gaW1hZ2U9e2ltYWdlUGF0aH0gLz5cclxuICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gY29tcG9uZW50cz17Y3VzdG9tUmVuZGVyZXJzfT5cclxuICAgICAgICAgICAgICAgIHtwb3N0LmNvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvUmVhY3RNYXJrZG93bj5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3RNYXJrZG93biIsIlN0eWxlIiwiUG9zdEhlYWRlciIsIlBvc3RDb250ZW50IiwicHJvcHMiLCJwb3N0IiwiaW1hZ2VQYXRoIiwic2x1ZyIsImltYWdlIiwiY3VzdG9tUmVuZGVyZXJzIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiY29udGVudCIsInRpdGxlIiwiY29tcG9uZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/Post-Detail-Page/PostContent.jsx\n"));

/***/ })

});