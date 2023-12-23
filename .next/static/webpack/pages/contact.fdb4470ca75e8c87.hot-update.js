"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./components/ui/Contact-Page/ContactForm.jsx":
/*!****************************************************!*\
  !*** ./components/ui/Contact-Page/ContactForm.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-form.module.css */ \"./components/ui/Contact-Page/contact-form.module.css\");\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nasync function sendContactData(newMessage) {\n    const res = await fetch(\"/api/contact\", {\n        method: \"POST\",\n        body: JSON.stringify(newMessage),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    if (!res.ok) {\n        throw new Error(data.message || \"Someting went wrong...\");\n    }\n    const data = await res.json();\n}\nfunction ContactForm() {\n    _s();\n    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const messageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [requestStatus, setRequestStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    async function sendMessageHandler(e) {\n        e.preventDefault();\n        const email = emailRef.current.value;\n        const name = nameRef.current.value;\n        const message = messageRef.current.value;\n        const newMessage = {\n            email,\n            name,\n            message\n        };\n        setRequestStatus(\"pending\");\n        try {\n            await sendContactData(newMessage);\n            setRequestStatus(\"success\");\n        } catch (error) {\n            setRequestStatus(\"error\");\n        }\n    }\n    let notification;\n    if (requestStatus === \"pending\") {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().contact),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"How can I help you?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                onSubmit: sendMessageHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().controls),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"email\",\n                                        children: \"Your Email\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        id: \"email\",\n                                        required: true,\n                                        ref: emailRef\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"name\",\n                                        children: \"Your Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"name\",\n                                        required: true,\n                                        ref: nameRef\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"message\",\n                                children: \"Your Message\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"message\",\n                                rows: 5,\n                                ref: messageRef,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().actions),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Send Message\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, this);\n}\n_s(ContactForm, \"cPeW0wVUbsHjw9g9hGgftYCpDxc=\");\n_c = ContactForm;\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL0NvbnRhY3QtUGFnZS9Db250YWN0Rm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0s7QUFFOUMsZUFBZUcsZ0JBQWdCQyxVQUFVO0lBQ3JDLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxnQkFBZ0I7UUFDcENDLFFBQVE7UUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDTjtRQUNyQk8sU0FBUztZQUNMLGdCQUFnQjtRQUNwQjtJQUNKO0lBRUEsSUFBSSxDQUFDTixJQUFJTyxFQUFFLEVBQUU7UUFDVCxNQUFNLElBQUlDLE1BQU1DLEtBQUtDLE9BQU8sSUFBSTtJQUNwQztJQUVBLE1BQU1ELE9BQU8sTUFBTVQsSUFBSVcsSUFBSTtBQUUvQjtBQUVlLFNBQVNDOztJQUVwQixNQUFNQyxXQUFXbEIsNkNBQU1BO0lBQ3ZCLE1BQU1tQixVQUFVbkIsNkNBQU1BO0lBQ3RCLE1BQU1vQixhQUFhcEIsNkNBQU1BO0lBRXpCLE1BQU0sQ0FBQ3FCLGVBQWVDLGlCQUFpQixHQUFHckIsK0NBQVFBLENBQUM7SUFFbkQsZUFBZXNCLG1CQUFtQkMsQ0FBQztRQUMvQkEsRUFBRUMsY0FBYztRQUVoQixNQUFNQyxRQUFRUixTQUFTUyxPQUFPLENBQUNDLEtBQUs7UUFDcEMsTUFBTUMsT0FBT1YsUUFBUVEsT0FBTyxDQUFDQyxLQUFLO1FBQ2xDLE1BQU1iLFVBQVVLLFdBQVdPLE9BQU8sQ0FBQ0MsS0FBSztRQUV4QyxNQUFNeEIsYUFBYTtZQUNmc0I7WUFDQUc7WUFDQWQ7UUFDSjtRQUVBTyxpQkFBaUI7UUFDakIsSUFBSTtZQUNBLE1BQU1uQixnQkFBZ0JDO1lBQ3RCa0IsaUJBQWlCO1FBQ3JCLEVBQUUsT0FBT1EsT0FBTztZQUNaUixpQkFBaUI7UUFDckI7SUFFSjtJQUVBLElBQUlTO0lBRUosSUFBSVYsa0JBQWtCLFdBQVcsQ0FFakM7SUFFQSxxQkFDSSw4REFBQ1c7UUFBUUMsV0FBVy9CLHlFQUFhOzswQkFDN0IsOERBQUNpQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0gsV0FBVy9CLHNFQUFVO2dCQUFFbUMsVUFBVWQ7O2tDQUNuQyw4REFBQ2U7d0JBQUlMLFdBQVcvQiwwRUFBYzs7MENBQzFCLDhEQUFDb0M7Z0NBQUlMLFdBQVcvQix5RUFBYTs7a0RBQ3pCLDhEQUFDdUM7d0NBQU1DLFNBQVE7a0RBQVE7Ozs7OztrREFDdkIsOERBQUNDO3dDQUFNQyxNQUFLO3dDQUFRQyxJQUFHO3dDQUFRQyxRQUFRO3dDQUFDQyxLQUFLN0I7Ozs7Ozs7Ozs7OzswQ0FFakQsOERBQUNvQjtnQ0FBSUwsV0FBVy9CLHlFQUFhOztrREFDekIsOERBQUN1Qzt3Q0FBTUMsU0FBUTtrREFBTzs7Ozs7O2tEQUN0Qiw4REFBQ0M7d0NBQU1DLE1BQUs7d0NBQU9DLElBQUc7d0NBQU9DLFFBQVE7d0NBQUNDLEtBQUs1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUduRCw4REFBQ21CO3dCQUFJTCxXQUFXL0IseUVBQWE7OzBDQUN6Qiw4REFBQ3VDO2dDQUFNQyxTQUFROzBDQUFVOzs7Ozs7MENBQ3pCLDhEQUFDTTtnQ0FBU0gsSUFBRztnQ0FBVUksTUFBTTtnQ0FBR0YsS0FBSzNCO2dDQUFZMEIsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUc3RCw4REFBQ1I7d0JBQUlMLFdBQVcvQix5RUFBYTtrQ0FDekIsNEVBQUNpRDtzQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUI7R0E5RHdCbEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9Db250YWN0LVBhZ2UvQ29udGFjdEZvcm0uanN4PzBhZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vY29udGFjdC1mb3JtLm1vZHVsZS5jc3NcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlbmRDb250YWN0RGF0YShuZXdNZXNzYWdlKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvY29udGFjdFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdNZXNzYWdlKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiU29tZXRpbmcgd2VudCB3cm9uZy4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xyXG5cclxuICAgIGNvbnN0IGVtYWlsUmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBuYW1lUmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBtZXNzYWdlUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gICAgY29uc3QgW3JlcXVlc3RTdGF0dXMsIHNldFJlcXVlc3RTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2VIYW5kbGVyKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gZW1haWxSZWYuY3VycmVudC52YWx1ZTtcclxuICAgICAgICBjb25zdCBuYW1lID0gbmFtZVJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBtZXNzYWdlUmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld01lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhcInBlbmRpbmdcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgc2VuZENvbnRhY3REYXRhKG5ld01lc3NhZ2UpO1xyXG4gICAgICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFwiZXJyb3JcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBsZXQgbm90aWZpY2F0aW9uO1xyXG5cclxuICAgIGlmIChyZXF1ZXN0U3RhdHVzID09PSBcInBlbmRpbmdcIikge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17U3R5bGUuY29udGFjdH0+XHJcbiAgICAgICAgICAgIDxoMT5Ib3cgY2FuIEkgaGVscCB5b3U/PC9oMT5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtTdHlsZS5mb3JtfSBvblN1Ym1pdD17c2VuZE1lc3NhZ2VIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb250cm9sc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+WW91ciBFbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcmVxdWlyZWQgcmVmPXtlbWFpbFJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPllvdXIgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHJlcXVpcmVkIHJlZj17bmFtZVJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPllvdXIgTWVzc2FnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwibWVzc2FnZVwiIHJvd3M9ezV9IHJlZj17bWVzc2FnZVJlZn0gcmVxdWlyZWQgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYWN0aW9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5TZW5kIE1lc3NhZ2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlN0eWxlIiwic2VuZENvbnRhY3REYXRhIiwibmV3TWVzc2FnZSIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwib2siLCJFcnJvciIsImRhdGEiLCJtZXNzYWdlIiwianNvbiIsIkNvbnRhY3RGb3JtIiwiZW1haWxSZWYiLCJuYW1lUmVmIiwibWVzc2FnZVJlZiIsInJlcXVlc3RTdGF0dXMiLCJzZXRSZXF1ZXN0U3RhdHVzIiwic2VuZE1lc3NhZ2VIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJuYW1lIiwiZXJyb3IiLCJub3RpZmljYXRpb24iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiY29udGFjdCIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiZGl2IiwiY29udHJvbHMiLCJjb250cm9sIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZXF1aXJlZCIsInJlZiIsInRleHRhcmVhIiwicm93cyIsImFjdGlvbnMiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ui/Contact-Page/ContactForm.jsx\n"));

/***/ })

});